(ns run-clj
  (:require
    [nbb.core           :as nbb]
    [promesa.core       :as p]
    [reagent.dom.server :as rds]))

(comment
  (p/let [components-res (nbb/slurp "./src/test.cljs")]
    (-> (nbb/load-string components-res)
        (.then (fn [result]
                 (js/console.log "SLURP TEST 1: " (rds/render-to-static-markup (last-form result)))
                 (js/console.log "SLURP TEST 2: " (rds/render-to-static-markup (last-form result))))))))


(defmacro last-form
  [& body]
  (last body))


(defn compile-file
  [file-name]
  (-> (nbb/load-file file-name)
      (.then (fn [result]
               (rds/render-to-static-markup (last-form result))))))


(p/let [resp (compile-file "./src/test.cljs")]
  resp)
