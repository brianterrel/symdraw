(ns symdraw.core
  (:require [reagent.core :as reagent]))

(enable-console-print!)

(println "This text is printed from src/symdraw/core.cljs.
         Go ahead and edit it and see reloading in action.")

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (reagent/atom {:title "Symdraw"
                                  :circles []}))
(defn click-handler []
  (swap! app-state update-in [:circles] conj [:circle {:r (rand-int 10)
                                                       :cx (rand-int 100)
                                                       :cy (rand-int 100)}]))


(defn symdraw []
  [:center
    [:div
      [:h1 (:title @app-state)]
      (into
        [:svg {:view-box "0 0 100 100"
               :width 500
               :height 500
               :on-click click-handler}]
        (for [j (:circles @app-state)] j))
      [:p
        [:button
          {:on-click (fn [] (swap! app-state assoc-in [:circles] []))}
          "Reset"]]]])

(reagent/render-component [symdraw]
                          (. js/document (getElementById "app")))

;(defn on-js-reload []
;   (swap! app-state assoc-in [:text] "Sandwich"))
