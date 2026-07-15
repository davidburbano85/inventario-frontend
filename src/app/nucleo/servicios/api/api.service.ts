import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ENTORNO } from '../../configuracion/entorno';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private readonly http = inject(HttpClient);
    private readonly baseUrl = ENTORNO.api.urlBase;
    // se crea una variable para la url base de la api

    obtener<T>(ruta: string): Observable<T> {
        return this.http.get<T>(`${this.baseUrl}${ruta}`);
    }//aqui se crea un metodo generico para obtener datos de la api, 
    //recibe como parametro la ruta de la api y retorna un observable del tipo T 
    // que es el tipo de dato que se espera recibir de la api

    crear<T>(ruta: string, datos: unknown): Observable<T> {
        return this.http.post<T>(`${this.baseUrl}${ruta}`, datos);
    }//aqui se crea un metodo generico para crear datos en la api,
    //recibe como parametro la ruta de la api y los datos a enviar, 
    //retorna un observable del tipo T que es el tipo de dato que se espera recibir de la api

    actualizar<T>(ruta: string, datos: unknown): Observable<T> {
        return this.http.put<T>(`${this.baseUrl}${ruta}`, datos);
    }

    eliminar<T>(ruta: string): Observable<T> {
        return this.http.delete<T>(`${this.baseUrl}${ruta}`);
    }

}
