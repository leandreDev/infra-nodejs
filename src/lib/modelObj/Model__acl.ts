import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;



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
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if(target["creator"] != null && target["creator"] != undefined ){
              
                  let _creator  = target["creator"] ;
                  
                  if( ! _.isString(_creator)){
                   throw new Error(path + "creator is not a string") ;
                  }
                  

              
              
           }
           
              
              if(target["readers"] != null && target["readers"] != undefined ){
              
                  target["readers"].forEach((_readers , index:number)=>{
                  
                  
                    promArr.push( Index["aclIdentity"].check(_readers, isCompleteObj , path+"readers.")
                      .catch((err)=>{
                        throw new Error(path+"readers index: "+ index +"is not aclIdentity")
                        

                      }) )
                  if(_readers._class != null && _readers._class != undefined){
                    promArr.push( Index[_readers._class].check(_readers, isCompleteObj , path+"readers.")
                      .catch((err)=>{
                        throw new Error(path+"readers index: "+ index +"is not a " + _readers._class )
                        

                      })
                    )
                  }

                  });
              
              
           }
           
              
              if(target["writers"] != null && target["writers"] != undefined ){
              
                  target["writers"].forEach((_writers , index:number)=>{
                  
                  
                    promArr.push( Index["aclIdentity"].check(_writers, isCompleteObj , path+"writers.")
                      .catch((err)=>{
                        throw new Error(path+"writers index: "+ index +"is not aclIdentity")
                        

                      }) )
                  if(_writers._class != null && _writers._class != undefined){
                    promArr.push( Index[_writers._class].check(_writers, isCompleteObj , path+"writers.")
                      .catch((err)=>{
                        throw new Error(path+"writers index: "+ index +"is not a " + _writers._class )
                        

                      })
                    )
                  }

                  });
              
              
           }
           
              
              if(target["admins"] != null && target["admins"] != undefined ){
              
                  target["admins"].forEach((_admins , index:number)=>{
                  
                  
                    promArr.push( Index["aclIdentity"].check(_admins, isCompleteObj , path+"admins.")
                      .catch((err)=>{
                        throw new Error(path+"admins index: "+ index +"is not aclIdentity")
                        

                      }) )
                  if(_admins._class != null && _admins._class != undefined){
                    promArr.push( Index[_admins._class].check(_admins, isCompleteObj , path+"admins.")
                      .catch((err)=>{
                        throw new Error(path+"admins index: "+ index +"is not a " + _admins._class )
                        

                      })
                    )
                  }

                  });
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model__acl>{
        return Model__acl.check(target, true, path).then(()=>{
          return new Model__acl(target) ;
        })
      }

   }
