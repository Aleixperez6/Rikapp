import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CharacterService} from '../../services/character.service'

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  contactForm: FormGroup;
  showMsg=false;

  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


  constructor( private service:CharacterService ) {
    this.contactForm = this.createFormGroup();
  }

  ngOnInit(): void {
  }

  createFormGroup(){
    return new FormGroup({
      email: new FormControl('',[Validators.required, Validators.pattern(this.emailPattern)]),
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      message: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
      terms: new FormControl(false, [Validators.requiredTrue])
    });
  }
  resetForm(){
    this.contactForm.reset();
  }
  get name() {return this.contactForm.get('name')};
  get email() {return this.contactForm.get('email')};
  get message() {return this.contactForm.get('message')};
  get terms() {return this.contactForm.get('terms')};

  sendForm(){
    this.service.saveMessage(this.contactForm.value);
    this.resetForm();
    this.showMsg=true;

  }





}
