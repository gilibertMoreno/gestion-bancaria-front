import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralService } from '../services/general.service';

@Component({
  selector: 'app-gestionar-cuentas-bancarias',
  templateUrl: './gestionar-cuentas-bancarias.component.html',
  styleUrls: ['./gestionar-cuentas-bancarias.component.css']

})
export class GestionarCuentasBancariasComponent implements OnInit {

  isVisible:boolean=false;
  validateForm!: FormGroup;
  listOfData: any[] = [];
  listBank: any[]=[];
  listPerson: any[]=[];


  constructor(private fb: FormBuilder, private generalService:GeneralService) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      idPerson: ['', [Validators.required]],
      idBank: ['', [Validators.required]],
    });
    this.generalService.listarCuentas().subscribe(
      obj=>{
        this.listOfData=obj;
      }
    )
  }



  addCuentasBAncos(){
    this.validateForm = this.fb.group({
      idPerson: ['', [Validators.required]],
      idBank: ['', [Validators.required]],
    });
    this.generalService.listarBancos().subscribe(
      obj=>{
        this.listBank=obj;
      }
    )
    this.generalService.listarPersonas().subscribe(
      obj=>{
        this.listPerson=obj;
      }
    )
    this.isVisible = true;
  }



  handleCancel(): void {
    this.isVisible = false;
  }


  
    submitForm(): void {
       for (const i in this.validateForm.controls) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
      if(this.validateForm.valid){
      this.generalService.crearCuentaBAncaria(this.validateForm.value).subscribe(
        obj=>{
          console.log(obj);
          this.generalService.listarCuentas().subscribe(
            obj=>{
              this.listOfData=obj;
            }
          )
        },error=>{
        
          alert(error.error);
        }
      )
  
      this.isVisible=false;
      }else{
        alert("Agregar los datos correctamente")
      } 
    }
  }