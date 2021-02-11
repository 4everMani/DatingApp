import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegister = new  EventEmitter();

  registerModel : any={} ;

  constructor(private accountService : AccountService) { }

  ngOnInit(): void {
  }

  register(){
    this.accountService.register(this.registerModel).subscribe(response=>{
      this.cancel();
    },error=>{
      console.log(error)
    })

  }

  cancel(){
    // console.log('cancelled');
    this.cancelRegister.emit(false);
  }
}
