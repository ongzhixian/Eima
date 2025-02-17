import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationListPageComponent } from './configuration-list-page.component';

describe('ConfigurationListPageComponent', () => {
  let component: ConfigurationListPageComponent;
  let fixture: ComponentFixture<ConfigurationListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigurationListPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigurationListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
