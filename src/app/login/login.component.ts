import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};

  constructor(
    // private api: ApiservicesService,
    private router: Router,
  ) { }

  ngOnInit() {
   
  }
  login(){
   if((this.model.username=="test") && (this.model.password=="test")){
 
      this.router.navigate(['./home']);

   }else{
     alert("Invalid username and password")
   }
  }

}
