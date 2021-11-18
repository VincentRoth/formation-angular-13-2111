import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { VeterinarianRoutingModule } from './veterinarian-routing.module';
import { VeterinarianComponent } from './veterinarian.component';
import { VetDetailComponent } from './vet-detail/vet-detail.component';
import { VetListComponent } from './vet-list/vet-list.component';
import { VetFormComponent } from './vet-form/vet-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    VeterinarianComponent,
    VetDetailComponent,
    VetListComponent,
    VetFormComponent,
  ],
  imports: [
    CommonModule,
    VeterinarianRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
})
export class VeterinarianModule {}
