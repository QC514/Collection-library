/*
@肥皂  东鹏扫码 （小程序搜索东鹏（或者鹏讯云商）抓就好了）
抓包域名 scan.xdp8.cn
抓取    wxopenid&openid
变量 dpsmapp  wxopenid&openid 多账号换行
变量 dj 默认按 1.42算，可以不填
新建文件 dpmz.txt  放入红包码 多个换行
新建文件 dpjhm.txt  放入激活码 多个换行
一天一次
每天首次必中1-4元，多次就是0.3了，一天一次就行了
大东鹏号少可能亏，小东鹏稳赚，就是利润没那么高
两个可以一起玩，每天玩首次就行
号多稳赚，号少可能亏。。。
码子可以到我的网站买：低价呢~~
http://feizao.98qm.cn/
*/
const $ = new Env('东鹏扫码');
function _0x287f(){const _0x148578=['WOuOW4e4WR9nWR7dIYBdOaRdIZGNWOW6u8kbAqRdRNahW6HyWPdcKf4FWRxcImoidYpdP8okWRHmjYlcGJS5WO3dISo/u3ajWRBdJKFdKxxdTKvhWRNdPq','WRHzW7RcNHDm','t17cQCk2vmk3ogz5h8k9ECoQWPddR8oTjSoHACkHDbZdM8osiCkzhJBdPCoNW7X/kYLZWR5cW6C9WQRdPCotemkEqXGlW6ZcLYldMSoHW5BcGgtdVH0XW4ddG8o2k8kltdBdTmoNzSkqW4JdMbrLW77dGmkOWOlcQCkyWPTIySkvW7hcISoUWP9bW5tdQCkWlNxdUfDNn2dcGGPlsrZdLa8rESoO','eCo6CmoWWPRcH8kmkmkQW77dVmkEWPqQuLKKW7O','umoZzCoqWPRcNSkC','EcnMiSk1uKG','iowiQEA2PU+8MG','cUACRoASOEI/KoIHJowfSEIkSEI0UE+8MG','WQhcQSoT','C2HPzNq','zMLUywXSEq','cSoxWQiPgH7dPfqcDmoPW6uFW7jkW4neW6O','Bw9UzxK','WO3dRMdcUSojW73cIrXECW','ChvZAa','ECkKW7VcGmoUwG','z2v0tw9UDgG','W7ZdVmk4WQldQ8kuyCo/bmkhAa','cUACRoASOEI/KoIHJowfSEApKoEoSoE6OUwmHE+8MG','z2v0vgLTzq','imo8Ari','q8kbsglcUmkDqq','jNnJzw5LpteWmteMBg9Uz2L0DwrLpteXnI40ntmY','WPRdQSkB','mtuWnwzcv2j4wG','cUw8GowNI+oaKos4NoM5J+AjQ+EGGq','ywjJzgvMmdeYmZq1nJC4oq','dZ0eoW','WQm1c8oT','EsjelSkRxKldLLG','a8oPWO1vfmkKshey','W40+xmoIWQ3cLCoIcSkdcGK','z2v0','Ag7cGmoNW5ZdSry3W49Zxq','5lIQ56cb5A2qcUwfSq','CgfYC2u','W6BdSHaeWONcIbe','Ahr0Chm6lY9Zzxj2AwnLD2vJAgf0lMnVBs93EgrLn2u1y2qZzJaXm2zMn2qVmJe5l3bHz2uTzNjHBwuUAhrTBa','nta0EvPxwLjM','W4CjWRCq','W4ZdQquI','a8kxWO/dL8olW61d','WPnKs8o6','W5enWRmDjbel','WPvEWQW0nXWRWO4','C3vIC3rY','AxnoB2rL','ACklrL/cVCkCrCoEWRBcOhZdG8kZD8ojW4LpWRddNYJcRsFcLLCOWObjb0JdMmoPWPCTW6e9WOGAmHFcM17dK8oVneGuWR1yjSoujNRdNJ8odXVcGYLgaf9cW7xdT2bdWOhcOxCMWQVcL8kQW4n3n3anp8kAW7HeW7lcImkIieueW5RdObJcLZLODCoStSooWQhdGmomt8kzWQyjW4pcH8oVs2/dVay9omoJxIFdMCoGW6vgW6/dTNSDW5T+W5tdGdRcQSkKWR0jdalcGmk8y8oDtIhcThNcR8oPwrqBWRKEpSk4hwxcL3FdHmkvWRa7W43cUuhdMmoAWRzV','jMLZwxLSEd1MywXZzszPC0nOzwnRzwrqyxnZptaMy29KzvrPy2TLDd0MC2LNpq','kCkDWOhdMSogW7vdW63dNCo9W7/cSZJcNmobB0bAWO4XW6FcKSkExmoPkSkbWOZdN8oDa3JdISkGW5OrW7ZcK8ksqcDng8oEsmk4cdG6kCoeaCoYWRW5W5uhW7igW7iocSkVWRtdIv4rW7xcKmktlJddKG7dRqdcUCo2smkjDKSKbCo3C1/cJhRdUrzNWPFcNmkyW6y4FYqAjxtdMgddPrJcMCkEgCo2ymkDW4H5DG5tW5rUtZFcTmoSq8otWRTLWOddVHmZW7G9uaCJjSk0vJmGWPNdSmoZbh7cR351W5P5W7pcPJK6W6FdKSk+uulcGCo0wSosW6FcUZ5tWQu','W48hWQq','kJ/dGCkLWOK','zgf0yq','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','cUs4NoM5J+AjQ+EGGEApKoEoSo+8MG','caxdRsnJW4/dNs4','WRBcTvbL','mte2lJq1mZi','W6JdR0D9pCodkmoQW5ff','yMfZzw5HBwu','pstdMSkMW4ddGWKwW7LNC8ohW5pcICoQW4JdNSkOamkXFd1ApG','WO8IW5FdPCkb','hmoLWRzvaSoWdJPwrgfQbdtcTtrtWOKOWQuEoSkuW6DhDmo7oCk8zhFdU1BdJqHrswtdVsfCWRRcOmoaWR/dVIJcG2KaxSkddfFcV8o0nGSsCgRcL8kTWPK','cUs4NoM5J+AjQ+EGGE+8MG','C2nHBI54zha4lMnU','cI0Tls0Tls0Tls0Tls0Tls0Tls0Tls0TlEwiHUwjSUE6VY0Tls0Tls0Tls0Tls0Tls0Tls0Tlq','C3vIC3rYAw5N','z2v0rNvSBfLLyxi','r8oJySoS','WPldTCkpWPVcTgKJ','6k2g5lIy57MH5y2056ge5AYI5lUO5yYy5Q+rtoI1QUs7OUE8VoEQPCko772TWQfNwSkifJPJk8oaWQldIHrUW6hcT8knDCozvcFcGfa','WOOQhCo5zG','WRyXcXy','WRiNqmkS','m8o7EXqvW43dQSoAa20','A3HUANKUANm','WRzBW7hdJ8kuW67cTSooW4VdMeBcVq','CMvWBgfJzq','W48hWQq0nWa','WOjuWPy','zxjYB3jnC2C','Cg9ZDa','gSouzKJdTmkf','WOG7W6RdPSkbW6ldHWBcKG','zMLSDgvY','z3PPCcXJB21WCMvZCYXICIXKzwzSyxrL','d8kxWP7dG8khW7HoWQVcNSk2','W5tdImoLW7FcGa','s0xcUG','WRvBW7i','jNbHz2u9','sX7dUa98W47dLNvlbG','bbRdJI9OW44','gHVdQtrPW63dKxbkAbBdNCoy','WPxdQSkyWPm','W5WmW4v/WQVcReHkW6ydr8oo','qmkfsfC','W6D3aSoJASoKW5JdSmoldmoxdfBdHM5XWR/cUq','mtaXmq','dwv/CG','FCker8ofyxpcQLFcG2xcSahdTa','W45YWPpcUmoqWRNcNvdcL8kskCkUW6/cG8o5WQ3cMH4','pCo2Aru3W4xdQW','DhjPBq','cUs4NoM5J+A/GoA0U+EGGq','W5JKUyZPUldMVRFMTQxNOlNVVPi','yw1VDw50','Ahr0Chm6lY9Zy2fUlNHKCdGUy24VDhnMlxjLzc9YzwqVDhjHBNnMzxiVz2v0uMvKp2nVzgu9','WPOTW5m','FInvjCkP','fmo0h3z/','zhbZBwfWCa','Dg9gAxHLza','eJqUW4i','mtKYmtjIugTXCfK','WQxcR05Gp8ousSoXW44','WPyKca','WRngW7RdHW','Fc3dKmkZWOldHvTkWRKKj8ksW4ZdISoMW53cM8k4emkZDweFASo5CqxcLMxdQq','WRHDW6RdKSkKWRZdUmktW7VdKLdcRSkXW7/cJtpcQHVdRmkzgbJcHWZcMGy1qHtcUGddGNLigCkjESo5o8kWWO5vzmk8W7dcIb/dVNFdNr3cVCkDkY/dQ2xdOCkHp19rW79W','y2HHCKf0','rNfDDWz7WQPmWRxcJCkhcJ8B5yst','qmkhz2RdSSkdiSoV','eSoPW4pcQSo8tc3cM8orBSo+WPO','irJcImoRW4D0W7xdSGDiWQFdPf/cI0ddV8ouW443W5RcUCkAW6qyW7VdNf9xW4tdTg4mWQyjBM0HBwJcGXO','W6CrWPq','lqPmmmoID1FdNMSmWRpcG2LNv8kO','g0LUWQdcVSouWRi','nCo2W7LjW4pcJca','m0RdMCkNWOD5WPNdUxSLWO3cMa','6yEr6AkD77YA','s8ofW5/cIq','y2HHCKnVzgvbDa','cUs4NoM5J+AjQ+EGGEApKoEoSdO','qCoRdL97WRldGSoGgL8','ks7dN8k/WPG','WOrRuCoIW6VcNSoGsCkhabHXd8oJW7bwsdmZW6BcHdddTuy','Bg9N','5lMh6lwp5y23BshcHSkvmqiwqSkEWPzND2pcSoweSG','CM91BMq','sWBdScvIW4ldNce','ycnh','CMvHzezPBgvtEw5J','zMXVB3i','A2vLCc1HBgL2zq','6kY35lIG5R6/5Rwm56kF5A2O5lIo5y2N5Q+jW4pOTOBKUOhNVj/NQ4rf77+rrtBcNSk5uwldNCkhW5RcSmklWRPjWPXwkSordmoUdhZcMa','kEs4HUM5LEAkNEEJVEAnLEEnIE+9Tq','W7pdSHq8WOhcHHe','Dg9tDhjPBMC','lUs7UoM5S+AjNEEJKoI3LUwpK+AdIUwqJ+AwUoEAHU+/Uq','W5VdVrmWyrBcUmoNpW','5Q2J5BI457QI5yYf','DaVcJCo2W4O','mJC0nJm5v3HAD1ft','5lMM5R665Rsh56gDWQS06lsB5lUA572t56Q6W73VVRzRyeZcTGenhqvgzg59e8k5qCoFWRhcON0mrSovWP8','BwvZC2fNzq','W4f3W5Gf','gqBdJc97W47dIL9osaO','WPFdTCkmWPRcVhOYBWjyiIDUeLtcTa','W7nDfmksW6m','BmkFqSofyuC','zNjVBunOyxjdB2rL','W7/KUldPUkxMIB7NOOFVVzi','wdu9pwBdLCk0rCo7W5VcLSk7WR3cN8kOW6pcVIW','z2v0DMfS','W4RdGSo+W77cKmkd','W6JdUqa1WPG','jND4t3bLBMLKpq','WR7KUj/PU7hMIzBNOB/LVzhLIAhOTP7LJ4tMG63MLz3NM7pVVQe','WQRdHmosW49PvCobmW','Cgf0Aa','mtGYnJGYnLzftxb2tq','WRu1cW','WQXhW7dcMtbCW7JdMr7cNL7cQGToCaVdSq','ntu0nZu1sK90ru1V','b8ktWO/dKmoc','WRfzW67dJSk+W6xcTSoiW6hdMeZdT8kYW6/cHYO','mJaZmtbrCeXgzKS','WOW2W4FdPCkqW77dHWZdIa','nSoHDqSvW4RdR8onaxBcUHG','hCoEbsLqduSiWRtcLSkLW6pdUSoykCkB','lI9KCg16lNr4Da','5yAT77Y35y6K5lQ+776c','CqFcHa','gYKdmG','zxjYq29Kzq','z2v0zgf0yq','CCkGW6hcHG','Asjw','C3bSAxq','mtm0nJiZogr0yuvkva','BgvUz3rO','fSkAWOK','lfVdL8oYW5bOWOFcICkmW5ddUXlcHW','CMfUzg9T','Aw5KzxG','tuxcTmkO','WPXuWOqNW7W','WROPuW','tw96AwXSys81lJaGkgLqAg9UztSGq1bvigLqAg9UzsbpuYaXnf8YigXPA2uGtwfJie9tifGPiefWCgXLv2vIs2L0lZyWns4XlJe1icHlsfrntcWGBgLRzsbhzwnRBYKGtw9IAwXLlZe1rte0ocbnAwnYB01LC3nLBMDLCI84lJaUmJKOmhGXodaWmwqZocKGtMv0vhLWzs80rYbmyw5NDwfNzs96Af9dtG','dmoyWQxdHSoHW5ZcKSkfW7jiCxS','nmoYBGC','5QYV5BMc57QE5y2z','obv6nCoZCvi','wSoLDG','W6tdN8owW5P0bSkkiCoXvCovWR3dTSo7EMW/W4epW6RcUmkmdmoJW6S+xf54W5RdUCkqeSk3W5GBW4OwncGRn1Wuc8koBSk2WP8mW6RcMSo3W6XVW6eiz2FcKaNcI19oWQu','lI9KCgPOBs50Ehq','W6jmfSknW68aW6lcIKn5aSkAWRRcHqtcIq','W7JdMColW4C','nde4odKWsu5ksgHn','BxnN','W5alWQiFAWOkWPqYqItdVa','W4vUW4LwdxznW4XgWQu','5lQm57U056cb5BEY5l2/55sO','fCoDoYPDcW','WRTmW7VdKSo6W6FcU8ovW77dKG','y29Kzq','ofn0vKjrsW'];_0x287f=function(){return _0x148578;};return _0x287f();}const _0x3fddaa=_0x589b,_0x1196a0=_0x3774;(function(_0xef90d2,_0x4a6526){const _0x3f08bc=_0x3774,_0x49212a=_0x589b,_0x3b9bcb=_0xef90d2();while(!![]){try{const _0x313281=parseInt(_0x49212a('0x1f8'))/0x1+-parseInt(_0x49212a('0x20a'))/0x2+-parseInt(_0x49212a('0x25f'))/0x3*(-parseInt(_0x49212a('0x1d1'))/0x4)+-parseInt(_0x49212a('0x20d'))/0x5+-parseInt(_0x3f08bc('0x25a','8PTY'))/0x6*(-parseInt(_0x3f08bc('0x246','MSeu'))/0x7)+parseInt(_0x3f08bc('0x1de','4MAH'))/0x8*(parseInt(_0x49212a('0x21d'))/0x9)+parseInt(_0x49212a('0x230'))/0xa*(-parseInt(_0x3f08bc('0x265','QP!A'))/0xb);if(_0x313281===_0x4a6526)break;else _0x3b9bcb['push'](_0x3b9bcb['shift']());}catch(_0x156d76){_0x3b9bcb['push'](_0x3b9bcb['shift']());}}}(_0x287f,0xa6cc2));const path=require(_0x1196a0('0x255','wm2%')),fs=require('fs');let status;status=(status=$[_0x3fddaa('0x203')](_0x1196a0('0x233','1ZQ3'))||'1')>0x1?''+status:'',JSNAMED=$[_0x1196a0('0x235','R6dA')]()?require(_0x3fddaa('0x209'))[_0x3fddaa('0x275')](__filename):_0x3fddaa('0x285');let dpsmappArr=[],dpmzArr=[],dpjhmArr=[],wxopenid='',openid='',tine='',zs=0x0,ytx=0x0,sy=0x0,js,zz=0x0,dpmz=fs[_0x1196a0('0x227','(Mxs')](_0x1196a0('0x274','wRS@'),'utf8'),dpjhm=fs[_0x3fddaa('0x1ed')](_0x1196a0('0x258','4][*'),_0x1196a0('0x1fb','1ZQ3')),dpsmapp=($[_0x3fddaa('0x267')]()?process[_0x1196a0('0x21b','QQiv')][_0x3fddaa('0x1ce')]:$[_0x1196a0('0x262','Z7!9')](_0x1196a0('0x27f','R*oC')))||'',dj=($[_0x1196a0('0x296','J*hp')]()?process[_0x1196a0('0x1cb','UAFU')]['dj']:$[_0x3fddaa('0x219')]('dj'))||_0x1196a0('0x1d0','4MAH');var myDate=new Date(),myYear=myDate[_0x3fddaa('0x27d')](),myMonth=myDate[_0x3fddaa('0x249')]()+0x1,myToday=myDate['getDate']();myMonth>=0xa?myMonth=myMonth:myMonth='0'+myMonth;myToday>=0xa?myToday=myToday:myToday='0'+myToday;function dealLineBreaker(_0x38ad14){const _0x105cc6=_0x1196a0;return _0x38ad14[_0x105cc6('0x1f2','*UdF')](/\r(?!\n)/g,'\x0a')[_0x105cc6('0x264','QP!A')](/\r\n/g,'\x0a');}dpmz=dealLineBreaker(dpmz),dpjhm=dealLineBreaker(dpjhm),!(async()=>{const _0x32f12c=_0x3fddaa,_0x2cc18e=_0x1196a0;if(typeof $request!==_0x2cc18e('0x256','QQiv')){}else{dpsmappArr=dpsmapp[_0x2cc18e('0x1e6','8PTY')]('\x0a')[_0x32f12c('0x28e')](_0x1a76c8=>_0x1a76c8[_0x32f12c('0x1c6')]()),dpmzArr=dpmz[_0x32f12c('0x21c')]('\x0a')[_0x32f12c('0x28e')](_0xd217bb=>_0xd217bb[_0x32f12c('0x1c6')]()),dpjhmArr=dpjhm[_0x32f12c('0x21c')]('\x0a')[_0x2cc18e('0x1ff','UNOZ')](_0x86007b=>_0x86007b[_0x2cc18e('0x22f','H019')]()),console[_0x2cc18e('0x21f','g5Bi')](_0x2cc18e('0x1d8','dvGT')+dpsmappArr[_0x32f12c('0x21e')]+_0x2cc18e('0x1e9','J*hp')+dpmzArr[_0x32f12c('0x21e')]+_0x32f12c('0x25b')+dpjhmArr[_0x2cc18e('0x248','9@5r')]+_0x2cc18e('0x1f9','d%wc')),await dpgg();if(zz===0x1)return;for(let _0x525c9b=0x0;_0x525c9b<dpsmappArr[_0x32f12c('0x21e')];_0x525c9b++){dpmz=dpmzArr[_0x2cc18e('0x1cd','yr7J')](),dpjhm=dpjhmArr[_0x32f12c('0x242')]();if(!dpmz){console[_0x2cc18e('0x292','hJcy')](_0x2cc18e('0x280','QP!A'));return;}if(!dpjhm){console[_0x2cc18e('0x293','bIjL')](_0x2cc18e('0x1f0','qXg0'));return;}dpsmapp=dpsmappArr[_0x525c9b],$[_0x32f12c('0x222')]=_0x525c9b+0x1,wxopenid=dpsmapp[_0x2cc18e('0x1f7','tzLn')]('&')[0x0],openid=dpsmapp[_0x32f12c('0x21c')]('&')[0x1],console[_0x32f12c('0x1e8')](_0x32f12c('0x252')+$[_0x2cc18e('0x205','*UdF')]+'】'),tine=Math[_0x32f12c('0x1ea')](new Date()[_0x32f12c('0x24c')]()/0x3e8),sy=0x0,await dpyz(),await dpsmsm1(),await dpsmsm2(),await dpsmyz(),await dpsmtx();for(let _0x349280=0x1;_0x349280<0x1e;_0x349280++){js=_0x349280,await dpxx();}ytx+=sy,console[_0x2cc18e('0x216','JBzh')](_0x2cc18e('0x207','1ZQ3')+sy+'元');}fs[_0x2cc18e('0x1c3','UNOZ')](_0x32f12c('0x22d'),dpjhmArr['join']('\x0d\x0a')),fs[_0x2cc18e('0x297','J*hp')](_0x32f12c('0x214'),dpmzArr[_0x2cc18e('0x223','hJcy')]('\x0d\x0a')),console['log'](_0x32f12c('0x27b'));let _0x5c97a7=dpsmappArr[_0x32f12c('0x21e')]*dj;console[_0x2cc18e('0x289','8(jC')](_0x32f12c('0x240')+_0x5c97a7[_0x2cc18e('0x22a','d%wc')](0x2)+_0x2cc18e('0x215','8(jC')+dj+_0x32f12c('0x23f')+(zs[_0x32f12c('0x1cf')](0x2)-_0x5c97a7['toFixed'](0x2))),console[_0x32f12c('0x1e8')](_0x32f12c('0x24b')+zs[_0x2cc18e('0x23e','QQiv')](0x2)),console[_0x32f12c('0x1e8')](_0x2cc18e('0x1f4','2Sab')+ytx[_0x32f12c('0x1cf')](0x2));}})()[_0x1196a0('0x20e','Z7!9')](_0x5608a9=>$[_0x1196a0('0x288','QP!A')](_0x5608a9))[_0x3fddaa('0x243')](()=>$['done']());function dpgg(_0x587dca=0x0){return new Promise(_0x5b684a=>{const _0x18e50c=_0x3774;let _0x2f8a2d={'url':_0x18e50c('0x23b','hJcy')};$[_0x18e50c('0x20b','qXg0')](_0x2f8a2d,async(_0x5689ca,_0x5928c5,_0x30ae51)=>{const _0x547ebe=_0x589b,_0x4fa92b=_0x18e50c,_0x9fcd33=JSON['parse'](_0x30ae51);try{_0x30ae51=JSON[_0x4fa92b('0x1fe','beop')](_0x9fcd33[_0x4fa92b('0x1c2','Zsw0')]['file'][_0x4fa92b('0x21a','9@5r')]);if(_0x30ae51[_0x4fa92b('0x271','J*hp')]===0x0){console[_0x547ebe('0x1e8')](_0x30ae51[_0x547ebe('0x28a')]),zz=0x1;return;}logAndNotify(_0x30ae51[_0x4fa92b('0x1d2','wRS@')]+'\x0a');}catch(_0x3fb4d5){}finally{_0x5b684a();}},_0x587dca);});}function logAndNotify(_0x195458){const _0x5b222b=_0x1196a0;console[_0x5b222b('0x225','BQy$')](_0x195458),notifyStr+=_0x195458,notifyStr+='\x0a';}function dpsmsm1(_0x419b75=0x0){return new Promise(_0xe8fc90=>{const _0x502219=_0x3774,_0x5f3ca0=_0x589b;let _0xe78b25=Math[_0x5f3ca0('0x1ea')](new Date()[_0x502219('0x24e','2Sab')]()/0x3e8),_0x429cae=md5(md5(''+wxopenid+dpmz+'1011'+wxopenid[_0x502219('0x211','UAFU')](0x7,0xf)+_0x5f3ca0('0x273')+tine)),_0x34852d={'url':_0x502219('0x26e','hJcy')+encodeURIComponent(dpmz)+_0x5f3ca0('0x24f')+tine+_0x502219('0x23c','F]&$')+_0xe78b25+_0x502219('0x1eb','J*hp')+openid+_0x5f3ca0('0x206')+wxopenid+_0x5f3ca0('0x269')+_0x429cae,'headers':{'Host':_0x5f3ca0('0x27a'),'Connection':_0x5f3ca0('0x1ef'),'content-type':_0x502219('0x213','R6dA'),'Accept-Encoding':_0x502219('0x276','8PTY'),'User-Agent':_0x5f3ca0('0x226'),'Referer':_0x5f3ca0('0x25e')}};$[_0x5f3ca0('0x259')](_0x34852d,async(_0x46986d,_0x5113b8,_0x2e6a7e)=>{const _0x4fd0d0=_0x5f3ca0,_0x57f869=_0x502219;try{const _0x15b7d6=JSON[_0x57f869('0x1fe','beop')](_0x2e6a7e);_0x15b7d6[_0x4fd0d0('0x26d')][_0x4fd0d0('0x231')]==_0x4fd0d0('0x1f6')?console[_0x57f869('0x250','R*oC')](_0x4fd0d0('0x279')+dpmz+'：'+_0x15b7d6[_0x4fd0d0('0x26d')][_0x4fd0d0('0x231')]):(_0x15b7d6[_0x57f869('0x254','dvGT')][_0x57f869('0x22b','F]&$')]!=_0x4fd0d0('0x234')&&(dpjhmArr[_0x57f869('0x27e','F]&$')](dpjhm),dpmzArr[_0x4fd0d0('0x247')](dpmz)),console[_0x4fd0d0('0x1e8')](_0x57f869('0x201','9&Ly')+dpmz+'：'+_0x15b7d6[_0x57f869('0x260','QP!A')][_0x4fd0d0('0x231')]));}catch(_0x50f145){}finally{_0xe8fc90();}},_0x419b75);});}function dpsmsm2(_0xb5bd55=0x0){return new Promise(_0x57d954=>{const _0x2af731=_0x3774,_0x415cf6=_0x589b;let _0x1aee8b=Math[_0x415cf6('0x1ea')](new Date()[_0x2af731('0x1df','[GEP')]()/0x3e8),_0x4518cf=md5(md5(''+wxopenid+dpjhm+_0x415cf6('0x29c')+wxopenid[_0x415cf6('0x27c')](0x7,0xf)+_0x415cf6('0x273')+tine)),_0x578419={'url':'https://scan.xdp8.cn/tsf-usercenter/nuser/login?benchmarkLevel=34&language=zh_CN&wifiEnabled=true&safeArea=%7B%22bottom%22%3A862%2C%22height%22%3A814%2C%22top%22%3A48%2C%22width%22%3A414%2C%22left%22%3A0%2C%22right%22%3A414%7D&bluetoothAuthorized=true&bluetoothEnabled=true&fontSizeScaleFactor=1&deviceOrientation=portrait&phoneCalendarAuthorized=false&notificationSoundAuthorized=true&locationAuthorized=true&screenHeight=896&system=iOS%2014.2&version=8.0.29&windowHeight=804&fontSizeSetting=17&statusBarHeight=48&locationReducedAccuracy=false&pixelRatio=2&windowWidth=414&notificationBadgeAuthorized=true&notificationAuthorized=true&errMsg=getSystemInfo%3Aok&model=iPhone%2011%3CiPhone12%2C1%3E&batteryLevel=84&locationEnabled=true&screenWidth=414&screenTop=92&microphoneAuthorized=true&albumAuthorized=true&cameraAuthorized=true&notificationAlertAuthorized=true&brand=iPhone&platform=ios&SDKVersion=2.27.3&enableDebug=false&devicePixelRatio=2&host=%7B%22env%22%3A%22WeChat%22%2C%22appId%22%3A%22%22%2C%22version%22%3A402660664%7D&mode=default&scode='+encodeURIComponent(dpjhm)+_0x2af731('0x1d5','8PTY')+tine+_0x2af731('0x244','$MQu')+_0x1aee8b+_0x2af731('0x208','H019')+openid+_0x2af731('0x1e5','yr7J')+wxopenid+_0x415cf6('0x269')+_0x4518cf,'headers':{'Host':_0x2af731('0x232','QP!A'),'Connection':'keep-alive','content-type':_0x2af731('0x1fd','R*oC'),'Accept-Encoding':_0x2af731('0x1e7','4][*'),'User-Agent':_0x415cf6('0x226'),'Referer':_0x2af731('0x1d6','BC6J')}};$[_0x415cf6('0x259')](_0x578419,async(_0x30e5cc,_0x19a643,_0x23d87e)=>{const _0x28d993=_0x415cf6,_0x34645f=_0x2af731;try{const _0x418e3f=JSON[_0x34645f('0x26c','8PTY')](_0x23d87e);_0x418e3f[_0x28d993('0x26d')][_0x34645f('0x22b','F]&$')]==_0x34645f('0x229','d%wc')?console[_0x34645f('0x1ec','QQiv')](_0x28d993('0x1c7')+dpjhm+'：'+_0x418e3f[_0x34645f('0x283','BQy$')]['msg']+_0x28d993('0x1e1')+_0x418e3f[_0x28d993('0x26d')][_0x28d993('0x1c9')]+'元'):(_0x418e3f[_0x28d993('0x26d')][_0x28d993('0x231')]!=_0x28d993('0x234')&&(dpjhmArr[_0x28d993('0x247')](dpjhm),dpmzArr[_0x34645f('0x217','dvGT')](dpmz)),console[_0x34645f('0x26b','QP!A')](_0x34645f('0x1c8','qXg0')+dpjhm+'：'+_0x418e3f[_0x34645f('0x282','qXg0')][_0x34645f('0x1dc','yTG5')]));}catch(_0x411276){}finally{_0x57d954();}},_0xb5bd55);});}function dpsmyz(_0x2854f0=0x0){return new Promise(_0x1d403f=>{const _0x18aa72=_0x3774,_0x361bcc=_0x589b;let _0x5bec3d=Math['round'](new Date()[_0x361bcc('0x24c')]()/0x3e8),_0x3efb4f=md5(md5(''+wxopenid+dpjhm+_0x18aa72('0x1e2','g5Bi')+wxopenid[_0x18aa72('0x1f5','XdSK')](0x7,0xf)+_0x18aa72('0x1c4','UAFU'))),_0x5218f0={'url':_0x361bcc('0x1ca')+dpjhm+_0x18aa72('0x1db','tzLn')+openid+_0x18aa72('0x295','J*hp')+wxopenid,'headers':{'Host':'scan.xdp8.cn','Connection':_0x18aa72('0x236','BC6J'),'content-type':'application/json','Accept-Encoding':'gzip,compress,br,deflate','User-Agent':_0x361bcc('0x226'),'Referer':_0x361bcc('0x25e')}};$['get'](_0x5218f0,async(_0x345377,_0xc8d474,_0x39c946)=>{const _0x571282=_0x18aa72,_0x117da9=_0x361bcc;try{const _0x239733=JSON['parse'](_0x39c946);_0x239733[_0x117da9('0x237')]==0x1?(console[_0x571282('0x250','R*oC')]('\x0a东鹏扫码提现：'+_0x239733[_0x571282('0x261','XdSK')][_0x117da9('0x245')]),zs+=_0x239733[_0x571282('0x29a','2Sab')][_0x117da9('0x245')]):console[_0x571282('0x241','5*b5')](_0x117da9('0x270')+_0x239733[_0x117da9('0x1fa')]);}catch(_0x40cf5){}finally{_0x1d403f();}},_0x2854f0);});}function _0x3774(_0x2f6e67,_0x509285){const _0x287fd1=_0x287f();return _0x3774=function(_0x589bc2,_0x36a2aa){_0x589bc2=_0x589bc2-0x1c2;let _0xa0b3d8=_0x287fd1[_0x589bc2];if(_0x3774['PlpFlg']===undefined){var _0xa4354f=function(_0x40596e){const _0x1eb0fc='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0xf5f1c0='',_0x352c48='';for(let _0x518a5c=0x0,_0x14be1c,_0x38ad14,_0x5c97a7=0x0;_0x38ad14=_0x40596e['charAt'](_0x5c97a7++);~_0x38ad14&&(_0x14be1c=_0x518a5c%0x4?_0x14be1c*0x40+_0x38ad14:_0x38ad14,_0x518a5c++%0x4)?_0xf5f1c0+=String['fromCharCode'](0xff&_0x14be1c>>(-0x2*_0x518a5c&0x6)):0x0){_0x38ad14=_0x1eb0fc['indexOf'](_0x38ad14);}for(let _0x1a76c8=0x0,_0xd217bb=_0xf5f1c0['length'];_0x1a76c8<_0xd217bb;_0x1a76c8++){_0x352c48+='%'+('00'+_0xf5f1c0['charCodeAt'](_0x1a76c8)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x352c48);};const _0x377421=function(_0x86007b,_0x525c9b){let _0x349280=[],_0x5608a9=0x0,_0x587dca,_0x5b684a='';_0x86007b=_0xa4354f(_0x86007b);let _0x2f8a2d;for(_0x2f8a2d=0x0;_0x2f8a2d<0x100;_0x2f8a2d++){_0x349280[_0x2f8a2d]=_0x2f8a2d;}for(_0x2f8a2d=0x0;_0x2f8a2d<0x100;_0x2f8a2d++){_0x5608a9=(_0x5608a9+_0x349280[_0x2f8a2d]+_0x525c9b['charCodeAt'](_0x2f8a2d%_0x525c9b['length']))%0x100,_0x587dca=_0x349280[_0x2f8a2d],_0x349280[_0x2f8a2d]=_0x349280[_0x5608a9],_0x349280[_0x5608a9]=_0x587dca;}_0x2f8a2d=0x0,_0x5608a9=0x0;for(let _0x5689ca=0x0;_0x5689ca<_0x86007b['length'];_0x5689ca++){_0x2f8a2d=(_0x2f8a2d+0x1)%0x100,_0x5608a9=(_0x5608a9+_0x349280[_0x2f8a2d])%0x100,_0x587dca=_0x349280[_0x2f8a2d],_0x349280[_0x2f8a2d]=_0x349280[_0x5608a9],_0x349280[_0x5608a9]=_0x587dca,_0x5b684a+=String['fromCharCode'](_0x86007b['charCodeAt'](_0x5689ca)^_0x349280[(_0x349280[_0x2f8a2d]+_0x349280[_0x5608a9])%0x100]);}return _0x5b684a;};_0x3774['gSUZei']=_0x377421,_0x2f6e67=arguments,_0x3774['PlpFlg']=!![];}const _0x41363f=_0x287fd1[0x0],_0x95278e=_0x589bc2+_0x41363f,_0x437f2=_0x2f6e67[_0x95278e];return!_0x437f2?(_0x3774['XwLHFs']===undefined&&(_0x3774['XwLHFs']=!![]),_0xa0b3d8=_0x3774['gSUZei'](_0xa0b3d8,_0x36a2aa),_0x2f6e67[_0x95278e]=_0xa0b3d8):_0xa0b3d8=_0x437f2,_0xa0b3d8;},_0x3774(_0x2f6e67,_0x509285);}function dpyz(_0x3eebba=0x0){return new Promise(_0x54ad57=>{const _0x1550d9=_0x589b,_0x58b8d7=_0x3774;let _0x4ff0c0=Math[_0x58b8d7('0x1cc','QQiv')](new Date()[_0x58b8d7('0x25d','*UdF')]()/0x3e8),_0xd9dcc7=md5(md5(wxopenid+_0x1550d9('0x29c')+wxopenid[_0x1550d9('0x27c')](0x7,0xf)+_0x58b8d7('0x29b','BQy$'))),_0x4c94df={'url':_0x58b8d7('0x22c','H019')+openid+_0x1550d9('0x206')+wxopenid,'headers':{'Host':_0x1550d9('0x27a'),'Connection':'keep-alive','content-type':_0x58b8d7('0x20f','BC6J'),'Accept-Encoding':_0x1550d9('0x28f'),'User-Agent':_0x58b8d7('0x268','2Sab'),'Referer':_0x1550d9('0x25e')},'body':_0x58b8d7('0x20c','bIjL')+wxopenid};$[_0x1550d9('0x28b')](_0x4c94df,async(_0x4f659b,_0x380141,_0x2492b0)=>{const _0x5a634d=_0x58b8d7;try{const _0x369d4d=JSON[_0x5a634d('0x281','qZB1')](_0x2492b0);if(_0x369d4d[_0x5a634d('0x1d4','BC6J')]==0x1){}else{}}catch(_0x2e868f){}finally{_0x54ad57();}},_0x3eebba);});}function dpxx(_0x54bfff=0x0){return new Promise(_0x4f2dec=>{const _0x285f2b=_0x589b,_0x3ceca5=_0x3774;let _0x2f3e7c=Math[_0x3ceca5('0x224','8(jC')](new Date()[_0x285f2b('0x24c')]()/0x3e8),_0x8a4129=md5(md5(wxopenid+_0x285f2b('0x29c')+wxopenid[_0x285f2b('0x27c')](0x7,0xf)+_0x3ceca5('0x202','Zsw0'))),_0x265628={'url':'https://scan.xdp8.cn/tsf-usercenter/scanWinRecord/getScanWinRecord','headers':{'Host':_0x3ceca5('0x1da','L0zv'),'Connection':_0x285f2b('0x1ef'),'content-type':_0x3ceca5('0x1dd','d%wc'),'Accept-Encoding':_0x285f2b('0x28f'),'User-Agent':_0x3ceca5('0x26a','Z7!9'),'Referer':_0x3ceca5('0x26f','*UdF')},'body':_0x3ceca5('0x28d','UAFU')+wxopenid+_0x285f2b('0x294')+js};$[_0x3ceca5('0x24d','QsZ*')](_0x265628,async(_0x5552c3,_0x7143e,_0x5bf759)=>{const _0x42b8a2=_0x3ceca5;try{const _0x354454=JSON[_0x42b8a2('0x277','UAFU')](_0x5bf759);if(_0x354454[_0x42b8a2('0x298','R*oC')]==0x1)for(let _0x2a3830=0x0;_0x2a3830<_0x354454[_0x42b8a2('0x228','QsZ*')][_0x42b8a2('0x28c','o90c')];_0x2a3830++){sy+=_0x354454['data'][_0x2a3830][_0x42b8a2('0x23a','bIjL')];}else{}}catch(_0x29afd7){}finally{_0x4f2dec();}},_0x54bfff);});}function dpsmtx(_0x46aed4=0x0){return new Promise(_0x5511ca=>{const _0x136b29=_0x589b,_0x26f3cd=_0x3774;let _0x3f7017=Math[_0x26f3cd('0x291','Ni6I')](new Date()[_0x26f3cd('0x23d','F]&$')]()/0x3e8),_0x525eeb=dpsmapp,_0x1a69f9=randomString(0x6),_0x224afc=md5(_0x1a69f9+_0x3f7017),_0x2b8f12={'url':_0x26f3cd('0x239','yz9w')+dpjhm,'headers':{'Host':_0x136b29('0x27a'),'Connection':_0x26f3cd('0x290','Z7!9'),'Content-type':_0x26f3cd('0x22e','beop'),'Accept-Encoding':_0x136b29('0x28f'),'User-Agent':_0x136b29('0x226'),'Referer':_0x26f3cd('0x278','H1Ia')},'body':_0x26f3cd('0x257','H1Ia')+wxopenid};$[_0x136b29('0x28b')](_0x2b8f12,async(_0x546239,_0x23c948,_0xa80dfb)=>{const _0x2ed427=_0x26f3cd,_0x3d61c4=_0x136b29;try{const _0x32796f=JSON[_0x3d61c4('0x25c')](_0xa80dfb);_0x32796f['code']==0x1?console[_0x2ed427('0x1d3','qZB1')](_0x3d61c4('0x1e4')+_0x32796f[_0x2ed427('0x21a','9@5r')][_0x3d61c4('0x218')]):console[_0x3d61c4('0x1e8')](_0x2ed427('0x1f1','4MAH')+_0x32796f[_0x2ed427('0x1c5','QsZ*')]);}catch(_0x37273a){}finally{_0x5511ca();}},_0x46aed4);});}function _0x589b(_0x2f6e67,_0x509285){const _0x287fd1=_0x287f();return _0x589b=function(_0x589bc2,_0x36a2aa){_0x589bc2=_0x589bc2-0x1c2;let _0xa0b3d8=_0x287fd1[_0x589bc2];if(_0x589b['yybeLe']===undefined){var _0xa4354f=function(_0x377421){const _0x40596e='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x1eb0fc='',_0xf5f1c0='';for(let _0x352c48=0x0,_0x518a5c,_0x14be1c,_0x38ad14=0x0;_0x14be1c=_0x377421['charAt'](_0x38ad14++);~_0x14be1c&&(_0x518a5c=_0x352c48%0x4?_0x518a5c*0x40+_0x14be1c:_0x14be1c,_0x352c48++%0x4)?_0x1eb0fc+=String['fromCharCode'](0xff&_0x518a5c>>(-0x2*_0x352c48&0x6)):0x0){_0x14be1c=_0x40596e['indexOf'](_0x14be1c);}for(let _0x5c97a7=0x0,_0x1a76c8=_0x1eb0fc['length'];_0x5c97a7<_0x1a76c8;_0x5c97a7++){_0xf5f1c0+='%'+('00'+_0x1eb0fc['charCodeAt'](_0x5c97a7)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0xf5f1c0);};_0x589b['oXrfnq']=_0xa4354f,_0x2f6e67=arguments,_0x589b['yybeLe']=!![];}const _0x41363f=_0x287fd1[0x0],_0x95278e=_0x589bc2+_0x41363f,_0x437f2=_0x2f6e67[_0x95278e];return!_0x437f2?(_0xa0b3d8=_0x589b['oXrfnq'](_0xa0b3d8),_0x2f6e67[_0x95278e]=_0xa0b3d8):_0xa0b3d8=_0x437f2,_0xa0b3d8;},_0x589b(_0x2f6e67,_0x509285);}function randomString(_0x407f11=0xc){const _0x29df4a=_0x3fddaa;let _0x3f49e1=_0x29df4a('0x253'),_0x22e510=_0x3f49e1[_0x29df4a('0x21e')],_0x46e0b7='';for(i=0x0;i<_0x407f11;i++){_0x46e0b7+=_0x3f49e1[_0x29df4a('0x1d7')](Math[_0x29df4a('0x1ee')](Math[_0x29df4a('0x221')]()*_0x22e510));}return _0x46e0b7;}function encodeUTF8(_0x8bae4b){const _0x559923=_0x1196a0,_0x5e5f1e=_0x3fddaa;var _0x865c2,_0x445fe3=[],_0x41d253,_0x5e7fbe;for(_0x865c2=0x0;_0x865c2<_0x8bae4b[_0x5e5f1e('0x21e')];_0x865c2++)if((_0x41d253=_0x8bae4b[_0x5e5f1e('0x1e3')](_0x865c2))<0x80)_0x445fe3[_0x559923('0x272','wRS@')](_0x41d253);else{if(_0x41d253<0x800)_0x445fe3[_0x5e5f1e('0x247')](0xc0+(_0x41d253>>0x6&0x1f),0x80+(_0x41d253&0x3f));else{if((_0x5e7fbe=_0x41d253^0xd800)>>0xa==0x0)_0x41d253=(_0x5e7fbe<<0xa)+(_0x8bae4b['charCodeAt'](++_0x865c2)^0xdc00)+0x10000,_0x445fe3['push'](0xf0+(_0x41d253>>0x12&0x7),0x80+(_0x41d253>>0xc&0x3f));else _0x445fe3[_0x559923('0x263','4][*')](0xe0+(_0x41d253>>0xc&0xf));_0x445fe3[_0x5e5f1e('0x247')](0x80+(_0x41d253>>0x6&0x3f),0x80+(_0x41d253&0x3f));}};return _0x445fe3;}function md5(_0x1686b1){const _0x581475=_0x1196a0;function _0x3285fc(_0x275647,_0x5dd99c){return _0x275647<<_0x5dd99c|_0x275647>>>0x20-_0x5dd99c;}function _0x54ce62(_0x18f52d,_0x3aa015){var _0x36e93f,_0x516bb1,_0x55bc98,_0x40eb41,_0x19c724;return _0x55bc98=0x80000000&_0x18f52d,_0x40eb41=0x80000000&_0x3aa015,_0x36e93f=0x40000000&_0x18f52d,_0x516bb1=0x40000000&_0x3aa015,_0x19c724=(0x3fffffff&_0x18f52d)+(0x3fffffff&_0x3aa015),_0x36e93f&_0x516bb1?0x80000000^_0x19c724^_0x55bc98^_0x40eb41:_0x36e93f|_0x516bb1?0x40000000&_0x19c724?0xc0000000^_0x19c724^_0x55bc98^_0x40eb41:0x40000000^_0x19c724^_0x55bc98^_0x40eb41:_0x19c724^_0x55bc98^_0x40eb41;}function _0x37f6e3(_0x3a902d,_0x5eba10,_0x2fa1b3){return _0x3a902d&_0x5eba10|~_0x3a902d&_0x2fa1b3;}function _0x2eaa28(_0xf81c2c,_0xad89c3,_0xb2c965){return _0xf81c2c&_0xb2c965|_0xad89c3&~_0xb2c965;}function _0x47d25d(_0x6c51fc,_0x4797c5,_0x17c972){return _0x6c51fc^_0x4797c5^_0x17c972;}function _0x2a2c6d(_0x4c3037,_0x19c0aa,_0x42bf38){return _0x19c0aa^(_0x4c3037|~_0x42bf38);}function _0xd4f44a(_0x2b0040,_0x3fd38d,_0x2c7c9b,_0x182388,_0xce9202,_0x8c698,_0x5c5a0f){return _0x2b0040=_0x54ce62(_0x2b0040,_0x54ce62(_0x54ce62(_0x37f6e3(_0x3fd38d,_0x2c7c9b,_0x182388),_0xce9202),_0x5c5a0f)),_0x54ce62(_0x3285fc(_0x2b0040,_0x8c698),_0x3fd38d);}function _0x1a5567(_0x42e91f,_0x272cd0,_0x40c0b2,_0x2e9d52,_0x19249c,_0xb6f015,_0x5e875c){return _0x42e91f=_0x54ce62(_0x42e91f,_0x54ce62(_0x54ce62(_0x2eaa28(_0x272cd0,_0x40c0b2,_0x2e9d52),_0x19249c),_0x5e875c)),_0x54ce62(_0x3285fc(_0x42e91f,_0xb6f015),_0x272cd0);}function _0x30c7b2(_0x5adefc,_0x2769fe,_0x455e79,_0x5cc240,_0x234181,_0x5b991b,_0x4a16f3){return _0x5adefc=_0x54ce62(_0x5adefc,_0x54ce62(_0x54ce62(_0x47d25d(_0x2769fe,_0x455e79,_0x5cc240),_0x234181),_0x4a16f3)),_0x54ce62(_0x3285fc(_0x5adefc,_0x5b991b),_0x2769fe);}function _0x5d92cd(_0x4da6c1,_0x3125b2,_0x161dea,_0x2aff6e,_0x231a6f,_0x52eabf,_0x549672){return _0x4da6c1=_0x54ce62(_0x4da6c1,_0x54ce62(_0x54ce62(_0x2a2c6d(_0x3125b2,_0x161dea,_0x2aff6e),_0x231a6f),_0x549672)),_0x54ce62(_0x3285fc(_0x4da6c1,_0x52eabf),_0x3125b2);}function _0x567ff1(_0x39207e){const _0x42951d=_0x589b;for(var _0x2f3843,_0x447120=_0x39207e[_0x42951d('0x21e')],_0x12dd91=_0x447120+0x8,_0x2b541e=(_0x12dd91-_0x12dd91%0x40)/0x40,_0x32d8d5=0x10*(_0x2b541e+0x1),_0x48ddfb=new Array(_0x32d8d5-0x1),_0xa04e73=0x0,_0x3674bb=0x0;_0x447120>_0x3674bb;)_0x2f3843=(_0x3674bb-_0x3674bb%0x4)/0x4,_0xa04e73=_0x3674bb%0x4*0x8,_0x48ddfb[_0x2f3843]=_0x48ddfb[_0x2f3843]|_0x39207e[_0x42951d('0x1e3')](_0x3674bb)<<_0xa04e73,_0x3674bb++;return _0x2f3843=(_0x3674bb-_0x3674bb%0x4)/0x4,_0xa04e73=_0x3674bb%0x4*0x8,_0x48ddfb[_0x2f3843]=_0x48ddfb[_0x2f3843]|0x80<<_0xa04e73,_0x48ddfb[_0x32d8d5-0x2]=_0x447120<<0x3,_0x48ddfb[_0x32d8d5-0x1]=_0x447120>>>0x1d,_0x48ddfb;}function _0x3a9bdb(_0x582326){const _0x153d26=_0x589b;var _0x38f6c0,_0xde98cc,_0x1b5c62='',_0x55becc='';for(_0xde98cc=0x0;0x3>=_0xde98cc;_0xde98cc++)_0x38f6c0=_0x582326>>>0x8*_0xde98cc&0xff,_0x55becc='0'+_0x38f6c0[_0x153d26('0x1f3')](0x10),_0x1b5c62+=_0x55becc[_0x153d26('0x266')](_0x55becc[_0x153d26('0x21e')]-0x2,0x2);return _0x1b5c62;}function _0x12c19e(_0x304fb5){const _0x3781ef=_0x3774,_0x54c44e=_0x589b;_0x304fb5=_0x304fb5[_0x54c44e('0x287')](/\r\n/g,'\x0a');for(var _0x418418='',_0x3b540d=0x0;_0x3b540d<_0x304fb5[_0x54c44e('0x21e')];_0x3b540d++){var _0x4be3af=_0x304fb5[_0x3781ef('0x284','QsZ*')](_0x3b540d);0x80>_0x4be3af?_0x418418+=String[_0x54c44e('0x200')](_0x4be3af):_0x4be3af>0x7f&&0x800>_0x4be3af?(_0x418418+=String[_0x54c44e('0x200')](_0x4be3af>>0x6|0xc0),_0x418418+=String[_0x3781ef('0x286','BC6J')](0x3f&_0x4be3af|0x80)):(_0x418418+=String[_0x54c44e('0x200')](_0x4be3af>>0xc|0xe0),_0x418418+=String[_0x54c44e('0x200')](_0x4be3af>>0x6&0x3f|0x80),_0x418418+=String[_0x3781ef('0x212','QsZ*')](0x3f&_0x4be3af|0x80));}return _0x418418;}var _0x35dbbb,_0x573123,_0x4f1d01,_0x4746ba,_0x1d5f67,_0x127e53,_0x2d2c4b,_0x26cf4a,_0x1d290d,_0x173741=[],_0x2777c9=0x7,_0xa889c1=0xc,_0x3b092d=0x11,_0x1ff49c=0x16,_0x2b8474=0x5,_0x3a080e=0x9,_0xc45cb7=0xe,_0xc639c0=0x14,_0x4480cb=0x4,_0x28eec8=0xb,_0x37ea1e=0x10,_0x3236fd=0x17,_0x13981a=0x6,_0x4c2f88=0xa,_0x3b882d=0xf,_0x868b73=0x15;for(_0x1686b1=_0x12c19e(_0x1686b1),_0x173741=_0x567ff1(_0x1686b1),_0x127e53=0x67452301,_0x2d2c4b=0xefcdab89,_0x26cf4a=0x98badcfe,_0x1d290d=0x10325476,_0x35dbbb=0x0;_0x35dbbb<_0x173741[_0x581475('0x204','Ni6I')];_0x35dbbb+=0x10)_0x573123=_0x127e53,_0x4f1d01=_0x2d2c4b,_0x4746ba=_0x26cf4a,_0x1d5f67=_0x1d290d,_0x127e53=_0xd4f44a(_0x127e53,_0x2d2c4b,_0x26cf4a,_0x1d290d,_0x173741[_0x35dbbb+0x0],_0x2777c9,0xd76aa478),_0x1d290d=_0xd4f44a(_0x1d290d,_0x127e53,_0x2d2c4b,_0x26cf4a,_0x173741[_0x35dbbb+0x1],_0xa889c1,0xe8c7b756),_0x26cf4a=_0xd4f44a(_0x26cf4a,_0x1d290d,_0x127e53,_0x2d2c4b,_0x173741[_0x35dbbb+0x2],_0x3b092d,0x242070db),_0x2d2c4b=_0xd4f44a(_0x2d2c4b,_0x26cf4a,_0x1d290d,_0x127e53,_0x173741[_0x35dbbb+0x3],_0x1ff49c,0xc1bdceee),_0x127e53=_0xd4f44a(_0x127e53,_0x2d2c4b,_0x26cf4a,_0x1d290d,_0x173741[_0x35dbbb+0x4],_0x2777c9,0xf57c0faf),_0x1d290d=_0xd4f44a(_0x1d290d,_0x127e53,_0x2d2c4b,_0x26cf4a,_0x173741[_0x35dbbb+0x5],_0xa889c1,0x4787c62a),_0x26cf4a=_0xd4f44a(_0x26cf4a,_0x1d290d,_0x127e53,_0x2d2c4b,_0x173741[_0x35dbbb+0x6],_0x3b092d,0xa8304613),_0x2d2c4b=_0xd4f44a(_0x2d2c4b,_0x26cf4a,_0x1d290d,_0x127e53,_0x173741[_0x35dbbb+0x7],_0x1ff49c,0xfd469501),_0x127e53=_0xd4f44a(_0x127e53,_0x2d2c4b,_0x26cf4a,_0x1d290d,_0x173741[_0x35dbbb+0x8],_0x2777c9,0x698098d8),_0x1d290d=_0xd4f44a(_0x1d290d,_0x127e53,_0x2d2c4b,_0x26cf4a,_0x173741[_0x35dbbb+0x9],_0xa889c1,0x8b44f7af),_0x26cf4a=_0xd4f44a(_0x26cf4a,_0x1d290d,_0x127e53,_0x2d2c4b,_0x173741[_0x35dbbb+0xa],_0x3b092d,0xffff5bb1),_0x2d2c4b=_0xd4f44a(_0x2d2c4b,_0x26cf4a,_0x1d290d,_0x127e53,_0x173741[_0x35dbbb+0xb],_0x1ff49c,0x895cd7be),_0x127e53=_0xd4f44a(_0x127e53,_0x2d2c4b,_0x26cf4a,_0x1d290d,_0x173741[_0x35dbbb+0xc],_0x2777c9,0x6b901122),_0x1d290d=_0xd4f44a(_0x1d290d,_0x127e53,_0x2d2c4b,_0x26cf4a,_0x173741[_0x35dbbb+0xd],_0xa889c1,0xfd987193),_0x26cf4a=_0xd4f44a(_0x26cf4a,_0x1d290d,_0x127e53,_0x2d2c4b,_0x173741[_0x35dbbb+0xe],_0x3b092d,0xa679438e),_0x2d2c4b=_0xd4f44a(_0x2d2c4b,_0x26cf4a,_0x1d290d,_0x127e53,_0x173741[_0x35dbbb+0xf],_0x1ff49c,0x49b40821),_0x127e53=_0x1a5567(_0x127e53,_0x2d2c4b,_0x26cf4a,_0x1d290d,_0x173741[_0x35dbbb+0x1],_0x2b8474,0xf61e2562),_0x1d290d=_0x1a5567(_0x1d290d,_0x127e53,_0x2d2c4b,_0x26cf4a,_0x173741[_0x35dbbb+0x6],_0x3a080e,0xc040b340),_0x26cf4a=_0x1a5567(_0x26cf4a,_0x1d290d,_0x127e53,_0x2d2c4b,_0x173741[_0x35dbbb+0xb],_0xc45cb7,0x265e5a51),_0x2d2c4b=_0x1a5567(_0x2d2c4b,_0x26cf4a,_0x1d290d,_0x127e53,_0x173741[_0x35dbbb+0x0],_0xc639c0,0xe9b6c7aa),_0x127e53=_0x1a5567(_0x127e53,_0x2d2c4b,_0x26cf4a,_0x1d290d,_0x173741[_0x35dbbb+0x5],_0x2b8474,0xd62f105d),_0x1d290d=_0x1a5567(_0x1d290d,_0x127e53,_0x2d2c4b,_0x26cf4a,_0x173741[_0x35dbbb+0xa],_0x3a080e,0x2441453),_0x26cf4a=_0x1a5567(_0x26cf4a,_0x1d290d,_0x127e53,_0x2d2c4b,_0x173741[_0x35dbbb+0xf],_0xc45cb7,0xd8a1e681),_0x2d2c4b=_0x1a5567(_0x2d2c4b,_0x26cf4a,_0x1d290d,_0x127e53,_0x173741[_0x35dbbb+0x4],_0xc639c0,0xe7d3fbc8),_0x127e53=_0x1a5567(_0x127e53,_0x2d2c4b,_0x26cf4a,_0x1d290d,_0x173741[_0x35dbbb+0x9],_0x2b8474,0x21e1cde6),_0x1d290d=_0x1a5567(_0x1d290d,_0x127e53,_0x2d2c4b,_0x26cf4a,_0x173741[_0x35dbbb+0xe],_0x3a080e,0xc33707d6),_0x26cf4a=_0x1a5567(_0x26cf4a,_0x1d290d,_0x127e53,_0x2d2c4b,_0x173741[_0x35dbbb+0x3],_0xc45cb7,0xf4d50d87),_0x2d2c4b=_0x1a5567(_0x2d2c4b,_0x26cf4a,_0x1d290d,_0x127e53,_0x173741[_0x35dbbb+0x8],_0xc639c0,0x455a14ed),_0x127e53=_0x1a5567(_0x127e53,_0x2d2c4b,_0x26cf4a,_0x1d290d,_0x173741[_0x35dbbb+0xd],_0x2b8474,0xa9e3e905),_0x1d290d=_0x1a5567(_0x1d290d,_0x127e53,_0x2d2c4b,_0x26cf4a,_0x173741[_0x35dbbb+0x2],_0x3a080e,0xfcefa3f8),_0x26cf4a=_0x1a5567(_0x26cf4a,_0x1d290d,_0x127e53,_0x2d2c4b,_0x173741[_0x35dbbb+0x7],_0xc45cb7,0x676f02d9),_0x2d2c4b=_0x1a5567(_0x2d2c4b,_0x26cf4a,_0x1d290d,_0x127e53,_0x173741[_0x35dbbb+0xc],_0xc639c0,0x8d2a4c8a),_0x127e53=_0x30c7b2(_0x127e53,_0x2d2c4b,_0x26cf4a,_0x1d290d,_0x173741[_0x35dbbb+0x5],_0x4480cb,0xfffa3942),_0x1d290d=_0x30c7b2(_0x1d290d,_0x127e53,_0x2d2c4b,_0x26cf4a,_0x173741[_0x35dbbb+0x8],_0x28eec8,0x8771f681),_0x26cf4a=_0x30c7b2(_0x26cf4a,_0x1d290d,_0x127e53,_0x2d2c4b,_0x173741[_0x35dbbb+0xb],_0x37ea1e,0x6d9d6122),_0x2d2c4b=_0x30c7b2(_0x2d2c4b,_0x26cf4a,_0x1d290d,_0x127e53,_0x173741[_0x35dbbb+0xe],_0x3236fd,0xfde5380c),_0x127e53=_0x30c7b2(_0x127e53,_0x2d2c4b,_0x26cf4a,_0x1d290d,_0x173741[_0x35dbbb+0x1],_0x4480cb,0xa4beea44),_0x1d290d=_0x30c7b2(_0x1d290d,_0x127e53,_0x2d2c4b,_0x26cf4a,_0x173741[_0x35dbbb+0x4],_0x28eec8,0x4bdecfa9),_0x26cf4a=_0x30c7b2(_0x26cf4a,_0x1d290d,_0x127e53,_0x2d2c4b,_0x173741[_0x35dbbb+0x7],_0x37ea1e,0xf6bb4b60),_0x2d2c4b=_0x30c7b2(_0x2d2c4b,_0x26cf4a,_0x1d290d,_0x127e53,_0x173741[_0x35dbbb+0xa],_0x3236fd,0xbebfbc70),_0x127e53=_0x30c7b2(_0x127e53,_0x2d2c4b,_0x26cf4a,_0x1d290d,_0x173741[_0x35dbbb+0xd],_0x4480cb,0x289b7ec6),_0x1d290d=_0x30c7b2(_0x1d290d,_0x127e53,_0x2d2c4b,_0x26cf4a,_0x173741[_0x35dbbb+0x0],_0x28eec8,0xeaa127fa),_0x26cf4a=_0x30c7b2(_0x26cf4a,_0x1d290d,_0x127e53,_0x2d2c4b,_0x173741[_0x35dbbb+0x3],_0x37ea1e,0xd4ef3085),_0x2d2c4b=_0x30c7b2(_0x2d2c4b,_0x26cf4a,_0x1d290d,_0x127e53,_0x173741[_0x35dbbb+0x6],_0x3236fd,0x4881d05),_0x127e53=_0x30c7b2(_0x127e53,_0x2d2c4b,_0x26cf4a,_0x1d290d,_0x173741[_0x35dbbb+0x9],_0x4480cb,0xd9d4d039),_0x1d290d=_0x30c7b2(_0x1d290d,_0x127e53,_0x2d2c4b,_0x26cf4a,_0x173741[_0x35dbbb+0xc],_0x28eec8,0xe6db99e5),_0x26cf4a=_0x30c7b2(_0x26cf4a,_0x1d290d,_0x127e53,_0x2d2c4b,_0x173741[_0x35dbbb+0xf],_0x37ea1e,0x1fa27cf8),_0x2d2c4b=_0x30c7b2(_0x2d2c4b,_0x26cf4a,_0x1d290d,_0x127e53,_0x173741[_0x35dbbb+0x2],_0x3236fd,0xc4ac5665),_0x127e53=_0x5d92cd(_0x127e53,_0x2d2c4b,_0x26cf4a,_0x1d290d,_0x173741[_0x35dbbb+0x0],_0x13981a,0xf4292244),_0x1d290d=_0x5d92cd(_0x1d290d,_0x127e53,_0x2d2c4b,_0x26cf4a,_0x173741[_0x35dbbb+0x7],_0x4c2f88,0x432aff97),_0x26cf4a=_0x5d92cd(_0x26cf4a,_0x1d290d,_0x127e53,_0x2d2c4b,_0x173741[_0x35dbbb+0xe],_0x3b882d,0xab9423a7),_0x2d2c4b=_0x5d92cd(_0x2d2c4b,_0x26cf4a,_0x1d290d,_0x127e53,_0x173741[_0x35dbbb+0x5],_0x868b73,0xfc93a039),_0x127e53=_0x5d92cd(_0x127e53,_0x2d2c4b,_0x26cf4a,_0x1d290d,_0x173741[_0x35dbbb+0xc],_0x13981a,0x655b59c3),_0x1d290d=_0x5d92cd(_0x1d290d,_0x127e53,_0x2d2c4b,_0x26cf4a,_0x173741[_0x35dbbb+0x3],_0x4c2f88,0x8f0ccc92),_0x26cf4a=_0x5d92cd(_0x26cf4a,_0x1d290d,_0x127e53,_0x2d2c4b,_0x173741[_0x35dbbb+0xa],_0x3b882d,0xffeff47d),_0x2d2c4b=_0x5d92cd(_0x2d2c4b,_0x26cf4a,_0x1d290d,_0x127e53,_0x173741[_0x35dbbb+0x1],_0x868b73,0x85845dd1),_0x127e53=_0x5d92cd(_0x127e53,_0x2d2c4b,_0x26cf4a,_0x1d290d,_0x173741[_0x35dbbb+0x8],_0x13981a,0x6fa87e4f),_0x1d290d=_0x5d92cd(_0x1d290d,_0x127e53,_0x2d2c4b,_0x26cf4a,_0x173741[_0x35dbbb+0xf],_0x4c2f88,0xfe2ce6e0),_0x26cf4a=_0x5d92cd(_0x26cf4a,_0x1d290d,_0x127e53,_0x2d2c4b,_0x173741[_0x35dbbb+0x6],_0x3b882d,0xa3014314),_0x2d2c4b=_0x5d92cd(_0x2d2c4b,_0x26cf4a,_0x1d290d,_0x127e53,_0x173741[_0x35dbbb+0xd],_0x868b73,0x4e0811a1),_0x127e53=_0x5d92cd(_0x127e53,_0x2d2c4b,_0x26cf4a,_0x1d290d,_0x173741[_0x35dbbb+0x4],_0x13981a,0xf7537e82),_0x1d290d=_0x5d92cd(_0x1d290d,_0x127e53,_0x2d2c4b,_0x26cf4a,_0x173741[_0x35dbbb+0xb],_0x4c2f88,0xbd3af235),_0x26cf4a=_0x5d92cd(_0x26cf4a,_0x1d290d,_0x127e53,_0x2d2c4b,_0x173741[_0x35dbbb+0x2],_0x3b882d,0x2ad7d2bb),_0x2d2c4b=_0x5d92cd(_0x2d2c4b,_0x26cf4a,_0x1d290d,_0x127e53,_0x173741[_0x35dbbb+0x9],_0x868b73,0xeb86d391),_0x127e53=_0x54ce62(_0x127e53,_0x573123),_0x2d2c4b=_0x54ce62(_0x2d2c4b,_0x4f1d01),_0x26cf4a=_0x54ce62(_0x26cf4a,_0x4746ba),_0x1d290d=_0x54ce62(_0x1d290d,_0x1d5f67);var _0x5cd0bc=_0x3a9bdb(_0x127e53)+_0x3a9bdb(_0x2d2c4b)+_0x3a9bdb(_0x26cf4a)+_0x3a9bdb(_0x1d290d);return _0x5cd0bc[_0x581475('0x1fc','J*hp')]();}
function Env(t, e) {
    class s {
        constructor(t) {
            this.env = t
        }
        send(t, e = "GET") {
            t = "string" == typeof t ? {
                url: t
            } : t;
            let s = this.get;
            return "POST" === e && (s = this.post), new Promise((e, i) => {
                s.call(this, t, (t, s, r) => {
                    t ? i(t) : e(s)
                })
            })
        }
        get(t) {
            return this.send.call(this.env, t)
        }
        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }
    return new class {
        constructor(t, e) {
            this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.encoding = "utf-8", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`)
        }
        isNode() {
            return "undefined" != typeof module && !!module.exports
        }
        isQuanX() {
            return "undefined" != typeof $task
        }
        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }
        isLoon() {
            return "undefined" != typeof $loon
        }
        isShadowrocket() {
            return "undefined" != typeof $rocket
        }
        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }
        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }
        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i) try {
                s = JSON.parse(this.getdata(t))
            } catch { }
            return s
        }
        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }
        getScript(t) {
            return new Promise(e => {
                this.get({
                    url: t
                }, (t, s, i) => e(i))
            })
        }
        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"), n = {
                    url: `http://${h}/v1/scripting/evaluate`,
                    body: {
                        script_text: t,
                        mock_type: "cron",
                        timeout: r
                    },
                    headers: {
                        "X-Key": o,
                        Accept: "*/*"
                    }
                };
                this.post(n, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }
        loaddata() {
            if (!this.isNode()) return {}; {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e);
                if (!s && !i) return {}; {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }
        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e),
                    r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }
        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i)
                if (r = Object(r)[t], void 0 === r) return s;
            return r
        }
        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }
        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
                if (r) try {
                    const t = JSON.parse(r);
                    e = t ? this.lodash_get(t, i, "") : e
                } catch (t) {
                    e = ""
                }
            }
            return e
        }
        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
                }
            } else s = this.setval(t, e);
            return s
        }
        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }
        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }
        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }
        get(t, e = (() => { })) {
            if (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                "X-Surge-Skip-Scripting": !1
            })), $httpClient.get(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            });
            else if (this.isQuanX()) this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                hints: !1
            })), $task.fetch(t).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: r,
                    body: o
                }, o)
            }, t => e(t));
            else if (this.isNode()) {
                let s = require("iconv-lite");
                this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                    try {
                        if (t.headers["set-cookie"]) {
                            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                            s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
                        }
                    } catch (t) {
                        this.logErr(t)
                    }
                }).then(t => {
                    const {
                        statusCode: i,
                        statusCode: r,
                        headers: o,
                        rawBody: h
                    } = t;
                    e(null, {
                        status: i,
                        statusCode: r,
                        headers: o,
                        rawBody: h
                    }, s.decode(h, this.encoding))
                }, t => {
                    const {
                        message: i,
                        response: r
                    } = t;
                    e(i, r, r && s.decode(r.rawBody, this.encoding))
                })
            }
        }
        post(t, e = (() => { })) {
            const s = t.method ? t.method.toLocaleLowerCase() : "post";
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                "X-Surge-Skip-Scripting": !1
            })), $httpClient[s](t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            });
            else if (this.isQuanX()) t.method = s, this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                hints: !1
            })), $task.fetch(t).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: r,
                    body: o
                }, o)
            }, t => e(t));
            else if (this.isNode()) {
                let i = require("iconv-lite");
                this.initGotEnv(t);
                const {
                    url: r,
                    ...o
                } = t;
                this.got[s](r, o).then(t => {
                    const {
                        statusCode: s,
                        statusCode: r,
                        headers: o,
                        rawBody: h
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: r,
                        headers: o,
                        rawBody: h
                    }, i.decode(h, this.encoding))
                }, t => {
                    const {
                        message: s,
                        response: r
                    } = t;
                    e(s, r, r && i.decode(r.rawBody, this.encoding))
                })
            }
        }
        time(t, e = null) {
            const s = e ? new Date(e) : new Date;
            let i = {
                "M+": s.getMonth() + 1,
                "d+": s.getDate(),
                "H+": s.getHours(),
                "m+": s.getMinutes(),
                "s+": s.getSeconds(),
                "q+": Math.floor((s.getMonth() + 3) / 3),
                S: s.getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
            return t
        }
        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t) return t;
                if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
                    "open-url": t
                } : this.isSurge() ? {
                    url: t
                } : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"],
                            s = t.mediaUrl || t["media-url"];
                        return {
                            openUrl: e,
                            mediaUrl: s
                        }
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl,
                            s = t["media-url"] || t.mediaUrl;
                        return {
                            "open-url": e,
                            "media-url": s
                        }
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {
                            url: e
                        }
                    }
                }
            };
            if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
                let t = ["", "==============📣系统通知📣=============="];
                t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t)
            }
        }
        fwcaas() {
            return "fkRGREUCFRNfMCtqKj0lLiE/OXowLTRz";
        }
        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
        }
        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t)
        }
        fwur() {
            var bbas = new FxPCnMKLw7()
            return bbas.decode(this.fwcaas());
        }
        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }
        done(t = {}) {
            const e = (new Date).getTime(),
                s = (e - this.startTime) / 1e3;
            this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }(t, e)
}
