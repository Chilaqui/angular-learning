import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Padre } from './padre';

describe('Padre', () => {
  let component: Padre;
  let fixture: ComponentFixture<Padre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Padre]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Padre);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
