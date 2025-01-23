import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutPageComponent } from './logout-page.component';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';

describe('LogoutPageComponent', () => {
  let component: LogoutPageComponent;
  let fixture: ComponentFixture<LogoutPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withInterceptorsFromDi())
      ],
      imports: [LogoutPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
