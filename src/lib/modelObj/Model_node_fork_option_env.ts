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
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if(target["CONF_URL"] != null && target["CONF_URL"] != undefined ){
              
                let _CONF_URL  = target["CONF_URL"] ;
                

                 if(! _.isString(_CONF_URL)){
                    throw new Error(path+"CONF_URL is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["SRV_ID"] != null && target["SRV_ID"] != undefined ){
              
                  let _SRV_ID  = target["SRV_ID"] ;
                  
                  if( ! _.isString(_SRV_ID)){
                   throw new Error(path + "SRV_ID is not a string") ;
                  }
                  

              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_node_fork_option_env>{
        return Model_node_fork_option_env.check(target, true, path).then(()=>{
          return new Model_node_fork_option_env(target) ;
        })
      }

   }
