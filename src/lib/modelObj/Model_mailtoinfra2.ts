import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_service } from "./Model_service"


/**
  retrouve la configuration de connection de l'app savy a partir du mail de l'utilisateur
*/
export class Model_mailtoinfra2 extends   Model_service   implements Interface.Imailtoinfra2 {

/**
  retrouve la configuration de connection de l'app savy a partir du mail de l'utilisateur
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["ssoBdUrl"] != undefined){
          
           this["ssoBdUrl"] = obj["ssoBdUrl"].toString() ;
           
        }
        
    
        
        if(obj["infraBdUrl"] != undefined){
          
           this["infraBdUrl"] = obj["infraBdUrl"].toString() ;
           
        }
        
    
        
        if(obj["savyLearnerId"] != undefined){
          
          if(_.isString(obj["savyLearnerId"])){
            this["savyLearnerId"] = obj["savyLearnerId"];
          }else if(obj["savyLearnerId"]._id){
            this["savyLearnerId"] = obj["savyLearnerId"]._id ;
          }
          
        }
        
    
        
        if(obj["confMapping"] != undefined && obj["confMapping"] != null && _.isArray(obj["confMapping"])){
          

            this["confMapping"] = obj["confMapping"].map((value)=>{
              if(value._class){
                return new Index[value._class](value) ;
              }else{
                return new Index["mail_connexion_conf"](value) ;
              }
            })
            
          
        }
        
    
  }
  

    public _class:string  = "mailtoinfra2" ;

        
              /**
        url de la base de donnée du sso
        */
               public "ssoBdUrl":string ;
              
       
              /**
        url du service de base de donnée de l'infra
        */
               public "infraBdUrl":string ;
              
       
              /**
        id de l'application savy
        */
               public "savyLearnerId"?:string ;
              
       
              /**
        confMapping
        */
               public "confMapping"?:Interface.Imail_connexion_conf[];
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if( isCompleteObj && (target["ssoBdUrl"] == null || target["ssoBdUrl"] == undefined) ){
                  throw new Error(path + "ssoBdUrl is required") ;
              }
              
              if(target["ssoBdUrl"] != null && target["ssoBdUrl"] != undefined ){
              
                let _ssoBdUrl  = target["ssoBdUrl"] ;
                

                 if(! _.isString(_ssoBdUrl)){
                    throw new Error(path+"ssoBdUrl is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if( isCompleteObj && (target["infraBdUrl"] == null || target["infraBdUrl"] == undefined) ){
                  throw new Error(path + "infraBdUrl is required") ;
              }
              
              if(target["infraBdUrl"] != null && target["infraBdUrl"] != undefined ){
              
                let _infraBdUrl  = target["infraBdUrl"] ;
                

                 if(! _.isString(_infraBdUrl)){
                    throw new Error(path+"infraBdUrl is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["savyLearnerId"] != null && target["savyLearnerId"] != undefined ){
              
                  let _savyLearnerId  = target["savyLearnerId"] ;
                  
                  if( ! _.isString(_savyLearnerId)){
                   throw new Error(path + "savyLearnerId is not a string") ;
                  }
                  

              
              
           }
           
              
              if(target["confMapping"] != null && target["confMapping"] != undefined ){
              
                  target["confMapping"].forEach((_confMapping , index:number)=>{
                  
                  
                    promArr.push( Index["mail_connexion_conf"].check(_confMapping, isCompleteObj , path+"confMapping.")
                      .catch((err)=>{
                        throw new Error(path+"confMapping index: "+ index +"is not mail_connexion_conf")
                        

                      }) )
                  if(_confMapping._class != null && _confMapping._class != undefined){
                    promArr.push( Index[_confMapping._class].check(_confMapping, isCompleteObj , path+"confMapping.")
                      .catch((err)=>{
                        throw new Error(path+"confMapping index: "+ index +"is not a " + _confMapping._class )
                        

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

      public static create(target:any, path:string=""):Promise<Model_mailtoinfra2>{
        return Model_mailtoinfra2.check(target, true, path).then(()=>{
          return new Model_mailtoinfra2(target) ;
        })
      }

   }
