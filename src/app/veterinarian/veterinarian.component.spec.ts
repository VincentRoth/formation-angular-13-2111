import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { VeterinarianComponent } from './veterinarian.component';

describe('VeterinarianComponent', () => {
  let component: VeterinarianComponent;
  let fixture: ComponentFixture<VeterinarianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VeterinarianComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeterinarianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
