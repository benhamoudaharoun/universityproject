import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  invalidMessage!: string;

  
  logInFormGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder,private loginService: LoginService,
    private route:Router) { }

  ngOnInit(): void {
    this.logInFormGroup = this.formBuilder.group({
      admin: this.formBuilder.group({
        userName: [''],
        password: ['']
      })
    });
  }

  OnSubmit() {
   const result= this.loginService.login(this.logInFormGroup.get('admin')!.value.userName,this.logInFormGroup.get('admin')!.value.password)
   if(result == true){
    this.route.navigateByUrl('student');
  }else {
    this.invalidMessage = 'Invalid UserName and Password';
    this.showMessage()
  }}showMessage(){
    setTimeout(() => {
      this.invalidMessage = ""
    },2000)

}
}