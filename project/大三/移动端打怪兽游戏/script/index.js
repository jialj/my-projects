
(function() {
    
	seajs.use('script/init.js', function(ex) {
		var init = ex.init;
		init.initRem();
		init.initHeight();
    }); 


    var vm = new Vue({
    	el: '.content',
    	data: {
    		intro: 'TWL',
    		play: true,
    		sClientY: 0,
    		eClientY: 0
    	},
    	methods: {
    		changeState(ev) {
    			this.play = !this.play;
    			let audio = $('audio')[0];
    			if (audio.paused) {
    				audio.play();
    				console.log('typeof audio.play()');
    			} else {
    				audio.pause();
    			}
    		},
    		tStart(ev) {
    			this.sClientY = ev.changedTouches[0].clientY;
    		},
    		tEnd(ev) {
    			this.eClientY = ev.changedTouches[0].clientY;
    			if ((this.sClientY - this.eClientY)>100) {
    				console.log('go');
    			}
    		}
    	}
    });
    // 由于用v-on的方式绑定touch这些事件，浏览器模拟器时好时坏，所以在外面用这个方式来绑定
    document.addEventListener('touchstart',vm.tStart);
    document.addEventListener('touchend',vm.tEnd);
    
})();