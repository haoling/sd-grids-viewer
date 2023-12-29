var eM = Object.defineProperty;
var tM = (c, a, s) => a in c ? eM(c, a, { enumerable: !0, configurable: !0, writable: !0, value: s }) : c[a] = s;
var Yo = (c, a, s) => (tM(c, typeof a != "symbol" ? a + "" : a, s), s);
(function() {
  const a = document.createElement("link").relList;
  if (a && a.supports && a.supports("modulepreload"))
    return;
  for (const y of document.querySelectorAll('link[rel="modulepreload"]'))
    p(y);
  new MutationObserver((y) => {
    for (const C of y)
      if (C.type === "childList")
        for (const T of C.addedNodes)
          T.tagName === "LINK" && T.rel === "modulepreload" && p(T);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(y) {
    const C = {};
    return y.integrity && (C.integrity = y.integrity), y.referrerPolicy && (C.referrerPolicy = y.referrerPolicy), y.crossOrigin === "use-credentials" ? C.credentials = "include" : y.crossOrigin === "anonymous" ? C.credentials = "omit" : C.credentials = "same-origin", C;
  }
  function p(y) {
    if (y.ep)
      return;
    y.ep = !0;
    const C = s(y);
    fetch(y.href, C);
  }
})();
function V1(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
var wC = { exports: {} }, Dv = {}, RC = { exports: {} }, Lv = { exports: {} };
Lv.exports;
var $R;
function nM() {
  return $R || ($R = 1, function(c, a) {
    var s = {};
    /**
     * @license React
     * react.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    s.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var p = "18.2.0", y = Symbol.for("react.element"), C = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), k = Symbol.for("react.provider"), D = Symbol.for("react.context"), M = Symbol.for("react.forward_ref"), I = Symbol.for("react.suspense"), H = Symbol.for("react.suspense_list"), B = Symbol.for("react.memo"), X = Symbol.for("react.lazy"), pe = Symbol.for("react.offscreen"), we = Symbol.iterator, ze = "@@iterator";
      function ge(S) {
        if (S === null || typeof S != "object")
          return null;
        var A = we && S[we] || S[ze];
        return typeof A == "function" ? A : null;
      }
      var ae = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Ce = {
        transition: null
      }, oe = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, Ne = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, De = {}, tt = null;
      function vt(S) {
        tt = S;
      }
      De.setExtraStackFrame = function(S) {
        tt = S;
      }, De.getCurrentStack = null, De.getStackAddendum = function() {
        var S = "";
        tt && (S += tt);
        var A = De.getCurrentStack;
        return A && (S += A() || ""), S;
      };
      var ot = !1, at = !1, ct = !1, je = !1, Ze = !1, qe = {
        ReactCurrentDispatcher: ae,
        ReactCurrentBatchConfig: Ce,
        ReactCurrentOwner: Ne
      };
      qe.ReactDebugCurrentFrame = De, qe.ReactCurrentActQueue = oe;
      function We(S) {
        {
          for (var A = arguments.length, W = new Array(A > 1 ? A - 1 : 0), q = 1; q < A; q++)
            W[q - 1] = arguments[q];
          be("warn", S, W);
        }
      }
      function ee(S) {
        {
          for (var A = arguments.length, W = new Array(A > 1 ? A - 1 : 0), q = 1; q < A; q++)
            W[q - 1] = arguments[q];
          be("error", S, W);
        }
      }
      function be(S, A, W) {
        {
          var q = qe.ReactDebugCurrentFrame, he = q.getStackAddendum();
          he !== "" && (A += "%s", W = W.concat([he]));
          var $e = W.map(function(ke) {
            return String(ke);
          });
          $e.unshift("Warning: " + A), Function.prototype.apply.call(console[S], console, $e);
        }
      }
      var L = {};
      function ne(S, A) {
        {
          var W = S.constructor, q = W && (W.displayName || W.name) || "ReactClass", he = q + "." + A;
          if (L[he])
            return;
          ee("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", A, q), L[he] = !0;
        }
      }
      var Re = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(S) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(S, A, W) {
          ne(S, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(S, A, W, q) {
          ne(S, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(S, A, W, q) {
          ne(S, "setState");
        }
      }, Je = Object.assign, Qe = {};
      Object.freeze(Qe);
      function gt(S, A, W) {
        this.props = S, this.context = A, this.refs = Qe, this.updater = W || Re;
      }
      gt.prototype.isReactComponent = {}, gt.prototype.setState = function(S, A) {
        if (typeof S != "object" && typeof S != "function" && S != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, S, A, "setState");
      }, gt.prototype.forceUpdate = function(S) {
        this.updater.enqueueForceUpdate(this, S, "forceUpdate");
      };
      {
        var Et = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, wt = function(S, A) {
          Object.defineProperty(gt.prototype, S, {
            get: function() {
              We("%s(...) is deprecated in plain JavaScript React classes. %s", A[0], A[1]);
            }
          });
        };
        for (var mt in Et)
          Et.hasOwnProperty(mt) && wt(mt, Et[mt]);
      }
      function Zt() {
      }
      Zt.prototype = gt.prototype;
      function ir(S, A, W) {
        this.props = S, this.context = A, this.refs = Qe, this.updater = W || Re;
      }
      var Hn = ir.prototype = new Zt();
      Hn.constructor = ir, Je(Hn, gt.prototype), Hn.isPureReactComponent = !0;
      function Mr() {
        var S = {
          current: null
        };
        return Object.seal(S), S;
      }
      var ar = Array.isArray;
      function Sn(S) {
        return ar(S);
      }
      function or(S) {
        {
          var A = typeof Symbol == "function" && Symbol.toStringTag, W = A && S[Symbol.toStringTag] || S.constructor.name || "Object";
          return W;
        }
      }
      function kn(S) {
        try {
          return wn(S), !1;
        } catch {
          return !0;
        }
      }
      function wn(S) {
        return "" + S;
      }
      function Ln(S) {
        if (kn(S))
          return ee("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", or(S)), wn(S);
      }
      function Sr(S, A, W) {
        var q = S.displayName;
        if (q)
          return q;
        var he = A.displayName || A.name || "";
        return he !== "" ? W + "(" + he + ")" : W;
      }
      function Cn(S) {
        return S.displayName || "Context";
      }
      function bn(S) {
        if (S == null)
          return null;
        if (typeof S.tag == "number" && ee("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof S == "function")
          return S.displayName || S.name || null;
        if (typeof S == "string")
          return S;
        switch (S) {
          case T:
            return "Fragment";
          case C:
            return "Portal";
          case O:
            return "Profiler";
          case E:
            return "StrictMode";
          case I:
            return "Suspense";
          case H:
            return "SuspenseList";
        }
        if (typeof S == "object")
          switch (S.$$typeof) {
            case D:
              var A = S;
              return Cn(A) + ".Consumer";
            case k:
              var W = S;
              return Cn(W._context) + ".Provider";
            case M:
              return Sr(S, S.render, "ForwardRef");
            case B:
              var q = S.displayName || null;
              return q !== null ? q : bn(S.type) || "Memo";
            case X: {
              var he = S, $e = he._payload, ke = he._init;
              try {
                return bn(ke($e));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var zr = Object.prototype.hasOwnProperty, Ur = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, qn, Pr, Zn;
      Zn = {};
      function dr(S) {
        if (zr.call(S, "ref")) {
          var A = Object.getOwnPropertyDescriptor(S, "ref").get;
          if (A && A.isReactWarning)
            return !1;
        }
        return S.ref !== void 0;
      }
      function ln(S) {
        if (zr.call(S, "key")) {
          var A = Object.getOwnPropertyDescriptor(S, "key").get;
          if (A && A.isReactWarning)
            return !1;
        }
        return S.key !== void 0;
      }
      function Ri(S, A) {
        var W = function() {
          qn || (qn = !0, ee("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", A));
        };
        W.isReactWarning = !0, Object.defineProperty(S, "key", {
          get: W,
          configurable: !0
        });
      }
      function xi(S, A) {
        var W = function() {
          Pr || (Pr = !0, ee("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", A));
        };
        W.isReactWarning = !0, Object.defineProperty(S, "ref", {
          get: W,
          configurable: !0
        });
      }
      function Di(S) {
        if (typeof S.ref == "string" && Ne.current && S.__self && Ne.current.stateNode !== S.__self) {
          var A = bn(Ne.current.type);
          Zn[A] || (ee('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', A, S.ref), Zn[A] = !0);
        }
      }
      var Se = function(S, A, W, q, he, $e, ke) {
        var pt = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: y,
          // Built-in properties that belong on the element
          type: S,
          key: A,
          ref: W,
          props: ke,
          // Record the component responsible for creating this element.
          _owner: $e
        };
        return pt._store = {}, Object.defineProperty(pt._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(pt, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: q
        }), Object.defineProperty(pt, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: he
        }), Object.freeze && (Object.freeze(pt.props), Object.freeze(pt)), pt;
      };
      function Xe(S, A, W) {
        var q, he = {}, $e = null, ke = null, pt = null, Ot = null;
        if (A != null) {
          dr(A) && (ke = A.ref, Di(A)), ln(A) && (Ln(A.key), $e = "" + A.key), pt = A.__self === void 0 ? null : A.__self, Ot = A.__source === void 0 ? null : A.__source;
          for (q in A)
            zr.call(A, q) && !Ur.hasOwnProperty(q) && (he[q] = A[q]);
        }
        var Xt = arguments.length - 2;
        if (Xt === 1)
          he.children = W;
        else if (Xt > 1) {
          for (var en = Array(Xt), tn = 0; tn < Xt; tn++)
            en[tn] = arguments[tn + 2];
          Object.freeze && Object.freeze(en), he.children = en;
        }
        if (S && S.defaultProps) {
          var nn = S.defaultProps;
          for (q in nn)
            he[q] === void 0 && (he[q] = nn[q]);
        }
        if ($e || ke) {
          var gn = typeof S == "function" ? S.displayName || S.name || "Unknown" : S;
          $e && Ri(he, gn), ke && xi(he, gn);
        }
        return Se(S, $e, ke, pt, Ot, Ne.current, he);
      }
      function xt(S, A) {
        var W = Se(S.type, A, S.ref, S._self, S._source, S._owner, S.props);
        return W;
      }
      function Kt(S, A, W) {
        if (S == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + S + ".");
        var q, he = Je({}, S.props), $e = S.key, ke = S.ref, pt = S._self, Ot = S._source, Xt = S._owner;
        if (A != null) {
          dr(A) && (ke = A.ref, Xt = Ne.current), ln(A) && (Ln(A.key), $e = "" + A.key);
          var en;
          S.type && S.type.defaultProps && (en = S.type.defaultProps);
          for (q in A)
            zr.call(A, q) && !Ur.hasOwnProperty(q) && (A[q] === void 0 && en !== void 0 ? he[q] = en[q] : he[q] = A[q]);
        }
        var tn = arguments.length - 2;
        if (tn === 1)
          he.children = W;
        else if (tn > 1) {
          for (var nn = Array(tn), gn = 0; gn < tn; gn++)
            nn[gn] = arguments[gn + 2];
          he.children = nn;
        }
        return Se(S.type, $e, ke, pt, Ot, Xt, he);
      }
      function $t(S) {
        return typeof S == "object" && S !== null && S.$$typeof === y;
      }
      var $n = ".", Rn = ":";
      function jr(S) {
        var A = /[=:]/g, W = {
          "=": "=0",
          ":": "=2"
        }, q = S.replace(A, function(he) {
          return W[he];
        });
        return "$" + q;
      }
      var Jt = !1, pr = /\/+/g;
      function Qt(S) {
        return S.replace(pr, "$&/");
      }
      function cn(S, A) {
        return typeof S == "object" && S !== null && S.key != null ? (Ln(S.key), jr("" + S.key)) : A.toString(36);
      }
      function ya(S, A, W, q, he) {
        var $e = typeof S;
        ($e === "undefined" || $e === "boolean") && (S = null);
        var ke = !1;
        if (S === null)
          ke = !0;
        else
          switch ($e) {
            case "string":
            case "number":
              ke = !0;
              break;
            case "object":
              switch (S.$$typeof) {
                case y:
                case C:
                  ke = !0;
              }
          }
        if (ke) {
          var pt = S, Ot = he(pt), Xt = q === "" ? $n + cn(pt, 0) : q;
          if (Sn(Ot)) {
            var en = "";
            Xt != null && (en = Qt(Xt) + "/"), ya(Ot, A, en, "", function(Np) {
              return Np;
            });
          } else
            Ot != null && ($t(Ot) && (Ot.key && (!pt || pt.key !== Ot.key) && Ln(Ot.key), Ot = xt(
              Ot,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              W + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (Ot.key && (!pt || pt.key !== Ot.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                Qt("" + Ot.key) + "/"
              ) : "") + Xt
            )), A.push(Ot));
          return 1;
        }
        var tn, nn, gn = 0, Ft = q === "" ? $n : q + Rn;
        if (Sn(S))
          for (var nl = 0; nl < S.length; nl++)
            tn = S[nl], nn = Ft + cn(tn, nl), gn += ya(tn, A, W, nn, he);
        else {
          var Vu = ge(S);
          if (typeof Vu == "function") {
            var lc = S;
            Vu === lc.entries && (Jt || We("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Jt = !0);
            for (var uc = Vu.call(lc), Eo, sc = 0; !(Eo = uc.next()).done; )
              tn = Eo.value, nn = Ft + cn(tn, sc++), gn += ya(tn, A, W, nn, he);
          } else if ($e === "object") {
            var cc = String(S);
            throw new Error("Objects are not valid as a React child (found: " + (cc === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : cc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return gn;
      }
      function Wi(S, A, W) {
        if (S == null)
          return S;
        var q = [], he = 0;
        return ya(S, q, "", "", function($e) {
          return A.call(W, $e, he++);
        }), q;
      }
      function Ko(S) {
        var A = 0;
        return Wi(S, function() {
          A++;
        }), A;
      }
      function jl(S, A, W) {
        Wi(S, function() {
          A.apply(this, arguments);
        }, W);
      }
      function Il(S) {
        return Wi(S, function(A) {
          return A;
        }) || [];
      }
      function Qo(S) {
        if (!$t(S))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return S;
      }
      function Ea(S) {
        var A = {
          $$typeof: D,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: S,
          _currentValue2: S,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        A.Provider = {
          $$typeof: k,
          _context: A
        };
        var W = !1, q = !1, he = !1;
        {
          var $e = {
            $$typeof: D,
            _context: A
          };
          Object.defineProperties($e, {
            Provider: {
              get: function() {
                return q || (q = !0, ee("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), A.Provider;
              },
              set: function(ke) {
                A.Provider = ke;
              }
            },
            _currentValue: {
              get: function() {
                return A._currentValue;
              },
              set: function(ke) {
                A._currentValue = ke;
              }
            },
            _currentValue2: {
              get: function() {
                return A._currentValue2;
              },
              set: function(ke) {
                A._currentValue2 = ke;
              }
            },
            _threadCount: {
              get: function() {
                return A._threadCount;
              },
              set: function(ke) {
                A._threadCount = ke;
              }
            },
            Consumer: {
              get: function() {
                return W || (W = !0, ee("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), A.Consumer;
              }
            },
            displayName: {
              get: function() {
                return A.displayName;
              },
              set: function(ke) {
                he || (We("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", ke), he = !0);
              }
            }
          }), A.Consumer = $e;
        }
        return A._currentRenderer = null, A._currentRenderer2 = null, A;
      }
      var _a = -1, Gi = 0, fo = 1, ri = 2;
      function ii(S) {
        if (S._status === _a) {
          var A = S._result, W = A();
          if (W.then(function($e) {
            if (S._status === Gi || S._status === _a) {
              var ke = S;
              ke._status = fo, ke._result = $e;
            }
          }, function($e) {
            if (S._status === Gi || S._status === _a) {
              var ke = S;
              ke._status = ri, ke._result = $e;
            }
          }), S._status === _a) {
            var q = S;
            q._status = Gi, q._result = W;
          }
        }
        if (S._status === fo) {
          var he = S._result;
          return he === void 0 && ee(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, he), "default" in he || ee(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, he), he.default;
        } else
          throw S._result;
      }
      function Oi(S) {
        var A = {
          // We use these fields to store the result.
          _status: _a,
          _result: S
        }, W = {
          $$typeof: X,
          _payload: A,
          _init: ii
        };
        {
          var q, he;
          Object.defineProperties(W, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return q;
              },
              set: function($e) {
                ee("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), q = $e, Object.defineProperty(W, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return he;
              },
              set: function($e) {
                ee("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), he = $e, Object.defineProperty(W, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return W;
      }
      function po(S) {
        S != null && S.$$typeof === B ? ee("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof S != "function" ? ee("forwardRef requires a render function but was given %s.", S === null ? "null" : typeof S) : S.length !== 0 && S.length !== 2 && ee("forwardRef render functions accept exactly two parameters: props and ref. %s", S.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), S != null && (S.defaultProps != null || S.propTypes != null) && ee("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var A = {
          $$typeof: M,
          render: S
        };
        {
          var W;
          Object.defineProperty(A, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return W;
            },
            set: function(q) {
              W = q, !S.name && !S.displayName && (S.displayName = q);
            }
          });
        }
        return A;
      }
      var N;
      N = Symbol.for("react.module.reference");
      function ue(S) {
        return !!(typeof S == "string" || typeof S == "function" || S === T || S === O || Ze || S === E || S === I || S === H || je || S === pe || ot || at || ct || typeof S == "object" && S !== null && (S.$$typeof === X || S.$$typeof === B || S.$$typeof === k || S.$$typeof === D || S.$$typeof === M || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        S.$$typeof === N || S.getModuleId !== void 0));
      }
      function Ee(S, A) {
        ue(S) || ee("memo: The first argument must be a component. Instead received: %s", S === null ? "null" : typeof S);
        var W = {
          $$typeof: B,
          type: S,
          compare: A === void 0 ? null : A
        };
        {
          var q;
          Object.defineProperty(W, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return q;
            },
            set: function(he) {
              q = he, !S.name && !S.displayName && (S.displayName = he);
            }
          });
        }
        return W;
      }
      function Te() {
        var S = ae.current;
        return S === null && ee(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), S;
      }
      function Nt(S) {
        var A = Te();
        if (S._context !== void 0) {
          var W = S._context;
          W.Consumer === S ? ee("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : W.Provider === S && ee("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return A.useContext(S);
      }
      function zt(S) {
        var A = Te();
        return A.useState(S);
      }
      function Rt(S, A, W) {
        var q = Te();
        return q.useReducer(S, A, W);
      }
      function et(S) {
        var A = Te();
        return A.useRef(S);
      }
      function Jn(S, A) {
        var W = Te();
        return W.useEffect(S, A);
      }
      function fn(S, A) {
        var W = Te();
        return W.useInsertionEffect(S, A);
      }
      function dn(S, A) {
        var W = Te();
        return W.useLayoutEffect(S, A);
      }
      function Ir(S, A) {
        var W = Te();
        return W.useCallback(S, A);
      }
      function Pa(S, A) {
        var W = Te();
        return W.useMemo(S, A);
      }
      function pn(S, A, W) {
        var q = Te();
        return q.useImperativeHandle(S, A, W);
      }
      function ai(S, A) {
        {
          var W = Te();
          return W.useDebugValue(S, A);
        }
      }
      function Xs() {
        var S = Te();
        return S.useTransition();
      }
      function ja(S) {
        var A = Te();
        return A.useDeferredValue(S);
      }
      function Dt() {
        var S = Te();
        return S.useId();
      }
      function Fl(S, A, W) {
        var q = Te();
        return q.useSyncExternalStore(S, A, W);
      }
      var ho = 0, Xo, oi, qs, Br, Zs, Js, ec;
      function Hl() {
      }
      Hl.__reactDisabledLog = !0;
      function zu() {
        {
          if (ho === 0) {
            Xo = console.log, oi = console.info, qs = console.warn, Br = console.error, Zs = console.group, Js = console.groupCollapsed, ec = console.groupEnd;
            var S = {
              configurable: !0,
              enumerable: !0,
              value: Hl,
              writable: !0
            };
            Object.defineProperties(console, {
              info: S,
              log: S,
              warn: S,
              error: S,
              group: S,
              groupCollapsed: S,
              groupEnd: S
            });
          }
          ho++;
        }
      }
      function vo() {
        {
          if (ho--, ho === 0) {
            var S = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: Je({}, S, {
                value: Xo
              }),
              info: Je({}, S, {
                value: oi
              }),
              warn: Je({}, S, {
                value: qs
              }),
              error: Je({}, S, {
                value: Br
              }),
              group: Je({}, S, {
                value: Zs
              }),
              groupCollapsed: Je({}, S, {
                value: Js
              }),
              groupEnd: Je({}, S, {
                value: ec
              })
            });
          }
          ho < 0 && ee("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Ia = qe.ReactCurrentDispatcher, Ki;
      function qo(S, A, W) {
        {
          if (Ki === void 0)
            try {
              throw Error();
            } catch (he) {
              var q = he.stack.trim().match(/\n( *(at )?)/);
              Ki = q && q[1] || "";
            }
          return `
` + Ki + S;
        }
      }
      var Fa = !1, $l;
      {
        var Vl = typeof WeakMap == "function" ? WeakMap : Map;
        $l = new Vl();
      }
      function Zo(S, A) {
        if (!S || Fa)
          return "";
        {
          var W = $l.get(S);
          if (W !== void 0)
            return W;
        }
        var q;
        Fa = !0;
        var he = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var $e;
        $e = Ia.current, Ia.current = null, zu();
        try {
          if (A) {
            var ke = function() {
              throw Error();
            };
            if (Object.defineProperty(ke.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(ke, []);
              } catch (Ft) {
                q = Ft;
              }
              Reflect.construct(S, [], ke);
            } else {
              try {
                ke.call();
              } catch (Ft) {
                q = Ft;
              }
              S.call(ke.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Ft) {
              q = Ft;
            }
            S();
          }
        } catch (Ft) {
          if (Ft && q && typeof Ft.stack == "string") {
            for (var pt = Ft.stack.split(`
`), Ot = q.stack.split(`
`), Xt = pt.length - 1, en = Ot.length - 1; Xt >= 1 && en >= 0 && pt[Xt] !== Ot[en]; )
              en--;
            for (; Xt >= 1 && en >= 0; Xt--, en--)
              if (pt[Xt] !== Ot[en]) {
                if (Xt !== 1 || en !== 1)
                  do
                    if (Xt--, en--, en < 0 || pt[Xt] !== Ot[en]) {
                      var tn = `
` + pt[Xt].replace(" at new ", " at ");
                      return S.displayName && tn.includes("<anonymous>") && (tn = tn.replace("<anonymous>", S.displayName)), typeof S == "function" && $l.set(S, tn), tn;
                    }
                  while (Xt >= 1 && en >= 0);
                break;
              }
          }
        } finally {
          Fa = !1, Ia.current = $e, vo(), Error.prepareStackTrace = he;
        }
        var nn = S ? S.displayName || S.name : "", gn = nn ? qo(nn) : "";
        return typeof S == "function" && $l.set(S, gn), gn;
      }
      function tc(S, A, W) {
        return Zo(S, !1);
      }
      function nc(S) {
        var A = S.prototype;
        return !!(A && A.isReactComponent);
      }
      function Mt(S, A, W) {
        if (S == null)
          return "";
        if (typeof S == "function")
          return Zo(S, nc(S));
        if (typeof S == "string")
          return qo(S);
        switch (S) {
          case I:
            return qo("Suspense");
          case H:
            return qo("SuspenseList");
        }
        if (typeof S == "object")
          switch (S.$$typeof) {
            case M:
              return tc(S.render);
            case B:
              return Mt(S.type, A, W);
            case X: {
              var q = S, he = q._payload, $e = q._init;
              try {
                return Mt($e(he), A, W);
              } catch {
              }
            }
          }
        return "";
      }
      var rc = {}, Uu = qe.ReactDebugCurrentFrame;
      function Jo(S) {
        if (S) {
          var A = S._owner, W = Mt(S.type, S._source, A ? A.type : null);
          Uu.setExtraStackFrame(W);
        } else
          Uu.setExtraStackFrame(null);
      }
      function ic(S, A, W, q, he) {
        {
          var $e = Function.call.bind(zr);
          for (var ke in S)
            if ($e(S, ke)) {
              var pt = void 0;
              try {
                if (typeof S[ke] != "function") {
                  var Ot = Error((q || "React class") + ": " + W + " type `" + ke + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof S[ke] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Ot.name = "Invariant Violation", Ot;
                }
                pt = S[ke](A, ke, q, W, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Xt) {
                pt = Xt;
              }
              pt && !(pt instanceof Error) && (Jo(he), ee("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", q || "React class", W, ke, typeof pt), Jo(null)), pt instanceof Error && !(pt.message in rc) && (rc[pt.message] = !0, Jo(he), ee("Failed %s type: %s", W, pt.message), Jo(null));
            }
        }
      }
      function It(S) {
        if (S) {
          var A = S._owner, W = Mt(S.type, S._source, A ? A.type : null);
          vt(W);
        } else
          vt(null);
      }
      var Pu;
      Pu = !1;
      function Bl() {
        if (Ne.current) {
          var S = bn(Ne.current.type);
          if (S)
            return `

Check the render method of \`` + S + "`.";
        }
        return "";
      }
      function yt(S) {
        if (S !== void 0) {
          var A = S.fileName.replace(/^.*[\\\/]/, ""), W = S.lineNumber;
          return `

Check your code at ` + A + ":" + W + ".";
        }
        return "";
      }
      function Sa(S) {
        return S != null ? yt(S.__source) : "";
      }
      var xn = {};
      function li(S) {
        var A = Bl();
        if (!A) {
          var W = typeof S == "string" ? S : S.displayName || S.name;
          W && (A = `

Check the top-level render call using <` + W + ">.");
        }
        return A;
      }
      function Qi(S, A) {
        if (!(!S._store || S._store.validated || S.key != null)) {
          S._store.validated = !0;
          var W = li(A);
          if (!xn[W]) {
            xn[W] = !0;
            var q = "";
            S && S._owner && S._owner !== Ne.current && (q = " It was passed a child from " + bn(S._owner.type) + "."), It(S), ee('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', W, q), It(null);
          }
        }
      }
      function el(S, A) {
        if (typeof S == "object") {
          if (Sn(S))
            for (var W = 0; W < S.length; W++) {
              var q = S[W];
              $t(q) && Qi(q, A);
            }
          else if ($t(S))
            S._store && (S._store.validated = !0);
          else if (S) {
            var he = ge(S);
            if (typeof he == "function" && he !== S.entries)
              for (var $e = he.call(S), ke; !(ke = $e.next()).done; )
                $t(ke.value) && Qi(ke.value, A);
          }
        }
      }
      function mn(S) {
        {
          var A = S.type;
          if (A == null || typeof A == "string")
            return;
          var W;
          if (typeof A == "function")
            W = A.propTypes;
          else if (typeof A == "object" && (A.$$typeof === M || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          A.$$typeof === B))
            W = A.propTypes;
          else
            return;
          if (W) {
            var q = bn(A);
            ic(W, S.props, "prop", q, S);
          } else if (A.PropTypes !== void 0 && !Pu) {
            Pu = !0;
            var he = bn(A);
            ee("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", he || "Unknown");
          }
          typeof A.getDefaultProps == "function" && !A.getDefaultProps.isReactClassApproved && ee("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Dn(S) {
        {
          for (var A = Object.keys(S.props), W = 0; W < A.length; W++) {
            var q = A[W];
            if (q !== "children" && q !== "key") {
              It(S), ee("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", q), It(null);
              break;
            }
          }
          S.ref !== null && (It(S), ee("Invalid attribute `ref` supplied to `React.Fragment`."), It(null));
        }
      }
      function ac(S, A, W) {
        var q = ue(S);
        if (!q) {
          var he = "";
          (S === void 0 || typeof S == "object" && S !== null && Object.keys(S).length === 0) && (he += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var $e = Sa(A);
          $e ? he += $e : he += Bl();
          var ke;
          S === null ? ke = "null" : Sn(S) ? ke = "array" : S !== void 0 && S.$$typeof === y ? (ke = "<" + (bn(S.type) || "Unknown") + " />", he = " Did you accidentally export a JSX literal instead of a component?") : ke = typeof S, ee("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ke, he);
        }
        var pt = Xe.apply(this, arguments);
        if (pt == null)
          return pt;
        if (q)
          for (var Ot = 2; Ot < arguments.length; Ot++)
            el(arguments[Ot], S);
        return S === T ? Dn(pt) : mn(pt), pt;
      }
      var Cr = !1;
      function ui(S) {
        var A = ac.bind(null, S);
        return A.type = S, Cr || (Cr = !0, We("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(A, "type", {
          enumerable: !1,
          get: function() {
            return We("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: S
            }), S;
          }
        }), A;
      }
      function Ca(S, A, W) {
        for (var q = Kt.apply(this, arguments), he = 2; he < arguments.length; he++)
          el(arguments[he], q.type);
        return mn(q), q;
      }
      function ju(S, A) {
        var W = Ce.transition;
        Ce.transition = {};
        var q = Ce.transition;
        Ce.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          S();
        } finally {
          if (Ce.transition = W, W === null && q._updatedFibers) {
            var he = q._updatedFibers.size;
            he > 10 && We("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), q._updatedFibers.clear();
          }
        }
      }
      var Yl = !1, Wl = null;
      function tl(S) {
        if (Wl === null)
          try {
            var A = ("require" + Math.random()).slice(0, 7), W = c && c[A];
            Wl = W.call(c, "timers").setImmediate;
          } catch {
            Wl = function(he) {
              Yl === !1 && (Yl = !0, typeof MessageChannel > "u" && ee("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var $e = new MessageChannel();
              $e.port1.onmessage = he, $e.port2.postMessage(void 0);
            };
          }
        return Wl(S);
      }
      var Xi = 0, mo = !1;
      function Iu(S) {
        {
          var A = Xi;
          Xi++, oe.current === null && (oe.current = []);
          var W = oe.isBatchingLegacy, q;
          try {
            if (oe.isBatchingLegacy = !0, q = S(), !W && oe.didScheduleLegacyUpdate) {
              var he = oe.current;
              he !== null && (oe.didScheduleLegacyUpdate = !1, yo(he));
            }
          } catch (nn) {
            throw go(A), nn;
          } finally {
            oe.isBatchingLegacy = W;
          }
          if (q !== null && typeof q == "object" && typeof q.then == "function") {
            var $e = q, ke = !1, pt = {
              then: function(nn, gn) {
                ke = !0, $e.then(function(Ft) {
                  go(A), Xi === 0 ? Fu(Ft, nn, gn) : nn(Ft);
                }, function(Ft) {
                  go(A), gn(Ft);
                });
              }
            };
            return !mo && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              ke || (mo = !0, ee("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), pt;
          } else {
            var Ot = q;
            if (go(A), Xi === 0) {
              var Xt = oe.current;
              Xt !== null && (yo(Xt), oe.current = null);
              var en = {
                then: function(nn, gn) {
                  oe.current === null ? (oe.current = [], Fu(Ot, nn, gn)) : nn(Ot);
                }
              };
              return en;
            } else {
              var tn = {
                then: function(nn, gn) {
                  nn(Ot);
                }
              };
              return tn;
            }
          }
        }
      }
      function go(S) {
        S !== Xi - 1 && ee("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Xi = S;
      }
      function Fu(S, A, W) {
        {
          var q = oe.current;
          if (q !== null)
            try {
              yo(q), tl(function() {
                q.length === 0 ? (oe.current = null, A(S)) : Fu(S, A, W);
              });
            } catch (he) {
              W(he);
            }
          else
            A(S);
        }
      }
      var Ha = !1;
      function yo(S) {
        if (!Ha) {
          Ha = !0;
          var A = 0;
          try {
            for (; A < S.length; A++) {
              var W = S[A];
              do
                W = W(!0);
              while (W !== null);
            }
            S.length = 0;
          } catch (q) {
            throw S = S.slice(A + 1), q;
          } finally {
            Ha = !1;
          }
        }
      }
      var Hu = ac, oc = Ca, ba = ui, $u = {
        map: Wi,
        forEach: jl,
        count: Ko,
        toArray: Il,
        only: Qo
      };
      a.Children = $u, a.Component = gt, a.Fragment = T, a.Profiler = O, a.PureComponent = ir, a.StrictMode = E, a.Suspense = I, a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = qe, a.cloneElement = oc, a.createContext = Ea, a.createElement = Hu, a.createFactory = ba, a.createRef = Mr, a.forwardRef = po, a.isValidElement = $t, a.lazy = Oi, a.memo = Ee, a.startTransition = ju, a.unstable_act = Iu, a.useCallback = Ir, a.useContext = Nt, a.useDebugValue = ai, a.useDeferredValue = ja, a.useEffect = Jn, a.useId = Dt, a.useImperativeHandle = pn, a.useInsertionEffect = fn, a.useLayoutEffect = dn, a.useMemo = Pa, a.useReducer = Rt, a.useRef = et, a.useState = zt, a.useSyncExternalStore = Fl, a.useTransition = Xs, a.version = p, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Lv, Lv.exports)), Lv.exports;
}
var jt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var VR;
function rM() {
  if (VR)
    return jt;
  VR = 1;
  var c = Symbol.for("react.element"), a = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), C = Symbol.for("react.provider"), T = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), k = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), M = Symbol.iterator;
  function I(L) {
    return L === null || typeof L != "object" ? null : (L = M && L[M] || L["@@iterator"], typeof L == "function" ? L : null);
  }
  var H = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, B = Object.assign, X = {};
  function pe(L, ne, Re) {
    this.props = L, this.context = ne, this.refs = X, this.updater = Re || H;
  }
  pe.prototype.isReactComponent = {}, pe.prototype.setState = function(L, ne) {
    if (typeof L != "object" && typeof L != "function" && L != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, L, ne, "setState");
  }, pe.prototype.forceUpdate = function(L) {
    this.updater.enqueueForceUpdate(this, L, "forceUpdate");
  };
  function we() {
  }
  we.prototype = pe.prototype;
  function ze(L, ne, Re) {
    this.props = L, this.context = ne, this.refs = X, this.updater = Re || H;
  }
  var ge = ze.prototype = new we();
  ge.constructor = ze, B(ge, pe.prototype), ge.isPureReactComponent = !0;
  var ae = Array.isArray, Ce = Object.prototype.hasOwnProperty, oe = { current: null }, Ne = { key: !0, ref: !0, __self: !0, __source: !0 };
  function De(L, ne, Re) {
    var Je, Qe = {}, gt = null, Et = null;
    if (ne != null)
      for (Je in ne.ref !== void 0 && (Et = ne.ref), ne.key !== void 0 && (gt = "" + ne.key), ne)
        Ce.call(ne, Je) && !Ne.hasOwnProperty(Je) && (Qe[Je] = ne[Je]);
    var wt = arguments.length - 2;
    if (wt === 1)
      Qe.children = Re;
    else if (1 < wt) {
      for (var mt = Array(wt), Zt = 0; Zt < wt; Zt++)
        mt[Zt] = arguments[Zt + 2];
      Qe.children = mt;
    }
    if (L && L.defaultProps)
      for (Je in wt = L.defaultProps, wt)
        Qe[Je] === void 0 && (Qe[Je] = wt[Je]);
    return { $$typeof: c, type: L, key: gt, ref: Et, props: Qe, _owner: oe.current };
  }
  function tt(L, ne) {
    return { $$typeof: c, type: L.type, key: ne, ref: L.ref, props: L.props, _owner: L._owner };
  }
  function vt(L) {
    return typeof L == "object" && L !== null && L.$$typeof === c;
  }
  function ot(L) {
    var ne = { "=": "=0", ":": "=2" };
    return "$" + L.replace(/[=:]/g, function(Re) {
      return ne[Re];
    });
  }
  var at = /\/+/g;
  function ct(L, ne) {
    return typeof L == "object" && L !== null && L.key != null ? ot("" + L.key) : ne.toString(36);
  }
  function je(L, ne, Re, Je, Qe) {
    var gt = typeof L;
    (gt === "undefined" || gt === "boolean") && (L = null);
    var Et = !1;
    if (L === null)
      Et = !0;
    else
      switch (gt) {
        case "string":
        case "number":
          Et = !0;
          break;
        case "object":
          switch (L.$$typeof) {
            case c:
            case a:
              Et = !0;
          }
      }
    if (Et)
      return Et = L, Qe = Qe(Et), L = Je === "" ? "." + ct(Et, 0) : Je, ae(Qe) ? (Re = "", L != null && (Re = L.replace(at, "$&/") + "/"), je(Qe, ne, Re, "", function(Zt) {
        return Zt;
      })) : Qe != null && (vt(Qe) && (Qe = tt(Qe, Re + (!Qe.key || Et && Et.key === Qe.key ? "" : ("" + Qe.key).replace(at, "$&/") + "/") + L)), ne.push(Qe)), 1;
    if (Et = 0, Je = Je === "" ? "." : Je + ":", ae(L))
      for (var wt = 0; wt < L.length; wt++) {
        gt = L[wt];
        var mt = Je + ct(gt, wt);
        Et += je(gt, ne, Re, mt, Qe);
      }
    else if (mt = I(L), typeof mt == "function")
      for (L = mt.call(L), wt = 0; !(gt = L.next()).done; )
        gt = gt.value, mt = Je + ct(gt, wt++), Et += je(gt, ne, Re, mt, Qe);
    else if (gt === "object")
      throw ne = String(L), Error("Objects are not valid as a React child (found: " + (ne === "[object Object]" ? "object with keys {" + Object.keys(L).join(", ") + "}" : ne) + "). If you meant to render a collection of children, use an array instead.");
    return Et;
  }
  function Ze(L, ne, Re) {
    if (L == null)
      return L;
    var Je = [], Qe = 0;
    return je(L, Je, "", "", function(gt) {
      return ne.call(Re, gt, Qe++);
    }), Je;
  }
  function qe(L) {
    if (L._status === -1) {
      var ne = L._result;
      ne = ne(), ne.then(function(Re) {
        (L._status === 0 || L._status === -1) && (L._status = 1, L._result = Re);
      }, function(Re) {
        (L._status === 0 || L._status === -1) && (L._status = 2, L._result = Re);
      }), L._status === -1 && (L._status = 0, L._result = ne);
    }
    if (L._status === 1)
      return L._result.default;
    throw L._result;
  }
  var We = { current: null }, ee = { transition: null }, be = { ReactCurrentDispatcher: We, ReactCurrentBatchConfig: ee, ReactCurrentOwner: oe };
  return jt.Children = { map: Ze, forEach: function(L, ne, Re) {
    Ze(L, function() {
      ne.apply(this, arguments);
    }, Re);
  }, count: function(L) {
    var ne = 0;
    return Ze(L, function() {
      ne++;
    }), ne;
  }, toArray: function(L) {
    return Ze(L, function(ne) {
      return ne;
    }) || [];
  }, only: function(L) {
    if (!vt(L))
      throw Error("React.Children.only expected to receive a single React element child.");
    return L;
  } }, jt.Component = pe, jt.Fragment = s, jt.Profiler = y, jt.PureComponent = ze, jt.StrictMode = p, jt.Suspense = O, jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = be, jt.cloneElement = function(L, ne, Re) {
    if (L == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + L + ".");
    var Je = B({}, L.props), Qe = L.key, gt = L.ref, Et = L._owner;
    if (ne != null) {
      if (ne.ref !== void 0 && (gt = ne.ref, Et = oe.current), ne.key !== void 0 && (Qe = "" + ne.key), L.type && L.type.defaultProps)
        var wt = L.type.defaultProps;
      for (mt in ne)
        Ce.call(ne, mt) && !Ne.hasOwnProperty(mt) && (Je[mt] = ne[mt] === void 0 && wt !== void 0 ? wt[mt] : ne[mt]);
    }
    var mt = arguments.length - 2;
    if (mt === 1)
      Je.children = Re;
    else if (1 < mt) {
      wt = Array(mt);
      for (var Zt = 0; Zt < mt; Zt++)
        wt[Zt] = arguments[Zt + 2];
      Je.children = wt;
    }
    return { $$typeof: c, type: L.type, key: Qe, ref: gt, props: Je, _owner: Et };
  }, jt.createContext = function(L) {
    return L = { $$typeof: T, _currentValue: L, _currentValue2: L, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, L.Provider = { $$typeof: C, _context: L }, L.Consumer = L;
  }, jt.createElement = De, jt.createFactory = function(L) {
    var ne = De.bind(null, L);
    return ne.type = L, ne;
  }, jt.createRef = function() {
    return { current: null };
  }, jt.forwardRef = function(L) {
    return { $$typeof: E, render: L };
  }, jt.isValidElement = vt, jt.lazy = function(L) {
    return { $$typeof: D, _payload: { _status: -1, _result: L }, _init: qe };
  }, jt.memo = function(L, ne) {
    return { $$typeof: k, type: L, compare: ne === void 0 ? null : ne };
  }, jt.startTransition = function(L) {
    var ne = ee.transition;
    ee.transition = {};
    try {
      L();
    } finally {
      ee.transition = ne;
    }
  }, jt.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, jt.useCallback = function(L, ne) {
    return We.current.useCallback(L, ne);
  }, jt.useContext = function(L) {
    return We.current.useContext(L);
  }, jt.useDebugValue = function() {
  }, jt.useDeferredValue = function(L) {
    return We.current.useDeferredValue(L);
  }, jt.useEffect = function(L, ne) {
    return We.current.useEffect(L, ne);
  }, jt.useId = function() {
    return We.current.useId();
  }, jt.useImperativeHandle = function(L, ne, Re) {
    return We.current.useImperativeHandle(L, ne, Re);
  }, jt.useInsertionEffect = function(L, ne) {
    return We.current.useInsertionEffect(L, ne);
  }, jt.useLayoutEffect = function(L, ne) {
    return We.current.useLayoutEffect(L, ne);
  }, jt.useMemo = function(L, ne) {
    return We.current.useMemo(L, ne);
  }, jt.useReducer = function(L, ne, Re) {
    return We.current.useReducer(L, ne, Re);
  }, jt.useRef = function(L) {
    return We.current.useRef(L);
  }, jt.useState = function(L) {
    return We.current.useState(L);
  }, jt.useSyncExternalStore = function(L, ne, Re) {
    return We.current.useSyncExternalStore(L, ne, Re);
  }, jt.useTransition = function() {
    return We.current.useTransition();
  }, jt.version = "18.2.0", jt;
}
var iM = {};
iM.NODE_ENV === "production" ? RC.exports = rM() : RC.exports = nM();
var Pe = RC.exports;
const aM = /* @__PURE__ */ V1(Pe);
var BR;
function oM() {
  if (BR)
    return Dv;
  BR = 1;
  var c = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return c.NODE_ENV !== "production" && function() {
    var a = Pe, s = Symbol.for("react.element"), p = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), O = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), D = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), I = Symbol.for("react.memo"), H = Symbol.for("react.lazy"), B = Symbol.for("react.offscreen"), X = Symbol.iterator, pe = "@@iterator";
    function we(N) {
      if (N === null || typeof N != "object")
        return null;
      var ue = X && N[X] || N[pe];
      return typeof ue == "function" ? ue : null;
    }
    var ze = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function ge(N) {
      {
        for (var ue = arguments.length, Ee = new Array(ue > 1 ? ue - 1 : 0), Te = 1; Te < ue; Te++)
          Ee[Te - 1] = arguments[Te];
        ae("error", N, Ee);
      }
    }
    function ae(N, ue, Ee) {
      {
        var Te = ze.ReactDebugCurrentFrame, Nt = Te.getStackAddendum();
        Nt !== "" && (ue += "%s", Ee = Ee.concat([Nt]));
        var zt = Ee.map(function(Rt) {
          return String(Rt);
        });
        zt.unshift("Warning: " + ue), Function.prototype.apply.call(console[N], console, zt);
      }
    }
    var Ce = !1, oe = !1, Ne = !1, De = !1, tt = !1, vt;
    vt = Symbol.for("react.module.reference");
    function ot(N) {
      return !!(typeof N == "string" || typeof N == "function" || N === y || N === T || tt || N === C || N === D || N === M || De || N === B || Ce || oe || Ne || typeof N == "object" && N !== null && (N.$$typeof === H || N.$$typeof === I || N.$$typeof === E || N.$$typeof === O || N.$$typeof === k || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      N.$$typeof === vt || N.getModuleId !== void 0));
    }
    function at(N, ue, Ee) {
      var Te = N.displayName;
      if (Te)
        return Te;
      var Nt = ue.displayName || ue.name || "";
      return Nt !== "" ? Ee + "(" + Nt + ")" : Ee;
    }
    function ct(N) {
      return N.displayName || "Context";
    }
    function je(N) {
      if (N == null)
        return null;
      if (typeof N.tag == "number" && ge("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof N == "function")
        return N.displayName || N.name || null;
      if (typeof N == "string")
        return N;
      switch (N) {
        case y:
          return "Fragment";
        case p:
          return "Portal";
        case T:
          return "Profiler";
        case C:
          return "StrictMode";
        case D:
          return "Suspense";
        case M:
          return "SuspenseList";
      }
      if (typeof N == "object")
        switch (N.$$typeof) {
          case O:
            var ue = N;
            return ct(ue) + ".Consumer";
          case E:
            var Ee = N;
            return ct(Ee._context) + ".Provider";
          case k:
            return at(N, N.render, "ForwardRef");
          case I:
            var Te = N.displayName || null;
            return Te !== null ? Te : je(N.type) || "Memo";
          case H: {
            var Nt = N, zt = Nt._payload, Rt = Nt._init;
            try {
              return je(Rt(zt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Ze = Object.assign, qe = 0, We, ee, be, L, ne, Re, Je;
    function Qe() {
    }
    Qe.__reactDisabledLog = !0;
    function gt() {
      {
        if (qe === 0) {
          We = console.log, ee = console.info, be = console.warn, L = console.error, ne = console.group, Re = console.groupCollapsed, Je = console.groupEnd;
          var N = {
            configurable: !0,
            enumerable: !0,
            value: Qe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: N,
            log: N,
            warn: N,
            error: N,
            group: N,
            groupCollapsed: N,
            groupEnd: N
          });
        }
        qe++;
      }
    }
    function Et() {
      {
        if (qe--, qe === 0) {
          var N = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ze({}, N, {
              value: We
            }),
            info: Ze({}, N, {
              value: ee
            }),
            warn: Ze({}, N, {
              value: be
            }),
            error: Ze({}, N, {
              value: L
            }),
            group: Ze({}, N, {
              value: ne
            }),
            groupCollapsed: Ze({}, N, {
              value: Re
            }),
            groupEnd: Ze({}, N, {
              value: Je
            })
          });
        }
        qe < 0 && ge("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var wt = ze.ReactCurrentDispatcher, mt;
    function Zt(N, ue, Ee) {
      {
        if (mt === void 0)
          try {
            throw Error();
          } catch (Nt) {
            var Te = Nt.stack.trim().match(/\n( *(at )?)/);
            mt = Te && Te[1] || "";
          }
        return `
` + mt + N;
      }
    }
    var ir = !1, Hn;
    {
      var Mr = typeof WeakMap == "function" ? WeakMap : Map;
      Hn = new Mr();
    }
    function ar(N, ue) {
      if (!N || ir)
        return "";
      {
        var Ee = Hn.get(N);
        if (Ee !== void 0)
          return Ee;
      }
      var Te;
      ir = !0;
      var Nt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var zt;
      zt = wt.current, wt.current = null, gt();
      try {
        if (ue) {
          var Rt = function() {
            throw Error();
          };
          if (Object.defineProperty(Rt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Rt, []);
            } catch (ai) {
              Te = ai;
            }
            Reflect.construct(N, [], Rt);
          } else {
            try {
              Rt.call();
            } catch (ai) {
              Te = ai;
            }
            N.call(Rt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ai) {
            Te = ai;
          }
          N();
        }
      } catch (ai) {
        if (ai && Te && typeof ai.stack == "string") {
          for (var et = ai.stack.split(`
`), Jn = Te.stack.split(`
`), fn = et.length - 1, dn = Jn.length - 1; fn >= 1 && dn >= 0 && et[fn] !== Jn[dn]; )
            dn--;
          for (; fn >= 1 && dn >= 0; fn--, dn--)
            if (et[fn] !== Jn[dn]) {
              if (fn !== 1 || dn !== 1)
                do
                  if (fn--, dn--, dn < 0 || et[fn] !== Jn[dn]) {
                    var Ir = `
` + et[fn].replace(" at new ", " at ");
                    return N.displayName && Ir.includes("<anonymous>") && (Ir = Ir.replace("<anonymous>", N.displayName)), typeof N == "function" && Hn.set(N, Ir), Ir;
                  }
                while (fn >= 1 && dn >= 0);
              break;
            }
        }
      } finally {
        ir = !1, wt.current = zt, Et(), Error.prepareStackTrace = Nt;
      }
      var Pa = N ? N.displayName || N.name : "", pn = Pa ? Zt(Pa) : "";
      return typeof N == "function" && Hn.set(N, pn), pn;
    }
    function Sn(N, ue, Ee) {
      return ar(N, !1);
    }
    function or(N) {
      var ue = N.prototype;
      return !!(ue && ue.isReactComponent);
    }
    function kn(N, ue, Ee) {
      if (N == null)
        return "";
      if (typeof N == "function")
        return ar(N, or(N));
      if (typeof N == "string")
        return Zt(N);
      switch (N) {
        case D:
          return Zt("Suspense");
        case M:
          return Zt("SuspenseList");
      }
      if (typeof N == "object")
        switch (N.$$typeof) {
          case k:
            return Sn(N.render);
          case I:
            return kn(N.type, ue, Ee);
          case H: {
            var Te = N, Nt = Te._payload, zt = Te._init;
            try {
              return kn(zt(Nt), ue, Ee);
            } catch {
            }
          }
        }
      return "";
    }
    var wn = Object.prototype.hasOwnProperty, Ln = {}, Sr = ze.ReactDebugCurrentFrame;
    function Cn(N) {
      if (N) {
        var ue = N._owner, Ee = kn(N.type, N._source, ue ? ue.type : null);
        Sr.setExtraStackFrame(Ee);
      } else
        Sr.setExtraStackFrame(null);
    }
    function bn(N, ue, Ee, Te, Nt) {
      {
        var zt = Function.call.bind(wn);
        for (var Rt in N)
          if (zt(N, Rt)) {
            var et = void 0;
            try {
              if (typeof N[Rt] != "function") {
                var Jn = Error((Te || "React class") + ": " + Ee + " type `" + Rt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof N[Rt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Jn.name = "Invariant Violation", Jn;
              }
              et = N[Rt](ue, Rt, Te, Ee, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (fn) {
              et = fn;
            }
            et && !(et instanceof Error) && (Cn(Nt), ge("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Te || "React class", Ee, Rt, typeof et), Cn(null)), et instanceof Error && !(et.message in Ln) && (Ln[et.message] = !0, Cn(Nt), ge("Failed %s type: %s", Ee, et.message), Cn(null));
          }
      }
    }
    var zr = Array.isArray;
    function Ur(N) {
      return zr(N);
    }
    function qn(N) {
      {
        var ue = typeof Symbol == "function" && Symbol.toStringTag, Ee = ue && N[Symbol.toStringTag] || N.constructor.name || "Object";
        return Ee;
      }
    }
    function Pr(N) {
      try {
        return Zn(N), !1;
      } catch {
        return !0;
      }
    }
    function Zn(N) {
      return "" + N;
    }
    function dr(N) {
      if (Pr(N))
        return ge("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qn(N)), Zn(N);
    }
    var ln = ze.ReactCurrentOwner, Ri = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, xi, Di, Se;
    Se = {};
    function Xe(N) {
      if (wn.call(N, "ref")) {
        var ue = Object.getOwnPropertyDescriptor(N, "ref").get;
        if (ue && ue.isReactWarning)
          return !1;
      }
      return N.ref !== void 0;
    }
    function xt(N) {
      if (wn.call(N, "key")) {
        var ue = Object.getOwnPropertyDescriptor(N, "key").get;
        if (ue && ue.isReactWarning)
          return !1;
      }
      return N.key !== void 0;
    }
    function Kt(N, ue) {
      if (typeof N.ref == "string" && ln.current && ue && ln.current.stateNode !== ue) {
        var Ee = je(ln.current.type);
        Se[Ee] || (ge('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', je(ln.current.type), N.ref), Se[Ee] = !0);
      }
    }
    function $t(N, ue) {
      {
        var Ee = function() {
          xi || (xi = !0, ge("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ue));
        };
        Ee.isReactWarning = !0, Object.defineProperty(N, "key", {
          get: Ee,
          configurable: !0
        });
      }
    }
    function $n(N, ue) {
      {
        var Ee = function() {
          Di || (Di = !0, ge("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ue));
        };
        Ee.isReactWarning = !0, Object.defineProperty(N, "ref", {
          get: Ee,
          configurable: !0
        });
      }
    }
    var Rn = function(N, ue, Ee, Te, Nt, zt, Rt) {
      var et = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: s,
        // Built-in properties that belong on the element
        type: N,
        key: ue,
        ref: Ee,
        props: Rt,
        // Record the component responsible for creating this element.
        _owner: zt
      };
      return et._store = {}, Object.defineProperty(et._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(et, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Te
      }), Object.defineProperty(et, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Nt
      }), Object.freeze && (Object.freeze(et.props), Object.freeze(et)), et;
    };
    function jr(N, ue, Ee, Te, Nt) {
      {
        var zt, Rt = {}, et = null, Jn = null;
        Ee !== void 0 && (dr(Ee), et = "" + Ee), xt(ue) && (dr(ue.key), et = "" + ue.key), Xe(ue) && (Jn = ue.ref, Kt(ue, Nt));
        for (zt in ue)
          wn.call(ue, zt) && !Ri.hasOwnProperty(zt) && (Rt[zt] = ue[zt]);
        if (N && N.defaultProps) {
          var fn = N.defaultProps;
          for (zt in fn)
            Rt[zt] === void 0 && (Rt[zt] = fn[zt]);
        }
        if (et || Jn) {
          var dn = typeof N == "function" ? N.displayName || N.name || "Unknown" : N;
          et && $t(Rt, dn), Jn && $n(Rt, dn);
        }
        return Rn(N, et, Jn, Nt, Te, ln.current, Rt);
      }
    }
    var Jt = ze.ReactCurrentOwner, pr = ze.ReactDebugCurrentFrame;
    function Qt(N) {
      if (N) {
        var ue = N._owner, Ee = kn(N.type, N._source, ue ? ue.type : null);
        pr.setExtraStackFrame(Ee);
      } else
        pr.setExtraStackFrame(null);
    }
    var cn;
    cn = !1;
    function ya(N) {
      return typeof N == "object" && N !== null && N.$$typeof === s;
    }
    function Wi() {
      {
        if (Jt.current) {
          var N = je(Jt.current.type);
          if (N)
            return `

Check the render method of \`` + N + "`.";
        }
        return "";
      }
    }
    function Ko(N) {
      {
        if (N !== void 0) {
          var ue = N.fileName.replace(/^.*[\\\/]/, ""), Ee = N.lineNumber;
          return `

Check your code at ` + ue + ":" + Ee + ".";
        }
        return "";
      }
    }
    var jl = {};
    function Il(N) {
      {
        var ue = Wi();
        if (!ue) {
          var Ee = typeof N == "string" ? N : N.displayName || N.name;
          Ee && (ue = `

Check the top-level render call using <` + Ee + ">.");
        }
        return ue;
      }
    }
    function Qo(N, ue) {
      {
        if (!N._store || N._store.validated || N.key != null)
          return;
        N._store.validated = !0;
        var Ee = Il(ue);
        if (jl[Ee])
          return;
        jl[Ee] = !0;
        var Te = "";
        N && N._owner && N._owner !== Jt.current && (Te = " It was passed a child from " + je(N._owner.type) + "."), Qt(N), ge('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Ee, Te), Qt(null);
      }
    }
    function Ea(N, ue) {
      {
        if (typeof N != "object")
          return;
        if (Ur(N))
          for (var Ee = 0; Ee < N.length; Ee++) {
            var Te = N[Ee];
            ya(Te) && Qo(Te, ue);
          }
        else if (ya(N))
          N._store && (N._store.validated = !0);
        else if (N) {
          var Nt = we(N);
          if (typeof Nt == "function" && Nt !== N.entries)
            for (var zt = Nt.call(N), Rt; !(Rt = zt.next()).done; )
              ya(Rt.value) && Qo(Rt.value, ue);
        }
      }
    }
    function _a(N) {
      {
        var ue = N.type;
        if (ue == null || typeof ue == "string")
          return;
        var Ee;
        if (typeof ue == "function")
          Ee = ue.propTypes;
        else if (typeof ue == "object" && (ue.$$typeof === k || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ue.$$typeof === I))
          Ee = ue.propTypes;
        else
          return;
        if (Ee) {
          var Te = je(ue);
          bn(Ee, N.props, "prop", Te, N);
        } else if (ue.PropTypes !== void 0 && !cn) {
          cn = !0;
          var Nt = je(ue);
          ge("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Nt || "Unknown");
        }
        typeof ue.getDefaultProps == "function" && !ue.getDefaultProps.isReactClassApproved && ge("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Gi(N) {
      {
        for (var ue = Object.keys(N.props), Ee = 0; Ee < ue.length; Ee++) {
          var Te = ue[Ee];
          if (Te !== "children" && Te !== "key") {
            Qt(N), ge("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Te), Qt(null);
            break;
          }
        }
        N.ref !== null && (Qt(N), ge("Invalid attribute `ref` supplied to `React.Fragment`."), Qt(null));
      }
    }
    function fo(N, ue, Ee, Te, Nt, zt) {
      {
        var Rt = ot(N);
        if (!Rt) {
          var et = "";
          (N === void 0 || typeof N == "object" && N !== null && Object.keys(N).length === 0) && (et += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Jn = Ko(Nt);
          Jn ? et += Jn : et += Wi();
          var fn;
          N === null ? fn = "null" : Ur(N) ? fn = "array" : N !== void 0 && N.$$typeof === s ? (fn = "<" + (je(N.type) || "Unknown") + " />", et = " Did you accidentally export a JSX literal instead of a component?") : fn = typeof N, ge("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", fn, et);
        }
        var dn = jr(N, ue, Ee, Nt, zt);
        if (dn == null)
          return dn;
        if (Rt) {
          var Ir = ue.children;
          if (Ir !== void 0)
            if (Te)
              if (Ur(Ir)) {
                for (var Pa = 0; Pa < Ir.length; Pa++)
                  Ea(Ir[Pa], N);
                Object.freeze && Object.freeze(Ir);
              } else
                ge("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ea(Ir, N);
        }
        return N === y ? Gi(dn) : _a(dn), dn;
      }
    }
    function ri(N, ue, Ee) {
      return fo(N, ue, Ee, !0);
    }
    function ii(N, ue, Ee) {
      return fo(N, ue, Ee, !1);
    }
    var Oi = ii, po = ri;
    Dv.Fragment = y, Dv.jsx = Oi, Dv.jsxs = po;
  }(), Dv;
}
var Ov = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var YR;
function lM() {
  if (YR)
    return Ov;
  YR = 1;
  var c = Pe, a = Symbol.for("react.element"), s = Symbol.for("react.fragment"), p = Object.prototype.hasOwnProperty, y = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, C = { key: !0, ref: !0, __self: !0, __source: !0 };
  function T(E, O, k) {
    var D, M = {}, I = null, H = null;
    k !== void 0 && (I = "" + k), O.key !== void 0 && (I = "" + O.key), O.ref !== void 0 && (H = O.ref);
    for (D in O)
      p.call(O, D) && !C.hasOwnProperty(D) && (M[D] = O[D]);
    if (E && E.defaultProps)
      for (D in O = E.defaultProps, O)
        M[D] === void 0 && (M[D] = O[D]);
    return { $$typeof: a, type: E, key: I, ref: H, props: M, _owner: y.current };
  }
  return Ov.Fragment = s, Ov.jsx = T, Ov.jsxs = T, Ov;
}
var uM = {};
uM.NODE_ENV === "production" ? wC.exports = lM() : wC.exports = oM();
var ie = wC.exports, Mv = {}, xC = { exports: {} }, ha = {}, Vy = { exports: {} }, J0 = {}, WR;
function sM() {
  return WR || (WR = 1, function(c) {
    var a = {};
    /**
     * @license React
     * scheduler.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    a.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var s = !1, p = !1, y = 5;
      function C(Se, Xe) {
        var xt = Se.length;
        Se.push(Xe), O(Se, Xe, xt);
      }
      function T(Se) {
        return Se.length === 0 ? null : Se[0];
      }
      function E(Se) {
        if (Se.length === 0)
          return null;
        var Xe = Se[0], xt = Se.pop();
        return xt !== Xe && (Se[0] = xt, k(Se, xt, 0)), Xe;
      }
      function O(Se, Xe, xt) {
        for (var Kt = xt; Kt > 0; ) {
          var $t = Kt - 1 >>> 1, $n = Se[$t];
          if (D($n, Xe) > 0)
            Se[$t] = Xe, Se[Kt] = $n, Kt = $t;
          else
            return;
        }
      }
      function k(Se, Xe, xt) {
        for (var Kt = xt, $t = Se.length, $n = $t >>> 1; Kt < $n; ) {
          var Rn = (Kt + 1) * 2 - 1, jr = Se[Rn], Jt = Rn + 1, pr = Se[Jt];
          if (D(jr, Xe) < 0)
            Jt < $t && D(pr, jr) < 0 ? (Se[Kt] = pr, Se[Jt] = Xe, Kt = Jt) : (Se[Kt] = jr, Se[Rn] = Xe, Kt = Rn);
          else if (Jt < $t && D(pr, Xe) < 0)
            Se[Kt] = pr, Se[Jt] = Xe, Kt = Jt;
          else
            return;
        }
      }
      function D(Se, Xe) {
        var xt = Se.sortIndex - Xe.sortIndex;
        return xt !== 0 ? xt : Se.id - Xe.id;
      }
      var M = 1, I = 2, H = 3, B = 4, X = 5;
      function pe(Se, Xe) {
      }
      var we = typeof performance == "object" && typeof performance.now == "function";
      if (we) {
        var ze = performance;
        c.unstable_now = function() {
          return ze.now();
        };
      } else {
        var ge = Date, ae = ge.now();
        c.unstable_now = function() {
          return ge.now() - ae;
        };
      }
      var Ce = 1073741823, oe = -1, Ne = 250, De = 5e3, tt = 1e4, vt = Ce, ot = [], at = [], ct = 1, je = null, Ze = H, qe = !1, We = !1, ee = !1, be = typeof setTimeout == "function" ? setTimeout : null, L = typeof clearTimeout == "function" ? clearTimeout : null, ne = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function Re(Se) {
        for (var Xe = T(at); Xe !== null; ) {
          if (Xe.callback === null)
            E(at);
          else if (Xe.startTime <= Se)
            E(at), Xe.sortIndex = Xe.expirationTime, C(ot, Xe);
          else
            return;
          Xe = T(at);
        }
      }
      function Je(Se) {
        if (ee = !1, Re(Se), !We)
          if (T(ot) !== null)
            We = !0, dr(Qe);
          else {
            var Xe = T(at);
            Xe !== null && ln(Je, Xe.startTime - Se);
          }
      }
      function Qe(Se, Xe) {
        We = !1, ee && (ee = !1, Ri()), qe = !0;
        var xt = Ze;
        try {
          var Kt;
          if (!p)
            return gt(Se, Xe);
        } finally {
          je = null, Ze = xt, qe = !1;
        }
      }
      function gt(Se, Xe) {
        var xt = Xe;
        for (Re(xt), je = T(ot); je !== null && !s && !(je.expirationTime > xt && (!Se || Cn())); ) {
          var Kt = je.callback;
          if (typeof Kt == "function") {
            je.callback = null, Ze = je.priorityLevel;
            var $t = je.expirationTime <= xt, $n = Kt($t);
            xt = c.unstable_now(), typeof $n == "function" ? je.callback = $n : je === T(ot) && E(ot), Re(xt);
          } else
            E(ot);
          je = T(ot);
        }
        if (je !== null)
          return !0;
        var Rn = T(at);
        return Rn !== null && ln(Je, Rn.startTime - xt), !1;
      }
      function Et(Se, Xe) {
        switch (Se) {
          case M:
          case I:
          case H:
          case B:
          case X:
            break;
          default:
            Se = H;
        }
        var xt = Ze;
        Ze = Se;
        try {
          return Xe();
        } finally {
          Ze = xt;
        }
      }
      function wt(Se) {
        var Xe;
        switch (Ze) {
          case M:
          case I:
          case H:
            Xe = H;
            break;
          default:
            Xe = Ze;
            break;
        }
        var xt = Ze;
        Ze = Xe;
        try {
          return Se();
        } finally {
          Ze = xt;
        }
      }
      function mt(Se) {
        var Xe = Ze;
        return function() {
          var xt = Ze;
          Ze = Xe;
          try {
            return Se.apply(this, arguments);
          } finally {
            Ze = xt;
          }
        };
      }
      function Zt(Se, Xe, xt) {
        var Kt = c.unstable_now(), $t;
        if (typeof xt == "object" && xt !== null) {
          var $n = xt.delay;
          typeof $n == "number" && $n > 0 ? $t = Kt + $n : $t = Kt;
        } else
          $t = Kt;
        var Rn;
        switch (Se) {
          case M:
            Rn = oe;
            break;
          case I:
            Rn = Ne;
            break;
          case X:
            Rn = vt;
            break;
          case B:
            Rn = tt;
            break;
          case H:
          default:
            Rn = De;
            break;
        }
        var jr = $t + Rn, Jt = {
          id: ct++,
          callback: Xe,
          priorityLevel: Se,
          startTime: $t,
          expirationTime: jr,
          sortIndex: -1
        };
        return $t > Kt ? (Jt.sortIndex = $t, C(at, Jt), T(ot) === null && Jt === T(at) && (ee ? Ri() : ee = !0, ln(Je, $t - Kt))) : (Jt.sortIndex = jr, C(ot, Jt), !We && !qe && (We = !0, dr(Qe))), Jt;
      }
      function ir() {
      }
      function Hn() {
        !We && !qe && (We = !0, dr(Qe));
      }
      function Mr() {
        return T(ot);
      }
      function ar(Se) {
        Se.callback = null;
      }
      function Sn() {
        return Ze;
      }
      var or = !1, kn = null, wn = -1, Ln = y, Sr = -1;
      function Cn() {
        var Se = c.unstable_now() - Sr;
        return !(Se < Ln);
      }
      function bn() {
      }
      function zr(Se) {
        if (Se < 0 || Se > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        Se > 0 ? Ln = Math.floor(1e3 / Se) : Ln = y;
      }
      var Ur = function() {
        if (kn !== null) {
          var Se = c.unstable_now();
          Sr = Se;
          var Xe = !0, xt = !0;
          try {
            xt = kn(Xe, Se);
          } finally {
            xt ? qn() : (or = !1, kn = null);
          }
        } else
          or = !1;
      }, qn;
      if (typeof ne == "function")
        qn = function() {
          ne(Ur);
        };
      else if (typeof MessageChannel < "u") {
        var Pr = new MessageChannel(), Zn = Pr.port2;
        Pr.port1.onmessage = Ur, qn = function() {
          Zn.postMessage(null);
        };
      } else
        qn = function() {
          be(Ur, 0);
        };
      function dr(Se) {
        kn = Se, or || (or = !0, qn());
      }
      function ln(Se, Xe) {
        wn = be(function() {
          Se(c.unstable_now());
        }, Xe);
      }
      function Ri() {
        L(wn), wn = -1;
      }
      var xi = bn, Di = null;
      c.unstable_IdlePriority = X, c.unstable_ImmediatePriority = M, c.unstable_LowPriority = B, c.unstable_NormalPriority = H, c.unstable_Profiling = Di, c.unstable_UserBlockingPriority = I, c.unstable_cancelCallback = ar, c.unstable_continueExecution = Hn, c.unstable_forceFrameRate = zr, c.unstable_getCurrentPriorityLevel = Sn, c.unstable_getFirstCallbackNode = Mr, c.unstable_next = wt, c.unstable_pauseExecution = ir, c.unstable_requestPaint = xi, c.unstable_runWithPriority = Et, c.unstable_scheduleCallback = Zt, c.unstable_shouldYield = Cn, c.unstable_wrapCallback = mt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(J0)), J0;
}
var eC = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var GR;
function cM() {
  return GR || (GR = 1, function(c) {
    function a(ee, be) {
      var L = ee.length;
      ee.push(be);
      e:
        for (; 0 < L; ) {
          var ne = L - 1 >>> 1, Re = ee[ne];
          if (0 < y(Re, be))
            ee[ne] = be, ee[L] = Re, L = ne;
          else
            break e;
        }
    }
    function s(ee) {
      return ee.length === 0 ? null : ee[0];
    }
    function p(ee) {
      if (ee.length === 0)
        return null;
      var be = ee[0], L = ee.pop();
      if (L !== be) {
        ee[0] = L;
        e:
          for (var ne = 0, Re = ee.length, Je = Re >>> 1; ne < Je; ) {
            var Qe = 2 * (ne + 1) - 1, gt = ee[Qe], Et = Qe + 1, wt = ee[Et];
            if (0 > y(gt, L))
              Et < Re && 0 > y(wt, gt) ? (ee[ne] = wt, ee[Et] = L, ne = Et) : (ee[ne] = gt, ee[Qe] = L, ne = Qe);
            else if (Et < Re && 0 > y(wt, L))
              ee[ne] = wt, ee[Et] = L, ne = Et;
            else
              break e;
          }
      }
      return be;
    }
    function y(ee, be) {
      var L = ee.sortIndex - be.sortIndex;
      return L !== 0 ? L : ee.id - be.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var C = performance;
      c.unstable_now = function() {
        return C.now();
      };
    } else {
      var T = Date, E = T.now();
      c.unstable_now = function() {
        return T.now() - E;
      };
    }
    var O = [], k = [], D = 1, M = null, I = 3, H = !1, B = !1, X = !1, pe = typeof setTimeout == "function" ? setTimeout : null, we = typeof clearTimeout == "function" ? clearTimeout : null, ze = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function ge(ee) {
      for (var be = s(k); be !== null; ) {
        if (be.callback === null)
          p(k);
        else if (be.startTime <= ee)
          p(k), be.sortIndex = be.expirationTime, a(O, be);
        else
          break;
        be = s(k);
      }
    }
    function ae(ee) {
      if (X = !1, ge(ee), !B)
        if (s(O) !== null)
          B = !0, qe(Ce);
        else {
          var be = s(k);
          be !== null && We(ae, be.startTime - ee);
        }
    }
    function Ce(ee, be) {
      B = !1, X && (X = !1, we(De), De = -1), H = !0;
      var L = I;
      try {
        for (ge(be), M = s(O); M !== null && (!(M.expirationTime > be) || ee && !ot()); ) {
          var ne = M.callback;
          if (typeof ne == "function") {
            M.callback = null, I = M.priorityLevel;
            var Re = ne(M.expirationTime <= be);
            be = c.unstable_now(), typeof Re == "function" ? M.callback = Re : M === s(O) && p(O), ge(be);
          } else
            p(O);
          M = s(O);
        }
        if (M !== null)
          var Je = !0;
        else {
          var Qe = s(k);
          Qe !== null && We(ae, Qe.startTime - be), Je = !1;
        }
        return Je;
      } finally {
        M = null, I = L, H = !1;
      }
    }
    var oe = !1, Ne = null, De = -1, tt = 5, vt = -1;
    function ot() {
      return !(c.unstable_now() - vt < tt);
    }
    function at() {
      if (Ne !== null) {
        var ee = c.unstable_now();
        vt = ee;
        var be = !0;
        try {
          be = Ne(!0, ee);
        } finally {
          be ? ct() : (oe = !1, Ne = null);
        }
      } else
        oe = !1;
    }
    var ct;
    if (typeof ze == "function")
      ct = function() {
        ze(at);
      };
    else if (typeof MessageChannel < "u") {
      var je = new MessageChannel(), Ze = je.port2;
      je.port1.onmessage = at, ct = function() {
        Ze.postMessage(null);
      };
    } else
      ct = function() {
        pe(at, 0);
      };
    function qe(ee) {
      Ne = ee, oe || (oe = !0, ct());
    }
    function We(ee, be) {
      De = pe(function() {
        ee(c.unstable_now());
      }, be);
    }
    c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(ee) {
      ee.callback = null;
    }, c.unstable_continueExecution = function() {
      B || H || (B = !0, qe(Ce));
    }, c.unstable_forceFrameRate = function(ee) {
      0 > ee || 125 < ee ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : tt = 0 < ee ? Math.floor(1e3 / ee) : 5;
    }, c.unstable_getCurrentPriorityLevel = function() {
      return I;
    }, c.unstable_getFirstCallbackNode = function() {
      return s(O);
    }, c.unstable_next = function(ee) {
      switch (I) {
        case 1:
        case 2:
        case 3:
          var be = 3;
          break;
        default:
          be = I;
      }
      var L = I;
      I = be;
      try {
        return ee();
      } finally {
        I = L;
      }
    }, c.unstable_pauseExecution = function() {
    }, c.unstable_requestPaint = function() {
    }, c.unstable_runWithPriority = function(ee, be) {
      switch (ee) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          ee = 3;
      }
      var L = I;
      I = ee;
      try {
        return be();
      } finally {
        I = L;
      }
    }, c.unstable_scheduleCallback = function(ee, be, L) {
      var ne = c.unstable_now();
      switch (typeof L == "object" && L !== null ? (L = L.delay, L = typeof L == "number" && 0 < L ? ne + L : ne) : L = ne, ee) {
        case 1:
          var Re = -1;
          break;
        case 2:
          Re = 250;
          break;
        case 5:
          Re = 1073741823;
          break;
        case 4:
          Re = 1e4;
          break;
        default:
          Re = 5e3;
      }
      return Re = L + Re, ee = { id: D++, callback: be, priorityLevel: ee, startTime: L, expirationTime: Re, sortIndex: -1 }, L > ne ? (ee.sortIndex = L, a(k, ee), s(O) === null && ee === s(k) && (X ? (we(De), De = -1) : X = !0, We(ae, L - ne))) : (ee.sortIndex = Re, a(O, ee), B || H || (B = !0, qe(Ce))), ee;
    }, c.unstable_shouldYield = ot, c.unstable_wrapCallback = function(ee) {
      var be = I;
      return function() {
        var L = I;
        I = be;
        try {
          return ee.apply(this, arguments);
        } finally {
          I = L;
        }
      };
    };
  }(eC)), eC;
}
var KR;
function B1() {
  if (KR)
    return Vy.exports;
  KR = 1;
  var c = {};
  return c.NODE_ENV === "production" ? Vy.exports = cM() : Vy.exports = sM(), Vy.exports;
}
var QR;
function fM() {
  if (QR)
    return ha;
  QR = 1;
  var c = {};
  /**
   * @license React
   * react-dom.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return c.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var a = Pe, s = B1(), p = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, y = !1;
    function C(e) {
      y = e;
    }
    function T(e) {
      if (!y) {
        for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          i[o - 1] = arguments[o];
        O("warn", e, i);
      }
    }
    function E(e) {
      if (!y) {
        for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          i[o - 1] = arguments[o];
        O("error", e, i);
      }
    }
    function O(e, t, i) {
      {
        var o = p.ReactDebugCurrentFrame, u = o.getStackAddendum();
        u !== "" && (t += "%s", i = i.concat([u]));
        var d = i.map(function(v) {
          return String(v);
        });
        d.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, d);
      }
    }
    var k = 0, D = 1, M = 2, I = 3, H = 4, B = 5, X = 6, pe = 7, we = 8, ze = 9, ge = 10, ae = 11, Ce = 12, oe = 13, Ne = 14, De = 15, tt = 16, vt = 17, ot = 18, at = 19, ct = 21, je = 22, Ze = 23, qe = 24, We = 25, ee = !0, be = !1, L = !1, ne = !1, Re = !1, Je = !0, Qe = !1, gt = !1, Et = !0, wt = !0, mt = !0, Zt = /* @__PURE__ */ new Set(), ir = {}, Hn = {};
    function Mr(e, t) {
      ar(e, t), ar(e + "Capture", t);
    }
    function ar(e, t) {
      ir[e] && E("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), ir[e] = t;
      {
        var i = e.toLowerCase();
        Hn[i] = e, e === "onDoubleClick" && (Hn.ondblclick = e);
      }
      for (var o = 0; o < t.length; o++)
        Zt.add(t[o]);
    }
    var Sn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", or = Object.prototype.hasOwnProperty;
    function kn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, i = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i;
      }
    }
    function wn(e) {
      try {
        return Ln(e), !1;
      } catch {
        return !0;
      }
    }
    function Ln(e) {
      return "" + e;
    }
    function Sr(e, t) {
      if (wn(e))
        return E("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, kn(e)), Ln(e);
    }
    function Cn(e) {
      if (wn(e))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", kn(e)), Ln(e);
    }
    function bn(e, t) {
      if (wn(e))
        return E("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, kn(e)), Ln(e);
    }
    function zr(e, t) {
      if (wn(e))
        return E("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, kn(e)), Ln(e);
    }
    function Ur(e) {
      if (wn(e))
        return E("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", kn(e)), Ln(e);
    }
    function qn(e) {
      if (wn(e))
        return E("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", kn(e)), Ln(e);
    }
    var Pr = 0, Zn = 1, dr = 2, ln = 3, Ri = 4, xi = 5, Di = 6, Se = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Xe = Se + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", xt = new RegExp("^[" + Se + "][" + Xe + "]*$"), Kt = {}, $t = {};
    function $n(e) {
      return or.call($t, e) ? !0 : or.call(Kt, e) ? !1 : xt.test(e) ? ($t[e] = !0, !0) : (Kt[e] = !0, E("Invalid attribute name: `%s`", e), !1);
    }
    function Rn(e, t, i) {
      return t !== null ? t.type === Pr : i ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function jr(e, t, i, o) {
      if (i !== null && i.type === Pr)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (o)
            return !1;
          if (i !== null)
            return !i.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Jt(e, t, i, o) {
      if (t === null || typeof t > "u" || jr(e, t, i, o))
        return !0;
      if (o)
        return !1;
      if (i !== null)
        switch (i.type) {
          case ln:
            return !t;
          case Ri:
            return t === !1;
          case xi:
            return isNaN(t);
          case Di:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function pr(e) {
      return cn.hasOwnProperty(e) ? cn[e] : null;
    }
    function Qt(e, t, i, o, u, d, v) {
      this.acceptsBooleans = t === dr || t === ln || t === Ri, this.attributeName = o, this.attributeNamespace = u, this.mustUseProperty = i, this.propertyName = e, this.type = t, this.sanitizeURL = d, this.removeEmptyString = v;
    }
    var cn = {}, ya = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    ya.forEach(function(e) {
      cn[e] = new Qt(
        e,
        Pr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], i = e[1];
      cn[t] = new Qt(
        t,
        Zn,
        !1,
        // mustUseProperty
        i,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      cn[e] = new Qt(
        e,
        dr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      cn[e] = new Qt(
        e,
        dr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      cn[e] = new Qt(
        e,
        ln,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      cn[e] = new Qt(
        e,
        ln,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      cn[e] = new Qt(
        e,
        Ri,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      cn[e] = new Qt(
        e,
        Di,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      cn[e] = new Qt(
        e,
        xi,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Wi = /[\-\:]([a-z])/g, Ko = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Wi, Ko);
      cn[t] = new Qt(
        t,
        Zn,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Wi, Ko);
      cn[t] = new Qt(
        t,
        Zn,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Wi, Ko);
      cn[t] = new Qt(
        t,
        Zn,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      cn[e] = new Qt(
        e,
        Zn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var jl = "xlinkHref";
    cn[jl] = new Qt(
      "xlinkHref",
      Zn,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      cn[e] = new Qt(
        e,
        Zn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var Il = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Qo = !1;
    function Ea(e) {
      !Qo && Il.test(e) && (Qo = !0, E("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function _a(e, t, i, o) {
      if (o.mustUseProperty) {
        var u = o.propertyName;
        return e[u];
      } else {
        Sr(i, t), o.sanitizeURL && Ea("" + i);
        var d = o.attributeName, v = null;
        if (o.type === Ri) {
          if (e.hasAttribute(d)) {
            var g = e.getAttribute(d);
            return g === "" ? !0 : Jt(t, i, o, !1) ? g : g === "" + i ? i : g;
          }
        } else if (e.hasAttribute(d)) {
          if (Jt(t, i, o, !1))
            return e.getAttribute(d);
          if (o.type === ln)
            return i;
          v = e.getAttribute(d);
        }
        return Jt(t, i, o, !1) ? v === null ? i : v : v === "" + i ? i : v;
      }
    }
    function Gi(e, t, i, o) {
      {
        if (!$n(t))
          return;
        if (!e.hasAttribute(t))
          return i === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return Sr(i, t), u === "" + i ? i : u;
      }
    }
    function fo(e, t, i, o) {
      var u = pr(t);
      if (!Rn(t, u, o)) {
        if (Jt(t, i, u, o) && (i = null), o || u === null) {
          if ($n(t)) {
            var d = t;
            i === null ? e.removeAttribute(d) : (Sr(i, t), e.setAttribute(d, "" + i));
          }
          return;
        }
        var v = u.mustUseProperty;
        if (v) {
          var g = u.propertyName;
          if (i === null) {
            var _ = u.type;
            e[g] = _ === ln ? !1 : "";
          } else
            e[g] = i;
          return;
        }
        var w = u.attributeName, R = u.attributeNamespace;
        if (i === null)
          e.removeAttribute(w);
        else {
          var j = u.type, U;
          j === ln || j === Ri && i === !0 ? U = "" : (Sr(i, w), U = "" + i, u.sanitizeURL && Ea(U.toString())), R ? e.setAttributeNS(R, w, U) : e.setAttribute(w, U);
        }
      }
    }
    var ri = Symbol.for("react.element"), ii = Symbol.for("react.portal"), Oi = Symbol.for("react.fragment"), po = Symbol.for("react.strict_mode"), N = Symbol.for("react.profiler"), ue = Symbol.for("react.provider"), Ee = Symbol.for("react.context"), Te = Symbol.for("react.forward_ref"), Nt = Symbol.for("react.suspense"), zt = Symbol.for("react.suspense_list"), Rt = Symbol.for("react.memo"), et = Symbol.for("react.lazy"), Jn = Symbol.for("react.scope"), fn = Symbol.for("react.debug_trace_mode"), dn = Symbol.for("react.offscreen"), Ir = Symbol.for("react.legacy_hidden"), Pa = Symbol.for("react.cache"), pn = Symbol.for("react.tracing_marker"), ai = Symbol.iterator, Xs = "@@iterator";
    function ja(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = ai && e[ai] || e[Xs];
      return typeof t == "function" ? t : null;
    }
    var Dt = Object.assign, Fl = 0, ho, Xo, oi, qs, Br, Zs, Js;
    function ec() {
    }
    ec.__reactDisabledLog = !0;
    function Hl() {
      {
        if (Fl === 0) {
          ho = console.log, Xo = console.info, oi = console.warn, qs = console.error, Br = console.group, Zs = console.groupCollapsed, Js = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ec,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        Fl++;
      }
    }
    function zu() {
      {
        if (Fl--, Fl === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Dt({}, e, {
              value: ho
            }),
            info: Dt({}, e, {
              value: Xo
            }),
            warn: Dt({}, e, {
              value: oi
            }),
            error: Dt({}, e, {
              value: qs
            }),
            group: Dt({}, e, {
              value: Br
            }),
            groupCollapsed: Dt({}, e, {
              value: Zs
            }),
            groupEnd: Dt({}, e, {
              value: Js
            })
          });
        }
        Fl < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var vo = p.ReactCurrentDispatcher, Ia;
    function Ki(e, t, i) {
      {
        if (Ia === void 0)
          try {
            throw Error();
          } catch (u) {
            var o = u.stack.trim().match(/\n( *(at )?)/);
            Ia = o && o[1] || "";
          }
        return `
` + Ia + e;
      }
    }
    var qo = !1, Fa;
    {
      var $l = typeof WeakMap == "function" ? WeakMap : Map;
      Fa = new $l();
    }
    function Vl(e, t) {
      if (!e || qo)
        return "";
      {
        var i = Fa.get(e);
        if (i !== void 0)
          return i;
      }
      var o;
      qo = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var d;
      d = vo.current, vo.current = null, Hl();
      try {
        if (t) {
          var v = function() {
            throw Error();
          };
          if (Object.defineProperty(v.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(v, []);
            } catch (K) {
              o = K;
            }
            Reflect.construct(e, [], v);
          } else {
            try {
              v.call();
            } catch (K) {
              o = K;
            }
            e.call(v.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (K) {
            o = K;
          }
          e();
        }
      } catch (K) {
        if (K && o && typeof K.stack == "string") {
          for (var g = K.stack.split(`
`), _ = o.stack.split(`
`), w = g.length - 1, R = _.length - 1; w >= 1 && R >= 0 && g[w] !== _[R]; )
            R--;
          for (; w >= 1 && R >= 0; w--, R--)
            if (g[w] !== _[R]) {
              if (w !== 1 || R !== 1)
                do
                  if (w--, R--, R < 0 || g[w] !== _[R]) {
                    var j = `
` + g[w].replace(" at new ", " at ");
                    return e.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", e.displayName)), typeof e == "function" && Fa.set(e, j), j;
                  }
                while (w >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        qo = !1, vo.current = d, zu(), Error.prepareStackTrace = u;
      }
      var U = e ? e.displayName || e.name : "", G = U ? Ki(U) : "";
      return typeof e == "function" && Fa.set(e, G), G;
    }
    function Zo(e, t, i) {
      return Vl(e, !0);
    }
    function tc(e, t, i) {
      return Vl(e, !1);
    }
    function nc(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Mt(e, t, i) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Vl(e, nc(e));
      if (typeof e == "string")
        return Ki(e);
      switch (e) {
        case Nt:
          return Ki("Suspense");
        case zt:
          return Ki("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Te:
            return tc(e.render);
          case Rt:
            return Mt(e.type, t, i);
          case et: {
            var o = e, u = o._payload, d = o._init;
            try {
              return Mt(d(u), t, i);
            } catch {
            }
          }
        }
      return "";
    }
    function rc(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case B:
          return Ki(e.type);
        case tt:
          return Ki("Lazy");
        case oe:
          return Ki("Suspense");
        case at:
          return Ki("SuspenseList");
        case k:
        case M:
        case De:
          return tc(e.type);
        case ae:
          return tc(e.type.render);
        case D:
          return Zo(e.type);
        default:
          return "";
      }
    }
    function Uu(e) {
      try {
        var t = "", i = e;
        do
          t += rc(i), i = i.return;
        while (i);
        return t;
      } catch (o) {
        return `
Error generating stack: ` + o.message + `
` + o.stack;
      }
    }
    function Jo(e, t, i) {
      var o = e.displayName;
      if (o)
        return o;
      var u = t.displayName || t.name || "";
      return u !== "" ? i + "(" + u + ")" : i;
    }
    function ic(e) {
      return e.displayName || "Context";
    }
    function It(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Oi:
          return "Fragment";
        case ii:
          return "Portal";
        case N:
          return "Profiler";
        case po:
          return "StrictMode";
        case Nt:
          return "Suspense";
        case zt:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Ee:
            var t = e;
            return ic(t) + ".Consumer";
          case ue:
            var i = e;
            return ic(i._context) + ".Provider";
          case Te:
            return Jo(e, e.render, "ForwardRef");
          case Rt:
            var o = e.displayName || null;
            return o !== null ? o : It(e.type) || "Memo";
          case et: {
            var u = e, d = u._payload, v = u._init;
            try {
              return It(v(d));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Pu(e, t, i) {
      var o = t.displayName || t.name || "";
      return e.displayName || (o !== "" ? i + "(" + o + ")" : i);
    }
    function Bl(e) {
      return e.displayName || "Context";
    }
    function yt(e) {
      var t = e.tag, i = e.type;
      switch (t) {
        case qe:
          return "Cache";
        case ze:
          var o = i;
          return Bl(o) + ".Consumer";
        case ge:
          var u = i;
          return Bl(u._context) + ".Provider";
        case ot:
          return "DehydratedFragment";
        case ae:
          return Pu(i, i.render, "ForwardRef");
        case pe:
          return "Fragment";
        case B:
          return i;
        case H:
          return "Portal";
        case I:
          return "Root";
        case X:
          return "Text";
        case tt:
          return It(i);
        case we:
          return i === po ? "StrictMode" : "Mode";
        case je:
          return "Offscreen";
        case Ce:
          return "Profiler";
        case ct:
          return "Scope";
        case oe:
          return "Suspense";
        case at:
          return "SuspenseList";
        case We:
          return "TracingMarker";
        case D:
        case k:
        case vt:
        case M:
        case Ne:
        case De:
          if (typeof i == "function")
            return i.displayName || i.name || null;
          if (typeof i == "string")
            return i;
          break;
      }
      return null;
    }
    var Sa = p.ReactDebugCurrentFrame, xn = null, li = !1;
    function Qi() {
      {
        if (xn === null)
          return null;
        var e = xn._debugOwner;
        if (e !== null && typeof e < "u")
          return yt(e);
      }
      return null;
    }
    function el() {
      return xn === null ? "" : Uu(xn);
    }
    function mn() {
      Sa.getCurrentStack = null, xn = null, li = !1;
    }
    function Dn(e) {
      Sa.getCurrentStack = e === null ? null : el, xn = e, li = !1;
    }
    function ac() {
      return xn;
    }
    function Cr(e) {
      li = e;
    }
    function ui(e) {
      return "" + e;
    }
    function Ca(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return qn(e), e;
        default:
          return "";
      }
    }
    var ju = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Yl(e, t) {
      ju[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || E("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || E("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Wl(e) {
      var t = e.type, i = e.nodeName;
      return i && i.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function tl(e) {
      return e._valueTracker;
    }
    function Xi(e) {
      e._valueTracker = null;
    }
    function mo(e) {
      var t = "";
      return e && (Wl(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Iu(e) {
      var t = Wl(e) ? "checked" : "value", i = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      qn(e[t]);
      var o = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof i > "u" || typeof i.get != "function" || typeof i.set != "function")) {
        var u = i.get, d = i.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(g) {
            qn(g), o = "" + g, d.call(this, g);
          }
        }), Object.defineProperty(e, t, {
          enumerable: i.enumerable
        });
        var v = {
          getValue: function() {
            return o;
          },
          setValue: function(g) {
            qn(g), o = "" + g;
          },
          stopTracking: function() {
            Xi(e), delete e[t];
          }
        };
        return v;
      }
    }
    function go(e) {
      tl(e) || (e._valueTracker = Iu(e));
    }
    function Fu(e) {
      if (!e)
        return !1;
      var t = tl(e);
      if (!t)
        return !0;
      var i = t.getValue(), o = mo(e);
      return o !== i ? (t.setValue(o), !0) : !1;
    }
    function Ha(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var yo = !1, Hu = !1, oc = !1, ba = !1;
    function $u(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function S(e, t) {
      var i = e, o = t.checked, u = Dt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: o ?? i._wrapperState.initialChecked
      });
      return u;
    }
    function A(e, t) {
      Yl("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Hu && (E("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Qi() || "A component", t.type), Hu = !0), t.value !== void 0 && t.defaultValue !== void 0 && !yo && (E("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Qi() || "A component", t.type), yo = !0);
      var i = e, o = t.defaultValue == null ? "" : t.defaultValue;
      i._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Ca(t.value != null ? t.value : o),
        controlled: $u(t)
      };
    }
    function W(e, t) {
      var i = e, o = t.checked;
      o != null && fo(i, "checked", o, !1);
    }
    function q(e, t) {
      var i = e;
      {
        var o = $u(t);
        !i._wrapperState.controlled && o && !ba && (E("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ba = !0), i._wrapperState.controlled && !o && !oc && (E("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), oc = !0);
      }
      W(e, t);
      var u = Ca(t.value), d = t.type;
      if (u != null)
        d === "number" ? (u === 0 && i.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        i.value != u) && (i.value = ui(u)) : i.value !== ui(u) && (i.value = ui(u));
      else if (d === "submit" || d === "reset") {
        i.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? pt(i, t.type, u) : t.hasOwnProperty("defaultValue") && pt(i, t.type, Ca(t.defaultValue)), t.checked == null && t.defaultChecked != null && (i.defaultChecked = !!t.defaultChecked);
    }
    function he(e, t, i) {
      var o = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, d = u === "submit" || u === "reset";
        if (d && (t.value === void 0 || t.value === null))
          return;
        var v = ui(o._wrapperState.initialValue);
        i || v !== o.value && (o.value = v), o.defaultValue = v;
      }
      var g = o.name;
      g !== "" && (o.name = ""), o.defaultChecked = !o.defaultChecked, o.defaultChecked = !!o._wrapperState.initialChecked, g !== "" && (o.name = g);
    }
    function $e(e, t) {
      var i = e;
      q(i, t), ke(i, t);
    }
    function ke(e, t) {
      var i = t.name;
      if (t.type === "radio" && i != null) {
        for (var o = e; o.parentNode; )
          o = o.parentNode;
        Sr(i, "name");
        for (var u = o.querySelectorAll("input[name=" + JSON.stringify("" + i) + '][type="radio"]'), d = 0; d < u.length; d++) {
          var v = u[d];
          if (!(v === e || v.form !== e.form)) {
            var g = Og(v);
            if (!g)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Fu(v), q(v, g);
          }
        }
      }
    }
    function pt(e, t, i) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Ha(e.ownerDocument) !== e) && (i == null ? e.defaultValue = ui(e._wrapperState.initialValue) : e.defaultValue !== ui(i) && (e.defaultValue = ui(i)));
    }
    var Ot = !1, Xt = !1, en = !1;
    function tn(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? a.Children.forEach(t.children, function(i) {
        i != null && (typeof i == "string" || typeof i == "number" || Xt || (Xt = !0, E("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (en || (en = !0, E("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Ot && (E("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Ot = !0);
    }
    function nn(e, t) {
      t.value != null && e.setAttribute("value", ui(Ca(t.value)));
    }
    var gn = Array.isArray;
    function Ft(e) {
      return gn(e);
    }
    var nl;
    nl = !1;
    function Vu() {
      var e = Qi();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var lc = ["value", "defaultValue"];
    function uc(e) {
      {
        Yl("select", e);
        for (var t = 0; t < lc.length; t++) {
          var i = lc[t];
          if (e[i] != null) {
            var o = Ft(e[i]);
            e.multiple && !o ? E("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", i, Vu()) : !e.multiple && o && E("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", i, Vu());
          }
        }
      }
    }
    function Eo(e, t, i, o) {
      var u = e.options;
      if (t) {
        for (var d = i, v = {}, g = 0; g < d.length; g++)
          v["$" + d[g]] = !0;
        for (var _ = 0; _ < u.length; _++) {
          var w = v.hasOwnProperty("$" + u[_].value);
          u[_].selected !== w && (u[_].selected = w), w && o && (u[_].defaultSelected = !0);
        }
      } else {
        for (var R = ui(Ca(i)), j = null, U = 0; U < u.length; U++) {
          if (u[U].value === R) {
            u[U].selected = !0, o && (u[U].defaultSelected = !0);
            return;
          }
          j === null && !u[U].disabled && (j = u[U]);
        }
        j !== null && (j.selected = !0);
      }
    }
    function sc(e, t) {
      return Dt({}, t, {
        value: void 0
      });
    }
    function cc(e, t) {
      var i = e;
      uc(t), i._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !nl && (E("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), nl = !0);
    }
    function Np(e, t) {
      var i = e;
      i.multiple = !!t.multiple;
      var o = t.value;
      o != null ? Eo(i, !!t.multiple, o, !1) : t.defaultValue != null && Eo(i, !!t.multiple, t.defaultValue, !0);
    }
    function DE(e, t) {
      var i = e, o = i._wrapperState.wasMultiple;
      i._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Eo(i, !!t.multiple, u, !1) : o !== !!t.multiple && (t.defaultValue != null ? Eo(i, !!t.multiple, t.defaultValue, !0) : Eo(i, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function em(e, t) {
      var i = e, o = t.value;
      o != null && Eo(i, !!t.multiple, o, !1);
    }
    var tm = !1;
    function kp(e, t) {
      var i = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var o = Dt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: ui(i._wrapperState.initialValue)
      });
      return o;
    }
    function nm(e, t) {
      var i = e;
      Yl("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !tm && (E("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Qi() || "A component"), tm = !0);
      var o = t.value;
      if (o == null) {
        var u = t.children, d = t.defaultValue;
        if (u != null) {
          E("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (d != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Ft(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            d = u;
          }
        }
        d == null && (d = ""), o = d;
      }
      i._wrapperState = {
        initialValue: Ca(o)
      };
    }
    function rm(e, t) {
      var i = e, o = Ca(t.value), u = Ca(t.defaultValue);
      if (o != null) {
        var d = ui(o);
        d !== i.value && (i.value = d), t.defaultValue == null && i.defaultValue !== d && (i.defaultValue = d);
      }
      u != null && (i.defaultValue = ui(u));
    }
    function Df(e, t) {
      var i = e, o = i.textContent;
      o === i._wrapperState.initialValue && o !== "" && o !== null && (i.value = o);
    }
    function OE(e, t) {
      rm(e, t);
    }
    var _o = "http://www.w3.org/1999/xhtml", AE = "http://www.w3.org/1998/Math/MathML", Of = "http://www.w3.org/2000/svg";
    function Lp(e) {
      switch (e) {
        case "svg":
          return Of;
        case "math":
          return AE;
        default:
          return _o;
      }
    }
    function Mp(e, t) {
      return e == null || e === _o ? Lp(t) : e === Of && t === "foreignObject" ? _o : e;
    }
    var NE = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, i, o, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, i, o, u);
        });
      } : e;
    }, Af, im = NE(function(e, t) {
      if (e.namespaceURI === Of && !("innerHTML" in e)) {
        Af = Af || document.createElement("div"), Af.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var i = Af.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; i.firstChild; )
          e.appendChild(i.firstChild);
        return;
      }
      e.innerHTML = t;
    }), si = 1, So = 3, Mn = 8, Ai = 9, zp = 11, fc = function(e, t) {
      if (t) {
        var i = e.firstChild;
        if (i && i === e.lastChild && i.nodeType === So) {
          i.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, am = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, Bu = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function om(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var lm = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Bu).forEach(function(e) {
      lm.forEach(function(t) {
        Bu[om(t, e)] = Bu[e];
      });
    });
    function rl(e, t, i) {
      var o = t == null || typeof t == "boolean" || t === "";
      return o ? "" : !i && typeof t == "number" && t !== 0 && !(Bu.hasOwnProperty(e) && Bu[e]) ? t + "px" : (zr(t, e), ("" + t).trim());
    }
    var kE = /([A-Z])/g, LE = /^ms-/;
    function ME(e) {
      return e.replace(kE, "-$1").toLowerCase().replace(LE, "-ms-");
    }
    var Up = function() {
    };
    {
      var um = /^(?:webkit|moz|o)[A-Z]/, dc = /^-ms-/, pc = /-(.)/g, sm = /;\s*$/, Co = {}, Pp = {}, jp = !1, Nf = !1, Ip = function(e) {
        return e.replace(pc, function(t, i) {
          return i.toUpperCase();
        });
      }, cm = function(e) {
        Co.hasOwnProperty(e) && Co[e] || (Co[e] = !0, E(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Ip(e.replace(dc, "ms-"))
        ));
      }, fm = function(e) {
        Co.hasOwnProperty(e) && Co[e] || (Co[e] = !0, E("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, dm = function(e, t) {
        Pp.hasOwnProperty(t) && Pp[t] || (Pp[t] = !0, E(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(sm, "")));
      }, zE = function(e, t) {
        jp || (jp = !0, E("`NaN` is an invalid value for the `%s` css style property.", e));
      }, UE = function(e, t) {
        Nf || (Nf = !0, E("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Up = function(e, t) {
        e.indexOf("-") > -1 ? cm(e) : um.test(e) ? fm(e) : sm.test(t) && dm(e, t), typeof t == "number" && (isNaN(t) ? zE(e, t) : isFinite(t) || UE(e, t));
      };
    }
    var PE = Up;
    function jE(e) {
      {
        var t = "", i = "";
        for (var o in e)
          if (e.hasOwnProperty(o)) {
            var u = e[o];
            if (u != null) {
              var d = o.indexOf("--") === 0;
              t += i + (d ? o : ME(o)) + ":", t += rl(o, u, d), i = ";";
            }
          }
        return t || null;
      }
    }
    function pm(e, t) {
      var i = e.style;
      for (var o in t)
        if (t.hasOwnProperty(o)) {
          var u = o.indexOf("--") === 0;
          u || PE(o, t[o]);
          var d = rl(o, t[o], u);
          o === "float" && (o = "cssFloat"), u ? i.setProperty(o, d) : i[o] = d;
        }
    }
    function Ta(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Yu(e) {
      var t = {};
      for (var i in e)
        for (var o = am[i] || [i], u = 0; u < o.length; u++)
          t[o[u]] = i;
      return t;
    }
    function hm(e, t) {
      {
        if (!t)
          return;
        var i = Yu(e), o = Yu(t), u = {};
        for (var d in i) {
          var v = i[d], g = o[d];
          if (g && v !== g) {
            var _ = v + "," + g;
            if (u[_])
              continue;
            u[_] = !0, E("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Ta(e[v]) ? "Removing" : "Updating", v, g);
          }
        }
      }
    }
    var vm = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, mm = Dt({
      menuitem: !0
    }, vm), gm = "__html";
    function hc(e, t) {
      if (t) {
        if (mm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(gm in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && E("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Gl(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var kf = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Kl = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, il = {}, vc = new RegExp("^(aria)-[" + Xe + "]*$"), Fp = new RegExp("^(aria)[A-Z][" + Xe + "]*$");
    function ym(e, t) {
      {
        if (or.call(il, t) && il[t])
          return !0;
        if (Fp.test(t)) {
          var i = "aria-" + t.slice(4).toLowerCase(), o = Kl.hasOwnProperty(i) ? i : null;
          if (o == null)
            return E("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), il[t] = !0, !0;
          if (t !== o)
            return E("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, o), il[t] = !0, !0;
        }
        if (vc.test(t)) {
          var u = t.toLowerCase(), d = Kl.hasOwnProperty(u) ? u : null;
          if (d == null)
            return il[t] = !0, !1;
          if (t !== d)
            return E("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, d), il[t] = !0, !0;
        }
      }
      return !0;
    }
    function Lf(e, t) {
      {
        var i = [];
        for (var o in t) {
          var u = ym(e, o);
          u || i.push(o);
        }
        var d = i.map(function(v) {
          return "`" + v + "`";
        }).join(", ");
        i.length === 1 ? E("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", d, e) : i.length > 1 && E("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", d, e);
      }
    }
    function Wu(e, t) {
      Gl(e, t) || Lf(e, t);
    }
    var Mf = !1;
    function Em(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Mf && (Mf = !0, e === "select" && t.multiple ? E("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : E("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var mc = function() {
    };
    {
      var Fr = {}, Hp = /^on./, _m = /^on[^A-Z]/, Sm = new RegExp("^(aria)-[" + Xe + "]*$"), Cm = new RegExp("^(aria)[A-Z][" + Xe + "]*$");
      mc = function(e, t, i, o) {
        if (or.call(Fr, t) && Fr[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return E("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Fr[t] = !0, !0;
        if (o != null) {
          var d = o.registrationNameDependencies, v = o.possibleRegistrationNames;
          if (d.hasOwnProperty(t))
            return !0;
          var g = v.hasOwnProperty(u) ? v[u] : null;
          if (g != null)
            return E("Invalid event handler property `%s`. Did you mean `%s`?", t, g), Fr[t] = !0, !0;
          if (Hp.test(t))
            return E("Unknown event handler property `%s`. It will be ignored.", t), Fr[t] = !0, !0;
        } else if (Hp.test(t))
          return _m.test(t) && E("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Fr[t] = !0, !0;
        if (Sm.test(t) || Cm.test(t))
          return !0;
        if (u === "innerhtml")
          return E("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Fr[t] = !0, !0;
        if (u === "aria")
          return E("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Fr[t] = !0, !0;
        if (u === "is" && i !== null && i !== void 0 && typeof i != "string")
          return E("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof i), Fr[t] = !0, !0;
        if (typeof i == "number" && isNaN(i))
          return E("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Fr[t] = !0, !0;
        var _ = pr(t), w = _ !== null && _.type === Pr;
        if (kf.hasOwnProperty(u)) {
          var R = kf[u];
          if (R !== t)
            return E("Invalid DOM property `%s`. Did you mean `%s`?", t, R), Fr[t] = !0, !0;
        } else if (!w && t !== u)
          return E("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), Fr[t] = !0, !0;
        return typeof i == "boolean" && jr(t, i, _, !1) ? (i ? E('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', i, t, t, i, t) : E('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', i, t, t, i, t, t, t), Fr[t] = !0, !0) : w ? !0 : jr(t, i, _, !1) ? (Fr[t] = !0, !1) : ((i === "false" || i === "true") && _ !== null && _.type === ln && (E("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", i, t, i === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, i), Fr[t] = !0), !0);
      };
    }
    var bm = function(e, t, i) {
      {
        var o = [];
        for (var u in t) {
          var d = mc(e, u, t[u], i);
          d || o.push(u);
        }
        var v = o.map(function(g) {
          return "`" + g + "`";
        }).join(", ");
        o.length === 1 ? E("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", v, e) : o.length > 1 && E("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", v, e);
      }
    };
    function al(e, t, i) {
      Gl(e, t) || bm(e, t, i);
    }
    var zf = 1, gc = 2, yc = 4, IE = zf | gc | yc, bo = null;
    function FE(e) {
      bo !== null && E("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), bo = e;
    }
    function Tm() {
      bo === null && E("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), bo = null;
    }
    function wm(e) {
      return e === bo;
    }
    function un(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === So ? t.parentNode : t;
    }
    var Ec = null, To = null, $a = null;
    function $p(e) {
      var t = Ts(e);
      if (t) {
        if (typeof Ec != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var i = t.stateNode;
        if (i) {
          var o = Og(i);
          Ec(t.stateNode, t.type, o);
        }
      }
    }
    function Vp(e) {
      Ec = e;
    }
    function Gu(e) {
      To ? $a ? $a.push(e) : $a = [e] : To = e;
    }
    function Uf() {
      return To !== null || $a !== null;
    }
    function Ql() {
      if (To) {
        var e = To, t = $a;
        if (To = null, $a = null, $p(e), t)
          for (var i = 0; i < t.length; i++)
            $p(t[i]);
      }
    }
    var Bp = function(e, t) {
      return e(t);
    }, Rm = function() {
    }, Yp = !1;
    function xm() {
      var e = Uf();
      e && (Rm(), Ql());
    }
    function _c(e, t, i) {
      if (Yp)
        return e(t, i);
      Yp = !0;
      try {
        return Bp(e, t, i);
      } finally {
        Yp = !1, xm();
      }
    }
    function Pf(e, t, i) {
      Bp = e, Rm = i;
    }
    function Wp(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Gp(e, t, i) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(i.disabled && Wp(t));
        default:
          return !1;
      }
    }
    function Xl(e, t) {
      var i = e.stateNode;
      if (i === null)
        return null;
      var o = Og(i);
      if (o === null)
        return null;
      var u = o[t];
      if (Gp(t, e.type, o))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var Sc = !1;
    if (Sn)
      try {
        var Cc = {};
        Object.defineProperty(Cc, "passive", {
          get: function() {
            Sc = !0;
          }
        }), window.addEventListener("test", Cc, Cc), window.removeEventListener("test", Cc, Cc);
      } catch {
        Sc = !1;
      }
    function Kp(e, t, i, o, u, d, v, g, _) {
      var w = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(i, w);
      } catch (R) {
        this.onError(R);
      }
    }
    var Dm = Kp;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Qp = document.createElement("react");
      Dm = function(t, i, o, u, d, v, g, _, w) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var R = document.createEvent("Event"), j = !1, U = !0, G = window.event, K = Object.getOwnPropertyDescriptor(window, "event");
        function Z() {
          Qp.removeEventListener(J, it, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = G);
        }
        var Le = Array.prototype.slice.call(arguments, 3);
        function it() {
          j = !0, Z(), i.apply(o, Le), U = !1;
        }
        var Ke, Pt = !1, Lt = !1;
        function $(V) {
          if (Ke = V.error, Pt = !0, Ke === null && V.colno === 0 && V.lineno === 0 && (Lt = !0), V.defaultPrevented && Ke != null && typeof Ke == "object")
            try {
              Ke._suppressLogging = !0;
            } catch {
            }
        }
        var J = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", $), Qp.addEventListener(J, it, !1), R.initEvent(J, !1, !1), Qp.dispatchEvent(R), K && Object.defineProperty(window, "event", K), j && U && (Pt ? Lt && (Ke = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Ke = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Ke)), window.removeEventListener("error", $), !j)
          return Z(), Kp.apply(this, arguments);
      };
    }
    var Xp = Dm, Ni = !1, bc = null, wo = !1, qi = null, Tc = {
      onError: function(e) {
        Ni = !0, bc = e;
      }
    };
    function wa(e, t, i, o, u, d, v, g, _) {
      Ni = !1, bc = null, Xp.apply(Tc, arguments);
    }
    function qp(e, t, i, o, u, d, v, g, _) {
      if (wa.apply(this, arguments), Ni) {
        var w = Ro();
        wo || (wo = !0, qi = w);
      }
    }
    function HE() {
      if (wo) {
        var e = qi;
        throw wo = !1, qi = null, e;
      }
    }
    function $E() {
      return Ni;
    }
    function Ro() {
      if (Ni) {
        var e = bc;
        return Ni = !1, bc = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Va(e) {
      return e._reactInternals;
    }
    function Ku(e) {
      return e._reactInternals !== void 0;
    }
    function jf(e, t) {
      e._reactInternals = t;
    }
    var nt = (
      /*                      */
      0
    ), Ra = (
      /*                */
      1
    ), sn = (
      /*                    */
      2
    ), Be = (
      /*                       */
      4
    ), Vt = (
      /*                */
      16
    ), Zi = (
      /*                 */
      32
    ), hr = (
      /*                     */
      64
    ), _t = (
      /*                   */
      128
    ), Yr = (
      /*            */
      256
    ), ki = (
      /*                          */
      512
    ), er = (
      /*                     */
      1024
    ), ci = (
      /*                      */
      2048
    ), Ba = (
      /*                    */
      4096
    ), ol = (
      /*                   */
      8192
    ), ql = (
      /*             */
      16384
    ), Om = ci | Be | hr | ki | er | ql, xo = (
      /*               */
      32767
    ), ll = (
      /*                   */
      32768
    ), br = (
      /*                */
      65536
    ), If = (
      /* */
      131072
    ), Am = (
      /*                       */
      1048576
    ), Ya = (
      /*                    */
      2097152
    ), Ji = (
      /*                 */
      4194304
    ), ul = (
      /*                */
      8388608
    ), ea = (
      /*               */
      16777216
    ), Zl = (
      /*              */
      33554432
    ), fi = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Be | er | 0
    ), di = sn | Be | Vt | Zi | ki | Ba | ol, xa = Be | hr | ki | ol, pi = ci | Vt, Tr = Ji | ul | Ya, Jl = p.ReactCurrentOwner;
    function sl(e) {
      var t = e, i = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var o = t;
        do
          t = o, (t.flags & (sn | Ba)) !== nt && (i = t.return), o = t.return;
        while (o);
      }
      return t.tag === I ? i : null;
    }
    function Ff(e) {
      if (e.tag === oe) {
        var t = e.memoizedState;
        if (t === null) {
          var i = e.alternate;
          i !== null && (t = i.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function Hf(e) {
      return e.tag === I ? e.stateNode.containerInfo : null;
    }
    function Li(e) {
      return sl(e) === e;
    }
    function Mi(e) {
      {
        var t = Jl.current;
        if (t !== null && t.tag === D) {
          var i = t, o = i.stateNode;
          o._warnedAboutRefsInRender || E("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", yt(i) || "A component"), o._warnedAboutRefsInRender = !0;
        }
      }
      var u = Va(e);
      return u ? sl(u) === u : !1;
    }
    function yn(e) {
      if (sl(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function ta(e) {
      var t = e.alternate;
      if (!t) {
        var i = sl(e);
        if (i === null)
          throw new Error("Unable to find node on an unmounted component.");
        return i !== e ? null : e;
      }
      for (var o = e, u = t; ; ) {
        var d = o.return;
        if (d === null)
          break;
        var v = d.alternate;
        if (v === null) {
          var g = d.return;
          if (g !== null) {
            o = u = g;
            continue;
          }
          break;
        }
        if (d.child === v.child) {
          for (var _ = d.child; _; ) {
            if (_ === o)
              return yn(d), e;
            if (_ === u)
              return yn(d), t;
            _ = _.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (o.return !== u.return)
          o = d, u = v;
        else {
          for (var w = !1, R = d.child; R; ) {
            if (R === o) {
              w = !0, o = d, u = v;
              break;
            }
            if (R === u) {
              w = !0, u = d, o = v;
              break;
            }
            R = R.sibling;
          }
          if (!w) {
            for (R = v.child; R; ) {
              if (R === o) {
                w = !0, o = v, u = d;
                break;
              }
              if (R === u) {
                w = !0, u = v, o = d;
                break;
              }
              R = R.sibling;
            }
            if (!w)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (o.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (o.tag !== I)
        throw new Error("Unable to find node on an unmounted component.");
      return o.stateNode.current === o ? e : t;
    }
    function Zp(e) {
      var t = ta(e);
      return t !== null ? Jp(t) : null;
    }
    function Jp(e) {
      if (e.tag === B || e.tag === X)
        return e;
      for (var t = e.child; t !== null; ) {
        var i = Jp(t);
        if (i !== null)
          return i;
        t = t.sibling;
      }
      return null;
    }
    function eh(e) {
      var t = ta(e);
      return t !== null ? $f(t) : null;
    }
    function $f(e) {
      if (e.tag === B || e.tag === X)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== H) {
          var i = $f(t);
          if (i !== null)
            return i;
        }
        t = t.sibling;
      }
      return null;
    }
    var th = s.unstable_scheduleCallback, Vf = s.unstable_cancelCallback, Nm = s.unstable_shouldYield, Qu = s.unstable_requestPaint, tr = s.unstable_now, VE = s.unstable_getCurrentPriorityLevel, hi = s.unstable_ImmediatePriority, Xu = s.unstable_UserBlockingPriority, Wa = s.unstable_NormalPriority, qu = s.unstable_LowPriority, wc = s.unstable_IdlePriority, nh = s.unstable_yieldValue, rh = s.unstable_setDisableYieldValue, cl = null, Vn = null, me = null, Hr = !1, zi = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function km(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return E("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Et && (e = Dt({}, e, {
          getLaneLabelMap: Bf,
          injectProfilingHooks: dl
        })), cl = t.inject(e), Vn = t;
      } catch (i) {
        E("React instrumentation encountered an error: %s.", i);
      }
      return !!t.checkDCE;
    }
    function Do(e, t) {
      if (Vn && typeof Vn.onScheduleFiberRoot == "function")
        try {
          Vn.onScheduleFiberRoot(cl, e, t);
        } catch (i) {
          Hr || (Hr = !0, E("React instrumentation encountered an error: %s", i));
        }
    }
    function fl(e, t) {
      if (Vn && typeof Vn.onCommitFiberRoot == "function")
        try {
          var i = (e.current.flags & _t) === _t;
          if (wt) {
            var o;
            switch (t) {
              case Gn:
                o = hi;
                break;
              case Ao:
                o = Xu;
                break;
              case Qa:
                o = Wa;
                break;
              case ls:
                o = wc;
                break;
              default:
                o = Wa;
                break;
            }
            Vn.onCommitFiberRoot(cl, e, o, i);
          }
        } catch (u) {
          Hr || (Hr = !0, E("React instrumentation encountered an error: %s", u));
        }
    }
    function ih(e) {
      if (Vn && typeof Vn.onPostCommitFiberRoot == "function")
        try {
          Vn.onPostCommitFiberRoot(cl, e);
        } catch (t) {
          Hr || (Hr = !0, E("React instrumentation encountered an error: %s", t));
        }
    }
    function Lm(e) {
      if (Vn && typeof Vn.onCommitFiberUnmount == "function")
        try {
          Vn.onCommitFiberUnmount(cl, e);
        } catch (t) {
          Hr || (Hr = !0, E("React instrumentation encountered an error: %s", t));
        }
    }
    function hn(e) {
      if (typeof nh == "function" && (rh(e), C(e)), Vn && typeof Vn.setStrictMode == "function")
        try {
          Vn.setStrictMode(cl, e);
        } catch (t) {
          Hr || (Hr = !0, E("React instrumentation encountered an error: %s", t));
        }
    }
    function dl(e) {
      me = e;
    }
    function Bf() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, i = 0; i < Bn; i++) {
          var o = Hm(t);
          e.set(t, o), t *= 2;
        }
        return e;
      }
    }
    function Mm(e) {
      me !== null && typeof me.markCommitStarted == "function" && me.markCommitStarted(e);
    }
    function Rc() {
      me !== null && typeof me.markCommitStopped == "function" && me.markCommitStopped();
    }
    function Zu(e) {
      me !== null && typeof me.markComponentRenderStarted == "function" && me.markComponentRenderStarted(e);
    }
    function eu() {
      me !== null && typeof me.markComponentRenderStopped == "function" && me.markComponentRenderStopped();
    }
    function ah(e) {
      me !== null && typeof me.markComponentPassiveEffectMountStarted == "function" && me.markComponentPassiveEffectMountStarted(e);
    }
    function Yf() {
      me !== null && typeof me.markComponentPassiveEffectMountStopped == "function" && me.markComponentPassiveEffectMountStopped();
    }
    function zm(e) {
      me !== null && typeof me.markComponentPassiveEffectUnmountStarted == "function" && me.markComponentPassiveEffectUnmountStarted(e);
    }
    function Um() {
      me !== null && typeof me.markComponentPassiveEffectUnmountStopped == "function" && me.markComponentPassiveEffectUnmountStopped();
    }
    function Pm(e) {
      me !== null && typeof me.markComponentLayoutEffectMountStarted == "function" && me.markComponentLayoutEffectMountStarted(e);
    }
    function oh() {
      me !== null && typeof me.markComponentLayoutEffectMountStopped == "function" && me.markComponentLayoutEffectMountStopped();
    }
    function Ju(e) {
      me !== null && typeof me.markComponentLayoutEffectUnmountStarted == "function" && me.markComponentLayoutEffectUnmountStarted(e);
    }
    function xc() {
      me !== null && typeof me.markComponentLayoutEffectUnmountStopped == "function" && me.markComponentLayoutEffectUnmountStopped();
    }
    function jm(e, t, i) {
      me !== null && typeof me.markComponentErrored == "function" && me.markComponentErrored(e, t, i);
    }
    function Im(e, t, i) {
      me !== null && typeof me.markComponentSuspended == "function" && me.markComponentSuspended(e, t, i);
    }
    function es(e) {
      me !== null && typeof me.markLayoutEffectsStarted == "function" && me.markLayoutEffectsStarted(e);
    }
    function Fm() {
      me !== null && typeof me.markLayoutEffectsStopped == "function" && me.markLayoutEffectsStopped();
    }
    function Dc(e) {
      me !== null && typeof me.markPassiveEffectsStarted == "function" && me.markPassiveEffectsStarted(e);
    }
    function Ga() {
      me !== null && typeof me.markPassiveEffectsStopped == "function" && me.markPassiveEffectsStopped();
    }
    function ts(e) {
      me !== null && typeof me.markRenderStarted == "function" && me.markRenderStarted(e);
    }
    function Oc() {
      me !== null && typeof me.markRenderYielded == "function" && me.markRenderYielded();
    }
    function pl() {
      me !== null && typeof me.markRenderStopped == "function" && me.markRenderStopped();
    }
    function lh(e) {
      me !== null && typeof me.markRenderScheduled == "function" && me.markRenderScheduled(e);
    }
    function ns(e, t) {
      me !== null && typeof me.markForceUpdateScheduled == "function" && me.markForceUpdateScheduled(e, t);
    }
    function Wf(e, t) {
      me !== null && typeof me.markStateUpdateScheduled == "function" && me.markStateUpdateScheduled(e, t);
    }
    var rt = (
      /*                         */
      0
    ), Ge = (
      /*                 */
      1
    ), Ht = (
      /*                    */
      2
    ), zn = (
      /*               */
      8
    ), na = (
      /*              */
      16
    ), Ac = Math.clz32 ? Math.clz32 : On, uh = Math.log, tu = Math.LN2;
    function On(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (uh(t) / tu | 0) | 0;
    }
    var Bn = 31, te = (
      /*                        */
      0
    ), Yn = (
      /*                          */
      0
    ), lt = (
      /*                        */
      1
    ), Ka = (
      /*    */
      2
    ), Oo = (
      /*             */
      4
    ), Un = (
      /*            */
      8
    ), ra = (
      /*                     */
      16
    ), nu = (
      /*                */
      32
    ), hl = (
      /*                       */
      4194240
    ), vi = (
      /*                        */
      64
    ), mi = (
      /*                        */
      128
    ), ru = (
      /*                        */
      256
    ), Nc = (
      /*                        */
      512
    ), kc = (
      /*                        */
      1024
    ), Gf = (
      /*                        */
      2048
    ), Kf = (
      /*                        */
      4096
    ), Qf = (
      /*                        */
      8192
    ), Xf = (
      /*                        */
      16384
    ), qf = (
      /*                       */
      32768
    ), Zf = (
      /*                       */
      65536
    ), Jf = (
      /*                       */
      131072
    ), ed = (
      /*                       */
      262144
    ), iu = (
      /*                       */
      524288
    ), td = (
      /*                       */
      1048576
    ), rs = (
      /*                       */
      2097152
    ), au = (
      /*                            */
      130023424
    ), ou = (
      /*                             */
      4194304
    ), Lc = (
      /*                             */
      8388608
    ), nd = (
      /*                             */
      16777216
    ), rd = (
      /*                             */
      33554432
    ), id = (
      /*                             */
      67108864
    ), sh = ou, lu = (
      /*          */
      134217728
    ), ch = (
      /*                          */
      268435455
    ), is = (
      /*               */
      268435456
    ), vl = (
      /*                        */
      536870912
    ), Ui = (
      /*                   */
      1073741824
    );
    function Hm(e) {
      {
        if (e & lt)
          return "Sync";
        if (e & Ka)
          return "InputContinuousHydration";
        if (e & Oo)
          return "InputContinuous";
        if (e & Un)
          return "DefaultHydration";
        if (e & ra)
          return "Default";
        if (e & nu)
          return "TransitionHydration";
        if (e & hl)
          return "Transition";
        if (e & au)
          return "Retry";
        if (e & lu)
          return "SelectiveHydration";
        if (e & is)
          return "IdleHydration";
        if (e & vl)
          return "Idle";
        if (e & Ui)
          return "Offscreen";
      }
    }
    var vn = -1, ad = vi, Mc = ou;
    function as(e) {
      switch (Wn(e)) {
        case lt:
          return lt;
        case Ka:
          return Ka;
        case Oo:
          return Oo;
        case Un:
          return Un;
        case ra:
          return ra;
        case nu:
          return nu;
        case vi:
        case mi:
        case ru:
        case Nc:
        case kc:
        case Gf:
        case Kf:
        case Qf:
        case Xf:
        case qf:
        case Zf:
        case Jf:
        case ed:
        case iu:
        case td:
        case rs:
          return e & hl;
        case ou:
        case Lc:
        case nd:
        case rd:
        case id:
          return e & au;
        case lu:
          return lu;
        case is:
          return is;
        case vl:
          return vl;
        case Ui:
          return Ui;
        default:
          return E("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function zc(e, t) {
      var i = e.pendingLanes;
      if (i === te)
        return te;
      var o = te, u = e.suspendedLanes, d = e.pingedLanes, v = i & ch;
      if (v !== te) {
        var g = v & ~u;
        if (g !== te)
          o = as(g);
        else {
          var _ = v & d;
          _ !== te && (o = as(_));
        }
      } else {
        var w = i & ~u;
        w !== te ? o = as(w) : d !== te && (o = as(d));
      }
      if (o === te)
        return te;
      if (t !== te && t !== o && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === te) {
        var R = Wn(o), j = Wn(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          R >= j || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          R === ra && (j & hl) !== te
        )
          return t;
      }
      (o & Oo) !== te && (o |= i & ra);
      var U = e.entangledLanes;
      if (U !== te)
        for (var G = e.entanglements, K = o & U; K > 0; ) {
          var Z = gl(K), Le = 1 << Z;
          o |= G[Z], K &= ~Le;
        }
      return o;
    }
    function od(e, t) {
      for (var i = e.eventTimes, o = vn; t > 0; ) {
        var u = gl(t), d = 1 << u, v = i[u];
        v > o && (o = v), t &= ~d;
      }
      return o;
    }
    function BE(e, t) {
      switch (e) {
        case lt:
        case Ka:
        case Oo:
          return t + 250;
        case Un:
        case ra:
        case nu:
        case vi:
        case mi:
        case ru:
        case Nc:
        case kc:
        case Gf:
        case Kf:
        case Qf:
        case Xf:
        case qf:
        case Zf:
        case Jf:
        case ed:
        case iu:
        case td:
        case rs:
          return t + 5e3;
        case ou:
        case Lc:
        case nd:
        case rd:
        case id:
          return vn;
        case lu:
        case is:
        case vl:
        case Ui:
          return vn;
        default:
          return E("Should have found matching lanes. This is a bug in React."), vn;
      }
    }
    function YE(e, t) {
      for (var i = e.pendingLanes, o = e.suspendedLanes, u = e.pingedLanes, d = e.expirationTimes, v = i; v > 0; ) {
        var g = gl(v), _ = 1 << g, w = d[g];
        w === vn ? ((_ & o) === te || (_ & u) !== te) && (d[g] = BE(_, t)) : w <= t && (e.expiredLanes |= _), v &= ~_;
      }
    }
    function WE(e) {
      return as(e.pendingLanes);
    }
    function ml(e) {
      var t = e.pendingLanes & ~Ui;
      return t !== te ? t : t & Ui ? Ui : te;
    }
    function fh(e) {
      return (e & lt) !== te;
    }
    function Uc(e) {
      return (e & ch) !== te;
    }
    function $m(e) {
      return (e & au) === e;
    }
    function Vm(e) {
      var t = lt | Oo | ra;
      return (e & t) === te;
    }
    function Bm(e) {
      return (e & hl) === e;
    }
    function Pc(e, t) {
      var i = Ka | Oo | Un | ra;
      return (t & i) !== te;
    }
    function Ym(e, t) {
      return (t & e.expiredLanes) !== te;
    }
    function dh(e) {
      return (e & hl) !== te;
    }
    function Wm() {
      var e = ad;
      return ad <<= 1, (ad & hl) === te && (ad = vi), e;
    }
    function gi() {
      var e = Mc;
      return Mc <<= 1, (Mc & au) === te && (Mc = ou), e;
    }
    function Wn(e) {
      return e & -e;
    }
    function os(e) {
      return Wn(e);
    }
    function gl(e) {
      return 31 - Ac(e);
    }
    function ld(e) {
      return gl(e);
    }
    function yi(e, t) {
      return (e & t) !== te;
    }
    function uu(e, t) {
      return (e & t) === t;
    }
    function Tt(e, t) {
      return e | t;
    }
    function jc(e, t) {
      return e & ~t;
    }
    function ud(e, t) {
      return e & t;
    }
    function GE(e) {
      return e;
    }
    function Gm(e, t) {
      return e !== Yn && e < t ? e : t;
    }
    function Ic(e) {
      for (var t = [], i = 0; i < Bn; i++)
        t.push(e);
      return t;
    }
    function su(e, t, i) {
      e.pendingLanes |= t, t !== vl && (e.suspendedLanes = te, e.pingedLanes = te);
      var o = e.eventTimes, u = ld(t);
      o[u] = i;
    }
    function Km(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var i = e.expirationTimes, o = t; o > 0; ) {
        var u = gl(o), d = 1 << u;
        i[u] = vn, o &= ~d;
      }
    }
    function sd(e, t, i) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function cd(e, t) {
      var i = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = te, e.pingedLanes = te, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var o = e.entanglements, u = e.eventTimes, d = e.expirationTimes, v = i; v > 0; ) {
        var g = gl(v), _ = 1 << g;
        o[g] = te, u[g] = vn, d[g] = vn, v &= ~_;
      }
    }
    function ph(e, t) {
      for (var i = e.entangledLanes |= t, o = e.entanglements, u = i; u; ) {
        var d = gl(u), v = 1 << d;
        // Is this one of the newly entangled lanes?
        v & t | // Is this lane transitively entangled with the newly entangled lanes?
        o[d] & t && (o[d] |= t), u &= ~v;
      }
    }
    function Qm(e, t) {
      var i = Wn(t), o;
      switch (i) {
        case Oo:
          o = Ka;
          break;
        case ra:
          o = Un;
          break;
        case vi:
        case mi:
        case ru:
        case Nc:
        case kc:
        case Gf:
        case Kf:
        case Qf:
        case Xf:
        case qf:
        case Zf:
        case Jf:
        case ed:
        case iu:
        case td:
        case rs:
        case ou:
        case Lc:
        case nd:
        case rd:
        case id:
          o = nu;
          break;
        case vl:
          o = is;
          break;
        default:
          o = Yn;
          break;
      }
      return (o & (e.suspendedLanes | t)) !== Yn ? Yn : o;
    }
    function fd(e, t, i) {
      if (zi)
        for (var o = e.pendingUpdatersLaneMap; i > 0; ) {
          var u = ld(i), d = 1 << u, v = o[u];
          v.add(t), i &= ~d;
        }
    }
    function hh(e, t) {
      if (zi)
        for (var i = e.pendingUpdatersLaneMap, o = e.memoizedUpdaters; t > 0; ) {
          var u = ld(t), d = 1 << u, v = i[u];
          v.size > 0 && (v.forEach(function(g) {
            var _ = g.alternate;
            (_ === null || !o.has(_)) && o.add(g);
          }), v.clear()), t &= ~d;
        }
    }
    function Fc(e, t) {
      return null;
    }
    var Gn = lt, Ao = Oo, Qa = ra, ls = vl, us = Yn;
    function ia() {
      return us;
    }
    function Pn(e) {
      us = e;
    }
    function $r(e, t) {
      var i = us;
      try {
        return us = e, t();
      } finally {
        us = i;
      }
    }
    function KE(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function QE(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function ss(e, t) {
      return e !== 0 && e < t;
    }
    function wr(e) {
      var t = Wn(e);
      return ss(Gn, t) ? ss(Ao, t) ? Uc(t) ? Qa : ls : Ao : Gn;
    }
    function dd(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Ue;
    function cs(e) {
      Ue = e;
    }
    function vh(e) {
      Ue(e);
    }
    var pd;
    function XE(e) {
      pd = e;
    }
    var fs;
    function hd(e) {
      fs = e;
    }
    var vd;
    function Xm(e) {
      vd = e;
    }
    var mh;
    function qm(e) {
      mh = e;
    }
    var Hc = !1, ds = [], Tn = null, vr = null, Wr = null, ps = /* @__PURE__ */ new Map(), hs = /* @__PURE__ */ new Map(), mr = [], Zm = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function Xa(e) {
      return Zm.indexOf(e) > -1;
    }
    function qE(e, t, i, o, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: i,
        nativeEvent: u,
        targetContainers: [o]
      };
    }
    function gh(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Tn = null;
          break;
        case "dragenter":
        case "dragleave":
          vr = null;
          break;
        case "mouseover":
        case "mouseout":
          Wr = null;
          break;
        case "pointerover":
        case "pointerout": {
          var i = t.pointerId;
          ps.delete(i);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var o = t.pointerId;
          hs.delete(o);
          break;
        }
      }
    }
    function vs(e, t, i, o, u, d) {
      if (e === null || e.nativeEvent !== d) {
        var v = qE(t, i, o, u, d);
        if (t !== null) {
          var g = Ts(t);
          g !== null && pd(g);
        }
        return v;
      }
      e.eventSystemFlags |= o;
      var _ = e.targetContainers;
      return u !== null && _.indexOf(u) === -1 && _.push(u), e;
    }
    function Jm(e, t, i, o, u) {
      switch (t) {
        case "focusin": {
          var d = u;
          return Tn = vs(Tn, e, t, i, o, d), !0;
        }
        case "dragenter": {
          var v = u;
          return vr = vs(vr, e, t, i, o, v), !0;
        }
        case "mouseover": {
          var g = u;
          return Wr = vs(Wr, e, t, i, o, g), !0;
        }
        case "pointerover": {
          var _ = u, w = _.pointerId;
          return ps.set(w, vs(ps.get(w) || null, e, t, i, o, _)), !0;
        }
        case "gotpointercapture": {
          var R = u, j = R.pointerId;
          return hs.set(j, vs(hs.get(j) || null, e, t, i, o, R)), !0;
        }
      }
      return !1;
    }
    function yh(e) {
      var t = Jc(e.target);
      if (t !== null) {
        var i = sl(t);
        if (i !== null) {
          var o = i.tag;
          if (o === oe) {
            var u = Ff(i);
            if (u !== null) {
              e.blockedOn = u, mh(e.priority, function() {
                fs(i);
              });
              return;
            }
          } else if (o === I) {
            var d = i.stateNode;
            if (dd(d)) {
              e.blockedOn = Hf(i);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function ZE(e) {
      for (var t = vd(), i = {
        blockedOn: null,
        target: e,
        priority: t
      }, o = 0; o < mr.length && ss(t, mr[o].priority); o++)
        ;
      mr.splice(o, 0, i), o === 0 && yh(i);
    }
    function cu(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var i = t[0], o = Vr(e.domEventName, e.eventSystemFlags, i, e.nativeEvent);
        if (o === null) {
          var u = e.nativeEvent, d = new u.constructor(u.type, u);
          FE(d), u.target.dispatchEvent(d), Tm();
        } else {
          var v = Ts(o);
          return v !== null && pd(v), e.blockedOn = o, !1;
        }
        t.shift();
      }
      return !0;
    }
    function md(e, t, i) {
      cu(e) && i.delete(t);
    }
    function aa() {
      Hc = !1, Tn !== null && cu(Tn) && (Tn = null), vr !== null && cu(vr) && (vr = null), Wr !== null && cu(Wr) && (Wr = null), ps.forEach(md), hs.forEach(md);
    }
    function kt(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Hc || (Hc = !0, s.unstable_scheduleCallback(s.unstable_NormalPriority, aa)));
    }
    function jn(e) {
      if (ds.length > 0) {
        kt(ds[0], e);
        for (var t = 1; t < ds.length; t++) {
          var i = ds[t];
          i.blockedOn === e && (i.blockedOn = null);
        }
      }
      Tn !== null && kt(Tn, e), vr !== null && kt(vr, e), Wr !== null && kt(Wr, e);
      var o = function(g) {
        return kt(g, e);
      };
      ps.forEach(o), hs.forEach(o);
      for (var u = 0; u < mr.length; u++) {
        var d = mr[u];
        d.blockedOn === e && (d.blockedOn = null);
      }
      for (; mr.length > 0; ) {
        var v = mr[0];
        if (v.blockedOn !== null)
          break;
        yh(v), v.blockedOn === null && mr.shift();
      }
    }
    var En = p.ReactCurrentBatchConfig, lr = !0;
    function Ei(e) {
      lr = !!e;
    }
    function ms() {
      return lr;
    }
    function ur(e, t, i) {
      var o = gd(t), u;
      switch (o) {
        case Gn:
          u = $c;
          break;
        case Ao:
          u = fu;
          break;
        case Qa:
        default:
          u = gs;
          break;
      }
      return u.bind(null, t, i, e);
    }
    function $c(e, t, i, o) {
      var u = ia(), d = En.transition;
      En.transition = null;
      try {
        Pn(Gn), gs(e, t, i, o);
      } finally {
        Pn(u), En.transition = d;
      }
    }
    function fu(e, t, i, o) {
      var u = ia(), d = En.transition;
      En.transition = null;
      try {
        Pn(Ao), gs(e, t, i, o);
      } finally {
        Pn(u), En.transition = d;
      }
    }
    function gs(e, t, i, o) {
      lr && Eh(e, t, i, o);
    }
    function Eh(e, t, i, o) {
      var u = Vr(e, t, i, o);
      if (u === null) {
        v_(e, t, o, yl, i), gh(e, o);
        return;
      }
      if (Jm(u, e, t, i, o)) {
        o.stopPropagation();
        return;
      }
      if (gh(e, o), t & yc && Xa(e)) {
        for (; u !== null; ) {
          var d = Ts(u);
          d !== null && vh(d);
          var v = Vr(e, t, i, o);
          if (v === null && v_(e, t, o, yl, i), v === u)
            break;
          u = v;
        }
        u !== null && o.stopPropagation();
        return;
      }
      v_(e, t, o, null, i);
    }
    var yl = null;
    function Vr(e, t, i, o) {
      yl = null;
      var u = un(o), d = Jc(u);
      if (d !== null) {
        var v = sl(d);
        if (v === null)
          d = null;
        else {
          var g = v.tag;
          if (g === oe) {
            var _ = Ff(v);
            if (_ !== null)
              return _;
            d = null;
          } else if (g === I) {
            var w = v.stateNode;
            if (dd(w))
              return Hf(v);
            d = null;
          } else
            v !== d && (d = null);
        }
      }
      return yl = d, null;
    }
    function gd(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return Gn;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return Ao;
        case "message": {
          var t = VE();
          switch (t) {
            case hi:
              return Gn;
            case Xu:
              return Ao;
            case Wa:
            case qu:
              return Qa;
            case wc:
              return ls;
            default:
              return Qa;
          }
        }
        default:
          return Qa;
      }
    }
    function ys(e, t, i) {
      return e.addEventListener(t, i, !1), i;
    }
    function No(e, t, i) {
      return e.addEventListener(t, i, !0), i;
    }
    function yd(e, t, i, o) {
      return e.addEventListener(t, i, {
        capture: !0,
        passive: o
      }), i;
    }
    function _h(e, t, i, o) {
      return e.addEventListener(t, i, {
        passive: o
      }), i;
    }
    var oa = null, Es = null, la = null;
    function Ed(e) {
      return oa = e, Es = Bc(), !0;
    }
    function Vc() {
      oa = null, Es = null, la = null;
    }
    function _d() {
      if (la)
        return la;
      var e, t = Es, i = t.length, o, u = Bc(), d = u.length;
      for (e = 0; e < i && t[e] === u[e]; e++)
        ;
      var v = i - e;
      for (o = 1; o <= v && t[i - o] === u[d - o]; o++)
        ;
      var g = o > 1 ? 1 - o : void 0;
      return la = u.slice(e, g), la;
    }
    function Bc() {
      return "value" in oa ? oa.value : oa.textContent;
    }
    function du(e) {
      var t, i = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && i === 13 && (t = 13)) : t = i, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function gr() {
      return !0;
    }
    function ko() {
      return !1;
    }
    function An(e) {
      function t(i, o, u, d, v) {
        this._reactName = i, this._targetInst = u, this.type = o, this.nativeEvent = d, this.target = v, this.currentTarget = null;
        for (var g in e)
          if (e.hasOwnProperty(g)) {
            var _ = e[g];
            _ ? this[g] = _(d) : this[g] = d[g];
          }
        var w = d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1;
        return w ? this.isDefaultPrevented = gr : this.isDefaultPrevented = ko, this.isPropagationStopped = ko, this;
      }
      return Dt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var i = this.nativeEvent;
          i && (i.preventDefault ? i.preventDefault() : typeof i.returnValue != "unknown" && (i.returnValue = !1), this.isDefaultPrevented = gr);
        },
        stopPropagation: function() {
          var i = this.nativeEvent;
          i && (i.stopPropagation ? i.stopPropagation() : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0), this.isPropagationStopped = gr);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: gr
      }), t;
    }
    var sr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Sd = An(sr), pu = Dt({}, sr, {
      view: 0,
      detail: 0
    }), Sh = An(pu), Ch, qa, _s;
    function bh(e) {
      e !== _s && (_s && e.type === "mousemove" ? (Ch = e.screenX - _s.screenX, qa = e.screenY - _s.screenY) : (Ch = 0, qa = 0), _s = e);
    }
    var Za = Dt({}, pu, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Th,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (bh(e), Ch);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : qa;
      }
    }), Cd = An(Za), hu = Dt({}, Za, {
      dataTransfer: 0
    }), eg = An(hu), tg = Dt({}, pu, {
      relatedTarget: 0
    }), Yc = An(tg), bd = Dt({}, sr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), JE = An(bd), e_ = Dt({}, sr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), ng = An(e_), rg = Dt({}, sr, {
      data: 0
    }), El = An(rg), t_ = El, Ss = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, ig = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function In(e) {
      if (e.key) {
        var t = Ss[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var i = du(e);
        return i === 13 ? "Enter" : String.fromCharCode(i);
      }
      return e.type === "keydown" || e.type === "keyup" ? ig[e.keyCode] || "Unidentified" : "";
    }
    var n_ = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function ag(e) {
      var t = this, i = t.nativeEvent;
      if (i.getModifierState)
        return i.getModifierState(e);
      var o = n_[e];
      return o ? !!i[o] : !1;
    }
    function Th(e) {
      return ag;
    }
    var r_ = Dt({}, pu, {
      key: In,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Th,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? du(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? du(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), og = An(r_), lg = Dt({}, Za, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), ug = An(lg), ua = Dt({}, pu, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Th
    }), wh = An(ua), i_ = Dt({}, sr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), _l = An(i_), Td = Dt({}, Za, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), vu = An(Td), wd = [9, 13, 27, 32], Rd = 229, Wc = Sn && "CompositionEvent" in window, Gc = null;
    Sn && "documentMode" in document && (Gc = document.documentMode);
    var Rh = Sn && "TextEvent" in window && !Gc, sg = Sn && (!Wc || Gc && Gc > 8 && Gc <= 11), xh = 32, Dh = String.fromCharCode(xh);
    function xd() {
      Mr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Mr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Mr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Mr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Kc = !1;
    function cg(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Oh(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function a_(e, t) {
      return e === "keydown" && t.keyCode === Rd;
    }
    function Ah(e, t) {
      switch (e) {
        case "keyup":
          return wd.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Rd;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Dd(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Qc(e) {
      return e.locale === "ko";
    }
    var Sl = !1;
    function Od(e, t, i, o, u) {
      var d, v;
      if (Wc ? d = Oh(t) : Sl ? Ah(t, o) && (d = "onCompositionEnd") : a_(t, o) && (d = "onCompositionStart"), !d)
        return null;
      sg && !Qc(o) && (!Sl && d === "onCompositionStart" ? Sl = Ed(u) : d === "onCompositionEnd" && Sl && (v = _d()));
      var g = mg(i, d);
      if (g.length > 0) {
        var _ = new El(d, t, null, o, u);
        if (e.push({
          event: _,
          listeners: g
        }), v)
          _.data = v;
        else {
          var w = Dd(o);
          w !== null && (_.data = w);
        }
      }
    }
    function fg(e, t) {
      switch (e) {
        case "compositionend":
          return Dd(t);
        case "keypress":
          var i = t.which;
          return i !== xh ? null : (Kc = !0, Dh);
        case "textInput":
          var o = t.data;
          return o === Dh && Kc ? null : o;
        default:
          return null;
      }
    }
    function o_(e, t) {
      if (Sl) {
        if (e === "compositionend" || !Wc && Ah(e, t)) {
          var i = _d();
          return Vc(), Sl = !1, i;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!cg(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return sg && !Qc(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Ad(e, t, i, o, u) {
      var d;
      if (Rh ? d = fg(t, o) : d = o_(t, o), !d)
        return null;
      var v = mg(i, "onBeforeInput");
      if (v.length > 0) {
        var g = new t_("onBeforeInput", "beforeinput", null, o, u);
        e.push({
          event: g,
          listeners: v
        }), g.data = d;
      }
    }
    function l_(e, t, i, o, u, d, v) {
      Od(e, t, i, o, u), Ad(e, t, i, o, u);
    }
    var Xc = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function dg(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Xc[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function Nd(e) {
      if (!Sn)
        return !1;
      var t = "on" + e, i = t in document;
      if (!i) {
        var o = document.createElement("div");
        o.setAttribute(t, "return;"), i = typeof o[t] == "function";
      }
      return i;
    }
    function n() {
      Mr("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function r(e, t, i, o) {
      Gu(o);
      var u = mg(t, "onChange");
      if (u.length > 0) {
        var d = new Sd("onChange", "change", null, i, o);
        e.push({
          event: d,
          listeners: u
        });
      }
    }
    var l = null, f = null;
    function h(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function m(e) {
      var t = [];
      r(t, f, e, un(e)), _c(b, t);
    }
    function b(e) {
      _b(e, 0);
    }
    function x(e) {
      var t = Pd(e);
      if (Fu(t))
        return e;
    }
    function z(e, t) {
      if (e === "change")
        return t;
    }
    var Q = !1;
    Sn && (Q = Nd("input") && (!document.documentMode || document.documentMode > 9));
    function se(e, t) {
      l = e, f = t, l.attachEvent("onpropertychange", le);
    }
    function fe() {
      l && (l.detachEvent("onpropertychange", le), l = null, f = null);
    }
    function le(e) {
      e.propertyName === "value" && x(f) && m(e);
    }
    function Oe(e, t, i) {
      e === "focusin" ? (fe(), se(t, i)) : e === "focusout" && fe();
    }
    function Ie(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return x(f);
    }
    function Ve(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Kn(e, t) {
      if (e === "click")
        return x(t);
    }
    function F(e, t) {
      if (e === "input" || e === "change")
        return x(t);
    }
    function P(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || pt(e, "number", e.value);
    }
    function Y(e, t, i, o, u, d, v) {
      var g = i ? Pd(i) : window, _, w;
      if (h(g) ? _ = z : dg(g) ? Q ? _ = F : (_ = Ie, w = Oe) : Ve(g) && (_ = Kn), _) {
        var R = _(t, i);
        if (R) {
          r(e, R, o, u);
          return;
        }
      }
      w && w(t, g, i), t === "focusout" && P(g);
    }
    function ve() {
      ar("onMouseEnter", ["mouseout", "mouseover"]), ar("onMouseLeave", ["mouseout", "mouseover"]), ar("onPointerEnter", ["pointerout", "pointerover"]), ar("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function Ye(e, t, i, o, u, d, v) {
      var g = t === "mouseover" || t === "pointerover", _ = t === "mouseout" || t === "pointerout";
      if (g && !wm(o)) {
        var w = o.relatedTarget || o.fromElement;
        if (w && (Jc(w) || Bh(w)))
          return;
      }
      if (!(!_ && !g)) {
        var R;
        if (u.window === u)
          R = u;
        else {
          var j = u.ownerDocument;
          j ? R = j.defaultView || j.parentWindow : R = window;
        }
        var U, G;
        if (_) {
          var K = o.relatedTarget || o.toElement;
          if (U = i, G = K ? Jc(K) : null, G !== null) {
            var Z = sl(G);
            (G !== Z || G.tag !== B && G.tag !== X) && (G = null);
          }
        } else
          U = null, G = i;
        if (U !== G) {
          var Le = Cd, it = "onMouseLeave", Ke = "onMouseEnter", Pt = "mouse";
          (t === "pointerout" || t === "pointerover") && (Le = ug, it = "onPointerLeave", Ke = "onPointerEnter", Pt = "pointer");
          var Lt = U == null ? R : Pd(U), $ = G == null ? R : Pd(G), J = new Le(it, Pt + "leave", U, o, u);
          J.target = Lt, J.relatedTarget = $;
          var V = null, de = Jc(u);
          if (de === i) {
            var Me = new Le(Ke, Pt + "enter", G, o, u);
            Me.target = $, Me.relatedTarget = Lt, V = Me;
          }
          LD(e, J, V, U, G);
        }
      }
    }
    function ut(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Fe = typeof Object.is == "function" ? Object.is : ut;
    function ft(e, t) {
      if (Fe(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var i = Object.keys(e), o = Object.keys(t);
      if (i.length !== o.length)
        return !1;
      for (var u = 0; u < i.length; u++) {
        var d = i[u];
        if (!or.call(t, d) || !Fe(e[d], t[d]))
          return !1;
      }
      return !0;
    }
    function cr(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Bt(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Lo(e, t) {
      for (var i = cr(e), o = 0, u = 0; i; ) {
        if (i.nodeType === So) {
          if (u = o + i.textContent.length, o <= t && u >= t)
            return {
              node: i,
              offset: t - o
            };
          o = u;
        }
        i = cr(Bt(i));
      }
    }
    function u_(e) {
      var t = e.ownerDocument, i = t && t.defaultView || window, o = i.getSelection && i.getSelection();
      if (!o || o.rangeCount === 0)
        return null;
      var u = o.anchorNode, d = o.anchorOffset, v = o.focusNode, g = o.focusOffset;
      try {
        u.nodeType, v.nodeType;
      } catch {
        return null;
      }
      return pD(e, u, d, v, g);
    }
    function pD(e, t, i, o, u) {
      var d = 0, v = -1, g = -1, _ = 0, w = 0, R = e, j = null;
      e:
        for (; ; ) {
          for (var U = null; R === t && (i === 0 || R.nodeType === So) && (v = d + i), R === o && (u === 0 || R.nodeType === So) && (g = d + u), R.nodeType === So && (d += R.nodeValue.length), (U = R.firstChild) !== null; )
            j = R, R = U;
          for (; ; ) {
            if (R === e)
              break e;
            if (j === t && ++_ === i && (v = d), j === o && ++w === u && (g = d), (U = R.nextSibling) !== null)
              break;
            R = j, j = R.parentNode;
          }
          R = U;
        }
      return v === -1 || g === -1 ? null : {
        start: v,
        end: g
      };
    }
    function hD(e, t) {
      var i = e.ownerDocument || document, o = i && i.defaultView || window;
      if (o.getSelection) {
        var u = o.getSelection(), d = e.textContent.length, v = Math.min(t.start, d), g = t.end === void 0 ? v : Math.min(t.end, d);
        if (!u.extend && v > g) {
          var _ = g;
          g = v, v = _;
        }
        var w = Lo(e, v), R = Lo(e, g);
        if (w && R) {
          if (u.rangeCount === 1 && u.anchorNode === w.node && u.anchorOffset === w.offset && u.focusNode === R.node && u.focusOffset === R.offset)
            return;
          var j = i.createRange();
          j.setStart(w.node, w.offset), u.removeAllRanges(), v > g ? (u.addRange(j), u.extend(R.node, R.offset)) : (j.setEnd(R.node, R.offset), u.addRange(j));
        }
      }
    }
    function ub(e) {
      return e && e.nodeType === So;
    }
    function sb(e, t) {
      return !e || !t ? !1 : e === t ? !0 : ub(e) ? !1 : ub(t) ? sb(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function vD(e) {
      return e && e.ownerDocument && sb(e.ownerDocument.documentElement, e);
    }
    function mD(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function cb() {
      for (var e = window, t = Ha(); t instanceof e.HTMLIFrameElement; ) {
        if (mD(t))
          e = t.contentWindow;
        else
          return t;
        t = Ha(e.document);
      }
      return t;
    }
    function s_(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function gD() {
      var e = cb();
      return {
        focusedElem: e,
        selectionRange: s_(e) ? ED(e) : null
      };
    }
    function yD(e) {
      var t = cb(), i = e.focusedElem, o = e.selectionRange;
      if (t !== i && vD(i)) {
        o !== null && s_(i) && _D(i, o);
        for (var u = [], d = i; d = d.parentNode; )
          d.nodeType === si && u.push({
            element: d,
            left: d.scrollLeft,
            top: d.scrollTop
          });
        typeof i.focus == "function" && i.focus();
        for (var v = 0; v < u.length; v++) {
          var g = u[v];
          g.element.scrollLeft = g.left, g.element.scrollTop = g.top;
        }
      }
    }
    function ED(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = u_(e), t || {
        start: 0,
        end: 0
      };
    }
    function _D(e, t) {
      var i = t.start, o = t.end;
      o === void 0 && (o = i), "selectionStart" in e ? (e.selectionStart = i, e.selectionEnd = Math.min(o, e.value.length)) : hD(e, t);
    }
    var SD = Sn && "documentMode" in document && document.documentMode <= 11;
    function CD() {
      Mr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var kd = null, c_ = null, Nh = null, f_ = !1;
    function bD(e) {
      if ("selectionStart" in e && s_(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, i = t.getSelection();
      return {
        anchorNode: i.anchorNode,
        anchorOffset: i.anchorOffset,
        focusNode: i.focusNode,
        focusOffset: i.focusOffset
      };
    }
    function TD(e) {
      return e.window === e ? e.document : e.nodeType === Ai ? e : e.ownerDocument;
    }
    function fb(e, t, i) {
      var o = TD(i);
      if (!(f_ || kd == null || kd !== Ha(o))) {
        var u = bD(kd);
        if (!Nh || !ft(Nh, u)) {
          Nh = u;
          var d = mg(c_, "onSelect");
          if (d.length > 0) {
            var v = new Sd("onSelect", "select", null, t, i);
            e.push({
              event: v,
              listeners: d
            }), v.target = kd;
          }
        }
      }
    }
    function wD(e, t, i, o, u, d, v) {
      var g = i ? Pd(i) : window;
      switch (t) {
        case "focusin":
          (dg(g) || g.contentEditable === "true") && (kd = g, c_ = i, Nh = null);
          break;
        case "focusout":
          kd = null, c_ = null, Nh = null;
          break;
        case "mousedown":
          f_ = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          f_ = !1, fb(e, o, u);
          break;
        case "selectionchange":
          if (SD)
            break;
        case "keydown":
        case "keyup":
          fb(e, o, u);
      }
    }
    function pg(e, t) {
      var i = {};
      return i[e.toLowerCase()] = t.toLowerCase(), i["Webkit" + e] = "webkit" + t, i["Moz" + e] = "moz" + t, i;
    }
    var Ld = {
      animationend: pg("Animation", "AnimationEnd"),
      animationiteration: pg("Animation", "AnimationIteration"),
      animationstart: pg("Animation", "AnimationStart"),
      transitionend: pg("Transition", "TransitionEnd")
    }, d_ = {}, db = {};
    Sn && (db = document.createElement("div").style, "AnimationEvent" in window || (delete Ld.animationend.animation, delete Ld.animationiteration.animation, delete Ld.animationstart.animation), "TransitionEvent" in window || delete Ld.transitionend.transition);
    function hg(e) {
      if (d_[e])
        return d_[e];
      if (!Ld[e])
        return e;
      var t = Ld[e];
      for (var i in t)
        if (t.hasOwnProperty(i) && i in db)
          return d_[e] = t[i];
      return e;
    }
    var pb = hg("animationend"), hb = hg("animationiteration"), vb = hg("animationstart"), mb = hg("transitionend"), gb = /* @__PURE__ */ new Map(), yb = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Cs(e, t) {
      gb.set(e, t), Mr(t, [e]);
    }
    function RD() {
      for (var e = 0; e < yb.length; e++) {
        var t = yb[e], i = t.toLowerCase(), o = t[0].toUpperCase() + t.slice(1);
        Cs(i, "on" + o);
      }
      Cs(pb, "onAnimationEnd"), Cs(hb, "onAnimationIteration"), Cs(vb, "onAnimationStart"), Cs("dblclick", "onDoubleClick"), Cs("focusin", "onFocus"), Cs("focusout", "onBlur"), Cs(mb, "onTransitionEnd");
    }
    function xD(e, t, i, o, u, d, v) {
      var g = gb.get(t);
      if (g !== void 0) {
        var _ = Sd, w = t;
        switch (t) {
          case "keypress":
            if (du(o) === 0)
              return;
          case "keydown":
          case "keyup":
            _ = og;
            break;
          case "focusin":
            w = "focus", _ = Yc;
            break;
          case "focusout":
            w = "blur", _ = Yc;
            break;
          case "beforeblur":
          case "afterblur":
            _ = Yc;
            break;
          case "click":
            if (o.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            _ = Cd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            _ = eg;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            _ = wh;
            break;
          case pb:
          case hb:
          case vb:
            _ = JE;
            break;
          case mb:
            _ = _l;
            break;
          case "scroll":
            _ = Sh;
            break;
          case "wheel":
            _ = vu;
            break;
          case "copy":
          case "cut":
          case "paste":
            _ = ng;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            _ = ug;
            break;
        }
        var R = (d & yc) !== 0;
        {
          var j = !R && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", U = ND(i, g, o.type, R, j);
          if (U.length > 0) {
            var G = new _(g, w, null, o, u);
            e.push({
              event: G,
              listeners: U
            });
          }
        }
      }
    }
    RD(), ve(), n(), CD(), xd();
    function DD(e, t, i, o, u, d, v) {
      xD(e, t, i, o, u, d);
      var g = (d & IE) === 0;
      g && (Ye(e, t, i, o, u), Y(e, t, i, o, u), wD(e, t, i, o, u), l_(e, t, i, o, u));
    }
    var kh = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], p_ = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(kh));
    function Eb(e, t, i) {
      var o = e.type || "unknown-event";
      e.currentTarget = i, qp(o, t, void 0, e), e.currentTarget = null;
    }
    function OD(e, t, i) {
      var o;
      if (i)
        for (var u = t.length - 1; u >= 0; u--) {
          var d = t[u], v = d.instance, g = d.currentTarget, _ = d.listener;
          if (v !== o && e.isPropagationStopped())
            return;
          Eb(e, _, g), o = v;
        }
      else
        for (var w = 0; w < t.length; w++) {
          var R = t[w], j = R.instance, U = R.currentTarget, G = R.listener;
          if (j !== o && e.isPropagationStopped())
            return;
          Eb(e, G, U), o = j;
        }
    }
    function _b(e, t) {
      for (var i = (t & yc) !== 0, o = 0; o < e.length; o++) {
        var u = e[o], d = u.event, v = u.listeners;
        OD(d, v, i);
      }
      HE();
    }
    function AD(e, t, i, o, u) {
      var d = un(i), v = [];
      DD(v, e, o, i, d, t), _b(v, t);
    }
    function Nn(e, t) {
      p_.has(e) || E('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var i = !1, o = oA(t), u = MD(e, i);
      o.has(u) || (Sb(t, e, gc, i), o.add(u));
    }
    function h_(e, t, i) {
      p_.has(e) && !t && E('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var o = 0;
      t && (o |= yc), Sb(i, e, o, t);
    }
    var vg = "_reactListening" + Math.random().toString(36).slice(2);
    function Lh(e) {
      if (!e[vg]) {
        e[vg] = !0, Zt.forEach(function(i) {
          i !== "selectionchange" && (p_.has(i) || h_(i, !1, e), h_(i, !0, e));
        });
        var t = e.nodeType === Ai ? e : e.ownerDocument;
        t !== null && (t[vg] || (t[vg] = !0, h_("selectionchange", !1, t)));
      }
    }
    function Sb(e, t, i, o, u) {
      var d = ur(e, t, i), v = void 0;
      Sc && (t === "touchstart" || t === "touchmove" || t === "wheel") && (v = !0), e = e, o ? v !== void 0 ? yd(e, t, d, v) : No(e, t, d) : v !== void 0 ? _h(e, t, d, v) : ys(e, t, d);
    }
    function Cb(e, t) {
      return e === t || e.nodeType === Mn && e.parentNode === t;
    }
    function v_(e, t, i, o, u) {
      var d = o;
      if (!(t & zf) && !(t & gc)) {
        var v = u;
        if (o !== null) {
          var g = o;
          e:
            for (; ; ) {
              if (g === null)
                return;
              var _ = g.tag;
              if (_ === I || _ === H) {
                var w = g.stateNode.containerInfo;
                if (Cb(w, v))
                  break;
                if (_ === H)
                  for (var R = g.return; R !== null; ) {
                    var j = R.tag;
                    if (j === I || j === H) {
                      var U = R.stateNode.containerInfo;
                      if (Cb(U, v))
                        return;
                    }
                    R = R.return;
                  }
                for (; w !== null; ) {
                  var G = Jc(w);
                  if (G === null)
                    return;
                  var K = G.tag;
                  if (K === B || K === X) {
                    g = d = G;
                    continue e;
                  }
                  w = w.parentNode;
                }
              }
              g = g.return;
            }
        }
      }
      _c(function() {
        return AD(e, t, i, d);
      });
    }
    function Mh(e, t, i) {
      return {
        instance: e,
        listener: t,
        currentTarget: i
      };
    }
    function ND(e, t, i, o, u, d) {
      for (var v = t !== null ? t + "Capture" : null, g = o ? v : t, _ = [], w = e, R = null; w !== null; ) {
        var j = w, U = j.stateNode, G = j.tag;
        if (G === B && U !== null && (R = U, g !== null)) {
          var K = Xl(w, g);
          K != null && _.push(Mh(w, K, R));
        }
        if (u)
          break;
        w = w.return;
      }
      return _;
    }
    function mg(e, t) {
      for (var i = t + "Capture", o = [], u = e; u !== null; ) {
        var d = u, v = d.stateNode, g = d.tag;
        if (g === B && v !== null) {
          var _ = v, w = Xl(u, i);
          w != null && o.unshift(Mh(u, w, _));
          var R = Xl(u, t);
          R != null && o.push(Mh(u, R, _));
        }
        u = u.return;
      }
      return o;
    }
    function Md(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== B);
      return e || null;
    }
    function kD(e, t) {
      for (var i = e, o = t, u = 0, d = i; d; d = Md(d))
        u++;
      for (var v = 0, g = o; g; g = Md(g))
        v++;
      for (; u - v > 0; )
        i = Md(i), u--;
      for (; v - u > 0; )
        o = Md(o), v--;
      for (var _ = u; _--; ) {
        if (i === o || o !== null && i === o.alternate)
          return i;
        i = Md(i), o = Md(o);
      }
      return null;
    }
    function bb(e, t, i, o, u) {
      for (var d = t._reactName, v = [], g = i; g !== null && g !== o; ) {
        var _ = g, w = _.alternate, R = _.stateNode, j = _.tag;
        if (w !== null && w === o)
          break;
        if (j === B && R !== null) {
          var U = R;
          if (u) {
            var G = Xl(g, d);
            G != null && v.unshift(Mh(g, G, U));
          } else if (!u) {
            var K = Xl(g, d);
            K != null && v.push(Mh(g, K, U));
          }
        }
        g = g.return;
      }
      v.length !== 0 && e.push({
        event: t,
        listeners: v
      });
    }
    function LD(e, t, i, o, u) {
      var d = o && u ? kD(o, u) : null;
      o !== null && bb(e, t, o, d, !1), u !== null && i !== null && bb(e, i, u, d, !0);
    }
    function MD(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var sa = !1, zh = "dangerouslySetInnerHTML", gg = "suppressContentEditableWarning", bs = "suppressHydrationWarning", Tb = "autoFocus", qc = "children", Zc = "style", yg = "__html", m_, Eg, Uh, wb, _g, Rb, xb;
    m_ = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Eg = function(e, t) {
      Wu(e, t), Em(e, t), al(e, t, {
        registrationNameDependencies: ir,
        possibleRegistrationNames: Hn
      });
    }, Rb = Sn && !document.documentMode, Uh = function(e, t, i) {
      if (!sa) {
        var o = Sg(i), u = Sg(t);
        u !== o && (sa = !0, E("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(o)));
      }
    }, wb = function(e) {
      if (!sa) {
        sa = !0;
        var t = [];
        e.forEach(function(i) {
          t.push(i);
        }), E("Extra attributes from the server: %s", t);
      }
    }, _g = function(e, t) {
      t === !1 ? E("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : E("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, xb = function(e, t) {
      var i = e.namespaceURI === _o ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return i.innerHTML = t, i.innerHTML;
    };
    var zD = /\r\n?/g, UD = /\u0000|\uFFFD/g;
    function Sg(e) {
      Ur(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(zD, `
`).replace(UD, "");
    }
    function Cg(e, t, i, o) {
      var u = Sg(t), d = Sg(e);
      if (d !== u && (o && (sa || (sa = !0, E('Text content did not match. Server: "%s" Client: "%s"', d, u))), i && ee))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function Db(e) {
      return e.nodeType === Ai ? e : e.ownerDocument;
    }
    function PD() {
    }
    function bg(e) {
      e.onclick = PD;
    }
    function jD(e, t, i, o, u) {
      for (var d in o)
        if (o.hasOwnProperty(d)) {
          var v = o[d];
          if (d === Zc)
            v && Object.freeze(v), pm(t, v);
          else if (d === zh) {
            var g = v ? v[yg] : void 0;
            g != null && im(t, g);
          } else if (d === qc)
            if (typeof v == "string") {
              var _ = e !== "textarea" || v !== "";
              _ && fc(t, v);
            } else
              typeof v == "number" && fc(t, "" + v);
          else
            d === gg || d === bs || d === Tb || (ir.hasOwnProperty(d) ? v != null && (typeof v != "function" && _g(d, v), d === "onScroll" && Nn("scroll", t)) : v != null && fo(t, d, v, u));
        }
    }
    function ID(e, t, i, o) {
      for (var u = 0; u < t.length; u += 2) {
        var d = t[u], v = t[u + 1];
        d === Zc ? pm(e, v) : d === zh ? im(e, v) : d === qc ? fc(e, v) : fo(e, d, v, o);
      }
    }
    function FD(e, t, i, o) {
      var u, d = Db(i), v, g = o;
      if (g === _o && (g = Lp(e)), g === _o) {
        if (u = Gl(e, t), !u && e !== e.toLowerCase() && E("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var _ = d.createElement("div");
          _.innerHTML = "<script><\/script>";
          var w = _.firstChild;
          v = _.removeChild(w);
        } else if (typeof t.is == "string")
          v = d.createElement(e, {
            is: t.is
          });
        else if (v = d.createElement(e), e === "select") {
          var R = v;
          t.multiple ? R.multiple = !0 : t.size && (R.size = t.size);
        }
      } else
        v = d.createElementNS(g, e);
      return g === _o && !u && Object.prototype.toString.call(v) === "[object HTMLUnknownElement]" && !or.call(m_, e) && (m_[e] = !0, E("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), v;
    }
    function HD(e, t) {
      return Db(t).createTextNode(e);
    }
    function $D(e, t, i, o) {
      var u = Gl(t, i);
      Eg(t, i);
      var d;
      switch (t) {
        case "dialog":
          Nn("cancel", e), Nn("close", e), d = i;
          break;
        case "iframe":
        case "object":
        case "embed":
          Nn("load", e), d = i;
          break;
        case "video":
        case "audio":
          for (var v = 0; v < kh.length; v++)
            Nn(kh[v], e);
          d = i;
          break;
        case "source":
          Nn("error", e), d = i;
          break;
        case "img":
        case "image":
        case "link":
          Nn("error", e), Nn("load", e), d = i;
          break;
        case "details":
          Nn("toggle", e), d = i;
          break;
        case "input":
          A(e, i), d = S(e, i), Nn("invalid", e);
          break;
        case "option":
          tn(e, i), d = i;
          break;
        case "select":
          cc(e, i), d = sc(e, i), Nn("invalid", e);
          break;
        case "textarea":
          nm(e, i), d = kp(e, i), Nn("invalid", e);
          break;
        default:
          d = i;
      }
      switch (hc(t, d), jD(t, e, o, d, u), t) {
        case "input":
          go(e), he(e, i, !1);
          break;
        case "textarea":
          go(e), Df(e);
          break;
        case "option":
          nn(e, i);
          break;
        case "select":
          Np(e, i);
          break;
        default:
          typeof d.onClick == "function" && bg(e);
          break;
      }
    }
    function VD(e, t, i, o, u) {
      Eg(t, o);
      var d = null, v, g;
      switch (t) {
        case "input":
          v = S(e, i), g = S(e, o), d = [];
          break;
        case "select":
          v = sc(e, i), g = sc(e, o), d = [];
          break;
        case "textarea":
          v = kp(e, i), g = kp(e, o), d = [];
          break;
        default:
          v = i, g = o, typeof v.onClick != "function" && typeof g.onClick == "function" && bg(e);
          break;
      }
      hc(t, g);
      var _, w, R = null;
      for (_ in v)
        if (!(g.hasOwnProperty(_) || !v.hasOwnProperty(_) || v[_] == null))
          if (_ === Zc) {
            var j = v[_];
            for (w in j)
              j.hasOwnProperty(w) && (R || (R = {}), R[w] = "");
          } else
            _ === zh || _ === qc || _ === gg || _ === bs || _ === Tb || (ir.hasOwnProperty(_) ? d || (d = []) : (d = d || []).push(_, null));
      for (_ in g) {
        var U = g[_], G = v != null ? v[_] : void 0;
        if (!(!g.hasOwnProperty(_) || U === G || U == null && G == null))
          if (_ === Zc)
            if (U && Object.freeze(U), G) {
              for (w in G)
                G.hasOwnProperty(w) && (!U || !U.hasOwnProperty(w)) && (R || (R = {}), R[w] = "");
              for (w in U)
                U.hasOwnProperty(w) && G[w] !== U[w] && (R || (R = {}), R[w] = U[w]);
            } else
              R || (d || (d = []), d.push(_, R)), R = U;
          else if (_ === zh) {
            var K = U ? U[yg] : void 0, Z = G ? G[yg] : void 0;
            K != null && Z !== K && (d = d || []).push(_, K);
          } else
            _ === qc ? (typeof U == "string" || typeof U == "number") && (d = d || []).push(_, "" + U) : _ === gg || _ === bs || (ir.hasOwnProperty(_) ? (U != null && (typeof U != "function" && _g(_, U), _ === "onScroll" && Nn("scroll", e)), !d && G !== U && (d = [])) : (d = d || []).push(_, U));
      }
      return R && (hm(R, g[Zc]), (d = d || []).push(Zc, R)), d;
    }
    function BD(e, t, i, o, u) {
      i === "input" && u.type === "radio" && u.name != null && W(e, u);
      var d = Gl(i, o), v = Gl(i, u);
      switch (ID(e, t, d, v), i) {
        case "input":
          q(e, u);
          break;
        case "textarea":
          rm(e, u);
          break;
        case "select":
          DE(e, u);
          break;
      }
    }
    function YD(e) {
      {
        var t = e.toLowerCase();
        return kf.hasOwnProperty(t) && kf[t] || null;
      }
    }
    function WD(e, t, i, o, u, d, v) {
      var g, _;
      switch (g = Gl(t, i), Eg(t, i), t) {
        case "dialog":
          Nn("cancel", e), Nn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Nn("load", e);
          break;
        case "video":
        case "audio":
          for (var w = 0; w < kh.length; w++)
            Nn(kh[w], e);
          break;
        case "source":
          Nn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Nn("error", e), Nn("load", e);
          break;
        case "details":
          Nn("toggle", e);
          break;
        case "input":
          A(e, i), Nn("invalid", e);
          break;
        case "option":
          tn(e, i);
          break;
        case "select":
          cc(e, i), Nn("invalid", e);
          break;
        case "textarea":
          nm(e, i), Nn("invalid", e);
          break;
      }
      hc(t, i);
      {
        _ = /* @__PURE__ */ new Set();
        for (var R = e.attributes, j = 0; j < R.length; j++) {
          var U = R[j].name.toLowerCase();
          switch (U) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              _.add(R[j].name);
          }
        }
      }
      var G = null;
      for (var K in i)
        if (i.hasOwnProperty(K)) {
          var Z = i[K];
          if (K === qc)
            typeof Z == "string" ? e.textContent !== Z && (i[bs] !== !0 && Cg(e.textContent, Z, d, v), G = [qc, Z]) : typeof Z == "number" && e.textContent !== "" + Z && (i[bs] !== !0 && Cg(e.textContent, Z, d, v), G = [qc, "" + Z]);
          else if (ir.hasOwnProperty(K))
            Z != null && (typeof Z != "function" && _g(K, Z), K === "onScroll" && Nn("scroll", e));
          else if (v && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof g == "boolean") {
            var Le = void 0, it = g && Qe ? null : pr(K);
            if (i[bs] !== !0) {
              if (!(K === gg || K === bs || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              K === "value" || K === "checked" || K === "selected")) {
                if (K === zh) {
                  var Ke = e.innerHTML, Pt = Z ? Z[yg] : void 0;
                  if (Pt != null) {
                    var Lt = xb(e, Pt);
                    Lt !== Ke && Uh(K, Ke, Lt);
                  }
                } else if (K === Zc) {
                  if (_.delete(K), Rb) {
                    var $ = jE(Z);
                    Le = e.getAttribute("style"), $ !== Le && Uh(K, Le, $);
                  }
                } else if (g && !Qe)
                  _.delete(K.toLowerCase()), Le = Gi(e, K, Z), Z !== Le && Uh(K, Le, Z);
                else if (!Rn(K, it, g) && !Jt(K, Z, it, g)) {
                  var J = !1;
                  if (it !== null)
                    _.delete(it.attributeName), Le = _a(e, K, Z, it);
                  else {
                    var V = o;
                    if (V === _o && (V = Lp(t)), V === _o)
                      _.delete(K.toLowerCase());
                    else {
                      var de = YD(K);
                      de !== null && de !== K && (J = !0, _.delete(de)), _.delete(K);
                    }
                    Le = Gi(e, K, Z);
                  }
                  var Me = Qe;
                  !Me && Z !== Le && !J && Uh(K, Le, Z);
                }
              }
            }
          }
        }
      switch (v && // $FlowFixMe - Should be inferred as not undefined.
      _.size > 0 && i[bs] !== !0 && wb(_), t) {
        case "input":
          go(e), he(e, i, !0);
          break;
        case "textarea":
          go(e), Df(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof i.onClick == "function" && bg(e);
          break;
      }
      return G;
    }
    function GD(e, t, i) {
      var o = e.nodeValue !== t;
      return o;
    }
    function g_(e, t) {
      {
        if (sa)
          return;
        sa = !0, E("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function y_(e, t) {
      {
        if (sa)
          return;
        sa = !0, E('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function E_(e, t, i) {
      {
        if (sa)
          return;
        sa = !0, E("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function __(e, t) {
      {
        if (t === "" || sa)
          return;
        sa = !0, E('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function KD(e, t, i) {
      switch (t) {
        case "input":
          $e(e, i);
          return;
        case "textarea":
          OE(e, i);
          return;
        case "select":
          em(e, i);
          return;
      }
    }
    var Ph = function() {
    }, jh = function() {
    };
    {
      var QD = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], Ob = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], XD = Ob.concat(["button"]), qD = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], Ab = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      jh = function(e, t) {
        var i = Dt({}, e || Ab), o = {
          tag: t
        };
        return Ob.indexOf(t) !== -1 && (i.aTagInScope = null, i.buttonTagInScope = null, i.nobrTagInScope = null), XD.indexOf(t) !== -1 && (i.pTagInButtonScope = null), QD.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (i.listItemTagAutoclosing = null, i.dlItemTagAutoclosing = null), i.current = o, t === "form" && (i.formTag = o), t === "a" && (i.aTagInScope = o), t === "button" && (i.buttonTagInScope = o), t === "nobr" && (i.nobrTagInScope = o), t === "p" && (i.pTagInButtonScope = o), t === "li" && (i.listItemTagAutoclosing = o), (t === "dd" || t === "dt") && (i.dlItemTagAutoclosing = o), i;
      };
      var ZD = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return qD.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, JD = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, Nb = {};
      Ph = function(e, t, i) {
        i = i || Ab;
        var o = i.current, u = o && o.tag;
        t != null && (e != null && E("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var d = ZD(e, u) ? null : o, v = d ? null : JD(e, i), g = d || v;
        if (g) {
          var _ = g.tag, w = !!d + "|" + e + "|" + _;
          if (!Nb[w]) {
            Nb[w] = !0;
            var R = e, j = "";
            if (e === "#text" ? /\S/.test(t) ? R = "Text nodes" : (R = "Whitespace text nodes", j = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : R = "<" + e + ">", d) {
              var U = "";
              _ === "table" && e === "tr" && (U += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), E("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", R, _, j, U);
            } else
              E("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", R, _);
          }
        }
      };
    }
    var Tg = "suppressHydrationWarning", wg = "$", Rg = "/$", Ih = "$?", Fh = "$!", eO = "style", S_ = null, C_ = null;
    function tO(e) {
      var t, i, o = e.nodeType;
      switch (o) {
        case Ai:
        case zp: {
          t = o === Ai ? "#document" : "#fragment";
          var u = e.documentElement;
          i = u ? u.namespaceURI : Mp(null, "");
          break;
        }
        default: {
          var d = o === Mn ? e.parentNode : e, v = d.namespaceURI || null;
          t = d.tagName, i = Mp(v, t);
          break;
        }
      }
      {
        var g = t.toLowerCase(), _ = jh(null, g);
        return {
          namespace: i,
          ancestorInfo: _
        };
      }
    }
    function nO(e, t, i) {
      {
        var o = e, u = Mp(o.namespace, t), d = jh(o.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: d
        };
      }
    }
    function lF(e) {
      return e;
    }
    function rO(e) {
      S_ = ms(), C_ = gD();
      var t = null;
      return Ei(!1), t;
    }
    function iO(e) {
      yD(C_), Ei(S_), S_ = null, C_ = null;
    }
    function aO(e, t, i, o, u) {
      var d;
      {
        var v = o;
        if (Ph(e, null, v.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var g = "" + t.children, _ = jh(v.ancestorInfo, e);
          Ph(null, g, _);
        }
        d = v.namespace;
      }
      var w = FD(e, t, i, d);
      return Vh(u, w), A_(w, t), w;
    }
    function oO(e, t) {
      e.appendChild(t);
    }
    function lO(e, t, i, o, u) {
      switch ($D(e, t, i, o), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!i.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function uO(e, t, i, o, u, d) {
      {
        var v = d;
        if (typeof o.children != typeof i.children && (typeof o.children == "string" || typeof o.children == "number")) {
          var g = "" + o.children, _ = jh(v.ancestorInfo, t);
          Ph(null, g, _);
        }
      }
      return VD(e, t, i, o);
    }
    function b_(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function sO(e, t, i, o) {
      {
        var u = i;
        Ph(null, e, u.ancestorInfo);
      }
      var d = HD(e, t);
      return Vh(o, d), d;
    }
    function cO() {
      var e = window.event;
      return e === void 0 ? Qa : gd(e.type);
    }
    var T_ = typeof setTimeout == "function" ? setTimeout : void 0, fO = typeof clearTimeout == "function" ? clearTimeout : void 0, w_ = -1, kb = typeof Promise == "function" ? Promise : void 0, dO = typeof queueMicrotask == "function" ? queueMicrotask : typeof kb < "u" ? function(e) {
      return kb.resolve(null).then(e).catch(pO);
    } : T_;
    function pO(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function hO(e, t, i, o) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          i.autoFocus && e.focus();
          return;
        case "img": {
          i.src && (e.src = i.src);
          return;
        }
      }
    }
    function vO(e, t, i, o, u, d) {
      BD(e, t, i, o, u), A_(e, u);
    }
    function Lb(e) {
      fc(e, "");
    }
    function mO(e, t, i) {
      e.nodeValue = i;
    }
    function gO(e, t) {
      e.appendChild(t);
    }
    function yO(e, t) {
      var i;
      e.nodeType === Mn ? (i = e.parentNode, i.insertBefore(t, e)) : (i = e, i.appendChild(t));
      var o = e._reactRootContainer;
      o == null && i.onclick === null && bg(i);
    }
    function EO(e, t, i) {
      e.insertBefore(t, i);
    }
    function _O(e, t, i) {
      e.nodeType === Mn ? e.parentNode.insertBefore(t, i) : e.insertBefore(t, i);
    }
    function SO(e, t) {
      e.removeChild(t);
    }
    function CO(e, t) {
      e.nodeType === Mn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function R_(e, t) {
      var i = t, o = 0;
      do {
        var u = i.nextSibling;
        if (e.removeChild(i), u && u.nodeType === Mn) {
          var d = u.data;
          if (d === Rg)
            if (o === 0) {
              e.removeChild(u), jn(t);
              return;
            } else
              o--;
          else
            (d === wg || d === Ih || d === Fh) && o++;
        }
        i = u;
      } while (i);
      jn(t);
    }
    function bO(e, t) {
      e.nodeType === Mn ? R_(e.parentNode, t) : e.nodeType === si && R_(e, t), jn(e);
    }
    function TO(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function wO(e) {
      e.nodeValue = "";
    }
    function RO(e, t) {
      e = e;
      var i = t[eO], o = i != null && i.hasOwnProperty("display") ? i.display : null;
      e.style.display = rl("display", o);
    }
    function xO(e, t) {
      e.nodeValue = t;
    }
    function DO(e) {
      e.nodeType === si ? e.textContent = "" : e.nodeType === Ai && e.documentElement && e.removeChild(e.documentElement);
    }
    function OO(e, t, i) {
      return e.nodeType !== si || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function AO(e, t) {
      return t === "" || e.nodeType !== So ? null : e;
    }
    function NO(e) {
      return e.nodeType !== Mn ? null : e;
    }
    function Mb(e) {
      return e.data === Ih;
    }
    function x_(e) {
      return e.data === Fh;
    }
    function kO(e) {
      var t = e.nextSibling && e.nextSibling.dataset, i, o, u;
      return t && (i = t.dgst, o = t.msg, u = t.stck), {
        message: o,
        digest: i,
        stack: u
      };
    }
    function LO(e, t) {
      e._reactRetry = t;
    }
    function xg(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === si || t === So)
          break;
        if (t === Mn) {
          var i = e.data;
          if (i === wg || i === Fh || i === Ih)
            break;
          if (i === Rg)
            return null;
        }
      }
      return e;
    }
    function Hh(e) {
      return xg(e.nextSibling);
    }
    function MO(e) {
      return xg(e.firstChild);
    }
    function zO(e) {
      return xg(e.firstChild);
    }
    function UO(e) {
      return xg(e.nextSibling);
    }
    function PO(e, t, i, o, u, d, v) {
      Vh(d, e), A_(e, i);
      var g;
      {
        var _ = u;
        g = _.namespace;
      }
      var w = (d.mode & Ge) !== rt;
      return WD(e, t, i, g, o, w, v);
    }
    function jO(e, t, i, o) {
      return Vh(i, e), i.mode & Ge, GD(e, t);
    }
    function IO(e, t) {
      Vh(t, e);
    }
    function FO(e) {
      for (var t = e.nextSibling, i = 0; t; ) {
        if (t.nodeType === Mn) {
          var o = t.data;
          if (o === Rg) {
            if (i === 0)
              return Hh(t);
            i--;
          } else
            (o === wg || o === Fh || o === Ih) && i++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function zb(e) {
      for (var t = e.previousSibling, i = 0; t; ) {
        if (t.nodeType === Mn) {
          var o = t.data;
          if (o === wg || o === Fh || o === Ih) {
            if (i === 0)
              return t;
            i--;
          } else
            o === Rg && i++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function HO(e) {
      jn(e);
    }
    function $O(e) {
      jn(e);
    }
    function VO(e) {
      return e !== "head" && e !== "body";
    }
    function BO(e, t, i, o) {
      var u = !0;
      Cg(t.nodeValue, i, o, u);
    }
    function YO(e, t, i, o, u, d) {
      if (t[Tg] !== !0) {
        var v = !0;
        Cg(o.nodeValue, u, d, v);
      }
    }
    function WO(e, t) {
      t.nodeType === si ? g_(e, t) : t.nodeType === Mn || y_(e, t);
    }
    function GO(e, t) {
      {
        var i = e.parentNode;
        i !== null && (t.nodeType === si ? g_(i, t) : t.nodeType === Mn || y_(i, t));
      }
    }
    function KO(e, t, i, o, u) {
      (u || t[Tg] !== !0) && (o.nodeType === si ? g_(i, o) : o.nodeType === Mn || y_(i, o));
    }
    function QO(e, t, i) {
      E_(e, t);
    }
    function XO(e, t) {
      __(e, t);
    }
    function qO(e, t, i) {
      {
        var o = e.parentNode;
        o !== null && E_(o, t);
      }
    }
    function ZO(e, t) {
      {
        var i = e.parentNode;
        i !== null && __(i, t);
      }
    }
    function JO(e, t, i, o, u, d) {
      (d || t[Tg] !== !0) && E_(i, o);
    }
    function eA(e, t, i, o, u) {
      (u || t[Tg] !== !0) && __(i, o);
    }
    function tA(e) {
      E("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function nA(e) {
      Lh(e);
    }
    var zd = Math.random().toString(36).slice(2), Ud = "__reactFiber$" + zd, D_ = "__reactProps$" + zd, $h = "__reactContainer$" + zd, O_ = "__reactEvents$" + zd, rA = "__reactListeners$" + zd, iA = "__reactHandles$" + zd;
    function aA(e) {
      delete e[Ud], delete e[D_], delete e[O_], delete e[rA], delete e[iA];
    }
    function Vh(e, t) {
      t[Ud] = e;
    }
    function Dg(e, t) {
      t[$h] = e;
    }
    function Ub(e) {
      e[$h] = null;
    }
    function Bh(e) {
      return !!e[$h];
    }
    function Jc(e) {
      var t = e[Ud];
      if (t)
        return t;
      for (var i = e.parentNode; i; ) {
        if (t = i[$h] || i[Ud], t) {
          var o = t.alternate;
          if (t.child !== null || o !== null && o.child !== null)
            for (var u = zb(e); u !== null; ) {
              var d = u[Ud];
              if (d)
                return d;
              u = zb(u);
            }
          return t;
        }
        e = i, i = e.parentNode;
      }
      return null;
    }
    function Ts(e) {
      var t = e[Ud] || e[$h];
      return t && (t.tag === B || t.tag === X || t.tag === oe || t.tag === I) ? t : null;
    }
    function Pd(e) {
      if (e.tag === B || e.tag === X)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Og(e) {
      return e[D_] || null;
    }
    function A_(e, t) {
      e[D_] = t;
    }
    function oA(e) {
      var t = e[O_];
      return t === void 0 && (t = e[O_] = /* @__PURE__ */ new Set()), t;
    }
    var Pb = {}, jb = p.ReactDebugCurrentFrame;
    function Ag(e) {
      if (e) {
        var t = e._owner, i = Mt(e.type, e._source, t ? t.type : null);
        jb.setExtraStackFrame(i);
      } else
        jb.setExtraStackFrame(null);
    }
    function Mo(e, t, i, o, u) {
      {
        var d = Function.call.bind(or);
        for (var v in e)
          if (d(e, v)) {
            var g = void 0;
            try {
              if (typeof e[v] != "function") {
                var _ = Error((o || "React class") + ": " + i + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _.name = "Invariant Violation", _;
              }
              g = e[v](t, v, o, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (w) {
              g = w;
            }
            g && !(g instanceof Error) && (Ag(u), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", i, v, typeof g), Ag(null)), g instanceof Error && !(g.message in Pb) && (Pb[g.message] = !0, Ag(u), E("Failed %s type: %s", i, g.message), Ag(null));
          }
      }
    }
    var N_ = [], Ng;
    Ng = [];
    var mu = -1;
    function ws(e) {
      return {
        current: e
      };
    }
    function _i(e, t) {
      if (mu < 0) {
        E("Unexpected pop.");
        return;
      }
      t !== Ng[mu] && E("Unexpected Fiber popped."), e.current = N_[mu], N_[mu] = null, Ng[mu] = null, mu--;
    }
    function Si(e, t, i) {
      mu++, N_[mu] = e.current, Ng[mu] = i, e.current = t;
    }
    var k_;
    k_ = {};
    var Da = {};
    Object.freeze(Da);
    var gu = ws(Da), Cl = ws(!1), L_ = Da;
    function jd(e, t, i) {
      return i && bl(t) ? L_ : gu.current;
    }
    function Ib(e, t, i) {
      {
        var o = e.stateNode;
        o.__reactInternalMemoizedUnmaskedChildContext = t, o.__reactInternalMemoizedMaskedChildContext = i;
      }
    }
    function Id(e, t) {
      {
        var i = e.type, o = i.contextTypes;
        if (!o)
          return Da;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var d = {};
        for (var v in o)
          d[v] = t[v];
        {
          var g = yt(e) || "Unknown";
          Mo(o, d, "context", g);
        }
        return u && Ib(e, t, d), d;
      }
    }
    function kg() {
      return Cl.current;
    }
    function bl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Lg(e) {
      _i(Cl, e), _i(gu, e);
    }
    function M_(e) {
      _i(Cl, e), _i(gu, e);
    }
    function Fb(e, t, i) {
      {
        if (gu.current !== Da)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        Si(gu, t, e), Si(Cl, i, e);
      }
    }
    function Hb(e, t, i) {
      {
        var o = e.stateNode, u = t.childContextTypes;
        if (typeof o.getChildContext != "function") {
          {
            var d = yt(e) || "Unknown";
            k_[d] || (k_[d] = !0, E("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", d, d));
          }
          return i;
        }
        var v = o.getChildContext();
        for (var g in v)
          if (!(g in u))
            throw new Error((yt(e) || "Unknown") + '.getChildContext(): key "' + g + '" is not defined in childContextTypes.');
        {
          var _ = yt(e) || "Unknown";
          Mo(u, v, "child context", _);
        }
        return Dt({}, i, v);
      }
    }
    function Mg(e) {
      {
        var t = e.stateNode, i = t && t.__reactInternalMemoizedMergedChildContext || Da;
        return L_ = gu.current, Si(gu, i, e), Si(Cl, Cl.current, e), !0;
      }
    }
    function $b(e, t, i) {
      {
        var o = e.stateNode;
        if (!o)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (i) {
          var u = Hb(e, t, L_);
          o.__reactInternalMemoizedMergedChildContext = u, _i(Cl, e), _i(gu, e), Si(gu, u, e), Si(Cl, i, e);
        } else
          _i(Cl, e), Si(Cl, i, e);
      }
    }
    function lA(e) {
      {
        if (!Li(e) || e.tag !== D)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case I:
              return t.stateNode.context;
            case D: {
              var i = t.type;
              if (bl(i))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Rs = 0, zg = 1, yu = null, z_ = !1, U_ = !1;
    function Vb(e) {
      yu === null ? yu = [e] : yu.push(e);
    }
    function uA(e) {
      z_ = !0, Vb(e);
    }
    function Bb() {
      z_ && xs();
    }
    function xs() {
      if (!U_ && yu !== null) {
        U_ = !0;
        var e = 0, t = ia();
        try {
          var i = !0, o = yu;
          for (Pn(Gn); e < o.length; e++) {
            var u = o[e];
            do
              u = u(i);
            while (u !== null);
          }
          yu = null, z_ = !1;
        } catch (d) {
          throw yu !== null && (yu = yu.slice(e + 1)), th(hi, xs), d;
        } finally {
          Pn(t), U_ = !1;
        }
      }
      return null;
    }
    var Fd = [], Hd = 0, Ug = null, Pg = 0, Ja = [], eo = 0, ef = null, Eu = 1, _u = "";
    function sA(e) {
      return nf(), (e.flags & Am) !== nt;
    }
    function cA(e) {
      return nf(), Pg;
    }
    function fA() {
      var e = _u, t = Eu, i = t & ~dA(t);
      return i.toString(32) + e;
    }
    function tf(e, t) {
      nf(), Fd[Hd++] = Pg, Fd[Hd++] = Ug, Ug = e, Pg = t;
    }
    function Yb(e, t, i) {
      nf(), Ja[eo++] = Eu, Ja[eo++] = _u, Ja[eo++] = ef, ef = e;
      var o = Eu, u = _u, d = jg(o) - 1, v = o & ~(1 << d), g = i + 1, _ = jg(t) + d;
      if (_ > 30) {
        var w = d - d % 5, R = (1 << w) - 1, j = (v & R).toString(32), U = v >> w, G = d - w, K = jg(t) + G, Z = g << G, Le = Z | U, it = j + u;
        Eu = 1 << K | Le, _u = it;
      } else {
        var Ke = g << d, Pt = Ke | v, Lt = u;
        Eu = 1 << _ | Pt, _u = Lt;
      }
    }
    function P_(e) {
      nf();
      var t = e.return;
      if (t !== null) {
        var i = 1, o = 0;
        tf(e, i), Yb(e, i, o);
      }
    }
    function jg(e) {
      return 32 - Ac(e);
    }
    function dA(e) {
      return 1 << jg(e) - 1;
    }
    function j_(e) {
      for (; e === Ug; )
        Ug = Fd[--Hd], Fd[Hd] = null, Pg = Fd[--Hd], Fd[Hd] = null;
      for (; e === ef; )
        ef = Ja[--eo], Ja[eo] = null, _u = Ja[--eo], Ja[eo] = null, Eu = Ja[--eo], Ja[eo] = null;
    }
    function pA() {
      return nf(), ef !== null ? {
        id: Eu,
        overflow: _u
      } : null;
    }
    function hA(e, t) {
      nf(), Ja[eo++] = Eu, Ja[eo++] = _u, Ja[eo++] = ef, Eu = t.id, _u = t.overflow, ef = e;
    }
    function nf() {
      Kr() || E("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Gr = null, to = null, zo = !1, rf = !1, Ds = null;
    function vA() {
      zo && E("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function Wb() {
      rf = !0;
    }
    function mA() {
      return rf;
    }
    function gA(e) {
      var t = e.stateNode.containerInfo;
      return to = zO(t), Gr = e, zo = !0, Ds = null, rf = !1, !0;
    }
    function yA(e, t, i) {
      return to = UO(t), Gr = e, zo = !0, Ds = null, rf = !1, i !== null && hA(e, i), !0;
    }
    function Gb(e, t) {
      switch (e.tag) {
        case I: {
          WO(e.stateNode.containerInfo, t);
          break;
        }
        case B: {
          var i = (e.mode & Ge) !== rt;
          KO(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            i
          );
          break;
        }
        case oe: {
          var o = e.memoizedState;
          o.dehydrated !== null && GO(o.dehydrated, t);
          break;
        }
      }
    }
    function Kb(e, t) {
      Gb(e, t);
      var i = SL();
      i.stateNode = t, i.return = e;
      var o = e.deletions;
      o === null ? (e.deletions = [i], e.flags |= Vt) : o.push(i);
    }
    function I_(e, t) {
      {
        if (rf)
          return;
        switch (e.tag) {
          case I: {
            var i = e.stateNode.containerInfo;
            switch (t.tag) {
              case B:
                var o = t.type;
                t.pendingProps, QO(i, o);
                break;
              case X:
                var u = t.pendingProps;
                XO(i, u);
                break;
            }
            break;
          }
          case B: {
            var d = e.type, v = e.memoizedProps, g = e.stateNode;
            switch (t.tag) {
              case B: {
                var _ = t.type, w = t.pendingProps, R = (e.mode & Ge) !== rt;
                JO(
                  d,
                  v,
                  g,
                  _,
                  w,
                  // TODO: Delete this argument when we remove the legacy root API.
                  R
                );
                break;
              }
              case X: {
                var j = t.pendingProps, U = (e.mode & Ge) !== rt;
                eA(
                  d,
                  v,
                  g,
                  j,
                  // TODO: Delete this argument when we remove the legacy root API.
                  U
                );
                break;
              }
            }
            break;
          }
          case oe: {
            var G = e.memoizedState, K = G.dehydrated;
            if (K !== null)
              switch (t.tag) {
                case B:
                  var Z = t.type;
                  t.pendingProps, qO(K, Z);
                  break;
                case X:
                  var Le = t.pendingProps;
                  ZO(K, Le);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function Qb(e, t) {
      t.flags = t.flags & ~Ba | sn, I_(e, t);
    }
    function Xb(e, t) {
      switch (e.tag) {
        case B: {
          var i = e.type;
          e.pendingProps;
          var o = OO(t, i);
          return o !== null ? (e.stateNode = o, Gr = e, to = MO(o), !0) : !1;
        }
        case X: {
          var u = e.pendingProps, d = AO(t, u);
          return d !== null ? (e.stateNode = d, Gr = e, to = null, !0) : !1;
        }
        case oe: {
          var v = NO(t);
          if (v !== null) {
            var g = {
              dehydrated: v,
              treeContext: pA(),
              retryLane: Ui
            };
            e.memoizedState = g;
            var _ = CL(v);
            return _.return = e, e.child = _, Gr = e, to = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function F_(e) {
      return (e.mode & Ge) !== rt && (e.flags & _t) === nt;
    }
    function H_(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function $_(e) {
      if (zo) {
        var t = to;
        if (!t) {
          F_(e) && (I_(Gr, e), H_()), Qb(Gr, e), zo = !1, Gr = e;
          return;
        }
        var i = t;
        if (!Xb(e, t)) {
          F_(e) && (I_(Gr, e), H_()), t = Hh(i);
          var o = Gr;
          if (!t || !Xb(e, t)) {
            Qb(Gr, e), zo = !1, Gr = e;
            return;
          }
          Kb(o, i);
        }
      }
    }
    function EA(e, t, i) {
      var o = e.stateNode, u = !rf, d = PO(o, e.type, e.memoizedProps, t, i, e, u);
      return e.updateQueue = d, d !== null;
    }
    function _A(e) {
      var t = e.stateNode, i = e.memoizedProps, o = jO(t, i, e);
      if (o) {
        var u = Gr;
        if (u !== null)
          switch (u.tag) {
            case I: {
              var d = u.stateNode.containerInfo, v = (u.mode & Ge) !== rt;
              BO(
                d,
                t,
                i,
                // TODO: Delete this argument when we remove the legacy root API.
                v
              );
              break;
            }
            case B: {
              var g = u.type, _ = u.memoizedProps, w = u.stateNode, R = (u.mode & Ge) !== rt;
              YO(
                g,
                _,
                w,
                t,
                i,
                // TODO: Delete this argument when we remove the legacy root API.
                R
              );
              break;
            }
          }
      }
      return o;
    }
    function SA(e) {
      var t = e.memoizedState, i = t !== null ? t.dehydrated : null;
      if (!i)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      IO(i, e);
    }
    function CA(e) {
      var t = e.memoizedState, i = t !== null ? t.dehydrated : null;
      if (!i)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return FO(i);
    }
    function qb(e) {
      for (var t = e.return; t !== null && t.tag !== B && t.tag !== I && t.tag !== oe; )
        t = t.return;
      Gr = t;
    }
    function Ig(e) {
      if (e !== Gr)
        return !1;
      if (!zo)
        return qb(e), zo = !0, !1;
      if (e.tag !== I && (e.tag !== B || VO(e.type) && !b_(e.type, e.memoizedProps))) {
        var t = to;
        if (t)
          if (F_(e))
            Zb(e), H_();
          else
            for (; t; )
              Kb(e, t), t = Hh(t);
      }
      return qb(e), e.tag === oe ? to = CA(e) : to = Gr ? Hh(e.stateNode) : null, !0;
    }
    function bA() {
      return zo && to !== null;
    }
    function Zb(e) {
      for (var t = to; t; )
        Gb(e, t), t = Hh(t);
    }
    function $d() {
      Gr = null, to = null, zo = !1, rf = !1;
    }
    function Jb() {
      Ds !== null && (Gw(Ds), Ds = null);
    }
    function Kr() {
      return zo;
    }
    function V_(e) {
      Ds === null ? Ds = [e] : Ds.push(e);
    }
    var TA = p.ReactCurrentBatchConfig, wA = null;
    function RA() {
      return TA.transition;
    }
    var Uo = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var xA = function(e) {
        for (var t = null, i = e; i !== null; )
          i.mode & zn && (t = i), i = i.return;
        return t;
      }, af = function(e) {
        var t = [];
        return e.forEach(function(i) {
          t.push(i);
        }), t.sort().join(", ");
      }, Yh = [], Wh = [], Gh = [], Kh = [], Qh = [], Xh = [], of = /* @__PURE__ */ new Set();
      Uo.recordUnsafeLifecycleWarnings = function(e, t) {
        of.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Yh.push(e), e.mode & zn && typeof t.UNSAFE_componentWillMount == "function" && Wh.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Gh.push(e), e.mode & zn && typeof t.UNSAFE_componentWillReceiveProps == "function" && Kh.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Qh.push(e), e.mode & zn && typeof t.UNSAFE_componentWillUpdate == "function" && Xh.push(e));
      }, Uo.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Yh.length > 0 && (Yh.forEach(function(U) {
          e.add(yt(U) || "Component"), of.add(U.type);
        }), Yh = []);
        var t = /* @__PURE__ */ new Set();
        Wh.length > 0 && (Wh.forEach(function(U) {
          t.add(yt(U) || "Component"), of.add(U.type);
        }), Wh = []);
        var i = /* @__PURE__ */ new Set();
        Gh.length > 0 && (Gh.forEach(function(U) {
          i.add(yt(U) || "Component"), of.add(U.type);
        }), Gh = []);
        var o = /* @__PURE__ */ new Set();
        Kh.length > 0 && (Kh.forEach(function(U) {
          o.add(yt(U) || "Component"), of.add(U.type);
        }), Kh = []);
        var u = /* @__PURE__ */ new Set();
        Qh.length > 0 && (Qh.forEach(function(U) {
          u.add(yt(U) || "Component"), of.add(U.type);
        }), Qh = []);
        var d = /* @__PURE__ */ new Set();
        if (Xh.length > 0 && (Xh.forEach(function(U) {
          d.add(yt(U) || "Component"), of.add(U.type);
        }), Xh = []), t.size > 0) {
          var v = af(t);
          E(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, v);
        }
        if (o.size > 0) {
          var g = af(o);
          E(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, g);
        }
        if (d.size > 0) {
          var _ = af(d);
          E(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, _);
        }
        if (e.size > 0) {
          var w = af(e);
          T(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, w);
        }
        if (i.size > 0) {
          var R = af(i);
          T(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, R);
        }
        if (u.size > 0) {
          var j = af(u);
          T(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, j);
        }
      };
      var Fg = /* @__PURE__ */ new Map(), eT = /* @__PURE__ */ new Set();
      Uo.recordLegacyContextWarning = function(e, t) {
        var i = xA(e);
        if (i === null) {
          E("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!eT.has(e.type)) {
          var o = Fg.get(i);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (o === void 0 && (o = [], Fg.set(i, o)), o.push(e));
        }
      }, Uo.flushLegacyContextWarning = function() {
        Fg.forEach(function(e, t) {
          if (e.length !== 0) {
            var i = e[0], o = /* @__PURE__ */ new Set();
            e.forEach(function(d) {
              o.add(yt(d) || "Component"), eT.add(d.type);
            });
            var u = af(o);
            try {
              Dn(i), E(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              mn();
            }
          }
        });
      }, Uo.discardPendingWarnings = function() {
        Yh = [], Wh = [], Gh = [], Kh = [], Qh = [], Xh = [], Fg = /* @__PURE__ */ new Map();
      };
    }
    function Po(e, t) {
      if (e && e.defaultProps) {
        var i = Dt({}, t), o = e.defaultProps;
        for (var u in o)
          i[u] === void 0 && (i[u] = o[u]);
        return i;
      }
      return t;
    }
    var B_ = ws(null), Y_;
    Y_ = {};
    var Hg = null, Vd = null, W_ = null, $g = !1;
    function Vg() {
      Hg = null, Vd = null, W_ = null, $g = !1;
    }
    function tT() {
      $g = !0;
    }
    function nT() {
      $g = !1;
    }
    function rT(e, t, i) {
      Si(B_, t._currentValue, e), t._currentValue = i, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Y_ && E("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Y_;
    }
    function G_(e, t) {
      var i = B_.current;
      _i(B_, t), e._currentValue = i;
    }
    function K_(e, t, i) {
      for (var o = e; o !== null; ) {
        var u = o.alternate;
        if (uu(o.childLanes, t) ? u !== null && !uu(u.childLanes, t) && (u.childLanes = Tt(u.childLanes, t)) : (o.childLanes = Tt(o.childLanes, t), u !== null && (u.childLanes = Tt(u.childLanes, t))), o === i)
          break;
        o = o.return;
      }
      o !== i && E("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function DA(e, t, i) {
      OA(e, t, i);
    }
    function OA(e, t, i) {
      var o = e.child;
      for (o !== null && (o.return = e); o !== null; ) {
        var u = void 0, d = o.dependencies;
        if (d !== null) {
          u = o.child;
          for (var v = d.firstContext; v !== null; ) {
            if (v.context === t) {
              if (o.tag === D) {
                var g = os(i), _ = Su(vn, g);
                _.tag = Yg;
                var w = o.updateQueue;
                if (w !== null) {
                  var R = w.shared, j = R.pending;
                  j === null ? _.next = _ : (_.next = j.next, j.next = _), R.pending = _;
                }
              }
              o.lanes = Tt(o.lanes, i);
              var U = o.alternate;
              U !== null && (U.lanes = Tt(U.lanes, i)), K_(o.return, i, e), d.lanes = Tt(d.lanes, i);
              break;
            }
            v = v.next;
          }
        } else if (o.tag === ge)
          u = o.type === e.type ? null : o.child;
        else if (o.tag === ot) {
          var G = o.return;
          if (G === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          G.lanes = Tt(G.lanes, i);
          var K = G.alternate;
          K !== null && (K.lanes = Tt(K.lanes, i)), K_(G, i, e), u = o.sibling;
        } else
          u = o.child;
        if (u !== null)
          u.return = o;
        else
          for (u = o; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var Z = u.sibling;
            if (Z !== null) {
              Z.return = u.return, u = Z;
              break;
            }
            u = u.return;
          }
        o = u;
      }
    }
    function Bd(e, t) {
      Hg = e, Vd = null, W_ = null;
      var i = e.dependencies;
      if (i !== null) {
        var o = i.firstContext;
        o !== null && (yi(i.lanes, t) && cv(), i.firstContext = null);
      }
    }
    function yr(e) {
      $g && E("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (W_ !== e) {
        var i = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Vd === null) {
          if (Hg === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Vd = i, Hg.dependencies = {
            lanes: te,
            firstContext: i
          };
        } else
          Vd = Vd.next = i;
      }
      return t;
    }
    var lf = null;
    function Q_(e) {
      lf === null ? lf = [e] : lf.push(e);
    }
    function AA() {
      if (lf !== null) {
        for (var e = 0; e < lf.length; e++) {
          var t = lf[e], i = t.interleaved;
          if (i !== null) {
            t.interleaved = null;
            var o = i.next, u = t.pending;
            if (u !== null) {
              var d = u.next;
              u.next = o, i.next = d;
            }
            t.pending = i;
          }
        }
        lf = null;
      }
    }
    function iT(e, t, i, o) {
      var u = t.interleaved;
      return u === null ? (i.next = i, Q_(t)) : (i.next = u.next, u.next = i), t.interleaved = i, Bg(e, o);
    }
    function NA(e, t, i, o) {
      var u = t.interleaved;
      u === null ? (i.next = i, Q_(t)) : (i.next = u.next, u.next = i), t.interleaved = i;
    }
    function kA(e, t, i, o) {
      var u = t.interleaved;
      return u === null ? (i.next = i, Q_(t)) : (i.next = u.next, u.next = i), t.interleaved = i, Bg(e, o);
    }
    function ca(e, t) {
      return Bg(e, t);
    }
    var LA = Bg;
    function Bg(e, t) {
      e.lanes = Tt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Tt(i.lanes, t)), i === null && (e.flags & (sn | Ba)) !== nt && aR(e);
      for (var o = e, u = e.return; u !== null; )
        u.childLanes = Tt(u.childLanes, t), i = u.alternate, i !== null ? i.childLanes = Tt(i.childLanes, t) : (u.flags & (sn | Ba)) !== nt && aR(e), o = u, u = u.return;
      if (o.tag === I) {
        var d = o.stateNode;
        return d;
      } else
        return null;
    }
    var aT = 0, oT = 1, Yg = 2, X_ = 3, Wg = !1, q_, Gg;
    q_ = !1, Gg = null;
    function Z_(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: te
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function lT(e, t) {
      var i = t.updateQueue, o = e.updateQueue;
      if (i === o) {
        var u = {
          baseState: o.baseState,
          firstBaseUpdate: o.firstBaseUpdate,
          lastBaseUpdate: o.lastBaseUpdate,
          shared: o.shared,
          effects: o.effects
        };
        t.updateQueue = u;
      }
    }
    function Su(e, t) {
      var i = {
        eventTime: e,
        lane: t,
        tag: aT,
        payload: null,
        callback: null,
        next: null
      };
      return i;
    }
    function Os(e, t, i) {
      var o = e.updateQueue;
      if (o === null)
        return null;
      var u = o.shared;
      if (Gg === u && !q_ && (E("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), q_ = !0), Lk()) {
        var d = u.pending;
        return d === null ? t.next = t : (t.next = d.next, d.next = t), u.pending = t, LA(e, i);
      } else
        return kA(e, u, t, i);
    }
    function Kg(e, t, i) {
      var o = t.updateQueue;
      if (o !== null) {
        var u = o.shared;
        if (dh(i)) {
          var d = u.lanes;
          d = ud(d, e.pendingLanes);
          var v = Tt(d, i);
          u.lanes = v, ph(e, v);
        }
      }
    }
    function J_(e, t) {
      var i = e.updateQueue, o = e.alternate;
      if (o !== null) {
        var u = o.updateQueue;
        if (i === u) {
          var d = null, v = null, g = i.firstBaseUpdate;
          if (g !== null) {
            var _ = g;
            do {
              var w = {
                eventTime: _.eventTime,
                lane: _.lane,
                tag: _.tag,
                payload: _.payload,
                callback: _.callback,
                next: null
              };
              v === null ? d = v = w : (v.next = w, v = w), _ = _.next;
            } while (_ !== null);
            v === null ? d = v = t : (v.next = t, v = t);
          } else
            d = v = t;
          i = {
            baseState: u.baseState,
            firstBaseUpdate: d,
            lastBaseUpdate: v,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = i;
          return;
        }
      }
      var R = i.lastBaseUpdate;
      R === null ? i.firstBaseUpdate = t : R.next = t, i.lastBaseUpdate = t;
    }
    function MA(e, t, i, o, u, d) {
      switch (i.tag) {
        case oT: {
          var v = i.payload;
          if (typeof v == "function") {
            tT();
            var g = v.call(d, o, u);
            {
              if (e.mode & zn) {
                hn(!0);
                try {
                  v.call(d, o, u);
                } finally {
                  hn(!1);
                }
              }
              nT();
            }
            return g;
          }
          return v;
        }
        case X_:
          e.flags = e.flags & ~br | _t;
        case aT: {
          var _ = i.payload, w;
          if (typeof _ == "function") {
            tT(), w = _.call(d, o, u);
            {
              if (e.mode & zn) {
                hn(!0);
                try {
                  _.call(d, o, u);
                } finally {
                  hn(!1);
                }
              }
              nT();
            }
          } else
            w = _;
          return w == null ? o : Dt({}, o, w);
        }
        case Yg:
          return Wg = !0, o;
      }
      return o;
    }
    function Qg(e, t, i, o) {
      var u = e.updateQueue;
      Wg = !1, Gg = u.shared;
      var d = u.firstBaseUpdate, v = u.lastBaseUpdate, g = u.shared.pending;
      if (g !== null) {
        u.shared.pending = null;
        var _ = g, w = _.next;
        _.next = null, v === null ? d = w : v.next = w, v = _;
        var R = e.alternate;
        if (R !== null) {
          var j = R.updateQueue, U = j.lastBaseUpdate;
          U !== v && (U === null ? j.firstBaseUpdate = w : U.next = w, j.lastBaseUpdate = _);
        }
      }
      if (d !== null) {
        var G = u.baseState, K = te, Z = null, Le = null, it = null, Ke = d;
        do {
          var Pt = Ke.lane, Lt = Ke.eventTime;
          if (uu(o, Pt)) {
            if (it !== null) {
              var J = {
                eventTime: Lt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Yn,
                tag: Ke.tag,
                payload: Ke.payload,
                callback: Ke.callback,
                next: null
              };
              it = it.next = J;
            }
            G = MA(e, u, Ke, G, t, i);
            var V = Ke.callback;
            if (V !== null && // If the update was already committed, we should not queue its
            // callback again.
            Ke.lane !== Yn) {
              e.flags |= hr;
              var de = u.effects;
              de === null ? u.effects = [Ke] : de.push(Ke);
            }
          } else {
            var $ = {
              eventTime: Lt,
              lane: Pt,
              tag: Ke.tag,
              payload: Ke.payload,
              callback: Ke.callback,
              next: null
            };
            it === null ? (Le = it = $, Z = G) : it = it.next = $, K = Tt(K, Pt);
          }
          if (Ke = Ke.next, Ke === null) {
            if (g = u.shared.pending, g === null)
              break;
            var Me = g, xe = Me.next;
            Me.next = null, Ke = xe, u.lastBaseUpdate = Me, u.shared.pending = null;
          }
        } while (!0);
        it === null && (Z = G), u.baseState = Z, u.firstBaseUpdate = Le, u.lastBaseUpdate = it;
        var ht = u.shared.interleaved;
        if (ht !== null) {
          var bt = ht;
          do
            K = Tt(K, bt.lane), bt = bt.next;
          while (bt !== ht);
        } else
          d === null && (u.shared.lanes = te);
        Cv(K), e.lanes = K, e.memoizedState = G;
      }
      Gg = null;
    }
    function zA(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function uT() {
      Wg = !1;
    }
    function Xg() {
      return Wg;
    }
    function sT(e, t, i) {
      var o = t.effects;
      if (t.effects = null, o !== null)
        for (var u = 0; u < o.length; u++) {
          var d = o[u], v = d.callback;
          v !== null && (d.callback = null, zA(v, i));
        }
    }
    var eS = {}, cT = new a.Component().refs, tS, nS, rS, iS, aS, fT, qg, oS, lS, uS;
    {
      tS = /* @__PURE__ */ new Set(), nS = /* @__PURE__ */ new Set(), rS = /* @__PURE__ */ new Set(), iS = /* @__PURE__ */ new Set(), oS = /* @__PURE__ */ new Set(), aS = /* @__PURE__ */ new Set(), lS = /* @__PURE__ */ new Set(), uS = /* @__PURE__ */ new Set();
      var dT = /* @__PURE__ */ new Set();
      qg = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var i = t + "_" + e;
          dT.has(i) || (dT.add(i), E("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, fT = function(e, t) {
        if (t === void 0) {
          var i = It(e) || "Component";
          aS.has(i) || (aS.add(i), E("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", i));
        }
      }, Object.defineProperty(eS, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(eS);
    }
    function sS(e, t, i, o) {
      var u = e.memoizedState, d = i(o, u);
      {
        if (e.mode & zn) {
          hn(!0);
          try {
            d = i(o, u);
          } finally {
            hn(!1);
          }
        }
        fT(t, d);
      }
      var v = d == null ? u : Dt({}, u, d);
      if (e.memoizedState = v, e.lanes === te) {
        var g = e.updateQueue;
        g.baseState = v;
      }
    }
    var cS = {
      isMounted: Mi,
      enqueueSetState: function(e, t, i) {
        var o = Va(e), u = Ii(), d = Ps(o), v = Su(u, d);
        v.payload = t, i != null && (qg(i, "setState"), v.callback = i);
        var g = Os(o, v, d);
        g !== null && (Lr(g, o, d, u), Kg(g, o, d)), Wf(o, d);
      },
      enqueueReplaceState: function(e, t, i) {
        var o = Va(e), u = Ii(), d = Ps(o), v = Su(u, d);
        v.tag = oT, v.payload = t, i != null && (qg(i, "replaceState"), v.callback = i);
        var g = Os(o, v, d);
        g !== null && (Lr(g, o, d, u), Kg(g, o, d)), Wf(o, d);
      },
      enqueueForceUpdate: function(e, t) {
        var i = Va(e), o = Ii(), u = Ps(i), d = Su(o, u);
        d.tag = Yg, t != null && (qg(t, "forceUpdate"), d.callback = t);
        var v = Os(i, d, u);
        v !== null && (Lr(v, i, u, o), Kg(v, i, u)), ns(i, u);
      }
    };
    function pT(e, t, i, o, u, d, v) {
      var g = e.stateNode;
      if (typeof g.shouldComponentUpdate == "function") {
        var _ = g.shouldComponentUpdate(o, d, v);
        {
          if (e.mode & zn) {
            hn(!0);
            try {
              _ = g.shouldComponentUpdate(o, d, v);
            } finally {
              hn(!1);
            }
          }
          _ === void 0 && E("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", It(t) || "Component");
        }
        return _;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !ft(i, o) || !ft(u, d) : !0;
    }
    function UA(e, t, i) {
      var o = e.stateNode;
      {
        var u = It(t) || "Component", d = o.render;
        d || (t.prototype && typeof t.prototype.render == "function" ? E("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : E("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), o.getInitialState && !o.getInitialState.isReactClassApproved && !o.state && E("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), o.getDefaultProps && !o.getDefaultProps.isReactClassApproved && E("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), o.propTypes && E("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), o.contextType && E("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), o.contextTypes && E("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !lS.has(t) && (lS.add(t), E("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof o.componentShouldUpdate == "function" && E("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof o.shouldComponentUpdate < "u" && E("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", It(t) || "A pure component"), typeof o.componentDidUnmount == "function" && E("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof o.componentDidReceiveProps == "function" && E("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof o.componentWillRecieveProps == "function" && E("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof o.UNSAFE_componentWillRecieveProps == "function" && E("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var v = o.props !== i;
        o.props !== void 0 && v && E("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), o.defaultProps && E("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof o.getSnapshotBeforeUpdate == "function" && typeof o.componentDidUpdate != "function" && !rS.has(t) && (rS.add(t), E("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", It(t))), typeof o.getDerivedStateFromProps == "function" && E("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof o.getDerivedStateFromError == "function" && E("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && E("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var g = o.state;
        g && (typeof g != "object" || Ft(g)) && E("%s.state: must be set to an object or null", u), typeof o.getChildContext == "function" && typeof t.childContextTypes != "object" && E("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function hT(e, t) {
      t.updater = cS, e.stateNode = t, jf(t, e), t._reactInternalInstance = eS;
    }
    function vT(e, t, i) {
      var o = !1, u = Da, d = Da, v = t.contextType;
      if ("contextType" in t) {
        var g = (
          // Allow null for conditional declaration
          v === null || v !== void 0 && v.$$typeof === Ee && v._context === void 0
        );
        if (!g && !uS.has(t)) {
          uS.add(t);
          var _ = "";
          v === void 0 ? _ = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof v != "object" ? _ = " However, it is set to a " + typeof v + "." : v.$$typeof === ue ? _ = " Did you accidentally pass the Context.Provider instead?" : v._context !== void 0 ? _ = " Did you accidentally pass the Context.Consumer instead?" : _ = " However, it is set to an object with keys {" + Object.keys(v).join(", ") + "}.", E("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", It(t) || "Component", _);
        }
      }
      if (typeof v == "object" && v !== null)
        d = yr(v);
      else {
        u = jd(e, t, !0);
        var w = t.contextTypes;
        o = w != null, d = o ? Id(e, u) : Da;
      }
      var R = new t(i, d);
      if (e.mode & zn) {
        hn(!0);
        try {
          R = new t(i, d);
        } finally {
          hn(!1);
        }
      }
      var j = e.memoizedState = R.state !== null && R.state !== void 0 ? R.state : null;
      hT(e, R);
      {
        if (typeof t.getDerivedStateFromProps == "function" && j === null) {
          var U = It(t) || "Component";
          nS.has(U) || (nS.add(U), E("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", U, R.state === null ? "null" : "undefined", U));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof R.getSnapshotBeforeUpdate == "function") {
          var G = null, K = null, Z = null;
          if (typeof R.componentWillMount == "function" && R.componentWillMount.__suppressDeprecationWarning !== !0 ? G = "componentWillMount" : typeof R.UNSAFE_componentWillMount == "function" && (G = "UNSAFE_componentWillMount"), typeof R.componentWillReceiveProps == "function" && R.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? K = "componentWillReceiveProps" : typeof R.UNSAFE_componentWillReceiveProps == "function" && (K = "UNSAFE_componentWillReceiveProps"), typeof R.componentWillUpdate == "function" && R.componentWillUpdate.__suppressDeprecationWarning !== !0 ? Z = "componentWillUpdate" : typeof R.UNSAFE_componentWillUpdate == "function" && (Z = "UNSAFE_componentWillUpdate"), G !== null || K !== null || Z !== null) {
            var Le = It(t) || "Component", it = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            iS.has(Le) || (iS.add(Le), E(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Le, it, G !== null ? `
  ` + G : "", K !== null ? `
  ` + K : "", Z !== null ? `
  ` + Z : ""));
          }
        }
      }
      return o && Ib(e, u, d), R;
    }
    function PA(e, t) {
      var i = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), i !== t.state && (E("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", yt(e) || "Component"), cS.enqueueReplaceState(t, t.state, null));
    }
    function mT(e, t, i, o) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(i, o), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(i, o), t.state !== u) {
        {
          var d = yt(e) || "Component";
          tS.has(d) || (tS.add(d), E("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", d));
        }
        cS.enqueueReplaceState(t, t.state, null);
      }
    }
    function fS(e, t, i, o) {
      UA(e, t, i);
      var u = e.stateNode;
      u.props = i, u.state = e.memoizedState, u.refs = cT, Z_(e);
      var d = t.contextType;
      if (typeof d == "object" && d !== null)
        u.context = yr(d);
      else {
        var v = jd(e, t, !0);
        u.context = Id(e, v);
      }
      {
        if (u.state === i) {
          var g = It(t) || "Component";
          oS.has(g) || (oS.add(g), E("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", g));
        }
        e.mode & zn && Uo.recordLegacyContextWarning(e, u), Uo.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var _ = t.getDerivedStateFromProps;
      if (typeof _ == "function" && (sS(e, t, _, i), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (PA(e, u), Qg(e, i, u, o), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var w = Be;
        w |= Ji, (e.mode & na) !== rt && (w |= ea), e.flags |= w;
      }
    }
    function jA(e, t, i, o) {
      var u = e.stateNode, d = e.memoizedProps;
      u.props = d;
      var v = u.context, g = t.contextType, _ = Da;
      if (typeof g == "object" && g !== null)
        _ = yr(g);
      else {
        var w = jd(e, t, !0);
        _ = Id(e, w);
      }
      var R = t.getDerivedStateFromProps, j = typeof R == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !j && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (d !== i || v !== _) && mT(e, u, i, _), uT();
      var U = e.memoizedState, G = u.state = U;
      if (Qg(e, i, u, o), G = e.memoizedState, d === i && U === G && !kg() && !Xg()) {
        if (typeof u.componentDidMount == "function") {
          var K = Be;
          K |= Ji, (e.mode & na) !== rt && (K |= ea), e.flags |= K;
        }
        return !1;
      }
      typeof R == "function" && (sS(e, t, R, i), G = e.memoizedState);
      var Z = Xg() || pT(e, t, d, i, U, G, _);
      if (Z) {
        if (!j && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var Le = Be;
          Le |= Ji, (e.mode & na) !== rt && (Le |= ea), e.flags |= Le;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var it = Be;
          it |= Ji, (e.mode & na) !== rt && (it |= ea), e.flags |= it;
        }
        e.memoizedProps = i, e.memoizedState = G;
      }
      return u.props = i, u.state = G, u.context = _, Z;
    }
    function IA(e, t, i, o, u) {
      var d = t.stateNode;
      lT(e, t);
      var v = t.memoizedProps, g = t.type === t.elementType ? v : Po(t.type, v);
      d.props = g;
      var _ = t.pendingProps, w = d.context, R = i.contextType, j = Da;
      if (typeof R == "object" && R !== null)
        j = yr(R);
      else {
        var U = jd(t, i, !0);
        j = Id(t, U);
      }
      var G = i.getDerivedStateFromProps, K = typeof G == "function" || typeof d.getSnapshotBeforeUpdate == "function";
      !K && (typeof d.UNSAFE_componentWillReceiveProps == "function" || typeof d.componentWillReceiveProps == "function") && (v !== _ || w !== j) && mT(t, d, o, j), uT();
      var Z = t.memoizedState, Le = d.state = Z;
      if (Qg(t, o, d, u), Le = t.memoizedState, v === _ && Z === Le && !kg() && !Xg() && !L)
        return typeof d.componentDidUpdate == "function" && (v !== e.memoizedProps || Z !== e.memoizedState) && (t.flags |= Be), typeof d.getSnapshotBeforeUpdate == "function" && (v !== e.memoizedProps || Z !== e.memoizedState) && (t.flags |= er), !1;
      typeof G == "function" && (sS(t, i, G, o), Le = t.memoizedState);
      var it = Xg() || pT(t, i, g, o, Z, Le, j) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      L;
      return it ? (!K && (typeof d.UNSAFE_componentWillUpdate == "function" || typeof d.componentWillUpdate == "function") && (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(o, Le, j), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(o, Le, j)), typeof d.componentDidUpdate == "function" && (t.flags |= Be), typeof d.getSnapshotBeforeUpdate == "function" && (t.flags |= er)) : (typeof d.componentDidUpdate == "function" && (v !== e.memoizedProps || Z !== e.memoizedState) && (t.flags |= Be), typeof d.getSnapshotBeforeUpdate == "function" && (v !== e.memoizedProps || Z !== e.memoizedState) && (t.flags |= er), t.memoizedProps = o, t.memoizedState = Le), d.props = o, d.state = Le, d.context = j, it;
    }
    var dS, pS, hS, vS, mS, gT = function(e, t) {
    };
    dS = !1, pS = !1, hS = {}, vS = {}, mS = {}, gT = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var i = yt(t) || "Component";
        vS[i] || (vS[i] = !0, E('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function qh(e, t, i) {
      var o = i.ref;
      if (o !== null && typeof o != "function" && typeof o != "object") {
        if ((e.mode & zn || gt) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(i._owner && i._self && i._owner.stateNode !== i._self)) {
          var u = yt(e) || "Component";
          hS[u] || (E('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', o), hS[u] = !0);
        }
        if (i._owner) {
          var d = i._owner, v;
          if (d) {
            var g = d;
            if (g.tag !== D)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            v = g.stateNode;
          }
          if (!v)
            throw new Error("Missing owner for string ref " + o + ". This error is likely caused by a bug in React. Please file an issue.");
          var _ = v;
          bn(o, "ref");
          var w = "" + o;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === w)
            return t.ref;
          var R = function(j) {
            var U = _.refs;
            U === cT && (U = _.refs = {}), j === null ? delete U[w] : U[w] = j;
          };
          return R._stringRef = w, R;
        } else {
          if (typeof o != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!i._owner)
            throw new Error("Element ref was specified as a string (" + o + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return o;
    }
    function Zg(e, t) {
      var i = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (i === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : i) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Jg(e) {
      {
        var t = yt(e) || "Component";
        if (mS[t])
          return;
        mS[t] = !0, E("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function yT(e) {
      var t = e._payload, i = e._init;
      return i(t);
    }
    function ET(e) {
      function t($, J) {
        if (e) {
          var V = $.deletions;
          V === null ? ($.deletions = [J], $.flags |= Vt) : V.push(J);
        }
      }
      function i($, J) {
        if (!e)
          return null;
        for (var V = J; V !== null; )
          t($, V), V = V.sibling;
        return null;
      }
      function o($, J) {
        for (var V = /* @__PURE__ */ new Map(), de = J; de !== null; )
          de.key !== null ? V.set(de.key, de) : V.set(de.index, de), de = de.sibling;
        return V;
      }
      function u($, J) {
        var V = vf($, J);
        return V.index = 0, V.sibling = null, V;
      }
      function d($, J, V) {
        if ($.index = V, !e)
          return $.flags |= Am, J;
        var de = $.alternate;
        if (de !== null) {
          var Me = de.index;
          return Me < J ? ($.flags |= sn, J) : Me;
        } else
          return $.flags |= sn, J;
      }
      function v($) {
        return e && $.alternate === null && ($.flags |= sn), $;
      }
      function g($, J, V, de) {
        if (J === null || J.tag !== X) {
          var Me = V0(V, $.mode, de);
          return Me.return = $, Me;
        } else {
          var xe = u(J, V);
          return xe.return = $, xe;
        }
      }
      function _($, J, V, de) {
        var Me = V.type;
        if (Me === Oi)
          return R($, J, V.props.children, de, V.key);
        if (J !== null && (J.elementType === Me || // Keep this check inline so it only runs on the false path:
        sR(J, V) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Me == "object" && Me !== null && Me.$$typeof === et && yT(Me) === J.type)) {
          var xe = u(J, V.props);
          return xe.ref = qh($, J, V), xe.return = $, xe._debugSource = V._source, xe._debugOwner = V._owner, xe;
        }
        var ht = $0(V, $.mode, de);
        return ht.ref = qh($, J, V), ht.return = $, ht;
      }
      function w($, J, V, de) {
        if (J === null || J.tag !== H || J.stateNode.containerInfo !== V.containerInfo || J.stateNode.implementation !== V.implementation) {
          var Me = B0(V, $.mode, de);
          return Me.return = $, Me;
        } else {
          var xe = u(J, V.children || []);
          return xe.return = $, xe;
        }
      }
      function R($, J, V, de, Me) {
        if (J === null || J.tag !== pe) {
          var xe = Is(V, $.mode, de, Me);
          return xe.return = $, xe;
        } else {
          var ht = u(J, V);
          return ht.return = $, ht;
        }
      }
      function j($, J, V) {
        if (typeof J == "string" && J !== "" || typeof J == "number") {
          var de = V0("" + J, $.mode, V);
          return de.return = $, de;
        }
        if (typeof J == "object" && J !== null) {
          switch (J.$$typeof) {
            case ri: {
              var Me = $0(J, $.mode, V);
              return Me.ref = qh($, null, J), Me.return = $, Me;
            }
            case ii: {
              var xe = B0(J, $.mode, V);
              return xe.return = $, xe;
            }
            case et: {
              var ht = J._payload, bt = J._init;
              return j($, bt(ht), V);
            }
          }
          if (Ft(J) || ja(J)) {
            var on = Is(J, $.mode, V, null);
            return on.return = $, on;
          }
          Zg($, J);
        }
        return typeof J == "function" && Jg($), null;
      }
      function U($, J, V, de) {
        var Me = J !== null ? J.key : null;
        if (typeof V == "string" && V !== "" || typeof V == "number")
          return Me !== null ? null : g($, J, "" + V, de);
        if (typeof V == "object" && V !== null) {
          switch (V.$$typeof) {
            case ri:
              return V.key === Me ? _($, J, V, de) : null;
            case ii:
              return V.key === Me ? w($, J, V, de) : null;
            case et: {
              var xe = V._payload, ht = V._init;
              return U($, J, ht(xe), de);
            }
          }
          if (Ft(V) || ja(V))
            return Me !== null ? null : R($, J, V, de, null);
          Zg($, V);
        }
        return typeof V == "function" && Jg($), null;
      }
      function G($, J, V, de, Me) {
        if (typeof de == "string" && de !== "" || typeof de == "number") {
          var xe = $.get(V) || null;
          return g(J, xe, "" + de, Me);
        }
        if (typeof de == "object" && de !== null) {
          switch (de.$$typeof) {
            case ri: {
              var ht = $.get(de.key === null ? V : de.key) || null;
              return _(J, ht, de, Me);
            }
            case ii: {
              var bt = $.get(de.key === null ? V : de.key) || null;
              return w(J, bt, de, Me);
            }
            case et:
              var on = de._payload, Yt = de._init;
              return G($, J, V, Yt(on), Me);
          }
          if (Ft(de) || ja(de)) {
            var fr = $.get(V) || null;
            return R(J, fr, de, Me, null);
          }
          Zg(J, de);
        }
        return typeof de == "function" && Jg(J), null;
      }
      function K($, J, V) {
        {
          if (typeof $ != "object" || $ === null)
            return J;
          switch ($.$$typeof) {
            case ri:
            case ii:
              gT($, V);
              var de = $.key;
              if (typeof de != "string")
                break;
              if (J === null) {
                J = /* @__PURE__ */ new Set(), J.add(de);
                break;
              }
              if (!J.has(de)) {
                J.add(de);
                break;
              }
              E("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", de);
              break;
            case et:
              var Me = $._payload, xe = $._init;
              K(xe(Me), J, V);
              break;
          }
        }
        return J;
      }
      function Z($, J, V, de) {
        for (var Me = null, xe = 0; xe < V.length; xe++) {
          var ht = V[xe];
          Me = K(ht, Me, $);
        }
        for (var bt = null, on = null, Yt = J, fr = 0, Wt = 0, nr = null; Yt !== null && Wt < V.length; Wt++) {
          Yt.index > Wt ? (nr = Yt, Yt = null) : nr = Yt.sibling;
          var bi = U($, Yt, V[Wt], de);
          if (bi === null) {
            Yt === null && (Yt = nr);
            break;
          }
          e && Yt && bi.alternate === null && t($, Yt), fr = d(bi, fr, Wt), on === null ? bt = bi : on.sibling = bi, on = bi, Yt = nr;
        }
        if (Wt === V.length) {
          if (i($, Yt), Kr()) {
            var ti = Wt;
            tf($, ti);
          }
          return bt;
        }
        if (Yt === null) {
          for (; Wt < V.length; Wt++) {
            var Aa = j($, V[Wt], de);
            Aa !== null && (fr = d(Aa, fr, Wt), on === null ? bt = Aa : on.sibling = Aa, on = Aa);
          }
          if (Kr()) {
            var Fi = Wt;
            tf($, Fi);
          }
          return bt;
        }
        for (var Hi = o($, Yt); Wt < V.length; Wt++) {
          var Ti = G(Hi, $, Wt, V[Wt], de);
          Ti !== null && (e && Ti.alternate !== null && Hi.delete(Ti.key === null ? Wt : Ti.key), fr = d(Ti, fr, Wt), on === null ? bt = Ti : on.sibling = Ti, on = Ti);
        }
        if (e && Hi.forEach(function(lp) {
          return t($, lp);
        }), Kr()) {
          var xu = Wt;
          tf($, xu);
        }
        return bt;
      }
      function Le($, J, V, de) {
        var Me = ja(V);
        if (typeof Me != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          V[Symbol.toStringTag] === "Generator" && (pS || E("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), pS = !0), V.entries === Me && (dS || E("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), dS = !0);
          var xe = Me.call(V);
          if (xe)
            for (var ht = null, bt = xe.next(); !bt.done; bt = xe.next()) {
              var on = bt.value;
              ht = K(on, ht, $);
            }
        }
        var Yt = Me.call(V);
        if (Yt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var fr = null, Wt = null, nr = J, bi = 0, ti = 0, Aa = null, Fi = Yt.next(); nr !== null && !Fi.done; ti++, Fi = Yt.next()) {
          nr.index > ti ? (Aa = nr, nr = null) : Aa = nr.sibling;
          var Hi = U($, nr, Fi.value, de);
          if (Hi === null) {
            nr === null && (nr = Aa);
            break;
          }
          e && nr && Hi.alternate === null && t($, nr), bi = d(Hi, bi, ti), Wt === null ? fr = Hi : Wt.sibling = Hi, Wt = Hi, nr = Aa;
        }
        if (Fi.done) {
          if (i($, nr), Kr()) {
            var Ti = ti;
            tf($, Ti);
          }
          return fr;
        }
        if (nr === null) {
          for (; !Fi.done; ti++, Fi = Yt.next()) {
            var xu = j($, Fi.value, de);
            xu !== null && (bi = d(xu, bi, ti), Wt === null ? fr = xu : Wt.sibling = xu, Wt = xu);
          }
          if (Kr()) {
            var lp = ti;
            tf($, lp);
          }
          return fr;
        }
        for (var xv = o($, nr); !Fi.done; ti++, Fi = Yt.next()) {
          var Nl = G(xv, $, ti, Fi.value, de);
          Nl !== null && (e && Nl.alternate !== null && xv.delete(Nl.key === null ? ti : Nl.key), bi = d(Nl, bi, ti), Wt === null ? fr = Nl : Wt.sibling = Nl, Wt = Nl);
        }
        if (e && xv.forEach(function(JL) {
          return t($, JL);
        }), Kr()) {
          var ZL = ti;
          tf($, ZL);
        }
        return fr;
      }
      function it($, J, V, de) {
        if (J !== null && J.tag === X) {
          i($, J.sibling);
          var Me = u(J, V);
          return Me.return = $, Me;
        }
        i($, J);
        var xe = V0(V, $.mode, de);
        return xe.return = $, xe;
      }
      function Ke($, J, V, de) {
        for (var Me = V.key, xe = J; xe !== null; ) {
          if (xe.key === Me) {
            var ht = V.type;
            if (ht === Oi) {
              if (xe.tag === pe) {
                i($, xe.sibling);
                var bt = u(xe, V.props.children);
                return bt.return = $, bt._debugSource = V._source, bt._debugOwner = V._owner, bt;
              }
            } else if (xe.elementType === ht || // Keep this check inline so it only runs on the false path:
            sR(xe, V) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof ht == "object" && ht !== null && ht.$$typeof === et && yT(ht) === xe.type) {
              i($, xe.sibling);
              var on = u(xe, V.props);
              return on.ref = qh($, xe, V), on.return = $, on._debugSource = V._source, on._debugOwner = V._owner, on;
            }
            i($, xe);
            break;
          } else
            t($, xe);
          xe = xe.sibling;
        }
        if (V.type === Oi) {
          var Yt = Is(V.props.children, $.mode, de, V.key);
          return Yt.return = $, Yt;
        } else {
          var fr = $0(V, $.mode, de);
          return fr.ref = qh($, J, V), fr.return = $, fr;
        }
      }
      function Pt($, J, V, de) {
        for (var Me = V.key, xe = J; xe !== null; ) {
          if (xe.key === Me)
            if (xe.tag === H && xe.stateNode.containerInfo === V.containerInfo && xe.stateNode.implementation === V.implementation) {
              i($, xe.sibling);
              var ht = u(xe, V.children || []);
              return ht.return = $, ht;
            } else {
              i($, xe);
              break;
            }
          else
            t($, xe);
          xe = xe.sibling;
        }
        var bt = B0(V, $.mode, de);
        return bt.return = $, bt;
      }
      function Lt($, J, V, de) {
        var Me = typeof V == "object" && V !== null && V.type === Oi && V.key === null;
        if (Me && (V = V.props.children), typeof V == "object" && V !== null) {
          switch (V.$$typeof) {
            case ri:
              return v(Ke($, J, V, de));
            case ii:
              return v(Pt($, J, V, de));
            case et:
              var xe = V._payload, ht = V._init;
              return Lt($, J, ht(xe), de);
          }
          if (Ft(V))
            return Z($, J, V, de);
          if (ja(V))
            return Le($, J, V, de);
          Zg($, V);
        }
        return typeof V == "string" && V !== "" || typeof V == "number" ? v(it($, J, "" + V, de)) : (typeof V == "function" && Jg($), i($, J));
      }
      return Lt;
    }
    var Yd = ET(!0), _T = ET(!1);
    function FA(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var i = t.child, o = vf(i, i.pendingProps);
        for (t.child = o, o.return = t; i.sibling !== null; )
          i = i.sibling, o = o.sibling = vf(i, i.pendingProps), o.return = t;
        o.sibling = null;
      }
    }
    function HA(e, t) {
      for (var i = e.child; i !== null; )
        mL(i, t), i = i.sibling;
    }
    var Zh = {}, As = ws(Zh), Jh = ws(Zh), ey = ws(Zh);
    function ty(e) {
      if (e === Zh)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function ST() {
      var e = ty(ey.current);
      return e;
    }
    function gS(e, t) {
      Si(ey, t, e), Si(Jh, e, e), Si(As, Zh, e);
      var i = tO(t);
      _i(As, e), Si(As, i, e);
    }
    function Wd(e) {
      _i(As, e), _i(Jh, e), _i(ey, e);
    }
    function yS() {
      var e = ty(As.current);
      return e;
    }
    function CT(e) {
      ty(ey.current);
      var t = ty(As.current), i = nO(t, e.type);
      t !== i && (Si(Jh, e, e), Si(As, i, e));
    }
    function ES(e) {
      Jh.current === e && (_i(As, e), _i(Jh, e));
    }
    var $A = 0, bT = 1, TT = 1, ev = 2, jo = ws($A);
    function _S(e, t) {
      return (e & t) !== 0;
    }
    function Gd(e) {
      return e & bT;
    }
    function SS(e, t) {
      return e & bT | t;
    }
    function VA(e, t) {
      return e | t;
    }
    function Ns(e, t) {
      Si(jo, t, e);
    }
    function Kd(e) {
      _i(jo, e);
    }
    function BA(e, t) {
      var i = e.memoizedState;
      return i !== null ? i.dehydrated !== null : (e.memoizedProps, !0);
    }
    function ny(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === oe) {
          var i = t.memoizedState;
          if (i !== null) {
            var o = i.dehydrated;
            if (o === null || Mb(o) || x_(o))
              return t;
          }
        } else if (t.tag === at && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & _t) !== nt;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var fa = (
      /*   */
      0
    ), Rr = (
      /* */
      1
    ), Tl = (
      /*  */
      2
    ), xr = (
      /*    */
      4
    ), Qr = (
      /*   */
      8
    ), CS = [];
    function bS() {
      for (var e = 0; e < CS.length; e++) {
        var t = CS[e];
        t._workInProgressVersionPrimary = null;
      }
      CS.length = 0;
    }
    function YA(e, t) {
      var i = t._getVersion, o = i(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, o] : e.mutableSourceEagerHydrationData.push(t, o);
    }
    var Ae = p.ReactCurrentDispatcher, tv = p.ReactCurrentBatchConfig, TS, Qd;
    TS = /* @__PURE__ */ new Set();
    var uf = te, an = null, Dr = null, Or = null, ry = !1, nv = !1, rv = 0, WA = 0, GA = 25, re = null, no = null, ks = -1, wS = !1;
    function qt() {
      {
        var e = re;
        no === null ? no = [e] : no.push(e);
      }
    }
    function _e() {
      {
        var e = re;
        no !== null && (ks++, no[ks] !== e && KA(e));
      }
    }
    function Xd(e) {
      e != null && !Ft(e) && E("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", re, typeof e);
    }
    function KA(e) {
      {
        var t = yt(an);
        if (!TS.has(t) && (TS.add(t), no !== null)) {
          for (var i = "", o = 30, u = 0; u <= ks; u++) {
            for (var d = no[u], v = u === ks ? e : d, g = u + 1 + ". " + d; g.length < o; )
              g += " ";
            g += v + `
`, i += g;
          }
          E(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, i);
        }
      }
    }
    function Ci() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function RS(e, t) {
      if (wS)
        return !1;
      if (t === null)
        return E("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", re), !1;
      e.length !== t.length && E(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, re, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var i = 0; i < t.length && i < e.length; i++)
        if (!Fe(e[i], t[i]))
          return !1;
      return !0;
    }
    function qd(e, t, i, o, u, d) {
      uf = d, an = t, no = e !== null ? e._debugHookTypes : null, ks = -1, wS = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = te, e !== null && e.memoizedState !== null ? Ae.current = WT : no !== null ? Ae.current = YT : Ae.current = BT;
      var v = i(o, u);
      if (nv) {
        var g = 0;
        do {
          if (nv = !1, rv = 0, g >= GA)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          g += 1, wS = !1, Dr = null, Or = null, t.updateQueue = null, ks = -1, Ae.current = GT, v = i(o, u);
        } while (nv);
      }
      Ae.current = my, t._debugHookTypes = no;
      var _ = Dr !== null && Dr.next !== null;
      if (uf = te, an = null, Dr = null, Or = null, re = null, no = null, ks = -1, e !== null && (e.flags & Tr) !== (t.flags & Tr) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Ge) !== rt && E("Internal React error: Expected static flag was missing. Please notify the React team."), ry = !1, _)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return v;
    }
    function Zd() {
      var e = rv !== 0;
      return rv = 0, e;
    }
    function wT(e, t, i) {
      t.updateQueue = e.updateQueue, (t.mode & na) !== rt ? t.flags &= ~(Zl | ea | ci | Be) : t.flags &= ~(ci | Be), e.lanes = jc(e.lanes, i);
    }
    function RT() {
      if (Ae.current = my, ry) {
        for (var e = an.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        ry = !1;
      }
      uf = te, an = null, Dr = null, Or = null, no = null, ks = -1, re = null, IT = !1, nv = !1, rv = 0;
    }
    function wl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Or === null ? an.memoizedState = Or = e : Or = Or.next = e, Or;
    }
    function ro() {
      var e;
      if (Dr === null) {
        var t = an.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = Dr.next;
      var i;
      if (Or === null ? i = an.memoizedState : i = Or.next, i !== null)
        Or = i, i = Or.next, Dr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        Dr = e;
        var o = {
          memoizedState: Dr.memoizedState,
          baseState: Dr.baseState,
          baseQueue: Dr.baseQueue,
          queue: Dr.queue,
          next: null
        };
        Or === null ? an.memoizedState = Or = o : Or = Or.next = o;
      }
      return Or;
    }
    function xT() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function xS(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function DS(e, t, i) {
      var o = wl(), u;
      i !== void 0 ? u = i(t) : u = t, o.memoizedState = o.baseState = u;
      var d = {
        pending: null,
        interleaved: null,
        lanes: te,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      o.queue = d;
      var v = d.dispatch = ZA.bind(null, an, d);
      return [o.memoizedState, v];
    }
    function OS(e, t, i) {
      var o = ro(), u = o.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var d = Dr, v = d.baseQueue, g = u.pending;
      if (g !== null) {
        if (v !== null) {
          var _ = v.next, w = g.next;
          v.next = w, g.next = _;
        }
        d.baseQueue !== v && E("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), d.baseQueue = v = g, u.pending = null;
      }
      if (v !== null) {
        var R = v.next, j = d.baseState, U = null, G = null, K = null, Z = R;
        do {
          var Le = Z.lane;
          if (uu(uf, Le)) {
            if (K !== null) {
              var Ke = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Yn,
                action: Z.action,
                hasEagerState: Z.hasEagerState,
                eagerState: Z.eagerState,
                next: null
              };
              K = K.next = Ke;
            }
            if (Z.hasEagerState)
              j = Z.eagerState;
            else {
              var Pt = Z.action;
              j = e(j, Pt);
            }
          } else {
            var it = {
              lane: Le,
              action: Z.action,
              hasEagerState: Z.hasEagerState,
              eagerState: Z.eagerState,
              next: null
            };
            K === null ? (G = K = it, U = j) : K = K.next = it, an.lanes = Tt(an.lanes, Le), Cv(Le);
          }
          Z = Z.next;
        } while (Z !== null && Z !== R);
        K === null ? U = j : K.next = G, Fe(j, o.memoizedState) || cv(), o.memoizedState = j, o.baseState = U, o.baseQueue = K, u.lastRenderedState = j;
      }
      var Lt = u.interleaved;
      if (Lt !== null) {
        var $ = Lt;
        do {
          var J = $.lane;
          an.lanes = Tt(an.lanes, J), Cv(J), $ = $.next;
        } while ($ !== Lt);
      } else
        v === null && (u.lanes = te);
      var V = u.dispatch;
      return [o.memoizedState, V];
    }
    function AS(e, t, i) {
      var o = ro(), u = o.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var d = u.dispatch, v = u.pending, g = o.memoizedState;
      if (v !== null) {
        u.pending = null;
        var _ = v.next, w = _;
        do {
          var R = w.action;
          g = e(g, R), w = w.next;
        } while (w !== _);
        Fe(g, o.memoizedState) || cv(), o.memoizedState = g, o.baseQueue === null && (o.baseState = g), u.lastRenderedState = g;
      }
      return [g, d];
    }
    function uF(e, t, i) {
    }
    function sF(e, t, i) {
    }
    function NS(e, t, i) {
      var o = an, u = wl(), d, v = Kr();
      if (v) {
        if (i === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        d = i(), Qd || d !== i() && (E("The result of getServerSnapshot should be cached to avoid an infinite loop"), Qd = !0);
      } else {
        if (d = t(), !Qd) {
          var g = t();
          Fe(d, g) || (E("The result of getSnapshot should be cached to avoid an infinite loop"), Qd = !0);
        }
        var _ = My();
        if (_ === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Pc(_, uf) || DT(o, t, d);
      }
      u.memoizedState = d;
      var w = {
        value: d,
        getSnapshot: t
      };
      return u.queue = w, uy(AT.bind(null, o, w, e), [e]), o.flags |= ci, iv(Rr | Qr, OT.bind(null, o, w, d, t), void 0, null), d;
    }
    function iy(e, t, i) {
      var o = an, u = ro(), d = t();
      if (!Qd) {
        var v = t();
        Fe(d, v) || (E("The result of getSnapshot should be cached to avoid an infinite loop"), Qd = !0);
      }
      var g = u.memoizedState, _ = !Fe(g, d);
      _ && (u.memoizedState = d, cv());
      var w = u.queue;
      if (ov(AT.bind(null, o, w, e), [e]), w.getSnapshot !== t || _ || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      Or !== null && Or.memoizedState.tag & Rr) {
        o.flags |= ci, iv(Rr | Qr, OT.bind(null, o, w, d, t), void 0, null);
        var R = My();
        if (R === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Pc(R, uf) || DT(o, t, d);
      }
      return d;
    }
    function DT(e, t, i) {
      e.flags |= ql;
      var o = {
        getSnapshot: t,
        value: i
      }, u = an.updateQueue;
      if (u === null)
        u = xT(), an.updateQueue = u, u.stores = [o];
      else {
        var d = u.stores;
        d === null ? u.stores = [o] : d.push(o);
      }
    }
    function OT(e, t, i, o) {
      t.value = i, t.getSnapshot = o, NT(t) && kT(e);
    }
    function AT(e, t, i) {
      var o = function() {
        NT(t) && kT(e);
      };
      return i(o);
    }
    function NT(e) {
      var t = e.getSnapshot, i = e.value;
      try {
        var o = t();
        return !Fe(i, o);
      } catch {
        return !0;
      }
    }
    function kT(e) {
      var t = ca(e, lt);
      t !== null && Lr(t, e, lt, vn);
    }
    function ay(e) {
      var t = wl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var i = {
        pending: null,
        interleaved: null,
        lanes: te,
        dispatch: null,
        lastRenderedReducer: xS,
        lastRenderedState: e
      };
      t.queue = i;
      var o = i.dispatch = JA.bind(null, an, i);
      return [t.memoizedState, o];
    }
    function kS(e) {
      return OS(xS);
    }
    function LS(e) {
      return AS(xS);
    }
    function iv(e, t, i, o) {
      var u = {
        tag: e,
        create: t,
        destroy: i,
        deps: o,
        // Circular
        next: null
      }, d = an.updateQueue;
      if (d === null)
        d = xT(), an.updateQueue = d, d.lastEffect = u.next = u;
      else {
        var v = d.lastEffect;
        if (v === null)
          d.lastEffect = u.next = u;
        else {
          var g = v.next;
          v.next = u, u.next = g, d.lastEffect = u;
        }
      }
      return u;
    }
    function MS(e) {
      var t = wl();
      {
        var i = {
          current: e
        };
        return t.memoizedState = i, i;
      }
    }
    function oy(e) {
      var t = ro();
      return t.memoizedState;
    }
    function av(e, t, i, o) {
      var u = wl(), d = o === void 0 ? null : o;
      an.flags |= e, u.memoizedState = iv(Rr | t, i, void 0, d);
    }
    function ly(e, t, i, o) {
      var u = ro(), d = o === void 0 ? null : o, v = void 0;
      if (Dr !== null) {
        var g = Dr.memoizedState;
        if (v = g.destroy, d !== null) {
          var _ = g.deps;
          if (RS(d, _)) {
            u.memoizedState = iv(t, i, v, d);
            return;
          }
        }
      }
      an.flags |= e, u.memoizedState = iv(Rr | t, i, v, d);
    }
    function uy(e, t) {
      return (an.mode & na) !== rt ? av(Zl | ci | ul, Qr, e, t) : av(ci | ul, Qr, e, t);
    }
    function ov(e, t) {
      return ly(ci, Qr, e, t);
    }
    function zS(e, t) {
      return av(Be, Tl, e, t);
    }
    function sy(e, t) {
      return ly(Be, Tl, e, t);
    }
    function US(e, t) {
      var i = Be;
      return i |= Ji, (an.mode & na) !== rt && (i |= ea), av(i, xr, e, t);
    }
    function cy(e, t) {
      return ly(Be, xr, e, t);
    }
    function LT(e, t) {
      if (typeof t == "function") {
        var i = t, o = e();
        return i(o), function() {
          i(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || E("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var d = e();
        return u.current = d, function() {
          u.current = null;
        };
      }
    }
    function PS(e, t, i) {
      typeof t != "function" && E("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var o = i != null ? i.concat([e]) : null, u = Be;
      return u |= Ji, (an.mode & na) !== rt && (u |= ea), av(u, xr, LT.bind(null, t, e), o);
    }
    function fy(e, t, i) {
      typeof t != "function" && E("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var o = i != null ? i.concat([e]) : null;
      return ly(Be, xr, LT.bind(null, t, e), o);
    }
    function QA(e, t) {
    }
    var dy = QA;
    function jS(e, t) {
      var i = wl(), o = t === void 0 ? null : t;
      return i.memoizedState = [e, o], e;
    }
    function py(e, t) {
      var i = ro(), o = t === void 0 ? null : t, u = i.memoizedState;
      if (u !== null && o !== null) {
        var d = u[1];
        if (RS(o, d))
          return u[0];
      }
      return i.memoizedState = [e, o], e;
    }
    function IS(e, t) {
      var i = wl(), o = t === void 0 ? null : t, u = e();
      return i.memoizedState = [u, o], u;
    }
    function hy(e, t) {
      var i = ro(), o = t === void 0 ? null : t, u = i.memoizedState;
      if (u !== null && o !== null) {
        var d = u[1];
        if (RS(o, d))
          return u[0];
      }
      var v = e();
      return i.memoizedState = [v, o], v;
    }
    function FS(e) {
      var t = wl();
      return t.memoizedState = e, e;
    }
    function MT(e) {
      var t = ro(), i = Dr, o = i.memoizedState;
      return UT(t, o, e);
    }
    function zT(e) {
      var t = ro();
      if (Dr === null)
        return t.memoizedState = e, e;
      var i = Dr.memoizedState;
      return UT(t, i, e);
    }
    function UT(e, t, i) {
      var o = !Vm(uf);
      if (o) {
        if (!Fe(i, t)) {
          var u = Wm();
          an.lanes = Tt(an.lanes, u), Cv(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, cv()), e.memoizedState = i, i;
    }
    function XA(e, t, i) {
      var o = ia();
      Pn(KE(o, Ao)), e(!0);
      var u = tv.transition;
      tv.transition = {};
      var d = tv.transition;
      tv.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Pn(o), tv.transition = u, u === null && d._updatedFibers) {
          var v = d._updatedFibers.size;
          v > 10 && T("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), d._updatedFibers.clear();
        }
      }
    }
    function HS() {
      var e = ay(!1), t = e[0], i = e[1], o = XA.bind(null, i), u = wl();
      return u.memoizedState = o, [t, o];
    }
    function PT() {
      var e = kS(), t = e[0], i = ro(), o = i.memoizedState;
      return [t, o];
    }
    function jT() {
      var e = LS(), t = e[0], i = ro(), o = i.memoizedState;
      return [t, o];
    }
    var IT = !1;
    function qA() {
      return IT;
    }
    function $S() {
      var e = wl(), t = My(), i = t.identifierPrefix, o;
      if (Kr()) {
        var u = fA();
        o = ":" + i + "R" + u;
        var d = rv++;
        d > 0 && (o += "H" + d.toString(32)), o += ":";
      } else {
        var v = WA++;
        o = ":" + i + "r" + v.toString(32) + ":";
      }
      return e.memoizedState = o, o;
    }
    function vy() {
      var e = ro(), t = e.memoizedState;
      return t;
    }
    function ZA(e, t, i) {
      typeof arguments[3] == "function" && E("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var o = Ps(e), u = {
        lane: o,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (FT(e))
        HT(t, u);
      else {
        var d = iT(e, t, u, o);
        if (d !== null) {
          var v = Ii();
          Lr(d, e, o, v), $T(d, t, o);
        }
      }
      VT(e, o);
    }
    function JA(e, t, i) {
      typeof arguments[3] == "function" && E("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var o = Ps(e), u = {
        lane: o,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (FT(e))
        HT(t, u);
      else {
        var d = e.alternate;
        if (e.lanes === te && (d === null || d.lanes === te)) {
          var v = t.lastRenderedReducer;
          if (v !== null) {
            var g;
            g = Ae.current, Ae.current = Io;
            try {
              var _ = t.lastRenderedState, w = v(_, i);
              if (u.hasEagerState = !0, u.eagerState = w, Fe(w, _)) {
                NA(e, t, u, o);
                return;
              }
            } catch {
            } finally {
              Ae.current = g;
            }
          }
        }
        var R = iT(e, t, u, o);
        if (R !== null) {
          var j = Ii();
          Lr(R, e, o, j), $T(R, t, o);
        }
      }
      VT(e, o);
    }
    function FT(e) {
      var t = e.alternate;
      return e === an || t !== null && t === an;
    }
    function HT(e, t) {
      nv = ry = !0;
      var i = e.pending;
      i === null ? t.next = t : (t.next = i.next, i.next = t), e.pending = t;
    }
    function $T(e, t, i) {
      if (dh(i)) {
        var o = t.lanes;
        o = ud(o, e.pendingLanes);
        var u = Tt(o, i);
        t.lanes = u, ph(e, u);
      }
    }
    function VT(e, t, i) {
      Wf(e, t);
    }
    var my = {
      readContext: yr,
      useCallback: Ci,
      useContext: Ci,
      useEffect: Ci,
      useImperativeHandle: Ci,
      useInsertionEffect: Ci,
      useLayoutEffect: Ci,
      useMemo: Ci,
      useReducer: Ci,
      useRef: Ci,
      useState: Ci,
      useDebugValue: Ci,
      useDeferredValue: Ci,
      useTransition: Ci,
      useMutableSource: Ci,
      useSyncExternalStore: Ci,
      useId: Ci,
      unstable_isNewReconciler: be
    }, BT = null, YT = null, WT = null, GT = null, Rl = null, Io = null, gy = null;
    {
      var VS = function() {
        E("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, St = function() {
        E("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      BT = {
        readContext: function(e) {
          return yr(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", qt(), Xd(t), jS(e, t);
        },
        useContext: function(e) {
          return re = "useContext", qt(), yr(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", qt(), Xd(t), uy(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return re = "useImperativeHandle", qt(), Xd(i), PS(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", qt(), Xd(t), zS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", qt(), Xd(t), US(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", qt(), Xd(t);
          var i = Ae.current;
          Ae.current = Rl;
          try {
            return IS(e, t);
          } finally {
            Ae.current = i;
          }
        },
        useReducer: function(e, t, i) {
          re = "useReducer", qt();
          var o = Ae.current;
          Ae.current = Rl;
          try {
            return DS(e, t, i);
          } finally {
            Ae.current = o;
          }
        },
        useRef: function(e) {
          return re = "useRef", qt(), MS(e);
        },
        useState: function(e) {
          re = "useState", qt();
          var t = Ae.current;
          Ae.current = Rl;
          try {
            return ay(e);
          } finally {
            Ae.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", qt(), void 0;
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", qt(), FS(e);
        },
        useTransition: function() {
          return re = "useTransition", qt(), HS();
        },
        useMutableSource: function(e, t, i) {
          return re = "useMutableSource", qt(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return re = "useSyncExternalStore", qt(), NS(e, t, i);
        },
        useId: function() {
          return re = "useId", qt(), $S();
        },
        unstable_isNewReconciler: be
      }, YT = {
        readContext: function(e) {
          return yr(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", _e(), jS(e, t);
        },
        useContext: function(e) {
          return re = "useContext", _e(), yr(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", _e(), uy(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return re = "useImperativeHandle", _e(), PS(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", _e(), zS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", _e(), US(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", _e();
          var i = Ae.current;
          Ae.current = Rl;
          try {
            return IS(e, t);
          } finally {
            Ae.current = i;
          }
        },
        useReducer: function(e, t, i) {
          re = "useReducer", _e();
          var o = Ae.current;
          Ae.current = Rl;
          try {
            return DS(e, t, i);
          } finally {
            Ae.current = o;
          }
        },
        useRef: function(e) {
          return re = "useRef", _e(), MS(e);
        },
        useState: function(e) {
          re = "useState", _e();
          var t = Ae.current;
          Ae.current = Rl;
          try {
            return ay(e);
          } finally {
            Ae.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", _e(), void 0;
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", _e(), FS(e);
        },
        useTransition: function() {
          return re = "useTransition", _e(), HS();
        },
        useMutableSource: function(e, t, i) {
          return re = "useMutableSource", _e(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return re = "useSyncExternalStore", _e(), NS(e, t, i);
        },
        useId: function() {
          return re = "useId", _e(), $S();
        },
        unstable_isNewReconciler: be
      }, WT = {
        readContext: function(e) {
          return yr(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", _e(), py(e, t);
        },
        useContext: function(e) {
          return re = "useContext", _e(), yr(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", _e(), ov(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return re = "useImperativeHandle", _e(), fy(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", _e(), sy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", _e(), cy(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", _e();
          var i = Ae.current;
          Ae.current = Io;
          try {
            return hy(e, t);
          } finally {
            Ae.current = i;
          }
        },
        useReducer: function(e, t, i) {
          re = "useReducer", _e();
          var o = Ae.current;
          Ae.current = Io;
          try {
            return OS(e, t, i);
          } finally {
            Ae.current = o;
          }
        },
        useRef: function(e) {
          return re = "useRef", _e(), oy();
        },
        useState: function(e) {
          re = "useState", _e();
          var t = Ae.current;
          Ae.current = Io;
          try {
            return kS(e);
          } finally {
            Ae.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", _e(), dy();
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", _e(), MT(e);
        },
        useTransition: function() {
          return re = "useTransition", _e(), PT();
        },
        useMutableSource: function(e, t, i) {
          return re = "useMutableSource", _e(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return re = "useSyncExternalStore", _e(), iy(e, t);
        },
        useId: function() {
          return re = "useId", _e(), vy();
        },
        unstable_isNewReconciler: be
      }, GT = {
        readContext: function(e) {
          return yr(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", _e(), py(e, t);
        },
        useContext: function(e) {
          return re = "useContext", _e(), yr(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", _e(), ov(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return re = "useImperativeHandle", _e(), fy(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", _e(), sy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", _e(), cy(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", _e();
          var i = Ae.current;
          Ae.current = gy;
          try {
            return hy(e, t);
          } finally {
            Ae.current = i;
          }
        },
        useReducer: function(e, t, i) {
          re = "useReducer", _e();
          var o = Ae.current;
          Ae.current = gy;
          try {
            return AS(e, t, i);
          } finally {
            Ae.current = o;
          }
        },
        useRef: function(e) {
          return re = "useRef", _e(), oy();
        },
        useState: function(e) {
          re = "useState", _e();
          var t = Ae.current;
          Ae.current = gy;
          try {
            return LS(e);
          } finally {
            Ae.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", _e(), dy();
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", _e(), zT(e);
        },
        useTransition: function() {
          return re = "useTransition", _e(), jT();
        },
        useMutableSource: function(e, t, i) {
          return re = "useMutableSource", _e(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return re = "useSyncExternalStore", _e(), iy(e, t);
        },
        useId: function() {
          return re = "useId", _e(), vy();
        },
        unstable_isNewReconciler: be
      }, Rl = {
        readContext: function(e) {
          return VS(), yr(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", St(), qt(), jS(e, t);
        },
        useContext: function(e) {
          return re = "useContext", St(), qt(), yr(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", St(), qt(), uy(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return re = "useImperativeHandle", St(), qt(), PS(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", St(), qt(), zS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", St(), qt(), US(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", St(), qt();
          var i = Ae.current;
          Ae.current = Rl;
          try {
            return IS(e, t);
          } finally {
            Ae.current = i;
          }
        },
        useReducer: function(e, t, i) {
          re = "useReducer", St(), qt();
          var o = Ae.current;
          Ae.current = Rl;
          try {
            return DS(e, t, i);
          } finally {
            Ae.current = o;
          }
        },
        useRef: function(e) {
          return re = "useRef", St(), qt(), MS(e);
        },
        useState: function(e) {
          re = "useState", St(), qt();
          var t = Ae.current;
          Ae.current = Rl;
          try {
            return ay(e);
          } finally {
            Ae.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", St(), qt(), void 0;
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", St(), qt(), FS(e);
        },
        useTransition: function() {
          return re = "useTransition", St(), qt(), HS();
        },
        useMutableSource: function(e, t, i) {
          return re = "useMutableSource", St(), qt(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return re = "useSyncExternalStore", St(), qt(), NS(e, t, i);
        },
        useId: function() {
          return re = "useId", St(), qt(), $S();
        },
        unstable_isNewReconciler: be
      }, Io = {
        readContext: function(e) {
          return VS(), yr(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", St(), _e(), py(e, t);
        },
        useContext: function(e) {
          return re = "useContext", St(), _e(), yr(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", St(), _e(), ov(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return re = "useImperativeHandle", St(), _e(), fy(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", St(), _e(), sy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", St(), _e(), cy(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", St(), _e();
          var i = Ae.current;
          Ae.current = Io;
          try {
            return hy(e, t);
          } finally {
            Ae.current = i;
          }
        },
        useReducer: function(e, t, i) {
          re = "useReducer", St(), _e();
          var o = Ae.current;
          Ae.current = Io;
          try {
            return OS(e, t, i);
          } finally {
            Ae.current = o;
          }
        },
        useRef: function(e) {
          return re = "useRef", St(), _e(), oy();
        },
        useState: function(e) {
          re = "useState", St(), _e();
          var t = Ae.current;
          Ae.current = Io;
          try {
            return kS(e);
          } finally {
            Ae.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", St(), _e(), dy();
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", St(), _e(), MT(e);
        },
        useTransition: function() {
          return re = "useTransition", St(), _e(), PT();
        },
        useMutableSource: function(e, t, i) {
          return re = "useMutableSource", St(), _e(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return re = "useSyncExternalStore", St(), _e(), iy(e, t);
        },
        useId: function() {
          return re = "useId", St(), _e(), vy();
        },
        unstable_isNewReconciler: be
      }, gy = {
        readContext: function(e) {
          return VS(), yr(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", St(), _e(), py(e, t);
        },
        useContext: function(e) {
          return re = "useContext", St(), _e(), yr(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", St(), _e(), ov(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return re = "useImperativeHandle", St(), _e(), fy(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", St(), _e(), sy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", St(), _e(), cy(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", St(), _e();
          var i = Ae.current;
          Ae.current = Io;
          try {
            return hy(e, t);
          } finally {
            Ae.current = i;
          }
        },
        useReducer: function(e, t, i) {
          re = "useReducer", St(), _e();
          var o = Ae.current;
          Ae.current = Io;
          try {
            return AS(e, t, i);
          } finally {
            Ae.current = o;
          }
        },
        useRef: function(e) {
          return re = "useRef", St(), _e(), oy();
        },
        useState: function(e) {
          re = "useState", St(), _e();
          var t = Ae.current;
          Ae.current = Io;
          try {
            return LS(e);
          } finally {
            Ae.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", St(), _e(), dy();
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", St(), _e(), zT(e);
        },
        useTransition: function() {
          return re = "useTransition", St(), _e(), jT();
        },
        useMutableSource: function(e, t, i) {
          return re = "useMutableSource", St(), _e(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return re = "useSyncExternalStore", St(), _e(), iy(e, t);
        },
        useId: function() {
          return re = "useId", St(), _e(), vy();
        },
        unstable_isNewReconciler: be
      };
    }
    var Ls = s.unstable_now, KT = 0, yy = -1, lv = -1, Ey = -1, BS = !1, _y = !1;
    function QT() {
      return BS;
    }
    function eN() {
      _y = !0;
    }
    function tN() {
      BS = !1, _y = !1;
    }
    function nN() {
      BS = _y, _y = !1;
    }
    function XT() {
      return KT;
    }
    function qT() {
      KT = Ls();
    }
    function YS(e) {
      lv = Ls(), e.actualStartTime < 0 && (e.actualStartTime = Ls());
    }
    function ZT(e) {
      lv = -1;
    }
    function Sy(e, t) {
      if (lv >= 0) {
        var i = Ls() - lv;
        e.actualDuration += i, t && (e.selfBaseDuration = i), lv = -1;
      }
    }
    function xl(e) {
      if (yy >= 0) {
        var t = Ls() - yy;
        yy = -1;
        for (var i = e.return; i !== null; ) {
          switch (i.tag) {
            case I:
              var o = i.stateNode;
              o.effectDuration += t;
              return;
            case Ce:
              var u = i.stateNode;
              u.effectDuration += t;
              return;
          }
          i = i.return;
        }
      }
    }
    function WS(e) {
      if (Ey >= 0) {
        var t = Ls() - Ey;
        Ey = -1;
        for (var i = e.return; i !== null; ) {
          switch (i.tag) {
            case I:
              var o = i.stateNode;
              o !== null && (o.passiveEffectDuration += t);
              return;
            case Ce:
              var u = i.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          i = i.return;
        }
      }
    }
    function Dl() {
      yy = Ls();
    }
    function GS() {
      Ey = Ls();
    }
    function KS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function sf(e, t) {
      return {
        value: e,
        source: t,
        stack: Uu(t),
        digest: null
      };
    }
    function QS(e, t, i) {
      return {
        value: e,
        source: null,
        stack: i ?? null,
        digest: t ?? null
      };
    }
    function rN(e, t) {
      return !0;
    }
    function XS(e, t) {
      try {
        var i = rN(e, t);
        if (i === !1)
          return;
        var o = t.value, u = t.source, d = t.stack, v = d !== null ? d : "";
        if (o != null && o._suppressLogging) {
          if (e.tag === D)
            return;
          console.error(o);
        }
        var g = u ? yt(u) : null, _ = g ? "The above error occurred in the <" + g + "> component:" : "The above error occurred in one of your React components:", w;
        if (e.tag === I)
          w = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var R = yt(e) || "Anonymous";
          w = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + R + ".");
        }
        var j = _ + `
` + v + `

` + ("" + w);
        console.error(j);
      } catch (U) {
        setTimeout(function() {
          throw U;
        });
      }
    }
    var iN = typeof WeakMap == "function" ? WeakMap : Map;
    function JT(e, t, i) {
      var o = Su(vn, i);
      o.tag = X_, o.payload = {
        element: null
      };
      var u = t.value;
      return o.callback = function() {
        Xk(u), XS(e, t);
      }, o;
    }
    function qS(e, t, i) {
      var o = Su(vn, i);
      o.tag = X_;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var d = t.value;
        o.payload = function() {
          return u(d);
        }, o.callback = function() {
          cR(e), XS(e, t);
        };
      }
      var v = e.stateNode;
      return v !== null && typeof v.componentDidCatch == "function" && (o.callback = function() {
        cR(e), XS(e, t), typeof u != "function" && Kk(this);
        var _ = t.value, w = t.stack;
        this.componentDidCatch(_, {
          componentStack: w !== null ? w : ""
        }), typeof u != "function" && (yi(e.lanes, lt) || E("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", yt(e) || "Unknown"));
      }), o;
    }
    function ew(e, t, i) {
      var o = e.pingCache, u;
      if (o === null ? (o = e.pingCache = new iN(), u = /* @__PURE__ */ new Set(), o.set(t, u)) : (u = o.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), o.set(t, u))), !u.has(i)) {
        u.add(i);
        var d = qk.bind(null, e, t, i);
        zi && bv(e, i), t.then(d, d);
      }
    }
    function aN(e, t, i, o) {
      var u = e.updateQueue;
      if (u === null) {
        var d = /* @__PURE__ */ new Set();
        d.add(i), e.updateQueue = d;
      } else
        u.add(i);
    }
    function oN(e, t) {
      var i = e.tag;
      if ((e.mode & Ge) === rt && (i === k || i === ae || i === De)) {
        var o = e.alternate;
        o ? (e.updateQueue = o.updateQueue, e.memoizedState = o.memoizedState, e.lanes = o.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function tw(e) {
      var t = e;
      do {
        if (t.tag === oe && BA(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function nw(e, t, i, o, u) {
      if ((e.mode & Ge) === rt) {
        if (e === t)
          e.flags |= br;
        else {
          if (e.flags |= _t, i.flags |= If, i.flags &= ~(Om | ll), i.tag === D) {
            var d = i.alternate;
            if (d === null)
              i.tag = vt;
            else {
              var v = Su(vn, lt);
              v.tag = Yg, Os(i, v, lt);
            }
          }
          i.lanes = Tt(i.lanes, lt);
        }
        return e;
      }
      return e.flags |= br, e.lanes = u, e;
    }
    function lN(e, t, i, o, u) {
      if (i.flags |= ll, zi && bv(e, u), o !== null && typeof o == "object" && typeof o.then == "function") {
        var d = o;
        oN(i), Kr() && i.mode & Ge && Wb();
        var v = tw(t);
        if (v !== null) {
          v.flags &= ~Yr, nw(v, t, i, e, u), v.mode & Ge && ew(e, d, u), aN(v, e, d);
          return;
        } else {
          if (!fh(u)) {
            ew(e, d, u), A0();
            return;
          }
          var g = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          o = g;
        }
      } else if (Kr() && i.mode & Ge) {
        Wb();
        var _ = tw(t);
        if (_ !== null) {
          (_.flags & br) === nt && (_.flags |= Yr), nw(_, t, i, e, u), V_(sf(o, i));
          return;
        }
      }
      o = sf(o, i), Fk(o);
      var w = t;
      do {
        switch (w.tag) {
          case I: {
            var R = o;
            w.flags |= br;
            var j = os(u);
            w.lanes = Tt(w.lanes, j);
            var U = JT(w, R, j);
            J_(w, U);
            return;
          }
          case D:
            var G = o, K = w.type, Z = w.stateNode;
            if ((w.flags & _t) === nt && (typeof K.getDerivedStateFromError == "function" || Z !== null && typeof Z.componentDidCatch == "function" && !tR(Z))) {
              w.flags |= br;
              var Le = os(u);
              w.lanes = Tt(w.lanes, Le);
              var it = qS(w, G, Le);
              J_(w, it);
              return;
            }
            break;
        }
        w = w.return;
      } while (w !== null);
    }
    function uN() {
      return null;
    }
    var uv = p.ReactCurrentOwner, Fo = !1, ZS, sv, JS, e0, t0, cf, n0, Cy;
    ZS = {}, sv = {}, JS = {}, e0 = {}, t0 = {}, cf = !1, n0 = {}, Cy = {};
    function Pi(e, t, i, o) {
      e === null ? t.child = _T(t, null, i, o) : t.child = Yd(t, e.child, i, o);
    }
    function sN(e, t, i, o) {
      t.child = Yd(t, e.child, null, o), t.child = Yd(t, null, i, o);
    }
    function rw(e, t, i, o, u) {
      if (t.type !== t.elementType) {
        var d = i.propTypes;
        d && Mo(
          d,
          o,
          // Resolved props
          "prop",
          It(i)
        );
      }
      var v = i.render, g = t.ref, _, w;
      Bd(t, u), Zu(t);
      {
        if (uv.current = t, Cr(!0), _ = qd(e, t, v, o, g, u), w = Zd(), t.mode & zn) {
          hn(!0);
          try {
            _ = qd(e, t, v, o, g, u), w = Zd();
          } finally {
            hn(!1);
          }
        }
        Cr(!1);
      }
      return eu(), e !== null && !Fo ? (wT(e, t, u), Cu(e, t, u)) : (Kr() && w && P_(t), t.flags |= Ra, Pi(e, t, _, u), t.child);
    }
    function iw(e, t, i, o, u) {
      if (e === null) {
        var d = i.type;
        if (hL(d) && i.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        i.defaultProps === void 0) {
          var v = d;
          return v = op(d), t.tag = De, t.type = v, a0(t, d), aw(e, t, v, o, u);
        }
        {
          var g = d.propTypes;
          g && Mo(
            g,
            o,
            // Resolved props
            "prop",
            It(d)
          );
        }
        var _ = H0(i.type, null, o, t, t.mode, u);
        return _.ref = t.ref, _.return = t, t.child = _, _;
      }
      {
        var w = i.type, R = w.propTypes;
        R && Mo(
          R,
          o,
          // Resolved props
          "prop",
          It(w)
        );
      }
      var j = e.child, U = f0(e, u);
      if (!U) {
        var G = j.memoizedProps, K = i.compare;
        if (K = K !== null ? K : ft, K(G, o) && e.ref === t.ref)
          return Cu(e, t, u);
      }
      t.flags |= Ra;
      var Z = vf(j, o);
      return Z.ref = t.ref, Z.return = t, t.child = Z, Z;
    }
    function aw(e, t, i, o, u) {
      if (t.type !== t.elementType) {
        var d = t.elementType;
        if (d.$$typeof === et) {
          var v = d, g = v._payload, _ = v._init;
          try {
            d = _(g);
          } catch {
            d = null;
          }
          var w = d && d.propTypes;
          w && Mo(
            w,
            o,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            It(d)
          );
        }
      }
      if (e !== null) {
        var R = e.memoizedProps;
        if (ft(R, o) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (Fo = !1, t.pendingProps = o = R, f0(e, u))
            (e.flags & If) !== nt && (Fo = !0);
          else
            return t.lanes = e.lanes, Cu(e, t, u);
      }
      return r0(e, t, i, o, u);
    }
    function ow(e, t, i) {
      var o = t.pendingProps, u = o.children, d = e !== null ? e.memoizedState : null;
      if (o.mode === "hidden" || ne)
        if ((t.mode & Ge) === rt) {
          var v = {
            baseLanes: te,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = v, zy(t, i);
        } else if (yi(i, Ui)) {
          var j = {
            baseLanes: te,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = j;
          var U = d !== null ? d.baseLanes : i;
          zy(t, U);
        } else {
          var g = null, _;
          if (d !== null) {
            var w = d.baseLanes;
            _ = Tt(w, i);
          } else
            _ = i;
          t.lanes = t.childLanes = Ui;
          var R = {
            baseLanes: _,
            cachePool: g,
            transitions: null
          };
          return t.memoizedState = R, t.updateQueue = null, zy(t, _), null;
        }
      else {
        var G;
        d !== null ? (G = Tt(d.baseLanes, i), t.memoizedState = null) : G = i, zy(t, G);
      }
      return Pi(e, t, u, i), t.child;
    }
    function cN(e, t, i) {
      var o = t.pendingProps;
      return Pi(e, t, o, i), t.child;
    }
    function fN(e, t, i) {
      var o = t.pendingProps.children;
      return Pi(e, t, o, i), t.child;
    }
    function dN(e, t, i) {
      {
        t.flags |= Be;
        {
          var o = t.stateNode;
          o.effectDuration = 0, o.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, d = u.children;
      return Pi(e, t, d, i), t.child;
    }
    function lw(e, t) {
      var i = t.ref;
      (e === null && i !== null || e !== null && e.ref !== i) && (t.flags |= ki, t.flags |= Ya);
    }
    function r0(e, t, i, o, u) {
      if (t.type !== t.elementType) {
        var d = i.propTypes;
        d && Mo(
          d,
          o,
          // Resolved props
          "prop",
          It(i)
        );
      }
      var v;
      {
        var g = jd(t, i, !0);
        v = Id(t, g);
      }
      var _, w;
      Bd(t, u), Zu(t);
      {
        if (uv.current = t, Cr(!0), _ = qd(e, t, i, o, v, u), w = Zd(), t.mode & zn) {
          hn(!0);
          try {
            _ = qd(e, t, i, o, v, u), w = Zd();
          } finally {
            hn(!1);
          }
        }
        Cr(!1);
      }
      return eu(), e !== null && !Fo ? (wT(e, t, u), Cu(e, t, u)) : (Kr() && w && P_(t), t.flags |= Ra, Pi(e, t, _, u), t.child);
    }
    function uw(e, t, i, o, u) {
      {
        switch (OL(t)) {
          case !1: {
            var d = t.stateNode, v = t.type, g = new v(t.memoizedProps, d.context), _ = g.state;
            d.updater.enqueueSetState(d, _, null);
            break;
          }
          case !0: {
            t.flags |= _t, t.flags |= br;
            var w = new Error("Simulated error coming from DevTools"), R = os(u);
            t.lanes = Tt(t.lanes, R);
            var j = qS(t, sf(w, t), R);
            J_(t, j);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var U = i.propTypes;
          U && Mo(
            U,
            o,
            // Resolved props
            "prop",
            It(i)
          );
        }
      }
      var G;
      bl(i) ? (G = !0, Mg(t)) : G = !1, Bd(t, u);
      var K = t.stateNode, Z;
      K === null ? (Ty(e, t), vT(t, i, o), fS(t, i, o, u), Z = !0) : e === null ? Z = jA(t, i, o, u) : Z = IA(e, t, i, o, u);
      var Le = i0(e, t, i, Z, G, u);
      {
        var it = t.stateNode;
        Z && it.props !== o && (cf || E("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", yt(t) || "a component"), cf = !0);
      }
      return Le;
    }
    function i0(e, t, i, o, u, d) {
      lw(e, t);
      var v = (t.flags & _t) !== nt;
      if (!o && !v)
        return u && $b(t, i, !1), Cu(e, t, d);
      var g = t.stateNode;
      uv.current = t;
      var _;
      if (v && typeof i.getDerivedStateFromError != "function")
        _ = null, ZT();
      else {
        Zu(t);
        {
          if (Cr(!0), _ = g.render(), t.mode & zn) {
            hn(!0);
            try {
              g.render();
            } finally {
              hn(!1);
            }
          }
          Cr(!1);
        }
        eu();
      }
      return t.flags |= Ra, e !== null && v ? sN(e, t, _, d) : Pi(e, t, _, d), t.memoizedState = g.state, u && $b(t, i, !0), t.child;
    }
    function sw(e) {
      var t = e.stateNode;
      t.pendingContext ? Fb(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Fb(e, t.context, !1), gS(e, t.containerInfo);
    }
    function pN(e, t, i) {
      if (sw(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var o = t.pendingProps, u = t.memoizedState, d = u.element;
      lT(e, t), Qg(t, o, null, i);
      var v = t.memoizedState;
      t.stateNode;
      var g = v.element;
      if (u.isDehydrated) {
        var _ = {
          element: g,
          isDehydrated: !1,
          cache: v.cache,
          pendingSuspenseBoundaries: v.pendingSuspenseBoundaries,
          transitions: v.transitions
        }, w = t.updateQueue;
        if (w.baseState = _, t.memoizedState = _, t.flags & Yr) {
          var R = sf(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return cw(e, t, g, i, R);
        } else if (g !== d) {
          var j = sf(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return cw(e, t, g, i, j);
        } else {
          gA(t);
          var U = _T(t, null, g, i);
          t.child = U;
          for (var G = U; G; )
            G.flags = G.flags & ~sn | Ba, G = G.sibling;
        }
      } else {
        if ($d(), g === d)
          return Cu(e, t, i);
        Pi(e, t, g, i);
      }
      return t.child;
    }
    function cw(e, t, i, o, u) {
      return $d(), V_(u), t.flags |= Yr, Pi(e, t, i, o), t.child;
    }
    function hN(e, t, i) {
      CT(t), e === null && $_(t);
      var o = t.type, u = t.pendingProps, d = e !== null ? e.memoizedProps : null, v = u.children, g = b_(o, u);
      return g ? v = null : d !== null && b_(o, d) && (t.flags |= Zi), lw(e, t), Pi(e, t, v, i), t.child;
    }
    function vN(e, t) {
      return e === null && $_(t), null;
    }
    function mN(e, t, i, o) {
      Ty(e, t);
      var u = t.pendingProps, d = i, v = d._payload, g = d._init, _ = g(v);
      t.type = _;
      var w = t.tag = vL(_), R = Po(_, u), j;
      switch (w) {
        case k:
          return a0(t, _), t.type = _ = op(_), j = r0(null, t, _, R, o), j;
        case D:
          return t.type = _ = z0(_), j = uw(null, t, _, R, o), j;
        case ae:
          return t.type = _ = U0(_), j = rw(null, t, _, R, o), j;
        case Ne: {
          if (t.type !== t.elementType) {
            var U = _.propTypes;
            U && Mo(
              U,
              R,
              // Resolved for outer only
              "prop",
              It(_)
            );
          }
          return j = iw(
            null,
            t,
            _,
            Po(_.type, R),
            // The inner type can have defaults too
            o
          ), j;
        }
      }
      var G = "";
      throw _ !== null && typeof _ == "object" && _.$$typeof === et && (G = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + _ + ". " + ("Lazy element type must resolve to a class or function." + G));
    }
    function gN(e, t, i, o, u) {
      Ty(e, t), t.tag = D;
      var d;
      return bl(i) ? (d = !0, Mg(t)) : d = !1, Bd(t, u), vT(t, i, o), fS(t, i, o, u), i0(null, t, i, !0, d, u);
    }
    function yN(e, t, i, o) {
      Ty(e, t);
      var u = t.pendingProps, d;
      {
        var v = jd(t, i, !1);
        d = Id(t, v);
      }
      Bd(t, o);
      var g, _;
      Zu(t);
      {
        if (i.prototype && typeof i.prototype.render == "function") {
          var w = It(i) || "Unknown";
          ZS[w] || (E("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", w, w), ZS[w] = !0);
        }
        t.mode & zn && Uo.recordLegacyContextWarning(t, null), Cr(!0), uv.current = t, g = qd(null, t, i, u, d, o), _ = Zd(), Cr(!1);
      }
      if (eu(), t.flags |= Ra, typeof g == "object" && g !== null && typeof g.render == "function" && g.$$typeof === void 0) {
        var R = It(i) || "Unknown";
        sv[R] || (E("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", R, R, R), sv[R] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof g == "object" && g !== null && typeof g.render == "function" && g.$$typeof === void 0
      ) {
        {
          var j = It(i) || "Unknown";
          sv[j] || (E("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", j, j, j), sv[j] = !0);
        }
        t.tag = D, t.memoizedState = null, t.updateQueue = null;
        var U = !1;
        return bl(i) ? (U = !0, Mg(t)) : U = !1, t.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null, Z_(t), hT(t, g), fS(t, i, u, o), i0(null, t, i, !0, U, o);
      } else {
        if (t.tag = k, t.mode & zn) {
          hn(!0);
          try {
            g = qd(null, t, i, u, d, o), _ = Zd();
          } finally {
            hn(!1);
          }
        }
        return Kr() && _ && P_(t), Pi(null, t, g, o), a0(t, i), t.child;
      }
    }
    function a0(e, t) {
      {
        if (t && t.childContextTypes && E("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var i = "", o = Qi();
          o && (i += `

Check the render method of \`` + o + "`.");
          var u = o || "", d = e._debugSource;
          d && (u = d.fileName + ":" + d.lineNumber), t0[u] || (t0[u] = !0, E("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", i));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var v = It(t) || "Unknown";
          e0[v] || (E("%s: Function components do not support getDerivedStateFromProps.", v), e0[v] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var g = It(t) || "Unknown";
          JS[g] || (E("%s: Function components do not support contextType.", g), JS[g] = !0);
        }
      }
    }
    var o0 = {
      dehydrated: null,
      treeContext: null,
      retryLane: Yn
    };
    function l0(e) {
      return {
        baseLanes: e,
        cachePool: uN(),
        transitions: null
      };
    }
    function EN(e, t) {
      var i = null;
      return {
        baseLanes: Tt(e.baseLanes, t),
        cachePool: i,
        transitions: e.transitions
      };
    }
    function _N(e, t, i, o) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return _S(e, ev);
    }
    function SN(e, t) {
      return jc(e.childLanes, t);
    }
    function fw(e, t, i) {
      var o = t.pendingProps;
      AL(t) && (t.flags |= _t);
      var u = jo.current, d = !1, v = (t.flags & _t) !== nt;
      if (v || _N(u, e) ? (d = !0, t.flags &= ~_t) : (e === null || e.memoizedState !== null) && (u = VA(u, TT)), u = Gd(u), Ns(t, u), e === null) {
        $_(t);
        var g = t.memoizedState;
        if (g !== null) {
          var _ = g.dehydrated;
          if (_ !== null)
            return RN(t, _);
        }
        var w = o.children, R = o.fallback;
        if (d) {
          var j = CN(t, w, R, i), U = t.child;
          return U.memoizedState = l0(i), t.memoizedState = o0, j;
        } else
          return u0(t, w);
      } else {
        var G = e.memoizedState;
        if (G !== null) {
          var K = G.dehydrated;
          if (K !== null)
            return xN(e, t, v, o, K, G, i);
        }
        if (d) {
          var Z = o.fallback, Le = o.children, it = TN(e, t, Le, Z, i), Ke = t.child, Pt = e.child.memoizedState;
          return Ke.memoizedState = Pt === null ? l0(i) : EN(Pt, i), Ke.childLanes = SN(e, i), t.memoizedState = o0, it;
        } else {
          var Lt = o.children, $ = bN(e, t, Lt, i);
          return t.memoizedState = null, $;
        }
      }
    }
    function u0(e, t, i) {
      var o = e.mode, u = {
        mode: "visible",
        children: t
      }, d = s0(u, o);
      return d.return = e, e.child = d, d;
    }
    function CN(e, t, i, o) {
      var u = e.mode, d = e.child, v = {
        mode: "hidden",
        children: t
      }, g, _;
      return (u & Ge) === rt && d !== null ? (g = d, g.childLanes = te, g.pendingProps = v, e.mode & Ht && (g.actualDuration = 0, g.actualStartTime = -1, g.selfBaseDuration = 0, g.treeBaseDuration = 0), _ = Is(i, u, o, null)) : (g = s0(v, u), _ = Is(i, u, o, null)), g.return = e, _.return = e, g.sibling = _, e.child = g, _;
    }
    function s0(e, t, i) {
      return dR(e, t, te, null);
    }
    function dw(e, t) {
      return vf(e, t);
    }
    function bN(e, t, i, o) {
      var u = e.child, d = u.sibling, v = dw(u, {
        mode: "visible",
        children: i
      });
      if ((t.mode & Ge) === rt && (v.lanes = o), v.return = t, v.sibling = null, d !== null) {
        var g = t.deletions;
        g === null ? (t.deletions = [d], t.flags |= Vt) : g.push(d);
      }
      return t.child = v, v;
    }
    function TN(e, t, i, o, u) {
      var d = t.mode, v = e.child, g = v.sibling, _ = {
        mode: "hidden",
        children: i
      }, w;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (d & Ge) === rt && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== v
      ) {
        var R = t.child;
        w = R, w.childLanes = te, w.pendingProps = _, t.mode & Ht && (w.actualDuration = 0, w.actualStartTime = -1, w.selfBaseDuration = v.selfBaseDuration, w.treeBaseDuration = v.treeBaseDuration), t.deletions = null;
      } else
        w = dw(v, _), w.subtreeFlags = v.subtreeFlags & Tr;
      var j;
      return g !== null ? j = vf(g, o) : (j = Is(o, d, u, null), j.flags |= sn), j.return = t, w.return = t, w.sibling = j, t.child = w, j;
    }
    function by(e, t, i, o) {
      o !== null && V_(o), Yd(t, e.child, null, i);
      var u = t.pendingProps, d = u.children, v = u0(t, d);
      return v.flags |= sn, t.memoizedState = null, v;
    }
    function wN(e, t, i, o, u) {
      var d = t.mode, v = {
        mode: "visible",
        children: i
      }, g = s0(v, d), _ = Is(o, d, u, null);
      return _.flags |= sn, g.return = t, _.return = t, g.sibling = _, t.child = g, (t.mode & Ge) !== rt && Yd(t, e.child, null, u), _;
    }
    function RN(e, t, i) {
      return (e.mode & Ge) === rt ? (E("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = lt) : x_(t) ? e.lanes = Un : e.lanes = Ui, null;
    }
    function xN(e, t, i, o, u, d, v) {
      if (i)
        if (t.flags & Yr) {
          t.flags &= ~Yr;
          var $ = QS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return by(e, t, v, $);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= _t, null;
          var J = o.children, V = o.fallback, de = wN(e, t, J, V, v), Me = t.child;
          return Me.memoizedState = l0(v), t.memoizedState = o0, de;
        }
      else {
        if (vA(), (t.mode & Ge) === rt)
          return by(
            e,
            t,
            v,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (x_(u)) {
          var g, _, w;
          {
            var R = kO(u);
            g = R.digest, _ = R.message, w = R.stack;
          }
          var j;
          _ ? j = new Error(_) : j = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var U = QS(j, g, w);
          return by(e, t, v, U);
        }
        var G = yi(v, e.childLanes);
        if (Fo || G) {
          var K = My();
          if (K !== null) {
            var Z = Qm(K, v);
            if (Z !== Yn && Z !== d.retryLane) {
              d.retryLane = Z;
              var Le = vn;
              ca(e, Z), Lr(K, e, Z, Le);
            }
          }
          A0();
          var it = QS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return by(e, t, v, it);
        } else if (Mb(u)) {
          t.flags |= _t, t.child = e.child;
          var Ke = Zk.bind(null, e);
          return LO(u, Ke), null;
        } else {
          yA(t, u, d.treeContext);
          var Pt = o.children, Lt = u0(t, Pt);
          return Lt.flags |= Ba, Lt;
        }
      }
    }
    function pw(e, t, i) {
      e.lanes = Tt(e.lanes, t);
      var o = e.alternate;
      o !== null && (o.lanes = Tt(o.lanes, t)), K_(e.return, t, i);
    }
    function DN(e, t, i) {
      for (var o = t; o !== null; ) {
        if (o.tag === oe) {
          var u = o.memoizedState;
          u !== null && pw(o, i, e);
        } else if (o.tag === at)
          pw(o, i, e);
        else if (o.child !== null) {
          o.child.return = o, o = o.child;
          continue;
        }
        if (o === e)
          return;
        for (; o.sibling === null; ) {
          if (o.return === null || o.return === e)
            return;
          o = o.return;
        }
        o.sibling.return = o.return, o = o.sibling;
      }
    }
    function ON(e) {
      for (var t = e, i = null; t !== null; ) {
        var o = t.alternate;
        o !== null && ny(o) === null && (i = t), t = t.sibling;
      }
      return i;
    }
    function AN(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !n0[e])
        if (n0[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              E('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              E('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              E('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          E('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function NN(e, t) {
      e !== void 0 && !Cy[e] && (e !== "collapsed" && e !== "hidden" ? (Cy[e] = !0, E('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Cy[e] = !0, E('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function hw(e, t) {
      {
        var i = Ft(e), o = !i && typeof ja(e) == "function";
        if (i || o) {
          var u = i ? "array" : "iterable";
          return E("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function kN(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Ft(e)) {
          for (var i = 0; i < e.length; i++)
            if (!hw(e[i], i))
              return;
        } else {
          var o = ja(e);
          if (typeof o == "function") {
            var u = o.call(e);
            if (u)
              for (var d = u.next(), v = 0; !d.done; d = u.next()) {
                if (!hw(d.value, v))
                  return;
                v++;
              }
          } else
            E('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function c0(e, t, i, o, u) {
      var d = e.memoizedState;
      d === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: o,
        tail: i,
        tailMode: u
      } : (d.isBackwards = t, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = i, d.tailMode = u);
    }
    function vw(e, t, i) {
      var o = t.pendingProps, u = o.revealOrder, d = o.tail, v = o.children;
      AN(u), NN(d, u), kN(v, u), Pi(e, t, v, i);
      var g = jo.current, _ = _S(g, ev);
      if (_)
        g = SS(g, ev), t.flags |= _t;
      else {
        var w = e !== null && (e.flags & _t) !== nt;
        w && DN(t, t.child, i), g = Gd(g);
      }
      if (Ns(t, g), (t.mode & Ge) === rt)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var R = ON(t.child), j;
            R === null ? (j = t.child, t.child = null) : (j = R.sibling, R.sibling = null), c0(
              t,
              !1,
              // isBackwards
              j,
              R,
              d
            );
            break;
          }
          case "backwards": {
            var U = null, G = t.child;
            for (t.child = null; G !== null; ) {
              var K = G.alternate;
              if (K !== null && ny(K) === null) {
                t.child = G;
                break;
              }
              var Z = G.sibling;
              G.sibling = U, U = G, G = Z;
            }
            c0(
              t,
              !0,
              // isBackwards
              U,
              null,
              // last
              d
            );
            break;
          }
          case "together": {
            c0(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function LN(e, t, i) {
      gS(t, t.stateNode.containerInfo);
      var o = t.pendingProps;
      return e === null ? t.child = Yd(t, null, o, i) : Pi(e, t, o, i), t.child;
    }
    var mw = !1;
    function MN(e, t, i) {
      var o = t.type, u = o._context, d = t.pendingProps, v = t.memoizedProps, g = d.value;
      {
        "value" in d || mw || (mw = !0, E("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var _ = t.type.propTypes;
        _ && Mo(_, d, "prop", "Context.Provider");
      }
      if (rT(t, u, g), v !== null) {
        var w = v.value;
        if (Fe(w, g)) {
          if (v.children === d.children && !kg())
            return Cu(e, t, i);
        } else
          DA(t, u, i);
      }
      var R = d.children;
      return Pi(e, t, R, i), t.child;
    }
    var gw = !1;
    function zN(e, t, i) {
      var o = t.type;
      o._context === void 0 ? o !== o.Consumer && (gw || (gw = !0, E("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : o = o._context;
      var u = t.pendingProps, d = u.children;
      typeof d != "function" && E("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Bd(t, i);
      var v = yr(o);
      Zu(t);
      var g;
      return uv.current = t, Cr(!0), g = d(v), Cr(!1), eu(), t.flags |= Ra, Pi(e, t, g, i), t.child;
    }
    function cv() {
      Fo = !0;
    }
    function Ty(e, t) {
      (t.mode & Ge) === rt && e !== null && (e.alternate = null, t.alternate = null, t.flags |= sn);
    }
    function Cu(e, t, i) {
      return e !== null && (t.dependencies = e.dependencies), ZT(), Cv(t.lanes), yi(i, t.childLanes) ? (FA(e, t), t.child) : null;
    }
    function UN(e, t, i) {
      {
        var o = t.return;
        if (o === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, i.index = t.index, i.sibling = t.sibling, i.return = t.return, i.ref = t.ref, t === o.child)
          o.child = i;
        else {
          var u = o.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = i;
        }
        var d = o.deletions;
        return d === null ? (o.deletions = [e], o.flags |= Vt) : d.push(e), i.flags |= sn, i;
      }
    }
    function f0(e, t) {
      var i = e.lanes;
      return !!yi(i, t);
    }
    function PN(e, t, i) {
      switch (t.tag) {
        case I:
          sw(t), t.stateNode, $d();
          break;
        case B:
          CT(t);
          break;
        case D: {
          var o = t.type;
          bl(o) && Mg(t);
          break;
        }
        case H:
          gS(t, t.stateNode.containerInfo);
          break;
        case ge: {
          var u = t.memoizedProps.value, d = t.type._context;
          rT(t, d, u);
          break;
        }
        case Ce:
          {
            var v = yi(i, t.childLanes);
            v && (t.flags |= Be);
            {
              var g = t.stateNode;
              g.effectDuration = 0, g.passiveEffectDuration = 0;
            }
          }
          break;
        case oe: {
          var _ = t.memoizedState;
          if (_ !== null) {
            if (_.dehydrated !== null)
              return Ns(t, Gd(jo.current)), t.flags |= _t, null;
            var w = t.child, R = w.childLanes;
            if (yi(i, R))
              return fw(e, t, i);
            Ns(t, Gd(jo.current));
            var j = Cu(e, t, i);
            return j !== null ? j.sibling : null;
          } else
            Ns(t, Gd(jo.current));
          break;
        }
        case at: {
          var U = (e.flags & _t) !== nt, G = yi(i, t.childLanes);
          if (U) {
            if (G)
              return vw(e, t, i);
            t.flags |= _t;
          }
          var K = t.memoizedState;
          if (K !== null && (K.rendering = null, K.tail = null, K.lastEffect = null), Ns(t, jo.current), G)
            break;
          return null;
        }
        case je:
        case Ze:
          return t.lanes = te, ow(e, t, i);
      }
      return Cu(e, t, i);
    }
    function yw(e, t, i) {
      if (t._debugNeedsRemount && e !== null)
        return UN(e, t, H0(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var o = e.memoizedProps, u = t.pendingProps;
        if (o !== u || kg() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          Fo = !0;
        else {
          var d = f0(e, i);
          if (!d && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & _t) === nt)
            return Fo = !1, PN(e, t, i);
          (e.flags & If) !== nt ? Fo = !0 : Fo = !1;
        }
      } else if (Fo = !1, Kr() && sA(t)) {
        var v = t.index, g = cA();
        Yb(t, g, v);
      }
      switch (t.lanes = te, t.tag) {
        case M:
          return yN(e, t, t.type, i);
        case tt: {
          var _ = t.elementType;
          return mN(e, t, _, i);
        }
        case k: {
          var w = t.type, R = t.pendingProps, j = t.elementType === w ? R : Po(w, R);
          return r0(e, t, w, j, i);
        }
        case D: {
          var U = t.type, G = t.pendingProps, K = t.elementType === U ? G : Po(U, G);
          return uw(e, t, U, K, i);
        }
        case I:
          return pN(e, t, i);
        case B:
          return hN(e, t, i);
        case X:
          return vN(e, t);
        case oe:
          return fw(e, t, i);
        case H:
          return LN(e, t, i);
        case ae: {
          var Z = t.type, Le = t.pendingProps, it = t.elementType === Z ? Le : Po(Z, Le);
          return rw(e, t, Z, it, i);
        }
        case pe:
          return cN(e, t, i);
        case we:
          return fN(e, t, i);
        case Ce:
          return dN(e, t, i);
        case ge:
          return MN(e, t, i);
        case ze:
          return zN(e, t, i);
        case Ne: {
          var Ke = t.type, Pt = t.pendingProps, Lt = Po(Ke, Pt);
          if (t.type !== t.elementType) {
            var $ = Ke.propTypes;
            $ && Mo(
              $,
              Lt,
              // Resolved for outer only
              "prop",
              It(Ke)
            );
          }
          return Lt = Po(Ke.type, Lt), iw(e, t, Ke, Lt, i);
        }
        case De:
          return aw(e, t, t.type, t.pendingProps, i);
        case vt: {
          var J = t.type, V = t.pendingProps, de = t.elementType === J ? V : Po(J, V);
          return gN(e, t, J, de, i);
        }
        case at:
          return vw(e, t, i);
        case ct:
          break;
        case je:
          return ow(e, t, i);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Jd(e) {
      e.flags |= Be;
    }
    function Ew(e) {
      e.flags |= ki, e.flags |= Ya;
    }
    var _w, d0, Sw, Cw;
    _w = function(e, t, i, o) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === B || u.tag === X)
          oO(e, u.stateNode);
        else if (u.tag !== H) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, d0 = function(e, t) {
    }, Sw = function(e, t, i, o, u) {
      var d = e.memoizedProps;
      if (d !== o) {
        var v = t.stateNode, g = yS(), _ = uO(v, i, d, o, u, g);
        t.updateQueue = _, _ && Jd(t);
      }
    }, Cw = function(e, t, i, o) {
      i !== o && Jd(t);
    };
    function fv(e, t) {
      if (!Kr())
        switch (e.tailMode) {
          case "hidden": {
            for (var i = e.tail, o = null; i !== null; )
              i.alternate !== null && (o = i), i = i.sibling;
            o === null ? e.tail = null : o.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, d = null; u !== null; )
              u.alternate !== null && (d = u), u = u.sibling;
            d === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : d.sibling = null;
            break;
          }
        }
    }
    function Xr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, i = te, o = nt;
      if (t) {
        if ((e.mode & Ht) !== rt) {
          for (var _ = e.selfBaseDuration, w = e.child; w !== null; )
            i = Tt(i, Tt(w.lanes, w.childLanes)), o |= w.subtreeFlags & Tr, o |= w.flags & Tr, _ += w.treeBaseDuration, w = w.sibling;
          e.treeBaseDuration = _;
        } else
          for (var R = e.child; R !== null; )
            i = Tt(i, Tt(R.lanes, R.childLanes)), o |= R.subtreeFlags & Tr, o |= R.flags & Tr, R.return = e, R = R.sibling;
        e.subtreeFlags |= o;
      } else {
        if ((e.mode & Ht) !== rt) {
          for (var u = e.actualDuration, d = e.selfBaseDuration, v = e.child; v !== null; )
            i = Tt(i, Tt(v.lanes, v.childLanes)), o |= v.subtreeFlags, o |= v.flags, u += v.actualDuration, d += v.treeBaseDuration, v = v.sibling;
          e.actualDuration = u, e.treeBaseDuration = d;
        } else
          for (var g = e.child; g !== null; )
            i = Tt(i, Tt(g.lanes, g.childLanes)), o |= g.subtreeFlags, o |= g.flags, g.return = e, g = g.sibling;
        e.subtreeFlags |= o;
      }
      return e.childLanes = i, t;
    }
    function jN(e, t, i) {
      if (bA() && (t.mode & Ge) !== rt && (t.flags & _t) === nt)
        return Zb(t), $d(), t.flags |= Yr | ll | br, !1;
      var o = Ig(t);
      if (i !== null && i.dehydrated !== null)
        if (e === null) {
          if (!o)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (SA(t), Xr(t), (t.mode & Ht) !== rt) {
            var u = i !== null;
            if (u) {
              var d = t.child;
              d !== null && (t.treeBaseDuration -= d.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if ($d(), (t.flags & _t) === nt && (t.memoizedState = null), t.flags |= Be, Xr(t), (t.mode & Ht) !== rt) {
            var v = i !== null;
            if (v) {
              var g = t.child;
              g !== null && (t.treeBaseDuration -= g.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return Jb(), !0;
    }
    function bw(e, t, i) {
      var o = t.pendingProps;
      switch (j_(t), t.tag) {
        case M:
        case tt:
        case De:
        case k:
        case ae:
        case pe:
        case we:
        case Ce:
        case ze:
        case Ne:
          return Xr(t), null;
        case D: {
          var u = t.type;
          return bl(u) && Lg(t), Xr(t), null;
        }
        case I: {
          var d = t.stateNode;
          if (Wd(t), M_(t), bS(), d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null), e === null || e.child === null) {
            var v = Ig(t);
            if (v)
              Jd(t);
            else if (e !== null) {
              var g = e.memoizedState;
              // Check if this is a client root
              (!g.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Yr) !== nt) && (t.flags |= er, Jb());
            }
          }
          return d0(e, t), Xr(t), null;
        }
        case B: {
          ES(t);
          var _ = ST(), w = t.type;
          if (e !== null && t.stateNode != null)
            Sw(e, t, w, o, _), e.ref !== t.ref && Ew(t);
          else {
            if (!o) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Xr(t), null;
            }
            var R = yS(), j = Ig(t);
            if (j)
              EA(t, _, R) && Jd(t);
            else {
              var U = aO(w, o, _, R, t);
              _w(U, t, !1, !1), t.stateNode = U, lO(U, w, o, _) && Jd(t);
            }
            t.ref !== null && Ew(t);
          }
          return Xr(t), null;
        }
        case X: {
          var G = o;
          if (e && t.stateNode != null) {
            var K = e.memoizedProps;
            Cw(e, t, K, G);
          } else {
            if (typeof G != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var Z = ST(), Le = yS(), it = Ig(t);
            it ? _A(t) && Jd(t) : t.stateNode = sO(G, Z, Le, t);
          }
          return Xr(t), null;
        }
        case oe: {
          Kd(t);
          var Ke = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Pt = jN(e, t, Ke);
            if (!Pt)
              return t.flags & br ? t : null;
          }
          if ((t.flags & _t) !== nt)
            return t.lanes = i, (t.mode & Ht) !== rt && KS(t), t;
          var Lt = Ke !== null, $ = e !== null && e.memoizedState !== null;
          if (Lt !== $ && Lt) {
            var J = t.child;
            if (J.flags |= ol, (t.mode & Ge) !== rt) {
              var V = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !Re);
              V || _S(jo.current, TT) ? Ik() : A0();
            }
          }
          var de = t.updateQueue;
          if (de !== null && (t.flags |= Be), Xr(t), (t.mode & Ht) !== rt && Lt) {
            var Me = t.child;
            Me !== null && (t.treeBaseDuration -= Me.treeBaseDuration);
          }
          return null;
        }
        case H:
          return Wd(t), d0(e, t), e === null && nA(t.stateNode.containerInfo), Xr(t), null;
        case ge:
          var xe = t.type._context;
          return G_(xe, t), Xr(t), null;
        case vt: {
          var ht = t.type;
          return bl(ht) && Lg(t), Xr(t), null;
        }
        case at: {
          Kd(t);
          var bt = t.memoizedState;
          if (bt === null)
            return Xr(t), null;
          var on = (t.flags & _t) !== nt, Yt = bt.rendering;
          if (Yt === null)
            if (on)
              fv(bt, !1);
            else {
              var fr = Hk() && (e === null || (e.flags & _t) === nt);
              if (!fr)
                for (var Wt = t.child; Wt !== null; ) {
                  var nr = ny(Wt);
                  if (nr !== null) {
                    on = !0, t.flags |= _t, fv(bt, !1);
                    var bi = nr.updateQueue;
                    return bi !== null && (t.updateQueue = bi, t.flags |= Be), t.subtreeFlags = nt, HA(t, i), Ns(t, SS(jo.current, ev)), t.child;
                  }
                  Wt = Wt.sibling;
                }
              bt.tail !== null && tr() > Bw() && (t.flags |= _t, on = !0, fv(bt, !1), t.lanes = sh);
            }
          else {
            if (!on) {
              var ti = ny(Yt);
              if (ti !== null) {
                t.flags |= _t, on = !0;
                var Aa = ti.updateQueue;
                if (Aa !== null && (t.updateQueue = Aa, t.flags |= Be), fv(bt, !0), bt.tail === null && bt.tailMode === "hidden" && !Yt.alternate && !Kr())
                  return Xr(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                tr() * 2 - bt.renderingStartTime > Bw() && i !== Ui && (t.flags |= _t, on = !0, fv(bt, !1), t.lanes = sh);
            }
            if (bt.isBackwards)
              Yt.sibling = t.child, t.child = Yt;
            else {
              var Fi = bt.last;
              Fi !== null ? Fi.sibling = Yt : t.child = Yt, bt.last = Yt;
            }
          }
          if (bt.tail !== null) {
            var Hi = bt.tail;
            bt.rendering = Hi, bt.tail = Hi.sibling, bt.renderingStartTime = tr(), Hi.sibling = null;
            var Ti = jo.current;
            return on ? Ti = SS(Ti, ev) : Ti = Gd(Ti), Ns(t, Ti), Hi;
          }
          return Xr(t), null;
        }
        case ct:
          break;
        case je:
        case Ze: {
          O0(t);
          var xu = t.memoizedState, lp = xu !== null;
          if (e !== null) {
            var xv = e.memoizedState, Nl = xv !== null;
            Nl !== lp && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !ne && (t.flags |= ol);
          }
          return !lp || (t.mode & Ge) === rt ? Xr(t) : yi(Al, Ui) && (Xr(t), t.subtreeFlags & (sn | Be) && (t.flags |= ol)), null;
        }
        case qe:
          return null;
        case We:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function IN(e, t, i) {
      switch (j_(t), t.tag) {
        case D: {
          var o = t.type;
          bl(o) && Lg(t);
          var u = t.flags;
          return u & br ? (t.flags = u & ~br | _t, (t.mode & Ht) !== rt && KS(t), t) : null;
        }
        case I: {
          t.stateNode, Wd(t), M_(t), bS();
          var d = t.flags;
          return (d & br) !== nt && (d & _t) === nt ? (t.flags = d & ~br | _t, t) : null;
        }
        case B:
          return ES(t), null;
        case oe: {
          Kd(t);
          var v = t.memoizedState;
          if (v !== null && v.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            $d();
          }
          var g = t.flags;
          return g & br ? (t.flags = g & ~br | _t, (t.mode & Ht) !== rt && KS(t), t) : null;
        }
        case at:
          return Kd(t), null;
        case H:
          return Wd(t), null;
        case ge:
          var _ = t.type._context;
          return G_(_, t), null;
        case je:
        case Ze:
          return O0(t), null;
        case qe:
          return null;
        default:
          return null;
      }
    }
    function Tw(e, t, i) {
      switch (j_(t), t.tag) {
        case D: {
          var o = t.type.childContextTypes;
          o != null && Lg(t);
          break;
        }
        case I: {
          t.stateNode, Wd(t), M_(t), bS();
          break;
        }
        case B: {
          ES(t);
          break;
        }
        case H:
          Wd(t);
          break;
        case oe:
          Kd(t);
          break;
        case at:
          Kd(t);
          break;
        case ge:
          var u = t.type._context;
          G_(u, t);
          break;
        case je:
        case Ze:
          O0(t);
          break;
      }
    }
    var ww = null;
    ww = /* @__PURE__ */ new Set();
    var wy = !1, qr = !1, FN = typeof WeakSet == "function" ? WeakSet : Set, He = null, ep = null, tp = null;
    function HN(e) {
      wa(null, function() {
        throw e;
      }), Ro();
    }
    var $N = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Ht)
        try {
          Dl(), t.componentWillUnmount();
        } finally {
          xl(e);
        }
      else
        t.componentWillUnmount();
    };
    function Rw(e, t) {
      try {
        Ms(xr, e);
      } catch (i) {
        _n(e, t, i);
      }
    }
    function p0(e, t, i) {
      try {
        $N(e, i);
      } catch (o) {
        _n(e, t, o);
      }
    }
    function VN(e, t, i) {
      try {
        i.componentDidMount();
      } catch (o) {
        _n(e, t, o);
      }
    }
    function xw(e, t) {
      try {
        Ow(e);
      } catch (i) {
        _n(e, t, i);
      }
    }
    function np(e, t) {
      var i = e.ref;
      if (i !== null)
        if (typeof i == "function") {
          var o;
          try {
            if (wt && mt && e.mode & Ht)
              try {
                Dl(), o = i(null);
              } finally {
                xl(e);
              }
            else
              o = i(null);
          } catch (u) {
            _n(e, t, u);
          }
          typeof o == "function" && E("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", yt(e));
        } else
          i.current = null;
    }
    function Ry(e, t, i) {
      try {
        i();
      } catch (o) {
        _n(e, t, o);
      }
    }
    var Dw = !1;
    function BN(e, t) {
      rO(e.containerInfo), He = t, YN();
      var i = Dw;
      return Dw = !1, i;
    }
    function YN() {
      for (; He !== null; ) {
        var e = He, t = e.child;
        (e.subtreeFlags & fi) !== nt && t !== null ? (t.return = e, He = t) : WN();
      }
    }
    function WN() {
      for (; He !== null; ) {
        var e = He;
        Dn(e);
        try {
          GN(e);
        } catch (i) {
          _n(e, e.return, i);
        }
        mn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, He = t;
          return;
        }
        He = e.return;
      }
    }
    function GN(e) {
      var t = e.alternate, i = e.flags;
      if ((i & er) !== nt) {
        switch (Dn(e), e.tag) {
          case k:
          case ae:
          case De:
            break;
          case D: {
            if (t !== null) {
              var o = t.memoizedProps, u = t.memoizedState, d = e.stateNode;
              e.type === e.elementType && !cf && (d.props !== e.memoizedProps && E("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", yt(e) || "instance"), d.state !== e.memoizedState && E("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", yt(e) || "instance"));
              var v = d.getSnapshotBeforeUpdate(e.elementType === e.type ? o : Po(e.type, o), u);
              {
                var g = ww;
                v === void 0 && !g.has(e.type) && (g.add(e.type), E("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", yt(e)));
              }
              d.__reactInternalSnapshotBeforeUpdate = v;
            }
            break;
          }
          case I: {
            {
              var _ = e.stateNode;
              DO(_.containerInfo);
            }
            break;
          }
          case B:
          case X:
          case H:
          case vt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        mn();
      }
    }
    function Ho(e, t, i) {
      var o = t.updateQueue, u = o !== null ? o.lastEffect : null;
      if (u !== null) {
        var d = u.next, v = d;
        do {
          if ((v.tag & e) === e) {
            var g = v.destroy;
            v.destroy = void 0, g !== void 0 && ((e & Qr) !== fa ? zm(t) : (e & xr) !== fa && Ju(t), (e & Tl) !== fa && Tv(!0), Ry(t, i, g), (e & Tl) !== fa && Tv(!1), (e & Qr) !== fa ? Um() : (e & xr) !== fa && xc());
          }
          v = v.next;
        } while (v !== d);
      }
    }
    function Ms(e, t) {
      var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
      if (o !== null) {
        var u = o.next, d = u;
        do {
          if ((d.tag & e) === e) {
            (e & Qr) !== fa ? ah(t) : (e & xr) !== fa && Pm(t);
            var v = d.create;
            (e & Tl) !== fa && Tv(!0), d.destroy = v(), (e & Tl) !== fa && Tv(!1), (e & Qr) !== fa ? Yf() : (e & xr) !== fa && oh();
            {
              var g = d.destroy;
              if (g !== void 0 && typeof g != "function") {
                var _ = void 0;
                (d.tag & xr) !== nt ? _ = "useLayoutEffect" : (d.tag & Tl) !== nt ? _ = "useInsertionEffect" : _ = "useEffect";
                var w = void 0;
                g === null ? w = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof g.then == "function" ? w = `

It looks like you wrote ` + _ + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + _ + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : w = " You returned: " + g, E("%s must not return anything besides a function, which is used for clean-up.%s", _, w);
              }
            }
          }
          d = d.next;
        } while (d !== u);
      }
    }
    function KN(e, t) {
      if ((t.flags & Be) !== nt)
        switch (t.tag) {
          case Ce: {
            var i = t.stateNode.passiveEffectDuration, o = t.memoizedProps, u = o.id, d = o.onPostCommit, v = XT(), g = t.alternate === null ? "mount" : "update";
            QT() && (g = "nested-update"), typeof d == "function" && d(u, g, i, v);
            var _ = t.return;
            e:
              for (; _ !== null; ) {
                switch (_.tag) {
                  case I:
                    var w = _.stateNode;
                    w.passiveEffectDuration += i;
                    break e;
                  case Ce:
                    var R = _.stateNode;
                    R.passiveEffectDuration += i;
                    break e;
                }
                _ = _.return;
              }
            break;
          }
        }
    }
    function QN(e, t, i, o) {
      if ((i.flags & xa) !== nt)
        switch (i.tag) {
          case k:
          case ae:
          case De: {
            if (!qr)
              if (i.mode & Ht)
                try {
                  Dl(), Ms(xr | Rr, i);
                } finally {
                  xl(i);
                }
              else
                Ms(xr | Rr, i);
            break;
          }
          case D: {
            var u = i.stateNode;
            if (i.flags & Be && !qr)
              if (t === null)
                if (i.type === i.elementType && !cf && (u.props !== i.memoizedProps && E("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", yt(i) || "instance"), u.state !== i.memoizedState && E("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", yt(i) || "instance")), i.mode & Ht)
                  try {
                    Dl(), u.componentDidMount();
                  } finally {
                    xl(i);
                  }
                else
                  u.componentDidMount();
              else {
                var d = i.elementType === i.type ? t.memoizedProps : Po(i.type, t.memoizedProps), v = t.memoizedState;
                if (i.type === i.elementType && !cf && (u.props !== i.memoizedProps && E("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", yt(i) || "instance"), u.state !== i.memoizedState && E("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", yt(i) || "instance")), i.mode & Ht)
                  try {
                    Dl(), u.componentDidUpdate(d, v, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    xl(i);
                  }
                else
                  u.componentDidUpdate(d, v, u.__reactInternalSnapshotBeforeUpdate);
              }
            var g = i.updateQueue;
            g !== null && (i.type === i.elementType && !cf && (u.props !== i.memoizedProps && E("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", yt(i) || "instance"), u.state !== i.memoizedState && E("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", yt(i) || "instance")), sT(i, g, u));
            break;
          }
          case I: {
            var _ = i.updateQueue;
            if (_ !== null) {
              var w = null;
              if (i.child !== null)
                switch (i.child.tag) {
                  case B:
                    w = i.child.stateNode;
                    break;
                  case D:
                    w = i.child.stateNode;
                    break;
                }
              sT(i, _, w);
            }
            break;
          }
          case B: {
            var R = i.stateNode;
            if (t === null && i.flags & Be) {
              var j = i.type, U = i.memoizedProps;
              hO(R, j, U);
            }
            break;
          }
          case X:
            break;
          case H:
            break;
          case Ce: {
            {
              var G = i.memoizedProps, K = G.onCommit, Z = G.onRender, Le = i.stateNode.effectDuration, it = XT(), Ke = t === null ? "mount" : "update";
              QT() && (Ke = "nested-update"), typeof Z == "function" && Z(i.memoizedProps.id, Ke, i.actualDuration, i.treeBaseDuration, i.actualStartTime, it);
              {
                typeof K == "function" && K(i.memoizedProps.id, Ke, Le, it), Wk(i);
                var Pt = i.return;
                e:
                  for (; Pt !== null; ) {
                    switch (Pt.tag) {
                      case I:
                        var Lt = Pt.stateNode;
                        Lt.effectDuration += Le;
                        break e;
                      case Ce:
                        var $ = Pt.stateNode;
                        $.effectDuration += Le;
                        break e;
                    }
                    Pt = Pt.return;
                  }
              }
            }
            break;
          }
          case oe: {
            rk(e, i);
            break;
          }
          case at:
          case vt:
          case ct:
          case je:
          case Ze:
          case We:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      qr || i.flags & ki && Ow(i);
    }
    function XN(e) {
      switch (e.tag) {
        case k:
        case ae:
        case De: {
          if (e.mode & Ht)
            try {
              Dl(), Rw(e, e.return);
            } finally {
              xl(e);
            }
          else
            Rw(e, e.return);
          break;
        }
        case D: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && VN(e, e.return, t), xw(e, e.return);
          break;
        }
        case B: {
          xw(e, e.return);
          break;
        }
      }
    }
    function qN(e, t) {
      for (var i = null, o = e; ; ) {
        if (o.tag === B) {
          if (i === null) {
            i = o;
            try {
              var u = o.stateNode;
              t ? TO(u) : RO(o.stateNode, o.memoizedProps);
            } catch (v) {
              _n(e, e.return, v);
            }
          }
        } else if (o.tag === X) {
          if (i === null)
            try {
              var d = o.stateNode;
              t ? wO(d) : xO(d, o.memoizedProps);
            } catch (v) {
              _n(e, e.return, v);
            }
        } else if (!((o.tag === je || o.tag === Ze) && o.memoizedState !== null && o !== e)) {
          if (o.child !== null) {
            o.child.return = o, o = o.child;
            continue;
          }
        }
        if (o === e)
          return;
        for (; o.sibling === null; ) {
          if (o.return === null || o.return === e)
            return;
          i === o && (i = null), o = o.return;
        }
        i === o && (i = null), o.sibling.return = o.return, o = o.sibling;
      }
    }
    function Ow(e) {
      var t = e.ref;
      if (t !== null) {
        var i = e.stateNode, o;
        switch (e.tag) {
          case B:
            o = i;
            break;
          default:
            o = i;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & Ht)
            try {
              Dl(), u = t(o);
            } finally {
              xl(e);
            }
          else
            u = t(o);
          typeof u == "function" && E("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", yt(e));
        } else
          t.hasOwnProperty("current") || E("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", yt(e)), t.current = o;
      }
    }
    function ZN(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function Aw(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, Aw(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === B) {
          var i = e.stateNode;
          i !== null && aA(i);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function JN(e) {
      for (var t = e.return; t !== null; ) {
        if (Nw(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Nw(e) {
      return e.tag === B || e.tag === I || e.tag === H;
    }
    function kw(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || Nw(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== B && t.tag !== X && t.tag !== ot; ) {
            if (t.flags & sn || t.child === null || t.tag === H)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & sn))
            return t.stateNode;
        }
    }
    function ek(e) {
      var t = JN(e);
      switch (t.tag) {
        case B: {
          var i = t.stateNode;
          t.flags & Zi && (Lb(i), t.flags &= ~Zi);
          var o = kw(e);
          v0(e, o, i);
          break;
        }
        case I:
        case H: {
          var u = t.stateNode.containerInfo, d = kw(e);
          h0(e, d, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function h0(e, t, i) {
      var o = e.tag, u = o === B || o === X;
      if (u) {
        var d = e.stateNode;
        t ? _O(i, d, t) : yO(i, d);
      } else if (o !== H) {
        var v = e.child;
        if (v !== null) {
          h0(v, t, i);
          for (var g = v.sibling; g !== null; )
            h0(g, t, i), g = g.sibling;
        }
      }
    }
    function v0(e, t, i) {
      var o = e.tag, u = o === B || o === X;
      if (u) {
        var d = e.stateNode;
        t ? EO(i, d, t) : gO(i, d);
      } else if (o !== H) {
        var v = e.child;
        if (v !== null) {
          v0(v, t, i);
          for (var g = v.sibling; g !== null; )
            v0(g, t, i), g = g.sibling;
        }
      }
    }
    var Zr = null, $o = !1;
    function tk(e, t, i) {
      {
        var o = t;
        e:
          for (; o !== null; ) {
            switch (o.tag) {
              case B: {
                Zr = o.stateNode, $o = !1;
                break e;
              }
              case I: {
                Zr = o.stateNode.containerInfo, $o = !0;
                break e;
              }
              case H: {
                Zr = o.stateNode.containerInfo, $o = !0;
                break e;
              }
            }
            o = o.return;
          }
        if (Zr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        Lw(e, t, i), Zr = null, $o = !1;
      }
      ZN(i);
    }
    function zs(e, t, i) {
      for (var o = i.child; o !== null; )
        Lw(e, t, o), o = o.sibling;
    }
    function Lw(e, t, i) {
      switch (Lm(i), i.tag) {
        case B:
          qr || np(i, t);
        case X: {
          {
            var o = Zr, u = $o;
            Zr = null, zs(e, t, i), Zr = o, $o = u, Zr !== null && ($o ? CO(Zr, i.stateNode) : SO(Zr, i.stateNode));
          }
          return;
        }
        case ot: {
          Zr !== null && ($o ? bO(Zr, i.stateNode) : R_(Zr, i.stateNode));
          return;
        }
        case H: {
          {
            var d = Zr, v = $o;
            Zr = i.stateNode.containerInfo, $o = !0, zs(e, t, i), Zr = d, $o = v;
          }
          return;
        }
        case k:
        case ae:
        case Ne:
        case De: {
          if (!qr) {
            var g = i.updateQueue;
            if (g !== null) {
              var _ = g.lastEffect;
              if (_ !== null) {
                var w = _.next, R = w;
                do {
                  var j = R, U = j.destroy, G = j.tag;
                  U !== void 0 && ((G & Tl) !== fa ? Ry(i, t, U) : (G & xr) !== fa && (Ju(i), i.mode & Ht ? (Dl(), Ry(i, t, U), xl(i)) : Ry(i, t, U), xc())), R = R.next;
                } while (R !== w);
              }
            }
          }
          zs(e, t, i);
          return;
        }
        case D: {
          if (!qr) {
            np(i, t);
            var K = i.stateNode;
            typeof K.componentWillUnmount == "function" && p0(i, t, K);
          }
          zs(e, t, i);
          return;
        }
        case ct: {
          zs(e, t, i);
          return;
        }
        case je: {
          if (
            // TODO: Remove this dead flag
            i.mode & Ge
          ) {
            var Z = qr;
            qr = Z || i.memoizedState !== null, zs(e, t, i), qr = Z;
          } else
            zs(e, t, i);
          break;
        }
        default: {
          zs(e, t, i);
          return;
        }
      }
    }
    function nk(e) {
      e.memoizedState;
    }
    function rk(e, t) {
      var i = t.memoizedState;
      if (i === null) {
        var o = t.alternate;
        if (o !== null) {
          var u = o.memoizedState;
          if (u !== null) {
            var d = u.dehydrated;
            d !== null && $O(d);
          }
        }
      }
    }
    function Mw(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var i = e.stateNode;
        i === null && (i = e.stateNode = new FN()), t.forEach(function(o) {
          var u = Jk.bind(null, e, o);
          if (!i.has(o)) {
            if (i.add(o), zi)
              if (ep !== null && tp !== null)
                bv(tp, ep);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            o.then(u, u);
          }
        });
      }
    }
    function ik(e, t, i) {
      ep = i, tp = e, Dn(t), zw(t, e), Dn(t), ep = null, tp = null;
    }
    function Vo(e, t, i) {
      var o = t.deletions;
      if (o !== null)
        for (var u = 0; u < o.length; u++) {
          var d = o[u];
          try {
            tk(e, t, d);
          } catch (_) {
            _n(d, t, _);
          }
        }
      var v = ac();
      if (t.subtreeFlags & di)
        for (var g = t.child; g !== null; )
          Dn(g), zw(g, e), g = g.sibling;
      Dn(v);
    }
    function zw(e, t, i) {
      var o = e.alternate, u = e.flags;
      switch (e.tag) {
        case k:
        case ae:
        case Ne:
        case De: {
          if (Vo(t, e), Ol(e), u & Be) {
            try {
              Ho(Tl | Rr, e, e.return), Ms(Tl | Rr, e);
            } catch (ht) {
              _n(e, e.return, ht);
            }
            if (e.mode & Ht) {
              try {
                Dl(), Ho(xr | Rr, e, e.return);
              } catch (ht) {
                _n(e, e.return, ht);
              }
              xl(e);
            } else
              try {
                Ho(xr | Rr, e, e.return);
              } catch (ht) {
                _n(e, e.return, ht);
              }
          }
          return;
        }
        case D: {
          Vo(t, e), Ol(e), u & ki && o !== null && np(o, o.return);
          return;
        }
        case B: {
          Vo(t, e), Ol(e), u & ki && o !== null && np(o, o.return);
          {
            if (e.flags & Zi) {
              var d = e.stateNode;
              try {
                Lb(d);
              } catch (ht) {
                _n(e, e.return, ht);
              }
            }
            if (u & Be) {
              var v = e.stateNode;
              if (v != null) {
                var g = e.memoizedProps, _ = o !== null ? o.memoizedProps : g, w = e.type, R = e.updateQueue;
                if (e.updateQueue = null, R !== null)
                  try {
                    vO(v, R, w, _, g, e);
                  } catch (ht) {
                    _n(e, e.return, ht);
                  }
              }
            }
          }
          return;
        }
        case X: {
          if (Vo(t, e), Ol(e), u & Be) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var j = e.stateNode, U = e.memoizedProps, G = o !== null ? o.memoizedProps : U;
            try {
              mO(j, G, U);
            } catch (ht) {
              _n(e, e.return, ht);
            }
          }
          return;
        }
        case I: {
          if (Vo(t, e), Ol(e), u & Be && o !== null) {
            var K = o.memoizedState;
            if (K.isDehydrated)
              try {
                HO(t.containerInfo);
              } catch (ht) {
                _n(e, e.return, ht);
              }
          }
          return;
        }
        case H: {
          Vo(t, e), Ol(e);
          return;
        }
        case oe: {
          Vo(t, e), Ol(e);
          var Z = e.child;
          if (Z.flags & ol) {
            var Le = Z.stateNode, it = Z.memoizedState, Ke = it !== null;
            if (Le.isHidden = Ke, Ke) {
              var Pt = Z.alternate !== null && Z.alternate.memoizedState !== null;
              Pt || jk();
            }
          }
          if (u & Be) {
            try {
              nk(e);
            } catch (ht) {
              _n(e, e.return, ht);
            }
            Mw(e);
          }
          return;
        }
        case je: {
          var Lt = o !== null && o.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Ge
          ) {
            var $ = qr;
            qr = $ || Lt, Vo(t, e), qr = $;
          } else
            Vo(t, e);
          if (Ol(e), u & ol) {
            var J = e.stateNode, V = e.memoizedState, de = V !== null, Me = e;
            if (J.isHidden = de, de && !Lt && (Me.mode & Ge) !== rt) {
              He = Me;
              for (var xe = Me.child; xe !== null; )
                He = xe, ok(xe), xe = xe.sibling;
            }
            qN(Me, de);
          }
          return;
        }
        case at: {
          Vo(t, e), Ol(e), u & Be && Mw(e);
          return;
        }
        case ct:
          return;
        default: {
          Vo(t, e), Ol(e);
          return;
        }
      }
    }
    function Ol(e) {
      var t = e.flags;
      if (t & sn) {
        try {
          ek(e);
        } catch (i) {
          _n(e, e.return, i);
        }
        e.flags &= ~sn;
      }
      t & Ba && (e.flags &= ~Ba);
    }
    function ak(e, t, i) {
      ep = i, tp = t, He = e, Uw(e, t, i), ep = null, tp = null;
    }
    function Uw(e, t, i) {
      for (var o = (e.mode & Ge) !== rt; He !== null; ) {
        var u = He, d = u.child;
        if (u.tag === je && o) {
          var v = u.memoizedState !== null, g = v || wy;
          if (g) {
            m0(e, t, i);
            continue;
          } else {
            var _ = u.alternate, w = _ !== null && _.memoizedState !== null, R = w || qr, j = wy, U = qr;
            wy = g, qr = R, qr && !U && (He = u, lk(u));
            for (var G = d; G !== null; )
              He = G, Uw(
                G,
                // New root; bubble back up to here and stop.
                t,
                i
              ), G = G.sibling;
            He = u, wy = j, qr = U, m0(e, t, i);
            continue;
          }
        }
        (u.subtreeFlags & xa) !== nt && d !== null ? (d.return = u, He = d) : m0(e, t, i);
      }
    }
    function m0(e, t, i) {
      for (; He !== null; ) {
        var o = He;
        if ((o.flags & xa) !== nt) {
          var u = o.alternate;
          Dn(o);
          try {
            QN(t, u, o, i);
          } catch (v) {
            _n(o, o.return, v);
          }
          mn();
        }
        if (o === e) {
          He = null;
          return;
        }
        var d = o.sibling;
        if (d !== null) {
          d.return = o.return, He = d;
          return;
        }
        He = o.return;
      }
    }
    function ok(e) {
      for (; He !== null; ) {
        var t = He, i = t.child;
        switch (t.tag) {
          case k:
          case ae:
          case Ne:
          case De: {
            if (t.mode & Ht)
              try {
                Dl(), Ho(xr, t, t.return);
              } finally {
                xl(t);
              }
            else
              Ho(xr, t, t.return);
            break;
          }
          case D: {
            np(t, t.return);
            var o = t.stateNode;
            typeof o.componentWillUnmount == "function" && p0(t, t.return, o);
            break;
          }
          case B: {
            np(t, t.return);
            break;
          }
          case je: {
            var u = t.memoizedState !== null;
            if (u) {
              Pw(e);
              continue;
            }
            break;
          }
        }
        i !== null ? (i.return = t, He = i) : Pw(e);
      }
    }
    function Pw(e) {
      for (; He !== null; ) {
        var t = He;
        if (t === e) {
          He = null;
          return;
        }
        var i = t.sibling;
        if (i !== null) {
          i.return = t.return, He = i;
          return;
        }
        He = t.return;
      }
    }
    function lk(e) {
      for (; He !== null; ) {
        var t = He, i = t.child;
        if (t.tag === je) {
          var o = t.memoizedState !== null;
          if (o) {
            jw(e);
            continue;
          }
        }
        i !== null ? (i.return = t, He = i) : jw(e);
      }
    }
    function jw(e) {
      for (; He !== null; ) {
        var t = He;
        Dn(t);
        try {
          XN(t);
        } catch (o) {
          _n(t, t.return, o);
        }
        if (mn(), t === e) {
          He = null;
          return;
        }
        var i = t.sibling;
        if (i !== null) {
          i.return = t.return, He = i;
          return;
        }
        He = t.return;
      }
    }
    function uk(e, t, i, o) {
      He = t, sk(t, e, i, o);
    }
    function sk(e, t, i, o) {
      for (; He !== null; ) {
        var u = He, d = u.child;
        (u.subtreeFlags & pi) !== nt && d !== null ? (d.return = u, He = d) : ck(e, t, i, o);
      }
    }
    function ck(e, t, i, o) {
      for (; He !== null; ) {
        var u = He;
        if ((u.flags & ci) !== nt) {
          Dn(u);
          try {
            fk(t, u, i, o);
          } catch (v) {
            _n(u, u.return, v);
          }
          mn();
        }
        if (u === e) {
          He = null;
          return;
        }
        var d = u.sibling;
        if (d !== null) {
          d.return = u.return, He = d;
          return;
        }
        He = u.return;
      }
    }
    function fk(e, t, i, o) {
      switch (t.tag) {
        case k:
        case ae:
        case De: {
          if (t.mode & Ht) {
            GS();
            try {
              Ms(Qr | Rr, t);
            } finally {
              WS(t);
            }
          } else
            Ms(Qr | Rr, t);
          break;
        }
      }
    }
    function dk(e) {
      He = e, pk();
    }
    function pk() {
      for (; He !== null; ) {
        var e = He, t = e.child;
        if ((He.flags & Vt) !== nt) {
          var i = e.deletions;
          if (i !== null) {
            for (var o = 0; o < i.length; o++) {
              var u = i[o];
              He = u, mk(u, e);
            }
            {
              var d = e.alternate;
              if (d !== null) {
                var v = d.child;
                if (v !== null) {
                  d.child = null;
                  do {
                    var g = v.sibling;
                    v.sibling = null, v = g;
                  } while (v !== null);
                }
              }
            }
            He = e;
          }
        }
        (e.subtreeFlags & pi) !== nt && t !== null ? (t.return = e, He = t) : hk();
      }
    }
    function hk() {
      for (; He !== null; ) {
        var e = He;
        (e.flags & ci) !== nt && (Dn(e), vk(e), mn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, He = t;
          return;
        }
        He = e.return;
      }
    }
    function vk(e) {
      switch (e.tag) {
        case k:
        case ae:
        case De: {
          e.mode & Ht ? (GS(), Ho(Qr | Rr, e, e.return), WS(e)) : Ho(Qr | Rr, e, e.return);
          break;
        }
      }
    }
    function mk(e, t) {
      for (; He !== null; ) {
        var i = He;
        Dn(i), yk(i, t), mn();
        var o = i.child;
        o !== null ? (o.return = i, He = o) : gk(e);
      }
    }
    function gk(e) {
      for (; He !== null; ) {
        var t = He, i = t.sibling, o = t.return;
        if (Aw(t), t === e) {
          He = null;
          return;
        }
        if (i !== null) {
          i.return = o, He = i;
          return;
        }
        He = o;
      }
    }
    function yk(e, t) {
      switch (e.tag) {
        case k:
        case ae:
        case De: {
          e.mode & Ht ? (GS(), Ho(Qr, e, t), WS(e)) : Ho(Qr, e, t);
          break;
        }
      }
    }
    function Ek(e) {
      switch (e.tag) {
        case k:
        case ae:
        case De: {
          try {
            Ms(xr | Rr, e);
          } catch (i) {
            _n(e, e.return, i);
          }
          break;
        }
        case D: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (i) {
            _n(e, e.return, i);
          }
          break;
        }
      }
    }
    function _k(e) {
      switch (e.tag) {
        case k:
        case ae:
        case De: {
          try {
            Ms(Qr | Rr, e);
          } catch (t) {
            _n(e, e.return, t);
          }
          break;
        }
      }
    }
    function Sk(e) {
      switch (e.tag) {
        case k:
        case ae:
        case De: {
          try {
            Ho(xr | Rr, e, e.return);
          } catch (i) {
            _n(e, e.return, i);
          }
          break;
        }
        case D: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && p0(e, e.return, t);
          break;
        }
      }
    }
    function Ck(e) {
      switch (e.tag) {
        case k:
        case ae:
        case De:
          try {
            Ho(Qr | Rr, e, e.return);
          } catch (t) {
            _n(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var dv = Symbol.for;
      dv("selector.component"), dv("selector.has_pseudo_class"), dv("selector.role"), dv("selector.test_id"), dv("selector.text");
    }
    var bk = [];
    function Tk() {
      bk.forEach(function(e) {
        return e();
      });
    }
    var wk = p.ReactCurrentActQueue;
    function Rk(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), i = typeof jest < "u";
        return i && t !== !1;
      }
    }
    function Iw() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && wk.current !== null && E("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var xk = Math.ceil, g0 = p.ReactCurrentDispatcher, y0 = p.ReactCurrentOwner, Jr = p.ReactCurrentBatchConfig, Bo = p.ReactCurrentActQueue, Ar = (
      /*             */
      0
    ), Fw = (
      /*               */
      1
    ), ei = (
      /*                */
      2
    ), io = (
      /*                */
      4
    ), bu = 0, pv = 1, ff = 2, xy = 3, hv = 4, Hw = 5, E0 = 6, Ut = Ar, ji = null, Qn = null, Nr = te, Al = te, _0 = ws(te), kr = bu, vv = null, Dy = te, mv = te, Oy = te, gv = null, da = null, S0 = 0, $w = 500, Vw = 1 / 0, Dk = 500, Tu = null;
    function yv() {
      Vw = tr() + Dk;
    }
    function Bw() {
      return Vw;
    }
    var Ay = !1, C0 = null, rp = null, df = !1, Us = null, Ev = te, b0 = [], T0 = null, Ok = 50, _v = 0, w0 = null, R0 = !1, Ny = !1, Ak = 50, ip = 0, ky = null, Sv = vn, Ly = te, Yw = !1;
    function My() {
      return ji;
    }
    function Ii() {
      return (Ut & (ei | io)) !== Ar ? tr() : (Sv !== vn || (Sv = tr()), Sv);
    }
    function Ps(e) {
      var t = e.mode;
      if ((t & Ge) === rt)
        return lt;
      if ((Ut & ei) !== Ar && Nr !== te)
        return os(Nr);
      var i = RA() !== wA;
      if (i) {
        if (Jr.transition !== null) {
          var o = Jr.transition;
          o._updatedFibers || (o._updatedFibers = /* @__PURE__ */ new Set()), o._updatedFibers.add(e);
        }
        return Ly === Yn && (Ly = Wm()), Ly;
      }
      var u = ia();
      if (u !== Yn)
        return u;
      var d = cO();
      return d;
    }
    function Nk(e) {
      var t = e.mode;
      return (t & Ge) === rt ? lt : gi();
    }
    function Lr(e, t, i, o) {
      tL(), Yw && E("useInsertionEffect must not schedule updates."), R0 && (Ny = !0), su(e, i, o), (Ut & ei) !== te && e === ji ? iL(t) : (zi && fd(e, t, i), aL(t), e === ji && ((Ut & ei) === Ar && (mv = Tt(mv, i)), kr === hv && js(e, Nr)), pa(e, o), i === lt && Ut === Ar && (t.mode & Ge) === rt && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !Bo.isBatchingLegacy && (yv(), Bb()));
    }
    function kk(e, t, i) {
      var o = e.current;
      o.lanes = t, su(e, t, i), pa(e, i);
    }
    function Lk(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Ut & ei) !== Ar
      );
    }
    function pa(e, t) {
      var i = e.callbackNode;
      YE(e, t);
      var o = zc(e, e === ji ? Nr : te);
      if (o === te) {
        i !== null && lR(i), e.callbackNode = null, e.callbackPriority = Yn;
        return;
      }
      var u = Wn(o), d = e.callbackPriority;
      if (d === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(Bo.current !== null && i !== L0)) {
        i == null && d !== lt && E("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      i != null && lR(i);
      var v;
      if (u === lt)
        e.tag === Rs ? (Bo.isBatchingLegacy !== null && (Bo.didScheduleLegacyUpdate = !0), uA(Kw.bind(null, e))) : Vb(Kw.bind(null, e)), Bo.current !== null ? Bo.current.push(xs) : dO(function() {
          (Ut & (ei | io)) === Ar && xs();
        }), v = null;
      else {
        var g;
        switch (wr(o)) {
          case Gn:
            g = hi;
            break;
          case Ao:
            g = Xu;
            break;
          case Qa:
            g = Wa;
            break;
          case ls:
            g = wc;
            break;
          default:
            g = Wa;
            break;
        }
        v = M0(g, Ww.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = v;
    }
    function Ww(e, t) {
      if (tN(), Sv = vn, Ly = te, (Ut & (ei | io)) !== Ar)
        throw new Error("Should not already be working.");
      var i = e.callbackNode, o = Ru();
      if (o && e.callbackNode !== i)
        return null;
      var u = zc(e, e === ji ? Nr : te);
      if (u === te)
        return null;
      var d = !Pc(e, u) && !Ym(e, u) && !t, v = d ? Vk(e, u) : Uy(e, u);
      if (v !== bu) {
        if (v === ff) {
          var g = ml(e);
          g !== te && (u = g, v = x0(e, g));
        }
        if (v === pv) {
          var _ = vv;
          throw pf(e, te), js(e, u), pa(e, tr()), _;
        }
        if (v === E0)
          js(e, u);
        else {
          var w = !Pc(e, u), R = e.current.alternate;
          if (w && !zk(R)) {
            if (v = Uy(e, u), v === ff) {
              var j = ml(e);
              j !== te && (u = j, v = x0(e, j));
            }
            if (v === pv) {
              var U = vv;
              throw pf(e, te), js(e, u), pa(e, tr()), U;
            }
          }
          e.finishedWork = R, e.finishedLanes = u, Mk(e, v, u);
        }
      }
      return pa(e, tr()), e.callbackNode === i ? Ww.bind(null, e) : null;
    }
    function x0(e, t) {
      var i = gv;
      if (dd(e)) {
        var o = pf(e, t);
        o.flags |= Yr, tA(e.containerInfo);
      }
      var u = Uy(e, t);
      if (u !== ff) {
        var d = da;
        da = i, d !== null && Gw(d);
      }
      return u;
    }
    function Gw(e) {
      da === null ? da = e : da.push.apply(da, e);
    }
    function Mk(e, t, i) {
      switch (t) {
        case bu:
        case pv:
          throw new Error("Root did not complete. This is a bug in React.");
        case ff: {
          hf(e, da, Tu);
          break;
        }
        case xy: {
          if (js(e, i), $m(i) && // do not delay if we're inside an act() scope
          !uR()) {
            var o = S0 + $w - tr();
            if (o > 10) {
              var u = zc(e, te);
              if (u !== te)
                break;
              var d = e.suspendedLanes;
              if (!uu(d, i)) {
                Ii(), sd(e, d);
                break;
              }
              e.timeoutHandle = T_(hf.bind(null, e, da, Tu), o);
              break;
            }
          }
          hf(e, da, Tu);
          break;
        }
        case hv: {
          if (js(e, i), Bm(i))
            break;
          if (!uR()) {
            var v = od(e, i), g = v, _ = tr() - g, w = eL(_) - _;
            if (w > 10) {
              e.timeoutHandle = T_(hf.bind(null, e, da, Tu), w);
              break;
            }
          }
          hf(e, da, Tu);
          break;
        }
        case Hw: {
          hf(e, da, Tu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function zk(e) {
      for (var t = e; ; ) {
        if (t.flags & ql) {
          var i = t.updateQueue;
          if (i !== null) {
            var o = i.stores;
            if (o !== null)
              for (var u = 0; u < o.length; u++) {
                var d = o[u], v = d.getSnapshot, g = d.value;
                try {
                  if (!Fe(v(), g))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var _ = t.child;
        if (t.subtreeFlags & ql && _ !== null) {
          _.return = t, t = _;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function js(e, t) {
      t = jc(t, Oy), t = jc(t, mv), Km(e, t);
    }
    function Kw(e) {
      if (nN(), (Ut & (ei | io)) !== Ar)
        throw new Error("Should not already be working.");
      Ru();
      var t = zc(e, te);
      if (!yi(t, lt))
        return pa(e, tr()), null;
      var i = Uy(e, t);
      if (e.tag !== Rs && i === ff) {
        var o = ml(e);
        o !== te && (t = o, i = x0(e, o));
      }
      if (i === pv) {
        var u = vv;
        throw pf(e, te), js(e, t), pa(e, tr()), u;
      }
      if (i === E0)
        throw new Error("Root did not complete. This is a bug in React.");
      var d = e.current.alternate;
      return e.finishedWork = d, e.finishedLanes = t, hf(e, da, Tu), pa(e, tr()), null;
    }
    function Uk(e, t) {
      t !== te && (ph(e, Tt(t, lt)), pa(e, tr()), (Ut & (ei | io)) === Ar && (yv(), xs()));
    }
    function D0(e, t) {
      var i = Ut;
      Ut |= Fw;
      try {
        return e(t);
      } finally {
        Ut = i, Ut === Ar && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !Bo.isBatchingLegacy && (yv(), Bb());
      }
    }
    function Pk(e, t, i, o, u) {
      var d = ia(), v = Jr.transition;
      try {
        return Jr.transition = null, Pn(Gn), e(t, i, o, u);
      } finally {
        Pn(d), Jr.transition = v, Ut === Ar && yv();
      }
    }
    function wu(e) {
      Us !== null && Us.tag === Rs && (Ut & (ei | io)) === Ar && Ru();
      var t = Ut;
      Ut |= Fw;
      var i = Jr.transition, o = ia();
      try {
        return Jr.transition = null, Pn(Gn), e ? e() : void 0;
      } finally {
        Pn(o), Jr.transition = i, Ut = t, (Ut & (ei | io)) === Ar && xs();
      }
    }
    function Qw() {
      return (Ut & (ei | io)) !== Ar;
    }
    function zy(e, t) {
      Si(_0, Al, e), Al = Tt(Al, t);
    }
    function O0(e) {
      Al = _0.current, _i(_0, e);
    }
    function pf(e, t) {
      e.finishedWork = null, e.finishedLanes = te;
      var i = e.timeoutHandle;
      if (i !== w_ && (e.timeoutHandle = w_, fO(i)), Qn !== null)
        for (var o = Qn.return; o !== null; ) {
          var u = o.alternate;
          Tw(u, o), o = o.return;
        }
      ji = e;
      var d = vf(e.current, null);
      return Qn = d, Nr = Al = t, kr = bu, vv = null, Dy = te, mv = te, Oy = te, gv = null, da = null, AA(), Uo.discardPendingWarnings(), d;
    }
    function Xw(e, t) {
      do {
        var i = Qn;
        try {
          if (Vg(), RT(), mn(), y0.current = null, i === null || i.return === null) {
            kr = pv, vv = t, Qn = null;
            return;
          }
          if (wt && i.mode & Ht && Sy(i, !0), Et)
            if (eu(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var o = t;
              Im(i, o, Nr);
            } else
              jm(i, t, Nr);
          lN(e, i.return, i, t, Nr), eR(i);
        } catch (u) {
          t = u, Qn === i && i !== null ? (i = i.return, Qn = i) : i = Qn;
          continue;
        }
        return;
      } while (!0);
    }
    function qw() {
      var e = g0.current;
      return g0.current = my, e === null ? my : e;
    }
    function Zw(e) {
      g0.current = e;
    }
    function jk() {
      S0 = tr();
    }
    function Cv(e) {
      Dy = Tt(e, Dy);
    }
    function Ik() {
      kr === bu && (kr = xy);
    }
    function A0() {
      (kr === bu || kr === xy || kr === ff) && (kr = hv), ji !== null && (Uc(Dy) || Uc(mv)) && js(ji, Nr);
    }
    function Fk(e) {
      kr !== hv && (kr = ff), gv === null ? gv = [e] : gv.push(e);
    }
    function Hk() {
      return kr === bu;
    }
    function Uy(e, t) {
      var i = Ut;
      Ut |= ei;
      var o = qw();
      if (ji !== e || Nr !== t) {
        if (zi) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (bv(e, Nr), u.clear()), hh(e, t);
        }
        Tu = Fc(), pf(e, t);
      }
      ts(t);
      do
        try {
          $k();
          break;
        } catch (d) {
          Xw(e, d);
        }
      while (!0);
      if (Vg(), Ut = i, Zw(o), Qn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return pl(), ji = null, Nr = te, kr;
    }
    function $k() {
      for (; Qn !== null; )
        Jw(Qn);
    }
    function Vk(e, t) {
      var i = Ut;
      Ut |= ei;
      var o = qw();
      if (ji !== e || Nr !== t) {
        if (zi) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (bv(e, Nr), u.clear()), hh(e, t);
        }
        Tu = Fc(), yv(), pf(e, t);
      }
      ts(t);
      do
        try {
          Bk();
          break;
        } catch (d) {
          Xw(e, d);
        }
      while (!0);
      return Vg(), Zw(o), Ut = i, Qn !== null ? (Oc(), bu) : (pl(), ji = null, Nr = te, kr);
    }
    function Bk() {
      for (; Qn !== null && !Nm(); )
        Jw(Qn);
    }
    function Jw(e) {
      var t = e.alternate;
      Dn(e);
      var i;
      (e.mode & Ht) !== rt ? (YS(e), i = N0(t, e, Al), Sy(e, !0)) : i = N0(t, e, Al), mn(), e.memoizedProps = e.pendingProps, i === null ? eR(e) : Qn = i, y0.current = null;
    }
    function eR(e) {
      var t = e;
      do {
        var i = t.alternate, o = t.return;
        if ((t.flags & ll) === nt) {
          Dn(t);
          var u = void 0;
          if ((t.mode & Ht) === rt ? u = bw(i, t, Al) : (YS(t), u = bw(i, t, Al), Sy(t, !1)), mn(), u !== null) {
            Qn = u;
            return;
          }
        } else {
          var d = IN(i, t);
          if (d !== null) {
            d.flags &= xo, Qn = d;
            return;
          }
          if ((t.mode & Ht) !== rt) {
            Sy(t, !1);
            for (var v = t.actualDuration, g = t.child; g !== null; )
              v += g.actualDuration, g = g.sibling;
            t.actualDuration = v;
          }
          if (o !== null)
            o.flags |= ll, o.subtreeFlags = nt, o.deletions = null;
          else {
            kr = E0, Qn = null;
            return;
          }
        }
        var _ = t.sibling;
        if (_ !== null) {
          Qn = _;
          return;
        }
        t = o, Qn = t;
      } while (t !== null);
      kr === bu && (kr = Hw);
    }
    function hf(e, t, i) {
      var o = ia(), u = Jr.transition;
      try {
        Jr.transition = null, Pn(Gn), Yk(e, t, i, o);
      } finally {
        Jr.transition = u, Pn(o);
      }
      return null;
    }
    function Yk(e, t, i, o) {
      do
        Ru();
      while (Us !== null);
      if (nL(), (Ut & (ei | io)) !== Ar)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, d = e.finishedLanes;
      if (Mm(d), u === null)
        return Rc(), null;
      if (d === te && E("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = te, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Yn;
      var v = Tt(u.lanes, u.childLanes);
      cd(e, v), e === ji && (ji = null, Qn = null, Nr = te), ((u.subtreeFlags & pi) !== nt || (u.flags & pi) !== nt) && (df || (df = !0, T0 = i, M0(Wa, function() {
        return Ru(), null;
      })));
      var g = (u.subtreeFlags & (fi | di | xa | pi)) !== nt, _ = (u.flags & (fi | di | xa | pi)) !== nt;
      if (g || _) {
        var w = Jr.transition;
        Jr.transition = null;
        var R = ia();
        Pn(Gn);
        var j = Ut;
        Ut |= io, y0.current = null, BN(e, u), qT(), ik(e, u, d), iO(e.containerInfo), e.current = u, es(d), ak(u, e, d), Fm(), Qu(), Ut = j, Pn(R), Jr.transition = w;
      } else
        e.current = u, qT();
      var U = df;
      if (df ? (df = !1, Us = e, Ev = d) : (ip = 0, ky = null), v = e.pendingLanes, v === te && (rp = null), U || iR(e.current, !1), fl(u.stateNode, o), zi && e.memoizedUpdaters.clear(), Tk(), pa(e, tr()), t !== null)
        for (var G = e.onRecoverableError, K = 0; K < t.length; K++) {
          var Z = t[K], Le = Z.stack, it = Z.digest;
          G(Z.value, {
            componentStack: Le,
            digest: it
          });
        }
      if (Ay) {
        Ay = !1;
        var Ke = C0;
        throw C0 = null, Ke;
      }
      return yi(Ev, lt) && e.tag !== Rs && Ru(), v = e.pendingLanes, yi(v, lt) ? (eN(), e === w0 ? _v++ : (_v = 0, w0 = e)) : _v = 0, xs(), Rc(), null;
    }
    function Ru() {
      if (Us !== null) {
        var e = wr(Ev), t = QE(Qa, e), i = Jr.transition, o = ia();
        try {
          return Jr.transition = null, Pn(t), Gk();
        } finally {
          Pn(o), Jr.transition = i;
        }
      }
      return !1;
    }
    function Wk(e) {
      b0.push(e), df || (df = !0, M0(Wa, function() {
        return Ru(), null;
      }));
    }
    function Gk() {
      if (Us === null)
        return !1;
      var e = T0;
      T0 = null;
      var t = Us, i = Ev;
      if (Us = null, Ev = te, (Ut & (ei | io)) !== Ar)
        throw new Error("Cannot flush passive effects while already rendering.");
      R0 = !0, Ny = !1, Dc(i);
      var o = Ut;
      Ut |= io, dk(t.current), uk(t, t.current, i, e);
      {
        var u = b0;
        b0 = [];
        for (var d = 0; d < u.length; d++) {
          var v = u[d];
          KN(t, v);
        }
      }
      Ga(), iR(t.current, !0), Ut = o, xs(), Ny ? t === ky ? ip++ : (ip = 0, ky = t) : ip = 0, R0 = !1, Ny = !1, ih(t);
      {
        var g = t.current.stateNode;
        g.effectDuration = 0, g.passiveEffectDuration = 0;
      }
      return !0;
    }
    function tR(e) {
      return rp !== null && rp.has(e);
    }
    function Kk(e) {
      rp === null ? rp = /* @__PURE__ */ new Set([e]) : rp.add(e);
    }
    function Qk(e) {
      Ay || (Ay = !0, C0 = e);
    }
    var Xk = Qk;
    function nR(e, t, i) {
      var o = sf(i, t), u = JT(e, o, lt), d = Os(e, u, lt), v = Ii();
      d !== null && (su(d, lt, v), pa(d, v));
    }
    function _n(e, t, i) {
      if (HN(i), Tv(!1), e.tag === I) {
        nR(e, e, i);
        return;
      }
      var o = null;
      for (o = t; o !== null; ) {
        if (o.tag === I) {
          nR(o, e, i);
          return;
        } else if (o.tag === D) {
          var u = o.type, d = o.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof d.componentDidCatch == "function" && !tR(d)) {
            var v = sf(i, e), g = qS(o, v, lt), _ = Os(o, g, lt), w = Ii();
            _ !== null && (su(_, lt, w), pa(_, w));
            return;
          }
        }
        o = o.return;
      }
      E(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, i);
    }
    function qk(e, t, i) {
      var o = e.pingCache;
      o !== null && o.delete(t);
      var u = Ii();
      sd(e, i), oL(e), ji === e && uu(Nr, i) && (kr === hv || kr === xy && $m(Nr) && tr() - S0 < $w ? pf(e, te) : Oy = Tt(Oy, i)), pa(e, u);
    }
    function rR(e, t) {
      t === Yn && (t = Nk(e));
      var i = Ii(), o = ca(e, t);
      o !== null && (su(o, t, i), pa(o, i));
    }
    function Zk(e) {
      var t = e.memoizedState, i = Yn;
      t !== null && (i = t.retryLane), rR(e, i);
    }
    function Jk(e, t) {
      var i = Yn, o;
      switch (e.tag) {
        case oe:
          o = e.stateNode;
          var u = e.memoizedState;
          u !== null && (i = u.retryLane);
          break;
        case at:
          o = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      o !== null && o.delete(t), rR(e, i);
    }
    function eL(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : xk(e / 1960) * 1960;
    }
    function tL() {
      if (_v > Ok)
        throw _v = 0, w0 = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      ip > Ak && (ip = 0, ky = null, E("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function nL() {
      Uo.flushLegacyContextWarning(), Uo.flushPendingUnsafeLifecycleWarnings();
    }
    function iR(e, t) {
      Dn(e), Py(e, ea, Sk), t && Py(e, Zl, Ck), Py(e, ea, Ek), t && Py(e, Zl, _k), mn();
    }
    function Py(e, t, i) {
      for (var o = e, u = null; o !== null; ) {
        var d = o.subtreeFlags & t;
        o !== u && o.child !== null && d !== nt ? o = o.child : ((o.flags & t) !== nt && i(o), o.sibling !== null ? o = o.sibling : o = u = o.return);
      }
    }
    var jy = null;
    function aR(e) {
      {
        if ((Ut & ei) !== Ar || !(e.mode & Ge))
          return;
        var t = e.tag;
        if (t !== M && t !== I && t !== D && t !== k && t !== ae && t !== Ne && t !== De)
          return;
        var i = yt(e) || "ReactComponent";
        if (jy !== null) {
          if (jy.has(i))
            return;
          jy.add(i);
        } else
          jy = /* @__PURE__ */ new Set([i]);
        var o = xn;
        try {
          Dn(e), E("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          o ? Dn(e) : mn();
        }
      }
    }
    var N0;
    {
      var rL = null;
      N0 = function(e, t, i) {
        var o = pR(rL, t);
        try {
          return yw(e, t, i);
        } catch (d) {
          if (mA() || d !== null && typeof d == "object" && typeof d.then == "function")
            throw d;
          if (Vg(), RT(), Tw(e, t), pR(t, o), t.mode & Ht && YS(t), wa(null, yw, null, e, t, i), $E()) {
            var u = Ro();
            typeof u == "object" && u !== null && u._suppressLogging && typeof d == "object" && d !== null && !d._suppressLogging && (d._suppressLogging = !0);
          }
          throw d;
        }
      };
    }
    var oR = !1, k0;
    k0 = /* @__PURE__ */ new Set();
    function iL(e) {
      if (li && !qA())
        switch (e.tag) {
          case k:
          case ae:
          case De: {
            var t = Qn && yt(Qn) || "Unknown", i = t;
            if (!k0.has(i)) {
              k0.add(i);
              var o = yt(e) || "Unknown";
              E("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", o, t, t);
            }
            break;
          }
          case D: {
            oR || (E("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), oR = !0);
            break;
          }
        }
    }
    function bv(e, t) {
      if (zi) {
        var i = e.memoizedUpdaters;
        i.forEach(function(o) {
          fd(e, o, t);
        });
      }
    }
    var L0 = {};
    function M0(e, t) {
      {
        var i = Bo.current;
        return i !== null ? (i.push(t), L0) : th(e, t);
      }
    }
    function lR(e) {
      if (e !== L0)
        return Vf(e);
    }
    function uR() {
      return Bo.current !== null;
    }
    function aL(e) {
      {
        if (e.mode & Ge) {
          if (!Iw())
            return;
        } else if (!Rk() || Ut !== Ar || e.tag !== k && e.tag !== ae && e.tag !== De)
          return;
        if (Bo.current === null) {
          var t = xn;
          try {
            Dn(e), E(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, yt(e));
          } finally {
            t ? Dn(e) : mn();
          }
        }
      }
    }
    function oL(e) {
      e.tag !== Rs && Iw() && Bo.current === null && E(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Tv(e) {
      Yw = e;
    }
    var ao = null, ap = null, lL = function(e) {
      ao = e;
    };
    function op(e) {
      {
        if (ao === null)
          return e;
        var t = ao(e);
        return t === void 0 ? e : t.current;
      }
    }
    function z0(e) {
      return op(e);
    }
    function U0(e) {
      {
        if (ao === null)
          return e;
        var t = ao(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var i = op(e.render);
            if (e.render !== i) {
              var o = {
                $$typeof: Te,
                render: i
              };
              return e.displayName !== void 0 && (o.displayName = e.displayName), o;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function sR(e, t) {
      {
        if (ao === null)
          return !1;
        var i = e.elementType, o = t.type, u = !1, d = typeof o == "object" && o !== null ? o.$$typeof : null;
        switch (e.tag) {
          case D: {
            typeof o == "function" && (u = !0);
            break;
          }
          case k: {
            (typeof o == "function" || d === et) && (u = !0);
            break;
          }
          case ae: {
            (d === Te || d === et) && (u = !0);
            break;
          }
          case Ne:
          case De: {
            (d === Rt || d === et) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var v = ao(i);
          if (v !== void 0 && v === ao(o))
            return !0;
        }
        return !1;
      }
    }
    function cR(e) {
      {
        if (ao === null || typeof WeakSet != "function")
          return;
        ap === null && (ap = /* @__PURE__ */ new WeakSet()), ap.add(e);
      }
    }
    var uL = function(e, t) {
      {
        if (ao === null)
          return;
        var i = t.staleFamilies, o = t.updatedFamilies;
        Ru(), wu(function() {
          P0(e.current, o, i);
        });
      }
    }, sL = function(e, t) {
      {
        if (e.context !== Da)
          return;
        Ru(), wu(function() {
          wv(t, e, null, null);
        });
      }
    };
    function P0(e, t, i) {
      {
        var o = e.alternate, u = e.child, d = e.sibling, v = e.tag, g = e.type, _ = null;
        switch (v) {
          case k:
          case De:
          case D:
            _ = g;
            break;
          case ae:
            _ = g.render;
            break;
        }
        if (ao === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var w = !1, R = !1;
        if (_ !== null) {
          var j = ao(_);
          j !== void 0 && (i.has(j) ? R = !0 : t.has(j) && (v === D ? R = !0 : w = !0));
        }
        if (ap !== null && (ap.has(e) || o !== null && ap.has(o)) && (R = !0), R && (e._debugNeedsRemount = !0), R || w) {
          var U = ca(e, lt);
          U !== null && Lr(U, e, lt, vn);
        }
        u !== null && !R && P0(u, t, i), d !== null && P0(d, t, i);
      }
    }
    var cL = function(e, t) {
      {
        var i = /* @__PURE__ */ new Set(), o = new Set(t.map(function(u) {
          return u.current;
        }));
        return j0(e.current, o, i), i;
      }
    };
    function j0(e, t, i) {
      {
        var o = e.child, u = e.sibling, d = e.tag, v = e.type, g = null;
        switch (d) {
          case k:
          case De:
          case D:
            g = v;
            break;
          case ae:
            g = v.render;
            break;
        }
        var _ = !1;
        g !== null && t.has(g) && (_ = !0), _ ? fL(e, i) : o !== null && j0(o, t, i), u !== null && j0(u, t, i);
      }
    }
    function fL(e, t) {
      {
        var i = dL(e, t);
        if (i)
          return;
        for (var o = e; ; ) {
          switch (o.tag) {
            case B:
              t.add(o.stateNode);
              return;
            case H:
              t.add(o.stateNode.containerInfo);
              return;
            case I:
              t.add(o.stateNode.containerInfo);
              return;
          }
          if (o.return === null)
            throw new Error("Expected to reach root first.");
          o = o.return;
        }
      }
    }
    function dL(e, t) {
      for (var i = e, o = !1; ; ) {
        if (i.tag === B)
          o = !0, t.add(i.stateNode);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return o;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return o;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
      return !1;
    }
    var I0;
    {
      I0 = !1;
      try {
        var fR = Object.preventExtensions({});
      } catch {
        I0 = !0;
      }
    }
    function pL(e, t, i, o) {
      this.tag = e, this.key = i, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = o, this.flags = nt, this.subtreeFlags = nt, this.deletions = null, this.lanes = te, this.childLanes = te, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !I0 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var Oa = function(e, t, i, o) {
      return new pL(e, t, i, o);
    };
    function F0(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function hL(e) {
      return typeof e == "function" && !F0(e) && e.defaultProps === void 0;
    }
    function vL(e) {
      if (typeof e == "function")
        return F0(e) ? D : k;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Te)
          return ae;
        if (t === Rt)
          return Ne;
      }
      return M;
    }
    function vf(e, t) {
      var i = e.alternate;
      i === null ? (i = Oa(e.tag, t, e.key, e.mode), i.elementType = e.elementType, i.type = e.type, i.stateNode = e.stateNode, i._debugSource = e._debugSource, i._debugOwner = e._debugOwner, i._debugHookTypes = e._debugHookTypes, i.alternate = e, e.alternate = i) : (i.pendingProps = t, i.type = e.type, i.flags = nt, i.subtreeFlags = nt, i.deletions = null, i.actualDuration = 0, i.actualStartTime = -1), i.flags = e.flags & Tr, i.childLanes = e.childLanes, i.lanes = e.lanes, i.child = e.child, i.memoizedProps = e.memoizedProps, i.memoizedState = e.memoizedState, i.updateQueue = e.updateQueue;
      var o = e.dependencies;
      switch (i.dependencies = o === null ? null : {
        lanes: o.lanes,
        firstContext: o.firstContext
      }, i.sibling = e.sibling, i.index = e.index, i.ref = e.ref, i.selfBaseDuration = e.selfBaseDuration, i.treeBaseDuration = e.treeBaseDuration, i._debugNeedsRemount = e._debugNeedsRemount, i.tag) {
        case M:
        case k:
        case De:
          i.type = op(e.type);
          break;
        case D:
          i.type = z0(e.type);
          break;
        case ae:
          i.type = U0(e.type);
          break;
      }
      return i;
    }
    function mL(e, t) {
      e.flags &= Tr | sn;
      var i = e.alternate;
      if (i === null)
        e.childLanes = te, e.lanes = t, e.child = null, e.subtreeFlags = nt, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = i.childLanes, e.lanes = i.lanes, e.child = i.child, e.subtreeFlags = nt, e.deletions = null, e.memoizedProps = i.memoizedProps, e.memoizedState = i.memoizedState, e.updateQueue = i.updateQueue, e.type = i.type;
        var o = i.dependencies;
        e.dependencies = o === null ? null : {
          lanes: o.lanes,
          firstContext: o.firstContext
        }, e.selfBaseDuration = i.selfBaseDuration, e.treeBaseDuration = i.treeBaseDuration;
      }
      return e;
    }
    function gL(e, t, i) {
      var o;
      return e === zg ? (o = Ge, t === !0 && (o |= zn, o |= na)) : o = rt, zi && (o |= Ht), Oa(I, null, null, o);
    }
    function H0(e, t, i, o, u, d) {
      var v = M, g = e;
      if (typeof e == "function")
        F0(e) ? (v = D, g = z0(g)) : g = op(g);
      else if (typeof e == "string")
        v = B;
      else
        e:
          switch (e) {
            case Oi:
              return Is(i.children, u, d, t);
            case po:
              v = we, u |= zn, (u & Ge) !== rt && (u |= na);
              break;
            case N:
              return yL(i, u, d, t);
            case Nt:
              return EL(i, u, d, t);
            case zt:
              return _L(i, u, d, t);
            case dn:
              return dR(i, u, d, t);
            case Ir:
            case Jn:
            case Pa:
            case pn:
            case fn:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case ue:
                    v = ge;
                    break e;
                  case Ee:
                    v = ze;
                    break e;
                  case Te:
                    v = ae, g = U0(g);
                    break e;
                  case Rt:
                    v = Ne;
                    break e;
                  case et:
                    v = tt, g = null;
                    break e;
                }
              var _ = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (_ += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var w = o ? yt(o) : null;
                w && (_ += `

Check the render method of \`` + w + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + _));
            }
          }
      var R = Oa(v, i, t, u);
      return R.elementType = e, R.type = g, R.lanes = d, R._debugOwner = o, R;
    }
    function $0(e, t, i) {
      var o = null;
      o = e._owner;
      var u = e.type, d = e.key, v = e.props, g = H0(u, d, v, o, t, i);
      return g._debugSource = e._source, g._debugOwner = e._owner, g;
    }
    function Is(e, t, i, o) {
      var u = Oa(pe, e, o, t);
      return u.lanes = i, u;
    }
    function yL(e, t, i, o) {
      typeof e.id != "string" && E('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = Oa(Ce, e, o, t | Ht);
      return u.elementType = N, u.lanes = i, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function EL(e, t, i, o) {
      var u = Oa(oe, e, o, t);
      return u.elementType = Nt, u.lanes = i, u;
    }
    function _L(e, t, i, o) {
      var u = Oa(at, e, o, t);
      return u.elementType = zt, u.lanes = i, u;
    }
    function dR(e, t, i, o) {
      var u = Oa(je, e, o, t);
      u.elementType = dn, u.lanes = i;
      var d = {
        isHidden: !1
      };
      return u.stateNode = d, u;
    }
    function V0(e, t, i) {
      var o = Oa(X, e, null, t);
      return o.lanes = i, o;
    }
    function SL() {
      var e = Oa(B, null, null, rt);
      return e.elementType = "DELETED", e;
    }
    function CL(e) {
      var t = Oa(ot, null, null, rt);
      return t.stateNode = e, t;
    }
    function B0(e, t, i) {
      var o = e.children !== null ? e.children : [], u = Oa(H, o, e.key, t);
      return u.lanes = i, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function pR(e, t) {
      return e === null && (e = Oa(M, null, null, rt)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function bL(e, t, i, o, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = w_, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Yn, this.eventTimes = Ic(te), this.expirationTimes = Ic(vn), this.pendingLanes = te, this.suspendedLanes = te, this.pingedLanes = te, this.expiredLanes = te, this.mutableReadLanes = te, this.finishedLanes = te, this.entangledLanes = te, this.entanglements = Ic(te), this.identifierPrefix = o, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var d = this.pendingUpdatersLaneMap = [], v = 0; v < Bn; v++)
          d.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case zg:
          this._debugRootType = i ? "hydrateRoot()" : "createRoot()";
          break;
        case Rs:
          this._debugRootType = i ? "hydrate()" : "render()";
          break;
      }
    }
    function hR(e, t, i, o, u, d, v, g, _, w) {
      var R = new bL(e, t, i, g, _), j = gL(t, d);
      R.current = j, j.stateNode = R;
      {
        var U = {
          element: o,
          isDehydrated: i,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        j.memoizedState = U;
      }
      return Z_(j), R;
    }
    var Y0 = "18.2.0";
    function TL(e, t, i) {
      var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Cn(o), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: ii,
        key: o == null ? null : "" + o,
        children: e,
        containerInfo: t,
        implementation: i
      };
    }
    var W0, G0;
    W0 = !1, G0 = {};
    function vR(e) {
      if (!e)
        return Da;
      var t = Va(e), i = lA(t);
      if (t.tag === D) {
        var o = t.type;
        if (bl(o))
          return Hb(t, o, i);
      }
      return i;
    }
    function wL(e, t) {
      {
        var i = Va(e);
        if (i === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var o = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + o);
        }
        var u = Zp(i);
        if (u === null)
          return null;
        if (u.mode & zn) {
          var d = yt(i) || "Component";
          if (!G0[d]) {
            G0[d] = !0;
            var v = xn;
            try {
              Dn(u), i.mode & zn ? E("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, d) : E("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, d);
            } finally {
              v ? Dn(v) : mn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function mR(e, t, i, o, u, d, v, g) {
      var _ = !1, w = null;
      return hR(e, t, _, w, i, o, u, d, v);
    }
    function gR(e, t, i, o, u, d, v, g, _, w) {
      var R = !0, j = hR(i, o, R, e, u, d, v, g, _);
      j.context = vR(null);
      var U = j.current, G = Ii(), K = Ps(U), Z = Su(G, K);
      return Z.callback = t ?? null, Os(U, Z, K), kk(j, K, G), j;
    }
    function wv(e, t, i, o) {
      Do(t, e);
      var u = t.current, d = Ii(), v = Ps(u);
      lh(v);
      var g = vR(i);
      t.context === null ? t.context = g : t.pendingContext = g, li && xn !== null && !W0 && (W0 = !0, E(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, yt(xn) || "Unknown"));
      var _ = Su(d, v);
      _.payload = {
        element: e
      }, o = o === void 0 ? null : o, o !== null && (typeof o != "function" && E("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", o), _.callback = o);
      var w = Os(u, _, v);
      return w !== null && (Lr(w, u, v, d), Kg(w, u, v)), v;
    }
    function Iy(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case B:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function RL(e) {
      switch (e.tag) {
        case I: {
          var t = e.stateNode;
          if (dd(t)) {
            var i = WE(t);
            Uk(t, i);
          }
          break;
        }
        case oe: {
          wu(function() {
            var u = ca(e, lt);
            if (u !== null) {
              var d = Ii();
              Lr(u, e, lt, d);
            }
          });
          var o = lt;
          K0(e, o);
          break;
        }
      }
    }
    function yR(e, t) {
      var i = e.memoizedState;
      i !== null && i.dehydrated !== null && (i.retryLane = Gm(i.retryLane, t));
    }
    function K0(e, t) {
      yR(e, t);
      var i = e.alternate;
      i && yR(i, t);
    }
    function xL(e) {
      if (e.tag === oe) {
        var t = lu, i = ca(e, t);
        if (i !== null) {
          var o = Ii();
          Lr(i, e, t, o);
        }
        K0(e, t);
      }
    }
    function DL(e) {
      if (e.tag === oe) {
        var t = Ps(e), i = ca(e, t);
        if (i !== null) {
          var o = Ii();
          Lr(i, e, t, o);
        }
        K0(e, t);
      }
    }
    function ER(e) {
      var t = eh(e);
      return t === null ? null : t.stateNode;
    }
    var _R = function(e) {
      return null;
    };
    function OL(e) {
      return _R(e);
    }
    var SR = function(e) {
      return !1;
    };
    function AL(e) {
      return SR(e);
    }
    var CR = null, bR = null, TR = null, wR = null, RR = null, xR = null, DR = null, OR = null, AR = null;
    {
      var NR = function(e, t, i) {
        var o = t[i], u = Ft(e) ? e.slice() : Dt({}, e);
        return i + 1 === t.length ? (Ft(u) ? u.splice(o, 1) : delete u[o], u) : (u[o] = NR(e[o], t, i + 1), u);
      }, kR = function(e, t) {
        return NR(e, t, 0);
      }, LR = function(e, t, i, o) {
        var u = t[o], d = Ft(e) ? e.slice() : Dt({}, e);
        if (o + 1 === t.length) {
          var v = i[o];
          d[v] = d[u], Ft(d) ? d.splice(u, 1) : delete d[u];
        } else
          d[u] = LR(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            i,
            o + 1
          );
        return d;
      }, MR = function(e, t, i) {
        if (t.length !== i.length) {
          T("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var o = 0; o < i.length - 1; o++)
            if (t[o] !== i[o]) {
              T("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return LR(e, t, i, 0);
      }, zR = function(e, t, i, o) {
        if (i >= t.length)
          return o;
        var u = t[i], d = Ft(e) ? e.slice() : Dt({}, e);
        return d[u] = zR(e[u], t, i + 1, o), d;
      }, UR = function(e, t, i) {
        return zR(e, t, 0, i);
      }, Q0 = function(e, t) {
        for (var i = e.memoizedState; i !== null && t > 0; )
          i = i.next, t--;
        return i;
      };
      CR = function(e, t, i, o) {
        var u = Q0(e, t);
        if (u !== null) {
          var d = UR(u.memoizedState, i, o);
          u.memoizedState = d, u.baseState = d, e.memoizedProps = Dt({}, e.memoizedProps);
          var v = ca(e, lt);
          v !== null && Lr(v, e, lt, vn);
        }
      }, bR = function(e, t, i) {
        var o = Q0(e, t);
        if (o !== null) {
          var u = kR(o.memoizedState, i);
          o.memoizedState = u, o.baseState = u, e.memoizedProps = Dt({}, e.memoizedProps);
          var d = ca(e, lt);
          d !== null && Lr(d, e, lt, vn);
        }
      }, TR = function(e, t, i, o) {
        var u = Q0(e, t);
        if (u !== null) {
          var d = MR(u.memoizedState, i, o);
          u.memoizedState = d, u.baseState = d, e.memoizedProps = Dt({}, e.memoizedProps);
          var v = ca(e, lt);
          v !== null && Lr(v, e, lt, vn);
        }
      }, wR = function(e, t, i) {
        e.pendingProps = UR(e.memoizedProps, t, i), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var o = ca(e, lt);
        o !== null && Lr(o, e, lt, vn);
      }, RR = function(e, t) {
        e.pendingProps = kR(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = ca(e, lt);
        i !== null && Lr(i, e, lt, vn);
      }, xR = function(e, t, i) {
        e.pendingProps = MR(e.memoizedProps, t, i), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var o = ca(e, lt);
        o !== null && Lr(o, e, lt, vn);
      }, DR = function(e) {
        var t = ca(e, lt);
        t !== null && Lr(t, e, lt, vn);
      }, OR = function(e) {
        _R = e;
      }, AR = function(e) {
        SR = e;
      };
    }
    function NL(e) {
      var t = Zp(e);
      return t === null ? null : t.stateNode;
    }
    function kL(e) {
      return null;
    }
    function LL() {
      return xn;
    }
    function ML(e) {
      var t = e.findFiberByHostInstance, i = p.ReactCurrentDispatcher;
      return km({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: CR,
        overrideHookStateDeletePath: bR,
        overrideHookStateRenamePath: TR,
        overrideProps: wR,
        overridePropsDeletePath: RR,
        overridePropsRenamePath: xR,
        setErrorHandler: OR,
        setSuspenseHandler: AR,
        scheduleUpdate: DR,
        currentDispatcherRef: i,
        findHostInstanceByFiber: NL,
        findFiberByHostInstance: t || kL,
        // React Refresh
        findHostInstancesForRefresh: cL,
        scheduleRefresh: uL,
        scheduleRoot: sL,
        setRefreshHandler: lL,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: LL,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: Y0
      });
    }
    var PR = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function X0(e) {
      this._internalRoot = e;
    }
    Fy.prototype.render = X0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? E("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Hy(arguments[1]) ? E("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && E("You passed a second argument to root.render(...) but it only accepts one argument.");
        var i = t.containerInfo;
        if (i.nodeType !== Mn) {
          var o = ER(t.current);
          o && o.parentNode !== i && E("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      wv(e, t, null, null);
    }, Fy.prototype.unmount = X0.prototype.unmount = function() {
      typeof arguments[0] == "function" && E("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Qw() && E("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), wu(function() {
          wv(null, e, null, null);
        }), Ub(t);
      }
    };
    function zL(e, t) {
      if (!Hy(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      jR(e);
      var i = !1, o = !1, u = "", d = PR;
      t != null && (t.hydrate ? T("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === ri && E(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (i = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (d = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var v = mR(e, zg, null, i, o, u, d);
      Dg(v.current, e);
      var g = e.nodeType === Mn ? e.parentNode : e;
      return Lh(g), new X0(v);
    }
    function Fy(e) {
      this._internalRoot = e;
    }
    function UL(e) {
      e && ZE(e);
    }
    Fy.prototype.unstable_scheduleHydration = UL;
    function PL(e, t, i) {
      if (!Hy(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      jR(e), t === void 0 && E("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var o = i ?? null, u = i != null && i.hydratedSources || null, d = !1, v = !1, g = "", _ = PR;
      i != null && (i.unstable_strictMode === !0 && (d = !0), i.identifierPrefix !== void 0 && (g = i.identifierPrefix), i.onRecoverableError !== void 0 && (_ = i.onRecoverableError));
      var w = gR(t, null, e, zg, o, d, v, g, _);
      if (Dg(w.current, e), Lh(e), u)
        for (var R = 0; R < u.length; R++) {
          var j = u[R];
          YA(w, j);
        }
      return new Fy(w);
    }
    function Hy(e) {
      return !!(e && (e.nodeType === si || e.nodeType === Ai || e.nodeType === zp || !Je));
    }
    function Rv(e) {
      return !!(e && (e.nodeType === si || e.nodeType === Ai || e.nodeType === zp || e.nodeType === Mn && e.nodeValue === " react-mount-point-unstable "));
    }
    function jR(e) {
      e.nodeType === si && e.tagName && e.tagName.toUpperCase() === "BODY" && E("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Bh(e) && (e._reactRootContainer ? E("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : E("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var jL = p.ReactCurrentOwner, IR;
    IR = function(e) {
      if (e._reactRootContainer && e.nodeType !== Mn) {
        var t = ER(e._reactRootContainer.current);
        t && t.parentNode !== e && E("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var i = !!e._reactRootContainer, o = q0(e), u = !!(o && Ts(o));
      u && !i && E("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === si && e.tagName && e.tagName.toUpperCase() === "BODY" && E("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function q0(e) {
      return e ? e.nodeType === Ai ? e.documentElement : e.firstChild : null;
    }
    function FR() {
    }
    function IL(e, t, i, o, u) {
      if (u) {
        if (typeof o == "function") {
          var d = o;
          o = function() {
            var U = Iy(v);
            d.call(U);
          };
        }
        var v = gR(
          t,
          o,
          e,
          Rs,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          FR
        );
        e._reactRootContainer = v, Dg(v.current, e);
        var g = e.nodeType === Mn ? e.parentNode : e;
        return Lh(g), wu(), v;
      } else {
        for (var _; _ = e.lastChild; )
          e.removeChild(_);
        if (typeof o == "function") {
          var w = o;
          o = function() {
            var U = Iy(R);
            w.call(U);
          };
        }
        var R = mR(
          e,
          Rs,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          FR
        );
        e._reactRootContainer = R, Dg(R.current, e);
        var j = e.nodeType === Mn ? e.parentNode : e;
        return Lh(j), wu(function() {
          wv(t, R, i, o);
        }), R;
      }
    }
    function FL(e, t) {
      e !== null && typeof e != "function" && E("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function $y(e, t, i, o, u) {
      IR(i), FL(u === void 0 ? null : u, "render");
      var d = i._reactRootContainer, v;
      if (!d)
        v = IL(i, t, e, u, o);
      else {
        if (v = d, typeof u == "function") {
          var g = u;
          u = function() {
            var _ = Iy(v);
            g.call(_);
          };
        }
        wv(t, v, e, u);
      }
      return Iy(v);
    }
    function HL(e) {
      {
        var t = jL.current;
        if (t !== null && t.stateNode !== null) {
          var i = t.stateNode._warnedAboutRefsInRender;
          i || E("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", It(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === si ? e : wL(e, "findDOMNode");
    }
    function $L(e, t, i) {
      if (E("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Rv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var o = Bh(t) && t._reactRootContainer === void 0;
        o && E("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return $y(null, e, t, !0, i);
    }
    function VL(e, t, i) {
      if (E("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Rv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var o = Bh(t) && t._reactRootContainer === void 0;
        o && E("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return $y(null, e, t, !1, i);
    }
    function BL(e, t, i, o) {
      if (E("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Rv(i))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !Ku(e))
        throw new Error("parentComponent must be a valid React Component");
      return $y(e, t, i, !1, o);
    }
    function YL(e) {
      if (!Rv(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Bh(e) && e._reactRootContainer === void 0;
        t && E("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var i = q0(e), o = i && !Ts(i);
          o && E("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return wu(function() {
          $y(null, null, e, !1, function() {
            e._reactRootContainer = null, Ub(e);
          });
        }), !0;
      } else {
        {
          var u = q0(e), d = !!(u && Ts(u)), v = e.nodeType === si && Rv(e.parentNode) && !!e.parentNode._reactRootContainer;
          d && E("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", v ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    cs(RL), XE(xL), hd(DL), Xm(ia), qm($r), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && E("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Vp(KD), Pf(D0, Pk, wu);
    function WL(e, t) {
      var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Hy(t))
        throw new Error("Target container is not a DOM element.");
      return TL(e, t, null, i);
    }
    function GL(e, t, i, o) {
      return BL(e, t, i, o);
    }
    var Z0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Ts, Pd, Og, Gu, Ql, D0]
    };
    function KL(e, t) {
      return Z0.usingClientEntryPoint || E('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), zL(e, t);
    }
    function QL(e, t, i) {
      return Z0.usingClientEntryPoint || E('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), PL(e, t, i);
    }
    function XL(e) {
      return Qw() && E("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), wu(e);
    }
    var qL = ML({
      findFiberByHostInstance: Jc,
      bundleType: 1,
      version: Y0,
      rendererPackageName: "react-dom"
    });
    if (!qL && Sn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var HR = window.location.protocol;
      /^(https?|file):$/.test(HR) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (HR === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    ha.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Z0, ha.createPortal = WL, ha.createRoot = KL, ha.findDOMNode = HL, ha.flushSync = XL, ha.hydrate = $L, ha.hydrateRoot = QL, ha.render = VL, ha.unmountComponentAtNode = YL, ha.unstable_batchedUpdates = D0, ha.unstable_renderSubtreeIntoContainer = GL, ha.version = Y0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), ha;
}
var va = {};
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var XR;
function dM() {
  if (XR)
    return va;
  XR = 1;
  var c = Pe, a = B1();
  function s(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++)
      r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var p = /* @__PURE__ */ new Set(), y = {};
  function C(n, r) {
    T(n, r), T(n + "Capture", r);
  }
  function T(n, r) {
    for (y[n] = r, n = 0; n < r.length; n++)
      p.add(r[n]);
  }
  var E = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), O = Object.prototype.hasOwnProperty, k = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, D = {}, M = {};
  function I(n) {
    return O.call(M, n) ? !0 : O.call(D, n) ? !1 : k.test(n) ? M[n] = !0 : (D[n] = !0, !1);
  }
  function H(n, r, l, f) {
    if (l !== null && l.type === 0)
      return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return f ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function B(n, r, l, f) {
    if (r === null || typeof r > "u" || H(n, r, l, f))
      return !0;
    if (f)
      return !1;
    if (l !== null)
      switch (l.type) {
        case 3:
          return !r;
        case 4:
          return r === !1;
        case 5:
          return isNaN(r);
        case 6:
          return isNaN(r) || 1 > r;
      }
    return !1;
  }
  function X(n, r, l, f, h, m, b) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = f, this.attributeNamespace = h, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = m, this.removeEmptyString = b;
  }
  var pe = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    pe[n] = new X(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    pe[r] = new X(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    pe[n] = new X(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    pe[n] = new X(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    pe[n] = new X(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    pe[n] = new X(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    pe[n] = new X(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    pe[n] = new X(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    pe[n] = new X(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var we = /[\-:]([a-z])/g;
  function ze(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      we,
      ze
    );
    pe[r] = new X(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(we, ze);
    pe[r] = new X(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(we, ze);
    pe[r] = new X(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    pe[n] = new X(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), pe.xlinkHref = new X("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    pe[n] = new X(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function ge(n, r, l, f) {
    var h = pe.hasOwnProperty(r) ? pe[r] : null;
    (h !== null ? h.type !== 0 : f || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (B(r, l, h, f) && (l = null), f || h === null ? I(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : h.mustUseProperty ? n[h.propertyName] = l === null ? h.type === 3 ? !1 : "" : l : (r = h.attributeName, f = h.attributeNamespace, l === null ? n.removeAttribute(r) : (h = h.type, l = h === 3 || h === 4 && l === !0 ? "" : "" + l, f ? n.setAttributeNS(f, r, l) : n.setAttribute(r, l))));
  }
  var ae = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ce = Symbol.for("react.element"), oe = Symbol.for("react.portal"), Ne = Symbol.for("react.fragment"), De = Symbol.for("react.strict_mode"), tt = Symbol.for("react.profiler"), vt = Symbol.for("react.provider"), ot = Symbol.for("react.context"), at = Symbol.for("react.forward_ref"), ct = Symbol.for("react.suspense"), je = Symbol.for("react.suspense_list"), Ze = Symbol.for("react.memo"), qe = Symbol.for("react.lazy"), We = Symbol.for("react.offscreen"), ee = Symbol.iterator;
  function be(n) {
    return n === null || typeof n != "object" ? null : (n = ee && n[ee] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var L = Object.assign, ne;
  function Re(n) {
    if (ne === void 0)
      try {
        throw Error();
      } catch (l) {
        var r = l.stack.trim().match(/\n( *(at )?)/);
        ne = r && r[1] || "";
      }
    return `
` + ne + n;
  }
  var Je = !1;
  function Qe(n, r) {
    if (!n || Je)
      return "";
    Je = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r)
        if (r = function() {
          throw Error();
        }, Object.defineProperty(r.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(r, []);
          } catch (Q) {
            var f = Q;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (Q) {
            f = Q;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (Q) {
          f = Q;
        }
        n();
      }
    } catch (Q) {
      if (Q && f && typeof Q.stack == "string") {
        for (var h = Q.stack.split(`
`), m = f.stack.split(`
`), b = h.length - 1, x = m.length - 1; 1 <= b && 0 <= x && h[b] !== m[x]; )
          x--;
        for (; 1 <= b && 0 <= x; b--, x--)
          if (h[b] !== m[x]) {
            if (b !== 1 || x !== 1)
              do
                if (b--, x--, 0 > x || h[b] !== m[x]) {
                  var z = `
` + h[b].replace(" at new ", " at ");
                  return n.displayName && z.includes("<anonymous>") && (z = z.replace("<anonymous>", n.displayName)), z;
                }
              while (1 <= b && 0 <= x);
            break;
          }
      }
    } finally {
      Je = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? Re(n) : "";
  }
  function gt(n) {
    switch (n.tag) {
      case 5:
        return Re(n.type);
      case 16:
        return Re("Lazy");
      case 13:
        return Re("Suspense");
      case 19:
        return Re("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Qe(n.type, !1), n;
      case 11:
        return n = Qe(n.type.render, !1), n;
      case 1:
        return n = Qe(n.type, !0), n;
      default:
        return "";
    }
  }
  function Et(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case Ne:
        return "Fragment";
      case oe:
        return "Portal";
      case tt:
        return "Profiler";
      case De:
        return "StrictMode";
      case ct:
        return "Suspense";
      case je:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case ot:
          return (n.displayName || "Context") + ".Consumer";
        case vt:
          return (n._context.displayName || "Context") + ".Provider";
        case at:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case Ze:
          return r = n.displayName || null, r !== null ? r : Et(n.type) || "Memo";
        case qe:
          r = n._payload, n = n._init;
          try {
            return Et(n(r));
          } catch {
          }
      }
    return null;
  }
  function wt(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Et(r);
      case 8:
        return r === De ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function")
          return r.displayName || r.name || null;
        if (typeof r == "string")
          return r;
    }
    return null;
  }
  function mt(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function Zt(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function ir(n) {
    var r = Zt(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), f = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var h = l.get, m = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return h.call(this);
      }, set: function(b) {
        f = "" + b, m.call(this, b);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return f;
      }, setValue: function(b) {
        f = "" + b;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Hn(n) {
    n._valueTracker || (n._valueTracker = ir(n));
  }
  function Mr(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var l = r.getValue(), f = "";
    return n && (f = Zt(n) ? n.checked ? "true" : "false" : n.value), n = f, n !== l ? (r.setValue(n), !0) : !1;
  }
  function ar(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Sn(n, r) {
    var l = r.checked;
    return L({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function or(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, f = r.checked != null ? r.checked : r.defaultChecked;
    l = mt(r.value != null ? r.value : l), n._wrapperState = { initialChecked: f, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function kn(n, r) {
    r = r.checked, r != null && ge(n, "checked", r, !1);
  }
  function wn(n, r) {
    kn(n, r);
    var l = mt(r.value), f = r.type;
    if (l != null)
      f === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (f === "submit" || f === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Sr(n, r.type, l) : r.hasOwnProperty("defaultValue") && Sr(n, r.type, mt(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Ln(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var f = r.type;
      if (!(f !== "submit" && f !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function Sr(n, r, l) {
    (r !== "number" || ar(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var Cn = Array.isArray;
  function bn(n, r, l, f) {
    if (n = n.options, r) {
      r = {};
      for (var h = 0; h < l.length; h++)
        r["$" + l[h]] = !0;
      for (l = 0; l < n.length; l++)
        h = r.hasOwnProperty("$" + n[l].value), n[l].selected !== h && (n[l].selected = h), h && f && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + mt(l), r = null, h = 0; h < n.length; h++) {
        if (n[h].value === l) {
          n[h].selected = !0, f && (n[h].defaultSelected = !0);
          return;
        }
        r !== null || n[h].disabled || (r = n[h]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function zr(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(s(91));
    return L({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Ur(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null)
          throw Error(s(92));
        if (Cn(l)) {
          if (1 < l.length)
            throw Error(s(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: mt(l) };
  }
  function qn(n, r) {
    var l = mt(r.value), f = mt(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), f != null && (n.defaultValue = "" + f);
  }
  function Pr(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Zn(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function dr(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Zn(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var ln, Ri = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, f, h) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, f, h);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (ln = ln || document.createElement("div"), ln.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = ln.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function xi(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var Di = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Se = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Di).forEach(function(n) {
    Se.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), Di[r] = Di[n];
    });
  });
  function Xe(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || Di.hasOwnProperty(n) && Di[n] ? ("" + r).trim() : r + "px";
  }
  function xt(n, r) {
    n = n.style;
    for (var l in r)
      if (r.hasOwnProperty(l)) {
        var f = l.indexOf("--") === 0, h = Xe(l, r[l], f);
        l === "float" && (l = "cssFloat"), f ? n.setProperty(l, h) : n[l] = h;
      }
  }
  var Kt = L({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function $t(n, r) {
    if (r) {
      if (Kt[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(s(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(s(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(s(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(s(62));
    }
  }
  function $n(n, r) {
    if (n.indexOf("-") === -1)
      return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Rn = null;
  function jr(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Jt = null, pr = null, Qt = null;
  function cn(n) {
    if (n = Va(n)) {
      if (typeof Jt != "function")
        throw Error(s(280));
      var r = n.stateNode;
      r && (r = jf(r), Jt(n.stateNode, n.type, r));
    }
  }
  function ya(n) {
    pr ? Qt ? Qt.push(n) : Qt = [n] : pr = n;
  }
  function Wi() {
    if (pr) {
      var n = pr, r = Qt;
      if (Qt = pr = null, cn(n), r)
        for (n = 0; n < r.length; n++)
          cn(r[n]);
    }
  }
  function Ko(n, r) {
    return n(r);
  }
  function jl() {
  }
  var Il = !1;
  function Qo(n, r, l) {
    if (Il)
      return n(r, l);
    Il = !0;
    try {
      return Ko(n, r, l);
    } finally {
      Il = !1, (pr !== null || Qt !== null) && (jl(), Wi());
    }
  }
  function Ea(n, r) {
    var l = n.stateNode;
    if (l === null)
      return null;
    var f = jf(l);
    if (f === null)
      return null;
    l = f[r];
    e:
      switch (r) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (f = !f.disabled) || (n = n.type, f = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !f;
          break e;
        default:
          n = !1;
      }
    if (n)
      return null;
    if (l && typeof l != "function")
      throw Error(s(231, r, typeof l));
    return l;
  }
  var _a = !1;
  if (E)
    try {
      var Gi = {};
      Object.defineProperty(Gi, "passive", { get: function() {
        _a = !0;
      } }), window.addEventListener("test", Gi, Gi), window.removeEventListener("test", Gi, Gi);
    } catch {
      _a = !1;
    }
  function fo(n, r, l, f, h, m, b, x, z) {
    var Q = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, Q);
    } catch (se) {
      this.onError(se);
    }
  }
  var ri = !1, ii = null, Oi = !1, po = null, N = { onError: function(n) {
    ri = !0, ii = n;
  } };
  function ue(n, r, l, f, h, m, b, x, z) {
    ri = !1, ii = null, fo.apply(N, arguments);
  }
  function Ee(n, r, l, f, h, m, b, x, z) {
    if (ue.apply(this, arguments), ri) {
      if (ri) {
        var Q = ii;
        ri = !1, ii = null;
      } else
        throw Error(s(198));
      Oi || (Oi = !0, po = Q);
    }
  }
  function Te(n) {
    var r = n, l = n;
    if (n.alternate)
      for (; r.return; )
        r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function Nt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function zt(n) {
    if (Te(n) !== n)
      throw Error(s(188));
  }
  function Rt(n) {
    var r = n.alternate;
    if (!r) {
      if (r = Te(n), r === null)
        throw Error(s(188));
      return r !== n ? null : n;
    }
    for (var l = n, f = r; ; ) {
      var h = l.return;
      if (h === null)
        break;
      var m = h.alternate;
      if (m === null) {
        if (f = h.return, f !== null) {
          l = f;
          continue;
        }
        break;
      }
      if (h.child === m.child) {
        for (m = h.child; m; ) {
          if (m === l)
            return zt(h), n;
          if (m === f)
            return zt(h), r;
          m = m.sibling;
        }
        throw Error(s(188));
      }
      if (l.return !== f.return)
        l = h, f = m;
      else {
        for (var b = !1, x = h.child; x; ) {
          if (x === l) {
            b = !0, l = h, f = m;
            break;
          }
          if (x === f) {
            b = !0, f = h, l = m;
            break;
          }
          x = x.sibling;
        }
        if (!b) {
          for (x = m.child; x; ) {
            if (x === l) {
              b = !0, l = m, f = h;
              break;
            }
            if (x === f) {
              b = !0, f = m, l = h;
              break;
            }
            x = x.sibling;
          }
          if (!b)
            throw Error(s(189));
        }
      }
      if (l.alternate !== f)
        throw Error(s(190));
    }
    if (l.tag !== 3)
      throw Error(s(188));
    return l.stateNode.current === l ? n : r;
  }
  function et(n) {
    return n = Rt(n), n !== null ? Jn(n) : null;
  }
  function Jn(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = Jn(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var fn = a.unstable_scheduleCallback, dn = a.unstable_cancelCallback, Ir = a.unstable_shouldYield, Pa = a.unstable_requestPaint, pn = a.unstable_now, ai = a.unstable_getCurrentPriorityLevel, Xs = a.unstable_ImmediatePriority, ja = a.unstable_UserBlockingPriority, Dt = a.unstable_NormalPriority, Fl = a.unstable_LowPriority, ho = a.unstable_IdlePriority, Xo = null, oi = null;
  function qs(n) {
    if (oi && typeof oi.onCommitFiberRoot == "function")
      try {
        oi.onCommitFiberRoot(Xo, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var Br = Math.clz32 ? Math.clz32 : ec, Zs = Math.log, Js = Math.LN2;
  function ec(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Zs(n) / Js | 0) | 0;
  }
  var Hl = 64, zu = 4194304;
  function vo(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function Ia(n, r) {
    var l = n.pendingLanes;
    if (l === 0)
      return 0;
    var f = 0, h = n.suspendedLanes, m = n.pingedLanes, b = l & 268435455;
    if (b !== 0) {
      var x = b & ~h;
      x !== 0 ? f = vo(x) : (m &= b, m !== 0 && (f = vo(m)));
    } else
      b = l & ~h, b !== 0 ? f = vo(b) : m !== 0 && (f = vo(m));
    if (f === 0)
      return 0;
    if (r !== 0 && r !== f && !(r & h) && (h = f & -f, m = r & -r, h >= m || h === 16 && (m & 4194240) !== 0))
      return r;
    if (f & 4 && (f |= l & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= f; 0 < r; )
        l = 31 - Br(r), h = 1 << l, f |= n[l], r &= ~h;
    return f;
  }
  function Ki(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function qo(n, r) {
    for (var l = n.suspendedLanes, f = n.pingedLanes, h = n.expirationTimes, m = n.pendingLanes; 0 < m; ) {
      var b = 31 - Br(m), x = 1 << b, z = h[b];
      z === -1 ? (!(x & l) || x & f) && (h[b] = Ki(x, r)) : z <= r && (n.expiredLanes |= x), m &= ~x;
    }
  }
  function Fa(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function $l() {
    var n = Hl;
    return Hl <<= 1, !(Hl & 4194240) && (Hl = 64), n;
  }
  function Vl(n) {
    for (var r = [], l = 0; 31 > l; l++)
      r.push(n);
    return r;
  }
  function Zo(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Br(r), n[r] = l;
  }
  function tc(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var f = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var h = 31 - Br(l), m = 1 << h;
      r[h] = 0, f[h] = -1, n[h] = -1, l &= ~m;
    }
  }
  function nc(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var f = 31 - Br(l), h = 1 << f;
      h & r | n[f] & r && (n[f] |= r), l &= ~h;
    }
  }
  var Mt = 0;
  function rc(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Uu, Jo, ic, It, Pu, Bl = !1, yt = [], Sa = null, xn = null, li = null, Qi = /* @__PURE__ */ new Map(), el = /* @__PURE__ */ new Map(), mn = [], Dn = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function ac(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Sa = null;
        break;
      case "dragenter":
      case "dragleave":
        xn = null;
        break;
      case "mouseover":
      case "mouseout":
        li = null;
        break;
      case "pointerover":
      case "pointerout":
        Qi.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        el.delete(r.pointerId);
    }
  }
  function Cr(n, r, l, f, h, m) {
    return n === null || n.nativeEvent !== m ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: f, nativeEvent: m, targetContainers: [h] }, r !== null && (r = Va(r), r !== null && Jo(r)), n) : (n.eventSystemFlags |= f, r = n.targetContainers, h !== null && r.indexOf(h) === -1 && r.push(h), n);
  }
  function ui(n, r, l, f, h) {
    switch (r) {
      case "focusin":
        return Sa = Cr(Sa, n, r, l, f, h), !0;
      case "dragenter":
        return xn = Cr(xn, n, r, l, f, h), !0;
      case "mouseover":
        return li = Cr(li, n, r, l, f, h), !0;
      case "pointerover":
        var m = h.pointerId;
        return Qi.set(m, Cr(Qi.get(m) || null, n, r, l, f, h)), !0;
      case "gotpointercapture":
        return m = h.pointerId, el.set(m, Cr(el.get(m) || null, n, r, l, f, h)), !0;
    }
    return !1;
  }
  function Ca(n) {
    var r = Ro(n.target);
    if (r !== null) {
      var l = Te(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = Nt(l), r !== null) {
            n.blockedOn = r, Pu(n.priority, function() {
              ic(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function ju(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = Hu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var f = new l.constructor(l.type, l);
        Rn = f, l.target.dispatchEvent(f), Rn = null;
      } else
        return r = Va(l), r !== null && Jo(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function Yl(n, r, l) {
    ju(n) && l.delete(r);
  }
  function Wl() {
    Bl = !1, Sa !== null && ju(Sa) && (Sa = null), xn !== null && ju(xn) && (xn = null), li !== null && ju(li) && (li = null), Qi.forEach(Yl), el.forEach(Yl);
  }
  function tl(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Bl || (Bl = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, Wl)));
  }
  function Xi(n) {
    function r(h) {
      return tl(h, n);
    }
    if (0 < yt.length) {
      tl(yt[0], n);
      for (var l = 1; l < yt.length; l++) {
        var f = yt[l];
        f.blockedOn === n && (f.blockedOn = null);
      }
    }
    for (Sa !== null && tl(Sa, n), xn !== null && tl(xn, n), li !== null && tl(li, n), Qi.forEach(r), el.forEach(r), l = 0; l < mn.length; l++)
      f = mn[l], f.blockedOn === n && (f.blockedOn = null);
    for (; 0 < mn.length && (l = mn[0], l.blockedOn === null); )
      Ca(l), l.blockedOn === null && mn.shift();
  }
  var mo = ae.ReactCurrentBatchConfig, Iu = !0;
  function go(n, r, l, f) {
    var h = Mt, m = mo.transition;
    mo.transition = null;
    try {
      Mt = 1, Ha(n, r, l, f);
    } finally {
      Mt = h, mo.transition = m;
    }
  }
  function Fu(n, r, l, f) {
    var h = Mt, m = mo.transition;
    mo.transition = null;
    try {
      Mt = 4, Ha(n, r, l, f);
    } finally {
      Mt = h, mo.transition = m;
    }
  }
  function Ha(n, r, l, f) {
    if (Iu) {
      var h = Hu(n, r, l, f);
      if (h === null)
        Vp(n, r, f, yo, l), ac(n, f);
      else if (ui(h, n, r, l, f))
        f.stopPropagation();
      else if (ac(n, f), r & 4 && -1 < Dn.indexOf(n)) {
        for (; h !== null; ) {
          var m = Va(h);
          if (m !== null && Uu(m), m = Hu(n, r, l, f), m === null && Vp(n, r, f, yo, l), m === h)
            break;
          h = m;
        }
        h !== null && f.stopPropagation();
      } else
        Vp(n, r, f, null, l);
    }
  }
  var yo = null;
  function Hu(n, r, l, f) {
    if (yo = null, n = jr(f), n = Ro(n), n !== null)
      if (r = Te(n), r === null)
        n = null;
      else if (l = r.tag, l === 13) {
        if (n = Nt(r), n !== null)
          return n;
        n = null;
      } else if (l === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return yo = n, null;
  }
  function oc(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (ai()) {
          case Xs:
            return 1;
          case ja:
            return 4;
          case Dt:
          case Fl:
            return 16;
          case ho:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ba = null, $u = null, S = null;
  function A() {
    if (S)
      return S;
    var n, r = $u, l = r.length, f, h = "value" in ba ? ba.value : ba.textContent, m = h.length;
    for (n = 0; n < l && r[n] === h[n]; n++)
      ;
    var b = l - n;
    for (f = 1; f <= b && r[l - f] === h[m - f]; f++)
      ;
    return S = h.slice(n, 1 < f ? 1 - f : void 0);
  }
  function W(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function q() {
    return !0;
  }
  function he() {
    return !1;
  }
  function $e(n) {
    function r(l, f, h, m, b) {
      this._reactName = l, this._targetInst = h, this.type = f, this.nativeEvent = m, this.target = b, this.currentTarget = null;
      for (var x in n)
        n.hasOwnProperty(x) && (l = n[x], this[x] = l ? l(m) : m[x]);
      return this.isDefaultPrevented = (m.defaultPrevented != null ? m.defaultPrevented : m.returnValue === !1) ? q : he, this.isPropagationStopped = he, this;
    }
    return L(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = q);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = q);
    }, persist: function() {
    }, isPersistent: q }), r;
  }
  var ke = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, pt = $e(ke), Ot = L({}, ke, { view: 0, detail: 0 }), Xt = $e(Ot), en, tn, nn, gn = L({}, Ot, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Df, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== nn && (nn && n.type === "mousemove" ? (en = n.screenX - nn.screenX, tn = n.screenY - nn.screenY) : tn = en = 0, nn = n), en);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : tn;
  } }), Ft = $e(gn), nl = L({}, gn, { dataTransfer: 0 }), Vu = $e(nl), lc = L({}, Ot, { relatedTarget: 0 }), uc = $e(lc), Eo = L({}, ke, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), sc = $e(Eo), cc = L({}, ke, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Np = $e(cc), DE = L({}, ke, { data: 0 }), em = $e(DE), tm = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, kp = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, nm = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function rm(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = nm[n]) ? !!r[n] : !1;
  }
  function Df() {
    return rm;
  }
  var OE = L({}, Ot, { key: function(n) {
    if (n.key) {
      var r = tm[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = W(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? kp[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Df, charCode: function(n) {
    return n.type === "keypress" ? W(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? W(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), _o = $e(OE), AE = L({}, gn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Of = $e(AE), Lp = L({}, Ot, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Df }), Mp = $e(Lp), NE = L({}, ke, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Af = $e(NE), im = L({}, gn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), si = $e(im), So = [9, 13, 27, 32], Mn = E && "CompositionEvent" in window, Ai = null;
  E && "documentMode" in document && (Ai = document.documentMode);
  var zp = E && "TextEvent" in window && !Ai, fc = E && (!Mn || Ai && 8 < Ai && 11 >= Ai), am = " ", Bu = !1;
  function om(n, r) {
    switch (n) {
      case "keyup":
        return So.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function lm(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var rl = !1;
  function kE(n, r) {
    switch (n) {
      case "compositionend":
        return lm(r);
      case "keypress":
        return r.which !== 32 ? null : (Bu = !0, am);
      case "textInput":
        return n = r.data, n === am && Bu ? null : n;
      default:
        return null;
    }
  }
  function LE(n, r) {
    if (rl)
      return n === "compositionend" || !Mn && om(n, r) ? (n = A(), S = $u = ba = null, rl = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length)
            return r.char;
          if (r.which)
            return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return fc && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var ME = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Up(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!ME[n.type] : r === "textarea";
  }
  function um(n, r, l, f) {
    ya(f), r = Uf(r, "onChange"), 0 < r.length && (l = new pt("onChange", "change", null, l, f), n.push({ event: l, listeners: r }));
  }
  var dc = null, pc = null;
  function sm(n) {
    wm(n, 0);
  }
  function Co(n) {
    var r = Ku(n);
    if (Mr(r))
      return n;
  }
  function Pp(n, r) {
    if (n === "change")
      return r;
  }
  var jp = !1;
  if (E) {
    var Nf;
    if (E) {
      var Ip = "oninput" in document;
      if (!Ip) {
        var cm = document.createElement("div");
        cm.setAttribute("oninput", "return;"), Ip = typeof cm.oninput == "function";
      }
      Nf = Ip;
    } else
      Nf = !1;
    jp = Nf && (!document.documentMode || 9 < document.documentMode);
  }
  function fm() {
    dc && (dc.detachEvent("onpropertychange", dm), pc = dc = null);
  }
  function dm(n) {
    if (n.propertyName === "value" && Co(pc)) {
      var r = [];
      um(r, pc, n, jr(n)), Qo(sm, r);
    }
  }
  function zE(n, r, l) {
    n === "focusin" ? (fm(), dc = r, pc = l, dc.attachEvent("onpropertychange", dm)) : n === "focusout" && fm();
  }
  function UE(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return Co(pc);
  }
  function PE(n, r) {
    if (n === "click")
      return Co(r);
  }
  function jE(n, r) {
    if (n === "input" || n === "change")
      return Co(r);
  }
  function pm(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Ta = typeof Object.is == "function" ? Object.is : pm;
  function Yu(n, r) {
    if (Ta(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var l = Object.keys(n), f = Object.keys(r);
    if (l.length !== f.length)
      return !1;
    for (f = 0; f < l.length; f++) {
      var h = l[f];
      if (!O.call(r, h) || !Ta(n[h], r[h]))
        return !1;
    }
    return !0;
  }
  function hm(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function vm(n, r) {
    var l = hm(n);
    n = 0;
    for (var f; l; ) {
      if (l.nodeType === 3) {
        if (f = n + l.textContent.length, n <= r && f >= r)
          return { node: l, offset: r - n };
        n = f;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = hm(l);
    }
  }
  function mm(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? mm(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function gm() {
    for (var n = window, r = ar(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l)
        n = r.contentWindow;
      else
        break;
      r = ar(n.document);
    }
    return r;
  }
  function hc(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Gl(n) {
    var r = gm(), l = n.focusedElem, f = n.selectionRange;
    if (r !== l && l && l.ownerDocument && mm(l.ownerDocument.documentElement, l)) {
      if (f !== null && hc(l)) {
        if (r = f.start, n = f.end, n === void 0 && (n = r), "selectionStart" in l)
          l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var h = l.textContent.length, m = Math.min(f.start, h);
          f = f.end === void 0 ? m : Math.min(f.end, h), !n.extend && m > f && (h = f, f = m, m = h), h = vm(l, m);
          var b = vm(
            l,
            f
          );
          h && b && (n.rangeCount !== 1 || n.anchorNode !== h.node || n.anchorOffset !== h.offset || n.focusNode !== b.node || n.focusOffset !== b.offset) && (r = r.createRange(), r.setStart(h.node, h.offset), n.removeAllRanges(), m > f ? (n.addRange(r), n.extend(b.node, b.offset)) : (r.setEnd(b.node, b.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++)
        n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var kf = E && "documentMode" in document && 11 >= document.documentMode, Kl = null, il = null, vc = null, Fp = !1;
  function ym(n, r, l) {
    var f = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Fp || Kl == null || Kl !== ar(f) || (f = Kl, "selectionStart" in f && hc(f) ? f = { start: f.selectionStart, end: f.selectionEnd } : (f = (f.ownerDocument && f.ownerDocument.defaultView || window).getSelection(), f = { anchorNode: f.anchorNode, anchorOffset: f.anchorOffset, focusNode: f.focusNode, focusOffset: f.focusOffset }), vc && Yu(vc, f) || (vc = f, f = Uf(il, "onSelect"), 0 < f.length && (r = new pt("onSelect", "select", null, r, l), n.push({ event: r, listeners: f }), r.target = Kl)));
  }
  function Lf(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var Wu = { animationend: Lf("Animation", "AnimationEnd"), animationiteration: Lf("Animation", "AnimationIteration"), animationstart: Lf("Animation", "AnimationStart"), transitionend: Lf("Transition", "TransitionEnd") }, Mf = {}, Em = {};
  E && (Em = document.createElement("div").style, "AnimationEvent" in window || (delete Wu.animationend.animation, delete Wu.animationiteration.animation, delete Wu.animationstart.animation), "TransitionEvent" in window || delete Wu.transitionend.transition);
  function mc(n) {
    if (Mf[n])
      return Mf[n];
    if (!Wu[n])
      return n;
    var r = Wu[n], l;
    for (l in r)
      if (r.hasOwnProperty(l) && l in Em)
        return Mf[n] = r[l];
    return n;
  }
  var Fr = mc("animationend"), Hp = mc("animationiteration"), _m = mc("animationstart"), Sm = mc("transitionend"), Cm = /* @__PURE__ */ new Map(), bm = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function al(n, r) {
    Cm.set(n, r), C(r, [n]);
  }
  for (var zf = 0; zf < bm.length; zf++) {
    var gc = bm[zf], yc = gc.toLowerCase(), IE = gc[0].toUpperCase() + gc.slice(1);
    al(yc, "on" + IE);
  }
  al(Fr, "onAnimationEnd"), al(Hp, "onAnimationIteration"), al(_m, "onAnimationStart"), al("dblclick", "onDoubleClick"), al("focusin", "onFocus"), al("focusout", "onBlur"), al(Sm, "onTransitionEnd"), T("onMouseEnter", ["mouseout", "mouseover"]), T("onMouseLeave", ["mouseout", "mouseover"]), T("onPointerEnter", ["pointerout", "pointerover"]), T("onPointerLeave", ["pointerout", "pointerover"]), C("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), C("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), C("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), C("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), C("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), C("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var bo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), FE = new Set("cancel close invalid load scroll toggle".split(" ").concat(bo));
  function Tm(n, r, l) {
    var f = n.type || "unknown-event";
    n.currentTarget = l, Ee(f, r, void 0, n), n.currentTarget = null;
  }
  function wm(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var f = n[l], h = f.event;
      f = f.listeners;
      e: {
        var m = void 0;
        if (r)
          for (var b = f.length - 1; 0 <= b; b--) {
            var x = f[b], z = x.instance, Q = x.currentTarget;
            if (x = x.listener, z !== m && h.isPropagationStopped())
              break e;
            Tm(h, x, Q), m = z;
          }
        else
          for (b = 0; b < f.length; b++) {
            if (x = f[b], z = x.instance, Q = x.currentTarget, x = x.listener, z !== m && h.isPropagationStopped())
              break e;
            Tm(h, x, Q), m = z;
          }
      }
    }
    if (Oi)
      throw n = po, Oi = !1, po = null, n;
  }
  function un(n, r) {
    var l = r[qp];
    l === void 0 && (l = r[qp] = /* @__PURE__ */ new Set());
    var f = n + "__bubble";
    l.has(f) || ($p(r, n, 2, !1), l.add(f));
  }
  function Ec(n, r, l) {
    var f = 0;
    r && (f |= 4), $p(l, n, f, r);
  }
  var To = "_reactListening" + Math.random().toString(36).slice(2);
  function $a(n) {
    if (!n[To]) {
      n[To] = !0, p.forEach(function(l) {
        l !== "selectionchange" && (FE.has(l) || Ec(l, !1, n), Ec(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[To] || (r[To] = !0, Ec("selectionchange", !1, r));
    }
  }
  function $p(n, r, l, f) {
    switch (oc(r)) {
      case 1:
        var h = go;
        break;
      case 4:
        h = Fu;
        break;
      default:
        h = Ha;
    }
    l = h.bind(null, r, l, n), h = void 0, !_a || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (h = !0), f ? h !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: h }) : n.addEventListener(r, l, !0) : h !== void 0 ? n.addEventListener(r, l, { passive: h }) : n.addEventListener(r, l, !1);
  }
  function Vp(n, r, l, f, h) {
    var m = f;
    if (!(r & 1) && !(r & 2) && f !== null)
      e:
        for (; ; ) {
          if (f === null)
            return;
          var b = f.tag;
          if (b === 3 || b === 4) {
            var x = f.stateNode.containerInfo;
            if (x === h || x.nodeType === 8 && x.parentNode === h)
              break;
            if (b === 4)
              for (b = f.return; b !== null; ) {
                var z = b.tag;
                if ((z === 3 || z === 4) && (z = b.stateNode.containerInfo, z === h || z.nodeType === 8 && z.parentNode === h))
                  return;
                b = b.return;
              }
            for (; x !== null; ) {
              if (b = Ro(x), b === null)
                return;
              if (z = b.tag, z === 5 || z === 6) {
                f = m = b;
                continue e;
              }
              x = x.parentNode;
            }
          }
          f = f.return;
        }
    Qo(function() {
      var Q = m, se = jr(l), fe = [];
      e: {
        var le = Cm.get(n);
        if (le !== void 0) {
          var Oe = pt, Ie = n;
          switch (n) {
            case "keypress":
              if (W(l) === 0)
                break e;
            case "keydown":
            case "keyup":
              Oe = _o;
              break;
            case "focusin":
              Ie = "focus", Oe = uc;
              break;
            case "focusout":
              Ie = "blur", Oe = uc;
              break;
            case "beforeblur":
            case "afterblur":
              Oe = uc;
              break;
            case "click":
              if (l.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Oe = Ft;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Oe = Vu;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Oe = Mp;
              break;
            case Fr:
            case Hp:
            case _m:
              Oe = sc;
              break;
            case Sm:
              Oe = Af;
              break;
            case "scroll":
              Oe = Xt;
              break;
            case "wheel":
              Oe = si;
              break;
            case "copy":
            case "cut":
            case "paste":
              Oe = Np;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Oe = Of;
          }
          var Ve = (r & 4) !== 0, Kn = !Ve && n === "scroll", F = Ve ? le !== null ? le + "Capture" : null : le;
          Ve = [];
          for (var P = Q, Y; P !== null; ) {
            Y = P;
            var ve = Y.stateNode;
            if (Y.tag === 5 && ve !== null && (Y = ve, F !== null && (ve = Ea(P, F), ve != null && Ve.push(Gu(P, ve, Y)))), Kn)
              break;
            P = P.return;
          }
          0 < Ve.length && (le = new Oe(le, Ie, null, l, se), fe.push({ event: le, listeners: Ve }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (le = n === "mouseover" || n === "pointerover", Oe = n === "mouseout" || n === "pointerout", le && l !== Rn && (Ie = l.relatedTarget || l.fromElement) && (Ro(Ie) || Ie[wa]))
            break e;
          if ((Oe || le) && (le = se.window === se ? se : (le = se.ownerDocument) ? le.defaultView || le.parentWindow : window, Oe ? (Ie = l.relatedTarget || l.toElement, Oe = Q, Ie = Ie ? Ro(Ie) : null, Ie !== null && (Kn = Te(Ie), Ie !== Kn || Ie.tag !== 5 && Ie.tag !== 6) && (Ie = null)) : (Oe = null, Ie = Q), Oe !== Ie)) {
            if (Ve = Ft, ve = "onMouseLeave", F = "onMouseEnter", P = "mouse", (n === "pointerout" || n === "pointerover") && (Ve = Of, ve = "onPointerLeave", F = "onPointerEnter", P = "pointer"), Kn = Oe == null ? le : Ku(Oe), Y = Ie == null ? le : Ku(Ie), le = new Ve(ve, P + "leave", Oe, l, se), le.target = Kn, le.relatedTarget = Y, ve = null, Ro(se) === Q && (Ve = new Ve(F, P + "enter", Ie, l, se), Ve.target = Y, Ve.relatedTarget = Kn, ve = Ve), Kn = ve, Oe && Ie)
              t: {
                for (Ve = Oe, F = Ie, P = 0, Y = Ve; Y; Y = Ql(Y))
                  P++;
                for (Y = 0, ve = F; ve; ve = Ql(ve))
                  Y++;
                for (; 0 < P - Y; )
                  Ve = Ql(Ve), P--;
                for (; 0 < Y - P; )
                  F = Ql(F), Y--;
                for (; P--; ) {
                  if (Ve === F || F !== null && Ve === F.alternate)
                    break t;
                  Ve = Ql(Ve), F = Ql(F);
                }
                Ve = null;
              }
            else
              Ve = null;
            Oe !== null && Bp(fe, le, Oe, Ve, !1), Ie !== null && Kn !== null && Bp(fe, Kn, Ie, Ve, !0);
          }
        }
        e: {
          if (le = Q ? Ku(Q) : window, Oe = le.nodeName && le.nodeName.toLowerCase(), Oe === "select" || Oe === "input" && le.type === "file")
            var Ye = Pp;
          else if (Up(le))
            if (jp)
              Ye = jE;
            else {
              Ye = UE;
              var ut = zE;
            }
          else
            (Oe = le.nodeName) && Oe.toLowerCase() === "input" && (le.type === "checkbox" || le.type === "radio") && (Ye = PE);
          if (Ye && (Ye = Ye(n, Q))) {
            um(fe, Ye, l, se);
            break e;
          }
          ut && ut(n, le, Q), n === "focusout" && (ut = le._wrapperState) && ut.controlled && le.type === "number" && Sr(le, "number", le.value);
        }
        switch (ut = Q ? Ku(Q) : window, n) {
          case "focusin":
            (Up(ut) || ut.contentEditable === "true") && (Kl = ut, il = Q, vc = null);
            break;
          case "focusout":
            vc = il = Kl = null;
            break;
          case "mousedown":
            Fp = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Fp = !1, ym(fe, l, se);
            break;
          case "selectionchange":
            if (kf)
              break;
          case "keydown":
          case "keyup":
            ym(fe, l, se);
        }
        var Fe;
        if (Mn)
          e: {
            switch (n) {
              case "compositionstart":
                var ft = "onCompositionStart";
                break e;
              case "compositionend":
                ft = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ft = "onCompositionUpdate";
                break e;
            }
            ft = void 0;
          }
        else
          rl ? om(n, l) && (ft = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (ft = "onCompositionStart");
        ft && (fc && l.locale !== "ko" && (rl || ft !== "onCompositionStart" ? ft === "onCompositionEnd" && rl && (Fe = A()) : (ba = se, $u = "value" in ba ? ba.value : ba.textContent, rl = !0)), ut = Uf(Q, ft), 0 < ut.length && (ft = new em(ft, n, null, l, se), fe.push({ event: ft, listeners: ut }), Fe ? ft.data = Fe : (Fe = lm(l), Fe !== null && (ft.data = Fe)))), (Fe = zp ? kE(n, l) : LE(n, l)) && (Q = Uf(Q, "onBeforeInput"), 0 < Q.length && (se = new em("onBeforeInput", "beforeinput", null, l, se), fe.push({ event: se, listeners: Q }), se.data = Fe));
      }
      wm(fe, r);
    });
  }
  function Gu(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function Uf(n, r) {
    for (var l = r + "Capture", f = []; n !== null; ) {
      var h = n, m = h.stateNode;
      h.tag === 5 && m !== null && (h = m, m = Ea(n, l), m != null && f.unshift(Gu(n, m, h)), m = Ea(n, r), m != null && f.push(Gu(n, m, h))), n = n.return;
    }
    return f;
  }
  function Ql(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Bp(n, r, l, f, h) {
    for (var m = r._reactName, b = []; l !== null && l !== f; ) {
      var x = l, z = x.alternate, Q = x.stateNode;
      if (z !== null && z === f)
        break;
      x.tag === 5 && Q !== null && (x = Q, h ? (z = Ea(l, m), z != null && b.unshift(Gu(l, z, x))) : h || (z = Ea(l, m), z != null && b.push(Gu(l, z, x)))), l = l.return;
    }
    b.length !== 0 && n.push({ event: r, listeners: b });
  }
  var Rm = /\r\n?/g, Yp = /\u0000|\uFFFD/g;
  function xm(n) {
    return (typeof n == "string" ? n : "" + n).replace(Rm, `
`).replace(Yp, "");
  }
  function _c(n, r, l) {
    if (r = xm(r), xm(n) !== r && l)
      throw Error(s(425));
  }
  function Pf() {
  }
  var Wp = null, Gp = null;
  function Xl(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Sc = typeof setTimeout == "function" ? setTimeout : void 0, Cc = typeof clearTimeout == "function" ? clearTimeout : void 0, Kp = typeof Promise == "function" ? Promise : void 0, Dm = typeof queueMicrotask == "function" ? queueMicrotask : typeof Kp < "u" ? function(n) {
    return Kp.resolve(null).then(n).catch(Qp);
  } : Sc;
  function Qp(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Xp(n, r) {
    var l = r, f = 0;
    do {
      var h = l.nextSibling;
      if (n.removeChild(l), h && h.nodeType === 8)
        if (l = h.data, l === "/$") {
          if (f === 0) {
            n.removeChild(h), Xi(r);
            return;
          }
          f--;
        } else
          l !== "$" && l !== "$?" && l !== "$!" || f++;
      l = h;
    } while (l);
    Xi(r);
  }
  function Ni(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3)
        break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?")
          break;
        if (r === "/$")
          return null;
      }
    }
    return n;
  }
  function bc(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0)
            return n;
          r--;
        } else
          l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var wo = Math.random().toString(36).slice(2), qi = "__reactFiber$" + wo, Tc = "__reactProps$" + wo, wa = "__reactContainer$" + wo, qp = "__reactEvents$" + wo, HE = "__reactListeners$" + wo, $E = "__reactHandles$" + wo;
  function Ro(n) {
    var r = n[qi];
    if (r)
      return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[wa] || l[qi]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null)
          for (n = bc(n); n !== null; ) {
            if (l = n[qi])
              return l;
            n = bc(n);
          }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function Va(n) {
    return n = n[qi] || n[wa], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function Ku(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(s(33));
  }
  function jf(n) {
    return n[Tc] || null;
  }
  var nt = [], Ra = -1;
  function sn(n) {
    return { current: n };
  }
  function Be(n) {
    0 > Ra || (n.current = nt[Ra], nt[Ra] = null, Ra--);
  }
  function Vt(n, r) {
    Ra++, nt[Ra] = n.current, n.current = r;
  }
  var Zi = {}, hr = sn(Zi), _t = sn(!1), Yr = Zi;
  function ki(n, r) {
    var l = n.type.contextTypes;
    if (!l)
      return Zi;
    var f = n.stateNode;
    if (f && f.__reactInternalMemoizedUnmaskedChildContext === r)
      return f.__reactInternalMemoizedMaskedChildContext;
    var h = {}, m;
    for (m in l)
      h[m] = r[m];
    return f && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = h), h;
  }
  function er(n) {
    return n = n.childContextTypes, n != null;
  }
  function ci() {
    Be(_t), Be(hr);
  }
  function Ba(n, r, l) {
    if (hr.current !== Zi)
      throw Error(s(168));
    Vt(hr, r), Vt(_t, l);
  }
  function ol(n, r, l) {
    var f = n.stateNode;
    if (r = r.childContextTypes, typeof f.getChildContext != "function")
      return l;
    f = f.getChildContext();
    for (var h in f)
      if (!(h in r))
        throw Error(s(108, wt(n) || "Unknown", h));
    return L({}, l, f);
  }
  function ql(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Zi, Yr = hr.current, Vt(hr, n), Vt(_t, _t.current), !0;
  }
  function Om(n, r, l) {
    var f = n.stateNode;
    if (!f)
      throw Error(s(169));
    l ? (n = ol(n, r, Yr), f.__reactInternalMemoizedMergedChildContext = n, Be(_t), Be(hr), Vt(hr, n)) : Be(_t), Vt(_t, l);
  }
  var xo = null, ll = !1, br = !1;
  function If(n) {
    xo === null ? xo = [n] : xo.push(n);
  }
  function Am(n) {
    ll = !0, If(n);
  }
  function Ya() {
    if (!br && xo !== null) {
      br = !0;
      var n = 0, r = Mt;
      try {
        var l = xo;
        for (Mt = 1; n < l.length; n++) {
          var f = l[n];
          do
            f = f(!0);
          while (f !== null);
        }
        xo = null, ll = !1;
      } catch (h) {
        throw xo !== null && (xo = xo.slice(n + 1)), fn(Xs, Ya), h;
      } finally {
        Mt = r, br = !1;
      }
    }
    return null;
  }
  var Ji = [], ul = 0, ea = null, Zl = 0, fi = [], di = 0, xa = null, pi = 1, Tr = "";
  function Jl(n, r) {
    Ji[ul++] = Zl, Ji[ul++] = ea, ea = n, Zl = r;
  }
  function sl(n, r, l) {
    fi[di++] = pi, fi[di++] = Tr, fi[di++] = xa, xa = n;
    var f = pi;
    n = Tr;
    var h = 32 - Br(f) - 1;
    f &= ~(1 << h), l += 1;
    var m = 32 - Br(r) + h;
    if (30 < m) {
      var b = h - h % 5;
      m = (f & (1 << b) - 1).toString(32), f >>= b, h -= b, pi = 1 << 32 - Br(r) + h | l << h | f, Tr = m + n;
    } else
      pi = 1 << m | l << h | f, Tr = n;
  }
  function Ff(n) {
    n.return !== null && (Jl(n, 1), sl(n, 1, 0));
  }
  function Hf(n) {
    for (; n === ea; )
      ea = Ji[--ul], Ji[ul] = null, Zl = Ji[--ul], Ji[ul] = null;
    for (; n === xa; )
      xa = fi[--di], fi[di] = null, Tr = fi[--di], fi[di] = null, pi = fi[--di], fi[di] = null;
  }
  var Li = null, Mi = null, yn = !1, ta = null;
  function Zp(n, r) {
    var l = ua(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function Jp(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Li = n, Mi = Ni(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Li = n, Mi = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = xa !== null ? { id: pi, overflow: Tr } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = ua(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, Li = n, Mi = null, !0) : !1;
      default:
        return !1;
    }
  }
  function eh(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function $f(n) {
    if (yn) {
      var r = Mi;
      if (r) {
        var l = r;
        if (!Jp(n, r)) {
          if (eh(n))
            throw Error(s(418));
          r = Ni(l.nextSibling);
          var f = Li;
          r && Jp(n, r) ? Zp(f, l) : (n.flags = n.flags & -4097 | 2, yn = !1, Li = n);
        }
      } else {
        if (eh(n))
          throw Error(s(418));
        n.flags = n.flags & -4097 | 2, yn = !1, Li = n;
      }
    }
  }
  function th(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    Li = n;
  }
  function Vf(n) {
    if (n !== Li)
      return !1;
    if (!yn)
      return th(n), yn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Xl(n.type, n.memoizedProps)), r && (r = Mi)) {
      if (eh(n))
        throw Nm(), Error(s(418));
      for (; r; )
        Zp(n, r), r = Ni(r.nextSibling);
    }
    if (th(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(s(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                Mi = Ni(n.nextSibling);
                break e;
              }
              r--;
            } else
              l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Mi = null;
      }
    } else
      Mi = Li ? Ni(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Nm() {
    for (var n = Mi; n; )
      n = Ni(n.nextSibling);
  }
  function Qu() {
    Mi = Li = null, yn = !1;
  }
  function tr(n) {
    ta === null ? ta = [n] : ta.push(n);
  }
  var VE = ae.ReactCurrentBatchConfig;
  function hi(n, r) {
    if (n && n.defaultProps) {
      r = L({}, r), n = n.defaultProps;
      for (var l in n)
        r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  var Xu = sn(null), Wa = null, qu = null, wc = null;
  function nh() {
    wc = qu = Wa = null;
  }
  function rh(n) {
    var r = Xu.current;
    Be(Xu), n._currentValue = r;
  }
  function cl(n, r, l) {
    for (; n !== null; ) {
      var f = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, f !== null && (f.childLanes |= r)) : f !== null && (f.childLanes & r) !== r && (f.childLanes |= r), n === l)
        break;
      n = n.return;
    }
  }
  function Vn(n, r) {
    Wa = n, wc = qu = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (gi = !0), n.firstContext = null);
  }
  function me(n) {
    var r = n._currentValue;
    if (wc !== n)
      if (n = { context: n, memoizedValue: r, next: null }, qu === null) {
        if (Wa === null)
          throw Error(s(308));
        qu = n, Wa.dependencies = { lanes: 0, firstContext: n };
      } else
        qu = qu.next = n;
    return r;
  }
  var Hr = null;
  function zi(n) {
    Hr === null ? Hr = [n] : Hr.push(n);
  }
  function km(n, r, l, f) {
    var h = r.interleaved;
    return h === null ? (l.next = l, zi(r)) : (l.next = h.next, h.next = l), r.interleaved = l, Do(n, f);
  }
  function Do(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; )
      n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var fl = !1;
  function ih(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Lm(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function hn(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function dl(n, r, l) {
    var f = n.updateQueue;
    if (f === null)
      return null;
    if (f = f.shared, kt & 2) {
      var h = f.pending;
      return h === null ? r.next = r : (r.next = h.next, h.next = r), f.pending = r, Do(n, l);
    }
    return h = f.interleaved, h === null ? (r.next = r, zi(f)) : (r.next = h.next, h.next = r), f.interleaved = r, Do(n, l);
  }
  function Bf(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var f = r.lanes;
      f &= n.pendingLanes, l |= f, r.lanes = l, nc(n, l);
    }
  }
  function Mm(n, r) {
    var l = n.updateQueue, f = n.alternate;
    if (f !== null && (f = f.updateQueue, l === f)) {
      var h = null, m = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var b = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          m === null ? h = m = b : m = m.next = b, l = l.next;
        } while (l !== null);
        m === null ? h = m = r : m = m.next = r;
      } else
        h = m = r;
      l = { baseState: f.baseState, firstBaseUpdate: h, lastBaseUpdate: m, shared: f.shared, effects: f.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function Rc(n, r, l, f) {
    var h = n.updateQueue;
    fl = !1;
    var m = h.firstBaseUpdate, b = h.lastBaseUpdate, x = h.shared.pending;
    if (x !== null) {
      h.shared.pending = null;
      var z = x, Q = z.next;
      z.next = null, b === null ? m = Q : b.next = Q, b = z;
      var se = n.alternate;
      se !== null && (se = se.updateQueue, x = se.lastBaseUpdate, x !== b && (x === null ? se.firstBaseUpdate = Q : x.next = Q, se.lastBaseUpdate = z));
    }
    if (m !== null) {
      var fe = h.baseState;
      b = 0, se = Q = z = null, x = m;
      do {
        var le = x.lane, Oe = x.eventTime;
        if ((f & le) === le) {
          se !== null && (se = se.next = {
            eventTime: Oe,
            lane: 0,
            tag: x.tag,
            payload: x.payload,
            callback: x.callback,
            next: null
          });
          e: {
            var Ie = n, Ve = x;
            switch (le = r, Oe = l, Ve.tag) {
              case 1:
                if (Ie = Ve.payload, typeof Ie == "function") {
                  fe = Ie.call(Oe, fe, le);
                  break e;
                }
                fe = Ie;
                break e;
              case 3:
                Ie.flags = Ie.flags & -65537 | 128;
              case 0:
                if (Ie = Ve.payload, le = typeof Ie == "function" ? Ie.call(Oe, fe, le) : Ie, le == null)
                  break e;
                fe = L({}, fe, le);
                break e;
              case 2:
                fl = !0;
            }
          }
          x.callback !== null && x.lane !== 0 && (n.flags |= 64, le = h.effects, le === null ? h.effects = [x] : le.push(x));
        } else
          Oe = { eventTime: Oe, lane: le, tag: x.tag, payload: x.payload, callback: x.callback, next: null }, se === null ? (Q = se = Oe, z = fe) : se = se.next = Oe, b |= le;
        if (x = x.next, x === null) {
          if (x = h.shared.pending, x === null)
            break;
          le = x, x = le.next, le.next = null, h.lastBaseUpdate = le, h.shared.pending = null;
        }
      } while (!0);
      if (se === null && (z = fe), h.baseState = z, h.firstBaseUpdate = Q, h.lastBaseUpdate = se, r = h.shared.interleaved, r !== null) {
        h = r;
        do
          b |= h.lane, h = h.next;
        while (h !== r);
      } else
        m === null && (h.shared.lanes = 0);
      fu |= b, n.lanes = b, n.memoizedState = fe;
    }
  }
  function Zu(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var f = n[r], h = f.callback;
        if (h !== null) {
          if (f.callback = null, f = l, typeof h != "function")
            throw Error(s(191, h));
          h.call(f);
        }
      }
  }
  var eu = new c.Component().refs;
  function ah(n, r, l, f) {
    r = n.memoizedState, l = l(f, r), l = l == null ? r : L({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Yf = { isMounted: function(n) {
    return (n = n._reactInternals) ? Te(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var f = gr(), h = ko(n), m = hn(f, h);
    m.payload = r, l != null && (m.callback = l), r = dl(n, m, h), r !== null && (An(r, n, h, f), Bf(r, n, h));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var f = gr(), h = ko(n), m = hn(f, h);
    m.tag = 1, m.payload = r, l != null && (m.callback = l), r = dl(n, m, h), r !== null && (An(r, n, h, f), Bf(r, n, h));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = gr(), f = ko(n), h = hn(l, f);
    h.tag = 2, r != null && (h.callback = r), r = dl(n, h, f), r !== null && (An(r, n, f, l), Bf(r, n, f));
  } };
  function zm(n, r, l, f, h, m, b) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(f, m, b) : r.prototype && r.prototype.isPureReactComponent ? !Yu(l, f) || !Yu(h, m) : !0;
  }
  function Um(n, r, l) {
    var f = !1, h = Zi, m = r.contextType;
    return typeof m == "object" && m !== null ? m = me(m) : (h = er(r) ? Yr : hr.current, f = r.contextTypes, m = (f = f != null) ? ki(n, h) : Zi), r = new r(l, m), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Yf, n.stateNode = r, r._reactInternals = n, f && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = h, n.__reactInternalMemoizedMaskedChildContext = m), r;
  }
  function Pm(n, r, l, f) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, f), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, f), r.state !== n && Yf.enqueueReplaceState(r, r.state, null);
  }
  function oh(n, r, l, f) {
    var h = n.stateNode;
    h.props = l, h.state = n.memoizedState, h.refs = eu, ih(n);
    var m = r.contextType;
    typeof m == "object" && m !== null ? h.context = me(m) : (m = er(r) ? Yr : hr.current, h.context = ki(n, m)), h.state = n.memoizedState, m = r.getDerivedStateFromProps, typeof m == "function" && (ah(n, r, m, l), h.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof h.getSnapshotBeforeUpdate == "function" || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (r = h.state, typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount(), r !== h.state && Yf.enqueueReplaceState(h, h.state, null), Rc(n, l, h, f), h.state = n.memoizedState), typeof h.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Ju(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1)
            throw Error(s(309));
          var f = l.stateNode;
        }
        if (!f)
          throw Error(s(147, n));
        var h = f, m = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === m ? r.ref : (r = function(b) {
          var x = h.refs;
          x === eu && (x = h.refs = {}), b === null ? delete x[m] : x[m] = b;
        }, r._stringRef = m, r);
      }
      if (typeof n != "string")
        throw Error(s(284));
      if (!l._owner)
        throw Error(s(290, n));
    }
    return n;
  }
  function xc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(s(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function jm(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Im(n) {
    function r(F, P) {
      if (n) {
        var Y = F.deletions;
        Y === null ? (F.deletions = [P], F.flags |= 16) : Y.push(P);
      }
    }
    function l(F, P) {
      if (!n)
        return null;
      for (; P !== null; )
        r(F, P), P = P.sibling;
      return null;
    }
    function f(F, P) {
      for (F = /* @__PURE__ */ new Map(); P !== null; )
        P.key !== null ? F.set(P.key, P) : F.set(P.index, P), P = P.sibling;
      return F;
    }
    function h(F, P) {
      return F = _l(F, P), F.index = 0, F.sibling = null, F;
    }
    function m(F, P, Y) {
      return F.index = Y, n ? (Y = F.alternate, Y !== null ? (Y = Y.index, Y < P ? (F.flags |= 2, P) : Y) : (F.flags |= 2, P)) : (F.flags |= 1048576, P);
    }
    function b(F) {
      return n && F.alternate === null && (F.flags |= 2), F;
    }
    function x(F, P, Y, ve) {
      return P === null || P.tag !== 6 ? (P = Rd(Y, F.mode, ve), P.return = F, P) : (P = h(P, Y), P.return = F, P);
    }
    function z(F, P, Y, ve) {
      var Ye = Y.type;
      return Ye === Ne ? se(F, P, Y.props.children, ve, Y.key) : P !== null && (P.elementType === Ye || typeof Ye == "object" && Ye !== null && Ye.$$typeof === qe && jm(Ye) === P.type) ? (ve = h(P, Y.props), ve.ref = Ju(F, P, Y), ve.return = F, ve) : (ve = Td(Y.type, Y.key, Y.props, null, F.mode, ve), ve.ref = Ju(F, P, Y), ve.return = F, ve);
    }
    function Q(F, P, Y, ve) {
      return P === null || P.tag !== 4 || P.stateNode.containerInfo !== Y.containerInfo || P.stateNode.implementation !== Y.implementation ? (P = Wc(Y, F.mode, ve), P.return = F, P) : (P = h(P, Y.children || []), P.return = F, P);
    }
    function se(F, P, Y, ve, Ye) {
      return P === null || P.tag !== 7 ? (P = vu(Y, F.mode, ve, Ye), P.return = F, P) : (P = h(P, Y), P.return = F, P);
    }
    function fe(F, P, Y) {
      if (typeof P == "string" && P !== "" || typeof P == "number")
        return P = Rd("" + P, F.mode, Y), P.return = F, P;
      if (typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case Ce:
            return Y = Td(P.type, P.key, P.props, null, F.mode, Y), Y.ref = Ju(F, null, P), Y.return = F, Y;
          case oe:
            return P = Wc(P, F.mode, Y), P.return = F, P;
          case qe:
            var ve = P._init;
            return fe(F, ve(P._payload), Y);
        }
        if (Cn(P) || be(P))
          return P = vu(P, F.mode, Y, null), P.return = F, P;
        xc(F, P);
      }
      return null;
    }
    function le(F, P, Y, ve) {
      var Ye = P !== null ? P.key : null;
      if (typeof Y == "string" && Y !== "" || typeof Y == "number")
        return Ye !== null ? null : x(F, P, "" + Y, ve);
      if (typeof Y == "object" && Y !== null) {
        switch (Y.$$typeof) {
          case Ce:
            return Y.key === Ye ? z(F, P, Y, ve) : null;
          case oe:
            return Y.key === Ye ? Q(F, P, Y, ve) : null;
          case qe:
            return Ye = Y._init, le(
              F,
              P,
              Ye(Y._payload),
              ve
            );
        }
        if (Cn(Y) || be(Y))
          return Ye !== null ? null : se(F, P, Y, ve, null);
        xc(F, Y);
      }
      return null;
    }
    function Oe(F, P, Y, ve, Ye) {
      if (typeof ve == "string" && ve !== "" || typeof ve == "number")
        return F = F.get(Y) || null, x(P, F, "" + ve, Ye);
      if (typeof ve == "object" && ve !== null) {
        switch (ve.$$typeof) {
          case Ce:
            return F = F.get(ve.key === null ? Y : ve.key) || null, z(P, F, ve, Ye);
          case oe:
            return F = F.get(ve.key === null ? Y : ve.key) || null, Q(P, F, ve, Ye);
          case qe:
            var ut = ve._init;
            return Oe(F, P, Y, ut(ve._payload), Ye);
        }
        if (Cn(ve) || be(ve))
          return F = F.get(Y) || null, se(P, F, ve, Ye, null);
        xc(P, ve);
      }
      return null;
    }
    function Ie(F, P, Y, ve) {
      for (var Ye = null, ut = null, Fe = P, ft = P = 0, cr = null; Fe !== null && ft < Y.length; ft++) {
        Fe.index > ft ? (cr = Fe, Fe = null) : cr = Fe.sibling;
        var Bt = le(F, Fe, Y[ft], ve);
        if (Bt === null) {
          Fe === null && (Fe = cr);
          break;
        }
        n && Fe && Bt.alternate === null && r(F, Fe), P = m(Bt, P, ft), ut === null ? Ye = Bt : ut.sibling = Bt, ut = Bt, Fe = cr;
      }
      if (ft === Y.length)
        return l(F, Fe), yn && Jl(F, ft), Ye;
      if (Fe === null) {
        for (; ft < Y.length; ft++)
          Fe = fe(F, Y[ft], ve), Fe !== null && (P = m(Fe, P, ft), ut === null ? Ye = Fe : ut.sibling = Fe, ut = Fe);
        return yn && Jl(F, ft), Ye;
      }
      for (Fe = f(F, Fe); ft < Y.length; ft++)
        cr = Oe(Fe, F, ft, Y[ft], ve), cr !== null && (n && cr.alternate !== null && Fe.delete(cr.key === null ? ft : cr.key), P = m(cr, P, ft), ut === null ? Ye = cr : ut.sibling = cr, ut = cr);
      return n && Fe.forEach(function(Lo) {
        return r(F, Lo);
      }), yn && Jl(F, ft), Ye;
    }
    function Ve(F, P, Y, ve) {
      var Ye = be(Y);
      if (typeof Ye != "function")
        throw Error(s(150));
      if (Y = Ye.call(Y), Y == null)
        throw Error(s(151));
      for (var ut = Ye = null, Fe = P, ft = P = 0, cr = null, Bt = Y.next(); Fe !== null && !Bt.done; ft++, Bt = Y.next()) {
        Fe.index > ft ? (cr = Fe, Fe = null) : cr = Fe.sibling;
        var Lo = le(F, Fe, Bt.value, ve);
        if (Lo === null) {
          Fe === null && (Fe = cr);
          break;
        }
        n && Fe && Lo.alternate === null && r(F, Fe), P = m(Lo, P, ft), ut === null ? Ye = Lo : ut.sibling = Lo, ut = Lo, Fe = cr;
      }
      if (Bt.done)
        return l(
          F,
          Fe
        ), yn && Jl(F, ft), Ye;
      if (Fe === null) {
        for (; !Bt.done; ft++, Bt = Y.next())
          Bt = fe(F, Bt.value, ve), Bt !== null && (P = m(Bt, P, ft), ut === null ? Ye = Bt : ut.sibling = Bt, ut = Bt);
        return yn && Jl(F, ft), Ye;
      }
      for (Fe = f(F, Fe); !Bt.done; ft++, Bt = Y.next())
        Bt = Oe(Fe, F, ft, Bt.value, ve), Bt !== null && (n && Bt.alternate !== null && Fe.delete(Bt.key === null ? ft : Bt.key), P = m(Bt, P, ft), ut === null ? Ye = Bt : ut.sibling = Bt, ut = Bt);
      return n && Fe.forEach(function(u_) {
        return r(F, u_);
      }), yn && Jl(F, ft), Ye;
    }
    function Kn(F, P, Y, ve) {
      if (typeof Y == "object" && Y !== null && Y.type === Ne && Y.key === null && (Y = Y.props.children), typeof Y == "object" && Y !== null) {
        switch (Y.$$typeof) {
          case Ce:
            e: {
              for (var Ye = Y.key, ut = P; ut !== null; ) {
                if (ut.key === Ye) {
                  if (Ye = Y.type, Ye === Ne) {
                    if (ut.tag === 7) {
                      l(F, ut.sibling), P = h(ut, Y.props.children), P.return = F, F = P;
                      break e;
                    }
                  } else if (ut.elementType === Ye || typeof Ye == "object" && Ye !== null && Ye.$$typeof === qe && jm(Ye) === ut.type) {
                    l(F, ut.sibling), P = h(ut, Y.props), P.ref = Ju(F, ut, Y), P.return = F, F = P;
                    break e;
                  }
                  l(F, ut);
                  break;
                } else
                  r(F, ut);
                ut = ut.sibling;
              }
              Y.type === Ne ? (P = vu(Y.props.children, F.mode, ve, Y.key), P.return = F, F = P) : (ve = Td(Y.type, Y.key, Y.props, null, F.mode, ve), ve.ref = Ju(F, P, Y), ve.return = F, F = ve);
            }
            return b(F);
          case oe:
            e: {
              for (ut = Y.key; P !== null; ) {
                if (P.key === ut)
                  if (P.tag === 4 && P.stateNode.containerInfo === Y.containerInfo && P.stateNode.implementation === Y.implementation) {
                    l(F, P.sibling), P = h(P, Y.children || []), P.return = F, F = P;
                    break e;
                  } else {
                    l(F, P);
                    break;
                  }
                else
                  r(F, P);
                P = P.sibling;
              }
              P = Wc(Y, F.mode, ve), P.return = F, F = P;
            }
            return b(F);
          case qe:
            return ut = Y._init, Kn(F, P, ut(Y._payload), ve);
        }
        if (Cn(Y))
          return Ie(F, P, Y, ve);
        if (be(Y))
          return Ve(F, P, Y, ve);
        xc(F, Y);
      }
      return typeof Y == "string" && Y !== "" || typeof Y == "number" ? (Y = "" + Y, P !== null && P.tag === 6 ? (l(F, P.sibling), P = h(P, Y), P.return = F, F = P) : (l(F, P), P = Rd(Y, F.mode, ve), P.return = F, F = P), b(F)) : l(F, P);
    }
    return Kn;
  }
  var es = Im(!0), Fm = Im(!1), Dc = {}, Ga = sn(Dc), ts = sn(Dc), Oc = sn(Dc);
  function pl(n) {
    if (n === Dc)
      throw Error(s(174));
    return n;
  }
  function lh(n, r) {
    switch (Vt(Oc, r), Vt(ts, n), Vt(Ga, Dc), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : dr(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = dr(r, n);
    }
    Be(Ga), Vt(Ga, r);
  }
  function ns() {
    Be(Ga), Be(ts), Be(Oc);
  }
  function Wf(n) {
    pl(Oc.current);
    var r = pl(Ga.current), l = dr(r, n.type);
    r !== l && (Vt(ts, n), Vt(Ga, l));
  }
  function rt(n) {
    ts.current === n && (Be(Ga), Be(ts));
  }
  var Ge = sn(0);
  function Ht(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!"))
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128)
          return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n)
        break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n)
          return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var zn = [];
  function na() {
    for (var n = 0; n < zn.length; n++)
      zn[n]._workInProgressVersionPrimary = null;
    zn.length = 0;
  }
  var Ac = ae.ReactCurrentDispatcher, uh = ae.ReactCurrentBatchConfig, tu = 0, On = null, Bn = null, te = null, Yn = !1, lt = !1, Ka = 0, Oo = 0;
  function Un() {
    throw Error(s(321));
  }
  function ra(n, r) {
    if (r === null)
      return !1;
    for (var l = 0; l < r.length && l < n.length; l++)
      if (!Ta(n[l], r[l]))
        return !1;
    return !0;
  }
  function nu(n, r, l, f, h, m) {
    if (tu = m, On = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Ac.current = n === null || n.memoizedState === null ? BE : YE, n = l(f, h), lt) {
      m = 0;
      do {
        if (lt = !1, Ka = 0, 25 <= m)
          throw Error(s(301));
        m += 1, te = Bn = null, r.updateQueue = null, Ac.current = WE, n = l(f, h);
      } while (lt);
    }
    if (Ac.current = od, r = Bn !== null && Bn.next !== null, tu = 0, te = Bn = On = null, Yn = !1, r)
      throw Error(s(300));
    return n;
  }
  function hl() {
    var n = Ka !== 0;
    return Ka = 0, n;
  }
  function vi() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return te === null ? On.memoizedState = te = n : te = te.next = n, te;
  }
  function mi() {
    if (Bn === null) {
      var n = On.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = Bn.next;
    var r = te === null ? On.memoizedState : te.next;
    if (r !== null)
      te = r, Bn = n;
    else {
      if (n === null)
        throw Error(s(310));
      Bn = n, n = { memoizedState: Bn.memoizedState, baseState: Bn.baseState, baseQueue: Bn.baseQueue, queue: Bn.queue, next: null }, te === null ? On.memoizedState = te = n : te = te.next = n;
    }
    return te;
  }
  function ru(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Nc(n) {
    var r = mi(), l = r.queue;
    if (l === null)
      throw Error(s(311));
    l.lastRenderedReducer = n;
    var f = Bn, h = f.baseQueue, m = l.pending;
    if (m !== null) {
      if (h !== null) {
        var b = h.next;
        h.next = m.next, m.next = b;
      }
      f.baseQueue = h = m, l.pending = null;
    }
    if (h !== null) {
      m = h.next, f = f.baseState;
      var x = b = null, z = null, Q = m;
      do {
        var se = Q.lane;
        if ((tu & se) === se)
          z !== null && (z = z.next = { lane: 0, action: Q.action, hasEagerState: Q.hasEagerState, eagerState: Q.eagerState, next: null }), f = Q.hasEagerState ? Q.eagerState : n(f, Q.action);
        else {
          var fe = {
            lane: se,
            action: Q.action,
            hasEagerState: Q.hasEagerState,
            eagerState: Q.eagerState,
            next: null
          };
          z === null ? (x = z = fe, b = f) : z = z.next = fe, On.lanes |= se, fu |= se;
        }
        Q = Q.next;
      } while (Q !== null && Q !== m);
      z === null ? b = f : z.next = x, Ta(f, r.memoizedState) || (gi = !0), r.memoizedState = f, r.baseState = b, r.baseQueue = z, l.lastRenderedState = f;
    }
    if (n = l.interleaved, n !== null) {
      h = n;
      do
        m = h.lane, On.lanes |= m, fu |= m, h = h.next;
      while (h !== n);
    } else
      h === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function kc(n) {
    var r = mi(), l = r.queue;
    if (l === null)
      throw Error(s(311));
    l.lastRenderedReducer = n;
    var f = l.dispatch, h = l.pending, m = r.memoizedState;
    if (h !== null) {
      l.pending = null;
      var b = h = h.next;
      do
        m = n(m, b.action), b = b.next;
      while (b !== h);
      Ta(m, r.memoizedState) || (gi = !0), r.memoizedState = m, r.baseQueue === null && (r.baseState = m), l.lastRenderedState = m;
    }
    return [m, f];
  }
  function Gf() {
  }
  function Kf(n, r) {
    var l = On, f = mi(), h = r(), m = !Ta(f.memoizedState, h);
    if (m && (f.memoizedState = h, gi = !0), f = f.queue, Lc(qf.bind(null, l, f, n), [n]), f.getSnapshot !== r || m || te !== null && te.memoizedState.tag & 1) {
      if (l.flags |= 2048, iu(9, Xf.bind(null, l, f, h, r), void 0, null), jn === null)
        throw Error(s(349));
      tu & 30 || Qf(l, r, h);
    }
    return h;
  }
  function Qf(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = On.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, On.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Xf(n, r, l, f) {
    r.value = l, r.getSnapshot = f, Zf(r) && Jf(n);
  }
  function qf(n, r, l) {
    return l(function() {
      Zf(r) && Jf(n);
    });
  }
  function Zf(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !Ta(n, l);
    } catch {
      return !0;
    }
  }
  function Jf(n) {
    var r = Do(n, 1);
    r !== null && An(r, n, 1, -1);
  }
  function ed(n) {
    var r = vi();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ru, lastRenderedState: n }, r.queue = n, n = n.dispatch = ad.bind(null, On, n), [r.memoizedState, n];
  }
  function iu(n, r, l, f) {
    return n = { tag: n, create: r, destroy: l, deps: f, next: null }, r = On.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, On.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (f = l.next, l.next = n, n.next = f, r.lastEffect = n)), n;
  }
  function td() {
    return mi().memoizedState;
  }
  function rs(n, r, l, f) {
    var h = vi();
    On.flags |= n, h.memoizedState = iu(1 | r, l, void 0, f === void 0 ? null : f);
  }
  function au(n, r, l, f) {
    var h = mi();
    f = f === void 0 ? null : f;
    var m = void 0;
    if (Bn !== null) {
      var b = Bn.memoizedState;
      if (m = b.destroy, f !== null && ra(f, b.deps)) {
        h.memoizedState = iu(r, l, m, f);
        return;
      }
    }
    On.flags |= n, h.memoizedState = iu(1 | r, l, m, f);
  }
  function ou(n, r) {
    return rs(8390656, 8, n, r);
  }
  function Lc(n, r) {
    return au(2048, 8, n, r);
  }
  function nd(n, r) {
    return au(4, 2, n, r);
  }
  function rd(n, r) {
    return au(4, 4, n, r);
  }
  function id(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function sh(n, r, l) {
    return l = l != null ? l.concat([n]) : null, au(4, 4, id.bind(null, r, n), l);
  }
  function lu() {
  }
  function ch(n, r) {
    var l = mi();
    r = r === void 0 ? null : r;
    var f = l.memoizedState;
    return f !== null && r !== null && ra(r, f[1]) ? f[0] : (l.memoizedState = [n, r], n);
  }
  function is(n, r) {
    var l = mi();
    r = r === void 0 ? null : r;
    var f = l.memoizedState;
    return f !== null && r !== null && ra(r, f[1]) ? f[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function vl(n, r, l) {
    return tu & 21 ? (Ta(l, r) || (l = $l(), On.lanes |= l, fu |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, gi = !0), n.memoizedState = l);
  }
  function Ui(n, r) {
    var l = Mt;
    Mt = l !== 0 && 4 > l ? l : 4, n(!0);
    var f = uh.transition;
    uh.transition = {};
    try {
      n(!1), r();
    } finally {
      Mt = l, uh.transition = f;
    }
  }
  function Hm() {
    return mi().memoizedState;
  }
  function vn(n, r, l) {
    var f = ko(n);
    if (l = { lane: f, action: l, hasEagerState: !1, eagerState: null, next: null }, Mc(n))
      as(r, l);
    else if (l = km(n, r, l, f), l !== null) {
      var h = gr();
      An(l, n, f, h), zc(l, r, f);
    }
  }
  function ad(n, r, l) {
    var f = ko(n), h = { lane: f, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (Mc(n))
      as(r, h);
    else {
      var m = n.alternate;
      if (n.lanes === 0 && (m === null || m.lanes === 0) && (m = r.lastRenderedReducer, m !== null))
        try {
          var b = r.lastRenderedState, x = m(b, l);
          if (h.hasEagerState = !0, h.eagerState = x, Ta(x, b)) {
            var z = r.interleaved;
            z === null ? (h.next = h, zi(r)) : (h.next = z.next, z.next = h), r.interleaved = h;
            return;
          }
        } catch {
        } finally {
        }
      l = km(n, r, h, f), l !== null && (h = gr(), An(l, n, f, h), zc(l, r, f));
    }
  }
  function Mc(n) {
    var r = n.alternate;
    return n === On || r !== null && r === On;
  }
  function as(n, r) {
    lt = Yn = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function zc(n, r, l) {
    if (l & 4194240) {
      var f = r.lanes;
      f &= n.pendingLanes, l |= f, r.lanes = l, nc(n, l);
    }
  }
  var od = { readContext: me, useCallback: Un, useContext: Un, useEffect: Un, useImperativeHandle: Un, useInsertionEffect: Un, useLayoutEffect: Un, useMemo: Un, useReducer: Un, useRef: Un, useState: Un, useDebugValue: Un, useDeferredValue: Un, useTransition: Un, useMutableSource: Un, useSyncExternalStore: Un, useId: Un, unstable_isNewReconciler: !1 }, BE = { readContext: me, useCallback: function(n, r) {
    return vi().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: me, useEffect: ou, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, rs(
      4194308,
      4,
      id.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return rs(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return rs(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = vi();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var f = vi();
    return r = l !== void 0 ? l(r) : r, f.memoizedState = f.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, f.queue = n, n = n.dispatch = vn.bind(null, On, n), [f.memoizedState, n];
  }, useRef: function(n) {
    var r = vi();
    return n = { current: n }, r.memoizedState = n;
  }, useState: ed, useDebugValue: lu, useDeferredValue: function(n) {
    return vi().memoizedState = n;
  }, useTransition: function() {
    var n = ed(!1), r = n[0];
    return n = Ui.bind(null, n[1]), vi().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var f = On, h = vi();
    if (yn) {
      if (l === void 0)
        throw Error(s(407));
      l = l();
    } else {
      if (l = r(), jn === null)
        throw Error(s(349));
      tu & 30 || Qf(f, r, l);
    }
    h.memoizedState = l;
    var m = { value: l, getSnapshot: r };
    return h.queue = m, ou(qf.bind(
      null,
      f,
      m,
      n
    ), [n]), f.flags |= 2048, iu(9, Xf.bind(null, f, m, l, r), void 0, null), l;
  }, useId: function() {
    var n = vi(), r = jn.identifierPrefix;
    if (yn) {
      var l = Tr, f = pi;
      l = (f & ~(1 << 32 - Br(f) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Ka++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else
      l = Oo++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, YE = {
    readContext: me,
    useCallback: ch,
    useContext: me,
    useEffect: Lc,
    useImperativeHandle: sh,
    useInsertionEffect: nd,
    useLayoutEffect: rd,
    useMemo: is,
    useReducer: Nc,
    useRef: td,
    useState: function() {
      return Nc(ru);
    },
    useDebugValue: lu,
    useDeferredValue: function(n) {
      var r = mi();
      return vl(r, Bn.memoizedState, n);
    },
    useTransition: function() {
      var n = Nc(ru)[0], r = mi().memoizedState;
      return [n, r];
    },
    useMutableSource: Gf,
    useSyncExternalStore: Kf,
    useId: Hm,
    unstable_isNewReconciler: !1
  }, WE = { readContext: me, useCallback: ch, useContext: me, useEffect: Lc, useImperativeHandle: sh, useInsertionEffect: nd, useLayoutEffect: rd, useMemo: is, useReducer: kc, useRef: td, useState: function() {
    return kc(ru);
  }, useDebugValue: lu, useDeferredValue: function(n) {
    var r = mi();
    return Bn === null ? r.memoizedState = n : vl(r, Bn.memoizedState, n);
  }, useTransition: function() {
    var n = kc(ru)[0], r = mi().memoizedState;
    return [n, r];
  }, useMutableSource: Gf, useSyncExternalStore: Kf, useId: Hm, unstable_isNewReconciler: !1 };
  function ml(n, r) {
    try {
      var l = "", f = r;
      do
        l += gt(f), f = f.return;
      while (f);
      var h = l;
    } catch (m) {
      h = `
Error generating stack: ` + m.message + `
` + m.stack;
    }
    return { value: n, source: r, stack: h, digest: null };
  }
  function fh(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function Uc(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var $m = typeof WeakMap == "function" ? WeakMap : Map;
  function Vm(n, r, l) {
    l = hn(-1, l), l.tag = 3, l.payload = { element: null };
    var f = r.value;
    return l.callback = function() {
      yd || (yd = !0, _h = f), Uc(n, r);
    }, l;
  }
  function Bm(n, r, l) {
    l = hn(-1, l), l.tag = 3;
    var f = n.type.getDerivedStateFromError;
    if (typeof f == "function") {
      var h = r.value;
      l.payload = function() {
        return f(h);
      }, l.callback = function() {
        Uc(n, r);
      };
    }
    var m = n.stateNode;
    return m !== null && typeof m.componentDidCatch == "function" && (l.callback = function() {
      Uc(n, r), typeof f != "function" && (oa === null ? oa = /* @__PURE__ */ new Set([this]) : oa.add(this));
      var b = r.stack;
      this.componentDidCatch(r.value, { componentStack: b !== null ? b : "" });
    }), l;
  }
  function Pc(n, r, l) {
    var f = n.pingCache;
    if (f === null) {
      f = n.pingCache = new $m();
      var h = /* @__PURE__ */ new Set();
      f.set(r, h);
    } else
      h = f.get(r), h === void 0 && (h = /* @__PURE__ */ new Set(), f.set(r, h));
    h.has(l) || (h.add(l), n = n_.bind(null, n, r, l), r.then(n, n));
  }
  function Ym(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function dh(n, r, l, f, h) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = h, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = hn(-1, 1), r.tag = 2, dl(l, r, 1))), l.lanes |= 1), n);
  }
  var Wm = ae.ReactCurrentOwner, gi = !1;
  function Wn(n, r, l, f) {
    r.child = n === null ? Fm(r, null, l, f) : es(r, n.child, l, f);
  }
  function os(n, r, l, f, h) {
    l = l.render;
    var m = r.ref;
    return Vn(r, h), f = nu(n, r, l, f, m, h), l = hl(), n !== null && !gi ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~h, Gn(n, r, h)) : (yn && l && Ff(r), r.flags |= 1, Wn(n, r, f, h), r.child);
  }
  function gl(n, r, l, f, h) {
    if (n === null) {
      var m = l.type;
      return typeof m == "function" && !wh(m) && m.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = m, ld(n, r, m, f, h)) : (n = Td(l.type, null, f, r, r.mode, h), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (m = n.child, !(n.lanes & h)) {
      var b = m.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Yu, l(b, f) && n.ref === r.ref)
        return Gn(n, r, h);
    }
    return r.flags |= 1, n = _l(m, f), n.ref = r.ref, n.return = r, r.child = n;
  }
  function ld(n, r, l, f, h) {
    if (n !== null) {
      var m = n.memoizedProps;
      if (Yu(m, f) && n.ref === r.ref)
        if (gi = !1, r.pendingProps = f = m, (n.lanes & h) !== 0)
          n.flags & 131072 && (gi = !0);
        else
          return r.lanes = n.lanes, Gn(n, r, h);
    }
    return Tt(n, r, l, f, h);
  }
  function yi(n, r, l) {
    var f = r.pendingProps, h = f.children, m = n !== null ? n.memoizedState : null;
    if (f.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Vt(ms, Ei), Ei |= l;
      else {
        if (!(l & 1073741824))
          return n = m !== null ? m.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Vt(ms, Ei), Ei |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, f = m !== null ? m.baseLanes : l, Vt(ms, Ei), Ei |= f;
      }
    else
      m !== null ? (f = m.baseLanes | l, r.memoizedState = null) : f = l, Vt(ms, Ei), Ei |= f;
    return Wn(n, r, h, l), r.child;
  }
  function uu(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Tt(n, r, l, f, h) {
    var m = er(l) ? Yr : hr.current;
    return m = ki(r, m), Vn(r, h), l = nu(n, r, l, f, m, h), f = hl(), n !== null && !gi ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~h, Gn(n, r, h)) : (yn && f && Ff(r), r.flags |= 1, Wn(n, r, l, h), r.child);
  }
  function jc(n, r, l, f, h) {
    if (er(l)) {
      var m = !0;
      ql(r);
    } else
      m = !1;
    if (Vn(r, h), r.stateNode === null)
      Fc(n, r), Um(r, l, f), oh(r, l, f, h), f = !0;
    else if (n === null) {
      var b = r.stateNode, x = r.memoizedProps;
      b.props = x;
      var z = b.context, Q = l.contextType;
      typeof Q == "object" && Q !== null ? Q = me(Q) : (Q = er(l) ? Yr : hr.current, Q = ki(r, Q));
      var se = l.getDerivedStateFromProps, fe = typeof se == "function" || typeof b.getSnapshotBeforeUpdate == "function";
      fe || typeof b.UNSAFE_componentWillReceiveProps != "function" && typeof b.componentWillReceiveProps != "function" || (x !== f || z !== Q) && Pm(r, b, f, Q), fl = !1;
      var le = r.memoizedState;
      b.state = le, Rc(r, f, b, h), z = r.memoizedState, x !== f || le !== z || _t.current || fl ? (typeof se == "function" && (ah(r, l, se, f), z = r.memoizedState), (x = fl || zm(r, l, x, f, le, z, Q)) ? (fe || typeof b.UNSAFE_componentWillMount != "function" && typeof b.componentWillMount != "function" || (typeof b.componentWillMount == "function" && b.componentWillMount(), typeof b.UNSAFE_componentWillMount == "function" && b.UNSAFE_componentWillMount()), typeof b.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof b.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = f, r.memoizedState = z), b.props = f, b.state = z, b.context = Q, f = x) : (typeof b.componentDidMount == "function" && (r.flags |= 4194308), f = !1);
    } else {
      b = r.stateNode, Lm(n, r), x = r.memoizedProps, Q = r.type === r.elementType ? x : hi(r.type, x), b.props = Q, fe = r.pendingProps, le = b.context, z = l.contextType, typeof z == "object" && z !== null ? z = me(z) : (z = er(l) ? Yr : hr.current, z = ki(r, z));
      var Oe = l.getDerivedStateFromProps;
      (se = typeof Oe == "function" || typeof b.getSnapshotBeforeUpdate == "function") || typeof b.UNSAFE_componentWillReceiveProps != "function" && typeof b.componentWillReceiveProps != "function" || (x !== fe || le !== z) && Pm(r, b, f, z), fl = !1, le = r.memoizedState, b.state = le, Rc(r, f, b, h);
      var Ie = r.memoizedState;
      x !== fe || le !== Ie || _t.current || fl ? (typeof Oe == "function" && (ah(r, l, Oe, f), Ie = r.memoizedState), (Q = fl || zm(r, l, Q, f, le, Ie, z) || !1) ? (se || typeof b.UNSAFE_componentWillUpdate != "function" && typeof b.componentWillUpdate != "function" || (typeof b.componentWillUpdate == "function" && b.componentWillUpdate(f, Ie, z), typeof b.UNSAFE_componentWillUpdate == "function" && b.UNSAFE_componentWillUpdate(f, Ie, z)), typeof b.componentDidUpdate == "function" && (r.flags |= 4), typeof b.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof b.componentDidUpdate != "function" || x === n.memoizedProps && le === n.memoizedState || (r.flags |= 4), typeof b.getSnapshotBeforeUpdate != "function" || x === n.memoizedProps && le === n.memoizedState || (r.flags |= 1024), r.memoizedProps = f, r.memoizedState = Ie), b.props = f, b.state = Ie, b.context = z, f = Q) : (typeof b.componentDidUpdate != "function" || x === n.memoizedProps && le === n.memoizedState || (r.flags |= 4), typeof b.getSnapshotBeforeUpdate != "function" || x === n.memoizedProps && le === n.memoizedState || (r.flags |= 1024), f = !1);
    }
    return ud(n, r, l, f, m, h);
  }
  function ud(n, r, l, f, h, m) {
    uu(n, r);
    var b = (r.flags & 128) !== 0;
    if (!f && !b)
      return h && Om(r, l, !1), Gn(n, r, m);
    f = r.stateNode, Wm.current = r;
    var x = b && typeof l.getDerivedStateFromError != "function" ? null : f.render();
    return r.flags |= 1, n !== null && b ? (r.child = es(r, n.child, null, m), r.child = es(r, null, x, m)) : Wn(n, r, x, m), r.memoizedState = f.state, h && Om(r, l, !0), r.child;
  }
  function GE(n) {
    var r = n.stateNode;
    r.pendingContext ? Ba(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Ba(n, r.context, !1), lh(n, r.containerInfo);
  }
  function Gm(n, r, l, f, h) {
    return Qu(), tr(h), r.flags |= 256, Wn(n, r, l, f), r.child;
  }
  var Ic = { dehydrated: null, treeContext: null, retryLane: 0 };
  function su(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Km(n, r, l) {
    var f = r.pendingProps, h = Ge.current, m = !1, b = (r.flags & 128) !== 0, x;
    if ((x = b) || (x = n !== null && n.memoizedState === null ? !1 : (h & 2) !== 0), x ? (m = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (h |= 1), Vt(Ge, h & 1), n === null)
      return $f(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (b = f.children, n = f.fallback, m ? (f = r.mode, m = r.child, b = { mode: "hidden", children: b }, !(f & 1) && m !== null ? (m.childLanes = 0, m.pendingProps = b) : m = wd(b, f, 0, null), n = vu(n, f, l, null), m.return = r, n.return = r, m.sibling = n, r.child = m, r.child.memoizedState = su(l), r.memoizedState = Ic, n) : sd(r, b));
    if (h = n.memoizedState, h !== null && (x = h.dehydrated, x !== null))
      return ph(n, r, b, f, x, h, l);
    if (m) {
      m = f.fallback, b = r.mode, h = n.child, x = h.sibling;
      var z = { mode: "hidden", children: f.children };
      return !(b & 1) && r.child !== h ? (f = r.child, f.childLanes = 0, f.pendingProps = z, r.deletions = null) : (f = _l(h, z), f.subtreeFlags = h.subtreeFlags & 14680064), x !== null ? m = _l(x, m) : (m = vu(m, b, l, null), m.flags |= 2), m.return = r, f.return = r, f.sibling = m, r.child = f, f = m, m = r.child, b = n.child.memoizedState, b = b === null ? su(l) : { baseLanes: b.baseLanes | l, cachePool: null, transitions: b.transitions }, m.memoizedState = b, m.childLanes = n.childLanes & ~l, r.memoizedState = Ic, f;
    }
    return m = n.child, n = m.sibling, f = _l(m, { mode: "visible", children: f.children }), !(r.mode & 1) && (f.lanes = l), f.return = r, f.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = f, r.memoizedState = null, f;
  }
  function sd(n, r) {
    return r = wd({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function cd(n, r, l, f) {
    return f !== null && tr(f), es(r, n.child, null, l), n = sd(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function ph(n, r, l, f, h, m, b) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, f = fh(Error(s(422))), cd(n, r, b, f)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (m = f.fallback, h = r.mode, f = wd({ mode: "visible", children: f.children }, h, 0, null), m = vu(m, h, b, null), m.flags |= 2, f.return = r, m.return = r, f.sibling = m, r.child = f, r.mode & 1 && es(r, n.child, null, b), r.child.memoizedState = su(b), r.memoizedState = Ic, m);
    if (!(r.mode & 1))
      return cd(n, r, b, null);
    if (h.data === "$!") {
      if (f = h.nextSibling && h.nextSibling.dataset, f)
        var x = f.dgst;
      return f = x, m = Error(s(419)), f = fh(m, f, void 0), cd(n, r, b, f);
    }
    if (x = (b & n.childLanes) !== 0, gi || x) {
      if (f = jn, f !== null) {
        switch (b & -b) {
          case 4:
            h = 2;
            break;
          case 16:
            h = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            h = 32;
            break;
          case 536870912:
            h = 268435456;
            break;
          default:
            h = 0;
        }
        h = h & (f.suspendedLanes | b) ? 0 : h, h !== 0 && h !== m.retryLane && (m.retryLane = h, Do(n, h), An(f, n, h, -1));
      }
      return Yc(), f = fh(Error(s(421))), cd(n, r, b, f);
    }
    return h.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Th.bind(null, n), h._reactRetry = r, null) : (n = m.treeContext, Mi = Ni(h.nextSibling), Li = r, yn = !0, ta = null, n !== null && (fi[di++] = pi, fi[di++] = Tr, fi[di++] = xa, pi = n.id, Tr = n.overflow, xa = r), r = sd(r, f.children), r.flags |= 4096, r);
  }
  function Qm(n, r, l) {
    n.lanes |= r;
    var f = n.alternate;
    f !== null && (f.lanes |= r), cl(n.return, r, l);
  }
  function fd(n, r, l, f, h) {
    var m = n.memoizedState;
    m === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: f, tail: l, tailMode: h } : (m.isBackwards = r, m.rendering = null, m.renderingStartTime = 0, m.last = f, m.tail = l, m.tailMode = h);
  }
  function hh(n, r, l) {
    var f = r.pendingProps, h = f.revealOrder, m = f.tail;
    if (Wn(n, r, f.children, l), f = Ge.current, f & 2)
      f = f & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && Qm(n, l, r);
            else if (n.tag === 19)
              Qm(n, l, r);
            else if (n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === r)
              break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === r)
                break e;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
      f &= 1;
    }
    if (Vt(Ge, f), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (h) {
        case "forwards":
          for (l = r.child, h = null; l !== null; )
            n = l.alternate, n !== null && Ht(n) === null && (h = l), l = l.sibling;
          l = h, l === null ? (h = r.child, r.child = null) : (h = l.sibling, l.sibling = null), fd(r, !1, h, l, m);
          break;
        case "backwards":
          for (l = null, h = r.child, r.child = null; h !== null; ) {
            if (n = h.alternate, n !== null && Ht(n) === null) {
              r.child = h;
              break;
            }
            n = h.sibling, h.sibling = l, l = h, h = n;
          }
          fd(r, !0, l, null, m);
          break;
        case "together":
          fd(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function Fc(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Gn(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), fu |= r.lanes, !(l & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(s(153));
    if (r.child !== null) {
      for (n = r.child, l = _l(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; )
        n = n.sibling, l = l.sibling = _l(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function Ao(n, r, l) {
    switch (r.tag) {
      case 3:
        GE(r), Qu();
        break;
      case 5:
        Wf(r);
        break;
      case 1:
        er(r.type) && ql(r);
        break;
      case 4:
        lh(r, r.stateNode.containerInfo);
        break;
      case 10:
        var f = r.type._context, h = r.memoizedProps.value;
        Vt(Xu, f._currentValue), f._currentValue = h;
        break;
      case 13:
        if (f = r.memoizedState, f !== null)
          return f.dehydrated !== null ? (Vt(Ge, Ge.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? Km(n, r, l) : (Vt(Ge, Ge.current & 1), n = Gn(n, r, l), n !== null ? n.sibling : null);
        Vt(Ge, Ge.current & 1);
        break;
      case 19:
        if (f = (l & r.childLanes) !== 0, n.flags & 128) {
          if (f)
            return hh(n, r, l);
          r.flags |= 128;
        }
        if (h = r.memoizedState, h !== null && (h.rendering = null, h.tail = null, h.lastEffect = null), Vt(Ge, Ge.current), f)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, yi(n, r, l);
    }
    return Gn(n, r, l);
  }
  var Qa, ls, us, ia;
  Qa = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6)
        n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r)
        break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r)
          return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, ls = function() {
  }, us = function(n, r, l, f) {
    var h = n.memoizedProps;
    if (h !== f) {
      n = r.stateNode, pl(Ga.current);
      var m = null;
      switch (l) {
        case "input":
          h = Sn(n, h), f = Sn(n, f), m = [];
          break;
        case "select":
          h = L({}, h, { value: void 0 }), f = L({}, f, { value: void 0 }), m = [];
          break;
        case "textarea":
          h = zr(n, h), f = zr(n, f), m = [];
          break;
        default:
          typeof h.onClick != "function" && typeof f.onClick == "function" && (n.onclick = Pf);
      }
      $t(l, f);
      var b;
      l = null;
      for (Q in h)
        if (!f.hasOwnProperty(Q) && h.hasOwnProperty(Q) && h[Q] != null)
          if (Q === "style") {
            var x = h[Q];
            for (b in x)
              x.hasOwnProperty(b) && (l || (l = {}), l[b] = "");
          } else
            Q !== "dangerouslySetInnerHTML" && Q !== "children" && Q !== "suppressContentEditableWarning" && Q !== "suppressHydrationWarning" && Q !== "autoFocus" && (y.hasOwnProperty(Q) ? m || (m = []) : (m = m || []).push(Q, null));
      for (Q in f) {
        var z = f[Q];
        if (x = h != null ? h[Q] : void 0, f.hasOwnProperty(Q) && z !== x && (z != null || x != null))
          if (Q === "style")
            if (x) {
              for (b in x)
                !x.hasOwnProperty(b) || z && z.hasOwnProperty(b) || (l || (l = {}), l[b] = "");
              for (b in z)
                z.hasOwnProperty(b) && x[b] !== z[b] && (l || (l = {}), l[b] = z[b]);
            } else
              l || (m || (m = []), m.push(
                Q,
                l
              )), l = z;
          else
            Q === "dangerouslySetInnerHTML" ? (z = z ? z.__html : void 0, x = x ? x.__html : void 0, z != null && x !== z && (m = m || []).push(Q, z)) : Q === "children" ? typeof z != "string" && typeof z != "number" || (m = m || []).push(Q, "" + z) : Q !== "suppressContentEditableWarning" && Q !== "suppressHydrationWarning" && (y.hasOwnProperty(Q) ? (z != null && Q === "onScroll" && un("scroll", n), m || x === z || (m = [])) : (m = m || []).push(Q, z));
      }
      l && (m = m || []).push("style", l);
      var Q = m;
      (r.updateQueue = Q) && (r.flags |= 4);
    }
  }, ia = function(n, r, l, f) {
    l !== f && (r.flags |= 4);
  };
  function Pn(n, r) {
    if (!yn)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var l = null; r !== null; )
            r.alternate !== null && (l = r), r = r.sibling;
          l === null ? n.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = n.tail;
          for (var f = null; l !== null; )
            l.alternate !== null && (f = l), l = l.sibling;
          f === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : f.sibling = null;
      }
  }
  function $r(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, f = 0;
    if (r)
      for (var h = n.child; h !== null; )
        l |= h.lanes | h.childLanes, f |= h.subtreeFlags & 14680064, f |= h.flags & 14680064, h.return = n, h = h.sibling;
    else
      for (h = n.child; h !== null; )
        l |= h.lanes | h.childLanes, f |= h.subtreeFlags, f |= h.flags, h.return = n, h = h.sibling;
    return n.subtreeFlags |= f, n.childLanes = l, r;
  }
  function KE(n, r, l) {
    var f = r.pendingProps;
    switch (Hf(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return $r(r), null;
      case 1:
        return er(r.type) && ci(), $r(r), null;
      case 3:
        return f = r.stateNode, ns(), Be(_t), Be(hr), na(), f.pendingContext && (f.context = f.pendingContext, f.pendingContext = null), (n === null || n.child === null) && (Vf(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, ta !== null && (Sh(ta), ta = null))), ls(n, r), $r(r), null;
      case 5:
        rt(r);
        var h = pl(Oc.current);
        if (l = r.type, n !== null && r.stateNode != null)
          us(n, r, l, f, h), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!f) {
            if (r.stateNode === null)
              throw Error(s(166));
            return $r(r), null;
          }
          if (n = pl(Ga.current), Vf(r)) {
            f = r.stateNode, l = r.type;
            var m = r.memoizedProps;
            switch (f[qi] = r, f[Tc] = m, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                un("cancel", f), un("close", f);
                break;
              case "iframe":
              case "object":
              case "embed":
                un("load", f);
                break;
              case "video":
              case "audio":
                for (h = 0; h < bo.length; h++)
                  un(bo[h], f);
                break;
              case "source":
                un("error", f);
                break;
              case "img":
              case "image":
              case "link":
                un(
                  "error",
                  f
                ), un("load", f);
                break;
              case "details":
                un("toggle", f);
                break;
              case "input":
                or(f, m), un("invalid", f);
                break;
              case "select":
                f._wrapperState = { wasMultiple: !!m.multiple }, un("invalid", f);
                break;
              case "textarea":
                Ur(f, m), un("invalid", f);
            }
            $t(l, m), h = null;
            for (var b in m)
              if (m.hasOwnProperty(b)) {
                var x = m[b];
                b === "children" ? typeof x == "string" ? f.textContent !== x && (m.suppressHydrationWarning !== !0 && _c(f.textContent, x, n), h = ["children", x]) : typeof x == "number" && f.textContent !== "" + x && (m.suppressHydrationWarning !== !0 && _c(
                  f.textContent,
                  x,
                  n
                ), h = ["children", "" + x]) : y.hasOwnProperty(b) && x != null && b === "onScroll" && un("scroll", f);
              }
            switch (l) {
              case "input":
                Hn(f), Ln(f, m, !0);
                break;
              case "textarea":
                Hn(f), Pr(f);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof m.onClick == "function" && (f.onclick = Pf);
            }
            f = h, r.updateQueue = f, f !== null && (r.flags |= 4);
          } else {
            b = h.nodeType === 9 ? h : h.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Zn(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = b.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof f.is == "string" ? n = b.createElement(l, { is: f.is }) : (n = b.createElement(l), l === "select" && (b = n, f.multiple ? b.multiple = !0 : f.size && (b.size = f.size))) : n = b.createElementNS(n, l), n[qi] = r, n[Tc] = f, Qa(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (b = $n(l, f), l) {
                case "dialog":
                  un("cancel", n), un("close", n), h = f;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  un("load", n), h = f;
                  break;
                case "video":
                case "audio":
                  for (h = 0; h < bo.length; h++)
                    un(bo[h], n);
                  h = f;
                  break;
                case "source":
                  un("error", n), h = f;
                  break;
                case "img":
                case "image":
                case "link":
                  un(
                    "error",
                    n
                  ), un("load", n), h = f;
                  break;
                case "details":
                  un("toggle", n), h = f;
                  break;
                case "input":
                  or(n, f), h = Sn(n, f), un("invalid", n);
                  break;
                case "option":
                  h = f;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!f.multiple }, h = L({}, f, { value: void 0 }), un("invalid", n);
                  break;
                case "textarea":
                  Ur(n, f), h = zr(n, f), un("invalid", n);
                  break;
                default:
                  h = f;
              }
              $t(l, h), x = h;
              for (m in x)
                if (x.hasOwnProperty(m)) {
                  var z = x[m];
                  m === "style" ? xt(n, z) : m === "dangerouslySetInnerHTML" ? (z = z ? z.__html : void 0, z != null && Ri(n, z)) : m === "children" ? typeof z == "string" ? (l !== "textarea" || z !== "") && xi(n, z) : typeof z == "number" && xi(n, "" + z) : m !== "suppressContentEditableWarning" && m !== "suppressHydrationWarning" && m !== "autoFocus" && (y.hasOwnProperty(m) ? z != null && m === "onScroll" && un("scroll", n) : z != null && ge(n, m, z, b));
                }
              switch (l) {
                case "input":
                  Hn(n), Ln(n, f, !1);
                  break;
                case "textarea":
                  Hn(n), Pr(n);
                  break;
                case "option":
                  f.value != null && n.setAttribute("value", "" + mt(f.value));
                  break;
                case "select":
                  n.multiple = !!f.multiple, m = f.value, m != null ? bn(n, !!f.multiple, m, !1) : f.defaultValue != null && bn(
                    n,
                    !!f.multiple,
                    f.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof h.onClick == "function" && (n.onclick = Pf);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  f = !!f.autoFocus;
                  break e;
                case "img":
                  f = !0;
                  break e;
                default:
                  f = !1;
              }
            }
            f && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return $r(r), null;
      case 6:
        if (n && r.stateNode != null)
          ia(n, r, n.memoizedProps, f);
        else {
          if (typeof f != "string" && r.stateNode === null)
            throw Error(s(166));
          if (l = pl(Oc.current), pl(Ga.current), Vf(r)) {
            if (f = r.stateNode, l = r.memoizedProps, f[qi] = r, (m = f.nodeValue !== l) && (n = Li, n !== null))
              switch (n.tag) {
                case 3:
                  _c(f.nodeValue, l, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && _c(f.nodeValue, l, (n.mode & 1) !== 0);
              }
            m && (r.flags |= 4);
          } else
            f = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(f), f[qi] = r, r.stateNode = f;
        }
        return $r(r), null;
      case 13:
        if (Be(Ge), f = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (yn && Mi !== null && r.mode & 1 && !(r.flags & 128))
            Nm(), Qu(), r.flags |= 98560, m = !1;
          else if (m = Vf(r), f !== null && f.dehydrated !== null) {
            if (n === null) {
              if (!m)
                throw Error(s(318));
              if (m = r.memoizedState, m = m !== null ? m.dehydrated : null, !m)
                throw Error(s(317));
              m[qi] = r;
            } else
              Qu(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            $r(r), m = !1;
          } else
            ta !== null && (Sh(ta), ta = null), m = !0;
          if (!m)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (f = f !== null, f !== (n !== null && n.memoizedState !== null) && f && (r.child.flags |= 8192, r.mode & 1 && (n === null || Ge.current & 1 ? ur === 0 && (ur = 3) : Yc())), r.updateQueue !== null && (r.flags |= 4), $r(r), null);
      case 4:
        return ns(), ls(n, r), n === null && $a(r.stateNode.containerInfo), $r(r), null;
      case 10:
        return rh(r.type._context), $r(r), null;
      case 17:
        return er(r.type) && ci(), $r(r), null;
      case 19:
        if (Be(Ge), m = r.memoizedState, m === null)
          return $r(r), null;
        if (f = (r.flags & 128) !== 0, b = m.rendering, b === null)
          if (f)
            Pn(m, !1);
          else {
            if (ur !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (b = Ht(n), b !== null) {
                  for (r.flags |= 128, Pn(m, !1), f = b.updateQueue, f !== null && (r.updateQueue = f, r.flags |= 4), r.subtreeFlags = 0, f = l, l = r.child; l !== null; )
                    m = l, n = f, m.flags &= 14680066, b = m.alternate, b === null ? (m.childLanes = 0, m.lanes = n, m.child = null, m.subtreeFlags = 0, m.memoizedProps = null, m.memoizedState = null, m.updateQueue = null, m.dependencies = null, m.stateNode = null) : (m.childLanes = b.childLanes, m.lanes = b.lanes, m.child = b.child, m.subtreeFlags = 0, m.deletions = null, m.memoizedProps = b.memoizedProps, m.memoizedState = b.memoizedState, m.updateQueue = b.updateQueue, m.type = b.type, n = b.dependencies, m.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
                  return Vt(Ge, Ge.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            m.tail !== null && pn() > ys && (r.flags |= 128, f = !0, Pn(m, !1), r.lanes = 4194304);
          }
        else {
          if (!f)
            if (n = Ht(b), n !== null) {
              if (r.flags |= 128, f = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), Pn(m, !0), m.tail === null && m.tailMode === "hidden" && !b.alternate && !yn)
                return $r(r), null;
            } else
              2 * pn() - m.renderingStartTime > ys && l !== 1073741824 && (r.flags |= 128, f = !0, Pn(m, !1), r.lanes = 4194304);
          m.isBackwards ? (b.sibling = r.child, r.child = b) : (l = m.last, l !== null ? l.sibling = b : r.child = b, m.last = b);
        }
        return m.tail !== null ? (r = m.tail, m.rendering = r, m.tail = r.sibling, m.renderingStartTime = pn(), r.sibling = null, l = Ge.current, Vt(Ge, f ? l & 1 | 2 : l & 1), r) : ($r(r), null);
      case 22:
      case 23:
        return Cd(), f = r.memoizedState !== null, n !== null && n.memoizedState !== null !== f && (r.flags |= 8192), f && r.mode & 1 ? Ei & 1073741824 && ($r(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : $r(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(s(156, r.tag));
  }
  function QE(n, r) {
    switch (Hf(r), r.tag) {
      case 1:
        return er(r.type) && ci(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return ns(), Be(_t), Be(hr), na(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return rt(r), null;
      case 13:
        if (Be(Ge), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(s(340));
          Qu();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Be(Ge), null;
      case 4:
        return ns(), null;
      case 10:
        return rh(r.type._context), null;
      case 22:
      case 23:
        return Cd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ss = !1, wr = !1, dd = typeof WeakSet == "function" ? WeakSet : Set, Ue = null;
  function cs(n, r) {
    var l = n.ref;
    if (l !== null)
      if (typeof l == "function")
        try {
          l(null);
        } catch (f) {
          In(n, r, f);
        }
      else
        l.current = null;
  }
  function vh(n, r, l) {
    try {
      l();
    } catch (f) {
      In(n, r, f);
    }
  }
  var pd = !1;
  function XE(n, r) {
    if (Wp = Iu, n = gm(), hc(n)) {
      if ("selectionStart" in n)
        var l = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          l = (l = n.ownerDocument) && l.defaultView || window;
          var f = l.getSelection && l.getSelection();
          if (f && f.rangeCount !== 0) {
            l = f.anchorNode;
            var h = f.anchorOffset, m = f.focusNode;
            f = f.focusOffset;
            try {
              l.nodeType, m.nodeType;
            } catch {
              l = null;
              break e;
            }
            var b = 0, x = -1, z = -1, Q = 0, se = 0, fe = n, le = null;
            t:
              for (; ; ) {
                for (var Oe; fe !== l || h !== 0 && fe.nodeType !== 3 || (x = b + h), fe !== m || f !== 0 && fe.nodeType !== 3 || (z = b + f), fe.nodeType === 3 && (b += fe.nodeValue.length), (Oe = fe.firstChild) !== null; )
                  le = fe, fe = Oe;
                for (; ; ) {
                  if (fe === n)
                    break t;
                  if (le === l && ++Q === h && (x = b), le === m && ++se === f && (z = b), (Oe = fe.nextSibling) !== null)
                    break;
                  fe = le, le = fe.parentNode;
                }
                fe = Oe;
              }
            l = x === -1 || z === -1 ? null : { start: x, end: z };
          } else
            l = null;
        }
      l = l || { start: 0, end: 0 };
    } else
      l = null;
    for (Gp = { focusedElem: n, selectionRange: l }, Iu = !1, Ue = r; Ue !== null; )
      if (r = Ue, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, Ue = n;
      else
        for (; Ue !== null; ) {
          r = Ue;
          try {
            var Ie = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (Ie !== null) {
                    var Ve = Ie.memoizedProps, Kn = Ie.memoizedState, F = r.stateNode, P = F.getSnapshotBeforeUpdate(r.elementType === r.type ? Ve : hi(r.type, Ve), Kn);
                    F.__reactInternalSnapshotBeforeUpdate = P;
                  }
                  break;
                case 3:
                  var Y = r.stateNode.containerInfo;
                  Y.nodeType === 1 ? Y.textContent = "" : Y.nodeType === 9 && Y.documentElement && Y.removeChild(Y.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(s(163));
              }
          } catch (ve) {
            In(r, r.return, ve);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, Ue = n;
            break;
          }
          Ue = r.return;
        }
    return Ie = pd, pd = !1, Ie;
  }
  function fs(n, r, l) {
    var f = r.updateQueue;
    if (f = f !== null ? f.lastEffect : null, f !== null) {
      var h = f = f.next;
      do {
        if ((h.tag & n) === n) {
          var m = h.destroy;
          h.destroy = void 0, m !== void 0 && vh(r, l, m);
        }
        h = h.next;
      } while (h !== f);
    }
  }
  function hd(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var f = l.create;
          l.destroy = f();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function vd(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function Xm(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Xm(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[qi], delete r[Tc], delete r[qp], delete r[HE], delete r[$E])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function mh(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function qm(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || mh(n.return))
            return null;
          n = n.return;
        }
        for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
          if (n.flags & 2 || n.child === null || n.tag === 4)
            continue e;
          n.child.return = n, n = n.child;
        }
        if (!(n.flags & 2))
          return n.stateNode;
      }
  }
  function Hc(n, r, l) {
    var f = n.tag;
    if (f === 5 || f === 6)
      n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = Pf));
    else if (f !== 4 && (n = n.child, n !== null))
      for (Hc(n, r, l), n = n.sibling; n !== null; )
        Hc(n, r, l), n = n.sibling;
  }
  function ds(n, r, l) {
    var f = n.tag;
    if (f === 5 || f === 6)
      n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (f !== 4 && (n = n.child, n !== null))
      for (ds(n, r, l), n = n.sibling; n !== null; )
        ds(n, r, l), n = n.sibling;
  }
  var Tn = null, vr = !1;
  function Wr(n, r, l) {
    for (l = l.child; l !== null; )
      ps(n, r, l), l = l.sibling;
  }
  function ps(n, r, l) {
    if (oi && typeof oi.onCommitFiberUnmount == "function")
      try {
        oi.onCommitFiberUnmount(Xo, l);
      } catch {
      }
    switch (l.tag) {
      case 5:
        wr || cs(l, r);
      case 6:
        var f = Tn, h = vr;
        Tn = null, Wr(n, r, l), Tn = f, vr = h, Tn !== null && (vr ? (n = Tn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : Tn.removeChild(l.stateNode));
        break;
      case 18:
        Tn !== null && (vr ? (n = Tn, l = l.stateNode, n.nodeType === 8 ? Xp(n.parentNode, l) : n.nodeType === 1 && Xp(n, l), Xi(n)) : Xp(Tn, l.stateNode));
        break;
      case 4:
        f = Tn, h = vr, Tn = l.stateNode.containerInfo, vr = !0, Wr(n, r, l), Tn = f, vr = h;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!wr && (f = l.updateQueue, f !== null && (f = f.lastEffect, f !== null))) {
          h = f = f.next;
          do {
            var m = h, b = m.destroy;
            m = m.tag, b !== void 0 && (m & 2 || m & 4) && vh(l, r, b), h = h.next;
          } while (h !== f);
        }
        Wr(n, r, l);
        break;
      case 1:
        if (!wr && (cs(l, r), f = l.stateNode, typeof f.componentWillUnmount == "function"))
          try {
            f.props = l.memoizedProps, f.state = l.memoizedState, f.componentWillUnmount();
          } catch (x) {
            In(l, r, x);
          }
        Wr(n, r, l);
        break;
      case 21:
        Wr(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (wr = (f = wr) || l.memoizedState !== null, Wr(n, r, l), wr = f) : Wr(n, r, l);
        break;
      default:
        Wr(n, r, l);
    }
  }
  function hs(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new dd()), r.forEach(function(f) {
        var h = r_.bind(null, n, f);
        l.has(f) || (l.add(f), f.then(h, h));
      });
    }
  }
  function mr(n, r) {
    var l = r.deletions;
    if (l !== null)
      for (var f = 0; f < l.length; f++) {
        var h = l[f];
        try {
          var m = n, b = r, x = b;
          e:
            for (; x !== null; ) {
              switch (x.tag) {
                case 5:
                  Tn = x.stateNode, vr = !1;
                  break e;
                case 3:
                  Tn = x.stateNode.containerInfo, vr = !0;
                  break e;
                case 4:
                  Tn = x.stateNode.containerInfo, vr = !0;
                  break e;
              }
              x = x.return;
            }
          if (Tn === null)
            throw Error(s(160));
          ps(m, b, h), Tn = null, vr = !1;
          var z = h.alternate;
          z !== null && (z.return = null), h.return = null;
        } catch (Q) {
          In(h, r, Q);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        Zm(r, n), r = r.sibling;
  }
  function Zm(n, r) {
    var l = n.alternate, f = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (mr(r, n), Xa(n), f & 4) {
          try {
            fs(3, n, n.return), hd(3, n);
          } catch (Ve) {
            In(n, n.return, Ve);
          }
          try {
            fs(5, n, n.return);
          } catch (Ve) {
            In(n, n.return, Ve);
          }
        }
        break;
      case 1:
        mr(r, n), Xa(n), f & 512 && l !== null && cs(l, l.return);
        break;
      case 5:
        if (mr(r, n), Xa(n), f & 512 && l !== null && cs(l, l.return), n.flags & 32) {
          var h = n.stateNode;
          try {
            xi(h, "");
          } catch (Ve) {
            In(n, n.return, Ve);
          }
        }
        if (f & 4 && (h = n.stateNode, h != null)) {
          var m = n.memoizedProps, b = l !== null ? l.memoizedProps : m, x = n.type, z = n.updateQueue;
          if (n.updateQueue = null, z !== null)
            try {
              x === "input" && m.type === "radio" && m.name != null && kn(h, m), $n(x, b);
              var Q = $n(x, m);
              for (b = 0; b < z.length; b += 2) {
                var se = z[b], fe = z[b + 1];
                se === "style" ? xt(h, fe) : se === "dangerouslySetInnerHTML" ? Ri(h, fe) : se === "children" ? xi(h, fe) : ge(h, se, fe, Q);
              }
              switch (x) {
                case "input":
                  wn(h, m);
                  break;
                case "textarea":
                  qn(h, m);
                  break;
                case "select":
                  var le = h._wrapperState.wasMultiple;
                  h._wrapperState.wasMultiple = !!m.multiple;
                  var Oe = m.value;
                  Oe != null ? bn(h, !!m.multiple, Oe, !1) : le !== !!m.multiple && (m.defaultValue != null ? bn(
                    h,
                    !!m.multiple,
                    m.defaultValue,
                    !0
                  ) : bn(h, !!m.multiple, m.multiple ? [] : "", !1));
              }
              h[Tc] = m;
            } catch (Ve) {
              In(n, n.return, Ve);
            }
        }
        break;
      case 6:
        if (mr(r, n), Xa(n), f & 4) {
          if (n.stateNode === null)
            throw Error(s(162));
          h = n.stateNode, m = n.memoizedProps;
          try {
            h.nodeValue = m;
          } catch (Ve) {
            In(n, n.return, Ve);
          }
        }
        break;
      case 3:
        if (mr(r, n), Xa(n), f & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Xi(r.containerInfo);
          } catch (Ve) {
            In(n, n.return, Ve);
          }
        break;
      case 4:
        mr(r, n), Xa(n);
        break;
      case 13:
        mr(r, n), Xa(n), h = n.child, h.flags & 8192 && (m = h.memoizedState !== null, h.stateNode.isHidden = m, !m || h.alternate !== null && h.alternate.memoizedState !== null || (gd = pn())), f & 4 && hs(n);
        break;
      case 22:
        if (se = l !== null && l.memoizedState !== null, n.mode & 1 ? (wr = (Q = wr) || se, mr(r, n), wr = Q) : mr(r, n), Xa(n), f & 8192) {
          if (Q = n.memoizedState !== null, (n.stateNode.isHidden = Q) && !se && n.mode & 1)
            for (Ue = n, se = n.child; se !== null; ) {
              for (fe = Ue = se; Ue !== null; ) {
                switch (le = Ue, Oe = le.child, le.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    fs(4, le, le.return);
                    break;
                  case 1:
                    cs(le, le.return);
                    var Ie = le.stateNode;
                    if (typeof Ie.componentWillUnmount == "function") {
                      f = le, l = le.return;
                      try {
                        r = f, Ie.props = r.memoizedProps, Ie.state = r.memoizedState, Ie.componentWillUnmount();
                      } catch (Ve) {
                        In(f, l, Ve);
                      }
                    }
                    break;
                  case 5:
                    cs(le, le.return);
                    break;
                  case 22:
                    if (le.memoizedState !== null) {
                      Jm(fe);
                      continue;
                    }
                }
                Oe !== null ? (Oe.return = le, Ue = Oe) : Jm(fe);
              }
              se = se.sibling;
            }
          e:
            for (se = null, fe = n; ; ) {
              if (fe.tag === 5) {
                if (se === null) {
                  se = fe;
                  try {
                    h = fe.stateNode, Q ? (m = h.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none") : (x = fe.stateNode, z = fe.memoizedProps.style, b = z != null && z.hasOwnProperty("display") ? z.display : null, x.style.display = Xe("display", b));
                  } catch (Ve) {
                    In(n, n.return, Ve);
                  }
                }
              } else if (fe.tag === 6) {
                if (se === null)
                  try {
                    fe.stateNode.nodeValue = Q ? "" : fe.memoizedProps;
                  } catch (Ve) {
                    In(n, n.return, Ve);
                  }
              } else if ((fe.tag !== 22 && fe.tag !== 23 || fe.memoizedState === null || fe === n) && fe.child !== null) {
                fe.child.return = fe, fe = fe.child;
                continue;
              }
              if (fe === n)
                break e;
              for (; fe.sibling === null; ) {
                if (fe.return === null || fe.return === n)
                  break e;
                se === fe && (se = null), fe = fe.return;
              }
              se === fe && (se = null), fe.sibling.return = fe.return, fe = fe.sibling;
            }
        }
        break;
      case 19:
        mr(r, n), Xa(n), f & 4 && hs(n);
        break;
      case 21:
        break;
      default:
        mr(
          r,
          n
        ), Xa(n);
    }
  }
  function Xa(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (mh(l)) {
              var f = l;
              break e;
            }
            l = l.return;
          }
          throw Error(s(160));
        }
        switch (f.tag) {
          case 5:
            var h = f.stateNode;
            f.flags & 32 && (xi(h, ""), f.flags &= -33);
            var m = qm(n);
            ds(n, m, h);
            break;
          case 3:
          case 4:
            var b = f.stateNode.containerInfo, x = qm(n);
            Hc(n, x, b);
            break;
          default:
            throw Error(s(161));
        }
      } catch (z) {
        In(n, n.return, z);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function qE(n, r, l) {
    Ue = n, gh(n);
  }
  function gh(n, r, l) {
    for (var f = (n.mode & 1) !== 0; Ue !== null; ) {
      var h = Ue, m = h.child;
      if (h.tag === 22 && f) {
        var b = h.memoizedState !== null || ss;
        if (!b) {
          var x = h.alternate, z = x !== null && x.memoizedState !== null || wr;
          x = ss;
          var Q = wr;
          if (ss = b, (wr = z) && !Q)
            for (Ue = h; Ue !== null; )
              b = Ue, z = b.child, b.tag === 22 && b.memoizedState !== null ? yh(h) : z !== null ? (z.return = b, Ue = z) : yh(h);
          for (; m !== null; )
            Ue = m, gh(m), m = m.sibling;
          Ue = h, ss = x, wr = Q;
        }
        vs(n);
      } else
        h.subtreeFlags & 8772 && m !== null ? (m.return = h, Ue = m) : vs(n);
    }
  }
  function vs(n) {
    for (; Ue !== null; ) {
      var r = Ue;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                wr || hd(5, r);
                break;
              case 1:
                var f = r.stateNode;
                if (r.flags & 4 && !wr)
                  if (l === null)
                    f.componentDidMount();
                  else {
                    var h = r.elementType === r.type ? l.memoizedProps : hi(r.type, l.memoizedProps);
                    f.componentDidUpdate(h, l.memoizedState, f.__reactInternalSnapshotBeforeUpdate);
                  }
                var m = r.updateQueue;
                m !== null && Zu(r, m, f);
                break;
              case 3:
                var b = r.updateQueue;
                if (b !== null) {
                  if (l = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        l = r.child.stateNode;
                        break;
                      case 1:
                        l = r.child.stateNode;
                    }
                  Zu(r, b, l);
                }
                break;
              case 5:
                var x = r.stateNode;
                if (l === null && r.flags & 4) {
                  l = x;
                  var z = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      z.autoFocus && l.focus();
                      break;
                    case "img":
                      z.src && (l.src = z.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (r.memoizedState === null) {
                  var Q = r.alternate;
                  if (Q !== null) {
                    var se = Q.memoizedState;
                    if (se !== null) {
                      var fe = se.dehydrated;
                      fe !== null && Xi(fe);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(s(163));
            }
          wr || r.flags & 512 && vd(r);
        } catch (le) {
          In(r, r.return, le);
        }
      }
      if (r === n) {
        Ue = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, Ue = l;
        break;
      }
      Ue = r.return;
    }
  }
  function Jm(n) {
    for (; Ue !== null; ) {
      var r = Ue;
      if (r === n) {
        Ue = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, Ue = l;
        break;
      }
      Ue = r.return;
    }
  }
  function yh(n) {
    for (; Ue !== null; ) {
      var r = Ue;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              hd(4, r);
            } catch (z) {
              In(r, l, z);
            }
            break;
          case 1:
            var f = r.stateNode;
            if (typeof f.componentDidMount == "function") {
              var h = r.return;
              try {
                f.componentDidMount();
              } catch (z) {
                In(r, h, z);
              }
            }
            var m = r.return;
            try {
              vd(r);
            } catch (z) {
              In(r, m, z);
            }
            break;
          case 5:
            var b = r.return;
            try {
              vd(r);
            } catch (z) {
              In(r, b, z);
            }
        }
      } catch (z) {
        In(r, r.return, z);
      }
      if (r === n) {
        Ue = null;
        break;
      }
      var x = r.sibling;
      if (x !== null) {
        x.return = r.return, Ue = x;
        break;
      }
      Ue = r.return;
    }
  }
  var ZE = Math.ceil, cu = ae.ReactCurrentDispatcher, md = ae.ReactCurrentOwner, aa = ae.ReactCurrentBatchConfig, kt = 0, jn = null, En = null, lr = 0, Ei = 0, ms = sn(0), ur = 0, $c = null, fu = 0, gs = 0, Eh = 0, yl = null, Vr = null, gd = 0, ys = 1 / 0, No = null, yd = !1, _h = null, oa = null, Es = !1, la = null, Ed = 0, Vc = 0, _d = null, Bc = -1, du = 0;
  function gr() {
    return kt & 6 ? pn() : Bc !== -1 ? Bc : Bc = pn();
  }
  function ko(n) {
    return n.mode & 1 ? kt & 2 && lr !== 0 ? lr & -lr : VE.transition !== null ? (du === 0 && (du = $l()), du) : (n = Mt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : oc(n.type)), n) : 1;
  }
  function An(n, r, l, f) {
    if (50 < Vc)
      throw Vc = 0, _d = null, Error(s(185));
    Zo(n, l, f), (!(kt & 2) || n !== jn) && (n === jn && (!(kt & 2) && (gs |= l), ur === 4 && qa(n, lr)), sr(n, f), l === 1 && kt === 0 && !(r.mode & 1) && (ys = pn() + 500, ll && Ya()));
  }
  function sr(n, r) {
    var l = n.callbackNode;
    qo(n, r);
    var f = Ia(n, n === jn ? lr : 0);
    if (f === 0)
      l !== null && dn(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = f & -f, n.callbackPriority !== r) {
      if (l != null && dn(l), r === 1)
        n.tag === 0 ? Am(_s.bind(null, n)) : If(_s.bind(null, n)), Dm(function() {
          !(kt & 6) && Ya();
        }), l = null;
      else {
        switch (rc(f)) {
          case 1:
            l = Xs;
            break;
          case 4:
            l = ja;
            break;
          case 16:
            l = Dt;
            break;
          case 536870912:
            l = ho;
            break;
          default:
            l = Dt;
        }
        l = lg(l, Sd.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function Sd(n, r) {
    if (Bc = -1, du = 0, kt & 6)
      throw Error(s(327));
    var l = n.callbackNode;
    if (Ss() && n.callbackNode !== l)
      return null;
    var f = Ia(n, n === jn ? lr : 0);
    if (f === 0)
      return null;
    if (f & 30 || f & n.expiredLanes || r)
      r = bd(n, f);
    else {
      r = f;
      var h = kt;
      kt |= 2;
      var m = tg();
      (jn !== n || lr !== r) && (No = null, ys = pn() + 500, hu(n, r));
      do
        try {
          e_();
          break;
        } catch (x) {
          eg(n, x);
        }
      while (!0);
      nh(), cu.current = m, kt = h, En !== null ? r = 0 : (jn = null, lr = 0, r = ur);
    }
    if (r !== 0) {
      if (r === 2 && (h = Fa(n), h !== 0 && (f = h, r = pu(n, h))), r === 1)
        throw l = $c, hu(n, 0), qa(n, f), sr(n, pn()), l;
      if (r === 6)
        qa(n, f);
      else {
        if (h = n.current.alternate, !(f & 30) && !Ch(h) && (r = bd(n, f), r === 2 && (m = Fa(n), m !== 0 && (f = m, r = pu(n, m))), r === 1))
          throw l = $c, hu(n, 0), qa(n, f), sr(n, pn()), l;
        switch (n.finishedWork = h, n.finishedLanes = f, r) {
          case 0:
          case 1:
            throw Error(s(345));
          case 2:
            El(n, Vr, No);
            break;
          case 3:
            if (qa(n, f), (f & 130023424) === f && (r = gd + 500 - pn(), 10 < r)) {
              if (Ia(n, 0) !== 0)
                break;
              if (h = n.suspendedLanes, (h & f) !== f) {
                gr(), n.pingedLanes |= n.suspendedLanes & h;
                break;
              }
              n.timeoutHandle = Sc(El.bind(null, n, Vr, No), r);
              break;
            }
            El(n, Vr, No);
            break;
          case 4:
            if (qa(n, f), (f & 4194240) === f)
              break;
            for (r = n.eventTimes, h = -1; 0 < f; ) {
              var b = 31 - Br(f);
              m = 1 << b, b = r[b], b > h && (h = b), f &= ~m;
            }
            if (f = h, f = pn() - f, f = (120 > f ? 120 : 480 > f ? 480 : 1080 > f ? 1080 : 1920 > f ? 1920 : 3e3 > f ? 3e3 : 4320 > f ? 4320 : 1960 * ZE(f / 1960)) - f, 10 < f) {
              n.timeoutHandle = Sc(El.bind(null, n, Vr, No), f);
              break;
            }
            El(n, Vr, No);
            break;
          case 5:
            El(n, Vr, No);
            break;
          default:
            throw Error(s(329));
        }
      }
    }
    return sr(n, pn()), n.callbackNode === l ? Sd.bind(null, n) : null;
  }
  function pu(n, r) {
    var l = yl;
    return n.current.memoizedState.isDehydrated && (hu(n, r).flags |= 256), n = bd(n, r), n !== 2 && (r = Vr, Vr = l, r !== null && Sh(r)), n;
  }
  function Sh(n) {
    Vr === null ? Vr = n : Vr.push.apply(Vr, n);
  }
  function Ch(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null))
          for (var f = 0; f < l.length; f++) {
            var h = l[f], m = h.getSnapshot;
            h = h.value;
            try {
              if (!Ta(m(), h))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null)
        l.return = r, r = l;
      else {
        if (r === n)
          break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n)
            return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function qa(n, r) {
    for (r &= ~Eh, r &= ~gs, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Br(r), f = 1 << l;
      n[l] = -1, r &= ~f;
    }
  }
  function _s(n) {
    if (kt & 6)
      throw Error(s(327));
    Ss();
    var r = Ia(n, 0);
    if (!(r & 1))
      return sr(n, pn()), null;
    var l = bd(n, r);
    if (n.tag !== 0 && l === 2) {
      var f = Fa(n);
      f !== 0 && (r = f, l = pu(n, f));
    }
    if (l === 1)
      throw l = $c, hu(n, 0), qa(n, r), sr(n, pn()), l;
    if (l === 6)
      throw Error(s(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, El(n, Vr, No), sr(n, pn()), null;
  }
  function bh(n, r) {
    var l = kt;
    kt |= 1;
    try {
      return n(r);
    } finally {
      kt = l, kt === 0 && (ys = pn() + 500, ll && Ya());
    }
  }
  function Za(n) {
    la !== null && la.tag === 0 && !(kt & 6) && Ss();
    var r = kt;
    kt |= 1;
    var l = aa.transition, f = Mt;
    try {
      if (aa.transition = null, Mt = 1, n)
        return n();
    } finally {
      Mt = f, aa.transition = l, kt = r, !(kt & 6) && Ya();
    }
  }
  function Cd() {
    Ei = ms.current, Be(ms);
  }
  function hu(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Cc(l)), En !== null)
      for (l = En.return; l !== null; ) {
        var f = l;
        switch (Hf(f), f.tag) {
          case 1:
            f = f.type.childContextTypes, f != null && ci();
            break;
          case 3:
            ns(), Be(_t), Be(hr), na();
            break;
          case 5:
            rt(f);
            break;
          case 4:
            ns();
            break;
          case 13:
            Be(Ge);
            break;
          case 19:
            Be(Ge);
            break;
          case 10:
            rh(f.type._context);
            break;
          case 22:
          case 23:
            Cd();
        }
        l = l.return;
      }
    if (jn = n, En = n = _l(n.current, null), lr = Ei = r, ur = 0, $c = null, Eh = gs = fu = 0, Vr = yl = null, Hr !== null) {
      for (r = 0; r < Hr.length; r++)
        if (l = Hr[r], f = l.interleaved, f !== null) {
          l.interleaved = null;
          var h = f.next, m = l.pending;
          if (m !== null) {
            var b = m.next;
            m.next = h, f.next = b;
          }
          l.pending = f;
        }
      Hr = null;
    }
    return n;
  }
  function eg(n, r) {
    do {
      var l = En;
      try {
        if (nh(), Ac.current = od, Yn) {
          for (var f = On.memoizedState; f !== null; ) {
            var h = f.queue;
            h !== null && (h.pending = null), f = f.next;
          }
          Yn = !1;
        }
        if (tu = 0, te = Bn = On = null, lt = !1, Ka = 0, md.current = null, l === null || l.return === null) {
          ur = 1, $c = r, En = null;
          break;
        }
        e: {
          var m = n, b = l.return, x = l, z = r;
          if (r = lr, x.flags |= 32768, z !== null && typeof z == "object" && typeof z.then == "function") {
            var Q = z, se = x, fe = se.tag;
            if (!(se.mode & 1) && (fe === 0 || fe === 11 || fe === 15)) {
              var le = se.alternate;
              le ? (se.updateQueue = le.updateQueue, se.memoizedState = le.memoizedState, se.lanes = le.lanes) : (se.updateQueue = null, se.memoizedState = null);
            }
            var Oe = Ym(b);
            if (Oe !== null) {
              Oe.flags &= -257, dh(Oe, b, x, m, r), Oe.mode & 1 && Pc(m, Q, r), r = Oe, z = Q;
              var Ie = r.updateQueue;
              if (Ie === null) {
                var Ve = /* @__PURE__ */ new Set();
                Ve.add(z), r.updateQueue = Ve;
              } else
                Ie.add(z);
              break e;
            } else {
              if (!(r & 1)) {
                Pc(m, Q, r), Yc();
                break e;
              }
              z = Error(s(426));
            }
          } else if (yn && x.mode & 1) {
            var Kn = Ym(b);
            if (Kn !== null) {
              !(Kn.flags & 65536) && (Kn.flags |= 256), dh(Kn, b, x, m, r), tr(ml(z, x));
              break e;
            }
          }
          m = z = ml(z, x), ur !== 4 && (ur = 2), yl === null ? yl = [m] : yl.push(m), m = b;
          do {
            switch (m.tag) {
              case 3:
                m.flags |= 65536, r &= -r, m.lanes |= r;
                var F = Vm(m, z, r);
                Mm(m, F);
                break e;
              case 1:
                x = z;
                var P = m.type, Y = m.stateNode;
                if (!(m.flags & 128) && (typeof P.getDerivedStateFromError == "function" || Y !== null && typeof Y.componentDidCatch == "function" && (oa === null || !oa.has(Y)))) {
                  m.flags |= 65536, r &= -r, m.lanes |= r;
                  var ve = Bm(m, x, r);
                  Mm(m, ve);
                  break e;
                }
            }
            m = m.return;
          } while (m !== null);
        }
        rg(l);
      } catch (Ye) {
        r = Ye, En === l && l !== null && (En = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function tg() {
    var n = cu.current;
    return cu.current = od, n === null ? od : n;
  }
  function Yc() {
    (ur === 0 || ur === 3 || ur === 2) && (ur = 4), jn === null || !(fu & 268435455) && !(gs & 268435455) || qa(jn, lr);
  }
  function bd(n, r) {
    var l = kt;
    kt |= 2;
    var f = tg();
    (jn !== n || lr !== r) && (No = null, hu(n, r));
    do
      try {
        JE();
        break;
      } catch (h) {
        eg(n, h);
      }
    while (!0);
    if (nh(), kt = l, cu.current = f, En !== null)
      throw Error(s(261));
    return jn = null, lr = 0, ur;
  }
  function JE() {
    for (; En !== null; )
      ng(En);
  }
  function e_() {
    for (; En !== null && !Ir(); )
      ng(En);
  }
  function ng(n) {
    var r = og(n.alternate, n, Ei);
    n.memoizedProps = n.pendingProps, r === null ? rg(n) : En = r, md.current = null;
  }
  function rg(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = QE(l, r), l !== null) {
          l.flags &= 32767, En = l;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          ur = 6, En = null;
          return;
        }
      } else if (l = KE(l, r, Ei), l !== null) {
        En = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        En = r;
        return;
      }
      En = r = n;
    } while (r !== null);
    ur === 0 && (ur = 5);
  }
  function El(n, r, l) {
    var f = Mt, h = aa.transition;
    try {
      aa.transition = null, Mt = 1, t_(n, r, l, f);
    } finally {
      aa.transition = h, Mt = f;
    }
    return null;
  }
  function t_(n, r, l, f) {
    do
      Ss();
    while (la !== null);
    if (kt & 6)
      throw Error(s(327));
    l = n.finishedWork;
    var h = n.finishedLanes;
    if (l === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current)
      throw Error(s(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var m = l.lanes | l.childLanes;
    if (tc(n, m), n === jn && (En = jn = null, lr = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || Es || (Es = !0, lg(Dt, function() {
      return Ss(), null;
    })), m = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || m) {
      m = aa.transition, aa.transition = null;
      var b = Mt;
      Mt = 1;
      var x = kt;
      kt |= 4, md.current = null, XE(n, l), Zm(l, n), Gl(Gp), Iu = !!Wp, Gp = Wp = null, n.current = l, qE(l), Pa(), kt = x, Mt = b, aa.transition = m;
    } else
      n.current = l;
    if (Es && (Es = !1, la = n, Ed = h), m = n.pendingLanes, m === 0 && (oa = null), qs(l.stateNode), sr(n, pn()), r !== null)
      for (f = n.onRecoverableError, l = 0; l < r.length; l++)
        h = r[l], f(h.value, { componentStack: h.stack, digest: h.digest });
    if (yd)
      throw yd = !1, n = _h, _h = null, n;
    return Ed & 1 && n.tag !== 0 && Ss(), m = n.pendingLanes, m & 1 ? n === _d ? Vc++ : (Vc = 0, _d = n) : Vc = 0, Ya(), null;
  }
  function Ss() {
    if (la !== null) {
      var n = rc(Ed), r = aa.transition, l = Mt;
      try {
        if (aa.transition = null, Mt = 16 > n ? 16 : n, la === null)
          var f = !1;
        else {
          if (n = la, la = null, Ed = 0, kt & 6)
            throw Error(s(331));
          var h = kt;
          for (kt |= 4, Ue = n.current; Ue !== null; ) {
            var m = Ue, b = m.child;
            if (Ue.flags & 16) {
              var x = m.deletions;
              if (x !== null) {
                for (var z = 0; z < x.length; z++) {
                  var Q = x[z];
                  for (Ue = Q; Ue !== null; ) {
                    var se = Ue;
                    switch (se.tag) {
                      case 0:
                      case 11:
                      case 15:
                        fs(8, se, m);
                    }
                    var fe = se.child;
                    if (fe !== null)
                      fe.return = se, Ue = fe;
                    else
                      for (; Ue !== null; ) {
                        se = Ue;
                        var le = se.sibling, Oe = se.return;
                        if (Xm(se), se === Q) {
                          Ue = null;
                          break;
                        }
                        if (le !== null) {
                          le.return = Oe, Ue = le;
                          break;
                        }
                        Ue = Oe;
                      }
                  }
                }
                var Ie = m.alternate;
                if (Ie !== null) {
                  var Ve = Ie.child;
                  if (Ve !== null) {
                    Ie.child = null;
                    do {
                      var Kn = Ve.sibling;
                      Ve.sibling = null, Ve = Kn;
                    } while (Ve !== null);
                  }
                }
                Ue = m;
              }
            }
            if (m.subtreeFlags & 2064 && b !== null)
              b.return = m, Ue = b;
            else
              e:
                for (; Ue !== null; ) {
                  if (m = Ue, m.flags & 2048)
                    switch (m.tag) {
                      case 0:
                      case 11:
                      case 15:
                        fs(9, m, m.return);
                    }
                  var F = m.sibling;
                  if (F !== null) {
                    F.return = m.return, Ue = F;
                    break e;
                  }
                  Ue = m.return;
                }
          }
          var P = n.current;
          for (Ue = P; Ue !== null; ) {
            b = Ue;
            var Y = b.child;
            if (b.subtreeFlags & 2064 && Y !== null)
              Y.return = b, Ue = Y;
            else
              e:
                for (b = P; Ue !== null; ) {
                  if (x = Ue, x.flags & 2048)
                    try {
                      switch (x.tag) {
                        case 0:
                        case 11:
                        case 15:
                          hd(9, x);
                      }
                    } catch (Ye) {
                      In(x, x.return, Ye);
                    }
                  if (x === b) {
                    Ue = null;
                    break e;
                  }
                  var ve = x.sibling;
                  if (ve !== null) {
                    ve.return = x.return, Ue = ve;
                    break e;
                  }
                  Ue = x.return;
                }
          }
          if (kt = h, Ya(), oi && typeof oi.onPostCommitFiberRoot == "function")
            try {
              oi.onPostCommitFiberRoot(Xo, n);
            } catch {
            }
          f = !0;
        }
        return f;
      } finally {
        Mt = l, aa.transition = r;
      }
    }
    return !1;
  }
  function ig(n, r, l) {
    r = ml(l, r), r = Vm(n, r, 1), n = dl(n, r, 1), r = gr(), n !== null && (Zo(n, 1, r), sr(n, r));
  }
  function In(n, r, l) {
    if (n.tag === 3)
      ig(n, n, l);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          ig(r, n, l);
          break;
        } else if (r.tag === 1) {
          var f = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof f.componentDidCatch == "function" && (oa === null || !oa.has(f))) {
            n = ml(l, n), n = Bm(r, n, 1), r = dl(r, n, 1), n = gr(), r !== null && (Zo(r, 1, n), sr(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function n_(n, r, l) {
    var f = n.pingCache;
    f !== null && f.delete(r), r = gr(), n.pingedLanes |= n.suspendedLanes & l, jn === n && (lr & l) === l && (ur === 4 || ur === 3 && (lr & 130023424) === lr && 500 > pn() - gd ? hu(n, 0) : Eh |= l), sr(n, r);
  }
  function ag(n, r) {
    r === 0 && (n.mode & 1 ? (r = zu, zu <<= 1, !(zu & 130023424) && (zu = 4194304)) : r = 1);
    var l = gr();
    n = Do(n, r), n !== null && (Zo(n, r, l), sr(n, l));
  }
  function Th(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), ag(n, l);
  }
  function r_(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var f = n.stateNode, h = n.memoizedState;
        h !== null && (l = h.retryLane);
        break;
      case 19:
        f = n.stateNode;
        break;
      default:
        throw Error(s(314));
    }
    f !== null && f.delete(r), ag(n, l);
  }
  var og;
  og = function(n, r, l) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || _t.current)
        gi = !0;
      else {
        if (!(n.lanes & l) && !(r.flags & 128))
          return gi = !1, Ao(n, r, l);
        gi = !!(n.flags & 131072);
      }
    else
      gi = !1, yn && r.flags & 1048576 && sl(r, Zl, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var f = r.type;
        Fc(n, r), n = r.pendingProps;
        var h = ki(r, hr.current);
        Vn(r, l), h = nu(null, r, f, n, h, l);
        var m = hl();
        return r.flags |= 1, typeof h == "object" && h !== null && typeof h.render == "function" && h.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, er(f) ? (m = !0, ql(r)) : m = !1, r.memoizedState = h.state !== null && h.state !== void 0 ? h.state : null, ih(r), h.updater = Yf, r.stateNode = h, h._reactInternals = r, oh(r, f, n, l), r = ud(null, r, f, !0, m, l)) : (r.tag = 0, yn && m && Ff(r), Wn(null, r, h, l), r = r.child), r;
      case 16:
        f = r.elementType;
        e: {
          switch (Fc(n, r), n = r.pendingProps, h = f._init, f = h(f._payload), r.type = f, h = r.tag = i_(f), n = hi(f, n), h) {
            case 0:
              r = Tt(null, r, f, n, l);
              break e;
            case 1:
              r = jc(null, r, f, n, l);
              break e;
            case 11:
              r = os(null, r, f, n, l);
              break e;
            case 14:
              r = gl(null, r, f, hi(f.type, n), l);
              break e;
          }
          throw Error(s(
            306,
            f,
            ""
          ));
        }
        return r;
      case 0:
        return f = r.type, h = r.pendingProps, h = r.elementType === f ? h : hi(f, h), Tt(n, r, f, h, l);
      case 1:
        return f = r.type, h = r.pendingProps, h = r.elementType === f ? h : hi(f, h), jc(n, r, f, h, l);
      case 3:
        e: {
          if (GE(r), n === null)
            throw Error(s(387));
          f = r.pendingProps, m = r.memoizedState, h = m.element, Lm(n, r), Rc(r, f, null, l);
          var b = r.memoizedState;
          if (f = b.element, m.isDehydrated)
            if (m = { element: f, isDehydrated: !1, cache: b.cache, pendingSuspenseBoundaries: b.pendingSuspenseBoundaries, transitions: b.transitions }, r.updateQueue.baseState = m, r.memoizedState = m, r.flags & 256) {
              h = ml(Error(s(423)), r), r = Gm(n, r, f, l, h);
              break e;
            } else if (f !== h) {
              h = ml(Error(s(424)), r), r = Gm(n, r, f, l, h);
              break e;
            } else
              for (Mi = Ni(r.stateNode.containerInfo.firstChild), Li = r, yn = !0, ta = null, l = Fm(r, null, f, l), r.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Qu(), f === h) {
              r = Gn(n, r, l);
              break e;
            }
            Wn(n, r, f, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Wf(r), n === null && $f(r), f = r.type, h = r.pendingProps, m = n !== null ? n.memoizedProps : null, b = h.children, Xl(f, h) ? b = null : m !== null && Xl(f, m) && (r.flags |= 32), uu(n, r), Wn(n, r, b, l), r.child;
      case 6:
        return n === null && $f(r), null;
      case 13:
        return Km(n, r, l);
      case 4:
        return lh(r, r.stateNode.containerInfo), f = r.pendingProps, n === null ? r.child = es(r, null, f, l) : Wn(n, r, f, l), r.child;
      case 11:
        return f = r.type, h = r.pendingProps, h = r.elementType === f ? h : hi(f, h), os(n, r, f, h, l);
      case 7:
        return Wn(n, r, r.pendingProps, l), r.child;
      case 8:
        return Wn(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return Wn(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (f = r.type._context, h = r.pendingProps, m = r.memoizedProps, b = h.value, Vt(Xu, f._currentValue), f._currentValue = b, m !== null)
            if (Ta(m.value, b)) {
              if (m.children === h.children && !_t.current) {
                r = Gn(n, r, l);
                break e;
              }
            } else
              for (m = r.child, m !== null && (m.return = r); m !== null; ) {
                var x = m.dependencies;
                if (x !== null) {
                  b = m.child;
                  for (var z = x.firstContext; z !== null; ) {
                    if (z.context === f) {
                      if (m.tag === 1) {
                        z = hn(-1, l & -l), z.tag = 2;
                        var Q = m.updateQueue;
                        if (Q !== null) {
                          Q = Q.shared;
                          var se = Q.pending;
                          se === null ? z.next = z : (z.next = se.next, se.next = z), Q.pending = z;
                        }
                      }
                      m.lanes |= l, z = m.alternate, z !== null && (z.lanes |= l), cl(
                        m.return,
                        l,
                        r
                      ), x.lanes |= l;
                      break;
                    }
                    z = z.next;
                  }
                } else if (m.tag === 10)
                  b = m.type === r.type ? null : m.child;
                else if (m.tag === 18) {
                  if (b = m.return, b === null)
                    throw Error(s(341));
                  b.lanes |= l, x = b.alternate, x !== null && (x.lanes |= l), cl(b, l, r), b = m.sibling;
                } else
                  b = m.child;
                if (b !== null)
                  b.return = m;
                else
                  for (b = m; b !== null; ) {
                    if (b === r) {
                      b = null;
                      break;
                    }
                    if (m = b.sibling, m !== null) {
                      m.return = b.return, b = m;
                      break;
                    }
                    b = b.return;
                  }
                m = b;
              }
          Wn(n, r, h.children, l), r = r.child;
        }
        return r;
      case 9:
        return h = r.type, f = r.pendingProps.children, Vn(r, l), h = me(h), f = f(h), r.flags |= 1, Wn(n, r, f, l), r.child;
      case 14:
        return f = r.type, h = hi(f, r.pendingProps), h = hi(f.type, h), gl(n, r, f, h, l);
      case 15:
        return ld(n, r, r.type, r.pendingProps, l);
      case 17:
        return f = r.type, h = r.pendingProps, h = r.elementType === f ? h : hi(f, h), Fc(n, r), r.tag = 1, er(f) ? (n = !0, ql(r)) : n = !1, Vn(r, l), Um(r, f, h), oh(r, f, h, l), ud(null, r, f, !0, n, l);
      case 19:
        return hh(n, r, l);
      case 22:
        return yi(n, r, l);
    }
    throw Error(s(156, r.tag));
  };
  function lg(n, r) {
    return fn(n, r);
  }
  function ug(n, r, l, f) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = f, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ua(n, r, l, f) {
    return new ug(n, r, l, f);
  }
  function wh(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function i_(n) {
    if (typeof n == "function")
      return wh(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === at)
        return 11;
      if (n === Ze)
        return 14;
    }
    return 2;
  }
  function _l(n, r) {
    var l = n.alternate;
    return l === null ? (l = ua(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function Td(n, r, l, f, h, m) {
    var b = 2;
    if (f = n, typeof n == "function")
      wh(n) && (b = 1);
    else if (typeof n == "string")
      b = 5;
    else
      e:
        switch (n) {
          case Ne:
            return vu(l.children, h, m, r);
          case De:
            b = 8, h |= 8;
            break;
          case tt:
            return n = ua(12, l, r, h | 2), n.elementType = tt, n.lanes = m, n;
          case ct:
            return n = ua(13, l, r, h), n.elementType = ct, n.lanes = m, n;
          case je:
            return n = ua(19, l, r, h), n.elementType = je, n.lanes = m, n;
          case We:
            return wd(l, h, m, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case vt:
                  b = 10;
                  break e;
                case ot:
                  b = 9;
                  break e;
                case at:
                  b = 11;
                  break e;
                case Ze:
                  b = 14;
                  break e;
                case qe:
                  b = 16, f = null;
                  break e;
              }
            throw Error(s(130, n == null ? n : typeof n, ""));
        }
    return r = ua(b, l, r, h), r.elementType = n, r.type = f, r.lanes = m, r;
  }
  function vu(n, r, l, f) {
    return n = ua(7, n, f, r), n.lanes = l, n;
  }
  function wd(n, r, l, f) {
    return n = ua(22, n, f, r), n.elementType = We, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Rd(n, r, l) {
    return n = ua(6, n, null, r), n.lanes = l, n;
  }
  function Wc(n, r, l) {
    return r = ua(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Gc(n, r, l, f, h) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Vl(0), this.expirationTimes = Vl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Vl(0), this.identifierPrefix = f, this.onRecoverableError = h, this.mutableSourceEagerHydrationData = null;
  }
  function Rh(n, r, l, f, h, m, b, x, z) {
    return n = new Gc(n, r, l, x, z), r === 1 ? (r = 1, m === !0 && (r |= 8)) : r = 0, m = ua(3, null, null, r), n.current = m, m.stateNode = n, m.memoizedState = { element: f, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ih(m), n;
  }
  function sg(n, r, l) {
    var f = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: oe, key: f == null ? null : "" + f, children: n, containerInfo: r, implementation: l };
  }
  function xh(n) {
    if (!n)
      return Zi;
    n = n._reactInternals;
    e: {
      if (Te(n) !== n || n.tag !== 1)
        throw Error(s(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (er(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(s(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (er(l))
        return ol(n, l, r);
    }
    return r;
  }
  function Dh(n, r, l, f, h, m, b, x, z) {
    return n = Rh(l, f, !0, n, h, m, b, x, z), n.context = xh(null), l = n.current, f = gr(), h = ko(l), m = hn(f, h), m.callback = r ?? null, dl(l, m, h), n.current.lanes = h, Zo(n, h, f), sr(n, f), n;
  }
  function xd(n, r, l, f) {
    var h = r.current, m = gr(), b = ko(h);
    return l = xh(l), r.context === null ? r.context = l : r.pendingContext = l, r = hn(m, b), r.payload = { element: n }, f = f === void 0 ? null : f, f !== null && (r.callback = f), n = dl(h, r, b), n !== null && (An(n, h, b, m), Bf(n, h, b)), b;
  }
  function Kc(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function cg(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function Oh(n, r) {
    cg(n, r), (n = n.alternate) && cg(n, r);
  }
  function a_() {
    return null;
  }
  var Ah = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Dd(n) {
    this._internalRoot = n;
  }
  Qc.prototype.render = Dd.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(s(409));
    xd(n, r, null, null);
  }, Qc.prototype.unmount = Dd.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Za(function() {
        xd(null, n, null, null);
      }), r[wa] = null;
    }
  };
  function Qc(n) {
    this._internalRoot = n;
  }
  Qc.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = It();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < mn.length && r !== 0 && r < mn[l].priority; l++)
        ;
      mn.splice(l, 0, n), l === 0 && Ca(n);
    }
  };
  function Sl(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Od(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function fg() {
  }
  function o_(n, r, l, f, h) {
    if (h) {
      if (typeof f == "function") {
        var m = f;
        f = function() {
          var Q = Kc(b);
          m.call(Q);
        };
      }
      var b = Dh(r, f, n, 0, null, !1, !1, "", fg);
      return n._reactRootContainer = b, n[wa] = b.current, $a(n.nodeType === 8 ? n.parentNode : n), Za(), b;
    }
    for (; h = n.lastChild; )
      n.removeChild(h);
    if (typeof f == "function") {
      var x = f;
      f = function() {
        var Q = Kc(z);
        x.call(Q);
      };
    }
    var z = Rh(n, 0, !1, null, null, !1, !1, "", fg);
    return n._reactRootContainer = z, n[wa] = z.current, $a(n.nodeType === 8 ? n.parentNode : n), Za(function() {
      xd(r, z, l, f);
    }), z;
  }
  function Ad(n, r, l, f, h) {
    var m = l._reactRootContainer;
    if (m) {
      var b = m;
      if (typeof h == "function") {
        var x = h;
        h = function() {
          var z = Kc(b);
          x.call(z);
        };
      }
      xd(r, b, n, h);
    } else
      b = o_(l, r, n, h, f);
    return Kc(b);
  }
  Uu = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = vo(r.pendingLanes);
          l !== 0 && (nc(r, l | 1), sr(r, pn()), !(kt & 6) && (ys = pn() + 500, Ya()));
        }
        break;
      case 13:
        Za(function() {
          var f = Do(n, 1);
          if (f !== null) {
            var h = gr();
            An(f, n, 1, h);
          }
        }), Oh(n, 1);
    }
  }, Jo = function(n) {
    if (n.tag === 13) {
      var r = Do(n, 134217728);
      if (r !== null) {
        var l = gr();
        An(r, n, 134217728, l);
      }
      Oh(n, 134217728);
    }
  }, ic = function(n) {
    if (n.tag === 13) {
      var r = ko(n), l = Do(n, r);
      if (l !== null) {
        var f = gr();
        An(l, n, r, f);
      }
      Oh(n, r);
    }
  }, It = function() {
    return Mt;
  }, Pu = function(n, r) {
    var l = Mt;
    try {
      return Mt = n, r();
    } finally {
      Mt = l;
    }
  }, Jt = function(n, r, l) {
    switch (r) {
      case "input":
        if (wn(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; )
            l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var f = l[r];
            if (f !== n && f.form === n.form) {
              var h = jf(f);
              if (!h)
                throw Error(s(90));
              Mr(f), wn(f, h);
            }
          }
        }
        break;
      case "textarea":
        qn(n, l);
        break;
      case "select":
        r = l.value, r != null && bn(n, !!l.multiple, r, !1);
    }
  }, Ko = bh, jl = Za;
  var l_ = { usingClientEntryPoint: !1, Events: [Va, Ku, jf, ya, Wi, bh] }, Xc = { findFiberByHostInstance: Ro, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, dg = { bundleType: Xc.bundleType, version: Xc.version, rendererPackageName: Xc.rendererPackageName, rendererConfig: Xc.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ae.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = et(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Xc.findFiberByHostInstance || a_, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Nd = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Nd.isDisabled && Nd.supportsFiber)
      try {
        Xo = Nd.inject(dg), oi = Nd;
      } catch {
      }
  }
  return va.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = l_, va.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Sl(r))
      throw Error(s(200));
    return sg(n, r, null, l);
  }, va.createRoot = function(n, r) {
    if (!Sl(n))
      throw Error(s(299));
    var l = !1, f = "", h = Ah;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (f = r.identifierPrefix), r.onRecoverableError !== void 0 && (h = r.onRecoverableError)), r = Rh(n, 1, !1, null, null, l, !1, f, h), n[wa] = r.current, $a(n.nodeType === 8 ? n.parentNode : n), new Dd(r);
  }, va.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(s(188)) : (n = Object.keys(n).join(","), Error(s(268, n)));
    return n = et(r), n = n === null ? null : n.stateNode, n;
  }, va.flushSync = function(n) {
    return Za(n);
  }, va.hydrate = function(n, r, l) {
    if (!Od(r))
      throw Error(s(200));
    return Ad(null, n, r, !0, l);
  }, va.hydrateRoot = function(n, r, l) {
    if (!Sl(n))
      throw Error(s(405));
    var f = l != null && l.hydratedSources || null, h = !1, m = "", b = Ah;
    if (l != null && (l.unstable_strictMode === !0 && (h = !0), l.identifierPrefix !== void 0 && (m = l.identifierPrefix), l.onRecoverableError !== void 0 && (b = l.onRecoverableError)), r = Dh(r, null, n, 1, l ?? null, h, !1, m, b), n[wa] = r.current, $a(n), f)
      for (n = 0; n < f.length; n++)
        l = f[n], h = l._getVersion, h = h(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, h] : r.mutableSourceEagerHydrationData.push(
          l,
          h
        );
    return new Qc(r);
  }, va.render = function(n, r, l) {
    if (!Od(r))
      throw Error(s(200));
    return Ad(null, n, r, !1, l);
  }, va.unmountComponentAtNode = function(n) {
    if (!Od(n))
      throw Error(s(40));
    return n._reactRootContainer ? (Za(function() {
      Ad(null, null, n, !1, function() {
        n._reactRootContainer = null, n[wa] = null;
      });
    }), !0) : !1;
  }, va.unstable_batchedUpdates = bh, va.unstable_renderSubtreeIntoContainer = function(n, r, l, f) {
    if (!Od(l))
      throw Error(s(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(s(38));
    return Ad(n, r, l, !1, f);
  }, va.version = "18.2.0-next-9e3b772b8-20220608", va;
}
var Y1 = {};
function W1() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (Y1.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(W1);
    } catch (c) {
      console.error(c);
    }
  }
}
Y1.NODE_ENV === "production" ? (W1(), xC.exports = dM()) : xC.exports = fM();
var pM = xC.exports, hM = {}, Av = pM;
if (hM.NODE_ENV === "production")
  Mv.createRoot = Av.createRoot, Mv.hydrateRoot = Av.hydrateRoot;
else {
  var By = Av.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Mv.createRoot = function(c, a) {
    By.usingClientEntryPoint = !0;
    try {
      return Av.createRoot(c, a);
    } finally {
      By.usingClientEntryPoint = !1;
    }
  }, Mv.hydrateRoot = function(c, a, s) {
    By.usingClientEntryPoint = !0;
    try {
      return Av.hydrateRoot(c, a, s);
    } finally {
      By.usingClientEntryPoint = !1;
    }
  };
}
const IC = ({ image: c, sx: a, sy: s, sw: p, sh: y }) => {
  const C = Pe.useRef(null);
  return Pe.useEffect(() => {
    const T = setInterval(() => {
      if (C.current) {
        const E = C.current.getContext("2d");
        E && c && (C.current.width = p, C.current.height = y, E.drawImage(
          c,
          a,
          // sx
          s,
          // sy
          p,
          // sw
          y,
          // sh
          0,
          // dx
          0,
          // dy
          p,
          // dw
          y
          // dh
        ), clearInterval(T));
      }
    }, 100);
  }, [c, a, s, p, y]), /* @__PURE__ */ ie.jsx("canvas", { className: "m-0", ref: C });
};
var G1 = {};
(function(c) {
  Object.defineProperty(c, "__esModule", {
    value: !0
  }), c.default = c.useDeferredState = void 0;
  var a = s(Pe);
  function s(M) {
    return M && M.__esModule ? M : { default: M };
  }
  function p(M, I) {
    return O(M) || E(M, I) || C(M, I) || y();
  }
  function y() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function C(M, I) {
    if (M) {
      if (typeof M == "string")
        return T(M, I);
      var H = Object.prototype.toString.call(M).slice(8, -1);
      if (H === "Object" && M.constructor && (H = M.constructor.name), H === "Map" || H === "Set")
        return Array.from(M);
      if (H === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(H))
        return T(M, I);
    }
  }
  function T(M, I) {
    (I == null || I > M.length) && (I = M.length);
    for (var H = 0, B = new Array(I); H < I; H++)
      B[H] = M[H];
    return B;
  }
  function E(M, I) {
    if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(M)))) {
      var H = [], B = !0, X = !1, pe = void 0;
      try {
        for (var we = M[Symbol.iterator](), ze; !(B = (ze = we.next()).done) && (H.push(ze.value), !(I && H.length === I)); B = !0)
          ;
      } catch (ge) {
        X = !0, pe = ge;
      } finally {
        try {
          !B && we.return != null && we.return();
        } finally {
          if (X)
            throw pe;
        }
      }
      return H;
    }
  }
  function O(M) {
    if (Array.isArray(M))
      return M;
  }
  var k = function(I) {
    var H = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], B = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 500, X = a.default.useState(I), pe = p(X, 2), we = pe[0], ze = pe[1], ge = a.default.useRef(H);
    (H.length !== ge.current.length || H.some(function(Ce, oe) {
      return ge.current[oe] !== Ce;
    })) && (ge.current = H);
    var ae = ge.current;
    return a.default.useLayoutEffect(function() {
      var Ce = I;
      if (we !== Ce)
        if (ae.includes(Ce))
          ze(Ce);
        else {
          var oe = window.setTimeout(function() {
            ze(Ce);
          }, B);
          return function() {
            return window.clearTimeout(oe);
          };
        }
    }, [I, B, we, ae]), H.includes(I) ? I : we;
  };
  c.useDeferredState = k;
  var D = k;
  c.default = D;
})(G1);
const FC = /* @__PURE__ */ V1(G1);
class vM {
  constructor(a, s) {
    Yo(this, "width", 384);
    Yo(this, "height", 512);
    Object.assign(this, s), a.image && !(s != null && s.height) && ((a.image.naturalHeight - a.header.height) % 768 == 0 ? this.height = 768 : (a.image.naturalHeight - a.header.height) % 512 == 0 && (this.height = 512));
  }
}
class qR {
  constructor(a) {
    Yo(this, "width", 384);
    Yo(this, "height", 256);
    Object.assign(this, a);
  }
}
class Sf {
  constructor(a) {
    Yo(this, "cell");
    Yo(this, "header");
    Yo(this, "cols", 0);
    Yo(this, "rows", 0);
    Yo(this, "image");
    Yo(this, "rowsOrder");
    if (Object.assign(this, a), this.header = new qR(a == null ? void 0 : a.header), this.cell = new vM(this, a == null ? void 0 : a.cell), this.image)
      if (this.header.width + this.cell.width * this.cols != this.image.naturalWidth || this.header.height + this.cell.height * this.rows != this.image.naturalHeight) {
        this.cols = Math.floor(this.image.naturalWidth / this.cell.width), this.rows = Math.floor(this.image.naturalHeight / this.cell.height);
        let s = this.image.naturalWidth - this.cell.width * this.cols, p = this.image.naturalHeight - this.cell.height * this.rows;
        this.header = new qR({ width: s, height: p });
      } else
        this.cols = Math.floor((this.image.naturalWidth - this.header.width) / this.cell.width), this.rows = Math.floor((this.image.naturalHeight - this.header.height) / this.cell.height);
  }
  toJSON() {
    const {
      image: a,
      ...s
    } = this;
    return {
      ...s
    };
  }
}
var Vi = "top", Ma = "bottom", za = "right", Bi = "left", _E = "auto", xp = [Vi, Ma, za, Bi], bf = "start", Ep = "end", K1 = "clippingParents", HC = "viewport", dp = "popper", Q1 = "reference", DC = /* @__PURE__ */ xp.reduce(function(c, a) {
  return c.concat([a + "-" + bf, a + "-" + Ep]);
}, []), $C = /* @__PURE__ */ [].concat(xp, [_E]).reduce(function(c, a) {
  return c.concat([a, a + "-" + bf, a + "-" + Ep]);
}, []), X1 = "beforeRead", q1 = "read", Z1 = "afterRead", J1 = "beforeMain", ex = "main", tx = "afterMain", nx = "beforeWrite", rx = "write", ix = "afterWrite", ax = [X1, q1, Z1, J1, ex, tx, nx, rx, ix];
function Ul(c) {
  return c ? (c.nodeName || "").toLowerCase() : null;
}
function Ua(c) {
  if (c == null)
    return window;
  if (c.toString() !== "[object Window]") {
    var a = c.ownerDocument;
    return a && a.defaultView || window;
  }
  return c;
}
function Tf(c) {
  var a = Ua(c).Element;
  return c instanceof a || c instanceof Element;
}
function lo(c) {
  var a = Ua(c).HTMLElement;
  return c instanceof a || c instanceof HTMLElement;
}
function VC(c) {
  if (typeof ShadowRoot > "u")
    return !1;
  var a = Ua(c).ShadowRoot;
  return c instanceof a || c instanceof ShadowRoot;
}
function mM(c) {
  var a = c.state;
  Object.keys(a.elements).forEach(function(s) {
    var p = a.styles[s] || {}, y = a.attributes[s] || {}, C = a.elements[s];
    !lo(C) || !Ul(C) || (Object.assign(C.style, p), Object.keys(y).forEach(function(T) {
      var E = y[T];
      E === !1 ? C.removeAttribute(T) : C.setAttribute(T, E === !0 ? "" : E);
    }));
  });
}
function gM(c) {
  var a = c.state, s = {
    popper: {
      position: a.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(a.elements.popper.style, s.popper), a.styles = s, a.elements.arrow && Object.assign(a.elements.arrow.style, s.arrow), function() {
    Object.keys(a.elements).forEach(function(p) {
      var y = a.elements[p], C = a.attributes[p] || {}, T = Object.keys(a.styles.hasOwnProperty(p) ? a.styles[p] : s[p]), E = T.reduce(function(O, k) {
        return O[k] = "", O;
      }, {});
      !lo(y) || !Ul(y) || (Object.assign(y.style, E), Object.keys(C).forEach(function(O) {
        y.removeAttribute(O);
      }));
    });
  };
}
const BC = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: mM,
  effect: gM,
  requires: ["computeStyles"]
};
function Ll(c) {
  return c.split("-")[0];
}
var Cf = Math.max, cE = Math.min, _p = Math.round;
function OC() {
  var c = navigator.userAgentData;
  return c != null && c.brands && Array.isArray(c.brands) ? c.brands.map(function(a) {
    return a.brand + "/" + a.version;
  }).join(" ") : navigator.userAgent;
}
function ox() {
  return !/^((?!chrome|android).)*safari/i.test(OC());
}
function Sp(c, a, s) {
  a === void 0 && (a = !1), s === void 0 && (s = !1);
  var p = c.getBoundingClientRect(), y = 1, C = 1;
  a && lo(c) && (y = c.offsetWidth > 0 && _p(p.width) / c.offsetWidth || 1, C = c.offsetHeight > 0 && _p(p.height) / c.offsetHeight || 1);
  var T = Tf(c) ? Ua(c) : window, E = T.visualViewport, O = !ox() && s, k = (p.left + (O && E ? E.offsetLeft : 0)) / y, D = (p.top + (O && E ? E.offsetTop : 0)) / C, M = p.width / y, I = p.height / C;
  return {
    width: M,
    height: I,
    top: D,
    right: k + M,
    bottom: D + I,
    left: k,
    x: k,
    y: D
  };
}
function YC(c) {
  var a = Sp(c), s = c.offsetWidth, p = c.offsetHeight;
  return Math.abs(a.width - s) <= 1 && (s = a.width), Math.abs(a.height - p) <= 1 && (p = a.height), {
    x: c.offsetLeft,
    y: c.offsetTop,
    width: s,
    height: p
  };
}
function lx(c, a) {
  var s = a.getRootNode && a.getRootNode();
  if (c.contains(a))
    return !0;
  if (s && VC(s)) {
    var p = a;
    do {
      if (p && c.isSameNode(p))
        return !0;
      p = p.parentNode || p.host;
    } while (p);
  }
  return !1;
}
function Nu(c) {
  return Ua(c).getComputedStyle(c);
}
function yM(c) {
  return ["table", "td", "th"].indexOf(Ul(c)) >= 0;
}
function Gs(c) {
  return ((Tf(c) ? c.ownerDocument : (
    // $FlowFixMe[prop-missing]
    c.document
  )) || window.document).documentElement;
}
function SE(c) {
  return Ul(c) === "html" ? c : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    c.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    c.parentNode || // DOM Element detected
    (VC(c) ? c.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Gs(c)
  );
}
function ZR(c) {
  return !lo(c) || // https://github.com/popperjs/popper-core/issues/837
  Nu(c).position === "fixed" ? null : c.offsetParent;
}
function EM(c) {
  var a = /firefox/i.test(OC()), s = /Trident/i.test(OC());
  if (s && lo(c)) {
    var p = Nu(c);
    if (p.position === "fixed")
      return null;
  }
  var y = SE(c);
  for (VC(y) && (y = y.host); lo(y) && ["html", "body"].indexOf(Ul(y)) < 0; ) {
    var C = Nu(y);
    if (C.transform !== "none" || C.perspective !== "none" || C.contain === "paint" || ["transform", "perspective"].indexOf(C.willChange) !== -1 || a && C.willChange === "filter" || a && C.filter && C.filter !== "none")
      return y;
    y = y.parentNode;
  }
  return null;
}
function Wv(c) {
  for (var a = Ua(c), s = ZR(c); s && yM(s) && Nu(s).position === "static"; )
    s = ZR(s);
  return s && (Ul(s) === "html" || Ul(s) === "body" && Nu(s).position === "static") ? a : s || EM(c) || a;
}
function WC(c) {
  return ["top", "bottom"].indexOf(c) >= 0 ? "x" : "y";
}
function jv(c, a, s) {
  return Cf(c, cE(a, s));
}
function _M(c, a, s) {
  var p = jv(c, a, s);
  return p > s ? s : p;
}
function ux() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function sx(c) {
  return Object.assign({}, ux(), c);
}
function cx(c, a) {
  return a.reduce(function(s, p) {
    return s[p] = c, s;
  }, {});
}
var SM = function(a, s) {
  return a = typeof a == "function" ? a(Object.assign({}, s.rects, {
    placement: s.placement
  })) : a, sx(typeof a != "number" ? a : cx(a, xp));
};
function CM(c) {
  var a, s = c.state, p = c.name, y = c.options, C = s.elements.arrow, T = s.modifiersData.popperOffsets, E = Ll(s.placement), O = WC(E), k = [Bi, za].indexOf(E) >= 0, D = k ? "height" : "width";
  if (!(!C || !T)) {
    var M = SM(y.padding, s), I = YC(C), H = O === "y" ? Vi : Bi, B = O === "y" ? Ma : za, X = s.rects.reference[D] + s.rects.reference[O] - T[O] - s.rects.popper[D], pe = T[O] - s.rects.reference[O], we = Wv(C), ze = we ? O === "y" ? we.clientHeight || 0 : we.clientWidth || 0 : 0, ge = X / 2 - pe / 2, ae = M[H], Ce = ze - I[D] - M[B], oe = ze / 2 - I[D] / 2 + ge, Ne = jv(ae, oe, Ce), De = O;
    s.modifiersData[p] = (a = {}, a[De] = Ne, a.centerOffset = Ne - oe, a);
  }
}
function bM(c) {
  var a = c.state, s = c.options, p = s.element, y = p === void 0 ? "[data-popper-arrow]" : p;
  y != null && (typeof y == "string" && (y = a.elements.popper.querySelector(y), !y) || lx(a.elements.popper, y) && (a.elements.arrow = y));
}
const fx = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: CM,
  effect: bM,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Cp(c) {
  return c.split("-")[1];
}
var TM = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function wM(c, a) {
  var s = c.x, p = c.y, y = a.devicePixelRatio || 1;
  return {
    x: _p(s * y) / y || 0,
    y: _p(p * y) / y || 0
  };
}
function JR(c) {
  var a, s = c.popper, p = c.popperRect, y = c.placement, C = c.variation, T = c.offsets, E = c.position, O = c.gpuAcceleration, k = c.adaptive, D = c.roundOffsets, M = c.isFixed, I = T.x, H = I === void 0 ? 0 : I, B = T.y, X = B === void 0 ? 0 : B, pe = typeof D == "function" ? D({
    x: H,
    y: X
  }) : {
    x: H,
    y: X
  };
  H = pe.x, X = pe.y;
  var we = T.hasOwnProperty("x"), ze = T.hasOwnProperty("y"), ge = Bi, ae = Vi, Ce = window;
  if (k) {
    var oe = Wv(s), Ne = "clientHeight", De = "clientWidth";
    if (oe === Ua(s) && (oe = Gs(s), Nu(oe).position !== "static" && E === "absolute" && (Ne = "scrollHeight", De = "scrollWidth")), oe = oe, y === Vi || (y === Bi || y === za) && C === Ep) {
      ae = Ma;
      var tt = M && oe === Ce && Ce.visualViewport ? Ce.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        oe[Ne]
      );
      X -= tt - p.height, X *= O ? 1 : -1;
    }
    if (y === Bi || (y === Vi || y === Ma) && C === Ep) {
      ge = za;
      var vt = M && oe === Ce && Ce.visualViewport ? Ce.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        oe[De]
      );
      H -= vt - p.width, H *= O ? 1 : -1;
    }
  }
  var ot = Object.assign({
    position: E
  }, k && TM), at = D === !0 ? wM({
    x: H,
    y: X
  }, Ua(s)) : {
    x: H,
    y: X
  };
  if (H = at.x, X = at.y, O) {
    var ct;
    return Object.assign({}, ot, (ct = {}, ct[ae] = ze ? "0" : "", ct[ge] = we ? "0" : "", ct.transform = (Ce.devicePixelRatio || 1) <= 1 ? "translate(" + H + "px, " + X + "px)" : "translate3d(" + H + "px, " + X + "px, 0)", ct));
  }
  return Object.assign({}, ot, (a = {}, a[ae] = ze ? X + "px" : "", a[ge] = we ? H + "px" : "", a.transform = "", a));
}
function RM(c) {
  var a = c.state, s = c.options, p = s.gpuAcceleration, y = p === void 0 ? !0 : p, C = s.adaptive, T = C === void 0 ? !0 : C, E = s.roundOffsets, O = E === void 0 ? !0 : E, k = {
    placement: Ll(a.placement),
    variation: Cp(a.placement),
    popper: a.elements.popper,
    popperRect: a.rects.popper,
    gpuAcceleration: y,
    isFixed: a.options.strategy === "fixed"
  };
  a.modifiersData.popperOffsets != null && (a.styles.popper = Object.assign({}, a.styles.popper, JR(Object.assign({}, k, {
    offsets: a.modifiersData.popperOffsets,
    position: a.options.strategy,
    adaptive: T,
    roundOffsets: O
  })))), a.modifiersData.arrow != null && (a.styles.arrow = Object.assign({}, a.styles.arrow, JR(Object.assign({}, k, {
    offsets: a.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: O
  })))), a.attributes.popper = Object.assign({}, a.attributes.popper, {
    "data-popper-placement": a.placement
  });
}
const GC = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: RM,
  data: {}
};
var Yy = {
  passive: !0
};
function xM(c) {
  var a = c.state, s = c.instance, p = c.options, y = p.scroll, C = y === void 0 ? !0 : y, T = p.resize, E = T === void 0 ? !0 : T, O = Ua(a.elements.popper), k = [].concat(a.scrollParents.reference, a.scrollParents.popper);
  return C && k.forEach(function(D) {
    D.addEventListener("scroll", s.update, Yy);
  }), E && O.addEventListener("resize", s.update, Yy), function() {
    C && k.forEach(function(D) {
      D.removeEventListener("scroll", s.update, Yy);
    }), E && O.removeEventListener("resize", s.update, Yy);
  };
}
const KC = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: xM,
  data: {}
};
var DM = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function nE(c) {
  return c.replace(/left|right|bottom|top/g, function(a) {
    return DM[a];
  });
}
var OM = {
  start: "end",
  end: "start"
};
function e1(c) {
  return c.replace(/start|end/g, function(a) {
    return OM[a];
  });
}
function QC(c) {
  var a = Ua(c), s = a.pageXOffset, p = a.pageYOffset;
  return {
    scrollLeft: s,
    scrollTop: p
  };
}
function XC(c) {
  return Sp(Gs(c)).left + QC(c).scrollLeft;
}
function AM(c, a) {
  var s = Ua(c), p = Gs(c), y = s.visualViewport, C = p.clientWidth, T = p.clientHeight, E = 0, O = 0;
  if (y) {
    C = y.width, T = y.height;
    var k = ox();
    (k || !k && a === "fixed") && (E = y.offsetLeft, O = y.offsetTop);
  }
  return {
    width: C,
    height: T,
    x: E + XC(c),
    y: O
  };
}
function NM(c) {
  var a, s = Gs(c), p = QC(c), y = (a = c.ownerDocument) == null ? void 0 : a.body, C = Cf(s.scrollWidth, s.clientWidth, y ? y.scrollWidth : 0, y ? y.clientWidth : 0), T = Cf(s.scrollHeight, s.clientHeight, y ? y.scrollHeight : 0, y ? y.clientHeight : 0), E = -p.scrollLeft + XC(c), O = -p.scrollTop;
  return Nu(y || s).direction === "rtl" && (E += Cf(s.clientWidth, y ? y.clientWidth : 0) - C), {
    width: C,
    height: T,
    x: E,
    y: O
  };
}
function qC(c) {
  var a = Nu(c), s = a.overflow, p = a.overflowX, y = a.overflowY;
  return /auto|scroll|overlay|hidden/.test(s + y + p);
}
function dx(c) {
  return ["html", "body", "#document"].indexOf(Ul(c)) >= 0 ? c.ownerDocument.body : lo(c) && qC(c) ? c : dx(SE(c));
}
function Iv(c, a) {
  var s;
  a === void 0 && (a = []);
  var p = dx(c), y = p === ((s = c.ownerDocument) == null ? void 0 : s.body), C = Ua(p), T = y ? [C].concat(C.visualViewport || [], qC(p) ? p : []) : p, E = a.concat(T);
  return y ? E : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    E.concat(Iv(SE(T)))
  );
}
function AC(c) {
  return Object.assign({}, c, {
    left: c.x,
    top: c.y,
    right: c.x + c.width,
    bottom: c.y + c.height
  });
}
function kM(c, a) {
  var s = Sp(c, !1, a === "fixed");
  return s.top = s.top + c.clientTop, s.left = s.left + c.clientLeft, s.bottom = s.top + c.clientHeight, s.right = s.left + c.clientWidth, s.width = c.clientWidth, s.height = c.clientHeight, s.x = s.left, s.y = s.top, s;
}
function t1(c, a, s) {
  return a === HC ? AC(AM(c, s)) : Tf(a) ? kM(a, s) : AC(NM(Gs(c)));
}
function LM(c) {
  var a = Iv(SE(c)), s = ["absolute", "fixed"].indexOf(Nu(c).position) >= 0, p = s && lo(c) ? Wv(c) : c;
  return Tf(p) ? a.filter(function(y) {
    return Tf(y) && lx(y, p) && Ul(y) !== "body";
  }) : [];
}
function MM(c, a, s, p) {
  var y = a === "clippingParents" ? LM(c) : [].concat(a), C = [].concat(y, [s]), T = C[0], E = C.reduce(function(O, k) {
    var D = t1(c, k, p);
    return O.top = Cf(D.top, O.top), O.right = cE(D.right, O.right), O.bottom = cE(D.bottom, O.bottom), O.left = Cf(D.left, O.left), O;
  }, t1(c, T, p));
  return E.width = E.right - E.left, E.height = E.bottom - E.top, E.x = E.left, E.y = E.top, E;
}
function px(c) {
  var a = c.reference, s = c.element, p = c.placement, y = p ? Ll(p) : null, C = p ? Cp(p) : null, T = a.x + a.width / 2 - s.width / 2, E = a.y + a.height / 2 - s.height / 2, O;
  switch (y) {
    case Vi:
      O = {
        x: T,
        y: a.y - s.height
      };
      break;
    case Ma:
      O = {
        x: T,
        y: a.y + a.height
      };
      break;
    case za:
      O = {
        x: a.x + a.width,
        y: E
      };
      break;
    case Bi:
      O = {
        x: a.x - s.width,
        y: E
      };
      break;
    default:
      O = {
        x: a.x,
        y: a.y
      };
  }
  var k = y ? WC(y) : null;
  if (k != null) {
    var D = k === "y" ? "height" : "width";
    switch (C) {
      case bf:
        O[k] = O[k] - (a[D] / 2 - s[D] / 2);
        break;
      case Ep:
        O[k] = O[k] + (a[D] / 2 - s[D] / 2);
        break;
    }
  }
  return O;
}
function bp(c, a) {
  a === void 0 && (a = {});
  var s = a, p = s.placement, y = p === void 0 ? c.placement : p, C = s.strategy, T = C === void 0 ? c.strategy : C, E = s.boundary, O = E === void 0 ? K1 : E, k = s.rootBoundary, D = k === void 0 ? HC : k, M = s.elementContext, I = M === void 0 ? dp : M, H = s.altBoundary, B = H === void 0 ? !1 : H, X = s.padding, pe = X === void 0 ? 0 : X, we = sx(typeof pe != "number" ? pe : cx(pe, xp)), ze = I === dp ? Q1 : dp, ge = c.rects.popper, ae = c.elements[B ? ze : I], Ce = MM(Tf(ae) ? ae : ae.contextElement || Gs(c.elements.popper), O, D, T), oe = Sp(c.elements.reference), Ne = px({
    reference: oe,
    element: ge,
    strategy: "absolute",
    placement: y
  }), De = AC(Object.assign({}, ge, Ne)), tt = I === dp ? De : oe, vt = {
    top: Ce.top - tt.top + we.top,
    bottom: tt.bottom - Ce.bottom + we.bottom,
    left: Ce.left - tt.left + we.left,
    right: tt.right - Ce.right + we.right
  }, ot = c.modifiersData.offset;
  if (I === dp && ot) {
    var at = ot[y];
    Object.keys(vt).forEach(function(ct) {
      var je = [za, Ma].indexOf(ct) >= 0 ? 1 : -1, Ze = [Vi, Ma].indexOf(ct) >= 0 ? "y" : "x";
      vt[ct] += at[Ze] * je;
    });
  }
  return vt;
}
function zM(c, a) {
  a === void 0 && (a = {});
  var s = a, p = s.placement, y = s.boundary, C = s.rootBoundary, T = s.padding, E = s.flipVariations, O = s.allowedAutoPlacements, k = O === void 0 ? $C : O, D = Cp(p), M = D ? E ? DC : DC.filter(function(B) {
    return Cp(B) === D;
  }) : xp, I = M.filter(function(B) {
    return k.indexOf(B) >= 0;
  });
  I.length === 0 && (I = M);
  var H = I.reduce(function(B, X) {
    return B[X] = bp(c, {
      placement: X,
      boundary: y,
      rootBoundary: C,
      padding: T
    })[Ll(X)], B;
  }, {});
  return Object.keys(H).sort(function(B, X) {
    return H[B] - H[X];
  });
}
function UM(c) {
  if (Ll(c) === _E)
    return [];
  var a = nE(c);
  return [e1(c), a, e1(a)];
}
function PM(c) {
  var a = c.state, s = c.options, p = c.name;
  if (!a.modifiersData[p]._skip) {
    for (var y = s.mainAxis, C = y === void 0 ? !0 : y, T = s.altAxis, E = T === void 0 ? !0 : T, O = s.fallbackPlacements, k = s.padding, D = s.boundary, M = s.rootBoundary, I = s.altBoundary, H = s.flipVariations, B = H === void 0 ? !0 : H, X = s.allowedAutoPlacements, pe = a.options.placement, we = Ll(pe), ze = we === pe, ge = O || (ze || !B ? [nE(pe)] : UM(pe)), ae = [pe].concat(ge).reduce(function(Qe, gt) {
      return Qe.concat(Ll(gt) === _E ? zM(a, {
        placement: gt,
        boundary: D,
        rootBoundary: M,
        padding: k,
        flipVariations: B,
        allowedAutoPlacements: X
      }) : gt);
    }, []), Ce = a.rects.reference, oe = a.rects.popper, Ne = /* @__PURE__ */ new Map(), De = !0, tt = ae[0], vt = 0; vt < ae.length; vt++) {
      var ot = ae[vt], at = Ll(ot), ct = Cp(ot) === bf, je = [Vi, Ma].indexOf(at) >= 0, Ze = je ? "width" : "height", qe = bp(a, {
        placement: ot,
        boundary: D,
        rootBoundary: M,
        altBoundary: I,
        padding: k
      }), We = je ? ct ? za : Bi : ct ? Ma : Vi;
      Ce[Ze] > oe[Ze] && (We = nE(We));
      var ee = nE(We), be = [];
      if (C && be.push(qe[at] <= 0), E && be.push(qe[We] <= 0, qe[ee] <= 0), be.every(function(Qe) {
        return Qe;
      })) {
        tt = ot, De = !1;
        break;
      }
      Ne.set(ot, be);
    }
    if (De)
      for (var L = B ? 3 : 1, ne = function(gt) {
        var Et = ae.find(function(wt) {
          var mt = Ne.get(wt);
          if (mt)
            return mt.slice(0, gt).every(function(Zt) {
              return Zt;
            });
        });
        if (Et)
          return tt = Et, "break";
      }, Re = L; Re > 0; Re--) {
        var Je = ne(Re);
        if (Je === "break")
          break;
      }
    a.placement !== tt && (a.modifiersData[p]._skip = !0, a.placement = tt, a.reset = !0);
  }
}
const hx = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: PM,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function n1(c, a, s) {
  return s === void 0 && (s = {
    x: 0,
    y: 0
  }), {
    top: c.top - a.height - s.y,
    right: c.right - a.width + s.x,
    bottom: c.bottom - a.height + s.y,
    left: c.left - a.width - s.x
  };
}
function r1(c) {
  return [Vi, za, Ma, Bi].some(function(a) {
    return c[a] >= 0;
  });
}
function jM(c) {
  var a = c.state, s = c.name, p = a.rects.reference, y = a.rects.popper, C = a.modifiersData.preventOverflow, T = bp(a, {
    elementContext: "reference"
  }), E = bp(a, {
    altBoundary: !0
  }), O = n1(T, p), k = n1(E, y, C), D = r1(O), M = r1(k);
  a.modifiersData[s] = {
    referenceClippingOffsets: O,
    popperEscapeOffsets: k,
    isReferenceHidden: D,
    hasPopperEscaped: M
  }, a.attributes.popper = Object.assign({}, a.attributes.popper, {
    "data-popper-reference-hidden": D,
    "data-popper-escaped": M
  });
}
const vx = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: jM
};
function IM(c, a, s) {
  var p = Ll(c), y = [Bi, Vi].indexOf(p) >= 0 ? -1 : 1, C = typeof s == "function" ? s(Object.assign({}, a, {
    placement: c
  })) : s, T = C[0], E = C[1];
  return T = T || 0, E = (E || 0) * y, [Bi, za].indexOf(p) >= 0 ? {
    x: E,
    y: T
  } : {
    x: T,
    y: E
  };
}
function FM(c) {
  var a = c.state, s = c.options, p = c.name, y = s.offset, C = y === void 0 ? [0, 0] : y, T = $C.reduce(function(D, M) {
    return D[M] = IM(M, a.rects, C), D;
  }, {}), E = T[a.placement], O = E.x, k = E.y;
  a.modifiersData.popperOffsets != null && (a.modifiersData.popperOffsets.x += O, a.modifiersData.popperOffsets.y += k), a.modifiersData[p] = T;
}
const mx = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: FM
};
function HM(c) {
  var a = c.state, s = c.name;
  a.modifiersData[s] = px({
    reference: a.rects.reference,
    element: a.rects.popper,
    strategy: "absolute",
    placement: a.placement
  });
}
const ZC = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: HM,
  data: {}
};
function $M(c) {
  return c === "x" ? "y" : "x";
}
function VM(c) {
  var a = c.state, s = c.options, p = c.name, y = s.mainAxis, C = y === void 0 ? !0 : y, T = s.altAxis, E = T === void 0 ? !1 : T, O = s.boundary, k = s.rootBoundary, D = s.altBoundary, M = s.padding, I = s.tether, H = I === void 0 ? !0 : I, B = s.tetherOffset, X = B === void 0 ? 0 : B, pe = bp(a, {
    boundary: O,
    rootBoundary: k,
    padding: M,
    altBoundary: D
  }), we = Ll(a.placement), ze = Cp(a.placement), ge = !ze, ae = WC(we), Ce = $M(ae), oe = a.modifiersData.popperOffsets, Ne = a.rects.reference, De = a.rects.popper, tt = typeof X == "function" ? X(Object.assign({}, a.rects, {
    placement: a.placement
  })) : X, vt = typeof tt == "number" ? {
    mainAxis: tt,
    altAxis: tt
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tt), ot = a.modifiersData.offset ? a.modifiersData.offset[a.placement] : null, at = {
    x: 0,
    y: 0
  };
  if (oe) {
    if (C) {
      var ct, je = ae === "y" ? Vi : Bi, Ze = ae === "y" ? Ma : za, qe = ae === "y" ? "height" : "width", We = oe[ae], ee = We + pe[je], be = We - pe[Ze], L = H ? -De[qe] / 2 : 0, ne = ze === bf ? Ne[qe] : De[qe], Re = ze === bf ? -De[qe] : -Ne[qe], Je = a.elements.arrow, Qe = H && Je ? YC(Je) : {
        width: 0,
        height: 0
      }, gt = a.modifiersData["arrow#persistent"] ? a.modifiersData["arrow#persistent"].padding : ux(), Et = gt[je], wt = gt[Ze], mt = jv(0, Ne[qe], Qe[qe]), Zt = ge ? Ne[qe] / 2 - L - mt - Et - vt.mainAxis : ne - mt - Et - vt.mainAxis, ir = ge ? -Ne[qe] / 2 + L + mt + wt + vt.mainAxis : Re + mt + wt + vt.mainAxis, Hn = a.elements.arrow && Wv(a.elements.arrow), Mr = Hn ? ae === "y" ? Hn.clientTop || 0 : Hn.clientLeft || 0 : 0, ar = (ct = ot == null ? void 0 : ot[ae]) != null ? ct : 0, Sn = We + Zt - ar - Mr, or = We + ir - ar, kn = jv(H ? cE(ee, Sn) : ee, We, H ? Cf(be, or) : be);
      oe[ae] = kn, at[ae] = kn - We;
    }
    if (E) {
      var wn, Ln = ae === "x" ? Vi : Bi, Sr = ae === "x" ? Ma : za, Cn = oe[Ce], bn = Ce === "y" ? "height" : "width", zr = Cn + pe[Ln], Ur = Cn - pe[Sr], qn = [Vi, Bi].indexOf(we) !== -1, Pr = (wn = ot == null ? void 0 : ot[Ce]) != null ? wn : 0, Zn = qn ? zr : Cn - Ne[bn] - De[bn] - Pr + vt.altAxis, dr = qn ? Cn + Ne[bn] + De[bn] - Pr - vt.altAxis : Ur, ln = H && qn ? _M(Zn, Cn, dr) : jv(H ? Zn : zr, Cn, H ? dr : Ur);
      oe[Ce] = ln, at[Ce] = ln - Cn;
    }
    a.modifiersData[p] = at;
  }
}
const gx = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: VM,
  requiresIfExists: ["offset"]
};
function BM(c) {
  return {
    scrollLeft: c.scrollLeft,
    scrollTop: c.scrollTop
  };
}
function YM(c) {
  return c === Ua(c) || !lo(c) ? QC(c) : BM(c);
}
function WM(c) {
  var a = c.getBoundingClientRect(), s = _p(a.width) / c.offsetWidth || 1, p = _p(a.height) / c.offsetHeight || 1;
  return s !== 1 || p !== 1;
}
function GM(c, a, s) {
  s === void 0 && (s = !1);
  var p = lo(a), y = lo(a) && WM(a), C = Gs(a), T = Sp(c, y, s), E = {
    scrollLeft: 0,
    scrollTop: 0
  }, O = {
    x: 0,
    y: 0
  };
  return (p || !p && !s) && ((Ul(a) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  qC(C)) && (E = YM(a)), lo(a) ? (O = Sp(a, !0), O.x += a.clientLeft, O.y += a.clientTop) : C && (O.x = XC(C))), {
    x: T.left + E.scrollLeft - O.x,
    y: T.top + E.scrollTop - O.y,
    width: T.width,
    height: T.height
  };
}
function KM(c) {
  var a = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Set(), p = [];
  c.forEach(function(C) {
    a.set(C.name, C);
  });
  function y(C) {
    s.add(C.name);
    var T = [].concat(C.requires || [], C.requiresIfExists || []);
    T.forEach(function(E) {
      if (!s.has(E)) {
        var O = a.get(E);
        O && y(O);
      }
    }), p.push(C);
  }
  return c.forEach(function(C) {
    s.has(C.name) || y(C);
  }), p;
}
function QM(c) {
  var a = KM(c);
  return ax.reduce(function(s, p) {
    return s.concat(a.filter(function(y) {
      return y.phase === p;
    }));
  }, []);
}
function XM(c) {
  var a;
  return function() {
    return a || (a = new Promise(function(s) {
      Promise.resolve().then(function() {
        a = void 0, s(c());
      });
    })), a;
  };
}
function qM(c) {
  var a = c.reduce(function(s, p) {
    var y = s[p.name];
    return s[p.name] = y ? Object.assign({}, y, p, {
      options: Object.assign({}, y.options, p.options),
      data: Object.assign({}, y.data, p.data)
    }) : p, s;
  }, {});
  return Object.keys(a).map(function(s) {
    return a[s];
  });
}
var i1 = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function a1() {
  for (var c = arguments.length, a = new Array(c), s = 0; s < c; s++)
    a[s] = arguments[s];
  return !a.some(function(p) {
    return !(p && typeof p.getBoundingClientRect == "function");
  });
}
function CE(c) {
  c === void 0 && (c = {});
  var a = c, s = a.defaultModifiers, p = s === void 0 ? [] : s, y = a.defaultOptions, C = y === void 0 ? i1 : y;
  return function(E, O, k) {
    k === void 0 && (k = C);
    var D = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, i1, C),
      modifiersData: {},
      elements: {
        reference: E,
        popper: O
      },
      attributes: {},
      styles: {}
    }, M = [], I = !1, H = {
      state: D,
      setOptions: function(we) {
        var ze = typeof we == "function" ? we(D.options) : we;
        X(), D.options = Object.assign({}, C, D.options, ze), D.scrollParents = {
          reference: Tf(E) ? Iv(E) : E.contextElement ? Iv(E.contextElement) : [],
          popper: Iv(O)
        };
        var ge = QM(qM([].concat(p, D.options.modifiers)));
        return D.orderedModifiers = ge.filter(function(ae) {
          return ae.enabled;
        }), B(), H.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!I) {
          var we = D.elements, ze = we.reference, ge = we.popper;
          if (a1(ze, ge)) {
            D.rects = {
              reference: GM(ze, Wv(ge), D.options.strategy === "fixed"),
              popper: YC(ge)
            }, D.reset = !1, D.placement = D.options.placement, D.orderedModifiers.forEach(function(vt) {
              return D.modifiersData[vt.name] = Object.assign({}, vt.data);
            });
            for (var ae = 0; ae < D.orderedModifiers.length; ae++) {
              if (D.reset === !0) {
                D.reset = !1, ae = -1;
                continue;
              }
              var Ce = D.orderedModifiers[ae], oe = Ce.fn, Ne = Ce.options, De = Ne === void 0 ? {} : Ne, tt = Ce.name;
              typeof oe == "function" && (D = oe({
                state: D,
                options: De,
                name: tt,
                instance: H
              }) || D);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: XM(function() {
        return new Promise(function(pe) {
          H.forceUpdate(), pe(D);
        });
      }),
      destroy: function() {
        X(), I = !0;
      }
    };
    if (!a1(E, O))
      return H;
    H.setOptions(k).then(function(pe) {
      !I && k.onFirstUpdate && k.onFirstUpdate(pe);
    });
    function B() {
      D.orderedModifiers.forEach(function(pe) {
        var we = pe.name, ze = pe.options, ge = ze === void 0 ? {} : ze, ae = pe.effect;
        if (typeof ae == "function") {
          var Ce = ae({
            state: D,
            name: we,
            instance: H,
            options: ge
          }), oe = function() {
          };
          M.push(Ce || oe);
        }
      });
    }
    function X() {
      M.forEach(function(pe) {
        return pe();
      }), M = [];
    }
    return H;
  };
}
var ZM = /* @__PURE__ */ CE(), JM = [KC, ZC, GC, BC], ez = /* @__PURE__ */ CE({
  defaultModifiers: JM
}), tz = [KC, ZC, GC, BC, mx, hx, gx, fx, vx], JC = /* @__PURE__ */ CE({
  defaultModifiers: tz
});
const yx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  afterMain: tx,
  afterRead: Z1,
  afterWrite: ix,
  applyStyles: BC,
  arrow: fx,
  auto: _E,
  basePlacements: xp,
  beforeMain: J1,
  beforeRead: X1,
  beforeWrite: nx,
  bottom: Ma,
  clippingParents: K1,
  computeStyles: GC,
  createPopper: JC,
  createPopperBase: ZM,
  createPopperLite: ez,
  detectOverflow: bp,
  end: Ep,
  eventListeners: KC,
  flip: hx,
  hide: vx,
  left: Bi,
  main: ex,
  modifierPhases: ax,
  offset: mx,
  placements: $C,
  popper: dp,
  popperGenerator: CE,
  popperOffsets: ZC,
  preventOverflow: gx,
  read: q1,
  reference: Q1,
  right: za,
  start: bf,
  top: Vi,
  variationPlacements: DC,
  viewport: HC,
  write: rx
}, Symbol.toStringTag, { value: "Module" }));
/*!
  * Bootstrap v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
const Fs = /* @__PURE__ */ new Map(), tC = {
  set(c, a, s) {
    Fs.has(c) || Fs.set(c, /* @__PURE__ */ new Map());
    const p = Fs.get(c);
    if (!p.has(a) && p.size !== 0) {
      console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(p.keys())[0]}.`);
      return;
    }
    p.set(a, s);
  },
  get(c, a) {
    return Fs.has(c) && Fs.get(c).get(a) || null;
  },
  remove(c, a) {
    if (!Fs.has(c))
      return;
    const s = Fs.get(c);
    s.delete(a), s.size === 0 && Fs.delete(c);
  }
}, nz = 1e6, rz = 1e3, NC = "transitionend", Ex = (c) => (c && window.CSS && window.CSS.escape && (c = c.replace(/#([^\s"#']+)/g, (a, s) => `#${CSS.escape(s)}`)), c), iz = (c) => c == null ? `${c}` : Object.prototype.toString.call(c).match(/\s([a-z]+)/i)[1].toLowerCase(), az = (c) => {
  do
    c += Math.floor(Math.random() * nz);
  while (document.getElementById(c));
  return c;
}, oz = (c) => {
  if (!c)
    return 0;
  let {
    transitionDuration: a,
    transitionDelay: s
  } = window.getComputedStyle(c);
  const p = Number.parseFloat(a), y = Number.parseFloat(s);
  return !p && !y ? 0 : (a = a.split(",")[0], s = s.split(",")[0], (Number.parseFloat(a) + Number.parseFloat(s)) * rz);
}, _x = (c) => {
  c.dispatchEvent(new Event(NC));
}, Du = (c) => !c || typeof c != "object" ? !1 : (typeof c.jquery < "u" && (c = c[0]), typeof c.nodeType < "u"), Bs = (c) => Du(c) ? c.jquery ? c[0] : c : typeof c == "string" && c.length > 0 ? document.querySelector(Ex(c)) : null, Dp = (c) => {
  if (!Du(c) || c.getClientRects().length === 0)
    return !1;
  const a = getComputedStyle(c).getPropertyValue("visibility") === "visible", s = c.closest("details:not([open])");
  if (!s)
    return a;
  if (s !== c) {
    const p = c.closest("summary");
    if (p && p.parentNode !== s || p === null)
      return !1;
  }
  return a;
}, Ys = (c) => !c || c.nodeType !== Node.ELEMENT_NODE || c.classList.contains("disabled") ? !0 : typeof c.disabled < "u" ? c.disabled : c.hasAttribute("disabled") && c.getAttribute("disabled") !== "false", Sx = (c) => {
  if (!document.documentElement.attachShadow)
    return null;
  if (typeof c.getRootNode == "function") {
    const a = c.getRootNode();
    return a instanceof ShadowRoot ? a : null;
  }
  return c instanceof ShadowRoot ? c : c.parentNode ? Sx(c.parentNode) : null;
}, fE = () => {
}, Gv = (c) => {
  c.offsetHeight;
}, Cx = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, nC = [], lz = (c) => {
  document.readyState === "loading" ? (nC.length || document.addEventListener("DOMContentLoaded", () => {
    for (const a of nC)
      a();
  }), nC.push(c)) : c();
}, uo = () => document.documentElement.dir === "rtl", co = (c) => {
  lz(() => {
    const a = Cx();
    if (a) {
      const s = c.NAME, p = a.fn[s];
      a.fn[s] = c.jQueryInterface, a.fn[s].Constructor = c, a.fn[s].noConflict = () => (a.fn[s] = p, c.jQueryInterface);
    }
  });
}, ga = (c, a = [], s = c) => typeof c == "function" ? c(...a) : s, bx = (c, a, s = !0) => {
  if (!s) {
    ga(c);
    return;
  }
  const p = 5, y = oz(a) + p;
  let C = !1;
  const T = ({
    target: E
  }) => {
    E === a && (C = !0, a.removeEventListener(NC, T), ga(c));
  };
  a.addEventListener(NC, T), setTimeout(() => {
    C || _x(a);
  }, y);
}, eb = (c, a, s, p) => {
  const y = c.length;
  let C = c.indexOf(a);
  return C === -1 ? !s && p ? c[y - 1] : c[0] : (C += s ? 1 : -1, p && (C = (C + y) % y), c[Math.max(0, Math.min(C, y - 1))]);
}, uz = /[^.]*(?=\..*)\.|.*/, sz = /\..*/, cz = /::\d+$/, rC = {};
let o1 = 1;
const Tx = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
}, fz = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
function wx(c, a) {
  return a && `${a}::${o1++}` || c.uidEvent || o1++;
}
function Rx(c) {
  const a = wx(c);
  return c.uidEvent = a, rC[a] = rC[a] || {}, rC[a];
}
function dz(c, a) {
  return function s(p) {
    return tb(p, {
      delegateTarget: c
    }), s.oneOff && ce.off(c, p.type, a), a.apply(c, [p]);
  };
}
function pz(c, a, s) {
  return function p(y) {
    const C = c.querySelectorAll(a);
    for (let {
      target: T
    } = y; T && T !== this; T = T.parentNode)
      for (const E of C)
        if (E === T)
          return tb(y, {
            delegateTarget: T
          }), p.oneOff && ce.off(c, y.type, a, s), s.apply(T, [y]);
  };
}
function xx(c, a, s = null) {
  return Object.values(c).find((p) => p.callable === a && p.delegationSelector === s);
}
function Dx(c, a, s) {
  const p = typeof a == "string", y = p ? s : a || s;
  let C = Ox(c);
  return fz.has(C) || (C = c), [p, y, C];
}
function l1(c, a, s, p, y) {
  if (typeof a != "string" || !c)
    return;
  let [C, T, E] = Dx(a, s, p);
  a in Tx && (T = ((B) => function(X) {
    if (!X.relatedTarget || X.relatedTarget !== X.delegateTarget && !X.delegateTarget.contains(X.relatedTarget))
      return B.call(this, X);
  })(T));
  const O = Rx(c), k = O[E] || (O[E] = {}), D = xx(k, T, C ? s : null);
  if (D) {
    D.oneOff = D.oneOff && y;
    return;
  }
  const M = wx(T, a.replace(uz, "")), I = C ? pz(c, s, T) : dz(c, T);
  I.delegationSelector = C ? s : null, I.callable = T, I.oneOff = y, I.uidEvent = M, k[M] = I, c.addEventListener(E, I, C);
}
function kC(c, a, s, p, y) {
  const C = xx(a[s], p, y);
  C && (c.removeEventListener(s, C, !!y), delete a[s][C.uidEvent]);
}
function hz(c, a, s, p) {
  const y = a[s] || {};
  for (const [C, T] of Object.entries(y))
    C.includes(p) && kC(c, a, s, T.callable, T.delegationSelector);
}
function Ox(c) {
  return c = c.replace(sz, ""), Tx[c] || c;
}
const ce = {
  on(c, a, s, p) {
    l1(c, a, s, p, !1);
  },
  one(c, a, s, p) {
    l1(c, a, s, p, !0);
  },
  off(c, a, s, p) {
    if (typeof a != "string" || !c)
      return;
    const [y, C, T] = Dx(a, s, p), E = T !== a, O = Rx(c), k = O[T] || {}, D = a.startsWith(".");
    if (typeof C < "u") {
      if (!Object.keys(k).length)
        return;
      kC(c, O, T, C, y ? s : null);
      return;
    }
    if (D)
      for (const M of Object.keys(O))
        hz(c, O, M, a.slice(1));
    for (const [M, I] of Object.entries(k)) {
      const H = M.replace(cz, "");
      (!E || a.includes(H)) && kC(c, O, T, I.callable, I.delegationSelector);
    }
  },
  trigger(c, a, s) {
    if (typeof a != "string" || !c)
      return null;
    const p = Cx(), y = Ox(a), C = a !== y;
    let T = null, E = !0, O = !0, k = !1;
    C && p && (T = p.Event(a, s), p(c).trigger(T), E = !T.isPropagationStopped(), O = !T.isImmediatePropagationStopped(), k = T.isDefaultPrevented());
    const D = tb(new Event(a, {
      bubbles: E,
      cancelable: !0
    }), s);
    return k && D.preventDefault(), O && c.dispatchEvent(D), D.defaultPrevented && T && T.preventDefault(), D;
  }
};
function tb(c, a = {}) {
  for (const [s, p] of Object.entries(a))
    try {
      c[s] = p;
    } catch {
      Object.defineProperty(c, s, {
        configurable: !0,
        get() {
          return p;
        }
      });
    }
  return c;
}
function u1(c) {
  if (c === "true")
    return !0;
  if (c === "false")
    return !1;
  if (c === Number(c).toString())
    return Number(c);
  if (c === "" || c === "null")
    return null;
  if (typeof c != "string")
    return c;
  try {
    return JSON.parse(decodeURIComponent(c));
  } catch {
    return c;
  }
}
function iC(c) {
  return c.replace(/[A-Z]/g, (a) => `-${a.toLowerCase()}`);
}
const Ou = {
  setDataAttribute(c, a, s) {
    c.setAttribute(`data-bs-${iC(a)}`, s);
  },
  removeDataAttribute(c, a) {
    c.removeAttribute(`data-bs-${iC(a)}`);
  },
  getDataAttributes(c) {
    if (!c)
      return {};
    const a = {}, s = Object.keys(c.dataset).filter((p) => p.startsWith("bs") && !p.startsWith("bsConfig"));
    for (const p of s) {
      let y = p.replace(/^bs/, "");
      y = y.charAt(0).toLowerCase() + y.slice(1, y.length), a[y] = u1(c.dataset[p]);
    }
    return a;
  },
  getDataAttribute(c, a) {
    return u1(c.getAttribute(`data-bs-${iC(a)}`));
  }
};
class Kv {
  // Getters
  static get Default() {
    return {};
  }
  static get DefaultType() {
    return {};
  }
  static get NAME() {
    throw new Error('You have to implement the static method "NAME", for each component!');
  }
  _getConfig(a) {
    return a = this._mergeConfigObj(a), a = this._configAfterMerge(a), this._typeCheckConfig(a), a;
  }
  _configAfterMerge(a) {
    return a;
  }
  _mergeConfigObj(a, s) {
    const p = Du(s) ? Ou.getDataAttribute(s, "config") : {};
    return {
      ...this.constructor.Default,
      ...typeof p == "object" ? p : {},
      ...Du(s) ? Ou.getDataAttributes(s) : {},
      ...typeof a == "object" ? a : {}
    };
  }
  _typeCheckConfig(a, s = this.constructor.DefaultType) {
    for (const [p, y] of Object.entries(s)) {
      const C = a[p], T = Du(C) ? "element" : iz(C);
      if (!new RegExp(y).test(T))
        throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${p}" provided type "${T}" but expected type "${y}".`);
    }
  }
}
const vz = "5.3.2";
class Go extends Kv {
  constructor(a, s) {
    super(), a = Bs(a), a && (this._element = a, this._config = this._getConfig(s), tC.set(this._element, this.constructor.DATA_KEY, this));
  }
  // Public
  dispose() {
    tC.remove(this._element, this.constructor.DATA_KEY), ce.off(this._element, this.constructor.EVENT_KEY);
    for (const a of Object.getOwnPropertyNames(this))
      this[a] = null;
  }
  _queueCallback(a, s, p = !0) {
    bx(a, s, p);
  }
  _getConfig(a) {
    return a = this._mergeConfigObj(a, this._element), a = this._configAfterMerge(a), this._typeCheckConfig(a), a;
  }
  // Static
  static getInstance(a) {
    return tC.get(Bs(a), this.DATA_KEY);
  }
  static getOrCreateInstance(a, s = {}) {
    return this.getInstance(a) || new this(a, typeof s == "object" ? s : null);
  }
  static get VERSION() {
    return vz;
  }
  static get DATA_KEY() {
    return `bs.${this.NAME}`;
  }
  static get EVENT_KEY() {
    return `.${this.DATA_KEY}`;
  }
  static eventName(a) {
    return `${a}${this.EVENT_KEY}`;
  }
}
const aC = (c) => {
  let a = c.getAttribute("data-bs-target");
  if (!a || a === "#") {
    let s = c.getAttribute("href");
    if (!s || !s.includes("#") && !s.startsWith("."))
      return null;
    s.includes("#") && !s.startsWith("#") && (s = `#${s.split("#")[1]}`), a = s && s !== "#" ? Ex(s.trim()) : null;
  }
  return a;
}, dt = {
  find(c, a = document.documentElement) {
    return [].concat(...Element.prototype.querySelectorAll.call(a, c));
  },
  findOne(c, a = document.documentElement) {
    return Element.prototype.querySelector.call(a, c);
  },
  children(c, a) {
    return [].concat(...c.children).filter((s) => s.matches(a));
  },
  parents(c, a) {
    const s = [];
    let p = c.parentNode.closest(a);
    for (; p; )
      s.push(p), p = p.parentNode.closest(a);
    return s;
  },
  prev(c, a) {
    let s = c.previousElementSibling;
    for (; s; ) {
      if (s.matches(a))
        return [s];
      s = s.previousElementSibling;
    }
    return [];
  },
  // TODO: this is now unused; remove later along with prev()
  next(c, a) {
    let s = c.nextElementSibling;
    for (; s; ) {
      if (s.matches(a))
        return [s];
      s = s.nextElementSibling;
    }
    return [];
  },
  focusableChildren(c) {
    const a = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((s) => `${s}:not([tabindex^="-"])`).join(",");
    return this.find(a, c).filter((s) => !Ys(s) && Dp(s));
  },
  getSelectorFromElement(c) {
    const a = aC(c);
    return a && dt.findOne(a) ? a : null;
  },
  getElementFromSelector(c) {
    const a = aC(c);
    return a ? dt.findOne(a) : null;
  },
  getMultipleElementsFromSelector(c) {
    const a = aC(c);
    return a ? dt.find(a) : [];
  }
}, bE = (c, a = "hide") => {
  const s = `click.dismiss${c.EVENT_KEY}`, p = c.NAME;
  ce.on(document, s, `[data-bs-dismiss="${p}"]`, function(y) {
    if (["A", "AREA"].includes(this.tagName) && y.preventDefault(), Ys(this))
      return;
    const C = dt.getElementFromSelector(this) || this.closest(`.${p}`);
    c.getOrCreateInstance(C)[a]();
  });
}, mz = "alert", gz = "bs.alert", Ax = `.${gz}`, yz = `close${Ax}`, Ez = `closed${Ax}`, _z = "fade", Sz = "show";
class TE extends Go {
  // Getters
  static get NAME() {
    return mz;
  }
  // Public
  close() {
    if (ce.trigger(this._element, yz).defaultPrevented)
      return;
    this._element.classList.remove(Sz);
    const s = this._element.classList.contains(_z);
    this._queueCallback(() => this._destroyElement(), this._element, s);
  }
  // Private
  _destroyElement() {
    this._element.remove(), ce.trigger(this._element, Ez), this.dispose();
  }
  // Static
  static jQueryInterface(a) {
    return this.each(function() {
      const s = TE.getOrCreateInstance(this);
      if (typeof a == "string") {
        if (s[a] === void 0 || a.startsWith("_") || a === "constructor")
          throw new TypeError(`No method named "${a}"`);
        s[a](this);
      }
    });
  }
}
bE(TE, "close");
co(TE);
const Cz = "button", bz = "bs.button", Tz = `.${bz}`, wz = ".data-api", Rz = "active", s1 = '[data-bs-toggle="button"]', xz = `click${Tz}${wz}`;
class wE extends Go {
  // Getters
  static get NAME() {
    return Cz;
  }
  // Public
  toggle() {
    this._element.setAttribute("aria-pressed", this._element.classList.toggle(Rz));
  }
  // Static
  static jQueryInterface(a) {
    return this.each(function() {
      const s = wE.getOrCreateInstance(this);
      a === "toggle" && s[a]();
    });
  }
}
ce.on(document, xz, s1, (c) => {
  c.preventDefault();
  const a = c.target.closest(s1);
  wE.getOrCreateInstance(a).toggle();
});
co(wE);
const Dz = "swipe", Op = ".bs.swipe", Oz = `touchstart${Op}`, Az = `touchmove${Op}`, Nz = `touchend${Op}`, kz = `pointerdown${Op}`, Lz = `pointerup${Op}`, Mz = "touch", zz = "pen", Uz = "pointer-event", Pz = 40, jz = {
  endCallback: null,
  leftCallback: null,
  rightCallback: null
}, Iz = {
  endCallback: "(function|null)",
  leftCallback: "(function|null)",
  rightCallback: "(function|null)"
};
class dE extends Kv {
  constructor(a, s) {
    super(), this._element = a, !(!a || !dE.isSupported()) && (this._config = this._getConfig(s), this._deltaX = 0, this._supportPointerEvents = !!window.PointerEvent, this._initEvents());
  }
  // Getters
  static get Default() {
    return jz;
  }
  static get DefaultType() {
    return Iz;
  }
  static get NAME() {
    return Dz;
  }
  // Public
  dispose() {
    ce.off(this._element, Op);
  }
  // Private
  _start(a) {
    if (!this._supportPointerEvents) {
      this._deltaX = a.touches[0].clientX;
      return;
    }
    this._eventIsPointerPenTouch(a) && (this._deltaX = a.clientX);
  }
  _end(a) {
    this._eventIsPointerPenTouch(a) && (this._deltaX = a.clientX - this._deltaX), this._handleSwipe(), ga(this._config.endCallback);
  }
  _move(a) {
    this._deltaX = a.touches && a.touches.length > 1 ? 0 : a.touches[0].clientX - this._deltaX;
  }
  _handleSwipe() {
    const a = Math.abs(this._deltaX);
    if (a <= Pz)
      return;
    const s = a / this._deltaX;
    this._deltaX = 0, s && ga(s > 0 ? this._config.rightCallback : this._config.leftCallback);
  }
  _initEvents() {
    this._supportPointerEvents ? (ce.on(this._element, kz, (a) => this._start(a)), ce.on(this._element, Lz, (a) => this._end(a)), this._element.classList.add(Uz)) : (ce.on(this._element, Oz, (a) => this._start(a)), ce.on(this._element, Az, (a) => this._move(a)), ce.on(this._element, Nz, (a) => this._end(a)));
  }
  _eventIsPointerPenTouch(a) {
    return this._supportPointerEvents && (a.pointerType === zz || a.pointerType === Mz);
  }
  // Static
  static isSupported() {
    return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
  }
}
const Fz = "carousel", Hz = "bs.carousel", Ks = `.${Hz}`, Nx = ".data-api", $z = "ArrowLeft", Vz = "ArrowRight", Bz = 500, Nv = "next", up = "prev", pp = "left", rE = "right", Yz = `slide${Ks}`, oC = `slid${Ks}`, Wz = `keydown${Ks}`, Gz = `mouseenter${Ks}`, Kz = `mouseleave${Ks}`, Qz = `dragstart${Ks}`, Xz = `load${Ks}${Nx}`, qz = `click${Ks}${Nx}`, kx = "carousel", Wy = "active", Zz = "slide", Jz = "carousel-item-end", eU = "carousel-item-start", tU = "carousel-item-next", nU = "carousel-item-prev", Lx = ".active", Mx = ".carousel-item", rU = Lx + Mx, iU = ".carousel-item img", aU = ".carousel-indicators", oU = "[data-bs-slide], [data-bs-slide-to]", lU = '[data-bs-ride="carousel"]', uU = {
  [$z]: rE,
  [Vz]: pp
}, sU = {
  interval: 5e3,
  keyboard: !0,
  pause: "hover",
  ride: !1,
  touch: !0,
  wrap: !0
}, cU = {
  interval: "(number|boolean)",
  // TODO:v6 remove boolean support
  keyboard: "boolean",
  pause: "(string|boolean)",
  ride: "(boolean|string)",
  touch: "boolean",
  wrap: "boolean"
};
class Qv extends Go {
  constructor(a, s) {
    super(a, s), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = dt.findOne(aU, this._element), this._addEventListeners(), this._config.ride === kx && this.cycle();
  }
  // Getters
  static get Default() {
    return sU;
  }
  static get DefaultType() {
    return cU;
  }
  static get NAME() {
    return Fz;
  }
  // Public
  next() {
    this._slide(Nv);
  }
  nextWhenVisible() {
    !document.hidden && Dp(this._element) && this.next();
  }
  prev() {
    this._slide(up);
  }
  pause() {
    this._isSliding && _x(this._element), this._clearInterval();
  }
  cycle() {
    this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
  }
  _maybeEnableCycle() {
    if (this._config.ride) {
      if (this._isSliding) {
        ce.one(this._element, oC, () => this.cycle());
        return;
      }
      this.cycle();
    }
  }
  to(a) {
    const s = this._getItems();
    if (a > s.length - 1 || a < 0)
      return;
    if (this._isSliding) {
      ce.one(this._element, oC, () => this.to(a));
      return;
    }
    const p = this._getItemIndex(this._getActive());
    if (p === a)
      return;
    const y = a > p ? Nv : up;
    this._slide(y, s[a]);
  }
  dispose() {
    this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
  }
  // Private
  _configAfterMerge(a) {
    return a.defaultInterval = a.interval, a;
  }
  _addEventListeners() {
    this._config.keyboard && ce.on(this._element, Wz, (a) => this._keydown(a)), this._config.pause === "hover" && (ce.on(this._element, Gz, () => this.pause()), ce.on(this._element, Kz, () => this._maybeEnableCycle())), this._config.touch && dE.isSupported() && this._addTouchEventListeners();
  }
  _addTouchEventListeners() {
    for (const p of dt.find(iU, this._element))
      ce.on(p, Qz, (y) => y.preventDefault());
    const s = {
      leftCallback: () => this._slide(this._directionToOrder(pp)),
      rightCallback: () => this._slide(this._directionToOrder(rE)),
      endCallback: () => {
        this._config.pause === "hover" && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), Bz + this._config.interval));
      }
    };
    this._swipeHelper = new dE(this._element, s);
  }
  _keydown(a) {
    if (/input|textarea/i.test(a.target.tagName))
      return;
    const s = uU[a.key];
    s && (a.preventDefault(), this._slide(this._directionToOrder(s)));
  }
  _getItemIndex(a) {
    return this._getItems().indexOf(a);
  }
  _setActiveIndicatorElement(a) {
    if (!this._indicatorsElement)
      return;
    const s = dt.findOne(Lx, this._indicatorsElement);
    s.classList.remove(Wy), s.removeAttribute("aria-current");
    const p = dt.findOne(`[data-bs-slide-to="${a}"]`, this._indicatorsElement);
    p && (p.classList.add(Wy), p.setAttribute("aria-current", "true"));
  }
  _updateInterval() {
    const a = this._activeElement || this._getActive();
    if (!a)
      return;
    const s = Number.parseInt(a.getAttribute("data-bs-interval"), 10);
    this._config.interval = s || this._config.defaultInterval;
  }
  _slide(a, s = null) {
    if (this._isSliding)
      return;
    const p = this._getActive(), y = a === Nv, C = s || eb(this._getItems(), p, y, this._config.wrap);
    if (C === p)
      return;
    const T = this._getItemIndex(C), E = (H) => ce.trigger(this._element, H, {
      relatedTarget: C,
      direction: this._orderToDirection(a),
      from: this._getItemIndex(p),
      to: T
    });
    if (E(Yz).defaultPrevented || !p || !C)
      return;
    const k = !!this._interval;
    this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(T), this._activeElement = C;
    const D = y ? eU : Jz, M = y ? tU : nU;
    C.classList.add(M), Gv(C), p.classList.add(D), C.classList.add(D);
    const I = () => {
      C.classList.remove(D, M), C.classList.add(Wy), p.classList.remove(Wy, M, D), this._isSliding = !1, E(oC);
    };
    this._queueCallback(I, p, this._isAnimated()), k && this.cycle();
  }
  _isAnimated() {
    return this._element.classList.contains(Zz);
  }
  _getActive() {
    return dt.findOne(rU, this._element);
  }
  _getItems() {
    return dt.find(Mx, this._element);
  }
  _clearInterval() {
    this._interval && (clearInterval(this._interval), this._interval = null);
  }
  _directionToOrder(a) {
    return uo() ? a === pp ? up : Nv : a === pp ? Nv : up;
  }
  _orderToDirection(a) {
    return uo() ? a === up ? pp : rE : a === up ? rE : pp;
  }
  // Static
  static jQueryInterface(a) {
    return this.each(function() {
      const s = Qv.getOrCreateInstance(this, a);
      if (typeof a == "number") {
        s.to(a);
        return;
      }
      if (typeof a == "string") {
        if (s[a] === void 0 || a.startsWith("_") || a === "constructor")
          throw new TypeError(`No method named "${a}"`);
        s[a]();
      }
    });
  }
}
ce.on(document, qz, oU, function(c) {
  const a = dt.getElementFromSelector(this);
  if (!a || !a.classList.contains(kx))
    return;
  c.preventDefault();
  const s = Qv.getOrCreateInstance(a), p = this.getAttribute("data-bs-slide-to");
  if (p) {
    s.to(p), s._maybeEnableCycle();
    return;
  }
  if (Ou.getDataAttribute(this, "slide") === "next") {
    s.next(), s._maybeEnableCycle();
    return;
  }
  s.prev(), s._maybeEnableCycle();
});
ce.on(window, Xz, () => {
  const c = dt.find(lU);
  for (const a of c)
    Qv.getOrCreateInstance(a);
});
co(Qv);
const fU = "collapse", dU = "bs.collapse", Xv = `.${dU}`, pU = ".data-api", hU = `show${Xv}`, vU = `shown${Xv}`, mU = `hide${Xv}`, gU = `hidden${Xv}`, yU = `click${Xv}${pU}`, lC = "show", mp = "collapse", Gy = "collapsing", EU = "collapsed", _U = `:scope .${mp} .${mp}`, SU = "collapse-horizontal", CU = "width", bU = "height", TU = ".collapse.show, .collapse.collapsing", LC = '[data-bs-toggle="collapse"]', wU = {
  parent: null,
  toggle: !0
}, RU = {
  parent: "(null|element)",
  toggle: "boolean"
};
class Yv extends Go {
  constructor(a, s) {
    super(a, s), this._isTransitioning = !1, this._triggerArray = [];
    const p = dt.find(LC);
    for (const y of p) {
      const C = dt.getSelectorFromElement(y), T = dt.find(C).filter((E) => E === this._element);
      C !== null && T.length && this._triggerArray.push(y);
    }
    this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
  }
  // Getters
  static get Default() {
    return wU;
  }
  static get DefaultType() {
    return RU;
  }
  static get NAME() {
    return fU;
  }
  // Public
  toggle() {
    this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (this._isTransitioning || this._isShown())
      return;
    let a = [];
    if (this._config.parent && (a = this._getFirstLevelChildren(TU).filter((E) => E !== this._element).map((E) => Yv.getOrCreateInstance(E, {
      toggle: !1
    }))), a.length && a[0]._isTransitioning || ce.trigger(this._element, hU).defaultPrevented)
      return;
    for (const E of a)
      E.hide();
    const p = this._getDimension();
    this._element.classList.remove(mp), this._element.classList.add(Gy), this._element.style[p] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
    const y = () => {
      this._isTransitioning = !1, this._element.classList.remove(Gy), this._element.classList.add(mp, lC), this._element.style[p] = "", ce.trigger(this._element, vU);
    }, T = `scroll${p[0].toUpperCase() + p.slice(1)}`;
    this._queueCallback(y, this._element, !0), this._element.style[p] = `${this._element[T]}px`;
  }
  hide() {
    if (this._isTransitioning || !this._isShown() || ce.trigger(this._element, mU).defaultPrevented)
      return;
    const s = this._getDimension();
    this._element.style[s] = `${this._element.getBoundingClientRect()[s]}px`, Gv(this._element), this._element.classList.add(Gy), this._element.classList.remove(mp, lC);
    for (const y of this._triggerArray) {
      const C = dt.getElementFromSelector(y);
      C && !this._isShown(C) && this._addAriaAndCollapsedClass([y], !1);
    }
    this._isTransitioning = !0;
    const p = () => {
      this._isTransitioning = !1, this._element.classList.remove(Gy), this._element.classList.add(mp), ce.trigger(this._element, gU);
    };
    this._element.style[s] = "", this._queueCallback(p, this._element, !0);
  }
  _isShown(a = this._element) {
    return a.classList.contains(lC);
  }
  // Private
  _configAfterMerge(a) {
    return a.toggle = !!a.toggle, a.parent = Bs(a.parent), a;
  }
  _getDimension() {
    return this._element.classList.contains(SU) ? CU : bU;
  }
  _initializeChildren() {
    if (!this._config.parent)
      return;
    const a = this._getFirstLevelChildren(LC);
    for (const s of a) {
      const p = dt.getElementFromSelector(s);
      p && this._addAriaAndCollapsedClass([s], this._isShown(p));
    }
  }
  _getFirstLevelChildren(a) {
    const s = dt.find(_U, this._config.parent);
    return dt.find(a, this._config.parent).filter((p) => !s.includes(p));
  }
  _addAriaAndCollapsedClass(a, s) {
    if (a.length)
      for (const p of a)
        p.classList.toggle(EU, !s), p.setAttribute("aria-expanded", s);
  }
  // Static
  static jQueryInterface(a) {
    const s = {};
    return typeof a == "string" && /show|hide/.test(a) && (s.toggle = !1), this.each(function() {
      const p = Yv.getOrCreateInstance(this, s);
      if (typeof a == "string") {
        if (typeof p[a] > "u")
          throw new TypeError(`No method named "${a}"`);
        p[a]();
      }
    });
  }
}
ce.on(document, yU, LC, function(c) {
  (c.target.tagName === "A" || c.delegateTarget && c.delegateTarget.tagName === "A") && c.preventDefault();
  for (const a of dt.getMultipleElementsFromSelector(this))
    Yv.getOrCreateInstance(a, {
      toggle: !1
    }).toggle();
});
co(Yv);
const c1 = "dropdown", xU = "bs.dropdown", Rf = `.${xU}`, nb = ".data-api", DU = "Escape", f1 = "Tab", OU = "ArrowUp", d1 = "ArrowDown", AU = 2, NU = `hide${Rf}`, kU = `hidden${Rf}`, LU = `show${Rf}`, MU = `shown${Rf}`, zx = `click${Rf}${nb}`, Ux = `keydown${Rf}${nb}`, zU = `keyup${Rf}${nb}`, hp = "show", UU = "dropup", PU = "dropend", jU = "dropstart", IU = "dropup-center", FU = "dropdown-center", Ef = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', HU = `${Ef}.${hp}`, iE = ".dropdown-menu", $U = ".navbar", VU = ".navbar-nav", BU = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", YU = uo() ? "top-end" : "top-start", WU = uo() ? "top-start" : "top-end", GU = uo() ? "bottom-end" : "bottom-start", KU = uo() ? "bottom-start" : "bottom-end", QU = uo() ? "left-start" : "right-start", XU = uo() ? "right-start" : "left-start", qU = "top", ZU = "bottom", JU = {
  autoClose: !0,
  boundary: "clippingParents",
  display: "dynamic",
  offset: [0, 2],
  popperConfig: null,
  reference: "toggle"
}, eP = {
  autoClose: "(boolean|string)",
  boundary: "(string|element)",
  display: "string",
  offset: "(array|string|function)",
  popperConfig: "(null|object|function)",
  reference: "(string|element|object)"
};
class Ml extends Go {
  constructor(a, s) {
    super(a, s), this._popper = null, this._parent = this._element.parentNode, this._menu = dt.next(this._element, iE)[0] || dt.prev(this._element, iE)[0] || dt.findOne(iE, this._parent), this._inNavbar = this._detectNavbar();
  }
  // Getters
  static get Default() {
    return JU;
  }
  static get DefaultType() {
    return eP;
  }
  static get NAME() {
    return c1;
  }
  // Public
  toggle() {
    return this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (Ys(this._element) || this._isShown())
      return;
    const a = {
      relatedTarget: this._element
    };
    if (!ce.trigger(this._element, LU, a).defaultPrevented) {
      if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(VU))
        for (const p of [].concat(...document.body.children))
          ce.on(p, "mouseover", fE);
      this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(hp), this._element.classList.add(hp), ce.trigger(this._element, MU, a);
    }
  }
  hide() {
    if (Ys(this._element) || !this._isShown())
      return;
    const a = {
      relatedTarget: this._element
    };
    this._completeHide(a);
  }
  dispose() {
    this._popper && this._popper.destroy(), super.dispose();
  }
  update() {
    this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
  }
  // Private
  _completeHide(a) {
    if (!ce.trigger(this._element, NU, a).defaultPrevented) {
      if ("ontouchstart" in document.documentElement)
        for (const p of [].concat(...document.body.children))
          ce.off(p, "mouseover", fE);
      this._popper && this._popper.destroy(), this._menu.classList.remove(hp), this._element.classList.remove(hp), this._element.setAttribute("aria-expanded", "false"), Ou.removeDataAttribute(this._menu, "popper"), ce.trigger(this._element, kU, a);
    }
  }
  _getConfig(a) {
    if (a = super._getConfig(a), typeof a.reference == "object" && !Du(a.reference) && typeof a.reference.getBoundingClientRect != "function")
      throw new TypeError(`${c1.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
    return a;
  }
  _createPopper() {
    if (typeof yx > "u")
      throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
    let a = this._element;
    this._config.reference === "parent" ? a = this._parent : Du(this._config.reference) ? a = Bs(this._config.reference) : typeof this._config.reference == "object" && (a = this._config.reference);
    const s = this._getPopperConfig();
    this._popper = JC(a, this._menu, s);
  }
  _isShown() {
    return this._menu.classList.contains(hp);
  }
  _getPlacement() {
    const a = this._parent;
    if (a.classList.contains(PU))
      return QU;
    if (a.classList.contains(jU))
      return XU;
    if (a.classList.contains(IU))
      return qU;
    if (a.classList.contains(FU))
      return ZU;
    const s = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
    return a.classList.contains(UU) ? s ? WU : YU : s ? KU : GU;
  }
  _detectNavbar() {
    return this._element.closest($U) !== null;
  }
  _getOffset() {
    const {
      offset: a
    } = this._config;
    return typeof a == "string" ? a.split(",").map((s) => Number.parseInt(s, 10)) : typeof a == "function" ? (s) => a(s, this._element) : a;
  }
  _getPopperConfig() {
    const a = {
      placement: this._getPlacement(),
      modifiers: [{
        name: "preventOverflow",
        options: {
          boundary: this._config.boundary
        }
      }, {
        name: "offset",
        options: {
          offset: this._getOffset()
        }
      }]
    };
    return (this._inNavbar || this._config.display === "static") && (Ou.setDataAttribute(this._menu, "popper", "static"), a.modifiers = [{
      name: "applyStyles",
      enabled: !1
    }]), {
      ...a,
      ...ga(this._config.popperConfig, [a])
    };
  }
  _selectMenuItem({
    key: a,
    target: s
  }) {
    const p = dt.find(BU, this._menu).filter((y) => Dp(y));
    p.length && eb(p, s, a === d1, !p.includes(s)).focus();
  }
  // Static
  static jQueryInterface(a) {
    return this.each(function() {
      const s = Ml.getOrCreateInstance(this, a);
      if (typeof a == "string") {
        if (typeof s[a] > "u")
          throw new TypeError(`No method named "${a}"`);
        s[a]();
      }
    });
  }
  static clearMenus(a) {
    if (a.button === AU || a.type === "keyup" && a.key !== f1)
      return;
    const s = dt.find(HU);
    for (const p of s) {
      const y = Ml.getInstance(p);
      if (!y || y._config.autoClose === !1)
        continue;
      const C = a.composedPath(), T = C.includes(y._menu);
      if (C.includes(y._element) || y._config.autoClose === "inside" && !T || y._config.autoClose === "outside" && T || y._menu.contains(a.target) && (a.type === "keyup" && a.key === f1 || /input|select|option|textarea|form/i.test(a.target.tagName)))
        continue;
      const E = {
        relatedTarget: y._element
      };
      a.type === "click" && (E.clickEvent = a), y._completeHide(E);
    }
  }
  static dataApiKeydownHandler(a) {
    const s = /input|textarea/i.test(a.target.tagName), p = a.key === DU, y = [OU, d1].includes(a.key);
    if (!y && !p || s && !p)
      return;
    a.preventDefault();
    const C = this.matches(Ef) ? this : dt.prev(this, Ef)[0] || dt.next(this, Ef)[0] || dt.findOne(Ef, a.delegateTarget.parentNode), T = Ml.getOrCreateInstance(C);
    if (y) {
      a.stopPropagation(), T.show(), T._selectMenuItem(a);
      return;
    }
    T._isShown() && (a.stopPropagation(), T.hide(), C.focus());
  }
}
ce.on(document, Ux, Ef, Ml.dataApiKeydownHandler);
ce.on(document, Ux, iE, Ml.dataApiKeydownHandler);
ce.on(document, zx, Ml.clearMenus);
ce.on(document, zU, Ml.clearMenus);
ce.on(document, zx, Ef, function(c) {
  c.preventDefault(), Ml.getOrCreateInstance(this).toggle();
});
co(Ml);
const Px = "backdrop", tP = "fade", p1 = "show", h1 = `mousedown.bs.${Px}`, nP = {
  className: "modal-backdrop",
  clickCallback: null,
  isAnimated: !1,
  isVisible: !0,
  // if false, we use the backdrop helper without adding any element to the dom
  rootElement: "body"
  // give the choice to place backdrop under different elements
}, rP = {
  className: "string",
  clickCallback: "(function|null)",
  isAnimated: "boolean",
  isVisible: "boolean",
  rootElement: "(element|string)"
};
class jx extends Kv {
  constructor(a) {
    super(), this._config = this._getConfig(a), this._isAppended = !1, this._element = null;
  }
  // Getters
  static get Default() {
    return nP;
  }
  static get DefaultType() {
    return rP;
  }
  static get NAME() {
    return Px;
  }
  // Public
  show(a) {
    if (!this._config.isVisible) {
      ga(a);
      return;
    }
    this._append();
    const s = this._getElement();
    this._config.isAnimated && Gv(s), s.classList.add(p1), this._emulateAnimation(() => {
      ga(a);
    });
  }
  hide(a) {
    if (!this._config.isVisible) {
      ga(a);
      return;
    }
    this._getElement().classList.remove(p1), this._emulateAnimation(() => {
      this.dispose(), ga(a);
    });
  }
  dispose() {
    this._isAppended && (ce.off(this._element, h1), this._element.remove(), this._isAppended = !1);
  }
  // Private
  _getElement() {
    if (!this._element) {
      const a = document.createElement("div");
      a.className = this._config.className, this._config.isAnimated && a.classList.add(tP), this._element = a;
    }
    return this._element;
  }
  _configAfterMerge(a) {
    return a.rootElement = Bs(a.rootElement), a;
  }
  _append() {
    if (this._isAppended)
      return;
    const a = this._getElement();
    this._config.rootElement.append(a), ce.on(a, h1, () => {
      ga(this._config.clickCallback);
    }), this._isAppended = !0;
  }
  _emulateAnimation(a) {
    bx(a, this._getElement(), this._config.isAnimated);
  }
}
const iP = "focustrap", aP = "bs.focustrap", pE = `.${aP}`, oP = `focusin${pE}`, lP = `keydown.tab${pE}`, uP = "Tab", sP = "forward", v1 = "backward", cP = {
  autofocus: !0,
  trapElement: null
  // The element to trap focus inside of
}, fP = {
  autofocus: "boolean",
  trapElement: "element"
};
class Ix extends Kv {
  constructor(a) {
    super(), this._config = this._getConfig(a), this._isActive = !1, this._lastTabNavDirection = null;
  }
  // Getters
  static get Default() {
    return cP;
  }
  static get DefaultType() {
    return fP;
  }
  static get NAME() {
    return iP;
  }
  // Public
  activate() {
    this._isActive || (this._config.autofocus && this._config.trapElement.focus(), ce.off(document, pE), ce.on(document, oP, (a) => this._handleFocusin(a)), ce.on(document, lP, (a) => this._handleKeydown(a)), this._isActive = !0);
  }
  deactivate() {
    this._isActive && (this._isActive = !1, ce.off(document, pE));
  }
  // Private
  _handleFocusin(a) {
    const {
      trapElement: s
    } = this._config;
    if (a.target === document || a.target === s || s.contains(a.target))
      return;
    const p = dt.focusableChildren(s);
    p.length === 0 ? s.focus() : this._lastTabNavDirection === v1 ? p[p.length - 1].focus() : p[0].focus();
  }
  _handleKeydown(a) {
    a.key === uP && (this._lastTabNavDirection = a.shiftKey ? v1 : sP);
  }
}
const m1 = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", g1 = ".sticky-top", Ky = "padding-right", y1 = "margin-right";
class MC {
  constructor() {
    this._element = document.body;
  }
  // Public
  getWidth() {
    const a = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - a);
  }
  hide() {
    const a = this.getWidth();
    this._disableOverFlow(), this._setElementAttributes(this._element, Ky, (s) => s + a), this._setElementAttributes(m1, Ky, (s) => s + a), this._setElementAttributes(g1, y1, (s) => s - a);
  }
  reset() {
    this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, Ky), this._resetElementAttributes(m1, Ky), this._resetElementAttributes(g1, y1);
  }
  isOverflowing() {
    return this.getWidth() > 0;
  }
  // Private
  _disableOverFlow() {
    this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
  }
  _setElementAttributes(a, s, p) {
    const y = this.getWidth(), C = (T) => {
      if (T !== this._element && window.innerWidth > T.clientWidth + y)
        return;
      this._saveInitialAttribute(T, s);
      const E = window.getComputedStyle(T).getPropertyValue(s);
      T.style.setProperty(s, `${p(Number.parseFloat(E))}px`);
    };
    this._applyManipulationCallback(a, C);
  }
  _saveInitialAttribute(a, s) {
    const p = a.style.getPropertyValue(s);
    p && Ou.setDataAttribute(a, s, p);
  }
  _resetElementAttributes(a, s) {
    const p = (y) => {
      const C = Ou.getDataAttribute(y, s);
      if (C === null) {
        y.style.removeProperty(s);
        return;
      }
      Ou.removeDataAttribute(y, s), y.style.setProperty(s, C);
    };
    this._applyManipulationCallback(a, p);
  }
  _applyManipulationCallback(a, s) {
    if (Du(a)) {
      s(a);
      return;
    }
    for (const p of dt.find(a, this._element))
      s(p);
  }
}
const dP = "modal", pP = "bs.modal", so = `.${pP}`, hP = ".data-api", vP = "Escape", mP = `hide${so}`, gP = `hidePrevented${so}`, Fx = `hidden${so}`, Hx = `show${so}`, yP = `shown${so}`, EP = `resize${so}`, _P = `click.dismiss${so}`, SP = `mousedown.dismiss${so}`, CP = `keydown.dismiss${so}`, bP = `click${so}${hP}`, E1 = "modal-open", TP = "fade", _1 = "show", uC = "modal-static", wP = ".modal.show", RP = ".modal-dialog", xP = ".modal-body", DP = '[data-bs-toggle="modal"]', OP = {
  backdrop: !0,
  focus: !0,
  keyboard: !0
}, AP = {
  backdrop: "(boolean|string)",
  focus: "boolean",
  keyboard: "boolean"
};
class wf extends Go {
  constructor(a, s) {
    super(a, s), this._dialog = dt.findOne(RP, this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new MC(), this._addEventListeners();
  }
  // Getters
  static get Default() {
    return OP;
  }
  static get DefaultType() {
    return AP;
  }
  static get NAME() {
    return dP;
  }
  // Public
  toggle(a) {
    return this._isShown ? this.hide() : this.show(a);
  }
  show(a) {
    this._isShown || this._isTransitioning || ce.trigger(this._element, Hx, {
      relatedTarget: a
    }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(E1), this._adjustDialog(), this._backdrop.show(() => this._showElement(a)));
  }
  hide() {
    !this._isShown || this._isTransitioning || ce.trigger(this._element, mP).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(_1), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated()));
  }
  dispose() {
    ce.off(window, so), ce.off(this._dialog, so), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
  }
  handleUpdate() {
    this._adjustDialog();
  }
  // Private
  _initializeBackDrop() {
    return new jx({
      isVisible: !!this._config.backdrop,
      // 'static' option will be translated to true, and booleans will keep their value,
      isAnimated: this._isAnimated()
    });
  }
  _initializeFocusTrap() {
    return new Ix({
      trapElement: this._element
    });
  }
  _showElement(a) {
    document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
    const s = dt.findOne(xP, this._dialog);
    s && (s.scrollTop = 0), Gv(this._element), this._element.classList.add(_1);
    const p = () => {
      this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, ce.trigger(this._element, yP, {
        relatedTarget: a
      });
    };
    this._queueCallback(p, this._dialog, this._isAnimated());
  }
  _addEventListeners() {
    ce.on(this._element, CP, (a) => {
      if (a.key === vP) {
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        this._triggerBackdropTransition();
      }
    }), ce.on(window, EP, () => {
      this._isShown && !this._isTransitioning && this._adjustDialog();
    }), ce.on(this._element, SP, (a) => {
      ce.one(this._element, _P, (s) => {
        if (!(this._element !== a.target || this._element !== s.target)) {
          if (this._config.backdrop === "static") {
            this._triggerBackdropTransition();
            return;
          }
          this._config.backdrop && this.hide();
        }
      });
    });
  }
  _hideModal() {
    this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(() => {
      document.body.classList.remove(E1), this._resetAdjustments(), this._scrollBar.reset(), ce.trigger(this._element, Fx);
    });
  }
  _isAnimated() {
    return this._element.classList.contains(TP);
  }
  _triggerBackdropTransition() {
    if (ce.trigger(this._element, gP).defaultPrevented)
      return;
    const s = this._element.scrollHeight > document.documentElement.clientHeight, p = this._element.style.overflowY;
    p === "hidden" || this._element.classList.contains(uC) || (s || (this._element.style.overflowY = "hidden"), this._element.classList.add(uC), this._queueCallback(() => {
      this._element.classList.remove(uC), this._queueCallback(() => {
        this._element.style.overflowY = p;
      }, this._dialog);
    }, this._dialog), this._element.focus());
  }
  /**
   * The following methods are used to handle overflowing modals
   */
  _adjustDialog() {
    const a = this._element.scrollHeight > document.documentElement.clientHeight, s = this._scrollBar.getWidth(), p = s > 0;
    if (p && !a) {
      const y = uo() ? "paddingLeft" : "paddingRight";
      this._element.style[y] = `${s}px`;
    }
    if (!p && a) {
      const y = uo() ? "paddingRight" : "paddingLeft";
      this._element.style[y] = `${s}px`;
    }
  }
  _resetAdjustments() {
    this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
  }
  // Static
  static jQueryInterface(a, s) {
    return this.each(function() {
      const p = wf.getOrCreateInstance(this, a);
      if (typeof a == "string") {
        if (typeof p[a] > "u")
          throw new TypeError(`No method named "${a}"`);
        p[a](s);
      }
    });
  }
}
ce.on(document, bP, DP, function(c) {
  const a = dt.getElementFromSelector(this);
  ["A", "AREA"].includes(this.tagName) && c.preventDefault(), ce.one(a, Hx, (y) => {
    y.defaultPrevented || ce.one(a, Fx, () => {
      Dp(this) && this.focus();
    });
  });
  const s = dt.findOne(wP);
  s && wf.getInstance(s).hide(), wf.getOrCreateInstance(a).toggle(this);
});
bE(wf);
co(wf);
const NP = "offcanvas", kP = "bs.offcanvas", Lu = `.${kP}`, $x = ".data-api", LP = `load${Lu}${$x}`, MP = "Escape", S1 = "show", C1 = "showing", b1 = "hiding", zP = "offcanvas-backdrop", Vx = ".offcanvas.show", UP = `show${Lu}`, PP = `shown${Lu}`, jP = `hide${Lu}`, T1 = `hidePrevented${Lu}`, Bx = `hidden${Lu}`, IP = `resize${Lu}`, FP = `click${Lu}${$x}`, HP = `keydown.dismiss${Lu}`, $P = '[data-bs-toggle="offcanvas"]', VP = {
  backdrop: !0,
  keyboard: !0,
  scroll: !1
}, BP = {
  backdrop: "(boolean|string)",
  keyboard: "boolean",
  scroll: "boolean"
};
class Ws extends Go {
  constructor(a, s) {
    super(a, s), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
  }
  // Getters
  static get Default() {
    return VP;
  }
  static get DefaultType() {
    return BP;
  }
  static get NAME() {
    return NP;
  }
  // Public
  toggle(a) {
    return this._isShown ? this.hide() : this.show(a);
  }
  show(a) {
    if (this._isShown || ce.trigger(this._element, UP, {
      relatedTarget: a
    }).defaultPrevented)
      return;
    this._isShown = !0, this._backdrop.show(), this._config.scroll || new MC().hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(C1);
    const p = () => {
      (!this._config.scroll || this._config.backdrop) && this._focustrap.activate(), this._element.classList.add(S1), this._element.classList.remove(C1), ce.trigger(this._element, PP, {
        relatedTarget: a
      });
    };
    this._queueCallback(p, this._element, !0);
  }
  hide() {
    if (!this._isShown || ce.trigger(this._element, jP).defaultPrevented)
      return;
    this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(b1), this._backdrop.hide();
    const s = () => {
      this._element.classList.remove(S1, b1), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new MC().reset(), ce.trigger(this._element, Bx);
    };
    this._queueCallback(s, this._element, !0);
  }
  dispose() {
    this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
  }
  // Private
  _initializeBackDrop() {
    const a = () => {
      if (this._config.backdrop === "static") {
        ce.trigger(this._element, T1);
        return;
      }
      this.hide();
    }, s = !!this._config.backdrop;
    return new jx({
      className: zP,
      isVisible: s,
      isAnimated: !0,
      rootElement: this._element.parentNode,
      clickCallback: s ? a : null
    });
  }
  _initializeFocusTrap() {
    return new Ix({
      trapElement: this._element
    });
  }
  _addEventListeners() {
    ce.on(this._element, HP, (a) => {
      if (a.key === MP) {
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        ce.trigger(this._element, T1);
      }
    });
  }
  // Static
  static jQueryInterface(a) {
    return this.each(function() {
      const s = Ws.getOrCreateInstance(this, a);
      if (typeof a == "string") {
        if (s[a] === void 0 || a.startsWith("_") || a === "constructor")
          throw new TypeError(`No method named "${a}"`);
        s[a](this);
      }
    });
  }
}
ce.on(document, FP, $P, function(c) {
  const a = dt.getElementFromSelector(this);
  if (["A", "AREA"].includes(this.tagName) && c.preventDefault(), Ys(this))
    return;
  ce.one(a, Bx, () => {
    Dp(this) && this.focus();
  });
  const s = dt.findOne(Vx);
  s && s !== a && Ws.getInstance(s).hide(), Ws.getOrCreateInstance(a).toggle(this);
});
ce.on(window, LP, () => {
  for (const c of dt.find(Vx))
    Ws.getOrCreateInstance(c).show();
});
ce.on(window, IP, () => {
  for (const c of dt.find("[aria-modal][class*=show][class*=offcanvas-]"))
    getComputedStyle(c).position !== "fixed" && Ws.getOrCreateInstance(c).hide();
});
bE(Ws);
co(Ws);
const YP = /^aria-[\w-]*$/i, Yx = {
  // Global attributes allowed on any supplied element below.
  "*": ["class", "dir", "id", "lang", "role", YP],
  a: ["target", "href", "title", "rel"],
  area: [],
  b: [],
  br: [],
  col: [],
  code: [],
  div: [],
  em: [],
  hr: [],
  h1: [],
  h2: [],
  h3: [],
  h4: [],
  h5: [],
  h6: [],
  i: [],
  img: ["src", "srcset", "alt", "title", "width", "height"],
  li: [],
  ol: [],
  p: [],
  pre: [],
  s: [],
  small: [],
  span: [],
  sub: [],
  sup: [],
  strong: [],
  u: [],
  ul: []
}, WP = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]), GP = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i, KP = (c, a) => {
  const s = c.nodeName.toLowerCase();
  return a.includes(s) ? WP.has(s) ? !!GP.test(c.nodeValue) : !0 : a.filter((p) => p instanceof RegExp).some((p) => p.test(s));
};
function QP(c, a, s) {
  if (!c.length)
    return c;
  if (s && typeof s == "function")
    return s(c);
  const y = new window.DOMParser().parseFromString(c, "text/html"), C = [].concat(...y.body.querySelectorAll("*"));
  for (const T of C) {
    const E = T.nodeName.toLowerCase();
    if (!Object.keys(a).includes(E)) {
      T.remove();
      continue;
    }
    const O = [].concat(...T.attributes), k = [].concat(a["*"] || [], a[E] || []);
    for (const D of O)
      KP(D, k) || T.removeAttribute(D.nodeName);
  }
  return y.body.innerHTML;
}
const XP = "TemplateFactory", qP = {
  allowList: Yx,
  content: {},
  // { selector : text ,  selector2 : text2 , }
  extraClass: "",
  html: !1,
  sanitize: !0,
  sanitizeFn: null,
  template: "<div></div>"
}, ZP = {
  allowList: "object",
  content: "object",
  extraClass: "(string|function)",
  html: "boolean",
  sanitize: "boolean",
  sanitizeFn: "(null|function)",
  template: "string"
}, JP = {
  entry: "(string|element|function|null)",
  selector: "(string|element)"
};
class ej extends Kv {
  constructor(a) {
    super(), this._config = this._getConfig(a);
  }
  // Getters
  static get Default() {
    return qP;
  }
  static get DefaultType() {
    return ZP;
  }
  static get NAME() {
    return XP;
  }
  // Public
  getContent() {
    return Object.values(this._config.content).map((a) => this._resolvePossibleFunction(a)).filter(Boolean);
  }
  hasContent() {
    return this.getContent().length > 0;
  }
  changeContent(a) {
    return this._checkContent(a), this._config.content = {
      ...this._config.content,
      ...a
    }, this;
  }
  toHtml() {
    const a = document.createElement("div");
    a.innerHTML = this._maybeSanitize(this._config.template);
    for (const [y, C] of Object.entries(this._config.content))
      this._setContent(a, C, y);
    const s = a.children[0], p = this._resolvePossibleFunction(this._config.extraClass);
    return p && s.classList.add(...p.split(" ")), s;
  }
  // Private
  _typeCheckConfig(a) {
    super._typeCheckConfig(a), this._checkContent(a.content);
  }
  _checkContent(a) {
    for (const [s, p] of Object.entries(a))
      super._typeCheckConfig({
        selector: s,
        entry: p
      }, JP);
  }
  _setContent(a, s, p) {
    const y = dt.findOne(p, a);
    if (y) {
      if (s = this._resolvePossibleFunction(s), !s) {
        y.remove();
        return;
      }
      if (Du(s)) {
        this._putElementInTemplate(Bs(s), y);
        return;
      }
      if (this._config.html) {
        y.innerHTML = this._maybeSanitize(s);
        return;
      }
      y.textContent = s;
    }
  }
  _maybeSanitize(a) {
    return this._config.sanitize ? QP(a, this._config.allowList, this._config.sanitizeFn) : a;
  }
  _resolvePossibleFunction(a) {
    return ga(a, [this]);
  }
  _putElementInTemplate(a, s) {
    if (this._config.html) {
      s.innerHTML = "", s.append(a);
      return;
    }
    s.textContent = a.textContent;
  }
}
const tj = "tooltip", nj = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]), sC = "fade", rj = "modal", Qy = "show", ij = ".tooltip-inner", w1 = `.${rj}`, R1 = "hide.bs.modal", kv = "hover", cC = "focus", aj = "click", oj = "manual", lj = "hide", uj = "hidden", sj = "show", cj = "shown", fj = "inserted", dj = "click", pj = "focusin", hj = "focusout", vj = "mouseenter", mj = "mouseleave", gj = {
  AUTO: "auto",
  TOP: "top",
  RIGHT: uo() ? "left" : "right",
  BOTTOM: "bottom",
  LEFT: uo() ? "right" : "left"
}, yj = {
  allowList: Yx,
  animation: !0,
  boundary: "clippingParents",
  container: !1,
  customClass: "",
  delay: 0,
  fallbackPlacements: ["top", "right", "bottom", "left"],
  html: !1,
  offset: [0, 6],
  placement: "top",
  popperConfig: null,
  sanitize: !0,
  sanitizeFn: null,
  selector: !1,
  template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
  title: "",
  trigger: "hover focus"
}, Ej = {
  allowList: "object",
  animation: "boolean",
  boundary: "(string|element)",
  container: "(string|element|boolean)",
  customClass: "(string|function)",
  delay: "(number|object)",
  fallbackPlacements: "array",
  html: "boolean",
  offset: "(array|string|function)",
  placement: "(string|function)",
  popperConfig: "(null|object|function)",
  sanitize: "boolean",
  sanitizeFn: "(null|function)",
  selector: "(string|boolean)",
  template: "string",
  title: "(string|element|function)",
  trigger: "string"
};
class Ap extends Go {
  constructor(a, s) {
    if (typeof yx > "u")
      throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
    super(a, s), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle();
  }
  // Getters
  static get Default() {
    return yj;
  }
  static get DefaultType() {
    return Ej;
  }
  static get NAME() {
    return tj;
  }
  // Public
  enable() {
    this._isEnabled = !0;
  }
  disable() {
    this._isEnabled = !1;
  }
  toggleEnabled() {
    this._isEnabled = !this._isEnabled;
  }
  toggle() {
    if (this._isEnabled) {
      if (this._activeTrigger.click = !this._activeTrigger.click, this._isShown()) {
        this._leave();
        return;
      }
      this._enter();
    }
  }
  dispose() {
    clearTimeout(this._timeout), ce.off(this._element.closest(w1), R1, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose();
  }
  show() {
    if (this._element.style.display === "none")
      throw new Error("Please use show on visible elements");
    if (!(this._isWithContent() && this._isEnabled))
      return;
    const a = ce.trigger(this._element, this.constructor.eventName(sj)), p = (Sx(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
    if (a.defaultPrevented || !p)
      return;
    this._disposePopper();
    const y = this._getTipElement();
    this._element.setAttribute("aria-describedby", y.getAttribute("id"));
    const {
      container: C
    } = this._config;
    if (this._element.ownerDocument.documentElement.contains(this.tip) || (C.append(y), ce.trigger(this._element, this.constructor.eventName(fj))), this._popper = this._createPopper(y), y.classList.add(Qy), "ontouchstart" in document.documentElement)
      for (const E of [].concat(...document.body.children))
        ce.on(E, "mouseover", fE);
    const T = () => {
      ce.trigger(this._element, this.constructor.eventName(cj)), this._isHovered === !1 && this._leave(), this._isHovered = !1;
    };
    this._queueCallback(T, this.tip, this._isAnimated());
  }
  hide() {
    if (!this._isShown() || ce.trigger(this._element, this.constructor.eventName(lj)).defaultPrevented)
      return;
    if (this._getTipElement().classList.remove(Qy), "ontouchstart" in document.documentElement)
      for (const y of [].concat(...document.body.children))
        ce.off(y, "mouseover", fE);
    this._activeTrigger[aj] = !1, this._activeTrigger[cC] = !1, this._activeTrigger[kv] = !1, this._isHovered = null;
    const p = () => {
      this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), ce.trigger(this._element, this.constructor.eventName(uj)));
    };
    this._queueCallback(p, this.tip, this._isAnimated());
  }
  update() {
    this._popper && this._popper.update();
  }
  // Protected
  _isWithContent() {
    return !!this._getTitle();
  }
  _getTipElement() {
    return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip;
  }
  _createTipElement(a) {
    const s = this._getTemplateFactory(a).toHtml();
    if (!s)
      return null;
    s.classList.remove(sC, Qy), s.classList.add(`bs-${this.constructor.NAME}-auto`);
    const p = az(this.constructor.NAME).toString();
    return s.setAttribute("id", p), this._isAnimated() && s.classList.add(sC), s;
  }
  setContent(a) {
    this._newContent = a, this._isShown() && (this._disposePopper(), this.show());
  }
  _getTemplateFactory(a) {
    return this._templateFactory ? this._templateFactory.changeContent(a) : this._templateFactory = new ej({
      ...this._config,
      // the `content` var has to be after `this._config`
      // to override config.content in case of popover
      content: a,
      extraClass: this._resolvePossibleFunction(this._config.customClass)
    }), this._templateFactory;
  }
  _getContentForTemplate() {
    return {
      [ij]: this._getTitle()
    };
  }
  _getTitle() {
    return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
  }
  // Private
  _initializeOnDelegatedTarget(a) {
    return this.constructor.getOrCreateInstance(a.delegateTarget, this._getDelegateConfig());
  }
  _isAnimated() {
    return this._config.animation || this.tip && this.tip.classList.contains(sC);
  }
  _isShown() {
    return this.tip && this.tip.classList.contains(Qy);
  }
  _createPopper(a) {
    const s = ga(this._config.placement, [this, a, this._element]), p = gj[s.toUpperCase()];
    return JC(this._element, a, this._getPopperConfig(p));
  }
  _getOffset() {
    const {
      offset: a
    } = this._config;
    return typeof a == "string" ? a.split(",").map((s) => Number.parseInt(s, 10)) : typeof a == "function" ? (s) => a(s, this._element) : a;
  }
  _resolvePossibleFunction(a) {
    return ga(a, [this._element]);
  }
  _getPopperConfig(a) {
    const s = {
      placement: a,
      modifiers: [{
        name: "flip",
        options: {
          fallbackPlacements: this._config.fallbackPlacements
        }
      }, {
        name: "offset",
        options: {
          offset: this._getOffset()
        }
      }, {
        name: "preventOverflow",
        options: {
          boundary: this._config.boundary
        }
      }, {
        name: "arrow",
        options: {
          element: `.${this.constructor.NAME}-arrow`
        }
      }, {
        name: "preSetPlacement",
        enabled: !0,
        phase: "beforeMain",
        fn: (p) => {
          this._getTipElement().setAttribute("data-popper-placement", p.state.placement);
        }
      }]
    };
    return {
      ...s,
      ...ga(this._config.popperConfig, [s])
    };
  }
  _setListeners() {
    const a = this._config.trigger.split(" ");
    for (const s of a)
      if (s === "click")
        ce.on(this._element, this.constructor.eventName(dj), this._config.selector, (p) => {
          this._initializeOnDelegatedTarget(p).toggle();
        });
      else if (s !== oj) {
        const p = s === kv ? this.constructor.eventName(vj) : this.constructor.eventName(pj), y = s === kv ? this.constructor.eventName(mj) : this.constructor.eventName(hj);
        ce.on(this._element, p, this._config.selector, (C) => {
          const T = this._initializeOnDelegatedTarget(C);
          T._activeTrigger[C.type === "focusin" ? cC : kv] = !0, T._enter();
        }), ce.on(this._element, y, this._config.selector, (C) => {
          const T = this._initializeOnDelegatedTarget(C);
          T._activeTrigger[C.type === "focusout" ? cC : kv] = T._element.contains(C.relatedTarget), T._leave();
        });
      }
    this._hideModalHandler = () => {
      this._element && this.hide();
    }, ce.on(this._element.closest(w1), R1, this._hideModalHandler);
  }
  _fixTitle() {
    const a = this._element.getAttribute("title");
    a && (!this._element.getAttribute("aria-label") && !this._element.textContent.trim() && this._element.setAttribute("aria-label", a), this._element.setAttribute("data-bs-original-title", a), this._element.removeAttribute("title"));
  }
  _enter() {
    if (this._isShown() || this._isHovered) {
      this._isHovered = !0;
      return;
    }
    this._isHovered = !0, this._setTimeout(() => {
      this._isHovered && this.show();
    }, this._config.delay.show);
  }
  _leave() {
    this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout(() => {
      this._isHovered || this.hide();
    }, this._config.delay.hide));
  }
  _setTimeout(a, s) {
    clearTimeout(this._timeout), this._timeout = setTimeout(a, s);
  }
  _isWithActiveTrigger() {
    return Object.values(this._activeTrigger).includes(!0);
  }
  _getConfig(a) {
    const s = Ou.getDataAttributes(this._element);
    for (const p of Object.keys(s))
      nj.has(p) && delete s[p];
    return a = {
      ...s,
      ...typeof a == "object" && a ? a : {}
    }, a = this._mergeConfigObj(a), a = this._configAfterMerge(a), this._typeCheckConfig(a), a;
  }
  _configAfterMerge(a) {
    return a.container = a.container === !1 ? document.body : Bs(a.container), typeof a.delay == "number" && (a.delay = {
      show: a.delay,
      hide: a.delay
    }), typeof a.title == "number" && (a.title = a.title.toString()), typeof a.content == "number" && (a.content = a.content.toString()), a;
  }
  _getDelegateConfig() {
    const a = {};
    for (const [s, p] of Object.entries(this._config))
      this.constructor.Default[s] !== p && (a[s] = p);
    return a.selector = !1, a.trigger = "manual", a;
  }
  _disposePopper() {
    this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null);
  }
  // Static
  static jQueryInterface(a) {
    return this.each(function() {
      const s = Ap.getOrCreateInstance(this, a);
      if (typeof a == "string") {
        if (typeof s[a] > "u")
          throw new TypeError(`No method named "${a}"`);
        s[a]();
      }
    });
  }
}
co(Ap);
const _j = "popover", Sj = ".popover-header", Cj = ".popover-body", bj = {
  ...Ap.Default,
  content: "",
  offset: [0, 8],
  placement: "right",
  template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
  trigger: "click"
}, Tj = {
  ...Ap.DefaultType,
  content: "(null|string|element|function)"
};
class rb extends Ap {
  // Getters
  static get Default() {
    return bj;
  }
  static get DefaultType() {
    return Tj;
  }
  static get NAME() {
    return _j;
  }
  // Overrides
  _isWithContent() {
    return this._getTitle() || this._getContent();
  }
  // Private
  _getContentForTemplate() {
    return {
      [Sj]: this._getTitle(),
      [Cj]: this._getContent()
    };
  }
  _getContent() {
    return this._resolvePossibleFunction(this._config.content);
  }
  // Static
  static jQueryInterface(a) {
    return this.each(function() {
      const s = rb.getOrCreateInstance(this, a);
      if (typeof a == "string") {
        if (typeof s[a] > "u")
          throw new TypeError(`No method named "${a}"`);
        s[a]();
      }
    });
  }
}
co(rb);
const wj = "scrollspy", Rj = "bs.scrollspy", ib = `.${Rj}`, xj = ".data-api", Dj = `activate${ib}`, x1 = `click${ib}`, Oj = `load${ib}${xj}`, Aj = "dropdown-item", sp = "active", Nj = '[data-bs-spy="scroll"]', fC = "[href]", kj = ".nav, .list-group", D1 = ".nav-link", Lj = ".nav-item", Mj = ".list-group-item", zj = `${D1}, ${Lj} > ${D1}, ${Mj}`, Uj = ".dropdown", Pj = ".dropdown-toggle", jj = {
  offset: null,
  // TODO: v6 @deprecated, keep it for backwards compatibility reasons
  rootMargin: "0px 0px -25%",
  smoothScroll: !1,
  target: null,
  threshold: [0.1, 0.5, 1]
}, Ij = {
  offset: "(number|null)",
  // TODO v6 @deprecated, keep it for backwards compatibility reasons
  rootMargin: "string",
  smoothScroll: "boolean",
  target: "element",
  threshold: "array"
};
class RE extends Go {
  constructor(a, s) {
    super(a, s), this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map(), this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
      visibleEntryTop: 0,
      parentScrollTop: 0
    }, this.refresh();
  }
  // Getters
  static get Default() {
    return jj;
  }
  static get DefaultType() {
    return Ij;
  }
  static get NAME() {
    return wj;
  }
  // Public
  refresh() {
    this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
    for (const a of this._observableSections.values())
      this._observer.observe(a);
  }
  dispose() {
    this._observer.disconnect(), super.dispose();
  }
  // Private
  _configAfterMerge(a) {
    return a.target = Bs(a.target) || document.body, a.rootMargin = a.offset ? `${a.offset}px 0px -30%` : a.rootMargin, typeof a.threshold == "string" && (a.threshold = a.threshold.split(",").map((s) => Number.parseFloat(s))), a;
  }
  _maybeEnableSmoothScroll() {
    this._config.smoothScroll && (ce.off(this._config.target, x1), ce.on(this._config.target, x1, fC, (a) => {
      const s = this._observableSections.get(a.target.hash);
      if (s) {
        a.preventDefault();
        const p = this._rootElement || window, y = s.offsetTop - this._element.offsetTop;
        if (p.scrollTo) {
          p.scrollTo({
            top: y,
            behavior: "smooth"
          });
          return;
        }
        p.scrollTop = y;
      }
    }));
  }
  _getNewObserver() {
    const a = {
      root: this._rootElement,
      threshold: this._config.threshold,
      rootMargin: this._config.rootMargin
    };
    return new IntersectionObserver((s) => this._observerCallback(s), a);
  }
  // The logic of selection
  _observerCallback(a) {
    const s = (T) => this._targetLinks.get(`#${T.target.id}`), p = (T) => {
      this._previousScrollData.visibleEntryTop = T.target.offsetTop, this._process(s(T));
    }, y = (this._rootElement || document.documentElement).scrollTop, C = y >= this._previousScrollData.parentScrollTop;
    this._previousScrollData.parentScrollTop = y;
    for (const T of a) {
      if (!T.isIntersecting) {
        this._activeTarget = null, this._clearActiveClass(s(T));
        continue;
      }
      const E = T.target.offsetTop >= this._previousScrollData.visibleEntryTop;
      if (C && E) {
        if (p(T), !y)
          return;
        continue;
      }
      !C && !E && p(T);
    }
  }
  _initializeTargetsAndObservables() {
    this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map();
    const a = dt.find(fC, this._config.target);
    for (const s of a) {
      if (!s.hash || Ys(s))
        continue;
      const p = dt.findOne(decodeURI(s.hash), this._element);
      Dp(p) && (this._targetLinks.set(decodeURI(s.hash), s), this._observableSections.set(s.hash, p));
    }
  }
  _process(a) {
    this._activeTarget !== a && (this._clearActiveClass(this._config.target), this._activeTarget = a, a.classList.add(sp), this._activateParents(a), ce.trigger(this._element, Dj, {
      relatedTarget: a
    }));
  }
  _activateParents(a) {
    if (a.classList.contains(Aj)) {
      dt.findOne(Pj, a.closest(Uj)).classList.add(sp);
      return;
    }
    for (const s of dt.parents(a, kj))
      for (const p of dt.prev(s, zj))
        p.classList.add(sp);
  }
  _clearActiveClass(a) {
    a.classList.remove(sp);
    const s = dt.find(`${fC}.${sp}`, a);
    for (const p of s)
      p.classList.remove(sp);
  }
  // Static
  static jQueryInterface(a) {
    return this.each(function() {
      const s = RE.getOrCreateInstance(this, a);
      if (typeof a == "string") {
        if (s[a] === void 0 || a.startsWith("_") || a === "constructor")
          throw new TypeError(`No method named "${a}"`);
        s[a]();
      }
    });
  }
}
ce.on(window, Oj, () => {
  for (const c of dt.find(Nj))
    RE.getOrCreateInstance(c);
});
co(RE);
const Fj = "tab", Hj = "bs.tab", xf = `.${Hj}`, $j = `hide${xf}`, Vj = `hidden${xf}`, Bj = `show${xf}`, Yj = `shown${xf}`, Wj = `click${xf}`, Gj = `keydown${xf}`, Kj = `load${xf}`, Qj = "ArrowLeft", O1 = "ArrowRight", Xj = "ArrowUp", A1 = "ArrowDown", dC = "Home", N1 = "End", _f = "active", k1 = "fade", pC = "show", qj = "dropdown", Wx = ".dropdown-toggle", Zj = ".dropdown-menu", hC = `:not(${Wx})`, Jj = '.list-group, .nav, [role="tablist"]', eI = ".nav-item, .list-group-item", tI = `.nav-link${hC}, .list-group-item${hC}, [role="tab"]${hC}`, Gx = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', vC = `${tI}, ${Gx}`, nI = `.${_f}[data-bs-toggle="tab"], .${_f}[data-bs-toggle="pill"], .${_f}[data-bs-toggle="list"]`;
class Tp extends Go {
  constructor(a) {
    super(a), this._parent = this._element.closest(Jj), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), ce.on(this._element, Gj, (s) => this._keydown(s)));
  }
  // Getters
  static get NAME() {
    return Fj;
  }
  // Public
  show() {
    const a = this._element;
    if (this._elemIsActive(a))
      return;
    const s = this._getActiveElem(), p = s ? ce.trigger(s, $j, {
      relatedTarget: a
    }) : null;
    ce.trigger(a, Bj, {
      relatedTarget: s
    }).defaultPrevented || p && p.defaultPrevented || (this._deactivate(s, a), this._activate(a, s));
  }
  // Private
  _activate(a, s) {
    if (!a)
      return;
    a.classList.add(_f), this._activate(dt.getElementFromSelector(a));
    const p = () => {
      if (a.getAttribute("role") !== "tab") {
        a.classList.add(pC);
        return;
      }
      a.removeAttribute("tabindex"), a.setAttribute("aria-selected", !0), this._toggleDropDown(a, !0), ce.trigger(a, Yj, {
        relatedTarget: s
      });
    };
    this._queueCallback(p, a, a.classList.contains(k1));
  }
  _deactivate(a, s) {
    if (!a)
      return;
    a.classList.remove(_f), a.blur(), this._deactivate(dt.getElementFromSelector(a));
    const p = () => {
      if (a.getAttribute("role") !== "tab") {
        a.classList.remove(pC);
        return;
      }
      a.setAttribute("aria-selected", !1), a.setAttribute("tabindex", "-1"), this._toggleDropDown(a, !1), ce.trigger(a, Vj, {
        relatedTarget: s
      });
    };
    this._queueCallback(p, a, a.classList.contains(k1));
  }
  _keydown(a) {
    if (![Qj, O1, Xj, A1, dC, N1].includes(a.key))
      return;
    a.stopPropagation(), a.preventDefault();
    const s = this._getChildren().filter((y) => !Ys(y));
    let p;
    if ([dC, N1].includes(a.key))
      p = s[a.key === dC ? 0 : s.length - 1];
    else {
      const y = [O1, A1].includes(a.key);
      p = eb(s, a.target, y, !0);
    }
    p && (p.focus({
      preventScroll: !0
    }), Tp.getOrCreateInstance(p).show());
  }
  _getChildren() {
    return dt.find(vC, this._parent);
  }
  _getActiveElem() {
    return this._getChildren().find((a) => this._elemIsActive(a)) || null;
  }
  _setInitialAttributes(a, s) {
    this._setAttributeIfNotExists(a, "role", "tablist");
    for (const p of s)
      this._setInitialAttributesOnChild(p);
  }
  _setInitialAttributesOnChild(a) {
    a = this._getInnerElement(a);
    const s = this._elemIsActive(a), p = this._getOuterElement(a);
    a.setAttribute("aria-selected", s), p !== a && this._setAttributeIfNotExists(p, "role", "presentation"), s || a.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(a, "role", "tab"), this._setInitialAttributesOnTargetPanel(a);
  }
  _setInitialAttributesOnTargetPanel(a) {
    const s = dt.getElementFromSelector(a);
    s && (this._setAttributeIfNotExists(s, "role", "tabpanel"), a.id && this._setAttributeIfNotExists(s, "aria-labelledby", `${a.id}`));
  }
  _toggleDropDown(a, s) {
    const p = this._getOuterElement(a);
    if (!p.classList.contains(qj))
      return;
    const y = (C, T) => {
      const E = dt.findOne(C, p);
      E && E.classList.toggle(T, s);
    };
    y(Wx, _f), y(Zj, pC), p.setAttribute("aria-expanded", s);
  }
  _setAttributeIfNotExists(a, s, p) {
    a.hasAttribute(s) || a.setAttribute(s, p);
  }
  _elemIsActive(a) {
    return a.classList.contains(_f);
  }
  // Try to get the inner element (usually the .nav-link)
  _getInnerElement(a) {
    return a.matches(vC) ? a : dt.findOne(vC, a);
  }
  // Try to get the outer element (usually the .nav-item)
  _getOuterElement(a) {
    return a.closest(eI) || a;
  }
  // Static
  static jQueryInterface(a) {
    return this.each(function() {
      const s = Tp.getOrCreateInstance(this);
      if (typeof a == "string") {
        if (s[a] === void 0 || a.startsWith("_") || a === "constructor")
          throw new TypeError(`No method named "${a}"`);
        s[a]();
      }
    });
  }
}
ce.on(document, Wj, Gx, function(c) {
  ["A", "AREA"].includes(this.tagName) && c.preventDefault(), !Ys(this) && Tp.getOrCreateInstance(this).show();
});
ce.on(window, Kj, () => {
  for (const c of dt.find(nI))
    Tp.getOrCreateInstance(c);
});
co(Tp);
const rI = "toast", iI = "bs.toast", Qs = `.${iI}`, aI = `mouseover${Qs}`, oI = `mouseout${Qs}`, lI = `focusin${Qs}`, uI = `focusout${Qs}`, sI = `hide${Qs}`, cI = `hidden${Qs}`, fI = `show${Qs}`, dI = `shown${Qs}`, pI = "fade", L1 = "hide", Xy = "show", qy = "showing", hI = {
  animation: "boolean",
  autohide: "boolean",
  delay: "number"
}, vI = {
  animation: !0,
  autohide: !0,
  delay: 5e3
};
class qv extends Go {
  constructor(a, s) {
    super(a, s), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners();
  }
  // Getters
  static get Default() {
    return vI;
  }
  static get DefaultType() {
    return hI;
  }
  static get NAME() {
    return rI;
  }
  // Public
  show() {
    if (ce.trigger(this._element, fI).defaultPrevented)
      return;
    this._clearTimeout(), this._config.animation && this._element.classList.add(pI);
    const s = () => {
      this._element.classList.remove(qy), ce.trigger(this._element, dI), this._maybeScheduleHide();
    };
    this._element.classList.remove(L1), Gv(this._element), this._element.classList.add(Xy, qy), this._queueCallback(s, this._element, this._config.animation);
  }
  hide() {
    if (!this.isShown() || ce.trigger(this._element, sI).defaultPrevented)
      return;
    const s = () => {
      this._element.classList.add(L1), this._element.classList.remove(qy, Xy), ce.trigger(this._element, cI);
    };
    this._element.classList.add(qy), this._queueCallback(s, this._element, this._config.animation);
  }
  dispose() {
    this._clearTimeout(), this.isShown() && this._element.classList.remove(Xy), super.dispose();
  }
  isShown() {
    return this._element.classList.contains(Xy);
  }
  // Private
  _maybeScheduleHide() {
    this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
      this.hide();
    }, this._config.delay)));
  }
  _onInteraction(a, s) {
    switch (a.type) {
      case "mouseover":
      case "mouseout": {
        this._hasMouseInteraction = s;
        break;
      }
      case "focusin":
      case "focusout": {
        this._hasKeyboardInteraction = s;
        break;
      }
    }
    if (s) {
      this._clearTimeout();
      return;
    }
    const p = a.relatedTarget;
    this._element === p || this._element.contains(p) || this._maybeScheduleHide();
  }
  _setListeners() {
    ce.on(this._element, aI, (a) => this._onInteraction(a, !0)), ce.on(this._element, oI, (a) => this._onInteraction(a, !1)), ce.on(this._element, lI, (a) => this._onInteraction(a, !0)), ce.on(this._element, uI, (a) => this._onInteraction(a, !1));
  }
  _clearTimeout() {
    clearTimeout(this._timeout), this._timeout = null;
  }
  // Static
  static jQueryInterface(a) {
    return this.each(function() {
      const s = qv.getOrCreateInstance(this, a);
      if (typeof a == "string") {
        if (typeof s[a] > "u")
          throw new TypeError(`No method named "${a}"`);
        s[a](this);
      }
    });
  }
}
bE(qv);
co(qv);
const wp = ({ value: c, onChange: a, step: s = 1 }) => /* @__PURE__ */ ie.jsx("input", { type: "number", className: "pe-auto", style: { width: "3rem" }, step: s, value: c, onChange: (p) => a(parseInt(p.target.value)) }), mI = ({ headerSettings: c, onChange: a }) => /* @__PURE__ */ ie.jsxs(ie.Fragment, { children: [
  "{",
  /* @__PURE__ */ ie.jsxs("div", { children: [
    '    "width": ',
    /* @__PURE__ */ ie.jsx(wp, { value: c.width, onChange: (s) => a({ ...c, width: s }), step: 8 }),
    ","
  ] }),
  /* @__PURE__ */ ie.jsxs("div", { children: [
    '    "height": ',
    /* @__PURE__ */ ie.jsx(wp, { value: c.height, onChange: (s) => a({ ...c, height: s }) })
  ] }),
  "}"
] }), gI = ({ cellSettings: c, onChange: a }) => /* @__PURE__ */ ie.jsxs(ie.Fragment, { children: [
  "{",
  /* @__PURE__ */ ie.jsxs("div", { children: [
    '    "width": ',
    /* @__PURE__ */ ie.jsx(wp, { value: c.width, onChange: (s) => a({ ...c, width: s }), step: 8 }),
    ","
  ] }),
  /* @__PURE__ */ ie.jsxs("div", { children: [
    '    "height": ',
    /* @__PURE__ */ ie.jsx(wp, { value: c.height, onChange: (s) => a({ ...c, height: s }), step: 8 })
  ] }),
  "}"
] }), yI = Pe.forwardRef(({ gridSettings: c, setGridSettings: a }, s) => {
  const p = Pe.useRef(null);
  let y = [];
  const [C, T] = Pe.useState(!1);
  c.image && (c.header.width + c.cell.width * c.cols != c.image.naturalWidth && y.push(/* @__PURE__ */ ie.jsx("div", { children: "header.width + (cell.width * cols) != image.naturalWidth" }, "wrong-width")), c.header.height + c.cell.height * c.rows != c.image.naturalHeight && y.push(/* @__PURE__ */ ie.jsx("div", { children: "header.height + (cell.height * rows) != image.naturalHeight" }, "wrong-height"))), Pe.useImperativeHandle(s, () => ({ setDirty: () => T(!0) }), [T]);
  const E = Pe.useCallback((D) => {
    let M = { ...c, ...D };
    if (c.image) {
      let I = c.image.naturalWidth, H = M.header.width, B = M.cell.width;
      D.cols !== void 0 && (B = Math.floor((I - H) / M.cols), B -= B % 8, H -= H + B * M.cols - I), D.cell !== void 0 && (B -= B % 8, M.cols = Math.floor(I / B), H = I - B * M.cols);
      let X = c.image.naturalHeight, pe = M.header.height, we = M.cell.height;
      D.rows !== void 0 && (we = Math.floor((X - pe) / M.rows), we -= we % 8, pe -= pe + we * M.rows - X), D.cell !== void 0 && (we -= we % 8, M.rows = Math.floor(X / we), pe = X - we * M.rows), M.header = { ...M.header, width: H, height: pe }, M.cell = { ...M.cell, width: B, height: we };
    }
    a(new Sf(M)), T(!0);
  }, [c, a]), O = Pe.useCallback(() => {
    if (c.image) {
      let D = [];
      for (let M = 0; M < c.rows; M++)
        D.push(M);
      a(new Sf({ ...c, rowsOrder: D }));
    }
  }, [c, a]), k = Pe.useCallback(() => {
    navigator.clipboard.writeText("window.gridSettings = " + JSON.stringify(c, null, 2) + ";"), p.current && new qv(p.current).show();
  }, [c]);
  return /* @__PURE__ */ ie.jsxs("div", { className: "mx-2", children: [
    /* @__PURE__ */ ie.jsx("div", { children: "{" }),
    /* @__PURE__ */ ie.jsxs("div", { children: [
      '  "header": ',
      /* @__PURE__ */ ie.jsx(mI, { headerSettings: c.header, onChange: (D) => E({ header: D }) }),
      ","
    ] }),
    /* @__PURE__ */ ie.jsxs("div", { children: [
      '  "cell": ',
      /* @__PURE__ */ ie.jsx(gI, { cellSettings: c.cell, onChange: (D) => E({ cell: D }) }),
      ","
    ] }),
    /* @__PURE__ */ ie.jsxs("div", { children: [
      '  "cols": ',
      /* @__PURE__ */ ie.jsx(wp, { value: c.cols, onChange: (D) => E({ cols: D }) }),
      ","
    ] }),
    /* @__PURE__ */ ie.jsxs("div", { children: [
      '  "rows": ',
      /* @__PURE__ */ ie.jsx(wp, { value: c.rows, onChange: (D) => E({ rows: D }) }),
      ","
    ] }),
    /* @__PURE__ */ ie.jsxs("div", { children: [
      '  "rowsOrder": ',
      /* @__PURE__ */ ie.jsx("i", { className: "bi bi-arrow-clockwise pe-auto", onClick: O }),
      " ",
      /* @__PURE__ */ ie.jsx("pre", { className: "d-inline", children: c.rowsOrder ? JSON.stringify(c.rowsOrder, null, 2).replace(/^/mg, "  ").replace(/^ +/, "") : "undefined" }),
      ","
    ] }),
    /* @__PURE__ */ ie.jsx("div", { children: "}" }),
    /* @__PURE__ */ ie.jsxs("div", { className: "row", children: [
      /* @__PURE__ */ ie.jsx("div", { className: "col-auto text-bg-warning", style: { zIndex: 100, display: y.length > 0 ? "" : "none" }, children: y }),
      /* @__PURE__ */ ie.jsx("div", { className: "col-auto", children: /* @__PURE__ */ ie.jsx("button", { className: "btn btn-primary pe-auto", style: { display: C ? "" : "none" }, onClick: k, children: "Copy" }) })
    ] }),
    /* @__PURE__ */ ie.jsx("div", { className: "toast-container p-3", children: /* @__PURE__ */ ie.jsxs("div", { className: "toast", role: "alert", ref: p, children: [
      /* @__PURE__ */ ie.jsxs("div", { className: "toast-header", children: [
        /* @__PURE__ */ ie.jsx("i", { className: "bi bi-clipboard-check" }),
        /* @__PURE__ */ ie.jsx("strong", { className: "me-auto", children: "GridSettings" }),
        /* @__PURE__ */ ie.jsx("button", { type: "button", className: "btn-close pe-auto", "data-bs-dismiss": "toast", "aria-label": "Close" })
      ] }),
      /* @__PURE__ */ ie.jsx("div", { className: "toast-body", children: "設定用JSONをクリップボードにコピーしました" })
    ] }) })
  ] });
}), EI = Pe.forwardRef(({ children: c }, a) => {
  const s = Pe.useRef(null), [p, y] = Pe.useState(new Sf({ ...window.gridSettings, rowsOrder: void 0 }));
  Pe.useEffect(() => {
    var E;
    if (p.rows > 0 && !((E = p.rowsOrder) != null && E.length)) {
      let O = [];
      for (let k = 0; k < p.rows; k++)
        O.push(k);
      C(O, !1);
    }
  }, [p]);
  const C = Pe.useCallback((E, O = !0) => {
    var k;
    console.log("Set rowSortList", E), y(new Sf({ ...p, rowsOrder: E })), O && ((k = s.current) == null || k.setDirty());
  }, [p]), T = Pe.useCallback((E) => {
    y(new Sf({ ...p, image: E.currentTarget, rowsOrder: window.gridSettings.rowsOrder })), console.log("Image loaded");
  }, [p]);
  return Pe.useImperativeHandle(a, () => ({ onImageLoaded: T }), []), /* @__PURE__ */ ie.jsxs(ie.Fragment, { children: [
    /* @__PURE__ */ ie.jsx(Yi.Provider, { value: { gridSettings: p, rowSortList: p.rowsOrder ?? [], setRowSortList: C }, children: c }),
    /* @__PURE__ */ ie.jsx("div", { className: "container pe-none position-absolute top-0 left-0", children: /* @__PURE__ */ ie.jsx(yI, { gridSettings: p, setGridSettings: y, ref: s }) })
  ] });
}), Yi = Pe.createContext({
  gridSettings: new Sf({}),
  rowSortList: [],
  setRowSortList: () => {
  }
}), Kx = ({ colIndex: c }) => {
  var p;
  const a = Pe.useContext(Yi).gridSettings, s = FC(a, [], 500);
  return (p = s.image) != null && p.complete ? /* @__PURE__ */ ie.jsx(
    IC,
    {
      image: s.image,
      sx: s.header.width + c * s.cell.width,
      sy: 0,
      sw: s.cell.width,
      sh: s.header.height
    }
  ) : /* @__PURE__ */ ie.jsx(ie.Fragment, {});
}, Qx = ({ children: c, rowIndex: a, isHeader: s }) => {
  const { gridSettings: p } = Pe.useContext(Yi);
  return /* @__PURE__ */ ie.jsx("li", { className: "row flex-nowrap", "data-id": a + (s ? 0 : 1), style: { height: s ? p.header.height + 2 : p.cell.height + 2 }, children: c });
}, hE = ({ children: c, isTitle: a }) => {
  const { gridSettings: s } = Pe.useContext(Yi), p = a ? s.header.width : s.cell.width;
  return /* @__PURE__ */ ie.jsx("div", { className: "col p-0 border", style: { width: p, minWidth: p }, children: c });
}, _I = () => {
  var s;
  const { gridSettings: c } = Pe.useContext(Yi);
  let a = [/* @__PURE__ */ ie.jsx(hE, { isTitle: !0, children: /* @__PURE__ */ ie.jsx(ie.Fragment, {}) }, 0)];
  if ((s = c.image) != null && s.complete)
    for (let p = 0; p < c.cols; p++)
      a.push(/* @__PURE__ */ ie.jsx(hE, { children: /* @__PURE__ */ ie.jsx(Kx, { colIndex: p }) }, p + 1));
  return /* @__PURE__ */ ie.jsx(Qx, { rowIndex: 0, isHeader: !0, children: a });
}, Xx = ({ rowIndex: c }) => {
  var p;
  const a = Pe.useContext(Yi).gridSettings, s = FC(a, [], 500);
  return (p = s.image) != null && p.complete ? /* @__PURE__ */ ie.jsxs("div", { className: "position-relative", children: [
    /* @__PURE__ */ ie.jsx(
      IC,
      {
        image: s.image,
        sx: 0,
        sy: s.header.height + c * s.cell.height,
        sw: s.header.width,
        sh: s.cell.height
      }
    ),
    /* @__PURE__ */ ie.jsx(SI, { rowIndex: c }),
    /* @__PURE__ */ ie.jsx(CI, { rowIndex: c }),
    /* @__PURE__ */ ie.jsx(bI, { rowIndex: c })
  ] }) : /* @__PURE__ */ ie.jsx(ie.Fragment, {});
}, SI = ({ rowIndex: c }) => {
  const { rowSortList: a, setRowSortList: s } = Pe.useContext(Yi), p = Pe.useCallback(() => {
    const y = a.indexOf(c), C = a.slice(0, y), T = a.slice(y + 1), E = C.pop();
    C.push(a[y]), E !== void 0 && T.unshift(E), s(C.concat(T));
  }, [c, a]);
  return a.indexOf(c) === 0 ? /* @__PURE__ */ ie.jsx(ie.Fragment, {}) : /* @__PURE__ */ ie.jsx("div", { className: "btn btn-primary position-absolute top-0 start-0 my-2", onClick: p, children: /* @__PURE__ */ ie.jsx("i", { className: "bi bi-caret-up-fill" }) });
}, CI = ({ rowIndex: c }) => {
  const { rowSortList: a, setRowSortList: s } = Pe.useContext(Yi), p = Pe.useCallback(() => {
    const y = a.indexOf(c), C = a.slice(0, y), T = a.slice(y + 1), E = T.shift();
    T.unshift(a[y]), E !== void 0 && C.push(E), s(C.concat(T));
  }, [c, a]);
  return a.indexOf(c) === a.length - 1 ? /* @__PURE__ */ ie.jsx(ie.Fragment, {}) : /* @__PURE__ */ ie.jsx("div", { className: "btn btn-primary position-absolute bottom-0 start-0 my-2", onClick: p, children: /* @__PURE__ */ ie.jsx("i", { className: "bi bi-caret-down-fill" }) });
}, bI = ({ rowIndex: c }) => {
  const { rowSortList: a, setRowSortList: s } = Pe.useContext(Yi), p = Pe.useCallback(() => {
    const y = a.indexOf(c), C = a.slice(0, y), T = a.slice(y + 1);
    s(C.concat(T));
  }, [c, a]);
  return a.length == 1 ? /* @__PURE__ */ ie.jsx(ie.Fragment, {}) : /* @__PURE__ */ ie.jsx("div", { className: "btn btn-danger position-absolute top-0 end-0 my-2", onClick: p, children: /* @__PURE__ */ ie.jsx("i", { className: "bi bi-x-lg" }) });
}, qx = ({ rowIndex: c, colIndex: a }) => {
  var y;
  const s = Pe.useContext(Yi).gridSettings, p = FC(s, [], 500);
  return (y = p.image) != null && y.complete ? /* @__PURE__ */ ie.jsx(
    IC,
    {
      image: p.image,
      sx: p.header.width + a * p.cell.width,
      sy: p.header.height + c * p.cell.height,
      sw: p.cell.width,
      sh: p.cell.height
    }
  ) : /* @__PURE__ */ ie.jsx(ie.Fragment, {});
}, Zx = Pe.createContext(() => {
}), TI = ({ rowIndex: c, colIndex: a }) => {
  const s = Pe.useContext(Zx);
  return /* @__PURE__ */ ie.jsx("div", { onClick: () => s(c, a), children: /* @__PURE__ */ ie.jsx(qx, { rowIndex: c, colIndex: a }) });
}, wI = ({ rowIndex: c }) => {
  var p;
  const { gridSettings: a } = Pe.useContext(Yi);
  let s = [/* @__PURE__ */ ie.jsx(hE, { isTitle: !0, children: /* @__PURE__ */ ie.jsx(Xx, { rowIndex: c }) }, 0)];
  if ((p = a.image) != null && p.complete)
    for (let y = 0; y < a.cols; y++)
      s.push(/* @__PURE__ */ ie.jsx(hE, { children: /* @__PURE__ */ ie.jsx(TI, { rowIndex: c, colIndex: y }) }, y + 1));
  return /* @__PURE__ */ ie.jsx(Qx, { rowIndex: c, children: s });
};
/**!
 * Sortable 1.15.1
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function M1(c, a) {
  var s = Object.keys(c);
  if (Object.getOwnPropertySymbols) {
    var p = Object.getOwnPropertySymbols(c);
    a && (p = p.filter(function(y) {
      return Object.getOwnPropertyDescriptor(c, y).enumerable;
    })), s.push.apply(s, p);
  }
  return s;
}
function Pl(c) {
  for (var a = 1; a < arguments.length; a++) {
    var s = arguments[a] != null ? arguments[a] : {};
    a % 2 ? M1(Object(s), !0).forEach(function(p) {
      RI(c, p, s[p]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(s)) : M1(Object(s)).forEach(function(p) {
      Object.defineProperty(c, p, Object.getOwnPropertyDescriptor(s, p));
    });
  }
  return c;
}
function aE(c) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? aE = function(a) {
    return typeof a;
  } : aE = function(a) {
    return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
  }, aE(c);
}
function RI(c, a, s) {
  return a in c ? Object.defineProperty(c, a, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : c[a] = s, c;
}
function ku() {
  return ku = Object.assign || function(c) {
    for (var a = 1; a < arguments.length; a++) {
      var s = arguments[a];
      for (var p in s)
        Object.prototype.hasOwnProperty.call(s, p) && (c[p] = s[p]);
    }
    return c;
  }, ku.apply(this, arguments);
}
function xI(c, a) {
  if (c == null)
    return {};
  var s = {}, p = Object.keys(c), y, C;
  for (C = 0; C < p.length; C++)
    y = p[C], !(a.indexOf(y) >= 0) && (s[y] = c[y]);
  return s;
}
function DI(c, a) {
  if (c == null)
    return {};
  var s = xI(c, a), p, y;
  if (Object.getOwnPropertySymbols) {
    var C = Object.getOwnPropertySymbols(c);
    for (y = 0; y < C.length; y++)
      p = C[y], !(a.indexOf(p) >= 0) && Object.prototype.propertyIsEnumerable.call(c, p) && (s[p] = c[p]);
  }
  return s;
}
var OI = "1.15.1";
function Au(c) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(c);
}
var Mu = Au(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), Zv = Au(/Edge/i), z1 = Au(/firefox/i), Fv = Au(/safari/i) && !Au(/chrome/i) && !Au(/android/i), Jx = Au(/iP(ad|od|hone)/i), eD = Au(/chrome/i) && Au(/android/i), tD = {
  capture: !1,
  passive: !1
};
function rn(c, a, s) {
  c.addEventListener(a, s, !Mu && tD);
}
function Gt(c, a, s) {
  c.removeEventListener(a, s, !Mu && tD);
}
function vE(c, a) {
  if (a) {
    if (a[0] === ">" && (a = a.substring(1)), c)
      try {
        if (c.matches)
          return c.matches(a);
        if (c.msMatchesSelector)
          return c.msMatchesSelector(a);
        if (c.webkitMatchesSelector)
          return c.webkitMatchesSelector(a);
      } catch {
        return !1;
      }
    return !1;
  }
}
function AI(c) {
  return c.host && c !== document && c.host.nodeType ? c.host : c.parentNode;
}
function kl(c, a, s, p) {
  if (c) {
    s = s || document;
    do {
      if (a != null && (a[0] === ">" ? c.parentNode === s && vE(c, a) : vE(c, a)) || p && c === s)
        return c;
      if (c === s)
        break;
    } while (c = AI(c));
  }
  return null;
}
var U1 = /\s+/g;
function Na(c, a, s) {
  if (c && a)
    if (c.classList)
      c.classList[s ? "add" : "remove"](a);
    else {
      var p = (" " + c.className + " ").replace(U1, " ").replace(" " + a + " ", " ");
      c.className = (p + (s ? " " + a : "")).replace(U1, " ");
    }
}
function st(c, a, s) {
  var p = c && c.style;
  if (p) {
    if (s === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? s = document.defaultView.getComputedStyle(c, "") : c.currentStyle && (s = c.currentStyle), a === void 0 ? s : s[a];
    !(a in p) && a.indexOf("webkit") === -1 && (a = "-webkit-" + a), p[a] = s + (typeof s == "string" ? "" : "px");
  }
}
function yp(c, a) {
  var s = "";
  if (typeof c == "string")
    s = c;
  else
    do {
      var p = st(c, "transform");
      p && p !== "none" && (s = p + " " + s);
    } while (!a && (c = c.parentNode));
  var y = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return y && new y(s);
}
function nD(c, a, s) {
  if (c) {
    var p = c.getElementsByTagName(a), y = 0, C = p.length;
    if (s)
      for (; y < C; y++)
        s(p[y], y);
    return p;
  }
  return [];
}
function zl() {
  var c = document.scrollingElement;
  return c || document.documentElement;
}
function _r(c, a, s, p, y) {
  if (!(!c.getBoundingClientRect && c !== window)) {
    var C, T, E, O, k, D, M;
    if (c !== window && c.parentNode && c !== zl() ? (C = c.getBoundingClientRect(), T = C.top, E = C.left, O = C.bottom, k = C.right, D = C.height, M = C.width) : (T = 0, E = 0, O = window.innerHeight, k = window.innerWidth, D = window.innerHeight, M = window.innerWidth), (a || s) && c !== window && (y = y || c.parentNode, !Mu))
      do
        if (y && y.getBoundingClientRect && (st(y, "transform") !== "none" || s && st(y, "position") !== "static")) {
          var I = y.getBoundingClientRect();
          T -= I.top + parseInt(st(y, "border-top-width")), E -= I.left + parseInt(st(y, "border-left-width")), O = T + C.height, k = E + C.width;
          break;
        }
      while (y = y.parentNode);
    if (p && c !== window) {
      var H = yp(y || c), B = H && H.a, X = H && H.d;
      H && (T /= X, E /= B, M /= B, D /= X, O = T + D, k = E + M);
    }
    return {
      top: T,
      left: E,
      bottom: O,
      right: k,
      width: M,
      height: D
    };
  }
}
function rD(c) {
  var a = _r(c), s = parseInt(st(c, "padding-left")), p = parseInt(st(c, "padding-top")), y = parseInt(st(c, "padding-right")), C = parseInt(st(c, "padding-bottom"));
  return a.top += p + parseInt(st(c, "border-top-width")), a.left += s + parseInt(st(c, "border-left-width")), a.width = c.clientWidth - s - y, a.height = c.clientHeight - p - C, a.bottom = a.top + a.height, a.right = a.left + a.width, a;
}
function P1(c, a, s) {
  for (var p = Vs(c, !0), y = _r(c)[a]; p; ) {
    var C = _r(p)[s], T = void 0;
    if (s === "top" || s === "left" ? T = y >= C : T = y <= C, !T)
      return p;
    if (p === zl())
      break;
    p = Vs(p, !1);
  }
  return !1;
}
function Rp(c, a, s, p) {
  for (var y = 0, C = 0, T = c.children; C < T.length; ) {
    if (T[C].style.display !== "none" && T[C] !== Ct.ghost && (p || T[C] !== Ct.dragged) && kl(T[C], s.draggable, c, !1)) {
      if (y === a)
        return T[C];
      y++;
    }
    C++;
  }
  return null;
}
function ab(c, a) {
  for (var s = c.lastElementChild; s && (s === Ct.ghost || st(s, "display") === "none" || a && !vE(s, a)); )
    s = s.previousElementSibling;
  return s || null;
}
function oo(c, a) {
  var s = 0;
  if (!c || !c.parentNode)
    return -1;
  for (; c = c.previousElementSibling; )
    c.nodeName.toUpperCase() !== "TEMPLATE" && c !== Ct.clone && (!a || vE(c, a)) && s++;
  return s;
}
function j1(c) {
  var a = 0, s = 0, p = zl();
  if (c)
    do {
      var y = yp(c), C = y.a, T = y.d;
      a += c.scrollLeft * C, s += c.scrollTop * T;
    } while (c !== p && (c = c.parentNode));
  return [a, s];
}
function NI(c, a) {
  for (var s in c)
    if (c.hasOwnProperty(s)) {
      for (var p in a)
        if (a.hasOwnProperty(p) && a[p] === c[s][p])
          return Number(s);
    }
  return -1;
}
function Vs(c, a) {
  if (!c || !c.getBoundingClientRect)
    return zl();
  var s = c, p = !1;
  do
    if (s.clientWidth < s.scrollWidth || s.clientHeight < s.scrollHeight) {
      var y = st(s);
      if (s.clientWidth < s.scrollWidth && (y.overflowX == "auto" || y.overflowX == "scroll") || s.clientHeight < s.scrollHeight && (y.overflowY == "auto" || y.overflowY == "scroll")) {
        if (!s.getBoundingClientRect || s === document.body)
          return zl();
        if (p || a)
          return s;
        p = !0;
      }
    }
  while (s = s.parentNode);
  return zl();
}
function kI(c, a) {
  if (c && a)
    for (var s in a)
      a.hasOwnProperty(s) && (c[s] = a[s]);
  return c;
}
function mC(c, a) {
  return Math.round(c.top) === Math.round(a.top) && Math.round(c.left) === Math.round(a.left) && Math.round(c.height) === Math.round(a.height) && Math.round(c.width) === Math.round(a.width);
}
var Hv;
function iD(c, a) {
  return function() {
    if (!Hv) {
      var s = arguments, p = this;
      s.length === 1 ? c.call(p, s[0]) : c.apply(p, s), Hv = setTimeout(function() {
        Hv = void 0;
      }, a);
    }
  };
}
function LI() {
  clearTimeout(Hv), Hv = void 0;
}
function aD(c, a, s) {
  c.scrollLeft += a, c.scrollTop += s;
}
function oD(c) {
  var a = window.Polymer, s = window.jQuery || window.Zepto;
  return a && a.dom ? a.dom(c).cloneNode(!0) : s ? s(c).clone(!0)[0] : c.cloneNode(!0);
}
var La = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function MI() {
  var c = [], a;
  return {
    captureAnimationState: function() {
      if (c = [], !!this.options.animation) {
        var p = [].slice.call(this.el.children);
        p.forEach(function(y) {
          if (!(st(y, "display") === "none" || y === Ct.ghost)) {
            c.push({
              target: y,
              rect: _r(y)
            });
            var C = Pl({}, c[c.length - 1].rect);
            if (y.thisAnimationDuration) {
              var T = yp(y, !0);
              T && (C.top -= T.f, C.left -= T.e);
            }
            y.fromRect = C;
          }
        });
      }
    },
    addAnimationState: function(p) {
      c.push(p);
    },
    removeAnimationState: function(p) {
      c.splice(NI(c, {
        target: p
      }), 1);
    },
    animateAll: function(p) {
      var y = this;
      if (!this.options.animation) {
        clearTimeout(a), typeof p == "function" && p();
        return;
      }
      var C = !1, T = 0;
      c.forEach(function(E) {
        var O = 0, k = E.target, D = k.fromRect, M = _r(k), I = k.prevFromRect, H = k.prevToRect, B = E.rect, X = yp(k, !0);
        X && (M.top -= X.f, M.left -= X.e), k.toRect = M, k.thisAnimationDuration && mC(I, M) && !mC(D, M) && // Make sure animatingRect is on line between toRect & fromRect
        (B.top - M.top) / (B.left - M.left) === (D.top - M.top) / (D.left - M.left) && (O = UI(B, I, H, y.options)), mC(M, D) || (k.prevFromRect = D, k.prevToRect = M, O || (O = y.options.animation), y.animate(k, B, M, O)), O && (C = !0, T = Math.max(T, O), clearTimeout(k.animationResetTimer), k.animationResetTimer = setTimeout(function() {
          k.animationTime = 0, k.prevFromRect = null, k.fromRect = null, k.prevToRect = null, k.thisAnimationDuration = null;
        }, O), k.thisAnimationDuration = O);
      }), clearTimeout(a), C ? a = setTimeout(function() {
        typeof p == "function" && p();
      }, T) : typeof p == "function" && p(), c = [];
    },
    animate: function(p, y, C, T) {
      if (T) {
        st(p, "transition", ""), st(p, "transform", "");
        var E = yp(this.el), O = E && E.a, k = E && E.d, D = (y.left - C.left) / (O || 1), M = (y.top - C.top) / (k || 1);
        p.animatingX = !!D, p.animatingY = !!M, st(p, "transform", "translate3d(" + D + "px," + M + "px,0)"), this.forRepaintDummy = zI(p), st(p, "transition", "transform " + T + "ms" + (this.options.easing ? " " + this.options.easing : "")), st(p, "transform", "translate3d(0,0,0)"), typeof p.animated == "number" && clearTimeout(p.animated), p.animated = setTimeout(function() {
          st(p, "transition", ""), st(p, "transform", ""), p.animated = !1, p.animatingX = !1, p.animatingY = !1;
        }, T);
      }
    }
  };
}
function zI(c) {
  return c.offsetWidth;
}
function UI(c, a, s, p) {
  return Math.sqrt(Math.pow(a.top - c.top, 2) + Math.pow(a.left - c.left, 2)) / Math.sqrt(Math.pow(a.top - s.top, 2) + Math.pow(a.left - s.left, 2)) * p.animation;
}
var cp = [], gC = {
  initializeByDefault: !0
}, Jv = {
  mount: function(a) {
    for (var s in gC)
      gC.hasOwnProperty(s) && !(s in a) && (a[s] = gC[s]);
    cp.forEach(function(p) {
      if (p.pluginName === a.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(a.pluginName, " more than once");
    }), cp.push(a);
  },
  pluginEvent: function(a, s, p) {
    var y = this;
    this.eventCanceled = !1, p.cancel = function() {
      y.eventCanceled = !0;
    };
    var C = a + "Global";
    cp.forEach(function(T) {
      s[T.pluginName] && (s[T.pluginName][C] && s[T.pluginName][C](Pl({
        sortable: s
      }, p)), s.options[T.pluginName] && s[T.pluginName][a] && s[T.pluginName][a](Pl({
        sortable: s
      }, p)));
    });
  },
  initializePlugins: function(a, s, p, y) {
    cp.forEach(function(E) {
      var O = E.pluginName;
      if (!(!a.options[O] && !E.initializeByDefault)) {
        var k = new E(a, s, a.options);
        k.sortable = a, k.options = a.options, a[O] = k, ku(p, k.defaults);
      }
    });
    for (var C in a.options)
      if (a.options.hasOwnProperty(C)) {
        var T = this.modifyOption(a, C, a.options[C]);
        typeof T < "u" && (a.options[C] = T);
      }
  },
  getEventProperties: function(a, s) {
    var p = {};
    return cp.forEach(function(y) {
      typeof y.eventProperties == "function" && ku(p, y.eventProperties.call(s[y.pluginName], a));
    }), p;
  },
  modifyOption: function(a, s, p) {
    var y;
    return cp.forEach(function(C) {
      a[C.pluginName] && C.optionListeners && typeof C.optionListeners[s] == "function" && (y = C.optionListeners[s].call(a[C.pluginName], p));
    }), y;
  }
};
function PI(c) {
  var a = c.sortable, s = c.rootEl, p = c.name, y = c.targetEl, C = c.cloneEl, T = c.toEl, E = c.fromEl, O = c.oldIndex, k = c.newIndex, D = c.oldDraggableIndex, M = c.newDraggableIndex, I = c.originalEvent, H = c.putSortable, B = c.extraEventProperties;
  if (a = a || s && s[La], !!a) {
    var X, pe = a.options, we = "on" + p.charAt(0).toUpperCase() + p.substr(1);
    window.CustomEvent && !Mu && !Zv ? X = new CustomEvent(p, {
      bubbles: !0,
      cancelable: !0
    }) : (X = document.createEvent("Event"), X.initEvent(p, !0, !0)), X.to = T || s, X.from = E || s, X.item = y || s, X.clone = C, X.oldIndex = O, X.newIndex = k, X.oldDraggableIndex = D, X.newDraggableIndex = M, X.originalEvent = I, X.pullMode = H ? H.lastPutMode : void 0;
    var ze = Pl(Pl({}, B), Jv.getEventProperties(p, a));
    for (var ge in ze)
      X[ge] = ze[ge];
    s && s.dispatchEvent(X), pe[we] && pe[we].call(a, X);
  }
}
var jI = ["evt"], ma = function(a, s) {
  var p = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, y = p.evt, C = DI(p, jI);
  Jv.pluginEvent.bind(Ct)(a, s, Pl({
    dragEl: ye,
    parentEl: rr,
    ghostEl: At,
    rootEl: Fn,
    nextEl: yf,
    lastDownEl: oE,
    cloneEl: Xn,
    cloneHidden: $s,
    dragStarted: zv,
    putSortable: ni,
    activeSortable: Ct.active,
    originalEvent: y,
    oldIndex: gp,
    oldDraggableIndex: $v,
    newIndex: ka,
    newDraggableIndex: Hs,
    hideGhostForTarget: cD,
    unhideGhostForTarget: fD,
    cloneNowHidden: function() {
      $s = !0;
    },
    cloneNowShown: function() {
      $s = !1;
    },
    dispatchSortableEvent: function(E) {
      $i({
        sortable: s,
        name: E,
        originalEvent: y
      });
    }
  }, C));
};
function $i(c) {
  PI(Pl({
    putSortable: ni,
    cloneEl: Xn,
    targetEl: ye,
    rootEl: Fn,
    oldIndex: gp,
    oldDraggableIndex: $v,
    newIndex: ka,
    newDraggableIndex: Hs
  }, c));
}
var ye, rr, At, Fn, yf, oE, Xn, $s, gp, ka, $v, Hs, Zy, ni, vp = !1, mE = !1, gE = [], mf, Wo, yC, EC, I1, F1, zv, fp, Vv, Bv = !1, Jy = !1, lE, wi, _C = [], zC = !1, yE = [], xE = typeof document < "u", eE = Jx, H1 = Zv || Mu ? "cssFloat" : "float", II = xE && !eD && !Jx && "draggable" in document.createElement("div"), lD = function() {
  if (xE) {
    if (Mu)
      return !1;
    var c = document.createElement("x");
    return c.style.cssText = "pointer-events:auto", c.style.pointerEvents === "auto";
  }
}(), uD = function(a, s) {
  var p = st(a), y = parseInt(p.width) - parseInt(p.paddingLeft) - parseInt(p.paddingRight) - parseInt(p.borderLeftWidth) - parseInt(p.borderRightWidth), C = Rp(a, 0, s), T = Rp(a, 1, s), E = C && st(C), O = T && st(T), k = E && parseInt(E.marginLeft) + parseInt(E.marginRight) + _r(C).width, D = O && parseInt(O.marginLeft) + parseInt(O.marginRight) + _r(T).width;
  if (p.display === "flex")
    return p.flexDirection === "column" || p.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (p.display === "grid")
    return p.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (C && E.float && E.float !== "none") {
    var M = E.float === "left" ? "left" : "right";
    return T && (O.clear === "both" || O.clear === M) ? "vertical" : "horizontal";
  }
  return C && (E.display === "block" || E.display === "flex" || E.display === "table" || E.display === "grid" || k >= y && p[H1] === "none" || T && p[H1] === "none" && k + D > y) ? "vertical" : "horizontal";
}, FI = function(a, s, p) {
  var y = p ? a.left : a.top, C = p ? a.right : a.bottom, T = p ? a.width : a.height, E = p ? s.left : s.top, O = p ? s.right : s.bottom, k = p ? s.width : s.height;
  return y === E || C === O || y + T / 2 === E + k / 2;
}, HI = function(a, s) {
  var p;
  return gE.some(function(y) {
    var C = y[La].options.emptyInsertThreshold;
    if (!(!C || ab(y))) {
      var T = _r(y), E = a >= T.left - C && a <= T.right + C, O = s >= T.top - C && s <= T.bottom + C;
      if (E && O)
        return p = y;
    }
  }), p;
}, sD = function(a) {
  function s(C, T) {
    return function(E, O, k, D) {
      var M = E.options.group.name && O.options.group.name && E.options.group.name === O.options.group.name;
      if (C == null && (T || M))
        return !0;
      if (C == null || C === !1)
        return !1;
      if (T && C === "clone")
        return C;
      if (typeof C == "function")
        return s(C(E, O, k, D), T)(E, O, k, D);
      var I = (T ? E : O).options.group.name;
      return C === !0 || typeof C == "string" && C === I || C.join && C.indexOf(I) > -1;
    };
  }
  var p = {}, y = a.group;
  (!y || aE(y) != "object") && (y = {
    name: y
  }), p.name = y.name, p.checkPull = s(y.pull, !0), p.checkPut = s(y.put), p.revertClone = y.revertClone, a.group = p;
}, cD = function() {
  !lD && At && st(At, "display", "none");
}, fD = function() {
  !lD && At && st(At, "display", "");
};
xE && !eD && document.addEventListener("click", function(c) {
  if (mE)
    return c.preventDefault(), c.stopPropagation && c.stopPropagation(), c.stopImmediatePropagation && c.stopImmediatePropagation(), mE = !1, !1;
}, !0);
var gf = function(a) {
  if (ye) {
    a = a.touches ? a.touches[0] : a;
    var s = HI(a.clientX, a.clientY);
    if (s) {
      var p = {};
      for (var y in a)
        a.hasOwnProperty(y) && (p[y] = a[y]);
      p.target = p.rootEl = s, p.preventDefault = void 0, p.stopPropagation = void 0, s[La]._onDragOver(p);
    }
  }
}, $I = function(a) {
  ye && ye.parentNode[La]._isOutsideThisEl(a.target);
};
function Ct(c, a) {
  if (!(c && c.nodeType && c.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(c));
  this.el = c, this.options = a = ku({}, a), c[La] = this;
  var s = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(c.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: !1,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: !0,
    direction: function() {
      return uD(c, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(T, E) {
      T.setData("Text", E.textContent);
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: !1,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: Ct.supportPointer !== !1 && "PointerEvent" in window && !Fv,
    emptyInsertThreshold: 5
  };
  Jv.initializePlugins(this, c, s);
  for (var p in s)
    !(p in a) && (a[p] = s[p]);
  sD(a);
  for (var y in this)
    y.charAt(0) === "_" && typeof this[y] == "function" && (this[y] = this[y].bind(this));
  this.nativeDraggable = a.forceFallback ? !1 : II, this.nativeDraggable && (this.options.touchStartThreshold = 1), a.supportPointer ? rn(c, "pointerdown", this._onTapStart) : (rn(c, "mousedown", this._onTapStart), rn(c, "touchstart", this._onTapStart)), this.nativeDraggable && (rn(c, "dragover", this), rn(c, "dragenter", this)), gE.push(this.el), a.store && a.store.get && this.sort(a.store.get(this) || []), ku(this, MI());
}
Ct.prototype = /** @lends Sortable.prototype */
{
  constructor: Ct,
  _isOutsideThisEl: function(a) {
    !this.el.contains(a) && a !== this.el && (fp = null);
  },
  _getDirection: function(a, s) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, a, s, ye) : this.options.direction;
  },
  _onTapStart: function(a) {
    if (a.cancelable) {
      var s = this, p = this.el, y = this.options, C = y.preventOnFilter, T = a.type, E = a.touches && a.touches[0] || a.pointerType && a.pointerType === "touch" && a, O = (E || a).target, k = a.target.shadowRoot && (a.path && a.path[0] || a.composedPath && a.composedPath()[0]) || O, D = y.filter;
      if (XI(p), !ye && !(/mousedown|pointerdown/.test(T) && a.button !== 0 || y.disabled) && !k.isContentEditable && !(!this.nativeDraggable && Fv && O && O.tagName.toUpperCase() === "SELECT") && (O = kl(O, y.draggable, p, !1), !(O && O.animated) && oE !== O)) {
        if (gp = oo(O), $v = oo(O, y.draggable), typeof D == "function") {
          if (D.call(this, a, O, this)) {
            $i({
              sortable: s,
              rootEl: k,
              name: "filter",
              targetEl: O,
              toEl: p,
              fromEl: p
            }), ma("filter", s, {
              evt: a
            }), C && a.cancelable && a.preventDefault();
            return;
          }
        } else if (D && (D = D.split(",").some(function(M) {
          if (M = kl(k, M.trim(), p, !1), M)
            return $i({
              sortable: s,
              rootEl: M,
              name: "filter",
              targetEl: O,
              fromEl: p,
              toEl: p
            }), ma("filter", s, {
              evt: a
            }), !0;
        }), D)) {
          C && a.cancelable && a.preventDefault();
          return;
        }
        y.handle && !kl(k, y.handle, p, !1) || this._prepareDragStart(a, E, O);
      }
    }
  },
  _prepareDragStart: function(a, s, p) {
    var y = this, C = y.el, T = y.options, E = C.ownerDocument, O;
    if (p && !ye && p.parentNode === C) {
      var k = _r(p);
      if (Fn = C, ye = p, rr = ye.parentNode, yf = ye.nextSibling, oE = p, Zy = T.group, Ct.dragged = ye, mf = {
        target: ye,
        clientX: (s || a).clientX,
        clientY: (s || a).clientY
      }, I1 = mf.clientX - k.left, F1 = mf.clientY - k.top, this._lastX = (s || a).clientX, this._lastY = (s || a).clientY, ye.style["will-change"] = "all", O = function() {
        if (ma("delayEnded", y, {
          evt: a
        }), Ct.eventCanceled) {
          y._onDrop();
          return;
        }
        y._disableDelayedDragEvents(), !z1 && y.nativeDraggable && (ye.draggable = !0), y._triggerDragStart(a, s), $i({
          sortable: y,
          name: "choose",
          originalEvent: a
        }), Na(ye, T.chosenClass, !0);
      }, T.ignore.split(",").forEach(function(D) {
        nD(ye, D.trim(), SC);
      }), rn(E, "dragover", gf), rn(E, "mousemove", gf), rn(E, "touchmove", gf), rn(E, "mouseup", y._onDrop), rn(E, "touchend", y._onDrop), rn(E, "touchcancel", y._onDrop), z1 && this.nativeDraggable && (this.options.touchStartThreshold = 4, ye.draggable = !0), ma("delayStart", this, {
        evt: a
      }), T.delay && (!T.delayOnTouchOnly || s) && (!this.nativeDraggable || !(Zv || Mu))) {
        if (Ct.eventCanceled) {
          this._onDrop();
          return;
        }
        rn(E, "mouseup", y._disableDelayedDrag), rn(E, "touchend", y._disableDelayedDrag), rn(E, "touchcancel", y._disableDelayedDrag), rn(E, "mousemove", y._delayedDragTouchMoveHandler), rn(E, "touchmove", y._delayedDragTouchMoveHandler), T.supportPointer && rn(E, "pointermove", y._delayedDragTouchMoveHandler), y._dragStartTimer = setTimeout(O, T.delay);
      } else
        O();
    }
  },
  _delayedDragTouchMoveHandler: function(a) {
    var s = a.touches ? a.touches[0] : a;
    Math.max(Math.abs(s.clientX - this._lastX), Math.abs(s.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    ye && SC(ye), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var a = this.el.ownerDocument;
    Gt(a, "mouseup", this._disableDelayedDrag), Gt(a, "touchend", this._disableDelayedDrag), Gt(a, "touchcancel", this._disableDelayedDrag), Gt(a, "mousemove", this._delayedDragTouchMoveHandler), Gt(a, "touchmove", this._delayedDragTouchMoveHandler), Gt(a, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(a, s) {
    s = s || a.pointerType == "touch" && a, !this.nativeDraggable || s ? this.options.supportPointer ? rn(document, "pointermove", this._onTouchMove) : s ? rn(document, "touchmove", this._onTouchMove) : rn(document, "mousemove", this._onTouchMove) : (rn(ye, "dragend", this), rn(Fn, "dragstart", this._onDragStart));
    try {
      document.selection ? uE(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(a, s) {
    if (vp = !1, Fn && ye) {
      ma("dragStarted", this, {
        evt: s
      }), this.nativeDraggable && rn(document, "dragover", $I);
      var p = this.options;
      !a && Na(ye, p.dragClass, !1), Na(ye, p.ghostClass, !0), Ct.active = this, a && this._appendGhost(), $i({
        sortable: this,
        name: "start",
        originalEvent: s
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (Wo) {
      this._lastX = Wo.clientX, this._lastY = Wo.clientY, cD();
      for (var a = document.elementFromPoint(Wo.clientX, Wo.clientY), s = a; a && a.shadowRoot && (a = a.shadowRoot.elementFromPoint(Wo.clientX, Wo.clientY), a !== s); )
        s = a;
      if (ye.parentNode[La]._isOutsideThisEl(a), s)
        do {
          if (s[La]) {
            var p = void 0;
            if (p = s[La]._onDragOver({
              clientX: Wo.clientX,
              clientY: Wo.clientY,
              target: a,
              rootEl: s
            }), p && !this.options.dragoverBubble)
              break;
          }
          a = s;
        } while (s = s.parentNode);
      fD();
    }
  },
  _onTouchMove: function(a) {
    if (mf) {
      var s = this.options, p = s.fallbackTolerance, y = s.fallbackOffset, C = a.touches ? a.touches[0] : a, T = At && yp(At, !0), E = At && T && T.a, O = At && T && T.d, k = eE && wi && j1(wi), D = (C.clientX - mf.clientX + y.x) / (E || 1) + (k ? k[0] - _C[0] : 0) / (E || 1), M = (C.clientY - mf.clientY + y.y) / (O || 1) + (k ? k[1] - _C[1] : 0) / (O || 1);
      if (!Ct.active && !vp) {
        if (p && Math.max(Math.abs(C.clientX - this._lastX), Math.abs(C.clientY - this._lastY)) < p)
          return;
        this._onDragStart(a, !0);
      }
      if (At) {
        T ? (T.e += D - (yC || 0), T.f += M - (EC || 0)) : T = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: D,
          f: M
        };
        var I = "matrix(".concat(T.a, ",").concat(T.b, ",").concat(T.c, ",").concat(T.d, ",").concat(T.e, ",").concat(T.f, ")");
        st(At, "webkitTransform", I), st(At, "mozTransform", I), st(At, "msTransform", I), st(At, "transform", I), yC = D, EC = M, Wo = C;
      }
      a.cancelable && a.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!At) {
      var a = this.options.fallbackOnBody ? document.body : Fn, s = _r(ye, !0, eE, !0, a), p = this.options;
      if (eE) {
        for (wi = a; st(wi, "position") === "static" && st(wi, "transform") === "none" && wi !== document; )
          wi = wi.parentNode;
        wi !== document.body && wi !== document.documentElement ? (wi === document && (wi = zl()), s.top += wi.scrollTop, s.left += wi.scrollLeft) : wi = zl(), _C = j1(wi);
      }
      At = ye.cloneNode(!0), Na(At, p.ghostClass, !1), Na(At, p.fallbackClass, !0), Na(At, p.dragClass, !0), st(At, "transition", ""), st(At, "transform", ""), st(At, "box-sizing", "border-box"), st(At, "margin", 0), st(At, "top", s.top), st(At, "left", s.left), st(At, "width", s.width), st(At, "height", s.height), st(At, "opacity", "0.8"), st(At, "position", eE ? "absolute" : "fixed"), st(At, "zIndex", "100000"), st(At, "pointerEvents", "none"), Ct.ghost = At, a.appendChild(At), st(At, "transform-origin", I1 / parseInt(At.style.width) * 100 + "% " + F1 / parseInt(At.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(a, s) {
    var p = this, y = a.dataTransfer, C = p.options;
    if (ma("dragStart", this, {
      evt: a
    }), Ct.eventCanceled) {
      this._onDrop();
      return;
    }
    ma("setupClone", this), Ct.eventCanceled || (Xn = oD(ye), Xn.removeAttribute("id"), Xn.draggable = !1, Xn.style["will-change"] = "", this._hideClone(), Na(Xn, this.options.chosenClass, !1), Ct.clone = Xn), p.cloneId = uE(function() {
      ma("clone", p), !Ct.eventCanceled && (p.options.removeCloneOnHide || Fn.insertBefore(Xn, ye), p._hideClone(), $i({
        sortable: p,
        name: "clone"
      }));
    }), !s && Na(ye, C.dragClass, !0), s ? (mE = !0, p._loopId = setInterval(p._emulateDragOver, 50)) : (Gt(document, "mouseup", p._onDrop), Gt(document, "touchend", p._onDrop), Gt(document, "touchcancel", p._onDrop), y && (y.effectAllowed = "move", C.setData && C.setData.call(p, y, ye)), rn(document, "drop", p), st(ye, "transform", "translateZ(0)")), vp = !0, p._dragStartId = uE(p._dragStarted.bind(p, s, a)), rn(document, "selectstart", p), zv = !0, Fv && st(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(a) {
    var s = this.el, p = a.target, y, C, T, E = this.options, O = E.group, k = Ct.active, D = Zy === O, M = E.sort, I = ni || k, H, B = this, X = !1;
    if (zC)
      return;
    function pe(ee, be) {
      ma(ee, B, Pl({
        evt: a,
        isOwner: D,
        axis: H ? "vertical" : "horizontal",
        revert: T,
        dragRect: y,
        targetRect: C,
        canSort: M,
        fromSortable: I,
        target: p,
        completed: ze,
        onMove: function(ne, Re) {
          return tE(Fn, s, ye, y, ne, _r(ne), a, Re);
        },
        changed: ge
      }, be));
    }
    function we() {
      pe("dragOverAnimationCapture"), B.captureAnimationState(), B !== I && I.captureAnimationState();
    }
    function ze(ee) {
      return pe("dragOverCompleted", {
        insertion: ee
      }), ee && (D ? k._hideClone() : k._showClone(B), B !== I && (Na(ye, ni ? ni.options.ghostClass : k.options.ghostClass, !1), Na(ye, E.ghostClass, !0)), ni !== B && B !== Ct.active ? ni = B : B === Ct.active && ni && (ni = null), I === B && (B._ignoreWhileAnimating = p), B.animateAll(function() {
        pe("dragOverAnimationComplete"), B._ignoreWhileAnimating = null;
      }), B !== I && (I.animateAll(), I._ignoreWhileAnimating = null)), (p === ye && !ye.animated || p === s && !p.animated) && (fp = null), !E.dragoverBubble && !a.rootEl && p !== document && (ye.parentNode[La]._isOutsideThisEl(a.target), !ee && gf(a)), !E.dragoverBubble && a.stopPropagation && a.stopPropagation(), X = !0;
    }
    function ge() {
      ka = oo(ye), Hs = oo(ye, E.draggable), $i({
        sortable: B,
        name: "change",
        toEl: s,
        newIndex: ka,
        newDraggableIndex: Hs,
        originalEvent: a
      });
    }
    if (a.preventDefault !== void 0 && a.cancelable && a.preventDefault(), p = kl(p, E.draggable, s, !0), pe("dragOver"), Ct.eventCanceled)
      return X;
    if (ye.contains(a.target) || p.animated && p.animatingX && p.animatingY || B._ignoreWhileAnimating === p)
      return ze(!1);
    if (mE = !1, k && !E.disabled && (D ? M || (T = rr !== Fn) : ni === this || (this.lastPutMode = Zy.checkPull(this, k, ye, a)) && O.checkPut(this, k, ye, a))) {
      if (H = this._getDirection(a, p) === "vertical", y = _r(ye), pe("dragOverValid"), Ct.eventCanceled)
        return X;
      if (T)
        return rr = Fn, we(), this._hideClone(), pe("revert"), Ct.eventCanceled || (yf ? Fn.insertBefore(ye, yf) : Fn.appendChild(ye)), ze(!0);
      var ae = ab(s, E.draggable);
      if (!ae || WI(a, H, this) && !ae.animated) {
        if (ae === ye)
          return ze(!1);
        if (ae && s === a.target && (p = ae), p && (C = _r(p)), tE(Fn, s, ye, y, p, C, a, !!p) !== !1)
          return we(), ae && ae.nextSibling ? s.insertBefore(ye, ae.nextSibling) : s.appendChild(ye), rr = s, ge(), ze(!0);
      } else if (ae && YI(a, H, this)) {
        var Ce = Rp(s, 0, E, !0);
        if (Ce === ye)
          return ze(!1);
        if (p = Ce, C = _r(p), tE(Fn, s, ye, y, p, C, a, !1) !== !1)
          return we(), s.insertBefore(ye, Ce), rr = s, ge(), ze(!0);
      } else if (p.parentNode === s) {
        C = _r(p);
        var oe = 0, Ne, De = ye.parentNode !== s, tt = !FI(ye.animated && ye.toRect || y, p.animated && p.toRect || C, H), vt = H ? "top" : "left", ot = P1(p, "top", "top") || P1(ye, "top", "top"), at = ot ? ot.scrollTop : void 0;
        fp !== p && (Ne = C[vt], Bv = !1, Jy = !tt && E.invertSwap || De), oe = GI(a, p, C, H, tt ? 1 : E.swapThreshold, E.invertedSwapThreshold == null ? E.swapThreshold : E.invertedSwapThreshold, Jy, fp === p);
        var ct;
        if (oe !== 0) {
          var je = oo(ye);
          do
            je -= oe, ct = rr.children[je];
          while (ct && (st(ct, "display") === "none" || ct === At));
        }
        if (oe === 0 || ct === p)
          return ze(!1);
        fp = p, Vv = oe;
        var Ze = p.nextElementSibling, qe = !1;
        qe = oe === 1;
        var We = tE(Fn, s, ye, y, p, C, a, qe);
        if (We !== !1)
          return (We === 1 || We === -1) && (qe = We === 1), zC = !0, setTimeout(BI, 30), we(), qe && !Ze ? s.appendChild(ye) : p.parentNode.insertBefore(ye, qe ? Ze : p), ot && aD(ot, 0, at - ot.scrollTop), rr = ye.parentNode, Ne !== void 0 && !Jy && (lE = Math.abs(Ne - _r(p)[vt])), ge(), ze(!0);
      }
      if (s.contains(ye))
        return ze(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    Gt(document, "mousemove", this._onTouchMove), Gt(document, "touchmove", this._onTouchMove), Gt(document, "pointermove", this._onTouchMove), Gt(document, "dragover", gf), Gt(document, "mousemove", gf), Gt(document, "touchmove", gf);
  },
  _offUpEvents: function() {
    var a = this.el.ownerDocument;
    Gt(a, "mouseup", this._onDrop), Gt(a, "touchend", this._onDrop), Gt(a, "pointerup", this._onDrop), Gt(a, "touchcancel", this._onDrop), Gt(document, "selectstart", this);
  },
  _onDrop: function(a) {
    var s = this.el, p = this.options;
    if (ka = oo(ye), Hs = oo(ye, p.draggable), ma("drop", this, {
      evt: a
    }), rr = ye && ye.parentNode, ka = oo(ye), Hs = oo(ye, p.draggable), Ct.eventCanceled) {
      this._nulling();
      return;
    }
    vp = !1, Jy = !1, Bv = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), UC(this.cloneId), UC(this._dragStartId), this.nativeDraggable && (Gt(document, "drop", this), Gt(s, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Fv && st(document.body, "user-select", ""), st(ye, "transform", ""), a && (zv && (a.cancelable && a.preventDefault(), !p.dropBubble && a.stopPropagation()), At && At.parentNode && At.parentNode.removeChild(At), (Fn === rr || ni && ni.lastPutMode !== "clone") && Xn && Xn.parentNode && Xn.parentNode.removeChild(Xn), ye && (this.nativeDraggable && Gt(ye, "dragend", this), SC(ye), ye.style["will-change"] = "", zv && !vp && Na(ye, ni ? ni.options.ghostClass : this.options.ghostClass, !1), Na(ye, this.options.chosenClass, !1), $i({
      sortable: this,
      name: "unchoose",
      toEl: rr,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: a
    }), Fn !== rr ? (ka >= 0 && ($i({
      rootEl: rr,
      name: "add",
      toEl: rr,
      fromEl: Fn,
      originalEvent: a
    }), $i({
      sortable: this,
      name: "remove",
      toEl: rr,
      originalEvent: a
    }), $i({
      rootEl: rr,
      name: "sort",
      toEl: rr,
      fromEl: Fn,
      originalEvent: a
    }), $i({
      sortable: this,
      name: "sort",
      toEl: rr,
      originalEvent: a
    })), ni && ni.save()) : ka !== gp && ka >= 0 && ($i({
      sortable: this,
      name: "update",
      toEl: rr,
      originalEvent: a
    }), $i({
      sortable: this,
      name: "sort",
      toEl: rr,
      originalEvent: a
    })), Ct.active && ((ka == null || ka === -1) && (ka = gp, Hs = $v), $i({
      sortable: this,
      name: "end",
      toEl: rr,
      originalEvent: a
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    ma("nulling", this), Fn = ye = rr = At = yf = Xn = oE = $s = mf = Wo = zv = ka = Hs = gp = $v = fp = Vv = ni = Zy = Ct.dragged = Ct.ghost = Ct.clone = Ct.active = null, yE.forEach(function(a) {
      a.checked = !0;
    }), yE.length = yC = EC = 0;
  },
  handleEvent: function(a) {
    switch (a.type) {
      case "drop":
      case "dragend":
        this._onDrop(a);
        break;
      case "dragenter":
      case "dragover":
        ye && (this._onDragOver(a), VI(a));
        break;
      case "selectstart":
        a.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function() {
    for (var a = [], s, p = this.el.children, y = 0, C = p.length, T = this.options; y < C; y++)
      s = p[y], kl(s, T.draggable, this.el, !1) && a.push(s.getAttribute(T.dataIdAttr) || QI(s));
    return a;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(a, s) {
    var p = {}, y = this.el;
    this.toArray().forEach(function(C, T) {
      var E = y.children[T];
      kl(E, this.options.draggable, y, !1) && (p[C] = E);
    }, this), s && this.captureAnimationState(), a.forEach(function(C) {
      p[C] && (y.removeChild(p[C]), y.appendChild(p[C]));
    }), s && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function() {
    var a = this.options.store;
    a && a.set && a.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function(a, s) {
    return kl(a, s || this.options.draggable, this.el, !1);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function(a, s) {
    var p = this.options;
    if (s === void 0)
      return p[a];
    var y = Jv.modifyOption(this, a, s);
    typeof y < "u" ? p[a] = y : p[a] = s, a === "group" && sD(p);
  },
  /**
   * Destroy
   */
  destroy: function() {
    ma("destroy", this);
    var a = this.el;
    a[La] = null, Gt(a, "mousedown", this._onTapStart), Gt(a, "touchstart", this._onTapStart), Gt(a, "pointerdown", this._onTapStart), this.nativeDraggable && (Gt(a, "dragover", this), Gt(a, "dragenter", this)), Array.prototype.forEach.call(a.querySelectorAll("[draggable]"), function(s) {
      s.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), gE.splice(gE.indexOf(this.el), 1), this.el = a = null;
  },
  _hideClone: function() {
    if (!$s) {
      if (ma("hideClone", this), Ct.eventCanceled)
        return;
      st(Xn, "display", "none"), this.options.removeCloneOnHide && Xn.parentNode && Xn.parentNode.removeChild(Xn), $s = !0;
    }
  },
  _showClone: function(a) {
    if (a.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if ($s) {
      if (ma("showClone", this), Ct.eventCanceled)
        return;
      ye.parentNode == Fn && !this.options.group.revertClone ? Fn.insertBefore(Xn, ye) : yf ? Fn.insertBefore(Xn, yf) : Fn.appendChild(Xn), this.options.group.revertClone && this.animate(ye, Xn), st(Xn, "display", ""), $s = !1;
    }
  }
};
function VI(c) {
  c.dataTransfer && (c.dataTransfer.dropEffect = "move"), c.cancelable && c.preventDefault();
}
function tE(c, a, s, p, y, C, T, E) {
  var O, k = c[La], D = k.options.onMove, M;
  return window.CustomEvent && !Mu && !Zv ? O = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (O = document.createEvent("Event"), O.initEvent("move", !0, !0)), O.to = a, O.from = c, O.dragged = s, O.draggedRect = p, O.related = y || a, O.relatedRect = C || _r(a), O.willInsertAfter = E, O.originalEvent = T, c.dispatchEvent(O), D && (M = D.call(k, O, T)), M;
}
function SC(c) {
  c.draggable = !1;
}
function BI() {
  zC = !1;
}
function YI(c, a, s) {
  var p = _r(Rp(s.el, 0, s.options, !0)), y = rD(s.el), C = 10;
  return a ? c.clientX < y.left - C || c.clientY < p.top && c.clientX < p.right : c.clientY < y.top - C || c.clientY < p.bottom && c.clientX < p.left;
}
function WI(c, a, s) {
  var p = _r(ab(s.el, s.options.draggable)), y = rD(s.el), C = 10;
  return a ? c.clientX > y.right + C || c.clientY > p.bottom && c.clientX > p.left : c.clientY > y.bottom + C || c.clientX > p.right && c.clientY > p.top;
}
function GI(c, a, s, p, y, C, T, E) {
  var O = p ? c.clientY : c.clientX, k = p ? s.height : s.width, D = p ? s.top : s.left, M = p ? s.bottom : s.right, I = !1;
  if (!T) {
    if (E && lE < k * y) {
      if (!Bv && (Vv === 1 ? O > D + k * C / 2 : O < M - k * C / 2) && (Bv = !0), Bv)
        I = !0;
      else if (Vv === 1 ? O < D + lE : O > M - lE)
        return -Vv;
    } else if (O > D + k * (1 - y) / 2 && O < M - k * (1 - y) / 2)
      return KI(a);
  }
  return I = I || T, I && (O < D + k * C / 2 || O > M - k * C / 2) ? O > D + k / 2 ? 1 : -1 : 0;
}
function KI(c) {
  return oo(ye) < oo(c) ? 1 : -1;
}
function QI(c) {
  for (var a = c.tagName + c.className + c.src + c.href + c.textContent, s = a.length, p = 0; s--; )
    p += a.charCodeAt(s);
  return p.toString(36);
}
function XI(c) {
  yE.length = 0;
  for (var a = c.getElementsByTagName("input"), s = a.length; s--; ) {
    var p = a[s];
    p.checked && yE.push(p);
  }
}
function uE(c) {
  return setTimeout(c, 0);
}
function UC(c) {
  return clearTimeout(c);
}
xE && rn(document, "touchmove", function(c) {
  (Ct.active || vp) && c.cancelable && c.preventDefault();
});
Ct.utils = {
  on: rn,
  off: Gt,
  css: st,
  find: nD,
  is: function(a, s) {
    return !!kl(a, s, a, !1);
  },
  extend: kI,
  throttle: iD,
  closest: kl,
  toggleClass: Na,
  clone: oD,
  index: oo,
  nextTick: uE,
  cancelNextTick: UC,
  detectDirection: uD,
  getChild: Rp
};
Ct.get = function(c) {
  return c[La];
};
Ct.mount = function() {
  for (var c = arguments.length, a = new Array(c), s = 0; s < c; s++)
    a[s] = arguments[s];
  a[0].constructor === Array && (a = a[0]), a.forEach(function(p) {
    if (!p.prototype || !p.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(p));
    p.utils && (Ct.utils = Pl(Pl({}, Ct.utils), p.utils)), Jv.mount(p);
  });
};
Ct.create = function(c, a) {
  return new Ct(c, a);
};
Ct.version = OI;
var Er = [], Uv, PC, jC = !1, CC, bC, EE, Pv;
function qI() {
  function c() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var a in this)
      a.charAt(0) === "_" && typeof this[a] == "function" && (this[a] = this[a].bind(this));
  }
  return c.prototype = {
    dragStarted: function(s) {
      var p = s.originalEvent;
      this.sortable.nativeDraggable ? rn(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? rn(document, "pointermove", this._handleFallbackAutoScroll) : p.touches ? rn(document, "touchmove", this._handleFallbackAutoScroll) : rn(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(s) {
      var p = s.originalEvent;
      !this.options.dragOverBubble && !p.rootEl && this._handleAutoScroll(p);
    },
    drop: function() {
      this.sortable.nativeDraggable ? Gt(document, "dragover", this._handleAutoScroll) : (Gt(document, "pointermove", this._handleFallbackAutoScroll), Gt(document, "touchmove", this._handleFallbackAutoScroll), Gt(document, "mousemove", this._handleFallbackAutoScroll)), $1(), sE(), LI();
    },
    nulling: function() {
      EE = PC = Uv = jC = Pv = CC = bC = null, Er.length = 0;
    },
    _handleFallbackAutoScroll: function(s) {
      this._handleAutoScroll(s, !0);
    },
    _handleAutoScroll: function(s, p) {
      var y = this, C = (s.touches ? s.touches[0] : s).clientX, T = (s.touches ? s.touches[0] : s).clientY, E = document.elementFromPoint(C, T);
      if (EE = s, p || this.options.forceAutoScrollFallback || Zv || Mu || Fv) {
        TC(s, this.options, E, p);
        var O = Vs(E, !0);
        jC && (!Pv || C !== CC || T !== bC) && (Pv && $1(), Pv = setInterval(function() {
          var k = Vs(document.elementFromPoint(C, T), !0);
          k !== O && (O = k, sE()), TC(s, y.options, k, p);
        }, 10), CC = C, bC = T);
      } else {
        if (!this.options.bubbleScroll || Vs(E, !0) === zl()) {
          sE();
          return;
        }
        TC(s, this.options, Vs(E, !1), !1);
      }
    }
  }, ku(c, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function sE() {
  Er.forEach(function(c) {
    clearInterval(c.pid);
  }), Er = [];
}
function $1() {
  clearInterval(Pv);
}
var TC = iD(function(c, a, s, p) {
  if (a.scroll) {
    var y = (c.touches ? c.touches[0] : c).clientX, C = (c.touches ? c.touches[0] : c).clientY, T = a.scrollSensitivity, E = a.scrollSpeed, O = zl(), k = !1, D;
    PC !== s && (PC = s, sE(), Uv = a.scroll, D = a.scrollFn, Uv === !0 && (Uv = Vs(s, !0)));
    var M = 0, I = Uv;
    do {
      var H = I, B = _r(H), X = B.top, pe = B.bottom, we = B.left, ze = B.right, ge = B.width, ae = B.height, Ce = void 0, oe = void 0, Ne = H.scrollWidth, De = H.scrollHeight, tt = st(H), vt = H.scrollLeft, ot = H.scrollTop;
      H === O ? (Ce = ge < Ne && (tt.overflowX === "auto" || tt.overflowX === "scroll" || tt.overflowX === "visible"), oe = ae < De && (tt.overflowY === "auto" || tt.overflowY === "scroll" || tt.overflowY === "visible")) : (Ce = ge < Ne && (tt.overflowX === "auto" || tt.overflowX === "scroll"), oe = ae < De && (tt.overflowY === "auto" || tt.overflowY === "scroll"));
      var at = Ce && (Math.abs(ze - y) <= T && vt + ge < Ne) - (Math.abs(we - y) <= T && !!vt), ct = oe && (Math.abs(pe - C) <= T && ot + ae < De) - (Math.abs(X - C) <= T && !!ot);
      if (!Er[M])
        for (var je = 0; je <= M; je++)
          Er[je] || (Er[je] = {});
      (Er[M].vx != at || Er[M].vy != ct || Er[M].el !== H) && (Er[M].el = H, Er[M].vx = at, Er[M].vy = ct, clearInterval(Er[M].pid), (at != 0 || ct != 0) && (k = !0, Er[M].pid = setInterval((function() {
        p && this.layer === 0 && Ct.active._onTouchMove(EE);
        var Ze = Er[this.layer].vy ? Er[this.layer].vy * E : 0, qe = Er[this.layer].vx ? Er[this.layer].vx * E : 0;
        typeof D == "function" && D.call(Ct.dragged.parentNode[La], qe, Ze, c, EE, Er[this.layer].el) !== "continue" || aD(Er[this.layer].el, qe, Ze);
      }).bind({
        layer: M
      }), 24))), M++;
    } while (a.bubbleScroll && I !== O && (I = Vs(I, !1)));
    jC = k;
  }
}, 30), dD = function(a) {
  var s = a.originalEvent, p = a.putSortable, y = a.dragEl, C = a.activeSortable, T = a.dispatchSortableEvent, E = a.hideGhostForTarget, O = a.unhideGhostForTarget;
  if (s) {
    var k = p || C;
    E();
    var D = s.changedTouches && s.changedTouches.length ? s.changedTouches[0] : s, M = document.elementFromPoint(D.clientX, D.clientY);
    O(), k && !k.el.contains(M) && (T("spill"), this.onSpill({
      dragEl: y,
      putSortable: p
    }));
  }
};
function ob() {
}
ob.prototype = {
  startIndex: null,
  dragStart: function(a) {
    var s = a.oldDraggableIndex;
    this.startIndex = s;
  },
  onSpill: function(a) {
    var s = a.dragEl, p = a.putSortable;
    this.sortable.captureAnimationState(), p && p.captureAnimationState();
    var y = Rp(this.sortable.el, this.startIndex, this.options);
    y ? this.sortable.el.insertBefore(s, y) : this.sortable.el.appendChild(s), this.sortable.animateAll(), p && p.animateAll();
  },
  drop: dD
};
ku(ob, {
  pluginName: "revertOnSpill"
});
function lb() {
}
lb.prototype = {
  onSpill: function(a) {
    var s = a.dragEl, p = a.putSortable, y = p || this.sortable;
    y.captureAnimationState(), s.parentNode && s.parentNode.removeChild(s), y.animateAll();
  },
  drop: dD
};
ku(lb, {
  pluginName: "removeOnSpill"
});
Ct.mount(new qI());
Ct.mount(lb, ob);
const ZI = ({ children: c }) => {
  const { gridSettings: a, rowSortList: s } = Pe.useContext(Yi), [p, y] = Pe.useState(null), C = Pe.useRef(null);
  return Pe.useEffect(() => {
    C.current && y(Ct.create(C.current, {
      animation: 150,
      disabled: !0
    }));
  }, [a.rows]), Pe.useEffect(() => {
    const T = ["0"].concat(s.map((E) => (E + 1).toString()));
    p == null || p.sort(T, !0);
  }, [p, s]), /* @__PURE__ */ ie.jsx("ul", { className: "container", style: { zoom: 0.5 }, ref: C, children: c });
}, JI = () => {
  var p;
  const { gridSettings: c, rowSortList: a } = Pe.useContext(Yi);
  let s = [];
  if (s.push(/* @__PURE__ */ ie.jsx(_I, {}, 0)), (p = c.image) != null && p.complete)
    for (let y = 0; y < c.rows; y++)
      a.includes(y) && s.push(/* @__PURE__ */ ie.jsx(wI, { rowIndex: y }, y + 1));
  return /* @__PURE__ */ ie.jsx(ZI, { children: s });
}, eF = ({ show: c, defaultZoom: a, rowIndex: s, colIndex: p, ...y }) => {
  const { gridSettings: C } = Pe.useContext(Yi), [T, E] = c !== void 0 ? [c, () => {
  }] : Pe.useState(!1), [O, k] = Pe.useState(a !== void 0 ? a : 1), D = Pe.useRef(null), M = Pe.useCallback((H) => {
    var B;
    if (c !== void 0 && !y.onClosing) {
      console.log("Modal is controlled by parent, but no onClosing handler is provided."), H.preventDefault();
      return;
    }
    E(!1), (B = y.onClosing) == null || B.call(y, H);
  }, []);
  Pe.useEffect(() => {
    D.current && D.current.addEventListener("hide.bs.modal", M);
  }, [D.current]), Pe.useEffect(() => {
    if (!D.current)
      return;
    const H = new wf(D.current, { keyboard: !0 });
    T ? (H.show(), k(1)) : H.hide();
  }, [T, c]);
  const I = Pe.useCallback((H) => {
    H.deltaY < 0 ? k(O + 0.1) : O > 0.15 && k(O - 0.1);
  }, [O, a]);
  return /* @__PURE__ */ ie.jsx(ie.Fragment, { children: /* @__PURE__ */ ie.jsx("div", { className: "modal fade", ref: D, id: "lightboxModalFullscreen", tabIndex: -1, children: /* @__PURE__ */ ie.jsx("div", { className: "modal-dialog modal-fullscreen", children: /* @__PURE__ */ ie.jsx("div", { className: "modal-content", style: { backgroundColor: "unset" }, children: /* @__PURE__ */ ie.jsxs("div", { className: "modal-body", children: [
    /* @__PURE__ */ ie.jsxs("div", { className: "position-absolute z-n1 top-0 left-0", style: { opacity: 0.7, zoom: 0.5 }, children: [
      /* @__PURE__ */ ie.jsxs("div", { className: "row", children: [
        /* @__PURE__ */ ie.jsx("div", { className: "col-auto bg-light", style: { minWidth: C.header.width, minHeight: C.header.height } }),
        /* @__PURE__ */ ie.jsx("div", { className: "col-auto bg-light p-1", children: /* @__PURE__ */ ie.jsx(Kx, { colIndex: p }) })
      ] }),
      /* @__PURE__ */ ie.jsx("div", { className: "row", children: /* @__PURE__ */ ie.jsx("div", { className: "col-auto bg-light p-1", children: /* @__PURE__ */ ie.jsx(Xx, { rowIndex: s }) }) })
    ] }),
    /* @__PURE__ */ ie.jsx("div", { className: "m-0 w-100 h-100 d-flex align-items-center justify-content-center position-relative", style: { zoom: O, overflow: "hidden" }, onWheel: I, children: /* @__PURE__ */ ie.jsx(qx, { rowIndex: s, colIndex: p }) })
  ] }) }) }) }) });
}, tF = () => {
}, nF = (c, a) => c.key === a || c.code === a || c.keyCode === a || c.which === a || c.charCode === a, rF = {
  eventTypes: ["keydown"],
  when: !0
};
function iF(c, a, s) {
  const p = Pe.useMemo(() => Array.isArray(c) ? c : [c], [c]), y = Pe.useMemo(() => Object.assign(Object.assign({}, rF), s), [s]), { when: C, eventTypes: T } = y, E = Pe.useRef(a), { target: O } = y;
  Pe.useEffect(() => {
    E.current = a;
  });
  const k = Pe.useCallback((D) => {
    p.some((M) => nF(D, M)) && E.current(D);
  }, [p]);
  Pe.useEffect(() => {
    if (C && typeof window < "u")
      if (O) {
        const D = O.current;
        if (D) {
          for (const M of T)
            D.addEventListener(M, k);
          return () => {
            for (const M of T)
              D.removeEventListener(M, k);
          };
        }
      } else {
        for (const D of T)
          window.addEventListener(D, k);
        return () => {
          for (const D of T)
            window.removeEventListener(D, k);
        };
      }
    return tF;
  }, [C, T, p, O, a, k]);
}
const aF = ({ children: c }) => {
  const { gridSettings: a } = Pe.useContext(Yi), [s, p] = Pe.useState(!1), [y, C] = Pe.useState(0), [T, E] = Pe.useState(0), O = Pe.useCallback((M, I) => {
    C(M), E(I), p(!0);
  }, [C, E, p]), k = Pe.useCallback(() => {
    p(!1);
  }, [p]), D = Pe.useCallback((M) => {
    if (s && a.rowsOrder) {
      if (M.key === "ArrowUp") {
        const I = a.rowsOrder.indexOf(y);
        I > 0 && C(a.rowsOrder[I - 1]);
      }
      if (M.key === "ArrowDown") {
        const I = a.rowsOrder.indexOf(y);
        I < a.rowsOrder.length - 1 && C(a.rowsOrder[I + 1]);
      }
      M.key === "ArrowLeft" && T > 0 && E(T - 1), M.key === "ArrowRight" && T < a.cols - 1 && E(T + 1);
    }
  }, [a, s, y, T, C, E]);
  return iF(["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], D), /* @__PURE__ */ ie.jsxs(ie.Fragment, { children: [
    /* @__PURE__ */ ie.jsx(Zx.Provider, { value: O, children: c }),
    /* @__PURE__ */ ie.jsx(eF, { show: s, rowIndex: y, colIndex: T, onClosing: k })
  ] });
};
function oF() {
  const c = location.href.replace(/\.html?$/, ""), a = Pe.useRef(null), s = Pe.useRef(null);
  Pe.useEffect(() => {
    a.current && (console.log("Start image loading"), a.current.src = c + ".png");
  }, []);
  const p = Pe.useCallback((y) => {
    s.current && s.current.onImageLoaded(y);
  }, [s]);
  return /* @__PURE__ */ ie.jsxs(ie.Fragment, { children: [
    /* @__PURE__ */ ie.jsx("img", { ref: a, style: { display: "none" }, onLoad: p }),
    /* @__PURE__ */ ie.jsx(EI, { ref: s, children: /* @__PURE__ */ ie.jsx(aF, { children: /* @__PURE__ */ ie.jsx(JI, {}) }) })
  ] });
}
window.gridSettings = new Sf(window.gridSettings);
Mv.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ ie.jsx(aM.StrictMode, { children: /* @__PURE__ */ ie.jsx(oF, {}) })
);
//# sourceMappingURL=sd-grids-viewer.js.map
