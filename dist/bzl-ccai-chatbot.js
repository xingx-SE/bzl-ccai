(function(){var e=()=>{let e=document.currentScript;return e?.src?e.src:document.getElementById(`bzl-ccai-chatbot`)?.src||void 0},t=t=>{let n=t.replace(/^\/+/,``),r=e();return r?new URL(n,r).href:`/${n}`},n=window.BREEZELINE_CCAI_WIDGET_CONFIG??{},r=window.location.pathname.replace(/\/+$/,``),i=r===`/checkout`||r.startsWith(`/checkout/`),a=window.screen.width<1024,o={enabled:n.enabled??!0,companyName:n.companyName||`Breezeline`,logo:n.logo||t(`img/chat-widget-logo.png`),companyId:n.companyId||`170982371584261662655aba7ddd1dffc`,host:n.host||`https://stg-instance-n3rhfoa.ue1.ccaiplatform.com`,tenant:n.tenant||`stg-instance-n3rhfoa`,ccaiApi:n.ccaiApi||`https://bzl-api-stg.breezeline.com`,isMobileChannel:String(n.isMobileChannel??!1),userInformation:n.userInformation||`resident`,language:n.language||`en`,mountSelector:n.mountSelector||`#ccaas-widget`,cookieDomain:n.cookieDomain??`.breezeline.com`,styleNonce:n.styleNonce,scriptNonce:n.scriptNonce,region:document.querySelector(`#ccaiRegion`)?.value||`Breezeline`,isBuyflow:i,isMobile:a,allowLocalhost:n.allowLocalhost===!0,checkoutOrderSummaryFlyoutId:n.checkoutOrderSummaryFlyoutId??``},s=e=>{let t=`${encodeURIComponent(e)}=`,n=document.cookie.split(`;`).map(e=>e.trim()).find(e=>e.startsWith(t));if(n)return decodeURIComponent(n.slice(t.length))},c=(e,t,n)=>{let r=[`${encodeURIComponent(e)}=${encodeURIComponent(t)}`,`Path=/`,`SameSite=Lax`];n!==void 0&&r.push(`Max-Age=${n}`),o.cookieDomain&&r.push(`Domain=${o.cookieDomain}`),window.location.protocol===`https:`&&r.push(`Secure`),document.cookie=r.join(`; `)},l=e=>{let t=[`${encodeURIComponent(e)}=`,`Path=/`,`Max-Age=0`,`SameSite=Lax`];o.cookieDomain&&t.push(`Domain=${o.cookieDomain}`),window.location.protocol===`https:`&&t.push(`Secure`),document.cookie=t.join(`; `)},u=`ccaipChatId`,d=()=>{let e=s(u);if(e)return e;let t=crypto.randomUUID();return c(u,t,86400),t},f=async()=>{try{let e=`${o.ccaiApi.replace(/\/$/,``)}/api/ccai/jwt`,t=await fetch(e,{method:`POST`,body:JSON.stringify({identifier:d()})});if(!t.ok)throw Error(`Server responded with: ${t.status}`);return{token:await t.text()}}catch(e){return console.error(`Failed to fetch CCAI token:`,e),{token:null}}},p=e=>{let t={companyId:e.companyId,host:e.host,tenant:e.tenant,ccaiApi:e.ccaiApi},n=Object.entries(t).filter(([,e])=>!e).map(([e])=>e);if(n.length>0)throw Error(`CCAI widget missing configuration: ${n.join(`, `)}`);if(!window.UJET)throw Error(`UJET Web SDK is not available. Load the UJET SDK before bzl-ccai-chatbot.js.`)},m=`bzl_ccai_auth_started_at`,h=()=>{let e=Date.now();return c(m,String(e),900),e},g=()=>{let e=s(m);if(!e)return null;let t=Number(e);return Number.isFinite(t)?t:null},_=()=>{l(m)},v={chatWidget:{companyName:`Charlie, Breezeline Virtual Assistant`,continue:`Continue`,cancel:`Cancel`,translation:{button:{yes:`Yes, end chat`,no:`No, keep chatting`},home:{start:`Please select your language from the top-right dropdown or click <b>"Continue"</b> to proceed in English. <br /><br /> This chat is for general information only, should not be relied upon for legal advice, and may be recorded for quality purposes. By using this chat, you agree to the recording and collection of your data per Breezeline's Privacy Policy: https://www.breezeline.com/policies-agreements`},menu:{greeting:`Hi, I'm Charlie, your Breezeline Virtual Assistant. I'm here to assist you with any questions you may have. Click below to get started.`,queueMessage:``},deflection:{afterHoursNoOption:`Unfortunately, you have reached us after hours. Have you checked out our self-service options by logging into 'My Account' from the web or My Breezeline Mobile App? For immediate assistance please contact us at 888-536-9600`}}}},y={chatWidget:{continue:`Continuar`,cancel:`Cancelar`,translation:{button:{yes:`Sí, finalizar chat`,no:`No, sigue charlando`},home:{start:`Selecciona tu idioma en el menú desplegable superior derecho o haz clic en <b>"Continuar"</b> para proceder en español. <br/><br/> Este chat es solo para información general, no debe utilizarse como asesoramiento legal y puede grabarse con fines de calidad. Al utilizar este chat, usted acepta la grabación y recopilación de sus datos según la política de privacidad de Breezeline: https://es.breezeline.com/policies-agreements`},menu:{greeting:`Hola, soy Charlie, tu asistente virtual de Breezeline. Estoy aquí para ayudarte con cualquier pregunta que puedas tener. Haz clic a continuación para comenzar.`,queueMessage:``},deflection:{afterHoursNoOption:`Lamentablemente, nos contactó fuera de horario. ¿Ha consultado las opciones de autoservicio ingresando a 'Mi cuenta' desde la web o la aplicación móvil My Breezeline? Para asistencia inmediata contáctenos al 888-536-9600`}}}},b=(e,t)=>{t.forEach(t=>{let n=t.parentElement;n&&(n.style.borderRadius=`100px`);let r=t.textContent?.trim()??``,i=[v.chatWidget.translation.button.yes,y.chatWidget.translation.button.yes],a=[v.chatWidget.translation.button.no,y.chatWidget.translation.button.no,v.chatWidget.cancel,y.chatWidget.cancel];i.includes(r)?t.textContent=e===`es`?y.chatWidget.continue:v.chatWidget.continue:a.includes(r)&&(t.textContent=e===`es`?y.chatWidget.cancel:v.chatWidget.cancel)})},x=`bzl-ccai-chatbot-styles`,S=(e,t)=>{let n=document.getElementById(x);if(n)return n;let r=document.createElement(`style`);return r.id=x,r.textContent=e,t&&(r.nonce=t),document.head.appendChild(r),r},C=(e,t)=>{if(!e.querySelector(`#custom-widget-styles`)){let n=document.createElement(`style`);n.id=`custom-widget-styles`,n.textContent=`${t}\n${T}\n${w}`,e.appendChild(n)}},w=`
  .ujet-widget {
    border-radius: 15px;
  }
  #widget-launcher > button.icon-container {
    border: var(--launcher-border-width, 2px) solid
      var(--launcher-border-color, white);
    border-radius: 50%;
    box-sizing: border-box;
  }
  .lang-select {
    display: none !important;
  }
`,T=`
  #bzl-proactive-popup {
    position: fixed;
    right: var(--ujet-right, 15px);
    bottom: calc(
      var(--ujet-bottom, 100px) + var(--launcher-size, 100px) + 48px
    );
    width: min(376px, calc(100vw - 30px));
    border-radius: 13px;
    background: #F2F3F7;
    color: #252F43;
    box-shadow: 0 8px 24px rgb(0 0 0 / 18%);
    font-family: 'Quicksand', Arial, sans-serif;
    font-weight: 400;
    text-align: center;
    z-index: 1000;
  }

  #bzl-proactive-popup .bzl-proactive-title {
    padding: 12px 0;
    border-radius: 13px 13px 0 0;
    background: #001E62;
    color: #FFFFFF;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
  }

  #bzl-proactive-popup .bzl-proactive-body {
    padding: 20px;
  }

  #bzl-proactive-popup .bzl-proactive-description {
    font-size: 14px;
    line-height: 1.5;
  }

  @media (min-width: 640px) {
    #bzl-proactive-popup .bzl-proactive-description {
      font-size: 15px;
    }
  }

  @media (min-width: 1024px) {
    #bzl-proactive-popup .bzl-proactive-description {
      font-size: 16px;
    }
  }

  #bzl-proactive-popup .bzl-proactive-actions {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    margin-top: 20px;
  }

  #bzl-proactive-popup .bzl-proactive-yes {
    position: relative;
    isolation: isolate;
    box-sizing: border-box;
    width: 224px;
    max-width: 100%;
    margin: 0;
    padding: 10px 24px;
    border: 0;
    border-radius: 44px;
    background: #FF6D70 linear-gradient(225deg, #FF7F82, #EA4959);
    color: #001754;
    cursor: pointer;
    font: 700 16px/24px 'Quicksand', Arial, sans-serif;
    transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }

  #bzl-proactive-popup .bzl-proactive-yes::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: linear-gradient(135deg, #FF7F82, #EA4959);
    opacity: 0;
    z-index: -1;
    pointer-events: none;
    transition: opacity 0.5s linear;
  }

  #bzl-proactive-popup .bzl-proactive-yes:hover {
    background-color: #00082F;
  }

  #bzl-proactive-popup .bzl-proactive-yes:hover::before {
    opacity: 1;
  }

  #bzl-proactive-popup .bzl-proactive-no {
    color: #001E62;
    cursor: pointer;
    font-size: 16px;
    line-height: 24px;
    text-decoration: underline #9DA8C3;
    text-underline-offset: 5px;
  }

  #bzl-proactive-popup .bzl-proactive-no-text {
    font-weight: 600;
  }

  #bzl-proactive-popup .bzl-proactive-no:hover {
    text-decoration-color: #FF6D70;
  }

  #bzl-proactive-popup .bzl-proactive-yes:focus-visible,
  #bzl-proactive-popup .bzl-proactive-no:focus-visible {
    outline: 2px solid #001E62;
    outline-offset: 2px;
  }

  #bzl-proactive-popup::after {
    content: '';
    position: absolute;
    bottom: -40px;
    right: calc(var(--launcher-size, 100px) / 2 - 22px);
    width: 0;
    height: 0;
    border-left: 22px solid transparent;
    border-right: 22px solid transparent;
    border-top: 40px solid #F2F3F7;
    pointer-events: none;
  }

  :host(.bzl-proactive-visible)
    #widget-launcher > button.icon-container > * {
    visibility: hidden;
  }

  :host(.bzl-proactive-visible)
    #widget-launcher > button.icon-container::after {
    content: '';
    position: absolute;
    top: 34%;
    left: 39%;
    width: 20%;
    height: 20%;
    border-right: 3px solid #FFFFFF;
    border-bottom: 3px solid #FFFFFF;
    transform: rotate(45deg);
    pointer-events: none;
  }
  `,E=`bzl_ccai_proactive_dismissed`,D=5e3,O=`#widget-launcher > button.icon-container`,ee=new Set({dev:[`bzl-breezeline01-dev.breezeline.com`],stg:[`bzl-breezeline01-stg.breezeline.com`],prod:[`www.breezeline.com`,`bzl-breezeline01-prod.breezeline.com`]}[void 0]??[]),te=[`/tv`,`/internet`,`/internet-home-phone`,`/internet-mobile`],k={en:{title:`I'm Charlie, your Virtual Assistant.`,general:`If you're looking for something, I can help answer your questions. Would you like to start a chat?`,sales:`Would you like some help choosing a plan and placing your order?`,support:`If you're looking for support, I can answer technical questions and even troubleshoot your service. Would you like to start a chat?`,yes:`Yes`,no:`No`,minimize:`Minimize welcome message`},es:{title:`Soy Charlie, tu asistente virtual.`,general:`Puedo ayudarte a encontrar respuestas a tus preguntas. ¿Quieres iniciar un chat?`,sales:`¿Quieres ayuda para elegir un plan y realizar tu pedido?`,support:`Puedo responder preguntas técnicas e incluso ayudarte a resolver problemas con tu servicio. ¿Quieres iniciar un chat?`,yes:`Sí`,no:`No`,minimize:`Minimizar mensaje de bienvenida`}},A=()=>{if(window.location.hostname===`help.breezeline.com`)return`support`;let e=window.location.pathname.replace(/^\/(?:en|es)(?=\/|$)/,``).replace(/\/+$/,``)||`/`;return te.some(t=>e===t||e.startsWith(`${t}/`))?`sales`:`general`},j=(e,t,n)=>{let r=window.location.hostname;if(!(r===`localhost`?n.allowLocalhost:ee.has(r)))return;let i=t.host;if(i.dataset.proactiveRegistered===`true`)return;i.dataset.proactiveRegistered=`true`;let a=null,o,l=s(E)===`1`,u=!!e.visible,d=()=>{a?.remove(),a=null,i.classList.remove(`bzl-proactive-visible`),t.removeEventListener(`click`,m,!0)},f=()=>{window.clearTimeout(o),o=void 0},p=()=>{l=!0,c(E,`1`,86400),b(),f(),d()},m=e=>{a&&e.composedPath().some(e=>e instanceof Element&&e.matches(O))&&(e.preventDefault(),e.stopImmediatePropagation(),p())},h=e.show;e.show=()=>{u=!0,b(),f(),d(),h.call(e)};let g=()=>{if(o=void 0,l||u||e.visible||s(E)===`1`||!t.querySelector(O))return;let r=n.language,c=k[r];a=document.createElement(`div`),a.id=`bzl-proactive-popup`,a.lang=r,a.setAttribute(`role`,`region`),a.setAttribute(`aria-labelledby`,`bzl-proactive-title`);let d=document.createElement(`div`);d.id=`bzl-proactive-title`,d.className=`bzl-proactive-title`,d.textContent=c.title;let f=document.createElement(`div`);f.className=`bzl-proactive-body`;let h=document.createElement(`span`);h.className=`bzl-proactive-description`,h.textContent=c[A()];let g=document.createElement(`div`);g.className=`bzl-proactive-actions`;let _=document.createElement(`button`);_.type=`button`,_.className=`bzl-proactive-yes`,_.textContent=c.yes;let v=document.createElement(`a`);v.className=`bzl-proactive-no`,v.setAttribute(`role`,`button`),v.tabIndex=0;let y=document.createElement(`span`);y.className=`bzl-proactive-no-text`,y.textContent=c.no;let b=document.createElement(`span`);b.className=`bzl-proactive-no-decoration`,b.setAttribute(`aria-hidden`,`true`),v.append(y,b),_.addEventListener(`click`,()=>{p(),e.show()}),v.addEventListener(`click`,p),v.addEventListener(`keydown`,e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),p())}),g.append(_,v),f.append(h,g),a.append(d,f),t.appendChild(a),i.classList.add(`bzl-proactive-visible`),t.addEventListener(`click`,m,!0)},_=t=>{f(),d(),!l&&!u&&!e.visible&&(o=window.setTimeout(g,t))};_(Math.max(0,D-performance.now()));let v=window.location.href,y,b=()=>{window.clearInterval(y),y=void 0};!l&&!u&&(y=window.setInterval(()=>{if(l||u||e.visible||s(E)===`1`){b(),f(),d();return}let t=window.location.href;t!==v&&(v=t,_(D))},250)),t.addEventListener(`keydown`,e=>{if(!(e instanceof KeyboardEvent)||e.key!==`Escape`||!a)return;let n=a.contains(t.activeElement);p(),n&&t.querySelector(O)?.focus()})},ne=100,re=1e4,M=3e3,N=500,ie=(e,t)=>{let n=window.setInterval(()=>{let r=document.querySelector(t.mountSelector);r&&(t.isBuyflow&&!t.isMobile&&r.classList.add(`ccai-buyflow`),r.shadowRoot?.querySelector(`.ujet`)&&(window.clearInterval(n),t.isBuyflow&&(r.classList.add(`responsiveWidget`),r.shadowRoot.querySelector(`.ujet`)?.classList.add(`responsiveWidget`)),P(e,r.shadowRoot,t.language),t.isBuyflow||j(e,r.shadowRoot,t)))},ne);window.setTimeout(()=>{window.clearInterval(n)},re)},P=(e,t,n)=>{let r=t.querySelector(`.ujet`);if(!r)return;C(t,``);let i=!1,a=null,o=!1,s=null,c=null,l=[`sign in`,`log in`,`create account`,`create an account`,`iniciar sesión`,`crear cuenta`],u=e=>e?.trim().toLowerCase().replace(/’/g,`'`)??``,d=e=>{let t=u(e.textContent);return t.includes(`i'm logged in`)||t.includes(`he iniciado sesión`)},f=()=>{let e=t.querySelectorAll(`.widget-button__text`);return e.length<3||t.querySelector(`#end-chat-dialog-title`)?!1:(b(r.getAttribute(`lang`)??n,e),!0)},p=()=>{if(!i)return;let e=Array.from(t.querySelectorAll(`article[data-type="inline_button"] .message-inline-buttons button`)).find(d);if(!e)return;let n=g()??a;if(n===null||Date.now()-n<M){e.style.display=`none`,o=!1;return}e.style.removeProperty(`display`),!o&&(o=!0,setTimeout(()=>{let e=t.querySelector(`.scrollarea[role="region"]`);e?.scrollTo({top:e.scrollHeight,behavior:`smooth`})},150))},m=()=>{i=!1,a=null,o=!1,_(),s!==null&&(window.clearTimeout(s),s=null),c!==null&&(window.clearInterval(c),c=null)},v=()=>{i=!0,a=h(),o=!1,c===null&&(c=window.setInterval(p,N)),p(),s!==null&&window.clearTimeout(s);let e=Math.max(M-(Date.now()-a),0);s=window.setTimeout(()=>{s=null,p()},e)},y=e=>{if(e.dataset.type===`text`)for(let t of e.querySelectorAll(`a`)){let e=u(t.getAttribute(`aria-label`)),n=u(t.textContent);l.some(t=>e.startsWith(t)||n.startsWith(t))&&(i=!0,c===null&&(c=window.setInterval(p,N)),t.dataset.authClickListenerAdded!==`true`&&(t.dataset.authClickListenerAdded=`true`,t.addEventListener(`click`,v)))}if(e.dataset.type===`inline_button`)for(let t of e.querySelectorAll(`.message-inline-buttons button`))d(t)&&t.dataset.authClickListenerAdded!==`true`&&(t.dataset.authClickListenerAdded=`true`,t.addEventListener(`click`,m));p()},x=new MutationObserver(e=>{for(let t of e)for(let e of t.addedNodes){if(!(e instanceof HTMLElement))continue;let t=e.closest(`article.message-item`);t&&y(t),e.querySelectorAll(`article.message-item`).forEach(y)}}),S=new MutationObserver(()=>{f()&&S.disconnect()}),w=new MutationObserver(()=>{f()}),T=()=>{f()||S.observe(t,{childList:!0,subtree:!0}),t.querySelectorAll(`article.message-item`).forEach(y)};x.observe(t,{childList:!0,subtree:!0}),w.observe(r,{attributes:!0,attributeFilter:[`lang`]}),T();let E=()=>{m(),T()};e.on(`exited`,E),e.on(`chat.ended`,E)},F=e=>{let t=document.querySelector(e);if(t)return t;if(!e.startsWith(`#`))throw Error(`CCAI widget mount element "${e}" was not found. Add it to the page or configure an ID selector.`);let n=e.slice(1);if(!n)throw Error(`CCAI widget mountSelector must contain an element ID.`);let r=document.createElement(`div`);return r.id=n,document.body.appendChild(r),r},I=`ujet:chat`,L=`ujet_chat_id`,R=()=>{let e=s(L);e&&!localStorage.getItem(`ujet:chat`)&&localStorage.setItem(I,e)},z=e=>{c(L,e,86400)},B=e=>{let t=0,n=!1,r=()=>document.querySelector(o.mountSelector)?.shadowRoot?.querySelector(`#chat-input-textarea`)??null,i=e=>{let t=r();t&&(t.readOnly=e)};e.on(`chat:status`,t=>{t===`timeout`&&e.hide()}),e.on(`chat.connected`,e=>{z(e.state.id)}),e.on(`chat.disconnected`,()=>{z(``)}),e.on(`chat.message`,e=>{e.$userType===`end_user`&&t<=0&&(n=!0,i(!0)),n&&e.$userType!==`end_user`&&(n=!1,i(!1))}),e.on(`chat.memberJoined`,e=>{e.includes(`virtual_agent`)||(t+=1,i(!1))}),e.on(`chat.memberLeft`,e=>{e.includes(`virtual_agent`)||(t=Math.max(0,t-1))});let a=()=>{t=0,n=!1,i(!1)};e.on(`exited`,a),e.on(`chat.ended`,a)},V=`<svg viewBox="550 550 900 900" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M761.666 554.107C778.063 551.435 808.908 553.223 826.449 553.263L946.984 553.257L1141.44 553.204C1172.62 553.201 1228.17 551.559 1257.36 556.241C1294.04 562.188 1328.8 576.717 1358.79 598.645C1415.7 640.114 1444.63 695.018 1455.46 763.311C1493.8 781.7 1490.05 809.253 1489.83 845.561C1489.67 873.497 1481.23 889.787 1455.32 902.335C1447.54 956.973 1426.3 1003.22 1386.89 1042.52C1348.78 1080.72 1298.75 1104.75 1245.11 1110.6C1224.67 1112.75 1201 1112.17 1180.18 1112.12L823.592 1112.11C811.018 1125.88 777.427 1171.22 759.93 1171.77C756.017 1171.89 752.795 1170.29 750.153 1167.46C737.834 1154.29 741.879 1125.39 742.303 1108.86C701.586 1100.41 669.988 1088.03 636.59 1062.05C586.412 1023.26 553.901 965.955 546.346 902.985C510.732 887.606 509.868 864.121 510.163 829.798C510.445 796.94 512.552 778.159 546.266 762.61C551.627 717.159 570.094 674.248 599.416 639.109C639.915 590.167 698.373 559.541 761.666 554.107ZM1264.19 581.235C1235.58 575.015 1205.84 576.424 1176.57 576.421L1087.68 576.447L779.782 576.444C777.841 576.461 775.899 576.509 773.958 576.586C713.953 580.319 661.787 603.501 621.653 649.085C592.06 682.43 573.653 724.206 569.022 768.548C567.804 780.698 567.358 794.532 567.644 806.828C568.27 833.86 566.481 862.122 568.393 889.039C572.315 946.314 599.114 999.6 642.755 1036.89C667.61 1058.45 697.168 1073.87 729.059 1081.92C739.373 1084.54 751.729 1085.83 761.463 1090.52C764.639 1092.05 765.415 1097.29 765.601 1100.67C766.341 1114.16 764.615 1129.09 765.188 1142.5C777.554 1129.55 788.955 1115.6 800.746 1102.26C807.09 1095.08 812.336 1088.05 822.494 1088.83C862.193 1088.71 901.876 1088.76 941.567 1088.76L1175.29 1088.78C1195.37 1088.83 1220.65 1089.55 1240.23 1087.69C1289.45 1082.81 1335.45 1061 1370.35 1025.97C1404.64 991.914 1426.41 947.272 1432.09 899.288C1435.48 869.233 1432.71 827.213 1433.55 795.951C1435.13 737.62 1411.88 680.642 1370.23 639.104C1341.18 610.023 1304.37 589.932 1264.19 581.235Z" fill="#FEFEFE"/>
<path d="M1221.4 760.02C1289.03 752.05 1319.74 824.751 1287.43 877.903C1277.28 894.616 1259.67 902.575 1240.96 906.133C1222.47 907.882 1206.02 905.605 1190.66 894.886C1146.75 864.222 1151.77 784.741 1203.46 764.691C1209.86 762.207 1214.69 761.133 1221.4 760.02Z" fill="#FEFEFE"/>
<path d="M760.373 760.037C851.907 748.136 871.317 889.686 779.488 906.155C681.09 914.56 671.897 774.038 760.373 760.037Z" fill="#FEFEFE"/>
<path d="M930.452 833L1069.56 832.983C1069.31 854.146 1063.99 870.801 1049.84 886.562C1016.72 918.258 961.827 913.044 939.39 871.128C932.631 858.503 930.924 847.192 930.452 833Z" fill="#FEFEFE"/>
<path d="M1082.71 1328.47C1099.69 1327.88 1109.09 1333.44 1121.76 1343.33C1124 1320.85 1142.74 1331.37 1142.79 1334.53C1143.26 1362.32 1148.49 1416.1 1142.82 1442.06C1132.6 1455.02 1125.6 1446.25 1121.48 1434.25L1120.48 1434.16L1114.6 1439.37C1107.17 1444.39 1101.29 1447.6 1092.06 1448.99C1078.88 1450.95 1065.47 1447.35 1055.03 1439.06C1016.62 1408.97 1026.37 1334.91 1082.71 1328.47ZM1087.56 1348.98C1040.15 1354.12 1042.84 1428.81 1091.36 1428.87C1137.03 1419.86 1132.71 1351.21 1087.56 1348.98Z" fill="#FEFEFE"/>
<path d="M916.938 1284.3C936.815 1282.81 932.668 1302.2 932.825 1315.88C932.949 1326.63 932.61 1337.57 932.568 1348.35C956.348 1321.97 997.276 1319 1005.92 1359.92C1010.7 1382.58 1006.04 1412.31 1007.51 1436.04C1008.08 1445.07 995.791 1451.24 988.447 1443.78C982.51 1430.09 985.244 1397.75 985.293 1382.57C985.733 1361.17 978.242 1344.27 952.629 1350.7C916.514 1359.78 942.124 1421.32 928.481 1445.17C924.245 1452.57 909.034 1443.96 910.535 1436.24C910.295 1427.05 910.154 1417.58 910.147 1408.25L910.145 1357.36C910.156 1336.64 909.948 1314.69 910.438 1293.89C910.546 1289.29 913.615 1287.03 916.938 1284.3Z" fill="#FEFEFE"/>
<path d="M842.349 1291.41C855.218 1291.97 867.322 1294.08 879.12 1299.6C883.031 1301.42 886.026 1304.76 887.406 1308.84C891.95 1322.65 876.907 1323.71 867.801 1319.29C858.675 1314.85 844.178 1312.7 833.988 1313.97C820.3 1315.65 807.876 1322.81 799.549 1333.8C781.205 1358.41 785.2 1400.68 811.147 1418.27C825.977 1428.33 845.528 1429.09 862.24 1423.5C868.682 1421.34 872.856 1418.98 879.63 1417.99C884.923 1421.15 887.05 1423.58 888.496 1429.63C885.958 1443.45 860.434 1448.46 848.464 1449.09C742.916 1454.67 730.754 1298.72 842.349 1291.41Z" fill="#FEFEFE"/>
<path d="M1194.1 1303.69C1211.88 1304.05 1208.32 1319.24 1208.03 1332.45C1218.11 1332.19 1231.84 1330.63 1237.35 1341.32C1237.15 1354.73 1216.89 1353.22 1208.02 1353.05C1208.17 1372.11 1206.54 1403.62 1209.19 1422.96C1209.85 1427.8 1225.32 1425.69 1232.54 1429.37C1236.64 1434.61 1233.17 1439.07 1229.17 1443.3C1214.15 1450.49 1191.73 1448.5 1188.09 1431.4C1183.53 1409.94 1185.56 1375.23 1185.66 1353.04C1180.27 1353.14 1170.09 1353.93 1167 1349.57C1154.81 1332.4 1177.88 1332.21 1185.65 1332.46C1185.34 1320.34 1182.54 1310.35 1194.1 1303.69Z" fill="#FEFEFE"/>
</svg>
`,H=e=>{let t=document.querySelector(e.mountSelector),n=e.checkoutOrderSummaryFlyoutId;if(!t||!n)return()=>{};let r=()=>{let e=!!document.getElementById(n);t.classList.contains(`drawerOpen`)!==e&&t.classList.toggle(`drawerOpen`,e)};r();let i=new MutationObserver(r);return i.observe(document.body,{childList:!0,subtree:!0}),()=>{i.disconnect(),t.classList.remove(`drawerOpen`)}},U=`#ccaas-widget{z-index:1250;--ujet-bottom:16px;--ujet-right:16px;--launcher-size:104px;--launcher-icon-height:44px;--launcher-icon-width:44px;--launcher-border-color:white;--launcher-border-width:2px;position:fixed}@media (width<=1024px){#ccaas-widget{--launcher-size:59px;--launcher-icon-height:23px;--launcher-icon-width:23px}}#ccaas-widget.responsiveWidget{--ujet-bottom:150px}@media (width>=640px){#ccaas-widget.responsiveWidget{--ujet-bottom:112px}}#ccaas-widget{--inverse-button-default-background:#4d6291;--inverse-button-default-color:white;--inverse-button-hover-border:2px solid #e6727a;--inverse-button-hover-background:#4d6291;--inverse-button-hover-color:white;--inverse-button-default-border:none;--launcher-default-background:#001e62;--launcher-default-border:#001e62;--accent-10:#001e62;--message-button-default-border:2px solid #001e62;--message-button-default-background:#d3d8e4;--message-button-default-color:#323432;--chat-bubble-border:none;--chat-bubble-background:#f0f1f5;--chat-bubble-border-radius:5px;--chat-bubble-user-background:#001e62;--chat-bubble-user-color:white}#ccaas-widget.drawerOpen{display:none!important}body:has(#checkout-order-summary) #ccaas-widget{display:none!important}`,W={en:v.chatWidget.translation,es:y.chatWidget.translation},G=null,K={logo:o.logo,name:o.companyName,messages:W,lang:o.language,disableAttachment:!0,customData:{userInformation:{label:`userInformation`,value:o.userInformation},region:{label:`region`,value:o.region},isMobileChannel:{label:`isMobileChannel`,value:o.isMobileChannel},platform:{label:`platform`,value:`web`},ccaipUUID:{label:`ccaipUUID`,value:d()}}},q=()=>{if(G)return G;p(o),S(U,o.styleNonce),F(o.mountSelector),H(o),R();let e=new window.UJET({companyId:o.companyId,host:o.host,tenant:o.tenant,authenticate:f});return e.config({...K,launcherOpenIcon:V}),B(e),e.on(`ready`,()=>{ie(e,o)}),e.mount(o.mountSelector),G=e,window.ujetInstance=e,e},J=()=>{(G??window.ujetInstance)?.show()},Y=`bzl-ujet-web-sdk`,X=null,ae=e=>window.UJET?Promise.resolve(window.UJET):X||(X=new Promise((t,n)=>{let r=`${e.host.replace(/\/$/,``)}/web-sdk/v3/widget.js`,i=document.getElementById(Y),a=i??document.createElement(`script`),o=()=>{if(c(),!window.UJET){X=null,n(Error(`UJET SDK loaded from ${r}, but window.UJET was not created.`));return}t(window.UJET)},s=()=>{c(),X=null,n(Error(`Failed to load the UJET Web SDK from ${r}.`))},c=()=>{a.removeEventListener(`load`,o),a.removeEventListener(`error`,s)};a.addEventListener(`load`,o,{once:!0}),a.addEventListener(`error`,s,{once:!0}),i||(a.id=Y,a.src=r,a.async=!0,e.scriptNonce&&(a.nonce=e.scriptNonce),document.head.appendChild(a))}),X),Z=null,Q=()=>o.enabled?(Z||=ae(o).then(()=>q()).catch(e=>{throw Z=null,e}),Z):Promise.resolve(null),$=()=>{Q().catch(e=>{console.error(`Unable to initialize Breezeline CCAI chatbot:`,e)})};window.BreezelineCcaiChatbot={init:Q,toggle:J},document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,$,{once:!0}):$()})();