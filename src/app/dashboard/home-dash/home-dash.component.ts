import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home-dash',
  templateUrl: './home-dash.component.html',
  styleUrls: ['./home-dash.component.css']
})
export class HomeDashComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

}
