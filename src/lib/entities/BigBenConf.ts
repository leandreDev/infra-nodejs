import * as _ from "lodash" ;
import * as Index from "./Index" ;
import {mongo , Entity} from "@leandredev/utils" ;



/**
  Configuration de connexion BigBen
*/
export class Entity_BigBenConf extends  Entity   {



   
  static cast(obj:any={} , castChildClass:boolean=false){
    
    if((!castChildClass) && obj._class && obj._class != 'BigBenConf' && [].indexOf(obj._class)!==-1){
       Index['Entity_' + obj._class].cast(obj , true) ;
       return ;
    }
    
    Entity.cast(obj, true) 
    
    
        
        if(obj["u"] != undefined){
          
           obj["u"] = obj["u"].toString() ;
           
        }
        
    
        
        if(obj["p"] != undefined){
          
           obj["p"] = obj["p"].toString() ;
           
        }
        
    
        
        if(obj["k"] != undefined){
          
           obj["k"] = obj["k"].toString() ;
           
        }
        
    
        
        if(obj["apiUrl"] != undefined){
          
           obj["apiUrl"] = obj["apiUrl"].toString() ;
           
        }
        
    
        
        if(obj["marcoApiKey"] != undefined){
          
           obj["marcoApiKey"] = obj["marcoApiKey"].toString() ;
           
        }
        
    
        
        if(obj["marcoApiUrl"] != undefined){
          
           obj["marcoApiUrl"] = obj["marcoApiUrl"].toString() ;
           
        }
        
    
        
        if(obj["isMarcoApiActive"] != undefined){
          
           obj["isMarcoApiActive"] = new Boolean(obj["isMarcoApiActive"]).valueOf() ;
          
        }
        
    
  }


 

public static checku(val:any, path:string =null):string[]{
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


       
 

public static checkp(val:any, path:string =null):string[]{
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


       
 

public static checkk(val:any, path:string =null):string[]{
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


       
 

public static checkmarcoApiKey(val:any, path:string =null):string[]{
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


       
 

public static checkmarcoApiUrl(val:any, path:string =null):string[]{
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


       
 

public static checkisMarcoApiActive(val:any, path:string =null):string[]{
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
        
          
          
              

              
              if( isCompleteObj && (target.u == null || target.u == undefined) ){
                err.push(path + ".u is required") ;
              }
              

              if(target.u != null && target.u != undefined ){
                
                
                res = Entity_BigBenConf.checku(target.u , `${path}.u`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.p == null || target.p == undefined) ){
                err.push(path + ".p is required") ;
              }
              

              if(target.p != null && target.p != undefined ){
                
                
                res = Entity_BigBenConf.checkp(target.p , `${path}.p`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.k == null || target.k == undefined) ){
                err.push(path + ".k is required") ;
              }
              

              if(target.k != null && target.k != undefined ){
                
                
                res = Entity_BigBenConf.checkk(target.k , `${path}.k`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.apiUrl == null || target.apiUrl == undefined) ){
                err.push(path + ".apiUrl is required") ;
              }
              

              if(target.apiUrl != null && target.apiUrl != undefined ){
                
                
                res = Entity_BigBenConf.checkapiUrl(target.apiUrl , `${path}.apiUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.marcoApiKey != null && target.marcoApiKey != undefined ){
                
                
                res = Entity_BigBenConf.checkmarcoApiKey(target.marcoApiKey , `${path}.marcoApiKey`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.marcoApiUrl != null && target.marcoApiUrl != undefined ){
                
                
                res = Entity_BigBenConf.checkmarcoApiUrl(target.marcoApiUrl , `${path}.marcoApiUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.isMarcoApiActive != null && target.isMarcoApiActive != undefined ){
                
                
                res = Entity_BigBenConf.checkisMarcoApiActive(target.isMarcoApiActive , `${path}.isMarcoApiActive`) ;
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
          
            case 'u':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'p':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'k':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'apiUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'marcoApiKey':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'marcoApiUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'isMarcoApiActive':
              //boolean
              
              
              
              return new Boolean(value).valueOf() ;
              
              
              
              
              
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
          
      
      case 'u':
       
             return null ;
       
        
       
      
      
      case 'p':
       
             return null ;
       
        
       
      
      
      case 'k':
       
             return null ;
       
        
       
      
      
      case 'apiUrl':
       
             return null ;
       
        
       
      
      
      case 'marcoApiKey':
       
             return null ;
       
        
       
      
      
      case 'marcoApiUrl':
       
             return null ;
       
        
       
      
      
      case 'isMarcoApiActive':
       
             return null ;
       
        
       
      
      
        default:
            return Entity.getClassNameOfProp(key) ;
            break;
        }
       
}


   }



