import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public router:Router) { }

  data= [
        {ticketId:'ABC123',ticketName:'Bronet Axis',reporter:'Ikhsan',createDate:'2020-09-04',status:'green',activity:'Initial Ticket',productStream:'AXIS'},
        {ticketId:'ABC234',ticketName:'Sisnet Axis',reporter:'Sunarto',createDate:'2020-06-01',status:'green',activity:'Approved by BRM',productStream:'PREPAID'},
        {ticketId:'ABC345',ticketName:'Internet Axis',reporter:'Sunardi',createDate:'2020-09-02',status:'yellow',activity:'Waiting Approval',productStream:'POSTPAID'},
        {ticketId:'ABC456',ticketName:'Gamers Package',reporter:'Sunjaya',createDate:'2020-07-19',status:'red',activity:'Withdrew by BRM',productStream:'VAS'},
        {ticketId:'ABC567',ticketName:'Paket Mantep',reporter:'Kimihime',createDate:'2020-08-22',status:'green',activity:'Approved by Tester',productStream:'AXIS'},
  ];

  logout(){
    this.router.navigateByUrl('/');
  }

  modalFlag:boolean = false;

  showModal(){
    if(this.modalFlag == false){
      document.getElementById('modal').style.top = '70px';
      document.getElementById('arrow').style.webkitTransform = 'rotate(180deg)';
      this.modalFlag=true;
    }
    else{
      document.getElementById('modal').style.top = '-200px';
      document.getElementById('arrow').style.webkitTransform = 'rotate(360deg)';
      this.modalFlag=false;
    }
  }

  ngOnInit() {
  }
}
