// Compiled by ClojureScript 1.9.229 {}
goog.provide('symdraw.core');
goog.require('cljs.core');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Sandwiches, also the game.");
if(typeof symdraw.core.app_state !== 'undefined'){
} else {
symdraw.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Testing",new cljs.core.Keyword(null,"circles","circles",-1947060917),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"sym","sym",-1444860305),(5),new cljs.core.Keyword(null,"color","color",1011675173),"red"], null));
}
symdraw.core.coords_from_event = (function symdraw$core$coords_from_event(event){
var x_offset = document.getElementById("main-svg").getBoundingClientRect().left;
var x_position = event.clientX;
var x = (x_position - x_offset);
var y_offset = document.getElementById("main-svg").getBoundingClientRect().top;
var y_position = event.clientY;
var y = (y_position - y_offset);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
});
symdraw.core.create_circle = (function symdraw$core$create_circle(radius,center){
return cljs.core.swap_BANG_.call(null,symdraw.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circles","circles",-1947060917)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),radius,new cljs.core.Keyword(null,"cx","cx",1272694324),cljs.core.first.call(null,center),new cljs.core.Keyword(null,"cy","cy",755331060),cljs.core.rest.call(null,center),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,symdraw.core.app_state))], null)], null));
});
symdraw.core.square = (function symdraw$core$square(x){
return (x * x);
});
/**
 * Returns the Euclidean distance between two points
 */
symdraw.core.magnitude = (function symdraw$core$magnitude(point_1,point_2){
var vec__55807 = point_1;
var x1 = cljs.core.nth.call(null,vec__55807,(0),null);
var y1 = cljs.core.nth.call(null,vec__55807,(1),null);
var vec__55810 = point_2;
var x2 = cljs.core.nth.call(null,vec__55810,(0),null);
var y2 = cljs.core.nth.call(null,vec__55810,(1),null);
return Math.sqrt((symdraw.core.square.call(null,(x1 - x2)) + symdraw.core.square.call(null,(y1 - y2))));
});
/**
 * Given a point, find the points corresponding to it by a given symmetry
 */
symdraw.core.sym_points = (function symdraw$core$sym_points(point,center,sym){
var vec__55819 = point;
var x = cljs.core.nth.call(null,vec__55819,(0),null);
var y = cljs.core.nth.call(null,vec__55819,(1),null);
var radius = symdraw.core.magnitude.call(null,point,center);
var sym_angle = (((2) * Math.PI) / sym);
var vec__55822 = center;
var cx = cljs.core.nth.call(null,vec__55822,(0),null);
var cy = cljs.core.nth.call(null,vec__55822,(1),null);
var remaining = sym;
var point_vec = cljs.core.PersistentVector.EMPTY;
var loop_x = x;
var loop_y = y;
var theta = Math.asin(((y - cy) / radius));
while(true){
if(cljs.core._EQ_.call(null,remaining,(0))){
return point_vec;
} else {
var G__55825 = (remaining - (1));
var G__55826 = cljs.core.conj.call(null,point_vec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [loop_x,loop_y], null));
var G__55827 = (((x > cx))?(cx - (radius * Math.cos((Math.PI - (theta + sym_angle))))):(cx + (radius * Math.cos((Math.PI - (theta + sym_angle))))));
var G__55828 = (cy + (radius * Math.sin((Math.PI - (theta + sym_angle)))));
var G__55829 = (theta + sym_angle);
remaining = G__55825;
point_vec = G__55826;
loop_x = G__55827;
loop_y = G__55828;
theta = G__55829;
continue;
}
break;
}
});
/**
 * Make circles from a list of points
 */
symdraw.core.circles_from_list = (function symdraw$core$circles_from_list(radius,points){
var loop_point = cljs.core.first.call(null,points);
var further_points = cljs.core.rest.call(null,points);
while(true){
if((loop_point == null)){
return null;
} else {
symdraw.core.create_circle.call(null,radius,loop_point);

var G__55830 = cljs.core.first.call(null,further_points);
var G__55831 = cljs.core.rest.call(null,further_points);
loop_point = G__55830;
further_points = G__55831;
continue;
}
break;
}
});
symdraw.core.svg_click_handler = (function symdraw$core$svg_click_handler(event){
return symdraw.core.circles_from_list.call(null,(10),symdraw.core.sym_points.call(null,symdraw.core.coords_from_event.call(null,event),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(250),(250)], null),new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,symdraw.core.app_state))));
});
symdraw.core.svg_mouse_move_handler = (function symdraw$core$svg_mouse_move_handler(event){
if(cljs.core._EQ_.call(null,(1),event.buttons)){
return symdraw.core.circles_from_list.call(null,(10),symdraw.core.sym_points.call(null,symdraw.core.coords_from_event.call(null,event),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(250),(250)], null),new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,symdraw.core.app_state))));
} else {
return null;
}
});
symdraw.core.slider_handler = (function symdraw$core$slider_handler(){
return cljs.core.swap_BANG_.call(null,symdraw.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sym","sym",-1444860305)], null),document.getElementById("sym-slider").value);
});
symdraw.core.swap_color = (function symdraw$core$swap_color(event){
return cljs.core.swap_BANG_.call(null,symdraw.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173)], null),event.target.id);
});
symdraw.core.symdraw = (function symdraw$core$symdraw(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,symdraw.core.app_state))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str("Symmetry: "),cljs.core.str(new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,symdraw.core.app_state)))].join(''),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"sym-slider",new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"min","min",444991522),(3),new cljs.core.Keyword(null,"max","max",61366548),(9),new cljs.core.Keyword(null,"on-change","on-change",-732046149),symdraw.core.slider_handler], null)], null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"colors",new cljs.core.Keyword(null,"width","width",-384071477),(70),new cljs.core.Keyword(null,"height","height",1025178622),(500)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),new cljs.core.Keyword(null,"height","height",1025178622)],[(10),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,symdraw.core.app_state)),"black"))?"black":"white"),0.5,"black",(50),symdraw.core.swap_color,(5),"black",(10),(1),(50)])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),new cljs.core.Keyword(null,"height","height",1025178622)],[(70),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,symdraw.core.app_state)),"blue"))?"black":"white"),0.5,"blue",(50),symdraw.core.swap_color,(5),"blue",(10),(1),(50)])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),new cljs.core.Keyword(null,"height","height",1025178622)],[(130),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,symdraw.core.app_state)),"red"))?"black":"white"),0.5,"red",(50),symdraw.core.swap_color,(5),"red",(10),(1),(50)])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),new cljs.core.Keyword(null,"height","height",1025178622)],[(190),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,symdraw.core.app_state)),"green"))?"black":"white"),0.5,"green",(50),symdraw.core.swap_color,(5),"green",(10),(1),(50)])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),new cljs.core.Keyword(null,"height","height",1025178622)],[(250),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,symdraw.core.app_state)),"yellow"))?"black":"white"),0.5,"yellow",(50),symdraw.core.swap_color,(5),"yellow",(10),(1),(50)])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),new cljs.core.Keyword(null,"height","height",1025178622)],[(310),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,symdraw.core.app_state)),"white"))?"black":"grey"),0.5,"white",(50),symdraw.core.swap_color,(5),"white",(10),(1),(50)])], null)], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"main-svg",new cljs.core.Keyword(null,"width","width",-384071477),(500),new cljs.core.Keyword(null,"height","height",1025178622),(500),new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874),symdraw.core.svg_mouse_move_handler,new cljs.core.Keyword(null,"on-click","on-click",1632826543),symdraw.core.svg_click_handler], null)], null),(function (){var iter__25570__auto__ = (function symdraw$core$symdraw_$_iter__55836(s__55837){
return (new cljs.core.LazySeq(null,(function (){
var s__55837__$1 = s__55837;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__55837__$1);
if(temp__4657__auto__){
var s__55837__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__55837__$2)){
var c__25568__auto__ = cljs.core.chunk_first.call(null,s__55837__$2);
var size__25569__auto__ = cljs.core.count.call(null,c__25568__auto__);
var b__55839 = cljs.core.chunk_buffer.call(null,size__25569__auto__);
if((function (){var i__55838 = (0);
while(true){
if((i__55838 < size__25569__auto__)){
var j = cljs.core._nth.call(null,c__25568__auto__,i__55838);
cljs.core.chunk_append.call(null,b__55839,j);

var G__55840 = (i__55838 + (1));
i__55838 = G__55840;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55839),symdraw$core$symdraw_$_iter__55836.call(null,cljs.core.chunk_rest.call(null,s__55837__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55839),null);
}
} else {
var j = cljs.core.first.call(null,s__55837__$2);
return cljs.core.cons.call(null,j,symdraw$core$symdraw_$_iter__55836.call(null,cljs.core.rest.call(null,s__55837__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25570__auto__.call(null,new cljs.core.Keyword(null,"circles","circles",-1947060917).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,symdraw.core.app_state)));
})()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,symdraw.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circles","circles",-1947060917)], null),cljs.core.PersistentVector.EMPTY);
})], null),"Reset"], null)], null)], null)], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [symdraw.core.symdraw], null),document.getElementById("app"));

//# sourceMappingURL=core.js.map?rel=1484802072411