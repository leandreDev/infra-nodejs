import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandredev/utils" ;



/**
  Acl d'un enregistrement
*/
export class Model__acl extends  Base  implements Interface.I_acl {

/**
  Acl d'un enregistrement
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["creator"] != undefined){
          
          if(_.isString(obj["creator"])){
            this["creator"] = obj["creator"];
          }else if(obj["creator"]._id){
            this["creator"] = obj["creator"]._id ;
          }else if(obj["creator"]._bsontype && (obj["creator"]._bsontype === 'ObjectID')){
              this["creator"] = obj["creator"] ;
            }
          
        }
        
    
        
        if(obj["readers"] != undefined && obj["readers"] != null && _.isArray(obj["readers"])){
          

            this["readers"] = obj["readers"].map((value)=>{
              if(value._class){
                return new Index[value._class](value) ;
              }else{
                return new Index["aclIdentity"](value) ;
              }
            })
            
          
        }
        
    
        
        if(obj["writers"] != undefined && obj["writers"] != null && _.isArray(obj["writers"])){
          

            this["writers"] = obj["writers"].map((value)=>{
              if(value._class){
                return new Index[value._class](value) ;
              }else{
                return new Index["aclIdentity"](value) ;
              }
            })
            
          
        }
        
    
        
        if(obj["admins"] != undefined && obj["admins"] != null && _.isArray(obj["admins"])){
          

            this["admins"] = obj["admins"].map((value)=>{
              if(value._class){
                return new Index[value._class](value) ;
              }else{
                return new Index["aclIdentity"](value) ;
              }
            })
            
          
        }
        
    
  }
  

    public _class:string  = "_acl" ;

        
              /**
        id du createur
        */
               public "creator"?:string ;
              
       
              /**
        liste des ayant droit en lecture
        */
               public "readers"?:Interface.IaclIdentity[];
              
       
              /**
        liste des ayants droit d'  criture
        */
               public "writers"?:Interface.IaclIdentity[];
              
       
              /**
        liste des ayants doit de modification
        */
               public "admins"?:Interface.IaclIdentity[];
              
       


       

   }
