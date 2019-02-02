import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_service } from "./Model_service"


/**
  passerelle pour goshaba
*/
export class Model_service_goshabaGateway extends   Model_service   implements Interface.Iservice_goshabaGateway {

/**
  passerelle pour goshaba
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["privateKey"] != undefined){
          
           this["privateKey"] = obj["privateKey"].toString() ;
           
        }
        
    
        
        if(obj["packUrl"] != undefined){
          
           this["packUrl"] = obj["packUrl"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "service_goshabaGateway" ;

        
              /**
        clef privée d'echange entre les serveurs
        */
               public "privateKey":string ;
              
       
              /**
        url de la collection de pack de carte
        */
               public "packUrl":string ;
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if( isCompleteObj && (target["privateKey"] == null || target["privateKey"] == undefined) ){
                  throw new Error(path + "privateKey is required") ;
              }
              
              if(target["privateKey"] != null && target["privateKey"] != undefined ){
              
                let _privateKey  = target["privateKey"] ;
                

                 if(! _.isString(_privateKey)){
                    throw new Error(path+"privateKey is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if( isCompleteObj && (target["packUrl"] == null || target["packUrl"] == undefined) ){
                  throw new Error(path + "packUrl is required") ;
              }
              
              if(target["packUrl"] != null && target["packUrl"] != undefined ){
              
                let _packUrl  = target["packUrl"] ;
                

                 if(! _.isString(_packUrl)){
                    throw new Error(path+"packUrl is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_service_goshabaGateway>{
        return Model_service_goshabaGateway.check(target, true, path).then(()=>{
          return new Model_service_goshabaGateway(target) ;
        })
      }

   }
