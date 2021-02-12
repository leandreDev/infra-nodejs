import * as _ from "lodash" ;
import * as Index from "./Index" ;
import {mongo , Entity} from "@hfdev/utils" ;


import {Entity_service } from "./service"


/**
  Service de Taches planifiées
*/
export class Entity_service_planned_tasks extends   Entity_service    {



   
  static cast(obj:any={} , castChildClass:boolean=false){
    
    if((!castChildClass) && obj._class && obj._class != 'service_planned_tasks' && [].indexOf(obj._class)!==-1){
       Index['Entity_' + obj._class].cast(obj , true) ;
       return ;
    }
    
    Entity_service.cast(obj , true)
    
    
        
        if(obj["bdd_url"] != undefined){
          
           obj["bdd_url"] = obj["bdd_url"].toString() ;
           
        }
        
    
        
        if(obj["handlerInterval"] != undefined){
          
           obj["handlerInterval"] = new Number(obj["handlerInterval"]).valueOf();
          
        }
        
    
        
        if(obj["startHandlingOnServiceStart"] != undefined){
          
           obj["startHandlingOnServiceStart"] = new Boolean(obj["startHandlingOnServiceStart"]).valueOf() ;
          
        }
        
    
        
        if(obj["schedule_url"] != undefined){
          
           obj["schedule_url"] = obj["schedule_url"].toString() ;
           
        }
        
    
        
        if(obj["task_url"] != undefined){
          
           obj["task_url"] = obj["task_url"].toString() ;
           
        }
        
    
        
        if(obj["licencesService_url"] != undefined){
          
           obj["licencesService_url"] = obj["licencesService_url"].toString() ;
           
        }
        
    
        
        if(obj["apiUrl"] != undefined){
          
           obj["apiUrl"] = obj["apiUrl"].toString() ;
           
        }
        
    
  }


 

public static checkbdd_url(val:any, path:string =null):string[]{
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


       
 

public static checkhandlerInterval(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         

         
          if( ! _.isNumber(val)){
            res.push(`${path} is not a number`) ; 
          }
        
         
        

        

        

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkstartHandlingOnServiceStart(val:any, path:string =null):string[]{
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


       
 

public static checkschedule_url(val:any, path:string =null):string[]{
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


       
 

public static checktask_url(val:any, path:string =null):string[]{
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


       
 

public static checklicencesService_url(val:any, path:string =null):string[]{
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


       
 

public static checkapiUrl(val:any, path:string =null):string[]{
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


       
 

public static check(target:any, isCompleteObj:boolean=true,  path:string=""):string[]{
        var err:string[]  = []; 
        let res:string[] ;
        
          err = Entity_service.check(target, isCompleteObj , path) ;
          
              

              
              if( isCompleteObj && (target.bdd_url == null || target.bdd_url == undefined) ){
                err.push(path + ".bdd_url is required") ;
              }
              

              if(target.bdd_url != null && target.bdd_url != undefined ){
                
                
                res = Entity_service_planned_tasks.checkbdd_url(target.bdd_url , `${path}.bdd_url`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.handlerInterval != null && target.handlerInterval != undefined ){
                
                
                res = Entity_service_planned_tasks.checkhandlerInterval(target.handlerInterval , `${path}.handlerInterval`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.startHandlingOnServiceStart != null && target.startHandlingOnServiceStart != undefined ){
                
                
                res = Entity_service_planned_tasks.checkstartHandlingOnServiceStart(target.startHandlingOnServiceStart , `${path}.startHandlingOnServiceStart`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.schedule_url != null && target.schedule_url != undefined ){
                
                
                res = Entity_service_planned_tasks.checkschedule_url(target.schedule_url , `${path}.schedule_url`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.task_url != null && target.task_url != undefined ){
                
                
                res = Entity_service_planned_tasks.checktask_url(target.task_url , `${path}.task_url`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.licencesService_url != null && target.licencesService_url != undefined ){
                
                
                res = Entity_service_planned_tasks.checklicencesService_url(target.licencesService_url , `${path}.licencesService_url`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.apiUrl == null || target.apiUrl == undefined) ){
                err.push(path + ".apiUrl is required") ;
              }
              

              if(target.apiUrl != null && target.apiUrl != undefined ){
                
                
                res = Entity_service_planned_tasks.checkapiUrl(target.apiUrl , `${path}.apiUrl`) ;
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
          
            case 'bdd_url':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'handlerInterval':
              //number
              
              
              return new Number(value).valueOf() ;
              
              
              
              
              
              
            break;
          
            case 'startHandlingOnServiceStart':
              //boolean
              
              
              
              return new Boolean(value).valueOf() ;
              
              
              
              
              
            break;
          
            case 'schedule_url':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'task_url':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'licencesService_url':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'apiUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
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
          
      
      case 'bdd_url':
       
             return null ;
       
        
       
      
      
      case 'handlerInterval':
       
             return null ;
       
        
       
      
      
      case 'startHandlingOnServiceStart':
       
             return null ;
       
        
       
      
      
      case 'schedule_url':
       
             return null ;
       
        
       
      
      
      case 'task_url':
       
             return null ;
       
        
       
      
      
      case 'licencesService_url':
       
             return null ;
       
        
       
      
      
      case 'apiUrl':
       
             return null ;
       
        
       
      
      
        default:
            return Entity_service  .getClassNameOfProp(key) ;
            break;
        }
       
}


   }



