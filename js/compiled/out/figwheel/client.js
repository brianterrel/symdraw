// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.8";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args51408 = [];
var len__25865__auto___51411 = arguments.length;
var i__25866__auto___51412 = (0);
while(true){
if((i__25866__auto___51412 < len__25865__auto___51411)){
args51408.push((arguments[i__25866__auto___51412]));

var G__51413 = (i__25866__auto___51412 + (1));
i__25866__auto___51412 = G__51413;
continue;
} else {
}
break;
}

var G__51410 = args51408.length;
switch (G__51410) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51408.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__25872__auto__ = [];
var len__25865__auto___51416 = arguments.length;
var i__25866__auto___51417 = (0);
while(true){
if((i__25866__auto___51417 < len__25865__auto___51416)){
args__25872__auto__.push((arguments[i__25866__auto___51417]));

var G__51418 = (i__25866__auto___51417 + (1));
i__25866__auto___51417 = G__51418;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq51415){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51415));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__25872__auto__ = [];
var len__25865__auto___51420 = arguments.length;
var i__25866__auto___51421 = (0);
while(true){
if((i__25866__auto___51421 < len__25865__auto___51420)){
args__25872__auto__.push((arguments[i__25866__auto___51421]));

var G__51422 = (i__25866__auto___51421 + (1));
i__25866__auto___51421 = G__51422;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq51419){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51419));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__51423 = cljs.core._EQ_;
var expr__51424 = (function (){var or__24790__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e51427){if((e51427 instanceof Error)){
var e = e51427;
return false;
} else {
throw e51427;

}
}})();
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__51423.call(null,"true",expr__51424))){
return true;
} else {
if(cljs.core.truth_(pred__51423.call(null,"false",expr__51424))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__51424)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e51429){if((e51429 instanceof Error)){
var e = e51429;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e51429;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__51430){
var map__51433 = p__51430;
var map__51433__$1 = ((((!((map__51433 == null)))?((((map__51433.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51433.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51433):map__51433);
var message = cljs.core.get.call(null,map__51433__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__51433__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__24790__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__24778__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__24778__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__24778__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__28544__auto___51595 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28544__auto___51595,ch){
return (function (){
var f__28545__auto__ = (function (){var switch__28523__auto__ = ((function (c__28544__auto___51595,ch){
return (function (state_51564){
var state_val_51565 = (state_51564[(1)]);
if((state_val_51565 === (7))){
var inst_51560 = (state_51564[(2)]);
var state_51564__$1 = state_51564;
var statearr_51566_51596 = state_51564__$1;
(statearr_51566_51596[(2)] = inst_51560);

(statearr_51566_51596[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51565 === (1))){
var state_51564__$1 = state_51564;
var statearr_51567_51597 = state_51564__$1;
(statearr_51567_51597[(2)] = null);

(statearr_51567_51597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51565 === (4))){
var inst_51517 = (state_51564[(7)]);
var inst_51517__$1 = (state_51564[(2)]);
var state_51564__$1 = (function (){var statearr_51568 = state_51564;
(statearr_51568[(7)] = inst_51517__$1);

return statearr_51568;
})();
if(cljs.core.truth_(inst_51517__$1)){
var statearr_51569_51598 = state_51564__$1;
(statearr_51569_51598[(1)] = (5));

} else {
var statearr_51570_51599 = state_51564__$1;
(statearr_51570_51599[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51565 === (15))){
var inst_51524 = (state_51564[(8)]);
var inst_51539 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_51524);
var inst_51540 = cljs.core.first.call(null,inst_51539);
var inst_51541 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_51540);
var inst_51542 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_51541)].join('');
var inst_51543 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_51542);
var state_51564__$1 = state_51564;
var statearr_51571_51600 = state_51564__$1;
(statearr_51571_51600[(2)] = inst_51543);

(statearr_51571_51600[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51565 === (13))){
var inst_51548 = (state_51564[(2)]);
var state_51564__$1 = state_51564;
var statearr_51572_51601 = state_51564__$1;
(statearr_51572_51601[(2)] = inst_51548);

(statearr_51572_51601[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51565 === (6))){
var state_51564__$1 = state_51564;
var statearr_51573_51602 = state_51564__$1;
(statearr_51573_51602[(2)] = null);

(statearr_51573_51602[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51565 === (17))){
var inst_51546 = (state_51564[(2)]);
var state_51564__$1 = state_51564;
var statearr_51574_51603 = state_51564__$1;
(statearr_51574_51603[(2)] = inst_51546);

(statearr_51574_51603[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51565 === (3))){
var inst_51562 = (state_51564[(2)]);
var state_51564__$1 = state_51564;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51564__$1,inst_51562);
} else {
if((state_val_51565 === (12))){
var inst_51523 = (state_51564[(9)]);
var inst_51537 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_51523,opts);
var state_51564__$1 = state_51564;
if(cljs.core.truth_(inst_51537)){
var statearr_51575_51604 = state_51564__$1;
(statearr_51575_51604[(1)] = (15));

} else {
var statearr_51576_51605 = state_51564__$1;
(statearr_51576_51605[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51565 === (2))){
var state_51564__$1 = state_51564;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51564__$1,(4),ch);
} else {
if((state_val_51565 === (11))){
var inst_51524 = (state_51564[(8)]);
var inst_51529 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51530 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_51524);
var inst_51531 = cljs.core.async.timeout.call(null,(1000));
var inst_51532 = [inst_51530,inst_51531];
var inst_51533 = (new cljs.core.PersistentVector(null,2,(5),inst_51529,inst_51532,null));
var state_51564__$1 = state_51564;
return cljs.core.async.ioc_alts_BANG_.call(null,state_51564__$1,(14),inst_51533);
} else {
if((state_val_51565 === (9))){
var inst_51524 = (state_51564[(8)]);
var inst_51550 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_51551 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_51524);
var inst_51552 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_51551);
var inst_51553 = [cljs.core.str("Not loading: "),cljs.core.str(inst_51552)].join('');
var inst_51554 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_51553);
var state_51564__$1 = (function (){var statearr_51577 = state_51564;
(statearr_51577[(10)] = inst_51550);

return statearr_51577;
})();
var statearr_51578_51606 = state_51564__$1;
(statearr_51578_51606[(2)] = inst_51554);

(statearr_51578_51606[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51565 === (5))){
var inst_51517 = (state_51564[(7)]);
var inst_51519 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_51520 = (new cljs.core.PersistentArrayMap(null,2,inst_51519,null));
var inst_51521 = (new cljs.core.PersistentHashSet(null,inst_51520,null));
var inst_51522 = figwheel.client.focus_msgs.call(null,inst_51521,inst_51517);
var inst_51523 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_51522);
var inst_51524 = cljs.core.first.call(null,inst_51522);
var inst_51525 = figwheel.client.autoload_QMARK_.call(null);
var state_51564__$1 = (function (){var statearr_51579 = state_51564;
(statearr_51579[(8)] = inst_51524);

(statearr_51579[(9)] = inst_51523);

return statearr_51579;
})();
if(cljs.core.truth_(inst_51525)){
var statearr_51580_51607 = state_51564__$1;
(statearr_51580_51607[(1)] = (8));

} else {
var statearr_51581_51608 = state_51564__$1;
(statearr_51581_51608[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51565 === (14))){
var inst_51535 = (state_51564[(2)]);
var state_51564__$1 = state_51564;
var statearr_51582_51609 = state_51564__$1;
(statearr_51582_51609[(2)] = inst_51535);

(statearr_51582_51609[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51565 === (16))){
var state_51564__$1 = state_51564;
var statearr_51583_51610 = state_51564__$1;
(statearr_51583_51610[(2)] = null);

(statearr_51583_51610[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51565 === (10))){
var inst_51556 = (state_51564[(2)]);
var state_51564__$1 = (function (){var statearr_51584 = state_51564;
(statearr_51584[(11)] = inst_51556);

return statearr_51584;
})();
var statearr_51585_51611 = state_51564__$1;
(statearr_51585_51611[(2)] = null);

(statearr_51585_51611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51565 === (8))){
var inst_51523 = (state_51564[(9)]);
var inst_51527 = figwheel.client.reload_file_state_QMARK_.call(null,inst_51523,opts);
var state_51564__$1 = state_51564;
if(cljs.core.truth_(inst_51527)){
var statearr_51586_51612 = state_51564__$1;
(statearr_51586_51612[(1)] = (11));

} else {
var statearr_51587_51613 = state_51564__$1;
(statearr_51587_51613[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28544__auto___51595,ch))
;
return ((function (switch__28523__auto__,c__28544__auto___51595,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28524__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28524__auto____0 = (function (){
var statearr_51591 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51591[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28524__auto__);

(statearr_51591[(1)] = (1));

return statearr_51591;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28524__auto____1 = (function (state_51564){
while(true){
var ret_value__28525__auto__ = (function (){try{while(true){
var result__28526__auto__ = switch__28523__auto__.call(null,state_51564);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28526__auto__;
}
break;
}
}catch (e51592){if((e51592 instanceof Object)){
var ex__28527__auto__ = e51592;
var statearr_51593_51614 = state_51564;
(statearr_51593_51614[(5)] = ex__28527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51564);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51592;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51615 = state_51564;
state_51564 = G__51615;
continue;
} else {
return ret_value__28525__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28524__auto__ = function(state_51564){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28524__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28524__auto____1.call(this,state_51564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__28524__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28524__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28524__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28524__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28524__auto__;
})()
;})(switch__28523__auto__,c__28544__auto___51595,ch))
})();
var state__28546__auto__ = (function (){var statearr_51594 = f__28545__auto__.call(null);
(statearr_51594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28544__auto___51595);

return statearr_51594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28546__auto__);
});})(c__28544__auto___51595,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__51616_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__51616_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_51619 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_51619){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e51618){if((e51618 instanceof Error)){
var e = e51618;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_51619], null));
} else {
var e = e51618;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_51619))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__51620){
var map__51629 = p__51620;
var map__51629__$1 = ((((!((map__51629 == null)))?((((map__51629.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51629.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51629):map__51629);
var opts = map__51629__$1;
var build_id = cljs.core.get.call(null,map__51629__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__51629,map__51629__$1,opts,build_id){
return (function (p__51631){
var vec__51632 = p__51631;
var seq__51633 = cljs.core.seq.call(null,vec__51632);
var first__51634 = cljs.core.first.call(null,seq__51633);
var seq__51633__$1 = cljs.core.next.call(null,seq__51633);
var map__51635 = first__51634;
var map__51635__$1 = ((((!((map__51635 == null)))?((((map__51635.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51635.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51635):map__51635);
var msg = map__51635__$1;
var msg_name = cljs.core.get.call(null,map__51635__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__51633__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__51632,seq__51633,first__51634,seq__51633__$1,map__51635,map__51635__$1,msg,msg_name,_,map__51629,map__51629__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__51632,seq__51633,first__51634,seq__51633__$1,map__51635,map__51635__$1,msg,msg_name,_,map__51629,map__51629__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__51629,map__51629__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__51643){
var vec__51644 = p__51643;
var seq__51645 = cljs.core.seq.call(null,vec__51644);
var first__51646 = cljs.core.first.call(null,seq__51645);
var seq__51645__$1 = cljs.core.next.call(null,seq__51645);
var map__51647 = first__51646;
var map__51647__$1 = ((((!((map__51647 == null)))?((((map__51647.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51647.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51647):map__51647);
var msg = map__51647__$1;
var msg_name = cljs.core.get.call(null,map__51647__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__51645__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__51649){
var map__51661 = p__51649;
var map__51661__$1 = ((((!((map__51661 == null)))?((((map__51661.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51661.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51661):map__51661);
var on_compile_warning = cljs.core.get.call(null,map__51661__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__51661__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__51661,map__51661__$1,on_compile_warning,on_compile_fail){
return (function (p__51663){
var vec__51664 = p__51663;
var seq__51665 = cljs.core.seq.call(null,vec__51664);
var first__51666 = cljs.core.first.call(null,seq__51665);
var seq__51665__$1 = cljs.core.next.call(null,seq__51665);
var map__51667 = first__51666;
var map__51667__$1 = ((((!((map__51667 == null)))?((((map__51667.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51667.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51667):map__51667);
var msg = map__51667__$1;
var msg_name = cljs.core.get.call(null,map__51667__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__51665__$1;
var pred__51669 = cljs.core._EQ_;
var expr__51670 = msg_name;
if(cljs.core.truth_(pred__51669.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__51670))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__51669.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__51670))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__51661,map__51661__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__28544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28544__auto__,msg_hist,msg_names,msg){
return (function (){
var f__28545__auto__ = (function (){var switch__28523__auto__ = ((function (c__28544__auto__,msg_hist,msg_names,msg){
return (function (state_51898){
var state_val_51899 = (state_51898[(1)]);
if((state_val_51899 === (7))){
var inst_51818 = (state_51898[(2)]);
var state_51898__$1 = state_51898;
if(cljs.core.truth_(inst_51818)){
var statearr_51900_51950 = state_51898__$1;
(statearr_51900_51950[(1)] = (8));

} else {
var statearr_51901_51951 = state_51898__$1;
(statearr_51901_51951[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51899 === (20))){
var inst_51892 = (state_51898[(2)]);
var state_51898__$1 = state_51898;
var statearr_51902_51952 = state_51898__$1;
(statearr_51902_51952[(2)] = inst_51892);

(statearr_51902_51952[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51899 === (27))){
var inst_51888 = (state_51898[(2)]);
var state_51898__$1 = state_51898;
var statearr_51903_51953 = state_51898__$1;
(statearr_51903_51953[(2)] = inst_51888);

(statearr_51903_51953[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51899 === (1))){
var inst_51811 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_51898__$1 = state_51898;
if(cljs.core.truth_(inst_51811)){
var statearr_51904_51954 = state_51898__$1;
(statearr_51904_51954[(1)] = (2));

} else {
var statearr_51905_51955 = state_51898__$1;
(statearr_51905_51955[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51899 === (24))){
var inst_51890 = (state_51898[(2)]);
var state_51898__$1 = state_51898;
var statearr_51906_51956 = state_51898__$1;
(statearr_51906_51956[(2)] = inst_51890);

(statearr_51906_51956[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51899 === (4))){
var inst_51896 = (state_51898[(2)]);
var state_51898__$1 = state_51898;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51898__$1,inst_51896);
} else {
if((state_val_51899 === (15))){
var inst_51894 = (state_51898[(2)]);
var state_51898__$1 = state_51898;
var statearr_51907_51957 = state_51898__$1;
(statearr_51907_51957[(2)] = inst_51894);

(statearr_51907_51957[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51899 === (21))){
var inst_51847 = (state_51898[(2)]);
var inst_51848 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51849 = figwheel.client.auto_jump_to_error.call(null,opts,inst_51848);
var state_51898__$1 = (function (){var statearr_51908 = state_51898;
(statearr_51908[(7)] = inst_51847);

return statearr_51908;
})();
var statearr_51909_51958 = state_51898__$1;
(statearr_51909_51958[(2)] = inst_51849);

(statearr_51909_51958[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51899 === (31))){
var inst_51877 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_51898__$1 = state_51898;
if(cljs.core.truth_(inst_51877)){
var statearr_51910_51959 = state_51898__$1;
(statearr_51910_51959[(1)] = (34));

} else {
var statearr_51911_51960 = state_51898__$1;
(statearr_51911_51960[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51899 === (32))){
var inst_51886 = (state_51898[(2)]);
var state_51898__$1 = state_51898;
var statearr_51912_51961 = state_51898__$1;
(statearr_51912_51961[(2)] = inst_51886);

(statearr_51912_51961[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51899 === (33))){
var inst_51873 = (state_51898[(2)]);
var inst_51874 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51875 = figwheel.client.auto_jump_to_error.call(null,opts,inst_51874);
var state_51898__$1 = (function (){var statearr_51913 = state_51898;
(statearr_51913[(8)] = inst_51873);

return statearr_51913;
})();
var statearr_51914_51962 = state_51898__$1;
(statearr_51914_51962[(2)] = inst_51875);

(statearr_51914_51962[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51899 === (13))){
var inst_51832 = figwheel.client.heads_up.clear.call(null);
var state_51898__$1 = state_51898;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51898__$1,(16),inst_51832);
} else {
if((state_val_51899 === (22))){
var inst_51853 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51854 = figwheel.client.heads_up.append_warning_message.call(null,inst_51853);
var state_51898__$1 = state_51898;
var statearr_51915_51963 = state_51898__$1;
(statearr_51915_51963[(2)] = inst_51854);

(statearr_51915_51963[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51899 === (36))){
var inst_51884 = (state_51898[(2)]);
var state_51898__$1 = state_51898;
var statearr_51916_51964 = state_51898__$1;
(statearr_51916_51964[(2)] = inst_51884);

(statearr_51916_51964[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51899 === (29))){
var inst_51864 = (state_51898[(2)]);
var inst_51865 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51866 = figwheel.client.auto_jump_to_error.call(null,opts,inst_51865);
var state_51898__$1 = (function (){var statearr_51917 = state_51898;
(statearr_51917[(9)] = inst_51864);

return statearr_51917;
})();
var statearr_51918_51965 = state_51898__$1;
(statearr_51918_51965[(2)] = inst_51866);

(statearr_51918_51965[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51899 === (6))){
var inst_51813 = (state_51898[(10)]);
var state_51898__$1 = state_51898;
var statearr_51919_51966 = state_51898__$1;
(statearr_51919_51966[(2)] = inst_51813);

(statearr_51919_51966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51899 === (28))){
var inst_51860 = (state_51898[(2)]);
var inst_51861 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51862 = figwheel.client.heads_up.display_warning.call(null,inst_51861);
var state_51898__$1 = (function (){var statearr_51920 = state_51898;
(statearr_51920[(11)] = inst_51860);

return statearr_51920;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51898__$1,(29),inst_51862);
} else {
if((state_val_51899 === (25))){
var inst_51858 = figwheel.client.heads_up.clear.call(null);
var state_51898__$1 = state_51898;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51898__$1,(28),inst_51858);
} else {
if((state_val_51899 === (34))){
var inst_51879 = figwheel.client.heads_up.flash_loaded.call(null);
var state_51898__$1 = state_51898;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51898__$1,(37),inst_51879);
} else {
if((state_val_51899 === (17))){
var inst_51838 = (state_51898[(2)]);
var inst_51839 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51840 = figwheel.client.auto_jump_to_error.call(null,opts,inst_51839);
var state_51898__$1 = (function (){var statearr_51921 = state_51898;
(statearr_51921[(12)] = inst_51838);

return statearr_51921;
})();
var statearr_51922_51967 = state_51898__$1;
(statearr_51922_51967[(2)] = inst_51840);

(statearr_51922_51967[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51899 === (3))){
var inst_51830 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_51898__$1 = state_51898;
if(cljs.core.truth_(inst_51830)){
var statearr_51923_51968 = state_51898__$1;
(statearr_51923_51968[(1)] = (13));

} else {
var statearr_51924_51969 = state_51898__$1;
(statearr_51924_51969[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51899 === (12))){
var inst_51826 = (state_51898[(2)]);
var state_51898__$1 = state_51898;
var statearr_51925_51970 = state_51898__$1;
(statearr_51925_51970[(2)] = inst_51826);

(statearr_51925_51970[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51899 === (2))){
var inst_51813 = (state_51898[(10)]);
var inst_51813__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_51898__$1 = (function (){var statearr_51926 = state_51898;
(statearr_51926[(10)] = inst_51813__$1);

return statearr_51926;
})();
if(cljs.core.truth_(inst_51813__$1)){
var statearr_51927_51971 = state_51898__$1;
(statearr_51927_51971[(1)] = (5));

} else {
var statearr_51928_51972 = state_51898__$1;
(statearr_51928_51972[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51899 === (23))){
var inst_51856 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_51898__$1 = state_51898;
if(cljs.core.truth_(inst_51856)){
var statearr_51929_51973 = state_51898__$1;
(statearr_51929_51973[(1)] = (25));

} else {
var statearr_51930_51974 = state_51898__$1;
(statearr_51930_51974[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51899 === (35))){
var state_51898__$1 = state_51898;
var statearr_51931_51975 = state_51898__$1;
(statearr_51931_51975[(2)] = null);

(statearr_51931_51975[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51899 === (19))){
var inst_51851 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_51898__$1 = state_51898;
if(cljs.core.truth_(inst_51851)){
var statearr_51932_51976 = state_51898__$1;
(statearr_51932_51976[(1)] = (22));

} else {
var statearr_51933_51977 = state_51898__$1;
(statearr_51933_51977[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51899 === (11))){
var inst_51822 = (state_51898[(2)]);
var state_51898__$1 = state_51898;
var statearr_51934_51978 = state_51898__$1;
(statearr_51934_51978[(2)] = inst_51822);

(statearr_51934_51978[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51899 === (9))){
var inst_51824 = figwheel.client.heads_up.clear.call(null);
var state_51898__$1 = state_51898;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51898__$1,(12),inst_51824);
} else {
if((state_val_51899 === (5))){
var inst_51815 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_51898__$1 = state_51898;
var statearr_51935_51979 = state_51898__$1;
(statearr_51935_51979[(2)] = inst_51815);

(statearr_51935_51979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51899 === (14))){
var inst_51842 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_51898__$1 = state_51898;
if(cljs.core.truth_(inst_51842)){
var statearr_51936_51980 = state_51898__$1;
(statearr_51936_51980[(1)] = (18));

} else {
var statearr_51937_51981 = state_51898__$1;
(statearr_51937_51981[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51899 === (26))){
var inst_51868 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_51898__$1 = state_51898;
if(cljs.core.truth_(inst_51868)){
var statearr_51938_51982 = state_51898__$1;
(statearr_51938_51982[(1)] = (30));

} else {
var statearr_51939_51983 = state_51898__$1;
(statearr_51939_51983[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51899 === (16))){
var inst_51834 = (state_51898[(2)]);
var inst_51835 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51836 = figwheel.client.heads_up.display_exception.call(null,inst_51835);
var state_51898__$1 = (function (){var statearr_51940 = state_51898;
(statearr_51940[(13)] = inst_51834);

return statearr_51940;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51898__$1,(17),inst_51836);
} else {
if((state_val_51899 === (30))){
var inst_51870 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51871 = figwheel.client.heads_up.display_warning.call(null,inst_51870);
var state_51898__$1 = state_51898;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51898__$1,(33),inst_51871);
} else {
if((state_val_51899 === (10))){
var inst_51828 = (state_51898[(2)]);
var state_51898__$1 = state_51898;
var statearr_51941_51984 = state_51898__$1;
(statearr_51941_51984[(2)] = inst_51828);

(statearr_51941_51984[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51899 === (18))){
var inst_51844 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51845 = figwheel.client.heads_up.display_exception.call(null,inst_51844);
var state_51898__$1 = state_51898;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51898__$1,(21),inst_51845);
} else {
if((state_val_51899 === (37))){
var inst_51881 = (state_51898[(2)]);
var state_51898__$1 = state_51898;
var statearr_51942_51985 = state_51898__$1;
(statearr_51942_51985[(2)] = inst_51881);

(statearr_51942_51985[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51899 === (8))){
var inst_51820 = figwheel.client.heads_up.flash_loaded.call(null);
var state_51898__$1 = state_51898;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51898__$1,(11),inst_51820);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28544__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__28523__auto__,c__28544__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28524__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28524__auto____0 = (function (){
var statearr_51946 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51946[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28524__auto__);

(statearr_51946[(1)] = (1));

return statearr_51946;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28524__auto____1 = (function (state_51898){
while(true){
var ret_value__28525__auto__ = (function (){try{while(true){
var result__28526__auto__ = switch__28523__auto__.call(null,state_51898);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28526__auto__;
}
break;
}
}catch (e51947){if((e51947 instanceof Object)){
var ex__28527__auto__ = e51947;
var statearr_51948_51986 = state_51898;
(statearr_51948_51986[(5)] = ex__28527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51898);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51947;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51987 = state_51898;
state_51898 = G__51987;
continue;
} else {
return ret_value__28525__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28524__auto__ = function(state_51898){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28524__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28524__auto____1.call(this,state_51898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28524__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28524__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28524__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28524__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28524__auto__;
})()
;})(switch__28523__auto__,c__28544__auto__,msg_hist,msg_names,msg))
})();
var state__28546__auto__ = (function (){var statearr_51949 = f__28545__auto__.call(null);
(statearr_51949[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28544__auto__);

return statearr_51949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28546__auto__);
});})(c__28544__auto__,msg_hist,msg_names,msg))
);

return c__28544__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28544__auto___52050 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28544__auto___52050,ch){
return (function (){
var f__28545__auto__ = (function (){var switch__28523__auto__ = ((function (c__28544__auto___52050,ch){
return (function (state_52033){
var state_val_52034 = (state_52033[(1)]);
if((state_val_52034 === (1))){
var state_52033__$1 = state_52033;
var statearr_52035_52051 = state_52033__$1;
(statearr_52035_52051[(2)] = null);

(statearr_52035_52051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52034 === (2))){
var state_52033__$1 = state_52033;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52033__$1,(4),ch);
} else {
if((state_val_52034 === (3))){
var inst_52031 = (state_52033[(2)]);
var state_52033__$1 = state_52033;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52033__$1,inst_52031);
} else {
if((state_val_52034 === (4))){
var inst_52021 = (state_52033[(7)]);
var inst_52021__$1 = (state_52033[(2)]);
var state_52033__$1 = (function (){var statearr_52036 = state_52033;
(statearr_52036[(7)] = inst_52021__$1);

return statearr_52036;
})();
if(cljs.core.truth_(inst_52021__$1)){
var statearr_52037_52052 = state_52033__$1;
(statearr_52037_52052[(1)] = (5));

} else {
var statearr_52038_52053 = state_52033__$1;
(statearr_52038_52053[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52034 === (5))){
var inst_52021 = (state_52033[(7)]);
var inst_52023 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_52021);
var state_52033__$1 = state_52033;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52033__$1,(8),inst_52023);
} else {
if((state_val_52034 === (6))){
var state_52033__$1 = state_52033;
var statearr_52039_52054 = state_52033__$1;
(statearr_52039_52054[(2)] = null);

(statearr_52039_52054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52034 === (7))){
var inst_52029 = (state_52033[(2)]);
var state_52033__$1 = state_52033;
var statearr_52040_52055 = state_52033__$1;
(statearr_52040_52055[(2)] = inst_52029);

(statearr_52040_52055[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52034 === (8))){
var inst_52025 = (state_52033[(2)]);
var state_52033__$1 = (function (){var statearr_52041 = state_52033;
(statearr_52041[(8)] = inst_52025);

return statearr_52041;
})();
var statearr_52042_52056 = state_52033__$1;
(statearr_52042_52056[(2)] = null);

(statearr_52042_52056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__28544__auto___52050,ch))
;
return ((function (switch__28523__auto__,c__28544__auto___52050,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28524__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28524__auto____0 = (function (){
var statearr_52046 = [null,null,null,null,null,null,null,null,null];
(statearr_52046[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28524__auto__);

(statearr_52046[(1)] = (1));

return statearr_52046;
});
var figwheel$client$heads_up_plugin_$_state_machine__28524__auto____1 = (function (state_52033){
while(true){
var ret_value__28525__auto__ = (function (){try{while(true){
var result__28526__auto__ = switch__28523__auto__.call(null,state_52033);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28526__auto__;
}
break;
}
}catch (e52047){if((e52047 instanceof Object)){
var ex__28527__auto__ = e52047;
var statearr_52048_52057 = state_52033;
(statearr_52048_52057[(5)] = ex__28527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52033);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52047;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52058 = state_52033;
state_52033 = G__52058;
continue;
} else {
return ret_value__28525__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28524__auto__ = function(state_52033){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28524__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28524__auto____1.call(this,state_52033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__28524__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28524__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28524__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28524__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28524__auto__;
})()
;})(switch__28523__auto__,c__28544__auto___52050,ch))
})();
var state__28546__auto__ = (function (){var statearr_52049 = f__28545__auto__.call(null);
(statearr_52049[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28544__auto___52050);

return statearr_52049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28546__auto__);
});})(c__28544__auto___52050,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28544__auto__){
return (function (){
var f__28545__auto__ = (function (){var switch__28523__auto__ = ((function (c__28544__auto__){
return (function (state_52079){
var state_val_52080 = (state_52079[(1)]);
if((state_val_52080 === (1))){
var inst_52074 = cljs.core.async.timeout.call(null,(3000));
var state_52079__$1 = state_52079;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52079__$1,(2),inst_52074);
} else {
if((state_val_52080 === (2))){
var inst_52076 = (state_52079[(2)]);
var inst_52077 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_52079__$1 = (function (){var statearr_52081 = state_52079;
(statearr_52081[(7)] = inst_52076);

return statearr_52081;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52079__$1,inst_52077);
} else {
return null;
}
}
});})(c__28544__auto__))
;
return ((function (switch__28523__auto__,c__28544__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__28524__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__28524__auto____0 = (function (){
var statearr_52085 = [null,null,null,null,null,null,null,null];
(statearr_52085[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28524__auto__);

(statearr_52085[(1)] = (1));

return statearr_52085;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28524__auto____1 = (function (state_52079){
while(true){
var ret_value__28525__auto__ = (function (){try{while(true){
var result__28526__auto__ = switch__28523__auto__.call(null,state_52079);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28526__auto__;
}
break;
}
}catch (e52086){if((e52086 instanceof Object)){
var ex__28527__auto__ = e52086;
var statearr_52087_52089 = state_52079;
(statearr_52087_52089[(5)] = ex__28527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52079);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52086;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52090 = state_52079;
state_52079 = G__52090;
continue;
} else {
return ret_value__28525__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28524__auto__ = function(state_52079){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28524__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28524__auto____1.call(this,state_52079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__28524__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28524__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28524__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28524__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28524__auto__;
})()
;})(switch__28523__auto__,c__28544__auto__))
})();
var state__28546__auto__ = (function (){var statearr_52088 = f__28545__auto__.call(null);
(statearr_52088[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28544__auto__);

return statearr_52088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28546__auto__);
});})(c__28544__auto__))
);

return c__28544__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28544__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__28545__auto__ = (function (){var switch__28523__auto__ = ((function (c__28544__auto__,figwheel_version,temp__4657__auto__){
return (function (state_52113){
var state_val_52114 = (state_52113[(1)]);
if((state_val_52114 === (1))){
var inst_52107 = cljs.core.async.timeout.call(null,(2000));
var state_52113__$1 = state_52113;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52113__$1,(2),inst_52107);
} else {
if((state_val_52114 === (2))){
var inst_52109 = (state_52113[(2)]);
var inst_52110 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_52111 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_52110);
var state_52113__$1 = (function (){var statearr_52115 = state_52113;
(statearr_52115[(7)] = inst_52109);

return statearr_52115;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52113__$1,inst_52111);
} else {
return null;
}
}
});})(c__28544__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__28523__auto__,c__28544__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28524__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28524__auto____0 = (function (){
var statearr_52119 = [null,null,null,null,null,null,null,null];
(statearr_52119[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28524__auto__);

(statearr_52119[(1)] = (1));

return statearr_52119;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28524__auto____1 = (function (state_52113){
while(true){
var ret_value__28525__auto__ = (function (){try{while(true){
var result__28526__auto__ = switch__28523__auto__.call(null,state_52113);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28526__auto__;
}
break;
}
}catch (e52120){if((e52120 instanceof Object)){
var ex__28527__auto__ = e52120;
var statearr_52121_52123 = state_52113;
(statearr_52121_52123[(5)] = ex__28527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52113);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52120;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52124 = state_52113;
state_52113 = G__52124;
continue;
} else {
return ret_value__28525__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28524__auto__ = function(state_52113){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28524__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28524__auto____1.call(this,state_52113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28524__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28524__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28524__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28524__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28524__auto__;
})()
;})(switch__28523__auto__,c__28544__auto__,figwheel_version,temp__4657__auto__))
})();
var state__28546__auto__ = (function (){var statearr_52122 = f__28545__auto__.call(null);
(statearr_52122[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28544__auto__);

return statearr_52122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28546__auto__);
});})(c__28544__auto__,figwheel_version,temp__4657__auto__))
);

return c__28544__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__52125){
var map__52129 = p__52125;
var map__52129__$1 = ((((!((map__52129 == null)))?((((map__52129.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52129.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52129):map__52129);
var file = cljs.core.get.call(null,map__52129__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__52129__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__52129__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__52131 = "";
var G__52131__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__52131),cljs.core.str("file "),cljs.core.str(file)].join(''):G__52131);
var G__52131__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__52131__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__52131__$1);
if(cljs.core.truth_((function (){var and__24778__auto__ = line;
if(cljs.core.truth_(and__24778__auto__)){
return column;
} else {
return and__24778__auto__;
}
})())){
return [cljs.core.str(G__52131__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__52131__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__52132){
var map__52139 = p__52132;
var map__52139__$1 = ((((!((map__52139 == null)))?((((map__52139.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52139.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52139):map__52139);
var ed = map__52139__$1;
var formatted_exception = cljs.core.get.call(null,map__52139__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__52139__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__52139__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__52141_52145 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__52142_52146 = null;
var count__52143_52147 = (0);
var i__52144_52148 = (0);
while(true){
if((i__52144_52148 < count__52143_52147)){
var msg_52149 = cljs.core._nth.call(null,chunk__52142_52146,i__52144_52148);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_52149);

var G__52150 = seq__52141_52145;
var G__52151 = chunk__52142_52146;
var G__52152 = count__52143_52147;
var G__52153 = (i__52144_52148 + (1));
seq__52141_52145 = G__52150;
chunk__52142_52146 = G__52151;
count__52143_52147 = G__52152;
i__52144_52148 = G__52153;
continue;
} else {
var temp__4657__auto___52154 = cljs.core.seq.call(null,seq__52141_52145);
if(temp__4657__auto___52154){
var seq__52141_52155__$1 = temp__4657__auto___52154;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52141_52155__$1)){
var c__25601__auto___52156 = cljs.core.chunk_first.call(null,seq__52141_52155__$1);
var G__52157 = cljs.core.chunk_rest.call(null,seq__52141_52155__$1);
var G__52158 = c__25601__auto___52156;
var G__52159 = cljs.core.count.call(null,c__25601__auto___52156);
var G__52160 = (0);
seq__52141_52145 = G__52157;
chunk__52142_52146 = G__52158;
count__52143_52147 = G__52159;
i__52144_52148 = G__52160;
continue;
} else {
var msg_52161 = cljs.core.first.call(null,seq__52141_52155__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_52161);

var G__52162 = cljs.core.next.call(null,seq__52141_52155__$1);
var G__52163 = null;
var G__52164 = (0);
var G__52165 = (0);
seq__52141_52145 = G__52162;
chunk__52142_52146 = G__52163;
count__52143_52147 = G__52164;
i__52144_52148 = G__52165;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__52166){
var map__52169 = p__52166;
var map__52169__$1 = ((((!((map__52169 == null)))?((((map__52169.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52169.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52169):map__52169);
var w = map__52169__$1;
var message = cljs.core.get.call(null,map__52169__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__24778__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__24778__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__24778__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__52181 = cljs.core.seq.call(null,plugins);
var chunk__52182 = null;
var count__52183 = (0);
var i__52184 = (0);
while(true){
if((i__52184 < count__52183)){
var vec__52185 = cljs.core._nth.call(null,chunk__52182,i__52184);
var k = cljs.core.nth.call(null,vec__52185,(0),null);
var plugin = cljs.core.nth.call(null,vec__52185,(1),null);
if(cljs.core.truth_(plugin)){
var pl_52191 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__52181,chunk__52182,count__52183,i__52184,pl_52191,vec__52185,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_52191.call(null,msg_hist);
});})(seq__52181,chunk__52182,count__52183,i__52184,pl_52191,vec__52185,k,plugin))
);
} else {
}

var G__52192 = seq__52181;
var G__52193 = chunk__52182;
var G__52194 = count__52183;
var G__52195 = (i__52184 + (1));
seq__52181 = G__52192;
chunk__52182 = G__52193;
count__52183 = G__52194;
i__52184 = G__52195;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__52181);
if(temp__4657__auto__){
var seq__52181__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52181__$1)){
var c__25601__auto__ = cljs.core.chunk_first.call(null,seq__52181__$1);
var G__52196 = cljs.core.chunk_rest.call(null,seq__52181__$1);
var G__52197 = c__25601__auto__;
var G__52198 = cljs.core.count.call(null,c__25601__auto__);
var G__52199 = (0);
seq__52181 = G__52196;
chunk__52182 = G__52197;
count__52183 = G__52198;
i__52184 = G__52199;
continue;
} else {
var vec__52188 = cljs.core.first.call(null,seq__52181__$1);
var k = cljs.core.nth.call(null,vec__52188,(0),null);
var plugin = cljs.core.nth.call(null,vec__52188,(1),null);
if(cljs.core.truth_(plugin)){
var pl_52200 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__52181,chunk__52182,count__52183,i__52184,pl_52200,vec__52188,k,plugin,seq__52181__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_52200.call(null,msg_hist);
});})(seq__52181,chunk__52182,count__52183,i__52184,pl_52200,vec__52188,k,plugin,seq__52181__$1,temp__4657__auto__))
);
} else {
}

var G__52201 = cljs.core.next.call(null,seq__52181__$1);
var G__52202 = null;
var G__52203 = (0);
var G__52204 = (0);
seq__52181 = G__52201;
chunk__52182 = G__52202;
count__52183 = G__52203;
i__52184 = G__52204;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args52205 = [];
var len__25865__auto___52212 = arguments.length;
var i__25866__auto___52213 = (0);
while(true){
if((i__25866__auto___52213 < len__25865__auto___52212)){
args52205.push((arguments[i__25866__auto___52213]));

var G__52214 = (i__25866__auto___52213 + (1));
i__25866__auto___52213 = G__52214;
continue;
} else {
}
break;
}

var G__52207 = args52205.length;
switch (G__52207) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52205.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__52208_52216 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__52209_52217 = null;
var count__52210_52218 = (0);
var i__52211_52219 = (0);
while(true){
if((i__52211_52219 < count__52210_52218)){
var msg_52220 = cljs.core._nth.call(null,chunk__52209_52217,i__52211_52219);
figwheel.client.socket.handle_incoming_message.call(null,msg_52220);

var G__52221 = seq__52208_52216;
var G__52222 = chunk__52209_52217;
var G__52223 = count__52210_52218;
var G__52224 = (i__52211_52219 + (1));
seq__52208_52216 = G__52221;
chunk__52209_52217 = G__52222;
count__52210_52218 = G__52223;
i__52211_52219 = G__52224;
continue;
} else {
var temp__4657__auto___52225 = cljs.core.seq.call(null,seq__52208_52216);
if(temp__4657__auto___52225){
var seq__52208_52226__$1 = temp__4657__auto___52225;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52208_52226__$1)){
var c__25601__auto___52227 = cljs.core.chunk_first.call(null,seq__52208_52226__$1);
var G__52228 = cljs.core.chunk_rest.call(null,seq__52208_52226__$1);
var G__52229 = c__25601__auto___52227;
var G__52230 = cljs.core.count.call(null,c__25601__auto___52227);
var G__52231 = (0);
seq__52208_52216 = G__52228;
chunk__52209_52217 = G__52229;
count__52210_52218 = G__52230;
i__52211_52219 = G__52231;
continue;
} else {
var msg_52232 = cljs.core.first.call(null,seq__52208_52226__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_52232);

var G__52233 = cljs.core.next.call(null,seq__52208_52226__$1);
var G__52234 = null;
var G__52235 = (0);
var G__52236 = (0);
seq__52208_52216 = G__52233;
chunk__52209_52217 = G__52234;
count__52210_52218 = G__52235;
i__52211_52219 = G__52236;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__25872__auto__ = [];
var len__25865__auto___52241 = arguments.length;
var i__25866__auto___52242 = (0);
while(true){
if((i__25866__auto___52242 < len__25865__auto___52241)){
args__25872__auto__.push((arguments[i__25866__auto___52242]));

var G__52243 = (i__25866__auto___52242 + (1));
i__25866__auto___52242 = G__52243;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__52238){
var map__52239 = p__52238;
var map__52239__$1 = ((((!((map__52239 == null)))?((((map__52239.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52239.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52239):map__52239);
var opts = map__52239__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq52237){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52237));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e52245){if((e52245 instanceof Error)){
var e = e52245;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e52245;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__52249){
var map__52250 = p__52249;
var map__52250__$1 = ((((!((map__52250 == null)))?((((map__52250.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52250.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52250):map__52250);
var msg_name = cljs.core.get.call(null,map__52250__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1484800042630