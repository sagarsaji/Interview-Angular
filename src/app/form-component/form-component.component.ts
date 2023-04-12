import { Component, OnInit } from '@angular/core';
import { FormServiceService } from '../form-service.service';
import { Forms } from '../Forms';



@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit{
  

  form:Forms = new Forms("","","","","","","","","");
  message: any;
  constructor(private service:FormServiceService){
    
  }

  ngOnInit(): void{
    throw new Error('Method not implemented.');
  }

  public RegisterNow(){
    let resp = this.service.DoRegistration(this.form);
    resp.subscribe(data=>this.message=data);
  }
}
