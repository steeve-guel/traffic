import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTrafficGestionComponent } from './user-traffic-gestion.component';

describe('UserTrafficGestionComponent', () => {
  let component: UserTrafficGestionComponent;
  let fixture: ComponentFixture<UserTrafficGestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserTrafficGestionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserTrafficGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
