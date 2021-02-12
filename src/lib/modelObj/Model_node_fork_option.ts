import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@hfdev/utils" ;



/**
  option d'un sous processus node 
*/
export class Model_node_fork_option extends  Base  implements Interface.Inode_fork_option {

/**
  option d'un sous processus node 
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["cwd"] != undefined){
          
           this["cwd"] = obj["cwd"].toString() ;
           
        }
        
    
        
        if(obj["env"] != undefined){
          
            if(obj["env"]._class){
              this["env"] =  new Index[obj["env"]._class](obj["env"]) ;
            }else{
              this["env"] =  new Index["node_fork_option_env"](obj["env"]) ;
            }
          
        }
        
    
  }
  

    public _class:string  = "node_fork_option" ;

        
              /**
        Current working directory of the child process
        */
               public "cwd"?:string ;
              
       
              /**
        Environment key-value pairs
        */
               public "env"?:Interface.Inode_fork_option_env;
              
       


       

   }
