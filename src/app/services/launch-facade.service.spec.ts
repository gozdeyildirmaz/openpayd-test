import {TestBed} from '@angular/core/testing';

import {LaunchFacadeService} from './launch-facade.service';
import {provideMockStore} from "@ngrx/store/testing";
import {
  ApolloTestingModule,
  ApolloTestingController,
} from 'apollo-angular/testing';

const initialState = {};
describe('LaunchFacadeService', () => {
  let controller: ApolloTestingController;
  beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ApolloTestingModule], providers: [
          provideMockStore({initialState}),
        ]
      })
      controller = TestBed.get(ApolloTestingController);
    }
  );

  it('should be created', () => {
    const service: LaunchFacadeService = TestBed.get(LaunchFacadeService);
    expect(service).toBeTruthy();
  });
});
