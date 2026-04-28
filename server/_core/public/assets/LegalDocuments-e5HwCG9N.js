import{g as tr,j as L}from"./query-B3uqSMV7.js";import{a as ct}from"./router-BGWa7abV.js";import{C as ft,j as gi,B as pt}from"./index-BTXFkly1.js";import{A as yi}from"./arrow-left-Ct0tPnLf.js";import{D as bi}from"./download-dOui3NT_.js";import"./ui-D1Vd8L_q.js";import"./charts-DhLDq9Cc.js";function xi(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const wi=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,ki=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Si={};function ht(e,t){return(Si.jsx?ki:wi).test(e)}const Ai=/[ \t\n\f\r]/g;function vi(e){return typeof e=="object"?e.type==="text"?mt(e.value):!1:mt(e)}function mt(e){return e.replace(Ai,"")===""}class Ge{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}}Ge.prototype.normal={};Ge.prototype.property={};Ge.prototype.space=void 0;function rr(e,t){const n={},r={};for(const i of e)Object.assign(n,i.property),Object.assign(r,i.normal);return new Ge(n,r,t)}function Pn(e){return e.toLowerCase()}class ne{constructor(t,n){this.attribute=n,this.property=t}}ne.prototype.attribute="";ne.prototype.booleanish=!1;ne.prototype.boolean=!1;ne.prototype.commaOrSpaceSeparated=!1;ne.prototype.commaSeparated=!1;ne.prototype.defined=!1;ne.prototype.mustUseProperty=!1;ne.prototype.number=!1;ne.prototype.overloadedBoolean=!1;ne.prototype.property="";ne.prototype.spaceSeparated=!1;ne.prototype.space=void 0;let Ei=0;const M=Ee(),G=Ee(),Dn=Ee(),v=Ee(),$=Ee(),Re=Ee(),re=Ee();function Ee(){return 2**++Ei}const Rn=Object.freeze(Object.defineProperty({__proto__:null,boolean:M,booleanish:G,commaOrSpaceSeparated:re,commaSeparated:Re,number:v,overloadedBoolean:Dn,spaceSeparated:$},Symbol.toStringTag,{value:"Module"})),hn=Object.keys(Rn);class Un extends ne{constructor(t,n,r,i){let a=-1;if(super(t,n),dt(this,"space",i),typeof r=="number")for(;++a<hn.length;){const o=hn[a];dt(this,hn[a],(r&Rn[o])===Rn[o])}}}Un.prototype.defined=!0;function dt(e,t,n){n&&(e[t]=n)}function Fe(e){const t={},n={};for(const[r,i]of Object.entries(e.properties)){const a=new Un(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(a.mustUseProperty=!0),t[r]=a,n[Pn(r)]=r,n[Pn(a.attribute)]=r}return new Ge(t,n,e.space)}const ir=Fe({properties:{ariaActiveDescendant:null,ariaAtomic:G,ariaAutoComplete:null,ariaBusy:G,ariaChecked:G,ariaColCount:v,ariaColIndex:v,ariaColSpan:v,ariaControls:$,ariaCurrent:null,ariaDescribedBy:$,ariaDetails:null,ariaDisabled:G,ariaDropEffect:$,ariaErrorMessage:null,ariaExpanded:G,ariaFlowTo:$,ariaGrabbed:G,ariaHasPopup:null,ariaHidden:G,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:$,ariaLevel:v,ariaLive:null,ariaModal:G,ariaMultiLine:G,ariaMultiSelectable:G,ariaOrientation:null,ariaOwns:$,ariaPlaceholder:null,ariaPosInSet:v,ariaPressed:G,ariaReadOnly:G,ariaRelevant:null,ariaRequired:G,ariaRoleDescription:$,ariaRowCount:v,ariaRowIndex:v,ariaRowSpan:v,ariaSelected:G,ariaSetSize:v,ariaSort:null,ariaValueMax:v,ariaValueMin:v,ariaValueNow:v,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function or(e,t){return t in e?e[t]:t}function ar(e,t){return or(e,t.toLowerCase())}const Ci=Fe({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Re,acceptCharset:$,accessKey:$,action:null,allow:null,allowFullScreen:M,allowPaymentRequest:M,allowUserMedia:M,alt:null,as:null,async:M,autoCapitalize:null,autoComplete:$,autoFocus:M,autoPlay:M,blocking:$,capture:null,charSet:null,checked:M,cite:null,className:$,cols:v,colSpan:null,content:null,contentEditable:G,controls:M,controlsList:$,coords:v|Re,crossOrigin:null,data:null,dateTime:null,decoding:null,default:M,defer:M,dir:null,dirName:null,disabled:M,download:Dn,draggable:G,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:M,formTarget:null,headers:$,height:v,hidden:Dn,high:v,href:null,hrefLang:null,htmlFor:$,httpEquiv:$,id:null,imageSizes:null,imageSrcSet:null,inert:M,inputMode:null,integrity:null,is:null,isMap:M,itemId:null,itemProp:$,itemRef:$,itemScope:M,itemType:$,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:M,low:v,manifest:null,max:null,maxLength:v,media:null,method:null,min:null,minLength:v,multiple:M,muted:M,name:null,nonce:null,noModule:M,noValidate:M,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:M,optimum:v,pattern:null,ping:$,placeholder:null,playsInline:M,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:M,referrerPolicy:null,rel:$,required:M,reversed:M,rows:v,rowSpan:v,sandbox:$,scope:null,scoped:M,seamless:M,selected:M,shadowRootClonable:M,shadowRootDelegatesFocus:M,shadowRootMode:null,shape:null,size:v,sizes:null,slot:null,span:v,spellCheck:G,src:null,srcDoc:null,srcLang:null,srcSet:null,start:v,step:null,style:null,tabIndex:v,target:null,title:null,translate:null,type:null,typeMustMatch:M,useMap:null,value:G,width:v,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:$,axis:null,background:null,bgColor:null,border:v,borderColor:null,bottomMargin:v,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:M,declare:M,event:null,face:null,frame:null,frameBorder:null,hSpace:v,leftMargin:v,link:null,longDesc:null,lowSrc:null,marginHeight:v,marginWidth:v,noResize:M,noHref:M,noShade:M,noWrap:M,object:null,profile:null,prompt:null,rev:null,rightMargin:v,rules:null,scheme:null,scrolling:G,standby:null,summary:null,text:null,topMargin:v,valueType:null,version:null,vAlign:null,vLink:null,vSpace:v,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:M,disableRemotePlayback:M,prefix:null,property:null,results:v,security:null,unselectable:null},space:"html",transform:ar}),Ti=Fe({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:re,accentHeight:v,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:v,amplitude:v,arabicForm:null,ascent:v,attributeName:null,attributeType:null,azimuth:v,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:v,by:null,calcMode:null,capHeight:v,className:$,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:v,diffuseConstant:v,direction:null,display:null,dur:null,divisor:v,dominantBaseline:null,download:M,dx:null,dy:null,edgeMode:null,editable:null,elevation:v,enableBackground:null,end:null,event:null,exponent:v,externalResourcesRequired:null,fill:null,fillOpacity:v,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Re,g2:Re,glyphName:Re,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:v,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:v,horizOriginX:v,horizOriginY:v,id:null,ideographic:v,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:v,k:v,k1:v,k2:v,k3:v,k4:v,kernelMatrix:re,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:v,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:v,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:v,overlineThickness:v,paintOrder:null,panose1:null,path:null,pathLength:v,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:$,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:v,pointsAtY:v,pointsAtZ:v,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:re,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:re,rev:re,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:re,requiredFeatures:re,requiredFonts:re,requiredFormats:re,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:v,specularExponent:v,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:v,strikethroughThickness:v,string:null,stroke:null,strokeDashArray:re,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:v,strokeOpacity:v,strokeWidth:null,style:null,surfaceScale:v,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:re,tabIndex:v,tableValues:null,target:null,targetX:v,targetY:v,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:re,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:v,underlineThickness:v,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:v,values:null,vAlphabetic:v,vMathematical:v,vectorEffect:null,vHanging:v,vIdeographic:v,version:null,vertAdvY:v,vertOriginX:v,vertOriginY:v,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:v,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:or}),lr=Fe({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),sr=Fe({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:ar}),ur=Fe({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),Ii={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},Li=/[A-Z]/g,gt=/-[a-z]/g,Pi=/^data[-\w.:]+$/i;function Di(e,t){const n=Pn(t);let r=t,i=ne;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&Pi.test(t)){if(t.charAt(4)==="-"){const a=t.slice(5).replace(gt,Ni);r="data"+a.charAt(0).toUpperCase()+a.slice(1)}else{const a=t.slice(4);if(!gt.test(a)){let o=a.replace(Li,Ri);o.charAt(0)!=="-"&&(o="-"+o),t="data"+o}}i=Un}return new i(r,t)}function Ri(e){return"-"+e.toLowerCase()}function Ni(e){return e.charAt(1).toUpperCase()}const Fi=rr([ir,Ci,lr,sr,ur],"html"),Hn=rr([ir,Ti,lr,sr,ur],"svg");function Oi(e){return e.join(" ").trim()}var Le={},mn,yt;function Mi(){if(yt)return mn;yt=1;var e=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,t=/\n/g,n=/^\s*/,r=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,i=/^:\s*/,a=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,o=/^[;\s]*/,l=/^\s+|\s+$/g,u=`
`,s="/",f="*",c="",h="comment",p="declaration";function g(S,y){if(typeof S!="string")throw new TypeError("First argument must be a string");if(!S)return[];y=y||{};var E=1,A=1;function F(R){var T=R.match(t);T&&(E+=T.length);var W=R.lastIndexOf(u);A=~W?R.length-W:A+R.length}function O(){var R={line:E,column:A};return function(T){return T.position=new w(R),U(),T}}function w(R){this.start=R,this.end={line:E,column:A},this.source=y.source}w.prototype.content=S;function z(R){var T=new Error(y.source+":"+E+":"+A+": "+R);if(T.reason=R,T.filename=y.source,T.line=E,T.column=A,T.source=S,!y.silent)throw T}function H(R){var T=R.exec(S);if(T){var W=T[0];return F(W),S=S.slice(W.length),T}}function U(){H(n)}function b(R){var T;for(R=R||[];T=I();)T!==!1&&R.push(T);return R}function I(){var R=O();if(!(s!=S.charAt(0)||f!=S.charAt(1))){for(var T=2;c!=S.charAt(T)&&(f!=S.charAt(T)||s!=S.charAt(T+1));)++T;if(T+=2,c===S.charAt(T-1))return z("End of comment missing");var W=S.slice(2,T-2);return A+=2,F(W),S=S.slice(T),A+=2,R({type:h,comment:W})}}function P(){var R=O(),T=H(r);if(T){if(I(),!H(i))return z("property missing ':'");var W=H(a),X=R({type:p,property:k(T[0].replace(e,c)),value:W?k(W[0].replace(e,c)):c});return H(o),X}}function q(){var R=[];b(R);for(var T;T=P();)T!==!1&&(R.push(T),b(R));return R}return U(),q()}function k(S){return S?S.replace(l,c):c}return mn=g,mn}var bt;function _i(){if(bt)return Le;bt=1;var e=Le&&Le.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(Le,"__esModule",{value:!0}),Le.default=n;const t=e(Mi());function n(r,i){let a=null;if(!r||typeof r!="string")return a;const o=(0,t.default)(r),l=typeof i=="function";return o.forEach(u=>{if(u.type!=="declaration")return;const{property:s,value:f}=u;l?i(s,f,u):f&&(a=a||{},a[s]=f)}),a}return Le}var Be={},xt;function zi(){if(xt)return Be;xt=1,Object.defineProperty(Be,"__esModule",{value:!0}),Be.camelCase=void 0;var e=/^--[a-zA-Z0-9_-]+$/,t=/-([a-z])/g,n=/^[^-]+$/,r=/^-(webkit|moz|ms|o|khtml)-/,i=/^-(ms)-/,a=function(s){return!s||n.test(s)||e.test(s)},o=function(s,f){return f.toUpperCase()},l=function(s,f){return"".concat(f,"-")},u=function(s,f){return f===void 0&&(f={}),a(s)?s:(s=s.toLowerCase(),f.reactCompat?s=s.replace(i,l):s=s.replace(r,l),s.replace(t,o))};return Be.camelCase=u,Be}var je,wt;function Bi(){if(wt)return je;wt=1;var e=je&&je.__importDefault||function(i){return i&&i.__esModule?i:{default:i}},t=e(_i()),n=zi();function r(i,a){var o={};return!i||typeof i!="string"||(0,t.default)(i,function(l,u){l&&u&&(o[(0,n.camelCase)(l,a)]=u)}),o}return r.default=r,je=r,je}var ji=Bi();const Ui=tr(ji),cr=fr("end"),qn=fr("start");function fr(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function Hi(e){const t=qn(e),n=cr(e);if(t&&n)return{start:t,end:n}}function qe(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?kt(e.position):"start"in e||"end"in e?kt(e):"line"in e||"column"in e?Nn(e):""}function Nn(e){return St(e&&e.line)+":"+St(e&&e.column)}function kt(e){return Nn(e&&e.start)+"-"+Nn(e&&e.end)}function St(e){return e&&typeof e=="number"?e:1}class J extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",a={},o=!1;if(n&&("line"in n&&"column"in n?a={place:n}:"start"in n&&"end"in n?a={place:n}:"type"in n?a={ancestors:[n],place:n.position}:a={...n}),typeof t=="string"?i=t:!a.cause&&t&&(o=!0,i=t.message,a.cause=t),!a.ruleId&&!a.source&&typeof r=="string"){const u=r.indexOf(":");u===-1?a.ruleId=r:(a.source=r.slice(0,u),a.ruleId=r.slice(u+1))}if(!a.place&&a.ancestors&&a.ancestors){const u=a.ancestors[a.ancestors.length-1];u&&(a.place=u.position)}const l=a.place&&"start"in a.place?a.place.start:a.place;this.ancestors=a.ancestors||void 0,this.cause=a.cause||void 0,this.column=l?l.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=l?l.line:void 0,this.name=qe(a.place)||"1:1",this.place=a.place||void 0,this.reason=this.message,this.ruleId=a.ruleId||void 0,this.source=a.source||void 0,this.stack=o&&a.cause&&typeof a.cause.stack=="string"?a.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}J.prototype.file="";J.prototype.name="";J.prototype.reason="";J.prototype.message="";J.prototype.stack="";J.prototype.column=void 0;J.prototype.line=void 0;J.prototype.ancestors=void 0;J.prototype.cause=void 0;J.prototype.fatal=void 0;J.prototype.place=void 0;J.prototype.ruleId=void 0;J.prototype.source=void 0;const Wn={}.hasOwnProperty,qi=new Map,Wi=/[A-Z]/g,Yi=new Set(["table","tbody","thead","tfoot","tr"]),Vi=new Set(["td","th"]),pr="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function $i(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=no(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=eo(n,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?Hn:Fi,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},a=hr(i,e,void 0);return a&&typeof a!="string"?a:i.create(e,i.Fragment,{children:a||void 0},void 0)}function hr(e,t,n){if(t.type==="element")return Gi(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return Xi(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return Ki(e,t,n);if(t.type==="mdxjsEsm")return Qi(e,t);if(t.type==="root")return Ji(e,t,n);if(t.type==="text")return Zi(e,t)}function Gi(e,t,n){const r=e.schema;let i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=Hn,e.schema=i),e.ancestors.push(t);const a=dr(e,t.tagName,!1),o=to(e,t);let l=Vn(e,t);return Yi.has(t.tagName)&&(l=l.filter(function(u){return typeof u=="string"?!vi(u):!0})),mr(e,o,a,t),Yn(o,l),e.ancestors.pop(),e.schema=r,e.create(t,a,o,n)}function Xi(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}Ve(e,t.position)}function Qi(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);Ve(e,t.position)}function Ki(e,t,n){const r=e.schema;let i=r;t.name==="svg"&&r.space==="html"&&(i=Hn,e.schema=i),e.ancestors.push(t);const a=t.name===null?e.Fragment:dr(e,t.name,!0),o=ro(e,t),l=Vn(e,t);return mr(e,o,a,t),Yn(o,l),e.ancestors.pop(),e.schema=r,e.create(t,a,o,n)}function Ji(e,t,n){const r={};return Yn(r,Vn(e,t)),e.create(t,e.Fragment,r,n)}function Zi(e,t){return t.value}function mr(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function Yn(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function eo(e,t,n){return r;function r(i,a,o,l){const s=Array.isArray(o.children)?n:t;return l?s(a,o,l):s(a,o)}}function no(e,t){return n;function n(r,i,a,o){const l=Array.isArray(a.children),u=qn(r);return t(i,a,o,l,{columnNumber:u?u.column-1:void 0,fileName:e,lineNumber:u?u.line:void 0},void 0)}}function to(e,t){const n={};let r,i;for(i in t.properties)if(i!=="children"&&Wn.call(t.properties,i)){const a=io(e,i,t.properties[i]);if(a){const[o,l]=a;e.tableCellAlignToStyle&&o==="align"&&typeof l=="string"&&Vi.has(t.tagName)?r=l:n[o]=l}}if(r){const a=n.style||(n.style={});a[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function ro(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const a=r.data.estree.body[0];a.type;const o=a.expression;o.type;const l=o.properties[0];l.type,Object.assign(n,e.evaluater.evaluateExpression(l.argument))}else Ve(e,t.position);else{const i=r.name;let a;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const l=r.value.data.estree.body[0];l.type,a=e.evaluater.evaluateExpression(l.expression)}else Ve(e,t.position);else a=r.value===null?!0:r.value;n[i]=a}return n}function Vn(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:qi;for(;++r<t.children.length;){const a=t.children[r];let o;if(e.passKeys){const u=a.type==="element"?a.tagName:a.type==="mdxJsxFlowElement"||a.type==="mdxJsxTextElement"?a.name:void 0;if(u){const s=i.get(u)||0;o=u+"-"+s,i.set(u,s+1)}}const l=hr(e,a,o);l!==void 0&&n.push(l)}return n}function io(e,t,n){const r=Di(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?xi(n):Oi(n)),r.property==="style"){let i=typeof n=="object"?n:oo(e,String(n));return e.stylePropertyNameCase==="css"&&(i=ao(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?Ii[r.property]||r.property:r.attribute,n]}}function oo(e,t){try{return Ui(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const r=n,i=new J("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=pr+"#cannot-parse-style-attribute",i}}function dr(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const i=t.split(".");let a=-1,o;for(;++a<i.length;){const l=ht(i[a])?{type:"Identifier",name:i[a]}:{type:"Literal",value:i[a]};o=o?{type:"MemberExpression",object:o,property:l,computed:!!(a&&l.type==="Literal"),optional:!1}:l}r=o}else r=ht(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const i=r.value;return Wn.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);Ve(e)}function Ve(e,t){const n=new J("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=pr+"#cannot-handle-mdx-estrees-without-createevaluater",n}function ao(e){const t={};let n;for(n in e)Wn.call(e,n)&&(t[lo(n)]=e[n]);return t}function lo(e){let t=e.replace(Wi,so);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function so(e){return"-"+e.toLowerCase()}const dn={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},uo={};function $n(e,t){const n=uo,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return gr(e,r,i)}function gr(e,t,n){if(co(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return At(e.children,t,n)}return Array.isArray(e)?At(e,t,n):""}function At(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=gr(e[i],t,n);return r.join("")}function co(e){return!!(e&&typeof e=="object")}const vt=document.createElement("i");function Gn(e){const t="&"+e+";";vt.innerHTML=t;const n=vt.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function ie(e,t,n,r){const i=e.length;let a=0,o;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)o=Array.from(r),o.unshift(t,n),e.splice(...o);else for(n&&e.splice(t,n);a<r.length;)o=r.slice(a,a+1e4),o.unshift(t,0),e.splice(...o),a+=1e4,t+=1e4}function oe(e,t){return e.length>0?(ie(e,e.length,0,t),e):t}const Et={}.hasOwnProperty;function yr(e){const t={};let n=-1;for(;++n<e.length;)fo(t,e[n]);return t}function fo(e,t){let n;for(n in t){const i=(Et.call(e,n)?e[n]:void 0)||(e[n]={}),a=t[n];let o;if(a)for(o in a){Et.call(i,o)||(i[o]=[]);const l=a[o];po(i[o],Array.isArray(l)?l:l?[l]:[])}}}function po(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);ie(e,0,0,r)}function br(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function ce(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const Z=we(/[A-Za-z]/),K=we(/[\dA-Za-z]/),ho=we(/[#-'*+\--9=?A-Z^-~]/);function rn(e){return e!==null&&(e<32||e===127)}const Fn=we(/\d/),mo=we(/[\dA-Fa-f]/),go=we(/[!-/:-@[-`{-~]/);function D(e){return e!==null&&e<-2}function V(e){return e!==null&&(e<0||e===32)}function _(e){return e===-2||e===-1||e===32}const sn=we(new RegExp("\\p{P}|\\p{S}","u")),ve=we(/\s/);function we(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function Oe(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const a=e.charCodeAt(n);let o="";if(a===37&&K(e.charCodeAt(n+1))&&K(e.charCodeAt(n+2)))i=2;else if(a<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a))||(o=String.fromCharCode(a));else if(a>55295&&a<57344){const l=e.charCodeAt(n+1);a<56320&&l>56319&&l<57344?(o=String.fromCharCode(a,l),i=1):o="�"}else o=String.fromCharCode(a);o&&(t.push(e.slice(r,n),encodeURIComponent(o)),r=n+i+1,o=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function j(e,t,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let a=0;return o;function o(u){return _(u)?(e.enter(n),l(u)):t(u)}function l(u){return _(u)&&a++<i?(e.consume(u),l):(e.exit(n),t(u))}}const yo={tokenize:bo};function bo(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let n;return t;function r(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),j(e,t,"linePrefix")}function i(l){return e.enter("paragraph"),a(l)}function a(l){const u=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=u),n=u,o(l)}function o(l){if(l===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(l);return}return D(l)?(e.consume(l),e.exit("chunkText"),a):(e.consume(l),o)}}const xo={tokenize:wo},Ct={tokenize:ko};function wo(e){const t=this,n=[];let r=0,i,a,o;return l;function l(A){if(r<n.length){const F=n[r];return t.containerState=F[1],e.attempt(F[0].continuation,u,s)(A)}return s(A)}function u(A){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&E();const F=t.events.length;let O=F,w;for(;O--;)if(t.events[O][0]==="exit"&&t.events[O][1].type==="chunkFlow"){w=t.events[O][1].end;break}y(r);let z=F;for(;z<t.events.length;)t.events[z][1].end={...w},z++;return ie(t.events,O+1,0,t.events.slice(F)),t.events.length=z,s(A)}return l(A)}function s(A){if(r===n.length){if(!i)return h(A);if(i.currentConstruct&&i.currentConstruct.concrete)return g(A);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(Ct,f,c)(A)}function f(A){return i&&E(),y(r),h(A)}function c(A){return t.parser.lazy[t.now().line]=r!==n.length,o=t.now().offset,g(A)}function h(A){return t.containerState={},e.attempt(Ct,p,g)(A)}function p(A){return r++,n.push([t.currentConstruct,t.containerState]),h(A)}function g(A){if(A===null){i&&E(),y(0),e.consume(A);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:a}),k(A)}function k(A){if(A===null){S(e.exit("chunkFlow"),!0),y(0),e.consume(A);return}return D(A)?(e.consume(A),S(e.exit("chunkFlow")),r=0,t.interrupt=void 0,l):(e.consume(A),k)}function S(A,F){const O=t.sliceStream(A);if(F&&O.push(null),A.previous=a,a&&(a.next=A),a=A,i.defineSkip(A.start),i.write(O),t.parser.lazy[A.start.line]){let w=i.events.length;for(;w--;)if(i.events[w][1].start.offset<o&&(!i.events[w][1].end||i.events[w][1].end.offset>o))return;const z=t.events.length;let H=z,U,b;for(;H--;)if(t.events[H][0]==="exit"&&t.events[H][1].type==="chunkFlow"){if(U){b=t.events[H][1].end;break}U=!0}for(y(r),w=z;w<t.events.length;)t.events[w][1].end={...b},w++;ie(t.events,H+1,0,t.events.slice(z)),t.events.length=w}}function y(A){let F=n.length;for(;F-- >A;){const O=n[F];t.containerState=O[1],O[0].exit.call(t,e)}n.length=A}function E(){i.write([null]),a=void 0,i=void 0,t.containerState._closeFlow=void 0}}function ko(e,t,n){return j(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Ne(e){if(e===null||V(e)||ve(e))return 1;if(sn(e))return 2}function un(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const a=e[i].resolveAll;a&&!r.includes(a)&&(t=a(t,n),r.push(a))}return t}const On={name:"attention",resolveAll:So,tokenize:Ao};function So(e,t){let n=-1,r,i,a,o,l,u,s,f;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;u=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const c={...e[r][1].end},h={...e[n][1].start};Tt(c,-u),Tt(h,u),o={type:u>1?"strongSequence":"emphasisSequence",start:c,end:{...e[r][1].end}},l={type:u>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:h},a={type:u>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},i={type:u>1?"strong":"emphasis",start:{...o.start},end:{...l.end}},e[r][1].end={...o.start},e[n][1].start={...l.end},s=[],e[r][1].end.offset-e[r][1].start.offset&&(s=oe(s,[["enter",e[r][1],t],["exit",e[r][1],t]])),s=oe(s,[["enter",i,t],["enter",o,t],["exit",o,t],["enter",a,t]]),s=oe(s,un(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),s=oe(s,[["exit",a,t],["enter",l,t],["exit",l,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(f=2,s=oe(s,[["enter",e[n][1],t],["exit",e[n][1],t]])):f=0,ie(e,r-1,n-r+3,s),n=r+s.length-f-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function Ao(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=Ne(r);let a;return o;function o(u){return a=u,e.enter("attentionSequence"),l(u)}function l(u){if(u===a)return e.consume(u),l;const s=e.exit("attentionSequence"),f=Ne(u),c=!f||f===2&&i||n.includes(u),h=!i||i===2&&f||n.includes(r);return s._open=!!(a===42?c:c&&(i||!h)),s._close=!!(a===42?h:h&&(f||!c)),t(u)}}function Tt(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const vo={name:"autolink",tokenize:Eo};function Eo(e,t,n){let r=0;return i;function i(p){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),a}function a(p){return Z(p)?(e.consume(p),o):p===64?n(p):s(p)}function o(p){return p===43||p===45||p===46||K(p)?(r=1,l(p)):s(p)}function l(p){return p===58?(e.consume(p),r=0,u):(p===43||p===45||p===46||K(p))&&r++<32?(e.consume(p),l):(r=0,s(p))}function u(p){return p===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),t):p===null||p===32||p===60||rn(p)?n(p):(e.consume(p),u)}function s(p){return p===64?(e.consume(p),f):ho(p)?(e.consume(p),s):n(p)}function f(p){return K(p)?c(p):n(p)}function c(p){return p===46?(e.consume(p),r=0,f):p===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),t):h(p)}function h(p){if((p===45||K(p))&&r++<63){const g=p===45?h:c;return e.consume(p),g}return n(p)}}const Xe={partial:!0,tokenize:Co};function Co(e,t,n){return r;function r(a){return _(a)?j(e,i,"linePrefix")(a):i(a)}function i(a){return a===null||D(a)?t(a):n(a)}}const xr={continuation:{tokenize:Io},exit:Lo,name:"blockQuote",tokenize:To};function To(e,t,n){const r=this;return i;function i(o){if(o===62){const l=r.containerState;return l.open||(e.enter("blockQuote",{_container:!0}),l.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(o),e.exit("blockQuoteMarker"),a}return n(o)}function a(o){return _(o)?(e.enter("blockQuotePrefixWhitespace"),e.consume(o),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(o))}}function Io(e,t,n){const r=this;return i;function i(o){return _(o)?j(e,a,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(o):a(o)}function a(o){return e.attempt(xr,t,n)(o)}}function Lo(e){e.exit("blockQuote")}const wr={name:"characterEscape",tokenize:Po};function Po(e,t,n){return r;function r(a){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(a),e.exit("escapeMarker"),i}function i(a){return go(a)?(e.enter("characterEscapeValue"),e.consume(a),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(a)}}const kr={name:"characterReference",tokenize:Do};function Do(e,t,n){const r=this;let i=0,a,o;return l;function l(c){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(c),e.exit("characterReferenceMarker"),u}function u(c){return c===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(c),e.exit("characterReferenceMarkerNumeric"),s):(e.enter("characterReferenceValue"),a=31,o=K,f(c))}function s(c){return c===88||c===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(c),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),a=6,o=mo,f):(e.enter("characterReferenceValue"),a=7,o=Fn,f(c))}function f(c){if(c===59&&i){const h=e.exit("characterReferenceValue");return o===K&&!Gn(r.sliceSerialize(h))?n(c):(e.enter("characterReferenceMarker"),e.consume(c),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return o(c)&&i++<a?(e.consume(c),f):n(c)}}const It={partial:!0,tokenize:No},Lt={concrete:!0,name:"codeFenced",tokenize:Ro};function Ro(e,t,n){const r=this,i={partial:!0,tokenize:O};let a=0,o=0,l;return u;function u(w){return s(w)}function s(w){const z=r.events[r.events.length-1];return a=z&&z[1].type==="linePrefix"?z[2].sliceSerialize(z[1],!0).length:0,l=w,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),f(w)}function f(w){return w===l?(o++,e.consume(w),f):o<3?n(w):(e.exit("codeFencedFenceSequence"),_(w)?j(e,c,"whitespace")(w):c(w))}function c(w){return w===null||D(w)?(e.exit("codeFencedFence"),r.interrupt?t(w):e.check(It,k,F)(w)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),h(w))}function h(w){return w===null||D(w)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),c(w)):_(w)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),j(e,p,"whitespace")(w)):w===96&&w===l?n(w):(e.consume(w),h)}function p(w){return w===null||D(w)?c(w):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),g(w))}function g(w){return w===null||D(w)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),c(w)):w===96&&w===l?n(w):(e.consume(w),g)}function k(w){return e.attempt(i,F,S)(w)}function S(w){return e.enter("lineEnding"),e.consume(w),e.exit("lineEnding"),y}function y(w){return a>0&&_(w)?j(e,E,"linePrefix",a+1)(w):E(w)}function E(w){return w===null||D(w)?e.check(It,k,F)(w):(e.enter("codeFlowValue"),A(w))}function A(w){return w===null||D(w)?(e.exit("codeFlowValue"),E(w)):(e.consume(w),A)}function F(w){return e.exit("codeFenced"),t(w)}function O(w,z,H){let U=0;return b;function b(T){return w.enter("lineEnding"),w.consume(T),w.exit("lineEnding"),I}function I(T){return w.enter("codeFencedFence"),_(T)?j(w,P,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(T):P(T)}function P(T){return T===l?(w.enter("codeFencedFenceSequence"),q(T)):H(T)}function q(T){return T===l?(U++,w.consume(T),q):U>=o?(w.exit("codeFencedFenceSequence"),_(T)?j(w,R,"whitespace")(T):R(T)):H(T)}function R(T){return T===null||D(T)?(w.exit("codeFencedFence"),z(T)):H(T)}}}function No(e,t,n){const r=this;return i;function i(o){return o===null?n(o):(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),a)}function a(o){return r.parser.lazy[r.now().line]?n(o):t(o)}}const gn={name:"codeIndented",tokenize:Oo},Fo={partial:!0,tokenize:Mo};function Oo(e,t,n){const r=this;return i;function i(s){return e.enter("codeIndented"),j(e,a,"linePrefix",5)(s)}function a(s){const f=r.events[r.events.length-1];return f&&f[1].type==="linePrefix"&&f[2].sliceSerialize(f[1],!0).length>=4?o(s):n(s)}function o(s){return s===null?u(s):D(s)?e.attempt(Fo,o,u)(s):(e.enter("codeFlowValue"),l(s))}function l(s){return s===null||D(s)?(e.exit("codeFlowValue"),o(s)):(e.consume(s),l)}function u(s){return e.exit("codeIndented"),t(s)}}function Mo(e,t,n){const r=this;return i;function i(o){return r.parser.lazy[r.now().line]?n(o):D(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),i):j(e,a,"linePrefix",5)(o)}function a(o){const l=r.events[r.events.length-1];return l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?t(o):D(o)?i(o):n(o)}}const _o={name:"codeText",previous:Bo,resolve:zo,tokenize:jo};function zo(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function Bo(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function jo(e,t,n){let r=0,i,a;return o;function o(c){return e.enter("codeText"),e.enter("codeTextSequence"),l(c)}function l(c){return c===96?(e.consume(c),r++,l):(e.exit("codeTextSequence"),u(c))}function u(c){return c===null?n(c):c===32?(e.enter("space"),e.consume(c),e.exit("space"),u):c===96?(a=e.enter("codeTextSequence"),i=0,f(c)):D(c)?(e.enter("lineEnding"),e.consume(c),e.exit("lineEnding"),u):(e.enter("codeTextData"),s(c))}function s(c){return c===null||c===32||c===96||D(c)?(e.exit("codeTextData"),u(c)):(e.consume(c),s)}function f(c){return c===96?(e.consume(c),i++,f):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(c)):(a.type="codeTextData",s(c))}}class Uo{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){const i=n||0;this.setCursor(Math.trunc(t));const a=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&Ue(this.left,r),a.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),Ue(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),Ue(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);Ue(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);Ue(this.left,n.reverse())}}}function Ue(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function Sr(e){const t={};let n=-1,r,i,a,o,l,u,s;const f=new Uo(e);for(;++n<f.length;){for(;n in t;)n=t[n];if(r=f.get(n),n&&r[1].type==="chunkFlow"&&f.get(n-1)[1].type==="listItemPrefix"&&(u=r[1]._tokenizer.events,a=0,a<u.length&&u[a][1].type==="lineEndingBlank"&&(a+=2),a<u.length&&u[a][1].type==="content"))for(;++a<u.length&&u[a][1].type!=="content";)u[a][1].type==="chunkText"&&(u[a][1]._isInFirstContentOfListItem=!0,a++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,Ho(f,n)),n=t[n],s=!0);else if(r[1]._container){for(a=n,i=void 0;a--;)if(o=f.get(a),o[1].type==="lineEnding"||o[1].type==="lineEndingBlank")o[0]==="enter"&&(i&&(f.get(i)[1].type="lineEndingBlank"),o[1].type="lineEnding",i=a);else if(!(o[1].type==="linePrefix"||o[1].type==="listItemIndent"))break;i&&(r[1].end={...f.get(i)[1].start},l=f.slice(i,n),l.unshift(r),f.splice(i,n-i+1,l))}}return ie(e,0,Number.POSITIVE_INFINITY,f.slice(0)),!s}function Ho(e,t){const n=e.get(t)[1],r=e.get(t)[2];let i=t-1;const a=[];let o=n._tokenizer;o||(o=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(o._contentTypeTextTrailing=!0));const l=o.events,u=[],s={};let f,c,h=-1,p=n,g=0,k=0;const S=[k];for(;p;){for(;e.get(++i)[1]!==p;);a.push(i),p._tokenizer||(f=r.sliceStream(p),p.next||f.push(null),c&&o.defineSkip(p.start),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=!0),o.write(f),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),c=p,p=p.next}for(p=n;++h<l.length;)l[h][0]==="exit"&&l[h-1][0]==="enter"&&l[h][1].type===l[h-1][1].type&&l[h][1].start.line!==l[h][1].end.line&&(k=h+1,S.push(k),p._tokenizer=void 0,p.previous=void 0,p=p.next);for(o.events=[],p?(p._tokenizer=void 0,p.previous=void 0):S.pop(),h=S.length;h--;){const y=l.slice(S[h],S[h+1]),E=a.pop();u.push([E,E+y.length-1]),e.splice(E,2,y)}for(u.reverse(),h=-1;++h<u.length;)s[g+u[h][0]]=g+u[h][1],g+=u[h][1]-u[h][0]-1;return s}const qo={resolve:Yo,tokenize:Vo},Wo={partial:!0,tokenize:$o};function Yo(e){return Sr(e),e}function Vo(e,t){let n;return r;function r(l){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(l)}function i(l){return l===null?a(l):D(l)?e.check(Wo,o,a)(l):(e.consume(l),i)}function a(l){return e.exit("chunkContent"),e.exit("content"),t(l)}function o(l){return e.consume(l),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function $o(e,t,n){const r=this;return i;function i(o){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),j(e,a,"linePrefix")}function a(o){if(o===null||D(o))return n(o);const l=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?t(o):e.interrupt(r.parser.constructs.flow,n,t)(o)}}function Ar(e,t,n,r,i,a,o,l,u){const s=u||Number.POSITIVE_INFINITY;let f=0;return c;function c(y){return y===60?(e.enter(r),e.enter(i),e.enter(a),e.consume(y),e.exit(a),h):y===null||y===32||y===41||rn(y)?n(y):(e.enter(r),e.enter(o),e.enter(l),e.enter("chunkString",{contentType:"string"}),k(y))}function h(y){return y===62?(e.enter(a),e.consume(y),e.exit(a),e.exit(i),e.exit(r),t):(e.enter(l),e.enter("chunkString",{contentType:"string"}),p(y))}function p(y){return y===62?(e.exit("chunkString"),e.exit(l),h(y)):y===null||y===60||D(y)?n(y):(e.consume(y),y===92?g:p)}function g(y){return y===60||y===62||y===92?(e.consume(y),p):p(y)}function k(y){return!f&&(y===null||y===41||V(y))?(e.exit("chunkString"),e.exit(l),e.exit(o),e.exit(r),t(y)):f<s&&y===40?(e.consume(y),f++,k):y===41?(e.consume(y),f--,k):y===null||y===32||y===40||rn(y)?n(y):(e.consume(y),y===92?S:k)}function S(y){return y===40||y===41||y===92?(e.consume(y),k):k(y)}}function vr(e,t,n,r,i,a){const o=this;let l=0,u;return s;function s(p){return e.enter(r),e.enter(i),e.consume(p),e.exit(i),e.enter(a),f}function f(p){return l>999||p===null||p===91||p===93&&!u||p===94&&!l&&"_hiddenFootnoteSupport"in o.parser.constructs?n(p):p===93?(e.exit(a),e.enter(i),e.consume(p),e.exit(i),e.exit(r),t):D(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),f):(e.enter("chunkString",{contentType:"string"}),c(p))}function c(p){return p===null||p===91||p===93||D(p)||l++>999?(e.exit("chunkString"),f(p)):(e.consume(p),u||(u=!_(p)),p===92?h:c)}function h(p){return p===91||p===92||p===93?(e.consume(p),l++,c):c(p)}}function Er(e,t,n,r,i,a){let o;return l;function l(h){return h===34||h===39||h===40?(e.enter(r),e.enter(i),e.consume(h),e.exit(i),o=h===40?41:h,u):n(h)}function u(h){return h===o?(e.enter(i),e.consume(h),e.exit(i),e.exit(r),t):(e.enter(a),s(h))}function s(h){return h===o?(e.exit(a),u(o)):h===null?n(h):D(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),j(e,s,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),f(h))}function f(h){return h===o||h===null||D(h)?(e.exit("chunkString"),s(h)):(e.consume(h),h===92?c:f)}function c(h){return h===o||h===92?(e.consume(h),f):f(h)}}function We(e,t){let n;return r;function r(i){return D(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):_(i)?j(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}const Go={name:"definition",tokenize:Qo},Xo={partial:!0,tokenize:Ko};function Qo(e,t,n){const r=this;let i;return a;function a(p){return e.enter("definition"),o(p)}function o(p){return vr.call(r,e,l,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(p)}function l(p){return i=ce(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),p===58?(e.enter("definitionMarker"),e.consume(p),e.exit("definitionMarker"),u):n(p)}function u(p){return V(p)?We(e,s)(p):s(p)}function s(p){return Ar(e,f,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(p)}function f(p){return e.attempt(Xo,c,c)(p)}function c(p){return _(p)?j(e,h,"whitespace")(p):h(p)}function h(p){return p===null||D(p)?(e.exit("definition"),r.parser.defined.push(i),t(p)):n(p)}}function Ko(e,t,n){return r;function r(l){return V(l)?We(e,i)(l):n(l)}function i(l){return Er(e,a,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(l)}function a(l){return _(l)?j(e,o,"whitespace")(l):o(l)}function o(l){return l===null||D(l)?t(l):n(l)}}const Jo={name:"hardBreakEscape",tokenize:Zo};function Zo(e,t,n){return r;function r(a){return e.enter("hardBreakEscape"),e.consume(a),i}function i(a){return D(a)?(e.exit("hardBreakEscape"),t(a)):n(a)}}const ea={name:"headingAtx",resolve:na,tokenize:ta};function na(e,t){let n=e.length-2,r=3,i,a;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},a={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},ie(e,r,n-r+1,[["enter",i,t],["enter",a,t],["exit",a,t],["exit",i,t]])),e}function ta(e,t,n){let r=0;return i;function i(f){return e.enter("atxHeading"),a(f)}function a(f){return e.enter("atxHeadingSequence"),o(f)}function o(f){return f===35&&r++<6?(e.consume(f),o):f===null||V(f)?(e.exit("atxHeadingSequence"),l(f)):n(f)}function l(f){return f===35?(e.enter("atxHeadingSequence"),u(f)):f===null||D(f)?(e.exit("atxHeading"),t(f)):_(f)?j(e,l,"whitespace")(f):(e.enter("atxHeadingText"),s(f))}function u(f){return f===35?(e.consume(f),u):(e.exit("atxHeadingSequence"),l(f))}function s(f){return f===null||f===35||V(f)?(e.exit("atxHeadingText"),l(f)):(e.consume(f),s)}}const ra=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Pt=["pre","script","style","textarea"],ia={concrete:!0,name:"htmlFlow",resolveTo:la,tokenize:sa},oa={partial:!0,tokenize:ca},aa={partial:!0,tokenize:ua};function la(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function sa(e,t,n){const r=this;let i,a,o,l,u;return s;function s(d){return f(d)}function f(d){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(d),c}function c(d){return d===33?(e.consume(d),h):d===47?(e.consume(d),a=!0,k):d===63?(e.consume(d),i=3,r.interrupt?t:m):Z(d)?(e.consume(d),o=String.fromCharCode(d),S):n(d)}function h(d){return d===45?(e.consume(d),i=2,p):d===91?(e.consume(d),i=5,l=0,g):Z(d)?(e.consume(d),i=4,r.interrupt?t:m):n(d)}function p(d){return d===45?(e.consume(d),r.interrupt?t:m):n(d)}function g(d){const se="CDATA[";return d===se.charCodeAt(l++)?(e.consume(d),l===se.length?r.interrupt?t:P:g):n(d)}function k(d){return Z(d)?(e.consume(d),o=String.fromCharCode(d),S):n(d)}function S(d){if(d===null||d===47||d===62||V(d)){const se=d===47,ke=o.toLowerCase();return!se&&!a&&Pt.includes(ke)?(i=1,r.interrupt?t(d):P(d)):ra.includes(o.toLowerCase())?(i=6,se?(e.consume(d),y):r.interrupt?t(d):P(d)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(d):a?E(d):A(d))}return d===45||K(d)?(e.consume(d),o+=String.fromCharCode(d),S):n(d)}function y(d){return d===62?(e.consume(d),r.interrupt?t:P):n(d)}function E(d){return _(d)?(e.consume(d),E):b(d)}function A(d){return d===47?(e.consume(d),b):d===58||d===95||Z(d)?(e.consume(d),F):_(d)?(e.consume(d),A):b(d)}function F(d){return d===45||d===46||d===58||d===95||K(d)?(e.consume(d),F):O(d)}function O(d){return d===61?(e.consume(d),w):_(d)?(e.consume(d),O):A(d)}function w(d){return d===null||d===60||d===61||d===62||d===96?n(d):d===34||d===39?(e.consume(d),u=d,z):_(d)?(e.consume(d),w):H(d)}function z(d){return d===u?(e.consume(d),u=null,U):d===null||D(d)?n(d):(e.consume(d),z)}function H(d){return d===null||d===34||d===39||d===47||d===60||d===61||d===62||d===96||V(d)?O(d):(e.consume(d),H)}function U(d){return d===47||d===62||_(d)?A(d):n(d)}function b(d){return d===62?(e.consume(d),I):n(d)}function I(d){return d===null||D(d)?P(d):_(d)?(e.consume(d),I):n(d)}function P(d){return d===45&&i===2?(e.consume(d),W):d===60&&i===1?(e.consume(d),X):d===62&&i===4?(e.consume(d),le):d===63&&i===3?(e.consume(d),m):d===93&&i===5?(e.consume(d),he):D(d)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(oa,me,q)(d)):d===null||D(d)?(e.exit("htmlFlowData"),q(d)):(e.consume(d),P)}function q(d){return e.check(aa,R,me)(d)}function R(d){return e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),T}function T(d){return d===null||D(d)?q(d):(e.enter("htmlFlowData"),P(d))}function W(d){return d===45?(e.consume(d),m):P(d)}function X(d){return d===47?(e.consume(d),o="",ae):P(d)}function ae(d){if(d===62){const se=o.toLowerCase();return Pt.includes(se)?(e.consume(d),le):P(d)}return Z(d)&&o.length<8?(e.consume(d),o+=String.fromCharCode(d),ae):P(d)}function he(d){return d===93?(e.consume(d),m):P(d)}function m(d){return d===62?(e.consume(d),le):d===45&&i===2?(e.consume(d),m):P(d)}function le(d){return d===null||D(d)?(e.exit("htmlFlowData"),me(d)):(e.consume(d),le)}function me(d){return e.exit("htmlFlow"),t(d)}}function ua(e,t,n){const r=this;return i;function i(o){return D(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),a):n(o)}function a(o){return r.parser.lazy[r.now().line]?n(o):t(o)}}function ca(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(Xe,t,n)}}const fa={name:"htmlText",tokenize:pa};function pa(e,t,n){const r=this;let i,a,o;return l;function l(m){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(m),u}function u(m){return m===33?(e.consume(m),s):m===47?(e.consume(m),O):m===63?(e.consume(m),A):Z(m)?(e.consume(m),H):n(m)}function s(m){return m===45?(e.consume(m),f):m===91?(e.consume(m),a=0,g):Z(m)?(e.consume(m),E):n(m)}function f(m){return m===45?(e.consume(m),p):n(m)}function c(m){return m===null?n(m):m===45?(e.consume(m),h):D(m)?(o=c,X(m)):(e.consume(m),c)}function h(m){return m===45?(e.consume(m),p):c(m)}function p(m){return m===62?W(m):m===45?h(m):c(m)}function g(m){const le="CDATA[";return m===le.charCodeAt(a++)?(e.consume(m),a===le.length?k:g):n(m)}function k(m){return m===null?n(m):m===93?(e.consume(m),S):D(m)?(o=k,X(m)):(e.consume(m),k)}function S(m){return m===93?(e.consume(m),y):k(m)}function y(m){return m===62?W(m):m===93?(e.consume(m),y):k(m)}function E(m){return m===null||m===62?W(m):D(m)?(o=E,X(m)):(e.consume(m),E)}function A(m){return m===null?n(m):m===63?(e.consume(m),F):D(m)?(o=A,X(m)):(e.consume(m),A)}function F(m){return m===62?W(m):A(m)}function O(m){return Z(m)?(e.consume(m),w):n(m)}function w(m){return m===45||K(m)?(e.consume(m),w):z(m)}function z(m){return D(m)?(o=z,X(m)):_(m)?(e.consume(m),z):W(m)}function H(m){return m===45||K(m)?(e.consume(m),H):m===47||m===62||V(m)?U(m):n(m)}function U(m){return m===47?(e.consume(m),W):m===58||m===95||Z(m)?(e.consume(m),b):D(m)?(o=U,X(m)):_(m)?(e.consume(m),U):W(m)}function b(m){return m===45||m===46||m===58||m===95||K(m)?(e.consume(m),b):I(m)}function I(m){return m===61?(e.consume(m),P):D(m)?(o=I,X(m)):_(m)?(e.consume(m),I):U(m)}function P(m){return m===null||m===60||m===61||m===62||m===96?n(m):m===34||m===39?(e.consume(m),i=m,q):D(m)?(o=P,X(m)):_(m)?(e.consume(m),P):(e.consume(m),R)}function q(m){return m===i?(e.consume(m),i=void 0,T):m===null?n(m):D(m)?(o=q,X(m)):(e.consume(m),q)}function R(m){return m===null||m===34||m===39||m===60||m===61||m===96?n(m):m===47||m===62||V(m)?U(m):(e.consume(m),R)}function T(m){return m===47||m===62||V(m)?U(m):n(m)}function W(m){return m===62?(e.consume(m),e.exit("htmlTextData"),e.exit("htmlText"),t):n(m)}function X(m){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),ae}function ae(m){return _(m)?j(e,he,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(m):he(m)}function he(m){return e.enter("htmlTextData"),o(m)}}const Xn={name:"labelEnd",resolveAll:ga,resolveTo:ya,tokenize:ba},ha={tokenize:xa},ma={tokenize:wa},da={tokenize:ka};function ga(e){let t=-1;const n=[];for(;++t<e.length;){const r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",t+=i}}return e.length!==n.length&&ie(e,0,e.length,n),e}function ya(e,t){let n=e.length,r=0,i,a,o,l;for(;n--;)if(i=e[n][1],a){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(o){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(a=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(o=n);const u={type:e[a][1].type==="labelLink"?"link":"image",start:{...e[a][1].start},end:{...e[e.length-1][1].end}},s={type:"label",start:{...e[a][1].start},end:{...e[o][1].end}},f={type:"labelText",start:{...e[a+r+2][1].end},end:{...e[o-2][1].start}};return l=[["enter",u,t],["enter",s,t]],l=oe(l,e.slice(a+1,a+r+3)),l=oe(l,[["enter",f,t]]),l=oe(l,un(t.parser.constructs.insideSpan.null,e.slice(a+r+4,o-3),t)),l=oe(l,[["exit",f,t],e[o-2],e[o-1],["exit",s,t]]),l=oe(l,e.slice(o+1)),l=oe(l,[["exit",u,t]]),ie(e,a,e.length,l),e}function ba(e,t,n){const r=this;let i=r.events.length,a,o;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){a=r.events[i][1];break}return l;function l(h){return a?a._inactive?c(h):(o=r.parser.defined.includes(ce(r.sliceSerialize({start:a.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(h),e.exit("labelMarker"),e.exit("labelEnd"),u):n(h)}function u(h){return h===40?e.attempt(ha,f,o?f:c)(h):h===91?e.attempt(ma,f,o?s:c)(h):o?f(h):c(h)}function s(h){return e.attempt(da,f,c)(h)}function f(h){return t(h)}function c(h){return a._balanced=!0,n(h)}}function xa(e,t,n){return r;function r(c){return e.enter("resource"),e.enter("resourceMarker"),e.consume(c),e.exit("resourceMarker"),i}function i(c){return V(c)?We(e,a)(c):a(c)}function a(c){return c===41?f(c):Ar(e,o,l,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(c)}function o(c){return V(c)?We(e,u)(c):f(c)}function l(c){return n(c)}function u(c){return c===34||c===39||c===40?Er(e,s,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(c):f(c)}function s(c){return V(c)?We(e,f)(c):f(c)}function f(c){return c===41?(e.enter("resourceMarker"),e.consume(c),e.exit("resourceMarker"),e.exit("resource"),t):n(c)}}function wa(e,t,n){const r=this;return i;function i(l){return vr.call(r,e,a,o,"reference","referenceMarker","referenceString")(l)}function a(l){return r.parser.defined.includes(ce(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(l):n(l)}function o(l){return n(l)}}function ka(e,t,n){return r;function r(a){return e.enter("reference"),e.enter("referenceMarker"),e.consume(a),e.exit("referenceMarker"),i}function i(a){return a===93?(e.enter("referenceMarker"),e.consume(a),e.exit("referenceMarker"),e.exit("reference"),t):n(a)}}const Sa={name:"labelStartImage",resolveAll:Xn.resolveAll,tokenize:Aa};function Aa(e,t,n){const r=this;return i;function i(l){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(l),e.exit("labelImageMarker"),a}function a(l){return l===91?(e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelImage"),o):n(l)}function o(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(l):t(l)}}const va={name:"labelStartLink",resolveAll:Xn.resolveAll,tokenize:Ea};function Ea(e,t,n){const r=this;return i;function i(o){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(o),e.exit("labelMarker"),e.exit("labelLink"),a}function a(o){return o===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(o):t(o)}}const yn={name:"lineEnding",tokenize:Ca};function Ca(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),j(e,t,"linePrefix")}}const tn={name:"thematicBreak",tokenize:Ta};function Ta(e,t,n){let r=0,i;return a;function a(s){return e.enter("thematicBreak"),o(s)}function o(s){return i=s,l(s)}function l(s){return s===i?(e.enter("thematicBreakSequence"),u(s)):r>=3&&(s===null||D(s))?(e.exit("thematicBreak"),t(s)):n(s)}function u(s){return s===i?(e.consume(s),r++,u):(e.exit("thematicBreakSequence"),_(s)?j(e,l,"whitespace")(s):l(s))}}const ee={continuation:{tokenize:Da},exit:Na,name:"list",tokenize:Pa},Ia={partial:!0,tokenize:Fa},La={partial:!0,tokenize:Ra};function Pa(e,t,n){const r=this,i=r.events[r.events.length-1];let a=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,o=0;return l;function l(p){const g=r.containerState.type||(p===42||p===43||p===45?"listUnordered":"listOrdered");if(g==="listUnordered"?!r.containerState.marker||p===r.containerState.marker:Fn(p)){if(r.containerState.type||(r.containerState.type=g,e.enter(g,{_container:!0})),g==="listUnordered")return e.enter("listItemPrefix"),p===42||p===45?e.check(tn,n,s)(p):s(p);if(!r.interrupt||p===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),u(p)}return n(p)}function u(p){return Fn(p)&&++o<10?(e.consume(p),u):(!r.interrupt||o<2)&&(r.containerState.marker?p===r.containerState.marker:p===41||p===46)?(e.exit("listItemValue"),s(p)):n(p)}function s(p){return e.enter("listItemMarker"),e.consume(p),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||p,e.check(Xe,r.interrupt?n:f,e.attempt(Ia,h,c))}function f(p){return r.containerState.initialBlankLine=!0,a++,h(p)}function c(p){return _(p)?(e.enter("listItemPrefixWhitespace"),e.consume(p),e.exit("listItemPrefixWhitespace"),h):n(p)}function h(p){return r.containerState.size=a+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(p)}}function Da(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(Xe,i,a);function i(l){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,j(e,t,"listItemIndent",r.containerState.size+1)(l)}function a(l){return r.containerState.furtherBlankLines||!_(l)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,o(l)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(La,t,o)(l))}function o(l){return r.containerState._closeFlow=!0,r.interrupt=void 0,j(e,e.attempt(ee,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l)}}function Ra(e,t,n){const r=this;return j(e,i,"listItemIndent",r.containerState.size+1);function i(a){const o=r.events[r.events.length-1];return o&&o[1].type==="listItemIndent"&&o[2].sliceSerialize(o[1],!0).length===r.containerState.size?t(a):n(a)}}function Na(e){e.exit(this.containerState.type)}function Fa(e,t,n){const r=this;return j(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(a){const o=r.events[r.events.length-1];return!_(a)&&o&&o[1].type==="listItemPrefixWhitespace"?t(a):n(a)}}const Dt={name:"setextUnderline",resolveTo:Oa,tokenize:Ma};function Oa(e,t){let n=e.length,r,i,a;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n)}else e[n][1].type==="content"&&e.splice(n,1),!a&&e[n][1].type==="definition"&&(a=n);const o={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",a?(e.splice(i,0,["enter",o,t]),e.splice(a+1,0,["exit",e[r][1],t]),e[r][1].end={...e[a][1].end}):e[r][1]=o,e.push(["exit",o,t]),e}function Ma(e,t,n){const r=this;let i;return a;function a(s){let f=r.events.length,c;for(;f--;)if(r.events[f][1].type!=="lineEnding"&&r.events[f][1].type!=="linePrefix"&&r.events[f][1].type!=="content"){c=r.events[f][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||c)?(e.enter("setextHeadingLine"),i=s,o(s)):n(s)}function o(s){return e.enter("setextHeadingLineSequence"),l(s)}function l(s){return s===i?(e.consume(s),l):(e.exit("setextHeadingLineSequence"),_(s)?j(e,u,"lineSuffix")(s):u(s))}function u(s){return s===null||D(s)?(e.exit("setextHeadingLine"),t(s)):n(s)}}const _a={tokenize:za};function za(e){const t=this,n=e.attempt(Xe,r,e.attempt(this.parser.constructs.flowInitial,i,j(e,e.attempt(this.parser.constructs.flow,i,e.attempt(qo,i)),"linePrefix")));return n;function r(a){if(a===null){e.consume(a);return}return e.enter("lineEndingBlank"),e.consume(a),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(a){if(a===null){e.consume(a);return}return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const Ba={resolveAll:Tr()},ja=Cr("string"),Ua=Cr("text");function Cr(e){return{resolveAll:Tr(e==="text"?Ha:void 0),tokenize:t};function t(n){const r=this,i=this.parser.constructs[e],a=n.attempt(i,o,l);return o;function o(f){return s(f)?a(f):l(f)}function l(f){if(f===null){n.consume(f);return}return n.enter("data"),n.consume(f),u}function u(f){return s(f)?(n.exit("data"),a(f)):(n.consume(f),u)}function s(f){if(f===null)return!0;const c=i[f];let h=-1;if(c)for(;++h<c.length;){const p=c[h];if(!p.previous||p.previous.call(r,r.previous))return!0}return!1}}}function Tr(e){return t;function t(n,r){let i=-1,a;for(;++i<=n.length;)a===void 0?n[i]&&n[i][1].type==="data"&&(a=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==a+2&&(n[a][1].end=n[i-1][1].end,n.splice(a+2,i-a-2),i=a+2),a=void 0);return e?e(n,r):n}}function Ha(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],i=t.sliceStream(r);let a=i.length,o=-1,l=0,u;for(;a--;){const s=i[a];if(typeof s=="string"){for(o=s.length;s.charCodeAt(o-1)===32;)l++,o--;if(o)break;o=-1}else if(s===-2)u=!0,l++;else if(s!==-1){a++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(l=0),l){const s={type:n===e.length||u||l<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:a?o:r.start._bufferIndex+o,_index:r.start._index+a,line:r.end.line,column:r.end.column-l,offset:r.end.offset-l},end:{...r.end}};r.end={...s.start},r.start.offset===r.end.offset?Object.assign(r,s):(e.splice(n,0,["enter",s,t],["exit",s,t]),n+=2)}n++}return e}const qa={42:ee,43:ee,45:ee,48:ee,49:ee,50:ee,51:ee,52:ee,53:ee,54:ee,55:ee,56:ee,57:ee,62:xr},Wa={91:Go},Ya={[-2]:gn,[-1]:gn,32:gn},Va={35:ea,42:tn,45:[Dt,tn],60:ia,61:Dt,95:tn,96:Lt,126:Lt},$a={38:kr,92:wr},Ga={[-5]:yn,[-4]:yn,[-3]:yn,33:Sa,38:kr,42:On,60:[vo,fa],91:va,92:[Jo,wr],93:Xn,95:On,96:_o},Xa={null:[On,Ba]},Qa={null:[42,95]},Ka={null:[]},Ja=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:Qa,contentInitial:Wa,disable:Ka,document:qa,flow:Va,flowInitial:Ya,insideSpan:Xa,string:$a,text:Ga},Symbol.toStringTag,{value:"Module"}));function Za(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const i={},a=[];let o=[],l=[];const u={attempt:z(O),check:z(w),consume:E,enter:A,exit:F,interrupt:z(w,{interrupt:!0})},s={code:null,containerState:{},defineSkip:k,events:[],now:g,parser:e,previous:null,sliceSerialize:h,sliceStream:p,write:c};let f=t.tokenize.call(s,u);return t.resolveAll&&a.push(t),s;function c(I){return o=oe(o,I),S(),o[o.length-1]!==null?[]:(H(t,0),s.events=un(a,s.events,s),s.events)}function h(I,P){return nl(p(I),P)}function p(I){return el(o,I)}function g(){const{_bufferIndex:I,_index:P,line:q,column:R,offset:T}=r;return{_bufferIndex:I,_index:P,line:q,column:R,offset:T}}function k(I){i[I.line]=I.column,b()}function S(){let I;for(;r._index<o.length;){const P=o[r._index];if(typeof P=="string")for(I=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===I&&r._bufferIndex<P.length;)y(P.charCodeAt(r._bufferIndex));else y(P)}}function y(I){f=f(I)}function E(I){D(I)?(r.line++,r.column=1,r.offset+=I===-3?2:1,b()):I!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===o[r._index].length&&(r._bufferIndex=-1,r._index++)),s.previous=I}function A(I,P){const q=P||{};return q.type=I,q.start=g(),s.events.push(["enter",q,s]),l.push(q),q}function F(I){const P=l.pop();return P.end=g(),s.events.push(["exit",P,s]),P}function O(I,P){H(I,P.from)}function w(I,P){P.restore()}function z(I,P){return q;function q(R,T,W){let X,ae,he,m;return Array.isArray(R)?me(R):"tokenize"in R?me([R]):le(R);function le(Q){return Me;function Me(be){const Ce=be!==null&&Q[be],Te=be!==null&&Q.null,Ke=[...Array.isArray(Ce)?Ce:Ce?[Ce]:[],...Array.isArray(Te)?Te:Te?[Te]:[]];return me(Ke)(be)}}function me(Q){return X=Q,ae=0,Q.length===0?W:d(Q[ae])}function d(Q){return Me;function Me(be){return m=U(),he=Q,Q.partial||(s.currentConstruct=Q),Q.name&&s.parser.constructs.disable.null.includes(Q.name)?ke():Q.tokenize.call(P?Object.assign(Object.create(s),P):s,u,se,ke)(be)}}function se(Q){return I(he,m),T}function ke(Q){return m.restore(),++ae<X.length?d(X[ae]):W}}}function H(I,P){I.resolveAll&&!a.includes(I)&&a.push(I),I.resolve&&ie(s.events,P,s.events.length-P,I.resolve(s.events.slice(P),s)),I.resolveTo&&(s.events=I.resolveTo(s.events,s))}function U(){const I=g(),P=s.previous,q=s.currentConstruct,R=s.events.length,T=Array.from(l);return{from:R,restore:W};function W(){r=I,s.previous=P,s.currentConstruct=q,s.events.length=R,l=T,b()}}function b(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function el(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,a=t.end._bufferIndex;let o;if(n===i)o=[e[n].slice(r,a)];else{if(o=e.slice(n,i),r>-1){const l=o[0];typeof l=="string"?o[0]=l.slice(r):o.shift()}a>0&&o.push(e[i].slice(0,a))}return o}function nl(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const a=e[n];let o;if(typeof a=="string")o=a;else switch(a){case-5:{o="\r";break}case-4:{o=`
`;break}case-3:{o=`\r
`;break}case-2:{o=t?" ":"	";break}case-1:{if(!t&&i)continue;o=" ";break}default:o=String.fromCharCode(a)}i=a===-2,r.push(o)}return r.join("")}function tl(e){const r={constructs:yr([Ja,...(e||{}).extensions||[]]),content:i(yo),defined:[],document:i(xo),flow:i(_a),lazy:{},string:i(ja),text:i(Ua)};return r;function i(a){return o;function o(l){return Za(r,a,l)}}}function rl(e){for(;!Sr(e););return e}const Rt=/[\0\t\n\r]/g;function il(){let e=1,t="",n=!0,r;return i;function i(a,o,l){const u=[];let s,f,c,h,p;for(a=t+(typeof a=="string"?a.toString():new TextDecoder(o||void 0).decode(a)),c=0,t="",n&&(a.charCodeAt(0)===65279&&c++,n=void 0);c<a.length;){if(Rt.lastIndex=c,s=Rt.exec(a),h=s&&s.index!==void 0?s.index:a.length,p=a.charCodeAt(h),!s){t=a.slice(c);break}if(p===10&&c===h&&r)u.push(-3),r=void 0;else switch(r&&(u.push(-5),r=void 0),c<h&&(u.push(a.slice(c,h)),e+=h-c),p){case 0:{u.push(65533),e++;break}case 9:{for(f=Math.ceil(e/4)*4,u.push(-2);e++<f;)u.push(-1);break}case 10:{u.push(-4),e=1;break}default:r=!0,e=1}c=h+1}return l&&(r&&u.push(-5),t&&u.push(t),u.push(null)),u}}const ol=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function al(e){return e.replace(ol,ll)}function ll(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),a=i===120||i===88;return br(n.slice(a?2:1),a?16:10)}return Gn(n)||e}const Ir={}.hasOwnProperty;function sl(e,t,n){return typeof t!="string"&&(n=t,t=void 0),ul(n)(rl(tl(n).document().write(il()(e,t,!0))))}function ul(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:a(st),autolinkProtocol:U,autolinkEmail:U,atxHeading:a(ot),blockQuote:a(Te),characterEscape:U,characterReference:U,codeFenced:a(Ke),codeFencedFenceInfo:o,codeFencedFenceMeta:o,codeIndented:a(Ke,o),codeText:a(li,o),codeTextData:U,data:U,codeFlowValue:U,definition:a(si),definitionDestinationString:o,definitionLabelString:o,definitionTitleString:o,emphasis:a(ui),hardBreakEscape:a(at),hardBreakTrailing:a(at),htmlFlow:a(lt,o),htmlFlowData:U,htmlText:a(lt,o),htmlTextData:U,image:a(ci),label:o,link:a(st),listItem:a(fi),listItemValue:h,listOrdered:a(ut,c),listUnordered:a(ut),paragraph:a(pi),reference:d,referenceString:o,resourceDestinationString:o,resourceTitleString:o,setextHeading:a(ot),strong:a(hi),thematicBreak:a(di)},exit:{atxHeading:u(),atxHeadingSequence:O,autolink:u(),autolinkEmail:Ce,autolinkProtocol:be,blockQuote:u(),characterEscapeValue:b,characterReferenceMarkerHexadecimal:ke,characterReferenceMarkerNumeric:ke,characterReferenceValue:Q,characterReference:Me,codeFenced:u(S),codeFencedFence:k,codeFencedFenceInfo:p,codeFencedFenceMeta:g,codeFlowValue:b,codeIndented:u(y),codeText:u(T),codeTextData:b,data:b,definition:u(),definitionDestinationString:F,definitionLabelString:E,definitionTitleString:A,emphasis:u(),hardBreakEscape:u(P),hardBreakTrailing:u(P),htmlFlow:u(q),htmlFlowData:b,htmlText:u(R),htmlTextData:b,image:u(X),label:he,labelText:ae,lineEnding:I,link:u(W),listItem:u(),listOrdered:u(),listUnordered:u(),paragraph:u(),referenceString:se,resourceDestinationString:m,resourceTitleString:le,resource:me,setextHeading:u(H),setextHeadingLineSequence:z,setextHeadingText:w,strong:u(),thematicBreak:u()}};Lr(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(x){let C={type:"root",children:[]};const N={stack:[C],tokenStack:[],config:t,enter:l,exit:s,buffer:o,resume:f,data:n},B=[];let Y=-1;for(;++Y<x.length;)if(x[Y][1].type==="listOrdered"||x[Y][1].type==="listUnordered")if(x[Y][0]==="enter")B.push(Y);else{const ue=B.pop();Y=i(x,ue,Y)}for(Y=-1;++Y<x.length;){const ue=t[x[Y][0]];Ir.call(ue,x[Y][1].type)&&ue[x[Y][1].type].call(Object.assign({sliceSerialize:x[Y][2].sliceSerialize},N),x[Y][1])}if(N.tokenStack.length>0){const ue=N.tokenStack[N.tokenStack.length-1];(ue[1]||Nt).call(N,void 0,ue[0])}for(C.position={start:xe(x.length>0?x[0][1].start:{line:1,column:1,offset:0}),end:xe(x.length>0?x[x.length-2][1].end:{line:1,column:1,offset:0})},Y=-1;++Y<t.transforms.length;)C=t.transforms[Y](C)||C;return C}function i(x,C,N){let B=C-1,Y=-1,ue=!1,Se,de,_e,ze;for(;++B<=N;){const te=x[B];switch(te[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{te[0]==="enter"?Y++:Y--,ze=void 0;break}case"lineEndingBlank":{te[0]==="enter"&&(Se&&!ze&&!Y&&!_e&&(_e=B),ze=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:ze=void 0}if(!Y&&te[0]==="enter"&&te[1].type==="listItemPrefix"||Y===-1&&te[0]==="exit"&&(te[1].type==="listUnordered"||te[1].type==="listOrdered")){if(Se){let Ie=B;for(de=void 0;Ie--;){const ge=x[Ie];if(ge[1].type==="lineEnding"||ge[1].type==="lineEndingBlank"){if(ge[0]==="exit")continue;de&&(x[de][1].type="lineEndingBlank",ue=!0),ge[1].type="lineEnding",de=Ie}else if(!(ge[1].type==="linePrefix"||ge[1].type==="blockQuotePrefix"||ge[1].type==="blockQuotePrefixWhitespace"||ge[1].type==="blockQuoteMarker"||ge[1].type==="listItemIndent"))break}_e&&(!de||_e<de)&&(Se._spread=!0),Se.end=Object.assign({},de?x[de][1].start:te[1].end),x.splice(de||B,0,["exit",Se,te[2]]),B++,N++}if(te[1].type==="listItemPrefix"){const Ie={type:"listItem",_spread:!1,start:Object.assign({},te[1].start),end:void 0};Se=Ie,x.splice(B,0,["enter",Ie,te[2]]),B++,N++,_e=void 0,ze=!0}}}return x[C][1]._spread=ue,N}function a(x,C){return N;function N(B){l.call(this,x(B),B),C&&C.call(this,B)}}function o(){this.stack.push({type:"fragment",children:[]})}function l(x,C,N){this.stack[this.stack.length-1].children.push(x),this.stack.push(x),this.tokenStack.push([C,N||void 0]),x.position={start:xe(C.start),end:void 0}}function u(x){return C;function C(N){x&&x.call(this,N),s.call(this,N)}}function s(x,C){const N=this.stack.pop(),B=this.tokenStack.pop();if(B)B[0].type!==x.type&&(C?C.call(this,x,B[0]):(B[1]||Nt).call(this,x,B[0]));else throw new Error("Cannot close `"+x.type+"` ("+qe({start:x.start,end:x.end})+"): it’s not open");N.position.end=xe(x.end)}function f(){return $n(this.stack.pop())}function c(){this.data.expectingFirstListItemValue=!0}function h(x){if(this.data.expectingFirstListItemValue){const C=this.stack[this.stack.length-2];C.start=Number.parseInt(this.sliceSerialize(x),10),this.data.expectingFirstListItemValue=void 0}}function p(){const x=this.resume(),C=this.stack[this.stack.length-1];C.lang=x}function g(){const x=this.resume(),C=this.stack[this.stack.length-1];C.meta=x}function k(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function S(){const x=this.resume(),C=this.stack[this.stack.length-1];C.value=x.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function y(){const x=this.resume(),C=this.stack[this.stack.length-1];C.value=x.replace(/(\r?\n|\r)$/g,"")}function E(x){const C=this.resume(),N=this.stack[this.stack.length-1];N.label=C,N.identifier=ce(this.sliceSerialize(x)).toLowerCase()}function A(){const x=this.resume(),C=this.stack[this.stack.length-1];C.title=x}function F(){const x=this.resume(),C=this.stack[this.stack.length-1];C.url=x}function O(x){const C=this.stack[this.stack.length-1];if(!C.depth){const N=this.sliceSerialize(x).length;C.depth=N}}function w(){this.data.setextHeadingSlurpLineEnding=!0}function z(x){const C=this.stack[this.stack.length-1];C.depth=this.sliceSerialize(x).codePointAt(0)===61?1:2}function H(){this.data.setextHeadingSlurpLineEnding=void 0}function U(x){const N=this.stack[this.stack.length-1].children;let B=N[N.length-1];(!B||B.type!=="text")&&(B=mi(),B.position={start:xe(x.start),end:void 0},N.push(B)),this.stack.push(B)}function b(x){const C=this.stack.pop();C.value+=this.sliceSerialize(x),C.position.end=xe(x.end)}function I(x){const C=this.stack[this.stack.length-1];if(this.data.atHardBreak){const N=C.children[C.children.length-1];N.position.end=xe(x.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(C.type)&&(U.call(this,x),b.call(this,x))}function P(){this.data.atHardBreak=!0}function q(){const x=this.resume(),C=this.stack[this.stack.length-1];C.value=x}function R(){const x=this.resume(),C=this.stack[this.stack.length-1];C.value=x}function T(){const x=this.resume(),C=this.stack[this.stack.length-1];C.value=x}function W(){const x=this.stack[this.stack.length-1];if(this.data.inReference){const C=this.data.referenceType||"shortcut";x.type+="Reference",x.referenceType=C,delete x.url,delete x.title}else delete x.identifier,delete x.label;this.data.referenceType=void 0}function X(){const x=this.stack[this.stack.length-1];if(this.data.inReference){const C=this.data.referenceType||"shortcut";x.type+="Reference",x.referenceType=C,delete x.url,delete x.title}else delete x.identifier,delete x.label;this.data.referenceType=void 0}function ae(x){const C=this.sliceSerialize(x),N=this.stack[this.stack.length-2];N.label=al(C),N.identifier=ce(C).toLowerCase()}function he(){const x=this.stack[this.stack.length-1],C=this.resume(),N=this.stack[this.stack.length-1];if(this.data.inReference=!0,N.type==="link"){const B=x.children;N.children=B}else N.alt=C}function m(){const x=this.resume(),C=this.stack[this.stack.length-1];C.url=x}function le(){const x=this.resume(),C=this.stack[this.stack.length-1];C.title=x}function me(){this.data.inReference=void 0}function d(){this.data.referenceType="collapsed"}function se(x){const C=this.resume(),N=this.stack[this.stack.length-1];N.label=C,N.identifier=ce(this.sliceSerialize(x)).toLowerCase(),this.data.referenceType="full"}function ke(x){this.data.characterReferenceType=x.type}function Q(x){const C=this.sliceSerialize(x),N=this.data.characterReferenceType;let B;N?(B=br(C,N==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):B=Gn(C);const Y=this.stack[this.stack.length-1];Y.value+=B}function Me(x){const C=this.stack.pop();C.position.end=xe(x.end)}function be(x){b.call(this,x);const C=this.stack[this.stack.length-1];C.url=this.sliceSerialize(x)}function Ce(x){b.call(this,x);const C=this.stack[this.stack.length-1];C.url="mailto:"+this.sliceSerialize(x)}function Te(){return{type:"blockquote",children:[]}}function Ke(){return{type:"code",lang:null,meta:null,value:""}}function li(){return{type:"inlineCode",value:""}}function si(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function ui(){return{type:"emphasis",children:[]}}function ot(){return{type:"heading",depth:0,children:[]}}function at(){return{type:"break"}}function lt(){return{type:"html",value:""}}function ci(){return{type:"image",title:null,url:"",alt:null}}function st(){return{type:"link",title:null,url:"",children:[]}}function ut(x){return{type:"list",ordered:x.type==="listOrdered",start:null,spread:x._spread,children:[]}}function fi(x){return{type:"listItem",spread:x._spread,checked:null,children:[]}}function pi(){return{type:"paragraph",children:[]}}function hi(){return{type:"strong",children:[]}}function mi(){return{type:"text",value:""}}function di(){return{type:"thematicBreak"}}}function xe(e){return{line:e.line,column:e.column,offset:e.offset}}function Lr(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?Lr(e,r):cl(e,r)}}function cl(e,t){let n;for(n in t)if(Ir.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function Nt(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+qe({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+qe({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+qe({start:t.start,end:t.end})+") is still open")}function fl(e){const t=this;t.parser=n;function n(r){return sl(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function pl(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function hl(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function ml(e,t){const n=t.value?t.value+`
`:"",r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let a={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(a.data={meta:t.meta}),e.patch(t,a),a=e.applyData(t,a),a={type:"element",tagName:"pre",properties:{},children:[a]},e.patch(t,a),a}function dl(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function gl(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function yl(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=Oe(r.toLowerCase()),a=e.footnoteOrder.indexOf(r);let o,l=e.footnoteCounts.get(r);l===void 0?(l=0,e.footnoteOrder.push(r),o=e.footnoteOrder.length):o=a+1,l+=1,e.footnoteCounts.set(r,l);const u={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(l>1?"-"+l:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(o)}]};e.patch(t,u);const s={type:"element",tagName:"sup",properties:{},children:[u]};return e.patch(t,s),e.applyData(t,s)}function bl(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function xl(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function Pr(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),a=i[0];a&&a.type==="text"?a.value="["+a.value:i.unshift({type:"text",value:"["});const o=i[i.length-1];return o&&o.type==="text"?o.value+=r:i.push({type:"text",value:r}),i}function wl(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Pr(e,t);const i={src:Oe(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const a={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,a),e.applyData(t,a)}function kl(e,t){const n={src:Oe(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function Sl(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function Al(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Pr(e,t);const i={href:Oe(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const a={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,a),e.applyData(t,a)}function vl(e,t){const n={href:Oe(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function El(e,t,n){const r=e.all(t),i=n?Cl(n):Dr(t),a={},o=[];if(typeof t.checked=="boolean"){const f=r[0];let c;f&&f.type==="element"&&f.tagName==="p"?c=f:(c={type:"element",tagName:"p",properties:{},children:[]},r.unshift(c)),c.children.length>0&&c.children.unshift({type:"text",value:" "}),c.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),a.className=["task-list-item"]}let l=-1;for(;++l<r.length;){const f=r[l];(i||l!==0||f.type!=="element"||f.tagName!=="p")&&o.push({type:"text",value:`
`}),f.type==="element"&&f.tagName==="p"&&!i?o.push(...f.children):o.push(f)}const u=r[r.length-1];u&&(i||u.type!=="element"||u.tagName!=="p")&&o.push({type:"text",value:`
`});const s={type:"element",tagName:"li",properties:a,children:o};return e.patch(t,s),e.applyData(t,s)}function Cl(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=Dr(n[r])}return t}function Dr(e){const t=e.spread;return t??e.children.length>1}function Tl(e,t){const n={},r=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){const o=r[i];if(o.type==="element"&&o.tagName==="li"&&o.properties&&Array.isArray(o.properties.className)&&o.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const a={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,a),e.applyData(t,a)}function Il(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Ll(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function Pl(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Dl(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const o={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],o),i.push(o)}if(n.length>0){const o={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},l=qn(t.children[1]),u=cr(t.children[t.children.length-1]);l&&u&&(o.position={start:l,end:u}),i.push(o)}const a={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,a),e.applyData(t,a)}function Rl(e,t,n){const r=n?n.children:void 0,a=(r?r.indexOf(t):1)===0?"th":"td",o=n&&n.type==="table"?n.align:void 0,l=o?o.length:t.children.length;let u=-1;const s=[];for(;++u<l;){const c=t.children[u],h={},p=o?o[u]:void 0;p&&(h.align=p);let g={type:"element",tagName:a,properties:h,children:[]};c&&(g.children=e.all(c),e.patch(c,g),g=e.applyData(c,g)),s.push(g)}const f={type:"element",tagName:"tr",properties:{},children:e.wrap(s,!0)};return e.patch(t,f),e.applyData(t,f)}function Nl(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const Ft=9,Ot=32;function Fl(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const a=[];for(;r;)a.push(Mt(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return a.push(Mt(t.slice(i),i>0,!1)),a.join("")}function Mt(e,t,n){let r=0,i=e.length;if(t){let a=e.codePointAt(r);for(;a===Ft||a===Ot;)r++,a=e.codePointAt(r)}if(n){let a=e.codePointAt(i-1);for(;a===Ft||a===Ot;)i--,a=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function Ol(e,t){const n={type:"text",value:Fl(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function Ml(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const _l={blockquote:pl,break:hl,code:ml,delete:dl,emphasis:gl,footnoteReference:yl,heading:bl,html:xl,imageReference:wl,image:kl,inlineCode:Sl,linkReference:Al,link:vl,listItem:El,list:Tl,paragraph:Il,root:Ll,strong:Pl,table:Dl,tableCell:Nl,tableRow:Rl,text:Ol,thematicBreak:Ml,toml:Je,yaml:Je,definition:Je,footnoteDefinition:Je};function Je(){}const Rr=-1,cn=0,Ye=1,on=2,Qn=3,Kn=4,Jn=5,Zn=6,Nr=7,Fr=8,_t=typeof self=="object"?self:globalThis,zl=(e,t)=>{const n=(i,a)=>(e.set(a,i),i),r=i=>{if(e.has(i))return e.get(i);const[a,o]=t[i];switch(a){case cn:case Rr:return n(o,i);case Ye:{const l=n([],i);for(const u of o)l.push(r(u));return l}case on:{const l=n({},i);for(const[u,s]of o)l[r(u)]=r(s);return l}case Qn:return n(new Date(o),i);case Kn:{const{source:l,flags:u}=o;return n(new RegExp(l,u),i)}case Jn:{const l=n(new Map,i);for(const[u,s]of o)l.set(r(u),r(s));return l}case Zn:{const l=n(new Set,i);for(const u of o)l.add(r(u));return l}case Nr:{const{name:l,message:u}=o;return n(new _t[l](u),i)}case Fr:return n(BigInt(o),i);case"BigInt":return n(Object(BigInt(o)),i);case"ArrayBuffer":return n(new Uint8Array(o).buffer,o);case"DataView":{const{buffer:l}=new Uint8Array(o);return n(new DataView(l),o)}}return n(new _t[a](o),i)};return r},zt=e=>zl(new Map,e)(0),Pe="",{toString:Bl}={},{keys:jl}=Object,He=e=>{const t=typeof e;if(t!=="object"||!e)return[cn,t];const n=Bl.call(e).slice(8,-1);switch(n){case"Array":return[Ye,Pe];case"Object":return[on,Pe];case"Date":return[Qn,Pe];case"RegExp":return[Kn,Pe];case"Map":return[Jn,Pe];case"Set":return[Zn,Pe];case"DataView":return[Ye,n]}return n.includes("Array")?[Ye,n]:n.includes("Error")?[Nr,n]:[on,n]},Ze=([e,t])=>e===cn&&(t==="function"||t==="symbol"),Ul=(e,t,n,r)=>{const i=(o,l)=>{const u=r.push(o)-1;return n.set(l,u),u},a=o=>{if(n.has(o))return n.get(o);let[l,u]=He(o);switch(l){case cn:{let f=o;switch(u){case"bigint":l=Fr,f=o.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+u);f=null;break;case"undefined":return i([Rr],o)}return i([l,f],o)}case Ye:{if(u){let h=o;return u==="DataView"?h=new Uint8Array(o.buffer):u==="ArrayBuffer"&&(h=new Uint8Array(o)),i([u,[...h]],o)}const f=[],c=i([l,f],o);for(const h of o)f.push(a(h));return c}case on:{if(u)switch(u){case"BigInt":return i([u,o.toString()],o);case"Boolean":case"Number":case"String":return i([u,o.valueOf()],o)}if(t&&"toJSON"in o)return a(o.toJSON());const f=[],c=i([l,f],o);for(const h of jl(o))(e||!Ze(He(o[h])))&&f.push([a(h),a(o[h])]);return c}case Qn:return i([l,o.toISOString()],o);case Kn:{const{source:f,flags:c}=o;return i([l,{source:f,flags:c}],o)}case Jn:{const f=[],c=i([l,f],o);for(const[h,p]of o)(e||!(Ze(He(h))||Ze(He(p))))&&f.push([a(h),a(p)]);return c}case Zn:{const f=[],c=i([l,f],o);for(const h of o)(e||!Ze(He(h)))&&f.push(a(h));return c}}const{message:s}=o;return i([l,{name:u,message:s}],o)};return a},Bt=(e,{json:t,lossy:n}={})=>{const r=[];return Ul(!(t||n),!!t,new Map,r)(e),r},an=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?zt(Bt(e,t)):structuredClone(e):(e,t)=>zt(Bt(e,t));function Hl(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function ql(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function Wl(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||Hl,r=e.options.footnoteBackLabel||ql,i=e.options.footnoteLabel||"Footnotes",a=e.options.footnoteLabelTagName||"h2",o=e.options.footnoteLabelProperties||{className:["sr-only"]},l=[];let u=-1;for(;++u<e.footnoteOrder.length;){const s=e.footnoteById.get(e.footnoteOrder[u]);if(!s)continue;const f=e.all(s),c=String(s.identifier).toUpperCase(),h=Oe(c.toLowerCase());let p=0;const g=[],k=e.footnoteCounts.get(c);for(;k!==void 0&&++p<=k;){g.length>0&&g.push({type:"text",value:" "});let E=typeof n=="string"?n:n(u,p);typeof E=="string"&&(E={type:"text",value:E}),g.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+h+(p>1?"-"+p:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(u,p),className:["data-footnote-backref"]},children:Array.isArray(E)?E:[E]})}const S=f[f.length-1];if(S&&S.type==="element"&&S.tagName==="p"){const E=S.children[S.children.length-1];E&&E.type==="text"?E.value+=" ":S.children.push({type:"text",value:" "}),S.children.push(...g)}else f.push(...g);const y={type:"element",tagName:"li",properties:{id:t+"fn-"+h},children:e.wrap(f,!0)};e.patch(s,y),l.push(y)}if(l.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:a,properties:{...an(o),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(l,!0)},{type:"text",value:`
`}]}}const fn=(function(e){if(e==null)return Gl;if(typeof e=="function")return pn(e);if(typeof e=="object")return Array.isArray(e)?Yl(e):Vl(e);if(typeof e=="string")return $l(e);throw new Error("Expected function, string, or object as test")});function Yl(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=fn(e[n]);return pn(r);function r(...i){let a=-1;for(;++a<t.length;)if(t[a].apply(this,i))return!0;return!1}}function Vl(e){const t=e;return pn(n);function n(r){const i=r;let a;for(a in e)if(i[a]!==t[a])return!1;return!0}}function $l(e){return pn(t);function t(n){return n&&n.type===e}}function pn(e){return t;function t(n,r,i){return!!(Xl(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function Gl(){return!0}function Xl(e){return e!==null&&typeof e=="object"&&"type"in e}const Or=[],Ql=!0,Mn=!1,Kl="skip";function Mr(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;const a=fn(i),o=r?-1:1;l(e,void 0,[])();function l(u,s,f){const c=u&&typeof u=="object"?u:{};if(typeof c.type=="string"){const p=typeof c.tagName=="string"?c.tagName:typeof c.name=="string"?c.name:void 0;Object.defineProperty(h,"name",{value:"node ("+(u.type+(p?"<"+p+">":""))+")"})}return h;function h(){let p=Or,g,k,S;if((!t||a(u,s,f[f.length-1]||void 0))&&(p=Jl(n(u,f)),p[0]===Mn))return p;if("children"in u&&u.children){const y=u;if(y.children&&p[0]!==Kl)for(k=(r?y.children.length:-1)+o,S=f.concat(y);k>-1&&k<y.children.length;){const E=y.children[k];if(g=l(E,k,S)(),g[0]===Mn)return g;k=typeof g[1]=="number"?g[1]:k+o}}return p}}}function Jl(e){return Array.isArray(e)?e:typeof e=="number"?[Ql,e]:e==null?Or:[e]}function et(e,t,n,r){let i,a,o;typeof t=="function"&&typeof n!="function"?(a=void 0,o=t,i=n):(a=t,o=n,i=r),Mr(e,a,l,i);function l(u,s){const f=s[s.length-1],c=f?f.children.indexOf(u):void 0;return o(u,c,f)}}const _n={}.hasOwnProperty,Zl={};function es(e,t){const n=t||Zl,r=new Map,i=new Map,a=new Map,o={..._l,...n.handlers},l={all:s,applyData:ts,definitionById:r,footnoteById:i,footnoteCounts:a,footnoteOrder:[],handlers:o,one:u,options:n,patch:ns,wrap:is};return et(e,function(f){if(f.type==="definition"||f.type==="footnoteDefinition"){const c=f.type==="definition"?r:i,h=String(f.identifier).toUpperCase();c.has(h)||c.set(h,f)}}),l;function u(f,c){const h=f.type,p=l.handlers[h];if(_n.call(l.handlers,h)&&p)return p(l,f,c);if(l.options.passThrough&&l.options.passThrough.includes(h)){if("children"in f){const{children:k,...S}=f,y=an(S);return y.children=l.all(f),y}return an(f)}return(l.options.unknownHandler||rs)(l,f,c)}function s(f){const c=[];if("children"in f){const h=f.children;let p=-1;for(;++p<h.length;){const g=l.one(h[p],f);if(g){if(p&&h[p-1].type==="break"&&(!Array.isArray(g)&&g.type==="text"&&(g.value=jt(g.value)),!Array.isArray(g)&&g.type==="element")){const k=g.children[0];k&&k.type==="text"&&(k.value=jt(k.value))}Array.isArray(g)?c.push(...g):c.push(g)}}}return c}}function ns(e,t){e.position&&(t.position=Hi(e))}function ts(e,t){let n=t;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,a=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const o="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:o}}n.type==="element"&&a&&Object.assign(n.properties,an(a)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function rs(e,t){const n=t.data||{},r="value"in t&&!(_n.call(n,"hProperties")||_n.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function is(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function jt(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function Ut(e,t){const n=es(e,t),r=n.one(e,void 0),i=Wl(n),a=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&a.children.push({type:"text",value:`
`},i),a}function os(e,t){return e&&"run"in e?async function(n,r){const i=Ut(n,{file:r,...t});await e.run(i,r)}:function(n,r){return Ut(n,{file:r,...e||t})}}function Ht(e){if(e)throw e}var bn,qt;function as(){if(qt)return bn;qt=1;var e=Object.prototype.hasOwnProperty,t=Object.prototype.toString,n=Object.defineProperty,r=Object.getOwnPropertyDescriptor,i=function(s){return typeof Array.isArray=="function"?Array.isArray(s):t.call(s)==="[object Array]"},a=function(s){if(!s||t.call(s)!=="[object Object]")return!1;var f=e.call(s,"constructor"),c=s.constructor&&s.constructor.prototype&&e.call(s.constructor.prototype,"isPrototypeOf");if(s.constructor&&!f&&!c)return!1;var h;for(h in s);return typeof h>"u"||e.call(s,h)},o=function(s,f){n&&f.name==="__proto__"?n(s,f.name,{enumerable:!0,configurable:!0,value:f.newValue,writable:!0}):s[f.name]=f.newValue},l=function(s,f){if(f==="__proto__")if(e.call(s,f)){if(r)return r(s,f).value}else return;return s[f]};return bn=function u(){var s,f,c,h,p,g,k=arguments[0],S=1,y=arguments.length,E=!1;for(typeof k=="boolean"&&(E=k,k=arguments[1]||{},S=2),(k==null||typeof k!="object"&&typeof k!="function")&&(k={});S<y;++S)if(s=arguments[S],s!=null)for(f in s)c=l(k,f),h=l(s,f),k!==h&&(E&&h&&(a(h)||(p=i(h)))?(p?(p=!1,g=c&&i(c)?c:[]):g=c&&a(c)?c:{},o(k,{name:f,newValue:u(E,g,h)})):typeof h<"u"&&o(k,{name:f,newValue:h}));return k},bn}var ls=as();const xn=tr(ls);function zn(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function ss(){const e=[],t={run:n,use:r};return t;function n(...i){let a=-1;const o=i.pop();if(typeof o!="function")throw new TypeError("Expected function as last argument, not "+o);l(null,...i);function l(u,...s){const f=e[++a];let c=-1;if(u){o(u);return}for(;++c<i.length;)(s[c]===null||s[c]===void 0)&&(s[c]=i[c]);i=s,f?us(f,l)(...s):o(null,...s)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function us(e,t){let n;return r;function r(...o){const l=e.length>o.length;let u;l&&o.push(i);try{u=e.apply(this,o)}catch(s){const f=s;if(l&&n)throw f;return i(f)}l||(u&&u.then&&typeof u.then=="function"?u.then(a,i):u instanceof Error?i(u):a(u))}function i(o,...l){n||(n=!0,t(o,...l))}function a(o){i(null,o)}}const fe={basename:cs,dirname:fs,extname:ps,join:hs,sep:"/"};function cs(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');Qe(e);let n=0,r=-1,i=e.length,a;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(a){n=i+1;break}}else r<0&&(a=!0,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let o=-1,l=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(a){n=i+1;break}}else o<0&&(a=!0,o=i+1),l>-1&&(e.codePointAt(i)===t.codePointAt(l--)?l<0&&(r=i):(l=-1,r=o));return n===r?r=o:r<0&&(r=e.length),e.slice(n,r)}function fs(e){if(Qe(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function ps(e){Qe(e);let t=e.length,n=-1,r=0,i=-1,a=0,o;for(;t--;){const l=e.codePointAt(t);if(l===47){if(o){r=t+1;break}continue}n<0&&(o=!0,n=t+1),l===46?i<0?i=t:a!==1&&(a=1):i>-1&&(a=-1)}return i<0||n<0||a===0||a===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function hs(...e){let t=-1,n;for(;++t<e.length;)Qe(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":ms(n)}function ms(e){Qe(e);const t=e.codePointAt(0)===47;let n=ds(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function ds(e,t){let n="",r=0,i=-1,a=0,o=-1,l,u;for(;++o<=e.length;){if(o<e.length)l=e.codePointAt(o);else{if(l===47)break;l=47}if(l===47){if(!(i===o-1||a===1))if(i!==o-1&&a===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(u=n.lastIndexOf("/"),u!==n.length-1){u<0?(n="",r=0):(n=n.slice(0,u),r=n.length-1-n.lastIndexOf("/")),i=o,a=0;continue}}else if(n.length>0){n="",r=0,i=o,a=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(i+1,o):n=e.slice(i+1,o),r=o-i-1;i=o,a=0}else l===46&&a>-1?a++:a=-1}return n}function Qe(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const gs={cwd:ys};function ys(){return"/"}function Bn(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function bs(e){if(typeof e=="string")e=new URL(e);else if(!Bn(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return xs(e)}function xs(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const wn=["history","path","basename","stem","extname","dirname"];class _r{constructor(t){let n;t?Bn(t)?n={path:t}:typeof t=="string"||ws(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":gs.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<wn.length;){const a=wn[r];a in n&&n[a]!==void 0&&n[a]!==null&&(this[a]=a==="history"?[...n[a]]:n[a])}let i;for(i in n)wn.includes(i)||(this[i]=n[i])}get basename(){return typeof this.path=="string"?fe.basename(this.path):void 0}set basename(t){Sn(t,"basename"),kn(t,"basename"),this.path=fe.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?fe.dirname(this.path):void 0}set dirname(t){Wt(this.basename,"dirname"),this.path=fe.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?fe.extname(this.path):void 0}set extname(t){if(kn(t,"extname"),Wt(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=fe.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){Bn(t)&&(t=bs(t)),Sn(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?fe.basename(this.path,this.extname):void 0}set stem(t){Sn(t,"stem"),kn(t,"stem"),this.path=fe.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const i=this.message(t,n,r);throw i.fatal=!0,i}info(t,n,r){const i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){const i=new J(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function kn(e,t){if(e&&e.includes(fe.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+fe.sep+"`")}function Sn(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function Wt(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function ws(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const ks=(function(e){const r=this.constructor.prototype,i=r[e],a=function(){return i.apply(a,arguments)};return Object.setPrototypeOf(a,r),a}),Ss={}.hasOwnProperty;class nt extends ks{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=ss()}copy(){const t=new nt;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(xn(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(En("data",this.frozen),this.namespace[t]=n,this):Ss.call(this.namespace,t)&&this.namespace[t]||void 0:t?(En("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=en(t),r=this.parser||this.Parser;return An("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),An("process",this.parser||this.Parser),vn("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(a,o){const l=en(t),u=r.parse(l);r.run(u,l,function(f,c,h){if(f||!c||!h)return s(f);const p=c,g=r.stringify(p,h);Es(g)?h.value=g:h.result=g,s(f,h)});function s(f,c){f||!c?o(f):a?a(c):n(void 0,c)}}}processSync(t){let n=!1,r;return this.freeze(),An("processSync",this.parser||this.Parser),vn("processSync",this.compiler||this.Compiler),this.process(t,i),Vt("processSync","process",n),r;function i(a,o){n=!0,Ht(a),r=o}}run(t,n,r){Yt(t),this.freeze();const i=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?a(void 0,r):new Promise(a);function a(o,l){const u=en(n);i.run(t,u,s);function s(f,c,h){const p=c||t;f?l(f):o?o(p):r(void 0,p,h)}}}runSync(t,n){let r=!1,i;return this.run(t,n,a),Vt("runSync","run",r),i;function a(o,l){Ht(o),i=l,r=!0}}stringify(t,n){this.freeze();const r=en(n),i=this.compiler||this.Compiler;return vn("stringify",i),Yt(t),i(t,r)}use(t,...n){const r=this.attachers,i=this.namespace;if(En("use",this.frozen),t!=null)if(typeof t=="function")u(t,n);else if(typeof t=="object")Array.isArray(t)?l(t):o(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function a(s){if(typeof s=="function")u(s,[]);else if(typeof s=="object")if(Array.isArray(s)){const[f,...c]=s;u(f,c)}else o(s);else throw new TypeError("Expected usable value, not `"+s+"`")}function o(s){if(!("plugins"in s)&&!("settings"in s))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");l(s.plugins),s.settings&&(i.settings=xn(!0,i.settings,s.settings))}function l(s){let f=-1;if(s!=null)if(Array.isArray(s))for(;++f<s.length;){const c=s[f];a(c)}else throw new TypeError("Expected a list of plugins, not `"+s+"`")}function u(s,f){let c=-1,h=-1;for(;++c<r.length;)if(r[c][0]===s){h=c;break}if(h===-1)r.push([s,...f]);else if(f.length>0){let[p,...g]=f;const k=r[h][1];zn(k)&&zn(p)&&(p=xn(!0,k,p)),r[h]=[s,p,...g]}}}}const As=new nt().freeze();function An(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function vn(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function En(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Yt(e){if(!zn(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Vt(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function en(e){return vs(e)?e:new _r(e)}function vs(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function Es(e){return typeof e=="string"||Cs(e)}function Cs(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const Ts="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",$t=[],Gt={allowDangerousHtml:!0},Is=/^(https?|ircs?|mailto|xmpp)$/i,Ls=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function Ps(e){const t=Ds(e),n=Rs(e);return Ns(t.runSync(t.parse(n),n),e)}function Ds(e){const t=e.rehypePlugins||$t,n=e.remarkPlugins||$t,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...Gt}:Gt;return As().use(fl).use(n).use(os,r).use(t)}function Rs(e){const t=e.children||"",n=new _r;return typeof t=="string"&&(n.value=t),n}function Ns(e,t){const n=t.allowedElements,r=t.allowElement,i=t.components,a=t.disallowedElements,o=t.skipHtml,l=t.unwrapDisallowed,u=t.urlTransform||Fs;for(const f of Ls)Object.hasOwn(t,f.from)&&(""+f.from+(f.to?"use `"+f.to+"` instead":"remove it")+Ts+f.id,void 0);return et(e,s),$i(e,{Fragment:L.Fragment,components:i,ignoreInvalidStyle:!0,jsx:L.jsx,jsxs:L.jsxs,passKeys:!0,passNode:!0});function s(f,c,h){if(f.type==="raw"&&h&&typeof c=="number")return o?h.children.splice(c,1):h.children[c]={type:"text",value:f.value},c;if(f.type==="element"){let p;for(p in dn)if(Object.hasOwn(dn,p)&&Object.hasOwn(f.properties,p)){const g=f.properties[p],k=dn[p];(k===null||k.includes(f.tagName))&&(f.properties[p]=u(String(g||""),p,f))}}if(f.type==="element"){let p=n?!n.includes(f.tagName):a?a.includes(f.tagName):!1;if(!p&&r&&typeof c=="number"&&(p=!r(f,c,h)),p&&h&&typeof c=="number")return l&&f.children?h.children.splice(c,1,...f.children):h.children.splice(c,1),c}}}function Fs(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||Is.test(e.slice(0,t))?e:""}function Xt(e,t){const n=String(e);if(typeof t!="string")throw new TypeError("Expected character");let r=0,i=n.indexOf(t);for(;i!==-1;)r++,i=n.indexOf(t,i+t.length);return r}function Os(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function Ms(e,t,n){const i=fn((n||{}).ignore||[]),a=_s(t);let o=-1;for(;++o<a.length;)Mr(e,"text",l);function l(s,f){let c=-1,h;for(;++c<f.length;){const p=f[c],g=h?h.children:void 0;if(i(p,g?g.indexOf(p):void 0,h))return;h=p}if(h)return u(s,f)}function u(s,f){const c=f[f.length-1],h=a[o][0],p=a[o][1];let g=0;const S=c.children.indexOf(s);let y=!1,E=[];h.lastIndex=0;let A=h.exec(s.value);for(;A;){const F=A.index,O={index:A.index,input:A.input,stack:[...f,s]};let w=p(...A,O);if(typeof w=="string"&&(w=w.length>0?{type:"text",value:w}:void 0),w===!1?h.lastIndex=F+1:(g!==F&&E.push({type:"text",value:s.value.slice(g,F)}),Array.isArray(w)?E.push(...w):w&&E.push(w),g=F+A[0].length,y=!0),!h.global)break;A=h.exec(s.value)}return y?(g<s.value.length&&E.push({type:"text",value:s.value.slice(g)}),c.children.splice(S,1,...E)):E=[s],S+E.length}}function _s(e){const t=[];if(!Array.isArray(e))throw new TypeError("Expected find and replace tuple or list of tuples");const n=!e[0]||Array.isArray(e[0])?e:[e];let r=-1;for(;++r<n.length;){const i=n[r];t.push([zs(i[0]),Bs(i[1])])}return t}function zs(e){return typeof e=="string"?new RegExp(Os(e),"g"):e}function Bs(e){return typeof e=="function"?e:function(){return e}}const Cn="phrasing",Tn=["autolink","link","image","label"];function js(){return{transforms:[$s],enter:{literalAutolink:Hs,literalAutolinkEmail:In,literalAutolinkHttp:In,literalAutolinkWww:In},exit:{literalAutolink:Vs,literalAutolinkEmail:Ys,literalAutolinkHttp:qs,literalAutolinkWww:Ws}}}function Us(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Cn,notInConstruct:Tn},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Cn,notInConstruct:Tn},{character:":",before:"[ps]",after:"\\/",inConstruct:Cn,notInConstruct:Tn}]}}function Hs(e){this.enter({type:"link",title:null,url:"",children:[]},e)}function In(e){this.config.enter.autolinkProtocol.call(this,e)}function qs(e){this.config.exit.autolinkProtocol.call(this,e)}function Ws(e){this.config.exit.data.call(this,e);const t=this.stack[this.stack.length-1];t.type,t.url="http://"+this.sliceSerialize(e)}function Ys(e){this.config.exit.autolinkEmail.call(this,e)}function Vs(e){this.exit(e)}function $s(e){Ms(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,Gs],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),Xs]],{ignore:["link","linkReference"]})}function Gs(e,t,n,r,i){let a="";if(!zr(i)||(/^w/i.test(t)&&(n=t+n,t="",a="http://"),!Qs(n)))return!1;const o=Ks(n+r);if(!o[0])return!1;const l={type:"link",title:null,url:a+t+o[0],children:[{type:"text",value:t+o[0]}]};return o[1]?[l,{type:"text",value:o[1]}]:l}function Xs(e,t,n,r){return!zr(r,!0)||/[-\d_]$/.test(n)?!1:{type:"link",title:null,url:"mailto:"+t+"@"+n,children:[{type:"text",value:t+"@"+n}]}}function Qs(e){const t=e.split(".");return!(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))}function Ks(e){const t=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!t)return[e,void 0];e=e.slice(0,t.index);let n=t[0],r=n.indexOf(")");const i=Xt(e,"(");let a=Xt(e,")");for(;r!==-1&&i>a;)e+=n.slice(0,r+1),n=n.slice(r+1),r=n.indexOf(")"),a++;return[e,n]}function zr(e,t){const n=e.input.charCodeAt(e.index-1);return(e.index===0||ve(n)||sn(n))&&(!t||n!==47)}Br.peek=au;function Js(){this.buffer()}function Zs(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function eu(){this.buffer()}function nu(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function tu(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=ce(this.sliceSerialize(e)).toLowerCase(),n.label=t}function ru(e){this.exit(e)}function iu(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=ce(this.sliceSerialize(e)).toLowerCase(),n.label=t}function ou(e){this.exit(e)}function au(){return"["}function Br(e,t,n,r){const i=n.createTracker(r);let a=i.move("[^");const o=n.enter("footnoteReference"),l=n.enter("reference");return a+=i.move(n.safe(n.associationId(e),{after:"]",before:a})),l(),o(),a+=i.move("]"),a}function lu(){return{enter:{gfmFootnoteCallString:Js,gfmFootnoteCall:Zs,gfmFootnoteDefinitionLabelString:eu,gfmFootnoteDefinition:nu},exit:{gfmFootnoteCallString:tu,gfmFootnoteCall:ru,gfmFootnoteDefinitionLabelString:iu,gfmFootnoteDefinition:ou}}}function su(e){let t=!1;return e&&e.firstLineBlank&&(t=!0),{handlers:{footnoteDefinition:n,footnoteReference:Br},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function n(r,i,a,o){const l=a.createTracker(o);let u=l.move("[^");const s=a.enter("footnoteDefinition"),f=a.enter("label");return u+=l.move(a.safe(a.associationId(r),{before:u,after:"]"})),f(),u+=l.move("]:"),r.children&&r.children.length>0&&(l.shift(4),u+=l.move((t?`
`:" ")+a.indentLines(a.containerFlow(r,l.current()),t?jr:uu))),s(),u}}function uu(e,t,n){return t===0?e:jr(e,t,n)}function jr(e,t,n){return(n?"":"    ")+e}const cu=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];Ur.peek=du;function fu(){return{canContainEols:["delete"],enter:{strikethrough:hu},exit:{strikethrough:mu}}}function pu(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:cu}],handlers:{delete:Ur}}}function hu(e){this.enter({type:"delete",children:[]},e)}function mu(e){this.exit(e)}function Ur(e,t,n,r){const i=n.createTracker(r),a=n.enter("strikethrough");let o=i.move("~~");return o+=n.containerPhrasing(e,{...i.current(),before:o,after:"~"}),o+=i.move("~~"),a(),o}function du(){return"~"}function gu(e){return e.length}function yu(e,t){const n=t||{},r=(n.align||[]).concat(),i=n.stringLength||gu,a=[],o=[],l=[],u=[];let s=0,f=-1;for(;++f<e.length;){const k=[],S=[];let y=-1;for(e[f].length>s&&(s=e[f].length);++y<e[f].length;){const E=bu(e[f][y]);if(n.alignDelimiters!==!1){const A=i(E);S[y]=A,(u[y]===void 0||A>u[y])&&(u[y]=A)}k.push(E)}o[f]=k,l[f]=S}let c=-1;if(typeof r=="object"&&"length"in r)for(;++c<s;)a[c]=Qt(r[c]);else{const k=Qt(r);for(;++c<s;)a[c]=k}c=-1;const h=[],p=[];for(;++c<s;){const k=a[c];let S="",y="";k===99?(S=":",y=":"):k===108?S=":":k===114&&(y=":");let E=n.alignDelimiters===!1?1:Math.max(1,u[c]-S.length-y.length);const A=S+"-".repeat(E)+y;n.alignDelimiters!==!1&&(E=S.length+E+y.length,E>u[c]&&(u[c]=E),p[c]=E),h[c]=A}o.splice(1,0,h),l.splice(1,0,p),f=-1;const g=[];for(;++f<o.length;){const k=o[f],S=l[f];c=-1;const y=[];for(;++c<s;){const E=k[c]||"";let A="",F="";if(n.alignDelimiters!==!1){const O=u[c]-(S[c]||0),w=a[c];w===114?A=" ".repeat(O):w===99?O%2?(A=" ".repeat(O/2+.5),F=" ".repeat(O/2-.5)):(A=" ".repeat(O/2),F=A):F=" ".repeat(O)}n.delimiterStart!==!1&&!c&&y.push("|"),n.padding!==!1&&!(n.alignDelimiters===!1&&E==="")&&(n.delimiterStart!==!1||c)&&y.push(" "),n.alignDelimiters!==!1&&y.push(A),y.push(E),n.alignDelimiters!==!1&&y.push(F),n.padding!==!1&&y.push(" "),(n.delimiterEnd!==!1||c!==s-1)&&y.push("|")}g.push(n.delimiterEnd===!1?y.join("").replace(/ +$/,""):y.join(""))}return g.join(`
`)}function bu(e){return e==null?"":String(e)}function Qt(e){const t=typeof e=="string"?e.codePointAt(0):0;return t===67||t===99?99:t===76||t===108?108:t===82||t===114?114:0}function xu(e,t,n,r){const i=n.enter("blockquote"),a=n.createTracker(r);a.move("> "),a.shift(2);const o=n.indentLines(n.containerFlow(e,a.current()),wu);return i(),o}function wu(e,t,n){return">"+(n?"":" ")+e}function ku(e,t){return Kt(e,t.inConstruct,!0)&&!Kt(e,t.notInConstruct,!1)}function Kt(e,t,n){if(typeof t=="string"&&(t=[t]),!t||t.length===0)return n;let r=-1;for(;++r<t.length;)if(e.includes(t[r]))return!0;return!1}function Jt(e,t,n,r){let i=-1;for(;++i<n.unsafe.length;)if(n.unsafe[i].character===`
`&&ku(n.stack,n.unsafe[i]))return/[ \t]/.test(r.before)?"":" ";return`\\
`}function Su(e,t){const n=String(e);let r=n.indexOf(t),i=r,a=0,o=0;if(typeof t!="string")throw new TypeError("Expected substring");for(;r!==-1;)r===i?++a>o&&(o=a):a=1,i=r+t.length,r=n.indexOf(t,i);return o}function Au(e,t){return!!(t.options.fences===!1&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function vu(e){const t=e.options.fence||"`";if(t!=="`"&&t!=="~")throw new Error("Cannot serialize code with `"+t+"` for `options.fence`, expected `` ` `` or `~`");return t}function Eu(e,t,n,r){const i=vu(n),a=e.value||"",o=i==="`"?"GraveAccent":"Tilde";if(Au(e,n)){const c=n.enter("codeIndented"),h=n.indentLines(a,Cu);return c(),h}const l=n.createTracker(r),u=i.repeat(Math.max(Su(a,i)+1,3)),s=n.enter("codeFenced");let f=l.move(u);if(e.lang){const c=n.enter(`codeFencedLang${o}`);f+=l.move(n.safe(e.lang,{before:f,after:" ",encode:["`"],...l.current()})),c()}if(e.lang&&e.meta){const c=n.enter(`codeFencedMeta${o}`);f+=l.move(" "),f+=l.move(n.safe(e.meta,{before:f,after:`
`,encode:["`"],...l.current()})),c()}return f+=l.move(`
`),a&&(f+=l.move(a+`
`)),f+=l.move(u),s(),f}function Cu(e,t,n){return(n?"":"    ")+e}function tt(e){const t=e.options.quote||'"';if(t!=='"'&&t!=="'")throw new Error("Cannot serialize title with `"+t+"` for `options.quote`, expected `\"`, or `'`");return t}function Tu(e,t,n,r){const i=tt(n),a=i==='"'?"Quote":"Apostrophe",o=n.enter("definition");let l=n.enter("label");const u=n.createTracker(r);let s=u.move("[");return s+=u.move(n.safe(n.associationId(e),{before:s,after:"]",...u.current()})),s+=u.move("]: "),l(),!e.url||/[\0- \u007F]/.test(e.url)?(l=n.enter("destinationLiteral"),s+=u.move("<"),s+=u.move(n.safe(e.url,{before:s,after:">",...u.current()})),s+=u.move(">")):(l=n.enter("destinationRaw"),s+=u.move(n.safe(e.url,{before:s,after:e.title?" ":`
`,...u.current()}))),l(),e.title&&(l=n.enter(`title${a}`),s+=u.move(" "+i),s+=u.move(n.safe(e.title,{before:s,after:i,...u.current()})),s+=u.move(i),l()),o(),s}function Iu(e){const t=e.options.emphasis||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize emphasis with `"+t+"` for `options.emphasis`, expected `*`, or `_`");return t}function $e(e){return"&#x"+e.toString(16).toUpperCase()+";"}function ln(e,t,n){const r=Ne(e),i=Ne(t);return r===void 0?i===void 0?n==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:r===1?i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}Hr.peek=Lu;function Hr(e,t,n,r){const i=Iu(n),a=n.enter("emphasis"),o=n.createTracker(r),l=o.move(i);let u=o.move(n.containerPhrasing(e,{after:i,before:l,...o.current()}));const s=u.charCodeAt(0),f=ln(r.before.charCodeAt(r.before.length-1),s,i);f.inside&&(u=$e(s)+u.slice(1));const c=u.charCodeAt(u.length-1),h=ln(r.after.charCodeAt(0),c,i);h.inside&&(u=u.slice(0,-1)+$e(c));const p=o.move(i);return a(),n.attentionEncodeSurroundingInfo={after:h.outside,before:f.outside},l+u+p}function Lu(e,t,n){return n.options.emphasis||"*"}function Pu(e,t){let n=!1;return et(e,function(r){if("value"in r&&/\r?\n|\r/.test(r.value)||r.type==="break")return n=!0,Mn}),!!((!e.depth||e.depth<3)&&$n(e)&&(t.options.setext||n))}function Du(e,t,n,r){const i=Math.max(Math.min(6,e.depth||1),1),a=n.createTracker(r);if(Pu(e,n)){const f=n.enter("headingSetext"),c=n.enter("phrasing"),h=n.containerPhrasing(e,{...a.current(),before:`
`,after:`
`});return c(),f(),h+`
`+(i===1?"=":"-").repeat(h.length-(Math.max(h.lastIndexOf("\r"),h.lastIndexOf(`
`))+1))}const o="#".repeat(i),l=n.enter("headingAtx"),u=n.enter("phrasing");a.move(o+" ");let s=n.containerPhrasing(e,{before:"# ",after:`
`,...a.current()});return/^[\t ]/.test(s)&&(s=$e(s.charCodeAt(0))+s.slice(1)),s=s?o+" "+s:o,n.options.closeAtx&&(s+=" "+o),u(),l(),s}qr.peek=Ru;function qr(e){return e.value||""}function Ru(){return"<"}Wr.peek=Nu;function Wr(e,t,n,r){const i=tt(n),a=i==='"'?"Quote":"Apostrophe",o=n.enter("image");let l=n.enter("label");const u=n.createTracker(r);let s=u.move("![");return s+=u.move(n.safe(e.alt,{before:s,after:"]",...u.current()})),s+=u.move("]("),l(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(l=n.enter("destinationLiteral"),s+=u.move("<"),s+=u.move(n.safe(e.url,{before:s,after:">",...u.current()})),s+=u.move(">")):(l=n.enter("destinationRaw"),s+=u.move(n.safe(e.url,{before:s,after:e.title?" ":")",...u.current()}))),l(),e.title&&(l=n.enter(`title${a}`),s+=u.move(" "+i),s+=u.move(n.safe(e.title,{before:s,after:i,...u.current()})),s+=u.move(i),l()),s+=u.move(")"),o(),s}function Nu(){return"!"}Yr.peek=Fu;function Yr(e,t,n,r){const i=e.referenceType,a=n.enter("imageReference");let o=n.enter("label");const l=n.createTracker(r);let u=l.move("![");const s=n.safe(e.alt,{before:u,after:"]",...l.current()});u+=l.move(s+"]["),o();const f=n.stack;n.stack=[],o=n.enter("reference");const c=n.safe(n.associationId(e),{before:u,after:"]",...l.current()});return o(),n.stack=f,a(),i==="full"||!s||s!==c?u+=l.move(c+"]"):i==="shortcut"?u=u.slice(0,-1):u+=l.move("]"),u}function Fu(){return"!"}Vr.peek=Ou;function Vr(e,t,n){let r=e.value||"",i="`",a=-1;for(;new RegExp("(^|[^`])"+i+"([^`]|$)").test(r);)i+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=" "+r+" ");++a<n.unsafe.length;){const o=n.unsafe[a],l=n.compilePattern(o);let u;if(o.atBreak)for(;u=l.exec(r);){let s=u.index;r.charCodeAt(s)===10&&r.charCodeAt(s-1)===13&&s--,r=r.slice(0,s)+" "+r.slice(u.index+1)}}return i+r+i}function Ou(){return"`"}function $r(e,t){const n=$n(e);return!!(!t.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type==="text"&&(n===e.url||"mailto:"+n===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}Gr.peek=Mu;function Gr(e,t,n,r){const i=tt(n),a=i==='"'?"Quote":"Apostrophe",o=n.createTracker(r);let l,u;if($r(e,n)){const f=n.stack;n.stack=[],l=n.enter("autolink");let c=o.move("<");return c+=o.move(n.containerPhrasing(e,{before:c,after:">",...o.current()})),c+=o.move(">"),l(),n.stack=f,c}l=n.enter("link"),u=n.enter("label");let s=o.move("[");return s+=o.move(n.containerPhrasing(e,{before:s,after:"](",...o.current()})),s+=o.move("]("),u(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(u=n.enter("destinationLiteral"),s+=o.move("<"),s+=o.move(n.safe(e.url,{before:s,after:">",...o.current()})),s+=o.move(">")):(u=n.enter("destinationRaw"),s+=o.move(n.safe(e.url,{before:s,after:e.title?" ":")",...o.current()}))),u(),e.title&&(u=n.enter(`title${a}`),s+=o.move(" "+i),s+=o.move(n.safe(e.title,{before:s,after:i,...o.current()})),s+=o.move(i),u()),s+=o.move(")"),l(),s}function Mu(e,t,n){return $r(e,n)?"<":"["}Xr.peek=_u;function Xr(e,t,n,r){const i=e.referenceType,a=n.enter("linkReference");let o=n.enter("label");const l=n.createTracker(r);let u=l.move("[");const s=n.containerPhrasing(e,{before:u,after:"]",...l.current()});u+=l.move(s+"]["),o();const f=n.stack;n.stack=[],o=n.enter("reference");const c=n.safe(n.associationId(e),{before:u,after:"]",...l.current()});return o(),n.stack=f,a(),i==="full"||!s||s!==c?u+=l.move(c+"]"):i==="shortcut"?u=u.slice(0,-1):u+=l.move("]"),u}function _u(){return"["}function rt(e){const t=e.options.bullet||"*";if(t!=="*"&&t!=="+"&&t!=="-")throw new Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}function zu(e){const t=rt(e),n=e.options.bulletOther;if(!n)return t==="*"?"-":"*";if(n!=="*"&&n!=="+"&&n!=="-")throw new Error("Cannot serialize items with `"+n+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(n===t)throw new Error("Expected `bullet` (`"+t+"`) and `bulletOther` (`"+n+"`) to be different");return n}function Bu(e){const t=e.options.bulletOrdered||".";if(t!=="."&&t!==")")throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOrdered`, expected `.` or `)`");return t}function Qr(e){const t=e.options.rule||"*";if(t!=="*"&&t!=="-"&&t!=="_")throw new Error("Cannot serialize rules with `"+t+"` for `options.rule`, expected `*`, `-`, or `_`");return t}function ju(e,t,n,r){const i=n.enter("list"),a=n.bulletCurrent;let o=e.ordered?Bu(n):rt(n);const l=e.ordered?o==="."?")":".":zu(n);let u=t&&n.bulletLastUsed?o===n.bulletLastUsed:!1;if(!e.ordered){const f=e.children?e.children[0]:void 0;if((o==="*"||o==="-")&&f&&(!f.children||!f.children[0])&&n.stack[n.stack.length-1]==="list"&&n.stack[n.stack.length-2]==="listItem"&&n.stack[n.stack.length-3]==="list"&&n.stack[n.stack.length-4]==="listItem"&&n.indexStack[n.indexStack.length-1]===0&&n.indexStack[n.indexStack.length-2]===0&&n.indexStack[n.indexStack.length-3]===0&&(u=!0),Qr(n)===o&&f){let c=-1;for(;++c<e.children.length;){const h=e.children[c];if(h&&h.type==="listItem"&&h.children&&h.children[0]&&h.children[0].type==="thematicBreak"){u=!0;break}}}}u&&(o=l),n.bulletCurrent=o;const s=n.containerFlow(e,r);return n.bulletLastUsed=o,n.bulletCurrent=a,i(),s}function Uu(e){const t=e.options.listItemIndent||"one";if(t!=="tab"&&t!=="one"&&t!=="mixed")throw new Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}function Hu(e,t,n,r){const i=Uu(n);let a=n.bulletCurrent||rt(n);t&&t.type==="list"&&t.ordered&&(a=(typeof t.start=="number"&&t.start>-1?t.start:1)+(n.options.incrementListMarker===!1?0:t.children.indexOf(e))+a);let o=a.length+1;(i==="tab"||i==="mixed"&&(t&&t.type==="list"&&t.spread||e.spread))&&(o=Math.ceil(o/4)*4);const l=n.createTracker(r);l.move(a+" ".repeat(o-a.length)),l.shift(o);const u=n.enter("listItem"),s=n.indentLines(n.containerFlow(e,l.current()),f);return u(),s;function f(c,h,p){return h?(p?"":" ".repeat(o))+c:(p?a:a+" ".repeat(o-a.length))+c}}function qu(e,t,n,r){const i=n.enter("paragraph"),a=n.enter("phrasing"),o=n.containerPhrasing(e,r);return a(),i(),o}const Wu=fn(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function Yu(e,t,n,r){return(e.children.some(function(o){return Wu(o)})?n.containerPhrasing:n.containerFlow).call(n,e,r)}function Vu(e){const t=e.options.strong||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize strong with `"+t+"` for `options.strong`, expected `*`, or `_`");return t}Kr.peek=$u;function Kr(e,t,n,r){const i=Vu(n),a=n.enter("strong"),o=n.createTracker(r),l=o.move(i+i);let u=o.move(n.containerPhrasing(e,{after:i,before:l,...o.current()}));const s=u.charCodeAt(0),f=ln(r.before.charCodeAt(r.before.length-1),s,i);f.inside&&(u=$e(s)+u.slice(1));const c=u.charCodeAt(u.length-1),h=ln(r.after.charCodeAt(0),c,i);h.inside&&(u=u.slice(0,-1)+$e(c));const p=o.move(i+i);return a(),n.attentionEncodeSurroundingInfo={after:h.outside,before:f.outside},l+u+p}function $u(e,t,n){return n.options.strong||"*"}function Gu(e,t,n,r){return n.safe(e.value,r)}function Xu(e){const t=e.options.ruleRepetition||3;if(t<3)throw new Error("Cannot serialize rules with repetition `"+t+"` for `options.ruleRepetition`, expected `3` or more");return t}function Qu(e,t,n){const r=(Qr(n)+(n.options.ruleSpaces?" ":"")).repeat(Xu(n));return n.options.ruleSpaces?r.slice(0,-1):r}const Jr={blockquote:xu,break:Jt,code:Eu,definition:Tu,emphasis:Hr,hardBreak:Jt,heading:Du,html:qr,image:Wr,imageReference:Yr,inlineCode:Vr,link:Gr,linkReference:Xr,list:ju,listItem:Hu,paragraph:qu,root:Yu,strong:Kr,text:Gu,thematicBreak:Qu};function Ku(){return{enter:{table:Ju,tableData:Zt,tableHeader:Zt,tableRow:ec},exit:{codeText:nc,table:Zu,tableData:Ln,tableHeader:Ln,tableRow:Ln}}}function Ju(e){const t=e._align;this.enter({type:"table",align:t.map(function(n){return n==="none"?null:n}),children:[]},e),this.data.inTable=!0}function Zu(e){this.exit(e),this.data.inTable=void 0}function ec(e){this.enter({type:"tableRow",children:[]},e)}function Ln(e){this.exit(e)}function Zt(e){this.enter({type:"tableCell",children:[]},e)}function nc(e){let t=this.resume();this.data.inTable&&(t=t.replace(/\\([\\|])/g,tc));const n=this.stack[this.stack.length-1];n.type,n.value=t,this.exit(e)}function tc(e,t){return t==="|"?t:e}function rc(e){const t=e||{},n=t.tableCellPadding,r=t.tablePipeAlign,i=t.stringLength,a=n?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:h,table:o,tableCell:u,tableRow:l}};function o(p,g,k,S){return s(f(p,k,S),p.align)}function l(p,g,k,S){const y=c(p,k,S),E=s([y]);return E.slice(0,E.indexOf(`
`))}function u(p,g,k,S){const y=k.enter("tableCell"),E=k.enter("phrasing"),A=k.containerPhrasing(p,{...S,before:a,after:a});return E(),y(),A}function s(p,g){return yu(p,{align:g,alignDelimiters:r,padding:n,stringLength:i})}function f(p,g,k){const S=p.children;let y=-1;const E=[],A=g.enter("table");for(;++y<S.length;)E[y]=c(S[y],g,k);return A(),E}function c(p,g,k){const S=p.children;let y=-1;const E=[],A=g.enter("tableRow");for(;++y<S.length;)E[y]=u(S[y],p,g,k);return A(),E}function h(p,g,k){let S=Jr.inlineCode(p,g,k);return k.stack.includes("tableCell")&&(S=S.replace(/\|/g,"\\$&")),S}}function ic(){return{exit:{taskListCheckValueChecked:er,taskListCheckValueUnchecked:er,paragraph:ac}}}function oc(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:lc}}}function er(e){const t=this.stack[this.stack.length-2];t.type,t.checked=e.type==="taskListCheckValueChecked"}function ac(e){const t=this.stack[this.stack.length-2];if(t&&t.type==="listItem"&&typeof t.checked=="boolean"){const n=this.stack[this.stack.length-1];n.type;const r=n.children[0];if(r&&r.type==="text"){const i=t.children;let a=-1,o;for(;++a<i.length;){const l=i[a];if(l.type==="paragraph"){o=l;break}}o===n&&(r.value=r.value.slice(1),r.value.length===0?n.children.shift():n.position&&r.position&&typeof r.position.start.offset=="number"&&(r.position.start.column++,r.position.start.offset++,n.position.start=Object.assign({},r.position.start)))}}this.exit(e)}function lc(e,t,n,r){const i=e.children[0],a=typeof e.checked=="boolean"&&i&&i.type==="paragraph",o="["+(e.checked?"x":" ")+"] ",l=n.createTracker(r);a&&l.move(o);let u=Jr.listItem(e,t,n,{...r,...l.current()});return a&&(u=u.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,s)),u;function s(f){return f+o}}function sc(){return[js(),lu(),fu(),Ku(),ic()]}function uc(e){return{extensions:[Us(),su(e),pu(),rc(e),oc()]}}const cc={tokenize:gc,partial:!0},Zr={tokenize:yc,partial:!0},ei={tokenize:bc,partial:!0},ni={tokenize:xc,partial:!0},fc={tokenize:wc,partial:!0},ti={name:"wwwAutolink",tokenize:mc,previous:ii},ri={name:"protocolAutolink",tokenize:dc,previous:oi},ye={name:"emailAutolink",tokenize:hc,previous:ai},pe={};function pc(){return{text:pe}}let Ae=48;for(;Ae<123;)pe[Ae]=ye,Ae++,Ae===58?Ae=65:Ae===91&&(Ae=97);pe[43]=ye;pe[45]=ye;pe[46]=ye;pe[95]=ye;pe[72]=[ye,ri];pe[104]=[ye,ri];pe[87]=[ye,ti];pe[119]=[ye,ti];function hc(e,t,n){const r=this;let i,a;return o;function o(c){return!jn(c)||!ai.call(r,r.previous)||it(r.events)?n(c):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),l(c))}function l(c){return jn(c)?(e.consume(c),l):c===64?(e.consume(c),u):n(c)}function u(c){return c===46?e.check(fc,f,s)(c):c===45||c===95||K(c)?(a=!0,e.consume(c),u):f(c)}function s(c){return e.consume(c),i=!0,u}function f(c){return a&&i&&Z(r.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),t(c)):n(c)}}function mc(e,t,n){const r=this;return i;function i(o){return o!==87&&o!==119||!ii.call(r,r.previous)||it(r.events)?n(o):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(cc,e.attempt(Zr,e.attempt(ei,a),n),n)(o))}function a(o){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),t(o)}}function dc(e,t,n){const r=this;let i="",a=!1;return o;function o(c){return(c===72||c===104)&&oi.call(r,r.previous)&&!it(r.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),i+=String.fromCodePoint(c),e.consume(c),l):n(c)}function l(c){if(Z(c)&&i.length<5)return i+=String.fromCodePoint(c),e.consume(c),l;if(c===58){const h=i.toLowerCase();if(h==="http"||h==="https")return e.consume(c),u}return n(c)}function u(c){return c===47?(e.consume(c),a?s:(a=!0,u)):n(c)}function s(c){return c===null||rn(c)||V(c)||ve(c)||sn(c)?n(c):e.attempt(Zr,e.attempt(ei,f),n)(c)}function f(c){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),t(c)}}function gc(e,t,n){let r=0;return i;function i(o){return(o===87||o===119)&&r<3?(r++,e.consume(o),i):o===46&&r===3?(e.consume(o),a):n(o)}function a(o){return o===null?n(o):t(o)}}function yc(e,t,n){let r,i,a;return o;function o(s){return s===46||s===95?e.check(ni,u,l)(s):s===null||V(s)||ve(s)||s!==45&&sn(s)?u(s):(a=!0,e.consume(s),o)}function l(s){return s===95?r=!0:(i=r,r=void 0),e.consume(s),o}function u(s){return i||r||!a?n(s):t(s)}}function bc(e,t){let n=0,r=0;return i;function i(o){return o===40?(n++,e.consume(o),i):o===41&&r<n?a(o):o===33||o===34||o===38||o===39||o===41||o===42||o===44||o===46||o===58||o===59||o===60||o===63||o===93||o===95||o===126?e.check(ni,t,a)(o):o===null||V(o)||ve(o)?t(o):(e.consume(o),i)}function a(o){return o===41&&r++,e.consume(o),i}}function xc(e,t,n){return r;function r(l){return l===33||l===34||l===39||l===41||l===42||l===44||l===46||l===58||l===59||l===63||l===95||l===126?(e.consume(l),r):l===38?(e.consume(l),a):l===93?(e.consume(l),i):l===60||l===null||V(l)||ve(l)?t(l):n(l)}function i(l){return l===null||l===40||l===91||V(l)||ve(l)?t(l):r(l)}function a(l){return Z(l)?o(l):n(l)}function o(l){return l===59?(e.consume(l),r):Z(l)?(e.consume(l),o):n(l)}}function wc(e,t,n){return r;function r(a){return e.consume(a),i}function i(a){return K(a)?n(a):t(a)}}function ii(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||V(e)}function oi(e){return!Z(e)}function ai(e){return!(e===47||jn(e))}function jn(e){return e===43||e===45||e===46||e===95||K(e)}function it(e){let t=e.length,n=!1;for(;t--;){const r=e[t][1];if((r.type==="labelLink"||r.type==="labelImage")&&!r._balanced){n=!0;break}if(r._gfmAutolinkLiteralWalkedInto){n=!1;break}}return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}const kc={tokenize:Lc,partial:!0};function Sc(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:Cc,continuation:{tokenize:Tc},exit:Ic}},text:{91:{name:"gfmFootnoteCall",tokenize:Ec},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:Ac,resolveTo:vc}}}}function Ac(e,t,n){const r=this;let i=r.events.length;const a=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let o;for(;i--;){const u=r.events[i][1];if(u.type==="labelImage"){o=u;break}if(u.type==="gfmFootnoteCall"||u.type==="labelLink"||u.type==="label"||u.type==="image"||u.type==="link")break}return l;function l(u){if(!o||!o._balanced)return n(u);const s=ce(r.sliceSerialize({start:o.end,end:r.now()}));return s.codePointAt(0)!==94||!a.includes(s.slice(1))?n(u):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(u),e.exit("gfmFootnoteCallLabelMarker"),t(u))}}function vc(e,t){let n=e.length;for(;n--;)if(e[n][1].type==="labelImage"&&e[n][0]==="enter"){e[n][1];break}e[n+1][1].type="data",e[n+3][1].type="gfmFootnoteCallLabelMarker";const r={type:"gfmFootnoteCall",start:Object.assign({},e[n+3][1].start),end:Object.assign({},e[e.length-1][1].end)},i={type:"gfmFootnoteCallMarker",start:Object.assign({},e[n+3][1].end),end:Object.assign({},e[n+3][1].end)};i.end.column++,i.end.offset++,i.end._bufferIndex++;const a={type:"gfmFootnoteCallString",start:Object.assign({},i.end),end:Object.assign({},e[e.length-1][1].start)},o={type:"chunkString",contentType:"string",start:Object.assign({},a.start),end:Object.assign({},a.end)},l=[e[n+1],e[n+2],["enter",r,t],e[n+3],e[n+4],["enter",i,t],["exit",i,t],["enter",a,t],["enter",o,t],["exit",o,t],["exit",a,t],e[e.length-2],e[e.length-1],["exit",r,t]];return e.splice(n,e.length-n+1,...l),e}function Ec(e,t,n){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let a=0,o;return l;function l(c){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(c),e.exit("gfmFootnoteCallLabelMarker"),u}function u(c){return c!==94?n(c):(e.enter("gfmFootnoteCallMarker"),e.consume(c),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",s)}function s(c){if(a>999||c===93&&!o||c===null||c===91||V(c))return n(c);if(c===93){e.exit("chunkString");const h=e.exit("gfmFootnoteCallString");return i.includes(ce(r.sliceSerialize(h)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(c),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),t):n(c)}return V(c)||(o=!0),a++,e.consume(c),c===92?f:s}function f(c){return c===91||c===92||c===93?(e.consume(c),a++,s):s(c)}}function Cc(e,t,n){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let a,o=0,l;return u;function u(g){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(g),e.exit("gfmFootnoteDefinitionLabelMarker"),s}function s(g){return g===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(g),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",f):n(g)}function f(g){if(o>999||g===93&&!l||g===null||g===91||V(g))return n(g);if(g===93){e.exit("chunkString");const k=e.exit("gfmFootnoteDefinitionLabelString");return a=ce(r.sliceSerialize(k)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(g),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),h}return V(g)||(l=!0),o++,e.consume(g),g===92?c:f}function c(g){return g===91||g===92||g===93?(e.consume(g),o++,f):f(g)}function h(g){return g===58?(e.enter("definitionMarker"),e.consume(g),e.exit("definitionMarker"),i.includes(a)||i.push(a),j(e,p,"gfmFootnoteDefinitionWhitespace")):n(g)}function p(g){return t(g)}}function Tc(e,t,n){return e.check(Xe,t,e.attempt(kc,t,n))}function Ic(e){e.exit("gfmFootnoteDefinition")}function Lc(e,t,n){const r=this;return j(e,i,"gfmFootnoteDefinitionIndent",5);function i(a){const o=r.events[r.events.length-1];return o&&o[1].type==="gfmFootnoteDefinitionIndent"&&o[2].sliceSerialize(o[1],!0).length===4?t(a):n(a)}}function Pc(e){let n=(e||{}).singleTilde;const r={name:"strikethrough",tokenize:a,resolveAll:i};return n==null&&(n=!0),{text:{126:r},insideSpan:{null:[r]},attentionMarkers:{null:[126]}};function i(o,l){let u=-1;for(;++u<o.length;)if(o[u][0]==="enter"&&o[u][1].type==="strikethroughSequenceTemporary"&&o[u][1]._close){let s=u;for(;s--;)if(o[s][0]==="exit"&&o[s][1].type==="strikethroughSequenceTemporary"&&o[s][1]._open&&o[u][1].end.offset-o[u][1].start.offset===o[s][1].end.offset-o[s][1].start.offset){o[u][1].type="strikethroughSequence",o[s][1].type="strikethroughSequence";const f={type:"strikethrough",start:Object.assign({},o[s][1].start),end:Object.assign({},o[u][1].end)},c={type:"strikethroughText",start:Object.assign({},o[s][1].end),end:Object.assign({},o[u][1].start)},h=[["enter",f,l],["enter",o[s][1],l],["exit",o[s][1],l],["enter",c,l]],p=l.parser.constructs.insideSpan.null;p&&ie(h,h.length,0,un(p,o.slice(s+1,u),l)),ie(h,h.length,0,[["exit",c,l],["enter",o[u][1],l],["exit",o[u][1],l],["exit",f,l]]),ie(o,s-1,u-s+3,h),u=s+h.length-2;break}}for(u=-1;++u<o.length;)o[u][1].type==="strikethroughSequenceTemporary"&&(o[u][1].type="data");return o}function a(o,l,u){const s=this.previous,f=this.events;let c=0;return h;function h(g){return s===126&&f[f.length-1][1].type!=="characterEscape"?u(g):(o.enter("strikethroughSequenceTemporary"),p(g))}function p(g){const k=Ne(s);if(g===126)return c>1?u(g):(o.consume(g),c++,p);if(c<2&&!n)return u(g);const S=o.exit("strikethroughSequenceTemporary"),y=Ne(g);return S._open=!y||y===2&&!!k,S._close=!k||k===2&&!!y,l(g)}}}class Dc{constructor(){this.map=[]}add(t,n,r){Rc(this,t,n,r)}consume(t){if(this.map.sort(function(a,o){return a[0]-o[0]}),this.map.length===0)return;let n=this.map.length;const r=[];for(;n>0;)n-=1,r.push(t.slice(this.map[n][0]+this.map[n][1]),this.map[n][2]),t.length=this.map[n][0];r.push(t.slice()),t.length=0;let i=r.pop();for(;i;){for(const a of i)t.push(a);i=r.pop()}this.map.length=0}}function Rc(e,t,n,r){let i=0;if(!(n===0&&r.length===0)){for(;i<e.map.length;){if(e.map[i][0]===t){e.map[i][1]+=n,e.map[i][2].push(...r);return}i+=1}e.map.push([t,n,r])}}function Nc(e,t){let n=!1;const r=[];for(;t<e.length;){const i=e[t];if(n){if(i[0]==="enter")i[1].type==="tableContent"&&r.push(e[t+1][1].type==="tableDelimiterMarker"?"left":"none");else if(i[1].type==="tableContent"){if(e[t-1][1].type==="tableDelimiterMarker"){const a=r.length-1;r[a]=r[a]==="left"?"center":"right"}}else if(i[1].type==="tableDelimiterRow")break}else i[0]==="enter"&&i[1].type==="tableDelimiterRow"&&(n=!0);t+=1}return r}function Fc(){return{flow:{null:{name:"table",tokenize:Oc,resolveAll:Mc}}}}function Oc(e,t,n){const r=this;let i=0,a=0,o;return l;function l(b){let I=r.events.length-1;for(;I>-1;){const R=r.events[I][1].type;if(R==="lineEnding"||R==="linePrefix")I--;else break}const P=I>-1?r.events[I][1].type:null,q=P==="tableHead"||P==="tableRow"?w:u;return q===w&&r.parser.lazy[r.now().line]?n(b):q(b)}function u(b){return e.enter("tableHead"),e.enter("tableRow"),s(b)}function s(b){return b===124||(o=!0,a+=1),f(b)}function f(b){return b===null?n(b):D(b)?a>1?(a=0,r.interrupt=!0,e.exit("tableRow"),e.enter("lineEnding"),e.consume(b),e.exit("lineEnding"),p):n(b):_(b)?j(e,f,"whitespace")(b):(a+=1,o&&(o=!1,i+=1),b===124?(e.enter("tableCellDivider"),e.consume(b),e.exit("tableCellDivider"),o=!0,f):(e.enter("data"),c(b)))}function c(b){return b===null||b===124||V(b)?(e.exit("data"),f(b)):(e.consume(b),b===92?h:c)}function h(b){return b===92||b===124?(e.consume(b),c):c(b)}function p(b){return r.interrupt=!1,r.parser.lazy[r.now().line]?n(b):(e.enter("tableDelimiterRow"),o=!1,_(b)?j(e,g,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(b):g(b))}function g(b){return b===45||b===58?S(b):b===124?(o=!0,e.enter("tableCellDivider"),e.consume(b),e.exit("tableCellDivider"),k):O(b)}function k(b){return _(b)?j(e,S,"whitespace")(b):S(b)}function S(b){return b===58?(a+=1,o=!0,e.enter("tableDelimiterMarker"),e.consume(b),e.exit("tableDelimiterMarker"),y):b===45?(a+=1,y(b)):b===null||D(b)?F(b):O(b)}function y(b){return b===45?(e.enter("tableDelimiterFiller"),E(b)):O(b)}function E(b){return b===45?(e.consume(b),E):b===58?(o=!0,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(b),e.exit("tableDelimiterMarker"),A):(e.exit("tableDelimiterFiller"),A(b))}function A(b){return _(b)?j(e,F,"whitespace")(b):F(b)}function F(b){return b===124?g(b):b===null||D(b)?!o||i!==a?O(b):(e.exit("tableDelimiterRow"),e.exit("tableHead"),t(b)):O(b)}function O(b){return n(b)}function w(b){return e.enter("tableRow"),z(b)}function z(b){return b===124?(e.enter("tableCellDivider"),e.consume(b),e.exit("tableCellDivider"),z):b===null||D(b)?(e.exit("tableRow"),t(b)):_(b)?j(e,z,"whitespace")(b):(e.enter("data"),H(b))}function H(b){return b===null||b===124||V(b)?(e.exit("data"),z(b)):(e.consume(b),b===92?U:H)}function U(b){return b===92||b===124?(e.consume(b),H):H(b)}}function Mc(e,t){let n=-1,r=!0,i=0,a=[0,0,0,0],o=[0,0,0,0],l=!1,u=0,s,f,c;const h=new Dc;for(;++n<e.length;){const p=e[n],g=p[1];p[0]==="enter"?g.type==="tableHead"?(l=!1,u!==0&&(nr(h,t,u,s,f),f=void 0,u=0),s={type:"table",start:Object.assign({},g.start),end:Object.assign({},g.end)},h.add(n,0,[["enter",s,t]])):g.type==="tableRow"||g.type==="tableDelimiterRow"?(r=!0,c=void 0,a=[0,0,0,0],o=[0,n+1,0,0],l&&(l=!1,f={type:"tableBody",start:Object.assign({},g.start),end:Object.assign({},g.end)},h.add(n,0,[["enter",f,t]])),i=g.type==="tableDelimiterRow"?2:f?3:1):i&&(g.type==="data"||g.type==="tableDelimiterMarker"||g.type==="tableDelimiterFiller")?(r=!1,o[2]===0&&(a[1]!==0&&(o[0]=o[1],c=nn(h,t,a,i,void 0,c),a=[0,0,0,0]),o[2]=n)):g.type==="tableCellDivider"&&(r?r=!1:(a[1]!==0&&(o[0]=o[1],c=nn(h,t,a,i,void 0,c)),a=o,o=[a[1],n,0,0])):g.type==="tableHead"?(l=!0,u=n):g.type==="tableRow"||g.type==="tableDelimiterRow"?(u=n,a[1]!==0?(o[0]=o[1],c=nn(h,t,a,i,n,c)):o[1]!==0&&(c=nn(h,t,o,i,n,c)),i=0):i&&(g.type==="data"||g.type==="tableDelimiterMarker"||g.type==="tableDelimiterFiller")&&(o[3]=n)}for(u!==0&&nr(h,t,u,s,f),h.consume(t.events),n=-1;++n<t.events.length;){const p=t.events[n];p[0]==="enter"&&p[1].type==="table"&&(p[1]._align=Nc(t.events,n))}return e}function nn(e,t,n,r,i,a){const o=r===1?"tableHeader":r===2?"tableDelimiter":"tableData",l="tableContent";n[0]!==0&&(a.end=Object.assign({},De(t.events,n[0])),e.add(n[0],0,[["exit",a,t]]));const u=De(t.events,n[1]);if(a={type:o,start:Object.assign({},u),end:Object.assign({},u)},e.add(n[1],0,[["enter",a,t]]),n[2]!==0){const s=De(t.events,n[2]),f=De(t.events,n[3]),c={type:l,start:Object.assign({},s),end:Object.assign({},f)};if(e.add(n[2],0,[["enter",c,t]]),r!==2){const h=t.events[n[2]],p=t.events[n[3]];if(h[1].end=Object.assign({},p[1].end),h[1].type="chunkText",h[1].contentType="text",n[3]>n[2]+1){const g=n[2]+1,k=n[3]-n[2]-1;e.add(g,k,[])}}e.add(n[3]+1,0,[["exit",c,t]])}return i!==void 0&&(a.end=Object.assign({},De(t.events,i)),e.add(i,0,[["exit",a,t]]),a=void 0),a}function nr(e,t,n,r,i){const a=[],o=De(t.events,n);i&&(i.end=Object.assign({},o),a.push(["exit",i,t])),r.end=Object.assign({},o),a.push(["exit",r,t]),e.add(n+1,0,a)}function De(e,t){const n=e[t],r=n[0]==="enter"?"start":"end";return n[1][r]}const _c={name:"tasklistCheck",tokenize:Bc};function zc(){return{text:{91:_c}}}function Bc(e,t,n){const r=this;return i;function i(u){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?n(u):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(u),e.exit("taskListCheckMarker"),a)}function a(u){return V(u)?(e.enter("taskListCheckValueUnchecked"),e.consume(u),e.exit("taskListCheckValueUnchecked"),o):u===88||u===120?(e.enter("taskListCheckValueChecked"),e.consume(u),e.exit("taskListCheckValueChecked"),o):n(u)}function o(u){return u===93?(e.enter("taskListCheckMarker"),e.consume(u),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),l):n(u)}function l(u){return D(u)?t(u):_(u)?e.check({tokenize:jc},t,n)(u):n(u)}}function jc(e,t,n){return j(e,r,"whitespace");function r(i){return i===null?n(i):t(i)}}function Uc(e){return yr([pc(),Sc(),Pc(e),Fc(),zc()])}const Hc={};function qc(e){const t=this,n=e||Hc,r=t.data(),i=r.micromarkExtensions||(r.micromarkExtensions=[]),a=r.fromMarkdownExtensions||(r.fromMarkdownExtensions=[]),o=r.toMarkdownExtensions||(r.toMarkdownExtensions=[]);i.push(Uc(n)),a.push(sc()),o.push(uc(n))}const Wc=`# Loan Agreement

**Version:** 1.0

---

## CONSUMER LOAN AGREEMENT

This Loan Agreement ("Agreement") is entered into as of **[DATE]** ("Effective Date") by and between:

**LENDER:**  
AmeriLend  
12707 High Bluff Drive, Suite 200, San Diego, CA 92130, USA  
("Lender," "we," "us," or "our")

**BORROWER:**  
**[BORROWER NAME]**  
**[BORROWER ADDRESS]**  
Social Security Number: **[SSN]**  
("Borrower," "you," or "your")

## RECITALS

WHEREAS, Borrower has applied for a consumer loan from Lender; and

WHEREAS, Lender has approved Borrower's application subject to the terms and conditions set forth in this Agreement;

NOW, THEREFORE, in consideration of the mutual covenants and agreements contained herein, the parties agree as follows:

## 1. LOAN DETAILS

### 1.1 Loan Amount
Lender agrees to lend to Borrower the principal sum of **$[LOAN_AMOUNT]** ("Loan Amount").

### 1.2 Loan Type
This is a **[LOAN_TYPE]** loan (Installment Loan or Short-Term Loan).

### 1.3 Loan Purpose
The stated purpose of this loan is: **[LOAN_PURPOSE]**

## 2. INTEREST RATE AND CHARGES

### 2.1 Interest Rate
The Loan shall bear interest at a rate of **[INTEREST_RATE]%** per annum ("Interest Rate").

### 2.2 Annual Percentage Rate (APR)
The Annual Percentage Rate (APR) for this Loan is **[APR]%**, which includes the Interest Rate and all applicable fees.

### 2.3 Processing Fee
Borrower has paid a non-refundable processing fee of **$[PROCESSING_FEE]** ("Processing Fee") to cover administrative costs, underwriting, and loan processing services. This fee was paid on **[FEE_PAYMENT_DATE]** via **[PAYMENT_METHOD]**.

### 2.4 Late Fees
If any payment is not received within **[GRACE_PERIOD]** days after the due date, Borrower shall pay a late fee of **$[LATE_FEE_AMOUNT]** or **[LATE_FEE_PERCENTAGE]%** of the overdue payment, whichever is less, as permitted by applicable law.

### 2.5 Returned Payment Fee
If any payment is returned for insufficient funds or any other reason, Borrower shall pay a returned payment fee of **$[NSF_FEE]**, as permitted by applicable law.

## 3. REPAYMENT TERMS

### 3.1 Repayment Schedule
Borrower shall repay the Loan in **[NUMBER_OF_PAYMENTS]** installments of **$[PAYMENT_AMOUNT]** each, due on the **[PAYMENT_DAY]** day of each month, beginning on **[FIRST_PAYMENT_DATE]** and continuing until the Loan is paid in full.

### 3.2 Payment Method
Payments shall be made by:
- ACH debit from Borrower's bank account
- Online payment through the AmeriLend platform
- Other methods as agreed by Lender

### 3.3 Application of Payments
Payments will be applied in the following order:
1. Late fees and other charges
2. Accrued interest
3. Principal balance

### 3.4 Prepayment
Borrower may prepay the Loan in whole or in part at any time without penalty. Prepayments will be applied to accrued interest first, then to principal. Prepayment does not excuse Borrower from making scheduled payments unless the Loan is paid in full.

### 3.5 Final Payment
The final payment shall be **$[FINAL_PAYMENT_AMOUNT]**, due on **[FINAL_PAYMENT_DATE]**.

## 4. DISBURSEMENT

### 4.1 Disbursement Method
Upon Borrower's acceptance of this Agreement and confirmation of Processing Fee payment, Lender shall disburse the Loan Amount to Borrower's designated bank account:

**Bank Name:** [BANK_NAME]  
**Account Holder:** [ACCOUNT_HOLDER]  
**Account Number:** [ACCOUNT_NUMBER]  
**Routing Number:** [ROUTING_NUMBER]

### 4.2 Disbursement Timing
Disbursement typically occurs within 1-3 business days after all conditions are met.

### 4.3 Disbursement Conditions
Disbursement is contingent upon:
- Acceptance of this Agreement
- Payment of Processing Fee
- Verification of bank account information
- Completion of any additional verification requirements

## 5. BORROWER REPRESENTATIONS AND WARRANTIES

Borrower represents and warrants that:

1. Borrower is at least 18 years of age and legally competent to enter into this Agreement
2. All information provided in the loan application is true, accurate, and complete
3. Borrower has the legal capacity to incur this debt
4. Borrower is a U.S. citizen or legal resident
5. The bank account information provided is accurate and belongs to Borrower
6. Borrower is not currently in bankruptcy or contemplating bankruptcy
7. There are no legal proceedings pending against Borrower that would impair Borrower's ability to repay the Loan
8. Borrower has not provided false or misleading information to obtain this Loan

## 6. BORROWER COVENANTS

Borrower agrees to:

1. Make all payments when due
2. Maintain valid contact information with Lender
3. Notify Lender immediately of any change in employment, income, or financial circumstances
4. Notify Lender of any change in address, phone number, or email
5. Not use the Loan proceeds for any illegal purpose
6. Cooperate with Lender's reasonable requests for information
7. Not transfer or assign this Agreement without Lender's written consent

## 7. DEFAULT

### 7.1 Events of Default

Borrower shall be in default under this Agreement if:

1. Borrower fails to make any payment when due and such failure continues for **[DEFAULT_DAYS]** days
2. Borrower provides false or misleading information
3. Borrower files for bankruptcy or becomes insolvent
4. Borrower dies or becomes legally incapacitated
5. Borrower breaches any other term of this Agreement

### 7.2 Remedies Upon Default

Upon default, Lender may:

1. Declare the entire unpaid balance immediately due and payable
2. Charge late fees and collection costs as permitted by law
3. Report the default to credit bureaus
4. Engage collection agencies or attorneys to collect the debt
5. Pursue legal action to recover amounts owed
6. Exercise any other rights available under law

### 7.3 Collection Costs

If Lender refers the Loan to a collection agency or attorney, Borrower shall pay all reasonable collection costs, including attorney fees, as permitted by applicable law.

## 8. CREDIT REPORTING

Lender may report account information to credit bureaus, including payment history, account balance, and default information. Late payments, missed payments, or defaults may negatively affect Borrower's credit score.

## 9. RIGHT TO CANCEL

### 9.1 Three-Day Right of Rescission

If this Loan is secured by Borrower's principal dwelling, Borrower has the right to cancel this Agreement within three (3) business days from the Effective Date or receipt of all required disclosures, whichever is later.

### 9.2 Cancellation Procedure

To cancel, Borrower must notify Lender in writing before midnight of the third business day. Upon cancellation, Lender will refund any fees paid (except as prohibited by law) and Borrower must return any loan proceeds received.

## 10. NOTICES

All notices under this Agreement shall be in writing and delivered to:

**To Lender:**  
AmeriLend  
12707 High Bluff Drive, Suite 200, San Diego, CA 92130, USA  
Email: support@amerilendloan.com

**To Borrower:**  
[BORROWER NAME]  
[BORROWER ADDRESS]  
Email: [BORROWER EMAIL]

Notices are deemed delivered when sent by email or three (3) days after mailing by certified mail.

## 11. GOVERNING LAW

This Agreement shall be governed by and construed in accordance with the laws of the State of **[STATE]** and applicable federal law, without regard to conflict of law principles.

## 12. ARBITRATION

Any dispute arising from or relating to this Agreement shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. Borrower waives any right to participate in a class action lawsuit or class-wide arbitration.

## 13. SEVERABILITY

If any provision of this Agreement is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.

## 14. ENTIRE AGREEMENT

This Agreement, together with the Terms of Service and Privacy Policy, constitutes the entire agreement between the parties and supersedes all prior agreements and understandings.

## 15. AMENDMENT

This Agreement may not be amended except by written agreement signed by both parties.

## 16. WAIVER

No waiver of any provision of this Agreement shall be deemed or shall constitute a waiver of any other provision, nor shall any waiver constitute a continuing waiver.

## 17. ELECTRONIC SIGNATURES

Borrower consents to the use of electronic signatures and agrees that electronic signatures have the same legal effect as handwritten signatures.

## 18. TRUTH IN LENDING DISCLOSURES

Pursuant to the Truth in Lending Act (Regulation Z), the following disclosures are provided:

| Disclosure Item | Amount/Description |
|----------------|-------------------|
| **Annual Percentage Rate (APR)** | [APR]% |
| **Finance Charge** | $[FINANCE_CHARGE] |
| **Amount Financed** | $[AMOUNT_FINANCED] |
| **Total of Payments** | $[TOTAL_PAYMENTS] |
| **Payment Schedule** | [NUMBER_OF_PAYMENTS] payments of $[PAYMENT_AMOUNT] |
| **Late Payment Fee** | $[LATE_FEE] or [LATE_FEE_PERCENTAGE]% |
| **Prepayment** | No penalty for prepayment |
| **Security Interest** | None (unsecured loan) |

## 19. STATE-SPECIFIC DISCLOSURES

**[STATE-SPECIFIC DISCLOSURES WILL BE INSERTED HERE BASED ON BORROWER'S STATE OF RESIDENCE]**

## 20. ACCEPTANCE

By electronically signing below, Borrower acknowledges that:

1. Borrower has read and understands this Agreement
2. Borrower agrees to all terms and conditions
3. Borrower has received a copy of this Agreement
4. Borrower has had the opportunity to seek legal advice
5. Borrower's electronic signature is legally binding

---

## SIGNATURES

**BORROWER:**

Signature: _________________________ (Electronic)  
Name: [BORROWER NAME]  
Date: [SIGNATURE DATE]  
IP Address: [IP ADDRESS]

**LENDER:**

AmeriLend  
By: Authorized Representative  
Date: [LENDER SIGNATURE DATE]

---

**IMPORTANT:** This is a legally binding contract. Keep a copy for your records. If you have questions, contact us at support@amerilendloan.com or +1 945 212-1609 (Mon–Fri 8am–8pm CT; Sat–Sun 9am–5pm CT).
`,Yc=`# Privacy Policy

**Effective Date:** November 2, 2025  
**Version:** 1.0

## Introduction

AmeriLend ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you use our website and services (collectively, the "Services").

Please read this Privacy Policy carefully. By using our Services, you consent to the practices described in this policy. If you do not agree with this policy, please do not use our Services.

## Information We Collect

### Personal Information

We collect personal information that you voluntarily provide when you:
- Create an account
- Submit a loan application
- Make a payment
- Contact customer support
- Subscribe to communications

Personal information may include:
- Full name
- Date of birth
- Social Security Number
- Email address
- Phone number
- Mailing address
- Employment information (employer name, job title, income)
- Bank account information
- Government-issued ID information

### Financial Information

To process loan applications, we collect:
- Income and employment details
- Credit history and credit scores
- Bank account and routing numbers
- Payment card information
- Transaction history
- Debt obligations

### Automatically Collected Information

When you use our Services, we automatically collect:
- IP address
- Browser type and version
- Device information (type, operating system)
- Pages viewed and time spent on pages
- Referring website
- Clickstream data
- Cookies and similar tracking technologies

### Information from Third Parties

We may obtain information about you from:
- Credit bureaus and reporting agencies
- Identity verification services
- Fraud prevention services
- Public databases
- Social media platforms (if you connect your account)

## How We Use Your Information

We use your information to:

### Provide Services
- Process and underwrite loan applications
- Verify your identity and eligibility
- Determine creditworthiness
- Calculate loan terms and fees
- Process payments and disbursements
- Manage your account
- Provide customer support

### Communicate with You
- Send transaction confirmations and receipts
- Provide account updates and notifications
- Respond to inquiries and requests
- Send marketing communications (with your consent)
- Conduct surveys and gather feedback

### Improve Services
- Analyze usage patterns and trends
- Develop new features and services
- Personalize your experience
- Conduct research and analytics
- Test and optimize our platform

### Comply with Legal Obligations
- Verify identity and prevent fraud
- Detect and prevent illegal activity
- Comply with laws and regulations
- Respond to legal requests and court orders
- Enforce our Terms of Service
- Protect our rights and property

### Marketing and Advertising
- Send promotional offers and updates
- Display targeted advertisements
- Measure advertising effectiveness
- Conduct market research

## How We Share Your Information

We may share your information with:

### Service Providers

We engage third-party companies to perform services on our behalf, including:
- Payment processors (Stripe, Coinbase Commerce)
- Cloud hosting providers
- Email service providers
- Customer support platforms
- Analytics providers
- Marketing platforms

These providers have access to your information only to perform specific tasks and are obligated to protect your information.

### Credit Bureaus and Reporting Agencies

We report account information to credit bureaus, including:
- Loan amounts and balances
- Payment history
- Defaults and delinquencies

We also obtain credit reports to evaluate loan applications.

### Business Partners

We may share information with business partners for:
- Joint marketing initiatives
- Co-branded services
- Referral programs

### Legal and Regulatory Authorities

We disclose information when required by law or to:
- Comply with legal process (subpoenas, court orders)
- Respond to government requests
- Enforce our Terms of Service
- Protect our rights, property, and safety
- Prevent fraud and illegal activity

### Business Transfers

If we are involved in a merger, acquisition, sale of assets, or bankruptcy, your information may be transferred to the successor entity.

### With Your Consent

We may share information for other purposes with your explicit consent.

## Your Privacy Rights

### Access and Correction

You have the right to:
- Access your personal information
- Request corrections to inaccurate information
- Update your account details

### Deletion

You may request deletion of your personal information, subject to:
- Legal and regulatory retention requirements
- Legitimate business purposes
- Ongoing transactions or disputes

### Opt-Out

You may opt out of:
- Marketing communications (via unsubscribe link or account settings)
- Targeted advertising (via browser settings or opt-out tools)
- Sale of personal information (where applicable)

### Do Not Track

We currently do not respond to Do Not Track signals from web browsers.

## State-Specific Rights

### California Residents (CCPA)

California residents have additional rights under the California Consumer Privacy Act:
- Right to know what personal information is collected
- Right to know if personal information is sold or disclosed
- Right to opt out of the sale of personal information
- Right to deletion of personal information
- Right to non-discrimination for exercising privacy rights

To exercise these rights, contact us at support@amerilendloan.com.

### Nevada Residents

Nevada residents may opt out of the sale of personal information by contacting us at support@amerilendloan.com.

### Other States

Residents of other states may have additional rights under applicable state laws. Please contact us to learn more.

## Data Security

We implement reasonable security measures to protect your information, including:

### Technical Safeguards
- Encryption of data in transit (SSL/TLS)
- Encryption of sensitive data at rest
- Secure authentication and access controls
- Regular security assessments and audits
- Intrusion detection and prevention systems

### Organizational Safeguards
- Employee training on data protection
- Access controls and need-to-know policies
- Background checks for employees with data access
- Incident response procedures
- Vendor security requirements

### Physical Safeguards
- Secure data centers
- Access controls to facilities
- Environmental controls

However, no method of transmission or storage is 100% secure. We cannot guarantee absolute security of your information.

## Data Retention

We retain your information for as long as necessary to:
- Provide Services
- Comply with legal obligations
- Resolve disputes
- Enforce agreements

Retention periods vary based on:
- Type of information
- Purpose of collection
- Legal requirements

After the retention period, we securely delete or anonymize your information.

## Cookies and Tracking Technologies

We use cookies and similar technologies to:
- Remember your preferences
- Authenticate your account
- Analyze usage and performance
- Deliver targeted advertising

### Types of Cookies

**Essential Cookies:** Necessary for the Services to function  
**Performance Cookies:** Collect usage statistics  
**Functional Cookies:** Remember your preferences  
**Advertising Cookies:** Deliver relevant advertisements

### Managing Cookies

You can control cookies through your browser settings. Disabling cookies may affect functionality of the Services.

## Third-Party Links

Our Services may contain links to third-party websites. We are not responsible for the privacy practices of these websites. We encourage you to review their privacy policies.

## Children's Privacy

Our Services are not intended for individuals under 18 years of age. We do not knowingly collect information from children. If we learn that we have collected information from a child, we will delete it promptly.

## International Users

Our Services are intended for users in the United States. If you access our Services from outside the U.S., your information may be transferred to and processed in the U.S., which may have different data protection laws than your jurisdiction.

## Changes to This Privacy Policy

We may update this Privacy Policy from time to time. We will notify you of material changes by:
- Posting the updated policy on our website
- Updating the "Effective Date"
- Sending an email notification (for significant changes)

Your continued use of the Services after changes become effective constitutes acceptance of the updated policy.

## Contact Us

If you have questions about this Privacy Policy or wish to exercise your privacy rights, please contact us:

**AmeriLend Privacy Team**  
Email: support@amerilendloan.com  
Phone: +1 945 212-1609  
Support Hours: Mon–Fri 8am–8pm CT; Sat–Sun 9am–5pm CT  
Address: 12707 High Bluff Drive, Suite 200, San Diego, CA 92130, USA

For California residents: You may designate an authorized agent to make requests on your behalf. We may require verification of the agent's authority.

## Complaints

If you believe we have not complied with this Privacy Policy or applicable privacy laws, you may file a complaint with:

- AmeriLend Privacy Team (contact information above)
- Federal Trade Commission (www.ftc.gov)
- Your state attorney general
- Applicable data protection authority

---

**Last Updated:** November 2, 2025
`,Vc=`# Terms of Service

**Effective Date:** November 2, 2025  
**Version:** 1.0

## 1. Acceptance of Terms

By accessing or using the AmeriLend website and services (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use the Services.

These Terms constitute a legally binding agreement between you ("you," "your," or "Borrower") and AmeriLend ("we," "us," "our," or "Lender"). Please read these Terms carefully before using our Services.

## 2. Eligibility

To use our Services and apply for a loan, you must:

- Be at least 18 years of age
- Be a legal resident of the United States
- Have a valid Social Security Number
- Have a valid email address and phone number
- Have an active bank account in your name
- Meet our creditworthiness and underwriting criteria

By submitting a loan application, you represent and warrant that you meet all eligibility requirements and that all information provided is accurate, complete, and current.

## 3. Loan Application Process

### 3.1 Application Submission

You may submit a loan application through our online platform. The application requires personal information, employment details, financial information, and the purpose of the loan. All information must be accurate and truthful.

### 3.2 Application Review

We review all applications and make lending decisions based on our underwriting criteria, which may include credit history, income verification, debt-to-income ratio, and other factors. We reserve the right to approve, deny, or request additional information for any application.

### 3.3 Loan Approval

If your application is approved, we will notify you of the approved loan amount, interest rate, repayment terms, and processing fee. Approval does not guarantee disbursement until all conditions are met.

## 4. Processing Fees

### 4.1 Fee Requirement

All approved loans require payment of a processing fee before funds can be disbursed. The current disclosed processing fee is 3.5% of the approved loan amount unless otherwise stated in your final loan disclosures.

### 4.2 Fee Payment

Processing fees must be paid in full before loan disbursement. We accept payment via:
- Credit or debit cards (Visa, Mastercard, American Express, Discover)
- Cryptocurrency (Bitcoin, Ethereum, USDT, USDC)

### 4.3 Non-Refundable

Processing fees are non-refundable once paid, except as required by applicable law. The fee covers administrative costs, underwriting, and processing services.

## 5. Loan Terms

### 5.1 Loan Types

We offer two types of loans:

**Installment Loans:**
- Larger loan amounts
- Fixed monthly payments
- Longer repayment periods
- Predictable payment schedule

**Short-Term Loans:**
- Smaller loan amounts
- Faster approval and funding
- Shorter repayment periods
- Ideal for emergency expenses

### 5.2 Interest Rates and APR

Interest rates are determined based on creditworthiness, loan amount, loan type, and repayment term. The Annual Percentage Rate (APR) includes the interest rate plus any applicable fees. Your specific rate will be disclosed in your loan agreement.

### 5.3 Repayment Terms

Repayment terms vary by loan type and amount. You agree to repay the loan according to the schedule provided in your loan agreement. Payments are typically due monthly on a specified date.

### 5.4 Prepayment

You may prepay your loan in full or in part at any time without penalty. Prepayments will be applied first to accrued interest, then to principal.

## 6. Disbursement

### 6.1 Disbursement Process

Upon confirmation of processing fee payment, we will initiate disbursement of the approved loan amount to your designated bank account. Disbursement typically occurs within 1-3 business days.

### 6.2 Disbursement Requirements

To receive loan proceeds, you must:
- Have paid the processing fee in full
- Provide valid bank account information
- Accept the loan agreement
- Complete any additional verification requirements

## 7. Default and Collections

### 7.1 Default

You will be in default if you:
- Fail to make a payment when due
- Provide false or misleading information
- File for bankruptcy
- Violate any term of the loan agreement

### 7.2 Consequences of Default

If you default, we may:
- Declare the entire loan balance immediately due and payable
- Report the default to credit bureaus
- Engage collection agencies or attorneys
- Pursue legal action to recover amounts owed
- Charge late fees and collection costs as permitted by law

### 7.3 Late Fees

Late fees may be charged for payments not received by the due date, as specified in your loan agreement and as permitted by applicable law.

## 8. Privacy and Data Protection

### 8.1 Information Collection

We collect personal information necessary to process your loan application, including but not limited to name, address, Social Security Number, employment information, and financial data.

### 8.2 Information Use

We use your information to:
- Process and underwrite loan applications
- Verify your identity and prevent fraud
- Communicate with you about your application and loan
- Comply with legal and regulatory requirements
- Improve our Services

### 8.3 Information Sharing

We may share your information with:
- Credit bureaus and reporting agencies
- Service providers and vendors
- Law enforcement and regulatory authorities
- Third parties as required by law or with your consent

For complete details, please review our Privacy Policy.

## 9. Electronic Communications and Signatures

### 9.1 E-SIGN Consent

By using our Services, you consent to receive communications electronically and to sign documents electronically. Electronic signatures have the same legal effect as handwritten signatures.

### 9.2 Electronic Delivery

We may provide all disclosures, notices, and agreements electronically. You agree to receive these documents via email or through your account on our platform.

### 9.3 Withdrawal of Consent

You may withdraw your consent to electronic communications at any time by contacting us. However, withdrawal may prevent you from using certain Services.

## 10. Prohibited Uses

You agree not to:

- Provide false, inaccurate, or misleading information
- Use the Services for any illegal purpose
- Attempt to circumvent our security measures
- Access another user's account without permission
- Use automated systems to access the Services
- Interfere with the proper functioning of the Services
- Violate any applicable laws or regulations

## 11. Intellectual Property

All content on our website, including text, graphics, logos, images, and software, is the property of AmeriLend or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our express written permission.

## 12. Disclaimer of Warranties

THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.

We do not warrant that:
- The Services will be uninterrupted or error-free
- Defects will be corrected
- The Services are free of viruses or harmful components
- Results obtained from the Services will be accurate or reliable

## 13. Limitation of Liability

TO THE MAXIMUM EXTENT PERMITTED BY LAW, AMERILEND SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR USE, ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.

Our total liability to you for all claims arising from or related to the Services shall not exceed the amount of fees you paid to us in the twelve (12) months preceding the claim.

## 14. Indemnification

You agree to indemnify, defend, and hold harmless AmeriLend, its affiliates, officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys' fees) arising from:

- Your use of the Services
- Your violation of these Terms
- Your violation of any rights of another party
- Any false or misleading information you provide

## 15. Governing Law and Dispute Resolution

### 15.1 Governing Law

These Terms shall be governed by and construed in accordance with the laws of the United States and the state in which you reside, without regard to conflict of law principles.

### 15.2 Arbitration

Any dispute arising from or relating to these Terms or the Services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. You waive any right to participate in a class action lawsuit or class-wide arbitration.

### 15.3 Exceptions

Either party may seek injunctive relief in court for violations of intellectual property rights or confidentiality obligations.

## 16. Changes to Terms

We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms on our website and updating the "Effective Date." Your continued use of the Services after changes become effective constitutes acceptance of the modified Terms.

## 17. Severability

If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.

## 18. Waiver

Our failure to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.

## 19. Assignment

You may not assign or transfer these Terms or your rights and obligations hereunder without our prior written consent. We may assign these Terms without restriction.

## 20. Entire Agreement

These Terms, together with our Privacy Policy and any loan agreement you enter into, constitute the entire agreement between you and AmeriLend regarding the Services and supersede all prior agreements and understandings.

## 21. Contact Information

If you have questions about these Terms, please contact us at:

**AmeriLend**  
Email: support@amerilendloan.com  
Phone: +1 945 212-1609  
Support Hours: Mon–Fri 8am–8pm CT; Sat–Sun 9am–5pm CT  
Address: 12707 High Bluff Drive, Suite 200, San Diego, CA 92130, USA

## 22. State-Specific Disclosures

Depending on your state of residence, additional terms and disclosures may apply. Please review your loan agreement for state-specific information.

---

**By clicking "I Accept" or by using the Services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.**
`,$c=`# Electronic Signature Consent

**Effective Date:** November 2, 2025  
**Version:** 1.0

## Consent to Use Electronic Signatures, Records, and Disclosures

This Electronic Signature Consent ("E-Sign Consent") explains your rights when you choose to conduct business with AmeriLend ("we," "us," or "our") electronically. Please read this document carefully.

## 1. Scope of Consent

By accepting this E-Sign Consent, you agree that we may provide to you electronically, and you consent to receive electronically, all documents, communications, notices, disclosures, and other information (collectively, "Communications") related to your loan application, loan agreement, and account with AmeriLend, including but not limited to:

- Loan applications and related forms
- Loan agreements and promissory notes
- Truth in Lending Act disclosures
- Privacy notices
- Terms of Service
- Payment receipts and confirmations
- Account statements
- Collection notices
- Amendment notifications
- Legal notices and disclosures required by law

## 2. Electronic Delivery Methods

We may provide Communications to you by:

- Email to the email address you provide
- Posting on your account dashboard on our website
- Text message (SMS) to your mobile phone number
- Push notifications through our mobile application
- Other electronic means as technology evolves

You agree to check your email and account regularly for Communications.

## 3. Electronic Signatures

You consent to electronically sign documents by:

- Clicking "I Accept," "I Agree," or similar buttons
- Typing your name in a signature field
- Using a mouse, touchpad, or touchscreen to create a signature
- Entering a unique code or password
- Other electronic signature methods we may offer

You agree that your electronic signature has the same legal force and effect as a handwritten signature.

## 4. Hardware and Software Requirements

To access and retain electronic Communications, you must have:

### Hardware
- A computer, smartphone, or tablet with internet access
- Sufficient storage space to save or download documents

### Software
- A current web browser (Chrome, Firefox, Safari, Edge)
- PDF reader software (Adobe Acrobat Reader or equivalent)
- Email account with sufficient storage

### Internet Connection
- Broadband or mobile internet connection

### Skills
- Ability to access the internet
- Ability to open and read PDF files
- Ability to save or print documents

## 5. How to Access Communications

You can access Communications by:

1. **Email:** Check the email address you provided to us
2. **Account Dashboard:** Log in to your account at https://www.amerilendloan.com
3. **Download:** Save Communications to your device
4. **Print:** Print Communications for your records

## 6. How to Retain Communications

You should retain copies of all Communications by:

- Saving electronic copies to your computer or cloud storage
- Printing paper copies for your files
- Taking screenshots of important information

We recommend keeping all loan-related documents for at least seven (7) years.

## 7. Right to Receive Paper Copies

You have the right to receive paper copies of any Communication. To request a paper copy:

- Email us at support@amerilendloan.com
- Call us at +1 945 212-1609
- Write to us at 12707 High Bluff Drive, Suite 200, San Diego, CA 92130, USA

We will provide paper copies free of charge, although we reserve the right to charge a reasonable fee for duplicate copies.

## 8. Withdrawal of Consent

You may withdraw your consent to receive documents electronically by:

- Calling +1 945 212-1609
- Emailing support@amerilendloan.com

### Consequences of Withdrawal

If you withdraw consent:

- We will provide future Communications in paper form
- You may not be able to use certain features of our Services
- We may charge fees for paper Communications as permitted by law
- Withdrawal does not affect the legal validity of electronic Communications provided before withdrawal

### Effective Date of Withdrawal

Withdrawal of consent will be effective after we have had a reasonable period to process your request.

## 9. Updating Contact Information

You must keep your email address and other contact information current. To update your information:

- Log in to your account and update your profile
- Email us at support@amerilendloan.com
- Call us at +1 945 212-1609

You agree to notify us immediately of any change in your email address or other contact information.

## 10. Communications Not Delivered

If we send a Communication to your email address and it is returned as undeliverable, we may:

- Attempt to contact you by other means
- Suspend electronic delivery and send paper Communications
- Charge fees for paper Communications as permitted by law

You remain responsible for all obligations under your loan agreement even if you do not receive Communications due to outdated contact information or technical issues.

## 11. System Requirements Changes

We may update the hardware and software requirements from time to time. If changes create a material risk that you will not be able to access Communications, we will notify you and provide you with:

- A statement of the updated requirements
- Your right to withdraw consent without fees
- Information on how to withdraw consent

## 12. Federal Law

This E-Sign Consent is provided pursuant to the Electronic Signatures in Global and National Commerce Act (E-SIGN Act), 15 U.S.C. § 7001 et seq.

## 13. Demonstration and Acknowledgment

Before accepting this E-Sign Consent, you should verify that you can:

1. Access this document
2. Read this document on your screen
3. Print or save this document
4. Open a PDF file

By clicking "I Accept" below, you acknowledge that:

- You have read and understand this E-Sign Consent
- You can access and retain electronic Communications
- You have the required hardware and software
- You consent to conduct business electronically
- Your electronic signature is legally binding
- You have been given the opportunity to request paper copies
- You understand your right to withdraw consent

## 14. Questions

If you have questions about this E-Sign Consent or need assistance accessing electronic Communications, please contact us:

**AmeriLend**  
Email: support@amerilendloan.com  
Phone: +1 945 212-1609  
Support Hours: Mon–Fri 8am–8pm CT; Sat–Sun 9am–5pm CT  
Address: 12707 High Bluff Drive, Suite 200, San Diego, CA 92130, USA

## 15. Confirmation

After you accept this E-Sign Consent, we will send you a confirmation email with a copy of this document for your records.

---

## ACCEPTANCE

By clicking "I Accept" or by electronically signing any document, you confirm that:

1. You have read this E-Sign Consent
2. You understand and agree to its terms
3. You meet the hardware and software requirements
4. You can access, view, and retain electronic Communications
5. You consent to receive all Communications electronically
6. You consent to use electronic signatures

**Date of Acceptance:** [TIMESTAMP]  
**IP Address:** [IP_ADDRESS]  
**User Agent:** [BROWSER_INFO]

---

**IMPORTANT:** Print or save a copy of this E-Sign Consent for your records.
`,Gc=`# Truth in Lending Disclosure\r
\r
**Effective Date:** January 1, 2026  \r
**Version:** 1.0\r
\r
---\r
\r
## FEDERAL TRUTH IN LENDING DISCLOSURE STATEMENT\r
\r
This disclosure is provided to you in accordance with the Truth in Lending Act (TILA) and Regulation Z (12 CFR Part 1026) to inform you of the key terms and costs of your loan.\r
\r
---\r
\r
## LOAN TERMS SUMMARY\r
\r
| Term                     | Details                                            |\r
| ------------------------ | -------------------------------------------------- |\r
| **Lender**               | AmeriLend                                          |\r
| **Address**              | 12707 High Bluff Drive, Suite 200, San Diego, CA 92130 |\r
| **Loan Type**            | Unsecured Personal Installment Loan                |\r
| **Loan Amount Range**    | $500 – $15,000                                     |\r
| **APR Range**            | 5.99% – 35.99%                                     |\r
| **Loan Term Range**      | 6 – 36 months                                      |\r
\r
---\r
\r
## KEY DISCLOSURES\r
\r
### 1. Annual Percentage Rate (APR)\r
\r
The APR is the cost of your credit expressed as a yearly rate. Your APR will be determined based on your creditworthiness, loan amount, and loan term. The APR includes:\r
\r
- Interest charges\r
- Processing fee and other applicable charges (if any)\r
\r
**APR Range:** 5.99% – 35.99%\r
\r
> The APR disclosed to you before loan signing will remain fixed for the life of the loan. AmeriLend does not offer variable-rate consumer loans.\r
\r
### 2. Finance Charge\r
\r
The **Finance Charge** is the dollar amount the credit will cost you over the full term of the loan. It includes:\r
\r
- Total interest paid over the life of the loan\r
- Processing fee and other applicable charges (if any)\r
\r
Your exact Finance Charge will be disclosed in your Loan Agreement prior to signing.\r
\r
### 3. Amount Financed\r
\r
The **Amount Financed** is the amount of credit provided to you or on your behalf. This is the loan principal minus any prepaid finance charges (such as a processing fee deducted at disbursement).\r
\r
### 4. Total of Payments\r
\r
The **Total of Payments** is the total amount you will have paid after making all scheduled payments. It equals:\r
\r
> **Total of Payments = Amount Financed + Finance Charge**\r
\r
---\r
\r
## PAYMENT SCHEDULE\r
\r
- Payments are due **monthly** on the same day each month, as specified in your Loan Agreement.\r
- Your first payment is typically due **30 days** after the loan disbursement date.\r
- All payments are applied in the following order:\r
  1. Accrued interest\r
  2. Outstanding fees (if any)\r
  3. Principal balance\r
\r
---\r
\r
## FEES\r
\r
### Processing Fee\r
\r
AmeriLend charges a processing fee of **3.5%** of the approved loan amount. This fee is:\r
\r
- Clearly disclosed before you sign the loan agreement\r
- Paid before disbursement (card, bank, or eligible crypto methods)\r
\r
### Late Payment Fee\r
\r
If a payment is not received within **15 calendar days** of the due date, a late fee may be assessed:\r
\r
- **$15** or **5% of the past-due amount**, whichever is greater\r
- Maximum late fee will not exceed the limits set by applicable state law\r
\r
### Returned Payment Fee (NSF)\r
\r
If a payment is returned due to insufficient funds:\r
\r
- A fee of up to **$25** may be charged\r
- Subject to applicable state law limitations\r
\r
### Prepayment\r
\r
- **There is NO prepayment penalty.** You may pay off your loan in full or make extra payments at any time without incurring additional charges.\r
- Prepayment will reduce the total finance charge.\r
\r
---\r
\r
## SECURITY INTEREST\r
\r
AmeriLend personal loans are **unsecured**. We do not take a security interest in any of your property as collateral for the loan.\r
\r
---\r
\r
## LATE PAYMENT WARNING\r
\r
**If a payment is late, you will be charged a late fee as described above.** Continued failure to make payments may result in:\r
\r
- Reporting of delinquency to credit bureaus\r
- Collection activity\r
- Legal action to recover the outstanding balance\r
\r
---\r
\r
## RIGHT OF RESCISSION\r
\r
For certain transactions, you may have the right to cancel the loan within **three (3) business days** of signing the loan agreement. If applicable, instructions for exercising this right will be provided at closing.\r
\r
---\r
\r
## CREDIT REPORTING\r
\r
AmeriLend may report your loan payment history to one or more of the major consumer credit reporting agencies (Equifax, Experian, TransUnion). Timely payments may help improve your credit profile, while late payments, missed payments, or other defaults may negatively impact your credit score.\r
\r
---\r
\r
## VARIABLE RATE DISCLOSURE\r
\r
AmeriLend consumer loans carry a **fixed interest rate**. Your rate will not change during the life of the loan. This disclosure does not apply to variable-rate credit.\r
\r
---\r
\r
## ITEMIZATION OF AMOUNT FINANCED\r
\r
Upon approval, you will receive an itemization showing:\r
\r
| Item                          | Amount         |\r
| ----------------------------- | -------------- |\r
| Loan Principal                | $[AMOUNT]      |\r
| Less: Processing Fee          | –$[FEE]        |\r
| **Net Amount Disbursed**      | **$[NET]**     |\r
\r
---\r
\r
## REPRESENTATIVE EXAMPLE\r
\r
For illustration purposes only:\r
\r
| Item                     | Example          |\r
| ------------------------ | ---------------- |\r
| Loan Amount              | $5,000           |\r
| APR                      | 24.99%           |\r
| Loan Term                | 24 months        |\r
| Monthly Payment          | $271.83          |\r
| Total of Payments        | $6,523.92        |\r
| Total Finance Charge     | $1,523.92        |\r
| Processing Fee (3.5%)    | $175.00          |\r
\r
> *Your actual terms may differ based on creditworthiness and other factors.*\r
\r
---\r
\r
## COMPLAINTS AND INQUIRIES\r
\r
If you have questions or concerns about your loan or this disclosure, contact us:\r
\r
- **Phone:** +1 945 212-1609 (Mon–Fri 8am–8pm CT; Sat–Sun 9am–5pm CT)\r
- **Email:** support@amerilendloan.com\r
- **Mail:** AmeriLend, 12707 High Bluff Drive, Suite 200, San Diego, CA 92130\r
\r
You may also file a complaint with:\r
\r
- **Consumer Financial Protection Bureau (CFPB):** [consumerfinance.gov](https://www.consumerfinance.gov)\r
- **Federal Trade Commission (FTC):** [ftc.gov](https://www.ftc.gov)\r
\r
---\r
\r
## ACKNOWLEDGMENT\r
\r
By proceeding with your loan application, you acknowledge that you have received and reviewed this Truth in Lending Disclosure Statement. A copy of this disclosure, along with your final loan terms, will be provided before you sign your Loan Agreement.\r
\r
---\r
\r
*This disclosure is provided pursuant to the Truth in Lending Act (15 U.S.C. § 1601 et seq.) and its implementing regulation, Regulation Z (12 CFR Part 1026). AmeriLend is committed to transparent, fair lending practices.*\r
`,Xc=`# Accessibility Statement\r
\r
**Effective Date:** January 1, 2025  \r
**Last Updated:** January 1, 2025\r
\r
## Our Commitment\r
\r
AmeriLend, LLC ("AmeriLend," "we," "us," or "our") is committed to ensuring digital accessibility for people with disabilities. We continually strive to improve the user experience for everyone and apply the relevant accessibility standards to our website and services.\r
\r
## Standards\r
\r
We aim to conform to the **Web Content Accessibility Guidelines (WCAG) 2.1 Level AA** standards. These guidelines explain how to make web content more accessible for people with disabilities and are widely regarded as the international standard for web accessibility.\r
\r
## Measures We Take\r
\r
AmeriLend takes the following measures to ensure accessibility:\r
\r
- **Responsive Design**: Our website adapts to various screen sizes and devices, supporting assistive technologies such as screen readers, magnifiers, and alternative input devices.\r
- **Keyboard Navigation**: Core functionality is accessible via keyboard, allowing users who cannot use a mouse to navigate the site.\r
- **Semantic HTML**: We use proper heading structures, landmarks, and ARIA labels to help assistive technology interpret our pages.\r
- **Color Contrast**: We maintain sufficient color contrast ratios across text and interactive elements.\r
- **Alt Text**: Meaningful alternative text is provided for images and icons.\r
- **Form Labels**: Form fields include descriptive labels and clear error messages to support assistive technology users.\r
- **Continuous Improvement**: We regularly review and test our website for accessibility and work to address any issues identified.\r
\r
## Known Limitations\r
\r
While we strive for full accessibility compliance, some areas of our website may not yet fully meet WCAG 2.1 Level AA standards. We are actively working to resolve any gaps and welcome feedback from our users.\r
\r
## Feedback & Contact\r
\r
If you experience difficulty accessing any part of our website or have suggestions for improving accessibility, please contact us:\r
\r
- **Email:** [support@amerilendloan.com](mailto:support@amerilendloan.com)  \r
- **Phone:** (945) 212-1609  \r
- **Support Hours:** Mon–Fri 8am–8pm CT; Sat–Sun 9am–5pm CT  \r
- **Mail:** AmeriLend, LLC — 12707 High Bluff Drive, Suite 200, San Diego, CA 92130\r
\r
We aim to respond to accessibility feedback within 2 business days.\r
\r
## Enforcement\r
\r
If you are not satisfied with our response to your accessibility concern, you may file a complaint with the U.S. Department of Justice Civil Rights Division at [www.ada.gov](https://www.ada.gov).\r
\r
---\r
\r
*AmeriLend, LLC — NMLS# 2487301. Equal Housing Lender.*\r
`,Qc={"loan-agreement":{title:"Loan Agreement",description:"Official loan agreement document with terms and conditions",content:Wc},"privacy-policy":{title:"Privacy Policy",description:"Our commitment to protecting your personal information",content:Yc},"terms-of-service":{title:"Terms of Service",description:"Terms and conditions for using AmeriLend services",content:Vc},"esign-consent":{title:"E-Signature Consent",description:"Your consent to use electronic signatures for legal documents",content:$c},"truth-in-lending":{title:"Truth in Lending Disclosure",description:"Federal Truth in Lending Act disclosure with loan terms, APR, and fee information",content:Gc},accessibility:{title:"Accessibility Statement",description:"Our commitment to digital accessibility and WCAG 2.1 Level AA compliance",content:Xc}};function of(){const[e,t]=ct("/legal/:document"),[n,r]=ct("/public/legal/:document"),a=(t||r)?.document||"",o=Qc[a];if(!o)return L.jsx("div",{"data-loc":"client\\src\\pages\\LegalDocuments.tsx:67",className:"min-h-screen bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] flex items-center justify-center",children:L.jsx(ft,{"data-loc":"client\\src\\pages\\LegalDocuments.tsx:68",className:"p-8 text-center",children:L.jsx("p",{"data-loc":"client\\src\\pages\\LegalDocuments.tsx:69",className:"text-gray-600",children:"Document not found"})})});const l=()=>{const s=document.createElement("a");s.setAttribute("href",`data:text/plain;charset=utf-8,${encodeURIComponent(o.content)}`),s.setAttribute("download",`${a}.md`),s.style.display="none",document.body.appendChild(s),s.click(),document.body.removeChild(s)},u=()=>{window.print()};return L.jsxs("div",{"data-loc":"client\\src\\pages\\LegalDocuments.tsx:93",className:"min-h-screen bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef]",children:[L.jsx(gi,{"data-loc":"client\\src\\pages\\LegalDocuments.tsx:94",title:`${o.title} | Legal`,description:o.description,path:`/legal/${a}`}),L.jsx("div",{"data-loc":"client\\src\\pages\\LegalDocuments.tsx:100",className:"bg-gradient-to-r from-[#0033A0] to-[#002070] text-white sticky top-0 z-40 shadow-lg",children:L.jsxs("div",{"data-loc":"client\\src\\pages\\LegalDocuments.tsx:101",className:"max-w-5xl mx-auto px-4 py-6 sm:px-6 lg:px-8",children:[L.jsxs("div",{"data-loc":"client\\src\\pages\\LegalDocuments.tsx:102",className:"flex items-center justify-between mb-4",children:[L.jsxs("button",{"data-loc":"client\\src\\pages\\LegalDocuments.tsx:103",onClick:()=>window.history.back(),className:"flex items-center gap-2 hover:opacity-80 transition-opacity",children:[L.jsx(yi,{"data-loc":"client\\src\\pages\\LegalDocuments.tsx:107",className:"w-5 h-5"}),L.jsx("span",{"data-loc":"client\\src\\pages\\LegalDocuments.tsx:108",children:"Back"})]}),L.jsxs("div",{"data-loc":"client\\src\\pages\\LegalDocuments.tsx:110",className:"flex items-center gap-3",children:[L.jsxs(pt,{"data-loc":"client\\src\\pages\\LegalDocuments.tsx:111",onClick:l,variant:"outline",className:"bg-white/20 border-white/30 text-white hover:bg-white/30 gap-2",children:[L.jsx(bi,{"data-loc":"client\\src\\pages\\LegalDocuments.tsx:116",className:"w-4 h-4"}),L.jsx("span",{"data-loc":"client\\src\\pages\\LegalDocuments.tsx:117",className:"hidden sm:inline",children:"Download"})]}),L.jsxs(pt,{"data-loc":"client\\src\\pages\\LegalDocuments.tsx:119",onClick:u,variant:"outline",className:"bg-white/20 border-white/30 text-white hover:bg-white/30 gap-2",children:["🖨️",L.jsx("span",{"data-loc":"client\\src\\pages\\LegalDocuments.tsx:125",className:"hidden sm:inline",children:"Print"})]})]})]}),L.jsxs("div",{"data-loc":"client\\src\\pages\\LegalDocuments.tsx:129",children:[L.jsx("h1",{"data-loc":"client\\src\\pages\\LegalDocuments.tsx:130",className:"text-3xl sm:text-4xl font-bold mb-2",children:o.title}),L.jsx("p",{"data-loc":"client\\src\\pages\\LegalDocuments.tsx:133",className:"text-blue-100",children:o.description})]})]})}),L.jsxs("div",{"data-loc":"client\\src\\pages\\LegalDocuments.tsx:139",className:"max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8",children:[L.jsx(ft,{"data-loc":"client\\src\\pages\\LegalDocuments.tsx:140",className:"bg-white shadow-2xl overflow-hidden border-0",children:L.jsx("div",{"data-loc":"client\\src\\pages\\LegalDocuments.tsx:141",className:"p-8 sm:p-12 bg-gradient-to-b from-white via-white to-blue-50",children:L.jsx("div",{"data-loc":"client\\src\\pages\\LegalDocuments.tsx:142",className:"markdown-content space-y-6 text-gray-800 prose-headings:font-bold prose-headings:mb-4",children:L.jsx(Ps,{"data-loc":"client\\src\\pages\\LegalDocuments.tsx:143",remarkPlugins:[qc],components:{h1:({node:s,children:f,...c})=>L.jsx("h1",{"data-loc":"client\\src\\pages\\LegalDocuments.tsx:147",className:"text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#0033A0] to-[#FFA500] bg-clip-text text-transparent mb-6 border-b-4 border-gradient-to-r from-[#0033A0] to-[#FFA500] pb-4 mt-8",...c,children:f}),h2:({node:s,children:f,...c})=>L.jsx("h2",{"data-loc":"client\\src\\pages\\LegalDocuments.tsx:155",className:"text-3xl md:text-4xl font-bold text-[#0033A0] mt-10 mb-4 pl-4 border-l-4 border-[#FFA500] bg-gradient-to-r from-blue-50 to-transparent py-2",...c,children:f}),h3:({node:s,children:f,...c})=>L.jsx("h3",{"data-loc":"client\\src\\pages\\LegalDocuments.tsx:163",className:"text-2xl md:text-3xl font-bold text-[#002070] mt-8 mb-3 pl-4 border-l-4 border-[#003399]",...c,children:f}),h4:({node:s,children:f,...c})=>L.jsx("h4",{"data-loc":"client\\src\\pages\\LegalDocuments.tsx:171",className:"text-xl md:text-2xl font-semibold text-[#003399] mt-6 mb-2",...c,children:f}),h5:({node:s,children:f,...c})=>L.jsx("h5",{"data-loc":"client\\src\\pages\\LegalDocuments.tsx:179",className:"text-lg font-semibold text-[#005acc] mt-4 mb-2",...c,children:f}),h6:({node:s,children:f,...c})=>L.jsx("h6",{"data-loc":"client\\src\\pages\\LegalDocuments.tsx:187",className:"text-base font-semibold text-[#0066ff] mt-4 mb-2",...c,children:f}),p:({node:s,children:f,...c})=>L.jsx("p",{"data-loc":"client\\src\\pages\\LegalDocuments.tsx:195",className:"text-gray-700 leading-relaxed mb-4 text-base md:text-lg",...c,children:f}),strong:({node:s,children:f,...c})=>L.jsx("strong",{"data-loc":"client\\src\\pages\\LegalDocuments.tsx:203",className:"font-bold text-[#0033A0] bg-gradient-to-r from-blue-100 to-orange-100 px-2 py-1 rounded shadow-sm",...c,children:f}),em:({node:s,children:f,...c})=>L.jsx("em",{"data-loc":"client\\src\\pages\\LegalDocuments.tsx:211",className:"italic text-[#003399] font-semibold",...c,children:f}),ul:({node:s,children:f,...c})=>L.jsx("ul",{"data-loc":"client\\src\\pages\\LegalDocuments.tsx:216",className:"list-disc list-outside space-y-3 my-6 ml-8 text-gray-700 bg-gradient-to-b from-blue-50/50 to-transparent p-4 rounded-lg",...c,children:f}),ol:({node:s,children:f,...c})=>L.jsx("ol",{"data-loc":"client\\src\\pages\\LegalDocuments.tsx:224",className:"list-decimal list-outside space-y-3 my-6 ml-8 text-gray-700 bg-gradient-to-b from-orange-50/50 to-transparent p-4 rounded-lg",...c,children:f}),li:({node:s,children:f,...c})=>L.jsx("li",{"data-loc":"client\\src\\pages\\LegalDocuments.tsx:232",className:"text-gray-700 text-base md:text-lg leading-relaxed",...c,children:f}),blockquote:({node:s,children:f,...c})=>L.jsx("blockquote",{"data-loc":"client\\src\\pages\\LegalDocuments.tsx:237",className:"border-l-4 border-[#FFA500] bg-gradient-to-r from-blue-50 via-orange-50 to-blue-50 italic pl-6 py-4 my-6 text-gray-800 rounded-r-lg shadow-md font-semibold",...c,children:f}),table:({node:s,children:f,...c})=>L.jsx("div",{"data-loc":"client\\src\\pages\\LegalDocuments.tsx:245",className:"overflow-x-auto my-6 rounded-lg shadow-lg border-2 border-[#0033A0]",children:L.jsx("table",{"data-loc":"client\\src\\pages\\LegalDocuments.tsx:246",className:"w-full border-collapse",...c,children:f})}),thead:({node:s,children:f,...c})=>L.jsx("thead",{"data-loc":"client\\src\\pages\\LegalDocuments.tsx:255",className:"bg-gradient-to-r from-[#0033A0] via-[#002070] to-[#003399] text-white font-bold",...c,children:f}),tbody:({node:s,children:f,...c})=>L.jsx("tbody",{"data-loc":"client\\src\\pages\\LegalDocuments.tsx:263",className:"bg-white",...c,children:f}),tr:({node:s,children:f,...c})=>L.jsx("tr",{"data-loc":"client\\src\\pages\\LegalDocuments.tsx:268",className:"border-b-2 border-blue-200 hover:bg-gradient-to-r hover:from-blue-50 hover:to-orange-50 transition-all duration-200",...c,children:f}),th:({node:s,children:f,...c})=>L.jsx("th",{"data-loc":"client\\src\\pages\\LegalDocuments.tsx:273",className:"border-b-2 border-white px-4 py-4 text-left font-bold text-white",...c,children:f}),td:({node:s,children:f,...c})=>L.jsx("td",{"data-loc":"client\\src\\pages\\LegalDocuments.tsx:281",className:"border-r border-blue-200 px-4 py-3 text-gray-700",...c,children:f}),code:({node:s,inline:f,children:c,...h})=>f?L.jsx("code",{"data-loc":"client\\src\\pages\\LegalDocuments.tsx:290",className:"bg-gradient-to-r from-orange-100 to-blue-100 text-[#0033A0] px-2 py-1 rounded font-mono text-sm font-semibold shadow-sm",...h,children:c}):L.jsx("pre",{"data-loc":"client\\src\\pages\\LegalDocuments.tsx:297",className:"bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-green-400 px-4 py-4 rounded-lg font-mono text-sm block my-6 overflow-x-auto shadow-xl border-l-4 border-[#FFA500]",children:L.jsx("code",{"data-loc":"client\\src\\pages\\LegalDocuments.tsx:298",...h,children:c})}),a:({node:s,href:f,children:c,...h})=>L.jsx("a",{"data-loc":"client\\src\\pages\\LegalDocuments.tsx:304",href:f,className:"text-[#0033A0] font-semibold underline hover:text-[#FFA500] hover:no-underline transition-all duration-200 hover:shadow-sm hover:bg-blue-50 px-1 rounded",target:"_blank",rel:"noopener noreferrer",...h,children:c}),hr:({node:s,...f})=>L.jsx("hr",{"data-loc":"client\\src\\pages\\LegalDocuments.tsx:315",className:"border-0 h-1 bg-gradient-to-r from-[#0033A0] via-[#FFA500] to-[#0033A0] my-8 rounded shadow-md",...f})},children:o.content})})})}),L.jsxs("div",{"data-loc":"client\\src\\pages\\LegalDocuments.tsx:329",className:"mt-12 text-center bg-gradient-to-r from-[#0033A0]/10 to-[#FFA500]/10 p-6 rounded-lg",children:[L.jsxs("p",{"data-loc":"client\\src\\pages\\LegalDocuments.tsx:330",className:"text-sm text-gray-600 font-semibold",children:["© ",new Date().getFullYear()," AmeriLend. All rights reserved. This document is confidential and for authorized use only."]}),L.jsxs("p",{"data-loc":"client\\src\\pages\\LegalDocuments.tsx:334",className:"text-xs mt-2 text-gray-500",children:["Last updated: ",new Date().toLocaleDateString()]})]})]}),L.jsx("style",{"data-loc":"client\\src\\pages\\LegalDocuments.tsx:341",children:`
        @media print {
          body {
            background: white;
          }
          .no-print {
            display: none;
          }
        }
      `})]})}export{of as default};
