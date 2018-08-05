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
      headDelName: delegation.headDelName
    });
  }
}
