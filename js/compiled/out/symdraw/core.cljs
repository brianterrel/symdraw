(ns symdraw.core
  (:require [reagent.core :as reagent]))

(enable-console-print!)

(println "Sandwiches, also the game.")

;; define your app data so that it doesn't get ovr-written on reload

(defonce app-state (reagent/atom {:title "Testing"
                                  :circles []
                                  :sym 5
                                  :color "red"}))

(defn coords-from-event [event]
  (let [x-offset (.-left (.getBoundingClientRect (. js/document (getElementById "main-svg"))))
        x-position (.-clientX event)
        x (- x-position x-offset)
        y-offset (.-top (.getBoundingClientRect (. js/document (getElementById "main-svg"))))
        y-position (.-clientY event)
        y (- y-position y-offset)]
    [x y]))

(defn create-circle [radius center]
  (swap! app-state update-in [:circles] conj [:circle {:r radius
                                                       :cx (first center)
                                                       :cy (rest center)
                                                       :fill (:color @app-state)}]))
(defn square [x] (* x x))

(defn magnitude
  "Returns the Euclidean distance between two points"
  [point-1 point-2]
  (let [[x1 y1] point-1
        [x2 y2] point-2]
    (Math/sqrt (+ (square (- x1 x2))
                  (square (- y1 y2))))))


(defn sym-points
  "Given a point, find the points corresponding to it by a given symmetry"
  [point center sym]
  (let [[x y] point
        radius (magnitude point center)
        sym-angle (/ (* 2 Math/PI) sym)
        [cx cy] center]
    (loop [remaining sym
           point-vec []
           loop-x x
           loop-y y
           theta (Math/asin (/ (- y cy) radius))]

      (if (= remaining 0) point-vec
          (recur (dec remaining)
                 (conj point-vec [loop-x loop-y])
                 ;I don't know *exactly* why this fixes the bug, but its almost 4am!
                 (if (> x cx)
                   (- cx (* radius (Math/cos (- Math/PI (+ theta sym-angle)))))
                   (+ cx (* radius (Math/cos (- Math/PI (+ theta sym-angle))))))
                 (+ cy (* radius (Math/sin (- Math/PI (+ theta sym-angle)))))
                 (+ theta sym-angle))))))

(defn circles-from-list
  "Make circles from a list of points"
  [radius points]
  (loop [loop-point (first points)
         further-points (rest points)]
    (if (nil? loop-point) nil
      (do
        (create-circle radius loop-point)
        (recur
          (first further-points)
          (rest further-points))))))

(defn svg-click-handler [event]
  (circles-from-list 10 (sym-points (coords-from-event event) [250 250] (:sym @app-state))))

(defn svg-mouse-move-handler [event]
  (if (= 1 (.-buttons event))(circles-from-list 10 (sym-points (coords-from-event event) [250 250] (:sym @app-state)))))

(defn slider-handler []
  (swap! app-state assoc-in [:sym] (.-value (. js/document (getElementById "sym-slider")))))

(defn swap-color [event]
  (swap! app-state assoc-in [:color] (.-id (.-target event))))



(defn symdraw []
  [:center
    [:div
      [:h1 (:title @app-state)]
      [:p (str "Symmetry: " (:sym @app-state))
        [:br]
        [:input {:id "sym-slider"
                 :type "range"
                 :min 3
                 :max 9
                 :on-change slider-handler}]]
      [:svg {:id "colors"
             :width 70
             :height 500}
            [:rect {:x 10
                    :y 10
                    :width 50
                    :height 50
                    :fill "black"
                    :stroke (if (= (:color @app-state) "black") "black" "white")
                    :stroke-width 5
                    :fill-opacity 1
                    :stroke-opacity 0.5
                    :on-click swap-color
                    :id "black"}]

            [:rect {:x 10
                    :y 70
                    :width 50
                    :height 50
                    :fill "blue"
                    :stroke (if (= (:color @app-state) "blue") "black" "white")
                    :stroke-width 5
                    :fill-opacity 1
                    :stroke-opacity 0.5
                    :on-click swap-color
                    :id "blue"}]

            [:rect {:x 10
                    :y 130
                    :width 50
                    :height 50
                    :fill "red"
                    :stroke (if (= (:color @app-state) "red") "black" "white")
                    :stroke-width 5
                    :fill-opacity 1
                    :stroke-opacity 0.5
                    :on-click swap-color
                    :id "red"}]

            [:rect {:x 10
                    :y 190
                    :width 50
                    :height 50
                    :fill "green"
                    :stroke (if (= (:color @app-state) "green") "black" "white")
                    :stroke-width 5
                    :fill-opacity 1
                    :stroke-opacity 0.5
                    :on-click swap-color
                    :id "green"}]

            [:rect {:x 10
                    :y 250
                    :width 50
                    :height 50
                    :fill "yellow"
                    :stroke (if (= (:color @app-state) "yellow") "black" "white")
                    :stroke-width 5
                    :fill-opacity 1
                    :stroke-opacity 0.5
                    :on-click swap-color
                    :id "yellow"}]

            [:rect {:x 10
                    :y 310
                    :width 50
                    :height 50
                    :fill "white"
                    :stroke (if (= (:color @app-state) "white") "black" "grey")
                    :stroke-width 5
                    :fill-opacity 1
                    :stroke-opacity 0.5
                    :on-click swap-color
                    :id "white"}]]



      (into
        [:svg {:id "main-svg"
               :width 500
               :height 500
               :on-mouse-move svg-mouse-move-handler
               :on-click svg-click-handler}]
        (for [j (:circles @app-state)] j))
      [:p
        [:button
          {:on-click (fn [] (swap! app-state assoc-in [:circles] []))}
          "Reset"]]]])


(reagent/render-component [symdraw]
                          (. js/document (getElementById "app")))

;(defn on-js-reload []
;   (swap! app-state assoc-in [:title] "Sandwich"))
