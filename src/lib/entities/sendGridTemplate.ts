import * as _ from "lodash" ;
import * as Index from "./Index" ;
import {mongo , Entity} from "utils" ;



/**
  template send grid
*/
export class Entity_sendGridTemplate extends  Entity   {



   
  static cast(obj:any={} , castChildClass:boolean=false){
    
    if((!castChildClass) && obj._class && obj._class != 'sendGridTemplate' && [].indexOf(obj._class)!==-1){
       Index['Entity_' + obj._class].cast(obj , true) ;
       return ;
    }
    
    Entity.cast(obj, true) 
    
    
        
        if(obj["lang"] != undefined){
          
           obj["lang"] = obj["lang"].toString() ;
           
        }
        
    
        
        if(obj["templateId"] != undefined){
          
           obj["templateId"] = obj["templateId"].toString() ;
           
        }
        
    
        
        if(obj["parametre"] != undefined && obj["parametre"] != null && _.isArray(obj["parametre"])){
          

            obj["parametre"].forEach((value)=>{
              
                Index.Entity_name_value.cast(value) ;
                
              
            })
          
        }
        
    
        
        if(obj["dynamic_template_data"] != undefined && obj["dynamic_template_data"] != null && _.isArray(obj["dynamic_template_data"])){
          

            obj["dynamic_template_data"].forEach((value)=>{
              
                Index.Entity_name_value.cast(value) ;
                
              
            })
          
        }
        
    
  }


 

public static checklang(val:any, path:string =null):string[]{
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


       
 

public static checktemplateId(val:any, path:string =null):string[]{
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


       
 

public static checkparametre(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         

         

        
        
          let result:string[] ;
          if( val._class ){
            result = Index['Entity_' + val._class].check(val , false , path  ) ;
          }else{
            result = Index.Entity_name_value.check(val , false , path  ) ;
            //59c62581c3c9d3a0f9e88616

          }
          res = [...res , ...result] ;
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkdynamic_template_data(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         

         

        
        
          let result:string[] ;
          if( val._class ){
            result = Index['Entity_' + val._class].check(val , false , path  ) ;
          }else{
            result = Index.Entity_name_value.check(val , false , path  ) ;
            //59c62581c3c9d3a0f9e88616

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
        
          
          
              

              
              if( isCompleteObj && (target.lang == null || target.lang == undefined) ){
                err.push(path + ".lang is required") ;
              }
              

              if(target.lang != null && target.lang != undefined ){
                
                
                res = Entity_sendGridTemplate.checklang(target.lang , `${path}.lang`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.templateId == null || target.templateId == undefined) ){
                err.push(path + ".templateId is required") ;
              }
              

              if(target.templateId != null && target.templateId != undefined ){
                
                
                res = Entity_sendGridTemplate.checktemplateId(target.templateId , `${path}.templateId`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.parametre != null && target.parametre != undefined ){
                
                
                target.parametre.forEach((data, index)=>{
                  res = Entity_sendGridTemplate.checkparametre(target.parametre[index] , `${path}.parametre.${index}` ) ;
                  if(res && res.length > 0){
                    err = [...err , ...res] ;
                  }
                })
                
              }

              
              
           
              

              

              if(target.dynamic_template_data != null && target.dynamic_template_data != undefined ){
                
                
                target.dynamic_template_data.forEach((data, index)=>{
                  res = Entity_sendGridTemplate.checkdynamic_template_data(target.dynamic_template_data[index] , `${path}.dynamic_template_data.${index}` ) ;
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
          
            case 'lang':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'templateId':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'parametre':
              //subdoc
              
              if(value._class){
                return  Index['Entity_'+value._class].castQueryParam(subPath , value) ;
              }else{
                return Index.Entity_name_value.castQueryParam(subPath ,value) ;
              }
              
              
              
              
              
              
              
            break;
          
            case 'dynamic_template_data':
              //subdoc
              
              if(value._class){
                return  Index['Entity_'+value._class].castQueryParam(subPath , value) ;
              }else{
                return Index.Entity_name_value.castQueryParam(subPath ,value) ;
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
          
      
      case 'lang':
       
             return null ;
       
        
       
      
      
      case 'templateId':
       
             return null ;
       
        
       
      
      
      case 'parametre':
       
        
              
             return Index.Entity_name_value.getClassNameOfProp(subPath) ;
              
       
       
      
      
      case 'dynamic_template_data':
       
        
              
             return Index.Entity_name_value.getClassNameOfProp(subPath) ;
              
       
       
      
      
        default:
            return Entity.getClassNameOfProp(key) ;
            break;
        }
       
}


   }



