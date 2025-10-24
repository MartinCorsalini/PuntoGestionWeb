
/*
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      apellido: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern(/^[0-9\s\-\+\(\)]+$/)]],
      asunto: ['', [Validators.required, Validators.minLength(3)]],
      mensaje: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      // Marcar todos los campos como touched para mostrar errores
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.controls[key].markAsTouched();
      });
      return;
    }

    this.isSubmitting = true;
    this.submitError = false;
    this.submitSuccess = false;

    // Simulación de envío (aquí conectarías con tu backend)
    const formData = this.contactForm.value;
    console.log('Datos del formulario:', formData);

    // Simulación de delay de red
    setTimeout(() => {
      this.isSubmitting = false;
      this.submitSuccess = true;
      this.contactForm.reset();

      // Ocultar mensaje de éxito después de 5 segundos
      setTimeout(() => {
        this.submitSuccess = false;
      }, 5000);
    }, 1500);

    /*
    // Ejemplo de implementación real con HttpClient:
    this.http.post('https://tu-api.com/contacto', formData).subscribe({
      next: (response) => {
        this.isSubmitting = false;
        this.submitSuccess = true;
        this.contactForm.reset();
        setTimeout(() => this.submitSuccess = false, 5000);
      },
      error: (error) => {
        this.isSubmitting = false;
        this.submitError = true;
        console.error('Error al enviar:', error);
        setTimeout(() => this.submitError = false, 5000);
      }
    });

  }

  // Validadores personalizados para mostrar mensajes específicos
  getErrorMessage(fieldName: string): string {
    const control = this.contactForm.get(fieldName);

    if (!control || !control.touched || !control.errors) {
      return '';
    }

    if (control.errors['required']) {
      return 'Este campo es obligatorio';
    }

    if (control.errors['email']) {
      return 'Ingresá un email válido';
    }

    if (control.errors['minlength']) {
      const minLength = control.errors['minlength'].requiredLength;
      return `Mínimo ${minLength} caracteres`;
    }

    if (control.errors['pattern']) {
      return 'Formato inválido';
    }

    return '';
  }

  hasError(fieldName: string): boolean {
    const control = this.contactForm.get(fieldName);
    return !!(control && control.invalid && control.touched);
  }
}

*/

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  name: string = '';
  email: string = '';
  phone: string = '';
  message: string = '';
  touched = {
    name: false,
    email: false,
    phone: false,
    message: false
  };

  onSubmit(form: NgForm) {
    this.markAllAsTouched();

    if (form.valid) {
      console.log('Formulario enviado:', form.value);
      alert('Mensaje enviado correctamente ✅');
      form.reset();
      this.resetTouched();
    } else {
      alert('Por favor completá todos los campos correctamente ❌');
    }
  }

  private markAllAsTouched() {
    this.touched = {
      name: true,
      email: true,
      phone: true,
      message: true
    };
  }

  private resetTouched() {
    this.touched = {
      name: false,
      email: false,
      phone: false,
      message: false
    };
  }
}


 /*
  onSubmit() {
    if (this.name && this.email && this.phone && this.message) {
      alert('Mensaje enviado con éxito!');
      this.name = this.email = this.phone = this.message = '';
      this.touched = { name: false, email: false, phone: false, message: false };
    } else {
      alert('Por favor, completá todos los campos.');
    }
  }

*/
