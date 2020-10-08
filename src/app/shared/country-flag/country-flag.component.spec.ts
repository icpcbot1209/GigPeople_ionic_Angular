import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CountryFlagComponent } from './country-flag.component';

describe('CountryFlagComponent', () => {
  let component: CountryFlagComponent;
  let fixture: ComponentFixture<CountryFlagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryFlagComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CountryFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
