import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {
  // readonly BASE_URL = 'http://localhost:5000/';
  readonly BASE_URL = 'https://carpool-server-39059.firebaseapp.com/';
  readonly URL = {
    notificationSubscribe: this.BASE_URL + 'notification/subscribe',
    notificationSend: this.BASE_URL + 'notification/send'
  };
  constructor(private http: HttpClient) { }

  registerForPushNotification(sub: any): Observable<any> {
    console.log('Service URL : ', URL);
    return this.http.post(this.URL.notificationSubscribe, sub);
  }

  sendNotification(): Observable<any> {
    console.log('Send Notification is working fine');
    return this.http.post(this.URL.notificationSend, {});
  }
}
