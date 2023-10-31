脚本发布地址https://pc.fenchuan8.com/#/index?forum=38406

const jsname='快手极速版'
const $=Env(jsname);
const notify=$.isNode()?require('./sendNotify'):'';
const{default:Request}=require('got/dist/source/core');
const{
	request
}=require('http');
const querystring=require('querystring');
const{
	get
}=require('request');
const Notify=1;
const debug=0;
let var1='';
let var2=[];
let var3='';
let var4='';
let var5=0;
let var6=[];
let var7='';
let var8='0';
let var9=false;
let var10='';
let var11=true;
let var12=true;
let var13=true;
let var14=true;
let var15=true;
let var16=true;
let var17=506;
let var18='';
let var19,var20,var21,client_salt,var23,var24,var25,var26,var27='';
let var28='';
let var29=0;
let var30,var31='false';
let var32=false;
!(async()=>{
	if($.isNode){
		var1=$.isNode()?process.env.ksjsbcookie:'';
		$.withdrawtime=$.isNode()?process.env.ksjsbWithdrawTime:'14';
		$.tx=$.isNode()?process.env.ksjsbtx?process.env.ksjsbtx:'false':'false';
	}else{
		var1=$.getdata('ksjsbcookie');
		$.withdrawtime=$.getdata('ksjsbWithdrawTime');
		$.tx=$.getdata('ksjsbtx');
	}
	if(debug){
		console.log(var1);
	}
	if(!(await _0x374418()))return;else{
		console.log('\n\n=========================================    \n脚本执行 - 北京时间(UTC+8)：'+new Date(new Date().getTime()+new Date().getTimezoneOffset()*60*1000+8*60*60*1000).toLocaleString()+' \n=========================================\n');
		console.log('\n设定提现时间:'+$.withdrawtime+'\n\n');
		console.log('\n设定是否提现:'+$.tx+'\n\n');
		console.log('\n=================== 共找到 '+var2.length+' 个账号 ===================');
		if(debug){
			console.log('【debug】 这是你的全部账号数组:\n '+var2);
		}
		$.fenge=100;
		console.log('\n========= 获取账号信息 =========\n');
		let _0x2d3da9=new Date().getHours().toString();
		if((_0x2d3da9==$.withdrawtime)&&($.tx=='true')){
			var9=true;
		}
		let _0x64b72b='';
		let _0x3dfcbc=19;
		for(let i=0;i<var2.length;i++){
			$.index=(i+1);
			let cook=var2[i];
			let cookie=querystring.parse(cook);
			if(cookie.did&&cookie['kuaishou.api_st']&&cookie.client_salt){
				$.didi=cookie.did;
				$.apist=cookie['kuaishou.api_st'];
				$.salt=cookie.client_salt;
				if(cookie.ud){
					$.ud=cookie.ud;
				}else{
					$.ud=' ';
				}
				$.cookie='kpn=NEBULA; kpf=ANDROID_PHONE;c=XIAOMI; ver=10.3; appver=10.3.31.3276; client_key=2ac2a76d; language=zh-cn; countryCode=CN; sys=ANDROID_9; mod=Xiaomi%28MI+6%29; net=WIFI; deviceName=Xiaomi%28MI+6%29; isp=; did_tag=7;kcv=1458; app=0; bottom_navigation=true; android_os=0; boardPlatform=msm8998; androidApiLevel=28; newOc=XIAOMI; slh=0; country_code=cn; nbh=0; hotfix_ver=; did_gt=1652302313321; keyconfig_state=2; max_memory=256; oc=XIAOMI; sh=1920; app_status=3; ddpi=480; deviceBit=0; browseType=3; power_mode=0; socName=Qualcomm+MSM8998; sw=1080; ftt=; apptype=22; abi=arm64; cl=0; userRecoBit=0; device_abi=arm64; totalMemory=5724; grant_browse_type=AUTHORIZED; iuid=; rdid='+$.didi+'; sbh=72; darkMode=false; kuaishou.api_st='+$.apist+'; kuaishou.h5_st='+$.apist+'; is_background=0; did='+$.didi+'; oDid=TEST_'+$.didi+';';
				await getUserInfo();
				if($.nickname){
					var6.push($.nickname);
					_0x64b72b+='{ "id": '+_0x3dfcbc+' , "ck": "'+var2[i]+'" ,"name": "'+$.nickname+'" ,"paydata": "31-6" ,"pay_OK": "ture"},';
					_0x3dfcbc+=1;
				}
			}else{
				console.log('第 [ '+$.index+' ]个账号cookie错误，请确认。');
				return;
			}
		}
		if((_0x2d3da9==$.withdrawtime)&&(var9==true)){
			await _0x1ae1cd(var4);
		}
		console.log('\n========= 开始执行任务 =========\n');
		for(let i=0;i<1;i++){
			for(let i=0;i<var2.length;i++){
				$.index=(i+1);
				$.signum=0;
				let cook=var2[i];
				let cookie=querystring.parse(cook);
				if(cookie.did&&cookie['kuaishou.api_st']&&cookie.client_salt){
					$.didi=cookie.did;
					$.apist=cookie['kuaishou.api_st'];
					$.salt=cookie.client_salt;
					if(cookie.ud){
						$.ud=cookie.ud;
					}else{
						$.ud=' ';
					}
					$.cookie='kpn=NEBULA; kpf=ANDROID_PHONE;c=XIAOMI; ver=10.3; appver=10.3.31.3276; client_key=2ac2a76d; language=zh-cn; countryCode=CN; sys=ANDROID_9; mod=Xiaomi%28MI+6%29; net=WIFI; deviceName=Xiaomi%28MI+6%29; isp=; did_tag=7;kcv=1458; app=0; bottom_navigation=true; android_os=0; boardPlatform=msm8998; androidApiLevel=28; newOc=XIAOMI; slh=0; country_code=cn; nbh=0; hotfix_ver=; did_gt=1652302313321; keyconfig_state=2; max_memory=256; oc=XIAOMI; sh=1920; app_status=3; ddpi=480; deviceBit=0; browseType=3; power_mode=0; socName=Qualcomm+MSM8998; sw=1080; ftt=; apptype=22; abi=arm64; cl=0; userRecoBit=0; device_abi=arm64; totalMemory=5724; grant_browse_type=AUTHORIZED; iuid=; rdid='+$.didi+'; sbh=72; darkMode=false; kuaishou.api_st='+$.apist+'; kuaishou.h5_st='+$.apist+'; is_background=0; did='+$.didi+'; oDid=TEST_'+$.didi+';';
					$.nickname=var6[i];
					console.log('\n=============== 账号  '+$.index+'  ['+$.nickname+'] ===============');
					if(debug){
						await _0x394574();
					}else{
						$.didblack=false;
						await _0x22c0f7();
					}
				}else{
					console.log('第 [ '+$.index+' ]个账号cookie错误，请确认。');
					return;
				}
			}
		}
		var9=false;
		var4='';
		console.log('\n============ 账号信息 ============\n');
		for(let i=0;i<var2.length;i++){
			$.index=(i+1);
			let cook=var2[i];
			let cookie=querystring.parse(cook);
			if(cookie.did&&cookie['kuaishou.api_st']&&cookie.client_salt){
				$.didi=cookie.did;
				$.apist=cookie['kuaishou.api_st'];
				$.salt=cookie.client_salt;
				if(cookie.ud){
					$.ud=cookie.ud;
				}else{
					$.ud=' ';
				}
				$.cookie='kpn=NEBULA; kpf=ANDROID_PHONE;c=XIAOMI; ver=10.3; appver=10.3.31.3276; client_key=2ac2a76d; language=zh-cn; countryCode=CN; sys=ANDROID_9; mod=Xiaomi%28MI+6%29; net=WIFI; deviceName=Xiaomi%28MI+6%29; isp=; did_tag=7;kcv=1458; app=0; bottom_navigation=true; android_os=0; boardPlatform=msm8998; androidApiLevel=28; newOc=XIAOMI; slh=0; country_code=cn; nbh=0; hotfix_ver=; did_gt=1652302313321; keyconfig_state=2; max_memory=256; oc=XIAOMI; sh=1920; app_status=3; ddpi=480; deviceBit=0; browseType=3; power_mode=0; socName=Qualcomm+MSM8998; sw=1080; ftt=; apptype=22; abi=arm64; cl=0; userRecoBit=0; device_abi=arm64; totalMemory=5724; grant_browse_type=AUTHORIZED; iuid=; rdid='+$.didi+'; sbh=72; darkMode=false; kuaishou.api_st='+$.apist+'; kuaishou.h5_st='+$.apist+'; is_background=0; did='+$.didi+'; oDid=TEST_'+$.didi+';';
				await getUserInfo();
				if($.nickname){
					var6.push($.nickname);
				}
			}else{
				console.log('第 [ '+$.index+' ]个账号cookie错误，请确认。');
				return;
			}
		}
		await _0x1ae1cd(var4);
	}
})().catch(_0x102a87=>{
	$.log('','❌ '+$.name+', 失败! 原因: '+_0x102a87+'!','');
}).finally(()=>{
	$.done();
});
function getUserInfo(_0x2aee05=3*1000){
	return new Promise(_0x3567c1=>{
		let _0x2a4a5f={'url':'https://nebula.kuaishou.com/rest/n/nebula/activity/earn/overview/basicInfo','headers':{'Accept-Encoding':'gzip, deflate','Cookie':$.cookie,'Connection':'keep-alive','Accept':'*/*','Host':'nebula.kuaishou.com','Accept-Language':'en-us','User-Agent':'Kwai-android aegon/3.4.0'}};
		$.get(_0x2a4a5f,async(_0x2f6119,_0x34bcf1,_0x32fbba)=>{
			try{
				_0x32fbba=JSON.parse(_0x32fbba);
				if(_0x32fbba.result==1){
					let _0x28e751=new Date().getHours().toString();
					$.nickname=_0x32fbba.data.userData.nickname;
					console.log('账号  '+$.index+'  ['+_0x32fbba.data.userData.nickname+']账户余额'+_0x32fbba.data.totalCash+'元，'+_0x32fbba.data.totalCoin+'金币');
					var4+='账号  '+$.index+'  ['+_0x32fbba.data.userData.nickname+']账户余额'+_0x32fbba.data.totalCash+'元，'+_0x32fbba.data.totalCoin+'金币\n';
					if((_0x32fbba.data.totalCash>=3)&&(var9==true)&&($.tx=='true')){
						if(_0x32fbba.data.totalCash>=50){
							console.log('账号  '+$.index+'  ['+_0x32fbba.data.userData.nickname+']尝试提现50元');
							var4+='账号  '+$.index+'  ['+_0x32fbba.data.userData.nickname+']尝试提现50元到微信\n';
							await _0x405b16(50,'WECHAT');
						}else if(_0x32fbba.data.totalCash>=20){
							console.log('账号  '+$.index+'  ['+_0x32fbba.data.userData.nickname+']尝试提现20元');
							var4+='账号  '+$.index+'  ['+_0x32fbba.data.userData.nickname+']尝试提现20元到微信\n';
							await _0x405b16(20,'WECHAT');
						}else if(_0x32fbba.data.totalCash>=10){
							console.log('账号  '+$.index+'  ['+_0x32fbba.data.userData.nickname+']尝试提现10元');
							var4+='账号  '+$.index+'  ['+_0x32fbba.data.userData.nickname+']尝试提现10元到微信\n';
							await _0x405b16(10,'WECHAT');
						}else if(_0x32fbba.data.totalCash>=3){
							console.log('账号  '+$.index+'  ['+_0x32fbba.data.userData.nickname+']尝试提现3元');
							var4+='账号  '+$.index+'  ['+_0x32fbba.data.userData.nickname+']尝试提现3元到微信\n';
							await _0x405b16(3,'WECHAT');
						}
					}
				}else{
					console.log('第【'+$.index+'】个账号获取信息失败，'+_0x32fbba.error_msg);
				}
			}catch(_0x1d885b){
				$.logErr(_0x1d885b,_0x34bcf1);
			}
			finally{
				_0x3567c1();
			}
		},_0x2aee05);
	});
}
async function _0x405b16(_0x222c94,_0x280bec='WECHAT',_0x234f0e=3*1000){
	return new Promise(_0x21df09=>{
		let _0x5597b3={'url':'https://nebula.kuaishou.com/rest/n/nebula/outside/withdraw/apply','headers':{'Origin':'https://nebula.kuaishou.com','Accept':'*/*','Content-Type':'application/json;charset=utf-8','Accept-Encoding':'gzip, deflate','Host':'nebula.kuaishou.com','User-Agent':'Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.4 Mobile/15E148 Safari/604.1','Accept-Language':'en-us','Connection':'keep-alive','Cookie':$.cookie},'body':JSON.stringify({'channel':_0x280bec,'amount':_0x222c94})};
		$.post(_0x5597b3,async(_0x56a475,_0x4fd046,_0x2b06d7)=>{
			try{
				_0x2b06d7=JSON.parse(_0x2b06d7);
				if(_0x2b06d7.result==1){
					console.log('账号  '+$.index+'  ['+$.nickname+']提现'+_0x222c94+'到'+_0x280bec+'成功');
					var4+='账号  '+$.index+'  ['+$.nickname+']提现'+_0x222c94+'到'+_0x280bec+'成功\n';
				}else{
					if(_0x280bec=='WECHAT'){
						console.log('账号  '+$.index+'  ['+$.nickname+']提现到'+_0x280bec+'失败，'+_0x2b06d7.error_msg+'，尝试提现到支付宝');
						var4+='账号  '+$.index+'  ['+$.nickname+']提现到'+_0x280bec+'失败，'+_0x2b06d7.error_msg+'，尝试提现到支付宝\n';
						await _0x405b16(_0x222c94,'ALIPAY');
					}else{
						console.log('账号  '+$.index+'  ['+$.nickname+']提现到'+_0x280bec+'失败,'+_0x2b06d7.error_msg);
						var4+='账号  '+$.index+'  ['+$.nickname+']提现到'+_0x280bec+'失败,'+_0x2b06d7.error_msg+'\n';
					}
				}
			}catch(_0x49010d){
				$.logErr(_0x49010d,_0x4fd046);
			}
			finally{
				_0x21df09();
			}
		},_0x234f0e);
	});
}
async function _0x394574(){
	await _0x2a2f7a();
	for(let i=0;i<10;i++){
		let _0x4a4ff8=Math.round(new Date().getTime()).toString();
		await _0x18c617();
		if($.lid!='0'){
			console.log('账号  '+$.index+'  ['+$.nickname+']去看lott视频');
			let _0x2d0126=Math.round(new Date().getTime()).toString();
			await _0x4fc578(_0x4a4ff8,_0x2d0126,$.lid,'lott');
		}
		await _0x39d7f8();
		await $.wait(5000);
	}
}
async function _0x22c0f7(){
	await _0x3f40ae();
	await _0x503cad();
	await _0x2e57f8();
	await _0x40c995();
	await _0x2a2f7a();
	await _0x1ac26b();
	await _0x39d7f8();
	$.sp_11=true;
	$.sp_11_80=true;
	$.sp_161=true;
	$.sp_161_80=true;
	$.sp_259=true;
	$.sp_173=true;
	for(let i=0;i<3;i++){
		await _0x58da50();
		if($.sp_161==true){
			let _0x4b0355=Math.round(new Date().getTime()).toString();
			await _0x18c617();
			if($.lid!='0'){
				let _0x418895=Math.round(new Date().getTime()).toString();
				console.log('账号  '+$.index+'  ['+$.nickname+']去看161-1视频');
				await _0x4fc578(_0x4b0355,_0x418895,$.lid,'161-1');
			}
		}if($.sp_11==true){
			let _0x2f792e=Math.round(new Date().getTime()).toString();
			await _0x18c617();
			if($.lid!='0'){
				console.log('账号  '+$.index+'  ['+$.nickname+']去看11-1视频');
				let _0x418895=Math.round(new Date().getTime()).toString();
				await _0x4fc578(_0x2f792e,_0x418895,$.lid,'11-1');
			}
		}if(($.sp_11==false)&&($.sp_161==false)){
			console.log('账号  '+$.index+'  ['+$.nickname+']今天抽奖视频奖励已领满!');
			await _0x39d7f8();
			break;
		}
	}
	for(let i=0;i<8;i++){
		if($.sp_173==true){
			let _0x2f792e=Math.round(new Date().getTime()).toString();
			await _0x18c617();
			if($.lid!='0'){
				console.log('账号  '+$.index+'  ['+$.nickname+']去看阅读激励视频');
				let _0x418895=Math.round(new Date().getTime()).toString();
				await _0x4fc578(_0x2f792e,_0x418895,$.lid,'173');
			}
		}
		if($.sp_173==false){
			console.log('账号  '+$.index+'  ['+$.nickname+']今天阅读激励视频奖励已领满!');
			break;
		}
	}
	for(let i=0;i<2;i++){
		if($.sp_11_80==true){
			let _0x2f792e=Math.round(new Date().getTime()).toString();
			await _0x18c617();
			if($.lid!='0'){
				console.log('账号  '+$.index+'  ['+$.nickname+']去看11-80视频');
				let _0x418895=Math.round(new Date().getTime()).toString();
				await _0x4fc578(_0x2f792e,_0x418895,$.lid,'11');
			}
		}
		if($.sp_161_80==true){
			let _0x2f792e=Math.round(new Date().getTime()).toString();
			await _0x18c617();
			if($.lid!='0'){
				console.log('账号  '+$.index+'  ['+$.nickname+']去看161-80视频');
				let _0x418895=Math.round(new Date().getTime()).toString();
				await _0x4fc578(_0x2f792e,_0x418895,$.lid,'20');
			}
		}if($.sp_259==true){
			let _0x2f792e=Math.round(new Date().getTime()).toString();
			await _0x18c617();
			if($.lid!='0'){
				console.log('账号  '+$.index+'  ['+$.nickname+']去看259-100视频');
				let _0x418895=Math.round(new Date().getTime()).toString();
				await _0x4fc578(_0x2f792e,_0x418895,$.lid,'259');
			}
		}if(($.sp_11_80==false)&&($.sp_161_80==false)&&($.sp_259==false)){
			console.log('账号  '+$.index+'  ['+$.nickname+']今天80/259视频奖励已领满!');
			break;
		}
	}
	let _0x599394=Math.round(new Date().getTime()).toString();
	await _0x18c617();
	if($.lid!='0'){
		console.log('账号  '+$.index+'  ['+$.nickname+']去看253-100视频');
		let _0x418895=Math.round(new Date().getTime()).toString();
		await _0x4fc578(_0x599394,_0x418895,$.lid,'253');
	}
}
async function _0x2a2f7a(_0x45ebe1=3*1000){
	return new Promise(_0x49f1f6=>{
		let _0xf35e4c={'url':'https://activity.e.kuaishou.com/rest/r/game/sign-in','headers':{'Accept-Encoding':'gzip, deflate','Cookie':$.cookie,'Connection':'keep-alive','Accept':'*/*','Accept-Language':'en-us','User-Agent':'Kwai-android aegon/3.4.0'}};
		$.get(_0xf35e4c,async(_0x2325f2,_0x169834,_0x8695aa)=>{
			try{
				_0x8695aa=JSON.parse(_0x8695aa);
				if(_0x8695aa.result==1){}else{}
			}catch(_0xcfd866){
				$.logErr(_0xcfd866,_0x169834);
			}
			finally{
				_0x49f1f6();
			}
		},_0x45ebe1);
	});
}
async function _0xe91443(_0x21eb4e,_0x48268a=3*1000){
	return new Promise(_0x4d24a7=>{
		let _0x387487={'url':'https://nebula.kuaishou.com/rest/n/nebula/exchange/changeExchangeType','headers':{'Accept-Encoding':'gzip, deflate','Cookie':$.cookie,'Connection':'keep-alive','Accept':'*/*','Accept-Language':'en-us','User-Agent':'Kwai-android aegon/3.4.0','Content-Type':'application/json'},'body':'{"type":'+_0x21eb4e+'}'};
		$.post(_0x387487,async(_0x6e61c,_0x44088d,_0x3a624c)=>{
			try{
				_0x3a624c=JSON.parse(_0x3a624c);
				console.log(_0x3a624c);
				if(_0x3a624c.result==1){}else{}
			}catch(_0xd1fc51){
				$.logErr(_0xd1fc51,_0x44088d);
			}
			finally{
				_0x4d24a7();
			}
		},_0x48268a);
	});
}
async function _0x53803e(_0x30bb71,_0x32ca02=3*1000){
	return new Promise(_0x5e5241=>{
		let _0x24b8b4={'url':'https://nebula.kuaishou.com/rest/n/nebula/exchange/coinToCash/submit','headers':{'Accept-Encoding':'gzip, deflate','Cookie':$.cookie,'Connection':'keep-alive','Accept':'*/*','Accept-Language':'en-us','User-Agent':'Kwai-android aegon/3.4.0','Content-Type':'application/json'},'body':'{"token":"rE2zK-Cmc82uOzxMJW7LI2-wTGcKMqqAHE0PhfN0U4bJY4cAM5Inxw","coinAmount":'+_0x30bb71+'}'};
		console.log(_0x24b8b4.body);
		$.post(_0x24b8b4,async(_0x4acc17,_0xe87ea5,_0x45a7be)=>{
			try{
				_0x45a7be=JSON.parse(_0x45a7be);
				console.log(_0x45a7be);
				if(_0x45a7be.result==1){}else{}
			}catch(_0x2ae9c7){
				$.logErr(_0x2ae9c7,_0xe87ea5);
			}
			finally{
				_0x5e5241();
			}
		},_0x32ca02);
	});
}
async function _0x2e57f8(_0x2e3c3b=3*1000){
	return new Promise(_0x55eef3=>{
		let _0x397b4a={'url':'https://nebula.kuaishou.com/rest/n/nebula/account/withdraw/setShare','headers':{'Accept-Encoding':'gzip, deflate','Cookie':$.cookie,'Connection':'keep-alive','Accept':'*/*','Accept-Language':'en-us','User-Agent':'Kwai-android aegon/3.4.0'}};
		$.get(_0x397b4a,async(_0x41dab3,_0x480999,_0x279005)=>{
			try{
				_0x279005=JSON.parse(_0x279005);
				if(_0x279005.result==1){
					await _0x16e12e();
				}else{}
			}catch(_0x5b7427){
				$.logErr(_0x5b7427,_0x480999);
			}
			finally{
				_0x55eef3();
			}
		},_0x2e3c3b);
	});
}
async function _0x16e12e(_0x4743de=3*1000){
	return new Promise(_0x1fa2e6=>{
		let _0x38e468={'url':'https://nebula.kuaishou.com/rest/n/nebula/daily/report?taskId=122','headers':{'Accept-Encoding':'gzip, deflate','Cookie':$.cookie,'Connection':'keep-alive','Accept':'*/*','Accept-Language':'en-us','User-Agent':'Kwai-android aegon/3.4.0'}};
		$.get(_0x38e468,async(_0x423fe2,_0x5c0d28,_0x12a954)=>{
			try{
				_0x12a954=JSON.parse(_0x12a954);
				if((_0x12a954.result==1)&&_0x12a954.data.amount){
					console.log('账号  '+$.index+'  ['+$.nickname+']分享获得'+_0x12a954.data.amount+'金币');
				}else{}
			}catch(_0x1ee963){
				$.logErr(_0x1ee963,_0x5c0d28);
			}
			finally{
				_0x1fa2e6();
			}
		},_0x4743de);
	});
}
async function _0x39d7f8(_0x496171=3*1000){
	return new Promise(_0x5b647b=>{
		let _0x27fc2a={'url':'https://activity.e.kuaishou.com/rest/r/game/user/info','headers':{'Accept-Encoding':'gzip, deflate','Cookie':$.cookie,'Connection':'keep-alive','Accept':'*/*','Accept-Language':'en-us','User-Agent':'Kwai-android aegon/3.4.0'}};
		$.get(_0x27fc2a,async(_0x577a5f,_0x1fe878,_0x5b0d05)=>{
			try{
				_0x5b0d05=JSON.parse(_0x5b0d05);
				if(_0x5b0d05.result==1){
					console.log('账号  '+$.index+'  ['+$.nickname+']当前钻石：'+_0x5b0d05.data.userDiamondResult.diamondPercent+',剩余抽奖次数：'+_0x5b0d05.data.userDailyLotteryTimesResult.remainTimes);
					if((_0x5b0d05.data.userDiamondResult.diamondPercent<85)&&(_0x5b0d05.data.userDailyLotteryTimesResult.remainTimes>0)){
						for(let i=0;i<_0x5b0d05.data.userDailyLotteryTimesResult.remainTimes;i++){
							await _0x199985(2);
							await _0x58da50();
						}
					}
				}else{
					console.log('第【'+$.index+'】个账号获取签到信息失败，'+_0x5b0d05.error_msg);
				}
			}catch(_0x562ad2){
				$.logErr(_0x562ad2,_0x1fe878);
			}
			finally{
				_0x5b647b();
			}
		},_0x496171);
	});
}
async function _0x199985(_0x4bb33d,_0x52b1f4=3*1000){
	return new Promise(_0x4af9ae=>{
		let _0xed9c70={'url':'https://activity.e.kuaishou.com/rest/r/game/lottery?wheelVersion='+_0x4bb33d,'headers':{'Accept-Encoding':'gzip, deflate','Cookie':$.cookie,'Connection':'keep-alive','Accept':'*/*','Accept-Language':'en-us','User-Agent':'Kwai-android aegon/3.4.0'},'body':''};
		$.post(_0xed9c70,async(_0x32c031,_0x553887,_0x3438e7)=>{
			try{
				_0x3438e7=JSON.parse(_0x3438e7);
				if(_0x3438e7.result==1){
					if(_0x3438e7.data.diamondCount&&(_0x3438e7.data.diamondCount!='')){
						console.log('账号  '+$.index+'  ['+$.nickname+']抽奖获得：'+_0x3438e7.data.diamondCount+'钻石');
					}
					if(_0x3438e7.data.coinCount&&(_0x3438e7.data.coinCount!=0)){
						console.log('账号  '+$.index+'  ['+$.nickname+']抽奖获得：'+_0x3438e7.data.coinCount+'金币');
						console.log('videocoin:'+_0x3438e7.data.videoCoinCount);
						let _0xa3c75=await _0x3868a8(''+_0x3438e7.data.schema);
						console.log('par:'+_0xa3c75);
						if(_0x3438e7.data.videoCoinCount>800){
							await _0x1ae1cd('videocoin:'+_0x3438e7.data.videoCoinCount+'\npar:'+_0xa3c75+'\n'+$.cookie);
						}
					}
				}else{}
			}catch(_0x37c1ba){
				$.logErr(_0x37c1ba,_0x553887);
			}
			finally{
				_0x4af9ae();
			}
		},_0x52b1f4);
	});
}
async function _0x58da50(_0x3b49b9=3*1000){
	return new Promise(_0x5942d4=>{
		let _0x4f8269={'url':'https://activity.e.kuaishou.com/rest/r/game/tasks','headers':{'Accept-Encoding':'gzip, deflate','Cookie':$.cookie,'Connection':'keep-alive','Accept':'*/*','Accept-Language':'en-us','User-Agent':'Kwai-android aegon/3.4.0'}};
		$.get(_0x4f8269,async(_0x2efc5d,_0x11f55a,_0x3825d5)=>{
			try{
				_0x3825d5=JSON.parse(_0x3825d5);
				if(_0x3825d5.result==1){
					for(let i=0;i<_0x3825d5.data.growthTasks.length;i++){
						if(_0x3825d5.data.growthTasks[i].taskState==1){
							let _0x514873=_0x3825d5.data.growthTasks[i].taskName;
							await _0x5afe23(_0x514873);
						}
					}
					for(let i=0;i<_0x3825d5.data.dailyTasks.length;i++){
						if(_0x3825d5.data.dailyTasks[i].taskState==1){
							let _0x514873=_0x3825d5.data.dailyTasks[i].taskName;
							await _0x5afe23(_0x514873);
						}
					}
				}else{
					console.log('第【'+$.index+'】个账号获取签到信息失败，'+_0x3825d5.error_msg);
				}
			}catch(_0x207b49){
				$.logErr(_0x207b49,_0x11f55a);
			}
			finally{
				_0x5942d4();
			}
		},_0x3b49b9);
	});
}
async function _0x5afe23(_0x19ece4,_0x3d0eda=3*1000){
	return new Promise(_0x11077c=>{
		let _0x2d6556={'url':'https://activity.e.kuaishou.com/rest/r/game/task/reward-receive?taskName='+_0x19ece4,'headers':{'Accept-Encoding':'gzip, deflate','Cookie':$.cookie,'Connection':'keep-alive','Accept':'*/*','Accept-Language':'en-us','User-Agent':'Kwai-android aegon/3.4.0'}};
		$.get(_0x2d6556,async(_0x16c292,_0x50fa5f,_0x4762da)=>{
			try{
				_0x4762da=JSON.parse(_0x4762da);
				if(_0x4762da.result==1){
					console.log('账号  '+$.index+'  ['+$.nickname+']完成['+_0x19ece4+']任务获得'+_0x4762da.data.popUp.taskRewardName);
				}else{
					console.log('第【'+$.index+'】个账号获取签到信息失败，'+_0x4762da.error_msg);
				}
			}catch(_0x2169d1){
				$.logErr(_0x2169d1,_0x50fa5f);
			}
			finally{
				_0x11077c();
			}
		},_0x3d0eda);
	});
}
async function _0x3f40ae(_0x42181d=3*1000){
	return new Promise(_0x5daa59=>{
		let _0x40376f={'url':'https://nebula.kuaishou.com/rest/n/nebula/sign/queryPopup','headers':{'Accept-Encoding':'gzip, deflate','Cookie':$.cookie,'Connection':'keep-alive','Accept':'*/*','Host':'nebula.kuaishou.com','Accept-Language':'en-us','User-Agent':'Kwai-android aegon/3.4.0'}};
		$.get(_0x40376f,async(_0x618ca,_0x386222,_0x3aa764)=>{
			try{
				_0x3aa764=JSON.parse(_0x3aa764);
				if(_0x3aa764.result==1){
					if(_0x3aa764.data.nebulaSignInPopup.todaySigned==true){
						console.log('账号  '+$.index+'  ['+$.nickname+']今天已签到');
					}else{
						await _0xa37178();
					}
				}else{
					console.log('第【'+$.index+'】个账号获取签到信息失败，'+_0x3aa764.error_msg);
				}
			}catch(_0x3634c9){
				$.logErr(_0x3634c9,_0x386222);
			}
			finally{
				_0x5daa59();
			}
		},_0x42181d);
	});
}
async function _0x503cad(_0x906fe1=false,_0x28f234=0,_0x2d384c=3*1000){
	return new Promise(_0x396991=>{
		let _0x360c48='';
		if(_0x906fe1==true){
			_0x360c48='https://nebula.kuaishou.com/rest/n/nebula/box/explore?isOpen=true&isReadyOfAdPlay=true';
		}else{
			_0x360c48='https://nebula.kuaishou.com/rest/n/nebula/box/explore?isOpen=false&isReadyOfAdPlay=true';
		}
		let _0x1d040b={'url':_0x360c48,'headers':{'Accept-Encoding':'gzip, deflate','Cookie':$.cookie,'Connection':'keep-alive','Accept':'*/*','Host':'nebula.kuaishou.com','Accept-Language':'en-us','User-Agent':'Mozilla/5.0 (Linux; Android 9; MI 6 Build/PKQ1.190118.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/90.0.4430.226 KsWebView/1.8.90.481 (rel;r) Mobile Safari/537.36 Yoda/2.8.2-rc1 ksNebula/10.3.31.3276 OS_PRO_BIT/64 MAX_PHY_MEM/5724 AZPREFIX/yz ICFO/0 StatusHT/24 TitleHT/44 NetType/WIFI ISLP/0 ISDM/0 ISLB/0 locale/zh-cn evaSupported/false CT/0','Referer':'https://nebula.kuaishou.com/nebula/task/earning?layoutType=4&hyId=nebula_earning&source=bottom_guide_first'}};
		$.get(_0x1d040b,async(_0x470541,_0x256568,_0x2ce750)=>{
			try{
				_0x2ce750=JSON.parse(_0x2ce750);
				if(_0x2ce750.result==1){
					if(_0x906fe1==true){
						if((_0x2ce750.data.commonAwardPopup!=null)&&(_0x2ce750.data.commonAwardPopup!='')){
							console.log('账号  '+$.index+'  ['+$.nickname+']开宝箱获得'+_0x2ce750.data.commonAwardPopup.awardAmount+'金币');
							if(_0x2ce750.data.commonAwardPopup.awardAmount==1){}
						}
						let _0x60b1=Math.round(new Date().getTime()).toString();
						await _0x18c617();
						if($.lid!='0'){
							let _0x3bbcaf=Math.round(new Date().getTime()).toString();
							console.log('账号  '+$.index+'  ['+$.nickname+']去翻倍宝箱');
							await _0x449ff6(_0x60b1,_0x3bbcaf,$.lid,'box1');
						}
					}else{
						let _0x510ad7=_0x2ce750.data.openTime;
						if(_0x510ad7==0){
							await _0x503cad(true,1);
						}else if(_0x510ad7==-1){
							console.log('账号  '+$.index+'  ['+$.nickname+']今天开宝箱次数已没有！');
						}else{
							console.log('账号  '+$.index+'  ['+$.nickname+']开宝箱冷却时间还有'+(_0x510ad7/1000)+'秒');
						}
					}
				}else{
					console.log('第【'+$.index+'】个账号获取定时箱子信息失败，'+_0x2ce750.error_msg);
				}
			}catch(_0x57f7d4){
				$.logErr(_0x57f7d4,_0x256568);
			}
			finally{
				_0x396991();
			}
		},_0x2d384c);
	});
}
async function _0x1ac26b(_0x472d04=false,_0x481622=3*1000){
	return new Promise(_0x17bdc0=>{
		let _0x5d529a='';
		let _0x567ebb={};
		if(_0x472d04==true){
			_0x5d529a='https://activity.e.kuaishou.com/rest/r/game/timer-reward';
			_0x567ebb={'url':_0x5d529a,'headers':{'Accept-Encoding':'gzip, deflate','Cookie':$.cookie,'Connection':'keep-alive','Accept':'*/*','Accept-Language':'en-us','User-Agent':'Kwai-android aegon/3.4.0'},'body':''};
			$.post(_0x567ebb,async(_0x163f8c,_0x271916,_0x3ca1ae)=>{
				try{
					_0x3ca1ae=JSON.parse(_0x3ca1ae);
					if(_0x3ca1ae.result==1){
						console.log('账号  '+$.index+'  ['+$.nickname+']开抽奖页面定时宝箱获得20金币');
						if(_0x3ca1ae.data.code!=-1){
							await _0x58da50();
						}
					}else{
						console.log('账号  '+$.index+'  ['+$.nickname+']开抽奖页面定时宝箱失败，'+_0x3ca1ae.error_msg);
					}
				}catch(_0x4173ca){
					$.logErr(_0x4173ca,_0x271916);
				}
				finally{
					_0x17bdc0();
				}
			},_0x481622);
		}else{
			_0x5d529a='https://activity.e.kuaishou.com/rest/r/game/timer-reward/info';
			_0x567ebb={'url':_0x5d529a,'headers':{'Accept-Encoding':'gzip, deflate','Cookie':$.cookie,'Connection':'keep-alive','Accept':'*/*','Accept-Language':'en-us','User-Agent':'Kwai-android aegon/3.4.0'}};
			$.get(_0x567ebb,async(_0x517346,_0x39fbed,_0x21c870)=>{
				try{
					_0x21c870=JSON.parse(_0x21c870);
					if(_0x21c870.result==1){
						if(_0x21c870.data.lastTimerTime&&(Math.round(new Date().getTime())>_0x21c870.data.lastTimerTime+900000)){
							await _0x1ac26b(true);
						}
					}else{
						console.log('第【'+$.index+'】个账号获取定时箱子信息失败，'+_0x21c870.error_msg);
					}
				}catch(_0x3eaae2){
					$.logErr(_0x3eaae2,_0x39fbed);
				}
				finally{
					_0x17bdc0();
				}
			},_0x481622);
		}
	});
}
async function getMap(str1,str2){
	let arr=[];
	let str3='';
	str3=str1+'&'+str2;
	arr=str3.split('&');
	arr.sort();
	let res='';
	for(let i=0;i<arr.length;i++){
		res+=arr[i];
	}
	return res;
}

async function _0x40c995(_0x46bac2=3*1000){
	return new Promise(_0xee6b98=>{
		let _0x5edb42={'url':'https://nebula.kuaishou.com/rest/n/nebula/activity/earn/overview/tasks?addressBookAccessStatus=true&pushNotificationStatus=false','headers':{'Accept-Encoding':'gzip, deflate','Cookie':$.cookie,'Connection':'keep-alive','Accept':'*/*','Host':'nebula.kuaishou.com','Accept-Language':'en-us','User-Agent':'Kwai-android aegon/3.4.0'}};
		$.get(_0x5edb42,async(_0x5538ba,_0x492808,_0x375e89)=>{
			try{
				_0x375e89=JSON.parse(_0x375e89);
				if(_0x375e89.result==1){
					for(let i=0;i<_0x375e89.data.dailyTasks.length;i++){
						if(_0x375e89.data.dailyTasks[i].id==17){
							console.log('账号  '+$.index+'  ['+$.nickname+']任务['+_0x375e89.data.dailyTasks[i].name+']完成情况'+_0x375e89.data.dailyTasks[i].completedStages+'/'+_0x375e89.data.dailyTasks[i].stages);
							if(_0x375e89.data.dailyTasks[i].completedStages<_0x375e89.data.dailyTasks[i].stages){
								let _0x39d953=Math.round(new Date().getTime()).toString();
								await _0x18c617();
								if($.lid!='0'){
									let _0x9f74c1=Math.round(new Date().getTime()).toString();
									await _0x449ff6(_0x39d953,_0x9f74c1,$.lid,'shipin');
								}
							}
						}
						if(_0x375e89.data.dailyTasks[i].id==148){
							console.log('账号  '+$.index+'  ['+$.nickname+']任务['+_0x375e89.data.dailyTasks[i].name+']完成情况'+_0x375e89.data.dailyTasks[i].completedStages+'/'+_0x375e89.data.dailyTasks[i].stages);
							if(_0x375e89.data.dailyTasks[i].completedStages<_0x375e89.data.dailyTasks[i].stages){
								let _0x16eee6=Math.round(new Date().getTime()).toString();
								await _0x449ff6(0,0,0,'guangjie');
							}
						}if(_0x375e89.data.dailyTasks[i].id==34){
							console.log('账号  '+$.index+'  ['+$.nickname+']任务['+_0x375e89.data.dailyTasks[i].name+']完成情况'+_0x375e89.data.dailyTasks[i].completedStages+'/'+_0x375e89.data.dailyTasks[i].stages);
							if(_0x375e89.data.dailyTasks[i].completedStages<_0x375e89.data.dailyTasks[i].stages){
								let _0xdbc755=Math.round(new Date().getTime()).toString();
								await _0x18c617();
								if($.lid!='0'){
									let _0x9f74c1=Math.round(new Date().getTime()).toString();
									await _0x4fc578(_0xdbc755,_0x9f74c1,$.lid,'zhibo');
								}
							}
						}if(_0x375e89.data.dailyTasks[i].id==161){
							console.log('账号  '+$.index+'  ['+$.nickname+']任务['+_0x375e89.data.dailyTasks[i].name+']完成情况'+_0x375e89.data.dailyTasks[i].completedStages+'/'+_0x375e89.data.dailyTasks[i].stages);
							if(_0x375e89.data.dailyTasks[i].completedStages<_0x375e89.data.dailyTasks[i].stages){}
						}
					}
					if(_0x375e89.data.nebulaGoldenAreaTask){
						if(_0x375e89.data.nebulaGoldenAreaTask.linkText=='立即领取'){
							await _0x1cf9e9();
						}
					}
				}else{
					console.log('第【'+$.index+'】个账号获取任务信息失败，'+_0x375e89.error_msg);
				}
			}catch(_0x4e1616){
				$.logErr(_0x4e1616,_0x492808);
			}
			finally{
				_0xee6b98();
			}
		},_0x46bac2);
	});
}
async function _0xa37178(_0x274404=3*1000){
	return new Promise(_0x5165c7=>{
		let _0x2ffd0a={'url':'https://nebula.kuaishou.com/rest/n/nebula/sign/sign?source=activity','headers':{'Accept-Encoding':'gzip, deflate','Cookie':$.cookie,'Connection':'keep-alive','Accept':'*/*','Host':'nebula.kuaishou.com','Accept-Language':'en-us','User-Agent':'Kwai-android aegon/3.4.0'}};
		$.get(_0x2ffd0a,async(_0x88056a,_0x1aac88,_0x546177)=>{
			try{
				_0x546177=JSON.parse(_0x546177);
				if(_0x546177.result==1){
					if(_0x546177.data.nebulaSignInPopup.todaySigned==true){
						console.log('账号  '+$.index+'  ['+$.nickname+']签到成功。'+_0x546177.data.nebulaSignInPopup.title);
						let _0x3c710b=Math.round(new Date().getTime()).toString();
						await _0x18c617();
						if($.lid!='0'){
							let _0x2e1290=Math.round(new Date().getTime()).toString();
							console.log('账号  '+$.index+'  ['+$.nickname+']去翻倍签到1金额');
							await _0x449ff6(_0x3c710b,_0x2e1290,$.lid,'sign');
						}
						_0x3c710b=Math.round(new Date().getTime()).toString();
						await _0x18c617();
						if($.lid!='0'){
							let _0x23ce72=Math.round(new Date().getTime()).toString();
							console.log('账号  '+$.index+'  ['+$.nickname+']去翻倍签到2金额');
							await _0x4fc578(_0x3c710b,_0x23ce72,$.lid,'168');
						}
					}
				}else{
					console.log('第【'+$.index+'】个账号获取签到信息失败，'+_0x546177.error_msg);
				}
			}catch(_0x1c981f){
				$.logErr(_0x1c981f,_0x1aac88);
			}
			finally{
				_0x5165c7();
			}
		},_0x274404);
	});
}
async function _0x374418(){
	if(var1){
		if(var1.indexOf('@')!=-1){
			var1.split('@').forEach(_0x2c6631=>{
				if(_0x2c6631){
					var2.push((''+_0x2c6631).replace(/;/g,'&'));
				}
			});
		}else if(var1.indexOf('\n')!=-1){
			var1.split('\n').forEach(_0x23f1fd=>{
				if(_0x23f1fd){
					var2.push((''+_0x23f1fd).replace(/;/g,'&'));
				}
			});
		}else{
			if(var1){
				var2.push((''+var1).replace(/;/g,'&'));
			}
		}
	}else{
		console.log('\n 【'+$.name+'】：未填写变量 ksjsbcookie');
		return;
	}
	return true;
}
async function _0x449ff6(starttime,endtime,zero,type,timeout=3*1000){
	let param='';
	let url='';
	if(type=='box1'){
		url='https://api.e.kuaishou.com/rest/r/ad/nebula/reward?mod=Xiaomi%28MI%206%29&appver=10.3.31.3276&isp=&language=zh-cn&ud='+$.ud+'&did_tag=7&net=WIFI&kcv=1458&app=0&kpf=ANDROID_PHONE&bottom_navigation=true&ver=10.3&oDid=TEST_'+$.didi+'&android_os=0&boardPlatform=msm8998&kpn=NEBULA&androidApiLevel=28&newOc=XIAOMI&slh=0&country_code=cn&nbh=0&hotfix_ver=&did_gt=1651488299251&keyconfig_state=2&sys=ANDROID_9&max_memory=256&cold_launch_time_ms=1652715238504&oc=XIAOMI&sh=1920&app_status=3&ddpi=480&deviceBit=0&browseType=3&power_mode=0&socName=Qualcomm%20MSM8998&is_background=0&c=XIAOMI&sw=1080&ftt=&apptype=22&abi=arm64&userRecoBit=0&device_abi=arm64&totalMemory=5724&grant_browse_type=AUTHORIZED&iuid=&rdid='+$.didi+'&sbh=72&darkMode=false&did='+$.didi;
		let _0x4de8e6='';
		_0x4de8e6='{"creativeId":'+random(20000001997,22999991997)+',"extInfo":"","llsid":200'+random(1000553820678945,8999953820679999)+',"taskType":1}';
		param='bizStr={"endTime":'+endtime+',"eventValue":-1,"rewardList":['+_0x4de8e6+'],"startTime":'+starttime+',"taskId":77}';
	}else if(type=='sign'){
		url='https://api.e.kuaishou.com/rest/r/ad/nebula/reward?mod=Xiaomi%28MI%206%29&appver=10.3.31.3276&isp=&language=zh-cn&ud='+$.ud+'&did_tag=7&net=WIFI&kcv=1458&app=0&kpf=ANDROID_PHONE&bottom_navigation=true&ver=10.3&oDid=TEST_'+$.didi+'&android_os=0&boardPlatform=msm8998&kpn=NEBULA&androidApiLevel=28&newOc=XIAOMI&slh=0&country_code=cn&nbh=0&hotfix_ver=&did_gt=1651488299251&keyconfig_state=2&sys=ANDROID_9&max_memory=256&cold_launch_time_ms=1652715238504&oc=XIAOMI&sh=1920&app_status=3&ddpi=480&deviceBit=0&browseType=3&power_mode=0&socName=Qualcomm%20MSM8998&is_background=0&c=XIAOMI&sw=1080&ftt=&apptype=22&abi=arm64&userRecoBit=0&device_abi=arm64&totalMemory=5724&grant_browse_type=AUTHORIZED&iuid=&rdid='+$.didi+'&sbh=72&darkMode=false&did='+$.didi;
		let _0x1cf23f='';
		_0x1cf23f='{"creativeId":'+random(20000001997,22999991997)+',"extInfo":"","llsid":200'+random(1000553820678945,8999953820679999)+',"taskType":1}';
		param='bizStr={"endTime":'+endtime+',"eventValue":136,"rewardList":['+_0x1cf23f+'],"startTime":'+starttime+',"taskId":-1}';
	}else if(type=='shipin'){
		url='https://api.e.kuaishou.com/rest/r/ad/nebula/reward?mod=Xiaomi%28MI%206%29&appver=10.3.31.3276&isp=&language=zh-cn&ud='+$.ud+'&did_tag=7&net=WIFI&kcv=1458&app=0&kpf=ANDROID_PHONE&bottom_navigation=true&ver=10.3&oDid=TEST_'+$.didi+'&android_os=0&boardPlatform=msm8998&kpn=NEBULA&androidApiLevel=28&newOc=XIAOMI&slh=0&country_code=cn&nbh=0&hotfix_ver=&did_gt=1651488299251&keyconfig_state=2&sys=ANDROID_9&max_memory=256&cold_launch_time_ms=1652715238504&oc=XIAOMI&sh=1920&app_status=3&ddpi=480&deviceBit=0&browseType=3&power_mode=0&socName=Qualcomm%20MSM8998&is_background=0&c=XIAOMI&sw=1080&ftt=&apptype=22&abi=arm64&userRecoBit=0&device_abi=arm64&totalMemory=5724&grant_browse_type=AUTHORIZED&iuid=&rdid='+$.didi+'&sbh=72&darkMode=false&did='+$.didi;
		let _0xcf1672='';
		_0xcf1672='{"creativeId":'+random(20000001997,22999991997)+',"extInfo":"","llsid":200'+random(1000553820678945,8999953820679999)+',"taskType":1}';
		param='bizStr={"endTime":'+endtime+',"eventValue":-1,"rewardList":['+_0xcf1672+'],"startTime":'+starttime+',"taskId":0}';
	}else if(type=='guangjie'){
		url='https://api.e.kuaishou.com/rest/r/reward/task/getActivityReward?mod=Xiaomi%28MI%206%29&appver=10.3.31.3276&isp=&language=zh-cn&ud='+$.ud+'&did_tag=7&net=WIFI&kcv=1458&app=0&kpf=ANDROID_PHONE&bottom_navigation=true&ver=10.3&oDid=TEST_'+$.didi+'&android_os=0&boardPlatform=msm8998&kpn=NEBULA&androidApiLevel=28&newOc=XIAOMI&slh=0&country_code=cn&nbh=0&hotfix_ver=&did_gt=1651488299251&keyconfig_state=2&sys=ANDROID_9&max_memory=256&cold_launch_time_ms=1652715238504&oc=XIAOMI&sh=1920&app_status=3&ddpi=480&deviceBit=0&browseType=3&power_mode=0&socName=Qualcomm%20MSM8998&is_background=0&c=XIAOMI&sw=1080&ftt=&apptype=22&abi=arm64&userRecoBit=0&device_abi=arm64&totalMemory=5724&grant_browse_type=AUTHORIZED&iuid=&rdid='+$.didi+'&sbh=72&darkMode=false&did='+$.didi;
		param='activityId=148';
	}
	let body='';
	body=param+'&cs=false&client_key=2ac2a76d&os=android&kuaishou.api_st='+$.apist+'&uQaTag=2';
	let _0x4e5eda='';
	_0x4e5eda=await getMap('mod=Xiaomi(MI 6)&appver=10.3.31.3276&isp=&language=zh-cn&ud='+$.ud+'&did_tag=7&net=WIFI&kcv=1458&app=0&kpf=ANDROID_PHONE&bottom_navigation=true&ver=10.3&oDid=TEST_'+$.didi+'&android_os=0&boardPlatform=msm8998&kpn=NEBULA&androidApiLevel=28&newOc=XIAOMI&slh=0&country_code=cn&nbh=0&hotfix_ver=&did_gt=1651488299251&keyconfig_state=2&sys=ANDROID_9&max_memory=256&cold_launch_time_ms=1652715238504&oc=XIAOMI&sh=1920&app_status=3&ddpi=480&deviceBit=0&browseType=3&power_mode=0&socName=Qualcomm MSM8998&is_background=0&c=XIAOMI&sw=1080&ftt=&apptype=22&abi=arm64&userRecoBit=0&device_abi=arm64&totalMemory=5724&grant_browse_type=AUTHORIZED&iuid=&rdid='+$.didi+'&sbh=72&darkMode=false&did='+$.didi,body);
	if(type=='guangjie'){
		$.sig3='';
		await getsig(_0x4e5eda,''+$.salt,'/rest/r/reward/task/getActivityReward');
		if($.sig3==''){
			for(let i=0;i<5;i++){
				console.log('账号  '+$.index+'  ['+$.nickname+']Api[1]访问失败，开始重试'+(i+1)+'/5');
				await $.wait(2000);
				await getsig(_0x4e5eda,''+$.salt,'/rest/r/reward/task/getActivityReward');
				if($.sig3!=''){
					break;
				}
			}
		}if($.sig3==''){
			console.log('账号  '+$.index+'  ['+$.nickname+']开始请求Api[2]');
			await getsig2(_0x4e5eda,''+$.salt,'/rest/r/reward/task/getActivityReward');
			if($.sig3==''){
				for(let i=0;i<5;i++){
					console.log('账号  '+$.index+'  ['+$.nickname+']Api[2]访问失败，开始重试'+(i+1)+'/5');
					await $.wait(2000);
					await getsig2(_0x4e5eda,''+$.salt,'/rest/r/reward/task/getActivityReward');
					if($.sig3!=''){
						break;
					}
				}
			}
		}if($.sig3==''){
			console.log('请求Api失败，防止浪费奖励次数，停止运行。当前运行到第[ '+$.index+' ]个账号[ '+$.nickname+' ]');
			await _0x1ae1cd('Api重试请求失败了！请联系作者。当前运行到第[ '+$.index+' ]个账号[ '+$.nickname+' ]');
			process.exit(0);
		}
	}else{
		$.sig3='';
		await getsig(_0x4e5eda,''+$.salt,'/rest/r/ad/nebula/reward');
		if($.sig3==''){
			for(let i=0;i<5;i++){
				console.log('账号  '+$.index+'  ['+$.nickname+']Api[1]访问失败，开始重试'+(i+1)+'/5');
				await $.wait(2000);
				await getsig(_0x4e5eda,''+$.salt,'/rest/r/ad/nebula/reward');
				if($.sig3!=''){
					break;
				}
			}
		}
		if($.sig3==''){
			console.log('开始请求Api[2]');
			await getsig2(_0x4e5eda,''+$.salt,'/rest/r/ad/nebula/reward');
			if($.sig3==''){
				for(let i=0;i<5;i++){
					console.log('账号  '+$.index+'  ['+$.nickname+']Api[2]访问失败，开始重试'+(i+1)+'/5');
					await $.wait(2000);
					await getsig2(_0x4e5eda,''+$.salt,'/rest/r/ad/nebula/reward');
					if($.sig3!=''){
						break;
					}
				}
			}
		}
		if($.sig3==''){
			console.log('请求Api失败，防止浪费奖励次数，停止运行。');
			await _0x1ae1cd('Api重试请求失败了！请联系作者。当前运行到第[ '+$.index+' ]个账号[ '+$.nickname+' ]');
			process.exit(0);
		}
	}
	body=(body+'&sig='+$.sig+'&__NS_sig3='+$.sig3+'&__NStokensig='+$.tokensig);
	let _0x529ab1={'url':url,'body':body,'headers':{'Host':'api.e.kuaishou.com','Connection':'keep-alive','User-Agent':'kwai-android aegon/3.4.2','Accept-Language':'zh-cn','Content-Type':'application/x-www-form-urlencoded','Accept-Encoding':'gzip, deflate, br','X-Client-Info':'model=MI 6;os=Android;nqe-score=2;network=WIFI;signal-strength=4;'}};
	return new Promise(_0xc5e37=>{
		$.post(_0x529ab1,async(_0x3e4b23,_0x341c72,_0x4ac999)=>{
			try{
				_0x4ac999=JSON.parse(_0x4ac999);
				if(_0x4ac999.result==1){
					if(_0x4ac999.data.awardAmount){
						console.log('账号  '+$.index+'  ['+$.nickname+']获得'+_0x4ac999.data.awardAmount+'金币');
					}
					if(_0x4ac999.data.amount){
						console.log('账号  '+$.index+'  ['+$.nickname+']获得'+_0x4ac999.data.amount+'金币');
					}
				}else{
					console.log('第【'+$.index+'】个账号领取奖励失败，'+_0x4ac999.error_msg);
				}
			}catch(_0xa492d1){
				$.logErr(_0xa492d1,_0x341c72);
			}
			finally{
				_0xc5e37();
			}
		},timeout);
	});
}
async function _0x4fc578(_0xb4763d,_0x64ab85,_0xf8099,_0x30f356,_0x18e2ee=3*1000){
	let _0x2c1cb5='';
	if(_0x30f356=='zhibo'){
		_0x2c1cb5='bizStr={"businessId":75,"endTime":'+_0x64ab85+',"extParams":"56dfe31594b858e69ef613f5e97227fbd5f9da00aa5144df8830a5781ae07d7cfaf4d95abc2510c950f99404a9e0bf62f5b5765a867c385685e0570ed76b858a159dacd55e41e4a9813db4e619a8b092","mediaScene":"video","neoInfos":[{"creativeId":21876287785,"extInfo":"","llsid":'+_0xf8099+',"taskType":1}],"pageId":100012068,"posId":6765,"startTime":'+_0xb4763d+',"subPageId":100015089}';
	}else if(_0x30f356=='161-1'){
		if($.index<=$.fenge){
			_0x2c1cb5='bizStr={"businessId":161,"endTime":'+_0x64ab85+',"extParams":"56dfe31594b858e69ef613f5e97227fbd4ab96cb9fa6000119ec3d6ebf88ee730d3f30cdc1c9029a523453210de5e4922eaf1032a200b76e58f4d1ce8fbb571da3cc6b1f11f37f9adfda67b633b46692","mediaScene":"video","neoInfos":[{"creativeId":'+random(20000001997,22999991997)+',"extInfo":"","llsid":'+_0xf8099+',"taskType":1}],"pageId":11101,"posId":4684,"startTime":'+_0xb4763d+',"subPageId":100013628}';
		}else{
			_0x2c1cb5='bizStr={"businessId":161,"endTime":'+_0x64ab85+',"extParams":"56dfe31594b858e69ef613f5e97227fbd4ab96cb9fa6000119ec3d6ebf88ee730d3f30cdc1c9029a523453210de5e4922eaf1032a200b76e58f4d1ce8fbb571da3cc6b1f11f37f9adfda67b633b46692","mediaScene":"video","neoInfos":[{"creativeId":'+random(20000001997,22999991997)+',"extInfo":"","llsid":'+_0xf8099+',"taskType":1}],"pageId":11101,"posId":4684,"startTime":'+_0xb4763d+',"subPageId":100013628}';
		}
	}else if(_0x30f356=='161-2'){
		if($.index<=$.fenge){
			_0x2c1cb5='bizStr={"businessId":161,"endTime":'+_0x64ab85+',"extParams":"56dfe31594b858e69ef613f5e97227fbdcb463ff3c43b7da970d0eb459638c81047212c9a2874296c575bde17961401b04335bac733b92fbb70aa26a45b731bb95b2c94fef41d61e3650fa61b6440b32","mediaScene":"video","neoInfos":[{"creativeId":'+random(20000001997,22999991997)+',"extInfo":"","llsid":'+_0xf8099+',"taskType":1}],"pageId":11101,"posId":4685,"startTime":'+_0xb4763d+',"subPageId":100013628}';
		}else{
			_0x2c1cb5='bizStr={"businessId":161,"endTime":'+_0x64ab85+',"extParams":"56dfe31594b858e69ef613f5e97227fbe097a4a092b07f22caafe3f8a466f881c3212b59181e06f9ed9538c157c7e5b0ccffb60e02e288420598440828940ccc3abbfe580c5bf04df66eaf3e58769fd0","mediaScene":"video","neoInfos":[{"creativeId":'+random(20000001997,22999991997)+',"extInfo":"","llsid":'+_0xf8099+',"taskType":1}],"pageId":11101,"posId":4685,"startTime":'+_0xb4763d+',"subPageId":100013628}';
		}
	}else if(_0x30f356=='11-1'){
		if($.index<=$.fenge){
			_0x2c1cb5='bizStr={"businessId":11,"endTime":'+_0x64ab85+',"extParams":"56dfe31594b858e69ef613f5e97227fbdcb463ff3c43b7da970d0eb459638c81047212c9a2874296c575bde17961401b04335bac733b92fbb70aa26a45b731bb95b2c94fef41d61e3650fa61b6440b32","mediaScene":"video","neoInfos":[{"creativeId":'+random(20000001997,22999991997)+',"extInfo":"","llsid":'+_0xf8099+',"taskType":1}],"pageId":11101,"posId":4684,"startTime":'+_0xb4763d+',"subPageId":100013628}';
		}else{
			_0x2c1cb5='bizStr={"businessId":11,"endTime":'+_0x64ab85+',"extParams":"56dfe31594b858e69ef613f5e97227fbe097a4a092b07f22caafe3f8a466f881c3212b59181e06f9ed9538c157c7e5b0ccffb60e02e288420598440828940ccc3abbfe580c5bf04df66eaf3e58769fd0","mediaScene":"video","neoInfos":[{"creativeId":'+random(20000001997,22999991997)+',"extInfo":"","llsid":'+_0xf8099+',"taskType":1}],"pageId":11101,"posId":4684,"startTime":'+_0xb4763d+',"subPageId":100013628}';
		}
	}else if(_0x30f356=='11-2'){
		if($.index<=$.fenge){
			_0x2c1cb5='bizStr={"businessId":11,"endTime":'+_0x64ab85+',"extParams":"56dfe31594b858e69ef613f5e97227fbdcb463ff3c43b7da970d0eb459638c81047212c9a2874296c575bde17961401b04335bac733b92fbb70aa26a45b731bb95b2c94fef41d61e3650fa61b6440b32","mediaScene":"video","neoInfos":[{"creativeId":'+random(20000001997,22999991997)+',"extInfo":"","llsid":'+_0xf8099+',"taskType":1}],"pageId":11101,"posId":4685,"startTime":'+_0xb4763d+',"subPageId":100013628}';
		}else{
			_0x2c1cb5='bizStr={"businessId":11,"endTime":'+_0x64ab85+',"extParams":"56dfe31594b858e69ef613f5e97227fbe097a4a092b07f22caafe3f8a466f881c3212b59181e06f9ed9538c157c7e5b0ccffb60e02e288420598440828940ccc3abbfe580c5bf04df66eaf3e58769fd0","mediaScene":"video","neoInfos":[{"creativeId":'+random(20000001997,22999991997)+',"extInfo":"","llsid":'+_0xf8099+',"taskType":1}],"pageId":11101,"posId":4685,"startTime":'+_0xb4763d+',"subPageId":100013628}';
		}
	}else if(_0x30f356=='lott'){
		_0x2c1cb5='bizStr={"businessId":161,"endTime":'+_0x64ab85+',"extParams":"56dfe31594b858e69ef613f5e97227fbc7b4adb59060f8b57992dbd5cfdde59d19704f3df5df67acf27d0e98a7b6f0cbbe624cfa294b7d1826d8d2053b164ca92e26340e075bb546a4cab639e79e0936","mediaScene":"video","neoInfos":[{"creativeId":'+random(20000001997,22999991997)+',"extInfo":"","llsid":'+_0xf8099+',"taskType":1}],"pageId":11101,"posId":4685,"startTime":'+_0xb4763d+',"subPageId":100013630}';
	}else if(_0x30f356=='20'){
		_0x2c1cb5='bizStr={"businessId":161,"endTime":'+_0x64ab85+',"extParams":"56dfe31594b858e69ef613f5e97227fb80029addcedc57d8114a19aceff4b5a4dbcaa81ee7101dfbc3c475fa19d1a6979c16ac3acaa082cf3690637b103bab58a4b6470802d248e78d563972c0dbc7ad","mediaScene":"video","neoInfos":[{"creativeId":'+random(20000001997,22999991997)+',"extInfo":"","llsid":'+_0xf8099+',"taskType":1}],"pageId":11101,"posId":4684,"startTime":'+_0xb4763d+',"subPageId":100013629}';
	}else if(_0x30f356=='173'){
		_0x2c1cb5='bizStr={"businessId":173,"endTime":'+_0x64ab85+',"extParams":"c420ebd0b4115dfd4e8e4e1b2505cec54b818d1db57fb787e891ad3b910455939209de453184b81970ba3e10e1c369534bfc8270c59d1fd17e95f00d957573a7062fcc83445ea3ba339cb9c5cfb7f5aa5a53092304fb60503e76578a34adaae01312eb2731928baf9db45ead011bc4496e4c6d767a2d54270a2b30cec5c57a5854a16c2fdf68148e9efb7e1ff1d83086","mediaScene":"video","neoInfos":[{"creativeId":23799209984,"extInfo":"","llsid":'+_0xf8099+',"taskType":1}],"pageId":11101,"posId":5685,"startTime":'+_0xb4763d+',"subPageId":100014361}';
	}else{
		_0x2c1cb5='bizStr={"businessId":'+_0x30f356+',"endTime":'+_0x64ab85+',"extParams":"56dfe31594b858e69ef613f5e97227fb02f1c8305a022e731b19317aa8b8f1fc4e68b5f6b346e62dade3545f285630556b0fd3c366406646a28bdd7a3889ca5b1bd5be22786fb5f8de8fc684d491e8e0","mediaScene":"video","neoInfos":[{"creativeId":22587646206,"extInfo":"","llsid":'+_0xf8099+',"taskType":1}],"pageId":11101,"posId":4684,"startTime":'+_0xb4763d+',"subPageId":100013629}';
	}
	let map2='';
	let map1='';
	map2=_0x2c1cb5+'&cs=false&client_key=2ac2a76d&os=android&kuaishou.api_st='+$.apist+'&uQaTag=2';
	map1=await getMap('mod=Xiaomi(MI 6)&appver=10.3.31.3276&isp=&language=zh-cn&ud='+$.ud+'&did_tag=7&egid=DFP8E053D864EE0728066E793AC38D7E643F46C9BB44B370864D1D21BD50169D&net=WIFI&kcv=1458&app=0&kpf=ANDROID_PHONE&bottom_navigation=true&ver=10.3&oDid=TEST_'+$.didi+'&android_os=0&boardPlatform=msm8998&kpn=NEBULA&androidApiLevel=28&newOc=XIAOMI&slh=0&country_code=cn&nbh=0&hotfix_ver=&did_gt=1651488299251&keyconfig_state=2&sys=ANDROID_9&max_memory=256&cold_launch_time_ms=1652722195854&oc=XIAOMI&sh=1920&app_status=3&ddpi=480&deviceBit=0&browseType=3&power_mode=0&socName=Qualcomm MSM8998&is_background=0&c=XIAOMI&sw=1080&ftt=&apptype=22&abi=arm64&userRecoBit=0&device_abi=arm64&totalMemory=5724&grant_browse_type=AUTHORIZED&iuid=&rdid='+$.didi+'&sbh=72&darkMode=false&did='+$.didi,map2);
	$.sig3='';
	await getsig(map1,''+$.salt,'/rest/r/ad/task/report');
	if($.sig3==''){
		for(let i=0;i<5;i++){
			console.log('账号  '+$.index+'  ['+$.nickname+']Api[1]访问失败，开始重试'+(i+1)+'/5');
			await $.wait(2000);
			await getsig(map1,''+$.salt,'/rest/r/ad/task/report');
			if($.sig3!=''){
				break;
			}
		}
	}
	if($.sig3==''){
		console.log('开始请求Api[2]');
		await getsig2(map1,''+$.salt,'/rest/r/ad/task/report');
		if($.sig3==''){
			for(let i=0;i<5;i++){
				console.log('账号  '+$.index+'  ['+$.nickname+']Api[2]访问失败，开始重试'+(i+1)+'/5');
				await $.wait(2000);
				await getsig2(map1,''+$.salt,'/rest/r/ad/task/report');
				if($.sig3!=''){
					break;
				}
			}
		}
	}
	if($.sig3==''){
		console.log('请求Api失败，防止浪费奖励次数，停止运行。');
		await _0x1ae1cd('Api重试请求失败了！请联系作者。当前运行到第[ '+$.index+' ]个账号[ '+$.nickname+' ]');
		process.exit(0);
	}
	map2=(map2+'&sig='+$.sig+'&__NS_sig3='+$.sig3+'&__NStokensig='+$.tokensig);
	let _0x515f1f={'url':'https://api2.e.kuaishou.com/rest/r/ad/task/report?mod=Xiaomi%28MI%206%29&appver=10.3.31.3276&isp=&language=zh-cn&ud='+$.ud+'&did_tag=7&egid=DFP8E053D864EE0728066E793AC38D7E643F46C9BB44B370864D1D21BD50169D&net=WIFI&kcv=1458&app=0&kpf=ANDROID_PHONE&bottom_navigation=true&ver=10.3&oDid=TEST_'+$.didi+'&android_os=0&boardPlatform=msm8998&kpn=NEBULA&androidApiLevel=28&newOc=XIAOMI&slh=0&country_code=cn&nbh=0&hotfix_ver=&did_gt=1651488299251&keyconfig_state=2&sys=ANDROID_9&max_memory=256&cold_launch_time_ms=1652722195854&oc=XIAOMI&sh=1920&app_status=3&ddpi=480&deviceBit=0&browseType=3&power_mode=0&socName=Qualcomm MSM8998&is_background=0&c=XIAOMI&sw=1080&ftt=&apptype=22&abi=arm64&userRecoBit=0&device_abi=arm64&totalMemory=5724&grant_browse_type=AUTHORIZED&iuid=&rdid='+$.didi+'&sbh=72&darkMode=false&did='+$.didi,'body':map2,'headers':{'Host':'api2.e.kuaishou.com','Connection':'keep-alive','User-Agent':'kwai-android aegon/3.4.2','Accept-Language':'zh-cn','Content-Type':'application/x-www-form-urlencoded','Accept-Encoding':'gzip, deflate, br','X-Client-Info':'model=MI 6;os=Android;nqe-score=2;network=WIFI;signal-strength=4;'}};
	return new Promise(_0x228b77=>{
		$.post(_0x515f1f,async(_0x1282e8,_0x439336,_0x454459)=>{
			try{
				_0x454459=JSON.parse(_0x454459);
				if(_0x454459.result==1){
					if(_0x30f356=='173'){
						console.log('账号  '+$.index+'  ['+$.nickname+']获得'+_0x454459.data.neoAmount+'金币');
					}else{
						console.log('账号  '+$.index+'  ['+$.nickname+']获得'+_0x454459.data.neoAmount+'金币');
					}
					if(_0x454459.data.neoAmount==0){
						if(_0x30f356=='161-1'){
							$.sp_161=false;
						}
						if(_0x30f356=='11-1'){
							$.sp_11=false;
						}if(_0x30f356=='161-2'){
							$.sp_161=false;
						}if(_0x30f356=='11-2'){
							$.sp_11=false;
						}if(_0x30f356=='11'){
							$.sp_11_80=false;
						}if(_0x30f356=='20'){
							$.sp_161_80=false;
						}if(_0x30f356=='259'){
							$.sp_259=false;
						}if(_0x30f356=='173'){
							$.sp_173=false;
						}
					}
				}else if(_0x454459.message=='今日奖励领完啦, 明日继续来吧'){
					if(_0x30f356=='161-1'){
						$.sp_161=false;
					}
					if(_0x30f356=='11-1'){
						$.sp_11=false;
					}
					if(_0x30f356=='161-2'){
						$.sp_161=false;
					}
					if(_0x30f356=='11-2'){
						$.sp_11=false;
					}
					if(_0x30f356=='11'){
						$.sp_11_80=false;
					}
					if(_0x30f356=='20'){
						$.sp_161_80=false;
					}
					if(_0x30f356=='259'){
						$.sp_259=false;
					}
					if(_0x30f356=='173'){
						$.sp_173=false;
					}
					console.log('第【'+$.index+'】个账号领取奖励失败，'+_0x454459.error_msg);
				}else{
					console.log('第【'+$.index+'】个账号领取奖励失败，'+_0x454459.error_msg);
				}
			}catch(_0xd72bd7){
				$.logErr(_0xd72bd7,_0x439336);
			}
			finally{
				_0x228b77();
			}
		},_0x18e2ee);
	});
}
async function getsig(body,client_salt,uri,_0x2e734a=10*1000){
	return new Promise(_0x147620=>{
		let req={'url':'http://101.42.95.176:9090/getSig1','headers':{'Content-Type':'application/json'}, 'body': JSON.stringify({'body':body,'client_salt':client_salt, 'url': uri})};
		$.post(req,async(k,info,rsp)=>{
			try{
                rsp = JSON.parse(rsp)
				if(rsp.code==200){
					if(rsp.data.sig){
						$.sig=rsp.data.sig;
						$.sig3=rsp.data.sig3;
						$.tokensig=rsp.data.tokensig;
						$.signum=rsp.data.signum;
						console.log('账号  '+$.index+'  ['+$.nickname+']当前Api剩余请求次数：'+ $.signum);
					}
				}else{}
			}catch(_0x1a468a){
				$.logErr(_0x1a468a,info);
			}
			finally{
				_0x147620();
			}
		},_0x2e734a);
	});
}
async function getsig2(body,client_salt,uri,_0x2afecd=3*1000){
	return new Promise(_0x2a03db=>{
		let _0xaa862b={'url':'http://101.42.95.176:9090/getSig1','headers': {"Content-Type": "application/json"},'body':JSON.stringify({'body':body,'client_salt':client_salt, 'url': uri})};
		$.post(_0xaa862b,async(k,info,rsp)=>{
			try{
				rsp = JSON.parse(rsp)
				if(rsp.code==200){
					if(rsp.data.sig){
						$.sig=rsp.data.sig;
						$.sig3=rsp.data.sig3;
						$.tokensig=rsp.data.tokensig;
						$.signum=rsp.data.signum;
						console.log('账号  '+$.index+'  ['+$.nickname+']当前Api剩余请求次数：'+ $.signum);
					}
				}else{}
			}catch(_0x2c6048){
				$.logErr(_0x2c6048,info);
			}
			finally{
				_0x2a03db();
			}
		},_0x2afecd);
	});
}
async function _0x1cf9e9(_0x39350a=3*1000){
	return new Promise(_0x184aa9=>{
		let _0x5afc46={'url':'https://nebula.kuaishou.com/rest/n/nebula/cashSign/goldenAreaTaskSignIn','headers':{'Accept-Encoding':'gzip, deflate','Cookie':$.cookie,'Connection':'keep-alive','Accept':'*/*','Host':'nebula.kuaishou.com','Accept-Language':'en-us','User-Agent':'Kwai-android aegon/3.4.0'}};
		$.get(_0x5afc46,async(_0x57a820,_0x212858,_0x2e9b8c)=>{
			try{
				_0x2e9b8c=JSON.parse(_0x2e9b8c);
				console.log(_0x2e9b8c);
				if(_0x2e9b8c.result==1){}else{
					console.log('第【'+$.index+'】个账号获取签到信息失败，'+_0x2e9b8c.error_msg);
				}
			}catch(_0x221b7c){
				$.logErr(_0x221b7c,_0x212858);
			}
			finally{
				_0x184aa9();
			}
		},_0x39350a);
	});
}
async function _0x18c617(_0x44743f=3*1000){
	return new Promise(_0x5dc6f6=>{
		let _0xb65933={'url':'https://api.e.kuaishou.com/rest/e/v1/reward/ad?kpf=ANDROID_PHONE&kpn=NEBULA','body':''+$.enc,'headers':{'Accept-Encoding':'gzip, deflate','Connection':'keep-alive','Accept':'*/*','Accept-Language':'en-us','User-Agent':'Kwai-android aegon/3.4.0'}};
		$.post(_0xb65933,async(_0x145abb,_0x3347fb,_0x3a182b)=>{
			try{
				_0x3a182b=JSON.parse(_0x3a182b);
				if((_0x3a182b.result==1)&&_0x3a182b.llsid){
					$.lid=_0x3a182b.llsid;
					let _0x16d923=random(5,8);
				}else{
					$.lid='0';
				}
				$.lid='200'+random(1000553820678945,8999953820679999);
				let _0x1bdc4e=random(3,5);
				await $.wait(_0x1bdc4e*1000);
			}catch(_0x40352b){
				$.logErr(_0x40352b,_0x3347fb);
			}
			finally{
				_0x5dc6f6();
			}
		},_0x44743f);
	});
}
async function _0x1ae1cd(_0x21c4f6){
	if(!_0x21c4f6)return;
	if(Notify>0){
		if($.isNode()){
			var _0x5db4ca=require('./sendNotify');
			await _0x5db4ca.sendNotify($.name,_0x21c4f6);
		}else{
			$.msg(_0x21c4f6);
		}
	}else{
		console.log(_0x21c4f6);
	}
}
function _0x27307e(_0x3639c9){
	_0x3639c9=(_0x3639c9||16);
	var _0x4e25c4='abcdef1234567890',_0x8c9f5d=_0x4e25c4.length,_0x1026b7='';
	for(i=0;i<_0x3639c9;i++)_0x1026b7+=_0x4e25c4.charAt(Math.floor(Math.random()*_0x8c9f5d));
	return _0x1026b7;
}
function random(int1,int2){
	return Math.round(Math.random()*int2-int1+int1);
}
async function _0x3868a8(_0x28f2d4){
	let _0x1f2659=Buffer.from(_0x28f2d4,'base64').toString();
	return _0x1f2659;
};
function Env(t,e){
	"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);
	class s{
		constructor(t){
			this.env=t
		}send(t,e="GET"){
			t="string"==typeof t?{url:t}:t;
			let s=this.get;
			return "POST"===e&&(s=this.post),new Promise((e,i)=>{
				s.call(this,t,(t,s,r)=>{t?i(t):e(s)})
			})
		}get(t){
			return this.send.call(this.env,t)
		}post(t){
			return this.send.call(this.env,t,"POST")
		}
	}return new class{
		constructor(t,e){
			this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)
		}isNode(){
			return "undefined"!=typeof module&&!!module.exports
		}isQuanX(){
			return "undefined"!=typeof $task
		}isSurge(){
			return "undefined"!=typeof $httpClient&&"undefined"==typeof $loon
		}isLoon(){
			return "undefined"!=typeof $loon
		}toObj(t,e=null){
			try{
				return JSON.parse(t)
			}catch{
				return e
			}
		}toStr(t,e=null){
			try{
				return JSON.stringify(t)
			}catch{
				return e
			}
		}getjson(t,e){
			let s=e;
			const i=this.getdata(t);
			if(i)try{
				s=JSON.parse(this.getdata(t))
			}catch{}return s
		}setjson(t,e){
			try{
				return this.setdata(JSON.stringify(t),e)
			}catch{
				return!1
			}
		}getScript(t){
			return new Promise(e=>{
				this.get({url:t},(t,s,i)=>e(i))
			})
		}runScript(t,e){
			return new Promise(s=>{
				let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");
				i=i?i.replace(/\n/g,"").trim():i;
				let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
				r=r?1*r:20,r=e&&e.timeout?e.timeout:r;
				const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};
				this.post(n,(t,e,i)=>s(i))
			}).catch(t=>this.logErr(t))
		}loaddata(){
			if(!this.isNode())return{};
			{
				this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");
				const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);
				if(!s&&!i)return{};
				{
					const i=s?t:e;
					try{
						return JSON.parse(this.fs.readFileSync(i))
					}catch(t){
						return{}
					}
				}
			}
		}writedata(){
			if(this.isNode()){
				this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");
				const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);
				s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)
			}
		}lodash_get(t,e,s){
			const i=e.replace(/\[(\d+)\]/g,".$1").split(".");
			let r=t;
			for(const t of i)if(r=Object(r)[t],void 0===r)return s;
			return r
		}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){
			let e=this.getval(t);
			if(/^@/.test(t)){
				const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";
				if(r)try{
					const t=JSON.parse(r);
					e=t?this.lodash_get(t,i,""):e
				}catch(t){
					e=""
				}
			}return e
		}setdata(t,e){
			let s=!1;
			if(/^@/.test(e)){
				const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";
				try{
					const e=JSON.parse(h);
					this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)
				}catch(e){
					const o={};
					this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)
				}
			}else s=this.setval(t,e);
			return s
		}getval(t){
			return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null
		}setval(t,e){
			return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null
		}initGotEnv(t){
			this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))
		}get(t,e=(()=>{})){
			t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{
				!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)
			})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{
				const{statusCode:s,statusCode:i,headers:r,body:o}=t;
				e(null,{status:s,statusCode:i,headers:r,body:o},o)
			},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{
				try{
					if(t.headers["set-cookie"]){
						const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
						s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar
					}
				}catch(t){
					this.logErr(t)
				}
			}).then(t=>{
				const{statusCode:s,statusCode:i,headers:r,body:o}=t;
				e(null,{status:s,statusCode:i,headers:r,body:o},o)
			},t=>{
				const{message:s,response:i}=t;
				e(s,i,i&&i.body)
			}))
		}post(t,e=(()=>{})){
			if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{
				!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)
			});
            else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{
				const{statusCode:s,statusCode:i,headers:r,body:o}=t;
				e(null,{status:s,statusCode:i,headers:r,body:o},o)
			},t=>e(t));else if(this.isNode()){
				this.initGotEnv(t);
				const{
					url:s,...i
				}=t;
				this.got.post(s,i).then(t=>{
					const{statusCode:s,statusCode:i,headers:r,body:o}=t;
					e(null,{status:s,statusCode:i,headers:r,body:o},o)
				},t=>{
					const{message:s,response:i}=t;
					e(s,i,i&&i.body)
				})
			}
		}time(t,e=null){
			const s=e?new Date(e):new Date;
			let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};
			/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));
			for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));
			return t
		}msg(e=t,s="",i="",r){
			const o=t=>{
				if(!t)return t;
				if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}
				:this.isSurge()?{url:t}:void 0;
				if("object"==typeof t){
					if(this.isLoon()){
						let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];
						return{openUrl:e,mediaUrl:s}
					}
					if(this.isQuanX()){
						let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;
						return{"open-url":e,"media-url":s}
					}if(this.isSurge()){
						let e=t.url||t.openUrl||t["open-url"];
						return{url:e}
					}
				}
			};
			if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){
				let t=["","==============📣系统通知📣=============="];
				t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)
			}
		}log(...t){
			t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))
		}logErr(t,e){
			const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();
			s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)
		}wait(t){
			return new Promise(e=>setTimeout(e,t))
		}done(t={}){
			const e=(new Date).getTime(),s=(e-this.startTime)/1e3;
			this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)
		}
	}(t,e)
};