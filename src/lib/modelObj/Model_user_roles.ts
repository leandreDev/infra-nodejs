import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;



/**
  paire utilisateurs role
*/
export class Model_user_roles extends  Base  implements Interface.Iuser_roles {

/**
  paire utilisateurs role
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["user"] != undefined){
          
          if(_.isString(obj["user"])){
            this["user"] = obj["user"];
          }else if(obj["user"]._id){
            this["user"] = obj["user"]._id ;
          }
          
        }
        
    
        
        if(obj["roles"] != undefined && obj["roles"] != null && _.isArray(obj["roles"])){
          
           this["roles"] = obj["roles"].map((value)=>{
              return value.toString();
            })
          
        }
        
    
  }
  

    public _class:string  = "user_roles" ;

        
              /**
        utilisateur
        */
               public "user"?:string ;
              
       
              /**
        liste des roles de l'utilisateur
        */
               public "roles"?:string[];
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if(target["user"] != null && target["user"] != undefined ){
              
                  let _user  = target["user"] ;
                  
                  if( ! _.isString(_user)){
                   throw new Error(path + "user is not a string") ;
                  }
                  

              
              
           }
           
              
              if(target["roles"] != null && target["roles"] != undefined ){
              
                target["roles"].forEach((_roles , index:number)=>{
                

                 if(! _.isString(_roles)){
                    throw new Error(path+"roles index: "+ index +"is not a string")
                    
                  }
                  
                  
                    let _enum_roles:string[] = ["client","admin"] ;
                    if(_enum_roles.indexOf(_roles)==-1){
                        throw new Error(path+"roles index: "+ index + " dont match one of client , admin" ) ;
                        
                    }
                  
                 });
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_user_roles>{
        return Model_user_roles.check(target, true, path).then(()=>{
          return new Model_user_roles(target) ;
        })
      }

   }
