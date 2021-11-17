import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Veterinarian } from '../../shared/api/veterinarian';
import { VeterinarianService } from '../../shared/api/veterinarian.service';

@Component({
  selector: 'app-vet-form',
  templateUrl: './vet-form.component.html',
  styleUrls: ['./vet-form.component.scss'],
})
export class VetFormComponent implements OnInit {
  vetFormGroup: FormGroup;
  private id: number;

  get firstNameCtrl(): FormControl {
    return this.vetFormGroup.get('firstName') as FormControl;
  }

  constructor(
    private vetService: VeterinarianService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      this.vetService.get(Number(id)).subscribe((data) => {
        this.id = data.id;
        this.initForm(data);
      });
    } else {
      this.initForm();
    }
  }

  onSubmit(): void {
    if (this.vetFormGroup.valid) {
      const model = this.vetFormGroup.value;
      const onSuccess = () => {
        this.router.navigate(['/veterinarians']);
      };

      if (this.id) {
        model.id = this.id;
        this.vetService.update(model).subscribe(onSuccess);
      } else {
        this.vetService.create(model).subscribe(onSuccess);
      }
    }
  }

  private initForm(model?: Veterinarian): void {
    this.vetFormGroup = new FormGroup({
      firstName: new FormControl(model?.firstName, Validators.required),
      lastName: new FormControl(model?.lastName, Validators.required),
    });
  }
}
