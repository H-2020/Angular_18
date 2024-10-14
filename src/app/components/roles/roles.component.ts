import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {
  firstName:string="Angular Tutorial";
  angularVersion="version 18";
  version:number=10;
  isactive:boolean=false;
  currentdate:Date=new Date();

  inputType:string="button";
  selectedState:string='';

  showWelcomeAlert(){
    alert("Welcome to ANgular 18 tutorial")

  }
  showMessage(message:string){
    alert(message)

  }

}
