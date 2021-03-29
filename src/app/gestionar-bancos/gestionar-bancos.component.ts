import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralService } from '../services/general.service';

@Component({
  selector: 'app-gestionar-bancos',
  templateUrl: './gestionar-bancos.component.html',
  styleUrls: ['./gestionar-bancos.component.css']
})
export class GestionarBancosComponent implements OnInit {

  isVisible:boolean=false;
  validateForm!: FormGroup;
  listOfData: any[] = [];
  edit:boolean=false;
  id:number=0;

  constructor(private fb: FormBuilder, private generalService:GeneralService) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      nit: [null, [Validators.required]],
      nameBank: [null, [Validators.required]],
      watchword: [null, [Validators.required]],
    });
    this.generalService.listarBancos().subscribe(
      obj=>{
        this.listOfData=obj;
      }
    )
  }



  addBanco(){
    this.validateForm = this.fb.group({
      nit: [null, [Validators.required]],
      nameBank: [null, [Validators.required]],
      watchword: [null, [Validators.required]],
    });
    this.isVisible = true;
  }

  updateBanco(data:any){
    this.validateForm = this.fb.group({
      nit: [data.nit, [Validators.required]],
      nameBank: [data.nameBank, [Validators.required]],
      watchword: [data.watchword, [Validators.required]],
    });
    this.isVisible = true;
    this.edit=true;
    this.id=data.idBank;

  }

  handleCancel(): void {
    this.isVisible = false;
  }




  submitForm(): void {
    if(this.edit){
      this.updateBank();
      return;
    }
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if(this.validateForm.valid){
    this.generalService.crearBanco(this.validateForm.value).subscribe(
      obj=>{
        console.log(obj);
        this.generalService.listarBancos().subscribe(
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

  deleteBank(data:any){
    this.generalService.borrarBanco(data).subscribe(
      obj=>{

      },
      error=>{
        alert("Eliminado con exito")
        this.generalService.listarBancos().subscribe(
          obj=>{
            this.listOfData=obj;
          }
        )
      }
    )

  }

  updateBank(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if(this.validateForm.valid){
      this.validateForm.value.idBank=this.id;
    this.generalService.actualizarBanco(this.validateForm.value).subscribe(
      obj=>{
        console.log(obj);
        this.generalService.listarBancos().subscribe(
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
