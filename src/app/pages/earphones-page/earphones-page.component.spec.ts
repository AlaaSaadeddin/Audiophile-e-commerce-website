import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarphonesPageComponent } from './earphones-page.component';

describe('EarphonesPageComponent', () => {
  let component: EarphonesPageComponent;
  let fixture: ComponentFixture<EarphonesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarphonesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EarphonesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
