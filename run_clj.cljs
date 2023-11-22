(ns run-clj
  (:require
    [nbb.core           :as nbb]
    [promesa.core       :as p]
    [reagent.dom.server :as rds]))


(defmacro last-form
  [& body]
  (last body))


(defn compile-file
  [file-name]
  (p/let [;; @note manually reload deps or they won't be picked up on change
          dep-a         (nbb/slurp "./src/extra/components.cljs")
          result-dep-a  (nbb/load-string dep-a)
          result        (nbb/load-file file-name)]
    (rds/render-to-static-markup (last-form result))))

(nbb/await
  (compile-file "./src/test.cljs"))
