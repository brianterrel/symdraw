// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__49345){
var map__49370 = p__49345;
var map__49370__$1 = ((((!((map__49370 == null)))?((((map__49370.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49370.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49370):map__49370);
var m = map__49370__$1;
var n = cljs.core.get.call(null,map__49370__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__49370__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__49372_49394 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49373_49395 = null;
var count__49374_49396 = (0);
var i__49375_49397 = (0);
while(true){
if((i__49375_49397 < count__49374_49396)){
var f_49398 = cljs.core._nth.call(null,chunk__49373_49395,i__49375_49397);
cljs.core.println.call(null,"  ",f_49398);

var G__49399 = seq__49372_49394;
var G__49400 = chunk__49373_49395;
var G__49401 = count__49374_49396;
var G__49402 = (i__49375_49397 + (1));
seq__49372_49394 = G__49399;
chunk__49373_49395 = G__49400;
count__49374_49396 = G__49401;
i__49375_49397 = G__49402;
continue;
} else {
var temp__4657__auto___49403 = cljs.core.seq.call(null,seq__49372_49394);
if(temp__4657__auto___49403){
var seq__49372_49404__$1 = temp__4657__auto___49403;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49372_49404__$1)){
var c__25601__auto___49405 = cljs.core.chunk_first.call(null,seq__49372_49404__$1);
var G__49406 = cljs.core.chunk_rest.call(null,seq__49372_49404__$1);
var G__49407 = c__25601__auto___49405;
var G__49408 = cljs.core.count.call(null,c__25601__auto___49405);
var G__49409 = (0);
seq__49372_49394 = G__49406;
chunk__49373_49395 = G__49407;
count__49374_49396 = G__49408;
i__49375_49397 = G__49409;
continue;
} else {
var f_49410 = cljs.core.first.call(null,seq__49372_49404__$1);
cljs.core.println.call(null,"  ",f_49410);

var G__49411 = cljs.core.next.call(null,seq__49372_49404__$1);
var G__49412 = null;
var G__49413 = (0);
var G__49414 = (0);
seq__49372_49394 = G__49411;
chunk__49373_49395 = G__49412;
count__49374_49396 = G__49413;
i__49375_49397 = G__49414;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_49415 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24790__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_49415);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_49415)))?cljs.core.second.call(null,arglists_49415):arglists_49415));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__49376_49416 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49377_49417 = null;
var count__49378_49418 = (0);
var i__49379_49419 = (0);
while(true){
if((i__49379_49419 < count__49378_49418)){
var vec__49380_49420 = cljs.core._nth.call(null,chunk__49377_49417,i__49379_49419);
var name_49421 = cljs.core.nth.call(null,vec__49380_49420,(0),null);
var map__49383_49422 = cljs.core.nth.call(null,vec__49380_49420,(1),null);
var map__49383_49423__$1 = ((((!((map__49383_49422 == null)))?((((map__49383_49422.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49383_49422.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49383_49422):map__49383_49422);
var doc_49424 = cljs.core.get.call(null,map__49383_49423__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49425 = cljs.core.get.call(null,map__49383_49423__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_49421);

cljs.core.println.call(null," ",arglists_49425);

if(cljs.core.truth_(doc_49424)){
cljs.core.println.call(null," ",doc_49424);
} else {
}

var G__49426 = seq__49376_49416;
var G__49427 = chunk__49377_49417;
var G__49428 = count__49378_49418;
var G__49429 = (i__49379_49419 + (1));
seq__49376_49416 = G__49426;
chunk__49377_49417 = G__49427;
count__49378_49418 = G__49428;
i__49379_49419 = G__49429;
continue;
} else {
var temp__4657__auto___49430 = cljs.core.seq.call(null,seq__49376_49416);
if(temp__4657__auto___49430){
var seq__49376_49431__$1 = temp__4657__auto___49430;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49376_49431__$1)){
var c__25601__auto___49432 = cljs.core.chunk_first.call(null,seq__49376_49431__$1);
var G__49433 = cljs.core.chunk_rest.call(null,seq__49376_49431__$1);
var G__49434 = c__25601__auto___49432;
var G__49435 = cljs.core.count.call(null,c__25601__auto___49432);
var G__49436 = (0);
seq__49376_49416 = G__49433;
chunk__49377_49417 = G__49434;
count__49378_49418 = G__49435;
i__49379_49419 = G__49436;
continue;
} else {
var vec__49385_49437 = cljs.core.first.call(null,seq__49376_49431__$1);
var name_49438 = cljs.core.nth.call(null,vec__49385_49437,(0),null);
var map__49388_49439 = cljs.core.nth.call(null,vec__49385_49437,(1),null);
var map__49388_49440__$1 = ((((!((map__49388_49439 == null)))?((((map__49388_49439.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49388_49439.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49388_49439):map__49388_49439);
var doc_49441 = cljs.core.get.call(null,map__49388_49440__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49442 = cljs.core.get.call(null,map__49388_49440__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_49438);

cljs.core.println.call(null," ",arglists_49442);

if(cljs.core.truth_(doc_49441)){
cljs.core.println.call(null," ",doc_49441);
} else {
}

var G__49443 = cljs.core.next.call(null,seq__49376_49431__$1);
var G__49444 = null;
var G__49445 = (0);
var G__49446 = (0);
seq__49376_49416 = G__49443;
chunk__49377_49417 = G__49444;
count__49378_49418 = G__49445;
i__49379_49419 = G__49446;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__49390 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__49391 = null;
var count__49392 = (0);
var i__49393 = (0);
while(true){
if((i__49393 < count__49392)){
var role = cljs.core._nth.call(null,chunk__49391,i__49393);
var temp__4657__auto___49447__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___49447__$1)){
var spec_49448 = temp__4657__auto___49447__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_49448));
} else {
}

var G__49449 = seq__49390;
var G__49450 = chunk__49391;
var G__49451 = count__49392;
var G__49452 = (i__49393 + (1));
seq__49390 = G__49449;
chunk__49391 = G__49450;
count__49392 = G__49451;
i__49393 = G__49452;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__49390);
if(temp__4657__auto____$1){
var seq__49390__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49390__$1)){
var c__25601__auto__ = cljs.core.chunk_first.call(null,seq__49390__$1);
var G__49453 = cljs.core.chunk_rest.call(null,seq__49390__$1);
var G__49454 = c__25601__auto__;
var G__49455 = cljs.core.count.call(null,c__25601__auto__);
var G__49456 = (0);
seq__49390 = G__49453;
chunk__49391 = G__49454;
count__49392 = G__49455;
i__49393 = G__49456;
continue;
} else {
var role = cljs.core.first.call(null,seq__49390__$1);
var temp__4657__auto___49457__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___49457__$2)){
var spec_49458 = temp__4657__auto___49457__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_49458));
} else {
}

var G__49459 = cljs.core.next.call(null,seq__49390__$1);
var G__49460 = null;
var G__49461 = (0);
var G__49462 = (0);
seq__49390 = G__49459;
chunk__49391 = G__49460;
count__49392 = G__49461;
i__49393 = G__49462;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1484800037415