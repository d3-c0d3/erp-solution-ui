import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportItemsComponent } from './import-items.component';

describe('ImportItemsComponent', () => {
  let component: ImportItemsComponent;
  let fixture: ComponentFixture<ImportItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
