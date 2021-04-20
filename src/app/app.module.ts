// Base
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {MessagesComponent} from './messages/messages.component';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

// Non-Angular imports ex: bootstrap
import {InputUtilitiesModule, MDBBootstrapModulesPro, MDBSpinningPreloader} from 'ng-uikit-pro-standard';
import {CarouselModule, IconsModule, LogoComponent} from 'angular-bootstrap-md';
import {PreloadersModule} from 'ng-uikit-pro-standard';
import {MatCarousel, MatCarouselComponent} from '@ngbmodule/material-carousel';
import {NavbarModule, WavesModule, ButtonsModule} from 'angular-bootstrap-md';
import {ModalModule} from 'angular-bootstrap-md';
import {NgxDropzoneModule} from 'ngx-dropzone';
import {MomentModule} from 'ngx-moment';

// Angular stuff
import {RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DataTablesModule} from 'angular-datatables';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

// Mat Stuff
import {MatSliderModule} from '@angular/material/slider';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule, MatSpinner} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
// import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRippleModule} from '@angular/material/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatTreeModule} from '@angular/material/tree';
import {MatStepperModule} from '@angular/material/stepper';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';

// Facebook Components
import {FacebookComponent} from './facebook/facebook.component';

// Instagram Components
import {InstagramComponent} from './instagram/instagram.component';
import {InstagramSearchComponent} from './instagram-search/instagram-search.component';

// Spotify Components
import {SpotifyComponent} from './spotify/spotify.component';
import {SpotifyLandingComponent} from './spotify-landing/spotify-landing.component';
import {SpotifyPlaylistComponent} from './spotify-playlist/spotify-playlist.component';
import {SpotifyCreatePlaylistComponent} from './spotify-create-playlist/spotify-create-playlist.component';
import {SpotifyArtistComponent} from './spotify-artist/spotify-artist.component';
import {SpotifyUpdatePlaylistComponent} from './spotify-update-playlist/spotify-update-playlist.component';
import {SpotifyAddplaylistSnackbarComponent} from './spotify-addplaylist-snackbar/spotify-addplaylist-snackbar.component';
import {SpotifyAddplaylistWarningComponent} from './spotify-addplaylist-warning/spotify-addplaylist-warning.component';
import {SpotifyFollowedTracksComponent} from './spotify-followed-tracks/spotify-followed-tracks.component';
import {SpotifySearchComponent} from './spotify-search/spotify-search.component';

// Twitter Components
import {TwitterComponent} from './twitter/twitter.component';

// Youtube Components
import {YoutubeComponent} from './youtube/youtube.component';
import {SafePipe} from './youtube/SafePipe.component';

// Other Components
import {DashboardComponent} from './dashboard/dashboard.component';
import {SimpleFormComponent} from './simple-form/simple-form.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {AccountInformationComponent} from './account-information/account-information.component';
import {TimelineComponent} from './timeline/timeline.component';
import {DataTableComponent} from './data-table/data-table.component';
import {AnimatedDigitComponent} from './animated-digit/animated-digit.component';
import {LoadingAnimationComponent} from './loading-animation/loading-animation.component';
import {SideNavComponent} from './side-nav/side-nav.component';
import {ModalComponent} from './modal/modal.component';
import {UpdateAccountComponent} from './update-account/update-account.component';
import {ImageUploadComponent} from './image-upload/image-upload.component';
import {MainComponent} from './main/main.component';
import {HeaderComponent} from './header/header.component';
import {LandingComponent} from './landing/landing.component';
import {FooterComponent} from './footer/footer.component';
import {CollectionComponent} from './collection/collection.component';

// ? Do we need this shit o naw?
// import {IconsModule, InputUtilitiesModule, MDBBootstrapModulesPro, MDBSpinningPreloader} from 'ng-uikit-pro-standard';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import { SimpleFormComponent } from './simple-form/simple-form.component';
// import { OnePostComponent } from './one-post/one-post.component';
import * as moment from 'moment';
import {Moment} from 'moment';
import {FooterComponent} from './footer/footer.component';
// import {NgxDropzoneModule} from 'ngx-dropzone';
import { SideNavComponent } from './side-nav/side-nav.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MomentModule} from 'ngx-moment';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {NgxDropzoneModule} from 'ngx-dropzone';
import {MatTreeModule} from '@angular/material/tree';
import {Moment} from 'moment';
// import { AboutComponent } from './about/about.component';
import {CollectionComponent} from './collection/collection.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
// import {PreloadersModule} from 'ng-uikit-pro-standard';
import { OnePostComponent } from './one-post/one-post.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatTabsModule} from "@angular/material/tabs";
import {GoalModalComponent} from "./goal-modal/goal-modal.component";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {AngularFirestoreModule} from "@angular/fire/firestore";
import {environment} from "../environments/environment";
import {AngularFireModule} from "@angular/fire";
import {AngularFireStorageModule} from "@angular/fire/storage";
import { ImagesComponent } from './images/images.component';
import {AngularFireDatabaseModule} from "@angular/fire/database";

import * as moment from 'moment';
import { MessagesComponent } from './messages/messages.component';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {ScrollingModule} from '@angular/cdk/scrolling';

// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import { SimpleFormComponent } from './simple-form/simple-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
// import { CreateAccountComponent } from './create-account/create-account.component';
// import {MatToolbarModule} from '@angular/material/toolbar';
// import {MatProgressSpinnerModule, MatSpinner} from '@angular/material/progress-spinner';
// import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
// import { DataTableComponent } from './data-table/data-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import { TwitterComponent } from './twitter/twitter.component';
import { AppRoutingModule } from './app-routing.module';
// import { ThrowAwayPageComponent } from './throw-away-page/throw-away-page.component';
import {RouterModule} from '@angular/router';
import {SpotifyComponent} from './spotify/spotify.component';
import { SpotifyLandingComponent } from './spotify-landing/spotify-landing.component';
// import {MatMenuModule, MatDividerModule, MatCardModule, MatSlideToggleModule, MatOptionModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import { DataTableComponent } from './data-table/data-table.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FacebookComponent } from './facebook/facebook.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AccountInformationComponent } from './account-information/account-information.component';
import { TimelineComponent } from './timeline/timeline.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {SpotifyAddplaylistWarningComponent} from './spotify-addplaylist-warning/spotify-addplaylist-warning.component';
import {SpotifyFollowedTracksComponent} from './spotify-followed-tracks/spotify-followed-tracks.component';

// Twitter Components

// Youtube Components
import {YoutubeComponent} from './youtube/youtube.component';
import {SafePipe} from './youtube/SafePipe.component';
//import { DataTableComponent } from './data-table/data-table.component';
import { InstagramComponent } from './instagram/instagram.component';
import { AnimatedDigitComponent } from './animated-digit/animated-digit.component';
import { LoadingAnimationComponent } from './loading-animation/loading-animation.component';
import {NavbarModule, WavesModule, ButtonsModule, CarouselModule} from 'angular-bootstrap-md';
import { InstagramSearchComponent } from './instagram-search/instagram-search.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRippleModule} from '@angular/material/core';
//****
import {MatProgressBarModule} from '@angular/material/progress-bar';
//****
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule } from '@angular/material/dialog';
import {ModalModule} from 'angular-bootstrap-md';
import { ModalComponent } from './modal/modal.component';
import { UpdateAccountComponent } from './update-account/update-account.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import {MatListModule} from '@angular/material/list';
import {MainComponent} from './main/main.component';
import {HeaderComponent} from './header/header.component';
import {LandingComponent} from './landing/landing.component';
import {FooterComponent} from './footer/footer.component';
// import {NgxDropzoneModule} from 'ngx-dropzone';
import { SideNavComponent } from './side-nav/side-nav.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MomentModule} from 'ngx-moment';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {NgxDropzoneModule} from 'ngx-dropzone';
import {MatTreeModule} from '@angular/material/tree';
import {Moment} from 'moment';
// import { AboutComponent } from './about/about.component';
import {CollectionComponent} from './collection/collection.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
// import {PreloadersModule} from 'ng-uikit-pro-standard';
import { OnePostComponent } from './one-post/one-post.component';
import {MatTabsModule} from "@angular/material/tabs";
import {GoalModalComponent} from "./goal-modal/goal-modal.component";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {AngularFirestoreModule} from "@angular/fire/firestore";
import {environment} from "../environments/environment";
import {AngularFireModule} from "@angular/fire";
import {AngularFireStorageModule} from "@angular/fire/storage";

import { ImagesComponent } from './images/images.component';
import {AngularFireDatabaseModule} from "@angular/fire/database";
import {MatExpansionModule} from "@angular/material/expansion";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {SpotifySearchComponent} from "./spotify-search/spotify-search.component";
import {DataTablesModule} from "angular-datatables";
import {SpotifyAddplaylistSnackbarComponent} from "./spotify-addplaylist-snackbar/spotify-addplaylist-snackbar.component";
import {SpotifyUpdatePlaylistComponent} from "./spotify-update-playlist/spotify-update-playlist.component";
import {SpotifyArtistComponent} from "./spotify-artist/spotify-artist.component";
import {SpotifyCreatePlaylistComponent} from "./spotify-create-playlist/spotify-create-playlist.component";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatMenuModule} from "@angular/material/menu";
import {SpotifyPlaylistComponent} from "./spotify-playlist/spotify-playlist.component";

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    MessagesComponent,
    TwitterComponent,
    FacebookComponent,
    SpotifyComponent,
    DashboardComponent,
    SimpleFormComponent,
    LoginPageComponent,
    AccountInformationComponent,
    SpotifyLandingComponent,
    SpotifyPlaylistComponent,
    TimelineComponent,
    LoginPageComponent,
    AccountInformationComponent,
    TimelineComponent,
    DataTableComponent,
    SpotifyCreatePlaylistComponent,
    InstagramComponent,
    InstagramComponent, DataTableComponent,
    MessagesComponent,
    SpotifyArtistComponent,
    SpotifyUpdatePlaylistComponent,
    AnimatedDigitComponent,
    LoadingAnimationComponent,
    SpotifyAddplaylistSnackbarComponent,
    SpotifyAddplaylistWarningComponent,
    SpotifyFollowedTracksComponent,
    ModalComponent,
    UpdateAccountComponent,
    ImageUploadComponent,
    MainComponent,
    HeaderComponent,
    LandingComponent,
    FooterComponent,
    SideNavComponent,
    YoutubeComponent,
    SafePipe,
    CollectionComponent,
    DashboardComponent,
    InstagramSearchComponent,
    SpotifySearchComponent,
    AnimatedDigitComponent,
    OnePostComponent,
    GoalModalComponent,
    ImagesComponent
  ],
  imports: [
    HttpClientModule,
    MatSidenavModule,
    BrowserModule,
    DragDropModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    AppRoutingModule,
    ModalModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSliderModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatMenuModule,
    RouterModule,
    DataTablesModule,
    MatFormFieldModule,
    MatDialogModule,
    MatCardModule,
    MatExpansionModule,
    CarouselModule,
    PreloadersModule,
    MatSidenavModule,
    // PreloadersModule,
    IconsModule,
    NavbarModule,
    WavesModule,
    ButtonsModule,
    MatCardModule,
    MatGridListModule,
    ScrollingModule,
    MatCardModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatRippleModule,
    MatProgressBarModule,
    IconsModule,
    InputUtilitiesModule,
    MatListModule,
    NgxDropzoneModule,
    MatStepperModule,
    MatTreeModule,
    MatAutocompleteModule,
    MomentModule,
    MatButtonToggleModule,
    ScrollingModule,
    MatTabsModule,
    MatTooltipModule,
    ScrollingModule,
    MatTabsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule

  ],
  providers: [ {
    provide: STEPPER_GLOBAL_OPTIONS,
    useValue: { displayDefaultIndicatorType: false }
  }],
  exports: [
    AnimatedDigitComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

