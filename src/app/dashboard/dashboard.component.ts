import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  // acno=''
  // psw=''
  // amnt=''
  // a1=''
  // p1=''
  // b1=''
  user=''


  constructor(private ds:DataService,private fb:FormBuilder){

    // to access username
    this.user=this.ds.currentuser
  

  }
  depositForm=this.fb.group({acno:['',[Validators.required,Validators.pattern('[0-9]+')]],psw:['',[Validators.required,Validators.pattern('[0-9 a-z A-Z]+')]],amnt:['',[Validators.required,Validators.pattern('[0-9]+')]]})



  deposit(){
    var acno=this.depositForm.value.acno
    var psw=this.depositForm.value.psw
    var amnt=this.depositForm.value.amnt
    if(this.depositForm.value){
    const result=this.ds.deposit(acno,psw,amnt)

    if(result){
      alert(`${amnt} is credited to your account and the available balance is ${result}`)
    }
    else{
      alert("incorrect passsword or username")
    }
  }
  else{
    alert('invalid format')
  }
  }

withdrawForm=this.fb.group({a1:['',[Validators.required,Validators.pattern('[0-9]+')]],p1:['',[Validators.required,Validators.pattern('[0-9 a-z A-Z]+')]],b1:['',[Validators.required,Validators.pattern('[0-9]+')]]})

withdraw(){
  
  var a1=this.withdrawForm.value.a1
  var p1=this.withdrawForm.value.p1
  var b1=this.withdrawForm.value.b1
  if(this.depositForm.value){
  const result=this.ds.withdraw(a1,p1,b1)
  if(result){
    alert(`${b1} is withdrawn from your account and available balance is ${result}`)
  }
}
else{
  alert('invalid format')
}

}


}
