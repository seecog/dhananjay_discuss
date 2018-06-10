import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crudproduct',
  templateUrl: './crudproduct.component.html',
  styleUrls: ['./crudproduct.component.css']
})
export class CrudproductComponent implements OnInit {
private product : any = {};  
private btn_stt : boolean = true;
private products : any[] = [
{name : 'Apple',cost : 100}
];
  constructor() { }

  ngOnInit() {
  }

  save(){
this.products.push(this.product);
this.product = {};
    console.log(this.product)
  }  

  deleteProduct(index){
    this.products.splice(index,1);
  }

  editProduct(pro){
    this.product=pro;
    this.btn_stt = false;
  }
  

}
