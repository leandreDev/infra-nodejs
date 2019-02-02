import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_licence } from "./Model_licence"


/**
  c'est une licence qui dure un certain temps
*/
export class Model_licence_temporelle extends   Model_licence   implements Interface.Ilicence_temporelle {

/**
  c'est une licence qui dure un certain temps
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["validityStartDate"] != undefined){
          
            this["validityStartDate"] = new Date(obj["validityStartDate"]) ;
          
        }
        
    
        
        if(obj["validityEndDate"] != undefined){
          
            this["validityEndDate"] = new Date(obj["validityEndDate"]) ;
          
        }
        
    
        
        if(obj["licenceDuration"] != undefined){
          
           this["licenceDuration"] = new Number(obj["licenceDuration"]).valueOf();
          
        }
        
    
        
        if(obj["licenceEndDate"] != undefined){
          
            this["licenceEndDate"] = new Date(obj["licenceEndDate"]) ;
          
        }
        
    
  }
  

    public _class:string  = "licence_temporelle" ;

        
              /**
        c'est la date a partir de la quelle, la licence peut être utilisé
        */
               public "validityStartDate"?:Date ;
              
       
              /**
        c'est la  date de fin de validité de cette licence
        */
               public "validityEndDate"?:Date ;
              
       
              /**
        c'est la durée d’accès au service grâce a cette licence (en seconde)
        */
               public "licenceDuration"?:number ;
              
       
              /**
        c'est la date de fin de licence (si elle n'est pas renseigné, c'est la date de première utilisation + la durée de la licence)
        */
               public "licenceEndDate"?:Date ;
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if(target["validityStartDate"] != null && target["validityStartDate"] != undefined ){
              
                let _validityStartDate  = target["validityStartDate"] ;
                
                if(! _.isDate(_validityStartDate)){

                      throw new Error(path+"validityStartDate is not a Date") ;
                      
                }
                
                
                
              
              
           }
           
              
              if(target["validityEndDate"] != null && target["validityEndDate"] != undefined ){
              
                let _validityEndDate  = target["validityEndDate"] ;
                
                if(! _.isDate(_validityEndDate)){

                      throw new Error(path+"validityEndDate is not a Date") ;
                      
                }
                
                
                
              
              
           }
           
              
              if(target["licenceDuration"] != null && target["licenceDuration"] != undefined ){
              
                let _licenceDuration  = target["licenceDuration"] ;
                
                  if(! _.isNumber(_licenceDuration)){
                      throw new Error(path+"licenceDuration is not a number") ;
                      
                  }
                  
                
                

                
              
              
           }
           
              
              if(target["licenceEndDate"] != null && target["licenceEndDate"] != undefined ){
              
                let _licenceEndDate  = target["licenceEndDate"] ;
                
                if(! _.isDate(_licenceEndDate)){

                      throw new Error(path+"licenceEndDate is not a Date") ;
                      
                }
                
                
                
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_licence_temporelle>{
        return Model_licence_temporelle.check(target, true, path).then(()=>{
          return new Model_licence_temporelle(target) ;
        })
      }

   }
