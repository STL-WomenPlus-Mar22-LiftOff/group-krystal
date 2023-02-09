import { User } from "./user";


export class Symptom {
    id: number = 0;
    symptomName: String = "";
    user: User = {id: "", name: "", email: "", pwHash: "", confirmPassword: ""};
}