import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandredev/utils" ;


import {Model_ui_menu_mongo_editor } from "./Model_ui_menu_mongo_editor"


/**
  représente un séparateur dans le menu
*/
export class Model_ui_menu_mongo_editor_separateur extends   Model_ui_menu_mongo_editor   implements Interface.Iui_menu_mongo_editor_separateur {

/**
  représente un séparateur dans le menu
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["cssClass"] != undefined){
          
           this["cssClass"] = obj["cssClass"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "ui_menu_mongo_editor_separateur" ;

        
              /**
        nom de la classe css à appliquer
        */
               public "cssClass"?:string ="separateur";
              
       


       

   }
