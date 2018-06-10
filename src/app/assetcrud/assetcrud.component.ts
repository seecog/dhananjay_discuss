import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assetcrud',
  templateUrl: './assetcrud.component.html',
  styleUrls: ['./assetcrud.component.css']
})
export class AssetcrudComponent implements OnInit {
private asset : any = {};
private btn_stt :boolean =true;
private assets : any[] =[
  {
  asset_name : "Kirti Flora",
  asset_area : 20000,
  asset_cost : 50,
  asset_pic : "https://imgs.nestimg.com/2_bhk_in_keerthi_flora_brookefield_109299465062600013.jpg",
  asset_dealer : "Shekhar",
  asset_country : 2,
  asset_state : 3,
  asset_status : 1,
  asset_contact : 9730232815
}
]
  constructor() { }

  ngOnInit() {
  }
  save(){
    console.log(this.asset);
    this.assets.push(this.asset);
  }
  editasset(asset:any){
    this.asset =asset;
    this.btn_stt=false;
  }
  deleteasset(index){
    this.assets.splice(index,1);
  }

}
