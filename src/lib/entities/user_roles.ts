import * as _ from "lodash" ;
import * as Index from "./Index" ;
import {mongo , Entity} from "utils" ;



/**
  paire utilisateurs role
*/
export class Entity_user_roles extends  Entity   {



   
  static cast(obj:any={} , castChildClass:boolean=false){
    
    if((!castChildClass) && obj._class && obj._class != 'user_roles' && [].indexOf(obj._class)!==-1){
       Index['Entity_' + obj._class].cast(obj , true) ;
       return ;
    }
    
    Entity.cast(obj, true) 
    
    
        
        if(obj["user"] != undefined){
          
          if(_.isString(obj["user"])){
            obj["user"] = new mongo.ObjectId(obj["user"]);
          }else if(obj["user"]._id){
            obj["user"] = new mongo.ObjectId(obj["user"]._id) ;
          }
          
        }
        
    
        
        if(obj["roles"] != undefined && obj["roles"] != null && _.isArray(obj["roles"])){
          
           obj["roles"] = obj["roles"].map((value)=>{
              return value.toString();
            })
          
        }
        
    
  }


 

public static checkuser(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
          if( ! mongo.ObjectId.isValid(val)){
            res.push(`${path}  is not an ObjectId`) ;     
          }
         
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkroles(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
          
          
            let _enum:string[] = ["client","admin"] ;
            if(_enum.indexOf(val)==-1){
              res.push(`${path} dont match one of client , admin`) ;
            }
          
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static check(target:any, isCompleteObj:boolean=true,  path:string=""):string[]{
        var err:string[]  = []; 
        let res:string[] ;
        
          
          
              

              

              if(target.user != null && target.user != undefined ){
                
                
                res = Entity_user_roles.checkuser(target.user , `${path}.user`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.roles != null && target.roles != undefined ){
                
                
                target.roles.forEach((data, index)=>{
                  res = Entity_user_roles.checkroles(target.roles[index] , `${path}.roles.${index}` ) ;
                  if(res && res.length > 0){
                    err = [...err , ...res] ;
                  }
                })
                
              }

              
              
           
           

        return err ;
      }
   
public static castQueryParam(path: string, value: any): any {
        let key:string = '' ;
        let subPath:string = '' ;

        if(value === null){
          return null ;
        }
        if(path.indexOf('.') === -1){
          key = path ;
        }else{
          let arr:string[] = path.split('.') ;
          key = arr.shift() ;
          subPath = arr.join('.') ;
          if(subPath === null || subPath.trim() === ''){
            throw new Error(`subPath is empty for ${path} ${value}`)
          }
        }
        if(key === null || key.trim() === ''){
          throw new Error(`key path is empty for ${path} ${value}`)
        }
        switch (key) {
          
            case 'user':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'roles':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
         
          default:
            return Entity.castQueryParam(key, value) ;
            break;
        }
      }

public static getClassNameOfProp(path:string):string{
        let key:string = '' ;
        let subPath:string = '' ;

        if(path.indexOf('.') === -1){
          key = path ;
        }else{
          let arr:string[] = path.split('.') ;
          key = arr.shift() ;
          subPath = arr.join('.') ;
          if(subPath === null || subPath.trim() === ''){
            throw new Error(`subPath is empty for ${path} `)
          }
        }
        if(key === null || key.trim() === ''){
          throw new Error(`key path is empty for ${path}`)
        }
        switch (key) {
          
      
      case 'user':
       
        
       
              return 'oidc_account' ;
              
      
      
      case 'roles':
       
             return null ;
       
        
       
      
      
        default:
            return Entity.getClassNameOfProp(key) ;
            break;
        }
       
}


   }



