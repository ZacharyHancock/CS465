import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Trip } from '../models/trip';
import { Authentication } from '../services/authentication';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-card.html',
  styleUrl: './trip-card.css'
})

export class TripCard implements OnInit {
  @Input('trip') trip: any;

  constructor(private router: Router, private Authentication: Authentication) { }

  public isLoggedIn() {
    return this.Authentication.isLoggedIn();
  }

  ngOnInit(): void {

  }

  public editTrip(trip: Trip) {
    if (!trip?.code) return;
    localStorage.removeItem('tripCode');
    localStorage.setItem('tripCode', this.trip.code);
    this.router.navigate(['edit-trip']);
  }
}
