import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// We sill replace amcharts components with charts.js ones.

// import { AmgaugeComponent } from './gauge/gauge';
// import { PieChartComponent } from './pie-chart/pie-chart';
// import { BarChartComponent } from './bar-chart/bar-chart';

@NgModule({
  // declarations: [AmgaugeComponent, PieChartComponent, BarChartComponent],
  imports: [CommonModule],
  // exports: [AmgaugeComponent, PieChartComponent, BarChartComponent],
})
export class AmchartsModule {}
