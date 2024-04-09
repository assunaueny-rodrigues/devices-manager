import { TestBed, inject } from '@angular/core/testing';
import { DeviceController } from './device.controller';

describe('Controller: Devices', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeviceController]
    });
  });

  it('should ...', inject([DeviceController], (controller: DeviceController) => {
    expect(controller).toBeTruthy();
  }));
});
