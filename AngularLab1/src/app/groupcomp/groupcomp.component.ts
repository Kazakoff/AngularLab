import { Grp } from './entity/grp';
import { GroupService } from './group.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groupcomp',
  templateUrl: './groupcomp.component.html',
  styleUrls: ['./groupcomp.component.css'],
    providers: [GroupService]
})
export class GroupcompComponent implements OnInit {

  grps: Grp[];
  constructor(private  groupServ: GroupService) {
   }

  ngOnInit() {
    this.getGroups();
  }
  getGroups() {
     this.groupServ.loadGroups().subscribe( data => {
        this.grps = data;
  });
}
}
