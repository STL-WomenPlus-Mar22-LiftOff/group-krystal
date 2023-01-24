import { User } from "./user";


export class Symptom {
    id: number = 0;
    symptomName: string = "";
    user: User = {id: "", name: "", email: "", pwHash: ""};
    //userId: string = "0";
    //changed userID to type string to match sessionID
}