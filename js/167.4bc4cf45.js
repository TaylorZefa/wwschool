"use strict";(self["webpackChunkvuex2"]=self["webpackChunkvuex2"]||[]).push([[167],{4167:function(t,s,e){e.r(s),e.d(s,{default:function(){return Q}});var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("SchoolHeader",{attrs:{msg:"schoolHeader"}}),e("div",{staticStyle:{height:"10px"}}),e("SchoolList"),e("div",{staticStyle:{height:"10px"}}),e("SchoolAxios",{attrs:{msg:"schoolAxios"}})],1)},i=[],l=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"header"},[t._m(0),e("el-row",t._l(t.headerList,(function(s,a){return e("el-col",{key:a,attrs:{span:4}},[e("a",{attrs:{href:"#"}},[t._v(t._s(s.text))])])})),1)],1),t._m(1)])},o=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"header-nav"},[a("img",{attrs:{src:e(6080),alt:""}})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"carousel"},[e("div",{})])}],n={components:{},data(){return{headerList:[{code:1,text:"首页"},{code:2,text:"学校概况"},{code:3,text:"新闻资讯"},{code:4,text:"学校管理"},{code:5,text:"科组建设"},{code:6,text:"校园文化"}],addListNum:1}},computed:{},methods:{add(){this.addListNum++},sub(){this.addListNum--}}},c=n,r=e(1001),h=(0,r.Z)(c,l,o,!1,null,"7caba1c8",null),d=h.exports,p=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"mainPage"},[a("el-row",[a("el-col",{staticClass:"article",attrs:{span:12}},[a("img",{attrs:{src:e(1620),alt:""}})]),a("el-col",{staticClass:"constellation",attrs:{span:12}},[a("div",{staticClass:"constellationLeft"},[a("span",{staticStyle:{"font-size":"20px"}},[t._v("🌸星座运势🌸")]),a("br"),a("br"),a("span",[t._v(t._s(this.constellationList.data.title)+"   时间:"+t._s(this.constellationList.data.time))]),a("div",{staticStyle:{"margin-top":"10px"}},[a("el-select",{attrs:{placeholder:"请选择你的星座",clearable:""},on:{change:t.changeConstellation},model:{value:t.constellation,callback:function(s){t.constellation=s},expression:"constellation"}},t._l(t.constellationOption,(function(t,s){return a("el-option",{key:s,attrs:{value:t.constellationTest,label:t.label}})})),1)],1),a("div",{staticClass:"luck"},[a("ul",[a("li",[t._v("整体运势: "+t._s(this.constellationList.data.fortune.all)+" 分")]),a("li",[t._v("爱情运势: "+t._s(this.constellationList.data.fortune.love)+" 分")]),a("li",[t._v("事业运势: "+t._s(this.constellationList.data.fortune.work)+" 分")]),a("li",[t._v("财富运势: "+t._s(this.constellationList.data.fortune.money)+" 分")]),a("li",[t._v("健康指数: "+t._s(this.constellationList.data.index.health)+" ")]),a("li",[t._v("商谈指数: "+t._s(this.constellationList.data.index.discuss)+" ")]),a("li",[t._v("幸运色: "+t._s(this.constellationList.data.luckycolor)+" ")]),a("li",[t._v("幸运数字: "+t._s(this.constellationList.data.luckynumber)+" ")]),a("li",[t._v("速配星座: "+t._s(this.constellationList.data.luckyconstellation)+" ")]),a("li",[t._v("短评: "+t._s(this.constellationList.data.shortcomment)+" ")])])]),a("div",{staticClass:"luckInfo"},[a("div",{staticStyle:{"margin-bottom":"10px"}},[a("span",[a("i",{staticStyle:{"background-color":"#80bee4"}},[t._v("整体运势:")]),t._v(" "+t._s(this.constellationList.data.fortunetext.all)+" ")])]),a("div",[a("span",[a("i",{staticStyle:{"background-color":"#ea749e"}},[t._v("爱情运势:")]),t._v(" "+t._s(this.constellationList.data.fortunetext.love)+" ")])]),a("div",[a("span",[a("i",{staticStyle:{"background-color":"#ab92dc"}},[t._v("事业运势:")]),t._v(" "+t._s(this.constellationList.data.fortunetext.work)+" ")])]),a("div",[a("span",[a("i",{staticStyle:{"background-color":"#f39f5b"}},[t._v("财富运势:")]),t._v(" "+t._s(this.constellationList.data.fortunetext.money)+" ")])]),a("div",[a("span",[a("i",{staticStyle:{"background-color":"#7fbe58"}},[t._v("健康运势:")]),t._v(" "+t._s(this.constellationList.data.fortunetext.health)+" ")])])])])])],1)],1)},u=[],v=e(6166),_=e.n(v),m={mounted(){this.getArticle(),this.getConstellation()},components:{},data(){return{constellation:"taurus",constellationList:[],constellationOption:[{constellationTest:"taurus",label:"金牛座"},{constellationTest:"virgo",label:"处女座"},{constellationTest:"scorpio",label:"天蝎座"},{constellationTest:"pisces",label:"双鱼座"},{constellationTest:"aries",label:"白羊座"},{constellationTest:"gemini",label:"双子座"},{constellationTest:"cancer",label:"巨蟹座"},{constellationTest:"leo",label:"狮子座"},{constellationTest:"libra",label:"天秤座"},{constellationTest:"sagittarius",label:"射手座"},{constellationTest:"capricorn",label:"摩羯座"},{constellationTest:"aquarius",label:"水瓶座"}],imgInfo:"",imgDate:[]}},computed:{},methods:{getArticle(){_().get("https://api.uomg.com/api/rand.img1?sort=美女&format=json").then((t=>{this.imgDate=t.data.imgurl,console.log("res============>"+JSON.stringify(t.data))})).catch((t=>{console.log(t)}))},getConstellation(){_().get("https://api.vvhan.com/api/horoscope?type="+this.constellation+"&time=today").then((t=>{this.constellationList=t.data,this.$notify({title:"成功",message:"选择星座成功",type:"success"})})).catch((t=>{console.log(t)}))},changeConstellation(t){this.constellation=t,console.log(t),this.getConstellation()}}},g=m,f=(0,r.Z)(g,p,u,!1,null,"d2096e80",null),b=f.exports,y=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("el-row",{staticClass:"axiosMain"},[e("el-col",{staticClass:"colorful subformat",attrs:{span:6}},[e("el-input",{staticClass:"elinput",attrs:{placeholder:"请输入qq",size:"normal",clearable:""},model:{value:t.qq,callback:function(s){t.qq=s},expression:"qq"}}),e("el-button",{attrs:{type:"primary",size:"default"},on:{click:t.getQQ}},[t._v("查询QQ信息")]),e("br"),e("div",[e("img",{attrs:{src:t.qqList.qlogo,alt:""}})]),e("div",[e("span",[t._v("QQ账号: "+t._s(t.qqList.qq))]),t._v("     "),e("span",[t._v("QQ名称: "+t._s(t.qqList.name))])])],1),e("el-col",{staticClass:"visitor subformat",attrs:{span:6}},[e("span",[t._v("游客信息")]),e("ul",[e("li",[t._v("游客IP地址: "+t._s(t.visitorList.ip))]),e("li",[t._v("游客系统: "+t._s(t.visitorList.system))]),e("li",[t._v("游客浏览器: "+t._s(t.visitorList.browser))]),e("li",[t._v("访问时间: "+t._s(t.visitorList.time))])])]),e("el-col",{staticClass:"visitor subformat",attrs:{span:6}},[e("span",[t._v("IP归属地信息")]),e("ul",[e("li",[t._v("国家: "+t._s(t.ipAddress.country))]),e("li",[t._v("省份: "+t._s(t.ipAddress.prov))]),e("li",[t._v("城市: "+t._s(t.ipAddress.city))]),e("li",[t._v("运营商: "+t._s(t.ipAddress.lsp))])])]),e("el-col",{staticClass:"translate subformat",attrs:{span:6}},[e("span",[t._v("万能翻译")]),e("br"),e("el-input",{staticClass:"elinput",attrs:{placeholder:"请输入要翻译的内容",size:"normal",clearable:""},model:{value:t.translateText,callback:function(s){t.translateText=s},expression:"translateText"}}),e("el-button",{attrs:{type:"primary",size:"default"},on:{click:t.getTranslate}},[t._v("点击翻译")]),e("br"),e("span",[t._v("翻译前:"+t._s(this.translateText))]),e("br"),e("span",[t._v("翻译后:"+t._s(this.translateBack))])],1),e("el-col",{staticClass:"qrCode subformat",attrs:{span:6}},[e("span",[t._v("生成二维码")]),e("br"),e("el-input",{staticClass:"elinput",attrs:{placeholder:"请输入要生成二维码的内容",size:"normal",clearable:""},model:{value:t.qrCodeText,callback:function(s){t.qrCodeText=s},expression:"qrCodeText"}}),e("el-button",{attrs:{type:"primary",size:"default"},on:{click:t.getQrCode}},[t._v("点击生成")]),e("br"),this.qrCodeRoute?e("img",{attrs:{src:this.qrCodeRoute}}):t._e()],1),e("el-col",{staticClass:"weather subformat",attrs:{span:6}},[e("span",[t._v("天气")]),e("br"),e("el-input",{staticClass:"elinput",attrs:{placeholder:"请输入要获取天气的城市",size:"normal",clearable:""},model:{value:t.city,callback:function(s){t.city=s},expression:"city"}}),e("el-button",{attrs:{type:"primary",size:"default"},on:{click:t.getWeather}},[t._v("点击获取")]),e("div",[e("span",[t._v("地点:"+t._s(this.weatherList.city)+",当前温度"+t._s(this.weatherList.wendu)+" "),this.weatherList.wendu?e("i",[t._v("度")]):t._e()])]),e("div",{staticStyle:{padding:"15px","line-height":"20px"}},[e("span",[t._v("温馨提醒: "+t._s(this.weatherList.ganmao))])])],1)],1)],1)},x=[],q={mounted(){this.getQQ(),this.getVisitor(),this.getIpInfo(),this.getQrCode(),this.getWeather()},components:{},data(){return{qq:926393691,qqList:[],visitor:"",visitorList:[],ipAddress:[],translateText:"",translateBack:"",qrCodeText:"二维码测试",qrCodeRoute:"",city:"博白",weatherList:[],yesterday:[],forecast:[]}},methods:{getQQ(){_().get("https://api.uomg.com/api/qq.info?qq="+this.qq).then((t=>{this.qqList=t.data,this.qqList&&this.$notify({title:"成功",message:"查询QQ: "+this.qq+" 成功",type:"success"})})).catch((t=>{console.log(t)}))},getVisitor(){_().get("https://api.uomg.com/api/visitor.info?skey=taylor").then((t=>{this.visitorList=t.data,this.visitor=JSON.stringify(this.visitorList.ip),this.$notify({title:"成功",message:"欢迎游客"+this.visitor+"访问",type:"success"})})).catch((t=>{console.log(t)}))},getIpInfo(){_().get("https://api.vvhan.com/api/getIpInfo?ip="+this.visitor).then((t=>{this.ipAddress=t.data.info})).catch((t=>{console.log(t)}))},getTranslate(){_().get("https://api.vvhan.com/api/fy?text="+this.translateText).then((t=>{this.translateText=t.data.data.text,this.translateBack=t.data.data.fanyi,this.$notify({title:"成功",message:"翻译 "+this.translateText+" 成功",type:"success"})})).catch((t=>{console.log(t)}))},getQrCode(){_().get("https://api.vvhan.com/api/qr?text="+this.qrCodeText).then((t=>{this.qrCodeRoute="https://api.vvhan.com/api/qr?text="+this.qrCodeText,this.$notify({title:"成功",message:"生成二维码成功",type:"success"})})).catch((t=>{console.log(t)}))},getWeather(){_().get("https://api.vvhan.com/api/weather?city="+this.city+"&type=week").then((t=>{this.weatherList=t.data.data,this.$notify({title:"成功",message:"获取天气成功",type:"success"})})).catch((t=>{console.log(t)}))}}},L=q,C=(0,r.Z)(L,y,x,!1,null,"40674e6c",null),k=C.exports,T={components:{SchoolHeader:d,SchoolList:b,SchoolAxios:k},data(){return{}},computed:{},methods:{}},w=T,S=(0,r.Z)(w,a,i,!1,null,"76b27ba8",null),Q=S.exports},1620:function(t,s,e){t.exports=e.p+"img/dlam2.d4b7de88.jpg"},6080:function(t,s,e){t.exports=e.p+"img/school_logo.4992c4b8.png"}}]);
//# sourceMappingURL=167.4bc4cf45.js.map