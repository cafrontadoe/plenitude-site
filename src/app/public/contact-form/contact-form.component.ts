import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReCaptchaV3Service } from 'ng-recaptcha';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  contactForm: FormGroup;
  isReCaptchaValid: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private reCaptchaV3Service: ReCaptchaV3Service
    ) {

    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      reCaptcha: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.createContactForm();
  }

  createContactForm(): void {
  }
  
  submitForm(): void {
    if (this.contactForm.valid) {
      // Process form submission
      console.log(this.contactForm.value);
      // You can send the form data to your backend or perform any other necessary actions here
      // Reset the form after submission
      this.reCaptchaV3Service.execute('importantAction')
    .subscribe((token: string) => {
    });
      this.contactForm.reset();
    } else {
      // Handle form validation errors
      alert('Please fill in all required fields.');
    }
  }
}
