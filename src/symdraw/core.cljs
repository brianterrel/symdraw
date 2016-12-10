(ns symdraw.core
  (:require [reagent.core :as reagent]))

(enable-console-print!)

(println "This text is printed from src/symdraw/core.cljs.
         Go ahead and edit it and see reloading in action.")

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (reagent/atom {:title "Symdraw"
                                  :circles []
                                  :text "Narnia"}))
(defn click-handler [event]
  (do
    (swap! app-state update-in [:circles] conj [:circle {:r 20
                                                         :cx (rand-int 500)
                                                         :cy (rand-int 500)}])
    (swap! app-state assoc-in [:text] (str "X: " (aget event "screenX")))))

(defn symdraw []
  [:center
    [:div
      [:h1 (:title @app-state)]
      [:h2 (:text @app-state)]
      (into
        [:svg {:width 500
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
