import { Injectable } from '@angular/core';

// These are routines used navigating the text to be edited:
//      selectFirstWord
//      selectLastWord
//      insertAtStartCurrentWord
//      insertAtEndCurrentWord
//      insertText
//      getStartCurrentWord
//      getEndCurrentWord
//      insertIntoString

console.log = function() {}  // comment this out for console logging

@Injectable()
export class FixasrUtilities {
  private ClassName: string = this.constructor.name;
    public selectWord(ele: HTMLInputElement) {
        var start = ele.selectionStart;
        var end = ele.selectionEnd;
        var content = ele.value;
        var contentLen = content.length;
        console.log(this.ClassName +'selectWord start=' + start + '   end=' + end);

        // If they actually selected some text, ignore
        // This also ignores a prior select that we set here. This has
        // the effect of toggling the select on a word by clicking
        // on it multiple times.
        if (start !== end) {
          console.log(this.ClassName +'selectWord ignore if current select');
           return;
        }

        // find start of word
        while (start > 0 && this.isNotSpace(content.charAt(start -1))) {
          start--;
        }
        // find end of word
        while (end < contentLen && this.isNotSpace(content.charAt(end))) {
          end++;
        }

        // Unless it's a one-letter word, if they clicked at start or end of text, ignore.
        //if (start + 1 != end) {
        //    if ((start == 0) || (start == contentLen) ||
        //        (content.charAt(start) == " ") || (content.charAt(start - 1) == " ")) {
        //        console.log(this.ClassName +'selectWord ignore if start or end of word');
        //        return;
        //    }
        //}

        ele.setSelectionRange(start, end);
        console.log(this.ClassName +'selectWord newstart=' + start + '   newend=' + end);
   }

    public selectFirstWord(ele: HTMLInputElement) {
        ele.setSelectionRange(1, 1);
        this.selectWord(ele);
        ele.focus();
    }

    public selectLastWord(ele: HTMLInputElement) {
        var len = ele.value.length;
        ele.setSelectionRange(len - 1, len - 1);
        this.selectWord(ele);
        ele.focus();
    }

    public insertAtStartCurrentWord(ele: HTMLInputElement, t: string) {
      var pos = this.getStartCurrentWord(ele);
      this.insertText(ele, pos, t);
    }

    public insertAtEndCurrentWord(ele: HTMLInputElement, t: string) {
      var pos = this.getEndCurrentWord(ele);
      this.insertText(ele, pos, t);
    }

    public insertText(ele: HTMLInputElement, pos: number, t: string) {
      var content = ele.value;
      ele.value = this.insertIntoString(content, pos, t);
    }

    public getStartCurrentWord(ele: HTMLInputElement): number {
        var start = ele.selectionStart;
        var content = ele.value;
        while (start > 0 && this.isNotSpace(content.charAt(start - 1))) {
            start--;
        }
        return start;
    }

    public getEndCurrentWord(ele: HTMLInputElement): number {
        var end = ele.selectionEnd;
        var content = ele.value;
        var contentLen = content.length;
        while (end < contentLen && this.isNotSpace(content.charAt(end))) {
            end++;
        }
        return end;
    }

    public insertIntoString(s: string, pos: number, i: string): string {
        return s.slice(0, pos) + i + s.slice(pos);
    }

   public gotoNextWord(ele : HTMLInputElement) {
        var end : number = ele.selectionEnd;
        ele.setSelectionRange(end + 2, end + 2);
        this.selectWord(ele);
    }

   public gotoPriorWord(ele : HTMLInputElement) {
        var start : number = ele.selectionStart;
        ele.setSelectionRange(start - 2, start - 2);
        this.selectWord(ele);
    }

    // For the casting being done in the next 3 methods, see:
    //  https://stackoverflow.com/questions/45415000/typescript-children-on-nodes

   public gotoNextInputElement(ele : HTMLInputElement, i : number) {
        // ele is this <input> element. ele.parentElement is the <div> enclosing just this <input>.
        // That <div>'s nextSibling is the <div> whose sole child is the next <input>.
         // cast to HTMLElement because  we trust it is never null.
       let nextSibling = <Element> (<HTMLElement>ele.parentElement).nextSibling;
        var next : HTMLInputElement = <HTMLInputElement>(nextSibling.children[0]);
        console.log(this.ClassName +next.value);

        if (typeof next.setSelectionRange !== 'undefined') {
            this.selectFirstWord(next);
        }
    }

   public gotoPriorInputElement(ele : HTMLInputElement, i : number) {
        // if on first element, just return
        if (i === 0) {
            this.selectFirstWord(ele);
            return;
        }
        // cast to HTMLElement because  we trust it is never null.
        let previousSibling = <Element>(<HTMLElement>ele.parentElement).previousSibling;
        var prior : HTMLInputElement = <HTMLInputElement>(previousSibling.children[0]);
        if (typeof prior.setSelectionRange !== 'undefined') {
            this.selectFirstWord(prior);
        }
    }

   public gotoLastWordInPriorInputElement(ele : HTMLInputElement, i : number) {
        // if on first element, select first word in this element
        if (i === 0) {
            this.selectFirstWord(ele);
            return;
        }

        // cast to HTMLElement because  we trust it is never null.
        let previousSibling = <Element>(<HTMLElement>ele.parentElement).previousSibling;
        var prior : HTMLInputElement = <HTMLInputElement>(previousSibling.children[0]);
        if (typeof prior.setSelectionRange !== 'undefined') {
            this.selectLastWord(prior);
        }
    }

   public isNotSpace(ch: string) {
        return (ch !== ' ');
   }

   public isAlphaNum(ch: string) {
       var code = ch.charCodeAt(0);
        if (!(code > 47 && code < 58) && // numeric (0-9)
            !(code > 64 && code < 91) && // upper alpha (A-Z)
            !(code > 96 && code < 123)) { // lower alpha (a-z)
        return false;
        }
        return true;
   }

}
