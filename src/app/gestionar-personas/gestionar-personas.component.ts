import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralService } from '../services/general.service';

@Component({
  selector: 'app-gestionar-personas',
  templateUrl: './gestionar-personas.component.html',
  styleUrls: ['./gestionar-personas.component.css']
})
export class GestionarPersonasComponent implements OnInit {
  isVisible:boolean=false;
  validateForm!: FormGroup;
  listOfData: any[] = [];
  edit:boolean=false;
  id:number=0;

  constructor(private fb: FormBuilder, private generalService:GeneralService) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      identification: [null, [Validators.required]],
      names: [null, [Validators.required]],
      lasName: [null, [Validators.required]],
      dateBird: [null, [Validators.required]],
      age: ['', [Validators.required]],
      email: ['', [Validators.required]],
    });
    this.generalService.listarPersonas().subscribe(
      obj=>{
        this.listOfData=obj;
      }
    )
  }



  addPersona(){
    this.validateForm = this.fb.group({
      identification: [null, [Validators.required]],
      names: [null, [Validators.required]],
      lasName: [null, [Validators.required]],
      dateBird: [null, [Validators.required]],
      age: ['', [Validators.required]],
      email: ['', [Validators.required]],
    });
    this.isVisible = true;
  }

  updatePersona(data:any){
    this.validateForm = this.fb.group({
      identification: [data.identification, [Validators.required]],
      names: [data.names, [Validators.required]],
      lasName: [data.lasName, [Validators.required]],
      dateBird: [data.dateBird, [Validators.required]],
      age: [data.age, [Validators.required]],
      email: [data.email, [Validators.required]],
    });
    this.isVisible = true;
    this.edit=true;
    this.id=data.idPerson;

  }

  handleCancel(): void {
    this.isVisible = false;
  }




  submitForm(): void {
    if(this.edit){
      this.updatePerson();
      return;
    }
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if(this.validateForm.valid){
    this.generalService.crearPersona(this.validateForm.value).subscribe(
      obj=>{
        console.log(obj);
        this.generalService.listarPersonas().subscribe(
          obj=>{
            this.listOfData=obj;
          }
        )
      }
    )

    this.isVisible=false;
    }else{
      alert("Agregar los datos correctamente")
    }
  }

  deletePerson(data:any){
    this.generalService.borrarPersona(data).subscribe(
      obj=>{

      },
      error=>{
        alert("Eliminado con exito")
        this.generalService.listarPersonas().subscribe(
          obj=>{
            this.listOfData=obj;
          }
        )
      }
    )

  }

  updatePerson(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if(this.validateForm.valid){
      this.validateForm.value.idPerson=this.id;
    this.generalService.actualizarPersona(this.validateForm.value).subscribe(
      obj=>{
        console.log(obj);
        this.generalService.listarPersonas().subscribe(
          obj=>{
            this.listOfData=obj;
          }
        )
      }
    )
    this.isVisible=false;
    this.edit=false;
    }else{
      alert("Agregar los datos correctamente")
    }
  }



}
