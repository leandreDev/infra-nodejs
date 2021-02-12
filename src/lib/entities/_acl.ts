import * as _ from "lodash" ;
import * as Index from "./Index" ;
import {mongo , Entity} from "@hfdev/utils" ;



/**
  Acl d'un enregistrement
*/
export class Entity__acl extends  Entity   {



   
  static cast(obj:any={} , castChildClass:boolean=false){
    
    if((!castChildClass) && obj._class && obj._class != '_acl' && [].indexOf(obj._class)!==-1){
       Index['Entity_' + obj._class].cast(obj , true) ;
       return ;
    }
    
    Entity.cast(obj, true) 
    
    
        
        if(obj["creator"] != undefined){
          
          if(_.isString(obj["creator"])){
            obj["creator"] = new mongo.ObjectId(obj["creator"]);
          }else if(obj["creator"]._id){
            obj["creator"] = new mongo.ObjectId(obj["creator"]._id) ;
          }
          
        }
        
    
        
        if(obj["readers"] != undefined && obj["readers"] != null && _.isArray(obj["readers"])){
          

            obj["readers"].forEach((value)=>{
              
                Index.Entity_aclIdentity.cast(value) ;
                
              
            })
          
        }
        
    
        
        if(obj["writers"] != undefined && obj["writers"] != null && _.isArray(obj["writers"])){
          

            obj["writers"].forEach((value)=>{
              
                Index.Entity_aclIdentity.cast(value) ;
                
              
            })
          
        }
        
    
        
        if(obj["admins"] != undefined && obj["admins"] != null && _.isArray(obj["admins"])){
          

            obj["admins"].forEach((value)=>{
              
                Index.Entity_aclIdentity.cast(value) ;
                
              
            })
          
        }
        
    
  }


 

public static checkcreator(val:any, path:string =null):string[]{
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


       
 

public static checkreaders(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         

         

        
        
          let result:string[] ;
          if( val._class ){
            result = Index['Entity_' + val._class].check(val , false , path  ) ;
          }else{
            result = Index.Entity_aclIdentity.check(val , false , path  ) ;
            //5a59d27f66b439c55817d540

          }
          res = [...res , ...result] ;
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkwriters(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         

         

        
        
          let result:string[] ;
          if( val._class ){
            result = Index['Entity_' + val._class].check(val , false , path  ) ;
          }else{
            result = Index.Entity_aclIdentity.check(val , false , path  ) ;
            //5a59d27f66b439c55817d540

          }
          res = [...res , ...result] ;
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkadmins(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         

         

        
        
          let result:string[] ;
          if( val._class ){
            result = Index['Entity_' + val._class].check(val , false , path  ) ;
          }else{
            result = Index.Entity_aclIdentity.check(val , false , path  ) ;
            //5a59d27f66b439c55817d540

          }
          res = [...res , ...result] ;
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static check(target:any, isCompleteObj:boolean=true,  path:string=""):string[]{
        var err:string[]  = []; 
        let res:string[] ;
        
          
          
              

              

              if(target.creator != null && target.creator != undefined ){
                
                
                res = Entity__acl.checkcreator(target.creator , `${path}.creator`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.readers != null && target.readers != undefined ){
                
                
                target.readers.forEach((data, index)=>{
                  res = Entity__acl.checkreaders(target.readers[index] , `${path}.readers.${index}` ) ;
                  if(res && res.length > 0){
                    err = [...err , ...res] ;
                  }
                })
                
              }

              
              
           
              

              

              if(target.writers != null && target.writers != undefined ){
                
                
                target.writers.forEach((data, index)=>{
                  res = Entity__acl.checkwriters(target.writers[index] , `${path}.writers.${index}` ) ;
                  if(res && res.length > 0){
                    err = [...err , ...res] ;
                  }
                })
                
              }

              
              
           
              

              

              if(target.admins != null && target.admins != undefined ){
                
                
                target.admins.forEach((data, index)=>{
                  res = Entity__acl.checkadmins(target.admins[index] , `${path}.admins.${index}` ) ;
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
          
            case 'creator':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'readers':
              //subdoc
              
              if(value._class){
                return  Index['Entity_'+value._class].castQueryParam(subPath , value) ;
              }else{
                return Index.Entity_aclIdentity.castQueryParam(subPath ,value) ;
              }
              
              
              
              
              
              
              
            break;
          
            case 'writers':
              //subdoc
              
              if(value._class){
                return  Index['Entity_'+value._class].castQueryParam(subPath , value) ;
              }else{
                return Index.Entity_aclIdentity.castQueryParam(subPath ,value) ;
              }
              
              
              
              
              
              
              
            break;
          
            case 'admins':
              //subdoc
              
              if(value._class){
                return  Index['Entity_'+value._class].castQueryParam(subPath , value) ;
              }else{
                return Index.Entity_aclIdentity.castQueryParam(subPath ,value) ;
              }
              
              
              
              
              
              
              
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
          
      
      case 'creator':
       
        
       
              return 'oidc_account' ;
              
      
      
      case 'readers':
       
        
              
             return Index.Entity_aclIdentity.getClassNameOfProp(subPath) ;
              
       
       
      
      
      case 'writers':
       
        
              
             return Index.Entity_aclIdentity.getClassNameOfProp(subPath) ;
              
       
       
      
      
      case 'admins':
       
        
              
             return Index.Entity_aclIdentity.getClassNameOfProp(subPath) ;
              
       
       
      
      
        default:
            return Entity.getClassNameOfProp(key) ;
            break;
        }
       
}


   }



