
import {IHttpServiceBase , IHttpServiceAdminBase, IHttpResult  } from "@hfdev/utils" ;

import * as Interfaces from "../../lib/modelObj/Interfaces" ;







/**
	accès à la vue :Client     retourne la donnée du client connecté
 */
export interface IPlateforme_view_Client {
  /**
	génére une requette sur la vue Client
	
	 */
	get(  query?: string, headers?: any ,  ): Promise<IHttpResult<Interfaces.Iend_client>> 

}

/**
	accès à la vue :UserLicence     retourne la liste des licences d'un utilisateur pour le client courrant
 */
export interface IPlateforme_view_UserLicence {
  /**
	génére une requette sur la vue UserLicence
	
	 */
	get( userId:string ,  query?: string, headers?: any ,  ): Promise<IHttpResult<Interfaces.Ilicence>> 

}



export interface IView_plateform {
  
	/**
	accès à la vue :Client     retourne la donnée du client connecté
	 */
	Client:IPlateforme_view_Client ;
	
	/**
	accès à la vue :UserLicence     retourne la liste des licences d'un utilisateur pour le client courrant
	 */
	UserLicence:IPlateforme_view_UserLicence ;
	
}




export interface IPlateforme {

  collections:{
    

		certificat:IHttpServiceBase<Interfaces.Icertificat>  ;
		admin_certificat: IHttpServiceAdminBase<Interfaces.Icertificat> ;

		
		 
		rsa: IHttpServiceBase<Interfaces.Irsa> ;
		admin_rsa: IHttpServiceAdminBase<Interfaces.Irsa>  ;

		 
	

		oidc_Client:IHttpServiceBase<Interfaces.Ioidc_Client>  ;
		admin_oidc_Client: IHttpServiceAdminBase<Interfaces.Ioidc_Client> ;

		
	

		oidc_account:IHttpServiceBase<Interfaces.Ioidc_account>  ;
		admin_oidc_account: IHttpServiceAdminBase<Interfaces.Ioidc_account> ;

		
	

		service_access:IHttpServiceBase<Interfaces.Iservice_access>  ;
		admin_service_access: IHttpServiceAdminBase<Interfaces.Iservice_access> ;

		
	

		protoschema:IHttpServiceBase<Interfaces.Iprotoschema>  ;
		admin_protoschema: IHttpServiceAdminBase<Interfaces.Iprotoschema> ;

		
	

		mail:IHttpServiceBase<Interfaces.Imail>  ;
		admin_mail: IHttpServiceAdminBase<Interfaces.Imail> ;

		
		 
		mail_sendgrid: IHttpServiceBase<Interfaces.Imail_sendgrid> ;
		admin_mail_sendgrid: IHttpServiceAdminBase<Interfaces.Imail_sendgrid>  ;

		 
	

		service_serviceOrchestrator:IHttpServiceBase<Interfaces.Iservice_serviceOrchestrator>  ;
		admin_service_serviceOrchestrator: IHttpServiceAdminBase<Interfaces.Iservice_serviceOrchestrator> ;

		
	

		_view:IHttpServiceBase<Interfaces.I_view>  ;
		admin__view: IHttpServiceAdminBase<Interfaces.I_view> ;

		
		 
		_view_params: IHttpServiceBase<Interfaces.I_view_params> ;
		admin__view_params: IHttpServiceAdminBase<Interfaces.I_view_params>  ;

		 
	

		licence:IHttpServiceBase<Interfaces.Ilicence>  ;
		admin_licence: IHttpServiceAdminBase<Interfaces.Ilicence> ;

		
		 
		licence_temporelle: IHttpServiceBase<Interfaces.Ilicence_temporelle> ;
		admin_licence_temporelle: IHttpServiceAdminBase<Interfaces.Ilicence_temporelle>  ;

		 
	

		MultilangSendGridTemplate:IHttpServiceBase<Interfaces.IMultilangSendGridTemplate>  ;
		admin_MultilangSendGridTemplate: IHttpServiceAdminBase<Interfaces.IMultilangSendGridTemplate> ;

		
	

		application:IHttpServiceBase<Interfaces.Iapplication>  ;
		admin_application: IHttpServiceAdminBase<Interfaces.Iapplication> ;

		
		 
		pack_card: IHttpServiceBase<Interfaces.Ipack_card> ;
		admin_pack_card: IHttpServiceAdminBase<Interfaces.Ipack_card>  ;

		 
	

		TemplateLodash:IHttpServiceBase<Interfaces.ITemplateLodash>  ;
		admin_TemplateLodash: IHttpServiceAdminBase<Interfaces.ITemplateLodash> ;

		
	

		end_client:IHttpServiceBase<Interfaces.Iend_client>  ;
		admin_end_client: IHttpServiceAdminBase<Interfaces.Iend_client> ;

		
	

		Request:IHttpServiceBase<Interfaces.IRequest>  ;
		admin_Request: IHttpServiceAdminBase<Interfaces.IRequest> ;

		
	

		ftpsConfig:IHttpServiceBase<Interfaces.IftpsConfig>  ;
		admin_ftpsConfig: IHttpServiceAdminBase<Interfaces.IftpsConfig> ;

		
	

		application_configuration:IHttpServiceBase<Interfaces.Iapplication_configuration>  ;
		admin_application_configuration: IHttpServiceAdminBase<Interfaces.Iapplication_configuration> ;

		
		 
		application_configuration_phoneCard: IHttpServiceBase<Interfaces.Iapplication_configuration_phoneCard> ;
		admin_application_configuration_phoneCard: IHttpServiceAdminBase<Interfaces.Iapplication_configuration_phoneCard>  ;

		 
		 
		application_configuration_appCoach: IHttpServiceBase<Interfaces.Iapplication_configuration_appCoach> ;
		admin_application_configuration_appCoach: IHttpServiceAdminBase<Interfaces.Iapplication_configuration_appCoach>  ;

		 
		 
		application_configuration_super_admin_mongo: IHttpServiceBase<Interfaces.Iapplication_configuration_super_admin_mongo> ;
		admin_application_configuration_super_admin_mongo: IHttpServiceAdminBase<Interfaces.Iapplication_configuration_super_admin_mongo>  ;

		 
		 
		application_configuration_antico: IHttpServiceBase<Interfaces.Iapplication_configuration_antico> ;
		admin_application_configuration_antico: IHttpServiceAdminBase<Interfaces.Iapplication_configuration_antico>  ;

		 
		 
		application_configuration_appClient: IHttpServiceBase<Interfaces.Iapplication_configuration_appClient> ;
		admin_application_configuration_appClient: IHttpServiceAdminBase<Interfaces.Iapplication_configuration_appClient>  ;

		 
		 
		application_configuration_appApprenant: IHttpServiceBase<Interfaces.Iapplication_configuration_appApprenant> ;
		admin_application_configuration_appApprenant: IHttpServiceAdminBase<Interfaces.Iapplication_configuration_appApprenant>  ;

		 
		 
		AppConf_minds_up_admin: IHttpServiceBase<Interfaces.IAppConf_minds_up_admin> ;
		admin_AppConf_minds_up_admin: IHttpServiceAdminBase<Interfaces.IAppConf_minds_up_admin>  ;

		 
		 
		application_configuration_reportApp: IHttpServiceBase<Interfaces.Iapplication_configuration_reportApp> ;
		admin_application_configuration_reportApp: IHttpServiceAdminBase<Interfaces.Iapplication_configuration_reportApp>  ;

		 
		 
		application_configuration_celio2020Admin: IHttpServiceBase<Interfaces.Iapplication_configuration_celio2020Admin> ;
		admin_application_configuration_celio2020Admin: IHttpServiceAdminBase<Interfaces.Iapplication_configuration_celio2020Admin>  ;

		 
		 
		application_configuration_manu_admin: IHttpServiceBase<Interfaces.Iapplication_configuration_manu_admin> ;
		admin_application_configuration_manu_admin: IHttpServiceAdminBase<Interfaces.Iapplication_configuration_manu_admin>  ;

		 
		 
		application_configuration_comptoire_or_admin: IHttpServiceBase<Interfaces.Iapplication_configuration_comptoire_or_admin> ;
		admin_application_configuration_comptoire_or_admin: IHttpServiceAdminBase<Interfaces.Iapplication_configuration_comptoire_or_admin>  ;

		 
		 
		application_configuration_celiofront: IHttpServiceBase<Interfaces.Iapplication_configuration_celiofront> ;
		admin_application_configuration_celiofront: IHttpServiceAdminBase<Interfaces.Iapplication_configuration_celiofront>  ;

		 
		 
		application_configuration_celioback: IHttpServiceBase<Interfaces.Iapplication_configuration_celioback> ;
		admin_application_configuration_celioback: IHttpServiceAdminBase<Interfaces.Iapplication_configuration_celioback>  ;

		 
		 
		application_configuration_celioadmin: IHttpServiceBase<Interfaces.Iapplication_configuration_celioadmin> ;
		admin_application_configuration_celioadmin: IHttpServiceAdminBase<Interfaces.Iapplication_configuration_celioadmin>  ;

		 
		 
		application_configuration_ferrand: IHttpServiceBase<Interfaces.Iapplication_configuration_ferrand> ;
		admin_application_configuration_ferrand: IHttpServiceAdminBase<Interfaces.Iapplication_configuration_ferrand>  ;

		 
		 
		application_configuration_celio: IHttpServiceBase<Interfaces.Iapplication_configuration_celio> ;
		admin_application_configuration_celio: IHttpServiceAdminBase<Interfaces.Iapplication_configuration_celio>  ;

		 
		 
		AppConf_minds_up: IHttpServiceBase<Interfaces.IAppConf_minds_up> ;
		admin_AppConf_minds_up: IHttpServiceAdminBase<Interfaces.IAppConf_minds_up>  ;

		 
		 
		application_configuration_petit_moulin: IHttpServiceBase<Interfaces.Iapplication_configuration_petit_moulin> ;
		admin_application_configuration_petit_moulin: IHttpServiceAdminBase<Interfaces.Iapplication_configuration_petit_moulin>  ;

		 
		 
		application_configuration_petit_moulin_admin: IHttpServiceBase<Interfaces.Iapplication_configuration_petit_moulin_admin> ;
		admin_application_configuration_petit_moulin_admin: IHttpServiceAdminBase<Interfaces.Iapplication_configuration_petit_moulin_admin>  ;

		 
		 
		application_configuration_qbp_admin: IHttpServiceBase<Interfaces.Iapplication_configuration_qbp_admin> ;
		admin_application_configuration_qbp_admin: IHttpServiceAdminBase<Interfaces.Iapplication_configuration_qbp_admin>  ;

		 
		 
		application_configuration_qbp_admin_seller: IHttpServiceBase<Interfaces.Iapplication_configuration_qbp_admin_seller> ;
		admin_application_configuration_qbp_admin_seller: IHttpServiceAdminBase<Interfaces.Iapplication_configuration_qbp_admin_seller>  ;

		 
		 
		application_configuration_qbp: IHttpServiceBase<Interfaces.Iapplication_configuration_qbp> ;
		admin_application_configuration_qbp: IHttpServiceAdminBase<Interfaces.Iapplication_configuration_qbp>  ;

		 
	

		application_instance:IHttpServiceBase<Interfaces.Iapplication_instance>  ;
		admin_application_instance: IHttpServiceAdminBase<Interfaces.Iapplication_instance> ;

		
	

		service:IHttpServiceBase<Interfaces.Iservice>  ;
		admin_service: IHttpServiceAdminBase<Interfaces.Iservice> ;

		
		 
		service_sso: IHttpServiceBase<Interfaces.Iservice_sso> ;
		admin_service_sso: IHttpServiceAdminBase<Interfaces.Iservice_sso>  ;

		 
		 
		service_init: IHttpServiceBase<Interfaces.Iservice_init> ;
		admin_service_init: IHttpServiceAdminBase<Interfaces.Iservice_init>  ;

		 
		 
		service_mailtoinfra: IHttpServiceBase<Interfaces.Iservice_mailtoinfra> ;
		admin_service_mailtoinfra: IHttpServiceAdminBase<Interfaces.Iservice_mailtoinfra>  ;

		 
		 
		service_licence_token: IHttpServiceBase<Interfaces.Iservice_licence_token> ;
		admin_service_licence_token: IHttpServiceAdminBase<Interfaces.Iservice_licence_token>  ;

		 
		 
		service_goshabaGateway: IHttpServiceBase<Interfaces.Iservice_goshabaGateway> ;
		admin_service_goshabaGateway: IHttpServiceAdminBase<Interfaces.Iservice_goshabaGateway>  ;

		 
		 
		service_socketIo: IHttpServiceBase<Interfaces.Iservice_socketIo> ;
		admin_service_socketIo: IHttpServiceAdminBase<Interfaces.Iservice_socketIo>  ;

		 
		 
		service_supervision: IHttpServiceBase<Interfaces.Iservice_supervision> ;
		admin_service_supervision: IHttpServiceAdminBase<Interfaces.Iservice_supervision>  ;

		 
		 
		service_configuration: IHttpServiceBase<Interfaces.Iservice_configuration> ;
		admin_service_configuration: IHttpServiceAdminBase<Interfaces.Iservice_configuration>  ;

		 
		 
		service_nginxConfigurator: IHttpServiceBase<Interfaces.Iservice_nginxConfigurator> ;
		admin_service_nginxConfigurator: IHttpServiceAdminBase<Interfaces.Iservice_nginxConfigurator>  ;

		 
		 
		service_push_notification: IHttpServiceBase<Interfaces.Iservice_push_notification> ;
		admin_service_push_notification: IHttpServiceAdminBase<Interfaces.Iservice_push_notification>  ;

		 
		 
		service_like: IHttpServiceBase<Interfaces.Iservice_like> ;
		admin_service_like: IHttpServiceAdminBase<Interfaces.Iservice_like>  ;

		 
		 
		service_dumy_fso: IHttpServiceBase<Interfaces.Iservice_dumy_fso> ;
		admin_service_dumy_fso: IHttpServiceAdminBase<Interfaces.Iservice_dumy_fso>  ;

		 
		 
		service_sendGrid: IHttpServiceBase<Interfaces.Iservice_sendGrid> ;
		admin_service_sendGrid: IHttpServiceAdminBase<Interfaces.Iservice_sendGrid>  ;

		 
		 
		service_trainingCoursesService: IHttpServiceBase<Interfaces.Iservice_trainingCoursesService> ;
		admin_service_trainingCoursesService: IHttpServiceAdminBase<Interfaces.Iservice_trainingCoursesService>  ;

		 
		 
		service_orchestrator: IHttpServiceBase<Interfaces.Iservice_orchestrator> ;
		admin_service_orchestrator: IHttpServiceAdminBase<Interfaces.Iservice_orchestrator>  ;

		 
		 
		service_socket_io: IHttpServiceBase<Interfaces.Iservice_socket_io> ;
		admin_service_socket_io: IHttpServiceAdminBase<Interfaces.Iservice_socket_io>  ;

		 
		 
		service_tutor: IHttpServiceBase<Interfaces.Iservice_tutor> ;
		admin_service_tutor: IHttpServiceAdminBase<Interfaces.Iservice_tutor>  ;

		 
		 
		service_init_js: IHttpServiceBase<Interfaces.Iservice_init_js> ;
		admin_service_init_js: IHttpServiceAdminBase<Interfaces.Iservice_init_js>  ;

		 
		 
		service_infra_admin: IHttpServiceBase<Interfaces.Iservice_infra_admin> ;
		admin_service_infra_admin: IHttpServiceAdminBase<Interfaces.Iservice_infra_admin>  ;

		 
		 
		mailtoinfra2: IHttpServiceBase<Interfaces.Imailtoinfra2> ;
		admin_mailtoinfra2: IHttpServiceAdminBase<Interfaces.Imailtoinfra2>  ;

		 
		 
		service_planned_tasks: IHttpServiceBase<Interfaces.Iservice_planned_tasks> ;
		admin_service_planned_tasks: IHttpServiceAdminBase<Interfaces.Iservice_planned_tasks>  ;

		 
		 
		Service_scorm_gateway: IHttpServiceBase<Interfaces.IService_scorm_gateway> ;
		admin_Service_scorm_gateway: IHttpServiceAdminBase<Interfaces.IService_scorm_gateway>  ;

		 
		 
		service_nginxMultiConfigurator: IHttpServiceBase<Interfaces.Iservice_nginxMultiConfigurator> ;
		admin_service_nginxMultiConfigurator: IHttpServiceAdminBase<Interfaces.Iservice_nginxMultiConfigurator>  ;

		 
		 
		service_client_ftp: IHttpServiceBase<Interfaces.Iservice_client_ftp> ;
		admin_service_client_ftp: IHttpServiceAdminBase<Interfaces.Iservice_client_ftp>  ;

		 
		 
		service_polo_celio: IHttpServiceBase<Interfaces.Iservice_polo_celio> ;
		admin_service_polo_celio: IHttpServiceAdminBase<Interfaces.Iservice_polo_celio>  ;

		 
		 
		service_fso: IHttpServiceBase<Interfaces.Iservice_fso> ;
		admin_service_fso: IHttpServiceAdminBase<Interfaces.Iservice_fso>  ;

		 
		 
		service_pdfrip: IHttpServiceBase<Interfaces.Iservice_pdfrip> ;
		admin_service_pdfrip: IHttpServiceAdminBase<Interfaces.Iservice_pdfrip>  ;

		 
		 
		service_signin: IHttpServiceBase<Interfaces.Iservice_signin> ;
		admin_service_signin: IHttpServiceAdminBase<Interfaces.Iservice_signin>  ;

		 
		 
		service_mindsUp: IHttpServiceBase<Interfaces.Iservice_mindsUp> ;
		admin_service_mindsUp: IHttpServiceAdminBase<Interfaces.Iservice_mindsUp>  ;

		 
		 
		service_webAppConf: IHttpServiceBase<Interfaces.Iservice_webAppConf> ;
		admin_service_webAppConf: IHttpServiceAdminBase<Interfaces.Iservice_webAppConf>  ;

		 
		 
		swagger_conv: IHttpServiceBase<Interfaces.Iswagger_conv> ;
		admin_swagger_conv: IHttpServiceAdminBase<Interfaces.Iswagger_conv>  ;

		 
		 
		service_mongo: IHttpServiceBase<Interfaces.Iservice_mongo> ;
		admin_service_mongo: IHttpServiceAdminBase<Interfaces.Iservice_mongo>  ;

		 
		 
		service_celio_qcm_admin: IHttpServiceBase<Interfaces.Iservice_celio_qcm_admin> ;
		admin_service_celio_qcm_admin: IHttpServiceAdminBase<Interfaces.Iservice_celio_qcm_admin>  ;

		 
		 
		service_ferrand: IHttpServiceBase<Interfaces.Iservice_ferrand> ;
		admin_service_ferrand: IHttpServiceAdminBase<Interfaces.Iservice_ferrand>  ;

		 
		 
		service_petit_moulin: IHttpServiceBase<Interfaces.Iservice_petit_moulin> ;
		admin_service_petit_moulin: IHttpServiceAdminBase<Interfaces.Iservice_petit_moulin>  ;

		 
		 
		service_celio_fid: IHttpServiceBase<Interfaces.Iservice_celio_fid> ;
		admin_service_celio_fid: IHttpServiceAdminBase<Interfaces.Iservice_celio_fid>  ;

		 
		 
		service_celio_qcm: IHttpServiceBase<Interfaces.Iservice_celio_qcm> ;
		admin_service_celio_qcm: IHttpServiceAdminBase<Interfaces.Iservice_celio_qcm>  ;

		 
		 
		service_comptoireOr: IHttpServiceBase<Interfaces.Iservice_comptoireOr> ;
		admin_service_comptoireOr: IHttpServiceAdminBase<Interfaces.Iservice_comptoireOr>  ;

		 
		 
		service_celio_back_task: IHttpServiceBase<Interfaces.Iservice_celio_back_task> ;
		admin_service_celio_back_task: IHttpServiceAdminBase<Interfaces.Iservice_celio_back_task>  ;

		 
		 
		service_celio_fid_admin: IHttpServiceBase<Interfaces.Iservice_celio_fid_admin> ;
		admin_service_celio_fid_admin: IHttpServiceAdminBase<Interfaces.Iservice_celio_fid_admin>  ;

		 
		 
		service_airport: IHttpServiceBase<Interfaces.Iservice_airport> ;
		admin_service_airport: IHttpServiceAdminBase<Interfaces.Iservice_airport>  ;

		 
		 
		QBP_service: IHttpServiceBase<Interfaces.IQBP_service> ;
		admin_QBP_service: IHttpServiceAdminBase<Interfaces.IQBP_service>  ;

		 
	
  }

  views:IView_plateform
}