import { SubjectSubscriber } from "rxjs/internal/Subject";
import { User } from "./user";
import { Symptom } from "./symptom";
import { nullSafeIsEquivalent } from "@angular/compiler/src/output/output_ast";

export class DailyEntry {
   
    date: string = "";
    rating: number = 0;
    symptom: Symptom ={id: 0, 
                       symptomName:"", 
                       user: {id: "", name: "", email: "", pwHash: ""}};
}