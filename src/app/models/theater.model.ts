import { Seat } from "./seat.model";
import { ReactiveFormsModule } from "@angular/forms";
export class Theater {
    id?:number;
    location:string;
    capacity:number;
    seats?:Seat[];

}
