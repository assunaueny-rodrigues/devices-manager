import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeviceFormModalComponent } from './form-modal.component';

describe('DeviceFormModalComponent', () => {
  let component: DeviceFormModalComponent;
  let fixture: ComponentFixture<DeviceFormModalComponent>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceFormModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
