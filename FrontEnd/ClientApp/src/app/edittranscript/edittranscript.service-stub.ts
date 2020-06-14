import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { EditTranscript, Talk, Word } from '../models/edittranscript-view';
import { ErrorHandlingService } from '../shared/error-handling/error-handling.service';
import { EditTranscriptSample } from './edittranscript-sample';

  const fromFile = true;
  const url = 'assets/stubdata/ToEditTranscript.json';
  // Use the jsonplaceholder service to test post requests
  const addtagsUrl = 'https://jsonplaceholder.typicode.com/posts'
  const NoLog = true;  // set to false for console logging

  @Injectable()
export class EdittranscriptServiceStub {
  private ClassName: string = this.constructor.name + ": ";
  private postId;
  private observable: Observable<EditTranscript>;

  public constructor(private http: HttpClient, private errHandling: ErrorHandlingService) {
    NoLog || console.log(this.ClassName + 'constructor');
  }

    public getTalks(): Observable<EditTranscript> {
      if (fromFile) {
        NoLog || console.log(this.ClassName + 'get from file');
        // TODO - handle null return. Here we just cast to the correct object type.
        this.observable = <Observable<EditTranscript>> this.http.get<EditTranscript>(url)
            .pipe(catchError(this.errHandling.handleError))
            .share();     // make it shared so more than one subscriber can get the same result.
        return this.observable;
      } else {
        NoLog || console.log(this.ClassName + 'get from memory');
        return of(EditTranscriptSample);
      }
    }

  public postChanges(addtags: EditTranscript) {
    NoLog || console.log(this.ClassName + 'postChanges');
    const headers = { 'Content-Type': 'application/json' }
      this.http.post<any>(addtagsUrl, addtags, { headers }).subscribe({
        next: data => {
          this.postId = data.id;
          NoLog || console.log(this.ClassName + data);
        },
        error: error => console.error('There was an error!', error)
      })
    }

}
