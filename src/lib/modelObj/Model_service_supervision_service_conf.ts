import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@hfdev/utils" ;



/**
  configuration d'un service dans le superviseur
*/
export class Model_service_supervision_service_conf extends  Base  implements Interface.Iservice_supervision_service_conf {

/**
  configuration d'un service dans le superviseur
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["name"] != undefined){
          
           this["name"] = obj["name"].toString() ;
           
        }
        
    
        
        if(obj["path"] != undefined){
          
           this["path"] = obj["path"].toString() ;
           
        }
        
    
        
        if(obj["args"] != undefined && obj["args"] != null && _.isArray(obj["args"])){
          
           this["args"] = obj["args"].map((value)=>{
              return value.toString();
            })
          
        }
        
    
        
        if(obj["options"] != undefined){
          
            if(obj["options"]._class){
              this["options"] =  new Index[obj["options"]._class](obj["options"]) ;
            }else{
              this["options"] =  new Index["node_fork_option"](obj["options"]) ;
            }
          
        }
        
    
        
        if(obj["restart"] != undefined){
          
           this["restart"] = new Boolean(obj["restart"]).valueOf() ;
          
        }
        
    
        
        if(obj["maxKill"] != undefined){
          
           this["maxKill"] = new Number(obj["maxKill"]).valueOf();
          
        }
        
    
        
        if(obj["minTime"] != undefined){
          
           this["minTime"] = new Number(obj["minTime"]).valueOf();
          
        }
        
    
  }
  

    public _class:string  = "service_supervision_service_conf" ;

        
              /**
        le nom du service
        */
               public "name"?:string ;
              
       
              /**
        le chemin vers le fichier js
        */
               public "path"?:string ;
              
       
              /**
        liste des arguments passé au sous processus
        */
               public "args"?:string[];
              
       
              /**
        nodejs sub process options
        */
               public "options"?:Interface.Inode_fork_option;
              
       
              /**
        active le redémarrage automatique
        */
               public "restart"?:boolean ;
              
       
              /**
        nombre maximum de redémarrage automatique 
        */
               public "maxKill"?:number =3;
              
       
              /**
        définit le temps maximum qui peut s'écouler entre un démarrage et une fermeture pour considérer que c'est un crache au démarrage
        */
               public "minTime"?:number =1000;
              
       


       

   }
