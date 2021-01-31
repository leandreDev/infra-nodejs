import * as _ from "lodash" ;
import * as Index from "./Index" ;
import {mongo , Entity} from "utils" ;


import {Entity_field } from "./field"


/**
  ce champ permet d'insérer un document dans un autre
*/
export class Entity_subdoc extends   Entity_field    {



   
  static cast(obj:any={} , castChildClass:boolean=false){
    
    if((!castChildClass) && obj._class && obj._class != 'subdoc' && [].indexOf(obj._class)!==-1){
       Index['Entity_' + obj._class].cast(obj , true) ;
       return ;
    }
    
    Entity_field.cast(obj , true)
    
    
        
        if(obj["name"] != undefined){
          
           obj["name"] = obj["name"].toString() ;
           
        }
        
    
        
        if(obj["description"] != undefined){
          
           obj["description"] = obj["description"].toString() ;
           
        }
        
    
        
        if(obj["isArrayOf"] != undefined){
          
           obj["isArrayOf"] = new Boolean(obj["isArrayOf"]).valueOf() ;
          
        }
        
    
        
        if(obj["required"] != undefined){
          
           obj["required"] = new Boolean(obj["required"]).valueOf() ;
          
        }
        
    
        
        if(obj["unique"] != undefined){
          
           obj["unique"] = new Boolean(obj["unique"]).valueOf() ;
          
        }
        
    
        
        if(obj["index"] != undefined){
          
           obj["index"] = new Boolean(obj["index"]).valueOf() ;
          
        }
        
    
        
        if(obj["protoSchemaId"] != undefined){
          
          if(_.isString(obj["protoSchemaId"])){
            obj["protoSchemaId"] = new mongo.ObjectId(obj["protoSchemaId"]);
          }else if(obj["protoSchemaId"]._id){
            obj["protoSchemaId"] = new mongo.ObjectId(obj["protoSchemaId"]._id) ;
          }
          
        }
        
    
  }


 

public static checkname(val:any, path:string =null):string[]{
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


       
 

public static checkdescription(val:any, path:string =null):string[]{
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


       
 

public static checkisArrayOf(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         

         

        
          if( ! _.isBoolean(val)){
            res.push(`${path}  is not a boolean`) ;   
          }
        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkrequired(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         

         

        
          if( ! _.isBoolean(val)){
            res.push(`${path}  is not a boolean`) ;   
          }
        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkunique(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         

         

        
          if( ! _.isBoolean(val)){
            res.push(`${path}  is not a boolean`) ;   
          }
        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkindex(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         

         

        
          if( ! _.isBoolean(val)){
            res.push(`${path}  is not a boolean`) ;   
          }
        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkprotoSchemaId(val:any, path:string =null):string[]{
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


       
 

public static check(target:any, isCompleteObj:boolean=true,  path:string=""):string[]{
        var err:string[]  = []; 
        let res:string[] ;
        
          err = Entity_field.check(target, isCompleteObj , path) ;
          
              

              
              if( isCompleteObj && (target.name == null || target.name == undefined) ){
                err.push(path + ".name is required") ;
              }
              

              if(target.name != null && target.name != undefined ){
                
                
                res = Entity_subdoc.checkname(target.name , `${path}.name`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.description == null || target.description == undefined) ){
                err.push(path + ".description is required") ;
              }
              

              if(target.description != null && target.description != undefined ){
                
                
                res = Entity_subdoc.checkdescription(target.description , `${path}.description`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.isArrayOf != null && target.isArrayOf != undefined ){
                
                
                res = Entity_subdoc.checkisArrayOf(target.isArrayOf , `${path}.isArrayOf`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.required != null && target.required != undefined ){
                
                
                res = Entity_subdoc.checkrequired(target.required , `${path}.required`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.unique != null && target.unique != undefined ){
                
                
                res = Entity_subdoc.checkunique(target.unique , `${path}.unique`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.index != null && target.index != undefined ){
                
                
                res = Entity_subdoc.checkindex(target.index , `${path}.index`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.protoSchemaId != null && target.protoSchemaId != undefined ){
                
                
                res = Entity_subdoc.checkprotoSchemaId(target.protoSchemaId , `${path}.protoSchemaId`) ;
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
          
            case 'name':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'description':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'isArrayOf':
              //boolean
              
              
              
              return new Boolean(value).valueOf() ;
              
              
              
              
              
            break;
          
            case 'required':
              //boolean
              
              
              
              return new Boolean(value).valueOf() ;
              
              
              
              
              
            break;
          
            case 'unique':
              //boolean
              
              
              
              return new Boolean(value).valueOf() ;
              
              
              
              
              
            break;
          
            case 'index':
              //boolean
              
              
              
              return new Boolean(value).valueOf() ;
              
              
              
              
              
            break;
          
            case 'protoSchemaId':
              //modelid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
         
          default:
            return Entity_field  .castQueryParam(key, value) ;
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
          
      
      case 'name':
       
             return null ;
       
        
       
      
      
      case 'description':
       
             return null ;
       
        
       
      
      
      case 'isArrayOf':
       
             return null ;
       
        
       
      
      
      case 'required':
       
             return null ;
       
        
       
      
      
      case 'unique':
       
             return null ;
       
        
       
      
      
      case 'index':
       
             return null ;
       
        
       
      
      
      case 'protoSchemaId':
       
        
       
      
              return 'protoschema' ;
              
      
        default:
            return Entity_field  .getClassNameOfProp(key) ;
            break;
        }
       
}


   }



