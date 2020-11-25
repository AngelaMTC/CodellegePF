import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiciosService } from 'src/app/services/servicios/servicios.service';
import { ValidationService } from 'src/app/services/validation/validation.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  form:FormGroup;

  // Getter Name:
  get ValidName(){
    return this.form.get('name').invalid && this.form.get('name').touched
  }

  // Getter Email:
  get ValidEmail(){
    return this.form.get('email').invalid && this.form.get('email').touched
  }

  // Getter Job:
  get ValidJob(){
    return this.form.get('job').invalid && this.form.get('job').touched
  }

  // Validación de Contraseñas:
  get Password1(){
    return this.form.get('pass1').invalid && this.form.get('pass1').touched
  }
  get Password2(){
    const pass1 = this.form.get('pass1').value;
    const pass2 = this.form.get('pass2').value;
    // If de operador tenario:
    return (pass1 == pass2) ? false : true;
  }

  constructor(
    private fb: FormBuilder,
    private CustomValidation: ValidationService,
    private s: ServiciosService) {
    this.createForm();
  }
usuario = {
  name: '',
  email: '',
  job: ''
};
// Saber cómo funciona el get Lista Users, servicios.service.ts, reactive div List users.
  Servicios: any [] = [];

  ngOnInit(): void {
this.s.getListUsers().subscribe(data => {
  this.Servicios = data;
  console.log(this.Servicios);

  // Agregar opción por default:
  this.Servicios.unshift({
    name: '-- Selecione --',
    code: ''
  });
});
  }

  createForm(){
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.minLength(4)]],
      pass1: ['', Validators.required],
      pass2: ['', Validators.required],
      job: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  enviar(){
    console.log(this.form);
    if(this.form.invalid){
      return Object.values(this.form.controls).forEach(control => {
        control.markAllAsTouched();
        if(control instanceof FormGroup){
          return Object.values(control.controls).forEach(control => control.markAllAsTouched())
        }else{
          control.markAllAsTouched();
        }
      });
    }
  }
}
