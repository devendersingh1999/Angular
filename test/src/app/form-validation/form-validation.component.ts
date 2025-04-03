
import { Component, signal, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-validation.component.html',
  styleUrl: './form-validation.component.css'
})

export class FormValidationComponent {
  private fb = inject(FormBuilder); // ✅ Using inject() instead of constructor injection
  todoForm: FormGroup = this.fb.group({
    todoCheck: [false, Validators.requiredTrue] // ✅ Must be checked
  });

  submitForm() {
    if (this.todoForm.valid) {
      console.log('Form Submitted', this.todoForm.value);
    } else {
      console.log('Form Invalid');
    }
  }
}
