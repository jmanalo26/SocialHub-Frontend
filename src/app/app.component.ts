import {Component} from '@angular/core';
import {NavbarService} from './service/navbar.service';
import {TwitterService} from './service/twitter.service';
import {BehaviorSubject} from 'rxjs';
import {AngularFirestore} from "@angular/fire/firestore";
// import * as moment from 'moment';

// @ts-ignore
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/**
 * The index page of the project.
 */
export class AppComponent {
  //invoke the value changes to invoke and subscribe to an observable
  todo = this.store.collection('todo').valueChanges({idField: 'id'});
  profileImages = this.store.collection('profileImages').valueChanges({idField: 'id'});
  onePostImages = this.store.collection('onePostImages').valueChanges({idField: 'id'});

  sideNav: Promise<string> | null = null;
  displaySideNav = false;
  private resolve: Function | null = null;

  title = 'Social Hub Club';
  hide = false;
  template: `
  <img src="../../images/instagramIcon.png">
`;

  // loggedIn: string;
  loggedIn = false;
  loggedIn$ = new BehaviorSubject(this.loggedIn);
  spotifyUserLoggedIn: boolean = false;

  constructor(private store: AngularFirestore) {
    this.reset();
  }

  reset() {
    this.displaySideNav = false;
    this.sideNav = new Promise<string>((resolve, reject) => {
      this.resolve = resolve;
    });
  }

  /**
   * On page open get the recent post from the user and the number of followers.
   */
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    // this.loggedIn = false;
    console.log('init..');
    console.log(window.location.href);
    if (window.location.href === 'http://localhost:4200/main') {
      console.log('we are on the main page');
      this.displaySideNav = false;
    }
    if (sessionStorage.getItem('loggedIn') === 'true') {
      console.log('logged in....');
      this.loggedIn = true;
    } else {
      console.log('not logged in');
    }
    if (sessionStorage.getItem('userId') !== null) {
      console.log('user id not null');
      // this.loggedIn = 'true';
    }
    sessionStorage.setItem('spotify_user_logged', '' + this.spotifyUserLoggedIn);
  }

  checkLogin() {
    console.log('checking login.......');
    console.log('*****"');
    if (sessionStorage.getItem('loggedIn') === 'true') {
      console.log('logged in....');
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  }

  set login(value) {
    this.loggedIn = value;
    this.loggedIn$.next(this.loggedIn);
  }

  get filter() {
    return this.loggedIn$.asObservable();
  }

  getSpotifyUserLogin() {
    return this.spotifyUserLoggedIn;
  }

  setSpotifyUserLogin(condition: boolean) {
    this.spotifyUserLoggedIn = condition;
    sessionStorage.setItem('spotify_user_logged', '' + condition);
    console.log('current spotify user log status', this.spotifyUserLoggedIn);
  }


}
