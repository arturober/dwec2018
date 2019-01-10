import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-login';
  name: string;
  email: string;
  avatar: string;

  constructor(private ngZone: NgZone) {}

  loggedGoogle(user: gapi.auth2.GoogleUser) {
    // Send this token to your server for register / login
    console.log(user.getAuthResponse().id_token);
    this.ngZone.run(() => {
      this.name = user.getBasicProfile().getName();
      this.email = user.getBasicProfile().getEmail();
      this.avatar = user.getBasicProfile().getImageUrl();
    });
   }

   errorGoogle(error) {
     console.error(error);
   }

  loggedFacebook(resp: FB.LoginStatusResponse) {
    // Send this to your server
    console.log(resp.authResponse.accessToken);
  }

  showError(error) {
    console.error(error);
  }
}
