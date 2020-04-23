import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ApiService{
    public toggleMenuSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public selectedInput: Subject<object> = new Subject<object>();

    constructor(public http: HttpClient) { }

    getNotes(){
        return this.http.get('assets/data.json');
    }
}