import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Delegation } from '../shared/delegation.model';
import { DelegationService } from '../shared/delegation.service';
import { ToasterService, Toast } from 'angular2-toaster';
import { Delegate } from '../shared/delegate.model';
import * as $ from 'jquery';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  regForm: FormGroup;
  aDelegation: Delegation;
  committees = ['DISEC', 'SOCHUM', 'SPECPOL', 'UNESCO', 'UNSC',
                'UN Commission on the Status of Women',
                'Historical Corporate Committee: The Great Depression 1929',
                // tslint:disable-next-line:quotemark
                'IAEA', "Prime Minister Imran Khan's Cabinet 2018",
                'Committee on the Peaceful Uses of Outer Space'];
  delegates: Array<Delegate> = [];
  delegateCount = 0;
  constructor(private fb: FormBuilder,
              private delService: DelegationService,
              private toasterService: ToasterService
            ) { }

  ngOnInit() {
    $('#preloader').delay(600).fadeOut();
    setTimeout(() => {
      $('.smallfont').addClass('animated fadeInDown');
      $('.myform').addClass('animated fadeInDown');
    }, 600);
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
      facultyName: [undefined],
      facultyPhone: [undefined],
      delegatesControl: this.fb.array([])
    });
    this.delService.getData();
  }
  submit() {
    // console.log(this.regForm);
    this.aDelegation = new Delegation();
    this.aDelegation.delegationName = this.regForm.get('delegation').value;
    this.aDelegation.headDelName = this.regForm.get('headDelName').value;
    this.aDelegation.institution = this.regForm.get('institution').value;
    this.aDelegation.headDelEmail = this.regForm.get('headDelEmail').value;
    this.aDelegation.headDelPhone = this.regForm.get('headDelPhone').value;
    this.aDelegation.headDelCnic = this.regForm.get('headDelCnic').value;
    this.aDelegation.headDelDob = this.regForm.get('headDelDob').value;
    this.aDelegation.headDelPref1 = this.regForm.get('headDelPref1').value;
    this.aDelegation.headDelPref2 = this.regForm.get('headDelPref2').value;
    if (this.regForm.get('facultyName')) {
      this.aDelegation.facultyName = this.regForm.get('facultyName').value;
    } else {
      this.aDelegation.facultyName = 'none';
    }
    if (this.regForm.get('facultyPhone')) {
      this.aDelegation.facultyPhone = this.regForm.get('facultyPhone').value;
    } else {
      this.aDelegation.facultyPhone = 'none';
    }
    for (let i = 0; i < this.regForm.value.delegatesControl.length; i++) {
      const aDelegate: Delegate = new Delegate();
      aDelegate.name = this.regForm.value.delegatesControl[i].delName;
      aDelegate.email = this.regForm.value.delegatesControl[i].delEmail;
      aDelegate.phone = this.regForm.value.delegatesControl[i].delPhone;
      aDelegate.dob = this.regForm.value.delegatesControl[i].delDob;
      aDelegate.cnic = this.regForm.value.delegatesControl[i].delCnic;
      aDelegate.pref1 = this.regForm.value.delegatesControl[i].delPref1;
      aDelegate.pref2 = this.regForm.value.delegatesControl[i].delPref2;
      this.delegates.push(aDelegate);
    }
    this.aDelegation.delegates = this.delegates;
    if (this.delegateCount === 0) {
      this.aDelegation.fee = 3000;
    } else {
      this.aDelegation.fee = 2500 * (this.delegateCount + 1) + 2000;
    }
    this.delegates = [];
    console.log(this.aDelegation);
    this.delService.insertDel(this.aDelegation);
    this.toasterService.pop('success', 'Success',
      `Thank you for registering your delegation of ${this.delegateCount + 1} delegates`);
    this.regForm.reset();
  }
  addDelegate() {
    if (this.delegateCount === 0) {
      // there must be atleast 4 delegates in one delegation
      for (let i = 0; i < 3; i++) {
        (this.regForm.get('delegatesControl') as FormArray).push(this.getDelegateForm());
      }
      this.delegateCount += 3;
    } else {
      if (this.delegateCount >= 3 && this.delegateCount < 9) {
        (this.regForm.get('delegatesControl') as FormArray).push(this.getDelegateForm());
        this.delegateCount += 1;
      } else {
        this.toasterService.pop('error', 'Limit Reached', 'A maximum of 10 delegates are allowed per delegation');
      }
    }
    console.log(this.regForm.get('delegatesControl'));
    console.log(this.delegateCount);
  }
  removeDelegate(index: number) {
    if (this.delegateCount > 3) {
      (this.regForm.get('delegatesControl') as FormArray).removeAt(index);
      this.delegateCount -= 1;
    } else {
      (this.regForm.get('delegatesControl') as FormArray).removeAt(0);
      (this.regForm.get('delegatesControl') as FormArray).removeAt(0);
      (this.regForm.get('delegatesControl') as FormArray).removeAt(0);
      this.delegateCount -= 3;
    }
    console.log(this.delegateCount);
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
