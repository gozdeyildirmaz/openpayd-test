import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FaIconComponent, FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {MatCardModule} from '@angular/material';
import {RouterTestingModule} from '@angular/router/testing';
import {LaunchDetailsComponent} from './launch-details.component';

import {
  ApolloTestingModule,
  ApolloTestingController,
} from 'apollo-angular/testing';
import {provideMockStore} from "@ngrx/store/testing";

describe('LaunchDetailsComponent', () => {
  let controller: ApolloTestingController;
  let component: LaunchDetailsComponent;
  let fixture: ComponentFixture<LaunchDetailsComponent>;
  const initialState = {};
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LaunchDetailsComponent],
      imports: [
        RouterTestingModule,
        MatCardModule,
        FontAwesomeModule,
        ApolloTestingModule
      ],
      providers: [
        provideMockStore({ initialState }),
      ],
    }).compileComponents();

    controller = TestBed.get(ApolloTestingController);

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  afterEach(() => {
    fixture.destroy();
  });
});
