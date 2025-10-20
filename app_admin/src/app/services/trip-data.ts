import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { AuthResponse } from '../models/auth-response';
import { BROWSER_STORAGE } from '../../storage';

import { Trip } from '../models/trip';

@Injectable({
  providedIn: 'root'
})
export class TripData {

  constructor(private http: HttpClient, @Inject(BROWSER_STORAGE) private storage: Storage) { }
  baseUrl = 'http://localhost:3000/api';
  url = 'http://localhost:3000/api/trips';

  login(user: User, passwd: string): Observable<AuthResponse> {
    return this.handleAuthAPICall('login', user, passwd);
  }

  register(user: User, passwd: string): Observable<AuthResponse> {
    return this.handleAuthAPICall('register', user, passwd);
  }

  handleAuthAPICall(endpoint: string, user: User, passwd: string): Observable<AuthResponse> {
    let formData = {
      name: user.name,
      email: user.email,
      password: passwd
    };

    return this.http.post<AuthResponse>(this.baseUrl + '/' + endpoint, formData);
  }

  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.url);

  }

  getTrip(tripCode: string): Observable<Trip> {
    return this.http.get<Trip>(this.url + '/' + tripCode);
  }

  addTrip(trip: Trip): Observable<Trip> {
    return this.http.post<Trip>(this.url, trip);
  }

  updateTrip(trip: Trip): Observable<Trip> {
    return this.http.put<Trip>(this.url + '/' + trip.code, trip);
  }
}
