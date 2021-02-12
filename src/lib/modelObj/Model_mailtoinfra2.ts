import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@hfdev/utils" ;


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
              
       


       

   }
