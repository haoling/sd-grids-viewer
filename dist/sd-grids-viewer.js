var tM = Object.defineProperty;
var nM = (f, a, s) => a in f ? tM(f, a, { enumerable: !0, configurable: !0, writable: !0, value: s }) : f[a] = s;
var Yo = (f, a, s) => (nM(f, typeof a != "symbol" ? a + "" : a, s), s);
(function() {
  const a = document.createElement("link").relList;
  if (a && a.supports && a.supports("modulepreload"))
    return;
  for (const y of document.querySelectorAll('link[rel="modulepreload"]'))
    p(y);
  new MutationObserver((y) => {
    for (const b of y)
      if (b.type === "childList")
        for (const T of b.addedNodes)
          T.tagName === "LINK" && T.rel === "modulepreload" && p(T);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(y) {
    const b = {};
    return y.integrity && (b.integrity = y.integrity), y.referrerPolicy && (b.referrerPolicy = y.referrerPolicy), y.crossOrigin === "use-credentials" ? b.credentials = "include" : y.crossOrigin === "anonymous" ? b.credentials = "omit" : b.credentials = "same-origin", b;
  }
  function p(y) {
    if (y.ep)
      return;
    y.ep = !0;
    const b = s(y);
    fetch(y.href, b);
  }
})();
function B1(f) {
  return f && f.__esModule && Object.prototype.hasOwnProperty.call(f, "default") ? f.default : f;
}
var wC = { exports: {} }, xv = {}, RC = { exports: {} }, kv = { exports: {} };
kv.exports;
var VR;
function rM() {
  return VR || (VR = 1, function(f, a) {
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
      var p = "18.2.0", y = Symbol.for("react.element"), b = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), O = Symbol.for("react.provider"), A = Symbol.for("react.context"), z = Symbol.for("react.forward_ref"), F = Symbol.for("react.suspense"), H = Symbol.for("react.suspense_list"), Y = Symbol.for("react.memo"), X = Symbol.for("react.lazy"), fe = Symbol.for("react.offscreen"), xe = Symbol.iterator, ze = "@@iterator";
      function ge(S) {
        if (S === null || typeof S != "object")
          return null;
        var N = xe && S[xe] || S[ze];
        return typeof N == "function" ? N : null;
      }
      var ie = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Ce = {
        transition: null
      }, ae = {
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
        var N = De.getCurrentStack;
        return N && (S += N() || ""), S;
      };
      var ot = !1, at = !1, ct = !1, Pe = !1, Ze = !1, qe = {
        ReactCurrentDispatcher: ie,
        ReactCurrentBatchConfig: Ce,
        ReactCurrentOwner: Ne
      };
      qe.ReactDebugCurrentFrame = De, qe.ReactCurrentActQueue = ae;
      function Ye(S) {
        {
          for (var N = arguments.length, W = new Array(N > 1 ? N - 1 : 0), q = 1; q < N; q++)
            W[q - 1] = arguments[q];
          be("warn", S, W);
        }
      }
      function ee(S) {
        {
          for (var N = arguments.length, W = new Array(N > 1 ? N - 1 : 0), q = 1; q < N; q++)
            W[q - 1] = arguments[q];
          be("error", S, W);
        }
      }
      function be(S, N, W) {
        {
          var q = qe.ReactDebugCurrentFrame, he = q.getStackAddendum();
          he !== "" && (N += "%s", W = W.concat([he]));
          var He = W.map(function(ke) {
            return String(ke);
          });
          He.unshift("Warning: " + N), Function.prototype.apply.call(console[S], console, He);
        }
      }
      var L = {};
      function ne(S, N) {
        {
          var W = S.constructor, q = W && (W.displayName || W.name) || "ReactClass", he = q + "." + N;
          if (L[he])
            return;
          ee("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", N, q), L[he] = !0;
        }
      }
      var we = {
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
        enqueueForceUpdate: function(S, N, W) {
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
        enqueueReplaceState: function(S, N, W, q) {
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
        enqueueSetState: function(S, N, W, q) {
          ne(S, "setState");
        }
      }, Je = Object.assign, Ke = {};
      Object.freeze(Ke);
      function gt(S, N, W) {
        this.props = S, this.context = N, this.refs = Ke, this.updater = W || we;
      }
      gt.prototype.isReactComponent = {}, gt.prototype.setState = function(S, N) {
        if (typeof S != "object" && typeof S != "function" && S != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, S, N, "setState");
      }, gt.prototype.forceUpdate = function(S) {
        this.updater.enqueueForceUpdate(this, S, "forceUpdate");
      };
      {
        var Et = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, wt = function(S, N) {
          Object.defineProperty(gt.prototype, S, {
            get: function() {
              Ye("%s(...) is deprecated in plain JavaScript React classes. %s", N[0], N[1]);
            }
          });
        };
        for (var mt in Et)
          Et.hasOwnProperty(mt) && wt(mt, Et[mt]);
      }
      function Zt() {
      }
      Zt.prototype = gt.prototype;
      function ir(S, N, W) {
        this.props = S, this.context = N, this.refs = Ke, this.updater = W || we;
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
          var N = typeof Symbol == "function" && Symbol.toStringTag, W = N && S[Symbol.toStringTag] || S.constructor.name || "Object";
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
      function Sr(S, N, W) {
        var q = S.displayName;
        if (q)
          return q;
        var he = N.displayName || N.name || "";
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
          case b:
            return "Portal";
          case x:
            return "Profiler";
          case E:
            return "StrictMode";
          case F:
            return "Suspense";
          case H:
            return "SuspenseList";
        }
        if (typeof S == "object")
          switch (S.$$typeof) {
            case A:
              var N = S;
              return Cn(N) + ".Consumer";
            case O:
              var W = S;
              return Cn(W._context) + ".Provider";
            case z:
              return Sr(S, S.render, "ForwardRef");
            case Y:
              var q = S.displayName || null;
              return q !== null ? q : bn(S.type) || "Memo";
            case X: {
              var he = S, He = he._payload, ke = he._init;
              try {
                return bn(ke(He));
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
          var N = Object.getOwnPropertyDescriptor(S, "ref").get;
          if (N && N.isReactWarning)
            return !1;
        }
        return S.ref !== void 0;
      }
      function ln(S) {
        if (zr.call(S, "key")) {
          var N = Object.getOwnPropertyDescriptor(S, "key").get;
          if (N && N.isReactWarning)
            return !1;
        }
        return S.key !== void 0;
      }
      function xi(S, N) {
        var W = function() {
          qn || (qn = !0, ee("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", N));
        };
        W.isReactWarning = !0, Object.defineProperty(S, "key", {
          get: W,
          configurable: !0
        });
      }
      function Di(S, N) {
        var W = function() {
          Pr || (Pr = !0, ee("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", N));
        };
        W.isReactWarning = !0, Object.defineProperty(S, "ref", {
          get: W,
          configurable: !0
        });
      }
      function Oi(S) {
        if (typeof S.ref == "string" && Ne.current && S.__self && Ne.current.stateNode !== S.__self) {
          var N = bn(Ne.current.type);
          Zn[N] || (ee('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', N, S.ref), Zn[N] = !0);
        }
      }
      var Se = function(S, N, W, q, he, He, ke) {
        var pt = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: y,
          // Built-in properties that belong on the element
          type: S,
          key: N,
          ref: W,
          props: ke,
          // Record the component responsible for creating this element.
          _owner: He
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
      function Qe(S, N, W) {
        var q, he = {}, He = null, ke = null, pt = null, Ot = null;
        if (N != null) {
          dr(N) && (ke = N.ref, Oi(N)), ln(N) && (Ln(N.key), He = "" + N.key), pt = N.__self === void 0 ? null : N.__self, Ot = N.__source === void 0 ? null : N.__source;
          for (q in N)
            zr.call(N, q) && !Ur.hasOwnProperty(q) && (he[q] = N[q]);
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
        if (He || ke) {
          var gn = typeof S == "function" ? S.displayName || S.name || "Unknown" : S;
          He && xi(he, gn), ke && Di(he, gn);
        }
        return Se(S, He, ke, pt, Ot, Ne.current, he);
      }
      function xt(S, N) {
        var W = Se(S.type, N, S.ref, S._self, S._source, S._owner, S.props);
        return W;
      }
      function Kt(S, N, W) {
        if (S == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + S + ".");
        var q, he = Je({}, S.props), He = S.key, ke = S.ref, pt = S._self, Ot = S._source, Xt = S._owner;
        if (N != null) {
          dr(N) && (ke = N.ref, Xt = Ne.current), ln(N) && (Ln(N.key), He = "" + N.key);
          var en;
          S.type && S.type.defaultProps && (en = S.type.defaultProps);
          for (q in N)
            zr.call(N, q) && !Ur.hasOwnProperty(q) && (N[q] === void 0 && en !== void 0 ? he[q] = en[q] : he[q] = N[q]);
        }
        var tn = arguments.length - 2;
        if (tn === 1)
          he.children = W;
        else if (tn > 1) {
          for (var nn = Array(tn), gn = 0; gn < tn; gn++)
            nn[gn] = arguments[gn + 2];
          he.children = nn;
        }
        return Se(S.type, He, ke, pt, Ot, Xt, he);
      }
      function $t(S) {
        return typeof S == "object" && S !== null && S.$$typeof === y;
      }
      var $n = ".", Rn = ":";
      function jr(S) {
        var N = /[=:]/g, W = {
          "=": "=0",
          ":": "=2"
        }, q = S.replace(N, function(he) {
          return W[he];
        });
        return "$" + q;
      }
      var Jt = !1, pr = /\/+/g;
      function Qt(S) {
        return S.replace(pr, "$&/");
      }
      function cn(S, N) {
        return typeof S == "object" && S !== null && S.key != null ? (Ln(S.key), jr("" + S.key)) : N.toString(36);
      }
      function ya(S, N, W, q, he) {
        var He = typeof S;
        (He === "undefined" || He === "boolean") && (S = null);
        var ke = !1;
        if (S === null)
          ke = !0;
        else
          switch (He) {
            case "string":
            case "number":
              ke = !0;
              break;
            case "object":
              switch (S.$$typeof) {
                case y:
                case b:
                  ke = !0;
              }
          }
        if (ke) {
          var pt = S, Ot = he(pt), Xt = q === "" ? $n + cn(pt, 0) : q;
          if (Sn(Ot)) {
            var en = "";
            Xt != null && (en = Qt(Xt) + "/"), ya(Ot, N, en, "", function(Ap) {
              return Ap;
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
            )), N.push(Ot));
          return 1;
        }
        var tn, nn, gn = 0, It = q === "" ? $n : q + Rn;
        if (Sn(S))
          for (var nl = 0; nl < S.length; nl++)
            tn = S[nl], nn = It + cn(tn, nl), gn += ya(tn, N, W, nn, he);
        else {
          var Vu = ge(S);
          if (typeof Vu == "function") {
            var lc = S;
            Vu === lc.entries && (Jt || Ye("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Jt = !0);
            for (var uc = Vu.call(lc), Eo, sc = 0; !(Eo = uc.next()).done; )
              tn = Eo.value, nn = It + cn(tn, sc++), gn += ya(tn, N, W, nn, he);
          } else if (He === "object") {
            var cc = String(S);
            throw new Error("Objects are not valid as a React child (found: " + (cc === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : cc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return gn;
      }
      function Wi(S, N, W) {
        if (S == null)
          return S;
        var q = [], he = 0;
        return ya(S, q, "", "", function(He) {
          return N.call(W, He, he++);
        }), q;
      }
      function Ko(S) {
        var N = 0;
        return Wi(S, function() {
          N++;
        }), N;
      }
      function jl(S, N, W) {
        Wi(S, function() {
          N.apply(this, arguments);
        }, W);
      }
      function Fl(S) {
        return Wi(S, function(N) {
          return N;
        }) || [];
      }
      function Qo(S) {
        if (!$t(S))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return S;
      }
      function Ea(S) {
        var N = {
          $$typeof: A,
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
        N.Provider = {
          $$typeof: O,
          _context: N
        };
        var W = !1, q = !1, he = !1;
        {
          var He = {
            $$typeof: A,
            _context: N
          };
          Object.defineProperties(He, {
            Provider: {
              get: function() {
                return q || (q = !0, ee("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), N.Provider;
              },
              set: function(ke) {
                N.Provider = ke;
              }
            },
            _currentValue: {
              get: function() {
                return N._currentValue;
              },
              set: function(ke) {
                N._currentValue = ke;
              }
            },
            _currentValue2: {
              get: function() {
                return N._currentValue2;
              },
              set: function(ke) {
                N._currentValue2 = ke;
              }
            },
            _threadCount: {
              get: function() {
                return N._threadCount;
              },
              set: function(ke) {
                N._threadCount = ke;
              }
            },
            Consumer: {
              get: function() {
                return W || (W = !0, ee("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), N.Consumer;
              }
            },
            displayName: {
              get: function() {
                return N.displayName;
              },
              set: function(ke) {
                he || (Ye("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", ke), he = !0);
              }
            }
          }), N.Consumer = He;
        }
        return N._currentRenderer = null, N._currentRenderer2 = null, N;
      }
      var _a = -1, Gi = 0, fo = 1, ii = 2;
      function ai(S) {
        if (S._status === _a) {
          var N = S._result, W = N();
          if (W.then(function(He) {
            if (S._status === Gi || S._status === _a) {
              var ke = S;
              ke._status = fo, ke._result = He;
            }
          }, function(He) {
            if (S._status === Gi || S._status === _a) {
              var ke = S;
              ke._status = ii, ke._result = He;
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
      function Ai(S) {
        var N = {
          // We use these fields to store the result.
          _status: _a,
          _result: S
        }, W = {
          $$typeof: X,
          _payload: N,
          _init: ai
        };
        {
          var q, he;
          Object.defineProperties(W, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return q;
              },
              set: function(He) {
                ee("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), q = He, Object.defineProperty(W, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return he;
              },
              set: function(He) {
                ee("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), he = He, Object.defineProperty(W, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return W;
      }
      function po(S) {
        S != null && S.$$typeof === Y ? ee("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof S != "function" ? ee("forwardRef requires a render function but was given %s.", S === null ? "null" : typeof S) : S.length !== 0 && S.length !== 2 && ee("forwardRef render functions accept exactly two parameters: props and ref. %s", S.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), S != null && (S.defaultProps != null || S.propTypes != null) && ee("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var N = {
          $$typeof: z,
          render: S
        };
        {
          var W;
          Object.defineProperty(N, "displayName", {
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
        return N;
      }
      var k;
      k = Symbol.for("react.module.reference");
      function le(S) {
        return !!(typeof S == "string" || typeof S == "function" || S === T || S === x || Ze || S === E || S === F || S === H || Pe || S === fe || ot || at || ct || typeof S == "object" && S !== null && (S.$$typeof === X || S.$$typeof === Y || S.$$typeof === O || S.$$typeof === A || S.$$typeof === z || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        S.$$typeof === k || S.getModuleId !== void 0));
      }
      function Ee(S, N) {
        le(S) || ee("memo: The first argument must be a component. Instead received: %s", S === null ? "null" : typeof S);
        var W = {
          $$typeof: Y,
          type: S,
          compare: N === void 0 ? null : N
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
        var S = ie.current;
        return S === null && ee(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), S;
      }
      function Nt(S) {
        var N = Te();
        if (S._context !== void 0) {
          var W = S._context;
          W.Consumer === S ? ee("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : W.Provider === S && ee("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return N.useContext(S);
      }
      function zt(S) {
        var N = Te();
        return N.useState(S);
      }
      function Rt(S, N, W) {
        var q = Te();
        return q.useReducer(S, N, W);
      }
      function et(S) {
        var N = Te();
        return N.useRef(S);
      }
      function Jn(S, N) {
        var W = Te();
        return W.useEffect(S, N);
      }
      function fn(S, N) {
        var W = Te();
        return W.useInsertionEffect(S, N);
      }
      function dn(S, N) {
        var W = Te();
        return W.useLayoutEffect(S, N);
      }
      function Fr(S, N) {
        var W = Te();
        return W.useCallback(S, N);
      }
      function Pa(S, N) {
        var W = Te();
        return W.useMemo(S, N);
      }
      function pn(S, N, W) {
        var q = Te();
        return q.useImperativeHandle(S, N, W);
      }
      function oi(S, N) {
        {
          var W = Te();
          return W.useDebugValue(S, N);
        }
      }
      function Xs() {
        var S = Te();
        return S.useTransition();
      }
      function ja(S) {
        var N = Te();
        return N.useDeferredValue(S);
      }
      function Dt() {
        var S = Te();
        return S.useId();
      }
      function Il(S, N, W) {
        var q = Te();
        return q.useSyncExternalStore(S, N, W);
      }
      var ho = 0, Xo, li, qs, Br, Zs, Js, ec;
      function Hl() {
      }
      Hl.__reactDisabledLog = !0;
      function zu() {
        {
          if (ho === 0) {
            Xo = console.log, li = console.info, qs = console.warn, Br = console.error, Zs = console.group, Js = console.groupCollapsed, ec = console.groupEnd;
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
                value: li
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
      var Fa = qe.ReactCurrentDispatcher, Ki;
      function qo(S, N, W) {
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
      var Ia = !1, $l;
      {
        var Vl = typeof WeakMap == "function" ? WeakMap : Map;
        $l = new Vl();
      }
      function Zo(S, N) {
        if (!S || Ia)
          return "";
        {
          var W = $l.get(S);
          if (W !== void 0)
            return W;
        }
        var q;
        Ia = !0;
        var he = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var He;
        He = Fa.current, Fa.current = null, zu();
        try {
          if (N) {
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
              } catch (It) {
                q = It;
              }
              Reflect.construct(S, [], ke);
            } else {
              try {
                ke.call();
              } catch (It) {
                q = It;
              }
              S.call(ke.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (It) {
              q = It;
            }
            S();
          }
        } catch (It) {
          if (It && q && typeof It.stack == "string") {
            for (var pt = It.stack.split(`
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
          Ia = !1, Fa.current = He, vo(), Error.prepareStackTrace = he;
        }
        var nn = S ? S.displayName || S.name : "", gn = nn ? qo(nn) : "";
        return typeof S == "function" && $l.set(S, gn), gn;
      }
      function tc(S, N, W) {
        return Zo(S, !1);
      }
      function nc(S) {
        var N = S.prototype;
        return !!(N && N.isReactComponent);
      }
      function Mt(S, N, W) {
        if (S == null)
          return "";
        if (typeof S == "function")
          return Zo(S, nc(S));
        if (typeof S == "string")
          return qo(S);
        switch (S) {
          case F:
            return qo("Suspense");
          case H:
            return qo("SuspenseList");
        }
        if (typeof S == "object")
          switch (S.$$typeof) {
            case z:
              return tc(S.render);
            case Y:
              return Mt(S.type, N, W);
            case X: {
              var q = S, he = q._payload, He = q._init;
              try {
                return Mt(He(he), N, W);
              } catch {
              }
            }
          }
        return "";
      }
      var rc = {}, Uu = qe.ReactDebugCurrentFrame;
      function Jo(S) {
        if (S) {
          var N = S._owner, W = Mt(S.type, S._source, N ? N.type : null);
          Uu.setExtraStackFrame(W);
        } else
          Uu.setExtraStackFrame(null);
      }
      function ic(S, N, W, q, he) {
        {
          var He = Function.call.bind(zr);
          for (var ke in S)
            if (He(S, ke)) {
              var pt = void 0;
              try {
                if (typeof S[ke] != "function") {
                  var Ot = Error((q || "React class") + ": " + W + " type `" + ke + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof S[ke] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Ot.name = "Invariant Violation", Ot;
                }
                pt = S[ke](N, ke, q, W, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Xt) {
                pt = Xt;
              }
              pt && !(pt instanceof Error) && (Jo(he), ee("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", q || "React class", W, ke, typeof pt), Jo(null)), pt instanceof Error && !(pt.message in rc) && (rc[pt.message] = !0, Jo(he), ee("Failed %s type: %s", W, pt.message), Jo(null));
            }
        }
      }
      function Ft(S) {
        if (S) {
          var N = S._owner, W = Mt(S.type, S._source, N ? N.type : null);
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
          var N = S.fileName.replace(/^.*[\\\/]/, ""), W = S.lineNumber;
          return `

Check your code at ` + N + ":" + W + ".";
        }
        return "";
      }
      function Sa(S) {
        return S != null ? yt(S.__source) : "";
      }
      var xn = {};
      function ui(S) {
        var N = Bl();
        if (!N) {
          var W = typeof S == "string" ? S : S.displayName || S.name;
          W && (N = `

Check the top-level render call using <` + W + ">.");
        }
        return N;
      }
      function Qi(S, N) {
        if (!(!S._store || S._store.validated || S.key != null)) {
          S._store.validated = !0;
          var W = ui(N);
          if (!xn[W]) {
            xn[W] = !0;
            var q = "";
            S && S._owner && S._owner !== Ne.current && (q = " It was passed a child from " + bn(S._owner.type) + "."), Ft(S), ee('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', W, q), Ft(null);
          }
        }
      }
      function el(S, N) {
        if (typeof S == "object") {
          if (Sn(S))
            for (var W = 0; W < S.length; W++) {
              var q = S[W];
              $t(q) && Qi(q, N);
            }
          else if ($t(S))
            S._store && (S._store.validated = !0);
          else if (S) {
            var he = ge(S);
            if (typeof he == "function" && he !== S.entries)
              for (var He = he.call(S), ke; !(ke = He.next()).done; )
                $t(ke.value) && Qi(ke.value, N);
          }
        }
      }
      function mn(S) {
        {
          var N = S.type;
          if (N == null || typeof N == "string")
            return;
          var W;
          if (typeof N == "function")
            W = N.propTypes;
          else if (typeof N == "object" && (N.$$typeof === z || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          N.$$typeof === Y))
            W = N.propTypes;
          else
            return;
          if (W) {
            var q = bn(N);
            ic(W, S.props, "prop", q, S);
          } else if (N.PropTypes !== void 0 && !Pu) {
            Pu = !0;
            var he = bn(N);
            ee("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", he || "Unknown");
          }
          typeof N.getDefaultProps == "function" && !N.getDefaultProps.isReactClassApproved && ee("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Dn(S) {
        {
          for (var N = Object.keys(S.props), W = 0; W < N.length; W++) {
            var q = N[W];
            if (q !== "children" && q !== "key") {
              Ft(S), ee("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", q), Ft(null);
              break;
            }
          }
          S.ref !== null && (Ft(S), ee("Invalid attribute `ref` supplied to `React.Fragment`."), Ft(null));
        }
      }
      function ac(S, N, W) {
        var q = le(S);
        if (!q) {
          var he = "";
          (S === void 0 || typeof S == "object" && S !== null && Object.keys(S).length === 0) && (he += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var He = Sa(N);
          He ? he += He : he += Bl();
          var ke;
          S === null ? ke = "null" : Sn(S) ? ke = "array" : S !== void 0 && S.$$typeof === y ? (ke = "<" + (bn(S.type) || "Unknown") + " />", he = " Did you accidentally export a JSX literal instead of a component?") : ke = typeof S, ee("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ke, he);
        }
        var pt = Qe.apply(this, arguments);
        if (pt == null)
          return pt;
        if (q)
          for (var Ot = 2; Ot < arguments.length; Ot++)
            el(arguments[Ot], S);
        return S === T ? Dn(pt) : mn(pt), pt;
      }
      var Cr = !1;
      function si(S) {
        var N = ac.bind(null, S);
        return N.type = S, Cr || (Cr = !0, Ye("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(N, "type", {
          enumerable: !1,
          get: function() {
            return Ye("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: S
            }), S;
          }
        }), N;
      }
      function Ca(S, N, W) {
        for (var q = Kt.apply(this, arguments), he = 2; he < arguments.length; he++)
          el(arguments[he], q.type);
        return mn(q), q;
      }
      function ju(S, N) {
        var W = Ce.transition;
        Ce.transition = {};
        var q = Ce.transition;
        Ce.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          S();
        } finally {
          if (Ce.transition = W, W === null && q._updatedFibers) {
            var he = q._updatedFibers.size;
            he > 10 && Ye("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), q._updatedFibers.clear();
          }
        }
      }
      var Yl = !1, Wl = null;
      function tl(S) {
        if (Wl === null)
          try {
            var N = ("require" + Math.random()).slice(0, 7), W = f && f[N];
            Wl = W.call(f, "timers").setImmediate;
          } catch {
            Wl = function(he) {
              Yl === !1 && (Yl = !0, typeof MessageChannel > "u" && ee("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var He = new MessageChannel();
              He.port1.onmessage = he, He.port2.postMessage(void 0);
            };
          }
        return Wl(S);
      }
      var Xi = 0, mo = !1;
      function Fu(S) {
        {
          var N = Xi;
          Xi++, ae.current === null && (ae.current = []);
          var W = ae.isBatchingLegacy, q;
          try {
            if (ae.isBatchingLegacy = !0, q = S(), !W && ae.didScheduleLegacyUpdate) {
              var he = ae.current;
              he !== null && (ae.didScheduleLegacyUpdate = !1, yo(he));
            }
          } catch (nn) {
            throw go(N), nn;
          } finally {
            ae.isBatchingLegacy = W;
          }
          if (q !== null && typeof q == "object" && typeof q.then == "function") {
            var He = q, ke = !1, pt = {
              then: function(nn, gn) {
                ke = !0, He.then(function(It) {
                  go(N), Xi === 0 ? Iu(It, nn, gn) : nn(It);
                }, function(It) {
                  go(N), gn(It);
                });
              }
            };
            return !mo && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              ke || (mo = !0, ee("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), pt;
          } else {
            var Ot = q;
            if (go(N), Xi === 0) {
              var Xt = ae.current;
              Xt !== null && (yo(Xt), ae.current = null);
              var en = {
                then: function(nn, gn) {
                  ae.current === null ? (ae.current = [], Iu(Ot, nn, gn)) : nn(Ot);
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
      function Iu(S, N, W) {
        {
          var q = ae.current;
          if (q !== null)
            try {
              yo(q), tl(function() {
                q.length === 0 ? (ae.current = null, N(S)) : Iu(S, N, W);
              });
            } catch (he) {
              W(he);
            }
          else
            N(S);
        }
      }
      var Ha = !1;
      function yo(S) {
        if (!Ha) {
          Ha = !0;
          var N = 0;
          try {
            for (; N < S.length; N++) {
              var W = S[N];
              do
                W = W(!0);
              while (W !== null);
            }
            S.length = 0;
          } catch (q) {
            throw S = S.slice(N + 1), q;
          } finally {
            Ha = !1;
          }
        }
      }
      var Hu = ac, oc = Ca, ba = si, $u = {
        map: Wi,
        forEach: jl,
        count: Ko,
        toArray: Fl,
        only: Qo
      };
      a.Children = $u, a.Component = gt, a.Fragment = T, a.Profiler = x, a.PureComponent = ir, a.StrictMode = E, a.Suspense = F, a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = qe, a.cloneElement = oc, a.createContext = Ea, a.createElement = Hu, a.createFactory = ba, a.createRef = Mr, a.forwardRef = po, a.isValidElement = $t, a.lazy = Ai, a.memo = Ee, a.startTransition = ju, a.unstable_act = Fu, a.useCallback = Fr, a.useContext = Nt, a.useDebugValue = oi, a.useDeferredValue = ja, a.useEffect = Jn, a.useId = Dt, a.useImperativeHandle = pn, a.useInsertionEffect = fn, a.useLayoutEffect = dn, a.useMemo = Pa, a.useReducer = Rt, a.useRef = et, a.useState = zt, a.useSyncExternalStore = Il, a.useTransition = Xs, a.version = p, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(kv, kv.exports)), kv.exports;
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
var BR;
function iM() {
  if (BR)
    return jt;
  BR = 1;
  var f = Symbol.for("react.element"), a = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), b = Symbol.for("react.provider"), T = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), O = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), z = Symbol.iterator;
  function F(L) {
    return L === null || typeof L != "object" ? null : (L = z && L[z] || L["@@iterator"], typeof L == "function" ? L : null);
  }
  var H = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Y = Object.assign, X = {};
  function fe(L, ne, we) {
    this.props = L, this.context = ne, this.refs = X, this.updater = we || H;
  }
  fe.prototype.isReactComponent = {}, fe.prototype.setState = function(L, ne) {
    if (typeof L != "object" && typeof L != "function" && L != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, L, ne, "setState");
  }, fe.prototype.forceUpdate = function(L) {
    this.updater.enqueueForceUpdate(this, L, "forceUpdate");
  };
  function xe() {
  }
  xe.prototype = fe.prototype;
  function ze(L, ne, we) {
    this.props = L, this.context = ne, this.refs = X, this.updater = we || H;
  }
  var ge = ze.prototype = new xe();
  ge.constructor = ze, Y(ge, fe.prototype), ge.isPureReactComponent = !0;
  var ie = Array.isArray, Ce = Object.prototype.hasOwnProperty, ae = { current: null }, Ne = { key: !0, ref: !0, __self: !0, __source: !0 };
  function De(L, ne, we) {
    var Je, Ke = {}, gt = null, Et = null;
    if (ne != null)
      for (Je in ne.ref !== void 0 && (Et = ne.ref), ne.key !== void 0 && (gt = "" + ne.key), ne)
        Ce.call(ne, Je) && !Ne.hasOwnProperty(Je) && (Ke[Je] = ne[Je]);
    var wt = arguments.length - 2;
    if (wt === 1)
      Ke.children = we;
    else if (1 < wt) {
      for (var mt = Array(wt), Zt = 0; Zt < wt; Zt++)
        mt[Zt] = arguments[Zt + 2];
      Ke.children = mt;
    }
    if (L && L.defaultProps)
      for (Je in wt = L.defaultProps, wt)
        Ke[Je] === void 0 && (Ke[Je] = wt[Je]);
    return { $$typeof: f, type: L, key: gt, ref: Et, props: Ke, _owner: ae.current };
  }
  function tt(L, ne) {
    return { $$typeof: f, type: L.type, key: ne, ref: L.ref, props: L.props, _owner: L._owner };
  }
  function vt(L) {
    return typeof L == "object" && L !== null && L.$$typeof === f;
  }
  function ot(L) {
    var ne = { "=": "=0", ":": "=2" };
    return "$" + L.replace(/[=:]/g, function(we) {
      return ne[we];
    });
  }
  var at = /\/+/g;
  function ct(L, ne) {
    return typeof L == "object" && L !== null && L.key != null ? ot("" + L.key) : ne.toString(36);
  }
  function Pe(L, ne, we, Je, Ke) {
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
            case f:
            case a:
              Et = !0;
          }
      }
    if (Et)
      return Et = L, Ke = Ke(Et), L = Je === "" ? "." + ct(Et, 0) : Je, ie(Ke) ? (we = "", L != null && (we = L.replace(at, "$&/") + "/"), Pe(Ke, ne, we, "", function(Zt) {
        return Zt;
      })) : Ke != null && (vt(Ke) && (Ke = tt(Ke, we + (!Ke.key || Et && Et.key === Ke.key ? "" : ("" + Ke.key).replace(at, "$&/") + "/") + L)), ne.push(Ke)), 1;
    if (Et = 0, Je = Je === "" ? "." : Je + ":", ie(L))
      for (var wt = 0; wt < L.length; wt++) {
        gt = L[wt];
        var mt = Je + ct(gt, wt);
        Et += Pe(gt, ne, we, mt, Ke);
      }
    else if (mt = F(L), typeof mt == "function")
      for (L = mt.call(L), wt = 0; !(gt = L.next()).done; )
        gt = gt.value, mt = Je + ct(gt, wt++), Et += Pe(gt, ne, we, mt, Ke);
    else if (gt === "object")
      throw ne = String(L), Error("Objects are not valid as a React child (found: " + (ne === "[object Object]" ? "object with keys {" + Object.keys(L).join(", ") + "}" : ne) + "). If you meant to render a collection of children, use an array instead.");
    return Et;
  }
  function Ze(L, ne, we) {
    if (L == null)
      return L;
    var Je = [], Ke = 0;
    return Pe(L, Je, "", "", function(gt) {
      return ne.call(we, gt, Ke++);
    }), Je;
  }
  function qe(L) {
    if (L._status === -1) {
      var ne = L._result;
      ne = ne(), ne.then(function(we) {
        (L._status === 0 || L._status === -1) && (L._status = 1, L._result = we);
      }, function(we) {
        (L._status === 0 || L._status === -1) && (L._status = 2, L._result = we);
      }), L._status === -1 && (L._status = 0, L._result = ne);
    }
    if (L._status === 1)
      return L._result.default;
    throw L._result;
  }
  var Ye = { current: null }, ee = { transition: null }, be = { ReactCurrentDispatcher: Ye, ReactCurrentBatchConfig: ee, ReactCurrentOwner: ae };
  return jt.Children = { map: Ze, forEach: function(L, ne, we) {
    Ze(L, function() {
      ne.apply(this, arguments);
    }, we);
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
  } }, jt.Component = fe, jt.Fragment = s, jt.Profiler = y, jt.PureComponent = ze, jt.StrictMode = p, jt.Suspense = x, jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = be, jt.cloneElement = function(L, ne, we) {
    if (L == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + L + ".");
    var Je = Y({}, L.props), Ke = L.key, gt = L.ref, Et = L._owner;
    if (ne != null) {
      if (ne.ref !== void 0 && (gt = ne.ref, Et = ae.current), ne.key !== void 0 && (Ke = "" + ne.key), L.type && L.type.defaultProps)
        var wt = L.type.defaultProps;
      for (mt in ne)
        Ce.call(ne, mt) && !Ne.hasOwnProperty(mt) && (Je[mt] = ne[mt] === void 0 && wt !== void 0 ? wt[mt] : ne[mt]);
    }
    var mt = arguments.length - 2;
    if (mt === 1)
      Je.children = we;
    else if (1 < mt) {
      wt = Array(mt);
      for (var Zt = 0; Zt < mt; Zt++)
        wt[Zt] = arguments[Zt + 2];
      Je.children = wt;
    }
    return { $$typeof: f, type: L.type, key: Ke, ref: gt, props: Je, _owner: Et };
  }, jt.createContext = function(L) {
    return L = { $$typeof: T, _currentValue: L, _currentValue2: L, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, L.Provider = { $$typeof: b, _context: L }, L.Consumer = L;
  }, jt.createElement = De, jt.createFactory = function(L) {
    var ne = De.bind(null, L);
    return ne.type = L, ne;
  }, jt.createRef = function() {
    return { current: null };
  }, jt.forwardRef = function(L) {
    return { $$typeof: E, render: L };
  }, jt.isValidElement = vt, jt.lazy = function(L) {
    return { $$typeof: A, _payload: { _status: -1, _result: L }, _init: qe };
  }, jt.memo = function(L, ne) {
    return { $$typeof: O, type: L, compare: ne === void 0 ? null : ne };
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
    return Ye.current.useCallback(L, ne);
  }, jt.useContext = function(L) {
    return Ye.current.useContext(L);
  }, jt.useDebugValue = function() {
  }, jt.useDeferredValue = function(L) {
    return Ye.current.useDeferredValue(L);
  }, jt.useEffect = function(L, ne) {
    return Ye.current.useEffect(L, ne);
  }, jt.useId = function() {
    return Ye.current.useId();
  }, jt.useImperativeHandle = function(L, ne, we) {
    return Ye.current.useImperativeHandle(L, ne, we);
  }, jt.useInsertionEffect = function(L, ne) {
    return Ye.current.useInsertionEffect(L, ne);
  }, jt.useLayoutEffect = function(L, ne) {
    return Ye.current.useLayoutEffect(L, ne);
  }, jt.useMemo = function(L, ne) {
    return Ye.current.useMemo(L, ne);
  }, jt.useReducer = function(L, ne, we) {
    return Ye.current.useReducer(L, ne, we);
  }, jt.useRef = function(L) {
    return Ye.current.useRef(L);
  }, jt.useState = function(L) {
    return Ye.current.useState(L);
  }, jt.useSyncExternalStore = function(L, ne, we) {
    return Ye.current.useSyncExternalStore(L, ne, we);
  }, jt.useTransition = function() {
    return Ye.current.useTransition();
  }, jt.version = "18.2.0", jt;
}
var aM = {};
aM.NODE_ENV === "production" ? RC.exports = iM() : RC.exports = rM();
var Xe = RC.exports;
const oM = /* @__PURE__ */ B1(Xe);
var YR;
function lM() {
  if (YR)
    return xv;
  YR = 1;
  var f = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return f.NODE_ENV !== "production" && function() {
    var a = Xe, s = Symbol.for("react.element"), p = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), x = Symbol.for("react.context"), O = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), z = Symbol.for("react.suspense_list"), F = Symbol.for("react.memo"), H = Symbol.for("react.lazy"), Y = Symbol.for("react.offscreen"), X = Symbol.iterator, fe = "@@iterator";
    function xe(k) {
      if (k === null || typeof k != "object")
        return null;
      var le = X && k[X] || k[fe];
      return typeof le == "function" ? le : null;
    }
    var ze = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function ge(k) {
      {
        for (var le = arguments.length, Ee = new Array(le > 1 ? le - 1 : 0), Te = 1; Te < le; Te++)
          Ee[Te - 1] = arguments[Te];
        ie("error", k, Ee);
      }
    }
    function ie(k, le, Ee) {
      {
        var Te = ze.ReactDebugCurrentFrame, Nt = Te.getStackAddendum();
        Nt !== "" && (le += "%s", Ee = Ee.concat([Nt]));
        var zt = Ee.map(function(Rt) {
          return String(Rt);
        });
        zt.unshift("Warning: " + le), Function.prototype.apply.call(console[k], console, zt);
      }
    }
    var Ce = !1, ae = !1, Ne = !1, De = !1, tt = !1, vt;
    vt = Symbol.for("react.module.reference");
    function ot(k) {
      return !!(typeof k == "string" || typeof k == "function" || k === y || k === T || tt || k === b || k === A || k === z || De || k === Y || Ce || ae || Ne || typeof k == "object" && k !== null && (k.$$typeof === H || k.$$typeof === F || k.$$typeof === E || k.$$typeof === x || k.$$typeof === O || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      k.$$typeof === vt || k.getModuleId !== void 0));
    }
    function at(k, le, Ee) {
      var Te = k.displayName;
      if (Te)
        return Te;
      var Nt = le.displayName || le.name || "";
      return Nt !== "" ? Ee + "(" + Nt + ")" : Ee;
    }
    function ct(k) {
      return k.displayName || "Context";
    }
    function Pe(k) {
      if (k == null)
        return null;
      if (typeof k.tag == "number" && ge("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof k == "function")
        return k.displayName || k.name || null;
      if (typeof k == "string")
        return k;
      switch (k) {
        case y:
          return "Fragment";
        case p:
          return "Portal";
        case T:
          return "Profiler";
        case b:
          return "StrictMode";
        case A:
          return "Suspense";
        case z:
          return "SuspenseList";
      }
      if (typeof k == "object")
        switch (k.$$typeof) {
          case x:
            var le = k;
            return ct(le) + ".Consumer";
          case E:
            var Ee = k;
            return ct(Ee._context) + ".Provider";
          case O:
            return at(k, k.render, "ForwardRef");
          case F:
            var Te = k.displayName || null;
            return Te !== null ? Te : Pe(k.type) || "Memo";
          case H: {
            var Nt = k, zt = Nt._payload, Rt = Nt._init;
            try {
              return Pe(Rt(zt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Ze = Object.assign, qe = 0, Ye, ee, be, L, ne, we, Je;
    function Ke() {
    }
    Ke.__reactDisabledLog = !0;
    function gt() {
      {
        if (qe === 0) {
          Ye = console.log, ee = console.info, be = console.warn, L = console.error, ne = console.group, we = console.groupCollapsed, Je = console.groupEnd;
          var k = {
            configurable: !0,
            enumerable: !0,
            value: Ke,
            writable: !0
          };
          Object.defineProperties(console, {
            info: k,
            log: k,
            warn: k,
            error: k,
            group: k,
            groupCollapsed: k,
            groupEnd: k
          });
        }
        qe++;
      }
    }
    function Et() {
      {
        if (qe--, qe === 0) {
          var k = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ze({}, k, {
              value: Ye
            }),
            info: Ze({}, k, {
              value: ee
            }),
            warn: Ze({}, k, {
              value: be
            }),
            error: Ze({}, k, {
              value: L
            }),
            group: Ze({}, k, {
              value: ne
            }),
            groupCollapsed: Ze({}, k, {
              value: we
            }),
            groupEnd: Ze({}, k, {
              value: Je
            })
          });
        }
        qe < 0 && ge("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var wt = ze.ReactCurrentDispatcher, mt;
    function Zt(k, le, Ee) {
      {
        if (mt === void 0)
          try {
            throw Error();
          } catch (Nt) {
            var Te = Nt.stack.trim().match(/\n( *(at )?)/);
            mt = Te && Te[1] || "";
          }
        return `
` + mt + k;
      }
    }
    var ir = !1, Hn;
    {
      var Mr = typeof WeakMap == "function" ? WeakMap : Map;
      Hn = new Mr();
    }
    function ar(k, le) {
      if (!k || ir)
        return "";
      {
        var Ee = Hn.get(k);
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
        if (le) {
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
            } catch (oi) {
              Te = oi;
            }
            Reflect.construct(k, [], Rt);
          } else {
            try {
              Rt.call();
            } catch (oi) {
              Te = oi;
            }
            k.call(Rt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (oi) {
            Te = oi;
          }
          k();
        }
      } catch (oi) {
        if (oi && Te && typeof oi.stack == "string") {
          for (var et = oi.stack.split(`
`), Jn = Te.stack.split(`
`), fn = et.length - 1, dn = Jn.length - 1; fn >= 1 && dn >= 0 && et[fn] !== Jn[dn]; )
            dn--;
          for (; fn >= 1 && dn >= 0; fn--, dn--)
            if (et[fn] !== Jn[dn]) {
              if (fn !== 1 || dn !== 1)
                do
                  if (fn--, dn--, dn < 0 || et[fn] !== Jn[dn]) {
                    var Fr = `
` + et[fn].replace(" at new ", " at ");
                    return k.displayName && Fr.includes("<anonymous>") && (Fr = Fr.replace("<anonymous>", k.displayName)), typeof k == "function" && Hn.set(k, Fr), Fr;
                  }
                while (fn >= 1 && dn >= 0);
              break;
            }
        }
      } finally {
        ir = !1, wt.current = zt, Et(), Error.prepareStackTrace = Nt;
      }
      var Pa = k ? k.displayName || k.name : "", pn = Pa ? Zt(Pa) : "";
      return typeof k == "function" && Hn.set(k, pn), pn;
    }
    function Sn(k, le, Ee) {
      return ar(k, !1);
    }
    function or(k) {
      var le = k.prototype;
      return !!(le && le.isReactComponent);
    }
    function kn(k, le, Ee) {
      if (k == null)
        return "";
      if (typeof k == "function")
        return ar(k, or(k));
      if (typeof k == "string")
        return Zt(k);
      switch (k) {
        case A:
          return Zt("Suspense");
        case z:
          return Zt("SuspenseList");
      }
      if (typeof k == "object")
        switch (k.$$typeof) {
          case O:
            return Sn(k.render);
          case F:
            return kn(k.type, le, Ee);
          case H: {
            var Te = k, Nt = Te._payload, zt = Te._init;
            try {
              return kn(zt(Nt), le, Ee);
            } catch {
            }
          }
        }
      return "";
    }
    var wn = Object.prototype.hasOwnProperty, Ln = {}, Sr = ze.ReactDebugCurrentFrame;
    function Cn(k) {
      if (k) {
        var le = k._owner, Ee = kn(k.type, k._source, le ? le.type : null);
        Sr.setExtraStackFrame(Ee);
      } else
        Sr.setExtraStackFrame(null);
    }
    function bn(k, le, Ee, Te, Nt) {
      {
        var zt = Function.call.bind(wn);
        for (var Rt in k)
          if (zt(k, Rt)) {
            var et = void 0;
            try {
              if (typeof k[Rt] != "function") {
                var Jn = Error((Te || "React class") + ": " + Ee + " type `" + Rt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof k[Rt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Jn.name = "Invariant Violation", Jn;
              }
              et = k[Rt](le, Rt, Te, Ee, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (fn) {
              et = fn;
            }
            et && !(et instanceof Error) && (Cn(Nt), ge("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Te || "React class", Ee, Rt, typeof et), Cn(null)), et instanceof Error && !(et.message in Ln) && (Ln[et.message] = !0, Cn(Nt), ge("Failed %s type: %s", Ee, et.message), Cn(null));
          }
      }
    }
    var zr = Array.isArray;
    function Ur(k) {
      return zr(k);
    }
    function qn(k) {
      {
        var le = typeof Symbol == "function" && Symbol.toStringTag, Ee = le && k[Symbol.toStringTag] || k.constructor.name || "Object";
        return Ee;
      }
    }
    function Pr(k) {
      try {
        return Zn(k), !1;
      } catch {
        return !0;
      }
    }
    function Zn(k) {
      return "" + k;
    }
    function dr(k) {
      if (Pr(k))
        return ge("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qn(k)), Zn(k);
    }
    var ln = ze.ReactCurrentOwner, xi = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Di, Oi, Se;
    Se = {};
    function Qe(k) {
      if (wn.call(k, "ref")) {
        var le = Object.getOwnPropertyDescriptor(k, "ref").get;
        if (le && le.isReactWarning)
          return !1;
      }
      return k.ref !== void 0;
    }
    function xt(k) {
      if (wn.call(k, "key")) {
        var le = Object.getOwnPropertyDescriptor(k, "key").get;
        if (le && le.isReactWarning)
          return !1;
      }
      return k.key !== void 0;
    }
    function Kt(k, le) {
      if (typeof k.ref == "string" && ln.current && le && ln.current.stateNode !== le) {
        var Ee = Pe(ln.current.type);
        Se[Ee] || (ge('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Pe(ln.current.type), k.ref), Se[Ee] = !0);
      }
    }
    function $t(k, le) {
      {
        var Ee = function() {
          Di || (Di = !0, ge("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", le));
        };
        Ee.isReactWarning = !0, Object.defineProperty(k, "key", {
          get: Ee,
          configurable: !0
        });
      }
    }
    function $n(k, le) {
      {
        var Ee = function() {
          Oi || (Oi = !0, ge("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", le));
        };
        Ee.isReactWarning = !0, Object.defineProperty(k, "ref", {
          get: Ee,
          configurable: !0
        });
      }
    }
    var Rn = function(k, le, Ee, Te, Nt, zt, Rt) {
      var et = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: s,
        // Built-in properties that belong on the element
        type: k,
        key: le,
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
    function jr(k, le, Ee, Te, Nt) {
      {
        var zt, Rt = {}, et = null, Jn = null;
        Ee !== void 0 && (dr(Ee), et = "" + Ee), xt(le) && (dr(le.key), et = "" + le.key), Qe(le) && (Jn = le.ref, Kt(le, Nt));
        for (zt in le)
          wn.call(le, zt) && !xi.hasOwnProperty(zt) && (Rt[zt] = le[zt]);
        if (k && k.defaultProps) {
          var fn = k.defaultProps;
          for (zt in fn)
            Rt[zt] === void 0 && (Rt[zt] = fn[zt]);
        }
        if (et || Jn) {
          var dn = typeof k == "function" ? k.displayName || k.name || "Unknown" : k;
          et && $t(Rt, dn), Jn && $n(Rt, dn);
        }
        return Rn(k, et, Jn, Nt, Te, ln.current, Rt);
      }
    }
    var Jt = ze.ReactCurrentOwner, pr = ze.ReactDebugCurrentFrame;
    function Qt(k) {
      if (k) {
        var le = k._owner, Ee = kn(k.type, k._source, le ? le.type : null);
        pr.setExtraStackFrame(Ee);
      } else
        pr.setExtraStackFrame(null);
    }
    var cn;
    cn = !1;
    function ya(k) {
      return typeof k == "object" && k !== null && k.$$typeof === s;
    }
    function Wi() {
      {
        if (Jt.current) {
          var k = Pe(Jt.current.type);
          if (k)
            return `

Check the render method of \`` + k + "`.";
        }
        return "";
      }
    }
    function Ko(k) {
      {
        if (k !== void 0) {
          var le = k.fileName.replace(/^.*[\\\/]/, ""), Ee = k.lineNumber;
          return `

Check your code at ` + le + ":" + Ee + ".";
        }
        return "";
      }
    }
    var jl = {};
    function Fl(k) {
      {
        var le = Wi();
        if (!le) {
          var Ee = typeof k == "string" ? k : k.displayName || k.name;
          Ee && (le = `

Check the top-level render call using <` + Ee + ">.");
        }
        return le;
      }
    }
    function Qo(k, le) {
      {
        if (!k._store || k._store.validated || k.key != null)
          return;
        k._store.validated = !0;
        var Ee = Fl(le);
        if (jl[Ee])
          return;
        jl[Ee] = !0;
        var Te = "";
        k && k._owner && k._owner !== Jt.current && (Te = " It was passed a child from " + Pe(k._owner.type) + "."), Qt(k), ge('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Ee, Te), Qt(null);
      }
    }
    function Ea(k, le) {
      {
        if (typeof k != "object")
          return;
        if (Ur(k))
          for (var Ee = 0; Ee < k.length; Ee++) {
            var Te = k[Ee];
            ya(Te) && Qo(Te, le);
          }
        else if (ya(k))
          k._store && (k._store.validated = !0);
        else if (k) {
          var Nt = xe(k);
          if (typeof Nt == "function" && Nt !== k.entries)
            for (var zt = Nt.call(k), Rt; !(Rt = zt.next()).done; )
              ya(Rt.value) && Qo(Rt.value, le);
        }
      }
    }
    function _a(k) {
      {
        var le = k.type;
        if (le == null || typeof le == "string")
          return;
        var Ee;
        if (typeof le == "function")
          Ee = le.propTypes;
        else if (typeof le == "object" && (le.$$typeof === O || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        le.$$typeof === F))
          Ee = le.propTypes;
        else
          return;
        if (Ee) {
          var Te = Pe(le);
          bn(Ee, k.props, "prop", Te, k);
        } else if (le.PropTypes !== void 0 && !cn) {
          cn = !0;
          var Nt = Pe(le);
          ge("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Nt || "Unknown");
        }
        typeof le.getDefaultProps == "function" && !le.getDefaultProps.isReactClassApproved && ge("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Gi(k) {
      {
        for (var le = Object.keys(k.props), Ee = 0; Ee < le.length; Ee++) {
          var Te = le[Ee];
          if (Te !== "children" && Te !== "key") {
            Qt(k), ge("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Te), Qt(null);
            break;
          }
        }
        k.ref !== null && (Qt(k), ge("Invalid attribute `ref` supplied to `React.Fragment`."), Qt(null));
      }
    }
    function fo(k, le, Ee, Te, Nt, zt) {
      {
        var Rt = ot(k);
        if (!Rt) {
          var et = "";
          (k === void 0 || typeof k == "object" && k !== null && Object.keys(k).length === 0) && (et += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Jn = Ko(Nt);
          Jn ? et += Jn : et += Wi();
          var fn;
          k === null ? fn = "null" : Ur(k) ? fn = "array" : k !== void 0 && k.$$typeof === s ? (fn = "<" + (Pe(k.type) || "Unknown") + " />", et = " Did you accidentally export a JSX literal instead of a component?") : fn = typeof k, ge("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", fn, et);
        }
        var dn = jr(k, le, Ee, Nt, zt);
        if (dn == null)
          return dn;
        if (Rt) {
          var Fr = le.children;
          if (Fr !== void 0)
            if (Te)
              if (Ur(Fr)) {
                for (var Pa = 0; Pa < Fr.length; Pa++)
                  Ea(Fr[Pa], k);
                Object.freeze && Object.freeze(Fr);
              } else
                ge("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ea(Fr, k);
        }
        return k === y ? Gi(dn) : _a(dn), dn;
      }
    }
    function ii(k, le, Ee) {
      return fo(k, le, Ee, !0);
    }
    function ai(k, le, Ee) {
      return fo(k, le, Ee, !1);
    }
    var Ai = ai, po = ii;
    xv.Fragment = y, xv.jsx = Ai, xv.jsxs = po;
  }(), xv;
}
var Dv = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var WR;
function uM() {
  if (WR)
    return Dv;
  WR = 1;
  var f = Xe, a = Symbol.for("react.element"), s = Symbol.for("react.fragment"), p = Object.prototype.hasOwnProperty, y = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, b = { key: !0, ref: !0, __self: !0, __source: !0 };
  function T(E, x, O) {
    var A, z = {}, F = null, H = null;
    O !== void 0 && (F = "" + O), x.key !== void 0 && (F = "" + x.key), x.ref !== void 0 && (H = x.ref);
    for (A in x)
      p.call(x, A) && !b.hasOwnProperty(A) && (z[A] = x[A]);
    if (E && E.defaultProps)
      for (A in x = E.defaultProps, x)
        z[A] === void 0 && (z[A] = x[A]);
    return { $$typeof: a, type: E, key: F, ref: H, props: z, _owner: y.current };
  }
  return Dv.Fragment = s, Dv.jsx = T, Dv.jsxs = T, Dv;
}
var sM = {};
sM.NODE_ENV === "production" ? wC.exports = uM() : wC.exports = lM();
var ue = wC.exports, Lv = {}, xC = { exports: {} }, ha = {}, $y = { exports: {} }, J0 = {}, GR;
function cM() {
  return GR || (GR = 1, function(f) {
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
      function b(Se, Qe) {
        var xt = Se.length;
        Se.push(Qe), x(Se, Qe, xt);
      }
      function T(Se) {
        return Se.length === 0 ? null : Se[0];
      }
      function E(Se) {
        if (Se.length === 0)
          return null;
        var Qe = Se[0], xt = Se.pop();
        return xt !== Qe && (Se[0] = xt, O(Se, xt, 0)), Qe;
      }
      function x(Se, Qe, xt) {
        for (var Kt = xt; Kt > 0; ) {
          var $t = Kt - 1 >>> 1, $n = Se[$t];
          if (A($n, Qe) > 0)
            Se[$t] = Qe, Se[Kt] = $n, Kt = $t;
          else
            return;
        }
      }
      function O(Se, Qe, xt) {
        for (var Kt = xt, $t = Se.length, $n = $t >>> 1; Kt < $n; ) {
          var Rn = (Kt + 1) * 2 - 1, jr = Se[Rn], Jt = Rn + 1, pr = Se[Jt];
          if (A(jr, Qe) < 0)
            Jt < $t && A(pr, jr) < 0 ? (Se[Kt] = pr, Se[Jt] = Qe, Kt = Jt) : (Se[Kt] = jr, Se[Rn] = Qe, Kt = Rn);
          else if (Jt < $t && A(pr, Qe) < 0)
            Se[Kt] = pr, Se[Jt] = Qe, Kt = Jt;
          else
            return;
        }
      }
      function A(Se, Qe) {
        var xt = Se.sortIndex - Qe.sortIndex;
        return xt !== 0 ? xt : Se.id - Qe.id;
      }
      var z = 1, F = 2, H = 3, Y = 4, X = 5;
      function fe(Se, Qe) {
      }
      var xe = typeof performance == "object" && typeof performance.now == "function";
      if (xe) {
        var ze = performance;
        f.unstable_now = function() {
          return ze.now();
        };
      } else {
        var ge = Date, ie = ge.now();
        f.unstable_now = function() {
          return ge.now() - ie;
        };
      }
      var Ce = 1073741823, ae = -1, Ne = 250, De = 5e3, tt = 1e4, vt = Ce, ot = [], at = [], ct = 1, Pe = null, Ze = H, qe = !1, Ye = !1, ee = !1, be = typeof setTimeout == "function" ? setTimeout : null, L = typeof clearTimeout == "function" ? clearTimeout : null, ne = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function we(Se) {
        for (var Qe = T(at); Qe !== null; ) {
          if (Qe.callback === null)
            E(at);
          else if (Qe.startTime <= Se)
            E(at), Qe.sortIndex = Qe.expirationTime, b(ot, Qe);
          else
            return;
          Qe = T(at);
        }
      }
      function Je(Se) {
        if (ee = !1, we(Se), !Ye)
          if (T(ot) !== null)
            Ye = !0, dr(Ke);
          else {
            var Qe = T(at);
            Qe !== null && ln(Je, Qe.startTime - Se);
          }
      }
      function Ke(Se, Qe) {
        Ye = !1, ee && (ee = !1, xi()), qe = !0;
        var xt = Ze;
        try {
          var Kt;
          if (!p)
            return gt(Se, Qe);
        } finally {
          Pe = null, Ze = xt, qe = !1;
        }
      }
      function gt(Se, Qe) {
        var xt = Qe;
        for (we(xt), Pe = T(ot); Pe !== null && !s && !(Pe.expirationTime > xt && (!Se || Cn())); ) {
          var Kt = Pe.callback;
          if (typeof Kt == "function") {
            Pe.callback = null, Ze = Pe.priorityLevel;
            var $t = Pe.expirationTime <= xt, $n = Kt($t);
            xt = f.unstable_now(), typeof $n == "function" ? Pe.callback = $n : Pe === T(ot) && E(ot), we(xt);
          } else
            E(ot);
          Pe = T(ot);
        }
        if (Pe !== null)
          return !0;
        var Rn = T(at);
        return Rn !== null && ln(Je, Rn.startTime - xt), !1;
      }
      function Et(Se, Qe) {
        switch (Se) {
          case z:
          case F:
          case H:
          case Y:
          case X:
            break;
          default:
            Se = H;
        }
        var xt = Ze;
        Ze = Se;
        try {
          return Qe();
        } finally {
          Ze = xt;
        }
      }
      function wt(Se) {
        var Qe;
        switch (Ze) {
          case z:
          case F:
          case H:
            Qe = H;
            break;
          default:
            Qe = Ze;
            break;
        }
        var xt = Ze;
        Ze = Qe;
        try {
          return Se();
        } finally {
          Ze = xt;
        }
      }
      function mt(Se) {
        var Qe = Ze;
        return function() {
          var xt = Ze;
          Ze = Qe;
          try {
            return Se.apply(this, arguments);
          } finally {
            Ze = xt;
          }
        };
      }
      function Zt(Se, Qe, xt) {
        var Kt = f.unstable_now(), $t;
        if (typeof xt == "object" && xt !== null) {
          var $n = xt.delay;
          typeof $n == "number" && $n > 0 ? $t = Kt + $n : $t = Kt;
        } else
          $t = Kt;
        var Rn;
        switch (Se) {
          case z:
            Rn = ae;
            break;
          case F:
            Rn = Ne;
            break;
          case X:
            Rn = vt;
            break;
          case Y:
            Rn = tt;
            break;
          case H:
          default:
            Rn = De;
            break;
        }
        var jr = $t + Rn, Jt = {
          id: ct++,
          callback: Qe,
          priorityLevel: Se,
          startTime: $t,
          expirationTime: jr,
          sortIndex: -1
        };
        return $t > Kt ? (Jt.sortIndex = $t, b(at, Jt), T(ot) === null && Jt === T(at) && (ee ? xi() : ee = !0, ln(Je, $t - Kt))) : (Jt.sortIndex = jr, b(ot, Jt), !Ye && !qe && (Ye = !0, dr(Ke))), Jt;
      }
      function ir() {
      }
      function Hn() {
        !Ye && !qe && (Ye = !0, dr(Ke));
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
        var Se = f.unstable_now() - Sr;
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
          var Se = f.unstable_now();
          Sr = Se;
          var Qe = !0, xt = !0;
          try {
            xt = kn(Qe, Se);
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
      function ln(Se, Qe) {
        wn = be(function() {
          Se(f.unstable_now());
        }, Qe);
      }
      function xi() {
        L(wn), wn = -1;
      }
      var Di = bn, Oi = null;
      f.unstable_IdlePriority = X, f.unstable_ImmediatePriority = z, f.unstable_LowPriority = Y, f.unstable_NormalPriority = H, f.unstable_Profiling = Oi, f.unstable_UserBlockingPriority = F, f.unstable_cancelCallback = ar, f.unstable_continueExecution = Hn, f.unstable_forceFrameRate = zr, f.unstable_getCurrentPriorityLevel = Sn, f.unstable_getFirstCallbackNode = Mr, f.unstable_next = wt, f.unstable_pauseExecution = ir, f.unstable_requestPaint = Di, f.unstable_runWithPriority = Et, f.unstable_scheduleCallback = Zt, f.unstable_shouldYield = Cn, f.unstable_wrapCallback = mt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
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
var KR;
function fM() {
  return KR || (KR = 1, function(f) {
    function a(ee, be) {
      var L = ee.length;
      ee.push(be);
      e:
        for (; 0 < L; ) {
          var ne = L - 1 >>> 1, we = ee[ne];
          if (0 < y(we, be))
            ee[ne] = be, ee[L] = we, L = ne;
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
          for (var ne = 0, we = ee.length, Je = we >>> 1; ne < Je; ) {
            var Ke = 2 * (ne + 1) - 1, gt = ee[Ke], Et = Ke + 1, wt = ee[Et];
            if (0 > y(gt, L))
              Et < we && 0 > y(wt, gt) ? (ee[ne] = wt, ee[Et] = L, ne = Et) : (ee[ne] = gt, ee[Ke] = L, ne = Ke);
            else if (Et < we && 0 > y(wt, L))
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
      var b = performance;
      f.unstable_now = function() {
        return b.now();
      };
    } else {
      var T = Date, E = T.now();
      f.unstable_now = function() {
        return T.now() - E;
      };
    }
    var x = [], O = [], A = 1, z = null, F = 3, H = !1, Y = !1, X = !1, fe = typeof setTimeout == "function" ? setTimeout : null, xe = typeof clearTimeout == "function" ? clearTimeout : null, ze = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function ge(ee) {
      for (var be = s(O); be !== null; ) {
        if (be.callback === null)
          p(O);
        else if (be.startTime <= ee)
          p(O), be.sortIndex = be.expirationTime, a(x, be);
        else
          break;
        be = s(O);
      }
    }
    function ie(ee) {
      if (X = !1, ge(ee), !Y)
        if (s(x) !== null)
          Y = !0, qe(Ce);
        else {
          var be = s(O);
          be !== null && Ye(ie, be.startTime - ee);
        }
    }
    function Ce(ee, be) {
      Y = !1, X && (X = !1, xe(De), De = -1), H = !0;
      var L = F;
      try {
        for (ge(be), z = s(x); z !== null && (!(z.expirationTime > be) || ee && !ot()); ) {
          var ne = z.callback;
          if (typeof ne == "function") {
            z.callback = null, F = z.priorityLevel;
            var we = ne(z.expirationTime <= be);
            be = f.unstable_now(), typeof we == "function" ? z.callback = we : z === s(x) && p(x), ge(be);
          } else
            p(x);
          z = s(x);
        }
        if (z !== null)
          var Je = !0;
        else {
          var Ke = s(O);
          Ke !== null && Ye(ie, Ke.startTime - be), Je = !1;
        }
        return Je;
      } finally {
        z = null, F = L, H = !1;
      }
    }
    var ae = !1, Ne = null, De = -1, tt = 5, vt = -1;
    function ot() {
      return !(f.unstable_now() - vt < tt);
    }
    function at() {
      if (Ne !== null) {
        var ee = f.unstable_now();
        vt = ee;
        var be = !0;
        try {
          be = Ne(!0, ee);
        } finally {
          be ? ct() : (ae = !1, Ne = null);
        }
      } else
        ae = !1;
    }
    var ct;
    if (typeof ze == "function")
      ct = function() {
        ze(at);
      };
    else if (typeof MessageChannel < "u") {
      var Pe = new MessageChannel(), Ze = Pe.port2;
      Pe.port1.onmessage = at, ct = function() {
        Ze.postMessage(null);
      };
    } else
      ct = function() {
        fe(at, 0);
      };
    function qe(ee) {
      Ne = ee, ae || (ae = !0, ct());
    }
    function Ye(ee, be) {
      De = fe(function() {
        ee(f.unstable_now());
      }, be);
    }
    f.unstable_IdlePriority = 5, f.unstable_ImmediatePriority = 1, f.unstable_LowPriority = 4, f.unstable_NormalPriority = 3, f.unstable_Profiling = null, f.unstable_UserBlockingPriority = 2, f.unstable_cancelCallback = function(ee) {
      ee.callback = null;
    }, f.unstable_continueExecution = function() {
      Y || H || (Y = !0, qe(Ce));
    }, f.unstable_forceFrameRate = function(ee) {
      0 > ee || 125 < ee ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : tt = 0 < ee ? Math.floor(1e3 / ee) : 5;
    }, f.unstable_getCurrentPriorityLevel = function() {
      return F;
    }, f.unstable_getFirstCallbackNode = function() {
      return s(x);
    }, f.unstable_next = function(ee) {
      switch (F) {
        case 1:
        case 2:
        case 3:
          var be = 3;
          break;
        default:
          be = F;
      }
      var L = F;
      F = be;
      try {
        return ee();
      } finally {
        F = L;
      }
    }, f.unstable_pauseExecution = function() {
    }, f.unstable_requestPaint = function() {
    }, f.unstable_runWithPriority = function(ee, be) {
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
      var L = F;
      F = ee;
      try {
        return be();
      } finally {
        F = L;
      }
    }, f.unstable_scheduleCallback = function(ee, be, L) {
      var ne = f.unstable_now();
      switch (typeof L == "object" && L !== null ? (L = L.delay, L = typeof L == "number" && 0 < L ? ne + L : ne) : L = ne, ee) {
        case 1:
          var we = -1;
          break;
        case 2:
          we = 250;
          break;
        case 5:
          we = 1073741823;
          break;
        case 4:
          we = 1e4;
          break;
        default:
          we = 5e3;
      }
      return we = L + we, ee = { id: A++, callback: be, priorityLevel: ee, startTime: L, expirationTime: we, sortIndex: -1 }, L > ne ? (ee.sortIndex = L, a(O, ee), s(x) === null && ee === s(O) && (X ? (xe(De), De = -1) : X = !0, Ye(ie, L - ne))) : (ee.sortIndex = we, a(x, ee), Y || H || (Y = !0, qe(Ce))), ee;
    }, f.unstable_shouldYield = ot, f.unstable_wrapCallback = function(ee) {
      var be = F;
      return function() {
        var L = F;
        F = be;
        try {
          return ee.apply(this, arguments);
        } finally {
          F = L;
        }
      };
    };
  }(eC)), eC;
}
var QR;
function Y1() {
  if (QR)
    return $y.exports;
  QR = 1;
  var f = {};
  return f.NODE_ENV === "production" ? $y.exports = fM() : $y.exports = cM(), $y.exports;
}
var XR;
function dM() {
  if (XR)
    return ha;
  XR = 1;
  var f = {};
  /**
   * @license React
   * react-dom.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return f.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var a = Xe, s = Y1(), p = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, y = !1;
    function b(e) {
      y = e;
    }
    function T(e) {
      if (!y) {
        for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          i[o - 1] = arguments[o];
        x("warn", e, i);
      }
    }
    function E(e) {
      if (!y) {
        for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          i[o - 1] = arguments[o];
        x("error", e, i);
      }
    }
    function x(e, t, i) {
      {
        var o = p.ReactDebugCurrentFrame, u = o.getStackAddendum();
        u !== "" && (t += "%s", i = i.concat([u]));
        var d = i.map(function(v) {
          return String(v);
        });
        d.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, d);
      }
    }
    var O = 0, A = 1, z = 2, F = 3, H = 4, Y = 5, X = 6, fe = 7, xe = 8, ze = 9, ge = 10, ie = 11, Ce = 12, ae = 13, Ne = 14, De = 15, tt = 16, vt = 17, ot = 18, at = 19, ct = 21, Pe = 22, Ze = 23, qe = 24, Ye = 25, ee = !0, be = !1, L = !1, ne = !1, we = !1, Je = !0, Ke = !1, gt = !1, Et = !0, wt = !0, mt = !0, Zt = /* @__PURE__ */ new Set(), ir = {}, Hn = {};
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
    var Pr = 0, Zn = 1, dr = 2, ln = 3, xi = 4, Di = 5, Oi = 6, Se = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Qe = Se + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", xt = new RegExp("^[" + Se + "][" + Qe + "]*$"), Kt = {}, $t = {};
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
          case xi:
            return t === !1;
          case Di:
            return isNaN(t);
          case Oi:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function pr(e) {
      return cn.hasOwnProperty(e) ? cn[e] : null;
    }
    function Qt(e, t, i, o, u, d, v) {
      this.acceptsBooleans = t === dr || t === ln || t === xi, this.attributeName = o, this.attributeNamespace = u, this.mustUseProperty = i, this.propertyName = e, this.type = t, this.sanitizeURL = d, this.removeEmptyString = v;
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
        xi,
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
        Oi,
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
        Di,
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
    var Fl = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Qo = !1;
    function Ea(e) {
      !Qo && Fl.test(e) && (Qo = !0, E("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function _a(e, t, i, o) {
      if (o.mustUseProperty) {
        var u = o.propertyName;
        return e[u];
      } else {
        Sr(i, t), o.sanitizeURL && Ea("" + i);
        var d = o.attributeName, v = null;
        if (o.type === xi) {
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
          j === ln || j === xi && i === !0 ? U = "" : (Sr(i, w), U = "" + i, u.sanitizeURL && Ea(U.toString())), R ? e.setAttributeNS(R, w, U) : e.setAttribute(w, U);
        }
      }
    }
    var ii = Symbol.for("react.element"), ai = Symbol.for("react.portal"), Ai = Symbol.for("react.fragment"), po = Symbol.for("react.strict_mode"), k = Symbol.for("react.profiler"), le = Symbol.for("react.provider"), Ee = Symbol.for("react.context"), Te = Symbol.for("react.forward_ref"), Nt = Symbol.for("react.suspense"), zt = Symbol.for("react.suspense_list"), Rt = Symbol.for("react.memo"), et = Symbol.for("react.lazy"), Jn = Symbol.for("react.scope"), fn = Symbol.for("react.debug_trace_mode"), dn = Symbol.for("react.offscreen"), Fr = Symbol.for("react.legacy_hidden"), Pa = Symbol.for("react.cache"), pn = Symbol.for("react.tracing_marker"), oi = Symbol.iterator, Xs = "@@iterator";
    function ja(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = oi && e[oi] || e[Xs];
      return typeof t == "function" ? t : null;
    }
    var Dt = Object.assign, Il = 0, ho, Xo, li, qs, Br, Zs, Js;
    function ec() {
    }
    ec.__reactDisabledLog = !0;
    function Hl() {
      {
        if (Il === 0) {
          ho = console.log, Xo = console.info, li = console.warn, qs = console.error, Br = console.group, Zs = console.groupCollapsed, Js = console.groupEnd;
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
        Il++;
      }
    }
    function zu() {
      {
        if (Il--, Il === 0) {
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
              value: li
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
        Il < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var vo = p.ReactCurrentDispatcher, Fa;
    function Ki(e, t, i) {
      {
        if (Fa === void 0)
          try {
            throw Error();
          } catch (u) {
            var o = u.stack.trim().match(/\n( *(at )?)/);
            Fa = o && o[1] || "";
          }
        return `
` + Fa + e;
      }
    }
    var qo = !1, Ia;
    {
      var $l = typeof WeakMap == "function" ? WeakMap : Map;
      Ia = new $l();
    }
    function Vl(e, t) {
      if (!e || qo)
        return "";
      {
        var i = Ia.get(e);
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
                    return e.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", e.displayName)), typeof e == "function" && Ia.set(e, j), j;
                  }
                while (w >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        qo = !1, vo.current = d, zu(), Error.prepareStackTrace = u;
      }
      var U = e ? e.displayName || e.name : "", G = U ? Ki(U) : "";
      return typeof e == "function" && Ia.set(e, G), G;
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
        case Y:
          return Ki(e.type);
        case tt:
          return Ki("Lazy");
        case ae:
          return Ki("Suspense");
        case at:
          return Ki("SuspenseList");
        case O:
        case z:
        case De:
          return tc(e.type);
        case ie:
          return tc(e.type.render);
        case A:
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
    function Ft(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Ai:
          return "Fragment";
        case ai:
          return "Portal";
        case k:
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
          case le:
            var i = e;
            return ic(i._context) + ".Provider";
          case Te:
            return Jo(e, e.render, "ForwardRef");
          case Rt:
            var o = e.displayName || null;
            return o !== null ? o : Ft(e.type) || "Memo";
          case et: {
            var u = e, d = u._payload, v = u._init;
            try {
              return Ft(v(d));
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
        case ie:
          return Pu(i, i.render, "ForwardRef");
        case fe:
          return "Fragment";
        case Y:
          return i;
        case H:
          return "Portal";
        case F:
          return "Root";
        case X:
          return "Text";
        case tt:
          return Ft(i);
        case xe:
          return i === po ? "StrictMode" : "Mode";
        case Pe:
          return "Offscreen";
        case Ce:
          return "Profiler";
        case ct:
          return "Scope";
        case ae:
          return "Suspense";
        case at:
          return "SuspenseList";
        case Ye:
          return "TracingMarker";
        case A:
        case O:
        case vt:
        case z:
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
    var Sa = p.ReactDebugCurrentFrame, xn = null, ui = !1;
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
      Sa.getCurrentStack = null, xn = null, ui = !1;
    }
    function Dn(e) {
      Sa.getCurrentStack = e === null ? null : el, xn = e, ui = !1;
    }
    function ac() {
      return xn;
    }
    function Cr(e) {
      ui = e;
    }
    function si(e) {
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
    function Fu(e) {
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
      tl(e) || (e._valueTracker = Fu(e));
    }
    function Iu(e) {
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
    function N(e, t) {
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
        i.value != u) && (i.value = si(u)) : i.value !== si(u) && (i.value = si(u));
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
        var v = si(o._wrapperState.initialValue);
        i || v !== o.value && (o.value = v), o.defaultValue = v;
      }
      var g = o.name;
      g !== "" && (o.name = ""), o.defaultChecked = !o.defaultChecked, o.defaultChecked = !!o._wrapperState.initialChecked, g !== "" && (o.name = g);
    }
    function He(e, t) {
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
            var g = Dg(v);
            if (!g)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Iu(v), q(v, g);
          }
        }
      }
    }
    function pt(e, t, i) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Ha(e.ownerDocument) !== e) && (i == null ? e.defaultValue = si(e._wrapperState.initialValue) : e.defaultValue !== si(i) && (e.defaultValue = si(i)));
    }
    var Ot = !1, Xt = !1, en = !1;
    function tn(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? a.Children.forEach(t.children, function(i) {
        i != null && (typeof i == "string" || typeof i == "number" || Xt || (Xt = !0, E("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (en || (en = !0, E("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Ot && (E("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Ot = !0);
    }
    function nn(e, t) {
      t.value != null && e.setAttribute("value", si(Ca(t.value)));
    }
    var gn = Array.isArray;
    function It(e) {
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
            var o = It(e[i]);
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
        for (var R = si(Ca(i)), j = null, U = 0; U < u.length; U++) {
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
    function Ap(e, t) {
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
    function Jv(e, t) {
      var i = e, o = t.value;
      o != null && Eo(i, !!t.multiple, o, !1);
    }
    var em = !1;
    function Np(e, t) {
      var i = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var o = Dt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: si(i._wrapperState.initialValue)
      });
      return o;
    }
    function tm(e, t) {
      var i = e;
      Yl("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !em && (E("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Qi() || "A component"), em = !0);
      var o = t.value;
      if (o == null) {
        var u = t.children, d = t.defaultValue;
        if (u != null) {
          E("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (d != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (It(u)) {
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
    function nm(e, t) {
      var i = e, o = Ca(t.value), u = Ca(t.defaultValue);
      if (o != null) {
        var d = si(o);
        d !== i.value && (i.value = d), t.defaultValue == null && i.defaultValue !== d && (i.defaultValue = d);
      }
      u != null && (i.defaultValue = si(u));
    }
    function xf(e, t) {
      var i = e, o = i.textContent;
      o === i._wrapperState.initialValue && o !== "" && o !== null && (i.value = o);
    }
    function OE(e, t) {
      nm(e, t);
    }
    var _o = "http://www.w3.org/1999/xhtml", AE = "http://www.w3.org/1998/Math/MathML", Df = "http://www.w3.org/2000/svg";
    function kp(e) {
      switch (e) {
        case "svg":
          return Df;
        case "math":
          return AE;
        default:
          return _o;
      }
    }
    function Lp(e, t) {
      return e == null || e === _o ? kp(t) : e === Df && t === "foreignObject" ? _o : e;
    }
    var NE = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, i, o, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, i, o, u);
        });
      } : e;
    }, Of, rm = NE(function(e, t) {
      if (e.namespaceURI === Df && !("innerHTML" in e)) {
        Of = Of || document.createElement("div"), Of.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var i = Of.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; i.firstChild; )
          e.appendChild(i.firstChild);
        return;
      }
      e.innerHTML = t;
    }), ci = 1, So = 3, Mn = 8, Ni = 9, Mp = 11, fc = function(e, t) {
      if (t) {
        var i = e.firstChild;
        if (i && i === e.lastChild && i.nodeType === So) {
          i.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, im = {
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
    function am(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var om = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Bu).forEach(function(e) {
      om.forEach(function(t) {
        Bu[am(t, e)] = Bu[e];
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
    var zp = function() {
    };
    {
      var lm = /^(?:webkit|moz|o)[A-Z]/, dc = /^-ms-/, pc = /-(.)/g, um = /;\s*$/, Co = {}, Up = {}, Pp = !1, Af = !1, jp = function(e) {
        return e.replace(pc, function(t, i) {
          return i.toUpperCase();
        });
      }, sm = function(e) {
        Co.hasOwnProperty(e) && Co[e] || (Co[e] = !0, E(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          jp(e.replace(dc, "ms-"))
        ));
      }, cm = function(e) {
        Co.hasOwnProperty(e) && Co[e] || (Co[e] = !0, E("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, fm = function(e, t) {
        Up.hasOwnProperty(t) && Up[t] || (Up[t] = !0, E(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(um, "")));
      }, zE = function(e, t) {
        Pp || (Pp = !0, E("`NaN` is an invalid value for the `%s` css style property.", e));
      }, UE = function(e, t) {
        Af || (Af = !0, E("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      zp = function(e, t) {
        e.indexOf("-") > -1 ? sm(e) : lm.test(e) ? cm(e) : um.test(t) && fm(e, t), typeof t == "number" && (isNaN(t) ? zE(e, t) : isFinite(t) || UE(e, t));
      };
    }
    var PE = zp;
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
    function dm(e, t) {
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
        for (var o = im[i] || [i], u = 0; u < o.length; u++)
          t[o[u]] = i;
      return t;
    }
    function pm(e, t) {
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
    var hm = {
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
    }, vm = Dt({
      menuitem: !0
    }, hm), mm = "__html";
    function hc(e, t) {
      if (t) {
        if (vm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(mm in t.dangerouslySetInnerHTML))
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
    var Nf = {
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
    }, il = {}, vc = new RegExp("^(aria)-[" + Qe + "]*$"), Fp = new RegExp("^(aria)[A-Z][" + Qe + "]*$");
    function gm(e, t) {
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
    function kf(e, t) {
      {
        var i = [];
        for (var o in t) {
          var u = gm(e, o);
          u || i.push(o);
        }
        var d = i.map(function(v) {
          return "`" + v + "`";
        }).join(", ");
        i.length === 1 ? E("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", d, e) : i.length > 1 && E("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", d, e);
      }
    }
    function Wu(e, t) {
      Gl(e, t) || kf(e, t);
    }
    var Lf = !1;
    function ym(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Lf && (Lf = !0, e === "select" && t.multiple ? E("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : E("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var mc = function() {
    };
    {
      var Ir = {}, Ip = /^on./, Em = /^on[^A-Z]/, _m = new RegExp("^(aria)-[" + Qe + "]*$"), Sm = new RegExp("^(aria)[A-Z][" + Qe + "]*$");
      mc = function(e, t, i, o) {
        if (or.call(Ir, t) && Ir[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return E("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Ir[t] = !0, !0;
        if (o != null) {
          var d = o.registrationNameDependencies, v = o.possibleRegistrationNames;
          if (d.hasOwnProperty(t))
            return !0;
          var g = v.hasOwnProperty(u) ? v[u] : null;
          if (g != null)
            return E("Invalid event handler property `%s`. Did you mean `%s`?", t, g), Ir[t] = !0, !0;
          if (Ip.test(t))
            return E("Unknown event handler property `%s`. It will be ignored.", t), Ir[t] = !0, !0;
        } else if (Ip.test(t))
          return Em.test(t) && E("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Ir[t] = !0, !0;
        if (_m.test(t) || Sm.test(t))
          return !0;
        if (u === "innerhtml")
          return E("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Ir[t] = !0, !0;
        if (u === "aria")
          return E("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Ir[t] = !0, !0;
        if (u === "is" && i !== null && i !== void 0 && typeof i != "string")
          return E("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof i), Ir[t] = !0, !0;
        if (typeof i == "number" && isNaN(i))
          return E("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Ir[t] = !0, !0;
        var _ = pr(t), w = _ !== null && _.type === Pr;
        if (Nf.hasOwnProperty(u)) {
          var R = Nf[u];
          if (R !== t)
            return E("Invalid DOM property `%s`. Did you mean `%s`?", t, R), Ir[t] = !0, !0;
        } else if (!w && t !== u)
          return E("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), Ir[t] = !0, !0;
        return typeof i == "boolean" && jr(t, i, _, !1) ? (i ? E('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', i, t, t, i, t) : E('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', i, t, t, i, t, t, t), Ir[t] = !0, !0) : w ? !0 : jr(t, i, _, !1) ? (Ir[t] = !0, !1) : ((i === "false" || i === "true") && _ !== null && _.type === ln && (E("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", i, t, i === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, i), Ir[t] = !0), !0);
      };
    }
    var Cm = function(e, t, i) {
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
      Gl(e, t) || Cm(e, t, i);
    }
    var Mf = 1, gc = 2, yc = 4, FE = Mf | gc | yc, bo = null;
    function IE(e) {
      bo !== null && E("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), bo = e;
    }
    function bm() {
      bo === null && E("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), bo = null;
    }
    function Tm(e) {
      return e === bo;
    }
    function un(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === So ? t.parentNode : t;
    }
    var Ec = null, To = null, $a = null;
    function Hp(e) {
      var t = Ts(e);
      if (t) {
        if (typeof Ec != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var i = t.stateNode;
        if (i) {
          var o = Dg(i);
          Ec(t.stateNode, t.type, o);
        }
      }
    }
    function $p(e) {
      Ec = e;
    }
    function Gu(e) {
      To ? $a ? $a.push(e) : $a = [e] : To = e;
    }
    function zf() {
      return To !== null || $a !== null;
    }
    function Ql() {
      if (To) {
        var e = To, t = $a;
        if (To = null, $a = null, Hp(e), t)
          for (var i = 0; i < t.length; i++)
            Hp(t[i]);
      }
    }
    var Vp = function(e, t) {
      return e(t);
    }, wm = function() {
    }, Bp = !1;
    function Rm() {
      var e = zf();
      e && (wm(), Ql());
    }
    function _c(e, t, i) {
      if (Bp)
        return e(t, i);
      Bp = !0;
      try {
        return Vp(e, t, i);
      } finally {
        Bp = !1, Rm();
      }
    }
    function Uf(e, t, i) {
      Vp = e, wm = i;
    }
    function Yp(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Wp(e, t, i) {
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
          return !!(i.disabled && Yp(t));
        default:
          return !1;
      }
    }
    function Xl(e, t) {
      var i = e.stateNode;
      if (i === null)
        return null;
      var o = Dg(i);
      if (o === null)
        return null;
      var u = o[t];
      if (Wp(t, e.type, o))
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
    function Gp(e, t, i, o, u, d, v, g, _) {
      var w = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(i, w);
      } catch (R) {
        this.onError(R);
      }
    }
    var xm = Gp;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Kp = document.createElement("react");
      xm = function(t, i, o, u, d, v, g, _, w) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var R = document.createEvent("Event"), j = !1, U = !0, G = window.event, K = Object.getOwnPropertyDescriptor(window, "event");
        function Z() {
          Kp.removeEventListener(J, it, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = G);
        }
        var Le = Array.prototype.slice.call(arguments, 3);
        function it() {
          j = !0, Z(), i.apply(o, Le), U = !1;
        }
        var Ge, Pt = !1, Lt = !1;
        function $(V) {
          if (Ge = V.error, Pt = !0, Ge === null && V.colno === 0 && V.lineno === 0 && (Lt = !0), V.defaultPrevented && Ge != null && typeof Ge == "object")
            try {
              Ge._suppressLogging = !0;
            } catch {
            }
        }
        var J = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", $), Kp.addEventListener(J, it, !1), R.initEvent(J, !1, !1), Kp.dispatchEvent(R), K && Object.defineProperty(window, "event", K), j && U && (Pt ? Lt && (Ge = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Ge = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Ge)), window.removeEventListener("error", $), !j)
          return Z(), Gp.apply(this, arguments);
      };
    }
    var Qp = xm, ki = !1, bc = null, wo = !1, qi = null, Tc = {
      onError: function(e) {
        ki = !0, bc = e;
      }
    };
    function wa(e, t, i, o, u, d, v, g, _) {
      ki = !1, bc = null, Qp.apply(Tc, arguments);
    }
    function Xp(e, t, i, o, u, d, v, g, _) {
      if (wa.apply(this, arguments), ki) {
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
      return ki;
    }
    function Ro() {
      if (ki) {
        var e = bc;
        return ki = !1, bc = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Va(e) {
      return e._reactInternals;
    }
    function Ku(e) {
      return e._reactInternals !== void 0;
    }
    function Pf(e, t) {
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
    ), Ve = (
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
    ), Li = (
      /*                          */
      512
    ), er = (
      /*                     */
      1024
    ), fi = (
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
    ), Dm = fi | Ve | hr | Li | er | ql, xo = (
      /*               */
      32767
    ), ll = (
      /*                   */
      32768
    ), br = (
      /*                */
      65536
    ), jf = (
      /* */
      131072
    ), Om = (
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
    ), di = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Ve | er | 0
    ), pi = sn | Ve | Vt | Zi | Li | Ba | ol, xa = Ve | hr | Li | ol, hi = fi | Vt, Tr = Ji | ul | Ya, Jl = p.ReactCurrentOwner;
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
      return t.tag === F ? i : null;
    }
    function Ff(e) {
      if (e.tag === ae) {
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
    function If(e) {
      return e.tag === F ? e.stateNode.containerInfo : null;
    }
    function Mi(e) {
      return sl(e) === e;
    }
    function zi(e) {
      {
        var t = Jl.current;
        if (t !== null && t.tag === A) {
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
      if (o.tag !== F)
        throw new Error("Unable to find node on an unmounted component.");
      return o.stateNode.current === o ? e : t;
    }
    function qp(e) {
      var t = ta(e);
      return t !== null ? Zp(t) : null;
    }
    function Zp(e) {
      if (e.tag === Y || e.tag === X)
        return e;
      for (var t = e.child; t !== null; ) {
        var i = Zp(t);
        if (i !== null)
          return i;
        t = t.sibling;
      }
      return null;
    }
    function Jp(e) {
      var t = ta(e);
      return t !== null ? Hf(t) : null;
    }
    function Hf(e) {
      if (e.tag === Y || e.tag === X)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== H) {
          var i = Hf(t);
          if (i !== null)
            return i;
        }
        t = t.sibling;
      }
      return null;
    }
    var eh = s.unstable_scheduleCallback, $f = s.unstable_cancelCallback, Am = s.unstable_shouldYield, Qu = s.unstable_requestPaint, tr = s.unstable_now, VE = s.unstable_getCurrentPriorityLevel, vi = s.unstable_ImmediatePriority, Xu = s.unstable_UserBlockingPriority, Wa = s.unstable_NormalPriority, qu = s.unstable_LowPriority, wc = s.unstable_IdlePriority, th = s.unstable_yieldValue, nh = s.unstable_setDisableYieldValue, cl = null, Vn = null, me = null, Hr = !1, Ui = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Nm(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return E("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Et && (e = Dt({}, e, {
          getLaneLabelMap: Vf,
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
                o = vi;
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
    function rh(e) {
      if (Vn && typeof Vn.onPostCommitFiberRoot == "function")
        try {
          Vn.onPostCommitFiberRoot(cl, e);
        } catch (t) {
          Hr || (Hr = !0, E("React instrumentation encountered an error: %s", t));
        }
    }
    function km(e) {
      if (Vn && typeof Vn.onCommitFiberUnmount == "function")
        try {
          Vn.onCommitFiberUnmount(cl, e);
        } catch (t) {
          Hr || (Hr = !0, E("React instrumentation encountered an error: %s", t));
        }
    }
    function hn(e) {
      if (typeof th == "function" && (nh(e), b(e)), Vn && typeof Vn.setStrictMode == "function")
        try {
          Vn.setStrictMode(cl, e);
        } catch (t) {
          Hr || (Hr = !0, E("React instrumentation encountered an error: %s", t));
        }
    }
    function dl(e) {
      me = e;
    }
    function Vf() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, i = 0; i < Bn; i++) {
          var o = Im(t);
          e.set(t, o), t *= 2;
        }
        return e;
      }
    }
    function Lm(e) {
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
    function ih(e) {
      me !== null && typeof me.markComponentPassiveEffectMountStarted == "function" && me.markComponentPassiveEffectMountStarted(e);
    }
    function Bf() {
      me !== null && typeof me.markComponentPassiveEffectMountStopped == "function" && me.markComponentPassiveEffectMountStopped();
    }
    function Mm(e) {
      me !== null && typeof me.markComponentPassiveEffectUnmountStarted == "function" && me.markComponentPassiveEffectUnmountStarted(e);
    }
    function zm() {
      me !== null && typeof me.markComponentPassiveEffectUnmountStopped == "function" && me.markComponentPassiveEffectUnmountStopped();
    }
    function Um(e) {
      me !== null && typeof me.markComponentLayoutEffectMountStarted == "function" && me.markComponentLayoutEffectMountStarted(e);
    }
    function ah() {
      me !== null && typeof me.markComponentLayoutEffectMountStopped == "function" && me.markComponentLayoutEffectMountStopped();
    }
    function Ju(e) {
      me !== null && typeof me.markComponentLayoutEffectUnmountStarted == "function" && me.markComponentLayoutEffectUnmountStarted(e);
    }
    function xc() {
      me !== null && typeof me.markComponentLayoutEffectUnmountStopped == "function" && me.markComponentLayoutEffectUnmountStopped();
    }
    function Pm(e, t, i) {
      me !== null && typeof me.markComponentErrored == "function" && me.markComponentErrored(e, t, i);
    }
    function jm(e, t, i) {
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
    function oh(e) {
      me !== null && typeof me.markRenderScheduled == "function" && me.markRenderScheduled(e);
    }
    function ns(e, t) {
      me !== null && typeof me.markForceUpdateScheduled == "function" && me.markForceUpdateScheduled(e, t);
    }
    function Yf(e, t) {
      me !== null && typeof me.markStateUpdateScheduled == "function" && me.markStateUpdateScheduled(e, t);
    }
    var rt = (
      /*                         */
      0
    ), We = (
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
    ), Ac = Math.clz32 ? Math.clz32 : On, lh = Math.log, tu = Math.LN2;
    function On(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (lh(t) / tu | 0) | 0;
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
    ), mi = (
      /*                        */
      64
    ), gi = (
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
    ), Wf = (
      /*                        */
      2048
    ), Gf = (
      /*                        */
      4096
    ), Kf = (
      /*                        */
      8192
    ), Qf = (
      /*                        */
      16384
    ), Xf = (
      /*                       */
      32768
    ), qf = (
      /*                       */
      65536
    ), Zf = (
      /*                       */
      131072
    ), Jf = (
      /*                       */
      262144
    ), iu = (
      /*                       */
      524288
    ), ed = (
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
    ), td = (
      /*                             */
      16777216
    ), nd = (
      /*                             */
      33554432
    ), rd = (
      /*                             */
      67108864
    ), uh = ou, lu = (
      /*          */
      134217728
    ), sh = (
      /*                          */
      268435455
    ), is = (
      /*               */
      268435456
    ), vl = (
      /*                        */
      536870912
    ), Pi = (
      /*                   */
      1073741824
    );
    function Im(e) {
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
        if (e & Pi)
          return "Offscreen";
      }
    }
    var vn = -1, id = mi, Mc = ou;
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
        case mi:
        case gi:
        case ru:
        case Nc:
        case kc:
        case Wf:
        case Gf:
        case Kf:
        case Qf:
        case Xf:
        case qf:
        case Zf:
        case Jf:
        case iu:
        case ed:
        case rs:
          return e & hl;
        case ou:
        case Lc:
        case td:
        case nd:
        case rd:
          return e & au;
        case lu:
          return lu;
        case is:
          return is;
        case vl:
          return vl;
        case Pi:
          return Pi;
        default:
          return E("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function zc(e, t) {
      var i = e.pendingLanes;
      if (i === te)
        return te;
      var o = te, u = e.suspendedLanes, d = e.pingedLanes, v = i & sh;
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
    function ad(e, t) {
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
        case mi:
        case gi:
        case ru:
        case Nc:
        case kc:
        case Wf:
        case Gf:
        case Kf:
        case Qf:
        case Xf:
        case qf:
        case Zf:
        case Jf:
        case iu:
        case ed:
        case rs:
          return t + 5e3;
        case ou:
        case Lc:
        case td:
        case nd:
        case rd:
          return vn;
        case lu:
        case is:
        case vl:
        case Pi:
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
      var t = e.pendingLanes & ~Pi;
      return t !== te ? t : t & Pi ? Pi : te;
    }
    function ch(e) {
      return (e & lt) !== te;
    }
    function Uc(e) {
      return (e & sh) !== te;
    }
    function Hm(e) {
      return (e & au) === e;
    }
    function $m(e) {
      var t = lt | Oo | ra;
      return (e & t) === te;
    }
    function Vm(e) {
      return (e & hl) === e;
    }
    function Pc(e, t) {
      var i = Ka | Oo | Un | ra;
      return (t & i) !== te;
    }
    function Bm(e, t) {
      return (t & e.expiredLanes) !== te;
    }
    function fh(e) {
      return (e & hl) !== te;
    }
    function Ym() {
      var e = id;
      return id <<= 1, (id & hl) === te && (id = mi), e;
    }
    function yi() {
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
    function od(e) {
      return gl(e);
    }
    function Ei(e, t) {
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
    function ld(e, t) {
      return e & t;
    }
    function GE(e) {
      return e;
    }
    function Wm(e, t) {
      return e !== Yn && e < t ? e : t;
    }
    function Fc(e) {
      for (var t = [], i = 0; i < Bn; i++)
        t.push(e);
      return t;
    }
    function su(e, t, i) {
      e.pendingLanes |= t, t !== vl && (e.suspendedLanes = te, e.pingedLanes = te);
      var o = e.eventTimes, u = od(t);
      o[u] = i;
    }
    function Gm(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var i = e.expirationTimes, o = t; o > 0; ) {
        var u = gl(o), d = 1 << u;
        i[u] = vn, o &= ~d;
      }
    }
    function ud(e, t, i) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function sd(e, t) {
      var i = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = te, e.pingedLanes = te, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var o = e.entanglements, u = e.eventTimes, d = e.expirationTimes, v = i; v > 0; ) {
        var g = gl(v), _ = 1 << g;
        o[g] = te, u[g] = vn, d[g] = vn, v &= ~_;
      }
    }
    function dh(e, t) {
      for (var i = e.entangledLanes |= t, o = e.entanglements, u = i; u; ) {
        var d = gl(u), v = 1 << d;
        // Is this one of the newly entangled lanes?
        v & t | // Is this lane transitively entangled with the newly entangled lanes?
        o[d] & t && (o[d] |= t), u &= ~v;
      }
    }
    function Km(e, t) {
      var i = Wn(t), o;
      switch (i) {
        case Oo:
          o = Ka;
          break;
        case ra:
          o = Un;
          break;
        case mi:
        case gi:
        case ru:
        case Nc:
        case kc:
        case Wf:
        case Gf:
        case Kf:
        case Qf:
        case Xf:
        case qf:
        case Zf:
        case Jf:
        case iu:
        case ed:
        case rs:
        case ou:
        case Lc:
        case td:
        case nd:
        case rd:
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
    function cd(e, t, i) {
      if (Ui)
        for (var o = e.pendingUpdatersLaneMap; i > 0; ) {
          var u = od(i), d = 1 << u, v = o[u];
          v.add(t), i &= ~d;
        }
    }
    function ph(e, t) {
      if (Ui)
        for (var i = e.pendingUpdatersLaneMap, o = e.memoizedUpdaters; t > 0; ) {
          var u = od(t), d = 1 << u, v = i[u];
          v.size > 0 && (v.forEach(function(g) {
            var _ = g.alternate;
            (_ === null || !o.has(_)) && o.add(g);
          }), v.clear()), t &= ~d;
        }
    }
    function Ic(e, t) {
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
    function fd(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Ue;
    function cs(e) {
      Ue = e;
    }
    function hh(e) {
      Ue(e);
    }
    var dd;
    function XE(e) {
      dd = e;
    }
    var fs;
    function pd(e) {
      fs = e;
    }
    var hd;
    function Qm(e) {
      hd = e;
    }
    var vh;
    function Xm(e) {
      vh = e;
    }
    var Hc = !1, ds = [], Tn = null, vr = null, Wr = null, ps = /* @__PURE__ */ new Map(), hs = /* @__PURE__ */ new Map(), mr = [], qm = [
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
      return qm.indexOf(e) > -1;
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
    function mh(e, t) {
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
          g !== null && dd(g);
        }
        return v;
      }
      e.eventSystemFlags |= o;
      var _ = e.targetContainers;
      return u !== null && _.indexOf(u) === -1 && _.push(u), e;
    }
    function Zm(e, t, i, o, u) {
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
    function gh(e) {
      var t = Jc(e.target);
      if (t !== null) {
        var i = sl(t);
        if (i !== null) {
          var o = i.tag;
          if (o === ae) {
            var u = Ff(i);
            if (u !== null) {
              e.blockedOn = u, vh(e.priority, function() {
                fs(i);
              });
              return;
            }
          } else if (o === F) {
            var d = i.stateNode;
            if (fd(d)) {
              e.blockedOn = If(i);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function ZE(e) {
      for (var t = hd(), i = {
        blockedOn: null,
        target: e,
        priority: t
      }, o = 0; o < mr.length && ss(t, mr[o].priority); o++)
        ;
      mr.splice(o, 0, i), o === 0 && gh(i);
    }
    function cu(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var i = t[0], o = Vr(e.domEventName, e.eventSystemFlags, i, e.nativeEvent);
        if (o === null) {
          var u = e.nativeEvent, d = new u.constructor(u.type, u);
          IE(d), u.target.dispatchEvent(d), bm();
        } else {
          var v = Ts(o);
          return v !== null && dd(v), e.blockedOn = o, !1;
        }
        t.shift();
      }
      return !0;
    }
    function vd(e, t, i) {
      cu(e) && i.delete(t);
    }
    function aa() {
      Hc = !1, Tn !== null && cu(Tn) && (Tn = null), vr !== null && cu(vr) && (vr = null), Wr !== null && cu(Wr) && (Wr = null), ps.forEach(vd), hs.forEach(vd);
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
        gh(v), v.blockedOn === null && mr.shift();
      }
    }
    var En = p.ReactCurrentBatchConfig, lr = !0;
    function _i(e) {
      lr = !!e;
    }
    function ms() {
      return lr;
    }
    function ur(e, t, i) {
      var o = md(t), u;
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
      lr && yh(e, t, i, o);
    }
    function yh(e, t, i, o) {
      var u = Vr(e, t, i, o);
      if (u === null) {
        v_(e, t, o, yl, i), mh(e, o);
        return;
      }
      if (Zm(u, e, t, i, o)) {
        o.stopPropagation();
        return;
      }
      if (mh(e, o), t & yc && Xa(e)) {
        for (; u !== null; ) {
          var d = Ts(u);
          d !== null && hh(d);
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
          if (g === ae) {
            var _ = Ff(v);
            if (_ !== null)
              return _;
            d = null;
          } else if (g === F) {
            var w = v.stateNode;
            if (fd(w))
              return If(v);
            d = null;
          } else
            v !== d && (d = null);
        }
      }
      return yl = d, null;
    }
    function md(e) {
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
            case vi:
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
    function gd(e, t, i, o) {
      return e.addEventListener(t, i, {
        capture: !0,
        passive: o
      }), i;
    }
    function Eh(e, t, i, o) {
      return e.addEventListener(t, i, {
        passive: o
      }), i;
    }
    var oa = null, Es = null, la = null;
    function yd(e) {
      return oa = e, Es = Bc(), !0;
    }
    function Vc() {
      oa = null, Es = null, la = null;
    }
    function Ed() {
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
    }, _d = An(sr), pu = Dt({}, sr, {
      view: 0,
      detail: 0
    }), _h = An(pu), Sh, qa, _s;
    function Ch(e) {
      e !== _s && (_s && e.type === "mousemove" ? (Sh = e.screenX - _s.screenX, qa = e.screenY - _s.screenY) : (Sh = 0, qa = 0), _s = e);
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
      getModifierState: bh,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Ch(e), Sh);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : qa;
      }
    }), Sd = An(Za), hu = Dt({}, Za, {
      dataTransfer: 0
    }), Jm = An(hu), eg = Dt({}, pu, {
      relatedTarget: 0
    }), Yc = An(eg), Cd = Dt({}, sr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), JE = An(Cd), e_ = Dt({}, sr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), tg = An(e_), ng = Dt({}, sr, {
      data: 0
    }), El = An(ng), t_ = El, Ss = {
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
    }, rg = {
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
    function Fn(e) {
      if (e.key) {
        var t = Ss[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var i = du(e);
        return i === 13 ? "Enter" : String.fromCharCode(i);
      }
      return e.type === "keydown" || e.type === "keyup" ? rg[e.keyCode] || "Unidentified" : "";
    }
    var n_ = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function ig(e) {
      var t = this, i = t.nativeEvent;
      if (i.getModifierState)
        return i.getModifierState(e);
      var o = n_[e];
      return o ? !!i[o] : !1;
    }
    function bh(e) {
      return ig;
    }
    var r_ = Dt({}, pu, {
      key: Fn,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: bh,
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
    }), ag = An(r_), og = Dt({}, Za, {
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
    }), lg = An(og), ua = Dt({}, pu, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: bh
    }), Th = An(ua), i_ = Dt({}, sr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), _l = An(i_), bd = Dt({}, Za, {
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
    }), vu = An(bd), Td = [9, 13, 27, 32], wd = 229, Wc = Sn && "CompositionEvent" in window, Gc = null;
    Sn && "documentMode" in document && (Gc = document.documentMode);
    var wh = Sn && "TextEvent" in window && !Gc, ug = Sn && (!Wc || Gc && Gc > 8 && Gc <= 11), Rh = 32, xh = String.fromCharCode(Rh);
    function Rd() {
      Mr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Mr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Mr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Mr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Kc = !1;
    function sg(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Dh(e) {
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
      return e === "keydown" && t.keyCode === wd;
    }
    function Oh(e, t) {
      switch (e) {
        case "keyup":
          return Td.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== wd;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function xd(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Qc(e) {
      return e.locale === "ko";
    }
    var Sl = !1;
    function Dd(e, t, i, o, u) {
      var d, v;
      if (Wc ? d = Dh(t) : Sl ? Oh(t, o) && (d = "onCompositionEnd") : a_(t, o) && (d = "onCompositionStart"), !d)
        return null;
      ug && !Qc(o) && (!Sl && d === "onCompositionStart" ? Sl = yd(u) : d === "onCompositionEnd" && Sl && (v = Ed()));
      var g = vg(i, d);
      if (g.length > 0) {
        var _ = new El(d, t, null, o, u);
        if (e.push({
          event: _,
          listeners: g
        }), v)
          _.data = v;
        else {
          var w = xd(o);
          w !== null && (_.data = w);
        }
      }
    }
    function cg(e, t) {
      switch (e) {
        case "compositionend":
          return xd(t);
        case "keypress":
          var i = t.which;
          return i !== Rh ? null : (Kc = !0, xh);
        case "textInput":
          var o = t.data;
          return o === xh && Kc ? null : o;
        default:
          return null;
      }
    }
    function o_(e, t) {
      if (Sl) {
        if (e === "compositionend" || !Wc && Oh(e, t)) {
          var i = Ed();
          return Vc(), Sl = !1, i;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!sg(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return ug && !Qc(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Od(e, t, i, o, u) {
      var d;
      if (wh ? d = cg(t, o) : d = o_(t, o), !d)
        return null;
      var v = vg(i, "onBeforeInput");
      if (v.length > 0) {
        var g = new t_("onBeforeInput", "beforeinput", null, o, u);
        e.push({
          event: g,
          listeners: v
        }), g.data = d;
      }
    }
    function l_(e, t, i, o, u, d, v) {
      Dd(e, t, i, o, u), Od(e, t, i, o, u);
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
    function fg(e) {
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
    function Ad(e) {
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
      var u = vg(t, "onChange");
      if (u.length > 0) {
        var d = new _d("onChange", "change", null, i, o);
        e.push({
          event: d,
          listeners: u
        });
      }
    }
    var l = null, c = null;
    function h(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function m(e) {
      var t = [];
      r(t, c, e, un(e)), _c(C, t);
    }
    function C(e) {
      Sb(e, 0);
    }
    function D(e) {
      var t = Ud(e);
      if (Iu(t))
        return e;
    }
    function M(e, t) {
      if (e === "change")
        return t;
    }
    var Q = !1;
    Sn && (Q = Ad("input") && (!document.documentMode || document.documentMode > 9));
    function se(e, t) {
      l = e, c = t, l.attachEvent("onpropertychange", oe);
    }
    function de() {
      l && (l.detachEvent("onpropertychange", oe), l = null, c = null);
    }
    function oe(e) {
      e.propertyName === "value" && D(c) && m(e);
    }
    function Oe(e, t, i) {
      e === "focusin" ? (de(), se(t, i)) : e === "focusout" && de();
    }
    function je(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return D(c);
    }
    function $e(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Kn(e, t) {
      if (e === "click")
        return D(t);
    }
    function I(e, t) {
      if (e === "input" || e === "change")
        return D(t);
    }
    function P(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || pt(e, "number", e.value);
    }
    function B(e, t, i, o, u, d, v) {
      var g = i ? Ud(i) : window, _, w;
      if (h(g) ? _ = M : fg(g) ? Q ? _ = I : (_ = je, w = Oe) : $e(g) && (_ = Kn), _) {
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
    function Be(e, t, i, o, u, d, v) {
      var g = t === "mouseover" || t === "pointerover", _ = t === "mouseout" || t === "pointerout";
      if (g && !Tm(o)) {
        var w = o.relatedTarget || o.fromElement;
        if (w && (Jc(w) || Vh(w)))
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
            (G !== Z || G.tag !== Y && G.tag !== X) && (G = null);
          }
        } else
          U = null, G = i;
        if (U !== G) {
          var Le = Sd, it = "onMouseLeave", Ge = "onMouseEnter", Pt = "mouse";
          (t === "pointerout" || t === "pointerover") && (Le = lg, it = "onPointerLeave", Ge = "onPointerEnter", Pt = "pointer");
          var Lt = U == null ? R : Ud(U), $ = G == null ? R : Ud(G), J = new Le(it, Pt + "leave", U, o, u);
          J.target = Lt, J.relatedTarget = $;
          var V = null, pe = Jc(u);
          if (pe === i) {
            var Me = new Le(Ge, Pt + "enter", G, o, u);
            Me.target = $, Me.relatedTarget = Lt, V = Me;
          }
          MD(e, J, V, U, G);
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
      return hD(e, u, d, v, g);
    }
    function hD(e, t, i, o, u) {
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
    function vD(e, t) {
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
    function sb(e) {
      return e && e.nodeType === So;
    }
    function cb(e, t) {
      return !e || !t ? !1 : e === t ? !0 : sb(e) ? !1 : sb(t) ? cb(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function mD(e) {
      return e && e.ownerDocument && cb(e.ownerDocument.documentElement, e);
    }
    function gD(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function fb() {
      for (var e = window, t = Ha(); t instanceof e.HTMLIFrameElement; ) {
        if (gD(t))
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
    function yD() {
      var e = fb();
      return {
        focusedElem: e,
        selectionRange: s_(e) ? _D(e) : null
      };
    }
    function ED(e) {
      var t = fb(), i = e.focusedElem, o = e.selectionRange;
      if (t !== i && mD(i)) {
        o !== null && s_(i) && SD(i, o);
        for (var u = [], d = i; d = d.parentNode; )
          d.nodeType === ci && u.push({
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
    function _D(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = u_(e), t || {
        start: 0,
        end: 0
      };
    }
    function SD(e, t) {
      var i = t.start, o = t.end;
      o === void 0 && (o = i), "selectionStart" in e ? (e.selectionStart = i, e.selectionEnd = Math.min(o, e.value.length)) : vD(e, t);
    }
    var CD = Sn && "documentMode" in document && document.documentMode <= 11;
    function bD() {
      Mr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Nd = null, c_ = null, Ah = null, f_ = !1;
    function TD(e) {
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
    function wD(e) {
      return e.window === e ? e.document : e.nodeType === Ni ? e : e.ownerDocument;
    }
    function db(e, t, i) {
      var o = wD(i);
      if (!(f_ || Nd == null || Nd !== Ha(o))) {
        var u = TD(Nd);
        if (!Ah || !ft(Ah, u)) {
          Ah = u;
          var d = vg(c_, "onSelect");
          if (d.length > 0) {
            var v = new _d("onSelect", "select", null, t, i);
            e.push({
              event: v,
              listeners: d
            }), v.target = Nd;
          }
        }
      }
    }
    function RD(e, t, i, o, u, d, v) {
      var g = i ? Ud(i) : window;
      switch (t) {
        case "focusin":
          (fg(g) || g.contentEditable === "true") && (Nd = g, c_ = i, Ah = null);
          break;
        case "focusout":
          Nd = null, c_ = null, Ah = null;
          break;
        case "mousedown":
          f_ = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          f_ = !1, db(e, o, u);
          break;
        case "selectionchange":
          if (CD)
            break;
        case "keydown":
        case "keyup":
          db(e, o, u);
      }
    }
    function dg(e, t) {
      var i = {};
      return i[e.toLowerCase()] = t.toLowerCase(), i["Webkit" + e] = "webkit" + t, i["Moz" + e] = "moz" + t, i;
    }
    var kd = {
      animationend: dg("Animation", "AnimationEnd"),
      animationiteration: dg("Animation", "AnimationIteration"),
      animationstart: dg("Animation", "AnimationStart"),
      transitionend: dg("Transition", "TransitionEnd")
    }, d_ = {}, pb = {};
    Sn && (pb = document.createElement("div").style, "AnimationEvent" in window || (delete kd.animationend.animation, delete kd.animationiteration.animation, delete kd.animationstart.animation), "TransitionEvent" in window || delete kd.transitionend.transition);
    function pg(e) {
      if (d_[e])
        return d_[e];
      if (!kd[e])
        return e;
      var t = kd[e];
      for (var i in t)
        if (t.hasOwnProperty(i) && i in pb)
          return d_[e] = t[i];
      return e;
    }
    var hb = pg("animationend"), vb = pg("animationiteration"), mb = pg("animationstart"), gb = pg("transitionend"), yb = /* @__PURE__ */ new Map(), Eb = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Cs(e, t) {
      yb.set(e, t), Mr(t, [e]);
    }
    function xD() {
      for (var e = 0; e < Eb.length; e++) {
        var t = Eb[e], i = t.toLowerCase(), o = t[0].toUpperCase() + t.slice(1);
        Cs(i, "on" + o);
      }
      Cs(hb, "onAnimationEnd"), Cs(vb, "onAnimationIteration"), Cs(mb, "onAnimationStart"), Cs("dblclick", "onDoubleClick"), Cs("focusin", "onFocus"), Cs("focusout", "onBlur"), Cs(gb, "onTransitionEnd");
    }
    function DD(e, t, i, o, u, d, v) {
      var g = yb.get(t);
      if (g !== void 0) {
        var _ = _d, w = t;
        switch (t) {
          case "keypress":
            if (du(o) === 0)
              return;
          case "keydown":
          case "keyup":
            _ = ag;
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
            _ = Sd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            _ = Jm;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            _ = Th;
            break;
          case hb:
          case vb:
          case mb:
            _ = JE;
            break;
          case gb:
            _ = _l;
            break;
          case "scroll":
            _ = _h;
            break;
          case "wheel":
            _ = vu;
            break;
          case "copy":
          case "cut":
          case "paste":
            _ = tg;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            _ = lg;
            break;
        }
        var R = (d & yc) !== 0;
        {
          var j = !R && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", U = kD(i, g, o.type, R, j);
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
    xD(), ve(), n(), bD(), Rd();
    function OD(e, t, i, o, u, d, v) {
      DD(e, t, i, o, u, d);
      var g = (d & FE) === 0;
      g && (Be(e, t, i, o, u), B(e, t, i, o, u), RD(e, t, i, o, u), l_(e, t, i, o, u));
    }
    var Nh = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], p_ = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Nh));
    function _b(e, t, i) {
      var o = e.type || "unknown-event";
      e.currentTarget = i, Xp(o, t, void 0, e), e.currentTarget = null;
    }
    function AD(e, t, i) {
      var o;
      if (i)
        for (var u = t.length - 1; u >= 0; u--) {
          var d = t[u], v = d.instance, g = d.currentTarget, _ = d.listener;
          if (v !== o && e.isPropagationStopped())
            return;
          _b(e, _, g), o = v;
        }
      else
        for (var w = 0; w < t.length; w++) {
          var R = t[w], j = R.instance, U = R.currentTarget, G = R.listener;
          if (j !== o && e.isPropagationStopped())
            return;
          _b(e, G, U), o = j;
        }
    }
    function Sb(e, t) {
      for (var i = (t & yc) !== 0, o = 0; o < e.length; o++) {
        var u = e[o], d = u.event, v = u.listeners;
        AD(d, v, i);
      }
      HE();
    }
    function ND(e, t, i, o, u) {
      var d = un(i), v = [];
      OD(v, e, o, i, d, t), Sb(v, t);
    }
    function Nn(e, t) {
      p_.has(e) || E('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var i = !1, o = lA(t), u = zD(e, i);
      o.has(u) || (Cb(t, e, gc, i), o.add(u));
    }
    function h_(e, t, i) {
      p_.has(e) && !t && E('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var o = 0;
      t && (o |= yc), Cb(i, e, o, t);
    }
    var hg = "_reactListening" + Math.random().toString(36).slice(2);
    function kh(e) {
      if (!e[hg]) {
        e[hg] = !0, Zt.forEach(function(i) {
          i !== "selectionchange" && (p_.has(i) || h_(i, !1, e), h_(i, !0, e));
        });
        var t = e.nodeType === Ni ? e : e.ownerDocument;
        t !== null && (t[hg] || (t[hg] = !0, h_("selectionchange", !1, t)));
      }
    }
    function Cb(e, t, i, o, u) {
      var d = ur(e, t, i), v = void 0;
      Sc && (t === "touchstart" || t === "touchmove" || t === "wheel") && (v = !0), e = e, o ? v !== void 0 ? gd(e, t, d, v) : No(e, t, d) : v !== void 0 ? Eh(e, t, d, v) : ys(e, t, d);
    }
    function bb(e, t) {
      return e === t || e.nodeType === Mn && e.parentNode === t;
    }
    function v_(e, t, i, o, u) {
      var d = o;
      if (!(t & Mf) && !(t & gc)) {
        var v = u;
        if (o !== null) {
          var g = o;
          e:
            for (; ; ) {
              if (g === null)
                return;
              var _ = g.tag;
              if (_ === F || _ === H) {
                var w = g.stateNode.containerInfo;
                if (bb(w, v))
                  break;
                if (_ === H)
                  for (var R = g.return; R !== null; ) {
                    var j = R.tag;
                    if (j === F || j === H) {
                      var U = R.stateNode.containerInfo;
                      if (bb(U, v))
                        return;
                    }
                    R = R.return;
                  }
                for (; w !== null; ) {
                  var G = Jc(w);
                  if (G === null)
                    return;
                  var K = G.tag;
                  if (K === Y || K === X) {
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
        return ND(e, t, i, d);
      });
    }
    function Lh(e, t, i) {
      return {
        instance: e,
        listener: t,
        currentTarget: i
      };
    }
    function kD(e, t, i, o, u, d) {
      for (var v = t !== null ? t + "Capture" : null, g = o ? v : t, _ = [], w = e, R = null; w !== null; ) {
        var j = w, U = j.stateNode, G = j.tag;
        if (G === Y && U !== null && (R = U, g !== null)) {
          var K = Xl(w, g);
          K != null && _.push(Lh(w, K, R));
        }
        if (u)
          break;
        w = w.return;
      }
      return _;
    }
    function vg(e, t) {
      for (var i = t + "Capture", o = [], u = e; u !== null; ) {
        var d = u, v = d.stateNode, g = d.tag;
        if (g === Y && v !== null) {
          var _ = v, w = Xl(u, i);
          w != null && o.unshift(Lh(u, w, _));
          var R = Xl(u, t);
          R != null && o.push(Lh(u, R, _));
        }
        u = u.return;
      }
      return o;
    }
    function Ld(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== Y);
      return e || null;
    }
    function LD(e, t) {
      for (var i = e, o = t, u = 0, d = i; d; d = Ld(d))
        u++;
      for (var v = 0, g = o; g; g = Ld(g))
        v++;
      for (; u - v > 0; )
        i = Ld(i), u--;
      for (; v - u > 0; )
        o = Ld(o), v--;
      for (var _ = u; _--; ) {
        if (i === o || o !== null && i === o.alternate)
          return i;
        i = Ld(i), o = Ld(o);
      }
      return null;
    }
    function Tb(e, t, i, o, u) {
      for (var d = t._reactName, v = [], g = i; g !== null && g !== o; ) {
        var _ = g, w = _.alternate, R = _.stateNode, j = _.tag;
        if (w !== null && w === o)
          break;
        if (j === Y && R !== null) {
          var U = R;
          if (u) {
            var G = Xl(g, d);
            G != null && v.unshift(Lh(g, G, U));
          } else if (!u) {
            var K = Xl(g, d);
            K != null && v.push(Lh(g, K, U));
          }
        }
        g = g.return;
      }
      v.length !== 0 && e.push({
        event: t,
        listeners: v
      });
    }
    function MD(e, t, i, o, u) {
      var d = o && u ? LD(o, u) : null;
      o !== null && Tb(e, t, o, d, !1), u !== null && i !== null && Tb(e, i, u, d, !0);
    }
    function zD(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var sa = !1, Mh = "dangerouslySetInnerHTML", mg = "suppressContentEditableWarning", bs = "suppressHydrationWarning", wb = "autoFocus", qc = "children", Zc = "style", gg = "__html", m_, yg, zh, Rb, Eg, xb, Db;
    m_ = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, yg = function(e, t) {
      Wu(e, t), ym(e, t), al(e, t, {
        registrationNameDependencies: ir,
        possibleRegistrationNames: Hn
      });
    }, xb = Sn && !document.documentMode, zh = function(e, t, i) {
      if (!sa) {
        var o = _g(i), u = _g(t);
        u !== o && (sa = !0, E("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(o)));
      }
    }, Rb = function(e) {
      if (!sa) {
        sa = !0;
        var t = [];
        e.forEach(function(i) {
          t.push(i);
        }), E("Extra attributes from the server: %s", t);
      }
    }, Eg = function(e, t) {
      t === !1 ? E("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : E("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, Db = function(e, t) {
      var i = e.namespaceURI === _o ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return i.innerHTML = t, i.innerHTML;
    };
    var UD = /\r\n?/g, PD = /\u0000|\uFFFD/g;
    function _g(e) {
      Ur(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(UD, `
`).replace(PD, "");
    }
    function Sg(e, t, i, o) {
      var u = _g(t), d = _g(e);
      if (d !== u && (o && (sa || (sa = !0, E('Text content did not match. Server: "%s" Client: "%s"', d, u))), i && ee))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function Ob(e) {
      return e.nodeType === Ni ? e : e.ownerDocument;
    }
    function jD() {
    }
    function Cg(e) {
      e.onclick = jD;
    }
    function FD(e, t, i, o, u) {
      for (var d in o)
        if (o.hasOwnProperty(d)) {
          var v = o[d];
          if (d === Zc)
            v && Object.freeze(v), dm(t, v);
          else if (d === Mh) {
            var g = v ? v[gg] : void 0;
            g != null && rm(t, g);
          } else if (d === qc)
            if (typeof v == "string") {
              var _ = e !== "textarea" || v !== "";
              _ && fc(t, v);
            } else
              typeof v == "number" && fc(t, "" + v);
          else
            d === mg || d === bs || d === wb || (ir.hasOwnProperty(d) ? v != null && (typeof v != "function" && Eg(d, v), d === "onScroll" && Nn("scroll", t)) : v != null && fo(t, d, v, u));
        }
    }
    function ID(e, t, i, o) {
      for (var u = 0; u < t.length; u += 2) {
        var d = t[u], v = t[u + 1];
        d === Zc ? dm(e, v) : d === Mh ? rm(e, v) : d === qc ? fc(e, v) : fo(e, d, v, o);
      }
    }
    function HD(e, t, i, o) {
      var u, d = Ob(i), v, g = o;
      if (g === _o && (g = kp(e)), g === _o) {
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
    function $D(e, t) {
      return Ob(t).createTextNode(e);
    }
    function VD(e, t, i, o) {
      var u = Gl(t, i);
      yg(t, i);
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
          for (var v = 0; v < Nh.length; v++)
            Nn(Nh[v], e);
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
          N(e, i), d = S(e, i), Nn("invalid", e);
          break;
        case "option":
          tn(e, i), d = i;
          break;
        case "select":
          cc(e, i), d = sc(e, i), Nn("invalid", e);
          break;
        case "textarea":
          tm(e, i), d = Np(e, i), Nn("invalid", e);
          break;
        default:
          d = i;
      }
      switch (hc(t, d), FD(t, e, o, d, u), t) {
        case "input":
          go(e), he(e, i, !1);
          break;
        case "textarea":
          go(e), xf(e);
          break;
        case "option":
          nn(e, i);
          break;
        case "select":
          Ap(e, i);
          break;
        default:
          typeof d.onClick == "function" && Cg(e);
          break;
      }
    }
    function BD(e, t, i, o, u) {
      yg(t, o);
      var d = null, v, g;
      switch (t) {
        case "input":
          v = S(e, i), g = S(e, o), d = [];
          break;
        case "select":
          v = sc(e, i), g = sc(e, o), d = [];
          break;
        case "textarea":
          v = Np(e, i), g = Np(e, o), d = [];
          break;
        default:
          v = i, g = o, typeof v.onClick != "function" && typeof g.onClick == "function" && Cg(e);
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
            _ === Mh || _ === qc || _ === mg || _ === bs || _ === wb || (ir.hasOwnProperty(_) ? d || (d = []) : (d = d || []).push(_, null));
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
          else if (_ === Mh) {
            var K = U ? U[gg] : void 0, Z = G ? G[gg] : void 0;
            K != null && Z !== K && (d = d || []).push(_, K);
          } else
            _ === qc ? (typeof U == "string" || typeof U == "number") && (d = d || []).push(_, "" + U) : _ === mg || _ === bs || (ir.hasOwnProperty(_) ? (U != null && (typeof U != "function" && Eg(_, U), _ === "onScroll" && Nn("scroll", e)), !d && G !== U && (d = [])) : (d = d || []).push(_, U));
      }
      return R && (pm(R, g[Zc]), (d = d || []).push(Zc, R)), d;
    }
    function YD(e, t, i, o, u) {
      i === "input" && u.type === "radio" && u.name != null && W(e, u);
      var d = Gl(i, o), v = Gl(i, u);
      switch (ID(e, t, d, v), i) {
        case "input":
          q(e, u);
          break;
        case "textarea":
          nm(e, u);
          break;
        case "select":
          DE(e, u);
          break;
      }
    }
    function WD(e) {
      {
        var t = e.toLowerCase();
        return Nf.hasOwnProperty(t) && Nf[t] || null;
      }
    }
    function GD(e, t, i, o, u, d, v) {
      var g, _;
      switch (g = Gl(t, i), yg(t, i), t) {
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
          for (var w = 0; w < Nh.length; w++)
            Nn(Nh[w], e);
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
          N(e, i), Nn("invalid", e);
          break;
        case "option":
          tn(e, i);
          break;
        case "select":
          cc(e, i), Nn("invalid", e);
          break;
        case "textarea":
          tm(e, i), Nn("invalid", e);
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
            typeof Z == "string" ? e.textContent !== Z && (i[bs] !== !0 && Sg(e.textContent, Z, d, v), G = [qc, Z]) : typeof Z == "number" && e.textContent !== "" + Z && (i[bs] !== !0 && Sg(e.textContent, Z, d, v), G = [qc, "" + Z]);
          else if (ir.hasOwnProperty(K))
            Z != null && (typeof Z != "function" && Eg(K, Z), K === "onScroll" && Nn("scroll", e));
          else if (v && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof g == "boolean") {
            var Le = void 0, it = g && Ke ? null : pr(K);
            if (i[bs] !== !0) {
              if (!(K === mg || K === bs || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              K === "value" || K === "checked" || K === "selected")) {
                if (K === Mh) {
                  var Ge = e.innerHTML, Pt = Z ? Z[gg] : void 0;
                  if (Pt != null) {
                    var Lt = Db(e, Pt);
                    Lt !== Ge && zh(K, Ge, Lt);
                  }
                } else if (K === Zc) {
                  if (_.delete(K), xb) {
                    var $ = jE(Z);
                    Le = e.getAttribute("style"), $ !== Le && zh(K, Le, $);
                  }
                } else if (g && !Ke)
                  _.delete(K.toLowerCase()), Le = Gi(e, K, Z), Z !== Le && zh(K, Le, Z);
                else if (!Rn(K, it, g) && !Jt(K, Z, it, g)) {
                  var J = !1;
                  if (it !== null)
                    _.delete(it.attributeName), Le = _a(e, K, Z, it);
                  else {
                    var V = o;
                    if (V === _o && (V = kp(t)), V === _o)
                      _.delete(K.toLowerCase());
                    else {
                      var pe = WD(K);
                      pe !== null && pe !== K && (J = !0, _.delete(pe)), _.delete(K);
                    }
                    Le = Gi(e, K, Z);
                  }
                  var Me = Ke;
                  !Me && Z !== Le && !J && zh(K, Le, Z);
                }
              }
            }
          }
        }
      switch (v && // $FlowFixMe - Should be inferred as not undefined.
      _.size > 0 && i[bs] !== !0 && Rb(_), t) {
        case "input":
          go(e), he(e, i, !0);
          break;
        case "textarea":
          go(e), xf(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof i.onClick == "function" && Cg(e);
          break;
      }
      return G;
    }
    function KD(e, t, i) {
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
    function QD(e, t, i) {
      switch (t) {
        case "input":
          He(e, i);
          return;
        case "textarea":
          OE(e, i);
          return;
        case "select":
          Jv(e, i);
          return;
      }
    }
    var Uh = function() {
    }, Ph = function() {
    };
    {
      var XD = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], Ab = [
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
      ], qD = Ab.concat(["button"]), ZD = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], Nb = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      Ph = function(e, t) {
        var i = Dt({}, e || Nb), o = {
          tag: t
        };
        return Ab.indexOf(t) !== -1 && (i.aTagInScope = null, i.buttonTagInScope = null, i.nobrTagInScope = null), qD.indexOf(t) !== -1 && (i.pTagInButtonScope = null), XD.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (i.listItemTagAutoclosing = null, i.dlItemTagAutoclosing = null), i.current = o, t === "form" && (i.formTag = o), t === "a" && (i.aTagInScope = o), t === "button" && (i.buttonTagInScope = o), t === "nobr" && (i.nobrTagInScope = o), t === "p" && (i.pTagInButtonScope = o), t === "li" && (i.listItemTagAutoclosing = o), (t === "dd" || t === "dt") && (i.dlItemTagAutoclosing = o), i;
      };
      var JD = function(e, t) {
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
            return ZD.indexOf(t) === -1;
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
      }, eO = function(e, t) {
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
      }, kb = {};
      Uh = function(e, t, i) {
        i = i || Nb;
        var o = i.current, u = o && o.tag;
        t != null && (e != null && E("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var d = JD(e, u) ? null : o, v = d ? null : eO(e, i), g = d || v;
        if (g) {
          var _ = g.tag, w = !!d + "|" + e + "|" + _;
          if (!kb[w]) {
            kb[w] = !0;
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
    var bg = "suppressHydrationWarning", Tg = "$", wg = "/$", jh = "$?", Fh = "$!", tO = "style", S_ = null, C_ = null;
    function nO(e) {
      var t, i, o = e.nodeType;
      switch (o) {
        case Ni:
        case Mp: {
          t = o === Ni ? "#document" : "#fragment";
          var u = e.documentElement;
          i = u ? u.namespaceURI : Lp(null, "");
          break;
        }
        default: {
          var d = o === Mn ? e.parentNode : e, v = d.namespaceURI || null;
          t = d.tagName, i = Lp(v, t);
          break;
        }
      }
      {
        var g = t.toLowerCase(), _ = Ph(null, g);
        return {
          namespace: i,
          ancestorInfo: _
        };
      }
    }
    function rO(e, t, i) {
      {
        var o = e, u = Lp(o.namespace, t), d = Ph(o.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: d
        };
      }
    }
    function aI(e) {
      return e;
    }
    function iO(e) {
      S_ = ms(), C_ = yD();
      var t = null;
      return _i(!1), t;
    }
    function aO(e) {
      ED(C_), _i(S_), S_ = null, C_ = null;
    }
    function oO(e, t, i, o, u) {
      var d;
      {
        var v = o;
        if (Uh(e, null, v.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var g = "" + t.children, _ = Ph(v.ancestorInfo, e);
          Uh(null, g, _);
        }
        d = v.namespace;
      }
      var w = HD(e, t, i, d);
      return $h(u, w), A_(w, t), w;
    }
    function lO(e, t) {
      e.appendChild(t);
    }
    function uO(e, t, i, o, u) {
      switch (VD(e, t, i, o), t) {
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
    function sO(e, t, i, o, u, d) {
      {
        var v = d;
        if (typeof o.children != typeof i.children && (typeof o.children == "string" || typeof o.children == "number")) {
          var g = "" + o.children, _ = Ph(v.ancestorInfo, t);
          Uh(null, g, _);
        }
      }
      return BD(e, t, i, o);
    }
    function b_(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function cO(e, t, i, o) {
      {
        var u = i;
        Uh(null, e, u.ancestorInfo);
      }
      var d = $D(e, t);
      return $h(o, d), d;
    }
    function fO() {
      var e = window.event;
      return e === void 0 ? Qa : md(e.type);
    }
    var T_ = typeof setTimeout == "function" ? setTimeout : void 0, dO = typeof clearTimeout == "function" ? clearTimeout : void 0, w_ = -1, Lb = typeof Promise == "function" ? Promise : void 0, pO = typeof queueMicrotask == "function" ? queueMicrotask : typeof Lb < "u" ? function(e) {
      return Lb.resolve(null).then(e).catch(hO);
    } : T_;
    function hO(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function vO(e, t, i, o) {
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
    function mO(e, t, i, o, u, d) {
      YD(e, t, i, o, u), A_(e, u);
    }
    function Mb(e) {
      fc(e, "");
    }
    function gO(e, t, i) {
      e.nodeValue = i;
    }
    function yO(e, t) {
      e.appendChild(t);
    }
    function EO(e, t) {
      var i;
      e.nodeType === Mn ? (i = e.parentNode, i.insertBefore(t, e)) : (i = e, i.appendChild(t));
      var o = e._reactRootContainer;
      o == null && i.onclick === null && Cg(i);
    }
    function _O(e, t, i) {
      e.insertBefore(t, i);
    }
    function SO(e, t, i) {
      e.nodeType === Mn ? e.parentNode.insertBefore(t, i) : e.insertBefore(t, i);
    }
    function CO(e, t) {
      e.removeChild(t);
    }
    function bO(e, t) {
      e.nodeType === Mn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function R_(e, t) {
      var i = t, o = 0;
      do {
        var u = i.nextSibling;
        if (e.removeChild(i), u && u.nodeType === Mn) {
          var d = u.data;
          if (d === wg)
            if (o === 0) {
              e.removeChild(u), jn(t);
              return;
            } else
              o--;
          else
            (d === Tg || d === jh || d === Fh) && o++;
        }
        i = u;
      } while (i);
      jn(t);
    }
    function TO(e, t) {
      e.nodeType === Mn ? R_(e.parentNode, t) : e.nodeType === ci && R_(e, t), jn(e);
    }
    function wO(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function RO(e) {
      e.nodeValue = "";
    }
    function xO(e, t) {
      e = e;
      var i = t[tO], o = i != null && i.hasOwnProperty("display") ? i.display : null;
      e.style.display = rl("display", o);
    }
    function DO(e, t) {
      e.nodeValue = t;
    }
    function OO(e) {
      e.nodeType === ci ? e.textContent = "" : e.nodeType === Ni && e.documentElement && e.removeChild(e.documentElement);
    }
    function AO(e, t, i) {
      return e.nodeType !== ci || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function NO(e, t) {
      return t === "" || e.nodeType !== So ? null : e;
    }
    function kO(e) {
      return e.nodeType !== Mn ? null : e;
    }
    function zb(e) {
      return e.data === jh;
    }
    function x_(e) {
      return e.data === Fh;
    }
    function LO(e) {
      var t = e.nextSibling && e.nextSibling.dataset, i, o, u;
      return t && (i = t.dgst, o = t.msg, u = t.stck), {
        message: o,
        digest: i,
        stack: u
      };
    }
    function MO(e, t) {
      e._reactRetry = t;
    }
    function Rg(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === ci || t === So)
          break;
        if (t === Mn) {
          var i = e.data;
          if (i === Tg || i === Fh || i === jh)
            break;
          if (i === wg)
            return null;
        }
      }
      return e;
    }
    function Ih(e) {
      return Rg(e.nextSibling);
    }
    function zO(e) {
      return Rg(e.firstChild);
    }
    function UO(e) {
      return Rg(e.firstChild);
    }
    function PO(e) {
      return Rg(e.nextSibling);
    }
    function jO(e, t, i, o, u, d, v) {
      $h(d, e), A_(e, i);
      var g;
      {
        var _ = u;
        g = _.namespace;
      }
      var w = (d.mode & We) !== rt;
      return GD(e, t, i, g, o, w, v);
    }
    function FO(e, t, i, o) {
      return $h(i, e), i.mode & We, KD(e, t);
    }
    function IO(e, t) {
      $h(t, e);
    }
    function HO(e) {
      for (var t = e.nextSibling, i = 0; t; ) {
        if (t.nodeType === Mn) {
          var o = t.data;
          if (o === wg) {
            if (i === 0)
              return Ih(t);
            i--;
          } else
            (o === Tg || o === Fh || o === jh) && i++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function Ub(e) {
      for (var t = e.previousSibling, i = 0; t; ) {
        if (t.nodeType === Mn) {
          var o = t.data;
          if (o === Tg || o === Fh || o === jh) {
            if (i === 0)
              return t;
            i--;
          } else
            o === wg && i++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function $O(e) {
      jn(e);
    }
    function VO(e) {
      jn(e);
    }
    function BO(e) {
      return e !== "head" && e !== "body";
    }
    function YO(e, t, i, o) {
      var u = !0;
      Sg(t.nodeValue, i, o, u);
    }
    function WO(e, t, i, o, u, d) {
      if (t[bg] !== !0) {
        var v = !0;
        Sg(o.nodeValue, u, d, v);
      }
    }
    function GO(e, t) {
      t.nodeType === ci ? g_(e, t) : t.nodeType === Mn || y_(e, t);
    }
    function KO(e, t) {
      {
        var i = e.parentNode;
        i !== null && (t.nodeType === ci ? g_(i, t) : t.nodeType === Mn || y_(i, t));
      }
    }
    function QO(e, t, i, o, u) {
      (u || t[bg] !== !0) && (o.nodeType === ci ? g_(i, o) : o.nodeType === Mn || y_(i, o));
    }
    function XO(e, t, i) {
      E_(e, t);
    }
    function qO(e, t) {
      __(e, t);
    }
    function ZO(e, t, i) {
      {
        var o = e.parentNode;
        o !== null && E_(o, t);
      }
    }
    function JO(e, t) {
      {
        var i = e.parentNode;
        i !== null && __(i, t);
      }
    }
    function eA(e, t, i, o, u, d) {
      (d || t[bg] !== !0) && E_(i, o);
    }
    function tA(e, t, i, o, u) {
      (u || t[bg] !== !0) && __(i, o);
    }
    function nA(e) {
      E("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function rA(e) {
      kh(e);
    }
    var Md = Math.random().toString(36).slice(2), zd = "__reactFiber$" + Md, D_ = "__reactProps$" + Md, Hh = "__reactContainer$" + Md, O_ = "__reactEvents$" + Md, iA = "__reactListeners$" + Md, aA = "__reactHandles$" + Md;
    function oA(e) {
      delete e[zd], delete e[D_], delete e[O_], delete e[iA], delete e[aA];
    }
    function $h(e, t) {
      t[zd] = e;
    }
    function xg(e, t) {
      t[Hh] = e;
    }
    function Pb(e) {
      e[Hh] = null;
    }
    function Vh(e) {
      return !!e[Hh];
    }
    function Jc(e) {
      var t = e[zd];
      if (t)
        return t;
      for (var i = e.parentNode; i; ) {
        if (t = i[Hh] || i[zd], t) {
          var o = t.alternate;
          if (t.child !== null || o !== null && o.child !== null)
            for (var u = Ub(e); u !== null; ) {
              var d = u[zd];
              if (d)
                return d;
              u = Ub(u);
            }
          return t;
        }
        e = i, i = e.parentNode;
      }
      return null;
    }
    function Ts(e) {
      var t = e[zd] || e[Hh];
      return t && (t.tag === Y || t.tag === X || t.tag === ae || t.tag === F) ? t : null;
    }
    function Ud(e) {
      if (e.tag === Y || e.tag === X)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Dg(e) {
      return e[D_] || null;
    }
    function A_(e, t) {
      e[D_] = t;
    }
    function lA(e) {
      var t = e[O_];
      return t === void 0 && (t = e[O_] = /* @__PURE__ */ new Set()), t;
    }
    var jb = {}, Fb = p.ReactDebugCurrentFrame;
    function Og(e) {
      if (e) {
        var t = e._owner, i = Mt(e.type, e._source, t ? t.type : null);
        Fb.setExtraStackFrame(i);
      } else
        Fb.setExtraStackFrame(null);
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
            g && !(g instanceof Error) && (Og(u), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", i, v, typeof g), Og(null)), g instanceof Error && !(g.message in jb) && (jb[g.message] = !0, Og(u), E("Failed %s type: %s", i, g.message), Og(null));
          }
      }
    }
    var N_ = [], Ag;
    Ag = [];
    var mu = -1;
    function ws(e) {
      return {
        current: e
      };
    }
    function Si(e, t) {
      if (mu < 0) {
        E("Unexpected pop.");
        return;
      }
      t !== Ag[mu] && E("Unexpected Fiber popped."), e.current = N_[mu], N_[mu] = null, Ag[mu] = null, mu--;
    }
    function Ci(e, t, i) {
      mu++, N_[mu] = e.current, Ag[mu] = i, e.current = t;
    }
    var k_;
    k_ = {};
    var Da = {};
    Object.freeze(Da);
    var gu = ws(Da), Cl = ws(!1), L_ = Da;
    function Pd(e, t, i) {
      return i && bl(t) ? L_ : gu.current;
    }
    function Ib(e, t, i) {
      {
        var o = e.stateNode;
        o.__reactInternalMemoizedUnmaskedChildContext = t, o.__reactInternalMemoizedMaskedChildContext = i;
      }
    }
    function jd(e, t) {
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
    function Ng() {
      return Cl.current;
    }
    function bl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function kg(e) {
      Si(Cl, e), Si(gu, e);
    }
    function M_(e) {
      Si(Cl, e), Si(gu, e);
    }
    function Hb(e, t, i) {
      {
        if (gu.current !== Da)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        Ci(gu, t, e), Ci(Cl, i, e);
      }
    }
    function $b(e, t, i) {
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
    function Lg(e) {
      {
        var t = e.stateNode, i = t && t.__reactInternalMemoizedMergedChildContext || Da;
        return L_ = gu.current, Ci(gu, i, e), Ci(Cl, Cl.current, e), !0;
      }
    }
    function Vb(e, t, i) {
      {
        var o = e.stateNode;
        if (!o)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (i) {
          var u = $b(e, t, L_);
          o.__reactInternalMemoizedMergedChildContext = u, Si(Cl, e), Si(gu, e), Ci(gu, u, e), Ci(Cl, i, e);
        } else
          Si(Cl, e), Ci(Cl, i, e);
      }
    }
    function uA(e) {
      {
        if (!Mi(e) || e.tag !== A)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case F:
              return t.stateNode.context;
            case A: {
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
    var Rs = 0, Mg = 1, yu = null, z_ = !1, U_ = !1;
    function Bb(e) {
      yu === null ? yu = [e] : yu.push(e);
    }
    function sA(e) {
      z_ = !0, Bb(e);
    }
    function Yb() {
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
          throw yu !== null && (yu = yu.slice(e + 1)), eh(vi, xs), d;
        } finally {
          Pn(t), U_ = !1;
        }
      }
      return null;
    }
    var Fd = [], Id = 0, zg = null, Ug = 0, Ja = [], eo = 0, ef = null, Eu = 1, _u = "";
    function cA(e) {
      return nf(), (e.flags & Om) !== nt;
    }
    function fA(e) {
      return nf(), Ug;
    }
    function dA() {
      var e = _u, t = Eu, i = t & ~pA(t);
      return i.toString(32) + e;
    }
    function tf(e, t) {
      nf(), Fd[Id++] = Ug, Fd[Id++] = zg, zg = e, Ug = t;
    }
    function Wb(e, t, i) {
      nf(), Ja[eo++] = Eu, Ja[eo++] = _u, Ja[eo++] = ef, ef = e;
      var o = Eu, u = _u, d = Pg(o) - 1, v = o & ~(1 << d), g = i + 1, _ = Pg(t) + d;
      if (_ > 30) {
        var w = d - d % 5, R = (1 << w) - 1, j = (v & R).toString(32), U = v >> w, G = d - w, K = Pg(t) + G, Z = g << G, Le = Z | U, it = j + u;
        Eu = 1 << K | Le, _u = it;
      } else {
        var Ge = g << d, Pt = Ge | v, Lt = u;
        Eu = 1 << _ | Pt, _u = Lt;
      }
    }
    function P_(e) {
      nf();
      var t = e.return;
      if (t !== null) {
        var i = 1, o = 0;
        tf(e, i), Wb(e, i, o);
      }
    }
    function Pg(e) {
      return 32 - Ac(e);
    }
    function pA(e) {
      return 1 << Pg(e) - 1;
    }
    function j_(e) {
      for (; e === zg; )
        zg = Fd[--Id], Fd[Id] = null, Ug = Fd[--Id], Fd[Id] = null;
      for (; e === ef; )
        ef = Ja[--eo], Ja[eo] = null, _u = Ja[--eo], Ja[eo] = null, Eu = Ja[--eo], Ja[eo] = null;
    }
    function hA() {
      return nf(), ef !== null ? {
        id: Eu,
        overflow: _u
      } : null;
    }
    function vA(e, t) {
      nf(), Ja[eo++] = Eu, Ja[eo++] = _u, Ja[eo++] = ef, Eu = t.id, _u = t.overflow, ef = e;
    }
    function nf() {
      Kr() || E("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Gr = null, to = null, zo = !1, rf = !1, Ds = null;
    function mA() {
      zo && E("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function Gb() {
      rf = !0;
    }
    function gA() {
      return rf;
    }
    function yA(e) {
      var t = e.stateNode.containerInfo;
      return to = UO(t), Gr = e, zo = !0, Ds = null, rf = !1, !0;
    }
    function EA(e, t, i) {
      return to = PO(t), Gr = e, zo = !0, Ds = null, rf = !1, i !== null && vA(e, i), !0;
    }
    function Kb(e, t) {
      switch (e.tag) {
        case F: {
          GO(e.stateNode.containerInfo, t);
          break;
        }
        case Y: {
          var i = (e.mode & We) !== rt;
          QO(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            i
          );
          break;
        }
        case ae: {
          var o = e.memoizedState;
          o.dehydrated !== null && KO(o.dehydrated, t);
          break;
        }
      }
    }
    function Qb(e, t) {
      Kb(e, t);
      var i = CL();
      i.stateNode = t, i.return = e;
      var o = e.deletions;
      o === null ? (e.deletions = [i], e.flags |= Vt) : o.push(i);
    }
    function F_(e, t) {
      {
        if (rf)
          return;
        switch (e.tag) {
          case F: {
            var i = e.stateNode.containerInfo;
            switch (t.tag) {
              case Y:
                var o = t.type;
                t.pendingProps, XO(i, o);
                break;
              case X:
                var u = t.pendingProps;
                qO(i, u);
                break;
            }
            break;
          }
          case Y: {
            var d = e.type, v = e.memoizedProps, g = e.stateNode;
            switch (t.tag) {
              case Y: {
                var _ = t.type, w = t.pendingProps, R = (e.mode & We) !== rt;
                eA(
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
                var j = t.pendingProps, U = (e.mode & We) !== rt;
                tA(
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
          case ae: {
            var G = e.memoizedState, K = G.dehydrated;
            if (K !== null)
              switch (t.tag) {
                case Y:
                  var Z = t.type;
                  t.pendingProps, ZO(K, Z);
                  break;
                case X:
                  var Le = t.pendingProps;
                  JO(K, Le);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function Xb(e, t) {
      t.flags = t.flags & ~Ba | sn, F_(e, t);
    }
    function qb(e, t) {
      switch (e.tag) {
        case Y: {
          var i = e.type;
          e.pendingProps;
          var o = AO(t, i);
          return o !== null ? (e.stateNode = o, Gr = e, to = zO(o), !0) : !1;
        }
        case X: {
          var u = e.pendingProps, d = NO(t, u);
          return d !== null ? (e.stateNode = d, Gr = e, to = null, !0) : !1;
        }
        case ae: {
          var v = kO(t);
          if (v !== null) {
            var g = {
              dehydrated: v,
              treeContext: hA(),
              retryLane: Pi
            };
            e.memoizedState = g;
            var _ = bL(v);
            return _.return = e, e.child = _, Gr = e, to = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function I_(e) {
      return (e.mode & We) !== rt && (e.flags & _t) === nt;
    }
    function H_(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function $_(e) {
      if (zo) {
        var t = to;
        if (!t) {
          I_(e) && (F_(Gr, e), H_()), Xb(Gr, e), zo = !1, Gr = e;
          return;
        }
        var i = t;
        if (!qb(e, t)) {
          I_(e) && (F_(Gr, e), H_()), t = Ih(i);
          var o = Gr;
          if (!t || !qb(e, t)) {
            Xb(Gr, e), zo = !1, Gr = e;
            return;
          }
          Qb(o, i);
        }
      }
    }
    function _A(e, t, i) {
      var o = e.stateNode, u = !rf, d = jO(o, e.type, e.memoizedProps, t, i, e, u);
      return e.updateQueue = d, d !== null;
    }
    function SA(e) {
      var t = e.stateNode, i = e.memoizedProps, o = FO(t, i, e);
      if (o) {
        var u = Gr;
        if (u !== null)
          switch (u.tag) {
            case F: {
              var d = u.stateNode.containerInfo, v = (u.mode & We) !== rt;
              YO(
                d,
                t,
                i,
                // TODO: Delete this argument when we remove the legacy root API.
                v
              );
              break;
            }
            case Y: {
              var g = u.type, _ = u.memoizedProps, w = u.stateNode, R = (u.mode & We) !== rt;
              WO(
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
    function CA(e) {
      var t = e.memoizedState, i = t !== null ? t.dehydrated : null;
      if (!i)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      IO(i, e);
    }
    function bA(e) {
      var t = e.memoizedState, i = t !== null ? t.dehydrated : null;
      if (!i)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return HO(i);
    }
    function Zb(e) {
      for (var t = e.return; t !== null && t.tag !== Y && t.tag !== F && t.tag !== ae; )
        t = t.return;
      Gr = t;
    }
    function jg(e) {
      if (e !== Gr)
        return !1;
      if (!zo)
        return Zb(e), zo = !0, !1;
      if (e.tag !== F && (e.tag !== Y || BO(e.type) && !b_(e.type, e.memoizedProps))) {
        var t = to;
        if (t)
          if (I_(e))
            Jb(e), H_();
          else
            for (; t; )
              Qb(e, t), t = Ih(t);
      }
      return Zb(e), e.tag === ae ? to = bA(e) : to = Gr ? Ih(e.stateNode) : null, !0;
    }
    function TA() {
      return zo && to !== null;
    }
    function Jb(e) {
      for (var t = to; t; )
        Kb(e, t), t = Ih(t);
    }
    function Hd() {
      Gr = null, to = null, zo = !1, rf = !1;
    }
    function eT() {
      Ds !== null && (Kw(Ds), Ds = null);
    }
    function Kr() {
      return zo;
    }
    function V_(e) {
      Ds === null ? Ds = [e] : Ds.push(e);
    }
    var wA = p.ReactCurrentBatchConfig, RA = null;
    function xA() {
      return wA.transition;
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
      var DA = function(e) {
        for (var t = null, i = e; i !== null; )
          i.mode & zn && (t = i), i = i.return;
        return t;
      }, af = function(e) {
        var t = [];
        return e.forEach(function(i) {
          t.push(i);
        }), t.sort().join(", ");
      }, Bh = [], Yh = [], Wh = [], Gh = [], Kh = [], Qh = [], of = /* @__PURE__ */ new Set();
      Uo.recordUnsafeLifecycleWarnings = function(e, t) {
        of.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Bh.push(e), e.mode & zn && typeof t.UNSAFE_componentWillMount == "function" && Yh.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Wh.push(e), e.mode & zn && typeof t.UNSAFE_componentWillReceiveProps == "function" && Gh.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Kh.push(e), e.mode & zn && typeof t.UNSAFE_componentWillUpdate == "function" && Qh.push(e));
      }, Uo.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Bh.length > 0 && (Bh.forEach(function(U) {
          e.add(yt(U) || "Component"), of.add(U.type);
        }), Bh = []);
        var t = /* @__PURE__ */ new Set();
        Yh.length > 0 && (Yh.forEach(function(U) {
          t.add(yt(U) || "Component"), of.add(U.type);
        }), Yh = []);
        var i = /* @__PURE__ */ new Set();
        Wh.length > 0 && (Wh.forEach(function(U) {
          i.add(yt(U) || "Component"), of.add(U.type);
        }), Wh = []);
        var o = /* @__PURE__ */ new Set();
        Gh.length > 0 && (Gh.forEach(function(U) {
          o.add(yt(U) || "Component"), of.add(U.type);
        }), Gh = []);
        var u = /* @__PURE__ */ new Set();
        Kh.length > 0 && (Kh.forEach(function(U) {
          u.add(yt(U) || "Component"), of.add(U.type);
        }), Kh = []);
        var d = /* @__PURE__ */ new Set();
        if (Qh.length > 0 && (Qh.forEach(function(U) {
          d.add(yt(U) || "Component"), of.add(U.type);
        }), Qh = []), t.size > 0) {
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
      var Fg = /* @__PURE__ */ new Map(), tT = /* @__PURE__ */ new Set();
      Uo.recordLegacyContextWarning = function(e, t) {
        var i = DA(e);
        if (i === null) {
          E("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!tT.has(e.type)) {
          var o = Fg.get(i);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (o === void 0 && (o = [], Fg.set(i, o)), o.push(e));
        }
      }, Uo.flushLegacyContextWarning = function() {
        Fg.forEach(function(e, t) {
          if (e.length !== 0) {
            var i = e[0], o = /* @__PURE__ */ new Set();
            e.forEach(function(d) {
              o.add(yt(d) || "Component"), tT.add(d.type);
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
        Bh = [], Yh = [], Wh = [], Gh = [], Kh = [], Qh = [], Fg = /* @__PURE__ */ new Map();
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
    var Ig = null, $d = null, W_ = null, Hg = !1;
    function $g() {
      Ig = null, $d = null, W_ = null, Hg = !1;
    }
    function nT() {
      Hg = !0;
    }
    function rT() {
      Hg = !1;
    }
    function iT(e, t, i) {
      Ci(B_, t._currentValue, e), t._currentValue = i, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Y_ && E("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Y_;
    }
    function G_(e, t) {
      var i = B_.current;
      Si(B_, t), e._currentValue = i;
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
    function OA(e, t, i) {
      AA(e, t, i);
    }
    function AA(e, t, i) {
      var o = e.child;
      for (o !== null && (o.return = e); o !== null; ) {
        var u = void 0, d = o.dependencies;
        if (d !== null) {
          u = o.child;
          for (var v = d.firstContext; v !== null; ) {
            if (v.context === t) {
              if (o.tag === A) {
                var g = os(i), _ = Su(vn, g);
                _.tag = Bg;
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
    function Vd(e, t) {
      Ig = e, $d = null, W_ = null;
      var i = e.dependencies;
      if (i !== null) {
        var o = i.firstContext;
        o !== null && (Ei(i.lanes, t) && sv(), i.firstContext = null);
      }
    }
    function yr(e) {
      Hg && E("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (W_ !== e) {
        var i = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if ($d === null) {
          if (Ig === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          $d = i, Ig.dependencies = {
            lanes: te,
            firstContext: i
          };
        } else
          $d = $d.next = i;
      }
      return t;
    }
    var lf = null;
    function Q_(e) {
      lf === null ? lf = [e] : lf.push(e);
    }
    function NA() {
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
    function aT(e, t, i, o) {
      var u = t.interleaved;
      return u === null ? (i.next = i, Q_(t)) : (i.next = u.next, u.next = i), t.interleaved = i, Vg(e, o);
    }
    function kA(e, t, i, o) {
      var u = t.interleaved;
      u === null ? (i.next = i, Q_(t)) : (i.next = u.next, u.next = i), t.interleaved = i;
    }
    function LA(e, t, i, o) {
      var u = t.interleaved;
      return u === null ? (i.next = i, Q_(t)) : (i.next = u.next, u.next = i), t.interleaved = i, Vg(e, o);
    }
    function ca(e, t) {
      return Vg(e, t);
    }
    var MA = Vg;
    function Vg(e, t) {
      e.lanes = Tt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Tt(i.lanes, t)), i === null && (e.flags & (sn | Ba)) !== nt && oR(e);
      for (var o = e, u = e.return; u !== null; )
        u.childLanes = Tt(u.childLanes, t), i = u.alternate, i !== null ? i.childLanes = Tt(i.childLanes, t) : (u.flags & (sn | Ba)) !== nt && oR(e), o = u, u = u.return;
      if (o.tag === F) {
        var d = o.stateNode;
        return d;
      } else
        return null;
    }
    var oT = 0, lT = 1, Bg = 2, X_ = 3, Yg = !1, q_, Wg;
    q_ = !1, Wg = null;
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
    function uT(e, t) {
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
        tag: oT,
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
      if (Wg === u && !q_ && (E("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), q_ = !0), Mk()) {
        var d = u.pending;
        return d === null ? t.next = t : (t.next = d.next, d.next = t), u.pending = t, MA(e, i);
      } else
        return LA(e, u, t, i);
    }
    function Gg(e, t, i) {
      var o = t.updateQueue;
      if (o !== null) {
        var u = o.shared;
        if (fh(i)) {
          var d = u.lanes;
          d = ld(d, e.pendingLanes);
          var v = Tt(d, i);
          u.lanes = v, dh(e, v);
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
    function zA(e, t, i, o, u, d) {
      switch (i.tag) {
        case lT: {
          var v = i.payload;
          if (typeof v == "function") {
            nT();
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
              rT();
            }
            return g;
          }
          return v;
        }
        case X_:
          e.flags = e.flags & ~br | _t;
        case oT: {
          var _ = i.payload, w;
          if (typeof _ == "function") {
            nT(), w = _.call(d, o, u);
            {
              if (e.mode & zn) {
                hn(!0);
                try {
                  _.call(d, o, u);
                } finally {
                  hn(!1);
                }
              }
              rT();
            }
          } else
            w = _;
          return w == null ? o : Dt({}, o, w);
        }
        case Bg:
          return Yg = !0, o;
      }
      return o;
    }
    function Kg(e, t, i, o) {
      var u = e.updateQueue;
      Yg = !1, Wg = u.shared;
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
        var G = u.baseState, K = te, Z = null, Le = null, it = null, Ge = d;
        do {
          var Pt = Ge.lane, Lt = Ge.eventTime;
          if (uu(o, Pt)) {
            if (it !== null) {
              var J = {
                eventTime: Lt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Yn,
                tag: Ge.tag,
                payload: Ge.payload,
                callback: Ge.callback,
                next: null
              };
              it = it.next = J;
            }
            G = zA(e, u, Ge, G, t, i);
            var V = Ge.callback;
            if (V !== null && // If the update was already committed, we should not queue its
            // callback again.
            Ge.lane !== Yn) {
              e.flags |= hr;
              var pe = u.effects;
              pe === null ? u.effects = [Ge] : pe.push(Ge);
            }
          } else {
            var $ = {
              eventTime: Lt,
              lane: Pt,
              tag: Ge.tag,
              payload: Ge.payload,
              callback: Ge.callback,
              next: null
            };
            it === null ? (Le = it = $, Z = G) : it = it.next = $, K = Tt(K, Pt);
          }
          if (Ge = Ge.next, Ge === null) {
            if (g = u.shared.pending, g === null)
              break;
            var Me = g, Re = Me.next;
            Me.next = null, Ge = Re, u.lastBaseUpdate = Me, u.shared.pending = null;
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
        Sv(K), e.lanes = K, e.memoizedState = G;
      }
      Wg = null;
    }
    function UA(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function sT() {
      Yg = !1;
    }
    function Qg() {
      return Yg;
    }
    function cT(e, t, i) {
      var o = t.effects;
      if (t.effects = null, o !== null)
        for (var u = 0; u < o.length; u++) {
          var d = o[u], v = d.callback;
          v !== null && (d.callback = null, UA(v, i));
        }
    }
    var eS = {}, fT = new a.Component().refs, tS, nS, rS, iS, aS, dT, Xg, oS, lS, uS;
    {
      tS = /* @__PURE__ */ new Set(), nS = /* @__PURE__ */ new Set(), rS = /* @__PURE__ */ new Set(), iS = /* @__PURE__ */ new Set(), oS = /* @__PURE__ */ new Set(), aS = /* @__PURE__ */ new Set(), lS = /* @__PURE__ */ new Set(), uS = /* @__PURE__ */ new Set();
      var pT = /* @__PURE__ */ new Set();
      Xg = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var i = t + "_" + e;
          pT.has(i) || (pT.add(i), E("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, dT = function(e, t) {
        if (t === void 0) {
          var i = Ft(e) || "Component";
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
        dT(t, d);
      }
      var v = d == null ? u : Dt({}, u, d);
      if (e.memoizedState = v, e.lanes === te) {
        var g = e.updateQueue;
        g.baseState = v;
      }
    }
    var cS = {
      isMounted: zi,
      enqueueSetState: function(e, t, i) {
        var o = Va(e), u = Ii(), d = Ps(o), v = Su(u, d);
        v.payload = t, i != null && (Xg(i, "setState"), v.callback = i);
        var g = Os(o, v, d);
        g !== null && (Lr(g, o, d, u), Gg(g, o, d)), Yf(o, d);
      },
      enqueueReplaceState: function(e, t, i) {
        var o = Va(e), u = Ii(), d = Ps(o), v = Su(u, d);
        v.tag = lT, v.payload = t, i != null && (Xg(i, "replaceState"), v.callback = i);
        var g = Os(o, v, d);
        g !== null && (Lr(g, o, d, u), Gg(g, o, d)), Yf(o, d);
      },
      enqueueForceUpdate: function(e, t) {
        var i = Va(e), o = Ii(), u = Ps(i), d = Su(o, u);
        d.tag = Bg, t != null && (Xg(t, "forceUpdate"), d.callback = t);
        var v = Os(i, d, u);
        v !== null && (Lr(v, i, u, o), Gg(v, i, u)), ns(i, u);
      }
    };
    function hT(e, t, i, o, u, d, v) {
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
          _ === void 0 && E("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Ft(t) || "Component");
        }
        return _;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !ft(i, o) || !ft(u, d) : !0;
    }
    function PA(e, t, i) {
      var o = e.stateNode;
      {
        var u = Ft(t) || "Component", d = o.render;
        d || (t.prototype && typeof t.prototype.render == "function" ? E("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : E("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), o.getInitialState && !o.getInitialState.isReactClassApproved && !o.state && E("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), o.getDefaultProps && !o.getDefaultProps.isReactClassApproved && E("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), o.propTypes && E("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), o.contextType && E("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), o.contextTypes && E("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !lS.has(t) && (lS.add(t), E("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof o.componentShouldUpdate == "function" && E("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof o.shouldComponentUpdate < "u" && E("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Ft(t) || "A pure component"), typeof o.componentDidUnmount == "function" && E("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof o.componentDidReceiveProps == "function" && E("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof o.componentWillRecieveProps == "function" && E("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof o.UNSAFE_componentWillRecieveProps == "function" && E("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var v = o.props !== i;
        o.props !== void 0 && v && E("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), o.defaultProps && E("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof o.getSnapshotBeforeUpdate == "function" && typeof o.componentDidUpdate != "function" && !rS.has(t) && (rS.add(t), E("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Ft(t))), typeof o.getDerivedStateFromProps == "function" && E("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof o.getDerivedStateFromError == "function" && E("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && E("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var g = o.state;
        g && (typeof g != "object" || It(g)) && E("%s.state: must be set to an object or null", u), typeof o.getChildContext == "function" && typeof t.childContextTypes != "object" && E("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function vT(e, t) {
      t.updater = cS, e.stateNode = t, Pf(t, e), t._reactInternalInstance = eS;
    }
    function mT(e, t, i) {
      var o = !1, u = Da, d = Da, v = t.contextType;
      if ("contextType" in t) {
        var g = (
          // Allow null for conditional declaration
          v === null || v !== void 0 && v.$$typeof === Ee && v._context === void 0
        );
        if (!g && !uS.has(t)) {
          uS.add(t);
          var _ = "";
          v === void 0 ? _ = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof v != "object" ? _ = " However, it is set to a " + typeof v + "." : v.$$typeof === le ? _ = " Did you accidentally pass the Context.Provider instead?" : v._context !== void 0 ? _ = " Did you accidentally pass the Context.Consumer instead?" : _ = " However, it is set to an object with keys {" + Object.keys(v).join(", ") + "}.", E("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Ft(t) || "Component", _);
        }
      }
      if (typeof v == "object" && v !== null)
        d = yr(v);
      else {
        u = Pd(e, t, !0);
        var w = t.contextTypes;
        o = w != null, d = o ? jd(e, u) : Da;
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
      vT(e, R);
      {
        if (typeof t.getDerivedStateFromProps == "function" && j === null) {
          var U = Ft(t) || "Component";
          nS.has(U) || (nS.add(U), E("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", U, R.state === null ? "null" : "undefined", U));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof R.getSnapshotBeforeUpdate == "function") {
          var G = null, K = null, Z = null;
          if (typeof R.componentWillMount == "function" && R.componentWillMount.__suppressDeprecationWarning !== !0 ? G = "componentWillMount" : typeof R.UNSAFE_componentWillMount == "function" && (G = "UNSAFE_componentWillMount"), typeof R.componentWillReceiveProps == "function" && R.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? K = "componentWillReceiveProps" : typeof R.UNSAFE_componentWillReceiveProps == "function" && (K = "UNSAFE_componentWillReceiveProps"), typeof R.componentWillUpdate == "function" && R.componentWillUpdate.__suppressDeprecationWarning !== !0 ? Z = "componentWillUpdate" : typeof R.UNSAFE_componentWillUpdate == "function" && (Z = "UNSAFE_componentWillUpdate"), G !== null || K !== null || Z !== null) {
            var Le = Ft(t) || "Component", it = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
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
    function jA(e, t) {
      var i = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), i !== t.state && (E("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", yt(e) || "Component"), cS.enqueueReplaceState(t, t.state, null));
    }
    function gT(e, t, i, o) {
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
      PA(e, t, i);
      var u = e.stateNode;
      u.props = i, u.state = e.memoizedState, u.refs = fT, Z_(e);
      var d = t.contextType;
      if (typeof d == "object" && d !== null)
        u.context = yr(d);
      else {
        var v = Pd(e, t, !0);
        u.context = jd(e, v);
      }
      {
        if (u.state === i) {
          var g = Ft(t) || "Component";
          oS.has(g) || (oS.add(g), E("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", g));
        }
        e.mode & zn && Uo.recordLegacyContextWarning(e, u), Uo.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var _ = t.getDerivedStateFromProps;
      if (typeof _ == "function" && (sS(e, t, _, i), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (jA(e, u), Kg(e, i, u, o), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var w = Ve;
        w |= Ji, (e.mode & na) !== rt && (w |= ea), e.flags |= w;
      }
    }
    function FA(e, t, i, o) {
      var u = e.stateNode, d = e.memoizedProps;
      u.props = d;
      var v = u.context, g = t.contextType, _ = Da;
      if (typeof g == "object" && g !== null)
        _ = yr(g);
      else {
        var w = Pd(e, t, !0);
        _ = jd(e, w);
      }
      var R = t.getDerivedStateFromProps, j = typeof R == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !j && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (d !== i || v !== _) && gT(e, u, i, _), sT();
      var U = e.memoizedState, G = u.state = U;
      if (Kg(e, i, u, o), G = e.memoizedState, d === i && U === G && !Ng() && !Qg()) {
        if (typeof u.componentDidMount == "function") {
          var K = Ve;
          K |= Ji, (e.mode & na) !== rt && (K |= ea), e.flags |= K;
        }
        return !1;
      }
      typeof R == "function" && (sS(e, t, R, i), G = e.memoizedState);
      var Z = Qg() || hT(e, t, d, i, U, G, _);
      if (Z) {
        if (!j && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var Le = Ve;
          Le |= Ji, (e.mode & na) !== rt && (Le |= ea), e.flags |= Le;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var it = Ve;
          it |= Ji, (e.mode & na) !== rt && (it |= ea), e.flags |= it;
        }
        e.memoizedProps = i, e.memoizedState = G;
      }
      return u.props = i, u.state = G, u.context = _, Z;
    }
    function IA(e, t, i, o, u) {
      var d = t.stateNode;
      uT(e, t);
      var v = t.memoizedProps, g = t.type === t.elementType ? v : Po(t.type, v);
      d.props = g;
      var _ = t.pendingProps, w = d.context, R = i.contextType, j = Da;
      if (typeof R == "object" && R !== null)
        j = yr(R);
      else {
        var U = Pd(t, i, !0);
        j = jd(t, U);
      }
      var G = i.getDerivedStateFromProps, K = typeof G == "function" || typeof d.getSnapshotBeforeUpdate == "function";
      !K && (typeof d.UNSAFE_componentWillReceiveProps == "function" || typeof d.componentWillReceiveProps == "function") && (v !== _ || w !== j) && gT(t, d, o, j), sT();
      var Z = t.memoizedState, Le = d.state = Z;
      if (Kg(t, o, d, u), Le = t.memoizedState, v === _ && Z === Le && !Ng() && !Qg() && !L)
        return typeof d.componentDidUpdate == "function" && (v !== e.memoizedProps || Z !== e.memoizedState) && (t.flags |= Ve), typeof d.getSnapshotBeforeUpdate == "function" && (v !== e.memoizedProps || Z !== e.memoizedState) && (t.flags |= er), !1;
      typeof G == "function" && (sS(t, i, G, o), Le = t.memoizedState);
      var it = Qg() || hT(t, i, g, o, Z, Le, j) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      L;
      return it ? (!K && (typeof d.UNSAFE_componentWillUpdate == "function" || typeof d.componentWillUpdate == "function") && (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(o, Le, j), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(o, Le, j)), typeof d.componentDidUpdate == "function" && (t.flags |= Ve), typeof d.getSnapshotBeforeUpdate == "function" && (t.flags |= er)) : (typeof d.componentDidUpdate == "function" && (v !== e.memoizedProps || Z !== e.memoizedState) && (t.flags |= Ve), typeof d.getSnapshotBeforeUpdate == "function" && (v !== e.memoizedProps || Z !== e.memoizedState) && (t.flags |= er), t.memoizedProps = o, t.memoizedState = Le), d.props = o, d.state = Le, d.context = j, it;
    }
    var dS, pS, hS, vS, mS, yT = function(e, t) {
    };
    dS = !1, pS = !1, hS = {}, vS = {}, mS = {}, yT = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var i = yt(t) || "Component";
        vS[i] || (vS[i] = !0, E('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Xh(e, t, i) {
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
            if (g.tag !== A)
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
            U === fT && (U = _.refs = {}), j === null ? delete U[w] : U[w] = j;
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
    function qg(e, t) {
      var i = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (i === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : i) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Zg(e) {
      {
        var t = yt(e) || "Component";
        if (mS[t])
          return;
        mS[t] = !0, E("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function ET(e) {
      var t = e._payload, i = e._init;
      return i(t);
    }
    function _T(e) {
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
        for (var V = /* @__PURE__ */ new Map(), pe = J; pe !== null; )
          pe.key !== null ? V.set(pe.key, pe) : V.set(pe.index, pe), pe = pe.sibling;
        return V;
      }
      function u($, J) {
        var V = vf($, J);
        return V.index = 0, V.sibling = null, V;
      }
      function d($, J, V) {
        if ($.index = V, !e)
          return $.flags |= Om, J;
        var pe = $.alternate;
        if (pe !== null) {
          var Me = pe.index;
          return Me < J ? ($.flags |= sn, J) : Me;
        } else
          return $.flags |= sn, J;
      }
      function v($) {
        return e && $.alternate === null && ($.flags |= sn), $;
      }
      function g($, J, V, pe) {
        if (J === null || J.tag !== X) {
          var Me = V0(V, $.mode, pe);
          return Me.return = $, Me;
        } else {
          var Re = u(J, V);
          return Re.return = $, Re;
        }
      }
      function _($, J, V, pe) {
        var Me = V.type;
        if (Me === Ai)
          return R($, J, V.props.children, pe, V.key);
        if (J !== null && (J.elementType === Me || // Keep this check inline so it only runs on the false path:
        cR(J, V) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Me == "object" && Me !== null && Me.$$typeof === et && ET(Me) === J.type)) {
          var Re = u(J, V.props);
          return Re.ref = Xh($, J, V), Re.return = $, Re._debugSource = V._source, Re._debugOwner = V._owner, Re;
        }
        var ht = $0(V, $.mode, pe);
        return ht.ref = Xh($, J, V), ht.return = $, ht;
      }
      function w($, J, V, pe) {
        if (J === null || J.tag !== H || J.stateNode.containerInfo !== V.containerInfo || J.stateNode.implementation !== V.implementation) {
          var Me = B0(V, $.mode, pe);
          return Me.return = $, Me;
        } else {
          var Re = u(J, V.children || []);
          return Re.return = $, Re;
        }
      }
      function R($, J, V, pe, Me) {
        if (J === null || J.tag !== fe) {
          var Re = Fs(V, $.mode, pe, Me);
          return Re.return = $, Re;
        } else {
          var ht = u(J, V);
          return ht.return = $, ht;
        }
      }
      function j($, J, V) {
        if (typeof J == "string" && J !== "" || typeof J == "number") {
          var pe = V0("" + J, $.mode, V);
          return pe.return = $, pe;
        }
        if (typeof J == "object" && J !== null) {
          switch (J.$$typeof) {
            case ii: {
              var Me = $0(J, $.mode, V);
              return Me.ref = Xh($, null, J), Me.return = $, Me;
            }
            case ai: {
              var Re = B0(J, $.mode, V);
              return Re.return = $, Re;
            }
            case et: {
              var ht = J._payload, bt = J._init;
              return j($, bt(ht), V);
            }
          }
          if (It(J) || ja(J)) {
            var on = Fs(J, $.mode, V, null);
            return on.return = $, on;
          }
          qg($, J);
        }
        return typeof J == "function" && Zg($), null;
      }
      function U($, J, V, pe) {
        var Me = J !== null ? J.key : null;
        if (typeof V == "string" && V !== "" || typeof V == "number")
          return Me !== null ? null : g($, J, "" + V, pe);
        if (typeof V == "object" && V !== null) {
          switch (V.$$typeof) {
            case ii:
              return V.key === Me ? _($, J, V, pe) : null;
            case ai:
              return V.key === Me ? w($, J, V, pe) : null;
            case et: {
              var Re = V._payload, ht = V._init;
              return U($, J, ht(Re), pe);
            }
          }
          if (It(V) || ja(V))
            return Me !== null ? null : R($, J, V, pe, null);
          qg($, V);
        }
        return typeof V == "function" && Zg($), null;
      }
      function G($, J, V, pe, Me) {
        if (typeof pe == "string" && pe !== "" || typeof pe == "number") {
          var Re = $.get(V) || null;
          return g(J, Re, "" + pe, Me);
        }
        if (typeof pe == "object" && pe !== null) {
          switch (pe.$$typeof) {
            case ii: {
              var ht = $.get(pe.key === null ? V : pe.key) || null;
              return _(J, ht, pe, Me);
            }
            case ai: {
              var bt = $.get(pe.key === null ? V : pe.key) || null;
              return w(J, bt, pe, Me);
            }
            case et:
              var on = pe._payload, Yt = pe._init;
              return G($, J, V, Yt(on), Me);
          }
          if (It(pe) || ja(pe)) {
            var fr = $.get(V) || null;
            return R(J, fr, pe, Me, null);
          }
          qg(J, pe);
        }
        return typeof pe == "function" && Zg(J), null;
      }
      function K($, J, V) {
        {
          if (typeof $ != "object" || $ === null)
            return J;
          switch ($.$$typeof) {
            case ii:
            case ai:
              yT($, V);
              var pe = $.key;
              if (typeof pe != "string")
                break;
              if (J === null) {
                J = /* @__PURE__ */ new Set(), J.add(pe);
                break;
              }
              if (!J.has(pe)) {
                J.add(pe);
                break;
              }
              E("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", pe);
              break;
            case et:
              var Me = $._payload, Re = $._init;
              K(Re(Me), J, V);
              break;
          }
        }
        return J;
      }
      function Z($, J, V, pe) {
        for (var Me = null, Re = 0; Re < V.length; Re++) {
          var ht = V[Re];
          Me = K(ht, Me, $);
        }
        for (var bt = null, on = null, Yt = J, fr = 0, Wt = 0, nr = null; Yt !== null && Wt < V.length; Wt++) {
          Yt.index > Wt ? (nr = Yt, Yt = null) : nr = Yt.sibling;
          var Ti = U($, Yt, V[Wt], pe);
          if (Ti === null) {
            Yt === null && (Yt = nr);
            break;
          }
          e && Yt && Ti.alternate === null && t($, Yt), fr = d(Ti, fr, Wt), on === null ? bt = Ti : on.sibling = Ti, on = Ti, Yt = nr;
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
            var Aa = j($, V[Wt], pe);
            Aa !== null && (fr = d(Aa, fr, Wt), on === null ? bt = Aa : on.sibling = Aa, on = Aa);
          }
          if (Kr()) {
            var Hi = Wt;
            tf($, Hi);
          }
          return bt;
        }
        for (var $i = o($, Yt); Wt < V.length; Wt++) {
          var wi = G($i, $, Wt, V[Wt], pe);
          wi !== null && (e && wi.alternate !== null && $i.delete(wi.key === null ? Wt : wi.key), fr = d(wi, fr, Wt), on === null ? bt = wi : on.sibling = wi, on = wi);
        }
        if (e && $i.forEach(function(op) {
          return t($, op);
        }), Kr()) {
          var xu = Wt;
          tf($, xu);
        }
        return bt;
      }
      function Le($, J, V, pe) {
        var Me = ja(V);
        if (typeof Me != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          V[Symbol.toStringTag] === "Generator" && (pS || E("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), pS = !0), V.entries === Me && (dS || E("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), dS = !0);
          var Re = Me.call(V);
          if (Re)
            for (var ht = null, bt = Re.next(); !bt.done; bt = Re.next()) {
              var on = bt.value;
              ht = K(on, ht, $);
            }
        }
        var Yt = Me.call(V);
        if (Yt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var fr = null, Wt = null, nr = J, Ti = 0, ti = 0, Aa = null, Hi = Yt.next(); nr !== null && !Hi.done; ti++, Hi = Yt.next()) {
          nr.index > ti ? (Aa = nr, nr = null) : Aa = nr.sibling;
          var $i = U($, nr, Hi.value, pe);
          if ($i === null) {
            nr === null && (nr = Aa);
            break;
          }
          e && nr && $i.alternate === null && t($, nr), Ti = d($i, Ti, ti), Wt === null ? fr = $i : Wt.sibling = $i, Wt = $i, nr = Aa;
        }
        if (Hi.done) {
          if (i($, nr), Kr()) {
            var wi = ti;
            tf($, wi);
          }
          return fr;
        }
        if (nr === null) {
          for (; !Hi.done; ti++, Hi = Yt.next()) {
            var xu = j($, Hi.value, pe);
            xu !== null && (Ti = d(xu, Ti, ti), Wt === null ? fr = xu : Wt.sibling = xu, Wt = xu);
          }
          if (Kr()) {
            var op = ti;
            tf($, op);
          }
          return fr;
        }
        for (var Rv = o($, nr); !Hi.done; ti++, Hi = Yt.next()) {
          var Nl = G(Rv, $, ti, Hi.value, pe);
          Nl !== null && (e && Nl.alternate !== null && Rv.delete(Nl.key === null ? ti : Nl.key), Ti = d(Nl, Ti, ti), Wt === null ? fr = Nl : Wt.sibling = Nl, Wt = Nl);
        }
        if (e && Rv.forEach(function(eM) {
          return t($, eM);
        }), Kr()) {
          var JL = ti;
          tf($, JL);
        }
        return fr;
      }
      function it($, J, V, pe) {
        if (J !== null && J.tag === X) {
          i($, J.sibling);
          var Me = u(J, V);
          return Me.return = $, Me;
        }
        i($, J);
        var Re = V0(V, $.mode, pe);
        return Re.return = $, Re;
      }
      function Ge($, J, V, pe) {
        for (var Me = V.key, Re = J; Re !== null; ) {
          if (Re.key === Me) {
            var ht = V.type;
            if (ht === Ai) {
              if (Re.tag === fe) {
                i($, Re.sibling);
                var bt = u(Re, V.props.children);
                return bt.return = $, bt._debugSource = V._source, bt._debugOwner = V._owner, bt;
              }
            } else if (Re.elementType === ht || // Keep this check inline so it only runs on the false path:
            cR(Re, V) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof ht == "object" && ht !== null && ht.$$typeof === et && ET(ht) === Re.type) {
              i($, Re.sibling);
              var on = u(Re, V.props);
              return on.ref = Xh($, Re, V), on.return = $, on._debugSource = V._source, on._debugOwner = V._owner, on;
            }
            i($, Re);
            break;
          } else
            t($, Re);
          Re = Re.sibling;
        }
        if (V.type === Ai) {
          var Yt = Fs(V.props.children, $.mode, pe, V.key);
          return Yt.return = $, Yt;
        } else {
          var fr = $0(V, $.mode, pe);
          return fr.ref = Xh($, J, V), fr.return = $, fr;
        }
      }
      function Pt($, J, V, pe) {
        for (var Me = V.key, Re = J; Re !== null; ) {
          if (Re.key === Me)
            if (Re.tag === H && Re.stateNode.containerInfo === V.containerInfo && Re.stateNode.implementation === V.implementation) {
              i($, Re.sibling);
              var ht = u(Re, V.children || []);
              return ht.return = $, ht;
            } else {
              i($, Re);
              break;
            }
          else
            t($, Re);
          Re = Re.sibling;
        }
        var bt = B0(V, $.mode, pe);
        return bt.return = $, bt;
      }
      function Lt($, J, V, pe) {
        var Me = typeof V == "object" && V !== null && V.type === Ai && V.key === null;
        if (Me && (V = V.props.children), typeof V == "object" && V !== null) {
          switch (V.$$typeof) {
            case ii:
              return v(Ge($, J, V, pe));
            case ai:
              return v(Pt($, J, V, pe));
            case et:
              var Re = V._payload, ht = V._init;
              return Lt($, J, ht(Re), pe);
          }
          if (It(V))
            return Z($, J, V, pe);
          if (ja(V))
            return Le($, J, V, pe);
          qg($, V);
        }
        return typeof V == "string" && V !== "" || typeof V == "number" ? v(it($, J, "" + V, pe)) : (typeof V == "function" && Zg($), i($, J));
      }
      return Lt;
    }
    var Bd = _T(!0), ST = _T(!1);
    function HA(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var i = t.child, o = vf(i, i.pendingProps);
        for (t.child = o, o.return = t; i.sibling !== null; )
          i = i.sibling, o = o.sibling = vf(i, i.pendingProps), o.return = t;
        o.sibling = null;
      }
    }
    function $A(e, t) {
      for (var i = e.child; i !== null; )
        gL(i, t), i = i.sibling;
    }
    var qh = {}, As = ws(qh), Zh = ws(qh), Jg = ws(qh);
    function ey(e) {
      if (e === qh)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function CT() {
      var e = ey(Jg.current);
      return e;
    }
    function gS(e, t) {
      Ci(Jg, t, e), Ci(Zh, e, e), Ci(As, qh, e);
      var i = nO(t);
      Si(As, e), Ci(As, i, e);
    }
    function Yd(e) {
      Si(As, e), Si(Zh, e), Si(Jg, e);
    }
    function yS() {
      var e = ey(As.current);
      return e;
    }
    function bT(e) {
      ey(Jg.current);
      var t = ey(As.current), i = rO(t, e.type);
      t !== i && (Ci(Zh, e, e), Ci(As, i, e));
    }
    function ES(e) {
      Zh.current === e && (Si(As, e), Si(Zh, e));
    }
    var VA = 0, TT = 1, wT = 1, Jh = 2, jo = ws(VA);
    function _S(e, t) {
      return (e & t) !== 0;
    }
    function Wd(e) {
      return e & TT;
    }
    function SS(e, t) {
      return e & TT | t;
    }
    function BA(e, t) {
      return e | t;
    }
    function Ns(e, t) {
      Ci(jo, t, e);
    }
    function Gd(e) {
      Si(jo, e);
    }
    function YA(e, t) {
      var i = e.memoizedState;
      return i !== null ? i.dehydrated !== null : (e.memoizedProps, !0);
    }
    function ty(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === ae) {
          var i = t.memoizedState;
          if (i !== null) {
            var o = i.dehydrated;
            if (o === null || zb(o) || x_(o))
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
    function WA(e, t) {
      var i = t._getVersion, o = i(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, o] : e.mutableSourceEagerHydrationData.push(t, o);
    }
    var Ae = p.ReactCurrentDispatcher, ev = p.ReactCurrentBatchConfig, TS, Kd;
    TS = /* @__PURE__ */ new Set();
    var uf = te, an = null, Dr = null, Or = null, ny = !1, tv = !1, nv = 0, GA = 0, KA = 25, re = null, no = null, ks = -1, wS = !1;
    function qt() {
      {
        var e = re;
        no === null ? no = [e] : no.push(e);
      }
    }
    function _e() {
      {
        var e = re;
        no !== null && (ks++, no[ks] !== e && QA(e));
      }
    }
    function Qd(e) {
      e != null && !It(e) && E("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", re, typeof e);
    }
    function QA(e) {
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
    function bi() {
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
    function Xd(e, t, i, o, u, d) {
      uf = d, an = t, no = e !== null ? e._debugHookTypes : null, ks = -1, wS = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = te, e !== null && e.memoizedState !== null ? Ae.current = GT : no !== null ? Ae.current = WT : Ae.current = YT;
      var v = i(o, u);
      if (tv) {
        var g = 0;
        do {
          if (tv = !1, nv = 0, g >= KA)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          g += 1, wS = !1, Dr = null, Or = null, t.updateQueue = null, ks = -1, Ae.current = KT, v = i(o, u);
        } while (tv);
      }
      Ae.current = vy, t._debugHookTypes = no;
      var _ = Dr !== null && Dr.next !== null;
      if (uf = te, an = null, Dr = null, Or = null, re = null, no = null, ks = -1, e !== null && (e.flags & Tr) !== (t.flags & Tr) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & We) !== rt && E("Internal React error: Expected static flag was missing. Please notify the React team."), ny = !1, _)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return v;
    }
    function qd() {
      var e = nv !== 0;
      return nv = 0, e;
    }
    function RT(e, t, i) {
      t.updateQueue = e.updateQueue, (t.mode & na) !== rt ? t.flags &= ~(Zl | ea | fi | Ve) : t.flags &= ~(fi | Ve), e.lanes = jc(e.lanes, i);
    }
    function xT() {
      if (Ae.current = vy, ny) {
        for (var e = an.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        ny = !1;
      }
      uf = te, an = null, Dr = null, Or = null, no = null, ks = -1, re = null, IT = !1, tv = !1, nv = 0;
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
    function DT() {
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
      var v = d.dispatch = JA.bind(null, an, d);
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
              var Ge = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Yn,
                action: Z.action,
                hasEagerState: Z.hasEagerState,
                eagerState: Z.eagerState,
                next: null
              };
              K = K.next = Ge;
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
            K === null ? (G = K = it, U = j) : K = K.next = it, an.lanes = Tt(an.lanes, Le), Sv(Le);
          }
          Z = Z.next;
        } while (Z !== null && Z !== R);
        K === null ? U = j : K.next = G, Fe(j, o.memoizedState) || sv(), o.memoizedState = j, o.baseState = U, o.baseQueue = K, u.lastRenderedState = j;
      }
      var Lt = u.interleaved;
      if (Lt !== null) {
        var $ = Lt;
        do {
          var J = $.lane;
          an.lanes = Tt(an.lanes, J), Sv(J), $ = $.next;
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
        Fe(g, o.memoizedState) || sv(), o.memoizedState = g, o.baseQueue === null && (o.baseState = g), u.lastRenderedState = g;
      }
      return [g, d];
    }
    function oI(e, t, i) {
    }
    function lI(e, t, i) {
    }
    function NS(e, t, i) {
      var o = an, u = wl(), d, v = Kr();
      if (v) {
        if (i === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        d = i(), Kd || d !== i() && (E("The result of getServerSnapshot should be cached to avoid an infinite loop"), Kd = !0);
      } else {
        if (d = t(), !Kd) {
          var g = t();
          Fe(d, g) || (E("The result of getSnapshot should be cached to avoid an infinite loop"), Kd = !0);
        }
        var _ = Ly();
        if (_ === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Pc(_, uf) || OT(o, t, d);
      }
      u.memoizedState = d;
      var w = {
        value: d,
        getSnapshot: t
      };
      return u.queue = w, ly(NT.bind(null, o, w, e), [e]), o.flags |= fi, rv(Rr | Qr, AT.bind(null, o, w, d, t), void 0, null), d;
    }
    function ry(e, t, i) {
      var o = an, u = ro(), d = t();
      if (!Kd) {
        var v = t();
        Fe(d, v) || (E("The result of getSnapshot should be cached to avoid an infinite loop"), Kd = !0);
      }
      var g = u.memoizedState, _ = !Fe(g, d);
      _ && (u.memoizedState = d, sv());
      var w = u.queue;
      if (av(NT.bind(null, o, w, e), [e]), w.getSnapshot !== t || _ || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      Or !== null && Or.memoizedState.tag & Rr) {
        o.flags |= fi, rv(Rr | Qr, AT.bind(null, o, w, d, t), void 0, null);
        var R = Ly();
        if (R === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Pc(R, uf) || OT(o, t, d);
      }
      return d;
    }
    function OT(e, t, i) {
      e.flags |= ql;
      var o = {
        getSnapshot: t,
        value: i
      }, u = an.updateQueue;
      if (u === null)
        u = DT(), an.updateQueue = u, u.stores = [o];
      else {
        var d = u.stores;
        d === null ? u.stores = [o] : d.push(o);
      }
    }
    function AT(e, t, i, o) {
      t.value = i, t.getSnapshot = o, kT(t) && LT(e);
    }
    function NT(e, t, i) {
      var o = function() {
        kT(t) && LT(e);
      };
      return i(o);
    }
    function kT(e) {
      var t = e.getSnapshot, i = e.value;
      try {
        var o = t();
        return !Fe(i, o);
      } catch {
        return !0;
      }
    }
    function LT(e) {
      var t = ca(e, lt);
      t !== null && Lr(t, e, lt, vn);
    }
    function iy(e) {
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
      var o = i.dispatch = eN.bind(null, an, i);
      return [t.memoizedState, o];
    }
    function kS(e) {
      return OS(xS);
    }
    function LS(e) {
      return AS(xS);
    }
    function rv(e, t, i, o) {
      var u = {
        tag: e,
        create: t,
        destroy: i,
        deps: o,
        // Circular
        next: null
      }, d = an.updateQueue;
      if (d === null)
        d = DT(), an.updateQueue = d, d.lastEffect = u.next = u;
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
    function ay(e) {
      var t = ro();
      return t.memoizedState;
    }
    function iv(e, t, i, o) {
      var u = wl(), d = o === void 0 ? null : o;
      an.flags |= e, u.memoizedState = rv(Rr | t, i, void 0, d);
    }
    function oy(e, t, i, o) {
      var u = ro(), d = o === void 0 ? null : o, v = void 0;
      if (Dr !== null) {
        var g = Dr.memoizedState;
        if (v = g.destroy, d !== null) {
          var _ = g.deps;
          if (RS(d, _)) {
            u.memoizedState = rv(t, i, v, d);
            return;
          }
        }
      }
      an.flags |= e, u.memoizedState = rv(Rr | t, i, v, d);
    }
    function ly(e, t) {
      return (an.mode & na) !== rt ? iv(Zl | fi | ul, Qr, e, t) : iv(fi | ul, Qr, e, t);
    }
    function av(e, t) {
      return oy(fi, Qr, e, t);
    }
    function zS(e, t) {
      return iv(Ve, Tl, e, t);
    }
    function uy(e, t) {
      return oy(Ve, Tl, e, t);
    }
    function US(e, t) {
      var i = Ve;
      return i |= Ji, (an.mode & na) !== rt && (i |= ea), iv(i, xr, e, t);
    }
    function sy(e, t) {
      return oy(Ve, xr, e, t);
    }
    function MT(e, t) {
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
      var o = i != null ? i.concat([e]) : null, u = Ve;
      return u |= Ji, (an.mode & na) !== rt && (u |= ea), iv(u, xr, MT.bind(null, t, e), o);
    }
    function cy(e, t, i) {
      typeof t != "function" && E("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var o = i != null ? i.concat([e]) : null;
      return oy(Ve, xr, MT.bind(null, t, e), o);
    }
    function XA(e, t) {
    }
    var fy = XA;
    function jS(e, t) {
      var i = wl(), o = t === void 0 ? null : t;
      return i.memoizedState = [e, o], e;
    }
    function dy(e, t) {
      var i = ro(), o = t === void 0 ? null : t, u = i.memoizedState;
      if (u !== null && o !== null) {
        var d = u[1];
        if (RS(o, d))
          return u[0];
      }
      return i.memoizedState = [e, o], e;
    }
    function FS(e, t) {
      var i = wl(), o = t === void 0 ? null : t, u = e();
      return i.memoizedState = [u, o], u;
    }
    function py(e, t) {
      var i = ro(), o = t === void 0 ? null : t, u = i.memoizedState;
      if (u !== null && o !== null) {
        var d = u[1];
        if (RS(o, d))
          return u[0];
      }
      var v = e();
      return i.memoizedState = [v, o], v;
    }
    function IS(e) {
      var t = wl();
      return t.memoizedState = e, e;
    }
    function zT(e) {
      var t = ro(), i = Dr, o = i.memoizedState;
      return PT(t, o, e);
    }
    function UT(e) {
      var t = ro();
      if (Dr === null)
        return t.memoizedState = e, e;
      var i = Dr.memoizedState;
      return PT(t, i, e);
    }
    function PT(e, t, i) {
      var o = !$m(uf);
      if (o) {
        if (!Fe(i, t)) {
          var u = Ym();
          an.lanes = Tt(an.lanes, u), Sv(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, sv()), e.memoizedState = i, i;
    }
    function qA(e, t, i) {
      var o = ia();
      Pn(KE(o, Ao)), e(!0);
      var u = ev.transition;
      ev.transition = {};
      var d = ev.transition;
      ev.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Pn(o), ev.transition = u, u === null && d._updatedFibers) {
          var v = d._updatedFibers.size;
          v > 10 && T("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), d._updatedFibers.clear();
        }
      }
    }
    function HS() {
      var e = iy(!1), t = e[0], i = e[1], o = qA.bind(null, i), u = wl();
      return u.memoizedState = o, [t, o];
    }
    function jT() {
      var e = kS(), t = e[0], i = ro(), o = i.memoizedState;
      return [t, o];
    }
    function FT() {
      var e = LS(), t = e[0], i = ro(), o = i.memoizedState;
      return [t, o];
    }
    var IT = !1;
    function ZA() {
      return IT;
    }
    function $S() {
      var e = wl(), t = Ly(), i = t.identifierPrefix, o;
      if (Kr()) {
        var u = dA();
        o = ":" + i + "R" + u;
        var d = nv++;
        d > 0 && (o += "H" + d.toString(32)), o += ":";
      } else {
        var v = GA++;
        o = ":" + i + "r" + v.toString(32) + ":";
      }
      return e.memoizedState = o, o;
    }
    function hy() {
      var e = ro(), t = e.memoizedState;
      return t;
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
      if (HT(e))
        $T(t, u);
      else {
        var d = aT(e, t, u, o);
        if (d !== null) {
          var v = Ii();
          Lr(d, e, o, v), VT(d, t, o);
        }
      }
      BT(e, o);
    }
    function eN(e, t, i) {
      typeof arguments[3] == "function" && E("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var o = Ps(e), u = {
        lane: o,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (HT(e))
        $T(t, u);
      else {
        var d = e.alternate;
        if (e.lanes === te && (d === null || d.lanes === te)) {
          var v = t.lastRenderedReducer;
          if (v !== null) {
            var g;
            g = Ae.current, Ae.current = Fo;
            try {
              var _ = t.lastRenderedState, w = v(_, i);
              if (u.hasEagerState = !0, u.eagerState = w, Fe(w, _)) {
                kA(e, t, u, o);
                return;
              }
            } catch {
            } finally {
              Ae.current = g;
            }
          }
        }
        var R = aT(e, t, u, o);
        if (R !== null) {
          var j = Ii();
          Lr(R, e, o, j), VT(R, t, o);
        }
      }
      BT(e, o);
    }
    function HT(e) {
      var t = e.alternate;
      return e === an || t !== null && t === an;
    }
    function $T(e, t) {
      tv = ny = !0;
      var i = e.pending;
      i === null ? t.next = t : (t.next = i.next, i.next = t), e.pending = t;
    }
    function VT(e, t, i) {
      if (fh(i)) {
        var o = t.lanes;
        o = ld(o, e.pendingLanes);
        var u = Tt(o, i);
        t.lanes = u, dh(e, u);
      }
    }
    function BT(e, t, i) {
      Yf(e, t);
    }
    var vy = {
      readContext: yr,
      useCallback: bi,
      useContext: bi,
      useEffect: bi,
      useImperativeHandle: bi,
      useInsertionEffect: bi,
      useLayoutEffect: bi,
      useMemo: bi,
      useReducer: bi,
      useRef: bi,
      useState: bi,
      useDebugValue: bi,
      useDeferredValue: bi,
      useTransition: bi,
      useMutableSource: bi,
      useSyncExternalStore: bi,
      useId: bi,
      unstable_isNewReconciler: be
    }, YT = null, WT = null, GT = null, KT = null, Rl = null, Fo = null, my = null;
    {
      var VS = function() {
        E("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, St = function() {
        E("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      YT = {
        readContext: function(e) {
          return yr(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", qt(), Qd(t), jS(e, t);
        },
        useContext: function(e) {
          return re = "useContext", qt(), yr(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", qt(), Qd(t), ly(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return re = "useImperativeHandle", qt(), Qd(i), PS(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", qt(), Qd(t), zS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", qt(), Qd(t), US(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", qt(), Qd(t);
          var i = Ae.current;
          Ae.current = Rl;
          try {
            return FS(e, t);
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
            return iy(e);
          } finally {
            Ae.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", qt(), void 0;
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", qt(), IS(e);
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
      }, WT = {
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
          return re = "useEffect", _e(), ly(e, t);
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
            return FS(e, t);
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
            return iy(e);
          } finally {
            Ae.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", _e(), void 0;
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", _e(), IS(e);
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
      }, GT = {
        readContext: function(e) {
          return yr(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", _e(), dy(e, t);
        },
        useContext: function(e) {
          return re = "useContext", _e(), yr(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", _e(), av(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return re = "useImperativeHandle", _e(), cy(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", _e(), uy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", _e(), sy(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", _e();
          var i = Ae.current;
          Ae.current = Fo;
          try {
            return py(e, t);
          } finally {
            Ae.current = i;
          }
        },
        useReducer: function(e, t, i) {
          re = "useReducer", _e();
          var o = Ae.current;
          Ae.current = Fo;
          try {
            return OS(e, t, i);
          } finally {
            Ae.current = o;
          }
        },
        useRef: function(e) {
          return re = "useRef", _e(), ay();
        },
        useState: function(e) {
          re = "useState", _e();
          var t = Ae.current;
          Ae.current = Fo;
          try {
            return kS(e);
          } finally {
            Ae.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", _e(), fy();
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
          return re = "useSyncExternalStore", _e(), ry(e, t);
        },
        useId: function() {
          return re = "useId", _e(), hy();
        },
        unstable_isNewReconciler: be
      }, KT = {
        readContext: function(e) {
          return yr(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", _e(), dy(e, t);
        },
        useContext: function(e) {
          return re = "useContext", _e(), yr(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", _e(), av(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return re = "useImperativeHandle", _e(), cy(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", _e(), uy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", _e(), sy(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", _e();
          var i = Ae.current;
          Ae.current = my;
          try {
            return py(e, t);
          } finally {
            Ae.current = i;
          }
        },
        useReducer: function(e, t, i) {
          re = "useReducer", _e();
          var o = Ae.current;
          Ae.current = my;
          try {
            return AS(e, t, i);
          } finally {
            Ae.current = o;
          }
        },
        useRef: function(e) {
          return re = "useRef", _e(), ay();
        },
        useState: function(e) {
          re = "useState", _e();
          var t = Ae.current;
          Ae.current = my;
          try {
            return LS(e);
          } finally {
            Ae.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", _e(), fy();
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", _e(), UT(e);
        },
        useTransition: function() {
          return re = "useTransition", _e(), FT();
        },
        useMutableSource: function(e, t, i) {
          return re = "useMutableSource", _e(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return re = "useSyncExternalStore", _e(), ry(e, t);
        },
        useId: function() {
          return re = "useId", _e(), hy();
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
          return re = "useEffect", St(), qt(), ly(e, t);
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
            return FS(e, t);
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
            return iy(e);
          } finally {
            Ae.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", St(), qt(), void 0;
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", St(), qt(), IS(e);
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
      }, Fo = {
        readContext: function(e) {
          return VS(), yr(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", St(), _e(), dy(e, t);
        },
        useContext: function(e) {
          return re = "useContext", St(), _e(), yr(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", St(), _e(), av(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return re = "useImperativeHandle", St(), _e(), cy(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", St(), _e(), uy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", St(), _e(), sy(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", St(), _e();
          var i = Ae.current;
          Ae.current = Fo;
          try {
            return py(e, t);
          } finally {
            Ae.current = i;
          }
        },
        useReducer: function(e, t, i) {
          re = "useReducer", St(), _e();
          var o = Ae.current;
          Ae.current = Fo;
          try {
            return OS(e, t, i);
          } finally {
            Ae.current = o;
          }
        },
        useRef: function(e) {
          return re = "useRef", St(), _e(), ay();
        },
        useState: function(e) {
          re = "useState", St(), _e();
          var t = Ae.current;
          Ae.current = Fo;
          try {
            return kS(e);
          } finally {
            Ae.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", St(), _e(), fy();
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
          return re = "useSyncExternalStore", St(), _e(), ry(e, t);
        },
        useId: function() {
          return re = "useId", St(), _e(), hy();
        },
        unstable_isNewReconciler: be
      }, my = {
        readContext: function(e) {
          return VS(), yr(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", St(), _e(), dy(e, t);
        },
        useContext: function(e) {
          return re = "useContext", St(), _e(), yr(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", St(), _e(), av(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return re = "useImperativeHandle", St(), _e(), cy(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", St(), _e(), uy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", St(), _e(), sy(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", St(), _e();
          var i = Ae.current;
          Ae.current = Fo;
          try {
            return py(e, t);
          } finally {
            Ae.current = i;
          }
        },
        useReducer: function(e, t, i) {
          re = "useReducer", St(), _e();
          var o = Ae.current;
          Ae.current = Fo;
          try {
            return AS(e, t, i);
          } finally {
            Ae.current = o;
          }
        },
        useRef: function(e) {
          return re = "useRef", St(), _e(), ay();
        },
        useState: function(e) {
          re = "useState", St(), _e();
          var t = Ae.current;
          Ae.current = Fo;
          try {
            return LS(e);
          } finally {
            Ae.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", St(), _e(), fy();
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", St(), _e(), UT(e);
        },
        useTransition: function() {
          return re = "useTransition", St(), _e(), FT();
        },
        useMutableSource: function(e, t, i) {
          return re = "useMutableSource", St(), _e(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return re = "useSyncExternalStore", St(), _e(), ry(e, t);
        },
        useId: function() {
          return re = "useId", St(), _e(), hy();
        },
        unstable_isNewReconciler: be
      };
    }
    var Ls = s.unstable_now, QT = 0, gy = -1, ov = -1, yy = -1, BS = !1, Ey = !1;
    function XT() {
      return BS;
    }
    function tN() {
      Ey = !0;
    }
    function nN() {
      BS = !1, Ey = !1;
    }
    function rN() {
      BS = Ey, Ey = !1;
    }
    function qT() {
      return QT;
    }
    function ZT() {
      QT = Ls();
    }
    function YS(e) {
      ov = Ls(), e.actualStartTime < 0 && (e.actualStartTime = Ls());
    }
    function JT(e) {
      ov = -1;
    }
    function _y(e, t) {
      if (ov >= 0) {
        var i = Ls() - ov;
        e.actualDuration += i, t && (e.selfBaseDuration = i), ov = -1;
      }
    }
    function xl(e) {
      if (gy >= 0) {
        var t = Ls() - gy;
        gy = -1;
        for (var i = e.return; i !== null; ) {
          switch (i.tag) {
            case F:
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
      if (yy >= 0) {
        var t = Ls() - yy;
        yy = -1;
        for (var i = e.return; i !== null; ) {
          switch (i.tag) {
            case F:
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
      gy = Ls();
    }
    function GS() {
      yy = Ls();
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
    function iN(e, t) {
      return !0;
    }
    function XS(e, t) {
      try {
        var i = iN(e, t);
        if (i === !1)
          return;
        var o = t.value, u = t.source, d = t.stack, v = d !== null ? d : "";
        if (o != null && o._suppressLogging) {
          if (e.tag === A)
            return;
          console.error(o);
        }
        var g = u ? yt(u) : null, _ = g ? "The above error occurred in the <" + g + "> component:" : "The above error occurred in one of your React components:", w;
        if (e.tag === F)
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
    var aN = typeof WeakMap == "function" ? WeakMap : Map;
    function ew(e, t, i) {
      var o = Su(vn, i);
      o.tag = X_, o.payload = {
        element: null
      };
      var u = t.value;
      return o.callback = function() {
        qk(u), XS(e, t);
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
          fR(e), XS(e, t);
        };
      }
      var v = e.stateNode;
      return v !== null && typeof v.componentDidCatch == "function" && (o.callback = function() {
        fR(e), XS(e, t), typeof u != "function" && Qk(this);
        var _ = t.value, w = t.stack;
        this.componentDidCatch(_, {
          componentStack: w !== null ? w : ""
        }), typeof u != "function" && (Ei(e.lanes, lt) || E("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", yt(e) || "Unknown"));
      }), o;
    }
    function tw(e, t, i) {
      var o = e.pingCache, u;
      if (o === null ? (o = e.pingCache = new aN(), u = /* @__PURE__ */ new Set(), o.set(t, u)) : (u = o.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), o.set(t, u))), !u.has(i)) {
        u.add(i);
        var d = Zk.bind(null, e, t, i);
        Ui && Cv(e, i), t.then(d, d);
      }
    }
    function oN(e, t, i, o) {
      var u = e.updateQueue;
      if (u === null) {
        var d = /* @__PURE__ */ new Set();
        d.add(i), e.updateQueue = d;
      } else
        u.add(i);
    }
    function lN(e, t) {
      var i = e.tag;
      if ((e.mode & We) === rt && (i === O || i === ie || i === De)) {
        var o = e.alternate;
        o ? (e.updateQueue = o.updateQueue, e.memoizedState = o.memoizedState, e.lanes = o.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function nw(e) {
      var t = e;
      do {
        if (t.tag === ae && YA(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function rw(e, t, i, o, u) {
      if ((e.mode & We) === rt) {
        if (e === t)
          e.flags |= br;
        else {
          if (e.flags |= _t, i.flags |= jf, i.flags &= ~(Dm | ll), i.tag === A) {
            var d = i.alternate;
            if (d === null)
              i.tag = vt;
            else {
              var v = Su(vn, lt);
              v.tag = Bg, Os(i, v, lt);
            }
          }
          i.lanes = Tt(i.lanes, lt);
        }
        return e;
      }
      return e.flags |= br, e.lanes = u, e;
    }
    function uN(e, t, i, o, u) {
      if (i.flags |= ll, Ui && Cv(e, u), o !== null && typeof o == "object" && typeof o.then == "function") {
        var d = o;
        lN(i), Kr() && i.mode & We && Gb();
        var v = nw(t);
        if (v !== null) {
          v.flags &= ~Yr, rw(v, t, i, e, u), v.mode & We && tw(e, d, u), oN(v, e, d);
          return;
        } else {
          if (!ch(u)) {
            tw(e, d, u), A0();
            return;
          }
          var g = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          o = g;
        }
      } else if (Kr() && i.mode & We) {
        Gb();
        var _ = nw(t);
        if (_ !== null) {
          (_.flags & br) === nt && (_.flags |= Yr), rw(_, t, i, e, u), V_(sf(o, i));
          return;
        }
      }
      o = sf(o, i), Hk(o);
      var w = t;
      do {
        switch (w.tag) {
          case F: {
            var R = o;
            w.flags |= br;
            var j = os(u);
            w.lanes = Tt(w.lanes, j);
            var U = ew(w, R, j);
            J_(w, U);
            return;
          }
          case A:
            var G = o, K = w.type, Z = w.stateNode;
            if ((w.flags & _t) === nt && (typeof K.getDerivedStateFromError == "function" || Z !== null && typeof Z.componentDidCatch == "function" && !nR(Z))) {
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
    function sN() {
      return null;
    }
    var lv = p.ReactCurrentOwner, Io = !1, ZS, uv, JS, e0, t0, cf, n0, Sy;
    ZS = {}, uv = {}, JS = {}, e0 = {}, t0 = {}, cf = !1, n0 = {}, Sy = {};
    function ji(e, t, i, o) {
      e === null ? t.child = ST(t, null, i, o) : t.child = Bd(t, e.child, i, o);
    }
    function cN(e, t, i, o) {
      t.child = Bd(t, e.child, null, o), t.child = Bd(t, null, i, o);
    }
    function iw(e, t, i, o, u) {
      if (t.type !== t.elementType) {
        var d = i.propTypes;
        d && Mo(
          d,
          o,
          // Resolved props
          "prop",
          Ft(i)
        );
      }
      var v = i.render, g = t.ref, _, w;
      Vd(t, u), Zu(t);
      {
        if (lv.current = t, Cr(!0), _ = Xd(e, t, v, o, g, u), w = qd(), t.mode & zn) {
          hn(!0);
          try {
            _ = Xd(e, t, v, o, g, u), w = qd();
          } finally {
            hn(!1);
          }
        }
        Cr(!1);
      }
      return eu(), e !== null && !Io ? (RT(e, t, u), Cu(e, t, u)) : (Kr() && w && P_(t), t.flags |= Ra, ji(e, t, _, u), t.child);
    }
    function aw(e, t, i, o, u) {
      if (e === null) {
        var d = i.type;
        if (vL(d) && i.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        i.defaultProps === void 0) {
          var v = d;
          return v = ap(d), t.tag = De, t.type = v, a0(t, d), ow(e, t, v, o, u);
        }
        {
          var g = d.propTypes;
          g && Mo(
            g,
            o,
            // Resolved props
            "prop",
            Ft(d)
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
          Ft(w)
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
    function ow(e, t, i, o, u) {
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
            Ft(d)
          );
        }
      }
      if (e !== null) {
        var R = e.memoizedProps;
        if (ft(R, o) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (Io = !1, t.pendingProps = o = R, f0(e, u))
            (e.flags & jf) !== nt && (Io = !0);
          else
            return t.lanes = e.lanes, Cu(e, t, u);
      }
      return r0(e, t, i, o, u);
    }
    function lw(e, t, i) {
      var o = t.pendingProps, u = o.children, d = e !== null ? e.memoizedState : null;
      if (o.mode === "hidden" || ne)
        if ((t.mode & We) === rt) {
          var v = {
            baseLanes: te,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = v, My(t, i);
        } else if (Ei(i, Pi)) {
          var j = {
            baseLanes: te,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = j;
          var U = d !== null ? d.baseLanes : i;
          My(t, U);
        } else {
          var g = null, _;
          if (d !== null) {
            var w = d.baseLanes;
            _ = Tt(w, i);
          } else
            _ = i;
          t.lanes = t.childLanes = Pi;
          var R = {
            baseLanes: _,
            cachePool: g,
            transitions: null
          };
          return t.memoizedState = R, t.updateQueue = null, My(t, _), null;
        }
      else {
        var G;
        d !== null ? (G = Tt(d.baseLanes, i), t.memoizedState = null) : G = i, My(t, G);
      }
      return ji(e, t, u, i), t.child;
    }
    function fN(e, t, i) {
      var o = t.pendingProps;
      return ji(e, t, o, i), t.child;
    }
    function dN(e, t, i) {
      var o = t.pendingProps.children;
      return ji(e, t, o, i), t.child;
    }
    function pN(e, t, i) {
      {
        t.flags |= Ve;
        {
          var o = t.stateNode;
          o.effectDuration = 0, o.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, d = u.children;
      return ji(e, t, d, i), t.child;
    }
    function uw(e, t) {
      var i = t.ref;
      (e === null && i !== null || e !== null && e.ref !== i) && (t.flags |= Li, t.flags |= Ya);
    }
    function r0(e, t, i, o, u) {
      if (t.type !== t.elementType) {
        var d = i.propTypes;
        d && Mo(
          d,
          o,
          // Resolved props
          "prop",
          Ft(i)
        );
      }
      var v;
      {
        var g = Pd(t, i, !0);
        v = jd(t, g);
      }
      var _, w;
      Vd(t, u), Zu(t);
      {
        if (lv.current = t, Cr(!0), _ = Xd(e, t, i, o, v, u), w = qd(), t.mode & zn) {
          hn(!0);
          try {
            _ = Xd(e, t, i, o, v, u), w = qd();
          } finally {
            hn(!1);
          }
        }
        Cr(!1);
      }
      return eu(), e !== null && !Io ? (RT(e, t, u), Cu(e, t, u)) : (Kr() && w && P_(t), t.flags |= Ra, ji(e, t, _, u), t.child);
    }
    function sw(e, t, i, o, u) {
      {
        switch (AL(t)) {
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
            Ft(i)
          );
        }
      }
      var G;
      bl(i) ? (G = !0, Lg(t)) : G = !1, Vd(t, u);
      var K = t.stateNode, Z;
      K === null ? (by(e, t), mT(t, i, o), fS(t, i, o, u), Z = !0) : e === null ? Z = FA(t, i, o, u) : Z = IA(e, t, i, o, u);
      var Le = i0(e, t, i, Z, G, u);
      {
        var it = t.stateNode;
        Z && it.props !== o && (cf || E("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", yt(t) || "a component"), cf = !0);
      }
      return Le;
    }
    function i0(e, t, i, o, u, d) {
      uw(e, t);
      var v = (t.flags & _t) !== nt;
      if (!o && !v)
        return u && Vb(t, i, !1), Cu(e, t, d);
      var g = t.stateNode;
      lv.current = t;
      var _;
      if (v && typeof i.getDerivedStateFromError != "function")
        _ = null, JT();
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
      return t.flags |= Ra, e !== null && v ? cN(e, t, _, d) : ji(e, t, _, d), t.memoizedState = g.state, u && Vb(t, i, !0), t.child;
    }
    function cw(e) {
      var t = e.stateNode;
      t.pendingContext ? Hb(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Hb(e, t.context, !1), gS(e, t.containerInfo);
    }
    function hN(e, t, i) {
      if (cw(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var o = t.pendingProps, u = t.memoizedState, d = u.element;
      uT(e, t), Kg(t, o, null, i);
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
          return fw(e, t, g, i, R);
        } else if (g !== d) {
          var j = sf(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return fw(e, t, g, i, j);
        } else {
          yA(t);
          var U = ST(t, null, g, i);
          t.child = U;
          for (var G = U; G; )
            G.flags = G.flags & ~sn | Ba, G = G.sibling;
        }
      } else {
        if (Hd(), g === d)
          return Cu(e, t, i);
        ji(e, t, g, i);
      }
      return t.child;
    }
    function fw(e, t, i, o, u) {
      return Hd(), V_(u), t.flags |= Yr, ji(e, t, i, o), t.child;
    }
    function vN(e, t, i) {
      bT(t), e === null && $_(t);
      var o = t.type, u = t.pendingProps, d = e !== null ? e.memoizedProps : null, v = u.children, g = b_(o, u);
      return g ? v = null : d !== null && b_(o, d) && (t.flags |= Zi), uw(e, t), ji(e, t, v, i), t.child;
    }
    function mN(e, t) {
      return e === null && $_(t), null;
    }
    function gN(e, t, i, o) {
      by(e, t);
      var u = t.pendingProps, d = i, v = d._payload, g = d._init, _ = g(v);
      t.type = _;
      var w = t.tag = mL(_), R = Po(_, u), j;
      switch (w) {
        case O:
          return a0(t, _), t.type = _ = ap(_), j = r0(null, t, _, R, o), j;
        case A:
          return t.type = _ = z0(_), j = sw(null, t, _, R, o), j;
        case ie:
          return t.type = _ = U0(_), j = iw(null, t, _, R, o), j;
        case Ne: {
          if (t.type !== t.elementType) {
            var U = _.propTypes;
            U && Mo(
              U,
              R,
              // Resolved for outer only
              "prop",
              Ft(_)
            );
          }
          return j = aw(
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
    function yN(e, t, i, o, u) {
      by(e, t), t.tag = A;
      var d;
      return bl(i) ? (d = !0, Lg(t)) : d = !1, Vd(t, u), mT(t, i, o), fS(t, i, o, u), i0(null, t, i, !0, d, u);
    }
    function EN(e, t, i, o) {
      by(e, t);
      var u = t.pendingProps, d;
      {
        var v = Pd(t, i, !1);
        d = jd(t, v);
      }
      Vd(t, o);
      var g, _;
      Zu(t);
      {
        if (i.prototype && typeof i.prototype.render == "function") {
          var w = Ft(i) || "Unknown";
          ZS[w] || (E("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", w, w), ZS[w] = !0);
        }
        t.mode & zn && Uo.recordLegacyContextWarning(t, null), Cr(!0), lv.current = t, g = Xd(null, t, i, u, d, o), _ = qd(), Cr(!1);
      }
      if (eu(), t.flags |= Ra, typeof g == "object" && g !== null && typeof g.render == "function" && g.$$typeof === void 0) {
        var R = Ft(i) || "Unknown";
        uv[R] || (E("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", R, R, R), uv[R] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof g == "object" && g !== null && typeof g.render == "function" && g.$$typeof === void 0
      ) {
        {
          var j = Ft(i) || "Unknown";
          uv[j] || (E("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", j, j, j), uv[j] = !0);
        }
        t.tag = A, t.memoizedState = null, t.updateQueue = null;
        var U = !1;
        return bl(i) ? (U = !0, Lg(t)) : U = !1, t.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null, Z_(t), vT(t, g), fS(t, i, u, o), i0(null, t, i, !0, U, o);
      } else {
        if (t.tag = O, t.mode & zn) {
          hn(!0);
          try {
            g = Xd(null, t, i, u, d, o), _ = qd();
          } finally {
            hn(!1);
          }
        }
        return Kr() && _ && P_(t), ji(null, t, g, o), a0(t, i), t.child;
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
          var v = Ft(t) || "Unknown";
          e0[v] || (E("%s: Function components do not support getDerivedStateFromProps.", v), e0[v] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var g = Ft(t) || "Unknown";
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
        cachePool: sN(),
        transitions: null
      };
    }
    function _N(e, t) {
      var i = null;
      return {
        baseLanes: Tt(e.baseLanes, t),
        cachePool: i,
        transitions: e.transitions
      };
    }
    function SN(e, t, i, o) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return _S(e, Jh);
    }
    function CN(e, t) {
      return jc(e.childLanes, t);
    }
    function dw(e, t, i) {
      var o = t.pendingProps;
      NL(t) && (t.flags |= _t);
      var u = jo.current, d = !1, v = (t.flags & _t) !== nt;
      if (v || SN(u, e) ? (d = !0, t.flags &= ~_t) : (e === null || e.memoizedState !== null) && (u = BA(u, wT)), u = Wd(u), Ns(t, u), e === null) {
        $_(t);
        var g = t.memoizedState;
        if (g !== null) {
          var _ = g.dehydrated;
          if (_ !== null)
            return xN(t, _);
        }
        var w = o.children, R = o.fallback;
        if (d) {
          var j = bN(t, w, R, i), U = t.child;
          return U.memoizedState = l0(i), t.memoizedState = o0, j;
        } else
          return u0(t, w);
      } else {
        var G = e.memoizedState;
        if (G !== null) {
          var K = G.dehydrated;
          if (K !== null)
            return DN(e, t, v, o, K, G, i);
        }
        if (d) {
          var Z = o.fallback, Le = o.children, it = wN(e, t, Le, Z, i), Ge = t.child, Pt = e.child.memoizedState;
          return Ge.memoizedState = Pt === null ? l0(i) : _N(Pt, i), Ge.childLanes = CN(e, i), t.memoizedState = o0, it;
        } else {
          var Lt = o.children, $ = TN(e, t, Lt, i);
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
    function bN(e, t, i, o) {
      var u = e.mode, d = e.child, v = {
        mode: "hidden",
        children: t
      }, g, _;
      return (u & We) === rt && d !== null ? (g = d, g.childLanes = te, g.pendingProps = v, e.mode & Ht && (g.actualDuration = 0, g.actualStartTime = -1, g.selfBaseDuration = 0, g.treeBaseDuration = 0), _ = Fs(i, u, o, null)) : (g = s0(v, u), _ = Fs(i, u, o, null)), g.return = e, _.return = e, g.sibling = _, e.child = g, _;
    }
    function s0(e, t, i) {
      return pR(e, t, te, null);
    }
    function pw(e, t) {
      return vf(e, t);
    }
    function TN(e, t, i, o) {
      var u = e.child, d = u.sibling, v = pw(u, {
        mode: "visible",
        children: i
      });
      if ((t.mode & We) === rt && (v.lanes = o), v.return = t, v.sibling = null, d !== null) {
        var g = t.deletions;
        g === null ? (t.deletions = [d], t.flags |= Vt) : g.push(d);
      }
      return t.child = v, v;
    }
    function wN(e, t, i, o, u) {
      var d = t.mode, v = e.child, g = v.sibling, _ = {
        mode: "hidden",
        children: i
      }, w;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (d & We) === rt && // Make sure we're on the second pass, i.e. the primary child fragment was
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
        w = pw(v, _), w.subtreeFlags = v.subtreeFlags & Tr;
      var j;
      return g !== null ? j = vf(g, o) : (j = Fs(o, d, u, null), j.flags |= sn), j.return = t, w.return = t, w.sibling = j, t.child = w, j;
    }
    function Cy(e, t, i, o) {
      o !== null && V_(o), Bd(t, e.child, null, i);
      var u = t.pendingProps, d = u.children, v = u0(t, d);
      return v.flags |= sn, t.memoizedState = null, v;
    }
    function RN(e, t, i, o, u) {
      var d = t.mode, v = {
        mode: "visible",
        children: i
      }, g = s0(v, d), _ = Fs(o, d, u, null);
      return _.flags |= sn, g.return = t, _.return = t, g.sibling = _, t.child = g, (t.mode & We) !== rt && Bd(t, e.child, null, u), _;
    }
    function xN(e, t, i) {
      return (e.mode & We) === rt ? (E("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = lt) : x_(t) ? e.lanes = Un : e.lanes = Pi, null;
    }
    function DN(e, t, i, o, u, d, v) {
      if (i)
        if (t.flags & Yr) {
          t.flags &= ~Yr;
          var $ = QS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Cy(e, t, v, $);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= _t, null;
          var J = o.children, V = o.fallback, pe = RN(e, t, J, V, v), Me = t.child;
          return Me.memoizedState = l0(v), t.memoizedState = o0, pe;
        }
      else {
        if (mA(), (t.mode & We) === rt)
          return Cy(
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
            var R = LO(u);
            g = R.digest, _ = R.message, w = R.stack;
          }
          var j;
          _ ? j = new Error(_) : j = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var U = QS(j, g, w);
          return Cy(e, t, v, U);
        }
        var G = Ei(v, e.childLanes);
        if (Io || G) {
          var K = Ly();
          if (K !== null) {
            var Z = Km(K, v);
            if (Z !== Yn && Z !== d.retryLane) {
              d.retryLane = Z;
              var Le = vn;
              ca(e, Z), Lr(K, e, Z, Le);
            }
          }
          A0();
          var it = QS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Cy(e, t, v, it);
        } else if (zb(u)) {
          t.flags |= _t, t.child = e.child;
          var Ge = Jk.bind(null, e);
          return MO(u, Ge), null;
        } else {
          EA(t, u, d.treeContext);
          var Pt = o.children, Lt = u0(t, Pt);
          return Lt.flags |= Ba, Lt;
        }
      }
    }
    function hw(e, t, i) {
      e.lanes = Tt(e.lanes, t);
      var o = e.alternate;
      o !== null && (o.lanes = Tt(o.lanes, t)), K_(e.return, t, i);
    }
    function ON(e, t, i) {
      for (var o = t; o !== null; ) {
        if (o.tag === ae) {
          var u = o.memoizedState;
          u !== null && hw(o, i, e);
        } else if (o.tag === at)
          hw(o, i, e);
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
    function AN(e) {
      for (var t = e, i = null; t !== null; ) {
        var o = t.alternate;
        o !== null && ty(o) === null && (i = t), t = t.sibling;
      }
      return i;
    }
    function NN(e) {
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
    function kN(e, t) {
      e !== void 0 && !Sy[e] && (e !== "collapsed" && e !== "hidden" ? (Sy[e] = !0, E('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Sy[e] = !0, E('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function vw(e, t) {
      {
        var i = It(e), o = !i && typeof ja(e) == "function";
        if (i || o) {
          var u = i ? "array" : "iterable";
          return E("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function LN(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (It(e)) {
          for (var i = 0; i < e.length; i++)
            if (!vw(e[i], i))
              return;
        } else {
          var o = ja(e);
          if (typeof o == "function") {
            var u = o.call(e);
            if (u)
              for (var d = u.next(), v = 0; !d.done; d = u.next()) {
                if (!vw(d.value, v))
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
    function mw(e, t, i) {
      var o = t.pendingProps, u = o.revealOrder, d = o.tail, v = o.children;
      NN(u), kN(d, u), LN(v, u), ji(e, t, v, i);
      var g = jo.current, _ = _S(g, Jh);
      if (_)
        g = SS(g, Jh), t.flags |= _t;
      else {
        var w = e !== null && (e.flags & _t) !== nt;
        w && ON(t, t.child, i), g = Wd(g);
      }
      if (Ns(t, g), (t.mode & We) === rt)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var R = AN(t.child), j;
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
              if (K !== null && ty(K) === null) {
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
    function MN(e, t, i) {
      gS(t, t.stateNode.containerInfo);
      var o = t.pendingProps;
      return e === null ? t.child = Bd(t, null, o, i) : ji(e, t, o, i), t.child;
    }
    var gw = !1;
    function zN(e, t, i) {
      var o = t.type, u = o._context, d = t.pendingProps, v = t.memoizedProps, g = d.value;
      {
        "value" in d || gw || (gw = !0, E("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var _ = t.type.propTypes;
        _ && Mo(_, d, "prop", "Context.Provider");
      }
      if (iT(t, u, g), v !== null) {
        var w = v.value;
        if (Fe(w, g)) {
          if (v.children === d.children && !Ng())
            return Cu(e, t, i);
        } else
          OA(t, u, i);
      }
      var R = d.children;
      return ji(e, t, R, i), t.child;
    }
    var yw = !1;
    function UN(e, t, i) {
      var o = t.type;
      o._context === void 0 ? o !== o.Consumer && (yw || (yw = !0, E("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : o = o._context;
      var u = t.pendingProps, d = u.children;
      typeof d != "function" && E("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Vd(t, i);
      var v = yr(o);
      Zu(t);
      var g;
      return lv.current = t, Cr(!0), g = d(v), Cr(!1), eu(), t.flags |= Ra, ji(e, t, g, i), t.child;
    }
    function sv() {
      Io = !0;
    }
    function by(e, t) {
      (t.mode & We) === rt && e !== null && (e.alternate = null, t.alternate = null, t.flags |= sn);
    }
    function Cu(e, t, i) {
      return e !== null && (t.dependencies = e.dependencies), JT(), Sv(t.lanes), Ei(i, t.childLanes) ? (HA(e, t), t.child) : null;
    }
    function PN(e, t, i) {
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
      return !!Ei(i, t);
    }
    function jN(e, t, i) {
      switch (t.tag) {
        case F:
          cw(t), t.stateNode, Hd();
          break;
        case Y:
          bT(t);
          break;
        case A: {
          var o = t.type;
          bl(o) && Lg(t);
          break;
        }
        case H:
          gS(t, t.stateNode.containerInfo);
          break;
        case ge: {
          var u = t.memoizedProps.value, d = t.type._context;
          iT(t, d, u);
          break;
        }
        case Ce:
          {
            var v = Ei(i, t.childLanes);
            v && (t.flags |= Ve);
            {
              var g = t.stateNode;
              g.effectDuration = 0, g.passiveEffectDuration = 0;
            }
          }
          break;
        case ae: {
          var _ = t.memoizedState;
          if (_ !== null) {
            if (_.dehydrated !== null)
              return Ns(t, Wd(jo.current)), t.flags |= _t, null;
            var w = t.child, R = w.childLanes;
            if (Ei(i, R))
              return dw(e, t, i);
            Ns(t, Wd(jo.current));
            var j = Cu(e, t, i);
            return j !== null ? j.sibling : null;
          } else
            Ns(t, Wd(jo.current));
          break;
        }
        case at: {
          var U = (e.flags & _t) !== nt, G = Ei(i, t.childLanes);
          if (U) {
            if (G)
              return mw(e, t, i);
            t.flags |= _t;
          }
          var K = t.memoizedState;
          if (K !== null && (K.rendering = null, K.tail = null, K.lastEffect = null), Ns(t, jo.current), G)
            break;
          return null;
        }
        case Pe:
        case Ze:
          return t.lanes = te, lw(e, t, i);
      }
      return Cu(e, t, i);
    }
    function Ew(e, t, i) {
      if (t._debugNeedsRemount && e !== null)
        return PN(e, t, H0(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var o = e.memoizedProps, u = t.pendingProps;
        if (o !== u || Ng() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          Io = !0;
        else {
          var d = f0(e, i);
          if (!d && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & _t) === nt)
            return Io = !1, jN(e, t, i);
          (e.flags & jf) !== nt ? Io = !0 : Io = !1;
        }
      } else if (Io = !1, Kr() && cA(t)) {
        var v = t.index, g = fA();
        Wb(t, g, v);
      }
      switch (t.lanes = te, t.tag) {
        case z:
          return EN(e, t, t.type, i);
        case tt: {
          var _ = t.elementType;
          return gN(e, t, _, i);
        }
        case O: {
          var w = t.type, R = t.pendingProps, j = t.elementType === w ? R : Po(w, R);
          return r0(e, t, w, j, i);
        }
        case A: {
          var U = t.type, G = t.pendingProps, K = t.elementType === U ? G : Po(U, G);
          return sw(e, t, U, K, i);
        }
        case F:
          return hN(e, t, i);
        case Y:
          return vN(e, t, i);
        case X:
          return mN(e, t);
        case ae:
          return dw(e, t, i);
        case H:
          return MN(e, t, i);
        case ie: {
          var Z = t.type, Le = t.pendingProps, it = t.elementType === Z ? Le : Po(Z, Le);
          return iw(e, t, Z, it, i);
        }
        case fe:
          return fN(e, t, i);
        case xe:
          return dN(e, t, i);
        case Ce:
          return pN(e, t, i);
        case ge:
          return zN(e, t, i);
        case ze:
          return UN(e, t, i);
        case Ne: {
          var Ge = t.type, Pt = t.pendingProps, Lt = Po(Ge, Pt);
          if (t.type !== t.elementType) {
            var $ = Ge.propTypes;
            $ && Mo(
              $,
              Lt,
              // Resolved for outer only
              "prop",
              Ft(Ge)
            );
          }
          return Lt = Po(Ge.type, Lt), aw(e, t, Ge, Lt, i);
        }
        case De:
          return ow(e, t, t.type, t.pendingProps, i);
        case vt: {
          var J = t.type, V = t.pendingProps, pe = t.elementType === J ? V : Po(J, V);
          return yN(e, t, J, pe, i);
        }
        case at:
          return mw(e, t, i);
        case ct:
          break;
        case Pe:
          return lw(e, t, i);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Zd(e) {
      e.flags |= Ve;
    }
    function _w(e) {
      e.flags |= Li, e.flags |= Ya;
    }
    var Sw, d0, Cw, bw;
    Sw = function(e, t, i, o) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === Y || u.tag === X)
          lO(e, u.stateNode);
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
    }, Cw = function(e, t, i, o, u) {
      var d = e.memoizedProps;
      if (d !== o) {
        var v = t.stateNode, g = yS(), _ = sO(v, i, d, o, u, g);
        t.updateQueue = _, _ && Zd(t);
      }
    }, bw = function(e, t, i, o) {
      i !== o && Zd(t);
    };
    function cv(e, t) {
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
    function FN(e, t, i) {
      if (TA() && (t.mode & We) !== rt && (t.flags & _t) === nt)
        return Jb(t), Hd(), t.flags |= Yr | ll | br, !1;
      var o = jg(t);
      if (i !== null && i.dehydrated !== null)
        if (e === null) {
          if (!o)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (CA(t), Xr(t), (t.mode & Ht) !== rt) {
            var u = i !== null;
            if (u) {
              var d = t.child;
              d !== null && (t.treeBaseDuration -= d.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Hd(), (t.flags & _t) === nt && (t.memoizedState = null), t.flags |= Ve, Xr(t), (t.mode & Ht) !== rt) {
            var v = i !== null;
            if (v) {
              var g = t.child;
              g !== null && (t.treeBaseDuration -= g.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return eT(), !0;
    }
    function Tw(e, t, i) {
      var o = t.pendingProps;
      switch (j_(t), t.tag) {
        case z:
        case tt:
        case De:
        case O:
        case ie:
        case fe:
        case xe:
        case Ce:
        case ze:
        case Ne:
          return Xr(t), null;
        case A: {
          var u = t.type;
          return bl(u) && kg(t), Xr(t), null;
        }
        case F: {
          var d = t.stateNode;
          if (Yd(t), M_(t), bS(), d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null), e === null || e.child === null) {
            var v = jg(t);
            if (v)
              Zd(t);
            else if (e !== null) {
              var g = e.memoizedState;
              // Check if this is a client root
              (!g.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Yr) !== nt) && (t.flags |= er, eT());
            }
          }
          return d0(e, t), Xr(t), null;
        }
        case Y: {
          ES(t);
          var _ = CT(), w = t.type;
          if (e !== null && t.stateNode != null)
            Cw(e, t, w, o, _), e.ref !== t.ref && _w(t);
          else {
            if (!o) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Xr(t), null;
            }
            var R = yS(), j = jg(t);
            if (j)
              _A(t, _, R) && Zd(t);
            else {
              var U = oO(w, o, _, R, t);
              Sw(U, t, !1, !1), t.stateNode = U, uO(U, w, o, _) && Zd(t);
            }
            t.ref !== null && _w(t);
          }
          return Xr(t), null;
        }
        case X: {
          var G = o;
          if (e && t.stateNode != null) {
            var K = e.memoizedProps;
            bw(e, t, K, G);
          } else {
            if (typeof G != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var Z = CT(), Le = yS(), it = jg(t);
            it ? SA(t) && Zd(t) : t.stateNode = cO(G, Z, Le, t);
          }
          return Xr(t), null;
        }
        case ae: {
          Gd(t);
          var Ge = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Pt = FN(e, t, Ge);
            if (!Pt)
              return t.flags & br ? t : null;
          }
          if ((t.flags & _t) !== nt)
            return t.lanes = i, (t.mode & Ht) !== rt && KS(t), t;
          var Lt = Ge !== null, $ = e !== null && e.memoizedState !== null;
          if (Lt !== $ && Lt) {
            var J = t.child;
            if (J.flags |= ol, (t.mode & We) !== rt) {
              var V = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !we);
              V || _S(jo.current, wT) ? Ik() : A0();
            }
          }
          var pe = t.updateQueue;
          if (pe !== null && (t.flags |= Ve), Xr(t), (t.mode & Ht) !== rt && Lt) {
            var Me = t.child;
            Me !== null && (t.treeBaseDuration -= Me.treeBaseDuration);
          }
          return null;
        }
        case H:
          return Yd(t), d0(e, t), e === null && rA(t.stateNode.containerInfo), Xr(t), null;
        case ge:
          var Re = t.type._context;
          return G_(Re, t), Xr(t), null;
        case vt: {
          var ht = t.type;
          return bl(ht) && kg(t), Xr(t), null;
        }
        case at: {
          Gd(t);
          var bt = t.memoizedState;
          if (bt === null)
            return Xr(t), null;
          var on = (t.flags & _t) !== nt, Yt = bt.rendering;
          if (Yt === null)
            if (on)
              cv(bt, !1);
            else {
              var fr = $k() && (e === null || (e.flags & _t) === nt);
              if (!fr)
                for (var Wt = t.child; Wt !== null; ) {
                  var nr = ty(Wt);
                  if (nr !== null) {
                    on = !0, t.flags |= _t, cv(bt, !1);
                    var Ti = nr.updateQueue;
                    return Ti !== null && (t.updateQueue = Ti, t.flags |= Ve), t.subtreeFlags = nt, $A(t, i), Ns(t, SS(jo.current, Jh)), t.child;
                  }
                  Wt = Wt.sibling;
                }
              bt.tail !== null && tr() > Yw() && (t.flags |= _t, on = !0, cv(bt, !1), t.lanes = uh);
            }
          else {
            if (!on) {
              var ti = ty(Yt);
              if (ti !== null) {
                t.flags |= _t, on = !0;
                var Aa = ti.updateQueue;
                if (Aa !== null && (t.updateQueue = Aa, t.flags |= Ve), cv(bt, !0), bt.tail === null && bt.tailMode === "hidden" && !Yt.alternate && !Kr())
                  return Xr(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                tr() * 2 - bt.renderingStartTime > Yw() && i !== Pi && (t.flags |= _t, on = !0, cv(bt, !1), t.lanes = uh);
            }
            if (bt.isBackwards)
              Yt.sibling = t.child, t.child = Yt;
            else {
              var Hi = bt.last;
              Hi !== null ? Hi.sibling = Yt : t.child = Yt, bt.last = Yt;
            }
          }
          if (bt.tail !== null) {
            var $i = bt.tail;
            bt.rendering = $i, bt.tail = $i.sibling, bt.renderingStartTime = tr(), $i.sibling = null;
            var wi = jo.current;
            return on ? wi = SS(wi, Jh) : wi = Wd(wi), Ns(t, wi), $i;
          }
          return Xr(t), null;
        }
        case ct:
          break;
        case Pe:
        case Ze: {
          O0(t);
          var xu = t.memoizedState, op = xu !== null;
          if (e !== null) {
            var Rv = e.memoizedState, Nl = Rv !== null;
            Nl !== op && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !ne && (t.flags |= ol);
          }
          return !op || (t.mode & We) === rt ? Xr(t) : Ei(Al, Pi) && (Xr(t), t.subtreeFlags & (sn | Ve) && (t.flags |= ol)), null;
        }
        case qe:
          return null;
        case Ye:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function IN(e, t, i) {
      switch (j_(t), t.tag) {
        case A: {
          var o = t.type;
          bl(o) && kg(t);
          var u = t.flags;
          return u & br ? (t.flags = u & ~br | _t, (t.mode & Ht) !== rt && KS(t), t) : null;
        }
        case F: {
          t.stateNode, Yd(t), M_(t), bS();
          var d = t.flags;
          return (d & br) !== nt && (d & _t) === nt ? (t.flags = d & ~br | _t, t) : null;
        }
        case Y:
          return ES(t), null;
        case ae: {
          Gd(t);
          var v = t.memoizedState;
          if (v !== null && v.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Hd();
          }
          var g = t.flags;
          return g & br ? (t.flags = g & ~br | _t, (t.mode & Ht) !== rt && KS(t), t) : null;
        }
        case at:
          return Gd(t), null;
        case H:
          return Yd(t), null;
        case ge:
          var _ = t.type._context;
          return G_(_, t), null;
        case Pe:
        case Ze:
          return O0(t), null;
        case qe:
          return null;
        default:
          return null;
      }
    }
    function ww(e, t, i) {
      switch (j_(t), t.tag) {
        case A: {
          var o = t.type.childContextTypes;
          o != null && kg(t);
          break;
        }
        case F: {
          t.stateNode, Yd(t), M_(t), bS();
          break;
        }
        case Y: {
          ES(t);
          break;
        }
        case H:
          Yd(t);
          break;
        case ae:
          Gd(t);
          break;
        case at:
          Gd(t);
          break;
        case ge:
          var u = t.type._context;
          G_(u, t);
          break;
        case Pe:
        case Ze:
          O0(t);
          break;
      }
    }
    var Rw = null;
    Rw = /* @__PURE__ */ new Set();
    var Ty = !1, qr = !1, HN = typeof WeakSet == "function" ? WeakSet : Set, Ie = null, Jd = null, ep = null;
    function $N(e) {
      wa(null, function() {
        throw e;
      }), Ro();
    }
    var VN = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Ht)
        try {
          Dl(), t.componentWillUnmount();
        } finally {
          xl(e);
        }
      else
        t.componentWillUnmount();
    };
    function xw(e, t) {
      try {
        Ms(xr, e);
      } catch (i) {
        _n(e, t, i);
      }
    }
    function p0(e, t, i) {
      try {
        VN(e, i);
      } catch (o) {
        _n(e, t, o);
      }
    }
    function BN(e, t, i) {
      try {
        i.componentDidMount();
      } catch (o) {
        _n(e, t, o);
      }
    }
    function Dw(e, t) {
      try {
        Aw(e);
      } catch (i) {
        _n(e, t, i);
      }
    }
    function tp(e, t) {
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
    function wy(e, t, i) {
      try {
        i();
      } catch (o) {
        _n(e, t, o);
      }
    }
    var Ow = !1;
    function YN(e, t) {
      iO(e.containerInfo), Ie = t, WN();
      var i = Ow;
      return Ow = !1, i;
    }
    function WN() {
      for (; Ie !== null; ) {
        var e = Ie, t = e.child;
        (e.subtreeFlags & di) !== nt && t !== null ? (t.return = e, Ie = t) : GN();
      }
    }
    function GN() {
      for (; Ie !== null; ) {
        var e = Ie;
        Dn(e);
        try {
          KN(e);
        } catch (i) {
          _n(e, e.return, i);
        }
        mn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ie = t;
          return;
        }
        Ie = e.return;
      }
    }
    function KN(e) {
      var t = e.alternate, i = e.flags;
      if ((i & er) !== nt) {
        switch (Dn(e), e.tag) {
          case O:
          case ie:
          case De:
            break;
          case A: {
            if (t !== null) {
              var o = t.memoizedProps, u = t.memoizedState, d = e.stateNode;
              e.type === e.elementType && !cf && (d.props !== e.memoizedProps && E("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", yt(e) || "instance"), d.state !== e.memoizedState && E("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", yt(e) || "instance"));
              var v = d.getSnapshotBeforeUpdate(e.elementType === e.type ? o : Po(e.type, o), u);
              {
                var g = Rw;
                v === void 0 && !g.has(e.type) && (g.add(e.type), E("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", yt(e)));
              }
              d.__reactInternalSnapshotBeforeUpdate = v;
            }
            break;
          }
          case F: {
            {
              var _ = e.stateNode;
              OO(_.containerInfo);
            }
            break;
          }
          case Y:
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
            v.destroy = void 0, g !== void 0 && ((e & Qr) !== fa ? Mm(t) : (e & xr) !== fa && Ju(t), (e & Tl) !== fa && bv(!0), wy(t, i, g), (e & Tl) !== fa && bv(!1), (e & Qr) !== fa ? zm() : (e & xr) !== fa && xc());
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
            (e & Qr) !== fa ? ih(t) : (e & xr) !== fa && Um(t);
            var v = d.create;
            (e & Tl) !== fa && bv(!0), d.destroy = v(), (e & Tl) !== fa && bv(!1), (e & Qr) !== fa ? Bf() : (e & xr) !== fa && ah();
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
    function QN(e, t) {
      if ((t.flags & Ve) !== nt)
        switch (t.tag) {
          case Ce: {
            var i = t.stateNode.passiveEffectDuration, o = t.memoizedProps, u = o.id, d = o.onPostCommit, v = qT(), g = t.alternate === null ? "mount" : "update";
            XT() && (g = "nested-update"), typeof d == "function" && d(u, g, i, v);
            var _ = t.return;
            e:
              for (; _ !== null; ) {
                switch (_.tag) {
                  case F:
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
    function XN(e, t, i, o) {
      if ((i.flags & xa) !== nt)
        switch (i.tag) {
          case O:
          case ie:
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
          case A: {
            var u = i.stateNode;
            if (i.flags & Ve && !qr)
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
            g !== null && (i.type === i.elementType && !cf && (u.props !== i.memoizedProps && E("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", yt(i) || "instance"), u.state !== i.memoizedState && E("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", yt(i) || "instance")), cT(i, g, u));
            break;
          }
          case F: {
            var _ = i.updateQueue;
            if (_ !== null) {
              var w = null;
              if (i.child !== null)
                switch (i.child.tag) {
                  case Y:
                    w = i.child.stateNode;
                    break;
                  case A:
                    w = i.child.stateNode;
                    break;
                }
              cT(i, _, w);
            }
            break;
          }
          case Y: {
            var R = i.stateNode;
            if (t === null && i.flags & Ve) {
              var j = i.type, U = i.memoizedProps;
              vO(R, j, U);
            }
            break;
          }
          case X:
            break;
          case H:
            break;
          case Ce: {
            {
              var G = i.memoizedProps, K = G.onCommit, Z = G.onRender, Le = i.stateNode.effectDuration, it = qT(), Ge = t === null ? "mount" : "update";
              XT() && (Ge = "nested-update"), typeof Z == "function" && Z(i.memoizedProps.id, Ge, i.actualDuration, i.treeBaseDuration, i.actualStartTime, it);
              {
                typeof K == "function" && K(i.memoizedProps.id, Ge, Le, it), Gk(i);
                var Pt = i.return;
                e:
                  for (; Pt !== null; ) {
                    switch (Pt.tag) {
                      case F:
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
          case ae: {
            ik(e, i);
            break;
          }
          case at:
          case vt:
          case ct:
          case Pe:
          case Ze:
          case Ye:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      qr || i.flags & Li && Aw(i);
    }
    function qN(e) {
      switch (e.tag) {
        case O:
        case ie:
        case De: {
          if (e.mode & Ht)
            try {
              Dl(), xw(e, e.return);
            } finally {
              xl(e);
            }
          else
            xw(e, e.return);
          break;
        }
        case A: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && BN(e, e.return, t), Dw(e, e.return);
          break;
        }
        case Y: {
          Dw(e, e.return);
          break;
        }
      }
    }
    function ZN(e, t) {
      for (var i = null, o = e; ; ) {
        if (o.tag === Y) {
          if (i === null) {
            i = o;
            try {
              var u = o.stateNode;
              t ? wO(u) : xO(o.stateNode, o.memoizedProps);
            } catch (v) {
              _n(e, e.return, v);
            }
          }
        } else if (o.tag === X) {
          if (i === null)
            try {
              var d = o.stateNode;
              t ? RO(d) : DO(d, o.memoizedProps);
            } catch (v) {
              _n(e, e.return, v);
            }
        } else if (!((o.tag === Pe || o.tag === Ze) && o.memoizedState !== null && o !== e)) {
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
    function Aw(e) {
      var t = e.ref;
      if (t !== null) {
        var i = e.stateNode, o;
        switch (e.tag) {
          case Y:
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
    function JN(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function Nw(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, Nw(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === Y) {
          var i = e.stateNode;
          i !== null && oA(i);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function ek(e) {
      for (var t = e.return; t !== null; ) {
        if (kw(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function kw(e) {
      return e.tag === Y || e.tag === F || e.tag === H;
    }
    function Lw(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || kw(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== Y && t.tag !== X && t.tag !== ot; ) {
            if (t.flags & sn || t.child === null || t.tag === H)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & sn))
            return t.stateNode;
        }
    }
    function tk(e) {
      var t = ek(e);
      switch (t.tag) {
        case Y: {
          var i = t.stateNode;
          t.flags & Zi && (Mb(i), t.flags &= ~Zi);
          var o = Lw(e);
          v0(e, o, i);
          break;
        }
        case F:
        case H: {
          var u = t.stateNode.containerInfo, d = Lw(e);
          h0(e, d, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function h0(e, t, i) {
      var o = e.tag, u = o === Y || o === X;
      if (u) {
        var d = e.stateNode;
        t ? SO(i, d, t) : EO(i, d);
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
      var o = e.tag, u = o === Y || o === X;
      if (u) {
        var d = e.stateNode;
        t ? _O(i, d, t) : yO(i, d);
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
    function nk(e, t, i) {
      {
        var o = t;
        e:
          for (; o !== null; ) {
            switch (o.tag) {
              case Y: {
                Zr = o.stateNode, $o = !1;
                break e;
              }
              case F: {
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
        Mw(e, t, i), Zr = null, $o = !1;
      }
      JN(i);
    }
    function zs(e, t, i) {
      for (var o = i.child; o !== null; )
        Mw(e, t, o), o = o.sibling;
    }
    function Mw(e, t, i) {
      switch (km(i), i.tag) {
        case Y:
          qr || tp(i, t);
        case X: {
          {
            var o = Zr, u = $o;
            Zr = null, zs(e, t, i), Zr = o, $o = u, Zr !== null && ($o ? bO(Zr, i.stateNode) : CO(Zr, i.stateNode));
          }
          return;
        }
        case ot: {
          Zr !== null && ($o ? TO(Zr, i.stateNode) : R_(Zr, i.stateNode));
          return;
        }
        case H: {
          {
            var d = Zr, v = $o;
            Zr = i.stateNode.containerInfo, $o = !0, zs(e, t, i), Zr = d, $o = v;
          }
          return;
        }
        case O:
        case ie:
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
                  U !== void 0 && ((G & Tl) !== fa ? wy(i, t, U) : (G & xr) !== fa && (Ju(i), i.mode & Ht ? (Dl(), wy(i, t, U), xl(i)) : wy(i, t, U), xc())), R = R.next;
                } while (R !== w);
              }
            }
          }
          zs(e, t, i);
          return;
        }
        case A: {
          if (!qr) {
            tp(i, t);
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
        case Pe: {
          if (
            // TODO: Remove this dead flag
            i.mode & We
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
    function rk(e) {
      e.memoizedState;
    }
    function ik(e, t) {
      var i = t.memoizedState;
      if (i === null) {
        var o = t.alternate;
        if (o !== null) {
          var u = o.memoizedState;
          if (u !== null) {
            var d = u.dehydrated;
            d !== null && VO(d);
          }
        }
      }
    }
    function zw(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var i = e.stateNode;
        i === null && (i = e.stateNode = new HN()), t.forEach(function(o) {
          var u = eL.bind(null, e, o);
          if (!i.has(o)) {
            if (i.add(o), Ui)
              if (Jd !== null && ep !== null)
                Cv(ep, Jd);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            o.then(u, u);
          }
        });
      }
    }
    function ak(e, t, i) {
      Jd = i, ep = e, Dn(t), Uw(t, e), Dn(t), Jd = null, ep = null;
    }
    function Vo(e, t, i) {
      var o = t.deletions;
      if (o !== null)
        for (var u = 0; u < o.length; u++) {
          var d = o[u];
          try {
            nk(e, t, d);
          } catch (_) {
            _n(d, t, _);
          }
        }
      var v = ac();
      if (t.subtreeFlags & pi)
        for (var g = t.child; g !== null; )
          Dn(g), Uw(g, e), g = g.sibling;
      Dn(v);
    }
    function Uw(e, t, i) {
      var o = e.alternate, u = e.flags;
      switch (e.tag) {
        case O:
        case ie:
        case Ne:
        case De: {
          if (Vo(t, e), Ol(e), u & Ve) {
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
        case A: {
          Vo(t, e), Ol(e), u & Li && o !== null && tp(o, o.return);
          return;
        }
        case Y: {
          Vo(t, e), Ol(e), u & Li && o !== null && tp(o, o.return);
          {
            if (e.flags & Zi) {
              var d = e.stateNode;
              try {
                Mb(d);
              } catch (ht) {
                _n(e, e.return, ht);
              }
            }
            if (u & Ve) {
              var v = e.stateNode;
              if (v != null) {
                var g = e.memoizedProps, _ = o !== null ? o.memoizedProps : g, w = e.type, R = e.updateQueue;
                if (e.updateQueue = null, R !== null)
                  try {
                    mO(v, R, w, _, g, e);
                  } catch (ht) {
                    _n(e, e.return, ht);
                  }
              }
            }
          }
          return;
        }
        case X: {
          if (Vo(t, e), Ol(e), u & Ve) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var j = e.stateNode, U = e.memoizedProps, G = o !== null ? o.memoizedProps : U;
            try {
              gO(j, G, U);
            } catch (ht) {
              _n(e, e.return, ht);
            }
          }
          return;
        }
        case F: {
          if (Vo(t, e), Ol(e), u & Ve && o !== null) {
            var K = o.memoizedState;
            if (K.isDehydrated)
              try {
                $O(t.containerInfo);
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
        case ae: {
          Vo(t, e), Ol(e);
          var Z = e.child;
          if (Z.flags & ol) {
            var Le = Z.stateNode, it = Z.memoizedState, Ge = it !== null;
            if (Le.isHidden = Ge, Ge) {
              var Pt = Z.alternate !== null && Z.alternate.memoizedState !== null;
              Pt || Fk();
            }
          }
          if (u & Ve) {
            try {
              rk(e);
            } catch (ht) {
              _n(e, e.return, ht);
            }
            zw(e);
          }
          return;
        }
        case Pe: {
          var Lt = o !== null && o.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & We
          ) {
            var $ = qr;
            qr = $ || Lt, Vo(t, e), qr = $;
          } else
            Vo(t, e);
          if (Ol(e), u & ol) {
            var J = e.stateNode, V = e.memoizedState, pe = V !== null, Me = e;
            if (J.isHidden = pe, pe && !Lt && (Me.mode & We) !== rt) {
              Ie = Me;
              for (var Re = Me.child; Re !== null; )
                Ie = Re, lk(Re), Re = Re.sibling;
            }
            ZN(Me, pe);
          }
          return;
        }
        case at: {
          Vo(t, e), Ol(e), u & Ve && zw(e);
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
          tk(e);
        } catch (i) {
          _n(e, e.return, i);
        }
        e.flags &= ~sn;
      }
      t & Ba && (e.flags &= ~Ba);
    }
    function ok(e, t, i) {
      Jd = i, ep = t, Ie = e, Pw(e, t, i), Jd = null, ep = null;
    }
    function Pw(e, t, i) {
      for (var o = (e.mode & We) !== rt; Ie !== null; ) {
        var u = Ie, d = u.child;
        if (u.tag === Pe && o) {
          var v = u.memoizedState !== null, g = v || Ty;
          if (g) {
            m0(e, t, i);
            continue;
          } else {
            var _ = u.alternate, w = _ !== null && _.memoizedState !== null, R = w || qr, j = Ty, U = qr;
            Ty = g, qr = R, qr && !U && (Ie = u, uk(u));
            for (var G = d; G !== null; )
              Ie = G, Pw(
                G,
                // New root; bubble back up to here and stop.
                t,
                i
              ), G = G.sibling;
            Ie = u, Ty = j, qr = U, m0(e, t, i);
            continue;
          }
        }
        (u.subtreeFlags & xa) !== nt && d !== null ? (d.return = u, Ie = d) : m0(e, t, i);
      }
    }
    function m0(e, t, i) {
      for (; Ie !== null; ) {
        var o = Ie;
        if ((o.flags & xa) !== nt) {
          var u = o.alternate;
          Dn(o);
          try {
            XN(t, u, o, i);
          } catch (v) {
            _n(o, o.return, v);
          }
          mn();
        }
        if (o === e) {
          Ie = null;
          return;
        }
        var d = o.sibling;
        if (d !== null) {
          d.return = o.return, Ie = d;
          return;
        }
        Ie = o.return;
      }
    }
    function lk(e) {
      for (; Ie !== null; ) {
        var t = Ie, i = t.child;
        switch (t.tag) {
          case O:
          case ie:
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
          case A: {
            tp(t, t.return);
            var o = t.stateNode;
            typeof o.componentWillUnmount == "function" && p0(t, t.return, o);
            break;
          }
          case Y: {
            tp(t, t.return);
            break;
          }
          case Pe: {
            var u = t.memoizedState !== null;
            if (u) {
              jw(e);
              continue;
            }
            break;
          }
        }
        i !== null ? (i.return = t, Ie = i) : jw(e);
      }
    }
    function jw(e) {
      for (; Ie !== null; ) {
        var t = Ie;
        if (t === e) {
          Ie = null;
          return;
        }
        var i = t.sibling;
        if (i !== null) {
          i.return = t.return, Ie = i;
          return;
        }
        Ie = t.return;
      }
    }
    function uk(e) {
      for (; Ie !== null; ) {
        var t = Ie, i = t.child;
        if (t.tag === Pe) {
          var o = t.memoizedState !== null;
          if (o) {
            Fw(e);
            continue;
          }
        }
        i !== null ? (i.return = t, Ie = i) : Fw(e);
      }
    }
    function Fw(e) {
      for (; Ie !== null; ) {
        var t = Ie;
        Dn(t);
        try {
          qN(t);
        } catch (o) {
          _n(t, t.return, o);
        }
        if (mn(), t === e) {
          Ie = null;
          return;
        }
        var i = t.sibling;
        if (i !== null) {
          i.return = t.return, Ie = i;
          return;
        }
        Ie = t.return;
      }
    }
    function sk(e, t, i, o) {
      Ie = t, ck(t, e, i, o);
    }
    function ck(e, t, i, o) {
      for (; Ie !== null; ) {
        var u = Ie, d = u.child;
        (u.subtreeFlags & hi) !== nt && d !== null ? (d.return = u, Ie = d) : fk(e, t, i, o);
      }
    }
    function fk(e, t, i, o) {
      for (; Ie !== null; ) {
        var u = Ie;
        if ((u.flags & fi) !== nt) {
          Dn(u);
          try {
            dk(t, u, i, o);
          } catch (v) {
            _n(u, u.return, v);
          }
          mn();
        }
        if (u === e) {
          Ie = null;
          return;
        }
        var d = u.sibling;
        if (d !== null) {
          d.return = u.return, Ie = d;
          return;
        }
        Ie = u.return;
      }
    }
    function dk(e, t, i, o) {
      switch (t.tag) {
        case O:
        case ie:
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
    function pk(e) {
      Ie = e, hk();
    }
    function hk() {
      for (; Ie !== null; ) {
        var e = Ie, t = e.child;
        if ((Ie.flags & Vt) !== nt) {
          var i = e.deletions;
          if (i !== null) {
            for (var o = 0; o < i.length; o++) {
              var u = i[o];
              Ie = u, gk(u, e);
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
            Ie = e;
          }
        }
        (e.subtreeFlags & hi) !== nt && t !== null ? (t.return = e, Ie = t) : vk();
      }
    }
    function vk() {
      for (; Ie !== null; ) {
        var e = Ie;
        (e.flags & fi) !== nt && (Dn(e), mk(e), mn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ie = t;
          return;
        }
        Ie = e.return;
      }
    }
    function mk(e) {
      switch (e.tag) {
        case O:
        case ie:
        case De: {
          e.mode & Ht ? (GS(), Ho(Qr | Rr, e, e.return), WS(e)) : Ho(Qr | Rr, e, e.return);
          break;
        }
      }
    }
    function gk(e, t) {
      for (; Ie !== null; ) {
        var i = Ie;
        Dn(i), Ek(i, t), mn();
        var o = i.child;
        o !== null ? (o.return = i, Ie = o) : yk(e);
      }
    }
    function yk(e) {
      for (; Ie !== null; ) {
        var t = Ie, i = t.sibling, o = t.return;
        if (Nw(t), t === e) {
          Ie = null;
          return;
        }
        if (i !== null) {
          i.return = o, Ie = i;
          return;
        }
        Ie = o;
      }
    }
    function Ek(e, t) {
      switch (e.tag) {
        case O:
        case ie:
        case De: {
          e.mode & Ht ? (GS(), Ho(Qr, e, t), WS(e)) : Ho(Qr, e, t);
          break;
        }
      }
    }
    function _k(e) {
      switch (e.tag) {
        case O:
        case ie:
        case De: {
          try {
            Ms(xr | Rr, e);
          } catch (i) {
            _n(e, e.return, i);
          }
          break;
        }
        case A: {
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
    function Sk(e) {
      switch (e.tag) {
        case O:
        case ie:
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
    function Ck(e) {
      switch (e.tag) {
        case O:
        case ie:
        case De: {
          try {
            Ho(xr | Rr, e, e.return);
          } catch (i) {
            _n(e, e.return, i);
          }
          break;
        }
        case A: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && p0(e, e.return, t);
          break;
        }
      }
    }
    function bk(e) {
      switch (e.tag) {
        case O:
        case ie:
        case De:
          try {
            Ho(Qr | Rr, e, e.return);
          } catch (t) {
            _n(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var fv = Symbol.for;
      fv("selector.component"), fv("selector.has_pseudo_class"), fv("selector.role"), fv("selector.test_id"), fv("selector.text");
    }
    var Tk = [];
    function wk() {
      Tk.forEach(function(e) {
        return e();
      });
    }
    var Rk = p.ReactCurrentActQueue;
    function xk(e) {
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
        return !e && Rk.current !== null && E("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var Dk = Math.ceil, g0 = p.ReactCurrentDispatcher, y0 = p.ReactCurrentOwner, Jr = p.ReactCurrentBatchConfig, Bo = p.ReactCurrentActQueue, Ar = (
      /*             */
      0
    ), Hw = (
      /*               */
      1
    ), ei = (
      /*                */
      2
    ), io = (
      /*                */
      4
    ), bu = 0, dv = 1, ff = 2, Ry = 3, pv = 4, $w = 5, E0 = 6, Ut = Ar, Fi = null, Qn = null, Nr = te, Al = te, _0 = ws(te), kr = bu, hv = null, xy = te, vv = te, Dy = te, mv = null, da = null, S0 = 0, Vw = 500, Bw = 1 / 0, Ok = 500, Tu = null;
    function gv() {
      Bw = tr() + Ok;
    }
    function Yw() {
      return Bw;
    }
    var Oy = !1, C0 = null, np = null, df = !1, Us = null, yv = te, b0 = [], T0 = null, Ak = 50, Ev = 0, w0 = null, R0 = !1, Ay = !1, Nk = 50, rp = 0, Ny = null, _v = vn, ky = te, Ww = !1;
    function Ly() {
      return Fi;
    }
    function Ii() {
      return (Ut & (ei | io)) !== Ar ? tr() : (_v !== vn || (_v = tr()), _v);
    }
    function Ps(e) {
      var t = e.mode;
      if ((t & We) === rt)
        return lt;
      if ((Ut & ei) !== Ar && Nr !== te)
        return os(Nr);
      var i = xA() !== RA;
      if (i) {
        if (Jr.transition !== null) {
          var o = Jr.transition;
          o._updatedFibers || (o._updatedFibers = /* @__PURE__ */ new Set()), o._updatedFibers.add(e);
        }
        return ky === Yn && (ky = Ym()), ky;
      }
      var u = ia();
      if (u !== Yn)
        return u;
      var d = fO();
      return d;
    }
    function kk(e) {
      var t = e.mode;
      return (t & We) === rt ? lt : yi();
    }
    function Lr(e, t, i, o) {
      nL(), Ww && E("useInsertionEffect must not schedule updates."), R0 && (Ay = !0), su(e, i, o), (Ut & ei) !== te && e === Fi ? aL(t) : (Ui && cd(e, t, i), oL(t), e === Fi && ((Ut & ei) === Ar && (vv = Tt(vv, i)), kr === pv && js(e, Nr)), pa(e, o), i === lt && Ut === Ar && (t.mode & We) === rt && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !Bo.isBatchingLegacy && (gv(), Yb()));
    }
    function Lk(e, t, i) {
      var o = e.current;
      o.lanes = t, su(e, t, i), pa(e, i);
    }
    function Mk(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Ut & ei) !== Ar
      );
    }
    function pa(e, t) {
      var i = e.callbackNode;
      YE(e, t);
      var o = zc(e, e === Fi ? Nr : te);
      if (o === te) {
        i !== null && uR(i), e.callbackNode = null, e.callbackPriority = Yn;
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
      i != null && uR(i);
      var v;
      if (u === lt)
        e.tag === Rs ? (Bo.isBatchingLegacy !== null && (Bo.didScheduleLegacyUpdate = !0), sA(Qw.bind(null, e))) : Bb(Qw.bind(null, e)), Bo.current !== null ? Bo.current.push(xs) : pO(function() {
          (Ut & (ei | io)) === Ar && xs();
        }), v = null;
      else {
        var g;
        switch (wr(o)) {
          case Gn:
            g = vi;
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
        v = M0(g, Gw.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = v;
    }
    function Gw(e, t) {
      if (nN(), _v = vn, ky = te, (Ut & (ei | io)) !== Ar)
        throw new Error("Should not already be working.");
      var i = e.callbackNode, o = Ru();
      if (o && e.callbackNode !== i)
        return null;
      var u = zc(e, e === Fi ? Nr : te);
      if (u === te)
        return null;
      var d = !Pc(e, u) && !Bm(e, u) && !t, v = d ? Bk(e, u) : zy(e, u);
      if (v !== bu) {
        if (v === ff) {
          var g = ml(e);
          g !== te && (u = g, v = x0(e, g));
        }
        if (v === dv) {
          var _ = hv;
          throw pf(e, te), js(e, u), pa(e, tr()), _;
        }
        if (v === E0)
          js(e, u);
        else {
          var w = !Pc(e, u), R = e.current.alternate;
          if (w && !Uk(R)) {
            if (v = zy(e, u), v === ff) {
              var j = ml(e);
              j !== te && (u = j, v = x0(e, j));
            }
            if (v === dv) {
              var U = hv;
              throw pf(e, te), js(e, u), pa(e, tr()), U;
            }
          }
          e.finishedWork = R, e.finishedLanes = u, zk(e, v, u);
        }
      }
      return pa(e, tr()), e.callbackNode === i ? Gw.bind(null, e) : null;
    }
    function x0(e, t) {
      var i = mv;
      if (fd(e)) {
        var o = pf(e, t);
        o.flags |= Yr, nA(e.containerInfo);
      }
      var u = zy(e, t);
      if (u !== ff) {
        var d = da;
        da = i, d !== null && Kw(d);
      }
      return u;
    }
    function Kw(e) {
      da === null ? da = e : da.push.apply(da, e);
    }
    function zk(e, t, i) {
      switch (t) {
        case bu:
        case dv:
          throw new Error("Root did not complete. This is a bug in React.");
        case ff: {
          hf(e, da, Tu);
          break;
        }
        case Ry: {
          if (js(e, i), Hm(i) && // do not delay if we're inside an act() scope
          !sR()) {
            var o = S0 + Vw - tr();
            if (o > 10) {
              var u = zc(e, te);
              if (u !== te)
                break;
              var d = e.suspendedLanes;
              if (!uu(d, i)) {
                Ii(), ud(e, d);
                break;
              }
              e.timeoutHandle = T_(hf.bind(null, e, da, Tu), o);
              break;
            }
          }
          hf(e, da, Tu);
          break;
        }
        case pv: {
          if (js(e, i), Vm(i))
            break;
          if (!sR()) {
            var v = ad(e, i), g = v, _ = tr() - g, w = tL(_) - _;
            if (w > 10) {
              e.timeoutHandle = T_(hf.bind(null, e, da, Tu), w);
              break;
            }
          }
          hf(e, da, Tu);
          break;
        }
        case $w: {
          hf(e, da, Tu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function Uk(e) {
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
      t = jc(t, Dy), t = jc(t, vv), Gm(e, t);
    }
    function Qw(e) {
      if (rN(), (Ut & (ei | io)) !== Ar)
        throw new Error("Should not already be working.");
      Ru();
      var t = zc(e, te);
      if (!Ei(t, lt))
        return pa(e, tr()), null;
      var i = zy(e, t);
      if (e.tag !== Rs && i === ff) {
        var o = ml(e);
        o !== te && (t = o, i = x0(e, o));
      }
      if (i === dv) {
        var u = hv;
        throw pf(e, te), js(e, t), pa(e, tr()), u;
      }
      if (i === E0)
        throw new Error("Root did not complete. This is a bug in React.");
      var d = e.current.alternate;
      return e.finishedWork = d, e.finishedLanes = t, hf(e, da, Tu), pa(e, tr()), null;
    }
    function Pk(e, t) {
      t !== te && (dh(e, Tt(t, lt)), pa(e, tr()), (Ut & (ei | io)) === Ar && (gv(), xs()));
    }
    function D0(e, t) {
      var i = Ut;
      Ut |= Hw;
      try {
        return e(t);
      } finally {
        Ut = i, Ut === Ar && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !Bo.isBatchingLegacy && (gv(), Yb());
      }
    }
    function jk(e, t, i, o, u) {
      var d = ia(), v = Jr.transition;
      try {
        return Jr.transition = null, Pn(Gn), e(t, i, o, u);
      } finally {
        Pn(d), Jr.transition = v, Ut === Ar && gv();
      }
    }
    function wu(e) {
      Us !== null && Us.tag === Rs && (Ut & (ei | io)) === Ar && Ru();
      var t = Ut;
      Ut |= Hw;
      var i = Jr.transition, o = ia();
      try {
        return Jr.transition = null, Pn(Gn), e ? e() : void 0;
      } finally {
        Pn(o), Jr.transition = i, Ut = t, (Ut & (ei | io)) === Ar && xs();
      }
    }
    function Xw() {
      return (Ut & (ei | io)) !== Ar;
    }
    function My(e, t) {
      Ci(_0, Al, e), Al = Tt(Al, t);
    }
    function O0(e) {
      Al = _0.current, Si(_0, e);
    }
    function pf(e, t) {
      e.finishedWork = null, e.finishedLanes = te;
      var i = e.timeoutHandle;
      if (i !== w_ && (e.timeoutHandle = w_, dO(i)), Qn !== null)
        for (var o = Qn.return; o !== null; ) {
          var u = o.alternate;
          ww(u, o), o = o.return;
        }
      Fi = e;
      var d = vf(e.current, null);
      return Qn = d, Nr = Al = t, kr = bu, hv = null, xy = te, vv = te, Dy = te, mv = null, da = null, NA(), Uo.discardPendingWarnings(), d;
    }
    function qw(e, t) {
      do {
        var i = Qn;
        try {
          if ($g(), xT(), mn(), y0.current = null, i === null || i.return === null) {
            kr = dv, hv = t, Qn = null;
            return;
          }
          if (wt && i.mode & Ht && _y(i, !0), Et)
            if (eu(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var o = t;
              jm(i, o, Nr);
            } else
              Pm(i, t, Nr);
          uN(e, i.return, i, t, Nr), tR(i);
        } catch (u) {
          t = u, Qn === i && i !== null ? (i = i.return, Qn = i) : i = Qn;
          continue;
        }
        return;
      } while (!0);
    }
    function Zw() {
      var e = g0.current;
      return g0.current = vy, e === null ? vy : e;
    }
    function Jw(e) {
      g0.current = e;
    }
    function Fk() {
      S0 = tr();
    }
    function Sv(e) {
      xy = Tt(e, xy);
    }
    function Ik() {
      kr === bu && (kr = Ry);
    }
    function A0() {
      (kr === bu || kr === Ry || kr === ff) && (kr = pv), Fi !== null && (Uc(xy) || Uc(vv)) && js(Fi, Nr);
    }
    function Hk(e) {
      kr !== pv && (kr = ff), mv === null ? mv = [e] : mv.push(e);
    }
    function $k() {
      return kr === bu;
    }
    function zy(e, t) {
      var i = Ut;
      Ut |= ei;
      var o = Zw();
      if (Fi !== e || Nr !== t) {
        if (Ui) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Cv(e, Nr), u.clear()), ph(e, t);
        }
        Tu = Ic(), pf(e, t);
      }
      ts(t);
      do
        try {
          Vk();
          break;
        } catch (d) {
          qw(e, d);
        }
      while (!0);
      if ($g(), Ut = i, Jw(o), Qn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return pl(), Fi = null, Nr = te, kr;
    }
    function Vk() {
      for (; Qn !== null; )
        eR(Qn);
    }
    function Bk(e, t) {
      var i = Ut;
      Ut |= ei;
      var o = Zw();
      if (Fi !== e || Nr !== t) {
        if (Ui) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Cv(e, Nr), u.clear()), ph(e, t);
        }
        Tu = Ic(), gv(), pf(e, t);
      }
      ts(t);
      do
        try {
          Yk();
          break;
        } catch (d) {
          qw(e, d);
        }
      while (!0);
      return $g(), Jw(o), Ut = i, Qn !== null ? (Oc(), bu) : (pl(), Fi = null, Nr = te, kr);
    }
    function Yk() {
      for (; Qn !== null && !Am(); )
        eR(Qn);
    }
    function eR(e) {
      var t = e.alternate;
      Dn(e);
      var i;
      (e.mode & Ht) !== rt ? (YS(e), i = N0(t, e, Al), _y(e, !0)) : i = N0(t, e, Al), mn(), e.memoizedProps = e.pendingProps, i === null ? tR(e) : Qn = i, y0.current = null;
    }
    function tR(e) {
      var t = e;
      do {
        var i = t.alternate, o = t.return;
        if ((t.flags & ll) === nt) {
          Dn(t);
          var u = void 0;
          if ((t.mode & Ht) === rt ? u = Tw(i, t, Al) : (YS(t), u = Tw(i, t, Al), _y(t, !1)), mn(), u !== null) {
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
            _y(t, !1);
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
      kr === bu && (kr = $w);
    }
    function hf(e, t, i) {
      var o = ia(), u = Jr.transition;
      try {
        Jr.transition = null, Pn(Gn), Wk(e, t, i, o);
      } finally {
        Jr.transition = u, Pn(o);
      }
      return null;
    }
    function Wk(e, t, i, o) {
      do
        Ru();
      while (Us !== null);
      if (rL(), (Ut & (ei | io)) !== Ar)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, d = e.finishedLanes;
      if (Lm(d), u === null)
        return Rc(), null;
      if (d === te && E("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = te, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Yn;
      var v = Tt(u.lanes, u.childLanes);
      sd(e, v), e === Fi && (Fi = null, Qn = null, Nr = te), ((u.subtreeFlags & hi) !== nt || (u.flags & hi) !== nt) && (df || (df = !0, T0 = i, M0(Wa, function() {
        return Ru(), null;
      })));
      var g = (u.subtreeFlags & (di | pi | xa | hi)) !== nt, _ = (u.flags & (di | pi | xa | hi)) !== nt;
      if (g || _) {
        var w = Jr.transition;
        Jr.transition = null;
        var R = ia();
        Pn(Gn);
        var j = Ut;
        Ut |= io, y0.current = null, YN(e, u), ZT(), ak(e, u, d), aO(e.containerInfo), e.current = u, es(d), ok(u, e, d), Fm(), Qu(), Ut = j, Pn(R), Jr.transition = w;
      } else
        e.current = u, ZT();
      var U = df;
      if (df ? (df = !1, Us = e, yv = d) : (rp = 0, Ny = null), v = e.pendingLanes, v === te && (np = null), U || aR(e.current, !1), fl(u.stateNode, o), Ui && e.memoizedUpdaters.clear(), wk(), pa(e, tr()), t !== null)
        for (var G = e.onRecoverableError, K = 0; K < t.length; K++) {
          var Z = t[K], Le = Z.stack, it = Z.digest;
          G(Z.value, {
            componentStack: Le,
            digest: it
          });
        }
      if (Oy) {
        Oy = !1;
        var Ge = C0;
        throw C0 = null, Ge;
      }
      return Ei(yv, lt) && e.tag !== Rs && Ru(), v = e.pendingLanes, Ei(v, lt) ? (tN(), e === w0 ? Ev++ : (Ev = 0, w0 = e)) : Ev = 0, xs(), Rc(), null;
    }
    function Ru() {
      if (Us !== null) {
        var e = wr(yv), t = QE(Qa, e), i = Jr.transition, o = ia();
        try {
          return Jr.transition = null, Pn(t), Kk();
        } finally {
          Pn(o), Jr.transition = i;
        }
      }
      return !1;
    }
    function Gk(e) {
      b0.push(e), df || (df = !0, M0(Wa, function() {
        return Ru(), null;
      }));
    }
    function Kk() {
      if (Us === null)
        return !1;
      var e = T0;
      T0 = null;
      var t = Us, i = yv;
      if (Us = null, yv = te, (Ut & (ei | io)) !== Ar)
        throw new Error("Cannot flush passive effects while already rendering.");
      R0 = !0, Ay = !1, Dc(i);
      var o = Ut;
      Ut |= io, pk(t.current), sk(t, t.current, i, e);
      {
        var u = b0;
        b0 = [];
        for (var d = 0; d < u.length; d++) {
          var v = u[d];
          QN(t, v);
        }
      }
      Ga(), aR(t.current, !0), Ut = o, xs(), Ay ? t === Ny ? rp++ : (rp = 0, Ny = t) : rp = 0, R0 = !1, Ay = !1, rh(t);
      {
        var g = t.current.stateNode;
        g.effectDuration = 0, g.passiveEffectDuration = 0;
      }
      return !0;
    }
    function nR(e) {
      return np !== null && np.has(e);
    }
    function Qk(e) {
      np === null ? np = /* @__PURE__ */ new Set([e]) : np.add(e);
    }
    function Xk(e) {
      Oy || (Oy = !0, C0 = e);
    }
    var qk = Xk;
    function rR(e, t, i) {
      var o = sf(i, t), u = ew(e, o, lt), d = Os(e, u, lt), v = Ii();
      d !== null && (su(d, lt, v), pa(d, v));
    }
    function _n(e, t, i) {
      if ($N(i), bv(!1), e.tag === F) {
        rR(e, e, i);
        return;
      }
      var o = null;
      for (o = t; o !== null; ) {
        if (o.tag === F) {
          rR(o, e, i);
          return;
        } else if (o.tag === A) {
          var u = o.type, d = o.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof d.componentDidCatch == "function" && !nR(d)) {
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
    function Zk(e, t, i) {
      var o = e.pingCache;
      o !== null && o.delete(t);
      var u = Ii();
      ud(e, i), lL(e), Fi === e && uu(Nr, i) && (kr === pv || kr === Ry && Hm(Nr) && tr() - S0 < Vw ? pf(e, te) : Dy = Tt(Dy, i)), pa(e, u);
    }
    function iR(e, t) {
      t === Yn && (t = kk(e));
      var i = Ii(), o = ca(e, t);
      o !== null && (su(o, t, i), pa(o, i));
    }
    function Jk(e) {
      var t = e.memoizedState, i = Yn;
      t !== null && (i = t.retryLane), iR(e, i);
    }
    function eL(e, t) {
      var i = Yn, o;
      switch (e.tag) {
        case ae:
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
      o !== null && o.delete(t), iR(e, i);
    }
    function tL(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : Dk(e / 1960) * 1960;
    }
    function nL() {
      if (Ev > Ak)
        throw Ev = 0, w0 = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      rp > Nk && (rp = 0, Ny = null, E("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function rL() {
      Uo.flushLegacyContextWarning(), Uo.flushPendingUnsafeLifecycleWarnings();
    }
    function aR(e, t) {
      Dn(e), Uy(e, ea, Ck), t && Uy(e, Zl, bk), Uy(e, ea, _k), t && Uy(e, Zl, Sk), mn();
    }
    function Uy(e, t, i) {
      for (var o = e, u = null; o !== null; ) {
        var d = o.subtreeFlags & t;
        o !== u && o.child !== null && d !== nt ? o = o.child : ((o.flags & t) !== nt && i(o), o.sibling !== null ? o = o.sibling : o = u = o.return);
      }
    }
    var Py = null;
    function oR(e) {
      {
        if ((Ut & ei) !== Ar || !(e.mode & We))
          return;
        var t = e.tag;
        if (t !== z && t !== F && t !== A && t !== O && t !== ie && t !== Ne && t !== De)
          return;
        var i = yt(e) || "ReactComponent";
        if (Py !== null) {
          if (Py.has(i))
            return;
          Py.add(i);
        } else
          Py = /* @__PURE__ */ new Set([i]);
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
      var iL = null;
      N0 = function(e, t, i) {
        var o = hR(iL, t);
        try {
          return Ew(e, t, i);
        } catch (d) {
          if (gA() || d !== null && typeof d == "object" && typeof d.then == "function")
            throw d;
          if ($g(), xT(), ww(e, t), hR(t, o), t.mode & Ht && YS(t), wa(null, Ew, null, e, t, i), $E()) {
            var u = Ro();
            typeof u == "object" && u !== null && u._suppressLogging && typeof d == "object" && d !== null && !d._suppressLogging && (d._suppressLogging = !0);
          }
          throw d;
        }
      };
    }
    var lR = !1, k0;
    k0 = /* @__PURE__ */ new Set();
    function aL(e) {
      if (ui && !ZA())
        switch (e.tag) {
          case O:
          case ie:
          case De: {
            var t = Qn && yt(Qn) || "Unknown", i = t;
            if (!k0.has(i)) {
              k0.add(i);
              var o = yt(e) || "Unknown";
              E("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", o, t, t);
            }
            break;
          }
          case A: {
            lR || (E("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), lR = !0);
            break;
          }
        }
    }
    function Cv(e, t) {
      if (Ui) {
        var i = e.memoizedUpdaters;
        i.forEach(function(o) {
          cd(e, o, t);
        });
      }
    }
    var L0 = {};
    function M0(e, t) {
      {
        var i = Bo.current;
        return i !== null ? (i.push(t), L0) : eh(e, t);
      }
    }
    function uR(e) {
      if (e !== L0)
        return $f(e);
    }
    function sR() {
      return Bo.current !== null;
    }
    function oL(e) {
      {
        if (e.mode & We) {
          if (!Iw())
            return;
        } else if (!xk() || Ut !== Ar || e.tag !== O && e.tag !== ie && e.tag !== De)
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
    function lL(e) {
      e.tag !== Rs && Iw() && Bo.current === null && E(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function bv(e) {
      Ww = e;
    }
    var ao = null, ip = null, uL = function(e) {
      ao = e;
    };
    function ap(e) {
      {
        if (ao === null)
          return e;
        var t = ao(e);
        return t === void 0 ? e : t.current;
      }
    }
    function z0(e) {
      return ap(e);
    }
    function U0(e) {
      {
        if (ao === null)
          return e;
        var t = ao(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var i = ap(e.render);
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
    function cR(e, t) {
      {
        if (ao === null)
          return !1;
        var i = e.elementType, o = t.type, u = !1, d = typeof o == "object" && o !== null ? o.$$typeof : null;
        switch (e.tag) {
          case A: {
            typeof o == "function" && (u = !0);
            break;
          }
          case O: {
            (typeof o == "function" || d === et) && (u = !0);
            break;
          }
          case ie: {
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
    function fR(e) {
      {
        if (ao === null || typeof WeakSet != "function")
          return;
        ip === null && (ip = /* @__PURE__ */ new WeakSet()), ip.add(e);
      }
    }
    var sL = function(e, t) {
      {
        if (ao === null)
          return;
        var i = t.staleFamilies, o = t.updatedFamilies;
        Ru(), wu(function() {
          P0(e.current, o, i);
        });
      }
    }, cL = function(e, t) {
      {
        if (e.context !== Da)
          return;
        Ru(), wu(function() {
          Tv(t, e, null, null);
        });
      }
    };
    function P0(e, t, i) {
      {
        var o = e.alternate, u = e.child, d = e.sibling, v = e.tag, g = e.type, _ = null;
        switch (v) {
          case O:
          case De:
          case A:
            _ = g;
            break;
          case ie:
            _ = g.render;
            break;
        }
        if (ao === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var w = !1, R = !1;
        if (_ !== null) {
          var j = ao(_);
          j !== void 0 && (i.has(j) ? R = !0 : t.has(j) && (v === A ? R = !0 : w = !0));
        }
        if (ip !== null && (ip.has(e) || o !== null && ip.has(o)) && (R = !0), R && (e._debugNeedsRemount = !0), R || w) {
          var U = ca(e, lt);
          U !== null && Lr(U, e, lt, vn);
        }
        u !== null && !R && P0(u, t, i), d !== null && P0(d, t, i);
      }
    }
    var fL = function(e, t) {
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
          case O:
          case De:
          case A:
            g = v;
            break;
          case ie:
            g = v.render;
            break;
        }
        var _ = !1;
        g !== null && t.has(g) && (_ = !0), _ ? dL(e, i) : o !== null && j0(o, t, i), u !== null && j0(u, t, i);
      }
    }
    function dL(e, t) {
      {
        var i = pL(e, t);
        if (i)
          return;
        for (var o = e; ; ) {
          switch (o.tag) {
            case Y:
              t.add(o.stateNode);
              return;
            case H:
              t.add(o.stateNode.containerInfo);
              return;
            case F:
              t.add(o.stateNode.containerInfo);
              return;
          }
          if (o.return === null)
            throw new Error("Expected to reach root first.");
          o = o.return;
        }
      }
    }
    function pL(e, t) {
      for (var i = e, o = !1; ; ) {
        if (i.tag === Y)
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
    var F0;
    {
      F0 = !1;
      try {
        var dR = Object.preventExtensions({});
      } catch {
        F0 = !0;
      }
    }
    function hL(e, t, i, o) {
      this.tag = e, this.key = i, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = o, this.flags = nt, this.subtreeFlags = nt, this.deletions = null, this.lanes = te, this.childLanes = te, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !F0 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var Oa = function(e, t, i, o) {
      return new hL(e, t, i, o);
    };
    function I0(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function vL(e) {
      return typeof e == "function" && !I0(e) && e.defaultProps === void 0;
    }
    function mL(e) {
      if (typeof e == "function")
        return I0(e) ? A : O;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Te)
          return ie;
        if (t === Rt)
          return Ne;
      }
      return z;
    }
    function vf(e, t) {
      var i = e.alternate;
      i === null ? (i = Oa(e.tag, t, e.key, e.mode), i.elementType = e.elementType, i.type = e.type, i.stateNode = e.stateNode, i._debugSource = e._debugSource, i._debugOwner = e._debugOwner, i._debugHookTypes = e._debugHookTypes, i.alternate = e, e.alternate = i) : (i.pendingProps = t, i.type = e.type, i.flags = nt, i.subtreeFlags = nt, i.deletions = null, i.actualDuration = 0, i.actualStartTime = -1), i.flags = e.flags & Tr, i.childLanes = e.childLanes, i.lanes = e.lanes, i.child = e.child, i.memoizedProps = e.memoizedProps, i.memoizedState = e.memoizedState, i.updateQueue = e.updateQueue;
      var o = e.dependencies;
      switch (i.dependencies = o === null ? null : {
        lanes: o.lanes,
        firstContext: o.firstContext
      }, i.sibling = e.sibling, i.index = e.index, i.ref = e.ref, i.selfBaseDuration = e.selfBaseDuration, i.treeBaseDuration = e.treeBaseDuration, i._debugNeedsRemount = e._debugNeedsRemount, i.tag) {
        case z:
        case O:
        case De:
          i.type = ap(e.type);
          break;
        case A:
          i.type = z0(e.type);
          break;
        case ie:
          i.type = U0(e.type);
          break;
      }
      return i;
    }
    function gL(e, t) {
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
    function yL(e, t, i) {
      var o;
      return e === Mg ? (o = We, t === !0 && (o |= zn, o |= na)) : o = rt, Ui && (o |= Ht), Oa(F, null, null, o);
    }
    function H0(e, t, i, o, u, d) {
      var v = z, g = e;
      if (typeof e == "function")
        I0(e) ? (v = A, g = z0(g)) : g = ap(g);
      else if (typeof e == "string")
        v = Y;
      else
        e:
          switch (e) {
            case Ai:
              return Fs(i.children, u, d, t);
            case po:
              v = xe, u |= zn, (u & We) !== rt && (u |= na);
              break;
            case k:
              return EL(i, u, d, t);
            case Nt:
              return _L(i, u, d, t);
            case zt:
              return SL(i, u, d, t);
            case dn:
              return pR(i, u, d, t);
            case Fr:
            case Jn:
            case Pa:
            case pn:
            case fn:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case le:
                    v = ge;
                    break e;
                  case Ee:
                    v = ze;
                    break e;
                  case Te:
                    v = ie, g = U0(g);
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
    function Fs(e, t, i, o) {
      var u = Oa(fe, e, o, t);
      return u.lanes = i, u;
    }
    function EL(e, t, i, o) {
      typeof e.id != "string" && E('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = Oa(Ce, e, o, t | Ht);
      return u.elementType = k, u.lanes = i, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function _L(e, t, i, o) {
      var u = Oa(ae, e, o, t);
      return u.elementType = Nt, u.lanes = i, u;
    }
    function SL(e, t, i, o) {
      var u = Oa(at, e, o, t);
      return u.elementType = zt, u.lanes = i, u;
    }
    function pR(e, t, i, o) {
      var u = Oa(Pe, e, o, t);
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
    function CL() {
      var e = Oa(Y, null, null, rt);
      return e.elementType = "DELETED", e;
    }
    function bL(e) {
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
    function hR(e, t) {
      return e === null && (e = Oa(z, null, null, rt)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function TL(e, t, i, o, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = w_, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Yn, this.eventTimes = Fc(te), this.expirationTimes = Fc(vn), this.pendingLanes = te, this.suspendedLanes = te, this.pingedLanes = te, this.expiredLanes = te, this.mutableReadLanes = te, this.finishedLanes = te, this.entangledLanes = te, this.entanglements = Fc(te), this.identifierPrefix = o, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var d = this.pendingUpdatersLaneMap = [], v = 0; v < Bn; v++)
          d.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Mg:
          this._debugRootType = i ? "hydrateRoot()" : "createRoot()";
          break;
        case Rs:
          this._debugRootType = i ? "hydrate()" : "render()";
          break;
      }
    }
    function vR(e, t, i, o, u, d, v, g, _, w) {
      var R = new TL(e, t, i, g, _), j = yL(t, d);
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
    function wL(e, t, i) {
      var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Cn(o), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: ai,
        key: o == null ? null : "" + o,
        children: e,
        containerInfo: t,
        implementation: i
      };
    }
    var W0, G0;
    W0 = !1, G0 = {};
    function mR(e) {
      if (!e)
        return Da;
      var t = Va(e), i = uA(t);
      if (t.tag === A) {
        var o = t.type;
        if (bl(o))
          return $b(t, o, i);
      }
      return i;
    }
    function RL(e, t) {
      {
        var i = Va(e);
        if (i === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var o = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + o);
        }
        var u = qp(i);
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
    function gR(e, t, i, o, u, d, v, g) {
      var _ = !1, w = null;
      return vR(e, t, _, w, i, o, u, d, v);
    }
    function yR(e, t, i, o, u, d, v, g, _, w) {
      var R = !0, j = vR(i, o, R, e, u, d, v, g, _);
      j.context = mR(null);
      var U = j.current, G = Ii(), K = Ps(U), Z = Su(G, K);
      return Z.callback = t ?? null, Os(U, Z, K), Lk(j, K, G), j;
    }
    function Tv(e, t, i, o) {
      Do(t, e);
      var u = t.current, d = Ii(), v = Ps(u);
      oh(v);
      var g = mR(i);
      t.context === null ? t.context = g : t.pendingContext = g, ui && xn !== null && !W0 && (W0 = !0, E(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, yt(xn) || "Unknown"));
      var _ = Su(d, v);
      _.payload = {
        element: e
      }, o = o === void 0 ? null : o, o !== null && (typeof o != "function" && E("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", o), _.callback = o);
      var w = Os(u, _, v);
      return w !== null && (Lr(w, u, v, d), Gg(w, u, v)), v;
    }
    function jy(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case Y:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function xL(e) {
      switch (e.tag) {
        case F: {
          var t = e.stateNode;
          if (fd(t)) {
            var i = WE(t);
            Pk(t, i);
          }
          break;
        }
        case ae: {
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
    function ER(e, t) {
      var i = e.memoizedState;
      i !== null && i.dehydrated !== null && (i.retryLane = Wm(i.retryLane, t));
    }
    function K0(e, t) {
      ER(e, t);
      var i = e.alternate;
      i && ER(i, t);
    }
    function DL(e) {
      if (e.tag === ae) {
        var t = lu, i = ca(e, t);
        if (i !== null) {
          var o = Ii();
          Lr(i, e, t, o);
        }
        K0(e, t);
      }
    }
    function OL(e) {
      if (e.tag === ae) {
        var t = Ps(e), i = ca(e, t);
        if (i !== null) {
          var o = Ii();
          Lr(i, e, t, o);
        }
        K0(e, t);
      }
    }
    function _R(e) {
      var t = Jp(e);
      return t === null ? null : t.stateNode;
    }
    var SR = function(e) {
      return null;
    };
    function AL(e) {
      return SR(e);
    }
    var CR = function(e) {
      return !1;
    };
    function NL(e) {
      return CR(e);
    }
    var bR = null, TR = null, wR = null, RR = null, xR = null, DR = null, OR = null, AR = null, NR = null;
    {
      var kR = function(e, t, i) {
        var o = t[i], u = It(e) ? e.slice() : Dt({}, e);
        return i + 1 === t.length ? (It(u) ? u.splice(o, 1) : delete u[o], u) : (u[o] = kR(e[o], t, i + 1), u);
      }, LR = function(e, t) {
        return kR(e, t, 0);
      }, MR = function(e, t, i, o) {
        var u = t[o], d = It(e) ? e.slice() : Dt({}, e);
        if (o + 1 === t.length) {
          var v = i[o];
          d[v] = d[u], It(d) ? d.splice(u, 1) : delete d[u];
        } else
          d[u] = MR(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            i,
            o + 1
          );
        return d;
      }, zR = function(e, t, i) {
        if (t.length !== i.length) {
          T("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var o = 0; o < i.length - 1; o++)
            if (t[o] !== i[o]) {
              T("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return MR(e, t, i, 0);
      }, UR = function(e, t, i, o) {
        if (i >= t.length)
          return o;
        var u = t[i], d = It(e) ? e.slice() : Dt({}, e);
        return d[u] = UR(e[u], t, i + 1, o), d;
      }, PR = function(e, t, i) {
        return UR(e, t, 0, i);
      }, Q0 = function(e, t) {
        for (var i = e.memoizedState; i !== null && t > 0; )
          i = i.next, t--;
        return i;
      };
      bR = function(e, t, i, o) {
        var u = Q0(e, t);
        if (u !== null) {
          var d = PR(u.memoizedState, i, o);
          u.memoizedState = d, u.baseState = d, e.memoizedProps = Dt({}, e.memoizedProps);
          var v = ca(e, lt);
          v !== null && Lr(v, e, lt, vn);
        }
      }, TR = function(e, t, i) {
        var o = Q0(e, t);
        if (o !== null) {
          var u = LR(o.memoizedState, i);
          o.memoizedState = u, o.baseState = u, e.memoizedProps = Dt({}, e.memoizedProps);
          var d = ca(e, lt);
          d !== null && Lr(d, e, lt, vn);
        }
      }, wR = function(e, t, i, o) {
        var u = Q0(e, t);
        if (u !== null) {
          var d = zR(u.memoizedState, i, o);
          u.memoizedState = d, u.baseState = d, e.memoizedProps = Dt({}, e.memoizedProps);
          var v = ca(e, lt);
          v !== null && Lr(v, e, lt, vn);
        }
      }, RR = function(e, t, i) {
        e.pendingProps = PR(e.memoizedProps, t, i), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var o = ca(e, lt);
        o !== null && Lr(o, e, lt, vn);
      }, xR = function(e, t) {
        e.pendingProps = LR(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = ca(e, lt);
        i !== null && Lr(i, e, lt, vn);
      }, DR = function(e, t, i) {
        e.pendingProps = zR(e.memoizedProps, t, i), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var o = ca(e, lt);
        o !== null && Lr(o, e, lt, vn);
      }, OR = function(e) {
        var t = ca(e, lt);
        t !== null && Lr(t, e, lt, vn);
      }, AR = function(e) {
        SR = e;
      }, NR = function(e) {
        CR = e;
      };
    }
    function kL(e) {
      var t = qp(e);
      return t === null ? null : t.stateNode;
    }
    function LL(e) {
      return null;
    }
    function ML() {
      return xn;
    }
    function zL(e) {
      var t = e.findFiberByHostInstance, i = p.ReactCurrentDispatcher;
      return Nm({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: bR,
        overrideHookStateDeletePath: TR,
        overrideHookStateRenamePath: wR,
        overrideProps: RR,
        overridePropsDeletePath: xR,
        overridePropsRenamePath: DR,
        setErrorHandler: AR,
        setSuspenseHandler: NR,
        scheduleUpdate: OR,
        currentDispatcherRef: i,
        findHostInstanceByFiber: kL,
        findFiberByHostInstance: t || LL,
        // React Refresh
        findHostInstancesForRefresh: fL,
        scheduleRefresh: sL,
        scheduleRoot: cL,
        setRefreshHandler: uL,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: ML,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: Y0
      });
    }
    var jR = typeof reportError == "function" ? (
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
        typeof arguments[1] == "function" ? E("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Iy(arguments[1]) ? E("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && E("You passed a second argument to root.render(...) but it only accepts one argument.");
        var i = t.containerInfo;
        if (i.nodeType !== Mn) {
          var o = _R(t.current);
          o && o.parentNode !== i && E("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Tv(e, t, null, null);
    }, Fy.prototype.unmount = X0.prototype.unmount = function() {
      typeof arguments[0] == "function" && E("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Xw() && E("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), wu(function() {
          Tv(null, e, null, null);
        }), Pb(t);
      }
    };
    function UL(e, t) {
      if (!Iy(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      FR(e);
      var i = !1, o = !1, u = "", d = jR;
      t != null && (t.hydrate ? T("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === ii && E(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (i = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (d = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var v = gR(e, Mg, null, i, o, u, d);
      xg(v.current, e);
      var g = e.nodeType === Mn ? e.parentNode : e;
      return kh(g), new X0(v);
    }
    function Fy(e) {
      this._internalRoot = e;
    }
    function PL(e) {
      e && ZE(e);
    }
    Fy.prototype.unstable_scheduleHydration = PL;
    function jL(e, t, i) {
      if (!Iy(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      FR(e), t === void 0 && E("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var o = i ?? null, u = i != null && i.hydratedSources || null, d = !1, v = !1, g = "", _ = jR;
      i != null && (i.unstable_strictMode === !0 && (d = !0), i.identifierPrefix !== void 0 && (g = i.identifierPrefix), i.onRecoverableError !== void 0 && (_ = i.onRecoverableError));
      var w = yR(t, null, e, Mg, o, d, v, g, _);
      if (xg(w.current, e), kh(e), u)
        for (var R = 0; R < u.length; R++) {
          var j = u[R];
          WA(w, j);
        }
      return new Fy(w);
    }
    function Iy(e) {
      return !!(e && (e.nodeType === ci || e.nodeType === Ni || e.nodeType === Mp || !Je));
    }
    function wv(e) {
      return !!(e && (e.nodeType === ci || e.nodeType === Ni || e.nodeType === Mp || e.nodeType === Mn && e.nodeValue === " react-mount-point-unstable "));
    }
    function FR(e) {
      e.nodeType === ci && e.tagName && e.tagName.toUpperCase() === "BODY" && E("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Vh(e) && (e._reactRootContainer ? E("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : E("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var FL = p.ReactCurrentOwner, IR;
    IR = function(e) {
      if (e._reactRootContainer && e.nodeType !== Mn) {
        var t = _R(e._reactRootContainer.current);
        t && t.parentNode !== e && E("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var i = !!e._reactRootContainer, o = q0(e), u = !!(o && Ts(o));
      u && !i && E("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === ci && e.tagName && e.tagName.toUpperCase() === "BODY" && E("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function q0(e) {
      return e ? e.nodeType === Ni ? e.documentElement : e.firstChild : null;
    }
    function HR() {
    }
    function IL(e, t, i, o, u) {
      if (u) {
        if (typeof o == "function") {
          var d = o;
          o = function() {
            var U = jy(v);
            d.call(U);
          };
        }
        var v = yR(
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
          HR
        );
        e._reactRootContainer = v, xg(v.current, e);
        var g = e.nodeType === Mn ? e.parentNode : e;
        return kh(g), wu(), v;
      } else {
        for (var _; _ = e.lastChild; )
          e.removeChild(_);
        if (typeof o == "function") {
          var w = o;
          o = function() {
            var U = jy(R);
            w.call(U);
          };
        }
        var R = gR(
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
          HR
        );
        e._reactRootContainer = R, xg(R.current, e);
        var j = e.nodeType === Mn ? e.parentNode : e;
        return kh(j), wu(function() {
          Tv(t, R, i, o);
        }), R;
      }
    }
    function HL(e, t) {
      e !== null && typeof e != "function" && E("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Hy(e, t, i, o, u) {
      IR(i), HL(u === void 0 ? null : u, "render");
      var d = i._reactRootContainer, v;
      if (!d)
        v = IL(i, t, e, u, o);
      else {
        if (v = d, typeof u == "function") {
          var g = u;
          u = function() {
            var _ = jy(v);
            g.call(_);
          };
        }
        Tv(t, v, e, u);
      }
      return jy(v);
    }
    function $L(e) {
      {
        var t = FL.current;
        if (t !== null && t.stateNode !== null) {
          var i = t.stateNode._warnedAboutRefsInRender;
          i || E("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ft(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === ci ? e : RL(e, "findDOMNode");
    }
    function VL(e, t, i) {
      if (E("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !wv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var o = Vh(t) && t._reactRootContainer === void 0;
        o && E("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Hy(null, e, t, !0, i);
    }
    function BL(e, t, i) {
      if (E("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !wv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var o = Vh(t) && t._reactRootContainer === void 0;
        o && E("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Hy(null, e, t, !1, i);
    }
    function YL(e, t, i, o) {
      if (E("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !wv(i))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !Ku(e))
        throw new Error("parentComponent must be a valid React Component");
      return Hy(e, t, i, !1, o);
    }
    function WL(e) {
      if (!wv(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Vh(e) && e._reactRootContainer === void 0;
        t && E("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var i = q0(e), o = i && !Ts(i);
          o && E("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return wu(function() {
          Hy(null, null, e, !1, function() {
            e._reactRootContainer = null, Pb(e);
          });
        }), !0;
      } else {
        {
          var u = q0(e), d = !!(u && Ts(u)), v = e.nodeType === ci && wv(e.parentNode) && !!e.parentNode._reactRootContainer;
          d && E("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", v ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    cs(xL), XE(DL), pd(OL), Qm(ia), Xm($r), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && E("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), $p(QD), Uf(D0, jk, wu);
    function GL(e, t) {
      var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Iy(t))
        throw new Error("Target container is not a DOM element.");
      return wL(e, t, null, i);
    }
    function KL(e, t, i, o) {
      return YL(e, t, i, o);
    }
    var Z0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Ts, Ud, Dg, Gu, Ql, D0]
    };
    function QL(e, t) {
      return Z0.usingClientEntryPoint || E('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), UL(e, t);
    }
    function XL(e, t, i) {
      return Z0.usingClientEntryPoint || E('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), jL(e, t, i);
    }
    function qL(e) {
      return Xw() && E("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), wu(e);
    }
    var ZL = zL({
      findFiberByHostInstance: Jc,
      bundleType: 1,
      version: Y0,
      rendererPackageName: "react-dom"
    });
    if (!ZL && Sn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var $R = window.location.protocol;
      /^(https?|file):$/.test($R) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + ($R === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    ha.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Z0, ha.createPortal = GL, ha.createRoot = QL, ha.findDOMNode = $L, ha.flushSync = qL, ha.hydrate = VL, ha.hydrateRoot = XL, ha.render = BL, ha.unmountComponentAtNode = WL, ha.unstable_batchedUpdates = D0, ha.unstable_renderSubtreeIntoContainer = KL, ha.version = Y0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
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
var qR;
function pM() {
  if (qR)
    return va;
  qR = 1;
  var f = Xe, a = Y1();
  function s(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++)
      r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var p = /* @__PURE__ */ new Set(), y = {};
  function b(n, r) {
    T(n, r), T(n + "Capture", r);
  }
  function T(n, r) {
    for (y[n] = r, n = 0; n < r.length; n++)
      p.add(r[n]);
  }
  var E = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), x = Object.prototype.hasOwnProperty, O = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, A = {}, z = {};
  function F(n) {
    return x.call(z, n) ? !0 : x.call(A, n) ? !1 : O.test(n) ? z[n] = !0 : (A[n] = !0, !1);
  }
  function H(n, r, l, c) {
    if (l !== null && l.type === 0)
      return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return c ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function Y(n, r, l, c) {
    if (r === null || typeof r > "u" || H(n, r, l, c))
      return !0;
    if (c)
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
  function X(n, r, l, c, h, m, C) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = c, this.attributeNamespace = h, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = m, this.removeEmptyString = C;
  }
  var fe = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    fe[n] = new X(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    fe[r] = new X(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    fe[n] = new X(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    fe[n] = new X(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    fe[n] = new X(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    fe[n] = new X(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    fe[n] = new X(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    fe[n] = new X(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    fe[n] = new X(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var xe = /[\-:]([a-z])/g;
  function ze(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      xe,
      ze
    );
    fe[r] = new X(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(xe, ze);
    fe[r] = new X(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(xe, ze);
    fe[r] = new X(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    fe[n] = new X(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), fe.xlinkHref = new X("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    fe[n] = new X(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function ge(n, r, l, c) {
    var h = fe.hasOwnProperty(r) ? fe[r] : null;
    (h !== null ? h.type !== 0 : c || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (Y(r, l, h, c) && (l = null), c || h === null ? F(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : h.mustUseProperty ? n[h.propertyName] = l === null ? h.type === 3 ? !1 : "" : l : (r = h.attributeName, c = h.attributeNamespace, l === null ? n.removeAttribute(r) : (h = h.type, l = h === 3 || h === 4 && l === !0 ? "" : "" + l, c ? n.setAttributeNS(c, r, l) : n.setAttribute(r, l))));
  }
  var ie = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ce = Symbol.for("react.element"), ae = Symbol.for("react.portal"), Ne = Symbol.for("react.fragment"), De = Symbol.for("react.strict_mode"), tt = Symbol.for("react.profiler"), vt = Symbol.for("react.provider"), ot = Symbol.for("react.context"), at = Symbol.for("react.forward_ref"), ct = Symbol.for("react.suspense"), Pe = Symbol.for("react.suspense_list"), Ze = Symbol.for("react.memo"), qe = Symbol.for("react.lazy"), Ye = Symbol.for("react.offscreen"), ee = Symbol.iterator;
  function be(n) {
    return n === null || typeof n != "object" ? null : (n = ee && n[ee] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var L = Object.assign, ne;
  function we(n) {
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
  function Ke(n, r) {
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
            var c = Q;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (Q) {
            c = Q;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (Q) {
          c = Q;
        }
        n();
      }
    } catch (Q) {
      if (Q && c && typeof Q.stack == "string") {
        for (var h = Q.stack.split(`
`), m = c.stack.split(`
`), C = h.length - 1, D = m.length - 1; 1 <= C && 0 <= D && h[C] !== m[D]; )
          D--;
        for (; 1 <= C && 0 <= D; C--, D--)
          if (h[C] !== m[D]) {
            if (C !== 1 || D !== 1)
              do
                if (C--, D--, 0 > D || h[C] !== m[D]) {
                  var M = `
` + h[C].replace(" at new ", " at ");
                  return n.displayName && M.includes("<anonymous>") && (M = M.replace("<anonymous>", n.displayName)), M;
                }
              while (1 <= C && 0 <= D);
            break;
          }
      }
    } finally {
      Je = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? we(n) : "";
  }
  function gt(n) {
    switch (n.tag) {
      case 5:
        return we(n.type);
      case 16:
        return we("Lazy");
      case 13:
        return we("Suspense");
      case 19:
        return we("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Ke(n.type, !1), n;
      case 11:
        return n = Ke(n.type.render, !1), n;
      case 1:
        return n = Ke(n.type, !0), n;
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
      case ae:
        return "Portal";
      case tt:
        return "Profiler";
      case De:
        return "StrictMode";
      case ct:
        return "Suspense";
      case Pe:
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
    var r = Zt(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), c = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var h = l.get, m = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return h.call(this);
      }, set: function(C) {
        c = "" + C, m.call(this, C);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return c;
      }, setValue: function(C) {
        c = "" + C;
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
    var l = r.getValue(), c = "";
    return n && (c = Zt(n) ? n.checked ? "true" : "false" : n.value), n = c, n !== l ? (r.setValue(n), !0) : !1;
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
    var l = r.defaultValue == null ? "" : r.defaultValue, c = r.checked != null ? r.checked : r.defaultChecked;
    l = mt(r.value != null ? r.value : l), n._wrapperState = { initialChecked: c, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function kn(n, r) {
    r = r.checked, r != null && ge(n, "checked", r, !1);
  }
  function wn(n, r) {
    kn(n, r);
    var l = mt(r.value), c = r.type;
    if (l != null)
      c === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (c === "submit" || c === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Sr(n, r.type, l) : r.hasOwnProperty("defaultValue") && Sr(n, r.type, mt(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Ln(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var c = r.type;
      if (!(c !== "submit" && c !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function Sr(n, r, l) {
    (r !== "number" || ar(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var Cn = Array.isArray;
  function bn(n, r, l, c) {
    if (n = n.options, r) {
      r = {};
      for (var h = 0; h < l.length; h++)
        r["$" + l[h]] = !0;
      for (l = 0; l < n.length; l++)
        h = r.hasOwnProperty("$" + n[l].value), n[l].selected !== h && (n[l].selected = h), h && c && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + mt(l), r = null, h = 0; h < n.length; h++) {
        if (n[h].value === l) {
          n[h].selected = !0, c && (n[h].defaultSelected = !0);
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
    var l = mt(r.value), c = mt(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), c != null && (n.defaultValue = "" + c);
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
  var ln, xi = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, c, h) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, c, h);
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
  function Di(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var Oi = {
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
  Object.keys(Oi).forEach(function(n) {
    Se.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), Oi[r] = Oi[n];
    });
  });
  function Qe(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || Oi.hasOwnProperty(n) && Oi[n] ? ("" + r).trim() : r + "px";
  }
  function xt(n, r) {
    n = n.style;
    for (var l in r)
      if (r.hasOwnProperty(l)) {
        var c = l.indexOf("--") === 0, h = Qe(l, r[l], c);
        l === "float" && (l = "cssFloat"), c ? n.setProperty(l, h) : n[l] = h;
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
      r && (r = Pf(r), Jt(n.stateNode, n.type, r));
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
  var Fl = !1;
  function Qo(n, r, l) {
    if (Fl)
      return n(r, l);
    Fl = !0;
    try {
      return Ko(n, r, l);
    } finally {
      Fl = !1, (pr !== null || Qt !== null) && (jl(), Wi());
    }
  }
  function Ea(n, r) {
    var l = n.stateNode;
    if (l === null)
      return null;
    var c = Pf(l);
    if (c === null)
      return null;
    l = c[r];
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
          (c = !c.disabled) || (n = n.type, c = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !c;
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
  function fo(n, r, l, c, h, m, C, D, M) {
    var Q = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, Q);
    } catch (se) {
      this.onError(se);
    }
  }
  var ii = !1, ai = null, Ai = !1, po = null, k = { onError: function(n) {
    ii = !0, ai = n;
  } };
  function le(n, r, l, c, h, m, C, D, M) {
    ii = !1, ai = null, fo.apply(k, arguments);
  }
  function Ee(n, r, l, c, h, m, C, D, M) {
    if (le.apply(this, arguments), ii) {
      if (ii) {
        var Q = ai;
        ii = !1, ai = null;
      } else
        throw Error(s(198));
      Ai || (Ai = !0, po = Q);
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
    for (var l = n, c = r; ; ) {
      var h = l.return;
      if (h === null)
        break;
      var m = h.alternate;
      if (m === null) {
        if (c = h.return, c !== null) {
          l = c;
          continue;
        }
        break;
      }
      if (h.child === m.child) {
        for (m = h.child; m; ) {
          if (m === l)
            return zt(h), n;
          if (m === c)
            return zt(h), r;
          m = m.sibling;
        }
        throw Error(s(188));
      }
      if (l.return !== c.return)
        l = h, c = m;
      else {
        for (var C = !1, D = h.child; D; ) {
          if (D === l) {
            C = !0, l = h, c = m;
            break;
          }
          if (D === c) {
            C = !0, c = h, l = m;
            break;
          }
          D = D.sibling;
        }
        if (!C) {
          for (D = m.child; D; ) {
            if (D === l) {
              C = !0, l = m, c = h;
              break;
            }
            if (D === c) {
              C = !0, c = m, l = h;
              break;
            }
            D = D.sibling;
          }
          if (!C)
            throw Error(s(189));
        }
      }
      if (l.alternate !== c)
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
  var fn = a.unstable_scheduleCallback, dn = a.unstable_cancelCallback, Fr = a.unstable_shouldYield, Pa = a.unstable_requestPaint, pn = a.unstable_now, oi = a.unstable_getCurrentPriorityLevel, Xs = a.unstable_ImmediatePriority, ja = a.unstable_UserBlockingPriority, Dt = a.unstable_NormalPriority, Il = a.unstable_LowPriority, ho = a.unstable_IdlePriority, Xo = null, li = null;
  function qs(n) {
    if (li && typeof li.onCommitFiberRoot == "function")
      try {
        li.onCommitFiberRoot(Xo, n, void 0, (n.current.flags & 128) === 128);
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
  function Fa(n, r) {
    var l = n.pendingLanes;
    if (l === 0)
      return 0;
    var c = 0, h = n.suspendedLanes, m = n.pingedLanes, C = l & 268435455;
    if (C !== 0) {
      var D = C & ~h;
      D !== 0 ? c = vo(D) : (m &= C, m !== 0 && (c = vo(m)));
    } else
      C = l & ~h, C !== 0 ? c = vo(C) : m !== 0 && (c = vo(m));
    if (c === 0)
      return 0;
    if (r !== 0 && r !== c && !(r & h) && (h = c & -c, m = r & -r, h >= m || h === 16 && (m & 4194240) !== 0))
      return r;
    if (c & 4 && (c |= l & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= c; 0 < r; )
        l = 31 - Br(r), h = 1 << l, c |= n[l], r &= ~h;
    return c;
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
    for (var l = n.suspendedLanes, c = n.pingedLanes, h = n.expirationTimes, m = n.pendingLanes; 0 < m; ) {
      var C = 31 - Br(m), D = 1 << C, M = h[C];
      M === -1 ? (!(D & l) || D & c) && (h[C] = Ki(D, r)) : M <= r && (n.expiredLanes |= D), m &= ~D;
    }
  }
  function Ia(n) {
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
    var c = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var h = 31 - Br(l), m = 1 << h;
      r[h] = 0, c[h] = -1, n[h] = -1, l &= ~m;
    }
  }
  function nc(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var c = 31 - Br(l), h = 1 << c;
      h & r | n[c] & r && (n[c] |= r), l &= ~h;
    }
  }
  var Mt = 0;
  function rc(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Uu, Jo, ic, Ft, Pu, Bl = !1, yt = [], Sa = null, xn = null, ui = null, Qi = /* @__PURE__ */ new Map(), el = /* @__PURE__ */ new Map(), mn = [], Dn = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
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
        ui = null;
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
  function Cr(n, r, l, c, h, m) {
    return n === null || n.nativeEvent !== m ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: c, nativeEvent: m, targetContainers: [h] }, r !== null && (r = Va(r), r !== null && Jo(r)), n) : (n.eventSystemFlags |= c, r = n.targetContainers, h !== null && r.indexOf(h) === -1 && r.push(h), n);
  }
  function si(n, r, l, c, h) {
    switch (r) {
      case "focusin":
        return Sa = Cr(Sa, n, r, l, c, h), !0;
      case "dragenter":
        return xn = Cr(xn, n, r, l, c, h), !0;
      case "mouseover":
        return ui = Cr(ui, n, r, l, c, h), !0;
      case "pointerover":
        var m = h.pointerId;
        return Qi.set(m, Cr(Qi.get(m) || null, n, r, l, c, h)), !0;
      case "gotpointercapture":
        return m = h.pointerId, el.set(m, Cr(el.get(m) || null, n, r, l, c, h)), !0;
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
        var c = new l.constructor(l.type, l);
        Rn = c, l.target.dispatchEvent(c), Rn = null;
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
    Bl = !1, Sa !== null && ju(Sa) && (Sa = null), xn !== null && ju(xn) && (xn = null), ui !== null && ju(ui) && (ui = null), Qi.forEach(Yl), el.forEach(Yl);
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
        var c = yt[l];
        c.blockedOn === n && (c.blockedOn = null);
      }
    }
    for (Sa !== null && tl(Sa, n), xn !== null && tl(xn, n), ui !== null && tl(ui, n), Qi.forEach(r), el.forEach(r), l = 0; l < mn.length; l++)
      c = mn[l], c.blockedOn === n && (c.blockedOn = null);
    for (; 0 < mn.length && (l = mn[0], l.blockedOn === null); )
      Ca(l), l.blockedOn === null && mn.shift();
  }
  var mo = ie.ReactCurrentBatchConfig, Fu = !0;
  function go(n, r, l, c) {
    var h = Mt, m = mo.transition;
    mo.transition = null;
    try {
      Mt = 1, Ha(n, r, l, c);
    } finally {
      Mt = h, mo.transition = m;
    }
  }
  function Iu(n, r, l, c) {
    var h = Mt, m = mo.transition;
    mo.transition = null;
    try {
      Mt = 4, Ha(n, r, l, c);
    } finally {
      Mt = h, mo.transition = m;
    }
  }
  function Ha(n, r, l, c) {
    if (Fu) {
      var h = Hu(n, r, l, c);
      if (h === null)
        $p(n, r, c, yo, l), ac(n, c);
      else if (si(h, n, r, l, c))
        c.stopPropagation();
      else if (ac(n, c), r & 4 && -1 < Dn.indexOf(n)) {
        for (; h !== null; ) {
          var m = Va(h);
          if (m !== null && Uu(m), m = Hu(n, r, l, c), m === null && $p(n, r, c, yo, l), m === h)
            break;
          h = m;
        }
        h !== null && c.stopPropagation();
      } else
        $p(n, r, c, null, l);
    }
  }
  var yo = null;
  function Hu(n, r, l, c) {
    if (yo = null, n = jr(c), n = Ro(n), n !== null)
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
        switch (oi()) {
          case Xs:
            return 1;
          case ja:
            return 4;
          case Dt:
          case Il:
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
  function N() {
    if (S)
      return S;
    var n, r = $u, l = r.length, c, h = "value" in ba ? ba.value : ba.textContent, m = h.length;
    for (n = 0; n < l && r[n] === h[n]; n++)
      ;
    var C = l - n;
    for (c = 1; c <= C && r[l - c] === h[m - c]; c++)
      ;
    return S = h.slice(n, 1 < c ? 1 - c : void 0);
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
  function He(n) {
    function r(l, c, h, m, C) {
      this._reactName = l, this._targetInst = h, this.type = c, this.nativeEvent = m, this.target = C, this.currentTarget = null;
      for (var D in n)
        n.hasOwnProperty(D) && (l = n[D], this[D] = l ? l(m) : m[D]);
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
  }, defaultPrevented: 0, isTrusted: 0 }, pt = He(ke), Ot = L({}, ke, { view: 0, detail: 0 }), Xt = He(Ot), en, tn, nn, gn = L({}, Ot, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: xf, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== nn && (nn && n.type === "mousemove" ? (en = n.screenX - nn.screenX, tn = n.screenY - nn.screenY) : tn = en = 0, nn = n), en);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : tn;
  } }), It = He(gn), nl = L({}, gn, { dataTransfer: 0 }), Vu = He(nl), lc = L({}, Ot, { relatedTarget: 0 }), uc = He(lc), Eo = L({}, ke, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), sc = He(Eo), cc = L({}, ke, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Ap = He(cc), DE = L({}, ke, { data: 0 }), Jv = He(DE), em = {
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
  }, Np = {
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
  }, tm = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function nm(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = tm[n]) ? !!r[n] : !1;
  }
  function xf() {
    return nm;
  }
  var OE = L({}, Ot, { key: function(n) {
    if (n.key) {
      var r = em[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = W(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Np[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: xf, charCode: function(n) {
    return n.type === "keypress" ? W(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? W(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), _o = He(OE), AE = L({}, gn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Df = He(AE), kp = L({}, Ot, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: xf }), Lp = He(kp), NE = L({}, ke, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Of = He(NE), rm = L({}, gn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ci = He(rm), So = [9, 13, 27, 32], Mn = E && "CompositionEvent" in window, Ni = null;
  E && "documentMode" in document && (Ni = document.documentMode);
  var Mp = E && "TextEvent" in window && !Ni, fc = E && (!Mn || Ni && 8 < Ni && 11 >= Ni), im = " ", Bu = !1;
  function am(n, r) {
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
  function om(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var rl = !1;
  function kE(n, r) {
    switch (n) {
      case "compositionend":
        return om(r);
      case "keypress":
        return r.which !== 32 ? null : (Bu = !0, im);
      case "textInput":
        return n = r.data, n === im && Bu ? null : n;
      default:
        return null;
    }
  }
  function LE(n, r) {
    if (rl)
      return n === "compositionend" || !Mn && am(n, r) ? (n = N(), S = $u = ba = null, rl = !1, n) : null;
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
  function zp(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!ME[n.type] : r === "textarea";
  }
  function lm(n, r, l, c) {
    ya(c), r = zf(r, "onChange"), 0 < r.length && (l = new pt("onChange", "change", null, l, c), n.push({ event: l, listeners: r }));
  }
  var dc = null, pc = null;
  function um(n) {
    Tm(n, 0);
  }
  function Co(n) {
    var r = Ku(n);
    if (Mr(r))
      return n;
  }
  function Up(n, r) {
    if (n === "change")
      return r;
  }
  var Pp = !1;
  if (E) {
    var Af;
    if (E) {
      var jp = "oninput" in document;
      if (!jp) {
        var sm = document.createElement("div");
        sm.setAttribute("oninput", "return;"), jp = typeof sm.oninput == "function";
      }
      Af = jp;
    } else
      Af = !1;
    Pp = Af && (!document.documentMode || 9 < document.documentMode);
  }
  function cm() {
    dc && (dc.detachEvent("onpropertychange", fm), pc = dc = null);
  }
  function fm(n) {
    if (n.propertyName === "value" && Co(pc)) {
      var r = [];
      lm(r, pc, n, jr(n)), Qo(um, r);
    }
  }
  function zE(n, r, l) {
    n === "focusin" ? (cm(), dc = r, pc = l, dc.attachEvent("onpropertychange", fm)) : n === "focusout" && cm();
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
  function dm(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Ta = typeof Object.is == "function" ? Object.is : dm;
  function Yu(n, r) {
    if (Ta(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var l = Object.keys(n), c = Object.keys(r);
    if (l.length !== c.length)
      return !1;
    for (c = 0; c < l.length; c++) {
      var h = l[c];
      if (!x.call(r, h) || !Ta(n[h], r[h]))
        return !1;
    }
    return !0;
  }
  function pm(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function hm(n, r) {
    var l = pm(n);
    n = 0;
    for (var c; l; ) {
      if (l.nodeType === 3) {
        if (c = n + l.textContent.length, n <= r && c >= r)
          return { node: l, offset: r - n };
        n = c;
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
      l = pm(l);
    }
  }
  function vm(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? vm(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function mm() {
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
    var r = mm(), l = n.focusedElem, c = n.selectionRange;
    if (r !== l && l && l.ownerDocument && vm(l.ownerDocument.documentElement, l)) {
      if (c !== null && hc(l)) {
        if (r = c.start, n = c.end, n === void 0 && (n = r), "selectionStart" in l)
          l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var h = l.textContent.length, m = Math.min(c.start, h);
          c = c.end === void 0 ? m : Math.min(c.end, h), !n.extend && m > c && (h = c, c = m, m = h), h = hm(l, m);
          var C = hm(
            l,
            c
          );
          h && C && (n.rangeCount !== 1 || n.anchorNode !== h.node || n.anchorOffset !== h.offset || n.focusNode !== C.node || n.focusOffset !== C.offset) && (r = r.createRange(), r.setStart(h.node, h.offset), n.removeAllRanges(), m > c ? (n.addRange(r), n.extend(C.node, C.offset)) : (r.setEnd(C.node, C.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++)
        n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var Nf = E && "documentMode" in document && 11 >= document.documentMode, Kl = null, il = null, vc = null, Fp = !1;
  function gm(n, r, l) {
    var c = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Fp || Kl == null || Kl !== ar(c) || (c = Kl, "selectionStart" in c && hc(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = { anchorNode: c.anchorNode, anchorOffset: c.anchorOffset, focusNode: c.focusNode, focusOffset: c.focusOffset }), vc && Yu(vc, c) || (vc = c, c = zf(il, "onSelect"), 0 < c.length && (r = new pt("onSelect", "select", null, r, l), n.push({ event: r, listeners: c }), r.target = Kl)));
  }
  function kf(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var Wu = { animationend: kf("Animation", "AnimationEnd"), animationiteration: kf("Animation", "AnimationIteration"), animationstart: kf("Animation", "AnimationStart"), transitionend: kf("Transition", "TransitionEnd") }, Lf = {}, ym = {};
  E && (ym = document.createElement("div").style, "AnimationEvent" in window || (delete Wu.animationend.animation, delete Wu.animationiteration.animation, delete Wu.animationstart.animation), "TransitionEvent" in window || delete Wu.transitionend.transition);
  function mc(n) {
    if (Lf[n])
      return Lf[n];
    if (!Wu[n])
      return n;
    var r = Wu[n], l;
    for (l in r)
      if (r.hasOwnProperty(l) && l in ym)
        return Lf[n] = r[l];
    return n;
  }
  var Ir = mc("animationend"), Ip = mc("animationiteration"), Em = mc("animationstart"), _m = mc("transitionend"), Sm = /* @__PURE__ */ new Map(), Cm = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function al(n, r) {
    Sm.set(n, r), b(r, [n]);
  }
  for (var Mf = 0; Mf < Cm.length; Mf++) {
    var gc = Cm[Mf], yc = gc.toLowerCase(), FE = gc[0].toUpperCase() + gc.slice(1);
    al(yc, "on" + FE);
  }
  al(Ir, "onAnimationEnd"), al(Ip, "onAnimationIteration"), al(Em, "onAnimationStart"), al("dblclick", "onDoubleClick"), al("focusin", "onFocus"), al("focusout", "onBlur"), al(_m, "onTransitionEnd"), T("onMouseEnter", ["mouseout", "mouseover"]), T("onMouseLeave", ["mouseout", "mouseover"]), T("onPointerEnter", ["pointerout", "pointerover"]), T("onPointerLeave", ["pointerout", "pointerover"]), b("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), b("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), b("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), b("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), b("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), b("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var bo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), IE = new Set("cancel close invalid load scroll toggle".split(" ").concat(bo));
  function bm(n, r, l) {
    var c = n.type || "unknown-event";
    n.currentTarget = l, Ee(c, r, void 0, n), n.currentTarget = null;
  }
  function Tm(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var c = n[l], h = c.event;
      c = c.listeners;
      e: {
        var m = void 0;
        if (r)
          for (var C = c.length - 1; 0 <= C; C--) {
            var D = c[C], M = D.instance, Q = D.currentTarget;
            if (D = D.listener, M !== m && h.isPropagationStopped())
              break e;
            bm(h, D, Q), m = M;
          }
        else
          for (C = 0; C < c.length; C++) {
            if (D = c[C], M = D.instance, Q = D.currentTarget, D = D.listener, M !== m && h.isPropagationStopped())
              break e;
            bm(h, D, Q), m = M;
          }
      }
    }
    if (Ai)
      throw n = po, Ai = !1, po = null, n;
  }
  function un(n, r) {
    var l = r[Xp];
    l === void 0 && (l = r[Xp] = /* @__PURE__ */ new Set());
    var c = n + "__bubble";
    l.has(c) || (Hp(r, n, 2, !1), l.add(c));
  }
  function Ec(n, r, l) {
    var c = 0;
    r && (c |= 4), Hp(l, n, c, r);
  }
  var To = "_reactListening" + Math.random().toString(36).slice(2);
  function $a(n) {
    if (!n[To]) {
      n[To] = !0, p.forEach(function(l) {
        l !== "selectionchange" && (IE.has(l) || Ec(l, !1, n), Ec(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[To] || (r[To] = !0, Ec("selectionchange", !1, r));
    }
  }
  function Hp(n, r, l, c) {
    switch (oc(r)) {
      case 1:
        var h = go;
        break;
      case 4:
        h = Iu;
        break;
      default:
        h = Ha;
    }
    l = h.bind(null, r, l, n), h = void 0, !_a || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (h = !0), c ? h !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: h }) : n.addEventListener(r, l, !0) : h !== void 0 ? n.addEventListener(r, l, { passive: h }) : n.addEventListener(r, l, !1);
  }
  function $p(n, r, l, c, h) {
    var m = c;
    if (!(r & 1) && !(r & 2) && c !== null)
      e:
        for (; ; ) {
          if (c === null)
            return;
          var C = c.tag;
          if (C === 3 || C === 4) {
            var D = c.stateNode.containerInfo;
            if (D === h || D.nodeType === 8 && D.parentNode === h)
              break;
            if (C === 4)
              for (C = c.return; C !== null; ) {
                var M = C.tag;
                if ((M === 3 || M === 4) && (M = C.stateNode.containerInfo, M === h || M.nodeType === 8 && M.parentNode === h))
                  return;
                C = C.return;
              }
            for (; D !== null; ) {
              if (C = Ro(D), C === null)
                return;
              if (M = C.tag, M === 5 || M === 6) {
                c = m = C;
                continue e;
              }
              D = D.parentNode;
            }
          }
          c = c.return;
        }
    Qo(function() {
      var Q = m, se = jr(l), de = [];
      e: {
        var oe = Sm.get(n);
        if (oe !== void 0) {
          var Oe = pt, je = n;
          switch (n) {
            case "keypress":
              if (W(l) === 0)
                break e;
            case "keydown":
            case "keyup":
              Oe = _o;
              break;
            case "focusin":
              je = "focus", Oe = uc;
              break;
            case "focusout":
              je = "blur", Oe = uc;
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
              Oe = It;
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
              Oe = Lp;
              break;
            case Ir:
            case Ip:
            case Em:
              Oe = sc;
              break;
            case _m:
              Oe = Of;
              break;
            case "scroll":
              Oe = Xt;
              break;
            case "wheel":
              Oe = ci;
              break;
            case "copy":
            case "cut":
            case "paste":
              Oe = Ap;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Oe = Df;
          }
          var $e = (r & 4) !== 0, Kn = !$e && n === "scroll", I = $e ? oe !== null ? oe + "Capture" : null : oe;
          $e = [];
          for (var P = Q, B; P !== null; ) {
            B = P;
            var ve = B.stateNode;
            if (B.tag === 5 && ve !== null && (B = ve, I !== null && (ve = Ea(P, I), ve != null && $e.push(Gu(P, ve, B)))), Kn)
              break;
            P = P.return;
          }
          0 < $e.length && (oe = new Oe(oe, je, null, l, se), de.push({ event: oe, listeners: $e }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (oe = n === "mouseover" || n === "pointerover", Oe = n === "mouseout" || n === "pointerout", oe && l !== Rn && (je = l.relatedTarget || l.fromElement) && (Ro(je) || je[wa]))
            break e;
          if ((Oe || oe) && (oe = se.window === se ? se : (oe = se.ownerDocument) ? oe.defaultView || oe.parentWindow : window, Oe ? (je = l.relatedTarget || l.toElement, Oe = Q, je = je ? Ro(je) : null, je !== null && (Kn = Te(je), je !== Kn || je.tag !== 5 && je.tag !== 6) && (je = null)) : (Oe = null, je = Q), Oe !== je)) {
            if ($e = It, ve = "onMouseLeave", I = "onMouseEnter", P = "mouse", (n === "pointerout" || n === "pointerover") && ($e = Df, ve = "onPointerLeave", I = "onPointerEnter", P = "pointer"), Kn = Oe == null ? oe : Ku(Oe), B = je == null ? oe : Ku(je), oe = new $e(ve, P + "leave", Oe, l, se), oe.target = Kn, oe.relatedTarget = B, ve = null, Ro(se) === Q && ($e = new $e(I, P + "enter", je, l, se), $e.target = B, $e.relatedTarget = Kn, ve = $e), Kn = ve, Oe && je)
              t: {
                for ($e = Oe, I = je, P = 0, B = $e; B; B = Ql(B))
                  P++;
                for (B = 0, ve = I; ve; ve = Ql(ve))
                  B++;
                for (; 0 < P - B; )
                  $e = Ql($e), P--;
                for (; 0 < B - P; )
                  I = Ql(I), B--;
                for (; P--; ) {
                  if ($e === I || I !== null && $e === I.alternate)
                    break t;
                  $e = Ql($e), I = Ql(I);
                }
                $e = null;
              }
            else
              $e = null;
            Oe !== null && Vp(de, oe, Oe, $e, !1), je !== null && Kn !== null && Vp(de, Kn, je, $e, !0);
          }
        }
        e: {
          if (oe = Q ? Ku(Q) : window, Oe = oe.nodeName && oe.nodeName.toLowerCase(), Oe === "select" || Oe === "input" && oe.type === "file")
            var Be = Up;
          else if (zp(oe))
            if (Pp)
              Be = jE;
            else {
              Be = UE;
              var ut = zE;
            }
          else
            (Oe = oe.nodeName) && Oe.toLowerCase() === "input" && (oe.type === "checkbox" || oe.type === "radio") && (Be = PE);
          if (Be && (Be = Be(n, Q))) {
            lm(de, Be, l, se);
            break e;
          }
          ut && ut(n, oe, Q), n === "focusout" && (ut = oe._wrapperState) && ut.controlled && oe.type === "number" && Sr(oe, "number", oe.value);
        }
        switch (ut = Q ? Ku(Q) : window, n) {
          case "focusin":
            (zp(ut) || ut.contentEditable === "true") && (Kl = ut, il = Q, vc = null);
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
            Fp = !1, gm(de, l, se);
            break;
          case "selectionchange":
            if (Nf)
              break;
          case "keydown":
          case "keyup":
            gm(de, l, se);
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
          rl ? am(n, l) && (ft = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (ft = "onCompositionStart");
        ft && (fc && l.locale !== "ko" && (rl || ft !== "onCompositionStart" ? ft === "onCompositionEnd" && rl && (Fe = N()) : (ba = se, $u = "value" in ba ? ba.value : ba.textContent, rl = !0)), ut = zf(Q, ft), 0 < ut.length && (ft = new Jv(ft, n, null, l, se), de.push({ event: ft, listeners: ut }), Fe ? ft.data = Fe : (Fe = om(l), Fe !== null && (ft.data = Fe)))), (Fe = Mp ? kE(n, l) : LE(n, l)) && (Q = zf(Q, "onBeforeInput"), 0 < Q.length && (se = new Jv("onBeforeInput", "beforeinput", null, l, se), de.push({ event: se, listeners: Q }), se.data = Fe));
      }
      Tm(de, r);
    });
  }
  function Gu(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function zf(n, r) {
    for (var l = r + "Capture", c = []; n !== null; ) {
      var h = n, m = h.stateNode;
      h.tag === 5 && m !== null && (h = m, m = Ea(n, l), m != null && c.unshift(Gu(n, m, h)), m = Ea(n, r), m != null && c.push(Gu(n, m, h))), n = n.return;
    }
    return c;
  }
  function Ql(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Vp(n, r, l, c, h) {
    for (var m = r._reactName, C = []; l !== null && l !== c; ) {
      var D = l, M = D.alternate, Q = D.stateNode;
      if (M !== null && M === c)
        break;
      D.tag === 5 && Q !== null && (D = Q, h ? (M = Ea(l, m), M != null && C.unshift(Gu(l, M, D))) : h || (M = Ea(l, m), M != null && C.push(Gu(l, M, D)))), l = l.return;
    }
    C.length !== 0 && n.push({ event: r, listeners: C });
  }
  var wm = /\r\n?/g, Bp = /\u0000|\uFFFD/g;
  function Rm(n) {
    return (typeof n == "string" ? n : "" + n).replace(wm, `
`).replace(Bp, "");
  }
  function _c(n, r, l) {
    if (r = Rm(r), Rm(n) !== r && l)
      throw Error(s(425));
  }
  function Uf() {
  }
  var Yp = null, Wp = null;
  function Xl(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Sc = typeof setTimeout == "function" ? setTimeout : void 0, Cc = typeof clearTimeout == "function" ? clearTimeout : void 0, Gp = typeof Promise == "function" ? Promise : void 0, xm = typeof queueMicrotask == "function" ? queueMicrotask : typeof Gp < "u" ? function(n) {
    return Gp.resolve(null).then(n).catch(Kp);
  } : Sc;
  function Kp(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Qp(n, r) {
    var l = r, c = 0;
    do {
      var h = l.nextSibling;
      if (n.removeChild(l), h && h.nodeType === 8)
        if (l = h.data, l === "/$") {
          if (c === 0) {
            n.removeChild(h), Xi(r);
            return;
          }
          c--;
        } else
          l !== "$" && l !== "$?" && l !== "$!" || c++;
      l = h;
    } while (l);
    Xi(r);
  }
  function ki(n) {
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
  var wo = Math.random().toString(36).slice(2), qi = "__reactFiber$" + wo, Tc = "__reactProps$" + wo, wa = "__reactContainer$" + wo, Xp = "__reactEvents$" + wo, HE = "__reactListeners$" + wo, $E = "__reactHandles$" + wo;
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
  function Pf(n) {
    return n[Tc] || null;
  }
  var nt = [], Ra = -1;
  function sn(n) {
    return { current: n };
  }
  function Ve(n) {
    0 > Ra || (n.current = nt[Ra], nt[Ra] = null, Ra--);
  }
  function Vt(n, r) {
    Ra++, nt[Ra] = n.current, n.current = r;
  }
  var Zi = {}, hr = sn(Zi), _t = sn(!1), Yr = Zi;
  function Li(n, r) {
    var l = n.type.contextTypes;
    if (!l)
      return Zi;
    var c = n.stateNode;
    if (c && c.__reactInternalMemoizedUnmaskedChildContext === r)
      return c.__reactInternalMemoizedMaskedChildContext;
    var h = {}, m;
    for (m in l)
      h[m] = r[m];
    return c && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = h), h;
  }
  function er(n) {
    return n = n.childContextTypes, n != null;
  }
  function fi() {
    Ve(_t), Ve(hr);
  }
  function Ba(n, r, l) {
    if (hr.current !== Zi)
      throw Error(s(168));
    Vt(hr, r), Vt(_t, l);
  }
  function ol(n, r, l) {
    var c = n.stateNode;
    if (r = r.childContextTypes, typeof c.getChildContext != "function")
      return l;
    c = c.getChildContext();
    for (var h in c)
      if (!(h in r))
        throw Error(s(108, wt(n) || "Unknown", h));
    return L({}, l, c);
  }
  function ql(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Zi, Yr = hr.current, Vt(hr, n), Vt(_t, _t.current), !0;
  }
  function Dm(n, r, l) {
    var c = n.stateNode;
    if (!c)
      throw Error(s(169));
    l ? (n = ol(n, r, Yr), c.__reactInternalMemoizedMergedChildContext = n, Ve(_t), Ve(hr), Vt(hr, n)) : Ve(_t), Vt(_t, l);
  }
  var xo = null, ll = !1, br = !1;
  function jf(n) {
    xo === null ? xo = [n] : xo.push(n);
  }
  function Om(n) {
    ll = !0, jf(n);
  }
  function Ya() {
    if (!br && xo !== null) {
      br = !0;
      var n = 0, r = Mt;
      try {
        var l = xo;
        for (Mt = 1; n < l.length; n++) {
          var c = l[n];
          do
            c = c(!0);
          while (c !== null);
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
  var Ji = [], ul = 0, ea = null, Zl = 0, di = [], pi = 0, xa = null, hi = 1, Tr = "";
  function Jl(n, r) {
    Ji[ul++] = Zl, Ji[ul++] = ea, ea = n, Zl = r;
  }
  function sl(n, r, l) {
    di[pi++] = hi, di[pi++] = Tr, di[pi++] = xa, xa = n;
    var c = hi;
    n = Tr;
    var h = 32 - Br(c) - 1;
    c &= ~(1 << h), l += 1;
    var m = 32 - Br(r) + h;
    if (30 < m) {
      var C = h - h % 5;
      m = (c & (1 << C) - 1).toString(32), c >>= C, h -= C, hi = 1 << 32 - Br(r) + h | l << h | c, Tr = m + n;
    } else
      hi = 1 << m | l << h | c, Tr = n;
  }
  function Ff(n) {
    n.return !== null && (Jl(n, 1), sl(n, 1, 0));
  }
  function If(n) {
    for (; n === ea; )
      ea = Ji[--ul], Ji[ul] = null, Zl = Ji[--ul], Ji[ul] = null;
    for (; n === xa; )
      xa = di[--pi], di[pi] = null, Tr = di[--pi], di[pi] = null, hi = di[--pi], di[pi] = null;
  }
  var Mi = null, zi = null, yn = !1, ta = null;
  function qp(n, r) {
    var l = ua(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function Zp(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Mi = n, zi = ki(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Mi = n, zi = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = xa !== null ? { id: hi, overflow: Tr } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = ua(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, Mi = n, zi = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Jp(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Hf(n) {
    if (yn) {
      var r = zi;
      if (r) {
        var l = r;
        if (!Zp(n, r)) {
          if (Jp(n))
            throw Error(s(418));
          r = ki(l.nextSibling);
          var c = Mi;
          r && Zp(n, r) ? qp(c, l) : (n.flags = n.flags & -4097 | 2, yn = !1, Mi = n);
        }
      } else {
        if (Jp(n))
          throw Error(s(418));
        n.flags = n.flags & -4097 | 2, yn = !1, Mi = n;
      }
    }
  }
  function eh(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    Mi = n;
  }
  function $f(n) {
    if (n !== Mi)
      return !1;
    if (!yn)
      return eh(n), yn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Xl(n.type, n.memoizedProps)), r && (r = zi)) {
      if (Jp(n))
        throw Am(), Error(s(418));
      for (; r; )
        qp(n, r), r = ki(r.nextSibling);
    }
    if (eh(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(s(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                zi = ki(n.nextSibling);
                break e;
              }
              r--;
            } else
              l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        zi = null;
      }
    } else
      zi = Mi ? ki(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Am() {
    for (var n = zi; n; )
      n = ki(n.nextSibling);
  }
  function Qu() {
    zi = Mi = null, yn = !1;
  }
  function tr(n) {
    ta === null ? ta = [n] : ta.push(n);
  }
  var VE = ie.ReactCurrentBatchConfig;
  function vi(n, r) {
    if (n && n.defaultProps) {
      r = L({}, r), n = n.defaultProps;
      for (var l in n)
        r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  var Xu = sn(null), Wa = null, qu = null, wc = null;
  function th() {
    wc = qu = Wa = null;
  }
  function nh(n) {
    var r = Xu.current;
    Ve(Xu), n._currentValue = r;
  }
  function cl(n, r, l) {
    for (; n !== null; ) {
      var c = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, c !== null && (c.childLanes |= r)) : c !== null && (c.childLanes & r) !== r && (c.childLanes |= r), n === l)
        break;
      n = n.return;
    }
  }
  function Vn(n, r) {
    Wa = n, wc = qu = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (yi = !0), n.firstContext = null);
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
  function Ui(n) {
    Hr === null ? Hr = [n] : Hr.push(n);
  }
  function Nm(n, r, l, c) {
    var h = r.interleaved;
    return h === null ? (l.next = l, Ui(r)) : (l.next = h.next, h.next = l), r.interleaved = l, Do(n, c);
  }
  function Do(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; )
      n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var fl = !1;
  function rh(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function km(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function hn(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function dl(n, r, l) {
    var c = n.updateQueue;
    if (c === null)
      return null;
    if (c = c.shared, kt & 2) {
      var h = c.pending;
      return h === null ? r.next = r : (r.next = h.next, h.next = r), c.pending = r, Do(n, l);
    }
    return h = c.interleaved, h === null ? (r.next = r, Ui(c)) : (r.next = h.next, h.next = r), c.interleaved = r, Do(n, l);
  }
  function Vf(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var c = r.lanes;
      c &= n.pendingLanes, l |= c, r.lanes = l, nc(n, l);
    }
  }
  function Lm(n, r) {
    var l = n.updateQueue, c = n.alternate;
    if (c !== null && (c = c.updateQueue, l === c)) {
      var h = null, m = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var C = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          m === null ? h = m = C : m = m.next = C, l = l.next;
        } while (l !== null);
        m === null ? h = m = r : m = m.next = r;
      } else
        h = m = r;
      l = { baseState: c.baseState, firstBaseUpdate: h, lastBaseUpdate: m, shared: c.shared, effects: c.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function Rc(n, r, l, c) {
    var h = n.updateQueue;
    fl = !1;
    var m = h.firstBaseUpdate, C = h.lastBaseUpdate, D = h.shared.pending;
    if (D !== null) {
      h.shared.pending = null;
      var M = D, Q = M.next;
      M.next = null, C === null ? m = Q : C.next = Q, C = M;
      var se = n.alternate;
      se !== null && (se = se.updateQueue, D = se.lastBaseUpdate, D !== C && (D === null ? se.firstBaseUpdate = Q : D.next = Q, se.lastBaseUpdate = M));
    }
    if (m !== null) {
      var de = h.baseState;
      C = 0, se = Q = M = null, D = m;
      do {
        var oe = D.lane, Oe = D.eventTime;
        if ((c & oe) === oe) {
          se !== null && (se = se.next = {
            eventTime: Oe,
            lane: 0,
            tag: D.tag,
            payload: D.payload,
            callback: D.callback,
            next: null
          });
          e: {
            var je = n, $e = D;
            switch (oe = r, Oe = l, $e.tag) {
              case 1:
                if (je = $e.payload, typeof je == "function") {
                  de = je.call(Oe, de, oe);
                  break e;
                }
                de = je;
                break e;
              case 3:
                je.flags = je.flags & -65537 | 128;
              case 0:
                if (je = $e.payload, oe = typeof je == "function" ? je.call(Oe, de, oe) : je, oe == null)
                  break e;
                de = L({}, de, oe);
                break e;
              case 2:
                fl = !0;
            }
          }
          D.callback !== null && D.lane !== 0 && (n.flags |= 64, oe = h.effects, oe === null ? h.effects = [D] : oe.push(D));
        } else
          Oe = { eventTime: Oe, lane: oe, tag: D.tag, payload: D.payload, callback: D.callback, next: null }, se === null ? (Q = se = Oe, M = de) : se = se.next = Oe, C |= oe;
        if (D = D.next, D === null) {
          if (D = h.shared.pending, D === null)
            break;
          oe = D, D = oe.next, oe.next = null, h.lastBaseUpdate = oe, h.shared.pending = null;
        }
      } while (!0);
      if (se === null && (M = de), h.baseState = M, h.firstBaseUpdate = Q, h.lastBaseUpdate = se, r = h.shared.interleaved, r !== null) {
        h = r;
        do
          C |= h.lane, h = h.next;
        while (h !== r);
      } else
        m === null && (h.shared.lanes = 0);
      fu |= C, n.lanes = C, n.memoizedState = de;
    }
  }
  function Zu(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var c = n[r], h = c.callback;
        if (h !== null) {
          if (c.callback = null, c = l, typeof h != "function")
            throw Error(s(191, h));
          h.call(c);
        }
      }
  }
  var eu = new f.Component().refs;
  function ih(n, r, l, c) {
    r = n.memoizedState, l = l(c, r), l = l == null ? r : L({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Bf = { isMounted: function(n) {
    return (n = n._reactInternals) ? Te(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var c = gr(), h = ko(n), m = hn(c, h);
    m.payload = r, l != null && (m.callback = l), r = dl(n, m, h), r !== null && (An(r, n, h, c), Vf(r, n, h));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var c = gr(), h = ko(n), m = hn(c, h);
    m.tag = 1, m.payload = r, l != null && (m.callback = l), r = dl(n, m, h), r !== null && (An(r, n, h, c), Vf(r, n, h));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = gr(), c = ko(n), h = hn(l, c);
    h.tag = 2, r != null && (h.callback = r), r = dl(n, h, c), r !== null && (An(r, n, c, l), Vf(r, n, c));
  } };
  function Mm(n, r, l, c, h, m, C) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(c, m, C) : r.prototype && r.prototype.isPureReactComponent ? !Yu(l, c) || !Yu(h, m) : !0;
  }
  function zm(n, r, l) {
    var c = !1, h = Zi, m = r.contextType;
    return typeof m == "object" && m !== null ? m = me(m) : (h = er(r) ? Yr : hr.current, c = r.contextTypes, m = (c = c != null) ? Li(n, h) : Zi), r = new r(l, m), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Bf, n.stateNode = r, r._reactInternals = n, c && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = h, n.__reactInternalMemoizedMaskedChildContext = m), r;
  }
  function Um(n, r, l, c) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, c), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, c), r.state !== n && Bf.enqueueReplaceState(r, r.state, null);
  }
  function ah(n, r, l, c) {
    var h = n.stateNode;
    h.props = l, h.state = n.memoizedState, h.refs = eu, rh(n);
    var m = r.contextType;
    typeof m == "object" && m !== null ? h.context = me(m) : (m = er(r) ? Yr : hr.current, h.context = Li(n, m)), h.state = n.memoizedState, m = r.getDerivedStateFromProps, typeof m == "function" && (ih(n, r, m, l), h.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof h.getSnapshotBeforeUpdate == "function" || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (r = h.state, typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount(), r !== h.state && Bf.enqueueReplaceState(h, h.state, null), Rc(n, l, h, c), h.state = n.memoizedState), typeof h.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Ju(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1)
            throw Error(s(309));
          var c = l.stateNode;
        }
        if (!c)
          throw Error(s(147, n));
        var h = c, m = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === m ? r.ref : (r = function(C) {
          var D = h.refs;
          D === eu && (D = h.refs = {}), C === null ? delete D[m] : D[m] = C;
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
  function Pm(n) {
    var r = n._init;
    return r(n._payload);
  }
  function jm(n) {
    function r(I, P) {
      if (n) {
        var B = I.deletions;
        B === null ? (I.deletions = [P], I.flags |= 16) : B.push(P);
      }
    }
    function l(I, P) {
      if (!n)
        return null;
      for (; P !== null; )
        r(I, P), P = P.sibling;
      return null;
    }
    function c(I, P) {
      for (I = /* @__PURE__ */ new Map(); P !== null; )
        P.key !== null ? I.set(P.key, P) : I.set(P.index, P), P = P.sibling;
      return I;
    }
    function h(I, P) {
      return I = _l(I, P), I.index = 0, I.sibling = null, I;
    }
    function m(I, P, B) {
      return I.index = B, n ? (B = I.alternate, B !== null ? (B = B.index, B < P ? (I.flags |= 2, P) : B) : (I.flags |= 2, P)) : (I.flags |= 1048576, P);
    }
    function C(I) {
      return n && I.alternate === null && (I.flags |= 2), I;
    }
    function D(I, P, B, ve) {
      return P === null || P.tag !== 6 ? (P = wd(B, I.mode, ve), P.return = I, P) : (P = h(P, B), P.return = I, P);
    }
    function M(I, P, B, ve) {
      var Be = B.type;
      return Be === Ne ? se(I, P, B.props.children, ve, B.key) : P !== null && (P.elementType === Be || typeof Be == "object" && Be !== null && Be.$$typeof === qe && Pm(Be) === P.type) ? (ve = h(P, B.props), ve.ref = Ju(I, P, B), ve.return = I, ve) : (ve = bd(B.type, B.key, B.props, null, I.mode, ve), ve.ref = Ju(I, P, B), ve.return = I, ve);
    }
    function Q(I, P, B, ve) {
      return P === null || P.tag !== 4 || P.stateNode.containerInfo !== B.containerInfo || P.stateNode.implementation !== B.implementation ? (P = Wc(B, I.mode, ve), P.return = I, P) : (P = h(P, B.children || []), P.return = I, P);
    }
    function se(I, P, B, ve, Be) {
      return P === null || P.tag !== 7 ? (P = vu(B, I.mode, ve, Be), P.return = I, P) : (P = h(P, B), P.return = I, P);
    }
    function de(I, P, B) {
      if (typeof P == "string" && P !== "" || typeof P == "number")
        return P = wd("" + P, I.mode, B), P.return = I, P;
      if (typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case Ce:
            return B = bd(P.type, P.key, P.props, null, I.mode, B), B.ref = Ju(I, null, P), B.return = I, B;
          case ae:
            return P = Wc(P, I.mode, B), P.return = I, P;
          case qe:
            var ve = P._init;
            return de(I, ve(P._payload), B);
        }
        if (Cn(P) || be(P))
          return P = vu(P, I.mode, B, null), P.return = I, P;
        xc(I, P);
      }
      return null;
    }
    function oe(I, P, B, ve) {
      var Be = P !== null ? P.key : null;
      if (typeof B == "string" && B !== "" || typeof B == "number")
        return Be !== null ? null : D(I, P, "" + B, ve);
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case Ce:
            return B.key === Be ? M(I, P, B, ve) : null;
          case ae:
            return B.key === Be ? Q(I, P, B, ve) : null;
          case qe:
            return Be = B._init, oe(
              I,
              P,
              Be(B._payload),
              ve
            );
        }
        if (Cn(B) || be(B))
          return Be !== null ? null : se(I, P, B, ve, null);
        xc(I, B);
      }
      return null;
    }
    function Oe(I, P, B, ve, Be) {
      if (typeof ve == "string" && ve !== "" || typeof ve == "number")
        return I = I.get(B) || null, D(P, I, "" + ve, Be);
      if (typeof ve == "object" && ve !== null) {
        switch (ve.$$typeof) {
          case Ce:
            return I = I.get(ve.key === null ? B : ve.key) || null, M(P, I, ve, Be);
          case ae:
            return I = I.get(ve.key === null ? B : ve.key) || null, Q(P, I, ve, Be);
          case qe:
            var ut = ve._init;
            return Oe(I, P, B, ut(ve._payload), Be);
        }
        if (Cn(ve) || be(ve))
          return I = I.get(B) || null, se(P, I, ve, Be, null);
        xc(P, ve);
      }
      return null;
    }
    function je(I, P, B, ve) {
      for (var Be = null, ut = null, Fe = P, ft = P = 0, cr = null; Fe !== null && ft < B.length; ft++) {
        Fe.index > ft ? (cr = Fe, Fe = null) : cr = Fe.sibling;
        var Bt = oe(I, Fe, B[ft], ve);
        if (Bt === null) {
          Fe === null && (Fe = cr);
          break;
        }
        n && Fe && Bt.alternate === null && r(I, Fe), P = m(Bt, P, ft), ut === null ? Be = Bt : ut.sibling = Bt, ut = Bt, Fe = cr;
      }
      if (ft === B.length)
        return l(I, Fe), yn && Jl(I, ft), Be;
      if (Fe === null) {
        for (; ft < B.length; ft++)
          Fe = de(I, B[ft], ve), Fe !== null && (P = m(Fe, P, ft), ut === null ? Be = Fe : ut.sibling = Fe, ut = Fe);
        return yn && Jl(I, ft), Be;
      }
      for (Fe = c(I, Fe); ft < B.length; ft++)
        cr = Oe(Fe, I, ft, B[ft], ve), cr !== null && (n && cr.alternate !== null && Fe.delete(cr.key === null ? ft : cr.key), P = m(cr, P, ft), ut === null ? Be = cr : ut.sibling = cr, ut = cr);
      return n && Fe.forEach(function(Lo) {
        return r(I, Lo);
      }), yn && Jl(I, ft), Be;
    }
    function $e(I, P, B, ve) {
      var Be = be(B);
      if (typeof Be != "function")
        throw Error(s(150));
      if (B = Be.call(B), B == null)
        throw Error(s(151));
      for (var ut = Be = null, Fe = P, ft = P = 0, cr = null, Bt = B.next(); Fe !== null && !Bt.done; ft++, Bt = B.next()) {
        Fe.index > ft ? (cr = Fe, Fe = null) : cr = Fe.sibling;
        var Lo = oe(I, Fe, Bt.value, ve);
        if (Lo === null) {
          Fe === null && (Fe = cr);
          break;
        }
        n && Fe && Lo.alternate === null && r(I, Fe), P = m(Lo, P, ft), ut === null ? Be = Lo : ut.sibling = Lo, ut = Lo, Fe = cr;
      }
      if (Bt.done)
        return l(
          I,
          Fe
        ), yn && Jl(I, ft), Be;
      if (Fe === null) {
        for (; !Bt.done; ft++, Bt = B.next())
          Bt = de(I, Bt.value, ve), Bt !== null && (P = m(Bt, P, ft), ut === null ? Be = Bt : ut.sibling = Bt, ut = Bt);
        return yn && Jl(I, ft), Be;
      }
      for (Fe = c(I, Fe); !Bt.done; ft++, Bt = B.next())
        Bt = Oe(Fe, I, ft, Bt.value, ve), Bt !== null && (n && Bt.alternate !== null && Fe.delete(Bt.key === null ? ft : Bt.key), P = m(Bt, P, ft), ut === null ? Be = Bt : ut.sibling = Bt, ut = Bt);
      return n && Fe.forEach(function(u_) {
        return r(I, u_);
      }), yn && Jl(I, ft), Be;
    }
    function Kn(I, P, B, ve) {
      if (typeof B == "object" && B !== null && B.type === Ne && B.key === null && (B = B.props.children), typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case Ce:
            e: {
              for (var Be = B.key, ut = P; ut !== null; ) {
                if (ut.key === Be) {
                  if (Be = B.type, Be === Ne) {
                    if (ut.tag === 7) {
                      l(I, ut.sibling), P = h(ut, B.props.children), P.return = I, I = P;
                      break e;
                    }
                  } else if (ut.elementType === Be || typeof Be == "object" && Be !== null && Be.$$typeof === qe && Pm(Be) === ut.type) {
                    l(I, ut.sibling), P = h(ut, B.props), P.ref = Ju(I, ut, B), P.return = I, I = P;
                    break e;
                  }
                  l(I, ut);
                  break;
                } else
                  r(I, ut);
                ut = ut.sibling;
              }
              B.type === Ne ? (P = vu(B.props.children, I.mode, ve, B.key), P.return = I, I = P) : (ve = bd(B.type, B.key, B.props, null, I.mode, ve), ve.ref = Ju(I, P, B), ve.return = I, I = ve);
            }
            return C(I);
          case ae:
            e: {
              for (ut = B.key; P !== null; ) {
                if (P.key === ut)
                  if (P.tag === 4 && P.stateNode.containerInfo === B.containerInfo && P.stateNode.implementation === B.implementation) {
                    l(I, P.sibling), P = h(P, B.children || []), P.return = I, I = P;
                    break e;
                  } else {
                    l(I, P);
                    break;
                  }
                else
                  r(I, P);
                P = P.sibling;
              }
              P = Wc(B, I.mode, ve), P.return = I, I = P;
            }
            return C(I);
          case qe:
            return ut = B._init, Kn(I, P, ut(B._payload), ve);
        }
        if (Cn(B))
          return je(I, P, B, ve);
        if (be(B))
          return $e(I, P, B, ve);
        xc(I, B);
      }
      return typeof B == "string" && B !== "" || typeof B == "number" ? (B = "" + B, P !== null && P.tag === 6 ? (l(I, P.sibling), P = h(P, B), P.return = I, I = P) : (l(I, P), P = wd(B, I.mode, ve), P.return = I, I = P), C(I)) : l(I, P);
    }
    return Kn;
  }
  var es = jm(!0), Fm = jm(!1), Dc = {}, Ga = sn(Dc), ts = sn(Dc), Oc = sn(Dc);
  function pl(n) {
    if (n === Dc)
      throw Error(s(174));
    return n;
  }
  function oh(n, r) {
    switch (Vt(Oc, r), Vt(ts, n), Vt(Ga, Dc), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : dr(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = dr(r, n);
    }
    Ve(Ga), Vt(Ga, r);
  }
  function ns() {
    Ve(Ga), Ve(ts), Ve(Oc);
  }
  function Yf(n) {
    pl(Oc.current);
    var r = pl(Ga.current), l = dr(r, n.type);
    r !== l && (Vt(ts, n), Vt(Ga, l));
  }
  function rt(n) {
    ts.current === n && (Ve(Ga), Ve(ts));
  }
  var We = sn(0);
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
  var Ac = ie.ReactCurrentDispatcher, lh = ie.ReactCurrentBatchConfig, tu = 0, On = null, Bn = null, te = null, Yn = !1, lt = !1, Ka = 0, Oo = 0;
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
  function nu(n, r, l, c, h, m) {
    if (tu = m, On = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Ac.current = n === null || n.memoizedState === null ? BE : YE, n = l(c, h), lt) {
      m = 0;
      do {
        if (lt = !1, Ka = 0, 25 <= m)
          throw Error(s(301));
        m += 1, te = Bn = null, r.updateQueue = null, Ac.current = WE, n = l(c, h);
      } while (lt);
    }
    if (Ac.current = ad, r = Bn !== null && Bn.next !== null, tu = 0, te = Bn = On = null, Yn = !1, r)
      throw Error(s(300));
    return n;
  }
  function hl() {
    var n = Ka !== 0;
    return Ka = 0, n;
  }
  function mi() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return te === null ? On.memoizedState = te = n : te = te.next = n, te;
  }
  function gi() {
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
    var r = gi(), l = r.queue;
    if (l === null)
      throw Error(s(311));
    l.lastRenderedReducer = n;
    var c = Bn, h = c.baseQueue, m = l.pending;
    if (m !== null) {
      if (h !== null) {
        var C = h.next;
        h.next = m.next, m.next = C;
      }
      c.baseQueue = h = m, l.pending = null;
    }
    if (h !== null) {
      m = h.next, c = c.baseState;
      var D = C = null, M = null, Q = m;
      do {
        var se = Q.lane;
        if ((tu & se) === se)
          M !== null && (M = M.next = { lane: 0, action: Q.action, hasEagerState: Q.hasEagerState, eagerState: Q.eagerState, next: null }), c = Q.hasEagerState ? Q.eagerState : n(c, Q.action);
        else {
          var de = {
            lane: se,
            action: Q.action,
            hasEagerState: Q.hasEagerState,
            eagerState: Q.eagerState,
            next: null
          };
          M === null ? (D = M = de, C = c) : M = M.next = de, On.lanes |= se, fu |= se;
        }
        Q = Q.next;
      } while (Q !== null && Q !== m);
      M === null ? C = c : M.next = D, Ta(c, r.memoizedState) || (yi = !0), r.memoizedState = c, r.baseState = C, r.baseQueue = M, l.lastRenderedState = c;
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
    var r = gi(), l = r.queue;
    if (l === null)
      throw Error(s(311));
    l.lastRenderedReducer = n;
    var c = l.dispatch, h = l.pending, m = r.memoizedState;
    if (h !== null) {
      l.pending = null;
      var C = h = h.next;
      do
        m = n(m, C.action), C = C.next;
      while (C !== h);
      Ta(m, r.memoizedState) || (yi = !0), r.memoizedState = m, r.baseQueue === null && (r.baseState = m), l.lastRenderedState = m;
    }
    return [m, c];
  }
  function Wf() {
  }
  function Gf(n, r) {
    var l = On, c = gi(), h = r(), m = !Ta(c.memoizedState, h);
    if (m && (c.memoizedState = h, yi = !0), c = c.queue, Lc(Xf.bind(null, l, c, n), [n]), c.getSnapshot !== r || m || te !== null && te.memoizedState.tag & 1) {
      if (l.flags |= 2048, iu(9, Qf.bind(null, l, c, h, r), void 0, null), jn === null)
        throw Error(s(349));
      tu & 30 || Kf(l, r, h);
    }
    return h;
  }
  function Kf(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = On.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, On.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Qf(n, r, l, c) {
    r.value = l, r.getSnapshot = c, qf(r) && Zf(n);
  }
  function Xf(n, r, l) {
    return l(function() {
      qf(r) && Zf(n);
    });
  }
  function qf(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !Ta(n, l);
    } catch {
      return !0;
    }
  }
  function Zf(n) {
    var r = Do(n, 1);
    r !== null && An(r, n, 1, -1);
  }
  function Jf(n) {
    var r = mi();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ru, lastRenderedState: n }, r.queue = n, n = n.dispatch = id.bind(null, On, n), [r.memoizedState, n];
  }
  function iu(n, r, l, c) {
    return n = { tag: n, create: r, destroy: l, deps: c, next: null }, r = On.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, On.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (c = l.next, l.next = n, n.next = c, r.lastEffect = n)), n;
  }
  function ed() {
    return gi().memoizedState;
  }
  function rs(n, r, l, c) {
    var h = mi();
    On.flags |= n, h.memoizedState = iu(1 | r, l, void 0, c === void 0 ? null : c);
  }
  function au(n, r, l, c) {
    var h = gi();
    c = c === void 0 ? null : c;
    var m = void 0;
    if (Bn !== null) {
      var C = Bn.memoizedState;
      if (m = C.destroy, c !== null && ra(c, C.deps)) {
        h.memoizedState = iu(r, l, m, c);
        return;
      }
    }
    On.flags |= n, h.memoizedState = iu(1 | r, l, m, c);
  }
  function ou(n, r) {
    return rs(8390656, 8, n, r);
  }
  function Lc(n, r) {
    return au(2048, 8, n, r);
  }
  function td(n, r) {
    return au(4, 2, n, r);
  }
  function nd(n, r) {
    return au(4, 4, n, r);
  }
  function rd(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function uh(n, r, l) {
    return l = l != null ? l.concat([n]) : null, au(4, 4, rd.bind(null, r, n), l);
  }
  function lu() {
  }
  function sh(n, r) {
    var l = gi();
    r = r === void 0 ? null : r;
    var c = l.memoizedState;
    return c !== null && r !== null && ra(r, c[1]) ? c[0] : (l.memoizedState = [n, r], n);
  }
  function is(n, r) {
    var l = gi();
    r = r === void 0 ? null : r;
    var c = l.memoizedState;
    return c !== null && r !== null && ra(r, c[1]) ? c[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function vl(n, r, l) {
    return tu & 21 ? (Ta(l, r) || (l = $l(), On.lanes |= l, fu |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, yi = !0), n.memoizedState = l);
  }
  function Pi(n, r) {
    var l = Mt;
    Mt = l !== 0 && 4 > l ? l : 4, n(!0);
    var c = lh.transition;
    lh.transition = {};
    try {
      n(!1), r();
    } finally {
      Mt = l, lh.transition = c;
    }
  }
  function Im() {
    return gi().memoizedState;
  }
  function vn(n, r, l) {
    var c = ko(n);
    if (l = { lane: c, action: l, hasEagerState: !1, eagerState: null, next: null }, Mc(n))
      as(r, l);
    else if (l = Nm(n, r, l, c), l !== null) {
      var h = gr();
      An(l, n, c, h), zc(l, r, c);
    }
  }
  function id(n, r, l) {
    var c = ko(n), h = { lane: c, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (Mc(n))
      as(r, h);
    else {
      var m = n.alternate;
      if (n.lanes === 0 && (m === null || m.lanes === 0) && (m = r.lastRenderedReducer, m !== null))
        try {
          var C = r.lastRenderedState, D = m(C, l);
          if (h.hasEagerState = !0, h.eagerState = D, Ta(D, C)) {
            var M = r.interleaved;
            M === null ? (h.next = h, Ui(r)) : (h.next = M.next, M.next = h), r.interleaved = h;
            return;
          }
        } catch {
        } finally {
        }
      l = Nm(n, r, h, c), l !== null && (h = gr(), An(l, n, c, h), zc(l, r, c));
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
      var c = r.lanes;
      c &= n.pendingLanes, l |= c, r.lanes = l, nc(n, l);
    }
  }
  var ad = { readContext: me, useCallback: Un, useContext: Un, useEffect: Un, useImperativeHandle: Un, useInsertionEffect: Un, useLayoutEffect: Un, useMemo: Un, useReducer: Un, useRef: Un, useState: Un, useDebugValue: Un, useDeferredValue: Un, useTransition: Un, useMutableSource: Un, useSyncExternalStore: Un, useId: Un, unstable_isNewReconciler: !1 }, BE = { readContext: me, useCallback: function(n, r) {
    return mi().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: me, useEffect: ou, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, rs(
      4194308,
      4,
      rd.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return rs(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return rs(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = mi();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var c = mi();
    return r = l !== void 0 ? l(r) : r, c.memoizedState = c.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, c.queue = n, n = n.dispatch = vn.bind(null, On, n), [c.memoizedState, n];
  }, useRef: function(n) {
    var r = mi();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Jf, useDebugValue: lu, useDeferredValue: function(n) {
    return mi().memoizedState = n;
  }, useTransition: function() {
    var n = Jf(!1), r = n[0];
    return n = Pi.bind(null, n[1]), mi().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var c = On, h = mi();
    if (yn) {
      if (l === void 0)
        throw Error(s(407));
      l = l();
    } else {
      if (l = r(), jn === null)
        throw Error(s(349));
      tu & 30 || Kf(c, r, l);
    }
    h.memoizedState = l;
    var m = { value: l, getSnapshot: r };
    return h.queue = m, ou(Xf.bind(
      null,
      c,
      m,
      n
    ), [n]), c.flags |= 2048, iu(9, Qf.bind(null, c, m, l, r), void 0, null), l;
  }, useId: function() {
    var n = mi(), r = jn.identifierPrefix;
    if (yn) {
      var l = Tr, c = hi;
      l = (c & ~(1 << 32 - Br(c) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Ka++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else
      l = Oo++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, YE = {
    readContext: me,
    useCallback: sh,
    useContext: me,
    useEffect: Lc,
    useImperativeHandle: uh,
    useInsertionEffect: td,
    useLayoutEffect: nd,
    useMemo: is,
    useReducer: Nc,
    useRef: ed,
    useState: function() {
      return Nc(ru);
    },
    useDebugValue: lu,
    useDeferredValue: function(n) {
      var r = gi();
      return vl(r, Bn.memoizedState, n);
    },
    useTransition: function() {
      var n = Nc(ru)[0], r = gi().memoizedState;
      return [n, r];
    },
    useMutableSource: Wf,
    useSyncExternalStore: Gf,
    useId: Im,
    unstable_isNewReconciler: !1
  }, WE = { readContext: me, useCallback: sh, useContext: me, useEffect: Lc, useImperativeHandle: uh, useInsertionEffect: td, useLayoutEffect: nd, useMemo: is, useReducer: kc, useRef: ed, useState: function() {
    return kc(ru);
  }, useDebugValue: lu, useDeferredValue: function(n) {
    var r = gi();
    return Bn === null ? r.memoizedState = n : vl(r, Bn.memoizedState, n);
  }, useTransition: function() {
    var n = kc(ru)[0], r = gi().memoizedState;
    return [n, r];
  }, useMutableSource: Wf, useSyncExternalStore: Gf, useId: Im, unstable_isNewReconciler: !1 };
  function ml(n, r) {
    try {
      var l = "", c = r;
      do
        l += gt(c), c = c.return;
      while (c);
      var h = l;
    } catch (m) {
      h = `
Error generating stack: ` + m.message + `
` + m.stack;
    }
    return { value: n, source: r, stack: h, digest: null };
  }
  function ch(n, r, l) {
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
  var Hm = typeof WeakMap == "function" ? WeakMap : Map;
  function $m(n, r, l) {
    l = hn(-1, l), l.tag = 3, l.payload = { element: null };
    var c = r.value;
    return l.callback = function() {
      gd || (gd = !0, Eh = c), Uc(n, r);
    }, l;
  }
  function Vm(n, r, l) {
    l = hn(-1, l), l.tag = 3;
    var c = n.type.getDerivedStateFromError;
    if (typeof c == "function") {
      var h = r.value;
      l.payload = function() {
        return c(h);
      }, l.callback = function() {
        Uc(n, r);
      };
    }
    var m = n.stateNode;
    return m !== null && typeof m.componentDidCatch == "function" && (l.callback = function() {
      Uc(n, r), typeof c != "function" && (oa === null ? oa = /* @__PURE__ */ new Set([this]) : oa.add(this));
      var C = r.stack;
      this.componentDidCatch(r.value, { componentStack: C !== null ? C : "" });
    }), l;
  }
  function Pc(n, r, l) {
    var c = n.pingCache;
    if (c === null) {
      c = n.pingCache = new Hm();
      var h = /* @__PURE__ */ new Set();
      c.set(r, h);
    } else
      h = c.get(r), h === void 0 && (h = /* @__PURE__ */ new Set(), c.set(r, h));
    h.has(l) || (h.add(l), n = n_.bind(null, n, r, l), r.then(n, n));
  }
  function Bm(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function fh(n, r, l, c, h) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = h, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = hn(-1, 1), r.tag = 2, dl(l, r, 1))), l.lanes |= 1), n);
  }
  var Ym = ie.ReactCurrentOwner, yi = !1;
  function Wn(n, r, l, c) {
    r.child = n === null ? Fm(r, null, l, c) : es(r, n.child, l, c);
  }
  function os(n, r, l, c, h) {
    l = l.render;
    var m = r.ref;
    return Vn(r, h), c = nu(n, r, l, c, m, h), l = hl(), n !== null && !yi ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~h, Gn(n, r, h)) : (yn && l && Ff(r), r.flags |= 1, Wn(n, r, c, h), r.child);
  }
  function gl(n, r, l, c, h) {
    if (n === null) {
      var m = l.type;
      return typeof m == "function" && !Th(m) && m.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = m, od(n, r, m, c, h)) : (n = bd(l.type, null, c, r, r.mode, h), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (m = n.child, !(n.lanes & h)) {
      var C = m.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Yu, l(C, c) && n.ref === r.ref)
        return Gn(n, r, h);
    }
    return r.flags |= 1, n = _l(m, c), n.ref = r.ref, n.return = r, r.child = n;
  }
  function od(n, r, l, c, h) {
    if (n !== null) {
      var m = n.memoizedProps;
      if (Yu(m, c) && n.ref === r.ref)
        if (yi = !1, r.pendingProps = c = m, (n.lanes & h) !== 0)
          n.flags & 131072 && (yi = !0);
        else
          return r.lanes = n.lanes, Gn(n, r, h);
    }
    return Tt(n, r, l, c, h);
  }
  function Ei(n, r, l) {
    var c = r.pendingProps, h = c.children, m = n !== null ? n.memoizedState : null;
    if (c.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Vt(ms, _i), _i |= l;
      else {
        if (!(l & 1073741824))
          return n = m !== null ? m.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Vt(ms, _i), _i |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, c = m !== null ? m.baseLanes : l, Vt(ms, _i), _i |= c;
      }
    else
      m !== null ? (c = m.baseLanes | l, r.memoizedState = null) : c = l, Vt(ms, _i), _i |= c;
    return Wn(n, r, h, l), r.child;
  }
  function uu(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Tt(n, r, l, c, h) {
    var m = er(l) ? Yr : hr.current;
    return m = Li(r, m), Vn(r, h), l = nu(n, r, l, c, m, h), c = hl(), n !== null && !yi ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~h, Gn(n, r, h)) : (yn && c && Ff(r), r.flags |= 1, Wn(n, r, l, h), r.child);
  }
  function jc(n, r, l, c, h) {
    if (er(l)) {
      var m = !0;
      ql(r);
    } else
      m = !1;
    if (Vn(r, h), r.stateNode === null)
      Ic(n, r), zm(r, l, c), ah(r, l, c, h), c = !0;
    else if (n === null) {
      var C = r.stateNode, D = r.memoizedProps;
      C.props = D;
      var M = C.context, Q = l.contextType;
      typeof Q == "object" && Q !== null ? Q = me(Q) : (Q = er(l) ? Yr : hr.current, Q = Li(r, Q));
      var se = l.getDerivedStateFromProps, de = typeof se == "function" || typeof C.getSnapshotBeforeUpdate == "function";
      de || typeof C.UNSAFE_componentWillReceiveProps != "function" && typeof C.componentWillReceiveProps != "function" || (D !== c || M !== Q) && Um(r, C, c, Q), fl = !1;
      var oe = r.memoizedState;
      C.state = oe, Rc(r, c, C, h), M = r.memoizedState, D !== c || oe !== M || _t.current || fl ? (typeof se == "function" && (ih(r, l, se, c), M = r.memoizedState), (D = fl || Mm(r, l, D, c, oe, M, Q)) ? (de || typeof C.UNSAFE_componentWillMount != "function" && typeof C.componentWillMount != "function" || (typeof C.componentWillMount == "function" && C.componentWillMount(), typeof C.UNSAFE_componentWillMount == "function" && C.UNSAFE_componentWillMount()), typeof C.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof C.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = c, r.memoizedState = M), C.props = c, C.state = M, C.context = Q, c = D) : (typeof C.componentDidMount == "function" && (r.flags |= 4194308), c = !1);
    } else {
      C = r.stateNode, km(n, r), D = r.memoizedProps, Q = r.type === r.elementType ? D : vi(r.type, D), C.props = Q, de = r.pendingProps, oe = C.context, M = l.contextType, typeof M == "object" && M !== null ? M = me(M) : (M = er(l) ? Yr : hr.current, M = Li(r, M));
      var Oe = l.getDerivedStateFromProps;
      (se = typeof Oe == "function" || typeof C.getSnapshotBeforeUpdate == "function") || typeof C.UNSAFE_componentWillReceiveProps != "function" && typeof C.componentWillReceiveProps != "function" || (D !== de || oe !== M) && Um(r, C, c, M), fl = !1, oe = r.memoizedState, C.state = oe, Rc(r, c, C, h);
      var je = r.memoizedState;
      D !== de || oe !== je || _t.current || fl ? (typeof Oe == "function" && (ih(r, l, Oe, c), je = r.memoizedState), (Q = fl || Mm(r, l, Q, c, oe, je, M) || !1) ? (se || typeof C.UNSAFE_componentWillUpdate != "function" && typeof C.componentWillUpdate != "function" || (typeof C.componentWillUpdate == "function" && C.componentWillUpdate(c, je, M), typeof C.UNSAFE_componentWillUpdate == "function" && C.UNSAFE_componentWillUpdate(c, je, M)), typeof C.componentDidUpdate == "function" && (r.flags |= 4), typeof C.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof C.componentDidUpdate != "function" || D === n.memoizedProps && oe === n.memoizedState || (r.flags |= 4), typeof C.getSnapshotBeforeUpdate != "function" || D === n.memoizedProps && oe === n.memoizedState || (r.flags |= 1024), r.memoizedProps = c, r.memoizedState = je), C.props = c, C.state = je, C.context = M, c = Q) : (typeof C.componentDidUpdate != "function" || D === n.memoizedProps && oe === n.memoizedState || (r.flags |= 4), typeof C.getSnapshotBeforeUpdate != "function" || D === n.memoizedProps && oe === n.memoizedState || (r.flags |= 1024), c = !1);
    }
    return ld(n, r, l, c, m, h);
  }
  function ld(n, r, l, c, h, m) {
    uu(n, r);
    var C = (r.flags & 128) !== 0;
    if (!c && !C)
      return h && Dm(r, l, !1), Gn(n, r, m);
    c = r.stateNode, Ym.current = r;
    var D = C && typeof l.getDerivedStateFromError != "function" ? null : c.render();
    return r.flags |= 1, n !== null && C ? (r.child = es(r, n.child, null, m), r.child = es(r, null, D, m)) : Wn(n, r, D, m), r.memoizedState = c.state, h && Dm(r, l, !0), r.child;
  }
  function GE(n) {
    var r = n.stateNode;
    r.pendingContext ? Ba(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Ba(n, r.context, !1), oh(n, r.containerInfo);
  }
  function Wm(n, r, l, c, h) {
    return Qu(), tr(h), r.flags |= 256, Wn(n, r, l, c), r.child;
  }
  var Fc = { dehydrated: null, treeContext: null, retryLane: 0 };
  function su(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Gm(n, r, l) {
    var c = r.pendingProps, h = We.current, m = !1, C = (r.flags & 128) !== 0, D;
    if ((D = C) || (D = n !== null && n.memoizedState === null ? !1 : (h & 2) !== 0), D ? (m = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (h |= 1), Vt(We, h & 1), n === null)
      return Hf(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (C = c.children, n = c.fallback, m ? (c = r.mode, m = r.child, C = { mode: "hidden", children: C }, !(c & 1) && m !== null ? (m.childLanes = 0, m.pendingProps = C) : m = Td(C, c, 0, null), n = vu(n, c, l, null), m.return = r, n.return = r, m.sibling = n, r.child = m, r.child.memoizedState = su(l), r.memoizedState = Fc, n) : ud(r, C));
    if (h = n.memoizedState, h !== null && (D = h.dehydrated, D !== null))
      return dh(n, r, C, c, D, h, l);
    if (m) {
      m = c.fallback, C = r.mode, h = n.child, D = h.sibling;
      var M = { mode: "hidden", children: c.children };
      return !(C & 1) && r.child !== h ? (c = r.child, c.childLanes = 0, c.pendingProps = M, r.deletions = null) : (c = _l(h, M), c.subtreeFlags = h.subtreeFlags & 14680064), D !== null ? m = _l(D, m) : (m = vu(m, C, l, null), m.flags |= 2), m.return = r, c.return = r, c.sibling = m, r.child = c, c = m, m = r.child, C = n.child.memoizedState, C = C === null ? su(l) : { baseLanes: C.baseLanes | l, cachePool: null, transitions: C.transitions }, m.memoizedState = C, m.childLanes = n.childLanes & ~l, r.memoizedState = Fc, c;
    }
    return m = n.child, n = m.sibling, c = _l(m, { mode: "visible", children: c.children }), !(r.mode & 1) && (c.lanes = l), c.return = r, c.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = c, r.memoizedState = null, c;
  }
  function ud(n, r) {
    return r = Td({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function sd(n, r, l, c) {
    return c !== null && tr(c), es(r, n.child, null, l), n = ud(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function dh(n, r, l, c, h, m, C) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, c = ch(Error(s(422))), sd(n, r, C, c)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (m = c.fallback, h = r.mode, c = Td({ mode: "visible", children: c.children }, h, 0, null), m = vu(m, h, C, null), m.flags |= 2, c.return = r, m.return = r, c.sibling = m, r.child = c, r.mode & 1 && es(r, n.child, null, C), r.child.memoizedState = su(C), r.memoizedState = Fc, m);
    if (!(r.mode & 1))
      return sd(n, r, C, null);
    if (h.data === "$!") {
      if (c = h.nextSibling && h.nextSibling.dataset, c)
        var D = c.dgst;
      return c = D, m = Error(s(419)), c = ch(m, c, void 0), sd(n, r, C, c);
    }
    if (D = (C & n.childLanes) !== 0, yi || D) {
      if (c = jn, c !== null) {
        switch (C & -C) {
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
        h = h & (c.suspendedLanes | C) ? 0 : h, h !== 0 && h !== m.retryLane && (m.retryLane = h, Do(n, h), An(c, n, h, -1));
      }
      return Yc(), c = ch(Error(s(421))), sd(n, r, C, c);
    }
    return h.data === "$?" ? (r.flags |= 128, r.child = n.child, r = bh.bind(null, n), h._reactRetry = r, null) : (n = m.treeContext, zi = ki(h.nextSibling), Mi = r, yn = !0, ta = null, n !== null && (di[pi++] = hi, di[pi++] = Tr, di[pi++] = xa, hi = n.id, Tr = n.overflow, xa = r), r = ud(r, c.children), r.flags |= 4096, r);
  }
  function Km(n, r, l) {
    n.lanes |= r;
    var c = n.alternate;
    c !== null && (c.lanes |= r), cl(n.return, r, l);
  }
  function cd(n, r, l, c, h) {
    var m = n.memoizedState;
    m === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: c, tail: l, tailMode: h } : (m.isBackwards = r, m.rendering = null, m.renderingStartTime = 0, m.last = c, m.tail = l, m.tailMode = h);
  }
  function ph(n, r, l) {
    var c = r.pendingProps, h = c.revealOrder, m = c.tail;
    if (Wn(n, r, c.children, l), c = We.current, c & 2)
      c = c & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && Km(n, l, r);
            else if (n.tag === 19)
              Km(n, l, r);
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
      c &= 1;
    }
    if (Vt(We, c), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (h) {
        case "forwards":
          for (l = r.child, h = null; l !== null; )
            n = l.alternate, n !== null && Ht(n) === null && (h = l), l = l.sibling;
          l = h, l === null ? (h = r.child, r.child = null) : (h = l.sibling, l.sibling = null), cd(r, !1, h, l, m);
          break;
        case "backwards":
          for (l = null, h = r.child, r.child = null; h !== null; ) {
            if (n = h.alternate, n !== null && Ht(n) === null) {
              r.child = h;
              break;
            }
            n = h.sibling, h.sibling = l, l = h, h = n;
          }
          cd(r, !0, l, null, m);
          break;
        case "together":
          cd(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function Ic(n, r) {
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
        Yf(r);
        break;
      case 1:
        er(r.type) && ql(r);
        break;
      case 4:
        oh(r, r.stateNode.containerInfo);
        break;
      case 10:
        var c = r.type._context, h = r.memoizedProps.value;
        Vt(Xu, c._currentValue), c._currentValue = h;
        break;
      case 13:
        if (c = r.memoizedState, c !== null)
          return c.dehydrated !== null ? (Vt(We, We.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? Gm(n, r, l) : (Vt(We, We.current & 1), n = Gn(n, r, l), n !== null ? n.sibling : null);
        Vt(We, We.current & 1);
        break;
      case 19:
        if (c = (l & r.childLanes) !== 0, n.flags & 128) {
          if (c)
            return ph(n, r, l);
          r.flags |= 128;
        }
        if (h = r.memoizedState, h !== null && (h.rendering = null, h.tail = null, h.lastEffect = null), Vt(We, We.current), c)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Ei(n, r, l);
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
  }, us = function(n, r, l, c) {
    var h = n.memoizedProps;
    if (h !== c) {
      n = r.stateNode, pl(Ga.current);
      var m = null;
      switch (l) {
        case "input":
          h = Sn(n, h), c = Sn(n, c), m = [];
          break;
        case "select":
          h = L({}, h, { value: void 0 }), c = L({}, c, { value: void 0 }), m = [];
          break;
        case "textarea":
          h = zr(n, h), c = zr(n, c), m = [];
          break;
        default:
          typeof h.onClick != "function" && typeof c.onClick == "function" && (n.onclick = Uf);
      }
      $t(l, c);
      var C;
      l = null;
      for (Q in h)
        if (!c.hasOwnProperty(Q) && h.hasOwnProperty(Q) && h[Q] != null)
          if (Q === "style") {
            var D = h[Q];
            for (C in D)
              D.hasOwnProperty(C) && (l || (l = {}), l[C] = "");
          } else
            Q !== "dangerouslySetInnerHTML" && Q !== "children" && Q !== "suppressContentEditableWarning" && Q !== "suppressHydrationWarning" && Q !== "autoFocus" && (y.hasOwnProperty(Q) ? m || (m = []) : (m = m || []).push(Q, null));
      for (Q in c) {
        var M = c[Q];
        if (D = h != null ? h[Q] : void 0, c.hasOwnProperty(Q) && M !== D && (M != null || D != null))
          if (Q === "style")
            if (D) {
              for (C in D)
                !D.hasOwnProperty(C) || M && M.hasOwnProperty(C) || (l || (l = {}), l[C] = "");
              for (C in M)
                M.hasOwnProperty(C) && D[C] !== M[C] && (l || (l = {}), l[C] = M[C]);
            } else
              l || (m || (m = []), m.push(
                Q,
                l
              )), l = M;
          else
            Q === "dangerouslySetInnerHTML" ? (M = M ? M.__html : void 0, D = D ? D.__html : void 0, M != null && D !== M && (m = m || []).push(Q, M)) : Q === "children" ? typeof M != "string" && typeof M != "number" || (m = m || []).push(Q, "" + M) : Q !== "suppressContentEditableWarning" && Q !== "suppressHydrationWarning" && (y.hasOwnProperty(Q) ? (M != null && Q === "onScroll" && un("scroll", n), m || D === M || (m = [])) : (m = m || []).push(Q, M));
      }
      l && (m = m || []).push("style", l);
      var Q = m;
      (r.updateQueue = Q) && (r.flags |= 4);
    }
  }, ia = function(n, r, l, c) {
    l !== c && (r.flags |= 4);
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
          for (var c = null; l !== null; )
            l.alternate !== null && (c = l), l = l.sibling;
          c === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : c.sibling = null;
      }
  }
  function $r(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, c = 0;
    if (r)
      for (var h = n.child; h !== null; )
        l |= h.lanes | h.childLanes, c |= h.subtreeFlags & 14680064, c |= h.flags & 14680064, h.return = n, h = h.sibling;
    else
      for (h = n.child; h !== null; )
        l |= h.lanes | h.childLanes, c |= h.subtreeFlags, c |= h.flags, h.return = n, h = h.sibling;
    return n.subtreeFlags |= c, n.childLanes = l, r;
  }
  function KE(n, r, l) {
    var c = r.pendingProps;
    switch (If(r), r.tag) {
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
        return er(r.type) && fi(), $r(r), null;
      case 3:
        return c = r.stateNode, ns(), Ve(_t), Ve(hr), na(), c.pendingContext && (c.context = c.pendingContext, c.pendingContext = null), (n === null || n.child === null) && ($f(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, ta !== null && (_h(ta), ta = null))), ls(n, r), $r(r), null;
      case 5:
        rt(r);
        var h = pl(Oc.current);
        if (l = r.type, n !== null && r.stateNode != null)
          us(n, r, l, c, h), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!c) {
            if (r.stateNode === null)
              throw Error(s(166));
            return $r(r), null;
          }
          if (n = pl(Ga.current), $f(r)) {
            c = r.stateNode, l = r.type;
            var m = r.memoizedProps;
            switch (c[qi] = r, c[Tc] = m, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                un("cancel", c), un("close", c);
                break;
              case "iframe":
              case "object":
              case "embed":
                un("load", c);
                break;
              case "video":
              case "audio":
                for (h = 0; h < bo.length; h++)
                  un(bo[h], c);
                break;
              case "source":
                un("error", c);
                break;
              case "img":
              case "image":
              case "link":
                un(
                  "error",
                  c
                ), un("load", c);
                break;
              case "details":
                un("toggle", c);
                break;
              case "input":
                or(c, m), un("invalid", c);
                break;
              case "select":
                c._wrapperState = { wasMultiple: !!m.multiple }, un("invalid", c);
                break;
              case "textarea":
                Ur(c, m), un("invalid", c);
            }
            $t(l, m), h = null;
            for (var C in m)
              if (m.hasOwnProperty(C)) {
                var D = m[C];
                C === "children" ? typeof D == "string" ? c.textContent !== D && (m.suppressHydrationWarning !== !0 && _c(c.textContent, D, n), h = ["children", D]) : typeof D == "number" && c.textContent !== "" + D && (m.suppressHydrationWarning !== !0 && _c(
                  c.textContent,
                  D,
                  n
                ), h = ["children", "" + D]) : y.hasOwnProperty(C) && D != null && C === "onScroll" && un("scroll", c);
              }
            switch (l) {
              case "input":
                Hn(c), Ln(c, m, !0);
                break;
              case "textarea":
                Hn(c), Pr(c);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof m.onClick == "function" && (c.onclick = Uf);
            }
            c = h, r.updateQueue = c, c !== null && (r.flags |= 4);
          } else {
            C = h.nodeType === 9 ? h : h.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Zn(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = C.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof c.is == "string" ? n = C.createElement(l, { is: c.is }) : (n = C.createElement(l), l === "select" && (C = n, c.multiple ? C.multiple = !0 : c.size && (C.size = c.size))) : n = C.createElementNS(n, l), n[qi] = r, n[Tc] = c, Qa(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (C = $n(l, c), l) {
                case "dialog":
                  un("cancel", n), un("close", n), h = c;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  un("load", n), h = c;
                  break;
                case "video":
                case "audio":
                  for (h = 0; h < bo.length; h++)
                    un(bo[h], n);
                  h = c;
                  break;
                case "source":
                  un("error", n), h = c;
                  break;
                case "img":
                case "image":
                case "link":
                  un(
                    "error",
                    n
                  ), un("load", n), h = c;
                  break;
                case "details":
                  un("toggle", n), h = c;
                  break;
                case "input":
                  or(n, c), h = Sn(n, c), un("invalid", n);
                  break;
                case "option":
                  h = c;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!c.multiple }, h = L({}, c, { value: void 0 }), un("invalid", n);
                  break;
                case "textarea":
                  Ur(n, c), h = zr(n, c), un("invalid", n);
                  break;
                default:
                  h = c;
              }
              $t(l, h), D = h;
              for (m in D)
                if (D.hasOwnProperty(m)) {
                  var M = D[m];
                  m === "style" ? xt(n, M) : m === "dangerouslySetInnerHTML" ? (M = M ? M.__html : void 0, M != null && xi(n, M)) : m === "children" ? typeof M == "string" ? (l !== "textarea" || M !== "") && Di(n, M) : typeof M == "number" && Di(n, "" + M) : m !== "suppressContentEditableWarning" && m !== "suppressHydrationWarning" && m !== "autoFocus" && (y.hasOwnProperty(m) ? M != null && m === "onScroll" && un("scroll", n) : M != null && ge(n, m, M, C));
                }
              switch (l) {
                case "input":
                  Hn(n), Ln(n, c, !1);
                  break;
                case "textarea":
                  Hn(n), Pr(n);
                  break;
                case "option":
                  c.value != null && n.setAttribute("value", "" + mt(c.value));
                  break;
                case "select":
                  n.multiple = !!c.multiple, m = c.value, m != null ? bn(n, !!c.multiple, m, !1) : c.defaultValue != null && bn(
                    n,
                    !!c.multiple,
                    c.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof h.onClick == "function" && (n.onclick = Uf);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  c = !!c.autoFocus;
                  break e;
                case "img":
                  c = !0;
                  break e;
                default:
                  c = !1;
              }
            }
            c && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return $r(r), null;
      case 6:
        if (n && r.stateNode != null)
          ia(n, r, n.memoizedProps, c);
        else {
          if (typeof c != "string" && r.stateNode === null)
            throw Error(s(166));
          if (l = pl(Oc.current), pl(Ga.current), $f(r)) {
            if (c = r.stateNode, l = r.memoizedProps, c[qi] = r, (m = c.nodeValue !== l) && (n = Mi, n !== null))
              switch (n.tag) {
                case 3:
                  _c(c.nodeValue, l, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && _c(c.nodeValue, l, (n.mode & 1) !== 0);
              }
            m && (r.flags |= 4);
          } else
            c = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(c), c[qi] = r, r.stateNode = c;
        }
        return $r(r), null;
      case 13:
        if (Ve(We), c = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (yn && zi !== null && r.mode & 1 && !(r.flags & 128))
            Am(), Qu(), r.flags |= 98560, m = !1;
          else if (m = $f(r), c !== null && c.dehydrated !== null) {
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
            ta !== null && (_h(ta), ta = null), m = !0;
          if (!m)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (c = c !== null, c !== (n !== null && n.memoizedState !== null) && c && (r.child.flags |= 8192, r.mode & 1 && (n === null || We.current & 1 ? ur === 0 && (ur = 3) : Yc())), r.updateQueue !== null && (r.flags |= 4), $r(r), null);
      case 4:
        return ns(), ls(n, r), n === null && $a(r.stateNode.containerInfo), $r(r), null;
      case 10:
        return nh(r.type._context), $r(r), null;
      case 17:
        return er(r.type) && fi(), $r(r), null;
      case 19:
        if (Ve(We), m = r.memoizedState, m === null)
          return $r(r), null;
        if (c = (r.flags & 128) !== 0, C = m.rendering, C === null)
          if (c)
            Pn(m, !1);
          else {
            if (ur !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (C = Ht(n), C !== null) {
                  for (r.flags |= 128, Pn(m, !1), c = C.updateQueue, c !== null && (r.updateQueue = c, r.flags |= 4), r.subtreeFlags = 0, c = l, l = r.child; l !== null; )
                    m = l, n = c, m.flags &= 14680066, C = m.alternate, C === null ? (m.childLanes = 0, m.lanes = n, m.child = null, m.subtreeFlags = 0, m.memoizedProps = null, m.memoizedState = null, m.updateQueue = null, m.dependencies = null, m.stateNode = null) : (m.childLanes = C.childLanes, m.lanes = C.lanes, m.child = C.child, m.subtreeFlags = 0, m.deletions = null, m.memoizedProps = C.memoizedProps, m.memoizedState = C.memoizedState, m.updateQueue = C.updateQueue, m.type = C.type, n = C.dependencies, m.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
                  return Vt(We, We.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            m.tail !== null && pn() > ys && (r.flags |= 128, c = !0, Pn(m, !1), r.lanes = 4194304);
          }
        else {
          if (!c)
            if (n = Ht(C), n !== null) {
              if (r.flags |= 128, c = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), Pn(m, !0), m.tail === null && m.tailMode === "hidden" && !C.alternate && !yn)
                return $r(r), null;
            } else
              2 * pn() - m.renderingStartTime > ys && l !== 1073741824 && (r.flags |= 128, c = !0, Pn(m, !1), r.lanes = 4194304);
          m.isBackwards ? (C.sibling = r.child, r.child = C) : (l = m.last, l !== null ? l.sibling = C : r.child = C, m.last = C);
        }
        return m.tail !== null ? (r = m.tail, m.rendering = r, m.tail = r.sibling, m.renderingStartTime = pn(), r.sibling = null, l = We.current, Vt(We, c ? l & 1 | 2 : l & 1), r) : ($r(r), null);
      case 22:
      case 23:
        return Sd(), c = r.memoizedState !== null, n !== null && n.memoizedState !== null !== c && (r.flags |= 8192), c && r.mode & 1 ? _i & 1073741824 && ($r(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : $r(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(s(156, r.tag));
  }
  function QE(n, r) {
    switch (If(r), r.tag) {
      case 1:
        return er(r.type) && fi(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return ns(), Ve(_t), Ve(hr), na(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return rt(r), null;
      case 13:
        if (Ve(We), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(s(340));
          Qu();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Ve(We), null;
      case 4:
        return ns(), null;
      case 10:
        return nh(r.type._context), null;
      case 22:
      case 23:
        return Sd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ss = !1, wr = !1, fd = typeof WeakSet == "function" ? WeakSet : Set, Ue = null;
  function cs(n, r) {
    var l = n.ref;
    if (l !== null)
      if (typeof l == "function")
        try {
          l(null);
        } catch (c) {
          Fn(n, r, c);
        }
      else
        l.current = null;
  }
  function hh(n, r, l) {
    try {
      l();
    } catch (c) {
      Fn(n, r, c);
    }
  }
  var dd = !1;
  function XE(n, r) {
    if (Yp = Fu, n = mm(), hc(n)) {
      if ("selectionStart" in n)
        var l = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          l = (l = n.ownerDocument) && l.defaultView || window;
          var c = l.getSelection && l.getSelection();
          if (c && c.rangeCount !== 0) {
            l = c.anchorNode;
            var h = c.anchorOffset, m = c.focusNode;
            c = c.focusOffset;
            try {
              l.nodeType, m.nodeType;
            } catch {
              l = null;
              break e;
            }
            var C = 0, D = -1, M = -1, Q = 0, se = 0, de = n, oe = null;
            t:
              for (; ; ) {
                for (var Oe; de !== l || h !== 0 && de.nodeType !== 3 || (D = C + h), de !== m || c !== 0 && de.nodeType !== 3 || (M = C + c), de.nodeType === 3 && (C += de.nodeValue.length), (Oe = de.firstChild) !== null; )
                  oe = de, de = Oe;
                for (; ; ) {
                  if (de === n)
                    break t;
                  if (oe === l && ++Q === h && (D = C), oe === m && ++se === c && (M = C), (Oe = de.nextSibling) !== null)
                    break;
                  de = oe, oe = de.parentNode;
                }
                de = Oe;
              }
            l = D === -1 || M === -1 ? null : { start: D, end: M };
          } else
            l = null;
        }
      l = l || { start: 0, end: 0 };
    } else
      l = null;
    for (Wp = { focusedElem: n, selectionRange: l }, Fu = !1, Ue = r; Ue !== null; )
      if (r = Ue, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, Ue = n;
      else
        for (; Ue !== null; ) {
          r = Ue;
          try {
            var je = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (je !== null) {
                    var $e = je.memoizedProps, Kn = je.memoizedState, I = r.stateNode, P = I.getSnapshotBeforeUpdate(r.elementType === r.type ? $e : vi(r.type, $e), Kn);
                    I.__reactInternalSnapshotBeforeUpdate = P;
                  }
                  break;
                case 3:
                  var B = r.stateNode.containerInfo;
                  B.nodeType === 1 ? B.textContent = "" : B.nodeType === 9 && B.documentElement && B.removeChild(B.documentElement);
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
            Fn(r, r.return, ve);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, Ue = n;
            break;
          }
          Ue = r.return;
        }
    return je = dd, dd = !1, je;
  }
  function fs(n, r, l) {
    var c = r.updateQueue;
    if (c = c !== null ? c.lastEffect : null, c !== null) {
      var h = c = c.next;
      do {
        if ((h.tag & n) === n) {
          var m = h.destroy;
          h.destroy = void 0, m !== void 0 && hh(r, l, m);
        }
        h = h.next;
      } while (h !== c);
    }
  }
  function pd(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var c = l.create;
          l.destroy = c();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function hd(n) {
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
  function Qm(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Qm(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[qi], delete r[Tc], delete r[Xp], delete r[HE], delete r[$E])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function vh(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Xm(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || vh(n.return))
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
    var c = n.tag;
    if (c === 5 || c === 6)
      n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = Uf));
    else if (c !== 4 && (n = n.child, n !== null))
      for (Hc(n, r, l), n = n.sibling; n !== null; )
        Hc(n, r, l), n = n.sibling;
  }
  function ds(n, r, l) {
    var c = n.tag;
    if (c === 5 || c === 6)
      n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (c !== 4 && (n = n.child, n !== null))
      for (ds(n, r, l), n = n.sibling; n !== null; )
        ds(n, r, l), n = n.sibling;
  }
  var Tn = null, vr = !1;
  function Wr(n, r, l) {
    for (l = l.child; l !== null; )
      ps(n, r, l), l = l.sibling;
  }
  function ps(n, r, l) {
    if (li && typeof li.onCommitFiberUnmount == "function")
      try {
        li.onCommitFiberUnmount(Xo, l);
      } catch {
      }
    switch (l.tag) {
      case 5:
        wr || cs(l, r);
      case 6:
        var c = Tn, h = vr;
        Tn = null, Wr(n, r, l), Tn = c, vr = h, Tn !== null && (vr ? (n = Tn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : Tn.removeChild(l.stateNode));
        break;
      case 18:
        Tn !== null && (vr ? (n = Tn, l = l.stateNode, n.nodeType === 8 ? Qp(n.parentNode, l) : n.nodeType === 1 && Qp(n, l), Xi(n)) : Qp(Tn, l.stateNode));
        break;
      case 4:
        c = Tn, h = vr, Tn = l.stateNode.containerInfo, vr = !0, Wr(n, r, l), Tn = c, vr = h;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!wr && (c = l.updateQueue, c !== null && (c = c.lastEffect, c !== null))) {
          h = c = c.next;
          do {
            var m = h, C = m.destroy;
            m = m.tag, C !== void 0 && (m & 2 || m & 4) && hh(l, r, C), h = h.next;
          } while (h !== c);
        }
        Wr(n, r, l);
        break;
      case 1:
        if (!wr && (cs(l, r), c = l.stateNode, typeof c.componentWillUnmount == "function"))
          try {
            c.props = l.memoizedProps, c.state = l.memoizedState, c.componentWillUnmount();
          } catch (D) {
            Fn(l, r, D);
          }
        Wr(n, r, l);
        break;
      case 21:
        Wr(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (wr = (c = wr) || l.memoizedState !== null, Wr(n, r, l), wr = c) : Wr(n, r, l);
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
      l === null && (l = n.stateNode = new fd()), r.forEach(function(c) {
        var h = r_.bind(null, n, c);
        l.has(c) || (l.add(c), c.then(h, h));
      });
    }
  }
  function mr(n, r) {
    var l = r.deletions;
    if (l !== null)
      for (var c = 0; c < l.length; c++) {
        var h = l[c];
        try {
          var m = n, C = r, D = C;
          e:
            for (; D !== null; ) {
              switch (D.tag) {
                case 5:
                  Tn = D.stateNode, vr = !1;
                  break e;
                case 3:
                  Tn = D.stateNode.containerInfo, vr = !0;
                  break e;
                case 4:
                  Tn = D.stateNode.containerInfo, vr = !0;
                  break e;
              }
              D = D.return;
            }
          if (Tn === null)
            throw Error(s(160));
          ps(m, C, h), Tn = null, vr = !1;
          var M = h.alternate;
          M !== null && (M.return = null), h.return = null;
        } catch (Q) {
          Fn(h, r, Q);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        qm(r, n), r = r.sibling;
  }
  function qm(n, r) {
    var l = n.alternate, c = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (mr(r, n), Xa(n), c & 4) {
          try {
            fs(3, n, n.return), pd(3, n);
          } catch ($e) {
            Fn(n, n.return, $e);
          }
          try {
            fs(5, n, n.return);
          } catch ($e) {
            Fn(n, n.return, $e);
          }
        }
        break;
      case 1:
        mr(r, n), Xa(n), c & 512 && l !== null && cs(l, l.return);
        break;
      case 5:
        if (mr(r, n), Xa(n), c & 512 && l !== null && cs(l, l.return), n.flags & 32) {
          var h = n.stateNode;
          try {
            Di(h, "");
          } catch ($e) {
            Fn(n, n.return, $e);
          }
        }
        if (c & 4 && (h = n.stateNode, h != null)) {
          var m = n.memoizedProps, C = l !== null ? l.memoizedProps : m, D = n.type, M = n.updateQueue;
          if (n.updateQueue = null, M !== null)
            try {
              D === "input" && m.type === "radio" && m.name != null && kn(h, m), $n(D, C);
              var Q = $n(D, m);
              for (C = 0; C < M.length; C += 2) {
                var se = M[C], de = M[C + 1];
                se === "style" ? xt(h, de) : se === "dangerouslySetInnerHTML" ? xi(h, de) : se === "children" ? Di(h, de) : ge(h, se, de, Q);
              }
              switch (D) {
                case "input":
                  wn(h, m);
                  break;
                case "textarea":
                  qn(h, m);
                  break;
                case "select":
                  var oe = h._wrapperState.wasMultiple;
                  h._wrapperState.wasMultiple = !!m.multiple;
                  var Oe = m.value;
                  Oe != null ? bn(h, !!m.multiple, Oe, !1) : oe !== !!m.multiple && (m.defaultValue != null ? bn(
                    h,
                    !!m.multiple,
                    m.defaultValue,
                    !0
                  ) : bn(h, !!m.multiple, m.multiple ? [] : "", !1));
              }
              h[Tc] = m;
            } catch ($e) {
              Fn(n, n.return, $e);
            }
        }
        break;
      case 6:
        if (mr(r, n), Xa(n), c & 4) {
          if (n.stateNode === null)
            throw Error(s(162));
          h = n.stateNode, m = n.memoizedProps;
          try {
            h.nodeValue = m;
          } catch ($e) {
            Fn(n, n.return, $e);
          }
        }
        break;
      case 3:
        if (mr(r, n), Xa(n), c & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Xi(r.containerInfo);
          } catch ($e) {
            Fn(n, n.return, $e);
          }
        break;
      case 4:
        mr(r, n), Xa(n);
        break;
      case 13:
        mr(r, n), Xa(n), h = n.child, h.flags & 8192 && (m = h.memoizedState !== null, h.stateNode.isHidden = m, !m || h.alternate !== null && h.alternate.memoizedState !== null || (md = pn())), c & 4 && hs(n);
        break;
      case 22:
        if (se = l !== null && l.memoizedState !== null, n.mode & 1 ? (wr = (Q = wr) || se, mr(r, n), wr = Q) : mr(r, n), Xa(n), c & 8192) {
          if (Q = n.memoizedState !== null, (n.stateNode.isHidden = Q) && !se && n.mode & 1)
            for (Ue = n, se = n.child; se !== null; ) {
              for (de = Ue = se; Ue !== null; ) {
                switch (oe = Ue, Oe = oe.child, oe.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    fs(4, oe, oe.return);
                    break;
                  case 1:
                    cs(oe, oe.return);
                    var je = oe.stateNode;
                    if (typeof je.componentWillUnmount == "function") {
                      c = oe, l = oe.return;
                      try {
                        r = c, je.props = r.memoizedProps, je.state = r.memoizedState, je.componentWillUnmount();
                      } catch ($e) {
                        Fn(c, l, $e);
                      }
                    }
                    break;
                  case 5:
                    cs(oe, oe.return);
                    break;
                  case 22:
                    if (oe.memoizedState !== null) {
                      Zm(de);
                      continue;
                    }
                }
                Oe !== null ? (Oe.return = oe, Ue = Oe) : Zm(de);
              }
              se = se.sibling;
            }
          e:
            for (se = null, de = n; ; ) {
              if (de.tag === 5) {
                if (se === null) {
                  se = de;
                  try {
                    h = de.stateNode, Q ? (m = h.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none") : (D = de.stateNode, M = de.memoizedProps.style, C = M != null && M.hasOwnProperty("display") ? M.display : null, D.style.display = Qe("display", C));
                  } catch ($e) {
                    Fn(n, n.return, $e);
                  }
                }
              } else if (de.tag === 6) {
                if (se === null)
                  try {
                    de.stateNode.nodeValue = Q ? "" : de.memoizedProps;
                  } catch ($e) {
                    Fn(n, n.return, $e);
                  }
              } else if ((de.tag !== 22 && de.tag !== 23 || de.memoizedState === null || de === n) && de.child !== null) {
                de.child.return = de, de = de.child;
                continue;
              }
              if (de === n)
                break e;
              for (; de.sibling === null; ) {
                if (de.return === null || de.return === n)
                  break e;
                se === de && (se = null), de = de.return;
              }
              se === de && (se = null), de.sibling.return = de.return, de = de.sibling;
            }
        }
        break;
      case 19:
        mr(r, n), Xa(n), c & 4 && hs(n);
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
            if (vh(l)) {
              var c = l;
              break e;
            }
            l = l.return;
          }
          throw Error(s(160));
        }
        switch (c.tag) {
          case 5:
            var h = c.stateNode;
            c.flags & 32 && (Di(h, ""), c.flags &= -33);
            var m = Xm(n);
            ds(n, m, h);
            break;
          case 3:
          case 4:
            var C = c.stateNode.containerInfo, D = Xm(n);
            Hc(n, D, C);
            break;
          default:
            throw Error(s(161));
        }
      } catch (M) {
        Fn(n, n.return, M);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function qE(n, r, l) {
    Ue = n, mh(n);
  }
  function mh(n, r, l) {
    for (var c = (n.mode & 1) !== 0; Ue !== null; ) {
      var h = Ue, m = h.child;
      if (h.tag === 22 && c) {
        var C = h.memoizedState !== null || ss;
        if (!C) {
          var D = h.alternate, M = D !== null && D.memoizedState !== null || wr;
          D = ss;
          var Q = wr;
          if (ss = C, (wr = M) && !Q)
            for (Ue = h; Ue !== null; )
              C = Ue, M = C.child, C.tag === 22 && C.memoizedState !== null ? gh(h) : M !== null ? (M.return = C, Ue = M) : gh(h);
          for (; m !== null; )
            Ue = m, mh(m), m = m.sibling;
          Ue = h, ss = D, wr = Q;
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
                wr || pd(5, r);
                break;
              case 1:
                var c = r.stateNode;
                if (r.flags & 4 && !wr)
                  if (l === null)
                    c.componentDidMount();
                  else {
                    var h = r.elementType === r.type ? l.memoizedProps : vi(r.type, l.memoizedProps);
                    c.componentDidUpdate(h, l.memoizedState, c.__reactInternalSnapshotBeforeUpdate);
                  }
                var m = r.updateQueue;
                m !== null && Zu(r, m, c);
                break;
              case 3:
                var C = r.updateQueue;
                if (C !== null) {
                  if (l = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        l = r.child.stateNode;
                        break;
                      case 1:
                        l = r.child.stateNode;
                    }
                  Zu(r, C, l);
                }
                break;
              case 5:
                var D = r.stateNode;
                if (l === null && r.flags & 4) {
                  l = D;
                  var M = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      M.autoFocus && l.focus();
                      break;
                    case "img":
                      M.src && (l.src = M.src);
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
                      var de = se.dehydrated;
                      de !== null && Xi(de);
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
          wr || r.flags & 512 && hd(r);
        } catch (oe) {
          Fn(r, r.return, oe);
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
  function Zm(n) {
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
  function gh(n) {
    for (; Ue !== null; ) {
      var r = Ue;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              pd(4, r);
            } catch (M) {
              Fn(r, l, M);
            }
            break;
          case 1:
            var c = r.stateNode;
            if (typeof c.componentDidMount == "function") {
              var h = r.return;
              try {
                c.componentDidMount();
              } catch (M) {
                Fn(r, h, M);
              }
            }
            var m = r.return;
            try {
              hd(r);
            } catch (M) {
              Fn(r, m, M);
            }
            break;
          case 5:
            var C = r.return;
            try {
              hd(r);
            } catch (M) {
              Fn(r, C, M);
            }
        }
      } catch (M) {
        Fn(r, r.return, M);
      }
      if (r === n) {
        Ue = null;
        break;
      }
      var D = r.sibling;
      if (D !== null) {
        D.return = r.return, Ue = D;
        break;
      }
      Ue = r.return;
    }
  }
  var ZE = Math.ceil, cu = ie.ReactCurrentDispatcher, vd = ie.ReactCurrentOwner, aa = ie.ReactCurrentBatchConfig, kt = 0, jn = null, En = null, lr = 0, _i = 0, ms = sn(0), ur = 0, $c = null, fu = 0, gs = 0, yh = 0, yl = null, Vr = null, md = 0, ys = 1 / 0, No = null, gd = !1, Eh = null, oa = null, Es = !1, la = null, yd = 0, Vc = 0, Ed = null, Bc = -1, du = 0;
  function gr() {
    return kt & 6 ? pn() : Bc !== -1 ? Bc : Bc = pn();
  }
  function ko(n) {
    return n.mode & 1 ? kt & 2 && lr !== 0 ? lr & -lr : VE.transition !== null ? (du === 0 && (du = $l()), du) : (n = Mt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : oc(n.type)), n) : 1;
  }
  function An(n, r, l, c) {
    if (50 < Vc)
      throw Vc = 0, Ed = null, Error(s(185));
    Zo(n, l, c), (!(kt & 2) || n !== jn) && (n === jn && (!(kt & 2) && (gs |= l), ur === 4 && qa(n, lr)), sr(n, c), l === 1 && kt === 0 && !(r.mode & 1) && (ys = pn() + 500, ll && Ya()));
  }
  function sr(n, r) {
    var l = n.callbackNode;
    qo(n, r);
    var c = Fa(n, n === jn ? lr : 0);
    if (c === 0)
      l !== null && dn(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = c & -c, n.callbackPriority !== r) {
      if (l != null && dn(l), r === 1)
        n.tag === 0 ? Om(_s.bind(null, n)) : jf(_s.bind(null, n)), xm(function() {
          !(kt & 6) && Ya();
        }), l = null;
      else {
        switch (rc(c)) {
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
        l = og(l, _d.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function _d(n, r) {
    if (Bc = -1, du = 0, kt & 6)
      throw Error(s(327));
    var l = n.callbackNode;
    if (Ss() && n.callbackNode !== l)
      return null;
    var c = Fa(n, n === jn ? lr : 0);
    if (c === 0)
      return null;
    if (c & 30 || c & n.expiredLanes || r)
      r = Cd(n, c);
    else {
      r = c;
      var h = kt;
      kt |= 2;
      var m = eg();
      (jn !== n || lr !== r) && (No = null, ys = pn() + 500, hu(n, r));
      do
        try {
          e_();
          break;
        } catch (D) {
          Jm(n, D);
        }
      while (!0);
      th(), cu.current = m, kt = h, En !== null ? r = 0 : (jn = null, lr = 0, r = ur);
    }
    if (r !== 0) {
      if (r === 2 && (h = Ia(n), h !== 0 && (c = h, r = pu(n, h))), r === 1)
        throw l = $c, hu(n, 0), qa(n, c), sr(n, pn()), l;
      if (r === 6)
        qa(n, c);
      else {
        if (h = n.current.alternate, !(c & 30) && !Sh(h) && (r = Cd(n, c), r === 2 && (m = Ia(n), m !== 0 && (c = m, r = pu(n, m))), r === 1))
          throw l = $c, hu(n, 0), qa(n, c), sr(n, pn()), l;
        switch (n.finishedWork = h, n.finishedLanes = c, r) {
          case 0:
          case 1:
            throw Error(s(345));
          case 2:
            El(n, Vr, No);
            break;
          case 3:
            if (qa(n, c), (c & 130023424) === c && (r = md + 500 - pn(), 10 < r)) {
              if (Fa(n, 0) !== 0)
                break;
              if (h = n.suspendedLanes, (h & c) !== c) {
                gr(), n.pingedLanes |= n.suspendedLanes & h;
                break;
              }
              n.timeoutHandle = Sc(El.bind(null, n, Vr, No), r);
              break;
            }
            El(n, Vr, No);
            break;
          case 4:
            if (qa(n, c), (c & 4194240) === c)
              break;
            for (r = n.eventTimes, h = -1; 0 < c; ) {
              var C = 31 - Br(c);
              m = 1 << C, C = r[C], C > h && (h = C), c &= ~m;
            }
            if (c = h, c = pn() - c, c = (120 > c ? 120 : 480 > c ? 480 : 1080 > c ? 1080 : 1920 > c ? 1920 : 3e3 > c ? 3e3 : 4320 > c ? 4320 : 1960 * ZE(c / 1960)) - c, 10 < c) {
              n.timeoutHandle = Sc(El.bind(null, n, Vr, No), c);
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
    return sr(n, pn()), n.callbackNode === l ? _d.bind(null, n) : null;
  }
  function pu(n, r) {
    var l = yl;
    return n.current.memoizedState.isDehydrated && (hu(n, r).flags |= 256), n = Cd(n, r), n !== 2 && (r = Vr, Vr = l, r !== null && _h(r)), n;
  }
  function _h(n) {
    Vr === null ? Vr = n : Vr.push.apply(Vr, n);
  }
  function Sh(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null))
          for (var c = 0; c < l.length; c++) {
            var h = l[c], m = h.getSnapshot;
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
    for (r &= ~yh, r &= ~gs, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Br(r), c = 1 << l;
      n[l] = -1, r &= ~c;
    }
  }
  function _s(n) {
    if (kt & 6)
      throw Error(s(327));
    Ss();
    var r = Fa(n, 0);
    if (!(r & 1))
      return sr(n, pn()), null;
    var l = Cd(n, r);
    if (n.tag !== 0 && l === 2) {
      var c = Ia(n);
      c !== 0 && (r = c, l = pu(n, c));
    }
    if (l === 1)
      throw l = $c, hu(n, 0), qa(n, r), sr(n, pn()), l;
    if (l === 6)
      throw Error(s(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, El(n, Vr, No), sr(n, pn()), null;
  }
  function Ch(n, r) {
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
    var l = aa.transition, c = Mt;
    try {
      if (aa.transition = null, Mt = 1, n)
        return n();
    } finally {
      Mt = c, aa.transition = l, kt = r, !(kt & 6) && Ya();
    }
  }
  function Sd() {
    _i = ms.current, Ve(ms);
  }
  function hu(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Cc(l)), En !== null)
      for (l = En.return; l !== null; ) {
        var c = l;
        switch (If(c), c.tag) {
          case 1:
            c = c.type.childContextTypes, c != null && fi();
            break;
          case 3:
            ns(), Ve(_t), Ve(hr), na();
            break;
          case 5:
            rt(c);
            break;
          case 4:
            ns();
            break;
          case 13:
            Ve(We);
            break;
          case 19:
            Ve(We);
            break;
          case 10:
            nh(c.type._context);
            break;
          case 22:
          case 23:
            Sd();
        }
        l = l.return;
      }
    if (jn = n, En = n = _l(n.current, null), lr = _i = r, ur = 0, $c = null, yh = gs = fu = 0, Vr = yl = null, Hr !== null) {
      for (r = 0; r < Hr.length; r++)
        if (l = Hr[r], c = l.interleaved, c !== null) {
          l.interleaved = null;
          var h = c.next, m = l.pending;
          if (m !== null) {
            var C = m.next;
            m.next = h, c.next = C;
          }
          l.pending = c;
        }
      Hr = null;
    }
    return n;
  }
  function Jm(n, r) {
    do {
      var l = En;
      try {
        if (th(), Ac.current = ad, Yn) {
          for (var c = On.memoizedState; c !== null; ) {
            var h = c.queue;
            h !== null && (h.pending = null), c = c.next;
          }
          Yn = !1;
        }
        if (tu = 0, te = Bn = On = null, lt = !1, Ka = 0, vd.current = null, l === null || l.return === null) {
          ur = 1, $c = r, En = null;
          break;
        }
        e: {
          var m = n, C = l.return, D = l, M = r;
          if (r = lr, D.flags |= 32768, M !== null && typeof M == "object" && typeof M.then == "function") {
            var Q = M, se = D, de = se.tag;
            if (!(se.mode & 1) && (de === 0 || de === 11 || de === 15)) {
              var oe = se.alternate;
              oe ? (se.updateQueue = oe.updateQueue, se.memoizedState = oe.memoizedState, se.lanes = oe.lanes) : (se.updateQueue = null, se.memoizedState = null);
            }
            var Oe = Bm(C);
            if (Oe !== null) {
              Oe.flags &= -257, fh(Oe, C, D, m, r), Oe.mode & 1 && Pc(m, Q, r), r = Oe, M = Q;
              var je = r.updateQueue;
              if (je === null) {
                var $e = /* @__PURE__ */ new Set();
                $e.add(M), r.updateQueue = $e;
              } else
                je.add(M);
              break e;
            } else {
              if (!(r & 1)) {
                Pc(m, Q, r), Yc();
                break e;
              }
              M = Error(s(426));
            }
          } else if (yn && D.mode & 1) {
            var Kn = Bm(C);
            if (Kn !== null) {
              !(Kn.flags & 65536) && (Kn.flags |= 256), fh(Kn, C, D, m, r), tr(ml(M, D));
              break e;
            }
          }
          m = M = ml(M, D), ur !== 4 && (ur = 2), yl === null ? yl = [m] : yl.push(m), m = C;
          do {
            switch (m.tag) {
              case 3:
                m.flags |= 65536, r &= -r, m.lanes |= r;
                var I = $m(m, M, r);
                Lm(m, I);
                break e;
              case 1:
                D = M;
                var P = m.type, B = m.stateNode;
                if (!(m.flags & 128) && (typeof P.getDerivedStateFromError == "function" || B !== null && typeof B.componentDidCatch == "function" && (oa === null || !oa.has(B)))) {
                  m.flags |= 65536, r &= -r, m.lanes |= r;
                  var ve = Vm(m, D, r);
                  Lm(m, ve);
                  break e;
                }
            }
            m = m.return;
          } while (m !== null);
        }
        ng(l);
      } catch (Be) {
        r = Be, En === l && l !== null && (En = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function eg() {
    var n = cu.current;
    return cu.current = ad, n === null ? ad : n;
  }
  function Yc() {
    (ur === 0 || ur === 3 || ur === 2) && (ur = 4), jn === null || !(fu & 268435455) && !(gs & 268435455) || qa(jn, lr);
  }
  function Cd(n, r) {
    var l = kt;
    kt |= 2;
    var c = eg();
    (jn !== n || lr !== r) && (No = null, hu(n, r));
    do
      try {
        JE();
        break;
      } catch (h) {
        Jm(n, h);
      }
    while (!0);
    if (th(), kt = l, cu.current = c, En !== null)
      throw Error(s(261));
    return jn = null, lr = 0, ur;
  }
  function JE() {
    for (; En !== null; )
      tg(En);
  }
  function e_() {
    for (; En !== null && !Fr(); )
      tg(En);
  }
  function tg(n) {
    var r = ag(n.alternate, n, _i);
    n.memoizedProps = n.pendingProps, r === null ? ng(n) : En = r, vd.current = null;
  }
  function ng(n) {
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
      } else if (l = KE(l, r, _i), l !== null) {
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
    var c = Mt, h = aa.transition;
    try {
      aa.transition = null, Mt = 1, t_(n, r, l, c);
    } finally {
      aa.transition = h, Mt = c;
    }
    return null;
  }
  function t_(n, r, l, c) {
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
    if (tc(n, m), n === jn && (En = jn = null, lr = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || Es || (Es = !0, og(Dt, function() {
      return Ss(), null;
    })), m = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || m) {
      m = aa.transition, aa.transition = null;
      var C = Mt;
      Mt = 1;
      var D = kt;
      kt |= 4, vd.current = null, XE(n, l), qm(l, n), Gl(Wp), Fu = !!Yp, Wp = Yp = null, n.current = l, qE(l), Pa(), kt = D, Mt = C, aa.transition = m;
    } else
      n.current = l;
    if (Es && (Es = !1, la = n, yd = h), m = n.pendingLanes, m === 0 && (oa = null), qs(l.stateNode), sr(n, pn()), r !== null)
      for (c = n.onRecoverableError, l = 0; l < r.length; l++)
        h = r[l], c(h.value, { componentStack: h.stack, digest: h.digest });
    if (gd)
      throw gd = !1, n = Eh, Eh = null, n;
    return yd & 1 && n.tag !== 0 && Ss(), m = n.pendingLanes, m & 1 ? n === Ed ? Vc++ : (Vc = 0, Ed = n) : Vc = 0, Ya(), null;
  }
  function Ss() {
    if (la !== null) {
      var n = rc(yd), r = aa.transition, l = Mt;
      try {
        if (aa.transition = null, Mt = 16 > n ? 16 : n, la === null)
          var c = !1;
        else {
          if (n = la, la = null, yd = 0, kt & 6)
            throw Error(s(331));
          var h = kt;
          for (kt |= 4, Ue = n.current; Ue !== null; ) {
            var m = Ue, C = m.child;
            if (Ue.flags & 16) {
              var D = m.deletions;
              if (D !== null) {
                for (var M = 0; M < D.length; M++) {
                  var Q = D[M];
                  for (Ue = Q; Ue !== null; ) {
                    var se = Ue;
                    switch (se.tag) {
                      case 0:
                      case 11:
                      case 15:
                        fs(8, se, m);
                    }
                    var de = se.child;
                    if (de !== null)
                      de.return = se, Ue = de;
                    else
                      for (; Ue !== null; ) {
                        se = Ue;
                        var oe = se.sibling, Oe = se.return;
                        if (Qm(se), se === Q) {
                          Ue = null;
                          break;
                        }
                        if (oe !== null) {
                          oe.return = Oe, Ue = oe;
                          break;
                        }
                        Ue = Oe;
                      }
                  }
                }
                var je = m.alternate;
                if (je !== null) {
                  var $e = je.child;
                  if ($e !== null) {
                    je.child = null;
                    do {
                      var Kn = $e.sibling;
                      $e.sibling = null, $e = Kn;
                    } while ($e !== null);
                  }
                }
                Ue = m;
              }
            }
            if (m.subtreeFlags & 2064 && C !== null)
              C.return = m, Ue = C;
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
                  var I = m.sibling;
                  if (I !== null) {
                    I.return = m.return, Ue = I;
                    break e;
                  }
                  Ue = m.return;
                }
          }
          var P = n.current;
          for (Ue = P; Ue !== null; ) {
            C = Ue;
            var B = C.child;
            if (C.subtreeFlags & 2064 && B !== null)
              B.return = C, Ue = B;
            else
              e:
                for (C = P; Ue !== null; ) {
                  if (D = Ue, D.flags & 2048)
                    try {
                      switch (D.tag) {
                        case 0:
                        case 11:
                        case 15:
                          pd(9, D);
                      }
                    } catch (Be) {
                      Fn(D, D.return, Be);
                    }
                  if (D === C) {
                    Ue = null;
                    break e;
                  }
                  var ve = D.sibling;
                  if (ve !== null) {
                    ve.return = D.return, Ue = ve;
                    break e;
                  }
                  Ue = D.return;
                }
          }
          if (kt = h, Ya(), li && typeof li.onPostCommitFiberRoot == "function")
            try {
              li.onPostCommitFiberRoot(Xo, n);
            } catch {
            }
          c = !0;
        }
        return c;
      } finally {
        Mt = l, aa.transition = r;
      }
    }
    return !1;
  }
  function rg(n, r, l) {
    r = ml(l, r), r = $m(n, r, 1), n = dl(n, r, 1), r = gr(), n !== null && (Zo(n, 1, r), sr(n, r));
  }
  function Fn(n, r, l) {
    if (n.tag === 3)
      rg(n, n, l);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          rg(r, n, l);
          break;
        } else if (r.tag === 1) {
          var c = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (oa === null || !oa.has(c))) {
            n = ml(l, n), n = Vm(r, n, 1), r = dl(r, n, 1), n = gr(), r !== null && (Zo(r, 1, n), sr(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function n_(n, r, l) {
    var c = n.pingCache;
    c !== null && c.delete(r), r = gr(), n.pingedLanes |= n.suspendedLanes & l, jn === n && (lr & l) === l && (ur === 4 || ur === 3 && (lr & 130023424) === lr && 500 > pn() - md ? hu(n, 0) : yh |= l), sr(n, r);
  }
  function ig(n, r) {
    r === 0 && (n.mode & 1 ? (r = zu, zu <<= 1, !(zu & 130023424) && (zu = 4194304)) : r = 1);
    var l = gr();
    n = Do(n, r), n !== null && (Zo(n, r, l), sr(n, l));
  }
  function bh(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), ig(n, l);
  }
  function r_(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var c = n.stateNode, h = n.memoizedState;
        h !== null && (l = h.retryLane);
        break;
      case 19:
        c = n.stateNode;
        break;
      default:
        throw Error(s(314));
    }
    c !== null && c.delete(r), ig(n, l);
  }
  var ag;
  ag = function(n, r, l) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || _t.current)
        yi = !0;
      else {
        if (!(n.lanes & l) && !(r.flags & 128))
          return yi = !1, Ao(n, r, l);
        yi = !!(n.flags & 131072);
      }
    else
      yi = !1, yn && r.flags & 1048576 && sl(r, Zl, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var c = r.type;
        Ic(n, r), n = r.pendingProps;
        var h = Li(r, hr.current);
        Vn(r, l), h = nu(null, r, c, n, h, l);
        var m = hl();
        return r.flags |= 1, typeof h == "object" && h !== null && typeof h.render == "function" && h.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, er(c) ? (m = !0, ql(r)) : m = !1, r.memoizedState = h.state !== null && h.state !== void 0 ? h.state : null, rh(r), h.updater = Bf, r.stateNode = h, h._reactInternals = r, ah(r, c, n, l), r = ld(null, r, c, !0, m, l)) : (r.tag = 0, yn && m && Ff(r), Wn(null, r, h, l), r = r.child), r;
      case 16:
        c = r.elementType;
        e: {
          switch (Ic(n, r), n = r.pendingProps, h = c._init, c = h(c._payload), r.type = c, h = r.tag = i_(c), n = vi(c, n), h) {
            case 0:
              r = Tt(null, r, c, n, l);
              break e;
            case 1:
              r = jc(null, r, c, n, l);
              break e;
            case 11:
              r = os(null, r, c, n, l);
              break e;
            case 14:
              r = gl(null, r, c, vi(c.type, n), l);
              break e;
          }
          throw Error(s(
            306,
            c,
            ""
          ));
        }
        return r;
      case 0:
        return c = r.type, h = r.pendingProps, h = r.elementType === c ? h : vi(c, h), Tt(n, r, c, h, l);
      case 1:
        return c = r.type, h = r.pendingProps, h = r.elementType === c ? h : vi(c, h), jc(n, r, c, h, l);
      case 3:
        e: {
          if (GE(r), n === null)
            throw Error(s(387));
          c = r.pendingProps, m = r.memoizedState, h = m.element, km(n, r), Rc(r, c, null, l);
          var C = r.memoizedState;
          if (c = C.element, m.isDehydrated)
            if (m = { element: c, isDehydrated: !1, cache: C.cache, pendingSuspenseBoundaries: C.pendingSuspenseBoundaries, transitions: C.transitions }, r.updateQueue.baseState = m, r.memoizedState = m, r.flags & 256) {
              h = ml(Error(s(423)), r), r = Wm(n, r, c, l, h);
              break e;
            } else if (c !== h) {
              h = ml(Error(s(424)), r), r = Wm(n, r, c, l, h);
              break e;
            } else
              for (zi = ki(r.stateNode.containerInfo.firstChild), Mi = r, yn = !0, ta = null, l = Fm(r, null, c, l), r.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Qu(), c === h) {
              r = Gn(n, r, l);
              break e;
            }
            Wn(n, r, c, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Yf(r), n === null && Hf(r), c = r.type, h = r.pendingProps, m = n !== null ? n.memoizedProps : null, C = h.children, Xl(c, h) ? C = null : m !== null && Xl(c, m) && (r.flags |= 32), uu(n, r), Wn(n, r, C, l), r.child;
      case 6:
        return n === null && Hf(r), null;
      case 13:
        return Gm(n, r, l);
      case 4:
        return oh(r, r.stateNode.containerInfo), c = r.pendingProps, n === null ? r.child = es(r, null, c, l) : Wn(n, r, c, l), r.child;
      case 11:
        return c = r.type, h = r.pendingProps, h = r.elementType === c ? h : vi(c, h), os(n, r, c, h, l);
      case 7:
        return Wn(n, r, r.pendingProps, l), r.child;
      case 8:
        return Wn(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return Wn(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (c = r.type._context, h = r.pendingProps, m = r.memoizedProps, C = h.value, Vt(Xu, c._currentValue), c._currentValue = C, m !== null)
            if (Ta(m.value, C)) {
              if (m.children === h.children && !_t.current) {
                r = Gn(n, r, l);
                break e;
              }
            } else
              for (m = r.child, m !== null && (m.return = r); m !== null; ) {
                var D = m.dependencies;
                if (D !== null) {
                  C = m.child;
                  for (var M = D.firstContext; M !== null; ) {
                    if (M.context === c) {
                      if (m.tag === 1) {
                        M = hn(-1, l & -l), M.tag = 2;
                        var Q = m.updateQueue;
                        if (Q !== null) {
                          Q = Q.shared;
                          var se = Q.pending;
                          se === null ? M.next = M : (M.next = se.next, se.next = M), Q.pending = M;
                        }
                      }
                      m.lanes |= l, M = m.alternate, M !== null && (M.lanes |= l), cl(
                        m.return,
                        l,
                        r
                      ), D.lanes |= l;
                      break;
                    }
                    M = M.next;
                  }
                } else if (m.tag === 10)
                  C = m.type === r.type ? null : m.child;
                else if (m.tag === 18) {
                  if (C = m.return, C === null)
                    throw Error(s(341));
                  C.lanes |= l, D = C.alternate, D !== null && (D.lanes |= l), cl(C, l, r), C = m.sibling;
                } else
                  C = m.child;
                if (C !== null)
                  C.return = m;
                else
                  for (C = m; C !== null; ) {
                    if (C === r) {
                      C = null;
                      break;
                    }
                    if (m = C.sibling, m !== null) {
                      m.return = C.return, C = m;
                      break;
                    }
                    C = C.return;
                  }
                m = C;
              }
          Wn(n, r, h.children, l), r = r.child;
        }
        return r;
      case 9:
        return h = r.type, c = r.pendingProps.children, Vn(r, l), h = me(h), c = c(h), r.flags |= 1, Wn(n, r, c, l), r.child;
      case 14:
        return c = r.type, h = vi(c, r.pendingProps), h = vi(c.type, h), gl(n, r, c, h, l);
      case 15:
        return od(n, r, r.type, r.pendingProps, l);
      case 17:
        return c = r.type, h = r.pendingProps, h = r.elementType === c ? h : vi(c, h), Ic(n, r), r.tag = 1, er(c) ? (n = !0, ql(r)) : n = !1, Vn(r, l), zm(r, c, h), ah(r, c, h, l), ld(null, r, c, !0, n, l);
      case 19:
        return ph(n, r, l);
      case 22:
        return Ei(n, r, l);
    }
    throw Error(s(156, r.tag));
  };
  function og(n, r) {
    return fn(n, r);
  }
  function lg(n, r, l, c) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ua(n, r, l, c) {
    return new lg(n, r, l, c);
  }
  function Th(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function i_(n) {
    if (typeof n == "function")
      return Th(n) ? 1 : 0;
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
  function bd(n, r, l, c, h, m) {
    var C = 2;
    if (c = n, typeof n == "function")
      Th(n) && (C = 1);
    else if (typeof n == "string")
      C = 5;
    else
      e:
        switch (n) {
          case Ne:
            return vu(l.children, h, m, r);
          case De:
            C = 8, h |= 8;
            break;
          case tt:
            return n = ua(12, l, r, h | 2), n.elementType = tt, n.lanes = m, n;
          case ct:
            return n = ua(13, l, r, h), n.elementType = ct, n.lanes = m, n;
          case Pe:
            return n = ua(19, l, r, h), n.elementType = Pe, n.lanes = m, n;
          case Ye:
            return Td(l, h, m, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case vt:
                  C = 10;
                  break e;
                case ot:
                  C = 9;
                  break e;
                case at:
                  C = 11;
                  break e;
                case Ze:
                  C = 14;
                  break e;
                case qe:
                  C = 16, c = null;
                  break e;
              }
            throw Error(s(130, n == null ? n : typeof n, ""));
        }
    return r = ua(C, l, r, h), r.elementType = n, r.type = c, r.lanes = m, r;
  }
  function vu(n, r, l, c) {
    return n = ua(7, n, c, r), n.lanes = l, n;
  }
  function Td(n, r, l, c) {
    return n = ua(22, n, c, r), n.elementType = Ye, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function wd(n, r, l) {
    return n = ua(6, n, null, r), n.lanes = l, n;
  }
  function Wc(n, r, l) {
    return r = ua(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Gc(n, r, l, c, h) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Vl(0), this.expirationTimes = Vl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Vl(0), this.identifierPrefix = c, this.onRecoverableError = h, this.mutableSourceEagerHydrationData = null;
  }
  function wh(n, r, l, c, h, m, C, D, M) {
    return n = new Gc(n, r, l, D, M), r === 1 ? (r = 1, m === !0 && (r |= 8)) : r = 0, m = ua(3, null, null, r), n.current = m, m.stateNode = n, m.memoizedState = { element: c, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, rh(m), n;
  }
  function ug(n, r, l) {
    var c = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ae, key: c == null ? null : "" + c, children: n, containerInfo: r, implementation: l };
  }
  function Rh(n) {
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
  function xh(n, r, l, c, h, m, C, D, M) {
    return n = wh(l, c, !0, n, h, m, C, D, M), n.context = Rh(null), l = n.current, c = gr(), h = ko(l), m = hn(c, h), m.callback = r ?? null, dl(l, m, h), n.current.lanes = h, Zo(n, h, c), sr(n, c), n;
  }
  function Rd(n, r, l, c) {
    var h = r.current, m = gr(), C = ko(h);
    return l = Rh(l), r.context === null ? r.context = l : r.pendingContext = l, r = hn(m, C), r.payload = { element: n }, c = c === void 0 ? null : c, c !== null && (r.callback = c), n = dl(h, r, C), n !== null && (An(n, h, C, m), Vf(n, h, C)), C;
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
  function sg(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function Dh(n, r) {
    sg(n, r), (n = n.alternate) && sg(n, r);
  }
  function a_() {
    return null;
  }
  var Oh = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function xd(n) {
    this._internalRoot = n;
  }
  Qc.prototype.render = xd.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(s(409));
    Rd(n, r, null, null);
  }, Qc.prototype.unmount = xd.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Za(function() {
        Rd(null, n, null, null);
      }), r[wa] = null;
    }
  };
  function Qc(n) {
    this._internalRoot = n;
  }
  Qc.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Ft();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < mn.length && r !== 0 && r < mn[l].priority; l++)
        ;
      mn.splice(l, 0, n), l === 0 && Ca(n);
    }
  };
  function Sl(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Dd(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function cg() {
  }
  function o_(n, r, l, c, h) {
    if (h) {
      if (typeof c == "function") {
        var m = c;
        c = function() {
          var Q = Kc(C);
          m.call(Q);
        };
      }
      var C = xh(r, c, n, 0, null, !1, !1, "", cg);
      return n._reactRootContainer = C, n[wa] = C.current, $a(n.nodeType === 8 ? n.parentNode : n), Za(), C;
    }
    for (; h = n.lastChild; )
      n.removeChild(h);
    if (typeof c == "function") {
      var D = c;
      c = function() {
        var Q = Kc(M);
        D.call(Q);
      };
    }
    var M = wh(n, 0, !1, null, null, !1, !1, "", cg);
    return n._reactRootContainer = M, n[wa] = M.current, $a(n.nodeType === 8 ? n.parentNode : n), Za(function() {
      Rd(r, M, l, c);
    }), M;
  }
  function Od(n, r, l, c, h) {
    var m = l._reactRootContainer;
    if (m) {
      var C = m;
      if (typeof h == "function") {
        var D = h;
        h = function() {
          var M = Kc(C);
          D.call(M);
        };
      }
      Rd(r, C, n, h);
    } else
      C = o_(l, r, n, h, c);
    return Kc(C);
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
          var c = Do(n, 1);
          if (c !== null) {
            var h = gr();
            An(c, n, 1, h);
          }
        }), Dh(n, 1);
    }
  }, Jo = function(n) {
    if (n.tag === 13) {
      var r = Do(n, 134217728);
      if (r !== null) {
        var l = gr();
        An(r, n, 134217728, l);
      }
      Dh(n, 134217728);
    }
  }, ic = function(n) {
    if (n.tag === 13) {
      var r = ko(n), l = Do(n, r);
      if (l !== null) {
        var c = gr();
        An(l, n, r, c);
      }
      Dh(n, r);
    }
  }, Ft = function() {
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
            var c = l[r];
            if (c !== n && c.form === n.form) {
              var h = Pf(c);
              if (!h)
                throw Error(s(90));
              Mr(c), wn(c, h);
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
  }, Ko = Ch, jl = Za;
  var l_ = { usingClientEntryPoint: !1, Events: [Va, Ku, Pf, ya, Wi, Ch] }, Xc = { findFiberByHostInstance: Ro, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, fg = { bundleType: Xc.bundleType, version: Xc.version, rendererPackageName: Xc.rendererPackageName, rendererConfig: Xc.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ie.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = et(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Xc.findFiberByHostInstance || a_, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ad = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ad.isDisabled && Ad.supportsFiber)
      try {
        Xo = Ad.inject(fg), li = Ad;
      } catch {
      }
  }
  return va.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = l_, va.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Sl(r))
      throw Error(s(200));
    return ug(n, r, null, l);
  }, va.createRoot = function(n, r) {
    if (!Sl(n))
      throw Error(s(299));
    var l = !1, c = "", h = Oh;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (c = r.identifierPrefix), r.onRecoverableError !== void 0 && (h = r.onRecoverableError)), r = wh(n, 1, !1, null, null, l, !1, c, h), n[wa] = r.current, $a(n.nodeType === 8 ? n.parentNode : n), new xd(r);
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
    if (!Dd(r))
      throw Error(s(200));
    return Od(null, n, r, !0, l);
  }, va.hydrateRoot = function(n, r, l) {
    if (!Sl(n))
      throw Error(s(405));
    var c = l != null && l.hydratedSources || null, h = !1, m = "", C = Oh;
    if (l != null && (l.unstable_strictMode === !0 && (h = !0), l.identifierPrefix !== void 0 && (m = l.identifierPrefix), l.onRecoverableError !== void 0 && (C = l.onRecoverableError)), r = xh(r, null, n, 1, l ?? null, h, !1, m, C), n[wa] = r.current, $a(n), c)
      for (n = 0; n < c.length; n++)
        l = c[n], h = l._getVersion, h = h(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, h] : r.mutableSourceEagerHydrationData.push(
          l,
          h
        );
    return new Qc(r);
  }, va.render = function(n, r, l) {
    if (!Dd(r))
      throw Error(s(200));
    return Od(null, n, r, !1, l);
  }, va.unmountComponentAtNode = function(n) {
    if (!Dd(n))
      throw Error(s(40));
    return n._reactRootContainer ? (Za(function() {
      Od(null, null, n, !1, function() {
        n._reactRootContainer = null, n[wa] = null;
      });
    }), !0) : !1;
  }, va.unstable_batchedUpdates = Ch, va.unstable_renderSubtreeIntoContainer = function(n, r, l, c) {
    if (!Dd(l))
      throw Error(s(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(s(38));
    return Od(n, r, l, !1, c);
  }, va.version = "18.2.0-next-9e3b772b8-20220608", va;
}
var W1 = {};
function G1() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (W1.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(G1);
    } catch (f) {
      console.error(f);
    }
  }
}
W1.NODE_ENV === "production" ? (G1(), xC.exports = pM()) : xC.exports = dM();
var hM = xC.exports, vM = {}, Ov = hM;
if (vM.NODE_ENV === "production")
  Lv.createRoot = Ov.createRoot, Lv.hydrateRoot = Ov.hydrateRoot;
else {
  var Vy = Ov.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Lv.createRoot = function(f, a) {
    Vy.usingClientEntryPoint = !0;
    try {
      return Ov.createRoot(f, a);
    } finally {
      Vy.usingClientEntryPoint = !1;
    }
  }, Lv.hydrateRoot = function(f, a, s) {
    Vy.usingClientEntryPoint = !0;
    try {
      return Ov.hydrateRoot(f, a, s);
    } finally {
      Vy.usingClientEntryPoint = !1;
    }
  };
}
class mM {
  constructor(a, s) {
    Yo(this, "width", 384);
    Yo(this, "height", 512);
    Object.assign(this, s), a.image && !(s != null && s.height) && ((a.image.naturalHeight - a.header.height) % 768 == 0 ? this.height = 768 : (a.image.naturalHeight - a.header.height) % 512 == 0 && (this.height = 512));
  }
}
class ZR {
  constructor(a) {
    Yo(this, "width", 384);
    Yo(this, "height", 256);
    Object.assign(this, a);
  }
}
const EE = class EE {
  constructor(a) {
    Yo(this, "cell");
    Yo(this, "header");
    Yo(this, "cols", 0);
    Yo(this, "rows", 0);
    Yo(this, "image");
    if (Object.assign(this, a), this.header = new ZR(a == null ? void 0 : a.header), this.cell = new mM(this, a == null ? void 0 : a.cell), this.image)
      if (this.header.width + this.cell.width * this.cols != this.image.naturalWidth || this.header.height + this.cell.height * this.rows != this.image.naturalHeight) {
        this.cols = Math.floor(this.image.naturalWidth / this.cell.width), this.rows = Math.floor(this.image.naturalHeight / this.cell.height);
        let s = this.image.naturalWidth - this.cell.width * this.cols, p = this.image.naturalHeight - this.cell.height * this.rows;
        this.header = new ZR({ width: s, height: p });
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
};
Yo(EE, "Context", Xe.createContext(new EE({})));
let ri = EE;
const FC = ({ image: f, sx: a, sy: s, sw: p, sh: y }) => {
  const b = Xe.useRef(null);
  return Xe.useEffect(() => {
    const T = setInterval(() => {
      if (b.current) {
        const E = b.current.getContext("2d");
        E && f && (b.current.width = p, b.current.height = y, E.drawImage(
          f,
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
  }, [f, a, s, p, y]), /* @__PURE__ */ ue.jsx("canvas", { className: "m-0", ref: b });
};
var K1 = {};
(function(f) {
  Object.defineProperty(f, "__esModule", {
    value: !0
  }), f.default = f.useDeferredState = void 0;
  var a = s(Xe);
  function s(z) {
    return z && z.__esModule ? z : { default: z };
  }
  function p(z, F) {
    return x(z) || E(z, F) || b(z, F) || y();
  }
  function y() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function b(z, F) {
    if (z) {
      if (typeof z == "string")
        return T(z, F);
      var H = Object.prototype.toString.call(z).slice(8, -1);
      if (H === "Object" && z.constructor && (H = z.constructor.name), H === "Map" || H === "Set")
        return Array.from(z);
      if (H === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(H))
        return T(z, F);
    }
  }
  function T(z, F) {
    (F == null || F > z.length) && (F = z.length);
    for (var H = 0, Y = new Array(F); H < F; H++)
      Y[H] = z[H];
    return Y;
  }
  function E(z, F) {
    if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(z)))) {
      var H = [], Y = !0, X = !1, fe = void 0;
      try {
        for (var xe = z[Symbol.iterator](), ze; !(Y = (ze = xe.next()).done) && (H.push(ze.value), !(F && H.length === F)); Y = !0)
          ;
      } catch (ge) {
        X = !0, fe = ge;
      } finally {
        try {
          !Y && xe.return != null && xe.return();
        } finally {
          if (X)
            throw fe;
        }
      }
      return H;
    }
  }
  function x(z) {
    if (Array.isArray(z))
      return z;
  }
  var O = function(F) {
    var H = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], Y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 500, X = a.default.useState(F), fe = p(X, 2), xe = fe[0], ze = fe[1], ge = a.default.useRef(H);
    (H.length !== ge.current.length || H.some(function(Ce, ae) {
      return ge.current[ae] !== Ce;
    })) && (ge.current = H);
    var ie = ge.current;
    return a.default.useLayoutEffect(function() {
      var Ce = F;
      if (xe !== Ce)
        if (ie.includes(Ce))
          ze(Ce);
        else {
          var ae = window.setTimeout(function() {
            ze(Ce);
          }, Y);
          return function() {
            return window.clearTimeout(ae);
          };
        }
    }, [F, Y, xe, ie]), H.includes(F) ? F : xe;
  };
  f.useDeferredState = O;
  var A = O;
  f.default = A;
})(K1);
const IC = /* @__PURE__ */ B1(K1), Q1 = ({ colIndex: f }) => {
  var p;
  const a = Xe.useContext(ri.Context), s = IC(a, [], 500);
  return (p = s.image) != null && p.complete ? /* @__PURE__ */ ue.jsx(
    FC,
    {
      image: s.image,
      sx: s.header.width + f * s.cell.width,
      sy: 0,
      sw: s.cell.width,
      sh: s.header.height
    }
  ) : /* @__PURE__ */ ue.jsx(ue.Fragment, {});
}, X1 = ({ children: f, rowIndex: a, isHeader: s }) => {
  const p = Xe.useContext(ri.Context);
  return /* @__PURE__ */ ue.jsx("li", { className: "row flex-nowrap", "data-id": a + (s ? 0 : 1), style: { height: s ? p.header.height + 2 : p.cell.height + 2 }, children: f });
}, sE = ({ children: f, isTitle: a }) => {
  const s = Xe.useContext(ri.Context), p = a ? s.header.width : s.cell.width;
  return /* @__PURE__ */ ue.jsx("div", { className: "col p-0 border", style: { width: p, minWidth: p }, children: f });
}, gM = () => {
  var s;
  const f = Xe.useContext(ri.Context);
  let a = [/* @__PURE__ */ ue.jsx(sE, { isTitle: !0, children: /* @__PURE__ */ ue.jsx(ue.Fragment, {}) }, 0)];
  if ((s = f.image) != null && s.complete)
    for (let p = 0; p < f.cols; p++)
      a.push(/* @__PURE__ */ ue.jsx(sE, { children: /* @__PURE__ */ ue.jsx(Q1, { colIndex: p }) }, p + 1));
  return /* @__PURE__ */ ue.jsx(X1, { rowIndex: 0, isHeader: !0, children: a });
};
/**!
 * Sortable 1.15.1
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function JR(f, a) {
  var s = Object.keys(f);
  if (Object.getOwnPropertySymbols) {
    var p = Object.getOwnPropertySymbols(f);
    a && (p = p.filter(function(y) {
      return Object.getOwnPropertyDescriptor(f, y).enumerable;
    })), s.push.apply(s, p);
  }
  return s;
}
function Ul(f) {
  for (var a = 1; a < arguments.length; a++) {
    var s = arguments[a] != null ? arguments[a] : {};
    a % 2 ? JR(Object(s), !0).forEach(function(p) {
      yM(f, p, s[p]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(s)) : JR(Object(s)).forEach(function(p) {
      Object.defineProperty(f, p, Object.getOwnPropertyDescriptor(s, p));
    });
  }
  return f;
}
function tE(f) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? tE = function(a) {
    return typeof a;
  } : tE = function(a) {
    return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
  }, tE(f);
}
function yM(f, a, s) {
  return a in f ? Object.defineProperty(f, a, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : f[a] = s, f;
}
function Nu() {
  return Nu = Object.assign || function(f) {
    for (var a = 1; a < arguments.length; a++) {
      var s = arguments[a];
      for (var p in s)
        Object.prototype.hasOwnProperty.call(s, p) && (f[p] = s[p]);
    }
    return f;
  }, Nu.apply(this, arguments);
}
function EM(f, a) {
  if (f == null)
    return {};
  var s = {}, p = Object.keys(f), y, b;
  for (b = 0; b < p.length; b++)
    y = p[b], !(a.indexOf(y) >= 0) && (s[y] = f[y]);
  return s;
}
function _M(f, a) {
  if (f == null)
    return {};
  var s = EM(f, a), p, y;
  if (Object.getOwnPropertySymbols) {
    var b = Object.getOwnPropertySymbols(f);
    for (y = 0; y < b.length; y++)
      p = b[y], !(a.indexOf(p) >= 0) && Object.prototype.propertyIsEnumerable.call(f, p) && (s[p] = f[p]);
  }
  return s;
}
var SM = "1.15.1";
function Du(f) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(f);
}
var Lu = Du(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), Yv = Du(/Edge/i), e1 = Du(/firefox/i), Pv = Du(/safari/i) && !Du(/chrome/i) && !Du(/android/i), q1 = Du(/iP(ad|od|hone)/i), Z1 = Du(/chrome/i) && Du(/android/i), J1 = {
  capture: !1,
  passive: !1
};
function rn(f, a, s) {
  f.addEventListener(a, s, !Lu && J1);
}
function Gt(f, a, s) {
  f.removeEventListener(a, s, !Lu && J1);
}
function cE(f, a) {
  if (a) {
    if (a[0] === ">" && (a = a.substring(1)), f)
      try {
        if (f.matches)
          return f.matches(a);
        if (f.msMatchesSelector)
          return f.msMatchesSelector(a);
        if (f.webkitMatchesSelector)
          return f.webkitMatchesSelector(a);
      } catch {
        return !1;
      }
    return !1;
  }
}
function CM(f) {
  return f.host && f !== document && f.host.nodeType ? f.host : f.parentNode;
}
function kl(f, a, s, p) {
  if (f) {
    s = s || document;
    do {
      if (a != null && (a[0] === ">" ? f.parentNode === s && cE(f, a) : cE(f, a)) || p && f === s)
        return f;
      if (f === s)
        break;
    } while (f = CM(f));
  }
  return null;
}
var t1 = /\s+/g;
function Na(f, a, s) {
  if (f && a)
    if (f.classList)
      f.classList[s ? "add" : "remove"](a);
    else {
      var p = (" " + f.className + " ").replace(t1, " ").replace(" " + a + " ", " ");
      f.className = (p + (s ? " " + a : "")).replace(t1, " ");
    }
}
function st(f, a, s) {
  var p = f && f.style;
  if (p) {
    if (s === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? s = document.defaultView.getComputedStyle(f, "") : f.currentStyle && (s = f.currentStyle), a === void 0 ? s : s[a];
    !(a in p) && a.indexOf("webkit") === -1 && (a = "-webkit-" + a), p[a] = s + (typeof s == "string" ? "" : "px");
  }
}
function gp(f, a) {
  var s = "";
  if (typeof f == "string")
    s = f;
  else
    do {
      var p = st(f, "transform");
      p && p !== "none" && (s = p + " " + s);
    } while (!a && (f = f.parentNode));
  var y = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return y && new y(s);
}
function ex(f, a, s) {
  if (f) {
    var p = f.getElementsByTagName(a), y = 0, b = p.length;
    if (s)
      for (; y < b; y++)
        s(p[y], y);
    return p;
  }
  return [];
}
function Ll() {
  var f = document.scrollingElement;
  return f || document.documentElement;
}
function _r(f, a, s, p, y) {
  if (!(!f.getBoundingClientRect && f !== window)) {
    var b, T, E, x, O, A, z;
    if (f !== window && f.parentNode && f !== Ll() ? (b = f.getBoundingClientRect(), T = b.top, E = b.left, x = b.bottom, O = b.right, A = b.height, z = b.width) : (T = 0, E = 0, x = window.innerHeight, O = window.innerWidth, A = window.innerHeight, z = window.innerWidth), (a || s) && f !== window && (y = y || f.parentNode, !Lu))
      do
        if (y && y.getBoundingClientRect && (st(y, "transform") !== "none" || s && st(y, "position") !== "static")) {
          var F = y.getBoundingClientRect();
          T -= F.top + parseInt(st(y, "border-top-width")), E -= F.left + parseInt(st(y, "border-left-width")), x = T + b.height, O = E + b.width;
          break;
        }
      while (y = y.parentNode);
    if (p && f !== window) {
      var H = gp(y || f), Y = H && H.a, X = H && H.d;
      H && (T /= X, E /= Y, z /= Y, A /= X, x = T + A, O = E + z);
    }
    return {
      top: T,
      left: E,
      bottom: x,
      right: O,
      width: z,
      height: A
    };
  }
}
function tx(f) {
  var a = _r(f), s = parseInt(st(f, "padding-left")), p = parseInt(st(f, "padding-top")), y = parseInt(st(f, "padding-right")), b = parseInt(st(f, "padding-bottom"));
  return a.top += p + parseInt(st(f, "border-top-width")), a.left += s + parseInt(st(f, "border-left-width")), a.width = f.clientWidth - s - y, a.height = f.clientHeight - p - b, a.bottom = a.top + a.height, a.right = a.left + a.width, a;
}
function n1(f, a, s) {
  for (var p = Vs(f, !0), y = _r(f)[a]; p; ) {
    var b = _r(p)[s], T = void 0;
    if (s === "top" || s === "left" ? T = y >= b : T = y <= b, !T)
      return p;
    if (p === Ll())
      break;
    p = Vs(p, !1);
  }
  return !1;
}
function yp(f, a, s, p) {
  for (var y = 0, b = 0, T = f.children; b < T.length; ) {
    if (T[b].style.display !== "none" && T[b] !== Ct.ghost && (p || T[b] !== Ct.dragged) && kl(T[b], s.draggable, f, !1)) {
      if (y === a)
        return T[b];
      y++;
    }
    b++;
  }
  return null;
}
function HC(f, a) {
  for (var s = f.lastElementChild; s && (s === Ct.ghost || st(s, "display") === "none" || a && !cE(s, a)); )
    s = s.previousElementSibling;
  return s || null;
}
function oo(f, a) {
  var s = 0;
  if (!f || !f.parentNode)
    return -1;
  for (; f = f.previousElementSibling; )
    f.nodeName.toUpperCase() !== "TEMPLATE" && f !== Ct.clone && (!a || cE(f, a)) && s++;
  return s;
}
function r1(f) {
  var a = 0, s = 0, p = Ll();
  if (f)
    do {
      var y = gp(f), b = y.a, T = y.d;
      a += f.scrollLeft * b, s += f.scrollTop * T;
    } while (f !== p && (f = f.parentNode));
  return [a, s];
}
function bM(f, a) {
  for (var s in f)
    if (f.hasOwnProperty(s)) {
      for (var p in a)
        if (a.hasOwnProperty(p) && a[p] === f[s][p])
          return Number(s);
    }
  return -1;
}
function Vs(f, a) {
  if (!f || !f.getBoundingClientRect)
    return Ll();
  var s = f, p = !1;
  do
    if (s.clientWidth < s.scrollWidth || s.clientHeight < s.scrollHeight) {
      var y = st(s);
      if (s.clientWidth < s.scrollWidth && (y.overflowX == "auto" || y.overflowX == "scroll") || s.clientHeight < s.scrollHeight && (y.overflowY == "auto" || y.overflowY == "scroll")) {
        if (!s.getBoundingClientRect || s === document.body)
          return Ll();
        if (p || a)
          return s;
        p = !0;
      }
    }
  while (s = s.parentNode);
  return Ll();
}
function TM(f, a) {
  if (f && a)
    for (var s in a)
      a.hasOwnProperty(s) && (f[s] = a[s]);
  return f;
}
function tC(f, a) {
  return Math.round(f.top) === Math.round(a.top) && Math.round(f.left) === Math.round(a.left) && Math.round(f.height) === Math.round(a.height) && Math.round(f.width) === Math.round(a.width);
}
var jv;
function nx(f, a) {
  return function() {
    if (!jv) {
      var s = arguments, p = this;
      s.length === 1 ? f.call(p, s[0]) : f.apply(p, s), jv = setTimeout(function() {
        jv = void 0;
      }, a);
    }
  };
}
function wM() {
  clearTimeout(jv), jv = void 0;
}
function rx(f, a, s) {
  f.scrollLeft += a, f.scrollTop += s;
}
function ix(f) {
  var a = window.Polymer, s = window.jQuery || window.Zepto;
  return a && a.dom ? a.dom(f).cloneNode(!0) : s ? s(f).clone(!0)[0] : f.cloneNode(!0);
}
var La = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function RM() {
  var f = [], a;
  return {
    captureAnimationState: function() {
      if (f = [], !!this.options.animation) {
        var p = [].slice.call(this.el.children);
        p.forEach(function(y) {
          if (!(st(y, "display") === "none" || y === Ct.ghost)) {
            f.push({
              target: y,
              rect: _r(y)
            });
            var b = Ul({}, f[f.length - 1].rect);
            if (y.thisAnimationDuration) {
              var T = gp(y, !0);
              T && (b.top -= T.f, b.left -= T.e);
            }
            y.fromRect = b;
          }
        });
      }
    },
    addAnimationState: function(p) {
      f.push(p);
    },
    removeAnimationState: function(p) {
      f.splice(bM(f, {
        target: p
      }), 1);
    },
    animateAll: function(p) {
      var y = this;
      if (!this.options.animation) {
        clearTimeout(a), typeof p == "function" && p();
        return;
      }
      var b = !1, T = 0;
      f.forEach(function(E) {
        var x = 0, O = E.target, A = O.fromRect, z = _r(O), F = O.prevFromRect, H = O.prevToRect, Y = E.rect, X = gp(O, !0);
        X && (z.top -= X.f, z.left -= X.e), O.toRect = z, O.thisAnimationDuration && tC(F, z) && !tC(A, z) && // Make sure animatingRect is on line between toRect & fromRect
        (Y.top - z.top) / (Y.left - z.left) === (A.top - z.top) / (A.left - z.left) && (x = DM(Y, F, H, y.options)), tC(z, A) || (O.prevFromRect = A, O.prevToRect = z, x || (x = y.options.animation), y.animate(O, Y, z, x)), x && (b = !0, T = Math.max(T, x), clearTimeout(O.animationResetTimer), O.animationResetTimer = setTimeout(function() {
          O.animationTime = 0, O.prevFromRect = null, O.fromRect = null, O.prevToRect = null, O.thisAnimationDuration = null;
        }, x), O.thisAnimationDuration = x);
      }), clearTimeout(a), b ? a = setTimeout(function() {
        typeof p == "function" && p();
      }, T) : typeof p == "function" && p(), f = [];
    },
    animate: function(p, y, b, T) {
      if (T) {
        st(p, "transition", ""), st(p, "transform", "");
        var E = gp(this.el), x = E && E.a, O = E && E.d, A = (y.left - b.left) / (x || 1), z = (y.top - b.top) / (O || 1);
        p.animatingX = !!A, p.animatingY = !!z, st(p, "transform", "translate3d(" + A + "px," + z + "px,0)"), this.forRepaintDummy = xM(p), st(p, "transition", "transform " + T + "ms" + (this.options.easing ? " " + this.options.easing : "")), st(p, "transform", "translate3d(0,0,0)"), typeof p.animated == "number" && clearTimeout(p.animated), p.animated = setTimeout(function() {
          st(p, "transition", ""), st(p, "transform", ""), p.animated = !1, p.animatingX = !1, p.animatingY = !1;
        }, T);
      }
    }
  };
}
function xM(f) {
  return f.offsetWidth;
}
function DM(f, a, s, p) {
  return Math.sqrt(Math.pow(a.top - f.top, 2) + Math.pow(a.left - f.left, 2)) / Math.sqrt(Math.pow(a.top - s.top, 2) + Math.pow(a.left - s.left, 2)) * p.animation;
}
var lp = [], nC = {
  initializeByDefault: !0
}, Wv = {
  mount: function(a) {
    for (var s in nC)
      nC.hasOwnProperty(s) && !(s in a) && (a[s] = nC[s]);
    lp.forEach(function(p) {
      if (p.pluginName === a.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(a.pluginName, " more than once");
    }), lp.push(a);
  },
  pluginEvent: function(a, s, p) {
    var y = this;
    this.eventCanceled = !1, p.cancel = function() {
      y.eventCanceled = !0;
    };
    var b = a + "Global";
    lp.forEach(function(T) {
      s[T.pluginName] && (s[T.pluginName][b] && s[T.pluginName][b](Ul({
        sortable: s
      }, p)), s.options[T.pluginName] && s[T.pluginName][a] && s[T.pluginName][a](Ul({
        sortable: s
      }, p)));
    });
  },
  initializePlugins: function(a, s, p, y) {
    lp.forEach(function(E) {
      var x = E.pluginName;
      if (!(!a.options[x] && !E.initializeByDefault)) {
        var O = new E(a, s, a.options);
        O.sortable = a, O.options = a.options, a[x] = O, Nu(p, O.defaults);
      }
    });
    for (var b in a.options)
      if (a.options.hasOwnProperty(b)) {
        var T = this.modifyOption(a, b, a.options[b]);
        typeof T < "u" && (a.options[b] = T);
      }
  },
  getEventProperties: function(a, s) {
    var p = {};
    return lp.forEach(function(y) {
      typeof y.eventProperties == "function" && Nu(p, y.eventProperties.call(s[y.pluginName], a));
    }), p;
  },
  modifyOption: function(a, s, p) {
    var y;
    return lp.forEach(function(b) {
      a[b.pluginName] && b.optionListeners && typeof b.optionListeners[s] == "function" && (y = b.optionListeners[s].call(a[b.pluginName], p));
    }), y;
  }
};
function OM(f) {
  var a = f.sortable, s = f.rootEl, p = f.name, y = f.targetEl, b = f.cloneEl, T = f.toEl, E = f.fromEl, x = f.oldIndex, O = f.newIndex, A = f.oldDraggableIndex, z = f.newDraggableIndex, F = f.originalEvent, H = f.putSortable, Y = f.extraEventProperties;
  if (a = a || s && s[La], !!a) {
    var X, fe = a.options, xe = "on" + p.charAt(0).toUpperCase() + p.substr(1);
    window.CustomEvent && !Lu && !Yv ? X = new CustomEvent(p, {
      bubbles: !0,
      cancelable: !0
    }) : (X = document.createEvent("Event"), X.initEvent(p, !0, !0)), X.to = T || s, X.from = E || s, X.item = y || s, X.clone = b, X.oldIndex = x, X.newIndex = O, X.oldDraggableIndex = A, X.newDraggableIndex = z, X.originalEvent = F, X.pullMode = H ? H.lastPutMode : void 0;
    var ze = Ul(Ul({}, Y), Wv.getEventProperties(p, a));
    for (var ge in ze)
      X[ge] = ze[ge];
    s && s.dispatchEvent(X), fe[xe] && fe[xe].call(a, X);
  }
}
var AM = ["evt"], ma = function(a, s) {
  var p = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, y = p.evt, b = _M(p, AM);
  Wv.pluginEvent.bind(Ct)(a, s, Ul({
    dragEl: ye,
    parentEl: rr,
    ghostEl: At,
    rootEl: In,
    nextEl: yf,
    lastDownEl: nE,
    cloneEl: Xn,
    cloneHidden: $s,
    dragStarted: Mv,
    putSortable: ni,
    activeSortable: Ct.active,
    originalEvent: y,
    oldIndex: vp,
    oldDraggableIndex: Fv,
    newIndex: ka,
    newDraggableIndex: Hs,
    hideGhostForTarget: ux,
    unhideGhostForTarget: sx,
    cloneNowHidden: function() {
      $s = !0;
    },
    cloneNowShown: function() {
      $s = !1;
    },
    dispatchSortableEvent: function(E) {
      Vi({
        sortable: s,
        name: E,
        originalEvent: y
      });
    }
  }, b));
};
function Vi(f) {
  OM(Ul({
    putSortable: ni,
    cloneEl: Xn,
    targetEl: ye,
    rootEl: In,
    oldIndex: vp,
    oldDraggableIndex: Fv,
    newIndex: ka,
    newDraggableIndex: Hs
  }, f));
}
var ye, rr, At, In, yf, nE, Xn, $s, vp, ka, Fv, Hs, By, ni, fp = !1, fE = !1, dE = [], mf, Wo, rC, iC, i1, a1, Mv, up, Iv, Hv = !1, Yy = !1, rE, Ri, aC = [], DC = !1, pE = [], _E = typeof document < "u", Wy = q1, o1 = Yv || Lu ? "cssFloat" : "float", NM = _E && !Z1 && !q1 && "draggable" in document.createElement("div"), ax = function() {
  if (_E) {
    if (Lu)
      return !1;
    var f = document.createElement("x");
    return f.style.cssText = "pointer-events:auto", f.style.pointerEvents === "auto";
  }
}(), ox = function(a, s) {
  var p = st(a), y = parseInt(p.width) - parseInt(p.paddingLeft) - parseInt(p.paddingRight) - parseInt(p.borderLeftWidth) - parseInt(p.borderRightWidth), b = yp(a, 0, s), T = yp(a, 1, s), E = b && st(b), x = T && st(T), O = E && parseInt(E.marginLeft) + parseInt(E.marginRight) + _r(b).width, A = x && parseInt(x.marginLeft) + parseInt(x.marginRight) + _r(T).width;
  if (p.display === "flex")
    return p.flexDirection === "column" || p.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (p.display === "grid")
    return p.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (b && E.float && E.float !== "none") {
    var z = E.float === "left" ? "left" : "right";
    return T && (x.clear === "both" || x.clear === z) ? "vertical" : "horizontal";
  }
  return b && (E.display === "block" || E.display === "flex" || E.display === "table" || E.display === "grid" || O >= y && p[o1] === "none" || T && p[o1] === "none" && O + A > y) ? "vertical" : "horizontal";
}, kM = function(a, s, p) {
  var y = p ? a.left : a.top, b = p ? a.right : a.bottom, T = p ? a.width : a.height, E = p ? s.left : s.top, x = p ? s.right : s.bottom, O = p ? s.width : s.height;
  return y === E || b === x || y + T / 2 === E + O / 2;
}, LM = function(a, s) {
  var p;
  return dE.some(function(y) {
    var b = y[La].options.emptyInsertThreshold;
    if (!(!b || HC(y))) {
      var T = _r(y), E = a >= T.left - b && a <= T.right + b, x = s >= T.top - b && s <= T.bottom + b;
      if (E && x)
        return p = y;
    }
  }), p;
}, lx = function(a) {
  function s(b, T) {
    return function(E, x, O, A) {
      var z = E.options.group.name && x.options.group.name && E.options.group.name === x.options.group.name;
      if (b == null && (T || z))
        return !0;
      if (b == null || b === !1)
        return !1;
      if (T && b === "clone")
        return b;
      if (typeof b == "function")
        return s(b(E, x, O, A), T)(E, x, O, A);
      var F = (T ? E : x).options.group.name;
      return b === !0 || typeof b == "string" && b === F || b.join && b.indexOf(F) > -1;
    };
  }
  var p = {}, y = a.group;
  (!y || tE(y) != "object") && (y = {
    name: y
  }), p.name = y.name, p.checkPull = s(y.pull, !0), p.checkPut = s(y.put), p.revertClone = y.revertClone, a.group = p;
}, ux = function() {
  !ax && At && st(At, "display", "none");
}, sx = function() {
  !ax && At && st(At, "display", "");
};
_E && !Z1 && document.addEventListener("click", function(f) {
  if (fE)
    return f.preventDefault(), f.stopPropagation && f.stopPropagation(), f.stopImmediatePropagation && f.stopImmediatePropagation(), fE = !1, !1;
}, !0);
var gf = function(a) {
  if (ye) {
    a = a.touches ? a.touches[0] : a;
    var s = LM(a.clientX, a.clientY);
    if (s) {
      var p = {};
      for (var y in a)
        a.hasOwnProperty(y) && (p[y] = a[y]);
      p.target = p.rootEl = s, p.preventDefault = void 0, p.stopPropagation = void 0, s[La]._onDragOver(p);
    }
  }
}, MM = function(a) {
  ye && ye.parentNode[La]._isOutsideThisEl(a.target);
};
function Ct(f, a) {
  if (!(f && f.nodeType && f.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(f));
  this.el = f, this.options = a = Nu({}, a), f[La] = this;
  var s = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(f.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: !1,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: !0,
    direction: function() {
      return ox(f, this.options);
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
    supportPointer: Ct.supportPointer !== !1 && "PointerEvent" in window && !Pv,
    emptyInsertThreshold: 5
  };
  Wv.initializePlugins(this, f, s);
  for (var p in s)
    !(p in a) && (a[p] = s[p]);
  lx(a);
  for (var y in this)
    y.charAt(0) === "_" && typeof this[y] == "function" && (this[y] = this[y].bind(this));
  this.nativeDraggable = a.forceFallback ? !1 : NM, this.nativeDraggable && (this.options.touchStartThreshold = 1), a.supportPointer ? rn(f, "pointerdown", this._onTapStart) : (rn(f, "mousedown", this._onTapStart), rn(f, "touchstart", this._onTapStart)), this.nativeDraggable && (rn(f, "dragover", this), rn(f, "dragenter", this)), dE.push(this.el), a.store && a.store.get && this.sort(a.store.get(this) || []), Nu(this, RM());
}
Ct.prototype = /** @lends Sortable.prototype */
{
  constructor: Ct,
  _isOutsideThisEl: function(a) {
    !this.el.contains(a) && a !== this.el && (up = null);
  },
  _getDirection: function(a, s) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, a, s, ye) : this.options.direction;
  },
  _onTapStart: function(a) {
    if (a.cancelable) {
      var s = this, p = this.el, y = this.options, b = y.preventOnFilter, T = a.type, E = a.touches && a.touches[0] || a.pointerType && a.pointerType === "touch" && a, x = (E || a).target, O = a.target.shadowRoot && (a.path && a.path[0] || a.composedPath && a.composedPath()[0]) || x, A = y.filter;
      if ($M(p), !ye && !(/mousedown|pointerdown/.test(T) && a.button !== 0 || y.disabled) && !O.isContentEditable && !(!this.nativeDraggable && Pv && x && x.tagName.toUpperCase() === "SELECT") && (x = kl(x, y.draggable, p, !1), !(x && x.animated) && nE !== x)) {
        if (vp = oo(x), Fv = oo(x, y.draggable), typeof A == "function") {
          if (A.call(this, a, x, this)) {
            Vi({
              sortable: s,
              rootEl: O,
              name: "filter",
              targetEl: x,
              toEl: p,
              fromEl: p
            }), ma("filter", s, {
              evt: a
            }), b && a.cancelable && a.preventDefault();
            return;
          }
        } else if (A && (A = A.split(",").some(function(z) {
          if (z = kl(O, z.trim(), p, !1), z)
            return Vi({
              sortable: s,
              rootEl: z,
              name: "filter",
              targetEl: x,
              fromEl: p,
              toEl: p
            }), ma("filter", s, {
              evt: a
            }), !0;
        }), A)) {
          b && a.cancelable && a.preventDefault();
          return;
        }
        y.handle && !kl(O, y.handle, p, !1) || this._prepareDragStart(a, E, x);
      }
    }
  },
  _prepareDragStart: function(a, s, p) {
    var y = this, b = y.el, T = y.options, E = b.ownerDocument, x;
    if (p && !ye && p.parentNode === b) {
      var O = _r(p);
      if (In = b, ye = p, rr = ye.parentNode, yf = ye.nextSibling, nE = p, By = T.group, Ct.dragged = ye, mf = {
        target: ye,
        clientX: (s || a).clientX,
        clientY: (s || a).clientY
      }, i1 = mf.clientX - O.left, a1 = mf.clientY - O.top, this._lastX = (s || a).clientX, this._lastY = (s || a).clientY, ye.style["will-change"] = "all", x = function() {
        if (ma("delayEnded", y, {
          evt: a
        }), Ct.eventCanceled) {
          y._onDrop();
          return;
        }
        y._disableDelayedDragEvents(), !e1 && y.nativeDraggable && (ye.draggable = !0), y._triggerDragStart(a, s), Vi({
          sortable: y,
          name: "choose",
          originalEvent: a
        }), Na(ye, T.chosenClass, !0);
      }, T.ignore.split(",").forEach(function(A) {
        ex(ye, A.trim(), oC);
      }), rn(E, "dragover", gf), rn(E, "mousemove", gf), rn(E, "touchmove", gf), rn(E, "mouseup", y._onDrop), rn(E, "touchend", y._onDrop), rn(E, "touchcancel", y._onDrop), e1 && this.nativeDraggable && (this.options.touchStartThreshold = 4, ye.draggable = !0), ma("delayStart", this, {
        evt: a
      }), T.delay && (!T.delayOnTouchOnly || s) && (!this.nativeDraggable || !(Yv || Lu))) {
        if (Ct.eventCanceled) {
          this._onDrop();
          return;
        }
        rn(E, "mouseup", y._disableDelayedDrag), rn(E, "touchend", y._disableDelayedDrag), rn(E, "touchcancel", y._disableDelayedDrag), rn(E, "mousemove", y._delayedDragTouchMoveHandler), rn(E, "touchmove", y._delayedDragTouchMoveHandler), T.supportPointer && rn(E, "pointermove", y._delayedDragTouchMoveHandler), y._dragStartTimer = setTimeout(x, T.delay);
      } else
        x();
    }
  },
  _delayedDragTouchMoveHandler: function(a) {
    var s = a.touches ? a.touches[0] : a;
    Math.max(Math.abs(s.clientX - this._lastX), Math.abs(s.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    ye && oC(ye), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var a = this.el.ownerDocument;
    Gt(a, "mouseup", this._disableDelayedDrag), Gt(a, "touchend", this._disableDelayedDrag), Gt(a, "touchcancel", this._disableDelayedDrag), Gt(a, "mousemove", this._delayedDragTouchMoveHandler), Gt(a, "touchmove", this._delayedDragTouchMoveHandler), Gt(a, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(a, s) {
    s = s || a.pointerType == "touch" && a, !this.nativeDraggable || s ? this.options.supportPointer ? rn(document, "pointermove", this._onTouchMove) : s ? rn(document, "touchmove", this._onTouchMove) : rn(document, "mousemove", this._onTouchMove) : (rn(ye, "dragend", this), rn(In, "dragstart", this._onDragStart));
    try {
      document.selection ? iE(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(a, s) {
    if (fp = !1, In && ye) {
      ma("dragStarted", this, {
        evt: s
      }), this.nativeDraggable && rn(document, "dragover", MM);
      var p = this.options;
      !a && Na(ye, p.dragClass, !1), Na(ye, p.ghostClass, !0), Ct.active = this, a && this._appendGhost(), Vi({
        sortable: this,
        name: "start",
        originalEvent: s
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (Wo) {
      this._lastX = Wo.clientX, this._lastY = Wo.clientY, ux();
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
      sx();
    }
  },
  _onTouchMove: function(a) {
    if (mf) {
      var s = this.options, p = s.fallbackTolerance, y = s.fallbackOffset, b = a.touches ? a.touches[0] : a, T = At && gp(At, !0), E = At && T && T.a, x = At && T && T.d, O = Wy && Ri && r1(Ri), A = (b.clientX - mf.clientX + y.x) / (E || 1) + (O ? O[0] - aC[0] : 0) / (E || 1), z = (b.clientY - mf.clientY + y.y) / (x || 1) + (O ? O[1] - aC[1] : 0) / (x || 1);
      if (!Ct.active && !fp) {
        if (p && Math.max(Math.abs(b.clientX - this._lastX), Math.abs(b.clientY - this._lastY)) < p)
          return;
        this._onDragStart(a, !0);
      }
      if (At) {
        T ? (T.e += A - (rC || 0), T.f += z - (iC || 0)) : T = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: A,
          f: z
        };
        var F = "matrix(".concat(T.a, ",").concat(T.b, ",").concat(T.c, ",").concat(T.d, ",").concat(T.e, ",").concat(T.f, ")");
        st(At, "webkitTransform", F), st(At, "mozTransform", F), st(At, "msTransform", F), st(At, "transform", F), rC = A, iC = z, Wo = b;
      }
      a.cancelable && a.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!At) {
      var a = this.options.fallbackOnBody ? document.body : In, s = _r(ye, !0, Wy, !0, a), p = this.options;
      if (Wy) {
        for (Ri = a; st(Ri, "position") === "static" && st(Ri, "transform") === "none" && Ri !== document; )
          Ri = Ri.parentNode;
        Ri !== document.body && Ri !== document.documentElement ? (Ri === document && (Ri = Ll()), s.top += Ri.scrollTop, s.left += Ri.scrollLeft) : Ri = Ll(), aC = r1(Ri);
      }
      At = ye.cloneNode(!0), Na(At, p.ghostClass, !1), Na(At, p.fallbackClass, !0), Na(At, p.dragClass, !0), st(At, "transition", ""), st(At, "transform", ""), st(At, "box-sizing", "border-box"), st(At, "margin", 0), st(At, "top", s.top), st(At, "left", s.left), st(At, "width", s.width), st(At, "height", s.height), st(At, "opacity", "0.8"), st(At, "position", Wy ? "absolute" : "fixed"), st(At, "zIndex", "100000"), st(At, "pointerEvents", "none"), Ct.ghost = At, a.appendChild(At), st(At, "transform-origin", i1 / parseInt(At.style.width) * 100 + "% " + a1 / parseInt(At.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(a, s) {
    var p = this, y = a.dataTransfer, b = p.options;
    if (ma("dragStart", this, {
      evt: a
    }), Ct.eventCanceled) {
      this._onDrop();
      return;
    }
    ma("setupClone", this), Ct.eventCanceled || (Xn = ix(ye), Xn.removeAttribute("id"), Xn.draggable = !1, Xn.style["will-change"] = "", this._hideClone(), Na(Xn, this.options.chosenClass, !1), Ct.clone = Xn), p.cloneId = iE(function() {
      ma("clone", p), !Ct.eventCanceled && (p.options.removeCloneOnHide || In.insertBefore(Xn, ye), p._hideClone(), Vi({
        sortable: p,
        name: "clone"
      }));
    }), !s && Na(ye, b.dragClass, !0), s ? (fE = !0, p._loopId = setInterval(p._emulateDragOver, 50)) : (Gt(document, "mouseup", p._onDrop), Gt(document, "touchend", p._onDrop), Gt(document, "touchcancel", p._onDrop), y && (y.effectAllowed = "move", b.setData && b.setData.call(p, y, ye)), rn(document, "drop", p), st(ye, "transform", "translateZ(0)")), fp = !0, p._dragStartId = iE(p._dragStarted.bind(p, s, a)), rn(document, "selectstart", p), Mv = !0, Pv && st(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(a) {
    var s = this.el, p = a.target, y, b, T, E = this.options, x = E.group, O = Ct.active, A = By === x, z = E.sort, F = ni || O, H, Y = this, X = !1;
    if (DC)
      return;
    function fe(ee, be) {
      ma(ee, Y, Ul({
        evt: a,
        isOwner: A,
        axis: H ? "vertical" : "horizontal",
        revert: T,
        dragRect: y,
        targetRect: b,
        canSort: z,
        fromSortable: F,
        target: p,
        completed: ze,
        onMove: function(ne, we) {
          return Gy(In, s, ye, y, ne, _r(ne), a, we);
        },
        changed: ge
      }, be));
    }
    function xe() {
      fe("dragOverAnimationCapture"), Y.captureAnimationState(), Y !== F && F.captureAnimationState();
    }
    function ze(ee) {
      return fe("dragOverCompleted", {
        insertion: ee
      }), ee && (A ? O._hideClone() : O._showClone(Y), Y !== F && (Na(ye, ni ? ni.options.ghostClass : O.options.ghostClass, !1), Na(ye, E.ghostClass, !0)), ni !== Y && Y !== Ct.active ? ni = Y : Y === Ct.active && ni && (ni = null), F === Y && (Y._ignoreWhileAnimating = p), Y.animateAll(function() {
        fe("dragOverAnimationComplete"), Y._ignoreWhileAnimating = null;
      }), Y !== F && (F.animateAll(), F._ignoreWhileAnimating = null)), (p === ye && !ye.animated || p === s && !p.animated) && (up = null), !E.dragoverBubble && !a.rootEl && p !== document && (ye.parentNode[La]._isOutsideThisEl(a.target), !ee && gf(a)), !E.dragoverBubble && a.stopPropagation && a.stopPropagation(), X = !0;
    }
    function ge() {
      ka = oo(ye), Hs = oo(ye, E.draggable), Vi({
        sortable: Y,
        name: "change",
        toEl: s,
        newIndex: ka,
        newDraggableIndex: Hs,
        originalEvent: a
      });
    }
    if (a.preventDefault !== void 0 && a.cancelable && a.preventDefault(), p = kl(p, E.draggable, s, !0), fe("dragOver"), Ct.eventCanceled)
      return X;
    if (ye.contains(a.target) || p.animated && p.animatingX && p.animatingY || Y._ignoreWhileAnimating === p)
      return ze(!1);
    if (fE = !1, O && !E.disabled && (A ? z || (T = rr !== In) : ni === this || (this.lastPutMode = By.checkPull(this, O, ye, a)) && x.checkPut(this, O, ye, a))) {
      if (H = this._getDirection(a, p) === "vertical", y = _r(ye), fe("dragOverValid"), Ct.eventCanceled)
        return X;
      if (T)
        return rr = In, xe(), this._hideClone(), fe("revert"), Ct.eventCanceled || (yf ? In.insertBefore(ye, yf) : In.appendChild(ye)), ze(!0);
      var ie = HC(s, E.draggable);
      if (!ie || jM(a, H, this) && !ie.animated) {
        if (ie === ye)
          return ze(!1);
        if (ie && s === a.target && (p = ie), p && (b = _r(p)), Gy(In, s, ye, y, p, b, a, !!p) !== !1)
          return xe(), ie && ie.nextSibling ? s.insertBefore(ye, ie.nextSibling) : s.appendChild(ye), rr = s, ge(), ze(!0);
      } else if (ie && PM(a, H, this)) {
        var Ce = yp(s, 0, E, !0);
        if (Ce === ye)
          return ze(!1);
        if (p = Ce, b = _r(p), Gy(In, s, ye, y, p, b, a, !1) !== !1)
          return xe(), s.insertBefore(ye, Ce), rr = s, ge(), ze(!0);
      } else if (p.parentNode === s) {
        b = _r(p);
        var ae = 0, Ne, De = ye.parentNode !== s, tt = !kM(ye.animated && ye.toRect || y, p.animated && p.toRect || b, H), vt = H ? "top" : "left", ot = n1(p, "top", "top") || n1(ye, "top", "top"), at = ot ? ot.scrollTop : void 0;
        up !== p && (Ne = b[vt], Hv = !1, Yy = !tt && E.invertSwap || De), ae = FM(a, p, b, H, tt ? 1 : E.swapThreshold, E.invertedSwapThreshold == null ? E.swapThreshold : E.invertedSwapThreshold, Yy, up === p);
        var ct;
        if (ae !== 0) {
          var Pe = oo(ye);
          do
            Pe -= ae, ct = rr.children[Pe];
          while (ct && (st(ct, "display") === "none" || ct === At));
        }
        if (ae === 0 || ct === p)
          return ze(!1);
        up = p, Iv = ae;
        var Ze = p.nextElementSibling, qe = !1;
        qe = ae === 1;
        var Ye = Gy(In, s, ye, y, p, b, a, qe);
        if (Ye !== !1)
          return (Ye === 1 || Ye === -1) && (qe = Ye === 1), DC = !0, setTimeout(UM, 30), xe(), qe && !Ze ? s.appendChild(ye) : p.parentNode.insertBefore(ye, qe ? Ze : p), ot && rx(ot, 0, at - ot.scrollTop), rr = ye.parentNode, Ne !== void 0 && !Yy && (rE = Math.abs(Ne - _r(p)[vt])), ge(), ze(!0);
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
    fp = !1, Yy = !1, Hv = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), OC(this.cloneId), OC(this._dragStartId), this.nativeDraggable && (Gt(document, "drop", this), Gt(s, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Pv && st(document.body, "user-select", ""), st(ye, "transform", ""), a && (Mv && (a.cancelable && a.preventDefault(), !p.dropBubble && a.stopPropagation()), At && At.parentNode && At.parentNode.removeChild(At), (In === rr || ni && ni.lastPutMode !== "clone") && Xn && Xn.parentNode && Xn.parentNode.removeChild(Xn), ye && (this.nativeDraggable && Gt(ye, "dragend", this), oC(ye), ye.style["will-change"] = "", Mv && !fp && Na(ye, ni ? ni.options.ghostClass : this.options.ghostClass, !1), Na(ye, this.options.chosenClass, !1), Vi({
      sortable: this,
      name: "unchoose",
      toEl: rr,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: a
    }), In !== rr ? (ka >= 0 && (Vi({
      rootEl: rr,
      name: "add",
      toEl: rr,
      fromEl: In,
      originalEvent: a
    }), Vi({
      sortable: this,
      name: "remove",
      toEl: rr,
      originalEvent: a
    }), Vi({
      rootEl: rr,
      name: "sort",
      toEl: rr,
      fromEl: In,
      originalEvent: a
    }), Vi({
      sortable: this,
      name: "sort",
      toEl: rr,
      originalEvent: a
    })), ni && ni.save()) : ka !== vp && ka >= 0 && (Vi({
      sortable: this,
      name: "update",
      toEl: rr,
      originalEvent: a
    }), Vi({
      sortable: this,
      name: "sort",
      toEl: rr,
      originalEvent: a
    })), Ct.active && ((ka == null || ka === -1) && (ka = vp, Hs = Fv), Vi({
      sortable: this,
      name: "end",
      toEl: rr,
      originalEvent: a
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    ma("nulling", this), In = ye = rr = At = yf = Xn = nE = $s = mf = Wo = Mv = ka = Hs = vp = Fv = up = Iv = ni = By = Ct.dragged = Ct.ghost = Ct.clone = Ct.active = null, pE.forEach(function(a) {
      a.checked = !0;
    }), pE.length = rC = iC = 0;
  },
  handleEvent: function(a) {
    switch (a.type) {
      case "drop":
      case "dragend":
        this._onDrop(a);
        break;
      case "dragenter":
      case "dragover":
        ye && (this._onDragOver(a), zM(a));
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
    for (var a = [], s, p = this.el.children, y = 0, b = p.length, T = this.options; y < b; y++)
      s = p[y], kl(s, T.draggable, this.el, !1) && a.push(s.getAttribute(T.dataIdAttr) || HM(s));
    return a;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(a, s) {
    var p = {}, y = this.el;
    this.toArray().forEach(function(b, T) {
      var E = y.children[T];
      kl(E, this.options.draggable, y, !1) && (p[b] = E);
    }, this), s && this.captureAnimationState(), a.forEach(function(b) {
      p[b] && (y.removeChild(p[b]), y.appendChild(p[b]));
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
    var y = Wv.modifyOption(this, a, s);
    typeof y < "u" ? p[a] = y : p[a] = s, a === "group" && lx(p);
  },
  /**
   * Destroy
   */
  destroy: function() {
    ma("destroy", this);
    var a = this.el;
    a[La] = null, Gt(a, "mousedown", this._onTapStart), Gt(a, "touchstart", this._onTapStart), Gt(a, "pointerdown", this._onTapStart), this.nativeDraggable && (Gt(a, "dragover", this), Gt(a, "dragenter", this)), Array.prototype.forEach.call(a.querySelectorAll("[draggable]"), function(s) {
      s.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), dE.splice(dE.indexOf(this.el), 1), this.el = a = null;
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
      ye.parentNode == In && !this.options.group.revertClone ? In.insertBefore(Xn, ye) : yf ? In.insertBefore(Xn, yf) : In.appendChild(Xn), this.options.group.revertClone && this.animate(ye, Xn), st(Xn, "display", ""), $s = !1;
    }
  }
};
function zM(f) {
  f.dataTransfer && (f.dataTransfer.dropEffect = "move"), f.cancelable && f.preventDefault();
}
function Gy(f, a, s, p, y, b, T, E) {
  var x, O = f[La], A = O.options.onMove, z;
  return window.CustomEvent && !Lu && !Yv ? x = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (x = document.createEvent("Event"), x.initEvent("move", !0, !0)), x.to = a, x.from = f, x.dragged = s, x.draggedRect = p, x.related = y || a, x.relatedRect = b || _r(a), x.willInsertAfter = E, x.originalEvent = T, f.dispatchEvent(x), A && (z = A.call(O, x, T)), z;
}
function oC(f) {
  f.draggable = !1;
}
function UM() {
  DC = !1;
}
function PM(f, a, s) {
  var p = _r(yp(s.el, 0, s.options, !0)), y = tx(s.el), b = 10;
  return a ? f.clientX < y.left - b || f.clientY < p.top && f.clientX < p.right : f.clientY < y.top - b || f.clientY < p.bottom && f.clientX < p.left;
}
function jM(f, a, s) {
  var p = _r(HC(s.el, s.options.draggable)), y = tx(s.el), b = 10;
  return a ? f.clientX > y.right + b || f.clientY > p.bottom && f.clientX > p.left : f.clientY > y.bottom + b || f.clientX > p.right && f.clientY > p.top;
}
function FM(f, a, s, p, y, b, T, E) {
  var x = p ? f.clientY : f.clientX, O = p ? s.height : s.width, A = p ? s.top : s.left, z = p ? s.bottom : s.right, F = !1;
  if (!T) {
    if (E && rE < O * y) {
      if (!Hv && (Iv === 1 ? x > A + O * b / 2 : x < z - O * b / 2) && (Hv = !0), Hv)
        F = !0;
      else if (Iv === 1 ? x < A + rE : x > z - rE)
        return -Iv;
    } else if (x > A + O * (1 - y) / 2 && x < z - O * (1 - y) / 2)
      return IM(a);
  }
  return F = F || T, F && (x < A + O * b / 2 || x > z - O * b / 2) ? x > A + O / 2 ? 1 : -1 : 0;
}
function IM(f) {
  return oo(ye) < oo(f) ? 1 : -1;
}
function HM(f) {
  for (var a = f.tagName + f.className + f.src + f.href + f.textContent, s = a.length, p = 0; s--; )
    p += a.charCodeAt(s);
  return p.toString(36);
}
function $M(f) {
  pE.length = 0;
  for (var a = f.getElementsByTagName("input"), s = a.length; s--; ) {
    var p = a[s];
    p.checked && pE.push(p);
  }
}
function iE(f) {
  return setTimeout(f, 0);
}
function OC(f) {
  return clearTimeout(f);
}
_E && rn(document, "touchmove", function(f) {
  (Ct.active || fp) && f.cancelable && f.preventDefault();
});
Ct.utils = {
  on: rn,
  off: Gt,
  css: st,
  find: ex,
  is: function(a, s) {
    return !!kl(a, s, a, !1);
  },
  extend: TM,
  throttle: nx,
  closest: kl,
  toggleClass: Na,
  clone: ix,
  index: oo,
  nextTick: iE,
  cancelNextTick: OC,
  detectDirection: ox,
  getChild: yp
};
Ct.get = function(f) {
  return f[La];
};
Ct.mount = function() {
  for (var f = arguments.length, a = new Array(f), s = 0; s < f; s++)
    a[s] = arguments[s];
  a[0].constructor === Array && (a = a[0]), a.forEach(function(p) {
    if (!p.prototype || !p.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(p));
    p.utils && (Ct.utils = Ul(Ul({}, Ct.utils), p.utils)), Wv.mount(p);
  });
};
Ct.create = function(f, a) {
  return new Ct(f, a);
};
Ct.version = SM;
var Er = [], zv, AC, NC = !1, lC, uC, hE, Uv;
function VM() {
  function f() {
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
  return f.prototype = {
    dragStarted: function(s) {
      var p = s.originalEvent;
      this.sortable.nativeDraggable ? rn(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? rn(document, "pointermove", this._handleFallbackAutoScroll) : p.touches ? rn(document, "touchmove", this._handleFallbackAutoScroll) : rn(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(s) {
      var p = s.originalEvent;
      !this.options.dragOverBubble && !p.rootEl && this._handleAutoScroll(p);
    },
    drop: function() {
      this.sortable.nativeDraggable ? Gt(document, "dragover", this._handleAutoScroll) : (Gt(document, "pointermove", this._handleFallbackAutoScroll), Gt(document, "touchmove", this._handleFallbackAutoScroll), Gt(document, "mousemove", this._handleFallbackAutoScroll)), l1(), aE(), wM();
    },
    nulling: function() {
      hE = AC = zv = NC = Uv = lC = uC = null, Er.length = 0;
    },
    _handleFallbackAutoScroll: function(s) {
      this._handleAutoScroll(s, !0);
    },
    _handleAutoScroll: function(s, p) {
      var y = this, b = (s.touches ? s.touches[0] : s).clientX, T = (s.touches ? s.touches[0] : s).clientY, E = document.elementFromPoint(b, T);
      if (hE = s, p || this.options.forceAutoScrollFallback || Yv || Lu || Pv) {
        sC(s, this.options, E, p);
        var x = Vs(E, !0);
        NC && (!Uv || b !== lC || T !== uC) && (Uv && l1(), Uv = setInterval(function() {
          var O = Vs(document.elementFromPoint(b, T), !0);
          O !== x && (x = O, aE()), sC(s, y.options, O, p);
        }, 10), lC = b, uC = T);
      } else {
        if (!this.options.bubbleScroll || Vs(E, !0) === Ll()) {
          aE();
          return;
        }
        sC(s, this.options, Vs(E, !1), !1);
      }
    }
  }, Nu(f, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function aE() {
  Er.forEach(function(f) {
    clearInterval(f.pid);
  }), Er = [];
}
function l1() {
  clearInterval(Uv);
}
var sC = nx(function(f, a, s, p) {
  if (a.scroll) {
    var y = (f.touches ? f.touches[0] : f).clientX, b = (f.touches ? f.touches[0] : f).clientY, T = a.scrollSensitivity, E = a.scrollSpeed, x = Ll(), O = !1, A;
    AC !== s && (AC = s, aE(), zv = a.scroll, A = a.scrollFn, zv === !0 && (zv = Vs(s, !0)));
    var z = 0, F = zv;
    do {
      var H = F, Y = _r(H), X = Y.top, fe = Y.bottom, xe = Y.left, ze = Y.right, ge = Y.width, ie = Y.height, Ce = void 0, ae = void 0, Ne = H.scrollWidth, De = H.scrollHeight, tt = st(H), vt = H.scrollLeft, ot = H.scrollTop;
      H === x ? (Ce = ge < Ne && (tt.overflowX === "auto" || tt.overflowX === "scroll" || tt.overflowX === "visible"), ae = ie < De && (tt.overflowY === "auto" || tt.overflowY === "scroll" || tt.overflowY === "visible")) : (Ce = ge < Ne && (tt.overflowX === "auto" || tt.overflowX === "scroll"), ae = ie < De && (tt.overflowY === "auto" || tt.overflowY === "scroll"));
      var at = Ce && (Math.abs(ze - y) <= T && vt + ge < Ne) - (Math.abs(xe - y) <= T && !!vt), ct = ae && (Math.abs(fe - b) <= T && ot + ie < De) - (Math.abs(X - b) <= T && !!ot);
      if (!Er[z])
        for (var Pe = 0; Pe <= z; Pe++)
          Er[Pe] || (Er[Pe] = {});
      (Er[z].vx != at || Er[z].vy != ct || Er[z].el !== H) && (Er[z].el = H, Er[z].vx = at, Er[z].vy = ct, clearInterval(Er[z].pid), (at != 0 || ct != 0) && (O = !0, Er[z].pid = setInterval((function() {
        p && this.layer === 0 && Ct.active._onTouchMove(hE);
        var Ze = Er[this.layer].vy ? Er[this.layer].vy * E : 0, qe = Er[this.layer].vx ? Er[this.layer].vx * E : 0;
        typeof A == "function" && A.call(Ct.dragged.parentNode[La], qe, Ze, f, hE, Er[this.layer].el) !== "continue" || rx(Er[this.layer].el, qe, Ze);
      }).bind({
        layer: z
      }), 24))), z++;
    } while (a.bubbleScroll && F !== x && (F = Vs(F, !1)));
    NC = O;
  }
}, 30), cx = function(a) {
  var s = a.originalEvent, p = a.putSortable, y = a.dragEl, b = a.activeSortable, T = a.dispatchSortableEvent, E = a.hideGhostForTarget, x = a.unhideGhostForTarget;
  if (s) {
    var O = p || b;
    E();
    var A = s.changedTouches && s.changedTouches.length ? s.changedTouches[0] : s, z = document.elementFromPoint(A.clientX, A.clientY);
    x(), O && !O.el.contains(z) && (T("spill"), this.onSpill({
      dragEl: y,
      putSortable: p
    }));
  }
};
function $C() {
}
$C.prototype = {
  startIndex: null,
  dragStart: function(a) {
    var s = a.oldDraggableIndex;
    this.startIndex = s;
  },
  onSpill: function(a) {
    var s = a.dragEl, p = a.putSortable;
    this.sortable.captureAnimationState(), p && p.captureAnimationState();
    var y = yp(this.sortable.el, this.startIndex, this.options);
    y ? this.sortable.el.insertBefore(s, y) : this.sortable.el.appendChild(s), this.sortable.animateAll(), p && p.animateAll();
  },
  drop: cx
};
Nu($C, {
  pluginName: "revertOnSpill"
});
function VC() {
}
VC.prototype = {
  onSpill: function(a) {
    var s = a.dragEl, p = a.putSortable, y = p || this.sortable;
    y.captureAnimationState(), s.parentNode && s.parentNode.removeChild(s), y.animateAll();
  },
  drop: cx
};
Nu(VC, {
  pluginName: "removeOnSpill"
});
Ct.mount(new VM());
Ct.mount(VC, $C);
const BC = Xe.createContext({
  UpCallback: () => {
  },
  DownCallback: () => {
  },
  isFirst: () => !1,
  isLast: () => !1
}), BM = ({ children: f, rowSortList: a, setRowSortList: s }) => {
  const p = Xe.useContext(ri.Context), [y, b] = Xe.useState(null), T = Xe.useRef(null), E = {
    UpCallback: Xe.useCallback((x) => {
      console.log("onRowSortAction");
      const O = a.indexOf(x + 1), A = a.slice(0, O), z = a.slice(O + 1), F = A.pop();
      A.push(a[O]), F && z.unshift(F), s(A.concat(z));
    }, [a]),
    DownCallback: Xe.useCallback((x) => {
      console.log("onRowSortAction");
      const O = a.indexOf(x + 1), A = a.slice(0, O), z = a.slice(O + 1), F = z.shift();
      z.unshift(a[O]), F && A.push(F), s(A.concat(z));
    }, [a]),
    isFirst: Xe.useCallback((x) => a.indexOf(x + 1) === 1, [a]),
    isLast: Xe.useCallback((x) => a.indexOf(x + 1) === a.length - 1, [a])
  };
  return Xe.useEffect(() => {
    if (T.current) {
      b(Ct.create(T.current, {
        animation: 150,
        disabled: !0
      }));
      let x = [0];
      for (let O = 0; O < p.rows; O++)
        x.push(O + 1);
      s(x);
    }
  }, [p.rows]), Xe.useEffect(() => {
    console.log("sortable?.sort(sortList)"), y == null || y.sort(a.map((x) => x.toString()), !0);
  }, [y, a]), /* @__PURE__ */ ue.jsx(BC.Provider, { value: E, children: /* @__PURE__ */ ue.jsx("ul", { className: "container", style: { zoom: 0.5 }, ref: T, children: f }) });
}, YM = ({ rowIndex: f }) => {
  const a = Xe.useContext(BC);
  return a.isFirst(f) ? /* @__PURE__ */ ue.jsx(ue.Fragment, {}) : /* @__PURE__ */ ue.jsx("div", { className: "btn btn-primary position-absolute top-0 left-0 my-2", onClick: () => a.UpCallback(f), children: /* @__PURE__ */ ue.jsx("i", { className: "bi bi-caret-up-fill" }) });
}, WM = ({ rowIndex: f }) => {
  const a = Xe.useContext(BC);
  return a.isLast(f) ? /* @__PURE__ */ ue.jsx(ue.Fragment, {}) : /* @__PURE__ */ ue.jsx("div", { className: "btn btn-primary position-absolute bottom-0 left-0 my-2", onClick: () => a.DownCallback(f), children: /* @__PURE__ */ ue.jsx("i", { className: "bi bi-caret-down-fill" }) });
}, fx = ({ rowIndex: f }) => {
  var p;
  const a = Xe.useContext(ri.Context), s = IC(a, [], 500);
  return (p = s.image) != null && p.complete ? /* @__PURE__ */ ue.jsxs("div", { className: "position-relative", children: [
    /* @__PURE__ */ ue.jsx(
      FC,
      {
        image: s.image,
        sx: 0,
        sy: s.header.height + f * s.cell.height,
        sw: s.header.width,
        sh: s.cell.height
      }
    ),
    /* @__PURE__ */ ue.jsx(YM, { rowIndex: f }),
    /* @__PURE__ */ ue.jsx(WM, { rowIndex: f })
  ] }) : /* @__PURE__ */ ue.jsx(ue.Fragment, {});
}, dx = ({ rowIndex: f, colIndex: a }) => {
  var y;
  const s = Xe.useContext(ri.Context), p = IC(s, [], 500);
  return (y = p.image) != null && y.complete ? /* @__PURE__ */ ue.jsx(
    FC,
    {
      image: p.image,
      sx: p.header.width + a * p.cell.width,
      sy: p.header.height + f * p.cell.height,
      sw: p.cell.width,
      sh: p.cell.height
    }
  ) : /* @__PURE__ */ ue.jsx(ue.Fragment, {});
}, px = Xe.createContext(() => {
}), GM = ({ rowIndex: f, colIndex: a }) => {
  const s = Xe.useContext(px);
  return /* @__PURE__ */ ue.jsx("div", { onClick: () => s(f, a), children: /* @__PURE__ */ ue.jsx(dx, { rowIndex: f, colIndex: a }) });
}, KM = ({ rowIndex: f }) => {
  var p;
  const a = Xe.useContext(ri.Context);
  let s = [/* @__PURE__ */ ue.jsx(sE, { isTitle: !0, children: /* @__PURE__ */ ue.jsx(fx, { rowIndex: f }) }, 0)];
  if ((p = a.image) != null && p.complete)
    for (let y = 0; y < a.cols; y++)
      s.push(/* @__PURE__ */ ue.jsx(sE, { children: /* @__PURE__ */ ue.jsx(GM, { rowIndex: f, colIndex: y }) }, y + 1));
  return /* @__PURE__ */ ue.jsx(X1, { rowIndex: f, children: s });
}, QM = (f) => {
  var p;
  const a = Xe.useContext(ri.Context);
  let s = [];
  if (s.push(/* @__PURE__ */ ue.jsx(gM, {}, 0)), (p = a.image) != null && p.complete)
    for (let y = 0; y < a.rows; y++)
      s.push(/* @__PURE__ */ ue.jsx(KM, { rowIndex: y }, y + 1));
  return /* @__PURE__ */ ue.jsx(BM, { ...f, children: s });
};
var Bi = "top", Ma = "bottom", za = "right", Yi = "left", SE = "auto", Rp = [Bi, Ma, za, Yi], Cf = "start", Ep = "end", hx = "clippingParents", YC = "viewport", dp = "popper", vx = "reference", kC = /* @__PURE__ */ Rp.reduce(function(f, a) {
  return f.concat([a + "-" + Cf, a + "-" + Ep]);
}, []), WC = /* @__PURE__ */ [].concat(Rp, [SE]).reduce(function(f, a) {
  return f.concat([a, a + "-" + Cf, a + "-" + Ep]);
}, []), mx = "beforeRead", gx = "read", yx = "afterRead", Ex = "beforeMain", _x = "main", Sx = "afterMain", Cx = "beforeWrite", bx = "write", Tx = "afterWrite", wx = [mx, gx, yx, Ex, _x, Sx, Cx, bx, Tx];
function Pl(f) {
  return f ? (f.nodeName || "").toLowerCase() : null;
}
function Ua(f) {
  if (f == null)
    return window;
  if (f.toString() !== "[object Window]") {
    var a = f.ownerDocument;
    return a && a.defaultView || window;
  }
  return f;
}
function bf(f) {
  var a = Ua(f).Element;
  return f instanceof a || f instanceof Element;
}
function lo(f) {
  var a = Ua(f).HTMLElement;
  return f instanceof a || f instanceof HTMLElement;
}
function GC(f) {
  if (typeof ShadowRoot > "u")
    return !1;
  var a = Ua(f).ShadowRoot;
  return f instanceof a || f instanceof ShadowRoot;
}
function XM(f) {
  var a = f.state;
  Object.keys(a.elements).forEach(function(s) {
    var p = a.styles[s] || {}, y = a.attributes[s] || {}, b = a.elements[s];
    !lo(b) || !Pl(b) || (Object.assign(b.style, p), Object.keys(y).forEach(function(T) {
      var E = y[T];
      E === !1 ? b.removeAttribute(T) : b.setAttribute(T, E === !0 ? "" : E);
    }));
  });
}
function qM(f) {
  var a = f.state, s = {
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
      var y = a.elements[p], b = a.attributes[p] || {}, T = Object.keys(a.styles.hasOwnProperty(p) ? a.styles[p] : s[p]), E = T.reduce(function(x, O) {
        return x[O] = "", x;
      }, {});
      !lo(y) || !Pl(y) || (Object.assign(y.style, E), Object.keys(b).forEach(function(x) {
        y.removeAttribute(x);
      }));
    });
  };
}
const KC = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: XM,
  effect: qM,
  requires: ["computeStyles"]
};
function Ml(f) {
  return f.split("-")[0];
}
var Sf = Math.max, vE = Math.min, _p = Math.round;
function LC() {
  var f = navigator.userAgentData;
  return f != null && f.brands && Array.isArray(f.brands) ? f.brands.map(function(a) {
    return a.brand + "/" + a.version;
  }).join(" ") : navigator.userAgent;
}
function Rx() {
  return !/^((?!chrome|android).)*safari/i.test(LC());
}
function Sp(f, a, s) {
  a === void 0 && (a = !1), s === void 0 && (s = !1);
  var p = f.getBoundingClientRect(), y = 1, b = 1;
  a && lo(f) && (y = f.offsetWidth > 0 && _p(p.width) / f.offsetWidth || 1, b = f.offsetHeight > 0 && _p(p.height) / f.offsetHeight || 1);
  var T = bf(f) ? Ua(f) : window, E = T.visualViewport, x = !Rx() && s, O = (p.left + (x && E ? E.offsetLeft : 0)) / y, A = (p.top + (x && E ? E.offsetTop : 0)) / b, z = p.width / y, F = p.height / b;
  return {
    width: z,
    height: F,
    top: A,
    right: O + z,
    bottom: A + F,
    left: O,
    x: O,
    y: A
  };
}
function QC(f) {
  var a = Sp(f), s = f.offsetWidth, p = f.offsetHeight;
  return Math.abs(a.width - s) <= 1 && (s = a.width), Math.abs(a.height - p) <= 1 && (p = a.height), {
    x: f.offsetLeft,
    y: f.offsetTop,
    width: s,
    height: p
  };
}
function xx(f, a) {
  var s = a.getRootNode && a.getRootNode();
  if (f.contains(a))
    return !0;
  if (s && GC(s)) {
    var p = a;
    do {
      if (p && f.isSameNode(p))
        return !0;
      p = p.parentNode || p.host;
    } while (p);
  }
  return !1;
}
function ku(f) {
  return Ua(f).getComputedStyle(f);
}
function ZM(f) {
  return ["table", "td", "th"].indexOf(Pl(f)) >= 0;
}
function Gs(f) {
  return ((bf(f) ? f.ownerDocument : (
    // $FlowFixMe[prop-missing]
    f.document
  )) || window.document).documentElement;
}
function CE(f) {
  return Pl(f) === "html" ? f : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    f.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    f.parentNode || // DOM Element detected
    (GC(f) ? f.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Gs(f)
  );
}
function u1(f) {
  return !lo(f) || // https://github.com/popperjs/popper-core/issues/837
  ku(f).position === "fixed" ? null : f.offsetParent;
}
function JM(f) {
  var a = /firefox/i.test(LC()), s = /Trident/i.test(LC());
  if (s && lo(f)) {
    var p = ku(f);
    if (p.position === "fixed")
      return null;
  }
  var y = CE(f);
  for (GC(y) && (y = y.host); lo(y) && ["html", "body"].indexOf(Pl(y)) < 0; ) {
    var b = ku(y);
    if (b.transform !== "none" || b.perspective !== "none" || b.contain === "paint" || ["transform", "perspective"].indexOf(b.willChange) !== -1 || a && b.willChange === "filter" || a && b.filter && b.filter !== "none")
      return y;
    y = y.parentNode;
  }
  return null;
}
function Gv(f) {
  for (var a = Ua(f), s = u1(f); s && ZM(s) && ku(s).position === "static"; )
    s = u1(s);
  return s && (Pl(s) === "html" || Pl(s) === "body" && ku(s).position === "static") ? a : s || JM(f) || a;
}
function XC(f) {
  return ["top", "bottom"].indexOf(f) >= 0 ? "x" : "y";
}
function $v(f, a, s) {
  return Sf(f, vE(a, s));
}
function ez(f, a, s) {
  var p = $v(f, a, s);
  return p > s ? s : p;
}
function Dx() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Ox(f) {
  return Object.assign({}, Dx(), f);
}
function Ax(f, a) {
  return a.reduce(function(s, p) {
    return s[p] = f, s;
  }, {});
}
var tz = function(a, s) {
  return a = typeof a == "function" ? a(Object.assign({}, s.rects, {
    placement: s.placement
  })) : a, Ox(typeof a != "number" ? a : Ax(a, Rp));
};
function nz(f) {
  var a, s = f.state, p = f.name, y = f.options, b = s.elements.arrow, T = s.modifiersData.popperOffsets, E = Ml(s.placement), x = XC(E), O = [Yi, za].indexOf(E) >= 0, A = O ? "height" : "width";
  if (!(!b || !T)) {
    var z = tz(y.padding, s), F = QC(b), H = x === "y" ? Bi : Yi, Y = x === "y" ? Ma : za, X = s.rects.reference[A] + s.rects.reference[x] - T[x] - s.rects.popper[A], fe = T[x] - s.rects.reference[x], xe = Gv(b), ze = xe ? x === "y" ? xe.clientHeight || 0 : xe.clientWidth || 0 : 0, ge = X / 2 - fe / 2, ie = z[H], Ce = ze - F[A] - z[Y], ae = ze / 2 - F[A] / 2 + ge, Ne = $v(ie, ae, Ce), De = x;
    s.modifiersData[p] = (a = {}, a[De] = Ne, a.centerOffset = Ne - ae, a);
  }
}
function rz(f) {
  var a = f.state, s = f.options, p = s.element, y = p === void 0 ? "[data-popper-arrow]" : p;
  y != null && (typeof y == "string" && (y = a.elements.popper.querySelector(y), !y) || xx(a.elements.popper, y) && (a.elements.arrow = y));
}
const Nx = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: nz,
  effect: rz,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Cp(f) {
  return f.split("-")[1];
}
var iz = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function az(f, a) {
  var s = f.x, p = f.y, y = a.devicePixelRatio || 1;
  return {
    x: _p(s * y) / y || 0,
    y: _p(p * y) / y || 0
  };
}
function s1(f) {
  var a, s = f.popper, p = f.popperRect, y = f.placement, b = f.variation, T = f.offsets, E = f.position, x = f.gpuAcceleration, O = f.adaptive, A = f.roundOffsets, z = f.isFixed, F = T.x, H = F === void 0 ? 0 : F, Y = T.y, X = Y === void 0 ? 0 : Y, fe = typeof A == "function" ? A({
    x: H,
    y: X
  }) : {
    x: H,
    y: X
  };
  H = fe.x, X = fe.y;
  var xe = T.hasOwnProperty("x"), ze = T.hasOwnProperty("y"), ge = Yi, ie = Bi, Ce = window;
  if (O) {
    var ae = Gv(s), Ne = "clientHeight", De = "clientWidth";
    if (ae === Ua(s) && (ae = Gs(s), ku(ae).position !== "static" && E === "absolute" && (Ne = "scrollHeight", De = "scrollWidth")), ae = ae, y === Bi || (y === Yi || y === za) && b === Ep) {
      ie = Ma;
      var tt = z && ae === Ce && Ce.visualViewport ? Ce.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        ae[Ne]
      );
      X -= tt - p.height, X *= x ? 1 : -1;
    }
    if (y === Yi || (y === Bi || y === Ma) && b === Ep) {
      ge = za;
      var vt = z && ae === Ce && Ce.visualViewport ? Ce.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        ae[De]
      );
      H -= vt - p.width, H *= x ? 1 : -1;
    }
  }
  var ot = Object.assign({
    position: E
  }, O && iz), at = A === !0 ? az({
    x: H,
    y: X
  }, Ua(s)) : {
    x: H,
    y: X
  };
  if (H = at.x, X = at.y, x) {
    var ct;
    return Object.assign({}, ot, (ct = {}, ct[ie] = ze ? "0" : "", ct[ge] = xe ? "0" : "", ct.transform = (Ce.devicePixelRatio || 1) <= 1 ? "translate(" + H + "px, " + X + "px)" : "translate3d(" + H + "px, " + X + "px, 0)", ct));
  }
  return Object.assign({}, ot, (a = {}, a[ie] = ze ? X + "px" : "", a[ge] = xe ? H + "px" : "", a.transform = "", a));
}
function oz(f) {
  var a = f.state, s = f.options, p = s.gpuAcceleration, y = p === void 0 ? !0 : p, b = s.adaptive, T = b === void 0 ? !0 : b, E = s.roundOffsets, x = E === void 0 ? !0 : E, O = {
    placement: Ml(a.placement),
    variation: Cp(a.placement),
    popper: a.elements.popper,
    popperRect: a.rects.popper,
    gpuAcceleration: y,
    isFixed: a.options.strategy === "fixed"
  };
  a.modifiersData.popperOffsets != null && (a.styles.popper = Object.assign({}, a.styles.popper, s1(Object.assign({}, O, {
    offsets: a.modifiersData.popperOffsets,
    position: a.options.strategy,
    adaptive: T,
    roundOffsets: x
  })))), a.modifiersData.arrow != null && (a.styles.arrow = Object.assign({}, a.styles.arrow, s1(Object.assign({}, O, {
    offsets: a.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: x
  })))), a.attributes.popper = Object.assign({}, a.attributes.popper, {
    "data-popper-placement": a.placement
  });
}
const qC = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: oz,
  data: {}
};
var Ky = {
  passive: !0
};
function lz(f) {
  var a = f.state, s = f.instance, p = f.options, y = p.scroll, b = y === void 0 ? !0 : y, T = p.resize, E = T === void 0 ? !0 : T, x = Ua(a.elements.popper), O = [].concat(a.scrollParents.reference, a.scrollParents.popper);
  return b && O.forEach(function(A) {
    A.addEventListener("scroll", s.update, Ky);
  }), E && x.addEventListener("resize", s.update, Ky), function() {
    b && O.forEach(function(A) {
      A.removeEventListener("scroll", s.update, Ky);
    }), E && x.removeEventListener("resize", s.update, Ky);
  };
}
const ZC = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: lz,
  data: {}
};
var uz = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function oE(f) {
  return f.replace(/left|right|bottom|top/g, function(a) {
    return uz[a];
  });
}
var sz = {
  start: "end",
  end: "start"
};
function c1(f) {
  return f.replace(/start|end/g, function(a) {
    return sz[a];
  });
}
function JC(f) {
  var a = Ua(f), s = a.pageXOffset, p = a.pageYOffset;
  return {
    scrollLeft: s,
    scrollTop: p
  };
}
function eb(f) {
  return Sp(Gs(f)).left + JC(f).scrollLeft;
}
function cz(f, a) {
  var s = Ua(f), p = Gs(f), y = s.visualViewport, b = p.clientWidth, T = p.clientHeight, E = 0, x = 0;
  if (y) {
    b = y.width, T = y.height;
    var O = Rx();
    (O || !O && a === "fixed") && (E = y.offsetLeft, x = y.offsetTop);
  }
  return {
    width: b,
    height: T,
    x: E + eb(f),
    y: x
  };
}
function fz(f) {
  var a, s = Gs(f), p = JC(f), y = (a = f.ownerDocument) == null ? void 0 : a.body, b = Sf(s.scrollWidth, s.clientWidth, y ? y.scrollWidth : 0, y ? y.clientWidth : 0), T = Sf(s.scrollHeight, s.clientHeight, y ? y.scrollHeight : 0, y ? y.clientHeight : 0), E = -p.scrollLeft + eb(f), x = -p.scrollTop;
  return ku(y || s).direction === "rtl" && (E += Sf(s.clientWidth, y ? y.clientWidth : 0) - b), {
    width: b,
    height: T,
    x: E,
    y: x
  };
}
function tb(f) {
  var a = ku(f), s = a.overflow, p = a.overflowX, y = a.overflowY;
  return /auto|scroll|overlay|hidden/.test(s + y + p);
}
function kx(f) {
  return ["html", "body", "#document"].indexOf(Pl(f)) >= 0 ? f.ownerDocument.body : lo(f) && tb(f) ? f : kx(CE(f));
}
function Vv(f, a) {
  var s;
  a === void 0 && (a = []);
  var p = kx(f), y = p === ((s = f.ownerDocument) == null ? void 0 : s.body), b = Ua(p), T = y ? [b].concat(b.visualViewport || [], tb(p) ? p : []) : p, E = a.concat(T);
  return y ? E : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    E.concat(Vv(CE(T)))
  );
}
function MC(f) {
  return Object.assign({}, f, {
    left: f.x,
    top: f.y,
    right: f.x + f.width,
    bottom: f.y + f.height
  });
}
function dz(f, a) {
  var s = Sp(f, !1, a === "fixed");
  return s.top = s.top + f.clientTop, s.left = s.left + f.clientLeft, s.bottom = s.top + f.clientHeight, s.right = s.left + f.clientWidth, s.width = f.clientWidth, s.height = f.clientHeight, s.x = s.left, s.y = s.top, s;
}
function f1(f, a, s) {
  return a === YC ? MC(cz(f, s)) : bf(a) ? dz(a, s) : MC(fz(Gs(f)));
}
function pz(f) {
  var a = Vv(CE(f)), s = ["absolute", "fixed"].indexOf(ku(f).position) >= 0, p = s && lo(f) ? Gv(f) : f;
  return bf(p) ? a.filter(function(y) {
    return bf(y) && xx(y, p) && Pl(y) !== "body";
  }) : [];
}
function hz(f, a, s, p) {
  var y = a === "clippingParents" ? pz(f) : [].concat(a), b = [].concat(y, [s]), T = b[0], E = b.reduce(function(x, O) {
    var A = f1(f, O, p);
    return x.top = Sf(A.top, x.top), x.right = vE(A.right, x.right), x.bottom = vE(A.bottom, x.bottom), x.left = Sf(A.left, x.left), x;
  }, f1(f, T, p));
  return E.width = E.right - E.left, E.height = E.bottom - E.top, E.x = E.left, E.y = E.top, E;
}
function Lx(f) {
  var a = f.reference, s = f.element, p = f.placement, y = p ? Ml(p) : null, b = p ? Cp(p) : null, T = a.x + a.width / 2 - s.width / 2, E = a.y + a.height / 2 - s.height / 2, x;
  switch (y) {
    case Bi:
      x = {
        x: T,
        y: a.y - s.height
      };
      break;
    case Ma:
      x = {
        x: T,
        y: a.y + a.height
      };
      break;
    case za:
      x = {
        x: a.x + a.width,
        y: E
      };
      break;
    case Yi:
      x = {
        x: a.x - s.width,
        y: E
      };
      break;
    default:
      x = {
        x: a.x,
        y: a.y
      };
  }
  var O = y ? XC(y) : null;
  if (O != null) {
    var A = O === "y" ? "height" : "width";
    switch (b) {
      case Cf:
        x[O] = x[O] - (a[A] / 2 - s[A] / 2);
        break;
      case Ep:
        x[O] = x[O] + (a[A] / 2 - s[A] / 2);
        break;
    }
  }
  return x;
}
function bp(f, a) {
  a === void 0 && (a = {});
  var s = a, p = s.placement, y = p === void 0 ? f.placement : p, b = s.strategy, T = b === void 0 ? f.strategy : b, E = s.boundary, x = E === void 0 ? hx : E, O = s.rootBoundary, A = O === void 0 ? YC : O, z = s.elementContext, F = z === void 0 ? dp : z, H = s.altBoundary, Y = H === void 0 ? !1 : H, X = s.padding, fe = X === void 0 ? 0 : X, xe = Ox(typeof fe != "number" ? fe : Ax(fe, Rp)), ze = F === dp ? vx : dp, ge = f.rects.popper, ie = f.elements[Y ? ze : F], Ce = hz(bf(ie) ? ie : ie.contextElement || Gs(f.elements.popper), x, A, T), ae = Sp(f.elements.reference), Ne = Lx({
    reference: ae,
    element: ge,
    strategy: "absolute",
    placement: y
  }), De = MC(Object.assign({}, ge, Ne)), tt = F === dp ? De : ae, vt = {
    top: Ce.top - tt.top + xe.top,
    bottom: tt.bottom - Ce.bottom + xe.bottom,
    left: Ce.left - tt.left + xe.left,
    right: tt.right - Ce.right + xe.right
  }, ot = f.modifiersData.offset;
  if (F === dp && ot) {
    var at = ot[y];
    Object.keys(vt).forEach(function(ct) {
      var Pe = [za, Ma].indexOf(ct) >= 0 ? 1 : -1, Ze = [Bi, Ma].indexOf(ct) >= 0 ? "y" : "x";
      vt[ct] += at[Ze] * Pe;
    });
  }
  return vt;
}
function vz(f, a) {
  a === void 0 && (a = {});
  var s = a, p = s.placement, y = s.boundary, b = s.rootBoundary, T = s.padding, E = s.flipVariations, x = s.allowedAutoPlacements, O = x === void 0 ? WC : x, A = Cp(p), z = A ? E ? kC : kC.filter(function(Y) {
    return Cp(Y) === A;
  }) : Rp, F = z.filter(function(Y) {
    return O.indexOf(Y) >= 0;
  });
  F.length === 0 && (F = z);
  var H = F.reduce(function(Y, X) {
    return Y[X] = bp(f, {
      placement: X,
      boundary: y,
      rootBoundary: b,
      padding: T
    })[Ml(X)], Y;
  }, {});
  return Object.keys(H).sort(function(Y, X) {
    return H[Y] - H[X];
  });
}
function mz(f) {
  if (Ml(f) === SE)
    return [];
  var a = oE(f);
  return [c1(f), a, c1(a)];
}
function gz(f) {
  var a = f.state, s = f.options, p = f.name;
  if (!a.modifiersData[p]._skip) {
    for (var y = s.mainAxis, b = y === void 0 ? !0 : y, T = s.altAxis, E = T === void 0 ? !0 : T, x = s.fallbackPlacements, O = s.padding, A = s.boundary, z = s.rootBoundary, F = s.altBoundary, H = s.flipVariations, Y = H === void 0 ? !0 : H, X = s.allowedAutoPlacements, fe = a.options.placement, xe = Ml(fe), ze = xe === fe, ge = x || (ze || !Y ? [oE(fe)] : mz(fe)), ie = [fe].concat(ge).reduce(function(Ke, gt) {
      return Ke.concat(Ml(gt) === SE ? vz(a, {
        placement: gt,
        boundary: A,
        rootBoundary: z,
        padding: O,
        flipVariations: Y,
        allowedAutoPlacements: X
      }) : gt);
    }, []), Ce = a.rects.reference, ae = a.rects.popper, Ne = /* @__PURE__ */ new Map(), De = !0, tt = ie[0], vt = 0; vt < ie.length; vt++) {
      var ot = ie[vt], at = Ml(ot), ct = Cp(ot) === Cf, Pe = [Bi, Ma].indexOf(at) >= 0, Ze = Pe ? "width" : "height", qe = bp(a, {
        placement: ot,
        boundary: A,
        rootBoundary: z,
        altBoundary: F,
        padding: O
      }), Ye = Pe ? ct ? za : Yi : ct ? Ma : Bi;
      Ce[Ze] > ae[Ze] && (Ye = oE(Ye));
      var ee = oE(Ye), be = [];
      if (b && be.push(qe[at] <= 0), E && be.push(qe[Ye] <= 0, qe[ee] <= 0), be.every(function(Ke) {
        return Ke;
      })) {
        tt = ot, De = !1;
        break;
      }
      Ne.set(ot, be);
    }
    if (De)
      for (var L = Y ? 3 : 1, ne = function(gt) {
        var Et = ie.find(function(wt) {
          var mt = Ne.get(wt);
          if (mt)
            return mt.slice(0, gt).every(function(Zt) {
              return Zt;
            });
        });
        if (Et)
          return tt = Et, "break";
      }, we = L; we > 0; we--) {
        var Je = ne(we);
        if (Je === "break")
          break;
      }
    a.placement !== tt && (a.modifiersData[p]._skip = !0, a.placement = tt, a.reset = !0);
  }
}
const Mx = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: gz,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function d1(f, a, s) {
  return s === void 0 && (s = {
    x: 0,
    y: 0
  }), {
    top: f.top - a.height - s.y,
    right: f.right - a.width + s.x,
    bottom: f.bottom - a.height + s.y,
    left: f.left - a.width - s.x
  };
}
function p1(f) {
  return [Bi, za, Ma, Yi].some(function(a) {
    return f[a] >= 0;
  });
}
function yz(f) {
  var a = f.state, s = f.name, p = a.rects.reference, y = a.rects.popper, b = a.modifiersData.preventOverflow, T = bp(a, {
    elementContext: "reference"
  }), E = bp(a, {
    altBoundary: !0
  }), x = d1(T, p), O = d1(E, y, b), A = p1(x), z = p1(O);
  a.modifiersData[s] = {
    referenceClippingOffsets: x,
    popperEscapeOffsets: O,
    isReferenceHidden: A,
    hasPopperEscaped: z
  }, a.attributes.popper = Object.assign({}, a.attributes.popper, {
    "data-popper-reference-hidden": A,
    "data-popper-escaped": z
  });
}
const zx = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: yz
};
function Ez(f, a, s) {
  var p = Ml(f), y = [Yi, Bi].indexOf(p) >= 0 ? -1 : 1, b = typeof s == "function" ? s(Object.assign({}, a, {
    placement: f
  })) : s, T = b[0], E = b[1];
  return T = T || 0, E = (E || 0) * y, [Yi, za].indexOf(p) >= 0 ? {
    x: E,
    y: T
  } : {
    x: T,
    y: E
  };
}
function _z(f) {
  var a = f.state, s = f.options, p = f.name, y = s.offset, b = y === void 0 ? [0, 0] : y, T = WC.reduce(function(A, z) {
    return A[z] = Ez(z, a.rects, b), A;
  }, {}), E = T[a.placement], x = E.x, O = E.y;
  a.modifiersData.popperOffsets != null && (a.modifiersData.popperOffsets.x += x, a.modifiersData.popperOffsets.y += O), a.modifiersData[p] = T;
}
const Ux = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: _z
};
function Sz(f) {
  var a = f.state, s = f.name;
  a.modifiersData[s] = Lx({
    reference: a.rects.reference,
    element: a.rects.popper,
    strategy: "absolute",
    placement: a.placement
  });
}
const nb = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Sz,
  data: {}
};
function Cz(f) {
  return f === "x" ? "y" : "x";
}
function bz(f) {
  var a = f.state, s = f.options, p = f.name, y = s.mainAxis, b = y === void 0 ? !0 : y, T = s.altAxis, E = T === void 0 ? !1 : T, x = s.boundary, O = s.rootBoundary, A = s.altBoundary, z = s.padding, F = s.tether, H = F === void 0 ? !0 : F, Y = s.tetherOffset, X = Y === void 0 ? 0 : Y, fe = bp(a, {
    boundary: x,
    rootBoundary: O,
    padding: z,
    altBoundary: A
  }), xe = Ml(a.placement), ze = Cp(a.placement), ge = !ze, ie = XC(xe), Ce = Cz(ie), ae = a.modifiersData.popperOffsets, Ne = a.rects.reference, De = a.rects.popper, tt = typeof X == "function" ? X(Object.assign({}, a.rects, {
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
  if (ae) {
    if (b) {
      var ct, Pe = ie === "y" ? Bi : Yi, Ze = ie === "y" ? Ma : za, qe = ie === "y" ? "height" : "width", Ye = ae[ie], ee = Ye + fe[Pe], be = Ye - fe[Ze], L = H ? -De[qe] / 2 : 0, ne = ze === Cf ? Ne[qe] : De[qe], we = ze === Cf ? -De[qe] : -Ne[qe], Je = a.elements.arrow, Ke = H && Je ? QC(Je) : {
        width: 0,
        height: 0
      }, gt = a.modifiersData["arrow#persistent"] ? a.modifiersData["arrow#persistent"].padding : Dx(), Et = gt[Pe], wt = gt[Ze], mt = $v(0, Ne[qe], Ke[qe]), Zt = ge ? Ne[qe] / 2 - L - mt - Et - vt.mainAxis : ne - mt - Et - vt.mainAxis, ir = ge ? -Ne[qe] / 2 + L + mt + wt + vt.mainAxis : we + mt + wt + vt.mainAxis, Hn = a.elements.arrow && Gv(a.elements.arrow), Mr = Hn ? ie === "y" ? Hn.clientTop || 0 : Hn.clientLeft || 0 : 0, ar = (ct = ot == null ? void 0 : ot[ie]) != null ? ct : 0, Sn = Ye + Zt - ar - Mr, or = Ye + ir - ar, kn = $v(H ? vE(ee, Sn) : ee, Ye, H ? Sf(be, or) : be);
      ae[ie] = kn, at[ie] = kn - Ye;
    }
    if (E) {
      var wn, Ln = ie === "x" ? Bi : Yi, Sr = ie === "x" ? Ma : za, Cn = ae[Ce], bn = Ce === "y" ? "height" : "width", zr = Cn + fe[Ln], Ur = Cn - fe[Sr], qn = [Bi, Yi].indexOf(xe) !== -1, Pr = (wn = ot == null ? void 0 : ot[Ce]) != null ? wn : 0, Zn = qn ? zr : Cn - Ne[bn] - De[bn] - Pr + vt.altAxis, dr = qn ? Cn + Ne[bn] + De[bn] - Pr - vt.altAxis : Ur, ln = H && qn ? ez(Zn, Cn, dr) : $v(H ? Zn : zr, Cn, H ? dr : Ur);
      ae[Ce] = ln, at[Ce] = ln - Cn;
    }
    a.modifiersData[p] = at;
  }
}
const Px = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: bz,
  requiresIfExists: ["offset"]
};
function Tz(f) {
  return {
    scrollLeft: f.scrollLeft,
    scrollTop: f.scrollTop
  };
}
function wz(f) {
  return f === Ua(f) || !lo(f) ? JC(f) : Tz(f);
}
function Rz(f) {
  var a = f.getBoundingClientRect(), s = _p(a.width) / f.offsetWidth || 1, p = _p(a.height) / f.offsetHeight || 1;
  return s !== 1 || p !== 1;
}
function xz(f, a, s) {
  s === void 0 && (s = !1);
  var p = lo(a), y = lo(a) && Rz(a), b = Gs(a), T = Sp(f, y, s), E = {
    scrollLeft: 0,
    scrollTop: 0
  }, x = {
    x: 0,
    y: 0
  };
  return (p || !p && !s) && ((Pl(a) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  tb(b)) && (E = wz(a)), lo(a) ? (x = Sp(a, !0), x.x += a.clientLeft, x.y += a.clientTop) : b && (x.x = eb(b))), {
    x: T.left + E.scrollLeft - x.x,
    y: T.top + E.scrollTop - x.y,
    width: T.width,
    height: T.height
  };
}
function Dz(f) {
  var a = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Set(), p = [];
  f.forEach(function(b) {
    a.set(b.name, b);
  });
  function y(b) {
    s.add(b.name);
    var T = [].concat(b.requires || [], b.requiresIfExists || []);
    T.forEach(function(E) {
      if (!s.has(E)) {
        var x = a.get(E);
        x && y(x);
      }
    }), p.push(b);
  }
  return f.forEach(function(b) {
    s.has(b.name) || y(b);
  }), p;
}
function Oz(f) {
  var a = Dz(f);
  return wx.reduce(function(s, p) {
    return s.concat(a.filter(function(y) {
      return y.phase === p;
    }));
  }, []);
}
function Az(f) {
  var a;
  return function() {
    return a || (a = new Promise(function(s) {
      Promise.resolve().then(function() {
        a = void 0, s(f());
      });
    })), a;
  };
}
function Nz(f) {
  var a = f.reduce(function(s, p) {
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
var h1 = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function v1() {
  for (var f = arguments.length, a = new Array(f), s = 0; s < f; s++)
    a[s] = arguments[s];
  return !a.some(function(p) {
    return !(p && typeof p.getBoundingClientRect == "function");
  });
}
function bE(f) {
  f === void 0 && (f = {});
  var a = f, s = a.defaultModifiers, p = s === void 0 ? [] : s, y = a.defaultOptions, b = y === void 0 ? h1 : y;
  return function(E, x, O) {
    O === void 0 && (O = b);
    var A = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, h1, b),
      modifiersData: {},
      elements: {
        reference: E,
        popper: x
      },
      attributes: {},
      styles: {}
    }, z = [], F = !1, H = {
      state: A,
      setOptions: function(xe) {
        var ze = typeof xe == "function" ? xe(A.options) : xe;
        X(), A.options = Object.assign({}, b, A.options, ze), A.scrollParents = {
          reference: bf(E) ? Vv(E) : E.contextElement ? Vv(E.contextElement) : [],
          popper: Vv(x)
        };
        var ge = Oz(Nz([].concat(p, A.options.modifiers)));
        return A.orderedModifiers = ge.filter(function(ie) {
          return ie.enabled;
        }), Y(), H.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!F) {
          var xe = A.elements, ze = xe.reference, ge = xe.popper;
          if (v1(ze, ge)) {
            A.rects = {
              reference: xz(ze, Gv(ge), A.options.strategy === "fixed"),
              popper: QC(ge)
            }, A.reset = !1, A.placement = A.options.placement, A.orderedModifiers.forEach(function(vt) {
              return A.modifiersData[vt.name] = Object.assign({}, vt.data);
            });
            for (var ie = 0; ie < A.orderedModifiers.length; ie++) {
              if (A.reset === !0) {
                A.reset = !1, ie = -1;
                continue;
              }
              var Ce = A.orderedModifiers[ie], ae = Ce.fn, Ne = Ce.options, De = Ne === void 0 ? {} : Ne, tt = Ce.name;
              typeof ae == "function" && (A = ae({
                state: A,
                options: De,
                name: tt,
                instance: H
              }) || A);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Az(function() {
        return new Promise(function(fe) {
          H.forceUpdate(), fe(A);
        });
      }),
      destroy: function() {
        X(), F = !0;
      }
    };
    if (!v1(E, x))
      return H;
    H.setOptions(O).then(function(fe) {
      !F && O.onFirstUpdate && O.onFirstUpdate(fe);
    });
    function Y() {
      A.orderedModifiers.forEach(function(fe) {
        var xe = fe.name, ze = fe.options, ge = ze === void 0 ? {} : ze, ie = fe.effect;
        if (typeof ie == "function") {
          var Ce = ie({
            state: A,
            name: xe,
            instance: H,
            options: ge
          }), ae = function() {
          };
          z.push(Ce || ae);
        }
      });
    }
    function X() {
      z.forEach(function(fe) {
        return fe();
      }), z = [];
    }
    return H;
  };
}
var kz = /* @__PURE__ */ bE(), Lz = [ZC, nb, qC, KC], Mz = /* @__PURE__ */ bE({
  defaultModifiers: Lz
}), zz = [ZC, nb, qC, KC, Ux, Mx, Px, Nx, zx], rb = /* @__PURE__ */ bE({
  defaultModifiers: zz
});
const jx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  afterMain: Sx,
  afterRead: yx,
  afterWrite: Tx,
  applyStyles: KC,
  arrow: Nx,
  auto: SE,
  basePlacements: Rp,
  beforeMain: Ex,
  beforeRead: mx,
  beforeWrite: Cx,
  bottom: Ma,
  clippingParents: hx,
  computeStyles: qC,
  createPopper: rb,
  createPopperBase: kz,
  createPopperLite: Mz,
  detectOverflow: bp,
  end: Ep,
  eventListeners: ZC,
  flip: Mx,
  hide: zx,
  left: Yi,
  main: _x,
  modifierPhases: wx,
  offset: Ux,
  placements: WC,
  popper: dp,
  popperGenerator: bE,
  popperOffsets: nb,
  preventOverflow: Px,
  read: gx,
  reference: vx,
  right: za,
  start: Cf,
  top: Bi,
  variationPlacements: kC,
  viewport: YC,
  write: bx
}, Symbol.toStringTag, { value: "Module" }));
/*!
  * Bootstrap v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
const Is = /* @__PURE__ */ new Map(), cC = {
  set(f, a, s) {
    Is.has(f) || Is.set(f, /* @__PURE__ */ new Map());
    const p = Is.get(f);
    if (!p.has(a) && p.size !== 0) {
      console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(p.keys())[0]}.`);
      return;
    }
    p.set(a, s);
  },
  get(f, a) {
    return Is.has(f) && Is.get(f).get(a) || null;
  },
  remove(f, a) {
    if (!Is.has(f))
      return;
    const s = Is.get(f);
    s.delete(a), s.size === 0 && Is.delete(f);
  }
}, Uz = 1e6, Pz = 1e3, zC = "transitionend", Fx = (f) => (f && window.CSS && window.CSS.escape && (f = f.replace(/#([^\s"#']+)/g, (a, s) => `#${CSS.escape(s)}`)), f), jz = (f) => f == null ? `${f}` : Object.prototype.toString.call(f).match(/\s([a-z]+)/i)[1].toLowerCase(), Fz = (f) => {
  do
    f += Math.floor(Math.random() * Uz);
  while (document.getElementById(f));
  return f;
}, Iz = (f) => {
  if (!f)
    return 0;
  let {
    transitionDuration: a,
    transitionDelay: s
  } = window.getComputedStyle(f);
  const p = Number.parseFloat(a), y = Number.parseFloat(s);
  return !p && !y ? 0 : (a = a.split(",")[0], s = s.split(",")[0], (Number.parseFloat(a) + Number.parseFloat(s)) * Pz);
}, Ix = (f) => {
  f.dispatchEvent(new Event(zC));
}, Ou = (f) => !f || typeof f != "object" ? !1 : (typeof f.jquery < "u" && (f = f[0]), typeof f.nodeType < "u"), Bs = (f) => Ou(f) ? f.jquery ? f[0] : f : typeof f == "string" && f.length > 0 ? document.querySelector(Fx(f)) : null, xp = (f) => {
  if (!Ou(f) || f.getClientRects().length === 0)
    return !1;
  const a = getComputedStyle(f).getPropertyValue("visibility") === "visible", s = f.closest("details:not([open])");
  if (!s)
    return a;
  if (s !== f) {
    const p = f.closest("summary");
    if (p && p.parentNode !== s || p === null)
      return !1;
  }
  return a;
}, Ys = (f) => !f || f.nodeType !== Node.ELEMENT_NODE || f.classList.contains("disabled") ? !0 : typeof f.disabled < "u" ? f.disabled : f.hasAttribute("disabled") && f.getAttribute("disabled") !== "false", Hx = (f) => {
  if (!document.documentElement.attachShadow)
    return null;
  if (typeof f.getRootNode == "function") {
    const a = f.getRootNode();
    return a instanceof ShadowRoot ? a : null;
  }
  return f instanceof ShadowRoot ? f : f.parentNode ? Hx(f.parentNode) : null;
}, mE = () => {
}, Kv = (f) => {
  f.offsetHeight;
}, $x = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, fC = [], Hz = (f) => {
  document.readyState === "loading" ? (fC.length || document.addEventListener("DOMContentLoaded", () => {
    for (const a of fC)
      a();
  }), fC.push(f)) : f();
}, uo = () => document.documentElement.dir === "rtl", co = (f) => {
  Hz(() => {
    const a = $x();
    if (a) {
      const s = f.NAME, p = a.fn[s];
      a.fn[s] = f.jQueryInterface, a.fn[s].Constructor = f, a.fn[s].noConflict = () => (a.fn[s] = p, f.jQueryInterface);
    }
  });
}, ga = (f, a = [], s = f) => typeof f == "function" ? f(...a) : s, Vx = (f, a, s = !0) => {
  if (!s) {
    ga(f);
    return;
  }
  const p = 5, y = Iz(a) + p;
  let b = !1;
  const T = ({
    target: E
  }) => {
    E === a && (b = !0, a.removeEventListener(zC, T), ga(f));
  };
  a.addEventListener(zC, T), setTimeout(() => {
    b || Ix(a);
  }, y);
}, ib = (f, a, s, p) => {
  const y = f.length;
  let b = f.indexOf(a);
  return b === -1 ? !s && p ? f[y - 1] : f[0] : (b += s ? 1 : -1, p && (b = (b + y) % y), f[Math.max(0, Math.min(b, y - 1))]);
}, $z = /[^.]*(?=\..*)\.|.*/, Vz = /\..*/, Bz = /::\d+$/, dC = {};
let m1 = 1;
const Bx = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
}, Yz = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
function Yx(f, a) {
  return a && `${a}::${m1++}` || f.uidEvent || m1++;
}
function Wx(f) {
  const a = Yx(f);
  return f.uidEvent = a, dC[a] = dC[a] || {}, dC[a];
}
function Wz(f, a) {
  return function s(p) {
    return ab(p, {
      delegateTarget: f
    }), s.oneOff && ce.off(f, p.type, a), a.apply(f, [p]);
  };
}
function Gz(f, a, s) {
  return function p(y) {
    const b = f.querySelectorAll(a);
    for (let {
      target: T
    } = y; T && T !== this; T = T.parentNode)
      for (const E of b)
        if (E === T)
          return ab(y, {
            delegateTarget: T
          }), p.oneOff && ce.off(f, y.type, a, s), s.apply(T, [y]);
  };
}
function Gx(f, a, s = null) {
  return Object.values(f).find((p) => p.callable === a && p.delegationSelector === s);
}
function Kx(f, a, s) {
  const p = typeof a == "string", y = p ? s : a || s;
  let b = Qx(f);
  return Yz.has(b) || (b = f), [p, y, b];
}
function g1(f, a, s, p, y) {
  if (typeof a != "string" || !f)
    return;
  let [b, T, E] = Kx(a, s, p);
  a in Bx && (T = ((Y) => function(X) {
    if (!X.relatedTarget || X.relatedTarget !== X.delegateTarget && !X.delegateTarget.contains(X.relatedTarget))
      return Y.call(this, X);
  })(T));
  const x = Wx(f), O = x[E] || (x[E] = {}), A = Gx(O, T, b ? s : null);
  if (A) {
    A.oneOff = A.oneOff && y;
    return;
  }
  const z = Yx(T, a.replace($z, "")), F = b ? Gz(f, s, T) : Wz(f, T);
  F.delegationSelector = b ? s : null, F.callable = T, F.oneOff = y, F.uidEvent = z, O[z] = F, f.addEventListener(E, F, b);
}
function UC(f, a, s, p, y) {
  const b = Gx(a[s], p, y);
  b && (f.removeEventListener(s, b, !!y), delete a[s][b.uidEvent]);
}
function Kz(f, a, s, p) {
  const y = a[s] || {};
  for (const [b, T] of Object.entries(y))
    b.includes(p) && UC(f, a, s, T.callable, T.delegationSelector);
}
function Qx(f) {
  return f = f.replace(Vz, ""), Bx[f] || f;
}
const ce = {
  on(f, a, s, p) {
    g1(f, a, s, p, !1);
  },
  one(f, a, s, p) {
    g1(f, a, s, p, !0);
  },
  off(f, a, s, p) {
    if (typeof a != "string" || !f)
      return;
    const [y, b, T] = Kx(a, s, p), E = T !== a, x = Wx(f), O = x[T] || {}, A = a.startsWith(".");
    if (typeof b < "u") {
      if (!Object.keys(O).length)
        return;
      UC(f, x, T, b, y ? s : null);
      return;
    }
    if (A)
      for (const z of Object.keys(x))
        Kz(f, x, z, a.slice(1));
    for (const [z, F] of Object.entries(O)) {
      const H = z.replace(Bz, "");
      (!E || a.includes(H)) && UC(f, x, T, F.callable, F.delegationSelector);
    }
  },
  trigger(f, a, s) {
    if (typeof a != "string" || !f)
      return null;
    const p = $x(), y = Qx(a), b = a !== y;
    let T = null, E = !0, x = !0, O = !1;
    b && p && (T = p.Event(a, s), p(f).trigger(T), E = !T.isPropagationStopped(), x = !T.isImmediatePropagationStopped(), O = T.isDefaultPrevented());
    const A = ab(new Event(a, {
      bubbles: E,
      cancelable: !0
    }), s);
    return O && A.preventDefault(), x && f.dispatchEvent(A), A.defaultPrevented && T && T.preventDefault(), A;
  }
};
function ab(f, a = {}) {
  for (const [s, p] of Object.entries(a))
    try {
      f[s] = p;
    } catch {
      Object.defineProperty(f, s, {
        configurable: !0,
        get() {
          return p;
        }
      });
    }
  return f;
}
function y1(f) {
  if (f === "true")
    return !0;
  if (f === "false")
    return !1;
  if (f === Number(f).toString())
    return Number(f);
  if (f === "" || f === "null")
    return null;
  if (typeof f != "string")
    return f;
  try {
    return JSON.parse(decodeURIComponent(f));
  } catch {
    return f;
  }
}
function pC(f) {
  return f.replace(/[A-Z]/g, (a) => `-${a.toLowerCase()}`);
}
const Au = {
  setDataAttribute(f, a, s) {
    f.setAttribute(`data-bs-${pC(a)}`, s);
  },
  removeDataAttribute(f, a) {
    f.removeAttribute(`data-bs-${pC(a)}`);
  },
  getDataAttributes(f) {
    if (!f)
      return {};
    const a = {}, s = Object.keys(f.dataset).filter((p) => p.startsWith("bs") && !p.startsWith("bsConfig"));
    for (const p of s) {
      let y = p.replace(/^bs/, "");
      y = y.charAt(0).toLowerCase() + y.slice(1, y.length), a[y] = y1(f.dataset[p]);
    }
    return a;
  },
  getDataAttribute(f, a) {
    return y1(f.getAttribute(`data-bs-${pC(a)}`));
  }
};
class Qv {
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
    const p = Ou(s) ? Au.getDataAttribute(s, "config") : {};
    return {
      ...this.constructor.Default,
      ...typeof p == "object" ? p : {},
      ...Ou(s) ? Au.getDataAttributes(s) : {},
      ...typeof a == "object" ? a : {}
    };
  }
  _typeCheckConfig(a, s = this.constructor.DefaultType) {
    for (const [p, y] of Object.entries(s)) {
      const b = a[p], T = Ou(b) ? "element" : jz(b);
      if (!new RegExp(y).test(T))
        throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${p}" provided type "${T}" but expected type "${y}".`);
    }
  }
}
const Qz = "5.3.2";
class Go extends Qv {
  constructor(a, s) {
    super(), a = Bs(a), a && (this._element = a, this._config = this._getConfig(s), cC.set(this._element, this.constructor.DATA_KEY, this));
  }
  // Public
  dispose() {
    cC.remove(this._element, this.constructor.DATA_KEY), ce.off(this._element, this.constructor.EVENT_KEY);
    for (const a of Object.getOwnPropertyNames(this))
      this[a] = null;
  }
  _queueCallback(a, s, p = !0) {
    Vx(a, s, p);
  }
  _getConfig(a) {
    return a = this._mergeConfigObj(a, this._element), a = this._configAfterMerge(a), this._typeCheckConfig(a), a;
  }
  // Static
  static getInstance(a) {
    return cC.get(Bs(a), this.DATA_KEY);
  }
  static getOrCreateInstance(a, s = {}) {
    return this.getInstance(a) || new this(a, typeof s == "object" ? s : null);
  }
  static get VERSION() {
    return Qz;
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
const hC = (f) => {
  let a = f.getAttribute("data-bs-target");
  if (!a || a === "#") {
    let s = f.getAttribute("href");
    if (!s || !s.includes("#") && !s.startsWith("."))
      return null;
    s.includes("#") && !s.startsWith("#") && (s = `#${s.split("#")[1]}`), a = s && s !== "#" ? Fx(s.trim()) : null;
  }
  return a;
}, dt = {
  find(f, a = document.documentElement) {
    return [].concat(...Element.prototype.querySelectorAll.call(a, f));
  },
  findOne(f, a = document.documentElement) {
    return Element.prototype.querySelector.call(a, f);
  },
  children(f, a) {
    return [].concat(...f.children).filter((s) => s.matches(a));
  },
  parents(f, a) {
    const s = [];
    let p = f.parentNode.closest(a);
    for (; p; )
      s.push(p), p = p.parentNode.closest(a);
    return s;
  },
  prev(f, a) {
    let s = f.previousElementSibling;
    for (; s; ) {
      if (s.matches(a))
        return [s];
      s = s.previousElementSibling;
    }
    return [];
  },
  // TODO: this is now unused; remove later along with prev()
  next(f, a) {
    let s = f.nextElementSibling;
    for (; s; ) {
      if (s.matches(a))
        return [s];
      s = s.nextElementSibling;
    }
    return [];
  },
  focusableChildren(f) {
    const a = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((s) => `${s}:not([tabindex^="-"])`).join(",");
    return this.find(a, f).filter((s) => !Ys(s) && xp(s));
  },
  getSelectorFromElement(f) {
    const a = hC(f);
    return a && dt.findOne(a) ? a : null;
  },
  getElementFromSelector(f) {
    const a = hC(f);
    return a ? dt.findOne(a) : null;
  },
  getMultipleElementsFromSelector(f) {
    const a = hC(f);
    return a ? dt.find(a) : [];
  }
}, TE = (f, a = "hide") => {
  const s = `click.dismiss${f.EVENT_KEY}`, p = f.NAME;
  ce.on(document, s, `[data-bs-dismiss="${p}"]`, function(y) {
    if (["A", "AREA"].includes(this.tagName) && y.preventDefault(), Ys(this))
      return;
    const b = dt.getElementFromSelector(this) || this.closest(`.${p}`);
    f.getOrCreateInstance(b)[a]();
  });
}, Xz = "alert", qz = "bs.alert", Xx = `.${qz}`, Zz = `close${Xx}`, Jz = `closed${Xx}`, eU = "fade", tU = "show";
class wE extends Go {
  // Getters
  static get NAME() {
    return Xz;
  }
  // Public
  close() {
    if (ce.trigger(this._element, Zz).defaultPrevented)
      return;
    this._element.classList.remove(tU);
    const s = this._element.classList.contains(eU);
    this._queueCallback(() => this._destroyElement(), this._element, s);
  }
  // Private
  _destroyElement() {
    this._element.remove(), ce.trigger(this._element, Jz), this.dispose();
  }
  // Static
  static jQueryInterface(a) {
    return this.each(function() {
      const s = wE.getOrCreateInstance(this);
      if (typeof a == "string") {
        if (s[a] === void 0 || a.startsWith("_") || a === "constructor")
          throw new TypeError(`No method named "${a}"`);
        s[a](this);
      }
    });
  }
}
TE(wE, "close");
co(wE);
const nU = "button", rU = "bs.button", iU = `.${rU}`, aU = ".data-api", oU = "active", E1 = '[data-bs-toggle="button"]', lU = `click${iU}${aU}`;
class RE extends Go {
  // Getters
  static get NAME() {
    return nU;
  }
  // Public
  toggle() {
    this._element.setAttribute("aria-pressed", this._element.classList.toggle(oU));
  }
  // Static
  static jQueryInterface(a) {
    return this.each(function() {
      const s = RE.getOrCreateInstance(this);
      a === "toggle" && s[a]();
    });
  }
}
ce.on(document, lU, E1, (f) => {
  f.preventDefault();
  const a = f.target.closest(E1);
  RE.getOrCreateInstance(a).toggle();
});
co(RE);
const uU = "swipe", Dp = ".bs.swipe", sU = `touchstart${Dp}`, cU = `touchmove${Dp}`, fU = `touchend${Dp}`, dU = `pointerdown${Dp}`, pU = `pointerup${Dp}`, hU = "touch", vU = "pen", mU = "pointer-event", gU = 40, yU = {
  endCallback: null,
  leftCallback: null,
  rightCallback: null
}, EU = {
  endCallback: "(function|null)",
  leftCallback: "(function|null)",
  rightCallback: "(function|null)"
};
class gE extends Qv {
  constructor(a, s) {
    super(), this._element = a, !(!a || !gE.isSupported()) && (this._config = this._getConfig(s), this._deltaX = 0, this._supportPointerEvents = !!window.PointerEvent, this._initEvents());
  }
  // Getters
  static get Default() {
    return yU;
  }
  static get DefaultType() {
    return EU;
  }
  static get NAME() {
    return uU;
  }
  // Public
  dispose() {
    ce.off(this._element, Dp);
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
    if (a <= gU)
      return;
    const s = a / this._deltaX;
    this._deltaX = 0, s && ga(s > 0 ? this._config.rightCallback : this._config.leftCallback);
  }
  _initEvents() {
    this._supportPointerEvents ? (ce.on(this._element, dU, (a) => this._start(a)), ce.on(this._element, pU, (a) => this._end(a)), this._element.classList.add(mU)) : (ce.on(this._element, sU, (a) => this._start(a)), ce.on(this._element, cU, (a) => this._move(a)), ce.on(this._element, fU, (a) => this._end(a)));
  }
  _eventIsPointerPenTouch(a) {
    return this._supportPointerEvents && (a.pointerType === vU || a.pointerType === hU);
  }
  // Static
  static isSupported() {
    return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
  }
}
const _U = "carousel", SU = "bs.carousel", Ks = `.${SU}`, qx = ".data-api", CU = "ArrowLeft", bU = "ArrowRight", TU = 500, Av = "next", sp = "prev", pp = "left", lE = "right", wU = `slide${Ks}`, vC = `slid${Ks}`, RU = `keydown${Ks}`, xU = `mouseenter${Ks}`, DU = `mouseleave${Ks}`, OU = `dragstart${Ks}`, AU = `load${Ks}${qx}`, NU = `click${Ks}${qx}`, Zx = "carousel", Qy = "active", kU = "slide", LU = "carousel-item-end", MU = "carousel-item-start", zU = "carousel-item-next", UU = "carousel-item-prev", Jx = ".active", eD = ".carousel-item", PU = Jx + eD, jU = ".carousel-item img", FU = ".carousel-indicators", IU = "[data-bs-slide], [data-bs-slide-to]", HU = '[data-bs-ride="carousel"]', $U = {
  [CU]: lE,
  [bU]: pp
}, VU = {
  interval: 5e3,
  keyboard: !0,
  pause: "hover",
  ride: !1,
  touch: !0,
  wrap: !0
}, BU = {
  interval: "(number|boolean)",
  // TODO:v6 remove boolean support
  keyboard: "boolean",
  pause: "(string|boolean)",
  ride: "(boolean|string)",
  touch: "boolean",
  wrap: "boolean"
};
class Xv extends Go {
  constructor(a, s) {
    super(a, s), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = dt.findOne(FU, this._element), this._addEventListeners(), this._config.ride === Zx && this.cycle();
  }
  // Getters
  static get Default() {
    return VU;
  }
  static get DefaultType() {
    return BU;
  }
  static get NAME() {
    return _U;
  }
  // Public
  next() {
    this._slide(Av);
  }
  nextWhenVisible() {
    !document.hidden && xp(this._element) && this.next();
  }
  prev() {
    this._slide(sp);
  }
  pause() {
    this._isSliding && Ix(this._element), this._clearInterval();
  }
  cycle() {
    this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
  }
  _maybeEnableCycle() {
    if (this._config.ride) {
      if (this._isSliding) {
        ce.one(this._element, vC, () => this.cycle());
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
      ce.one(this._element, vC, () => this.to(a));
      return;
    }
    const p = this._getItemIndex(this._getActive());
    if (p === a)
      return;
    const y = a > p ? Av : sp;
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
    this._config.keyboard && ce.on(this._element, RU, (a) => this._keydown(a)), this._config.pause === "hover" && (ce.on(this._element, xU, () => this.pause()), ce.on(this._element, DU, () => this._maybeEnableCycle())), this._config.touch && gE.isSupported() && this._addTouchEventListeners();
  }
  _addTouchEventListeners() {
    for (const p of dt.find(jU, this._element))
      ce.on(p, OU, (y) => y.preventDefault());
    const s = {
      leftCallback: () => this._slide(this._directionToOrder(pp)),
      rightCallback: () => this._slide(this._directionToOrder(lE)),
      endCallback: () => {
        this._config.pause === "hover" && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), TU + this._config.interval));
      }
    };
    this._swipeHelper = new gE(this._element, s);
  }
  _keydown(a) {
    if (/input|textarea/i.test(a.target.tagName))
      return;
    const s = $U[a.key];
    s && (a.preventDefault(), this._slide(this._directionToOrder(s)));
  }
  _getItemIndex(a) {
    return this._getItems().indexOf(a);
  }
  _setActiveIndicatorElement(a) {
    if (!this._indicatorsElement)
      return;
    const s = dt.findOne(Jx, this._indicatorsElement);
    s.classList.remove(Qy), s.removeAttribute("aria-current");
    const p = dt.findOne(`[data-bs-slide-to="${a}"]`, this._indicatorsElement);
    p && (p.classList.add(Qy), p.setAttribute("aria-current", "true"));
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
    const p = this._getActive(), y = a === Av, b = s || ib(this._getItems(), p, y, this._config.wrap);
    if (b === p)
      return;
    const T = this._getItemIndex(b), E = (H) => ce.trigger(this._element, H, {
      relatedTarget: b,
      direction: this._orderToDirection(a),
      from: this._getItemIndex(p),
      to: T
    });
    if (E(wU).defaultPrevented || !p || !b)
      return;
    const O = !!this._interval;
    this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(T), this._activeElement = b;
    const A = y ? MU : LU, z = y ? zU : UU;
    b.classList.add(z), Kv(b), p.classList.add(A), b.classList.add(A);
    const F = () => {
      b.classList.remove(A, z), b.classList.add(Qy), p.classList.remove(Qy, z, A), this._isSliding = !1, E(vC);
    };
    this._queueCallback(F, p, this._isAnimated()), O && this.cycle();
  }
  _isAnimated() {
    return this._element.classList.contains(kU);
  }
  _getActive() {
    return dt.findOne(PU, this._element);
  }
  _getItems() {
    return dt.find(eD, this._element);
  }
  _clearInterval() {
    this._interval && (clearInterval(this._interval), this._interval = null);
  }
  _directionToOrder(a) {
    return uo() ? a === pp ? sp : Av : a === pp ? Av : sp;
  }
  _orderToDirection(a) {
    return uo() ? a === sp ? pp : lE : a === sp ? lE : pp;
  }
  // Static
  static jQueryInterface(a) {
    return this.each(function() {
      const s = Xv.getOrCreateInstance(this, a);
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
ce.on(document, NU, IU, function(f) {
  const a = dt.getElementFromSelector(this);
  if (!a || !a.classList.contains(Zx))
    return;
  f.preventDefault();
  const s = Xv.getOrCreateInstance(a), p = this.getAttribute("data-bs-slide-to");
  if (p) {
    s.to(p), s._maybeEnableCycle();
    return;
  }
  if (Au.getDataAttribute(this, "slide") === "next") {
    s.next(), s._maybeEnableCycle();
    return;
  }
  s.prev(), s._maybeEnableCycle();
});
ce.on(window, AU, () => {
  const f = dt.find(HU);
  for (const a of f)
    Xv.getOrCreateInstance(a);
});
co(Xv);
const YU = "collapse", WU = "bs.collapse", qv = `.${WU}`, GU = ".data-api", KU = `show${qv}`, QU = `shown${qv}`, XU = `hide${qv}`, qU = `hidden${qv}`, ZU = `click${qv}${GU}`, mC = "show", mp = "collapse", Xy = "collapsing", JU = "collapsed", eP = `:scope .${mp} .${mp}`, tP = "collapse-horizontal", nP = "width", rP = "height", iP = ".collapse.show, .collapse.collapsing", PC = '[data-bs-toggle="collapse"]', aP = {
  parent: null,
  toggle: !0
}, oP = {
  parent: "(null|element)",
  toggle: "boolean"
};
class Bv extends Go {
  constructor(a, s) {
    super(a, s), this._isTransitioning = !1, this._triggerArray = [];
    const p = dt.find(PC);
    for (const y of p) {
      const b = dt.getSelectorFromElement(y), T = dt.find(b).filter((E) => E === this._element);
      b !== null && T.length && this._triggerArray.push(y);
    }
    this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
  }
  // Getters
  static get Default() {
    return aP;
  }
  static get DefaultType() {
    return oP;
  }
  static get NAME() {
    return YU;
  }
  // Public
  toggle() {
    this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (this._isTransitioning || this._isShown())
      return;
    let a = [];
    if (this._config.parent && (a = this._getFirstLevelChildren(iP).filter((E) => E !== this._element).map((E) => Bv.getOrCreateInstance(E, {
      toggle: !1
    }))), a.length && a[0]._isTransitioning || ce.trigger(this._element, KU).defaultPrevented)
      return;
    for (const E of a)
      E.hide();
    const p = this._getDimension();
    this._element.classList.remove(mp), this._element.classList.add(Xy), this._element.style[p] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
    const y = () => {
      this._isTransitioning = !1, this._element.classList.remove(Xy), this._element.classList.add(mp, mC), this._element.style[p] = "", ce.trigger(this._element, QU);
    }, T = `scroll${p[0].toUpperCase() + p.slice(1)}`;
    this._queueCallback(y, this._element, !0), this._element.style[p] = `${this._element[T]}px`;
  }
  hide() {
    if (this._isTransitioning || !this._isShown() || ce.trigger(this._element, XU).defaultPrevented)
      return;
    const s = this._getDimension();
    this._element.style[s] = `${this._element.getBoundingClientRect()[s]}px`, Kv(this._element), this._element.classList.add(Xy), this._element.classList.remove(mp, mC);
    for (const y of this._triggerArray) {
      const b = dt.getElementFromSelector(y);
      b && !this._isShown(b) && this._addAriaAndCollapsedClass([y], !1);
    }
    this._isTransitioning = !0;
    const p = () => {
      this._isTransitioning = !1, this._element.classList.remove(Xy), this._element.classList.add(mp), ce.trigger(this._element, qU);
    };
    this._element.style[s] = "", this._queueCallback(p, this._element, !0);
  }
  _isShown(a = this._element) {
    return a.classList.contains(mC);
  }
  // Private
  _configAfterMerge(a) {
    return a.toggle = !!a.toggle, a.parent = Bs(a.parent), a;
  }
  _getDimension() {
    return this._element.classList.contains(tP) ? nP : rP;
  }
  _initializeChildren() {
    if (!this._config.parent)
      return;
    const a = this._getFirstLevelChildren(PC);
    for (const s of a) {
      const p = dt.getElementFromSelector(s);
      p && this._addAriaAndCollapsedClass([s], this._isShown(p));
    }
  }
  _getFirstLevelChildren(a) {
    const s = dt.find(eP, this._config.parent);
    return dt.find(a, this._config.parent).filter((p) => !s.includes(p));
  }
  _addAriaAndCollapsedClass(a, s) {
    if (a.length)
      for (const p of a)
        p.classList.toggle(JU, !s), p.setAttribute("aria-expanded", s);
  }
  // Static
  static jQueryInterface(a) {
    const s = {};
    return typeof a == "string" && /show|hide/.test(a) && (s.toggle = !1), this.each(function() {
      const p = Bv.getOrCreateInstance(this, s);
      if (typeof a == "string") {
        if (typeof p[a] > "u")
          throw new TypeError(`No method named "${a}"`);
        p[a]();
      }
    });
  }
}
ce.on(document, ZU, PC, function(f) {
  (f.target.tagName === "A" || f.delegateTarget && f.delegateTarget.tagName === "A") && f.preventDefault();
  for (const a of dt.getMultipleElementsFromSelector(this))
    Bv.getOrCreateInstance(a, {
      toggle: !1
    }).toggle();
});
co(Bv);
const _1 = "dropdown", lP = "bs.dropdown", wf = `.${lP}`, ob = ".data-api", uP = "Escape", S1 = "Tab", sP = "ArrowUp", C1 = "ArrowDown", cP = 2, fP = `hide${wf}`, dP = `hidden${wf}`, pP = `show${wf}`, hP = `shown${wf}`, tD = `click${wf}${ob}`, nD = `keydown${wf}${ob}`, vP = `keyup${wf}${ob}`, hp = "show", mP = "dropup", gP = "dropend", yP = "dropstart", EP = "dropup-center", _P = "dropdown-center", Ef = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', SP = `${Ef}.${hp}`, uE = ".dropdown-menu", CP = ".navbar", bP = ".navbar-nav", TP = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", wP = uo() ? "top-end" : "top-start", RP = uo() ? "top-start" : "top-end", xP = uo() ? "bottom-end" : "bottom-start", DP = uo() ? "bottom-start" : "bottom-end", OP = uo() ? "left-start" : "right-start", AP = uo() ? "right-start" : "left-start", NP = "top", kP = "bottom", LP = {
  autoClose: !0,
  boundary: "clippingParents",
  display: "dynamic",
  offset: [0, 2],
  popperConfig: null,
  reference: "toggle"
}, MP = {
  autoClose: "(boolean|string)",
  boundary: "(string|element)",
  display: "string",
  offset: "(array|string|function)",
  popperConfig: "(null|object|function)",
  reference: "(string|element|object)"
};
class zl extends Go {
  constructor(a, s) {
    super(a, s), this._popper = null, this._parent = this._element.parentNode, this._menu = dt.next(this._element, uE)[0] || dt.prev(this._element, uE)[0] || dt.findOne(uE, this._parent), this._inNavbar = this._detectNavbar();
  }
  // Getters
  static get Default() {
    return LP;
  }
  static get DefaultType() {
    return MP;
  }
  static get NAME() {
    return _1;
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
    if (!ce.trigger(this._element, pP, a).defaultPrevented) {
      if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(bP))
        for (const p of [].concat(...document.body.children))
          ce.on(p, "mouseover", mE);
      this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(hp), this._element.classList.add(hp), ce.trigger(this._element, hP, a);
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
    if (!ce.trigger(this._element, fP, a).defaultPrevented) {
      if ("ontouchstart" in document.documentElement)
        for (const p of [].concat(...document.body.children))
          ce.off(p, "mouseover", mE);
      this._popper && this._popper.destroy(), this._menu.classList.remove(hp), this._element.classList.remove(hp), this._element.setAttribute("aria-expanded", "false"), Au.removeDataAttribute(this._menu, "popper"), ce.trigger(this._element, dP, a);
    }
  }
  _getConfig(a) {
    if (a = super._getConfig(a), typeof a.reference == "object" && !Ou(a.reference) && typeof a.reference.getBoundingClientRect != "function")
      throw new TypeError(`${_1.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
    return a;
  }
  _createPopper() {
    if (typeof jx > "u")
      throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
    let a = this._element;
    this._config.reference === "parent" ? a = this._parent : Ou(this._config.reference) ? a = Bs(this._config.reference) : typeof this._config.reference == "object" && (a = this._config.reference);
    const s = this._getPopperConfig();
    this._popper = rb(a, this._menu, s);
  }
  _isShown() {
    return this._menu.classList.contains(hp);
  }
  _getPlacement() {
    const a = this._parent;
    if (a.classList.contains(gP))
      return OP;
    if (a.classList.contains(yP))
      return AP;
    if (a.classList.contains(EP))
      return NP;
    if (a.classList.contains(_P))
      return kP;
    const s = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
    return a.classList.contains(mP) ? s ? RP : wP : s ? DP : xP;
  }
  _detectNavbar() {
    return this._element.closest(CP) !== null;
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
    return (this._inNavbar || this._config.display === "static") && (Au.setDataAttribute(this._menu, "popper", "static"), a.modifiers = [{
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
    const p = dt.find(TP, this._menu).filter((y) => xp(y));
    p.length && ib(p, s, a === C1, !p.includes(s)).focus();
  }
  // Static
  static jQueryInterface(a) {
    return this.each(function() {
      const s = zl.getOrCreateInstance(this, a);
      if (typeof a == "string") {
        if (typeof s[a] > "u")
          throw new TypeError(`No method named "${a}"`);
        s[a]();
      }
    });
  }
  static clearMenus(a) {
    if (a.button === cP || a.type === "keyup" && a.key !== S1)
      return;
    const s = dt.find(SP);
    for (const p of s) {
      const y = zl.getInstance(p);
      if (!y || y._config.autoClose === !1)
        continue;
      const b = a.composedPath(), T = b.includes(y._menu);
      if (b.includes(y._element) || y._config.autoClose === "inside" && !T || y._config.autoClose === "outside" && T || y._menu.contains(a.target) && (a.type === "keyup" && a.key === S1 || /input|select|option|textarea|form/i.test(a.target.tagName)))
        continue;
      const E = {
        relatedTarget: y._element
      };
      a.type === "click" && (E.clickEvent = a), y._completeHide(E);
    }
  }
  static dataApiKeydownHandler(a) {
    const s = /input|textarea/i.test(a.target.tagName), p = a.key === uP, y = [sP, C1].includes(a.key);
    if (!y && !p || s && !p)
      return;
    a.preventDefault();
    const b = this.matches(Ef) ? this : dt.prev(this, Ef)[0] || dt.next(this, Ef)[0] || dt.findOne(Ef, a.delegateTarget.parentNode), T = zl.getOrCreateInstance(b);
    if (y) {
      a.stopPropagation(), T.show(), T._selectMenuItem(a);
      return;
    }
    T._isShown() && (a.stopPropagation(), T.hide(), b.focus());
  }
}
ce.on(document, nD, Ef, zl.dataApiKeydownHandler);
ce.on(document, nD, uE, zl.dataApiKeydownHandler);
ce.on(document, tD, zl.clearMenus);
ce.on(document, vP, zl.clearMenus);
ce.on(document, tD, Ef, function(f) {
  f.preventDefault(), zl.getOrCreateInstance(this).toggle();
});
co(zl);
const rD = "backdrop", zP = "fade", b1 = "show", T1 = `mousedown.bs.${rD}`, UP = {
  className: "modal-backdrop",
  clickCallback: null,
  isAnimated: !1,
  isVisible: !0,
  // if false, we use the backdrop helper without adding any element to the dom
  rootElement: "body"
  // give the choice to place backdrop under different elements
}, PP = {
  className: "string",
  clickCallback: "(function|null)",
  isAnimated: "boolean",
  isVisible: "boolean",
  rootElement: "(element|string)"
};
class iD extends Qv {
  constructor(a) {
    super(), this._config = this._getConfig(a), this._isAppended = !1, this._element = null;
  }
  // Getters
  static get Default() {
    return UP;
  }
  static get DefaultType() {
    return PP;
  }
  static get NAME() {
    return rD;
  }
  // Public
  show(a) {
    if (!this._config.isVisible) {
      ga(a);
      return;
    }
    this._append();
    const s = this._getElement();
    this._config.isAnimated && Kv(s), s.classList.add(b1), this._emulateAnimation(() => {
      ga(a);
    });
  }
  hide(a) {
    if (!this._config.isVisible) {
      ga(a);
      return;
    }
    this._getElement().classList.remove(b1), this._emulateAnimation(() => {
      this.dispose(), ga(a);
    });
  }
  dispose() {
    this._isAppended && (ce.off(this._element, T1), this._element.remove(), this._isAppended = !1);
  }
  // Private
  _getElement() {
    if (!this._element) {
      const a = document.createElement("div");
      a.className = this._config.className, this._config.isAnimated && a.classList.add(zP), this._element = a;
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
    this._config.rootElement.append(a), ce.on(a, T1, () => {
      ga(this._config.clickCallback);
    }), this._isAppended = !0;
  }
  _emulateAnimation(a) {
    Vx(a, this._getElement(), this._config.isAnimated);
  }
}
const jP = "focustrap", FP = "bs.focustrap", yE = `.${FP}`, IP = `focusin${yE}`, HP = `keydown.tab${yE}`, $P = "Tab", VP = "forward", w1 = "backward", BP = {
  autofocus: !0,
  trapElement: null
  // The element to trap focus inside of
}, YP = {
  autofocus: "boolean",
  trapElement: "element"
};
class aD extends Qv {
  constructor(a) {
    super(), this._config = this._getConfig(a), this._isActive = !1, this._lastTabNavDirection = null;
  }
  // Getters
  static get Default() {
    return BP;
  }
  static get DefaultType() {
    return YP;
  }
  static get NAME() {
    return jP;
  }
  // Public
  activate() {
    this._isActive || (this._config.autofocus && this._config.trapElement.focus(), ce.off(document, yE), ce.on(document, IP, (a) => this._handleFocusin(a)), ce.on(document, HP, (a) => this._handleKeydown(a)), this._isActive = !0);
  }
  deactivate() {
    this._isActive && (this._isActive = !1, ce.off(document, yE));
  }
  // Private
  _handleFocusin(a) {
    const {
      trapElement: s
    } = this._config;
    if (a.target === document || a.target === s || s.contains(a.target))
      return;
    const p = dt.focusableChildren(s);
    p.length === 0 ? s.focus() : this._lastTabNavDirection === w1 ? p[p.length - 1].focus() : p[0].focus();
  }
  _handleKeydown(a) {
    a.key === $P && (this._lastTabNavDirection = a.shiftKey ? w1 : VP);
  }
}
const R1 = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", x1 = ".sticky-top", qy = "padding-right", D1 = "margin-right";
class jC {
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
    this._disableOverFlow(), this._setElementAttributes(this._element, qy, (s) => s + a), this._setElementAttributes(R1, qy, (s) => s + a), this._setElementAttributes(x1, D1, (s) => s - a);
  }
  reset() {
    this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, qy), this._resetElementAttributes(R1, qy), this._resetElementAttributes(x1, D1);
  }
  isOverflowing() {
    return this.getWidth() > 0;
  }
  // Private
  _disableOverFlow() {
    this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
  }
  _setElementAttributes(a, s, p) {
    const y = this.getWidth(), b = (T) => {
      if (T !== this._element && window.innerWidth > T.clientWidth + y)
        return;
      this._saveInitialAttribute(T, s);
      const E = window.getComputedStyle(T).getPropertyValue(s);
      T.style.setProperty(s, `${p(Number.parseFloat(E))}px`);
    };
    this._applyManipulationCallback(a, b);
  }
  _saveInitialAttribute(a, s) {
    const p = a.style.getPropertyValue(s);
    p && Au.setDataAttribute(a, s, p);
  }
  _resetElementAttributes(a, s) {
    const p = (y) => {
      const b = Au.getDataAttribute(y, s);
      if (b === null) {
        y.style.removeProperty(s);
        return;
      }
      Au.removeDataAttribute(y, s), y.style.setProperty(s, b);
    };
    this._applyManipulationCallback(a, p);
  }
  _applyManipulationCallback(a, s) {
    if (Ou(a)) {
      s(a);
      return;
    }
    for (const p of dt.find(a, this._element))
      s(p);
  }
}
const WP = "modal", GP = "bs.modal", so = `.${GP}`, KP = ".data-api", QP = "Escape", XP = `hide${so}`, qP = `hidePrevented${so}`, oD = `hidden${so}`, lD = `show${so}`, ZP = `shown${so}`, JP = `resize${so}`, ej = `click.dismiss${so}`, tj = `mousedown.dismiss${so}`, nj = `keydown.dismiss${so}`, rj = `click${so}${KP}`, O1 = "modal-open", ij = "fade", A1 = "show", gC = "modal-static", aj = ".modal.show", oj = ".modal-dialog", lj = ".modal-body", uj = '[data-bs-toggle="modal"]', sj = {
  backdrop: !0,
  focus: !0,
  keyboard: !0
}, cj = {
  backdrop: "(boolean|string)",
  focus: "boolean",
  keyboard: "boolean"
};
class Tf extends Go {
  constructor(a, s) {
    super(a, s), this._dialog = dt.findOne(oj, this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new jC(), this._addEventListeners();
  }
  // Getters
  static get Default() {
    return sj;
  }
  static get DefaultType() {
    return cj;
  }
  static get NAME() {
    return WP;
  }
  // Public
  toggle(a) {
    return this._isShown ? this.hide() : this.show(a);
  }
  show(a) {
    this._isShown || this._isTransitioning || ce.trigger(this._element, lD, {
      relatedTarget: a
    }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(O1), this._adjustDialog(), this._backdrop.show(() => this._showElement(a)));
  }
  hide() {
    !this._isShown || this._isTransitioning || ce.trigger(this._element, XP).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(A1), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated()));
  }
  dispose() {
    ce.off(window, so), ce.off(this._dialog, so), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
  }
  handleUpdate() {
    this._adjustDialog();
  }
  // Private
  _initializeBackDrop() {
    return new iD({
      isVisible: !!this._config.backdrop,
      // 'static' option will be translated to true, and booleans will keep their value,
      isAnimated: this._isAnimated()
    });
  }
  _initializeFocusTrap() {
    return new aD({
      trapElement: this._element
    });
  }
  _showElement(a) {
    document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
    const s = dt.findOne(lj, this._dialog);
    s && (s.scrollTop = 0), Kv(this._element), this._element.classList.add(A1);
    const p = () => {
      this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, ce.trigger(this._element, ZP, {
        relatedTarget: a
      });
    };
    this._queueCallback(p, this._dialog, this._isAnimated());
  }
  _addEventListeners() {
    ce.on(this._element, nj, (a) => {
      if (a.key === QP) {
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        this._triggerBackdropTransition();
      }
    }), ce.on(window, JP, () => {
      this._isShown && !this._isTransitioning && this._adjustDialog();
    }), ce.on(this._element, tj, (a) => {
      ce.one(this._element, ej, (s) => {
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
      document.body.classList.remove(O1), this._resetAdjustments(), this._scrollBar.reset(), ce.trigger(this._element, oD);
    });
  }
  _isAnimated() {
    return this._element.classList.contains(ij);
  }
  _triggerBackdropTransition() {
    if (ce.trigger(this._element, qP).defaultPrevented)
      return;
    const s = this._element.scrollHeight > document.documentElement.clientHeight, p = this._element.style.overflowY;
    p === "hidden" || this._element.classList.contains(gC) || (s || (this._element.style.overflowY = "hidden"), this._element.classList.add(gC), this._queueCallback(() => {
      this._element.classList.remove(gC), this._queueCallback(() => {
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
      const p = Tf.getOrCreateInstance(this, a);
      if (typeof a == "string") {
        if (typeof p[a] > "u")
          throw new TypeError(`No method named "${a}"`);
        p[a](s);
      }
    });
  }
}
ce.on(document, rj, uj, function(f) {
  const a = dt.getElementFromSelector(this);
  ["A", "AREA"].includes(this.tagName) && f.preventDefault(), ce.one(a, lD, (y) => {
    y.defaultPrevented || ce.one(a, oD, () => {
      xp(this) && this.focus();
    });
  });
  const s = dt.findOne(aj);
  s && Tf.getInstance(s).hide(), Tf.getOrCreateInstance(a).toggle(this);
});
TE(Tf);
co(Tf);
const fj = "offcanvas", dj = "bs.offcanvas", Mu = `.${dj}`, uD = ".data-api", pj = `load${Mu}${uD}`, hj = "Escape", N1 = "show", k1 = "showing", L1 = "hiding", vj = "offcanvas-backdrop", sD = ".offcanvas.show", mj = `show${Mu}`, gj = `shown${Mu}`, yj = `hide${Mu}`, M1 = `hidePrevented${Mu}`, cD = `hidden${Mu}`, Ej = `resize${Mu}`, _j = `click${Mu}${uD}`, Sj = `keydown.dismiss${Mu}`, Cj = '[data-bs-toggle="offcanvas"]', bj = {
  backdrop: !0,
  keyboard: !0,
  scroll: !1
}, Tj = {
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
    return bj;
  }
  static get DefaultType() {
    return Tj;
  }
  static get NAME() {
    return fj;
  }
  // Public
  toggle(a) {
    return this._isShown ? this.hide() : this.show(a);
  }
  show(a) {
    if (this._isShown || ce.trigger(this._element, mj, {
      relatedTarget: a
    }).defaultPrevented)
      return;
    this._isShown = !0, this._backdrop.show(), this._config.scroll || new jC().hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(k1);
    const p = () => {
      (!this._config.scroll || this._config.backdrop) && this._focustrap.activate(), this._element.classList.add(N1), this._element.classList.remove(k1), ce.trigger(this._element, gj, {
        relatedTarget: a
      });
    };
    this._queueCallback(p, this._element, !0);
  }
  hide() {
    if (!this._isShown || ce.trigger(this._element, yj).defaultPrevented)
      return;
    this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(L1), this._backdrop.hide();
    const s = () => {
      this._element.classList.remove(N1, L1), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new jC().reset(), ce.trigger(this._element, cD);
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
        ce.trigger(this._element, M1);
        return;
      }
      this.hide();
    }, s = !!this._config.backdrop;
    return new iD({
      className: vj,
      isVisible: s,
      isAnimated: !0,
      rootElement: this._element.parentNode,
      clickCallback: s ? a : null
    });
  }
  _initializeFocusTrap() {
    return new aD({
      trapElement: this._element
    });
  }
  _addEventListeners() {
    ce.on(this._element, Sj, (a) => {
      if (a.key === hj) {
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        ce.trigger(this._element, M1);
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
ce.on(document, _j, Cj, function(f) {
  const a = dt.getElementFromSelector(this);
  if (["A", "AREA"].includes(this.tagName) && f.preventDefault(), Ys(this))
    return;
  ce.one(a, cD, () => {
    xp(this) && this.focus();
  });
  const s = dt.findOne(sD);
  s && s !== a && Ws.getInstance(s).hide(), Ws.getOrCreateInstance(a).toggle(this);
});
ce.on(window, pj, () => {
  for (const f of dt.find(sD))
    Ws.getOrCreateInstance(f).show();
});
ce.on(window, Ej, () => {
  for (const f of dt.find("[aria-modal][class*=show][class*=offcanvas-]"))
    getComputedStyle(f).position !== "fixed" && Ws.getOrCreateInstance(f).hide();
});
TE(Ws);
co(Ws);
const wj = /^aria-[\w-]*$/i, fD = {
  // Global attributes allowed on any supplied element below.
  "*": ["class", "dir", "id", "lang", "role", wj],
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
}, Rj = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]), xj = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i, Dj = (f, a) => {
  const s = f.nodeName.toLowerCase();
  return a.includes(s) ? Rj.has(s) ? !!xj.test(f.nodeValue) : !0 : a.filter((p) => p instanceof RegExp).some((p) => p.test(s));
};
function Oj(f, a, s) {
  if (!f.length)
    return f;
  if (s && typeof s == "function")
    return s(f);
  const y = new window.DOMParser().parseFromString(f, "text/html"), b = [].concat(...y.body.querySelectorAll("*"));
  for (const T of b) {
    const E = T.nodeName.toLowerCase();
    if (!Object.keys(a).includes(E)) {
      T.remove();
      continue;
    }
    const x = [].concat(...T.attributes), O = [].concat(a["*"] || [], a[E] || []);
    for (const A of x)
      Dj(A, O) || T.removeAttribute(A.nodeName);
  }
  return y.body.innerHTML;
}
const Aj = "TemplateFactory", Nj = {
  allowList: fD,
  content: {},
  // { selector : text ,  selector2 : text2 , }
  extraClass: "",
  html: !1,
  sanitize: !0,
  sanitizeFn: null,
  template: "<div></div>"
}, kj = {
  allowList: "object",
  content: "object",
  extraClass: "(string|function)",
  html: "boolean",
  sanitize: "boolean",
  sanitizeFn: "(null|function)",
  template: "string"
}, Lj = {
  entry: "(string|element|function|null)",
  selector: "(string|element)"
};
class Mj extends Qv {
  constructor(a) {
    super(), this._config = this._getConfig(a);
  }
  // Getters
  static get Default() {
    return Nj;
  }
  static get DefaultType() {
    return kj;
  }
  static get NAME() {
    return Aj;
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
    for (const [y, b] of Object.entries(this._config.content))
      this._setContent(a, b, y);
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
      }, Lj);
  }
  _setContent(a, s, p) {
    const y = dt.findOne(p, a);
    if (y) {
      if (s = this._resolvePossibleFunction(s), !s) {
        y.remove();
        return;
      }
      if (Ou(s)) {
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
    return this._config.sanitize ? Oj(a, this._config.allowList, this._config.sanitizeFn) : a;
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
const zj = "tooltip", Uj = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]), yC = "fade", Pj = "modal", Zy = "show", jj = ".tooltip-inner", z1 = `.${Pj}`, U1 = "hide.bs.modal", Nv = "hover", EC = "focus", Fj = "click", Ij = "manual", Hj = "hide", $j = "hidden", Vj = "show", Bj = "shown", Yj = "inserted", Wj = "click", Gj = "focusin", Kj = "focusout", Qj = "mouseenter", Xj = "mouseleave", qj = {
  AUTO: "auto",
  TOP: "top",
  RIGHT: uo() ? "left" : "right",
  BOTTOM: "bottom",
  LEFT: uo() ? "right" : "left"
}, Zj = {
  allowList: fD,
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
}, Jj = {
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
class Op extends Go {
  constructor(a, s) {
    if (typeof jx > "u")
      throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
    super(a, s), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle();
  }
  // Getters
  static get Default() {
    return Zj;
  }
  static get DefaultType() {
    return Jj;
  }
  static get NAME() {
    return zj;
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
    clearTimeout(this._timeout), ce.off(this._element.closest(z1), U1, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose();
  }
  show() {
    if (this._element.style.display === "none")
      throw new Error("Please use show on visible elements");
    if (!(this._isWithContent() && this._isEnabled))
      return;
    const a = ce.trigger(this._element, this.constructor.eventName(Vj)), p = (Hx(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
    if (a.defaultPrevented || !p)
      return;
    this._disposePopper();
    const y = this._getTipElement();
    this._element.setAttribute("aria-describedby", y.getAttribute("id"));
    const {
      container: b
    } = this._config;
    if (this._element.ownerDocument.documentElement.contains(this.tip) || (b.append(y), ce.trigger(this._element, this.constructor.eventName(Yj))), this._popper = this._createPopper(y), y.classList.add(Zy), "ontouchstart" in document.documentElement)
      for (const E of [].concat(...document.body.children))
        ce.on(E, "mouseover", mE);
    const T = () => {
      ce.trigger(this._element, this.constructor.eventName(Bj)), this._isHovered === !1 && this._leave(), this._isHovered = !1;
    };
    this._queueCallback(T, this.tip, this._isAnimated());
  }
  hide() {
    if (!this._isShown() || ce.trigger(this._element, this.constructor.eventName(Hj)).defaultPrevented)
      return;
    if (this._getTipElement().classList.remove(Zy), "ontouchstart" in document.documentElement)
      for (const y of [].concat(...document.body.children))
        ce.off(y, "mouseover", mE);
    this._activeTrigger[Fj] = !1, this._activeTrigger[EC] = !1, this._activeTrigger[Nv] = !1, this._isHovered = null;
    const p = () => {
      this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), ce.trigger(this._element, this.constructor.eventName($j)));
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
    s.classList.remove(yC, Zy), s.classList.add(`bs-${this.constructor.NAME}-auto`);
    const p = Fz(this.constructor.NAME).toString();
    return s.setAttribute("id", p), this._isAnimated() && s.classList.add(yC), s;
  }
  setContent(a) {
    this._newContent = a, this._isShown() && (this._disposePopper(), this.show());
  }
  _getTemplateFactory(a) {
    return this._templateFactory ? this._templateFactory.changeContent(a) : this._templateFactory = new Mj({
      ...this._config,
      // the `content` var has to be after `this._config`
      // to override config.content in case of popover
      content: a,
      extraClass: this._resolvePossibleFunction(this._config.customClass)
    }), this._templateFactory;
  }
  _getContentForTemplate() {
    return {
      [jj]: this._getTitle()
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
    return this._config.animation || this.tip && this.tip.classList.contains(yC);
  }
  _isShown() {
    return this.tip && this.tip.classList.contains(Zy);
  }
  _createPopper(a) {
    const s = ga(this._config.placement, [this, a, this._element]), p = qj[s.toUpperCase()];
    return rb(this._element, a, this._getPopperConfig(p));
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
        ce.on(this._element, this.constructor.eventName(Wj), this._config.selector, (p) => {
          this._initializeOnDelegatedTarget(p).toggle();
        });
      else if (s !== Ij) {
        const p = s === Nv ? this.constructor.eventName(Qj) : this.constructor.eventName(Gj), y = s === Nv ? this.constructor.eventName(Xj) : this.constructor.eventName(Kj);
        ce.on(this._element, p, this._config.selector, (b) => {
          const T = this._initializeOnDelegatedTarget(b);
          T._activeTrigger[b.type === "focusin" ? EC : Nv] = !0, T._enter();
        }), ce.on(this._element, y, this._config.selector, (b) => {
          const T = this._initializeOnDelegatedTarget(b);
          T._activeTrigger[b.type === "focusout" ? EC : Nv] = T._element.contains(b.relatedTarget), T._leave();
        });
      }
    this._hideModalHandler = () => {
      this._element && this.hide();
    }, ce.on(this._element.closest(z1), U1, this._hideModalHandler);
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
    const s = Au.getDataAttributes(this._element);
    for (const p of Object.keys(s))
      Uj.has(p) && delete s[p];
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
      const s = Op.getOrCreateInstance(this, a);
      if (typeof a == "string") {
        if (typeof s[a] > "u")
          throw new TypeError(`No method named "${a}"`);
        s[a]();
      }
    });
  }
}
co(Op);
const eF = "popover", tF = ".popover-header", nF = ".popover-body", rF = {
  ...Op.Default,
  content: "",
  offset: [0, 8],
  placement: "right",
  template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
  trigger: "click"
}, iF = {
  ...Op.DefaultType,
  content: "(null|string|element|function)"
};
class lb extends Op {
  // Getters
  static get Default() {
    return rF;
  }
  static get DefaultType() {
    return iF;
  }
  static get NAME() {
    return eF;
  }
  // Overrides
  _isWithContent() {
    return this._getTitle() || this._getContent();
  }
  // Private
  _getContentForTemplate() {
    return {
      [tF]: this._getTitle(),
      [nF]: this._getContent()
    };
  }
  _getContent() {
    return this._resolvePossibleFunction(this._config.content);
  }
  // Static
  static jQueryInterface(a) {
    return this.each(function() {
      const s = lb.getOrCreateInstance(this, a);
      if (typeof a == "string") {
        if (typeof s[a] > "u")
          throw new TypeError(`No method named "${a}"`);
        s[a]();
      }
    });
  }
}
co(lb);
const aF = "scrollspy", oF = "bs.scrollspy", ub = `.${oF}`, lF = ".data-api", uF = `activate${ub}`, P1 = `click${ub}`, sF = `load${ub}${lF}`, cF = "dropdown-item", cp = "active", fF = '[data-bs-spy="scroll"]', _C = "[href]", dF = ".nav, .list-group", j1 = ".nav-link", pF = ".nav-item", hF = ".list-group-item", vF = `${j1}, ${pF} > ${j1}, ${hF}`, mF = ".dropdown", gF = ".dropdown-toggle", yF = {
  offset: null,
  // TODO: v6 @deprecated, keep it for backwards compatibility reasons
  rootMargin: "0px 0px -25%",
  smoothScroll: !1,
  target: null,
  threshold: [0.1, 0.5, 1]
}, EF = {
  offset: "(number|null)",
  // TODO v6 @deprecated, keep it for backwards compatibility reasons
  rootMargin: "string",
  smoothScroll: "boolean",
  target: "element",
  threshold: "array"
};
class xE extends Go {
  constructor(a, s) {
    super(a, s), this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map(), this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
      visibleEntryTop: 0,
      parentScrollTop: 0
    }, this.refresh();
  }
  // Getters
  static get Default() {
    return yF;
  }
  static get DefaultType() {
    return EF;
  }
  static get NAME() {
    return aF;
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
    this._config.smoothScroll && (ce.off(this._config.target, P1), ce.on(this._config.target, P1, _C, (a) => {
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
    }, y = (this._rootElement || document.documentElement).scrollTop, b = y >= this._previousScrollData.parentScrollTop;
    this._previousScrollData.parentScrollTop = y;
    for (const T of a) {
      if (!T.isIntersecting) {
        this._activeTarget = null, this._clearActiveClass(s(T));
        continue;
      }
      const E = T.target.offsetTop >= this._previousScrollData.visibleEntryTop;
      if (b && E) {
        if (p(T), !y)
          return;
        continue;
      }
      !b && !E && p(T);
    }
  }
  _initializeTargetsAndObservables() {
    this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map();
    const a = dt.find(_C, this._config.target);
    for (const s of a) {
      if (!s.hash || Ys(s))
        continue;
      const p = dt.findOne(decodeURI(s.hash), this._element);
      xp(p) && (this._targetLinks.set(decodeURI(s.hash), s), this._observableSections.set(s.hash, p));
    }
  }
  _process(a) {
    this._activeTarget !== a && (this._clearActiveClass(this._config.target), this._activeTarget = a, a.classList.add(cp), this._activateParents(a), ce.trigger(this._element, uF, {
      relatedTarget: a
    }));
  }
  _activateParents(a) {
    if (a.classList.contains(cF)) {
      dt.findOne(gF, a.closest(mF)).classList.add(cp);
      return;
    }
    for (const s of dt.parents(a, dF))
      for (const p of dt.prev(s, vF))
        p.classList.add(cp);
  }
  _clearActiveClass(a) {
    a.classList.remove(cp);
    const s = dt.find(`${_C}.${cp}`, a);
    for (const p of s)
      p.classList.remove(cp);
  }
  // Static
  static jQueryInterface(a) {
    return this.each(function() {
      const s = xE.getOrCreateInstance(this, a);
      if (typeof a == "string") {
        if (s[a] === void 0 || a.startsWith("_") || a === "constructor")
          throw new TypeError(`No method named "${a}"`);
        s[a]();
      }
    });
  }
}
ce.on(window, sF, () => {
  for (const f of dt.find(fF))
    xE.getOrCreateInstance(f);
});
co(xE);
const _F = "tab", SF = "bs.tab", Rf = `.${SF}`, CF = `hide${Rf}`, bF = `hidden${Rf}`, TF = `show${Rf}`, wF = `shown${Rf}`, RF = `click${Rf}`, xF = `keydown${Rf}`, DF = `load${Rf}`, OF = "ArrowLeft", F1 = "ArrowRight", AF = "ArrowUp", I1 = "ArrowDown", SC = "Home", H1 = "End", _f = "active", $1 = "fade", CC = "show", NF = "dropdown", dD = ".dropdown-toggle", kF = ".dropdown-menu", bC = `:not(${dD})`, LF = '.list-group, .nav, [role="tablist"]', MF = ".nav-item, .list-group-item", zF = `.nav-link${bC}, .list-group-item${bC}, [role="tab"]${bC}`, pD = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', TC = `${zF}, ${pD}`, UF = `.${_f}[data-bs-toggle="tab"], .${_f}[data-bs-toggle="pill"], .${_f}[data-bs-toggle="list"]`;
class Tp extends Go {
  constructor(a) {
    super(a), this._parent = this._element.closest(LF), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), ce.on(this._element, xF, (s) => this._keydown(s)));
  }
  // Getters
  static get NAME() {
    return _F;
  }
  // Public
  show() {
    const a = this._element;
    if (this._elemIsActive(a))
      return;
    const s = this._getActiveElem(), p = s ? ce.trigger(s, CF, {
      relatedTarget: a
    }) : null;
    ce.trigger(a, TF, {
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
        a.classList.add(CC);
        return;
      }
      a.removeAttribute("tabindex"), a.setAttribute("aria-selected", !0), this._toggleDropDown(a, !0), ce.trigger(a, wF, {
        relatedTarget: s
      });
    };
    this._queueCallback(p, a, a.classList.contains($1));
  }
  _deactivate(a, s) {
    if (!a)
      return;
    a.classList.remove(_f), a.blur(), this._deactivate(dt.getElementFromSelector(a));
    const p = () => {
      if (a.getAttribute("role") !== "tab") {
        a.classList.remove(CC);
        return;
      }
      a.setAttribute("aria-selected", !1), a.setAttribute("tabindex", "-1"), this._toggleDropDown(a, !1), ce.trigger(a, bF, {
        relatedTarget: s
      });
    };
    this._queueCallback(p, a, a.classList.contains($1));
  }
  _keydown(a) {
    if (![OF, F1, AF, I1, SC, H1].includes(a.key))
      return;
    a.stopPropagation(), a.preventDefault();
    const s = this._getChildren().filter((y) => !Ys(y));
    let p;
    if ([SC, H1].includes(a.key))
      p = s[a.key === SC ? 0 : s.length - 1];
    else {
      const y = [F1, I1].includes(a.key);
      p = ib(s, a.target, y, !0);
    }
    p && (p.focus({
      preventScroll: !0
    }), Tp.getOrCreateInstance(p).show());
  }
  _getChildren() {
    return dt.find(TC, this._parent);
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
    if (!p.classList.contains(NF))
      return;
    const y = (b, T) => {
      const E = dt.findOne(b, p);
      E && E.classList.toggle(T, s);
    };
    y(dD, _f), y(kF, CC), p.setAttribute("aria-expanded", s);
  }
  _setAttributeIfNotExists(a, s, p) {
    a.hasAttribute(s) || a.setAttribute(s, p);
  }
  _elemIsActive(a) {
    return a.classList.contains(_f);
  }
  // Try to get the inner element (usually the .nav-link)
  _getInnerElement(a) {
    return a.matches(TC) ? a : dt.findOne(TC, a);
  }
  // Try to get the outer element (usually the .nav-item)
  _getOuterElement(a) {
    return a.closest(MF) || a;
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
ce.on(document, RF, pD, function(f) {
  ["A", "AREA"].includes(this.tagName) && f.preventDefault(), !Ys(this) && Tp.getOrCreateInstance(this).show();
});
ce.on(window, DF, () => {
  for (const f of dt.find(UF))
    Tp.getOrCreateInstance(f);
});
co(Tp);
const PF = "toast", jF = "bs.toast", Qs = `.${jF}`, FF = `mouseover${Qs}`, IF = `mouseout${Qs}`, HF = `focusin${Qs}`, $F = `focusout${Qs}`, VF = `hide${Qs}`, BF = `hidden${Qs}`, YF = `show${Qs}`, WF = `shown${Qs}`, GF = "fade", V1 = "hide", Jy = "show", eE = "showing", KF = {
  animation: "boolean",
  autohide: "boolean",
  delay: "number"
}, QF = {
  animation: !0,
  autohide: !0,
  delay: 5e3
};
class Zv extends Go {
  constructor(a, s) {
    super(a, s), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners();
  }
  // Getters
  static get Default() {
    return QF;
  }
  static get DefaultType() {
    return KF;
  }
  static get NAME() {
    return PF;
  }
  // Public
  show() {
    if (ce.trigger(this._element, YF).defaultPrevented)
      return;
    this._clearTimeout(), this._config.animation && this._element.classList.add(GF);
    const s = () => {
      this._element.classList.remove(eE), ce.trigger(this._element, WF), this._maybeScheduleHide();
    };
    this._element.classList.remove(V1), Kv(this._element), this._element.classList.add(Jy, eE), this._queueCallback(s, this._element, this._config.animation);
  }
  hide() {
    if (!this.isShown() || ce.trigger(this._element, VF).defaultPrevented)
      return;
    const s = () => {
      this._element.classList.add(V1), this._element.classList.remove(eE, Jy), ce.trigger(this._element, BF);
    };
    this._element.classList.add(eE), this._queueCallback(s, this._element, this._config.animation);
  }
  dispose() {
    this._clearTimeout(), this.isShown() && this._element.classList.remove(Jy), super.dispose();
  }
  isShown() {
    return this._element.classList.contains(Jy);
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
    ce.on(this._element, FF, (a) => this._onInteraction(a, !0)), ce.on(this._element, IF, (a) => this._onInteraction(a, !1)), ce.on(this._element, HF, (a) => this._onInteraction(a, !0)), ce.on(this._element, $F, (a) => this._onInteraction(a, !1));
  }
  _clearTimeout() {
    clearTimeout(this._timeout), this._timeout = null;
  }
  // Static
  static jQueryInterface(a) {
    return this.each(function() {
      const s = Zv.getOrCreateInstance(this, a);
      if (typeof a == "string") {
        if (typeof s[a] > "u")
          throw new TypeError(`No method named "${a}"`);
        s[a](this);
      }
    });
  }
}
TE(Zv);
co(Zv);
const XF = ({ show: f, defaultZoom: a, rowIndex: s, colIndex: p, ...y }) => {
  const b = Xe.useContext(ri.Context), [T, E] = f !== void 0 ? [f, () => {
  }] : Xe.useState(!1), [x, O] = Xe.useState(a !== void 0 ? a : 1), A = Xe.useRef(null), z = Xe.useCallback((H) => {
    var Y;
    if (f !== void 0 && !y.onClosing) {
      console.log("Modal is controlled by parent, but no onClosing handler is provided."), H.preventDefault();
      return;
    }
    E(!1), (Y = y.onClosing) == null || Y.call(y, H);
  }, []);
  Xe.useEffect(() => {
    A.current && A.current.addEventListener("hide.bs.modal", z);
  }, [A.current]), Xe.useEffect(() => {
    if (!A.current)
      return;
    const H = new Tf(A.current, { keyboard: !0 });
    T ? (H.show(), O(1)) : H.hide();
  }, [T, f]);
  const F = Xe.useCallback((H) => {
    H.deltaY < 0 ? O(x + 0.1) : x > 0.15 && O(x - 0.1);
  }, [x, a]);
  return /* @__PURE__ */ ue.jsx(ue.Fragment, { children: /* @__PURE__ */ ue.jsx("div", { className: "modal fade", ref: A, id: "lightboxModalFullscreen", tabIndex: -1, children: /* @__PURE__ */ ue.jsx("div", { className: "modal-dialog modal-fullscreen", children: /* @__PURE__ */ ue.jsx("div", { className: "modal-content", style: { backgroundColor: "unset" }, children: /* @__PURE__ */ ue.jsxs("div", { className: "modal-body", children: [
    /* @__PURE__ */ ue.jsxs("div", { className: "position-absolute z-n1 top-0 left-0", style: { opacity: 0.7, zoom: 0.5 }, children: [
      /* @__PURE__ */ ue.jsxs("div", { className: "row", children: [
        /* @__PURE__ */ ue.jsx("div", { className: "col-auto bg-light", style: { minWidth: b.header.width, minHeight: b.header.height } }),
        /* @__PURE__ */ ue.jsx("div", { className: "col-auto bg-light p-1", children: /* @__PURE__ */ ue.jsx(Q1, { colIndex: p }) })
      ] }),
      /* @__PURE__ */ ue.jsx("div", { className: "row", children: /* @__PURE__ */ ue.jsx("div", { className: "col-auto bg-light p-1", children: /* @__PURE__ */ ue.jsx(fx, { rowIndex: s }) }) })
    ] }),
    /* @__PURE__ */ ue.jsx("div", { className: "m-0 w-100 h-100 d-flex align-items-center justify-content-center position-relative", style: { zoom: x, overflow: "hidden" }, onWheel: F, children: /* @__PURE__ */ ue.jsx(dx, { rowIndex: s, colIndex: p }) })
  ] }) }) }) }) });
}, qF = () => {
}, ZF = (f, a) => f.key === a || f.code === a || f.keyCode === a || f.which === a || f.charCode === a, JF = {
  eventTypes: ["keydown"],
  when: !0
};
function eI(f, a, s) {
  const p = Xe.useMemo(() => Array.isArray(f) ? f : [f], [f]), y = Xe.useMemo(() => Object.assign(Object.assign({}, JF), s), [s]), { when: b, eventTypes: T } = y, E = Xe.useRef(a), { target: x } = y;
  Xe.useEffect(() => {
    E.current = a;
  });
  const O = Xe.useCallback((A) => {
    p.some((z) => ZF(A, z)) && E.current(A);
  }, [p]);
  Xe.useEffect(() => {
    if (b && typeof window < "u")
      if (x) {
        const A = x.current;
        if (A) {
          for (const z of T)
            A.addEventListener(z, O);
          return () => {
            for (const z of T)
              A.removeEventListener(z, O);
          };
        }
      } else {
        for (const A of T)
          window.addEventListener(A, O);
        return () => {
          for (const A of T)
            window.removeEventListener(A, O);
        };
      }
    return qF;
  }, [b, T, p, x, a, O]);
}
const wp = ({ value: f, onChange: a, step: s = 1 }) => /* @__PURE__ */ ue.jsx("input", { type: "number", style: { width: "3rem" }, step: s, value: f, onChange: (p) => a(parseInt(p.target.value)) }), tI = ({ headerSettings: f, onChange: a }) => /* @__PURE__ */ ue.jsxs(ue.Fragment, { children: [
  "{",
  /* @__PURE__ */ ue.jsxs("div", { children: [
    '    "width": ',
    /* @__PURE__ */ ue.jsx(wp, { value: f.width, onChange: (s) => a({ ...f, width: s }), step: 8 }),
    ","
  ] }),
  /* @__PURE__ */ ue.jsxs("div", { children: [
    '    "height": ',
    /* @__PURE__ */ ue.jsx(wp, { value: f.height, onChange: (s) => a({ ...f, height: s }) })
  ] }),
  "}"
] }), nI = ({ cellSettings: f, onChange: a }) => /* @__PURE__ */ ue.jsxs(ue.Fragment, { children: [
  "{",
  /* @__PURE__ */ ue.jsxs("div", { children: [
    '    "width": ',
    /* @__PURE__ */ ue.jsx(wp, { value: f.width, onChange: (s) => a({ ...f, width: s }), step: 8 }),
    ","
  ] }),
  /* @__PURE__ */ ue.jsxs("div", { children: [
    '    "height": ',
    /* @__PURE__ */ ue.jsx(wp, { value: f.height, onChange: (s) => a({ ...f, height: s }), step: 8 })
  ] }),
  "}"
] }), rI = ({ gridSettings: f, setGridSettings: a }) => {
  const s = Xe.useRef(null);
  let p = [];
  const [y, b] = Xe.useState(!1);
  f.image && (f.header.width + f.cell.width * f.cols != f.image.naturalWidth && p.push(/* @__PURE__ */ ue.jsx("div", { children: "header.width + (cell.width * cols) != image.naturalWidth" }, "wrong-width")), f.header.height + f.cell.height * f.rows != f.image.naturalHeight && p.push(/* @__PURE__ */ ue.jsx("div", { children: "header.height + (cell.height * rows) != image.naturalHeight" }, "wrong-height")));
  const T = Xe.useCallback((x) => {
    let O = { ...f, ...x };
    if (f.image) {
      let A = f.image.naturalWidth, z = O.header.width, F = O.cell.width;
      x.cols !== void 0 && (F = Math.floor((A - z) / O.cols), F -= F % 8, z -= z + F * O.cols - A), x.cell !== void 0 && (F -= F % 8, O.cols = Math.floor(A / F), z = A - F * O.cols);
      let H = f.image.naturalHeight, Y = O.header.height, X = O.cell.height;
      x.rows !== void 0 && (X = Math.floor((H - Y) / O.rows), X -= X % 8, Y -= Y + X * O.rows - H), x.cell !== void 0 && (X -= X % 8, O.rows = Math.floor(H / X), Y = H - X * O.rows), O.header = { ...O.header, width: z, height: Y }, O.cell = { ...O.cell, width: F, height: X };
    }
    a(new ri(O)), b(!0);
  }, [f, a]), E = Xe.useCallback(() => {
    navigator.clipboard.writeText("window.gridSettings = " + JSON.stringify(f, null, 2) + ";"), s.current && new Zv(s.current).show();
  }, [f]);
  return /* @__PURE__ */ ue.jsxs("div", { className: "container", children: [
    /* @__PURE__ */ ue.jsx("div", { children: "{" }),
    /* @__PURE__ */ ue.jsxs("div", { children: [
      '  "header": ',
      /* @__PURE__ */ ue.jsx(tI, { headerSettings: f.header, onChange: (x) => T({ header: x }) }),
      ","
    ] }),
    /* @__PURE__ */ ue.jsxs("div", { children: [
      '  "cell": ',
      /* @__PURE__ */ ue.jsx(nI, { cellSettings: f.cell, onChange: (x) => T({ cell: x }) }),
      ","
    ] }),
    /* @__PURE__ */ ue.jsxs("div", { children: [
      '  "cols": ',
      /* @__PURE__ */ ue.jsx(wp, { value: f.cols, onChange: (x) => T({ cols: x }) }),
      ","
    ] }),
    /* @__PURE__ */ ue.jsxs("div", { children: [
      '  "rows": ',
      /* @__PURE__ */ ue.jsx(wp, { value: f.rows, onChange: (x) => T({ rows: x }) })
    ] }),
    /* @__PURE__ */ ue.jsx("div", { children: "}" }),
    /* @__PURE__ */ ue.jsxs("div", { className: "row", children: [
      /* @__PURE__ */ ue.jsx("div", { className: "col-auto text-bg-warning", style: { zIndex: 100, display: p.length > 0 ? "" : "none" }, children: p }),
      /* @__PURE__ */ ue.jsx("div", { className: "col-auto", children: /* @__PURE__ */ ue.jsx("button", { className: "btn btn-primary", style: { display: y ? "" : "none" }, onClick: E, children: "Copy" }) })
    ] }),
    /* @__PURE__ */ ue.jsx("div", { className: "toast-container p-3", children: /* @__PURE__ */ ue.jsxs("div", { className: "toast", role: "alert", ref: s, children: [
      /* @__PURE__ */ ue.jsxs("div", { className: "toast-header", children: [
        /* @__PURE__ */ ue.jsx("i", { className: "bi bi-clipboard-check" }),
        /* @__PURE__ */ ue.jsx("strong", { className: "me-auto", children: "GridSettings" }),
        /* @__PURE__ */ ue.jsx("button", { type: "button", className: "btn-close", "data-bs-dismiss": "toast", "aria-label": "Close" })
      ] }),
      /* @__PURE__ */ ue.jsx("div", { className: "toast-body", children: "設定用JSONをクリップボードにコピーしました" })
    ] }) })
  ] });
};
function iI() {
  const f = location.href.replace(/\.html?$/, ""), a = Xe.useRef(null), [s, p] = Xe.useState(new ri(window.gridSettings)), [y, b] = Xe.useState(!1), [T, E] = Xe.useState(0), [x, O] = Xe.useState(0), [A, z] = Xe.useState([]), F = Xe.useCallback((fe, xe) => {
    E(fe), O(xe), b(!0);
  }, [E, O, b]), H = Xe.useCallback(() => {
    b(!1);
  }, [b]);
  Xe.useEffect(() => {
    a.current && (console.log("Start image loading"), a.current.src = f + ".png");
  }, []);
  const Y = Xe.useCallback((fe) => {
    p(new ri({ ...s, image: fe.currentTarget })), console.log("Image loaded");
  }, [s]), X = Xe.useCallback((fe) => {
    if (y) {
      if (fe.key === "ArrowUp") {
        const xe = A.indexOf(T + 1);
        xe > 1 && E(A[xe - 1] - 1);
      }
      if (fe.key === "ArrowDown") {
        const xe = A.indexOf(T + 1);
        xe < A.length - 1 && E(A[xe + 1] - 1);
      }
      fe.key === "ArrowLeft" && x > 0 && O(x - 1), fe.key === "ArrowRight" && x < s.cols - 1 && O(x + 1);
    }
  }, [s, y, T, x, E, O]);
  return eI(["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], X), /* @__PURE__ */ ue.jsxs(ue.Fragment, { children: [
    /* @__PURE__ */ ue.jsx("img", { ref: a, style: { display: "none" }, onLoad: Y }),
    /* @__PURE__ */ ue.jsxs(ri.Context.Provider, { value: s, children: [
      /* @__PURE__ */ ue.jsx(px.Provider, { value: F, children: /* @__PURE__ */ ue.jsx(QM, { rowSortList: A, setRowSortList: z }) }),
      /* @__PURE__ */ ue.jsx(XF, { show: y, rowIndex: T, colIndex: x, onClosing: H })
    ] }),
    /* @__PURE__ */ ue.jsx("div", { className: "container position-absolute top-0 left-0", children: /* @__PURE__ */ ue.jsx(rI, { gridSettings: s, setGridSettings: p }) })
  ] });
}
window.gridSettings = new ri(window.gridSettings);
Lv.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ ue.jsx(oM.StrictMode, { children: /* @__PURE__ */ ue.jsx(iI, {}) })
);
//# sourceMappingURL=sd-grids-viewer.js.map
