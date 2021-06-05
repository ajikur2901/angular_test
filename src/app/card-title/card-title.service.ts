import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardTitleService {
  searchVal: any = "";
  certifierSelected: any = "All";

  searchValueChange: BehaviorSubject<any> = new BehaviorSubject<any>("");
  certifierSelectedChange: BehaviorSubject<any> = new BehaviorSubject<any>("");
  constructor() {
  }

  changeSearchValue(value: any){
    this.searchValueChange.next(value)
  }

  getSearchValue(): Observable<any> {
    return this.searchValueChange.asObservable();
  }

  changeCertifierSelected(value: any){
    this.certifierSelectedChange.next(value)
  }

  getCertifierSelected(): Observable<any> {
    return this.certifierSelectedChange.asObservable();
  }
}
