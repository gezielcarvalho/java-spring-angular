import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarIconComponent } from './sidebar-icon.component';

describe('SidebarIconComponent', () => {
  let component: SidebarIconComponent;
  let fixture: ComponentFixture<SidebarIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarIconComponent]
    });
    fixture = TestBed.createComponent(SidebarIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
