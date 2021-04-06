import {Component, OnInit} from '@angular/core';
import {SpotifyUser} from '../model/spotify/SpotifyUser';
import {SpotifyService} from '../service/spotify.service';
import {SpotifyArtist} from '../model/spotify/SpotifyArtist';
import {SpotifyTrack} from '../model/spotify/SpotifyTrack';
import {SpotifyPlaylist} from '../model/spotify/SpotifyPlaylist';

@Component({
  selector: 'app-spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.css']
})
export class SpotifyComponent implements OnInit {

  spotifyUser: SpotifyUser;
  artistQuery: SpotifyArtist[];
  artistSearchName: string;
  trackQuery: SpotifyTrack[];
  trackSearchName: string;

  spotifyUserPlaylist: SpotifyPlaylist[];


  constructor(private spotifyService: SpotifyService) {
  }

  ngOnInit(): void {
    this.getUserProfile();
    this.getUserPlaylist();
  }

  getUserProfile() {
    this.spotifyService.getUserProfile().subscribe(spotifyUser => {
      this.spotifyUser = spotifyUser;
    });
    console.log('Get User Profile Called!');
  }

  queryArtist(artistName: string) {
    this.spotifyService.getArtistQuery(artistName).subscribe(artistQuery => {
      this.artistQuery = artistQuery;
    });
  }

  queryTrack(trackName: string) {
    this.spotifyService.getTrackQuery(trackName).subscribe(trackQuery => {
      this.trackQuery = trackQuery;
    });
  }

  getUserPlaylist() {
    this.spotifyService.getUserPlaylist().subscribe(spotifyUserPlaylist => this.spotifyUserPlaylist = spotifyUserPlaylist);
  }

  // getAuthorizationLink() {
  //   this.spotifyService.getAuthorizationLink().subscribe(authorizationLink => {
  //     this.authorizationLink = authorizationLink;
  //   });
  //   console.log('AuthorizationLink has been called');
  //   console.log(this.authorizationLink);
  // }
  //
  // redirectToAuthorizationPage() {
  //   window.location.href = this.authorizationLink;
  //   this.logged = true;
  // }

}