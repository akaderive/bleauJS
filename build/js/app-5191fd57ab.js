/**
 * bleauJs - bleauJs Project Generated from HotTowel Angular
 * @authors 
 * @version v0.0.0
 * @link 
 * @license 
 */
!function(){"use strict";angular.module("app",["app.core","app.widgets","app.dashboard","app.layout","app.areaList","app.boulder"])}(),function(){"use strict";angular.module("app.areaList",["app.core","app.widgets","ngStorage"])}(),function(){"use strict";angular.module("blocks.exception",["blocks.logger"])}(),function(){"use strict";angular.module("blocks.logger",[])}(),function(){"use strict";angular.module("blocks.router",["ui.router","blocks.logger"])}(),function(){"use strict";angular.module("app.boulder",["app.core","app.widgets"])}(),function(){"use strict";angular.module("app.core",["ngAnimate","ngSanitize","blocks.exception","blocks.logger","blocks.router","ui.router","ngplus"])}(),function(){"use strict";angular.module("app.dashboard",["app.core","app.widgets"])}(),function(){"use strict";angular.module("app.layout",["app.core"])}(),function(){"use strict";angular.module("app.widgets",[])}(),function(){"use strict";function e(e,t,a,r,i){function n(){a.searchAreas=r.searchAreas,a.searchBoulders=r.searchBoulders}function s(){var a=[o()];return e.all(a).then(function(){t.info("Activated AreaList View")})}function o(){return i.getAreas().then(function(e){console.log(e),c.areas=e;var t;for(t=0;t<e.length;t++)c.showAreas[t]=!1;return c.areas})}function l(e){return c.showAreas[e]=!c.showAreas[e],c.showAreas[e]}var c=this;c.title="List of Areas",c.areas=[],c.showAreas=[],c.clickArea=l,c.getBtnState=function(e){return void 0!==r.searchBoulders&&""!==r.searchBoulders?0===e?0:1:2},r.$on("$destroy",n),r.searchAreas=a.searchAreas,r.searchBoulders=a.searchBoulders,s()}angular.module("app.areaList").controller("AreaListController",e),e.$inject=["$q","logger","$sessionStorage","$scope","dataservice"]}(),function(){"use strict";function e(e){e.configureStates(t())}function t(){return[{state:"areaList",config:{url:"/areaList",templateUrl:"app/areaList/areaList.html",controller:"AreaListController",controllerAs:"vm",title:"List of Areas",settings:{nav:2,content:'<i class="fa fa-lock"></i> List of Areas'}}}]}angular.module("app.areaList").run(e),e.$inject=["routerHelper"]}(),function(){"use strict";function e(){this.config={appErrorPrefix:void 0},this.configure=function(e){this.config.appErrorPrefix=e},this.$get=function(){return{config:this.config}}}function t(e){e.decorator("$exceptionHandler",a)}function a(e,t,a){return function(r,i){var n=t.config.appErrorPrefix||"",s={exception:r,cause:i};r.message=n+r.message,e(r,i),a.error(r.message,s)}}angular.module("blocks.exception").provider("exceptionHandler",e).config(t),t.$inject=["$provide"],a.$inject=["$delegate","exceptionHandler","logger"]}(),function(){"use strict";function e(e,t){function a(a){return function(r){var i,n;return r.data&&r.data.description&&(i="\n"+r.data.description,n=a+i),r.data.description=n,t.error(n),e.reject(r)}}var r={catcher:a};return r}angular.module("blocks.exception").factory("exception",e),e.$inject=["$q","logger"]}(),function(){"use strict";function e(e,t){function a(a,r,i){t.error(a,i),e.error("Error: "+a,r)}function r(a,r,i){t.info(a,i),e.info("Info: "+a,r)}function i(a,r,i){t.success(a,i),e.info("Success: "+a,r)}function n(a,r,i){t.warning(a,i),e.warn("Warning: "+a,r)}var s={showToasts:!0,error:a,info:r,success:i,warning:n,log:e.log};return s}angular.module("blocks.logger").factory("logger",e),e.$inject=["$log","toastr"]}(),function(){"use strict";function e(e,t,a){function r(e,r,n,s){function o(e,r){e.forEach(function(e){e.config.resolve=angular.extend(e.config.resolve||{},i.resolveAlways),t.state(e.state,e.config)}),r&&!g&&(g=!0,a.otherwise(r))}function l(){r.$on("$stateChangeError",function(t,a,r,i,n,o){if(!p){v.errors++,p=!0;var l=a&&(a.title||a.name||a.loadedTemplateUrl)||"unknown target",c="Error routing to "+l+". "+(o.data||"")+". <br/>"+(o.statusText||"")+": "+(o.status||"");s.warning(c,[a]),e.path("/")}})}function c(){l(),u()}function d(){return n.get()}function u(){r.$on("$stateChangeSuccess",function(e,t,a,n,s){v.changes++,p=!1;var o=i.docTitle+" "+(t.title||"");r.title=o})}var p=!1,g=!1,v={errors:0,changes:0},f={configureStates:o,getStates:d,stateCounts:v};return c(),f}var i={docTitle:void 0,resolveAlways:{}};e.html5Mode(!0),this.configure=function(e){angular.extend(i,e)},this.$get=r,r.$inject=["$location","$rootScope","$state","logger"]}angular.module("blocks.router").provider("routerHelper",e),e.$inject=["$locationProvider","$stateProvider","$urlRouterProvider"]}(),function(){"use strict";function e(e,t,a){function r(){t.info("Activated Boulder View")}var i=this;i.title="Boulder",i.boulderId=parseInt(e.boulderId),i.listOfBoulders=[{id:1,name:"Carnage",grade:"7B"},{id:2,name:"Aerodynamite",grade:"7B"},{id:3,name:"L'hélicopter",grade:"7A"},{id:4,name:"TimTim",grade:"7A"},{id:5,name:"L'Ange Naif",grade:"7C"},{id:6,name:"Le lot de boudins",grade:"7C"}];for(var n=0;n<i.listOfBoulders.length;n++)if(i.listOfBoulders[n].id===i.boulderId){i.boulder=i.listOfBoulders[n];break}r()}angular.module("app.boulder").controller("BoulderController"),e.$inject=["$stateParams","logger"]}(),function(){"use strict";function e(e){e.configureStates(t())}function t(){return[{state:"boulder",config:{url:"/boulder/{boulderId:[0-9]{1,5}}",templateUrl:"app/boulder/boulder.html",controller:"BoulderController",controllerAs:"vm",title:"List of Areas"}}]}angular.module("app.boulder").run(e),e.$inject=["routerHelper"]}(),function(){"use strict";function e(e){e.options.timeOut=4e3,e.options.positionClass="toast-bottom-right"}function t(e,t,a){e.debugEnabled&&e.debugEnabled(!0),a.configure(r.appErrorPrefix),t.configure({docTitle:r.appTitle+": "})}var a=angular.module("app.core");a.config(e),e.$inject=["toastr"];var r={appErrorPrefix:"[bleauJs Error] ",appTitle:"Bleau.JS"};a.value("config",r),a.config(t),t.$inject=["$logProvider","routerHelperProvider","exceptionHandlerProvider"]}(),function(){"use strict";angular.module("app.core").constant("toastr",toastr).constant("moment",moment)}(),function(){"use strict";function e(e){var a="/404";e.configureStates(t(),a)}function t(){return[{state:"404",config:{url:"/404",templateUrl:"app/core/404.html",title:"404"}}]}angular.module("app.core").run(e),e.$inject=["routerHelper"]}(),function(){"use strict";function e(e,t,a,r){function i(){return t.when(72)}function n(){function t(e){return e.data}function r(e){return a.catcher("XHR Failed for getPeople")(e)}return e.get("/api/people").then(t)["catch"](r)}function s(){function t(e){return e.data}function r(e){return a.catcher("XHR Failed for getPeople")(e)}return e.get("/api/areas").then(t)["catch"](r)}var o={getPeople:n,getMessageCount:i,getAreas:s};return o}angular.module("app.core").factory("dataservice",e),e.$inject=["$http","$q","exception","logger"]}(),function(){"use strict";function e(e,t,a){function r(){var t=[i(),n()];return e.all(t).then(function(){a.info("Activated Dashboard View")})}function i(){return t.getMessageCount().then(function(e){return s.messageCount=e,s.messageCount})}function n(){return t.getPeople().then(function(e){return s.people=e,s.people})}var s=this;s.news={title:"bleauJs",description:"Hot Towel Angular is a SPA template for Angular developers."},s.messageCount=0,s.people=[],s.title="Dashboard",r()}angular.module("app.dashboard").controller("DashboardController",e),e.$inject=["$q","dataservice","logger"]}(),function(){"use strict";function e(e){e.configureStates(t())}function t(){return[{state:"dashboard",config:{url:"/",templateUrl:"app/dashboard/dashboard.html",controller:"DashboardController",controllerAs:"vm",title:"dashboard",settings:{nav:1,content:'<i class="fa fa-dashboard"></i> Dashboard'}}}]}angular.module("app.dashboard").run(e),e.$inject=["routerHelper"]}(),function(){"use strict";function e(){function e(e,t,a){function r(t){var a="dropy";t.preventDefault(),n.hasClass(a)?n.hasClass(a)&&(n.removeClass(a),i.slideUp(350,e.whenDoneAnimating)):(i.slideDown(350,e.whenDoneAnimating),n.addClass(a))}var i=t.find(".sidebar-inner"),n=t.find(".sidebar-dropdown a");t.addClass("sidebar"),n.click(r)}var t={link:e,restrict:"EA",scope:{whenDoneAnimating:"&?"}};return t}angular.module("app.layout").directive("htSidebar",e)}(),function(){"use strict";function e(){function e(){}var t={bindToController:!0,controller:e,controllerAs:"vm",restrict:"EA",scope:{navline:"="},templateUrl:"app/layout/ht-top-nav.html"};return t}angular.module("app.layout").directive("htTopNav",e)}(),function(){"use strict";function e(e,t,a,r){function i(){r.success(a.appTitle+" loaded!",null),n()}function n(){t(function(){e.showSplash=!1},1e3)}var s=this;s.busyMessage="Please wait ...",s.isBusy=!0,e.showSplash=!1,s.navline={title:a.appTitle,text:"Created by John Papa",link:"http://twitter.com/john_papa"},i()}angular.module("app.layout").controller("ShellController",e),e.$inject=["$rootScope","$timeout","config","logger"]}(),function(){"use strict";function e(e,t){function a(){r()}function r(){n.navRoutes=s.filter(function(e){return e.settings&&e.settings.nav}).sort(function(e,t){return e.settings.nav-t.settings.nav})}function i(t){if(!t.title||!e.current||!e.current.title)return"";var a=t.title;return e.current.title.substr(0,a.length)===a?"current":""}var n=this,s=t.getStates();n.isCurrent=i,a()}angular.module("app.layout").controller("SidebarController",e),e.$inject=["$state","routerHelper"]}(),function(){"use strict";function e(e){function t(e,t,i){i.$observe("htImgPerson",function(e){e=a+(e||r),i.$set("src",e)})}var a=e.imageBasePath,r=e.unknownPersonImageSource,i={link:t,restrict:"A"};return i}angular.module("app.widgets").directive("htImgPerson",e),e.$inject=["config"]}(),function(){"use strict";function e(){var e={scope:{title:"@",subtitle:"@",rightText:"@",allowCollapse:"@"},templateUrl:"app/widgets/widget-header.html",restrict:"EA"};return e}angular.module("app.widgets").directive("htWidgetHeader",e)}(),angular.module("app.core").run(["$templateCache",function(e){e.put("app/areaList/arealist.html",'<section class=mainbar><section class=matter><div class=container><div class=row><div class="widget wviolet"><div ht-widget-header title={{vm.title}}></div><div class="widget-content user"><label>Search in areas:</label> <input ng-model=searchAreas placeholder="Look for an area"> <label>Search in boulders:</label> <input ng-model=searchBoulders placeholder="Look for a boulder"><div ng-repeat="area in vm.areas | filter:{ AREANAME: searchAreas }" ng-show=filteredBoulders.length><button type=button ng-class="{0:\'btn btn-warning\', 1:\'btn btn-success\', \'2\':\'btn btn-info\'}[vm.getBtnState(filteredBoulders.length)]" ng-click=vm.clickArea($index)>{{filteredBoulders.length}}</button><b>{{area.AREANAME}}</b><ul><div ng-repeat="boulder in filteredBoulders = (area.boulders | filter:{ NAME: searchBoulders})" ng-if=$parent.vm.showAreas[$parent.$index]><li><a ui-sref="boulder({boulderId: \'{{boulder.id}}\'})">{{boulder.NAME}}</a></li></div></ul></div></div><div class=widget-foot><div class=clearfix></div></div></div></div></div></section></section>'),e.put("app/boulder/boulder.html",'<section class=mainbar><section class=matter><div class=container><div class=row><div class="widget wviolet"><div ht-widget-header title={{vm.title}}></div><div class="widget-content user"><label>{{vm.boulder.name}}</label><br>Grade: {{vm.boulder.grade}}</div><div class=widget-foot><div class=clearfix></div></div></div></div></div></section></section>'),e.put("app/core/404.html",'<section id=dashboard-view class=mainbar><section class=matter><div class=container><div class=row><div class=col-md-12><ul class=today-datas><li class=bred><div class=pull-left><i class="fa fa-warning"></i></div><div class="datas-text pull-right"><a><span class=bold>404</span></a>Page Not Found</div><div class=clearfix></div></li></ul></div></div><div class=row><div class="widget wblue"><div ht-widget-header title="Page Not Found" allow-collapse=true></div><div class="widget-content text-center text-info"><div class=container>No soup for you!</div></div><div class=widget-foot><div class=clearfix></div></div></div></div></div></section></section>'),e.put("app/dashboard/dashboard.html",'<section id=dashboard-view class=mainbar><section class=matter><div class=container><div class=row><div class=col-md-12><ul class=today-datas><li class=blightblue><div class=pull-left><i class="fa fa-plane"></i></div><div class="datas-text pull-right"><span class=bold>May 18 - 19, 2015</span> Castle Resort, Neverland</div><div class=clearfix></div></li><li class=borange><div class=pull-left><i class="fa fa-envelope"></i></div><div class="datas-text pull-right"><span class=bold>{{vm.messageCount}}</span> Messages</div><div class=clearfix></div></li></ul></div></div><div class=row><div class=col-md-6><div class="widget wviolet"><div ht-widget-header title=People allow-collapse=true></div><div class="widget-content text-center text-info"><table class="table table-condensed table-striped"><thead><tr><th>First Name</th><th>Last Name</th><th>Age</th><th>Location</th></tr></thead><tbody><tr ng-repeat="p in vm.people"><td>{{p.firstName}}</td><td>{{p.lastName}}</td><td>{{p.age}}</td><td>{{p.location}}</td></tr></tbody></table></div><div class=widget-foot><div class=clearfix></div></div></div></div><div class=col-md-6><div class="widget wgreen"><div ht-widget-header title={{vm.news.title}} allow-collapse=true></div><div class="widget-content text-center text-info"><small>{{vm.news.description}}</small></div><div class=widget-foot><div class=clearfix></div></div></div></div></div></div></section></section>'),e.put("app/layout/ht-top-nav.html",'<nav class="navbar navbar-fixed-top navbar-inverse"><div class=navbar-header><a href="/" class=navbar-brand><span class=brand-title>{{vm.navline.title}}</span></a> <a class="btn navbar-btn navbar-toggle" data-toggle=collapse data-target=.navbar-collapse><span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></a></div><div class="navbar-collapse collapse"><div class="pull-right navbar-logo"><ul class="nav navbar-nav pull-right"><li><a ng-href={{vm.navline.link}} target=_blank>{{vm.navline.text}}</a></li><li class="dropdown dropdown-big"><a href=http://www.angularjs.org target=_blank><img src=images/AngularJS-small.png></a></li><li><a href="http://www.gulpjs.com/" target=_blank><img src=images/gulp-tiny.png></a></li></ul></div></div></nav>'),e.put("app/layout/shell.html",'<div ng-controller="ShellController as vm"><header class=clearfix><ht-top-nav navline=vm.navline></ht-top-nav></header><section id=content class=content><div ng-include="\'app/layout/sidebar.html\'"></div><div ui-view class=shuffle-animation></div><div ngplus-overlay ngplus-overlay-delay-in=50 ngplus-overlay-delay-out=700 ngplus-overlay-animation=dissolve-animation><img src=images/busy.gif><div class="page-spinner-message overlay-message">{{vm.busyMessage}}</div></div></section></div>'),e.put("app/layout/sidebar.html",'<div ng-controller="SidebarController as vm"><ht-sidebar when-done-animating=vm.sidebarReady()><div class=sidebar-filler></div><div class=sidebar-dropdown><a href=#>Menu</a></div><div class=sidebar-inner><div class=sidebar-widget></div><ul class=navi><li class="nlightblue fade-selection-animation" ng-class=vm.isCurrent(r) ng-repeat="r in vm.navRoutes"><a ui-sref={{r.name}} ng-bind-html=r.settings.content></a></li></ul></div></ht-sidebar></div>'),e.put("app/widgets/widget-header.html",'<div class=widget-head><div class="page-title pull-left">{{title}}</div><small class=page-title-subtle ng-show=subtitle>({{subtitle}})</small><div class="widget-icons pull-right"></div><small class="pull-right page-title-subtle" ng-show=rightText>{{rightText}}</small><div class=clearfix></div></div>')}]);