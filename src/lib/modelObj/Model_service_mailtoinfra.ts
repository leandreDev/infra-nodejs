import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_service } from "./Model_service"


/**
  service qui permet de configurer l'authentification a partir d'un mail
*/
export class Model_service_mailtoinfra extends   Model_service   implements Interface.Iservice_mailtoinfra {

/**
  service qui permet de configurer l'authentification a partir d'un mail
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["mailsMapping"] != undefined && obj["mailsMapping"] != null && _.isArray(obj["mailsMapping"])){
          

            this["mailsMapping"] = obj["mailsMapping"].map((value)=>{
              if(value._class){
                return new Index[value._class](value) ;
              }else{
                return new Index["mail_connexion_conf"](value) ;
              }
            })
            
          
        }
        
    
  }
  

    public _class:string  = "service_mailtoinfra" ;

        
              /**
        liste des configuration attacher a un mail
        */
               public "mailsMapping"?:Interface.Imail_connexion_conf[];
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if(target["mailsMapping"] != null && target["mailsMapping"] != undefined ){
              
                  target["mailsMapping"].forEach((_mailsMapping , index:number)=>{
                  
                  
                    promArr.push( Index["mail_connexion_conf"].check(_mailsMapping, isCompleteObj , path+"mailsMapping.")
                      .catch((err)=>{
                        throw new Error(path+"mailsMapping index: "+ index +"is not mail_connexion_conf")
                        

                      }) )
                  if(_mailsMapping._class != null && _mailsMapping._class != undefined){
                    promArr.push( Index[_mailsMapping._class].check(_mailsMapping, isCompleteObj , path+"mailsMapping.")
                      .catch((err)=>{
                        throw new Error(path+"mailsMapping index: "+ index +"is not a " + _mailsMapping._class )
                        

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

      public static create(target:any, path:string=""):Promise<Model_service_mailtoinfra>{
        return Model_service_mailtoinfra.check(target, true, path).then(()=>{
          return new Model_service_mailtoinfra(target) ;
        })
      }

   }
