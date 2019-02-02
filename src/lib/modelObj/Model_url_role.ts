import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;



/**
  règle de sécurité relative aux url
*/
export class Model_url_role extends  Base  implements Interface.Iurl_role {

/**
  règle de sécurité relative aux url
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["_$get"] != undefined && obj["_$get"] != null && _.isArray(obj["_$get"])){
          

            this["_$get"] = obj["_$get"].map((value)=>{
              if(value._class){
                return new Index[value._class](value) ;
              }else{
                return new Index["route_role"](value) ;
              }
            })
            
          
        }
        
    
        
        if(obj["_$post"] != undefined && obj["_$post"] != null && _.isArray(obj["_$post"])){
          

            this["_$post"] = obj["_$post"].map((value)=>{
              if(value._class){
                return new Index[value._class](value) ;
              }else{
                return new Index["route_role"](value) ;
              }
            })
            
          
        }
        
    
        
        if(obj["_$delete"] != undefined && obj["_$delete"] != null && _.isArray(obj["_$delete"])){
          

            this["_$delete"] = obj["_$delete"].map((value)=>{
              if(value._class){
                return new Index[value._class](value) ;
              }else{
                return new Index["route_role"](value) ;
              }
            })
            
          
        }
        
    
        
        if(obj["_$put"] != undefined && obj["_$put"] != null && _.isArray(obj["_$put"])){
          

            this["_$put"] = obj["_$put"].map((value)=>{
              if(value._class){
                return new Index[value._class](value) ;
              }else{
                return new Index["route_role"](value) ;
              }
            })
            
          
        }
        
    
        
        if(obj["_$patch"] != undefined && obj["_$patch"] != null && _.isArray(obj["_$patch"])){
          

            this["_$patch"] = obj["_$patch"].map((value)=>{
              if(value._class){
                return new Index[value._class](value) ;
              }else{
                return new Index["route_role"](value) ;
              }
            })
            
          
        }
        
    
  }
  

    public _class:string  = "url_role" ;

        
              /**
        sécurité du verbe get
        */
               public "_$get"?:Interface.Iroute_role[];
              
       
              /**
        règle de sécurité des post
        */
               public "_$post"?:Interface.Iroute_role[];
              
       
              /**
        règle de sécurité du verbe delete
        */
               public "_$delete"?:Interface.Iroute_role[];
              
       
              /**
        règle de sécurité du verbe update
        */
               public "_$put"?:Interface.Iroute_role[];
              
       
              /**
        règle de sécurité du verbe patch
        */
               public "_$patch"?:Interface.Iroute_role[];
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if(target["_$get"] != null && target["_$get"] != undefined ){
              
                  target["_$get"].forEach((__get , index:number)=>{
                  
                  
                    promArr.push( Index["route_role"].check(__get, isCompleteObj , path+"_$get.")
                      .catch((err)=>{
                        throw new Error(path+"_$get index: "+ index +"is not route_role")
                        

                      }) )
                  if(__get._class != null && __get._class != undefined){
                    promArr.push( Index[__get._class].check(__get, isCompleteObj , path+"_$get.")
                      .catch((err)=>{
                        throw new Error(path+"_$get index: "+ index +"is not a " + __get._class )
                        

                      })
                    )
                  }

                  });
              
              
           }
           
              
              if(target["_$post"] != null && target["_$post"] != undefined ){
              
                  target["_$post"].forEach((__post , index:number)=>{
                  
                  
                    promArr.push( Index["route_role"].check(__post, isCompleteObj , path+"_$post.")
                      .catch((err)=>{
                        throw new Error(path+"_$post index: "+ index +"is not route_role")
                        

                      }) )
                  if(__post._class != null && __post._class != undefined){
                    promArr.push( Index[__post._class].check(__post, isCompleteObj , path+"_$post.")
                      .catch((err)=>{
                        throw new Error(path+"_$post index: "+ index +"is not a " + __post._class )
                        

                      })
                    )
                  }

                  });
              
              
           }
           
              
              if(target["_$delete"] != null && target["_$delete"] != undefined ){
              
                  target["_$delete"].forEach((__delete , index:number)=>{
                  
                  
                    promArr.push( Index["route_role"].check(__delete, isCompleteObj , path+"_$delete.")
                      .catch((err)=>{
                        throw new Error(path+"_$delete index: "+ index +"is not route_role")
                        

                      }) )
                  if(__delete._class != null && __delete._class != undefined){
                    promArr.push( Index[__delete._class].check(__delete, isCompleteObj , path+"_$delete.")
                      .catch((err)=>{
                        throw new Error(path+"_$delete index: "+ index +"is not a " + __delete._class )
                        

                      })
                    )
                  }

                  });
              
              
           }
           
              
              if(target["_$put"] != null && target["_$put"] != undefined ){
              
                  target["_$put"].forEach((__put , index:number)=>{
                  
                  
                    promArr.push( Index["route_role"].check(__put, isCompleteObj , path+"_$put.")
                      .catch((err)=>{
                        throw new Error(path+"_$put index: "+ index +"is not route_role")
                        

                      }) )
                  if(__put._class != null && __put._class != undefined){
                    promArr.push( Index[__put._class].check(__put, isCompleteObj , path+"_$put.")
                      .catch((err)=>{
                        throw new Error(path+"_$put index: "+ index +"is not a " + __put._class )
                        

                      })
                    )
                  }

                  });
              
              
           }
           
              
              if(target["_$patch"] != null && target["_$patch"] != undefined ){
              
                  target["_$patch"].forEach((__patch , index:number)=>{
                  
                  
                    promArr.push( Index["route_role"].check(__patch, isCompleteObj , path+"_$patch.")
                      .catch((err)=>{
                        throw new Error(path+"_$patch index: "+ index +"is not route_role")
                        

                      }) )
                  if(__patch._class != null && __patch._class != undefined){
                    promArr.push( Index[__patch._class].check(__patch, isCompleteObj , path+"_$patch.")
                      .catch((err)=>{
                        throw new Error(path+"_$patch index: "+ index +"is not a " + __patch._class )
                        

                      })
                    )
                  }

                  });
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_url_role>{
        return Model_url_role.check(target, true, path).then(()=>{
          return new Model_url_role(target) ;
        })
      }

   }
