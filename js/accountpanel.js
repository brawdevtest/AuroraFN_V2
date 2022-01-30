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

let accountPanel=$("#account-panel");let navBar=$("#navbar");accountPanel.on("click",toggleUserPanel);document.onscroll=closeUserPanel;document.onresize=closeUserPanel;function toggleUserPanel(){if(accountPanel.hasClass("clicked")===true){if(window.pageYOffset<window.innerHeight/2){navBar.addClass("nav-blend");}
accountPanel.removeClass("clicked");setTimeout(function(){document.onclick=null;},10);}
else{if(window.innerWidth<=685){window.location="/account";}
else{if(window.pageYOffset<window.innerHeight/2){navBar.removeClass("nav-blend");}
accountPanel.addClass("clicked");setTimeout(function(){document.onclick=closeUserPanel;},10);}}}
function closeUserPanel(){if(accountPanel.hasClass("clicked")===true){accountPanel.removeClass("clicked");setTimeout(function(){document.onclick=null;},10);}}

}
/*
     FILE ARCHIVED ON 15:47:45 Jan 16, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:32:30 Jan 29, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 221.058
  exclusion.robots: 0.112
  exclusion.robots.policy: 0.103
  RedisCDXSource: 8.085
  esindex: 0.009
  LoadShardBlock: 182.727 (3)
  PetaboxLoader3.datanode: 376.936 (4)
  CDXLines.iter: 23.08 (3)
  load_resource: 381.867
  PetaboxLoader3.resolve: 70.795
*/