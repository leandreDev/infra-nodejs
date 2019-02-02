import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;



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
          
            if(obj._class){
              this["env"] =  new Index[obj._class](obj["env"]) ;
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
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if(target["cwd"] != null && target["cwd"] != undefined ){
              
                let _cwd  = target["cwd"] ;
                

                 if(! _.isString(_cwd)){
                    throw new Error(path+"cwd is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["env"] != null && target["env"] != undefined ){
              
                  let _env  = target["env"] ;
                  
                  
                    promArr.push( Index["node_fork_option_env"].check(_env, isCompleteObj , path+"env.")
                      .catch((err)=>{
                        throw new Error(path+"env is not ") ;
                        

                      }) )
                  if(_env._class != null && _env._class != undefined){
                    promArr.push( Index[_env._class].check(_env, isCompleteObj , path+"env.")
                      .catch((err)=>{
                        throw new Error(path+"env is not a " + _env._class ) ;
                        

                      })
                    )
                  }

                  
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_node_fork_option>{
        return Model_node_fork_option.check(target, true, path).then(()=>{
          return new Model_node_fork_option(target) ;
        })
      }

   }
