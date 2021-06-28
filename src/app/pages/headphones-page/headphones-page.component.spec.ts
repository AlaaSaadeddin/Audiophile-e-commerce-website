import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadphonesPageComponent } from './headphones-page.component';

describe('HeadphonesPageComponent', () => {
  let component: HeadphonesPageComponent;
  let fixture: ComponentFixture<HeadphonesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadphonesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadphonesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
