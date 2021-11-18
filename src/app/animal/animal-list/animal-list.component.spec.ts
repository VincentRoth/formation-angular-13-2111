import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { AnimalListComponent } from './animal-list.component';
import { AnimalItemComponent } from '../animal-item/animal-item.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AnimalListComponent', () => {
  let component: AnimalListComponent;
  let fixture: ComponentFixture<AnimalListComponent>;
  let httpCtrl: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnimalListComponent, AnimalItemComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
    }).compileComponents();
    httpCtrl = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not render empty animals', () => {
    const requestCtrl = httpCtrl.expectOne('/api/animals');
    expect(requestCtrl.request.method).toEqual('GET');

    requestCtrl.flush([]);

    httpCtrl.verify();

    const template = fixture.nativeElement as HTMLElement;
    expect(template.querySelectorAll('li')?.length).toBe(0);
  });
});
