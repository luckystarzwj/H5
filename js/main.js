// JavaScript Document


var serverURL = 'http://p.surto.cn/henkel2017/';
var sub_mapping={
	chkLogin:{
		action:"p/?r=api/chkLogin",
		params:{},
		testdata:{
			"err":0,
			"reg":1,     //是否注册
			"qr":'http://p.surto.cn/henkel2017/img/qr_code.png',     //二维码地址
			"friend":8,          //推荐朋友数量
			"time":2
		}
	},
	draw:{
		action:"p/?r=api/draw",
		params:{},
		testdata:{
			"err":0,
			"award":0,
			"friend":8,         
			"time":0	
		}
	},
	jsconfig:{
		action:"p/?r=api/jsconfig&rnd="+Math.random()*1000000,
		params:{},
		testdata:{ "err":0, "appId": "wxbf972c37c1902af5", "timestamp":1441514519, "nonceStr": "66679", "signature": "14ec8476968779a33365dbd12820564115b3f090"}
	},
}

var params;
$(function(){
	params = _s.gstring.makeVarsObj(location.href);

	_s.init(950,1206,serverURL);
	//_s.isTest = true;
	_s.subAPI.init(_s.serverURL,sub_mapping);
	_s.zoomDom($(".box"),_s.ssh,"center top");
	
	
	$('.body').on("touchmove",function(ev){
		ev.preventDefault();		
	});
	

	
});





























