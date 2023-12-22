var oN = Object.defineProperty;
var lN = (v, u, f) => u in v ? oN(v, u, { enumerable: !0, configurable: !0, writable: !0, value: f }) : v[u] = f;
var Ro = (v, u, f) => (lN(v, typeof u != "symbol" ? u + "" : u, f), f);
(function() {
  const u = document.createElement("link").relList;
  if (u && u.supports && u.supports("modulepreload"))
    return;
  for (const T of document.querySelectorAll('link[rel="modulepreload"]'))
    g(T);
  new MutationObserver((T) => {
    for (const D of T)
      if (D.type === "childList")
        for (const O of D.addedNodes)
          O.tagName === "LINK" && O.rel === "modulepreload" && g(O);
  }).observe(document, { childList: !0, subtree: !0 });
  function f(T) {
    const D = {};
    return T.integrity && (D.integrity = T.integrity), T.referrerPolicy && (D.referrerPolicy = T.referrerPolicy), T.crossOrigin === "use-credentials" ? D.credentials = "include" : T.crossOrigin === "anonymous" ? D.credentials = "omit" : D.credentials = "same-origin", D;
  }
  function g(T) {
    if (T.ep)
      return;
    T.ep = !0;
    const D = f(T);
    fetch(T.href, D);
  }
})();
function sR(v) {
  return v && v.__esModule && Object.prototype.hasOwnProperty.call(v, "default") ? v.default : v;
}
var l0 = { exports: {} }, Iv = {}, u0 = { exports: {} }, Kv = { exports: {} };
Kv.exports;
var yw;
function uN() {
  return yw || (yw = 1, function(v, u) {
    var f = {};
    /**
     * @license React
     * react.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    f.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var g = "18.2.0", T = Symbol.for("react.element"), D = Symbol.for("react.portal"), O = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), U = Symbol.for("react.profiler"), F = Symbol.for("react.provider"), z = Symbol.for("react.context"), Q = Symbol.for("react.forward_ref"), V = Symbol.for("react.suspense"), G = Symbol.for("react.suspense_list"), q = Symbol.for("react.memo"), re = Symbol.for("react.lazy"), Ee = Symbol.for("react.offscreen"), Ze = Symbol.iterator, Je = "@@iterator";
      function Re(E) {
        if (E === null || typeof E != "object")
          return null;
        var R = Ze && E[Ze] || E[Je];
        return typeof R == "function" ? R : null;
      }
      var de = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Ae = {
        transition: null
      }, ce = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, $e = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Ne = {}, Rt = null;
      function Et(E) {
        Rt = E;
      }
      Ne.setExtraStackFrame = function(E) {
        Rt = E;
      }, Ne.getCurrentStack = null, Ne.getStackAddendum = function() {
        var E = "";
        Rt && (E += Rt);
        var R = Ne.getCurrentStack;
        return R && (E += R() || ""), E;
      };
      var gt = !1, st = !1, Ct = !1, Ye = !1, at = !1, lt = {
        ReactCurrentDispatcher: de,
        ReactCurrentBatchConfig: Ae,
        ReactCurrentOwner: $e
      };
      lt.ReactDebugCurrentFrame = Ne, lt.ReactCurrentActQueue = ce;
      function Ke(E) {
        {
          for (var R = arguments.length, I = new Array(R > 1 ? R - 1 : 0), K = 1; K < R; K++)
            I[K - 1] = arguments[K];
          Se("warn", E, I);
        }
      }
      function ee(E) {
        {
          for (var R = arguments.length, I = new Array(R > 1 ? R - 1 : 0), K = 1; K < R; K++)
            I[K - 1] = arguments[K];
          Se("error", E, I);
        }
      }
      function Se(E, R, I) {
        {
          var K = lt.ReactDebugCurrentFrame, pe = K.getStackAddendum();
          pe !== "" && (R += "%s", I = I.concat([pe]));
          var Ue = I.map(function(xe) {
            return String(xe);
          });
          Ue.unshift("Warning: " + R), Function.prototype.apply.call(console[E], console, Ue);
        }
      }
      var A = {};
      function te(E, R) {
        {
          var I = E.constructor, K = I && (I.displayName || I.name) || "ReactClass", pe = K + "." + R;
          if (A[pe])
            return;
          ee("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", R, K), A[pe] = !0;
        }
      }
      var Te = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(E) {
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
        enqueueForceUpdate: function(E, R, I) {
          te(E, "forceUpdate");
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
        enqueueReplaceState: function(E, R, I, K) {
          te(E, "replaceState");
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
        enqueueSetState: function(E, R, I, K) {
          te(E, "setState");
        }
      }, We = Object.assign, Ie = {};
      Object.freeze(Ie);
      function ct(E, R, I) {
        this.props = E, this.context = R, this.refs = Ie, this.updater = I || Te;
      }
      ct.prototype.isReactComponent = {}, ct.prototype.setState = function(E, R) {
        if (typeof E != "object" && typeof E != "function" && E != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, E, R, "setState");
      }, ct.prototype.forceUpdate = function(E) {
        this.updater.enqueueForceUpdate(this, E, "forceUpdate");
      };
      {
        var dt = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, _t = function(E, R) {
          Object.defineProperty(ct.prototype, E, {
            get: function() {
              Ke("%s(...) is deprecated in plain JavaScript React classes. %s", R[0], R[1]);
            }
          });
        };
        for (var ut in dt)
          dt.hasOwnProperty(ut) && _t(ut, dt[ut]);
      }
      function Gt() {
      }
      Gt.prototype = ct.prototype;
      function Qn(E, R, I) {
        this.props = E, this.context = R, this.refs = Ie, this.updater = I || Te;
      }
      var Mn = Qn.prototype = new Gt();
      Mn.constructor = Qn, We(Mn, ct.prototype), Mn.isPureReactComponent = !0;
      function Tr() {
        var E = {
          current: null
        };
        return Object.seal(E), E;
      }
      var qn = Array.isArray;
      function hn(E) {
        return qn(E);
      }
      function Xn(E) {
        {
          var R = typeof Symbol == "function" && Symbol.toStringTag, I = R && E[Symbol.toStringTag] || E.constructor.name || "Object";
          return I;
        }
      }
      function Rn(E) {
        try {
          return En(E), !1;
        } catch {
          return !0;
        }
      }
      function En(E) {
        return "" + E;
      }
      function xn(E) {
        if (Rn(E))
          return ee("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Xn(E)), En(E);
      }
      function cr(E, R, I) {
        var K = E.displayName;
        if (K)
          return K;
        var pe = R.displayName || R.name || "";
        return pe !== "" ? I + "(" + pe + ")" : I;
      }
      function mn(E) {
        return E.displayName || "Context";
      }
      function yn(E) {
        if (E == null)
          return null;
        if (typeof E.tag == "number" && ee("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof E == "function")
          return E.displayName || E.name || null;
        if (typeof E == "string")
          return E;
        switch (E) {
          case O:
            return "Fragment";
          case D:
            return "Portal";
          case U:
            return "Profiler";
          case _:
            return "StrictMode";
          case V:
            return "Suspense";
          case G:
            return "SuspenseList";
        }
        if (typeof E == "object")
          switch (E.$$typeof) {
            case z:
              var R = E;
              return mn(R) + ".Consumer";
            case F:
              var I = E;
              return mn(I._context) + ".Provider";
            case Q:
              return cr(E, E.render, "ForwardRef");
            case q:
              var K = E.displayName || null;
              return K !== null ? K : yn(E.type) || "Memo";
            case re: {
              var pe = E, Ue = pe._payload, xe = pe._init;
              try {
                return yn(xe(Ue));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var br = Object.prototype.hasOwnProperty, wr = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, In, Rr, Bn;
      Bn = {};
      function rr(E) {
        if (br.call(E, "ref")) {
          var R = Object.getOwnPropertyDescriptor(E, "ref").get;
          if (R && R.isReactWarning)
            return !1;
        }
        return E.ref !== void 0;
      }
      function en(E) {
        if (br.call(E, "key")) {
          var R = Object.getOwnPropertyDescriptor(E, "key").get;
          if (R && R.isReactWarning)
            return !1;
        }
        return E.key !== void 0;
      }
      function va(E, R) {
        var I = function() {
          In || (In = !0, ee("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
        };
        I.isReactWarning = !0, Object.defineProperty(E, "key", {
          get: I,
          configurable: !0
        });
      }
      function ha(E, R) {
        var I = function() {
          Rr || (Rr = !0, ee("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
        };
        I.isReactWarning = !0, Object.defineProperty(E, "ref", {
          get: I,
          configurable: !0
        });
      }
      function ma(E) {
        if (typeof E.ref == "string" && $e.current && E.__self && $e.current.stateNode !== E.__self) {
          var R = yn($e.current.type);
          Bn[R] || (ee('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', R, E.ref), Bn[R] = !0);
        }
      }
      var ge = function(E, R, I, K, pe, Ue, xe) {
        var it = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: T,
          // Built-in properties that belong on the element
          type: E,
          key: R,
          ref: I,
          props: xe,
          // Record the component responsible for creating this element.
          _owner: Ue
        };
        return it._store = {}, Object.defineProperty(it._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(it, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: K
        }), Object.defineProperty(it, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: pe
        }), Object.freeze && (Object.freeze(it.props), Object.freeze(it)), it;
      };
      function Be(E, R, I) {
        var K, pe = {}, Ue = null, xe = null, it = null, wt = null;
        if (R != null) {
          rr(R) && (xe = R.ref, ma(R)), en(R) && (xn(R.key), Ue = "" + R.key), it = R.__self === void 0 ? null : R.__self, wt = R.__source === void 0 ? null : R.__source;
          for (K in R)
            br.call(R, K) && !wr.hasOwnProperty(K) && (pe[K] = R[K]);
        }
        var Yt = arguments.length - 2;
        if (Yt === 1)
          pe.children = I;
        else if (Yt > 1) {
          for (var Qt = Array(Yt), qt = 0; qt < Yt; qt++)
            Qt[qt] = arguments[qt + 2];
          Object.freeze && Object.freeze(Qt), pe.children = Qt;
        }
        if (E && E.defaultProps) {
          var Xt = E.defaultProps;
          for (K in Xt)
            pe[K] === void 0 && (pe[K] = Xt[K]);
        }
        if (Ue || xe) {
          var fn = typeof E == "function" ? E.displayName || E.name || "Unknown" : E;
          Ue && va(pe, fn), xe && ha(pe, fn);
        }
        return ge(E, Ue, xe, it, wt, $e.current, pe);
      }
      function Tt(E, R) {
        var I = ge(E.type, R, E.ref, E._self, E._source, E._owner, E.props);
        return I;
      }
      function It(E, R, I) {
        if (E == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + E + ".");
        var K, pe = We({}, E.props), Ue = E.key, xe = E.ref, it = E._self, wt = E._source, Yt = E._owner;
        if (R != null) {
          rr(R) && (xe = R.ref, Yt = $e.current), en(R) && (xn(R.key), Ue = "" + R.key);
          var Qt;
          E.type && E.type.defaultProps && (Qt = E.type.defaultProps);
          for (K in R)
            br.call(R, K) && !wr.hasOwnProperty(K) && (R[K] === void 0 && Qt !== void 0 ? pe[K] = Qt[K] : pe[K] = R[K]);
        }
        var qt = arguments.length - 2;
        if (qt === 1)
          pe.children = I;
        else if (qt > 1) {
          for (var Xt = Array(qt), fn = 0; fn < qt; fn++)
            Xt[fn] = arguments[fn + 2];
          pe.children = Xt;
        }
        return ge(E.type, Ue, xe, it, wt, Yt, pe);
      }
      function $t(E) {
        return typeof E == "object" && E !== null && E.$$typeof === T;
      }
      var zn = ".", _n = ":";
      function xr(E) {
        var R = /[=:]/g, I = {
          "=": "=0",
          ":": "=2"
        }, K = E.replace(R, function(pe) {
          return I[pe];
        });
        return "$" + K;
      }
      var Kt = !1, ar = /\/+/g;
      function Bt(E) {
        return E.replace(ar, "$&/");
      }
      function rn(E, R) {
        return typeof E == "object" && E !== null && E.key != null ? (xn(E.key), xr("" + E.key)) : R.toString(36);
      }
      function ri(E, R, I, K, pe) {
        var Ue = typeof E;
        (Ue === "undefined" || Ue === "boolean") && (E = null);
        var xe = !1;
        if (E === null)
          xe = !0;
        else
          switch (Ue) {
            case "string":
            case "number":
              xe = !0;
              break;
            case "object":
              switch (E.$$typeof) {
                case T:
                case D:
                  xe = !0;
              }
          }
        if (xe) {
          var it = E, wt = pe(it), Yt = K === "" ? zn + rn(it, 0) : K;
          if (hn(wt)) {
            var Qt = "";
            Yt != null && (Qt = Bt(Yt) + "/"), ri(wt, R, Qt, "", function(Wd) {
              return Wd;
            });
          } else
            wt != null && ($t(wt) && (wt.key && (!it || it.key !== wt.key) && xn(wt.key), wt = Tt(
              wt,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              I + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (wt.key && (!it || it.key !== wt.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                Bt("" + wt.key) + "/"
              ) : "") + Yt
            )), R.push(wt));
          return 1;
        }
        var qt, Xt, fn = 0, Ut = K === "" ? zn : K + _n;
        if (hn(E))
          for (var Uo = 0; Uo < E.length; Uo++)
            qt = E[Uo], Xt = Ut + rn(qt, Uo), fn += ri(qt, R, I, Xt, pe);
        else {
          var yu = Re(E);
          if (typeof yu == "function") {
            var Ns = E;
            yu === Ns.entries && (Kt || Ke("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Kt = !0);
            for (var Ls = yu.call(Ns), Ji, Ms = 0; !(Ji = Ls.next()).done; )
              qt = Ji.value, Xt = Ut + rn(qt, Ms++), fn += ri(qt, R, I, Xt, pe);
          } else if (Ue === "object") {
            var zs = String(E);
            throw new Error("Objects are not valid as a React child (found: " + (zs === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : zs) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return fn;
      }
      function Na(E, R, I) {
        if (E == null)
          return E;
        var K = [], pe = 0;
        return ri(E, K, "", "", function(Ue) {
          return R.call(I, Ue, pe++);
        }), K;
      }
      function Do(E) {
        var R = 0;
        return Na(E, function() {
          R++;
        }), R;
      }
      function hl(E, R, I) {
        Na(E, function() {
          R.apply(this, arguments);
        }, I);
      }
      function ml(E) {
        return Na(E, function(R) {
          return R;
        }) || [];
      }
      function Oo(E) {
        if (!$t(E))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return E;
      }
      function ai(E) {
        var R = {
          $$typeof: z,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: E,
          _currentValue2: E,
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
        R.Provider = {
          $$typeof: F,
          _context: R
        };
        var I = !1, K = !1, pe = !1;
        {
          var Ue = {
            $$typeof: z,
            _context: R
          };
          Object.defineProperties(Ue, {
            Provider: {
              get: function() {
                return K || (K = !0, ee("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), R.Provider;
              },
              set: function(xe) {
                R.Provider = xe;
              }
            },
            _currentValue: {
              get: function() {
                return R._currentValue;
              },
              set: function(xe) {
                R._currentValue = xe;
              }
            },
            _currentValue2: {
              get: function() {
                return R._currentValue2;
              },
              set: function(xe) {
                R._currentValue2 = xe;
              }
            },
            _threadCount: {
              get: function() {
                return R._threadCount;
              },
              set: function(xe) {
                R._threadCount = xe;
              }
            },
            Consumer: {
              get: function() {
                return I || (I = !0, ee("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), R.Consumer;
              }
            },
            displayName: {
              get: function() {
                return R.displayName;
              },
              set: function(xe) {
                pe || (Ke("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", xe), pe = !0);
              }
            }
          }), R.Consumer = Ue;
        }
        return R._currentRenderer = null, R._currentRenderer2 = null, R;
      }
      var ii = -1, La = 0, Wi = 1, Yr = 2;
      function Wr(E) {
        if (E._status === ii) {
          var R = E._result, I = R();
          if (I.then(function(Ue) {
            if (E._status === La || E._status === ii) {
              var xe = E;
              xe._status = Wi, xe._result = Ue;
            }
          }, function(Ue) {
            if (E._status === La || E._status === ii) {
              var xe = E;
              xe._status = Yr, xe._result = Ue;
            }
          }), E._status === ii) {
            var K = E;
            K._status = La, K._result = I;
          }
        }
        if (E._status === Wi) {
          var pe = E._result;
          return pe === void 0 && ee(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, pe), "default" in pe || ee(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, pe), pe.default;
        } else
          throw E._result;
      }
      function ya(E) {
        var R = {
          // We use these fields to store the result.
          _status: ii,
          _result: E
        }, I = {
          $$typeof: re,
          _payload: R,
          _init: Wr
        };
        {
          var K, pe;
          Object.defineProperties(I, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return K;
              },
              set: function(Ue) {
                ee("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), K = Ue, Object.defineProperty(I, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return pe;
              },
              set: function(Ue) {
                ee("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), pe = Ue, Object.defineProperty(I, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return I;
      }
      function Gi(E) {
        E != null && E.$$typeof === q ? ee("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof E != "function" ? ee("forwardRef requires a render function but was given %s.", E === null ? "null" : typeof E) : E.length !== 0 && E.length !== 2 && ee("forwardRef render functions accept exactly two parameters: props and ref. %s", E.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), E != null && (E.defaultProps != null || E.propTypes != null) && ee("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var R = {
          $$typeof: Q,
          render: E
        };
        {
          var I;
          Object.defineProperty(R, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return I;
            },
            set: function(K) {
              I = K, !E.name && !E.displayName && (E.displayName = K);
            }
          });
        }
        return R;
      }
      var x;
      x = Symbol.for("react.module.reference");
      function ie(E) {
        return !!(typeof E == "string" || typeof E == "function" || E === O || E === U || at || E === _ || E === V || E === G || Ye || E === Ee || gt || st || Ct || typeof E == "object" && E !== null && (E.$$typeof === re || E.$$typeof === q || E.$$typeof === F || E.$$typeof === z || E.$$typeof === Q || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        E.$$typeof === x || E.getModuleId !== void 0));
      }
      function me(E, R) {
        ie(E) || ee("memo: The first argument must be a component. Instead received: %s", E === null ? "null" : typeof E);
        var I = {
          $$typeof: q,
          type: E,
          compare: R === void 0 ? null : R
        };
        {
          var K;
          Object.defineProperty(I, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return K;
            },
            set: function(pe) {
              K = pe, !E.name && !E.displayName && (E.displayName = pe);
            }
          });
        }
        return I;
      }
      function _e() {
        var E = de.current;
        return E === null && ee(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), E;
      }
      function xt(E) {
        var R = _e();
        if (E._context !== void 0) {
          var I = E._context;
          I.Consumer === E ? ee("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : I.Provider === E && ee("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return R.useContext(E);
      }
      function kt(E) {
        var R = _e();
        return R.useState(E);
      }
      function St(E, R, I) {
        var K = _e();
        return K.useReducer(E, R, I);
      }
      function Ge(E) {
        var R = _e();
        return R.useRef(E);
      }
      function Yn(E, R) {
        var I = _e();
        return I.useEffect(E, R);
      }
      function an(E, R) {
        var I = _e();
        return I.useInsertionEffect(E, R);
      }
      function on(E, R) {
        var I = _e();
        return I.useLayoutEffect(E, R);
      }
      function Dr(E, R) {
        var I = _e();
        return I.useCallback(E, R);
      }
      function Ei(E, R) {
        var I = _e();
        return I.useMemo(E, R);
      }
      function ln(E, R, I) {
        var K = _e();
        return K.useImperativeHandle(E, R, I);
      }
      function Gr(E, R) {
        {
          var I = _e();
          return I.useDebugValue(E, R);
        }
      }
      function Ss() {
        var E = _e();
        return E.useTransition();
      }
      function _i(E) {
        var R = _e();
        return R.useDeferredValue(E);
      }
      function bt() {
        var E = _e();
        return E.useId();
      }
      function yl(E, R, I) {
        var K = _e();
        return K.useSyncExternalStore(E, R, I);
      }
      var Ki = 0, Ao, Kr, Cs, Lr, Ts, bs, ws;
      function gl() {
      }
      gl.__reactDisabledLog = !0;
      function su() {
        {
          if (Ki === 0) {
            Ao = console.log, Kr = console.info, Cs = console.warn, Lr = console.error, Ts = console.group, bs = console.groupCollapsed, ws = console.groupEnd;
            var E = {
              configurable: !0,
              enumerable: !0,
              value: gl,
              writable: !0
            };
            Object.defineProperties(console, {
              info: E,
              log: E,
              warn: E,
              error: E,
              group: E,
              groupCollapsed: E,
              groupEnd: E
            });
          }
          Ki++;
        }
      }
      function Qi() {
        {
          if (Ki--, Ki === 0) {
            var E = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: We({}, E, {
                value: Ao
              }),
              info: We({}, E, {
                value: Kr
              }),
              warn: We({}, E, {
                value: Cs
              }),
              error: We({}, E, {
                value: Lr
              }),
              group: We({}, E, {
                value: Ts
              }),
              groupCollapsed: We({}, E, {
                value: bs
              }),
              groupEnd: We({}, E, {
                value: ws
              })
            });
          }
          Ki < 0 && ee("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Si = lt.ReactCurrentDispatcher, Ma;
      function ko(E, R, I) {
        {
          if (Ma === void 0)
            try {
              throw Error();
            } catch (pe) {
              var K = pe.stack.trim().match(/\n( *(at )?)/);
              Ma = K && K[1] || "";
            }
          return `
` + Ma + E;
        }
      }
      var Ci = !1, El;
      {
        var _l = typeof WeakMap == "function" ? WeakMap : Map;
        El = new _l();
      }
      function No(E, R) {
        if (!E || Ci)
          return "";
        {
          var I = El.get(E);
          if (I !== void 0)
            return I;
        }
        var K;
        Ci = !0;
        var pe = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Ue;
        Ue = Si.current, Si.current = null, su();
        try {
          if (R) {
            var xe = function() {
              throw Error();
            };
            if (Object.defineProperty(xe.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(xe, []);
              } catch (Ut) {
                K = Ut;
              }
              Reflect.construct(E, [], xe);
            } else {
              try {
                xe.call();
              } catch (Ut) {
                K = Ut;
              }
              E.call(xe.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Ut) {
              K = Ut;
            }
            E();
          }
        } catch (Ut) {
          if (Ut && K && typeof Ut.stack == "string") {
            for (var it = Ut.stack.split(`
`), wt = K.stack.split(`
`), Yt = it.length - 1, Qt = wt.length - 1; Yt >= 1 && Qt >= 0 && it[Yt] !== wt[Qt]; )
              Qt--;
            for (; Yt >= 1 && Qt >= 0; Yt--, Qt--)
              if (it[Yt] !== wt[Qt]) {
                if (Yt !== 1 || Qt !== 1)
                  do
                    if (Yt--, Qt--, Qt < 0 || it[Yt] !== wt[Qt]) {
                      var qt = `
` + it[Yt].replace(" at new ", " at ");
                      return E.displayName && qt.includes("<anonymous>") && (qt = qt.replace("<anonymous>", E.displayName)), typeof E == "function" && El.set(E, qt), qt;
                    }
                  while (Yt >= 1 && Qt >= 0);
                break;
              }
          }
        } finally {
          Ci = !1, Si.current = Ue, Qi(), Error.prepareStackTrace = pe;
        }
        var Xt = E ? E.displayName || E.name : "", fn = Xt ? ko(Xt) : "";
        return typeof E == "function" && El.set(E, fn), fn;
      }
      function Rs(E, R, I) {
        return No(E, !1);
      }
      function xs(E) {
        var R = E.prototype;
        return !!(R && R.isReactComponent);
      }
      function At(E, R, I) {
        if (E == null)
          return "";
        if (typeof E == "function")
          return No(E, xs(E));
        if (typeof E == "string")
          return ko(E);
        switch (E) {
          case V:
            return ko("Suspense");
          case G:
            return ko("SuspenseList");
        }
        if (typeof E == "object")
          switch (E.$$typeof) {
            case Q:
              return Rs(E.render);
            case q:
              return At(E.type, R, I);
            case re: {
              var K = E, pe = K._payload, Ue = K._init;
              try {
                return At(Ue(pe), R, I);
              } catch {
              }
            }
          }
        return "";
      }
      var Ds = {}, cu = lt.ReactDebugCurrentFrame;
      function Lo(E) {
        if (E) {
          var R = E._owner, I = At(E.type, E._source, R ? R.type : null);
          cu.setExtraStackFrame(I);
        } else
          cu.setExtraStackFrame(null);
      }
      function Os(E, R, I, K, pe) {
        {
          var Ue = Function.call.bind(br);
          for (var xe in E)
            if (Ue(E, xe)) {
              var it = void 0;
              try {
                if (typeof E[xe] != "function") {
                  var wt = Error((K || "React class") + ": " + I + " type `" + xe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof E[xe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw wt.name = "Invariant Violation", wt;
                }
                it = E[xe](R, xe, K, I, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Yt) {
                it = Yt;
              }
              it && !(it instanceof Error) && (Lo(pe), ee("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", K || "React class", I, xe, typeof it), Lo(null)), it instanceof Error && !(it.message in Ds) && (Ds[it.message] = !0, Lo(pe), ee("Failed %s type: %s", I, it.message), Lo(null));
            }
        }
      }
      function zt(E) {
        if (E) {
          var R = E._owner, I = At(E.type, E._source, R ? R.type : null);
          Et(I);
        } else
          Et(null);
      }
      var fu;
      fu = !1;
      function Sl() {
        if ($e.current) {
          var E = yn($e.current.type);
          if (E)
            return `

Check the render method of \`` + E + "`.";
        }
        return "";
      }
      function ft(E) {
        if (E !== void 0) {
          var R = E.fileName.replace(/^.*[\\\/]/, ""), I = E.lineNumber;
          return `

Check your code at ` + R + ":" + I + ".";
        }
        return "";
      }
      function oi(E) {
        return E != null ? ft(E.__source) : "";
      }
      var Sn = {};
      function Qr(E) {
        var R = Sl();
        if (!R) {
          var I = typeof E == "string" ? E : E.displayName || E.name;
          I && (R = `

Check the top-level render call using <` + I + ">.");
        }
        return R;
      }
      function za(E, R) {
        if (!(!E._store || E._store.validated || E.key != null)) {
          E._store.validated = !0;
          var I = Qr(R);
          if (!Sn[I]) {
            Sn[I] = !0;
            var K = "";
            E && E._owner && E._owner !== $e.current && (K = " It was passed a child from " + yn(E._owner.type) + "."), zt(E), ee('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', I, K), zt(null);
          }
        }
      }
      function Mo(E, R) {
        if (typeof E == "object") {
          if (hn(E))
            for (var I = 0; I < E.length; I++) {
              var K = E[I];
              $t(K) && za(K, R);
            }
          else if ($t(E))
            E._store && (E._store.validated = !0);
          else if (E) {
            var pe = Re(E);
            if (typeof pe == "function" && pe !== E.entries)
              for (var Ue = pe.call(E), xe; !(xe = Ue.next()).done; )
                $t(xe.value) && za(xe.value, R);
          }
        }
      }
      function cn(E) {
        {
          var R = E.type;
          if (R == null || typeof R == "string")
            return;
          var I;
          if (typeof R == "function")
            I = R.propTypes;
          else if (typeof R == "object" && (R.$$typeof === Q || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          R.$$typeof === q))
            I = R.propTypes;
          else
            return;
          if (I) {
            var K = yn(R);
            Os(I, E.props, "prop", K, E);
          } else if (R.PropTypes !== void 0 && !fu) {
            fu = !0;
            var pe = yn(R);
            ee("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", pe || "Unknown");
          }
          typeof R.getDefaultProps == "function" && !R.getDefaultProps.isReactClassApproved && ee("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Cn(E) {
        {
          for (var R = Object.keys(E.props), I = 0; I < R.length; I++) {
            var K = R[I];
            if (K !== "children" && K !== "key") {
              zt(E), ee("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", K), zt(null);
              break;
            }
          }
          E.ref !== null && (zt(E), ee("Invalid attribute `ref` supplied to `React.Fragment`."), zt(null));
        }
      }
      function As(E, R, I) {
        var K = ie(E);
        if (!K) {
          var pe = "";
          (E === void 0 || typeof E == "object" && E !== null && Object.keys(E).length === 0) && (pe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ue = oi(R);
          Ue ? pe += Ue : pe += Sl();
          var xe;
          E === null ? xe = "null" : hn(E) ? xe = "array" : E !== void 0 && E.$$typeof === T ? (xe = "<" + (yn(E.type) || "Unknown") + " />", pe = " Did you accidentally export a JSX literal instead of a component?") : xe = typeof E, ee("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", xe, pe);
        }
        var it = Be.apply(this, arguments);
        if (it == null)
          return it;
        if (K)
          for (var wt = 2; wt < arguments.length; wt++)
            Mo(arguments[wt], E);
        return E === O ? Cn(it) : cn(it), it;
      }
      var fr = !1;
      function qr(E) {
        var R = As.bind(null, E);
        return R.type = E, fr || (fr = !0, Ke("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(R, "type", {
          enumerable: !1,
          get: function() {
            return Ke("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: E
            }), E;
          }
        }), R;
      }
      function li(E, R, I) {
        for (var K = It.apply(this, arguments), pe = 2; pe < arguments.length; pe++)
          Mo(arguments[pe], K.type);
        return cn(K), K;
      }
      function du(E, R) {
        var I = Ae.transition;
        Ae.transition = {};
        var K = Ae.transition;
        Ae.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          E();
        } finally {
          if (Ae.transition = I, I === null && K._updatedFibers) {
            var pe = K._updatedFibers.size;
            pe > 10 && Ke("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), K._updatedFibers.clear();
          }
        }
      }
      var Cl = !1, Tl = null;
      function zo(E) {
        if (Tl === null)
          try {
            var R = ("require" + Math.random()).slice(0, 7), I = v && v[R];
            Tl = I.call(v, "timers").setImmediate;
          } catch {
            Tl = function(pe) {
              Cl === !1 && (Cl = !0, typeof MessageChannel > "u" && ee("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Ue = new MessageChannel();
              Ue.port1.onmessage = pe, Ue.port2.postMessage(void 0);
            };
          }
        return Tl(E);
      }
      var Ua = 0, qi = !1;
      function pu(E) {
        {
          var R = Ua;
          Ua++, ce.current === null && (ce.current = []);
          var I = ce.isBatchingLegacy, K;
          try {
            if (ce.isBatchingLegacy = !0, K = E(), !I && ce.didScheduleLegacyUpdate) {
              var pe = ce.current;
              pe !== null && (ce.didScheduleLegacyUpdate = !1, Zi(pe));
            }
          } catch (Xt) {
            throw Xi(R), Xt;
          } finally {
            ce.isBatchingLegacy = I;
          }
          if (K !== null && typeof K == "object" && typeof K.then == "function") {
            var Ue = K, xe = !1, it = {
              then: function(Xt, fn) {
                xe = !0, Ue.then(function(Ut) {
                  Xi(R), Ua === 0 ? vu(Ut, Xt, fn) : Xt(Ut);
                }, function(Ut) {
                  Xi(R), fn(Ut);
                });
              }
            };
            return !qi && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              xe || (qi = !0, ee("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), it;
          } else {
            var wt = K;
            if (Xi(R), Ua === 0) {
              var Yt = ce.current;
              Yt !== null && (Zi(Yt), ce.current = null);
              var Qt = {
                then: function(Xt, fn) {
                  ce.current === null ? (ce.current = [], vu(wt, Xt, fn)) : Xt(wt);
                }
              };
              return Qt;
            } else {
              var qt = {
                then: function(Xt, fn) {
                  Xt(wt);
                }
              };
              return qt;
            }
          }
        }
      }
      function Xi(E) {
        E !== Ua - 1 && ee("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ua = E;
      }
      function vu(E, R, I) {
        {
          var K = ce.current;
          if (K !== null)
            try {
              Zi(K), zo(function() {
                K.length === 0 ? (ce.current = null, R(E)) : vu(E, R, I);
              });
            } catch (pe) {
              I(pe);
            }
          else
            R(E);
        }
      }
      var Ti = !1;
      function Zi(E) {
        if (!Ti) {
          Ti = !0;
          var R = 0;
          try {
            for (; R < E.length; R++) {
              var I = E[R];
              do
                I = I(!0);
              while (I !== null);
            }
            E.length = 0;
          } catch (K) {
            throw E = E.slice(R + 1), K;
          } finally {
            Ti = !1;
          }
        }
      }
      var hu = As, ks = li, ui = qr, mu = {
        map: Na,
        forEach: hl,
        count: Do,
        toArray: ml,
        only: Oo
      };
      u.Children = mu, u.Component = ct, u.Fragment = O, u.Profiler = U, u.PureComponent = Qn, u.StrictMode = _, u.Suspense = V, u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lt, u.cloneElement = ks, u.createContext = ai, u.createElement = hu, u.createFactory = ui, u.createRef = Tr, u.forwardRef = Gi, u.isValidElement = $t, u.lazy = ya, u.memo = me, u.startTransition = du, u.unstable_act = pu, u.useCallback = Dr, u.useContext = xt, u.useDebugValue = Gr, u.useDeferredValue = _i, u.useEffect = Yn, u.useId = bt, u.useImperativeHandle = ln, u.useInsertionEffect = an, u.useLayoutEffect = on, u.useMemo = Ei, u.useReducer = St, u.useRef = Ge, u.useState = kt, u.useSyncExternalStore = yl, u.useTransition = Ss, u.version = g, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Kv, Kv.exports)), Kv.exports;
}
var Mt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gw;
function sN() {
  if (gw)
    return Mt;
  gw = 1;
  var v = Symbol.for("react.element"), u = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), D = Symbol.for("react.provider"), O = Symbol.for("react.context"), _ = Symbol.for("react.forward_ref"), U = Symbol.for("react.suspense"), F = Symbol.for("react.memo"), z = Symbol.for("react.lazy"), Q = Symbol.iterator;
  function V(A) {
    return A === null || typeof A != "object" ? null : (A = Q && A[Q] || A["@@iterator"], typeof A == "function" ? A : null);
  }
  var G = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, q = Object.assign, re = {};
  function Ee(A, te, Te) {
    this.props = A, this.context = te, this.refs = re, this.updater = Te || G;
  }
  Ee.prototype.isReactComponent = {}, Ee.prototype.setState = function(A, te) {
    if (typeof A != "object" && typeof A != "function" && A != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, A, te, "setState");
  }, Ee.prototype.forceUpdate = function(A) {
    this.updater.enqueueForceUpdate(this, A, "forceUpdate");
  };
  function Ze() {
  }
  Ze.prototype = Ee.prototype;
  function Je(A, te, Te) {
    this.props = A, this.context = te, this.refs = re, this.updater = Te || G;
  }
  var Re = Je.prototype = new Ze();
  Re.constructor = Je, q(Re, Ee.prototype), Re.isPureReactComponent = !0;
  var de = Array.isArray, Ae = Object.prototype.hasOwnProperty, ce = { current: null }, $e = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ne(A, te, Te) {
    var We, Ie = {}, ct = null, dt = null;
    if (te != null)
      for (We in te.ref !== void 0 && (dt = te.ref), te.key !== void 0 && (ct = "" + te.key), te)
        Ae.call(te, We) && !$e.hasOwnProperty(We) && (Ie[We] = te[We]);
    var _t = arguments.length - 2;
    if (_t === 1)
      Ie.children = Te;
    else if (1 < _t) {
      for (var ut = Array(_t), Gt = 0; Gt < _t; Gt++)
        ut[Gt] = arguments[Gt + 2];
      Ie.children = ut;
    }
    if (A && A.defaultProps)
      for (We in _t = A.defaultProps, _t)
        Ie[We] === void 0 && (Ie[We] = _t[We]);
    return { $$typeof: v, type: A, key: ct, ref: dt, props: Ie, _owner: ce.current };
  }
  function Rt(A, te) {
    return { $$typeof: v, type: A.type, key: te, ref: A.ref, props: A.props, _owner: A._owner };
  }
  function Et(A) {
    return typeof A == "object" && A !== null && A.$$typeof === v;
  }
  function gt(A) {
    var te = { "=": "=0", ":": "=2" };
    return "$" + A.replace(/[=:]/g, function(Te) {
      return te[Te];
    });
  }
  var st = /\/+/g;
  function Ct(A, te) {
    return typeof A == "object" && A !== null && A.key != null ? gt("" + A.key) : te.toString(36);
  }
  function Ye(A, te, Te, We, Ie) {
    var ct = typeof A;
    (ct === "undefined" || ct === "boolean") && (A = null);
    var dt = !1;
    if (A === null)
      dt = !0;
    else
      switch (ct) {
        case "string":
        case "number":
          dt = !0;
          break;
        case "object":
          switch (A.$$typeof) {
            case v:
            case u:
              dt = !0;
          }
      }
    if (dt)
      return dt = A, Ie = Ie(dt), A = We === "" ? "." + Ct(dt, 0) : We, de(Ie) ? (Te = "", A != null && (Te = A.replace(st, "$&/") + "/"), Ye(Ie, te, Te, "", function(Gt) {
        return Gt;
      })) : Ie != null && (Et(Ie) && (Ie = Rt(Ie, Te + (!Ie.key || dt && dt.key === Ie.key ? "" : ("" + Ie.key).replace(st, "$&/") + "/") + A)), te.push(Ie)), 1;
    if (dt = 0, We = We === "" ? "." : We + ":", de(A))
      for (var _t = 0; _t < A.length; _t++) {
        ct = A[_t];
        var ut = We + Ct(ct, _t);
        dt += Ye(ct, te, Te, ut, Ie);
      }
    else if (ut = V(A), typeof ut == "function")
      for (A = ut.call(A), _t = 0; !(ct = A.next()).done; )
        ct = ct.value, ut = We + Ct(ct, _t++), dt += Ye(ct, te, Te, ut, Ie);
    else if (ct === "object")
      throw te = String(A), Error("Objects are not valid as a React child (found: " + (te === "[object Object]" ? "object with keys {" + Object.keys(A).join(", ") + "}" : te) + "). If you meant to render a collection of children, use an array instead.");
    return dt;
  }
  function at(A, te, Te) {
    if (A == null)
      return A;
    var We = [], Ie = 0;
    return Ye(A, We, "", "", function(ct) {
      return te.call(Te, ct, Ie++);
    }), We;
  }
  function lt(A) {
    if (A._status === -1) {
      var te = A._result;
      te = te(), te.then(function(Te) {
        (A._status === 0 || A._status === -1) && (A._status = 1, A._result = Te);
      }, function(Te) {
        (A._status === 0 || A._status === -1) && (A._status = 2, A._result = Te);
      }), A._status === -1 && (A._status = 0, A._result = te);
    }
    if (A._status === 1)
      return A._result.default;
    throw A._result;
  }
  var Ke = { current: null }, ee = { transition: null }, Se = { ReactCurrentDispatcher: Ke, ReactCurrentBatchConfig: ee, ReactCurrentOwner: ce };
  return Mt.Children = { map: at, forEach: function(A, te, Te) {
    at(A, function() {
      te.apply(this, arguments);
    }, Te);
  }, count: function(A) {
    var te = 0;
    return at(A, function() {
      te++;
    }), te;
  }, toArray: function(A) {
    return at(A, function(te) {
      return te;
    }) || [];
  }, only: function(A) {
    if (!Et(A))
      throw Error("React.Children.only expected to receive a single React element child.");
    return A;
  } }, Mt.Component = Ee, Mt.Fragment = f, Mt.Profiler = T, Mt.PureComponent = Je, Mt.StrictMode = g, Mt.Suspense = U, Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Se, Mt.cloneElement = function(A, te, Te) {
    if (A == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + A + ".");
    var We = q({}, A.props), Ie = A.key, ct = A.ref, dt = A._owner;
    if (te != null) {
      if (te.ref !== void 0 && (ct = te.ref, dt = ce.current), te.key !== void 0 && (Ie = "" + te.key), A.type && A.type.defaultProps)
        var _t = A.type.defaultProps;
      for (ut in te)
        Ae.call(te, ut) && !$e.hasOwnProperty(ut) && (We[ut] = te[ut] === void 0 && _t !== void 0 ? _t[ut] : te[ut]);
    }
    var ut = arguments.length - 2;
    if (ut === 1)
      We.children = Te;
    else if (1 < ut) {
      _t = Array(ut);
      for (var Gt = 0; Gt < ut; Gt++)
        _t[Gt] = arguments[Gt + 2];
      We.children = _t;
    }
    return { $$typeof: v, type: A.type, key: Ie, ref: ct, props: We, _owner: dt };
  }, Mt.createContext = function(A) {
    return A = { $$typeof: O, _currentValue: A, _currentValue2: A, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, A.Provider = { $$typeof: D, _context: A }, A.Consumer = A;
  }, Mt.createElement = Ne, Mt.createFactory = function(A) {
    var te = Ne.bind(null, A);
    return te.type = A, te;
  }, Mt.createRef = function() {
    return { current: null };
  }, Mt.forwardRef = function(A) {
    return { $$typeof: _, render: A };
  }, Mt.isValidElement = Et, Mt.lazy = function(A) {
    return { $$typeof: z, _payload: { _status: -1, _result: A }, _init: lt };
  }, Mt.memo = function(A, te) {
    return { $$typeof: F, type: A, compare: te === void 0 ? null : te };
  }, Mt.startTransition = function(A) {
    var te = ee.transition;
    ee.transition = {};
    try {
      A();
    } finally {
      ee.transition = te;
    }
  }, Mt.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, Mt.useCallback = function(A, te) {
    return Ke.current.useCallback(A, te);
  }, Mt.useContext = function(A) {
    return Ke.current.useContext(A);
  }, Mt.useDebugValue = function() {
  }, Mt.useDeferredValue = function(A) {
    return Ke.current.useDeferredValue(A);
  }, Mt.useEffect = function(A, te) {
    return Ke.current.useEffect(A, te);
  }, Mt.useId = function() {
    return Ke.current.useId();
  }, Mt.useImperativeHandle = function(A, te, Te) {
    return Ke.current.useImperativeHandle(A, te, Te);
  }, Mt.useInsertionEffect = function(A, te) {
    return Ke.current.useInsertionEffect(A, te);
  }, Mt.useLayoutEffect = function(A, te) {
    return Ke.current.useLayoutEffect(A, te);
  }, Mt.useMemo = function(A, te) {
    return Ke.current.useMemo(A, te);
  }, Mt.useReducer = function(A, te, Te) {
    return Ke.current.useReducer(A, te, Te);
  }, Mt.useRef = function(A) {
    return Ke.current.useRef(A);
  }, Mt.useState = function(A) {
    return Ke.current.useState(A);
  }, Mt.useSyncExternalStore = function(A, te, Te) {
    return Ke.current.useSyncExternalStore(A, te, Te);
  }, Mt.useTransition = function() {
    return Ke.current.useTransition();
  }, Mt.version = "18.2.0", Mt;
}
var cN = {};
cN.NODE_ENV === "production" ? u0.exports = sN() : u0.exports = uN();
var mt = u0.exports;
const fN = /* @__PURE__ */ sR(mt);
var Ew;
function dN() {
  if (Ew)
    return Iv;
  Ew = 1;
  var v = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return v.NODE_ENV !== "production" && function() {
    var u = mt, f = Symbol.for("react.element"), g = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), D = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), _ = Symbol.for("react.provider"), U = Symbol.for("react.context"), F = Symbol.for("react.forward_ref"), z = Symbol.for("react.suspense"), Q = Symbol.for("react.suspense_list"), V = Symbol.for("react.memo"), G = Symbol.for("react.lazy"), q = Symbol.for("react.offscreen"), re = Symbol.iterator, Ee = "@@iterator";
    function Ze(x) {
      if (x === null || typeof x != "object")
        return null;
      var ie = re && x[re] || x[Ee];
      return typeof ie == "function" ? ie : null;
    }
    var Je = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function Re(x) {
      {
        for (var ie = arguments.length, me = new Array(ie > 1 ? ie - 1 : 0), _e = 1; _e < ie; _e++)
          me[_e - 1] = arguments[_e];
        de("error", x, me);
      }
    }
    function de(x, ie, me) {
      {
        var _e = Je.ReactDebugCurrentFrame, xt = _e.getStackAddendum();
        xt !== "" && (ie += "%s", me = me.concat([xt]));
        var kt = me.map(function(St) {
          return String(St);
        });
        kt.unshift("Warning: " + ie), Function.prototype.apply.call(console[x], console, kt);
      }
    }
    var Ae = !1, ce = !1, $e = !1, Ne = !1, Rt = !1, Et;
    Et = Symbol.for("react.module.reference");
    function gt(x) {
      return !!(typeof x == "string" || typeof x == "function" || x === T || x === O || Rt || x === D || x === z || x === Q || Ne || x === q || Ae || ce || $e || typeof x == "object" && x !== null && (x.$$typeof === G || x.$$typeof === V || x.$$typeof === _ || x.$$typeof === U || x.$$typeof === F || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      x.$$typeof === Et || x.getModuleId !== void 0));
    }
    function st(x, ie, me) {
      var _e = x.displayName;
      if (_e)
        return _e;
      var xt = ie.displayName || ie.name || "";
      return xt !== "" ? me + "(" + xt + ")" : me;
    }
    function Ct(x) {
      return x.displayName || "Context";
    }
    function Ye(x) {
      if (x == null)
        return null;
      if (typeof x.tag == "number" && Re("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof x == "function")
        return x.displayName || x.name || null;
      if (typeof x == "string")
        return x;
      switch (x) {
        case T:
          return "Fragment";
        case g:
          return "Portal";
        case O:
          return "Profiler";
        case D:
          return "StrictMode";
        case z:
          return "Suspense";
        case Q:
          return "SuspenseList";
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case U:
            var ie = x;
            return Ct(ie) + ".Consumer";
          case _:
            var me = x;
            return Ct(me._context) + ".Provider";
          case F:
            return st(x, x.render, "ForwardRef");
          case V:
            var _e = x.displayName || null;
            return _e !== null ? _e : Ye(x.type) || "Memo";
          case G: {
            var xt = x, kt = xt._payload, St = xt._init;
            try {
              return Ye(St(kt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var at = Object.assign, lt = 0, Ke, ee, Se, A, te, Te, We;
    function Ie() {
    }
    Ie.__reactDisabledLog = !0;
    function ct() {
      {
        if (lt === 0) {
          Ke = console.log, ee = console.info, Se = console.warn, A = console.error, te = console.group, Te = console.groupCollapsed, We = console.groupEnd;
          var x = {
            configurable: !0,
            enumerable: !0,
            value: Ie,
            writable: !0
          };
          Object.defineProperties(console, {
            info: x,
            log: x,
            warn: x,
            error: x,
            group: x,
            groupCollapsed: x,
            groupEnd: x
          });
        }
        lt++;
      }
    }
    function dt() {
      {
        if (lt--, lt === 0) {
          var x = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: at({}, x, {
              value: Ke
            }),
            info: at({}, x, {
              value: ee
            }),
            warn: at({}, x, {
              value: Se
            }),
            error: at({}, x, {
              value: A
            }),
            group: at({}, x, {
              value: te
            }),
            groupCollapsed: at({}, x, {
              value: Te
            }),
            groupEnd: at({}, x, {
              value: We
            })
          });
        }
        lt < 0 && Re("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var _t = Je.ReactCurrentDispatcher, ut;
    function Gt(x, ie, me) {
      {
        if (ut === void 0)
          try {
            throw Error();
          } catch (xt) {
            var _e = xt.stack.trim().match(/\n( *(at )?)/);
            ut = _e && _e[1] || "";
          }
        return `
` + ut + x;
      }
    }
    var Qn = !1, Mn;
    {
      var Tr = typeof WeakMap == "function" ? WeakMap : Map;
      Mn = new Tr();
    }
    function qn(x, ie) {
      if (!x || Qn)
        return "";
      {
        var me = Mn.get(x);
        if (me !== void 0)
          return me;
      }
      var _e;
      Qn = !0;
      var xt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var kt;
      kt = _t.current, _t.current = null, ct();
      try {
        if (ie) {
          var St = function() {
            throw Error();
          };
          if (Object.defineProperty(St.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(St, []);
            } catch (Gr) {
              _e = Gr;
            }
            Reflect.construct(x, [], St);
          } else {
            try {
              St.call();
            } catch (Gr) {
              _e = Gr;
            }
            x.call(St.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Gr) {
            _e = Gr;
          }
          x();
        }
      } catch (Gr) {
        if (Gr && _e && typeof Gr.stack == "string") {
          for (var Ge = Gr.stack.split(`
`), Yn = _e.stack.split(`
`), an = Ge.length - 1, on = Yn.length - 1; an >= 1 && on >= 0 && Ge[an] !== Yn[on]; )
            on--;
          for (; an >= 1 && on >= 0; an--, on--)
            if (Ge[an] !== Yn[on]) {
              if (an !== 1 || on !== 1)
                do
                  if (an--, on--, on < 0 || Ge[an] !== Yn[on]) {
                    var Dr = `
` + Ge[an].replace(" at new ", " at ");
                    return x.displayName && Dr.includes("<anonymous>") && (Dr = Dr.replace("<anonymous>", x.displayName)), typeof x == "function" && Mn.set(x, Dr), Dr;
                  }
                while (an >= 1 && on >= 0);
              break;
            }
        }
      } finally {
        Qn = !1, _t.current = kt, dt(), Error.prepareStackTrace = xt;
      }
      var Ei = x ? x.displayName || x.name : "", ln = Ei ? Gt(Ei) : "";
      return typeof x == "function" && Mn.set(x, ln), ln;
    }
    function hn(x, ie, me) {
      return qn(x, !1);
    }
    function Xn(x) {
      var ie = x.prototype;
      return !!(ie && ie.isReactComponent);
    }
    function Rn(x, ie, me) {
      if (x == null)
        return "";
      if (typeof x == "function")
        return qn(x, Xn(x));
      if (typeof x == "string")
        return Gt(x);
      switch (x) {
        case z:
          return Gt("Suspense");
        case Q:
          return Gt("SuspenseList");
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case F:
            return hn(x.render);
          case V:
            return Rn(x.type, ie, me);
          case G: {
            var _e = x, xt = _e._payload, kt = _e._init;
            try {
              return Rn(kt(xt), ie, me);
            } catch {
            }
          }
        }
      return "";
    }
    var En = Object.prototype.hasOwnProperty, xn = {}, cr = Je.ReactDebugCurrentFrame;
    function mn(x) {
      if (x) {
        var ie = x._owner, me = Rn(x.type, x._source, ie ? ie.type : null);
        cr.setExtraStackFrame(me);
      } else
        cr.setExtraStackFrame(null);
    }
    function yn(x, ie, me, _e, xt) {
      {
        var kt = Function.call.bind(En);
        for (var St in x)
          if (kt(x, St)) {
            var Ge = void 0;
            try {
              if (typeof x[St] != "function") {
                var Yn = Error((_e || "React class") + ": " + me + " type `" + St + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof x[St] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Yn.name = "Invariant Violation", Yn;
              }
              Ge = x[St](ie, St, _e, me, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (an) {
              Ge = an;
            }
            Ge && !(Ge instanceof Error) && (mn(xt), Re("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", _e || "React class", me, St, typeof Ge), mn(null)), Ge instanceof Error && !(Ge.message in xn) && (xn[Ge.message] = !0, mn(xt), Re("Failed %s type: %s", me, Ge.message), mn(null));
          }
      }
    }
    var br = Array.isArray;
    function wr(x) {
      return br(x);
    }
    function In(x) {
      {
        var ie = typeof Symbol == "function" && Symbol.toStringTag, me = ie && x[Symbol.toStringTag] || x.constructor.name || "Object";
        return me;
      }
    }
    function Rr(x) {
      try {
        return Bn(x), !1;
      } catch {
        return !0;
      }
    }
    function Bn(x) {
      return "" + x;
    }
    function rr(x) {
      if (Rr(x))
        return Re("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", In(x)), Bn(x);
    }
    var en = Je.ReactCurrentOwner, va = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ha, ma, ge;
    ge = {};
    function Be(x) {
      if (En.call(x, "ref")) {
        var ie = Object.getOwnPropertyDescriptor(x, "ref").get;
        if (ie && ie.isReactWarning)
          return !1;
      }
      return x.ref !== void 0;
    }
    function Tt(x) {
      if (En.call(x, "key")) {
        var ie = Object.getOwnPropertyDescriptor(x, "key").get;
        if (ie && ie.isReactWarning)
          return !1;
      }
      return x.key !== void 0;
    }
    function It(x, ie) {
      if (typeof x.ref == "string" && en.current && ie && en.current.stateNode !== ie) {
        var me = Ye(en.current.type);
        ge[me] || (Re('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Ye(en.current.type), x.ref), ge[me] = !0);
      }
    }
    function $t(x, ie) {
      {
        var me = function() {
          ha || (ha = !0, Re("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ie));
        };
        me.isReactWarning = !0, Object.defineProperty(x, "key", {
          get: me,
          configurable: !0
        });
      }
    }
    function zn(x, ie) {
      {
        var me = function() {
          ma || (ma = !0, Re("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ie));
        };
        me.isReactWarning = !0, Object.defineProperty(x, "ref", {
          get: me,
          configurable: !0
        });
      }
    }
    var _n = function(x, ie, me, _e, xt, kt, St) {
      var Ge = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: f,
        // Built-in properties that belong on the element
        type: x,
        key: ie,
        ref: me,
        props: St,
        // Record the component responsible for creating this element.
        _owner: kt
      };
      return Ge._store = {}, Object.defineProperty(Ge._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Ge, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _e
      }), Object.defineProperty(Ge, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: xt
      }), Object.freeze && (Object.freeze(Ge.props), Object.freeze(Ge)), Ge;
    };
    function xr(x, ie, me, _e, xt) {
      {
        var kt, St = {}, Ge = null, Yn = null;
        me !== void 0 && (rr(me), Ge = "" + me), Tt(ie) && (rr(ie.key), Ge = "" + ie.key), Be(ie) && (Yn = ie.ref, It(ie, xt));
        for (kt in ie)
          En.call(ie, kt) && !va.hasOwnProperty(kt) && (St[kt] = ie[kt]);
        if (x && x.defaultProps) {
          var an = x.defaultProps;
          for (kt in an)
            St[kt] === void 0 && (St[kt] = an[kt]);
        }
        if (Ge || Yn) {
          var on = typeof x == "function" ? x.displayName || x.name || "Unknown" : x;
          Ge && $t(St, on), Yn && zn(St, on);
        }
        return _n(x, Ge, Yn, xt, _e, en.current, St);
      }
    }
    var Kt = Je.ReactCurrentOwner, ar = Je.ReactDebugCurrentFrame;
    function Bt(x) {
      if (x) {
        var ie = x._owner, me = Rn(x.type, x._source, ie ? ie.type : null);
        ar.setExtraStackFrame(me);
      } else
        ar.setExtraStackFrame(null);
    }
    var rn;
    rn = !1;
    function ri(x) {
      return typeof x == "object" && x !== null && x.$$typeof === f;
    }
    function Na() {
      {
        if (Kt.current) {
          var x = Ye(Kt.current.type);
          if (x)
            return `

Check the render method of \`` + x + "`.";
        }
        return "";
      }
    }
    function Do(x) {
      {
        if (x !== void 0) {
          var ie = x.fileName.replace(/^.*[\\\/]/, ""), me = x.lineNumber;
          return `

Check your code at ` + ie + ":" + me + ".";
        }
        return "";
      }
    }
    var hl = {};
    function ml(x) {
      {
        var ie = Na();
        if (!ie) {
          var me = typeof x == "string" ? x : x.displayName || x.name;
          me && (ie = `

Check the top-level render call using <` + me + ">.");
        }
        return ie;
      }
    }
    function Oo(x, ie) {
      {
        if (!x._store || x._store.validated || x.key != null)
          return;
        x._store.validated = !0;
        var me = ml(ie);
        if (hl[me])
          return;
        hl[me] = !0;
        var _e = "";
        x && x._owner && x._owner !== Kt.current && (_e = " It was passed a child from " + Ye(x._owner.type) + "."), Bt(x), Re('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', me, _e), Bt(null);
      }
    }
    function ai(x, ie) {
      {
        if (typeof x != "object")
          return;
        if (wr(x))
          for (var me = 0; me < x.length; me++) {
            var _e = x[me];
            ri(_e) && Oo(_e, ie);
          }
        else if (ri(x))
          x._store && (x._store.validated = !0);
        else if (x) {
          var xt = Ze(x);
          if (typeof xt == "function" && xt !== x.entries)
            for (var kt = xt.call(x), St; !(St = kt.next()).done; )
              ri(St.value) && Oo(St.value, ie);
        }
      }
    }
    function ii(x) {
      {
        var ie = x.type;
        if (ie == null || typeof ie == "string")
          return;
        var me;
        if (typeof ie == "function")
          me = ie.propTypes;
        else if (typeof ie == "object" && (ie.$$typeof === F || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ie.$$typeof === V))
          me = ie.propTypes;
        else
          return;
        if (me) {
          var _e = Ye(ie);
          yn(me, x.props, "prop", _e, x);
        } else if (ie.PropTypes !== void 0 && !rn) {
          rn = !0;
          var xt = Ye(ie);
          Re("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", xt || "Unknown");
        }
        typeof ie.getDefaultProps == "function" && !ie.getDefaultProps.isReactClassApproved && Re("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function La(x) {
      {
        for (var ie = Object.keys(x.props), me = 0; me < ie.length; me++) {
          var _e = ie[me];
          if (_e !== "children" && _e !== "key") {
            Bt(x), Re("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", _e), Bt(null);
            break;
          }
        }
        x.ref !== null && (Bt(x), Re("Invalid attribute `ref` supplied to `React.Fragment`."), Bt(null));
      }
    }
    function Wi(x, ie, me, _e, xt, kt) {
      {
        var St = gt(x);
        if (!St) {
          var Ge = "";
          (x === void 0 || typeof x == "object" && x !== null && Object.keys(x).length === 0) && (Ge += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Yn = Do(xt);
          Yn ? Ge += Yn : Ge += Na();
          var an;
          x === null ? an = "null" : wr(x) ? an = "array" : x !== void 0 && x.$$typeof === f ? (an = "<" + (Ye(x.type) || "Unknown") + " />", Ge = " Did you accidentally export a JSX literal instead of a component?") : an = typeof x, Re("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", an, Ge);
        }
        var on = xr(x, ie, me, xt, kt);
        if (on == null)
          return on;
        if (St) {
          var Dr = ie.children;
          if (Dr !== void 0)
            if (_e)
              if (wr(Dr)) {
                for (var Ei = 0; Ei < Dr.length; Ei++)
                  ai(Dr[Ei], x);
                Object.freeze && Object.freeze(Dr);
              } else
                Re("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ai(Dr, x);
        }
        return x === T ? La(on) : ii(on), on;
      }
    }
    function Yr(x, ie, me) {
      return Wi(x, ie, me, !0);
    }
    function Wr(x, ie, me) {
      return Wi(x, ie, me, !1);
    }
    var ya = Wr, Gi = Yr;
    Iv.Fragment = T, Iv.jsx = ya, Iv.jsxs = Gi;
  }(), Iv;
}
var Bv = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _w;
function pN() {
  if (_w)
    return Bv;
  _w = 1;
  var v = mt, u = Symbol.for("react.element"), f = Symbol.for("react.fragment"), g = Object.prototype.hasOwnProperty, T = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, D = { key: !0, ref: !0, __self: !0, __source: !0 };
  function O(_, U, F) {
    var z, Q = {}, V = null, G = null;
    F !== void 0 && (V = "" + F), U.key !== void 0 && (V = "" + U.key), U.ref !== void 0 && (G = U.ref);
    for (z in U)
      g.call(U, z) && !D.hasOwnProperty(z) && (Q[z] = U[z]);
    if (_ && _.defaultProps)
      for (z in U = _.defaultProps, U)
        Q[z] === void 0 && (Q[z] = U[z]);
    return { $$typeof: u, type: _, key: V, ref: G, props: Q, _owner: T.current };
  }
  return Bv.Fragment = f, Bv.jsx = O, Bv.jsxs = O, Bv;
}
var vN = {};
vN.NODE_ENV === "production" ? l0.exports = pN() : l0.exports = dN();
var fe = l0.exports, Qv = {}, s0 = { exports: {} }, ei = {}, Ky = { exports: {} }, BS = {}, Sw;
function hN() {
  return Sw || (Sw = 1, function(v) {
    var u = {};
    /**
     * @license React
     * scheduler.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    u.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var f = !1, g = !1, T = 5;
      function D(ge, Be) {
        var Tt = ge.length;
        ge.push(Be), U(ge, Be, Tt);
      }
      function O(ge) {
        return ge.length === 0 ? null : ge[0];
      }
      function _(ge) {
        if (ge.length === 0)
          return null;
        var Be = ge[0], Tt = ge.pop();
        return Tt !== Be && (ge[0] = Tt, F(ge, Tt, 0)), Be;
      }
      function U(ge, Be, Tt) {
        for (var It = Tt; It > 0; ) {
          var $t = It - 1 >>> 1, zn = ge[$t];
          if (z(zn, Be) > 0)
            ge[$t] = Be, ge[It] = zn, It = $t;
          else
            return;
        }
      }
      function F(ge, Be, Tt) {
        for (var It = Tt, $t = ge.length, zn = $t >>> 1; It < zn; ) {
          var _n = (It + 1) * 2 - 1, xr = ge[_n], Kt = _n + 1, ar = ge[Kt];
          if (z(xr, Be) < 0)
            Kt < $t && z(ar, xr) < 0 ? (ge[It] = ar, ge[Kt] = Be, It = Kt) : (ge[It] = xr, ge[_n] = Be, It = _n);
          else if (Kt < $t && z(ar, Be) < 0)
            ge[It] = ar, ge[Kt] = Be, It = Kt;
          else
            return;
        }
      }
      function z(ge, Be) {
        var Tt = ge.sortIndex - Be.sortIndex;
        return Tt !== 0 ? Tt : ge.id - Be.id;
      }
      var Q = 1, V = 2, G = 3, q = 4, re = 5;
      function Ee(ge, Be) {
      }
      var Ze = typeof performance == "object" && typeof performance.now == "function";
      if (Ze) {
        var Je = performance;
        v.unstable_now = function() {
          return Je.now();
        };
      } else {
        var Re = Date, de = Re.now();
        v.unstable_now = function() {
          return Re.now() - de;
        };
      }
      var Ae = 1073741823, ce = -1, $e = 250, Ne = 5e3, Rt = 1e4, Et = Ae, gt = [], st = [], Ct = 1, Ye = null, at = G, lt = !1, Ke = !1, ee = !1, Se = typeof setTimeout == "function" ? setTimeout : null, A = typeof clearTimeout == "function" ? clearTimeout : null, te = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function Te(ge) {
        for (var Be = O(st); Be !== null; ) {
          if (Be.callback === null)
            _(st);
          else if (Be.startTime <= ge)
            _(st), Be.sortIndex = Be.expirationTime, D(gt, Be);
          else
            return;
          Be = O(st);
        }
      }
      function We(ge) {
        if (ee = !1, Te(ge), !Ke)
          if (O(gt) !== null)
            Ke = !0, rr(Ie);
          else {
            var Be = O(st);
            Be !== null && en(We, Be.startTime - ge);
          }
      }
      function Ie(ge, Be) {
        Ke = !1, ee && (ee = !1, va()), lt = !0;
        var Tt = at;
        try {
          var It;
          if (!g)
            return ct(ge, Be);
        } finally {
          Ye = null, at = Tt, lt = !1;
        }
      }
      function ct(ge, Be) {
        var Tt = Be;
        for (Te(Tt), Ye = O(gt); Ye !== null && !f && !(Ye.expirationTime > Tt && (!ge || mn())); ) {
          var It = Ye.callback;
          if (typeof It == "function") {
            Ye.callback = null, at = Ye.priorityLevel;
            var $t = Ye.expirationTime <= Tt, zn = It($t);
            Tt = v.unstable_now(), typeof zn == "function" ? Ye.callback = zn : Ye === O(gt) && _(gt), Te(Tt);
          } else
            _(gt);
          Ye = O(gt);
        }
        if (Ye !== null)
          return !0;
        var _n = O(st);
        return _n !== null && en(We, _n.startTime - Tt), !1;
      }
      function dt(ge, Be) {
        switch (ge) {
          case Q:
          case V:
          case G:
          case q:
          case re:
            break;
          default:
            ge = G;
        }
        var Tt = at;
        at = ge;
        try {
          return Be();
        } finally {
          at = Tt;
        }
      }
      function _t(ge) {
        var Be;
        switch (at) {
          case Q:
          case V:
          case G:
            Be = G;
            break;
          default:
            Be = at;
            break;
        }
        var Tt = at;
        at = Be;
        try {
          return ge();
        } finally {
          at = Tt;
        }
      }
      function ut(ge) {
        var Be = at;
        return function() {
          var Tt = at;
          at = Be;
          try {
            return ge.apply(this, arguments);
          } finally {
            at = Tt;
          }
        };
      }
      function Gt(ge, Be, Tt) {
        var It = v.unstable_now(), $t;
        if (typeof Tt == "object" && Tt !== null) {
          var zn = Tt.delay;
          typeof zn == "number" && zn > 0 ? $t = It + zn : $t = It;
        } else
          $t = It;
        var _n;
        switch (ge) {
          case Q:
            _n = ce;
            break;
          case V:
            _n = $e;
            break;
          case re:
            _n = Et;
            break;
          case q:
            _n = Rt;
            break;
          case G:
          default:
            _n = Ne;
            break;
        }
        var xr = $t + _n, Kt = {
          id: Ct++,
          callback: Be,
          priorityLevel: ge,
          startTime: $t,
          expirationTime: xr,
          sortIndex: -1
        };
        return $t > It ? (Kt.sortIndex = $t, D(st, Kt), O(gt) === null && Kt === O(st) && (ee ? va() : ee = !0, en(We, $t - It))) : (Kt.sortIndex = xr, D(gt, Kt), !Ke && !lt && (Ke = !0, rr(Ie))), Kt;
      }
      function Qn() {
      }
      function Mn() {
        !Ke && !lt && (Ke = !0, rr(Ie));
      }
      function Tr() {
        return O(gt);
      }
      function qn(ge) {
        ge.callback = null;
      }
      function hn() {
        return at;
      }
      var Xn = !1, Rn = null, En = -1, xn = T, cr = -1;
      function mn() {
        var ge = v.unstable_now() - cr;
        return !(ge < xn);
      }
      function yn() {
      }
      function br(ge) {
        if (ge < 0 || ge > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        ge > 0 ? xn = Math.floor(1e3 / ge) : xn = T;
      }
      var wr = function() {
        if (Rn !== null) {
          var ge = v.unstable_now();
          cr = ge;
          var Be = !0, Tt = !0;
          try {
            Tt = Rn(Be, ge);
          } finally {
            Tt ? In() : (Xn = !1, Rn = null);
          }
        } else
          Xn = !1;
      }, In;
      if (typeof te == "function")
        In = function() {
          te(wr);
        };
      else if (typeof MessageChannel < "u") {
        var Rr = new MessageChannel(), Bn = Rr.port2;
        Rr.port1.onmessage = wr, In = function() {
          Bn.postMessage(null);
        };
      } else
        In = function() {
          Se(wr, 0);
        };
      function rr(ge) {
        Rn = ge, Xn || (Xn = !0, In());
      }
      function en(ge, Be) {
        En = Se(function() {
          ge(v.unstable_now());
        }, Be);
      }
      function va() {
        A(En), En = -1;
      }
      var ha = yn, ma = null;
      v.unstable_IdlePriority = re, v.unstable_ImmediatePriority = Q, v.unstable_LowPriority = q, v.unstable_NormalPriority = G, v.unstable_Profiling = ma, v.unstable_UserBlockingPriority = V, v.unstable_cancelCallback = qn, v.unstable_continueExecution = Mn, v.unstable_forceFrameRate = br, v.unstable_getCurrentPriorityLevel = hn, v.unstable_getFirstCallbackNode = Tr, v.unstable_next = _t, v.unstable_pauseExecution = Qn, v.unstable_requestPaint = ha, v.unstable_runWithPriority = dt, v.unstable_scheduleCallback = Gt, v.unstable_shouldYield = mn, v.unstable_wrapCallback = ut, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(BS)), BS;
}
var YS = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cw;
function mN() {
  return Cw || (Cw = 1, function(v) {
    function u(ee, Se) {
      var A = ee.length;
      ee.push(Se);
      e:
        for (; 0 < A; ) {
          var te = A - 1 >>> 1, Te = ee[te];
          if (0 < T(Te, Se))
            ee[te] = Se, ee[A] = Te, A = te;
          else
            break e;
        }
    }
    function f(ee) {
      return ee.length === 0 ? null : ee[0];
    }
    function g(ee) {
      if (ee.length === 0)
        return null;
      var Se = ee[0], A = ee.pop();
      if (A !== Se) {
        ee[0] = A;
        e:
          for (var te = 0, Te = ee.length, We = Te >>> 1; te < We; ) {
            var Ie = 2 * (te + 1) - 1, ct = ee[Ie], dt = Ie + 1, _t = ee[dt];
            if (0 > T(ct, A))
              dt < Te && 0 > T(_t, ct) ? (ee[te] = _t, ee[dt] = A, te = dt) : (ee[te] = ct, ee[Ie] = A, te = Ie);
            else if (dt < Te && 0 > T(_t, A))
              ee[te] = _t, ee[dt] = A, te = dt;
            else
              break e;
          }
      }
      return Se;
    }
    function T(ee, Se) {
      var A = ee.sortIndex - Se.sortIndex;
      return A !== 0 ? A : ee.id - Se.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var D = performance;
      v.unstable_now = function() {
        return D.now();
      };
    } else {
      var O = Date, _ = O.now();
      v.unstable_now = function() {
        return O.now() - _;
      };
    }
    var U = [], F = [], z = 1, Q = null, V = 3, G = !1, q = !1, re = !1, Ee = typeof setTimeout == "function" ? setTimeout : null, Ze = typeof clearTimeout == "function" ? clearTimeout : null, Je = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Re(ee) {
      for (var Se = f(F); Se !== null; ) {
        if (Se.callback === null)
          g(F);
        else if (Se.startTime <= ee)
          g(F), Se.sortIndex = Se.expirationTime, u(U, Se);
        else
          break;
        Se = f(F);
      }
    }
    function de(ee) {
      if (re = !1, Re(ee), !q)
        if (f(U) !== null)
          q = !0, lt(Ae);
        else {
          var Se = f(F);
          Se !== null && Ke(de, Se.startTime - ee);
        }
    }
    function Ae(ee, Se) {
      q = !1, re && (re = !1, Ze(Ne), Ne = -1), G = !0;
      var A = V;
      try {
        for (Re(Se), Q = f(U); Q !== null && (!(Q.expirationTime > Se) || ee && !gt()); ) {
          var te = Q.callback;
          if (typeof te == "function") {
            Q.callback = null, V = Q.priorityLevel;
            var Te = te(Q.expirationTime <= Se);
            Se = v.unstable_now(), typeof Te == "function" ? Q.callback = Te : Q === f(U) && g(U), Re(Se);
          } else
            g(U);
          Q = f(U);
        }
        if (Q !== null)
          var We = !0;
        else {
          var Ie = f(F);
          Ie !== null && Ke(de, Ie.startTime - Se), We = !1;
        }
        return We;
      } finally {
        Q = null, V = A, G = !1;
      }
    }
    var ce = !1, $e = null, Ne = -1, Rt = 5, Et = -1;
    function gt() {
      return !(v.unstable_now() - Et < Rt);
    }
    function st() {
      if ($e !== null) {
        var ee = v.unstable_now();
        Et = ee;
        var Se = !0;
        try {
          Se = $e(!0, ee);
        } finally {
          Se ? Ct() : (ce = !1, $e = null);
        }
      } else
        ce = !1;
    }
    var Ct;
    if (typeof Je == "function")
      Ct = function() {
        Je(st);
      };
    else if (typeof MessageChannel < "u") {
      var Ye = new MessageChannel(), at = Ye.port2;
      Ye.port1.onmessage = st, Ct = function() {
        at.postMessage(null);
      };
    } else
      Ct = function() {
        Ee(st, 0);
      };
    function lt(ee) {
      $e = ee, ce || (ce = !0, Ct());
    }
    function Ke(ee, Se) {
      Ne = Ee(function() {
        ee(v.unstable_now());
      }, Se);
    }
    v.unstable_IdlePriority = 5, v.unstable_ImmediatePriority = 1, v.unstable_LowPriority = 4, v.unstable_NormalPriority = 3, v.unstable_Profiling = null, v.unstable_UserBlockingPriority = 2, v.unstable_cancelCallback = function(ee) {
      ee.callback = null;
    }, v.unstable_continueExecution = function() {
      q || G || (q = !0, lt(Ae));
    }, v.unstable_forceFrameRate = function(ee) {
      0 > ee || 125 < ee ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Rt = 0 < ee ? Math.floor(1e3 / ee) : 5;
    }, v.unstable_getCurrentPriorityLevel = function() {
      return V;
    }, v.unstable_getFirstCallbackNode = function() {
      return f(U);
    }, v.unstable_next = function(ee) {
      switch (V) {
        case 1:
        case 2:
        case 3:
          var Se = 3;
          break;
        default:
          Se = V;
      }
      var A = V;
      V = Se;
      try {
        return ee();
      } finally {
        V = A;
      }
    }, v.unstable_pauseExecution = function() {
    }, v.unstable_requestPaint = function() {
    }, v.unstable_runWithPriority = function(ee, Se) {
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
      var A = V;
      V = ee;
      try {
        return Se();
      } finally {
        V = A;
      }
    }, v.unstable_scheduleCallback = function(ee, Se, A) {
      var te = v.unstable_now();
      switch (typeof A == "object" && A !== null ? (A = A.delay, A = typeof A == "number" && 0 < A ? te + A : te) : A = te, ee) {
        case 1:
          var Te = -1;
          break;
        case 2:
          Te = 250;
          break;
        case 5:
          Te = 1073741823;
          break;
        case 4:
          Te = 1e4;
          break;
        default:
          Te = 5e3;
      }
      return Te = A + Te, ee = { id: z++, callback: Se, priorityLevel: ee, startTime: A, expirationTime: Te, sortIndex: -1 }, A > te ? (ee.sortIndex = A, u(F, ee), f(U) === null && ee === f(F) && (re ? (Ze(Ne), Ne = -1) : re = !0, Ke(de, A - te))) : (ee.sortIndex = Te, u(U, ee), q || G || (q = !0, lt(Ae))), ee;
    }, v.unstable_shouldYield = gt, v.unstable_wrapCallback = function(ee) {
      var Se = V;
      return function() {
        var A = V;
        V = Se;
        try {
          return ee.apply(this, arguments);
        } finally {
          V = A;
        }
      };
    };
  }(YS)), YS;
}
var Tw;
function cR() {
  if (Tw)
    return Ky.exports;
  Tw = 1;
  var v = {};
  return v.NODE_ENV === "production" ? Ky.exports = mN() : Ky.exports = hN(), Ky.exports;
}
var bw;
function yN() {
  if (bw)
    return ei;
  bw = 1;
  var v = {};
  /**
   * @license React
   * react-dom.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return v.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var u = mt, f = cR(), g = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, T = !1;
    function D(e) {
      T = e;
    }
    function O(e) {
      if (!T) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        U("warn", e, a);
      }
    }
    function _(e) {
      if (!T) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        U("error", e, a);
      }
    }
    function U(e, t, a) {
      {
        var i = g.ReactDebugCurrentFrame, l = i.getStackAddendum();
        l !== "" && (t += "%s", a = a.concat([l]));
        var c = a.map(function(p) {
          return String(p);
        });
        c.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, c);
      }
    }
    var F = 0, z = 1, Q = 2, V = 3, G = 4, q = 5, re = 6, Ee = 7, Ze = 8, Je = 9, Re = 10, de = 11, Ae = 12, ce = 13, $e = 14, Ne = 15, Rt = 16, Et = 17, gt = 18, st = 19, Ct = 21, Ye = 22, at = 23, lt = 24, Ke = 25, ee = !0, Se = !1, A = !1, te = !1, Te = !1, We = !0, Ie = !1, ct = !1, dt = !0, _t = !0, ut = !0, Gt = /* @__PURE__ */ new Set(), Qn = {}, Mn = {};
    function Tr(e, t) {
      qn(e, t), qn(e + "Capture", t);
    }
    function qn(e, t) {
      Qn[e] && _("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Qn[e] = t;
      {
        var a = e.toLowerCase();
        Mn[a] = e, e === "onDoubleClick" && (Mn.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        Gt.add(t[i]);
    }
    var hn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Xn = Object.prototype.hasOwnProperty;
    function Rn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function En(e) {
      try {
        return xn(e), !1;
      } catch {
        return !0;
      }
    }
    function xn(e) {
      return "" + e;
    }
    function cr(e, t) {
      if (En(e))
        return _("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Rn(e)), xn(e);
    }
    function mn(e) {
      if (En(e))
        return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Rn(e)), xn(e);
    }
    function yn(e, t) {
      if (En(e))
        return _("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Rn(e)), xn(e);
    }
    function br(e, t) {
      if (En(e))
        return _("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Rn(e)), xn(e);
    }
    function wr(e) {
      if (En(e))
        return _("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Rn(e)), xn(e);
    }
    function In(e) {
      if (En(e))
        return _("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Rn(e)), xn(e);
    }
    var Rr = 0, Bn = 1, rr = 2, en = 3, va = 4, ha = 5, ma = 6, ge = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Be = ge + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Tt = new RegExp("^[" + ge + "][" + Be + "]*$"), It = {}, $t = {};
    function zn(e) {
      return Xn.call($t, e) ? !0 : Xn.call(It, e) ? !1 : Tt.test(e) ? ($t[e] = !0, !0) : (It[e] = !0, _("Invalid attribute name: `%s`", e), !1);
    }
    function _n(e, t, a) {
      return t !== null ? t.type === Rr : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function xr(e, t, a, i) {
      if (a !== null && a.type === Rr)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var l = e.toLowerCase().slice(0, 5);
          return l !== "data-" && l !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Kt(e, t, a, i) {
      if (t === null || typeof t > "u" || xr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case en:
            return !t;
          case va:
            return t === !1;
          case ha:
            return isNaN(t);
          case ma:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function ar(e) {
      return rn.hasOwnProperty(e) ? rn[e] : null;
    }
    function Bt(e, t, a, i, l, c, p) {
      this.acceptsBooleans = t === rr || t === en || t === va, this.attributeName = i, this.attributeNamespace = l, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = c, this.removeEmptyString = p;
    }
    var rn = {}, ri = [
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
    ri.forEach(function(e) {
      rn[e] = new Bt(
        e,
        Rr,
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
      var t = e[0], a = e[1];
      rn[t] = new Bt(
        t,
        Bn,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      rn[e] = new Bt(
        e,
        rr,
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
      rn[e] = new Bt(
        e,
        rr,
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
      rn[e] = new Bt(
        e,
        en,
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
      rn[e] = new Bt(
        e,
        en,
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
      rn[e] = new Bt(
        e,
        va,
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
      rn[e] = new Bt(
        e,
        ma,
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
      rn[e] = new Bt(
        e,
        ha,
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
    var Na = /[\-\:]([a-z])/g, Do = function(e) {
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
      var t = e.replace(Na, Do);
      rn[t] = new Bt(
        t,
        Bn,
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
      var t = e.replace(Na, Do);
      rn[t] = new Bt(
        t,
        Bn,
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
      var t = e.replace(Na, Do);
      rn[t] = new Bt(
        t,
        Bn,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      rn[e] = new Bt(
        e,
        Bn,
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
    var hl = "xlinkHref";
    rn[hl] = new Bt(
      "xlinkHref",
      Bn,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      rn[e] = new Bt(
        e,
        Bn,
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
    var ml = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Oo = !1;
    function ai(e) {
      !Oo && ml.test(e) && (Oo = !0, _("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function ii(e, t, a, i) {
      if (i.mustUseProperty) {
        var l = i.propertyName;
        return e[l];
      } else {
        cr(a, t), i.sanitizeURL && ai("" + a);
        var c = i.attributeName, p = null;
        if (i.type === va) {
          if (e.hasAttribute(c)) {
            var m = e.getAttribute(c);
            return m === "" ? !0 : Kt(t, a, i, !1) ? m : m === "" + a ? a : m;
          }
        } else if (e.hasAttribute(c)) {
          if (Kt(t, a, i, !1))
            return e.getAttribute(c);
          if (i.type === en)
            return a;
          p = e.getAttribute(c);
        }
        return Kt(t, a, i, !1) ? p === null ? a : p : p === "" + a ? a : p;
      }
    }
    function La(e, t, a, i) {
      {
        if (!zn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var l = e.getAttribute(t);
        return cr(a, t), l === "" + a ? a : l;
      }
    }
    function Wi(e, t, a, i) {
      var l = ar(t);
      if (!_n(t, l, i)) {
        if (Kt(t, a, l, i) && (a = null), i || l === null) {
          if (zn(t)) {
            var c = t;
            a === null ? e.removeAttribute(c) : (cr(a, t), e.setAttribute(c, "" + a));
          }
          return;
        }
        var p = l.mustUseProperty;
        if (p) {
          var m = l.propertyName;
          if (a === null) {
            var y = l.type;
            e[m] = y === en ? !1 : "";
          } else
            e[m] = a;
          return;
        }
        var C = l.attributeName, b = l.attributeNamespace;
        if (a === null)
          e.removeAttribute(C);
        else {
          var M = l.type, N;
          M === en || M === va && a === !0 ? N = "" : (cr(a, C), N = "" + a, l.sanitizeURL && ai(N.toString())), b ? e.setAttributeNS(b, C, N) : e.setAttribute(C, N);
        }
      }
    }
    var Yr = Symbol.for("react.element"), Wr = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), Gi = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), ie = Symbol.for("react.provider"), me = Symbol.for("react.context"), _e = Symbol.for("react.forward_ref"), xt = Symbol.for("react.suspense"), kt = Symbol.for("react.suspense_list"), St = Symbol.for("react.memo"), Ge = Symbol.for("react.lazy"), Yn = Symbol.for("react.scope"), an = Symbol.for("react.debug_trace_mode"), on = Symbol.for("react.offscreen"), Dr = Symbol.for("react.legacy_hidden"), Ei = Symbol.for("react.cache"), ln = Symbol.for("react.tracing_marker"), Gr = Symbol.iterator, Ss = "@@iterator";
    function _i(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Gr && e[Gr] || e[Ss];
      return typeof t == "function" ? t : null;
    }
    var bt = Object.assign, yl = 0, Ki, Ao, Kr, Cs, Lr, Ts, bs;
    function ws() {
    }
    ws.__reactDisabledLog = !0;
    function gl() {
      {
        if (yl === 0) {
          Ki = console.log, Ao = console.info, Kr = console.warn, Cs = console.error, Lr = console.group, Ts = console.groupCollapsed, bs = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ws,
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
        yl++;
      }
    }
    function su() {
      {
        if (yl--, yl === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: bt({}, e, {
              value: Ki
            }),
            info: bt({}, e, {
              value: Ao
            }),
            warn: bt({}, e, {
              value: Kr
            }),
            error: bt({}, e, {
              value: Cs
            }),
            group: bt({}, e, {
              value: Lr
            }),
            groupCollapsed: bt({}, e, {
              value: Ts
            }),
            groupEnd: bt({}, e, {
              value: bs
            })
          });
        }
        yl < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Qi = g.ReactCurrentDispatcher, Si;
    function Ma(e, t, a) {
      {
        if (Si === void 0)
          try {
            throw Error();
          } catch (l) {
            var i = l.stack.trim().match(/\n( *(at )?)/);
            Si = i && i[1] || "";
          }
        return `
` + Si + e;
      }
    }
    var ko = !1, Ci;
    {
      var El = typeof WeakMap == "function" ? WeakMap : Map;
      Ci = new El();
    }
    function _l(e, t) {
      if (!e || ko)
        return "";
      {
        var a = Ci.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      ko = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var c;
      c = Qi.current, Qi.current = null, gl();
      try {
        if (t) {
          var p = function() {
            throw Error();
          };
          if (Object.defineProperty(p.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(p, []);
            } catch (Y) {
              i = Y;
            }
            Reflect.construct(e, [], p);
          } else {
            try {
              p.call();
            } catch (Y) {
              i = Y;
            }
            e.call(p.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Y) {
            i = Y;
          }
          e();
        }
      } catch (Y) {
        if (Y && i && typeof Y.stack == "string") {
          for (var m = Y.stack.split(`
`), y = i.stack.split(`
`), C = m.length - 1, b = y.length - 1; C >= 1 && b >= 0 && m[C] !== y[b]; )
            b--;
          for (; C >= 1 && b >= 0; C--, b--)
            if (m[C] !== y[b]) {
              if (C !== 1 || b !== 1)
                do
                  if (C--, b--, b < 0 || m[C] !== y[b]) {
                    var M = `
` + m[C].replace(" at new ", " at ");
                    return e.displayName && M.includes("<anonymous>") && (M = M.replace("<anonymous>", e.displayName)), typeof e == "function" && Ci.set(e, M), M;
                  }
                while (C >= 1 && b >= 0);
              break;
            }
        }
      } finally {
        ko = !1, Qi.current = c, su(), Error.prepareStackTrace = l;
      }
      var N = e ? e.displayName || e.name : "", B = N ? Ma(N) : "";
      return typeof e == "function" && Ci.set(e, B), B;
    }
    function No(e, t, a) {
      return _l(e, !0);
    }
    function Rs(e, t, a) {
      return _l(e, !1);
    }
    function xs(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function At(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return _l(e, xs(e));
      if (typeof e == "string")
        return Ma(e);
      switch (e) {
        case xt:
          return Ma("Suspense");
        case kt:
          return Ma("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case _e:
            return Rs(e.render);
          case St:
            return At(e.type, t, a);
          case Ge: {
            var i = e, l = i._payload, c = i._init;
            try {
              return At(c(l), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Ds(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case q:
          return Ma(e.type);
        case Rt:
          return Ma("Lazy");
        case ce:
          return Ma("Suspense");
        case st:
          return Ma("SuspenseList");
        case F:
        case Q:
        case Ne:
          return Rs(e.type);
        case de:
          return Rs(e.type.render);
        case z:
          return No(e.type);
        default:
          return "";
      }
    }
    function cu(e) {
      try {
        var t = "", a = e;
        do
          t += Ds(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Lo(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var l = t.displayName || t.name || "";
      return l !== "" ? a + "(" + l + ")" : a;
    }
    function Os(e) {
      return e.displayName || "Context";
    }
    function zt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && _("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case ya:
          return "Fragment";
        case Wr:
          return "Portal";
        case x:
          return "Profiler";
        case Gi:
          return "StrictMode";
        case xt:
          return "Suspense";
        case kt:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case me:
            var t = e;
            return Os(t) + ".Consumer";
          case ie:
            var a = e;
            return Os(a._context) + ".Provider";
          case _e:
            return Lo(e, e.render, "ForwardRef");
          case St:
            var i = e.displayName || null;
            return i !== null ? i : zt(e.type) || "Memo";
          case Ge: {
            var l = e, c = l._payload, p = l._init;
            try {
              return zt(p(c));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function fu(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function Sl(e) {
      return e.displayName || "Context";
    }
    function ft(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case lt:
          return "Cache";
        case Je:
          var i = a;
          return Sl(i) + ".Consumer";
        case Re:
          var l = a;
          return Sl(l._context) + ".Provider";
        case gt:
          return "DehydratedFragment";
        case de:
          return fu(a, a.render, "ForwardRef");
        case Ee:
          return "Fragment";
        case q:
          return a;
        case G:
          return "Portal";
        case V:
          return "Root";
        case re:
          return "Text";
        case Rt:
          return zt(a);
        case Ze:
          return a === Gi ? "StrictMode" : "Mode";
        case Ye:
          return "Offscreen";
        case Ae:
          return "Profiler";
        case Ct:
          return "Scope";
        case ce:
          return "Suspense";
        case st:
          return "SuspenseList";
        case Ke:
          return "TracingMarker";
        case z:
        case F:
        case Et:
        case Q:
        case $e:
        case Ne:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var oi = g.ReactDebugCurrentFrame, Sn = null, Qr = !1;
    function za() {
      {
        if (Sn === null)
          return null;
        var e = Sn._debugOwner;
        if (e !== null && typeof e < "u")
          return ft(e);
      }
      return null;
    }
    function Mo() {
      return Sn === null ? "" : cu(Sn);
    }
    function cn() {
      oi.getCurrentStack = null, Sn = null, Qr = !1;
    }
    function Cn(e) {
      oi.getCurrentStack = e === null ? null : Mo, Sn = e, Qr = !1;
    }
    function As() {
      return Sn;
    }
    function fr(e) {
      Qr = e;
    }
    function qr(e) {
      return "" + e;
    }
    function li(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return In(e), e;
        default:
          return "";
      }
    }
    var du = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Cl(e, t) {
      du[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || _("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || _("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Tl(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function zo(e) {
      return e._valueTracker;
    }
    function Ua(e) {
      e._valueTracker = null;
    }
    function qi(e) {
      var t = "";
      return e && (Tl(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function pu(e) {
      var t = Tl(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      In(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var l = a.get, c = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return l.call(this);
          },
          set: function(m) {
            In(m), i = "" + m, c.call(this, m);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var p = {
          getValue: function() {
            return i;
          },
          setValue: function(m) {
            In(m), i = "" + m;
          },
          stopTracking: function() {
            Ua(e), delete e[t];
          }
        };
        return p;
      }
    }
    function Xi(e) {
      zo(e) || (e._valueTracker = pu(e));
    }
    function vu(e) {
      if (!e)
        return !1;
      var t = zo(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = qi(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function Ti(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Zi = !1, hu = !1, ks = !1, ui = !1;
    function mu(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function E(e, t) {
      var a = e, i = t.checked, l = bt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return l;
    }
    function R(e, t) {
      Cl("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !hu && (_("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", za() || "A component", t.type), hu = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Zi && (_("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", za() || "A component", t.type), Zi = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: li(t.value != null ? t.value : i),
        controlled: mu(t)
      };
    }
    function I(e, t) {
      var a = e, i = t.checked;
      i != null && Wi(a, "checked", i, !1);
    }
    function K(e, t) {
      var a = e;
      {
        var i = mu(t);
        !a._wrapperState.controlled && i && !ui && (_("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ui = !0), a._wrapperState.controlled && !i && !ks && (_("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ks = !0);
      }
      I(e, t);
      var l = li(t.value), c = t.type;
      if (l != null)
        c === "number" ? (l === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != l) && (a.value = qr(l)) : a.value !== qr(l) && (a.value = qr(l));
      else if (c === "submit" || c === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? it(a, t.type, l) : t.hasOwnProperty("defaultValue") && it(a, t.type, li(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function pe(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var l = t.type, c = l === "submit" || l === "reset";
        if (c && (t.value === void 0 || t.value === null))
          return;
        var p = qr(i._wrapperState.initialValue);
        a || p !== i.value && (i.value = p), i.defaultValue = p;
      }
      var m = i.name;
      m !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, m !== "" && (i.name = m);
    }
    function Ue(e, t) {
      var a = e;
      K(a, t), xe(a, t);
    }
    function xe(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        cr(a, "name");
        for (var l = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), c = 0; c < l.length; c++) {
          var p = l[c];
          if (!(p === e || p.form !== e.form)) {
            var m = Mm(p);
            if (!m)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            vu(p), K(p, m);
          }
        }
      }
    }
    function it(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Ti(e.ownerDocument) !== e) && (a == null ? e.defaultValue = qr(e._wrapperState.initialValue) : e.defaultValue !== qr(a) && (e.defaultValue = qr(a)));
    }
    var wt = !1, Yt = !1, Qt = !1;
    function qt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? u.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Yt || (Yt = !0, _("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Qt || (Qt = !0, _("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !wt && (_("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), wt = !0);
    }
    function Xt(e, t) {
      t.value != null && e.setAttribute("value", qr(li(t.value)));
    }
    var fn = Array.isArray;
    function Ut(e) {
      return fn(e);
    }
    var Uo;
    Uo = !1;
    function yu() {
      var e = za();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Ns = ["value", "defaultValue"];
    function Ls(e) {
      {
        Cl("select", e);
        for (var t = 0; t < Ns.length; t++) {
          var a = Ns[t];
          if (e[a] != null) {
            var i = Ut(e[a]);
            e.multiple && !i ? _("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, yu()) : !e.multiple && i && _("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, yu());
          }
        }
      }
    }
    function Ji(e, t, a, i) {
      var l = e.options;
      if (t) {
        for (var c = a, p = {}, m = 0; m < c.length; m++)
          p["$" + c[m]] = !0;
        for (var y = 0; y < l.length; y++) {
          var C = p.hasOwnProperty("$" + l[y].value);
          l[y].selected !== C && (l[y].selected = C), C && i && (l[y].defaultSelected = !0);
        }
      } else {
        for (var b = qr(li(a)), M = null, N = 0; N < l.length; N++) {
          if (l[N].value === b) {
            l[N].selected = !0, i && (l[N].defaultSelected = !0);
            return;
          }
          M === null && !l[N].disabled && (M = l[N]);
        }
        M !== null && (M.selected = !0);
      }
    }
    function Ms(e, t) {
      return bt({}, t, {
        value: void 0
      });
    }
    function zs(e, t) {
      var a = e;
      Ls(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Uo && (_("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Uo = !0);
    }
    function Wd(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Ji(a, !!t.multiple, i, !1) : t.defaultValue != null && Ji(a, !!t.multiple, t.defaultValue, !0);
    }
    function Eg(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var l = t.value;
      l != null ? Ji(a, !!t.multiple, l, !1) : i !== !!t.multiple && (t.defaultValue != null ? Ji(a, !!t.multiple, t.defaultValue, !0) : Ji(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function ih(e, t) {
      var a = e, i = t.value;
      i != null && Ji(a, !!t.multiple, i, !1);
    }
    var oh = !1;
    function Gd(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = bt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: qr(a._wrapperState.initialValue)
      });
      return i;
    }
    function lh(e, t) {
      var a = e;
      Cl("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !oh && (_("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", za() || "A component"), oh = !0);
      var i = t.value;
      if (i == null) {
        var l = t.children, c = t.defaultValue;
        if (l != null) {
          _("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (c != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Ut(l)) {
              if (l.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              l = l[0];
            }
            c = l;
          }
        }
        c == null && (c = ""), i = c;
      }
      a._wrapperState = {
        initialValue: li(i)
      };
    }
    function uh(e, t) {
      var a = e, i = li(t.value), l = li(t.defaultValue);
      if (i != null) {
        var c = qr(i);
        c !== a.value && (a.value = c), t.defaultValue == null && a.defaultValue !== c && (a.defaultValue = c);
      }
      l != null && (a.defaultValue = qr(l));
    }
    function Kc(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function _g(e, t) {
      uh(e, t);
    }
    var eo = "http://www.w3.org/1999/xhtml", Sg = "http://www.w3.org/1998/Math/MathML", Qc = "http://www.w3.org/2000/svg";
    function Kd(e) {
      switch (e) {
        case "svg":
          return Qc;
        case "math":
          return Sg;
        default:
          return eo;
      }
    }
    function Qd(e, t) {
      return e == null || e === eo ? Kd(t) : e === Qc && t === "foreignObject" ? eo : e;
    }
    var Cg = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, l) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, l);
        });
      } : e;
    }, qc, sh = Cg(function(e, t) {
      if (e.namespaceURI === Qc && !("innerHTML" in e)) {
        qc = qc || document.createElement("div"), qc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = qc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Xr = 1, to = 3, Dn = 8, ga = 9, qd = 11, Us = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === to) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, ch = {
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
    }, gu = {
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
    function fh(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var dh = ["Webkit", "ms", "Moz", "O"];
    Object.keys(gu).forEach(function(e) {
      dh.forEach(function(t) {
        gu[fh(t, e)] = gu[e];
      });
    });
    function jo(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(gu.hasOwnProperty(e) && gu[e]) ? t + "px" : (br(t, e), ("" + t).trim());
    }
    var Tg = /([A-Z])/g, bg = /^ms-/;
    function wg(e) {
      return e.replace(Tg, "-$1").toLowerCase().replace(bg, "-ms-");
    }
    var Xd = function() {
    };
    {
      var ph = /^(?:webkit|moz|o)[A-Z]/, js = /^-ms-/, $s = /-(.)/g, vh = /;\s*$/, no = {}, Zd = {}, Jd = !1, Xc = !1, ep = function(e) {
        return e.replace($s, function(t, a) {
          return a.toUpperCase();
        });
      }, hh = function(e) {
        no.hasOwnProperty(e) && no[e] || (no[e] = !0, _(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          ep(e.replace(js, "ms-"))
        ));
      }, mh = function(e) {
        no.hasOwnProperty(e) && no[e] || (no[e] = !0, _("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, yh = function(e, t) {
        Zd.hasOwnProperty(t) && Zd[t] || (Zd[t] = !0, _(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(vh, "")));
      }, Rg = function(e, t) {
        Jd || (Jd = !0, _("`NaN` is an invalid value for the `%s` css style property.", e));
      }, xg = function(e, t) {
        Xc || (Xc = !0, _("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Xd = function(e, t) {
        e.indexOf("-") > -1 ? hh(e) : ph.test(e) ? mh(e) : vh.test(t) && yh(e, t), typeof t == "number" && (isNaN(t) ? Rg(e, t) : isFinite(t) || xg(e, t));
      };
    }
    var Dg = Xd;
    function Og(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var l = e[i];
            if (l != null) {
              var c = i.indexOf("--") === 0;
              t += a + (c ? i : wg(i)) + ":", t += jo(i, l, c), a = ";";
            }
          }
        return t || null;
      }
    }
    function gh(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var l = i.indexOf("--") === 0;
          l || Dg(i, t[i]);
          var c = jo(i, t[i], l);
          i === "float" && (i = "cssFloat"), l ? a.setProperty(i, c) : a[i] = c;
        }
    }
    function si(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Eu(e) {
      var t = {};
      for (var a in e)
        for (var i = ch[a] || [a], l = 0; l < i.length; l++)
          t[i[l]] = a;
      return t;
    }
    function Eh(e, t) {
      {
        if (!t)
          return;
        var a = Eu(e), i = Eu(t), l = {};
        for (var c in a) {
          var p = a[c], m = i[c];
          if (m && p !== m) {
            var y = p + "," + m;
            if (l[y])
              continue;
            l[y] = !0, _("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", si(e[p]) ? "Removing" : "Updating", p, m);
          }
        }
      }
    }
    var _h = {
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
    }, Sh = bt({
      menuitem: !0
    }, _h), Ch = "__html";
    function Ps(e, t) {
      if (t) {
        if (Sh[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Ch in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && _("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function bl(e, t) {
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
    var Zc = {
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
    }, wl = {
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
    }, $o = {}, Hs = new RegExp("^(aria)-[" + Be + "]*$"), tp = new RegExp("^(aria)[A-Z][" + Be + "]*$");
    function Th(e, t) {
      {
        if (Xn.call($o, t) && $o[t])
          return !0;
        if (tp.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = wl.hasOwnProperty(a) ? a : null;
          if (i == null)
            return _("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), $o[t] = !0, !0;
          if (t !== i)
            return _("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), $o[t] = !0, !0;
        }
        if (Hs.test(t)) {
          var l = t.toLowerCase(), c = wl.hasOwnProperty(l) ? l : null;
          if (c == null)
            return $o[t] = !0, !1;
          if (t !== c)
            return _("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, c), $o[t] = !0, !0;
        }
      }
      return !0;
    }
    function Jc(e, t) {
      {
        var a = [];
        for (var i in t) {
          var l = Th(e, i);
          l || a.push(i);
        }
        var c = a.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        a.length === 1 ? _("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", c, e) : a.length > 1 && _("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", c, e);
      }
    }
    function _u(e, t) {
      bl(e, t) || Jc(e, t);
    }
    var ef = !1;
    function bh(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !ef && (ef = !0, e === "select" && t.multiple ? _("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : _("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Fs = function() {
    };
    {
      var Or = {}, np = /^on./, wh = /^on[^A-Z]/, Rh = new RegExp("^(aria)-[" + Be + "]*$"), xh = new RegExp("^(aria)[A-Z][" + Be + "]*$");
      Fs = function(e, t, a, i) {
        if (Xn.call(Or, t) && Or[t])
          return !0;
        var l = t.toLowerCase();
        if (l === "onfocusin" || l === "onfocusout")
          return _("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Or[t] = !0, !0;
        if (i != null) {
          var c = i.registrationNameDependencies, p = i.possibleRegistrationNames;
          if (c.hasOwnProperty(t))
            return !0;
          var m = p.hasOwnProperty(l) ? p[l] : null;
          if (m != null)
            return _("Invalid event handler property `%s`. Did you mean `%s`?", t, m), Or[t] = !0, !0;
          if (np.test(t))
            return _("Unknown event handler property `%s`. It will be ignored.", t), Or[t] = !0, !0;
        } else if (np.test(t))
          return wh.test(t) && _("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Or[t] = !0, !0;
        if (Rh.test(t) || xh.test(t))
          return !0;
        if (l === "innerhtml")
          return _("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Or[t] = !0, !0;
        if (l === "aria")
          return _("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Or[t] = !0, !0;
        if (l === "is" && a !== null && a !== void 0 && typeof a != "string")
          return _("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Or[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return _("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Or[t] = !0, !0;
        var y = ar(t), C = y !== null && y.type === Rr;
        if (Zc.hasOwnProperty(l)) {
          var b = Zc[l];
          if (b !== t)
            return _("Invalid DOM property `%s`. Did you mean `%s`?", t, b), Or[t] = !0, !0;
        } else if (!C && t !== l)
          return _("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, l), Or[t] = !0, !0;
        return typeof a == "boolean" && xr(t, a, y, !1) ? (a ? _('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : _('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Or[t] = !0, !0) : C ? !0 : xr(t, a, y, !1) ? (Or[t] = !0, !1) : ((a === "false" || a === "true") && y !== null && y.type === en && (_("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Or[t] = !0), !0);
      };
    }
    var Dh = function(e, t, a) {
      {
        var i = [];
        for (var l in t) {
          var c = Fs(e, l, t[l], a);
          c || i.push(l);
        }
        var p = i.map(function(m) {
          return "`" + m + "`";
        }).join(", ");
        i.length === 1 ? _("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", p, e) : i.length > 1 && _("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", p, e);
      }
    };
    function Po(e, t, a) {
      bl(e, t) || Dh(e, t, a);
    }
    var tf = 1, Vs = 2, Is = 4, Ag = tf | Vs | Is, ro = null;
    function kg(e) {
      ro !== null && _("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), ro = e;
    }
    function Oh() {
      ro === null && _("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), ro = null;
    }
    function Ah(e) {
      return e === ro;
    }
    function tn(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === to ? t.parentNode : t;
    }
    var Bs = null, ao = null, bi = null;
    function rp(e) {
      var t = Zu(e);
      if (t) {
        if (typeof Bs != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Mm(a);
          Bs(t.stateNode, t.type, i);
        }
      }
    }
    function ap(e) {
      Bs = e;
    }
    function Su(e) {
      ao ? bi ? bi.push(e) : bi = [e] : ao = e;
    }
    function nf() {
      return ao !== null || bi !== null;
    }
    function Rl() {
      if (ao) {
        var e = ao, t = bi;
        if (ao = null, bi = null, rp(e), t)
          for (var a = 0; a < t.length; a++)
            rp(t[a]);
      }
    }
    var ip = function(e, t) {
      return e(t);
    }, kh = function() {
    }, op = !1;
    function Nh() {
      var e = nf();
      e && (kh(), Rl());
    }
    function Ys(e, t, a) {
      if (op)
        return e(t, a);
      op = !0;
      try {
        return ip(e, t, a);
      } finally {
        op = !1, Nh();
      }
    }
    function rf(e, t, a) {
      ip = e, kh = a;
    }
    function lp(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function up(e, t, a) {
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
          return !!(a.disabled && lp(t));
        default:
          return !1;
      }
    }
    function xl(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Mm(a);
      if (i === null)
        return null;
      var l = i[t];
      if (up(t, e.type, i))
        return null;
      if (l && typeof l != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof l + "` type.");
      return l;
    }
    var Ws = !1;
    if (hn)
      try {
        var Gs = {};
        Object.defineProperty(Gs, "passive", {
          get: function() {
            Ws = !0;
          }
        }), window.addEventListener("test", Gs, Gs), window.removeEventListener("test", Gs, Gs);
      } catch {
        Ws = !1;
      }
    function sp(e, t, a, i, l, c, p, m, y) {
      var C = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, C);
      } catch (b) {
        this.onError(b);
      }
    }
    var Lh = sp;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var cp = document.createElement("react");
      Lh = function(t, a, i, l, c, p, m, y, C) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var b = document.createEvent("Event"), M = !1, N = !0, B = window.event, Y = Object.getOwnPropertyDescriptor(window, "event");
        function X() {
          cp.removeEventListener(Z, Xe, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = B);
        }
        var De = Array.prototype.slice.call(arguments, 3);
        function Xe() {
          M = !0, X(), a.apply(i, De), N = !1;
        }
        var Ve, Lt = !1, Ot = !1;
        function $(P) {
          if (Ve = P.error, Lt = !0, Ve === null && P.colno === 0 && P.lineno === 0 && (Ot = !0), P.defaultPrevented && Ve != null && typeof Ve == "object")
            try {
              Ve._suppressLogging = !0;
            } catch {
            }
        }
        var Z = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", $), cp.addEventListener(Z, Xe, !1), b.initEvent(Z, !1, !1), cp.dispatchEvent(b), Y && Object.defineProperty(window, "event", Y), M && N && (Lt ? Ot && (Ve = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Ve = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Ve)), window.removeEventListener("error", $), !M)
          return X(), sp.apply(this, arguments);
      };
    }
    var fp = Lh, Ea = !1, Ks = null, io = !1, ja = null, Qs = {
      onError: function(e) {
        Ea = !0, Ks = e;
      }
    };
    function ci(e, t, a, i, l, c, p, m, y) {
      Ea = !1, Ks = null, fp.apply(Qs, arguments);
    }
    function dp(e, t, a, i, l, c, p, m, y) {
      if (ci.apply(this, arguments), Ea) {
        var C = oo();
        io || (io = !0, ja = C);
      }
    }
    function Ng() {
      if (io) {
        var e = ja;
        throw io = !1, ja = null, e;
      }
    }
    function Lg() {
      return Ea;
    }
    function oo() {
      if (Ea) {
        var e = Ks;
        return Ea = !1, Ks = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function wi(e) {
      return e._reactInternals;
    }
    function Cu(e) {
      return e._reactInternals !== void 0;
    }
    function af(e, t) {
      e._reactInternals = t;
    }
    var Qe = (
      /*                      */
      0
    ), fi = (
      /*                */
      1
    ), nn = (
      /*                    */
      2
    ), Pe = (
      /*                       */
      4
    ), Pt = (
      /*                */
      16
    ), $a = (
      /*                 */
      32
    ), ir = (
      /*                     */
      64
    ), pt = (
      /*                   */
      128
    ), Mr = (
      /*            */
      256
    ), _a = (
      /*                          */
      512
    ), Wn = (
      /*                     */
      1024
    ), Zr = (
      /*                      */
      2048
    ), Ri = (
      /*                    */
      4096
    ), Ho = (
      /*                   */
      8192
    ), Dl = (
      /*             */
      16384
    ), Mh = Zr | Pe | ir | _a | Wn | Dl, lo = (
      /*               */
      32767
    ), Fo = (
      /*                   */
      32768
    ), dr = (
      /*                */
      65536
    ), of = (
      /* */
      131072
    ), zh = (
      /*                       */
      1048576
    ), xi = (
      /*                    */
      2097152
    ), Pa = (
      /*                 */
      4194304
    ), Vo = (
      /*                */
      8388608
    ), Ha = (
      /*               */
      16777216
    ), Ol = (
      /*              */
      33554432
    ), Jr = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Pe | Wn | 0
    ), ea = nn | Pe | Pt | $a | _a | Ri | Ho, di = Pe | ir | _a | Ho, ta = Zr | Pt, pr = Pa | Vo | xi, Al = g.ReactCurrentOwner;
    function Io(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (nn | Ri)) !== Qe && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === V ? a : null;
    }
    function lf(e) {
      if (e.tag === ce) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function uf(e) {
      return e.tag === V ? e.stateNode.containerInfo : null;
    }
    function Sa(e) {
      return Io(e) === e;
    }
    function Ca(e) {
      {
        var t = Al.current;
        if (t !== null && t.tag === z) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || _("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", ft(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var l = wi(e);
      return l ? Io(l) === l : !1;
    }
    function dn(e) {
      if (Io(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Fa(e) {
      var t = e.alternate;
      if (!t) {
        var a = Io(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, l = t; ; ) {
        var c = i.return;
        if (c === null)
          break;
        var p = c.alternate;
        if (p === null) {
          var m = c.return;
          if (m !== null) {
            i = l = m;
            continue;
          }
          break;
        }
        if (c.child === p.child) {
          for (var y = c.child; y; ) {
            if (y === i)
              return dn(c), e;
            if (y === l)
              return dn(c), t;
            y = y.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== l.return)
          i = c, l = p;
        else {
          for (var C = !1, b = c.child; b; ) {
            if (b === i) {
              C = !0, i = c, l = p;
              break;
            }
            if (b === l) {
              C = !0, l = c, i = p;
              break;
            }
            b = b.sibling;
          }
          if (!C) {
            for (b = p.child; b; ) {
              if (b === i) {
                C = !0, i = p, l = c;
                break;
              }
              if (b === l) {
                C = !0, l = p, i = c;
                break;
              }
              b = b.sibling;
            }
            if (!C)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== l)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== V)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function pp(e) {
      var t = Fa(e);
      return t !== null ? vp(t) : null;
    }
    function vp(e) {
      if (e.tag === q || e.tag === re)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = vp(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function hp(e) {
      var t = Fa(e);
      return t !== null ? sf(t) : null;
    }
    function sf(e) {
      if (e.tag === q || e.tag === re)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== G) {
          var a = sf(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var mp = f.unstable_scheduleCallback, cf = f.unstable_cancelCallback, Uh = f.unstable_shouldYield, Tu = f.unstable_requestPaint, Gn = f.unstable_now, Mg = f.unstable_getCurrentPriorityLevel, na = f.unstable_ImmediatePriority, bu = f.unstable_UserBlockingPriority, Di = f.unstable_NormalPriority, wu = f.unstable_LowPriority, qs = f.unstable_IdlePriority, yp = f.unstable_yieldValue, gp = f.unstable_setDisableYieldValue, Bo = null, Un = null, he = null, Ar = !1, Ta = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function jh(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return _("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        dt && (e = bt({}, e, {
          getLaneLabelMap: ff,
          injectProfilingHooks: Wo
        })), Bo = t.inject(e), Un = t;
      } catch (a) {
        _("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function uo(e, t) {
      if (Un && typeof Un.onScheduleFiberRoot == "function")
        try {
          Un.onScheduleFiberRoot(Bo, e, t);
        } catch (a) {
          Ar || (Ar = !0, _("React instrumentation encountered an error: %s", a));
        }
    }
    function Yo(e, t) {
      if (Un && typeof Un.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & pt) === pt;
          if (_t) {
            var i;
            switch (t) {
              case Hn:
                i = na;
                break;
              case co:
                i = bu;
                break;
              case ki:
                i = Di;
                break;
              case zu:
                i = qs;
                break;
              default:
                i = Di;
                break;
            }
            Un.onCommitFiberRoot(Bo, e, i, a);
          }
        } catch (l) {
          Ar || (Ar = !0, _("React instrumentation encountered an error: %s", l));
        }
    }
    function Ep(e) {
      if (Un && typeof Un.onPostCommitFiberRoot == "function")
        try {
          Un.onPostCommitFiberRoot(Bo, e);
        } catch (t) {
          Ar || (Ar = !0, _("React instrumentation encountered an error: %s", t));
        }
    }
    function $h(e) {
      if (Un && typeof Un.onCommitFiberUnmount == "function")
        try {
          Un.onCommitFiberUnmount(Bo, e);
        } catch (t) {
          Ar || (Ar = !0, _("React instrumentation encountered an error: %s", t));
        }
    }
    function un(e) {
      if (typeof yp == "function" && (gp(e), D(e)), Un && typeof Un.setStrictMode == "function")
        try {
          Un.setStrictMode(Bo, e);
        } catch (t) {
          Ar || (Ar = !0, _("React instrumentation encountered an error: %s", t));
        }
    }
    function Wo(e) {
      he = e;
    }
    function ff() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < jn; a++) {
          var i = Wh(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Ph(e) {
      he !== null && typeof he.markCommitStarted == "function" && he.markCommitStarted(e);
    }
    function Xs() {
      he !== null && typeof he.markCommitStopped == "function" && he.markCommitStopped();
    }
    function Ru(e) {
      he !== null && typeof he.markComponentRenderStarted == "function" && he.markComponentRenderStarted(e);
    }
    function kl() {
      he !== null && typeof he.markComponentRenderStopped == "function" && he.markComponentRenderStopped();
    }
    function _p(e) {
      he !== null && typeof he.markComponentPassiveEffectMountStarted == "function" && he.markComponentPassiveEffectMountStarted(e);
    }
    function df() {
      he !== null && typeof he.markComponentPassiveEffectMountStopped == "function" && he.markComponentPassiveEffectMountStopped();
    }
    function Hh(e) {
      he !== null && typeof he.markComponentPassiveEffectUnmountStarted == "function" && he.markComponentPassiveEffectUnmountStarted(e);
    }
    function Fh() {
      he !== null && typeof he.markComponentPassiveEffectUnmountStopped == "function" && he.markComponentPassiveEffectUnmountStopped();
    }
    function Vh(e) {
      he !== null && typeof he.markComponentLayoutEffectMountStarted == "function" && he.markComponentLayoutEffectMountStarted(e);
    }
    function Sp() {
      he !== null && typeof he.markComponentLayoutEffectMountStopped == "function" && he.markComponentLayoutEffectMountStopped();
    }
    function xu(e) {
      he !== null && typeof he.markComponentLayoutEffectUnmountStarted == "function" && he.markComponentLayoutEffectUnmountStarted(e);
    }
    function Zs() {
      he !== null && typeof he.markComponentLayoutEffectUnmountStopped == "function" && he.markComponentLayoutEffectUnmountStopped();
    }
    function Ih(e, t, a) {
      he !== null && typeof he.markComponentErrored == "function" && he.markComponentErrored(e, t, a);
    }
    function Bh(e, t, a) {
      he !== null && typeof he.markComponentSuspended == "function" && he.markComponentSuspended(e, t, a);
    }
    function Du(e) {
      he !== null && typeof he.markLayoutEffectsStarted == "function" && he.markLayoutEffectsStarted(e);
    }
    function Yh() {
      he !== null && typeof he.markLayoutEffectsStopped == "function" && he.markLayoutEffectsStopped();
    }
    function Js(e) {
      he !== null && typeof he.markPassiveEffectsStarted == "function" && he.markPassiveEffectsStarted(e);
    }
    function Oi() {
      he !== null && typeof he.markPassiveEffectsStopped == "function" && he.markPassiveEffectsStopped();
    }
    function Ou(e) {
      he !== null && typeof he.markRenderStarted == "function" && he.markRenderStarted(e);
    }
    function ec() {
      he !== null && typeof he.markRenderYielded == "function" && he.markRenderYielded();
    }
    function Go() {
      he !== null && typeof he.markRenderStopped == "function" && he.markRenderStopped();
    }
    function Cp(e) {
      he !== null && typeof he.markRenderScheduled == "function" && he.markRenderScheduled(e);
    }
    function Au(e, t) {
      he !== null && typeof he.markForceUpdateScheduled == "function" && he.markForceUpdateScheduled(e, t);
    }
    function pf(e, t) {
      he !== null && typeof he.markStateUpdateScheduled == "function" && he.markStateUpdateScheduled(e, t);
    }
    var qe = (
      /*                         */
      0
    ), Fe = (
      /*                 */
      1
    ), jt = (
      /*                    */
      2
    ), On = (
      /*               */
      8
    ), Va = (
      /*              */
      16
    ), tc = Math.clz32 ? Math.clz32 : Tn, Tp = Math.log, Nl = Math.LN2;
    function Tn(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Tp(t) / Nl | 0) | 0;
    }
    var jn = 31, J = (
      /*                        */
      0
    ), $n = (
      /*                          */
      0
    ), et = (
      /*                        */
      1
    ), Ai = (
      /*    */
      2
    ), so = (
      /*             */
      4
    ), An = (
      /*            */
      8
    ), Ia = (
      /*                     */
      16
    ), Ll = (
      /*                */
      32
    ), Ko = (
      /*                       */
      4194240
    ), ra = (
      /*                        */
      64
    ), aa = (
      /*                        */
      128
    ), Ml = (
      /*                        */
      256
    ), nc = (
      /*                        */
      512
    ), rc = (
      /*                        */
      1024
    ), vf = (
      /*                        */
      2048
    ), hf = (
      /*                        */
      4096
    ), mf = (
      /*                        */
      8192
    ), yf = (
      /*                        */
      16384
    ), gf = (
      /*                       */
      32768
    ), Ef = (
      /*                       */
      65536
    ), _f = (
      /*                       */
      131072
    ), Sf = (
      /*                       */
      262144
    ), zl = (
      /*                       */
      524288
    ), Cf = (
      /*                       */
      1048576
    ), ku = (
      /*                       */
      2097152
    ), Ul = (
      /*                            */
      130023424
    ), jl = (
      /*                             */
      4194304
    ), ac = (
      /*                             */
      8388608
    ), Tf = (
      /*                             */
      16777216
    ), bf = (
      /*                             */
      33554432
    ), wf = (
      /*                             */
      67108864
    ), bp = jl, $l = (
      /*          */
      134217728
    ), wp = (
      /*                          */
      268435455
    ), Nu = (
      /*               */
      268435456
    ), Qo = (
      /*                        */
      536870912
    ), ba = (
      /*                   */
      1073741824
    );
    function Wh(e) {
      {
        if (e & et)
          return "Sync";
        if (e & Ai)
          return "InputContinuousHydration";
        if (e & so)
          return "InputContinuous";
        if (e & An)
          return "DefaultHydration";
        if (e & Ia)
          return "Default";
        if (e & Ll)
          return "TransitionHydration";
        if (e & Ko)
          return "Transition";
        if (e & Ul)
          return "Retry";
        if (e & $l)
          return "SelectiveHydration";
        if (e & Nu)
          return "IdleHydration";
        if (e & Qo)
          return "Idle";
        if (e & ba)
          return "Offscreen";
      }
    }
    var sn = -1, Rf = ra, ic = jl;
    function Lu(e) {
      switch (Pn(e)) {
        case et:
          return et;
        case Ai:
          return Ai;
        case so:
          return so;
        case An:
          return An;
        case Ia:
          return Ia;
        case Ll:
          return Ll;
        case ra:
        case aa:
        case Ml:
        case nc:
        case rc:
        case vf:
        case hf:
        case mf:
        case yf:
        case gf:
        case Ef:
        case _f:
        case Sf:
        case zl:
        case Cf:
        case ku:
          return e & Ko;
        case jl:
        case ac:
        case Tf:
        case bf:
        case wf:
          return e & Ul;
        case $l:
          return $l;
        case Nu:
          return Nu;
        case Qo:
          return Qo;
        case ba:
          return ba;
        default:
          return _("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function oc(e, t) {
      var a = e.pendingLanes;
      if (a === J)
        return J;
      var i = J, l = e.suspendedLanes, c = e.pingedLanes, p = a & wp;
      if (p !== J) {
        var m = p & ~l;
        if (m !== J)
          i = Lu(m);
        else {
          var y = p & c;
          y !== J && (i = Lu(y));
        }
      } else {
        var C = a & ~l;
        C !== J ? i = Lu(C) : c !== J && (i = Lu(c));
      }
      if (i === J)
        return J;
      if (t !== J && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & l) === J) {
        var b = Pn(i), M = Pn(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          b >= M || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          b === Ia && (M & Ko) !== J
        )
          return t;
      }
      (i & so) !== J && (i |= a & Ia);
      var N = e.entangledLanes;
      if (N !== J)
        for (var B = e.entanglements, Y = i & N; Y > 0; ) {
          var X = Xo(Y), De = 1 << X;
          i |= B[X], Y &= ~De;
        }
      return i;
    }
    function xf(e, t) {
      for (var a = e.eventTimes, i = sn; t > 0; ) {
        var l = Xo(t), c = 1 << l, p = a[l];
        p > i && (i = p), t &= ~c;
      }
      return i;
    }
    function zg(e, t) {
      switch (e) {
        case et:
        case Ai:
        case so:
          return t + 250;
        case An:
        case Ia:
        case Ll:
        case ra:
        case aa:
        case Ml:
        case nc:
        case rc:
        case vf:
        case hf:
        case mf:
        case yf:
        case gf:
        case Ef:
        case _f:
        case Sf:
        case zl:
        case Cf:
        case ku:
          return t + 5e3;
        case jl:
        case ac:
        case Tf:
        case bf:
        case wf:
          return sn;
        case $l:
        case Nu:
        case Qo:
        case ba:
          return sn;
        default:
          return _("Should have found matching lanes. This is a bug in React."), sn;
      }
    }
    function Ug(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, l = e.pingedLanes, c = e.expirationTimes, p = a; p > 0; ) {
        var m = Xo(p), y = 1 << m, C = c[m];
        C === sn ? ((y & i) === J || (y & l) !== J) && (c[m] = zg(y, t)) : C <= t && (e.expiredLanes |= y), p &= ~y;
      }
    }
    function jg(e) {
      return Lu(e.pendingLanes);
    }
    function qo(e) {
      var t = e.pendingLanes & ~ba;
      return t !== J ? t : t & ba ? ba : J;
    }
    function Rp(e) {
      return (e & et) !== J;
    }
    function lc(e) {
      return (e & wp) !== J;
    }
    function Gh(e) {
      return (e & Ul) === e;
    }
    function Kh(e) {
      var t = et | so | Ia;
      return (e & t) === J;
    }
    function Qh(e) {
      return (e & Ko) === e;
    }
    function uc(e, t) {
      var a = Ai | so | An | Ia;
      return (t & a) !== J;
    }
    function qh(e, t) {
      return (t & e.expiredLanes) !== J;
    }
    function xp(e) {
      return (e & Ko) !== J;
    }
    function Xh() {
      var e = Rf;
      return Rf <<= 1, (Rf & Ko) === J && (Rf = ra), e;
    }
    function ia() {
      var e = ic;
      return ic <<= 1, (ic & Ul) === J && (ic = jl), e;
    }
    function Pn(e) {
      return e & -e;
    }
    function Mu(e) {
      return Pn(e);
    }
    function Xo(e) {
      return 31 - tc(e);
    }
    function Df(e) {
      return Xo(e);
    }
    function oa(e, t) {
      return (e & t) !== J;
    }
    function Pl(e, t) {
      return (e & t) === t;
    }
    function yt(e, t) {
      return e | t;
    }
    function sc(e, t) {
      return e & ~t;
    }
    function Of(e, t) {
      return e & t;
    }
    function $g(e) {
      return e;
    }
    function Zh(e, t) {
      return e !== $n && e < t ? e : t;
    }
    function cc(e) {
      for (var t = [], a = 0; a < jn; a++)
        t.push(e);
      return t;
    }
    function Hl(e, t, a) {
      e.pendingLanes |= t, t !== Qo && (e.suspendedLanes = J, e.pingedLanes = J);
      var i = e.eventTimes, l = Df(t);
      i[l] = a;
    }
    function Jh(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var l = Xo(i), c = 1 << l;
        a[l] = sn, i &= ~c;
      }
    }
    function Af(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function kf(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = J, e.pingedLanes = J, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, l = e.eventTimes, c = e.expirationTimes, p = a; p > 0; ) {
        var m = Xo(p), y = 1 << m;
        i[m] = J, l[m] = sn, c[m] = sn, p &= ~y;
      }
    }
    function Dp(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, l = a; l; ) {
        var c = Xo(l), p = 1 << c;
        // Is this one of the newly entangled lanes?
        p & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[c] & t && (i[c] |= t), l &= ~p;
      }
    }
    function em(e, t) {
      var a = Pn(t), i;
      switch (a) {
        case so:
          i = Ai;
          break;
        case Ia:
          i = An;
          break;
        case ra:
        case aa:
        case Ml:
        case nc:
        case rc:
        case vf:
        case hf:
        case mf:
        case yf:
        case gf:
        case Ef:
        case _f:
        case Sf:
        case zl:
        case Cf:
        case ku:
        case jl:
        case ac:
        case Tf:
        case bf:
        case wf:
          i = Ll;
          break;
        case Qo:
          i = Nu;
          break;
        default:
          i = $n;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== $n ? $n : i;
    }
    function Nf(e, t, a) {
      if (Ta)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var l = Df(a), c = 1 << l, p = i[l];
          p.add(t), a &= ~c;
        }
    }
    function Op(e, t) {
      if (Ta)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var l = Df(t), c = 1 << l, p = a[l];
          p.size > 0 && (p.forEach(function(m) {
            var y = m.alternate;
            (y === null || !i.has(y)) && i.add(m);
          }), p.clear()), t &= ~c;
        }
    }
    function fc(e, t) {
      return null;
    }
    var Hn = et, co = so, ki = Ia, zu = Qo, Uu = $n;
    function Ba() {
      return Uu;
    }
    function kn(e) {
      Uu = e;
    }
    function kr(e, t) {
      var a = Uu;
      try {
        return Uu = e, t();
      } finally {
        Uu = a;
      }
    }
    function Pg(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Hg(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function ju(e, t) {
      return e !== 0 && e < t;
    }
    function vr(e) {
      var t = Pn(e);
      return ju(Hn, t) ? ju(co, t) ? lc(t) ? ki : zu : co : Hn;
    }
    function Lf(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var ke;
    function $u(e) {
      ke = e;
    }
    function Ap(e) {
      ke(e);
    }
    var Mf;
    function Fg(e) {
      Mf = e;
    }
    var Pu;
    function zf(e) {
      Pu = e;
    }
    var Uf;
    function tm(e) {
      Uf = e;
    }
    var kp;
    function nm(e) {
      kp = e;
    }
    var dc = !1, Hu = [], gn = null, or = null, zr = null, Fu = /* @__PURE__ */ new Map(), Vu = /* @__PURE__ */ new Map(), lr = [], rm = [
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
    function Ni(e) {
      return rm.indexOf(e) > -1;
    }
    function Vg(e, t, a, i, l) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: l,
        targetContainers: [i]
      };
    }
    function Np(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          gn = null;
          break;
        case "dragenter":
        case "dragleave":
          or = null;
          break;
        case "mouseover":
        case "mouseout":
          zr = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Fu.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Vu.delete(i);
          break;
        }
      }
    }
    function Iu(e, t, a, i, l, c) {
      if (e === null || e.nativeEvent !== c) {
        var p = Vg(t, a, i, l, c);
        if (t !== null) {
          var m = Zu(t);
          m !== null && Mf(m);
        }
        return p;
      }
      e.eventSystemFlags |= i;
      var y = e.targetContainers;
      return l !== null && y.indexOf(l) === -1 && y.push(l), e;
    }
    function am(e, t, a, i, l) {
      switch (t) {
        case "focusin": {
          var c = l;
          return gn = Iu(gn, e, t, a, i, c), !0;
        }
        case "dragenter": {
          var p = l;
          return or = Iu(or, e, t, a, i, p), !0;
        }
        case "mouseover": {
          var m = l;
          return zr = Iu(zr, e, t, a, i, m), !0;
        }
        case "pointerover": {
          var y = l, C = y.pointerId;
          return Fu.set(C, Iu(Fu.get(C) || null, e, t, a, i, y)), !0;
        }
        case "gotpointercapture": {
          var b = l, M = b.pointerId;
          return Vu.set(M, Iu(Vu.get(M) || null, e, t, a, i, b)), !0;
        }
      }
      return !1;
    }
    function Lp(e) {
      var t = bc(e.target);
      if (t !== null) {
        var a = Io(t);
        if (a !== null) {
          var i = a.tag;
          if (i === ce) {
            var l = lf(a);
            if (l !== null) {
              e.blockedOn = l, kp(e.priority, function() {
                Pu(a);
              });
              return;
            }
          } else if (i === V) {
            var c = a.stateNode;
            if (Lf(c)) {
              e.blockedOn = uf(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Ig(e) {
      for (var t = Uf(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < lr.length && ju(t, lr[i].priority); i++)
        ;
      lr.splice(i, 0, a), i === 0 && Lp(a);
    }
    function Fl(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Nr(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var l = e.nativeEvent, c = new l.constructor(l.type, l);
          kg(c), l.target.dispatchEvent(c), Oh();
        } else {
          var p = Zu(i);
          return p !== null && Mf(p), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function jf(e, t, a) {
      Fl(e) && a.delete(t);
    }
    function Ya() {
      dc = !1, gn !== null && Fl(gn) && (gn = null), or !== null && Fl(or) && (or = null), zr !== null && Fl(zr) && (zr = null), Fu.forEach(jf), Vu.forEach(jf);
    }
    function Dt(e, t) {
      e.blockedOn === t && (e.blockedOn = null, dc || (dc = !0, f.unstable_scheduleCallback(f.unstable_NormalPriority, Ya)));
    }
    function Nn(e) {
      if (Hu.length > 0) {
        Dt(Hu[0], e);
        for (var t = 1; t < Hu.length; t++) {
          var a = Hu[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      gn !== null && Dt(gn, e), or !== null && Dt(or, e), zr !== null && Dt(zr, e);
      var i = function(m) {
        return Dt(m, e);
      };
      Fu.forEach(i), Vu.forEach(i);
      for (var l = 0; l < lr.length; l++) {
        var c = lr[l];
        c.blockedOn === e && (c.blockedOn = null);
      }
      for (; lr.length > 0; ) {
        var p = lr[0];
        if (p.blockedOn !== null)
          break;
        Lp(p), p.blockedOn === null && lr.shift();
      }
    }
    var pn = g.ReactCurrentBatchConfig, Zn = !0;
    function la(e) {
      Zn = !!e;
    }
    function Bu() {
      return Zn;
    }
    function Jn(e, t, a) {
      var i = $f(t), l;
      switch (i) {
        case Hn:
          l = pc;
          break;
        case co:
          l = Vl;
          break;
        case ki:
        default:
          l = Yu;
          break;
      }
      return l.bind(null, t, a, e);
    }
    function pc(e, t, a, i) {
      var l = Ba(), c = pn.transition;
      pn.transition = null;
      try {
        kn(Hn), Yu(e, t, a, i);
      } finally {
        kn(l), pn.transition = c;
      }
    }
    function Vl(e, t, a, i) {
      var l = Ba(), c = pn.transition;
      pn.transition = null;
      try {
        kn(co), Yu(e, t, a, i);
      } finally {
        kn(l), pn.transition = c;
      }
    }
    function Yu(e, t, a, i) {
      Zn && Mp(e, t, a, i);
    }
    function Mp(e, t, a, i) {
      var l = Nr(e, t, a, i);
      if (l === null) {
        oE(e, t, i, Zo, a), Np(e, i);
        return;
      }
      if (am(l, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Np(e, i), t & Is && Ni(e)) {
        for (; l !== null; ) {
          var c = Zu(l);
          c !== null && Ap(c);
          var p = Nr(e, t, a, i);
          if (p === null && oE(e, t, i, Zo, a), p === l)
            break;
          l = p;
        }
        l !== null && i.stopPropagation();
        return;
      }
      oE(e, t, i, null, a);
    }
    var Zo = null;
    function Nr(e, t, a, i) {
      Zo = null;
      var l = tn(i), c = bc(l);
      if (c !== null) {
        var p = Io(c);
        if (p === null)
          c = null;
        else {
          var m = p.tag;
          if (m === ce) {
            var y = lf(p);
            if (y !== null)
              return y;
            c = null;
          } else if (m === V) {
            var C = p.stateNode;
            if (Lf(C))
              return uf(p);
            c = null;
          } else
            p !== c && (c = null);
        }
      }
      return Zo = c, null;
    }
    function $f(e) {
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
          return Hn;
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
          return co;
        case "message": {
          var t = Mg();
          switch (t) {
            case na:
              return Hn;
            case bu:
              return co;
            case Di:
            case wu:
              return ki;
            case qs:
              return zu;
            default:
              return ki;
          }
        }
        default:
          return ki;
      }
    }
    function Wu(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function fo(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Pf(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function zp(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Wa = null, Gu = null, Ga = null;
    function Hf(e) {
      return Wa = e, Gu = hc(), !0;
    }
    function vc() {
      Wa = null, Gu = null, Ga = null;
    }
    function Ff() {
      if (Ga)
        return Ga;
      var e, t = Gu, a = t.length, i, l = hc(), c = l.length;
      for (e = 0; e < a && t[e] === l[e]; e++)
        ;
      var p = a - e;
      for (i = 1; i <= p && t[a - i] === l[c - i]; i++)
        ;
      var m = i > 1 ? 1 - i : void 0;
      return Ga = l.slice(e, m), Ga;
    }
    function hc() {
      return "value" in Wa ? Wa.value : Wa.textContent;
    }
    function Il(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function ur() {
      return !0;
    }
    function po() {
      return !1;
    }
    function bn(e) {
      function t(a, i, l, c, p) {
        this._reactName = a, this._targetInst = l, this.type = i, this.nativeEvent = c, this.target = p, this.currentTarget = null;
        for (var m in e)
          if (e.hasOwnProperty(m)) {
            var y = e[m];
            y ? this[m] = y(c) : this[m] = c[m];
          }
        var C = c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1;
        return C ? this.isDefaultPrevented = ur : this.isDefaultPrevented = po, this.isPropagationStopped = po, this;
      }
      return bt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = ur);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = ur);
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
        isPersistent: ur
      }), t;
    }
    var er = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Vf = bn(er), Bl = bt({}, er, {
      view: 0,
      detail: 0
    }), Up = bn(Bl), jp, Li, Ku;
    function $p(e) {
      e !== Ku && (Ku && e.type === "mousemove" ? (jp = e.screenX - Ku.screenX, Li = e.screenY - Ku.screenY) : (jp = 0, Li = 0), Ku = e);
    }
    var Mi = bt({}, Bl, {
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
      getModifierState: Pp,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : ($p(e), jp);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Li;
      }
    }), If = bn(Mi), Yl = bt({}, Mi, {
      dataTransfer: 0
    }), im = bn(Yl), om = bt({}, Bl, {
      relatedTarget: 0
    }), mc = bn(om), Bf = bt({}, er, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Bg = bn(Bf), Yg = bt({}, er, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), lm = bn(Yg), um = bt({}, er, {
      data: 0
    }), Jo = bn(um), Wg = Jo, Qu = {
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
    }, sm = {
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
    function Ln(e) {
      if (e.key) {
        var t = Qu[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Il(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? sm[e.keyCode] || "Unidentified" : "";
    }
    var Gg = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function cm(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = Gg[e];
      return i ? !!a[i] : !1;
    }
    function Pp(e) {
      return cm;
    }
    var Kg = bt({}, Bl, {
      key: Ln,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Pp,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Il(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Il(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), fm = bn(Kg), dm = bt({}, Mi, {
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
    }), pm = bn(dm), Ka = bt({}, Bl, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Pp
    }), Hp = bn(Ka), Qg = bt({}, er, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), el = bn(Qg), Yf = bt({}, Mi, {
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
    }), Wl = bn(Yf), Wf = [9, 13, 27, 32], Gf = 229, yc = hn && "CompositionEvent" in window, gc = null;
    hn && "documentMode" in document && (gc = document.documentMode);
    var Fp = hn && "TextEvent" in window && !gc, vm = hn && (!yc || gc && gc > 8 && gc <= 11), Vp = 32, Ip = String.fromCharCode(Vp);
    function Kf() {
      Tr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Tr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Tr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Tr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Ec = !1;
    function hm(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Bp(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function qg(e, t) {
      return e === "keydown" && t.keyCode === Gf;
    }
    function Yp(e, t) {
      switch (e) {
        case "keyup":
          return Wf.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Gf;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Qf(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function _c(e) {
      return e.locale === "ko";
    }
    var tl = !1;
    function qf(e, t, a, i, l) {
      var c, p;
      if (yc ? c = Bp(t) : tl ? Yp(t, i) && (c = "onCompositionEnd") : qg(t, i) && (c = "onCompositionStart"), !c)
        return null;
      vm && !_c(i) && (!tl && c === "onCompositionStart" ? tl = Hf(l) : c === "onCompositionEnd" && tl && (p = Ff()));
      var m = Sm(a, c);
      if (m.length > 0) {
        var y = new Jo(c, t, null, i, l);
        if (e.push({
          event: y,
          listeners: m
        }), p)
          y.data = p;
        else {
          var C = Qf(i);
          C !== null && (y.data = C);
        }
      }
    }
    function mm(e, t) {
      switch (e) {
        case "compositionend":
          return Qf(t);
        case "keypress":
          var a = t.which;
          return a !== Vp ? null : (Ec = !0, Ip);
        case "textInput":
          var i = t.data;
          return i === Ip && Ec ? null : i;
        default:
          return null;
      }
    }
    function Xg(e, t) {
      if (tl) {
        if (e === "compositionend" || !yc && Yp(e, t)) {
          var a = Ff();
          return vc(), tl = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!hm(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return vm && !_c(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Xf(e, t, a, i, l) {
      var c;
      if (Fp ? c = mm(t, i) : c = Xg(t, i), !c)
        return null;
      var p = Sm(a, "onBeforeInput");
      if (p.length > 0) {
        var m = new Wg("onBeforeInput", "beforeinput", null, i, l);
        e.push({
          event: m,
          listeners: p
        }), m.data = c;
      }
    }
    function Zg(e, t, a, i, l, c, p) {
      qf(e, t, a, i, l), Xf(e, t, a, i, l);
    }
    var Sc = {
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
    function ym(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Sc[e.type] : t === "textarea";
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
    function Zf(e) {
      if (!hn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function n() {
      Tr("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function r(e, t, a, i) {
      Su(i);
      var l = Sm(t, "onChange");
      if (l.length > 0) {
        var c = new Vf("onChange", "change", null, a, i);
        e.push({
          event: c,
          listeners: l
        });
      }
    }
    var o = null, s = null;
    function d(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function h(e) {
      var t = [];
      r(t, s, e, tn(e)), Ys(S, t);
    }
    function S(e) {
      Q0(e, 0);
    }
    function w(e) {
      var t = ad(e);
      if (vu(t))
        return e;
    }
    function k(e, t) {
      if (e === "change")
        return t;
    }
    var W = !1;
    hn && (W = Zf("input") && (!document.documentMode || document.documentMode > 9));
    function oe(e, t) {
      o = e, s = t, o.attachEvent("onpropertychange", ae);
    }
    function ue() {
      o && (o.detachEvent("onpropertychange", ae), o = null, s = null);
    }
    function ae(e) {
      e.propertyName === "value" && w(s) && h(e);
    }
    function be(e, t, a) {
      e === "focusin" ? (ue(), oe(t, a)) : e === "focusout" && ue();
    }
    function Le(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return w(s);
    }
    function je(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Fn(e, t) {
      if (e === "click")
        return w(t);
    }
    function j(e, t) {
      if (e === "input" || e === "change")
        return w(t);
    }
    function L(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || it(e, "number", e.value);
    }
    function H(e, t, a, i, l, c, p) {
      var m = a ? ad(a) : window, y, C;
      if (d(m) ? y = k : ym(m) ? W ? y = j : (y = Le, C = be) : je(m) && (y = Fn), y) {
        var b = y(t, a);
        if (b) {
          r(e, b, i, l);
          return;
        }
      }
      C && C(t, m, a), t === "focusout" && L(m);
    }
    function ve() {
      qn("onMouseEnter", ["mouseout", "mouseover"]), qn("onMouseLeave", ["mouseout", "mouseover"]), qn("onPointerEnter", ["pointerout", "pointerover"]), qn("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function He(e, t, a, i, l, c, p) {
      var m = t === "mouseover" || t === "pointerover", y = t === "mouseout" || t === "pointerout";
      if (m && !Ah(i)) {
        var C = i.relatedTarget || i.fromElement;
        if (C && (bc(C) || iv(C)))
          return;
      }
      if (!(!y && !m)) {
        var b;
        if (l.window === l)
          b = l;
        else {
          var M = l.ownerDocument;
          M ? b = M.defaultView || M.parentWindow : b = window;
        }
        var N, B;
        if (y) {
          var Y = i.relatedTarget || i.toElement;
          if (N = a, B = Y ? bc(Y) : null, B !== null) {
            var X = Io(B);
            (B !== X || B.tag !== q && B.tag !== re) && (B = null);
          }
        } else
          N = null, B = a;
        if (N !== B) {
          var De = If, Xe = "onMouseLeave", Ve = "onMouseEnter", Lt = "mouse";
          (t === "pointerout" || t === "pointerover") && (De = pm, Xe = "onPointerLeave", Ve = "onPointerEnter", Lt = "pointer");
          var Ot = N == null ? b : ad(N), $ = B == null ? b : ad(B), Z = new De(Xe, Lt + "leave", N, i, l);
          Z.target = Ot, Z.relatedTarget = $;
          var P = null, se = bc(l);
          if (se === a) {
            var Oe = new De(Ve, Lt + "enter", B, i, l);
            Oe.target = $, Oe.relatedTarget = Ot, P = Oe;
          }
          P1(e, Z, P, N, B);
        }
      }
    }
    function tt(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Me = typeof Object.is == "function" ? Object.is : tt;
    function nt(e, t) {
      if (Me(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var l = 0; l < a.length; l++) {
        var c = a[l];
        if (!Xn.call(t, c) || !Me(e[c], t[c]))
          return !1;
      }
      return !0;
    }
    function tr(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Ht(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function vo(e, t) {
      for (var a = tr(e), i = 0, l = 0; a; ) {
        if (a.nodeType === to) {
          if (l = i + a.textContent.length, i <= t && l >= t)
            return {
              node: a,
              offset: t - i
            };
          i = l;
        }
        a = tr(Ht(a));
      }
    }
    function Jg(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var l = i.anchorNode, c = i.anchorOffset, p = i.focusNode, m = i.focusOffset;
      try {
        l.nodeType, p.nodeType;
      } catch {
        return null;
      }
      return E1(e, l, c, p, m);
    }
    function E1(e, t, a, i, l) {
      var c = 0, p = -1, m = -1, y = 0, C = 0, b = e, M = null;
      e:
        for (; ; ) {
          for (var N = null; b === t && (a === 0 || b.nodeType === to) && (p = c + a), b === i && (l === 0 || b.nodeType === to) && (m = c + l), b.nodeType === to && (c += b.nodeValue.length), (N = b.firstChild) !== null; )
            M = b, b = N;
          for (; ; ) {
            if (b === e)
              break e;
            if (M === t && ++y === a && (p = c), M === i && ++C === l && (m = c), (N = b.nextSibling) !== null)
              break;
            b = M, M = b.parentNode;
          }
          b = N;
        }
      return p === -1 || m === -1 ? null : {
        start: p,
        end: m
      };
    }
    function _1(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var l = i.getSelection(), c = e.textContent.length, p = Math.min(t.start, c), m = t.end === void 0 ? p : Math.min(t.end, c);
        if (!l.extend && p > m) {
          var y = m;
          m = p, p = y;
        }
        var C = vo(e, p), b = vo(e, m);
        if (C && b) {
          if (l.rangeCount === 1 && l.anchorNode === C.node && l.anchorOffset === C.offset && l.focusNode === b.node && l.focusOffset === b.offset)
            return;
          var M = a.createRange();
          M.setStart(C.node, C.offset), l.removeAllRanges(), p > m ? (l.addRange(M), l.extend(b.node, b.offset)) : (M.setEnd(b.node, b.offset), l.addRange(M));
        }
      }
    }
    function j0(e) {
      return e && e.nodeType === to;
    }
    function $0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : j0(e) ? !1 : j0(t) ? $0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function S1(e) {
      return e && e.ownerDocument && $0(e.ownerDocument.documentElement, e);
    }
    function C1(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function P0() {
      for (var e = window, t = Ti(); t instanceof e.HTMLIFrameElement; ) {
        if (C1(t))
          e = t.contentWindow;
        else
          return t;
        t = Ti(e.document);
      }
      return t;
    }
    function eE(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function T1() {
      var e = P0();
      return {
        focusedElem: e,
        selectionRange: eE(e) ? w1(e) : null
      };
    }
    function b1(e) {
      var t = P0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && S1(a)) {
        i !== null && eE(a) && R1(a, i);
        for (var l = [], c = a; c = c.parentNode; )
          c.nodeType === Xr && l.push({
            element: c,
            left: c.scrollLeft,
            top: c.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var p = 0; p < l.length; p++) {
          var m = l[p];
          m.element.scrollLeft = m.left, m.element.scrollTop = m.top;
        }
      }
    }
    function w1(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Jg(e), t || {
        start: 0,
        end: 0
      };
    }
    function R1(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : _1(e, t);
    }
    var x1 = hn && "documentMode" in document && document.documentMode <= 11;
    function D1() {
      Tr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Jf = null, tE = null, Wp = null, nE = !1;
    function O1(e) {
      if ("selectionStart" in e && eE(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function A1(e) {
      return e.window === e ? e.document : e.nodeType === ga ? e : e.ownerDocument;
    }
    function H0(e, t, a) {
      var i = A1(a);
      if (!(nE || Jf == null || Jf !== Ti(i))) {
        var l = O1(Jf);
        if (!Wp || !nt(Wp, l)) {
          Wp = l;
          var c = Sm(tE, "onSelect");
          if (c.length > 0) {
            var p = new Vf("onSelect", "select", null, t, a);
            e.push({
              event: p,
              listeners: c
            }), p.target = Jf;
          }
        }
      }
    }
    function k1(e, t, a, i, l, c, p) {
      var m = a ? ad(a) : window;
      switch (t) {
        case "focusin":
          (ym(m) || m.contentEditable === "true") && (Jf = m, tE = a, Wp = null);
          break;
        case "focusout":
          Jf = null, tE = null, Wp = null;
          break;
        case "mousedown":
          nE = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          nE = !1, H0(e, i, l);
          break;
        case "selectionchange":
          if (x1)
            break;
        case "keydown":
        case "keyup":
          H0(e, i, l);
      }
    }
    function gm(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var ed = {
      animationend: gm("Animation", "AnimationEnd"),
      animationiteration: gm("Animation", "AnimationIteration"),
      animationstart: gm("Animation", "AnimationStart"),
      transitionend: gm("Transition", "TransitionEnd")
    }, rE = {}, F0 = {};
    hn && (F0 = document.createElement("div").style, "AnimationEvent" in window || (delete ed.animationend.animation, delete ed.animationiteration.animation, delete ed.animationstart.animation), "TransitionEvent" in window || delete ed.transitionend.transition);
    function Em(e) {
      if (rE[e])
        return rE[e];
      if (!ed[e])
        return e;
      var t = ed[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in F0)
          return rE[e] = t[a];
      return e;
    }
    var V0 = Em("animationend"), I0 = Em("animationiteration"), B0 = Em("animationstart"), Y0 = Em("transitionend"), W0 = /* @__PURE__ */ new Map(), G0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function qu(e, t) {
      W0.set(e, t), Tr(t, [e]);
    }
    function N1() {
      for (var e = 0; e < G0.length; e++) {
        var t = G0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        qu(a, "on" + i);
      }
      qu(V0, "onAnimationEnd"), qu(I0, "onAnimationIteration"), qu(B0, "onAnimationStart"), qu("dblclick", "onDoubleClick"), qu("focusin", "onFocus"), qu("focusout", "onBlur"), qu(Y0, "onTransitionEnd");
    }
    function L1(e, t, a, i, l, c, p) {
      var m = W0.get(t);
      if (m !== void 0) {
        var y = Vf, C = t;
        switch (t) {
          case "keypress":
            if (Il(i) === 0)
              return;
          case "keydown":
          case "keyup":
            y = fm;
            break;
          case "focusin":
            C = "focus", y = mc;
            break;
          case "focusout":
            C = "blur", y = mc;
            break;
          case "beforeblur":
          case "afterblur":
            y = mc;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = If;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = im;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = Hp;
            break;
          case V0:
          case I0:
          case B0:
            y = Bg;
            break;
          case Y0:
            y = el;
            break;
          case "scroll":
            y = Up;
            break;
          case "wheel":
            y = Wl;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = lm;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = pm;
            break;
        }
        var b = (c & Is) !== 0;
        {
          var M = !b && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", N = j1(a, m, i.type, b, M);
          if (N.length > 0) {
            var B = new y(m, C, null, i, l);
            e.push({
              event: B,
              listeners: N
            });
          }
        }
      }
    }
    N1(), ve(), n(), D1(), Kf();
    function M1(e, t, a, i, l, c, p) {
      L1(e, t, a, i, l, c);
      var m = (c & Ag) === 0;
      m && (He(e, t, a, i, l), H(e, t, a, i, l), k1(e, t, a, i, l), Zg(e, t, a, i, l));
    }
    var Gp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], aE = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Gp));
    function K0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, dp(i, t, void 0, e), e.currentTarget = null;
    }
    function z1(e, t, a) {
      var i;
      if (a)
        for (var l = t.length - 1; l >= 0; l--) {
          var c = t[l], p = c.instance, m = c.currentTarget, y = c.listener;
          if (p !== i && e.isPropagationStopped())
            return;
          K0(e, y, m), i = p;
        }
      else
        for (var C = 0; C < t.length; C++) {
          var b = t[C], M = b.instance, N = b.currentTarget, B = b.listener;
          if (M !== i && e.isPropagationStopped())
            return;
          K0(e, B, N), i = M;
        }
    }
    function Q0(e, t) {
      for (var a = (t & Is) !== 0, i = 0; i < e.length; i++) {
        var l = e[i], c = l.event, p = l.listeners;
        z1(c, p, a);
      }
      Ng();
    }
    function U1(e, t, a, i, l) {
      var c = tn(a), p = [];
      M1(p, e, i, a, c, t), Q0(p, t);
    }
    function wn(e, t) {
      aE.has(e) || _('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = dD(t), l = H1(e, a);
      i.has(l) || (q0(t, e, Vs, a), i.add(l));
    }
    function iE(e, t, a) {
      aE.has(e) && !t && _('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Is), q0(a, e, i, t);
    }
    var _m = "_reactListening" + Math.random().toString(36).slice(2);
    function Kp(e) {
      if (!e[_m]) {
        e[_m] = !0, Gt.forEach(function(a) {
          a !== "selectionchange" && (aE.has(a) || iE(a, !1, e), iE(a, !0, e));
        });
        var t = e.nodeType === ga ? e : e.ownerDocument;
        t !== null && (t[_m] || (t[_m] = !0, iE("selectionchange", !1, t)));
      }
    }
    function q0(e, t, a, i, l) {
      var c = Jn(e, t, a), p = void 0;
      Ws && (t === "touchstart" || t === "touchmove" || t === "wheel") && (p = !0), e = e, i ? p !== void 0 ? Pf(e, t, c, p) : fo(e, t, c) : p !== void 0 ? zp(e, t, c, p) : Wu(e, t, c);
    }
    function X0(e, t) {
      return e === t || e.nodeType === Dn && e.parentNode === t;
    }
    function oE(e, t, a, i, l) {
      var c = i;
      if (!(t & tf) && !(t & Vs)) {
        var p = l;
        if (i !== null) {
          var m = i;
          e:
            for (; ; ) {
              if (m === null)
                return;
              var y = m.tag;
              if (y === V || y === G) {
                var C = m.stateNode.containerInfo;
                if (X0(C, p))
                  break;
                if (y === G)
                  for (var b = m.return; b !== null; ) {
                    var M = b.tag;
                    if (M === V || M === G) {
                      var N = b.stateNode.containerInfo;
                      if (X0(N, p))
                        return;
                    }
                    b = b.return;
                  }
                for (; C !== null; ) {
                  var B = bc(C);
                  if (B === null)
                    return;
                  var Y = B.tag;
                  if (Y === q || Y === re) {
                    m = c = B;
                    continue e;
                  }
                  C = C.parentNode;
                }
              }
              m = m.return;
            }
        }
      }
      Ys(function() {
        return U1(e, t, a, c);
      });
    }
    function Qp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function j1(e, t, a, i, l, c) {
      for (var p = t !== null ? t + "Capture" : null, m = i ? p : t, y = [], C = e, b = null; C !== null; ) {
        var M = C, N = M.stateNode, B = M.tag;
        if (B === q && N !== null && (b = N, m !== null)) {
          var Y = xl(C, m);
          Y != null && y.push(Qp(C, Y, b));
        }
        if (l)
          break;
        C = C.return;
      }
      return y;
    }
    function Sm(e, t) {
      for (var a = t + "Capture", i = [], l = e; l !== null; ) {
        var c = l, p = c.stateNode, m = c.tag;
        if (m === q && p !== null) {
          var y = p, C = xl(l, a);
          C != null && i.unshift(Qp(l, C, y));
          var b = xl(l, t);
          b != null && i.push(Qp(l, b, y));
        }
        l = l.return;
      }
      return i;
    }
    function td(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== q);
      return e || null;
    }
    function $1(e, t) {
      for (var a = e, i = t, l = 0, c = a; c; c = td(c))
        l++;
      for (var p = 0, m = i; m; m = td(m))
        p++;
      for (; l - p > 0; )
        a = td(a), l--;
      for (; p - l > 0; )
        i = td(i), p--;
      for (var y = l; y--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = td(a), i = td(i);
      }
      return null;
    }
    function Z0(e, t, a, i, l) {
      for (var c = t._reactName, p = [], m = a; m !== null && m !== i; ) {
        var y = m, C = y.alternate, b = y.stateNode, M = y.tag;
        if (C !== null && C === i)
          break;
        if (M === q && b !== null) {
          var N = b;
          if (l) {
            var B = xl(m, c);
            B != null && p.unshift(Qp(m, B, N));
          } else if (!l) {
            var Y = xl(m, c);
            Y != null && p.push(Qp(m, Y, N));
          }
        }
        m = m.return;
      }
      p.length !== 0 && e.push({
        event: t,
        listeners: p
      });
    }
    function P1(e, t, a, i, l) {
      var c = i && l ? $1(i, l) : null;
      i !== null && Z0(e, t, i, c, !1), l !== null && a !== null && Z0(e, a, l, c, !0);
    }
    function H1(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var Qa = !1, qp = "dangerouslySetInnerHTML", Cm = "suppressContentEditableWarning", Xu = "suppressHydrationWarning", J0 = "autoFocus", Cc = "children", Tc = "style", Tm = "__html", lE, bm, Xp, eC, wm, tC, nC;
    lE = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, bm = function(e, t) {
      _u(e, t), bh(e, t), Po(e, t, {
        registrationNameDependencies: Qn,
        possibleRegistrationNames: Mn
      });
    }, tC = hn && !document.documentMode, Xp = function(e, t, a) {
      if (!Qa) {
        var i = Rm(a), l = Rm(t);
        l !== i && (Qa = !0, _("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(l), JSON.stringify(i)));
      }
    }, eC = function(e) {
      if (!Qa) {
        Qa = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), _("Extra attributes from the server: %s", t);
      }
    }, wm = function(e, t) {
      t === !1 ? _("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : _("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, nC = function(e, t) {
      var a = e.namespaceURI === eo ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var F1 = /\r\n?/g, V1 = /\u0000|\uFFFD/g;
    function Rm(e) {
      wr(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(F1, `
`).replace(V1, "");
    }
    function xm(e, t, a, i) {
      var l = Rm(t), c = Rm(e);
      if (c !== l && (i && (Qa || (Qa = !0, _('Text content did not match. Server: "%s" Client: "%s"', c, l))), a && ee))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function rC(e) {
      return e.nodeType === ga ? e : e.ownerDocument;
    }
    function I1() {
    }
    function Dm(e) {
      e.onclick = I1;
    }
    function B1(e, t, a, i, l) {
      for (var c in i)
        if (i.hasOwnProperty(c)) {
          var p = i[c];
          if (c === Tc)
            p && Object.freeze(p), gh(t, p);
          else if (c === qp) {
            var m = p ? p[Tm] : void 0;
            m != null && sh(t, m);
          } else if (c === Cc)
            if (typeof p == "string") {
              var y = e !== "textarea" || p !== "";
              y && Us(t, p);
            } else
              typeof p == "number" && Us(t, "" + p);
          else
            c === Cm || c === Xu || c === J0 || (Qn.hasOwnProperty(c) ? p != null && (typeof p != "function" && wm(c, p), c === "onScroll" && wn("scroll", t)) : p != null && Wi(t, c, p, l));
        }
    }
    function Y1(e, t, a, i) {
      for (var l = 0; l < t.length; l += 2) {
        var c = t[l], p = t[l + 1];
        c === Tc ? gh(e, p) : c === qp ? sh(e, p) : c === Cc ? Us(e, p) : Wi(e, c, p, i);
      }
    }
    function W1(e, t, a, i) {
      var l, c = rC(a), p, m = i;
      if (m === eo && (m = Kd(e)), m === eo) {
        if (l = bl(e, t), !l && e !== e.toLowerCase() && _("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var y = c.createElement("div");
          y.innerHTML = "<script><\/script>";
          var C = y.firstChild;
          p = y.removeChild(C);
        } else if (typeof t.is == "string")
          p = c.createElement(e, {
            is: t.is
          });
        else if (p = c.createElement(e), e === "select") {
          var b = p;
          t.multiple ? b.multiple = !0 : t.size && (b.size = t.size);
        }
      } else
        p = c.createElementNS(m, e);
      return m === eo && !l && Object.prototype.toString.call(p) === "[object HTMLUnknownElement]" && !Xn.call(lE, e) && (lE[e] = !0, _("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), p;
    }
    function G1(e, t) {
      return rC(t).createTextNode(e);
    }
    function K1(e, t, a, i) {
      var l = bl(t, a);
      bm(t, a);
      var c;
      switch (t) {
        case "dialog":
          wn("cancel", e), wn("close", e), c = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          wn("load", e), c = a;
          break;
        case "video":
        case "audio":
          for (var p = 0; p < Gp.length; p++)
            wn(Gp[p], e);
          c = a;
          break;
        case "source":
          wn("error", e), c = a;
          break;
        case "img":
        case "image":
        case "link":
          wn("error", e), wn("load", e), c = a;
          break;
        case "details":
          wn("toggle", e), c = a;
          break;
        case "input":
          R(e, a), c = E(e, a), wn("invalid", e);
          break;
        case "option":
          qt(e, a), c = a;
          break;
        case "select":
          zs(e, a), c = Ms(e, a), wn("invalid", e);
          break;
        case "textarea":
          lh(e, a), c = Gd(e, a), wn("invalid", e);
          break;
        default:
          c = a;
      }
      switch (Ps(t, c), B1(t, e, i, c, l), t) {
        case "input":
          Xi(e), pe(e, a, !1);
          break;
        case "textarea":
          Xi(e), Kc(e);
          break;
        case "option":
          Xt(e, a);
          break;
        case "select":
          Wd(e, a);
          break;
        default:
          typeof c.onClick == "function" && Dm(e);
          break;
      }
    }
    function Q1(e, t, a, i, l) {
      bm(t, i);
      var c = null, p, m;
      switch (t) {
        case "input":
          p = E(e, a), m = E(e, i), c = [];
          break;
        case "select":
          p = Ms(e, a), m = Ms(e, i), c = [];
          break;
        case "textarea":
          p = Gd(e, a), m = Gd(e, i), c = [];
          break;
        default:
          p = a, m = i, typeof p.onClick != "function" && typeof m.onClick == "function" && Dm(e);
          break;
      }
      Ps(t, m);
      var y, C, b = null;
      for (y in p)
        if (!(m.hasOwnProperty(y) || !p.hasOwnProperty(y) || p[y] == null))
          if (y === Tc) {
            var M = p[y];
            for (C in M)
              M.hasOwnProperty(C) && (b || (b = {}), b[C] = "");
          } else
            y === qp || y === Cc || y === Cm || y === Xu || y === J0 || (Qn.hasOwnProperty(y) ? c || (c = []) : (c = c || []).push(y, null));
      for (y in m) {
        var N = m[y], B = p != null ? p[y] : void 0;
        if (!(!m.hasOwnProperty(y) || N === B || N == null && B == null))
          if (y === Tc)
            if (N && Object.freeze(N), B) {
              for (C in B)
                B.hasOwnProperty(C) && (!N || !N.hasOwnProperty(C)) && (b || (b = {}), b[C] = "");
              for (C in N)
                N.hasOwnProperty(C) && B[C] !== N[C] && (b || (b = {}), b[C] = N[C]);
            } else
              b || (c || (c = []), c.push(y, b)), b = N;
          else if (y === qp) {
            var Y = N ? N[Tm] : void 0, X = B ? B[Tm] : void 0;
            Y != null && X !== Y && (c = c || []).push(y, Y);
          } else
            y === Cc ? (typeof N == "string" || typeof N == "number") && (c = c || []).push(y, "" + N) : y === Cm || y === Xu || (Qn.hasOwnProperty(y) ? (N != null && (typeof N != "function" && wm(y, N), y === "onScroll" && wn("scroll", e)), !c && B !== N && (c = [])) : (c = c || []).push(y, N));
      }
      return b && (Eh(b, m[Tc]), (c = c || []).push(Tc, b)), c;
    }
    function q1(e, t, a, i, l) {
      a === "input" && l.type === "radio" && l.name != null && I(e, l);
      var c = bl(a, i), p = bl(a, l);
      switch (Y1(e, t, c, p), a) {
        case "input":
          K(e, l);
          break;
        case "textarea":
          uh(e, l);
          break;
        case "select":
          Eg(e, l);
          break;
      }
    }
    function X1(e) {
      {
        var t = e.toLowerCase();
        return Zc.hasOwnProperty(t) && Zc[t] || null;
      }
    }
    function Z1(e, t, a, i, l, c, p) {
      var m, y;
      switch (m = bl(t, a), bm(t, a), t) {
        case "dialog":
          wn("cancel", e), wn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          wn("load", e);
          break;
        case "video":
        case "audio":
          for (var C = 0; C < Gp.length; C++)
            wn(Gp[C], e);
          break;
        case "source":
          wn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          wn("error", e), wn("load", e);
          break;
        case "details":
          wn("toggle", e);
          break;
        case "input":
          R(e, a), wn("invalid", e);
          break;
        case "option":
          qt(e, a);
          break;
        case "select":
          zs(e, a), wn("invalid", e);
          break;
        case "textarea":
          lh(e, a), wn("invalid", e);
          break;
      }
      Ps(t, a);
      {
        y = /* @__PURE__ */ new Set();
        for (var b = e.attributes, M = 0; M < b.length; M++) {
          var N = b[M].name.toLowerCase();
          switch (N) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              y.add(b[M].name);
          }
        }
      }
      var B = null;
      for (var Y in a)
        if (a.hasOwnProperty(Y)) {
          var X = a[Y];
          if (Y === Cc)
            typeof X == "string" ? e.textContent !== X && (a[Xu] !== !0 && xm(e.textContent, X, c, p), B = [Cc, X]) : typeof X == "number" && e.textContent !== "" + X && (a[Xu] !== !0 && xm(e.textContent, X, c, p), B = [Cc, "" + X]);
          else if (Qn.hasOwnProperty(Y))
            X != null && (typeof X != "function" && wm(Y, X), Y === "onScroll" && wn("scroll", e));
          else if (p && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof m == "boolean") {
            var De = void 0, Xe = m && Ie ? null : ar(Y);
            if (a[Xu] !== !0) {
              if (!(Y === Cm || Y === Xu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              Y === "value" || Y === "checked" || Y === "selected")) {
                if (Y === qp) {
                  var Ve = e.innerHTML, Lt = X ? X[Tm] : void 0;
                  if (Lt != null) {
                    var Ot = nC(e, Lt);
                    Ot !== Ve && Xp(Y, Ve, Ot);
                  }
                } else if (Y === Tc) {
                  if (y.delete(Y), tC) {
                    var $ = Og(X);
                    De = e.getAttribute("style"), $ !== De && Xp(Y, De, $);
                  }
                } else if (m && !Ie)
                  y.delete(Y.toLowerCase()), De = La(e, Y, X), X !== De && Xp(Y, De, X);
                else if (!_n(Y, Xe, m) && !Kt(Y, X, Xe, m)) {
                  var Z = !1;
                  if (Xe !== null)
                    y.delete(Xe.attributeName), De = ii(e, Y, X, Xe);
                  else {
                    var P = i;
                    if (P === eo && (P = Kd(t)), P === eo)
                      y.delete(Y.toLowerCase());
                    else {
                      var se = X1(Y);
                      se !== null && se !== Y && (Z = !0, y.delete(se)), y.delete(Y);
                    }
                    De = La(e, Y, X);
                  }
                  var Oe = Ie;
                  !Oe && X !== De && !Z && Xp(Y, De, X);
                }
              }
            }
          }
        }
      switch (p && // $FlowFixMe - Should be inferred as not undefined.
      y.size > 0 && a[Xu] !== !0 && eC(y), t) {
        case "input":
          Xi(e), pe(e, a, !0);
          break;
        case "textarea":
          Xi(e), Kc(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Dm(e);
          break;
      }
      return B;
    }
    function J1(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function uE(e, t) {
      {
        if (Qa)
          return;
        Qa = !0, _("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function sE(e, t) {
      {
        if (Qa)
          return;
        Qa = !0, _('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function cE(e, t, a) {
      {
        if (Qa)
          return;
        Qa = !0, _("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function fE(e, t) {
      {
        if (t === "" || Qa)
          return;
        Qa = !0, _('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function ex(e, t, a) {
      switch (t) {
        case "input":
          Ue(e, a);
          return;
        case "textarea":
          _g(e, a);
          return;
        case "select":
          ih(e, a);
          return;
      }
    }
    var Zp = function() {
    }, Jp = function() {
    };
    {
      var tx = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], aC = [
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
      ], nx = aC.concat(["button"]), rx = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], iC = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      Jp = function(e, t) {
        var a = bt({}, e || iC), i = {
          tag: t
        };
        return aC.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), nx.indexOf(t) !== -1 && (a.pTagInButtonScope = null), tx.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var ax = function(e, t) {
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
            return rx.indexOf(t) === -1;
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
      }, ix = function(e, t) {
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
      }, oC = {};
      Zp = function(e, t, a) {
        a = a || iC;
        var i = a.current, l = i && i.tag;
        t != null && (e != null && _("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var c = ax(e, l) ? null : i, p = c ? null : ix(e, a), m = c || p;
        if (m) {
          var y = m.tag, C = !!c + "|" + e + "|" + y;
          if (!oC[C]) {
            oC[C] = !0;
            var b = e, M = "";
            if (e === "#text" ? /\S/.test(t) ? b = "Text nodes" : (b = "Whitespace text nodes", M = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : b = "<" + e + ">", c) {
              var N = "";
              y === "table" && e === "tr" && (N += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), _("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", b, y, M, N);
            } else
              _("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", b, y);
          }
        }
      };
    }
    var Om = "suppressHydrationWarning", Am = "$", km = "/$", ev = "$?", tv = "$!", ox = "style", dE = null, pE = null;
    function lx(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case ga:
        case qd: {
          t = i === ga ? "#document" : "#fragment";
          var l = e.documentElement;
          a = l ? l.namespaceURI : Qd(null, "");
          break;
        }
        default: {
          var c = i === Dn ? e.parentNode : e, p = c.namespaceURI || null;
          t = c.tagName, a = Qd(p, t);
          break;
        }
      }
      {
        var m = t.toLowerCase(), y = Jp(null, m);
        return {
          namespace: a,
          ancestorInfo: y
        };
      }
    }
    function ux(e, t, a) {
      {
        var i = e, l = Qd(i.namespace, t), c = Jp(i.ancestorInfo, t);
        return {
          namespace: l,
          ancestorInfo: c
        };
      }
    }
    function Uj(e) {
      return e;
    }
    function sx(e) {
      dE = Bu(), pE = T1();
      var t = null;
      return la(!1), t;
    }
    function cx(e) {
      b1(pE), la(dE), dE = null, pE = null;
    }
    function fx(e, t, a, i, l) {
      var c;
      {
        var p = i;
        if (Zp(e, null, p.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var m = "" + t.children, y = Jp(p.ancestorInfo, e);
          Zp(null, m, y);
        }
        c = p.namespace;
      }
      var C = W1(e, t, a, c);
      return av(l, C), SE(C, t), C;
    }
    function dx(e, t) {
      e.appendChild(t);
    }
    function px(e, t, a, i, l) {
      switch (K1(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function vx(e, t, a, i, l, c) {
      {
        var p = c;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var m = "" + i.children, y = Jp(p.ancestorInfo, t);
          Zp(null, m, y);
        }
      }
      return Q1(e, t, a, i);
    }
    function vE(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function hx(e, t, a, i) {
      {
        var l = a;
        Zp(null, e, l.ancestorInfo);
      }
      var c = G1(e, t);
      return av(i, c), c;
    }
    function mx() {
      var e = window.event;
      return e === void 0 ? ki : $f(e.type);
    }
    var hE = typeof setTimeout == "function" ? setTimeout : void 0, yx = typeof clearTimeout == "function" ? clearTimeout : void 0, mE = -1, lC = typeof Promise == "function" ? Promise : void 0, gx = typeof queueMicrotask == "function" ? queueMicrotask : typeof lC < "u" ? function(e) {
      return lC.resolve(null).then(e).catch(Ex);
    } : hE;
    function Ex(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function _x(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function Sx(e, t, a, i, l, c) {
      q1(e, t, a, i, l), SE(e, l);
    }
    function uC(e) {
      Us(e, "");
    }
    function Cx(e, t, a) {
      e.nodeValue = a;
    }
    function Tx(e, t) {
      e.appendChild(t);
    }
    function bx(e, t) {
      var a;
      e.nodeType === Dn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Dm(a);
    }
    function wx(e, t, a) {
      e.insertBefore(t, a);
    }
    function Rx(e, t, a) {
      e.nodeType === Dn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function xx(e, t) {
      e.removeChild(t);
    }
    function Dx(e, t) {
      e.nodeType === Dn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function yE(e, t) {
      var a = t, i = 0;
      do {
        var l = a.nextSibling;
        if (e.removeChild(a), l && l.nodeType === Dn) {
          var c = l.data;
          if (c === km)
            if (i === 0) {
              e.removeChild(l), Nn(t);
              return;
            } else
              i--;
          else
            (c === Am || c === ev || c === tv) && i++;
        }
        a = l;
      } while (a);
      Nn(t);
    }
    function Ox(e, t) {
      e.nodeType === Dn ? yE(e.parentNode, t) : e.nodeType === Xr && yE(e, t), Nn(e);
    }
    function Ax(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function kx(e) {
      e.nodeValue = "";
    }
    function Nx(e, t) {
      e = e;
      var a = t[ox], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = jo("display", i);
    }
    function Lx(e, t) {
      e.nodeValue = t;
    }
    function Mx(e) {
      e.nodeType === Xr ? e.textContent = "" : e.nodeType === ga && e.documentElement && e.removeChild(e.documentElement);
    }
    function zx(e, t, a) {
      return e.nodeType !== Xr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function Ux(e, t) {
      return t === "" || e.nodeType !== to ? null : e;
    }
    function jx(e) {
      return e.nodeType !== Dn ? null : e;
    }
    function sC(e) {
      return e.data === ev;
    }
    function gE(e) {
      return e.data === tv;
    }
    function $x(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, l;
      return t && (a = t.dgst, i = t.msg, l = t.stck), {
        message: i,
        digest: a,
        stack: l
      };
    }
    function Px(e, t) {
      e._reactRetry = t;
    }
    function Nm(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Xr || t === to)
          break;
        if (t === Dn) {
          var a = e.data;
          if (a === Am || a === tv || a === ev)
            break;
          if (a === km)
            return null;
        }
      }
      return e;
    }
    function nv(e) {
      return Nm(e.nextSibling);
    }
    function Hx(e) {
      return Nm(e.firstChild);
    }
    function Fx(e) {
      return Nm(e.firstChild);
    }
    function Vx(e) {
      return Nm(e.nextSibling);
    }
    function Ix(e, t, a, i, l, c, p) {
      av(c, e), SE(e, a);
      var m;
      {
        var y = l;
        m = y.namespace;
      }
      var C = (c.mode & Fe) !== qe;
      return Z1(e, t, a, m, i, C, p);
    }
    function Bx(e, t, a, i) {
      return av(a, e), a.mode & Fe, J1(e, t);
    }
    function Yx(e, t) {
      av(t, e);
    }
    function Wx(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Dn) {
          var i = t.data;
          if (i === km) {
            if (a === 0)
              return nv(t);
            a--;
          } else
            (i === Am || i === tv || i === ev) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function cC(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Dn) {
          var i = t.data;
          if (i === Am || i === tv || i === ev) {
            if (a === 0)
              return t;
            a--;
          } else
            i === km && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function Gx(e) {
      Nn(e);
    }
    function Kx(e) {
      Nn(e);
    }
    function Qx(e) {
      return e !== "head" && e !== "body";
    }
    function qx(e, t, a, i) {
      var l = !0;
      xm(t.nodeValue, a, i, l);
    }
    function Xx(e, t, a, i, l, c) {
      if (t[Om] !== !0) {
        var p = !0;
        xm(i.nodeValue, l, c, p);
      }
    }
    function Zx(e, t) {
      t.nodeType === Xr ? uE(e, t) : t.nodeType === Dn || sE(e, t);
    }
    function Jx(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Xr ? uE(a, t) : t.nodeType === Dn || sE(a, t));
      }
    }
    function eD(e, t, a, i, l) {
      (l || t[Om] !== !0) && (i.nodeType === Xr ? uE(a, i) : i.nodeType === Dn || sE(a, i));
    }
    function tD(e, t, a) {
      cE(e, t);
    }
    function nD(e, t) {
      fE(e, t);
    }
    function rD(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && cE(i, t);
      }
    }
    function aD(e, t) {
      {
        var a = e.parentNode;
        a !== null && fE(a, t);
      }
    }
    function iD(e, t, a, i, l, c) {
      (c || t[Om] !== !0) && cE(a, i);
    }
    function oD(e, t, a, i, l) {
      (l || t[Om] !== !0) && fE(a, i);
    }
    function lD(e) {
      _("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function uD(e) {
      Kp(e);
    }
    var nd = Math.random().toString(36).slice(2), rd = "__reactFiber$" + nd, EE = "__reactProps$" + nd, rv = "__reactContainer$" + nd, _E = "__reactEvents$" + nd, sD = "__reactListeners$" + nd, cD = "__reactHandles$" + nd;
    function fD(e) {
      delete e[rd], delete e[EE], delete e[_E], delete e[sD], delete e[cD];
    }
    function av(e, t) {
      t[rd] = e;
    }
    function Lm(e, t) {
      t[rv] = e;
    }
    function fC(e) {
      e[rv] = null;
    }
    function iv(e) {
      return !!e[rv];
    }
    function bc(e) {
      var t = e[rd];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[rv] || a[rd], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var l = cC(e); l !== null; ) {
              var c = l[rd];
              if (c)
                return c;
              l = cC(l);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Zu(e) {
      var t = e[rd] || e[rv];
      return t && (t.tag === q || t.tag === re || t.tag === ce || t.tag === V) ? t : null;
    }
    function ad(e) {
      if (e.tag === q || e.tag === re)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Mm(e) {
      return e[EE] || null;
    }
    function SE(e, t) {
      e[EE] = t;
    }
    function dD(e) {
      var t = e[_E];
      return t === void 0 && (t = e[_E] = /* @__PURE__ */ new Set()), t;
    }
    var dC = {}, pC = g.ReactDebugCurrentFrame;
    function zm(e) {
      if (e) {
        var t = e._owner, a = At(e.type, e._source, t ? t.type : null);
        pC.setExtraStackFrame(a);
      } else
        pC.setExtraStackFrame(null);
    }
    function ho(e, t, a, i, l) {
      {
        var c = Function.call.bind(Xn);
        for (var p in e)
          if (c(e, p)) {
            var m = void 0;
            try {
              if (typeof e[p] != "function") {
                var y = Error((i || "React class") + ": " + a + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw y.name = "Invariant Violation", y;
              }
              m = e[p](t, p, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (C) {
              m = C;
            }
            m && !(m instanceof Error) && (zm(l), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, p, typeof m), zm(null)), m instanceof Error && !(m.message in dC) && (dC[m.message] = !0, zm(l), _("Failed %s type: %s", a, m.message), zm(null));
          }
      }
    }
    var CE = [], Um;
    Um = [];
    var Gl = -1;
    function Ju(e) {
      return {
        current: e
      };
    }
    function ua(e, t) {
      if (Gl < 0) {
        _("Unexpected pop.");
        return;
      }
      t !== Um[Gl] && _("Unexpected Fiber popped."), e.current = CE[Gl], CE[Gl] = null, Um[Gl] = null, Gl--;
    }
    function sa(e, t, a) {
      Gl++, CE[Gl] = e.current, Um[Gl] = a, e.current = t;
    }
    var TE;
    TE = {};
    var pi = {};
    Object.freeze(pi);
    var Kl = Ju(pi), nl = Ju(!1), bE = pi;
    function id(e, t, a) {
      return a && rl(t) ? bE : Kl.current;
    }
    function vC(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function od(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return pi;
        var l = e.stateNode;
        if (l && l.__reactInternalMemoizedUnmaskedChildContext === t)
          return l.__reactInternalMemoizedMaskedChildContext;
        var c = {};
        for (var p in i)
          c[p] = t[p];
        {
          var m = ft(e) || "Unknown";
          ho(i, c, "context", m);
        }
        return l && vC(e, t, c), c;
      }
    }
    function jm() {
      return nl.current;
    }
    function rl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function $m(e) {
      ua(nl, e), ua(Kl, e);
    }
    function wE(e) {
      ua(nl, e), ua(Kl, e);
    }
    function hC(e, t, a) {
      {
        if (Kl.current !== pi)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        sa(Kl, t, e), sa(nl, a, e);
      }
    }
    function mC(e, t, a) {
      {
        var i = e.stateNode, l = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var c = ft(e) || "Unknown";
            TE[c] || (TE[c] = !0, _("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", c, c));
          }
          return a;
        }
        var p = i.getChildContext();
        for (var m in p)
          if (!(m in l))
            throw new Error((ft(e) || "Unknown") + '.getChildContext(): key "' + m + '" is not defined in childContextTypes.');
        {
          var y = ft(e) || "Unknown";
          ho(l, p, "child context", y);
        }
        return bt({}, a, p);
      }
    }
    function Pm(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || pi;
        return bE = Kl.current, sa(Kl, a, e), sa(nl, nl.current, e), !0;
      }
    }
    function yC(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var l = mC(e, t, bE);
          i.__reactInternalMemoizedMergedChildContext = l, ua(nl, e), ua(Kl, e), sa(Kl, l, e), sa(nl, a, e);
        } else
          ua(nl, e), sa(nl, a, e);
      }
    }
    function pD(e) {
      {
        if (!Sa(e) || e.tag !== z)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case V:
              return t.stateNode.context;
            case z: {
              var a = t.type;
              if (rl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var es = 0, Hm = 1, Ql = null, RE = !1, xE = !1;
    function gC(e) {
      Ql === null ? Ql = [e] : Ql.push(e);
    }
    function vD(e) {
      RE = !0, gC(e);
    }
    function EC() {
      RE && ts();
    }
    function ts() {
      if (!xE && Ql !== null) {
        xE = !0;
        var e = 0, t = Ba();
        try {
          var a = !0, i = Ql;
          for (kn(Hn); e < i.length; e++) {
            var l = i[e];
            do
              l = l(a);
            while (l !== null);
          }
          Ql = null, RE = !1;
        } catch (c) {
          throw Ql !== null && (Ql = Ql.slice(e + 1)), mp(na, ts), c;
        } finally {
          kn(t), xE = !1;
        }
      }
      return null;
    }
    var ld = [], ud = 0, Fm = null, Vm = 0, zi = [], Ui = 0, wc = null, ql = 1, Xl = "";
    function hD(e) {
      return xc(), (e.flags & zh) !== Qe;
    }
    function mD(e) {
      return xc(), Vm;
    }
    function yD() {
      var e = Xl, t = ql, a = t & ~gD(t);
      return a.toString(32) + e;
    }
    function Rc(e, t) {
      xc(), ld[ud++] = Vm, ld[ud++] = Fm, Fm = e, Vm = t;
    }
    function _C(e, t, a) {
      xc(), zi[Ui++] = ql, zi[Ui++] = Xl, zi[Ui++] = wc, wc = e;
      var i = ql, l = Xl, c = Im(i) - 1, p = i & ~(1 << c), m = a + 1, y = Im(t) + c;
      if (y > 30) {
        var C = c - c % 5, b = (1 << C) - 1, M = (p & b).toString(32), N = p >> C, B = c - C, Y = Im(t) + B, X = m << B, De = X | N, Xe = M + l;
        ql = 1 << Y | De, Xl = Xe;
      } else {
        var Ve = m << c, Lt = Ve | p, Ot = l;
        ql = 1 << y | Lt, Xl = Ot;
      }
    }
    function DE(e) {
      xc();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Rc(e, a), _C(e, a, i);
      }
    }
    function Im(e) {
      return 32 - tc(e);
    }
    function gD(e) {
      return 1 << Im(e) - 1;
    }
    function OE(e) {
      for (; e === Fm; )
        Fm = ld[--ud], ld[ud] = null, Vm = ld[--ud], ld[ud] = null;
      for (; e === wc; )
        wc = zi[--Ui], zi[Ui] = null, Xl = zi[--Ui], zi[Ui] = null, ql = zi[--Ui], zi[Ui] = null;
    }
    function ED() {
      return xc(), wc !== null ? {
        id: ql,
        overflow: Xl
      } : null;
    }
    function _D(e, t) {
      xc(), zi[Ui++] = ql, zi[Ui++] = Xl, zi[Ui++] = wc, ql = t.id, Xl = t.overflow, wc = e;
    }
    function xc() {
      jr() || _("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Ur = null, ji = null, mo = !1, Dc = !1, ns = null;
    function SD() {
      mo && _("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function SC() {
      Dc = !0;
    }
    function CD() {
      return Dc;
    }
    function TD(e) {
      var t = e.stateNode.containerInfo;
      return ji = Fx(t), Ur = e, mo = !0, ns = null, Dc = !1, !0;
    }
    function bD(e, t, a) {
      return ji = Vx(t), Ur = e, mo = !0, ns = null, Dc = !1, a !== null && _D(e, a), !0;
    }
    function CC(e, t) {
      switch (e.tag) {
        case V: {
          Zx(e.stateNode.containerInfo, t);
          break;
        }
        case q: {
          var a = (e.mode & Fe) !== qe;
          eD(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case ce: {
          var i = e.memoizedState;
          i.dehydrated !== null && Jx(i.dehydrated, t);
          break;
        }
      }
    }
    function TC(e, t) {
      CC(e, t);
      var a = xk();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Pt) : i.push(a);
    }
    function AE(e, t) {
      {
        if (Dc)
          return;
        switch (e.tag) {
          case V: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case q:
                var i = t.type;
                t.pendingProps, tD(a, i);
                break;
              case re:
                var l = t.pendingProps;
                nD(a, l);
                break;
            }
            break;
          }
          case q: {
            var c = e.type, p = e.memoizedProps, m = e.stateNode;
            switch (t.tag) {
              case q: {
                var y = t.type, C = t.pendingProps, b = (e.mode & Fe) !== qe;
                iD(
                  c,
                  p,
                  m,
                  y,
                  C,
                  // TODO: Delete this argument when we remove the legacy root API.
                  b
                );
                break;
              }
              case re: {
                var M = t.pendingProps, N = (e.mode & Fe) !== qe;
                oD(
                  c,
                  p,
                  m,
                  M,
                  // TODO: Delete this argument when we remove the legacy root API.
                  N
                );
                break;
              }
            }
            break;
          }
          case ce: {
            var B = e.memoizedState, Y = B.dehydrated;
            if (Y !== null)
              switch (t.tag) {
                case q:
                  var X = t.type;
                  t.pendingProps, rD(Y, X);
                  break;
                case re:
                  var De = t.pendingProps;
                  aD(Y, De);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function bC(e, t) {
      t.flags = t.flags & ~Ri | nn, AE(e, t);
    }
    function wC(e, t) {
      switch (e.tag) {
        case q: {
          var a = e.type;
          e.pendingProps;
          var i = zx(t, a);
          return i !== null ? (e.stateNode = i, Ur = e, ji = Hx(i), !0) : !1;
        }
        case re: {
          var l = e.pendingProps, c = Ux(t, l);
          return c !== null ? (e.stateNode = c, Ur = e, ji = null, !0) : !1;
        }
        case ce: {
          var p = jx(t);
          if (p !== null) {
            var m = {
              dehydrated: p,
              treeContext: ED(),
              retryLane: ba
            };
            e.memoizedState = m;
            var y = Dk(p);
            return y.return = e, e.child = y, Ur = e, ji = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function kE(e) {
      return (e.mode & Fe) !== qe && (e.flags & pt) === Qe;
    }
    function NE(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function LE(e) {
      if (mo) {
        var t = ji;
        if (!t) {
          kE(e) && (AE(Ur, e), NE()), bC(Ur, e), mo = !1, Ur = e;
          return;
        }
        var a = t;
        if (!wC(e, t)) {
          kE(e) && (AE(Ur, e), NE()), t = nv(a);
          var i = Ur;
          if (!t || !wC(e, t)) {
            bC(Ur, e), mo = !1, Ur = e;
            return;
          }
          TC(i, a);
        }
      }
    }
    function wD(e, t, a) {
      var i = e.stateNode, l = !Dc, c = Ix(i, e.type, e.memoizedProps, t, a, e, l);
      return e.updateQueue = c, c !== null;
    }
    function RD(e) {
      var t = e.stateNode, a = e.memoizedProps, i = Bx(t, a, e);
      if (i) {
        var l = Ur;
        if (l !== null)
          switch (l.tag) {
            case V: {
              var c = l.stateNode.containerInfo, p = (l.mode & Fe) !== qe;
              qx(
                c,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                p
              );
              break;
            }
            case q: {
              var m = l.type, y = l.memoizedProps, C = l.stateNode, b = (l.mode & Fe) !== qe;
              Xx(
                m,
                y,
                C,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                b
              );
              break;
            }
          }
      }
      return i;
    }
    function xD(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      Yx(a, e);
    }
    function DD(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return Wx(a);
    }
    function RC(e) {
      for (var t = e.return; t !== null && t.tag !== q && t.tag !== V && t.tag !== ce; )
        t = t.return;
      Ur = t;
    }
    function Bm(e) {
      if (e !== Ur)
        return !1;
      if (!mo)
        return RC(e), mo = !0, !1;
      if (e.tag !== V && (e.tag !== q || Qx(e.type) && !vE(e.type, e.memoizedProps))) {
        var t = ji;
        if (t)
          if (kE(e))
            xC(e), NE();
          else
            for (; t; )
              TC(e, t), t = nv(t);
      }
      return RC(e), e.tag === ce ? ji = DD(e) : ji = Ur ? nv(e.stateNode) : null, !0;
    }
    function OD() {
      return mo && ji !== null;
    }
    function xC(e) {
      for (var t = ji; t; )
        CC(e, t), t = nv(t);
    }
    function sd() {
      Ur = null, ji = null, mo = !1, Dc = !1;
    }
    function DC() {
      ns !== null && (Cb(ns), ns = null);
    }
    function jr() {
      return mo;
    }
    function ME(e) {
      ns === null ? ns = [e] : ns.push(e);
    }
    var AD = g.ReactCurrentBatchConfig, kD = null;
    function ND() {
      return AD.transition;
    }
    var yo = {
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
      var LD = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & On && (t = a), a = a.return;
        return t;
      }, Oc = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, ov = [], lv = [], uv = [], sv = [], cv = [], fv = [], Ac = /* @__PURE__ */ new Set();
      yo.recordUnsafeLifecycleWarnings = function(e, t) {
        Ac.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && ov.push(e), e.mode & On && typeof t.UNSAFE_componentWillMount == "function" && lv.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && uv.push(e), e.mode & On && typeof t.UNSAFE_componentWillReceiveProps == "function" && sv.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && cv.push(e), e.mode & On && typeof t.UNSAFE_componentWillUpdate == "function" && fv.push(e));
      }, yo.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        ov.length > 0 && (ov.forEach(function(N) {
          e.add(ft(N) || "Component"), Ac.add(N.type);
        }), ov = []);
        var t = /* @__PURE__ */ new Set();
        lv.length > 0 && (lv.forEach(function(N) {
          t.add(ft(N) || "Component"), Ac.add(N.type);
        }), lv = []);
        var a = /* @__PURE__ */ new Set();
        uv.length > 0 && (uv.forEach(function(N) {
          a.add(ft(N) || "Component"), Ac.add(N.type);
        }), uv = []);
        var i = /* @__PURE__ */ new Set();
        sv.length > 0 && (sv.forEach(function(N) {
          i.add(ft(N) || "Component"), Ac.add(N.type);
        }), sv = []);
        var l = /* @__PURE__ */ new Set();
        cv.length > 0 && (cv.forEach(function(N) {
          l.add(ft(N) || "Component"), Ac.add(N.type);
        }), cv = []);
        var c = /* @__PURE__ */ new Set();
        if (fv.length > 0 && (fv.forEach(function(N) {
          c.add(ft(N) || "Component"), Ac.add(N.type);
        }), fv = []), t.size > 0) {
          var p = Oc(t);
          _(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, p);
        }
        if (i.size > 0) {
          var m = Oc(i);
          _(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, m);
        }
        if (c.size > 0) {
          var y = Oc(c);
          _(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, y);
        }
        if (e.size > 0) {
          var C = Oc(e);
          O(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, C);
        }
        if (a.size > 0) {
          var b = Oc(a);
          O(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, b);
        }
        if (l.size > 0) {
          var M = Oc(l);
          O(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, M);
        }
      };
      var Ym = /* @__PURE__ */ new Map(), OC = /* @__PURE__ */ new Set();
      yo.recordLegacyContextWarning = function(e, t) {
        var a = LD(e);
        if (a === null) {
          _("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!OC.has(e.type)) {
          var i = Ym.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Ym.set(a, i)), i.push(e));
        }
      }, yo.flushLegacyContextWarning = function() {
        Ym.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(c) {
              i.add(ft(c) || "Component"), OC.add(c.type);
            });
            var l = Oc(i);
            try {
              Cn(a), _(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, l);
            } finally {
              cn();
            }
          }
        });
      }, yo.discardPendingWarnings = function() {
        ov = [], lv = [], uv = [], sv = [], cv = [], fv = [], Ym = /* @__PURE__ */ new Map();
      };
    }
    function go(e, t) {
      if (e && e.defaultProps) {
        var a = bt({}, t), i = e.defaultProps;
        for (var l in i)
          a[l] === void 0 && (a[l] = i[l]);
        return a;
      }
      return t;
    }
    var zE = Ju(null), UE;
    UE = {};
    var Wm = null, cd = null, jE = null, Gm = !1;
    function Km() {
      Wm = null, cd = null, jE = null, Gm = !1;
    }
    function AC() {
      Gm = !0;
    }
    function kC() {
      Gm = !1;
    }
    function NC(e, t, a) {
      sa(zE, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== UE && _("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = UE;
    }
    function $E(e, t) {
      var a = zE.current;
      ua(zE, t), e._currentValue = a;
    }
    function PE(e, t, a) {
      for (var i = e; i !== null; ) {
        var l = i.alternate;
        if (Pl(i.childLanes, t) ? l !== null && !Pl(l.childLanes, t) && (l.childLanes = yt(l.childLanes, t)) : (i.childLanes = yt(i.childLanes, t), l !== null && (l.childLanes = yt(l.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && _("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function MD(e, t, a) {
      zD(e, t, a);
    }
    function zD(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var l = void 0, c = i.dependencies;
        if (c !== null) {
          l = i.child;
          for (var p = c.firstContext; p !== null; ) {
            if (p.context === t) {
              if (i.tag === z) {
                var m = Mu(a), y = Zl(sn, m);
                y.tag = qm;
                var C = i.updateQueue;
                if (C !== null) {
                  var b = C.shared, M = b.pending;
                  M === null ? y.next = y : (y.next = M.next, M.next = y), b.pending = y;
                }
              }
              i.lanes = yt(i.lanes, a);
              var N = i.alternate;
              N !== null && (N.lanes = yt(N.lanes, a)), PE(i.return, a, e), c.lanes = yt(c.lanes, a);
              break;
            }
            p = p.next;
          }
        } else if (i.tag === Re)
          l = i.type === e.type ? null : i.child;
        else if (i.tag === gt) {
          var B = i.return;
          if (B === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          B.lanes = yt(B.lanes, a);
          var Y = B.alternate;
          Y !== null && (Y.lanes = yt(Y.lanes, a)), PE(B, a, e), l = i.sibling;
        } else
          l = i.child;
        if (l !== null)
          l.return = i;
        else
          for (l = i; l !== null; ) {
            if (l === e) {
              l = null;
              break;
            }
            var X = l.sibling;
            if (X !== null) {
              X.return = l.return, l = X;
              break;
            }
            l = l.return;
          }
        i = l;
      }
    }
    function fd(e, t) {
      Wm = e, cd = null, jE = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (oa(a.lanes, t) && wv(), a.firstContext = null);
      }
    }
    function sr(e) {
      Gm && _("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (jE !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (cd === null) {
          if (Wm === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          cd = a, Wm.dependencies = {
            lanes: J,
            firstContext: a
          };
        } else
          cd = cd.next = a;
      }
      return t;
    }
    var kc = null;
    function HE(e) {
      kc === null ? kc = [e] : kc.push(e);
    }
    function UD() {
      if (kc !== null) {
        for (var e = 0; e < kc.length; e++) {
          var t = kc[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, l = t.pending;
            if (l !== null) {
              var c = l.next;
              l.next = i, a.next = c;
            }
            t.pending = a;
          }
        }
        kc = null;
      }
    }
    function LC(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, HE(t)) : (a.next = l.next, l.next = a), t.interleaved = a, Qm(e, i);
    }
    function jD(e, t, a, i) {
      var l = t.interleaved;
      l === null ? (a.next = a, HE(t)) : (a.next = l.next, l.next = a), t.interleaved = a;
    }
    function $D(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, HE(t)) : (a.next = l.next, l.next = a), t.interleaved = a, Qm(e, i);
    }
    function qa(e, t) {
      return Qm(e, t);
    }
    var PD = Qm;
    function Qm(e, t) {
      e.lanes = yt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = yt(a.lanes, t)), a === null && (e.flags & (nn | Ri)) !== Qe && Mb(e);
      for (var i = e, l = e.return; l !== null; )
        l.childLanes = yt(l.childLanes, t), a = l.alternate, a !== null ? a.childLanes = yt(a.childLanes, t) : (l.flags & (nn | Ri)) !== Qe && Mb(e), i = l, l = l.return;
      if (i.tag === V) {
        var c = i.stateNode;
        return c;
      } else
        return null;
    }
    var MC = 0, zC = 1, qm = 2, FE = 3, Xm = !1, VE, Zm;
    VE = !1, Zm = null;
    function IE(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: J
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function UC(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var l = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = l;
      }
    }
    function Zl(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: MC,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function rs(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var l = i.shared;
      if (Zm === l && !VE && (_("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), VE = !0), PA()) {
        var c = l.pending;
        return c === null ? t.next = t : (t.next = c.next, c.next = t), l.pending = t, PD(e, a);
      } else
        return $D(e, l, t, a);
    }
    function Jm(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var l = i.shared;
        if (xp(a)) {
          var c = l.lanes;
          c = Of(c, e.pendingLanes);
          var p = yt(c, a);
          l.lanes = p, Dp(e, p);
        }
      }
    }
    function BE(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var l = i.updateQueue;
        if (a === l) {
          var c = null, p = null, m = a.firstBaseUpdate;
          if (m !== null) {
            var y = m;
            do {
              var C = {
                eventTime: y.eventTime,
                lane: y.lane,
                tag: y.tag,
                payload: y.payload,
                callback: y.callback,
                next: null
              };
              p === null ? c = p = C : (p.next = C, p = C), y = y.next;
            } while (y !== null);
            p === null ? c = p = t : (p.next = t, p = t);
          } else
            c = p = t;
          a = {
            baseState: l.baseState,
            firstBaseUpdate: c,
            lastBaseUpdate: p,
            shared: l.shared,
            effects: l.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var b = a.lastBaseUpdate;
      b === null ? a.firstBaseUpdate = t : b.next = t, a.lastBaseUpdate = t;
    }
    function HD(e, t, a, i, l, c) {
      switch (a.tag) {
        case zC: {
          var p = a.payload;
          if (typeof p == "function") {
            AC();
            var m = p.call(c, i, l);
            {
              if (e.mode & On) {
                un(!0);
                try {
                  p.call(c, i, l);
                } finally {
                  un(!1);
                }
              }
              kC();
            }
            return m;
          }
          return p;
        }
        case FE:
          e.flags = e.flags & ~dr | pt;
        case MC: {
          var y = a.payload, C;
          if (typeof y == "function") {
            AC(), C = y.call(c, i, l);
            {
              if (e.mode & On) {
                un(!0);
                try {
                  y.call(c, i, l);
                } finally {
                  un(!1);
                }
              }
              kC();
            }
          } else
            C = y;
          return C == null ? i : bt({}, i, C);
        }
        case qm:
          return Xm = !0, i;
      }
      return i;
    }
    function ey(e, t, a, i) {
      var l = e.updateQueue;
      Xm = !1, Zm = l.shared;
      var c = l.firstBaseUpdate, p = l.lastBaseUpdate, m = l.shared.pending;
      if (m !== null) {
        l.shared.pending = null;
        var y = m, C = y.next;
        y.next = null, p === null ? c = C : p.next = C, p = y;
        var b = e.alternate;
        if (b !== null) {
          var M = b.updateQueue, N = M.lastBaseUpdate;
          N !== p && (N === null ? M.firstBaseUpdate = C : N.next = C, M.lastBaseUpdate = y);
        }
      }
      if (c !== null) {
        var B = l.baseState, Y = J, X = null, De = null, Xe = null, Ve = c;
        do {
          var Lt = Ve.lane, Ot = Ve.eventTime;
          if (Pl(i, Lt)) {
            if (Xe !== null) {
              var Z = {
                eventTime: Ot,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: $n,
                tag: Ve.tag,
                payload: Ve.payload,
                callback: Ve.callback,
                next: null
              };
              Xe = Xe.next = Z;
            }
            B = HD(e, l, Ve, B, t, a);
            var P = Ve.callback;
            if (P !== null && // If the update was already committed, we should not queue its
            // callback again.
            Ve.lane !== $n) {
              e.flags |= ir;
              var se = l.effects;
              se === null ? l.effects = [Ve] : se.push(Ve);
            }
          } else {
            var $ = {
              eventTime: Ot,
              lane: Lt,
              tag: Ve.tag,
              payload: Ve.payload,
              callback: Ve.callback,
              next: null
            };
            Xe === null ? (De = Xe = $, X = B) : Xe = Xe.next = $, Y = yt(Y, Lt);
          }
          if (Ve = Ve.next, Ve === null) {
            if (m = l.shared.pending, m === null)
              break;
            var Oe = m, Ce = Oe.next;
            Oe.next = null, Ve = Ce, l.lastBaseUpdate = Oe, l.shared.pending = null;
          }
        } while (!0);
        Xe === null && (X = B), l.baseState = X, l.firstBaseUpdate = De, l.lastBaseUpdate = Xe;
        var ot = l.shared.interleaved;
        if (ot !== null) {
          var ht = ot;
          do
            Y = yt(Y, ht.lane), ht = ht.next;
          while (ht !== ot);
        } else
          c === null && (l.shared.lanes = J);
        jv(Y), e.lanes = Y, e.memoizedState = B;
      }
      Zm = null;
    }
    function FD(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function jC() {
      Xm = !1;
    }
    function ty() {
      return Xm;
    }
    function $C(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var l = 0; l < i.length; l++) {
          var c = i[l], p = c.callback;
          p !== null && (c.callback = null, FD(p, a));
        }
    }
    var YE = {}, PC = new u.Component().refs, WE, GE, KE, QE, qE, HC, ny, XE, ZE, JE;
    {
      WE = /* @__PURE__ */ new Set(), GE = /* @__PURE__ */ new Set(), KE = /* @__PURE__ */ new Set(), QE = /* @__PURE__ */ new Set(), XE = /* @__PURE__ */ new Set(), qE = /* @__PURE__ */ new Set(), ZE = /* @__PURE__ */ new Set(), JE = /* @__PURE__ */ new Set();
      var FC = /* @__PURE__ */ new Set();
      ny = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          FC.has(a) || (FC.add(a), _("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, HC = function(e, t) {
        if (t === void 0) {
          var a = zt(e) || "Component";
          qE.has(a) || (qE.add(a), _("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(YE, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(YE);
    }
    function e_(e, t, a, i) {
      var l = e.memoizedState, c = a(i, l);
      {
        if (e.mode & On) {
          un(!0);
          try {
            c = a(i, l);
          } finally {
            un(!1);
          }
        }
        HC(t, c);
      }
      var p = c == null ? l : bt({}, l, c);
      if (e.memoizedState = p, e.lanes === J) {
        var m = e.updateQueue;
        m.baseState = p;
      }
    }
    var t_ = {
      isMounted: Ca,
      enqueueSetState: function(e, t, a) {
        var i = wi(e), l = xa(), c = fs(i), p = Zl(l, c);
        p.payload = t, a != null && (ny(a, "setState"), p.callback = a);
        var m = rs(i, p, c);
        m !== null && (Cr(m, i, c, l), Jm(m, i, c)), pf(i, c);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = wi(e), l = xa(), c = fs(i), p = Zl(l, c);
        p.tag = zC, p.payload = t, a != null && (ny(a, "replaceState"), p.callback = a);
        var m = rs(i, p, c);
        m !== null && (Cr(m, i, c, l), Jm(m, i, c)), pf(i, c);
      },
      enqueueForceUpdate: function(e, t) {
        var a = wi(e), i = xa(), l = fs(a), c = Zl(i, l);
        c.tag = qm, t != null && (ny(t, "forceUpdate"), c.callback = t);
        var p = rs(a, c, l);
        p !== null && (Cr(p, a, l, i), Jm(p, a, l)), Au(a, l);
      }
    };
    function VC(e, t, a, i, l, c, p) {
      var m = e.stateNode;
      if (typeof m.shouldComponentUpdate == "function") {
        var y = m.shouldComponentUpdate(i, c, p);
        {
          if (e.mode & On) {
            un(!0);
            try {
              y = m.shouldComponentUpdate(i, c, p);
            } finally {
              un(!1);
            }
          }
          y === void 0 && _("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", zt(t) || "Component");
        }
        return y;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !nt(a, i) || !nt(l, c) : !0;
    }
    function VD(e, t, a) {
      var i = e.stateNode;
      {
        var l = zt(t) || "Component", c = i.render;
        c || (t.prototype && typeof t.prototype.render == "function" ? _("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", l) : _("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", l)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && _("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", l), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && _("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", l), i.propTypes && _("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", l), i.contextType && _("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", l), i.contextTypes && _("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", l), t.contextType && t.contextTypes && !ZE.has(t) && (ZE.add(t), _("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", l)), typeof i.componentShouldUpdate == "function" && _("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", l), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && _("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", zt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && _("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", l), typeof i.componentDidReceiveProps == "function" && _("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", l), typeof i.componentWillRecieveProps == "function" && _("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", l), typeof i.UNSAFE_componentWillRecieveProps == "function" && _("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", l);
        var p = i.props !== a;
        i.props !== void 0 && p && _("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", l, l), i.defaultProps && _("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", l, l), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !KE.has(t) && (KE.add(t), _("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", zt(t))), typeof i.getDerivedStateFromProps == "function" && _("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof i.getDerivedStateFromError == "function" && _("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof t.getSnapshotBeforeUpdate == "function" && _("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", l);
        var m = i.state;
        m && (typeof m != "object" || Ut(m)) && _("%s.state: must be set to an object or null", l), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && _("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", l);
      }
    }
    function IC(e, t) {
      t.updater = t_, e.stateNode = t, af(t, e), t._reactInternalInstance = YE;
    }
    function BC(e, t, a) {
      var i = !1, l = pi, c = pi, p = t.contextType;
      if ("contextType" in t) {
        var m = (
          // Allow null for conditional declaration
          p === null || p !== void 0 && p.$$typeof === me && p._context === void 0
        );
        if (!m && !JE.has(t)) {
          JE.add(t);
          var y = "";
          p === void 0 ? y = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof p != "object" ? y = " However, it is set to a " + typeof p + "." : p.$$typeof === ie ? y = " Did you accidentally pass the Context.Provider instead?" : p._context !== void 0 ? y = " Did you accidentally pass the Context.Consumer instead?" : y = " However, it is set to an object with keys {" + Object.keys(p).join(", ") + "}.", _("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", zt(t) || "Component", y);
        }
      }
      if (typeof p == "object" && p !== null)
        c = sr(p);
      else {
        l = id(e, t, !0);
        var C = t.contextTypes;
        i = C != null, c = i ? od(e, l) : pi;
      }
      var b = new t(a, c);
      if (e.mode & On) {
        un(!0);
        try {
          b = new t(a, c);
        } finally {
          un(!1);
        }
      }
      var M = e.memoizedState = b.state !== null && b.state !== void 0 ? b.state : null;
      IC(e, b);
      {
        if (typeof t.getDerivedStateFromProps == "function" && M === null) {
          var N = zt(t) || "Component";
          GE.has(N) || (GE.add(N), _("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", N, b.state === null ? "null" : "undefined", N));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof b.getSnapshotBeforeUpdate == "function") {
          var B = null, Y = null, X = null;
          if (typeof b.componentWillMount == "function" && b.componentWillMount.__suppressDeprecationWarning !== !0 ? B = "componentWillMount" : typeof b.UNSAFE_componentWillMount == "function" && (B = "UNSAFE_componentWillMount"), typeof b.componentWillReceiveProps == "function" && b.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? Y = "componentWillReceiveProps" : typeof b.UNSAFE_componentWillReceiveProps == "function" && (Y = "UNSAFE_componentWillReceiveProps"), typeof b.componentWillUpdate == "function" && b.componentWillUpdate.__suppressDeprecationWarning !== !0 ? X = "componentWillUpdate" : typeof b.UNSAFE_componentWillUpdate == "function" && (X = "UNSAFE_componentWillUpdate"), B !== null || Y !== null || X !== null) {
            var De = zt(t) || "Component", Xe = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            QE.has(De) || (QE.add(De), _(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, De, Xe, B !== null ? `
  ` + B : "", Y !== null ? `
  ` + Y : "", X !== null ? `
  ` + X : ""));
          }
        }
      }
      return i && vC(e, l, c), b;
    }
    function ID(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (_("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", ft(e) || "Component"), t_.enqueueReplaceState(t, t.state, null));
    }
    function YC(e, t, a, i) {
      var l = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== l) {
        {
          var c = ft(e) || "Component";
          WE.has(c) || (WE.add(c), _("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", c));
        }
        t_.enqueueReplaceState(t, t.state, null);
      }
    }
    function n_(e, t, a, i) {
      VD(e, t, a);
      var l = e.stateNode;
      l.props = a, l.state = e.memoizedState, l.refs = PC, IE(e);
      var c = t.contextType;
      if (typeof c == "object" && c !== null)
        l.context = sr(c);
      else {
        var p = id(e, t, !0);
        l.context = od(e, p);
      }
      {
        if (l.state === a) {
          var m = zt(t) || "Component";
          XE.has(m) || (XE.add(m), _("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", m));
        }
        e.mode & On && yo.recordLegacyContextWarning(e, l), yo.recordUnsafeLifecycleWarnings(e, l);
      }
      l.state = e.memoizedState;
      var y = t.getDerivedStateFromProps;
      if (typeof y == "function" && (e_(e, t, y, a), l.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof l.getSnapshotBeforeUpdate != "function" && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (ID(e, l), ey(e, a, l, i), l.state = e.memoizedState), typeof l.componentDidMount == "function") {
        var C = Pe;
        C |= Pa, (e.mode & Va) !== qe && (C |= Ha), e.flags |= C;
      }
    }
    function BD(e, t, a, i) {
      var l = e.stateNode, c = e.memoizedProps;
      l.props = c;
      var p = l.context, m = t.contextType, y = pi;
      if (typeof m == "object" && m !== null)
        y = sr(m);
      else {
        var C = id(e, t, !0);
        y = od(e, C);
      }
      var b = t.getDerivedStateFromProps, M = typeof b == "function" || typeof l.getSnapshotBeforeUpdate == "function";
      !M && (typeof l.UNSAFE_componentWillReceiveProps == "function" || typeof l.componentWillReceiveProps == "function") && (c !== a || p !== y) && YC(e, l, a, y), jC();
      var N = e.memoizedState, B = l.state = N;
      if (ey(e, a, l, i), B = e.memoizedState, c === a && N === B && !jm() && !ty()) {
        if (typeof l.componentDidMount == "function") {
          var Y = Pe;
          Y |= Pa, (e.mode & Va) !== qe && (Y |= Ha), e.flags |= Y;
        }
        return !1;
      }
      typeof b == "function" && (e_(e, t, b, a), B = e.memoizedState);
      var X = ty() || VC(e, t, c, a, N, B, y);
      if (X) {
        if (!M && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function") {
          var De = Pe;
          De |= Pa, (e.mode & Va) !== qe && (De |= Ha), e.flags |= De;
        }
      } else {
        if (typeof l.componentDidMount == "function") {
          var Xe = Pe;
          Xe |= Pa, (e.mode & Va) !== qe && (Xe |= Ha), e.flags |= Xe;
        }
        e.memoizedProps = a, e.memoizedState = B;
      }
      return l.props = a, l.state = B, l.context = y, X;
    }
    function YD(e, t, a, i, l) {
      var c = t.stateNode;
      UC(e, t);
      var p = t.memoizedProps, m = t.type === t.elementType ? p : go(t.type, p);
      c.props = m;
      var y = t.pendingProps, C = c.context, b = a.contextType, M = pi;
      if (typeof b == "object" && b !== null)
        M = sr(b);
      else {
        var N = id(t, a, !0);
        M = od(t, N);
      }
      var B = a.getDerivedStateFromProps, Y = typeof B == "function" || typeof c.getSnapshotBeforeUpdate == "function";
      !Y && (typeof c.UNSAFE_componentWillReceiveProps == "function" || typeof c.componentWillReceiveProps == "function") && (p !== y || C !== M) && YC(t, c, i, M), jC();
      var X = t.memoizedState, De = c.state = X;
      if (ey(t, i, c, l), De = t.memoizedState, p === y && X === De && !jm() && !ty() && !A)
        return typeof c.componentDidUpdate == "function" && (p !== e.memoizedProps || X !== e.memoizedState) && (t.flags |= Pe), typeof c.getSnapshotBeforeUpdate == "function" && (p !== e.memoizedProps || X !== e.memoizedState) && (t.flags |= Wn), !1;
      typeof B == "function" && (e_(t, a, B, i), De = t.memoizedState);
      var Xe = ty() || VC(t, a, m, i, X, De, M) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      A;
      return Xe ? (!Y && (typeof c.UNSAFE_componentWillUpdate == "function" || typeof c.componentWillUpdate == "function") && (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(i, De, M), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(i, De, M)), typeof c.componentDidUpdate == "function" && (t.flags |= Pe), typeof c.getSnapshotBeforeUpdate == "function" && (t.flags |= Wn)) : (typeof c.componentDidUpdate == "function" && (p !== e.memoizedProps || X !== e.memoizedState) && (t.flags |= Pe), typeof c.getSnapshotBeforeUpdate == "function" && (p !== e.memoizedProps || X !== e.memoizedState) && (t.flags |= Wn), t.memoizedProps = i, t.memoizedState = De), c.props = i, c.state = De, c.context = M, Xe;
    }
    var r_, a_, i_, o_, l_, WC = function(e, t) {
    };
    r_ = !1, a_ = !1, i_ = {}, o_ = {}, l_ = {}, WC = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = ft(t) || "Component";
        o_[a] || (o_[a] = !0, _('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function dv(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & On || ct) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var l = ft(e) || "Component";
          i_[l] || (_('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), i_[l] = !0);
        }
        if (a._owner) {
          var c = a._owner, p;
          if (c) {
            var m = c;
            if (m.tag !== z)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            p = m.stateNode;
          }
          if (!p)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var y = p;
          yn(i, "ref");
          var C = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === C)
            return t.ref;
          var b = function(M) {
            var N = y.refs;
            N === PC && (N = y.refs = {}), M === null ? delete N[C] : N[C] = M;
          };
          return b._stringRef = C, b;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function ry(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function ay(e) {
      {
        var t = ft(e) || "Component";
        if (l_[t])
          return;
        l_[t] = !0, _("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function GC(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function KC(e) {
      function t($, Z) {
        if (e) {
          var P = $.deletions;
          P === null ? ($.deletions = [Z], $.flags |= Pt) : P.push(Z);
        }
      }
      function a($, Z) {
        if (!e)
          return null;
        for (var P = Z; P !== null; )
          t($, P), P = P.sibling;
        return null;
      }
      function i($, Z) {
        for (var P = /* @__PURE__ */ new Map(), se = Z; se !== null; )
          se.key !== null ? P.set(se.key, se) : P.set(se.index, se), se = se.sibling;
        return P;
      }
      function l($, Z) {
        var P = Pc($, Z);
        return P.index = 0, P.sibling = null, P;
      }
      function c($, Z, P) {
        if ($.index = P, !e)
          return $.flags |= zh, Z;
        var se = $.alternate;
        if (se !== null) {
          var Oe = se.index;
          return Oe < Z ? ($.flags |= nn, Z) : Oe;
        } else
          return $.flags |= nn, Z;
      }
      function p($) {
        return e && $.alternate === null && ($.flags |= nn), $;
      }
      function m($, Z, P, se) {
        if (Z === null || Z.tag !== re) {
          var Oe = MS(P, $.mode, se);
          return Oe.return = $, Oe;
        } else {
          var Ce = l(Z, P);
          return Ce.return = $, Ce;
        }
      }
      function y($, Z, P, se) {
        var Oe = P.type;
        if (Oe === ya)
          return b($, Z, P.props.children, se, P.key);
        if (Z !== null && (Z.elementType === Oe || // Keep this check inline so it only runs on the false path:
        $b(Z, P) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Oe == "object" && Oe !== null && Oe.$$typeof === Ge && GC(Oe) === Z.type)) {
          var Ce = l(Z, P.props);
          return Ce.ref = dv($, Z, P), Ce.return = $, Ce._debugSource = P._source, Ce._debugOwner = P._owner, Ce;
        }
        var ot = LS(P, $.mode, se);
        return ot.ref = dv($, Z, P), ot.return = $, ot;
      }
      function C($, Z, P, se) {
        if (Z === null || Z.tag !== G || Z.stateNode.containerInfo !== P.containerInfo || Z.stateNode.implementation !== P.implementation) {
          var Oe = zS(P, $.mode, se);
          return Oe.return = $, Oe;
        } else {
          var Ce = l(Z, P.children || []);
          return Ce.return = $, Ce;
        }
      }
      function b($, Z, P, se, Oe) {
        if (Z === null || Z.tag !== Ee) {
          var Ce = ps(P, $.mode, se, Oe);
          return Ce.return = $, Ce;
        } else {
          var ot = l(Z, P);
          return ot.return = $, ot;
        }
      }
      function M($, Z, P) {
        if (typeof Z == "string" && Z !== "" || typeof Z == "number") {
          var se = MS("" + Z, $.mode, P);
          return se.return = $, se;
        }
        if (typeof Z == "object" && Z !== null) {
          switch (Z.$$typeof) {
            case Yr: {
              var Oe = LS(Z, $.mode, P);
              return Oe.ref = dv($, null, Z), Oe.return = $, Oe;
            }
            case Wr: {
              var Ce = zS(Z, $.mode, P);
              return Ce.return = $, Ce;
            }
            case Ge: {
              var ot = Z._payload, ht = Z._init;
              return M($, ht(ot), P);
            }
          }
          if (Ut(Z) || _i(Z)) {
            var Jt = ps(Z, $.mode, P, null);
            return Jt.return = $, Jt;
          }
          ry($, Z);
        }
        return typeof Z == "function" && ay($), null;
      }
      function N($, Z, P, se) {
        var Oe = Z !== null ? Z.key : null;
        if (typeof P == "string" && P !== "" || typeof P == "number")
          return Oe !== null ? null : m($, Z, "" + P, se);
        if (typeof P == "object" && P !== null) {
          switch (P.$$typeof) {
            case Yr:
              return P.key === Oe ? y($, Z, P, se) : null;
            case Wr:
              return P.key === Oe ? C($, Z, P, se) : null;
            case Ge: {
              var Ce = P._payload, ot = P._init;
              return N($, Z, ot(Ce), se);
            }
          }
          if (Ut(P) || _i(P))
            return Oe !== null ? null : b($, Z, P, se, null);
          ry($, P);
        }
        return typeof P == "function" && ay($), null;
      }
      function B($, Z, P, se, Oe) {
        if (typeof se == "string" && se !== "" || typeof se == "number") {
          var Ce = $.get(P) || null;
          return m(Z, Ce, "" + se, Oe);
        }
        if (typeof se == "object" && se !== null) {
          switch (se.$$typeof) {
            case Yr: {
              var ot = $.get(se.key === null ? P : se.key) || null;
              return y(Z, ot, se, Oe);
            }
            case Wr: {
              var ht = $.get(se.key === null ? P : se.key) || null;
              return C(Z, ht, se, Oe);
            }
            case Ge:
              var Jt = se._payload, Ft = se._init;
              return B($, Z, P, Ft(Jt), Oe);
          }
          if (Ut(se) || _i(se)) {
            var nr = $.get(P) || null;
            return b(Z, nr, se, Oe, null);
          }
          ry(Z, se);
        }
        return typeof se == "function" && ay(Z), null;
      }
      function Y($, Z, P) {
        {
          if (typeof $ != "object" || $ === null)
            return Z;
          switch ($.$$typeof) {
            case Yr:
            case Wr:
              WC($, P);
              var se = $.key;
              if (typeof se != "string")
                break;
              if (Z === null) {
                Z = /* @__PURE__ */ new Set(), Z.add(se);
                break;
              }
              if (!Z.has(se)) {
                Z.add(se);
                break;
              }
              _("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", se);
              break;
            case Ge:
              var Oe = $._payload, Ce = $._init;
              Y(Ce(Oe), Z, P);
              break;
          }
        }
        return Z;
      }
      function X($, Z, P, se) {
        for (var Oe = null, Ce = 0; Ce < P.length; Ce++) {
          var ot = P[Ce];
          Oe = Y(ot, Oe, $);
        }
        for (var ht = null, Jt = null, Ft = Z, nr = 0, Vt = 0, Kn = null; Ft !== null && Vt < P.length; Vt++) {
          Ft.index > Vt ? (Kn = Ft, Ft = null) : Kn = Ft.sibling;
          var fa = N($, Ft, P[Vt], se);
          if (fa === null) {
            Ft === null && (Ft = Kn);
            break;
          }
          e && Ft && fa.alternate === null && t($, Ft), nr = c(fa, nr, Vt), Jt === null ? ht = fa : Jt.sibling = fa, Jt = fa, Ft = Kn;
        }
        if (Vt === P.length) {
          if (a($, Ft), jr()) {
            var Br = Vt;
            Rc($, Br);
          }
          return ht;
        }
        if (Ft === null) {
          for (; Vt < P.length; Vt++) {
            var hi = M($, P[Vt], se);
            hi !== null && (nr = c(hi, nr, Vt), Jt === null ? ht = hi : Jt.sibling = hi, Jt = hi);
          }
          if (jr()) {
            var Da = Vt;
            Rc($, Da);
          }
          return ht;
        }
        for (var Oa = i($, Ft); Vt < P.length; Vt++) {
          var da = B(Oa, $, Vt, P[Vt], se);
          da !== null && (e && da.alternate !== null && Oa.delete(da.key === null ? Vt : da.key), nr = c(da, nr, Vt), Jt === null ? ht = da : Jt.sibling = da, Jt = da);
        }
        if (e && Oa.forEach(function(Dd) {
          return t($, Dd);
        }), jr()) {
          var au = Vt;
          Rc($, au);
        }
        return ht;
      }
      function De($, Z, P, se) {
        var Oe = _i(P);
        if (typeof Oe != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          P[Symbol.toStringTag] === "Generator" && (a_ || _("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), a_ = !0), P.entries === Oe && (r_ || _("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), r_ = !0);
          var Ce = Oe.call(P);
          if (Ce)
            for (var ot = null, ht = Ce.next(); !ht.done; ht = Ce.next()) {
              var Jt = ht.value;
              ot = Y(Jt, ot, $);
            }
        }
        var Ft = Oe.call(P);
        if (Ft == null)
          throw new Error("An iterable object provided no iterator.");
        for (var nr = null, Vt = null, Kn = Z, fa = 0, Br = 0, hi = null, Da = Ft.next(); Kn !== null && !Da.done; Br++, Da = Ft.next()) {
          Kn.index > Br ? (hi = Kn, Kn = null) : hi = Kn.sibling;
          var Oa = N($, Kn, Da.value, se);
          if (Oa === null) {
            Kn === null && (Kn = hi);
            break;
          }
          e && Kn && Oa.alternate === null && t($, Kn), fa = c(Oa, fa, Br), Vt === null ? nr = Oa : Vt.sibling = Oa, Vt = Oa, Kn = hi;
        }
        if (Da.done) {
          if (a($, Kn), jr()) {
            var da = Br;
            Rc($, da);
          }
          return nr;
        }
        if (Kn === null) {
          for (; !Da.done; Br++, Da = Ft.next()) {
            var au = M($, Da.value, se);
            au !== null && (fa = c(au, fa, Br), Vt === null ? nr = au : Vt.sibling = au, Vt = au);
          }
          if (jr()) {
            var Dd = Br;
            Rc($, Dd);
          }
          return nr;
        }
        for (var Vv = i($, Kn); !Da.done; Br++, Da = Ft.next()) {
          var fl = B(Vv, $, Br, Da.value, se);
          fl !== null && (e && fl.alternate !== null && Vv.delete(fl.key === null ? Br : fl.key), fa = c(fl, fa, Br), Vt === null ? nr = fl : Vt.sibling = fl, Vt = fl);
        }
        if (e && Vv.forEach(function(iN) {
          return t($, iN);
        }), jr()) {
          var aN = Br;
          Rc($, aN);
        }
        return nr;
      }
      function Xe($, Z, P, se) {
        if (Z !== null && Z.tag === re) {
          a($, Z.sibling);
          var Oe = l(Z, P);
          return Oe.return = $, Oe;
        }
        a($, Z);
        var Ce = MS(P, $.mode, se);
        return Ce.return = $, Ce;
      }
      function Ve($, Z, P, se) {
        for (var Oe = P.key, Ce = Z; Ce !== null; ) {
          if (Ce.key === Oe) {
            var ot = P.type;
            if (ot === ya) {
              if (Ce.tag === Ee) {
                a($, Ce.sibling);
                var ht = l(Ce, P.props.children);
                return ht.return = $, ht._debugSource = P._source, ht._debugOwner = P._owner, ht;
              }
            } else if (Ce.elementType === ot || // Keep this check inline so it only runs on the false path:
            $b(Ce, P) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof ot == "object" && ot !== null && ot.$$typeof === Ge && GC(ot) === Ce.type) {
              a($, Ce.sibling);
              var Jt = l(Ce, P.props);
              return Jt.ref = dv($, Ce, P), Jt.return = $, Jt._debugSource = P._source, Jt._debugOwner = P._owner, Jt;
            }
            a($, Ce);
            break;
          } else
            t($, Ce);
          Ce = Ce.sibling;
        }
        if (P.type === ya) {
          var Ft = ps(P.props.children, $.mode, se, P.key);
          return Ft.return = $, Ft;
        } else {
          var nr = LS(P, $.mode, se);
          return nr.ref = dv($, Z, P), nr.return = $, nr;
        }
      }
      function Lt($, Z, P, se) {
        for (var Oe = P.key, Ce = Z; Ce !== null; ) {
          if (Ce.key === Oe)
            if (Ce.tag === G && Ce.stateNode.containerInfo === P.containerInfo && Ce.stateNode.implementation === P.implementation) {
              a($, Ce.sibling);
              var ot = l(Ce, P.children || []);
              return ot.return = $, ot;
            } else {
              a($, Ce);
              break;
            }
          else
            t($, Ce);
          Ce = Ce.sibling;
        }
        var ht = zS(P, $.mode, se);
        return ht.return = $, ht;
      }
      function Ot($, Z, P, se) {
        var Oe = typeof P == "object" && P !== null && P.type === ya && P.key === null;
        if (Oe && (P = P.props.children), typeof P == "object" && P !== null) {
          switch (P.$$typeof) {
            case Yr:
              return p(Ve($, Z, P, se));
            case Wr:
              return p(Lt($, Z, P, se));
            case Ge:
              var Ce = P._payload, ot = P._init;
              return Ot($, Z, ot(Ce), se);
          }
          if (Ut(P))
            return X($, Z, P, se);
          if (_i(P))
            return De($, Z, P, se);
          ry($, P);
        }
        return typeof P == "string" && P !== "" || typeof P == "number" ? p(Xe($, Z, "" + P, se)) : (typeof P == "function" && ay($), a($, Z));
      }
      return Ot;
    }
    var dd = KC(!0), QC = KC(!1);
    function WD(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = Pc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = Pc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function GD(e, t) {
      for (var a = e.child; a !== null; )
        Ck(a, t), a = a.sibling;
    }
    var pv = {}, as = Ju(pv), vv = Ju(pv), iy = Ju(pv);
    function oy(e) {
      if (e === pv)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function qC() {
      var e = oy(iy.current);
      return e;
    }
    function u_(e, t) {
      sa(iy, t, e), sa(vv, e, e), sa(as, pv, e);
      var a = lx(t);
      ua(as, e), sa(as, a, e);
    }
    function pd(e) {
      ua(as, e), ua(vv, e), ua(iy, e);
    }
    function s_() {
      var e = oy(as.current);
      return e;
    }
    function XC(e) {
      oy(iy.current);
      var t = oy(as.current), a = ux(t, e.type);
      t !== a && (sa(vv, e, e), sa(as, a, e));
    }
    function c_(e) {
      vv.current === e && (ua(as, e), ua(vv, e));
    }
    var KD = 0, ZC = 1, JC = 1, hv = 2, Eo = Ju(KD);
    function f_(e, t) {
      return (e & t) !== 0;
    }
    function vd(e) {
      return e & ZC;
    }
    function d_(e, t) {
      return e & ZC | t;
    }
    function QD(e, t) {
      return e | t;
    }
    function is(e, t) {
      sa(Eo, t, e);
    }
    function hd(e) {
      ua(Eo, e);
    }
    function qD(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function ly(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === ce) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || sC(i) || gE(i))
              return t;
          }
        } else if (t.tag === st && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var l = (t.flags & pt) !== Qe;
          if (l)
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
    var Xa = (
      /*   */
      0
    ), hr = (
      /* */
      1
    ), al = (
      /*  */
      2
    ), mr = (
      /*    */
      4
    ), $r = (
      /*   */
      8
    ), p_ = [];
    function v_() {
      for (var e = 0; e < p_.length; e++) {
        var t = p_[e];
        t._workInProgressVersionPrimary = null;
      }
      p_.length = 0;
    }
    function XD(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var we = g.ReactCurrentDispatcher, mv = g.ReactCurrentBatchConfig, h_, md;
    h_ = /* @__PURE__ */ new Set();
    var Nc = J, Zt = null, yr = null, gr = null, uy = !1, yv = !1, gv = 0, ZD = 0, JD = 25, ne = null, $i = null, os = -1, m_ = !1;
    function Wt() {
      {
        var e = ne;
        $i === null ? $i = [e] : $i.push(e);
      }
    }
    function ye() {
      {
        var e = ne;
        $i !== null && (os++, $i[os] !== e && eO(e));
      }
    }
    function yd(e) {
      e != null && !Ut(e) && _("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", ne, typeof e);
    }
    function eO(e) {
      {
        var t = ft(Zt);
        if (!h_.has(t) && (h_.add(t), $i !== null)) {
          for (var a = "", i = 30, l = 0; l <= os; l++) {
            for (var c = $i[l], p = l === os ? e : c, m = l + 1 + ". " + c; m.length < i; )
              m += " ";
            m += p + `
`, a += m;
          }
          _(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function ca() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function y_(e, t) {
      if (m_)
        return !1;
      if (t === null)
        return _("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", ne), !1;
      e.length !== t.length && _(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, ne, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Me(e[a], t[a]))
          return !1;
      return !0;
    }
    function gd(e, t, a, i, l, c) {
      Nc = c, Zt = t, $i = e !== null ? e._debugHookTypes : null, os = -1, m_ = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = J, e !== null && e.memoizedState !== null ? we.current = ST : $i !== null ? we.current = _T : we.current = ET;
      var p = a(i, l);
      if (yv) {
        var m = 0;
        do {
          if (yv = !1, gv = 0, m >= JD)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          m += 1, m_ = !1, yr = null, gr = null, t.updateQueue = null, os = -1, we.current = CT, p = a(i, l);
        } while (yv);
      }
      we.current = Sy, t._debugHookTypes = $i;
      var y = yr !== null && yr.next !== null;
      if (Nc = J, Zt = null, yr = null, gr = null, ne = null, $i = null, os = -1, e !== null && (e.flags & pr) !== (t.flags & pr) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Fe) !== qe && _("Internal React error: Expected static flag was missing. Please notify the React team."), uy = !1, y)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return p;
    }
    function Ed() {
      var e = gv !== 0;
      return gv = 0, e;
    }
    function eT(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Va) !== qe ? t.flags &= ~(Ol | Ha | Zr | Pe) : t.flags &= ~(Zr | Pe), e.lanes = sc(e.lanes, a);
    }
    function tT() {
      if (we.current = Sy, uy) {
        for (var e = Zt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        uy = !1;
      }
      Nc = J, Zt = null, yr = null, gr = null, $i = null, os = -1, ne = null, vT = !1, yv = !1, gv = 0;
    }
    function il() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return gr === null ? Zt.memoizedState = gr = e : gr = gr.next = e, gr;
    }
    function Pi() {
      var e;
      if (yr === null) {
        var t = Zt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = yr.next;
      var a;
      if (gr === null ? a = Zt.memoizedState : a = gr.next, a !== null)
        gr = a, a = gr.next, yr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        yr = e;
        var i = {
          memoizedState: yr.memoizedState,
          baseState: yr.baseState,
          baseQueue: yr.baseQueue,
          queue: yr.queue,
          next: null
        };
        gr === null ? Zt.memoizedState = gr = i : gr = gr.next = i;
      }
      return gr;
    }
    function nT() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function g_(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function E_(e, t, a) {
      var i = il(), l;
      a !== void 0 ? l = a(t) : l = t, i.memoizedState = i.baseState = l;
      var c = {
        pending: null,
        interleaved: null,
        lanes: J,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: l
      };
      i.queue = c;
      var p = c.dispatch = aO.bind(null, Zt, c);
      return [i.memoizedState, p];
    }
    function __(e, t, a) {
      var i = Pi(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var c = yr, p = c.baseQueue, m = l.pending;
      if (m !== null) {
        if (p !== null) {
          var y = p.next, C = m.next;
          p.next = C, m.next = y;
        }
        c.baseQueue !== p && _("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), c.baseQueue = p = m, l.pending = null;
      }
      if (p !== null) {
        var b = p.next, M = c.baseState, N = null, B = null, Y = null, X = b;
        do {
          var De = X.lane;
          if (Pl(Nc, De)) {
            if (Y !== null) {
              var Ve = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: $n,
                action: X.action,
                hasEagerState: X.hasEagerState,
                eagerState: X.eagerState,
                next: null
              };
              Y = Y.next = Ve;
            }
            if (X.hasEagerState)
              M = X.eagerState;
            else {
              var Lt = X.action;
              M = e(M, Lt);
            }
          } else {
            var Xe = {
              lane: De,
              action: X.action,
              hasEagerState: X.hasEagerState,
              eagerState: X.eagerState,
              next: null
            };
            Y === null ? (B = Y = Xe, N = M) : Y = Y.next = Xe, Zt.lanes = yt(Zt.lanes, De), jv(De);
          }
          X = X.next;
        } while (X !== null && X !== b);
        Y === null ? N = M : Y.next = B, Me(M, i.memoizedState) || wv(), i.memoizedState = M, i.baseState = N, i.baseQueue = Y, l.lastRenderedState = M;
      }
      var Ot = l.interleaved;
      if (Ot !== null) {
        var $ = Ot;
        do {
          var Z = $.lane;
          Zt.lanes = yt(Zt.lanes, Z), jv(Z), $ = $.next;
        } while ($ !== Ot);
      } else
        p === null && (l.lanes = J);
      var P = l.dispatch;
      return [i.memoizedState, P];
    }
    function S_(e, t, a) {
      var i = Pi(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var c = l.dispatch, p = l.pending, m = i.memoizedState;
      if (p !== null) {
        l.pending = null;
        var y = p.next, C = y;
        do {
          var b = C.action;
          m = e(m, b), C = C.next;
        } while (C !== y);
        Me(m, i.memoizedState) || wv(), i.memoizedState = m, i.baseQueue === null && (i.baseState = m), l.lastRenderedState = m;
      }
      return [m, c];
    }
    function jj(e, t, a) {
    }
    function $j(e, t, a) {
    }
    function C_(e, t, a) {
      var i = Zt, l = il(), c, p = jr();
      if (p) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        c = a(), md || c !== a() && (_("The result of getServerSnapshot should be cached to avoid an infinite loop"), md = !0);
      } else {
        if (c = t(), !md) {
          var m = t();
          Me(c, m) || (_("The result of getSnapshot should be cached to avoid an infinite loop"), md = !0);
        }
        var y = Py();
        if (y === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        uc(y, Nc) || rT(i, t, c);
      }
      l.memoizedState = c;
      var C = {
        value: c,
        getSnapshot: t
      };
      return l.queue = C, py(iT.bind(null, i, C, e), [e]), i.flags |= Zr, Ev(hr | $r, aT.bind(null, i, C, c, t), void 0, null), c;
    }
    function sy(e, t, a) {
      var i = Zt, l = Pi(), c = t();
      if (!md) {
        var p = t();
        Me(c, p) || (_("The result of getSnapshot should be cached to avoid an infinite loop"), md = !0);
      }
      var m = l.memoizedState, y = !Me(m, c);
      y && (l.memoizedState = c, wv());
      var C = l.queue;
      if (Sv(iT.bind(null, i, C, e), [e]), C.getSnapshot !== t || y || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      gr !== null && gr.memoizedState.tag & hr) {
        i.flags |= Zr, Ev(hr | $r, aT.bind(null, i, C, c, t), void 0, null);
        var b = Py();
        if (b === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        uc(b, Nc) || rT(i, t, c);
      }
      return c;
    }
    function rT(e, t, a) {
      e.flags |= Dl;
      var i = {
        getSnapshot: t,
        value: a
      }, l = Zt.updateQueue;
      if (l === null)
        l = nT(), Zt.updateQueue = l, l.stores = [i];
      else {
        var c = l.stores;
        c === null ? l.stores = [i] : c.push(i);
      }
    }
    function aT(e, t, a, i) {
      t.value = a, t.getSnapshot = i, oT(t) && lT(e);
    }
    function iT(e, t, a) {
      var i = function() {
        oT(t) && lT(e);
      };
      return a(i);
    }
    function oT(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !Me(a, i);
      } catch {
        return !0;
      }
    }
    function lT(e) {
      var t = qa(e, et);
      t !== null && Cr(t, e, et, sn);
    }
    function cy(e) {
      var t = il();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: J,
        dispatch: null,
        lastRenderedReducer: g_,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = iO.bind(null, Zt, a);
      return [t.memoizedState, i];
    }
    function T_(e) {
      return __(g_);
    }
    function b_(e) {
      return S_(g_);
    }
    function Ev(e, t, a, i) {
      var l = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, c = Zt.updateQueue;
      if (c === null)
        c = nT(), Zt.updateQueue = c, c.lastEffect = l.next = l;
      else {
        var p = c.lastEffect;
        if (p === null)
          c.lastEffect = l.next = l;
        else {
          var m = p.next;
          p.next = l, l.next = m, c.lastEffect = l;
        }
      }
      return l;
    }
    function w_(e) {
      var t = il();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function fy(e) {
      var t = Pi();
      return t.memoizedState;
    }
    function _v(e, t, a, i) {
      var l = il(), c = i === void 0 ? null : i;
      Zt.flags |= e, l.memoizedState = Ev(hr | t, a, void 0, c);
    }
    function dy(e, t, a, i) {
      var l = Pi(), c = i === void 0 ? null : i, p = void 0;
      if (yr !== null) {
        var m = yr.memoizedState;
        if (p = m.destroy, c !== null) {
          var y = m.deps;
          if (y_(c, y)) {
            l.memoizedState = Ev(t, a, p, c);
            return;
          }
        }
      }
      Zt.flags |= e, l.memoizedState = Ev(hr | t, a, p, c);
    }
    function py(e, t) {
      return (Zt.mode & Va) !== qe ? _v(Ol | Zr | Vo, $r, e, t) : _v(Zr | Vo, $r, e, t);
    }
    function Sv(e, t) {
      return dy(Zr, $r, e, t);
    }
    function R_(e, t) {
      return _v(Pe, al, e, t);
    }
    function vy(e, t) {
      return dy(Pe, al, e, t);
    }
    function x_(e, t) {
      var a = Pe;
      return a |= Pa, (Zt.mode & Va) !== qe && (a |= Ha), _v(a, mr, e, t);
    }
    function hy(e, t) {
      return dy(Pe, mr, e, t);
    }
    function uT(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var l = t;
        l.hasOwnProperty("current") || _("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(l).join(", ") + "}");
        var c = e();
        return l.current = c, function() {
          l.current = null;
        };
      }
    }
    function D_(e, t, a) {
      typeof t != "function" && _("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, l = Pe;
      return l |= Pa, (Zt.mode & Va) !== qe && (l |= Ha), _v(l, mr, uT.bind(null, t, e), i);
    }
    function my(e, t, a) {
      typeof t != "function" && _("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return dy(Pe, mr, uT.bind(null, t, e), i);
    }
    function tO(e, t) {
    }
    var yy = tO;
    function O_(e, t) {
      var a = il(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function gy(e, t) {
      var a = Pi(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var c = l[1];
        if (y_(i, c))
          return l[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function A_(e, t) {
      var a = il(), i = t === void 0 ? null : t, l = e();
      return a.memoizedState = [l, i], l;
    }
    function Ey(e, t) {
      var a = Pi(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var c = l[1];
        if (y_(i, c))
          return l[0];
      }
      var p = e();
      return a.memoizedState = [p, i], p;
    }
    function k_(e) {
      var t = il();
      return t.memoizedState = e, e;
    }
    function sT(e) {
      var t = Pi(), a = yr, i = a.memoizedState;
      return fT(t, i, e);
    }
    function cT(e) {
      var t = Pi();
      if (yr === null)
        return t.memoizedState = e, e;
      var a = yr.memoizedState;
      return fT(t, a, e);
    }
    function fT(e, t, a) {
      var i = !Kh(Nc);
      if (i) {
        if (!Me(a, t)) {
          var l = Xh();
          Zt.lanes = yt(Zt.lanes, l), jv(l), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, wv()), e.memoizedState = a, a;
    }
    function nO(e, t, a) {
      var i = Ba();
      kn(Pg(i, co)), e(!0);
      var l = mv.transition;
      mv.transition = {};
      var c = mv.transition;
      mv.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (kn(i), mv.transition = l, l === null && c._updatedFibers) {
          var p = c._updatedFibers.size;
          p > 10 && O("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), c._updatedFibers.clear();
        }
      }
    }
    function N_() {
      var e = cy(!1), t = e[0], a = e[1], i = nO.bind(null, a), l = il();
      return l.memoizedState = i, [t, i];
    }
    function dT() {
      var e = T_(), t = e[0], a = Pi(), i = a.memoizedState;
      return [t, i];
    }
    function pT() {
      var e = b_(), t = e[0], a = Pi(), i = a.memoizedState;
      return [t, i];
    }
    var vT = !1;
    function rO() {
      return vT;
    }
    function L_() {
      var e = il(), t = Py(), a = t.identifierPrefix, i;
      if (jr()) {
        var l = yD();
        i = ":" + a + "R" + l;
        var c = gv++;
        c > 0 && (i += "H" + c.toString(32)), i += ":";
      } else {
        var p = ZD++;
        i = ":" + a + "r" + p.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function _y() {
      var e = Pi(), t = e.memoizedState;
      return t;
    }
    function aO(e, t, a) {
      typeof arguments[3] == "function" && _("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = fs(e), l = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (hT(e))
        mT(t, l);
      else {
        var c = LC(e, t, l, i);
        if (c !== null) {
          var p = xa();
          Cr(c, e, i, p), yT(c, t, i);
        }
      }
      gT(e, i);
    }
    function iO(e, t, a) {
      typeof arguments[3] == "function" && _("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = fs(e), l = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (hT(e))
        mT(t, l);
      else {
        var c = e.alternate;
        if (e.lanes === J && (c === null || c.lanes === J)) {
          var p = t.lastRenderedReducer;
          if (p !== null) {
            var m;
            m = we.current, we.current = _o;
            try {
              var y = t.lastRenderedState, C = p(y, a);
              if (l.hasEagerState = !0, l.eagerState = C, Me(C, y)) {
                jD(e, t, l, i);
                return;
              }
            } catch {
            } finally {
              we.current = m;
            }
          }
        }
        var b = LC(e, t, l, i);
        if (b !== null) {
          var M = xa();
          Cr(b, e, i, M), yT(b, t, i);
        }
      }
      gT(e, i);
    }
    function hT(e) {
      var t = e.alternate;
      return e === Zt || t !== null && t === Zt;
    }
    function mT(e, t) {
      yv = uy = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function yT(e, t, a) {
      if (xp(a)) {
        var i = t.lanes;
        i = Of(i, e.pendingLanes);
        var l = yt(i, a);
        t.lanes = l, Dp(e, l);
      }
    }
    function gT(e, t, a) {
      pf(e, t);
    }
    var Sy = {
      readContext: sr,
      useCallback: ca,
      useContext: ca,
      useEffect: ca,
      useImperativeHandle: ca,
      useInsertionEffect: ca,
      useLayoutEffect: ca,
      useMemo: ca,
      useReducer: ca,
      useRef: ca,
      useState: ca,
      useDebugValue: ca,
      useDeferredValue: ca,
      useTransition: ca,
      useMutableSource: ca,
      useSyncExternalStore: ca,
      useId: ca,
      unstable_isNewReconciler: Se
    }, ET = null, _T = null, ST = null, CT = null, ol = null, _o = null, Cy = null;
    {
      var M_ = function() {
        _("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, vt = function() {
        _("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      ET = {
        readContext: function(e) {
          return sr(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", Wt(), yd(t), O_(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", Wt(), sr(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", Wt(), yd(t), py(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", Wt(), yd(a), D_(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", Wt(), yd(t), R_(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", Wt(), yd(t), x_(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", Wt(), yd(t);
          var a = we.current;
          we.current = ol;
          try {
            return A_(e, t);
          } finally {
            we.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", Wt();
          var i = we.current;
          we.current = ol;
          try {
            return E_(e, t, a);
          } finally {
            we.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", Wt(), w_(e);
        },
        useState: function(e) {
          ne = "useState", Wt();
          var t = we.current;
          we.current = ol;
          try {
            return cy(e);
          } finally {
            we.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", Wt(), void 0;
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", Wt(), k_(e);
        },
        useTransition: function() {
          return ne = "useTransition", Wt(), N_();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", Wt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", Wt(), C_(e, t, a);
        },
        useId: function() {
          return ne = "useId", Wt(), L_();
        },
        unstable_isNewReconciler: Se
      }, _T = {
        readContext: function(e) {
          return sr(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", ye(), O_(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", ye(), sr(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", ye(), py(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", ye(), D_(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", ye(), R_(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", ye(), x_(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", ye();
          var a = we.current;
          we.current = ol;
          try {
            return A_(e, t);
          } finally {
            we.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", ye();
          var i = we.current;
          we.current = ol;
          try {
            return E_(e, t, a);
          } finally {
            we.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", ye(), w_(e);
        },
        useState: function(e) {
          ne = "useState", ye();
          var t = we.current;
          we.current = ol;
          try {
            return cy(e);
          } finally {
            we.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", ye(), void 0;
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", ye(), k_(e);
        },
        useTransition: function() {
          return ne = "useTransition", ye(), N_();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", ye(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", ye(), C_(e, t, a);
        },
        useId: function() {
          return ne = "useId", ye(), L_();
        },
        unstable_isNewReconciler: Se
      }, ST = {
        readContext: function(e) {
          return sr(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", ye(), gy(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", ye(), sr(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", ye(), Sv(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", ye(), my(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", ye(), vy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", ye(), hy(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", ye();
          var a = we.current;
          we.current = _o;
          try {
            return Ey(e, t);
          } finally {
            we.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", ye();
          var i = we.current;
          we.current = _o;
          try {
            return __(e, t, a);
          } finally {
            we.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", ye(), fy();
        },
        useState: function(e) {
          ne = "useState", ye();
          var t = we.current;
          we.current = _o;
          try {
            return T_(e);
          } finally {
            we.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", ye(), yy();
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", ye(), sT(e);
        },
        useTransition: function() {
          return ne = "useTransition", ye(), dT();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", ye(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", ye(), sy(e, t);
        },
        useId: function() {
          return ne = "useId", ye(), _y();
        },
        unstable_isNewReconciler: Se
      }, CT = {
        readContext: function(e) {
          return sr(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", ye(), gy(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", ye(), sr(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", ye(), Sv(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", ye(), my(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", ye(), vy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", ye(), hy(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", ye();
          var a = we.current;
          we.current = Cy;
          try {
            return Ey(e, t);
          } finally {
            we.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", ye();
          var i = we.current;
          we.current = Cy;
          try {
            return S_(e, t, a);
          } finally {
            we.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", ye(), fy();
        },
        useState: function(e) {
          ne = "useState", ye();
          var t = we.current;
          we.current = Cy;
          try {
            return b_(e);
          } finally {
            we.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", ye(), yy();
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", ye(), cT(e);
        },
        useTransition: function() {
          return ne = "useTransition", ye(), pT();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", ye(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", ye(), sy(e, t);
        },
        useId: function() {
          return ne = "useId", ye(), _y();
        },
        unstable_isNewReconciler: Se
      }, ol = {
        readContext: function(e) {
          return M_(), sr(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", vt(), Wt(), O_(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", vt(), Wt(), sr(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", vt(), Wt(), py(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", vt(), Wt(), D_(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", vt(), Wt(), R_(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", vt(), Wt(), x_(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", vt(), Wt();
          var a = we.current;
          we.current = ol;
          try {
            return A_(e, t);
          } finally {
            we.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", vt(), Wt();
          var i = we.current;
          we.current = ol;
          try {
            return E_(e, t, a);
          } finally {
            we.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", vt(), Wt(), w_(e);
        },
        useState: function(e) {
          ne = "useState", vt(), Wt();
          var t = we.current;
          we.current = ol;
          try {
            return cy(e);
          } finally {
            we.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", vt(), Wt(), void 0;
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", vt(), Wt(), k_(e);
        },
        useTransition: function() {
          return ne = "useTransition", vt(), Wt(), N_();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", vt(), Wt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", vt(), Wt(), C_(e, t, a);
        },
        useId: function() {
          return ne = "useId", vt(), Wt(), L_();
        },
        unstable_isNewReconciler: Se
      }, _o = {
        readContext: function(e) {
          return M_(), sr(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", vt(), ye(), gy(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", vt(), ye(), sr(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", vt(), ye(), Sv(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", vt(), ye(), my(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", vt(), ye(), vy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", vt(), ye(), hy(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", vt(), ye();
          var a = we.current;
          we.current = _o;
          try {
            return Ey(e, t);
          } finally {
            we.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", vt(), ye();
          var i = we.current;
          we.current = _o;
          try {
            return __(e, t, a);
          } finally {
            we.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", vt(), ye(), fy();
        },
        useState: function(e) {
          ne = "useState", vt(), ye();
          var t = we.current;
          we.current = _o;
          try {
            return T_(e);
          } finally {
            we.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", vt(), ye(), yy();
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", vt(), ye(), sT(e);
        },
        useTransition: function() {
          return ne = "useTransition", vt(), ye(), dT();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", vt(), ye(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", vt(), ye(), sy(e, t);
        },
        useId: function() {
          return ne = "useId", vt(), ye(), _y();
        },
        unstable_isNewReconciler: Se
      }, Cy = {
        readContext: function(e) {
          return M_(), sr(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", vt(), ye(), gy(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", vt(), ye(), sr(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", vt(), ye(), Sv(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", vt(), ye(), my(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", vt(), ye(), vy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", vt(), ye(), hy(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", vt(), ye();
          var a = we.current;
          we.current = _o;
          try {
            return Ey(e, t);
          } finally {
            we.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", vt(), ye();
          var i = we.current;
          we.current = _o;
          try {
            return S_(e, t, a);
          } finally {
            we.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", vt(), ye(), fy();
        },
        useState: function(e) {
          ne = "useState", vt(), ye();
          var t = we.current;
          we.current = _o;
          try {
            return b_(e);
          } finally {
            we.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", vt(), ye(), yy();
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", vt(), ye(), cT(e);
        },
        useTransition: function() {
          return ne = "useTransition", vt(), ye(), pT();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", vt(), ye(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", vt(), ye(), sy(e, t);
        },
        useId: function() {
          return ne = "useId", vt(), ye(), _y();
        },
        unstable_isNewReconciler: Se
      };
    }
    var ls = f.unstable_now, TT = 0, Ty = -1, Cv = -1, by = -1, z_ = !1, wy = !1;
    function bT() {
      return z_;
    }
    function oO() {
      wy = !0;
    }
    function lO() {
      z_ = !1, wy = !1;
    }
    function uO() {
      z_ = wy, wy = !1;
    }
    function wT() {
      return TT;
    }
    function RT() {
      TT = ls();
    }
    function U_(e) {
      Cv = ls(), e.actualStartTime < 0 && (e.actualStartTime = ls());
    }
    function xT(e) {
      Cv = -1;
    }
    function Ry(e, t) {
      if (Cv >= 0) {
        var a = ls() - Cv;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Cv = -1;
      }
    }
    function ll(e) {
      if (Ty >= 0) {
        var t = ls() - Ty;
        Ty = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case V:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case Ae:
              var l = a.stateNode;
              l.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function j_(e) {
      if (by >= 0) {
        var t = ls() - by;
        by = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case V:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case Ae:
              var l = a.stateNode;
              l !== null && (l.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function ul() {
      Ty = ls();
    }
    function $_() {
      by = ls();
    }
    function P_(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function Lc(e, t) {
      return {
        value: e,
        source: t,
        stack: cu(t),
        digest: null
      };
    }
    function H_(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function sO(e, t) {
      return !0;
    }
    function F_(e, t) {
      try {
        var a = sO(e, t);
        if (a === !1)
          return;
        var i = t.value, l = t.source, c = t.stack, p = c !== null ? c : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === z)
            return;
          console.error(i);
        }
        var m = l ? ft(l) : null, y = m ? "The above error occurred in the <" + m + "> component:" : "The above error occurred in one of your React components:", C;
        if (e.tag === V)
          C = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var b = ft(e) || "Anonymous";
          C = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + b + ".");
        }
        var M = y + `
` + p + `

` + ("" + C);
        console.error(M);
      } catch (N) {
        setTimeout(function() {
          throw N;
        });
      }
    }
    var cO = typeof WeakMap == "function" ? WeakMap : Map;
    function DT(e, t, a) {
      var i = Zl(sn, a);
      i.tag = FE, i.payload = {
        element: null
      };
      var l = t.value;
      return i.callback = function() {
        nk(l), F_(e, t);
      }, i;
    }
    function V_(e, t, a) {
      var i = Zl(sn, a);
      i.tag = FE;
      var l = e.type.getDerivedStateFromError;
      if (typeof l == "function") {
        var c = t.value;
        i.payload = function() {
          return l(c);
        }, i.callback = function() {
          Pb(e), F_(e, t);
        };
      }
      var p = e.stateNode;
      return p !== null && typeof p.componentDidCatch == "function" && (i.callback = function() {
        Pb(e), F_(e, t), typeof l != "function" && ek(this);
        var y = t.value, C = t.stack;
        this.componentDidCatch(y, {
          componentStack: C !== null ? C : ""
        }), typeof l != "function" && (oa(e.lanes, et) || _("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", ft(e) || "Unknown"));
      }), i;
    }
    function OT(e, t, a) {
      var i = e.pingCache, l;
      if (i === null ? (i = e.pingCache = new cO(), l = /* @__PURE__ */ new Set(), i.set(t, l)) : (l = i.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), i.set(t, l))), !l.has(a)) {
        l.add(a);
        var c = rk.bind(null, e, t, a);
        Ta && $v(e, a), t.then(c, c);
      }
    }
    function fO(e, t, a, i) {
      var l = e.updateQueue;
      if (l === null) {
        var c = /* @__PURE__ */ new Set();
        c.add(a), e.updateQueue = c;
      } else
        l.add(a);
    }
    function dO(e, t) {
      var a = e.tag;
      if ((e.mode & Fe) === qe && (a === F || a === de || a === Ne)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function AT(e) {
      var t = e;
      do {
        if (t.tag === ce && qD(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function kT(e, t, a, i, l) {
      if ((e.mode & Fe) === qe) {
        if (e === t)
          e.flags |= dr;
        else {
          if (e.flags |= pt, a.flags |= of, a.flags &= ~(Mh | Fo), a.tag === z) {
            var c = a.alternate;
            if (c === null)
              a.tag = Et;
            else {
              var p = Zl(sn, et);
              p.tag = qm, rs(a, p, et);
            }
          }
          a.lanes = yt(a.lanes, et);
        }
        return e;
      }
      return e.flags |= dr, e.lanes = l, e;
    }
    function pO(e, t, a, i, l) {
      if (a.flags |= Fo, Ta && $v(e, l), i !== null && typeof i == "object" && typeof i.then == "function") {
        var c = i;
        dO(a), jr() && a.mode & Fe && SC();
        var p = AT(t);
        if (p !== null) {
          p.flags &= ~Mr, kT(p, t, a, e, l), p.mode & Fe && OT(e, c, l), fO(p, e, c);
          return;
        } else {
          if (!Rp(l)) {
            OT(e, c, l), SS();
            return;
          }
          var m = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = m;
        }
      } else if (jr() && a.mode & Fe) {
        SC();
        var y = AT(t);
        if (y !== null) {
          (y.flags & dr) === Qe && (y.flags |= Mr), kT(y, t, a, e, l), ME(Lc(i, a));
          return;
        }
      }
      i = Lc(i, a), WA(i);
      var C = t;
      do {
        switch (C.tag) {
          case V: {
            var b = i;
            C.flags |= dr;
            var M = Mu(l);
            C.lanes = yt(C.lanes, M);
            var N = DT(C, b, M);
            BE(C, N);
            return;
          }
          case z:
            var B = i, Y = C.type, X = C.stateNode;
            if ((C.flags & pt) === Qe && (typeof Y.getDerivedStateFromError == "function" || X !== null && typeof X.componentDidCatch == "function" && !Ab(X))) {
              C.flags |= dr;
              var De = Mu(l);
              C.lanes = yt(C.lanes, De);
              var Xe = V_(C, B, De);
              BE(C, Xe);
              return;
            }
            break;
        }
        C = C.return;
      } while (C !== null);
    }
    function vO() {
      return null;
    }
    var Tv = g.ReactCurrentOwner, So = !1, I_, bv, B_, Y_, W_, Mc, G_, xy;
    I_ = {}, bv = {}, B_ = {}, Y_ = {}, W_ = {}, Mc = !1, G_ = {}, xy = {};
    function wa(e, t, a, i) {
      e === null ? t.child = QC(t, null, a, i) : t.child = dd(t, e.child, a, i);
    }
    function hO(e, t, a, i) {
      t.child = dd(t, e.child, null, i), t.child = dd(t, null, a, i);
    }
    function NT(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var c = a.propTypes;
        c && ho(
          c,
          i,
          // Resolved props
          "prop",
          zt(a)
        );
      }
      var p = a.render, m = t.ref, y, C;
      fd(t, l), Ru(t);
      {
        if (Tv.current = t, fr(!0), y = gd(e, t, p, i, m, l), C = Ed(), t.mode & On) {
          un(!0);
          try {
            y = gd(e, t, p, i, m, l), C = Ed();
          } finally {
            un(!1);
          }
        }
        fr(!1);
      }
      return kl(), e !== null && !So ? (eT(e, t, l), Jl(e, t, l)) : (jr() && C && DE(t), t.flags |= fi, wa(e, t, y, l), t.child);
    }
    function LT(e, t, a, i, l) {
      if (e === null) {
        var c = a.type;
        if (_k(c) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var p = c;
          return p = xd(c), t.tag = Ne, t.type = p, q_(t, c), MT(e, t, p, i, l);
        }
        {
          var m = c.propTypes;
          m && ho(
            m,
            i,
            // Resolved props
            "prop",
            zt(c)
          );
        }
        var y = NS(a.type, null, i, t, t.mode, l);
        return y.ref = t.ref, y.return = t, t.child = y, y;
      }
      {
        var C = a.type, b = C.propTypes;
        b && ho(
          b,
          i,
          // Resolved props
          "prop",
          zt(C)
        );
      }
      var M = e.child, N = nS(e, l);
      if (!N) {
        var B = M.memoizedProps, Y = a.compare;
        if (Y = Y !== null ? Y : nt, Y(B, i) && e.ref === t.ref)
          return Jl(e, t, l);
      }
      t.flags |= fi;
      var X = Pc(M, i);
      return X.ref = t.ref, X.return = t, t.child = X, X;
    }
    function MT(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var c = t.elementType;
        if (c.$$typeof === Ge) {
          var p = c, m = p._payload, y = p._init;
          try {
            c = y(m);
          } catch {
            c = null;
          }
          var C = c && c.propTypes;
          C && ho(
            C,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            zt(c)
          );
        }
      }
      if (e !== null) {
        var b = e.memoizedProps;
        if (nt(b, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (So = !1, t.pendingProps = i = b, nS(e, l))
            (e.flags & of) !== Qe && (So = !0);
          else
            return t.lanes = e.lanes, Jl(e, t, l);
      }
      return K_(e, t, a, i, l);
    }
    function zT(e, t, a) {
      var i = t.pendingProps, l = i.children, c = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || te)
        if ((t.mode & Fe) === qe) {
          var p = {
            baseLanes: J,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = p, Hy(t, a);
        } else if (oa(a, ba)) {
          var M = {
            baseLanes: J,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = M;
          var N = c !== null ? c.baseLanes : a;
          Hy(t, N);
        } else {
          var m = null, y;
          if (c !== null) {
            var C = c.baseLanes;
            y = yt(C, a);
          } else
            y = a;
          t.lanes = t.childLanes = ba;
          var b = {
            baseLanes: y,
            cachePool: m,
            transitions: null
          };
          return t.memoizedState = b, t.updateQueue = null, Hy(t, y), null;
        }
      else {
        var B;
        c !== null ? (B = yt(c.baseLanes, a), t.memoizedState = null) : B = a, Hy(t, B);
      }
      return wa(e, t, l, a), t.child;
    }
    function mO(e, t, a) {
      var i = t.pendingProps;
      return wa(e, t, i, a), t.child;
    }
    function yO(e, t, a) {
      var i = t.pendingProps.children;
      return wa(e, t, i, a), t.child;
    }
    function gO(e, t, a) {
      {
        t.flags |= Pe;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var l = t.pendingProps, c = l.children;
      return wa(e, t, c, a), t.child;
    }
    function UT(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= _a, t.flags |= xi);
    }
    function K_(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var c = a.propTypes;
        c && ho(
          c,
          i,
          // Resolved props
          "prop",
          zt(a)
        );
      }
      var p;
      {
        var m = id(t, a, !0);
        p = od(t, m);
      }
      var y, C;
      fd(t, l), Ru(t);
      {
        if (Tv.current = t, fr(!0), y = gd(e, t, a, i, p, l), C = Ed(), t.mode & On) {
          un(!0);
          try {
            y = gd(e, t, a, i, p, l), C = Ed();
          } finally {
            un(!1);
          }
        }
        fr(!1);
      }
      return kl(), e !== null && !So ? (eT(e, t, l), Jl(e, t, l)) : (jr() && C && DE(t), t.flags |= fi, wa(e, t, y, l), t.child);
    }
    function jT(e, t, a, i, l) {
      {
        switch (zk(t)) {
          case !1: {
            var c = t.stateNode, p = t.type, m = new p(t.memoizedProps, c.context), y = m.state;
            c.updater.enqueueSetState(c, y, null);
            break;
          }
          case !0: {
            t.flags |= pt, t.flags |= dr;
            var C = new Error("Simulated error coming from DevTools"), b = Mu(l);
            t.lanes = yt(t.lanes, b);
            var M = V_(t, Lc(C, t), b);
            BE(t, M);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var N = a.propTypes;
          N && ho(
            N,
            i,
            // Resolved props
            "prop",
            zt(a)
          );
        }
      }
      var B;
      rl(a) ? (B = !0, Pm(t)) : B = !1, fd(t, l);
      var Y = t.stateNode, X;
      Y === null ? (Oy(e, t), BC(t, a, i), n_(t, a, i, l), X = !0) : e === null ? X = BD(t, a, i, l) : X = YD(e, t, a, i, l);
      var De = Q_(e, t, a, X, B, l);
      {
        var Xe = t.stateNode;
        X && Xe.props !== i && (Mc || _("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", ft(t) || "a component"), Mc = !0);
      }
      return De;
    }
    function Q_(e, t, a, i, l, c) {
      UT(e, t);
      var p = (t.flags & pt) !== Qe;
      if (!i && !p)
        return l && yC(t, a, !1), Jl(e, t, c);
      var m = t.stateNode;
      Tv.current = t;
      var y;
      if (p && typeof a.getDerivedStateFromError != "function")
        y = null, xT();
      else {
        Ru(t);
        {
          if (fr(!0), y = m.render(), t.mode & On) {
            un(!0);
            try {
              m.render();
            } finally {
              un(!1);
            }
          }
          fr(!1);
        }
        kl();
      }
      return t.flags |= fi, e !== null && p ? hO(e, t, y, c) : wa(e, t, y, c), t.memoizedState = m.state, l && yC(t, a, !0), t.child;
    }
    function $T(e) {
      var t = e.stateNode;
      t.pendingContext ? hC(e, t.pendingContext, t.pendingContext !== t.context) : t.context && hC(e, t.context, !1), u_(e, t.containerInfo);
    }
    function EO(e, t, a) {
      if ($T(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, l = t.memoizedState, c = l.element;
      UC(e, t), ey(t, i, null, a);
      var p = t.memoizedState;
      t.stateNode;
      var m = p.element;
      if (l.isDehydrated) {
        var y = {
          element: m,
          isDehydrated: !1,
          cache: p.cache,
          pendingSuspenseBoundaries: p.pendingSuspenseBoundaries,
          transitions: p.transitions
        }, C = t.updateQueue;
        if (C.baseState = y, t.memoizedState = y, t.flags & Mr) {
          var b = Lc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return PT(e, t, m, a, b);
        } else if (m !== c) {
          var M = Lc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return PT(e, t, m, a, M);
        } else {
          TD(t);
          var N = QC(t, null, m, a);
          t.child = N;
          for (var B = N; B; )
            B.flags = B.flags & ~nn | Ri, B = B.sibling;
        }
      } else {
        if (sd(), m === c)
          return Jl(e, t, a);
        wa(e, t, m, a);
      }
      return t.child;
    }
    function PT(e, t, a, i, l) {
      return sd(), ME(l), t.flags |= Mr, wa(e, t, a, i), t.child;
    }
    function _O(e, t, a) {
      XC(t), e === null && LE(t);
      var i = t.type, l = t.pendingProps, c = e !== null ? e.memoizedProps : null, p = l.children, m = vE(i, l);
      return m ? p = null : c !== null && vE(i, c) && (t.flags |= $a), UT(e, t), wa(e, t, p, a), t.child;
    }
    function SO(e, t) {
      return e === null && LE(t), null;
    }
    function CO(e, t, a, i) {
      Oy(e, t);
      var l = t.pendingProps, c = a, p = c._payload, m = c._init, y = m(p);
      t.type = y;
      var C = t.tag = Sk(y), b = go(y, l), M;
      switch (C) {
        case F:
          return q_(t, y), t.type = y = xd(y), M = K_(null, t, y, b, i), M;
        case z:
          return t.type = y = RS(y), M = jT(null, t, y, b, i), M;
        case de:
          return t.type = y = xS(y), M = NT(null, t, y, b, i), M;
        case $e: {
          if (t.type !== t.elementType) {
            var N = y.propTypes;
            N && ho(
              N,
              b,
              // Resolved for outer only
              "prop",
              zt(y)
            );
          }
          return M = LT(
            null,
            t,
            y,
            go(y.type, b),
            // The inner type can have defaults too
            i
          ), M;
        }
      }
      var B = "";
      throw y !== null && typeof y == "object" && y.$$typeof === Ge && (B = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + y + ". " + ("Lazy element type must resolve to a class or function." + B));
    }
    function TO(e, t, a, i, l) {
      Oy(e, t), t.tag = z;
      var c;
      return rl(a) ? (c = !0, Pm(t)) : c = !1, fd(t, l), BC(t, a, i), n_(t, a, i, l), Q_(null, t, a, !0, c, l);
    }
    function bO(e, t, a, i) {
      Oy(e, t);
      var l = t.pendingProps, c;
      {
        var p = id(t, a, !1);
        c = od(t, p);
      }
      fd(t, i);
      var m, y;
      Ru(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var C = zt(a) || "Unknown";
          I_[C] || (_("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", C, C), I_[C] = !0);
        }
        t.mode & On && yo.recordLegacyContextWarning(t, null), fr(!0), Tv.current = t, m = gd(null, t, a, l, c, i), y = Ed(), fr(!1);
      }
      if (kl(), t.flags |= fi, typeof m == "object" && m !== null && typeof m.render == "function" && m.$$typeof === void 0) {
        var b = zt(a) || "Unknown";
        bv[b] || (_("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", b, b, b), bv[b] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof m == "object" && m !== null && typeof m.render == "function" && m.$$typeof === void 0
      ) {
        {
          var M = zt(a) || "Unknown";
          bv[M] || (_("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", M, M, M), bv[M] = !0);
        }
        t.tag = z, t.memoizedState = null, t.updateQueue = null;
        var N = !1;
        return rl(a) ? (N = !0, Pm(t)) : N = !1, t.memoizedState = m.state !== null && m.state !== void 0 ? m.state : null, IE(t), IC(t, m), n_(t, a, l, i), Q_(null, t, a, !0, N, i);
      } else {
        if (t.tag = F, t.mode & On) {
          un(!0);
          try {
            m = gd(null, t, a, l, c, i), y = Ed();
          } finally {
            un(!1);
          }
        }
        return jr() && y && DE(t), wa(null, t, m, i), q_(t, a), t.child;
      }
    }
    function q_(e, t) {
      {
        if (t && t.childContextTypes && _("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = za();
          i && (a += `

Check the render method of \`` + i + "`.");
          var l = i || "", c = e._debugSource;
          c && (l = c.fileName + ":" + c.lineNumber), W_[l] || (W_[l] = !0, _("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = zt(t) || "Unknown";
          Y_[p] || (_("%s: Function components do not support getDerivedStateFromProps.", p), Y_[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var m = zt(t) || "Unknown";
          B_[m] || (_("%s: Function components do not support contextType.", m), B_[m] = !0);
        }
      }
    }
    var X_ = {
      dehydrated: null,
      treeContext: null,
      retryLane: $n
    };
    function Z_(e) {
      return {
        baseLanes: e,
        cachePool: vO(),
        transitions: null
      };
    }
    function wO(e, t) {
      var a = null;
      return {
        baseLanes: yt(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function RO(e, t, a, i) {
      if (t !== null) {
        var l = t.memoizedState;
        if (l === null)
          return !1;
      }
      return f_(e, hv);
    }
    function xO(e, t) {
      return sc(e.childLanes, t);
    }
    function HT(e, t, a) {
      var i = t.pendingProps;
      Uk(t) && (t.flags |= pt);
      var l = Eo.current, c = !1, p = (t.flags & pt) !== Qe;
      if (p || RO(l, e) ? (c = !0, t.flags &= ~pt) : (e === null || e.memoizedState !== null) && (l = QD(l, JC)), l = vd(l), is(t, l), e === null) {
        LE(t);
        var m = t.memoizedState;
        if (m !== null) {
          var y = m.dehydrated;
          if (y !== null)
            return NO(t, y);
        }
        var C = i.children, b = i.fallback;
        if (c) {
          var M = DO(t, C, b, a), N = t.child;
          return N.memoizedState = Z_(a), t.memoizedState = X_, M;
        } else
          return J_(t, C);
      } else {
        var B = e.memoizedState;
        if (B !== null) {
          var Y = B.dehydrated;
          if (Y !== null)
            return LO(e, t, p, i, Y, B, a);
        }
        if (c) {
          var X = i.fallback, De = i.children, Xe = AO(e, t, De, X, a), Ve = t.child, Lt = e.child.memoizedState;
          return Ve.memoizedState = Lt === null ? Z_(a) : wO(Lt, a), Ve.childLanes = xO(e, a), t.memoizedState = X_, Xe;
        } else {
          var Ot = i.children, $ = OO(e, t, Ot, a);
          return t.memoizedState = null, $;
        }
      }
    }
    function J_(e, t, a) {
      var i = e.mode, l = {
        mode: "visible",
        children: t
      }, c = eS(l, i);
      return c.return = e, e.child = c, c;
    }
    function DO(e, t, a, i) {
      var l = e.mode, c = e.child, p = {
        mode: "hidden",
        children: t
      }, m, y;
      return (l & Fe) === qe && c !== null ? (m = c, m.childLanes = J, m.pendingProps = p, e.mode & jt && (m.actualDuration = 0, m.actualStartTime = -1, m.selfBaseDuration = 0, m.treeBaseDuration = 0), y = ps(a, l, i, null)) : (m = eS(p, l), y = ps(a, l, i, null)), m.return = e, y.return = e, m.sibling = y, e.child = m, y;
    }
    function eS(e, t, a) {
      return Fb(e, t, J, null);
    }
    function FT(e, t) {
      return Pc(e, t);
    }
    function OO(e, t, a, i) {
      var l = e.child, c = l.sibling, p = FT(l, {
        mode: "visible",
        children: a
      });
      if ((t.mode & Fe) === qe && (p.lanes = i), p.return = t, p.sibling = null, c !== null) {
        var m = t.deletions;
        m === null ? (t.deletions = [c], t.flags |= Pt) : m.push(c);
      }
      return t.child = p, p;
    }
    function AO(e, t, a, i, l) {
      var c = t.mode, p = e.child, m = p.sibling, y = {
        mode: "hidden",
        children: a
      }, C;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (c & Fe) === qe && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== p
      ) {
        var b = t.child;
        C = b, C.childLanes = J, C.pendingProps = y, t.mode & jt && (C.actualDuration = 0, C.actualStartTime = -1, C.selfBaseDuration = p.selfBaseDuration, C.treeBaseDuration = p.treeBaseDuration), t.deletions = null;
      } else
        C = FT(p, y), C.subtreeFlags = p.subtreeFlags & pr;
      var M;
      return m !== null ? M = Pc(m, i) : (M = ps(i, c, l, null), M.flags |= nn), M.return = t, C.return = t, C.sibling = M, t.child = C, M;
    }
    function Dy(e, t, a, i) {
      i !== null && ME(i), dd(t, e.child, null, a);
      var l = t.pendingProps, c = l.children, p = J_(t, c);
      return p.flags |= nn, t.memoizedState = null, p;
    }
    function kO(e, t, a, i, l) {
      var c = t.mode, p = {
        mode: "visible",
        children: a
      }, m = eS(p, c), y = ps(i, c, l, null);
      return y.flags |= nn, m.return = t, y.return = t, m.sibling = y, t.child = m, (t.mode & Fe) !== qe && dd(t, e.child, null, l), y;
    }
    function NO(e, t, a) {
      return (e.mode & Fe) === qe ? (_("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = et) : gE(t) ? e.lanes = An : e.lanes = ba, null;
    }
    function LO(e, t, a, i, l, c, p) {
      if (a)
        if (t.flags & Mr) {
          t.flags &= ~Mr;
          var $ = H_(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Dy(e, t, p, $);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= pt, null;
          var Z = i.children, P = i.fallback, se = kO(e, t, Z, P, p), Oe = t.child;
          return Oe.memoizedState = Z_(p), t.memoizedState = X_, se;
        }
      else {
        if (SD(), (t.mode & Fe) === qe)
          return Dy(
            e,
            t,
            p,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (gE(l)) {
          var m, y, C;
          {
            var b = $x(l);
            m = b.digest, y = b.message, C = b.stack;
          }
          var M;
          y ? M = new Error(y) : M = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var N = H_(M, m, C);
          return Dy(e, t, p, N);
        }
        var B = oa(p, e.childLanes);
        if (So || B) {
          var Y = Py();
          if (Y !== null) {
            var X = em(Y, p);
            if (X !== $n && X !== c.retryLane) {
              c.retryLane = X;
              var De = sn;
              qa(e, X), Cr(Y, e, X, De);
            }
          }
          SS();
          var Xe = H_(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Dy(e, t, p, Xe);
        } else if (sC(l)) {
          t.flags |= pt, t.child = e.child;
          var Ve = ak.bind(null, e);
          return Px(l, Ve), null;
        } else {
          bD(t, l, c.treeContext);
          var Lt = i.children, Ot = J_(t, Lt);
          return Ot.flags |= Ri, Ot;
        }
      }
    }
    function VT(e, t, a) {
      e.lanes = yt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = yt(i.lanes, t)), PE(e.return, t, a);
    }
    function MO(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === ce) {
          var l = i.memoizedState;
          l !== null && VT(i, a, e);
        } else if (i.tag === st)
          VT(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function zO(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && ly(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function UO(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !G_[e])
        if (G_[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              _('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              _('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              _('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          _('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function jO(e, t) {
      e !== void 0 && !xy[e] && (e !== "collapsed" && e !== "hidden" ? (xy[e] = !0, _('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (xy[e] = !0, _('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function IT(e, t) {
      {
        var a = Ut(e), i = !a && typeof _i(e) == "function";
        if (a || i) {
          var l = a ? "array" : "iterable";
          return _("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", l, t, l), !1;
        }
      }
      return !0;
    }
    function $O(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Ut(e)) {
          for (var a = 0; a < e.length; a++)
            if (!IT(e[a], a))
              return;
        } else {
          var i = _i(e);
          if (typeof i == "function") {
            var l = i.call(e);
            if (l)
              for (var c = l.next(), p = 0; !c.done; c = l.next()) {
                if (!IT(c.value, p))
                  return;
                p++;
              }
          } else
            _('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function tS(e, t, a, i, l) {
      var c = e.memoizedState;
      c === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: l
      } : (c.isBackwards = t, c.rendering = null, c.renderingStartTime = 0, c.last = i, c.tail = a, c.tailMode = l);
    }
    function BT(e, t, a) {
      var i = t.pendingProps, l = i.revealOrder, c = i.tail, p = i.children;
      UO(l), jO(c, l), $O(p, l), wa(e, t, p, a);
      var m = Eo.current, y = f_(m, hv);
      if (y)
        m = d_(m, hv), t.flags |= pt;
      else {
        var C = e !== null && (e.flags & pt) !== Qe;
        C && MO(t, t.child, a), m = vd(m);
      }
      if (is(t, m), (t.mode & Fe) === qe)
        t.memoizedState = null;
      else
        switch (l) {
          case "forwards": {
            var b = zO(t.child), M;
            b === null ? (M = t.child, t.child = null) : (M = b.sibling, b.sibling = null), tS(
              t,
              !1,
              // isBackwards
              M,
              b,
              c
            );
            break;
          }
          case "backwards": {
            var N = null, B = t.child;
            for (t.child = null; B !== null; ) {
              var Y = B.alternate;
              if (Y !== null && ly(Y) === null) {
                t.child = B;
                break;
              }
              var X = B.sibling;
              B.sibling = N, N = B, B = X;
            }
            tS(
              t,
              !0,
              // isBackwards
              N,
              null,
              // last
              c
            );
            break;
          }
          case "together": {
            tS(
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
    function PO(e, t, a) {
      u_(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = dd(t, null, i, a) : wa(e, t, i, a), t.child;
    }
    var YT = !1;
    function HO(e, t, a) {
      var i = t.type, l = i._context, c = t.pendingProps, p = t.memoizedProps, m = c.value;
      {
        "value" in c || YT || (YT = !0, _("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var y = t.type.propTypes;
        y && ho(y, c, "prop", "Context.Provider");
      }
      if (NC(t, l, m), p !== null) {
        var C = p.value;
        if (Me(C, m)) {
          if (p.children === c.children && !jm())
            return Jl(e, t, a);
        } else
          MD(t, l, a);
      }
      var b = c.children;
      return wa(e, t, b, a), t.child;
    }
    var WT = !1;
    function FO(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (WT || (WT = !0, _("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var l = t.pendingProps, c = l.children;
      typeof c != "function" && _("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), fd(t, a);
      var p = sr(i);
      Ru(t);
      var m;
      return Tv.current = t, fr(!0), m = c(p), fr(!1), kl(), t.flags |= fi, wa(e, t, m, a), t.child;
    }
    function wv() {
      So = !0;
    }
    function Oy(e, t) {
      (t.mode & Fe) === qe && e !== null && (e.alternate = null, t.alternate = null, t.flags |= nn);
    }
    function Jl(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), xT(), jv(t.lanes), oa(a, t.childLanes) ? (WD(e, t), t.child) : null;
    }
    function VO(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var l = i.child;
          if (l === null)
            throw new Error("Expected parent to have a child.");
          for (; l.sibling !== t; )
            if (l = l.sibling, l === null)
              throw new Error("Expected to find the previous sibling.");
          l.sibling = a;
        }
        var c = i.deletions;
        return c === null ? (i.deletions = [e], i.flags |= Pt) : c.push(e), a.flags |= nn, a;
      }
    }
    function nS(e, t) {
      var a = e.lanes;
      return !!oa(a, t);
    }
    function IO(e, t, a) {
      switch (t.tag) {
        case V:
          $T(t), t.stateNode, sd();
          break;
        case q:
          XC(t);
          break;
        case z: {
          var i = t.type;
          rl(i) && Pm(t);
          break;
        }
        case G:
          u_(t, t.stateNode.containerInfo);
          break;
        case Re: {
          var l = t.memoizedProps.value, c = t.type._context;
          NC(t, c, l);
          break;
        }
        case Ae:
          {
            var p = oa(a, t.childLanes);
            p && (t.flags |= Pe);
            {
              var m = t.stateNode;
              m.effectDuration = 0, m.passiveEffectDuration = 0;
            }
          }
          break;
        case ce: {
          var y = t.memoizedState;
          if (y !== null) {
            if (y.dehydrated !== null)
              return is(t, vd(Eo.current)), t.flags |= pt, null;
            var C = t.child, b = C.childLanes;
            if (oa(a, b))
              return HT(e, t, a);
            is(t, vd(Eo.current));
            var M = Jl(e, t, a);
            return M !== null ? M.sibling : null;
          } else
            is(t, vd(Eo.current));
          break;
        }
        case st: {
          var N = (e.flags & pt) !== Qe, B = oa(a, t.childLanes);
          if (N) {
            if (B)
              return BT(e, t, a);
            t.flags |= pt;
          }
          var Y = t.memoizedState;
          if (Y !== null && (Y.rendering = null, Y.tail = null, Y.lastEffect = null), is(t, Eo.current), B)
            break;
          return null;
        }
        case Ye:
        case at:
          return t.lanes = J, zT(e, t, a);
      }
      return Jl(e, t, a);
    }
    function GT(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return VO(e, t, NS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, l = t.pendingProps;
        if (i !== l || jm() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          So = !0;
        else {
          var c = nS(e, a);
          if (!c && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & pt) === Qe)
            return So = !1, IO(e, t, a);
          (e.flags & of) !== Qe ? So = !0 : So = !1;
        }
      } else if (So = !1, jr() && hD(t)) {
        var p = t.index, m = mD();
        _C(t, m, p);
      }
      switch (t.lanes = J, t.tag) {
        case Q:
          return bO(e, t, t.type, a);
        case Rt: {
          var y = t.elementType;
          return CO(e, t, y, a);
        }
        case F: {
          var C = t.type, b = t.pendingProps, M = t.elementType === C ? b : go(C, b);
          return K_(e, t, C, M, a);
        }
        case z: {
          var N = t.type, B = t.pendingProps, Y = t.elementType === N ? B : go(N, B);
          return jT(e, t, N, Y, a);
        }
        case V:
          return EO(e, t, a);
        case q:
          return _O(e, t, a);
        case re:
          return SO(e, t);
        case ce:
          return HT(e, t, a);
        case G:
          return PO(e, t, a);
        case de: {
          var X = t.type, De = t.pendingProps, Xe = t.elementType === X ? De : go(X, De);
          return NT(e, t, X, Xe, a);
        }
        case Ee:
          return mO(e, t, a);
        case Ze:
          return yO(e, t, a);
        case Ae:
          return gO(e, t, a);
        case Re:
          return HO(e, t, a);
        case Je:
          return FO(e, t, a);
        case $e: {
          var Ve = t.type, Lt = t.pendingProps, Ot = go(Ve, Lt);
          if (t.type !== t.elementType) {
            var $ = Ve.propTypes;
            $ && ho(
              $,
              Ot,
              // Resolved for outer only
              "prop",
              zt(Ve)
            );
          }
          return Ot = go(Ve.type, Ot), LT(e, t, Ve, Ot, a);
        }
        case Ne:
          return MT(e, t, t.type, t.pendingProps, a);
        case Et: {
          var Z = t.type, P = t.pendingProps, se = t.elementType === Z ? P : go(Z, P);
          return TO(e, t, Z, se, a);
        }
        case st:
          return BT(e, t, a);
        case Ct:
          break;
        case Ye:
          return zT(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function _d(e) {
      e.flags |= Pe;
    }
    function KT(e) {
      e.flags |= _a, e.flags |= xi;
    }
    var QT, rS, qT, XT;
    QT = function(e, t, a, i) {
      for (var l = t.child; l !== null; ) {
        if (l.tag === q || l.tag === re)
          dx(e, l.stateNode);
        else if (l.tag !== G) {
          if (l.child !== null) {
            l.child.return = l, l = l.child;
            continue;
          }
        }
        if (l === t)
          return;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t)
            return;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    }, rS = function(e, t) {
    }, qT = function(e, t, a, i, l) {
      var c = e.memoizedProps;
      if (c !== i) {
        var p = t.stateNode, m = s_(), y = vx(p, a, c, i, l, m);
        t.updateQueue = y, y && _d(t);
      }
    }, XT = function(e, t, a, i) {
      a !== i && _d(t);
    };
    function Rv(e, t) {
      if (!jr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var l = e.tail, c = null; l !== null; )
              l.alternate !== null && (c = l), l = l.sibling;
            c === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : c.sibling = null;
            break;
          }
        }
    }
    function Pr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = J, i = Qe;
      if (t) {
        if ((e.mode & jt) !== qe) {
          for (var y = e.selfBaseDuration, C = e.child; C !== null; )
            a = yt(a, yt(C.lanes, C.childLanes)), i |= C.subtreeFlags & pr, i |= C.flags & pr, y += C.treeBaseDuration, C = C.sibling;
          e.treeBaseDuration = y;
        } else
          for (var b = e.child; b !== null; )
            a = yt(a, yt(b.lanes, b.childLanes)), i |= b.subtreeFlags & pr, i |= b.flags & pr, b.return = e, b = b.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & jt) !== qe) {
          for (var l = e.actualDuration, c = e.selfBaseDuration, p = e.child; p !== null; )
            a = yt(a, yt(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, l += p.actualDuration, c += p.treeBaseDuration, p = p.sibling;
          e.actualDuration = l, e.treeBaseDuration = c;
        } else
          for (var m = e.child; m !== null; )
            a = yt(a, yt(m.lanes, m.childLanes)), i |= m.subtreeFlags, i |= m.flags, m.return = e, m = m.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function BO(e, t, a) {
      if (OD() && (t.mode & Fe) !== qe && (t.flags & pt) === Qe)
        return xC(t), sd(), t.flags |= Mr | Fo | dr, !1;
      var i = Bm(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (xD(t), Pr(t), (t.mode & jt) !== qe) {
            var l = a !== null;
            if (l) {
              var c = t.child;
              c !== null && (t.treeBaseDuration -= c.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (sd(), (t.flags & pt) === Qe && (t.memoizedState = null), t.flags |= Pe, Pr(t), (t.mode & jt) !== qe) {
            var p = a !== null;
            if (p) {
              var m = t.child;
              m !== null && (t.treeBaseDuration -= m.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return DC(), !0;
    }
    function ZT(e, t, a) {
      var i = t.pendingProps;
      switch (OE(t), t.tag) {
        case Q:
        case Rt:
        case Ne:
        case F:
        case de:
        case Ee:
        case Ze:
        case Ae:
        case Je:
        case $e:
          return Pr(t), null;
        case z: {
          var l = t.type;
          return rl(l) && $m(t), Pr(t), null;
        }
        case V: {
          var c = t.stateNode;
          if (pd(t), wE(t), v_(), c.pendingContext && (c.context = c.pendingContext, c.pendingContext = null), e === null || e.child === null) {
            var p = Bm(t);
            if (p)
              _d(t);
            else if (e !== null) {
              var m = e.memoizedState;
              // Check if this is a client root
              (!m.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Mr) !== Qe) && (t.flags |= Wn, DC());
            }
          }
          return rS(e, t), Pr(t), null;
        }
        case q: {
          c_(t);
          var y = qC(), C = t.type;
          if (e !== null && t.stateNode != null)
            qT(e, t, C, i, y), e.ref !== t.ref && KT(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Pr(t), null;
            }
            var b = s_(), M = Bm(t);
            if (M)
              wD(t, y, b) && _d(t);
            else {
              var N = fx(C, i, y, b, t);
              QT(N, t, !1, !1), t.stateNode = N, px(N, C, i, y) && _d(t);
            }
            t.ref !== null && KT(t);
          }
          return Pr(t), null;
        }
        case re: {
          var B = i;
          if (e && t.stateNode != null) {
            var Y = e.memoizedProps;
            XT(e, t, Y, B);
          } else {
            if (typeof B != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var X = qC(), De = s_(), Xe = Bm(t);
            Xe ? RD(t) && _d(t) : t.stateNode = hx(B, X, De, t);
          }
          return Pr(t), null;
        }
        case ce: {
          hd(t);
          var Ve = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Lt = BO(e, t, Ve);
            if (!Lt)
              return t.flags & dr ? t : null;
          }
          if ((t.flags & pt) !== Qe)
            return t.lanes = a, (t.mode & jt) !== qe && P_(t), t;
          var Ot = Ve !== null, $ = e !== null && e.memoizedState !== null;
          if (Ot !== $ && Ot) {
            var Z = t.child;
            if (Z.flags |= Ho, (t.mode & Fe) !== qe) {
              var P = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !Te);
              P || f_(Eo.current, JC) ? YA() : SS();
            }
          }
          var se = t.updateQueue;
          if (se !== null && (t.flags |= Pe), Pr(t), (t.mode & jt) !== qe && Ot) {
            var Oe = t.child;
            Oe !== null && (t.treeBaseDuration -= Oe.treeBaseDuration);
          }
          return null;
        }
        case G:
          return pd(t), rS(e, t), e === null && uD(t.stateNode.containerInfo), Pr(t), null;
        case Re:
          var Ce = t.type._context;
          return $E(Ce, t), Pr(t), null;
        case Et: {
          var ot = t.type;
          return rl(ot) && $m(t), Pr(t), null;
        }
        case st: {
          hd(t);
          var ht = t.memoizedState;
          if (ht === null)
            return Pr(t), null;
          var Jt = (t.flags & pt) !== Qe, Ft = ht.rendering;
          if (Ft === null)
            if (Jt)
              Rv(ht, !1);
            else {
              var nr = GA() && (e === null || (e.flags & pt) === Qe);
              if (!nr)
                for (var Vt = t.child; Vt !== null; ) {
                  var Kn = ly(Vt);
                  if (Kn !== null) {
                    Jt = !0, t.flags |= pt, Rv(ht, !1);
                    var fa = Kn.updateQueue;
                    return fa !== null && (t.updateQueue = fa, t.flags |= Pe), t.subtreeFlags = Qe, GD(t, a), is(t, d_(Eo.current, hv)), t.child;
                  }
                  Vt = Vt.sibling;
                }
              ht.tail !== null && Gn() > Eb() && (t.flags |= pt, Jt = !0, Rv(ht, !1), t.lanes = bp);
            }
          else {
            if (!Jt) {
              var Br = ly(Ft);
              if (Br !== null) {
                t.flags |= pt, Jt = !0;
                var hi = Br.updateQueue;
                if (hi !== null && (t.updateQueue = hi, t.flags |= Pe), Rv(ht, !0), ht.tail === null && ht.tailMode === "hidden" && !Ft.alternate && !jr())
                  return Pr(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                Gn() * 2 - ht.renderingStartTime > Eb() && a !== ba && (t.flags |= pt, Jt = !0, Rv(ht, !1), t.lanes = bp);
            }
            if (ht.isBackwards)
              Ft.sibling = t.child, t.child = Ft;
            else {
              var Da = ht.last;
              Da !== null ? Da.sibling = Ft : t.child = Ft, ht.last = Ft;
            }
          }
          if (ht.tail !== null) {
            var Oa = ht.tail;
            ht.rendering = Oa, ht.tail = Oa.sibling, ht.renderingStartTime = Gn(), Oa.sibling = null;
            var da = Eo.current;
            return Jt ? da = d_(da, hv) : da = vd(da), is(t, da), Oa;
          }
          return Pr(t), null;
        }
        case Ct:
          break;
        case Ye:
        case at: {
          _S(t);
          var au = t.memoizedState, Dd = au !== null;
          if (e !== null) {
            var Vv = e.memoizedState, fl = Vv !== null;
            fl !== Dd && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !te && (t.flags |= Ho);
          }
          return !Dd || (t.mode & Fe) === qe ? Pr(t) : oa(cl, ba) && (Pr(t), t.subtreeFlags & (nn | Pe) && (t.flags |= Ho)), null;
        }
        case lt:
          return null;
        case Ke:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function YO(e, t, a) {
      switch (OE(t), t.tag) {
        case z: {
          var i = t.type;
          rl(i) && $m(t);
          var l = t.flags;
          return l & dr ? (t.flags = l & ~dr | pt, (t.mode & jt) !== qe && P_(t), t) : null;
        }
        case V: {
          t.stateNode, pd(t), wE(t), v_();
          var c = t.flags;
          return (c & dr) !== Qe && (c & pt) === Qe ? (t.flags = c & ~dr | pt, t) : null;
        }
        case q:
          return c_(t), null;
        case ce: {
          hd(t);
          var p = t.memoizedState;
          if (p !== null && p.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            sd();
          }
          var m = t.flags;
          return m & dr ? (t.flags = m & ~dr | pt, (t.mode & jt) !== qe && P_(t), t) : null;
        }
        case st:
          return hd(t), null;
        case G:
          return pd(t), null;
        case Re:
          var y = t.type._context;
          return $E(y, t), null;
        case Ye:
        case at:
          return _S(t), null;
        case lt:
          return null;
        default:
          return null;
      }
    }
    function JT(e, t, a) {
      switch (OE(t), t.tag) {
        case z: {
          var i = t.type.childContextTypes;
          i != null && $m(t);
          break;
        }
        case V: {
          t.stateNode, pd(t), wE(t), v_();
          break;
        }
        case q: {
          c_(t);
          break;
        }
        case G:
          pd(t);
          break;
        case ce:
          hd(t);
          break;
        case st:
          hd(t);
          break;
        case Re:
          var l = t.type._context;
          $E(l, t);
          break;
        case Ye:
        case at:
          _S(t);
          break;
      }
    }
    var eb = null;
    eb = /* @__PURE__ */ new Set();
    var Ay = !1, Hr = !1, WO = typeof WeakSet == "function" ? WeakSet : Set, ze = null, Sd = null, Cd = null;
    function GO(e) {
      ci(null, function() {
        throw e;
      }), oo();
    }
    var KO = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & jt)
        try {
          ul(), t.componentWillUnmount();
        } finally {
          ll(e);
        }
      else
        t.componentWillUnmount();
    };
    function tb(e, t) {
      try {
        us(mr, e);
      } catch (a) {
        vn(e, t, a);
      }
    }
    function aS(e, t, a) {
      try {
        KO(e, a);
      } catch (i) {
        vn(e, t, i);
      }
    }
    function QO(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        vn(e, t, i);
      }
    }
    function nb(e, t) {
      try {
        ab(e);
      } catch (a) {
        vn(e, t, a);
      }
    }
    function Td(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (_t && ut && e.mode & jt)
              try {
                ul(), i = a(null);
              } finally {
                ll(e);
              }
            else
              i = a(null);
          } catch (l) {
            vn(e, t, l);
          }
          typeof i == "function" && _("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", ft(e));
        } else
          a.current = null;
    }
    function ky(e, t, a) {
      try {
        a();
      } catch (i) {
        vn(e, t, i);
      }
    }
    var rb = !1;
    function qO(e, t) {
      sx(e.containerInfo), ze = t, XO();
      var a = rb;
      return rb = !1, a;
    }
    function XO() {
      for (; ze !== null; ) {
        var e = ze, t = e.child;
        (e.subtreeFlags & Jr) !== Qe && t !== null ? (t.return = e, ze = t) : ZO();
      }
    }
    function ZO() {
      for (; ze !== null; ) {
        var e = ze;
        Cn(e);
        try {
          JO(e);
        } catch (a) {
          vn(e, e.return, a);
        }
        cn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ze = t;
          return;
        }
        ze = e.return;
      }
    }
    function JO(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Wn) !== Qe) {
        switch (Cn(e), e.tag) {
          case F:
          case de:
          case Ne:
            break;
          case z: {
            if (t !== null) {
              var i = t.memoizedProps, l = t.memoizedState, c = e.stateNode;
              e.type === e.elementType && !Mc && (c.props !== e.memoizedProps && _("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ft(e) || "instance"), c.state !== e.memoizedState && _("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ft(e) || "instance"));
              var p = c.getSnapshotBeforeUpdate(e.elementType === e.type ? i : go(e.type, i), l);
              {
                var m = eb;
                p === void 0 && !m.has(e.type) && (m.add(e.type), _("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", ft(e)));
              }
              c.__reactInternalSnapshotBeforeUpdate = p;
            }
            break;
          }
          case V: {
            {
              var y = e.stateNode;
              Mx(y.containerInfo);
            }
            break;
          }
          case q:
          case re:
          case G:
          case Et:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        cn();
      }
    }
    function Co(e, t, a) {
      var i = t.updateQueue, l = i !== null ? i.lastEffect : null;
      if (l !== null) {
        var c = l.next, p = c;
        do {
          if ((p.tag & e) === e) {
            var m = p.destroy;
            p.destroy = void 0, m !== void 0 && ((e & $r) !== Xa ? Hh(t) : (e & mr) !== Xa && xu(t), (e & al) !== Xa && Pv(!0), ky(t, a, m), (e & al) !== Xa && Pv(!1), (e & $r) !== Xa ? Fh() : (e & mr) !== Xa && Zs());
          }
          p = p.next;
        } while (p !== c);
      }
    }
    function us(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var l = i.next, c = l;
        do {
          if ((c.tag & e) === e) {
            (e & $r) !== Xa ? _p(t) : (e & mr) !== Xa && Vh(t);
            var p = c.create;
            (e & al) !== Xa && Pv(!0), c.destroy = p(), (e & al) !== Xa && Pv(!1), (e & $r) !== Xa ? df() : (e & mr) !== Xa && Sp();
            {
              var m = c.destroy;
              if (m !== void 0 && typeof m != "function") {
                var y = void 0;
                (c.tag & mr) !== Qe ? y = "useLayoutEffect" : (c.tag & al) !== Qe ? y = "useInsertionEffect" : y = "useEffect";
                var C = void 0;
                m === null ? C = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof m.then == "function" ? C = `

It looks like you wrote ` + y + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + y + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : C = " You returned: " + m, _("%s must not return anything besides a function, which is used for clean-up.%s", y, C);
              }
            }
          }
          c = c.next;
        } while (c !== l);
      }
    }
    function eA(e, t) {
      if ((t.flags & Pe) !== Qe)
        switch (t.tag) {
          case Ae: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, l = i.id, c = i.onPostCommit, p = wT(), m = t.alternate === null ? "mount" : "update";
            bT() && (m = "nested-update"), typeof c == "function" && c(l, m, a, p);
            var y = t.return;
            e:
              for (; y !== null; ) {
                switch (y.tag) {
                  case V:
                    var C = y.stateNode;
                    C.passiveEffectDuration += a;
                    break e;
                  case Ae:
                    var b = y.stateNode;
                    b.passiveEffectDuration += a;
                    break e;
                }
                y = y.return;
              }
            break;
          }
        }
    }
    function tA(e, t, a, i) {
      if ((a.flags & di) !== Qe)
        switch (a.tag) {
          case F:
          case de:
          case Ne: {
            if (!Hr)
              if (a.mode & jt)
                try {
                  ul(), us(mr | hr, a);
                } finally {
                  ll(a);
                }
              else
                us(mr | hr, a);
            break;
          }
          case z: {
            var l = a.stateNode;
            if (a.flags & Pe && !Hr)
              if (t === null)
                if (a.type === a.elementType && !Mc && (l.props !== a.memoizedProps && _("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ft(a) || "instance"), l.state !== a.memoizedState && _("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ft(a) || "instance")), a.mode & jt)
                  try {
                    ul(), l.componentDidMount();
                  } finally {
                    ll(a);
                  }
                else
                  l.componentDidMount();
              else {
                var c = a.elementType === a.type ? t.memoizedProps : go(a.type, t.memoizedProps), p = t.memoizedState;
                if (a.type === a.elementType && !Mc && (l.props !== a.memoizedProps && _("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ft(a) || "instance"), l.state !== a.memoizedState && _("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ft(a) || "instance")), a.mode & jt)
                  try {
                    ul(), l.componentDidUpdate(c, p, l.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    ll(a);
                  }
                else
                  l.componentDidUpdate(c, p, l.__reactInternalSnapshotBeforeUpdate);
              }
            var m = a.updateQueue;
            m !== null && (a.type === a.elementType && !Mc && (l.props !== a.memoizedProps && _("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ft(a) || "instance"), l.state !== a.memoizedState && _("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ft(a) || "instance")), $C(a, m, l));
            break;
          }
          case V: {
            var y = a.updateQueue;
            if (y !== null) {
              var C = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case q:
                    C = a.child.stateNode;
                    break;
                  case z:
                    C = a.child.stateNode;
                    break;
                }
              $C(a, y, C);
            }
            break;
          }
          case q: {
            var b = a.stateNode;
            if (t === null && a.flags & Pe) {
              var M = a.type, N = a.memoizedProps;
              _x(b, M, N);
            }
            break;
          }
          case re:
            break;
          case G:
            break;
          case Ae: {
            {
              var B = a.memoizedProps, Y = B.onCommit, X = B.onRender, De = a.stateNode.effectDuration, Xe = wT(), Ve = t === null ? "mount" : "update";
              bT() && (Ve = "nested-update"), typeof X == "function" && X(a.memoizedProps.id, Ve, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Xe);
              {
                typeof Y == "function" && Y(a.memoizedProps.id, Ve, De, Xe), ZA(a);
                var Lt = a.return;
                e:
                  for (; Lt !== null; ) {
                    switch (Lt.tag) {
                      case V:
                        var Ot = Lt.stateNode;
                        Ot.effectDuration += De;
                        break e;
                      case Ae:
                        var $ = Lt.stateNode;
                        $.effectDuration += De;
                        break e;
                    }
                    Lt = Lt.return;
                  }
              }
            }
            break;
          }
          case ce: {
            sA(e, a);
            break;
          }
          case st:
          case Et:
          case Ct:
          case Ye:
          case at:
          case Ke:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Hr || a.flags & _a && ab(a);
    }
    function nA(e) {
      switch (e.tag) {
        case F:
        case de:
        case Ne: {
          if (e.mode & jt)
            try {
              ul(), tb(e, e.return);
            } finally {
              ll(e);
            }
          else
            tb(e, e.return);
          break;
        }
        case z: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && QO(e, e.return, t), nb(e, e.return);
          break;
        }
        case q: {
          nb(e, e.return);
          break;
        }
      }
    }
    function rA(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === q) {
          if (a === null) {
            a = i;
            try {
              var l = i.stateNode;
              t ? Ax(l) : Nx(i.stateNode, i.memoizedProps);
            } catch (p) {
              vn(e, e.return, p);
            }
          }
        } else if (i.tag === re) {
          if (a === null)
            try {
              var c = i.stateNode;
              t ? kx(c) : Lx(c, i.memoizedProps);
            } catch (p) {
              vn(e, e.return, p);
            }
        } else if (!((i.tag === Ye || i.tag === at) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function ab(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case q:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var l;
          if (e.mode & jt)
            try {
              ul(), l = t(i);
            } finally {
              ll(e);
            }
          else
            l = t(i);
          typeof l == "function" && _("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", ft(e));
        } else
          t.hasOwnProperty("current") || _("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", ft(e)), t.current = i;
      }
    }
    function aA(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function ib(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, ib(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === q) {
          var a = e.stateNode;
          a !== null && fD(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function iA(e) {
      for (var t = e.return; t !== null; ) {
        if (ob(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function ob(e) {
      return e.tag === q || e.tag === V || e.tag === G;
    }
    function lb(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || ob(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== q && t.tag !== re && t.tag !== gt; ) {
            if (t.flags & nn || t.child === null || t.tag === G)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & nn))
            return t.stateNode;
        }
    }
    function oA(e) {
      var t = iA(e);
      switch (t.tag) {
        case q: {
          var a = t.stateNode;
          t.flags & $a && (uC(a), t.flags &= ~$a);
          var i = lb(e);
          oS(e, i, a);
          break;
        }
        case V:
        case G: {
          var l = t.stateNode.containerInfo, c = lb(e);
          iS(e, c, l);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function iS(e, t, a) {
      var i = e.tag, l = i === q || i === re;
      if (l) {
        var c = e.stateNode;
        t ? Rx(a, c, t) : bx(a, c);
      } else if (i !== G) {
        var p = e.child;
        if (p !== null) {
          iS(p, t, a);
          for (var m = p.sibling; m !== null; )
            iS(m, t, a), m = m.sibling;
        }
      }
    }
    function oS(e, t, a) {
      var i = e.tag, l = i === q || i === re;
      if (l) {
        var c = e.stateNode;
        t ? wx(a, c, t) : Tx(a, c);
      } else if (i !== G) {
        var p = e.child;
        if (p !== null) {
          oS(p, t, a);
          for (var m = p.sibling; m !== null; )
            oS(m, t, a), m = m.sibling;
        }
      }
    }
    var Fr = null, To = !1;
    function lA(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case q: {
                Fr = i.stateNode, To = !1;
                break e;
              }
              case V: {
                Fr = i.stateNode.containerInfo, To = !0;
                break e;
              }
              case G: {
                Fr = i.stateNode.containerInfo, To = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (Fr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        ub(e, t, a), Fr = null, To = !1;
      }
      aA(a);
    }
    function ss(e, t, a) {
      for (var i = a.child; i !== null; )
        ub(e, t, i), i = i.sibling;
    }
    function ub(e, t, a) {
      switch ($h(a), a.tag) {
        case q:
          Hr || Td(a, t);
        case re: {
          {
            var i = Fr, l = To;
            Fr = null, ss(e, t, a), Fr = i, To = l, Fr !== null && (To ? Dx(Fr, a.stateNode) : xx(Fr, a.stateNode));
          }
          return;
        }
        case gt: {
          Fr !== null && (To ? Ox(Fr, a.stateNode) : yE(Fr, a.stateNode));
          return;
        }
        case G: {
          {
            var c = Fr, p = To;
            Fr = a.stateNode.containerInfo, To = !0, ss(e, t, a), Fr = c, To = p;
          }
          return;
        }
        case F:
        case de:
        case $e:
        case Ne: {
          if (!Hr) {
            var m = a.updateQueue;
            if (m !== null) {
              var y = m.lastEffect;
              if (y !== null) {
                var C = y.next, b = C;
                do {
                  var M = b, N = M.destroy, B = M.tag;
                  N !== void 0 && ((B & al) !== Xa ? ky(a, t, N) : (B & mr) !== Xa && (xu(a), a.mode & jt ? (ul(), ky(a, t, N), ll(a)) : ky(a, t, N), Zs())), b = b.next;
                } while (b !== C);
              }
            }
          }
          ss(e, t, a);
          return;
        }
        case z: {
          if (!Hr) {
            Td(a, t);
            var Y = a.stateNode;
            typeof Y.componentWillUnmount == "function" && aS(a, t, Y);
          }
          ss(e, t, a);
          return;
        }
        case Ct: {
          ss(e, t, a);
          return;
        }
        case Ye: {
          if (
            // TODO: Remove this dead flag
            a.mode & Fe
          ) {
            var X = Hr;
            Hr = X || a.memoizedState !== null, ss(e, t, a), Hr = X;
          } else
            ss(e, t, a);
          break;
        }
        default: {
          ss(e, t, a);
          return;
        }
      }
    }
    function uA(e) {
      e.memoizedState;
    }
    function sA(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var l = i.memoizedState;
          if (l !== null) {
            var c = l.dehydrated;
            c !== null && Kx(c);
          }
        }
      }
    }
    function sb(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new WO()), t.forEach(function(i) {
          var l = ik.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Ta)
              if (Sd !== null && Cd !== null)
                $v(Cd, Sd);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(l, l);
          }
        });
      }
    }
    function cA(e, t, a) {
      Sd = a, Cd = e, Cn(t), cb(t, e), Cn(t), Sd = null, Cd = null;
    }
    function bo(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var l = 0; l < i.length; l++) {
          var c = i[l];
          try {
            lA(e, t, c);
          } catch (y) {
            vn(c, t, y);
          }
        }
      var p = As();
      if (t.subtreeFlags & ea)
        for (var m = t.child; m !== null; )
          Cn(m), cb(m, e), m = m.sibling;
      Cn(p);
    }
    function cb(e, t, a) {
      var i = e.alternate, l = e.flags;
      switch (e.tag) {
        case F:
        case de:
        case $e:
        case Ne: {
          if (bo(t, e), sl(e), l & Pe) {
            try {
              Co(al | hr, e, e.return), us(al | hr, e);
            } catch (ot) {
              vn(e, e.return, ot);
            }
            if (e.mode & jt) {
              try {
                ul(), Co(mr | hr, e, e.return);
              } catch (ot) {
                vn(e, e.return, ot);
              }
              ll(e);
            } else
              try {
                Co(mr | hr, e, e.return);
              } catch (ot) {
                vn(e, e.return, ot);
              }
          }
          return;
        }
        case z: {
          bo(t, e), sl(e), l & _a && i !== null && Td(i, i.return);
          return;
        }
        case q: {
          bo(t, e), sl(e), l & _a && i !== null && Td(i, i.return);
          {
            if (e.flags & $a) {
              var c = e.stateNode;
              try {
                uC(c);
              } catch (ot) {
                vn(e, e.return, ot);
              }
            }
            if (l & Pe) {
              var p = e.stateNode;
              if (p != null) {
                var m = e.memoizedProps, y = i !== null ? i.memoizedProps : m, C = e.type, b = e.updateQueue;
                if (e.updateQueue = null, b !== null)
                  try {
                    Sx(p, b, C, y, m, e);
                  } catch (ot) {
                    vn(e, e.return, ot);
                  }
              }
            }
          }
          return;
        }
        case re: {
          if (bo(t, e), sl(e), l & Pe) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var M = e.stateNode, N = e.memoizedProps, B = i !== null ? i.memoizedProps : N;
            try {
              Cx(M, B, N);
            } catch (ot) {
              vn(e, e.return, ot);
            }
          }
          return;
        }
        case V: {
          if (bo(t, e), sl(e), l & Pe && i !== null) {
            var Y = i.memoizedState;
            if (Y.isDehydrated)
              try {
                Gx(t.containerInfo);
              } catch (ot) {
                vn(e, e.return, ot);
              }
          }
          return;
        }
        case G: {
          bo(t, e), sl(e);
          return;
        }
        case ce: {
          bo(t, e), sl(e);
          var X = e.child;
          if (X.flags & Ho) {
            var De = X.stateNode, Xe = X.memoizedState, Ve = Xe !== null;
            if (De.isHidden = Ve, Ve) {
              var Lt = X.alternate !== null && X.alternate.memoizedState !== null;
              Lt || BA();
            }
          }
          if (l & Pe) {
            try {
              uA(e);
            } catch (ot) {
              vn(e, e.return, ot);
            }
            sb(e);
          }
          return;
        }
        case Ye: {
          var Ot = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Fe
          ) {
            var $ = Hr;
            Hr = $ || Ot, bo(t, e), Hr = $;
          } else
            bo(t, e);
          if (sl(e), l & Ho) {
            var Z = e.stateNode, P = e.memoizedState, se = P !== null, Oe = e;
            if (Z.isHidden = se, se && !Ot && (Oe.mode & Fe) !== qe) {
              ze = Oe;
              for (var Ce = Oe.child; Ce !== null; )
                ze = Ce, dA(Ce), Ce = Ce.sibling;
            }
            rA(Oe, se);
          }
          return;
        }
        case st: {
          bo(t, e), sl(e), l & Pe && sb(e);
          return;
        }
        case Ct:
          return;
        default: {
          bo(t, e), sl(e);
          return;
        }
      }
    }
    function sl(e) {
      var t = e.flags;
      if (t & nn) {
        try {
          oA(e);
        } catch (a) {
          vn(e, e.return, a);
        }
        e.flags &= ~nn;
      }
      t & Ri && (e.flags &= ~Ri);
    }
    function fA(e, t, a) {
      Sd = a, Cd = t, ze = e, fb(e, t, a), Sd = null, Cd = null;
    }
    function fb(e, t, a) {
      for (var i = (e.mode & Fe) !== qe; ze !== null; ) {
        var l = ze, c = l.child;
        if (l.tag === Ye && i) {
          var p = l.memoizedState !== null, m = p || Ay;
          if (m) {
            lS(e, t, a);
            continue;
          } else {
            var y = l.alternate, C = y !== null && y.memoizedState !== null, b = C || Hr, M = Ay, N = Hr;
            Ay = m, Hr = b, Hr && !N && (ze = l, pA(l));
            for (var B = c; B !== null; )
              ze = B, fb(
                B,
                // New root; bubble back up to here and stop.
                t,
                a
              ), B = B.sibling;
            ze = l, Ay = M, Hr = N, lS(e, t, a);
            continue;
          }
        }
        (l.subtreeFlags & di) !== Qe && c !== null ? (c.return = l, ze = c) : lS(e, t, a);
      }
    }
    function lS(e, t, a) {
      for (; ze !== null; ) {
        var i = ze;
        if ((i.flags & di) !== Qe) {
          var l = i.alternate;
          Cn(i);
          try {
            tA(t, l, i, a);
          } catch (p) {
            vn(i, i.return, p);
          }
          cn();
        }
        if (i === e) {
          ze = null;
          return;
        }
        var c = i.sibling;
        if (c !== null) {
          c.return = i.return, ze = c;
          return;
        }
        ze = i.return;
      }
    }
    function dA(e) {
      for (; ze !== null; ) {
        var t = ze, a = t.child;
        switch (t.tag) {
          case F:
          case de:
          case $e:
          case Ne: {
            if (t.mode & jt)
              try {
                ul(), Co(mr, t, t.return);
              } finally {
                ll(t);
              }
            else
              Co(mr, t, t.return);
            break;
          }
          case z: {
            Td(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && aS(t, t.return, i);
            break;
          }
          case q: {
            Td(t, t.return);
            break;
          }
          case Ye: {
            var l = t.memoizedState !== null;
            if (l) {
              db(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, ze = a) : db(e);
      }
    }
    function db(e) {
      for (; ze !== null; ) {
        var t = ze;
        if (t === e) {
          ze = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, ze = a;
          return;
        }
        ze = t.return;
      }
    }
    function pA(e) {
      for (; ze !== null; ) {
        var t = ze, a = t.child;
        if (t.tag === Ye) {
          var i = t.memoizedState !== null;
          if (i) {
            pb(e);
            continue;
          }
        }
        a !== null ? (a.return = t, ze = a) : pb(e);
      }
    }
    function pb(e) {
      for (; ze !== null; ) {
        var t = ze;
        Cn(t);
        try {
          nA(t);
        } catch (i) {
          vn(t, t.return, i);
        }
        if (cn(), t === e) {
          ze = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, ze = a;
          return;
        }
        ze = t.return;
      }
    }
    function vA(e, t, a, i) {
      ze = t, hA(t, e, a, i);
    }
    function hA(e, t, a, i) {
      for (; ze !== null; ) {
        var l = ze, c = l.child;
        (l.subtreeFlags & ta) !== Qe && c !== null ? (c.return = l, ze = c) : mA(e, t, a, i);
      }
    }
    function mA(e, t, a, i) {
      for (; ze !== null; ) {
        var l = ze;
        if ((l.flags & Zr) !== Qe) {
          Cn(l);
          try {
            yA(t, l, a, i);
          } catch (p) {
            vn(l, l.return, p);
          }
          cn();
        }
        if (l === e) {
          ze = null;
          return;
        }
        var c = l.sibling;
        if (c !== null) {
          c.return = l.return, ze = c;
          return;
        }
        ze = l.return;
      }
    }
    function yA(e, t, a, i) {
      switch (t.tag) {
        case F:
        case de:
        case Ne: {
          if (t.mode & jt) {
            $_();
            try {
              us($r | hr, t);
            } finally {
              j_(t);
            }
          } else
            us($r | hr, t);
          break;
        }
      }
    }
    function gA(e) {
      ze = e, EA();
    }
    function EA() {
      for (; ze !== null; ) {
        var e = ze, t = e.child;
        if ((ze.flags & Pt) !== Qe) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var l = a[i];
              ze = l, CA(l, e);
            }
            {
              var c = e.alternate;
              if (c !== null) {
                var p = c.child;
                if (p !== null) {
                  c.child = null;
                  do {
                    var m = p.sibling;
                    p.sibling = null, p = m;
                  } while (p !== null);
                }
              }
            }
            ze = e;
          }
        }
        (e.subtreeFlags & ta) !== Qe && t !== null ? (t.return = e, ze = t) : _A();
      }
    }
    function _A() {
      for (; ze !== null; ) {
        var e = ze;
        (e.flags & Zr) !== Qe && (Cn(e), SA(e), cn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ze = t;
          return;
        }
        ze = e.return;
      }
    }
    function SA(e) {
      switch (e.tag) {
        case F:
        case de:
        case Ne: {
          e.mode & jt ? ($_(), Co($r | hr, e, e.return), j_(e)) : Co($r | hr, e, e.return);
          break;
        }
      }
    }
    function CA(e, t) {
      for (; ze !== null; ) {
        var a = ze;
        Cn(a), bA(a, t), cn();
        var i = a.child;
        i !== null ? (i.return = a, ze = i) : TA(e);
      }
    }
    function TA(e) {
      for (; ze !== null; ) {
        var t = ze, a = t.sibling, i = t.return;
        if (ib(t), t === e) {
          ze = null;
          return;
        }
        if (a !== null) {
          a.return = i, ze = a;
          return;
        }
        ze = i;
      }
    }
    function bA(e, t) {
      switch (e.tag) {
        case F:
        case de:
        case Ne: {
          e.mode & jt ? ($_(), Co($r, e, t), j_(e)) : Co($r, e, t);
          break;
        }
      }
    }
    function wA(e) {
      switch (e.tag) {
        case F:
        case de:
        case Ne: {
          try {
            us(mr | hr, e);
          } catch (a) {
            vn(e, e.return, a);
          }
          break;
        }
        case z: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            vn(e, e.return, a);
          }
          break;
        }
      }
    }
    function RA(e) {
      switch (e.tag) {
        case F:
        case de:
        case Ne: {
          try {
            us($r | hr, e);
          } catch (t) {
            vn(e, e.return, t);
          }
          break;
        }
      }
    }
    function xA(e) {
      switch (e.tag) {
        case F:
        case de:
        case Ne: {
          try {
            Co(mr | hr, e, e.return);
          } catch (a) {
            vn(e, e.return, a);
          }
          break;
        }
        case z: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && aS(e, e.return, t);
          break;
        }
      }
    }
    function DA(e) {
      switch (e.tag) {
        case F:
        case de:
        case Ne:
          try {
            Co($r | hr, e, e.return);
          } catch (t) {
            vn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var xv = Symbol.for;
      xv("selector.component"), xv("selector.has_pseudo_class"), xv("selector.role"), xv("selector.test_id"), xv("selector.text");
    }
    var OA = [];
    function AA() {
      OA.forEach(function(e) {
        return e();
      });
    }
    var kA = g.ReactCurrentActQueue;
    function NA(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function vb() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && kA.current !== null && _("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var LA = Math.ceil, uS = g.ReactCurrentDispatcher, sS = g.ReactCurrentOwner, Vr = g.ReactCurrentBatchConfig, wo = g.ReactCurrentActQueue, Er = (
      /*             */
      0
    ), hb = (
      /*               */
      1
    ), Ir = (
      /*                */
      2
    ), Hi = (
      /*                */
      4
    ), eu = 0, Dv = 1, zc = 2, Ny = 3, Ov = 4, mb = 5, cS = 6, Nt = Er, Ra = null, Vn = null, _r = J, cl = J, fS = Ju(J), Sr = eu, Av = null, Ly = J, kv = J, My = J, Nv = null, Za = null, dS = 0, yb = 500, gb = 1 / 0, MA = 500, tu = null;
    function Lv() {
      gb = Gn() + MA;
    }
    function Eb() {
      return gb;
    }
    var zy = !1, pS = null, bd = null, Uc = !1, cs = null, Mv = J, vS = [], hS = null, zA = 50, zv = 0, mS = null, yS = !1, Uy = !1, UA = 50, wd = 0, jy = null, Uv = sn, $y = J, _b = !1;
    function Py() {
      return Ra;
    }
    function xa() {
      return (Nt & (Ir | Hi)) !== Er ? Gn() : (Uv !== sn || (Uv = Gn()), Uv);
    }
    function fs(e) {
      var t = e.mode;
      if ((t & Fe) === qe)
        return et;
      if ((Nt & Ir) !== Er && _r !== J)
        return Mu(_r);
      var a = ND() !== kD;
      if (a) {
        if (Vr.transition !== null) {
          var i = Vr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return $y === $n && ($y = Xh()), $y;
      }
      var l = Ba();
      if (l !== $n)
        return l;
      var c = mx();
      return c;
    }
    function jA(e) {
      var t = e.mode;
      return (t & Fe) === qe ? et : ia();
    }
    function Cr(e, t, a, i) {
      lk(), _b && _("useInsertionEffect must not schedule updates."), yS && (Uy = !0), Hl(e, a, i), (Nt & Ir) !== J && e === Ra ? ck(t) : (Ta && Nf(e, t, a), fk(t), e === Ra && ((Nt & Ir) === Er && (kv = yt(kv, a)), Sr === Ov && ds(e, _r)), Ja(e, i), a === et && Nt === Er && (t.mode & Fe) === qe && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !wo.isBatchingLegacy && (Lv(), EC()));
    }
    function $A(e, t, a) {
      var i = e.current;
      i.lanes = t, Hl(e, t, a), Ja(e, a);
    }
    function PA(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Nt & Ir) !== Er
      );
    }
    function Ja(e, t) {
      var a = e.callbackNode;
      Ug(e, t);
      var i = oc(e, e === Ra ? _r : J);
      if (i === J) {
        a !== null && Ub(a), e.callbackNode = null, e.callbackPriority = $n;
        return;
      }
      var l = Pn(i), c = e.callbackPriority;
      if (c === l && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(wo.current !== null && a !== bS)) {
        a == null && c !== et && _("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && Ub(a);
      var p;
      if (l === et)
        e.tag === es ? (wo.isBatchingLegacy !== null && (wo.didScheduleLegacyUpdate = !0), vD(Tb.bind(null, e))) : gC(Tb.bind(null, e)), wo.current !== null ? wo.current.push(ts) : gx(function() {
          (Nt & (Ir | Hi)) === Er && ts();
        }), p = null;
      else {
        var m;
        switch (vr(i)) {
          case Hn:
            m = na;
            break;
          case co:
            m = bu;
            break;
          case ki:
            m = Di;
            break;
          case zu:
            m = qs;
            break;
          default:
            m = Di;
            break;
        }
        p = wS(m, Sb.bind(null, e));
      }
      e.callbackPriority = l, e.callbackNode = p;
    }
    function Sb(e, t) {
      if (lO(), Uv = sn, $y = J, (Nt & (Ir | Hi)) !== Er)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = ru();
      if (i && e.callbackNode !== a)
        return null;
      var l = oc(e, e === Ra ? _r : J);
      if (l === J)
        return null;
      var c = !uc(e, l) && !qh(e, l) && !t, p = c ? QA(e, l) : Fy(e, l);
      if (p !== eu) {
        if (p === zc) {
          var m = qo(e);
          m !== J && (l = m, p = gS(e, m));
        }
        if (p === Dv) {
          var y = Av;
          throw jc(e, J), ds(e, l), Ja(e, Gn()), y;
        }
        if (p === cS)
          ds(e, l);
        else {
          var C = !uc(e, l), b = e.current.alternate;
          if (C && !FA(b)) {
            if (p = Fy(e, l), p === zc) {
              var M = qo(e);
              M !== J && (l = M, p = gS(e, M));
            }
            if (p === Dv) {
              var N = Av;
              throw jc(e, J), ds(e, l), Ja(e, Gn()), N;
            }
          }
          e.finishedWork = b, e.finishedLanes = l, HA(e, p, l);
        }
      }
      return Ja(e, Gn()), e.callbackNode === a ? Sb.bind(null, e) : null;
    }
    function gS(e, t) {
      var a = Nv;
      if (Lf(e)) {
        var i = jc(e, t);
        i.flags |= Mr, lD(e.containerInfo);
      }
      var l = Fy(e, t);
      if (l !== zc) {
        var c = Za;
        Za = a, c !== null && Cb(c);
      }
      return l;
    }
    function Cb(e) {
      Za === null ? Za = e : Za.push.apply(Za, e);
    }
    function HA(e, t, a) {
      switch (t) {
        case eu:
        case Dv:
          throw new Error("Root did not complete. This is a bug in React.");
        case zc: {
          $c(e, Za, tu);
          break;
        }
        case Ny: {
          if (ds(e, a), Gh(a) && // do not delay if we're inside an act() scope
          !jb()) {
            var i = dS + yb - Gn();
            if (i > 10) {
              var l = oc(e, J);
              if (l !== J)
                break;
              var c = e.suspendedLanes;
              if (!Pl(c, a)) {
                xa(), Af(e, c);
                break;
              }
              e.timeoutHandle = hE($c.bind(null, e, Za, tu), i);
              break;
            }
          }
          $c(e, Za, tu);
          break;
        }
        case Ov: {
          if (ds(e, a), Qh(a))
            break;
          if (!jb()) {
            var p = xf(e, a), m = p, y = Gn() - m, C = ok(y) - y;
            if (C > 10) {
              e.timeoutHandle = hE($c.bind(null, e, Za, tu), C);
              break;
            }
          }
          $c(e, Za, tu);
          break;
        }
        case mb: {
          $c(e, Za, tu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function FA(e) {
      for (var t = e; ; ) {
        if (t.flags & Dl) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var l = 0; l < i.length; l++) {
                var c = i[l], p = c.getSnapshot, m = c.value;
                try {
                  if (!Me(p(), m))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var y = t.child;
        if (t.subtreeFlags & Dl && y !== null) {
          y.return = t, t = y;
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
    function ds(e, t) {
      t = sc(t, My), t = sc(t, kv), Jh(e, t);
    }
    function Tb(e) {
      if (uO(), (Nt & (Ir | Hi)) !== Er)
        throw new Error("Should not already be working.");
      ru();
      var t = oc(e, J);
      if (!oa(t, et))
        return Ja(e, Gn()), null;
      var a = Fy(e, t);
      if (e.tag !== es && a === zc) {
        var i = qo(e);
        i !== J && (t = i, a = gS(e, i));
      }
      if (a === Dv) {
        var l = Av;
        throw jc(e, J), ds(e, t), Ja(e, Gn()), l;
      }
      if (a === cS)
        throw new Error("Root did not complete. This is a bug in React.");
      var c = e.current.alternate;
      return e.finishedWork = c, e.finishedLanes = t, $c(e, Za, tu), Ja(e, Gn()), null;
    }
    function VA(e, t) {
      t !== J && (Dp(e, yt(t, et)), Ja(e, Gn()), (Nt & (Ir | Hi)) === Er && (Lv(), ts()));
    }
    function ES(e, t) {
      var a = Nt;
      Nt |= hb;
      try {
        return e(t);
      } finally {
        Nt = a, Nt === Er && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !wo.isBatchingLegacy && (Lv(), EC());
      }
    }
    function IA(e, t, a, i, l) {
      var c = Ba(), p = Vr.transition;
      try {
        return Vr.transition = null, kn(Hn), e(t, a, i, l);
      } finally {
        kn(c), Vr.transition = p, Nt === Er && Lv();
      }
    }
    function nu(e) {
      cs !== null && cs.tag === es && (Nt & (Ir | Hi)) === Er && ru();
      var t = Nt;
      Nt |= hb;
      var a = Vr.transition, i = Ba();
      try {
        return Vr.transition = null, kn(Hn), e ? e() : void 0;
      } finally {
        kn(i), Vr.transition = a, Nt = t, (Nt & (Ir | Hi)) === Er && ts();
      }
    }
    function bb() {
      return (Nt & (Ir | Hi)) !== Er;
    }
    function Hy(e, t) {
      sa(fS, cl, e), cl = yt(cl, t);
    }
    function _S(e) {
      cl = fS.current, ua(fS, e);
    }
    function jc(e, t) {
      e.finishedWork = null, e.finishedLanes = J;
      var a = e.timeoutHandle;
      if (a !== mE && (e.timeoutHandle = mE, yx(a)), Vn !== null)
        for (var i = Vn.return; i !== null; ) {
          var l = i.alternate;
          JT(l, i), i = i.return;
        }
      Ra = e;
      var c = Pc(e.current, null);
      return Vn = c, _r = cl = t, Sr = eu, Av = null, Ly = J, kv = J, My = J, Nv = null, Za = null, UD(), yo.discardPendingWarnings(), c;
    }
    function wb(e, t) {
      do {
        var a = Vn;
        try {
          if (Km(), tT(), cn(), sS.current = null, a === null || a.return === null) {
            Sr = Dv, Av = t, Vn = null;
            return;
          }
          if (_t && a.mode & jt && Ry(a, !0), dt)
            if (kl(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Bh(a, i, _r);
            } else
              Ih(a, t, _r);
          pO(e, a.return, a, t, _r), Ob(a);
        } catch (l) {
          t = l, Vn === a && a !== null ? (a = a.return, Vn = a) : a = Vn;
          continue;
        }
        return;
      } while (!0);
    }
    function Rb() {
      var e = uS.current;
      return uS.current = Sy, e === null ? Sy : e;
    }
    function xb(e) {
      uS.current = e;
    }
    function BA() {
      dS = Gn();
    }
    function jv(e) {
      Ly = yt(e, Ly);
    }
    function YA() {
      Sr === eu && (Sr = Ny);
    }
    function SS() {
      (Sr === eu || Sr === Ny || Sr === zc) && (Sr = Ov), Ra !== null && (lc(Ly) || lc(kv)) && ds(Ra, _r);
    }
    function WA(e) {
      Sr !== Ov && (Sr = zc), Nv === null ? Nv = [e] : Nv.push(e);
    }
    function GA() {
      return Sr === eu;
    }
    function Fy(e, t) {
      var a = Nt;
      Nt |= Ir;
      var i = Rb();
      if (Ra !== e || _r !== t) {
        if (Ta) {
          var l = e.memoizedUpdaters;
          l.size > 0 && ($v(e, _r), l.clear()), Op(e, t);
        }
        tu = fc(), jc(e, t);
      }
      Ou(t);
      do
        try {
          KA();
          break;
        } catch (c) {
          wb(e, c);
        }
      while (!0);
      if (Km(), Nt = a, xb(i), Vn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Go(), Ra = null, _r = J, Sr;
    }
    function KA() {
      for (; Vn !== null; )
        Db(Vn);
    }
    function QA(e, t) {
      var a = Nt;
      Nt |= Ir;
      var i = Rb();
      if (Ra !== e || _r !== t) {
        if (Ta) {
          var l = e.memoizedUpdaters;
          l.size > 0 && ($v(e, _r), l.clear()), Op(e, t);
        }
        tu = fc(), Lv(), jc(e, t);
      }
      Ou(t);
      do
        try {
          qA();
          break;
        } catch (c) {
          wb(e, c);
        }
      while (!0);
      return Km(), xb(i), Nt = a, Vn !== null ? (ec(), eu) : (Go(), Ra = null, _r = J, Sr);
    }
    function qA() {
      for (; Vn !== null && !Uh(); )
        Db(Vn);
    }
    function Db(e) {
      var t = e.alternate;
      Cn(e);
      var a;
      (e.mode & jt) !== qe ? (U_(e), a = CS(t, e, cl), Ry(e, !0)) : a = CS(t, e, cl), cn(), e.memoizedProps = e.pendingProps, a === null ? Ob(e) : Vn = a, sS.current = null;
    }
    function Ob(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & Fo) === Qe) {
          Cn(t);
          var l = void 0;
          if ((t.mode & jt) === qe ? l = ZT(a, t, cl) : (U_(t), l = ZT(a, t, cl), Ry(t, !1)), cn(), l !== null) {
            Vn = l;
            return;
          }
        } else {
          var c = YO(a, t);
          if (c !== null) {
            c.flags &= lo, Vn = c;
            return;
          }
          if ((t.mode & jt) !== qe) {
            Ry(t, !1);
            for (var p = t.actualDuration, m = t.child; m !== null; )
              p += m.actualDuration, m = m.sibling;
            t.actualDuration = p;
          }
          if (i !== null)
            i.flags |= Fo, i.subtreeFlags = Qe, i.deletions = null;
          else {
            Sr = cS, Vn = null;
            return;
          }
        }
        var y = t.sibling;
        if (y !== null) {
          Vn = y;
          return;
        }
        t = i, Vn = t;
      } while (t !== null);
      Sr === eu && (Sr = mb);
    }
    function $c(e, t, a) {
      var i = Ba(), l = Vr.transition;
      try {
        Vr.transition = null, kn(Hn), XA(e, t, a, i);
      } finally {
        Vr.transition = l, kn(i);
      }
      return null;
    }
    function XA(e, t, a, i) {
      do
        ru();
      while (cs !== null);
      if (uk(), (Nt & (Ir | Hi)) !== Er)
        throw new Error("Should not already be working.");
      var l = e.finishedWork, c = e.finishedLanes;
      if (Ph(c), l === null)
        return Xs(), null;
      if (c === J && _("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = J, l === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = $n;
      var p = yt(l.lanes, l.childLanes);
      kf(e, p), e === Ra && (Ra = null, Vn = null, _r = J), ((l.subtreeFlags & ta) !== Qe || (l.flags & ta) !== Qe) && (Uc || (Uc = !0, hS = a, wS(Di, function() {
        return ru(), null;
      })));
      var m = (l.subtreeFlags & (Jr | ea | di | ta)) !== Qe, y = (l.flags & (Jr | ea | di | ta)) !== Qe;
      if (m || y) {
        var C = Vr.transition;
        Vr.transition = null;
        var b = Ba();
        kn(Hn);
        var M = Nt;
        Nt |= Hi, sS.current = null, qO(e, l), RT(), cA(e, l, c), cx(e.containerInfo), e.current = l, Du(c), fA(l, e, c), Yh(), Tu(), Nt = M, kn(b), Vr.transition = C;
      } else
        e.current = l, RT();
      var N = Uc;
      if (Uc ? (Uc = !1, cs = e, Mv = c) : (wd = 0, jy = null), p = e.pendingLanes, p === J && (bd = null), N || Lb(e.current, !1), Yo(l.stateNode, i), Ta && e.memoizedUpdaters.clear(), AA(), Ja(e, Gn()), t !== null)
        for (var B = e.onRecoverableError, Y = 0; Y < t.length; Y++) {
          var X = t[Y], De = X.stack, Xe = X.digest;
          B(X.value, {
            componentStack: De,
            digest: Xe
          });
        }
      if (zy) {
        zy = !1;
        var Ve = pS;
        throw pS = null, Ve;
      }
      return oa(Mv, et) && e.tag !== es && ru(), p = e.pendingLanes, oa(p, et) ? (oO(), e === mS ? zv++ : (zv = 0, mS = e)) : zv = 0, ts(), Xs(), null;
    }
    function ru() {
      if (cs !== null) {
        var e = vr(Mv), t = Hg(ki, e), a = Vr.transition, i = Ba();
        try {
          return Vr.transition = null, kn(t), JA();
        } finally {
          kn(i), Vr.transition = a;
        }
      }
      return !1;
    }
    function ZA(e) {
      vS.push(e), Uc || (Uc = !0, wS(Di, function() {
        return ru(), null;
      }));
    }
    function JA() {
      if (cs === null)
        return !1;
      var e = hS;
      hS = null;
      var t = cs, a = Mv;
      if (cs = null, Mv = J, (Nt & (Ir | Hi)) !== Er)
        throw new Error("Cannot flush passive effects while already rendering.");
      yS = !0, Uy = !1, Js(a);
      var i = Nt;
      Nt |= Hi, gA(t.current), vA(t, t.current, a, e);
      {
        var l = vS;
        vS = [];
        for (var c = 0; c < l.length; c++) {
          var p = l[c];
          eA(t, p);
        }
      }
      Oi(), Lb(t.current, !0), Nt = i, ts(), Uy ? t === jy ? wd++ : (wd = 0, jy = t) : wd = 0, yS = !1, Uy = !1, Ep(t);
      {
        var m = t.current.stateNode;
        m.effectDuration = 0, m.passiveEffectDuration = 0;
      }
      return !0;
    }
    function Ab(e) {
      return bd !== null && bd.has(e);
    }
    function ek(e) {
      bd === null ? bd = /* @__PURE__ */ new Set([e]) : bd.add(e);
    }
    function tk(e) {
      zy || (zy = !0, pS = e);
    }
    var nk = tk;
    function kb(e, t, a) {
      var i = Lc(a, t), l = DT(e, i, et), c = rs(e, l, et), p = xa();
      c !== null && (Hl(c, et, p), Ja(c, p));
    }
    function vn(e, t, a) {
      if (GO(a), Pv(!1), e.tag === V) {
        kb(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === V) {
          kb(i, e, a);
          return;
        } else if (i.tag === z) {
          var l = i.type, c = i.stateNode;
          if (typeof l.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && !Ab(c)) {
            var p = Lc(a, e), m = V_(i, p, et), y = rs(i, m, et), C = xa();
            y !== null && (Hl(y, et, C), Ja(y, C));
            return;
          }
        }
        i = i.return;
      }
      _(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function rk(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var l = xa();
      Af(e, a), dk(e), Ra === e && Pl(_r, a) && (Sr === Ov || Sr === Ny && Gh(_r) && Gn() - dS < yb ? jc(e, J) : My = yt(My, a)), Ja(e, l);
    }
    function Nb(e, t) {
      t === $n && (t = jA(e));
      var a = xa(), i = qa(e, t);
      i !== null && (Hl(i, t, a), Ja(i, a));
    }
    function ak(e) {
      var t = e.memoizedState, a = $n;
      t !== null && (a = t.retryLane), Nb(e, a);
    }
    function ik(e, t) {
      var a = $n, i;
      switch (e.tag) {
        case ce:
          i = e.stateNode;
          var l = e.memoizedState;
          l !== null && (a = l.retryLane);
          break;
        case st:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), Nb(e, a);
    }
    function ok(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : LA(e / 1960) * 1960;
    }
    function lk() {
      if (zv > zA)
        throw zv = 0, mS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      wd > UA && (wd = 0, jy = null, _("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function uk() {
      yo.flushLegacyContextWarning(), yo.flushPendingUnsafeLifecycleWarnings();
    }
    function Lb(e, t) {
      Cn(e), Vy(e, Ha, xA), t && Vy(e, Ol, DA), Vy(e, Ha, wA), t && Vy(e, Ol, RA), cn();
    }
    function Vy(e, t, a) {
      for (var i = e, l = null; i !== null; ) {
        var c = i.subtreeFlags & t;
        i !== l && i.child !== null && c !== Qe ? i = i.child : ((i.flags & t) !== Qe && a(i), i.sibling !== null ? i = i.sibling : i = l = i.return);
      }
    }
    var Iy = null;
    function Mb(e) {
      {
        if ((Nt & Ir) !== Er || !(e.mode & Fe))
          return;
        var t = e.tag;
        if (t !== Q && t !== V && t !== z && t !== F && t !== de && t !== $e && t !== Ne)
          return;
        var a = ft(e) || "ReactComponent";
        if (Iy !== null) {
          if (Iy.has(a))
            return;
          Iy.add(a);
        } else
          Iy = /* @__PURE__ */ new Set([a]);
        var i = Sn;
        try {
          Cn(e), _("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Cn(e) : cn();
        }
      }
    }
    var CS;
    {
      var sk = null;
      CS = function(e, t, a) {
        var i = Vb(sk, t);
        try {
          return GT(e, t, a);
        } catch (c) {
          if (CD() || c !== null && typeof c == "object" && typeof c.then == "function")
            throw c;
          if (Km(), tT(), JT(e, t), Vb(t, i), t.mode & jt && U_(t), ci(null, GT, null, e, t, a), Lg()) {
            var l = oo();
            typeof l == "object" && l !== null && l._suppressLogging && typeof c == "object" && c !== null && !c._suppressLogging && (c._suppressLogging = !0);
          }
          throw c;
        }
      };
    }
    var zb = !1, TS;
    TS = /* @__PURE__ */ new Set();
    function ck(e) {
      if (Qr && !rO())
        switch (e.tag) {
          case F:
          case de:
          case Ne: {
            var t = Vn && ft(Vn) || "Unknown", a = t;
            if (!TS.has(a)) {
              TS.add(a);
              var i = ft(e) || "Unknown";
              _("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case z: {
            zb || (_("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), zb = !0);
            break;
          }
        }
    }
    function $v(e, t) {
      if (Ta) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Nf(e, i, t);
        });
      }
    }
    var bS = {};
    function wS(e, t) {
      {
        var a = wo.current;
        return a !== null ? (a.push(t), bS) : mp(e, t);
      }
    }
    function Ub(e) {
      if (e !== bS)
        return cf(e);
    }
    function jb() {
      return wo.current !== null;
    }
    function fk(e) {
      {
        if (e.mode & Fe) {
          if (!vb())
            return;
        } else if (!NA() || Nt !== Er || e.tag !== F && e.tag !== de && e.tag !== Ne)
          return;
        if (wo.current === null) {
          var t = Sn;
          try {
            Cn(e), _(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, ft(e));
          } finally {
            t ? Cn(e) : cn();
          }
        }
      }
    }
    function dk(e) {
      e.tag !== es && vb() && wo.current === null && _(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Pv(e) {
      _b = e;
    }
    var Fi = null, Rd = null, pk = function(e) {
      Fi = e;
    };
    function xd(e) {
      {
        if (Fi === null)
          return e;
        var t = Fi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function RS(e) {
      return xd(e);
    }
    function xS(e) {
      {
        if (Fi === null)
          return e;
        var t = Fi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = xd(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: _e,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function $b(e, t) {
      {
        if (Fi === null)
          return !1;
        var a = e.elementType, i = t.type, l = !1, c = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case z: {
            typeof i == "function" && (l = !0);
            break;
          }
          case F: {
            (typeof i == "function" || c === Ge) && (l = !0);
            break;
          }
          case de: {
            (c === _e || c === Ge) && (l = !0);
            break;
          }
          case $e:
          case Ne: {
            (c === St || c === Ge) && (l = !0);
            break;
          }
          default:
            return !1;
        }
        if (l) {
          var p = Fi(a);
          if (p !== void 0 && p === Fi(i))
            return !0;
        }
        return !1;
      }
    }
    function Pb(e) {
      {
        if (Fi === null || typeof WeakSet != "function")
          return;
        Rd === null && (Rd = /* @__PURE__ */ new WeakSet()), Rd.add(e);
      }
    }
    var vk = function(e, t) {
      {
        if (Fi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        ru(), nu(function() {
          DS(e.current, i, a);
        });
      }
    }, hk = function(e, t) {
      {
        if (e.context !== pi)
          return;
        ru(), nu(function() {
          Hv(t, e, null, null);
        });
      }
    };
    function DS(e, t, a) {
      {
        var i = e.alternate, l = e.child, c = e.sibling, p = e.tag, m = e.type, y = null;
        switch (p) {
          case F:
          case Ne:
          case z:
            y = m;
            break;
          case de:
            y = m.render;
            break;
        }
        if (Fi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var C = !1, b = !1;
        if (y !== null) {
          var M = Fi(y);
          M !== void 0 && (a.has(M) ? b = !0 : t.has(M) && (p === z ? b = !0 : C = !0));
        }
        if (Rd !== null && (Rd.has(e) || i !== null && Rd.has(i)) && (b = !0), b && (e._debugNeedsRemount = !0), b || C) {
          var N = qa(e, et);
          N !== null && Cr(N, e, et, sn);
        }
        l !== null && !b && DS(l, t, a), c !== null && DS(c, t, a);
      }
    }
    var mk = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(l) {
          return l.current;
        }));
        return OS(e.current, i, a), a;
      }
    };
    function OS(e, t, a) {
      {
        var i = e.child, l = e.sibling, c = e.tag, p = e.type, m = null;
        switch (c) {
          case F:
          case Ne:
          case z:
            m = p;
            break;
          case de:
            m = p.render;
            break;
        }
        var y = !1;
        m !== null && t.has(m) && (y = !0), y ? yk(e, a) : i !== null && OS(i, t, a), l !== null && OS(l, t, a);
      }
    }
    function yk(e, t) {
      {
        var a = gk(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case q:
              t.add(i.stateNode);
              return;
            case G:
              t.add(i.stateNode.containerInfo);
              return;
            case V:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function gk(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === q)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var AS;
    {
      AS = !1;
      try {
        var Hb = Object.preventExtensions({});
      } catch {
        AS = !0;
      }
    }
    function Ek(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Qe, this.subtreeFlags = Qe, this.deletions = null, this.lanes = J, this.childLanes = J, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !AS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var vi = function(e, t, a, i) {
      return new Ek(e, t, a, i);
    };
    function kS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function _k(e) {
      return typeof e == "function" && !kS(e) && e.defaultProps === void 0;
    }
    function Sk(e) {
      if (typeof e == "function")
        return kS(e) ? z : F;
      if (e != null) {
        var t = e.$$typeof;
        if (t === _e)
          return de;
        if (t === St)
          return $e;
      }
      return Q;
    }
    function Pc(e, t) {
      var a = e.alternate;
      a === null ? (a = vi(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Qe, a.subtreeFlags = Qe, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & pr, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case Q:
        case F:
        case Ne:
          a.type = xd(e.type);
          break;
        case z:
          a.type = RS(e.type);
          break;
        case de:
          a.type = xS(e.type);
          break;
      }
      return a;
    }
    function Ck(e, t) {
      e.flags &= pr | nn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = J, e.lanes = t, e.child = null, e.subtreeFlags = Qe, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Qe, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function Tk(e, t, a) {
      var i;
      return e === Hm ? (i = Fe, t === !0 && (i |= On, i |= Va)) : i = qe, Ta && (i |= jt), vi(V, null, null, i);
    }
    function NS(e, t, a, i, l, c) {
      var p = Q, m = e;
      if (typeof e == "function")
        kS(e) ? (p = z, m = RS(m)) : m = xd(m);
      else if (typeof e == "string")
        p = q;
      else
        e:
          switch (e) {
            case ya:
              return ps(a.children, l, c, t);
            case Gi:
              p = Ze, l |= On, (l & Fe) !== qe && (l |= Va);
              break;
            case x:
              return bk(a, l, c, t);
            case xt:
              return wk(a, l, c, t);
            case kt:
              return Rk(a, l, c, t);
            case on:
              return Fb(a, l, c, t);
            case Dr:
            case Yn:
            case Ei:
            case ln:
            case an:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case ie:
                    p = Re;
                    break e;
                  case me:
                    p = Je;
                    break e;
                  case _e:
                    p = de, m = xS(m);
                    break e;
                  case St:
                    p = $e;
                    break e;
                  case Ge:
                    p = Rt, m = null;
                    break e;
                }
              var y = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (y += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var C = i ? ft(i) : null;
                C && (y += `

Check the render method of \`` + C + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + y));
            }
          }
      var b = vi(p, a, t, l);
      return b.elementType = e, b.type = m, b.lanes = c, b._debugOwner = i, b;
    }
    function LS(e, t, a) {
      var i = null;
      i = e._owner;
      var l = e.type, c = e.key, p = e.props, m = NS(l, c, p, i, t, a);
      return m._debugSource = e._source, m._debugOwner = e._owner, m;
    }
    function ps(e, t, a, i) {
      var l = vi(Ee, e, i, t);
      return l.lanes = a, l;
    }
    function bk(e, t, a, i) {
      typeof e.id != "string" && _('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var l = vi(Ae, e, i, t | jt);
      return l.elementType = x, l.lanes = a, l.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, l;
    }
    function wk(e, t, a, i) {
      var l = vi(ce, e, i, t);
      return l.elementType = xt, l.lanes = a, l;
    }
    function Rk(e, t, a, i) {
      var l = vi(st, e, i, t);
      return l.elementType = kt, l.lanes = a, l;
    }
    function Fb(e, t, a, i) {
      var l = vi(Ye, e, i, t);
      l.elementType = on, l.lanes = a;
      var c = {
        isHidden: !1
      };
      return l.stateNode = c, l;
    }
    function MS(e, t, a) {
      var i = vi(re, e, null, t);
      return i.lanes = a, i;
    }
    function xk() {
      var e = vi(q, null, null, qe);
      return e.elementType = "DELETED", e;
    }
    function Dk(e) {
      var t = vi(gt, null, null, qe);
      return t.stateNode = e, t;
    }
    function zS(e, t, a) {
      var i = e.children !== null ? e.children : [], l = vi(G, i, e.key, t);
      return l.lanes = a, l.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, l;
    }
    function Vb(e, t) {
      return e === null && (e = vi(Q, null, null, qe)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function Ok(e, t, a, i, l) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = mE, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = $n, this.eventTimes = cc(J), this.expirationTimes = cc(sn), this.pendingLanes = J, this.suspendedLanes = J, this.pingedLanes = J, this.expiredLanes = J, this.mutableReadLanes = J, this.finishedLanes = J, this.entangledLanes = J, this.entanglements = cc(J), this.identifierPrefix = i, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var c = this.pendingUpdatersLaneMap = [], p = 0; p < jn; p++)
          c.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Hm:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case es:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function Ib(e, t, a, i, l, c, p, m, y, C) {
      var b = new Ok(e, t, a, m, y), M = Tk(t, c);
      b.current = M, M.stateNode = b;
      {
        var N = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        M.memoizedState = N;
      }
      return IE(M), b;
    }
    var US = "18.2.0";
    function Ak(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return mn(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Wr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var jS, $S;
    jS = !1, $S = {};
    function Bb(e) {
      if (!e)
        return pi;
      var t = wi(e), a = pD(t);
      if (t.tag === z) {
        var i = t.type;
        if (rl(i))
          return mC(t, i, a);
      }
      return a;
    }
    function kk(e, t) {
      {
        var a = wi(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var l = pp(a);
        if (l === null)
          return null;
        if (l.mode & On) {
          var c = ft(a) || "Component";
          if (!$S[c]) {
            $S[c] = !0;
            var p = Sn;
            try {
              Cn(l), a.mode & On ? _("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, c) : _("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, c);
            } finally {
              p ? Cn(p) : cn();
            }
          }
        }
        return l.stateNode;
      }
    }
    function Yb(e, t, a, i, l, c, p, m) {
      var y = !1, C = null;
      return Ib(e, t, y, C, a, i, l, c, p);
    }
    function Wb(e, t, a, i, l, c, p, m, y, C) {
      var b = !0, M = Ib(a, i, b, e, l, c, p, m, y);
      M.context = Bb(null);
      var N = M.current, B = xa(), Y = fs(N), X = Zl(B, Y);
      return X.callback = t ?? null, rs(N, X, Y), $A(M, Y, B), M;
    }
    function Hv(e, t, a, i) {
      uo(t, e);
      var l = t.current, c = xa(), p = fs(l);
      Cp(p);
      var m = Bb(a);
      t.context === null ? t.context = m : t.pendingContext = m, Qr && Sn !== null && !jS && (jS = !0, _(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, ft(Sn) || "Unknown"));
      var y = Zl(c, p);
      y.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && _("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), y.callback = i);
      var C = rs(l, y, p);
      return C !== null && (Cr(C, l, p, c), Jm(C, l, p)), p;
    }
    function By(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case q:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function Nk(e) {
      switch (e.tag) {
        case V: {
          var t = e.stateNode;
          if (Lf(t)) {
            var a = jg(t);
            VA(t, a);
          }
          break;
        }
        case ce: {
          nu(function() {
            var l = qa(e, et);
            if (l !== null) {
              var c = xa();
              Cr(l, e, et, c);
            }
          });
          var i = et;
          PS(e, i);
          break;
        }
      }
    }
    function Gb(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Zh(a.retryLane, t));
    }
    function PS(e, t) {
      Gb(e, t);
      var a = e.alternate;
      a && Gb(a, t);
    }
    function Lk(e) {
      if (e.tag === ce) {
        var t = $l, a = qa(e, t);
        if (a !== null) {
          var i = xa();
          Cr(a, e, t, i);
        }
        PS(e, t);
      }
    }
    function Mk(e) {
      if (e.tag === ce) {
        var t = fs(e), a = qa(e, t);
        if (a !== null) {
          var i = xa();
          Cr(a, e, t, i);
        }
        PS(e, t);
      }
    }
    function Kb(e) {
      var t = hp(e);
      return t === null ? null : t.stateNode;
    }
    var Qb = function(e) {
      return null;
    };
    function zk(e) {
      return Qb(e);
    }
    var qb = function(e) {
      return !1;
    };
    function Uk(e) {
      return qb(e);
    }
    var Xb = null, Zb = null, Jb = null, ew = null, tw = null, nw = null, rw = null, aw = null, iw = null;
    {
      var ow = function(e, t, a) {
        var i = t[a], l = Ut(e) ? e.slice() : bt({}, e);
        return a + 1 === t.length ? (Ut(l) ? l.splice(i, 1) : delete l[i], l) : (l[i] = ow(e[i], t, a + 1), l);
      }, lw = function(e, t) {
        return ow(e, t, 0);
      }, uw = function(e, t, a, i) {
        var l = t[i], c = Ut(e) ? e.slice() : bt({}, e);
        if (i + 1 === t.length) {
          var p = a[i];
          c[p] = c[l], Ut(c) ? c.splice(l, 1) : delete c[l];
        } else
          c[l] = uw(
            // $FlowFixMe number or string is fine here
            e[l],
            t,
            a,
            i + 1
          );
        return c;
      }, sw = function(e, t, a) {
        if (t.length !== a.length) {
          O("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              O("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return uw(e, t, a, 0);
      }, cw = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var l = t[a], c = Ut(e) ? e.slice() : bt({}, e);
        return c[l] = cw(e[l], t, a + 1, i), c;
      }, fw = function(e, t, a) {
        return cw(e, t, 0, a);
      }, HS = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      Xb = function(e, t, a, i) {
        var l = HS(e, t);
        if (l !== null) {
          var c = fw(l.memoizedState, a, i);
          l.memoizedState = c, l.baseState = c, e.memoizedProps = bt({}, e.memoizedProps);
          var p = qa(e, et);
          p !== null && Cr(p, e, et, sn);
        }
      }, Zb = function(e, t, a) {
        var i = HS(e, t);
        if (i !== null) {
          var l = lw(i.memoizedState, a);
          i.memoizedState = l, i.baseState = l, e.memoizedProps = bt({}, e.memoizedProps);
          var c = qa(e, et);
          c !== null && Cr(c, e, et, sn);
        }
      }, Jb = function(e, t, a, i) {
        var l = HS(e, t);
        if (l !== null) {
          var c = sw(l.memoizedState, a, i);
          l.memoizedState = c, l.baseState = c, e.memoizedProps = bt({}, e.memoizedProps);
          var p = qa(e, et);
          p !== null && Cr(p, e, et, sn);
        }
      }, ew = function(e, t, a) {
        e.pendingProps = fw(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = qa(e, et);
        i !== null && Cr(i, e, et, sn);
      }, tw = function(e, t) {
        e.pendingProps = lw(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = qa(e, et);
        a !== null && Cr(a, e, et, sn);
      }, nw = function(e, t, a) {
        e.pendingProps = sw(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = qa(e, et);
        i !== null && Cr(i, e, et, sn);
      }, rw = function(e) {
        var t = qa(e, et);
        t !== null && Cr(t, e, et, sn);
      }, aw = function(e) {
        Qb = e;
      }, iw = function(e) {
        qb = e;
      };
    }
    function jk(e) {
      var t = pp(e);
      return t === null ? null : t.stateNode;
    }
    function $k(e) {
      return null;
    }
    function Pk() {
      return Sn;
    }
    function Hk(e) {
      var t = e.findFiberByHostInstance, a = g.ReactCurrentDispatcher;
      return jh({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: Xb,
        overrideHookStateDeletePath: Zb,
        overrideHookStateRenamePath: Jb,
        overrideProps: ew,
        overridePropsDeletePath: tw,
        overridePropsRenamePath: nw,
        setErrorHandler: aw,
        setSuspenseHandler: iw,
        scheduleUpdate: rw,
        currentDispatcherRef: a,
        findHostInstanceByFiber: jk,
        findFiberByHostInstance: t || $k,
        // React Refresh
        findHostInstancesForRefresh: mk,
        scheduleRefresh: vk,
        scheduleRoot: hk,
        setRefreshHandler: pk,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: Pk,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: US
      });
    }
    var dw = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function FS(e) {
      this._internalRoot = e;
    }
    Yy.prototype.render = FS.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? _("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Wy(arguments[1]) ? _("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && _("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Dn) {
          var i = Kb(t.current);
          i && i.parentNode !== a && _("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Hv(e, t, null, null);
    }, Yy.prototype.unmount = FS.prototype.unmount = function() {
      typeof arguments[0] == "function" && _("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        bb() && _("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), nu(function() {
          Hv(null, e, null, null);
        }), fC(t);
      }
    };
    function Fk(e, t) {
      if (!Wy(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      pw(e);
      var a = !1, i = !1, l = "", c = dw;
      t != null && (t.hydrate ? O("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Yr && _(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onRecoverableError !== void 0 && (c = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var p = Yb(e, Hm, null, a, i, l, c);
      Lm(p.current, e);
      var m = e.nodeType === Dn ? e.parentNode : e;
      return Kp(m), new FS(p);
    }
    function Yy(e) {
      this._internalRoot = e;
    }
    function Vk(e) {
      e && Ig(e);
    }
    Yy.prototype.unstable_scheduleHydration = Vk;
    function Ik(e, t, a) {
      if (!Wy(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      pw(e), t === void 0 && _("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, l = a != null && a.hydratedSources || null, c = !1, p = !1, m = "", y = dw;
      a != null && (a.unstable_strictMode === !0 && (c = !0), a.identifierPrefix !== void 0 && (m = a.identifierPrefix), a.onRecoverableError !== void 0 && (y = a.onRecoverableError));
      var C = Wb(t, null, e, Hm, i, c, p, m, y);
      if (Lm(C.current, e), Kp(e), l)
        for (var b = 0; b < l.length; b++) {
          var M = l[b];
          XD(C, M);
        }
      return new Yy(C);
    }
    function Wy(e) {
      return !!(e && (e.nodeType === Xr || e.nodeType === ga || e.nodeType === qd || !We));
    }
    function Fv(e) {
      return !!(e && (e.nodeType === Xr || e.nodeType === ga || e.nodeType === qd || e.nodeType === Dn && e.nodeValue === " react-mount-point-unstable "));
    }
    function pw(e) {
      e.nodeType === Xr && e.tagName && e.tagName.toUpperCase() === "BODY" && _("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), iv(e) && (e._reactRootContainer ? _("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : _("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var Bk = g.ReactCurrentOwner, vw;
    vw = function(e) {
      if (e._reactRootContainer && e.nodeType !== Dn) {
        var t = Kb(e._reactRootContainer.current);
        t && t.parentNode !== e && _("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = VS(e), l = !!(i && Zu(i));
      l && !a && _("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Xr && e.tagName && e.tagName.toUpperCase() === "BODY" && _("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function VS(e) {
      return e ? e.nodeType === ga ? e.documentElement : e.firstChild : null;
    }
    function hw() {
    }
    function Yk(e, t, a, i, l) {
      if (l) {
        if (typeof i == "function") {
          var c = i;
          i = function() {
            var N = By(p);
            c.call(N);
          };
        }
        var p = Wb(
          t,
          i,
          e,
          es,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          hw
        );
        e._reactRootContainer = p, Lm(p.current, e);
        var m = e.nodeType === Dn ? e.parentNode : e;
        return Kp(m), nu(), p;
      } else {
        for (var y; y = e.lastChild; )
          e.removeChild(y);
        if (typeof i == "function") {
          var C = i;
          i = function() {
            var N = By(b);
            C.call(N);
          };
        }
        var b = Yb(
          e,
          es,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          hw
        );
        e._reactRootContainer = b, Lm(b.current, e);
        var M = e.nodeType === Dn ? e.parentNode : e;
        return Kp(M), nu(function() {
          Hv(t, b, a, i);
        }), b;
      }
    }
    function Wk(e, t) {
      e !== null && typeof e != "function" && _("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Gy(e, t, a, i, l) {
      vw(a), Wk(l === void 0 ? null : l, "render");
      var c = a._reactRootContainer, p;
      if (!c)
        p = Yk(a, t, e, l, i);
      else {
        if (p = c, typeof l == "function") {
          var m = l;
          l = function() {
            var y = By(p);
            m.call(y);
          };
        }
        Hv(t, p, e, l);
      }
      return By(p);
    }
    function Gk(e) {
      {
        var t = Bk.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || _("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", zt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Xr ? e : kk(e, "findDOMNode");
    }
    function Kk(e, t, a) {
      if (_("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Fv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = iv(t) && t._reactRootContainer === void 0;
        i && _("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Gy(null, e, t, !0, a);
    }
    function Qk(e, t, a) {
      if (_("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Fv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = iv(t) && t._reactRootContainer === void 0;
        i && _("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Gy(null, e, t, !1, a);
    }
    function qk(e, t, a, i) {
      if (_("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Fv(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !Cu(e))
        throw new Error("parentComponent must be a valid React Component");
      return Gy(e, t, a, !1, i);
    }
    function Xk(e) {
      if (!Fv(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = iv(e) && e._reactRootContainer === void 0;
        t && _("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = VS(e), i = a && !Zu(a);
          i && _("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return nu(function() {
          Gy(null, null, e, !1, function() {
            e._reactRootContainer = null, fC(e);
          });
        }), !0;
      } else {
        {
          var l = VS(e), c = !!(l && Zu(l)), p = e.nodeType === Xr && Fv(e.parentNode) && !!e.parentNode._reactRootContainer;
          c && _("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", p ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    $u(Nk), Fg(Lk), zf(Mk), tm(Ba), nm(kr), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && _("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), ap(ex), rf(ES, IA, nu);
    function Zk(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Wy(t))
        throw new Error("Target container is not a DOM element.");
      return Ak(e, t, null, a);
    }
    function Jk(e, t, a, i) {
      return qk(e, t, a, i);
    }
    var IS = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Zu, ad, Mm, Su, Rl, ES]
    };
    function eN(e, t) {
      return IS.usingClientEntryPoint || _('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Fk(e, t);
    }
    function tN(e, t, a) {
      return IS.usingClientEntryPoint || _('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Ik(e, t, a);
    }
    function nN(e) {
      return bb() && _("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), nu(e);
    }
    var rN = Hk({
      findFiberByHostInstance: bc,
      bundleType: 1,
      version: US,
      rendererPackageName: "react-dom"
    });
    if (!rN && hn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var mw = window.location.protocol;
      /^(https?|file):$/.test(mw) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (mw === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    ei.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = IS, ei.createPortal = Zk, ei.createRoot = eN, ei.findDOMNode = Gk, ei.flushSync = nN, ei.hydrate = Kk, ei.hydrateRoot = tN, ei.render = Qk, ei.unmountComponentAtNode = Xk, ei.unstable_batchedUpdates = ES, ei.unstable_renderSubtreeIntoContainer = Jk, ei.version = US, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), ei;
}
var ti = {};
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ww;
function gN() {
  if (ww)
    return ti;
  ww = 1;
  var v = mt, u = cR();
  function f(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, o = 1; o < arguments.length; o++)
      r += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var g = /* @__PURE__ */ new Set(), T = {};
  function D(n, r) {
    O(n, r), O(n + "Capture", r);
  }
  function O(n, r) {
    for (T[n] = r, n = 0; n < r.length; n++)
      g.add(r[n]);
  }
  var _ = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), U = Object.prototype.hasOwnProperty, F = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, z = {}, Q = {};
  function V(n) {
    return U.call(Q, n) ? !0 : U.call(z, n) ? !1 : F.test(n) ? Q[n] = !0 : (z[n] = !0, !1);
  }
  function G(n, r, o, s) {
    if (o !== null && o.type === 0)
      return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return s ? !1 : o !== null ? !o.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function q(n, r, o, s) {
    if (r === null || typeof r > "u" || G(n, r, o, s))
      return !0;
    if (s)
      return !1;
    if (o !== null)
      switch (o.type) {
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
  function re(n, r, o, s, d, h, S) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = s, this.attributeNamespace = d, this.mustUseProperty = o, this.propertyName = n, this.type = r, this.sanitizeURL = h, this.removeEmptyString = S;
  }
  var Ee = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    Ee[n] = new re(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    Ee[r] = new re(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    Ee[n] = new re(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    Ee[n] = new re(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    Ee[n] = new re(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    Ee[n] = new re(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    Ee[n] = new re(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    Ee[n] = new re(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    Ee[n] = new re(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Ze = /[\-:]([a-z])/g;
  function Je(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Ze,
      Je
    );
    Ee[r] = new re(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Ze, Je);
    Ee[r] = new re(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Ze, Je);
    Ee[r] = new re(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    Ee[n] = new re(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), Ee.xlinkHref = new re("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    Ee[n] = new re(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Re(n, r, o, s) {
    var d = Ee.hasOwnProperty(r) ? Ee[r] : null;
    (d !== null ? d.type !== 0 : s || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (q(r, o, d, s) && (o = null), s || d === null ? V(r) && (o === null ? n.removeAttribute(r) : n.setAttribute(r, "" + o)) : d.mustUseProperty ? n[d.propertyName] = o === null ? d.type === 3 ? !1 : "" : o : (r = d.attributeName, s = d.attributeNamespace, o === null ? n.removeAttribute(r) : (d = d.type, o = d === 3 || d === 4 && o === !0 ? "" : "" + o, s ? n.setAttributeNS(s, r, o) : n.setAttribute(r, o))));
  }
  var de = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ae = Symbol.for("react.element"), ce = Symbol.for("react.portal"), $e = Symbol.for("react.fragment"), Ne = Symbol.for("react.strict_mode"), Rt = Symbol.for("react.profiler"), Et = Symbol.for("react.provider"), gt = Symbol.for("react.context"), st = Symbol.for("react.forward_ref"), Ct = Symbol.for("react.suspense"), Ye = Symbol.for("react.suspense_list"), at = Symbol.for("react.memo"), lt = Symbol.for("react.lazy"), Ke = Symbol.for("react.offscreen"), ee = Symbol.iterator;
  function Se(n) {
    return n === null || typeof n != "object" ? null : (n = ee && n[ee] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var A = Object.assign, te;
  function Te(n) {
    if (te === void 0)
      try {
        throw Error();
      } catch (o) {
        var r = o.stack.trim().match(/\n( *(at )?)/);
        te = r && r[1] || "";
      }
    return `
` + te + n;
  }
  var We = !1;
  function Ie(n, r) {
    if (!n || We)
      return "";
    We = !0;
    var o = Error.prepareStackTrace;
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
          } catch (W) {
            var s = W;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (W) {
            s = W;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (W) {
          s = W;
        }
        n();
      }
    } catch (W) {
      if (W && s && typeof W.stack == "string") {
        for (var d = W.stack.split(`
`), h = s.stack.split(`
`), S = d.length - 1, w = h.length - 1; 1 <= S && 0 <= w && d[S] !== h[w]; )
          w--;
        for (; 1 <= S && 0 <= w; S--, w--)
          if (d[S] !== h[w]) {
            if (S !== 1 || w !== 1)
              do
                if (S--, w--, 0 > w || d[S] !== h[w]) {
                  var k = `
` + d[S].replace(" at new ", " at ");
                  return n.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", n.displayName)), k;
                }
              while (1 <= S && 0 <= w);
            break;
          }
      }
    } finally {
      We = !1, Error.prepareStackTrace = o;
    }
    return (n = n ? n.displayName || n.name : "") ? Te(n) : "";
  }
  function ct(n) {
    switch (n.tag) {
      case 5:
        return Te(n.type);
      case 16:
        return Te("Lazy");
      case 13:
        return Te("Suspense");
      case 19:
        return Te("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Ie(n.type, !1), n;
      case 11:
        return n = Ie(n.type.render, !1), n;
      case 1:
        return n = Ie(n.type, !0), n;
      default:
        return "";
    }
  }
  function dt(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case $e:
        return "Fragment";
      case ce:
        return "Portal";
      case Rt:
        return "Profiler";
      case Ne:
        return "StrictMode";
      case Ct:
        return "Suspense";
      case Ye:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case gt:
          return (n.displayName || "Context") + ".Consumer";
        case Et:
          return (n._context.displayName || "Context") + ".Provider";
        case st:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case at:
          return r = n.displayName || null, r !== null ? r : dt(n.type) || "Memo";
        case lt:
          r = n._payload, n = n._init;
          try {
            return dt(n(r));
          } catch {
          }
      }
    return null;
  }
  function _t(n) {
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
        return dt(r);
      case 8:
        return r === Ne ? "StrictMode" : "Mode";
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
  function ut(n) {
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
  function Gt(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Qn(n) {
    var r = Gt(n) ? "checked" : "value", o = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), s = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
      var d = o.get, h = o.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return d.call(this);
      }, set: function(S) {
        s = "" + S, h.call(this, S);
      } }), Object.defineProperty(n, r, { enumerable: o.enumerable }), { getValue: function() {
        return s;
      }, setValue: function(S) {
        s = "" + S;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Mn(n) {
    n._valueTracker || (n._valueTracker = Qn(n));
  }
  function Tr(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var o = r.getValue(), s = "";
    return n && (s = Gt(n) ? n.checked ? "true" : "false" : n.value), n = s, n !== o ? (r.setValue(n), !0) : !1;
  }
  function qn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function hn(n, r) {
    var o = r.checked;
    return A({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: o ?? n._wrapperState.initialChecked });
  }
  function Xn(n, r) {
    var o = r.defaultValue == null ? "" : r.defaultValue, s = r.checked != null ? r.checked : r.defaultChecked;
    o = ut(r.value != null ? r.value : o), n._wrapperState = { initialChecked: s, initialValue: o, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Rn(n, r) {
    r = r.checked, r != null && Re(n, "checked", r, !1);
  }
  function En(n, r) {
    Rn(n, r);
    var o = ut(r.value), s = r.type;
    if (o != null)
      s === "number" ? (o === 0 && n.value === "" || n.value != o) && (n.value = "" + o) : n.value !== "" + o && (n.value = "" + o);
    else if (s === "submit" || s === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? cr(n, r.type, o) : r.hasOwnProperty("defaultValue") && cr(n, r.type, ut(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function xn(n, r, o) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var s = r.type;
      if (!(s !== "submit" && s !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, o || r === n.value || (n.value = r), n.defaultValue = r;
    }
    o = n.name, o !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, o !== "" && (n.name = o);
  }
  function cr(n, r, o) {
    (r !== "number" || qn(n.ownerDocument) !== n) && (o == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + o && (n.defaultValue = "" + o));
  }
  var mn = Array.isArray;
  function yn(n, r, o, s) {
    if (n = n.options, r) {
      r = {};
      for (var d = 0; d < o.length; d++)
        r["$" + o[d]] = !0;
      for (o = 0; o < n.length; o++)
        d = r.hasOwnProperty("$" + n[o].value), n[o].selected !== d && (n[o].selected = d), d && s && (n[o].defaultSelected = !0);
    } else {
      for (o = "" + ut(o), r = null, d = 0; d < n.length; d++) {
        if (n[d].value === o) {
          n[d].selected = !0, s && (n[d].defaultSelected = !0);
          return;
        }
        r !== null || n[d].disabled || (r = n[d]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function br(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(f(91));
    return A({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function wr(n, r) {
    var o = r.value;
    if (o == null) {
      if (o = r.children, r = r.defaultValue, o != null) {
        if (r != null)
          throw Error(f(92));
        if (mn(o)) {
          if (1 < o.length)
            throw Error(f(93));
          o = o[0];
        }
        r = o;
      }
      r == null && (r = ""), o = r;
    }
    n._wrapperState = { initialValue: ut(o) };
  }
  function In(n, r) {
    var o = ut(r.value), s = ut(r.defaultValue);
    o != null && (o = "" + o, o !== n.value && (n.value = o), r.defaultValue == null && n.defaultValue !== o && (n.defaultValue = o)), s != null && (n.defaultValue = "" + s);
  }
  function Rr(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Bn(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function rr(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Bn(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var en, va = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, o, s, d) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, o, s, d);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (en = en || document.createElement("div"), en.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = en.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function ha(n, r) {
    if (r) {
      var o = n.firstChild;
      if (o && o === n.lastChild && o.nodeType === 3) {
        o.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var ma = {
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
  }, ge = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ma).forEach(function(n) {
    ge.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), ma[r] = ma[n];
    });
  });
  function Be(n, r, o) {
    return r == null || typeof r == "boolean" || r === "" ? "" : o || typeof r != "number" || r === 0 || ma.hasOwnProperty(n) && ma[n] ? ("" + r).trim() : r + "px";
  }
  function Tt(n, r) {
    n = n.style;
    for (var o in r)
      if (r.hasOwnProperty(o)) {
        var s = o.indexOf("--") === 0, d = Be(o, r[o], s);
        o === "float" && (o = "cssFloat"), s ? n.setProperty(o, d) : n[o] = d;
      }
  }
  var It = A({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function $t(n, r) {
    if (r) {
      if (It[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(f(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(f(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(f(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(f(62));
    }
  }
  function zn(n, r) {
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
  var _n = null;
  function xr(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Kt = null, ar = null, Bt = null;
  function rn(n) {
    if (n = wi(n)) {
      if (typeof Kt != "function")
        throw Error(f(280));
      var r = n.stateNode;
      r && (r = af(r), Kt(n.stateNode, n.type, r));
    }
  }
  function ri(n) {
    ar ? Bt ? Bt.push(n) : Bt = [n] : ar = n;
  }
  function Na() {
    if (ar) {
      var n = ar, r = Bt;
      if (Bt = ar = null, rn(n), r)
        for (n = 0; n < r.length; n++)
          rn(r[n]);
    }
  }
  function Do(n, r) {
    return n(r);
  }
  function hl() {
  }
  var ml = !1;
  function Oo(n, r, o) {
    if (ml)
      return n(r, o);
    ml = !0;
    try {
      return Do(n, r, o);
    } finally {
      ml = !1, (ar !== null || Bt !== null) && (hl(), Na());
    }
  }
  function ai(n, r) {
    var o = n.stateNode;
    if (o === null)
      return null;
    var s = af(o);
    if (s === null)
      return null;
    o = s[r];
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
          (s = !s.disabled) || (n = n.type, s = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !s;
          break e;
        default:
          n = !1;
      }
    if (n)
      return null;
    if (o && typeof o != "function")
      throw Error(f(231, r, typeof o));
    return o;
  }
  var ii = !1;
  if (_)
    try {
      var La = {};
      Object.defineProperty(La, "passive", { get: function() {
        ii = !0;
      } }), window.addEventListener("test", La, La), window.removeEventListener("test", La, La);
    } catch {
      ii = !1;
    }
  function Wi(n, r, o, s, d, h, S, w, k) {
    var W = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(o, W);
    } catch (oe) {
      this.onError(oe);
    }
  }
  var Yr = !1, Wr = null, ya = !1, Gi = null, x = { onError: function(n) {
    Yr = !0, Wr = n;
  } };
  function ie(n, r, o, s, d, h, S, w, k) {
    Yr = !1, Wr = null, Wi.apply(x, arguments);
  }
  function me(n, r, o, s, d, h, S, w, k) {
    if (ie.apply(this, arguments), Yr) {
      if (Yr) {
        var W = Wr;
        Yr = !1, Wr = null;
      } else
        throw Error(f(198));
      ya || (ya = !0, Gi = W);
    }
  }
  function _e(n) {
    var r = n, o = n;
    if (n.alternate)
      for (; r.return; )
        r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (o = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? o : null;
  }
  function xt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function kt(n) {
    if (_e(n) !== n)
      throw Error(f(188));
  }
  function St(n) {
    var r = n.alternate;
    if (!r) {
      if (r = _e(n), r === null)
        throw Error(f(188));
      return r !== n ? null : n;
    }
    for (var o = n, s = r; ; ) {
      var d = o.return;
      if (d === null)
        break;
      var h = d.alternate;
      if (h === null) {
        if (s = d.return, s !== null) {
          o = s;
          continue;
        }
        break;
      }
      if (d.child === h.child) {
        for (h = d.child; h; ) {
          if (h === o)
            return kt(d), n;
          if (h === s)
            return kt(d), r;
          h = h.sibling;
        }
        throw Error(f(188));
      }
      if (o.return !== s.return)
        o = d, s = h;
      else {
        for (var S = !1, w = d.child; w; ) {
          if (w === o) {
            S = !0, o = d, s = h;
            break;
          }
          if (w === s) {
            S = !0, s = d, o = h;
            break;
          }
          w = w.sibling;
        }
        if (!S) {
          for (w = h.child; w; ) {
            if (w === o) {
              S = !0, o = h, s = d;
              break;
            }
            if (w === s) {
              S = !0, s = h, o = d;
              break;
            }
            w = w.sibling;
          }
          if (!S)
            throw Error(f(189));
        }
      }
      if (o.alternate !== s)
        throw Error(f(190));
    }
    if (o.tag !== 3)
      throw Error(f(188));
    return o.stateNode.current === o ? n : r;
  }
  function Ge(n) {
    return n = St(n), n !== null ? Yn(n) : null;
  }
  function Yn(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = Yn(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var an = u.unstable_scheduleCallback, on = u.unstable_cancelCallback, Dr = u.unstable_shouldYield, Ei = u.unstable_requestPaint, ln = u.unstable_now, Gr = u.unstable_getCurrentPriorityLevel, Ss = u.unstable_ImmediatePriority, _i = u.unstable_UserBlockingPriority, bt = u.unstable_NormalPriority, yl = u.unstable_LowPriority, Ki = u.unstable_IdlePriority, Ao = null, Kr = null;
  function Cs(n) {
    if (Kr && typeof Kr.onCommitFiberRoot == "function")
      try {
        Kr.onCommitFiberRoot(Ao, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var Lr = Math.clz32 ? Math.clz32 : ws, Ts = Math.log, bs = Math.LN2;
  function ws(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Ts(n) / bs | 0) | 0;
  }
  var gl = 64, su = 4194304;
  function Qi(n) {
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
  function Si(n, r) {
    var o = n.pendingLanes;
    if (o === 0)
      return 0;
    var s = 0, d = n.suspendedLanes, h = n.pingedLanes, S = o & 268435455;
    if (S !== 0) {
      var w = S & ~d;
      w !== 0 ? s = Qi(w) : (h &= S, h !== 0 && (s = Qi(h)));
    } else
      S = o & ~d, S !== 0 ? s = Qi(S) : h !== 0 && (s = Qi(h));
    if (s === 0)
      return 0;
    if (r !== 0 && r !== s && !(r & d) && (d = s & -s, h = r & -r, d >= h || d === 16 && (h & 4194240) !== 0))
      return r;
    if (s & 4 && (s |= o & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= s; 0 < r; )
        o = 31 - Lr(r), d = 1 << o, s |= n[o], r &= ~d;
    return s;
  }
  function Ma(n, r) {
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
  function ko(n, r) {
    for (var o = n.suspendedLanes, s = n.pingedLanes, d = n.expirationTimes, h = n.pendingLanes; 0 < h; ) {
      var S = 31 - Lr(h), w = 1 << S, k = d[S];
      k === -1 ? (!(w & o) || w & s) && (d[S] = Ma(w, r)) : k <= r && (n.expiredLanes |= w), h &= ~w;
    }
  }
  function Ci(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function El() {
    var n = gl;
    return gl <<= 1, !(gl & 4194240) && (gl = 64), n;
  }
  function _l(n) {
    for (var r = [], o = 0; 31 > o; o++)
      r.push(n);
    return r;
  }
  function No(n, r, o) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Lr(r), n[r] = o;
  }
  function Rs(n, r) {
    var o = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var s = n.eventTimes;
    for (n = n.expirationTimes; 0 < o; ) {
      var d = 31 - Lr(o), h = 1 << d;
      r[d] = 0, s[d] = -1, n[d] = -1, o &= ~h;
    }
  }
  function xs(n, r) {
    var o = n.entangledLanes |= r;
    for (n = n.entanglements; o; ) {
      var s = 31 - Lr(o), d = 1 << s;
      d & r | n[s] & r && (n[s] |= r), o &= ~d;
    }
  }
  var At = 0;
  function Ds(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var cu, Lo, Os, zt, fu, Sl = !1, ft = [], oi = null, Sn = null, Qr = null, za = /* @__PURE__ */ new Map(), Mo = /* @__PURE__ */ new Map(), cn = [], Cn = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function As(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        oi = null;
        break;
      case "dragenter":
      case "dragleave":
        Sn = null;
        break;
      case "mouseover":
      case "mouseout":
        Qr = null;
        break;
      case "pointerover":
      case "pointerout":
        za.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Mo.delete(r.pointerId);
    }
  }
  function fr(n, r, o, s, d, h) {
    return n === null || n.nativeEvent !== h ? (n = { blockedOn: r, domEventName: o, eventSystemFlags: s, nativeEvent: h, targetContainers: [d] }, r !== null && (r = wi(r), r !== null && Lo(r)), n) : (n.eventSystemFlags |= s, r = n.targetContainers, d !== null && r.indexOf(d) === -1 && r.push(d), n);
  }
  function qr(n, r, o, s, d) {
    switch (r) {
      case "focusin":
        return oi = fr(oi, n, r, o, s, d), !0;
      case "dragenter":
        return Sn = fr(Sn, n, r, o, s, d), !0;
      case "mouseover":
        return Qr = fr(Qr, n, r, o, s, d), !0;
      case "pointerover":
        var h = d.pointerId;
        return za.set(h, fr(za.get(h) || null, n, r, o, s, d)), !0;
      case "gotpointercapture":
        return h = d.pointerId, Mo.set(h, fr(Mo.get(h) || null, n, r, o, s, d)), !0;
    }
    return !1;
  }
  function li(n) {
    var r = oo(n.target);
    if (r !== null) {
      var o = _e(r);
      if (o !== null) {
        if (r = o.tag, r === 13) {
          if (r = xt(o), r !== null) {
            n.blockedOn = r, fu(n.priority, function() {
              Os(o);
            });
            return;
          }
        } else if (r === 3 && o.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function du(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var o = hu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (o === null) {
        o = n.nativeEvent;
        var s = new o.constructor(o.type, o);
        _n = s, o.target.dispatchEvent(s), _n = null;
      } else
        return r = wi(o), r !== null && Lo(r), n.blockedOn = o, !1;
      r.shift();
    }
    return !0;
  }
  function Cl(n, r, o) {
    du(n) && o.delete(r);
  }
  function Tl() {
    Sl = !1, oi !== null && du(oi) && (oi = null), Sn !== null && du(Sn) && (Sn = null), Qr !== null && du(Qr) && (Qr = null), za.forEach(Cl), Mo.forEach(Cl);
  }
  function zo(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Sl || (Sl = !0, u.unstable_scheduleCallback(u.unstable_NormalPriority, Tl)));
  }
  function Ua(n) {
    function r(d) {
      return zo(d, n);
    }
    if (0 < ft.length) {
      zo(ft[0], n);
      for (var o = 1; o < ft.length; o++) {
        var s = ft[o];
        s.blockedOn === n && (s.blockedOn = null);
      }
    }
    for (oi !== null && zo(oi, n), Sn !== null && zo(Sn, n), Qr !== null && zo(Qr, n), za.forEach(r), Mo.forEach(r), o = 0; o < cn.length; o++)
      s = cn[o], s.blockedOn === n && (s.blockedOn = null);
    for (; 0 < cn.length && (o = cn[0], o.blockedOn === null); )
      li(o), o.blockedOn === null && cn.shift();
  }
  var qi = de.ReactCurrentBatchConfig, pu = !0;
  function Xi(n, r, o, s) {
    var d = At, h = qi.transition;
    qi.transition = null;
    try {
      At = 1, Ti(n, r, o, s);
    } finally {
      At = d, qi.transition = h;
    }
  }
  function vu(n, r, o, s) {
    var d = At, h = qi.transition;
    qi.transition = null;
    try {
      At = 4, Ti(n, r, o, s);
    } finally {
      At = d, qi.transition = h;
    }
  }
  function Ti(n, r, o, s) {
    if (pu) {
      var d = hu(n, r, o, s);
      if (d === null)
        ap(n, r, s, Zi, o), As(n, s);
      else if (qr(d, n, r, o, s))
        s.stopPropagation();
      else if (As(n, s), r & 4 && -1 < Cn.indexOf(n)) {
        for (; d !== null; ) {
          var h = wi(d);
          if (h !== null && cu(h), h = hu(n, r, o, s), h === null && ap(n, r, s, Zi, o), h === d)
            break;
          d = h;
        }
        d !== null && s.stopPropagation();
      } else
        ap(n, r, s, null, o);
    }
  }
  var Zi = null;
  function hu(n, r, o, s) {
    if (Zi = null, n = xr(s), n = oo(n), n !== null)
      if (r = _e(n), r === null)
        n = null;
      else if (o = r.tag, o === 13) {
        if (n = xt(r), n !== null)
          return n;
        n = null;
      } else if (o === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return Zi = n, null;
  }
  function ks(n) {
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
        switch (Gr()) {
          case Ss:
            return 1;
          case _i:
            return 4;
          case bt:
          case yl:
            return 16;
          case Ki:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ui = null, mu = null, E = null;
  function R() {
    if (E)
      return E;
    var n, r = mu, o = r.length, s, d = "value" in ui ? ui.value : ui.textContent, h = d.length;
    for (n = 0; n < o && r[n] === d[n]; n++)
      ;
    var S = o - n;
    for (s = 1; s <= S && r[o - s] === d[h - s]; s++)
      ;
    return E = d.slice(n, 1 < s ? 1 - s : void 0);
  }
  function I(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function K() {
    return !0;
  }
  function pe() {
    return !1;
  }
  function Ue(n) {
    function r(o, s, d, h, S) {
      this._reactName = o, this._targetInst = d, this.type = s, this.nativeEvent = h, this.target = S, this.currentTarget = null;
      for (var w in n)
        n.hasOwnProperty(w) && (o = n[w], this[w] = o ? o(h) : h[w]);
      return this.isDefaultPrevented = (h.defaultPrevented != null ? h.defaultPrevented : h.returnValue === !1) ? K : pe, this.isPropagationStopped = pe, this;
    }
    return A(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var o = this.nativeEvent;
      o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1), this.isDefaultPrevented = K);
    }, stopPropagation: function() {
      var o = this.nativeEvent;
      o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0), this.isPropagationStopped = K);
    }, persist: function() {
    }, isPersistent: K }), r;
  }
  var xe = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, it = Ue(xe), wt = A({}, xe, { view: 0, detail: 0 }), Yt = Ue(wt), Qt, qt, Xt, fn = A({}, wt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Kc, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Xt && (Xt && n.type === "mousemove" ? (Qt = n.screenX - Xt.screenX, qt = n.screenY - Xt.screenY) : qt = Qt = 0, Xt = n), Qt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : qt;
  } }), Ut = Ue(fn), Uo = A({}, fn, { dataTransfer: 0 }), yu = Ue(Uo), Ns = A({}, wt, { relatedTarget: 0 }), Ls = Ue(Ns), Ji = A({}, xe, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Ms = Ue(Ji), zs = A({}, xe, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Wd = Ue(zs), Eg = A({}, xe, { data: 0 }), ih = Ue(Eg), oh = {
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
  }, Gd = {
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
  }, lh = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function uh(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = lh[n]) ? !!r[n] : !1;
  }
  function Kc() {
    return uh;
  }
  var _g = A({}, wt, { key: function(n) {
    if (n.key) {
      var r = oh[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = I(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Gd[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Kc, charCode: function(n) {
    return n.type === "keypress" ? I(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? I(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), eo = Ue(_g), Sg = A({}, fn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Qc = Ue(Sg), Kd = A({}, wt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Kc }), Qd = Ue(Kd), Cg = A({}, xe, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), qc = Ue(Cg), sh = A({}, fn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Xr = Ue(sh), to = [9, 13, 27, 32], Dn = _ && "CompositionEvent" in window, ga = null;
  _ && "documentMode" in document && (ga = document.documentMode);
  var qd = _ && "TextEvent" in window && !ga, Us = _ && (!Dn || ga && 8 < ga && 11 >= ga), ch = " ", gu = !1;
  function fh(n, r) {
    switch (n) {
      case "keyup":
        return to.indexOf(r.keyCode) !== -1;
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
  function dh(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var jo = !1;
  function Tg(n, r) {
    switch (n) {
      case "compositionend":
        return dh(r);
      case "keypress":
        return r.which !== 32 ? null : (gu = !0, ch);
      case "textInput":
        return n = r.data, n === ch && gu ? null : n;
      default:
        return null;
    }
  }
  function bg(n, r) {
    if (jo)
      return n === "compositionend" || !Dn && fh(n, r) ? (n = R(), E = mu = ui = null, jo = !1, n) : null;
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
        return Us && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var wg = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Xd(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!wg[n.type] : r === "textarea";
  }
  function ph(n, r, o, s) {
    ri(s), r = nf(r, "onChange"), 0 < r.length && (o = new it("onChange", "change", null, o, s), n.push({ event: o, listeners: r }));
  }
  var js = null, $s = null;
  function vh(n) {
    Ah(n, 0);
  }
  function no(n) {
    var r = Cu(n);
    if (Tr(r))
      return n;
  }
  function Zd(n, r) {
    if (n === "change")
      return r;
  }
  var Jd = !1;
  if (_) {
    var Xc;
    if (_) {
      var ep = "oninput" in document;
      if (!ep) {
        var hh = document.createElement("div");
        hh.setAttribute("oninput", "return;"), ep = typeof hh.oninput == "function";
      }
      Xc = ep;
    } else
      Xc = !1;
    Jd = Xc && (!document.documentMode || 9 < document.documentMode);
  }
  function mh() {
    js && (js.detachEvent("onpropertychange", yh), $s = js = null);
  }
  function yh(n) {
    if (n.propertyName === "value" && no($s)) {
      var r = [];
      ph(r, $s, n, xr(n)), Oo(vh, r);
    }
  }
  function Rg(n, r, o) {
    n === "focusin" ? (mh(), js = r, $s = o, js.attachEvent("onpropertychange", yh)) : n === "focusout" && mh();
  }
  function xg(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return no($s);
  }
  function Dg(n, r) {
    if (n === "click")
      return no(r);
  }
  function Og(n, r) {
    if (n === "input" || n === "change")
      return no(r);
  }
  function gh(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var si = typeof Object.is == "function" ? Object.is : gh;
  function Eu(n, r) {
    if (si(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var o = Object.keys(n), s = Object.keys(r);
    if (o.length !== s.length)
      return !1;
    for (s = 0; s < o.length; s++) {
      var d = o[s];
      if (!U.call(r, d) || !si(n[d], r[d]))
        return !1;
    }
    return !0;
  }
  function Eh(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function _h(n, r) {
    var o = Eh(n);
    n = 0;
    for (var s; o; ) {
      if (o.nodeType === 3) {
        if (s = n + o.textContent.length, n <= r && s >= r)
          return { node: o, offset: r - n };
        n = s;
      }
      e: {
        for (; o; ) {
          if (o.nextSibling) {
            o = o.nextSibling;
            break e;
          }
          o = o.parentNode;
        }
        o = void 0;
      }
      o = Eh(o);
    }
  }
  function Sh(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Sh(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Ch() {
    for (var n = window, r = qn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var o = typeof r.contentWindow.location.href == "string";
      } catch {
        o = !1;
      }
      if (o)
        n = r.contentWindow;
      else
        break;
      r = qn(n.document);
    }
    return r;
  }
  function Ps(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function bl(n) {
    var r = Ch(), o = n.focusedElem, s = n.selectionRange;
    if (r !== o && o && o.ownerDocument && Sh(o.ownerDocument.documentElement, o)) {
      if (s !== null && Ps(o)) {
        if (r = s.start, n = s.end, n === void 0 && (n = r), "selectionStart" in o)
          o.selectionStart = r, o.selectionEnd = Math.min(n, o.value.length);
        else if (n = (r = o.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var d = o.textContent.length, h = Math.min(s.start, d);
          s = s.end === void 0 ? h : Math.min(s.end, d), !n.extend && h > s && (d = s, s = h, h = d), d = _h(o, h);
          var S = _h(
            o,
            s
          );
          d && S && (n.rangeCount !== 1 || n.anchorNode !== d.node || n.anchorOffset !== d.offset || n.focusNode !== S.node || n.focusOffset !== S.offset) && (r = r.createRange(), r.setStart(d.node, d.offset), n.removeAllRanges(), h > s ? (n.addRange(r), n.extend(S.node, S.offset)) : (r.setEnd(S.node, S.offset), n.addRange(r)));
        }
      }
      for (r = [], n = o; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof o.focus == "function" && o.focus(), o = 0; o < r.length; o++)
        n = r[o], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var Zc = _ && "documentMode" in document && 11 >= document.documentMode, wl = null, $o = null, Hs = null, tp = !1;
  function Th(n, r, o) {
    var s = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    tp || wl == null || wl !== qn(s) || (s = wl, "selectionStart" in s && Ps(s) ? s = { start: s.selectionStart, end: s.selectionEnd } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(), s = { anchorNode: s.anchorNode, anchorOffset: s.anchorOffset, focusNode: s.focusNode, focusOffset: s.focusOffset }), Hs && Eu(Hs, s) || (Hs = s, s = nf($o, "onSelect"), 0 < s.length && (r = new it("onSelect", "select", null, r, o), n.push({ event: r, listeners: s }), r.target = wl)));
  }
  function Jc(n, r) {
    var o = {};
    return o[n.toLowerCase()] = r.toLowerCase(), o["Webkit" + n] = "webkit" + r, o["Moz" + n] = "moz" + r, o;
  }
  var _u = { animationend: Jc("Animation", "AnimationEnd"), animationiteration: Jc("Animation", "AnimationIteration"), animationstart: Jc("Animation", "AnimationStart"), transitionend: Jc("Transition", "TransitionEnd") }, ef = {}, bh = {};
  _ && (bh = document.createElement("div").style, "AnimationEvent" in window || (delete _u.animationend.animation, delete _u.animationiteration.animation, delete _u.animationstart.animation), "TransitionEvent" in window || delete _u.transitionend.transition);
  function Fs(n) {
    if (ef[n])
      return ef[n];
    if (!_u[n])
      return n;
    var r = _u[n], o;
    for (o in r)
      if (r.hasOwnProperty(o) && o in bh)
        return ef[n] = r[o];
    return n;
  }
  var Or = Fs("animationend"), np = Fs("animationiteration"), wh = Fs("animationstart"), Rh = Fs("transitionend"), xh = /* @__PURE__ */ new Map(), Dh = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Po(n, r) {
    xh.set(n, r), D(r, [n]);
  }
  for (var tf = 0; tf < Dh.length; tf++) {
    var Vs = Dh[tf], Is = Vs.toLowerCase(), Ag = Vs[0].toUpperCase() + Vs.slice(1);
    Po(Is, "on" + Ag);
  }
  Po(Or, "onAnimationEnd"), Po(np, "onAnimationIteration"), Po(wh, "onAnimationStart"), Po("dblclick", "onDoubleClick"), Po("focusin", "onFocus"), Po("focusout", "onBlur"), Po(Rh, "onTransitionEnd"), O("onMouseEnter", ["mouseout", "mouseover"]), O("onMouseLeave", ["mouseout", "mouseover"]), O("onPointerEnter", ["pointerout", "pointerover"]), O("onPointerLeave", ["pointerout", "pointerover"]), D("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), D("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), D("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), D("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), D("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), D("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ro = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), kg = new Set("cancel close invalid load scroll toggle".split(" ").concat(ro));
  function Oh(n, r, o) {
    var s = n.type || "unknown-event";
    n.currentTarget = o, me(s, r, void 0, n), n.currentTarget = null;
  }
  function Ah(n, r) {
    r = (r & 4) !== 0;
    for (var o = 0; o < n.length; o++) {
      var s = n[o], d = s.event;
      s = s.listeners;
      e: {
        var h = void 0;
        if (r)
          for (var S = s.length - 1; 0 <= S; S--) {
            var w = s[S], k = w.instance, W = w.currentTarget;
            if (w = w.listener, k !== h && d.isPropagationStopped())
              break e;
            Oh(d, w, W), h = k;
          }
        else
          for (S = 0; S < s.length; S++) {
            if (w = s[S], k = w.instance, W = w.currentTarget, w = w.listener, k !== h && d.isPropagationStopped())
              break e;
            Oh(d, w, W), h = k;
          }
      }
    }
    if (ya)
      throw n = Gi, ya = !1, Gi = null, n;
  }
  function tn(n, r) {
    var o = r[dp];
    o === void 0 && (o = r[dp] = /* @__PURE__ */ new Set());
    var s = n + "__bubble";
    o.has(s) || (rp(r, n, 2, !1), o.add(s));
  }
  function Bs(n, r, o) {
    var s = 0;
    r && (s |= 4), rp(o, n, s, r);
  }
  var ao = "_reactListening" + Math.random().toString(36).slice(2);
  function bi(n) {
    if (!n[ao]) {
      n[ao] = !0, g.forEach(function(o) {
        o !== "selectionchange" && (kg.has(o) || Bs(o, !1, n), Bs(o, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[ao] || (r[ao] = !0, Bs("selectionchange", !1, r));
    }
  }
  function rp(n, r, o, s) {
    switch (ks(r)) {
      case 1:
        var d = Xi;
        break;
      case 4:
        d = vu;
        break;
      default:
        d = Ti;
    }
    o = d.bind(null, r, o, n), d = void 0, !ii || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (d = !0), s ? d !== void 0 ? n.addEventListener(r, o, { capture: !0, passive: d }) : n.addEventListener(r, o, !0) : d !== void 0 ? n.addEventListener(r, o, { passive: d }) : n.addEventListener(r, o, !1);
  }
  function ap(n, r, o, s, d) {
    var h = s;
    if (!(r & 1) && !(r & 2) && s !== null)
      e:
        for (; ; ) {
          if (s === null)
            return;
          var S = s.tag;
          if (S === 3 || S === 4) {
            var w = s.stateNode.containerInfo;
            if (w === d || w.nodeType === 8 && w.parentNode === d)
              break;
            if (S === 4)
              for (S = s.return; S !== null; ) {
                var k = S.tag;
                if ((k === 3 || k === 4) && (k = S.stateNode.containerInfo, k === d || k.nodeType === 8 && k.parentNode === d))
                  return;
                S = S.return;
              }
            for (; w !== null; ) {
              if (S = oo(w), S === null)
                return;
              if (k = S.tag, k === 5 || k === 6) {
                s = h = S;
                continue e;
              }
              w = w.parentNode;
            }
          }
          s = s.return;
        }
    Oo(function() {
      var W = h, oe = xr(o), ue = [];
      e: {
        var ae = xh.get(n);
        if (ae !== void 0) {
          var be = it, Le = n;
          switch (n) {
            case "keypress":
              if (I(o) === 0)
                break e;
            case "keydown":
            case "keyup":
              be = eo;
              break;
            case "focusin":
              Le = "focus", be = Ls;
              break;
            case "focusout":
              Le = "blur", be = Ls;
              break;
            case "beforeblur":
            case "afterblur":
              be = Ls;
              break;
            case "click":
              if (o.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              be = Ut;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              be = yu;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              be = Qd;
              break;
            case Or:
            case np:
            case wh:
              be = Ms;
              break;
            case Rh:
              be = qc;
              break;
            case "scroll":
              be = Yt;
              break;
            case "wheel":
              be = Xr;
              break;
            case "copy":
            case "cut":
            case "paste":
              be = Wd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              be = Qc;
          }
          var je = (r & 4) !== 0, Fn = !je && n === "scroll", j = je ? ae !== null ? ae + "Capture" : null : ae;
          je = [];
          for (var L = W, H; L !== null; ) {
            H = L;
            var ve = H.stateNode;
            if (H.tag === 5 && ve !== null && (H = ve, j !== null && (ve = ai(L, j), ve != null && je.push(Su(L, ve, H)))), Fn)
              break;
            L = L.return;
          }
          0 < je.length && (ae = new be(ae, Le, null, o, oe), ue.push({ event: ae, listeners: je }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (ae = n === "mouseover" || n === "pointerover", be = n === "mouseout" || n === "pointerout", ae && o !== _n && (Le = o.relatedTarget || o.fromElement) && (oo(Le) || Le[ci]))
            break e;
          if ((be || ae) && (ae = oe.window === oe ? oe : (ae = oe.ownerDocument) ? ae.defaultView || ae.parentWindow : window, be ? (Le = o.relatedTarget || o.toElement, be = W, Le = Le ? oo(Le) : null, Le !== null && (Fn = _e(Le), Le !== Fn || Le.tag !== 5 && Le.tag !== 6) && (Le = null)) : (be = null, Le = W), be !== Le)) {
            if (je = Ut, ve = "onMouseLeave", j = "onMouseEnter", L = "mouse", (n === "pointerout" || n === "pointerover") && (je = Qc, ve = "onPointerLeave", j = "onPointerEnter", L = "pointer"), Fn = be == null ? ae : Cu(be), H = Le == null ? ae : Cu(Le), ae = new je(ve, L + "leave", be, o, oe), ae.target = Fn, ae.relatedTarget = H, ve = null, oo(oe) === W && (je = new je(j, L + "enter", Le, o, oe), je.target = H, je.relatedTarget = Fn, ve = je), Fn = ve, be && Le)
              t: {
                for (je = be, j = Le, L = 0, H = je; H; H = Rl(H))
                  L++;
                for (H = 0, ve = j; ve; ve = Rl(ve))
                  H++;
                for (; 0 < L - H; )
                  je = Rl(je), L--;
                for (; 0 < H - L; )
                  j = Rl(j), H--;
                for (; L--; ) {
                  if (je === j || j !== null && je === j.alternate)
                    break t;
                  je = Rl(je), j = Rl(j);
                }
                je = null;
              }
            else
              je = null;
            be !== null && ip(ue, ae, be, je, !1), Le !== null && Fn !== null && ip(ue, Fn, Le, je, !0);
          }
        }
        e: {
          if (ae = W ? Cu(W) : window, be = ae.nodeName && ae.nodeName.toLowerCase(), be === "select" || be === "input" && ae.type === "file")
            var He = Zd;
          else if (Xd(ae))
            if (Jd)
              He = Og;
            else {
              He = xg;
              var tt = Rg;
            }
          else
            (be = ae.nodeName) && be.toLowerCase() === "input" && (ae.type === "checkbox" || ae.type === "radio") && (He = Dg);
          if (He && (He = He(n, W))) {
            ph(ue, He, o, oe);
            break e;
          }
          tt && tt(n, ae, W), n === "focusout" && (tt = ae._wrapperState) && tt.controlled && ae.type === "number" && cr(ae, "number", ae.value);
        }
        switch (tt = W ? Cu(W) : window, n) {
          case "focusin":
            (Xd(tt) || tt.contentEditable === "true") && (wl = tt, $o = W, Hs = null);
            break;
          case "focusout":
            Hs = $o = wl = null;
            break;
          case "mousedown":
            tp = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            tp = !1, Th(ue, o, oe);
            break;
          case "selectionchange":
            if (Zc)
              break;
          case "keydown":
          case "keyup":
            Th(ue, o, oe);
        }
        var Me;
        if (Dn)
          e: {
            switch (n) {
              case "compositionstart":
                var nt = "onCompositionStart";
                break e;
              case "compositionend":
                nt = "onCompositionEnd";
                break e;
              case "compositionupdate":
                nt = "onCompositionUpdate";
                break e;
            }
            nt = void 0;
          }
        else
          jo ? fh(n, o) && (nt = "onCompositionEnd") : n === "keydown" && o.keyCode === 229 && (nt = "onCompositionStart");
        nt && (Us && o.locale !== "ko" && (jo || nt !== "onCompositionStart" ? nt === "onCompositionEnd" && jo && (Me = R()) : (ui = oe, mu = "value" in ui ? ui.value : ui.textContent, jo = !0)), tt = nf(W, nt), 0 < tt.length && (nt = new ih(nt, n, null, o, oe), ue.push({ event: nt, listeners: tt }), Me ? nt.data = Me : (Me = dh(o), Me !== null && (nt.data = Me)))), (Me = qd ? Tg(n, o) : bg(n, o)) && (W = nf(W, "onBeforeInput"), 0 < W.length && (oe = new ih("onBeforeInput", "beforeinput", null, o, oe), ue.push({ event: oe, listeners: W }), oe.data = Me));
      }
      Ah(ue, r);
    });
  }
  function Su(n, r, o) {
    return { instance: n, listener: r, currentTarget: o };
  }
  function nf(n, r) {
    for (var o = r + "Capture", s = []; n !== null; ) {
      var d = n, h = d.stateNode;
      d.tag === 5 && h !== null && (d = h, h = ai(n, o), h != null && s.unshift(Su(n, h, d)), h = ai(n, r), h != null && s.push(Su(n, h, d))), n = n.return;
    }
    return s;
  }
  function Rl(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function ip(n, r, o, s, d) {
    for (var h = r._reactName, S = []; o !== null && o !== s; ) {
      var w = o, k = w.alternate, W = w.stateNode;
      if (k !== null && k === s)
        break;
      w.tag === 5 && W !== null && (w = W, d ? (k = ai(o, h), k != null && S.unshift(Su(o, k, w))) : d || (k = ai(o, h), k != null && S.push(Su(o, k, w)))), o = o.return;
    }
    S.length !== 0 && n.push({ event: r, listeners: S });
  }
  var kh = /\r\n?/g, op = /\u0000|\uFFFD/g;
  function Nh(n) {
    return (typeof n == "string" ? n : "" + n).replace(kh, `
`).replace(op, "");
  }
  function Ys(n, r, o) {
    if (r = Nh(r), Nh(n) !== r && o)
      throw Error(f(425));
  }
  function rf() {
  }
  var lp = null, up = null;
  function xl(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Ws = typeof setTimeout == "function" ? setTimeout : void 0, Gs = typeof clearTimeout == "function" ? clearTimeout : void 0, sp = typeof Promise == "function" ? Promise : void 0, Lh = typeof queueMicrotask == "function" ? queueMicrotask : typeof sp < "u" ? function(n) {
    return sp.resolve(null).then(n).catch(cp);
  } : Ws;
  function cp(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function fp(n, r) {
    var o = r, s = 0;
    do {
      var d = o.nextSibling;
      if (n.removeChild(o), d && d.nodeType === 8)
        if (o = d.data, o === "/$") {
          if (s === 0) {
            n.removeChild(d), Ua(r);
            return;
          }
          s--;
        } else
          o !== "$" && o !== "$?" && o !== "$!" || s++;
      o = d;
    } while (o);
    Ua(r);
  }
  function Ea(n) {
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
  function Ks(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var o = n.data;
        if (o === "$" || o === "$!" || o === "$?") {
          if (r === 0)
            return n;
          r--;
        } else
          o === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var io = Math.random().toString(36).slice(2), ja = "__reactFiber$" + io, Qs = "__reactProps$" + io, ci = "__reactContainer$" + io, dp = "__reactEvents$" + io, Ng = "__reactListeners$" + io, Lg = "__reactHandles$" + io;
  function oo(n) {
    var r = n[ja];
    if (r)
      return r;
    for (var o = n.parentNode; o; ) {
      if (r = o[ci] || o[ja]) {
        if (o = r.alternate, r.child !== null || o !== null && o.child !== null)
          for (n = Ks(n); n !== null; ) {
            if (o = n[ja])
              return o;
            n = Ks(n);
          }
        return r;
      }
      n = o, o = n.parentNode;
    }
    return null;
  }
  function wi(n) {
    return n = n[ja] || n[ci], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function Cu(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(f(33));
  }
  function af(n) {
    return n[Qs] || null;
  }
  var Qe = [], fi = -1;
  function nn(n) {
    return { current: n };
  }
  function Pe(n) {
    0 > fi || (n.current = Qe[fi], Qe[fi] = null, fi--);
  }
  function Pt(n, r) {
    fi++, Qe[fi] = n.current, n.current = r;
  }
  var $a = {}, ir = nn($a), pt = nn(!1), Mr = $a;
  function _a(n, r) {
    var o = n.type.contextTypes;
    if (!o)
      return $a;
    var s = n.stateNode;
    if (s && s.__reactInternalMemoizedUnmaskedChildContext === r)
      return s.__reactInternalMemoizedMaskedChildContext;
    var d = {}, h;
    for (h in o)
      d[h] = r[h];
    return s && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = d), d;
  }
  function Wn(n) {
    return n = n.childContextTypes, n != null;
  }
  function Zr() {
    Pe(pt), Pe(ir);
  }
  function Ri(n, r, o) {
    if (ir.current !== $a)
      throw Error(f(168));
    Pt(ir, r), Pt(pt, o);
  }
  function Ho(n, r, o) {
    var s = n.stateNode;
    if (r = r.childContextTypes, typeof s.getChildContext != "function")
      return o;
    s = s.getChildContext();
    for (var d in s)
      if (!(d in r))
        throw Error(f(108, _t(n) || "Unknown", d));
    return A({}, o, s);
  }
  function Dl(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || $a, Mr = ir.current, Pt(ir, n), Pt(pt, pt.current), !0;
  }
  function Mh(n, r, o) {
    var s = n.stateNode;
    if (!s)
      throw Error(f(169));
    o ? (n = Ho(n, r, Mr), s.__reactInternalMemoizedMergedChildContext = n, Pe(pt), Pe(ir), Pt(ir, n)) : Pe(pt), Pt(pt, o);
  }
  var lo = null, Fo = !1, dr = !1;
  function of(n) {
    lo === null ? lo = [n] : lo.push(n);
  }
  function zh(n) {
    Fo = !0, of(n);
  }
  function xi() {
    if (!dr && lo !== null) {
      dr = !0;
      var n = 0, r = At;
      try {
        var o = lo;
        for (At = 1; n < o.length; n++) {
          var s = o[n];
          do
            s = s(!0);
          while (s !== null);
        }
        lo = null, Fo = !1;
      } catch (d) {
        throw lo !== null && (lo = lo.slice(n + 1)), an(Ss, xi), d;
      } finally {
        At = r, dr = !1;
      }
    }
    return null;
  }
  var Pa = [], Vo = 0, Ha = null, Ol = 0, Jr = [], ea = 0, di = null, ta = 1, pr = "";
  function Al(n, r) {
    Pa[Vo++] = Ol, Pa[Vo++] = Ha, Ha = n, Ol = r;
  }
  function Io(n, r, o) {
    Jr[ea++] = ta, Jr[ea++] = pr, Jr[ea++] = di, di = n;
    var s = ta;
    n = pr;
    var d = 32 - Lr(s) - 1;
    s &= ~(1 << d), o += 1;
    var h = 32 - Lr(r) + d;
    if (30 < h) {
      var S = d - d % 5;
      h = (s & (1 << S) - 1).toString(32), s >>= S, d -= S, ta = 1 << 32 - Lr(r) + d | o << d | s, pr = h + n;
    } else
      ta = 1 << h | o << d | s, pr = n;
  }
  function lf(n) {
    n.return !== null && (Al(n, 1), Io(n, 1, 0));
  }
  function uf(n) {
    for (; n === Ha; )
      Ha = Pa[--Vo], Pa[Vo] = null, Ol = Pa[--Vo], Pa[Vo] = null;
    for (; n === di; )
      di = Jr[--ea], Jr[ea] = null, pr = Jr[--ea], Jr[ea] = null, ta = Jr[--ea], Jr[ea] = null;
  }
  var Sa = null, Ca = null, dn = !1, Fa = null;
  function pp(n, r) {
    var o = Ka(5, null, null, 0);
    o.elementType = "DELETED", o.stateNode = r, o.return = n, r = n.deletions, r === null ? (n.deletions = [o], n.flags |= 16) : r.push(o);
  }
  function vp(n, r) {
    switch (n.tag) {
      case 5:
        var o = n.type;
        return r = r.nodeType !== 1 || o.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Sa = n, Ca = Ea(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Sa = n, Ca = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (o = di !== null ? { id: ta, overflow: pr } : null, n.memoizedState = { dehydrated: r, treeContext: o, retryLane: 1073741824 }, o = Ka(18, null, null, 0), o.stateNode = r, o.return = n, n.child = o, Sa = n, Ca = null, !0) : !1;
      default:
        return !1;
    }
  }
  function hp(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function sf(n) {
    if (dn) {
      var r = Ca;
      if (r) {
        var o = r;
        if (!vp(n, r)) {
          if (hp(n))
            throw Error(f(418));
          r = Ea(o.nextSibling);
          var s = Sa;
          r && vp(n, r) ? pp(s, o) : (n.flags = n.flags & -4097 | 2, dn = !1, Sa = n);
        }
      } else {
        if (hp(n))
          throw Error(f(418));
        n.flags = n.flags & -4097 | 2, dn = !1, Sa = n;
      }
    }
  }
  function mp(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    Sa = n;
  }
  function cf(n) {
    if (n !== Sa)
      return !1;
    if (!dn)
      return mp(n), dn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !xl(n.type, n.memoizedProps)), r && (r = Ca)) {
      if (hp(n))
        throw Uh(), Error(f(418));
      for (; r; )
        pp(n, r), r = Ea(r.nextSibling);
    }
    if (mp(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(f(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var o = n.data;
            if (o === "/$") {
              if (r === 0) {
                Ca = Ea(n.nextSibling);
                break e;
              }
              r--;
            } else
              o !== "$" && o !== "$!" && o !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Ca = null;
      }
    } else
      Ca = Sa ? Ea(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Uh() {
    for (var n = Ca; n; )
      n = Ea(n.nextSibling);
  }
  function Tu() {
    Ca = Sa = null, dn = !1;
  }
  function Gn(n) {
    Fa === null ? Fa = [n] : Fa.push(n);
  }
  var Mg = de.ReactCurrentBatchConfig;
  function na(n, r) {
    if (n && n.defaultProps) {
      r = A({}, r), n = n.defaultProps;
      for (var o in n)
        r[o] === void 0 && (r[o] = n[o]);
      return r;
    }
    return r;
  }
  var bu = nn(null), Di = null, wu = null, qs = null;
  function yp() {
    qs = wu = Di = null;
  }
  function gp(n) {
    var r = bu.current;
    Pe(bu), n._currentValue = r;
  }
  function Bo(n, r, o) {
    for (; n !== null; ) {
      var s = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, s !== null && (s.childLanes |= r)) : s !== null && (s.childLanes & r) !== r && (s.childLanes |= r), n === o)
        break;
      n = n.return;
    }
  }
  function Un(n, r) {
    Di = n, qs = wu = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (ia = !0), n.firstContext = null);
  }
  function he(n) {
    var r = n._currentValue;
    if (qs !== n)
      if (n = { context: n, memoizedValue: r, next: null }, wu === null) {
        if (Di === null)
          throw Error(f(308));
        wu = n, Di.dependencies = { lanes: 0, firstContext: n };
      } else
        wu = wu.next = n;
    return r;
  }
  var Ar = null;
  function Ta(n) {
    Ar === null ? Ar = [n] : Ar.push(n);
  }
  function jh(n, r, o, s) {
    var d = r.interleaved;
    return d === null ? (o.next = o, Ta(r)) : (o.next = d.next, d.next = o), r.interleaved = o, uo(n, s);
  }
  function uo(n, r) {
    n.lanes |= r;
    var o = n.alternate;
    for (o !== null && (o.lanes |= r), o = n, n = n.return; n !== null; )
      n.childLanes |= r, o = n.alternate, o !== null && (o.childLanes |= r), o = n, n = n.return;
    return o.tag === 3 ? o.stateNode : null;
  }
  var Yo = !1;
  function Ep(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function $h(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function un(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Wo(n, r, o) {
    var s = n.updateQueue;
    if (s === null)
      return null;
    if (s = s.shared, Dt & 2) {
      var d = s.pending;
      return d === null ? r.next = r : (r.next = d.next, d.next = r), s.pending = r, uo(n, o);
    }
    return d = s.interleaved, d === null ? (r.next = r, Ta(s)) : (r.next = d.next, d.next = r), s.interleaved = r, uo(n, o);
  }
  function ff(n, r, o) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (o & 4194240) !== 0)) {
      var s = r.lanes;
      s &= n.pendingLanes, o |= s, r.lanes = o, xs(n, o);
    }
  }
  function Ph(n, r) {
    var o = n.updateQueue, s = n.alternate;
    if (s !== null && (s = s.updateQueue, o === s)) {
      var d = null, h = null;
      if (o = o.firstBaseUpdate, o !== null) {
        do {
          var S = { eventTime: o.eventTime, lane: o.lane, tag: o.tag, payload: o.payload, callback: o.callback, next: null };
          h === null ? d = h = S : h = h.next = S, o = o.next;
        } while (o !== null);
        h === null ? d = h = r : h = h.next = r;
      } else
        d = h = r;
      o = { baseState: s.baseState, firstBaseUpdate: d, lastBaseUpdate: h, shared: s.shared, effects: s.effects }, n.updateQueue = o;
      return;
    }
    n = o.lastBaseUpdate, n === null ? o.firstBaseUpdate = r : n.next = r, o.lastBaseUpdate = r;
  }
  function Xs(n, r, o, s) {
    var d = n.updateQueue;
    Yo = !1;
    var h = d.firstBaseUpdate, S = d.lastBaseUpdate, w = d.shared.pending;
    if (w !== null) {
      d.shared.pending = null;
      var k = w, W = k.next;
      k.next = null, S === null ? h = W : S.next = W, S = k;
      var oe = n.alternate;
      oe !== null && (oe = oe.updateQueue, w = oe.lastBaseUpdate, w !== S && (w === null ? oe.firstBaseUpdate = W : w.next = W, oe.lastBaseUpdate = k));
    }
    if (h !== null) {
      var ue = d.baseState;
      S = 0, oe = W = k = null, w = h;
      do {
        var ae = w.lane, be = w.eventTime;
        if ((s & ae) === ae) {
          oe !== null && (oe = oe.next = {
            eventTime: be,
            lane: 0,
            tag: w.tag,
            payload: w.payload,
            callback: w.callback,
            next: null
          });
          e: {
            var Le = n, je = w;
            switch (ae = r, be = o, je.tag) {
              case 1:
                if (Le = je.payload, typeof Le == "function") {
                  ue = Le.call(be, ue, ae);
                  break e;
                }
                ue = Le;
                break e;
              case 3:
                Le.flags = Le.flags & -65537 | 128;
              case 0:
                if (Le = je.payload, ae = typeof Le == "function" ? Le.call(be, ue, ae) : Le, ae == null)
                  break e;
                ue = A({}, ue, ae);
                break e;
              case 2:
                Yo = !0;
            }
          }
          w.callback !== null && w.lane !== 0 && (n.flags |= 64, ae = d.effects, ae === null ? d.effects = [w] : ae.push(w));
        } else
          be = { eventTime: be, lane: ae, tag: w.tag, payload: w.payload, callback: w.callback, next: null }, oe === null ? (W = oe = be, k = ue) : oe = oe.next = be, S |= ae;
        if (w = w.next, w === null) {
          if (w = d.shared.pending, w === null)
            break;
          ae = w, w = ae.next, ae.next = null, d.lastBaseUpdate = ae, d.shared.pending = null;
        }
      } while (!0);
      if (oe === null && (k = ue), d.baseState = k, d.firstBaseUpdate = W, d.lastBaseUpdate = oe, r = d.shared.interleaved, r !== null) {
        d = r;
        do
          S |= d.lane, d = d.next;
        while (d !== r);
      } else
        h === null && (d.shared.lanes = 0);
      Vl |= S, n.lanes = S, n.memoizedState = ue;
    }
  }
  function Ru(n, r, o) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var s = n[r], d = s.callback;
        if (d !== null) {
          if (s.callback = null, s = o, typeof d != "function")
            throw Error(f(191, d));
          d.call(s);
        }
      }
  }
  var kl = new v.Component().refs;
  function _p(n, r, o, s) {
    r = n.memoizedState, o = o(s, r), o = o == null ? r : A({}, r, o), n.memoizedState = o, n.lanes === 0 && (n.updateQueue.baseState = o);
  }
  var df = { isMounted: function(n) {
    return (n = n._reactInternals) ? _e(n) === n : !1;
  }, enqueueSetState: function(n, r, o) {
    n = n._reactInternals;
    var s = ur(), d = po(n), h = un(s, d);
    h.payload = r, o != null && (h.callback = o), r = Wo(n, h, d), r !== null && (bn(r, n, d, s), ff(r, n, d));
  }, enqueueReplaceState: function(n, r, o) {
    n = n._reactInternals;
    var s = ur(), d = po(n), h = un(s, d);
    h.tag = 1, h.payload = r, o != null && (h.callback = o), r = Wo(n, h, d), r !== null && (bn(r, n, d, s), ff(r, n, d));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var o = ur(), s = po(n), d = un(o, s);
    d.tag = 2, r != null && (d.callback = r), r = Wo(n, d, s), r !== null && (bn(r, n, s, o), ff(r, n, s));
  } };
  function Hh(n, r, o, s, d, h, S) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(s, h, S) : r.prototype && r.prototype.isPureReactComponent ? !Eu(o, s) || !Eu(d, h) : !0;
  }
  function Fh(n, r, o) {
    var s = !1, d = $a, h = r.contextType;
    return typeof h == "object" && h !== null ? h = he(h) : (d = Wn(r) ? Mr : ir.current, s = r.contextTypes, h = (s = s != null) ? _a(n, d) : $a), r = new r(o, h), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = df, n.stateNode = r, r._reactInternals = n, s && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = d, n.__reactInternalMemoizedMaskedChildContext = h), r;
  }
  function Vh(n, r, o, s) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(o, s), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(o, s), r.state !== n && df.enqueueReplaceState(r, r.state, null);
  }
  function Sp(n, r, o, s) {
    var d = n.stateNode;
    d.props = o, d.state = n.memoizedState, d.refs = kl, Ep(n);
    var h = r.contextType;
    typeof h == "object" && h !== null ? d.context = he(h) : (h = Wn(r) ? Mr : ir.current, d.context = _a(n, h)), d.state = n.memoizedState, h = r.getDerivedStateFromProps, typeof h == "function" && (_p(n, r, h, o), d.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function" || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (r = d.state, typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(), r !== d.state && df.enqueueReplaceState(d, d.state, null), Xs(n, o, d, s), d.state = n.memoizedState), typeof d.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function xu(n, r, o) {
    if (n = o.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (o._owner) {
        if (o = o._owner, o) {
          if (o.tag !== 1)
            throw Error(f(309));
          var s = o.stateNode;
        }
        if (!s)
          throw Error(f(147, n));
        var d = s, h = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === h ? r.ref : (r = function(S) {
          var w = d.refs;
          w === kl && (w = d.refs = {}), S === null ? delete w[h] : w[h] = S;
        }, r._stringRef = h, r);
      }
      if (typeof n != "string")
        throw Error(f(284));
      if (!o._owner)
        throw Error(f(290, n));
    }
    return n;
  }
  function Zs(n, r) {
    throw n = Object.prototype.toString.call(r), Error(f(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Ih(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Bh(n) {
    function r(j, L) {
      if (n) {
        var H = j.deletions;
        H === null ? (j.deletions = [L], j.flags |= 16) : H.push(L);
      }
    }
    function o(j, L) {
      if (!n)
        return null;
      for (; L !== null; )
        r(j, L), L = L.sibling;
      return null;
    }
    function s(j, L) {
      for (j = /* @__PURE__ */ new Map(); L !== null; )
        L.key !== null ? j.set(L.key, L) : j.set(L.index, L), L = L.sibling;
      return j;
    }
    function d(j, L) {
      return j = el(j, L), j.index = 0, j.sibling = null, j;
    }
    function h(j, L, H) {
      return j.index = H, n ? (H = j.alternate, H !== null ? (H = H.index, H < L ? (j.flags |= 2, L) : H) : (j.flags |= 2, L)) : (j.flags |= 1048576, L);
    }
    function S(j) {
      return n && j.alternate === null && (j.flags |= 2), j;
    }
    function w(j, L, H, ve) {
      return L === null || L.tag !== 6 ? (L = Gf(H, j.mode, ve), L.return = j, L) : (L = d(L, H), L.return = j, L);
    }
    function k(j, L, H, ve) {
      var He = H.type;
      return He === $e ? oe(j, L, H.props.children, ve, H.key) : L !== null && (L.elementType === He || typeof He == "object" && He !== null && He.$$typeof === lt && Ih(He) === L.type) ? (ve = d(L, H.props), ve.ref = xu(j, L, H), ve.return = j, ve) : (ve = Yf(H.type, H.key, H.props, null, j.mode, ve), ve.ref = xu(j, L, H), ve.return = j, ve);
    }
    function W(j, L, H, ve) {
      return L === null || L.tag !== 4 || L.stateNode.containerInfo !== H.containerInfo || L.stateNode.implementation !== H.implementation ? (L = yc(H, j.mode, ve), L.return = j, L) : (L = d(L, H.children || []), L.return = j, L);
    }
    function oe(j, L, H, ve, He) {
      return L === null || L.tag !== 7 ? (L = Wl(H, j.mode, ve, He), L.return = j, L) : (L = d(L, H), L.return = j, L);
    }
    function ue(j, L, H) {
      if (typeof L == "string" && L !== "" || typeof L == "number")
        return L = Gf("" + L, j.mode, H), L.return = j, L;
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case Ae:
            return H = Yf(L.type, L.key, L.props, null, j.mode, H), H.ref = xu(j, null, L), H.return = j, H;
          case ce:
            return L = yc(L, j.mode, H), L.return = j, L;
          case lt:
            var ve = L._init;
            return ue(j, ve(L._payload), H);
        }
        if (mn(L) || Se(L))
          return L = Wl(L, j.mode, H, null), L.return = j, L;
        Zs(j, L);
      }
      return null;
    }
    function ae(j, L, H, ve) {
      var He = L !== null ? L.key : null;
      if (typeof H == "string" && H !== "" || typeof H == "number")
        return He !== null ? null : w(j, L, "" + H, ve);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case Ae:
            return H.key === He ? k(j, L, H, ve) : null;
          case ce:
            return H.key === He ? W(j, L, H, ve) : null;
          case lt:
            return He = H._init, ae(
              j,
              L,
              He(H._payload),
              ve
            );
        }
        if (mn(H) || Se(H))
          return He !== null ? null : oe(j, L, H, ve, null);
        Zs(j, H);
      }
      return null;
    }
    function be(j, L, H, ve, He) {
      if (typeof ve == "string" && ve !== "" || typeof ve == "number")
        return j = j.get(H) || null, w(L, j, "" + ve, He);
      if (typeof ve == "object" && ve !== null) {
        switch (ve.$$typeof) {
          case Ae:
            return j = j.get(ve.key === null ? H : ve.key) || null, k(L, j, ve, He);
          case ce:
            return j = j.get(ve.key === null ? H : ve.key) || null, W(L, j, ve, He);
          case lt:
            var tt = ve._init;
            return be(j, L, H, tt(ve._payload), He);
        }
        if (mn(ve) || Se(ve))
          return j = j.get(H) || null, oe(L, j, ve, He, null);
        Zs(L, ve);
      }
      return null;
    }
    function Le(j, L, H, ve) {
      for (var He = null, tt = null, Me = L, nt = L = 0, tr = null; Me !== null && nt < H.length; nt++) {
        Me.index > nt ? (tr = Me, Me = null) : tr = Me.sibling;
        var Ht = ae(j, Me, H[nt], ve);
        if (Ht === null) {
          Me === null && (Me = tr);
          break;
        }
        n && Me && Ht.alternate === null && r(j, Me), L = h(Ht, L, nt), tt === null ? He = Ht : tt.sibling = Ht, tt = Ht, Me = tr;
      }
      if (nt === H.length)
        return o(j, Me), dn && Al(j, nt), He;
      if (Me === null) {
        for (; nt < H.length; nt++)
          Me = ue(j, H[nt], ve), Me !== null && (L = h(Me, L, nt), tt === null ? He = Me : tt.sibling = Me, tt = Me);
        return dn && Al(j, nt), He;
      }
      for (Me = s(j, Me); nt < H.length; nt++)
        tr = be(Me, j, nt, H[nt], ve), tr !== null && (n && tr.alternate !== null && Me.delete(tr.key === null ? nt : tr.key), L = h(tr, L, nt), tt === null ? He = tr : tt.sibling = tr, tt = tr);
      return n && Me.forEach(function(vo) {
        return r(j, vo);
      }), dn && Al(j, nt), He;
    }
    function je(j, L, H, ve) {
      var He = Se(H);
      if (typeof He != "function")
        throw Error(f(150));
      if (H = He.call(H), H == null)
        throw Error(f(151));
      for (var tt = He = null, Me = L, nt = L = 0, tr = null, Ht = H.next(); Me !== null && !Ht.done; nt++, Ht = H.next()) {
        Me.index > nt ? (tr = Me, Me = null) : tr = Me.sibling;
        var vo = ae(j, Me, Ht.value, ve);
        if (vo === null) {
          Me === null && (Me = tr);
          break;
        }
        n && Me && vo.alternate === null && r(j, Me), L = h(vo, L, nt), tt === null ? He = vo : tt.sibling = vo, tt = vo, Me = tr;
      }
      if (Ht.done)
        return o(
          j,
          Me
        ), dn && Al(j, nt), He;
      if (Me === null) {
        for (; !Ht.done; nt++, Ht = H.next())
          Ht = ue(j, Ht.value, ve), Ht !== null && (L = h(Ht, L, nt), tt === null ? He = Ht : tt.sibling = Ht, tt = Ht);
        return dn && Al(j, nt), He;
      }
      for (Me = s(j, Me); !Ht.done; nt++, Ht = H.next())
        Ht = be(Me, j, nt, Ht.value, ve), Ht !== null && (n && Ht.alternate !== null && Me.delete(Ht.key === null ? nt : Ht.key), L = h(Ht, L, nt), tt === null ? He = Ht : tt.sibling = Ht, tt = Ht);
      return n && Me.forEach(function(Jg) {
        return r(j, Jg);
      }), dn && Al(j, nt), He;
    }
    function Fn(j, L, H, ve) {
      if (typeof H == "object" && H !== null && H.type === $e && H.key === null && (H = H.props.children), typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case Ae:
            e: {
              for (var He = H.key, tt = L; tt !== null; ) {
                if (tt.key === He) {
                  if (He = H.type, He === $e) {
                    if (tt.tag === 7) {
                      o(j, tt.sibling), L = d(tt, H.props.children), L.return = j, j = L;
                      break e;
                    }
                  } else if (tt.elementType === He || typeof He == "object" && He !== null && He.$$typeof === lt && Ih(He) === tt.type) {
                    o(j, tt.sibling), L = d(tt, H.props), L.ref = xu(j, tt, H), L.return = j, j = L;
                    break e;
                  }
                  o(j, tt);
                  break;
                } else
                  r(j, tt);
                tt = tt.sibling;
              }
              H.type === $e ? (L = Wl(H.props.children, j.mode, ve, H.key), L.return = j, j = L) : (ve = Yf(H.type, H.key, H.props, null, j.mode, ve), ve.ref = xu(j, L, H), ve.return = j, j = ve);
            }
            return S(j);
          case ce:
            e: {
              for (tt = H.key; L !== null; ) {
                if (L.key === tt)
                  if (L.tag === 4 && L.stateNode.containerInfo === H.containerInfo && L.stateNode.implementation === H.implementation) {
                    o(j, L.sibling), L = d(L, H.children || []), L.return = j, j = L;
                    break e;
                  } else {
                    o(j, L);
                    break;
                  }
                else
                  r(j, L);
                L = L.sibling;
              }
              L = yc(H, j.mode, ve), L.return = j, j = L;
            }
            return S(j);
          case lt:
            return tt = H._init, Fn(j, L, tt(H._payload), ve);
        }
        if (mn(H))
          return Le(j, L, H, ve);
        if (Se(H))
          return je(j, L, H, ve);
        Zs(j, H);
      }
      return typeof H == "string" && H !== "" || typeof H == "number" ? (H = "" + H, L !== null && L.tag === 6 ? (o(j, L.sibling), L = d(L, H), L.return = j, j = L) : (o(j, L), L = Gf(H, j.mode, ve), L.return = j, j = L), S(j)) : o(j, L);
    }
    return Fn;
  }
  var Du = Bh(!0), Yh = Bh(!1), Js = {}, Oi = nn(Js), Ou = nn(Js), ec = nn(Js);
  function Go(n) {
    if (n === Js)
      throw Error(f(174));
    return n;
  }
  function Cp(n, r) {
    switch (Pt(ec, r), Pt(Ou, n), Pt(Oi, Js), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : rr(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = rr(r, n);
    }
    Pe(Oi), Pt(Oi, r);
  }
  function Au() {
    Pe(Oi), Pe(Ou), Pe(ec);
  }
  function pf(n) {
    Go(ec.current);
    var r = Go(Oi.current), o = rr(r, n.type);
    r !== o && (Pt(Ou, n), Pt(Oi, o));
  }
  function qe(n) {
    Ou.current === n && (Pe(Oi), Pe(Ou));
  }
  var Fe = nn(0);
  function jt(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var o = r.memoizedState;
        if (o !== null && (o = o.dehydrated, o === null || o.data === "$?" || o.data === "$!"))
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
  var On = [];
  function Va() {
    for (var n = 0; n < On.length; n++)
      On[n]._workInProgressVersionPrimary = null;
    On.length = 0;
  }
  var tc = de.ReactCurrentDispatcher, Tp = de.ReactCurrentBatchConfig, Nl = 0, Tn = null, jn = null, J = null, $n = !1, et = !1, Ai = 0, so = 0;
  function An() {
    throw Error(f(321));
  }
  function Ia(n, r) {
    if (r === null)
      return !1;
    for (var o = 0; o < r.length && o < n.length; o++)
      if (!si(n[o], r[o]))
        return !1;
    return !0;
  }
  function Ll(n, r, o, s, d, h) {
    if (Nl = h, Tn = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, tc.current = n === null || n.memoizedState === null ? zg : Ug, n = o(s, d), et) {
      h = 0;
      do {
        if (et = !1, Ai = 0, 25 <= h)
          throw Error(f(301));
        h += 1, J = jn = null, r.updateQueue = null, tc.current = jg, n = o(s, d);
      } while (et);
    }
    if (tc.current = xf, r = jn !== null && jn.next !== null, Nl = 0, J = jn = Tn = null, $n = !1, r)
      throw Error(f(300));
    return n;
  }
  function Ko() {
    var n = Ai !== 0;
    return Ai = 0, n;
  }
  function ra() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return J === null ? Tn.memoizedState = J = n : J = J.next = n, J;
  }
  function aa() {
    if (jn === null) {
      var n = Tn.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = jn.next;
    var r = J === null ? Tn.memoizedState : J.next;
    if (r !== null)
      J = r, jn = n;
    else {
      if (n === null)
        throw Error(f(310));
      jn = n, n = { memoizedState: jn.memoizedState, baseState: jn.baseState, baseQueue: jn.baseQueue, queue: jn.queue, next: null }, J === null ? Tn.memoizedState = J = n : J = J.next = n;
    }
    return J;
  }
  function Ml(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function nc(n) {
    var r = aa(), o = r.queue;
    if (o === null)
      throw Error(f(311));
    o.lastRenderedReducer = n;
    var s = jn, d = s.baseQueue, h = o.pending;
    if (h !== null) {
      if (d !== null) {
        var S = d.next;
        d.next = h.next, h.next = S;
      }
      s.baseQueue = d = h, o.pending = null;
    }
    if (d !== null) {
      h = d.next, s = s.baseState;
      var w = S = null, k = null, W = h;
      do {
        var oe = W.lane;
        if ((Nl & oe) === oe)
          k !== null && (k = k.next = { lane: 0, action: W.action, hasEagerState: W.hasEagerState, eagerState: W.eagerState, next: null }), s = W.hasEagerState ? W.eagerState : n(s, W.action);
        else {
          var ue = {
            lane: oe,
            action: W.action,
            hasEagerState: W.hasEagerState,
            eagerState: W.eagerState,
            next: null
          };
          k === null ? (w = k = ue, S = s) : k = k.next = ue, Tn.lanes |= oe, Vl |= oe;
        }
        W = W.next;
      } while (W !== null && W !== h);
      k === null ? S = s : k.next = w, si(s, r.memoizedState) || (ia = !0), r.memoizedState = s, r.baseState = S, r.baseQueue = k, o.lastRenderedState = s;
    }
    if (n = o.interleaved, n !== null) {
      d = n;
      do
        h = d.lane, Tn.lanes |= h, Vl |= h, d = d.next;
      while (d !== n);
    } else
      d === null && (o.lanes = 0);
    return [r.memoizedState, o.dispatch];
  }
  function rc(n) {
    var r = aa(), o = r.queue;
    if (o === null)
      throw Error(f(311));
    o.lastRenderedReducer = n;
    var s = o.dispatch, d = o.pending, h = r.memoizedState;
    if (d !== null) {
      o.pending = null;
      var S = d = d.next;
      do
        h = n(h, S.action), S = S.next;
      while (S !== d);
      si(h, r.memoizedState) || (ia = !0), r.memoizedState = h, r.baseQueue === null && (r.baseState = h), o.lastRenderedState = h;
    }
    return [h, s];
  }
  function vf() {
  }
  function hf(n, r) {
    var o = Tn, s = aa(), d = r(), h = !si(s.memoizedState, d);
    if (h && (s.memoizedState = d, ia = !0), s = s.queue, ac(gf.bind(null, o, s, n), [n]), s.getSnapshot !== r || h || J !== null && J.memoizedState.tag & 1) {
      if (o.flags |= 2048, zl(9, yf.bind(null, o, s, d, r), void 0, null), Nn === null)
        throw Error(f(349));
      Nl & 30 || mf(o, r, d);
    }
    return d;
  }
  function mf(n, r, o) {
    n.flags |= 16384, n = { getSnapshot: r, value: o }, r = Tn.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Tn.updateQueue = r, r.stores = [n]) : (o = r.stores, o === null ? r.stores = [n] : o.push(n));
  }
  function yf(n, r, o, s) {
    r.value = o, r.getSnapshot = s, Ef(r) && _f(n);
  }
  function gf(n, r, o) {
    return o(function() {
      Ef(r) && _f(n);
    });
  }
  function Ef(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var o = r();
      return !si(n, o);
    } catch {
      return !0;
    }
  }
  function _f(n) {
    var r = uo(n, 1);
    r !== null && bn(r, n, 1, -1);
  }
  function Sf(n) {
    var r = ra();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ml, lastRenderedState: n }, r.queue = n, n = n.dispatch = Rf.bind(null, Tn, n), [r.memoizedState, n];
  }
  function zl(n, r, o, s) {
    return n = { tag: n, create: r, destroy: o, deps: s, next: null }, r = Tn.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Tn.updateQueue = r, r.lastEffect = n.next = n) : (o = r.lastEffect, o === null ? r.lastEffect = n.next = n : (s = o.next, o.next = n, n.next = s, r.lastEffect = n)), n;
  }
  function Cf() {
    return aa().memoizedState;
  }
  function ku(n, r, o, s) {
    var d = ra();
    Tn.flags |= n, d.memoizedState = zl(1 | r, o, void 0, s === void 0 ? null : s);
  }
  function Ul(n, r, o, s) {
    var d = aa();
    s = s === void 0 ? null : s;
    var h = void 0;
    if (jn !== null) {
      var S = jn.memoizedState;
      if (h = S.destroy, s !== null && Ia(s, S.deps)) {
        d.memoizedState = zl(r, o, h, s);
        return;
      }
    }
    Tn.flags |= n, d.memoizedState = zl(1 | r, o, h, s);
  }
  function jl(n, r) {
    return ku(8390656, 8, n, r);
  }
  function ac(n, r) {
    return Ul(2048, 8, n, r);
  }
  function Tf(n, r) {
    return Ul(4, 2, n, r);
  }
  function bf(n, r) {
    return Ul(4, 4, n, r);
  }
  function wf(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function bp(n, r, o) {
    return o = o != null ? o.concat([n]) : null, Ul(4, 4, wf.bind(null, r, n), o);
  }
  function $l() {
  }
  function wp(n, r) {
    var o = aa();
    r = r === void 0 ? null : r;
    var s = o.memoizedState;
    return s !== null && r !== null && Ia(r, s[1]) ? s[0] : (o.memoizedState = [n, r], n);
  }
  function Nu(n, r) {
    var o = aa();
    r = r === void 0 ? null : r;
    var s = o.memoizedState;
    return s !== null && r !== null && Ia(r, s[1]) ? s[0] : (n = n(), o.memoizedState = [n, r], n);
  }
  function Qo(n, r, o) {
    return Nl & 21 ? (si(o, r) || (o = El(), Tn.lanes |= o, Vl |= o, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, ia = !0), n.memoizedState = o);
  }
  function ba(n, r) {
    var o = At;
    At = o !== 0 && 4 > o ? o : 4, n(!0);
    var s = Tp.transition;
    Tp.transition = {};
    try {
      n(!1), r();
    } finally {
      At = o, Tp.transition = s;
    }
  }
  function Wh() {
    return aa().memoizedState;
  }
  function sn(n, r, o) {
    var s = po(n);
    if (o = { lane: s, action: o, hasEagerState: !1, eagerState: null, next: null }, ic(n))
      Lu(r, o);
    else if (o = jh(n, r, o, s), o !== null) {
      var d = ur();
      bn(o, n, s, d), oc(o, r, s);
    }
  }
  function Rf(n, r, o) {
    var s = po(n), d = { lane: s, action: o, hasEagerState: !1, eagerState: null, next: null };
    if (ic(n))
      Lu(r, d);
    else {
      var h = n.alternate;
      if (n.lanes === 0 && (h === null || h.lanes === 0) && (h = r.lastRenderedReducer, h !== null))
        try {
          var S = r.lastRenderedState, w = h(S, o);
          if (d.hasEagerState = !0, d.eagerState = w, si(w, S)) {
            var k = r.interleaved;
            k === null ? (d.next = d, Ta(r)) : (d.next = k.next, k.next = d), r.interleaved = d;
            return;
          }
        } catch {
        } finally {
        }
      o = jh(n, r, d, s), o !== null && (d = ur(), bn(o, n, s, d), oc(o, r, s));
    }
  }
  function ic(n) {
    var r = n.alternate;
    return n === Tn || r !== null && r === Tn;
  }
  function Lu(n, r) {
    et = $n = !0;
    var o = n.pending;
    o === null ? r.next = r : (r.next = o.next, o.next = r), n.pending = r;
  }
  function oc(n, r, o) {
    if (o & 4194240) {
      var s = r.lanes;
      s &= n.pendingLanes, o |= s, r.lanes = o, xs(n, o);
    }
  }
  var xf = { readContext: he, useCallback: An, useContext: An, useEffect: An, useImperativeHandle: An, useInsertionEffect: An, useLayoutEffect: An, useMemo: An, useReducer: An, useRef: An, useState: An, useDebugValue: An, useDeferredValue: An, useTransition: An, useMutableSource: An, useSyncExternalStore: An, useId: An, unstable_isNewReconciler: !1 }, zg = { readContext: he, useCallback: function(n, r) {
    return ra().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: he, useEffect: jl, useImperativeHandle: function(n, r, o) {
    return o = o != null ? o.concat([n]) : null, ku(
      4194308,
      4,
      wf.bind(null, r, n),
      o
    );
  }, useLayoutEffect: function(n, r) {
    return ku(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return ku(4, 2, n, r);
  }, useMemo: function(n, r) {
    var o = ra();
    return r = r === void 0 ? null : r, n = n(), o.memoizedState = [n, r], n;
  }, useReducer: function(n, r, o) {
    var s = ra();
    return r = o !== void 0 ? o(r) : r, s.memoizedState = s.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, s.queue = n, n = n.dispatch = sn.bind(null, Tn, n), [s.memoizedState, n];
  }, useRef: function(n) {
    var r = ra();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Sf, useDebugValue: $l, useDeferredValue: function(n) {
    return ra().memoizedState = n;
  }, useTransition: function() {
    var n = Sf(!1), r = n[0];
    return n = ba.bind(null, n[1]), ra().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, o) {
    var s = Tn, d = ra();
    if (dn) {
      if (o === void 0)
        throw Error(f(407));
      o = o();
    } else {
      if (o = r(), Nn === null)
        throw Error(f(349));
      Nl & 30 || mf(s, r, o);
    }
    d.memoizedState = o;
    var h = { value: o, getSnapshot: r };
    return d.queue = h, jl(gf.bind(
      null,
      s,
      h,
      n
    ), [n]), s.flags |= 2048, zl(9, yf.bind(null, s, h, o, r), void 0, null), o;
  }, useId: function() {
    var n = ra(), r = Nn.identifierPrefix;
    if (dn) {
      var o = pr, s = ta;
      o = (s & ~(1 << 32 - Lr(s) - 1)).toString(32) + o, r = ":" + r + "R" + o, o = Ai++, 0 < o && (r += "H" + o.toString(32)), r += ":";
    } else
      o = so++, r = ":" + r + "r" + o.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Ug = {
    readContext: he,
    useCallback: wp,
    useContext: he,
    useEffect: ac,
    useImperativeHandle: bp,
    useInsertionEffect: Tf,
    useLayoutEffect: bf,
    useMemo: Nu,
    useReducer: nc,
    useRef: Cf,
    useState: function() {
      return nc(Ml);
    },
    useDebugValue: $l,
    useDeferredValue: function(n) {
      var r = aa();
      return Qo(r, jn.memoizedState, n);
    },
    useTransition: function() {
      var n = nc(Ml)[0], r = aa().memoizedState;
      return [n, r];
    },
    useMutableSource: vf,
    useSyncExternalStore: hf,
    useId: Wh,
    unstable_isNewReconciler: !1
  }, jg = { readContext: he, useCallback: wp, useContext: he, useEffect: ac, useImperativeHandle: bp, useInsertionEffect: Tf, useLayoutEffect: bf, useMemo: Nu, useReducer: rc, useRef: Cf, useState: function() {
    return rc(Ml);
  }, useDebugValue: $l, useDeferredValue: function(n) {
    var r = aa();
    return jn === null ? r.memoizedState = n : Qo(r, jn.memoizedState, n);
  }, useTransition: function() {
    var n = rc(Ml)[0], r = aa().memoizedState;
    return [n, r];
  }, useMutableSource: vf, useSyncExternalStore: hf, useId: Wh, unstable_isNewReconciler: !1 };
  function qo(n, r) {
    try {
      var o = "", s = r;
      do
        o += ct(s), s = s.return;
      while (s);
      var d = o;
    } catch (h) {
      d = `
Error generating stack: ` + h.message + `
` + h.stack;
    }
    return { value: n, source: r, stack: d, digest: null };
  }
  function Rp(n, r, o) {
    return { value: n, source: null, stack: o ?? null, digest: r ?? null };
  }
  function lc(n, r) {
    try {
      console.error(r.value);
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  var Gh = typeof WeakMap == "function" ? WeakMap : Map;
  function Kh(n, r, o) {
    o = un(-1, o), o.tag = 3, o.payload = { element: null };
    var s = r.value;
    return o.callback = function() {
      Pf || (Pf = !0, zp = s), lc(n, r);
    }, o;
  }
  function Qh(n, r, o) {
    o = un(-1, o), o.tag = 3;
    var s = n.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var d = r.value;
      o.payload = function() {
        return s(d);
      }, o.callback = function() {
        lc(n, r);
      };
    }
    var h = n.stateNode;
    return h !== null && typeof h.componentDidCatch == "function" && (o.callback = function() {
      lc(n, r), typeof s != "function" && (Wa === null ? Wa = /* @__PURE__ */ new Set([this]) : Wa.add(this));
      var S = r.stack;
      this.componentDidCatch(r.value, { componentStack: S !== null ? S : "" });
    }), o;
  }
  function uc(n, r, o) {
    var s = n.pingCache;
    if (s === null) {
      s = n.pingCache = new Gh();
      var d = /* @__PURE__ */ new Set();
      s.set(r, d);
    } else
      d = s.get(r), d === void 0 && (d = /* @__PURE__ */ new Set(), s.set(r, d));
    d.has(o) || (d.add(o), n = Gg.bind(null, n, r, o), r.then(n, n));
  }
  function qh(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function xp(n, r, o, s, d) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = d, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (r = un(-1, 1), r.tag = 2, Wo(o, r, 1))), o.lanes |= 1), n);
  }
  var Xh = de.ReactCurrentOwner, ia = !1;
  function Pn(n, r, o, s) {
    r.child = n === null ? Yh(r, null, o, s) : Du(r, n.child, o, s);
  }
  function Mu(n, r, o, s, d) {
    o = o.render;
    var h = r.ref;
    return Un(r, d), s = Ll(n, r, o, s, h, d), o = Ko(), n !== null && !ia ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~d, Hn(n, r, d)) : (dn && o && lf(r), r.flags |= 1, Pn(n, r, s, d), r.child);
  }
  function Xo(n, r, o, s, d) {
    if (n === null) {
      var h = o.type;
      return typeof h == "function" && !Hp(h) && h.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (r.tag = 15, r.type = h, Df(n, r, h, s, d)) : (n = Yf(o.type, null, s, r, r.mode, d), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (h = n.child, !(n.lanes & d)) {
      var S = h.memoizedProps;
      if (o = o.compare, o = o !== null ? o : Eu, o(S, s) && n.ref === r.ref)
        return Hn(n, r, d);
    }
    return r.flags |= 1, n = el(h, s), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Df(n, r, o, s, d) {
    if (n !== null) {
      var h = n.memoizedProps;
      if (Eu(h, s) && n.ref === r.ref)
        if (ia = !1, r.pendingProps = s = h, (n.lanes & d) !== 0)
          n.flags & 131072 && (ia = !0);
        else
          return r.lanes = n.lanes, Hn(n, r, d);
    }
    return yt(n, r, o, s, d);
  }
  function oa(n, r, o) {
    var s = r.pendingProps, d = s.children, h = n !== null ? n.memoizedState : null;
    if (s.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Pt(Bu, la), la |= o;
      else {
        if (!(o & 1073741824))
          return n = h !== null ? h.baseLanes | o : o, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Pt(Bu, la), la |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, s = h !== null ? h.baseLanes : o, Pt(Bu, la), la |= s;
      }
    else
      h !== null ? (s = h.baseLanes | o, r.memoizedState = null) : s = o, Pt(Bu, la), la |= s;
    return Pn(n, r, d, o), r.child;
  }
  function Pl(n, r) {
    var o = r.ref;
    (n === null && o !== null || n !== null && n.ref !== o) && (r.flags |= 512, r.flags |= 2097152);
  }
  function yt(n, r, o, s, d) {
    var h = Wn(o) ? Mr : ir.current;
    return h = _a(r, h), Un(r, d), o = Ll(n, r, o, s, h, d), s = Ko(), n !== null && !ia ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~d, Hn(n, r, d)) : (dn && s && lf(r), r.flags |= 1, Pn(n, r, o, d), r.child);
  }
  function sc(n, r, o, s, d) {
    if (Wn(o)) {
      var h = !0;
      Dl(r);
    } else
      h = !1;
    if (Un(r, d), r.stateNode === null)
      fc(n, r), Fh(r, o, s), Sp(r, o, s, d), s = !0;
    else if (n === null) {
      var S = r.stateNode, w = r.memoizedProps;
      S.props = w;
      var k = S.context, W = o.contextType;
      typeof W == "object" && W !== null ? W = he(W) : (W = Wn(o) ? Mr : ir.current, W = _a(r, W));
      var oe = o.getDerivedStateFromProps, ue = typeof oe == "function" || typeof S.getSnapshotBeforeUpdate == "function";
      ue || typeof S.UNSAFE_componentWillReceiveProps != "function" && typeof S.componentWillReceiveProps != "function" || (w !== s || k !== W) && Vh(r, S, s, W), Yo = !1;
      var ae = r.memoizedState;
      S.state = ae, Xs(r, s, S, d), k = r.memoizedState, w !== s || ae !== k || pt.current || Yo ? (typeof oe == "function" && (_p(r, o, oe, s), k = r.memoizedState), (w = Yo || Hh(r, o, w, s, ae, k, W)) ? (ue || typeof S.UNSAFE_componentWillMount != "function" && typeof S.componentWillMount != "function" || (typeof S.componentWillMount == "function" && S.componentWillMount(), typeof S.UNSAFE_componentWillMount == "function" && S.UNSAFE_componentWillMount()), typeof S.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof S.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = s, r.memoizedState = k), S.props = s, S.state = k, S.context = W, s = w) : (typeof S.componentDidMount == "function" && (r.flags |= 4194308), s = !1);
    } else {
      S = r.stateNode, $h(n, r), w = r.memoizedProps, W = r.type === r.elementType ? w : na(r.type, w), S.props = W, ue = r.pendingProps, ae = S.context, k = o.contextType, typeof k == "object" && k !== null ? k = he(k) : (k = Wn(o) ? Mr : ir.current, k = _a(r, k));
      var be = o.getDerivedStateFromProps;
      (oe = typeof be == "function" || typeof S.getSnapshotBeforeUpdate == "function") || typeof S.UNSAFE_componentWillReceiveProps != "function" && typeof S.componentWillReceiveProps != "function" || (w !== ue || ae !== k) && Vh(r, S, s, k), Yo = !1, ae = r.memoizedState, S.state = ae, Xs(r, s, S, d);
      var Le = r.memoizedState;
      w !== ue || ae !== Le || pt.current || Yo ? (typeof be == "function" && (_p(r, o, be, s), Le = r.memoizedState), (W = Yo || Hh(r, o, W, s, ae, Le, k) || !1) ? (oe || typeof S.UNSAFE_componentWillUpdate != "function" && typeof S.componentWillUpdate != "function" || (typeof S.componentWillUpdate == "function" && S.componentWillUpdate(s, Le, k), typeof S.UNSAFE_componentWillUpdate == "function" && S.UNSAFE_componentWillUpdate(s, Le, k)), typeof S.componentDidUpdate == "function" && (r.flags |= 4), typeof S.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof S.componentDidUpdate != "function" || w === n.memoizedProps && ae === n.memoizedState || (r.flags |= 4), typeof S.getSnapshotBeforeUpdate != "function" || w === n.memoizedProps && ae === n.memoizedState || (r.flags |= 1024), r.memoizedProps = s, r.memoizedState = Le), S.props = s, S.state = Le, S.context = k, s = W) : (typeof S.componentDidUpdate != "function" || w === n.memoizedProps && ae === n.memoizedState || (r.flags |= 4), typeof S.getSnapshotBeforeUpdate != "function" || w === n.memoizedProps && ae === n.memoizedState || (r.flags |= 1024), s = !1);
    }
    return Of(n, r, o, s, h, d);
  }
  function Of(n, r, o, s, d, h) {
    Pl(n, r);
    var S = (r.flags & 128) !== 0;
    if (!s && !S)
      return d && Mh(r, o, !1), Hn(n, r, h);
    s = r.stateNode, Xh.current = r;
    var w = S && typeof o.getDerivedStateFromError != "function" ? null : s.render();
    return r.flags |= 1, n !== null && S ? (r.child = Du(r, n.child, null, h), r.child = Du(r, null, w, h)) : Pn(n, r, w, h), r.memoizedState = s.state, d && Mh(r, o, !0), r.child;
  }
  function $g(n) {
    var r = n.stateNode;
    r.pendingContext ? Ri(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Ri(n, r.context, !1), Cp(n, r.containerInfo);
  }
  function Zh(n, r, o, s, d) {
    return Tu(), Gn(d), r.flags |= 256, Pn(n, r, o, s), r.child;
  }
  var cc = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Hl(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Jh(n, r, o) {
    var s = r.pendingProps, d = Fe.current, h = !1, S = (r.flags & 128) !== 0, w;
    if ((w = S) || (w = n !== null && n.memoizedState === null ? !1 : (d & 2) !== 0), w ? (h = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (d |= 1), Pt(Fe, d & 1), n === null)
      return sf(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (S = s.children, n = s.fallback, h ? (s = r.mode, h = r.child, S = { mode: "hidden", children: S }, !(s & 1) && h !== null ? (h.childLanes = 0, h.pendingProps = S) : h = Wf(S, s, 0, null), n = Wl(n, s, o, null), h.return = r, n.return = r, h.sibling = n, r.child = h, r.child.memoizedState = Hl(o), r.memoizedState = cc, n) : Af(r, S));
    if (d = n.memoizedState, d !== null && (w = d.dehydrated, w !== null))
      return Dp(n, r, S, s, w, d, o);
    if (h) {
      h = s.fallback, S = r.mode, d = n.child, w = d.sibling;
      var k = { mode: "hidden", children: s.children };
      return !(S & 1) && r.child !== d ? (s = r.child, s.childLanes = 0, s.pendingProps = k, r.deletions = null) : (s = el(d, k), s.subtreeFlags = d.subtreeFlags & 14680064), w !== null ? h = el(w, h) : (h = Wl(h, S, o, null), h.flags |= 2), h.return = r, s.return = r, s.sibling = h, r.child = s, s = h, h = r.child, S = n.child.memoizedState, S = S === null ? Hl(o) : { baseLanes: S.baseLanes | o, cachePool: null, transitions: S.transitions }, h.memoizedState = S, h.childLanes = n.childLanes & ~o, r.memoizedState = cc, s;
    }
    return h = n.child, n = h.sibling, s = el(h, { mode: "visible", children: s.children }), !(r.mode & 1) && (s.lanes = o), s.return = r, s.sibling = null, n !== null && (o = r.deletions, o === null ? (r.deletions = [n], r.flags |= 16) : o.push(n)), r.child = s, r.memoizedState = null, s;
  }
  function Af(n, r) {
    return r = Wf({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function kf(n, r, o, s) {
    return s !== null && Gn(s), Du(r, n.child, null, o), n = Af(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Dp(n, r, o, s, d, h, S) {
    if (o)
      return r.flags & 256 ? (r.flags &= -257, s = Rp(Error(f(422))), kf(n, r, S, s)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (h = s.fallback, d = r.mode, s = Wf({ mode: "visible", children: s.children }, d, 0, null), h = Wl(h, d, S, null), h.flags |= 2, s.return = r, h.return = r, s.sibling = h, r.child = s, r.mode & 1 && Du(r, n.child, null, S), r.child.memoizedState = Hl(S), r.memoizedState = cc, h);
    if (!(r.mode & 1))
      return kf(n, r, S, null);
    if (d.data === "$!") {
      if (s = d.nextSibling && d.nextSibling.dataset, s)
        var w = s.dgst;
      return s = w, h = Error(f(419)), s = Rp(h, s, void 0), kf(n, r, S, s);
    }
    if (w = (S & n.childLanes) !== 0, ia || w) {
      if (s = Nn, s !== null) {
        switch (S & -S) {
          case 4:
            d = 2;
            break;
          case 16:
            d = 8;
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
            d = 32;
            break;
          case 536870912:
            d = 268435456;
            break;
          default:
            d = 0;
        }
        d = d & (s.suspendedLanes | S) ? 0 : d, d !== 0 && d !== h.retryLane && (h.retryLane = d, uo(n, d), bn(s, n, d, -1));
      }
      return mc(), s = Rp(Error(f(421))), kf(n, r, S, s);
    }
    return d.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Pp.bind(null, n), d._reactRetry = r, null) : (n = h.treeContext, Ca = Ea(d.nextSibling), Sa = r, dn = !0, Fa = null, n !== null && (Jr[ea++] = ta, Jr[ea++] = pr, Jr[ea++] = di, ta = n.id, pr = n.overflow, di = r), r = Af(r, s.children), r.flags |= 4096, r);
  }
  function em(n, r, o) {
    n.lanes |= r;
    var s = n.alternate;
    s !== null && (s.lanes |= r), Bo(n.return, r, o);
  }
  function Nf(n, r, o, s, d) {
    var h = n.memoizedState;
    h === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: s, tail: o, tailMode: d } : (h.isBackwards = r, h.rendering = null, h.renderingStartTime = 0, h.last = s, h.tail = o, h.tailMode = d);
  }
  function Op(n, r, o) {
    var s = r.pendingProps, d = s.revealOrder, h = s.tail;
    if (Pn(n, r, s.children, o), s = Fe.current, s & 2)
      s = s & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && em(n, o, r);
            else if (n.tag === 19)
              em(n, o, r);
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
      s &= 1;
    }
    if (Pt(Fe, s), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (d) {
        case "forwards":
          for (o = r.child, d = null; o !== null; )
            n = o.alternate, n !== null && jt(n) === null && (d = o), o = o.sibling;
          o = d, o === null ? (d = r.child, r.child = null) : (d = o.sibling, o.sibling = null), Nf(r, !1, d, o, h);
          break;
        case "backwards":
          for (o = null, d = r.child, r.child = null; d !== null; ) {
            if (n = d.alternate, n !== null && jt(n) === null) {
              r.child = d;
              break;
            }
            n = d.sibling, d.sibling = o, o = d, d = n;
          }
          Nf(r, !0, o, null, h);
          break;
        case "together":
          Nf(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function fc(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Hn(n, r, o) {
    if (n !== null && (r.dependencies = n.dependencies), Vl |= r.lanes, !(o & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(f(153));
    if (r.child !== null) {
      for (n = r.child, o = el(n, n.pendingProps), r.child = o, o.return = r; n.sibling !== null; )
        n = n.sibling, o = o.sibling = el(n, n.pendingProps), o.return = r;
      o.sibling = null;
    }
    return r.child;
  }
  function co(n, r, o) {
    switch (r.tag) {
      case 3:
        $g(r), Tu();
        break;
      case 5:
        pf(r);
        break;
      case 1:
        Wn(r.type) && Dl(r);
        break;
      case 4:
        Cp(r, r.stateNode.containerInfo);
        break;
      case 10:
        var s = r.type._context, d = r.memoizedProps.value;
        Pt(bu, s._currentValue), s._currentValue = d;
        break;
      case 13:
        if (s = r.memoizedState, s !== null)
          return s.dehydrated !== null ? (Pt(Fe, Fe.current & 1), r.flags |= 128, null) : o & r.child.childLanes ? Jh(n, r, o) : (Pt(Fe, Fe.current & 1), n = Hn(n, r, o), n !== null ? n.sibling : null);
        Pt(Fe, Fe.current & 1);
        break;
      case 19:
        if (s = (o & r.childLanes) !== 0, n.flags & 128) {
          if (s)
            return Op(n, r, o);
          r.flags |= 128;
        }
        if (d = r.memoizedState, d !== null && (d.rendering = null, d.tail = null, d.lastEffect = null), Pt(Fe, Fe.current), s)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, oa(n, r, o);
    }
    return Hn(n, r, o);
  }
  var ki, zu, Uu, Ba;
  ki = function(n, r) {
    for (var o = r.child; o !== null; ) {
      if (o.tag === 5 || o.tag === 6)
        n.appendChild(o.stateNode);
      else if (o.tag !== 4 && o.child !== null) {
        o.child.return = o, o = o.child;
        continue;
      }
      if (o === r)
        break;
      for (; o.sibling === null; ) {
        if (o.return === null || o.return === r)
          return;
        o = o.return;
      }
      o.sibling.return = o.return, o = o.sibling;
    }
  }, zu = function() {
  }, Uu = function(n, r, o, s) {
    var d = n.memoizedProps;
    if (d !== s) {
      n = r.stateNode, Go(Oi.current);
      var h = null;
      switch (o) {
        case "input":
          d = hn(n, d), s = hn(n, s), h = [];
          break;
        case "select":
          d = A({}, d, { value: void 0 }), s = A({}, s, { value: void 0 }), h = [];
          break;
        case "textarea":
          d = br(n, d), s = br(n, s), h = [];
          break;
        default:
          typeof d.onClick != "function" && typeof s.onClick == "function" && (n.onclick = rf);
      }
      $t(o, s);
      var S;
      o = null;
      for (W in d)
        if (!s.hasOwnProperty(W) && d.hasOwnProperty(W) && d[W] != null)
          if (W === "style") {
            var w = d[W];
            for (S in w)
              w.hasOwnProperty(S) && (o || (o = {}), o[S] = "");
          } else
            W !== "dangerouslySetInnerHTML" && W !== "children" && W !== "suppressContentEditableWarning" && W !== "suppressHydrationWarning" && W !== "autoFocus" && (T.hasOwnProperty(W) ? h || (h = []) : (h = h || []).push(W, null));
      for (W in s) {
        var k = s[W];
        if (w = d != null ? d[W] : void 0, s.hasOwnProperty(W) && k !== w && (k != null || w != null))
          if (W === "style")
            if (w) {
              for (S in w)
                !w.hasOwnProperty(S) || k && k.hasOwnProperty(S) || (o || (o = {}), o[S] = "");
              for (S in k)
                k.hasOwnProperty(S) && w[S] !== k[S] && (o || (o = {}), o[S] = k[S]);
            } else
              o || (h || (h = []), h.push(
                W,
                o
              )), o = k;
          else
            W === "dangerouslySetInnerHTML" ? (k = k ? k.__html : void 0, w = w ? w.__html : void 0, k != null && w !== k && (h = h || []).push(W, k)) : W === "children" ? typeof k != "string" && typeof k != "number" || (h = h || []).push(W, "" + k) : W !== "suppressContentEditableWarning" && W !== "suppressHydrationWarning" && (T.hasOwnProperty(W) ? (k != null && W === "onScroll" && tn("scroll", n), h || w === k || (h = [])) : (h = h || []).push(W, k));
      }
      o && (h = h || []).push("style", o);
      var W = h;
      (r.updateQueue = W) && (r.flags |= 4);
    }
  }, Ba = function(n, r, o, s) {
    o !== s && (r.flags |= 4);
  };
  function kn(n, r) {
    if (!dn)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var o = null; r !== null; )
            r.alternate !== null && (o = r), r = r.sibling;
          o === null ? n.tail = null : o.sibling = null;
          break;
        case "collapsed":
          o = n.tail;
          for (var s = null; o !== null; )
            o.alternate !== null && (s = o), o = o.sibling;
          s === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : s.sibling = null;
      }
  }
  function kr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, o = 0, s = 0;
    if (r)
      for (var d = n.child; d !== null; )
        o |= d.lanes | d.childLanes, s |= d.subtreeFlags & 14680064, s |= d.flags & 14680064, d.return = n, d = d.sibling;
    else
      for (d = n.child; d !== null; )
        o |= d.lanes | d.childLanes, s |= d.subtreeFlags, s |= d.flags, d.return = n, d = d.sibling;
    return n.subtreeFlags |= s, n.childLanes = o, r;
  }
  function Pg(n, r, o) {
    var s = r.pendingProps;
    switch (uf(r), r.tag) {
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
        return kr(r), null;
      case 1:
        return Wn(r.type) && Zr(), kr(r), null;
      case 3:
        return s = r.stateNode, Au(), Pe(pt), Pe(ir), Va(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), (n === null || n.child === null) && (cf(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Fa !== null && (Up(Fa), Fa = null))), zu(n, r), kr(r), null;
      case 5:
        qe(r);
        var d = Go(ec.current);
        if (o = r.type, n !== null && r.stateNode != null)
          Uu(n, r, o, s, d), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!s) {
            if (r.stateNode === null)
              throw Error(f(166));
            return kr(r), null;
          }
          if (n = Go(Oi.current), cf(r)) {
            s = r.stateNode, o = r.type;
            var h = r.memoizedProps;
            switch (s[ja] = r, s[Qs] = h, n = (r.mode & 1) !== 0, o) {
              case "dialog":
                tn("cancel", s), tn("close", s);
                break;
              case "iframe":
              case "object":
              case "embed":
                tn("load", s);
                break;
              case "video":
              case "audio":
                for (d = 0; d < ro.length; d++)
                  tn(ro[d], s);
                break;
              case "source":
                tn("error", s);
                break;
              case "img":
              case "image":
              case "link":
                tn(
                  "error",
                  s
                ), tn("load", s);
                break;
              case "details":
                tn("toggle", s);
                break;
              case "input":
                Xn(s, h), tn("invalid", s);
                break;
              case "select":
                s._wrapperState = { wasMultiple: !!h.multiple }, tn("invalid", s);
                break;
              case "textarea":
                wr(s, h), tn("invalid", s);
            }
            $t(o, h), d = null;
            for (var S in h)
              if (h.hasOwnProperty(S)) {
                var w = h[S];
                S === "children" ? typeof w == "string" ? s.textContent !== w && (h.suppressHydrationWarning !== !0 && Ys(s.textContent, w, n), d = ["children", w]) : typeof w == "number" && s.textContent !== "" + w && (h.suppressHydrationWarning !== !0 && Ys(
                  s.textContent,
                  w,
                  n
                ), d = ["children", "" + w]) : T.hasOwnProperty(S) && w != null && S === "onScroll" && tn("scroll", s);
              }
            switch (o) {
              case "input":
                Mn(s), xn(s, h, !0);
                break;
              case "textarea":
                Mn(s), Rr(s);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof h.onClick == "function" && (s.onclick = rf);
            }
            s = d, r.updateQueue = s, s !== null && (r.flags |= 4);
          } else {
            S = d.nodeType === 9 ? d : d.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Bn(o)), n === "http://www.w3.org/1999/xhtml" ? o === "script" ? (n = S.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof s.is == "string" ? n = S.createElement(o, { is: s.is }) : (n = S.createElement(o), o === "select" && (S = n, s.multiple ? S.multiple = !0 : s.size && (S.size = s.size))) : n = S.createElementNS(n, o), n[ja] = r, n[Qs] = s, ki(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (S = zn(o, s), o) {
                case "dialog":
                  tn("cancel", n), tn("close", n), d = s;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  tn("load", n), d = s;
                  break;
                case "video":
                case "audio":
                  for (d = 0; d < ro.length; d++)
                    tn(ro[d], n);
                  d = s;
                  break;
                case "source":
                  tn("error", n), d = s;
                  break;
                case "img":
                case "image":
                case "link":
                  tn(
                    "error",
                    n
                  ), tn("load", n), d = s;
                  break;
                case "details":
                  tn("toggle", n), d = s;
                  break;
                case "input":
                  Xn(n, s), d = hn(n, s), tn("invalid", n);
                  break;
                case "option":
                  d = s;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!s.multiple }, d = A({}, s, { value: void 0 }), tn("invalid", n);
                  break;
                case "textarea":
                  wr(n, s), d = br(n, s), tn("invalid", n);
                  break;
                default:
                  d = s;
              }
              $t(o, d), w = d;
              for (h in w)
                if (w.hasOwnProperty(h)) {
                  var k = w[h];
                  h === "style" ? Tt(n, k) : h === "dangerouslySetInnerHTML" ? (k = k ? k.__html : void 0, k != null && va(n, k)) : h === "children" ? typeof k == "string" ? (o !== "textarea" || k !== "") && ha(n, k) : typeof k == "number" && ha(n, "" + k) : h !== "suppressContentEditableWarning" && h !== "suppressHydrationWarning" && h !== "autoFocus" && (T.hasOwnProperty(h) ? k != null && h === "onScroll" && tn("scroll", n) : k != null && Re(n, h, k, S));
                }
              switch (o) {
                case "input":
                  Mn(n), xn(n, s, !1);
                  break;
                case "textarea":
                  Mn(n), Rr(n);
                  break;
                case "option":
                  s.value != null && n.setAttribute("value", "" + ut(s.value));
                  break;
                case "select":
                  n.multiple = !!s.multiple, h = s.value, h != null ? yn(n, !!s.multiple, h, !1) : s.defaultValue != null && yn(
                    n,
                    !!s.multiple,
                    s.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof d.onClick == "function" && (n.onclick = rf);
              }
              switch (o) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  s = !!s.autoFocus;
                  break e;
                case "img":
                  s = !0;
                  break e;
                default:
                  s = !1;
              }
            }
            s && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return kr(r), null;
      case 6:
        if (n && r.stateNode != null)
          Ba(n, r, n.memoizedProps, s);
        else {
          if (typeof s != "string" && r.stateNode === null)
            throw Error(f(166));
          if (o = Go(ec.current), Go(Oi.current), cf(r)) {
            if (s = r.stateNode, o = r.memoizedProps, s[ja] = r, (h = s.nodeValue !== o) && (n = Sa, n !== null))
              switch (n.tag) {
                case 3:
                  Ys(s.nodeValue, o, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && Ys(s.nodeValue, o, (n.mode & 1) !== 0);
              }
            h && (r.flags |= 4);
          } else
            s = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(s), s[ja] = r, r.stateNode = s;
        }
        return kr(r), null;
      case 13:
        if (Pe(Fe), s = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (dn && Ca !== null && r.mode & 1 && !(r.flags & 128))
            Uh(), Tu(), r.flags |= 98560, h = !1;
          else if (h = cf(r), s !== null && s.dehydrated !== null) {
            if (n === null) {
              if (!h)
                throw Error(f(318));
              if (h = r.memoizedState, h = h !== null ? h.dehydrated : null, !h)
                throw Error(f(317));
              h[ja] = r;
            } else
              Tu(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            kr(r), h = !1;
          } else
            Fa !== null && (Up(Fa), Fa = null), h = !0;
          if (!h)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = o, r) : (s = s !== null, s !== (n !== null && n.memoizedState !== null) && s && (r.child.flags |= 8192, r.mode & 1 && (n === null || Fe.current & 1 ? Jn === 0 && (Jn = 3) : mc())), r.updateQueue !== null && (r.flags |= 4), kr(r), null);
      case 4:
        return Au(), zu(n, r), n === null && bi(r.stateNode.containerInfo), kr(r), null;
      case 10:
        return gp(r.type._context), kr(r), null;
      case 17:
        return Wn(r.type) && Zr(), kr(r), null;
      case 19:
        if (Pe(Fe), h = r.memoizedState, h === null)
          return kr(r), null;
        if (s = (r.flags & 128) !== 0, S = h.rendering, S === null)
          if (s)
            kn(h, !1);
          else {
            if (Jn !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (S = jt(n), S !== null) {
                  for (r.flags |= 128, kn(h, !1), s = S.updateQueue, s !== null && (r.updateQueue = s, r.flags |= 4), r.subtreeFlags = 0, s = o, o = r.child; o !== null; )
                    h = o, n = s, h.flags &= 14680066, S = h.alternate, S === null ? (h.childLanes = 0, h.lanes = n, h.child = null, h.subtreeFlags = 0, h.memoizedProps = null, h.memoizedState = null, h.updateQueue = null, h.dependencies = null, h.stateNode = null) : (h.childLanes = S.childLanes, h.lanes = S.lanes, h.child = S.child, h.subtreeFlags = 0, h.deletions = null, h.memoizedProps = S.memoizedProps, h.memoizedState = S.memoizedState, h.updateQueue = S.updateQueue, h.type = S.type, n = S.dependencies, h.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), o = o.sibling;
                  return Pt(Fe, Fe.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            h.tail !== null && ln() > Wu && (r.flags |= 128, s = !0, kn(h, !1), r.lanes = 4194304);
          }
        else {
          if (!s)
            if (n = jt(S), n !== null) {
              if (r.flags |= 128, s = !0, o = n.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), kn(h, !0), h.tail === null && h.tailMode === "hidden" && !S.alternate && !dn)
                return kr(r), null;
            } else
              2 * ln() - h.renderingStartTime > Wu && o !== 1073741824 && (r.flags |= 128, s = !0, kn(h, !1), r.lanes = 4194304);
          h.isBackwards ? (S.sibling = r.child, r.child = S) : (o = h.last, o !== null ? o.sibling = S : r.child = S, h.last = S);
        }
        return h.tail !== null ? (r = h.tail, h.rendering = r, h.tail = r.sibling, h.renderingStartTime = ln(), r.sibling = null, o = Fe.current, Pt(Fe, s ? o & 1 | 2 : o & 1), r) : (kr(r), null);
      case 22:
      case 23:
        return If(), s = r.memoizedState !== null, n !== null && n.memoizedState !== null !== s && (r.flags |= 8192), s && r.mode & 1 ? la & 1073741824 && (kr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : kr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(f(156, r.tag));
  }
  function Hg(n, r) {
    switch (uf(r), r.tag) {
      case 1:
        return Wn(r.type) && Zr(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Au(), Pe(pt), Pe(ir), Va(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return qe(r), null;
      case 13:
        if (Pe(Fe), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(f(340));
          Tu();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Pe(Fe), null;
      case 4:
        return Au(), null;
      case 10:
        return gp(r.type._context), null;
      case 22:
      case 23:
        return If(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ju = !1, vr = !1, Lf = typeof WeakSet == "function" ? WeakSet : Set, ke = null;
  function $u(n, r) {
    var o = n.ref;
    if (o !== null)
      if (typeof o == "function")
        try {
          o(null);
        } catch (s) {
          Ln(n, r, s);
        }
      else
        o.current = null;
  }
  function Ap(n, r, o) {
    try {
      o();
    } catch (s) {
      Ln(n, r, s);
    }
  }
  var Mf = !1;
  function Fg(n, r) {
    if (lp = pu, n = Ch(), Ps(n)) {
      if ("selectionStart" in n)
        var o = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          o = (o = n.ownerDocument) && o.defaultView || window;
          var s = o.getSelection && o.getSelection();
          if (s && s.rangeCount !== 0) {
            o = s.anchorNode;
            var d = s.anchorOffset, h = s.focusNode;
            s = s.focusOffset;
            try {
              o.nodeType, h.nodeType;
            } catch {
              o = null;
              break e;
            }
            var S = 0, w = -1, k = -1, W = 0, oe = 0, ue = n, ae = null;
            t:
              for (; ; ) {
                for (var be; ue !== o || d !== 0 && ue.nodeType !== 3 || (w = S + d), ue !== h || s !== 0 && ue.nodeType !== 3 || (k = S + s), ue.nodeType === 3 && (S += ue.nodeValue.length), (be = ue.firstChild) !== null; )
                  ae = ue, ue = be;
                for (; ; ) {
                  if (ue === n)
                    break t;
                  if (ae === o && ++W === d && (w = S), ae === h && ++oe === s && (k = S), (be = ue.nextSibling) !== null)
                    break;
                  ue = ae, ae = ue.parentNode;
                }
                ue = be;
              }
            o = w === -1 || k === -1 ? null : { start: w, end: k };
          } else
            o = null;
        }
      o = o || { start: 0, end: 0 };
    } else
      o = null;
    for (up = { focusedElem: n, selectionRange: o }, pu = !1, ke = r; ke !== null; )
      if (r = ke, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, ke = n;
      else
        for (; ke !== null; ) {
          r = ke;
          try {
            var Le = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (Le !== null) {
                    var je = Le.memoizedProps, Fn = Le.memoizedState, j = r.stateNode, L = j.getSnapshotBeforeUpdate(r.elementType === r.type ? je : na(r.type, je), Fn);
                    j.__reactInternalSnapshotBeforeUpdate = L;
                  }
                  break;
                case 3:
                  var H = r.stateNode.containerInfo;
                  H.nodeType === 1 ? H.textContent = "" : H.nodeType === 9 && H.documentElement && H.removeChild(H.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(f(163));
              }
          } catch (ve) {
            Ln(r, r.return, ve);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, ke = n;
            break;
          }
          ke = r.return;
        }
    return Le = Mf, Mf = !1, Le;
  }
  function Pu(n, r, o) {
    var s = r.updateQueue;
    if (s = s !== null ? s.lastEffect : null, s !== null) {
      var d = s = s.next;
      do {
        if ((d.tag & n) === n) {
          var h = d.destroy;
          d.destroy = void 0, h !== void 0 && Ap(r, o, h);
        }
        d = d.next;
      } while (d !== s);
    }
  }
  function zf(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var o = r = r.next;
      do {
        if ((o.tag & n) === n) {
          var s = o.create;
          o.destroy = s();
        }
        o = o.next;
      } while (o !== r);
    }
  }
  function Uf(n) {
    var r = n.ref;
    if (r !== null) {
      var o = n.stateNode;
      switch (n.tag) {
        case 5:
          n = o;
          break;
        default:
          n = o;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function tm(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, tm(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[ja], delete r[Qs], delete r[dp], delete r[Ng], delete r[Lg])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function kp(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function nm(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || kp(n.return))
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
  function dc(n, r, o) {
    var s = n.tag;
    if (s === 5 || s === 6)
      n = n.stateNode, r ? o.nodeType === 8 ? o.parentNode.insertBefore(n, r) : o.insertBefore(n, r) : (o.nodeType === 8 ? (r = o.parentNode, r.insertBefore(n, o)) : (r = o, r.appendChild(n)), o = o._reactRootContainer, o != null || r.onclick !== null || (r.onclick = rf));
    else if (s !== 4 && (n = n.child, n !== null))
      for (dc(n, r, o), n = n.sibling; n !== null; )
        dc(n, r, o), n = n.sibling;
  }
  function Hu(n, r, o) {
    var s = n.tag;
    if (s === 5 || s === 6)
      n = n.stateNode, r ? o.insertBefore(n, r) : o.appendChild(n);
    else if (s !== 4 && (n = n.child, n !== null))
      for (Hu(n, r, o), n = n.sibling; n !== null; )
        Hu(n, r, o), n = n.sibling;
  }
  var gn = null, or = !1;
  function zr(n, r, o) {
    for (o = o.child; o !== null; )
      Fu(n, r, o), o = o.sibling;
  }
  function Fu(n, r, o) {
    if (Kr && typeof Kr.onCommitFiberUnmount == "function")
      try {
        Kr.onCommitFiberUnmount(Ao, o);
      } catch {
      }
    switch (o.tag) {
      case 5:
        vr || $u(o, r);
      case 6:
        var s = gn, d = or;
        gn = null, zr(n, r, o), gn = s, or = d, gn !== null && (or ? (n = gn, o = o.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(o) : n.removeChild(o)) : gn.removeChild(o.stateNode));
        break;
      case 18:
        gn !== null && (or ? (n = gn, o = o.stateNode, n.nodeType === 8 ? fp(n.parentNode, o) : n.nodeType === 1 && fp(n, o), Ua(n)) : fp(gn, o.stateNode));
        break;
      case 4:
        s = gn, d = or, gn = o.stateNode.containerInfo, or = !0, zr(n, r, o), gn = s, or = d;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!vr && (s = o.updateQueue, s !== null && (s = s.lastEffect, s !== null))) {
          d = s = s.next;
          do {
            var h = d, S = h.destroy;
            h = h.tag, S !== void 0 && (h & 2 || h & 4) && Ap(o, r, S), d = d.next;
          } while (d !== s);
        }
        zr(n, r, o);
        break;
      case 1:
        if (!vr && ($u(o, r), s = o.stateNode, typeof s.componentWillUnmount == "function"))
          try {
            s.props = o.memoizedProps, s.state = o.memoizedState, s.componentWillUnmount();
          } catch (w) {
            Ln(o, r, w);
          }
        zr(n, r, o);
        break;
      case 21:
        zr(n, r, o);
        break;
      case 22:
        o.mode & 1 ? (vr = (s = vr) || o.memoizedState !== null, zr(n, r, o), vr = s) : zr(n, r, o);
        break;
      default:
        zr(n, r, o);
    }
  }
  function Vu(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var o = n.stateNode;
      o === null && (o = n.stateNode = new Lf()), r.forEach(function(s) {
        var d = Kg.bind(null, n, s);
        o.has(s) || (o.add(s), s.then(d, d));
      });
    }
  }
  function lr(n, r) {
    var o = r.deletions;
    if (o !== null)
      for (var s = 0; s < o.length; s++) {
        var d = o[s];
        try {
          var h = n, S = r, w = S;
          e:
            for (; w !== null; ) {
              switch (w.tag) {
                case 5:
                  gn = w.stateNode, or = !1;
                  break e;
                case 3:
                  gn = w.stateNode.containerInfo, or = !0;
                  break e;
                case 4:
                  gn = w.stateNode.containerInfo, or = !0;
                  break e;
              }
              w = w.return;
            }
          if (gn === null)
            throw Error(f(160));
          Fu(h, S, d), gn = null, or = !1;
          var k = d.alternate;
          k !== null && (k.return = null), d.return = null;
        } catch (W) {
          Ln(d, r, W);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        rm(r, n), r = r.sibling;
  }
  function rm(n, r) {
    var o = n.alternate, s = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (lr(r, n), Ni(n), s & 4) {
          try {
            Pu(3, n, n.return), zf(3, n);
          } catch (je) {
            Ln(n, n.return, je);
          }
          try {
            Pu(5, n, n.return);
          } catch (je) {
            Ln(n, n.return, je);
          }
        }
        break;
      case 1:
        lr(r, n), Ni(n), s & 512 && o !== null && $u(o, o.return);
        break;
      case 5:
        if (lr(r, n), Ni(n), s & 512 && o !== null && $u(o, o.return), n.flags & 32) {
          var d = n.stateNode;
          try {
            ha(d, "");
          } catch (je) {
            Ln(n, n.return, je);
          }
        }
        if (s & 4 && (d = n.stateNode, d != null)) {
          var h = n.memoizedProps, S = o !== null ? o.memoizedProps : h, w = n.type, k = n.updateQueue;
          if (n.updateQueue = null, k !== null)
            try {
              w === "input" && h.type === "radio" && h.name != null && Rn(d, h), zn(w, S);
              var W = zn(w, h);
              for (S = 0; S < k.length; S += 2) {
                var oe = k[S], ue = k[S + 1];
                oe === "style" ? Tt(d, ue) : oe === "dangerouslySetInnerHTML" ? va(d, ue) : oe === "children" ? ha(d, ue) : Re(d, oe, ue, W);
              }
              switch (w) {
                case "input":
                  En(d, h);
                  break;
                case "textarea":
                  In(d, h);
                  break;
                case "select":
                  var ae = d._wrapperState.wasMultiple;
                  d._wrapperState.wasMultiple = !!h.multiple;
                  var be = h.value;
                  be != null ? yn(d, !!h.multiple, be, !1) : ae !== !!h.multiple && (h.defaultValue != null ? yn(
                    d,
                    !!h.multiple,
                    h.defaultValue,
                    !0
                  ) : yn(d, !!h.multiple, h.multiple ? [] : "", !1));
              }
              d[Qs] = h;
            } catch (je) {
              Ln(n, n.return, je);
            }
        }
        break;
      case 6:
        if (lr(r, n), Ni(n), s & 4) {
          if (n.stateNode === null)
            throw Error(f(162));
          d = n.stateNode, h = n.memoizedProps;
          try {
            d.nodeValue = h;
          } catch (je) {
            Ln(n, n.return, je);
          }
        }
        break;
      case 3:
        if (lr(r, n), Ni(n), s & 4 && o !== null && o.memoizedState.isDehydrated)
          try {
            Ua(r.containerInfo);
          } catch (je) {
            Ln(n, n.return, je);
          }
        break;
      case 4:
        lr(r, n), Ni(n);
        break;
      case 13:
        lr(r, n), Ni(n), d = n.child, d.flags & 8192 && (h = d.memoizedState !== null, d.stateNode.isHidden = h, !h || d.alternate !== null && d.alternate.memoizedState !== null || ($f = ln())), s & 4 && Vu(n);
        break;
      case 22:
        if (oe = o !== null && o.memoizedState !== null, n.mode & 1 ? (vr = (W = vr) || oe, lr(r, n), vr = W) : lr(r, n), Ni(n), s & 8192) {
          if (W = n.memoizedState !== null, (n.stateNode.isHidden = W) && !oe && n.mode & 1)
            for (ke = n, oe = n.child; oe !== null; ) {
              for (ue = ke = oe; ke !== null; ) {
                switch (ae = ke, be = ae.child, ae.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Pu(4, ae, ae.return);
                    break;
                  case 1:
                    $u(ae, ae.return);
                    var Le = ae.stateNode;
                    if (typeof Le.componentWillUnmount == "function") {
                      s = ae, o = ae.return;
                      try {
                        r = s, Le.props = r.memoizedProps, Le.state = r.memoizedState, Le.componentWillUnmount();
                      } catch (je) {
                        Ln(s, o, je);
                      }
                    }
                    break;
                  case 5:
                    $u(ae, ae.return);
                    break;
                  case 22:
                    if (ae.memoizedState !== null) {
                      am(ue);
                      continue;
                    }
                }
                be !== null ? (be.return = ae, ke = be) : am(ue);
              }
              oe = oe.sibling;
            }
          e:
            for (oe = null, ue = n; ; ) {
              if (ue.tag === 5) {
                if (oe === null) {
                  oe = ue;
                  try {
                    d = ue.stateNode, W ? (h = d.style, typeof h.setProperty == "function" ? h.setProperty("display", "none", "important") : h.display = "none") : (w = ue.stateNode, k = ue.memoizedProps.style, S = k != null && k.hasOwnProperty("display") ? k.display : null, w.style.display = Be("display", S));
                  } catch (je) {
                    Ln(n, n.return, je);
                  }
                }
              } else if (ue.tag === 6) {
                if (oe === null)
                  try {
                    ue.stateNode.nodeValue = W ? "" : ue.memoizedProps;
                  } catch (je) {
                    Ln(n, n.return, je);
                  }
              } else if ((ue.tag !== 22 && ue.tag !== 23 || ue.memoizedState === null || ue === n) && ue.child !== null) {
                ue.child.return = ue, ue = ue.child;
                continue;
              }
              if (ue === n)
                break e;
              for (; ue.sibling === null; ) {
                if (ue.return === null || ue.return === n)
                  break e;
                oe === ue && (oe = null), ue = ue.return;
              }
              oe === ue && (oe = null), ue.sibling.return = ue.return, ue = ue.sibling;
            }
        }
        break;
      case 19:
        lr(r, n), Ni(n), s & 4 && Vu(n);
        break;
      case 21:
        break;
      default:
        lr(
          r,
          n
        ), Ni(n);
    }
  }
  function Ni(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var o = n.return; o !== null; ) {
            if (kp(o)) {
              var s = o;
              break e;
            }
            o = o.return;
          }
          throw Error(f(160));
        }
        switch (s.tag) {
          case 5:
            var d = s.stateNode;
            s.flags & 32 && (ha(d, ""), s.flags &= -33);
            var h = nm(n);
            Hu(n, h, d);
            break;
          case 3:
          case 4:
            var S = s.stateNode.containerInfo, w = nm(n);
            dc(n, w, S);
            break;
          default:
            throw Error(f(161));
        }
      } catch (k) {
        Ln(n, n.return, k);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Vg(n, r, o) {
    ke = n, Np(n);
  }
  function Np(n, r, o) {
    for (var s = (n.mode & 1) !== 0; ke !== null; ) {
      var d = ke, h = d.child;
      if (d.tag === 22 && s) {
        var S = d.memoizedState !== null || ju;
        if (!S) {
          var w = d.alternate, k = w !== null && w.memoizedState !== null || vr;
          w = ju;
          var W = vr;
          if (ju = S, (vr = k) && !W)
            for (ke = d; ke !== null; )
              S = ke, k = S.child, S.tag === 22 && S.memoizedState !== null ? Lp(d) : k !== null ? (k.return = S, ke = k) : Lp(d);
          for (; h !== null; )
            ke = h, Np(h), h = h.sibling;
          ke = d, ju = w, vr = W;
        }
        Iu(n);
      } else
        d.subtreeFlags & 8772 && h !== null ? (h.return = d, ke = h) : Iu(n);
    }
  }
  function Iu(n) {
    for (; ke !== null; ) {
      var r = ke;
      if (r.flags & 8772) {
        var o = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                vr || zf(5, r);
                break;
              case 1:
                var s = r.stateNode;
                if (r.flags & 4 && !vr)
                  if (o === null)
                    s.componentDidMount();
                  else {
                    var d = r.elementType === r.type ? o.memoizedProps : na(r.type, o.memoizedProps);
                    s.componentDidUpdate(d, o.memoizedState, s.__reactInternalSnapshotBeforeUpdate);
                  }
                var h = r.updateQueue;
                h !== null && Ru(r, h, s);
                break;
              case 3:
                var S = r.updateQueue;
                if (S !== null) {
                  if (o = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        o = r.child.stateNode;
                        break;
                      case 1:
                        o = r.child.stateNode;
                    }
                  Ru(r, S, o);
                }
                break;
              case 5:
                var w = r.stateNode;
                if (o === null && r.flags & 4) {
                  o = w;
                  var k = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      k.autoFocus && o.focus();
                      break;
                    case "img":
                      k.src && (o.src = k.src);
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
                  var W = r.alternate;
                  if (W !== null) {
                    var oe = W.memoizedState;
                    if (oe !== null) {
                      var ue = oe.dehydrated;
                      ue !== null && Ua(ue);
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
                throw Error(f(163));
            }
          vr || r.flags & 512 && Uf(r);
        } catch (ae) {
          Ln(r, r.return, ae);
        }
      }
      if (r === n) {
        ke = null;
        break;
      }
      if (o = r.sibling, o !== null) {
        o.return = r.return, ke = o;
        break;
      }
      ke = r.return;
    }
  }
  function am(n) {
    for (; ke !== null; ) {
      var r = ke;
      if (r === n) {
        ke = null;
        break;
      }
      var o = r.sibling;
      if (o !== null) {
        o.return = r.return, ke = o;
        break;
      }
      ke = r.return;
    }
  }
  function Lp(n) {
    for (; ke !== null; ) {
      var r = ke;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var o = r.return;
            try {
              zf(4, r);
            } catch (k) {
              Ln(r, o, k);
            }
            break;
          case 1:
            var s = r.stateNode;
            if (typeof s.componentDidMount == "function") {
              var d = r.return;
              try {
                s.componentDidMount();
              } catch (k) {
                Ln(r, d, k);
              }
            }
            var h = r.return;
            try {
              Uf(r);
            } catch (k) {
              Ln(r, h, k);
            }
            break;
          case 5:
            var S = r.return;
            try {
              Uf(r);
            } catch (k) {
              Ln(r, S, k);
            }
        }
      } catch (k) {
        Ln(r, r.return, k);
      }
      if (r === n) {
        ke = null;
        break;
      }
      var w = r.sibling;
      if (w !== null) {
        w.return = r.return, ke = w;
        break;
      }
      ke = r.return;
    }
  }
  var Ig = Math.ceil, Fl = de.ReactCurrentDispatcher, jf = de.ReactCurrentOwner, Ya = de.ReactCurrentBatchConfig, Dt = 0, Nn = null, pn = null, Zn = 0, la = 0, Bu = nn(0), Jn = 0, pc = null, Vl = 0, Yu = 0, Mp = 0, Zo = null, Nr = null, $f = 0, Wu = 1 / 0, fo = null, Pf = !1, zp = null, Wa = null, Gu = !1, Ga = null, Hf = 0, vc = 0, Ff = null, hc = -1, Il = 0;
  function ur() {
    return Dt & 6 ? ln() : hc !== -1 ? hc : hc = ln();
  }
  function po(n) {
    return n.mode & 1 ? Dt & 2 && Zn !== 0 ? Zn & -Zn : Mg.transition !== null ? (Il === 0 && (Il = El()), Il) : (n = At, n !== 0 || (n = window.event, n = n === void 0 ? 16 : ks(n.type)), n) : 1;
  }
  function bn(n, r, o, s) {
    if (50 < vc)
      throw vc = 0, Ff = null, Error(f(185));
    No(n, o, s), (!(Dt & 2) || n !== Nn) && (n === Nn && (!(Dt & 2) && (Yu |= o), Jn === 4 && Li(n, Zn)), er(n, s), o === 1 && Dt === 0 && !(r.mode & 1) && (Wu = ln() + 500, Fo && xi()));
  }
  function er(n, r) {
    var o = n.callbackNode;
    ko(n, r);
    var s = Si(n, n === Nn ? Zn : 0);
    if (s === 0)
      o !== null && on(o), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = s & -s, n.callbackPriority !== r) {
      if (o != null && on(o), r === 1)
        n.tag === 0 ? zh(Ku.bind(null, n)) : of(Ku.bind(null, n)), Lh(function() {
          !(Dt & 6) && xi();
        }), o = null;
      else {
        switch (Ds(s)) {
          case 1:
            o = Ss;
            break;
          case 4:
            o = _i;
            break;
          case 16:
            o = bt;
            break;
          case 536870912:
            o = Ki;
            break;
          default:
            o = bt;
        }
        o = dm(o, Vf.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = o;
    }
  }
  function Vf(n, r) {
    if (hc = -1, Il = 0, Dt & 6)
      throw Error(f(327));
    var o = n.callbackNode;
    if (Qu() && n.callbackNode !== o)
      return null;
    var s = Si(n, n === Nn ? Zn : 0);
    if (s === 0)
      return null;
    if (s & 30 || s & n.expiredLanes || r)
      r = Bf(n, s);
    else {
      r = s;
      var d = Dt;
      Dt |= 2;
      var h = om();
      (Nn !== n || Zn !== r) && (fo = null, Wu = ln() + 500, Yl(n, r));
      do
        try {
          Yg();
          break;
        } catch (w) {
          im(n, w);
        }
      while (!0);
      yp(), Fl.current = h, Dt = d, pn !== null ? r = 0 : (Nn = null, Zn = 0, r = Jn);
    }
    if (r !== 0) {
      if (r === 2 && (d = Ci(n), d !== 0 && (s = d, r = Bl(n, d))), r === 1)
        throw o = pc, Yl(n, 0), Li(n, s), er(n, ln()), o;
      if (r === 6)
        Li(n, s);
      else {
        if (d = n.current.alternate, !(s & 30) && !jp(d) && (r = Bf(n, s), r === 2 && (h = Ci(n), h !== 0 && (s = h, r = Bl(n, h))), r === 1))
          throw o = pc, Yl(n, 0), Li(n, s), er(n, ln()), o;
        switch (n.finishedWork = d, n.finishedLanes = s, r) {
          case 0:
          case 1:
            throw Error(f(345));
          case 2:
            Jo(n, Nr, fo);
            break;
          case 3:
            if (Li(n, s), (s & 130023424) === s && (r = $f + 500 - ln(), 10 < r)) {
              if (Si(n, 0) !== 0)
                break;
              if (d = n.suspendedLanes, (d & s) !== s) {
                ur(), n.pingedLanes |= n.suspendedLanes & d;
                break;
              }
              n.timeoutHandle = Ws(Jo.bind(null, n, Nr, fo), r);
              break;
            }
            Jo(n, Nr, fo);
            break;
          case 4:
            if (Li(n, s), (s & 4194240) === s)
              break;
            for (r = n.eventTimes, d = -1; 0 < s; ) {
              var S = 31 - Lr(s);
              h = 1 << S, S = r[S], S > d && (d = S), s &= ~h;
            }
            if (s = d, s = ln() - s, s = (120 > s ? 120 : 480 > s ? 480 : 1080 > s ? 1080 : 1920 > s ? 1920 : 3e3 > s ? 3e3 : 4320 > s ? 4320 : 1960 * Ig(s / 1960)) - s, 10 < s) {
              n.timeoutHandle = Ws(Jo.bind(null, n, Nr, fo), s);
              break;
            }
            Jo(n, Nr, fo);
            break;
          case 5:
            Jo(n, Nr, fo);
            break;
          default:
            throw Error(f(329));
        }
      }
    }
    return er(n, ln()), n.callbackNode === o ? Vf.bind(null, n) : null;
  }
  function Bl(n, r) {
    var o = Zo;
    return n.current.memoizedState.isDehydrated && (Yl(n, r).flags |= 256), n = Bf(n, r), n !== 2 && (r = Nr, Nr = o, r !== null && Up(r)), n;
  }
  function Up(n) {
    Nr === null ? Nr = n : Nr.push.apply(Nr, n);
  }
  function jp(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var o = r.updateQueue;
        if (o !== null && (o = o.stores, o !== null))
          for (var s = 0; s < o.length; s++) {
            var d = o[s], h = d.getSnapshot;
            d = d.value;
            try {
              if (!si(h(), d))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (o = r.child, r.subtreeFlags & 16384 && o !== null)
        o.return = r, r = o;
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
  function Li(n, r) {
    for (r &= ~Mp, r &= ~Yu, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var o = 31 - Lr(r), s = 1 << o;
      n[o] = -1, r &= ~s;
    }
  }
  function Ku(n) {
    if (Dt & 6)
      throw Error(f(327));
    Qu();
    var r = Si(n, 0);
    if (!(r & 1))
      return er(n, ln()), null;
    var o = Bf(n, r);
    if (n.tag !== 0 && o === 2) {
      var s = Ci(n);
      s !== 0 && (r = s, o = Bl(n, s));
    }
    if (o === 1)
      throw o = pc, Yl(n, 0), Li(n, r), er(n, ln()), o;
    if (o === 6)
      throw Error(f(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Jo(n, Nr, fo), er(n, ln()), null;
  }
  function $p(n, r) {
    var o = Dt;
    Dt |= 1;
    try {
      return n(r);
    } finally {
      Dt = o, Dt === 0 && (Wu = ln() + 500, Fo && xi());
    }
  }
  function Mi(n) {
    Ga !== null && Ga.tag === 0 && !(Dt & 6) && Qu();
    var r = Dt;
    Dt |= 1;
    var o = Ya.transition, s = At;
    try {
      if (Ya.transition = null, At = 1, n)
        return n();
    } finally {
      At = s, Ya.transition = o, Dt = r, !(Dt & 6) && xi();
    }
  }
  function If() {
    la = Bu.current, Pe(Bu);
  }
  function Yl(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var o = n.timeoutHandle;
    if (o !== -1 && (n.timeoutHandle = -1, Gs(o)), pn !== null)
      for (o = pn.return; o !== null; ) {
        var s = o;
        switch (uf(s), s.tag) {
          case 1:
            s = s.type.childContextTypes, s != null && Zr();
            break;
          case 3:
            Au(), Pe(pt), Pe(ir), Va();
            break;
          case 5:
            qe(s);
            break;
          case 4:
            Au();
            break;
          case 13:
            Pe(Fe);
            break;
          case 19:
            Pe(Fe);
            break;
          case 10:
            gp(s.type._context);
            break;
          case 22:
          case 23:
            If();
        }
        o = o.return;
      }
    if (Nn = n, pn = n = el(n.current, null), Zn = la = r, Jn = 0, pc = null, Mp = Yu = Vl = 0, Nr = Zo = null, Ar !== null) {
      for (r = 0; r < Ar.length; r++)
        if (o = Ar[r], s = o.interleaved, s !== null) {
          o.interleaved = null;
          var d = s.next, h = o.pending;
          if (h !== null) {
            var S = h.next;
            h.next = d, s.next = S;
          }
          o.pending = s;
        }
      Ar = null;
    }
    return n;
  }
  function im(n, r) {
    do {
      var o = pn;
      try {
        if (yp(), tc.current = xf, $n) {
          for (var s = Tn.memoizedState; s !== null; ) {
            var d = s.queue;
            d !== null && (d.pending = null), s = s.next;
          }
          $n = !1;
        }
        if (Nl = 0, J = jn = Tn = null, et = !1, Ai = 0, jf.current = null, o === null || o.return === null) {
          Jn = 1, pc = r, pn = null;
          break;
        }
        e: {
          var h = n, S = o.return, w = o, k = r;
          if (r = Zn, w.flags |= 32768, k !== null && typeof k == "object" && typeof k.then == "function") {
            var W = k, oe = w, ue = oe.tag;
            if (!(oe.mode & 1) && (ue === 0 || ue === 11 || ue === 15)) {
              var ae = oe.alternate;
              ae ? (oe.updateQueue = ae.updateQueue, oe.memoizedState = ae.memoizedState, oe.lanes = ae.lanes) : (oe.updateQueue = null, oe.memoizedState = null);
            }
            var be = qh(S);
            if (be !== null) {
              be.flags &= -257, xp(be, S, w, h, r), be.mode & 1 && uc(h, W, r), r = be, k = W;
              var Le = r.updateQueue;
              if (Le === null) {
                var je = /* @__PURE__ */ new Set();
                je.add(k), r.updateQueue = je;
              } else
                Le.add(k);
              break e;
            } else {
              if (!(r & 1)) {
                uc(h, W, r), mc();
                break e;
              }
              k = Error(f(426));
            }
          } else if (dn && w.mode & 1) {
            var Fn = qh(S);
            if (Fn !== null) {
              !(Fn.flags & 65536) && (Fn.flags |= 256), xp(Fn, S, w, h, r), Gn(qo(k, w));
              break e;
            }
          }
          h = k = qo(k, w), Jn !== 4 && (Jn = 2), Zo === null ? Zo = [h] : Zo.push(h), h = S;
          do {
            switch (h.tag) {
              case 3:
                h.flags |= 65536, r &= -r, h.lanes |= r;
                var j = Kh(h, k, r);
                Ph(h, j);
                break e;
              case 1:
                w = k;
                var L = h.type, H = h.stateNode;
                if (!(h.flags & 128) && (typeof L.getDerivedStateFromError == "function" || H !== null && typeof H.componentDidCatch == "function" && (Wa === null || !Wa.has(H)))) {
                  h.flags |= 65536, r &= -r, h.lanes |= r;
                  var ve = Qh(h, w, r);
                  Ph(h, ve);
                  break e;
                }
            }
            h = h.return;
          } while (h !== null);
        }
        um(o);
      } catch (He) {
        r = He, pn === o && o !== null && (pn = o = o.return);
        continue;
      }
      break;
    } while (!0);
  }
  function om() {
    var n = Fl.current;
    return Fl.current = xf, n === null ? xf : n;
  }
  function mc() {
    (Jn === 0 || Jn === 3 || Jn === 2) && (Jn = 4), Nn === null || !(Vl & 268435455) && !(Yu & 268435455) || Li(Nn, Zn);
  }
  function Bf(n, r) {
    var o = Dt;
    Dt |= 2;
    var s = om();
    (Nn !== n || Zn !== r) && (fo = null, Yl(n, r));
    do
      try {
        Bg();
        break;
      } catch (d) {
        im(n, d);
      }
    while (!0);
    if (yp(), Dt = o, Fl.current = s, pn !== null)
      throw Error(f(261));
    return Nn = null, Zn = 0, Jn;
  }
  function Bg() {
    for (; pn !== null; )
      lm(pn);
  }
  function Yg() {
    for (; pn !== null && !Dr(); )
      lm(pn);
  }
  function lm(n) {
    var r = fm(n.alternate, n, la);
    n.memoizedProps = n.pendingProps, r === null ? um(n) : pn = r, jf.current = null;
  }
  function um(n) {
    var r = n;
    do {
      var o = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (o = Hg(o, r), o !== null) {
          o.flags &= 32767, pn = o;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Jn = 6, pn = null;
          return;
        }
      } else if (o = Pg(o, r, la), o !== null) {
        pn = o;
        return;
      }
      if (r = r.sibling, r !== null) {
        pn = r;
        return;
      }
      pn = r = n;
    } while (r !== null);
    Jn === 0 && (Jn = 5);
  }
  function Jo(n, r, o) {
    var s = At, d = Ya.transition;
    try {
      Ya.transition = null, At = 1, Wg(n, r, o, s);
    } finally {
      Ya.transition = d, At = s;
    }
    return null;
  }
  function Wg(n, r, o, s) {
    do
      Qu();
    while (Ga !== null);
    if (Dt & 6)
      throw Error(f(327));
    o = n.finishedWork;
    var d = n.finishedLanes;
    if (o === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, o === n.current)
      throw Error(f(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var h = o.lanes | o.childLanes;
    if (Rs(n, h), n === Nn && (pn = Nn = null, Zn = 0), !(o.subtreeFlags & 2064) && !(o.flags & 2064) || Gu || (Gu = !0, dm(bt, function() {
      return Qu(), null;
    })), h = (o.flags & 15990) !== 0, o.subtreeFlags & 15990 || h) {
      h = Ya.transition, Ya.transition = null;
      var S = At;
      At = 1;
      var w = Dt;
      Dt |= 4, jf.current = null, Fg(n, o), rm(o, n), bl(up), pu = !!lp, up = lp = null, n.current = o, Vg(o), Ei(), Dt = w, At = S, Ya.transition = h;
    } else
      n.current = o;
    if (Gu && (Gu = !1, Ga = n, Hf = d), h = n.pendingLanes, h === 0 && (Wa = null), Cs(o.stateNode), er(n, ln()), r !== null)
      for (s = n.onRecoverableError, o = 0; o < r.length; o++)
        d = r[o], s(d.value, { componentStack: d.stack, digest: d.digest });
    if (Pf)
      throw Pf = !1, n = zp, zp = null, n;
    return Hf & 1 && n.tag !== 0 && Qu(), h = n.pendingLanes, h & 1 ? n === Ff ? vc++ : (vc = 0, Ff = n) : vc = 0, xi(), null;
  }
  function Qu() {
    if (Ga !== null) {
      var n = Ds(Hf), r = Ya.transition, o = At;
      try {
        if (Ya.transition = null, At = 16 > n ? 16 : n, Ga === null)
          var s = !1;
        else {
          if (n = Ga, Ga = null, Hf = 0, Dt & 6)
            throw Error(f(331));
          var d = Dt;
          for (Dt |= 4, ke = n.current; ke !== null; ) {
            var h = ke, S = h.child;
            if (ke.flags & 16) {
              var w = h.deletions;
              if (w !== null) {
                for (var k = 0; k < w.length; k++) {
                  var W = w[k];
                  for (ke = W; ke !== null; ) {
                    var oe = ke;
                    switch (oe.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Pu(8, oe, h);
                    }
                    var ue = oe.child;
                    if (ue !== null)
                      ue.return = oe, ke = ue;
                    else
                      for (; ke !== null; ) {
                        oe = ke;
                        var ae = oe.sibling, be = oe.return;
                        if (tm(oe), oe === W) {
                          ke = null;
                          break;
                        }
                        if (ae !== null) {
                          ae.return = be, ke = ae;
                          break;
                        }
                        ke = be;
                      }
                  }
                }
                var Le = h.alternate;
                if (Le !== null) {
                  var je = Le.child;
                  if (je !== null) {
                    Le.child = null;
                    do {
                      var Fn = je.sibling;
                      je.sibling = null, je = Fn;
                    } while (je !== null);
                  }
                }
                ke = h;
              }
            }
            if (h.subtreeFlags & 2064 && S !== null)
              S.return = h, ke = S;
            else
              e:
                for (; ke !== null; ) {
                  if (h = ke, h.flags & 2048)
                    switch (h.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Pu(9, h, h.return);
                    }
                  var j = h.sibling;
                  if (j !== null) {
                    j.return = h.return, ke = j;
                    break e;
                  }
                  ke = h.return;
                }
          }
          var L = n.current;
          for (ke = L; ke !== null; ) {
            S = ke;
            var H = S.child;
            if (S.subtreeFlags & 2064 && H !== null)
              H.return = S, ke = H;
            else
              e:
                for (S = L; ke !== null; ) {
                  if (w = ke, w.flags & 2048)
                    try {
                      switch (w.tag) {
                        case 0:
                        case 11:
                        case 15:
                          zf(9, w);
                      }
                    } catch (He) {
                      Ln(w, w.return, He);
                    }
                  if (w === S) {
                    ke = null;
                    break e;
                  }
                  var ve = w.sibling;
                  if (ve !== null) {
                    ve.return = w.return, ke = ve;
                    break e;
                  }
                  ke = w.return;
                }
          }
          if (Dt = d, xi(), Kr && typeof Kr.onPostCommitFiberRoot == "function")
            try {
              Kr.onPostCommitFiberRoot(Ao, n);
            } catch {
            }
          s = !0;
        }
        return s;
      } finally {
        At = o, Ya.transition = r;
      }
    }
    return !1;
  }
  function sm(n, r, o) {
    r = qo(o, r), r = Kh(n, r, 1), n = Wo(n, r, 1), r = ur(), n !== null && (No(n, 1, r), er(n, r));
  }
  function Ln(n, r, o) {
    if (n.tag === 3)
      sm(n, n, o);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          sm(r, n, o);
          break;
        } else if (r.tag === 1) {
          var s = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (Wa === null || !Wa.has(s))) {
            n = qo(o, n), n = Qh(r, n, 1), r = Wo(r, n, 1), n = ur(), r !== null && (No(r, 1, n), er(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function Gg(n, r, o) {
    var s = n.pingCache;
    s !== null && s.delete(r), r = ur(), n.pingedLanes |= n.suspendedLanes & o, Nn === n && (Zn & o) === o && (Jn === 4 || Jn === 3 && (Zn & 130023424) === Zn && 500 > ln() - $f ? Yl(n, 0) : Mp |= o), er(n, r);
  }
  function cm(n, r) {
    r === 0 && (n.mode & 1 ? (r = su, su <<= 1, !(su & 130023424) && (su = 4194304)) : r = 1);
    var o = ur();
    n = uo(n, r), n !== null && (No(n, r, o), er(n, o));
  }
  function Pp(n) {
    var r = n.memoizedState, o = 0;
    r !== null && (o = r.retryLane), cm(n, o);
  }
  function Kg(n, r) {
    var o = 0;
    switch (n.tag) {
      case 13:
        var s = n.stateNode, d = n.memoizedState;
        d !== null && (o = d.retryLane);
        break;
      case 19:
        s = n.stateNode;
        break;
      default:
        throw Error(f(314));
    }
    s !== null && s.delete(r), cm(n, o);
  }
  var fm;
  fm = function(n, r, o) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || pt.current)
        ia = !0;
      else {
        if (!(n.lanes & o) && !(r.flags & 128))
          return ia = !1, co(n, r, o);
        ia = !!(n.flags & 131072);
      }
    else
      ia = !1, dn && r.flags & 1048576 && Io(r, Ol, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var s = r.type;
        fc(n, r), n = r.pendingProps;
        var d = _a(r, ir.current);
        Un(r, o), d = Ll(null, r, s, n, d, o);
        var h = Ko();
        return r.flags |= 1, typeof d == "object" && d !== null && typeof d.render == "function" && d.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Wn(s) ? (h = !0, Dl(r)) : h = !1, r.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null, Ep(r), d.updater = df, r.stateNode = d, d._reactInternals = r, Sp(r, s, n, o), r = Of(null, r, s, !0, h, o)) : (r.tag = 0, dn && h && lf(r), Pn(null, r, d, o), r = r.child), r;
      case 16:
        s = r.elementType;
        e: {
          switch (fc(n, r), n = r.pendingProps, d = s._init, s = d(s._payload), r.type = s, d = r.tag = Qg(s), n = na(s, n), d) {
            case 0:
              r = yt(null, r, s, n, o);
              break e;
            case 1:
              r = sc(null, r, s, n, o);
              break e;
            case 11:
              r = Mu(null, r, s, n, o);
              break e;
            case 14:
              r = Xo(null, r, s, na(s.type, n), o);
              break e;
          }
          throw Error(f(
            306,
            s,
            ""
          ));
        }
        return r;
      case 0:
        return s = r.type, d = r.pendingProps, d = r.elementType === s ? d : na(s, d), yt(n, r, s, d, o);
      case 1:
        return s = r.type, d = r.pendingProps, d = r.elementType === s ? d : na(s, d), sc(n, r, s, d, o);
      case 3:
        e: {
          if ($g(r), n === null)
            throw Error(f(387));
          s = r.pendingProps, h = r.memoizedState, d = h.element, $h(n, r), Xs(r, s, null, o);
          var S = r.memoizedState;
          if (s = S.element, h.isDehydrated)
            if (h = { element: s, isDehydrated: !1, cache: S.cache, pendingSuspenseBoundaries: S.pendingSuspenseBoundaries, transitions: S.transitions }, r.updateQueue.baseState = h, r.memoizedState = h, r.flags & 256) {
              d = qo(Error(f(423)), r), r = Zh(n, r, s, o, d);
              break e;
            } else if (s !== d) {
              d = qo(Error(f(424)), r), r = Zh(n, r, s, o, d);
              break e;
            } else
              for (Ca = Ea(r.stateNode.containerInfo.firstChild), Sa = r, dn = !0, Fa = null, o = Yh(r, null, s, o), r.child = o; o; )
                o.flags = o.flags & -3 | 4096, o = o.sibling;
          else {
            if (Tu(), s === d) {
              r = Hn(n, r, o);
              break e;
            }
            Pn(n, r, s, o);
          }
          r = r.child;
        }
        return r;
      case 5:
        return pf(r), n === null && sf(r), s = r.type, d = r.pendingProps, h = n !== null ? n.memoizedProps : null, S = d.children, xl(s, d) ? S = null : h !== null && xl(s, h) && (r.flags |= 32), Pl(n, r), Pn(n, r, S, o), r.child;
      case 6:
        return n === null && sf(r), null;
      case 13:
        return Jh(n, r, o);
      case 4:
        return Cp(r, r.stateNode.containerInfo), s = r.pendingProps, n === null ? r.child = Du(r, null, s, o) : Pn(n, r, s, o), r.child;
      case 11:
        return s = r.type, d = r.pendingProps, d = r.elementType === s ? d : na(s, d), Mu(n, r, s, d, o);
      case 7:
        return Pn(n, r, r.pendingProps, o), r.child;
      case 8:
        return Pn(n, r, r.pendingProps.children, o), r.child;
      case 12:
        return Pn(n, r, r.pendingProps.children, o), r.child;
      case 10:
        e: {
          if (s = r.type._context, d = r.pendingProps, h = r.memoizedProps, S = d.value, Pt(bu, s._currentValue), s._currentValue = S, h !== null)
            if (si(h.value, S)) {
              if (h.children === d.children && !pt.current) {
                r = Hn(n, r, o);
                break e;
              }
            } else
              for (h = r.child, h !== null && (h.return = r); h !== null; ) {
                var w = h.dependencies;
                if (w !== null) {
                  S = h.child;
                  for (var k = w.firstContext; k !== null; ) {
                    if (k.context === s) {
                      if (h.tag === 1) {
                        k = un(-1, o & -o), k.tag = 2;
                        var W = h.updateQueue;
                        if (W !== null) {
                          W = W.shared;
                          var oe = W.pending;
                          oe === null ? k.next = k : (k.next = oe.next, oe.next = k), W.pending = k;
                        }
                      }
                      h.lanes |= o, k = h.alternate, k !== null && (k.lanes |= o), Bo(
                        h.return,
                        o,
                        r
                      ), w.lanes |= o;
                      break;
                    }
                    k = k.next;
                  }
                } else if (h.tag === 10)
                  S = h.type === r.type ? null : h.child;
                else if (h.tag === 18) {
                  if (S = h.return, S === null)
                    throw Error(f(341));
                  S.lanes |= o, w = S.alternate, w !== null && (w.lanes |= o), Bo(S, o, r), S = h.sibling;
                } else
                  S = h.child;
                if (S !== null)
                  S.return = h;
                else
                  for (S = h; S !== null; ) {
                    if (S === r) {
                      S = null;
                      break;
                    }
                    if (h = S.sibling, h !== null) {
                      h.return = S.return, S = h;
                      break;
                    }
                    S = S.return;
                  }
                h = S;
              }
          Pn(n, r, d.children, o), r = r.child;
        }
        return r;
      case 9:
        return d = r.type, s = r.pendingProps.children, Un(r, o), d = he(d), s = s(d), r.flags |= 1, Pn(n, r, s, o), r.child;
      case 14:
        return s = r.type, d = na(s, r.pendingProps), d = na(s.type, d), Xo(n, r, s, d, o);
      case 15:
        return Df(n, r, r.type, r.pendingProps, o);
      case 17:
        return s = r.type, d = r.pendingProps, d = r.elementType === s ? d : na(s, d), fc(n, r), r.tag = 1, Wn(s) ? (n = !0, Dl(r)) : n = !1, Un(r, o), Fh(r, s, d), Sp(r, s, d, o), Of(null, r, s, !0, n, o);
      case 19:
        return Op(n, r, o);
      case 22:
        return oa(n, r, o);
    }
    throw Error(f(156, r.tag));
  };
  function dm(n, r) {
    return an(n, r);
  }
  function pm(n, r, o, s) {
    this.tag = n, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ka(n, r, o, s) {
    return new pm(n, r, o, s);
  }
  function Hp(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Qg(n) {
    if (typeof n == "function")
      return Hp(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === st)
        return 11;
      if (n === at)
        return 14;
    }
    return 2;
  }
  function el(n, r) {
    var o = n.alternate;
    return o === null ? (o = Ka(n.tag, r, n.key, n.mode), o.elementType = n.elementType, o.type = n.type, o.stateNode = n.stateNode, o.alternate = n, n.alternate = o) : (o.pendingProps = r, o.type = n.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = n.flags & 14680064, o.childLanes = n.childLanes, o.lanes = n.lanes, o.child = n.child, o.memoizedProps = n.memoizedProps, o.memoizedState = n.memoizedState, o.updateQueue = n.updateQueue, r = n.dependencies, o.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, o.sibling = n.sibling, o.index = n.index, o.ref = n.ref, o;
  }
  function Yf(n, r, o, s, d, h) {
    var S = 2;
    if (s = n, typeof n == "function")
      Hp(n) && (S = 1);
    else if (typeof n == "string")
      S = 5;
    else
      e:
        switch (n) {
          case $e:
            return Wl(o.children, d, h, r);
          case Ne:
            S = 8, d |= 8;
            break;
          case Rt:
            return n = Ka(12, o, r, d | 2), n.elementType = Rt, n.lanes = h, n;
          case Ct:
            return n = Ka(13, o, r, d), n.elementType = Ct, n.lanes = h, n;
          case Ye:
            return n = Ka(19, o, r, d), n.elementType = Ye, n.lanes = h, n;
          case Ke:
            return Wf(o, d, h, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case Et:
                  S = 10;
                  break e;
                case gt:
                  S = 9;
                  break e;
                case st:
                  S = 11;
                  break e;
                case at:
                  S = 14;
                  break e;
                case lt:
                  S = 16, s = null;
                  break e;
              }
            throw Error(f(130, n == null ? n : typeof n, ""));
        }
    return r = Ka(S, o, r, d), r.elementType = n, r.type = s, r.lanes = h, r;
  }
  function Wl(n, r, o, s) {
    return n = Ka(7, n, s, r), n.lanes = o, n;
  }
  function Wf(n, r, o, s) {
    return n = Ka(22, n, s, r), n.elementType = Ke, n.lanes = o, n.stateNode = { isHidden: !1 }, n;
  }
  function Gf(n, r, o) {
    return n = Ka(6, n, null, r), n.lanes = o, n;
  }
  function yc(n, r, o) {
    return r = Ka(4, n.children !== null ? n.children : [], n.key, r), r.lanes = o, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function gc(n, r, o, s, d) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = _l(0), this.expirationTimes = _l(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = _l(0), this.identifierPrefix = s, this.onRecoverableError = d, this.mutableSourceEagerHydrationData = null;
  }
  function Fp(n, r, o, s, d, h, S, w, k) {
    return n = new gc(n, r, o, w, k), r === 1 ? (r = 1, h === !0 && (r |= 8)) : r = 0, h = Ka(3, null, null, r), n.current = h, h.stateNode = n, h.memoizedState = { element: s, isDehydrated: o, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ep(h), n;
  }
  function vm(n, r, o) {
    var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ce, key: s == null ? null : "" + s, children: n, containerInfo: r, implementation: o };
  }
  function Vp(n) {
    if (!n)
      return $a;
    n = n._reactInternals;
    e: {
      if (_e(n) !== n || n.tag !== 1)
        throw Error(f(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Wn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(f(171));
    }
    if (n.tag === 1) {
      var o = n.type;
      if (Wn(o))
        return Ho(n, o, r);
    }
    return r;
  }
  function Ip(n, r, o, s, d, h, S, w, k) {
    return n = Fp(o, s, !0, n, d, h, S, w, k), n.context = Vp(null), o = n.current, s = ur(), d = po(o), h = un(s, d), h.callback = r ?? null, Wo(o, h, d), n.current.lanes = d, No(n, d, s), er(n, s), n;
  }
  function Kf(n, r, o, s) {
    var d = r.current, h = ur(), S = po(d);
    return o = Vp(o), r.context === null ? r.context = o : r.pendingContext = o, r = un(h, S), r.payload = { element: n }, s = s === void 0 ? null : s, s !== null && (r.callback = s), n = Wo(d, r, S), n !== null && (bn(n, d, S, h), ff(n, d, S)), S;
  }
  function Ec(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function hm(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var o = n.retryLane;
      n.retryLane = o !== 0 && o < r ? o : r;
    }
  }
  function Bp(n, r) {
    hm(n, r), (n = n.alternate) && hm(n, r);
  }
  function qg() {
    return null;
  }
  var Yp = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Qf(n) {
    this._internalRoot = n;
  }
  _c.prototype.render = Qf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(f(409));
    Kf(n, r, null, null);
  }, _c.prototype.unmount = Qf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Mi(function() {
        Kf(null, n, null, null);
      }), r[ci] = null;
    }
  };
  function _c(n) {
    this._internalRoot = n;
  }
  _c.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = zt();
      n = { blockedOn: null, target: n, priority: r };
      for (var o = 0; o < cn.length && r !== 0 && r < cn[o].priority; o++)
        ;
      cn.splice(o, 0, n), o === 0 && li(n);
    }
  };
  function tl(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function qf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function mm() {
  }
  function Xg(n, r, o, s, d) {
    if (d) {
      if (typeof s == "function") {
        var h = s;
        s = function() {
          var W = Ec(S);
          h.call(W);
        };
      }
      var S = Ip(r, s, n, 0, null, !1, !1, "", mm);
      return n._reactRootContainer = S, n[ci] = S.current, bi(n.nodeType === 8 ? n.parentNode : n), Mi(), S;
    }
    for (; d = n.lastChild; )
      n.removeChild(d);
    if (typeof s == "function") {
      var w = s;
      s = function() {
        var W = Ec(k);
        w.call(W);
      };
    }
    var k = Fp(n, 0, !1, null, null, !1, !1, "", mm);
    return n._reactRootContainer = k, n[ci] = k.current, bi(n.nodeType === 8 ? n.parentNode : n), Mi(function() {
      Kf(r, k, o, s);
    }), k;
  }
  function Xf(n, r, o, s, d) {
    var h = o._reactRootContainer;
    if (h) {
      var S = h;
      if (typeof d == "function") {
        var w = d;
        d = function() {
          var k = Ec(S);
          w.call(k);
        };
      }
      Kf(r, S, n, d);
    } else
      S = Xg(o, r, n, d, s);
    return Ec(S);
  }
  cu = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var o = Qi(r.pendingLanes);
          o !== 0 && (xs(r, o | 1), er(r, ln()), !(Dt & 6) && (Wu = ln() + 500, xi()));
        }
        break;
      case 13:
        Mi(function() {
          var s = uo(n, 1);
          if (s !== null) {
            var d = ur();
            bn(s, n, 1, d);
          }
        }), Bp(n, 1);
    }
  }, Lo = function(n) {
    if (n.tag === 13) {
      var r = uo(n, 134217728);
      if (r !== null) {
        var o = ur();
        bn(r, n, 134217728, o);
      }
      Bp(n, 134217728);
    }
  }, Os = function(n) {
    if (n.tag === 13) {
      var r = po(n), o = uo(n, r);
      if (o !== null) {
        var s = ur();
        bn(o, n, r, s);
      }
      Bp(n, r);
    }
  }, zt = function() {
    return At;
  }, fu = function(n, r) {
    var o = At;
    try {
      return At = n, r();
    } finally {
      At = o;
    }
  }, Kt = function(n, r, o) {
    switch (r) {
      case "input":
        if (En(n, o), r = o.name, o.type === "radio" && r != null) {
          for (o = n; o.parentNode; )
            o = o.parentNode;
          for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < o.length; r++) {
            var s = o[r];
            if (s !== n && s.form === n.form) {
              var d = af(s);
              if (!d)
                throw Error(f(90));
              Tr(s), En(s, d);
            }
          }
        }
        break;
      case "textarea":
        In(n, o);
        break;
      case "select":
        r = o.value, r != null && yn(n, !!o.multiple, r, !1);
    }
  }, Do = $p, hl = Mi;
  var Zg = { usingClientEntryPoint: !1, Events: [wi, Cu, af, ri, Na, $p] }, Sc = { findFiberByHostInstance: oo, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, ym = { bundleType: Sc.bundleType, version: Sc.version, rendererPackageName: Sc.rendererPackageName, rendererConfig: Sc.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: de.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Ge(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Sc.findFiberByHostInstance || qg, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Zf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Zf.isDisabled && Zf.supportsFiber)
      try {
        Ao = Zf.inject(ym), Kr = Zf;
      } catch {
      }
  }
  return ti.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Zg, ti.createPortal = function(n, r) {
    var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!tl(r))
      throw Error(f(200));
    return vm(n, r, null, o);
  }, ti.createRoot = function(n, r) {
    if (!tl(n))
      throw Error(f(299));
    var o = !1, s = "", d = Yp;
    return r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (s = r.identifierPrefix), r.onRecoverableError !== void 0 && (d = r.onRecoverableError)), r = Fp(n, 1, !1, null, null, o, !1, s, d), n[ci] = r.current, bi(n.nodeType === 8 ? n.parentNode : n), new Qf(r);
  }, ti.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(f(188)) : (n = Object.keys(n).join(","), Error(f(268, n)));
    return n = Ge(r), n = n === null ? null : n.stateNode, n;
  }, ti.flushSync = function(n) {
    return Mi(n);
  }, ti.hydrate = function(n, r, o) {
    if (!qf(r))
      throw Error(f(200));
    return Xf(null, n, r, !0, o);
  }, ti.hydrateRoot = function(n, r, o) {
    if (!tl(n))
      throw Error(f(405));
    var s = o != null && o.hydratedSources || null, d = !1, h = "", S = Yp;
    if (o != null && (o.unstable_strictMode === !0 && (d = !0), o.identifierPrefix !== void 0 && (h = o.identifierPrefix), o.onRecoverableError !== void 0 && (S = o.onRecoverableError)), r = Ip(r, null, n, 1, o ?? null, d, !1, h, S), n[ci] = r.current, bi(n), s)
      for (n = 0; n < s.length; n++)
        o = s[n], d = o._getVersion, d = d(o._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [o, d] : r.mutableSourceEagerHydrationData.push(
          o,
          d
        );
    return new _c(r);
  }, ti.render = function(n, r, o) {
    if (!qf(r))
      throw Error(f(200));
    return Xf(null, n, r, !1, o);
  }, ti.unmountComponentAtNode = function(n) {
    if (!qf(n))
      throw Error(f(40));
    return n._reactRootContainer ? (Mi(function() {
      Xf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[ci] = null;
      });
    }), !0) : !1;
  }, ti.unstable_batchedUpdates = $p, ti.unstable_renderSubtreeIntoContainer = function(n, r, o, s) {
    if (!qf(o))
      throw Error(f(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(f(38));
    return Xf(n, r, o, !1, s);
  }, ti.version = "18.2.0-next-9e3b772b8-20220608", ti;
}
var fR = {};
function dR() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (fR.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dR);
    } catch (v) {
      console.error(v);
    }
  }
}
fR.NODE_ENV === "production" ? (dR(), s0.exports = gN()) : s0.exports = yN();
var EN = s0.exports, _N = {}, Yv = EN;
if (_N.NODE_ENV === "production")
  Qv.createRoot = Yv.createRoot, Qv.hydrateRoot = Yv.hydrateRoot;
else {
  var Qy = Yv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Qv.createRoot = function(v, u) {
    Qy.usingClientEntryPoint = !0;
    try {
      return Yv.createRoot(v, u);
    } finally {
      Qy.usingClientEntryPoint = !1;
    }
  }, Qv.hydrateRoot = function(v, u, f) {
    Qy.usingClientEntryPoint = !0;
    try {
      return Yv.hydrateRoot(v, u, f);
    } finally {
      Qy.usingClientEntryPoint = !1;
    }
  };
}
class SN {
  constructor(u, f) {
    Ro(this, "width", 384);
    Ro(this, "height", 512);
    Object.assign(this, f), u.image && !(f != null && f.height) && ((u.image.naturalHeight - u.header.height) % 768 == 0 ? this.height = 768 : (u.image.naturalHeight - u.header.height) % 512 == 0 && (this.height = 512));
  }
}
class Rw {
  constructor(u) {
    Ro(this, "width", 384);
    Ro(this, "height", 256);
    Object.assign(this, u);
  }
}
const fg = class fg {
  constructor(u) {
    Ro(this, "cell");
    Ro(this, "header");
    Ro(this, "cols", 0);
    Ro(this, "rows", 0);
    Ro(this, "image");
    if (Object.assign(this, u), this.header = new Rw(u == null ? void 0 : u.header), this.cell = new SN(this, u == null ? void 0 : u.cell), this.image)
      if (this.header.width + this.cell.width * this.cols != this.image.naturalWidth || this.header.height + this.cell.height * this.rows != this.image.naturalHeight) {
        this.cols = Math.floor(this.image.naturalWidth / this.cell.width), this.rows = Math.floor(this.image.naturalHeight / this.cell.height);
        let f = this.image.naturalWidth - this.cell.width * this.cols, g = this.image.naturalHeight - this.cell.height * this.rows;
        this.header = new Rw({ width: f, height: g });
      } else
        this.cols = Math.floor((this.image.naturalWidth - this.header.width) / this.cell.width), this.rows = Math.floor((this.image.naturalHeight - this.header.height) / this.cell.height);
  }
  toJSON() {
    const {
      image: u,
      ...f
    } = this;
    return {
      ...f
    };
  }
};
Ro(fg, "Context", mt.createContext(new fg({})));
let pa = fg;
const y0 = ({ image: v, sx: u, sy: f, sw: g, sh: T }) => {
  const D = mt.useRef(null);
  return mt.useEffect(() => {
    const O = setInterval(() => {
      if (D.current) {
        const _ = D.current.getContext("2d");
        _ && v && (D.current.width = g, D.current.height = T, _.drawImage(
          v,
          u,
          // sx
          f,
          // sy
          g,
          // sw
          T,
          // sh
          0,
          // dx
          0,
          // dy
          g,
          // dw
          T
          // dh
        ), clearInterval(O));
      }
    }, 100);
  }, [v, u, f, g, T]), /* @__PURE__ */ fe.jsx("canvas", { className: "m-0", ref: D });
};
var pR = {};
(function(v) {
  Object.defineProperty(v, "__esModule", {
    value: !0
  }), v.default = v.useDeferredState = void 0;
  var u = f(mt);
  function f(Q) {
    return Q && Q.__esModule ? Q : { default: Q };
  }
  function g(Q, V) {
    return U(Q) || _(Q, V) || D(Q, V) || T();
  }
  function T() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function D(Q, V) {
    if (Q) {
      if (typeof Q == "string")
        return O(Q, V);
      var G = Object.prototype.toString.call(Q).slice(8, -1);
      if (G === "Object" && Q.constructor && (G = Q.constructor.name), G === "Map" || G === "Set")
        return Array.from(Q);
      if (G === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(G))
        return O(Q, V);
    }
  }
  function O(Q, V) {
    (V == null || V > Q.length) && (V = Q.length);
    for (var G = 0, q = new Array(V); G < V; G++)
      q[G] = Q[G];
    return q;
  }
  function _(Q, V) {
    if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(Q)))) {
      var G = [], q = !0, re = !1, Ee = void 0;
      try {
        for (var Ze = Q[Symbol.iterator](), Je; !(q = (Je = Ze.next()).done) && (G.push(Je.value), !(V && G.length === V)); q = !0)
          ;
      } catch (Re) {
        re = !0, Ee = Re;
      } finally {
        try {
          !q && Ze.return != null && Ze.return();
        } finally {
          if (re)
            throw Ee;
        }
      }
      return G;
    }
  }
  function U(Q) {
    if (Array.isArray(Q))
      return Q;
  }
  var F = function(V) {
    var G = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], q = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 500, re = u.default.useState(V), Ee = g(re, 2), Ze = Ee[0], Je = Ee[1], Re = u.default.useRef(G);
    (G.length !== Re.current.length || G.some(function(Ae, ce) {
      return Re.current[ce] !== Ae;
    })) && (Re.current = G);
    var de = Re.current;
    return u.default.useLayoutEffect(function() {
      var Ae = V;
      if (Ze !== Ae)
        if (de.includes(Ae))
          Je(Ae);
        else {
          var ce = window.setTimeout(function() {
            Je(Ae);
          }, q);
          return function() {
            return window.clearTimeout(ce);
          };
        }
    }, [V, q, Ze, de]), G.includes(V) ? V : Ze;
  };
  v.useDeferredState = F;
  var z = F;
  v.default = z;
})(pR);
const g0 = /* @__PURE__ */ sR(pR), vR = ({ colIndex: v }) => {
  var g;
  const u = mt.useContext(pa.Context), f = g0(u, [], 500);
  return (g = f.image) != null && g.complete ? /* @__PURE__ */ fe.jsx(
    y0,
    {
      image: f.image,
      sx: f.header.width + v * f.cell.width,
      sy: 0,
      sw: f.cell.width,
      sh: f.header.height
    }
  ) : /* @__PURE__ */ fe.jsx(fe.Fragment, {});
}, hR = ({ children: v, isHeader: u }) => {
  const f = mt.useContext(pa.Context);
  return /* @__PURE__ */ fe.jsx("div", { className: "row flex-nowrap", style: { height: u ? f.header.height : f.cell.height }, children: v });
}, og = ({ children: v, isTitle: u }) => {
  const f = mt.useContext(pa.Context), g = u ? f.header.width : f.cell.width;
  return /* @__PURE__ */ fe.jsx("div", { className: "col p-0" + (u ? "" : " border"), style: { width: g, minWidth: g }, children: v });
}, CN = () => {
  var f;
  const v = mt.useContext(pa.Context);
  let u = [/* @__PURE__ */ fe.jsx(og, { isTitle: !0, children: /* @__PURE__ */ fe.jsx(fe.Fragment, {}) }, 0)];
  if ((f = v.image) != null && f.complete)
    for (let g = 0; g < v.cols; g++)
      u.push(/* @__PURE__ */ fe.jsx(og, { children: /* @__PURE__ */ fe.jsx(vR, { colIndex: g }) }, g + 1));
  return /* @__PURE__ */ fe.jsx("div", { className: "border-bottom", children: /* @__PURE__ */ fe.jsx(hR, { isHeader: !0, children: u }) });
}, mR = ({ rowIndex: v }) => {
  var g;
  const u = mt.useContext(pa.Context), f = g0(u, [], 500);
  return (g = f.image) != null && g.complete ? /* @__PURE__ */ fe.jsx(
    y0,
    {
      image: f.image,
      sx: 0,
      sy: f.header.height + v * f.cell.height,
      sw: f.header.width,
      sh: f.cell.height
    }
  ) : /* @__PURE__ */ fe.jsx(fe.Fragment, {});
}, yR = ({ rowIndex: v, colIndex: u }) => {
  var T;
  const f = mt.useContext(pa.Context), g = g0(f, [], 500);
  return (T = g.image) != null && T.complete ? /* @__PURE__ */ fe.jsx(
    y0,
    {
      image: g.image,
      sx: g.header.width + u * g.cell.width,
      sy: g.header.height + v * g.cell.height,
      sw: g.cell.width,
      sh: g.cell.height
    }
  ) : /* @__PURE__ */ fe.jsx(fe.Fragment, {});
}, gR = mt.createContext(() => {
}), TN = ({ rowIndex: v, colIndex: u }) => {
  const f = mt.useContext(gR);
  return /* @__PURE__ */ fe.jsx("div", { onClick: () => f(v, u), children: /* @__PURE__ */ fe.jsx(yR, { rowIndex: v, colIndex: u }) });
}, bN = ({ rowIndex: v }) => {
  var g;
  const u = mt.useContext(pa.Context);
  let f = [/* @__PURE__ */ fe.jsx(og, { isTitle: !0, children: /* @__PURE__ */ fe.jsx(mR, { rowIndex: v }) }, 0)];
  if ((g = u.image) != null && g.complete)
    for (let T = 0; T < u.cols; T++)
      f.push(/* @__PURE__ */ fe.jsx(og, { children: /* @__PURE__ */ fe.jsx(TN, { rowIndex: v, colIndex: T }) }, T + 1));
  return /* @__PURE__ */ fe.jsx(hR, { children: f });
}, wN = ({ children: v }) => /* @__PURE__ */ fe.jsx("div", { className: "container", children: v }), RN = () => {
  var f;
  const v = mt.useContext(pa.Context);
  let u = [];
  if (u.push(/* @__PURE__ */ fe.jsx(CN, {}, 0)), (f = v.image) != null && f.complete)
    for (let g = 0; g < v.rows; g++)
      u.push(/* @__PURE__ */ fe.jsx(bN, { rowIndex: g }, g + 1));
  return /* @__PURE__ */ fe.jsx(wN, { children: u });
};
var Aa = "top", mi = "bottom", yi = "right", ka = "left", dg = "auto", Vd = [Aa, mi, yi, ka], Ic = "start", zd = "end", ER = "clippingParents", E0 = "viewport", kd = "popper", _R = "reference", c0 = /* @__PURE__ */ Vd.reduce(function(v, u) {
  return v.concat([u + "-" + Ic, u + "-" + zd]);
}, []), _0 = /* @__PURE__ */ [].concat(Vd, [dg]).reduce(function(v, u) {
  return v.concat([u, u + "-" + Ic, u + "-" + zd]);
}, []), SR = "beforeRead", CR = "read", TR = "afterRead", bR = "beforeMain", wR = "main", RR = "afterMain", xR = "beforeWrite", DR = "write", OR = "afterWrite", AR = [SR, CR, TR, bR, wR, RR, xR, DR, OR];
function vl(v) {
  return v ? (v.nodeName || "").toLowerCase() : null;
}
function gi(v) {
  if (v == null)
    return window;
  if (v.toString() !== "[object Window]") {
    var u = v.ownerDocument;
    return u && u.defaultView || window;
  }
  return v;
}
function Bc(v) {
  var u = gi(v).Element;
  return v instanceof u || v instanceof Element;
}
function Vi(v) {
  var u = gi(v).HTMLElement;
  return v instanceof u || v instanceof HTMLElement;
}
function S0(v) {
  if (typeof ShadowRoot > "u")
    return !1;
  var u = gi(v).ShadowRoot;
  return v instanceof u || v instanceof ShadowRoot;
}
function xN(v) {
  var u = v.state;
  Object.keys(u.elements).forEach(function(f) {
    var g = u.styles[f] || {}, T = u.attributes[f] || {}, D = u.elements[f];
    !Vi(D) || !vl(D) || (Object.assign(D.style, g), Object.keys(T).forEach(function(O) {
      var _ = T[O];
      _ === !1 ? D.removeAttribute(O) : D.setAttribute(O, _ === !0 ? "" : _);
    }));
  });
}
function DN(v) {
  var u = v.state, f = {
    popper: {
      position: u.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(u.elements.popper.style, f.popper), u.styles = f, u.elements.arrow && Object.assign(u.elements.arrow.style, f.arrow), function() {
    Object.keys(u.elements).forEach(function(g) {
      var T = u.elements[g], D = u.attributes[g] || {}, O = Object.keys(u.styles.hasOwnProperty(g) ? u.styles[g] : f[g]), _ = O.reduce(function(U, F) {
        return U[F] = "", U;
      }, {});
      !Vi(T) || !vl(T) || (Object.assign(T.style, _), Object.keys(D).forEach(function(U) {
        T.removeAttribute(U);
      }));
    });
  };
}
const C0 = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: xN,
  effect: DN,
  requires: ["computeStyles"]
};
function dl(v) {
  return v.split("-")[0];
}
var Vc = Math.max, lg = Math.min, Ud = Math.round;
function f0() {
  var v = navigator.userAgentData;
  return v != null && v.brands && Array.isArray(v.brands) ? v.brands.map(function(u) {
    return u.brand + "/" + u.version;
  }).join(" ") : navigator.userAgent;
}
function kR() {
  return !/^((?!chrome|android).)*safari/i.test(f0());
}
function jd(v, u, f) {
  u === void 0 && (u = !1), f === void 0 && (f = !1);
  var g = v.getBoundingClientRect(), T = 1, D = 1;
  u && Vi(v) && (T = v.offsetWidth > 0 && Ud(g.width) / v.offsetWidth || 1, D = v.offsetHeight > 0 && Ud(g.height) / v.offsetHeight || 1);
  var O = Bc(v) ? gi(v) : window, _ = O.visualViewport, U = !kR() && f, F = (g.left + (U && _ ? _.offsetLeft : 0)) / T, z = (g.top + (U && _ ? _.offsetTop : 0)) / D, Q = g.width / T, V = g.height / D;
  return {
    width: Q,
    height: V,
    top: z,
    right: F + Q,
    bottom: z + V,
    left: F,
    x: F,
    y: z
  };
}
function T0(v) {
  var u = jd(v), f = v.offsetWidth, g = v.offsetHeight;
  return Math.abs(u.width - f) <= 1 && (f = u.width), Math.abs(u.height - g) <= 1 && (g = u.height), {
    x: v.offsetLeft,
    y: v.offsetTop,
    width: f,
    height: g
  };
}
function NR(v, u) {
  var f = u.getRootNode && u.getRootNode();
  if (v.contains(u))
    return !0;
  if (f && S0(f)) {
    var g = u;
    do {
      if (g && v.isSameNode(g))
        return !0;
      g = g.parentNode || g.host;
    } while (g);
  }
  return !1;
}
function lu(v) {
  return gi(v).getComputedStyle(v);
}
function ON(v) {
  return ["table", "td", "th"].indexOf(vl(v)) >= 0;
}
function gs(v) {
  return ((Bc(v) ? v.ownerDocument : (
    // $FlowFixMe[prop-missing]
    v.document
  )) || window.document).documentElement;
}
function pg(v) {
  return vl(v) === "html" ? v : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    v.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    v.parentNode || // DOM Element detected
    (S0(v) ? v.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    gs(v)
  );
}
function xw(v) {
  return !Vi(v) || // https://github.com/popperjs/popper-core/issues/837
  lu(v).position === "fixed" ? null : v.offsetParent;
}
function AN(v) {
  var u = /firefox/i.test(f0()), f = /Trident/i.test(f0());
  if (f && Vi(v)) {
    var g = lu(v);
    if (g.position === "fixed")
      return null;
  }
  var T = pg(v);
  for (S0(T) && (T = T.host); Vi(T) && ["html", "body"].indexOf(vl(T)) < 0; ) {
    var D = lu(T);
    if (D.transform !== "none" || D.perspective !== "none" || D.contain === "paint" || ["transform", "perspective"].indexOf(D.willChange) !== -1 || u && D.willChange === "filter" || u && D.filter && D.filter !== "none")
      return T;
    T = T.parentNode;
  }
  return null;
}
function Jv(v) {
  for (var u = gi(v), f = xw(v); f && ON(f) && lu(f).position === "static"; )
    f = xw(f);
  return f && (vl(f) === "html" || vl(f) === "body" && lu(f).position === "static") ? u : f || AN(v) || u;
}
function b0(v) {
  return ["top", "bottom"].indexOf(v) >= 0 ? "x" : "y";
}
function qv(v, u, f) {
  return Vc(v, lg(u, f));
}
function kN(v, u, f) {
  var g = qv(v, u, f);
  return g > f ? f : g;
}
function LR() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function MR(v) {
  return Object.assign({}, LR(), v);
}
function zR(v, u) {
  return u.reduce(function(f, g) {
    return f[g] = v, f;
  }, {});
}
var NN = function(u, f) {
  return u = typeof u == "function" ? u(Object.assign({}, f.rects, {
    placement: f.placement
  })) : u, MR(typeof u != "number" ? u : zR(u, Vd));
};
function LN(v) {
  var u, f = v.state, g = v.name, T = v.options, D = f.elements.arrow, O = f.modifiersData.popperOffsets, _ = dl(f.placement), U = b0(_), F = [ka, yi].indexOf(_) >= 0, z = F ? "height" : "width";
  if (!(!D || !O)) {
    var Q = NN(T.padding, f), V = T0(D), G = U === "y" ? Aa : ka, q = U === "y" ? mi : yi, re = f.rects.reference[z] + f.rects.reference[U] - O[U] - f.rects.popper[z], Ee = O[U] - f.rects.reference[U], Ze = Jv(D), Je = Ze ? U === "y" ? Ze.clientHeight || 0 : Ze.clientWidth || 0 : 0, Re = re / 2 - Ee / 2, de = Q[G], Ae = Je - V[z] - Q[q], ce = Je / 2 - V[z] / 2 + Re, $e = qv(de, ce, Ae), Ne = U;
    f.modifiersData[g] = (u = {}, u[Ne] = $e, u.centerOffset = $e - ce, u);
  }
}
function MN(v) {
  var u = v.state, f = v.options, g = f.element, T = g === void 0 ? "[data-popper-arrow]" : g;
  T != null && (typeof T == "string" && (T = u.elements.popper.querySelector(T), !T) || NR(u.elements.popper, T) && (u.elements.arrow = T));
}
const UR = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: LN,
  effect: MN,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function $d(v) {
  return v.split("-")[1];
}
var zN = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function UN(v, u) {
  var f = v.x, g = v.y, T = u.devicePixelRatio || 1;
  return {
    x: Ud(f * T) / T || 0,
    y: Ud(g * T) / T || 0
  };
}
function Dw(v) {
  var u, f = v.popper, g = v.popperRect, T = v.placement, D = v.variation, O = v.offsets, _ = v.position, U = v.gpuAcceleration, F = v.adaptive, z = v.roundOffsets, Q = v.isFixed, V = O.x, G = V === void 0 ? 0 : V, q = O.y, re = q === void 0 ? 0 : q, Ee = typeof z == "function" ? z({
    x: G,
    y: re
  }) : {
    x: G,
    y: re
  };
  G = Ee.x, re = Ee.y;
  var Ze = O.hasOwnProperty("x"), Je = O.hasOwnProperty("y"), Re = ka, de = Aa, Ae = window;
  if (F) {
    var ce = Jv(f), $e = "clientHeight", Ne = "clientWidth";
    if (ce === gi(f) && (ce = gs(f), lu(ce).position !== "static" && _ === "absolute" && ($e = "scrollHeight", Ne = "scrollWidth")), ce = ce, T === Aa || (T === ka || T === yi) && D === zd) {
      de = mi;
      var Rt = Q && ce === Ae && Ae.visualViewport ? Ae.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        ce[$e]
      );
      re -= Rt - g.height, re *= U ? 1 : -1;
    }
    if (T === ka || (T === Aa || T === mi) && D === zd) {
      Re = yi;
      var Et = Q && ce === Ae && Ae.visualViewport ? Ae.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        ce[Ne]
      );
      G -= Et - g.width, G *= U ? 1 : -1;
    }
  }
  var gt = Object.assign({
    position: _
  }, F && zN), st = z === !0 ? UN({
    x: G,
    y: re
  }, gi(f)) : {
    x: G,
    y: re
  };
  if (G = st.x, re = st.y, U) {
    var Ct;
    return Object.assign({}, gt, (Ct = {}, Ct[de] = Je ? "0" : "", Ct[Re] = Ze ? "0" : "", Ct.transform = (Ae.devicePixelRatio || 1) <= 1 ? "translate(" + G + "px, " + re + "px)" : "translate3d(" + G + "px, " + re + "px, 0)", Ct));
  }
  return Object.assign({}, gt, (u = {}, u[de] = Je ? re + "px" : "", u[Re] = Ze ? G + "px" : "", u.transform = "", u));
}
function jN(v) {
  var u = v.state, f = v.options, g = f.gpuAcceleration, T = g === void 0 ? !0 : g, D = f.adaptive, O = D === void 0 ? !0 : D, _ = f.roundOffsets, U = _ === void 0 ? !0 : _, F = {
    placement: dl(u.placement),
    variation: $d(u.placement),
    popper: u.elements.popper,
    popperRect: u.rects.popper,
    gpuAcceleration: T,
    isFixed: u.options.strategy === "fixed"
  };
  u.modifiersData.popperOffsets != null && (u.styles.popper = Object.assign({}, u.styles.popper, Dw(Object.assign({}, F, {
    offsets: u.modifiersData.popperOffsets,
    position: u.options.strategy,
    adaptive: O,
    roundOffsets: U
  })))), u.modifiersData.arrow != null && (u.styles.arrow = Object.assign({}, u.styles.arrow, Dw(Object.assign({}, F, {
    offsets: u.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: U
  })))), u.attributes.popper = Object.assign({}, u.attributes.popper, {
    "data-popper-placement": u.placement
  });
}
const w0 = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: jN,
  data: {}
};
var qy = {
  passive: !0
};
function $N(v) {
  var u = v.state, f = v.instance, g = v.options, T = g.scroll, D = T === void 0 ? !0 : T, O = g.resize, _ = O === void 0 ? !0 : O, U = gi(u.elements.popper), F = [].concat(u.scrollParents.reference, u.scrollParents.popper);
  return D && F.forEach(function(z) {
    z.addEventListener("scroll", f.update, qy);
  }), _ && U.addEventListener("resize", f.update, qy), function() {
    D && F.forEach(function(z) {
      z.removeEventListener("scroll", f.update, qy);
    }), _ && U.removeEventListener("resize", f.update, qy);
  };
}
const R0 = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: $N,
  data: {}
};
var PN = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function rg(v) {
  return v.replace(/left|right|bottom|top/g, function(u) {
    return PN[u];
  });
}
var HN = {
  start: "end",
  end: "start"
};
function Ow(v) {
  return v.replace(/start|end/g, function(u) {
    return HN[u];
  });
}
function x0(v) {
  var u = gi(v), f = u.pageXOffset, g = u.pageYOffset;
  return {
    scrollLeft: f,
    scrollTop: g
  };
}
function D0(v) {
  return jd(gs(v)).left + x0(v).scrollLeft;
}
function FN(v, u) {
  var f = gi(v), g = gs(v), T = f.visualViewport, D = g.clientWidth, O = g.clientHeight, _ = 0, U = 0;
  if (T) {
    D = T.width, O = T.height;
    var F = kR();
    (F || !F && u === "fixed") && (_ = T.offsetLeft, U = T.offsetTop);
  }
  return {
    width: D,
    height: O,
    x: _ + D0(v),
    y: U
  };
}
function VN(v) {
  var u, f = gs(v), g = x0(v), T = (u = v.ownerDocument) == null ? void 0 : u.body, D = Vc(f.scrollWidth, f.clientWidth, T ? T.scrollWidth : 0, T ? T.clientWidth : 0), O = Vc(f.scrollHeight, f.clientHeight, T ? T.scrollHeight : 0, T ? T.clientHeight : 0), _ = -g.scrollLeft + D0(v), U = -g.scrollTop;
  return lu(T || f).direction === "rtl" && (_ += Vc(f.clientWidth, T ? T.clientWidth : 0) - D), {
    width: D,
    height: O,
    x: _,
    y: U
  };
}
function O0(v) {
  var u = lu(v), f = u.overflow, g = u.overflowX, T = u.overflowY;
  return /auto|scroll|overlay|hidden/.test(f + T + g);
}
function jR(v) {
  return ["html", "body", "#document"].indexOf(vl(v)) >= 0 ? v.ownerDocument.body : Vi(v) && O0(v) ? v : jR(pg(v));
}
function Xv(v, u) {
  var f;
  u === void 0 && (u = []);
  var g = jR(v), T = g === ((f = v.ownerDocument) == null ? void 0 : f.body), D = gi(g), O = T ? [D].concat(D.visualViewport || [], O0(g) ? g : []) : g, _ = u.concat(O);
  return T ? _ : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    _.concat(Xv(pg(O)))
  );
}
function d0(v) {
  return Object.assign({}, v, {
    left: v.x,
    top: v.y,
    right: v.x + v.width,
    bottom: v.y + v.height
  });
}
function IN(v, u) {
  var f = jd(v, !1, u === "fixed");
  return f.top = f.top + v.clientTop, f.left = f.left + v.clientLeft, f.bottom = f.top + v.clientHeight, f.right = f.left + v.clientWidth, f.width = v.clientWidth, f.height = v.clientHeight, f.x = f.left, f.y = f.top, f;
}
function Aw(v, u, f) {
  return u === E0 ? d0(FN(v, f)) : Bc(u) ? IN(u, f) : d0(VN(gs(v)));
}
function BN(v) {
  var u = Xv(pg(v)), f = ["absolute", "fixed"].indexOf(lu(v).position) >= 0, g = f && Vi(v) ? Jv(v) : v;
  return Bc(g) ? u.filter(function(T) {
    return Bc(T) && NR(T, g) && vl(T) !== "body";
  }) : [];
}
function YN(v, u, f, g) {
  var T = u === "clippingParents" ? BN(v) : [].concat(u), D = [].concat(T, [f]), O = D[0], _ = D.reduce(function(U, F) {
    var z = Aw(v, F, g);
    return U.top = Vc(z.top, U.top), U.right = lg(z.right, U.right), U.bottom = lg(z.bottom, U.bottom), U.left = Vc(z.left, U.left), U;
  }, Aw(v, O, g));
  return _.width = _.right - _.left, _.height = _.bottom - _.top, _.x = _.left, _.y = _.top, _;
}
function $R(v) {
  var u = v.reference, f = v.element, g = v.placement, T = g ? dl(g) : null, D = g ? $d(g) : null, O = u.x + u.width / 2 - f.width / 2, _ = u.y + u.height / 2 - f.height / 2, U;
  switch (T) {
    case Aa:
      U = {
        x: O,
        y: u.y - f.height
      };
      break;
    case mi:
      U = {
        x: O,
        y: u.y + u.height
      };
      break;
    case yi:
      U = {
        x: u.x + u.width,
        y: _
      };
      break;
    case ka:
      U = {
        x: u.x - f.width,
        y: _
      };
      break;
    default:
      U = {
        x: u.x,
        y: u.y
      };
  }
  var F = T ? b0(T) : null;
  if (F != null) {
    var z = F === "y" ? "height" : "width";
    switch (D) {
      case Ic:
        U[F] = U[F] - (u[z] / 2 - f[z] / 2);
        break;
      case zd:
        U[F] = U[F] + (u[z] / 2 - f[z] / 2);
        break;
    }
  }
  return U;
}
function Pd(v, u) {
  u === void 0 && (u = {});
  var f = u, g = f.placement, T = g === void 0 ? v.placement : g, D = f.strategy, O = D === void 0 ? v.strategy : D, _ = f.boundary, U = _ === void 0 ? ER : _, F = f.rootBoundary, z = F === void 0 ? E0 : F, Q = f.elementContext, V = Q === void 0 ? kd : Q, G = f.altBoundary, q = G === void 0 ? !1 : G, re = f.padding, Ee = re === void 0 ? 0 : re, Ze = MR(typeof Ee != "number" ? Ee : zR(Ee, Vd)), Je = V === kd ? _R : kd, Re = v.rects.popper, de = v.elements[q ? Je : V], Ae = YN(Bc(de) ? de : de.contextElement || gs(v.elements.popper), U, z, O), ce = jd(v.elements.reference), $e = $R({
    reference: ce,
    element: Re,
    strategy: "absolute",
    placement: T
  }), Ne = d0(Object.assign({}, Re, $e)), Rt = V === kd ? Ne : ce, Et = {
    top: Ae.top - Rt.top + Ze.top,
    bottom: Rt.bottom - Ae.bottom + Ze.bottom,
    left: Ae.left - Rt.left + Ze.left,
    right: Rt.right - Ae.right + Ze.right
  }, gt = v.modifiersData.offset;
  if (V === kd && gt) {
    var st = gt[T];
    Object.keys(Et).forEach(function(Ct) {
      var Ye = [yi, mi].indexOf(Ct) >= 0 ? 1 : -1, at = [Aa, mi].indexOf(Ct) >= 0 ? "y" : "x";
      Et[Ct] += st[at] * Ye;
    });
  }
  return Et;
}
function WN(v, u) {
  u === void 0 && (u = {});
  var f = u, g = f.placement, T = f.boundary, D = f.rootBoundary, O = f.padding, _ = f.flipVariations, U = f.allowedAutoPlacements, F = U === void 0 ? _0 : U, z = $d(g), Q = z ? _ ? c0 : c0.filter(function(q) {
    return $d(q) === z;
  }) : Vd, V = Q.filter(function(q) {
    return F.indexOf(q) >= 0;
  });
  V.length === 0 && (V = Q);
  var G = V.reduce(function(q, re) {
    return q[re] = Pd(v, {
      placement: re,
      boundary: T,
      rootBoundary: D,
      padding: O
    })[dl(re)], q;
  }, {});
  return Object.keys(G).sort(function(q, re) {
    return G[q] - G[re];
  });
}
function GN(v) {
  if (dl(v) === dg)
    return [];
  var u = rg(v);
  return [Ow(v), u, Ow(u)];
}
function KN(v) {
  var u = v.state, f = v.options, g = v.name;
  if (!u.modifiersData[g]._skip) {
    for (var T = f.mainAxis, D = T === void 0 ? !0 : T, O = f.altAxis, _ = O === void 0 ? !0 : O, U = f.fallbackPlacements, F = f.padding, z = f.boundary, Q = f.rootBoundary, V = f.altBoundary, G = f.flipVariations, q = G === void 0 ? !0 : G, re = f.allowedAutoPlacements, Ee = u.options.placement, Ze = dl(Ee), Je = Ze === Ee, Re = U || (Je || !q ? [rg(Ee)] : GN(Ee)), de = [Ee].concat(Re).reduce(function(Ie, ct) {
      return Ie.concat(dl(ct) === dg ? WN(u, {
        placement: ct,
        boundary: z,
        rootBoundary: Q,
        padding: F,
        flipVariations: q,
        allowedAutoPlacements: re
      }) : ct);
    }, []), Ae = u.rects.reference, ce = u.rects.popper, $e = /* @__PURE__ */ new Map(), Ne = !0, Rt = de[0], Et = 0; Et < de.length; Et++) {
      var gt = de[Et], st = dl(gt), Ct = $d(gt) === Ic, Ye = [Aa, mi].indexOf(st) >= 0, at = Ye ? "width" : "height", lt = Pd(u, {
        placement: gt,
        boundary: z,
        rootBoundary: Q,
        altBoundary: V,
        padding: F
      }), Ke = Ye ? Ct ? yi : ka : Ct ? mi : Aa;
      Ae[at] > ce[at] && (Ke = rg(Ke));
      var ee = rg(Ke), Se = [];
      if (D && Se.push(lt[st] <= 0), _ && Se.push(lt[Ke] <= 0, lt[ee] <= 0), Se.every(function(Ie) {
        return Ie;
      })) {
        Rt = gt, Ne = !1;
        break;
      }
      $e.set(gt, Se);
    }
    if (Ne)
      for (var A = q ? 3 : 1, te = function(ct) {
        var dt = de.find(function(_t) {
          var ut = $e.get(_t);
          if (ut)
            return ut.slice(0, ct).every(function(Gt) {
              return Gt;
            });
        });
        if (dt)
          return Rt = dt, "break";
      }, Te = A; Te > 0; Te--) {
        var We = te(Te);
        if (We === "break")
          break;
      }
    u.placement !== Rt && (u.modifiersData[g]._skip = !0, u.placement = Rt, u.reset = !0);
  }
}
const PR = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: KN,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function kw(v, u, f) {
  return f === void 0 && (f = {
    x: 0,
    y: 0
  }), {
    top: v.top - u.height - f.y,
    right: v.right - u.width + f.x,
    bottom: v.bottom - u.height + f.y,
    left: v.left - u.width - f.x
  };
}
function Nw(v) {
  return [Aa, yi, mi, ka].some(function(u) {
    return v[u] >= 0;
  });
}
function QN(v) {
  var u = v.state, f = v.name, g = u.rects.reference, T = u.rects.popper, D = u.modifiersData.preventOverflow, O = Pd(u, {
    elementContext: "reference"
  }), _ = Pd(u, {
    altBoundary: !0
  }), U = kw(O, g), F = kw(_, T, D), z = Nw(U), Q = Nw(F);
  u.modifiersData[f] = {
    referenceClippingOffsets: U,
    popperEscapeOffsets: F,
    isReferenceHidden: z,
    hasPopperEscaped: Q
  }, u.attributes.popper = Object.assign({}, u.attributes.popper, {
    "data-popper-reference-hidden": z,
    "data-popper-escaped": Q
  });
}
const HR = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: QN
};
function qN(v, u, f) {
  var g = dl(v), T = [ka, Aa].indexOf(g) >= 0 ? -1 : 1, D = typeof f == "function" ? f(Object.assign({}, u, {
    placement: v
  })) : f, O = D[0], _ = D[1];
  return O = O || 0, _ = (_ || 0) * T, [ka, yi].indexOf(g) >= 0 ? {
    x: _,
    y: O
  } : {
    x: O,
    y: _
  };
}
function XN(v) {
  var u = v.state, f = v.options, g = v.name, T = f.offset, D = T === void 0 ? [0, 0] : T, O = _0.reduce(function(z, Q) {
    return z[Q] = qN(Q, u.rects, D), z;
  }, {}), _ = O[u.placement], U = _.x, F = _.y;
  u.modifiersData.popperOffsets != null && (u.modifiersData.popperOffsets.x += U, u.modifiersData.popperOffsets.y += F), u.modifiersData[g] = O;
}
const FR = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: XN
};
function ZN(v) {
  var u = v.state, f = v.name;
  u.modifiersData[f] = $R({
    reference: u.rects.reference,
    element: u.rects.popper,
    strategy: "absolute",
    placement: u.placement
  });
}
const A0 = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: ZN,
  data: {}
};
function JN(v) {
  return v === "x" ? "y" : "x";
}
function eL(v) {
  var u = v.state, f = v.options, g = v.name, T = f.mainAxis, D = T === void 0 ? !0 : T, O = f.altAxis, _ = O === void 0 ? !1 : O, U = f.boundary, F = f.rootBoundary, z = f.altBoundary, Q = f.padding, V = f.tether, G = V === void 0 ? !0 : V, q = f.tetherOffset, re = q === void 0 ? 0 : q, Ee = Pd(u, {
    boundary: U,
    rootBoundary: F,
    padding: Q,
    altBoundary: z
  }), Ze = dl(u.placement), Je = $d(u.placement), Re = !Je, de = b0(Ze), Ae = JN(de), ce = u.modifiersData.popperOffsets, $e = u.rects.reference, Ne = u.rects.popper, Rt = typeof re == "function" ? re(Object.assign({}, u.rects, {
    placement: u.placement
  })) : re, Et = typeof Rt == "number" ? {
    mainAxis: Rt,
    altAxis: Rt
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, Rt), gt = u.modifiersData.offset ? u.modifiersData.offset[u.placement] : null, st = {
    x: 0,
    y: 0
  };
  if (ce) {
    if (D) {
      var Ct, Ye = de === "y" ? Aa : ka, at = de === "y" ? mi : yi, lt = de === "y" ? "height" : "width", Ke = ce[de], ee = Ke + Ee[Ye], Se = Ke - Ee[at], A = G ? -Ne[lt] / 2 : 0, te = Je === Ic ? $e[lt] : Ne[lt], Te = Je === Ic ? -Ne[lt] : -$e[lt], We = u.elements.arrow, Ie = G && We ? T0(We) : {
        width: 0,
        height: 0
      }, ct = u.modifiersData["arrow#persistent"] ? u.modifiersData["arrow#persistent"].padding : LR(), dt = ct[Ye], _t = ct[at], ut = qv(0, $e[lt], Ie[lt]), Gt = Re ? $e[lt] / 2 - A - ut - dt - Et.mainAxis : te - ut - dt - Et.mainAxis, Qn = Re ? -$e[lt] / 2 + A + ut + _t + Et.mainAxis : Te + ut + _t + Et.mainAxis, Mn = u.elements.arrow && Jv(u.elements.arrow), Tr = Mn ? de === "y" ? Mn.clientTop || 0 : Mn.clientLeft || 0 : 0, qn = (Ct = gt == null ? void 0 : gt[de]) != null ? Ct : 0, hn = Ke + Gt - qn - Tr, Xn = Ke + Qn - qn, Rn = qv(G ? lg(ee, hn) : ee, Ke, G ? Vc(Se, Xn) : Se);
      ce[de] = Rn, st[de] = Rn - Ke;
    }
    if (_) {
      var En, xn = de === "x" ? Aa : ka, cr = de === "x" ? mi : yi, mn = ce[Ae], yn = Ae === "y" ? "height" : "width", br = mn + Ee[xn], wr = mn - Ee[cr], In = [Aa, ka].indexOf(Ze) !== -1, Rr = (En = gt == null ? void 0 : gt[Ae]) != null ? En : 0, Bn = In ? br : mn - $e[yn] - Ne[yn] - Rr + Et.altAxis, rr = In ? mn + $e[yn] + Ne[yn] - Rr - Et.altAxis : wr, en = G && In ? kN(Bn, mn, rr) : qv(G ? Bn : br, mn, G ? rr : wr);
      ce[Ae] = en, st[Ae] = en - mn;
    }
    u.modifiersData[g] = st;
  }
}
const VR = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: eL,
  requiresIfExists: ["offset"]
};
function tL(v) {
  return {
    scrollLeft: v.scrollLeft,
    scrollTop: v.scrollTop
  };
}
function nL(v) {
  return v === gi(v) || !Vi(v) ? x0(v) : tL(v);
}
function rL(v) {
  var u = v.getBoundingClientRect(), f = Ud(u.width) / v.offsetWidth || 1, g = Ud(u.height) / v.offsetHeight || 1;
  return f !== 1 || g !== 1;
}
function aL(v, u, f) {
  f === void 0 && (f = !1);
  var g = Vi(u), T = Vi(u) && rL(u), D = gs(u), O = jd(v, T, f), _ = {
    scrollLeft: 0,
    scrollTop: 0
  }, U = {
    x: 0,
    y: 0
  };
  return (g || !g && !f) && ((vl(u) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  O0(D)) && (_ = nL(u)), Vi(u) ? (U = jd(u, !0), U.x += u.clientLeft, U.y += u.clientTop) : D && (U.x = D0(D))), {
    x: O.left + _.scrollLeft - U.x,
    y: O.top + _.scrollTop - U.y,
    width: O.width,
    height: O.height
  };
}
function iL(v) {
  var u = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Set(), g = [];
  v.forEach(function(D) {
    u.set(D.name, D);
  });
  function T(D) {
    f.add(D.name);
    var O = [].concat(D.requires || [], D.requiresIfExists || []);
    O.forEach(function(_) {
      if (!f.has(_)) {
        var U = u.get(_);
        U && T(U);
      }
    }), g.push(D);
  }
  return v.forEach(function(D) {
    f.has(D.name) || T(D);
  }), g;
}
function oL(v) {
  var u = iL(v);
  return AR.reduce(function(f, g) {
    return f.concat(u.filter(function(T) {
      return T.phase === g;
    }));
  }, []);
}
function lL(v) {
  var u;
  return function() {
    return u || (u = new Promise(function(f) {
      Promise.resolve().then(function() {
        u = void 0, f(v());
      });
    })), u;
  };
}
function uL(v) {
  var u = v.reduce(function(f, g) {
    var T = f[g.name];
    return f[g.name] = T ? Object.assign({}, T, g, {
      options: Object.assign({}, T.options, g.options),
      data: Object.assign({}, T.data, g.data)
    }) : g, f;
  }, {});
  return Object.keys(u).map(function(f) {
    return u[f];
  });
}
var Lw = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Mw() {
  for (var v = arguments.length, u = new Array(v), f = 0; f < v; f++)
    u[f] = arguments[f];
  return !u.some(function(g) {
    return !(g && typeof g.getBoundingClientRect == "function");
  });
}
function vg(v) {
  v === void 0 && (v = {});
  var u = v, f = u.defaultModifiers, g = f === void 0 ? [] : f, T = u.defaultOptions, D = T === void 0 ? Lw : T;
  return function(_, U, F) {
    F === void 0 && (F = D);
    var z = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Lw, D),
      modifiersData: {},
      elements: {
        reference: _,
        popper: U
      },
      attributes: {},
      styles: {}
    }, Q = [], V = !1, G = {
      state: z,
      setOptions: function(Ze) {
        var Je = typeof Ze == "function" ? Ze(z.options) : Ze;
        re(), z.options = Object.assign({}, D, z.options, Je), z.scrollParents = {
          reference: Bc(_) ? Xv(_) : _.contextElement ? Xv(_.contextElement) : [],
          popper: Xv(U)
        };
        var Re = oL(uL([].concat(g, z.options.modifiers)));
        return z.orderedModifiers = Re.filter(function(de) {
          return de.enabled;
        }), q(), G.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!V) {
          var Ze = z.elements, Je = Ze.reference, Re = Ze.popper;
          if (Mw(Je, Re)) {
            z.rects = {
              reference: aL(Je, Jv(Re), z.options.strategy === "fixed"),
              popper: T0(Re)
            }, z.reset = !1, z.placement = z.options.placement, z.orderedModifiers.forEach(function(Et) {
              return z.modifiersData[Et.name] = Object.assign({}, Et.data);
            });
            for (var de = 0; de < z.orderedModifiers.length; de++) {
              if (z.reset === !0) {
                z.reset = !1, de = -1;
                continue;
              }
              var Ae = z.orderedModifiers[de], ce = Ae.fn, $e = Ae.options, Ne = $e === void 0 ? {} : $e, Rt = Ae.name;
              typeof ce == "function" && (z = ce({
                state: z,
                options: Ne,
                name: Rt,
                instance: G
              }) || z);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: lL(function() {
        return new Promise(function(Ee) {
          G.forceUpdate(), Ee(z);
        });
      }),
      destroy: function() {
        re(), V = !0;
      }
    };
    if (!Mw(_, U))
      return G;
    G.setOptions(F).then(function(Ee) {
      !V && F.onFirstUpdate && F.onFirstUpdate(Ee);
    });
    function q() {
      z.orderedModifiers.forEach(function(Ee) {
        var Ze = Ee.name, Je = Ee.options, Re = Je === void 0 ? {} : Je, de = Ee.effect;
        if (typeof de == "function") {
          var Ae = de({
            state: z,
            name: Ze,
            instance: G,
            options: Re
          }), ce = function() {
          };
          Q.push(Ae || ce);
        }
      });
    }
    function re() {
      Q.forEach(function(Ee) {
        return Ee();
      }), Q = [];
    }
    return G;
  };
}
var sL = /* @__PURE__ */ vg(), cL = [R0, A0, w0, C0], fL = /* @__PURE__ */ vg({
  defaultModifiers: cL
}), dL = [R0, A0, w0, C0, FR, PR, VR, UR, HR], k0 = /* @__PURE__ */ vg({
  defaultModifiers: dL
});
const IR = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  afterMain: RR,
  afterRead: TR,
  afterWrite: OR,
  applyStyles: C0,
  arrow: UR,
  auto: dg,
  basePlacements: Vd,
  beforeMain: bR,
  beforeRead: SR,
  beforeWrite: xR,
  bottom: mi,
  clippingParents: ER,
  computeStyles: w0,
  createPopper: k0,
  createPopperBase: sL,
  createPopperLite: fL,
  detectOverflow: Pd,
  end: zd,
  eventListeners: R0,
  flip: PR,
  hide: HR,
  left: ka,
  main: wR,
  modifierPhases: AR,
  offset: FR,
  placements: _0,
  popper: kd,
  popperGenerator: vg,
  popperOffsets: A0,
  preventOverflow: VR,
  read: CR,
  reference: _R,
  right: yi,
  start: Ic,
  top: Aa,
  variationPlacements: c0,
  viewport: E0,
  write: DR
}, Symbol.toStringTag, { value: "Module" }));
/*!
  * Bootstrap v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
const vs = /* @__PURE__ */ new Map(), WS = {
  set(v, u, f) {
    vs.has(v) || vs.set(v, /* @__PURE__ */ new Map());
    const g = vs.get(v);
    if (!g.has(u) && g.size !== 0) {
      console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(g.keys())[0]}.`);
      return;
    }
    g.set(u, f);
  },
  get(v, u) {
    return vs.has(v) && vs.get(v).get(u) || null;
  },
  remove(v, u) {
    if (!vs.has(v))
      return;
    const f = vs.get(v);
    f.delete(u), f.size === 0 && vs.delete(v);
  }
}, pL = 1e6, vL = 1e3, p0 = "transitionend", BR = (v) => (v && window.CSS && window.CSS.escape && (v = v.replace(/#([^\s"#']+)/g, (u, f) => `#${CSS.escape(f)}`)), v), hL = (v) => v == null ? `${v}` : Object.prototype.toString.call(v).match(/\s([a-z]+)/i)[1].toLowerCase(), mL = (v) => {
  do
    v += Math.floor(Math.random() * pL);
  while (document.getElementById(v));
  return v;
}, yL = (v) => {
  if (!v)
    return 0;
  let {
    transitionDuration: u,
    transitionDelay: f
  } = window.getComputedStyle(v);
  const g = Number.parseFloat(u), T = Number.parseFloat(f);
  return !g && !T ? 0 : (u = u.split(",")[0], f = f.split(",")[0], (Number.parseFloat(u) + Number.parseFloat(f)) * vL);
}, YR = (v) => {
  v.dispatchEvent(new Event(p0));
}, iu = (v) => !v || typeof v != "object" ? !1 : (typeof v.jquery < "u" && (v = v[0]), typeof v.nodeType < "u"), hs = (v) => iu(v) ? v.jquery ? v[0] : v : typeof v == "string" && v.length > 0 ? document.querySelector(BR(v)) : null, Id = (v) => {
  if (!iu(v) || v.getClientRects().length === 0)
    return !1;
  const u = getComputedStyle(v).getPropertyValue("visibility") === "visible", f = v.closest("details:not([open])");
  if (!f)
    return u;
  if (f !== v) {
    const g = v.closest("summary");
    if (g && g.parentNode !== f || g === null)
      return !1;
  }
  return u;
}, ms = (v) => !v || v.nodeType !== Node.ELEMENT_NODE || v.classList.contains("disabled") ? !0 : typeof v.disabled < "u" ? v.disabled : v.hasAttribute("disabled") && v.getAttribute("disabled") !== "false", WR = (v) => {
  if (!document.documentElement.attachShadow)
    return null;
  if (typeof v.getRootNode == "function") {
    const u = v.getRootNode();
    return u instanceof ShadowRoot ? u : null;
  }
  return v instanceof ShadowRoot ? v : v.parentNode ? WR(v.parentNode) : null;
}, ug = () => {
}, eh = (v) => {
  v.offsetHeight;
}, GR = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, GS = [], gL = (v) => {
  document.readyState === "loading" ? (GS.length || document.addEventListener("DOMContentLoaded", () => {
    for (const u of GS)
      u();
  }), GS.push(v)) : v();
}, Ii = () => document.documentElement.dir === "rtl", Yi = (v) => {
  gL(() => {
    const u = GR();
    if (u) {
      const f = v.NAME, g = u.fn[f];
      u.fn[f] = v.jQueryInterface, u.fn[f].Constructor = v, u.fn[f].noConflict = () => (u.fn[f] = g, v.jQueryInterface);
    }
  });
}, ni = (v, u = [], f = v) => typeof v == "function" ? v(...u) : f, KR = (v, u, f = !0) => {
  if (!f) {
    ni(v);
    return;
  }
  const g = 5, T = yL(u) + g;
  let D = !1;
  const O = ({
    target: _
  }) => {
    _ === u && (D = !0, u.removeEventListener(p0, O), ni(v));
  };
  u.addEventListener(p0, O), setTimeout(() => {
    D || YR(u);
  }, T);
}, N0 = (v, u, f, g) => {
  const T = v.length;
  let D = v.indexOf(u);
  return D === -1 ? !f && g ? v[T - 1] : v[0] : (D += f ? 1 : -1, g && (D = (D + T) % T), v[Math.max(0, Math.min(D, T - 1))]);
}, EL = /[^.]*(?=\..*)\.|.*/, _L = /\..*/, SL = /::\d+$/, KS = {};
let zw = 1;
const QR = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
}, CL = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
function qR(v, u) {
  return u && `${u}::${zw++}` || v.uidEvent || zw++;
}
function XR(v) {
  const u = qR(v);
  return v.uidEvent = u, KS[u] = KS[u] || {}, KS[u];
}
function TL(v, u) {
  return function f(g) {
    return L0(g, {
      delegateTarget: v
    }), f.oneOff && le.off(v, g.type, u), u.apply(v, [g]);
  };
}
function bL(v, u, f) {
  return function g(T) {
    const D = v.querySelectorAll(u);
    for (let {
      target: O
    } = T; O && O !== this; O = O.parentNode)
      for (const _ of D)
        if (_ === O)
          return L0(T, {
            delegateTarget: O
          }), g.oneOff && le.off(v, T.type, u, f), f.apply(O, [T]);
  };
}
function ZR(v, u, f = null) {
  return Object.values(v).find((g) => g.callable === u && g.delegationSelector === f);
}
function JR(v, u, f) {
  const g = typeof u == "string", T = g ? f : u || f;
  let D = e1(v);
  return CL.has(D) || (D = v), [g, T, D];
}
function Uw(v, u, f, g, T) {
  if (typeof u != "string" || !v)
    return;
  let [D, O, _] = JR(u, f, g);
  u in QR && (O = ((q) => function(re) {
    if (!re.relatedTarget || re.relatedTarget !== re.delegateTarget && !re.delegateTarget.contains(re.relatedTarget))
      return q.call(this, re);
  })(O));
  const U = XR(v), F = U[_] || (U[_] = {}), z = ZR(F, O, D ? f : null);
  if (z) {
    z.oneOff = z.oneOff && T;
    return;
  }
  const Q = qR(O, u.replace(EL, "")), V = D ? bL(v, f, O) : TL(v, O);
  V.delegationSelector = D ? f : null, V.callable = O, V.oneOff = T, V.uidEvent = Q, F[Q] = V, v.addEventListener(_, V, D);
}
function v0(v, u, f, g, T) {
  const D = ZR(u[f], g, T);
  D && (v.removeEventListener(f, D, !!T), delete u[f][D.uidEvent]);
}
function wL(v, u, f, g) {
  const T = u[f] || {};
  for (const [D, O] of Object.entries(T))
    D.includes(g) && v0(v, u, f, O.callable, O.delegationSelector);
}
function e1(v) {
  return v = v.replace(_L, ""), QR[v] || v;
}
const le = {
  on(v, u, f, g) {
    Uw(v, u, f, g, !1);
  },
  one(v, u, f, g) {
    Uw(v, u, f, g, !0);
  },
  off(v, u, f, g) {
    if (typeof u != "string" || !v)
      return;
    const [T, D, O] = JR(u, f, g), _ = O !== u, U = XR(v), F = U[O] || {}, z = u.startsWith(".");
    if (typeof D < "u") {
      if (!Object.keys(F).length)
        return;
      v0(v, U, O, D, T ? f : null);
      return;
    }
    if (z)
      for (const Q of Object.keys(U))
        wL(v, U, Q, u.slice(1));
    for (const [Q, V] of Object.entries(F)) {
      const G = Q.replace(SL, "");
      (!_ || u.includes(G)) && v0(v, U, O, V.callable, V.delegationSelector);
    }
  },
  trigger(v, u, f) {
    if (typeof u != "string" || !v)
      return null;
    const g = GR(), T = e1(u), D = u !== T;
    let O = null, _ = !0, U = !0, F = !1;
    D && g && (O = g.Event(u, f), g(v).trigger(O), _ = !O.isPropagationStopped(), U = !O.isImmediatePropagationStopped(), F = O.isDefaultPrevented());
    const z = L0(new Event(u, {
      bubbles: _,
      cancelable: !0
    }), f);
    return F && z.preventDefault(), U && v.dispatchEvent(z), z.defaultPrevented && O && O.preventDefault(), z;
  }
};
function L0(v, u = {}) {
  for (const [f, g] of Object.entries(u))
    try {
      v[f] = g;
    } catch {
      Object.defineProperty(v, f, {
        configurable: !0,
        get() {
          return g;
        }
      });
    }
  return v;
}
function jw(v) {
  if (v === "true")
    return !0;
  if (v === "false")
    return !1;
  if (v === Number(v).toString())
    return Number(v);
  if (v === "" || v === "null")
    return null;
  if (typeof v != "string")
    return v;
  try {
    return JSON.parse(decodeURIComponent(v));
  } catch {
    return v;
  }
}
function QS(v) {
  return v.replace(/[A-Z]/g, (u) => `-${u.toLowerCase()}`);
}
const ou = {
  setDataAttribute(v, u, f) {
    v.setAttribute(`data-bs-${QS(u)}`, f);
  },
  removeDataAttribute(v, u) {
    v.removeAttribute(`data-bs-${QS(u)}`);
  },
  getDataAttributes(v) {
    if (!v)
      return {};
    const u = {}, f = Object.keys(v.dataset).filter((g) => g.startsWith("bs") && !g.startsWith("bsConfig"));
    for (const g of f) {
      let T = g.replace(/^bs/, "");
      T = T.charAt(0).toLowerCase() + T.slice(1, T.length), u[T] = jw(v.dataset[g]);
    }
    return u;
  },
  getDataAttribute(v, u) {
    return jw(v.getAttribute(`data-bs-${QS(u)}`));
  }
};
class th {
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
  _getConfig(u) {
    return u = this._mergeConfigObj(u), u = this._configAfterMerge(u), this._typeCheckConfig(u), u;
  }
  _configAfterMerge(u) {
    return u;
  }
  _mergeConfigObj(u, f) {
    const g = iu(f) ? ou.getDataAttribute(f, "config") : {};
    return {
      ...this.constructor.Default,
      ...typeof g == "object" ? g : {},
      ...iu(f) ? ou.getDataAttributes(f) : {},
      ...typeof u == "object" ? u : {}
    };
  }
  _typeCheckConfig(u, f = this.constructor.DefaultType) {
    for (const [g, T] of Object.entries(f)) {
      const D = u[g], O = iu(D) ? "element" : hL(D);
      if (!new RegExp(T).test(O))
        throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${g}" provided type "${O}" but expected type "${T}".`);
    }
  }
}
const RL = "5.3.2";
class xo extends th {
  constructor(u, f) {
    super(), u = hs(u), u && (this._element = u, this._config = this._getConfig(f), WS.set(this._element, this.constructor.DATA_KEY, this));
  }
  // Public
  dispose() {
    WS.remove(this._element, this.constructor.DATA_KEY), le.off(this._element, this.constructor.EVENT_KEY);
    for (const u of Object.getOwnPropertyNames(this))
      this[u] = null;
  }
  _queueCallback(u, f, g = !0) {
    KR(u, f, g);
  }
  _getConfig(u) {
    return u = this._mergeConfigObj(u, this._element), u = this._configAfterMerge(u), this._typeCheckConfig(u), u;
  }
  // Static
  static getInstance(u) {
    return WS.get(hs(u), this.DATA_KEY);
  }
  static getOrCreateInstance(u, f = {}) {
    return this.getInstance(u) || new this(u, typeof f == "object" ? f : null);
  }
  static get VERSION() {
    return RL;
  }
  static get DATA_KEY() {
    return `bs.${this.NAME}`;
  }
  static get EVENT_KEY() {
    return `.${this.DATA_KEY}`;
  }
  static eventName(u) {
    return `${u}${this.EVENT_KEY}`;
  }
}
const qS = (v) => {
  let u = v.getAttribute("data-bs-target");
  if (!u || u === "#") {
    let f = v.getAttribute("href");
    if (!f || !f.includes("#") && !f.startsWith("."))
      return null;
    f.includes("#") && !f.startsWith("#") && (f = `#${f.split("#")[1]}`), u = f && f !== "#" ? BR(f.trim()) : null;
  }
  return u;
}, rt = {
  find(v, u = document.documentElement) {
    return [].concat(...Element.prototype.querySelectorAll.call(u, v));
  },
  findOne(v, u = document.documentElement) {
    return Element.prototype.querySelector.call(u, v);
  },
  children(v, u) {
    return [].concat(...v.children).filter((f) => f.matches(u));
  },
  parents(v, u) {
    const f = [];
    let g = v.parentNode.closest(u);
    for (; g; )
      f.push(g), g = g.parentNode.closest(u);
    return f;
  },
  prev(v, u) {
    let f = v.previousElementSibling;
    for (; f; ) {
      if (f.matches(u))
        return [f];
      f = f.previousElementSibling;
    }
    return [];
  },
  // TODO: this is now unused; remove later along with prev()
  next(v, u) {
    let f = v.nextElementSibling;
    for (; f; ) {
      if (f.matches(u))
        return [f];
      f = f.nextElementSibling;
    }
    return [];
  },
  focusableChildren(v) {
    const u = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((f) => `${f}:not([tabindex^="-"])`).join(",");
    return this.find(u, v).filter((f) => !ms(f) && Id(f));
  },
  getSelectorFromElement(v) {
    const u = qS(v);
    return u && rt.findOne(u) ? u : null;
  },
  getElementFromSelector(v) {
    const u = qS(v);
    return u ? rt.findOne(u) : null;
  },
  getMultipleElementsFromSelector(v) {
    const u = qS(v);
    return u ? rt.find(u) : [];
  }
}, hg = (v, u = "hide") => {
  const f = `click.dismiss${v.EVENT_KEY}`, g = v.NAME;
  le.on(document, f, `[data-bs-dismiss="${g}"]`, function(T) {
    if (["A", "AREA"].includes(this.tagName) && T.preventDefault(), ms(this))
      return;
    const D = rt.getElementFromSelector(this) || this.closest(`.${g}`);
    v.getOrCreateInstance(D)[u]();
  });
}, xL = "alert", DL = "bs.alert", t1 = `.${DL}`, OL = `close${t1}`, AL = `closed${t1}`, kL = "fade", NL = "show";
class mg extends xo {
  // Getters
  static get NAME() {
    return xL;
  }
  // Public
  close() {
    if (le.trigger(this._element, OL).defaultPrevented)
      return;
    this._element.classList.remove(NL);
    const f = this._element.classList.contains(kL);
    this._queueCallback(() => this._destroyElement(), this._element, f);
  }
  // Private
  _destroyElement() {
    this._element.remove(), le.trigger(this._element, AL), this.dispose();
  }
  // Static
  static jQueryInterface(u) {
    return this.each(function() {
      const f = mg.getOrCreateInstance(this);
      if (typeof u == "string") {
        if (f[u] === void 0 || u.startsWith("_") || u === "constructor")
          throw new TypeError(`No method named "${u}"`);
        f[u](this);
      }
    });
  }
}
hg(mg, "close");
Yi(mg);
const LL = "button", ML = "bs.button", zL = `.${ML}`, UL = ".data-api", jL = "active", $w = '[data-bs-toggle="button"]', $L = `click${zL}${UL}`;
class yg extends xo {
  // Getters
  static get NAME() {
    return LL;
  }
  // Public
  toggle() {
    this._element.setAttribute("aria-pressed", this._element.classList.toggle(jL));
  }
  // Static
  static jQueryInterface(u) {
    return this.each(function() {
      const f = yg.getOrCreateInstance(this);
      u === "toggle" && f[u]();
    });
  }
}
le.on(document, $L, $w, (v) => {
  v.preventDefault();
  const u = v.target.closest($w);
  yg.getOrCreateInstance(u).toggle();
});
Yi(yg);
const PL = "swipe", Bd = ".bs.swipe", HL = `touchstart${Bd}`, FL = `touchmove${Bd}`, VL = `touchend${Bd}`, IL = `pointerdown${Bd}`, BL = `pointerup${Bd}`, YL = "touch", WL = "pen", GL = "pointer-event", KL = 40, QL = {
  endCallback: null,
  leftCallback: null,
  rightCallback: null
}, qL = {
  endCallback: "(function|null)",
  leftCallback: "(function|null)",
  rightCallback: "(function|null)"
};
class sg extends th {
  constructor(u, f) {
    super(), this._element = u, !(!u || !sg.isSupported()) && (this._config = this._getConfig(f), this._deltaX = 0, this._supportPointerEvents = !!window.PointerEvent, this._initEvents());
  }
  // Getters
  static get Default() {
    return QL;
  }
  static get DefaultType() {
    return qL;
  }
  static get NAME() {
    return PL;
  }
  // Public
  dispose() {
    le.off(this._element, Bd);
  }
  // Private
  _start(u) {
    if (!this._supportPointerEvents) {
      this._deltaX = u.touches[0].clientX;
      return;
    }
    this._eventIsPointerPenTouch(u) && (this._deltaX = u.clientX);
  }
  _end(u) {
    this._eventIsPointerPenTouch(u) && (this._deltaX = u.clientX - this._deltaX), this._handleSwipe(), ni(this._config.endCallback);
  }
  _move(u) {
    this._deltaX = u.touches && u.touches.length > 1 ? 0 : u.touches[0].clientX - this._deltaX;
  }
  _handleSwipe() {
    const u = Math.abs(this._deltaX);
    if (u <= KL)
      return;
    const f = u / this._deltaX;
    this._deltaX = 0, f && ni(f > 0 ? this._config.rightCallback : this._config.leftCallback);
  }
  _initEvents() {
    this._supportPointerEvents ? (le.on(this._element, IL, (u) => this._start(u)), le.on(this._element, BL, (u) => this._end(u)), this._element.classList.add(GL)) : (le.on(this._element, HL, (u) => this._start(u)), le.on(this._element, FL, (u) => this._move(u)), le.on(this._element, VL, (u) => this._end(u)));
  }
  _eventIsPointerPenTouch(u) {
    return this._supportPointerEvents && (u.pointerType === WL || u.pointerType === YL);
  }
  // Static
  static isSupported() {
    return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
  }
}
const XL = "carousel", ZL = "bs.carousel", Es = `.${ZL}`, n1 = ".data-api", JL = "ArrowLeft", eM = "ArrowRight", tM = 500, Wv = "next", Od = "prev", Nd = "left", ag = "right", nM = `slide${Es}`, XS = `slid${Es}`, rM = `keydown${Es}`, aM = `mouseenter${Es}`, iM = `mouseleave${Es}`, oM = `dragstart${Es}`, lM = `load${Es}${n1}`, uM = `click${Es}${n1}`, r1 = "carousel", Xy = "active", sM = "slide", cM = "carousel-item-end", fM = "carousel-item-start", dM = "carousel-item-next", pM = "carousel-item-prev", a1 = ".active", i1 = ".carousel-item", vM = a1 + i1, hM = ".carousel-item img", mM = ".carousel-indicators", yM = "[data-bs-slide], [data-bs-slide-to]", gM = '[data-bs-ride="carousel"]', EM = {
  [JL]: ag,
  [eM]: Nd
}, _M = {
  interval: 5e3,
  keyboard: !0,
  pause: "hover",
  ride: !1,
  touch: !0,
  wrap: !0
}, SM = {
  interval: "(number|boolean)",
  // TODO:v6 remove boolean support
  keyboard: "boolean",
  pause: "(string|boolean)",
  ride: "(boolean|string)",
  touch: "boolean",
  wrap: "boolean"
};
class nh extends xo {
  constructor(u, f) {
    super(u, f), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = rt.findOne(mM, this._element), this._addEventListeners(), this._config.ride === r1 && this.cycle();
  }
  // Getters
  static get Default() {
    return _M;
  }
  static get DefaultType() {
    return SM;
  }
  static get NAME() {
    return XL;
  }
  // Public
  next() {
    this._slide(Wv);
  }
  nextWhenVisible() {
    !document.hidden && Id(this._element) && this.next();
  }
  prev() {
    this._slide(Od);
  }
  pause() {
    this._isSliding && YR(this._element), this._clearInterval();
  }
  cycle() {
    this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
  }
  _maybeEnableCycle() {
    if (this._config.ride) {
      if (this._isSliding) {
        le.one(this._element, XS, () => this.cycle());
        return;
      }
      this.cycle();
    }
  }
  to(u) {
    const f = this._getItems();
    if (u > f.length - 1 || u < 0)
      return;
    if (this._isSliding) {
      le.one(this._element, XS, () => this.to(u));
      return;
    }
    const g = this._getItemIndex(this._getActive());
    if (g === u)
      return;
    const T = u > g ? Wv : Od;
    this._slide(T, f[u]);
  }
  dispose() {
    this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
  }
  // Private
  _configAfterMerge(u) {
    return u.defaultInterval = u.interval, u;
  }
  _addEventListeners() {
    this._config.keyboard && le.on(this._element, rM, (u) => this._keydown(u)), this._config.pause === "hover" && (le.on(this._element, aM, () => this.pause()), le.on(this._element, iM, () => this._maybeEnableCycle())), this._config.touch && sg.isSupported() && this._addTouchEventListeners();
  }
  _addTouchEventListeners() {
    for (const g of rt.find(hM, this._element))
      le.on(g, oM, (T) => T.preventDefault());
    const f = {
      leftCallback: () => this._slide(this._directionToOrder(Nd)),
      rightCallback: () => this._slide(this._directionToOrder(ag)),
      endCallback: () => {
        this._config.pause === "hover" && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), tM + this._config.interval));
      }
    };
    this._swipeHelper = new sg(this._element, f);
  }
  _keydown(u) {
    if (/input|textarea/i.test(u.target.tagName))
      return;
    const f = EM[u.key];
    f && (u.preventDefault(), this._slide(this._directionToOrder(f)));
  }
  _getItemIndex(u) {
    return this._getItems().indexOf(u);
  }
  _setActiveIndicatorElement(u) {
    if (!this._indicatorsElement)
      return;
    const f = rt.findOne(a1, this._indicatorsElement);
    f.classList.remove(Xy), f.removeAttribute("aria-current");
    const g = rt.findOne(`[data-bs-slide-to="${u}"]`, this._indicatorsElement);
    g && (g.classList.add(Xy), g.setAttribute("aria-current", "true"));
  }
  _updateInterval() {
    const u = this._activeElement || this._getActive();
    if (!u)
      return;
    const f = Number.parseInt(u.getAttribute("data-bs-interval"), 10);
    this._config.interval = f || this._config.defaultInterval;
  }
  _slide(u, f = null) {
    if (this._isSliding)
      return;
    const g = this._getActive(), T = u === Wv, D = f || N0(this._getItems(), g, T, this._config.wrap);
    if (D === g)
      return;
    const O = this._getItemIndex(D), _ = (G) => le.trigger(this._element, G, {
      relatedTarget: D,
      direction: this._orderToDirection(u),
      from: this._getItemIndex(g),
      to: O
    });
    if (_(nM).defaultPrevented || !g || !D)
      return;
    const F = !!this._interval;
    this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(O), this._activeElement = D;
    const z = T ? fM : cM, Q = T ? dM : pM;
    D.classList.add(Q), eh(D), g.classList.add(z), D.classList.add(z);
    const V = () => {
      D.classList.remove(z, Q), D.classList.add(Xy), g.classList.remove(Xy, Q, z), this._isSliding = !1, _(XS);
    };
    this._queueCallback(V, g, this._isAnimated()), F && this.cycle();
  }
  _isAnimated() {
    return this._element.classList.contains(sM);
  }
  _getActive() {
    return rt.findOne(vM, this._element);
  }
  _getItems() {
    return rt.find(i1, this._element);
  }
  _clearInterval() {
    this._interval && (clearInterval(this._interval), this._interval = null);
  }
  _directionToOrder(u) {
    return Ii() ? u === Nd ? Od : Wv : u === Nd ? Wv : Od;
  }
  _orderToDirection(u) {
    return Ii() ? u === Od ? Nd : ag : u === Od ? ag : Nd;
  }
  // Static
  static jQueryInterface(u) {
    return this.each(function() {
      const f = nh.getOrCreateInstance(this, u);
      if (typeof u == "number") {
        f.to(u);
        return;
      }
      if (typeof u == "string") {
        if (f[u] === void 0 || u.startsWith("_") || u === "constructor")
          throw new TypeError(`No method named "${u}"`);
        f[u]();
      }
    });
  }
}
le.on(document, uM, yM, function(v) {
  const u = rt.getElementFromSelector(this);
  if (!u || !u.classList.contains(r1))
    return;
  v.preventDefault();
  const f = nh.getOrCreateInstance(u), g = this.getAttribute("data-bs-slide-to");
  if (g) {
    f.to(g), f._maybeEnableCycle();
    return;
  }
  if (ou.getDataAttribute(this, "slide") === "next") {
    f.next(), f._maybeEnableCycle();
    return;
  }
  f.prev(), f._maybeEnableCycle();
});
le.on(window, lM, () => {
  const v = rt.find(gM);
  for (const u of v)
    nh.getOrCreateInstance(u);
});
Yi(nh);
const CM = "collapse", TM = "bs.collapse", rh = `.${TM}`, bM = ".data-api", wM = `show${rh}`, RM = `shown${rh}`, xM = `hide${rh}`, DM = `hidden${rh}`, OM = `click${rh}${bM}`, ZS = "show", Md = "collapse", Zy = "collapsing", AM = "collapsed", kM = `:scope .${Md} .${Md}`, NM = "collapse-horizontal", LM = "width", MM = "height", zM = ".collapse.show, .collapse.collapsing", h0 = '[data-bs-toggle="collapse"]', UM = {
  parent: null,
  toggle: !0
}, jM = {
  parent: "(null|element)",
  toggle: "boolean"
};
class Zv extends xo {
  constructor(u, f) {
    super(u, f), this._isTransitioning = !1, this._triggerArray = [];
    const g = rt.find(h0);
    for (const T of g) {
      const D = rt.getSelectorFromElement(T), O = rt.find(D).filter((_) => _ === this._element);
      D !== null && O.length && this._triggerArray.push(T);
    }
    this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
  }
  // Getters
  static get Default() {
    return UM;
  }
  static get DefaultType() {
    return jM;
  }
  static get NAME() {
    return CM;
  }
  // Public
  toggle() {
    this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (this._isTransitioning || this._isShown())
      return;
    let u = [];
    if (this._config.parent && (u = this._getFirstLevelChildren(zM).filter((_) => _ !== this._element).map((_) => Zv.getOrCreateInstance(_, {
      toggle: !1
    }))), u.length && u[0]._isTransitioning || le.trigger(this._element, wM).defaultPrevented)
      return;
    for (const _ of u)
      _.hide();
    const g = this._getDimension();
    this._element.classList.remove(Md), this._element.classList.add(Zy), this._element.style[g] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
    const T = () => {
      this._isTransitioning = !1, this._element.classList.remove(Zy), this._element.classList.add(Md, ZS), this._element.style[g] = "", le.trigger(this._element, RM);
    }, O = `scroll${g[0].toUpperCase() + g.slice(1)}`;
    this._queueCallback(T, this._element, !0), this._element.style[g] = `${this._element[O]}px`;
  }
  hide() {
    if (this._isTransitioning || !this._isShown() || le.trigger(this._element, xM).defaultPrevented)
      return;
    const f = this._getDimension();
    this._element.style[f] = `${this._element.getBoundingClientRect()[f]}px`, eh(this._element), this._element.classList.add(Zy), this._element.classList.remove(Md, ZS);
    for (const T of this._triggerArray) {
      const D = rt.getElementFromSelector(T);
      D && !this._isShown(D) && this._addAriaAndCollapsedClass([T], !1);
    }
    this._isTransitioning = !0;
    const g = () => {
      this._isTransitioning = !1, this._element.classList.remove(Zy), this._element.classList.add(Md), le.trigger(this._element, DM);
    };
    this._element.style[f] = "", this._queueCallback(g, this._element, !0);
  }
  _isShown(u = this._element) {
    return u.classList.contains(ZS);
  }
  // Private
  _configAfterMerge(u) {
    return u.toggle = !!u.toggle, u.parent = hs(u.parent), u;
  }
  _getDimension() {
    return this._element.classList.contains(NM) ? LM : MM;
  }
  _initializeChildren() {
    if (!this._config.parent)
      return;
    const u = this._getFirstLevelChildren(h0);
    for (const f of u) {
      const g = rt.getElementFromSelector(f);
      g && this._addAriaAndCollapsedClass([f], this._isShown(g));
    }
  }
  _getFirstLevelChildren(u) {
    const f = rt.find(kM, this._config.parent);
    return rt.find(u, this._config.parent).filter((g) => !f.includes(g));
  }
  _addAriaAndCollapsedClass(u, f) {
    if (u.length)
      for (const g of u)
        g.classList.toggle(AM, !f), g.setAttribute("aria-expanded", f);
  }
  // Static
  static jQueryInterface(u) {
    const f = {};
    return typeof u == "string" && /show|hide/.test(u) && (f.toggle = !1), this.each(function() {
      const g = Zv.getOrCreateInstance(this, f);
      if (typeof u == "string") {
        if (typeof g[u] > "u")
          throw new TypeError(`No method named "${u}"`);
        g[u]();
      }
    });
  }
}
le.on(document, OM, h0, function(v) {
  (v.target.tagName === "A" || v.delegateTarget && v.delegateTarget.tagName === "A") && v.preventDefault();
  for (const u of rt.getMultipleElementsFromSelector(this))
    Zv.getOrCreateInstance(u, {
      toggle: !1
    }).toggle();
});
Yi(Zv);
const Pw = "dropdown", $M = "bs.dropdown", Wc = `.${$M}`, M0 = ".data-api", PM = "Escape", Hw = "Tab", HM = "ArrowUp", Fw = "ArrowDown", FM = 2, VM = `hide${Wc}`, IM = `hidden${Wc}`, BM = `show${Wc}`, YM = `shown${Wc}`, o1 = `click${Wc}${M0}`, l1 = `keydown${Wc}${M0}`, WM = `keyup${Wc}${M0}`, Ld = "show", GM = "dropup", KM = "dropend", QM = "dropstart", qM = "dropup-center", XM = "dropdown-center", Hc = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', ZM = `${Hc}.${Ld}`, ig = ".dropdown-menu", JM = ".navbar", ez = ".navbar-nav", tz = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", nz = Ii() ? "top-end" : "top-start", rz = Ii() ? "top-start" : "top-end", az = Ii() ? "bottom-end" : "bottom-start", iz = Ii() ? "bottom-start" : "bottom-end", oz = Ii() ? "left-start" : "right-start", lz = Ii() ? "right-start" : "left-start", uz = "top", sz = "bottom", cz = {
  autoClose: !0,
  boundary: "clippingParents",
  display: "dynamic",
  offset: [0, 2],
  popperConfig: null,
  reference: "toggle"
}, fz = {
  autoClose: "(boolean|string)",
  boundary: "(string|element)",
  display: "string",
  offset: "(array|string|function)",
  popperConfig: "(null|object|function)",
  reference: "(string|element|object)"
};
class pl extends xo {
  constructor(u, f) {
    super(u, f), this._popper = null, this._parent = this._element.parentNode, this._menu = rt.next(this._element, ig)[0] || rt.prev(this._element, ig)[0] || rt.findOne(ig, this._parent), this._inNavbar = this._detectNavbar();
  }
  // Getters
  static get Default() {
    return cz;
  }
  static get DefaultType() {
    return fz;
  }
  static get NAME() {
    return Pw;
  }
  // Public
  toggle() {
    return this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (ms(this._element) || this._isShown())
      return;
    const u = {
      relatedTarget: this._element
    };
    if (!le.trigger(this._element, BM, u).defaultPrevented) {
      if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(ez))
        for (const g of [].concat(...document.body.children))
          le.on(g, "mouseover", ug);
      this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(Ld), this._element.classList.add(Ld), le.trigger(this._element, YM, u);
    }
  }
  hide() {
    if (ms(this._element) || !this._isShown())
      return;
    const u = {
      relatedTarget: this._element
    };
    this._completeHide(u);
  }
  dispose() {
    this._popper && this._popper.destroy(), super.dispose();
  }
  update() {
    this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
  }
  // Private
  _completeHide(u) {
    if (!le.trigger(this._element, VM, u).defaultPrevented) {
      if ("ontouchstart" in document.documentElement)
        for (const g of [].concat(...document.body.children))
          le.off(g, "mouseover", ug);
      this._popper && this._popper.destroy(), this._menu.classList.remove(Ld), this._element.classList.remove(Ld), this._element.setAttribute("aria-expanded", "false"), ou.removeDataAttribute(this._menu, "popper"), le.trigger(this._element, IM, u);
    }
  }
  _getConfig(u) {
    if (u = super._getConfig(u), typeof u.reference == "object" && !iu(u.reference) && typeof u.reference.getBoundingClientRect != "function")
      throw new TypeError(`${Pw.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
    return u;
  }
  _createPopper() {
    if (typeof IR > "u")
      throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
    let u = this._element;
    this._config.reference === "parent" ? u = this._parent : iu(this._config.reference) ? u = hs(this._config.reference) : typeof this._config.reference == "object" && (u = this._config.reference);
    const f = this._getPopperConfig();
    this._popper = k0(u, this._menu, f);
  }
  _isShown() {
    return this._menu.classList.contains(Ld);
  }
  _getPlacement() {
    const u = this._parent;
    if (u.classList.contains(KM))
      return oz;
    if (u.classList.contains(QM))
      return lz;
    if (u.classList.contains(qM))
      return uz;
    if (u.classList.contains(XM))
      return sz;
    const f = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
    return u.classList.contains(GM) ? f ? rz : nz : f ? iz : az;
  }
  _detectNavbar() {
    return this._element.closest(JM) !== null;
  }
  _getOffset() {
    const {
      offset: u
    } = this._config;
    return typeof u == "string" ? u.split(",").map((f) => Number.parseInt(f, 10)) : typeof u == "function" ? (f) => u(f, this._element) : u;
  }
  _getPopperConfig() {
    const u = {
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
    return (this._inNavbar || this._config.display === "static") && (ou.setDataAttribute(this._menu, "popper", "static"), u.modifiers = [{
      name: "applyStyles",
      enabled: !1
    }]), {
      ...u,
      ...ni(this._config.popperConfig, [u])
    };
  }
  _selectMenuItem({
    key: u,
    target: f
  }) {
    const g = rt.find(tz, this._menu).filter((T) => Id(T));
    g.length && N0(g, f, u === Fw, !g.includes(f)).focus();
  }
  // Static
  static jQueryInterface(u) {
    return this.each(function() {
      const f = pl.getOrCreateInstance(this, u);
      if (typeof u == "string") {
        if (typeof f[u] > "u")
          throw new TypeError(`No method named "${u}"`);
        f[u]();
      }
    });
  }
  static clearMenus(u) {
    if (u.button === FM || u.type === "keyup" && u.key !== Hw)
      return;
    const f = rt.find(ZM);
    for (const g of f) {
      const T = pl.getInstance(g);
      if (!T || T._config.autoClose === !1)
        continue;
      const D = u.composedPath(), O = D.includes(T._menu);
      if (D.includes(T._element) || T._config.autoClose === "inside" && !O || T._config.autoClose === "outside" && O || T._menu.contains(u.target) && (u.type === "keyup" && u.key === Hw || /input|select|option|textarea|form/i.test(u.target.tagName)))
        continue;
      const _ = {
        relatedTarget: T._element
      };
      u.type === "click" && (_.clickEvent = u), T._completeHide(_);
    }
  }
  static dataApiKeydownHandler(u) {
    const f = /input|textarea/i.test(u.target.tagName), g = u.key === PM, T = [HM, Fw].includes(u.key);
    if (!T && !g || f && !g)
      return;
    u.preventDefault();
    const D = this.matches(Hc) ? this : rt.prev(this, Hc)[0] || rt.next(this, Hc)[0] || rt.findOne(Hc, u.delegateTarget.parentNode), O = pl.getOrCreateInstance(D);
    if (T) {
      u.stopPropagation(), O.show(), O._selectMenuItem(u);
      return;
    }
    O._isShown() && (u.stopPropagation(), O.hide(), D.focus());
  }
}
le.on(document, l1, Hc, pl.dataApiKeydownHandler);
le.on(document, l1, ig, pl.dataApiKeydownHandler);
le.on(document, o1, pl.clearMenus);
le.on(document, WM, pl.clearMenus);
le.on(document, o1, Hc, function(v) {
  v.preventDefault(), pl.getOrCreateInstance(this).toggle();
});
Yi(pl);
const u1 = "backdrop", dz = "fade", Vw = "show", Iw = `mousedown.bs.${u1}`, pz = {
  className: "modal-backdrop",
  clickCallback: null,
  isAnimated: !1,
  isVisible: !0,
  // if false, we use the backdrop helper without adding any element to the dom
  rootElement: "body"
  // give the choice to place backdrop under different elements
}, vz = {
  className: "string",
  clickCallback: "(function|null)",
  isAnimated: "boolean",
  isVisible: "boolean",
  rootElement: "(element|string)"
};
class s1 extends th {
  constructor(u) {
    super(), this._config = this._getConfig(u), this._isAppended = !1, this._element = null;
  }
  // Getters
  static get Default() {
    return pz;
  }
  static get DefaultType() {
    return vz;
  }
  static get NAME() {
    return u1;
  }
  // Public
  show(u) {
    if (!this._config.isVisible) {
      ni(u);
      return;
    }
    this._append();
    const f = this._getElement();
    this._config.isAnimated && eh(f), f.classList.add(Vw), this._emulateAnimation(() => {
      ni(u);
    });
  }
  hide(u) {
    if (!this._config.isVisible) {
      ni(u);
      return;
    }
    this._getElement().classList.remove(Vw), this._emulateAnimation(() => {
      this.dispose(), ni(u);
    });
  }
  dispose() {
    this._isAppended && (le.off(this._element, Iw), this._element.remove(), this._isAppended = !1);
  }
  // Private
  _getElement() {
    if (!this._element) {
      const u = document.createElement("div");
      u.className = this._config.className, this._config.isAnimated && u.classList.add(dz), this._element = u;
    }
    return this._element;
  }
  _configAfterMerge(u) {
    return u.rootElement = hs(u.rootElement), u;
  }
  _append() {
    if (this._isAppended)
      return;
    const u = this._getElement();
    this._config.rootElement.append(u), le.on(u, Iw, () => {
      ni(this._config.clickCallback);
    }), this._isAppended = !0;
  }
  _emulateAnimation(u) {
    KR(u, this._getElement(), this._config.isAnimated);
  }
}
const hz = "focustrap", mz = "bs.focustrap", cg = `.${mz}`, yz = `focusin${cg}`, gz = `keydown.tab${cg}`, Ez = "Tab", _z = "forward", Bw = "backward", Sz = {
  autofocus: !0,
  trapElement: null
  // The element to trap focus inside of
}, Cz = {
  autofocus: "boolean",
  trapElement: "element"
};
class c1 extends th {
  constructor(u) {
    super(), this._config = this._getConfig(u), this._isActive = !1, this._lastTabNavDirection = null;
  }
  // Getters
  static get Default() {
    return Sz;
  }
  static get DefaultType() {
    return Cz;
  }
  static get NAME() {
    return hz;
  }
  // Public
  activate() {
    this._isActive || (this._config.autofocus && this._config.trapElement.focus(), le.off(document, cg), le.on(document, yz, (u) => this._handleFocusin(u)), le.on(document, gz, (u) => this._handleKeydown(u)), this._isActive = !0);
  }
  deactivate() {
    this._isActive && (this._isActive = !1, le.off(document, cg));
  }
  // Private
  _handleFocusin(u) {
    const {
      trapElement: f
    } = this._config;
    if (u.target === document || u.target === f || f.contains(u.target))
      return;
    const g = rt.focusableChildren(f);
    g.length === 0 ? f.focus() : this._lastTabNavDirection === Bw ? g[g.length - 1].focus() : g[0].focus();
  }
  _handleKeydown(u) {
    u.key === Ez && (this._lastTabNavDirection = u.shiftKey ? Bw : _z);
  }
}
const Yw = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", Ww = ".sticky-top", Jy = "padding-right", Gw = "margin-right";
class m0 {
  constructor() {
    this._element = document.body;
  }
  // Public
  getWidth() {
    const u = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - u);
  }
  hide() {
    const u = this.getWidth();
    this._disableOverFlow(), this._setElementAttributes(this._element, Jy, (f) => f + u), this._setElementAttributes(Yw, Jy, (f) => f + u), this._setElementAttributes(Ww, Gw, (f) => f - u);
  }
  reset() {
    this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, Jy), this._resetElementAttributes(Yw, Jy), this._resetElementAttributes(Ww, Gw);
  }
  isOverflowing() {
    return this.getWidth() > 0;
  }
  // Private
  _disableOverFlow() {
    this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
  }
  _setElementAttributes(u, f, g) {
    const T = this.getWidth(), D = (O) => {
      if (O !== this._element && window.innerWidth > O.clientWidth + T)
        return;
      this._saveInitialAttribute(O, f);
      const _ = window.getComputedStyle(O).getPropertyValue(f);
      O.style.setProperty(f, `${g(Number.parseFloat(_))}px`);
    };
    this._applyManipulationCallback(u, D);
  }
  _saveInitialAttribute(u, f) {
    const g = u.style.getPropertyValue(f);
    g && ou.setDataAttribute(u, f, g);
  }
  _resetElementAttributes(u, f) {
    const g = (T) => {
      const D = ou.getDataAttribute(T, f);
      if (D === null) {
        T.style.removeProperty(f);
        return;
      }
      ou.removeDataAttribute(T, f), T.style.setProperty(f, D);
    };
    this._applyManipulationCallback(u, g);
  }
  _applyManipulationCallback(u, f) {
    if (iu(u)) {
      f(u);
      return;
    }
    for (const g of rt.find(u, this._element))
      f(g);
  }
}
const Tz = "modal", bz = "bs.modal", Bi = `.${bz}`, wz = ".data-api", Rz = "Escape", xz = `hide${Bi}`, Dz = `hidePrevented${Bi}`, f1 = `hidden${Bi}`, d1 = `show${Bi}`, Oz = `shown${Bi}`, Az = `resize${Bi}`, kz = `click.dismiss${Bi}`, Nz = `mousedown.dismiss${Bi}`, Lz = `keydown.dismiss${Bi}`, Mz = `click${Bi}${wz}`, Kw = "modal-open", zz = "fade", Qw = "show", JS = "modal-static", Uz = ".modal.show", jz = ".modal-dialog", $z = ".modal-body", Pz = '[data-bs-toggle="modal"]', Hz = {
  backdrop: !0,
  focus: !0,
  keyboard: !0
}, Fz = {
  backdrop: "(boolean|string)",
  focus: "boolean",
  keyboard: "boolean"
};
class Yc extends xo {
  constructor(u, f) {
    super(u, f), this._dialog = rt.findOne(jz, this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new m0(), this._addEventListeners();
  }
  // Getters
  static get Default() {
    return Hz;
  }
  static get DefaultType() {
    return Fz;
  }
  static get NAME() {
    return Tz;
  }
  // Public
  toggle(u) {
    return this._isShown ? this.hide() : this.show(u);
  }
  show(u) {
    this._isShown || this._isTransitioning || le.trigger(this._element, d1, {
      relatedTarget: u
    }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(Kw), this._adjustDialog(), this._backdrop.show(() => this._showElement(u)));
  }
  hide() {
    !this._isShown || this._isTransitioning || le.trigger(this._element, xz).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(Qw), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated()));
  }
  dispose() {
    le.off(window, Bi), le.off(this._dialog, Bi), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
  }
  handleUpdate() {
    this._adjustDialog();
  }
  // Private
  _initializeBackDrop() {
    return new s1({
      isVisible: !!this._config.backdrop,
      // 'static' option will be translated to true, and booleans will keep their value,
      isAnimated: this._isAnimated()
    });
  }
  _initializeFocusTrap() {
    return new c1({
      trapElement: this._element
    });
  }
  _showElement(u) {
    document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
    const f = rt.findOne($z, this._dialog);
    f && (f.scrollTop = 0), eh(this._element), this._element.classList.add(Qw);
    const g = () => {
      this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, le.trigger(this._element, Oz, {
        relatedTarget: u
      });
    };
    this._queueCallback(g, this._dialog, this._isAnimated());
  }
  _addEventListeners() {
    le.on(this._element, Lz, (u) => {
      if (u.key === Rz) {
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        this._triggerBackdropTransition();
      }
    }), le.on(window, Az, () => {
      this._isShown && !this._isTransitioning && this._adjustDialog();
    }), le.on(this._element, Nz, (u) => {
      le.one(this._element, kz, (f) => {
        if (!(this._element !== u.target || this._element !== f.target)) {
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
      document.body.classList.remove(Kw), this._resetAdjustments(), this._scrollBar.reset(), le.trigger(this._element, f1);
    });
  }
  _isAnimated() {
    return this._element.classList.contains(zz);
  }
  _triggerBackdropTransition() {
    if (le.trigger(this._element, Dz).defaultPrevented)
      return;
    const f = this._element.scrollHeight > document.documentElement.clientHeight, g = this._element.style.overflowY;
    g === "hidden" || this._element.classList.contains(JS) || (f || (this._element.style.overflowY = "hidden"), this._element.classList.add(JS), this._queueCallback(() => {
      this._element.classList.remove(JS), this._queueCallback(() => {
        this._element.style.overflowY = g;
      }, this._dialog);
    }, this._dialog), this._element.focus());
  }
  /**
   * The following methods are used to handle overflowing modals
   */
  _adjustDialog() {
    const u = this._element.scrollHeight > document.documentElement.clientHeight, f = this._scrollBar.getWidth(), g = f > 0;
    if (g && !u) {
      const T = Ii() ? "paddingLeft" : "paddingRight";
      this._element.style[T] = `${f}px`;
    }
    if (!g && u) {
      const T = Ii() ? "paddingRight" : "paddingLeft";
      this._element.style[T] = `${f}px`;
    }
  }
  _resetAdjustments() {
    this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
  }
  // Static
  static jQueryInterface(u, f) {
    return this.each(function() {
      const g = Yc.getOrCreateInstance(this, u);
      if (typeof u == "string") {
        if (typeof g[u] > "u")
          throw new TypeError(`No method named "${u}"`);
        g[u](f);
      }
    });
  }
}
le.on(document, Mz, Pz, function(v) {
  const u = rt.getElementFromSelector(this);
  ["A", "AREA"].includes(this.tagName) && v.preventDefault(), le.one(u, d1, (T) => {
    T.defaultPrevented || le.one(u, f1, () => {
      Id(this) && this.focus();
    });
  });
  const f = rt.findOne(Uz);
  f && Yc.getInstance(f).hide(), Yc.getOrCreateInstance(u).toggle(this);
});
hg(Yc);
Yi(Yc);
const Vz = "offcanvas", Iz = "bs.offcanvas", uu = `.${Iz}`, p1 = ".data-api", Bz = `load${uu}${p1}`, Yz = "Escape", qw = "show", Xw = "showing", Zw = "hiding", Wz = "offcanvas-backdrop", v1 = ".offcanvas.show", Gz = `show${uu}`, Kz = `shown${uu}`, Qz = `hide${uu}`, Jw = `hidePrevented${uu}`, h1 = `hidden${uu}`, qz = `resize${uu}`, Xz = `click${uu}${p1}`, Zz = `keydown.dismiss${uu}`, Jz = '[data-bs-toggle="offcanvas"]', eU = {
  backdrop: !0,
  keyboard: !0,
  scroll: !1
}, tU = {
  backdrop: "(boolean|string)",
  keyboard: "boolean",
  scroll: "boolean"
};
class ys extends xo {
  constructor(u, f) {
    super(u, f), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
  }
  // Getters
  static get Default() {
    return eU;
  }
  static get DefaultType() {
    return tU;
  }
  static get NAME() {
    return Vz;
  }
  // Public
  toggle(u) {
    return this._isShown ? this.hide() : this.show(u);
  }
  show(u) {
    if (this._isShown || le.trigger(this._element, Gz, {
      relatedTarget: u
    }).defaultPrevented)
      return;
    this._isShown = !0, this._backdrop.show(), this._config.scroll || new m0().hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(Xw);
    const g = () => {
      (!this._config.scroll || this._config.backdrop) && this._focustrap.activate(), this._element.classList.add(qw), this._element.classList.remove(Xw), le.trigger(this._element, Kz, {
        relatedTarget: u
      });
    };
    this._queueCallback(g, this._element, !0);
  }
  hide() {
    if (!this._isShown || le.trigger(this._element, Qz).defaultPrevented)
      return;
    this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(Zw), this._backdrop.hide();
    const f = () => {
      this._element.classList.remove(qw, Zw), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new m0().reset(), le.trigger(this._element, h1);
    };
    this._queueCallback(f, this._element, !0);
  }
  dispose() {
    this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
  }
  // Private
  _initializeBackDrop() {
    const u = () => {
      if (this._config.backdrop === "static") {
        le.trigger(this._element, Jw);
        return;
      }
      this.hide();
    }, f = !!this._config.backdrop;
    return new s1({
      className: Wz,
      isVisible: f,
      isAnimated: !0,
      rootElement: this._element.parentNode,
      clickCallback: f ? u : null
    });
  }
  _initializeFocusTrap() {
    return new c1({
      trapElement: this._element
    });
  }
  _addEventListeners() {
    le.on(this._element, Zz, (u) => {
      if (u.key === Yz) {
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        le.trigger(this._element, Jw);
      }
    });
  }
  // Static
  static jQueryInterface(u) {
    return this.each(function() {
      const f = ys.getOrCreateInstance(this, u);
      if (typeof u == "string") {
        if (f[u] === void 0 || u.startsWith("_") || u === "constructor")
          throw new TypeError(`No method named "${u}"`);
        f[u](this);
      }
    });
  }
}
le.on(document, Xz, Jz, function(v) {
  const u = rt.getElementFromSelector(this);
  if (["A", "AREA"].includes(this.tagName) && v.preventDefault(), ms(this))
    return;
  le.one(u, h1, () => {
    Id(this) && this.focus();
  });
  const f = rt.findOne(v1);
  f && f !== u && ys.getInstance(f).hide(), ys.getOrCreateInstance(u).toggle(this);
});
le.on(window, Bz, () => {
  for (const v of rt.find(v1))
    ys.getOrCreateInstance(v).show();
});
le.on(window, qz, () => {
  for (const v of rt.find("[aria-modal][class*=show][class*=offcanvas-]"))
    getComputedStyle(v).position !== "fixed" && ys.getOrCreateInstance(v).hide();
});
hg(ys);
Yi(ys);
const nU = /^aria-[\w-]*$/i, m1 = {
  // Global attributes allowed on any supplied element below.
  "*": ["class", "dir", "id", "lang", "role", nU],
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
}, rU = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]), aU = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i, iU = (v, u) => {
  const f = v.nodeName.toLowerCase();
  return u.includes(f) ? rU.has(f) ? !!aU.test(v.nodeValue) : !0 : u.filter((g) => g instanceof RegExp).some((g) => g.test(f));
};
function oU(v, u, f) {
  if (!v.length)
    return v;
  if (f && typeof f == "function")
    return f(v);
  const T = new window.DOMParser().parseFromString(v, "text/html"), D = [].concat(...T.body.querySelectorAll("*"));
  for (const O of D) {
    const _ = O.nodeName.toLowerCase();
    if (!Object.keys(u).includes(_)) {
      O.remove();
      continue;
    }
    const U = [].concat(...O.attributes), F = [].concat(u["*"] || [], u[_] || []);
    for (const z of U)
      iU(z, F) || O.removeAttribute(z.nodeName);
  }
  return T.body.innerHTML;
}
const lU = "TemplateFactory", uU = {
  allowList: m1,
  content: {},
  // { selector : text ,  selector2 : text2 , }
  extraClass: "",
  html: !1,
  sanitize: !0,
  sanitizeFn: null,
  template: "<div></div>"
}, sU = {
  allowList: "object",
  content: "object",
  extraClass: "(string|function)",
  html: "boolean",
  sanitize: "boolean",
  sanitizeFn: "(null|function)",
  template: "string"
}, cU = {
  entry: "(string|element|function|null)",
  selector: "(string|element)"
};
class fU extends th {
  constructor(u) {
    super(), this._config = this._getConfig(u);
  }
  // Getters
  static get Default() {
    return uU;
  }
  static get DefaultType() {
    return sU;
  }
  static get NAME() {
    return lU;
  }
  // Public
  getContent() {
    return Object.values(this._config.content).map((u) => this._resolvePossibleFunction(u)).filter(Boolean);
  }
  hasContent() {
    return this.getContent().length > 0;
  }
  changeContent(u) {
    return this._checkContent(u), this._config.content = {
      ...this._config.content,
      ...u
    }, this;
  }
  toHtml() {
    const u = document.createElement("div");
    u.innerHTML = this._maybeSanitize(this._config.template);
    for (const [T, D] of Object.entries(this._config.content))
      this._setContent(u, D, T);
    const f = u.children[0], g = this._resolvePossibleFunction(this._config.extraClass);
    return g && f.classList.add(...g.split(" ")), f;
  }
  // Private
  _typeCheckConfig(u) {
    super._typeCheckConfig(u), this._checkContent(u.content);
  }
  _checkContent(u) {
    for (const [f, g] of Object.entries(u))
      super._typeCheckConfig({
        selector: f,
        entry: g
      }, cU);
  }
  _setContent(u, f, g) {
    const T = rt.findOne(g, u);
    if (T) {
      if (f = this._resolvePossibleFunction(f), !f) {
        T.remove();
        return;
      }
      if (iu(f)) {
        this._putElementInTemplate(hs(f), T);
        return;
      }
      if (this._config.html) {
        T.innerHTML = this._maybeSanitize(f);
        return;
      }
      T.textContent = f;
    }
  }
  _maybeSanitize(u) {
    return this._config.sanitize ? oU(u, this._config.allowList, this._config.sanitizeFn) : u;
  }
  _resolvePossibleFunction(u) {
    return ni(u, [this]);
  }
  _putElementInTemplate(u, f) {
    if (this._config.html) {
      f.innerHTML = "", f.append(u);
      return;
    }
    f.textContent = u.textContent;
  }
}
const dU = "tooltip", pU = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]), e0 = "fade", vU = "modal", eg = "show", hU = ".tooltip-inner", eR = `.${vU}`, tR = "hide.bs.modal", Gv = "hover", t0 = "focus", mU = "click", yU = "manual", gU = "hide", EU = "hidden", _U = "show", SU = "shown", CU = "inserted", TU = "click", bU = "focusin", wU = "focusout", RU = "mouseenter", xU = "mouseleave", DU = {
  AUTO: "auto",
  TOP: "top",
  RIGHT: Ii() ? "left" : "right",
  BOTTOM: "bottom",
  LEFT: Ii() ? "right" : "left"
}, OU = {
  allowList: m1,
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
}, AU = {
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
class Yd extends xo {
  constructor(u, f) {
    if (typeof IR > "u")
      throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
    super(u, f), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle();
  }
  // Getters
  static get Default() {
    return OU;
  }
  static get DefaultType() {
    return AU;
  }
  static get NAME() {
    return dU;
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
    clearTimeout(this._timeout), le.off(this._element.closest(eR), tR, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose();
  }
  show() {
    if (this._element.style.display === "none")
      throw new Error("Please use show on visible elements");
    if (!(this._isWithContent() && this._isEnabled))
      return;
    const u = le.trigger(this._element, this.constructor.eventName(_U)), g = (WR(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
    if (u.defaultPrevented || !g)
      return;
    this._disposePopper();
    const T = this._getTipElement();
    this._element.setAttribute("aria-describedby", T.getAttribute("id"));
    const {
      container: D
    } = this._config;
    if (this._element.ownerDocument.documentElement.contains(this.tip) || (D.append(T), le.trigger(this._element, this.constructor.eventName(CU))), this._popper = this._createPopper(T), T.classList.add(eg), "ontouchstart" in document.documentElement)
      for (const _ of [].concat(...document.body.children))
        le.on(_, "mouseover", ug);
    const O = () => {
      le.trigger(this._element, this.constructor.eventName(SU)), this._isHovered === !1 && this._leave(), this._isHovered = !1;
    };
    this._queueCallback(O, this.tip, this._isAnimated());
  }
  hide() {
    if (!this._isShown() || le.trigger(this._element, this.constructor.eventName(gU)).defaultPrevented)
      return;
    if (this._getTipElement().classList.remove(eg), "ontouchstart" in document.documentElement)
      for (const T of [].concat(...document.body.children))
        le.off(T, "mouseover", ug);
    this._activeTrigger[mU] = !1, this._activeTrigger[t0] = !1, this._activeTrigger[Gv] = !1, this._isHovered = null;
    const g = () => {
      this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), le.trigger(this._element, this.constructor.eventName(EU)));
    };
    this._queueCallback(g, this.tip, this._isAnimated());
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
  _createTipElement(u) {
    const f = this._getTemplateFactory(u).toHtml();
    if (!f)
      return null;
    f.classList.remove(e0, eg), f.classList.add(`bs-${this.constructor.NAME}-auto`);
    const g = mL(this.constructor.NAME).toString();
    return f.setAttribute("id", g), this._isAnimated() && f.classList.add(e0), f;
  }
  setContent(u) {
    this._newContent = u, this._isShown() && (this._disposePopper(), this.show());
  }
  _getTemplateFactory(u) {
    return this._templateFactory ? this._templateFactory.changeContent(u) : this._templateFactory = new fU({
      ...this._config,
      // the `content` var has to be after `this._config`
      // to override config.content in case of popover
      content: u,
      extraClass: this._resolvePossibleFunction(this._config.customClass)
    }), this._templateFactory;
  }
  _getContentForTemplate() {
    return {
      [hU]: this._getTitle()
    };
  }
  _getTitle() {
    return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
  }
  // Private
  _initializeOnDelegatedTarget(u) {
    return this.constructor.getOrCreateInstance(u.delegateTarget, this._getDelegateConfig());
  }
  _isAnimated() {
    return this._config.animation || this.tip && this.tip.classList.contains(e0);
  }
  _isShown() {
    return this.tip && this.tip.classList.contains(eg);
  }
  _createPopper(u) {
    const f = ni(this._config.placement, [this, u, this._element]), g = DU[f.toUpperCase()];
    return k0(this._element, u, this._getPopperConfig(g));
  }
  _getOffset() {
    const {
      offset: u
    } = this._config;
    return typeof u == "string" ? u.split(",").map((f) => Number.parseInt(f, 10)) : typeof u == "function" ? (f) => u(f, this._element) : u;
  }
  _resolvePossibleFunction(u) {
    return ni(u, [this._element]);
  }
  _getPopperConfig(u) {
    const f = {
      placement: u,
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
        fn: (g) => {
          this._getTipElement().setAttribute("data-popper-placement", g.state.placement);
        }
      }]
    };
    return {
      ...f,
      ...ni(this._config.popperConfig, [f])
    };
  }
  _setListeners() {
    const u = this._config.trigger.split(" ");
    for (const f of u)
      if (f === "click")
        le.on(this._element, this.constructor.eventName(TU), this._config.selector, (g) => {
          this._initializeOnDelegatedTarget(g).toggle();
        });
      else if (f !== yU) {
        const g = f === Gv ? this.constructor.eventName(RU) : this.constructor.eventName(bU), T = f === Gv ? this.constructor.eventName(xU) : this.constructor.eventName(wU);
        le.on(this._element, g, this._config.selector, (D) => {
          const O = this._initializeOnDelegatedTarget(D);
          O._activeTrigger[D.type === "focusin" ? t0 : Gv] = !0, O._enter();
        }), le.on(this._element, T, this._config.selector, (D) => {
          const O = this._initializeOnDelegatedTarget(D);
          O._activeTrigger[D.type === "focusout" ? t0 : Gv] = O._element.contains(D.relatedTarget), O._leave();
        });
      }
    this._hideModalHandler = () => {
      this._element && this.hide();
    }, le.on(this._element.closest(eR), tR, this._hideModalHandler);
  }
  _fixTitle() {
    const u = this._element.getAttribute("title");
    u && (!this._element.getAttribute("aria-label") && !this._element.textContent.trim() && this._element.setAttribute("aria-label", u), this._element.setAttribute("data-bs-original-title", u), this._element.removeAttribute("title"));
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
  _setTimeout(u, f) {
    clearTimeout(this._timeout), this._timeout = setTimeout(u, f);
  }
  _isWithActiveTrigger() {
    return Object.values(this._activeTrigger).includes(!0);
  }
  _getConfig(u) {
    const f = ou.getDataAttributes(this._element);
    for (const g of Object.keys(f))
      pU.has(g) && delete f[g];
    return u = {
      ...f,
      ...typeof u == "object" && u ? u : {}
    }, u = this._mergeConfigObj(u), u = this._configAfterMerge(u), this._typeCheckConfig(u), u;
  }
  _configAfterMerge(u) {
    return u.container = u.container === !1 ? document.body : hs(u.container), typeof u.delay == "number" && (u.delay = {
      show: u.delay,
      hide: u.delay
    }), typeof u.title == "number" && (u.title = u.title.toString()), typeof u.content == "number" && (u.content = u.content.toString()), u;
  }
  _getDelegateConfig() {
    const u = {};
    for (const [f, g] of Object.entries(this._config))
      this.constructor.Default[f] !== g && (u[f] = g);
    return u.selector = !1, u.trigger = "manual", u;
  }
  _disposePopper() {
    this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null);
  }
  // Static
  static jQueryInterface(u) {
    return this.each(function() {
      const f = Yd.getOrCreateInstance(this, u);
      if (typeof u == "string") {
        if (typeof f[u] > "u")
          throw new TypeError(`No method named "${u}"`);
        f[u]();
      }
    });
  }
}
Yi(Yd);
const kU = "popover", NU = ".popover-header", LU = ".popover-body", MU = {
  ...Yd.Default,
  content: "",
  offset: [0, 8],
  placement: "right",
  template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
  trigger: "click"
}, zU = {
  ...Yd.DefaultType,
  content: "(null|string|element|function)"
};
class z0 extends Yd {
  // Getters
  static get Default() {
    return MU;
  }
  static get DefaultType() {
    return zU;
  }
  static get NAME() {
    return kU;
  }
  // Overrides
  _isWithContent() {
    return this._getTitle() || this._getContent();
  }
  // Private
  _getContentForTemplate() {
    return {
      [NU]: this._getTitle(),
      [LU]: this._getContent()
    };
  }
  _getContent() {
    return this._resolvePossibleFunction(this._config.content);
  }
  // Static
  static jQueryInterface(u) {
    return this.each(function() {
      const f = z0.getOrCreateInstance(this, u);
      if (typeof u == "string") {
        if (typeof f[u] > "u")
          throw new TypeError(`No method named "${u}"`);
        f[u]();
      }
    });
  }
}
Yi(z0);
const UU = "scrollspy", jU = "bs.scrollspy", U0 = `.${jU}`, $U = ".data-api", PU = `activate${U0}`, nR = `click${U0}`, HU = `load${U0}${$U}`, FU = "dropdown-item", Ad = "active", VU = '[data-bs-spy="scroll"]', n0 = "[href]", IU = ".nav, .list-group", rR = ".nav-link", BU = ".nav-item", YU = ".list-group-item", WU = `${rR}, ${BU} > ${rR}, ${YU}`, GU = ".dropdown", KU = ".dropdown-toggle", QU = {
  offset: null,
  // TODO: v6 @deprecated, keep it for backwards compatibility reasons
  rootMargin: "0px 0px -25%",
  smoothScroll: !1,
  target: null,
  threshold: [0.1, 0.5, 1]
}, qU = {
  offset: "(number|null)",
  // TODO v6 @deprecated, keep it for backwards compatibility reasons
  rootMargin: "string",
  smoothScroll: "boolean",
  target: "element",
  threshold: "array"
};
class gg extends xo {
  constructor(u, f) {
    super(u, f), this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map(), this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
      visibleEntryTop: 0,
      parentScrollTop: 0
    }, this.refresh();
  }
  // Getters
  static get Default() {
    return QU;
  }
  static get DefaultType() {
    return qU;
  }
  static get NAME() {
    return UU;
  }
  // Public
  refresh() {
    this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
    for (const u of this._observableSections.values())
      this._observer.observe(u);
  }
  dispose() {
    this._observer.disconnect(), super.dispose();
  }
  // Private
  _configAfterMerge(u) {
    return u.target = hs(u.target) || document.body, u.rootMargin = u.offset ? `${u.offset}px 0px -30%` : u.rootMargin, typeof u.threshold == "string" && (u.threshold = u.threshold.split(",").map((f) => Number.parseFloat(f))), u;
  }
  _maybeEnableSmoothScroll() {
    this._config.smoothScroll && (le.off(this._config.target, nR), le.on(this._config.target, nR, n0, (u) => {
      const f = this._observableSections.get(u.target.hash);
      if (f) {
        u.preventDefault();
        const g = this._rootElement || window, T = f.offsetTop - this._element.offsetTop;
        if (g.scrollTo) {
          g.scrollTo({
            top: T,
            behavior: "smooth"
          });
          return;
        }
        g.scrollTop = T;
      }
    }));
  }
  _getNewObserver() {
    const u = {
      root: this._rootElement,
      threshold: this._config.threshold,
      rootMargin: this._config.rootMargin
    };
    return new IntersectionObserver((f) => this._observerCallback(f), u);
  }
  // The logic of selection
  _observerCallback(u) {
    const f = (O) => this._targetLinks.get(`#${O.target.id}`), g = (O) => {
      this._previousScrollData.visibleEntryTop = O.target.offsetTop, this._process(f(O));
    }, T = (this._rootElement || document.documentElement).scrollTop, D = T >= this._previousScrollData.parentScrollTop;
    this._previousScrollData.parentScrollTop = T;
    for (const O of u) {
      if (!O.isIntersecting) {
        this._activeTarget = null, this._clearActiveClass(f(O));
        continue;
      }
      const _ = O.target.offsetTop >= this._previousScrollData.visibleEntryTop;
      if (D && _) {
        if (g(O), !T)
          return;
        continue;
      }
      !D && !_ && g(O);
    }
  }
  _initializeTargetsAndObservables() {
    this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map();
    const u = rt.find(n0, this._config.target);
    for (const f of u) {
      if (!f.hash || ms(f))
        continue;
      const g = rt.findOne(decodeURI(f.hash), this._element);
      Id(g) && (this._targetLinks.set(decodeURI(f.hash), f), this._observableSections.set(f.hash, g));
    }
  }
  _process(u) {
    this._activeTarget !== u && (this._clearActiveClass(this._config.target), this._activeTarget = u, u.classList.add(Ad), this._activateParents(u), le.trigger(this._element, PU, {
      relatedTarget: u
    }));
  }
  _activateParents(u) {
    if (u.classList.contains(FU)) {
      rt.findOne(KU, u.closest(GU)).classList.add(Ad);
      return;
    }
    for (const f of rt.parents(u, IU))
      for (const g of rt.prev(f, WU))
        g.classList.add(Ad);
  }
  _clearActiveClass(u) {
    u.classList.remove(Ad);
    const f = rt.find(`${n0}.${Ad}`, u);
    for (const g of f)
      g.classList.remove(Ad);
  }
  // Static
  static jQueryInterface(u) {
    return this.each(function() {
      const f = gg.getOrCreateInstance(this, u);
      if (typeof u == "string") {
        if (f[u] === void 0 || u.startsWith("_") || u === "constructor")
          throw new TypeError(`No method named "${u}"`);
        f[u]();
      }
    });
  }
}
le.on(window, HU, () => {
  for (const v of rt.find(VU))
    gg.getOrCreateInstance(v);
});
Yi(gg);
const XU = "tab", ZU = "bs.tab", Gc = `.${ZU}`, JU = `hide${Gc}`, ej = `hidden${Gc}`, tj = `show${Gc}`, nj = `shown${Gc}`, rj = `click${Gc}`, aj = `keydown${Gc}`, ij = `load${Gc}`, oj = "ArrowLeft", aR = "ArrowRight", lj = "ArrowUp", iR = "ArrowDown", r0 = "Home", oR = "End", Fc = "active", lR = "fade", a0 = "show", uj = "dropdown", y1 = ".dropdown-toggle", sj = ".dropdown-menu", i0 = `:not(${y1})`, cj = '.list-group, .nav, [role="tablist"]', fj = ".nav-item, .list-group-item", dj = `.nav-link${i0}, .list-group-item${i0}, [role="tab"]${i0}`, g1 = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', o0 = `${dj}, ${g1}`, pj = `.${Fc}[data-bs-toggle="tab"], .${Fc}[data-bs-toggle="pill"], .${Fc}[data-bs-toggle="list"]`;
class Hd extends xo {
  constructor(u) {
    super(u), this._parent = this._element.closest(cj), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), le.on(this._element, aj, (f) => this._keydown(f)));
  }
  // Getters
  static get NAME() {
    return XU;
  }
  // Public
  show() {
    const u = this._element;
    if (this._elemIsActive(u))
      return;
    const f = this._getActiveElem(), g = f ? le.trigger(f, JU, {
      relatedTarget: u
    }) : null;
    le.trigger(u, tj, {
      relatedTarget: f
    }).defaultPrevented || g && g.defaultPrevented || (this._deactivate(f, u), this._activate(u, f));
  }
  // Private
  _activate(u, f) {
    if (!u)
      return;
    u.classList.add(Fc), this._activate(rt.getElementFromSelector(u));
    const g = () => {
      if (u.getAttribute("role") !== "tab") {
        u.classList.add(a0);
        return;
      }
      u.removeAttribute("tabindex"), u.setAttribute("aria-selected", !0), this._toggleDropDown(u, !0), le.trigger(u, nj, {
        relatedTarget: f
      });
    };
    this._queueCallback(g, u, u.classList.contains(lR));
  }
  _deactivate(u, f) {
    if (!u)
      return;
    u.classList.remove(Fc), u.blur(), this._deactivate(rt.getElementFromSelector(u));
    const g = () => {
      if (u.getAttribute("role") !== "tab") {
        u.classList.remove(a0);
        return;
      }
      u.setAttribute("aria-selected", !1), u.setAttribute("tabindex", "-1"), this._toggleDropDown(u, !1), le.trigger(u, ej, {
        relatedTarget: f
      });
    };
    this._queueCallback(g, u, u.classList.contains(lR));
  }
  _keydown(u) {
    if (![oj, aR, lj, iR, r0, oR].includes(u.key))
      return;
    u.stopPropagation(), u.preventDefault();
    const f = this._getChildren().filter((T) => !ms(T));
    let g;
    if ([r0, oR].includes(u.key))
      g = f[u.key === r0 ? 0 : f.length - 1];
    else {
      const T = [aR, iR].includes(u.key);
      g = N0(f, u.target, T, !0);
    }
    g && (g.focus({
      preventScroll: !0
    }), Hd.getOrCreateInstance(g).show());
  }
  _getChildren() {
    return rt.find(o0, this._parent);
  }
  _getActiveElem() {
    return this._getChildren().find((u) => this._elemIsActive(u)) || null;
  }
  _setInitialAttributes(u, f) {
    this._setAttributeIfNotExists(u, "role", "tablist");
    for (const g of f)
      this._setInitialAttributesOnChild(g);
  }
  _setInitialAttributesOnChild(u) {
    u = this._getInnerElement(u);
    const f = this._elemIsActive(u), g = this._getOuterElement(u);
    u.setAttribute("aria-selected", f), g !== u && this._setAttributeIfNotExists(g, "role", "presentation"), f || u.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(u, "role", "tab"), this._setInitialAttributesOnTargetPanel(u);
  }
  _setInitialAttributesOnTargetPanel(u) {
    const f = rt.getElementFromSelector(u);
    f && (this._setAttributeIfNotExists(f, "role", "tabpanel"), u.id && this._setAttributeIfNotExists(f, "aria-labelledby", `${u.id}`));
  }
  _toggleDropDown(u, f) {
    const g = this._getOuterElement(u);
    if (!g.classList.contains(uj))
      return;
    const T = (D, O) => {
      const _ = rt.findOne(D, g);
      _ && _.classList.toggle(O, f);
    };
    T(y1, Fc), T(sj, a0), g.setAttribute("aria-expanded", f);
  }
  _setAttributeIfNotExists(u, f, g) {
    u.hasAttribute(f) || u.setAttribute(f, g);
  }
  _elemIsActive(u) {
    return u.classList.contains(Fc);
  }
  // Try to get the inner element (usually the .nav-link)
  _getInnerElement(u) {
    return u.matches(o0) ? u : rt.findOne(o0, u);
  }
  // Try to get the outer element (usually the .nav-item)
  _getOuterElement(u) {
    return u.closest(fj) || u;
  }
  // Static
  static jQueryInterface(u) {
    return this.each(function() {
      const f = Hd.getOrCreateInstance(this);
      if (typeof u == "string") {
        if (f[u] === void 0 || u.startsWith("_") || u === "constructor")
          throw new TypeError(`No method named "${u}"`);
        f[u]();
      }
    });
  }
}
le.on(document, rj, g1, function(v) {
  ["A", "AREA"].includes(this.tagName) && v.preventDefault(), !ms(this) && Hd.getOrCreateInstance(this).show();
});
le.on(window, ij, () => {
  for (const v of rt.find(pj))
    Hd.getOrCreateInstance(v);
});
Yi(Hd);
const vj = "toast", hj = "bs.toast", _s = `.${hj}`, mj = `mouseover${_s}`, yj = `mouseout${_s}`, gj = `focusin${_s}`, Ej = `focusout${_s}`, _j = `hide${_s}`, Sj = `hidden${_s}`, Cj = `show${_s}`, Tj = `shown${_s}`, bj = "fade", uR = "hide", tg = "show", ng = "showing", wj = {
  animation: "boolean",
  autohide: "boolean",
  delay: "number"
}, Rj = {
  animation: !0,
  autohide: !0,
  delay: 5e3
};
class ah extends xo {
  constructor(u, f) {
    super(u, f), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners();
  }
  // Getters
  static get Default() {
    return Rj;
  }
  static get DefaultType() {
    return wj;
  }
  static get NAME() {
    return vj;
  }
  // Public
  show() {
    if (le.trigger(this._element, Cj).defaultPrevented)
      return;
    this._clearTimeout(), this._config.animation && this._element.classList.add(bj);
    const f = () => {
      this._element.classList.remove(ng), le.trigger(this._element, Tj), this._maybeScheduleHide();
    };
    this._element.classList.remove(uR), eh(this._element), this._element.classList.add(tg, ng), this._queueCallback(f, this._element, this._config.animation);
  }
  hide() {
    if (!this.isShown() || le.trigger(this._element, _j).defaultPrevented)
      return;
    const f = () => {
      this._element.classList.add(uR), this._element.classList.remove(ng, tg), le.trigger(this._element, Sj);
    };
    this._element.classList.add(ng), this._queueCallback(f, this._element, this._config.animation);
  }
  dispose() {
    this._clearTimeout(), this.isShown() && this._element.classList.remove(tg), super.dispose();
  }
  isShown() {
    return this._element.classList.contains(tg);
  }
  // Private
  _maybeScheduleHide() {
    this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
      this.hide();
    }, this._config.delay)));
  }
  _onInteraction(u, f) {
    switch (u.type) {
      case "mouseover":
      case "mouseout": {
        this._hasMouseInteraction = f;
        break;
      }
      case "focusin":
      case "focusout": {
        this._hasKeyboardInteraction = f;
        break;
      }
    }
    if (f) {
      this._clearTimeout();
      return;
    }
    const g = u.relatedTarget;
    this._element === g || this._element.contains(g) || this._maybeScheduleHide();
  }
  _setListeners() {
    le.on(this._element, mj, (u) => this._onInteraction(u, !0)), le.on(this._element, yj, (u) => this._onInteraction(u, !1)), le.on(this._element, gj, (u) => this._onInteraction(u, !0)), le.on(this._element, Ej, (u) => this._onInteraction(u, !1));
  }
  _clearTimeout() {
    clearTimeout(this._timeout), this._timeout = null;
  }
  // Static
  static jQueryInterface(u) {
    return this.each(function() {
      const f = ah.getOrCreateInstance(this, u);
      if (typeof u == "string") {
        if (typeof f[u] > "u")
          throw new TypeError(`No method named "${u}"`);
        f[u](this);
      }
    });
  }
}
hg(ah);
Yi(ah);
const xj = ({ show: v, defaultZoom: u, rowIndex: f, colIndex: g, ...T }) => {
  const D = mt.useContext(pa.Context), [O, _] = v !== void 0 ? [v, () => {
  }] : mt.useState(!1), [U, F] = mt.useState(u !== void 0 ? u : 1), z = mt.useRef(null), Q = mt.useCallback((G) => {
    var q;
    if (v !== void 0 && !T.onClosing) {
      console.log("Modal is controlled by parent, but no onClosing handler is provided."), G.preventDefault();
      return;
    }
    _(!1), (q = T.onClosing) == null || q.call(T, G);
  }, []);
  mt.useEffect(() => {
    z.current && z.current.addEventListener("hide.bs.modal", Q);
  }, [z.current]), mt.useEffect(() => {
    if (!z.current)
      return;
    const G = new Yc(z.current, { keyboard: !0 });
    O ? (G.show(), F(1)) : G.hide();
  }, [O, v]);
  const V = mt.useCallback((G) => {
    G.deltaY < 0 ? F(U + 0.1) : U > 0.15 && F(U - 0.1);
  }, [U, u]);
  return /* @__PURE__ */ fe.jsx(fe.Fragment, { children: /* @__PURE__ */ fe.jsx("div", { className: "modal fade", ref: z, id: "lightboxModalFullscreen", tabIndex: -1, children: /* @__PURE__ */ fe.jsx("div", { className: "modal-dialog modal-fullscreen", children: /* @__PURE__ */ fe.jsx("div", { className: "modal-content", style: { backgroundColor: "unset" }, children: /* @__PURE__ */ fe.jsxs("div", { className: "modal-body", children: [
    /* @__PURE__ */ fe.jsxs("div", { className: "position-absolute z-n1 top-0 left-0", style: { opacity: 0.7, zoom: 0.5 }, children: [
      /* @__PURE__ */ fe.jsxs("div", { className: "row", children: [
        /* @__PURE__ */ fe.jsx("div", { className: "col-auto bg-light", style: { minWidth: D.header.width, minHeight: D.header.height } }),
        /* @__PURE__ */ fe.jsx("div", { className: "col-auto bg-light p-1", children: /* @__PURE__ */ fe.jsx(vR, { colIndex: g }) })
      ] }),
      /* @__PURE__ */ fe.jsx("div", { className: "row", children: /* @__PURE__ */ fe.jsx("div", { className: "col-auto bg-light p-1", children: /* @__PURE__ */ fe.jsx(mR, { rowIndex: f }) }) })
    ] }),
    /* @__PURE__ */ fe.jsx("div", { className: "m-0 w-100 h-100 d-flex align-items-center justify-content-center position-relative", style: { zoom: U, overflow: "hidden" }, onWheel: V, children: /* @__PURE__ */ fe.jsx(yR, { rowIndex: f, colIndex: g }) })
  ] }) }) }) }) });
}, Dj = () => {
}, Oj = (v, u) => v.key === u || v.code === u || v.keyCode === u || v.which === u || v.charCode === u, Aj = {
  eventTypes: ["keydown"],
  when: !0
};
function kj(v, u, f) {
  const g = mt.useMemo(() => Array.isArray(v) ? v : [v], [v]), T = mt.useMemo(() => Object.assign(Object.assign({}, Aj), f), [f]), { when: D, eventTypes: O } = T, _ = mt.useRef(u), { target: U } = T;
  mt.useEffect(() => {
    _.current = u;
  });
  const F = mt.useCallback((z) => {
    g.some((Q) => Oj(z, Q)) && _.current(z);
  }, [g]);
  mt.useEffect(() => {
    if (D && typeof window < "u")
      if (U) {
        const z = U.current;
        if (z) {
          for (const Q of O)
            z.addEventListener(Q, F);
          return () => {
            for (const Q of O)
              z.removeEventListener(Q, F);
          };
        }
      } else {
        for (const z of O)
          window.addEventListener(z, F);
        return () => {
          for (const z of O)
            window.removeEventListener(z, F);
        };
      }
    return Dj;
  }, [D, O, g, U, u, F]);
}
const Fd = ({ value: v, onChange: u, step: f = 1 }) => /* @__PURE__ */ fe.jsx("input", { type: "number", style: { width: "3rem" }, step: f, value: v, onChange: (g) => u(parseInt(g.target.value)) }), Nj = ({ headerSettings: v, onChange: u }) => /* @__PURE__ */ fe.jsxs(fe.Fragment, { children: [
  "{",
  /* @__PURE__ */ fe.jsxs("div", { children: [
    '    "width": ',
    /* @__PURE__ */ fe.jsx(Fd, { value: v.width, onChange: (f) => u({ ...v, width: f }), step: 8 }),
    ","
  ] }),
  /* @__PURE__ */ fe.jsxs("div", { children: [
    '    "height": ',
    /* @__PURE__ */ fe.jsx(Fd, { value: v.height, onChange: (f) => u({ ...v, height: f }) })
  ] }),
  "}"
] }), Lj = ({ cellSettings: v, onChange: u }) => /* @__PURE__ */ fe.jsxs(fe.Fragment, { children: [
  "{",
  /* @__PURE__ */ fe.jsxs("div", { children: [
    '    "width": ',
    /* @__PURE__ */ fe.jsx(Fd, { value: v.width, onChange: (f) => u({ ...v, width: f }), step: 8 }),
    ","
  ] }),
  /* @__PURE__ */ fe.jsxs("div", { children: [
    '    "height": ',
    /* @__PURE__ */ fe.jsx(Fd, { value: v.height, onChange: (f) => u({ ...v, height: f }), step: 8 })
  ] }),
  "}"
] }), Mj = ({ gridSettings: v, setGridSettings: u }) => {
  const f = mt.useRef(null);
  let g = [];
  const [T, D] = mt.useState(!1);
  v.image && (v.header.width + v.cell.width * v.cols != v.image.naturalWidth && g.push(/* @__PURE__ */ fe.jsx("div", { children: "header.width + (cell.width * cols) != image.naturalWidth" }, "wrong-width")), v.header.height + v.cell.height * v.rows != v.image.naturalHeight && g.push(/* @__PURE__ */ fe.jsx("div", { children: "header.height + (cell.height * rows) != image.naturalHeight" }, "wrong-height")));
  const O = mt.useCallback((U) => {
    let F = { ...v, ...U };
    if (v.image) {
      let z = v.image.naturalWidth, Q = F.header.width, V = F.cell.width;
      U.cols !== void 0 && (V = Math.floor((z - Q) / F.cols), V -= V % 8, Q -= Q + V * F.cols - z), U.cell !== void 0 && (V -= V % 8, F.cols = Math.floor(z / V), Q = z - V * F.cols);
      let G = v.image.naturalHeight, q = F.header.height, re = F.cell.height;
      U.rows !== void 0 && (re = Math.floor((G - q) / F.rows), re -= re % 8, q -= q + re * F.rows - G), U.cell !== void 0 && (re -= re % 8, F.rows = Math.floor(G / re), q = G - re * F.rows), F.header = { ...F.header, width: Q, height: q }, F.cell = { ...F.cell, width: V, height: re };
    }
    u(new pa(F)), D(!0);
  }, [v, u]), _ = mt.useCallback(() => {
    navigator.clipboard.writeText("window.gridSettings = " + JSON.stringify(v, null, 2) + ";"), f.current && new ah(f.current).show();
  }, [v]);
  return /* @__PURE__ */ fe.jsxs("div", { className: "container", children: [
    /* @__PURE__ */ fe.jsx("div", { children: "{" }),
    /* @__PURE__ */ fe.jsxs("div", { children: [
      '  "header": ',
      /* @__PURE__ */ fe.jsx(Nj, { headerSettings: v.header, onChange: (U) => O({ header: U }) }),
      ","
    ] }),
    /* @__PURE__ */ fe.jsxs("div", { children: [
      '  "cell": ',
      /* @__PURE__ */ fe.jsx(Lj, { cellSettings: v.cell, onChange: (U) => O({ cell: U }) }),
      ","
    ] }),
    /* @__PURE__ */ fe.jsxs("div", { children: [
      '  "cols": ',
      /* @__PURE__ */ fe.jsx(Fd, { value: v.cols, onChange: (U) => O({ cols: U }) }),
      ","
    ] }),
    /* @__PURE__ */ fe.jsxs("div", { children: [
      '  "rows": ',
      /* @__PURE__ */ fe.jsx(Fd, { value: v.rows, onChange: (U) => O({ rows: U }) })
    ] }),
    /* @__PURE__ */ fe.jsx("div", { children: "}" }),
    /* @__PURE__ */ fe.jsxs("div", { className: "row", children: [
      /* @__PURE__ */ fe.jsx("div", { className: "col-auto text-bg-warning", style: { zIndex: 100, display: g.length > 0 ? "" : "none" }, children: g }),
      /* @__PURE__ */ fe.jsx("div", { className: "col-auto", children: /* @__PURE__ */ fe.jsx("button", { className: "btn btn-primary", style: { display: T ? "" : "none" }, onClick: _, children: "Copy" }) })
    ] }),
    /* @__PURE__ */ fe.jsx("div", { className: "toast-container p-3", children: /* @__PURE__ */ fe.jsxs("div", { className: "toast", role: "alert", ref: f, children: [
      /* @__PURE__ */ fe.jsxs("div", { className: "toast-header", children: [
        /* @__PURE__ */ fe.jsx("i", { className: "bi bi-clipboard-check" }),
        /* @__PURE__ */ fe.jsx("strong", { className: "me-auto", children: "GridSettings" }),
        /* @__PURE__ */ fe.jsx("button", { type: "button", className: "btn-close", "data-bs-dismiss": "toast", "aria-label": "Close" })
      ] }),
      /* @__PURE__ */ fe.jsx("div", { className: "toast-body", children: "設定用JSONをクリップボードにコピーしました" })
    ] }) })
  ] });
};
function zj() {
  const v = location.href.replace(/\.html?$/, ""), u = mt.useRef(null), [f, g] = mt.useState(new pa(window.gridSettings)), [T, D] = mt.useState(!1), [O, _] = mt.useState(0), [U, F] = mt.useState(0), z = mt.useCallback((q, re) => {
    _(q), F(re), D(!0);
  }, [_, F, D]), Q = mt.useCallback(() => {
    D(!1);
  }, [D]);
  mt.useEffect(() => {
    u.current && (console.log("Start image loading"), u.current.src = v + ".png");
  }, []);
  const V = mt.useCallback((q) => {
    g(new pa({ ...f, image: q.currentTarget })), console.log("Image loaded");
  }, [f]), G = mt.useCallback((q) => {
    T && (q.key === "ArrowUp" && O > 0 && _(O - 1), q.key === "ArrowDown" && O < f.rows - 1 && _(O + 1), q.key === "ArrowLeft" && U > 0 && F(U - 1), q.key === "ArrowRight" && U < f.cols - 1 && F(U + 1));
  }, [f, T, O, U, _, F]);
  return kj(["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], G), /* @__PURE__ */ fe.jsxs(fe.Fragment, { children: [
    /* @__PURE__ */ fe.jsx("img", { ref: u, style: { display: "none" }, onLoad: V }),
    /* @__PURE__ */ fe.jsxs(pa.Context.Provider, { value: f, children: [
      /* @__PURE__ */ fe.jsx(gR.Provider, { value: z, children: /* @__PURE__ */ fe.jsx(RN, {}) }),
      /* @__PURE__ */ fe.jsx(xj, { show: T, rowIndex: O, colIndex: U, onClosing: Q })
    ] }),
    /* @__PURE__ */ fe.jsx("div", { className: "container position-absolute top-0 left-0", children: /* @__PURE__ */ fe.jsx(Mj, { gridSettings: f, setGridSettings: g }) })
  ] });
}
window.gridSettings = new pa(window.gridSettings);
Qv.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ fe.jsx(fN.StrictMode, { children: /* @__PURE__ */ fe.jsx(zj, {}) })
);
//# sourceMappingURL=sd-grids-viewer.js.map
