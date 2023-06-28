import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LeaveService } from '../../service/leave.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {
  
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
