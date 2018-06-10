import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http } from '@angular/http';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  private btn_stt: boolean = true;
  private product: any = {};
  private products: any[] = [];
  constructor(private x: Http) {

    this.getProducts();

  }

  ngOnInit() {
  }


  getProducts() {

    this.x.get("https://sam1-6d8f6.firebaseio.com/products.json").subscribe(
      (res) => {
        var records = res.json();
        var keys = Object.keys(records);
        console.log('The keys are ', keys)
        this.products = keys.map(function (key) {
          return {id : key,data : records[key]};
        })
        console.log('Net response is ', this.products)
      },
      (err) => {
        console.log('Error s ', err)
      },
      () => {

      }

    )

  }

  saveProduct() {
    console.log(this.product)

    this.x.post("https://sam1-6d8f6.firebaseio.com/products.json", this.product).subscribe(
      (res) => {
        console.log("record inserted")
      },
      (err) => {
        console.log('Error s ', err)
      },
      () => {

      }

    )

    //this.products.push(this.product)
    //console.log(obj);
  }
  delProduct(key) {
    this.x.delete("https://sam1-6d8f6.firebaseio.com/products/"+key+".json", this.product).subscribe(
      (res) => {
        console.log("record deleted")
      },
      (err) => {
        console.log('Error s ', err)
      },
      () => {

      }

    )
  }

  editProduct(product) {
    this.product = product;
    this.btn_stt = false;
    console.log(product)
  }

}
