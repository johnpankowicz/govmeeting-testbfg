import { Component, OnInit } from '@angular/core';

class Section {
  constructor(public id: number, public name: string) {}
}

@Component({
  selector: 'gm-workarea',
  templateUrl: './workarea.component.html',
  styleUrls: ['./workarea.component.scss'],
})
export class WorkareaComponent implements OnInit {
  sections = [
    new Section(1, 'Invocation'),
    new Section(2, 'Approval of Journal'),
    new Section(3, 'Leaves of Absense'),
    new Section(4, 'Presentations'),
    new Section(5, 'Communications'),
    new Section(6, 'Introductions of Bills'),
    new Section(7, 'Reports'),
    new Section(8, 'Bills on Second Reading'),
    new Section(9, 'Public Comment'),
    new Section(10, 'Second Reading'),
    new Section(11, 'Invocation'),
    new Section(12, 'Approval of Journal'),
    new Section(13, 'Leaves of Absense'),
    new Section(14, 'Presentations'),
    new Section(15, 'Communications'),
    new Section(16, 'Introductions of Bills'),
    new Section(17, 'Reports'),
    new Section(18, 'Bills on Second Reading'),
    new Section(19, 'Public Comment'),
    new Section(20, 'Second Reading'),
    new Section(21, 'Invocation'),
    new Section(22, 'Approval of Journal'),
    new Section(23, 'Leaves of Absense'),
    new Section(24, 'Presentations'),
    new Section(25, 'Communications'),
    new Section(26, 'Introductions of Bills'),
    new Section(27, 'Reports'),
    new Section(28, 'Bills on Second Reading'),
    new Section(29, 'Public Comment'),
    new Section(30, 'Second Reading'),
    new Section(31, 'Invocation'),
    new Section(32, 'Approval of Journal'),
    new Section(33, 'Leaves of Absense'),
    new Section(34, 'Presentations'),
    new Section(35, 'Communications'),
    new Section(36, 'Introductions of Bills'),
    new Section(37, 'Reports'),
    new Section(38, 'Bills on Second Reading'),
    new Section(39, 'Public Comment'),
    new Section(40, 'Second Reading'),
    new Section(41, 'Invocation'),
    new Section(42, 'Approval of Journal'),
    new Section(43, 'Leaves of Absense'),
    new Section(44, 'Presentations'),
    new Section(45, 'Communications'),
    new Section(46, 'Introductions of Bills'),
    new Section(47, 'Reports'),
    new Section(48, 'Bills on Second Reading'),
    new Section(49, 'Public Comment'),
    new Section(50, 'Second Reading'),
  ];

  list: HTMLElement;
  listTop: number;
  listBot: number;
  listScrollTop: number;
  listOffsetTop: number;
  headerHeight = 0;
  pos01: number;
  pos25: number;
  pos50: number;
  itemTop: number;
  itemScrollTop: number;
  itemOffsetTop: number;
  newST: number;
  gnewST: number;

  listOffsetHeight: number;
  constructor() {}

  ngOnInit() {
    this.list = document.getElementById('scrolltext') as HTMLElement;

    const rect = this.list.getBoundingClientRect();
    // 8 properties: top, left, right, bottom, x, y, width, height
    // left + width == right
    // top + height == bottom
    // x == left; y == top;

    // Box Model: https://www.w3schools.com/css/css_boxmodel.asp

    this.listTop = Math.round(rect.top);
    // The top property sets or returns the top position of a positioned element.
    // The top property includes padding, scrollbar, border and margin.

    this.listScrollTop = Math.round(this.list.scrollTop);
    // gets or sets the number of pixels that an element's content is scrolled vertically.

    this.listOffsetTop = Math.round(this.list.offsetTop);
    // offsetTop = # of pixels from top of closest relatively positioned parent element.
    // It's a read-only property, the distance of the outer border of the
    //    current element relative to the inner border of the top of the
    //    offsetParent node.

    // offsetParent: nearest ancestor that has a position other than static.

    // Static positioned elements are not affected by the top, bottom, left, and right properties.
    // An element with position static is not positioned in any special way.
    // It is always positioned according to the normal flow of the page:

    this.listOffsetHeight = this.list.offsetHeight;
  }

  ///////// button click handlers ////////////////////////////////

  onGetListInfo() {
    this.listScrollTop = Math.round(this.list.scrollTop);
    this.listOffsetTop = Math.round(this.list.offsetTop);
    const rect = this.list.getBoundingClientRect();
    this.listTop = Math.round(rect.top);
    this.listOffsetTop = this.list.offsetHeight;
  }

  onSetScrollTop() {
    this.list.scrollTop = this.listScrollTop;
  }

  getItemInfo(item: Section) {
    this.onGetListInfo();
    const section = 'section' + item.id;
    const elem: Element = document.querySelector('#' + section);
    const helem: HTMLElement = document.querySelector('#' + section) as HTMLElement;
    this.itemScrollTop = Math.round(elem.scrollTop);
    this.itemOffsetTop = Math.round(helem.offsetTop);
    this.itemTop = Math.round(elem.getBoundingClientRect().top);
    this.gnewST = this.itemTop - this.listTop;
  }

  scrollToTarget(item: Section) {
    const section = 'section' + item.id;
    const elem: HTMLElement = document.querySelector('#' + section) as HTMLElement;
    const itemOffsetTop = Math.round(elem.offsetTop);
    const listOffsetTop = Math.round(this.list.offsetTop);
    this.list.scrollTop = itemOffsetTop - listOffsetTop;

    // this.itemTop  = Math.round(elem.getBoundingClientRect().top);
    // let rect = this.list.getBoundingClientRect();
    // this.listTop = Math.round(rect.top);
    // this.newST = this.itemTop - this.listTop;
    // this.list.scrollTop = this.itemTop - this.listTop;
    // elem.scrollIntoView();
  }

  scrollToValue(value: string) {
    this.list.scrollTop = parseInt(value, 10);
  }

  ////////////////// unused    //////////////////////////

  // Get top of bounding rectangle of specified element with id.
  // getPosition(id: string) {
  //   const elem: Element = document.querySelector(id);
  //   const rect = elem.getBoundingClientRect();
  //   return Math.round(rect.top);
  // }

  /////////////////  unused /////////////////////////////////////////////

  // showPositions() {
  //   this.pos01 = this.getPosition('#section1');
  //   this.pos25 = this.getPosition('#section25');
  //   this.pos50 = this.getPosition('#section50');
  //   this.listTop = this.getPosition('#scrolltext');
  //   this.listBot = Math.round(this.list.getBoundingClientRect().bottom);
  // }

  // scrollMyDiv(item: Section) {
  //   const section = 'section' + item.id;

  //   window.scroll(0, 0); // reset window to top

  //   // const elem: HTMLElement = document.getElementById('#' + section);
  //   const elem: Element = document.querySelector('#' + section);
  //   const elemTop: number = Math.round(elem.getBoundingClientRect().top);

  //   const totalscroll = elemTop - this.listTop;
  //   this.list.scrollTop = elemTop - this.listTop;
  //   // window.scroll(0, offsetTop);
  // }

  // passEl(elem: Element) {
  //   const sTop: number = Math.round(elem.scrollTop);
  //   const x = elem.getAttribute('id');
  //   const y: string = elem.innerHTML;
  // }

  // scroll(amount: number) {
  //   this.list.scrollTop = amount;
  //   this.showPositions();
  // }
}
