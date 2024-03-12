import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent  implements OnInit{

  recpList:any=[]
  recpName:string=""
  filterData:string=""
  p: number = 1;


  constructor(private us:ServiceService){}


  ngOnInit():void{
   this.getRecp()
   
  }

  getRecp(){
    this.us.getRecp().subscribe((recps:any)=>{

      this.recpList=recps
      console.log(this.recpList);
      
      

    })
  }

  changeFilterData(data:any){
    this.filterData=data

  }

}
