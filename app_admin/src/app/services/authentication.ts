import { Injectable, Inject } from '@angular/core';
import { BROWSER_STORAGE } from '../../storage';
import { User } from '../models/user';
import { AuthResponse } from '../models/auth-response';
import { TripData } from '../services/trip-data'; 

@Injectable({
  providedIn: 'root'
})
export class Authentication {

  constructor(@Inject(BROWSER_STORAGE) private storage: Storage,
    private tripData: TripData
  ) { }

authResp: AuthResponse = new AuthResponse();


  public getToken(): string {
    let out: any;
    out = this.storage.getItem('travlr_token');

    if (!out) {
      return '';
    }
    return out;
  }

  public saveToken(token: string): void {
    this.storage.setItem('travlr_token', token);
  }

  public logout(): void {
    this.storage.removeItem('travlr_token');
  }

  public isLoggedIn(): boolean {
    const token: string = this.getToken();
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

  public getCurrentUser(): User {
    const token: string = this.getToken();
    const { email, name } = JSON.parse(atob(token.split('.')[1]));
    return { email, name } as User;
  }

  public login(user: User, passwd: string): void {
    this.tripData.login(user, passwd).subscribe({
      next: (value: any) => {
        if (value) {
          console.log(value);
          this.authResp = value;
          this.saveToken(this.authResp.token);
        }
      },
      error: (error: any) => {
        console.log('Error: ' + error);
      }
    })
  }

  public register(user: User, passwd: string): void {
    this.tripData.register(user, passwd)
      .subscribe({
        next: (value: any) => {
          if (value) {
            console.log(value);
            this.authResp = value;
            this.saveToken(this.authResp.token);
          }
        },
        error: (error: any) => {
          console.log('Error: ' + error);
        }
     })
  }


}
