import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandredev/utils" ;


import {Model_service } from "./Model_service"


/**
  service celio fid
*/
export class Model_service_celio_fid extends   Model_service   implements Interface.Iservice_celio_fid {

/**
  service celio fid
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["bddUrl"] != undefined){
          
           this["bddUrl"] = obj["bddUrl"].toString() ;
           
        }
        
    
        
        if(obj["accessTokenUrl"] != undefined){
          
           this["accessTokenUrl"] = obj["accessTokenUrl"].toString() ;
           
        }
        
    
        
        if(obj["client_id"] != undefined){
          
           this["client_id"] = obj["client_id"].toString() ;
           
        }
        
    
        
        if(obj["client_secret"] != undefined){
          
           this["client_secret"] = obj["client_secret"].toString() ;
           
        }
        
    
        
        if(obj["hybrisUrl"] != undefined){
          
           this["hybrisUrl"] = obj["hybrisUrl"].toString() ;
           
        }
        
    
        
        if(obj["baseSiteId"] != undefined){
          
           this["baseSiteId"] = obj["baseSiteId"].toString() ;
           
        }
        
    
        
        if(obj["secretToken"] != undefined){
          
           this["secretToken"] = obj["secretToken"].toString() ;
           
        }
        
    
        
        if(obj["serverUrl"] != undefined){
          
           this["serverUrl"] = obj["serverUrl"].toString() ;
           
        }
        
    
        
        if(obj["caPath"] != undefined){
          
           this["caPath"] = obj["caPath"].toString() ;
           
        }
        
    
        
        if(obj["sponsorPoints"] != undefined){
          
           this["sponsorPoints"] = new Number(obj["sponsorPoints"]).valueOf();
          
        }
        
    
        
        if(obj["childPoints"] != undefined){
          
           this["childPoints"] = new Number(obj["childPoints"]).valueOf();
          
        }
        
    
        
        if(obj["cappingThreshold"] != undefined){
          
           this["cappingThreshold"] = obj["cappingThreshold"].toString() ;
           
        }
        
    
        
        if(obj["sponsorshipFrequencyUnit"] != undefined){
          
           this["sponsorshipFrequencyUnit"] = new Number(obj["sponsorshipFrequencyUnit"]).valueOf();
          
        }
        
    
        
        if(obj["sponsorshipMaxCount"] != undefined){
          
           this["sponsorshipMaxCount"] = new Number(obj["sponsorshipMaxCount"]).valueOf();
          
        }
        
    
        
        if(obj["fixedEarnFrequencyUnit"] != undefined){
          
           this["fixedEarnFrequencyUnit"] = new Number(obj["fixedEarnFrequencyUnit"]).valueOf();
          
        }
        
    
        
        if(obj["fixedEarnValue"] != undefined){
          
           this["fixedEarnValue"] = new Number(obj["fixedEarnValue"]).valueOf();
          
        }
        
    
        
        if(obj["fixedEarnMaxCount"] != undefined){
          
           this["fixedEarnMaxCount"] = new Number(obj["fixedEarnMaxCount"]).valueOf();
          
        }
        
    
  }
  

    public _class:string  = "service_celio_fid" ;

        
              /**
        url du service de bdd
        */
               public "bddUrl"?:string ;
              
       
              /**
        url du point d'acces des token
        */
               public "accessTokenUrl":string ;
              
       
              /**
        client_id celio
        */
               public "client_id":string ;
              
       
              /**
        client_secret celio
        */
               public "client_secret"?:string ;
              
       
              /**
        url de l'api hybris
        */
               public "hybrisUrl":string ;
              
       
              /**
        baseSiteId des api celio
        */
               public "baseSiteId"?:string ;
              
       
              /**
        secretToken apm
        */
               public "secretToken"?:string ;
              
       
              /**
        serverUrl apm
        */
               public "serverUrl"?:string ;
              
       
              /**
        url du certificat de bdd si il est renseigné, la connection passe en ssl 
        */
               public "caPath"?:string ;
              
       
              /**
        nombre de points qu'un sponsor peut gagner par parrainage
        */
               public "sponsorPoints"?:number ;
              
       
              /**
        points gagnés par un filleul
        */
               public "childPoints"?:number ;
              
       
              /**
        seuil pour activation du capping
        */
               public "cappingThreshold"?:string ;
              
       
              /**
        Frequence de rafraîchissement des droits de parainage
        */
               public "sponsorshipFrequencyUnit"?:number ;
              
       
              /**
        nombre de parainages autorisés par fréquence
        */
               public "sponsorshipMaxCount"?:number ;
              
       
              /**
        unité de fréquence de répétition du earn fixe (semaine, mois, etc.)
        */
               public "fixedEarnFrequencyUnit"?:number ;
              
       
              /**
        Nombre de points gagnés par EarnFixe
        */
               public "fixedEarnValue"?:number ;
              
       
              /**
        nombre de earn fixes autorisés par période
        */
               public "fixedEarnMaxCount"?:number ;
              
       


       

   }
