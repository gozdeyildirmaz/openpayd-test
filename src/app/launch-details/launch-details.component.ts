import {Component, ChangeDetectionStrategy} from "@angular/core";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {map, switchMap} from "rxjs/operators";
import {LaunchDetailsGQL} from "../services/spacexGraphql.service";
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {Location} from '@angular/common';
import {LaunchFacadeService} from "../services/launch-facade.service";

@Component({
  selector: "app-launch-details",
  templateUrl: "./launch-details.component.html",
  styleUrls: ["./launch-details.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchDetailsComponent {
  constructor(
    private readonly route: ActivatedRoute,
    private readonly launchDetailsService: LaunchDetailsGQL,
    private location: Location,
    private readonly launchFacade: LaunchFacadeService
  ) {
  }

  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  currentIndex = -1;
  maxIndex;
  launchDetails$ = this.launchFacade.launchDetailStoreCache( { id: this.route.snapshot.params.id});

  // launchDetails$ = this.route.paramMap.pipe(
  //   map(params => params.get("id") as string),
  //   switchMap(id => this.launchDetailsService.fetch({id})),
  //   map(res => {
  //     this.maxIndex = res.data.launch.links.flickr_images.length - 1;
  //     return res.data.launch
  //   })
  // );

  goBack() {
    this.location.back();
  }

  goLeft() {
    if (this.currentIndex > -1)
      this.currentIndex--;
  }

  goRight() {
    if (this.currentIndex < this.maxIndex && this.maxIndex - this.currentIndex > 1) {
      this.currentIndex++;
    }

  }
}
