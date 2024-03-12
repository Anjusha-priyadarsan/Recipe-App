import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  recp:any=[]
  id:any=""
  singleRecp:any=[]


constructor(private s:ServiceService,private ar:ActivatedRoute,private rou:Router,private toast:ToastService){}
img:any="https://i.postimg.cc/nLfXKwqB/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail-removebg-pr.png"

  ngOnInit(): void {
    
      this.getRecp()


      }

      getRecp(){
        this.ar.params.subscribe((data:any)=>{
          this.id=data.id
          console.log(this.id);
         this.s.getSinglRecp(this.id).subscribe((data:any)=>{
          this.singleRecp=data
          console.log(this.singleRecp);
          
         })
          
        })
          
    
        
      }
    
    

    getFile(event:any){
      let file=event.target.files[0]
  
      // url conversion
      let fr= new FileReader()
  
      // convert
      fr.readAsDataURL(file)
  
      // store the coverted url
      fr.onload=(event:any)=>{
        console.log(event.target.result);
  
        // preview
  
        this.img=event.target.result
        this.singleRecp.img=this.img
  
        console.log(this.recp);
        
        
      }
    }

    updateRecp(){
      this.s.updateRecp(this.id,this.singleRecp).subscribe((response:any)=>{


        this.toast.showSuccess('Updated')

        this.s.getRecp()

        
  
        this.rou.navigateByUrl("dashboard")
      })
    }

}
