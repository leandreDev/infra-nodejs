import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;



/**
  période de distribution
*/
export class Model_periodicalDistrution extends  Base  implements Interface.IperiodicalDistrution {

/**
  période de distribution
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["nbMax"] != undefined){
          
           this["nbMax"] = new Number(obj["nbMax"]).valueOf();
          
        }
        
    
        
        if(obj["currentNb"] != undefined){
          
           this["currentNb"] = new Number(obj["currentNb"]).valueOf();
          
        }
        
    
  }
  

    public _class:string  = "periodicalDistrution" ;

        
              /**
        nombre maximum de distribution sur cette periode
        */
               public "nbMax"?:number ;
              
       
              /**
        nombre de licence disponible sur la période actuelle
        */
               public "currentNb"?:number ;
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if(target["nbMax"] != null && target["nbMax"] != undefined ){
              
                let _nbMax  = target["nbMax"] ;
                
                  if(! _.isNumber(_nbMax)){
                      throw new Error(path+"nbMax is not a number") ;
                      
                  }
                  
                
                
                  if(_nbMax % 1 > 0){
                    throw new Error(path+"nbMax must be have a step of 1" ) ;
                    
                  }
                

                
              
              
           }
           
              
              if(target["currentNb"] != null && target["currentNb"] != undefined ){
              
                let _currentNb  = target["currentNb"] ;
                
                  if(! _.isNumber(_currentNb)){
                      throw new Error(path+"currentNb is not a number") ;
                      
                  }
                  
                
                
                  if(_currentNb % 1 > 0){
                    throw new Error(path+"currentNb must be have a step of 1" ) ;
                    
                  }
                

                
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_periodicalDistrution>{
        return Model_periodicalDistrution.check(target, true, path).then(()=>{
          return new Model_periodicalDistrution(target) ;
        })
      }

   }
