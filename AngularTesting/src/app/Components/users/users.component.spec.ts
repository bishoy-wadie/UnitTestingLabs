import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersComponent } from './users.component';
import { DemoService } from 'src/app/Services/demo.service';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let demoServices: DemoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    demoServices = TestBed.inject(DemoService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getAllUsers Function from service in ngOnInit', () => {
    spyOn(demoServices, 'getAllUsers');
    component.ngOnInit();
    expect(demoServices.getAllUsers).toHaveBeenCalled();
  });
});
