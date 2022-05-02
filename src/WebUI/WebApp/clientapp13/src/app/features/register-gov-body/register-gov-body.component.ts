import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterGovBodyService } from './register-gov-body.service';
import { IGovbody_Vm, IGovbodyDetails_Vm, IGovLocation_Vm, IOfficial_Vm } from '../../models/govbody-view';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'gm-register-gov-body',
  templateUrl: './register-gov-body.component.html',
  styleUrls: ['./register-gov-body.component.scss'],
})
export class RegisterGovBodyComponent implements OnInit {
  @Output() register = new EventEmitter<IGovbodyDetails_Vm>();

  form: FormGroup;
  gBService: RegisterGovBodyService;

  locations$: Observable<IGovLocation_Vm[]> = null;
  bodies$: Observable<IGovbody_Vm[]> = null;
  bodyDetails$: Observable<IGovbodyDetails_Vm> = null;

  bodyDetails: IGovbodyDetails_Vm;

  selectedLocation: IGovLocation_Vm;
  selectedBody: IGovbody_Vm;

  constructor(fb: FormBuilder, _gBService: RegisterGovBodyService) {
    this.form = fb.group({
      name: [null, [Validators.required]],
      officials: [null, [Validators.required]],
      officers: [null, [Validators.required]],
      recordingsUrl: [null, []],
      transcriptsUrl: [null, []],
    });
    this.gBService = _gBService;
  }

  ngOnInit() {
    this.locations$ = this.gBService.getMyGovLocations();
  }

  selectLocation(filterVal: any) {
    const x = 0;
    console.log('selectLocation');
    this.bodies$ = this.gBService.getGovbodies(this.selectedLocation.id);
  }

  selectBody(filterVal: any) {
    console.log('selectBody');
    this.bodyDetails$ = this.gBService.getGovbody(this.selectedBody.id).pipe(tap((bod) => this.form.patchValue(bod)));
  }

  submit(form: IGovbodyDetails_Vm, valid: boolean) {
    this.form.markAllAsTouched();
    if (valid) {
      this.register.emit(form);
    }
  }

  hasError(controlName: string, error: string) {
    const control = this.form.get(controlName);
    return control.touched && control.hasError(error);
  }
}
