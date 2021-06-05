import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CardTitleService } from '../card-title/card-title.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  certifiers: any[] = [];
  searchVal: any = "";
  certifierSelected: any = "All";
  constructor(private dataService: DataService, private cardTitleService: CardTitleService) { }

  onSearch(event: any){
    this.searchVal = event.target.value
    this.cardTitleService.changeSearchValue(this.searchVal)
  }

  resetSearch(){
    this.searchVal = "";
    this.cardTitleService.changeSearchValue(this.searchVal)
  }

  selectCategory(certifier: any){
    this.certifierSelected = certifier
    this.cardTitleService.changeCertifierSelected(this.certifierSelected);
  }

  get getSearchValue(): any {
    return this.searchVal
  }

  ngOnInit() {
    this.dataService.sendGetRequest().subscribe((data: any[]) => {
      data.forEach(product => {
        if(product.certifier !== null && this.certifiers.find((val) => val == product.certifier.short_name) === undefined){
          this.certifiers.push(product.certifier.short_name)
        }
      })
      this.certifiers.sort((a,b) => a > b ? 1 : -1 )
      this.certifiers = ['All'].concat(this.certifiers)
    })
  }

}
