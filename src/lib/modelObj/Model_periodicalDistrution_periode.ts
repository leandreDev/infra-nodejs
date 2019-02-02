import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_periodicalDistrution } from "./Model_periodicalDistrution"


/**
  permet de créer une plage de date de distribution
*/
export class Model_periodicalDistrution_periode extends   Model_periodicalDistrution   implements Interface.IperiodicalDistrution_periode {

/**
  permet de créer une plage de date de distribution
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["startDate"] != undefined){
          
            this["startDate"] = new Date(obj["startDate"]) ;
          
        }
        
    
        
        if(obj["endDate"] != undefined){
          
            this["endDate"] = new Date(obj["endDate"]) ;
          
        }
        
    
  }
  

    public _class:string  = "periodicalDistrution_periode" ;

        
              /**
        date de début de distribution
        */
               public "startDate"?:Date ;
              
       
              /**
        date de fin de distribution
        */
               public "endDate"?:Date ;
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if(target["startDate"] != null && target["startDate"] != undefined ){
              
                let _startDate  = target["startDate"] ;
                
                if(! _.isDate(_startDate)){

                      throw new Error(path+"startDate is not a Date") ;
                      
                }
                
                
                
              
              
           }
           
              
              if(target["endDate"] != null && target["endDate"] != undefined ){
              
                let _endDate  = target["endDate"] ;
                
                if(! _.isDate(_endDate)){

                      throw new Error(path+"endDate is not a Date") ;
                      
                }
                
                
                
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_periodicalDistrution_periode>{
        return Model_periodicalDistrution_periode.check(target, true, path).then(()=>{
          return new Model_periodicalDistrution_periode(target) ;
        })
      }

   }
