import * as _ from "lodash" ;
import * as Index from "./Index" ;
import {mongo , Entity} from "utils" ;


import {Entity_service } from "./service"


/**
  service qui retourne un init.js
*/
export class Entity_service_init_js extends   Entity_service    {



   
  static cast(obj:any={} , castChildClass:boolean=false){
    
    if((!castChildClass) && obj._class && obj._class != 'service_init_js' && [].indexOf(obj._class)!==-1){
       Index['Entity_' + obj._class].cast(obj , true) ;
       return ;
    }
    
    Entity_service.cast(obj , true)
    
    
        
        if(obj["templates"] != undefined && obj["templates"] != null && _.isArray(obj["templates"])){
          

            obj["templates"].forEach((value)=>{
              
                Index.Entity_TemplateLodash.cast(value) ;
                
              
            })
          
        }
        
    
  }


 

public static checktemplates(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         

         

        
        
          let result:string[] ;
          if( val._class ){
            result = Index['Entity_' + val._class].check(val , false , path  ) ;
          }else{
            result = Index.Entity_TemplateLodash.check(val , false , path  ) ;
            //5b261c2afcd72f6642874b21

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
        
          err = Entity_service.check(target, isCompleteObj , path) ;
          
              

              
              if( isCompleteObj && (target.templates == null || target.templates == undefined) ){
                err.push(path + ".templates is required") ;
              }
              

              if(target.templates != null && target.templates != undefined ){
                
                
                target.templates.forEach((data, index)=>{
                  res = Entity_service_init_js.checktemplates(target.templates[index] , `${path}.templates.${index}` ) ;
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
          
            case 'templates':
              //subdoc
              
              if(value._class){
                return  Index['Entity_'+value._class].castQueryParam(subPath , value) ;
              }else{
                return Index.Entity_TemplateLodash.castQueryParam(subPath ,value) ;
              }
              
              
              
              
              
              
              
            break;
          
         
          default:
            return Entity_service  .castQueryParam(key, value) ;
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
          
      
      case 'templates':
       
        
              
             return Index.Entity_TemplateLodash.getClassNameOfProp(subPath) ;
              
       
       
      
      
        default:
            return Entity_service  .getClassNameOfProp(key) ;
            break;
        }
       
}


   }



