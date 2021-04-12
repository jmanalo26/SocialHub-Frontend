import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {MessageService} from '../message.service';
import {User} from '../model/user/User';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import {Tweet} from '../model/twitter/Tweet';
import { Component } from '@angular/core';


const headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json' });
@Injectable({
  providedIn: 'root'
})
export class ImageService {
  title = 'dropzone';

  files: File[] = [];
  userId: string;
  private imageUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient, private messageService: MessageService) {}

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})

  };
  // public uploadImage(image: File): Observable<Response> {
  //   const formData = new FormData();
  //
  //   formData.append('image', image);
  //
  //   return this.http.post('/api/v1/image-upload', formData);
  // }

  /** GET user by username from the server */
  postProfilePicture(image: File) {
    const fd = new FormData();
    fd.append('image', image, image.name);
    console.log('in the post image ');
    this.userId = sessionStorage.getItem('userId');
    console.log(this.userId);
    const url = `${this.imageUrl}/user/save/profileImage/${this.userId}`;
    return this.http.post<User>(url, JSON.stringify(fd), {headers})
      .pipe(
        tap(_ => console.log('fetched user'))
        // catchError(() => observableThrowError('get user by id error'))
      );
  }
  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);

    const formData = new FormData();

    for (var i = 0; i < this.files.length; i++) {
      formData.append("file[]", this.files[i]);
    }

    this.http.post('http://localhost:8001/upload.php', formData)
      .subscribe(res => {
        console.log(res);
        alert('Uploaded Successfully.');
      })
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
}
