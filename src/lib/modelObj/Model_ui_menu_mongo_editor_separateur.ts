import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


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
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if(target["cssClass"] != null && target["cssClass"] != undefined ){
              
                let _cssClass  = target["cssClass"] ;
                

                 if(! _.isString(_cssClass)){
                    throw new Error(path+"cssClass is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_ui_menu_mongo_editor_separateur>{
        return Model_ui_menu_mongo_editor_separateur.check(target, true, path).then(()=>{
          return new Model_ui_menu_mongo_editor_separateur(target) ;
        })
      }

   }
