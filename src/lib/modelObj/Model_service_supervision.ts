import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_service } from "./Model_service"


/**
  service_supervision
*/
export class Model_service_supervision extends   Model_service   implements Interface.Iservice_supervision {

/**
  service_supervision
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["mongoosePath"] != undefined){
          
           this["mongoosePath"] = obj["mongoosePath"].toString() ;
           
        }
        
    
        
        if(obj["mongoAuthSource"] != undefined){
          
           this["mongoAuthSource"] = obj["mongoAuthSource"].toString() ;
           
        }
        
    
        
        if(obj["services"] != undefined && obj["services"] != null && _.isArray(obj["services"])){
          

            this["services"] = obj["services"].map((value)=>{
              if(value._class){
                return new Index[value._class](value) ;
              }else{
                return new Index["service_supervision_service_conf"](value) ;
              }
            })
            
          
        }
        
    
  }
  

    public _class:string  = "service_supervision" ;

        
              /**
        mongoosePath vers les log
        */
               public "mongoosePath"?:string ;
              
       
              /**
        base sur laquelle la connexion s'etabli
        */
               public "mongoAuthSource"?:string ;
              
       
              /**
        configuration de démarrages des services
        */
               public "services"?:Interface.Iservice_supervision_service_conf[];
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if(target["mongoosePath"] != null && target["mongoosePath"] != undefined ){
              
                let _mongoosePath  = target["mongoosePath"] ;
                

                 if(! _.isString(_mongoosePath)){
                    throw new Error(path+"mongoosePath is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["mongoAuthSource"] != null && target["mongoAuthSource"] != undefined ){
              
                let _mongoAuthSource  = target["mongoAuthSource"] ;
                

                 if(! _.isString(_mongoAuthSource)){
                    throw new Error(path+"mongoAuthSource is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["services"] != null && target["services"] != undefined ){
              
                  target["services"].forEach((_services , index:number)=>{
                  
                  
                    promArr.push( Index["service_supervision_service_conf"].check(_services, isCompleteObj , path+"services.")
                      .catch((err)=>{
                        throw new Error(path+"services index: "+ index +"is not service_supervision_service_conf")
                        

                      }) )
                  if(_services._class != null && _services._class != undefined){
                    promArr.push( Index[_services._class].check(_services, isCompleteObj , path+"services.")
                      .catch((err)=>{
                        throw new Error(path+"services index: "+ index +"is not a " + _services._class )
                        

                      })
                    )
                  }

                  });
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_service_supervision>{
        return Model_service_supervision.check(target, true, path).then(()=>{
          return new Model_service_supervision(target) ;
        })
      }

   }
