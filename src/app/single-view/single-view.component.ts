import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-view',
  templateUrl: './single-view.component.html',
  styleUrls: ['./single-view.component.css']
})
export class SingleViewComponent implements OnInit{
  id:any=""


  singleRecp:any={}
  constructor(private us:ServiceService, private rout:ActivatedRoute){}
  ngOnInit(): void {

   this. getRecp()
  }


  getRecp(){
    this.rout.params.subscribe((data:any)=>{
      this.id=data.id
      console.log(this.id);
      this.us.getRecp().subscribe((response:any)=>{
      this.singleRecp=  response.find((i:any)=>i.id==this.id)
      console.log(this.singleRecp);
      
      })
      
    })
      

    
  }

}
