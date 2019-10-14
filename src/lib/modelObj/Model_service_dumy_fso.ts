import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_service } from "./Model_service"


/**
  simple remote file system a n utiliser que pour des test
*/
export class Model_service_dumy_fso extends   Model_service   implements Interface.Iservice_dumy_fso {

/**
  simple remote file system a n utiliser que pour des test
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["fsoBase"] != undefined){
          
           this["fsoBase"] = obj["fsoBase"].toString() ;
           
        }
        
    
        
        if(obj["url_bd"] != undefined){
          
           this["url_bd"] = obj["url_bd"].toString() ;
           
        }
        
    
        
        if(obj["url_folder_collection"] != undefined){
          
           this["url_folder_collection"] = obj["url_folder_collection"].toString() ;
           
        }
        
    
        
        if(obj["url_file_collection"] != undefined){
          
           this["url_file_collection"] = obj["url_file_collection"].toString() ;
           
        }
        
    
        
        if(obj["url_service"] != undefined){
          
           this["url_service"] = obj["url_service"].toString() ;
           
        }
        
    
        
        if(obj["root_file_directory"] != undefined){
          
           this["root_file_directory"] = obj["root_file_directory"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "service_dumy_fso" ;

        
              /**
        le chemin du repertoire de base de stockage
        */
               public "fsoBase"?:string ;
              
       
              /**
        Url de la basse de donnée
        */
               public "url_bd"?:string ;
              
       
              /**
        url de la colection des "directories"
        */
               public "url_folder_collection"?:string ;
              
       
              /**
        URL de la colletion "files"
        */
               public "url_file_collection"?:string ;
              
       
              /**
        URL du service
        */
               public "url_service"?:string ;
              
       
              /**
        Repertoire ou seront sauvegardé les fichiers
        */
               public "root_file_directory"?:string ;
              
       


       

   }
