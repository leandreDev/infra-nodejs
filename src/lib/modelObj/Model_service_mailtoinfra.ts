import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandredev/utils" ;


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
              
       


       

   }
