import { Servicios } from "./servicios.model"

export class Traslados {
    id?:number;
    origen:string;
    destino:string;
    fecha:Date;
    servicio?:Servicios;
}
