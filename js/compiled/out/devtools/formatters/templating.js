// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x54534_54535 = value;
x54534_54535.devtools$protocols$IGroup$ = true;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$IGroup$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x54539_54540 = value;
x54539_54540.devtools$protocols$ITemplate$ = true;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ITemplate$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x54544_54545 = value;
x54544_54545.devtools$protocols$ISurrogate$ = true;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ISurrogate$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__24778__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__24778__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__24778__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__25872__auto__ = [];
var len__25865__auto___54553 = arguments.length;
var i__25866__auto___54554 = (0);
while(true){
if((i__25866__auto___54554 < len__25865__auto___54553)){
args__25872__auto__.push((arguments[i__25866__auto___54554]));

var G__54555 = (i__25866__auto___54554 + (1));
i__25866__auto___54554 = G__54555;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__54549_54556 = cljs.core.seq.call(null,items);
var chunk__54550_54557 = null;
var count__54551_54558 = (0);
var i__54552_54559 = (0);
while(true){
if((i__54552_54559 < count__54551_54558)){
var item_54560 = cljs.core._nth.call(null,chunk__54550_54557,i__54552_54559);
if(cljs.core.some_QMARK_.call(null,item_54560)){
if(cljs.core.coll_QMARK_.call(null,item_54560)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_54560)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_54560));
}
} else {
}

var G__54561 = seq__54549_54556;
var G__54562 = chunk__54550_54557;
var G__54563 = count__54551_54558;
var G__54564 = (i__54552_54559 + (1));
seq__54549_54556 = G__54561;
chunk__54550_54557 = G__54562;
count__54551_54558 = G__54563;
i__54552_54559 = G__54564;
continue;
} else {
var temp__4657__auto___54565 = cljs.core.seq.call(null,seq__54549_54556);
if(temp__4657__auto___54565){
var seq__54549_54566__$1 = temp__4657__auto___54565;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54549_54566__$1)){
var c__25601__auto___54567 = cljs.core.chunk_first.call(null,seq__54549_54566__$1);
var G__54568 = cljs.core.chunk_rest.call(null,seq__54549_54566__$1);
var G__54569 = c__25601__auto___54567;
var G__54570 = cljs.core.count.call(null,c__25601__auto___54567);
var G__54571 = (0);
seq__54549_54556 = G__54568;
chunk__54550_54557 = G__54569;
count__54551_54558 = G__54570;
i__54552_54559 = G__54571;
continue;
} else {
var item_54572 = cljs.core.first.call(null,seq__54549_54566__$1);
if(cljs.core.some_QMARK_.call(null,item_54572)){
if(cljs.core.coll_QMARK_.call(null,item_54572)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_54572)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_54572));
}
} else {
}

var G__54573 = cljs.core.next.call(null,seq__54549_54566__$1);
var G__54574 = null;
var G__54575 = (0);
var G__54576 = (0);
seq__54549_54556 = G__54573;
chunk__54550_54557 = G__54574;
count__54551_54558 = G__54575;
i__54552_54559 = G__54576;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq54548){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54548));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__25872__auto__ = [];
var len__25865__auto___54584 = arguments.length;
var i__25866__auto___54585 = (0);
while(true){
if((i__25866__auto___54585 < len__25865__auto___54584)){
args__25872__auto__.push((arguments[i__25866__auto___54585]));

var G__54586 = (i__25866__auto___54585 + (1));
i__25866__auto___54585 = G__54586;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((2) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25873__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__54580_54587 = cljs.core.seq.call(null,children);
var chunk__54581_54588 = null;
var count__54582_54589 = (0);
var i__54583_54590 = (0);
while(true){
if((i__54583_54590 < count__54582_54589)){
var child_54591 = cljs.core._nth.call(null,chunk__54581_54588,i__54583_54590);
if(cljs.core.some_QMARK_.call(null,child_54591)){
if(cljs.core.coll_QMARK_.call(null,child_54591)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_54591))));
} else {
var temp__4655__auto___54592 = devtools.formatters.helpers.pref.call(null,child_54591);
if(cljs.core.truth_(temp__4655__auto___54592)){
var child_value_54593 = temp__4655__auto___54592;
template.push(child_value_54593);
} else {
}
}
} else {
}

var G__54594 = seq__54580_54587;
var G__54595 = chunk__54581_54588;
var G__54596 = count__54582_54589;
var G__54597 = (i__54583_54590 + (1));
seq__54580_54587 = G__54594;
chunk__54581_54588 = G__54595;
count__54582_54589 = G__54596;
i__54583_54590 = G__54597;
continue;
} else {
var temp__4657__auto___54598 = cljs.core.seq.call(null,seq__54580_54587);
if(temp__4657__auto___54598){
var seq__54580_54599__$1 = temp__4657__auto___54598;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54580_54599__$1)){
var c__25601__auto___54600 = cljs.core.chunk_first.call(null,seq__54580_54599__$1);
var G__54601 = cljs.core.chunk_rest.call(null,seq__54580_54599__$1);
var G__54602 = c__25601__auto___54600;
var G__54603 = cljs.core.count.call(null,c__25601__auto___54600);
var G__54604 = (0);
seq__54580_54587 = G__54601;
chunk__54581_54588 = G__54602;
count__54582_54589 = G__54603;
i__54583_54590 = G__54604;
continue;
} else {
var child_54605 = cljs.core.first.call(null,seq__54580_54599__$1);
if(cljs.core.some_QMARK_.call(null,child_54605)){
if(cljs.core.coll_QMARK_.call(null,child_54605)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_54605))));
} else {
var temp__4655__auto___54606 = devtools.formatters.helpers.pref.call(null,child_54605);
if(cljs.core.truth_(temp__4655__auto___54606)){
var child_value_54607 = temp__4655__auto___54606;
template.push(child_value_54607);
} else {
}
}
} else {
}

var G__54608 = cljs.core.next.call(null,seq__54580_54599__$1);
var G__54609 = null;
var G__54610 = (0);
var G__54611 = (0);
seq__54580_54587 = G__54608;
chunk__54581_54588 = G__54609;
count__54582_54589 = G__54610;
i__54583_54590 = G__54611;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq54577){
var G__54578 = cljs.core.first.call(null,seq54577);
var seq54577__$1 = cljs.core.next.call(null,seq54577);
var G__54579 = cljs.core.first.call(null,seq54577__$1);
var seq54577__$2 = cljs.core.next.call(null,seq54577__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__54578,G__54579,seq54577__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__25872__auto__ = [];
var len__25865__auto___54614 = arguments.length;
var i__25866__auto___54615 = (0);
while(true){
if((i__25866__auto___54615 < len__25865__auto___54614)){
args__25872__auto__.push((arguments[i__25866__auto___54615]));

var G__54616 = (i__25866__auto___54615 + (1));
i__25866__auto___54615 = G__54616;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,goog.object.get(template,"concat").apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq54612){
var G__54613 = cljs.core.first.call(null,seq54612);
var seq54612__$1 = cljs.core.next.call(null,seq54612);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__54613,seq54612__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__25872__auto__ = [];
var len__25865__auto___54619 = arguments.length;
var i__25866__auto___54620 = (0);
while(true){
if((i__25866__auto___54620 < len__25865__auto___54619)){
args__25872__auto__.push((arguments[i__25866__auto___54620]));

var G__54621 = (i__25866__auto___54620 + (1));
i__25866__auto___54620 = G__54621;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq54617){
var G__54618 = cljs.core.first.call(null,seq54617);
var seq54617__$1 = cljs.core.next.call(null,seq54617);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__54618,seq54617__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args54622 = [];
var len__25865__auto___54627 = arguments.length;
var i__25866__auto___54628 = (0);
while(true){
if((i__25866__auto___54628 < len__25865__auto___54627)){
args54622.push((arguments[i__25866__auto___54628]));

var G__54629 = (i__25866__auto___54628 + (1));
i__25866__auto___54628 = G__54629;
continue;
} else {
}
break;
}

var G__54624 = args54622.length;
switch (G__54624) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54622.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj54626 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__24790__auto__ = start_index;
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return (0);
}
})()};
return obj54626;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"target");
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"header");
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"body");
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"startIndex");
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__25872__auto__ = [];
var len__25865__auto___54637 = arguments.length;
var i__25866__auto___54638 = (0);
while(true){
if((i__25866__auto___54638 < len__25865__auto___54637)){
args__25872__auto__.push((arguments[i__25866__auto___54638]));

var G__54639 = (i__25866__auto___54638 + (1));
i__25866__auto___54638 = G__54639;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__54633){
var vec__54634 = p__54633;
var state_override_fn = cljs.core.nth.call(null,vec__54634,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((cljs.core.some_QMARK_.call(null,state_override_fn))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq54631){
var G__54632 = cljs.core.first.call(null,seq54631);
var seq54631__$1 = cljs.core.next.call(null,seq54631);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__54632,seq54631__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__25776__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_54643_54646 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_54644_54647 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_54643_54646,_STAR_print_fn_STAR_54644_54647,sb__25776__auto__){
return (function (x__25777__auto__){
return sb__25776__auto__.append(x__25777__auto__);
});})(_STAR_print_newline_STAR_54643_54646,_STAR_print_fn_STAR_54644_54647,sb__25776__auto__))
;

try{var _STAR_print_level_STAR_54645_54648 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_54645_54648;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_54644_54647;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_54643_54646;
}
return [cljs.core.str(sb__25776__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_54650 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_54650;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.formatters.templating.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.formatters.templating.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str("\n"),cljs.core.str("Render path: "),cljs.core.str(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),cljs.core.str("\n"),cljs.core.str("Render stack:\n"),cljs.core.str(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__54652 = name;
switch (G__54652) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("no matching special tag name: '"),cljs.core.str(name),cljs.core.str("'")].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__54657 = tag;
var html_tag = cljs.core.nth.call(null,vec__54657,(0),null);
var style = cljs.core.nth.call(null,vec__54657,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_54661 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("invalid json-ml markup at "),cljs.core.str(devtools.formatters.templating.print_preview.call(null,markup)),cljs.core.str(":")].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_54661;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_54664 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_54665 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_54665;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_54664;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("result of markup rendering must be a template,\n"),cljs.core.str("resolved to "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str("initial value: "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__54666 = initial_value;
var G__54667 = value.call(null);
initial_value = G__54666;
value = G__54667;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__54668 = initial_value;
var G__54669 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__54668;
value = G__54669;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__54670 = initial_value;
var G__54671 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__54670;
value = G__54671;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1484800048681