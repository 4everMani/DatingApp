import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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

  constructor(private accountService : AccountService, private toastr : ToastrService) { }

  ngOnInit(): void {
  }

  register(){
    this.accountService.register(this.registerModel).subscribe(response=>{
      this.cancel();
    },error=>{
      this.toastr.error(error.error);
      console.log(error)
    })

  }

  cancel(){
    // console.log('cancelled');
    this.cancelRegister.emit(false);
  }
}
