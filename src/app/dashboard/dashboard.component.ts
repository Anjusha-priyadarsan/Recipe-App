import { Component } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { ToastService } from '../services/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  recpList:any=[]
  recpName:string=""
  admin:any={}
  profilePic:any="https://st2.depositphotos.com/1104517/11967/v/950/depositphotos_119675554-stock-illustration-male-avatar-profile-picture-vector.jpg"
  editClicked:boolean=false
  p: number = 1;
  AdminUserName:any=""
  AdminImage:any=""






  constructor(private us:ServiceService, private toast:ToastService,private route:Router){}


  ngOnInit():void{
    this.us.loginApi().subscribe((result:any)=>{
      this.admin=(result[0]);
      if(this.admin.profile){
        this.profilePic=this.admin.profile
      }
      
    })
   this.getRecp()
   this.AdminUserName=localStorage.getItem("UserName")
   console.log(this.AdminUserName);
   
  }
  editClick(){  
    this.editClicked=true

}

  getRecp(){
    this.us.getRecp().subscribe((recps:any)=>{

      this.recpList=recps
      console.log(this.recpList);
      
      

    })
  }

  removeRecp(id:any){
    this.us.deleteRecp(id).subscribe((result:any)=>{
      this.toast.showError('Item Removed')
      this.getRecp()
      this.route.navigateByUrl('dashboard')

      
    })
}

updatedAdmin(event:any){

  this.AdminUserName=event

}
updatedAdminImg(event:any){

  this.profilePic=event
  console.log(this.profilePic);
  

}

}
