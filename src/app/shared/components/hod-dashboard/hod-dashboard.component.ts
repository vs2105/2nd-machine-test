import { Component, OnInit } from '@angular/core';
import { LeaveService } from '../../service/leave.service';

@Component({
  selector: 'app-hod-dashboard',
  templateUrl: './hod-dashboard.component.html',
  styleUrls: ['./hod-dashboard.component.scss']
})
export class HodDashboardComponent implements OnInit {
  staffleave : Array<any> =[]
  updatearray:Array<any>=[]
  afterclickapproved!:string
  afterclickrejected!:string
  geteditedid!:number

  constructor(private _leaveService:LeaveService) { }

  ngOnInit(): void {
    this._leaveService.getallleavearr()
    .subscribe(res=>{
      console.log(res);
      this.staffleave = res
    }
    )

    // this._leaveService.getallleavearr()
    // .subscribe(res=>{console.log(res);
    //   this.updatearray = res
    // })
  }

  onbtnClick(str:string, obj:any){
    if(str === 'Approved'){
      this.afterclickapproved = str
    }else if(str === 'Rejected') {
      this.afterclickrejected = str
    }

    this.geteditedid = obj.id
    console.log(obj);
   let updateobj={
    startdate:obj.startdate,
    enddate:obj.enddate,
    reason:obj.reason,
    status:str,
    leavedays:obj.leavedays,
    id:obj.id
    }
    console.log(updateobj);
     
    this._leaveService.updateobj1(updateobj)
      .subscribe(data=>{
        var obj=data;
        console.log(obj);


        // let findindex= this.staffleave.findIndex((ele=>ele.id === obj.id))
        //  console.log(findindex);
        //  this.staffleave.splice(findindex,1,obj)
         
      })

      
      this._leaveService.getallleavearr()
      .subscribe(res=>{
        console.log(res);
        this.updatearray = res
      })

     
  }

}
