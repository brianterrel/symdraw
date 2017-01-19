// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('cljsjs.react.dom');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__24790__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_44302 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_44302){
return (function (){
var _STAR_always_update_STAR_44303 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_44303;
}});})(_STAR_always_update_STAR_44302))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_44302;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args44304 = [];
var len__25865__auto___44307 = arguments.length;
var i__25866__auto___44308 = (0);
while(true){
if((i__25866__auto___44308 < len__25865__auto___44307)){
args44304.push((arguments[i__25866__auto___44308]));

var G__44309 = (i__25866__auto___44308 + (1));
i__25866__auto___44308 = G__44309;
continue;
} else {
}
break;
}

var G__44306 = args44304.length;
switch (G__44306) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44304.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__44315_44319 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__44316_44320 = null;
var count__44317_44321 = (0);
var i__44318_44322 = (0);
while(true){
if((i__44318_44322 < count__44317_44321)){
var v_44323 = cljs.core._nth.call(null,chunk__44316_44320,i__44318_44322);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_44323);

var G__44324 = seq__44315_44319;
var G__44325 = chunk__44316_44320;
var G__44326 = count__44317_44321;
var G__44327 = (i__44318_44322 + (1));
seq__44315_44319 = G__44324;
chunk__44316_44320 = G__44325;
count__44317_44321 = G__44326;
i__44318_44322 = G__44327;
continue;
} else {
var temp__4657__auto___44328 = cljs.core.seq.call(null,seq__44315_44319);
if(temp__4657__auto___44328){
var seq__44315_44329__$1 = temp__4657__auto___44328;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44315_44329__$1)){
var c__25601__auto___44330 = cljs.core.chunk_first.call(null,seq__44315_44329__$1);
var G__44331 = cljs.core.chunk_rest.call(null,seq__44315_44329__$1);
var G__44332 = c__25601__auto___44330;
var G__44333 = cljs.core.count.call(null,c__25601__auto___44330);
var G__44334 = (0);
seq__44315_44319 = G__44331;
chunk__44316_44320 = G__44332;
count__44317_44321 = G__44333;
i__44318_44322 = G__44334;
continue;
} else {
var v_44335 = cljs.core.first.call(null,seq__44315_44329__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_44335);

var G__44336 = cljs.core.next.call(null,seq__44315_44329__$1);
var G__44337 = null;
var G__44338 = (0);
var G__44339 = (0);
seq__44315_44319 = G__44336;
chunk__44316_44320 = G__44337;
count__44317_44321 = G__44338;
i__44318_44322 = G__44339;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1484800030782