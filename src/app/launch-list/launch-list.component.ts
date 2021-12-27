import {LaunchFacadeService} from "./../services/launch-facade.service";
import {Component, ChangeDetectionStrategy, OnInit} from "@angular/core";

@Component({
  selector: "app-launch-list",
  templateUrl: "./launch-list.component.html",
  styleUrls: ["./launch-list.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchListComponent implements OnInit {
  constructor(private readonly launchFacade: LaunchFacadeService) {
  }

  pastLaunches$ = this.launchFacade.pastLaunchListStoreCache();

  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  loadedArray = []
  pastLaunchesMapped;

  ngOnInit(): void {
    this.pastLaunches$.subscribe(data => {
      this.pastLaunchesMapped = data.map(x => {
        x.launch_date_utc = Math.floor((new Date().getTime() - new Date(x.launch_date_utc).getTime()) / 86400000) + " days ago";
        return x;
      });

    });
  }

  imageLoaded(index) {
    this.loadedArray.push(index);
  }

  imageNotLoaded(index) {
    this.loadedArray.push(index);
  }


}
