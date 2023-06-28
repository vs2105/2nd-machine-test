import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LeaveService } from '../../service/leave.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-staffdashboard',
  templateUrl: './staffdashboard.component.html',
  styleUrls: ['./staffdashboard.component.scss']
})
export class StaffdashboardComponent implements OnInit {
  
  leavestatusArr : Array<any> =[]
  TotalLeave!:number
  totalApproved!:number
  totalRejected!:number
  totalpending!:number
  
  constructor(private _dialog:MatDialog,private _leaveService:LeaveService) { }

  
  ngOnInit(): void {
  
    this._leaveService.getallleavearr()
    .subscribe((res)=>{
      console.log(res);   
      if(res){
        this.leavestatusArr = res;
        this.TotalLeave=res.length;
        this.totalApproved=res.filter((ele)=>ele.status === 'Approved').length;
        this.totalRejected= res.filter((ele)=>ele.status === 'Rejected').length;
        this.totalpending=res.filter((ele)=>ele.status === 'pending').length
      }
    })
    
  }
 

  OpenDialogBox(){
    const dialogRef =  this._dialog.open(DialogComponent,{
      width:'600px',
      height:'450px'
    })
 
    dialogRef.afterClosed().subscribe(ele => {
    // console.log("Dialog is Closed")
    })
  }
  }
 




