import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GovInfoComponent } from '../features/gov-info/gov-info.component';
import { BillsComponent } from '../features/bills/bills.component';
import { MeetingsComponent } from '../features/meetings/meetings.component';
import { NewsComponent } from '../features/news/news.component';
// import { EditTranscriptModule } from '../features/edittranscript/edittranscript.module';
// import { ViewTranscriptModule } from '../features/viewtranscript/viewtranscript.module';
import { WorkitemsComponent } from '../features/workitems/workitems.component';
import { IssuesComponent } from '../features/issues/issues.component';
import { OfficialsComponent } from '../features/officials/officials.component';
import { NotesComponent } from '../features/notes/notes.component';
import { MinutesComponent } from '../features/minutes/minutes.component';
import { AlertsComponent } from '../features/alerts/alerts.component';
// import { WorkareaComponent } from '../work_experiments/workarea/workarea.component';
import { RegisterGovBodyComponent } from './register-gov-body/register-gov-body.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    /////////////// external //////////////
    // RouterModule.forRoot([]),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    // ViewTranscriptModule,
    // EditTranscriptModule
    GovInfoComponent,
    BillsComponent,
    MeetingsComponent,
    NewsComponent,
    WorkitemsComponent,
    IssuesComponent,
    OfficialsComponent,
    AlertsComponent,
    // WorkareaComponent,
    RegisterGovBodyComponent,

    // For counties
    NotesComponent,
    MinutesComponent,
  ],
  exports: [
    // ViewTranscriptModule,
    // EditTranscriptModule
    GovInfoComponent,
    BillsComponent,
    MeetingsComponent,
    NewsComponent,
    WorkitemsComponent,
    IssuesComponent,
    OfficialsComponent,
    AlertsComponent,
    // WorkareaComponent,
    RegisterGovBodyComponent,

    // For counties
    NotesComponent,
    MinutesComponent,
  ],
})
export class FeaturesModule {}
