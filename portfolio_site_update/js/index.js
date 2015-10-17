$('.image').click(function () {
    $('.image').each(function () {
        if ($(this).offset().left < 0) {
            $(this).css("left", "150%");
        } else if ($(this).offset().left > $('#move').width()) {
            $(this).animate({
                left: '0'
            }, 500);
        } else {
            $(this).animate({
                left: '-150%'
            }, 500);
        }
    });
});

//calculate: function( _i )
//		{
//			if( !_i ) return false
//			
//			var vp = eina.vp(),
//				i = _i.retina ? { width: _i.width/2, height: _i.height/2 } : _i
//				
//			vp.w -= bb.projects.config.img.margin.x * 2
//			vp.h -= bb.projects.config.img.margin.y * 2
//			
//			var d = { // fit img to vp width
//					w: vp.w,
//					h: i.height / i.width * vp.w
//				}
//					
//			if( d.h > vp.h ){
//				d = { // fit img to vp height
//					w: i.width / i.height * vp.h,
//					h: vp.h
//				}
//			}
//						
//			if( d.w > i.width || d.h > i.height ){
//				d = { // don't scale image
//					w: i.width,
//					h: i.height
//				}
//			}
//			
//			if( System.browser == 'Safari' ) d = { w: Math.round( d.w ), h: Math.round( d.h ) }
//			
//			return d
//		},
//            
//resize: function()
//		{
//			$('#projects section').each(function(){
//				var $this = $(this),
//					$info = $this.find('div.info'),
//					i, d
//				
//				$( $this.find('img') ).each(function(x){
//					var $img = $(this)
//					i = { 
//						type: 'i',
//						width: $img.data('w'), 
//						height: $img.data('h'), 
//						retina: $img.data('retina') 
//					}
//					d = bb.projects.calculate( i )
//					$img
//						.attr('width', d.w)
//						.attr('height', d.h)
//						.css({ marginTop: '-'+d.h/2+'px', marginLeft: '-'+d.w/2+'px' })
//				})
//				$( $this.find('iframe') ).each(function(){
//					$iframe = $(this)
//					i = { 
//						type: 'v', 
//						width: bb.projects.config.video.max.w, 
//						height: bb.projects.config.video.max.h, 
//						retina: false 
//					}
//					d = bb.projects.calculate( i )
//					$iframe
//						.attr('width', d.w)
//						.attr('height', d.h)
//						.css({ marginTop: '-'+d.h/2+'px', marginLeft: '-'+d.w/2+'px' })
//				})
//				
//				if( !$this.hasClass('curr') || ( $this.hasClass('curr') && !bb.projects.info.visible() ) ) 
//					$info.css({ bottom: '-'+$info.outerHeight()+'px' })
//			})
//		},
//		