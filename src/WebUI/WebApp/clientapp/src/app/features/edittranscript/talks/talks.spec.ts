import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { Component, Input, Output, EventEmitter } from '@angular/core';

import { EdittranscriptService } from '../edittranscript.service';
import { EditTranscript, EditTranscriptSample } from '../../../models/sample-data/edittranscript-sample';
import { TalksComponent } from './talks';
import { Talk } from '../../../models/addtags-view';

// Create a stub for EdittranscriptService
class ServiceStub {
  public getTalks(): Observable<EditTranscript> {
    return of(EditTranscriptSample);
  }
}

// Create a stub for nested TopicsComponent
@Component({ selector: 'gm-topicset', template: '' })
class TopicsComponent {
  @Input() newTopicName: string | undefined;
  @Output() topicSelect: any = new EventEmitter<string>();
  @Output() topicEnter: any = new EventEmitter<string>();
}

describe('TalksComponent', () => {
  let component: TalksComponent;
  let fixture: ComponentFixture<TalksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TalksComponent, TopicsComponent],
      providers: [{ provide: EdittranscriptService, useClass: ServiceStub }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
