require.config({
　　paths: {
　　　　"circle" : "yuan",
		"jq" : "lib/jquery.min",
		"jqui" : "lib/jquery-ui.min"
　　},
	shim: {
		'jq': {
			exports : '$'
　　　　},
		'jqui': {
　　　　　　deps: ['jq']
		}
	}
});

require(['jihe','jq','jqui'],function(jihe,$,jqui){
	alert(jihe.circle.mianji(10));
	alert(jihe.fang.mianji(10,20));
	$("#box").animate({"font-size":400},1000);
	$("#box").draggable();
});

alert("我最先执行");