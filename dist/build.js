'use strict';function b(){this.c=new Date;this.b=[];this.a=null;var a=b.prototype.g.bind(this);null!==this.a&&null!==this.a&&(clearInterval(this.a),this.a=null);this.a=setInterval(a,1E3)}b.prototype.g=function(){this.c.setTime(this.c.getTime()+1E7);c(this,this.c)};b.prototype.getTime=function(){return this.c};function c(a,m){a.b.forEach(function(a){a.notify({time:m,a:1E7})}.bind(a))};function d(a){this.b=a;this.a=new Date;a=this.b;-1===a.b.indexOf(this)&&a.b.push(this)}d.prototype.notify=function(a){this.c.$apply(function(){this.a.setTime(a.time.getTime())}.bind(this))};d.prototype.link=function(a){this.c=a;a.time=this.a;a.$on("$destroy",function(){var a=this.b;console.log("unregister observer");var f=a.b.indexOf(this);-1!==f&&a.b.splice(f,1)}.bind(this))};
function e(a){a=new d(a);return{replace:!0,restrict:"EA",link:d.prototype.link.bind(a),template:"<div>The time is {{time.getHours()}} {{time.getMinutes()}} {{time.getSeconds()}}</div>"}}e.$inject=["clock"];var g=angular.module("pf.Clock.module",["ui.router"]);g.f=function(){console.log("Clock configuration")};g.config(g.f).service("clock",b).directive("clockDirective",e);function h(){}h.$inject=["clock"];var k=angular.module("evolution.states.module",["ui.router"]);k.f=function(a){a.state("first",{url:"/first",templateUrl:"app/states/evolution/first.html",controller:"FirstController as firstCtrl"})};k.f.$inject=["$stateProvider"];k.config(k.f).controller("FirstController",h);angular.module("evolution",["ui.router",k.name,g.name]).config(l);function l(){console.log("Configure main module")}l.$inject=["$urlRouterProvider"];
