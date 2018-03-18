
// 这个文件是初始化页面rem的模块

define(function(require,exports,module) {
	var init = {
		initRem: function() {
			// 测试的时候先根据设计图默认html为640
			var html = $('html'),
			    fontSize = 640/16 + 'px';
			html.css('fontSize',fontSize);
			console.log(html.css('fontSize'));
		},
		initHeight: function() {
			var height = document.documentElement.clientHeight;
			$('body').css('height',height);
		}
	};
	exports.init = init;
});