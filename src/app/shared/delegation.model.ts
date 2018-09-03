import { Delegate } from './delegate.model';

export class Delegation {
    delegationName: string;
    institution: string;
    headDelName: string;
    headDelEmail: string;
    headDelPhone: string;
    headDelCnic: string;
    headDelDob: string;
    headDelPref1: string;
    headDelPref2: string;
    fee: Number;
    facultyName: string;
    facultyPhone: string;
    delegates: Array<Delegate>;
}
