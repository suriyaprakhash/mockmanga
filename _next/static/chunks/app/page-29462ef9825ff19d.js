(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5822:function(e,t,a){Promise.resolve().then(a.bind(a,336))},336:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return k}});var s=a(7437),n=a(2265);let r=(0,n.createContext)(["",()=>null]),l=e=>{let{children:t}=e,[a,l]=(0,n.useState)("");return(0,s.jsx)(r.Provider,{value:[a,l],children:t})};var i=function(){return(0,s.jsx)("section",{className:"flex flex-col h-[150px] sm:h-[12vh] ",children:(0,s.jsx)("footer",{className:"bg-white rounded-lg shadow m-4 dark:bg-white-800",children:(0,s.jsxs)("div",{className:"w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between",children:[(0,s.jsxs)("span",{className:"text-sm text-gray-500 sm:text-center dark:text-gray-400",children:["\xa92023  ",(0,s.jsx)("a",{href:"https://suriyaprakhash.com/",target:"_blank",className:"hover:underline",children:"Suriya Prakhash Deenadayalan"}),". All Rights Reserved."]}),(0,s.jsx)("ul",{className:"flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0",children:(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"https://www.suriyaprakhash.com/#contact",target:"_blank",className:"hover:underline hover:text-orange-400",children:"Report bug"})})})]})})})},o=function(e){let{placeholder:t,type:a,inputParentCallback:n,index:r,initialValue:l}=e;return(0,s.jsx)("div",{className:"text-dropdown-text",children:(0,s.jsx)("input",{className:"bg-dropdown-bg p-3 w-full rounded-lg focus:outline-none sm:hover:scale-110 transition-all",placeholder:t,value:0===l?"":l,type:a,onChange:function(e){n(e.target.value,r)}})})},d=a(9251);class c{}var m=a(2151),u=a.n(m);class h extends c{static anytimeJustDate(){return u()(d.We.date.anytime()).format("DD-MMM-YYYY")}static anytime(){return u()(d.We.date.anytime()).format("DD-MMM-YYYY HH:mm:ss")}static last10years(){return u()(d.We.date.past({years:10})).format("DD-MMM-YYYY HH:mm:ss")}static last100years(){return u()(d.We.date.past({years:100})).format("DD-MMM-YYYY HH:mm:ss")}static next10years(){return u()(d.We.date.future({years:10})).format("DD-MMM-YYYY HH:mm:ss")}static next100years(){return u()(d.We.date.future({years:100})).format("DD-MMM-YYYY HH:mm:ss")}}class g extends c{static jobTitle(){return d.We.person.jobTitle()}static jobDescriptor(){return d.We.person.jobDescriptor()}static jobArea(){return d.We.person.jobArea()}static jobType(){return d.We.person.jobType()}}class p extends c{static address(){return d.We.location.streetAddress()+","+d.We.location.secondaryAddress()+","+d.We.location.city()+","+d.We.location.state()+","+d.We.location.country()+"-"+d.We.location.zipCode()}static streetAddress(){return d.We.location.streetAddress()}static secondaryAddress(){return d.We.location.secondaryAddress()}static city(){return d.We.location.city()}static state(){return d.We.location.state()}static country(){return d.We.location.country()}static countryCode(){return d.We.location.countryCode()}static zipCode(){return d.We.location.zipCode()}}class N extends c{static fullName(){return d.We.person.fullName()}static firstName(){return d.We.person.firstName()}static middleName(){return d.We.person.middleName()}static lastName(){return d.We.person.lastName()}static sex(){return d.We.person.sex()}static gender(){return d.We.person.gender()}static age(){return d.We.number.int({min:0,max:130})+""}static email(){return d.We.internet.email()}static password(){return d.We.internet.password()}static userName(){return d.We.internet.userName()}static bio(){return d.We.person.bio()}}class x extends c{static imei(){return d.We.phone.imei()}static number(){return d.We.phone.number()}}class b extends c{static oneDigitNumber(){return d.We.string.numeric(1)}static twoDigitNumber(){return d.We.string.numeric(2)}static threeDigitNumber(){return d.We.string.numeric(3)}static fiveDigitNumber(){return d.We.string.numeric(5)}static tenDigitNumber(){return d.We.string.numeric(10)}static randomSizeMaxFive(){return d.We.string.numeric({length:{min:0,max:5}})}static randomSizeMaxTen(){return d.We.string.numeric({length:{min:0,max:10}})}}class f extends c{static uuid(){return d.We.string.uuid()}}class y extends c{static alphaCaseInsensitiveUptoFive(){return d.We.string.alpha({length:{min:0,max:5}})}static alphaCaseInsensitiveUptoTen(){return d.We.string.alpha({length:{min:0,max:10}})}static alphaCaseInsensitiveUptoTwenty(){return d.We.string.alpha({length:{min:0,max:20}})}}class v extends c{static alphanumericFive(){return d.We.string.alphanumeric({length:{min:0,max:5}})}static alphanumericTen(){return d.We.string.alphanumeric({length:{min:0,max:10}})}static alphanumericTwenty(){return d.We.string.alphanumeric({length:{min:0,max:20}})}}let j=[{category:"Person - Full Name",desc:"Full name",defaultFieldName:"Full name",methodName:"fullName",class:N},{category:"Person - First Name",desc:"First name",defaultFieldName:"First Name",methodName:"firstName",class:N},{category:"Person - Middle Name",desc:"Middle name",defaultFieldName:"Middle name",methodName:"middleName",class:N},{category:"Person - Last Name",desc:"Last name",defaultFieldName:"Last name",methodName:"lastName",class:N},{category:"Person - Sex",desc:"Sex",defaultFieldName:"Sex",methodName:"sex",class:N},{category:"Person - Gender",desc:"Gender",defaultFieldName:"Gender",methodName:"gender",class:N},{category:"Person - Age",desc:"Age (0 - 130)",defaultFieldName:"Age",type:"number",methodName:"age",class:N},{category:"Person - Email",desc:"Email address",defaultFieldName:"Email",methodName:"email",class:N},{category:"Person - Password",desc:"Password",defaultFieldName:"Password",methodName:"password",class:N},{category:"Person - User Name",desc:"User Name",defaultFieldName:"User Name",methodName:"userName",class:N},{category:"Person - Bio",desc:"Bio",defaultFieldName:"Bio",methodName:"bio",class:N},{category:"Phone - IMEI",desc:"IMEI",defaultFieldName:"IMEI",methodName:"imei",class:x},{category:"Phone - phone number",desc:"Phone number",defaultFieldName:"Phone number",methodName:"number",class:x},{category:"Person -  Job Title",desc:"jobTitle",defaultFieldName:"Job title",methodName:"jobTitle",class:g},{category:"Person -  Job Description",desc:"jobDescriptor",defaultFieldName:"Job description",methodName:"jobDescriptor",class:g},{category:"Person -  Job Area",desc:"jobArea",defaultFieldName:"Job area",methodName:"jobArea",class:g},{category:"Person - Job Type",desc:"jobType",defaultFieldName:"Job type",methodName:"jobType",class:g},{category:"String - 1 Digit number",desc:"String - 1 Digit number",defaultFieldName:"Number",methodName:"oneDigitNumber",type:"number",class:b},{category:"String - 2 Digit number",desc:"String - 1 Digit number",defaultFieldName:"Number",methodName:"twoDigitNumber",type:"number",class:b},{category:"String - 3 Digit number",desc:"String - 3 Digit number",defaultFieldName:"Number",methodName:"threeDigitNumber",type:"number",class:b},{category:"String - 5 Digit number",desc:"String - 5 Digit number",defaultFieldName:"Number",methodName:"fiveDigitNumber",type:"number",class:b},{category:"String - 10 Digit number",desc:"String - 10 Digit number",defaultFieldName:"Number",methodName:"tenDigitNumber",type:"number",class:b},{category:"String - Number random length 5",desc:"String - Number length 5",defaultFieldName:"Number",methodName:"randomSizeMaxFive",type:"number",class:b},{category:"String - Number random length 10",desc:"String - Number length 10",defaultFieldName:"Number",methodName:"randomSizeMaxTen",type:"number",class:b},{category:"String - UUID",desc:"String - UUID",defaultFieldName:"UUID",methodName:"uuid",class:f},{category:"String - Alpha length 5",desc:"String - Alpha length 5",defaultFieldName:"Alpha",methodName:"alphaCaseInsensitiveUptoFive",class:y},{category:"String - Alpha length 10",desc:"String - Alpha length 10",defaultFieldName:"Alpha",methodName:"alphaCaseInsensitiveUptoTen",class:y},{category:"String - Alpha length 20",desc:"String - Alpha length 20",defaultFieldName:"Alpha",methodName:"alphaCaseInsensitiveUptoTwenty",class:y},{category:"String - AlphaNumeric length 5",desc:"String - 5 Digit number",defaultFieldName:"AlphaNumeric",methodName:"alphanumericFive",class:v},{category:"String - AlphaNumeric length 10",desc:"String - AlphaNumeric length 10",defaultFieldName:"AlphaNumeric",methodName:"alphanumericTen",class:v},{category:"String - AlphaNumeric length 20",desc:"String - AlphaNumeric length 20",defaultFieldName:"AlphaNumeric",methodName:"alphanumericTwenty",class:v},{category:"Date - Anytime just date",desc:"Date - Anytime just date",defaultFieldName:"Date",methodName:"anytimeJustDate",class:h},{category:"Date - Anytime in DD-MMM-YYYY HH:mm:ss",desc:"Date - Anytime in DD-MMM-YYYY HH:mm:ss",defaultFieldName:"Date",methodName:"anytime",class:h},{category:"Date - within last 10 years in DD-MMM-YYYY HH:mm:ss",desc:"Date - within last 10 years in DD-MMM-YYYY HH:mm:ss",defaultFieldName:"Date",methodName:"last10years",class:h},{category:"Date - within last 100 years in DD-MMM-YYYY HH:mm:ss",desc:"Date -within last 100 years in DD-MMM-YYYY HH:mm:ss",defaultFieldName:"Date",methodName:"last100years",class:h},{category:"Date - in next 10 years in DD-MMM-YYYY HH:mm:ss",desc:"Date - in next 10 years in DD-MMM-YYYY HH:mm:ss",defaultFieldName:"Date",methodName:"next10years",class:h},{category:"Date - in next 100 years in DD-MMM-YYYY HH:mm:ss",desc:"Date - in next 100 years in DD-MMM-YYYY HH:mm:ss",defaultFieldName:"Date",methodName:"next100years",class:h},{category:"Address - full address",desc:"Address - full address",defaultFieldName:"Address",methodName:"address",class:p},{category:"Address - Street address",desc:"Address - Street address",defaultFieldName:"Street address",methodName:"streetAddress",class:p},{category:"Address - Secondary address",desc:"Address - Secondary address",defaultFieldName:"Secondary Address",methodName:"secondaryAddress",class:p},{category:"Address - city",desc:"Address - city",defaultFieldName:"City",methodName:"city",class:p},{category:"Address - state",desc:"Address - state",defaultFieldName:"State",methodName:"state",class:p},{category:"Address - country",desc:"Address - country",defaultFieldName:"Country",methodName:"country",class:p},{category:"Address - country code",desc:"Address - country code",defaultFieldName:"Country code",methodName:"countryCode",class:p},{category:"Address - zip code",desc:"Address - zip code",defaultFieldName:"ZipCode",methodName:"zipCode",class:p}];function D(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"mockManga",s=e.join("\n"),n=new Blob([s],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(n),l=document.createElement("a");l.href=r,l.download=a+"."+t,l.click(),URL.revokeObjectURL(r)}class M{generate(e,t){"json"===e.type?this.handleJson(t,e):this.handleCsv(t,e)}handleJson(e,t){let a=[];a.push("[");for(let s=0;s<t.count;s++){a.push(" {");for(let t=0;t<e.length;t++){let s=this.buildData(e),n='  "'+e[t].userColumnName+'": '+s[t];t+1<e.length?a.push(n+","):a.push(n)}a.push(" }"),s+1<t.count&&a.push(" ,")}a.push("]"),console.log(a),D(a,"json")}handleCsv(e,t){let a=[],s=[];e.forEach(e=>{s.push('"'+e.userColumnName+'"')}),a.push(s.join(","));for(let s=0;s<t.count;s++)a.push(this.buildData(e).join(","));console.log(a),D(a,"csv")}buildData(e){let t=[];return e.forEach(e=>{let a=this.availableCategoriesMap.get(e.name),s=(null==a?void 0:a.class)[null==a?void 0:a.methodName];"function"==typeof s?(null==a?void 0:a.type)=="number"?t.push(parseInt(s(),10)+""):t.push('"'+s()+'"'):console.error('"'.concat(null==a?void 0:a.methodName,'" is not a method of ').concat(null==a?void 0:a.class))}),t}constructor(){this.availableCategoriesMap=new Map,j.forEach(e=>this.availableCategoriesMap.set(e.category,e))}}var C=a(703),w=function(e){let{availableList:t,dropdownParentCallback:a,initialValue:r}=e,[l,i]=(0,n.useState)(t.map(e=>e)),[o,d]=(0,n.useState)(!1);function c(e){a(e.target.textContent)}return(0,s.jsxs)("div",{className:"pb-2 text-dropdown-text",onMouseEnter:function(){d(!0)},onMouseLeave:function(){d(!1)},children:[(0,s.jsx)("button",{className:"w-full  ",children:(0,s.jsx)("input",{className:"bg-dropdown-bg p-3 w-full rounded-lg focus:outline-none",placeholder:"Category",value:r,onChange:function(e){a(e.target.textContent)},onKeyUp:function(e){let a=e.target.value,s=l.filter(e=>e.displayName.toLocaleLowerCase().includes(a.toLocaleLowerCase()));i(0==a.length?t:s)}})}),o&&l.length>0&&(0,s.jsx)("div",{className:"",children:(0,s.jsx)("ul",{className:"bg-dropdown-tray-bg/90 p-3 h-32 rounded-lg absolute cursor-pointer scroll-m-2 overflow-y-auto sm:hover:scale-110 transition-all",children:null==l?void 0:l.map(e=>(0,s.jsx)("li",{className:"p-2  hover:bg-secondary-bg/30 rounded-lg",onClick:c,children:e.displayName},e.displayName))})}),0==l.length&&(0,s.jsx)("div",{className:"text-button-danger-bg pt-4",children:"Data set not available"})]})},Y=function(e){let{selectedCategory:t,index:a,availableCategories:n,selectedCategories:r,updateCategory:l,removeCategory:i}=e,d=n.map(e=>({displayName:e.name,desc:e.desc}));return(0,s.jsxs)("div",{className:"grid grid-cols-6",children:[(0,s.jsx)("div",{className:"p-3 col-span-6 sm:col-span-3",children:(0,s.jsx)(w,{initialValue:t.name,availableList:d,dropdownParentCallback:function(e){let t=n.find(t=>t.name==e),s=t?t.defaultFieldName:"";l({name:null==t?void 0:t.name,userColumnName:s},a)}})}),(0,s.jsx)("div",{className:"p-3 col-span-5 sm:col-span-2",children:(0,s.jsx)(o,{initialValue:t.userColumnName,inputParentCallback:function(e){l({name:t.name,userColumnName:e},a)},placeholder:"Field name",type:"string"})},"dropdown-field"),(0,s.jsx)("div",{className:"p-3 col-span-1 sm:col-span-1",children:(0,s.jsx)("button",{className:"p-3 border-1 bg-button-danger-bg text-button-danger-text rounded-lg hover:bg-button-danger-bg-hover sm:hover:scale-125 transition-all",onClick:()=>void i(a),disabled:0==r.length,children:"x"})})]})},W=function(){let[e,t]=(0,n.useState)(null==j?void 0:j.map(e=>({name:e.category,desc:e.desc,defaultFieldName:e.defaultFieldName}))),[a,r]=(0,n.useState)([]),[l,i]=(0,n.useState)(!0),[d,c]=(0,n.useState)({count:0}),[m,u]=(0,n.useState)(!1);function h(){u(d.count>0),function(){let e=j.map(e=>e.category);i(a.filter(t=>e.filter(e=>e===t.name).length>0).length===a.length)}()}function g(e){let t=new M;d.type=e,t.generate(d,a)}function p(){a.push({name:"",userColumnName:""}),r(a.map(e=>e))}function N(e){a.splice(e,1),r(a.map(e=>e))}function x(e,t){a[t]={name:e.name,userColumnName:e.userColumnName},r(a.map(e=>e))}return(0,n.useEffect)(()=>{h()},[a,d]),(0,s.jsxs)("section",{children:[0==a.length&&(0,s.jsxs)("section",{className:"grid grid-cols-3 items-center h-[750px] sm:h-[76vh] overflow-auto p-10",children:[(0,s.jsxs)("div",{className:"col-span-3 sm:col-span-2 p-3 text-3xl sm:pl-12 flex flex-col gap-24 sm:gap-10",children:[(0,s.jsx)("div",{className:"text-button-danger-bg text-4xl font-semibold text-left animate-scale",children:"Design, test, and iterate with effortless mocks."}),(0,s.jsxs)("div",{className:"",children:["Generate massive amounts of ",(0,s.jsx)("span",{className:"text-button-danger-bg-hover",children:"realistic random mock "})," data for testing and development.",(0,s.jsxs)("div",{className:"col-span-3 pt-2 text-left text-sm",children:["Access massive ",(0,s.jsx)("span",{className:"text-button-text",children:"csv"})," or ",(0,s.jsx)("span",{className:"text-button-text",children:"json "})," datasets instantly."]})]})]}),(0,s.jsxs)("div",{className:"col-span-3 sm:col-span-1 items-center text-center pt-10",children:[(0,s.jsx)("div",{className:"hidden sm:block",children:(0,s.jsx)("div",{className:"p-10 hidden",style:{display:"flex",justifyContent:"center"},children:(0,s.jsx)(C.default,{src:"/manga.png",alt:"mockManga",width:"200",height:"200"})})}),(0,s.jsx)("button",{className:"p-3 border-1 bg-button-bg text-button-text rounded-lg hover:bg-button-bg-hover transition-all hover:scale-125",onClick:()=>p(),children:"Get Started"})]})]}),a.length>0&&(0,s.jsxs)("div",{className:"grid grid-cols-3 items-center min-h-[750px] sm:min-h-[76vh]",children:[(0,s.jsx)("section",{className:"col-span-3 p-5 sm:col-span-2",children:(0,s.jsxs)("div",{className:"p-5",children:[(0,s.jsx)("div",{className:"text-button-danger-bg text-2xl pb-3",children:"Get the data you need, instantly"}),(0,s.jsx)("div",{className:"",children:"Select from the available datasets"}),a.map((t,n)=>(0,s.jsx)("div",{children:(0,s.jsx)(Y,{selectedCategory:t,index:n,availableCategories:e,selectedCategories:a,updateCategory:x,removeCategory:N})},n)),(0,s.jsxs)("div",{className:"p-3 grid grid-cols-8 gap-5",children:[l&&a.length>0&&(0,s.jsx)("button",{className:"p-3 col-span-5 sm:col-start-1 sm:col-end-3 border-1 bg-button-bg text-button-text rounded-lg hover:bg-button-bg-hover  sm:hover:scale-110 transition-all",onClick:()=>p(),children:"Add"}),a.length>3&&(0,s.jsx)("button",{className:"p-3 col-span-3 sm:col-start-6 sm:col-end-8 border-2 rounded-2xl  border-button-danger-bg sm:hover:scale-110 transition-all",onClick:()=>void(r([]),c({count:0})),children:"Reset All"})]})]})}),(0,s.jsx)("section",{className:" col-span-3 p-5 sm:col-span-1 ",children:a.length>0&&(0,s.jsxs)("div",{className:"p-3 pr-10 grid grid-cols-2 gap-6",children:[(0,s.jsx)("div",{className:"p-3 col-span-2",children:(0,s.jsx)(o,{initialValue:d.count,inputParentCallback:function(e){c({count:parseInt(e,10)}),h()},placeholder:"No of records to generate",type:"number"})},"param"),l&&m&&(0,s.jsxs)("div",{className:"col-span-2 pl-10 pr-10 grid grid-cols-4 gap-6",children:[(0,s.jsx)("div",{className:"p-5 col-span-4 text-center",children:"Generate"}),(0,s.jsx)("button",{className:"p-5 col-span-2 sm:col-span-4 border-1 bg-button-bg text-button-text rounded-lg hover:bg-button-bg-hover cursor-pointer sm:hover:scale-110 transition-all",onClick:()=>g("csv"),children:"CSV"}),(0,s.jsx)("button",{className:"p-5 col-span-2 sm:col-span-4 border-1 bg-button-bg text-button-text rounded-lg hover:bg-button-bg-hover cursor-pointer sm:hover:scale-110 transition-all",onClick:()=>g("json"),children:"JSON"})]})]})})]})]})},F=a(8792),A=function(){let[e,t]=(0,n.useContext)(r);return(0,s.jsxs)("nav",{className:"bg-secondary-bg text-secondary-text h-[100px] sm:h-[12vh] grid grid-cols-6 items-center",children:[(0,s.jsx)(F.default,{className:"col-span-5 pl-8 sm:pl-16 ",href:"",children:(0,s.jsxs)("div",{className:"text-2xl flex flex-row gap-2",children:[(0,s.jsx)(C.default,{src:"/manga.png",alt:"mockManga",width:"32",height:"32"}),(0,s.jsxs)("div",{children:["mock",(0,s.jsx)("span",{className:"text-button-danger-bg text-3xl font-semibold",children:"manga"})]})]})}),(0,s.jsx)("div",{className:"col-span-1 sm:pl-20",children:(0,s.jsx)("button",{onClick:()=>{let a="light"===e?"dark":"light";localStorage.setItem("theme",a),t(a)},children:"light"===e?(0,s.jsx)("div",{className:"",children:(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-sun-filled",width:"30",height:"30",viewBox:"0 0 30 15",strokeWidth:"1.5",stroke:"#2c3e50",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,s.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,s.jsx)("path",{d:"M12 19a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z",strokeWidth:"0",fill:"currentColor"}),(0,s.jsx)("path",{d:"M18.313 16.91l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.218 -1.567l.102 .07z",strokeWidth:"0",fill:"currentColor"}),(0,s.jsx)("path",{d:"M7.007 16.993a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z",strokeWidth:"0",fill:"currentColor"}),(0,s.jsx)("path",{d:"M4 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z",strokeWidth:"0",fill:"currentColor"}),(0,s.jsx)("path",{d:"M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z",strokeWidth:"0",fill:"currentColor"}),(0,s.jsx)("path",{d:"M6.213 4.81l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.217 -1.567l.102 .07z",strokeWidth:"0",fill:"currentColor"}),(0,s.jsx)("path",{d:"M19.107 4.893a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z",strokeWidth:"0",fill:"currentColor"}),(0,s.jsx)("path",{d:"M12 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z",strokeWidth:"0",fill:"currentColor"}),(0,s.jsx)("path",{d:"M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z",strokeWidth:"0",fill:"currentColor"})]})}):(0,s.jsx)("div",{className:"",children:(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-moon-filled",width:"30",height:"30",viewBox:"0 0 30 15",strokeWidth:"1.5",stroke:"#2c3e50",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[" ",(0,s.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"})," ",(0,s.jsx)("path",{d:"M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z",strokeWidth:"0",fill:"currentColor"})," "]})})})})]})},S=()=>{let[e,t]=(0,n.useContext)(r);return(0,n.useEffect)(()=>{let e=localStorage.getItem("theme");e?(document.body.classList.add(e),t(e)):window.matchMedia("prefers-color-scheme: dark")?(localStorage.setItem("theme","dark"),t("dark")):(localStorage.setItem("theme","light"),t("light"))},[]),(0,s.jsx)("main",{className:e,children:(0,s.jsxs)("section",{className:"bg-primary-bg text-primary-text items-center justify-between",children:[(0,s.jsx)(A,{}),(0,s.jsx)(W,{}),(0,s.jsx)(i,{})]})})};function k(){return(0,s.jsx)(l,{children:(0,s.jsx)(S,{})})}}},function(e){e.O(0,[506,561,663,879,376,239,990,352,971,69,744],function(){return e(e.s=5822)}),_N_E=e.O()}]);