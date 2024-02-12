import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsdisplayComponent } from './itemsdisplay.component';

describe('ItemsdisplayComponent', () => {
  let component: ItemsdisplayComponent;
  let fixture: ComponentFixture<ItemsdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemsdisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemsdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
