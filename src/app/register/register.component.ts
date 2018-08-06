import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Delegation } from '../shared/delegation.model';
import { DelegationService } from '../shared/delegation.service';
import { ToasterService, Toast } from 'angular2-toaster';
import { Delegate } from '../shared/delegate.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  regForm: FormGroup;
  aDelegation: Delegation;
  committees = ['DISEC', 'WHO', 'UNSC', 'NATO', 'ECOSOC'];
  delegates: Array<Delegate> = [];
  delegateCount = 0;
  constructor(private fb: FormBuilder,
              private delService: DelegationService,
              private toasterService: ToasterService
            ) { }

  ngOnInit() {
    this.regForm = this.fb.group({
      delegation: [undefined, Validators.required],
      institution: [undefined, Validators.required],
      headDelName: [undefined, Validators.required],
      headDelEmail: [undefined, Validators.required],
      headDelPhone: [undefined, Validators.required],
      headDelCnic: [undefined, Validators.required],
      headDelDob: [undefined, Validators.required],
      headDelPref1: [undefined, Validators.required],
      headDelPref2: [undefined, Validators.required],
      delegatesControl: this.fb.array([])
    });
    this.delService.getData();
  }
  submit() {
    this.aDelegation = new Delegation();
    this.aDelegation.delegationName = this.regForm.get('delegation').value;
    this.aDelegation.headDelName = this.regForm.get('headDelName').value;
    console.log(this.aDelegation);
    this.delService.insertDel(this.aDelegation);
  }
  addDelegate() {
    if (this.delegateCount < 9) {
      (this.regForm.get('delegatesControl') as FormArray).push(this.getDelegateForm());
      this.delegateCount += 1;
    } else {
      this.toasterService.pop('error', 'Limit Reached', 'A maximum of 10 delegates are allowed per delegation');
    }
  }
  removeDelegate(index: number) {
    (this.regForm.get('delegatesControl') as FormArray).removeAt(index);
    this.delegateCount -= 1;
  }
  getDelegateForm() {
    const delegateForm = this.fb.group({
      delName: [undefined, Validators.required],
      delEmail: [undefined, Validators.required],
      delPhone: [undefined, Validators.required],
      delCnic: [undefined, Validators.required],
      delDob: [undefined, Validators.required],
      delPref1: [undefined, Validators.required],
      delPref2: [undefined, Validators.required]
    });
    return delegateForm;
  }

}
