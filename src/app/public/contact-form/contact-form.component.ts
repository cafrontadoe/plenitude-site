import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { IContacts } from 'src/app/shared/models/contacts.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ContactsService } from 'src/app/shared/services/contacts.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  contactForm: FormGroup;
  isReCaptchaValid: boolean = false;
  isSubmitted = false;
  renewTokenTimes = 0;
  loadingCheckout = false;
  showSuccessNotify = false;

  constructor(
    private formBuilder: FormBuilder,
    private contactsService: ContactsService,
    private authService: AuthService
  ) // private reCaptchaV3Service: ReCaptchaV3Service
  {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      // reCaptcha: [null, Validators.required],
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

  createContactForm(): void {}

  submitForm(): void {
    this.isSubmitted = true;
    if (this.contactForm.valid) {
      this.callCreateContactUs();
    }
  }

  callCreateContactUs() {
    this.loadingCheckout = true;
    const contacts: IContacts = {
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      message: this.contactForm.value.message,
    };
    this.contactsService.createContactUs(contacts).subscribe({
      next: (response: any) => {
        this.showSuccessNotify = true;
        setTimeout(() => {
          this.showSuccessNotify = false;
        }, 2000);
        this.contactForm.reset();
        this.isSubmitted = false;

      },
      error: (err: any) => {
        if (
          err.error.error.name === 'TokenExpiredError' &&
          this.renewTokenTimes === 0
        ) {
          this.callRenewToken();
        } else if (err.error.error.name === 'TokenExpiredError') {
          alert('recarregue a página e tente novamente');
          this.loadingCheckout = false;
        } else {
          this.loadingCheckout = false;
        }
      },
    });
  }

  callRenewToken() {
    this.renewTokenTimes = this.renewTokenTimes++;
    this.loginBackend();
  
  }

  loginBackend() {
    this.authService.login().subscribe({
      next: (response: any) => {
        localStorage.setItem('jwt', response.token);
        this.callCreateContactUs();
      },
      error: (error: any) => {
        console.error('Login failed:');
      },
    });
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
