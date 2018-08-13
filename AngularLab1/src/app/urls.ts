import { HttpHeaders } from '@angular/common/http';
const HOST = 'http://localhost:8080/REST/api/';
export class URLs {
  public static GET_GROUPS: string = HOST + 'group';
  public static GET_STUDENTS: string = HOST + 'student';
  public static PUT_GROUP:string = HOST + 'group';
  public static httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
}
