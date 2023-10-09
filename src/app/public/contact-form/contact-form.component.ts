import { Component } from '@angular/core';
import { CheckboxControlValueAccessor, CheckboxRequiredValidator, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReCaptchaV3Service } from 'ng-recaptcha';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  contactForm: FormGroup;
  isReCaptchaValid: boolean = false;
  isSubmitted = false;

  constructor(
    private formBuilder: FormBuilder,
    // private reCaptchaV3Service: ReCaptchaV3Service
    ) {

    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      reCaptcha: [null, Validators.required],
      checkmark: [false, this.checkmarkValidator],
    });
  }

  checkmarkValidator(control: FormControl) {
    const value = control.value;
    if (value === true) {
      return null; // Válido si el checkbox está marcado
    } else {
      return { required: true }; // No válido si el checkbox no está marcado
    }
  }

  ngOnInit(): void {
    this.createContactForm();
  }

  createContactForm(): void {
  }
  
  submitForm(): void {
    this.isSubmitted = true; 
    if (this.contactForm.valid) {
      // Process form submission
      // You can send the form data to your backend or perform any other necessary actions here
      // Reset the form after submission
      // this.reCaptchaV3Service.execute('importantAction')
    // .subscribe((token: string) => {
    // });
      // this.contactForm.reset();
    } else {
      // Handle form validation errors
      // alert('Please fill in all required fields.');
    }
  }
}


// // Obtener elementos del DOM
// const mostrarAviso = document.getElementById('mostrarAviso');
// const avisoPopup = document.getElementById('avisoPopup');
// const cerrarAvisoBtn = document.getElementById('cerrarAviso');

// // Mostrar el aviso emergente al hacer clic en el botón "Mostrar Aviso"
// mostrarAviso.addEventListener('click', function() {
//   avisoPopup.style.display = 'block';
// });

// // Cerrar el aviso emergente al hacer clic en el botón "Cerrar"
// cerrarAvisoBtn.addEventListener('click', function() {
//   avisoPopup.style.display = 'none';
// });

// if (mostrarAviso !== null) {
//   mostrarAviso.addEventListener('click', function() {
//     // Código que se ejecuta cuando se hace clic en el elemento 'mostrarAviso'
//   });
// }

// if (cerrarAvisoBtn !== null) {
//   cerrarAvisoBtn.addEventListener('click', function() {
//     // Código que se ejecuta cuando se hace clic en el elemento 'cerrarAviso'
//   });
// }

// if (avisoPopup !== null) {
//   avisoPopup.style.display('click', function() {
//     // Código que se ejecuta cuando se hace clic en el elemento 'mostrarAviso'
//   });
// }