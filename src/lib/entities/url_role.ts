import * as _ from "lodash" ;
import * as Index from "./Index" ;
import {mongo , Entity} from "@leandredev/utils" ;



/**
  règle de sécurité relative aux url
*/
export class Entity_url_role extends  Entity   {



   
  static cast(obj:any={} , castChildClass:boolean=false){
    
    if((!castChildClass) && obj._class && obj._class != 'url_role' && [].indexOf(obj._class)!==-1){
       Index['Entity_' + obj._class].cast(obj , true) ;
       return ;
    }
    
    Entity.cast(obj, true) 
    
    
        
        if(obj["_$get"] != undefined && obj["_$get"] != null && _.isArray(obj["_$get"])){
          

            obj["_$get"].forEach((value)=>{
              
                Index.Entity_route_role.cast(value) ;
                
              
            })
          
        }
        
    
        
        if(obj["_$post"] != undefined && obj["_$post"] != null && _.isArray(obj["_$post"])){
          

            obj["_$post"].forEach((value)=>{
              
                Index.Entity_route_role.cast(value) ;
                
              
            })
          
        }
        
    
        
        if(obj["_$delete"] != undefined && obj["_$delete"] != null && _.isArray(obj["_$delete"])){
          

            obj["_$delete"].forEach((value)=>{
              
                Index.Entity_route_role.cast(value) ;
                
              
            })
          
        }
        
    
        
        if(obj["_$put"] != undefined && obj["_$put"] != null && _.isArray(obj["_$put"])){
          

            obj["_$put"].forEach((value)=>{
              
                Index.Entity_route_role.cast(value) ;
                
              
            })
          
        }
        
    
        
        if(obj["_$patch"] != undefined && obj["_$patch"] != null && _.isArray(obj["_$patch"])){
          

            obj["_$patch"].forEach((value)=>{
              
                Index.Entity_route_role.cast(value) ;
                
              
            })
          
        }
        
    
  }


 

public static check_$get(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         

         

        
        
          let result:string[] ;
          if( val._class ){
            result = Index['Entity_' + val._class].check(val , false , path  ) ;
          }else{
            result = Index.Entity_route_role.check(val , false , path  ) ;
            //59778133d8de780f33f5f143

          }
          res = [...res , ...result] ;
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static check_$post(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         

         

        
        
          let result:string[] ;
          if( val._class ){
            result = Index['Entity_' + val._class].check(val , false , path  ) ;
          }else{
            result = Index.Entity_route_role.check(val , false , path  ) ;
            //59778133d8de780f33f5f143

          }
          res = [...res , ...result] ;
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static check_$delete(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         

         

        
        
          let result:string[] ;
          if( val._class ){
            result = Index['Entity_' + val._class].check(val , false , path  ) ;
          }else{
            result = Index.Entity_route_role.check(val , false , path  ) ;
            //59778133d8de780f33f5f143

          }
          res = [...res , ...result] ;
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static check_$put(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         

         

        
        
          let result:string[] ;
          if( val._class ){
            result = Index['Entity_' + val._class].check(val , false , path  ) ;
          }else{
            result = Index.Entity_route_role.check(val , false , path  ) ;
            //59778133d8de780f33f5f143

          }
          res = [...res , ...result] ;
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static check_$patch(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         

         

        
        
          let result:string[] ;
          if( val._class ){
            result = Index['Entity_' + val._class].check(val , false , path  ) ;
          }else{
            result = Index.Entity_route_role.check(val , false , path  ) ;
            //59778133d8de780f33f5f143

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
        
          
          
              

              

              if(target._$get != null && target._$get != undefined ){
                
                
                target._$get.forEach((data, index)=>{
                  res = Entity_url_role.check_$get(target._$get[index] , `${path}._$get.${index}` ) ;
                  if(res && res.length > 0){
                    err = [...err , ...res] ;
                  }
                })
                
              }

              
              
           
              

              

              if(target._$post != null && target._$post != undefined ){
                
                
                target._$post.forEach((data, index)=>{
                  res = Entity_url_role.check_$post(target._$post[index] , `${path}._$post.${index}` ) ;
                  if(res && res.length > 0){
                    err = [...err , ...res] ;
                  }
                })
                
              }

              
              
           
              

              

              if(target._$delete != null && target._$delete != undefined ){
                
                
                target._$delete.forEach((data, index)=>{
                  res = Entity_url_role.check_$delete(target._$delete[index] , `${path}._$delete.${index}` ) ;
                  if(res && res.length > 0){
                    err = [...err , ...res] ;
                  }
                })
                
              }

              
              
           
              

              

              if(target._$put != null && target._$put != undefined ){
                
                
                target._$put.forEach((data, index)=>{
                  res = Entity_url_role.check_$put(target._$put[index] , `${path}._$put.${index}` ) ;
                  if(res && res.length > 0){
                    err = [...err , ...res] ;
                  }
                })
                
              }

              
              
           
              

              

              if(target._$patch != null && target._$patch != undefined ){
                
                
                target._$patch.forEach((data, index)=>{
                  res = Entity_url_role.check_$patch(target._$patch[index] , `${path}._$patch.${index}` ) ;
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
          
            case '_$get':
              //subdoc
              
              if(value._class){
                return  Index['Entity_'+value._class].castQueryParam(subPath , value) ;
              }else{
                return Index.Entity_route_role.castQueryParam(subPath ,value) ;
              }
              
              
              
              
              
              
              
            break;
          
            case '_$post':
              //subdoc
              
              if(value._class){
                return  Index['Entity_'+value._class].castQueryParam(subPath , value) ;
              }else{
                return Index.Entity_route_role.castQueryParam(subPath ,value) ;
              }
              
              
              
              
              
              
              
            break;
          
            case '_$delete':
              //subdoc
              
              if(value._class){
                return  Index['Entity_'+value._class].castQueryParam(subPath , value) ;
              }else{
                return Index.Entity_route_role.castQueryParam(subPath ,value) ;
              }
              
              
              
              
              
              
              
            break;
          
            case '_$put':
              //subdoc
              
              if(value._class){
                return  Index['Entity_'+value._class].castQueryParam(subPath , value) ;
              }else{
                return Index.Entity_route_role.castQueryParam(subPath ,value) ;
              }
              
              
              
              
              
              
              
            break;
          
            case '_$patch':
              //subdoc
              
              if(value._class){
                return  Index['Entity_'+value._class].castQueryParam(subPath , value) ;
              }else{
                return Index.Entity_route_role.castQueryParam(subPath ,value) ;
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
          
      
      case '_$get':
       
        
              
             return Index.Entity_route_role.getClassNameOfProp(subPath) ;
              
       
       
      
      
      case '_$post':
       
        
              
             return Index.Entity_route_role.getClassNameOfProp(subPath) ;
              
       
       
      
      
      case '_$delete':
       
        
              
             return Index.Entity_route_role.getClassNameOfProp(subPath) ;
              
       
       
      
      
      case '_$put':
       
        
              
             return Index.Entity_route_role.getClassNameOfProp(subPath) ;
              
       
       
      
      
      case '_$patch':
       
        
              
             return Index.Entity_route_role.getClassNameOfProp(subPath) ;
              
       
       
      
      
        default:
            return Entity.getClassNameOfProp(key) ;
            break;
        }
       
}


   }



