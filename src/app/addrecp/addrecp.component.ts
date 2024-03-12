import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from '../services/service.service';
import { ToastService } from '../services/toast.service';


@Component({
  selector: 'app-addrecp',
  templateUrl: './addrecp.component.html',
  styleUrls: ['./addrecp.component.css']
})
export class AddrecpComponent {

  img:any="https://img.freepik.com/free-vector/fresh-fruits-healthy-food_24877-51730.jpg"


  addRecpFormModel=this.fb.group({

    // email:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]],
    name:['',[Validators.required]],
    Cat:['',[Validators.required]],
    disc:['',[Validators.required]],
    img:['',[Validators.required]],
    ingre:['',[Validators.required]]


    




  })
  

  constructor(private fb:FormBuilder,private us:ServiceService,private toast:ToastService){}


  ngOnInit():void{}

  getFile(event:any){
    let file=event.target.files[0]

    // url conversion
    let fr= new FileReader()

    // convert
    fr.readAsDataURL(file)

    // store the coverted url
    fr.onload=(event:any)=>{
      // console.log(event.target.result);

      // preview

      this.img=event.target.result

      console.log(this.img);
      
      
    }
  }

  addRecp(){
    var path=this.addRecpFormModel.value
    var disc=path.disc
    var name=path.name
    var cat=path.Cat
    var img=this.img
    var ingre=path.ingre
  // console.log(disc);
    //   console.log(name);
    //   console.log(cat);
    //   console.log(img);
    //   console.log(ingre);
if(this.addRecpFormModel.valid){


    
    
    this.us.addRecp({id:"",img:img,name:name,ingrediants:ingre,Description:disc,Category:cat}).subscribe((data:any)=>{
      // console.log(data);

      this.img="https://img.freepik.com/free-vector/fresh-fruits-healthy-food_24877-51730.jpg"
      
      this.toast.showSuccess(`${data.name} added successfully`)

      // reset the values in the form after user added suucessfully
      this.addRecpFormModel.reset()
      

      

      
    })

   }
   else{
    alert('inavalid form')
   }
     
   
    
  }

}
