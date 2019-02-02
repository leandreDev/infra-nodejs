import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;



/**
  stock de licence distribuable
*/
export class Model_licenceStore extends  Base  implements Interface.IlicenceStore {

/**
  stock de licence distribuable
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["nbLicence"] != undefined){
          
           this["nbLicence"] = new Number(obj["nbLicence"]).valueOf();
          
        }
        
    
        
        if(obj["licenceTemplate"] != undefined && obj["licenceTemplate"] != null && _.isArray(obj["licenceTemplate"])){
          

            this["licenceTemplate"] = obj["licenceTemplate"].map((value)=>{
              if(value._class){
                return new Index[value._class](value) ;
              }else{
                return new Index["licence"](value) ;
              }
            })
            
          
        }
        
    
        
        if(obj["autoAssign"] != undefined){
          
           this["autoAssign"] = new Boolean(obj["autoAssign"]).valueOf() ;
          
        }
        
    
        
        if(obj["validytyStartDate"] != undefined){
          
            this["validytyStartDate"] = new Date(obj["validytyStartDate"]) ;
          
        }
        
    
        
        if(obj["validityEndDate"] != undefined){
          
            this["validityEndDate"] = new Date(obj["validityEndDate"]) ;
          
        }
        
    
        
        if(obj["distributionPeriode"] != undefined && obj["distributionPeriode"] != null && _.isArray(obj["distributionPeriode"])){
          

            this["distributionPeriode"] = obj["distributionPeriode"].map((value)=>{
              if(value._class){
                return new Index[value._class](value) ;
              }else{
                return new Index["periodicalDistrution"](value) ;
              }
            })
            
          
        }
        
    
        
        if(obj["name"] != undefined){
          
           this["name"] = obj["name"].toString() ;
           
        }
        
    
        
        if(obj["nbLicenceOriginal"] != undefined){
          
           this["nbLicenceOriginal"] = new Number(obj["nbLicenceOriginal"]).valueOf();
          
        }
        
    
        
        if(obj["ref"] != undefined){
          
           this["ref"] = obj["ref"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "licenceStore" ;

        
              /**
        nombre de licence a distrubuer
        */
               public "nbLicence"?:number ;
              
       
              /**
        licence paramétré
        */
               public "licenceTemplate"?:Interface.Ilicence[];
              
       
              /**
        assignation automatique d'une licence
        */
               public "autoAssign"?:boolean ;
              
       
              /**
        date de début de distribution possible
        */
               public "validytyStartDate"?:Date ;
              
       
              /**
        date de fin de validité
        */
               public "validityEndDate"?:Date ;
              
       
              /**
        permet de gérer des limites de distribution
        */
               public "distributionPeriode"?:Interface.IperiodicalDistrution[];
              
       
              /**
        nom de pack de licence
        */
               public "name":string ;
              
       
              /**
        nombre de licence mise a disposition
        */
               public "nbLicenceOriginal":number ;
              
       
              /**
        référence du licenceStore
        */
               public "ref"?:string ;
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if(target["nbLicence"] != null && target["nbLicence"] != undefined ){
              
                let _nbLicence  = target["nbLicence"] ;
                
                  if(! _.isNumber(_nbLicence)){
                      throw new Error(path+"nbLicence is not a number") ;
                      
                  }
                  
                
                
                  if(_nbLicence % 1 > 0){
                    throw new Error(path+"nbLicence must be have a step of 1" ) ;
                    
                  }
                

                
              
              
           }
           
              
              if(target["licenceTemplate"] != null && target["licenceTemplate"] != undefined ){
              
                  target["licenceTemplate"].forEach((_licenceTemplate , index:number)=>{
                  
                  
                    promArr.push( Index["licence"].check(_licenceTemplate, isCompleteObj , path+"licenceTemplate.")
                      .catch((err)=>{
                        throw new Error(path+"licenceTemplate index: "+ index +"is not licence")
                        

                      }) )
                  if(_licenceTemplate._class != null && _licenceTemplate._class != undefined){
                    promArr.push( Index[_licenceTemplate._class].check(_licenceTemplate, isCompleteObj , path+"licenceTemplate.")
                      .catch((err)=>{
                        throw new Error(path+"licenceTemplate index: "+ index +"is not a " + _licenceTemplate._class )
                        

                      })
                    )
                  }

                  });
              
              
           }
           
              
              if(target["autoAssign"] != null && target["autoAssign"] != undefined ){
              
                let _autoAssign  = target["autoAssign"] ;
                
                  if(! _.isBoolean(_autoAssign)){
                    throw new Error(path+"autoAssign is not a boolean") ;
                    
                  }
                

              
              
           }
           
              
              if(target["validytyStartDate"] != null && target["validytyStartDate"] != undefined ){
              
                let _validytyStartDate  = target["validytyStartDate"] ;
                
                if(! _.isDate(_validytyStartDate)){

                      throw new Error(path+"validytyStartDate is not a Date") ;
                      
                }
                
                
                
              
              
           }
           
              
              if(target["validityEndDate"] != null && target["validityEndDate"] != undefined ){
              
                let _validityEndDate  = target["validityEndDate"] ;
                
                if(! _.isDate(_validityEndDate)){

                      throw new Error(path+"validityEndDate is not a Date") ;
                      
                }
                
                
                
              
              
           }
           
              
              if(target["distributionPeriode"] != null && target["distributionPeriode"] != undefined ){
              
                  target["distributionPeriode"].forEach((_distributionPeriode , index:number)=>{
                  
                  
                    promArr.push( Index["periodicalDistrution"].check(_distributionPeriode, isCompleteObj , path+"distributionPeriode.")
                      .catch((err)=>{
                        throw new Error(path+"distributionPeriode index: "+ index +"is not periodicalDistrution")
                        

                      }) )
                  if(_distributionPeriode._class != null && _distributionPeriode._class != undefined){
                    promArr.push( Index[_distributionPeriode._class].check(_distributionPeriode, isCompleteObj , path+"distributionPeriode.")
                      .catch((err)=>{
                        throw new Error(path+"distributionPeriode index: "+ index +"is not a " + _distributionPeriode._class )
                        

                      })
                    )
                  }

                  });
              
              
           }
           
              
              if( isCompleteObj && (target["name"] == null || target["name"] == undefined) ){
                  throw new Error(path + "name is required") ;
              }
              
              if(target["name"] != null && target["name"] != undefined ){
              
                let _name  = target["name"] ;
                

                 if(! _.isString(_name)){
                    throw new Error(path+"name is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if( isCompleteObj && (target["nbLicenceOriginal"] == null || target["nbLicenceOriginal"] == undefined) ){
                  throw new Error(path + "nbLicenceOriginal is required") ;
              }
              
              if(target["nbLicenceOriginal"] != null && target["nbLicenceOriginal"] != undefined ){
              
                let _nbLicenceOriginal  = target["nbLicenceOriginal"] ;
                
                  if(! _.isNumber(_nbLicenceOriginal)){
                      throw new Error(path+"nbLicenceOriginal is not a number") ;
                      
                  }
                  
                
                

                
              
              
           }
           
              
              if(target["ref"] != null && target["ref"] != undefined ){
              
                let _ref  = target["ref"] ;
                

                 if(! _.isString(_ref)){
                    throw new Error(path+"ref is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_licenceStore>{
        return Model_licenceStore.check(target, true, path).then(()=>{
          return new Model_licenceStore(target) ;
        })
      }

   }
