import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TataNexonComponent } from './tata-nexon.component';

describe('TataNexonComponent', () => {
  let component: TataNexonComponent;
  let fixture: ComponentFixture<TataNexonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TataNexonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TataNexonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
