import{s as k,g as R,t as E,q as I,a as _,b as F,_ as l,K as D,z,G as y,H as G,E as C,l as P,M as W,e as B}from"./mermaid.core-B2kIIxnd.js";import{p as H}from"./chunk-4BX2VUAB-Cce-XQQV.js";import{p as V}from"./wardley-RL74JXVD-DAdStOns.js";import"./index-BTXFkly1.js";import"./query-B3uqSMV7.js";import"./ui-D1Vd8L_q.js";import"./charts-DhLDq9Cc.js";import"./router-BGWa7abV.js";import"./purify.es-OpeaODd9.js";import"./mermaid-VLURNSYL-7jRoCXtu.js";import"./badge-Cad-Z06W.js";import"./label-BCtcUYTC.js";import"./textarea-Cw3JzdWv.js";import"./select-BDHvxp1f.js";import"./index-BJJDSuvf.js";import"./check-B02Tdi7L.js";import"./circle-x-CCl9C3ux.js";import"./circle-check-big-1Z6oSuNC.js";import"./calendar-DpIlZszH.js";import"./eye-BxzZkU4f.js";import"./refresh-cw-Da7wGcf9.js";import"./copy-lOOSV6ll.js";import"./save-B0ptSw0U.js";import"./download-dOui3NT_.js";import"./log-out-jhuD2849.js";import"./credit-card-C3wT5A89.js";import"./trending-up-BBBc4P2Q.js";import"./chart-column-BFlsbjnp.js";import"./bell-DnG1Aq90.js";import"./upload-CaXpezRs.js";import"./message-square-CUpIZQz-.js";import"./banknote-B-BCBTHm.js";import"./switch-B7f3QpNQ.js";import"./plus-9yXeMSTI.js";import"./trash-2-Cxi1oOUN.js";import"./external-link-BIFy1ibl.js";import"./ban-CJ3wsccn.js";import"./bitcoin-DhXXWtnB.js";import"./tabs-Cv3TZ22j.js";import"./gift-xIGsolpS.js";import"./user-plus-DN_Y8NEj.js";import"./target-B6psS-r-.js";import"./AdminJobApplications-BsEmE3hX.js";import"./briefcase-BzVCqpYg.js";import"./AdminSystemHealth-Dv0yGADA.js";import"./arrow-left-Ct0tPnLf.js";import"./database-CdmcX8E8.js";import"./shield-check-CBV2w9qw.js";import"./settings-CfVNmCSD.js";import"./file-check-CF1r_frQ.js";import"./min-CEiRJz7H.js";import"./_baseUniq-DR3AlNn2.js";var x={showLegend:!0,ticks:5,max:null,min:0,graticule:"circle"},w={axes:[],curves:[],options:x},g=structuredClone(w),j=G.radar,q=l(()=>y({...j,...C().radar}),"getConfig"),b=l(()=>g.axes,"getAxes"),K=l(()=>g.curves,"getCurves"),N=l(()=>g.options,"getOptions"),U=l(r=>{g.axes=r.map(t=>({name:t.name,label:t.label??t.name}))},"setAxes"),X=l(r=>{g.curves=r.map(t=>({name:t.name,label:t.label??t.name,entries:Y(t.entries)}))},"setCurves"),Y=l(r=>{if(r[0].axis==null)return r.map(e=>e.value);const t=b();if(t.length===0)throw new Error("Axes must be populated before curves for reference entries");return t.map(e=>{const a=r.find(o=>o.axis?.$refText===e.name);if(a===void 0)throw new Error("Missing entry for axis "+e.label);return a.value})},"computeCurveEntries"),Z=l(r=>{const t=r.reduce((e,a)=>(e[a.name]=a,e),{});g.options={showLegend:t.showLegend?.value??x.showLegend,ticks:t.ticks?.value??x.ticks,max:t.max?.value??x.max,min:t.min?.value??x.min,graticule:t.graticule?.value??x.graticule}},"setOptions"),J=l(()=>{z(),g=structuredClone(w)},"clear"),$={getAxes:b,getCurves:K,getOptions:N,setAxes:U,setCurves:X,setOptions:Z,getConfig:q,clear:J,setAccTitle:F,getAccTitle:_,setDiagramTitle:I,getDiagramTitle:E,getAccDescription:R,setAccDescription:k},Q=l(r=>{H(r,$);const{axes:t,curves:e,options:a}=r;$.setAxes(t),$.setCurves(e),$.setOptions(a)},"populate"),tt={parse:l(async r=>{const t=await V("radar",r);P.debug(t),Q(t)},"parse")},et=l((r,t,e,a)=>{const o=a.db,s=o.getAxes(),n=o.getCurves(),i=o.getOptions(),c=o.getConfig(),p=o.getDiagramTitle(),d=D(t),m=rt(d,c),u=i.max??Math.max(...n.map(f=>Math.max(...f.entries))),h=i.min,v=Math.min(c.width,c.height)/2;at(m,s,v,i.ticks,i.graticule),ot(m,s,v,c),M(m,s,n,h,u,i.graticule,c),T(m,n,i.showLegend,c),m.append("text").attr("class","radarTitle").text(p).attr("x",0).attr("y",-c.height/2-c.marginTop)},"draw"),rt=l((r,t)=>{const e=t.width+t.marginLeft+t.marginRight,a=t.height+t.marginTop+t.marginBottom,o={x:t.marginLeft+t.width/2,y:t.marginTop+t.height/2};return B(r,a,e,t.useMaxWidth??!0),r.attr("viewBox",`0 0 ${e} ${a}`),r.append("g").attr("transform",`translate(${o.x}, ${o.y})`)},"drawFrame"),at=l((r,t,e,a,o)=>{if(o==="circle")for(let s=0;s<a;s++){const n=e*(s+1)/a;r.append("circle").attr("r",n).attr("class","radarGraticule")}else if(o==="polygon"){const s=t.length;for(let n=0;n<a;n++){const i=e*(n+1)/a,c=t.map((p,d)=>{const m=2*d*Math.PI/s-Math.PI/2,u=i*Math.cos(m),h=i*Math.sin(m);return`${u},${h}`}).join(" ");r.append("polygon").attr("points",c).attr("class","radarGraticule")}}},"drawGraticule"),ot=l((r,t,e,a)=>{const o=t.length;for(let s=0;s<o;s++){const n=t[s].label,i=2*s*Math.PI/o-Math.PI/2;r.append("line").attr("x1",0).attr("y1",0).attr("x2",e*a.axisScaleFactor*Math.cos(i)).attr("y2",e*a.axisScaleFactor*Math.sin(i)).attr("class","radarAxisLine"),r.append("text").text(n).attr("x",e*a.axisLabelFactor*Math.cos(i)).attr("y",e*a.axisLabelFactor*Math.sin(i)).attr("class","radarAxisLabel")}},"drawAxes");function M(r,t,e,a,o,s,n){const i=t.length,c=Math.min(n.width,n.height)/2;e.forEach((p,d)=>{if(p.entries.length!==i)return;const m=p.entries.map((u,h)=>{const v=2*Math.PI*h/i-Math.PI/2,f=A(u,a,o,c),S=f*Math.cos(v),O=f*Math.sin(v);return{x:S,y:O}});s==="circle"?r.append("path").attr("d",L(m,n.curveTension)).attr("class",`radarCurve-${d}`):s==="polygon"&&r.append("polygon").attr("points",m.map(u=>`${u.x},${u.y}`).join(" ")).attr("class",`radarCurve-${d}`)})}l(M,"drawCurves");function A(r,t,e,a){const o=Math.min(Math.max(r,t),e);return a*(o-t)/(e-t)}l(A,"relativeRadius");function L(r,t){const e=r.length;let a=`M${r[0].x},${r[0].y}`;for(let o=0;o<e;o++){const s=r[(o-1+e)%e],n=r[o],i=r[(o+1)%e],c=r[(o+2)%e],p={x:n.x+(i.x-s.x)*t,y:n.y+(i.y-s.y)*t},d={x:i.x-(c.x-n.x)*t,y:i.y-(c.y-n.y)*t};a+=` C${p.x},${p.y} ${d.x},${d.y} ${i.x},${i.y}`}return`${a} Z`}l(L,"closedRoundCurve");function T(r,t,e,a){if(!e)return;const o=(a.width/2+a.marginRight)*3/4,s=-(a.height/2+a.marginTop)*3/4,n=20;t.forEach((i,c)=>{const p=r.append("g").attr("transform",`translate(${o}, ${s+c*n})`);p.append("rect").attr("width",12).attr("height",12).attr("class",`radarLegendBox-${c}`),p.append("text").attr("x",16).attr("y",0).attr("class","radarLegendText").text(i.label)})}l(T,"drawLegend");var it={draw:et},st=l((r,t)=>{let e="";for(let a=0;a<r.THEME_COLOR_LIMIT;a++){const o=r[`cScale${a}`];e+=`
		.radarCurve-${a} {
			color: ${o};
			fill: ${o};
			fill-opacity: ${t.curveOpacity};
			stroke: ${o};
			stroke-width: ${t.curveStrokeWidth};
		}
		.radarLegendBox-${a} {
			fill: ${o};
			fill-opacity: ${t.curveOpacity};
			stroke: ${o};
		}
		`}return e},"genIndexStyles"),nt=l(r=>{const t=W(),e=C(),a=y(t,e.themeVariables),o=y(a.radar,r);return{themeVariables:a,radarOptions:o}},"buildRadarStyleOptions"),lt=l(({radar:r}={})=>{const{themeVariables:t,radarOptions:e}=nt(r);return`
	.radarTitle {
		font-size: ${t.fontSize};
		color: ${t.titleColor};
		dominant-baseline: hanging;
		text-anchor: middle;
	}
	.radarAxisLine {
		stroke: ${e.axisColor};
		stroke-width: ${e.axisStrokeWidth};
	}
	.radarAxisLabel {
		dominant-baseline: middle;
		text-anchor: middle;
		font-size: ${e.axisLabelFontSize}px;
		color: ${e.axisColor};
	}
	.radarGraticule {
		fill: ${e.graticuleColor};
		fill-opacity: ${e.graticuleOpacity};
		stroke: ${e.graticuleColor};
		stroke-width: ${e.graticuleStrokeWidth};
	}
	.radarLegendText {
		text-anchor: start;
		font-size: ${e.legendFontSize}px;
		dominant-baseline: hanging;
	}
	${st(t,e)}
	`},"styles"),ne={parser:tt,db:$,renderer:it,styles:lt};export{ne as diagram};
