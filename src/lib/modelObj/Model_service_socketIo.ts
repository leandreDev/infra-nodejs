import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_service } from "./Model_service"


/**
  communication temps réelle multi format
*/
export class Model_service_socketIo extends   Model_service   implements Interface.Iservice_socketIo {

/**
  communication temps réelle multi format
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["returnValue"] != undefined){
          
           this["returnValue"] = obj["returnValue"].toString() ;
           
        }
        
    
        
        if(obj["allowCrossOrigin"] != undefined){
          
           this["allowCrossOrigin"] = new Boolean(obj["allowCrossOrigin"]).valueOf() ;
          
        }
        
    
        
        if(obj["socketIo"] != undefined){
          
            if(obj._class){
              this["socketIo"] =  new Index[obj._class](obj["socketIo"]) ;
            }else{
              this["socketIo"] =  new Index["socketIoConfig"](obj["socketIo"]) ;
            }
          
        }
        
    
  }
  

    public _class:string  = "service_socketIo" ;

        
              /**
        la valeur a retourner
        */
               public "returnValue"?:string ;
              
       
              /**
        allowCrossOrigin
        */
               public "allowCrossOrigin"?:boolean ;
              
       
              /**
        socketIo configuration
        */
               public "socketIo"?:Interface.IsocketIoConfig;
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if(target["returnValue"] != null && target["returnValue"] != undefined ){
              
                let _returnValue  = target["returnValue"] ;
                

                 if(! _.isString(_returnValue)){
                    throw new Error(path+"returnValue is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["allowCrossOrigin"] != null && target["allowCrossOrigin"] != undefined ){
              
                let _allowCrossOrigin  = target["allowCrossOrigin"] ;
                
                  if(! _.isBoolean(_allowCrossOrigin)){
                    throw new Error(path+"allowCrossOrigin is not a boolean") ;
                    
                  }
                

              
              
           }
           
              
              if(target["socketIo"] != null && target["socketIo"] != undefined ){
              
                  let _socketIo  = target["socketIo"] ;
                  
                  
                    promArr.push( Index["socketIoConfig"].check(_socketIo, isCompleteObj , path+"socketIo.")
                      .catch((err)=>{
                        throw new Error(path+"socketIo is not ") ;
                        

                      }) )
                  if(_socketIo._class != null && _socketIo._class != undefined){
                    promArr.push( Index[_socketIo._class].check(_socketIo, isCompleteObj , path+"socketIo.")
                      .catch((err)=>{
                        throw new Error(path+"socketIo is not a " + _socketIo._class ) ;
                        

                      })
                    )
                  }

                  
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_service_socketIo>{
        return Model_service_socketIo.check(target, true, path).then(()=>{
          return new Model_service_socketIo(target) ;
        })
      }

   }
