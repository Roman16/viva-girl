/* imageTransformer v1.0 */
jQuery.fn.imageTransformer = function(o){
    var getParameters = {
        width:'',
        height:'',
        type:'fill',
	    align:'center center'
	};
    
    jQuery.extend(getParameters, o);
    
    var items = jQuery(this), 
        width = getParameters.width,
        height = getParameters.height,
        type = getParameters.type,
        align = getParameters.align;
           
    items.each(function (index){        
         var element = jQuery(this),
             containers = element.parent(),
             newParams;

         if(width == ''){
            width = containers.width();
         } else {
            containers.width(width);
         }
         
         if(height == ''){
            height = containers.height();
         } else {
            containers.height(height);
         }
                          
         if (type == 'fit') {
             newParams = FitImage(jQuery(this));
         } else if (type == 'fill') {
             newParams = FillImage(jQuery(this));
         }
         
         element.css({
            'position':'relative',
            'top': newParams.y,
            'left': newParams.x,
            'width': newParams.w,
            'height': newParams.h
         }); 
         
         function resizeByWidth(th){        
             return {w:width, h:(width*th.height()/th.width())};
         }
         
         function resizeByHeight(th){
             return {h:height, w:(height*th.width()/th.height())};
         }
         function calcXY(resDim){
             var resPos = {x: 0, y: 0};
             switch (align) {
                 case 'center':
                     resPos.x = (width-resDim.w)*.5;
                     resPos.y = (height-resDim.h)*.5;                     
                 break;
                 case 'center top':
                     if (resDim.h <= height) {
                         resPos.x = (width-resDim.w)*.5; 
                     }
                 break;
                 case 'center bottom':
                     resPos.y = height - resDim.h; 
                     if (resDim.h <= height) {
                         resPos.x = (width-resDim.w)*.5;
                     }
                 break;
                 case 'left center':
                     resPos.x = 0; 
                     if (resDim.h > height) {
                        resPos.y = (height-resDim.h)*.5;    
                     }
                 break;
                 case 'right center':
                     resPos.x = width - resDim.w; 
                     if (resDim.h > height) {
                        resPos.y = (height-resDim.h)*.5;    
                     }
                 break;
                 default:
                     resPos.x = (width-resDim.w)*.5;
                     resPos.y = (height-resDim.h)*.5;
                 break;
             }            
             return resPos;            
         }
         function FillImage(th){
             var resPos = {x: 0, y: 0},
                 resDim = {w: th.width(), h: th.height()},
                 srcDim = {w: width, h: height};
                                         
             if (srcDim.w <= srcDim.h) {
     			resDim = resizeByWidth(th);
                resPos.y = (height-resDim.h)*.5;       
     			if (resDim.h <= srcDim.h) {
                     resDim = resizeByHeight(th);
                     resPos.x = (width-resDim.w)*.5; 
                     resPos.y = 0;
                 }
     		} else {
     			resDim = resizeByHeight(th);
                 resPos.x = (width-resDim.w)*.5; 
                 if (resDim.w <= srcDim.w) {
                     resDim = resizeByWidth(th);
                     resPos.x = 0;
                     resPos.y = (height-resDim.h)*.5;       
                 }
     		}
             resPos = calcXY(resDim);   
             return {x: parseInt(resPos.x), y: parseInt(resPos.y), w: parseInt(resDim.w), h: parseInt(resDim.h)};
         }
         function FitImage(th){
             var resPos = {x: 0, y: 0},
                 resDim = {w: th.width(), h: th.height()},
                 srcDim = {w: width, h: height};
                                         
             if (srcDim.w <= srcDim.h) {
     			 resDim = resizeByWidth(th);
                 resPos.y = (height-resDim.h)*.5;            
     		 } else {
     			 resDim = resizeByHeight(th);
                 resPos.x = (width-resDim.w)*.5; 
     		 }     
             
             resPos = calcXY(resDim);   
             return {x: parseInt(resPos.x), y: parseInt(resPos.y), w: parseInt(resDim.w), h: parseInt(resDim.h)};
         }  
     })
}