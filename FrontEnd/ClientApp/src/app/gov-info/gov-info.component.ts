import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserSettingsService, UserSettings, LocationType } from '../user-settings.service';

const NoLog = true;  // set to false for console logging

@Component({
  selector: 'gm-gov-info',
  templateUrl: './gov-info.component.html',
  styleUrls: ['./gov-info.component.scss']
})
export class GovInfoComponent implements OnInit {
  private ClassName: string = this.constructor.name + ": ";
  public location = '';
  public agency = '';
  subscription: Subscription;
  userSettingsService: UserSettingsService;

  constructor(private _userSettingsService: UserSettingsService) {
    this.userSettingsService = _userSettingsService;
   }

   ngOnInit() {
    this.userSettingsService.SettingsChangeAsObservable().subscribe(message => {
      // NoLog || console.log(this.ClassName + "receive message: " + message)
      let newSettings = this.userSettingsService.settings;
      NoLog || console.log(this.ClassName + "SCAO ", newSettings);
      this.location = newSettings.location;
      this.agency = newSettings.agency;
    })
  }

}
