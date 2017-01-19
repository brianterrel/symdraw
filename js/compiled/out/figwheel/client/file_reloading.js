// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__24790__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__24790__auto__){
return or__24790__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__24790__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__47276_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__47276_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__47281 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__47282 = null;
var count__47283 = (0);
var i__47284 = (0);
while(true){
if((i__47284 < count__47283)){
var n = cljs.core._nth.call(null,chunk__47282,i__47284);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__47285 = seq__47281;
var G__47286 = chunk__47282;
var G__47287 = count__47283;
var G__47288 = (i__47284 + (1));
seq__47281 = G__47285;
chunk__47282 = G__47286;
count__47283 = G__47287;
i__47284 = G__47288;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__47281);
if(temp__4657__auto__){
var seq__47281__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47281__$1)){
var c__25601__auto__ = cljs.core.chunk_first.call(null,seq__47281__$1);
var G__47289 = cljs.core.chunk_rest.call(null,seq__47281__$1);
var G__47290 = c__25601__auto__;
var G__47291 = cljs.core.count.call(null,c__25601__auto__);
var G__47292 = (0);
seq__47281 = G__47289;
chunk__47282 = G__47290;
count__47283 = G__47291;
i__47284 = G__47292;
continue;
} else {
var n = cljs.core.first.call(null,seq__47281__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__47293 = cljs.core.next.call(null,seq__47281__$1);
var G__47294 = null;
var G__47295 = (0);
var G__47296 = (0);
seq__47281 = G__47293;
chunk__47282 = G__47294;
count__47283 = G__47295;
i__47284 = G__47296;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__47347_47358 = cljs.core.seq.call(null,deps);
var chunk__47348_47359 = null;
var count__47349_47360 = (0);
var i__47350_47361 = (0);
while(true){
if((i__47350_47361 < count__47349_47360)){
var dep_47362 = cljs.core._nth.call(null,chunk__47348_47359,i__47350_47361);
topo_sort_helper_STAR_.call(null,dep_47362,(depth + (1)),state);

var G__47363 = seq__47347_47358;
var G__47364 = chunk__47348_47359;
var G__47365 = count__47349_47360;
var G__47366 = (i__47350_47361 + (1));
seq__47347_47358 = G__47363;
chunk__47348_47359 = G__47364;
count__47349_47360 = G__47365;
i__47350_47361 = G__47366;
continue;
} else {
var temp__4657__auto___47367 = cljs.core.seq.call(null,seq__47347_47358);
if(temp__4657__auto___47367){
var seq__47347_47368__$1 = temp__4657__auto___47367;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47347_47368__$1)){
var c__25601__auto___47369 = cljs.core.chunk_first.call(null,seq__47347_47368__$1);
var G__47370 = cljs.core.chunk_rest.call(null,seq__47347_47368__$1);
var G__47371 = c__25601__auto___47369;
var G__47372 = cljs.core.count.call(null,c__25601__auto___47369);
var G__47373 = (0);
seq__47347_47358 = G__47370;
chunk__47348_47359 = G__47371;
count__47349_47360 = G__47372;
i__47350_47361 = G__47373;
continue;
} else {
var dep_47374 = cljs.core.first.call(null,seq__47347_47368__$1);
topo_sort_helper_STAR_.call(null,dep_47374,(depth + (1)),state);

var G__47375 = cljs.core.next.call(null,seq__47347_47368__$1);
var G__47376 = null;
var G__47377 = (0);
var G__47378 = (0);
seq__47347_47358 = G__47375;
chunk__47348_47359 = G__47376;
count__47349_47360 = G__47377;
i__47350_47361 = G__47378;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__47351){
var vec__47355 = p__47351;
var seq__47356 = cljs.core.seq.call(null,vec__47355);
var first__47357 = cljs.core.first.call(null,seq__47356);
var seq__47356__$1 = cljs.core.next.call(null,seq__47356);
var x = first__47357;
var xs = seq__47356__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__47355,seq__47356,first__47357,seq__47356__$1,x,xs,get_deps__$1){
return (function (p1__47297_SHARP_){
return clojure.set.difference.call(null,p1__47297_SHARP_,x);
});})(vec__47355,seq__47356,first__47357,seq__47356__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__47391 = cljs.core.seq.call(null,provides);
var chunk__47392 = null;
var count__47393 = (0);
var i__47394 = (0);
while(true){
if((i__47394 < count__47393)){
var prov = cljs.core._nth.call(null,chunk__47392,i__47394);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__47395_47403 = cljs.core.seq.call(null,requires);
var chunk__47396_47404 = null;
var count__47397_47405 = (0);
var i__47398_47406 = (0);
while(true){
if((i__47398_47406 < count__47397_47405)){
var req_47407 = cljs.core._nth.call(null,chunk__47396_47404,i__47398_47406);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47407,prov);

var G__47408 = seq__47395_47403;
var G__47409 = chunk__47396_47404;
var G__47410 = count__47397_47405;
var G__47411 = (i__47398_47406 + (1));
seq__47395_47403 = G__47408;
chunk__47396_47404 = G__47409;
count__47397_47405 = G__47410;
i__47398_47406 = G__47411;
continue;
} else {
var temp__4657__auto___47412 = cljs.core.seq.call(null,seq__47395_47403);
if(temp__4657__auto___47412){
var seq__47395_47413__$1 = temp__4657__auto___47412;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47395_47413__$1)){
var c__25601__auto___47414 = cljs.core.chunk_first.call(null,seq__47395_47413__$1);
var G__47415 = cljs.core.chunk_rest.call(null,seq__47395_47413__$1);
var G__47416 = c__25601__auto___47414;
var G__47417 = cljs.core.count.call(null,c__25601__auto___47414);
var G__47418 = (0);
seq__47395_47403 = G__47415;
chunk__47396_47404 = G__47416;
count__47397_47405 = G__47417;
i__47398_47406 = G__47418;
continue;
} else {
var req_47419 = cljs.core.first.call(null,seq__47395_47413__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47419,prov);

var G__47420 = cljs.core.next.call(null,seq__47395_47413__$1);
var G__47421 = null;
var G__47422 = (0);
var G__47423 = (0);
seq__47395_47403 = G__47420;
chunk__47396_47404 = G__47421;
count__47397_47405 = G__47422;
i__47398_47406 = G__47423;
continue;
}
} else {
}
}
break;
}

var G__47424 = seq__47391;
var G__47425 = chunk__47392;
var G__47426 = count__47393;
var G__47427 = (i__47394 + (1));
seq__47391 = G__47424;
chunk__47392 = G__47425;
count__47393 = G__47426;
i__47394 = G__47427;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__47391);
if(temp__4657__auto__){
var seq__47391__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47391__$1)){
var c__25601__auto__ = cljs.core.chunk_first.call(null,seq__47391__$1);
var G__47428 = cljs.core.chunk_rest.call(null,seq__47391__$1);
var G__47429 = c__25601__auto__;
var G__47430 = cljs.core.count.call(null,c__25601__auto__);
var G__47431 = (0);
seq__47391 = G__47428;
chunk__47392 = G__47429;
count__47393 = G__47430;
i__47394 = G__47431;
continue;
} else {
var prov = cljs.core.first.call(null,seq__47391__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__47399_47432 = cljs.core.seq.call(null,requires);
var chunk__47400_47433 = null;
var count__47401_47434 = (0);
var i__47402_47435 = (0);
while(true){
if((i__47402_47435 < count__47401_47434)){
var req_47436 = cljs.core._nth.call(null,chunk__47400_47433,i__47402_47435);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47436,prov);

var G__47437 = seq__47399_47432;
var G__47438 = chunk__47400_47433;
var G__47439 = count__47401_47434;
var G__47440 = (i__47402_47435 + (1));
seq__47399_47432 = G__47437;
chunk__47400_47433 = G__47438;
count__47401_47434 = G__47439;
i__47402_47435 = G__47440;
continue;
} else {
var temp__4657__auto___47441__$1 = cljs.core.seq.call(null,seq__47399_47432);
if(temp__4657__auto___47441__$1){
var seq__47399_47442__$1 = temp__4657__auto___47441__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47399_47442__$1)){
var c__25601__auto___47443 = cljs.core.chunk_first.call(null,seq__47399_47442__$1);
var G__47444 = cljs.core.chunk_rest.call(null,seq__47399_47442__$1);
var G__47445 = c__25601__auto___47443;
var G__47446 = cljs.core.count.call(null,c__25601__auto___47443);
var G__47447 = (0);
seq__47399_47432 = G__47444;
chunk__47400_47433 = G__47445;
count__47401_47434 = G__47446;
i__47402_47435 = G__47447;
continue;
} else {
var req_47448 = cljs.core.first.call(null,seq__47399_47442__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47448,prov);

var G__47449 = cljs.core.next.call(null,seq__47399_47442__$1);
var G__47450 = null;
var G__47451 = (0);
var G__47452 = (0);
seq__47399_47432 = G__47449;
chunk__47400_47433 = G__47450;
count__47401_47434 = G__47451;
i__47402_47435 = G__47452;
continue;
}
} else {
}
}
break;
}

var G__47453 = cljs.core.next.call(null,seq__47391__$1);
var G__47454 = null;
var G__47455 = (0);
var G__47456 = (0);
seq__47391 = G__47453;
chunk__47392 = G__47454;
count__47393 = G__47455;
i__47394 = G__47456;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__47461_47465 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__47462_47466 = null;
var count__47463_47467 = (0);
var i__47464_47468 = (0);
while(true){
if((i__47464_47468 < count__47463_47467)){
var ns_47469 = cljs.core._nth.call(null,chunk__47462_47466,i__47464_47468);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_47469);

var G__47470 = seq__47461_47465;
var G__47471 = chunk__47462_47466;
var G__47472 = count__47463_47467;
var G__47473 = (i__47464_47468 + (1));
seq__47461_47465 = G__47470;
chunk__47462_47466 = G__47471;
count__47463_47467 = G__47472;
i__47464_47468 = G__47473;
continue;
} else {
var temp__4657__auto___47474 = cljs.core.seq.call(null,seq__47461_47465);
if(temp__4657__auto___47474){
var seq__47461_47475__$1 = temp__4657__auto___47474;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47461_47475__$1)){
var c__25601__auto___47476 = cljs.core.chunk_first.call(null,seq__47461_47475__$1);
var G__47477 = cljs.core.chunk_rest.call(null,seq__47461_47475__$1);
var G__47478 = c__25601__auto___47476;
var G__47479 = cljs.core.count.call(null,c__25601__auto___47476);
var G__47480 = (0);
seq__47461_47465 = G__47477;
chunk__47462_47466 = G__47478;
count__47463_47467 = G__47479;
i__47464_47468 = G__47480;
continue;
} else {
var ns_47481 = cljs.core.first.call(null,seq__47461_47475__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_47481);

var G__47482 = cljs.core.next.call(null,seq__47461_47475__$1);
var G__47483 = null;
var G__47484 = (0);
var G__47485 = (0);
seq__47461_47465 = G__47482;
chunk__47462_47466 = G__47483;
count__47463_47467 = G__47484;
i__47464_47468 = G__47485;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__24790__auto__ = goog.require__;
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__47486__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__47486 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47487__i = 0, G__47487__a = new Array(arguments.length -  0);
while (G__47487__i < G__47487__a.length) {G__47487__a[G__47487__i] = arguments[G__47487__i + 0]; ++G__47487__i;}
  args = new cljs.core.IndexedSeq(G__47487__a,0);
} 
return G__47486__delegate.call(this,args);};
G__47486.cljs$lang$maxFixedArity = 0;
G__47486.cljs$lang$applyTo = (function (arglist__47488){
var args = cljs.core.seq(arglist__47488);
return G__47486__delegate(args);
});
G__47486.cljs$core$IFn$_invoke$arity$variadic = G__47486__delegate;
return G__47486;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__47490 = cljs.core._EQ_;
var expr__47491 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__47490.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__47491))){
var path_parts = ((function (pred__47490,expr__47491){
return (function (p1__47489_SHARP_){
return clojure.string.split.call(null,p1__47489_SHARP_,/[\/\\]/);
});})(pred__47490,expr__47491))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__47490,expr__47491){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e47493){if((e47493 instanceof Error)){
var e = e47493;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e47493;

}
}})());
});
;})(path_parts,sep,root,pred__47490,expr__47491))
} else {
if(cljs.core.truth_(pred__47490.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__47491))){
return ((function (pred__47490,expr__47491){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__47490,expr__47491){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__47490,expr__47491))
);

return deferred.addErrback(((function (deferred,pred__47490,expr__47491){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__47490,expr__47491))
);
});
;})(pred__47490,expr__47491))
} else {
return ((function (pred__47490,expr__47491){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__47490,expr__47491))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__47494,callback){
var map__47497 = p__47494;
var map__47497__$1 = ((((!((map__47497 == null)))?((((map__47497.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47497.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47497):map__47497);
var file_msg = map__47497__$1;
var request_url = cljs.core.get.call(null,map__47497__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__47497,map__47497__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__47497,map__47497__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__28544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28544__auto__){
return (function (){
var f__28545__auto__ = (function (){var switch__28523__auto__ = ((function (c__28544__auto__){
return (function (state_47521){
var state_val_47522 = (state_47521[(1)]);
if((state_val_47522 === (7))){
var inst_47517 = (state_47521[(2)]);
var state_47521__$1 = state_47521;
var statearr_47523_47543 = state_47521__$1;
(statearr_47523_47543[(2)] = inst_47517);

(statearr_47523_47543[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47522 === (1))){
var state_47521__$1 = state_47521;
var statearr_47524_47544 = state_47521__$1;
(statearr_47524_47544[(2)] = null);

(statearr_47524_47544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47522 === (4))){
var inst_47501 = (state_47521[(7)]);
var inst_47501__$1 = (state_47521[(2)]);
var state_47521__$1 = (function (){var statearr_47525 = state_47521;
(statearr_47525[(7)] = inst_47501__$1);

return statearr_47525;
})();
if(cljs.core.truth_(inst_47501__$1)){
var statearr_47526_47545 = state_47521__$1;
(statearr_47526_47545[(1)] = (5));

} else {
var statearr_47527_47546 = state_47521__$1;
(statearr_47527_47546[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47522 === (6))){
var state_47521__$1 = state_47521;
var statearr_47528_47547 = state_47521__$1;
(statearr_47528_47547[(2)] = null);

(statearr_47528_47547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47522 === (3))){
var inst_47519 = (state_47521[(2)]);
var state_47521__$1 = state_47521;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47521__$1,inst_47519);
} else {
if((state_val_47522 === (2))){
var state_47521__$1 = state_47521;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47521__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_47522 === (11))){
var inst_47513 = (state_47521[(2)]);
var state_47521__$1 = (function (){var statearr_47529 = state_47521;
(statearr_47529[(8)] = inst_47513);

return statearr_47529;
})();
var statearr_47530_47548 = state_47521__$1;
(statearr_47530_47548[(2)] = null);

(statearr_47530_47548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47522 === (9))){
var inst_47507 = (state_47521[(9)]);
var inst_47505 = (state_47521[(10)]);
var inst_47509 = inst_47507.call(null,inst_47505);
var state_47521__$1 = state_47521;
var statearr_47531_47549 = state_47521__$1;
(statearr_47531_47549[(2)] = inst_47509);

(statearr_47531_47549[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47522 === (5))){
var inst_47501 = (state_47521[(7)]);
var inst_47503 = figwheel.client.file_reloading.blocking_load.call(null,inst_47501);
var state_47521__$1 = state_47521;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47521__$1,(8),inst_47503);
} else {
if((state_val_47522 === (10))){
var inst_47505 = (state_47521[(10)]);
var inst_47511 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_47505);
var state_47521__$1 = state_47521;
var statearr_47532_47550 = state_47521__$1;
(statearr_47532_47550[(2)] = inst_47511);

(statearr_47532_47550[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47522 === (8))){
var inst_47507 = (state_47521[(9)]);
var inst_47501 = (state_47521[(7)]);
var inst_47505 = (state_47521[(2)]);
var inst_47506 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_47507__$1 = cljs.core.get.call(null,inst_47506,inst_47501);
var state_47521__$1 = (function (){var statearr_47533 = state_47521;
(statearr_47533[(9)] = inst_47507__$1);

(statearr_47533[(10)] = inst_47505);

return statearr_47533;
})();
if(cljs.core.truth_(inst_47507__$1)){
var statearr_47534_47551 = state_47521__$1;
(statearr_47534_47551[(1)] = (9));

} else {
var statearr_47535_47552 = state_47521__$1;
(statearr_47535_47552[(1)] = (10));

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
});})(c__28544__auto__))
;
return ((function (switch__28523__auto__,c__28544__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__28524__auto__ = null;
var figwheel$client$file_reloading$state_machine__28524__auto____0 = (function (){
var statearr_47539 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47539[(0)] = figwheel$client$file_reloading$state_machine__28524__auto__);

(statearr_47539[(1)] = (1));

return statearr_47539;
});
var figwheel$client$file_reloading$state_machine__28524__auto____1 = (function (state_47521){
while(true){
var ret_value__28525__auto__ = (function (){try{while(true){
var result__28526__auto__ = switch__28523__auto__.call(null,state_47521);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28526__auto__;
}
break;
}
}catch (e47540){if((e47540 instanceof Object)){
var ex__28527__auto__ = e47540;
var statearr_47541_47553 = state_47521;
(statearr_47541_47553[(5)] = ex__28527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47521);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47540;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47554 = state_47521;
state_47521 = G__47554;
continue;
} else {
return ret_value__28525__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28524__auto__ = function(state_47521){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28524__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28524__auto____1.call(this,state_47521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__28524__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28524__auto____0;
figwheel$client$file_reloading$state_machine__28524__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28524__auto____1;
return figwheel$client$file_reloading$state_machine__28524__auto__;
})()
;})(switch__28523__auto__,c__28544__auto__))
})();
var state__28546__auto__ = (function (){var statearr_47542 = f__28545__auto__.call(null);
(statearr_47542[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28544__auto__);

return statearr_47542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28546__auto__);
});})(c__28544__auto__))
);

return c__28544__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__47555,callback){
var map__47558 = p__47555;
var map__47558__$1 = ((((!((map__47558 == null)))?((((map__47558.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47558.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47558):map__47558);
var file_msg = map__47558__$1;
var namespace = cljs.core.get.call(null,map__47558__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__47558,map__47558__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__47558,map__47558__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__47560){
var map__47563 = p__47560;
var map__47563__$1 = ((((!((map__47563 == null)))?((((map__47563.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47563.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47563):map__47563);
var file_msg = map__47563__$1;
var namespace = cljs.core.get.call(null,map__47563__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__24778__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__24778__auto__){
var or__24790__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
var or__24790__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24790__auto____$1)){
return or__24790__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__24778__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__47565,callback){
var map__47568 = p__47565;
var map__47568__$1 = ((((!((map__47568 == null)))?((((map__47568.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47568.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47568):map__47568);
var file_msg = map__47568__$1;
var request_url = cljs.core.get.call(null,map__47568__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__47568__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__28544__auto___47672 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28544__auto___47672,out){
return (function (){
var f__28545__auto__ = (function (){var switch__28523__auto__ = ((function (c__28544__auto___47672,out){
return (function (state_47654){
var state_val_47655 = (state_47654[(1)]);
if((state_val_47655 === (1))){
var inst_47628 = cljs.core.seq.call(null,files);
var inst_47629 = cljs.core.first.call(null,inst_47628);
var inst_47630 = cljs.core.next.call(null,inst_47628);
var inst_47631 = files;
var state_47654__$1 = (function (){var statearr_47656 = state_47654;
(statearr_47656[(7)] = inst_47629);

(statearr_47656[(8)] = inst_47631);

(statearr_47656[(9)] = inst_47630);

return statearr_47656;
})();
var statearr_47657_47673 = state_47654__$1;
(statearr_47657_47673[(2)] = null);

(statearr_47657_47673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47655 === (2))){
var inst_47631 = (state_47654[(8)]);
var inst_47637 = (state_47654[(10)]);
var inst_47636 = cljs.core.seq.call(null,inst_47631);
var inst_47637__$1 = cljs.core.first.call(null,inst_47636);
var inst_47638 = cljs.core.next.call(null,inst_47636);
var inst_47639 = (inst_47637__$1 == null);
var inst_47640 = cljs.core.not.call(null,inst_47639);
var state_47654__$1 = (function (){var statearr_47658 = state_47654;
(statearr_47658[(10)] = inst_47637__$1);

(statearr_47658[(11)] = inst_47638);

return statearr_47658;
})();
if(inst_47640){
var statearr_47659_47674 = state_47654__$1;
(statearr_47659_47674[(1)] = (4));

} else {
var statearr_47660_47675 = state_47654__$1;
(statearr_47660_47675[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47655 === (3))){
var inst_47652 = (state_47654[(2)]);
var state_47654__$1 = state_47654;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47654__$1,inst_47652);
} else {
if((state_val_47655 === (4))){
var inst_47637 = (state_47654[(10)]);
var inst_47642 = figwheel.client.file_reloading.reload_js_file.call(null,inst_47637);
var state_47654__$1 = state_47654;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47654__$1,(7),inst_47642);
} else {
if((state_val_47655 === (5))){
var inst_47648 = cljs.core.async.close_BANG_.call(null,out);
var state_47654__$1 = state_47654;
var statearr_47661_47676 = state_47654__$1;
(statearr_47661_47676[(2)] = inst_47648);

(statearr_47661_47676[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47655 === (6))){
var inst_47650 = (state_47654[(2)]);
var state_47654__$1 = state_47654;
var statearr_47662_47677 = state_47654__$1;
(statearr_47662_47677[(2)] = inst_47650);

(statearr_47662_47677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47655 === (7))){
var inst_47638 = (state_47654[(11)]);
var inst_47644 = (state_47654[(2)]);
var inst_47645 = cljs.core.async.put_BANG_.call(null,out,inst_47644);
var inst_47631 = inst_47638;
var state_47654__$1 = (function (){var statearr_47663 = state_47654;
(statearr_47663[(8)] = inst_47631);

(statearr_47663[(12)] = inst_47645);

return statearr_47663;
})();
var statearr_47664_47678 = state_47654__$1;
(statearr_47664_47678[(2)] = null);

(statearr_47664_47678[(1)] = (2));


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
});})(c__28544__auto___47672,out))
;
return ((function (switch__28523__auto__,c__28544__auto___47672,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28524__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28524__auto____0 = (function (){
var statearr_47668 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47668[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28524__auto__);

(statearr_47668[(1)] = (1));

return statearr_47668;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28524__auto____1 = (function (state_47654){
while(true){
var ret_value__28525__auto__ = (function (){try{while(true){
var result__28526__auto__ = switch__28523__auto__.call(null,state_47654);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28526__auto__;
}
break;
}
}catch (e47669){if((e47669 instanceof Object)){
var ex__28527__auto__ = e47669;
var statearr_47670_47679 = state_47654;
(statearr_47670_47679[(5)] = ex__28527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47669;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47680 = state_47654;
state_47654 = G__47680;
continue;
} else {
return ret_value__28525__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28524__auto__ = function(state_47654){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28524__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28524__auto____1.call(this,state_47654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28524__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28524__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28524__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28524__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28524__auto__;
})()
;})(switch__28523__auto__,c__28544__auto___47672,out))
})();
var state__28546__auto__ = (function (){var statearr_47671 = f__28545__auto__.call(null);
(statearr_47671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28544__auto___47672);

return statearr_47671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28546__auto__);
});})(c__28544__auto___47672,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__47681,opts){
var map__47685 = p__47681;
var map__47685__$1 = ((((!((map__47685 == null)))?((((map__47685.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47685.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47685):map__47685);
var eval_body__$1 = cljs.core.get.call(null,map__47685__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__47685__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__24778__auto__ = eval_body__$1;
if(cljs.core.truth_(and__24778__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__24778__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e47687){var e = e47687;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__47688_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__47688_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__47697){
var vec__47698 = p__47697;
var k = cljs.core.nth.call(null,vec__47698,(0),null);
var v = cljs.core.nth.call(null,vec__47698,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__47701){
var vec__47702 = p__47701;
var k = cljs.core.nth.call(null,vec__47702,(0),null);
var v = cljs.core.nth.call(null,vec__47702,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__47708,p__47709){
var map__47956 = p__47708;
var map__47956__$1 = ((((!((map__47956 == null)))?((((map__47956.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47956.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47956):map__47956);
var opts = map__47956__$1;
var before_jsload = cljs.core.get.call(null,map__47956__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__47956__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__47956__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__47957 = p__47709;
var map__47957__$1 = ((((!((map__47957 == null)))?((((map__47957.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47957.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47957):map__47957);
var msg = map__47957__$1;
var files = cljs.core.get.call(null,map__47957__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__47957__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__47957__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28544__auto__,map__47956,map__47956__$1,opts,before_jsload,on_jsload,reload_dependents,map__47957,map__47957__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28545__auto__ = (function (){var switch__28523__auto__ = ((function (c__28544__auto__,map__47956,map__47956__$1,opts,before_jsload,on_jsload,reload_dependents,map__47957,map__47957__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_48110){
var state_val_48111 = (state_48110[(1)]);
if((state_val_48111 === (7))){
var inst_47972 = (state_48110[(7)]);
var inst_47973 = (state_48110[(8)]);
var inst_47971 = (state_48110[(9)]);
var inst_47974 = (state_48110[(10)]);
var inst_47979 = cljs.core._nth.call(null,inst_47972,inst_47974);
var inst_47980 = figwheel.client.file_reloading.eval_body.call(null,inst_47979,opts);
var inst_47981 = (inst_47974 + (1));
var tmp48112 = inst_47972;
var tmp48113 = inst_47973;
var tmp48114 = inst_47971;
var inst_47971__$1 = tmp48114;
var inst_47972__$1 = tmp48112;
var inst_47973__$1 = tmp48113;
var inst_47974__$1 = inst_47981;
var state_48110__$1 = (function (){var statearr_48115 = state_48110;
(statearr_48115[(7)] = inst_47972__$1);

(statearr_48115[(11)] = inst_47980);

(statearr_48115[(8)] = inst_47973__$1);

(statearr_48115[(9)] = inst_47971__$1);

(statearr_48115[(10)] = inst_47974__$1);

return statearr_48115;
})();
var statearr_48116_48202 = state_48110__$1;
(statearr_48116_48202[(2)] = null);

(statearr_48116_48202[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (20))){
var inst_48014 = (state_48110[(12)]);
var inst_48022 = figwheel.client.file_reloading.sort_files.call(null,inst_48014);
var state_48110__$1 = state_48110;
var statearr_48117_48203 = state_48110__$1;
(statearr_48117_48203[(2)] = inst_48022);

(statearr_48117_48203[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (27))){
var state_48110__$1 = state_48110;
var statearr_48118_48204 = state_48110__$1;
(statearr_48118_48204[(2)] = null);

(statearr_48118_48204[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (1))){
var inst_47963 = (state_48110[(13)]);
var inst_47960 = before_jsload.call(null,files);
var inst_47961 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_47962 = (function (){return ((function (inst_47963,inst_47960,inst_47961,state_val_48111,c__28544__auto__,map__47956,map__47956__$1,opts,before_jsload,on_jsload,reload_dependents,map__47957,map__47957__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__47705_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__47705_SHARP_);
});
;})(inst_47963,inst_47960,inst_47961,state_val_48111,c__28544__auto__,map__47956,map__47956__$1,opts,before_jsload,on_jsload,reload_dependents,map__47957,map__47957__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47963__$1 = cljs.core.filter.call(null,inst_47962,files);
var inst_47964 = cljs.core.not_empty.call(null,inst_47963__$1);
var state_48110__$1 = (function (){var statearr_48119 = state_48110;
(statearr_48119[(14)] = inst_47960);

(statearr_48119[(13)] = inst_47963__$1);

(statearr_48119[(15)] = inst_47961);

return statearr_48119;
})();
if(cljs.core.truth_(inst_47964)){
var statearr_48120_48205 = state_48110__$1;
(statearr_48120_48205[(1)] = (2));

} else {
var statearr_48121_48206 = state_48110__$1;
(statearr_48121_48206[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (24))){
var state_48110__$1 = state_48110;
var statearr_48122_48207 = state_48110__$1;
(statearr_48122_48207[(2)] = null);

(statearr_48122_48207[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (39))){
var inst_48064 = (state_48110[(16)]);
var state_48110__$1 = state_48110;
var statearr_48123_48208 = state_48110__$1;
(statearr_48123_48208[(2)] = inst_48064);

(statearr_48123_48208[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (46))){
var inst_48105 = (state_48110[(2)]);
var state_48110__$1 = state_48110;
var statearr_48124_48209 = state_48110__$1;
(statearr_48124_48209[(2)] = inst_48105);

(statearr_48124_48209[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (4))){
var inst_48008 = (state_48110[(2)]);
var inst_48009 = cljs.core.List.EMPTY;
var inst_48010 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_48009);
var inst_48011 = (function (){return ((function (inst_48008,inst_48009,inst_48010,state_val_48111,c__28544__auto__,map__47956,map__47956__$1,opts,before_jsload,on_jsload,reload_dependents,map__47957,map__47957__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__47706_SHARP_){
var and__24778__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__47706_SHARP_);
if(cljs.core.truth_(and__24778__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__47706_SHARP_));
} else {
return and__24778__auto__;
}
});
;})(inst_48008,inst_48009,inst_48010,state_val_48111,c__28544__auto__,map__47956,map__47956__$1,opts,before_jsload,on_jsload,reload_dependents,map__47957,map__47957__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48012 = cljs.core.filter.call(null,inst_48011,files);
var inst_48013 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_48014 = cljs.core.concat.call(null,inst_48012,inst_48013);
var state_48110__$1 = (function (){var statearr_48125 = state_48110;
(statearr_48125[(17)] = inst_48008);

(statearr_48125[(18)] = inst_48010);

(statearr_48125[(12)] = inst_48014);

return statearr_48125;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_48126_48210 = state_48110__$1;
(statearr_48126_48210[(1)] = (16));

} else {
var statearr_48127_48211 = state_48110__$1;
(statearr_48127_48211[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (15))){
var inst_47998 = (state_48110[(2)]);
var state_48110__$1 = state_48110;
var statearr_48128_48212 = state_48110__$1;
(statearr_48128_48212[(2)] = inst_47998);

(statearr_48128_48212[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (21))){
var inst_48024 = (state_48110[(19)]);
var inst_48024__$1 = (state_48110[(2)]);
var inst_48025 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_48024__$1);
var state_48110__$1 = (function (){var statearr_48129 = state_48110;
(statearr_48129[(19)] = inst_48024__$1);

return statearr_48129;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48110__$1,(22),inst_48025);
} else {
if((state_val_48111 === (31))){
var inst_48108 = (state_48110[(2)]);
var state_48110__$1 = state_48110;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48110__$1,inst_48108);
} else {
if((state_val_48111 === (32))){
var inst_48064 = (state_48110[(16)]);
var inst_48069 = inst_48064.cljs$lang$protocol_mask$partition0$;
var inst_48070 = (inst_48069 & (64));
var inst_48071 = inst_48064.cljs$core$ISeq$;
var inst_48072 = (inst_48070) || (inst_48071);
var state_48110__$1 = state_48110;
if(cljs.core.truth_(inst_48072)){
var statearr_48130_48213 = state_48110__$1;
(statearr_48130_48213[(1)] = (35));

} else {
var statearr_48131_48214 = state_48110__$1;
(statearr_48131_48214[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (40))){
var inst_48085 = (state_48110[(20)]);
var inst_48084 = (state_48110[(2)]);
var inst_48085__$1 = cljs.core.get.call(null,inst_48084,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_48086 = cljs.core.get.call(null,inst_48084,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_48087 = cljs.core.not_empty.call(null,inst_48085__$1);
var state_48110__$1 = (function (){var statearr_48132 = state_48110;
(statearr_48132[(21)] = inst_48086);

(statearr_48132[(20)] = inst_48085__$1);

return statearr_48132;
})();
if(cljs.core.truth_(inst_48087)){
var statearr_48133_48215 = state_48110__$1;
(statearr_48133_48215[(1)] = (41));

} else {
var statearr_48134_48216 = state_48110__$1;
(statearr_48134_48216[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (33))){
var state_48110__$1 = state_48110;
var statearr_48135_48217 = state_48110__$1;
(statearr_48135_48217[(2)] = false);

(statearr_48135_48217[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (13))){
var inst_47984 = (state_48110[(22)]);
var inst_47988 = cljs.core.chunk_first.call(null,inst_47984);
var inst_47989 = cljs.core.chunk_rest.call(null,inst_47984);
var inst_47990 = cljs.core.count.call(null,inst_47988);
var inst_47971 = inst_47989;
var inst_47972 = inst_47988;
var inst_47973 = inst_47990;
var inst_47974 = (0);
var state_48110__$1 = (function (){var statearr_48136 = state_48110;
(statearr_48136[(7)] = inst_47972);

(statearr_48136[(8)] = inst_47973);

(statearr_48136[(9)] = inst_47971);

(statearr_48136[(10)] = inst_47974);

return statearr_48136;
})();
var statearr_48137_48218 = state_48110__$1;
(statearr_48137_48218[(2)] = null);

(statearr_48137_48218[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (22))){
var inst_48032 = (state_48110[(23)]);
var inst_48027 = (state_48110[(24)]);
var inst_48024 = (state_48110[(19)]);
var inst_48028 = (state_48110[(25)]);
var inst_48027__$1 = (state_48110[(2)]);
var inst_48028__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_48027__$1);
var inst_48029 = (function (){var all_files = inst_48024;
var res_SINGLEQUOTE_ = inst_48027__$1;
var res = inst_48028__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_48032,inst_48027,inst_48024,inst_48028,inst_48027__$1,inst_48028__$1,state_val_48111,c__28544__auto__,map__47956,map__47956__$1,opts,before_jsload,on_jsload,reload_dependents,map__47957,map__47957__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__47707_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__47707_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_48032,inst_48027,inst_48024,inst_48028,inst_48027__$1,inst_48028__$1,state_val_48111,c__28544__auto__,map__47956,map__47956__$1,opts,before_jsload,on_jsload,reload_dependents,map__47957,map__47957__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48030 = cljs.core.filter.call(null,inst_48029,inst_48027__$1);
var inst_48031 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_48032__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_48031);
var inst_48033 = cljs.core.not_empty.call(null,inst_48032__$1);
var state_48110__$1 = (function (){var statearr_48138 = state_48110;
(statearr_48138[(23)] = inst_48032__$1);

(statearr_48138[(24)] = inst_48027__$1);

(statearr_48138[(26)] = inst_48030);

(statearr_48138[(25)] = inst_48028__$1);

return statearr_48138;
})();
if(cljs.core.truth_(inst_48033)){
var statearr_48139_48219 = state_48110__$1;
(statearr_48139_48219[(1)] = (23));

} else {
var statearr_48140_48220 = state_48110__$1;
(statearr_48140_48220[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (36))){
var state_48110__$1 = state_48110;
var statearr_48141_48221 = state_48110__$1;
(statearr_48141_48221[(2)] = false);

(statearr_48141_48221[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (41))){
var inst_48085 = (state_48110[(20)]);
var inst_48089 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_48090 = cljs.core.map.call(null,inst_48089,inst_48085);
var inst_48091 = cljs.core.pr_str.call(null,inst_48090);
var inst_48092 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_48091)].join('');
var inst_48093 = figwheel.client.utils.log.call(null,inst_48092);
var state_48110__$1 = state_48110;
var statearr_48142_48222 = state_48110__$1;
(statearr_48142_48222[(2)] = inst_48093);

(statearr_48142_48222[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (43))){
var inst_48086 = (state_48110[(21)]);
var inst_48096 = (state_48110[(2)]);
var inst_48097 = cljs.core.not_empty.call(null,inst_48086);
var state_48110__$1 = (function (){var statearr_48143 = state_48110;
(statearr_48143[(27)] = inst_48096);

return statearr_48143;
})();
if(cljs.core.truth_(inst_48097)){
var statearr_48144_48223 = state_48110__$1;
(statearr_48144_48223[(1)] = (44));

} else {
var statearr_48145_48224 = state_48110__$1;
(statearr_48145_48224[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (29))){
var inst_48032 = (state_48110[(23)]);
var inst_48027 = (state_48110[(24)]);
var inst_48024 = (state_48110[(19)]);
var inst_48030 = (state_48110[(26)]);
var inst_48064 = (state_48110[(16)]);
var inst_48028 = (state_48110[(25)]);
var inst_48060 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_48063 = (function (){var all_files = inst_48024;
var res_SINGLEQUOTE_ = inst_48027;
var res = inst_48028;
var files_not_loaded = inst_48030;
var dependencies_that_loaded = inst_48032;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48032,inst_48027,inst_48024,inst_48030,inst_48064,inst_48028,inst_48060,state_val_48111,c__28544__auto__,map__47956,map__47956__$1,opts,before_jsload,on_jsload,reload_dependents,map__47957,map__47957__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__48062){
var map__48146 = p__48062;
var map__48146__$1 = ((((!((map__48146 == null)))?((((map__48146.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48146.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48146):map__48146);
var namespace = cljs.core.get.call(null,map__48146__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48032,inst_48027,inst_48024,inst_48030,inst_48064,inst_48028,inst_48060,state_val_48111,c__28544__auto__,map__47956,map__47956__$1,opts,before_jsload,on_jsload,reload_dependents,map__47957,map__47957__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48064__$1 = cljs.core.group_by.call(null,inst_48063,inst_48030);
var inst_48066 = (inst_48064__$1 == null);
var inst_48067 = cljs.core.not.call(null,inst_48066);
var state_48110__$1 = (function (){var statearr_48148 = state_48110;
(statearr_48148[(16)] = inst_48064__$1);

(statearr_48148[(28)] = inst_48060);

return statearr_48148;
})();
if(inst_48067){
var statearr_48149_48225 = state_48110__$1;
(statearr_48149_48225[(1)] = (32));

} else {
var statearr_48150_48226 = state_48110__$1;
(statearr_48150_48226[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (44))){
var inst_48086 = (state_48110[(21)]);
var inst_48099 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_48086);
var inst_48100 = cljs.core.pr_str.call(null,inst_48099);
var inst_48101 = [cljs.core.str("not required: "),cljs.core.str(inst_48100)].join('');
var inst_48102 = figwheel.client.utils.log.call(null,inst_48101);
var state_48110__$1 = state_48110;
var statearr_48151_48227 = state_48110__$1;
(statearr_48151_48227[(2)] = inst_48102);

(statearr_48151_48227[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (6))){
var inst_48005 = (state_48110[(2)]);
var state_48110__$1 = state_48110;
var statearr_48152_48228 = state_48110__$1;
(statearr_48152_48228[(2)] = inst_48005);

(statearr_48152_48228[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (28))){
var inst_48030 = (state_48110[(26)]);
var inst_48057 = (state_48110[(2)]);
var inst_48058 = cljs.core.not_empty.call(null,inst_48030);
var state_48110__$1 = (function (){var statearr_48153 = state_48110;
(statearr_48153[(29)] = inst_48057);

return statearr_48153;
})();
if(cljs.core.truth_(inst_48058)){
var statearr_48154_48229 = state_48110__$1;
(statearr_48154_48229[(1)] = (29));

} else {
var statearr_48155_48230 = state_48110__$1;
(statearr_48155_48230[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (25))){
var inst_48028 = (state_48110[(25)]);
var inst_48044 = (state_48110[(2)]);
var inst_48045 = cljs.core.not_empty.call(null,inst_48028);
var state_48110__$1 = (function (){var statearr_48156 = state_48110;
(statearr_48156[(30)] = inst_48044);

return statearr_48156;
})();
if(cljs.core.truth_(inst_48045)){
var statearr_48157_48231 = state_48110__$1;
(statearr_48157_48231[(1)] = (26));

} else {
var statearr_48158_48232 = state_48110__$1;
(statearr_48158_48232[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (34))){
var inst_48079 = (state_48110[(2)]);
var state_48110__$1 = state_48110;
if(cljs.core.truth_(inst_48079)){
var statearr_48159_48233 = state_48110__$1;
(statearr_48159_48233[(1)] = (38));

} else {
var statearr_48160_48234 = state_48110__$1;
(statearr_48160_48234[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (17))){
var state_48110__$1 = state_48110;
var statearr_48161_48235 = state_48110__$1;
(statearr_48161_48235[(2)] = recompile_dependents);

(statearr_48161_48235[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (3))){
var state_48110__$1 = state_48110;
var statearr_48162_48236 = state_48110__$1;
(statearr_48162_48236[(2)] = null);

(statearr_48162_48236[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (12))){
var inst_48001 = (state_48110[(2)]);
var state_48110__$1 = state_48110;
var statearr_48163_48237 = state_48110__$1;
(statearr_48163_48237[(2)] = inst_48001);

(statearr_48163_48237[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (2))){
var inst_47963 = (state_48110[(13)]);
var inst_47970 = cljs.core.seq.call(null,inst_47963);
var inst_47971 = inst_47970;
var inst_47972 = null;
var inst_47973 = (0);
var inst_47974 = (0);
var state_48110__$1 = (function (){var statearr_48164 = state_48110;
(statearr_48164[(7)] = inst_47972);

(statearr_48164[(8)] = inst_47973);

(statearr_48164[(9)] = inst_47971);

(statearr_48164[(10)] = inst_47974);

return statearr_48164;
})();
var statearr_48165_48238 = state_48110__$1;
(statearr_48165_48238[(2)] = null);

(statearr_48165_48238[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (23))){
var inst_48032 = (state_48110[(23)]);
var inst_48027 = (state_48110[(24)]);
var inst_48024 = (state_48110[(19)]);
var inst_48030 = (state_48110[(26)]);
var inst_48028 = (state_48110[(25)]);
var inst_48035 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_48037 = (function (){var all_files = inst_48024;
var res_SINGLEQUOTE_ = inst_48027;
var res = inst_48028;
var files_not_loaded = inst_48030;
var dependencies_that_loaded = inst_48032;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48032,inst_48027,inst_48024,inst_48030,inst_48028,inst_48035,state_val_48111,c__28544__auto__,map__47956,map__47956__$1,opts,before_jsload,on_jsload,reload_dependents,map__47957,map__47957__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__48036){
var map__48166 = p__48036;
var map__48166__$1 = ((((!((map__48166 == null)))?((((map__48166.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48166.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48166):map__48166);
var request_url = cljs.core.get.call(null,map__48166__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48032,inst_48027,inst_48024,inst_48030,inst_48028,inst_48035,state_val_48111,c__28544__auto__,map__47956,map__47956__$1,opts,before_jsload,on_jsload,reload_dependents,map__47957,map__47957__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48038 = cljs.core.reverse.call(null,inst_48032);
var inst_48039 = cljs.core.map.call(null,inst_48037,inst_48038);
var inst_48040 = cljs.core.pr_str.call(null,inst_48039);
var inst_48041 = figwheel.client.utils.log.call(null,inst_48040);
var state_48110__$1 = (function (){var statearr_48168 = state_48110;
(statearr_48168[(31)] = inst_48035);

return statearr_48168;
})();
var statearr_48169_48239 = state_48110__$1;
(statearr_48169_48239[(2)] = inst_48041);

(statearr_48169_48239[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (35))){
var state_48110__$1 = state_48110;
var statearr_48170_48240 = state_48110__$1;
(statearr_48170_48240[(2)] = true);

(statearr_48170_48240[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (19))){
var inst_48014 = (state_48110[(12)]);
var inst_48020 = figwheel.client.file_reloading.expand_files.call(null,inst_48014);
var state_48110__$1 = state_48110;
var statearr_48171_48241 = state_48110__$1;
(statearr_48171_48241[(2)] = inst_48020);

(statearr_48171_48241[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (11))){
var state_48110__$1 = state_48110;
var statearr_48172_48242 = state_48110__$1;
(statearr_48172_48242[(2)] = null);

(statearr_48172_48242[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (9))){
var inst_48003 = (state_48110[(2)]);
var state_48110__$1 = state_48110;
var statearr_48173_48243 = state_48110__$1;
(statearr_48173_48243[(2)] = inst_48003);

(statearr_48173_48243[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (5))){
var inst_47973 = (state_48110[(8)]);
var inst_47974 = (state_48110[(10)]);
var inst_47976 = (inst_47974 < inst_47973);
var inst_47977 = inst_47976;
var state_48110__$1 = state_48110;
if(cljs.core.truth_(inst_47977)){
var statearr_48174_48244 = state_48110__$1;
(statearr_48174_48244[(1)] = (7));

} else {
var statearr_48175_48245 = state_48110__$1;
(statearr_48175_48245[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (14))){
var inst_47984 = (state_48110[(22)]);
var inst_47993 = cljs.core.first.call(null,inst_47984);
var inst_47994 = figwheel.client.file_reloading.eval_body.call(null,inst_47993,opts);
var inst_47995 = cljs.core.next.call(null,inst_47984);
var inst_47971 = inst_47995;
var inst_47972 = null;
var inst_47973 = (0);
var inst_47974 = (0);
var state_48110__$1 = (function (){var statearr_48176 = state_48110;
(statearr_48176[(7)] = inst_47972);

(statearr_48176[(8)] = inst_47973);

(statearr_48176[(9)] = inst_47971);

(statearr_48176[(10)] = inst_47974);

(statearr_48176[(32)] = inst_47994);

return statearr_48176;
})();
var statearr_48177_48246 = state_48110__$1;
(statearr_48177_48246[(2)] = null);

(statearr_48177_48246[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (45))){
var state_48110__$1 = state_48110;
var statearr_48178_48247 = state_48110__$1;
(statearr_48178_48247[(2)] = null);

(statearr_48178_48247[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (26))){
var inst_48032 = (state_48110[(23)]);
var inst_48027 = (state_48110[(24)]);
var inst_48024 = (state_48110[(19)]);
var inst_48030 = (state_48110[(26)]);
var inst_48028 = (state_48110[(25)]);
var inst_48047 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_48049 = (function (){var all_files = inst_48024;
var res_SINGLEQUOTE_ = inst_48027;
var res = inst_48028;
var files_not_loaded = inst_48030;
var dependencies_that_loaded = inst_48032;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48032,inst_48027,inst_48024,inst_48030,inst_48028,inst_48047,state_val_48111,c__28544__auto__,map__47956,map__47956__$1,opts,before_jsload,on_jsload,reload_dependents,map__47957,map__47957__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__48048){
var map__48179 = p__48048;
var map__48179__$1 = ((((!((map__48179 == null)))?((((map__48179.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48179.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48179):map__48179);
var namespace = cljs.core.get.call(null,map__48179__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__48179__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48032,inst_48027,inst_48024,inst_48030,inst_48028,inst_48047,state_val_48111,c__28544__auto__,map__47956,map__47956__$1,opts,before_jsload,on_jsload,reload_dependents,map__47957,map__47957__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48050 = cljs.core.map.call(null,inst_48049,inst_48028);
var inst_48051 = cljs.core.pr_str.call(null,inst_48050);
var inst_48052 = figwheel.client.utils.log.call(null,inst_48051);
var inst_48053 = (function (){var all_files = inst_48024;
var res_SINGLEQUOTE_ = inst_48027;
var res = inst_48028;
var files_not_loaded = inst_48030;
var dependencies_that_loaded = inst_48032;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48032,inst_48027,inst_48024,inst_48030,inst_48028,inst_48047,inst_48049,inst_48050,inst_48051,inst_48052,state_val_48111,c__28544__auto__,map__47956,map__47956__$1,opts,before_jsload,on_jsload,reload_dependents,map__47957,map__47957__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48032,inst_48027,inst_48024,inst_48030,inst_48028,inst_48047,inst_48049,inst_48050,inst_48051,inst_48052,state_val_48111,c__28544__auto__,map__47956,map__47956__$1,opts,before_jsload,on_jsload,reload_dependents,map__47957,map__47957__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48054 = setTimeout(inst_48053,(10));
var state_48110__$1 = (function (){var statearr_48181 = state_48110;
(statearr_48181[(33)] = inst_48047);

(statearr_48181[(34)] = inst_48052);

return statearr_48181;
})();
var statearr_48182_48248 = state_48110__$1;
(statearr_48182_48248[(2)] = inst_48054);

(statearr_48182_48248[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (16))){
var state_48110__$1 = state_48110;
var statearr_48183_48249 = state_48110__$1;
(statearr_48183_48249[(2)] = reload_dependents);

(statearr_48183_48249[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (38))){
var inst_48064 = (state_48110[(16)]);
var inst_48081 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48064);
var state_48110__$1 = state_48110;
var statearr_48184_48250 = state_48110__$1;
(statearr_48184_48250[(2)] = inst_48081);

(statearr_48184_48250[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (30))){
var state_48110__$1 = state_48110;
var statearr_48185_48251 = state_48110__$1;
(statearr_48185_48251[(2)] = null);

(statearr_48185_48251[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (10))){
var inst_47984 = (state_48110[(22)]);
var inst_47986 = cljs.core.chunked_seq_QMARK_.call(null,inst_47984);
var state_48110__$1 = state_48110;
if(inst_47986){
var statearr_48186_48252 = state_48110__$1;
(statearr_48186_48252[(1)] = (13));

} else {
var statearr_48187_48253 = state_48110__$1;
(statearr_48187_48253[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (18))){
var inst_48018 = (state_48110[(2)]);
var state_48110__$1 = state_48110;
if(cljs.core.truth_(inst_48018)){
var statearr_48188_48254 = state_48110__$1;
(statearr_48188_48254[(1)] = (19));

} else {
var statearr_48189_48255 = state_48110__$1;
(statearr_48189_48255[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (42))){
var state_48110__$1 = state_48110;
var statearr_48190_48256 = state_48110__$1;
(statearr_48190_48256[(2)] = null);

(statearr_48190_48256[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (37))){
var inst_48076 = (state_48110[(2)]);
var state_48110__$1 = state_48110;
var statearr_48191_48257 = state_48110__$1;
(statearr_48191_48257[(2)] = inst_48076);

(statearr_48191_48257[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (8))){
var inst_47971 = (state_48110[(9)]);
var inst_47984 = (state_48110[(22)]);
var inst_47984__$1 = cljs.core.seq.call(null,inst_47971);
var state_48110__$1 = (function (){var statearr_48192 = state_48110;
(statearr_48192[(22)] = inst_47984__$1);

return statearr_48192;
})();
if(inst_47984__$1){
var statearr_48193_48258 = state_48110__$1;
(statearr_48193_48258[(1)] = (10));

} else {
var statearr_48194_48259 = state_48110__$1;
(statearr_48194_48259[(1)] = (11));

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
});})(c__28544__auto__,map__47956,map__47956__$1,opts,before_jsload,on_jsload,reload_dependents,map__47957,map__47957__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__28523__auto__,c__28544__auto__,map__47956,map__47956__$1,opts,before_jsload,on_jsload,reload_dependents,map__47957,map__47957__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28524__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28524__auto____0 = (function (){
var statearr_48198 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48198[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28524__auto__);

(statearr_48198[(1)] = (1));

return statearr_48198;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28524__auto____1 = (function (state_48110){
while(true){
var ret_value__28525__auto__ = (function (){try{while(true){
var result__28526__auto__ = switch__28523__auto__.call(null,state_48110);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28526__auto__;
}
break;
}
}catch (e48199){if((e48199 instanceof Object)){
var ex__28527__auto__ = e48199;
var statearr_48200_48260 = state_48110;
(statearr_48200_48260[(5)] = ex__28527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48110);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48199;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48261 = state_48110;
state_48110 = G__48261;
continue;
} else {
return ret_value__28525__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28524__auto__ = function(state_48110){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28524__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28524__auto____1.call(this,state_48110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28524__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28524__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28524__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28524__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28524__auto__;
})()
;})(switch__28523__auto__,c__28544__auto__,map__47956,map__47956__$1,opts,before_jsload,on_jsload,reload_dependents,map__47957,map__47957__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28546__auto__ = (function (){var statearr_48201 = f__28545__auto__.call(null);
(statearr_48201[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28544__auto__);

return statearr_48201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28546__auto__);
});})(c__28544__auto__,map__47956,map__47956__$1,opts,before_jsload,on_jsload,reload_dependents,map__47957,map__47957__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28544__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__48264,link){
var map__48267 = p__48264;
var map__48267__$1 = ((((!((map__48267 == null)))?((((map__48267.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48267.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48267):map__48267);
var file = cljs.core.get.call(null,map__48267__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__48267,map__48267__$1,file){
return (function (p1__48262_SHARP_,p2__48263_SHARP_){
if(cljs.core._EQ_.call(null,p1__48262_SHARP_,p2__48263_SHARP_)){
return p1__48262_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__48267,map__48267__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__48273){
var map__48274 = p__48273;
var map__48274__$1 = ((((!((map__48274 == null)))?((((map__48274.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48274.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48274):map__48274);
var match_length = cljs.core.get.call(null,map__48274__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__48274__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__48269_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__48269_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args48276 = [];
var len__25865__auto___48279 = arguments.length;
var i__25866__auto___48280 = (0);
while(true){
if((i__25866__auto___48280 < len__25865__auto___48279)){
args48276.push((arguments[i__25866__auto___48280]));

var G__48281 = (i__25866__auto___48280 + (1));
i__25866__auto___48280 = G__48281;
continue;
} else {
}
break;
}

var G__48278 = args48276.length;
switch (G__48278) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48276.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__48283_SHARP_,p2__48284_SHARP_){
return cljs.core.assoc.call(null,p1__48283_SHARP_,cljs.core.get.call(null,p2__48284_SHARP_,key),p2__48284_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__48285){
var map__48288 = p__48285;
var map__48288__$1 = ((((!((map__48288 == null)))?((((map__48288.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48288.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48288):map__48288);
var f_data = map__48288__$1;
var file = cljs.core.get.call(null,map__48288__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__48290,p__48291){
var map__48300 = p__48290;
var map__48300__$1 = ((((!((map__48300 == null)))?((((map__48300.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48300.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48300):map__48300);
var opts = map__48300__$1;
var on_cssload = cljs.core.get.call(null,map__48300__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__48301 = p__48291;
var map__48301__$1 = ((((!((map__48301 == null)))?((((map__48301.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48301.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48301):map__48301);
var files_msg = map__48301__$1;
var files = cljs.core.get.call(null,map__48301__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__48304_48308 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__48305_48309 = null;
var count__48306_48310 = (0);
var i__48307_48311 = (0);
while(true){
if((i__48307_48311 < count__48306_48310)){
var f_48312 = cljs.core._nth.call(null,chunk__48305_48309,i__48307_48311);
figwheel.client.file_reloading.reload_css_file.call(null,f_48312);

var G__48313 = seq__48304_48308;
var G__48314 = chunk__48305_48309;
var G__48315 = count__48306_48310;
var G__48316 = (i__48307_48311 + (1));
seq__48304_48308 = G__48313;
chunk__48305_48309 = G__48314;
count__48306_48310 = G__48315;
i__48307_48311 = G__48316;
continue;
} else {
var temp__4657__auto___48317 = cljs.core.seq.call(null,seq__48304_48308);
if(temp__4657__auto___48317){
var seq__48304_48318__$1 = temp__4657__auto___48317;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48304_48318__$1)){
var c__25601__auto___48319 = cljs.core.chunk_first.call(null,seq__48304_48318__$1);
var G__48320 = cljs.core.chunk_rest.call(null,seq__48304_48318__$1);
var G__48321 = c__25601__auto___48319;
var G__48322 = cljs.core.count.call(null,c__25601__auto___48319);
var G__48323 = (0);
seq__48304_48308 = G__48320;
chunk__48305_48309 = G__48321;
count__48306_48310 = G__48322;
i__48307_48311 = G__48323;
continue;
} else {
var f_48324 = cljs.core.first.call(null,seq__48304_48318__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_48324);

var G__48325 = cljs.core.next.call(null,seq__48304_48318__$1);
var G__48326 = null;
var G__48327 = (0);
var G__48328 = (0);
seq__48304_48308 = G__48325;
chunk__48305_48309 = G__48326;
count__48306_48310 = G__48327;
i__48307_48311 = G__48328;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__48300,map__48300__$1,opts,on_cssload,map__48301,map__48301__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__48300,map__48300__$1,opts,on_cssload,map__48301,map__48301__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1484800034693