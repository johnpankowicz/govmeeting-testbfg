import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
// import { MeetingService } from '../meeting.service-stub';
import { ViewTranscriptService } from '../viewtranscript.service';
import { UserchoiceService } from '../userchoice.service';
import { TopicDiscussion } from '../../../models_XXX/viewtranscript-view'

const NoLog = true;  // set to false for console logging

@Component({
  selector: 'gm-browse',
  templateUrl: './browse.html',
  styleUrls: ['./browse.css']
})
export class BrowseComponent implements OnInit {
  private ClassName: string = this.constructor.name + ": ";
  topicDiscussions: TopicDiscussion[];
  topics: string[];
  errorMessage: string;

    // TODO Add option to show context surounding what a specific person said

    /**
     * <summary>
     *  BrowseComponent Constructor.
     * </summary>
     * <param name="_meetingService">       The meeting service. </param>
     * <param name="_userChoiceSrv"> The user choice service. </param>
    **/
    constructor(private _viewMeetingService: ViewTranscriptService,
      private _userChoice: UserchoiceService) {
  }

  ngOnInit() {this.getTopicDiscussions();}

  getTopicDiscussions() {
      this._viewMeetingService.getMeeting(null)
      .subscribe(
      t => {
          this.topicDiscussions = t.topicDiscussions;
          NoLog || console.log(this.ClassName + this.topicDiscussions);
      },
      error => this.errorMessage = <any>error);
  }

    /**
     * <summary>
     *  Check whether to display this topic - only if it or "SHOW ALL" was selected.
     * </summary>
     * <param name="topicName"> Name of the topic. </param>
     * <returns>
     *  Returns true if this topic should be displayed
     * </returns>
    **/
    CheckShowTopic(topicName: string) {
      var _topic = this._userChoice.getTopic();
      NoLog || console.log(this.ClassName + "CheckShowTopic " + topicName + " " + _topic);
      return ((_topic === 'SHOW ALL') || (_topic === topicName));
  }

  /**
   * <summary>
   *  Check whether to display this speaker - only if it or "SHOW ALL" was selected.
   * </summary>
   * <param name="speakerName">   Name of the speaker. </param>
   * <returns>
   *  Returns true if this speaker should be displayed
   * </returns>
  **/
  CheckShowSpeaker(speakerName: string) {
      var _speaker = this._userChoice.getSpeaker();
      NoLog || console.log(this.ClassName + "CheckShowSpeaker " + speakerName + " " + _speaker);
      return ((_speaker === 'SHOW ALL') || (_speaker === speakerName));
  }

}
