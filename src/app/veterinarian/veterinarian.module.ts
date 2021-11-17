import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { VeterinarianRoutingModule } from './veterinarian-routing.module';
import { VeterinarianComponent } from './veterinarian.component';
import { VetDetailComponent } from './vet-detail/vet-detail.component';
import { VetListComponent } from './vet-list/vet-list.component';

@NgModule({
  declarations: [VeterinarianComponent, VetDetailComponent, VetListComponent],
  imports: [CommonModule, VeterinarianRoutingModule],
})
export class VeterinarianModule {}
