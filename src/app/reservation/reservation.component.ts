import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';




import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
const GRAPH_ENDPOINT = 'https://graph.microsoft.com/v1.0/me?$select=displayName,officeLocation,usageLocation';
const GRAPH_ENDPOINT_All = 'https://graph.microsoft.com/v1.0/users?$select=displayName,id';
interface Users {

  displayName: string;
  id: string
}


type ProfileType = {
  displayName?: string
  officeLocation?: string
  usageLocation?:string
};



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

  dropdownData : Users[] = [];
  settings:IDropdownSettings={};
  form!:FormGroup;
  selectedItems: any[] = [] ;


constructor(public dialog:MatDialog,private http:HttpClient,  private fb: FormBuilder){}
  selectedValue = 'Options'
  profile?: ProfileType;
profileForm = this.fb.group({
  roomType:['',Validators.required],
  roomOption:['',Validators.required],
  date:['',Validators.required],
  startTime:['',Validators.required],
  endTime:['',Validators.required],

})
  @ViewChild('name') name!:ElementRef;
  @ViewChild('location') loc!:ElementRef;

  closeDialog():any {
    const dialogRef = this.dialog.closeAll()
}

cancelRequest()
{
  const dialogRef = this.dialog.closeAll()
}
  rooms: Room[] = [
    {value: 'Conference Room', viewValue: 'Conference Room'},
    {value: 'Play Room', viewValue: 'Play Room'},

  ];

  conferenceRoomType: Room[] = [
    {value: 'Conference Room 1', viewValue: 'Conference Room 1'},
    {value: 'Conference Room 2', viewValue: 'Conference Room 2'},
    {value: 'Conference Room 3', viewValue: 'Conference Room 3'},
                               ];

LeisureRoomType: Room[] = [
  {value: 'PS4', viewValue: 'PS4'},
  {value: 'Chess', viewValue: 'Chess'},
  {value: 'Ludo', viewValue: 'Ludo'},
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


  ngOnInit(): void {
    this.getProfile();
this.getUsers();

  }
  getUsers(){
    this.http.get(GRAPH_ENDPOINT_All)
    .subscribe(users=>{

     const r = Object.values(users);
    const u=r[1]
       this.dropdownData  =u;

      this.settings = {
        idField: 'id',
        textField: 'displayName',
        selectAllText: "Select All Data",
        unSelectAllText: "UnSelect All Data",
        allowSearchFilter: true,
        noDataAvailablePlaceholderText: "No Profile to Show"
      };

      this.form = this.fb.group({
        myItems: [this.selectedItems]
    });
    })
   }
  getProfile() {
    this.http.get(GRAPH_ENDPOINT)
      .subscribe(profile => {
        this.profile = profile;
this.name.nativeElement.value=this.profile?.displayName
this.loc.nativeElement.value=this.profile?.officeLocation

      });
  }
  CreateUser(){
    // this.router.navigate(['/', 'reservation-detail']);
   }




}
