import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Delegation } from '../shared/delegation.model';
import { DelegationService } from '../shared/delegation.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  regForm: FormGroup;
  aDelegation: Delegation;
  constructor(private fb: FormBuilder, private delService: DelegationService) { }

  ngOnInit() {
    this.regForm = this.fb.group({
      delegation: [undefined, Validators.required],
      headDelName: [undefined, Validators.required]
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

}
