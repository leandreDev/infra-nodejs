import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandredev/utils" ;



/**
  un noeud de menu de mongoEditor
*/
export class Model_ui_menu_mongo_editor extends  Base  implements Interface.Iui_menu_mongo_editor {

/**
  un noeud de menu de mongoEditor
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["label"] != undefined){
          
           this["label"] = obj["label"].toString() ;
           
        }
        
    
        
        if(obj["path"] != undefined){
          
           this["path"] = obj["path"].toString() ;
           
        }
        
    
        
        if(obj["icon"] != undefined){
          
           this["icon"] = obj["icon"].toString() ;
           
        }
        
    
        
        if(obj["child"] != undefined && obj["child"] != null && _.isArray(obj["child"])){
          

            this["child"] = obj["child"].map((value)=>{
              if(value._class){
                return new Index[value._class](value) ;
              }else{
                return new Index["ui_menu_mongo_editor"](value) ;
              }
            })
            
          
        }
        
    
  }
  

    public _class:string  = "ui_menu_mongo_editor" ;

        
              /**
        le nom a aficher
        */
               public "label"?:string ;
              
       
              /**
        le path dans l'application web
        */
               public "path"?:string ;
              
       
              /**
        icon
        */
               public "icon"?:string ="description";
              
       
              /**
        liste des sous menu
        */
               public "child"?:Interface.Iui_menu_mongo_editor[];
              
       


       

   }
