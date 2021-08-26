import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  model: any = {};
  value:any=[];
  final:any=[];
  option:any=[{value:"1",Code:1},
  {value:"2",Code:2},
  {value:"3",Code:3},
  {value:"4",Code:4},
  {value:"5",Code:5},
  {value:"6",Code:6},
];

  firstname: any;
  title: any;
  lastname: any;
  constructor(
    private http : HttpClient,
    ) { }
  // httpOptions: { headers: HttpHeaders } = {
  //   headers: new HttpHeaders({ "Content-Type": "application/json" }),
  // };

  ngOnInit(): void {
    
  }
  load(){
   console.log(this.model.size)
    this.http.get('https://randomuser.me/api/0.8/?results={'+ this.model.size+'}').subscribe(val=>{
      
    this.value=val;
    console.log(this.value)
    
    this.final=this.value.results[0].user.name;
    console.log( this.final)
    this.title=this.final.title;
    this.firstname=this.final.first;
    this.lastname=this.final.last;
  })
}
adduser(){
  this.title=this.model.title;
  this.firstname=this.model.firstname;
  this.lastname=this.model.lastname;
}

}
