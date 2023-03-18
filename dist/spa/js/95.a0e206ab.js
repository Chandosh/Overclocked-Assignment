"use strict";(globalThis["webpackChunkAssignmentApp"]=globalThis["webpackChunkAssignmentApp"]||[]).push([[95],{8095:(a,e,n)=>{n.r(e),n.d(e,{default:()=>z});var s=n(9835);const t={class:"flex column q-pa-md"},r=(0,s._)("div",{class:"heading"},"Loan Application Offers",-1),l={key:0,class:"flex row-wrap"};function o(a,e,n,o,c,f){const i=(0,s.up)("offer"),p=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(p,{class:"full-height full-width"},{default:(0,s.w5)((()=>[(0,s._)("div",t,[r,a.loanOffers&&a.loanOffers.length>0?((0,s.wg)(),(0,s.iD)("div",l,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.loanOffers,((a,e)=>((0,s.wg)(),(0,s.iD)("div",{key:e,class:"q-mt-md q-mr-md"},[(0,s.Wm)(i,{loanOffer:a},null,8,["loanOffer"])])))),128))])):(0,s.kq)("",!0)])])),_:1})}var c=n(3100),f=n(6970);const i=a=>((0,s.dD)("data-v-96d66ccc"),a=a(),(0,s.Cn)(),a),p=["src"],d={class:"flex row content"},u=i((()=>(0,s._)("span",{class:"title"},"Bank Name",-1))),m={class:"flex row content"},w=i((()=>(0,s._)("span",{class:"title"},"Interest Rate",-1))),g={class:"flex row content"},O=i((()=>(0,s._)("span",{class:"title"},"Tenure",-1)));function _(a,e,n,t,r,l){const o=(0,s.up)("q-card-section"),c=(0,s.up)("q-separator"),i=(0,s.up)("q-card");return(0,s.wg)(),(0,s.j4)(i,{dark:"",bordered:"",class:"bg-secondary offer-card"},{default:(0,s.w5)((()=>[(0,s.Wm)(o,null,{default:(0,s.w5)((()=>[(0,s._)("img",{alt:"logo",src:a.loanOffer.bank_logo,class:"bank-logo"},null,8,p)])),_:1}),(0,s.Wm)(c,{dark:"",inset:""}),(0,s.Wm)(o,null,{default:(0,s.w5)((()=>[(0,s._)("div",d,[u,(0,s._)("span",null,": "+(0,f.zw)(a.loanOffer.bank),1)]),(0,s._)("div",m,[w,(0,s._)("span",null,": "+(0,f.zw)(a.loanOffer.interest_rate)+"%",1)]),(0,s._)("div",g,[O,(0,s._)("span",null," : "+(0,f.zw)(a.loanOffer.tenure)+" "+(0,f.zw)(a.loanOffer.tenure>1?"years":"year"),1)])])),_:1})])),_:1})}const h=(0,s.aZ)({name:"Offer",props:{loanOffer:{type:Object}}});var v=n(1639),k=n(4458),b=n(3190),A=n(926),q=n(9984),y=n.n(q);const Z=(0,v.Z)(h,[["render",_],["__scopeId","data-v-96d66ccc"]]),x=Z;y()(h,"components",{QCard:k.Z,QCardSection:b.Z,QSeparator:A.Z});const C={name:"Offers",data(){return{applicationId:this.$route.params.applicationId}},components:{Offer:x},computed:{...(0,c.Se)(["loanOffers"])},async created(){await this.getUserLoanApplicationOffers(this.applicationId)},methods:{...(0,c.nv)(["getUserLoanApplicationOffers","resetUserLoanApplicationOffers"])},async unmounted(){await this.resetUserLoanApplicationOffers()}};var I=n(9885);const L=(0,v.Z)(C,[["render",o]]),z=L;y()(C,"components",{QPage:I.Z})}}]);