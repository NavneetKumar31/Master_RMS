import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantLandingComponent } from './restaurant-landing.component';

describe('RestaurantLandingComponent', () => {
  let component: RestaurantLandingComponent;
  let fixture: ComponentFixture<RestaurantLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
