import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from '../../shared/api/animal';
import { AnimalService } from '../../shared/api/animal.service';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.scss'],
})
export class AnimalFormComponent implements OnInit {
  model: Animal;

  constructor(
    private animalService: AnimalService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      this.animalService.get(Number(id)).subscribe((data) => {
        this.model = data;
      });
    } else {
      this.model = {
        comment: undefined,
        email: undefined,
        name: undefined,
        phoneNumber: undefined,
        species: undefined,
        veterinarian: 'Panoramix',
      };
    }
  }

  onSubmit(): void {
    const onSuccess = () => {
      this.router.navigate(['/animals']);
    };

    if (this.model.id) {
      this.animalService.update(this.model).subscribe(onSuccess);
    } else {
      this.animalService.create(this.model).subscribe(onSuccess);
    }
  }
}
