// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__43827__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__43827 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43828__i = 0, G__43828__a = new Array(arguments.length -  0);
while (G__43828__i < G__43828__a.length) {G__43828__a[G__43828__i] = arguments[G__43828__i + 0]; ++G__43828__i;}
  args = new cljs.core.IndexedSeq(G__43828__a,0);
} 
return G__43827__delegate.call(this,args);};
G__43827.cljs$lang$maxFixedArity = 0;
G__43827.cljs$lang$applyTo = (function (arglist__43829){
var args = cljs.core.seq(arglist__43829);
return G__43827__delegate(args);
});
G__43827.cljs$core$IFn$_invoke$arity$variadic = G__43827__delegate;
return G__43827;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__43830__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__43830 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43831__i = 0, G__43831__a = new Array(arguments.length -  0);
while (G__43831__i < G__43831__a.length) {G__43831__a[G__43831__i] = arguments[G__43831__i + 0]; ++G__43831__i;}
  args = new cljs.core.IndexedSeq(G__43831__a,0);
} 
return G__43830__delegate.call(this,args);};
G__43830.cljs$lang$maxFixedArity = 0;
G__43830.cljs$lang$applyTo = (function (arglist__43832){
var args = cljs.core.seq(arglist__43832);
return G__43830__delegate(args);
});
G__43830.cljs$core$IFn$_invoke$arity$variadic = G__43830__delegate;
return G__43830;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1484800029061