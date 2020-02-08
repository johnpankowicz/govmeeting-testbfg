import { Component, OnInit } from '@angular/core';
import { ViewMeetingService } from '../viewmeeting.service';
import { UserchoiceService } from '../userchoice.service';

@Component({
  selector: 'gm-speakers',
  templateUrl: './speakers.html',
  styleUrls: ['./speakers.css']
})
export class SpeakersComponent implements OnInit {

  speakerNames: string[];
  errorMessage: string;
  selectedSpeaker: number = 0;

  constructor(private _viewMeetingService: ViewMeetingService,
      private _userChoice: UserchoiceService) { }

  ngOnInit() {
    this.getSpeakerNames();
    this._userChoice.setSpeaker('SHOW ALL');
}

  getSpeakerNames() {
    this._viewMeetingService.getMeeting(null)
    .subscribe(
    meeting => {
        this.speakerNames = meeting.speakerNames;
        // console.log(this.speakerNames);},
    },
    error => this.errorMessage = <any>error);
  }

  IsSelectedSpeaker(i: number) : boolean {
    return(this._userChoice.getSpeaker() === this.speakerNames[i]);
  }

  FilterBySpeaker(i: number) {
    this.selectedSpeaker = i;
    //console.log(this.speakerNames[i])
    this._userChoice.setSpeaker(this.speakerNames[i]);
    if (i!==0) {
        this._userChoice.setTopic('SHOW ALL');
    }
  }
}
