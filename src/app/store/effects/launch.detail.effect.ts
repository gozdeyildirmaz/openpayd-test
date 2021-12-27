import {LaunchDetailsGQL} from "./../../services/spacexGraphql.service";
import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {
  loadLaunchDetail,
  loadLaunchDetailFail,
  loadLaunchDetailSuccess
} from "../actions";
import {catchError, map, switchMap} from "rxjs/operators";
import {of} from "rxjs";

@Injectable()
export class LaunchDetailEffects {
  constructor(
    private actions$: Actions,
    private readonly launchDetailsService: LaunchDetailsGQL,
  ) {
  }


  // launchDetails$ = this.route.paramMap.pipe(
  //   map(params => params.get("id") as string),
  //   switchMap(id => this.launchDetailsService.fetch({id})),
  //   map(res => {
  //     this.maxIndex = res.data.launch.links.flickr_images.length - 1;
  //     return res.data.launch
  //   })
  // );


  loadLaunchDetail$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(loadLaunchDetail),
      switchMap((param: any) =>
        this.launchDetailsService.fetch({id : param.id}).pipe(
          map((response: any) =>{
           return  loadLaunchDetailSuccess({
              payload: response.data.launch as any
            })}
          ),
          catchError(error => of(loadLaunchDetailFail(error)))
        )
      )
    )
  );


}
