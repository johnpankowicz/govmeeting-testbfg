import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
//import { TopicsService } from './topics.service';
import { EdittranscriptService } from '../edittranscript.service';

const NoLog = true;  // set to false for console logging

@Component({
    selector: 'gm-topicset',
    templateUrl: 'topics.html',
    styleUrls: ['topicset.component.css']
})
export class TopicsComponent implements OnInit {
  private ClassName: string = this.constructor.name + ": ";
    topics: string[];
    errorMessage: string;

    @Input() newTopicName: string | undefined;

    @Output() topicSelect: EventEmitter<string>;
    @Output() topicEnter: EventEmitter<string>;

    constructor(private _edittranscriptService: EdittranscriptService) {
        this.topicSelect = new EventEmitter<string>();
        this.topicEnter = new EventEmitter<string>();
        this.newTopicName = undefined;
    }

    // Call getTopics after Angular is done creating the component.
    ngOnInit() {this.getTopics();}

    getTopics() {
        this._edittranscriptService.getTalks()
        .subscribe(
            addtags => {
                this.topics = addtags.topics;
                NoLog || console.log(this.ClassName, this.topics);
            },
        error => this.errorMessage = <any>error);
    }

    // When the user select a topic, we raise the "topicSelect" event.
    // The parent component (TalksComponent) can then capture this event.
    OnChange(newValue: string) {
        this.topicSelect.emit(newValue);
        NoLog || console.log(this.ClassName + 'topicSelect ', newValue);
    }

    // When the user enters a new topic, we again raise the "topicSelect" event.
    // We get the new topic name from the bound "newTopicName" property.
    OnEnter() {
        this.topicSelect.emit(this.newTopicName);
        NoLog || console.log(this.ClassName + 'topicSelect ', this.newTopicName);
    }

}
