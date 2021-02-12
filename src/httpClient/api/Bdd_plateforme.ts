

import {UtilsSecu ,  HttpServiceAdminBase ,HttpServiceBddBase ,HttpServiceBddAdminBase,HttpServiceBddBaseView, mongo , IBase, IHttpResult} from "utils" ;
import * as Interfaces from "../../lib/modelObj/Interfaces" ;
import * as Index from "../../lib/entities/Index" ;
import * as fs from "fs" ;


import {IPlateforme} from './IPlateforme' ;


export class bdd_collection_plateform  {

	constructor(conf:any ){
	this.url = conf.url ;
	this.secure = conf.secure ;
	

		this.certificat= new HttpServiceBddBase<Interfaces.Icertificat>( {bdd: conf.bdd , collectionName:'certificats', entity:Index.Entity_certificat , debug:conf.debug ,  collections:this }  )  ;
		this.admin_certificat= new HttpServiceBddAdminBase<Interfaces.Icertificat>( {bdd: conf.bdd , collectionName:'certificats', entity:Index.Entity_certificat , debug:conf.debug} )  ;

		
		 
		this.rsa= new HttpServiceBddBase<Interfaces.Irsa>({bdd: conf.bdd , collectionName:'certificats',  entity:Index.Entity_rsa , _class:'rsa' , debug:conf.debug ,  collections:this })  ;
		this.admin_rsa= new HttpServiceBddAdminBase<Interfaces.Irsa>({bdd: conf.bdd , collectionName:'certificats',  entity:Index.Entity_rsa , _class:'rsa' , debug:conf.debug})  ;

		 
	

		this.oidc_Client= new HttpServiceBddBase<Interfaces.Ioidc_Client>( {bdd: conf.bdd , collectionName:'oidc_clients', entity:Index.Entity_oidc_Client , debug:conf.debug ,  collections:this }  )  ;
		this.admin_oidc_Client= new HttpServiceBddAdminBase<Interfaces.Ioidc_Client>( {bdd: conf.bdd , collectionName:'oidc_clients', entity:Index.Entity_oidc_Client , debug:conf.debug} )  ;

		
	

		this.oidc_account= new HttpServiceBddBase<Interfaces.Ioidc_account>( {bdd: conf.bdd , collectionName:'oidc_accounts', entity:Index.Entity_oidc_account , debug:conf.debug ,  collections:this }  )  ;
		this.admin_oidc_account= new HttpServiceBddAdminBase<Interfaces.Ioidc_account>( {bdd: conf.bdd , collectionName:'oidc_accounts', entity:Index.Entity_oidc_account , debug:conf.debug} )  ;

		
	

		this.service_access= new HttpServiceBddBase<Interfaces.Iservice_access>( {bdd: conf.bdd , collectionName:'service_accesses', entity:Index.Entity_service_access , debug:conf.debug ,  collections:this }  )  ;
		this.admin_service_access= new HttpServiceBddAdminBase<Interfaces.Iservice_access>( {bdd: conf.bdd , collectionName:'service_accesses', entity:Index.Entity_service_access , debug:conf.debug} )  ;

		
	

		this.protoschema= new HttpServiceBddBase<Interfaces.Iprotoschema>( {bdd: conf.bdd , collectionName:'protoschemas', entity:Index.Entity_protoschema , debug:conf.debug ,  collections:this }  )  ;
		this.admin_protoschema= new HttpServiceBddAdminBase<Interfaces.Iprotoschema>( {bdd: conf.bdd , collectionName:'protoschemas', entity:Index.Entity_protoschema , debug:conf.debug} )  ;

		
	

		this.mail= new HttpServiceBddBase<Interfaces.Imail>( {bdd: conf.bdd , collectionName:'mails', entity:Index.Entity_mail , debug:conf.debug ,  collections:this }  )  ;
		this.admin_mail= new HttpServiceBddAdminBase<Interfaces.Imail>( {bdd: conf.bdd , collectionName:'mails', entity:Index.Entity_mail , debug:conf.debug} )  ;

		
		 
		this.mail_sendgrid= new HttpServiceBddBase<Interfaces.Imail_sendgrid>({bdd: conf.bdd , collectionName:'mails',  entity:Index.Entity_mail_sendgrid , _class:'mail_sendgrid' , debug:conf.debug ,  collections:this })  ;
		this.admin_mail_sendgrid= new HttpServiceBddAdminBase<Interfaces.Imail_sendgrid>({bdd: conf.bdd , collectionName:'mails',  entity:Index.Entity_mail_sendgrid , _class:'mail_sendgrid' , debug:conf.debug})  ;

		 
	

		this.service_serviceOrchestrator= new HttpServiceBddBase<Interfaces.Iservice_serviceOrchestrator>( {bdd: conf.bdd , collectionName:'service_serviceorchestrators', entity:Index.Entity_service_serviceOrchestrator , debug:conf.debug ,  collections:this }  )  ;
		this.admin_service_serviceOrchestrator= new HttpServiceBddAdminBase<Interfaces.Iservice_serviceOrchestrator>( {bdd: conf.bdd , collectionName:'service_serviceorchestrators', entity:Index.Entity_service_serviceOrchestrator , debug:conf.debug} )  ;

		
	

		this._view= new HttpServiceBddBase<Interfaces.I_view>( {bdd: conf.bdd , collectionName:'_views', entity:Index.Entity__view , debug:conf.debug ,  collections:this }  )  ;
		this.admin__view= new HttpServiceBddAdminBase<Interfaces.I_view>( {bdd: conf.bdd , collectionName:'_views', entity:Index.Entity__view , debug:conf.debug} )  ;

		
		 
		this._view_params= new HttpServiceBddBase<Interfaces.I_view_params>({bdd: conf.bdd , collectionName:'_views',  entity:Index.Entity__view_params , _class:'_view_params' , debug:conf.debug ,  collections:this })  ;
		this.admin__view_params= new HttpServiceBddAdminBase<Interfaces.I_view_params>({bdd: conf.bdd , collectionName:'_views',  entity:Index.Entity__view_params , _class:'_view_params' , debug:conf.debug})  ;

		 
	

		this.licence= new HttpServiceBddBase<Interfaces.Ilicence>( {bdd: conf.bdd , collectionName:'licences', entity:Index.Entity_licence , debug:conf.debug ,  collections:this }  )  ;
		this.admin_licence= new HttpServiceBddAdminBase<Interfaces.Ilicence>( {bdd: conf.bdd , collectionName:'licences', entity:Index.Entity_licence , debug:conf.debug} )  ;

		
		 
		this.licence_temporelle= new HttpServiceBddBase<Interfaces.Ilicence_temporelle>({bdd: conf.bdd , collectionName:'licences',  entity:Index.Entity_licence_temporelle , _class:'licence_temporelle' , debug:conf.debug ,  collections:this })  ;
		this.admin_licence_temporelle= new HttpServiceBddAdminBase<Interfaces.Ilicence_temporelle>({bdd: conf.bdd , collectionName:'licences',  entity:Index.Entity_licence_temporelle , _class:'licence_temporelle' , debug:conf.debug})  ;

		 
	

		this.MultilangSendGridTemplate= new HttpServiceBddBase<Interfaces.IMultilangSendGridTemplate>( {bdd: conf.bdd , collectionName:'multilangsendgridtemplates', entity:Index.Entity_MultilangSendGridTemplate , debug:conf.debug ,  collections:this }  )  ;
		this.admin_MultilangSendGridTemplate= new HttpServiceBddAdminBase<Interfaces.IMultilangSendGridTemplate>( {bdd: conf.bdd , collectionName:'multilangsendgridtemplates', entity:Index.Entity_MultilangSendGridTemplate , debug:conf.debug} )  ;

		
	

		this.application= new HttpServiceBddBase<Interfaces.Iapplication>( {bdd: conf.bdd , collectionName:'applications', entity:Index.Entity_application , debug:conf.debug ,  collections:this }  )  ;
		this.admin_application= new HttpServiceBddAdminBase<Interfaces.Iapplication>( {bdd: conf.bdd , collectionName:'applications', entity:Index.Entity_application , debug:conf.debug} )  ;

		
		 
		this.pack_card= new HttpServiceBddBase<Interfaces.Ipack_card>({bdd: conf.bdd , collectionName:'applications',  entity:Index.Entity_pack_card , _class:'pack_card' , debug:conf.debug ,  collections:this })  ;
		this.admin_pack_card= new HttpServiceBddAdminBase<Interfaces.Ipack_card>({bdd: conf.bdd , collectionName:'applications',  entity:Index.Entity_pack_card , _class:'pack_card' , debug:conf.debug})  ;

		 
	

		this.TemplateLodash= new HttpServiceBddBase<Interfaces.ITemplateLodash>( {bdd: conf.bdd , collectionName:'templatelodashes', entity:Index.Entity_TemplateLodash , debug:conf.debug ,  collections:this }  )  ;
		this.admin_TemplateLodash= new HttpServiceBddAdminBase<Interfaces.ITemplateLodash>( {bdd: conf.bdd , collectionName:'templatelodashes', entity:Index.Entity_TemplateLodash , debug:conf.debug} )  ;

		
	

		this.end_client= new HttpServiceBddBase<Interfaces.Iend_client>( {bdd: conf.bdd , collectionName:'end_clients', entity:Index.Entity_end_client , debug:conf.debug ,  collections:this }  )  ;
		this.admin_end_client= new HttpServiceBddAdminBase<Interfaces.Iend_client>( {bdd: conf.bdd , collectionName:'end_clients', entity:Index.Entity_end_client , debug:conf.debug} )  ;

		
	

		this.Request= new HttpServiceBddBase<Interfaces.IRequest>( {bdd: conf.bdd , collectionName:'requests', entity:Index.Entity_Request , debug:conf.debug ,  collections:this }  )  ;
		this.admin_Request= new HttpServiceBddAdminBase<Interfaces.IRequest>( {bdd: conf.bdd , collectionName:'requests', entity:Index.Entity_Request , debug:conf.debug} )  ;

		
	

		this.ftpsConfig= new HttpServiceBddBase<Interfaces.IftpsConfig>( {bdd: conf.bdd , collectionName:'ftpsconfigs', entity:Index.Entity_ftpsConfig , debug:conf.debug ,  collections:this }  )  ;
		this.admin_ftpsConfig= new HttpServiceBddAdminBase<Interfaces.IftpsConfig>( {bdd: conf.bdd , collectionName:'ftpsconfigs', entity:Index.Entity_ftpsConfig , debug:conf.debug} )  ;

		
	

		this.application_configuration= new HttpServiceBddBase<Interfaces.Iapplication_configuration>( {bdd: conf.bdd , collectionName:'application_configurations', entity:Index.Entity_application_configuration , debug:conf.debug ,  collections:this }  )  ;
		this.admin_application_configuration= new HttpServiceBddAdminBase<Interfaces.Iapplication_configuration>( {bdd: conf.bdd , collectionName:'application_configurations', entity:Index.Entity_application_configuration , debug:conf.debug} )  ;

		
		 
		this.application_configuration_phoneCard= new HttpServiceBddBase<Interfaces.Iapplication_configuration_phoneCard>({bdd: conf.bdd , collectionName:'application_configurations',  entity:Index.Entity_application_configuration_phoneCard , _class:'application_configuration_phoneCard' , debug:conf.debug ,  collections:this })  ;
		this.admin_application_configuration_phoneCard= new HttpServiceBddAdminBase<Interfaces.Iapplication_configuration_phoneCard>({bdd: conf.bdd , collectionName:'application_configurations',  entity:Index.Entity_application_configuration_phoneCard , _class:'application_configuration_phoneCard' , debug:conf.debug})  ;

		 
		 
		this.application_configuration_appCoach= new HttpServiceBddBase<Interfaces.Iapplication_configuration_appCoach>({bdd: conf.bdd , collectionName:'application_configurations',  entity:Index.Entity_application_configuration_appCoach , _class:'application_configuration_appCoach' , debug:conf.debug ,  collections:this })  ;
		this.admin_application_configuration_appCoach= new HttpServiceBddAdminBase<Interfaces.Iapplication_configuration_appCoach>({bdd: conf.bdd , collectionName:'application_configurations',  entity:Index.Entity_application_configuration_appCoach , _class:'application_configuration_appCoach' , debug:conf.debug})  ;

		 
		 
		this.application_configuration_super_admin_mongo= new HttpServiceBddBase<Interfaces.Iapplication_configuration_super_admin_mongo>({bdd: conf.bdd , collectionName:'application_configurations',  entity:Index.Entity_application_configuration_super_admin_mongo , _class:'application_configuration_super_admin_mongo' , debug:conf.debug ,  collections:this })  ;
		this.admin_application_configuration_super_admin_mongo= new HttpServiceBddAdminBase<Interfaces.Iapplication_configuration_super_admin_mongo>({bdd: conf.bdd , collectionName:'application_configurations',  entity:Index.Entity_application_configuration_super_admin_mongo , _class:'application_configuration_super_admin_mongo' , debug:conf.debug})  ;

		 
		 
		this.application_configuration_antico= new HttpServiceBddBase<Interfaces.Iapplication_configuration_antico>({bdd: conf.bdd , collectionName:'application_configurations',  entity:Index.Entity_application_configuration_antico , _class:'application_configuration_antico' , debug:conf.debug ,  collections:this })  ;
		this.admin_application_configuration_antico= new HttpServiceBddAdminBase<Interfaces.Iapplication_configuration_antico>({bdd: conf.bdd , collectionName:'application_configurations',  entity:Index.Entity_application_configuration_antico , _class:'application_configuration_antico' , debug:conf.debug})  ;

		 
		 
		this.application_configuration_appClient= new HttpServiceBddBase<Interfaces.Iapplication_configuration_appClient>({bdd: conf.bdd , collectionName:'application_configurations',  entity:Index.Entity_application_configuration_appClient , _class:'application_configuration_appClient' , debug:conf.debug ,  collections:this })  ;
		this.admin_application_configuration_appClient= new HttpServiceBddAdminBase<Interfaces.Iapplication_configuration_appClient>({bdd: conf.bdd , collectionName:'application_configurations',  entity:Index.Entity_application_configuration_appClient , _class:'application_configuration_appClient' , debug:conf.debug})  ;

		 
		 
		this.application_configuration_appApprenant= new HttpServiceBddBase<Interfaces.Iapplication_configuration_appApprenant>({bdd: conf.bdd , collectionName:'application_configurations',  entity:Index.Entity_application_configuration_appApprenant , _class:'application_configuration_appApprenant' , debug:conf.debug ,  collections:this })  ;
		this.admin_application_configuration_appApprenant= new HttpServiceBddAdminBase<Interfaces.Iapplication_configuration_appApprenant>({bdd: conf.bdd , collectionName:'application_configurations',  entity:Index.Entity_application_configuration_appApprenant , _class:'application_configuration_appApprenant' , debug:conf.debug})  ;

		 
		 
		this.AppConf_minds_up_admin= new HttpServiceBddBase<Interfaces.IAppConf_minds_up_admin>({bdd: conf.bdd , collectionName:'application_configurations',  entity:Index.Entity_AppConf_minds_up_admin , _class:'AppConf_minds_up_admin' , debug:conf.debug ,  collections:this })  ;
		this.admin_AppConf_minds_up_admin= new HttpServiceBddAdminBase<Interfaces.IAppConf_minds_up_admin>({bdd: conf.bdd , collectionName:'application_configurations',  entity:Index.Entity_AppConf_minds_up_admin , _class:'AppConf_minds_up_admin' , debug:conf.debug})  ;

		 
		 
		this.application_configuration_reportApp= new HttpServiceBddBase<Interfaces.Iapplication_configuration_reportApp>({bdd: conf.bdd , collectionName:'application_configurations',  entity:Index.Entity_application_configuration_reportApp , _class:'application_configuration_reportApp' , debug:conf.debug ,  collections:this })  ;
		this.admin_application_configuration_reportApp= new HttpServiceBddAdminBase<Interfaces.Iapplication_configuration_reportApp>({bdd: conf.bdd , collectionName:'application_configurations',  entity:Index.Entity_application_configuration_reportApp , _class:'application_configuration_reportApp' , debug:conf.debug})  ;

		 
		 
		this.application_configuration_celio2020Admin= new HttpServiceBddBase<Interfaces.Iapplication_configuration_celio2020Admin>({bdd: conf.bdd , collectionName:'application_configurations',  entity:Index.Entity_application_configuration_celio2020Admin , _class:'application_configuration_celio2020Admin' , debug:conf.debug ,  collections:this })  ;
		this.admin_application_configuration_celio2020Admin= new HttpServiceBddAdminBase<Interfaces.Iapplication_configuration_celio2020Admin>({bdd: conf.bdd , collectionName:'application_configurations',  entity:Index.Entity_application_configuration_celio2020Admin , _class:'application_configuration_celio2020Admin' , debug:conf.debug})  ;

		 
		 
		this.application_configuration_manu_admin= new HttpServiceBddBase<Interfaces.Iapplication_configuration_manu_admin>({bdd: conf.bdd , collectionName:'application_configurations',  entity:Index.Entity_application_configuration_manu_admin , _class:'application_configuration_manu_admin' , debug:conf.debug ,  collections:this })  ;
		this.admin_application_configuration_manu_admin= new HttpServiceBddAdminBase<Interfaces.Iapplication_configuration_manu_admin>({bdd: conf.bdd , collectionName:'application_configurations',  entity:Index.Entity_application_configuration_manu_admin , _class:'application_configuration_manu_admin' , debug:conf.debug})  ;

		 
		 
		this.application_configuration_comptoire_or_admin= new HttpServiceBddBase<Interfaces.Iapplication_configuration_comptoire_or_admin>({bdd: conf.bdd , collectionName:'application_configurations',  entity:Index.Entity_application_configuration_comptoire_or_admin , _class:'application_configuration_comptoire_or_admin' , debug:conf.debug ,  collections:this })  ;
		this.admin_application_configuration_comptoire_or_admin= new HttpServiceBddAdminBase<Interfaces.Iapplication_configuration_comptoire_or_admin>({bdd: conf.bdd , collectionName:'application_configurations',  entity:Index.Entity_application_configuration_comptoire_or_admin , _class:'application_configuration_comptoire_or_admin' , debug:conf.debug})  ;

		 
		 
		this.application_configuration_celiofront= new HttpServiceBddBase<Interfaces.Iapplication_configuration_celiofront>({bdd: conf.bdd , collectionName:'application_configurations',  entity:Index.Entity_application_configuration_celiofront , _class:'application_configuration_celiofront' , debug:conf.debug ,  collections:this })  ;
		this.admin_application_configuration_celiofront= new HttpServiceBddAdminBase<Interfaces.Iapplication_configuration_celiofront>({bdd: conf.bdd , collectionName:'application_configurations',  entity:Index.Entity_application_configuration_celiofront , _class:'application_configuration_celiofront' , debug:conf.debug})  ;

		 
		 
		this.application_configuration_celioback= new HttpServiceBddBase<Interfaces.Iapplication_configuration_celioback>({bdd: conf.bdd , collectionName:'application_configurations',  entity:Index.Entity_application_configuration_celioback , _class:'application_configuration_celioback' , debug:conf.debug ,  collections:this })  ;
		this.admin_application_configuration_celioback= new HttpServiceBddAdminBase<Interfaces.Iapplication_configuration_celioback>({bdd: conf.bdd , collectionName:'application_configurations',  entity:Index.Entity_application_configuration_celioback , _class:'application_configuration_celioback' , debug:conf.debug})  ;

		 
		 
		this.application_configuration_celioadmin= new HttpServiceBddBase<Interfaces.Iapplication_configuration_celioadmin>({bdd: conf.bdd , collectionName:'application_configurations',  entity:Index.Entity_application_configuration_celioadmin , _class:'application_configuration_celioadmin' , debug:conf.debug ,  collections:this })  ;
		this.admin_application_configuration_celioadmin= new HttpServiceBddAdminBase<Interfaces.Iapplication_configuration_celioadmin>({bdd: conf.bdd , collectionName:'application_configurations',  entity:Index.Entity_application_configuration_celioadmin , _class:'application_configuration_celioadmin' , debug:conf.debug})  ;

		 
		 
		this.application_configuration_ferrand= new HttpServiceBddBase<Interfaces.Iapplication_configuration_ferrand>({bdd: conf.bdd , collectionName:'application_configurations',  entity:Index.Entity_application_configuration_ferrand , _class:'application_configuration_ferrand' , debug:conf.debug ,  collections:this })  ;
		this.admin_application_configuration_ferrand= new HttpServiceBddAdminBase<Interfaces.Iapplication_configuration_ferrand>({bdd: conf.bdd , collectionName:'application_configurations',  entity:Index.Entity_application_configuration_ferrand , _class:'application_configuration_ferrand' , debug:conf.debug})  ;

		 
		 
		this.application_configuration_celio= new HttpServiceBddBase<Interfaces.Iapplication_configuration_celio>({bdd: conf.bdd , collectionName:'application_configurations',  entity:Index.Entity_application_configuration_celio , _class:'application_configuration_celio' , debug:conf.debug ,  collections:this })  ;
		this.admin_application_configuration_celio= new HttpServiceBddAdminBase<Interfaces.Iapplication_configuration_celio>({bdd: conf.bdd , collectionName:'application_configurations',  entity:Index.Entity_application_configuration_celio , _class:'application_configuration_celio' , debug:conf.debug})  ;

		 
		 
		this.AppConf_minds_up= new HttpServiceBddBase<Interfaces.IAppConf_minds_up>({bdd: conf.bdd , collectionName:'application_configurations',  entity:Index.Entity_AppConf_minds_up , _class:'AppConf_minds_up' , debug:conf.debug ,  collections:this })  ;
		this.admin_AppConf_minds_up= new HttpServiceBddAdminBase<Interfaces.IAppConf_minds_up>({bdd: conf.bdd , collectionName:'application_configurations',  entity:Index.Entity_AppConf_minds_up , _class:'AppConf_minds_up' , debug:conf.debug})  ;

		 
		 
		this.application_configuration_petit_moulin= new HttpServiceBddBase<Interfaces.Iapplication_configuration_petit_moulin>({bdd: conf.bdd , collectionName:'application_configurations',  entity:Index.Entity_application_configuration_petit_moulin , _class:'application_configuration_petit_moulin' , debug:conf.debug ,  collections:this })  ;
		this.admin_application_configuration_petit_moulin= new HttpServiceBddAdminBase<Interfaces.Iapplication_configuration_petit_moulin>({bdd: conf.bdd , collectionName:'application_configurations',  entity:Index.Entity_application_configuration_petit_moulin , _class:'application_configuration_petit_moulin' , debug:conf.debug})  ;

		 
		 
		this.application_configuration_petit_moulin_admin= new HttpServiceBddBase<Interfaces.Iapplication_configuration_petit_moulin_admin>({bdd: conf.bdd , collectionName:'application_configurations',  entity:Index.Entity_application_configuration_petit_moulin_admin , _class:'application_configuration_petit_moulin_admin' , debug:conf.debug ,  collections:this })  ;
		this.admin_application_configuration_petit_moulin_admin= new HttpServiceBddAdminBase<Interfaces.Iapplication_configuration_petit_moulin_admin>({bdd: conf.bdd , collectionName:'application_configurations',  entity:Index.Entity_application_configuration_petit_moulin_admin , _class:'application_configuration_petit_moulin_admin' , debug:conf.debug})  ;

		 
		 
		this.application_configuration_qbp= new HttpServiceBddBase<Interfaces.Iapplication_configuration_qbp>({bdd: conf.bdd , collectionName:'application_configurations',  entity:Index.Entity_application_configuration_qbp , _class:'application_configuration_qbp' , debug:conf.debug ,  collections:this })  ;
		this.admin_application_configuration_qbp= new HttpServiceBddAdminBase<Interfaces.Iapplication_configuration_qbp>({bdd: conf.bdd , collectionName:'application_configurations',  entity:Index.Entity_application_configuration_qbp , _class:'application_configuration_qbp' , debug:conf.debug})  ;

		 
		 
		this.application_configuration_qbp_admin_seller= new HttpServiceBddBase<Interfaces.Iapplication_configuration_qbp_admin_seller>({bdd: conf.bdd , collectionName:'application_configurations',  entity:Index.Entity_application_configuration_qbp_admin_seller , _class:'application_configuration_qbp_admin_seller' , debug:conf.debug ,  collections:this })  ;
		this.admin_application_configuration_qbp_admin_seller= new HttpServiceBddAdminBase<Interfaces.Iapplication_configuration_qbp_admin_seller>({bdd: conf.bdd , collectionName:'application_configurations',  entity:Index.Entity_application_configuration_qbp_admin_seller , _class:'application_configuration_qbp_admin_seller' , debug:conf.debug})  ;

		 
		 
		this.application_configuration_qbp_admin= new HttpServiceBddBase<Interfaces.Iapplication_configuration_qbp_admin>({bdd: conf.bdd , collectionName:'application_configurations',  entity:Index.Entity_application_configuration_qbp_admin , _class:'application_configuration_qbp_admin' , debug:conf.debug ,  collections:this })  ;
		this.admin_application_configuration_qbp_admin= new HttpServiceBddAdminBase<Interfaces.Iapplication_configuration_qbp_admin>({bdd: conf.bdd , collectionName:'application_configurations',  entity:Index.Entity_application_configuration_qbp_admin , _class:'application_configuration_qbp_admin' , debug:conf.debug})  ;

		 
	

		this.application_instance= new HttpServiceBddBase<Interfaces.Iapplication_instance>( {bdd: conf.bdd , collectionName:'application_instances', entity:Index.Entity_application_instance , debug:conf.debug ,  collections:this }  )  ;
		this.admin_application_instance= new HttpServiceBddAdminBase<Interfaces.Iapplication_instance>( {bdd: conf.bdd , collectionName:'application_instances', entity:Index.Entity_application_instance , debug:conf.debug} )  ;

		
	

		this.service= new HttpServiceBddBase<Interfaces.Iservice>( {bdd: conf.bdd , collectionName:'services', entity:Index.Entity_service , debug:conf.debug ,  collections:this }  )  ;
		this.admin_service= new HttpServiceBddAdminBase<Interfaces.Iservice>( {bdd: conf.bdd , collectionName:'services', entity:Index.Entity_service , debug:conf.debug} )  ;

		
		 
		this.service_sso= new HttpServiceBddBase<Interfaces.Iservice_sso>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_sso , _class:'service_sso' , debug:conf.debug ,  collections:this })  ;
		this.admin_service_sso= new HttpServiceBddAdminBase<Interfaces.Iservice_sso>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_sso , _class:'service_sso' , debug:conf.debug})  ;

		 
		 
		this.service_init= new HttpServiceBddBase<Interfaces.Iservice_init>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_init , _class:'service_init' , debug:conf.debug ,  collections:this })  ;
		this.admin_service_init= new HttpServiceBddAdminBase<Interfaces.Iservice_init>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_init , _class:'service_init' , debug:conf.debug})  ;

		 
		 
		this.service_mailtoinfra= new HttpServiceBddBase<Interfaces.Iservice_mailtoinfra>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_mailtoinfra , _class:'service_mailtoinfra' , debug:conf.debug ,  collections:this })  ;
		this.admin_service_mailtoinfra= new HttpServiceBddAdminBase<Interfaces.Iservice_mailtoinfra>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_mailtoinfra , _class:'service_mailtoinfra' , debug:conf.debug})  ;

		 
		 
		this.service_licence_token= new HttpServiceBddBase<Interfaces.Iservice_licence_token>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_licence_token , _class:'service_licence_token' , debug:conf.debug ,  collections:this })  ;
		this.admin_service_licence_token= new HttpServiceBddAdminBase<Interfaces.Iservice_licence_token>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_licence_token , _class:'service_licence_token' , debug:conf.debug})  ;

		 
		 
		this.service_goshabaGateway= new HttpServiceBddBase<Interfaces.Iservice_goshabaGateway>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_goshabaGateway , _class:'service_goshabaGateway' , debug:conf.debug ,  collections:this })  ;
		this.admin_service_goshabaGateway= new HttpServiceBddAdminBase<Interfaces.Iservice_goshabaGateway>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_goshabaGateway , _class:'service_goshabaGateway' , debug:conf.debug})  ;

		 
		 
		this.service_socketIo= new HttpServiceBddBase<Interfaces.Iservice_socketIo>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_socketIo , _class:'service_socketIo' , debug:conf.debug ,  collections:this })  ;
		this.admin_service_socketIo= new HttpServiceBddAdminBase<Interfaces.Iservice_socketIo>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_socketIo , _class:'service_socketIo' , debug:conf.debug})  ;

		 
		 
		this.service_supervision= new HttpServiceBddBase<Interfaces.Iservice_supervision>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_supervision , _class:'service_supervision' , debug:conf.debug ,  collections:this })  ;
		this.admin_service_supervision= new HttpServiceBddAdminBase<Interfaces.Iservice_supervision>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_supervision , _class:'service_supervision' , debug:conf.debug})  ;

		 
		 
		this.service_configuration= new HttpServiceBddBase<Interfaces.Iservice_configuration>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_configuration , _class:'service_configuration' , debug:conf.debug ,  collections:this })  ;
		this.admin_service_configuration= new HttpServiceBddAdminBase<Interfaces.Iservice_configuration>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_configuration , _class:'service_configuration' , debug:conf.debug})  ;

		 
		 
		this.service_nginxConfigurator= new HttpServiceBddBase<Interfaces.Iservice_nginxConfigurator>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_nginxConfigurator , _class:'service_nginxConfigurator' , debug:conf.debug ,  collections:this })  ;
		this.admin_service_nginxConfigurator= new HttpServiceBddAdminBase<Interfaces.Iservice_nginxConfigurator>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_nginxConfigurator , _class:'service_nginxConfigurator' , debug:conf.debug})  ;

		 
		 
		this.service_push_notification= new HttpServiceBddBase<Interfaces.Iservice_push_notification>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_push_notification , _class:'service_push_notification' , debug:conf.debug ,  collections:this })  ;
		this.admin_service_push_notification= new HttpServiceBddAdminBase<Interfaces.Iservice_push_notification>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_push_notification , _class:'service_push_notification' , debug:conf.debug})  ;

		 
		 
		this.service_like= new HttpServiceBddBase<Interfaces.Iservice_like>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_like , _class:'service_like' , debug:conf.debug ,  collections:this })  ;
		this.admin_service_like= new HttpServiceBddAdminBase<Interfaces.Iservice_like>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_like , _class:'service_like' , debug:conf.debug})  ;

		 
		 
		this.service_dumy_fso= new HttpServiceBddBase<Interfaces.Iservice_dumy_fso>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_dumy_fso , _class:'service_dumy_fso' , debug:conf.debug ,  collections:this })  ;
		this.admin_service_dumy_fso= new HttpServiceBddAdminBase<Interfaces.Iservice_dumy_fso>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_dumy_fso , _class:'service_dumy_fso' , debug:conf.debug})  ;

		 
		 
		this.service_sendGrid= new HttpServiceBddBase<Interfaces.Iservice_sendGrid>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_sendGrid , _class:'service_sendGrid' , debug:conf.debug ,  collections:this })  ;
		this.admin_service_sendGrid= new HttpServiceBddAdminBase<Interfaces.Iservice_sendGrid>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_sendGrid , _class:'service_sendGrid' , debug:conf.debug})  ;

		 
		 
		this.service_trainingCoursesService= new HttpServiceBddBase<Interfaces.Iservice_trainingCoursesService>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_trainingCoursesService , _class:'service_trainingCoursesService' , debug:conf.debug ,  collections:this })  ;
		this.admin_service_trainingCoursesService= new HttpServiceBddAdminBase<Interfaces.Iservice_trainingCoursesService>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_trainingCoursesService , _class:'service_trainingCoursesService' , debug:conf.debug})  ;

		 
		 
		this.service_orchestrator= new HttpServiceBddBase<Interfaces.Iservice_orchestrator>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_orchestrator , _class:'service_orchestrator' , debug:conf.debug ,  collections:this })  ;
		this.admin_service_orchestrator= new HttpServiceBddAdminBase<Interfaces.Iservice_orchestrator>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_orchestrator , _class:'service_orchestrator' , debug:conf.debug})  ;

		 
		 
		this.service_socket_io= new HttpServiceBddBase<Interfaces.Iservice_socket_io>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_socket_io , _class:'service_socket_io' , debug:conf.debug ,  collections:this })  ;
		this.admin_service_socket_io= new HttpServiceBddAdminBase<Interfaces.Iservice_socket_io>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_socket_io , _class:'service_socket_io' , debug:conf.debug})  ;

		 
		 
		this.service_tutor= new HttpServiceBddBase<Interfaces.Iservice_tutor>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_tutor , _class:'service_tutor' , debug:conf.debug ,  collections:this })  ;
		this.admin_service_tutor= new HttpServiceBddAdminBase<Interfaces.Iservice_tutor>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_tutor , _class:'service_tutor' , debug:conf.debug})  ;

		 
		 
		this.service_init_js= new HttpServiceBddBase<Interfaces.Iservice_init_js>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_init_js , _class:'service_init_js' , debug:conf.debug ,  collections:this })  ;
		this.admin_service_init_js= new HttpServiceBddAdminBase<Interfaces.Iservice_init_js>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_init_js , _class:'service_init_js' , debug:conf.debug})  ;

		 
		 
		this.service_infra_admin= new HttpServiceBddBase<Interfaces.Iservice_infra_admin>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_infra_admin , _class:'service_infra_admin' , debug:conf.debug ,  collections:this })  ;
		this.admin_service_infra_admin= new HttpServiceBddAdminBase<Interfaces.Iservice_infra_admin>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_infra_admin , _class:'service_infra_admin' , debug:conf.debug})  ;

		 
		 
		this.mailtoinfra2= new HttpServiceBddBase<Interfaces.Imailtoinfra2>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_mailtoinfra2 , _class:'mailtoinfra2' , debug:conf.debug ,  collections:this })  ;
		this.admin_mailtoinfra2= new HttpServiceBddAdminBase<Interfaces.Imailtoinfra2>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_mailtoinfra2 , _class:'mailtoinfra2' , debug:conf.debug})  ;

		 
		 
		this.service_planned_tasks= new HttpServiceBddBase<Interfaces.Iservice_planned_tasks>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_planned_tasks , _class:'service_planned_tasks' , debug:conf.debug ,  collections:this })  ;
		this.admin_service_planned_tasks= new HttpServiceBddAdminBase<Interfaces.Iservice_planned_tasks>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_planned_tasks , _class:'service_planned_tasks' , debug:conf.debug})  ;

		 
		 
		this.Service_scorm_gateway= new HttpServiceBddBase<Interfaces.IService_scorm_gateway>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_Service_scorm_gateway , _class:'Service_scorm_gateway' , debug:conf.debug ,  collections:this })  ;
		this.admin_Service_scorm_gateway= new HttpServiceBddAdminBase<Interfaces.IService_scorm_gateway>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_Service_scorm_gateway , _class:'Service_scorm_gateway' , debug:conf.debug})  ;

		 
		 
		this.service_nginxMultiConfigurator= new HttpServiceBddBase<Interfaces.Iservice_nginxMultiConfigurator>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_nginxMultiConfigurator , _class:'service_nginxMultiConfigurator' , debug:conf.debug ,  collections:this })  ;
		this.admin_service_nginxMultiConfigurator= new HttpServiceBddAdminBase<Interfaces.Iservice_nginxMultiConfigurator>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_nginxMultiConfigurator , _class:'service_nginxMultiConfigurator' , debug:conf.debug})  ;

		 
		 
		this.service_client_ftp= new HttpServiceBddBase<Interfaces.Iservice_client_ftp>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_client_ftp , _class:'service_client_ftp' , debug:conf.debug ,  collections:this })  ;
		this.admin_service_client_ftp= new HttpServiceBddAdminBase<Interfaces.Iservice_client_ftp>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_client_ftp , _class:'service_client_ftp' , debug:conf.debug})  ;

		 
		 
		this.service_polo_celio= new HttpServiceBddBase<Interfaces.Iservice_polo_celio>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_polo_celio , _class:'service_polo_celio' , debug:conf.debug ,  collections:this })  ;
		this.admin_service_polo_celio= new HttpServiceBddAdminBase<Interfaces.Iservice_polo_celio>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_polo_celio , _class:'service_polo_celio' , debug:conf.debug})  ;

		 
		 
		this.service_fso= new HttpServiceBddBase<Interfaces.Iservice_fso>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_fso , _class:'service_fso' , debug:conf.debug ,  collections:this })  ;
		this.admin_service_fso= new HttpServiceBddAdminBase<Interfaces.Iservice_fso>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_fso , _class:'service_fso' , debug:conf.debug})  ;

		 
		 
		this.service_pdfrip= new HttpServiceBddBase<Interfaces.Iservice_pdfrip>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_pdfrip , _class:'service_pdfrip' , debug:conf.debug ,  collections:this })  ;
		this.admin_service_pdfrip= new HttpServiceBddAdminBase<Interfaces.Iservice_pdfrip>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_pdfrip , _class:'service_pdfrip' , debug:conf.debug})  ;

		 
		 
		this.service_signin= new HttpServiceBddBase<Interfaces.Iservice_signin>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_signin , _class:'service_signin' , debug:conf.debug ,  collections:this })  ;
		this.admin_service_signin= new HttpServiceBddAdminBase<Interfaces.Iservice_signin>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_signin , _class:'service_signin' , debug:conf.debug})  ;

		 
		 
		this.service_mindsUp= new HttpServiceBddBase<Interfaces.Iservice_mindsUp>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_mindsUp , _class:'service_mindsUp' , debug:conf.debug ,  collections:this })  ;
		this.admin_service_mindsUp= new HttpServiceBddAdminBase<Interfaces.Iservice_mindsUp>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_mindsUp , _class:'service_mindsUp' , debug:conf.debug})  ;

		 
		 
		this.service_webAppConf= new HttpServiceBddBase<Interfaces.Iservice_webAppConf>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_webAppConf , _class:'service_webAppConf' , debug:conf.debug ,  collections:this })  ;
		this.admin_service_webAppConf= new HttpServiceBddAdminBase<Interfaces.Iservice_webAppConf>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_webAppConf , _class:'service_webAppConf' , debug:conf.debug})  ;

		 
		 
		this.swagger_conv= new HttpServiceBddBase<Interfaces.Iswagger_conv>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_swagger_conv , _class:'swagger_conv' , debug:conf.debug ,  collections:this })  ;
		this.admin_swagger_conv= new HttpServiceBddAdminBase<Interfaces.Iswagger_conv>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_swagger_conv , _class:'swagger_conv' , debug:conf.debug})  ;

		 
		 
		this.service_mongo= new HttpServiceBddBase<Interfaces.Iservice_mongo>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_mongo , _class:'service_mongo' , debug:conf.debug ,  collections:this })  ;
		this.admin_service_mongo= new HttpServiceBddAdminBase<Interfaces.Iservice_mongo>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_mongo , _class:'service_mongo' , debug:conf.debug})  ;

		 
		 
		this.service_celio_qcm_admin= new HttpServiceBddBase<Interfaces.Iservice_celio_qcm_admin>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_celio_qcm_admin , _class:'service_celio_qcm_admin' , debug:conf.debug ,  collections:this })  ;
		this.admin_service_celio_qcm_admin= new HttpServiceBddAdminBase<Interfaces.Iservice_celio_qcm_admin>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_celio_qcm_admin , _class:'service_celio_qcm_admin' , debug:conf.debug})  ;

		 
		 
		this.service_ferrand= new HttpServiceBddBase<Interfaces.Iservice_ferrand>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_ferrand , _class:'service_ferrand' , debug:conf.debug ,  collections:this })  ;
		this.admin_service_ferrand= new HttpServiceBddAdminBase<Interfaces.Iservice_ferrand>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_ferrand , _class:'service_ferrand' , debug:conf.debug})  ;

		 
		 
		this.service_petit_moulin= new HttpServiceBddBase<Interfaces.Iservice_petit_moulin>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_petit_moulin , _class:'service_petit_moulin' , debug:conf.debug ,  collections:this })  ;
		this.admin_service_petit_moulin= new HttpServiceBddAdminBase<Interfaces.Iservice_petit_moulin>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_petit_moulin , _class:'service_petit_moulin' , debug:conf.debug})  ;

		 
		 
		this.service_celio_fid= new HttpServiceBddBase<Interfaces.Iservice_celio_fid>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_celio_fid , _class:'service_celio_fid' , debug:conf.debug ,  collections:this })  ;
		this.admin_service_celio_fid= new HttpServiceBddAdminBase<Interfaces.Iservice_celio_fid>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_celio_fid , _class:'service_celio_fid' , debug:conf.debug})  ;

		 
		 
		this.service_celio_qcm= new HttpServiceBddBase<Interfaces.Iservice_celio_qcm>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_celio_qcm , _class:'service_celio_qcm' , debug:conf.debug ,  collections:this })  ;
		this.admin_service_celio_qcm= new HttpServiceBddAdminBase<Interfaces.Iservice_celio_qcm>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_celio_qcm , _class:'service_celio_qcm' , debug:conf.debug})  ;

		 
		 
		this.service_comptoireOr= new HttpServiceBddBase<Interfaces.Iservice_comptoireOr>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_comptoireOr , _class:'service_comptoireOr' , debug:conf.debug ,  collections:this })  ;
		this.admin_service_comptoireOr= new HttpServiceBddAdminBase<Interfaces.Iservice_comptoireOr>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_comptoireOr , _class:'service_comptoireOr' , debug:conf.debug})  ;

		 
		 
		this.service_celio_back_task= new HttpServiceBddBase<Interfaces.Iservice_celio_back_task>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_celio_back_task , _class:'service_celio_back_task' , debug:conf.debug ,  collections:this })  ;
		this.admin_service_celio_back_task= new HttpServiceBddAdminBase<Interfaces.Iservice_celio_back_task>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_celio_back_task , _class:'service_celio_back_task' , debug:conf.debug})  ;

		 
		 
		this.service_celio_fid_admin= new HttpServiceBddBase<Interfaces.Iservice_celio_fid_admin>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_celio_fid_admin , _class:'service_celio_fid_admin' , debug:conf.debug ,  collections:this })  ;
		this.admin_service_celio_fid_admin= new HttpServiceBddAdminBase<Interfaces.Iservice_celio_fid_admin>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_celio_fid_admin , _class:'service_celio_fid_admin' , debug:conf.debug})  ;

		 
		 
		this.service_airport= new HttpServiceBddBase<Interfaces.Iservice_airport>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_airport , _class:'service_airport' , debug:conf.debug ,  collections:this })  ;
		this.admin_service_airport= new HttpServiceBddAdminBase<Interfaces.Iservice_airport>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_service_airport , _class:'service_airport' , debug:conf.debug})  ;

		 
		 
		this.QBP_service= new HttpServiceBddBase<Interfaces.IQBP_service>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_QBP_service , _class:'QBP_service' , debug:conf.debug ,  collections:this })  ;
		this.admin_QBP_service= new HttpServiceBddAdminBase<Interfaces.IQBP_service>({bdd: conf.bdd , collectionName:'services',  entity:Index.Entity_QBP_service , _class:'QBP_service' , debug:conf.debug})  ;

		 
	
	}

  public getHttpService(colName: string): HttpServiceBddBase<IBase>{
      return this[colName] ;
  }

	protected url:string ;
	protected secure: UtilsSecu = null
	
		/**
		 service d'accès à la collection :certificat
		 desc: certificat
		 
		 info: vous pouvez voir tous les objets de cette collection y compris les enfants
		 liste des interfaces héritées possibles:
		 
		 	Irsa      certificat RSA
		 
		 
		*/
		public certificat:HttpServiceBddBase<Interfaces.Icertificat> ;
		public admin_certificat:HttpServiceBddAdminBase<Interfaces.Icertificat> ;

		
		 /**
		 service d'accès a la sous-collection :rsa
		 desc: certificat RSA
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public rsa:HttpServiceBddBase<Interfaces.Irsa> ;
		public admin_rsa:HttpServiceBddAdminBase<Interfaces.Irsa> ;

		 
	
		/**
		 service d'accès à la collection :oidc_Client
		 desc: description d'un client openId (c'est une application)
		 

		 
		*/
		public oidc_Client:HttpServiceBddBase<Interfaces.Ioidc_Client> ;
		public admin_oidc_Client:HttpServiceBddAdminBase<Interfaces.Ioidc_Client> ;

		
	
		/**
		 service d'accès à la collection :oidc_account
		 desc: compte de l'utilisateur
		 

		 
		*/
		public oidc_account:HttpServiceBddBase<Interfaces.Ioidc_account> ;
		public admin_oidc_account:HttpServiceBddAdminBase<Interfaces.Ioidc_account> ;

		
	
		/**
		 service d'accès à la collection :service_access
		 desc: décrit les régles de paramètre des servies
		 

		 
		*/
		public service_access:HttpServiceBddBase<Interfaces.Iservice_access> ;
		public admin_service_access:HttpServiceBddAdminBase<Interfaces.Iservice_access> ;

		
	
		/**
		 service d'accès à la collection :protoschema
		 desc: protoschema est un méta modéle. il permet de créer les autres modèle de la base
		 

		 
		*/
		public protoschema:HttpServiceBddBase<Interfaces.Iprotoschema> ;
		public admin_protoschema:HttpServiceBddAdminBase<Interfaces.Iprotoschema> ;

		
	
		/**
		 service d'accès à la collection :mail
		 desc: collection de mail
		 
		 info: vous pouvez voir tous les objets de cette collection y compris les enfants
		 liste des interfaces héritées possibles:
		 
		 	Imail_sendgrid      objet envoyé a l'api sendgrid 
		 
		 
		*/
		public mail:HttpServiceBddBase<Interfaces.Imail> ;
		public admin_mail:HttpServiceBddAdminBase<Interfaces.Imail> ;

		
		 /**
		 service d'accès a la sous-collection :mail_sendgrid
		 desc: objet envoyé a l'api sendgrid 
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public mail_sendgrid:HttpServiceBddBase<Interfaces.Imail_sendgrid> ;
		public admin_mail_sendgrid:HttpServiceBddAdminBase<Interfaces.Imail_sendgrid> ;

		 
	
		/**
		 service d'accès à la collection :service_serviceOrchestrator
		 desc: service d'orchestration de service. ce service permet de créer des routes qui enchaîne des middleware paramétré qui consomment les autres services
		 

		 
		*/
		public service_serviceOrchestrator:HttpServiceBddBase<Interfaces.Iservice_serviceOrchestrator> ;
		public admin_service_serviceOrchestrator:HttpServiceBddAdminBase<Interfaces.Iservice_serviceOrchestrator> ;

		
	
		/**
		 service d'accès à la collection :_view
		 desc: créer des pipe d'agrégation intérogeable https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline/
		 
		 info: vous pouvez voir tous les objets de cette collection y compris les enfants
		 liste des interfaces héritées possibles:
		 
		 	I_view_params      view avec des params
		 
		 
		*/
		public _view:HttpServiceBddBase<Interfaces.I_view> ;
		public admin__view:HttpServiceBddAdminBase<Interfaces.I_view> ;

		
		 /**
		 service d'accès a la sous-collection :_view_params
		 desc: view avec des params
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public _view_params:HttpServiceBddBase<Interfaces.I_view_params> ;
		public admin__view_params:HttpServiceBddAdminBase<Interfaces.I_view_params> ;

		 
	
		/**
		 service d'accès à la collection :licence
		 desc: représente la licence d'un utilisateur pour un service (ou application) distribué par un end_client
		 
		 info: vous pouvez voir tous les objets de cette collection y compris les enfants
		 liste des interfaces héritées possibles:
		 
		 	Ilicence_temporelle      c'est une licence qui dure un certain temps
		 
		 
		*/
		public licence:HttpServiceBddBase<Interfaces.Ilicence> ;
		public admin_licence:HttpServiceBddAdminBase<Interfaces.Ilicence> ;

		
		 /**
		 service d'accès a la sous-collection :licence_temporelle
		 desc: c'est une licence qui dure un certain temps
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public licence_temporelle:HttpServiceBddBase<Interfaces.Ilicence_temporelle> ;
		public admin_licence_temporelle:HttpServiceBddAdminBase<Interfaces.Ilicence_temporelle> ;

		 
	
		/**
		 service d'accès à la collection :MultilangSendGridTemplate
		 desc: décrit un template multi langue d'envoie de mail avec sendGrid
		 

		 
		*/
		public MultilangSendGridTemplate:HttpServiceBddBase<Interfaces.IMultilangSendGridTemplate> ;
		public admin_MultilangSendGridTemplate:HttpServiceBddAdminBase<Interfaces.IMultilangSendGridTemplate> ;

		
	
		/**
		 service d'accès à la collection :application
		 desc: liste des applications
		 
		 info: vous pouvez voir tous les objets de cette collection y compris les enfants
		 liste des interfaces héritées possibles:
		 
		 	Ipack_card      c'est un paquet de carte
		 
		 
		*/
		public application:HttpServiceBddBase<Interfaces.Iapplication> ;
		public admin_application:HttpServiceBddAdminBase<Interfaces.Iapplication> ;

		
		 /**
		 service d'accès a la sous-collection :pack_card
		 desc: c'est un paquet de carte
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public pack_card:HttpServiceBddBase<Interfaces.Ipack_card> ;
		public admin_pack_card:HttpServiceBddAdminBase<Interfaces.Ipack_card> ;

		 
	
		/**
		 service d'accès à la collection :TemplateLodash
		 desc: template lodash + nom
		 

		 
		*/
		public TemplateLodash:HttpServiceBddBase<Interfaces.ITemplateLodash> ;
		public admin_TemplateLodash:HttpServiceBddAdminBase<Interfaces.ITemplateLodash> ;

		
	
		/**
		 service d'accès à la collection :end_client
		 desc: c'est le client que l'on facture
		 

		 
		*/
		public end_client:HttpServiceBddBase<Interfaces.Iend_client> ;
		public admin_end_client:HttpServiceBddAdminBase<Interfaces.Iend_client> ;

		
	
		/**
		 service d'accès à la collection :Request
		 desc: description d'une requete avec request
		 

		 
		*/
		public Request:HttpServiceBddBase<Interfaces.IRequest> ;
		public admin_Request:HttpServiceBddAdminBase<Interfaces.IRequest> ;

		
	
		/**
		 service d'accès à la collection :ftpsConfig
		 desc: configuration pour un service sftp
		 

		 
		*/
		public ftpsConfig:HttpServiceBddBase<Interfaces.IftpsConfig> ;
		public admin_ftpsConfig:HttpServiceBddAdminBase<Interfaces.IftpsConfig> ;

		
	
		/**
		 service d'accès à la collection :application_configuration
		 desc: c'est la configuration d'une application
		 
		 info: vous pouvez voir tous les objets de cette collection y compris les enfants
		 liste des interfaces héritées possibles:
		 
		 	Iapplication_configuration_phoneCard      configuration d'une application phoneCard
		 
		 	Iapplication_configuration_appCoach      c'est la configuration d'une application Coach
		 
		 	Iapplication_configuration_super_admin_mongo      configuration de l'application superAdminMongo
		 
		 	Iapplication_configuration_antico      configuration d'un parcourt anticoruption
		 
		 	Iapplication_configuration_appClient      c'est la configuration d'une application Client
		 
		 	Iapplication_configuration_appApprenant      c'est la configuration d'une application Apprenant
		 
		 	IAppConf_minds_up_admin      config de l'app minds up admin
		 
		 	Iapplication_configuration_reportApp      configuration d'un app template
		 
		 	Iapplication_configuration_celio2020Admin      conf de l'app celio 2020
		 
		 	Iapplication_configuration_manu_admin      cond des comptoire de l'or admin
		 
		 	Iapplication_configuration_comptoire_or_admin      cond des comptoire de l'or admin
		 
		 	Iapplication_configuration_celiofront      configuration de l appli celio front
		 
		 	Iapplication_configuration_celioback      configuration de l appli celio back
		 
		 	Iapplication_configuration_celioadmin      configuration de l appli celio admin
		 
		 	Iapplication_configuration_ferrand      la conf ferrand
		 
		 	Iapplication_configuration_celio      configuration générale application celio
		 
		 	IAppConf_minds_up      config de l'app minds up
		 
		 	Iapplication_configuration_petit_moulin      conf petit_moulin
		 
		 	Iapplication_configuration_petit_moulin_admin      conf petit_moulin_admin
		 
		 	Iapplication_configuration_qbp      config qbp
		 
		 	Iapplication_configuration_qbp_admin_seller      config qbp admin
		 
		 	Iapplication_configuration_qbp_admin      config qbp admin
		 
		 
		*/
		public application_configuration:HttpServiceBddBase<Interfaces.Iapplication_configuration> ;
		public admin_application_configuration:HttpServiceBddAdminBase<Interfaces.Iapplication_configuration> ;

		
		 /**
		 service d'accès a la sous-collection :application_configuration_phoneCard
		 desc: configuration d'une application phoneCard
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public application_configuration_phoneCard:HttpServiceBddBase<Interfaces.Iapplication_configuration_phoneCard> ;
		public admin_application_configuration_phoneCard:HttpServiceBddAdminBase<Interfaces.Iapplication_configuration_phoneCard> ;

		 
		 /**
		 service d'accès a la sous-collection :application_configuration_appCoach
		 desc: c'est la configuration d'une application Coach
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public application_configuration_appCoach:HttpServiceBddBase<Interfaces.Iapplication_configuration_appCoach> ;
		public admin_application_configuration_appCoach:HttpServiceBddAdminBase<Interfaces.Iapplication_configuration_appCoach> ;

		 
		 /**
		 service d'accès a la sous-collection :application_configuration_super_admin_mongo
		 desc: configuration de l'application superAdminMongo
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public application_configuration_super_admin_mongo:HttpServiceBddBase<Interfaces.Iapplication_configuration_super_admin_mongo> ;
		public admin_application_configuration_super_admin_mongo:HttpServiceBddAdminBase<Interfaces.Iapplication_configuration_super_admin_mongo> ;

		 
		 /**
		 service d'accès a la sous-collection :application_configuration_antico
		 desc: configuration d'un parcourt anticoruption
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public application_configuration_antico:HttpServiceBddBase<Interfaces.Iapplication_configuration_antico> ;
		public admin_application_configuration_antico:HttpServiceBddAdminBase<Interfaces.Iapplication_configuration_antico> ;

		 
		 /**
		 service d'accès a la sous-collection :application_configuration_appClient
		 desc: c'est la configuration d'une application Client
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public application_configuration_appClient:HttpServiceBddBase<Interfaces.Iapplication_configuration_appClient> ;
		public admin_application_configuration_appClient:HttpServiceBddAdminBase<Interfaces.Iapplication_configuration_appClient> ;

		 
		 /**
		 service d'accès a la sous-collection :application_configuration_appApprenant
		 desc: c'est la configuration d'une application Apprenant
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public application_configuration_appApprenant:HttpServiceBddBase<Interfaces.Iapplication_configuration_appApprenant> ;
		public admin_application_configuration_appApprenant:HttpServiceBddAdminBase<Interfaces.Iapplication_configuration_appApprenant> ;

		 
		 /**
		 service d'accès a la sous-collection :AppConf_minds_up_admin
		 desc: config de l'app minds up admin
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public AppConf_minds_up_admin:HttpServiceBddBase<Interfaces.IAppConf_minds_up_admin> ;
		public admin_AppConf_minds_up_admin:HttpServiceBddAdminBase<Interfaces.IAppConf_minds_up_admin> ;

		 
		 /**
		 service d'accès a la sous-collection :application_configuration_reportApp
		 desc: configuration d'un app template
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public application_configuration_reportApp:HttpServiceBddBase<Interfaces.Iapplication_configuration_reportApp> ;
		public admin_application_configuration_reportApp:HttpServiceBddAdminBase<Interfaces.Iapplication_configuration_reportApp> ;

		 
		 /**
		 service d'accès a la sous-collection :application_configuration_celio2020Admin
		 desc: conf de l'app celio 2020
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public application_configuration_celio2020Admin:HttpServiceBddBase<Interfaces.Iapplication_configuration_celio2020Admin> ;
		public admin_application_configuration_celio2020Admin:HttpServiceBddAdminBase<Interfaces.Iapplication_configuration_celio2020Admin> ;

		 
		 /**
		 service d'accès a la sous-collection :application_configuration_manu_admin
		 desc: cond des comptoire de l'or admin
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public application_configuration_manu_admin:HttpServiceBddBase<Interfaces.Iapplication_configuration_manu_admin> ;
		public admin_application_configuration_manu_admin:HttpServiceBddAdminBase<Interfaces.Iapplication_configuration_manu_admin> ;

		 
		 /**
		 service d'accès a la sous-collection :application_configuration_comptoire_or_admin
		 desc: cond des comptoire de l'or admin
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public application_configuration_comptoire_or_admin:HttpServiceBddBase<Interfaces.Iapplication_configuration_comptoire_or_admin> ;
		public admin_application_configuration_comptoire_or_admin:HttpServiceBddAdminBase<Interfaces.Iapplication_configuration_comptoire_or_admin> ;

		 
		 /**
		 service d'accès a la sous-collection :application_configuration_celiofront
		 desc: configuration de l appli celio front
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public application_configuration_celiofront:HttpServiceBddBase<Interfaces.Iapplication_configuration_celiofront> ;
		public admin_application_configuration_celiofront:HttpServiceBddAdminBase<Interfaces.Iapplication_configuration_celiofront> ;

		 
		 /**
		 service d'accès a la sous-collection :application_configuration_celioback
		 desc: configuration de l appli celio back
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public application_configuration_celioback:HttpServiceBddBase<Interfaces.Iapplication_configuration_celioback> ;
		public admin_application_configuration_celioback:HttpServiceBddAdminBase<Interfaces.Iapplication_configuration_celioback> ;

		 
		 /**
		 service d'accès a la sous-collection :application_configuration_celioadmin
		 desc: configuration de l appli celio admin
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public application_configuration_celioadmin:HttpServiceBddBase<Interfaces.Iapplication_configuration_celioadmin> ;
		public admin_application_configuration_celioadmin:HttpServiceBddAdminBase<Interfaces.Iapplication_configuration_celioadmin> ;

		 
		 /**
		 service d'accès a la sous-collection :application_configuration_ferrand
		 desc: la conf ferrand
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public application_configuration_ferrand:HttpServiceBddBase<Interfaces.Iapplication_configuration_ferrand> ;
		public admin_application_configuration_ferrand:HttpServiceBddAdminBase<Interfaces.Iapplication_configuration_ferrand> ;

		 
		 /**
		 service d'accès a la sous-collection :application_configuration_celio
		 desc: configuration générale application celio
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public application_configuration_celio:HttpServiceBddBase<Interfaces.Iapplication_configuration_celio> ;
		public admin_application_configuration_celio:HttpServiceBddAdminBase<Interfaces.Iapplication_configuration_celio> ;

		 
		 /**
		 service d'accès a la sous-collection :AppConf_minds_up
		 desc: config de l'app minds up
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public AppConf_minds_up:HttpServiceBddBase<Interfaces.IAppConf_minds_up> ;
		public admin_AppConf_minds_up:HttpServiceBddAdminBase<Interfaces.IAppConf_minds_up> ;

		 
		 /**
		 service d'accès a la sous-collection :application_configuration_petit_moulin
		 desc: conf petit_moulin
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public application_configuration_petit_moulin:HttpServiceBddBase<Interfaces.Iapplication_configuration_petit_moulin> ;
		public admin_application_configuration_petit_moulin:HttpServiceBddAdminBase<Interfaces.Iapplication_configuration_petit_moulin> ;

		 
		 /**
		 service d'accès a la sous-collection :application_configuration_petit_moulin_admin
		 desc: conf petit_moulin_admin
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public application_configuration_petit_moulin_admin:HttpServiceBddBase<Interfaces.Iapplication_configuration_petit_moulin_admin> ;
		public admin_application_configuration_petit_moulin_admin:HttpServiceBddAdminBase<Interfaces.Iapplication_configuration_petit_moulin_admin> ;

		 
		 /**
		 service d'accès a la sous-collection :application_configuration_qbp
		 desc: config qbp
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public application_configuration_qbp:HttpServiceBddBase<Interfaces.Iapplication_configuration_qbp> ;
		public admin_application_configuration_qbp:HttpServiceBddAdminBase<Interfaces.Iapplication_configuration_qbp> ;

		 
		 /**
		 service d'accès a la sous-collection :application_configuration_qbp_admin_seller
		 desc: config qbp admin
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public application_configuration_qbp_admin_seller:HttpServiceBddBase<Interfaces.Iapplication_configuration_qbp_admin_seller> ;
		public admin_application_configuration_qbp_admin_seller:HttpServiceBddAdminBase<Interfaces.Iapplication_configuration_qbp_admin_seller> ;

		 
		 /**
		 service d'accès a la sous-collection :application_configuration_qbp_admin
		 desc: config qbp admin
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public application_configuration_qbp_admin:HttpServiceBddBase<Interfaces.Iapplication_configuration_qbp_admin> ;
		public admin_application_configuration_qbp_admin:HttpServiceBddAdminBase<Interfaces.Iapplication_configuration_qbp_admin> ;

		 
	
		/**
		 service d'accès à la collection :application_instance
		 desc: c'est le couple application configuration 
		 

		 
		*/
		public application_instance:HttpServiceBddBase<Interfaces.Iapplication_instance> ;
		public admin_application_instance:HttpServiceBddAdminBase<Interfaces.Iapplication_instance> ;

		
	
		/**
		 service d'accès à la collection :service
		 desc: identification du service
		 
		 info: vous pouvez voir tous les objets de cette collection y compris les enfants
		 liste des interfaces héritées possibles:
		 
		 	Iservice_sso      c'est un sso
		 
		 	Iservice_init      service qui génére la configuration d'une application cliente (url du sso, id client, id_instance...)
		 
		 	Iservice_mailtoinfra      service qui permet de configurer l'authentification a partir d'un mail
		 
		 	Iservice_licence_token      c'est un service en charge de valider les licences et retourner les configurations des applications web
		 
		 	Iservice_goshabaGateway      passerelle pour goshaba
		 
		 	Iservice_socketIo      communication temps réelle multi format
		 
		 	Iservice_supervision      service_supervision
		 
		 	Iservice_configuration      c'est le service de distribution des configurations des services
		 
		 	Iservice_nginxConfigurator      service_nginxConfigurator
		 
		 	Iservice_push_notification      Service pour gérer les notifications push des applications
		 
		 	Iservice_like      service permettant de liker un objet de la base
		 
		 	Iservice_dumy_fso      simple remote file system a n utiliser que pour des test
		 
		 	Iservice_sendGrid      permet d'envoyer des mail via l'api send grid v3
		 
		 	Iservice_trainingCoursesService      service de gestion des parcourts de formation
		 
		 	Iservice_orchestrator      service d'orchestration
		 
		 	Iservice_socket_io      service messagerie de soket.io
		 
		 	Iservice_tutor      service de gestion des message tutoré
		 
		 	Iservice_init_js      service qui retourne un init.js
		 
		 	Iservice_infra_admin      administration de l'infra
		 
		 	Imailtoinfra2      retrouve la configuration de connection de l'app savy a partir du mail de l'utilisateur
		 
		 	Iservice_planned_tasks      Service de Taches planifiées
		 
		 	IService_scorm_gateway      service passerelle d'un package scorm vers l'interne
		 
		 	Iservice_nginxMultiConfigurator      configuration d'un service nginx multi configuration
		 
		 	Iservice_client_ftp      client ftps
		 
		 	Iservice_polo_celio      service de tirage au sort de polo
		 
		 	Iservice_fso      remote file system
		 
		 	Iservice_pdfrip      service de creation de pdf
		 
		 	Iservice_signin      service d'enregistrement
		 
		 	Iservice_mindsUp      service minds up metier
		 
		 	Iservice_webAppConf      permet de générer les fichier de conf des app (css, js, ...)
		 
		 	Iswagger_conv      convertisseur de swagger
		 
		 	Iservice_mongo      configure un service mongo
		 
		 	Iservice_celio_qcm_admin      service celio qcm admin
		 
		 	Iservice_ferrand      service ferrand
		 
		 	Iservice_petit_moulin      service petit moulin
		 
		 	Iservice_celio_fid      service celio fid
		 
		 	Iservice_celio_qcm      service celio qcm
		 
		 	Iservice_comptoireOr      service_comptoireOr
		 
		 	Iservice_celio_back_task      service celio back_task
		 
		 	Iservice_celio_fid_admin      service celio fid admin
		 
		 	Iservice_airport      service airport
		 
		 	IQBP_service      service métier de QBP
		 
		 
		*/
		public service:HttpServiceBddBase<Interfaces.Iservice> ;
		public admin_service:HttpServiceBddAdminBase<Interfaces.Iservice> ;

		
		 /**
		 service d'accès a la sous-collection :service_sso
		 desc: c'est un sso
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_sso:HttpServiceBddBase<Interfaces.Iservice_sso> ;
		public admin_service_sso:HttpServiceBddAdminBase<Interfaces.Iservice_sso> ;

		 
		 /**
		 service d'accès a la sous-collection :service_init
		 desc: service qui génére la configuration d'une application cliente (url du sso, id client, id_instance...)
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_init:HttpServiceBddBase<Interfaces.Iservice_init> ;
		public admin_service_init:HttpServiceBddAdminBase<Interfaces.Iservice_init> ;

		 
		 /**
		 service d'accès a la sous-collection :service_mailtoinfra
		 desc: service qui permet de configurer l'authentification a partir d'un mail
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_mailtoinfra:HttpServiceBddBase<Interfaces.Iservice_mailtoinfra> ;
		public admin_service_mailtoinfra:HttpServiceBddAdminBase<Interfaces.Iservice_mailtoinfra> ;

		 
		 /**
		 service d'accès a la sous-collection :service_licence_token
		 desc: c'est un service en charge de valider les licences et retourner les configurations des applications web
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_licence_token:HttpServiceBddBase<Interfaces.Iservice_licence_token> ;
		public admin_service_licence_token:HttpServiceBddAdminBase<Interfaces.Iservice_licence_token> ;

		 
		 /**
		 service d'accès a la sous-collection :service_goshabaGateway
		 desc: passerelle pour goshaba
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_goshabaGateway:HttpServiceBddBase<Interfaces.Iservice_goshabaGateway> ;
		public admin_service_goshabaGateway:HttpServiceBddAdminBase<Interfaces.Iservice_goshabaGateway> ;

		 
		 /**
		 service d'accès a la sous-collection :service_socketIo
		 desc: communication temps réelle multi format
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_socketIo:HttpServiceBddBase<Interfaces.Iservice_socketIo> ;
		public admin_service_socketIo:HttpServiceBddAdminBase<Interfaces.Iservice_socketIo> ;

		 
		 /**
		 service d'accès a la sous-collection :service_supervision
		 desc: service_supervision
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_supervision:HttpServiceBddBase<Interfaces.Iservice_supervision> ;
		public admin_service_supervision:HttpServiceBddAdminBase<Interfaces.Iservice_supervision> ;

		 
		 /**
		 service d'accès a la sous-collection :service_configuration
		 desc: c'est le service de distribution des configurations des services
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_configuration:HttpServiceBddBase<Interfaces.Iservice_configuration> ;
		public admin_service_configuration:HttpServiceBddAdminBase<Interfaces.Iservice_configuration> ;

		 
		 /**
		 service d'accès a la sous-collection :service_nginxConfigurator
		 desc: service_nginxConfigurator
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_nginxConfigurator:HttpServiceBddBase<Interfaces.Iservice_nginxConfigurator> ;
		public admin_service_nginxConfigurator:HttpServiceBddAdminBase<Interfaces.Iservice_nginxConfigurator> ;

		 
		 /**
		 service d'accès a la sous-collection :service_push_notification
		 desc: Service pour gérer les notifications push des applications
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_push_notification:HttpServiceBddBase<Interfaces.Iservice_push_notification> ;
		public admin_service_push_notification:HttpServiceBddAdminBase<Interfaces.Iservice_push_notification> ;

		 
		 /**
		 service d'accès a la sous-collection :service_like
		 desc: service permettant de liker un objet de la base
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_like:HttpServiceBddBase<Interfaces.Iservice_like> ;
		public admin_service_like:HttpServiceBddAdminBase<Interfaces.Iservice_like> ;

		 
		 /**
		 service d'accès a la sous-collection :service_dumy_fso
		 desc: simple remote file system a n utiliser que pour des test
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_dumy_fso:HttpServiceBddBase<Interfaces.Iservice_dumy_fso> ;
		public admin_service_dumy_fso:HttpServiceBddAdminBase<Interfaces.Iservice_dumy_fso> ;

		 
		 /**
		 service d'accès a la sous-collection :service_sendGrid
		 desc: permet d'envoyer des mail via l'api send grid v3
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_sendGrid:HttpServiceBddBase<Interfaces.Iservice_sendGrid> ;
		public admin_service_sendGrid:HttpServiceBddAdminBase<Interfaces.Iservice_sendGrid> ;

		 
		 /**
		 service d'accès a la sous-collection :service_trainingCoursesService
		 desc: service de gestion des parcourts de formation
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_trainingCoursesService:HttpServiceBddBase<Interfaces.Iservice_trainingCoursesService> ;
		public admin_service_trainingCoursesService:HttpServiceBddAdminBase<Interfaces.Iservice_trainingCoursesService> ;

		 
		 /**
		 service d'accès a la sous-collection :service_orchestrator
		 desc: service d'orchestration
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_orchestrator:HttpServiceBddBase<Interfaces.Iservice_orchestrator> ;
		public admin_service_orchestrator:HttpServiceBddAdminBase<Interfaces.Iservice_orchestrator> ;

		 
		 /**
		 service d'accès a la sous-collection :service_socket_io
		 desc: service messagerie de soket.io
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_socket_io:HttpServiceBddBase<Interfaces.Iservice_socket_io> ;
		public admin_service_socket_io:HttpServiceBddAdminBase<Interfaces.Iservice_socket_io> ;

		 
		 /**
		 service d'accès a la sous-collection :service_tutor
		 desc: service de gestion des message tutoré
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_tutor:HttpServiceBddBase<Interfaces.Iservice_tutor> ;
		public admin_service_tutor:HttpServiceBddAdminBase<Interfaces.Iservice_tutor> ;

		 
		 /**
		 service d'accès a la sous-collection :service_init_js
		 desc: service qui retourne un init.js
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_init_js:HttpServiceBddBase<Interfaces.Iservice_init_js> ;
		public admin_service_init_js:HttpServiceBddAdminBase<Interfaces.Iservice_init_js> ;

		 
		 /**
		 service d'accès a la sous-collection :service_infra_admin
		 desc: administration de l'infra
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_infra_admin:HttpServiceBddBase<Interfaces.Iservice_infra_admin> ;
		public admin_service_infra_admin:HttpServiceBddAdminBase<Interfaces.Iservice_infra_admin> ;

		 
		 /**
		 service d'accès a la sous-collection :mailtoinfra2
		 desc: retrouve la configuration de connection de l'app savy a partir du mail de l'utilisateur
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public mailtoinfra2:HttpServiceBddBase<Interfaces.Imailtoinfra2> ;
		public admin_mailtoinfra2:HttpServiceBddAdminBase<Interfaces.Imailtoinfra2> ;

		 
		 /**
		 service d'accès a la sous-collection :service_planned_tasks
		 desc: Service de Taches planifiées
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_planned_tasks:HttpServiceBddBase<Interfaces.Iservice_planned_tasks> ;
		public admin_service_planned_tasks:HttpServiceBddAdminBase<Interfaces.Iservice_planned_tasks> ;

		 
		 /**
		 service d'accès a la sous-collection :Service_scorm_gateway
		 desc: service passerelle d'un package scorm vers l'interne
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public Service_scorm_gateway:HttpServiceBddBase<Interfaces.IService_scorm_gateway> ;
		public admin_Service_scorm_gateway:HttpServiceBddAdminBase<Interfaces.IService_scorm_gateway> ;

		 
		 /**
		 service d'accès a la sous-collection :service_nginxMultiConfigurator
		 desc: configuration d'un service nginx multi configuration
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_nginxMultiConfigurator:HttpServiceBddBase<Interfaces.Iservice_nginxMultiConfigurator> ;
		public admin_service_nginxMultiConfigurator:HttpServiceBddAdminBase<Interfaces.Iservice_nginxMultiConfigurator> ;

		 
		 /**
		 service d'accès a la sous-collection :service_client_ftp
		 desc: client ftps
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_client_ftp:HttpServiceBddBase<Interfaces.Iservice_client_ftp> ;
		public admin_service_client_ftp:HttpServiceBddAdminBase<Interfaces.Iservice_client_ftp> ;

		 
		 /**
		 service d'accès a la sous-collection :service_polo_celio
		 desc: service de tirage au sort de polo
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_polo_celio:HttpServiceBddBase<Interfaces.Iservice_polo_celio> ;
		public admin_service_polo_celio:HttpServiceBddAdminBase<Interfaces.Iservice_polo_celio> ;

		 
		 /**
		 service d'accès a la sous-collection :service_fso
		 desc: remote file system
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_fso:HttpServiceBddBase<Interfaces.Iservice_fso> ;
		public admin_service_fso:HttpServiceBddAdminBase<Interfaces.Iservice_fso> ;

		 
		 /**
		 service d'accès a la sous-collection :service_pdfrip
		 desc: service de creation de pdf
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_pdfrip:HttpServiceBddBase<Interfaces.Iservice_pdfrip> ;
		public admin_service_pdfrip:HttpServiceBddAdminBase<Interfaces.Iservice_pdfrip> ;

		 
		 /**
		 service d'accès a la sous-collection :service_signin
		 desc: service d'enregistrement
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_signin:HttpServiceBddBase<Interfaces.Iservice_signin> ;
		public admin_service_signin:HttpServiceBddAdminBase<Interfaces.Iservice_signin> ;

		 
		 /**
		 service d'accès a la sous-collection :service_mindsUp
		 desc: service minds up metier
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_mindsUp:HttpServiceBddBase<Interfaces.Iservice_mindsUp> ;
		public admin_service_mindsUp:HttpServiceBddAdminBase<Interfaces.Iservice_mindsUp> ;

		 
		 /**
		 service d'accès a la sous-collection :service_webAppConf
		 desc: permet de générer les fichier de conf des app (css, js, ...)
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_webAppConf:HttpServiceBddBase<Interfaces.Iservice_webAppConf> ;
		public admin_service_webAppConf:HttpServiceBddAdminBase<Interfaces.Iservice_webAppConf> ;

		 
		 /**
		 service d'accès a la sous-collection :swagger_conv
		 desc: convertisseur de swagger
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public swagger_conv:HttpServiceBddBase<Interfaces.Iswagger_conv> ;
		public admin_swagger_conv:HttpServiceBddAdminBase<Interfaces.Iswagger_conv> ;

		 
		 /**
		 service d'accès a la sous-collection :service_mongo
		 desc: configure un service mongo
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_mongo:HttpServiceBddBase<Interfaces.Iservice_mongo> ;
		public admin_service_mongo:HttpServiceBddAdminBase<Interfaces.Iservice_mongo> ;

		 
		 /**
		 service d'accès a la sous-collection :service_celio_qcm_admin
		 desc: service celio qcm admin
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_celio_qcm_admin:HttpServiceBddBase<Interfaces.Iservice_celio_qcm_admin> ;
		public admin_service_celio_qcm_admin:HttpServiceBddAdminBase<Interfaces.Iservice_celio_qcm_admin> ;

		 
		 /**
		 service d'accès a la sous-collection :service_ferrand
		 desc: service ferrand
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_ferrand:HttpServiceBddBase<Interfaces.Iservice_ferrand> ;
		public admin_service_ferrand:HttpServiceBddAdminBase<Interfaces.Iservice_ferrand> ;

		 
		 /**
		 service d'accès a la sous-collection :service_petit_moulin
		 desc: service petit moulin
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_petit_moulin:HttpServiceBddBase<Interfaces.Iservice_petit_moulin> ;
		public admin_service_petit_moulin:HttpServiceBddAdminBase<Interfaces.Iservice_petit_moulin> ;

		 
		 /**
		 service d'accès a la sous-collection :service_celio_fid
		 desc: service celio fid
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_celio_fid:HttpServiceBddBase<Interfaces.Iservice_celio_fid> ;
		public admin_service_celio_fid:HttpServiceBddAdminBase<Interfaces.Iservice_celio_fid> ;

		 
		 /**
		 service d'accès a la sous-collection :service_celio_qcm
		 desc: service celio qcm
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_celio_qcm:HttpServiceBddBase<Interfaces.Iservice_celio_qcm> ;
		public admin_service_celio_qcm:HttpServiceBddAdminBase<Interfaces.Iservice_celio_qcm> ;

		 
		 /**
		 service d'accès a la sous-collection :service_comptoireOr
		 desc: service_comptoireOr
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_comptoireOr:HttpServiceBddBase<Interfaces.Iservice_comptoireOr> ;
		public admin_service_comptoireOr:HttpServiceBddAdminBase<Interfaces.Iservice_comptoireOr> ;

		 
		 /**
		 service d'accès a la sous-collection :service_celio_back_task
		 desc: service celio back_task
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_celio_back_task:HttpServiceBddBase<Interfaces.Iservice_celio_back_task> ;
		public admin_service_celio_back_task:HttpServiceBddAdminBase<Interfaces.Iservice_celio_back_task> ;

		 
		 /**
		 service d'accès a la sous-collection :service_celio_fid_admin
		 desc: service celio fid admin
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_celio_fid_admin:HttpServiceBddBase<Interfaces.Iservice_celio_fid_admin> ;
		public admin_service_celio_fid_admin:HttpServiceBddAdminBase<Interfaces.Iservice_celio_fid_admin> ;

		 
		 /**
		 service d'accès a la sous-collection :service_airport
		 desc: service airport
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_airport:HttpServiceBddBase<Interfaces.Iservice_airport> ;
		public admin_service_airport:HttpServiceBddAdminBase<Interfaces.Iservice_airport> ;

		 
		 /**
		 service d'accès a la sous-collection :QBP_service
		 desc: service métier de QBP
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public QBP_service:HttpServiceBddBase<Interfaces.IQBP_service> ;
		public admin_QBP_service:HttpServiceBddAdminBase<Interfaces.IQBP_service> ;

		 
	
	
}


/**
	accès à la vue :Client 
	retourne la donnée du client connecté
*/
export class bdd_view_Client extends HttpServiceBddBaseView<Interfaces.Iend_client> {
/**
	accès à la vue :Client 
	
*/	
	constructor( public conf:any ) {
			super( conf )
			
		}


	/**
	génére une requette sur la vue Client
	
	*/
  private agregate:any[] = [{"$match":{"_id":"$ctx.params.clientId"}}] ;

	public get(  query: string = '*', headers: any = {} , ctx:any={}  ): Promise<IHttpResult<Interfaces.Iend_client>> {
		//ajouter les params dans ctx
    ctx.params = {} ;
    return super.get( query , headers , this.agregate , ctx)
	}
}	

/**
	accès à la vue :UserLicence 
	retourne la liste des licences d'un utilisateur pour le client courrant
*/
export class bdd_view_UserLicence extends HttpServiceBddBaseView<Interfaces.Ilicence> {
/**
	accès à la vue :UserLicence 
	
*/	
	constructor( public conf:any ) {
			super( conf )
			
		}


	/**
	génére une requette sur la vue UserLicence
	
	*/
  private agregate:any[] = [{"$match":{"user":"$ctx.params.userId","end_client":"$ctx.params.clientId"}}] ;

	public get( userId:string ,  query: string = '*', headers: any = {} , ctx:any={}  ): Promise<IHttpResult<Interfaces.Ilicence>> {
		//ajouter les params dans ctx
    ctx.params = {} ;
    return super.get( query , headers , this.agregate , ctx)
	}
}	



export class bdd_view_plateform {

	constructor( public conf:any , collections:any ){
	
	this.Client = new bdd_view_Client({bdd: conf.bdd , collectionName:'end_client', entity:Index.Entity_end_client , debug:conf.debug ,  collections:collections })  ;
		
	this.UserLicence = new bdd_view_UserLicence({bdd: conf.bdd , collectionName:'licence', entity:Index.Entity_licence , debug:conf.debug ,  collections:collections })  ;
		
	}

	
	/**
	accès à la vue :Client     retourne la donnée du client connecté
	*/
	public Client:bdd_view_Client ;
	
	/**
	accès à la vue :UserLicence     retourne la liste des licences d'un utilisateur pour le client courrant
	*/
	public UserLicence:bdd_view_UserLicence ;
	
	
}


export  class Bdd_plateforme implements IPlateforme {

	constructor(public conf:{url:string, secure:any , debug?:boolean, bdd?:Promise<mongo.Db>, caPath?: string }  ){

    if(!conf.bdd){
      conf.bdd = new Promise((resolve, reject)=>{
        if (conf.caPath) {
          var ca = [fs.readFileSync(conf.caPath)];
          mongo.MongoClient.connect(conf.url,
            {
              sslValidate: true,
              sslCA: ca,
              useNewUrlParser: true
            })
            .then(mongoCLient => {
              resolve(mongoCLient.db());
            })

        } else {
          mongo.MongoClient.connect(conf.url)
            .then(mongoCLient => {
              resolve(mongoCLient.db());
            })
        }
      })
    }
    this.collections = new bdd_collection_plateform(conf ) ;
    this.views = new bdd_view_plateform(conf , this.collections) ;
	}



	/**
		liste des collections de l'api
	*/
	public collections:bdd_collection_plateform ;
	/**
		liste des vues de l'api
	*/
	public views: bdd_view_plateform ; 
} 