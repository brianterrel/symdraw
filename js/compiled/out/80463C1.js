goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('symdraw.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__52254__delegate = function (x){
if(cljs.core.truth_(symdraw.core.on_js_reload)){
return cljs.core.apply.call(null,symdraw.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'symdraw.core/on-js-reload' is missing");
}
};
var G__52254 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__52255__i = 0, G__52255__a = new Array(arguments.length -  0);
while (G__52255__i < G__52255__a.length) {G__52255__a[G__52255__i] = arguments[G__52255__i + 0]; ++G__52255__i;}
  x = new cljs.core.IndexedSeq(G__52255__a,0);
} 
return G__52254__delegate.call(this,x);};
G__52254.cljs$lang$maxFixedArity = 0;
G__52254.cljs$lang$applyTo = (function (arglist__52256){
var x = cljs.core.seq(arglist__52256);
return G__52254__delegate(x);
});
G__52254.cljs$core$IFn$_invoke$arity$variadic = G__52254__delegate;
return G__52254;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3449/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));
