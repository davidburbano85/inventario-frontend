import {inject} from '@angular/core';
import{HttpInterceptorFn} from '@angular/common/http';
import{AutenticacionService} from '../../servicios/autenticacion/autenticacion.service';

export const jwtInterceptor: HttpInterceptorFn = (peticion, siguiente) => {
    const servicioAutenticacion = inject(AutenticacionService);
    const token = servicioAutenticacion.obtenerToken();
    if (!token) {
        return siguiente(peticion);
    }
    const peticionClonada = peticion.clone({
        setHeaders: {
            Authorization: `Bearer ${token}`
        }
    });
    return siguiente(peticionClonada);
};