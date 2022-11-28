import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


export interface PeriodicElement {
  Id:number;
  Name: string;
  Room: string;
  Date: string;
  To: string;
  From:string;
  Duration:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {Id:1, Name: 'Ali', Room: 'Conference room', Date: '22-01-01', To:'12:00', From:'1:00', Duration:'1'},
  {Id:2, Name: 'Zahid', Room: 'Conference room2', Date: '22-01-01', To:'1:00', From:'3:00', Duration:'2'},
  {Id:3, Name: 'Nasir', Room: 'Leisure room', Date: '22-01-01', To:'12:00', From:'1:00', Duration:'1'},
  {Id:4, Name: 'Shahid', Room: 'Conference room', Date: '22-01-01', To:'12:00', From:'1:00', Duration:'1'},
  {Id:5, Name: 'Zain', Room: 'Leisure room', Date: '22-01-01', To:'12:00', From:'1:00', Duration:'1'},
  {Id:6, Name: 'Ali', Room: 'Conference room', Date: '22-01-01', To:'12:00', From:'1:00', Duration:'1'},


  
];

@Component({
  selector: 'app-reservation-detail',
  templateUrl: './reservation-detail.component.html',
  styleUrls: ['./reservation-detail.component.css']
})
export class ReservationDetailComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  constructor() { }

  ngOnInit(): void {
    this.DUMMY_DATA.paginator = this.paginator;
  }
  displayedColumns: string[] = ['Id','Name', 'Room', 'Date','To', 'From', 'Duration', 'Action'];
  // DUMMY_DATA = ELEMENT_DATA;
  DUMMY_DATA = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);



}
