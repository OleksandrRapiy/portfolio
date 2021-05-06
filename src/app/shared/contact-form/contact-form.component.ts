import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  showForm: boolean = true;

  contactForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    message: new FormControl("", Validators.required)
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(e: Event) {
    e.preventDefault();
    
    this.showForm = false;

    emailjs.send('service_t2tpb5b', 'template_epsesbd', this.contactForm.value, 'user_qeWZKXOCNYZDm9LLVKxMt')
      .then(() => {
        this.showForm = true;
        this.contactForm.reset();
      }, (error) => {
        console.log(error.text);
      });
  }

}
