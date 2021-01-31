import * as _ from "lodash" ;
import * as Index from "./Index" ;
import {mongo , Entity} from "utils" ;



/**
  représente la licence d'un utilisateur pour un service (ou application) distribué par un end_client
*/
export class Entity_licence extends  Entity   {



   
  static cast(obj:any={} , castChildClass:boolean=false){
    
    if((!castChildClass) && obj._class && obj._class != 'licence' && ['licence_temporelle',].indexOf(obj._class)!==-1){
       Index['Entity_' + obj._class].cast(obj , true) ;
       return ;
    }
    
    Entity.cast(obj, true) 
    
    
        
        if(obj["end_client"] != undefined){
          
          if(_.isString(obj["end_client"])){
            obj["end_client"] = new mongo.ObjectId(obj["end_client"]);
          }else if(obj["end_client"]._id){
            obj["end_client"] = new mongo.ObjectId(obj["end_client"]._id) ;
          }
          
        }
        
    
        
        if(obj["user"] != undefined){
          
          if(_.isString(obj["user"])){
            obj["user"] = new mongo.ObjectId(obj["user"]);
          }else if(obj["user"]._id){
            obj["user"] = new mongo.ObjectId(obj["user"]._id) ;
          }
          
        }
        
    
        
        if(obj["application_instance"] != undefined && obj["application_instance"] != null && _.isArray(obj["application_instance"])){
          
          obj["application_instance"] = obj["application_instance"].map((value)=>{
            if(_.isString(value)){
              return new mongo.ObjectId(value)  ;
            }else if(value._id){
              return new mongo.ObjectId(value._id)   ;
            }
          })
          
        }
        
    
        
        if(obj["ressource"] != undefined && obj["ressource"] != null && _.isArray(obj["ressource"])){
          
          obj["ressource"] = obj["ressource"].map((value)=>{
            if(_.isString(value)){
              return new mongo.ObjectId(value)  ;
            }else if(value._id){
              return new mongo.ObjectId(value._id)   ;
            }
          })
          
        }
        
    
        
        if(obj["licenceStoreRef"] != undefined){
          
           obj["licenceStoreRef"] = obj["licenceStoreRef"].toString() ;
           
        }
        
    
        
        if(obj["creationDate"] != undefined){
          
            obj["creationDate"] = new Date(obj["creationDate"]) ;
          
        }
        
    
        
        if(obj["usingDate"] != undefined){
          
            obj["usingDate"] = new Date(obj["usingDate"]) ;
          
        }
        
    
  }


 

public static checkend_client(val:any, path:string =null):string[]{
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


       
 

public static checkapplication_instance(val:any, path:string =null):string[]{
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


       
 

public static checkressource(val:any, path:string =null):string[]{
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


       
 

public static checklicenceStoreRef(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
          
          
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkcreationDate(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         
          if( ! _.isDate(val)){
            res.push(`${path}  is not a Date`) ;
          }
          
          
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkusingDate(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         
          if( ! _.isDate(val)){
            res.push(`${path}  is not a Date`) ;
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
        
          
          
              

              

              if(target.end_client != null && target.end_client != undefined ){
                
                
                res = Entity_licence.checkend_client(target.end_client , `${path}.end_client`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.user != null && target.user != undefined ){
                
                
                res = Entity_licence.checkuser(target.user , `${path}.user`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.application_instance != null && target.application_instance != undefined ){
                
                
                target.application_instance.forEach((data, index)=>{
                  res = Entity_licence.checkapplication_instance(target.application_instance[index] , `${path}.application_instance.${index}` ) ;
                  if(res && res.length > 0){
                    err = [...err , ...res] ;
                  }
                })
                
              }

              
              
           
              

              

              if(target.ressource != null && target.ressource != undefined ){
                
                
                target.ressource.forEach((data, index)=>{
                  res = Entity_licence.checkressource(target.ressource[index] , `${path}.ressource.${index}` ) ;
                  if(res && res.length > 0){
                    err = [...err , ...res] ;
                  }
                })
                
              }

              
              
           
              

              

              if(target.licenceStoreRef != null && target.licenceStoreRef != undefined ){
                
                
                res = Entity_licence.checklicenceStoreRef(target.licenceStoreRef , `${path}.licenceStoreRef`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.creationDate == null || target.creationDate == undefined) ){
                err.push(path + ".creationDate is required") ;
              }
              

              if(target.creationDate != null && target.creationDate != undefined ){
                
                
                res = Entity_licence.checkcreationDate(target.creationDate , `${path}.creationDate`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.usingDate != null && target.usingDate != undefined ){
                
                
                res = Entity_licence.checkusingDate(target.usingDate , `${path}.usingDate`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
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
          
            case 'end_client':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'user':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'application_instance':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'ressource':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'licenceStoreRef':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'creationDate':
              //date
              
              
              
              
              return new Date(value) ;
              
              
              
              
            break;
          
            case 'usingDate':
              //date
              
              
              
              
              return new Date(value) ;
              
              
              
              
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
          
      
      case 'end_client':
       
        
       
              return 'end_client' ;
              
      
      
      case 'user':
       
        
       
              return 'oidc_account' ;
              
      
      
      case 'application_instance':
       
        
       
              return 'application_instance' ;
              
      
      
      case 'ressource':
       
        
       
              return 'pack_card' ;
              
      
      
      case 'licenceStoreRef':
       
             return null ;
       
        
       
      
      
      case 'creationDate':
       
             return null ;
       
        
       
      
      
      case 'usingDate':
       
             return null ;
       
        
       
      
      
        default:
            return Entity.getClassNameOfProp(key) ;
            break;
        }
       
}


   }



