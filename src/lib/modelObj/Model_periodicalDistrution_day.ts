import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_periodicalDistrution } from "./Model_periodicalDistrution"


/**
  journée autorisé
*/
export class Model_periodicalDistrution_day extends   Model_periodicalDistrution   implements Interface.IperiodicalDistrution_day {

/**
  journée autorisé
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["lundi"] != undefined){
          
           this["lundi"] = new Boolean(obj["lundi"]).valueOf() ;
          
        }
        
    
        
        if(obj["mardi"] != undefined){
          
           this["mardi"] = new Boolean(obj["mardi"]).valueOf() ;
          
        }
        
    
        
        if(obj["mercredi"] != undefined){
          
           this["mercredi"] = new Boolean(obj["mercredi"]).valueOf() ;
          
        }
        
    
        
        if(obj["jeudi"] != undefined){
          
           this["jeudi"] = new Boolean(obj["jeudi"]).valueOf() ;
          
        }
        
    
        
        if(obj["vendredi"] != undefined){
          
           this["vendredi"] = new Boolean(obj["vendredi"]).valueOf() ;
          
        }
        
    
        
        if(obj["samedi"] != undefined){
          
           this["samedi"] = new Boolean(obj["samedi"]).valueOf() ;
          
        }
        
    
        
        if(obj["dimanche"] != undefined){
          
           this["dimanche"] = new Boolean(obj["dimanche"]).valueOf() ;
          
        }
        
    
  }
  

    public _class:string  = "periodicalDistrution_day" ;

        
              /**
        distribution autorisé le lundi
        */
               public "lundi"?:boolean ;
              
       
              /**
        distribution autorisé le mardi
        */
               public "mardi"?:boolean ;
              
       
              /**
        distribution autorisé le  mercredi
        */
               public "mercredi"?:boolean ;
              
       
              /**
        distribution autorisé le jeudi
        */
               public "jeudi"?:boolean ;
              
       
              /**
        distribution autorisé le vendredi
        */
               public "vendredi"?:boolean ;
              
       
              /**
        distribution autorisé le samedi
        */
               public "samedi"?:boolean ;
              
       
              /**
        distribution autorisé le dimanche
        */
               public "dimanche"?:boolean ;
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if(target["lundi"] != null && target["lundi"] != undefined ){
              
                let _lundi  = target["lundi"] ;
                
                  if(! _.isBoolean(_lundi)){
                    throw new Error(path+"lundi is not a boolean") ;
                    
                  }
                

              
              
           }
           
              
              if(target["mardi"] != null && target["mardi"] != undefined ){
              
                let _mardi  = target["mardi"] ;
                
                  if(! _.isBoolean(_mardi)){
                    throw new Error(path+"mardi is not a boolean") ;
                    
                  }
                

              
              
           }
           
              
              if(target["mercredi"] != null && target["mercredi"] != undefined ){
              
                let _mercredi  = target["mercredi"] ;
                
                  if(! _.isBoolean(_mercredi)){
                    throw new Error(path+"mercredi is not a boolean") ;
                    
                  }
                

              
              
           }
           
              
              if(target["jeudi"] != null && target["jeudi"] != undefined ){
              
                let _jeudi  = target["jeudi"] ;
                
                  if(! _.isBoolean(_jeudi)){
                    throw new Error(path+"jeudi is not a boolean") ;
                    
                  }
                

              
              
           }
           
              
              if(target["vendredi"] != null && target["vendredi"] != undefined ){
              
                let _vendredi  = target["vendredi"] ;
                
                  if(! _.isBoolean(_vendredi)){
                    throw new Error(path+"vendredi is not a boolean") ;
                    
                  }
                

              
              
           }
           
              
              if(target["samedi"] != null && target["samedi"] != undefined ){
              
                let _samedi  = target["samedi"] ;
                
                  if(! _.isBoolean(_samedi)){
                    throw new Error(path+"samedi is not a boolean") ;
                    
                  }
                

              
              
           }
           
              
              if(target["dimanche"] != null && target["dimanche"] != undefined ){
              
                let _dimanche  = target["dimanche"] ;
                
                  if(! _.isBoolean(_dimanche)){
                    throw new Error(path+"dimanche is not a boolean") ;
                    
                  }
                

              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_periodicalDistrution_day>{
        return Model_periodicalDistrution_day.check(target, true, path).then(()=>{
          return new Model_periodicalDistrution_day(target) ;
        })
      }

   }
