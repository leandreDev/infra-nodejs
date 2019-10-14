import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;



/**
  les paramètres d’environnement a passer aux sous-processus
*/
export class Model_node_fork_option_env extends  Base  implements Interface.Inode_fork_option_env {

/**
  les paramètres d’environnement a passer aux sous-processus
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["CONF_URL"] != undefined){
          
           this["CONF_URL"] = obj["CONF_URL"].toString() ;
           
        }
        
    
        
        if(obj["SRV_ID"] != undefined){
          
          if(_.isString(obj["SRV_ID"])){
            this["SRV_ID"] = obj["SRV_ID"];
          }else if(obj["SRV_ID"]._id){
            this["SRV_ID"] = obj["SRV_ID"]._id ;
          }
          
        }
        
    
  }
  

    public _class:string  = "node_fork_option_env" ;

        
              /**
        l'url du serveur de configuration
        */
               public "CONF_URL"?:string ;
              
       
              /**
        configuration du service
        */
               public "SRV_ID"?:string ;
              
       


       

   }
