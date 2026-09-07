// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import cookieParser from 'cookie-parser'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import { dirname } from 'path'; //_splitter_
import * as url from 'url'; //_splitter_
import { fileURLToPath } from 'url'; //_splitter_
import * as settings from '../config/config'; //_splitter_
import { Middleware } from '../middleware/Middleware'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { TracerService } from '../services/TracerService'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import * as sd_hsr1gYGwGoCS4Jyk from './idsutil'; //_splitter_
//append_imports_end
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export class ids {
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
    this.serviceName = 'ids';
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
      instance = new ids(
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
    //appendnew_flow_ids_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: ids');
    let mw_hrefstart: Middleware = new Middleware(
      this.serviceName,
      'hrefstart',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          let parentSpanInst = null;
          bh = await this.sd_CfO5bVgwOJDED0BR(bh, parentSpanInst);
          //appendnew_next_sd_4tf7ruROflHsMXdK
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_4tf7ruROflHsMXdK');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['hrefstart'] = mw_hrefstart;
    let mw_Authorize: Middleware = new Middleware(
      this.serviceName,
      'Authorize',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          let parentSpanInst = null;
          bh = await this.sd_UXx410FBOyZvsk9v(bh, parentSpanInst);
          //appendnew_next_sd_BhHR9lBRCRX6SQDQ
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_BhHR9lBRCRX6SQDQ');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['Authorize'] = mw_Authorize;
    //appendnew_flow_ids_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: ids');

    this.app['get'](
      `${this.serviceBasePath}/login`,
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
          bh = await this.sd_m4SpvImIGO65SY62(bh, parentSpanInst);
          //appendnew_next_sd_5rEKtw4NCVKb9rj8
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_5rEKtw4NCVKb9rj8');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/login/cb`,
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
          bh = await this.sd_8pivkGL5pGeeyX7n(bh, parentSpanInst);
          //appendnew_next_sd_kiSMfjCqW3ygpyD3
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_kiSMfjCqW3ygpyD3');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/user/info`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
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
          bh = await this.sd_HvJUUk0IURUQdFZ6(bh, parentSpanInst);
          //appendnew_next_sd_d3SgbI8uITIQoilp
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_d3SgbI8uITIQoilp');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/logout`,
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
          bh = await this.sd_EbVrHYQ8SqYwrRX9(bh, parentSpanInst);
          //appendnew_next_sd_1MH4jedpiiS1ES3A
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_1MH4jedpiiS1ES3A');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/logout/cb`,
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
          bh = await this.sd_gcxLJnmeuAqosXey(bh, parentSpanInst);
          //appendnew_next_sd_Ct24ACq3jw9SuPB4
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Ct24ACq3jw9SuPB4');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_ids_HttpIn
  }
  //   service flows_ids

  //appendnew_flow_ids_start

  async sd_m4SpvImIGO65SY62(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_m4SpvImIGO65SY62',
      parentSpanInst
    );
    try {
      bh.local.idsConfigured = false;
      if (
        settings.default.hasOwnProperty('ids') &&
        settings.default['ids'].hasOwnProperty('client_id') &&
        settings.default['ids'].hasOwnProperty('client_secret')
      ) {
        bh.local.idsConfigured = true;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_TTcnGBNRqulKTpFY(bh, parentSpanInst);
      //appendnew_next_sd_m4SpvImIGO65SY62
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_m4SpvImIGO65SY62',
        spanInst,
        'sd_m4SpvImIGO65SY62'
      );
    }
  }

  async sd_TTcnGBNRqulKTpFY(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_TTcnGBNRqulKTpFY',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.local.idsConfigured,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_aeLWtUlmNq3gEN8q(bh, parentSpanInst);
      } else {
        bh = await this.sd_RpDloQfngCYUYh97(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TTcnGBNRqulKTpFY',
        spanInst,
        'sd_TTcnGBNRqulKTpFY'
      );
    }
  }

  async sd_aeLWtUlmNq3gEN8q(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_aeLWtUlmNq3gEN8q',
      parentSpanInst
    );
    try {
      bh.local.reqParams = {
        state: crypto.randomBytes(16).toString('hex'),
        nonce: crypto.randomBytes(16).toString('hex'),
        isMobile: bh.input.query.isMobile,
        redirectTo: bh.input.query.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Ao7aJoqZhfkz1rWs(bh, parentSpanInst);
      //appendnew_next_sd_aeLWtUlmNq3gEN8q
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_aeLWtUlmNq3gEN8q',
        spanInst,
        'sd_aeLWtUlmNq3gEN8q'
      );
    }
  }

  async sd_Ao7aJoqZhfkz1rWs(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Ao7aJoqZhfkz1rWs',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.reqParams;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ER7l6kJtVDMQVIMO(bh, parentSpanInst);
      //appendnew_next_sd_Ao7aJoqZhfkz1rWs
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Ao7aJoqZhfkz1rWs',
        spanInst,
        'sd_Ao7aJoqZhfkz1rWs'
      );
    }
  }

  async sd_ER7l6kJtVDMQVIMO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ER7l6kJtVDMQVIMO',
      parentSpanInst
    );
    try {
      const sd_hsr1gYGwGoCS4JykInstance: sd_hsr1gYGwGoCS4Jyk.idsutil =
        sd_hsr1gYGwGoCS4Jyk.idsutil.getInstance();
      let outputVariables =
        await sd_hsr1gYGwGoCS4JykInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_H7Ii3PvA3egIhhUN(bh, parentSpanInst);
      //appendnew_next_sd_ER7l6kJtVDMQVIMO
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ER7l6kJtVDMQVIMO',
        spanInst,
        'sd_ER7l6kJtVDMQVIMO'
      );
    }
  }

  async sd_H7Ii3PvA3egIhhUN(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_H7Ii3PvA3egIhhUN',
      parentSpanInst
    );
    try {
      const sd_hsr1gYGwGoCS4JykInstance: sd_hsr1gYGwGoCS4Jyk.idsutil =
        sd_hsr1gYGwGoCS4Jyk.idsutil.getInstance();
      let outputVariables =
        await sd_hsr1gYGwGoCS4JykInstance.getAuthorizationParams(
          spanInst,
          undefined
        );
      bh.input.authParams = outputVariables.input.authParams;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_MdMRyzcYQJB5VPYh(bh, parentSpanInst);
      //appendnew_next_sd_H7Ii3PvA3egIhhUN
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_H7Ii3PvA3egIhhUN',
        spanInst,
        'sd_H7Ii3PvA3egIhhUN'
      );
    }
  }

  async sd_MdMRyzcYQJB5VPYh(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_MdMRyzcYQJB5VPYh',
      parentSpanInst
    );
    try {
      const authorizationRequest = Object.assign(
        {
          redirect_uri: url.resolve(bh.web.req.href, '/api/login/cb'),
          scope: 'openid profile email address phone user',
          state: bh.local.reqParams.state,
          nonce: bh.local.reqParams.nonce,
          response_type: bh.input.client.response_types[0],
        },
        bh.input.authParams
      );

      bh.local.redirectHeaders = {
        location: bh.input.client.authorizationUrl(authorizationRequest),
      };

      this.tracerService.sendData(spanInst, bh);
      await this.sd_iteQ2DMubcVoULLU(bh, parentSpanInst);
      //appendnew_next_sd_MdMRyzcYQJB5VPYh
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MdMRyzcYQJB5VPYh',
        spanInst,
        'sd_MdMRyzcYQJB5VPYh'
      );
    }
  }

  async sd_iteQ2DMubcVoULLU(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_iteQ2DMubcVoULLU');
    }
  }

  async sd_RpDloQfngCYUYh97(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_RpDloQfngCYUYh97',
      parentSpanInst
    );
    try {
      bh.local.res = {
        message:
          'IDS client not registered. Register on the Neutrinos Stuido and try again',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_HXZXTzlN3nYZ5nMU(bh, parentSpanInst);
      //appendnew_next_sd_RpDloQfngCYUYh97
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RpDloQfngCYUYh97',
        spanInst,
        'sd_RpDloQfngCYUYh97'
      );
    }
  }

  async sd_HXZXTzlN3nYZ5nMU(bh, parentSpanInst) {
    try {
      bh.web.res.status(404).send(bh.local.res.message);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_HXZXTzlN3nYZ5nMU');
    }
  }

  async sd_CfO5bVgwOJDED0BR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_CfO5bVgwOJDED0BR',
      parentSpanInst
    );
    try {
      const protocol =
        bh.input.headers['x-forwarded-proto'] || bh.web.req.protocol;
      const href =
        protocol + '://' + bh.web.req.get('Host') + bh.web.req.originalUrl;
      bh.web.req.href = href;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_6juaPd2UsfwA3ls2(bh, parentSpanInst);
      //appendnew_next_sd_CfO5bVgwOJDED0BR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CfO5bVgwOJDED0BR',
        spanInst,
        'sd_CfO5bVgwOJDED0BR'
      );
    }
  }

  async sd_6juaPd2UsfwA3ls2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6juaPd2UsfwA3ls2',
      parentSpanInst
    );
    try {
      bh.web.next();
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6juaPd2UsfwA3ls2',
        spanInst,
        'sd_6juaPd2UsfwA3ls2'
      );
    }
  }

  async sd_8pivkGL5pGeeyX7n(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_8pivkGL5pGeeyX7n',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.input.sessionParams = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_u2n3jJcCFRd0jfdt(bh, parentSpanInst);
      //appendnew_next_sd_8pivkGL5pGeeyX7n
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8pivkGL5pGeeyX7n',
        spanInst,
        'sd_8pivkGL5pGeeyX7n'
      );
    }
  }

  async sd_u2n3jJcCFRd0jfdt(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_u2n3jJcCFRd0jfdt',
      parentSpanInst
    );
    try {
      const sd_hsr1gYGwGoCS4JykInstance: sd_hsr1gYGwGoCS4Jyk.idsutil =
        sd_hsr1gYGwGoCS4Jyk.idsutil.getInstance();
      let outputVariables =
        await sd_hsr1gYGwGoCS4JykInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_AJBJSTwJ0IEBLPPJ(bh, parentSpanInst);
      //appendnew_next_sd_u2n3jJcCFRd0jfdt
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_u2n3jJcCFRd0jfdt',
        spanInst,
        'sd_u2n3jJcCFRd0jfdt'
      );
    }
  }

  async sd_AJBJSTwJ0IEBLPPJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_AJBJSTwJ0IEBLPPJ',
      parentSpanInst
    );
    try {
      const params = bh.input.client.callbackParams(bh.web.req);
      let tokenset = await bh.input.client.callback(
        url.resolve(bh.web.req.href, 'cb'),
        params,
        {
          nonce: bh.input.sessionParams.data.nonce,
          state: bh.input.sessionParams.data.state,
        }
      );

      bh.local.redirectTo = bh.input.sessionParams.data.redirectTo;

      bh.local.userDetails = {
        tokenset: Object.assign({}, tokenset),
        userInfo: await bh.input.client.userinfo(tokenset['access_token']),
      };
      bh.local.userDetails['tokenset']['claims'] = Object.assign(
        {},
        tokenset.claims()
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_g9kiDhg2w819ok8e(bh, parentSpanInst);
      //appendnew_next_sd_AJBJSTwJ0IEBLPPJ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_AJBJSTwJ0IEBLPPJ',
        spanInst,
        'sd_AJBJSTwJ0IEBLPPJ'
      );
    }
  }

  async sd_g9kiDhg2w819ok8e(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_g9kiDhg2w819ok8e',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.userDetails;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_eM9RrkSyWTBTkAKK(bh, parentSpanInst);
      //appendnew_next_sd_g9kiDhg2w819ok8e
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_g9kiDhg2w819ok8e',
        spanInst,
        'sd_g9kiDhg2w819ok8e'
      );
    }
  }

  async sd_eM9RrkSyWTBTkAKK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_eM9RrkSyWTBTkAKK',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['se'](
          bh.input.sessionParams.data.isMobile,
          'true',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_Dvuh2dEq3mHQZbeP(bh, parentSpanInst);
      } else {
        bh = await this.sd_rie2EIw1lv0031DE(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_eM9RrkSyWTBTkAKK',
        spanInst,
        'sd_eM9RrkSyWTBTkAKK'
      );
    }
  }

  async sd_Dvuh2dEq3mHQZbeP(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Dvuh2dEq3mHQZbeP',
      parentSpanInst
    );
    try {
      bh.local.htmlResponse = `
 <html>
   <script>
      let _timer;
      _timer = setInterval(() => {
                  if(window.webkit) {
                      window.webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({'auth': 'success'}));
                      clearInterval(_timer);
                  }
              }, 250);
      
   </script>
</html>`;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_Ti1pqdkKejNvWcIU(bh, parentSpanInst);
      //appendnew_next_sd_Dvuh2dEq3mHQZbeP
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Dvuh2dEq3mHQZbeP',
        spanInst,
        'sd_Dvuh2dEq3mHQZbeP'
      );
    }
  }

  async sd_Ti1pqdkKejNvWcIU(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script-src 'sha256-wcX+PzUovy0uNFqMGCbbbzuT5v4aAxU9obFNyt6BHAQ='",
      });

      bh.web.res.status(200).send(bh.local.htmlResponse);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Ti1pqdkKejNvWcIU');
    }
  }

  async sd_rie2EIw1lv0031DE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_rie2EIw1lv0031DE',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_GQksmUsdnxJn4ssD(bh, parentSpanInst);
      //appendnew_next_sd_rie2EIw1lv0031DE
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rie2EIw1lv0031DE',
        spanInst,
        'sd_rie2EIw1lv0031DE'
      );
    }
  }

  async sd_GQksmUsdnxJn4ssD(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('Redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_GQksmUsdnxJn4ssD');
    }
  }

  async sd_HvJUUk0IURUQdFZ6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_HvJUUk0IURUQdFZ6',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      await this.sd_H1rH0IdbF7KyTQ53(bh, parentSpanInst);
      //appendnew_next_sd_HvJUUk0IURUQdFZ6
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HvJUUk0IURUQdFZ6',
        spanInst,
        'sd_HvJUUk0IURUQdFZ6'
      );
    }
  }

  async sd_H1rH0IdbF7KyTQ53(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.session.data.userInfo);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_H1rH0IdbF7KyTQ53');
    }
  }

  async sd_9ofLa04CHAlTZuEJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9ofLa04CHAlTZuEJ',
      parentSpanInst
    );
    try {
      bh.web.res.redirect('/api/login');
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_9ofLa04CHAlTZuEJ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9ofLa04CHAlTZuEJ',
        spanInst,
        'sd_9ofLa04CHAlTZuEJ'
      );
    }
  }

  async sd_EbVrHYQ8SqYwrRX9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_EbVrHYQ8SqYwrRX9',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ITRqy2njEqRe2c7t(bh, parentSpanInst);
      //appendnew_next_sd_EbVrHYQ8SqYwrRX9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_EbVrHYQ8SqYwrRX9',
        spanInst,
        'sd_EbVrHYQ8SqYwrRX9'
      );
    }
  }

  async sd_ITRqy2njEqRe2c7t(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ITRqy2njEqRe2c7t',
      parentSpanInst
    );
    try {
      bh.local.sessionExists = false;
      if (
        bh.local.sessionData &&
        bh.local.sessionData.data &&
        bh.local.sessionData.data.tokenset
      ) {
        bh.local.sessionData['data']['redirectTo'] =
          bh.input.query['redirectTo'];
        bh.local.sessionData['data']['isMobile'] = bh.input.query['isMobile'];
        bh.local.sessionExists = true;
      } else {
        delete bh.local.sessionData['redirectTo'];
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_UyyzXWAsRIpMpk9w(bh, parentSpanInst);
      //appendnew_next_sd_ITRqy2njEqRe2c7t
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ITRqy2njEqRe2c7t',
        spanInst,
        'sd_ITRqy2njEqRe2c7t'
      );
    }
  }

  async sd_UyyzXWAsRIpMpk9w(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_UyyzXWAsRIpMpk9w',
      parentSpanInst
    );
    try {
      const sd_hsr1gYGwGoCS4JykInstance: sd_hsr1gYGwGoCS4Jyk.idsutil =
        sd_hsr1gYGwGoCS4Jyk.idsutil.getInstance();
      let outputVariables =
        await sd_hsr1gYGwGoCS4JykInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_oMPHm1FMQKPfYGzq(bh, parentSpanInst);
      //appendnew_next_sd_UyyzXWAsRIpMpk9w
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_UyyzXWAsRIpMpk9w',
        spanInst,
        'sd_UyyzXWAsRIpMpk9w'
      );
    }
  }

  async sd_oMPHm1FMQKPfYGzq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_oMPHm1FMQKPfYGzq',
      parentSpanInst
    );
    try {
      let unsatisfied = true;
      if (
        this.sdService.operators['true'](
          bh.local.sessionExists,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_Q1pAEG74PkZWXy9B(bh, parentSpanInst);
        unsatisfied = false;
      }
      if (unsatisfied) {
        bh = await this.sd_L6hJuIOlYXDttAAB(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_oMPHm1FMQKPfYGzq',
        spanInst,
        'sd_oMPHm1FMQKPfYGzq'
      );
    }
  }

  async sd_Q1pAEG74PkZWXy9B(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Q1pAEG74PkZWXy9B',
      parentSpanInst
    );
    try {
      await Promise.all([
        bh.local.sessionData.data.tokenset.access_token
          ? bh.input.client.revoke(
              bh.local.sessionData.data.tokenset.access_token,
              'access_token'
            )
          : undefined,
        bh.local.sessionData.data.tokenset.refresh_token
          ? bh.input.client.revoke(
              bh.local.sessionData.data.tokenset.refresh_token,
              'refresh_token'
            )
          : undefined,
      ]);

      bh.local.res = {
        idsURL: url.format(
          Object.assign(
            url.parse(bh.input.client.issuer.end_session_endpoint),
            {
              search: null,
              query: {
                id_token_hint: bh.local.sessionData.data.tokenset.id_token,
                post_logout_redirect_uri: url.resolve(
                  bh.web.req.href,
                  '/api/logout/cb'
                ),
                client_id: settings.default['ids']['client_id'],
              },
            }
          )
        ),
        sessionExists: true,
      };

      // Remove user info and tokenset before login redirect
      bh.local.sessionData.data.tokenset = null;
      bh.local.sessionData.data.userInfo = null;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_dCWCI7Lqpk6tk1KJ(bh, parentSpanInst);
      //appendnew_next_sd_Q1pAEG74PkZWXy9B
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Q1pAEG74PkZWXy9B',
        spanInst,
        'sd_Q1pAEG74PkZWXy9B'
      );
    }
  }

  async sd_dCWCI7Lqpk6tk1KJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dCWCI7Lqpk6tk1KJ',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.sessionData.data;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_IGYt0ATIV96zmakW(bh, parentSpanInst);
      //appendnew_next_sd_dCWCI7Lqpk6tk1KJ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dCWCI7Lqpk6tk1KJ',
        spanInst,
        'sd_dCWCI7Lqpk6tk1KJ'
      );
    }
  }

  async sd_IGYt0ATIV96zmakW(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_IGYt0ATIV96zmakW');
    }
  }

  async sd_L6hJuIOlYXDttAAB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_L6hJuIOlYXDttAAB',
      parentSpanInst
    );
    try {
      bh.local.res = {
        sessionExists: false,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_IGYt0ATIV96zmakW(bh, parentSpanInst);
      //appendnew_next_sd_L6hJuIOlYXDttAAB
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_L6hJuIOlYXDttAAB',
        spanInst,
        'sd_L6hJuIOlYXDttAAB'
      );
    }
  }

  async sd_gcxLJnmeuAqosXey(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_gcxLJnmeuAqosXey',
      parentSpanInst
    );
    try {
      bh.local.isPasswordResetCallback =
        !!bh.input.query.password_reset_username;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_YvPnfLGpM99ODCTa(bh, parentSpanInst);
      //appendnew_next_sd_gcxLJnmeuAqosXey
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gcxLJnmeuAqosXey',
        spanInst,
        'sd_gcxLJnmeuAqosXey'
      );
    }
  }

  async sd_YvPnfLGpM99ODCTa(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_YvPnfLGpM99ODCTa',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.local.isPasswordResetCallback,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_9YLc6TuX8vA6VJ2a(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.local.isPasswordResetCallback,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_9RVLzsaeyZeTJyji(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YvPnfLGpM99ODCTa',
        spanInst,
        'sd_YvPnfLGpM99ODCTa'
      );
    }
  }

  async sd_9YLc6TuX8vA6VJ2a(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9YLc6TuX8vA6VJ2a',
      parentSpanInst
    );
    try {
      const sessionStore = bh.web.req.sessionStore;
      const res = new Promise((res, rej) => {
        sessionStore.all((err, sessions) => {
          const promises = Object.keys(sessions).map((sid) => {
            return new Promise((resolve, reject) => {
              sessionStore.get(sid, (err, session) => {
                if (
                  session?.data?.userInfo?.username ===
                  bh.input.query.password_reset_username
                ) {
                  log.debug(
                    `[LCB] username matched::${session.data.userInfo.username}`
                  );
                  sessionStore.destroy(sid, (err, d) => {
                    resolve(d);
                  });
                } else {
                  resolve(undefined);
                }
              });
            });
          });
          Promise.all(promises).then((d) => res(d));
        });
      });

      const rr = await res;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_Nh5QFaq0ViA96PxP(bh, parentSpanInst);
      //appendnew_next_sd_9YLc6TuX8vA6VJ2a
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9YLc6TuX8vA6VJ2a',
        spanInst,
        'sd_9YLc6TuX8vA6VJ2a'
      );
    }
  }

  async sd_Nh5QFaq0ViA96PxP(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send({ message: 'destroyed' });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Nh5QFaq0ViA96PxP');
    }
  }

  async sd_9RVLzsaeyZeTJyji(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9RVLzsaeyZeTJyji',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_3bLK0soHBicBevdO(bh, parentSpanInst);
      //appendnew_next_sd_9RVLzsaeyZeTJyji
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9RVLzsaeyZeTJyji',
        spanInst,
        'sd_9RVLzsaeyZeTJyji'
      );
    }
  }

  async sd_3bLK0soHBicBevdO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3bLK0soHBicBevdO',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        let p = function () {
          return new Promise<void | string>((resolve, reject) => {
            requestObject.session.destroy(function (error) {
              if (error) {
                return reject(error);
              }
              return resolve();
            });
          });
        };
        await p();
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_f0meac1bAeiNoSMy(bh, parentSpanInst);
      //appendnew_next_sd_3bLK0soHBicBevdO
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3bLK0soHBicBevdO',
        spanInst,
        'sd_3bLK0soHBicBevdO'
      );
    }
  }

  async sd_f0meac1bAeiNoSMy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_f0meac1bAeiNoSMy',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['se'](
          bh.local.sessionData.data.isMobile,
          'true',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_pKqhrIBKlNU7ym6R(bh, parentSpanInst);
      } else {
        bh = await this.sd_35qkD3mpswVXck82(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_f0meac1bAeiNoSMy',
        spanInst,
        'sd_f0meac1bAeiNoSMy'
      );
    }
  }

  async sd_pKqhrIBKlNU7ym6R(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_pKqhrIBKlNU7ym6R',
      parentSpanInst
    );
    try {
      bh.local.res = `<html>
   <script>
      var _timer;
      _timer = setInterval(() => {
                  if(window.webkit) {
                      window.webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({'auth': 'success'}));
                      clearInterval(_timer);
                  }
              }, 250);
      
   </script>
</html>`;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_MNxNgo9WH795U2Mc(bh, parentSpanInst);
      //appendnew_next_sd_pKqhrIBKlNU7ym6R
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pKqhrIBKlNU7ym6R',
        spanInst,
        'sd_pKqhrIBKlNU7ym6R'
      );
    }
  }

  async sd_MNxNgo9WH795U2Mc(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script 'sha256-j4HHWBMKh2PoLEAu017BWktgUmmL7VVMjnHuNWUHGOg='",
      });

      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_MNxNgo9WH795U2Mc');
    }
  }

  async sd_35qkD3mpswVXck82(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_35qkD3mpswVXck82',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.sessionData.data.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_gSelBUw7BR9F0XIR(bh, parentSpanInst);
      //appendnew_next_sd_35qkD3mpswVXck82
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_35qkD3mpswVXck82',
        spanInst,
        'sd_35qkD3mpswVXck82'
      );
    }
  }

  async sd_gSelBUw7BR9F0XIR(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_gSelBUw7BR9F0XIR');
    }
  }

  async sd_UXx410FBOyZvsk9v(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_UXx410FBOyZvsk9v',
      parentSpanInst
    );
    try {
      bh.local = {};
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_3HIhvuQ7WGuL5c1D(bh, parentSpanInst);
      //appendnew_next_sd_UXx410FBOyZvsk9v
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_UXx410FBOyZvsk9v',
        spanInst,
        'sd_UXx410FBOyZvsk9v'
      );
    }
  }

  async sd_3HIhvuQ7WGuL5c1D(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3HIhvuQ7WGuL5c1D',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_J1T1jHFSW8hsCWCV(bh, parentSpanInst);
      //appendnew_next_sd_3HIhvuQ7WGuL5c1D
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3HIhvuQ7WGuL5c1D',
        spanInst,
        'sd_3HIhvuQ7WGuL5c1D'
      );
    }
  }

  async sd_J1T1jHFSW8hsCWCV(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_J1T1jHFSW8hsCWCV',
      parentSpanInst
    );
    try {
      bh.local.sessionExists = false;

      if (
        bh.local.sessionData &&
        bh.local.sessionData.data &&
        bh.local.sessionData.data.tokenset &&
        bh.local.sessionData.data.tokenset.access_token &&
        bh.local.sessionData.data.tokenset.refresh_token
      ) {
        bh.local.sessionExists = true;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_DHJD4rJmNpo2U539(bh, parentSpanInst);
      //appendnew_next_sd_J1T1jHFSW8hsCWCV
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_J1T1jHFSW8hsCWCV',
        spanInst,
        'sd_J1T1jHFSW8hsCWCV'
      );
    }
  }

  async sd_DHJD4rJmNpo2U539(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DHJD4rJmNpo2U539',
      parentSpanInst
    );
    try {
      let unsatisfied = true;
      if (
        this.sdService.operators['true'](
          bh.local.sessionExists,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_0HQJkD892O5mr41D(bh, parentSpanInst);
        unsatisfied = false;
      }
      if (unsatisfied) {
        bh = await this.sd_6BSXf7uykU7iehnB(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DHJD4rJmNpo2U539',
        spanInst,
        'sd_DHJD4rJmNpo2U539'
      );
    }
  }

  async sd_0HQJkD892O5mr41D(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0HQJkD892O5mr41D',
      parentSpanInst
    );
    try {
      const sd_hsr1gYGwGoCS4JykInstance: sd_hsr1gYGwGoCS4Jyk.idsutil =
        sd_hsr1gYGwGoCS4Jyk.idsutil.getInstance();
      let outputVariables = await sd_hsr1gYGwGoCS4JykInstance.handleTokenExpiry(
        spanInst,
        bh.local.sessionData,
        undefined
      );
      bh.local.newSession = outputVariables.input.newSession;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ku9wmy6vQg55WxGy(bh, parentSpanInst);
      //appendnew_next_sd_0HQJkD892O5mr41D
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0HQJkD892O5mr41D',
        spanInst,
        'sd_0HQJkD892O5mr41D'
      );
    }
  }

  async sd_ku9wmy6vQg55WxGy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ku9wmy6vQg55WxGy',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['false'](
          bh.local.newSession,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_0HCBQrOYrXmGLJ5Z(bh, parentSpanInst);
      } else {
        bh = await this.sd_w1etrC2XH53hFDd1(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ku9wmy6vQg55WxGy',
        spanInst,
        'sd_ku9wmy6vQg55WxGy'
      );
    }
  }

  async sd_0HCBQrOYrXmGLJ5Z(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0HCBQrOYrXmGLJ5Z',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        let p = function () {
          return new Promise<void | string>((resolve, reject) => {
            requestObject.session.destroy(function (error) {
              if (error) {
                return reject(error);
              }
              return resolve();
            });
          });
        };
        await p();
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_CRvlPVZBSWeHvC20(bh, parentSpanInst);
      //appendnew_next_sd_0HCBQrOYrXmGLJ5Z
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0HCBQrOYrXmGLJ5Z',
        spanInst,
        'sd_0HCBQrOYrXmGLJ5Z'
      );
    }
  }

  async sd_CRvlPVZBSWeHvC20(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_CRvlPVZBSWeHvC20',
      parentSpanInst
    );
    try {
      bh.local.res = {
        code: 'TOKEN_EXPIRED',
        message: 'Token invalid or access revoked',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_SH8hGBiUeic7LWrG(bh, parentSpanInst);
      //appendnew_next_sd_CRvlPVZBSWeHvC20
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CRvlPVZBSWeHvC20',
        spanInst,
        'sd_CRvlPVZBSWeHvC20'
      );
    }
  }

  async sd_SH8hGBiUeic7LWrG(bh, parentSpanInst) {
    try {
      bh.web.res.status(403).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_SH8hGBiUeic7LWrG');
    }
  }

  async sd_w1etrC2XH53hFDd1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_w1etrC2XH53hFDd1',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.local.newSession.rotated,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_A235TX6Qr8ZudKto(bh, parentSpanInst);
      } else {
        bh = await this.sd_ApX8bWE6JQdII8y2(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_w1etrC2XH53hFDd1',
        spanInst,
        'sd_w1etrC2XH53hFDd1'
      );
    }
  }

  async sd_A235TX6Qr8ZudKto(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_A235TX6Qr8ZudKto',
      parentSpanInst
    );
    try {
      delete bh.local.newSession.rotated;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_uvvCpOLaZz48PTbB(bh, parentSpanInst);
      //appendnew_next_sd_A235TX6Qr8ZudKto
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_A235TX6Qr8ZudKto',
        spanInst,
        'sd_A235TX6Qr8ZudKto'
      );
    }
  }

  async sd_uvvCpOLaZz48PTbB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_uvvCpOLaZz48PTbB',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.newSession;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_ApX8bWE6JQdII8y2(bh, parentSpanInst);
      //appendnew_next_sd_uvvCpOLaZz48PTbB
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uvvCpOLaZz48PTbB',
        spanInst,
        'sd_uvvCpOLaZz48PTbB'
      );
    }
  }

  async sd_ApX8bWE6JQdII8y2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ApX8bWE6JQdII8y2',
      parentSpanInst
    );
    try {
      bh.web.next();
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ApX8bWE6JQdII8y2',
        spanInst,
        'sd_ApX8bWE6JQdII8y2'
      );
    }
  }

  async sd_6BSXf7uykU7iehnB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6BSXf7uykU7iehnB',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['cont'](
          bh.input.path,
          '/user/info',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_KikrClJZNEEWfBPb(bh, parentSpanInst);
      } else {
        bh = await this.sd_LtriYYReFmMVgHZ8(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6BSXf7uykU7iehnB',
        spanInst,
        'sd_6BSXf7uykU7iehnB'
      );
    }
  }

  async sd_KikrClJZNEEWfBPb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KikrClJZNEEWfBPb',
      parentSpanInst
    );
    try {
      bh.local.res = { message: 'Session expired' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_SH8hGBiUeic7LWrG(bh, parentSpanInst);
      //appendnew_next_sd_KikrClJZNEEWfBPb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KikrClJZNEEWfBPb',
        spanInst,
        'sd_KikrClJZNEEWfBPb'
      );
    }
  }

  async sd_LtriYYReFmMVgHZ8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_LtriYYReFmMVgHZ8',
      parentSpanInst
    );
    try {
      bh.local.res = { code: 'NO_SESSION', message: 'Session not present' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_SH8hGBiUeic7LWrG(bh, parentSpanInst);
      //appendnew_next_sd_LtriYYReFmMVgHZ8
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LtriYYReFmMVgHZ8',
        spanInst,
        'sd_LtriYYReFmMVgHZ8'
      );
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
      (await this.sd_ybGnwOu9RxKHe84v(bh, parentSpanInst)) ||
      (await this.sd_BsUvSB4F9PgG0knR(bh, parentSpanInst))
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
  async sd_ybGnwOu9RxKHe84v(bh, parentSpanInst) {
    const nodes = [
      'sd_H7Ii3PvA3egIhhUN',
      'sd_kiSMfjCqW3ygpyD3',
      'sd_u2n3jJcCFRd0jfdt',
      'sd_AJBJSTwJ0IEBLPPJ',
      'sd_8pivkGL5pGeeyX7n',
      'sd_eM9RrkSyWTBTkAKK',
      'sd_Dvuh2dEq3mHQZbeP',
      'sd_rie2EIw1lv0031DE',
      'sd_Ti1pqdkKejNvWcIU',
      'sd_GQksmUsdnxJn4ssD',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_9ofLa04CHAlTZuEJ(bh, parentSpanInst);
      //appendnew_next_sd_ybGnwOu9RxKHe84v
      return true;
    }
    return false;
  }
  async sd_BsUvSB4F9PgG0knR(bh, parentSpanInst) {
    const nodes = ['sd_0HQJkD892O5mr41D'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_CRvlPVZBSWeHvC20(bh, parentSpanInst);
      //appendnew_next_sd_BsUvSB4F9PgG0knR
      return true;
    }
    return false;
  }
  //appendnew_flow_ids_Catch
}
