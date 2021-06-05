import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CardTitleService } from './card-title.service';
import { ToolbarComponent } from '../toolbar/toolbar.component';
@Component({
  selector: 'app-card-title',
  templateUrl: './card-title.component.html',
  styleUrls: ['./card-title.component.scss']
})
export class CardTitleComponent implements OnInit {
  products: any[] = [];
  searchVal: any = "";
  certifierSelected: any = "All";
  constructor(
    private dataService: DataService,  
    private cardTitleService: CardTitleService
  ) { }

  filterCertifiers(){
    this.products = this.products.map((product,index) => {
      console.log(this.certifierSelected)
      console.log(this.searchVal)
      if((this.certifierSelected == "All" || this.certifierSelected.length === 0) && this.searchVal.length === 0){
        product.show = true
      }else{
        if(product.short_name.includes(this.searchVal)){
          product.show = true
        }else{
          product.show = false
        }

        if(this.certifierSelected !== "All" && this.certifierSelected.length !== 0){
          if(product.certifier !== null && product.certifier.short_name === this.certifierSelected){
            product.show = product.show === false ? false : true
          }else{
            product.show = false 
          }
        }
      }
      return product
    })
  }

  ngOnInit() {
    this.dataService.sendGetRequest().subscribe((data: any[]) => {
      this.products = data
      this.filterCertifiers()
    })
    this.cardTitleService.getSearchValue().subscribe((data: any) => {
      this.searchVal = data
      this.filterCertifiers()
    })
    this.cardTitleService.getCertifierSelected().subscribe((data: any) => {
      this.certifierSelected = data
      this.filterCertifiers()
    })
  }

}
