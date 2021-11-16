import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { Animal } from '../../shared/api/animal';
import { AnimalService } from '../../shared/api/animal.service';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss'],
})
export class AnimalComponent implements OnInit, OnDestroy {
  animal: Animal;
  private suscription: Subscription;

  constructor(
    private animalService: AnimalService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.suscription = this.activatedRoute.paramMap.subscribe(
      (paramMap: ParamMap) => {
        const id = Number(paramMap.get('id'));

        this.animalService.get(id).subscribe((data: Animal) => {
          this.animal = data;
        });
      }
    );
  }

  ngOnDestroy(): void {
    this.suscription?.unsubscribe();
  }
}
