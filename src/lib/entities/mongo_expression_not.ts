import * as _ from "lodash" ;
import * as Index from "./Index" ;
import {mongo , Entity} from "utils" ;


import {Entity_mongo_expression_logical } from "./mongo_expression_logical"


/**
  https://docs.mongodb.com/manual/reference/operator/query/not/
*/
export class Entity_mongo_expression_not extends   Entity_mongo_expression_logical    {



   
  static cast(obj:any={} , castChildClass:boolean=false){
    
    if((!castChildClass) && obj._class && obj._class != 'mongo_expression_not' && [].indexOf(obj._class)!==-1){
       Index['Entity_' + obj._class].cast(obj , true) ;
       return ;
    }
    
    Entity_mongo_expression_logical.cast(obj , true)
    
    
        
        if(obj["field"] != undefined){
          
           obj["field"] = obj["field"].toString() ;
           
        }
        
    
        
        if(obj["expression"] != undefined && obj["expression"] != null && _.isArray(obj["expression"])){
          

            obj["expression"].forEach((value)=>{
              
                Index.Entity_mongo_expression.cast(value) ;
                
              
            })
          
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


       
 

public static checkexpression(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         

         

        
        
          let result:string[] ;
          if( val._class ){
            result = Index['Entity_' + val._class].check(val , false , path  ) ;
          }else{
            result = Index.Entity_mongo_expression.check(val , false , path  ) ;
            //5a05b82108393ebf14437139

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
        
          err = Entity_mongo_expression_logical.check(target, isCompleteObj , path) ;
          
              

              
              if( isCompleteObj && (target.field == null || target.field == undefined) ){
                err.push(path + ".field is required") ;
              }
              

              if(target.field != null && target.field != undefined ){
                
                
                res = Entity_mongo_expression_not.checkfield(target.field , `${path}.field`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.expression == null || target.expression == undefined) ){
                err.push(path + ".expression is required") ;
              }
              

              if(target.expression != null && target.expression != undefined ){
                
                
                target.expression.forEach((data, index)=>{
                  res = Entity_mongo_expression_not.checkexpression(target.expression[index] , `${path}.expression.${index}` ) ;
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
          
            case 'field':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'expression':
              //subdoc
              
              if(value._class){
                return  Index['Entity_'+value._class].castQueryParam(subPath , value) ;
              }else{
                return Index.Entity_mongo_expression.castQueryParam(subPath ,value) ;
              }
              
              
              
              
              
              
              
            break;
          
         
          default:
            return Entity_mongo_expression_logical  .castQueryParam(key, value) ;
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
       
        
       
      
      
      case 'expression':
       
        
              
             return Index.Entity_mongo_expression.getClassNameOfProp(subPath) ;
              
       
       
      
      
        default:
            return Entity_mongo_expression_logical  .getClassNameOfProp(key) ;
            break;
        }
       
}


   }



