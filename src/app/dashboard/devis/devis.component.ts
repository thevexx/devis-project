import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminService } from '../../shared/admin.service';

@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.css']
})
export class DevisComponent implements OnInit {

  devisList = [];
  constructor(private modalService: NgbModal, private adminService: AdminService) {
    this.devisList = this.adminService.devisList;
  }

  ngOnInit() {
    this.adminService.getListDevis().subscribe((data: any) => {
      this.devisList = data.data;
      this.adminService.devisList = data.data;
    });
  }

  openModal(modal) {
    this.modalService.open(modal);
  }

}
