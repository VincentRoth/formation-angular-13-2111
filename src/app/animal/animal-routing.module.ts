import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RightGuard } from '../shared/auth/right.guard';
import { AnimalFormComponent } from './animal-form/animal-form.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { AnimalRootComponent } from './animal-root/animal-root.component';
import { AnimalComponent } from './animal/animal.component';

const routes: Routes = [
  {
    path: 'animals',
    component: AnimalRootComponent,
    canActivate: [RightGuard],
    data: { right: 'ANIMAL_GET' },
    children: [
      { path: '', component: AnimalListComponent },
      { path: 'new', component: AnimalFormComponent },
      { path: 'edit/:id', component: AnimalFormComponent },
      { path: ':id', component: AnimalComponent },
      { path: '**', component: AnimalListComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalRoutingModule {}
