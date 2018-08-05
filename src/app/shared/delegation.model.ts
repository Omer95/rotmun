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
    delegates: Array<Delegate>;
}
