import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  acno=''
  psw=''
  amnt=''
  a1=''
  p1=''
  b1=''
  user=''


  constructor(private ds:DataService){

    // to access username
  

  }

  deposit(){
    var acno=this.acno
    var psw=this.psw
    var amnt=this.amnt
    const result=this.ds.deposit(acno,psw,amnt)

    if(result){
      alert(`${amnt} is credited to your account and the available balance is ${result}`)
    }
    else{
      alert("incorrect passsword or username")
    }
  }

withdraw(){
  
  var a1=this.a1
  var p1=this.p1
  var b1=this.b1
  const result=this.ds.withdraw(a1,p1,b1)
  if(result){
    alert(`${a1} is withdrawn from your account and available balance is ${result}`)
  }

}


}
