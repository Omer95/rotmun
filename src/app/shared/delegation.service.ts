import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Delegation } from './delegation.model';

@Injectable({
  providedIn: 'root'
})
export class DelegationService {
  delegationList: AngularFireList<any>;
  constructor(private db: AngularFireDatabase) { }

  getData() {
    this.delegationList = this.db.list('delegations');
    return this.delegationList;
  }
  insertDel(delegation: Delegation) {
    this.delegationList.push({
      delegationName: delegation.delegationName,
      headDelName: delegation.headDelName,
      institution: delegation.institution,
      headDelEmail: delegation.headDelEmail,
      headDelPhone: delegation.headDelPhone,
      headDelCnic: delegation.headDelCnic,
      headDelDob: delegation.headDelDob,
      headDelPref1: delegation.headDelPref1,
      headDelPref2: delegation.headDelPref2,
      delegationFee: delegation.fee,
      delegates: delegation.delegates,
      facultyName: delegation.facultyName,
      facultyPhone: delegation.facultyPhone
    });
  }
}
