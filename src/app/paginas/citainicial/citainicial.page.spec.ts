import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CitainicialPage } from './citainicial.page';

describe('CitainicialPage', () => {
  let component: CitainicialPage;
  let fixture: ComponentFixture<CitainicialPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CitainicialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
