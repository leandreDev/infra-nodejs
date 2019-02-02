import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_application } from "./Model_application"


/**
  c'est un paquet de carte
*/
export class Model_pack_card extends   Model_application   implements Interface.Ipack_card {

/**
  c'est un paquet de carte
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["imageUrl"] != undefined){
          
           this["imageUrl"] = obj["imageUrl"].toString() ;
           
        }
        
    
        
        if(obj["companyName"] != undefined){
          
           this["companyName"] = obj["companyName"].toString() ;
           
        }
        
    
        
        if(obj["companyId"] != undefined){
          
           this["companyId"] = obj["companyId"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "pack_card" ;

        
              /**
        l'url de l'image
        */
               public "imageUrl"?:string ;
              
       
              /**
        nom de la compagnie dans l'infra de goshaba 
        */
               public "companyName"?:string ;
              
       
              /**
        l'id de la compagnie dans l'infra de goshaba
        */
               public "companyId"?:string ;
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if(target["imageUrl"] != null && target["imageUrl"] != undefined ){
              
                let _imageUrl  = target["imageUrl"] ;
                

                 if(! _.isString(_imageUrl)){
                    throw new Error(path+"imageUrl is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["companyName"] != null && target["companyName"] != undefined ){
              
                let _companyName  = target["companyName"] ;
                

                 if(! _.isString(_companyName)){
                    throw new Error(path+"companyName is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["companyId"] != null && target["companyId"] != undefined ){
              
                let _companyId  = target["companyId"] ;
                

                 if(! _.isString(_companyId)){
                    throw new Error(path+"companyId is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_pack_card>{
        return Model_pack_card.check(target, true, path).then(()=>{
          return new Model_pack_card(target) ;
        })
      }

   }
