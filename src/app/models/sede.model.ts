import { Ciudades } from "./ciudades.model"

export class Sede {
    id:number
    nombre?: string
    direccion?: string
    telefono?: number
    correo_electronico?: string
    ciudad_id?: Ciudades
}
