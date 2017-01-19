// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args44498 = [];
var len__25865__auto___44504 = arguments.length;
var i__25866__auto___44505 = (0);
while(true){
if((i__25866__auto___44505 < len__25865__auto___44504)){
args44498.push((arguments[i__25866__auto___44505]));

var G__44506 = (i__25866__auto___44505 + (1));
i__25866__auto___44505 = G__44506;
continue;
} else {
}
break;
}

var G__44500 = args44498.length;
switch (G__44500) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44498.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async44501 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44501 = (function (f,blockable,meta44502){
this.f = f;
this.blockable = blockable;
this.meta44502 = meta44502;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async44501.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44503,meta44502__$1){
var self__ = this;
var _44503__$1 = this;
return (new cljs.core.async.t_cljs$core$async44501(self__.f,self__.blockable,meta44502__$1));
});

cljs.core.async.t_cljs$core$async44501.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44503){
var self__ = this;
var _44503__$1 = this;
return self__.meta44502;
});

cljs.core.async.t_cljs$core$async44501.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async44501.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async44501.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async44501.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async44501.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta44502","meta44502",-1580408582,null)], null);
});

cljs.core.async.t_cljs$core$async44501.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44501.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44501";

cljs.core.async.t_cljs$core$async44501.cljs$lang$ctorPrWriter = (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async44501");
});

cljs.core.async.__GT_t_cljs$core$async44501 = (function cljs$core$async$__GT_t_cljs$core$async44501(f__$1,blockable__$1,meta44502){
return (new cljs.core.async.t_cljs$core$async44501(f__$1,blockable__$1,meta44502));
});

}

return (new cljs.core.async.t_cljs$core$async44501(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args44510 = [];
var len__25865__auto___44513 = arguments.length;
var i__25866__auto___44514 = (0);
while(true){
if((i__25866__auto___44514 < len__25865__auto___44513)){
args44510.push((arguments[i__25866__auto___44514]));

var G__44515 = (i__25866__auto___44514 + (1));
i__25866__auto___44514 = G__44515;
continue;
} else {
}
break;
}

var G__44512 = args44510.length;
switch (G__44512) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44510.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args44517 = [];
var len__25865__auto___44520 = arguments.length;
var i__25866__auto___44521 = (0);
while(true){
if((i__25866__auto___44521 < len__25865__auto___44520)){
args44517.push((arguments[i__25866__auto___44521]));

var G__44522 = (i__25866__auto___44521 + (1));
i__25866__auto___44521 = G__44522;
continue;
} else {
}
break;
}

var G__44519 = args44517.length;
switch (G__44519) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44517.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args44524 = [];
var len__25865__auto___44527 = arguments.length;
var i__25866__auto___44528 = (0);
while(true){
if((i__25866__auto___44528 < len__25865__auto___44527)){
args44524.push((arguments[i__25866__auto___44528]));

var G__44529 = (i__25866__auto___44528 + (1));
i__25866__auto___44528 = G__44529;
continue;
} else {
}
break;
}

var G__44526 = args44524.length;
switch (G__44526) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44524.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_44531 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_44531);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_44531,ret){
return (function (){
return fn1.call(null,val_44531);
});})(val_44531,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args44532 = [];
var len__25865__auto___44535 = arguments.length;
var i__25866__auto___44536 = (0);
while(true){
if((i__25866__auto___44536 < len__25865__auto___44535)){
args44532.push((arguments[i__25866__auto___44536]));

var G__44537 = (i__25866__auto___44536 + (1));
i__25866__auto___44536 = G__44537;
continue;
} else {
}
break;
}

var G__44534 = args44532.length;
switch (G__44534) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44532.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__25705__auto___44539 = n;
var x_44540 = (0);
while(true){
if((x_44540 < n__25705__auto___44539)){
(a[x_44540] = (0));

var G__44541 = (x_44540 + (1));
x_44540 = G__44541;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__44542 = (i + (1));
i = G__44542;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async44546 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44546 = (function (alt_flag,flag,meta44547){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta44547 = meta44547;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async44546.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_44548,meta44547__$1){
var self__ = this;
var _44548__$1 = this;
return (new cljs.core.async.t_cljs$core$async44546(self__.alt_flag,self__.flag,meta44547__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async44546.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_44548){
var self__ = this;
var _44548__$1 = this;
return self__.meta44547;
});})(flag))
;

cljs.core.async.t_cljs$core$async44546.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async44546.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async44546.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async44546.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async44546.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta44547","meta44547",818141917,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async44546.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44546.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44546";

cljs.core.async.t_cljs$core$async44546.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async44546");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async44546 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async44546(alt_flag__$1,flag__$1,meta44547){
return (new cljs.core.async.t_cljs$core$async44546(alt_flag__$1,flag__$1,meta44547));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async44546(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async44552 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44552 = (function (alt_handler,flag,cb,meta44553){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta44553 = meta44553;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async44552.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44554,meta44553__$1){
var self__ = this;
var _44554__$1 = this;
return (new cljs.core.async.t_cljs$core$async44552(self__.alt_handler,self__.flag,self__.cb,meta44553__$1));
});

cljs.core.async.t_cljs$core$async44552.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44554){
var self__ = this;
var _44554__$1 = this;
return self__.meta44553;
});

cljs.core.async.t_cljs$core$async44552.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async44552.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async44552.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async44552.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async44552.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta44553","meta44553",-257455789,null)], null);
});

cljs.core.async.t_cljs$core$async44552.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44552.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44552";

cljs.core.async.t_cljs$core$async44552.cljs$lang$ctorPrWriter = (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async44552");
});

cljs.core.async.__GT_t_cljs$core$async44552 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async44552(alt_handler__$1,flag__$1,cb__$1,meta44553){
return (new cljs.core.async.t_cljs$core$async44552(alt_handler__$1,flag__$1,cb__$1,meta44553));
});

}

return (new cljs.core.async.t_cljs$core$async44552(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44555_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44555_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44556_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44556_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__24790__auto__ = wport;
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return port;
}
})()], null));
} else {
var G__44557 = (i + (1));
i = G__44557;
continue;
}
} else {
return null;
}
break;
}
})();
var or__24790__auto__ = ret;
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__24778__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24778__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24778__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__25872__auto__ = [];
var len__25865__auto___44563 = arguments.length;
var i__25866__auto___44564 = (0);
while(true){
if((i__25866__auto___44564 < len__25865__auto___44563)){
args__25872__auto__.push((arguments[i__25866__auto___44564]));

var G__44565 = (i__25866__auto___44564 + (1));
i__25866__auto___44564 = G__44565;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__44560){
var map__44561 = p__44560;
var map__44561__$1 = ((((!((map__44561 == null)))?((((map__44561.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44561.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44561):map__44561);
var opts = map__44561__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq44558){
var G__44559 = cljs.core.first.call(null,seq44558);
var seq44558__$1 = cljs.core.next.call(null,seq44558);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__44559,seq44558__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args44566 = [];
var len__25865__auto___44616 = arguments.length;
var i__25866__auto___44617 = (0);
while(true){
if((i__25866__auto___44617 < len__25865__auto___44616)){
args44566.push((arguments[i__25866__auto___44617]));

var G__44618 = (i__25866__auto___44617 + (1));
i__25866__auto___44617 = G__44618;
continue;
} else {
}
break;
}

var G__44568 = args44566.length;
switch (G__44568) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44566.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28544__auto___44620 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28544__auto___44620){
return (function (){
var f__28545__auto__ = (function (){var switch__28523__auto__ = ((function (c__28544__auto___44620){
return (function (state_44592){
var state_val_44593 = (state_44592[(1)]);
if((state_val_44593 === (7))){
var inst_44588 = (state_44592[(2)]);
var state_44592__$1 = state_44592;
var statearr_44594_44621 = state_44592__$1;
(statearr_44594_44621[(2)] = inst_44588);

(statearr_44594_44621[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44593 === (1))){
var state_44592__$1 = state_44592;
var statearr_44595_44622 = state_44592__$1;
(statearr_44595_44622[(2)] = null);

(statearr_44595_44622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44593 === (4))){
var inst_44571 = (state_44592[(7)]);
var inst_44571__$1 = (state_44592[(2)]);
var inst_44572 = (inst_44571__$1 == null);
var state_44592__$1 = (function (){var statearr_44596 = state_44592;
(statearr_44596[(7)] = inst_44571__$1);

return statearr_44596;
})();
if(cljs.core.truth_(inst_44572)){
var statearr_44597_44623 = state_44592__$1;
(statearr_44597_44623[(1)] = (5));

} else {
var statearr_44598_44624 = state_44592__$1;
(statearr_44598_44624[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44593 === (13))){
var state_44592__$1 = state_44592;
var statearr_44599_44625 = state_44592__$1;
(statearr_44599_44625[(2)] = null);

(statearr_44599_44625[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44593 === (6))){
var inst_44571 = (state_44592[(7)]);
var state_44592__$1 = state_44592;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44592__$1,(11),to,inst_44571);
} else {
if((state_val_44593 === (3))){
var inst_44590 = (state_44592[(2)]);
var state_44592__$1 = state_44592;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44592__$1,inst_44590);
} else {
if((state_val_44593 === (12))){
var state_44592__$1 = state_44592;
var statearr_44600_44626 = state_44592__$1;
(statearr_44600_44626[(2)] = null);

(statearr_44600_44626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44593 === (2))){
var state_44592__$1 = state_44592;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44592__$1,(4),from);
} else {
if((state_val_44593 === (11))){
var inst_44581 = (state_44592[(2)]);
var state_44592__$1 = state_44592;
if(cljs.core.truth_(inst_44581)){
var statearr_44601_44627 = state_44592__$1;
(statearr_44601_44627[(1)] = (12));

} else {
var statearr_44602_44628 = state_44592__$1;
(statearr_44602_44628[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44593 === (9))){
var state_44592__$1 = state_44592;
var statearr_44603_44629 = state_44592__$1;
(statearr_44603_44629[(2)] = null);

(statearr_44603_44629[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44593 === (5))){
var state_44592__$1 = state_44592;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44604_44630 = state_44592__$1;
(statearr_44604_44630[(1)] = (8));

} else {
var statearr_44605_44631 = state_44592__$1;
(statearr_44605_44631[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44593 === (14))){
var inst_44586 = (state_44592[(2)]);
var state_44592__$1 = state_44592;
var statearr_44606_44632 = state_44592__$1;
(statearr_44606_44632[(2)] = inst_44586);

(statearr_44606_44632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44593 === (10))){
var inst_44578 = (state_44592[(2)]);
var state_44592__$1 = state_44592;
var statearr_44607_44633 = state_44592__$1;
(statearr_44607_44633[(2)] = inst_44578);

(statearr_44607_44633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44593 === (8))){
var inst_44575 = cljs.core.async.close_BANG_.call(null,to);
var state_44592__$1 = state_44592;
var statearr_44608_44634 = state_44592__$1;
(statearr_44608_44634[(2)] = inst_44575);

(statearr_44608_44634[(1)] = (10));


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
});})(c__28544__auto___44620))
;
return ((function (switch__28523__auto__,c__28544__auto___44620){
return (function() {
var cljs$core$async$state_machine__28524__auto__ = null;
var cljs$core$async$state_machine__28524__auto____0 = (function (){
var statearr_44612 = [null,null,null,null,null,null,null,null];
(statearr_44612[(0)] = cljs$core$async$state_machine__28524__auto__);

(statearr_44612[(1)] = (1));

return statearr_44612;
});
var cljs$core$async$state_machine__28524__auto____1 = (function (state_44592){
while(true){
var ret_value__28525__auto__ = (function (){try{while(true){
var result__28526__auto__ = switch__28523__auto__.call(null,state_44592);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28526__auto__;
}
break;
}
}catch (e44613){if((e44613 instanceof Object)){
var ex__28527__auto__ = e44613;
var statearr_44614_44635 = state_44592;
(statearr_44614_44635[(5)] = ex__28527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44592);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44613;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44636 = state_44592;
state_44592 = G__44636;
continue;
} else {
return ret_value__28525__auto__;
}
break;
}
});
cljs$core$async$state_machine__28524__auto__ = function(state_44592){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28524__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28524__auto____1.call(this,state_44592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28524__auto____0;
cljs$core$async$state_machine__28524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28524__auto____1;
return cljs$core$async$state_machine__28524__auto__;
})()
;})(switch__28523__auto__,c__28544__auto___44620))
})();
var state__28546__auto__ = (function (){var statearr_44615 = f__28545__auto__.call(null);
(statearr_44615[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28544__auto___44620);

return statearr_44615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28546__auto__);
});})(c__28544__auto___44620))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__44824){
var vec__44825 = p__44824;
var v = cljs.core.nth.call(null,vec__44825,(0),null);
var p = cljs.core.nth.call(null,vec__44825,(1),null);
var job = vec__44825;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28544__auto___45011 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28544__auto___45011,res,vec__44825,v,p,job,jobs,results){
return (function (){
var f__28545__auto__ = (function (){var switch__28523__auto__ = ((function (c__28544__auto___45011,res,vec__44825,v,p,job,jobs,results){
return (function (state_44832){
var state_val_44833 = (state_44832[(1)]);
if((state_val_44833 === (1))){
var state_44832__$1 = state_44832;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44832__$1,(2),res,v);
} else {
if((state_val_44833 === (2))){
var inst_44829 = (state_44832[(2)]);
var inst_44830 = cljs.core.async.close_BANG_.call(null,res);
var state_44832__$1 = (function (){var statearr_44834 = state_44832;
(statearr_44834[(7)] = inst_44829);

return statearr_44834;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44832__$1,inst_44830);
} else {
return null;
}
}
});})(c__28544__auto___45011,res,vec__44825,v,p,job,jobs,results))
;
return ((function (switch__28523__auto__,c__28544__auto___45011,res,vec__44825,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28524__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28524__auto____0 = (function (){
var statearr_44838 = [null,null,null,null,null,null,null,null];
(statearr_44838[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28524__auto__);

(statearr_44838[(1)] = (1));

return statearr_44838;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28524__auto____1 = (function (state_44832){
while(true){
var ret_value__28525__auto__ = (function (){try{while(true){
var result__28526__auto__ = switch__28523__auto__.call(null,state_44832);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28526__auto__;
}
break;
}
}catch (e44839){if((e44839 instanceof Object)){
var ex__28527__auto__ = e44839;
var statearr_44840_45012 = state_44832;
(statearr_44840_45012[(5)] = ex__28527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44832);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44839;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45013 = state_44832;
state_44832 = G__45013;
continue;
} else {
return ret_value__28525__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28524__auto__ = function(state_44832){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28524__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28524__auto____1.call(this,state_44832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28524__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28524__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28524__auto__;
})()
;})(switch__28523__auto__,c__28544__auto___45011,res,vec__44825,v,p,job,jobs,results))
})();
var state__28546__auto__ = (function (){var statearr_44841 = f__28545__auto__.call(null);
(statearr_44841[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28544__auto___45011);

return statearr_44841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28546__auto__);
});})(c__28544__auto___45011,res,vec__44825,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__44842){
var vec__44843 = p__44842;
var v = cljs.core.nth.call(null,vec__44843,(0),null);
var p = cljs.core.nth.call(null,vec__44843,(1),null);
var job = vec__44843;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__25705__auto___45014 = n;
var __45015 = (0);
while(true){
if((__45015 < n__25705__auto___45014)){
var G__44846_45016 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__44846_45016) {
case "compute":
var c__28544__auto___45018 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__45015,c__28544__auto___45018,G__44846_45016,n__25705__auto___45014,jobs,results,process,async){
return (function (){
var f__28545__auto__ = (function (){var switch__28523__auto__ = ((function (__45015,c__28544__auto___45018,G__44846_45016,n__25705__auto___45014,jobs,results,process,async){
return (function (state_44859){
var state_val_44860 = (state_44859[(1)]);
if((state_val_44860 === (1))){
var state_44859__$1 = state_44859;
var statearr_44861_45019 = state_44859__$1;
(statearr_44861_45019[(2)] = null);

(statearr_44861_45019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44860 === (2))){
var state_44859__$1 = state_44859;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44859__$1,(4),jobs);
} else {
if((state_val_44860 === (3))){
var inst_44857 = (state_44859[(2)]);
var state_44859__$1 = state_44859;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44859__$1,inst_44857);
} else {
if((state_val_44860 === (4))){
var inst_44849 = (state_44859[(2)]);
var inst_44850 = process.call(null,inst_44849);
var state_44859__$1 = state_44859;
if(cljs.core.truth_(inst_44850)){
var statearr_44862_45020 = state_44859__$1;
(statearr_44862_45020[(1)] = (5));

} else {
var statearr_44863_45021 = state_44859__$1;
(statearr_44863_45021[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44860 === (5))){
var state_44859__$1 = state_44859;
var statearr_44864_45022 = state_44859__$1;
(statearr_44864_45022[(2)] = null);

(statearr_44864_45022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44860 === (6))){
var state_44859__$1 = state_44859;
var statearr_44865_45023 = state_44859__$1;
(statearr_44865_45023[(2)] = null);

(statearr_44865_45023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44860 === (7))){
var inst_44855 = (state_44859[(2)]);
var state_44859__$1 = state_44859;
var statearr_44866_45024 = state_44859__$1;
(statearr_44866_45024[(2)] = inst_44855);

(statearr_44866_45024[(1)] = (3));


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
});})(__45015,c__28544__auto___45018,G__44846_45016,n__25705__auto___45014,jobs,results,process,async))
;
return ((function (__45015,switch__28523__auto__,c__28544__auto___45018,G__44846_45016,n__25705__auto___45014,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28524__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28524__auto____0 = (function (){
var statearr_44870 = [null,null,null,null,null,null,null];
(statearr_44870[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28524__auto__);

(statearr_44870[(1)] = (1));

return statearr_44870;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28524__auto____1 = (function (state_44859){
while(true){
var ret_value__28525__auto__ = (function (){try{while(true){
var result__28526__auto__ = switch__28523__auto__.call(null,state_44859);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28526__auto__;
}
break;
}
}catch (e44871){if((e44871 instanceof Object)){
var ex__28527__auto__ = e44871;
var statearr_44872_45025 = state_44859;
(statearr_44872_45025[(5)] = ex__28527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44871;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45026 = state_44859;
state_44859 = G__45026;
continue;
} else {
return ret_value__28525__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28524__auto__ = function(state_44859){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28524__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28524__auto____1.call(this,state_44859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28524__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28524__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28524__auto__;
})()
;})(__45015,switch__28523__auto__,c__28544__auto___45018,G__44846_45016,n__25705__auto___45014,jobs,results,process,async))
})();
var state__28546__auto__ = (function (){var statearr_44873 = f__28545__auto__.call(null);
(statearr_44873[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28544__auto___45018);

return statearr_44873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28546__auto__);
});})(__45015,c__28544__auto___45018,G__44846_45016,n__25705__auto___45014,jobs,results,process,async))
);


break;
case "async":
var c__28544__auto___45027 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__45015,c__28544__auto___45027,G__44846_45016,n__25705__auto___45014,jobs,results,process,async){
return (function (){
var f__28545__auto__ = (function (){var switch__28523__auto__ = ((function (__45015,c__28544__auto___45027,G__44846_45016,n__25705__auto___45014,jobs,results,process,async){
return (function (state_44886){
var state_val_44887 = (state_44886[(1)]);
if((state_val_44887 === (1))){
var state_44886__$1 = state_44886;
var statearr_44888_45028 = state_44886__$1;
(statearr_44888_45028[(2)] = null);

(statearr_44888_45028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44887 === (2))){
var state_44886__$1 = state_44886;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44886__$1,(4),jobs);
} else {
if((state_val_44887 === (3))){
var inst_44884 = (state_44886[(2)]);
var state_44886__$1 = state_44886;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44886__$1,inst_44884);
} else {
if((state_val_44887 === (4))){
var inst_44876 = (state_44886[(2)]);
var inst_44877 = async.call(null,inst_44876);
var state_44886__$1 = state_44886;
if(cljs.core.truth_(inst_44877)){
var statearr_44889_45029 = state_44886__$1;
(statearr_44889_45029[(1)] = (5));

} else {
var statearr_44890_45030 = state_44886__$1;
(statearr_44890_45030[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44887 === (5))){
var state_44886__$1 = state_44886;
var statearr_44891_45031 = state_44886__$1;
(statearr_44891_45031[(2)] = null);

(statearr_44891_45031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44887 === (6))){
var state_44886__$1 = state_44886;
var statearr_44892_45032 = state_44886__$1;
(statearr_44892_45032[(2)] = null);

(statearr_44892_45032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44887 === (7))){
var inst_44882 = (state_44886[(2)]);
var state_44886__$1 = state_44886;
var statearr_44893_45033 = state_44886__$1;
(statearr_44893_45033[(2)] = inst_44882);

(statearr_44893_45033[(1)] = (3));


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
});})(__45015,c__28544__auto___45027,G__44846_45016,n__25705__auto___45014,jobs,results,process,async))
;
return ((function (__45015,switch__28523__auto__,c__28544__auto___45027,G__44846_45016,n__25705__auto___45014,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28524__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28524__auto____0 = (function (){
var statearr_44897 = [null,null,null,null,null,null,null];
(statearr_44897[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28524__auto__);

(statearr_44897[(1)] = (1));

return statearr_44897;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28524__auto____1 = (function (state_44886){
while(true){
var ret_value__28525__auto__ = (function (){try{while(true){
var result__28526__auto__ = switch__28523__auto__.call(null,state_44886);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28526__auto__;
}
break;
}
}catch (e44898){if((e44898 instanceof Object)){
var ex__28527__auto__ = e44898;
var statearr_44899_45034 = state_44886;
(statearr_44899_45034[(5)] = ex__28527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44886);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44898;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45035 = state_44886;
state_44886 = G__45035;
continue;
} else {
return ret_value__28525__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28524__auto__ = function(state_44886){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28524__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28524__auto____1.call(this,state_44886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28524__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28524__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28524__auto__;
})()
;})(__45015,switch__28523__auto__,c__28544__auto___45027,G__44846_45016,n__25705__auto___45014,jobs,results,process,async))
})();
var state__28546__auto__ = (function (){var statearr_44900 = f__28545__auto__.call(null);
(statearr_44900[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28544__auto___45027);

return statearr_44900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28546__auto__);
});})(__45015,c__28544__auto___45027,G__44846_45016,n__25705__auto___45014,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__45036 = (__45015 + (1));
__45015 = G__45036;
continue;
} else {
}
break;
}

var c__28544__auto___45037 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28544__auto___45037,jobs,results,process,async){
return (function (){
var f__28545__auto__ = (function (){var switch__28523__auto__ = ((function (c__28544__auto___45037,jobs,results,process,async){
return (function (state_44922){
var state_val_44923 = (state_44922[(1)]);
if((state_val_44923 === (1))){
var state_44922__$1 = state_44922;
var statearr_44924_45038 = state_44922__$1;
(statearr_44924_45038[(2)] = null);

(statearr_44924_45038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44923 === (2))){
var state_44922__$1 = state_44922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44922__$1,(4),from);
} else {
if((state_val_44923 === (3))){
var inst_44920 = (state_44922[(2)]);
var state_44922__$1 = state_44922;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44922__$1,inst_44920);
} else {
if((state_val_44923 === (4))){
var inst_44903 = (state_44922[(7)]);
var inst_44903__$1 = (state_44922[(2)]);
var inst_44904 = (inst_44903__$1 == null);
var state_44922__$1 = (function (){var statearr_44925 = state_44922;
(statearr_44925[(7)] = inst_44903__$1);

return statearr_44925;
})();
if(cljs.core.truth_(inst_44904)){
var statearr_44926_45039 = state_44922__$1;
(statearr_44926_45039[(1)] = (5));

} else {
var statearr_44927_45040 = state_44922__$1;
(statearr_44927_45040[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44923 === (5))){
var inst_44906 = cljs.core.async.close_BANG_.call(null,jobs);
var state_44922__$1 = state_44922;
var statearr_44928_45041 = state_44922__$1;
(statearr_44928_45041[(2)] = inst_44906);

(statearr_44928_45041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44923 === (6))){
var inst_44908 = (state_44922[(8)]);
var inst_44903 = (state_44922[(7)]);
var inst_44908__$1 = cljs.core.async.chan.call(null,(1));
var inst_44909 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44910 = [inst_44903,inst_44908__$1];
var inst_44911 = (new cljs.core.PersistentVector(null,2,(5),inst_44909,inst_44910,null));
var state_44922__$1 = (function (){var statearr_44929 = state_44922;
(statearr_44929[(8)] = inst_44908__$1);

return statearr_44929;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44922__$1,(8),jobs,inst_44911);
} else {
if((state_val_44923 === (7))){
var inst_44918 = (state_44922[(2)]);
var state_44922__$1 = state_44922;
var statearr_44930_45042 = state_44922__$1;
(statearr_44930_45042[(2)] = inst_44918);

(statearr_44930_45042[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44923 === (8))){
var inst_44908 = (state_44922[(8)]);
var inst_44913 = (state_44922[(2)]);
var state_44922__$1 = (function (){var statearr_44931 = state_44922;
(statearr_44931[(9)] = inst_44913);

return statearr_44931;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44922__$1,(9),results,inst_44908);
} else {
if((state_val_44923 === (9))){
var inst_44915 = (state_44922[(2)]);
var state_44922__$1 = (function (){var statearr_44932 = state_44922;
(statearr_44932[(10)] = inst_44915);

return statearr_44932;
})();
var statearr_44933_45043 = state_44922__$1;
(statearr_44933_45043[(2)] = null);

(statearr_44933_45043[(1)] = (2));


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
});})(c__28544__auto___45037,jobs,results,process,async))
;
return ((function (switch__28523__auto__,c__28544__auto___45037,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28524__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28524__auto____0 = (function (){
var statearr_44937 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44937[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28524__auto__);

(statearr_44937[(1)] = (1));

return statearr_44937;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28524__auto____1 = (function (state_44922){
while(true){
var ret_value__28525__auto__ = (function (){try{while(true){
var result__28526__auto__ = switch__28523__auto__.call(null,state_44922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28526__auto__;
}
break;
}
}catch (e44938){if((e44938 instanceof Object)){
var ex__28527__auto__ = e44938;
var statearr_44939_45044 = state_44922;
(statearr_44939_45044[(5)] = ex__28527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44938;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45045 = state_44922;
state_44922 = G__45045;
continue;
} else {
return ret_value__28525__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28524__auto__ = function(state_44922){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28524__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28524__auto____1.call(this,state_44922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28524__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28524__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28524__auto__;
})()
;})(switch__28523__auto__,c__28544__auto___45037,jobs,results,process,async))
})();
var state__28546__auto__ = (function (){var statearr_44940 = f__28545__auto__.call(null);
(statearr_44940[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28544__auto___45037);

return statearr_44940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28546__auto__);
});})(c__28544__auto___45037,jobs,results,process,async))
);


var c__28544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28544__auto__,jobs,results,process,async){
return (function (){
var f__28545__auto__ = (function (){var switch__28523__auto__ = ((function (c__28544__auto__,jobs,results,process,async){
return (function (state_44978){
var state_val_44979 = (state_44978[(1)]);
if((state_val_44979 === (7))){
var inst_44974 = (state_44978[(2)]);
var state_44978__$1 = state_44978;
var statearr_44980_45046 = state_44978__$1;
(statearr_44980_45046[(2)] = inst_44974);

(statearr_44980_45046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44979 === (20))){
var state_44978__$1 = state_44978;
var statearr_44981_45047 = state_44978__$1;
(statearr_44981_45047[(2)] = null);

(statearr_44981_45047[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44979 === (1))){
var state_44978__$1 = state_44978;
var statearr_44982_45048 = state_44978__$1;
(statearr_44982_45048[(2)] = null);

(statearr_44982_45048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44979 === (4))){
var inst_44943 = (state_44978[(7)]);
var inst_44943__$1 = (state_44978[(2)]);
var inst_44944 = (inst_44943__$1 == null);
var state_44978__$1 = (function (){var statearr_44983 = state_44978;
(statearr_44983[(7)] = inst_44943__$1);

return statearr_44983;
})();
if(cljs.core.truth_(inst_44944)){
var statearr_44984_45049 = state_44978__$1;
(statearr_44984_45049[(1)] = (5));

} else {
var statearr_44985_45050 = state_44978__$1;
(statearr_44985_45050[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44979 === (15))){
var inst_44956 = (state_44978[(8)]);
var state_44978__$1 = state_44978;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44978__$1,(18),to,inst_44956);
} else {
if((state_val_44979 === (21))){
var inst_44969 = (state_44978[(2)]);
var state_44978__$1 = state_44978;
var statearr_44986_45051 = state_44978__$1;
(statearr_44986_45051[(2)] = inst_44969);

(statearr_44986_45051[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44979 === (13))){
var inst_44971 = (state_44978[(2)]);
var state_44978__$1 = (function (){var statearr_44987 = state_44978;
(statearr_44987[(9)] = inst_44971);

return statearr_44987;
})();
var statearr_44988_45052 = state_44978__$1;
(statearr_44988_45052[(2)] = null);

(statearr_44988_45052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44979 === (6))){
var inst_44943 = (state_44978[(7)]);
var state_44978__$1 = state_44978;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44978__$1,(11),inst_44943);
} else {
if((state_val_44979 === (17))){
var inst_44964 = (state_44978[(2)]);
var state_44978__$1 = state_44978;
if(cljs.core.truth_(inst_44964)){
var statearr_44989_45053 = state_44978__$1;
(statearr_44989_45053[(1)] = (19));

} else {
var statearr_44990_45054 = state_44978__$1;
(statearr_44990_45054[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44979 === (3))){
var inst_44976 = (state_44978[(2)]);
var state_44978__$1 = state_44978;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44978__$1,inst_44976);
} else {
if((state_val_44979 === (12))){
var inst_44953 = (state_44978[(10)]);
var state_44978__$1 = state_44978;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44978__$1,(14),inst_44953);
} else {
if((state_val_44979 === (2))){
var state_44978__$1 = state_44978;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44978__$1,(4),results);
} else {
if((state_val_44979 === (19))){
var state_44978__$1 = state_44978;
var statearr_44991_45055 = state_44978__$1;
(statearr_44991_45055[(2)] = null);

(statearr_44991_45055[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44979 === (11))){
var inst_44953 = (state_44978[(2)]);
var state_44978__$1 = (function (){var statearr_44992 = state_44978;
(statearr_44992[(10)] = inst_44953);

return statearr_44992;
})();
var statearr_44993_45056 = state_44978__$1;
(statearr_44993_45056[(2)] = null);

(statearr_44993_45056[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44979 === (9))){
var state_44978__$1 = state_44978;
var statearr_44994_45057 = state_44978__$1;
(statearr_44994_45057[(2)] = null);

(statearr_44994_45057[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44979 === (5))){
var state_44978__$1 = state_44978;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44995_45058 = state_44978__$1;
(statearr_44995_45058[(1)] = (8));

} else {
var statearr_44996_45059 = state_44978__$1;
(statearr_44996_45059[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44979 === (14))){
var inst_44956 = (state_44978[(8)]);
var inst_44958 = (state_44978[(11)]);
var inst_44956__$1 = (state_44978[(2)]);
var inst_44957 = (inst_44956__$1 == null);
var inst_44958__$1 = cljs.core.not.call(null,inst_44957);
var state_44978__$1 = (function (){var statearr_44997 = state_44978;
(statearr_44997[(8)] = inst_44956__$1);

(statearr_44997[(11)] = inst_44958__$1);

return statearr_44997;
})();
if(inst_44958__$1){
var statearr_44998_45060 = state_44978__$1;
(statearr_44998_45060[(1)] = (15));

} else {
var statearr_44999_45061 = state_44978__$1;
(statearr_44999_45061[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44979 === (16))){
var inst_44958 = (state_44978[(11)]);
var state_44978__$1 = state_44978;
var statearr_45000_45062 = state_44978__$1;
(statearr_45000_45062[(2)] = inst_44958);

(statearr_45000_45062[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44979 === (10))){
var inst_44950 = (state_44978[(2)]);
var state_44978__$1 = state_44978;
var statearr_45001_45063 = state_44978__$1;
(statearr_45001_45063[(2)] = inst_44950);

(statearr_45001_45063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44979 === (18))){
var inst_44961 = (state_44978[(2)]);
var state_44978__$1 = state_44978;
var statearr_45002_45064 = state_44978__$1;
(statearr_45002_45064[(2)] = inst_44961);

(statearr_45002_45064[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44979 === (8))){
var inst_44947 = cljs.core.async.close_BANG_.call(null,to);
var state_44978__$1 = state_44978;
var statearr_45003_45065 = state_44978__$1;
(statearr_45003_45065[(2)] = inst_44947);

(statearr_45003_45065[(1)] = (10));


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
});})(c__28544__auto__,jobs,results,process,async))
;
return ((function (switch__28523__auto__,c__28544__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28524__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28524__auto____0 = (function (){
var statearr_45007 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45007[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28524__auto__);

(statearr_45007[(1)] = (1));

return statearr_45007;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28524__auto____1 = (function (state_44978){
while(true){
var ret_value__28525__auto__ = (function (){try{while(true){
var result__28526__auto__ = switch__28523__auto__.call(null,state_44978);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28526__auto__;
}
break;
}
}catch (e45008){if((e45008 instanceof Object)){
var ex__28527__auto__ = e45008;
var statearr_45009_45066 = state_44978;
(statearr_45009_45066[(5)] = ex__28527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45008;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45067 = state_44978;
state_44978 = G__45067;
continue;
} else {
return ret_value__28525__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28524__auto__ = function(state_44978){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28524__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28524__auto____1.call(this,state_44978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28524__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28524__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28524__auto__;
})()
;})(switch__28523__auto__,c__28544__auto__,jobs,results,process,async))
})();
var state__28546__auto__ = (function (){var statearr_45010 = f__28545__auto__.call(null);
(statearr_45010[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28544__auto__);

return statearr_45010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28546__auto__);
});})(c__28544__auto__,jobs,results,process,async))
);

return c__28544__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args45068 = [];
var len__25865__auto___45071 = arguments.length;
var i__25866__auto___45072 = (0);
while(true){
if((i__25866__auto___45072 < len__25865__auto___45071)){
args45068.push((arguments[i__25866__auto___45072]));

var G__45073 = (i__25866__auto___45072 + (1));
i__25866__auto___45072 = G__45073;
continue;
} else {
}
break;
}

var G__45070 = args45068.length;
switch (G__45070) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45068.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args45075 = [];
var len__25865__auto___45078 = arguments.length;
var i__25866__auto___45079 = (0);
while(true){
if((i__25866__auto___45079 < len__25865__auto___45078)){
args45075.push((arguments[i__25866__auto___45079]));

var G__45080 = (i__25866__auto___45079 + (1));
i__25866__auto___45079 = G__45080;
continue;
} else {
}
break;
}

var G__45077 = args45075.length;
switch (G__45077) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45075.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args45082 = [];
var len__25865__auto___45135 = arguments.length;
var i__25866__auto___45136 = (0);
while(true){
if((i__25866__auto___45136 < len__25865__auto___45135)){
args45082.push((arguments[i__25866__auto___45136]));

var G__45137 = (i__25866__auto___45136 + (1));
i__25866__auto___45136 = G__45137;
continue;
} else {
}
break;
}

var G__45084 = args45082.length;
switch (G__45084) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45082.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28544__auto___45139 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28544__auto___45139,tc,fc){
return (function (){
var f__28545__auto__ = (function (){var switch__28523__auto__ = ((function (c__28544__auto___45139,tc,fc){
return (function (state_45110){
var state_val_45111 = (state_45110[(1)]);
if((state_val_45111 === (7))){
var inst_45106 = (state_45110[(2)]);
var state_45110__$1 = state_45110;
var statearr_45112_45140 = state_45110__$1;
(statearr_45112_45140[(2)] = inst_45106);

(statearr_45112_45140[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45111 === (1))){
var state_45110__$1 = state_45110;
var statearr_45113_45141 = state_45110__$1;
(statearr_45113_45141[(2)] = null);

(statearr_45113_45141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45111 === (4))){
var inst_45087 = (state_45110[(7)]);
var inst_45087__$1 = (state_45110[(2)]);
var inst_45088 = (inst_45087__$1 == null);
var state_45110__$1 = (function (){var statearr_45114 = state_45110;
(statearr_45114[(7)] = inst_45087__$1);

return statearr_45114;
})();
if(cljs.core.truth_(inst_45088)){
var statearr_45115_45142 = state_45110__$1;
(statearr_45115_45142[(1)] = (5));

} else {
var statearr_45116_45143 = state_45110__$1;
(statearr_45116_45143[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45111 === (13))){
var state_45110__$1 = state_45110;
var statearr_45117_45144 = state_45110__$1;
(statearr_45117_45144[(2)] = null);

(statearr_45117_45144[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45111 === (6))){
var inst_45087 = (state_45110[(7)]);
var inst_45093 = p.call(null,inst_45087);
var state_45110__$1 = state_45110;
if(cljs.core.truth_(inst_45093)){
var statearr_45118_45145 = state_45110__$1;
(statearr_45118_45145[(1)] = (9));

} else {
var statearr_45119_45146 = state_45110__$1;
(statearr_45119_45146[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45111 === (3))){
var inst_45108 = (state_45110[(2)]);
var state_45110__$1 = state_45110;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45110__$1,inst_45108);
} else {
if((state_val_45111 === (12))){
var state_45110__$1 = state_45110;
var statearr_45120_45147 = state_45110__$1;
(statearr_45120_45147[(2)] = null);

(statearr_45120_45147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45111 === (2))){
var state_45110__$1 = state_45110;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45110__$1,(4),ch);
} else {
if((state_val_45111 === (11))){
var inst_45087 = (state_45110[(7)]);
var inst_45097 = (state_45110[(2)]);
var state_45110__$1 = state_45110;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45110__$1,(8),inst_45097,inst_45087);
} else {
if((state_val_45111 === (9))){
var state_45110__$1 = state_45110;
var statearr_45121_45148 = state_45110__$1;
(statearr_45121_45148[(2)] = tc);

(statearr_45121_45148[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45111 === (5))){
var inst_45090 = cljs.core.async.close_BANG_.call(null,tc);
var inst_45091 = cljs.core.async.close_BANG_.call(null,fc);
var state_45110__$1 = (function (){var statearr_45122 = state_45110;
(statearr_45122[(8)] = inst_45090);

return statearr_45122;
})();
var statearr_45123_45149 = state_45110__$1;
(statearr_45123_45149[(2)] = inst_45091);

(statearr_45123_45149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45111 === (14))){
var inst_45104 = (state_45110[(2)]);
var state_45110__$1 = state_45110;
var statearr_45124_45150 = state_45110__$1;
(statearr_45124_45150[(2)] = inst_45104);

(statearr_45124_45150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45111 === (10))){
var state_45110__$1 = state_45110;
var statearr_45125_45151 = state_45110__$1;
(statearr_45125_45151[(2)] = fc);

(statearr_45125_45151[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45111 === (8))){
var inst_45099 = (state_45110[(2)]);
var state_45110__$1 = state_45110;
if(cljs.core.truth_(inst_45099)){
var statearr_45126_45152 = state_45110__$1;
(statearr_45126_45152[(1)] = (12));

} else {
var statearr_45127_45153 = state_45110__$1;
(statearr_45127_45153[(1)] = (13));

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
});})(c__28544__auto___45139,tc,fc))
;
return ((function (switch__28523__auto__,c__28544__auto___45139,tc,fc){
return (function() {
var cljs$core$async$state_machine__28524__auto__ = null;
var cljs$core$async$state_machine__28524__auto____0 = (function (){
var statearr_45131 = [null,null,null,null,null,null,null,null,null];
(statearr_45131[(0)] = cljs$core$async$state_machine__28524__auto__);

(statearr_45131[(1)] = (1));

return statearr_45131;
});
var cljs$core$async$state_machine__28524__auto____1 = (function (state_45110){
while(true){
var ret_value__28525__auto__ = (function (){try{while(true){
var result__28526__auto__ = switch__28523__auto__.call(null,state_45110);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28526__auto__;
}
break;
}
}catch (e45132){if((e45132 instanceof Object)){
var ex__28527__auto__ = e45132;
var statearr_45133_45154 = state_45110;
(statearr_45133_45154[(5)] = ex__28527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45110);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45132;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45155 = state_45110;
state_45110 = G__45155;
continue;
} else {
return ret_value__28525__auto__;
}
break;
}
});
cljs$core$async$state_machine__28524__auto__ = function(state_45110){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28524__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28524__auto____1.call(this,state_45110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28524__auto____0;
cljs$core$async$state_machine__28524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28524__auto____1;
return cljs$core$async$state_machine__28524__auto__;
})()
;})(switch__28523__auto__,c__28544__auto___45139,tc,fc))
})();
var state__28546__auto__ = (function (){var statearr_45134 = f__28545__auto__.call(null);
(statearr_45134[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28544__auto___45139);

return statearr_45134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28546__auto__);
});})(c__28544__auto___45139,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__28544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28544__auto__){
return (function (){
var f__28545__auto__ = (function (){var switch__28523__auto__ = ((function (c__28544__auto__){
return (function (state_45219){
var state_val_45220 = (state_45219[(1)]);
if((state_val_45220 === (7))){
var inst_45215 = (state_45219[(2)]);
var state_45219__$1 = state_45219;
var statearr_45221_45242 = state_45219__$1;
(statearr_45221_45242[(2)] = inst_45215);

(statearr_45221_45242[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45220 === (1))){
var inst_45199 = init;
var state_45219__$1 = (function (){var statearr_45222 = state_45219;
(statearr_45222[(7)] = inst_45199);

return statearr_45222;
})();
var statearr_45223_45243 = state_45219__$1;
(statearr_45223_45243[(2)] = null);

(statearr_45223_45243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45220 === (4))){
var inst_45202 = (state_45219[(8)]);
var inst_45202__$1 = (state_45219[(2)]);
var inst_45203 = (inst_45202__$1 == null);
var state_45219__$1 = (function (){var statearr_45224 = state_45219;
(statearr_45224[(8)] = inst_45202__$1);

return statearr_45224;
})();
if(cljs.core.truth_(inst_45203)){
var statearr_45225_45244 = state_45219__$1;
(statearr_45225_45244[(1)] = (5));

} else {
var statearr_45226_45245 = state_45219__$1;
(statearr_45226_45245[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45220 === (6))){
var inst_45199 = (state_45219[(7)]);
var inst_45206 = (state_45219[(9)]);
var inst_45202 = (state_45219[(8)]);
var inst_45206__$1 = f.call(null,inst_45199,inst_45202);
var inst_45207 = cljs.core.reduced_QMARK_.call(null,inst_45206__$1);
var state_45219__$1 = (function (){var statearr_45227 = state_45219;
(statearr_45227[(9)] = inst_45206__$1);

return statearr_45227;
})();
if(inst_45207){
var statearr_45228_45246 = state_45219__$1;
(statearr_45228_45246[(1)] = (8));

} else {
var statearr_45229_45247 = state_45219__$1;
(statearr_45229_45247[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45220 === (3))){
var inst_45217 = (state_45219[(2)]);
var state_45219__$1 = state_45219;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45219__$1,inst_45217);
} else {
if((state_val_45220 === (2))){
var state_45219__$1 = state_45219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45219__$1,(4),ch);
} else {
if((state_val_45220 === (9))){
var inst_45206 = (state_45219[(9)]);
var inst_45199 = inst_45206;
var state_45219__$1 = (function (){var statearr_45230 = state_45219;
(statearr_45230[(7)] = inst_45199);

return statearr_45230;
})();
var statearr_45231_45248 = state_45219__$1;
(statearr_45231_45248[(2)] = null);

(statearr_45231_45248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45220 === (5))){
var inst_45199 = (state_45219[(7)]);
var state_45219__$1 = state_45219;
var statearr_45232_45249 = state_45219__$1;
(statearr_45232_45249[(2)] = inst_45199);

(statearr_45232_45249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45220 === (10))){
var inst_45213 = (state_45219[(2)]);
var state_45219__$1 = state_45219;
var statearr_45233_45250 = state_45219__$1;
(statearr_45233_45250[(2)] = inst_45213);

(statearr_45233_45250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45220 === (8))){
var inst_45206 = (state_45219[(9)]);
var inst_45209 = cljs.core.deref.call(null,inst_45206);
var state_45219__$1 = state_45219;
var statearr_45234_45251 = state_45219__$1;
(statearr_45234_45251[(2)] = inst_45209);

(statearr_45234_45251[(1)] = (10));


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
});})(c__28544__auto__))
;
return ((function (switch__28523__auto__,c__28544__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28524__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28524__auto____0 = (function (){
var statearr_45238 = [null,null,null,null,null,null,null,null,null,null];
(statearr_45238[(0)] = cljs$core$async$reduce_$_state_machine__28524__auto__);

(statearr_45238[(1)] = (1));

return statearr_45238;
});
var cljs$core$async$reduce_$_state_machine__28524__auto____1 = (function (state_45219){
while(true){
var ret_value__28525__auto__ = (function (){try{while(true){
var result__28526__auto__ = switch__28523__auto__.call(null,state_45219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28526__auto__;
}
break;
}
}catch (e45239){if((e45239 instanceof Object)){
var ex__28527__auto__ = e45239;
var statearr_45240_45252 = state_45219;
(statearr_45240_45252[(5)] = ex__28527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45239;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45253 = state_45219;
state_45219 = G__45253;
continue;
} else {
return ret_value__28525__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28524__auto__ = function(state_45219){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28524__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28524__auto____1.call(this,state_45219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28524__auto____0;
cljs$core$async$reduce_$_state_machine__28524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28524__auto____1;
return cljs$core$async$reduce_$_state_machine__28524__auto__;
})()
;})(switch__28523__auto__,c__28544__auto__))
})();
var state__28546__auto__ = (function (){var statearr_45241 = f__28545__auto__.call(null);
(statearr_45241[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28544__auto__);

return statearr_45241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28546__auto__);
});})(c__28544__auto__))
);

return c__28544__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args45254 = [];
var len__25865__auto___45306 = arguments.length;
var i__25866__auto___45307 = (0);
while(true){
if((i__25866__auto___45307 < len__25865__auto___45306)){
args45254.push((arguments[i__25866__auto___45307]));

var G__45308 = (i__25866__auto___45307 + (1));
i__25866__auto___45307 = G__45308;
continue;
} else {
}
break;
}

var G__45256 = args45254.length;
switch (G__45256) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45254.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28544__auto__){
return (function (){
var f__28545__auto__ = (function (){var switch__28523__auto__ = ((function (c__28544__auto__){
return (function (state_45281){
var state_val_45282 = (state_45281[(1)]);
if((state_val_45282 === (7))){
var inst_45263 = (state_45281[(2)]);
var state_45281__$1 = state_45281;
var statearr_45283_45310 = state_45281__$1;
(statearr_45283_45310[(2)] = inst_45263);

(statearr_45283_45310[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45282 === (1))){
var inst_45257 = cljs.core.seq.call(null,coll);
var inst_45258 = inst_45257;
var state_45281__$1 = (function (){var statearr_45284 = state_45281;
(statearr_45284[(7)] = inst_45258);

return statearr_45284;
})();
var statearr_45285_45311 = state_45281__$1;
(statearr_45285_45311[(2)] = null);

(statearr_45285_45311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45282 === (4))){
var inst_45258 = (state_45281[(7)]);
var inst_45261 = cljs.core.first.call(null,inst_45258);
var state_45281__$1 = state_45281;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45281__$1,(7),ch,inst_45261);
} else {
if((state_val_45282 === (13))){
var inst_45275 = (state_45281[(2)]);
var state_45281__$1 = state_45281;
var statearr_45286_45312 = state_45281__$1;
(statearr_45286_45312[(2)] = inst_45275);

(statearr_45286_45312[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45282 === (6))){
var inst_45266 = (state_45281[(2)]);
var state_45281__$1 = state_45281;
if(cljs.core.truth_(inst_45266)){
var statearr_45287_45313 = state_45281__$1;
(statearr_45287_45313[(1)] = (8));

} else {
var statearr_45288_45314 = state_45281__$1;
(statearr_45288_45314[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45282 === (3))){
var inst_45279 = (state_45281[(2)]);
var state_45281__$1 = state_45281;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45281__$1,inst_45279);
} else {
if((state_val_45282 === (12))){
var state_45281__$1 = state_45281;
var statearr_45289_45315 = state_45281__$1;
(statearr_45289_45315[(2)] = null);

(statearr_45289_45315[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45282 === (2))){
var inst_45258 = (state_45281[(7)]);
var state_45281__$1 = state_45281;
if(cljs.core.truth_(inst_45258)){
var statearr_45290_45316 = state_45281__$1;
(statearr_45290_45316[(1)] = (4));

} else {
var statearr_45291_45317 = state_45281__$1;
(statearr_45291_45317[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45282 === (11))){
var inst_45272 = cljs.core.async.close_BANG_.call(null,ch);
var state_45281__$1 = state_45281;
var statearr_45292_45318 = state_45281__$1;
(statearr_45292_45318[(2)] = inst_45272);

(statearr_45292_45318[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45282 === (9))){
var state_45281__$1 = state_45281;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45293_45319 = state_45281__$1;
(statearr_45293_45319[(1)] = (11));

} else {
var statearr_45294_45320 = state_45281__$1;
(statearr_45294_45320[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45282 === (5))){
var inst_45258 = (state_45281[(7)]);
var state_45281__$1 = state_45281;
var statearr_45295_45321 = state_45281__$1;
(statearr_45295_45321[(2)] = inst_45258);

(statearr_45295_45321[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45282 === (10))){
var inst_45277 = (state_45281[(2)]);
var state_45281__$1 = state_45281;
var statearr_45296_45322 = state_45281__$1;
(statearr_45296_45322[(2)] = inst_45277);

(statearr_45296_45322[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45282 === (8))){
var inst_45258 = (state_45281[(7)]);
var inst_45268 = cljs.core.next.call(null,inst_45258);
var inst_45258__$1 = inst_45268;
var state_45281__$1 = (function (){var statearr_45297 = state_45281;
(statearr_45297[(7)] = inst_45258__$1);

return statearr_45297;
})();
var statearr_45298_45323 = state_45281__$1;
(statearr_45298_45323[(2)] = null);

(statearr_45298_45323[(1)] = (2));


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
});})(c__28544__auto__))
;
return ((function (switch__28523__auto__,c__28544__auto__){
return (function() {
var cljs$core$async$state_machine__28524__auto__ = null;
var cljs$core$async$state_machine__28524__auto____0 = (function (){
var statearr_45302 = [null,null,null,null,null,null,null,null];
(statearr_45302[(0)] = cljs$core$async$state_machine__28524__auto__);

(statearr_45302[(1)] = (1));

return statearr_45302;
});
var cljs$core$async$state_machine__28524__auto____1 = (function (state_45281){
while(true){
var ret_value__28525__auto__ = (function (){try{while(true){
var result__28526__auto__ = switch__28523__auto__.call(null,state_45281);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28526__auto__;
}
break;
}
}catch (e45303){if((e45303 instanceof Object)){
var ex__28527__auto__ = e45303;
var statearr_45304_45324 = state_45281;
(statearr_45304_45324[(5)] = ex__28527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45281);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45303;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45325 = state_45281;
state_45281 = G__45325;
continue;
} else {
return ret_value__28525__auto__;
}
break;
}
});
cljs$core$async$state_machine__28524__auto__ = function(state_45281){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28524__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28524__auto____1.call(this,state_45281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28524__auto____0;
cljs$core$async$state_machine__28524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28524__auto____1;
return cljs$core$async$state_machine__28524__auto__;
})()
;})(switch__28523__auto__,c__28544__auto__))
})();
var state__28546__auto__ = (function (){var statearr_45305 = f__28545__auto__.call(null);
(statearr_45305[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28544__auto__);

return statearr_45305;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28546__auto__);
});})(c__28544__auto__))
);

return c__28544__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25453__auto__ = (((_ == null))?null:_);
var m__25454__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,_);
} else {
var m__25454__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25453__auto__ = (((m == null))?null:m);
var m__25454__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25454__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25453__auto__ = (((m == null))?null:m);
var m__25454__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,m,ch);
} else {
var m__25454__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25453__auto__ = (((m == null))?null:m);
var m__25454__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,m);
} else {
var m__25454__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async45551 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45551 = (function (mult,ch,cs,meta45552){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta45552 = meta45552;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async45551.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_45553,meta45552__$1){
var self__ = this;
var _45553__$1 = this;
return (new cljs.core.async.t_cljs$core$async45551(self__.mult,self__.ch,self__.cs,meta45552__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async45551.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_45553){
var self__ = this;
var _45553__$1 = this;
return self__.meta45552;
});})(cs))
;

cljs.core.async.t_cljs$core$async45551.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async45551.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async45551.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async45551.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async45551.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async45551.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async45551.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta45552","meta45552",1301110495,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async45551.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45551.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45551";

cljs.core.async.t_cljs$core$async45551.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async45551");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async45551 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async45551(mult__$1,ch__$1,cs__$1,meta45552){
return (new cljs.core.async.t_cljs$core$async45551(mult__$1,ch__$1,cs__$1,meta45552));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async45551(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__28544__auto___45776 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28544__auto___45776,cs,m,dchan,dctr,done){
return (function (){
var f__28545__auto__ = (function (){var switch__28523__auto__ = ((function (c__28544__auto___45776,cs,m,dchan,dctr,done){
return (function (state_45688){
var state_val_45689 = (state_45688[(1)]);
if((state_val_45689 === (7))){
var inst_45684 = (state_45688[(2)]);
var state_45688__$1 = state_45688;
var statearr_45690_45777 = state_45688__$1;
(statearr_45690_45777[(2)] = inst_45684);

(statearr_45690_45777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45689 === (20))){
var inst_45587 = (state_45688[(7)]);
var inst_45599 = cljs.core.first.call(null,inst_45587);
var inst_45600 = cljs.core.nth.call(null,inst_45599,(0),null);
var inst_45601 = cljs.core.nth.call(null,inst_45599,(1),null);
var state_45688__$1 = (function (){var statearr_45691 = state_45688;
(statearr_45691[(8)] = inst_45600);

return statearr_45691;
})();
if(cljs.core.truth_(inst_45601)){
var statearr_45692_45778 = state_45688__$1;
(statearr_45692_45778[(1)] = (22));

} else {
var statearr_45693_45779 = state_45688__$1;
(statearr_45693_45779[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45689 === (27))){
var inst_45636 = (state_45688[(9)]);
var inst_45556 = (state_45688[(10)]);
var inst_45631 = (state_45688[(11)]);
var inst_45629 = (state_45688[(12)]);
var inst_45636__$1 = cljs.core._nth.call(null,inst_45629,inst_45631);
var inst_45637 = cljs.core.async.put_BANG_.call(null,inst_45636__$1,inst_45556,done);
var state_45688__$1 = (function (){var statearr_45694 = state_45688;
(statearr_45694[(9)] = inst_45636__$1);

return statearr_45694;
})();
if(cljs.core.truth_(inst_45637)){
var statearr_45695_45780 = state_45688__$1;
(statearr_45695_45780[(1)] = (30));

} else {
var statearr_45696_45781 = state_45688__$1;
(statearr_45696_45781[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45689 === (1))){
var state_45688__$1 = state_45688;
var statearr_45697_45782 = state_45688__$1;
(statearr_45697_45782[(2)] = null);

(statearr_45697_45782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45689 === (24))){
var inst_45587 = (state_45688[(7)]);
var inst_45606 = (state_45688[(2)]);
var inst_45607 = cljs.core.next.call(null,inst_45587);
var inst_45565 = inst_45607;
var inst_45566 = null;
var inst_45567 = (0);
var inst_45568 = (0);
var state_45688__$1 = (function (){var statearr_45698 = state_45688;
(statearr_45698[(13)] = inst_45566);

(statearr_45698[(14)] = inst_45567);

(statearr_45698[(15)] = inst_45565);

(statearr_45698[(16)] = inst_45568);

(statearr_45698[(17)] = inst_45606);

return statearr_45698;
})();
var statearr_45699_45783 = state_45688__$1;
(statearr_45699_45783[(2)] = null);

(statearr_45699_45783[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45689 === (39))){
var state_45688__$1 = state_45688;
var statearr_45703_45784 = state_45688__$1;
(statearr_45703_45784[(2)] = null);

(statearr_45703_45784[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45689 === (4))){
var inst_45556 = (state_45688[(10)]);
var inst_45556__$1 = (state_45688[(2)]);
var inst_45557 = (inst_45556__$1 == null);
var state_45688__$1 = (function (){var statearr_45704 = state_45688;
(statearr_45704[(10)] = inst_45556__$1);

return statearr_45704;
})();
if(cljs.core.truth_(inst_45557)){
var statearr_45705_45785 = state_45688__$1;
(statearr_45705_45785[(1)] = (5));

} else {
var statearr_45706_45786 = state_45688__$1;
(statearr_45706_45786[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45689 === (15))){
var inst_45566 = (state_45688[(13)]);
var inst_45567 = (state_45688[(14)]);
var inst_45565 = (state_45688[(15)]);
var inst_45568 = (state_45688[(16)]);
var inst_45583 = (state_45688[(2)]);
var inst_45584 = (inst_45568 + (1));
var tmp45700 = inst_45566;
var tmp45701 = inst_45567;
var tmp45702 = inst_45565;
var inst_45565__$1 = tmp45702;
var inst_45566__$1 = tmp45700;
var inst_45567__$1 = tmp45701;
var inst_45568__$1 = inst_45584;
var state_45688__$1 = (function (){var statearr_45707 = state_45688;
(statearr_45707[(13)] = inst_45566__$1);

(statearr_45707[(14)] = inst_45567__$1);

(statearr_45707[(15)] = inst_45565__$1);

(statearr_45707[(16)] = inst_45568__$1);

(statearr_45707[(18)] = inst_45583);

return statearr_45707;
})();
var statearr_45708_45787 = state_45688__$1;
(statearr_45708_45787[(2)] = null);

(statearr_45708_45787[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45689 === (21))){
var inst_45610 = (state_45688[(2)]);
var state_45688__$1 = state_45688;
var statearr_45712_45788 = state_45688__$1;
(statearr_45712_45788[(2)] = inst_45610);

(statearr_45712_45788[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45689 === (31))){
var inst_45636 = (state_45688[(9)]);
var inst_45640 = done.call(null,null);
var inst_45641 = cljs.core.async.untap_STAR_.call(null,m,inst_45636);
var state_45688__$1 = (function (){var statearr_45713 = state_45688;
(statearr_45713[(19)] = inst_45640);

return statearr_45713;
})();
var statearr_45714_45789 = state_45688__$1;
(statearr_45714_45789[(2)] = inst_45641);

(statearr_45714_45789[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45689 === (32))){
var inst_45630 = (state_45688[(20)]);
var inst_45631 = (state_45688[(11)]);
var inst_45628 = (state_45688[(21)]);
var inst_45629 = (state_45688[(12)]);
var inst_45643 = (state_45688[(2)]);
var inst_45644 = (inst_45631 + (1));
var tmp45709 = inst_45630;
var tmp45710 = inst_45628;
var tmp45711 = inst_45629;
var inst_45628__$1 = tmp45710;
var inst_45629__$1 = tmp45711;
var inst_45630__$1 = tmp45709;
var inst_45631__$1 = inst_45644;
var state_45688__$1 = (function (){var statearr_45715 = state_45688;
(statearr_45715[(20)] = inst_45630__$1);

(statearr_45715[(22)] = inst_45643);

(statearr_45715[(11)] = inst_45631__$1);

(statearr_45715[(21)] = inst_45628__$1);

(statearr_45715[(12)] = inst_45629__$1);

return statearr_45715;
})();
var statearr_45716_45790 = state_45688__$1;
(statearr_45716_45790[(2)] = null);

(statearr_45716_45790[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45689 === (40))){
var inst_45656 = (state_45688[(23)]);
var inst_45660 = done.call(null,null);
var inst_45661 = cljs.core.async.untap_STAR_.call(null,m,inst_45656);
var state_45688__$1 = (function (){var statearr_45717 = state_45688;
(statearr_45717[(24)] = inst_45660);

return statearr_45717;
})();
var statearr_45718_45791 = state_45688__$1;
(statearr_45718_45791[(2)] = inst_45661);

(statearr_45718_45791[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45689 === (33))){
var inst_45647 = (state_45688[(25)]);
var inst_45649 = cljs.core.chunked_seq_QMARK_.call(null,inst_45647);
var state_45688__$1 = state_45688;
if(inst_45649){
var statearr_45719_45792 = state_45688__$1;
(statearr_45719_45792[(1)] = (36));

} else {
var statearr_45720_45793 = state_45688__$1;
(statearr_45720_45793[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45689 === (13))){
var inst_45577 = (state_45688[(26)]);
var inst_45580 = cljs.core.async.close_BANG_.call(null,inst_45577);
var state_45688__$1 = state_45688;
var statearr_45721_45794 = state_45688__$1;
(statearr_45721_45794[(2)] = inst_45580);

(statearr_45721_45794[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45689 === (22))){
var inst_45600 = (state_45688[(8)]);
var inst_45603 = cljs.core.async.close_BANG_.call(null,inst_45600);
var state_45688__$1 = state_45688;
var statearr_45722_45795 = state_45688__$1;
(statearr_45722_45795[(2)] = inst_45603);

(statearr_45722_45795[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45689 === (36))){
var inst_45647 = (state_45688[(25)]);
var inst_45651 = cljs.core.chunk_first.call(null,inst_45647);
var inst_45652 = cljs.core.chunk_rest.call(null,inst_45647);
var inst_45653 = cljs.core.count.call(null,inst_45651);
var inst_45628 = inst_45652;
var inst_45629 = inst_45651;
var inst_45630 = inst_45653;
var inst_45631 = (0);
var state_45688__$1 = (function (){var statearr_45723 = state_45688;
(statearr_45723[(20)] = inst_45630);

(statearr_45723[(11)] = inst_45631);

(statearr_45723[(21)] = inst_45628);

(statearr_45723[(12)] = inst_45629);

return statearr_45723;
})();
var statearr_45724_45796 = state_45688__$1;
(statearr_45724_45796[(2)] = null);

(statearr_45724_45796[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45689 === (41))){
var inst_45647 = (state_45688[(25)]);
var inst_45663 = (state_45688[(2)]);
var inst_45664 = cljs.core.next.call(null,inst_45647);
var inst_45628 = inst_45664;
var inst_45629 = null;
var inst_45630 = (0);
var inst_45631 = (0);
var state_45688__$1 = (function (){var statearr_45725 = state_45688;
(statearr_45725[(20)] = inst_45630);

(statearr_45725[(27)] = inst_45663);

(statearr_45725[(11)] = inst_45631);

(statearr_45725[(21)] = inst_45628);

(statearr_45725[(12)] = inst_45629);

return statearr_45725;
})();
var statearr_45726_45797 = state_45688__$1;
(statearr_45726_45797[(2)] = null);

(statearr_45726_45797[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45689 === (43))){
var state_45688__$1 = state_45688;
var statearr_45727_45798 = state_45688__$1;
(statearr_45727_45798[(2)] = null);

(statearr_45727_45798[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45689 === (29))){
var inst_45672 = (state_45688[(2)]);
var state_45688__$1 = state_45688;
var statearr_45728_45799 = state_45688__$1;
(statearr_45728_45799[(2)] = inst_45672);

(statearr_45728_45799[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45689 === (44))){
var inst_45681 = (state_45688[(2)]);
var state_45688__$1 = (function (){var statearr_45729 = state_45688;
(statearr_45729[(28)] = inst_45681);

return statearr_45729;
})();
var statearr_45730_45800 = state_45688__$1;
(statearr_45730_45800[(2)] = null);

(statearr_45730_45800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45689 === (6))){
var inst_45620 = (state_45688[(29)]);
var inst_45619 = cljs.core.deref.call(null,cs);
var inst_45620__$1 = cljs.core.keys.call(null,inst_45619);
var inst_45621 = cljs.core.count.call(null,inst_45620__$1);
var inst_45622 = cljs.core.reset_BANG_.call(null,dctr,inst_45621);
var inst_45627 = cljs.core.seq.call(null,inst_45620__$1);
var inst_45628 = inst_45627;
var inst_45629 = null;
var inst_45630 = (0);
var inst_45631 = (0);
var state_45688__$1 = (function (){var statearr_45731 = state_45688;
(statearr_45731[(20)] = inst_45630);

(statearr_45731[(29)] = inst_45620__$1);

(statearr_45731[(30)] = inst_45622);

(statearr_45731[(11)] = inst_45631);

(statearr_45731[(21)] = inst_45628);

(statearr_45731[(12)] = inst_45629);

return statearr_45731;
})();
var statearr_45732_45801 = state_45688__$1;
(statearr_45732_45801[(2)] = null);

(statearr_45732_45801[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45689 === (28))){
var inst_45647 = (state_45688[(25)]);
var inst_45628 = (state_45688[(21)]);
var inst_45647__$1 = cljs.core.seq.call(null,inst_45628);
var state_45688__$1 = (function (){var statearr_45733 = state_45688;
(statearr_45733[(25)] = inst_45647__$1);

return statearr_45733;
})();
if(inst_45647__$1){
var statearr_45734_45802 = state_45688__$1;
(statearr_45734_45802[(1)] = (33));

} else {
var statearr_45735_45803 = state_45688__$1;
(statearr_45735_45803[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45689 === (25))){
var inst_45630 = (state_45688[(20)]);
var inst_45631 = (state_45688[(11)]);
var inst_45633 = (inst_45631 < inst_45630);
var inst_45634 = inst_45633;
var state_45688__$1 = state_45688;
if(cljs.core.truth_(inst_45634)){
var statearr_45736_45804 = state_45688__$1;
(statearr_45736_45804[(1)] = (27));

} else {
var statearr_45737_45805 = state_45688__$1;
(statearr_45737_45805[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45689 === (34))){
var state_45688__$1 = state_45688;
var statearr_45738_45806 = state_45688__$1;
(statearr_45738_45806[(2)] = null);

(statearr_45738_45806[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45689 === (17))){
var state_45688__$1 = state_45688;
var statearr_45739_45807 = state_45688__$1;
(statearr_45739_45807[(2)] = null);

(statearr_45739_45807[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45689 === (3))){
var inst_45686 = (state_45688[(2)]);
var state_45688__$1 = state_45688;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45688__$1,inst_45686);
} else {
if((state_val_45689 === (12))){
var inst_45615 = (state_45688[(2)]);
var state_45688__$1 = state_45688;
var statearr_45740_45808 = state_45688__$1;
(statearr_45740_45808[(2)] = inst_45615);

(statearr_45740_45808[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45689 === (2))){
var state_45688__$1 = state_45688;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45688__$1,(4),ch);
} else {
if((state_val_45689 === (23))){
var state_45688__$1 = state_45688;
var statearr_45741_45809 = state_45688__$1;
(statearr_45741_45809[(2)] = null);

(statearr_45741_45809[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45689 === (35))){
var inst_45670 = (state_45688[(2)]);
var state_45688__$1 = state_45688;
var statearr_45742_45810 = state_45688__$1;
(statearr_45742_45810[(2)] = inst_45670);

(statearr_45742_45810[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45689 === (19))){
var inst_45587 = (state_45688[(7)]);
var inst_45591 = cljs.core.chunk_first.call(null,inst_45587);
var inst_45592 = cljs.core.chunk_rest.call(null,inst_45587);
var inst_45593 = cljs.core.count.call(null,inst_45591);
var inst_45565 = inst_45592;
var inst_45566 = inst_45591;
var inst_45567 = inst_45593;
var inst_45568 = (0);
var state_45688__$1 = (function (){var statearr_45743 = state_45688;
(statearr_45743[(13)] = inst_45566);

(statearr_45743[(14)] = inst_45567);

(statearr_45743[(15)] = inst_45565);

(statearr_45743[(16)] = inst_45568);

return statearr_45743;
})();
var statearr_45744_45811 = state_45688__$1;
(statearr_45744_45811[(2)] = null);

(statearr_45744_45811[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45689 === (11))){
var inst_45565 = (state_45688[(15)]);
var inst_45587 = (state_45688[(7)]);
var inst_45587__$1 = cljs.core.seq.call(null,inst_45565);
var state_45688__$1 = (function (){var statearr_45745 = state_45688;
(statearr_45745[(7)] = inst_45587__$1);

return statearr_45745;
})();
if(inst_45587__$1){
var statearr_45746_45812 = state_45688__$1;
(statearr_45746_45812[(1)] = (16));

} else {
var statearr_45747_45813 = state_45688__$1;
(statearr_45747_45813[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45689 === (9))){
var inst_45617 = (state_45688[(2)]);
var state_45688__$1 = state_45688;
var statearr_45748_45814 = state_45688__$1;
(statearr_45748_45814[(2)] = inst_45617);

(statearr_45748_45814[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45689 === (5))){
var inst_45563 = cljs.core.deref.call(null,cs);
var inst_45564 = cljs.core.seq.call(null,inst_45563);
var inst_45565 = inst_45564;
var inst_45566 = null;
var inst_45567 = (0);
var inst_45568 = (0);
var state_45688__$1 = (function (){var statearr_45749 = state_45688;
(statearr_45749[(13)] = inst_45566);

(statearr_45749[(14)] = inst_45567);

(statearr_45749[(15)] = inst_45565);

(statearr_45749[(16)] = inst_45568);

return statearr_45749;
})();
var statearr_45750_45815 = state_45688__$1;
(statearr_45750_45815[(2)] = null);

(statearr_45750_45815[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45689 === (14))){
var state_45688__$1 = state_45688;
var statearr_45751_45816 = state_45688__$1;
(statearr_45751_45816[(2)] = null);

(statearr_45751_45816[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45689 === (45))){
var inst_45678 = (state_45688[(2)]);
var state_45688__$1 = state_45688;
var statearr_45752_45817 = state_45688__$1;
(statearr_45752_45817[(2)] = inst_45678);

(statearr_45752_45817[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45689 === (26))){
var inst_45620 = (state_45688[(29)]);
var inst_45674 = (state_45688[(2)]);
var inst_45675 = cljs.core.seq.call(null,inst_45620);
var state_45688__$1 = (function (){var statearr_45753 = state_45688;
(statearr_45753[(31)] = inst_45674);

return statearr_45753;
})();
if(inst_45675){
var statearr_45754_45818 = state_45688__$1;
(statearr_45754_45818[(1)] = (42));

} else {
var statearr_45755_45819 = state_45688__$1;
(statearr_45755_45819[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45689 === (16))){
var inst_45587 = (state_45688[(7)]);
var inst_45589 = cljs.core.chunked_seq_QMARK_.call(null,inst_45587);
var state_45688__$1 = state_45688;
if(inst_45589){
var statearr_45756_45820 = state_45688__$1;
(statearr_45756_45820[(1)] = (19));

} else {
var statearr_45757_45821 = state_45688__$1;
(statearr_45757_45821[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45689 === (38))){
var inst_45667 = (state_45688[(2)]);
var state_45688__$1 = state_45688;
var statearr_45758_45822 = state_45688__$1;
(statearr_45758_45822[(2)] = inst_45667);

(statearr_45758_45822[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45689 === (30))){
var state_45688__$1 = state_45688;
var statearr_45759_45823 = state_45688__$1;
(statearr_45759_45823[(2)] = null);

(statearr_45759_45823[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45689 === (10))){
var inst_45566 = (state_45688[(13)]);
var inst_45568 = (state_45688[(16)]);
var inst_45576 = cljs.core._nth.call(null,inst_45566,inst_45568);
var inst_45577 = cljs.core.nth.call(null,inst_45576,(0),null);
var inst_45578 = cljs.core.nth.call(null,inst_45576,(1),null);
var state_45688__$1 = (function (){var statearr_45760 = state_45688;
(statearr_45760[(26)] = inst_45577);

return statearr_45760;
})();
if(cljs.core.truth_(inst_45578)){
var statearr_45761_45824 = state_45688__$1;
(statearr_45761_45824[(1)] = (13));

} else {
var statearr_45762_45825 = state_45688__$1;
(statearr_45762_45825[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45689 === (18))){
var inst_45613 = (state_45688[(2)]);
var state_45688__$1 = state_45688;
var statearr_45763_45826 = state_45688__$1;
(statearr_45763_45826[(2)] = inst_45613);

(statearr_45763_45826[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45689 === (42))){
var state_45688__$1 = state_45688;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45688__$1,(45),dchan);
} else {
if((state_val_45689 === (37))){
var inst_45647 = (state_45688[(25)]);
var inst_45656 = (state_45688[(23)]);
var inst_45556 = (state_45688[(10)]);
var inst_45656__$1 = cljs.core.first.call(null,inst_45647);
var inst_45657 = cljs.core.async.put_BANG_.call(null,inst_45656__$1,inst_45556,done);
var state_45688__$1 = (function (){var statearr_45764 = state_45688;
(statearr_45764[(23)] = inst_45656__$1);

return statearr_45764;
})();
if(cljs.core.truth_(inst_45657)){
var statearr_45765_45827 = state_45688__$1;
(statearr_45765_45827[(1)] = (39));

} else {
var statearr_45766_45828 = state_45688__$1;
(statearr_45766_45828[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45689 === (8))){
var inst_45567 = (state_45688[(14)]);
var inst_45568 = (state_45688[(16)]);
var inst_45570 = (inst_45568 < inst_45567);
var inst_45571 = inst_45570;
var state_45688__$1 = state_45688;
if(cljs.core.truth_(inst_45571)){
var statearr_45767_45829 = state_45688__$1;
(statearr_45767_45829[(1)] = (10));

} else {
var statearr_45768_45830 = state_45688__$1;
(statearr_45768_45830[(1)] = (11));

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
});})(c__28544__auto___45776,cs,m,dchan,dctr,done))
;
return ((function (switch__28523__auto__,c__28544__auto___45776,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28524__auto__ = null;
var cljs$core$async$mult_$_state_machine__28524__auto____0 = (function (){
var statearr_45772 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45772[(0)] = cljs$core$async$mult_$_state_machine__28524__auto__);

(statearr_45772[(1)] = (1));

return statearr_45772;
});
var cljs$core$async$mult_$_state_machine__28524__auto____1 = (function (state_45688){
while(true){
var ret_value__28525__auto__ = (function (){try{while(true){
var result__28526__auto__ = switch__28523__auto__.call(null,state_45688);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28526__auto__;
}
break;
}
}catch (e45773){if((e45773 instanceof Object)){
var ex__28527__auto__ = e45773;
var statearr_45774_45831 = state_45688;
(statearr_45774_45831[(5)] = ex__28527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45688);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45773;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45832 = state_45688;
state_45688 = G__45832;
continue;
} else {
return ret_value__28525__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28524__auto__ = function(state_45688){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28524__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28524__auto____1.call(this,state_45688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28524__auto____0;
cljs$core$async$mult_$_state_machine__28524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28524__auto____1;
return cljs$core$async$mult_$_state_machine__28524__auto__;
})()
;})(switch__28523__auto__,c__28544__auto___45776,cs,m,dchan,dctr,done))
})();
var state__28546__auto__ = (function (){var statearr_45775 = f__28545__auto__.call(null);
(statearr_45775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28544__auto___45776);

return statearr_45775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28546__auto__);
});})(c__28544__auto___45776,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args45833 = [];
var len__25865__auto___45836 = arguments.length;
var i__25866__auto___45837 = (0);
while(true){
if((i__25866__auto___45837 < len__25865__auto___45836)){
args45833.push((arguments[i__25866__auto___45837]));

var G__45838 = (i__25866__auto___45837 + (1));
i__25866__auto___45837 = G__45838;
continue;
} else {
}
break;
}

var G__45835 = args45833.length;
switch (G__45835) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45833.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25453__auto__ = (((m == null))?null:m);
var m__25454__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,m,ch);
} else {
var m__25454__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25453__auto__ = (((m == null))?null:m);
var m__25454__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,m,ch);
} else {
var m__25454__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25453__auto__ = (((m == null))?null:m);
var m__25454__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,m);
} else {
var m__25454__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25453__auto__ = (((m == null))?null:m);
var m__25454__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,m,state_map);
} else {
var m__25454__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25453__auto__ = (((m == null))?null:m);
var m__25454__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,m,mode);
} else {
var m__25454__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__25872__auto__ = [];
var len__25865__auto___45850 = arguments.length;
var i__25866__auto___45851 = (0);
while(true){
if((i__25866__auto___45851 < len__25865__auto___45850)){
args__25872__auto__.push((arguments[i__25866__auto___45851]));

var G__45852 = (i__25866__auto___45851 + (1));
i__25866__auto___45851 = G__45852;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((3) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25873__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__45844){
var map__45845 = p__45844;
var map__45845__$1 = ((((!((map__45845 == null)))?((((map__45845.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45845.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45845):map__45845);
var opts = map__45845__$1;
var statearr_45847_45853 = state;
(statearr_45847_45853[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__45845,map__45845__$1,opts){
return (function (val){
var statearr_45848_45854 = state;
(statearr_45848_45854[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__45845,map__45845__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_45849_45855 = state;
(statearr_45849_45855[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq45840){
var G__45841 = cljs.core.first.call(null,seq45840);
var seq45840__$1 = cljs.core.next.call(null,seq45840);
var G__45842 = cljs.core.first.call(null,seq45840__$1);
var seq45840__$2 = cljs.core.next.call(null,seq45840__$1);
var G__45843 = cljs.core.first.call(null,seq45840__$2);
var seq45840__$3 = cljs.core.next.call(null,seq45840__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__45841,G__45842,G__45843,seq45840__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async46021 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46021 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta46022){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta46022 = meta46022;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46021.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_46023,meta46022__$1){
var self__ = this;
var _46023__$1 = this;
return (new cljs.core.async.t_cljs$core$async46021(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta46022__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46021.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_46023){
var self__ = this;
var _46023__$1 = this;
return self__.meta46022;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46021.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async46021.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46021.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async46021.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46021.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46021.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46021.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46021.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46021.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta46022","meta46022",-1192417112,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46021.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46021.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46021";

cljs.core.async.t_cljs$core$async46021.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async46021");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async46021 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async46021(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46022){
return (new cljs.core.async.t_cljs$core$async46021(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46022));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async46021(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28544__auto___46186 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28544__auto___46186,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28545__auto__ = (function (){var switch__28523__auto__ = ((function (c__28544__auto___46186,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_46123){
var state_val_46124 = (state_46123[(1)]);
if((state_val_46124 === (7))){
var inst_46039 = (state_46123[(2)]);
var state_46123__$1 = state_46123;
var statearr_46125_46187 = state_46123__$1;
(statearr_46125_46187[(2)] = inst_46039);

(statearr_46125_46187[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46124 === (20))){
var inst_46051 = (state_46123[(7)]);
var state_46123__$1 = state_46123;
var statearr_46126_46188 = state_46123__$1;
(statearr_46126_46188[(2)] = inst_46051);

(statearr_46126_46188[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46124 === (27))){
var state_46123__$1 = state_46123;
var statearr_46127_46189 = state_46123__$1;
(statearr_46127_46189[(2)] = null);

(statearr_46127_46189[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46124 === (1))){
var inst_46027 = (state_46123[(8)]);
var inst_46027__$1 = calc_state.call(null);
var inst_46029 = (inst_46027__$1 == null);
var inst_46030 = cljs.core.not.call(null,inst_46029);
var state_46123__$1 = (function (){var statearr_46128 = state_46123;
(statearr_46128[(8)] = inst_46027__$1);

return statearr_46128;
})();
if(inst_46030){
var statearr_46129_46190 = state_46123__$1;
(statearr_46129_46190[(1)] = (2));

} else {
var statearr_46130_46191 = state_46123__$1;
(statearr_46130_46191[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46124 === (24))){
var inst_46097 = (state_46123[(9)]);
var inst_46083 = (state_46123[(10)]);
var inst_46074 = (state_46123[(11)]);
var inst_46097__$1 = inst_46074.call(null,inst_46083);
var state_46123__$1 = (function (){var statearr_46131 = state_46123;
(statearr_46131[(9)] = inst_46097__$1);

return statearr_46131;
})();
if(cljs.core.truth_(inst_46097__$1)){
var statearr_46132_46192 = state_46123__$1;
(statearr_46132_46192[(1)] = (29));

} else {
var statearr_46133_46193 = state_46123__$1;
(statearr_46133_46193[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46124 === (4))){
var inst_46042 = (state_46123[(2)]);
var state_46123__$1 = state_46123;
if(cljs.core.truth_(inst_46042)){
var statearr_46134_46194 = state_46123__$1;
(statearr_46134_46194[(1)] = (8));

} else {
var statearr_46135_46195 = state_46123__$1;
(statearr_46135_46195[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46124 === (15))){
var inst_46068 = (state_46123[(2)]);
var state_46123__$1 = state_46123;
if(cljs.core.truth_(inst_46068)){
var statearr_46136_46196 = state_46123__$1;
(statearr_46136_46196[(1)] = (19));

} else {
var statearr_46137_46197 = state_46123__$1;
(statearr_46137_46197[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46124 === (21))){
var inst_46073 = (state_46123[(12)]);
var inst_46073__$1 = (state_46123[(2)]);
var inst_46074 = cljs.core.get.call(null,inst_46073__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46075 = cljs.core.get.call(null,inst_46073__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46076 = cljs.core.get.call(null,inst_46073__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_46123__$1 = (function (){var statearr_46138 = state_46123;
(statearr_46138[(13)] = inst_46075);

(statearr_46138[(11)] = inst_46074);

(statearr_46138[(12)] = inst_46073__$1);

return statearr_46138;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_46123__$1,(22),inst_46076);
} else {
if((state_val_46124 === (31))){
var inst_46105 = (state_46123[(2)]);
var state_46123__$1 = state_46123;
if(cljs.core.truth_(inst_46105)){
var statearr_46139_46198 = state_46123__$1;
(statearr_46139_46198[(1)] = (32));

} else {
var statearr_46140_46199 = state_46123__$1;
(statearr_46140_46199[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46124 === (32))){
var inst_46082 = (state_46123[(14)]);
var state_46123__$1 = state_46123;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46123__$1,(35),out,inst_46082);
} else {
if((state_val_46124 === (33))){
var inst_46073 = (state_46123[(12)]);
var inst_46051 = inst_46073;
var state_46123__$1 = (function (){var statearr_46141 = state_46123;
(statearr_46141[(7)] = inst_46051);

return statearr_46141;
})();
var statearr_46142_46200 = state_46123__$1;
(statearr_46142_46200[(2)] = null);

(statearr_46142_46200[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46124 === (13))){
var inst_46051 = (state_46123[(7)]);
var inst_46058 = inst_46051.cljs$lang$protocol_mask$partition0$;
var inst_46059 = (inst_46058 & (64));
var inst_46060 = inst_46051.cljs$core$ISeq$;
var inst_46061 = (inst_46059) || (inst_46060);
var state_46123__$1 = state_46123;
if(cljs.core.truth_(inst_46061)){
var statearr_46143_46201 = state_46123__$1;
(statearr_46143_46201[(1)] = (16));

} else {
var statearr_46144_46202 = state_46123__$1;
(statearr_46144_46202[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46124 === (22))){
var inst_46082 = (state_46123[(14)]);
var inst_46083 = (state_46123[(10)]);
var inst_46081 = (state_46123[(2)]);
var inst_46082__$1 = cljs.core.nth.call(null,inst_46081,(0),null);
var inst_46083__$1 = cljs.core.nth.call(null,inst_46081,(1),null);
var inst_46084 = (inst_46082__$1 == null);
var inst_46085 = cljs.core._EQ_.call(null,inst_46083__$1,change);
var inst_46086 = (inst_46084) || (inst_46085);
var state_46123__$1 = (function (){var statearr_46145 = state_46123;
(statearr_46145[(14)] = inst_46082__$1);

(statearr_46145[(10)] = inst_46083__$1);

return statearr_46145;
})();
if(cljs.core.truth_(inst_46086)){
var statearr_46146_46203 = state_46123__$1;
(statearr_46146_46203[(1)] = (23));

} else {
var statearr_46147_46204 = state_46123__$1;
(statearr_46147_46204[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46124 === (36))){
var inst_46073 = (state_46123[(12)]);
var inst_46051 = inst_46073;
var state_46123__$1 = (function (){var statearr_46148 = state_46123;
(statearr_46148[(7)] = inst_46051);

return statearr_46148;
})();
var statearr_46149_46205 = state_46123__$1;
(statearr_46149_46205[(2)] = null);

(statearr_46149_46205[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46124 === (29))){
var inst_46097 = (state_46123[(9)]);
var state_46123__$1 = state_46123;
var statearr_46150_46206 = state_46123__$1;
(statearr_46150_46206[(2)] = inst_46097);

(statearr_46150_46206[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46124 === (6))){
var state_46123__$1 = state_46123;
var statearr_46151_46207 = state_46123__$1;
(statearr_46151_46207[(2)] = false);

(statearr_46151_46207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46124 === (28))){
var inst_46093 = (state_46123[(2)]);
var inst_46094 = calc_state.call(null);
var inst_46051 = inst_46094;
var state_46123__$1 = (function (){var statearr_46152 = state_46123;
(statearr_46152[(7)] = inst_46051);

(statearr_46152[(15)] = inst_46093);

return statearr_46152;
})();
var statearr_46153_46208 = state_46123__$1;
(statearr_46153_46208[(2)] = null);

(statearr_46153_46208[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46124 === (25))){
var inst_46119 = (state_46123[(2)]);
var state_46123__$1 = state_46123;
var statearr_46154_46209 = state_46123__$1;
(statearr_46154_46209[(2)] = inst_46119);

(statearr_46154_46209[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46124 === (34))){
var inst_46117 = (state_46123[(2)]);
var state_46123__$1 = state_46123;
var statearr_46155_46210 = state_46123__$1;
(statearr_46155_46210[(2)] = inst_46117);

(statearr_46155_46210[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46124 === (17))){
var state_46123__$1 = state_46123;
var statearr_46156_46211 = state_46123__$1;
(statearr_46156_46211[(2)] = false);

(statearr_46156_46211[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46124 === (3))){
var state_46123__$1 = state_46123;
var statearr_46157_46212 = state_46123__$1;
(statearr_46157_46212[(2)] = false);

(statearr_46157_46212[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46124 === (12))){
var inst_46121 = (state_46123[(2)]);
var state_46123__$1 = state_46123;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46123__$1,inst_46121);
} else {
if((state_val_46124 === (2))){
var inst_46027 = (state_46123[(8)]);
var inst_46032 = inst_46027.cljs$lang$protocol_mask$partition0$;
var inst_46033 = (inst_46032 & (64));
var inst_46034 = inst_46027.cljs$core$ISeq$;
var inst_46035 = (inst_46033) || (inst_46034);
var state_46123__$1 = state_46123;
if(cljs.core.truth_(inst_46035)){
var statearr_46158_46213 = state_46123__$1;
(statearr_46158_46213[(1)] = (5));

} else {
var statearr_46159_46214 = state_46123__$1;
(statearr_46159_46214[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46124 === (23))){
var inst_46082 = (state_46123[(14)]);
var inst_46088 = (inst_46082 == null);
var state_46123__$1 = state_46123;
if(cljs.core.truth_(inst_46088)){
var statearr_46160_46215 = state_46123__$1;
(statearr_46160_46215[(1)] = (26));

} else {
var statearr_46161_46216 = state_46123__$1;
(statearr_46161_46216[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46124 === (35))){
var inst_46108 = (state_46123[(2)]);
var state_46123__$1 = state_46123;
if(cljs.core.truth_(inst_46108)){
var statearr_46162_46217 = state_46123__$1;
(statearr_46162_46217[(1)] = (36));

} else {
var statearr_46163_46218 = state_46123__$1;
(statearr_46163_46218[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46124 === (19))){
var inst_46051 = (state_46123[(7)]);
var inst_46070 = cljs.core.apply.call(null,cljs.core.hash_map,inst_46051);
var state_46123__$1 = state_46123;
var statearr_46164_46219 = state_46123__$1;
(statearr_46164_46219[(2)] = inst_46070);

(statearr_46164_46219[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46124 === (11))){
var inst_46051 = (state_46123[(7)]);
var inst_46055 = (inst_46051 == null);
var inst_46056 = cljs.core.not.call(null,inst_46055);
var state_46123__$1 = state_46123;
if(inst_46056){
var statearr_46165_46220 = state_46123__$1;
(statearr_46165_46220[(1)] = (13));

} else {
var statearr_46166_46221 = state_46123__$1;
(statearr_46166_46221[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46124 === (9))){
var inst_46027 = (state_46123[(8)]);
var state_46123__$1 = state_46123;
var statearr_46167_46222 = state_46123__$1;
(statearr_46167_46222[(2)] = inst_46027);

(statearr_46167_46222[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46124 === (5))){
var state_46123__$1 = state_46123;
var statearr_46168_46223 = state_46123__$1;
(statearr_46168_46223[(2)] = true);

(statearr_46168_46223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46124 === (14))){
var state_46123__$1 = state_46123;
var statearr_46169_46224 = state_46123__$1;
(statearr_46169_46224[(2)] = false);

(statearr_46169_46224[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46124 === (26))){
var inst_46083 = (state_46123[(10)]);
var inst_46090 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_46083);
var state_46123__$1 = state_46123;
var statearr_46170_46225 = state_46123__$1;
(statearr_46170_46225[(2)] = inst_46090);

(statearr_46170_46225[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46124 === (16))){
var state_46123__$1 = state_46123;
var statearr_46171_46226 = state_46123__$1;
(statearr_46171_46226[(2)] = true);

(statearr_46171_46226[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46124 === (38))){
var inst_46113 = (state_46123[(2)]);
var state_46123__$1 = state_46123;
var statearr_46172_46227 = state_46123__$1;
(statearr_46172_46227[(2)] = inst_46113);

(statearr_46172_46227[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46124 === (30))){
var inst_46075 = (state_46123[(13)]);
var inst_46083 = (state_46123[(10)]);
var inst_46074 = (state_46123[(11)]);
var inst_46100 = cljs.core.empty_QMARK_.call(null,inst_46074);
var inst_46101 = inst_46075.call(null,inst_46083);
var inst_46102 = cljs.core.not.call(null,inst_46101);
var inst_46103 = (inst_46100) && (inst_46102);
var state_46123__$1 = state_46123;
var statearr_46173_46228 = state_46123__$1;
(statearr_46173_46228[(2)] = inst_46103);

(statearr_46173_46228[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46124 === (10))){
var inst_46027 = (state_46123[(8)]);
var inst_46047 = (state_46123[(2)]);
var inst_46048 = cljs.core.get.call(null,inst_46047,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46049 = cljs.core.get.call(null,inst_46047,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46050 = cljs.core.get.call(null,inst_46047,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_46051 = inst_46027;
var state_46123__$1 = (function (){var statearr_46174 = state_46123;
(statearr_46174[(7)] = inst_46051);

(statearr_46174[(16)] = inst_46048);

(statearr_46174[(17)] = inst_46049);

(statearr_46174[(18)] = inst_46050);

return statearr_46174;
})();
var statearr_46175_46229 = state_46123__$1;
(statearr_46175_46229[(2)] = null);

(statearr_46175_46229[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46124 === (18))){
var inst_46065 = (state_46123[(2)]);
var state_46123__$1 = state_46123;
var statearr_46176_46230 = state_46123__$1;
(statearr_46176_46230[(2)] = inst_46065);

(statearr_46176_46230[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46124 === (37))){
var state_46123__$1 = state_46123;
var statearr_46177_46231 = state_46123__$1;
(statearr_46177_46231[(2)] = null);

(statearr_46177_46231[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46124 === (8))){
var inst_46027 = (state_46123[(8)]);
var inst_46044 = cljs.core.apply.call(null,cljs.core.hash_map,inst_46027);
var state_46123__$1 = state_46123;
var statearr_46178_46232 = state_46123__$1;
(statearr_46178_46232[(2)] = inst_46044);

(statearr_46178_46232[(1)] = (10));


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
});})(c__28544__auto___46186,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28523__auto__,c__28544__auto___46186,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28524__auto__ = null;
var cljs$core$async$mix_$_state_machine__28524__auto____0 = (function (){
var statearr_46182 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46182[(0)] = cljs$core$async$mix_$_state_machine__28524__auto__);

(statearr_46182[(1)] = (1));

return statearr_46182;
});
var cljs$core$async$mix_$_state_machine__28524__auto____1 = (function (state_46123){
while(true){
var ret_value__28525__auto__ = (function (){try{while(true){
var result__28526__auto__ = switch__28523__auto__.call(null,state_46123);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28526__auto__;
}
break;
}
}catch (e46183){if((e46183 instanceof Object)){
var ex__28527__auto__ = e46183;
var statearr_46184_46233 = state_46123;
(statearr_46184_46233[(5)] = ex__28527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46183;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46234 = state_46123;
state_46123 = G__46234;
continue;
} else {
return ret_value__28525__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28524__auto__ = function(state_46123){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28524__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28524__auto____1.call(this,state_46123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28524__auto____0;
cljs$core$async$mix_$_state_machine__28524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28524__auto____1;
return cljs$core$async$mix_$_state_machine__28524__auto__;
})()
;})(switch__28523__auto__,c__28544__auto___46186,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28546__auto__ = (function (){var statearr_46185 = f__28545__auto__.call(null);
(statearr_46185[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28544__auto___46186);

return statearr_46185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28546__auto__);
});})(c__28544__auto___46186,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25453__auto__ = (((p == null))?null:p);
var m__25454__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25454__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25453__auto__ = (((p == null))?null:p);
var m__25454__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,p,v,ch);
} else {
var m__25454__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args46235 = [];
var len__25865__auto___46238 = arguments.length;
var i__25866__auto___46239 = (0);
while(true){
if((i__25866__auto___46239 < len__25865__auto___46238)){
args46235.push((arguments[i__25866__auto___46239]));

var G__46240 = (i__25866__auto___46239 + (1));
i__25866__auto___46239 = G__46240;
continue;
} else {
}
break;
}

var G__46237 = args46235.length;
switch (G__46237) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46235.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25453__auto__ = (((p == null))?null:p);
var m__25454__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,p);
} else {
var m__25454__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25453__auto__ = (((p == null))?null:p);
var m__25454__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,p,v);
} else {
var m__25454__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args46243 = [];
var len__25865__auto___46368 = arguments.length;
var i__25866__auto___46369 = (0);
while(true){
if((i__25866__auto___46369 < len__25865__auto___46368)){
args46243.push((arguments[i__25866__auto___46369]));

var G__46370 = (i__25866__auto___46369 + (1));
i__25866__auto___46369 = G__46370;
continue;
} else {
}
break;
}

var G__46245 = args46243.length;
switch (G__46245) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46243.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__24790__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__24790__auto__,mults){
return (function (p1__46242_SHARP_){
if(cljs.core.truth_(p1__46242_SHARP_.call(null,topic))){
return p1__46242_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__46242_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24790__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async46246 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46246 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta46247){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta46247 = meta46247;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46246.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_46248,meta46247__$1){
var self__ = this;
var _46248__$1 = this;
return (new cljs.core.async.t_cljs$core$async46246(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta46247__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46246.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_46248){
var self__ = this;
var _46248__$1 = this;
return self__.meta46247;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46246.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async46246.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46246.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async46246.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46246.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46246.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46246.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46246.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta46247","meta46247",2125415863,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46246.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46246.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46246";

cljs.core.async.t_cljs$core$async46246.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async46246");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async46246 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async46246(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46247){
return (new cljs.core.async.t_cljs$core$async46246(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46247));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async46246(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28544__auto___46372 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28544__auto___46372,mults,ensure_mult,p){
return (function (){
var f__28545__auto__ = (function (){var switch__28523__auto__ = ((function (c__28544__auto___46372,mults,ensure_mult,p){
return (function (state_46320){
var state_val_46321 = (state_46320[(1)]);
if((state_val_46321 === (7))){
var inst_46316 = (state_46320[(2)]);
var state_46320__$1 = state_46320;
var statearr_46322_46373 = state_46320__$1;
(statearr_46322_46373[(2)] = inst_46316);

(statearr_46322_46373[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46321 === (20))){
var state_46320__$1 = state_46320;
var statearr_46323_46374 = state_46320__$1;
(statearr_46323_46374[(2)] = null);

(statearr_46323_46374[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46321 === (1))){
var state_46320__$1 = state_46320;
var statearr_46324_46375 = state_46320__$1;
(statearr_46324_46375[(2)] = null);

(statearr_46324_46375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46321 === (24))){
var inst_46299 = (state_46320[(7)]);
var inst_46308 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_46299);
var state_46320__$1 = state_46320;
var statearr_46325_46376 = state_46320__$1;
(statearr_46325_46376[(2)] = inst_46308);

(statearr_46325_46376[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46321 === (4))){
var inst_46251 = (state_46320[(8)]);
var inst_46251__$1 = (state_46320[(2)]);
var inst_46252 = (inst_46251__$1 == null);
var state_46320__$1 = (function (){var statearr_46326 = state_46320;
(statearr_46326[(8)] = inst_46251__$1);

return statearr_46326;
})();
if(cljs.core.truth_(inst_46252)){
var statearr_46327_46377 = state_46320__$1;
(statearr_46327_46377[(1)] = (5));

} else {
var statearr_46328_46378 = state_46320__$1;
(statearr_46328_46378[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46321 === (15))){
var inst_46293 = (state_46320[(2)]);
var state_46320__$1 = state_46320;
var statearr_46329_46379 = state_46320__$1;
(statearr_46329_46379[(2)] = inst_46293);

(statearr_46329_46379[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46321 === (21))){
var inst_46313 = (state_46320[(2)]);
var state_46320__$1 = (function (){var statearr_46330 = state_46320;
(statearr_46330[(9)] = inst_46313);

return statearr_46330;
})();
var statearr_46331_46380 = state_46320__$1;
(statearr_46331_46380[(2)] = null);

(statearr_46331_46380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46321 === (13))){
var inst_46275 = (state_46320[(10)]);
var inst_46277 = cljs.core.chunked_seq_QMARK_.call(null,inst_46275);
var state_46320__$1 = state_46320;
if(inst_46277){
var statearr_46332_46381 = state_46320__$1;
(statearr_46332_46381[(1)] = (16));

} else {
var statearr_46333_46382 = state_46320__$1;
(statearr_46333_46382[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46321 === (22))){
var inst_46305 = (state_46320[(2)]);
var state_46320__$1 = state_46320;
if(cljs.core.truth_(inst_46305)){
var statearr_46334_46383 = state_46320__$1;
(statearr_46334_46383[(1)] = (23));

} else {
var statearr_46335_46384 = state_46320__$1;
(statearr_46335_46384[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46321 === (6))){
var inst_46299 = (state_46320[(7)]);
var inst_46301 = (state_46320[(11)]);
var inst_46251 = (state_46320[(8)]);
var inst_46299__$1 = topic_fn.call(null,inst_46251);
var inst_46300 = cljs.core.deref.call(null,mults);
var inst_46301__$1 = cljs.core.get.call(null,inst_46300,inst_46299__$1);
var state_46320__$1 = (function (){var statearr_46336 = state_46320;
(statearr_46336[(7)] = inst_46299__$1);

(statearr_46336[(11)] = inst_46301__$1);

return statearr_46336;
})();
if(cljs.core.truth_(inst_46301__$1)){
var statearr_46337_46385 = state_46320__$1;
(statearr_46337_46385[(1)] = (19));

} else {
var statearr_46338_46386 = state_46320__$1;
(statearr_46338_46386[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46321 === (25))){
var inst_46310 = (state_46320[(2)]);
var state_46320__$1 = state_46320;
var statearr_46339_46387 = state_46320__$1;
(statearr_46339_46387[(2)] = inst_46310);

(statearr_46339_46387[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46321 === (17))){
var inst_46275 = (state_46320[(10)]);
var inst_46284 = cljs.core.first.call(null,inst_46275);
var inst_46285 = cljs.core.async.muxch_STAR_.call(null,inst_46284);
var inst_46286 = cljs.core.async.close_BANG_.call(null,inst_46285);
var inst_46287 = cljs.core.next.call(null,inst_46275);
var inst_46261 = inst_46287;
var inst_46262 = null;
var inst_46263 = (0);
var inst_46264 = (0);
var state_46320__$1 = (function (){var statearr_46340 = state_46320;
(statearr_46340[(12)] = inst_46262);

(statearr_46340[(13)] = inst_46261);

(statearr_46340[(14)] = inst_46264);

(statearr_46340[(15)] = inst_46263);

(statearr_46340[(16)] = inst_46286);

return statearr_46340;
})();
var statearr_46341_46388 = state_46320__$1;
(statearr_46341_46388[(2)] = null);

(statearr_46341_46388[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46321 === (3))){
var inst_46318 = (state_46320[(2)]);
var state_46320__$1 = state_46320;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46320__$1,inst_46318);
} else {
if((state_val_46321 === (12))){
var inst_46295 = (state_46320[(2)]);
var state_46320__$1 = state_46320;
var statearr_46342_46389 = state_46320__$1;
(statearr_46342_46389[(2)] = inst_46295);

(statearr_46342_46389[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46321 === (2))){
var state_46320__$1 = state_46320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46320__$1,(4),ch);
} else {
if((state_val_46321 === (23))){
var state_46320__$1 = state_46320;
var statearr_46343_46390 = state_46320__$1;
(statearr_46343_46390[(2)] = null);

(statearr_46343_46390[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46321 === (19))){
var inst_46301 = (state_46320[(11)]);
var inst_46251 = (state_46320[(8)]);
var inst_46303 = cljs.core.async.muxch_STAR_.call(null,inst_46301);
var state_46320__$1 = state_46320;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46320__$1,(22),inst_46303,inst_46251);
} else {
if((state_val_46321 === (11))){
var inst_46261 = (state_46320[(13)]);
var inst_46275 = (state_46320[(10)]);
var inst_46275__$1 = cljs.core.seq.call(null,inst_46261);
var state_46320__$1 = (function (){var statearr_46344 = state_46320;
(statearr_46344[(10)] = inst_46275__$1);

return statearr_46344;
})();
if(inst_46275__$1){
var statearr_46345_46391 = state_46320__$1;
(statearr_46345_46391[(1)] = (13));

} else {
var statearr_46346_46392 = state_46320__$1;
(statearr_46346_46392[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46321 === (9))){
var inst_46297 = (state_46320[(2)]);
var state_46320__$1 = state_46320;
var statearr_46347_46393 = state_46320__$1;
(statearr_46347_46393[(2)] = inst_46297);

(statearr_46347_46393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46321 === (5))){
var inst_46258 = cljs.core.deref.call(null,mults);
var inst_46259 = cljs.core.vals.call(null,inst_46258);
var inst_46260 = cljs.core.seq.call(null,inst_46259);
var inst_46261 = inst_46260;
var inst_46262 = null;
var inst_46263 = (0);
var inst_46264 = (0);
var state_46320__$1 = (function (){var statearr_46348 = state_46320;
(statearr_46348[(12)] = inst_46262);

(statearr_46348[(13)] = inst_46261);

(statearr_46348[(14)] = inst_46264);

(statearr_46348[(15)] = inst_46263);

return statearr_46348;
})();
var statearr_46349_46394 = state_46320__$1;
(statearr_46349_46394[(2)] = null);

(statearr_46349_46394[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46321 === (14))){
var state_46320__$1 = state_46320;
var statearr_46353_46395 = state_46320__$1;
(statearr_46353_46395[(2)] = null);

(statearr_46353_46395[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46321 === (16))){
var inst_46275 = (state_46320[(10)]);
var inst_46279 = cljs.core.chunk_first.call(null,inst_46275);
var inst_46280 = cljs.core.chunk_rest.call(null,inst_46275);
var inst_46281 = cljs.core.count.call(null,inst_46279);
var inst_46261 = inst_46280;
var inst_46262 = inst_46279;
var inst_46263 = inst_46281;
var inst_46264 = (0);
var state_46320__$1 = (function (){var statearr_46354 = state_46320;
(statearr_46354[(12)] = inst_46262);

(statearr_46354[(13)] = inst_46261);

(statearr_46354[(14)] = inst_46264);

(statearr_46354[(15)] = inst_46263);

return statearr_46354;
})();
var statearr_46355_46396 = state_46320__$1;
(statearr_46355_46396[(2)] = null);

(statearr_46355_46396[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46321 === (10))){
var inst_46262 = (state_46320[(12)]);
var inst_46261 = (state_46320[(13)]);
var inst_46264 = (state_46320[(14)]);
var inst_46263 = (state_46320[(15)]);
var inst_46269 = cljs.core._nth.call(null,inst_46262,inst_46264);
var inst_46270 = cljs.core.async.muxch_STAR_.call(null,inst_46269);
var inst_46271 = cljs.core.async.close_BANG_.call(null,inst_46270);
var inst_46272 = (inst_46264 + (1));
var tmp46350 = inst_46262;
var tmp46351 = inst_46261;
var tmp46352 = inst_46263;
var inst_46261__$1 = tmp46351;
var inst_46262__$1 = tmp46350;
var inst_46263__$1 = tmp46352;
var inst_46264__$1 = inst_46272;
var state_46320__$1 = (function (){var statearr_46356 = state_46320;
(statearr_46356[(12)] = inst_46262__$1);

(statearr_46356[(13)] = inst_46261__$1);

(statearr_46356[(14)] = inst_46264__$1);

(statearr_46356[(15)] = inst_46263__$1);

(statearr_46356[(17)] = inst_46271);

return statearr_46356;
})();
var statearr_46357_46397 = state_46320__$1;
(statearr_46357_46397[(2)] = null);

(statearr_46357_46397[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46321 === (18))){
var inst_46290 = (state_46320[(2)]);
var state_46320__$1 = state_46320;
var statearr_46358_46398 = state_46320__$1;
(statearr_46358_46398[(2)] = inst_46290);

(statearr_46358_46398[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46321 === (8))){
var inst_46264 = (state_46320[(14)]);
var inst_46263 = (state_46320[(15)]);
var inst_46266 = (inst_46264 < inst_46263);
var inst_46267 = inst_46266;
var state_46320__$1 = state_46320;
if(cljs.core.truth_(inst_46267)){
var statearr_46359_46399 = state_46320__$1;
(statearr_46359_46399[(1)] = (10));

} else {
var statearr_46360_46400 = state_46320__$1;
(statearr_46360_46400[(1)] = (11));

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
});})(c__28544__auto___46372,mults,ensure_mult,p))
;
return ((function (switch__28523__auto__,c__28544__auto___46372,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28524__auto__ = null;
var cljs$core$async$state_machine__28524__auto____0 = (function (){
var statearr_46364 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46364[(0)] = cljs$core$async$state_machine__28524__auto__);

(statearr_46364[(1)] = (1));

return statearr_46364;
});
var cljs$core$async$state_machine__28524__auto____1 = (function (state_46320){
while(true){
var ret_value__28525__auto__ = (function (){try{while(true){
var result__28526__auto__ = switch__28523__auto__.call(null,state_46320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28526__auto__;
}
break;
}
}catch (e46365){if((e46365 instanceof Object)){
var ex__28527__auto__ = e46365;
var statearr_46366_46401 = state_46320;
(statearr_46366_46401[(5)] = ex__28527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46365;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46402 = state_46320;
state_46320 = G__46402;
continue;
} else {
return ret_value__28525__auto__;
}
break;
}
});
cljs$core$async$state_machine__28524__auto__ = function(state_46320){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28524__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28524__auto____1.call(this,state_46320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28524__auto____0;
cljs$core$async$state_machine__28524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28524__auto____1;
return cljs$core$async$state_machine__28524__auto__;
})()
;})(switch__28523__auto__,c__28544__auto___46372,mults,ensure_mult,p))
})();
var state__28546__auto__ = (function (){var statearr_46367 = f__28545__auto__.call(null);
(statearr_46367[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28544__auto___46372);

return statearr_46367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28546__auto__);
});})(c__28544__auto___46372,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args46403 = [];
var len__25865__auto___46406 = arguments.length;
var i__25866__auto___46407 = (0);
while(true){
if((i__25866__auto___46407 < len__25865__auto___46406)){
args46403.push((arguments[i__25866__auto___46407]));

var G__46408 = (i__25866__auto___46407 + (1));
i__25866__auto___46407 = G__46408;
continue;
} else {
}
break;
}

var G__46405 = args46403.length;
switch (G__46405) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46403.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args46410 = [];
var len__25865__auto___46413 = arguments.length;
var i__25866__auto___46414 = (0);
while(true){
if((i__25866__auto___46414 < len__25865__auto___46413)){
args46410.push((arguments[i__25866__auto___46414]));

var G__46415 = (i__25866__auto___46414 + (1));
i__25866__auto___46414 = G__46415;
continue;
} else {
}
break;
}

var G__46412 = args46410.length;
switch (G__46412) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46410.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args46417 = [];
var len__25865__auto___46488 = arguments.length;
var i__25866__auto___46489 = (0);
while(true){
if((i__25866__auto___46489 < len__25865__auto___46488)){
args46417.push((arguments[i__25866__auto___46489]));

var G__46490 = (i__25866__auto___46489 + (1));
i__25866__auto___46489 = G__46490;
continue;
} else {
}
break;
}

var G__46419 = args46417.length;
switch (G__46419) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46417.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__28544__auto___46492 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28544__auto___46492,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28545__auto__ = (function (){var switch__28523__auto__ = ((function (c__28544__auto___46492,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_46458){
var state_val_46459 = (state_46458[(1)]);
if((state_val_46459 === (7))){
var state_46458__$1 = state_46458;
var statearr_46460_46493 = state_46458__$1;
(statearr_46460_46493[(2)] = null);

(statearr_46460_46493[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46459 === (1))){
var state_46458__$1 = state_46458;
var statearr_46461_46494 = state_46458__$1;
(statearr_46461_46494[(2)] = null);

(statearr_46461_46494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46459 === (4))){
var inst_46422 = (state_46458[(7)]);
var inst_46424 = (inst_46422 < cnt);
var state_46458__$1 = state_46458;
if(cljs.core.truth_(inst_46424)){
var statearr_46462_46495 = state_46458__$1;
(statearr_46462_46495[(1)] = (6));

} else {
var statearr_46463_46496 = state_46458__$1;
(statearr_46463_46496[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46459 === (15))){
var inst_46454 = (state_46458[(2)]);
var state_46458__$1 = state_46458;
var statearr_46464_46497 = state_46458__$1;
(statearr_46464_46497[(2)] = inst_46454);

(statearr_46464_46497[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46459 === (13))){
var inst_46447 = cljs.core.async.close_BANG_.call(null,out);
var state_46458__$1 = state_46458;
var statearr_46465_46498 = state_46458__$1;
(statearr_46465_46498[(2)] = inst_46447);

(statearr_46465_46498[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46459 === (6))){
var state_46458__$1 = state_46458;
var statearr_46466_46499 = state_46458__$1;
(statearr_46466_46499[(2)] = null);

(statearr_46466_46499[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46459 === (3))){
var inst_46456 = (state_46458[(2)]);
var state_46458__$1 = state_46458;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46458__$1,inst_46456);
} else {
if((state_val_46459 === (12))){
var inst_46444 = (state_46458[(8)]);
var inst_46444__$1 = (state_46458[(2)]);
var inst_46445 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_46444__$1);
var state_46458__$1 = (function (){var statearr_46467 = state_46458;
(statearr_46467[(8)] = inst_46444__$1);

return statearr_46467;
})();
if(cljs.core.truth_(inst_46445)){
var statearr_46468_46500 = state_46458__$1;
(statearr_46468_46500[(1)] = (13));

} else {
var statearr_46469_46501 = state_46458__$1;
(statearr_46469_46501[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46459 === (2))){
var inst_46421 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_46422 = (0);
var state_46458__$1 = (function (){var statearr_46470 = state_46458;
(statearr_46470[(9)] = inst_46421);

(statearr_46470[(7)] = inst_46422);

return statearr_46470;
})();
var statearr_46471_46502 = state_46458__$1;
(statearr_46471_46502[(2)] = null);

(statearr_46471_46502[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46459 === (11))){
var inst_46422 = (state_46458[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_46458,(10),Object,null,(9));
var inst_46431 = chs__$1.call(null,inst_46422);
var inst_46432 = done.call(null,inst_46422);
var inst_46433 = cljs.core.async.take_BANG_.call(null,inst_46431,inst_46432);
var state_46458__$1 = state_46458;
var statearr_46472_46503 = state_46458__$1;
(statearr_46472_46503[(2)] = inst_46433);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46458__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46459 === (9))){
var inst_46422 = (state_46458[(7)]);
var inst_46435 = (state_46458[(2)]);
var inst_46436 = (inst_46422 + (1));
var inst_46422__$1 = inst_46436;
var state_46458__$1 = (function (){var statearr_46473 = state_46458;
(statearr_46473[(10)] = inst_46435);

(statearr_46473[(7)] = inst_46422__$1);

return statearr_46473;
})();
var statearr_46474_46504 = state_46458__$1;
(statearr_46474_46504[(2)] = null);

(statearr_46474_46504[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46459 === (5))){
var inst_46442 = (state_46458[(2)]);
var state_46458__$1 = (function (){var statearr_46475 = state_46458;
(statearr_46475[(11)] = inst_46442);

return statearr_46475;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46458__$1,(12),dchan);
} else {
if((state_val_46459 === (14))){
var inst_46444 = (state_46458[(8)]);
var inst_46449 = cljs.core.apply.call(null,f,inst_46444);
var state_46458__$1 = state_46458;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46458__$1,(16),out,inst_46449);
} else {
if((state_val_46459 === (16))){
var inst_46451 = (state_46458[(2)]);
var state_46458__$1 = (function (){var statearr_46476 = state_46458;
(statearr_46476[(12)] = inst_46451);

return statearr_46476;
})();
var statearr_46477_46505 = state_46458__$1;
(statearr_46477_46505[(2)] = null);

(statearr_46477_46505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46459 === (10))){
var inst_46426 = (state_46458[(2)]);
var inst_46427 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_46458__$1 = (function (){var statearr_46478 = state_46458;
(statearr_46478[(13)] = inst_46426);

return statearr_46478;
})();
var statearr_46479_46506 = state_46458__$1;
(statearr_46479_46506[(2)] = inst_46427);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46458__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46459 === (8))){
var inst_46440 = (state_46458[(2)]);
var state_46458__$1 = state_46458;
var statearr_46480_46507 = state_46458__$1;
(statearr_46480_46507[(2)] = inst_46440);

(statearr_46480_46507[(1)] = (5));


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
});})(c__28544__auto___46492,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28523__auto__,c__28544__auto___46492,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28524__auto__ = null;
var cljs$core$async$state_machine__28524__auto____0 = (function (){
var statearr_46484 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46484[(0)] = cljs$core$async$state_machine__28524__auto__);

(statearr_46484[(1)] = (1));

return statearr_46484;
});
var cljs$core$async$state_machine__28524__auto____1 = (function (state_46458){
while(true){
var ret_value__28525__auto__ = (function (){try{while(true){
var result__28526__auto__ = switch__28523__auto__.call(null,state_46458);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28526__auto__;
}
break;
}
}catch (e46485){if((e46485 instanceof Object)){
var ex__28527__auto__ = e46485;
var statearr_46486_46508 = state_46458;
(statearr_46486_46508[(5)] = ex__28527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46458);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46509 = state_46458;
state_46458 = G__46509;
continue;
} else {
return ret_value__28525__auto__;
}
break;
}
});
cljs$core$async$state_machine__28524__auto__ = function(state_46458){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28524__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28524__auto____1.call(this,state_46458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28524__auto____0;
cljs$core$async$state_machine__28524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28524__auto____1;
return cljs$core$async$state_machine__28524__auto__;
})()
;})(switch__28523__auto__,c__28544__auto___46492,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28546__auto__ = (function (){var statearr_46487 = f__28545__auto__.call(null);
(statearr_46487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28544__auto___46492);

return statearr_46487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28546__auto__);
});})(c__28544__auto___46492,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args46511 = [];
var len__25865__auto___46569 = arguments.length;
var i__25866__auto___46570 = (0);
while(true){
if((i__25866__auto___46570 < len__25865__auto___46569)){
args46511.push((arguments[i__25866__auto___46570]));

var G__46571 = (i__25866__auto___46570 + (1));
i__25866__auto___46570 = G__46571;
continue;
} else {
}
break;
}

var G__46513 = args46511.length;
switch (G__46513) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46511.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28544__auto___46573 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28544__auto___46573,out){
return (function (){
var f__28545__auto__ = (function (){var switch__28523__auto__ = ((function (c__28544__auto___46573,out){
return (function (state_46545){
var state_val_46546 = (state_46545[(1)]);
if((state_val_46546 === (7))){
var inst_46524 = (state_46545[(7)]);
var inst_46525 = (state_46545[(8)]);
var inst_46524__$1 = (state_46545[(2)]);
var inst_46525__$1 = cljs.core.nth.call(null,inst_46524__$1,(0),null);
var inst_46526 = cljs.core.nth.call(null,inst_46524__$1,(1),null);
var inst_46527 = (inst_46525__$1 == null);
var state_46545__$1 = (function (){var statearr_46547 = state_46545;
(statearr_46547[(7)] = inst_46524__$1);

(statearr_46547[(8)] = inst_46525__$1);

(statearr_46547[(9)] = inst_46526);

return statearr_46547;
})();
if(cljs.core.truth_(inst_46527)){
var statearr_46548_46574 = state_46545__$1;
(statearr_46548_46574[(1)] = (8));

} else {
var statearr_46549_46575 = state_46545__$1;
(statearr_46549_46575[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46546 === (1))){
var inst_46514 = cljs.core.vec.call(null,chs);
var inst_46515 = inst_46514;
var state_46545__$1 = (function (){var statearr_46550 = state_46545;
(statearr_46550[(10)] = inst_46515);

return statearr_46550;
})();
var statearr_46551_46576 = state_46545__$1;
(statearr_46551_46576[(2)] = null);

(statearr_46551_46576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46546 === (4))){
var inst_46515 = (state_46545[(10)]);
var state_46545__$1 = state_46545;
return cljs.core.async.ioc_alts_BANG_.call(null,state_46545__$1,(7),inst_46515);
} else {
if((state_val_46546 === (6))){
var inst_46541 = (state_46545[(2)]);
var state_46545__$1 = state_46545;
var statearr_46552_46577 = state_46545__$1;
(statearr_46552_46577[(2)] = inst_46541);

(statearr_46552_46577[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46546 === (3))){
var inst_46543 = (state_46545[(2)]);
var state_46545__$1 = state_46545;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46545__$1,inst_46543);
} else {
if((state_val_46546 === (2))){
var inst_46515 = (state_46545[(10)]);
var inst_46517 = cljs.core.count.call(null,inst_46515);
var inst_46518 = (inst_46517 > (0));
var state_46545__$1 = state_46545;
if(cljs.core.truth_(inst_46518)){
var statearr_46554_46578 = state_46545__$1;
(statearr_46554_46578[(1)] = (4));

} else {
var statearr_46555_46579 = state_46545__$1;
(statearr_46555_46579[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46546 === (11))){
var inst_46515 = (state_46545[(10)]);
var inst_46534 = (state_46545[(2)]);
var tmp46553 = inst_46515;
var inst_46515__$1 = tmp46553;
var state_46545__$1 = (function (){var statearr_46556 = state_46545;
(statearr_46556[(11)] = inst_46534);

(statearr_46556[(10)] = inst_46515__$1);

return statearr_46556;
})();
var statearr_46557_46580 = state_46545__$1;
(statearr_46557_46580[(2)] = null);

(statearr_46557_46580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46546 === (9))){
var inst_46525 = (state_46545[(8)]);
var state_46545__$1 = state_46545;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46545__$1,(11),out,inst_46525);
} else {
if((state_val_46546 === (5))){
var inst_46539 = cljs.core.async.close_BANG_.call(null,out);
var state_46545__$1 = state_46545;
var statearr_46558_46581 = state_46545__$1;
(statearr_46558_46581[(2)] = inst_46539);

(statearr_46558_46581[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46546 === (10))){
var inst_46537 = (state_46545[(2)]);
var state_46545__$1 = state_46545;
var statearr_46559_46582 = state_46545__$1;
(statearr_46559_46582[(2)] = inst_46537);

(statearr_46559_46582[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46546 === (8))){
var inst_46524 = (state_46545[(7)]);
var inst_46525 = (state_46545[(8)]);
var inst_46515 = (state_46545[(10)]);
var inst_46526 = (state_46545[(9)]);
var inst_46529 = (function (){var cs = inst_46515;
var vec__46520 = inst_46524;
var v = inst_46525;
var c = inst_46526;
return ((function (cs,vec__46520,v,c,inst_46524,inst_46525,inst_46515,inst_46526,state_val_46546,c__28544__auto___46573,out){
return (function (p1__46510_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__46510_SHARP_);
});
;})(cs,vec__46520,v,c,inst_46524,inst_46525,inst_46515,inst_46526,state_val_46546,c__28544__auto___46573,out))
})();
var inst_46530 = cljs.core.filterv.call(null,inst_46529,inst_46515);
var inst_46515__$1 = inst_46530;
var state_46545__$1 = (function (){var statearr_46560 = state_46545;
(statearr_46560[(10)] = inst_46515__$1);

return statearr_46560;
})();
var statearr_46561_46583 = state_46545__$1;
(statearr_46561_46583[(2)] = null);

(statearr_46561_46583[(1)] = (2));


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
});})(c__28544__auto___46573,out))
;
return ((function (switch__28523__auto__,c__28544__auto___46573,out){
return (function() {
var cljs$core$async$state_machine__28524__auto__ = null;
var cljs$core$async$state_machine__28524__auto____0 = (function (){
var statearr_46565 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46565[(0)] = cljs$core$async$state_machine__28524__auto__);

(statearr_46565[(1)] = (1));

return statearr_46565;
});
var cljs$core$async$state_machine__28524__auto____1 = (function (state_46545){
while(true){
var ret_value__28525__auto__ = (function (){try{while(true){
var result__28526__auto__ = switch__28523__auto__.call(null,state_46545);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28526__auto__;
}
break;
}
}catch (e46566){if((e46566 instanceof Object)){
var ex__28527__auto__ = e46566;
var statearr_46567_46584 = state_46545;
(statearr_46567_46584[(5)] = ex__28527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46545);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46566;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46585 = state_46545;
state_46545 = G__46585;
continue;
} else {
return ret_value__28525__auto__;
}
break;
}
});
cljs$core$async$state_machine__28524__auto__ = function(state_46545){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28524__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28524__auto____1.call(this,state_46545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28524__auto____0;
cljs$core$async$state_machine__28524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28524__auto____1;
return cljs$core$async$state_machine__28524__auto__;
})()
;})(switch__28523__auto__,c__28544__auto___46573,out))
})();
var state__28546__auto__ = (function (){var statearr_46568 = f__28545__auto__.call(null);
(statearr_46568[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28544__auto___46573);

return statearr_46568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28546__auto__);
});})(c__28544__auto___46573,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args46586 = [];
var len__25865__auto___46635 = arguments.length;
var i__25866__auto___46636 = (0);
while(true){
if((i__25866__auto___46636 < len__25865__auto___46635)){
args46586.push((arguments[i__25866__auto___46636]));

var G__46637 = (i__25866__auto___46636 + (1));
i__25866__auto___46636 = G__46637;
continue;
} else {
}
break;
}

var G__46588 = args46586.length;
switch (G__46588) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46586.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28544__auto___46639 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28544__auto___46639,out){
return (function (){
var f__28545__auto__ = (function (){var switch__28523__auto__ = ((function (c__28544__auto___46639,out){
return (function (state_46612){
var state_val_46613 = (state_46612[(1)]);
if((state_val_46613 === (7))){
var inst_46594 = (state_46612[(7)]);
var inst_46594__$1 = (state_46612[(2)]);
var inst_46595 = (inst_46594__$1 == null);
var inst_46596 = cljs.core.not.call(null,inst_46595);
var state_46612__$1 = (function (){var statearr_46614 = state_46612;
(statearr_46614[(7)] = inst_46594__$1);

return statearr_46614;
})();
if(inst_46596){
var statearr_46615_46640 = state_46612__$1;
(statearr_46615_46640[(1)] = (8));

} else {
var statearr_46616_46641 = state_46612__$1;
(statearr_46616_46641[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46613 === (1))){
var inst_46589 = (0);
var state_46612__$1 = (function (){var statearr_46617 = state_46612;
(statearr_46617[(8)] = inst_46589);

return statearr_46617;
})();
var statearr_46618_46642 = state_46612__$1;
(statearr_46618_46642[(2)] = null);

(statearr_46618_46642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46613 === (4))){
var state_46612__$1 = state_46612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46612__$1,(7),ch);
} else {
if((state_val_46613 === (6))){
var inst_46607 = (state_46612[(2)]);
var state_46612__$1 = state_46612;
var statearr_46619_46643 = state_46612__$1;
(statearr_46619_46643[(2)] = inst_46607);

(statearr_46619_46643[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46613 === (3))){
var inst_46609 = (state_46612[(2)]);
var inst_46610 = cljs.core.async.close_BANG_.call(null,out);
var state_46612__$1 = (function (){var statearr_46620 = state_46612;
(statearr_46620[(9)] = inst_46609);

return statearr_46620;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46612__$1,inst_46610);
} else {
if((state_val_46613 === (2))){
var inst_46589 = (state_46612[(8)]);
var inst_46591 = (inst_46589 < n);
var state_46612__$1 = state_46612;
if(cljs.core.truth_(inst_46591)){
var statearr_46621_46644 = state_46612__$1;
(statearr_46621_46644[(1)] = (4));

} else {
var statearr_46622_46645 = state_46612__$1;
(statearr_46622_46645[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46613 === (11))){
var inst_46589 = (state_46612[(8)]);
var inst_46599 = (state_46612[(2)]);
var inst_46600 = (inst_46589 + (1));
var inst_46589__$1 = inst_46600;
var state_46612__$1 = (function (){var statearr_46623 = state_46612;
(statearr_46623[(8)] = inst_46589__$1);

(statearr_46623[(10)] = inst_46599);

return statearr_46623;
})();
var statearr_46624_46646 = state_46612__$1;
(statearr_46624_46646[(2)] = null);

(statearr_46624_46646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46613 === (9))){
var state_46612__$1 = state_46612;
var statearr_46625_46647 = state_46612__$1;
(statearr_46625_46647[(2)] = null);

(statearr_46625_46647[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46613 === (5))){
var state_46612__$1 = state_46612;
var statearr_46626_46648 = state_46612__$1;
(statearr_46626_46648[(2)] = null);

(statearr_46626_46648[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46613 === (10))){
var inst_46604 = (state_46612[(2)]);
var state_46612__$1 = state_46612;
var statearr_46627_46649 = state_46612__$1;
(statearr_46627_46649[(2)] = inst_46604);

(statearr_46627_46649[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46613 === (8))){
var inst_46594 = (state_46612[(7)]);
var state_46612__$1 = state_46612;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46612__$1,(11),out,inst_46594);
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
});})(c__28544__auto___46639,out))
;
return ((function (switch__28523__auto__,c__28544__auto___46639,out){
return (function() {
var cljs$core$async$state_machine__28524__auto__ = null;
var cljs$core$async$state_machine__28524__auto____0 = (function (){
var statearr_46631 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46631[(0)] = cljs$core$async$state_machine__28524__auto__);

(statearr_46631[(1)] = (1));

return statearr_46631;
});
var cljs$core$async$state_machine__28524__auto____1 = (function (state_46612){
while(true){
var ret_value__28525__auto__ = (function (){try{while(true){
var result__28526__auto__ = switch__28523__auto__.call(null,state_46612);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28526__auto__;
}
break;
}
}catch (e46632){if((e46632 instanceof Object)){
var ex__28527__auto__ = e46632;
var statearr_46633_46650 = state_46612;
(statearr_46633_46650[(5)] = ex__28527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46632;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46651 = state_46612;
state_46612 = G__46651;
continue;
} else {
return ret_value__28525__auto__;
}
break;
}
});
cljs$core$async$state_machine__28524__auto__ = function(state_46612){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28524__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28524__auto____1.call(this,state_46612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28524__auto____0;
cljs$core$async$state_machine__28524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28524__auto____1;
return cljs$core$async$state_machine__28524__auto__;
})()
;})(switch__28523__auto__,c__28544__auto___46639,out))
})();
var state__28546__auto__ = (function (){var statearr_46634 = f__28545__auto__.call(null);
(statearr_46634[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28544__auto___46639);

return statearr_46634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28546__auto__);
});})(c__28544__auto___46639,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async46659 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46659 = (function (map_LT_,f,ch,meta46660){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta46660 = meta46660;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46659.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46661,meta46660__$1){
var self__ = this;
var _46661__$1 = this;
return (new cljs.core.async.t_cljs$core$async46659(self__.map_LT_,self__.f,self__.ch,meta46660__$1));
});

cljs.core.async.t_cljs$core$async46659.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46661){
var self__ = this;
var _46661__$1 = this;
return self__.meta46660;
});

cljs.core.async.t_cljs$core$async46659.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async46659.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46659.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46659.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async46659.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async46662 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46662 = (function (map_LT_,f,ch,meta46660,_,fn1,meta46663){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta46660 = meta46660;
this._ = _;
this.fn1 = fn1;
this.meta46663 = meta46663;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46662.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_46664,meta46663__$1){
var self__ = this;
var _46664__$1 = this;
return (new cljs.core.async.t_cljs$core$async46662(self__.map_LT_,self__.f,self__.ch,self__.meta46660,self__._,self__.fn1,meta46663__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async46662.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_46664){
var self__ = this;
var _46664__$1 = this;
return self__.meta46663;
});})(___$1))
;

cljs.core.async.t_cljs$core$async46662.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async46662.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async46662.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async46662.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__46652_SHARP_){
return f1.call(null,(((p1__46652_SHARP_ == null))?null:self__.f.call(null,p1__46652_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async46662.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46660","meta46660",1388845118,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async46659","cljs.core.async/t_cljs$core$async46659",-1526620025,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta46663","meta46663",1613284906,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async46662.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46662.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46662";

cljs.core.async.t_cljs$core$async46662.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async46662");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async46662 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46662(map_LT___$1,f__$1,ch__$1,meta46660__$1,___$2,fn1__$1,meta46663){
return (new cljs.core.async.t_cljs$core$async46662(map_LT___$1,f__$1,ch__$1,meta46660__$1,___$2,fn1__$1,meta46663));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async46662(self__.map_LT_,self__.f,self__.ch,self__.meta46660,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24778__auto__ = ret;
if(cljs.core.truth_(and__24778__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24778__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async46659.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async46659.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async46659.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46660","meta46660",1388845118,null)], null);
});

cljs.core.async.t_cljs$core$async46659.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46659.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46659";

cljs.core.async.t_cljs$core$async46659.cljs$lang$ctorPrWriter = (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async46659");
});

cljs.core.async.__GT_t_cljs$core$async46659 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46659(map_LT___$1,f__$1,ch__$1,meta46660){
return (new cljs.core.async.t_cljs$core$async46659(map_LT___$1,f__$1,ch__$1,meta46660));
});

}

return (new cljs.core.async.t_cljs$core$async46659(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async46668 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46668 = (function (map_GT_,f,ch,meta46669){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta46669 = meta46669;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46668.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46670,meta46669__$1){
var self__ = this;
var _46670__$1 = this;
return (new cljs.core.async.t_cljs$core$async46668(self__.map_GT_,self__.f,self__.ch,meta46669__$1));
});

cljs.core.async.t_cljs$core$async46668.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46670){
var self__ = this;
var _46670__$1 = this;
return self__.meta46669;
});

cljs.core.async.t_cljs$core$async46668.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async46668.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46668.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async46668.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async46668.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async46668.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async46668.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46669","meta46669",271711433,null)], null);
});

cljs.core.async.t_cljs$core$async46668.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46668.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46668";

cljs.core.async.t_cljs$core$async46668.cljs$lang$ctorPrWriter = (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async46668");
});

cljs.core.async.__GT_t_cljs$core$async46668 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async46668(map_GT___$1,f__$1,ch__$1,meta46669){
return (new cljs.core.async.t_cljs$core$async46668(map_GT___$1,f__$1,ch__$1,meta46669));
});

}

return (new cljs.core.async.t_cljs$core$async46668(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async46674 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46674 = (function (filter_GT_,p,ch,meta46675){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta46675 = meta46675;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46674.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46676,meta46675__$1){
var self__ = this;
var _46676__$1 = this;
return (new cljs.core.async.t_cljs$core$async46674(self__.filter_GT_,self__.p,self__.ch,meta46675__$1));
});

cljs.core.async.t_cljs$core$async46674.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46676){
var self__ = this;
var _46676__$1 = this;
return self__.meta46675;
});

cljs.core.async.t_cljs$core$async46674.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async46674.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46674.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46674.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async46674.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async46674.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async46674.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async46674.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46675","meta46675",1907155256,null)], null);
});

cljs.core.async.t_cljs$core$async46674.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46674.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46674";

cljs.core.async.t_cljs$core$async46674.cljs$lang$ctorPrWriter = (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async46674");
});

cljs.core.async.__GT_t_cljs$core$async46674 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async46674(filter_GT___$1,p__$1,ch__$1,meta46675){
return (new cljs.core.async.t_cljs$core$async46674(filter_GT___$1,p__$1,ch__$1,meta46675));
});

}

return (new cljs.core.async.t_cljs$core$async46674(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args46677 = [];
var len__25865__auto___46721 = arguments.length;
var i__25866__auto___46722 = (0);
while(true){
if((i__25866__auto___46722 < len__25865__auto___46721)){
args46677.push((arguments[i__25866__auto___46722]));

var G__46723 = (i__25866__auto___46722 + (1));
i__25866__auto___46722 = G__46723;
continue;
} else {
}
break;
}

var G__46679 = args46677.length;
switch (G__46679) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46677.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28544__auto___46725 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28544__auto___46725,out){
return (function (){
var f__28545__auto__ = (function (){var switch__28523__auto__ = ((function (c__28544__auto___46725,out){
return (function (state_46700){
var state_val_46701 = (state_46700[(1)]);
if((state_val_46701 === (7))){
var inst_46696 = (state_46700[(2)]);
var state_46700__$1 = state_46700;
var statearr_46702_46726 = state_46700__$1;
(statearr_46702_46726[(2)] = inst_46696);

(statearr_46702_46726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46701 === (1))){
var state_46700__$1 = state_46700;
var statearr_46703_46727 = state_46700__$1;
(statearr_46703_46727[(2)] = null);

(statearr_46703_46727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46701 === (4))){
var inst_46682 = (state_46700[(7)]);
var inst_46682__$1 = (state_46700[(2)]);
var inst_46683 = (inst_46682__$1 == null);
var state_46700__$1 = (function (){var statearr_46704 = state_46700;
(statearr_46704[(7)] = inst_46682__$1);

return statearr_46704;
})();
if(cljs.core.truth_(inst_46683)){
var statearr_46705_46728 = state_46700__$1;
(statearr_46705_46728[(1)] = (5));

} else {
var statearr_46706_46729 = state_46700__$1;
(statearr_46706_46729[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46701 === (6))){
var inst_46682 = (state_46700[(7)]);
var inst_46687 = p.call(null,inst_46682);
var state_46700__$1 = state_46700;
if(cljs.core.truth_(inst_46687)){
var statearr_46707_46730 = state_46700__$1;
(statearr_46707_46730[(1)] = (8));

} else {
var statearr_46708_46731 = state_46700__$1;
(statearr_46708_46731[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46701 === (3))){
var inst_46698 = (state_46700[(2)]);
var state_46700__$1 = state_46700;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46700__$1,inst_46698);
} else {
if((state_val_46701 === (2))){
var state_46700__$1 = state_46700;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46700__$1,(4),ch);
} else {
if((state_val_46701 === (11))){
var inst_46690 = (state_46700[(2)]);
var state_46700__$1 = state_46700;
var statearr_46709_46732 = state_46700__$1;
(statearr_46709_46732[(2)] = inst_46690);

(statearr_46709_46732[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46701 === (9))){
var state_46700__$1 = state_46700;
var statearr_46710_46733 = state_46700__$1;
(statearr_46710_46733[(2)] = null);

(statearr_46710_46733[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46701 === (5))){
var inst_46685 = cljs.core.async.close_BANG_.call(null,out);
var state_46700__$1 = state_46700;
var statearr_46711_46734 = state_46700__$1;
(statearr_46711_46734[(2)] = inst_46685);

(statearr_46711_46734[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46701 === (10))){
var inst_46693 = (state_46700[(2)]);
var state_46700__$1 = (function (){var statearr_46712 = state_46700;
(statearr_46712[(8)] = inst_46693);

return statearr_46712;
})();
var statearr_46713_46735 = state_46700__$1;
(statearr_46713_46735[(2)] = null);

(statearr_46713_46735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46701 === (8))){
var inst_46682 = (state_46700[(7)]);
var state_46700__$1 = state_46700;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46700__$1,(11),out,inst_46682);
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
});})(c__28544__auto___46725,out))
;
return ((function (switch__28523__auto__,c__28544__auto___46725,out){
return (function() {
var cljs$core$async$state_machine__28524__auto__ = null;
var cljs$core$async$state_machine__28524__auto____0 = (function (){
var statearr_46717 = [null,null,null,null,null,null,null,null,null];
(statearr_46717[(0)] = cljs$core$async$state_machine__28524__auto__);

(statearr_46717[(1)] = (1));

return statearr_46717;
});
var cljs$core$async$state_machine__28524__auto____1 = (function (state_46700){
while(true){
var ret_value__28525__auto__ = (function (){try{while(true){
var result__28526__auto__ = switch__28523__auto__.call(null,state_46700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28526__auto__;
}
break;
}
}catch (e46718){if((e46718 instanceof Object)){
var ex__28527__auto__ = e46718;
var statearr_46719_46736 = state_46700;
(statearr_46719_46736[(5)] = ex__28527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46718;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46737 = state_46700;
state_46700 = G__46737;
continue;
} else {
return ret_value__28525__auto__;
}
break;
}
});
cljs$core$async$state_machine__28524__auto__ = function(state_46700){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28524__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28524__auto____1.call(this,state_46700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28524__auto____0;
cljs$core$async$state_machine__28524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28524__auto____1;
return cljs$core$async$state_machine__28524__auto__;
})()
;})(switch__28523__auto__,c__28544__auto___46725,out))
})();
var state__28546__auto__ = (function (){var statearr_46720 = f__28545__auto__.call(null);
(statearr_46720[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28544__auto___46725);

return statearr_46720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28546__auto__);
});})(c__28544__auto___46725,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args46738 = [];
var len__25865__auto___46741 = arguments.length;
var i__25866__auto___46742 = (0);
while(true){
if((i__25866__auto___46742 < len__25865__auto___46741)){
args46738.push((arguments[i__25866__auto___46742]));

var G__46743 = (i__25866__auto___46742 + (1));
i__25866__auto___46742 = G__46743;
continue;
} else {
}
break;
}

var G__46740 = args46738.length;
switch (G__46740) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46738.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__28544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28544__auto__){
return (function (){
var f__28545__auto__ = (function (){var switch__28523__auto__ = ((function (c__28544__auto__){
return (function (state_46910){
var state_val_46911 = (state_46910[(1)]);
if((state_val_46911 === (7))){
var inst_46906 = (state_46910[(2)]);
var state_46910__$1 = state_46910;
var statearr_46912_46953 = state_46910__$1;
(statearr_46912_46953[(2)] = inst_46906);

(statearr_46912_46953[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46911 === (20))){
var inst_46876 = (state_46910[(7)]);
var inst_46887 = (state_46910[(2)]);
var inst_46888 = cljs.core.next.call(null,inst_46876);
var inst_46862 = inst_46888;
var inst_46863 = null;
var inst_46864 = (0);
var inst_46865 = (0);
var state_46910__$1 = (function (){var statearr_46913 = state_46910;
(statearr_46913[(8)] = inst_46863);

(statearr_46913[(9)] = inst_46864);

(statearr_46913[(10)] = inst_46887);

(statearr_46913[(11)] = inst_46865);

(statearr_46913[(12)] = inst_46862);

return statearr_46913;
})();
var statearr_46914_46954 = state_46910__$1;
(statearr_46914_46954[(2)] = null);

(statearr_46914_46954[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46911 === (1))){
var state_46910__$1 = state_46910;
var statearr_46915_46955 = state_46910__$1;
(statearr_46915_46955[(2)] = null);

(statearr_46915_46955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46911 === (4))){
var inst_46851 = (state_46910[(13)]);
var inst_46851__$1 = (state_46910[(2)]);
var inst_46852 = (inst_46851__$1 == null);
var state_46910__$1 = (function (){var statearr_46916 = state_46910;
(statearr_46916[(13)] = inst_46851__$1);

return statearr_46916;
})();
if(cljs.core.truth_(inst_46852)){
var statearr_46917_46956 = state_46910__$1;
(statearr_46917_46956[(1)] = (5));

} else {
var statearr_46918_46957 = state_46910__$1;
(statearr_46918_46957[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46911 === (15))){
var state_46910__$1 = state_46910;
var statearr_46922_46958 = state_46910__$1;
(statearr_46922_46958[(2)] = null);

(statearr_46922_46958[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46911 === (21))){
var state_46910__$1 = state_46910;
var statearr_46923_46959 = state_46910__$1;
(statearr_46923_46959[(2)] = null);

(statearr_46923_46959[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46911 === (13))){
var inst_46863 = (state_46910[(8)]);
var inst_46864 = (state_46910[(9)]);
var inst_46865 = (state_46910[(11)]);
var inst_46862 = (state_46910[(12)]);
var inst_46872 = (state_46910[(2)]);
var inst_46873 = (inst_46865 + (1));
var tmp46919 = inst_46863;
var tmp46920 = inst_46864;
var tmp46921 = inst_46862;
var inst_46862__$1 = tmp46921;
var inst_46863__$1 = tmp46919;
var inst_46864__$1 = tmp46920;
var inst_46865__$1 = inst_46873;
var state_46910__$1 = (function (){var statearr_46924 = state_46910;
(statearr_46924[(8)] = inst_46863__$1);

(statearr_46924[(9)] = inst_46864__$1);

(statearr_46924[(11)] = inst_46865__$1);

(statearr_46924[(14)] = inst_46872);

(statearr_46924[(12)] = inst_46862__$1);

return statearr_46924;
})();
var statearr_46925_46960 = state_46910__$1;
(statearr_46925_46960[(2)] = null);

(statearr_46925_46960[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46911 === (22))){
var state_46910__$1 = state_46910;
var statearr_46926_46961 = state_46910__$1;
(statearr_46926_46961[(2)] = null);

(statearr_46926_46961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46911 === (6))){
var inst_46851 = (state_46910[(13)]);
var inst_46860 = f.call(null,inst_46851);
var inst_46861 = cljs.core.seq.call(null,inst_46860);
var inst_46862 = inst_46861;
var inst_46863 = null;
var inst_46864 = (0);
var inst_46865 = (0);
var state_46910__$1 = (function (){var statearr_46927 = state_46910;
(statearr_46927[(8)] = inst_46863);

(statearr_46927[(9)] = inst_46864);

(statearr_46927[(11)] = inst_46865);

(statearr_46927[(12)] = inst_46862);

return statearr_46927;
})();
var statearr_46928_46962 = state_46910__$1;
(statearr_46928_46962[(2)] = null);

(statearr_46928_46962[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46911 === (17))){
var inst_46876 = (state_46910[(7)]);
var inst_46880 = cljs.core.chunk_first.call(null,inst_46876);
var inst_46881 = cljs.core.chunk_rest.call(null,inst_46876);
var inst_46882 = cljs.core.count.call(null,inst_46880);
var inst_46862 = inst_46881;
var inst_46863 = inst_46880;
var inst_46864 = inst_46882;
var inst_46865 = (0);
var state_46910__$1 = (function (){var statearr_46929 = state_46910;
(statearr_46929[(8)] = inst_46863);

(statearr_46929[(9)] = inst_46864);

(statearr_46929[(11)] = inst_46865);

(statearr_46929[(12)] = inst_46862);

return statearr_46929;
})();
var statearr_46930_46963 = state_46910__$1;
(statearr_46930_46963[(2)] = null);

(statearr_46930_46963[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46911 === (3))){
var inst_46908 = (state_46910[(2)]);
var state_46910__$1 = state_46910;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46910__$1,inst_46908);
} else {
if((state_val_46911 === (12))){
var inst_46896 = (state_46910[(2)]);
var state_46910__$1 = state_46910;
var statearr_46931_46964 = state_46910__$1;
(statearr_46931_46964[(2)] = inst_46896);

(statearr_46931_46964[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46911 === (2))){
var state_46910__$1 = state_46910;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46910__$1,(4),in$);
} else {
if((state_val_46911 === (23))){
var inst_46904 = (state_46910[(2)]);
var state_46910__$1 = state_46910;
var statearr_46932_46965 = state_46910__$1;
(statearr_46932_46965[(2)] = inst_46904);

(statearr_46932_46965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46911 === (19))){
var inst_46891 = (state_46910[(2)]);
var state_46910__$1 = state_46910;
var statearr_46933_46966 = state_46910__$1;
(statearr_46933_46966[(2)] = inst_46891);

(statearr_46933_46966[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46911 === (11))){
var inst_46876 = (state_46910[(7)]);
var inst_46862 = (state_46910[(12)]);
var inst_46876__$1 = cljs.core.seq.call(null,inst_46862);
var state_46910__$1 = (function (){var statearr_46934 = state_46910;
(statearr_46934[(7)] = inst_46876__$1);

return statearr_46934;
})();
if(inst_46876__$1){
var statearr_46935_46967 = state_46910__$1;
(statearr_46935_46967[(1)] = (14));

} else {
var statearr_46936_46968 = state_46910__$1;
(statearr_46936_46968[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46911 === (9))){
var inst_46898 = (state_46910[(2)]);
var inst_46899 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_46910__$1 = (function (){var statearr_46937 = state_46910;
(statearr_46937[(15)] = inst_46898);

return statearr_46937;
})();
if(cljs.core.truth_(inst_46899)){
var statearr_46938_46969 = state_46910__$1;
(statearr_46938_46969[(1)] = (21));

} else {
var statearr_46939_46970 = state_46910__$1;
(statearr_46939_46970[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46911 === (5))){
var inst_46854 = cljs.core.async.close_BANG_.call(null,out);
var state_46910__$1 = state_46910;
var statearr_46940_46971 = state_46910__$1;
(statearr_46940_46971[(2)] = inst_46854);

(statearr_46940_46971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46911 === (14))){
var inst_46876 = (state_46910[(7)]);
var inst_46878 = cljs.core.chunked_seq_QMARK_.call(null,inst_46876);
var state_46910__$1 = state_46910;
if(inst_46878){
var statearr_46941_46972 = state_46910__$1;
(statearr_46941_46972[(1)] = (17));

} else {
var statearr_46942_46973 = state_46910__$1;
(statearr_46942_46973[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46911 === (16))){
var inst_46894 = (state_46910[(2)]);
var state_46910__$1 = state_46910;
var statearr_46943_46974 = state_46910__$1;
(statearr_46943_46974[(2)] = inst_46894);

(statearr_46943_46974[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46911 === (10))){
var inst_46863 = (state_46910[(8)]);
var inst_46865 = (state_46910[(11)]);
var inst_46870 = cljs.core._nth.call(null,inst_46863,inst_46865);
var state_46910__$1 = state_46910;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46910__$1,(13),out,inst_46870);
} else {
if((state_val_46911 === (18))){
var inst_46876 = (state_46910[(7)]);
var inst_46885 = cljs.core.first.call(null,inst_46876);
var state_46910__$1 = state_46910;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46910__$1,(20),out,inst_46885);
} else {
if((state_val_46911 === (8))){
var inst_46864 = (state_46910[(9)]);
var inst_46865 = (state_46910[(11)]);
var inst_46867 = (inst_46865 < inst_46864);
var inst_46868 = inst_46867;
var state_46910__$1 = state_46910;
if(cljs.core.truth_(inst_46868)){
var statearr_46944_46975 = state_46910__$1;
(statearr_46944_46975[(1)] = (10));

} else {
var statearr_46945_46976 = state_46910__$1;
(statearr_46945_46976[(1)] = (11));

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
});})(c__28544__auto__))
;
return ((function (switch__28523__auto__,c__28544__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28524__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28524__auto____0 = (function (){
var statearr_46949 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46949[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28524__auto__);

(statearr_46949[(1)] = (1));

return statearr_46949;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28524__auto____1 = (function (state_46910){
while(true){
var ret_value__28525__auto__ = (function (){try{while(true){
var result__28526__auto__ = switch__28523__auto__.call(null,state_46910);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28526__auto__;
}
break;
}
}catch (e46950){if((e46950 instanceof Object)){
var ex__28527__auto__ = e46950;
var statearr_46951_46977 = state_46910;
(statearr_46951_46977[(5)] = ex__28527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46910);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46950;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46978 = state_46910;
state_46910 = G__46978;
continue;
} else {
return ret_value__28525__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28524__auto__ = function(state_46910){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28524__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28524__auto____1.call(this,state_46910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28524__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28524__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28524__auto__;
})()
;})(switch__28523__auto__,c__28544__auto__))
})();
var state__28546__auto__ = (function (){var statearr_46952 = f__28545__auto__.call(null);
(statearr_46952[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28544__auto__);

return statearr_46952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28546__auto__);
});})(c__28544__auto__))
);

return c__28544__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args46979 = [];
var len__25865__auto___46982 = arguments.length;
var i__25866__auto___46983 = (0);
while(true){
if((i__25866__auto___46983 < len__25865__auto___46982)){
args46979.push((arguments[i__25866__auto___46983]));

var G__46984 = (i__25866__auto___46983 + (1));
i__25866__auto___46983 = G__46984;
continue;
} else {
}
break;
}

var G__46981 = args46979.length;
switch (G__46981) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46979.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args46986 = [];
var len__25865__auto___46989 = arguments.length;
var i__25866__auto___46990 = (0);
while(true){
if((i__25866__auto___46990 < len__25865__auto___46989)){
args46986.push((arguments[i__25866__auto___46990]));

var G__46991 = (i__25866__auto___46990 + (1));
i__25866__auto___46990 = G__46991;
continue;
} else {
}
break;
}

var G__46988 = args46986.length;
switch (G__46988) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46986.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args46993 = [];
var len__25865__auto___47044 = arguments.length;
var i__25866__auto___47045 = (0);
while(true){
if((i__25866__auto___47045 < len__25865__auto___47044)){
args46993.push((arguments[i__25866__auto___47045]));

var G__47046 = (i__25866__auto___47045 + (1));
i__25866__auto___47045 = G__47046;
continue;
} else {
}
break;
}

var G__46995 = args46993.length;
switch (G__46995) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46993.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28544__auto___47048 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28544__auto___47048,out){
return (function (){
var f__28545__auto__ = (function (){var switch__28523__auto__ = ((function (c__28544__auto___47048,out){
return (function (state_47019){
var state_val_47020 = (state_47019[(1)]);
if((state_val_47020 === (7))){
var inst_47014 = (state_47019[(2)]);
var state_47019__$1 = state_47019;
var statearr_47021_47049 = state_47019__$1;
(statearr_47021_47049[(2)] = inst_47014);

(statearr_47021_47049[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47020 === (1))){
var inst_46996 = null;
var state_47019__$1 = (function (){var statearr_47022 = state_47019;
(statearr_47022[(7)] = inst_46996);

return statearr_47022;
})();
var statearr_47023_47050 = state_47019__$1;
(statearr_47023_47050[(2)] = null);

(statearr_47023_47050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47020 === (4))){
var inst_46999 = (state_47019[(8)]);
var inst_46999__$1 = (state_47019[(2)]);
var inst_47000 = (inst_46999__$1 == null);
var inst_47001 = cljs.core.not.call(null,inst_47000);
var state_47019__$1 = (function (){var statearr_47024 = state_47019;
(statearr_47024[(8)] = inst_46999__$1);

return statearr_47024;
})();
if(inst_47001){
var statearr_47025_47051 = state_47019__$1;
(statearr_47025_47051[(1)] = (5));

} else {
var statearr_47026_47052 = state_47019__$1;
(statearr_47026_47052[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47020 === (6))){
var state_47019__$1 = state_47019;
var statearr_47027_47053 = state_47019__$1;
(statearr_47027_47053[(2)] = null);

(statearr_47027_47053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47020 === (3))){
var inst_47016 = (state_47019[(2)]);
var inst_47017 = cljs.core.async.close_BANG_.call(null,out);
var state_47019__$1 = (function (){var statearr_47028 = state_47019;
(statearr_47028[(9)] = inst_47016);

return statearr_47028;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47019__$1,inst_47017);
} else {
if((state_val_47020 === (2))){
var state_47019__$1 = state_47019;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47019__$1,(4),ch);
} else {
if((state_val_47020 === (11))){
var inst_46999 = (state_47019[(8)]);
var inst_47008 = (state_47019[(2)]);
var inst_46996 = inst_46999;
var state_47019__$1 = (function (){var statearr_47029 = state_47019;
(statearr_47029[(10)] = inst_47008);

(statearr_47029[(7)] = inst_46996);

return statearr_47029;
})();
var statearr_47030_47054 = state_47019__$1;
(statearr_47030_47054[(2)] = null);

(statearr_47030_47054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47020 === (9))){
var inst_46999 = (state_47019[(8)]);
var state_47019__$1 = state_47019;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47019__$1,(11),out,inst_46999);
} else {
if((state_val_47020 === (5))){
var inst_46999 = (state_47019[(8)]);
var inst_46996 = (state_47019[(7)]);
var inst_47003 = cljs.core._EQ_.call(null,inst_46999,inst_46996);
var state_47019__$1 = state_47019;
if(inst_47003){
var statearr_47032_47055 = state_47019__$1;
(statearr_47032_47055[(1)] = (8));

} else {
var statearr_47033_47056 = state_47019__$1;
(statearr_47033_47056[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47020 === (10))){
var inst_47011 = (state_47019[(2)]);
var state_47019__$1 = state_47019;
var statearr_47034_47057 = state_47019__$1;
(statearr_47034_47057[(2)] = inst_47011);

(statearr_47034_47057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47020 === (8))){
var inst_46996 = (state_47019[(7)]);
var tmp47031 = inst_46996;
var inst_46996__$1 = tmp47031;
var state_47019__$1 = (function (){var statearr_47035 = state_47019;
(statearr_47035[(7)] = inst_46996__$1);

return statearr_47035;
})();
var statearr_47036_47058 = state_47019__$1;
(statearr_47036_47058[(2)] = null);

(statearr_47036_47058[(1)] = (2));


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
});})(c__28544__auto___47048,out))
;
return ((function (switch__28523__auto__,c__28544__auto___47048,out){
return (function() {
var cljs$core$async$state_machine__28524__auto__ = null;
var cljs$core$async$state_machine__28524__auto____0 = (function (){
var statearr_47040 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47040[(0)] = cljs$core$async$state_machine__28524__auto__);

(statearr_47040[(1)] = (1));

return statearr_47040;
});
var cljs$core$async$state_machine__28524__auto____1 = (function (state_47019){
while(true){
var ret_value__28525__auto__ = (function (){try{while(true){
var result__28526__auto__ = switch__28523__auto__.call(null,state_47019);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28526__auto__;
}
break;
}
}catch (e47041){if((e47041 instanceof Object)){
var ex__28527__auto__ = e47041;
var statearr_47042_47059 = state_47019;
(statearr_47042_47059[(5)] = ex__28527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47019);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47041;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47060 = state_47019;
state_47019 = G__47060;
continue;
} else {
return ret_value__28525__auto__;
}
break;
}
});
cljs$core$async$state_machine__28524__auto__ = function(state_47019){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28524__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28524__auto____1.call(this,state_47019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28524__auto____0;
cljs$core$async$state_machine__28524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28524__auto____1;
return cljs$core$async$state_machine__28524__auto__;
})()
;})(switch__28523__auto__,c__28544__auto___47048,out))
})();
var state__28546__auto__ = (function (){var statearr_47043 = f__28545__auto__.call(null);
(statearr_47043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28544__auto___47048);

return statearr_47043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28546__auto__);
});})(c__28544__auto___47048,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args47061 = [];
var len__25865__auto___47131 = arguments.length;
var i__25866__auto___47132 = (0);
while(true){
if((i__25866__auto___47132 < len__25865__auto___47131)){
args47061.push((arguments[i__25866__auto___47132]));

var G__47133 = (i__25866__auto___47132 + (1));
i__25866__auto___47132 = G__47133;
continue;
} else {
}
break;
}

var G__47063 = args47061.length;
switch (G__47063) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47061.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28544__auto___47135 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28544__auto___47135,out){
return (function (){
var f__28545__auto__ = (function (){var switch__28523__auto__ = ((function (c__28544__auto___47135,out){
return (function (state_47101){
var state_val_47102 = (state_47101[(1)]);
if((state_val_47102 === (7))){
var inst_47097 = (state_47101[(2)]);
var state_47101__$1 = state_47101;
var statearr_47103_47136 = state_47101__$1;
(statearr_47103_47136[(2)] = inst_47097);

(statearr_47103_47136[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47102 === (1))){
var inst_47064 = (new Array(n));
var inst_47065 = inst_47064;
var inst_47066 = (0);
var state_47101__$1 = (function (){var statearr_47104 = state_47101;
(statearr_47104[(7)] = inst_47066);

(statearr_47104[(8)] = inst_47065);

return statearr_47104;
})();
var statearr_47105_47137 = state_47101__$1;
(statearr_47105_47137[(2)] = null);

(statearr_47105_47137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47102 === (4))){
var inst_47069 = (state_47101[(9)]);
var inst_47069__$1 = (state_47101[(2)]);
var inst_47070 = (inst_47069__$1 == null);
var inst_47071 = cljs.core.not.call(null,inst_47070);
var state_47101__$1 = (function (){var statearr_47106 = state_47101;
(statearr_47106[(9)] = inst_47069__$1);

return statearr_47106;
})();
if(inst_47071){
var statearr_47107_47138 = state_47101__$1;
(statearr_47107_47138[(1)] = (5));

} else {
var statearr_47108_47139 = state_47101__$1;
(statearr_47108_47139[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47102 === (15))){
var inst_47091 = (state_47101[(2)]);
var state_47101__$1 = state_47101;
var statearr_47109_47140 = state_47101__$1;
(statearr_47109_47140[(2)] = inst_47091);

(statearr_47109_47140[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47102 === (13))){
var state_47101__$1 = state_47101;
var statearr_47110_47141 = state_47101__$1;
(statearr_47110_47141[(2)] = null);

(statearr_47110_47141[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47102 === (6))){
var inst_47066 = (state_47101[(7)]);
var inst_47087 = (inst_47066 > (0));
var state_47101__$1 = state_47101;
if(cljs.core.truth_(inst_47087)){
var statearr_47111_47142 = state_47101__$1;
(statearr_47111_47142[(1)] = (12));

} else {
var statearr_47112_47143 = state_47101__$1;
(statearr_47112_47143[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47102 === (3))){
var inst_47099 = (state_47101[(2)]);
var state_47101__$1 = state_47101;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47101__$1,inst_47099);
} else {
if((state_val_47102 === (12))){
var inst_47065 = (state_47101[(8)]);
var inst_47089 = cljs.core.vec.call(null,inst_47065);
var state_47101__$1 = state_47101;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47101__$1,(15),out,inst_47089);
} else {
if((state_val_47102 === (2))){
var state_47101__$1 = state_47101;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47101__$1,(4),ch);
} else {
if((state_val_47102 === (11))){
var inst_47081 = (state_47101[(2)]);
var inst_47082 = (new Array(n));
var inst_47065 = inst_47082;
var inst_47066 = (0);
var state_47101__$1 = (function (){var statearr_47113 = state_47101;
(statearr_47113[(10)] = inst_47081);

(statearr_47113[(7)] = inst_47066);

(statearr_47113[(8)] = inst_47065);

return statearr_47113;
})();
var statearr_47114_47144 = state_47101__$1;
(statearr_47114_47144[(2)] = null);

(statearr_47114_47144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47102 === (9))){
var inst_47065 = (state_47101[(8)]);
var inst_47079 = cljs.core.vec.call(null,inst_47065);
var state_47101__$1 = state_47101;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47101__$1,(11),out,inst_47079);
} else {
if((state_val_47102 === (5))){
var inst_47066 = (state_47101[(7)]);
var inst_47074 = (state_47101[(11)]);
var inst_47065 = (state_47101[(8)]);
var inst_47069 = (state_47101[(9)]);
var inst_47073 = (inst_47065[inst_47066] = inst_47069);
var inst_47074__$1 = (inst_47066 + (1));
var inst_47075 = (inst_47074__$1 < n);
var state_47101__$1 = (function (){var statearr_47115 = state_47101;
(statearr_47115[(11)] = inst_47074__$1);

(statearr_47115[(12)] = inst_47073);

return statearr_47115;
})();
if(cljs.core.truth_(inst_47075)){
var statearr_47116_47145 = state_47101__$1;
(statearr_47116_47145[(1)] = (8));

} else {
var statearr_47117_47146 = state_47101__$1;
(statearr_47117_47146[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47102 === (14))){
var inst_47094 = (state_47101[(2)]);
var inst_47095 = cljs.core.async.close_BANG_.call(null,out);
var state_47101__$1 = (function (){var statearr_47119 = state_47101;
(statearr_47119[(13)] = inst_47094);

return statearr_47119;
})();
var statearr_47120_47147 = state_47101__$1;
(statearr_47120_47147[(2)] = inst_47095);

(statearr_47120_47147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47102 === (10))){
var inst_47085 = (state_47101[(2)]);
var state_47101__$1 = state_47101;
var statearr_47121_47148 = state_47101__$1;
(statearr_47121_47148[(2)] = inst_47085);

(statearr_47121_47148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47102 === (8))){
var inst_47074 = (state_47101[(11)]);
var inst_47065 = (state_47101[(8)]);
var tmp47118 = inst_47065;
var inst_47065__$1 = tmp47118;
var inst_47066 = inst_47074;
var state_47101__$1 = (function (){var statearr_47122 = state_47101;
(statearr_47122[(7)] = inst_47066);

(statearr_47122[(8)] = inst_47065__$1);

return statearr_47122;
})();
var statearr_47123_47149 = state_47101__$1;
(statearr_47123_47149[(2)] = null);

(statearr_47123_47149[(1)] = (2));


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
});})(c__28544__auto___47135,out))
;
return ((function (switch__28523__auto__,c__28544__auto___47135,out){
return (function() {
var cljs$core$async$state_machine__28524__auto__ = null;
var cljs$core$async$state_machine__28524__auto____0 = (function (){
var statearr_47127 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47127[(0)] = cljs$core$async$state_machine__28524__auto__);

(statearr_47127[(1)] = (1));

return statearr_47127;
});
var cljs$core$async$state_machine__28524__auto____1 = (function (state_47101){
while(true){
var ret_value__28525__auto__ = (function (){try{while(true){
var result__28526__auto__ = switch__28523__auto__.call(null,state_47101);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28526__auto__;
}
break;
}
}catch (e47128){if((e47128 instanceof Object)){
var ex__28527__auto__ = e47128;
var statearr_47129_47150 = state_47101;
(statearr_47129_47150[(5)] = ex__28527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47101);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47128;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47151 = state_47101;
state_47101 = G__47151;
continue;
} else {
return ret_value__28525__auto__;
}
break;
}
});
cljs$core$async$state_machine__28524__auto__ = function(state_47101){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28524__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28524__auto____1.call(this,state_47101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28524__auto____0;
cljs$core$async$state_machine__28524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28524__auto____1;
return cljs$core$async$state_machine__28524__auto__;
})()
;})(switch__28523__auto__,c__28544__auto___47135,out))
})();
var state__28546__auto__ = (function (){var statearr_47130 = f__28545__auto__.call(null);
(statearr_47130[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28544__auto___47135);

return statearr_47130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28546__auto__);
});})(c__28544__auto___47135,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args47152 = [];
var len__25865__auto___47226 = arguments.length;
var i__25866__auto___47227 = (0);
while(true){
if((i__25866__auto___47227 < len__25865__auto___47226)){
args47152.push((arguments[i__25866__auto___47227]));

var G__47228 = (i__25866__auto___47227 + (1));
i__25866__auto___47227 = G__47228;
continue;
} else {
}
break;
}

var G__47154 = args47152.length;
switch (G__47154) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47152.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28544__auto___47230 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28544__auto___47230,out){
return (function (){
var f__28545__auto__ = (function (){var switch__28523__auto__ = ((function (c__28544__auto___47230,out){
return (function (state_47196){
var state_val_47197 = (state_47196[(1)]);
if((state_val_47197 === (7))){
var inst_47192 = (state_47196[(2)]);
var state_47196__$1 = state_47196;
var statearr_47198_47231 = state_47196__$1;
(statearr_47198_47231[(2)] = inst_47192);

(statearr_47198_47231[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47197 === (1))){
var inst_47155 = [];
var inst_47156 = inst_47155;
var inst_47157 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_47196__$1 = (function (){var statearr_47199 = state_47196;
(statearr_47199[(7)] = inst_47157);

(statearr_47199[(8)] = inst_47156);

return statearr_47199;
})();
var statearr_47200_47232 = state_47196__$1;
(statearr_47200_47232[(2)] = null);

(statearr_47200_47232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47197 === (4))){
var inst_47160 = (state_47196[(9)]);
var inst_47160__$1 = (state_47196[(2)]);
var inst_47161 = (inst_47160__$1 == null);
var inst_47162 = cljs.core.not.call(null,inst_47161);
var state_47196__$1 = (function (){var statearr_47201 = state_47196;
(statearr_47201[(9)] = inst_47160__$1);

return statearr_47201;
})();
if(inst_47162){
var statearr_47202_47233 = state_47196__$1;
(statearr_47202_47233[(1)] = (5));

} else {
var statearr_47203_47234 = state_47196__$1;
(statearr_47203_47234[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47197 === (15))){
var inst_47186 = (state_47196[(2)]);
var state_47196__$1 = state_47196;
var statearr_47204_47235 = state_47196__$1;
(statearr_47204_47235[(2)] = inst_47186);

(statearr_47204_47235[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47197 === (13))){
var state_47196__$1 = state_47196;
var statearr_47205_47236 = state_47196__$1;
(statearr_47205_47236[(2)] = null);

(statearr_47205_47236[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47197 === (6))){
var inst_47156 = (state_47196[(8)]);
var inst_47181 = inst_47156.length;
var inst_47182 = (inst_47181 > (0));
var state_47196__$1 = state_47196;
if(cljs.core.truth_(inst_47182)){
var statearr_47206_47237 = state_47196__$1;
(statearr_47206_47237[(1)] = (12));

} else {
var statearr_47207_47238 = state_47196__$1;
(statearr_47207_47238[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47197 === (3))){
var inst_47194 = (state_47196[(2)]);
var state_47196__$1 = state_47196;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47196__$1,inst_47194);
} else {
if((state_val_47197 === (12))){
var inst_47156 = (state_47196[(8)]);
var inst_47184 = cljs.core.vec.call(null,inst_47156);
var state_47196__$1 = state_47196;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47196__$1,(15),out,inst_47184);
} else {
if((state_val_47197 === (2))){
var state_47196__$1 = state_47196;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47196__$1,(4),ch);
} else {
if((state_val_47197 === (11))){
var inst_47160 = (state_47196[(9)]);
var inst_47164 = (state_47196[(10)]);
var inst_47174 = (state_47196[(2)]);
var inst_47175 = [];
var inst_47176 = inst_47175.push(inst_47160);
var inst_47156 = inst_47175;
var inst_47157 = inst_47164;
var state_47196__$1 = (function (){var statearr_47208 = state_47196;
(statearr_47208[(7)] = inst_47157);

(statearr_47208[(11)] = inst_47176);

(statearr_47208[(8)] = inst_47156);

(statearr_47208[(12)] = inst_47174);

return statearr_47208;
})();
var statearr_47209_47239 = state_47196__$1;
(statearr_47209_47239[(2)] = null);

(statearr_47209_47239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47197 === (9))){
var inst_47156 = (state_47196[(8)]);
var inst_47172 = cljs.core.vec.call(null,inst_47156);
var state_47196__$1 = state_47196;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47196__$1,(11),out,inst_47172);
} else {
if((state_val_47197 === (5))){
var inst_47160 = (state_47196[(9)]);
var inst_47157 = (state_47196[(7)]);
var inst_47164 = (state_47196[(10)]);
var inst_47164__$1 = f.call(null,inst_47160);
var inst_47165 = cljs.core._EQ_.call(null,inst_47164__$1,inst_47157);
var inst_47166 = cljs.core.keyword_identical_QMARK_.call(null,inst_47157,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_47167 = (inst_47165) || (inst_47166);
var state_47196__$1 = (function (){var statearr_47210 = state_47196;
(statearr_47210[(10)] = inst_47164__$1);

return statearr_47210;
})();
if(cljs.core.truth_(inst_47167)){
var statearr_47211_47240 = state_47196__$1;
(statearr_47211_47240[(1)] = (8));

} else {
var statearr_47212_47241 = state_47196__$1;
(statearr_47212_47241[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47197 === (14))){
var inst_47189 = (state_47196[(2)]);
var inst_47190 = cljs.core.async.close_BANG_.call(null,out);
var state_47196__$1 = (function (){var statearr_47214 = state_47196;
(statearr_47214[(13)] = inst_47189);

return statearr_47214;
})();
var statearr_47215_47242 = state_47196__$1;
(statearr_47215_47242[(2)] = inst_47190);

(statearr_47215_47242[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47197 === (10))){
var inst_47179 = (state_47196[(2)]);
var state_47196__$1 = state_47196;
var statearr_47216_47243 = state_47196__$1;
(statearr_47216_47243[(2)] = inst_47179);

(statearr_47216_47243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47197 === (8))){
var inst_47160 = (state_47196[(9)]);
var inst_47156 = (state_47196[(8)]);
var inst_47164 = (state_47196[(10)]);
var inst_47169 = inst_47156.push(inst_47160);
var tmp47213 = inst_47156;
var inst_47156__$1 = tmp47213;
var inst_47157 = inst_47164;
var state_47196__$1 = (function (){var statearr_47217 = state_47196;
(statearr_47217[(7)] = inst_47157);

(statearr_47217[(8)] = inst_47156__$1);

(statearr_47217[(14)] = inst_47169);

return statearr_47217;
})();
var statearr_47218_47244 = state_47196__$1;
(statearr_47218_47244[(2)] = null);

(statearr_47218_47244[(1)] = (2));


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
});})(c__28544__auto___47230,out))
;
return ((function (switch__28523__auto__,c__28544__auto___47230,out){
return (function() {
var cljs$core$async$state_machine__28524__auto__ = null;
var cljs$core$async$state_machine__28524__auto____0 = (function (){
var statearr_47222 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47222[(0)] = cljs$core$async$state_machine__28524__auto__);

(statearr_47222[(1)] = (1));

return statearr_47222;
});
var cljs$core$async$state_machine__28524__auto____1 = (function (state_47196){
while(true){
var ret_value__28525__auto__ = (function (){try{while(true){
var result__28526__auto__ = switch__28523__auto__.call(null,state_47196);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28526__auto__;
}
break;
}
}catch (e47223){if((e47223 instanceof Object)){
var ex__28527__auto__ = e47223;
var statearr_47224_47245 = state_47196;
(statearr_47224_47245[(5)] = ex__28527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47196);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47223;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47246 = state_47196;
state_47196 = G__47246;
continue;
} else {
return ret_value__28525__auto__;
}
break;
}
});
cljs$core$async$state_machine__28524__auto__ = function(state_47196){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28524__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28524__auto____1.call(this,state_47196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28524__auto____0;
cljs$core$async$state_machine__28524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28524__auto____1;
return cljs$core$async$state_machine__28524__auto__;
})()
;})(switch__28523__auto__,c__28544__auto___47230,out))
})();
var state__28546__auto__ = (function (){var statearr_47225 = f__28545__auto__.call(null);
(statearr_47225[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28544__auto___47230);

return statearr_47225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28546__auto__);
});})(c__28544__auto___47230,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1484800033576