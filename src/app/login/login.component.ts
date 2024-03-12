import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:any=""
  
  loginFormModel=this.fb.group({
    email:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]],
    pwd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]]
  })
  
  
  
  constructor(private fb:FormBuilder, private s:ServiceService, private route:Router){

  }
  ngOnInit():void{}
  login(){
    var path=this.loginFormModel.value
    var email=path.email
    var pwd=path.pwd
    this.email=email

   if(this.loginFormModel.valid){


    this.s.loginApi().subscribe((data:any)=>{
      var adminEmail=(data[0].email);
      var adminPsw=(data[0].password);

      if(adminEmail==email)
      {
        if(adminPsw==pwd)
        {
          // alert('login successful')
          var index=this.email.indexOf('@')
          localStorage.setItem("UserName",this.email.slice(0,index));
          
          this.route.navigateByUrl('dashboard')

        }
        else{
          alert("incorrect password")
        }

      }
      else{
        alert("incorrect email for admin")
      }

      
    })
    // console.log(email);
    //   console.log(pwd);
    //   alert('valid form')
   }
   else{
    alert('inavalid form')
   }
     
   
    
  }
  

}
