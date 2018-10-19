import { Component } from '@angular/core';
import { MasterService } from './services/master.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private masterService: MasterService) {
    // let req = {
    //   Username: "sample string 1",
    //   Password: "sample string 2"
    // }
    // this.masterService.CallGenericService('AccountService', 'POST', req).subscribe(resp => {
    //   alert("resp");
    // }, error => {
    //   alert("error");
    // });
  }
}
