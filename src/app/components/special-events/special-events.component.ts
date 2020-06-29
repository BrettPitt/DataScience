import { Component, OnInit } from '@angular/core';
import {EventService} from "../../services/event.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {

  specialEvents = {name: String, description: String, date: Date};


  constructor(private specialEvent: EventService, private router: Router) { }

  ngOnInit(){

    this.specialEvent.getSpecialEvents()
      .subscribe(
        res => this.specialEvents = res,
        err => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this.router.navigate(['/login']);
            }
          }
        }
      );
  }

}
