var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

let modalCount=0;function getQuery(q){return(window.location.search.match(new RegExp('[?&]'+q+'=([^&]+)'))||[,null])[1];}
function openModalOverlay(modalId,overlayId){if($(`#${modalId}`).hasClass("minimized")){console.error("Trying to show overlay for hidden modal.");return;}
$(`#${overlayId}`).removeClass("hidden");}
function closeModalOverlay(modalId,overlayId){if($(`#${modalId}`).hasClass("minimized")){console.error("Trying to hide overlay for hidden modal.");return;}
$(`#${overlayId}`).addClass("hidden");}
function openModal(modalId){$(`#${modalId}`).removeClass("minimized");modalCount++;document.body.style.overflow="hidden";}
function closeModal(modalId){$(`#${modalId}`).addClass("minimized");modalCount--;if(modalCount==0){document.body.style.overflow="visible";}}
function updateElementValues(elementIds,value){for(i=0;i<elementIds.length;i++){if(elementIds[i].value==value){return;}
else{document.getElementById(elementIds[i]).value=value;}}}

}
/*
     FILE ARCHIVED ON 15:47:43 Jan 16, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:32:26 Jan 29, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 184.905
  exclusion.robots: 0.13
  exclusion.robots.policy: 0.121
  RedisCDXSource: 22.241
  esindex: 0.011
  LoadShardBlock: 135.077 (3)
  PetaboxLoader3.datanode: 111.561 (4)
  CDXLines.iter: 22.715 (3)
  load_resource: 78.272
  PetaboxLoader3.resolve: 55.876
*/