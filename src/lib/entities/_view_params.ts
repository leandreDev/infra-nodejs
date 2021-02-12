import * as _ from "lodash" ;
import * as Index from "./Index" ;
import {mongo , Entity} from "@hfdev/utils" ;


import {Entity__view } from "./_view"


/**
  view avec des params
*/
export class Entity__view_params extends   Entity__view    {



   
  static cast(obj:any={} , castChildClass:boolean=false){
    
    if((!castChildClass) && obj._class && obj._class != '_view_params' && [].indexOf(obj._class)!==-1){
       Index['Entity_' + obj._class].cast(obj , true) ;
       return ;
    }
    
    Entity__view.cast(obj , true)
    
    
        
        if(obj["params"] != undefined && obj["params"] != null && _.isArray(obj["params"])){
          

            obj["params"].forEach((value)=>{
              
                Index.Entity_routeParam.cast(value) ;
                
              
            })
          
        }
        
    
        
        if(obj["castParams"] != undefined && obj["castParams"] != null && _.isArray(obj["castParams"])){
          

            obj["castParams"].forEach((value)=>{
              
                Index.Entity_castParam.cast(value) ;
                
              
            })
          
        }
        
    
  }


 

public static checkparams(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         

         

        
        
          let result:string[] ;
          if( val._class ){
            result = Index['Entity_' + val._class].check(val , false , path  ) ;
          }else{
            result = Index.Entity_routeParam.check(val , false , path  ) ;
            //5a8af6f0b7003291a48da047

          }
          res = [...res , ...result] ;
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkcastParams(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         

         

        
        
          let result:string[] ;
          if( val._class ){
            result = Index['Entity_' + val._class].check(val , false , path  ) ;
          }else{
            result = Index.Entity_castParam.check(val , false , path  ) ;
            //5a8d2bde2196be22f3419604

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
        
          err = Entity__view.check(target, isCompleteObj , path) ;
          
              

              

              if(target.params != null && target.params != undefined ){
                
                
                target.params.forEach((data, index)=>{
                  res = Entity__view_params.checkparams(target.params[index] , `${path}.params.${index}` ) ;
                  if(res && res.length > 0){
                    err = [...err , ...res] ;
                  }
                })
                
              }

              
              
           
              

              

              if(target.castParams != null && target.castParams != undefined ){
                
                
                target.castParams.forEach((data, index)=>{
                  res = Entity__view_params.checkcastParams(target.castParams[index] , `${path}.castParams.${index}` ) ;
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
          
            case 'params':
              //subdoc
              
              if(value._class){
                return  Index['Entity_'+value._class].castQueryParam(subPath , value) ;
              }else{
                return Index.Entity_routeParam.castQueryParam(subPath ,value) ;
              }
              
              
              
              
              
              
              
            break;
          
            case 'castParams':
              //subdoc
              
              if(value._class){
                return  Index['Entity_'+value._class].castQueryParam(subPath , value) ;
              }else{
                return Index.Entity_castParam.castQueryParam(subPath ,value) ;
              }
              
              
              
              
              
              
              
            break;
          
         
          default:
            return Entity__view  .castQueryParam(key, value) ;
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
          
      
      case 'params':
       
        
              
             return Index.Entity_routeParam.getClassNameOfProp(subPath) ;
              
       
       
      
      
      case 'castParams':
       
        
              
             return Index.Entity_castParam.getClassNameOfProp(subPath) ;
              
       
       
      
      
        default:
            return Entity__view  .getClassNameOfProp(key) ;
            break;
        }
       
}


   }



