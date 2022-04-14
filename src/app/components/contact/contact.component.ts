import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { formMail } from 'src/app/formContact.model';
import { FormContactService } from 'src/app/servicios/contacto.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  mailModel : formMail = new formMail (" ", " ", " ") ;

  form: FormGroup;

  constructor(private contactoService: FormContactService) {

    this.form = new FormGroup ({
      name: new FormControl ('', [Validators.required]),
      email: new FormControl ('', [Validators.required, Validators.email]),
      message: new FormControl ('', [Validators.required]),
   })
   }

  ngOnInit(): void {
  }

  sendMail (){
    this.contactoService.sendMail(this.form.value).subscribe(r=>{});
  }

  reloadPage (){
    window.location.reload();
  }

  get Mail(): any {
    return this.form.get("email");
   }

   get Name(): any {
    return this.form.get("name");
   }

   get Message(): any {
    return this.form.get("message");
   }

}
