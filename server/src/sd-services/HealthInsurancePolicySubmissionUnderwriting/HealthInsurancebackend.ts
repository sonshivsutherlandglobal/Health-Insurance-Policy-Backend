// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import cookieParser from 'cookie-parser'; //_splitter_
import { dirname } from 'path'; //_splitter_
import { fileURLToPath } from 'url'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
//append_imports_end
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export class HealthInsurancebackend {
  private sdService = new SDBaseService();
  private tracerService = new TracerService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;

  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    globalTimers
  ) {
    this.serviceName = 'HealthInsurancebackend';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new HealthInsurancebackend(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    //append_listeners
  }

  async mountTimers() {
    //appendnew_flow_HealthInsurancebackend_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: HealthInsurancebackend');
    //appendnew_flow_HealthInsurancebackend_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: HealthInsurancebackend');

    this.app['post'](
      `${this.serviceBasePath}/createApplication`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.prepareApplicationData(bh, parentSpanInst);
          //appendnew_next_sd_dXP4NlvlLDTjJzHC
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_dXP4NlvlLDTjJzHC');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['put'](
      `${this.serviceBasePath}/updateApplication`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.prepareUpdateData(bh, parentSpanInst);
          //appendnew_next_sd_8PPcrpb3cyVmR3bi
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_8PPcrpb3cyVmR3bi');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/submitApplication`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.prepareSubmitData(bh, parentSpanInst);
          //appendnew_next_sd_NzOCNeYaH2bAJHAW
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_NzOCNeYaH2bAJHAW');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/getApplicationDetails/:applicationId`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.prepareSelectQuery(bh, parentSpanInst);
          //appendnew_next_sd_NsGMWMZw0L9T7I5K
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_NsGMWMZw0L9T7I5K');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/generatePolicy`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.preparePolicyGeneration(bh, parentSpanInst);
          //appendnew_next_sd_YUylDUd5JM4wOVAy
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_YUylDUd5JM4wOVAy');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_HealthInsurancebackend_HttpIn
  }
  //   service flows_HealthInsurancebackend

  //appendnew_flow_HealthInsurancebackend_start

  async prepareApplicationData(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'prepareApplicationData',
      parentSpanInst
    );
    try {
      const payload = bh.input.body;

      // ========================================
      // Mandatory Validations
      // ========================================

      // Applicant Name
      if (!payload.applicant_name || payload.applicant_name.trim() === '') {
        throw new Error('Applicant Name is required');
      }

      // DOB
      if (!payload.dob) {
        throw new Error('Date of Birth is required');
      }

      // Age
      if (!payload.age) {
        throw new Error('Age is required');
      }

      if (payload.age < 18 || payload.age > 65) {
        throw new Error('Age must be between 18 and 65');
      }

      // Mobile
      const mobileRegex = /^[0-9]{10}$/;

      if (!payload.mobile || !mobileRegex.test(String(payload.mobile))) {
        throw new Error('Mobile number must be exactly 10 digits');
      }

      // Email
      if (
        !payload.email ||
        payload.email.indexOf('@') === -1 ||
        payload.email.indexOf('.') === -1
      ) {
        throw new Error('Invalid email format');
      }

      // Plan Type
      if (!payload.plan_type) {
        throw new Error('Plan Type is required');
      }

      // Policy Term
      if (!payload.policy_term) {
        throw new Error('Policy Term is required');
      }

      // Sum Insured
      if (!payload.sum_insured || payload.sum_insured <= 0) {
        throw new Error('Sum Insured must be greater than 0');
      }

      // ========================================
      // Prepare Payload For Data Service
      // ========================================

      bh.local.applicationData = {
        policy_applications: {
          applicant_name: payload.applicant_name,
          dob: payload.dob,
          age: payload.age,
          gender: payload.gender || null,
          mobile: payload.mobile,
          email: payload.email,
          address: payload.address || null,
          plan_type: payload.plan_type,
          sum_insured: payload.sum_insured,
          policy_term: payload.policy_term,
          medical_conditions: payload.medical_conditions || {},
          status: 'DRAFT',
          assigned_role: 'CUSTOMER',
        },
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.createapplicationcall(bh, parentSpanInst);
      //appendnew_next_prepareApplicationData
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2YSB185LaJroT1j9',
        spanInst,
        'prepareApplicationData'
      );
    }
  }

  async createapplicationcall(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: 'https://dbservice.neutrinos-apps.com/api/dm/db/policy_applications/create',
        timeout: 30000,
        method: 'post',
        headers: {},
        followRedirects: true,
        cookies: undefined,
        authType: undefined,
        body: bh.local.applicationData,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
        useQuerystring: false,
      };
      requestOptions.rejectUnauthorized = false;
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.local.applicationDataResponse = responseMsg;
      bh = await this.buildResponse(bh, parentSpanInst);
      //appendnew_next_createapplicationcall
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_JtJQhEYLtCtoTjtJ');
    }
  }

  async buildResponse(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'buildResponse',
      parentSpanInst
    );
    try {
      bh.local.response = {
        success: true,
        applicationId: bh.local.applicationDataResponse.payload.application_id,
        status: bh.local.applicationDataResponse.payload.status,
        assignedRole: bh.local.applicationDataResponse.payload.assigned_role,
        message: 'Application saved successfully',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.createapplicationres(bh, parentSpanInst);
      //appendnew_next_buildResponse
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_opRFOl4aZ0qvRJo6',
        spanInst,
        'buildResponse'
      );
    }
  }

  async createapplicationres(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ZuiFiHLNdJZU8x7p');
    }
  }

  async prepareUpdateData(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'prepareUpdateData',
      parentSpanInst
    );
    try {
      const payload = bh.input.body;

      if (!payload.application_id) {
        throw new Error('Application Id is required');
      }

      bh.local.updatePayload = {
        policy_applications: {
          application_id: payload.application_id,
          applicant_name: payload.applicant_name,
          dob: payload.dob,
          age: payload.age,
          gender: payload.gender || null,
          mobile: payload.mobile,
          email: payload.email,
          address: payload.address || null,
          plan_type: payload.plan_type,
          sum_insured: payload.sum_insured,
          policy_term: payload.policy_term,
          medical_conditions: payload.medical_conditions || {},
          updated_at: new Date(),
        },
      };

      console.log(
        'Update Payload:',
        JSON.stringify(bh.local.updatePayload, null, 2)
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.updateappliactionCall(bh, parentSpanInst);
      //appendnew_next_prepareUpdateData
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2V6Bx6JeaIUzyk5c',
        spanInst,
        'prepareUpdateData'
      );
    }
  }

  async updateappliactionCall(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: 'https://dbservice.neutrinos-apps.com/api/dm/db/policy_applications/update-by-id',
        timeout: 30000,
        method: 'post',
        headers: {},
        followRedirects: true,
        cookies: undefined,
        authType: undefined,
        body: bh.local.updatePayload,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
        useQuerystring: false,
      };
      requestOptions.rejectUnauthorized = false;
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.local.updateApplicationResponse = responseMsg;
      bh = await this.buildUpdateResponse(bh, parentSpanInst);
      //appendnew_next_updateappliactionCall
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_zSr9xA37huvwB8Bs');
    }
  }

  async buildUpdateResponse(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'buildUpdateResponse',
      parentSpanInst
    );
    try {
      console.log(
        'UPDATE RESPONSE =>',
        JSON.stringify(bh.local.updateApplicationResponse, null, 2)
      );

      if (
        !bh.local.updateApplicationResponse ||
        !bh.local.updateApplicationResponse.payload ||
        !bh.local.updateApplicationResponse.payload.application_id
      ) {
        throw new Error('Application not found or cannot be updated');
      }

      bh.local.response = {
        success: true,
        applicationId:
          bh.local.updateApplicationResponse.payload.application_id,
        message: 'Application updated successfully',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.updateApplicationres(bh, parentSpanInst);
      //appendnew_next_buildUpdateResponse
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VL2LRYShBVNogekH',
        spanInst,
        'buildUpdateResponse'
      );
    }
  }

  async updateApplicationres(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_EyMtp6UMQ4tJewsF');
    }
  }

  async prepareSubmitData(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'prepareSubmitData',
      parentSpanInst
    );
    try {
      const payload = bh.input.body;

      if (!payload.application_id) {
        throw new Error('Application Id is required');
      }

      bh.local.submitPayload = {
        policy_applications: {
          application_id: payload.application_id,
          status: 'SUBMITTED',
          assigned_role: 'CASE_MANAGER',
          updated_at: new Date(),
        },
      };

      console.log(
        'Submit Payload:',
        JSON.stringify(bh.local.submitPayload, null, 2)
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.submitappliactionCall(bh, parentSpanInst);
      //appendnew_next_prepareSubmitData
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mfsO5GEzxKFRsapv',
        spanInst,
        'prepareSubmitData'
      );
    }
  }

  async submitappliactionCall(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: 'https://dbservice.neutrinos-apps.com/api/dm/db/policy_applications/update-by-id',
        timeout: 30000,
        method: 'post',
        headers: {},
        followRedirects: true,
        cookies: undefined,
        authType: undefined,
        body: bh.local.submitPayload,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
        useQuerystring: false,
      };
      requestOptions.rejectUnauthorized = false;
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.local.submitApplicationResponse = responseMsg;
      bh = await this.prepareAuditQuery(bh, parentSpanInst);
      //appendnew_next_submitappliactionCall
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_YES6eHzzS1j0xMs7');
    }
  }

  async prepareAuditQuery(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'prepareAuditQuery',
      parentSpanInst
    );
    try {
      console.log(
        'SUBMIT RESPONSE =>',
        JSON.stringify(bh.local.submitApplicationResponse, null, 2)
      );

      if (
        !bh.local.submitApplicationResponse ||
        !bh.local.submitApplicationResponse.payload ||
        !bh.local.submitApplicationResponse.payload.application_id
      ) {
        throw new Error('Application not found or already submitted');
      }

      const applicationId =
        bh.local.submitApplicationResponse.payload.application_id;

      bh.local.auditPayload = {
        policy_workflow_audit: {
          application_id: applicationId,
          previous_status: 'DRAFT',
          current_status: 'SUBMITTED',
          action_role: 'CUSTOMER',
          remarks: 'Application Submitted',
        },
      };

      console.log(
        'Audit Payload:',
        JSON.stringify(bh.local.auditPayload, null, 2)
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.submitappliactionCallAudit(bh, parentSpanInst);
      //appendnew_next_prepareAuditQuery
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vy6arNyI1u7hWYJn',
        spanInst,
        'prepareAuditQuery'
      );
    }
  }

  async submitappliactionCallAudit(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: 'https://dbservice.neutrinos-apps.com/api/dm/db/policy_workflow_audit/create',
        timeout: 30000,
        method: 'post',
        headers: {},
        followRedirects: true,
        cookies: undefined,
        authType: undefined,
        body: bh.local.auditPayload,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
        useQuerystring: false,
      };
      requestOptions.rejectUnauthorized = false;
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.local.auditResponse = responseMsg;
      bh = await this.submitApplicationResponse(bh, parentSpanInst);
      //appendnew_next_submitappliactionCallAudit
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ly0AOGIljFPmcURZ');
    }
  }

  async submitApplicationResponse(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'submitApplicationResponse',
      parentSpanInst
    );
    try {
      bh.local.response = {
        success: true,
        applicationId:
          bh.local.submitApplicationResponse.payload.application_id,
        status: 'SUBMITTED',
        assignedRole: 'CASE_MANAGER',
        message: 'Application submitted successfully',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.submitApplicationRes(bh, parentSpanInst);
      //appendnew_next_submitApplicationResponse
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_p0L5np3dsg2KPLbl',
        spanInst,
        'submitApplicationResponse'
      );
    }
  }

  async submitApplicationRes(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_qiMx03S8ASLsUP0H');
    }
  }

  async prepareSelectQuery(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'prepareSelectQuery',
      parentSpanInst
    );
    try {
      const applicationId = bh.input.params.applicationId;

      if (!applicationId) {
        throw new Error('Application Id is required');
      }

      bh.local.findPayload = {
        filter: {
          application_id: applicationId,
        },
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getappliactiondetailsCall(bh, parentSpanInst);
      //appendnew_next_prepareSelectQuery
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tKZlK0W1JObXvFMx',
        spanInst,
        'prepareSelectQuery'
      );
    }
  }

  async getappliactiondetailsCall(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: 'https://dbservice.neutrinos-apps.com/api/dm/db/policy_applications/find-by-id',
        timeout: 30000,
        method: 'post',
        headers: {},
        followRedirects: true,
        cookies: undefined,
        authType: undefined,
        body: bh.local.findPayload,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
        useQuerystring: false,
      };
      requestOptions.rejectUnauthorized = false;
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.local.applicationResponse = responseMsg;
      bh = await this.buildapplicationResponse(bh, parentSpanInst);
      //appendnew_next_getappliactiondetailsCall
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ZAzMVOU7R2JnylaW');
    }
  }

  async buildapplicationResponse(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'buildapplicationResponse',
      parentSpanInst
    );
    try {
      if (
        !bh.local.applicationResponse ||
        !bh.local.applicationResponse.payload
      ) {
        throw new Error('Application not found');
      }

      bh.local.response = {
        success: true,
        data: bh.local.applicationResponse.payload,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.getApplicationDetailsRes(bh, parentSpanInst);
      //appendnew_next_buildapplicationResponse
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uG5Mq3kkZNZce85f',
        spanInst,
        'buildapplicationResponse'
      );
    }
  }

  async getApplicationDetailsRes(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_FYyasumf6jKsjj4Y');
    }
  }

  async preparePolicyGeneration(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'preparePolicyGeneration',
      parentSpanInst
    );
    try {
      const payload = bh.input.body;

      if (!payload.application_id) {
        throw new Error('Application Id is required');
      }

      bh.local.findPayload = {
        filter: {
          application_id: payload.application_id,
        },
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.genratepolicyfindapplicationcall(bh, parentSpanInst);
      //appendnew_next_preparePolicyGeneration
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_94eOLkj0PgFoVeqw',
        spanInst,
        'preparePolicyGeneration'
      );
    }
  }

  async genratepolicyfindapplicationcall(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: 'https://dbservice.neutrinos-apps.com/api/dm/db/policy_applications/find-by-id',
        timeout: 30000,
        method: 'post',
        headers: {},
        followRedirects: true,
        cookies: undefined,
        authType: undefined,
        body: bh.local.findPayload,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
        useQuerystring: false,
      };
      requestOptions.rejectUnauthorized = false;
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.local.applicationResponse = responseMsg;
      bh = await this.preparePolicyInsert(bh, parentSpanInst);
      //appendnew_next_genratepolicyfindapplicationcall
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_4vVM6uN3BtxT8xmc');
    }
  }

  async preparePolicyInsert(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'preparePolicyInsert',
      parentSpanInst
    );
    try {
      if (
        !bh.local.applicationResponse ||
        !bh.local.applicationResponse.payload
      ) {
        throw new Error('Application not found');
      }

      const app = bh.local.applicationResponse.payload;

      // Prevent duplicate generation
      if (app.status === 'POLICY_ISSUED') {
        throw new Error('Policy already generated for this application');
      }

      // Premium validation
      if (app.final_premium === null || app.final_premium === undefined) {
        throw new Error('Final premium is not calculated');
      }

      // Status validation
      if (
        app.status === 'DRAFT' ||
        app.status === 'NEW'
      ) {
        throw new Error('Application is not eligible for policy generation');
      }

      const policyNumber = 'POL' + Date.now();

      bh.local.policyNumber = policyNumber;

      bh.local.policyPayload = {
        policy_master: {
          policy_number: policyNumber,
          application_id: app.application_id,
          applicant_name: app.applicant_name,
          plan_type: app.plan_type,
          policy_term: Number(app.policy_term),
          sum_insured: Number(app.sum_insured),
          final_premium: Number(app.final_premium),
          issue_date: new Date(),
          status: 'POLICY_ISSUED',
        },
      };

      console.log(
        'POLICY PAYLOAD =>',
        JSON.stringify(bh.local.policyPayload, null, 2)
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.genratepolicycreatecall(bh, parentSpanInst);
      //appendnew_next_preparePolicyInsert
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6BOp4CaBHrYiJ2P6',
        spanInst,
        'preparePolicyInsert'
      );
    }
  }

  async genratepolicycreatecall(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: 'https://dbservice.neutrinos-apps.com/api/dm/db/policy_master/create',
        timeout: 30000,
        method: 'post',
        headers: {},
        followRedirects: true,
        cookies: undefined,
        authType: undefined,
        body: bh.local.policyPayload,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
        useQuerystring: false,
      };
      requestOptions.rejectUnauthorized = false;
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.local.policyResponse = responseMsg;
      bh = await this.prepareApplicationUpdate(bh, parentSpanInst);
      //appendnew_next_genratepolicycreatecall
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7p6voqbz7pdv0Usq');
    }
  }

  async prepareApplicationUpdate(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'prepareApplicationUpdate',
      parentSpanInst
    );
    try {
      const app = bh.local.applicationResponse.payload;

      bh.local.applicationUpdatePayload = {
        policy_applications: {
          application_id: app.application_id,
          applicant_name: app.applicant_name,
          dob: app.dob,
          age: Number(app.age),
          gender: app.gender,
          mobile: app.mobile,
          email: app.email,
          address: app.address,
          plan_type: app.plan_type,
          sum_insured: Number(app.sum_insured),
          policy_term: Number(app.policy_term),
          medical_conditions: app.medical_conditions,
          status: 'POLICY_ISSUED',
          assigned_role: 'CLOSED',
          risk_score: Number(app.risk_score || 0),
          base_premium: Number(app.base_premium),
          discount_percentage: Number(app.discount_percentage),
          loading_percentage: Number(app.loading_percentage),
          final_premium: Number(app.final_premium),
          case_manager_remarks: app.case_manager_remarks,
          underwriter_remarks: app.underwriter_remarks,
          updated_at: new Date(),
        },
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.genratepolicyupdateapplicationcall(bh, parentSpanInst);
      //appendnew_next_prepareApplicationUpdate
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uCOe5jsikPnn4vZ7',
        spanInst,
        'prepareApplicationUpdate'
      );
    }
  }

  async genratepolicyupdateapplicationcall(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: 'https://dbservice.neutrinos-apps.com/api/dm/db/policy_applications/update-by-id',
        timeout: 30000,
        method: 'post',
        headers: {},
        followRedirects: true,
        cookies: undefined,
        authType: undefined,
        body: bh.local.applicationUpdatePayload,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
        useQuerystring: false,
      };
      requestOptions.rejectUnauthorized = false;
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.local.applicationUpdateResponse = responseMsg;
      bh = await this.prepareAuditInsert(bh, parentSpanInst);
      //appendnew_next_genratepolicyupdateapplicationcall
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_zayXvlgMoZJNzPhq');
    }
  }

  async prepareAuditInsert(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'prepareAuditInsert',
      parentSpanInst
    );
    try {
      const app = bh.local.applicationResponse.payload;

      bh.local.auditPayload = {
        policy_workflow_audit: {
          application_id: app.application_id,
          previous_status: app.status,
          current_status: 'POLICY_ISSUED',
          action_role: 'UNDERWRITER',
          remarks: 'Policy Generated',
        },
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.genratepolicyauditCall(bh, parentSpanInst);
      //appendnew_next_prepareAuditInsert
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PdgSIWJIUJeOWGuC',
        spanInst,
        'prepareAuditInsert'
      );
    }
  }

  async genratepolicyauditCall(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: 'https://dbservice.neutrinos-apps.com/api/dm/db/policy_workflow_audit/create',
        timeout: 30000,
        method: 'post',
        headers: {},
        followRedirects: true,
        cookies: undefined,
        authType: undefined,
        body: bh.local.auditPayload,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
        useQuerystring: false,
      };
      requestOptions.rejectUnauthorized = false;
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.local.auditResponse = responseMsg;
      bh = await this.genratePolicyResponse(bh, parentSpanInst);
      //appendnew_next_genratepolicyauditCall
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Pcdc7QDwnkIqWtfX');
    }
  }

  async genratePolicyResponse(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'genratePolicyResponse',
      parentSpanInst
    );
    try {
      bh.local.response = {
        success: true,
        applicationId: bh.local.applicationResponse.payload.application_id,
        policyNumber: bh.local.policyNumber,
        status: 'POLICY_ISSUED',
        message: 'Policy generated successfully',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.genratepolicyhttpoutres(bh, parentSpanInst);
      //appendnew_next_genratePolicyResponse
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_F4byEtm6yT10aaR8',
        spanInst,
        'genratePolicyResponse'
      );
    }
  }

  async genratepolicyhttpoutres(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_auT3bSQJWsVJirbf');
    }
  }

  async sd_pSDJooX4y7gluOyq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_pSDJooX4y7gluOyq',
      parentSpanInst
    );
    try {
      let message = 'Failed to create application';
      let statusCode = 500;

      if (bh.error) {
        message = bh.error.message || bh.error.toString() || message;

        // Validation Errors
        if (
          message.includes('Applicant Name') ||
          message.includes('Date of Birth') ||
          message.includes('Age') ||
          message.includes('Mobile') ||
          message.includes('Email') ||
          message.includes('Plan Type') ||
          message.includes('Policy Term') ||
          message.includes('Sum Insured')
        ) {
          statusCode = 400;
        }

        // HTTP / Integration Errors
        else if (message.includes('404')) {
          message = 'Data service endpoint not found';
          statusCode = 502;
        } else if (
          message.includes('ECONNREFUSED') ||
          message.includes('connect ECONNREFUSED')
        ) {
          message = 'Data service is unavailable';
          statusCode = 503;
        } else if (
          message.includes('Response code') ||
          message.includes('Bad Request') ||
          message.includes('must be object')
        ) {
          message = 'Invalid request sent to data service';
          statusCode = 400;
        }
      }

      bh.local.statusCode = statusCode;

      bh.local.apiResponse = {
        success: false,
        api: 'createApplication',
        message: message,
      };

      console.error('CREATE APPLICATION ERROR:', bh.error);
      this.tracerService.sendData(spanInst, bh);
      await this.sd_AAusezAaNvxktklF(bh, parentSpanInst);
      //appendnew_next_sd_pSDJooX4y7gluOyq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pSDJooX4y7gluOyq',
        spanInst,
        'sd_pSDJooX4y7gluOyq'
      );
    }
  }

  async sd_AAusezAaNvxktklF(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.statusCode).send(bh.local.apiResponse);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_AAusezAaNvxktklF');
    }
  }

  async sd_JkMCJvEMrqlkxIYP(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_JkMCJvEMrqlkxIYP',
      parentSpanInst
    );
    try {
      let message = 'Failed to update application';
      let statusCode = 500;

      if (bh.error) {
        message = bh.error.message || bh.error.toString() || message;

        // Validation Errors
        if (
          message.includes('Application Id') ||
          message.includes('Application not found')
        ) {
          statusCode = 400;
        }

        // HTTP / Integration Errors
        else if (message.includes('404')) {
          message = 'Data service endpoint not found';
          statusCode = 502;
        } else if (
          message.includes('ECONNREFUSED') ||
          message.includes('connect ECONNREFUSED')
        ) {
          message = 'Data service is unavailable';
          statusCode = 503;
        } else if (
          message.includes('Response code') ||
          message.includes('Bad Request') ||
          message.includes('must be object')
        ) {
          message = 'Invalid request sent to data service';
          statusCode = 400;
        }
      }

      bh.local.statusCode = statusCode;

      bh.local.apiResponse = {
        success: false,
        api: 'updateApplication',
        message: message,
      };

      console.error('UPDATE APPLICATION ERROR:', bh.error);
      this.tracerService.sendData(spanInst, bh);
      await this.sd_d4DbuvT7f2FN1e9K(bh, parentSpanInst);
      //appendnew_next_sd_JkMCJvEMrqlkxIYP
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JkMCJvEMrqlkxIYP',
        spanInst,
        'sd_JkMCJvEMrqlkxIYP'
      );
    }
  }

  async sd_d4DbuvT7f2FN1e9K(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.statusCode).send(bh.local.apiResponse);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_d4DbuvT7f2FN1e9K');
    }
  }

  async sd_aIFBYh5cZfpiNRoy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_aIFBYh5cZfpiNRoy',
      parentSpanInst
    );
    try {
      let message = 'Failed to submit application';
      let statusCode = 500;

      if (bh.error) {
        message = bh.error.message || bh.error.toString() || message;

        // Validation Errors
        if (
          message.includes('Application Id') ||
          message.includes('Application not found')
        ) {
          statusCode = 400;
        }

        // Endpoint Not Found
        else if (message.includes('404')) {
          message = 'Data service endpoint not found';
          statusCode = 502;
        }

        // Service Down
        else if (
          message.includes('ECONNREFUSED') ||
          message.includes('connect ECONNREFUSED')
        ) {
          message = 'Data service is unavailable';
          statusCode = 503;
        }

        // Invalid Payload
        else if (
          message.includes('Response code') ||
          message.includes('Bad Request') ||
          message.includes('must be object')
        ) {
          message = 'Invalid request sent to data service';
          statusCode = 400;
        }

        // Internal Data Service Error
        else if (
          message.includes('500') ||
          message.includes('Internal Server Error')
        ) {
          message = 'Data service processing failed';
          statusCode = 500;
        }
      }

      bh.local.statusCode = statusCode;

      bh.local.apiResponse = {
        success: false,
        api: 'submitApplication',
        message: message,
      };

      console.error('SUBMIT APPLICATION ERROR:', bh.error);
      this.tracerService.sendData(spanInst, bh);
      await this.sd_NQhyDhaMJ6Pn2xGg(bh, parentSpanInst);
      //appendnew_next_sd_aIFBYh5cZfpiNRoy
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_aIFBYh5cZfpiNRoy',
        spanInst,
        'sd_aIFBYh5cZfpiNRoy'
      );
    }
  }

  async sd_NQhyDhaMJ6Pn2xGg(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.statusCode).send(bh.local.apiResponse);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NQhyDhaMJ6Pn2xGg');
    }
  }

  async sd_YnJC2DWOemxWwLpS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_YnJC2DWOemxWwLpS',
      parentSpanInst
    );
    try {
      let message = 'Failed to fetch application details';
      let statusCode = 500;

      if (bh.error) {
        message = bh.error.message || bh.error.toString() || message;

        if (
          message.includes('Application Id') ||
          message.includes('Application not found')
        ) {
          statusCode = 404;
        } else if (message.includes('404')) {
          message = 'Data service endpoint not found';
          statusCode = 502;
        } else if (
          message.includes('ECONNREFUSED') ||
          message.includes('connect ECONNREFUSED')
        ) {
          message = 'Data service is unavailable';
          statusCode = 503;
        } else if (
          message.includes('Response code') ||
          message.includes('Bad Request') ||
          message.includes('must be object')
        ) {
          message = 'Invalid request sent to data service';
          statusCode = 400;
        }
      }

      bh.local.statusCode = statusCode;

      bh.local.apiResponse = {
        success: false,
        api: 'getApplicationDetails',
        message: message,
      };

      console.error('GET APPLICATION DETAILS ERROR:', bh.error);
      this.tracerService.sendData(spanInst, bh);
      await this.sd_4pt1brHEbT04QS7R(bh, parentSpanInst);
      //appendnew_next_sd_YnJC2DWOemxWwLpS
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YnJC2DWOemxWwLpS',
        spanInst,
        'sd_YnJC2DWOemxWwLpS'
      );
    }
  }

  async sd_4pt1brHEbT04QS7R(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.statusCode).send(bh.local.apiResponse);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_4pt1brHEbT04QS7R');
    }
  }

  async sd_YMrSyw1mzYuAFHCp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_YMrSyw1mzYuAFHCp',
      parentSpanInst
    );
    try {
      let message = 'Failed to generate policy';
      let statusCode = 500;

      if (bh.error) {
        message = bh.error.message || bh.error.toString() || message;

        if (
          message.includes('Application Id') ||
          message.includes('Application not found') ||
          message.includes('Policy already generated') ||
          message.includes('Final premium is not calculated') ||
          message.includes('eligible for policy generation')
        ) {
          statusCode = 400;
        } else if (message.includes('404')) {
          message = 'Data service endpoint not found';
          statusCode = 502;
        } else if (
          message.includes('ECONNREFUSED') ||
          message.includes('connect ECONNREFUSED')
        ) {
          message = 'Data service is unavailable';
          statusCode = 503;
        } else if (
          message.includes('Response code') ||
          message.includes('Bad Request') ||
          message.includes('must be object')
        ) {
          message = 'Invalid request sent to data service';
          statusCode = 400;
        }
      }

      bh.local.statusCode = statusCode;

      bh.local.apiResponse = {
        success: false,
        api: 'generatePolicy',
        message: message,
      };

      console.error('GENERATE POLICY ERROR:', bh.error);
      this.tracerService.sendData(spanInst, bh);
      await this.sd_V7jRz7kCow3j8C4v(bh, parentSpanInst);
      //appendnew_next_sd_YMrSyw1mzYuAFHCp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YMrSyw1mzYuAFHCp',
        spanInst,
        'sd_YMrSyw1mzYuAFHCp'
      );
    }
  }

  async sd_V7jRz7kCow3j8C4v(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.statusCode).send(bh.local.apiResponse);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_V7jRz7kCow3j8C4v');
    }
  }

  //appendnew_node

  // error_handler_slot
  private async errorHandler(
    bh,
    e,
    src,
    parentSpanInst?,
    functionName?
  ): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    bh.errorFunName = functionName;
    this.tracerService.sendData(parentSpanInst, bh, true);
    if (
      false ||
      (await this.sd_Hb7GIM2hZz0SJnqZ(bh, parentSpanInst)) ||
      (await this.sd_uloPd8kpxaAxUKgW(bh, parentSpanInst)) ||
      (await this.sd_568HzBf5iOQp3fDH(bh, parentSpanInst)) ||
      (await this.sd_jfycptopjtwkgA3V(bh, parentSpanInst)) ||
      (await this.sd_VNWgu7SmNEIxmO7v(bh, parentSpanInst))
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  async sd_Hb7GIM2hZz0SJnqZ(bh, parentSpanInst) {
    const nodes = [
      'sd_dXP4NlvlLDTjJzHC',
      'sd_ZuiFiHLNdJZU8x7p',
      'sd_2YSB185LaJroT1j9',
      'sd_opRFOl4aZ0qvRJo6',
      'sd_JtJQhEYLtCtoTjtJ',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_pSDJooX4y7gluOyq(bh, parentSpanInst);
      //appendnew_next_sd_Hb7GIM2hZz0SJnqZ
      return true;
    }
    return false;
  }
  async sd_uloPd8kpxaAxUKgW(bh, parentSpanInst) {
    const nodes = [
      'sd_8PPcrpb3cyVmR3bi',
      'sd_EyMtp6UMQ4tJewsF',
      'sd_2V6Bx6JeaIUzyk5c',
      'sd_VL2LRYShBVNogekH',
      'sd_zSr9xA37huvwB8Bs',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_JkMCJvEMrqlkxIYP(bh, parentSpanInst);
      //appendnew_next_sd_uloPd8kpxaAxUKgW
      return true;
    }
    return false;
  }
  async sd_568HzBf5iOQp3fDH(bh, parentSpanInst) {
    const nodes = [
      'sd_NzOCNeYaH2bAJHAW',
      'sd_qiMx03S8ASLsUP0H',
      'sd_mfsO5GEzxKFRsapv',
      'sd_vy6arNyI1u7hWYJn',
      'sd_p0L5np3dsg2KPLbl',
      'sd_YES6eHzzS1j0xMs7',
      'sd_ly0AOGIljFPmcURZ',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_aIFBYh5cZfpiNRoy(bh, parentSpanInst);
      //appendnew_next_sd_568HzBf5iOQp3fDH
      return true;
    }
    return false;
  }
  async sd_jfycptopjtwkgA3V(bh, parentSpanInst) {
    const nodes = [
      'sd_NsGMWMZw0L9T7I5K',
      'sd_FYyasumf6jKsjj4Y',
      'sd_tKZlK0W1JObXvFMx',
      'sd_uG5Mq3kkZNZce85f',
      'sd_ZAzMVOU7R2JnylaW',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_YnJC2DWOemxWwLpS(bh, parentSpanInst);
      //appendnew_next_sd_jfycptopjtwkgA3V
      return true;
    }
    return false;
  }
  async sd_VNWgu7SmNEIxmO7v(bh, parentSpanInst) {
    const nodes = [
      'sd_YUylDUd5JM4wOVAy',
      'sd_auT3bSQJWsVJirbf',
      'sd_94eOLkj0PgFoVeqw',
      'sd_uCOe5jsikPnn4vZ7',
      'sd_F4byEtm6yT10aaR8',
      'sd_6BOp4CaBHrYiJ2P6',
      'sd_PdgSIWJIUJeOWGuC',
      'sd_4vVM6uN3BtxT8xmc',
      'sd_7p6voqbz7pdv0Usq',
      'sd_zayXvlgMoZJNzPhq',
      'sd_Pcdc7QDwnkIqWtfX',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_YMrSyw1mzYuAFHCp(bh, parentSpanInst);
      //appendnew_next_sd_VNWgu7SmNEIxmO7v
      return true;
    }
    return false;
  }
  //appendnew_flow_HealthInsurancebackend_Catch
}
