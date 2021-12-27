import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MatCardModule, MatProgressSpinnerModule} from '@angular/material';

import { LaunchListComponent } from './launch-list.component';
import {RouterTestingModule} from "@angular/router/testing";
import {provideMockStore} from "@ngrx/store/testing";
import {
  ApolloTestingModule,
  ApolloTestingController,
} from 'apollo-angular/testing';

describe('LaunchListComponent', () => {
  let controller: ApolloTestingController;
  let component: LaunchListComponent;
  let fixture: ComponentFixture<LaunchListComponent>;

  const initialState = {};
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchListComponent ],
      imports:[
        RouterTestingModule,
        MatCardModule,
        MatProgressSpinnerModule,
        ApolloTestingModule
      ],
      providers: [
        provideMockStore({ initialState }),
      ],
    })
    .compileComponents();
    controller = TestBed.get(ApolloTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
