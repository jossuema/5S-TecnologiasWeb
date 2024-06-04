import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutacardComponent } from './rutacard.component';

describe('RutacardComponent', () => {
  let component: RutacardComponent;
  let fixture: ComponentFixture<RutacardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RutacardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RutacardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
