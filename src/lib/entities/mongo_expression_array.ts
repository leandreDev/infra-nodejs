import * as _ from "lodash" ;
import * as Index from "./Index" ;
import {mongo , Entity} from "utils" ;


import {Entity_mongo_expression } from "./mongo_expression"


/**
  mongo_expression_array
*/
export class Entity_mongo_expression_array extends   Entity_mongo_expression    {



   
  static cast(obj:any={} , castChildClass:boolean=false){
    
    if((!castChildClass) && obj._class && obj._class != 'mongo_expression_array' && [].indexOf(obj._class)!==-1){
       Index['Entity_' + obj._class].cast(obj , true) ;
       return ;
    }
    
    Entity_mongo_expression.cast(obj , true)
    
    
        
        if(obj["value"] != undefined && obj["value"] != null && _.isArray(obj["value"])){
          
           obj["value"] = obj["value"].map((value)=>{
              return value.toString();
            })
          
        }
        
    
        
        if(obj["valueType"] != undefined){
          
           obj["valueType"] = obj["valueType"].toString() ;
           
        }
        
    
        
        if(obj["isArray"] != undefined){
          
           obj["isArray"] = new Boolean(obj["isArray"]).valueOf() ;
          
        }
        
    
  }


 

public static checkvalue(val:any, path:string =null):string[]{
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


       
 

public static checkvalueType(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
          
          
            let _enum:string[] = ["string","number","boolean","date"] ;
            if(_enum.indexOf(val)==-1){
              res.push(`${path} dont match one of string , number , boolean , date`) ;
            }
          
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkisArray(val:any, path:string =null):string[]{
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


       
 

public static check(target:any, isCompleteObj:boolean=true,  path:string=""):string[]{
        var err:string[]  = []; 
        let res:string[] ;
        
          err = Entity_mongo_expression.check(target, isCompleteObj , path) ;
          
              

              

              if(target.value != null && target.value != undefined ){
                
                
                target.value.forEach((data, index)=>{
                  res = Entity_mongo_expression_array.checkvalue(target.value[index] , `${path}.value.${index}` ) ;
                  if(res && res.length > 0){
                    err = [...err , ...res] ;
                  }
                })
                
              }

              
              
           
              

              

              if(target.valueType != null && target.valueType != undefined ){
                
                
                res = Entity_mongo_expression_array.checkvalueType(target.valueType , `${path}.valueType`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.isArray != null && target.isArray != undefined ){
                
                
                res = Entity_mongo_expression_array.checkisArray(target.isArray , `${path}.isArray`) ;
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
          
            case 'value':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'valueType':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'isArray':
              //boolean
              
              
              
              return new Boolean(value).valueOf() ;
              
              
              
              
              
            break;
          
         
          default:
            return Entity_mongo_expression  .castQueryParam(key, value) ;
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
          
      
      case 'value':
       
             return null ;
       
        
       
      
      
      case 'valueType':
       
             return null ;
       
        
       
      
      
      case 'isArray':
       
             return null ;
       
        
       
      
      
        default:
            return Entity_mongo_expression  .getClassNameOfProp(key) ;
            break;
        }
       
}


   }



