import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { VeterinarianRoutingModule } from './veterinarian-routing.module';
import { VeterinarianComponent } from './veterinarian.component';
import { VetDetailComponent } from './vet-detail/vet-detail.component';
import { VetListComponent } from './vet-list/vet-list.component';
import { VetFormComponent } from './vet-form/vet-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    VeterinarianComponent,
    VetDetailComponent,
    VetListComponent,
    VetFormComponent,
  ],
  imports: [CommonModule, VeterinarianRoutingModule, ReactiveFormsModule],
})
export class VeterinarianModule {}
