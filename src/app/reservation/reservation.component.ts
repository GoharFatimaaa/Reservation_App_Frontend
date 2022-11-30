import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Room {
  value: string;
  viewValue: string;
}

interface Participants {
  value: string;
  viewValue: string;
}

interface startTime {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  rooms: Room[] = [
    {value: 'Conference Room', viewValue: 'Conference Room'},
    {value: 'Play Room', viewValue: 'Play Room'},

  ];

  participents: Participants[] = [
    {value: '1', viewValue: 'Ali Mumtaz'},
    {value: '2', viewValue: 'Azeem Zafar'},
    {value: '3', viewValue: 'Hassan Khalid'},
  ];
  startTime: startTime[] = [
    {value: '1', viewValue: '10:00 am'},
    {value: '2', viewValue: '10:30 am'},
    {value: '3', viewValue: '11:00 am'},
    {value: '4', viewValue: '11:30 am'},
    {value: '5', viewValue: '12:00 pm'},
    {value: '6', viewValue: '12:30 pm'},
    {value: '7', viewValue: '1:00 pm'},
    {value: '8', viewValue: '1:30 pm'},
    {value: '9', viewValue: '2:00 pm'},
    {value: '10', viewValue: '2:30 pm'},
    {value: '11', viewValue: '3:00 pm'},
    {value: '12', viewValue: '3:30 pm'},
    {value: '13', viewValue: '4:00 pm'},
    {value: '14', viewValue: '4:30 pm'},
    {value: '15', viewValue: '5:00 pm'},
    {value: '16', viewValue: '5:30 pm'},
    {value: '17', viewValue: '6:00 pm'},
    {value: '18', viewValue: '6:30 pm'},
    {value: '19', viewValue: '7:00 pm'},
    {value: '20', viewValue: '7:30 pm'},
    {value: '21', viewValue: '8:00 pm'},
    {value: '22', viewValue: '8:30 pm'},
    {value: '23', viewValue: '9:00 pm'},
    {value: '24', viewValue: '9:30 pm'},
    {value: '25', viewValue: '10:00 pm'},

  ];
  constructor() { }

  ngOnInit(): void {
  }
  CreateUser(){
    // this.router.navigate(['/', 'reservation-detail']); 
   }

}
