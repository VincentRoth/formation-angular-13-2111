import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VetDetailComponent } from './vet-detail/vet-detail.component';
import { VetFormComponent } from './vet-form/vet-form.component';
import { VetListComponent } from './vet-list/vet-list.component';
import { VeterinarianComponent } from './veterinarian.component';

const routes: Routes = [
  {
    path: '',
    component: VeterinarianComponent,
    children: [
      { path: '', component: VetListComponent },
      { path: 'new', component: VetFormComponent },
      { path: 'edit/:id', component: VetFormComponent },
      { path: ':id', component: VetDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VeterinarianRoutingModule {}
