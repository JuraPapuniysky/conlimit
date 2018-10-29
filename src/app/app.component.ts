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
    this.getParams();
    setInterval(() => {
      this.getParams();
    }, 25000);
  }

  getParams() {
    let dataResp: any;
    this.limitService.getLimits().subscribe(
      data => {
        dataResp = data;
        this.limit = dataResp.data.plan;
        this.fact = dataResp.data.fact;
      }
    );
  }
}
