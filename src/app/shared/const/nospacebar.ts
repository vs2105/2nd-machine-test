import { AbstractControl, ValidationErrors } from "@angular/forms";



export class nospacebarvalidators{
  static  nospace(control:AbstractControl):ValidationErrors | null{
    let val =control.value as string
    if(!val){
        return null
    }

    if(val.includes(' ')){
        return{
            nospacebareeror :`space is not allowed!!`
        }
    }else{
        return null
    }
  }
}