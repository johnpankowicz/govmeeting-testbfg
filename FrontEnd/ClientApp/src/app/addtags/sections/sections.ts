import { Component, OnInit } from '@angular/core';
import { AddtagsService } from '../addtags.service';

console.log = function() {}  // comment this out for console logging

@Component({
  selector: 'gm-sections',
  templateUrl: './sections.html',
  styleUrls: ['./sections.css'],
})
export class SectionsComponent implements OnInit {
  private ClassName: string = this.constructor.name;
    errorMessage: string;
    sections: string[];
    gotSections: boolean = false;

  constructor(private _addtagsService: AddtagsService) {
  }

    ngOnInit() { this.getSections(); }

getSections() {
  if (! this.gotSections) {
    this.gotSections = true;
    console.log(this.ClassName +'getSections');
    this._addtagsService.getTalks()
        .subscribe(
        addtags => {
            this.sections = addtags.sections;
            console.log(this.ClassName +this.sections);
        },
        error => this.errorMessage = <any>error);
      }
    }

 OnChange(newValue: any) {
  console.log(this.ClassName +newValue);
  }

  isEmptyObject(obj) {
    let prop;
    for (prop in obj) {
       if (obj.hasOwnProperty(prop)) {
          return false;
       }
    }
    return true;
  }

}

