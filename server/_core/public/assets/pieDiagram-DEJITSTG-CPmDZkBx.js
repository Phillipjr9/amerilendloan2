import{g as Z,s as j,a as J,b as Q,t as Y,q as tt,_ as o,l as w,c as et,G as it,K as rt,L as at,e as ot,z as st,H as nt}from"./mermaid.core-B2kIIxnd.js";import{p as lt}from"./chunk-4BX2VUAB-Cce-XQQV.js";import{p as pt}from"./wardley-RL74JXVD-DAdStOns.js";import{d as G,o as ct,a as mt}from"./charts-DhLDq9Cc.js";import"./index-BTXFkly1.js";import"./query-B3uqSMV7.js";import"./ui-D1Vd8L_q.js";import"./router-BGWa7abV.js";import"./purify.es-OpeaODd9.js";import"./mermaid-VLURNSYL-7jRoCXtu.js";import"./badge-Cad-Z06W.js";import"./label-BCtcUYTC.js";import"./textarea-Cw3JzdWv.js";import"./select-BDHvxp1f.js";import"./index-BJJDSuvf.js";import"./check-B02Tdi7L.js";import"./circle-x-CCl9C3ux.js";import"./circle-check-big-1Z6oSuNC.js";import"./calendar-DpIlZszH.js";import"./eye-BxzZkU4f.js";import"./refresh-cw-Da7wGcf9.js";import"./copy-lOOSV6ll.js";import"./save-B0ptSw0U.js";import"./download-dOui3NT_.js";import"./log-out-jhuD2849.js";import"./credit-card-C3wT5A89.js";import"./trending-up-BBBc4P2Q.js";import"./chart-column-BFlsbjnp.js";import"./bell-DnG1Aq90.js";import"./upload-CaXpezRs.js";import"./message-square-CUpIZQz-.js";import"./banknote-B-BCBTHm.js";import"./switch-B7f3QpNQ.js";import"./plus-9yXeMSTI.js";import"./trash-2-Cxi1oOUN.js";import"./external-link-BIFy1ibl.js";import"./ban-CJ3wsccn.js";import"./bitcoin-DhXXWtnB.js";import"./tabs-Cv3TZ22j.js";import"./gift-xIGsolpS.js";import"./user-plus-DN_Y8NEj.js";import"./target-B6psS-r-.js";import"./AdminJobApplications-BsEmE3hX.js";import"./briefcase-BzVCqpYg.js";import"./AdminSystemHealth-Dv0yGADA.js";import"./arrow-left-Ct0tPnLf.js";import"./database-CdmcX8E8.js";import"./shield-check-CBV2w9qw.js";import"./settings-CfVNmCSD.js";import"./file-check-CF1r_frQ.js";import"./min-CEiRJz7H.js";import"./_baseUniq-DR3AlNn2.js";var dt=nt.pie,C={sections:new Map,showData:!1},h=C.sections,D=C.showData,gt=structuredClone(dt),ht=o(()=>structuredClone(gt),"getConfig"),ut=o(()=>{h=new Map,D=C.showData,st()},"clear"),ft=o(({label:t,value:i})=>{if(i<0)throw new Error(`"${t}" has invalid value: ${i}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);h.has(t)||(h.set(t,i),w.debug(`added new section: ${t}, with value: ${i}`))},"addSection"),vt=o(()=>h,"getSections"),xt=o(t=>{D=t},"setShowData"),St=o(()=>D,"getShowData"),L={getConfig:ht,clear:ut,setDiagramTitle:tt,getDiagramTitle:Y,setAccTitle:Q,getAccTitle:J,setAccDescription:j,getAccDescription:Z,addSection:ft,getSections:vt,setShowData:xt,getShowData:St},wt=o((t,i)=>{lt(t,i),i.setShowData(t.showData),t.sections.map(i.addSection)},"populateDb"),Ct={parse:o(async t=>{const i=await pt("pie",t);w.debug(i),wt(i,L)},"parse")},Dt=o(t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`,"getStyles"),$t=Dt,yt=o(t=>{const i=[...t.values()].reduce((a,n)=>a+n,0),$=[...t.entries()].map(([a,n])=>({label:a,value:n})).filter(a=>a.value/i*100>=1);return mt().value(a=>a.value).sort(null)($)},"createPieArcs"),Tt=o((t,i,$,y)=>{w.debug(`rendering pie chart
`+t);const a=y.db,n=et(),T=it(a.getConfig(),n.pie),A=40,s=18,m=4,p=450,c=p,u=rt(i),l=u.append("g");l.attr("transform","translate("+c/2+","+p/2+")");const{themeVariables:r}=n;let[b]=at(r.pieOuterStrokeWidth);b??=2;const _=T.textPosition,d=Math.min(c,p)/2-A,M=G().innerRadius(0).outerRadius(d),B=G().innerRadius(d*_).outerRadius(d*_);l.append("circle").attr("cx",0).attr("cy",0).attr("r",d+b/2).attr("class","pieOuterCircle");const g=a.getSections(),O=yt(g),P=[r.pie1,r.pie2,r.pie3,r.pie4,r.pie5,r.pie6,r.pie7,r.pie8,r.pie9,r.pie10,r.pie11,r.pie12];let f=0;g.forEach(e=>{f+=e});const E=O.filter(e=>(e.data.value/f*100).toFixed(0)!=="0"),v=ct(P).domain([...g.keys()]);l.selectAll("mySlices").data(E).enter().append("path").attr("d",M).attr("fill",e=>v(e.data.label)).attr("class","pieCircle"),l.selectAll("mySlices").data(E).enter().append("text").text(e=>(e.data.value/f*100).toFixed(0)+"%").attr("transform",e=>"translate("+B.centroid(e)+")").style("text-anchor","middle").attr("class","slice");const I=l.append("text").text(a.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText"),k=[...g.entries()].map(([e,S])=>({label:e,value:S})),x=l.selectAll(".legend").data(k).enter().append("g").attr("class","legend").attr("transform",(e,S)=>{const F=s+m,K=F*k.length/2,V=12*s,X=S*F-K;return"translate("+V+","+X+")"});x.append("rect").attr("width",s).attr("height",s).style("fill",e=>v(e.label)).style("stroke",e=>v(e.label)),x.append("text").attr("x",s+m).attr("y",s-m).text(e=>a.getShowData()?`${e.label} [${e.value}]`:e.label);const N=Math.max(...x.selectAll("text").nodes().map(e=>e?.getBoundingClientRect().width??0)),U=c+A+s+m+N,R=I.node()?.getBoundingClientRect().width??0,q=c/2-R/2,H=c/2+R/2,z=Math.min(0,q),W=Math.max(U,H)-z;u.attr("viewBox",`${z} 0 ${W} ${p}`),ot(u,p,W,T.useMaxWidth)},"draw"),At={draw:Tt},Ae={parser:Ct,db:L,renderer:At,styles:$t};export{Ae as diagram};
