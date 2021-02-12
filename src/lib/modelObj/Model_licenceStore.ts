import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@hfdev/utils" ;



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
              
       


       

   }
