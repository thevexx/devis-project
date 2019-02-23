import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-demande-devis',
  templateUrl: './demande-devis.component.html',
  styleUrls: ['./demande-devis.component.css', '../../assets/css/login.css']
})
export class DemandeDevisComponent implements OnInit {

  devisForm: FormGroup;
  message = '';

  constructor(private authService: AuthService) {
    this.devisForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      tel: new FormControl('', [Validators.required]),
      company: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
      serviceType: new FormControl('', [Validators.required]),
      dateLimit: new FormControl('', []),
      description: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
  }

  createDevisBtn(form) {
    console.log(form.value);
    if (form.valid) {
      this.authService.createDevis(form.value).subscribe((res: any) => {
        console.log(res);
        this.message = res.msg;
      });
    }
  }

}
