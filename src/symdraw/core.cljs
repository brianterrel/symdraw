(ns symdraw.core
  (:require [reagent.core :as reagent]))

(enable-console-print!)

(println "Sandwiches, also the game.")

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (reagent/atom {:title "Symdraw"
                                  :circles []}))

(defn draw-at-cursor [event]
  (let [x-offset (.-left (.getBoundingClientRect (. js/document (getElementById "main-svg"))))
        x-position (.-clientX event)
        x-svg (- x-position x-offset)
        y-offset (.-top (.getBoundingClientRect (. js/document (getElementById "main-svg"))))
        y-position (.-clientY event)
        y-svg (- y-position y-offset)]
    (swap! app-state update-in [:circles] conj [:circle {:r 10
                                                         :cx x-svg
                                                         :cy y-svg}])))

(defn mouse-move-handler [event]
  (if (= 1 (.-buttons event)) (draw-at-cursor event)))


(defn symdraw []
  [:center
    [:div
      [:h1 (:title @app-state)]
      [:h2 (:text @app-state)]
      (into
        [:svg {:id "main-svg"
               :width 500
               :height 500

               :on-mouse-move mouse-move-handler}]
        (for [j (:circles @app-state)] j))
      [:p
        [:button
          {:on-click (fn [] (swap! app-state assoc-in [:circles] []))}
          "Reset"]]]])


(reagent/render-component [symdraw]
                          (. js/document (getElementById "app")))

;(defn on-js-reload []
;   (swap! app-state assoc-in [:text] "Sandwich"))
