import { Component } from '@angular/core';
import {RegisterRequest} from "../../models/register-request";
import {AuthenticationResponse} from "../../models/authentication-response";
import {AuthenticationService} from "../../serives/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pre-enrollement',
  templateUrl: './pre-enrollement.component.html',
  styleUrls: ['./pre-enrollement.component.scss']
})
export class PreEnrollementComponent {
  registerRequest: RegisterRequest = {};
  authResponse: AuthenticationResponse = {};
  message = '';
  otpCode = '';

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {
  }

  registerUser() {
    this.message = '';
    this.authService.register(this.registerRequest)
      .subscribe({
        next: (response) => {
          if (response) {
            this.authResponse = response;
          } else {
            // inform the user
            this.message = 'Vous avez ete pre-enrole avec succes.\n';
            // setTimeout(() => {
            //   // this.router.navigate(['login']);
            // }, 3000)
          }
        }
      });

  }
}



