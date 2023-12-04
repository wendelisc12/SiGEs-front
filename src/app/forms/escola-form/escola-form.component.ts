import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EscolaService } from '../../services/escola.service';

@Component({
  selector: 'app-escola',
  templateUrl: './escola-form.component.html',
  styleUrls: ['./escola-form.component.css']
})
export class EscolaComponent implements OnInit {

  escolaForm!: FormGroup;
  enrolledStudents: any[] = [];
submittedFormData: any;

  constructor(private formBuilder: FormBuilder, private escolaService: EscolaService) {}

  ngOnInit() {
    this.initializeForm();
    this.loadEnrolledStudents(); // Load existing enrolled students when the component initializes
  }

  initializeForm() {
    this.escolaForm = this.formBuilder.group({
      nomeAluno: ['', Validators.required],
      nomeResponsavel: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      serie: ['', Validators.required],
      dataPagamento: ['', Validators.required]
    });
  }


  onSubmit() {
    if (this.escolaForm.valid) {
      const formData = this.escolaForm.value;

      this.escolaService.addAluno(formData).subscribe(
        response => {

          this.loadEnrolledStudents();
          this.escolaForm.reset();
        },
        error => {
          console.error('Erro ao enviar o formulário', error);
        }
      );
    } else {
      alert('Por favor, preencha todos os campos corretamente.');
    }
  }

  loadEnrolledStudents() {
    this.escolaService.getAlunos().subscribe(
      (students: any[]) => {
        this.enrolledStudents = students;
      },
      error => {
        console.error('Error fetching students', error);
      }
    );
  }

  deleteStudent(id: number) {
    if (confirm('Are you sure you want to delete this student?')) {
      this.escolaService.deleteAluno(id).subscribe(
        () => {
          
          this.loadEnrolledStudents();
        },
        error => {
          console.error('Error deleting student', error);
        }
      );
    }
  }
}
