import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";





@Injectable()
export class Globals {
   // use this property for property binding
    public isUserLoggedIn:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    setLoginStatus(isLoggedIn:boolean) {
        this.isUserLoggedIn.next(isLoggedIn);
    }

    public userName: BehaviorSubject<object> = new BehaviorSubject<object>({});

    setUserName(userName:object) {
        this.userName.next(userName);
    }

    public isRequestingGlobal: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    setIsRequestingGlobal(isRequestingGlobal:boolean) {
        this.isRequestingGlobal.next(isRequestingGlobal);
    }

    public clinic: BehaviorSubject<object> = new BehaviorSubject<object>({ "Id": -1, "Name": ""});

    setClinic(clinic:object) {
        this.clinic.next(clinic);
    }

    public clinicsOwners: BehaviorSubject<Response> = new BehaviorSubject<Response>(new Response());

    setClinicsOwners(clinicsOwners:Response) {
        this.clinicsOwners.next(clinicsOwners);
    }

    public clinicsWorkers: BehaviorSubject<Response> = new BehaviorSubject<Response>(new Response());

    setClinicsWorkers(clinicsWorkers:Response) {
        this.clinicsWorkers.next(clinicsWorkers);
    }

    public owner: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    setOwner(owner:boolean) {
        this.owner.next(owner);
    }

    public patient: BehaviorSubject<object> = new BehaviorSubject<object>({});

    setPatient(patient:object) {
        this.patient.next(patient);
    }

    public roleAdmin: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    setRoleAdmin(roleAdmin:boolean) {
        this.roleAdmin.next(roleAdmin);
    }
    
    public roleDoctor: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    setRoleDoctor(roleDoctor:boolean) {
        this.roleDoctor.next(roleDoctor);
    }

    public roleSecretary: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    setRoleSecretary(roleSecretary:boolean) {
        this.roleSecretary.next(roleSecretary);
    }

    public roleBase: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    setRoleBase(roleBase:boolean) {
        this.roleBase.next(roleBase);
    }

    public query: BehaviorSubject<string> = new BehaviorSubject<string>("!");

    setQuery(query:string) {
        this.query.next(query);
    }

    public numberNotifications: BehaviorSubject<number> = new BehaviorSubject<number>(0);

    setNumberNotifications(numberNotifications:number) {
        this.numberNotifications.next(numberNotifications);
    }

    public notifications: BehaviorSubject<Response> = new BehaviorSubject<Response>(new Response());

    setNotifications(notifications:Response) {
        this.notifications.next(notifications);
    }

    public diagnosisPlan: BehaviorSubject<Response> = new BehaviorSubject<Response>(new Response());

    setDiagnosisPlan(diagnosisPlan:Response) {
        this.diagnosisPlan.next(diagnosisPlan);
    }
    
}