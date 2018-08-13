import { Group } from './entity/group';
import { URLs } from '../urls';
import { Grp } from './entity/grp';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GroupService {
  gr: Group;
  public GROUPS: Group[] = [
  { id: 11, name: 'Ит-1' },
  { id: 12, name: 'А-30' },
  { id: 13, name: 'Ит-2' },
];

  constructor(private http: HttpClient) { }
   saveGroup(gr: Grp) {
      return this.http.put(URLs.PUT_GROUP, gr, URLs.httpOptions); // если id тащиться из отправленной gr
//    если нет то this.http.put(URLs.PUT_GROUP+gr.id

 /*return this.http.put(PUT_ABITURIENT_ADDITONAL_INFORMATION + this.userid, body, {
      headers: this.addHeaders(),
      withCredentials: true
    });
 */
  }

  loadGroups(): Observable<Grp[]> {
   return this.http.get<Grp[]>(URLs.GET_GROUPS);
}
}
