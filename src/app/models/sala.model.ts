import { Sede } from "./sede.model"

export class Sala {
    id:number
    nombre:string
    capacidad:number
    disponibilidad:boolean
    sede_id:Sede
}
