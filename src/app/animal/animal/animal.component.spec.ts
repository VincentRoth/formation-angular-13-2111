import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { AnimalComponent } from './animal.component';

describe('AnimalComponent', () => {
  let component: AnimalComponent;
  let fixture: ComponentFixture<AnimalComponent>;

  beforeEach(async () => {
    const paramMap = new Map();
    paramMap.set('id', 1);

    await TestBed.configureTestingModule({
      declarations: [AnimalComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of(paramMap),
            snapshot: {
              paramMap,
            },
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
