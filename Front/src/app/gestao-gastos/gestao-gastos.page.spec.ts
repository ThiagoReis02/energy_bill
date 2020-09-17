import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GestaoGastosPage } from './gestao-gastos.page';

describe('GestaoGastosPage', () => {
  let component: GestaoGastosPage;
  let fixture: ComponentFixture<GestaoGastosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestaoGastosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GestaoGastosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
