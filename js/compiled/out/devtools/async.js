// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.async');
goog.require('cljs.core');
goog.require('goog.async.nextTick');
devtools.async.available_QMARK_ = (function devtools$async$available_QMARK_(){
return typeof Promise !== 'undefined';
});
devtools.async._STAR_installed_STAR_ = false;
devtools.async._STAR_original_set_immediate_STAR_ = null;
devtools.async.rethrow_outside_promise = (function devtools$async$rethrow_outside_promise(e){
return setTimeout((function (){
throw e;
}),(0));
});
devtools.async.promise_based_set_immediate = (function devtools$async$promise_based_set_immediate(callback){
var o__30447__auto___54874 = (function (){var o__30447__auto__ = (function (){var o__30447__auto__ = Promise;
return goog.object.get(o__30447__auto__,"resolve").call(o__30447__auto__);
})();
return goog.object.get(o__30447__auto__,"then").call(o__30447__auto__,callback);
})();
goog.object.get(o__30447__auto___54874,"catch").call(o__30447__auto___54874,devtools.async.rethrow_outside_promise);

return null;
});
devtools.async.install_async_set_immediate_BANG_ = (function devtools$async$install_async_set_immediate_BANG_(){
devtools.async._STAR_original_set_immediate_STAR_ = goog.async.nextTick.setImmediate_;

return goog.async.nextTick.setImmediate_ = devtools.async.promise_based_set_immediate;
});
devtools.async.uninstall_async_set_immediate_BANG_ = (function devtools$async$uninstall_async_set_immediate_BANG_(){
return goog.async.nextTick.setImmediate_ = devtools.async._STAR_original_set_immediate_STAR_;
});
devtools.async.installed_QMARK_ = (function devtools$async$installed_QMARK_(){
return devtools.async._STAR_installed_STAR_;
});
devtools.async.install_BANG_ = (function devtools$async$install_BANG_(){
if(cljs.core.truth_(devtools.async._STAR_installed_STAR_)){
return null;
} else {
devtools.async._STAR_installed_STAR_ = true;

var G__54876_54877 = Error;
var target__30466__auto___54878 = G__54876_54877;
if(cljs.core.truth_(target__30466__auto___54878)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("unable to locate object path "),cljs.core.str(null),cljs.core.str(" in "),cljs.core.str(G__54876_54877)].join('')),cljs.core.str("\n"),cljs.core.str("target__30466__auto__")].join('')));
}

goog.object.set(target__30466__auto___54878,cljs.core.last.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["stackTraceLimit"], null)),Infinity);


devtools.async.install_async_set_immediate_BANG_.call(null);

return true;
}
});
devtools.async.uninstall_BANG_ = (function devtools$async$uninstall_BANG_(){
if(cljs.core.truth_(devtools.async._STAR_installed_STAR_)){
devtools.async._STAR_installed_STAR_ = false;

return devtools.async.uninstall_async_set_immediate_BANG_.call(null);
} else {
return null;
}
});

//# sourceMappingURL=async.js.map?rel=1484800049335