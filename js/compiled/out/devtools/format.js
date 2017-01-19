// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.format');
goog.require('cljs.core');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__25453__auto__ = (((value == null))?null:value);
var m__25454__auto__ = (devtools.format._header[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,value);
} else {
var m__25454__auto____$1 = (devtools.format._header["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__25453__auto__ = (((value == null))?null:value);
var m__25454__auto__ = (devtools.format._has_body[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,value);
} else {
var m__25454__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__25453__auto__ = (((value == null))?null:value);
var m__25454__auto__ = (devtools.format._body[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,value);
} else {
var m__25454__auto____$1 = (devtools.format._body["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__30460__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__30460__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__30460__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__30460__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__30459__auto__ = temp__4657__auto____$2;
return goog.object.get(o__30459__auto__,"make_template");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__30460__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__30460__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__30460__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__30460__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__30459__auto__ = temp__4657__auto____$2;
return goog.object.get(o__30459__auto__,"make_group");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__30460__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__30460__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__30460__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__30460__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__30459__auto__ = temp__4657__auto____$2;
return goog.object.get(o__30459__auto__,"make_reference");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__30460__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__30460__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__30460__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__30460__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__30459__auto__ = temp__4657__auto____$2;
return goog.object.get(o__30459__auto__,"make_surrogate");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__30460__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__30460__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__30460__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__30460__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__30459__auto__ = temp__4657__auto____$2;
return goog.object.get(o__30459__auto__,"render_markup");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__30460__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__30460__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__30460__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__30460__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__30459__auto__ = temp__4657__auto____$2;
return goog.object.get(o__30459__auto__,"_LT_header_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__30460__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__30460__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__30460__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__30460__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__30459__auto__ = temp__4657__auto____$2;
return goog.object.get(o__30459__auto__,"_LT_standard_body_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__25872__auto__ = [];
var len__25865__auto___52263 = arguments.length;
var i__25866__auto___52264 = (0);
while(true){
if((i__25866__auto___52264 < len__25865__auto___52263)){
args__25872__auto__.push((arguments[i__25866__auto___52264]));

var G__52265 = (i__25866__auto___52264 + (1));
i__25866__auto___52264 = G__52265;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq52262){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52262));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__25872__auto__ = [];
var len__25865__auto___52267 = arguments.length;
var i__25866__auto___52268 = (0);
while(true){
if((i__25866__auto___52268 < len__25865__auto___52267)){
args__25872__auto__.push((arguments[i__25866__auto___52268]));

var G__52269 = (i__25866__auto___52268 + (1));
i__25866__auto___52268 = G__52269;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq52266){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52266));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__25872__auto__ = [];
var len__25865__auto___52271 = arguments.length;
var i__25866__auto___52272 = (0);
while(true){
if((i__25866__auto___52272 < len__25865__auto___52271)){
args__25872__auto__.push((arguments[i__25866__auto___52272]));

var G__52273 = (i__25866__auto___52272 + (1));
i__25866__auto___52272 = G__52273;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq52270){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52270));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__25872__auto__ = [];
var len__25865__auto___52275 = arguments.length;
var i__25866__auto___52276 = (0);
while(true){
if((i__25866__auto___52276 < len__25865__auto___52275)){
args__25872__auto__.push((arguments[i__25866__auto___52276]));

var G__52277 = (i__25866__auto___52276 + (1));
i__25866__auto___52276 = G__52277;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq52274){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52274));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__25872__auto__ = [];
var len__25865__auto___52279 = arguments.length;
var i__25866__auto___52280 = (0);
while(true){
if((i__25866__auto___52280 < len__25865__auto___52279)){
args__25872__auto__.push((arguments[i__25866__auto___52280]));

var G__52281 = (i__25866__auto___52280 + (1));
i__25866__auto___52280 = G__52281;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq52278){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52278));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__25872__auto__ = [];
var len__25865__auto___52283 = arguments.length;
var i__25866__auto___52284 = (0);
while(true){
if((i__25866__auto___52284 < len__25865__auto___52283)){
args__25872__auto__.push((arguments[i__25866__auto___52284]));

var G__52285 = (i__25866__auto___52284 + (1));
i__25866__auto___52284 = G__52285;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq52282){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52282));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__25872__auto__ = [];
var len__25865__auto___52287 = arguments.length;
var i__25866__auto___52288 = (0);
while(true){
if((i__25866__auto___52288 < len__25865__auto___52287)){
args__25872__auto__.push((arguments[i__25866__auto___52288]));

var G__52289 = (i__25866__auto___52288 + (1));
i__25866__auto___52288 = G__52289;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq52286){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52286));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__25872__auto__ = [];
var len__25865__auto___52297 = arguments.length;
var i__25866__auto___52298 = (0);
while(true){
if((i__25866__auto___52298 < len__25865__auto___52297)){
args__25872__auto__.push((arguments[i__25866__auto___52298]));

var G__52299 = (i__25866__auto___52298 + (1));
i__25866__auto___52298 = G__52299;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__52293){
var vec__52294 = p__52293;
var state_override = cljs.core.nth.call(null,vec__52294,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__52294,state_override){
return (function (p1__52290_SHARP_){
return cljs.core.merge.call(null,p1__52290_SHARP_,state_override);
});})(vec__52294,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq52291){
var G__52292 = cljs.core.first.call(null,seq52291);
var seq52291__$1 = cljs.core.next.call(null,seq52291);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__52292,seq52291__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__25872__auto__ = [];
var len__25865__auto___52301 = arguments.length;
var i__25866__auto___52302 = (0);
while(true){
if((i__25866__auto___52302 < len__25865__auto___52301)){
args__25872__auto__.push((arguments[i__25866__auto___52302]));

var G__52303 = (i__25866__auto___52302 + (1));
i__25866__auto___52302 = G__52303;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq52300){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52300));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__25872__auto__ = [];
var len__25865__auto___52306 = arguments.length;
var i__25866__auto___52307 = (0);
while(true){
if((i__25866__auto___52307 < len__25865__auto___52306)){
args__25872__auto__.push((arguments[i__25866__auto___52307]));

var G__52308 = (i__25866__auto___52307 + (1));
i__25866__auto___52307 = G__52308;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq52304){
var G__52305 = cljs.core.first.call(null,seq52304);
var seq52304__$1 = cljs.core.next.call(null,seq52304);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__52305,seq52304__$1);
});


//# sourceMappingURL=format.js.map?rel=1484800042968