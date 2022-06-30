import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandredev/utils" ;



/**
  représente la licence d'un utilisateur pour un service (ou application) distribué par un end_client
*/
export class Model_licence extends  Base  implements Interface.Ilicence {

/**
  représente la licence d'un utilisateur pour un service (ou application) distribué par un end_client
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["end_client"] != undefined){
          
          if(_.isString(obj["end_client"])){
            this["end_client"] = obj["end_client"];
          }else if(obj["end_client"]._id){
            this["end_client"] = obj["end_client"]._id ;
          }else if(obj["end_client"]._bsontype && (obj["end_client"]._bsontype === 'ObjectID')){
              this["end_client"] = obj["end_client"] ;
            }
          
        }
        
    
        
        if(obj["user"] != undefined){
          
          if(_.isString(obj["user"])){
            this["user"] = obj["user"];
          }else if(obj["user"]._id){
            this["user"] = obj["user"]._id ;
          }else if(obj["user"]._bsontype && (obj["user"]._bsontype === 'ObjectID')){
              this["user"] = obj["user"] ;
            }
          
        }
        
    
        
        if(obj["application_instance"] != undefined && obj["application_instance"] != null && _.isArray(obj["application_instance"])){
          
          this["application_instance"] = obj["application_instance"].map((value)=>{
            if(_.isString(value)){
              return value ;
            }else if(value._id){
              return value._id ;
            }else if(value._bsontype && value._bsontype === 'ObjectID'){
                return `${value}` ;
            }
          })
          
          
        }
        
    
        
        if(obj["ressource"] != undefined && obj["ressource"] != null && _.isArray(obj["ressource"])){
          
          this["ressource"] = obj["ressource"].map((value)=>{
            if(_.isString(value)){
              return value ;
            }else if(value._id){
              return value._id ;
            }else if(value._bsontype && value._bsontype === 'ObjectID'){
                return `${value}` ;
            }
          })
          
          
        }
        
    
        
        if(obj["licenceStoreRef"] != undefined){
          
           this["licenceStoreRef"] = obj["licenceStoreRef"].toString() ;
           
        }
        
    
        
        if(obj["creationDate"] != undefined){
          
            this["creationDate"] = new Date(obj["creationDate"]) ;
          
        }
        
    
        
        if(obj["usingDate"] != undefined){
          
            this["usingDate"] = new Date(obj["usingDate"]) ;
          
        }
        
    
  }
  

    public _class:string  = "licence" ;

        
              /**
        le end_client qui a distribué la licence
        */
               public "end_client"?:string ;
              
       
              /**
        l'utilisateur bénéficiant de la licence
        */
               public "user"?:string ;
              
       
              /**
        l'instance de l'application qui est sous licence
        */
               public "application_instance"?:string[] ;
              
       
              /**
        les ressources externes
        */
               public "ressource"?:string[] ;
              
       
              /**
        référence du licence store qui a émis cette licence
        */
               public "licenceStoreRef"?:string ;
              
       
              /**
        date de création
        */
               public "creationDate":Date ;
              
       
              /**
        date de la première utilisation
        */
               public "usingDate"?:Date ;
              
       


       

   }
