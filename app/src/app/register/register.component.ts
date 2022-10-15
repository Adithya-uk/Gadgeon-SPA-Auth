import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  regform !: FormGroup

  constructor(private formbuilder:FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.regform=this.formbuilder.group({
      name:[''],
      email:[''],
      password:['']

    })
  }
  signup()
  {
    this.http.post<any>('http://localhost:3000/users',this.regform.value).subscribe(res=>
    {
      alert("success");
    });
  }

}
