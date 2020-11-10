import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators/retry';
import { FormGroup } from '@angular/forms';
@Injectable()
export class GlobalServices{
   
      // public SetLoginData(user:UserLoginData):void
      // {
      //     localStorage.setItem("Login",JSON.stringify(user));
      // }
      // public GetValueFromLocalStorage():UserLoginData{
      //     let signindata=JSON.parse(localStorage.getItem("Login"));
      //     return signindata==null?null:signindata;
      // }

      public  getUserName(): string{
        let userName = (localStorage.getItem("UserName"));

        if(userName == "null")
        {
          userName = null;
        }
        return userName;
      }

      public static setUserName(userName:string){
        localStorage.setItem("UserName", userName);

        console.log("setUserName->UserNameStr: " +  userName);
      }

      public todayDate(){
        return new Date().toJSON().split('T')[0];
      }
      public static   dateLessThan(fromDate: string, toDate: string) {
        return (group: FormGroup): {[key: string]: any} => {
         let _fromDate = group.controls[fromDate];
         let _toDate = group.controls[toDate];     
         if (_fromDate.value > _toDate.value) {       
           return {
            daterange: "From Date Less Then To Date Please Change"
           };
         }     
         return {};
        }
      }
}