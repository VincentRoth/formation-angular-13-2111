import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { Veterinarian } from '../../shared/api/veterinarian';
import { VeterinarianService } from '../../shared/api/veterinarian.service';

@Component({
  selector: 'app-vet-detail',
  templateUrl: './vet-detail.component.html',
  styleUrls: ['./vet-detail.component.scss'],
})
export class VetDetailComponent implements OnInit, OnDestroy {
  vet: Veterinarian;
  private subscription: Subscription;

  constructor(
    private vetService: VeterinarianService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subscription = this.activatedRoute.paramMap.subscribe(
      (paramMap: ParamMap) => {
        const id = Number(paramMap.get('id'));

        this.vetService.get(id).subscribe((data: Veterinarian) => {
          this.vet = data;
        });
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
