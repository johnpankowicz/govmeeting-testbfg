import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component'
import { HomedemoComponent } from '../homedemo/homedemo.component'
import { AboutComponent } from '../about/about.component';
import { MeetingComponent } from '../meeting/meeting.component'
import { AddtagsComponent } from '../addtags/addtags.component'
import { FixasrComponent } from '../fixasr/fixasr.component'
import { VolunteerComponent } from '../volunteer/volunteer.component'
import { ServerdemoComponent } from '../serverdemo/serverdemo.component'
//import { MatsampComponent } from '../matsamp/matsamp.component'

import { TestComponent } from '../test/test.component';

const routes: Routes = [

    { path: '', redirectTo: 'homedemo', pathMatch: 'full' },
    { path: 'homedemo', component: HomedemoComponent },
    { path: 'about', component: AboutComponent },
    { path: 'meeting', component: MeetingComponent },
    { path: 'addtags', component: AddtagsComponent },
    { path: 'fixasr', component: FixasrComponent },
    { path: 'home', component: HomeComponent },
    { path: 'volunteer', component: VolunteerComponent },
    { path: 'serverdemo', component: ServerdemoComponent },
    //{ path: 'matsamp', component: MatsampComponent },
    { path: 'test', component: TestComponent },
    { path: '**', redirectTo: 'homedemo' }

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }