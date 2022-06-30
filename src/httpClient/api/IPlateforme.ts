
import {IHttpServiceBase , IHttpServiceAdminBase, IHttpResult  } from "@leandredev/utils" ;

import * as Interface from "../../lib/modelObj/Interfaces" ;







/**
	accès à la vue :Client     retourne la donnée du client connecté
 */
export interface IPlateforme_view_Client {
  /**
	génére une requette sur la vue Client
	
	 */
	get(  query?: string, headers?: any ,  ): Promise<IHttpResult<Interface.Iend_client>> 

}

/**
	accès à la vue :UserLicence     retourne la liste des licences d'un utilisateur pour le client courrant
 */
export interface IPlateforme_view_UserLicence {
  /**
	génére une requette sur la vue UserLicence
	
	 */
	get( userId:string ,  query?: string, headers?: any ,  ): Promise<IHttpResult<Interface.Ilicence>> 

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
    

		certificat:IHttpServiceBase<Interface.Icertificat>  ;
		admin_certificat: IHttpServiceAdminBase<Interface.Icertificat> ;

		
		 
		rsa: IHttpServiceBase<Interface.Irsa> ;
		admin_rsa: IHttpServiceAdminBase<Interface.Irsa>  ;

		 
	

		oidc_Client:IHttpServiceBase<Interface.Ioidc_Client>  ;
		admin_oidc_Client: IHttpServiceAdminBase<Interface.Ioidc_Client> ;

		
	

		oidc_account:IHttpServiceBase<Interface.Ioidc_account>  ;
		admin_oidc_account: IHttpServiceAdminBase<Interface.Ioidc_account> ;

		
	

		service_access:IHttpServiceBase<Interface.Iservice_access>  ;
		admin_service_access: IHttpServiceAdminBase<Interface.Iservice_access> ;

		
	

		protoschema:IHttpServiceBase<Interface.Iprotoschema>  ;
		admin_protoschema: IHttpServiceAdminBase<Interface.Iprotoschema> ;

		
	

		mail:IHttpServiceBase<Interface.Imail>  ;
		admin_mail: IHttpServiceAdminBase<Interface.Imail> ;

		
		 
		mail_sendgrid: IHttpServiceBase<Interface.Imail_sendgrid> ;
		admin_mail_sendgrid: IHttpServiceAdminBase<Interface.Imail_sendgrid>  ;

		 
	

		service_serviceOrchestrator:IHttpServiceBase<Interface.Iservice_serviceOrchestrator>  ;
		admin_service_serviceOrchestrator: IHttpServiceAdminBase<Interface.Iservice_serviceOrchestrator> ;

		
	

		_view:IHttpServiceBase<Interface.I_view>  ;
		admin__view: IHttpServiceAdminBase<Interface.I_view> ;

		
		 
		_view_params: IHttpServiceBase<Interface.I_view_params> ;
		admin__view_params: IHttpServiceAdminBase<Interface.I_view_params>  ;

		 
	

		licence:IHttpServiceBase<Interface.Ilicence>  ;
		admin_licence: IHttpServiceAdminBase<Interface.Ilicence> ;

		
		 
		licence_temporelle: IHttpServiceBase<Interface.Ilicence_temporelle> ;
		admin_licence_temporelle: IHttpServiceAdminBase<Interface.Ilicence_temporelle>  ;

		 
	

		MultilangSendGridTemplate:IHttpServiceBase<Interface.IMultilangSendGridTemplate>  ;
		admin_MultilangSendGridTemplate: IHttpServiceAdminBase<Interface.IMultilangSendGridTemplate> ;

		
	

		application:IHttpServiceBase<Interface.Iapplication>  ;
		admin_application: IHttpServiceAdminBase<Interface.Iapplication> ;

		
		 
		pack_card: IHttpServiceBase<Interface.Ipack_card> ;
		admin_pack_card: IHttpServiceAdminBase<Interface.Ipack_card>  ;

		 
	

		TemplateLodash:IHttpServiceBase<Interface.ITemplateLodash>  ;
		admin_TemplateLodash: IHttpServiceAdminBase<Interface.ITemplateLodash> ;

		
	

		end_client:IHttpServiceBase<Interface.Iend_client>  ;
		admin_end_client: IHttpServiceAdminBase<Interface.Iend_client> ;

		
	

		Request:IHttpServiceBase<Interface.IRequest>  ;
		admin_Request: IHttpServiceAdminBase<Interface.IRequest> ;

		
	

		ftpsConfig:IHttpServiceBase<Interface.IftpsConfig>  ;
		admin_ftpsConfig: IHttpServiceAdminBase<Interface.IftpsConfig> ;

		
	

		application_configuration:IHttpServiceBase<Interface.Iapplication_configuration>  ;
		admin_application_configuration: IHttpServiceAdminBase<Interface.Iapplication_configuration> ;

		
		 
		application_configuration_phoneCard: IHttpServiceBase<Interface.Iapplication_configuration_phoneCard> ;
		admin_application_configuration_phoneCard: IHttpServiceAdminBase<Interface.Iapplication_configuration_phoneCard>  ;

		 
		 
		application_configuration_appCoach: IHttpServiceBase<Interface.Iapplication_configuration_appCoach> ;
		admin_application_configuration_appCoach: IHttpServiceAdminBase<Interface.Iapplication_configuration_appCoach>  ;

		 
		 
		application_configuration_super_admin_mongo: IHttpServiceBase<Interface.Iapplication_configuration_super_admin_mongo> ;
		admin_application_configuration_super_admin_mongo: IHttpServiceAdminBase<Interface.Iapplication_configuration_super_admin_mongo>  ;

		 
		 
		application_configuration_antico: IHttpServiceBase<Interface.Iapplication_configuration_antico> ;
		admin_application_configuration_antico: IHttpServiceAdminBase<Interface.Iapplication_configuration_antico>  ;

		 
		 
		application_configuration_appClient: IHttpServiceBase<Interface.Iapplication_configuration_appClient> ;
		admin_application_configuration_appClient: IHttpServiceAdminBase<Interface.Iapplication_configuration_appClient>  ;

		 
		 
		application_configuration_appApprenant: IHttpServiceBase<Interface.Iapplication_configuration_appApprenant> ;
		admin_application_configuration_appApprenant: IHttpServiceAdminBase<Interface.Iapplication_configuration_appApprenant>  ;

		 
		 
		AppConf_minds_up_admin: IHttpServiceBase<Interface.IAppConf_minds_up_admin> ;
		admin_AppConf_minds_up_admin: IHttpServiceAdminBase<Interface.IAppConf_minds_up_admin>  ;

		 
		 
		application_configuration_reportApp: IHttpServiceBase<Interface.Iapplication_configuration_reportApp> ;
		admin_application_configuration_reportApp: IHttpServiceAdminBase<Interface.Iapplication_configuration_reportApp>  ;

		 
		 
		application_configuration_celio2020Admin: IHttpServiceBase<Interface.Iapplication_configuration_celio2020Admin> ;
		admin_application_configuration_celio2020Admin: IHttpServiceAdminBase<Interface.Iapplication_configuration_celio2020Admin>  ;

		 
		 
		application_configuration_manu_admin: IHttpServiceBase<Interface.Iapplication_configuration_manu_admin> ;
		admin_application_configuration_manu_admin: IHttpServiceAdminBase<Interface.Iapplication_configuration_manu_admin>  ;

		 
		 
		application_configuration_comptoire_or_admin: IHttpServiceBase<Interface.Iapplication_configuration_comptoire_or_admin> ;
		admin_application_configuration_comptoire_or_admin: IHttpServiceAdminBase<Interface.Iapplication_configuration_comptoire_or_admin>  ;

		 
		 
		application_configuration_celiofront: IHttpServiceBase<Interface.Iapplication_configuration_celiofront> ;
		admin_application_configuration_celiofront: IHttpServiceAdminBase<Interface.Iapplication_configuration_celiofront>  ;

		 
		 
		application_configuration_celioback: IHttpServiceBase<Interface.Iapplication_configuration_celioback> ;
		admin_application_configuration_celioback: IHttpServiceAdminBase<Interface.Iapplication_configuration_celioback>  ;

		 
		 
		application_configuration_celioadmin: IHttpServiceBase<Interface.Iapplication_configuration_celioadmin> ;
		admin_application_configuration_celioadmin: IHttpServiceAdminBase<Interface.Iapplication_configuration_celioadmin>  ;

		 
		 
		application_configuration_ferrand: IHttpServiceBase<Interface.Iapplication_configuration_ferrand> ;
		admin_application_configuration_ferrand: IHttpServiceAdminBase<Interface.Iapplication_configuration_ferrand>  ;

		 
		 
		application_configuration_celio: IHttpServiceBase<Interface.Iapplication_configuration_celio> ;
		admin_application_configuration_celio: IHttpServiceAdminBase<Interface.Iapplication_configuration_celio>  ;

		 
		 
		AppConf_minds_up: IHttpServiceBase<Interface.IAppConf_minds_up> ;
		admin_AppConf_minds_up: IHttpServiceAdminBase<Interface.IAppConf_minds_up>  ;

		 
		 
		application_configuration_petit_moulin: IHttpServiceBase<Interface.Iapplication_configuration_petit_moulin> ;
		admin_application_configuration_petit_moulin: IHttpServiceAdminBase<Interface.Iapplication_configuration_petit_moulin>  ;

		 
		 
		application_configuration_petit_moulin_admin: IHttpServiceBase<Interface.Iapplication_configuration_petit_moulin_admin> ;
		admin_application_configuration_petit_moulin_admin: IHttpServiceAdminBase<Interface.Iapplication_configuration_petit_moulin_admin>  ;

		 
		 
		application_configuration_airport_admin: IHttpServiceBase<Interface.Iapplication_configuration_airport_admin> ;
		admin_application_configuration_airport_admin: IHttpServiceAdminBase<Interface.Iapplication_configuration_airport_admin>  ;

		 
		 
		application_configuration_airport: IHttpServiceBase<Interface.Iapplication_configuration_airport> ;
		admin_application_configuration_airport: IHttpServiceAdminBase<Interface.Iapplication_configuration_airport>  ;

		 
		 
		application_configuration_boisdor: IHttpServiceBase<Interface.Iapplication_configuration_boisdor> ;
		admin_application_configuration_boisdor: IHttpServiceAdminBase<Interface.Iapplication_configuration_boisdor>  ;

		 
		 
		application_configuration_r3: IHttpServiceBase<Interface.Iapplication_configuration_r3> ;
		admin_application_configuration_r3: IHttpServiceAdminBase<Interface.Iapplication_configuration_r3>  ;

		 
		 
		application_configuration_boisdor_admin_seller: IHttpServiceBase<Interface.Iapplication_configuration_boisdor_admin_seller> ;
		admin_application_configuration_boisdor_admin_seller: IHttpServiceAdminBase<Interface.Iapplication_configuration_boisdor_admin_seller>  ;

		 
		 
		application_configuration_qbp_admin: IHttpServiceBase<Interface.Iapplication_configuration_qbp_admin> ;
		admin_application_configuration_qbp_admin: IHttpServiceAdminBase<Interface.Iapplication_configuration_qbp_admin>  ;

		 
		 
		application_configuration_qbp_admin_seller: IHttpServiceBase<Interface.Iapplication_configuration_qbp_admin_seller> ;
		admin_application_configuration_qbp_admin_seller: IHttpServiceAdminBase<Interface.Iapplication_configuration_qbp_admin_seller>  ;

		 
		 
		application_configuration_boisdor_admin: IHttpServiceBase<Interface.Iapplication_configuration_boisdor_admin> ;
		admin_application_configuration_boisdor_admin: IHttpServiceAdminBase<Interface.Iapplication_configuration_boisdor_admin>  ;

		 
		 
		application_configuration_qbp: IHttpServiceBase<Interface.Iapplication_configuration_qbp> ;
		admin_application_configuration_qbp: IHttpServiceAdminBase<Interface.Iapplication_configuration_qbp>  ;

		 
		 
		application_configuration_r3_admin_seller: IHttpServiceBase<Interface.Iapplication_configuration_r3_admin_seller> ;
		admin_application_configuration_r3_admin_seller: IHttpServiceAdminBase<Interface.Iapplication_configuration_r3_admin_seller>  ;

		 
		 
		application_configuration_r3_admin: IHttpServiceBase<Interface.Iapplication_configuration_r3_admin> ;
		admin_application_configuration_r3_admin: IHttpServiceAdminBase<Interface.Iapplication_configuration_r3_admin>  ;

		 
		 
		application_configuration_dcbm_static: IHttpServiceBase<Interface.Iapplication_configuration_dcbm_static> ;
		admin_application_configuration_dcbm_static: IHttpServiceAdminBase<Interface.Iapplication_configuration_dcbm_static>  ;

		 
	

		application_instance:IHttpServiceBase<Interface.Iapplication_instance>  ;
		admin_application_instance: IHttpServiceAdminBase<Interface.Iapplication_instance> ;

		
	

		service:IHttpServiceBase<Interface.Iservice>  ;
		admin_service: IHttpServiceAdminBase<Interface.Iservice> ;

		
		 
		service_sso: IHttpServiceBase<Interface.Iservice_sso> ;
		admin_service_sso: IHttpServiceAdminBase<Interface.Iservice_sso>  ;

		 
		 
		service_init: IHttpServiceBase<Interface.Iservice_init> ;
		admin_service_init: IHttpServiceAdminBase<Interface.Iservice_init>  ;

		 
		 
		service_mailtoinfra: IHttpServiceBase<Interface.Iservice_mailtoinfra> ;
		admin_service_mailtoinfra: IHttpServiceAdminBase<Interface.Iservice_mailtoinfra>  ;

		 
		 
		service_licence_token: IHttpServiceBase<Interface.Iservice_licence_token> ;
		admin_service_licence_token: IHttpServiceAdminBase<Interface.Iservice_licence_token>  ;

		 
		 
		service_goshabaGateway: IHttpServiceBase<Interface.Iservice_goshabaGateway> ;
		admin_service_goshabaGateway: IHttpServiceAdminBase<Interface.Iservice_goshabaGateway>  ;

		 
		 
		service_socketIo: IHttpServiceBase<Interface.Iservice_socketIo> ;
		admin_service_socketIo: IHttpServiceAdminBase<Interface.Iservice_socketIo>  ;

		 
		 
		service_supervision: IHttpServiceBase<Interface.Iservice_supervision> ;
		admin_service_supervision: IHttpServiceAdminBase<Interface.Iservice_supervision>  ;

		 
		 
		service_configuration: IHttpServiceBase<Interface.Iservice_configuration> ;
		admin_service_configuration: IHttpServiceAdminBase<Interface.Iservice_configuration>  ;

		 
		 
		service_nginxConfigurator: IHttpServiceBase<Interface.Iservice_nginxConfigurator> ;
		admin_service_nginxConfigurator: IHttpServiceAdminBase<Interface.Iservice_nginxConfigurator>  ;

		 
		 
		service_push_notification: IHttpServiceBase<Interface.Iservice_push_notification> ;
		admin_service_push_notification: IHttpServiceAdminBase<Interface.Iservice_push_notification>  ;

		 
		 
		service_like: IHttpServiceBase<Interface.Iservice_like> ;
		admin_service_like: IHttpServiceAdminBase<Interface.Iservice_like>  ;

		 
		 
		service_dumy_fso: IHttpServiceBase<Interface.Iservice_dumy_fso> ;
		admin_service_dumy_fso: IHttpServiceAdminBase<Interface.Iservice_dumy_fso>  ;

		 
		 
		service_sendGrid: IHttpServiceBase<Interface.Iservice_sendGrid> ;
		admin_service_sendGrid: IHttpServiceAdminBase<Interface.Iservice_sendGrid>  ;

		 
		 
		service_trainingCoursesService: IHttpServiceBase<Interface.Iservice_trainingCoursesService> ;
		admin_service_trainingCoursesService: IHttpServiceAdminBase<Interface.Iservice_trainingCoursesService>  ;

		 
		 
		service_orchestrator: IHttpServiceBase<Interface.Iservice_orchestrator> ;
		admin_service_orchestrator: IHttpServiceAdminBase<Interface.Iservice_orchestrator>  ;

		 
		 
		service_socket_io: IHttpServiceBase<Interface.Iservice_socket_io> ;
		admin_service_socket_io: IHttpServiceAdminBase<Interface.Iservice_socket_io>  ;

		 
		 
		service_tutor: IHttpServiceBase<Interface.Iservice_tutor> ;
		admin_service_tutor: IHttpServiceAdminBase<Interface.Iservice_tutor>  ;

		 
		 
		service_init_js: IHttpServiceBase<Interface.Iservice_init_js> ;
		admin_service_init_js: IHttpServiceAdminBase<Interface.Iservice_init_js>  ;

		 
		 
		service_infra_admin: IHttpServiceBase<Interface.Iservice_infra_admin> ;
		admin_service_infra_admin: IHttpServiceAdminBase<Interface.Iservice_infra_admin>  ;

		 
		 
		mailtoinfra2: IHttpServiceBase<Interface.Imailtoinfra2> ;
		admin_mailtoinfra2: IHttpServiceAdminBase<Interface.Imailtoinfra2>  ;

		 
		 
		service_planned_tasks: IHttpServiceBase<Interface.Iservice_planned_tasks> ;
		admin_service_planned_tasks: IHttpServiceAdminBase<Interface.Iservice_planned_tasks>  ;

		 
		 
		Service_scorm_gateway: IHttpServiceBase<Interface.IService_scorm_gateway> ;
		admin_Service_scorm_gateway: IHttpServiceAdminBase<Interface.IService_scorm_gateway>  ;

		 
		 
		service_nginxMultiConfigurator: IHttpServiceBase<Interface.Iservice_nginxMultiConfigurator> ;
		admin_service_nginxMultiConfigurator: IHttpServiceAdminBase<Interface.Iservice_nginxMultiConfigurator>  ;

		 
		 
		service_client_ftp: IHttpServiceBase<Interface.Iservice_client_ftp> ;
		admin_service_client_ftp: IHttpServiceAdminBase<Interface.Iservice_client_ftp>  ;

		 
		 
		service_polo_celio: IHttpServiceBase<Interface.Iservice_polo_celio> ;
		admin_service_polo_celio: IHttpServiceAdminBase<Interface.Iservice_polo_celio>  ;

		 
		 
		service_fso: IHttpServiceBase<Interface.Iservice_fso> ;
		admin_service_fso: IHttpServiceAdminBase<Interface.Iservice_fso>  ;

		 
		 
		service_pdfrip: IHttpServiceBase<Interface.Iservice_pdfrip> ;
		admin_service_pdfrip: IHttpServiceAdminBase<Interface.Iservice_pdfrip>  ;

		 
		 
		service_signin: IHttpServiceBase<Interface.Iservice_signin> ;
		admin_service_signin: IHttpServiceAdminBase<Interface.Iservice_signin>  ;

		 
		 
		service_mindsUp: IHttpServiceBase<Interface.Iservice_mindsUp> ;
		admin_service_mindsUp: IHttpServiceAdminBase<Interface.Iservice_mindsUp>  ;

		 
		 
		service_webAppConf: IHttpServiceBase<Interface.Iservice_webAppConf> ;
		admin_service_webAppConf: IHttpServiceAdminBase<Interface.Iservice_webAppConf>  ;

		 
		 
		swagger_conv: IHttpServiceBase<Interface.Iswagger_conv> ;
		admin_swagger_conv: IHttpServiceAdminBase<Interface.Iswagger_conv>  ;

		 
		 
		service_mongo: IHttpServiceBase<Interface.Iservice_mongo> ;
		admin_service_mongo: IHttpServiceAdminBase<Interface.Iservice_mongo>  ;

		 
		 
		service_celio_qcm_admin: IHttpServiceBase<Interface.Iservice_celio_qcm_admin> ;
		admin_service_celio_qcm_admin: IHttpServiceAdminBase<Interface.Iservice_celio_qcm_admin>  ;

		 
		 
		service_ferrand: IHttpServiceBase<Interface.Iservice_ferrand> ;
		admin_service_ferrand: IHttpServiceAdminBase<Interface.Iservice_ferrand>  ;

		 
		 
		service_petit_moulin: IHttpServiceBase<Interface.Iservice_petit_moulin> ;
		admin_service_petit_moulin: IHttpServiceAdminBase<Interface.Iservice_petit_moulin>  ;

		 
		 
		service_celio_qcm: IHttpServiceBase<Interface.Iservice_celio_qcm> ;
		admin_service_celio_qcm: IHttpServiceAdminBase<Interface.Iservice_celio_qcm>  ;

		 
		 
		service_comptoireOr: IHttpServiceBase<Interface.Iservice_comptoireOr> ;
		admin_service_comptoireOr: IHttpServiceAdminBase<Interface.Iservice_comptoireOr>  ;

		 
		 
		service_airport: IHttpServiceBase<Interface.Iservice_airport> ;
		admin_service_airport: IHttpServiceAdminBase<Interface.Iservice_airport>  ;

		 
		 
		service_celio_back_task: IHttpServiceBase<Interface.Iservice_celio_back_task> ;
		admin_service_celio_back_task: IHttpServiceAdminBase<Interface.Iservice_celio_back_task>  ;

		 
		 
		service_celio_fid: IHttpServiceBase<Interface.Iservice_celio_fid> ;
		admin_service_celio_fid: IHttpServiceAdminBase<Interface.Iservice_celio_fid>  ;

		 
		 
		dpd_dervice: IHttpServiceBase<Interface.Idpd_dervice> ;
		admin_dpd_dervice: IHttpServiceAdminBase<Interface.Idpd_dervice>  ;

		 
		 
		service_celio_fid_admin: IHttpServiceBase<Interface.Iservice_celio_fid_admin> ;
		admin_service_celio_fid_admin: IHttpServiceAdminBase<Interface.Iservice_celio_fid_admin>  ;

		 
		 
		boisdor_service: IHttpServiceBase<Interface.Iboisdor_service> ;
		admin_boisdor_service: IHttpServiceAdminBase<Interface.Iboisdor_service>  ;

		 
		 
		QBP_service: IHttpServiceBase<Interface.IQBP_service> ;
		admin_QBP_service: IHttpServiceAdminBase<Interface.IQBP_service>  ;

		 
		 
		service_qcbm: IHttpServiceBase<Interface.Iservice_qcbm> ;
		admin_service_qcbm: IHttpServiceAdminBase<Interface.Iservice_qcbm>  ;

		 
		 
		r3_service: IHttpServiceBase<Interface.Ir3_service> ;
		admin_r3_service: IHttpServiceAdminBase<Interface.Ir3_service>  ;

		 
	

		bois_dor_mailer:IHttpServiceBase<Interface.Ibois_dor_mailer>  ;
		admin_bois_dor_mailer: IHttpServiceAdminBase<Interface.Ibois_dor_mailer> ;

		
	
  }

  views:IView_plateform
}