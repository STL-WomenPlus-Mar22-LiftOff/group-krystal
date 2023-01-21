import { User } from "./user";


export class Symptom {
    id: number = 0;
    symptomName: string = "";
    user: User = {id: 0, name: "", email: "", password: "", confirmPassword: ""};
}