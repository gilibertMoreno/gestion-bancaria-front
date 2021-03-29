import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root',
})
export class GeneralService{

  constructor(
    private http: HttpClient
  ) {
  }

  crearBanco(banco:any): Observable<any>{
    return this.http.post('http://localhost:8080/api/bank', banco);
  }

  listarBancos(): Observable<any>{
    return this.http.get('http://localhost:8080/api/bank');
  }

  borrarBanco(data:any): Observable<any>{
   return this.http.request('delete', 'http://localhost:8080/api/bank', {body: data});
  }

  actualizarBanco(banco:any): Observable<any>{
    return this.http.put('http://localhost:8080/api/bank', banco);
  }

  crearPersona(persona:any): Observable<any>{
    return this.http.post('http://localhost:8080/api/person', persona);
  }

  listarPersonas(): Observable<any>{
    return this.http.get('http://localhost:8080/api/person');
  }

  borrarPersona(data:any): Observable<any>{
   return this.http.request('delete', 'http://localhost:8080/api/person', {body: data});
  }

  actualizarPersona(persona:any): Observable<any>{
    return this.http.put('http://localhost:8080/api/person', persona);
  }

  crearCuentaBAncaria(crearCuenta:any): Observable<any>{
    return this.http.post('http://localhost:8080/api/bankperson', crearCuenta);
  }

  listarCuentas(): Observable<any>{
    return this.http.get('http://localhost:8080/api/bankperson');
  }

}
