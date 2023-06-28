import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { StaffdashboardComponent } from '../staffdashboard/staffdashboard.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LeaveService } from '../../service/leave.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  leaveform ! : FormGroup
  // constructor(private _leaveService:LeaveService,) { }
  constructor(private _dialogRef : MatDialogRef<DialogComponent>
    ,private _leaveService:LeaveService,
    private dialog : MatDialog ,
    @Inject(MAT_DIALOG_DATA) public dialogData : any, private leaveService: LeaveService) {_dialogRef.disableClose = true }

  ngOnInit(): void {
    this.leaveform = new FormGroup({
      startdate:new FormControl(null,[Validators.required]),
      enddate:new FormControl(null,[Validators.required]),
      reason:new FormControl(null,[Validators.required])
    })


  }
  onleave(){
    console.log( this.leaveform.value);
    console.log(this.leaveform.value.enddate - this.leaveform.value.startdate);
    
    let obj ={
     ...this.leaveform.value,
     status:'pending',
     name:localStorage.getItem('username'),
     leavedays:Math.ceil(((this.leaveform.value.enddate).getTime()-(this.leaveform.value.startdate).getTime())/86400000)+1
    }
    console.log(obj);
     this._leaveService.getarray(obj)
     .subscribe(
       res => console.log(res)     
     )
   }

   closedDialog(){
    this._dialogRef.close();
  }
  
 get allformcontrol(){
  return  this.leaveform.controls
  }

}
