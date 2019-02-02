import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_periodicalDistrution } from "./Model_periodicalDistrution"


/**
  permet de limiter la distribution chaque jour du mois
*/
export class Model_periodicalDistrution_month extends   Model_periodicalDistrution   implements Interface.IperiodicalDistrution_month {

/**
  permet de limiter la distribution chaque jour du mois
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["startDay"] != undefined){
          
           this["startDay"] = new Number(obj["startDay"]).valueOf();
          
        }
        
    
        
        if(obj["endDay"] != undefined){
          
           this["endDay"] = new Number(obj["endDay"]).valueOf();
          
        }
        
    
  }
  

    public _class:string  = "periodicalDistrution_month" ;

        
              /**
        jour de début de distribution
        */
               public "startDay"?:number =1;
              
       
              /**
        jour de fin de distribution
        */
               public "endDay"?:number =31;
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if(target["startDay"] != null && target["startDay"] != undefined ){
              
                let _startDay  = target["startDay"] ;
                
                  if(! _.isNumber(_startDay)){
                      throw new Error(path+"startDay is not a number") ;
                      
                  }
                  
                  if(_startDay > 1){
                    throw new Error(path+"startDay must be greater than  1" ) ;
                    
                  }
                
                
                  if(_startDay < 31){
                    throw new Error(path+"startDay must be less than 31" ) ;
                    
                  }
                
                
                  if(_startDay % 1 > 0){
                    throw new Error(path+"startDay must be have a step of 1" ) ;
                    
                  }
                

                
              
              
           }
           
              
              if(target["endDay"] != null && target["endDay"] != undefined ){
              
                let _endDay  = target["endDay"] ;
                
                  if(! _.isNumber(_endDay)){
                      throw new Error(path+"endDay is not a number") ;
                      
                  }
                  
                  if(_endDay > 1){
                    throw new Error(path+"endDay must be greater than  1" ) ;
                    
                  }
                
                
                  if(_endDay < 31){
                    throw new Error(path+"endDay must be less than 31" ) ;
                    
                  }
                
                
                  if(_endDay % 1 > 0){
                    throw new Error(path+"endDay must be have a step of 1" ) ;
                    
                  }
                

                
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_periodicalDistrution_month>{
        return Model_periodicalDistrution_month.check(target, true, path).then(()=>{
          return new Model_periodicalDistrution_month(target) ;
        })
      }

   }
