import {Component, OnInit} from '@angular/core';
import {LimitService} from './limit.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'conlimit';
  public limit = 0;
  public fact = 0;

  constructor(private limitService: LimitService) {

  }

  ngOnInit() {
    while (true) {
      setTimeout(() => {
        this.getParams();
      }, 3000);
    }
  }

  getParams() {
    let dataResp: any;
    this.limitService.getLimits().subscribe(
      data => {
        dataResp = JSON.stringify(data);
        console.log(dataResp);
        this.limit = dataResp.soe_consumption_plan;
        this.fact = dataResp.soe_consumption_fact;
      }
    );
  }
}
