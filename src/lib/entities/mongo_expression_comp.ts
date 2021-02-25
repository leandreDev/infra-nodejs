import * as _ from "lodash" ;
import * as Index from "./Index" ;
import {mongo , Entity} from "@leandredev/utils" ;


import {Entity_mongo_expression } from "./mongo_expression"


/**
  mongo_expression_comp
*/
export class Entity_mongo_expression_comp extends   Entity_mongo_expression    {



   
  static cast(obj:any={} , castChildClass:boolean=false){
    
    if((!castChildClass) && obj._class && obj._class != 'mongo_expression_comp' && ['mongo_expression_eq','mongo_expression_gt','mongo_expression_gte','mongo_expression_in','mongo_expression_lt','mongo_expression_lte','mongo_expression_ne',].indexOf(obj._class)!==-1){
       Index['Entity_' + obj._class].cast(obj , true) ;
       return ;
    }
    
    Entity_mongo_expression.cast(obj , true)
    
    
        
        if(obj["field"] != undefined){
          
           obj["field"] = obj["field"].toString() ;
           
        }
        
    
        
        if(obj["value"] != undefined && obj["value"] != null && _.isArray(obj["value"])){
          
           obj["value"] = obj["value"].map((value)=>{
              return value.toString();
            })
          
        }
        
    
        
        if(obj["dataType"] != undefined){
          
           obj["dataType"] = obj["dataType"].toString() ;
           
        }
        
    
        
        if(obj["isArray"] != undefined){
          
           obj["isArray"] = new Boolean(obj["isArray"]).valueOf() ;
          
        }
        
    
  }


 

public static checkfield(val:any, path:string =null):string[]{
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


       
 

public static checkdataType(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
          
          
            let _enum:string[] = ["string","number","date","boolean"] ;
            if(_enum.indexOf(val)==-1){
              res.push(`${path} dont match one of string , number , date , boolean`) ;
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
          
              

              

              if(target.field != null && target.field != undefined ){
                
                
                res = Entity_mongo_expression_comp.checkfield(target.field , `${path}.field`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.value == null || target.value == undefined) ){
                err.push(path + ".value is required") ;
              }
              

              if(target.value != null && target.value != undefined ){
                
                
                target.value.forEach((data, index)=>{
                  res = Entity_mongo_expression_comp.checkvalue(target.value[index] , `${path}.value.${index}` ) ;
                  if(res && res.length > 0){
                    err = [...err , ...res] ;
                  }
                })
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.dataType == null || target.dataType == undefined) ){
                err.push(path + ".dataType is required") ;
              }
              

              if(target.dataType != null && target.dataType != undefined ){
                
                
                res = Entity_mongo_expression_comp.checkdataType(target.dataType , `${path}.dataType`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.isArray != null && target.isArray != undefined ){
                
                
                res = Entity_mongo_expression_comp.checkisArray(target.isArray , `${path}.isArray`) ;
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
          
            case 'field':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'value':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'dataType':
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
          
      
      case 'field':
       
             return null ;
       
        
       
      
      
      case 'value':
       
             return null ;
       
        
       
      
      
      case 'dataType':
       
             return null ;
       
        
       
      
      
      case 'isArray':
       
             return null ;
       
        
       
      
      
        default:
            return Entity_mongo_expression  .getClassNameOfProp(key) ;
            break;
        }
       
}


   }



