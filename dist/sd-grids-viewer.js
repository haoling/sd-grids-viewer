var nN = Object.defineProperty;
var rN = (v, u, f) => u in v ? nN(v, u, { enumerable: !0, configurable: !0, writable: !0, value: f }) : v[u] = f;
var Ro = (v, u, f) => (rN(v, typeof u != "symbol" ? u + "" : u, f), f);
(function() {
  const u = document.createElement("link").relList;
  if (u && u.supports && u.supports("modulepreload"))
    return;
  for (const T of document.querySelectorAll('link[rel="modulepreload"]'))
    E(T);
  new MutationObserver((T) => {
    for (const O of T)
      if (O.type === "childList")
        for (const A of O.addedNodes)
          A.tagName === "LINK" && A.rel === "modulepreload" && E(A);
  }).observe(document, { childList: !0, subtree: !0 });
  function f(T) {
    const O = {};
    return T.integrity && (O.integrity = T.integrity), T.referrerPolicy && (O.referrerPolicy = T.referrerPolicy), T.crossOrigin === "use-credentials" ? O.credentials = "include" : T.crossOrigin === "anonymous" ? O.credentials = "omit" : O.credentials = "same-origin", O;
  }
  function E(T) {
    if (T.ep)
      return;
    T.ep = !0;
    const O = f(T);
    fetch(T.href, O);
  }
})();
function aN(v) {
  return v && v.__esModule && Object.prototype.hasOwnProperty.call(v, "default") ? v.default : v;
}
var l0 = { exports: {} }, Iv = {}, u0 = { exports: {} }, Gv = { exports: {} };
Gv.exports;
var mw;
function iN() {
  return mw || (mw = 1, function(v, u) {
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
      var E = "18.2.0", T = Symbol.for("react.element"), O = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), H = Symbol.for("react.profiler"), W = Symbol.for("react.provider"), z = Symbol.for("react.context"), le = Symbol.for("react.forward_ref"), q = Symbol.for("react.suspense"), te = Symbol.for("react.suspense_list"), ee = Symbol.for("react.memo"), ae = Symbol.for("react.lazy"), Te = Symbol.for("react.offscreen"), vt = Symbol.iterator, ct = "@@iterator";
      function ze(g) {
        if (g === null || typeof g != "object")
          return null;
        var R = vt && g[vt] || g[ct];
        return typeof R == "function" ? R : null;
      }
      var ve = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, je = {
        transition: null
      }, ce = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, Pe = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Ae = {}, wt = null;
      function gt(g) {
        wt = g;
      }
      Ae.setExtraStackFrame = function(g) {
        wt = g;
      }, Ae.getCurrentStack = null, Ae.getStackAddendum = function() {
        var g = "";
        wt && (g += wt);
        var R = Ae.getCurrentStack;
        return R && (g += R() || ""), g;
      };
      var yt = !1, lt = !1, St = !1, Ye = !1, nt = !1, it = {
        ReactCurrentDispatcher: ve,
        ReactCurrentBatchConfig: je,
        ReactCurrentOwner: Pe
      };
      it.ReactDebugCurrentFrame = Ae, it.ReactCurrentActQueue = ce;
      function Ge(g) {
        {
          for (var R = arguments.length, F = new Array(R > 1 ? R - 1 : 0), Y = 1; Y < R; Y++)
            F[Y - 1] = arguments[Y];
          _e("warn", g, F);
        }
      }
      function X(g) {
        {
          for (var R = arguments.length, F = new Array(R > 1 ? R - 1 : 0), Y = 1; Y < R; Y++)
            F[Y - 1] = arguments[Y];
          _e("error", g, F);
        }
      }
      function _e(g, R, F) {
        {
          var Y = it.ReactDebugCurrentFrame, fe = Y.getStackAddendum();
          fe !== "" && (R += "%s", F = F.concat([fe]));
          var Me = F.map(function(Re) {
            return String(Re);
          });
          Me.unshift("Warning: " + R), Function.prototype.apply.call(console[g], console, Me);
        }
      }
      var D = {};
      function Z(g, R) {
        {
          var F = g.constructor, Y = F && (F.displayName || F.name) || "ReactClass", fe = Y + "." + R;
          if (D[fe])
            return;
          X("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", R, Y), D[fe] = !0;
        }
      }
      var Ce = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(g) {
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
        enqueueForceUpdate: function(g, R, F) {
          Z(g, "forceUpdate");
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
        enqueueReplaceState: function(g, R, F, Y) {
          Z(g, "replaceState");
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
        enqueueSetState: function(g, R, F, Y) {
          Z(g, "setState");
        }
      }, We = Object.assign, Ie = {};
      Object.freeze(Ie);
      function ut(g, R, F) {
        this.props = g, this.context = R, this.refs = Ie, this.updater = F || Ce;
      }
      ut.prototype.isReactComponent = {}, ut.prototype.setState = function(g, R) {
        if (typeof g != "object" && typeof g != "function" && g != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, g, R, "setState");
      }, ut.prototype.forceUpdate = function(g) {
        this.updater.enqueueForceUpdate(this, g, "forceUpdate");
      };
      {
        var ft = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, Et = function(g, R) {
          Object.defineProperty(ut.prototype, g, {
            get: function() {
              Ge("%s(...) is deprecated in plain JavaScript React classes. %s", R[0], R[1]);
            }
          });
        };
        for (var ot in ft)
          ft.hasOwnProperty(ot) && Et(ot, ft[ot]);
      }
      function Kt() {
      }
      Kt.prototype = ut.prototype;
      function Qn(g, R, F) {
        this.props = g, this.context = R, this.refs = Ie, this.updater = F || Ce;
      }
      var Mn = Qn.prototype = new Kt();
      Mn.constructor = Qn, We(Mn, ut.prototype), Mn.isPureReactComponent = !0;
      function br() {
        var g = {
          current: null
        };
        return Object.seal(g), g;
      }
      var qn = Array.isArray;
      function hn(g) {
        return qn(g);
      }
      function Xn(g) {
        {
          var R = typeof Symbol == "function" && Symbol.toStringTag, F = R && g[Symbol.toStringTag] || g.constructor.name || "Object";
          return F;
        }
      }
      function Rn(g) {
        try {
          return En(g), !1;
        } catch {
          return !0;
        }
      }
      function En(g) {
        return "" + g;
      }
      function xn(g) {
        if (Rn(g))
          return X("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Xn(g)), En(g);
      }
      function cr(g, R, F) {
        var Y = g.displayName;
        if (Y)
          return Y;
        var fe = R.displayName || R.name || "";
        return fe !== "" ? F + "(" + fe + ")" : F;
      }
      function mn(g) {
        return g.displayName || "Context";
      }
      function yn(g) {
        if (g == null)
          return null;
        if (typeof g.tag == "number" && X("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof g == "function")
          return g.displayName || g.name || null;
        if (typeof g == "string")
          return g;
        switch (g) {
          case A:
            return "Fragment";
          case O:
            return "Portal";
          case H:
            return "Profiler";
          case _:
            return "StrictMode";
          case q:
            return "Suspense";
          case te:
            return "SuspenseList";
        }
        if (typeof g == "object")
          switch (g.$$typeof) {
            case z:
              var R = g;
              return mn(R) + ".Consumer";
            case W:
              var F = g;
              return mn(F._context) + ".Provider";
            case le:
              return cr(g, g.render, "ForwardRef");
            case ee:
              var Y = g.displayName || null;
              return Y !== null ? Y : yn(g.type) || "Memo";
            case ae: {
              var fe = g, Me = fe._payload, Re = fe._init;
              try {
                return yn(Re(Me));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var wr = Object.prototype.hasOwnProperty, Rr = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, In, xr, Bn;
      Bn = {};
      function rr(g) {
        if (wr.call(g, "ref")) {
          var R = Object.getOwnPropertyDescriptor(g, "ref").get;
          if (R && R.isReactWarning)
            return !1;
        }
        return g.ref !== void 0;
      }
      function en(g) {
        if (wr.call(g, "key")) {
          var R = Object.getOwnPropertyDescriptor(g, "key").get;
          if (R && R.isReactWarning)
            return !1;
        }
        return g.key !== void 0;
      }
      function va(g, R) {
        var F = function() {
          In || (In = !0, X("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
        };
        F.isReactWarning = !0, Object.defineProperty(g, "key", {
          get: F,
          configurable: !0
        });
      }
      function ha(g, R) {
        var F = function() {
          xr || (xr = !0, X("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
        };
        F.isReactWarning = !0, Object.defineProperty(g, "ref", {
          get: F,
          configurable: !0
        });
      }
      function ma(g) {
        if (typeof g.ref == "string" && Pe.current && g.__self && Pe.current.stateNode !== g.__self) {
          var R = yn(Pe.current.type);
          Bn[R] || (X('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', R, g.ref), Bn[R] = !0);
        }
      }
      var ge = function(g, R, F, Y, fe, Me, Re) {
        var rt = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: T,
          // Built-in properties that belong on the element
          type: g,
          key: R,
          ref: F,
          props: Re,
          // Record the component responsible for creating this element.
          _owner: Me
        };
        return rt._store = {}, Object.defineProperty(rt._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(rt, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: Y
        }), Object.defineProperty(rt, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: fe
        }), Object.freeze && (Object.freeze(rt.props), Object.freeze(rt)), rt;
      };
      function Be(g, R, F) {
        var Y, fe = {}, Me = null, Re = null, rt = null, bt = null;
        if (R != null) {
          rr(R) && (Re = R.ref, ma(R)), en(R) && (xn(R.key), Me = "" + R.key), rt = R.__self === void 0 ? null : R.__self, bt = R.__source === void 0 ? null : R.__source;
          for (Y in R)
            wr.call(R, Y) && !Rr.hasOwnProperty(Y) && (fe[Y] = R[Y]);
        }
        var Yt = arguments.length - 2;
        if (Yt === 1)
          fe.children = F;
        else if (Yt > 1) {
          for (var Qt = Array(Yt), qt = 0; qt < Yt; qt++)
            Qt[qt] = arguments[qt + 2];
          Object.freeze && Object.freeze(Qt), fe.children = Qt;
        }
        if (g && g.defaultProps) {
          var Xt = g.defaultProps;
          for (Y in Xt)
            fe[Y] === void 0 && (fe[Y] = Xt[Y]);
        }
        if (Me || Re) {
          var fn = typeof g == "function" ? g.displayName || g.name || "Unknown" : g;
          Me && va(fe, fn), Re && ha(fe, fn);
        }
        return ge(g, Me, Re, rt, bt, Pe.current, fe);
      }
      function Ct(g, R) {
        var F = ge(g.type, R, g.ref, g._self, g._source, g._owner, g.props);
        return F;
      }
      function It(g, R, F) {
        if (g == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + g + ".");
        var Y, fe = We({}, g.props), Me = g.key, Re = g.ref, rt = g._self, bt = g._source, Yt = g._owner;
        if (R != null) {
          rr(R) && (Re = R.ref, Yt = Pe.current), en(R) && (xn(R.key), Me = "" + R.key);
          var Qt;
          g.type && g.type.defaultProps && (Qt = g.type.defaultProps);
          for (Y in R)
            wr.call(R, Y) && !Rr.hasOwnProperty(Y) && (R[Y] === void 0 && Qt !== void 0 ? fe[Y] = Qt[Y] : fe[Y] = R[Y]);
        }
        var qt = arguments.length - 2;
        if (qt === 1)
          fe.children = F;
        else if (qt > 1) {
          for (var Xt = Array(qt), fn = 0; fn < qt; fn++)
            Xt[fn] = arguments[fn + 2];
          fe.children = Xt;
        }
        return ge(g.type, Me, Re, rt, bt, Yt, fe);
      }
      function Pt(g) {
        return typeof g == "object" && g !== null && g.$$typeof === T;
      }
      var zn = ".", _n = ":";
      function Dr(g) {
        var R = /[=:]/g, F = {
          "=": "=0",
          ":": "=2"
        }, Y = g.replace(R, function(fe) {
          return F[fe];
        });
        return "$" + Y;
      }
      var Gt = !1, ar = /\/+/g;
      function Bt(g) {
        return g.replace(ar, "$&/");
      }
      function rn(g, R) {
        return typeof g == "object" && g !== null && g.key != null ? (xn(g.key), Dr("" + g.key)) : R.toString(36);
      }
      function ri(g, R, F, Y, fe) {
        var Me = typeof g;
        (Me === "undefined" || Me === "boolean") && (g = null);
        var Re = !1;
        if (g === null)
          Re = !0;
        else
          switch (Me) {
            case "string":
            case "number":
              Re = !0;
              break;
            case "object":
              switch (g.$$typeof) {
                case T:
                case O:
                  Re = !0;
              }
          }
        if (Re) {
          var rt = g, bt = fe(rt), Yt = Y === "" ? zn + rn(rt, 0) : Y;
          if (hn(bt)) {
            var Qt = "";
            Yt != null && (Qt = Bt(Yt) + "/"), ri(bt, R, Qt, "", function(Wd) {
              return Wd;
            });
          } else
            bt != null && (Pt(bt) && (bt.key && (!rt || rt.key !== bt.key) && xn(bt.key), bt = Ct(
              bt,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              F + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (bt.key && (!rt || rt.key !== bt.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                Bt("" + bt.key) + "/"
              ) : "") + Yt
            )), R.push(bt));
          return 1;
        }
        var qt, Xt, fn = 0, Ut = Y === "" ? zn : Y + _n;
        if (hn(g))
          for (var Uo = 0; Uo < g.length; Uo++)
            qt = g[Uo], Xt = Ut + rn(qt, Uo), fn += ri(qt, R, F, Xt, fe);
        else {
          var yu = ze(g);
          if (typeof yu == "function") {
            var Ns = g;
            yu === Ns.entries && (Gt || Ge("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Gt = !0);
            for (var Ls = yu.call(Ns), Ji, Ms = 0; !(Ji = Ls.next()).done; )
              qt = Ji.value, Xt = Ut + rn(qt, Ms++), fn += ri(qt, R, F, Xt, fe);
          } else if (Me === "object") {
            var zs = String(g);
            throw new Error("Objects are not valid as a React child (found: " + (zs === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : zs) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return fn;
      }
      function Na(g, R, F) {
        if (g == null)
          return g;
        var Y = [], fe = 0;
        return ri(g, Y, "", "", function(Me) {
          return R.call(F, Me, fe++);
        }), Y;
      }
      function Do(g) {
        var R = 0;
        return Na(g, function() {
          R++;
        }), R;
      }
      function hl(g, R, F) {
        Na(g, function() {
          R.apply(this, arguments);
        }, F);
      }
      function ml(g) {
        return Na(g, function(R) {
          return R;
        }) || [];
      }
      function Oo(g) {
        if (!Pt(g))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return g;
      }
      function ai(g) {
        var R = {
          $$typeof: z,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: g,
          _currentValue2: g,
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
          $$typeof: W,
          _context: R
        };
        var F = !1, Y = !1, fe = !1;
        {
          var Me = {
            $$typeof: z,
            _context: R
          };
          Object.defineProperties(Me, {
            Provider: {
              get: function() {
                return Y || (Y = !0, X("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), R.Provider;
              },
              set: function(Re) {
                R.Provider = Re;
              }
            },
            _currentValue: {
              get: function() {
                return R._currentValue;
              },
              set: function(Re) {
                R._currentValue = Re;
              }
            },
            _currentValue2: {
              get: function() {
                return R._currentValue2;
              },
              set: function(Re) {
                R._currentValue2 = Re;
              }
            },
            _threadCount: {
              get: function() {
                return R._threadCount;
              },
              set: function(Re) {
                R._threadCount = Re;
              }
            },
            Consumer: {
              get: function() {
                return F || (F = !0, X("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), R.Consumer;
              }
            },
            displayName: {
              get: function() {
                return R.displayName;
              },
              set: function(Re) {
                fe || (Ge("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", Re), fe = !0);
              }
            }
          }), R.Consumer = Me;
        }
        return R._currentRenderer = null, R._currentRenderer2 = null, R;
      }
      var ii = -1, La = 0, Wi = 1, Wr = 2;
      function Kr(g) {
        if (g._status === ii) {
          var R = g._result, F = R();
          if (F.then(function(Me) {
            if (g._status === La || g._status === ii) {
              var Re = g;
              Re._status = Wi, Re._result = Me;
            }
          }, function(Me) {
            if (g._status === La || g._status === ii) {
              var Re = g;
              Re._status = Wr, Re._result = Me;
            }
          }), g._status === ii) {
            var Y = g;
            Y._status = La, Y._result = F;
          }
        }
        if (g._status === Wi) {
          var fe = g._result;
          return fe === void 0 && X(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, fe), "default" in fe || X(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, fe), fe.default;
        } else
          throw g._result;
      }
      function ya(g) {
        var R = {
          // We use these fields to store the result.
          _status: ii,
          _result: g
        }, F = {
          $$typeof: ae,
          _payload: R,
          _init: Kr
        };
        {
          var Y, fe;
          Object.defineProperties(F, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return Y;
              },
              set: function(Me) {
                X("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), Y = Me, Object.defineProperty(F, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return fe;
              },
              set: function(Me) {
                X("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), fe = Me, Object.defineProperty(F, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return F;
      }
      function Ki(g) {
        g != null && g.$$typeof === ee ? X("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof g != "function" ? X("forwardRef requires a render function but was given %s.", g === null ? "null" : typeof g) : g.length !== 0 && g.length !== 2 && X("forwardRef render functions accept exactly two parameters: props and ref. %s", g.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), g != null && (g.defaultProps != null || g.propTypes != null) && X("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var R = {
          $$typeof: le,
          render: g
        };
        {
          var F;
          Object.defineProperty(R, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return F;
            },
            set: function(Y) {
              F = Y, !g.name && !g.displayName && (g.displayName = Y);
            }
          });
        }
        return R;
      }
      var x;
      x = Symbol.for("react.module.reference");
      function re(g) {
        return !!(typeof g == "string" || typeof g == "function" || g === A || g === H || nt || g === _ || g === q || g === te || Ye || g === Te || yt || lt || St || typeof g == "object" && g !== null && (g.$$typeof === ae || g.$$typeof === ee || g.$$typeof === W || g.$$typeof === z || g.$$typeof === le || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        g.$$typeof === x || g.getModuleId !== void 0));
      }
      function me(g, R) {
        re(g) || X("memo: The first argument must be a component. Instead received: %s", g === null ? "null" : typeof g);
        var F = {
          $$typeof: ee,
          type: g,
          compare: R === void 0 ? null : R
        };
        {
          var Y;
          Object.defineProperty(F, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return Y;
            },
            set: function(fe) {
              Y = fe, !g.name && !g.displayName && (g.displayName = fe);
            }
          });
        }
        return F;
      }
      function Ee() {
        var g = ve.current;
        return g === null && X(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), g;
      }
      function xt(g) {
        var R = Ee();
        if (g._context !== void 0) {
          var F = g._context;
          F.Consumer === g ? X("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : F.Provider === g && X("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return R.useContext(g);
      }
      function kt(g) {
        var R = Ee();
        return R.useState(g);
      }
      function _t(g, R, F) {
        var Y = Ee();
        return Y.useReducer(g, R, F);
      }
      function Ke(g) {
        var R = Ee();
        return R.useRef(g);
      }
      function Yn(g, R) {
        var F = Ee();
        return F.useEffect(g, R);
      }
      function an(g, R) {
        var F = Ee();
        return F.useInsertionEffect(g, R);
      }
      function on(g, R) {
        var F = Ee();
        return F.useLayoutEffect(g, R);
      }
      function Or(g, R) {
        var F = Ee();
        return F.useCallback(g, R);
      }
      function Ei(g, R) {
        var F = Ee();
        return F.useMemo(g, R);
      }
      function ln(g, R, F) {
        var Y = Ee();
        return Y.useImperativeHandle(g, R, F);
      }
      function Gr(g, R) {
        {
          var F = Ee();
          return F.useDebugValue(g, R);
        }
      }
      function Ss() {
        var g = Ee();
        return g.useTransition();
      }
      function _i(g) {
        var R = Ee();
        return R.useDeferredValue(g);
      }
      function Tt() {
        var g = Ee();
        return g.useId();
      }
      function yl(g, R, F) {
        var Y = Ee();
        return Y.useSyncExternalStore(g, R, F);
      }
      var Gi = 0, Ao, Qr, Cs, Mr, Ts, bs, ws;
      function gl() {
      }
      gl.__reactDisabledLog = !0;
      function su() {
        {
          if (Gi === 0) {
            Ao = console.log, Qr = console.info, Cs = console.warn, Mr = console.error, Ts = console.group, bs = console.groupCollapsed, ws = console.groupEnd;
            var g = {
              configurable: !0,
              enumerable: !0,
              value: gl,
              writable: !0
            };
            Object.defineProperties(console, {
              info: g,
              log: g,
              warn: g,
              error: g,
              group: g,
              groupCollapsed: g,
              groupEnd: g
            });
          }
          Gi++;
        }
      }
      function Qi() {
        {
          if (Gi--, Gi === 0) {
            var g = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: We({}, g, {
                value: Ao
              }),
              info: We({}, g, {
                value: Qr
              }),
              warn: We({}, g, {
                value: Cs
              }),
              error: We({}, g, {
                value: Mr
              }),
              group: We({}, g, {
                value: Ts
              }),
              groupCollapsed: We({}, g, {
                value: bs
              }),
              groupEnd: We({}, g, {
                value: ws
              })
            });
          }
          Gi < 0 && X("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Si = it.ReactCurrentDispatcher, Ma;
      function ko(g, R, F) {
        {
          if (Ma === void 0)
            try {
              throw Error();
            } catch (fe) {
              var Y = fe.stack.trim().match(/\n( *(at )?)/);
              Ma = Y && Y[1] || "";
            }
          return `
` + Ma + g;
        }
      }
      var Ci = !1, El;
      {
        var _l = typeof WeakMap == "function" ? WeakMap : Map;
        El = new _l();
      }
      function No(g, R) {
        if (!g || Ci)
          return "";
        {
          var F = El.get(g);
          if (F !== void 0)
            return F;
        }
        var Y;
        Ci = !0;
        var fe = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Me;
        Me = Si.current, Si.current = null, su();
        try {
          if (R) {
            var Re = function() {
              throw Error();
            };
            if (Object.defineProperty(Re.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(Re, []);
              } catch (Ut) {
                Y = Ut;
              }
              Reflect.construct(g, [], Re);
            } else {
              try {
                Re.call();
              } catch (Ut) {
                Y = Ut;
              }
              g.call(Re.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Ut) {
              Y = Ut;
            }
            g();
          }
        } catch (Ut) {
          if (Ut && Y && typeof Ut.stack == "string") {
            for (var rt = Ut.stack.split(`
`), bt = Y.stack.split(`
`), Yt = rt.length - 1, Qt = bt.length - 1; Yt >= 1 && Qt >= 0 && rt[Yt] !== bt[Qt]; )
              Qt--;
            for (; Yt >= 1 && Qt >= 0; Yt--, Qt--)
              if (rt[Yt] !== bt[Qt]) {
                if (Yt !== 1 || Qt !== 1)
                  do
                    if (Yt--, Qt--, Qt < 0 || rt[Yt] !== bt[Qt]) {
                      var qt = `
` + rt[Yt].replace(" at new ", " at ");
                      return g.displayName && qt.includes("<anonymous>") && (qt = qt.replace("<anonymous>", g.displayName)), typeof g == "function" && El.set(g, qt), qt;
                    }
                  while (Yt >= 1 && Qt >= 0);
                break;
              }
          }
        } finally {
          Ci = !1, Si.current = Me, Qi(), Error.prepareStackTrace = fe;
        }
        var Xt = g ? g.displayName || g.name : "", fn = Xt ? ko(Xt) : "";
        return typeof g == "function" && El.set(g, fn), fn;
      }
      function Rs(g, R, F) {
        return No(g, !1);
      }
      function xs(g) {
        var R = g.prototype;
        return !!(R && R.isReactComponent);
      }
      function At(g, R, F) {
        if (g == null)
          return "";
        if (typeof g == "function")
          return No(g, xs(g));
        if (typeof g == "string")
          return ko(g);
        switch (g) {
          case q:
            return ko("Suspense");
          case te:
            return ko("SuspenseList");
        }
        if (typeof g == "object")
          switch (g.$$typeof) {
            case le:
              return Rs(g.render);
            case ee:
              return At(g.type, R, F);
            case ae: {
              var Y = g, fe = Y._payload, Me = Y._init;
              try {
                return At(Me(fe), R, F);
              } catch {
              }
            }
          }
        return "";
      }
      var Ds = {}, cu = it.ReactDebugCurrentFrame;
      function Lo(g) {
        if (g) {
          var R = g._owner, F = At(g.type, g._source, R ? R.type : null);
          cu.setExtraStackFrame(F);
        } else
          cu.setExtraStackFrame(null);
      }
      function Os(g, R, F, Y, fe) {
        {
          var Me = Function.call.bind(wr);
          for (var Re in g)
            if (Me(g, Re)) {
              var rt = void 0;
              try {
                if (typeof g[Re] != "function") {
                  var bt = Error((Y || "React class") + ": " + F + " type `" + Re + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof g[Re] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw bt.name = "Invariant Violation", bt;
                }
                rt = g[Re](R, Re, Y, F, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Yt) {
                rt = Yt;
              }
              rt && !(rt instanceof Error) && (Lo(fe), X("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Y || "React class", F, Re, typeof rt), Lo(null)), rt instanceof Error && !(rt.message in Ds) && (Ds[rt.message] = !0, Lo(fe), X("Failed %s type: %s", F, rt.message), Lo(null));
            }
        }
      }
      function zt(g) {
        if (g) {
          var R = g._owner, F = At(g.type, g._source, R ? R.type : null);
          gt(F);
        } else
          gt(null);
      }
      var fu;
      fu = !1;
      function Sl() {
        if (Pe.current) {
          var g = yn(Pe.current.type);
          if (g)
            return `

Check the render method of \`` + g + "`.";
        }
        return "";
      }
      function st(g) {
        if (g !== void 0) {
          var R = g.fileName.replace(/^.*[\\\/]/, ""), F = g.lineNumber;
          return `

Check your code at ` + R + ":" + F + ".";
        }
        return "";
      }
      function oi(g) {
        return g != null ? st(g.__source) : "";
      }
      var Sn = {};
      function qr(g) {
        var R = Sl();
        if (!R) {
          var F = typeof g == "string" ? g : g.displayName || g.name;
          F && (R = `

Check the top-level render call using <` + F + ">.");
        }
        return R;
      }
      function za(g, R) {
        if (!(!g._store || g._store.validated || g.key != null)) {
          g._store.validated = !0;
          var F = qr(R);
          if (!Sn[F]) {
            Sn[F] = !0;
            var Y = "";
            g && g._owner && g._owner !== Pe.current && (Y = " It was passed a child from " + yn(g._owner.type) + "."), zt(g), X('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', F, Y), zt(null);
          }
        }
      }
      function Mo(g, R) {
        if (typeof g == "object") {
          if (hn(g))
            for (var F = 0; F < g.length; F++) {
              var Y = g[F];
              Pt(Y) && za(Y, R);
            }
          else if (Pt(g))
            g._store && (g._store.validated = !0);
          else if (g) {
            var fe = ze(g);
            if (typeof fe == "function" && fe !== g.entries)
              for (var Me = fe.call(g), Re; !(Re = Me.next()).done; )
                Pt(Re.value) && za(Re.value, R);
          }
        }
      }
      function cn(g) {
        {
          var R = g.type;
          if (R == null || typeof R == "string")
            return;
          var F;
          if (typeof R == "function")
            F = R.propTypes;
          else if (typeof R == "object" && (R.$$typeof === le || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          R.$$typeof === ee))
            F = R.propTypes;
          else
            return;
          if (F) {
            var Y = yn(R);
            Os(F, g.props, "prop", Y, g);
          } else if (R.PropTypes !== void 0 && !fu) {
            fu = !0;
            var fe = yn(R);
            X("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", fe || "Unknown");
          }
          typeof R.getDefaultProps == "function" && !R.getDefaultProps.isReactClassApproved && X("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Cn(g) {
        {
          for (var R = Object.keys(g.props), F = 0; F < R.length; F++) {
            var Y = R[F];
            if (Y !== "children" && Y !== "key") {
              zt(g), X("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Y), zt(null);
              break;
            }
          }
          g.ref !== null && (zt(g), X("Invalid attribute `ref` supplied to `React.Fragment`."), zt(null));
        }
      }
      function As(g, R, F) {
        var Y = re(g);
        if (!Y) {
          var fe = "";
          (g === void 0 || typeof g == "object" && g !== null && Object.keys(g).length === 0) && (fe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Me = oi(R);
          Me ? fe += Me : fe += Sl();
          var Re;
          g === null ? Re = "null" : hn(g) ? Re = "array" : g !== void 0 && g.$$typeof === T ? (Re = "<" + (yn(g.type) || "Unknown") + " />", fe = " Did you accidentally export a JSX literal instead of a component?") : Re = typeof g, X("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Re, fe);
        }
        var rt = Be.apply(this, arguments);
        if (rt == null)
          return rt;
        if (Y)
          for (var bt = 2; bt < arguments.length; bt++)
            Mo(arguments[bt], g);
        return g === A ? Cn(rt) : cn(rt), rt;
      }
      var fr = !1;
      function Xr(g) {
        var R = As.bind(null, g);
        return R.type = g, fr || (fr = !0, Ge("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(R, "type", {
          enumerable: !1,
          get: function() {
            return Ge("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: g
            }), g;
          }
        }), R;
      }
      function li(g, R, F) {
        for (var Y = It.apply(this, arguments), fe = 2; fe < arguments.length; fe++)
          Mo(arguments[fe], Y.type);
        return cn(Y), Y;
      }
      function du(g, R) {
        var F = je.transition;
        je.transition = {};
        var Y = je.transition;
        je.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          g();
        } finally {
          if (je.transition = F, F === null && Y._updatedFibers) {
            var fe = Y._updatedFibers.size;
            fe > 10 && Ge("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), Y._updatedFibers.clear();
          }
        }
      }
      var Cl = !1, Tl = null;
      function zo(g) {
        if (Tl === null)
          try {
            var R = ("require" + Math.random()).slice(0, 7), F = v && v[R];
            Tl = F.call(v, "timers").setImmediate;
          } catch {
            Tl = function(fe) {
              Cl === !1 && (Cl = !0, typeof MessageChannel > "u" && X("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Me = new MessageChannel();
              Me.port1.onmessage = fe, Me.port2.postMessage(void 0);
            };
          }
        return Tl(g);
      }
      var Ua = 0, qi = !1;
      function pu(g) {
        {
          var R = Ua;
          Ua++, ce.current === null && (ce.current = []);
          var F = ce.isBatchingLegacy, Y;
          try {
            if (ce.isBatchingLegacy = !0, Y = g(), !F && ce.didScheduleLegacyUpdate) {
              var fe = ce.current;
              fe !== null && (ce.didScheduleLegacyUpdate = !1, Zi(fe));
            }
          } catch (Xt) {
            throw Xi(R), Xt;
          } finally {
            ce.isBatchingLegacy = F;
          }
          if (Y !== null && typeof Y == "object" && typeof Y.then == "function") {
            var Me = Y, Re = !1, rt = {
              then: function(Xt, fn) {
                Re = !0, Me.then(function(Ut) {
                  Xi(R), Ua === 0 ? vu(Ut, Xt, fn) : Xt(Ut);
                }, function(Ut) {
                  Xi(R), fn(Ut);
                });
              }
            };
            return !qi && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              Re || (qi = !0, X("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), rt;
          } else {
            var bt = Y;
            if (Xi(R), Ua === 0) {
              var Yt = ce.current;
              Yt !== null && (Zi(Yt), ce.current = null);
              var Qt = {
                then: function(Xt, fn) {
                  ce.current === null ? (ce.current = [], vu(bt, Xt, fn)) : Xt(bt);
                }
              };
              return Qt;
            } else {
              var qt = {
                then: function(Xt, fn) {
                  Xt(bt);
                }
              };
              return qt;
            }
          }
        }
      }
      function Xi(g) {
        g !== Ua - 1 && X("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ua = g;
      }
      function vu(g, R, F) {
        {
          var Y = ce.current;
          if (Y !== null)
            try {
              Zi(Y), zo(function() {
                Y.length === 0 ? (ce.current = null, R(g)) : vu(g, R, F);
              });
            } catch (fe) {
              F(fe);
            }
          else
            R(g);
        }
      }
      var Ti = !1;
      function Zi(g) {
        if (!Ti) {
          Ti = !0;
          var R = 0;
          try {
            for (; R < g.length; R++) {
              var F = g[R];
              do
                F = F(!0);
              while (F !== null);
            }
            g.length = 0;
          } catch (Y) {
            throw g = g.slice(R + 1), Y;
          } finally {
            Ti = !1;
          }
        }
      }
      var hu = As, ks = li, ui = Xr, mu = {
        map: Na,
        forEach: hl,
        count: Do,
        toArray: ml,
        only: Oo
      };
      u.Children = mu, u.Component = ut, u.Fragment = A, u.Profiler = H, u.PureComponent = Qn, u.StrictMode = _, u.Suspense = q, u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = it, u.cloneElement = ks, u.createContext = ai, u.createElement = hu, u.createFactory = ui, u.createRef = br, u.forwardRef = Ki, u.isValidElement = Pt, u.lazy = ya, u.memo = me, u.startTransition = du, u.unstable_act = pu, u.useCallback = Or, u.useContext = xt, u.useDebugValue = Gr, u.useDeferredValue = _i, u.useEffect = Yn, u.useId = Tt, u.useImperativeHandle = ln, u.useInsertionEffect = an, u.useLayoutEffect = on, u.useMemo = Ei, u.useReducer = _t, u.useRef = Ke, u.useState = kt, u.useSyncExternalStore = yl, u.useTransition = Ss, u.version = E, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Gv, Gv.exports)), Gv.exports;
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
var yw;
function oN() {
  if (yw)
    return Mt;
  yw = 1;
  var v = Symbol.for("react.element"), u = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), O = Symbol.for("react.provider"), A = Symbol.for("react.context"), _ = Symbol.for("react.forward_ref"), H = Symbol.for("react.suspense"), W = Symbol.for("react.memo"), z = Symbol.for("react.lazy"), le = Symbol.iterator;
  function q(D) {
    return D === null || typeof D != "object" ? null : (D = le && D[le] || D["@@iterator"], typeof D == "function" ? D : null);
  }
  var te = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, ee = Object.assign, ae = {};
  function Te(D, Z, Ce) {
    this.props = D, this.context = Z, this.refs = ae, this.updater = Ce || te;
  }
  Te.prototype.isReactComponent = {}, Te.prototype.setState = function(D, Z) {
    if (typeof D != "object" && typeof D != "function" && D != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, D, Z, "setState");
  }, Te.prototype.forceUpdate = function(D) {
    this.updater.enqueueForceUpdate(this, D, "forceUpdate");
  };
  function vt() {
  }
  vt.prototype = Te.prototype;
  function ct(D, Z, Ce) {
    this.props = D, this.context = Z, this.refs = ae, this.updater = Ce || te;
  }
  var ze = ct.prototype = new vt();
  ze.constructor = ct, ee(ze, Te.prototype), ze.isPureReactComponent = !0;
  var ve = Array.isArray, je = Object.prototype.hasOwnProperty, ce = { current: null }, Pe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ae(D, Z, Ce) {
    var We, Ie = {}, ut = null, ft = null;
    if (Z != null)
      for (We in Z.ref !== void 0 && (ft = Z.ref), Z.key !== void 0 && (ut = "" + Z.key), Z)
        je.call(Z, We) && !Pe.hasOwnProperty(We) && (Ie[We] = Z[We]);
    var Et = arguments.length - 2;
    if (Et === 1)
      Ie.children = Ce;
    else if (1 < Et) {
      for (var ot = Array(Et), Kt = 0; Kt < Et; Kt++)
        ot[Kt] = arguments[Kt + 2];
      Ie.children = ot;
    }
    if (D && D.defaultProps)
      for (We in Et = D.defaultProps, Et)
        Ie[We] === void 0 && (Ie[We] = Et[We]);
    return { $$typeof: v, type: D, key: ut, ref: ft, props: Ie, _owner: ce.current };
  }
  function wt(D, Z) {
    return { $$typeof: v, type: D.type, key: Z, ref: D.ref, props: D.props, _owner: D._owner };
  }
  function gt(D) {
    return typeof D == "object" && D !== null && D.$$typeof === v;
  }
  function yt(D) {
    var Z = { "=": "=0", ":": "=2" };
    return "$" + D.replace(/[=:]/g, function(Ce) {
      return Z[Ce];
    });
  }
  var lt = /\/+/g;
  function St(D, Z) {
    return typeof D == "object" && D !== null && D.key != null ? yt("" + D.key) : Z.toString(36);
  }
  function Ye(D, Z, Ce, We, Ie) {
    var ut = typeof D;
    (ut === "undefined" || ut === "boolean") && (D = null);
    var ft = !1;
    if (D === null)
      ft = !0;
    else
      switch (ut) {
        case "string":
        case "number":
          ft = !0;
          break;
        case "object":
          switch (D.$$typeof) {
            case v:
            case u:
              ft = !0;
          }
      }
    if (ft)
      return ft = D, Ie = Ie(ft), D = We === "" ? "." + St(ft, 0) : We, ve(Ie) ? (Ce = "", D != null && (Ce = D.replace(lt, "$&/") + "/"), Ye(Ie, Z, Ce, "", function(Kt) {
        return Kt;
      })) : Ie != null && (gt(Ie) && (Ie = wt(Ie, Ce + (!Ie.key || ft && ft.key === Ie.key ? "" : ("" + Ie.key).replace(lt, "$&/") + "/") + D)), Z.push(Ie)), 1;
    if (ft = 0, We = We === "" ? "." : We + ":", ve(D))
      for (var Et = 0; Et < D.length; Et++) {
        ut = D[Et];
        var ot = We + St(ut, Et);
        ft += Ye(ut, Z, Ce, ot, Ie);
      }
    else if (ot = q(D), typeof ot == "function")
      for (D = ot.call(D), Et = 0; !(ut = D.next()).done; )
        ut = ut.value, ot = We + St(ut, Et++), ft += Ye(ut, Z, Ce, ot, Ie);
    else if (ut === "object")
      throw Z = String(D), Error("Objects are not valid as a React child (found: " + (Z === "[object Object]" ? "object with keys {" + Object.keys(D).join(", ") + "}" : Z) + "). If you meant to render a collection of children, use an array instead.");
    return ft;
  }
  function nt(D, Z, Ce) {
    if (D == null)
      return D;
    var We = [], Ie = 0;
    return Ye(D, We, "", "", function(ut) {
      return Z.call(Ce, ut, Ie++);
    }), We;
  }
  function it(D) {
    if (D._status === -1) {
      var Z = D._result;
      Z = Z(), Z.then(function(Ce) {
        (D._status === 0 || D._status === -1) && (D._status = 1, D._result = Ce);
      }, function(Ce) {
        (D._status === 0 || D._status === -1) && (D._status = 2, D._result = Ce);
      }), D._status === -1 && (D._status = 0, D._result = Z);
    }
    if (D._status === 1)
      return D._result.default;
    throw D._result;
  }
  var Ge = { current: null }, X = { transition: null }, _e = { ReactCurrentDispatcher: Ge, ReactCurrentBatchConfig: X, ReactCurrentOwner: ce };
  return Mt.Children = { map: nt, forEach: function(D, Z, Ce) {
    nt(D, function() {
      Z.apply(this, arguments);
    }, Ce);
  }, count: function(D) {
    var Z = 0;
    return nt(D, function() {
      Z++;
    }), Z;
  }, toArray: function(D) {
    return nt(D, function(Z) {
      return Z;
    }) || [];
  }, only: function(D) {
    if (!gt(D))
      throw Error("React.Children.only expected to receive a single React element child.");
    return D;
  } }, Mt.Component = Te, Mt.Fragment = f, Mt.Profiler = T, Mt.PureComponent = ct, Mt.StrictMode = E, Mt.Suspense = H, Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _e, Mt.cloneElement = function(D, Z, Ce) {
    if (D == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + D + ".");
    var We = ee({}, D.props), Ie = D.key, ut = D.ref, ft = D._owner;
    if (Z != null) {
      if (Z.ref !== void 0 && (ut = Z.ref, ft = ce.current), Z.key !== void 0 && (Ie = "" + Z.key), D.type && D.type.defaultProps)
        var Et = D.type.defaultProps;
      for (ot in Z)
        je.call(Z, ot) && !Pe.hasOwnProperty(ot) && (We[ot] = Z[ot] === void 0 && Et !== void 0 ? Et[ot] : Z[ot]);
    }
    var ot = arguments.length - 2;
    if (ot === 1)
      We.children = Ce;
    else if (1 < ot) {
      Et = Array(ot);
      for (var Kt = 0; Kt < ot; Kt++)
        Et[Kt] = arguments[Kt + 2];
      We.children = Et;
    }
    return { $$typeof: v, type: D.type, key: Ie, ref: ut, props: We, _owner: ft };
  }, Mt.createContext = function(D) {
    return D = { $$typeof: A, _currentValue: D, _currentValue2: D, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, D.Provider = { $$typeof: O, _context: D }, D.Consumer = D;
  }, Mt.createElement = Ae, Mt.createFactory = function(D) {
    var Z = Ae.bind(null, D);
    return Z.type = D, Z;
  }, Mt.createRef = function() {
    return { current: null };
  }, Mt.forwardRef = function(D) {
    return { $$typeof: _, render: D };
  }, Mt.isValidElement = gt, Mt.lazy = function(D) {
    return { $$typeof: z, _payload: { _status: -1, _result: D }, _init: it };
  }, Mt.memo = function(D, Z) {
    return { $$typeof: W, type: D, compare: Z === void 0 ? null : Z };
  }, Mt.startTransition = function(D) {
    var Z = X.transition;
    X.transition = {};
    try {
      D();
    } finally {
      X.transition = Z;
    }
  }, Mt.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, Mt.useCallback = function(D, Z) {
    return Ge.current.useCallback(D, Z);
  }, Mt.useContext = function(D) {
    return Ge.current.useContext(D);
  }, Mt.useDebugValue = function() {
  }, Mt.useDeferredValue = function(D) {
    return Ge.current.useDeferredValue(D);
  }, Mt.useEffect = function(D, Z) {
    return Ge.current.useEffect(D, Z);
  }, Mt.useId = function() {
    return Ge.current.useId();
  }, Mt.useImperativeHandle = function(D, Z, Ce) {
    return Ge.current.useImperativeHandle(D, Z, Ce);
  }, Mt.useInsertionEffect = function(D, Z) {
    return Ge.current.useInsertionEffect(D, Z);
  }, Mt.useLayoutEffect = function(D, Z) {
    return Ge.current.useLayoutEffect(D, Z);
  }, Mt.useMemo = function(D, Z) {
    return Ge.current.useMemo(D, Z);
  }, Mt.useReducer = function(D, Z, Ce) {
    return Ge.current.useReducer(D, Z, Ce);
  }, Mt.useRef = function(D) {
    return Ge.current.useRef(D);
  }, Mt.useState = function(D) {
    return Ge.current.useState(D);
  }, Mt.useSyncExternalStore = function(D, Z, Ce) {
    return Ge.current.useSyncExternalStore(D, Z, Ce);
  }, Mt.useTransition = function() {
    return Ge.current.useTransition();
  }, Mt.version = "18.2.0", Mt;
}
var lN = {};
lN.NODE_ENV === "production" ? u0.exports = oN() : u0.exports = iN();
var Rt = u0.exports;
const uN = /* @__PURE__ */ aN(Rt);
var gw;
function sN() {
  if (gw)
    return Iv;
  gw = 1;
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
    var u = Rt, f = Symbol.for("react.element"), E = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), O = Symbol.for("react.strict_mode"), A = Symbol.for("react.profiler"), _ = Symbol.for("react.provider"), H = Symbol.for("react.context"), W = Symbol.for("react.forward_ref"), z = Symbol.for("react.suspense"), le = Symbol.for("react.suspense_list"), q = Symbol.for("react.memo"), te = Symbol.for("react.lazy"), ee = Symbol.for("react.offscreen"), ae = Symbol.iterator, Te = "@@iterator";
    function vt(x) {
      if (x === null || typeof x != "object")
        return null;
      var re = ae && x[ae] || x[Te];
      return typeof re == "function" ? re : null;
    }
    var ct = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function ze(x) {
      {
        for (var re = arguments.length, me = new Array(re > 1 ? re - 1 : 0), Ee = 1; Ee < re; Ee++)
          me[Ee - 1] = arguments[Ee];
        ve("error", x, me);
      }
    }
    function ve(x, re, me) {
      {
        var Ee = ct.ReactDebugCurrentFrame, xt = Ee.getStackAddendum();
        xt !== "" && (re += "%s", me = me.concat([xt]));
        var kt = me.map(function(_t) {
          return String(_t);
        });
        kt.unshift("Warning: " + re), Function.prototype.apply.call(console[x], console, kt);
      }
    }
    var je = !1, ce = !1, Pe = !1, Ae = !1, wt = !1, gt;
    gt = Symbol.for("react.module.reference");
    function yt(x) {
      return !!(typeof x == "string" || typeof x == "function" || x === T || x === A || wt || x === O || x === z || x === le || Ae || x === ee || je || ce || Pe || typeof x == "object" && x !== null && (x.$$typeof === te || x.$$typeof === q || x.$$typeof === _ || x.$$typeof === H || x.$$typeof === W || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      x.$$typeof === gt || x.getModuleId !== void 0));
    }
    function lt(x, re, me) {
      var Ee = x.displayName;
      if (Ee)
        return Ee;
      var xt = re.displayName || re.name || "";
      return xt !== "" ? me + "(" + xt + ")" : me;
    }
    function St(x) {
      return x.displayName || "Context";
    }
    function Ye(x) {
      if (x == null)
        return null;
      if (typeof x.tag == "number" && ze("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof x == "function")
        return x.displayName || x.name || null;
      if (typeof x == "string")
        return x;
      switch (x) {
        case T:
          return "Fragment";
        case E:
          return "Portal";
        case A:
          return "Profiler";
        case O:
          return "StrictMode";
        case z:
          return "Suspense";
        case le:
          return "SuspenseList";
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case H:
            var re = x;
            return St(re) + ".Consumer";
          case _:
            var me = x;
            return St(me._context) + ".Provider";
          case W:
            return lt(x, x.render, "ForwardRef");
          case q:
            var Ee = x.displayName || null;
            return Ee !== null ? Ee : Ye(x.type) || "Memo";
          case te: {
            var xt = x, kt = xt._payload, _t = xt._init;
            try {
              return Ye(_t(kt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var nt = Object.assign, it = 0, Ge, X, _e, D, Z, Ce, We;
    function Ie() {
    }
    Ie.__reactDisabledLog = !0;
    function ut() {
      {
        if (it === 0) {
          Ge = console.log, X = console.info, _e = console.warn, D = console.error, Z = console.group, Ce = console.groupCollapsed, We = console.groupEnd;
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
        it++;
      }
    }
    function ft() {
      {
        if (it--, it === 0) {
          var x = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: nt({}, x, {
              value: Ge
            }),
            info: nt({}, x, {
              value: X
            }),
            warn: nt({}, x, {
              value: _e
            }),
            error: nt({}, x, {
              value: D
            }),
            group: nt({}, x, {
              value: Z
            }),
            groupCollapsed: nt({}, x, {
              value: Ce
            }),
            groupEnd: nt({}, x, {
              value: We
            })
          });
        }
        it < 0 && ze("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Et = ct.ReactCurrentDispatcher, ot;
    function Kt(x, re, me) {
      {
        if (ot === void 0)
          try {
            throw Error();
          } catch (xt) {
            var Ee = xt.stack.trim().match(/\n( *(at )?)/);
            ot = Ee && Ee[1] || "";
          }
        return `
` + ot + x;
      }
    }
    var Qn = !1, Mn;
    {
      var br = typeof WeakMap == "function" ? WeakMap : Map;
      Mn = new br();
    }
    function qn(x, re) {
      if (!x || Qn)
        return "";
      {
        var me = Mn.get(x);
        if (me !== void 0)
          return me;
      }
      var Ee;
      Qn = !0;
      var xt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var kt;
      kt = Et.current, Et.current = null, ut();
      try {
        if (re) {
          var _t = function() {
            throw Error();
          };
          if (Object.defineProperty(_t.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(_t, []);
            } catch (Gr) {
              Ee = Gr;
            }
            Reflect.construct(x, [], _t);
          } else {
            try {
              _t.call();
            } catch (Gr) {
              Ee = Gr;
            }
            x.call(_t.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Gr) {
            Ee = Gr;
          }
          x();
        }
      } catch (Gr) {
        if (Gr && Ee && typeof Gr.stack == "string") {
          for (var Ke = Gr.stack.split(`
`), Yn = Ee.stack.split(`
`), an = Ke.length - 1, on = Yn.length - 1; an >= 1 && on >= 0 && Ke[an] !== Yn[on]; )
            on--;
          for (; an >= 1 && on >= 0; an--, on--)
            if (Ke[an] !== Yn[on]) {
              if (an !== 1 || on !== 1)
                do
                  if (an--, on--, on < 0 || Ke[an] !== Yn[on]) {
                    var Or = `
` + Ke[an].replace(" at new ", " at ");
                    return x.displayName && Or.includes("<anonymous>") && (Or = Or.replace("<anonymous>", x.displayName)), typeof x == "function" && Mn.set(x, Or), Or;
                  }
                while (an >= 1 && on >= 0);
              break;
            }
        }
      } finally {
        Qn = !1, Et.current = kt, ft(), Error.prepareStackTrace = xt;
      }
      var Ei = x ? x.displayName || x.name : "", ln = Ei ? Kt(Ei) : "";
      return typeof x == "function" && Mn.set(x, ln), ln;
    }
    function hn(x, re, me) {
      return qn(x, !1);
    }
    function Xn(x) {
      var re = x.prototype;
      return !!(re && re.isReactComponent);
    }
    function Rn(x, re, me) {
      if (x == null)
        return "";
      if (typeof x == "function")
        return qn(x, Xn(x));
      if (typeof x == "string")
        return Kt(x);
      switch (x) {
        case z:
          return Kt("Suspense");
        case le:
          return Kt("SuspenseList");
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case W:
            return hn(x.render);
          case q:
            return Rn(x.type, re, me);
          case te: {
            var Ee = x, xt = Ee._payload, kt = Ee._init;
            try {
              return Rn(kt(xt), re, me);
            } catch {
            }
          }
        }
      return "";
    }
    var En = Object.prototype.hasOwnProperty, xn = {}, cr = ct.ReactDebugCurrentFrame;
    function mn(x) {
      if (x) {
        var re = x._owner, me = Rn(x.type, x._source, re ? re.type : null);
        cr.setExtraStackFrame(me);
      } else
        cr.setExtraStackFrame(null);
    }
    function yn(x, re, me, Ee, xt) {
      {
        var kt = Function.call.bind(En);
        for (var _t in x)
          if (kt(x, _t)) {
            var Ke = void 0;
            try {
              if (typeof x[_t] != "function") {
                var Yn = Error((Ee || "React class") + ": " + me + " type `" + _t + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof x[_t] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Yn.name = "Invariant Violation", Yn;
              }
              Ke = x[_t](re, _t, Ee, me, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (an) {
              Ke = an;
            }
            Ke && !(Ke instanceof Error) && (mn(xt), ze("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Ee || "React class", me, _t, typeof Ke), mn(null)), Ke instanceof Error && !(Ke.message in xn) && (xn[Ke.message] = !0, mn(xt), ze("Failed %s type: %s", me, Ke.message), mn(null));
          }
      }
    }
    var wr = Array.isArray;
    function Rr(x) {
      return wr(x);
    }
    function In(x) {
      {
        var re = typeof Symbol == "function" && Symbol.toStringTag, me = re && x[Symbol.toStringTag] || x.constructor.name || "Object";
        return me;
      }
    }
    function xr(x) {
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
      if (xr(x))
        return ze("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", In(x)), Bn(x);
    }
    var en = ct.ReactCurrentOwner, va = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ha, ma, ge;
    ge = {};
    function Be(x) {
      if (En.call(x, "ref")) {
        var re = Object.getOwnPropertyDescriptor(x, "ref").get;
        if (re && re.isReactWarning)
          return !1;
      }
      return x.ref !== void 0;
    }
    function Ct(x) {
      if (En.call(x, "key")) {
        var re = Object.getOwnPropertyDescriptor(x, "key").get;
        if (re && re.isReactWarning)
          return !1;
      }
      return x.key !== void 0;
    }
    function It(x, re) {
      if (typeof x.ref == "string" && en.current && re && en.current.stateNode !== re) {
        var me = Ye(en.current.type);
        ge[me] || (ze('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Ye(en.current.type), x.ref), ge[me] = !0);
      }
    }
    function Pt(x, re) {
      {
        var me = function() {
          ha || (ha = !0, ze("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", re));
        };
        me.isReactWarning = !0, Object.defineProperty(x, "key", {
          get: me,
          configurable: !0
        });
      }
    }
    function zn(x, re) {
      {
        var me = function() {
          ma || (ma = !0, ze("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", re));
        };
        me.isReactWarning = !0, Object.defineProperty(x, "ref", {
          get: me,
          configurable: !0
        });
      }
    }
    var _n = function(x, re, me, Ee, xt, kt, _t) {
      var Ke = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: f,
        // Built-in properties that belong on the element
        type: x,
        key: re,
        ref: me,
        props: _t,
        // Record the component responsible for creating this element.
        _owner: kt
      };
      return Ke._store = {}, Object.defineProperty(Ke._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Ke, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ee
      }), Object.defineProperty(Ke, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: xt
      }), Object.freeze && (Object.freeze(Ke.props), Object.freeze(Ke)), Ke;
    };
    function Dr(x, re, me, Ee, xt) {
      {
        var kt, _t = {}, Ke = null, Yn = null;
        me !== void 0 && (rr(me), Ke = "" + me), Ct(re) && (rr(re.key), Ke = "" + re.key), Be(re) && (Yn = re.ref, It(re, xt));
        for (kt in re)
          En.call(re, kt) && !va.hasOwnProperty(kt) && (_t[kt] = re[kt]);
        if (x && x.defaultProps) {
          var an = x.defaultProps;
          for (kt in an)
            _t[kt] === void 0 && (_t[kt] = an[kt]);
        }
        if (Ke || Yn) {
          var on = typeof x == "function" ? x.displayName || x.name || "Unknown" : x;
          Ke && Pt(_t, on), Yn && zn(_t, on);
        }
        return _n(x, Ke, Yn, xt, Ee, en.current, _t);
      }
    }
    var Gt = ct.ReactCurrentOwner, ar = ct.ReactDebugCurrentFrame;
    function Bt(x) {
      if (x) {
        var re = x._owner, me = Rn(x.type, x._source, re ? re.type : null);
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
        if (Gt.current) {
          var x = Ye(Gt.current.type);
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
          var re = x.fileName.replace(/^.*[\\\/]/, ""), me = x.lineNumber;
          return `

Check your code at ` + re + ":" + me + ".";
        }
        return "";
      }
    }
    var hl = {};
    function ml(x) {
      {
        var re = Na();
        if (!re) {
          var me = typeof x == "string" ? x : x.displayName || x.name;
          me && (re = `

Check the top-level render call using <` + me + ">.");
        }
        return re;
      }
    }
    function Oo(x, re) {
      {
        if (!x._store || x._store.validated || x.key != null)
          return;
        x._store.validated = !0;
        var me = ml(re);
        if (hl[me])
          return;
        hl[me] = !0;
        var Ee = "";
        x && x._owner && x._owner !== Gt.current && (Ee = " It was passed a child from " + Ye(x._owner.type) + "."), Bt(x), ze('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', me, Ee), Bt(null);
      }
    }
    function ai(x, re) {
      {
        if (typeof x != "object")
          return;
        if (Rr(x))
          for (var me = 0; me < x.length; me++) {
            var Ee = x[me];
            ri(Ee) && Oo(Ee, re);
          }
        else if (ri(x))
          x._store && (x._store.validated = !0);
        else if (x) {
          var xt = vt(x);
          if (typeof xt == "function" && xt !== x.entries)
            for (var kt = xt.call(x), _t; !(_t = kt.next()).done; )
              ri(_t.value) && Oo(_t.value, re);
        }
      }
    }
    function ii(x) {
      {
        var re = x.type;
        if (re == null || typeof re == "string")
          return;
        var me;
        if (typeof re == "function")
          me = re.propTypes;
        else if (typeof re == "object" && (re.$$typeof === W || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        re.$$typeof === q))
          me = re.propTypes;
        else
          return;
        if (me) {
          var Ee = Ye(re);
          yn(me, x.props, "prop", Ee, x);
        } else if (re.PropTypes !== void 0 && !rn) {
          rn = !0;
          var xt = Ye(re);
          ze("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", xt || "Unknown");
        }
        typeof re.getDefaultProps == "function" && !re.getDefaultProps.isReactClassApproved && ze("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function La(x) {
      {
        for (var re = Object.keys(x.props), me = 0; me < re.length; me++) {
          var Ee = re[me];
          if (Ee !== "children" && Ee !== "key") {
            Bt(x), ze("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ee), Bt(null);
            break;
          }
        }
        x.ref !== null && (Bt(x), ze("Invalid attribute `ref` supplied to `React.Fragment`."), Bt(null));
      }
    }
    function Wi(x, re, me, Ee, xt, kt) {
      {
        var _t = yt(x);
        if (!_t) {
          var Ke = "";
          (x === void 0 || typeof x == "object" && x !== null && Object.keys(x).length === 0) && (Ke += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Yn = Do(xt);
          Yn ? Ke += Yn : Ke += Na();
          var an;
          x === null ? an = "null" : Rr(x) ? an = "array" : x !== void 0 && x.$$typeof === f ? (an = "<" + (Ye(x.type) || "Unknown") + " />", Ke = " Did you accidentally export a JSX literal instead of a component?") : an = typeof x, ze("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", an, Ke);
        }
        var on = Dr(x, re, me, xt, kt);
        if (on == null)
          return on;
        if (_t) {
          var Or = re.children;
          if (Or !== void 0)
            if (Ee)
              if (Rr(Or)) {
                for (var Ei = 0; Ei < Or.length; Ei++)
                  ai(Or[Ei], x);
                Object.freeze && Object.freeze(Or);
              } else
                ze("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ai(Or, x);
        }
        return x === T ? La(on) : ii(on), on;
      }
    }
    function Wr(x, re, me) {
      return Wi(x, re, me, !0);
    }
    function Kr(x, re, me) {
      return Wi(x, re, me, !1);
    }
    var ya = Kr, Ki = Wr;
    Iv.Fragment = T, Iv.jsx = ya, Iv.jsxs = Ki;
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
var Ew;
function cN() {
  if (Ew)
    return Bv;
  Ew = 1;
  var v = Rt, u = Symbol.for("react.element"), f = Symbol.for("react.fragment"), E = Object.prototype.hasOwnProperty, T = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, O = { key: !0, ref: !0, __self: !0, __source: !0 };
  function A(_, H, W) {
    var z, le = {}, q = null, te = null;
    W !== void 0 && (q = "" + W), H.key !== void 0 && (q = "" + H.key), H.ref !== void 0 && (te = H.ref);
    for (z in H)
      E.call(H, z) && !O.hasOwnProperty(z) && (le[z] = H[z]);
    if (_ && _.defaultProps)
      for (z in H = _.defaultProps, H)
        le[z] === void 0 && (le[z] = H[z]);
    return { $$typeof: u, type: _, key: q, ref: te, props: le, _owner: T.current };
  }
  return Bv.Fragment = f, Bv.jsx = A, Bv.jsxs = A, Bv;
}
var fN = {};
fN.NODE_ENV === "production" ? l0.exports = cN() : l0.exports = sN();
var pe = l0.exports, Qv = {}, s0 = { exports: {} }, ei = {}, Ky = { exports: {} }, BS = {}, _w;
function dN() {
  return _w || (_w = 1, function(v) {
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
      var f = !1, E = !1, T = 5;
      function O(ge, Be) {
        var Ct = ge.length;
        ge.push(Be), H(ge, Be, Ct);
      }
      function A(ge) {
        return ge.length === 0 ? null : ge[0];
      }
      function _(ge) {
        if (ge.length === 0)
          return null;
        var Be = ge[0], Ct = ge.pop();
        return Ct !== Be && (ge[0] = Ct, W(ge, Ct, 0)), Be;
      }
      function H(ge, Be, Ct) {
        for (var It = Ct; It > 0; ) {
          var Pt = It - 1 >>> 1, zn = ge[Pt];
          if (z(zn, Be) > 0)
            ge[Pt] = Be, ge[It] = zn, It = Pt;
          else
            return;
        }
      }
      function W(ge, Be, Ct) {
        for (var It = Ct, Pt = ge.length, zn = Pt >>> 1; It < zn; ) {
          var _n = (It + 1) * 2 - 1, Dr = ge[_n], Gt = _n + 1, ar = ge[Gt];
          if (z(Dr, Be) < 0)
            Gt < Pt && z(ar, Dr) < 0 ? (ge[It] = ar, ge[Gt] = Be, It = Gt) : (ge[It] = Dr, ge[_n] = Be, It = _n);
          else if (Gt < Pt && z(ar, Be) < 0)
            ge[It] = ar, ge[Gt] = Be, It = Gt;
          else
            return;
        }
      }
      function z(ge, Be) {
        var Ct = ge.sortIndex - Be.sortIndex;
        return Ct !== 0 ? Ct : ge.id - Be.id;
      }
      var le = 1, q = 2, te = 3, ee = 4, ae = 5;
      function Te(ge, Be) {
      }
      var vt = typeof performance == "object" && typeof performance.now == "function";
      if (vt) {
        var ct = performance;
        v.unstable_now = function() {
          return ct.now();
        };
      } else {
        var ze = Date, ve = ze.now();
        v.unstable_now = function() {
          return ze.now() - ve;
        };
      }
      var je = 1073741823, ce = -1, Pe = 250, Ae = 5e3, wt = 1e4, gt = je, yt = [], lt = [], St = 1, Ye = null, nt = te, it = !1, Ge = !1, X = !1, _e = typeof setTimeout == "function" ? setTimeout : null, D = typeof clearTimeout == "function" ? clearTimeout : null, Z = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function Ce(ge) {
        for (var Be = A(lt); Be !== null; ) {
          if (Be.callback === null)
            _(lt);
          else if (Be.startTime <= ge)
            _(lt), Be.sortIndex = Be.expirationTime, O(yt, Be);
          else
            return;
          Be = A(lt);
        }
      }
      function We(ge) {
        if (X = !1, Ce(ge), !Ge)
          if (A(yt) !== null)
            Ge = !0, rr(Ie);
          else {
            var Be = A(lt);
            Be !== null && en(We, Be.startTime - ge);
          }
      }
      function Ie(ge, Be) {
        Ge = !1, X && (X = !1, va()), it = !0;
        var Ct = nt;
        try {
          var It;
          if (!E)
            return ut(ge, Be);
        } finally {
          Ye = null, nt = Ct, it = !1;
        }
      }
      function ut(ge, Be) {
        var Ct = Be;
        for (Ce(Ct), Ye = A(yt); Ye !== null && !f && !(Ye.expirationTime > Ct && (!ge || mn())); ) {
          var It = Ye.callback;
          if (typeof It == "function") {
            Ye.callback = null, nt = Ye.priorityLevel;
            var Pt = Ye.expirationTime <= Ct, zn = It(Pt);
            Ct = v.unstable_now(), typeof zn == "function" ? Ye.callback = zn : Ye === A(yt) && _(yt), Ce(Ct);
          } else
            _(yt);
          Ye = A(yt);
        }
        if (Ye !== null)
          return !0;
        var _n = A(lt);
        return _n !== null && en(We, _n.startTime - Ct), !1;
      }
      function ft(ge, Be) {
        switch (ge) {
          case le:
          case q:
          case te:
          case ee:
          case ae:
            break;
          default:
            ge = te;
        }
        var Ct = nt;
        nt = ge;
        try {
          return Be();
        } finally {
          nt = Ct;
        }
      }
      function Et(ge) {
        var Be;
        switch (nt) {
          case le:
          case q:
          case te:
            Be = te;
            break;
          default:
            Be = nt;
            break;
        }
        var Ct = nt;
        nt = Be;
        try {
          return ge();
        } finally {
          nt = Ct;
        }
      }
      function ot(ge) {
        var Be = nt;
        return function() {
          var Ct = nt;
          nt = Be;
          try {
            return ge.apply(this, arguments);
          } finally {
            nt = Ct;
          }
        };
      }
      function Kt(ge, Be, Ct) {
        var It = v.unstable_now(), Pt;
        if (typeof Ct == "object" && Ct !== null) {
          var zn = Ct.delay;
          typeof zn == "number" && zn > 0 ? Pt = It + zn : Pt = It;
        } else
          Pt = It;
        var _n;
        switch (ge) {
          case le:
            _n = ce;
            break;
          case q:
            _n = Pe;
            break;
          case ae:
            _n = gt;
            break;
          case ee:
            _n = wt;
            break;
          case te:
          default:
            _n = Ae;
            break;
        }
        var Dr = Pt + _n, Gt = {
          id: St++,
          callback: Be,
          priorityLevel: ge,
          startTime: Pt,
          expirationTime: Dr,
          sortIndex: -1
        };
        return Pt > It ? (Gt.sortIndex = Pt, O(lt, Gt), A(yt) === null && Gt === A(lt) && (X ? va() : X = !0, en(We, Pt - It))) : (Gt.sortIndex = Dr, O(yt, Gt), !Ge && !it && (Ge = !0, rr(Ie))), Gt;
      }
      function Qn() {
      }
      function Mn() {
        !Ge && !it && (Ge = !0, rr(Ie));
      }
      function br() {
        return A(yt);
      }
      function qn(ge) {
        ge.callback = null;
      }
      function hn() {
        return nt;
      }
      var Xn = !1, Rn = null, En = -1, xn = T, cr = -1;
      function mn() {
        var ge = v.unstable_now() - cr;
        return !(ge < xn);
      }
      function yn() {
      }
      function wr(ge) {
        if (ge < 0 || ge > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        ge > 0 ? xn = Math.floor(1e3 / ge) : xn = T;
      }
      var Rr = function() {
        if (Rn !== null) {
          var ge = v.unstable_now();
          cr = ge;
          var Be = !0, Ct = !0;
          try {
            Ct = Rn(Be, ge);
          } finally {
            Ct ? In() : (Xn = !1, Rn = null);
          }
        } else
          Xn = !1;
      }, In;
      if (typeof Z == "function")
        In = function() {
          Z(Rr);
        };
      else if (typeof MessageChannel < "u") {
        var xr = new MessageChannel(), Bn = xr.port2;
        xr.port1.onmessage = Rr, In = function() {
          Bn.postMessage(null);
        };
      } else
        In = function() {
          _e(Rr, 0);
        };
      function rr(ge) {
        Rn = ge, Xn || (Xn = !0, In());
      }
      function en(ge, Be) {
        En = _e(function() {
          ge(v.unstable_now());
        }, Be);
      }
      function va() {
        D(En), En = -1;
      }
      var ha = yn, ma = null;
      v.unstable_IdlePriority = ae, v.unstable_ImmediatePriority = le, v.unstable_LowPriority = ee, v.unstable_NormalPriority = te, v.unstable_Profiling = ma, v.unstable_UserBlockingPriority = q, v.unstable_cancelCallback = qn, v.unstable_continueExecution = Mn, v.unstable_forceFrameRate = wr, v.unstable_getCurrentPriorityLevel = hn, v.unstable_getFirstCallbackNode = br, v.unstable_next = Et, v.unstable_pauseExecution = Qn, v.unstable_requestPaint = ha, v.unstable_runWithPriority = ft, v.unstable_scheduleCallback = Kt, v.unstable_shouldYield = mn, v.unstable_wrapCallback = ot, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
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
var Sw;
function pN() {
  return Sw || (Sw = 1, function(v) {
    function u(X, _e) {
      var D = X.length;
      X.push(_e);
      e:
        for (; 0 < D; ) {
          var Z = D - 1 >>> 1, Ce = X[Z];
          if (0 < T(Ce, _e))
            X[Z] = _e, X[D] = Ce, D = Z;
          else
            break e;
        }
    }
    function f(X) {
      return X.length === 0 ? null : X[0];
    }
    function E(X) {
      if (X.length === 0)
        return null;
      var _e = X[0], D = X.pop();
      if (D !== _e) {
        X[0] = D;
        e:
          for (var Z = 0, Ce = X.length, We = Ce >>> 1; Z < We; ) {
            var Ie = 2 * (Z + 1) - 1, ut = X[Ie], ft = Ie + 1, Et = X[ft];
            if (0 > T(ut, D))
              ft < Ce && 0 > T(Et, ut) ? (X[Z] = Et, X[ft] = D, Z = ft) : (X[Z] = ut, X[Ie] = D, Z = Ie);
            else if (ft < Ce && 0 > T(Et, D))
              X[Z] = Et, X[ft] = D, Z = ft;
            else
              break e;
          }
      }
      return _e;
    }
    function T(X, _e) {
      var D = X.sortIndex - _e.sortIndex;
      return D !== 0 ? D : X.id - _e.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var O = performance;
      v.unstable_now = function() {
        return O.now();
      };
    } else {
      var A = Date, _ = A.now();
      v.unstable_now = function() {
        return A.now() - _;
      };
    }
    var H = [], W = [], z = 1, le = null, q = 3, te = !1, ee = !1, ae = !1, Te = typeof setTimeout == "function" ? setTimeout : null, vt = typeof clearTimeout == "function" ? clearTimeout : null, ct = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function ze(X) {
      for (var _e = f(W); _e !== null; ) {
        if (_e.callback === null)
          E(W);
        else if (_e.startTime <= X)
          E(W), _e.sortIndex = _e.expirationTime, u(H, _e);
        else
          break;
        _e = f(W);
      }
    }
    function ve(X) {
      if (ae = !1, ze(X), !ee)
        if (f(H) !== null)
          ee = !0, it(je);
        else {
          var _e = f(W);
          _e !== null && Ge(ve, _e.startTime - X);
        }
    }
    function je(X, _e) {
      ee = !1, ae && (ae = !1, vt(Ae), Ae = -1), te = !0;
      var D = q;
      try {
        for (ze(_e), le = f(H); le !== null && (!(le.expirationTime > _e) || X && !yt()); ) {
          var Z = le.callback;
          if (typeof Z == "function") {
            le.callback = null, q = le.priorityLevel;
            var Ce = Z(le.expirationTime <= _e);
            _e = v.unstable_now(), typeof Ce == "function" ? le.callback = Ce : le === f(H) && E(H), ze(_e);
          } else
            E(H);
          le = f(H);
        }
        if (le !== null)
          var We = !0;
        else {
          var Ie = f(W);
          Ie !== null && Ge(ve, Ie.startTime - _e), We = !1;
        }
        return We;
      } finally {
        le = null, q = D, te = !1;
      }
    }
    var ce = !1, Pe = null, Ae = -1, wt = 5, gt = -1;
    function yt() {
      return !(v.unstable_now() - gt < wt);
    }
    function lt() {
      if (Pe !== null) {
        var X = v.unstable_now();
        gt = X;
        var _e = !0;
        try {
          _e = Pe(!0, X);
        } finally {
          _e ? St() : (ce = !1, Pe = null);
        }
      } else
        ce = !1;
    }
    var St;
    if (typeof ct == "function")
      St = function() {
        ct(lt);
      };
    else if (typeof MessageChannel < "u") {
      var Ye = new MessageChannel(), nt = Ye.port2;
      Ye.port1.onmessage = lt, St = function() {
        nt.postMessage(null);
      };
    } else
      St = function() {
        Te(lt, 0);
      };
    function it(X) {
      Pe = X, ce || (ce = !0, St());
    }
    function Ge(X, _e) {
      Ae = Te(function() {
        X(v.unstable_now());
      }, _e);
    }
    v.unstable_IdlePriority = 5, v.unstable_ImmediatePriority = 1, v.unstable_LowPriority = 4, v.unstable_NormalPriority = 3, v.unstable_Profiling = null, v.unstable_UserBlockingPriority = 2, v.unstable_cancelCallback = function(X) {
      X.callback = null;
    }, v.unstable_continueExecution = function() {
      ee || te || (ee = !0, it(je));
    }, v.unstable_forceFrameRate = function(X) {
      0 > X || 125 < X ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : wt = 0 < X ? Math.floor(1e3 / X) : 5;
    }, v.unstable_getCurrentPriorityLevel = function() {
      return q;
    }, v.unstable_getFirstCallbackNode = function() {
      return f(H);
    }, v.unstable_next = function(X) {
      switch (q) {
        case 1:
        case 2:
        case 3:
          var _e = 3;
          break;
        default:
          _e = q;
      }
      var D = q;
      q = _e;
      try {
        return X();
      } finally {
        q = D;
      }
    }, v.unstable_pauseExecution = function() {
    }, v.unstable_requestPaint = function() {
    }, v.unstable_runWithPriority = function(X, _e) {
      switch (X) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          X = 3;
      }
      var D = q;
      q = X;
      try {
        return _e();
      } finally {
        q = D;
      }
    }, v.unstable_scheduleCallback = function(X, _e, D) {
      var Z = v.unstable_now();
      switch (typeof D == "object" && D !== null ? (D = D.delay, D = typeof D == "number" && 0 < D ? Z + D : Z) : D = Z, X) {
        case 1:
          var Ce = -1;
          break;
        case 2:
          Ce = 250;
          break;
        case 5:
          Ce = 1073741823;
          break;
        case 4:
          Ce = 1e4;
          break;
        default:
          Ce = 5e3;
      }
      return Ce = D + Ce, X = { id: z++, callback: _e, priorityLevel: X, startTime: D, expirationTime: Ce, sortIndex: -1 }, D > Z ? (X.sortIndex = D, u(W, X), f(H) === null && X === f(W) && (ae ? (vt(Ae), Ae = -1) : ae = !0, Ge(ve, D - Z))) : (X.sortIndex = Ce, u(H, X), ee || te || (ee = !0, it(je))), X;
    }, v.unstable_shouldYield = yt, v.unstable_wrapCallback = function(X) {
      var _e = q;
      return function() {
        var D = q;
        q = _e;
        try {
          return X.apply(this, arguments);
        } finally {
          q = D;
        }
      };
    };
  }(YS)), YS;
}
var Cw;
function lR() {
  if (Cw)
    return Ky.exports;
  Cw = 1;
  var v = {};
  return v.NODE_ENV === "production" ? Ky.exports = pN() : Ky.exports = dN(), Ky.exports;
}
var Tw;
function vN() {
  if (Tw)
    return ei;
  Tw = 1;
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
    var u = Rt, f = lR(), E = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, T = !1;
    function O(e) {
      T = e;
    }
    function A(e) {
      if (!T) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        H("warn", e, a);
      }
    }
    function _(e) {
      if (!T) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        H("error", e, a);
      }
    }
    function H(e, t, a) {
      {
        var i = E.ReactDebugCurrentFrame, l = i.getStackAddendum();
        l !== "" && (t += "%s", a = a.concat([l]));
        var c = a.map(function(p) {
          return String(p);
        });
        c.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, c);
      }
    }
    var W = 0, z = 1, le = 2, q = 3, te = 4, ee = 5, ae = 6, Te = 7, vt = 8, ct = 9, ze = 10, ve = 11, je = 12, ce = 13, Pe = 14, Ae = 15, wt = 16, gt = 17, yt = 18, lt = 19, St = 21, Ye = 22, nt = 23, it = 24, Ge = 25, X = !0, _e = !1, D = !1, Z = !1, Ce = !1, We = !0, Ie = !1, ut = !1, ft = !0, Et = !0, ot = !0, Kt = /* @__PURE__ */ new Set(), Qn = {}, Mn = {};
    function br(e, t) {
      qn(e, t), qn(e + "Capture", t);
    }
    function qn(e, t) {
      Qn[e] && _("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Qn[e] = t;
      {
        var a = e.toLowerCase();
        Mn[a] = e, e === "onDoubleClick" && (Mn.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        Kt.add(t[i]);
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
    function wr(e, t) {
      if (En(e))
        return _("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Rn(e)), xn(e);
    }
    function Rr(e) {
      if (En(e))
        return _("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Rn(e)), xn(e);
    }
    function In(e) {
      if (En(e))
        return _("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Rn(e)), xn(e);
    }
    var xr = 0, Bn = 1, rr = 2, en = 3, va = 4, ha = 5, ma = 6, ge = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Be = ge + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Ct = new RegExp("^[" + ge + "][" + Be + "]*$"), It = {}, Pt = {};
    function zn(e) {
      return Xn.call(Pt, e) ? !0 : Xn.call(It, e) ? !1 : Ct.test(e) ? (Pt[e] = !0, !0) : (It[e] = !0, _("Invalid attribute name: `%s`", e), !1);
    }
    function _n(e, t, a) {
      return t !== null ? t.type === xr : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function Dr(e, t, a, i) {
      if (a !== null && a.type === xr)
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
    function Gt(e, t, a, i) {
      if (t === null || typeof t > "u" || Dr(e, t, a, i))
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
        xr,
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
            return m === "" ? !0 : Gt(t, a, i, !1) ? m : m === "" + a ? a : m;
          }
        } else if (e.hasAttribute(c)) {
          if (Gt(t, a, i, !1))
            return e.getAttribute(c);
          if (i.type === en)
            return a;
          p = e.getAttribute(c);
        }
        return Gt(t, a, i, !1) ? p === null ? a : p : p === "" + a ? a : p;
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
        if (Gt(t, a, l, i) && (a = null), i || l === null) {
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
    var Wr = Symbol.for("react.element"), Kr = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), Ki = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), re = Symbol.for("react.provider"), me = Symbol.for("react.context"), Ee = Symbol.for("react.forward_ref"), xt = Symbol.for("react.suspense"), kt = Symbol.for("react.suspense_list"), _t = Symbol.for("react.memo"), Ke = Symbol.for("react.lazy"), Yn = Symbol.for("react.scope"), an = Symbol.for("react.debug_trace_mode"), on = Symbol.for("react.offscreen"), Or = Symbol.for("react.legacy_hidden"), Ei = Symbol.for("react.cache"), ln = Symbol.for("react.tracing_marker"), Gr = Symbol.iterator, Ss = "@@iterator";
    function _i(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Gr && e[Gr] || e[Ss];
      return typeof t == "function" ? t : null;
    }
    var Tt = Object.assign, yl = 0, Gi, Ao, Qr, Cs, Mr, Ts, bs;
    function ws() {
    }
    ws.__reactDisabledLog = !0;
    function gl() {
      {
        if (yl === 0) {
          Gi = console.log, Ao = console.info, Qr = console.warn, Cs = console.error, Mr = console.group, Ts = console.groupCollapsed, bs = console.groupEnd;
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
            log: Tt({}, e, {
              value: Gi
            }),
            info: Tt({}, e, {
              value: Ao
            }),
            warn: Tt({}, e, {
              value: Qr
            }),
            error: Tt({}, e, {
              value: Cs
            }),
            group: Tt({}, e, {
              value: Mr
            }),
            groupCollapsed: Tt({}, e, {
              value: Ts
            }),
            groupEnd: Tt({}, e, {
              value: bs
            })
          });
        }
        yl < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Qi = E.ReactCurrentDispatcher, Si;
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
            } catch (I) {
              i = I;
            }
            Reflect.construct(e, [], p);
          } else {
            try {
              p.call();
            } catch (I) {
              i = I;
            }
            e.call(p.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (I) {
            i = I;
          }
          e();
        }
      } catch (I) {
        if (I && i && typeof I.stack == "string") {
          for (var m = I.stack.split(`
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
      var N = e ? e.displayName || e.name : "", V = N ? Ma(N) : "";
      return typeof e == "function" && Ci.set(e, V), V;
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
          case Ee:
            return Rs(e.render);
          case _t:
            return At(e.type, t, a);
          case Ke: {
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
        case ee:
          return Ma(e.type);
        case wt:
          return Ma("Lazy");
        case ce:
          return Ma("Suspense");
        case lt:
          return Ma("SuspenseList");
        case W:
        case le:
        case Ae:
          return Rs(e.type);
        case ve:
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
        case Kr:
          return "Portal";
        case x:
          return "Profiler";
        case Ki:
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
          case re:
            var a = e;
            return Os(a._context) + ".Provider";
          case Ee:
            return Lo(e, e.render, "ForwardRef");
          case _t:
            var i = e.displayName || null;
            return i !== null ? i : zt(e.type) || "Memo";
          case Ke: {
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
    function st(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case it:
          return "Cache";
        case ct:
          var i = a;
          return Sl(i) + ".Consumer";
        case ze:
          var l = a;
          return Sl(l._context) + ".Provider";
        case yt:
          return "DehydratedFragment";
        case ve:
          return fu(a, a.render, "ForwardRef");
        case Te:
          return "Fragment";
        case ee:
          return a;
        case te:
          return "Portal";
        case q:
          return "Root";
        case ae:
          return "Text";
        case wt:
          return zt(a);
        case vt:
          return a === Ki ? "StrictMode" : "Mode";
        case Ye:
          return "Offscreen";
        case je:
          return "Profiler";
        case St:
          return "Scope";
        case ce:
          return "Suspense";
        case lt:
          return "SuspenseList";
        case Ge:
          return "TracingMarker";
        case z:
        case W:
        case gt:
        case le:
        case Pe:
        case Ae:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var oi = E.ReactDebugCurrentFrame, Sn = null, qr = !1;
    function za() {
      {
        if (Sn === null)
          return null;
        var e = Sn._debugOwner;
        if (e !== null && typeof e < "u")
          return st(e);
      }
      return null;
    }
    function Mo() {
      return Sn === null ? "" : cu(Sn);
    }
    function cn() {
      oi.getCurrentStack = null, Sn = null, qr = !1;
    }
    function Cn(e) {
      oi.getCurrentStack = e === null ? null : Mo, Sn = e, qr = !1;
    }
    function As() {
      return Sn;
    }
    function fr(e) {
      qr = e;
    }
    function Xr(e) {
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
    function g(e, t) {
      var a = e, i = t.checked, l = Tt({}, t, {
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
    function F(e, t) {
      var a = e, i = t.checked;
      i != null && Wi(a, "checked", i, !1);
    }
    function Y(e, t) {
      var a = e;
      {
        var i = mu(t);
        !a._wrapperState.controlled && i && !ui && (_("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ui = !0), a._wrapperState.controlled && !i && !ks && (_("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ks = !0);
      }
      F(e, t);
      var l = li(t.value), c = t.type;
      if (l != null)
        c === "number" ? (l === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != l) && (a.value = Xr(l)) : a.value !== Xr(l) && (a.value = Xr(l));
      else if (c === "submit" || c === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? rt(a, t.type, l) : t.hasOwnProperty("defaultValue") && rt(a, t.type, li(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function fe(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var l = t.type, c = l === "submit" || l === "reset";
        if (c && (t.value === void 0 || t.value === null))
          return;
        var p = Xr(i._wrapperState.initialValue);
        a || p !== i.value && (i.value = p), i.defaultValue = p;
      }
      var m = i.name;
      m !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, m !== "" && (i.name = m);
    }
    function Me(e, t) {
      var a = e;
      Y(a, t), Re(a, t);
    }
    function Re(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        cr(a, "name");
        for (var l = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), c = 0; c < l.length; c++) {
          var p = l[c];
          if (!(p === e || p.form !== e.form)) {
            var m = Lm(p);
            if (!m)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            vu(p), Y(p, m);
          }
        }
      }
    }
    function rt(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Ti(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Xr(e._wrapperState.initialValue) : e.defaultValue !== Xr(a) && (e.defaultValue = Xr(a)));
    }
    var bt = !1, Yt = !1, Qt = !1;
    function qt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? u.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Yt || (Yt = !0, _("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Qt || (Qt = !0, _("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !bt && (_("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), bt = !0);
    }
    function Xt(e, t) {
      t.value != null && e.setAttribute("value", Xr(li(t.value)));
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
        for (var b = Xr(li(a)), M = null, N = 0; N < l.length; N++) {
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
      return Tt({}, t, {
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
    function ah(e, t) {
      var a = e, i = t.value;
      i != null && Ji(a, !!t.multiple, i, !1);
    }
    var ih = !1;
    function Kd(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Tt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Xr(a._wrapperState.initialValue)
      });
      return i;
    }
    function oh(e, t) {
      var a = e;
      Cl("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !ih && (_("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", za() || "A component"), ih = !0);
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
    function lh(e, t) {
      var a = e, i = li(t.value), l = li(t.defaultValue);
      if (i != null) {
        var c = Xr(i);
        c !== a.value && (a.value = c), t.defaultValue == null && a.defaultValue !== c && (a.defaultValue = c);
      }
      l != null && (a.defaultValue = Xr(l));
    }
    function Gc(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function _g(e, t) {
      lh(e, t);
    }
    var eo = "http://www.w3.org/1999/xhtml", Sg = "http://www.w3.org/1998/Math/MathML", Qc = "http://www.w3.org/2000/svg";
    function Gd(e) {
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
      return e == null || e === eo ? Gd(t) : e === Qc && t === "foreignObject" ? eo : e;
    }
    var Cg = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, l) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, l);
        });
      } : e;
    }, qc, uh = Cg(function(e, t) {
      if (e.namespaceURI === Qc && !("innerHTML" in e)) {
        qc = qc || document.createElement("div"), qc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = qc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Zr = 1, to = 3, Dn = 8, ga = 9, qd = 11, Us = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === to) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, sh = {
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
    function ch(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var fh = ["Webkit", "ms", "Moz", "O"];
    Object.keys(gu).forEach(function(e) {
      fh.forEach(function(t) {
        gu[ch(t, e)] = gu[e];
      });
    });
    function jo(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(gu.hasOwnProperty(e) && gu[e]) ? t + "px" : (wr(t, e), ("" + t).trim());
    }
    var Tg = /([A-Z])/g, bg = /^ms-/;
    function wg(e) {
      return e.replace(Tg, "-$1").toLowerCase().replace(bg, "-ms-");
    }
    var Xd = function() {
    };
    {
      var dh = /^(?:webkit|moz|o)[A-Z]/, js = /^-ms-/, Ps = /-(.)/g, ph = /;\s*$/, no = {}, Zd = {}, Jd = !1, Xc = !1, ep = function(e) {
        return e.replace(Ps, function(t, a) {
          return a.toUpperCase();
        });
      }, vh = function(e) {
        no.hasOwnProperty(e) && no[e] || (no[e] = !0, _(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          ep(e.replace(js, "ms-"))
        ));
      }, hh = function(e) {
        no.hasOwnProperty(e) && no[e] || (no[e] = !0, _("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, mh = function(e, t) {
        Zd.hasOwnProperty(t) && Zd[t] || (Zd[t] = !0, _(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(ph, "")));
      }, Rg = function(e, t) {
        Jd || (Jd = !0, _("`NaN` is an invalid value for the `%s` css style property.", e));
      }, xg = function(e, t) {
        Xc || (Xc = !0, _("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Xd = function(e, t) {
        e.indexOf("-") > -1 ? vh(e) : dh.test(e) ? hh(e) : ph.test(t) && mh(e, t), typeof t == "number" && (isNaN(t) ? Rg(e, t) : isFinite(t) || xg(e, t));
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
    function yh(e, t) {
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
        for (var i = sh[a] || [a], l = 0; l < i.length; l++)
          t[i[l]] = a;
      return t;
    }
    function gh(e, t) {
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
    var Eh = {
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
    }, _h = Tt({
      menuitem: !0
    }, Eh), Sh = "__html";
    function $s(e, t) {
      if (t) {
        if (_h[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Sh in t.dangerouslySetInnerHTML))
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
    }, Po = {}, Fs = new RegExp("^(aria)-[" + Be + "]*$"), tp = new RegExp("^(aria)[A-Z][" + Be + "]*$");
    function Ch(e, t) {
      {
        if (Xn.call(Po, t) && Po[t])
          return !0;
        if (tp.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = wl.hasOwnProperty(a) ? a : null;
          if (i == null)
            return _("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Po[t] = !0, !0;
          if (t !== i)
            return _("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Po[t] = !0, !0;
        }
        if (Fs.test(t)) {
          var l = t.toLowerCase(), c = wl.hasOwnProperty(l) ? l : null;
          if (c == null)
            return Po[t] = !0, !1;
          if (t !== c)
            return _("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, c), Po[t] = !0, !0;
        }
      }
      return !0;
    }
    function Jc(e, t) {
      {
        var a = [];
        for (var i in t) {
          var l = Ch(e, i);
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
    function Th(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !ef && (ef = !0, e === "select" && t.multiple ? _("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : _("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Hs = function() {
    };
    {
      var Ar = {}, np = /^on./, bh = /^on[^A-Z]/, wh = new RegExp("^(aria)-[" + Be + "]*$"), Rh = new RegExp("^(aria)[A-Z][" + Be + "]*$");
      Hs = function(e, t, a, i) {
        if (Xn.call(Ar, t) && Ar[t])
          return !0;
        var l = t.toLowerCase();
        if (l === "onfocusin" || l === "onfocusout")
          return _("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Ar[t] = !0, !0;
        if (i != null) {
          var c = i.registrationNameDependencies, p = i.possibleRegistrationNames;
          if (c.hasOwnProperty(t))
            return !0;
          var m = p.hasOwnProperty(l) ? p[l] : null;
          if (m != null)
            return _("Invalid event handler property `%s`. Did you mean `%s`?", t, m), Ar[t] = !0, !0;
          if (np.test(t))
            return _("Unknown event handler property `%s`. It will be ignored.", t), Ar[t] = !0, !0;
        } else if (np.test(t))
          return bh.test(t) && _("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Ar[t] = !0, !0;
        if (wh.test(t) || Rh.test(t))
          return !0;
        if (l === "innerhtml")
          return _("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Ar[t] = !0, !0;
        if (l === "aria")
          return _("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Ar[t] = !0, !0;
        if (l === "is" && a !== null && a !== void 0 && typeof a != "string")
          return _("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Ar[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return _("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Ar[t] = !0, !0;
        var y = ar(t), C = y !== null && y.type === xr;
        if (Zc.hasOwnProperty(l)) {
          var b = Zc[l];
          if (b !== t)
            return _("Invalid DOM property `%s`. Did you mean `%s`?", t, b), Ar[t] = !0, !0;
        } else if (!C && t !== l)
          return _("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, l), Ar[t] = !0, !0;
        return typeof a == "boolean" && Dr(t, a, y, !1) ? (a ? _('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : _('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Ar[t] = !0, !0) : C ? !0 : Dr(t, a, y, !1) ? (Ar[t] = !0, !1) : ((a === "false" || a === "true") && y !== null && y.type === en && (_("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Ar[t] = !0), !0);
      };
    }
    var xh = function(e, t, a) {
      {
        var i = [];
        for (var l in t) {
          var c = Hs(e, l, t[l], a);
          c || i.push(l);
        }
        var p = i.map(function(m) {
          return "`" + m + "`";
        }).join(", ");
        i.length === 1 ? _("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", p, e) : i.length > 1 && _("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", p, e);
      }
    };
    function $o(e, t, a) {
      bl(e, t) || xh(e, t, a);
    }
    var tf = 1, Vs = 2, Is = 4, Ag = tf | Vs | Is, ro = null;
    function kg(e) {
      ro !== null && _("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), ro = e;
    }
    function Dh() {
      ro === null && _("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), ro = null;
    }
    function Oh(e) {
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
          var i = Lm(a);
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
    }, Ah = function() {
    }, op = !1;
    function kh() {
      var e = nf();
      e && (Ah(), Rl());
    }
    function Ys(e, t, a) {
      if (op)
        return e(t, a);
      op = !0;
      try {
        return ip(e, t, a);
      } finally {
        op = !1, kh();
      }
    }
    function rf(e, t, a) {
      ip = e, Ah = a;
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
      var i = Lm(a);
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
        var Ks = {};
        Object.defineProperty(Ks, "passive", {
          get: function() {
            Ws = !0;
          }
        }), window.addEventListener("test", Ks, Ks), window.removeEventListener("test", Ks, Ks);
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
    var Nh = sp;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var cp = document.createElement("react");
      Nh = function(t, a, i, l, c, p, m, y, C) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var b = document.createEvent("Event"), M = !1, N = !0, V = window.event, I = Object.getOwnPropertyDescriptor(window, "event");
        function K() {
          cp.removeEventListener(G, Xe, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = V);
        }
        var xe = Array.prototype.slice.call(arguments, 3);
        function Xe() {
          M = !0, K(), a.apply(i, xe), N = !1;
        }
        var Ve, Lt = !1, Ot = !1;
        function j(P) {
          if (Ve = P.error, Lt = !0, Ve === null && P.colno === 0 && P.lineno === 0 && (Ot = !0), P.defaultPrevented && Ve != null && typeof Ve == "object")
            try {
              Ve._suppressLogging = !0;
            } catch {
            }
        }
        var G = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", j), cp.addEventListener(G, Xe, !1), b.initEvent(G, !1, !1), cp.dispatchEvent(b), I && Object.defineProperty(window, "event", I), M && N && (Lt ? Ot && (Ve = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Ve = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Ve)), window.removeEventListener("error", j), !M)
          return K(), sp.apply(this, arguments);
      };
    }
    var fp = Nh, Ea = !1, Gs = null, io = !1, ja = null, Qs = {
      onError: function(e) {
        Ea = !0, Gs = e;
      }
    };
    function ci(e, t, a, i, l, c, p, m, y) {
      Ea = !1, Gs = null, fp.apply(Qs, arguments);
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
        var e = Gs;
        return Ea = !1, Gs = null, e;
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
    ), $e = (
      /*                       */
      4
    ), $t = (
      /*                */
      16
    ), Pa = (
      /*                 */
      32
    ), ir = (
      /*                     */
      64
    ), dt = (
      /*                   */
      128
    ), zr = (
      /*            */
      256
    ), _a = (
      /*                          */
      512
    ), Wn = (
      /*                     */
      1024
    ), Jr = (
      /*                      */
      2048
    ), Ri = (
      /*                    */
      4096
    ), Fo = (
      /*                   */
      8192
    ), Dl = (
      /*             */
      16384
    ), Lh = Jr | $e | ir | _a | Wn | Dl, lo = (
      /*               */
      32767
    ), Ho = (
      /*                   */
      32768
    ), dr = (
      /*                */
      65536
    ), of = (
      /* */
      131072
    ), Mh = (
      /*                       */
      1048576
    ), xi = (
      /*                    */
      2097152
    ), $a = (
      /*                 */
      4194304
    ), Vo = (
      /*                */
      8388608
    ), Fa = (
      /*               */
      16777216
    ), Ol = (
      /*              */
      33554432
    ), ea = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      $e | Wn | 0
    ), ta = nn | $e | $t | Pa | _a | Ri | Fo, di = $e | ir | _a | Fo, na = Jr | $t, pr = $a | Vo | xi, Al = E.ReactCurrentOwner;
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
      return t.tag === q ? a : null;
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
      return e.tag === q ? e.stateNode.containerInfo : null;
    }
    function Sa(e) {
      return Io(e) === e;
    }
    function Ca(e) {
      {
        var t = Al.current;
        if (t !== null && t.tag === z) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || _("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", st(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var l = wi(e);
      return l ? Io(l) === l : !1;
    }
    function dn(e) {
      if (Io(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Ha(e) {
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
      if (i.tag !== q)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function pp(e) {
      var t = Ha(e);
      return t !== null ? vp(t) : null;
    }
    function vp(e) {
      if (e.tag === ee || e.tag === ae)
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
      var t = Ha(e);
      return t !== null ? sf(t) : null;
    }
    function sf(e) {
      if (e.tag === ee || e.tag === ae)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== te) {
          var a = sf(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var mp = f.unstable_scheduleCallback, cf = f.unstable_cancelCallback, zh = f.unstable_shouldYield, Tu = f.unstable_requestPaint, Kn = f.unstable_now, Mg = f.unstable_getCurrentPriorityLevel, ra = f.unstable_ImmediatePriority, bu = f.unstable_UserBlockingPriority, Di = f.unstable_NormalPriority, wu = f.unstable_LowPriority, qs = f.unstable_IdlePriority, yp = f.unstable_yieldValue, gp = f.unstable_setDisableYieldValue, Bo = null, Un = null, he = null, kr = !1, Ta = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Uh(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return _("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        ft && (e = Tt({}, e, {
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
          kr || (kr = !0, _("React instrumentation encountered an error: %s", a));
        }
    }
    function Yo(e, t) {
      if (Un && typeof Un.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & dt) === dt;
          if (Et) {
            var i;
            switch (t) {
              case Fn:
                i = ra;
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
          kr || (kr = !0, _("React instrumentation encountered an error: %s", l));
        }
    }
    function Ep(e) {
      if (Un && typeof Un.onPostCommitFiberRoot == "function")
        try {
          Un.onPostCommitFiberRoot(Bo, e);
        } catch (t) {
          kr || (kr = !0, _("React instrumentation encountered an error: %s", t));
        }
    }
    function jh(e) {
      if (Un && typeof Un.onCommitFiberUnmount == "function")
        try {
          Un.onCommitFiberUnmount(Bo, e);
        } catch (t) {
          kr || (kr = !0, _("React instrumentation encountered an error: %s", t));
        }
    }
    function un(e) {
      if (typeof yp == "function" && (gp(e), O(e)), Un && typeof Un.setStrictMode == "function")
        try {
          Un.setStrictMode(Bo, e);
        } catch (t) {
          kr || (kr = !0, _("React instrumentation encountered an error: %s", t));
        }
    }
    function Wo(e) {
      he = e;
    }
    function ff() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < jn; a++) {
          var i = Yh(t);
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
    function $h(e) {
      he !== null && typeof he.markComponentPassiveEffectUnmountStarted == "function" && he.markComponentPassiveEffectUnmountStarted(e);
    }
    function Fh() {
      he !== null && typeof he.markComponentPassiveEffectUnmountStopped == "function" && he.markComponentPassiveEffectUnmountStopped();
    }
    function Hh(e) {
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
    function Vh(e, t, a) {
      he !== null && typeof he.markComponentErrored == "function" && he.markComponentErrored(e, t, a);
    }
    function Ih(e, t, a) {
      he !== null && typeof he.markComponentSuspended == "function" && he.markComponentSuspended(e, t, a);
    }
    function Du(e) {
      he !== null && typeof he.markLayoutEffectsStarted == "function" && he.markLayoutEffectsStarted(e);
    }
    function Bh() {
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
    function Ko() {
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
    ), He = (
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
    var jn = 31, Q = (
      /*                        */
      0
    ), Pn = (
      /*                          */
      0
    ), Ze = (
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
    ), Go = (
      /*                       */
      4194240
    ), aa = (
      /*                        */
      64
    ), ia = (
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
    ), bp = jl, Pl = (
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
    function Yh(e) {
      {
        if (e & Ze)
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
        if (e & Go)
          return "Transition";
        if (e & Ul)
          return "Retry";
        if (e & Pl)
          return "SelectiveHydration";
        if (e & Nu)
          return "IdleHydration";
        if (e & Qo)
          return "Idle";
        if (e & ba)
          return "Offscreen";
      }
    }
    var sn = -1, Rf = aa, ic = jl;
    function Lu(e) {
      switch ($n(e)) {
        case Ze:
          return Ze;
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
        case aa:
        case ia:
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
          return e & Go;
        case jl:
        case ac:
        case Tf:
        case bf:
        case wf:
          return e & Ul;
        case Pl:
          return Pl;
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
      if (a === Q)
        return Q;
      var i = Q, l = e.suspendedLanes, c = e.pingedLanes, p = a & wp;
      if (p !== Q) {
        var m = p & ~l;
        if (m !== Q)
          i = Lu(m);
        else {
          var y = p & c;
          y !== Q && (i = Lu(y));
        }
      } else {
        var C = a & ~l;
        C !== Q ? i = Lu(C) : c !== Q && (i = Lu(c));
      }
      if (i === Q)
        return Q;
      if (t !== Q && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & l) === Q) {
        var b = $n(i), M = $n(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          b >= M || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          b === Ia && (M & Go) !== Q
        )
          return t;
      }
      (i & so) !== Q && (i |= a & Ia);
      var N = e.entangledLanes;
      if (N !== Q)
        for (var V = e.entanglements, I = i & N; I > 0; ) {
          var K = Xo(I), xe = 1 << K;
          i |= V[K], I &= ~xe;
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
        case Ze:
        case Ai:
        case so:
          return t + 250;
        case An:
        case Ia:
        case Ll:
        case aa:
        case ia:
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
        case Pl:
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
        C === sn ? ((y & i) === Q || (y & l) !== Q) && (c[m] = zg(y, t)) : C <= t && (e.expiredLanes |= y), p &= ~y;
      }
    }
    function jg(e) {
      return Lu(e.pendingLanes);
    }
    function qo(e) {
      var t = e.pendingLanes & ~ba;
      return t !== Q ? t : t & ba ? ba : Q;
    }
    function Rp(e) {
      return (e & Ze) !== Q;
    }
    function lc(e) {
      return (e & wp) !== Q;
    }
    function Wh(e) {
      return (e & Ul) === e;
    }
    function Kh(e) {
      var t = Ze | so | Ia;
      return (e & t) === Q;
    }
    function Gh(e) {
      return (e & Go) === e;
    }
    function uc(e, t) {
      var a = Ai | so | An | Ia;
      return (t & a) !== Q;
    }
    function Qh(e, t) {
      return (t & e.expiredLanes) !== Q;
    }
    function xp(e) {
      return (e & Go) !== Q;
    }
    function qh() {
      var e = Rf;
      return Rf <<= 1, (Rf & Go) === Q && (Rf = aa), e;
    }
    function oa() {
      var e = ic;
      return ic <<= 1, (ic & Ul) === Q && (ic = jl), e;
    }
    function $n(e) {
      return e & -e;
    }
    function Mu(e) {
      return $n(e);
    }
    function Xo(e) {
      return 31 - tc(e);
    }
    function Df(e) {
      return Xo(e);
    }
    function la(e, t) {
      return (e & t) !== Q;
    }
    function $l(e, t) {
      return (e & t) === t;
    }
    function mt(e, t) {
      return e | t;
    }
    function sc(e, t) {
      return e & ~t;
    }
    function Of(e, t) {
      return e & t;
    }
    function Pg(e) {
      return e;
    }
    function Xh(e, t) {
      return e !== Pn && e < t ? e : t;
    }
    function cc(e) {
      for (var t = [], a = 0; a < jn; a++)
        t.push(e);
      return t;
    }
    function Fl(e, t, a) {
      e.pendingLanes |= t, t !== Qo && (e.suspendedLanes = Q, e.pingedLanes = Q);
      var i = e.eventTimes, l = Df(t);
      i[l] = a;
    }
    function Zh(e, t) {
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
      e.pendingLanes = t, e.suspendedLanes = Q, e.pingedLanes = Q, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, l = e.eventTimes, c = e.expirationTimes, p = a; p > 0; ) {
        var m = Xo(p), y = 1 << m;
        i[m] = Q, l[m] = sn, c[m] = sn, p &= ~y;
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
    function Jh(e, t) {
      var a = $n(t), i;
      switch (a) {
        case so:
          i = Ai;
          break;
        case Ia:
          i = An;
          break;
        case aa:
        case ia:
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
          i = Pn;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Pn ? Pn : i;
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
    var Fn = Ze, co = so, ki = Ia, zu = Qo, Uu = Pn;
    function Ba() {
      return Uu;
    }
    function kn(e) {
      Uu = e;
    }
    function Nr(e, t) {
      var a = Uu;
      try {
        return Uu = e, t();
      } finally {
        Uu = a;
      }
    }
    function $g(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Fg(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function ju(e, t) {
      return e !== 0 && e < t;
    }
    function vr(e) {
      var t = $n(e);
      return ju(Fn, t) ? ju(co, t) ? lc(t) ? ki : zu : co : Fn;
    }
    function Lf(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Oe;
    function Pu(e) {
      Oe = e;
    }
    function Ap(e) {
      Oe(e);
    }
    var Mf;
    function Hg(e) {
      Mf = e;
    }
    var $u;
    function zf(e) {
      $u = e;
    }
    var Uf;
    function em(e) {
      Uf = e;
    }
    var kp;
    function tm(e) {
      kp = e;
    }
    var dc = !1, Fu = [], gn = null, or = null, Ur = null, Hu = /* @__PURE__ */ new Map(), Vu = /* @__PURE__ */ new Map(), lr = [], nm = [
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
      return nm.indexOf(e) > -1;
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
          Ur = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Hu.delete(a);
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
    function rm(e, t, a, i, l) {
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
          return Ur = Iu(Ur, e, t, a, i, m), !0;
        }
        case "pointerover": {
          var y = l, C = y.pointerId;
          return Hu.set(C, Iu(Hu.get(C) || null, e, t, a, i, y)), !0;
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
                $u(a);
              });
              return;
            }
          } else if (i === q) {
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
    function Hl(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Lr(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var l = e.nativeEvent, c = new l.constructor(l.type, l);
          kg(c), l.target.dispatchEvent(c), Dh();
        } else {
          var p = Zu(i);
          return p !== null && Mf(p), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function jf(e, t, a) {
      Hl(e) && a.delete(t);
    }
    function Ya() {
      dc = !1, gn !== null && Hl(gn) && (gn = null), or !== null && Hl(or) && (or = null), Ur !== null && Hl(Ur) && (Ur = null), Hu.forEach(jf), Vu.forEach(jf);
    }
    function Dt(e, t) {
      e.blockedOn === t && (e.blockedOn = null, dc || (dc = !0, f.unstable_scheduleCallback(f.unstable_NormalPriority, Ya)));
    }
    function Nn(e) {
      if (Fu.length > 0) {
        Dt(Fu[0], e);
        for (var t = 1; t < Fu.length; t++) {
          var a = Fu[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      gn !== null && Dt(gn, e), or !== null && Dt(or, e), Ur !== null && Dt(Ur, e);
      var i = function(m) {
        return Dt(m, e);
      };
      Hu.forEach(i), Vu.forEach(i);
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
    var pn = E.ReactCurrentBatchConfig, Zn = !0;
    function ua(e) {
      Zn = !!e;
    }
    function Bu() {
      return Zn;
    }
    function Jn(e, t, a) {
      var i = Pf(t), l;
      switch (i) {
        case Fn:
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
        kn(Fn), Yu(e, t, a, i);
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
      var l = Lr(e, t, a, i);
      if (l === null) {
        oE(e, t, i, Zo, a), Np(e, i);
        return;
      }
      if (rm(l, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Np(e, i), t & Is && Ni(e)) {
        for (; l !== null; ) {
          var c = Zu(l);
          c !== null && Ap(c);
          var p = Lr(e, t, a, i);
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
    function Lr(e, t, a, i) {
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
          } else if (m === q) {
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
    function Pf(e) {
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
          return Fn;
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
            case ra:
              return Fn;
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
    function $f(e, t, a, i) {
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
    var Wa = null, Ku = null, Ka = null;
    function Ff(e) {
      return Wa = e, Ku = hc(), !0;
    }
    function vc() {
      Wa = null, Ku = null, Ka = null;
    }
    function Hf() {
      if (Ka)
        return Ka;
      var e, t = Ku, a = t.length, i, l = hc(), c = l.length;
      for (e = 0; e < a && t[e] === l[e]; e++)
        ;
      var p = a - e;
      for (i = 1; i <= p && t[a - i] === l[c - i]; i++)
        ;
      var m = i > 1 ? 1 - i : void 0;
      return Ka = l.slice(e, m), Ka;
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
      return Tt(t.prototype, {
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
    }, Vf = bn(er), Bl = Tt({}, er, {
      view: 0,
      detail: 0
    }), Up = bn(Bl), jp, Li, Gu;
    function Pp(e) {
      e !== Gu && (Gu && e.type === "mousemove" ? (jp = e.screenX - Gu.screenX, Li = e.screenY - Gu.screenY) : (jp = 0, Li = 0), Gu = e);
    }
    var Mi = Tt({}, Bl, {
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
      getModifierState: $p,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Pp(e), jp);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Li;
      }
    }), If = bn(Mi), Yl = Tt({}, Mi, {
      dataTransfer: 0
    }), am = bn(Yl), im = Tt({}, Bl, {
      relatedTarget: 0
    }), mc = bn(im), Bf = Tt({}, er, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Bg = bn(Bf), Yg = Tt({}, er, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), om = bn(Yg), lm = Tt({}, er, {
      data: 0
    }), Jo = bn(lm), Wg = Jo, Qu = {
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
    }, um = {
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
      return e.type === "keydown" || e.type === "keyup" ? um[e.keyCode] || "Unidentified" : "";
    }
    var Kg = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function sm(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = Kg[e];
      return i ? !!a[i] : !1;
    }
    function $p(e) {
      return sm;
    }
    var Gg = Tt({}, Bl, {
      key: Ln,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: $p,
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
    }), cm = bn(Gg), fm = Tt({}, Mi, {
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
    }), dm = bn(fm), Ga = Tt({}, Bl, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: $p
    }), Fp = bn(Ga), Qg = Tt({}, er, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), el = bn(Qg), Yf = Tt({}, Mi, {
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
    }), Wl = bn(Yf), Wf = [9, 13, 27, 32], Kf = 229, yc = hn && "CompositionEvent" in window, gc = null;
    hn && "documentMode" in document && (gc = document.documentMode);
    var Hp = hn && "TextEvent" in window && !gc, pm = hn && (!yc || gc && gc > 8 && gc <= 11), Vp = 32, Ip = String.fromCharCode(Vp);
    function Gf() {
      br("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), br("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), br("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), br("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Ec = !1;
    function vm(e) {
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
      return e === "keydown" && t.keyCode === Kf;
    }
    function Yp(e, t) {
      switch (e) {
        case "keyup":
          return Wf.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Kf;
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
      pm && !_c(i) && (!tl && c === "onCompositionStart" ? tl = Ff(l) : c === "onCompositionEnd" && tl && (p = Hf()));
      var m = _m(a, c);
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
    function hm(e, t) {
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
          var a = Hf();
          return vc(), tl = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!vm(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return pm && !_c(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Xf(e, t, a, i, l) {
      var c;
      if (Hp ? c = hm(t, i) : c = Xg(t, i), !c)
        return null;
      var p = _m(a, "onBeforeInput");
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
    function mm(e) {
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
      br("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function r(e, t, a, i) {
      Su(i);
      var l = _m(t, "onChange");
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
      G0(e, 0);
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
    var B = !1;
    hn && (B = Zf("input") && (!document.documentMode || document.documentMode > 9));
    function ie(e, t) {
      o = e, s = t, o.attachEvent("onpropertychange", ne);
    }
    function ue() {
      o && (o.detachEvent("onpropertychange", ne), o = null, s = null);
    }
    function ne(e) {
      e.propertyName === "value" && w(s) && h(e);
    }
    function be(e, t, a) {
      e === "focusin" ? (ue(), ie(t, a)) : e === "focusout" && ue();
    }
    function ke(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return w(s);
    }
    function Ue(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Hn(e, t) {
      if (e === "click")
        return w(t);
    }
    function U(e, t) {
      if (e === "input" || e === "change")
        return w(t);
    }
    function L(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || rt(e, "number", e.value);
    }
    function $(e, t, a, i, l, c, p) {
      var m = a ? ad(a) : window, y, C;
      if (d(m) ? y = k : mm(m) ? B ? y = U : (y = ke, C = be) : Ue(m) && (y = Hn), y) {
        var b = y(t, a);
        if (b) {
          r(e, b, i, l);
          return;
        }
      }
      C && C(t, m, a), t === "focusout" && L(m);
    }
    function de() {
      qn("onMouseEnter", ["mouseout", "mouseover"]), qn("onMouseLeave", ["mouseout", "mouseover"]), qn("onPointerEnter", ["pointerout", "pointerover"]), qn("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function Fe(e, t, a, i, l, c, p) {
      var m = t === "mouseover" || t === "pointerover", y = t === "mouseout" || t === "pointerout";
      if (m && !Oh(i)) {
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
        var N, V;
        if (y) {
          var I = i.relatedTarget || i.toElement;
          if (N = a, V = I ? bc(I) : null, V !== null) {
            var K = Io(V);
            (V !== K || V.tag !== ee && V.tag !== ae) && (V = null);
          }
        } else
          N = null, V = a;
        if (N !== V) {
          var xe = If, Xe = "onMouseLeave", Ve = "onMouseEnter", Lt = "mouse";
          (t === "pointerout" || t === "pointerover") && (xe = dm, Xe = "onPointerLeave", Ve = "onPointerEnter", Lt = "pointer");
          var Ot = N == null ? b : ad(N), j = V == null ? b : ad(V), G = new xe(Xe, Lt + "leave", N, i, l);
          G.target = Ot, G.relatedTarget = j;
          var P = null, se = bc(l);
          if (se === a) {
            var De = new xe(Ve, Lt + "enter", V, i, l);
            De.target = j, De.relatedTarget = Ot, P = De;
          }
          z1(e, G, P, N, V);
        }
      }
    }
    function Je(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Ne = typeof Object.is == "function" ? Object.is : Je;
    function et(e, t) {
      if (Ne(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var l = 0; l < a.length; l++) {
        var c = a[l];
        if (!Xn.call(t, c) || !Ne(e[c], t[c]))
          return !1;
      }
      return !0;
    }
    function tr(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Ft(e) {
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
        a = tr(Ft(a));
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
      return h1(e, l, c, p, m);
    }
    function h1(e, t, a, i, l) {
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
    function m1(e, t) {
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
    function U0(e) {
      return e && e.nodeType === to;
    }
    function j0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : U0(e) ? !1 : U0(t) ? j0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function y1(e) {
      return e && e.ownerDocument && j0(e.ownerDocument.documentElement, e);
    }
    function g1(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function P0() {
      for (var e = window, t = Ti(); t instanceof e.HTMLIFrameElement; ) {
        if (g1(t))
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
    function E1() {
      var e = P0();
      return {
        focusedElem: e,
        selectionRange: eE(e) ? S1(e) : null
      };
    }
    function _1(e) {
      var t = P0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && y1(a)) {
        i !== null && eE(a) && C1(a, i);
        for (var l = [], c = a; c = c.parentNode; )
          c.nodeType === Zr && l.push({
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
    function S1(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Jg(e), t || {
        start: 0,
        end: 0
      };
    }
    function C1(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : m1(e, t);
    }
    var T1 = hn && "documentMode" in document && document.documentMode <= 11;
    function b1() {
      br("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Jf = null, tE = null, Wp = null, nE = !1;
    function w1(e) {
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
    function R1(e) {
      return e.window === e ? e.document : e.nodeType === ga ? e : e.ownerDocument;
    }
    function $0(e, t, a) {
      var i = R1(a);
      if (!(nE || Jf == null || Jf !== Ti(i))) {
        var l = w1(Jf);
        if (!Wp || !et(Wp, l)) {
          Wp = l;
          var c = _m(tE, "onSelect");
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
    function x1(e, t, a, i, l, c, p) {
      var m = a ? ad(a) : window;
      switch (t) {
        case "focusin":
          (mm(m) || m.contentEditable === "true") && (Jf = m, tE = a, Wp = null);
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
          nE = !1, $0(e, i, l);
          break;
        case "selectionchange":
          if (T1)
            break;
        case "keydown":
        case "keyup":
          $0(e, i, l);
      }
    }
    function ym(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var ed = {
      animationend: ym("Animation", "AnimationEnd"),
      animationiteration: ym("Animation", "AnimationIteration"),
      animationstart: ym("Animation", "AnimationStart"),
      transitionend: ym("Transition", "TransitionEnd")
    }, rE = {}, F0 = {};
    hn && (F0 = document.createElement("div").style, "AnimationEvent" in window || (delete ed.animationend.animation, delete ed.animationiteration.animation, delete ed.animationstart.animation), "TransitionEvent" in window || delete ed.transitionend.transition);
    function gm(e) {
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
    var H0 = gm("animationend"), V0 = gm("animationiteration"), I0 = gm("animationstart"), B0 = gm("transitionend"), Y0 = /* @__PURE__ */ new Map(), W0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function qu(e, t) {
      Y0.set(e, t), br(t, [e]);
    }
    function D1() {
      for (var e = 0; e < W0.length; e++) {
        var t = W0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        qu(a, "on" + i);
      }
      qu(H0, "onAnimationEnd"), qu(V0, "onAnimationIteration"), qu(I0, "onAnimationStart"), qu("dblclick", "onDoubleClick"), qu("focusin", "onFocus"), qu("focusout", "onBlur"), qu(B0, "onTransitionEnd");
    }
    function O1(e, t, a, i, l, c, p) {
      var m = Y0.get(t);
      if (m !== void 0) {
        var y = Vf, C = t;
        switch (t) {
          case "keypress":
            if (Il(i) === 0)
              return;
          case "keydown":
          case "keyup":
            y = cm;
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
            y = am;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = Fp;
            break;
          case H0:
          case V0:
          case I0:
            y = Bg;
            break;
          case B0:
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
            y = om;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = dm;
            break;
        }
        var b = (c & Is) !== 0;
        {
          var M = !b && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", N = L1(a, m, i.type, b, M);
          if (N.length > 0) {
            var V = new y(m, C, null, i, l);
            e.push({
              event: V,
              listeners: N
            });
          }
        }
      }
    }
    D1(), de(), n(), b1(), Gf();
    function A1(e, t, a, i, l, c, p) {
      O1(e, t, a, i, l, c);
      var m = (c & Ag) === 0;
      m && (Fe(e, t, a, i, l), $(e, t, a, i, l), x1(e, t, a, i, l), Zg(e, t, a, i, l));
    }
    var Kp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], aE = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Kp));
    function K0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, dp(i, t, void 0, e), e.currentTarget = null;
    }
    function k1(e, t, a) {
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
          var b = t[C], M = b.instance, N = b.currentTarget, V = b.listener;
          if (M !== i && e.isPropagationStopped())
            return;
          K0(e, V, N), i = M;
        }
    }
    function G0(e, t) {
      for (var a = (t & Is) !== 0, i = 0; i < e.length; i++) {
        var l = e[i], c = l.event, p = l.listeners;
        k1(c, p, a);
      }
      Ng();
    }
    function N1(e, t, a, i, l) {
      var c = tn(a), p = [];
      A1(p, e, i, a, c, t), G0(p, t);
    }
    function wn(e, t) {
      aE.has(e) || _('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = uD(t), l = U1(e, a);
      i.has(l) || (Q0(t, e, Vs, a), i.add(l));
    }
    function iE(e, t, a) {
      aE.has(e) && !t && _('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Is), Q0(a, e, i, t);
    }
    var Em = "_reactListening" + Math.random().toString(36).slice(2);
    function Gp(e) {
      if (!e[Em]) {
        e[Em] = !0, Kt.forEach(function(a) {
          a !== "selectionchange" && (aE.has(a) || iE(a, !1, e), iE(a, !0, e));
        });
        var t = e.nodeType === ga ? e : e.ownerDocument;
        t !== null && (t[Em] || (t[Em] = !0, iE("selectionchange", !1, t)));
      }
    }
    function Q0(e, t, a, i, l) {
      var c = Jn(e, t, a), p = void 0;
      Ws && (t === "touchstart" || t === "touchmove" || t === "wheel") && (p = !0), e = e, i ? p !== void 0 ? $f(e, t, c, p) : fo(e, t, c) : p !== void 0 ? zp(e, t, c, p) : Wu(e, t, c);
    }
    function q0(e, t) {
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
              if (y === q || y === te) {
                var C = m.stateNode.containerInfo;
                if (q0(C, p))
                  break;
                if (y === te)
                  for (var b = m.return; b !== null; ) {
                    var M = b.tag;
                    if (M === q || M === te) {
                      var N = b.stateNode.containerInfo;
                      if (q0(N, p))
                        return;
                    }
                    b = b.return;
                  }
                for (; C !== null; ) {
                  var V = bc(C);
                  if (V === null)
                    return;
                  var I = V.tag;
                  if (I === ee || I === ae) {
                    m = c = V;
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
        return N1(e, t, a, c);
      });
    }
    function Qp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function L1(e, t, a, i, l, c) {
      for (var p = t !== null ? t + "Capture" : null, m = i ? p : t, y = [], C = e, b = null; C !== null; ) {
        var M = C, N = M.stateNode, V = M.tag;
        if (V === ee && N !== null && (b = N, m !== null)) {
          var I = xl(C, m);
          I != null && y.push(Qp(C, I, b));
        }
        if (l)
          break;
        C = C.return;
      }
      return y;
    }
    function _m(e, t) {
      for (var a = t + "Capture", i = [], l = e; l !== null; ) {
        var c = l, p = c.stateNode, m = c.tag;
        if (m === ee && p !== null) {
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
      while (e && e.tag !== ee);
      return e || null;
    }
    function M1(e, t) {
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
    function X0(e, t, a, i, l) {
      for (var c = t._reactName, p = [], m = a; m !== null && m !== i; ) {
        var y = m, C = y.alternate, b = y.stateNode, M = y.tag;
        if (C !== null && C === i)
          break;
        if (M === ee && b !== null) {
          var N = b;
          if (l) {
            var V = xl(m, c);
            V != null && p.unshift(Qp(m, V, N));
          } else if (!l) {
            var I = xl(m, c);
            I != null && p.push(Qp(m, I, N));
          }
        }
        m = m.return;
      }
      p.length !== 0 && e.push({
        event: t,
        listeners: p
      });
    }
    function z1(e, t, a, i, l) {
      var c = i && l ? M1(i, l) : null;
      i !== null && X0(e, t, i, c, !1), l !== null && a !== null && X0(e, a, l, c, !0);
    }
    function U1(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var Qa = !1, qp = "dangerouslySetInnerHTML", Sm = "suppressContentEditableWarning", Xu = "suppressHydrationWarning", Z0 = "autoFocus", Cc = "children", Tc = "style", Cm = "__html", lE, Tm, Xp, J0, bm, eC, tC;
    lE = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Tm = function(e, t) {
      _u(e, t), Th(e, t), $o(e, t, {
        registrationNameDependencies: Qn,
        possibleRegistrationNames: Mn
      });
    }, eC = hn && !document.documentMode, Xp = function(e, t, a) {
      if (!Qa) {
        var i = wm(a), l = wm(t);
        l !== i && (Qa = !0, _("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(l), JSON.stringify(i)));
      }
    }, J0 = function(e) {
      if (!Qa) {
        Qa = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), _("Extra attributes from the server: %s", t);
      }
    }, bm = function(e, t) {
      t === !1 ? _("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : _("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, tC = function(e, t) {
      var a = e.namespaceURI === eo ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var j1 = /\r\n?/g, P1 = /\u0000|\uFFFD/g;
    function wm(e) {
      Rr(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(j1, `
`).replace(P1, "");
    }
    function Rm(e, t, a, i) {
      var l = wm(t), c = wm(e);
      if (c !== l && (i && (Qa || (Qa = !0, _('Text content did not match. Server: "%s" Client: "%s"', c, l))), a && X))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function nC(e) {
      return e.nodeType === ga ? e : e.ownerDocument;
    }
    function $1() {
    }
    function xm(e) {
      e.onclick = $1;
    }
    function F1(e, t, a, i, l) {
      for (var c in i)
        if (i.hasOwnProperty(c)) {
          var p = i[c];
          if (c === Tc)
            p && Object.freeze(p), yh(t, p);
          else if (c === qp) {
            var m = p ? p[Cm] : void 0;
            m != null && uh(t, m);
          } else if (c === Cc)
            if (typeof p == "string") {
              var y = e !== "textarea" || p !== "";
              y && Us(t, p);
            } else
              typeof p == "number" && Us(t, "" + p);
          else
            c === Sm || c === Xu || c === Z0 || (Qn.hasOwnProperty(c) ? p != null && (typeof p != "function" && bm(c, p), c === "onScroll" && wn("scroll", t)) : p != null && Wi(t, c, p, l));
        }
    }
    function H1(e, t, a, i) {
      for (var l = 0; l < t.length; l += 2) {
        var c = t[l], p = t[l + 1];
        c === Tc ? yh(e, p) : c === qp ? uh(e, p) : c === Cc ? Us(e, p) : Wi(e, c, p, i);
      }
    }
    function V1(e, t, a, i) {
      var l, c = nC(a), p, m = i;
      if (m === eo && (m = Gd(e)), m === eo) {
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
    function I1(e, t) {
      return nC(t).createTextNode(e);
    }
    function B1(e, t, a, i) {
      var l = bl(t, a);
      Tm(t, a);
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
          for (var p = 0; p < Kp.length; p++)
            wn(Kp[p], e);
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
          R(e, a), c = g(e, a), wn("invalid", e);
          break;
        case "option":
          qt(e, a), c = a;
          break;
        case "select":
          zs(e, a), c = Ms(e, a), wn("invalid", e);
          break;
        case "textarea":
          oh(e, a), c = Kd(e, a), wn("invalid", e);
          break;
        default:
          c = a;
      }
      switch ($s(t, c), F1(t, e, i, c, l), t) {
        case "input":
          Xi(e), fe(e, a, !1);
          break;
        case "textarea":
          Xi(e), Gc(e);
          break;
        case "option":
          Xt(e, a);
          break;
        case "select":
          Wd(e, a);
          break;
        default:
          typeof c.onClick == "function" && xm(e);
          break;
      }
    }
    function Y1(e, t, a, i, l) {
      Tm(t, i);
      var c = null, p, m;
      switch (t) {
        case "input":
          p = g(e, a), m = g(e, i), c = [];
          break;
        case "select":
          p = Ms(e, a), m = Ms(e, i), c = [];
          break;
        case "textarea":
          p = Kd(e, a), m = Kd(e, i), c = [];
          break;
        default:
          p = a, m = i, typeof p.onClick != "function" && typeof m.onClick == "function" && xm(e);
          break;
      }
      $s(t, m);
      var y, C, b = null;
      for (y in p)
        if (!(m.hasOwnProperty(y) || !p.hasOwnProperty(y) || p[y] == null))
          if (y === Tc) {
            var M = p[y];
            for (C in M)
              M.hasOwnProperty(C) && (b || (b = {}), b[C] = "");
          } else
            y === qp || y === Cc || y === Sm || y === Xu || y === Z0 || (Qn.hasOwnProperty(y) ? c || (c = []) : (c = c || []).push(y, null));
      for (y in m) {
        var N = m[y], V = p != null ? p[y] : void 0;
        if (!(!m.hasOwnProperty(y) || N === V || N == null && V == null))
          if (y === Tc)
            if (N && Object.freeze(N), V) {
              for (C in V)
                V.hasOwnProperty(C) && (!N || !N.hasOwnProperty(C)) && (b || (b = {}), b[C] = "");
              for (C in N)
                N.hasOwnProperty(C) && V[C] !== N[C] && (b || (b = {}), b[C] = N[C]);
            } else
              b || (c || (c = []), c.push(y, b)), b = N;
          else if (y === qp) {
            var I = N ? N[Cm] : void 0, K = V ? V[Cm] : void 0;
            I != null && K !== I && (c = c || []).push(y, I);
          } else
            y === Cc ? (typeof N == "string" || typeof N == "number") && (c = c || []).push(y, "" + N) : y === Sm || y === Xu || (Qn.hasOwnProperty(y) ? (N != null && (typeof N != "function" && bm(y, N), y === "onScroll" && wn("scroll", e)), !c && V !== N && (c = [])) : (c = c || []).push(y, N));
      }
      return b && (gh(b, m[Tc]), (c = c || []).push(Tc, b)), c;
    }
    function W1(e, t, a, i, l) {
      a === "input" && l.type === "radio" && l.name != null && F(e, l);
      var c = bl(a, i), p = bl(a, l);
      switch (H1(e, t, c, p), a) {
        case "input":
          Y(e, l);
          break;
        case "textarea":
          lh(e, l);
          break;
        case "select":
          Eg(e, l);
          break;
      }
    }
    function K1(e) {
      {
        var t = e.toLowerCase();
        return Zc.hasOwnProperty(t) && Zc[t] || null;
      }
    }
    function G1(e, t, a, i, l, c, p) {
      var m, y;
      switch (m = bl(t, a), Tm(t, a), t) {
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
          for (var C = 0; C < Kp.length; C++)
            wn(Kp[C], e);
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
          oh(e, a), wn("invalid", e);
          break;
      }
      $s(t, a);
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
      var V = null;
      for (var I in a)
        if (a.hasOwnProperty(I)) {
          var K = a[I];
          if (I === Cc)
            typeof K == "string" ? e.textContent !== K && (a[Xu] !== !0 && Rm(e.textContent, K, c, p), V = [Cc, K]) : typeof K == "number" && e.textContent !== "" + K && (a[Xu] !== !0 && Rm(e.textContent, K, c, p), V = [Cc, "" + K]);
          else if (Qn.hasOwnProperty(I))
            K != null && (typeof K != "function" && bm(I, K), I === "onScroll" && wn("scroll", e));
          else if (p && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof m == "boolean") {
            var xe = void 0, Xe = m && Ie ? null : ar(I);
            if (a[Xu] !== !0) {
              if (!(I === Sm || I === Xu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              I === "value" || I === "checked" || I === "selected")) {
                if (I === qp) {
                  var Ve = e.innerHTML, Lt = K ? K[Cm] : void 0;
                  if (Lt != null) {
                    var Ot = tC(e, Lt);
                    Ot !== Ve && Xp(I, Ve, Ot);
                  }
                } else if (I === Tc) {
                  if (y.delete(I), eC) {
                    var j = Og(K);
                    xe = e.getAttribute("style"), j !== xe && Xp(I, xe, j);
                  }
                } else if (m && !Ie)
                  y.delete(I.toLowerCase()), xe = La(e, I, K), K !== xe && Xp(I, xe, K);
                else if (!_n(I, Xe, m) && !Gt(I, K, Xe, m)) {
                  var G = !1;
                  if (Xe !== null)
                    y.delete(Xe.attributeName), xe = ii(e, I, K, Xe);
                  else {
                    var P = i;
                    if (P === eo && (P = Gd(t)), P === eo)
                      y.delete(I.toLowerCase());
                    else {
                      var se = K1(I);
                      se !== null && se !== I && (G = !0, y.delete(se)), y.delete(I);
                    }
                    xe = La(e, I, K);
                  }
                  var De = Ie;
                  !De && K !== xe && !G && Xp(I, xe, K);
                }
              }
            }
          }
        }
      switch (p && // $FlowFixMe - Should be inferred as not undefined.
      y.size > 0 && a[Xu] !== !0 && J0(y), t) {
        case "input":
          Xi(e), fe(e, a, !0);
          break;
        case "textarea":
          Xi(e), Gc(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && xm(e);
          break;
      }
      return V;
    }
    function Q1(e, t, a) {
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
    function q1(e, t, a) {
      switch (t) {
        case "input":
          Me(e, a);
          return;
        case "textarea":
          _g(e, a);
          return;
        case "select":
          ah(e, a);
          return;
      }
    }
    var Zp = function() {
    }, Jp = function() {
    };
    {
      var X1 = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], rC = [
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
      ], Z1 = rC.concat(["button"]), J1 = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], aC = {
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
        var a = Tt({}, e || aC), i = {
          tag: t
        };
        return rC.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), Z1.indexOf(t) !== -1 && (a.pTagInButtonScope = null), X1.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var ex = function(e, t) {
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
            return J1.indexOf(t) === -1;
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
      }, tx = function(e, t) {
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
      }, iC = {};
      Zp = function(e, t, a) {
        a = a || aC;
        var i = a.current, l = i && i.tag;
        t != null && (e != null && _("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var c = ex(e, l) ? null : i, p = c ? null : tx(e, a), m = c || p;
        if (m) {
          var y = m.tag, C = !!c + "|" + e + "|" + y;
          if (!iC[C]) {
            iC[C] = !0;
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
    var Dm = "suppressHydrationWarning", Om = "$", Am = "/$", ev = "$?", tv = "$!", nx = "style", dE = null, pE = null;
    function rx(e) {
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
    function ax(e, t, a) {
      {
        var i = e, l = Qd(i.namespace, t), c = Jp(i.ancestorInfo, t);
        return {
          namespace: l,
          ancestorInfo: c
        };
      }
    }
    function Mj(e) {
      return e;
    }
    function ix(e) {
      dE = Bu(), pE = E1();
      var t = null;
      return ua(!1), t;
    }
    function ox(e) {
      _1(pE), ua(dE), dE = null, pE = null;
    }
    function lx(e, t, a, i, l) {
      var c;
      {
        var p = i;
        if (Zp(e, null, p.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var m = "" + t.children, y = Jp(p.ancestorInfo, e);
          Zp(null, m, y);
        }
        c = p.namespace;
      }
      var C = V1(e, t, a, c);
      return av(l, C), SE(C, t), C;
    }
    function ux(e, t) {
      e.appendChild(t);
    }
    function sx(e, t, a, i, l) {
      switch (B1(e, t, a, i), t) {
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
    function cx(e, t, a, i, l, c) {
      {
        var p = c;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var m = "" + i.children, y = Jp(p.ancestorInfo, t);
          Zp(null, m, y);
        }
      }
      return Y1(e, t, a, i);
    }
    function vE(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function fx(e, t, a, i) {
      {
        var l = a;
        Zp(null, e, l.ancestorInfo);
      }
      var c = I1(e, t);
      return av(i, c), c;
    }
    function dx() {
      var e = window.event;
      return e === void 0 ? ki : Pf(e.type);
    }
    var hE = typeof setTimeout == "function" ? setTimeout : void 0, px = typeof clearTimeout == "function" ? clearTimeout : void 0, mE = -1, oC = typeof Promise == "function" ? Promise : void 0, vx = typeof queueMicrotask == "function" ? queueMicrotask : typeof oC < "u" ? function(e) {
      return oC.resolve(null).then(e).catch(hx);
    } : hE;
    function hx(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function mx(e, t, a, i) {
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
    function yx(e, t, a, i, l, c) {
      W1(e, t, a, i, l), SE(e, l);
    }
    function lC(e) {
      Us(e, "");
    }
    function gx(e, t, a) {
      e.nodeValue = a;
    }
    function Ex(e, t) {
      e.appendChild(t);
    }
    function _x(e, t) {
      var a;
      e.nodeType === Dn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && xm(a);
    }
    function Sx(e, t, a) {
      e.insertBefore(t, a);
    }
    function Cx(e, t, a) {
      e.nodeType === Dn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function Tx(e, t) {
      e.removeChild(t);
    }
    function bx(e, t) {
      e.nodeType === Dn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function yE(e, t) {
      var a = t, i = 0;
      do {
        var l = a.nextSibling;
        if (e.removeChild(a), l && l.nodeType === Dn) {
          var c = l.data;
          if (c === Am)
            if (i === 0) {
              e.removeChild(l), Nn(t);
              return;
            } else
              i--;
          else
            (c === Om || c === ev || c === tv) && i++;
        }
        a = l;
      } while (a);
      Nn(t);
    }
    function wx(e, t) {
      e.nodeType === Dn ? yE(e.parentNode, t) : e.nodeType === Zr && yE(e, t), Nn(e);
    }
    function Rx(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function xx(e) {
      e.nodeValue = "";
    }
    function Dx(e, t) {
      e = e;
      var a = t[nx], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = jo("display", i);
    }
    function Ox(e, t) {
      e.nodeValue = t;
    }
    function Ax(e) {
      e.nodeType === Zr ? e.textContent = "" : e.nodeType === ga && e.documentElement && e.removeChild(e.documentElement);
    }
    function kx(e, t, a) {
      return e.nodeType !== Zr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function Nx(e, t) {
      return t === "" || e.nodeType !== to ? null : e;
    }
    function Lx(e) {
      return e.nodeType !== Dn ? null : e;
    }
    function uC(e) {
      return e.data === ev;
    }
    function gE(e) {
      return e.data === tv;
    }
    function Mx(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, l;
      return t && (a = t.dgst, i = t.msg, l = t.stck), {
        message: i,
        digest: a,
        stack: l
      };
    }
    function zx(e, t) {
      e._reactRetry = t;
    }
    function km(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Zr || t === to)
          break;
        if (t === Dn) {
          var a = e.data;
          if (a === Om || a === tv || a === ev)
            break;
          if (a === Am)
            return null;
        }
      }
      return e;
    }
    function nv(e) {
      return km(e.nextSibling);
    }
    function Ux(e) {
      return km(e.firstChild);
    }
    function jx(e) {
      return km(e.firstChild);
    }
    function Px(e) {
      return km(e.nextSibling);
    }
    function $x(e, t, a, i, l, c, p) {
      av(c, e), SE(e, a);
      var m;
      {
        var y = l;
        m = y.namespace;
      }
      var C = (c.mode & He) !== qe;
      return G1(e, t, a, m, i, C, p);
    }
    function Fx(e, t, a, i) {
      return av(a, e), a.mode & He, Q1(e, t);
    }
    function Hx(e, t) {
      av(t, e);
    }
    function Vx(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Dn) {
          var i = t.data;
          if (i === Am) {
            if (a === 0)
              return nv(t);
            a--;
          } else
            (i === Om || i === tv || i === ev) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function sC(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Dn) {
          var i = t.data;
          if (i === Om || i === tv || i === ev) {
            if (a === 0)
              return t;
            a--;
          } else
            i === Am && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function Ix(e) {
      Nn(e);
    }
    function Bx(e) {
      Nn(e);
    }
    function Yx(e) {
      return e !== "head" && e !== "body";
    }
    function Wx(e, t, a, i) {
      var l = !0;
      Rm(t.nodeValue, a, i, l);
    }
    function Kx(e, t, a, i, l, c) {
      if (t[Dm] !== !0) {
        var p = !0;
        Rm(i.nodeValue, l, c, p);
      }
    }
    function Gx(e, t) {
      t.nodeType === Zr ? uE(e, t) : t.nodeType === Dn || sE(e, t);
    }
    function Qx(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Zr ? uE(a, t) : t.nodeType === Dn || sE(a, t));
      }
    }
    function qx(e, t, a, i, l) {
      (l || t[Dm] !== !0) && (i.nodeType === Zr ? uE(a, i) : i.nodeType === Dn || sE(a, i));
    }
    function Xx(e, t, a) {
      cE(e, t);
    }
    function Zx(e, t) {
      fE(e, t);
    }
    function Jx(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && cE(i, t);
      }
    }
    function eD(e, t) {
      {
        var a = e.parentNode;
        a !== null && fE(a, t);
      }
    }
    function tD(e, t, a, i, l, c) {
      (c || t[Dm] !== !0) && cE(a, i);
    }
    function nD(e, t, a, i, l) {
      (l || t[Dm] !== !0) && fE(a, i);
    }
    function rD(e) {
      _("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function aD(e) {
      Gp(e);
    }
    var nd = Math.random().toString(36).slice(2), rd = "__reactFiber$" + nd, EE = "__reactProps$" + nd, rv = "__reactContainer$" + nd, _E = "__reactEvents$" + nd, iD = "__reactListeners$" + nd, oD = "__reactHandles$" + nd;
    function lD(e) {
      delete e[rd], delete e[EE], delete e[_E], delete e[iD], delete e[oD];
    }
    function av(e, t) {
      t[rd] = e;
    }
    function Nm(e, t) {
      t[rv] = e;
    }
    function cC(e) {
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
            for (var l = sC(e); l !== null; ) {
              var c = l[rd];
              if (c)
                return c;
              l = sC(l);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Zu(e) {
      var t = e[rd] || e[rv];
      return t && (t.tag === ee || t.tag === ae || t.tag === ce || t.tag === q) ? t : null;
    }
    function ad(e) {
      if (e.tag === ee || e.tag === ae)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Lm(e) {
      return e[EE] || null;
    }
    function SE(e, t) {
      e[EE] = t;
    }
    function uD(e) {
      var t = e[_E];
      return t === void 0 && (t = e[_E] = /* @__PURE__ */ new Set()), t;
    }
    var fC = {}, dC = E.ReactDebugCurrentFrame;
    function Mm(e) {
      if (e) {
        var t = e._owner, a = At(e.type, e._source, t ? t.type : null);
        dC.setExtraStackFrame(a);
      } else
        dC.setExtraStackFrame(null);
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
            m && !(m instanceof Error) && (Mm(l), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, p, typeof m), Mm(null)), m instanceof Error && !(m.message in fC) && (fC[m.message] = !0, Mm(l), _("Failed %s type: %s", a, m.message), Mm(null));
          }
      }
    }
    var CE = [], zm;
    zm = [];
    var Kl = -1;
    function Ju(e) {
      return {
        current: e
      };
    }
    function sa(e, t) {
      if (Kl < 0) {
        _("Unexpected pop.");
        return;
      }
      t !== zm[Kl] && _("Unexpected Fiber popped."), e.current = CE[Kl], CE[Kl] = null, zm[Kl] = null, Kl--;
    }
    function ca(e, t, a) {
      Kl++, CE[Kl] = e.current, zm[Kl] = a, e.current = t;
    }
    var TE;
    TE = {};
    var pi = {};
    Object.freeze(pi);
    var Gl = Ju(pi), nl = Ju(!1), bE = pi;
    function id(e, t, a) {
      return a && rl(t) ? bE : Gl.current;
    }
    function pC(e, t, a) {
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
          var m = st(e) || "Unknown";
          ho(i, c, "context", m);
        }
        return l && pC(e, t, c), c;
      }
    }
    function Um() {
      return nl.current;
    }
    function rl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function jm(e) {
      sa(nl, e), sa(Gl, e);
    }
    function wE(e) {
      sa(nl, e), sa(Gl, e);
    }
    function vC(e, t, a) {
      {
        if (Gl.current !== pi)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        ca(Gl, t, e), ca(nl, a, e);
      }
    }
    function hC(e, t, a) {
      {
        var i = e.stateNode, l = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var c = st(e) || "Unknown";
            TE[c] || (TE[c] = !0, _("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", c, c));
          }
          return a;
        }
        var p = i.getChildContext();
        for (var m in p)
          if (!(m in l))
            throw new Error((st(e) || "Unknown") + '.getChildContext(): key "' + m + '" is not defined in childContextTypes.');
        {
          var y = st(e) || "Unknown";
          ho(l, p, "child context", y);
        }
        return Tt({}, a, p);
      }
    }
    function Pm(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || pi;
        return bE = Gl.current, ca(Gl, a, e), ca(nl, nl.current, e), !0;
      }
    }
    function mC(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var l = hC(e, t, bE);
          i.__reactInternalMemoizedMergedChildContext = l, sa(nl, e), sa(Gl, e), ca(Gl, l, e), ca(nl, a, e);
        } else
          sa(nl, e), ca(nl, a, e);
      }
    }
    function sD(e) {
      {
        if (!Sa(e) || e.tag !== z)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case q:
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
    var es = 0, $m = 1, Ql = null, RE = !1, xE = !1;
    function yC(e) {
      Ql === null ? Ql = [e] : Ql.push(e);
    }
    function cD(e) {
      RE = !0, yC(e);
    }
    function gC() {
      RE && ts();
    }
    function ts() {
      if (!xE && Ql !== null) {
        xE = !0;
        var e = 0, t = Ba();
        try {
          var a = !0, i = Ql;
          for (kn(Fn); e < i.length; e++) {
            var l = i[e];
            do
              l = l(a);
            while (l !== null);
          }
          Ql = null, RE = !1;
        } catch (c) {
          throw Ql !== null && (Ql = Ql.slice(e + 1)), mp(ra, ts), c;
        } finally {
          kn(t), xE = !1;
        }
      }
      return null;
    }
    var ld = [], ud = 0, Fm = null, Hm = 0, zi = [], Ui = 0, wc = null, ql = 1, Xl = "";
    function fD(e) {
      return xc(), (e.flags & Mh) !== Qe;
    }
    function dD(e) {
      return xc(), Hm;
    }
    function pD() {
      var e = Xl, t = ql, a = t & ~vD(t);
      return a.toString(32) + e;
    }
    function Rc(e, t) {
      xc(), ld[ud++] = Hm, ld[ud++] = Fm, Fm = e, Hm = t;
    }
    function EC(e, t, a) {
      xc(), zi[Ui++] = ql, zi[Ui++] = Xl, zi[Ui++] = wc, wc = e;
      var i = ql, l = Xl, c = Vm(i) - 1, p = i & ~(1 << c), m = a + 1, y = Vm(t) + c;
      if (y > 30) {
        var C = c - c % 5, b = (1 << C) - 1, M = (p & b).toString(32), N = p >> C, V = c - C, I = Vm(t) + V, K = m << V, xe = K | N, Xe = M + l;
        ql = 1 << I | xe, Xl = Xe;
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
        Rc(e, a), EC(e, a, i);
      }
    }
    function Vm(e) {
      return 32 - tc(e);
    }
    function vD(e) {
      return 1 << Vm(e) - 1;
    }
    function OE(e) {
      for (; e === Fm; )
        Fm = ld[--ud], ld[ud] = null, Hm = ld[--ud], ld[ud] = null;
      for (; e === wc; )
        wc = zi[--Ui], zi[Ui] = null, Xl = zi[--Ui], zi[Ui] = null, ql = zi[--Ui], zi[Ui] = null;
    }
    function hD() {
      return xc(), wc !== null ? {
        id: ql,
        overflow: Xl
      } : null;
    }
    function mD(e, t) {
      xc(), zi[Ui++] = ql, zi[Ui++] = Xl, zi[Ui++] = wc, ql = t.id, Xl = t.overflow, wc = e;
    }
    function xc() {
      Pr() || _("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var jr = null, ji = null, mo = !1, Dc = !1, ns = null;
    function yD() {
      mo && _("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function _C() {
      Dc = !0;
    }
    function gD() {
      return Dc;
    }
    function ED(e) {
      var t = e.stateNode.containerInfo;
      return ji = jx(t), jr = e, mo = !0, ns = null, Dc = !1, !0;
    }
    function _D(e, t, a) {
      return ji = Px(t), jr = e, mo = !0, ns = null, Dc = !1, a !== null && mD(e, a), !0;
    }
    function SC(e, t) {
      switch (e.tag) {
        case q: {
          Gx(e.stateNode.containerInfo, t);
          break;
        }
        case ee: {
          var a = (e.mode & He) !== qe;
          qx(
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
          i.dehydrated !== null && Qx(i.dehydrated, t);
          break;
        }
      }
    }
    function CC(e, t) {
      SC(e, t);
      var a = Tk();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= $t) : i.push(a);
    }
    function AE(e, t) {
      {
        if (Dc)
          return;
        switch (e.tag) {
          case q: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case ee:
                var i = t.type;
                t.pendingProps, Xx(a, i);
                break;
              case ae:
                var l = t.pendingProps;
                Zx(a, l);
                break;
            }
            break;
          }
          case ee: {
            var c = e.type, p = e.memoizedProps, m = e.stateNode;
            switch (t.tag) {
              case ee: {
                var y = t.type, C = t.pendingProps, b = (e.mode & He) !== qe;
                tD(
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
              case ae: {
                var M = t.pendingProps, N = (e.mode & He) !== qe;
                nD(
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
            var V = e.memoizedState, I = V.dehydrated;
            if (I !== null)
              switch (t.tag) {
                case ee:
                  var K = t.type;
                  t.pendingProps, Jx(I, K);
                  break;
                case ae:
                  var xe = t.pendingProps;
                  eD(I, xe);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function TC(e, t) {
      t.flags = t.flags & ~Ri | nn, AE(e, t);
    }
    function bC(e, t) {
      switch (e.tag) {
        case ee: {
          var a = e.type;
          e.pendingProps;
          var i = kx(t, a);
          return i !== null ? (e.stateNode = i, jr = e, ji = Ux(i), !0) : !1;
        }
        case ae: {
          var l = e.pendingProps, c = Nx(t, l);
          return c !== null ? (e.stateNode = c, jr = e, ji = null, !0) : !1;
        }
        case ce: {
          var p = Lx(t);
          if (p !== null) {
            var m = {
              dehydrated: p,
              treeContext: hD(),
              retryLane: ba
            };
            e.memoizedState = m;
            var y = bk(p);
            return y.return = e, e.child = y, jr = e, ji = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function kE(e) {
      return (e.mode & He) !== qe && (e.flags & dt) === Qe;
    }
    function NE(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function LE(e) {
      if (mo) {
        var t = ji;
        if (!t) {
          kE(e) && (AE(jr, e), NE()), TC(jr, e), mo = !1, jr = e;
          return;
        }
        var a = t;
        if (!bC(e, t)) {
          kE(e) && (AE(jr, e), NE()), t = nv(a);
          var i = jr;
          if (!t || !bC(e, t)) {
            TC(jr, e), mo = !1, jr = e;
            return;
          }
          CC(i, a);
        }
      }
    }
    function SD(e, t, a) {
      var i = e.stateNode, l = !Dc, c = $x(i, e.type, e.memoizedProps, t, a, e, l);
      return e.updateQueue = c, c !== null;
    }
    function CD(e) {
      var t = e.stateNode, a = e.memoizedProps, i = Fx(t, a, e);
      if (i) {
        var l = jr;
        if (l !== null)
          switch (l.tag) {
            case q: {
              var c = l.stateNode.containerInfo, p = (l.mode & He) !== qe;
              Wx(
                c,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                p
              );
              break;
            }
            case ee: {
              var m = l.type, y = l.memoizedProps, C = l.stateNode, b = (l.mode & He) !== qe;
              Kx(
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
    function TD(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      Hx(a, e);
    }
    function bD(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return Vx(a);
    }
    function wC(e) {
      for (var t = e.return; t !== null && t.tag !== ee && t.tag !== q && t.tag !== ce; )
        t = t.return;
      jr = t;
    }
    function Im(e) {
      if (e !== jr)
        return !1;
      if (!mo)
        return wC(e), mo = !0, !1;
      if (e.tag !== q && (e.tag !== ee || Yx(e.type) && !vE(e.type, e.memoizedProps))) {
        var t = ji;
        if (t)
          if (kE(e))
            RC(e), NE();
          else
            for (; t; )
              CC(e, t), t = nv(t);
      }
      return wC(e), e.tag === ce ? ji = bD(e) : ji = jr ? nv(e.stateNode) : null, !0;
    }
    function wD() {
      return mo && ji !== null;
    }
    function RC(e) {
      for (var t = ji; t; )
        SC(e, t), t = nv(t);
    }
    function sd() {
      jr = null, ji = null, mo = !1, Dc = !1;
    }
    function xC() {
      ns !== null && (Sb(ns), ns = null);
    }
    function Pr() {
      return mo;
    }
    function ME(e) {
      ns === null ? ns = [e] : ns.push(e);
    }
    var RD = E.ReactCurrentBatchConfig, xD = null;
    function DD() {
      return RD.transition;
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
      var OD = function(e) {
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
          e.add(st(N) || "Component"), Ac.add(N.type);
        }), ov = []);
        var t = /* @__PURE__ */ new Set();
        lv.length > 0 && (lv.forEach(function(N) {
          t.add(st(N) || "Component"), Ac.add(N.type);
        }), lv = []);
        var a = /* @__PURE__ */ new Set();
        uv.length > 0 && (uv.forEach(function(N) {
          a.add(st(N) || "Component"), Ac.add(N.type);
        }), uv = []);
        var i = /* @__PURE__ */ new Set();
        sv.length > 0 && (sv.forEach(function(N) {
          i.add(st(N) || "Component"), Ac.add(N.type);
        }), sv = []);
        var l = /* @__PURE__ */ new Set();
        cv.length > 0 && (cv.forEach(function(N) {
          l.add(st(N) || "Component"), Ac.add(N.type);
        }), cv = []);
        var c = /* @__PURE__ */ new Set();
        if (fv.length > 0 && (fv.forEach(function(N) {
          c.add(st(N) || "Component"), Ac.add(N.type);
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
          A(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, C);
        }
        if (a.size > 0) {
          var b = Oc(a);
          A(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, b);
        }
        if (l.size > 0) {
          var M = Oc(l);
          A(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, M);
        }
      };
      var Bm = /* @__PURE__ */ new Map(), DC = /* @__PURE__ */ new Set();
      yo.recordLegacyContextWarning = function(e, t) {
        var a = OD(e);
        if (a === null) {
          _("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!DC.has(e.type)) {
          var i = Bm.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Bm.set(a, i)), i.push(e));
        }
      }, yo.flushLegacyContextWarning = function() {
        Bm.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(c) {
              i.add(st(c) || "Component"), DC.add(c.type);
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
        ov = [], lv = [], uv = [], sv = [], cv = [], fv = [], Bm = /* @__PURE__ */ new Map();
      };
    }
    function go(e, t) {
      if (e && e.defaultProps) {
        var a = Tt({}, t), i = e.defaultProps;
        for (var l in i)
          a[l] === void 0 && (a[l] = i[l]);
        return a;
      }
      return t;
    }
    var zE = Ju(null), UE;
    UE = {};
    var Ym = null, cd = null, jE = null, Wm = !1;
    function Km() {
      Ym = null, cd = null, jE = null, Wm = !1;
    }
    function OC() {
      Wm = !0;
    }
    function AC() {
      Wm = !1;
    }
    function kC(e, t, a) {
      ca(zE, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== UE && _("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = UE;
    }
    function PE(e, t) {
      var a = zE.current;
      sa(zE, t), e._currentValue = a;
    }
    function $E(e, t, a) {
      for (var i = e; i !== null; ) {
        var l = i.alternate;
        if ($l(i.childLanes, t) ? l !== null && !$l(l.childLanes, t) && (l.childLanes = mt(l.childLanes, t)) : (i.childLanes = mt(i.childLanes, t), l !== null && (l.childLanes = mt(l.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && _("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function AD(e, t, a) {
      kD(e, t, a);
    }
    function kD(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var l = void 0, c = i.dependencies;
        if (c !== null) {
          l = i.child;
          for (var p = c.firstContext; p !== null; ) {
            if (p.context === t) {
              if (i.tag === z) {
                var m = Mu(a), y = Zl(sn, m);
                y.tag = Qm;
                var C = i.updateQueue;
                if (C !== null) {
                  var b = C.shared, M = b.pending;
                  M === null ? y.next = y : (y.next = M.next, M.next = y), b.pending = y;
                }
              }
              i.lanes = mt(i.lanes, a);
              var N = i.alternate;
              N !== null && (N.lanes = mt(N.lanes, a)), $E(i.return, a, e), c.lanes = mt(c.lanes, a);
              break;
            }
            p = p.next;
          }
        } else if (i.tag === ze)
          l = i.type === e.type ? null : i.child;
        else if (i.tag === yt) {
          var V = i.return;
          if (V === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          V.lanes = mt(V.lanes, a);
          var I = V.alternate;
          I !== null && (I.lanes = mt(I.lanes, a)), $E(V, a, e), l = i.sibling;
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
            var K = l.sibling;
            if (K !== null) {
              K.return = l.return, l = K;
              break;
            }
            l = l.return;
          }
        i = l;
      }
    }
    function fd(e, t) {
      Ym = e, cd = null, jE = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (la(a.lanes, t) && wv(), a.firstContext = null);
      }
    }
    function sr(e) {
      Wm && _("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (jE !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (cd === null) {
          if (Ym === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          cd = a, Ym.dependencies = {
            lanes: Q,
            firstContext: a
          };
        } else
          cd = cd.next = a;
      }
      return t;
    }
    var kc = null;
    function FE(e) {
      kc === null ? kc = [e] : kc.push(e);
    }
    function ND() {
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
    function NC(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, FE(t)) : (a.next = l.next, l.next = a), t.interleaved = a, Gm(e, i);
    }
    function LD(e, t, a, i) {
      var l = t.interleaved;
      l === null ? (a.next = a, FE(t)) : (a.next = l.next, l.next = a), t.interleaved = a;
    }
    function MD(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, FE(t)) : (a.next = l.next, l.next = a), t.interleaved = a, Gm(e, i);
    }
    function qa(e, t) {
      return Gm(e, t);
    }
    var zD = Gm;
    function Gm(e, t) {
      e.lanes = mt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = mt(a.lanes, t)), a === null && (e.flags & (nn | Ri)) !== Qe && Lb(e);
      for (var i = e, l = e.return; l !== null; )
        l.childLanes = mt(l.childLanes, t), a = l.alternate, a !== null ? a.childLanes = mt(a.childLanes, t) : (l.flags & (nn | Ri)) !== Qe && Lb(e), i = l, l = l.return;
      if (i.tag === q) {
        var c = i.stateNode;
        return c;
      } else
        return null;
    }
    var LC = 0, MC = 1, Qm = 2, HE = 3, qm = !1, VE, Xm;
    VE = !1, Xm = null;
    function IE(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: Q
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function zC(e, t) {
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
        tag: LC,
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
      if (Xm === l && !VE && (_("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), VE = !0), zA()) {
        var c = l.pending;
        return c === null ? t.next = t : (t.next = c.next, c.next = t), l.pending = t, zD(e, a);
      } else
        return MD(e, l, t, a);
    }
    function Zm(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var l = i.shared;
        if (xp(a)) {
          var c = l.lanes;
          c = Of(c, e.pendingLanes);
          var p = mt(c, a);
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
    function UD(e, t, a, i, l, c) {
      switch (a.tag) {
        case MC: {
          var p = a.payload;
          if (typeof p == "function") {
            OC();
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
              AC();
            }
            return m;
          }
          return p;
        }
        case HE:
          e.flags = e.flags & ~dr | dt;
        case LC: {
          var y = a.payload, C;
          if (typeof y == "function") {
            OC(), C = y.call(c, i, l);
            {
              if (e.mode & On) {
                un(!0);
                try {
                  y.call(c, i, l);
                } finally {
                  un(!1);
                }
              }
              AC();
            }
          } else
            C = y;
          return C == null ? i : Tt({}, i, C);
        }
        case Qm:
          return qm = !0, i;
      }
      return i;
    }
    function Jm(e, t, a, i) {
      var l = e.updateQueue;
      qm = !1, Xm = l.shared;
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
        var V = l.baseState, I = Q, K = null, xe = null, Xe = null, Ve = c;
        do {
          var Lt = Ve.lane, Ot = Ve.eventTime;
          if ($l(i, Lt)) {
            if (Xe !== null) {
              var G = {
                eventTime: Ot,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Pn,
                tag: Ve.tag,
                payload: Ve.payload,
                callback: Ve.callback,
                next: null
              };
              Xe = Xe.next = G;
            }
            V = UD(e, l, Ve, V, t, a);
            var P = Ve.callback;
            if (P !== null && // If the update was already committed, we should not queue its
            // callback again.
            Ve.lane !== Pn) {
              e.flags |= ir;
              var se = l.effects;
              se === null ? l.effects = [Ve] : se.push(Ve);
            }
          } else {
            var j = {
              eventTime: Ot,
              lane: Lt,
              tag: Ve.tag,
              payload: Ve.payload,
              callback: Ve.callback,
              next: null
            };
            Xe === null ? (xe = Xe = j, K = V) : Xe = Xe.next = j, I = mt(I, Lt);
          }
          if (Ve = Ve.next, Ve === null) {
            if (m = l.shared.pending, m === null)
              break;
            var De = m, Se = De.next;
            De.next = null, Ve = Se, l.lastBaseUpdate = De, l.shared.pending = null;
          }
        } while (!0);
        Xe === null && (K = V), l.baseState = K, l.firstBaseUpdate = xe, l.lastBaseUpdate = Xe;
        var at = l.shared.interleaved;
        if (at !== null) {
          var ht = at;
          do
            I = mt(I, ht.lane), ht = ht.next;
          while (ht !== at);
        } else
          c === null && (l.shared.lanes = Q);
        jv(I), e.lanes = I, e.memoizedState = V;
      }
      Xm = null;
    }
    function jD(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function UC() {
      qm = !1;
    }
    function ey() {
      return qm;
    }
    function jC(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var l = 0; l < i.length; l++) {
          var c = i[l], p = c.callback;
          p !== null && (c.callback = null, jD(p, a));
        }
    }
    var YE = {}, PC = new u.Component().refs, WE, KE, GE, QE, qE, $C, ty, XE, ZE, JE;
    {
      WE = /* @__PURE__ */ new Set(), KE = /* @__PURE__ */ new Set(), GE = /* @__PURE__ */ new Set(), QE = /* @__PURE__ */ new Set(), XE = /* @__PURE__ */ new Set(), qE = /* @__PURE__ */ new Set(), ZE = /* @__PURE__ */ new Set(), JE = /* @__PURE__ */ new Set();
      var FC = /* @__PURE__ */ new Set();
      ty = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          FC.has(a) || (FC.add(a), _("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, $C = function(e, t) {
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
        $C(t, c);
      }
      var p = c == null ? l : Tt({}, l, c);
      if (e.memoizedState = p, e.lanes === Q) {
        var m = e.updateQueue;
        m.baseState = p;
      }
    }
    var t_ = {
      isMounted: Ca,
      enqueueSetState: function(e, t, a) {
        var i = wi(e), l = xa(), c = fs(i), p = Zl(l, c);
        p.payload = t, a != null && (ty(a, "setState"), p.callback = a);
        var m = rs(i, p, c);
        m !== null && (Cr(m, i, c, l), Zm(m, i, c)), pf(i, c);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = wi(e), l = xa(), c = fs(i), p = Zl(l, c);
        p.tag = MC, p.payload = t, a != null && (ty(a, "replaceState"), p.callback = a);
        var m = rs(i, p, c);
        m !== null && (Cr(m, i, c, l), Zm(m, i, c)), pf(i, c);
      },
      enqueueForceUpdate: function(e, t) {
        var a = wi(e), i = xa(), l = fs(a), c = Zl(i, l);
        c.tag = Qm, t != null && (ty(t, "forceUpdate"), c.callback = t);
        var p = rs(a, c, l);
        p !== null && (Cr(p, a, l, i), Zm(p, a, l)), Au(a, l);
      }
    };
    function HC(e, t, a, i, l, c, p) {
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
      return t.prototype && t.prototype.isPureReactComponent ? !et(a, i) || !et(l, c) : !0;
    }
    function PD(e, t, a) {
      var i = e.stateNode;
      {
        var l = zt(t) || "Component", c = i.render;
        c || (t.prototype && typeof t.prototype.render == "function" ? _("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", l) : _("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", l)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && _("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", l), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && _("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", l), i.propTypes && _("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", l), i.contextType && _("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", l), i.contextTypes && _("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", l), t.contextType && t.contextTypes && !ZE.has(t) && (ZE.add(t), _("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", l)), typeof i.componentShouldUpdate == "function" && _("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", l), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && _("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", zt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && _("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", l), typeof i.componentDidReceiveProps == "function" && _("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", l), typeof i.componentWillRecieveProps == "function" && _("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", l), typeof i.UNSAFE_componentWillRecieveProps == "function" && _("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", l);
        var p = i.props !== a;
        i.props !== void 0 && p && _("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", l, l), i.defaultProps && _("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", l, l), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !GE.has(t) && (GE.add(t), _("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", zt(t))), typeof i.getDerivedStateFromProps == "function" && _("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof i.getDerivedStateFromError == "function" && _("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof t.getSnapshotBeforeUpdate == "function" && _("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", l);
        var m = i.state;
        m && (typeof m != "object" || Ut(m)) && _("%s.state: must be set to an object or null", l), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && _("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", l);
      }
    }
    function VC(e, t) {
      t.updater = t_, e.stateNode = t, af(t, e), t._reactInternalInstance = YE;
    }
    function IC(e, t, a) {
      var i = !1, l = pi, c = pi, p = t.contextType;
      if ("contextType" in t) {
        var m = (
          // Allow null for conditional declaration
          p === null || p !== void 0 && p.$$typeof === me && p._context === void 0
        );
        if (!m && !JE.has(t)) {
          JE.add(t);
          var y = "";
          p === void 0 ? y = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof p != "object" ? y = " However, it is set to a " + typeof p + "." : p.$$typeof === re ? y = " Did you accidentally pass the Context.Provider instead?" : p._context !== void 0 ? y = " Did you accidentally pass the Context.Consumer instead?" : y = " However, it is set to an object with keys {" + Object.keys(p).join(", ") + "}.", _("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", zt(t) || "Component", y);
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
      VC(e, b);
      {
        if (typeof t.getDerivedStateFromProps == "function" && M === null) {
          var N = zt(t) || "Component";
          KE.has(N) || (KE.add(N), _("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", N, b.state === null ? "null" : "undefined", N));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof b.getSnapshotBeforeUpdate == "function") {
          var V = null, I = null, K = null;
          if (typeof b.componentWillMount == "function" && b.componentWillMount.__suppressDeprecationWarning !== !0 ? V = "componentWillMount" : typeof b.UNSAFE_componentWillMount == "function" && (V = "UNSAFE_componentWillMount"), typeof b.componentWillReceiveProps == "function" && b.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? I = "componentWillReceiveProps" : typeof b.UNSAFE_componentWillReceiveProps == "function" && (I = "UNSAFE_componentWillReceiveProps"), typeof b.componentWillUpdate == "function" && b.componentWillUpdate.__suppressDeprecationWarning !== !0 ? K = "componentWillUpdate" : typeof b.UNSAFE_componentWillUpdate == "function" && (K = "UNSAFE_componentWillUpdate"), V !== null || I !== null || K !== null) {
            var xe = zt(t) || "Component", Xe = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            QE.has(xe) || (QE.add(xe), _(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, xe, Xe, V !== null ? `
  ` + V : "", I !== null ? `
  ` + I : "", K !== null ? `
  ` + K : ""));
          }
        }
      }
      return i && pC(e, l, c), b;
    }
    function $D(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (_("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", st(e) || "Component"), t_.enqueueReplaceState(t, t.state, null));
    }
    function BC(e, t, a, i) {
      var l = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== l) {
        {
          var c = st(e) || "Component";
          WE.has(c) || (WE.add(c), _("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", c));
        }
        t_.enqueueReplaceState(t, t.state, null);
      }
    }
    function n_(e, t, a, i) {
      PD(e, t, a);
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
      if (typeof y == "function" && (e_(e, t, y, a), l.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof l.getSnapshotBeforeUpdate != "function" && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && ($D(e, l), Jm(e, a, l, i), l.state = e.memoizedState), typeof l.componentDidMount == "function") {
        var C = $e;
        C |= $a, (e.mode & Va) !== qe && (C |= Fa), e.flags |= C;
      }
    }
    function FD(e, t, a, i) {
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
      !M && (typeof l.UNSAFE_componentWillReceiveProps == "function" || typeof l.componentWillReceiveProps == "function") && (c !== a || p !== y) && BC(e, l, a, y), UC();
      var N = e.memoizedState, V = l.state = N;
      if (Jm(e, a, l, i), V = e.memoizedState, c === a && N === V && !Um() && !ey()) {
        if (typeof l.componentDidMount == "function") {
          var I = $e;
          I |= $a, (e.mode & Va) !== qe && (I |= Fa), e.flags |= I;
        }
        return !1;
      }
      typeof b == "function" && (e_(e, t, b, a), V = e.memoizedState);
      var K = ey() || HC(e, t, c, a, N, V, y);
      if (K) {
        if (!M && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function") {
          var xe = $e;
          xe |= $a, (e.mode & Va) !== qe && (xe |= Fa), e.flags |= xe;
        }
      } else {
        if (typeof l.componentDidMount == "function") {
          var Xe = $e;
          Xe |= $a, (e.mode & Va) !== qe && (Xe |= Fa), e.flags |= Xe;
        }
        e.memoizedProps = a, e.memoizedState = V;
      }
      return l.props = a, l.state = V, l.context = y, K;
    }
    function HD(e, t, a, i, l) {
      var c = t.stateNode;
      zC(e, t);
      var p = t.memoizedProps, m = t.type === t.elementType ? p : go(t.type, p);
      c.props = m;
      var y = t.pendingProps, C = c.context, b = a.contextType, M = pi;
      if (typeof b == "object" && b !== null)
        M = sr(b);
      else {
        var N = id(t, a, !0);
        M = od(t, N);
      }
      var V = a.getDerivedStateFromProps, I = typeof V == "function" || typeof c.getSnapshotBeforeUpdate == "function";
      !I && (typeof c.UNSAFE_componentWillReceiveProps == "function" || typeof c.componentWillReceiveProps == "function") && (p !== y || C !== M) && BC(t, c, i, M), UC();
      var K = t.memoizedState, xe = c.state = K;
      if (Jm(t, i, c, l), xe = t.memoizedState, p === y && K === xe && !Um() && !ey() && !D)
        return typeof c.componentDidUpdate == "function" && (p !== e.memoizedProps || K !== e.memoizedState) && (t.flags |= $e), typeof c.getSnapshotBeforeUpdate == "function" && (p !== e.memoizedProps || K !== e.memoizedState) && (t.flags |= Wn), !1;
      typeof V == "function" && (e_(t, a, V, i), xe = t.memoizedState);
      var Xe = ey() || HC(t, a, m, i, K, xe, M) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      D;
      return Xe ? (!I && (typeof c.UNSAFE_componentWillUpdate == "function" || typeof c.componentWillUpdate == "function") && (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(i, xe, M), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(i, xe, M)), typeof c.componentDidUpdate == "function" && (t.flags |= $e), typeof c.getSnapshotBeforeUpdate == "function" && (t.flags |= Wn)) : (typeof c.componentDidUpdate == "function" && (p !== e.memoizedProps || K !== e.memoizedState) && (t.flags |= $e), typeof c.getSnapshotBeforeUpdate == "function" && (p !== e.memoizedProps || K !== e.memoizedState) && (t.flags |= Wn), t.memoizedProps = i, t.memoizedState = xe), c.props = i, c.state = xe, c.context = M, Xe;
    }
    var r_, a_, i_, o_, l_, YC = function(e, t) {
    };
    r_ = !1, a_ = !1, i_ = {}, o_ = {}, l_ = {}, YC = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = st(t) || "Component";
        o_[a] || (o_[a] = !0, _('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function dv(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & On || ut) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var l = st(e) || "Component";
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
    function ny(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function ry(e) {
      {
        var t = st(e) || "Component";
        if (l_[t])
          return;
        l_[t] = !0, _("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function WC(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function KC(e) {
      function t(j, G) {
        if (e) {
          var P = j.deletions;
          P === null ? (j.deletions = [G], j.flags |= $t) : P.push(G);
        }
      }
      function a(j, G) {
        if (!e)
          return null;
        for (var P = G; P !== null; )
          t(j, P), P = P.sibling;
        return null;
      }
      function i(j, G) {
        for (var P = /* @__PURE__ */ new Map(), se = G; se !== null; )
          se.key !== null ? P.set(se.key, se) : P.set(se.index, se), se = se.sibling;
        return P;
      }
      function l(j, G) {
        var P = $c(j, G);
        return P.index = 0, P.sibling = null, P;
      }
      function c(j, G, P) {
        if (j.index = P, !e)
          return j.flags |= Mh, G;
        var se = j.alternate;
        if (se !== null) {
          var De = se.index;
          return De < G ? (j.flags |= nn, G) : De;
        } else
          return j.flags |= nn, G;
      }
      function p(j) {
        return e && j.alternate === null && (j.flags |= nn), j;
      }
      function m(j, G, P, se) {
        if (G === null || G.tag !== ae) {
          var De = MS(P, j.mode, se);
          return De.return = j, De;
        } else {
          var Se = l(G, P);
          return Se.return = j, Se;
        }
      }
      function y(j, G, P, se) {
        var De = P.type;
        if (De === ya)
          return b(j, G, P.props.children, se, P.key);
        if (G !== null && (G.elementType === De || // Keep this check inline so it only runs on the false path:
        jb(G, P) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof De == "object" && De !== null && De.$$typeof === Ke && WC(De) === G.type)) {
          var Se = l(G, P.props);
          return Se.ref = dv(j, G, P), Se.return = j, Se._debugSource = P._source, Se._debugOwner = P._owner, Se;
        }
        var at = LS(P, j.mode, se);
        return at.ref = dv(j, G, P), at.return = j, at;
      }
      function C(j, G, P, se) {
        if (G === null || G.tag !== te || G.stateNode.containerInfo !== P.containerInfo || G.stateNode.implementation !== P.implementation) {
          var De = zS(P, j.mode, se);
          return De.return = j, De;
        } else {
          var Se = l(G, P.children || []);
          return Se.return = j, Se;
        }
      }
      function b(j, G, P, se, De) {
        if (G === null || G.tag !== Te) {
          var Se = ps(P, j.mode, se, De);
          return Se.return = j, Se;
        } else {
          var at = l(G, P);
          return at.return = j, at;
        }
      }
      function M(j, G, P) {
        if (typeof G == "string" && G !== "" || typeof G == "number") {
          var se = MS("" + G, j.mode, P);
          return se.return = j, se;
        }
        if (typeof G == "object" && G !== null) {
          switch (G.$$typeof) {
            case Wr: {
              var De = LS(G, j.mode, P);
              return De.ref = dv(j, null, G), De.return = j, De;
            }
            case Kr: {
              var Se = zS(G, j.mode, P);
              return Se.return = j, Se;
            }
            case Ke: {
              var at = G._payload, ht = G._init;
              return M(j, ht(at), P);
            }
          }
          if (Ut(G) || _i(G)) {
            var Jt = ps(G, j.mode, P, null);
            return Jt.return = j, Jt;
          }
          ny(j, G);
        }
        return typeof G == "function" && ry(j), null;
      }
      function N(j, G, P, se) {
        var De = G !== null ? G.key : null;
        if (typeof P == "string" && P !== "" || typeof P == "number")
          return De !== null ? null : m(j, G, "" + P, se);
        if (typeof P == "object" && P !== null) {
          switch (P.$$typeof) {
            case Wr:
              return P.key === De ? y(j, G, P, se) : null;
            case Kr:
              return P.key === De ? C(j, G, P, se) : null;
            case Ke: {
              var Se = P._payload, at = P._init;
              return N(j, G, at(Se), se);
            }
          }
          if (Ut(P) || _i(P))
            return De !== null ? null : b(j, G, P, se, null);
          ny(j, P);
        }
        return typeof P == "function" && ry(j), null;
      }
      function V(j, G, P, se, De) {
        if (typeof se == "string" && se !== "" || typeof se == "number") {
          var Se = j.get(P) || null;
          return m(G, Se, "" + se, De);
        }
        if (typeof se == "object" && se !== null) {
          switch (se.$$typeof) {
            case Wr: {
              var at = j.get(se.key === null ? P : se.key) || null;
              return y(G, at, se, De);
            }
            case Kr: {
              var ht = j.get(se.key === null ? P : se.key) || null;
              return C(G, ht, se, De);
            }
            case Ke:
              var Jt = se._payload, Ht = se._init;
              return V(j, G, P, Ht(Jt), De);
          }
          if (Ut(se) || _i(se)) {
            var nr = j.get(P) || null;
            return b(G, nr, se, De, null);
          }
          ny(G, se);
        }
        return typeof se == "function" && ry(G), null;
      }
      function I(j, G, P) {
        {
          if (typeof j != "object" || j === null)
            return G;
          switch (j.$$typeof) {
            case Wr:
            case Kr:
              YC(j, P);
              var se = j.key;
              if (typeof se != "string")
                break;
              if (G === null) {
                G = /* @__PURE__ */ new Set(), G.add(se);
                break;
              }
              if (!G.has(se)) {
                G.add(se);
                break;
              }
              _("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", se);
              break;
            case Ke:
              var De = j._payload, Se = j._init;
              I(Se(De), G, P);
              break;
          }
        }
        return G;
      }
      function K(j, G, P, se) {
        for (var De = null, Se = 0; Se < P.length; Se++) {
          var at = P[Se];
          De = I(at, De, j);
        }
        for (var ht = null, Jt = null, Ht = G, nr = 0, Vt = 0, Gn = null; Ht !== null && Vt < P.length; Vt++) {
          Ht.index > Vt ? (Gn = Ht, Ht = null) : Gn = Ht.sibling;
          var da = N(j, Ht, P[Vt], se);
          if (da === null) {
            Ht === null && (Ht = Gn);
            break;
          }
          e && Ht && da.alternate === null && t(j, Ht), nr = c(da, nr, Vt), Jt === null ? ht = da : Jt.sibling = da, Jt = da, Ht = Gn;
        }
        if (Vt === P.length) {
          if (a(j, Ht), Pr()) {
            var Yr = Vt;
            Rc(j, Yr);
          }
          return ht;
        }
        if (Ht === null) {
          for (; Vt < P.length; Vt++) {
            var hi = M(j, P[Vt], se);
            hi !== null && (nr = c(hi, nr, Vt), Jt === null ? ht = hi : Jt.sibling = hi, Jt = hi);
          }
          if (Pr()) {
            var Da = Vt;
            Rc(j, Da);
          }
          return ht;
        }
        for (var Oa = i(j, Ht); Vt < P.length; Vt++) {
          var pa = V(Oa, j, Vt, P[Vt], se);
          pa !== null && (e && pa.alternate !== null && Oa.delete(pa.key === null ? Vt : pa.key), nr = c(pa, nr, Vt), Jt === null ? ht = pa : Jt.sibling = pa, Jt = pa);
        }
        if (e && Oa.forEach(function(Dd) {
          return t(j, Dd);
        }), Pr()) {
          var au = Vt;
          Rc(j, au);
        }
        return ht;
      }
      function xe(j, G, P, se) {
        var De = _i(P);
        if (typeof De != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          P[Symbol.toStringTag] === "Generator" && (a_ || _("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), a_ = !0), P.entries === De && (r_ || _("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), r_ = !0);
          var Se = De.call(P);
          if (Se)
            for (var at = null, ht = Se.next(); !ht.done; ht = Se.next()) {
              var Jt = ht.value;
              at = I(Jt, at, j);
            }
        }
        var Ht = De.call(P);
        if (Ht == null)
          throw new Error("An iterable object provided no iterator.");
        for (var nr = null, Vt = null, Gn = G, da = 0, Yr = 0, hi = null, Da = Ht.next(); Gn !== null && !Da.done; Yr++, Da = Ht.next()) {
          Gn.index > Yr ? (hi = Gn, Gn = null) : hi = Gn.sibling;
          var Oa = N(j, Gn, Da.value, se);
          if (Oa === null) {
            Gn === null && (Gn = hi);
            break;
          }
          e && Gn && Oa.alternate === null && t(j, Gn), da = c(Oa, da, Yr), Vt === null ? nr = Oa : Vt.sibling = Oa, Vt = Oa, Gn = hi;
        }
        if (Da.done) {
          if (a(j, Gn), Pr()) {
            var pa = Yr;
            Rc(j, pa);
          }
          return nr;
        }
        if (Gn === null) {
          for (; !Da.done; Yr++, Da = Ht.next()) {
            var au = M(j, Da.value, se);
            au !== null && (da = c(au, da, Yr), Vt === null ? nr = au : Vt.sibling = au, Vt = au);
          }
          if (Pr()) {
            var Dd = Yr;
            Rc(j, Dd);
          }
          return nr;
        }
        for (var Vv = i(j, Gn); !Da.done; Yr++, Da = Ht.next()) {
          var fl = V(Vv, j, Yr, Da.value, se);
          fl !== null && (e && fl.alternate !== null && Vv.delete(fl.key === null ? Yr : fl.key), da = c(fl, da, Yr), Vt === null ? nr = fl : Vt.sibling = fl, Vt = fl);
        }
        if (e && Vv.forEach(function(tN) {
          return t(j, tN);
        }), Pr()) {
          var eN = Yr;
          Rc(j, eN);
        }
        return nr;
      }
      function Xe(j, G, P, se) {
        if (G !== null && G.tag === ae) {
          a(j, G.sibling);
          var De = l(G, P);
          return De.return = j, De;
        }
        a(j, G);
        var Se = MS(P, j.mode, se);
        return Se.return = j, Se;
      }
      function Ve(j, G, P, se) {
        for (var De = P.key, Se = G; Se !== null; ) {
          if (Se.key === De) {
            var at = P.type;
            if (at === ya) {
              if (Se.tag === Te) {
                a(j, Se.sibling);
                var ht = l(Se, P.props.children);
                return ht.return = j, ht._debugSource = P._source, ht._debugOwner = P._owner, ht;
              }
            } else if (Se.elementType === at || // Keep this check inline so it only runs on the false path:
            jb(Se, P) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof at == "object" && at !== null && at.$$typeof === Ke && WC(at) === Se.type) {
              a(j, Se.sibling);
              var Jt = l(Se, P.props);
              return Jt.ref = dv(j, Se, P), Jt.return = j, Jt._debugSource = P._source, Jt._debugOwner = P._owner, Jt;
            }
            a(j, Se);
            break;
          } else
            t(j, Se);
          Se = Se.sibling;
        }
        if (P.type === ya) {
          var Ht = ps(P.props.children, j.mode, se, P.key);
          return Ht.return = j, Ht;
        } else {
          var nr = LS(P, j.mode, se);
          return nr.ref = dv(j, G, P), nr.return = j, nr;
        }
      }
      function Lt(j, G, P, se) {
        for (var De = P.key, Se = G; Se !== null; ) {
          if (Se.key === De)
            if (Se.tag === te && Se.stateNode.containerInfo === P.containerInfo && Se.stateNode.implementation === P.implementation) {
              a(j, Se.sibling);
              var at = l(Se, P.children || []);
              return at.return = j, at;
            } else {
              a(j, Se);
              break;
            }
          else
            t(j, Se);
          Se = Se.sibling;
        }
        var ht = zS(P, j.mode, se);
        return ht.return = j, ht;
      }
      function Ot(j, G, P, se) {
        var De = typeof P == "object" && P !== null && P.type === ya && P.key === null;
        if (De && (P = P.props.children), typeof P == "object" && P !== null) {
          switch (P.$$typeof) {
            case Wr:
              return p(Ve(j, G, P, se));
            case Kr:
              return p(Lt(j, G, P, se));
            case Ke:
              var Se = P._payload, at = P._init;
              return Ot(j, G, at(Se), se);
          }
          if (Ut(P))
            return K(j, G, P, se);
          if (_i(P))
            return xe(j, G, P, se);
          ny(j, P);
        }
        return typeof P == "string" && P !== "" || typeof P == "number" ? p(Xe(j, G, "" + P, se)) : (typeof P == "function" && ry(j), a(j, G));
      }
      return Ot;
    }
    var dd = KC(!0), GC = KC(!1);
    function VD(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = $c(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = $c(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function ID(e, t) {
      for (var a = e.child; a !== null; )
        gk(a, t), a = a.sibling;
    }
    var pv = {}, as = Ju(pv), vv = Ju(pv), ay = Ju(pv);
    function iy(e) {
      if (e === pv)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function QC() {
      var e = iy(ay.current);
      return e;
    }
    function u_(e, t) {
      ca(ay, t, e), ca(vv, e, e), ca(as, pv, e);
      var a = rx(t);
      sa(as, e), ca(as, a, e);
    }
    function pd(e) {
      sa(as, e), sa(vv, e), sa(ay, e);
    }
    function s_() {
      var e = iy(as.current);
      return e;
    }
    function qC(e) {
      iy(ay.current);
      var t = iy(as.current), a = ax(t, e.type);
      t !== a && (ca(vv, e, e), ca(as, a, e));
    }
    function c_(e) {
      vv.current === e && (sa(as, e), sa(vv, e));
    }
    var BD = 0, XC = 1, ZC = 1, hv = 2, Eo = Ju(BD);
    function f_(e, t) {
      return (e & t) !== 0;
    }
    function vd(e) {
      return e & XC;
    }
    function d_(e, t) {
      return e & XC | t;
    }
    function YD(e, t) {
      return e | t;
    }
    function is(e, t) {
      ca(Eo, t, e);
    }
    function hd(e) {
      sa(Eo, e);
    }
    function WD(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function oy(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === ce) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || uC(i) || gE(i))
              return t;
          }
        } else if (t.tag === lt && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var l = (t.flags & dt) !== Qe;
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
    function KD(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var we = E.ReactCurrentDispatcher, mv = E.ReactCurrentBatchConfig, h_, md;
    h_ = /* @__PURE__ */ new Set();
    var Nc = Q, Zt = null, yr = null, gr = null, ly = !1, yv = !1, gv = 0, GD = 0, QD = 25, J = null, Pi = null, os = -1, m_ = !1;
    function Wt() {
      {
        var e = J;
        Pi === null ? Pi = [e] : Pi.push(e);
      }
    }
    function ye() {
      {
        var e = J;
        Pi !== null && (os++, Pi[os] !== e && qD(e));
      }
    }
    function yd(e) {
      e != null && !Ut(e) && _("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", J, typeof e);
    }
    function qD(e) {
      {
        var t = st(Zt);
        if (!h_.has(t) && (h_.add(t), Pi !== null)) {
          for (var a = "", i = 30, l = 0; l <= os; l++) {
            for (var c = Pi[l], p = l === os ? e : c, m = l + 1 + ". " + c; m.length < i; )
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
    function fa() {
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
        return _("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", J), !1;
      e.length !== t.length && _(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, J, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Ne(e[a], t[a]))
          return !1;
      return !0;
    }
    function gd(e, t, a, i, l, c) {
      Nc = c, Zt = t, Pi = e !== null ? e._debugHookTypes : null, os = -1, m_ = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = Q, e !== null && e.memoizedState !== null ? we.current = _T : Pi !== null ? we.current = ET : we.current = gT;
      var p = a(i, l);
      if (yv) {
        var m = 0;
        do {
          if (yv = !1, gv = 0, m >= QD)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          m += 1, m_ = !1, yr = null, gr = null, t.updateQueue = null, os = -1, we.current = ST, p = a(i, l);
        } while (yv);
      }
      we.current = _y, t._debugHookTypes = Pi;
      var y = yr !== null && yr.next !== null;
      if (Nc = Q, Zt = null, yr = null, gr = null, J = null, Pi = null, os = -1, e !== null && (e.flags & pr) !== (t.flags & pr) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & He) !== qe && _("Internal React error: Expected static flag was missing. Please notify the React team."), ly = !1, y)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return p;
    }
    function Ed() {
      var e = gv !== 0;
      return gv = 0, e;
    }
    function JC(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Va) !== qe ? t.flags &= ~(Ol | Fa | Jr | $e) : t.flags &= ~(Jr | $e), e.lanes = sc(e.lanes, a);
    }
    function eT() {
      if (we.current = _y, ly) {
        for (var e = Zt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        ly = !1;
      }
      Nc = Q, Zt = null, yr = null, gr = null, Pi = null, os = -1, J = null, pT = !1, yv = !1, gv = 0;
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
    function $i() {
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
    function tT() {
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
        lanes: Q,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: l
      };
      i.queue = c;
      var p = c.dispatch = eO.bind(null, Zt, c);
      return [i.memoizedState, p];
    }
    function __(e, t, a) {
      var i = $i(), l = i.queue;
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
        var b = p.next, M = c.baseState, N = null, V = null, I = null, K = b;
        do {
          var xe = K.lane;
          if ($l(Nc, xe)) {
            if (I !== null) {
              var Ve = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Pn,
                action: K.action,
                hasEagerState: K.hasEagerState,
                eagerState: K.eagerState,
                next: null
              };
              I = I.next = Ve;
            }
            if (K.hasEagerState)
              M = K.eagerState;
            else {
              var Lt = K.action;
              M = e(M, Lt);
            }
          } else {
            var Xe = {
              lane: xe,
              action: K.action,
              hasEagerState: K.hasEagerState,
              eagerState: K.eagerState,
              next: null
            };
            I === null ? (V = I = Xe, N = M) : I = I.next = Xe, Zt.lanes = mt(Zt.lanes, xe), jv(xe);
          }
          K = K.next;
        } while (K !== null && K !== b);
        I === null ? N = M : I.next = V, Ne(M, i.memoizedState) || wv(), i.memoizedState = M, i.baseState = N, i.baseQueue = I, l.lastRenderedState = M;
      }
      var Ot = l.interleaved;
      if (Ot !== null) {
        var j = Ot;
        do {
          var G = j.lane;
          Zt.lanes = mt(Zt.lanes, G), jv(G), j = j.next;
        } while (j !== Ot);
      } else
        p === null && (l.lanes = Q);
      var P = l.dispatch;
      return [i.memoizedState, P];
    }
    function S_(e, t, a) {
      var i = $i(), l = i.queue;
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
        Ne(m, i.memoizedState) || wv(), i.memoizedState = m, i.baseQueue === null && (i.baseState = m), l.lastRenderedState = m;
      }
      return [m, c];
    }
    function zj(e, t, a) {
    }
    function Uj(e, t, a) {
    }
    function C_(e, t, a) {
      var i = Zt, l = il(), c, p = Pr();
      if (p) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        c = a(), md || c !== a() && (_("The result of getServerSnapshot should be cached to avoid an infinite loop"), md = !0);
      } else {
        if (c = t(), !md) {
          var m = t();
          Ne(c, m) || (_("The result of getSnapshot should be cached to avoid an infinite loop"), md = !0);
        }
        var y = Py();
        if (y === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        uc(y, Nc) || nT(i, t, c);
      }
      l.memoizedState = c;
      var C = {
        value: c,
        getSnapshot: t
      };
      return l.queue = C, dy(aT.bind(null, i, C, e), [e]), i.flags |= Jr, Ev(hr | $r, rT.bind(null, i, C, c, t), void 0, null), c;
    }
    function uy(e, t, a) {
      var i = Zt, l = $i(), c = t();
      if (!md) {
        var p = t();
        Ne(c, p) || (_("The result of getSnapshot should be cached to avoid an infinite loop"), md = !0);
      }
      var m = l.memoizedState, y = !Ne(m, c);
      y && (l.memoizedState = c, wv());
      var C = l.queue;
      if (Sv(aT.bind(null, i, C, e), [e]), C.getSnapshot !== t || y || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      gr !== null && gr.memoizedState.tag & hr) {
        i.flags |= Jr, Ev(hr | $r, rT.bind(null, i, C, c, t), void 0, null);
        var b = Py();
        if (b === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        uc(b, Nc) || nT(i, t, c);
      }
      return c;
    }
    function nT(e, t, a) {
      e.flags |= Dl;
      var i = {
        getSnapshot: t,
        value: a
      }, l = Zt.updateQueue;
      if (l === null)
        l = tT(), Zt.updateQueue = l, l.stores = [i];
      else {
        var c = l.stores;
        c === null ? l.stores = [i] : c.push(i);
      }
    }
    function rT(e, t, a, i) {
      t.value = a, t.getSnapshot = i, iT(t) && oT(e);
    }
    function aT(e, t, a) {
      var i = function() {
        iT(t) && oT(e);
      };
      return a(i);
    }
    function iT(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !Ne(a, i);
      } catch {
        return !0;
      }
    }
    function oT(e) {
      var t = qa(e, Ze);
      t !== null && Cr(t, e, Ze, sn);
    }
    function sy(e) {
      var t = il();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: Q,
        dispatch: null,
        lastRenderedReducer: g_,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = tO.bind(null, Zt, a);
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
        c = tT(), Zt.updateQueue = c, c.lastEffect = l.next = l;
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
    function cy(e) {
      var t = $i();
      return t.memoizedState;
    }
    function _v(e, t, a, i) {
      var l = il(), c = i === void 0 ? null : i;
      Zt.flags |= e, l.memoizedState = Ev(hr | t, a, void 0, c);
    }
    function fy(e, t, a, i) {
      var l = $i(), c = i === void 0 ? null : i, p = void 0;
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
    function dy(e, t) {
      return (Zt.mode & Va) !== qe ? _v(Ol | Jr | Vo, $r, e, t) : _v(Jr | Vo, $r, e, t);
    }
    function Sv(e, t) {
      return fy(Jr, $r, e, t);
    }
    function R_(e, t) {
      return _v($e, al, e, t);
    }
    function py(e, t) {
      return fy($e, al, e, t);
    }
    function x_(e, t) {
      var a = $e;
      return a |= $a, (Zt.mode & Va) !== qe && (a |= Fa), _v(a, mr, e, t);
    }
    function vy(e, t) {
      return fy($e, mr, e, t);
    }
    function lT(e, t) {
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
      var i = a != null ? a.concat([e]) : null, l = $e;
      return l |= $a, (Zt.mode & Va) !== qe && (l |= Fa), _v(l, mr, lT.bind(null, t, e), i);
    }
    function hy(e, t, a) {
      typeof t != "function" && _("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return fy($e, mr, lT.bind(null, t, e), i);
    }
    function XD(e, t) {
    }
    var my = XD;
    function O_(e, t) {
      var a = il(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function yy(e, t) {
      var a = $i(), i = t === void 0 ? null : t, l = a.memoizedState;
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
    function gy(e, t) {
      var a = $i(), i = t === void 0 ? null : t, l = a.memoizedState;
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
    function uT(e) {
      var t = $i(), a = yr, i = a.memoizedState;
      return cT(t, i, e);
    }
    function sT(e) {
      var t = $i();
      if (yr === null)
        return t.memoizedState = e, e;
      var a = yr.memoizedState;
      return cT(t, a, e);
    }
    function cT(e, t, a) {
      var i = !Kh(Nc);
      if (i) {
        if (!Ne(a, t)) {
          var l = qh();
          Zt.lanes = mt(Zt.lanes, l), jv(l), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, wv()), e.memoizedState = a, a;
    }
    function ZD(e, t, a) {
      var i = Ba();
      kn($g(i, co)), e(!0);
      var l = mv.transition;
      mv.transition = {};
      var c = mv.transition;
      mv.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (kn(i), mv.transition = l, l === null && c._updatedFibers) {
          var p = c._updatedFibers.size;
          p > 10 && A("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), c._updatedFibers.clear();
        }
      }
    }
    function N_() {
      var e = sy(!1), t = e[0], a = e[1], i = ZD.bind(null, a), l = il();
      return l.memoizedState = i, [t, i];
    }
    function fT() {
      var e = T_(), t = e[0], a = $i(), i = a.memoizedState;
      return [t, i];
    }
    function dT() {
      var e = b_(), t = e[0], a = $i(), i = a.memoizedState;
      return [t, i];
    }
    var pT = !1;
    function JD() {
      return pT;
    }
    function L_() {
      var e = il(), t = Py(), a = t.identifierPrefix, i;
      if (Pr()) {
        var l = pD();
        i = ":" + a + "R" + l;
        var c = gv++;
        c > 0 && (i += "H" + c.toString(32)), i += ":";
      } else {
        var p = GD++;
        i = ":" + a + "r" + p.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function Ey() {
      var e = $i(), t = e.memoizedState;
      return t;
    }
    function eO(e, t, a) {
      typeof arguments[3] == "function" && _("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = fs(e), l = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (vT(e))
        hT(t, l);
      else {
        var c = NC(e, t, l, i);
        if (c !== null) {
          var p = xa();
          Cr(c, e, i, p), mT(c, t, i);
        }
      }
      yT(e, i);
    }
    function tO(e, t, a) {
      typeof arguments[3] == "function" && _("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = fs(e), l = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (vT(e))
        hT(t, l);
      else {
        var c = e.alternate;
        if (e.lanes === Q && (c === null || c.lanes === Q)) {
          var p = t.lastRenderedReducer;
          if (p !== null) {
            var m;
            m = we.current, we.current = _o;
            try {
              var y = t.lastRenderedState, C = p(y, a);
              if (l.hasEagerState = !0, l.eagerState = C, Ne(C, y)) {
                LD(e, t, l, i);
                return;
              }
            } catch {
            } finally {
              we.current = m;
            }
          }
        }
        var b = NC(e, t, l, i);
        if (b !== null) {
          var M = xa();
          Cr(b, e, i, M), mT(b, t, i);
        }
      }
      yT(e, i);
    }
    function vT(e) {
      var t = e.alternate;
      return e === Zt || t !== null && t === Zt;
    }
    function hT(e, t) {
      yv = ly = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function mT(e, t, a) {
      if (xp(a)) {
        var i = t.lanes;
        i = Of(i, e.pendingLanes);
        var l = mt(i, a);
        t.lanes = l, Dp(e, l);
      }
    }
    function yT(e, t, a) {
      pf(e, t);
    }
    var _y = {
      readContext: sr,
      useCallback: fa,
      useContext: fa,
      useEffect: fa,
      useImperativeHandle: fa,
      useInsertionEffect: fa,
      useLayoutEffect: fa,
      useMemo: fa,
      useReducer: fa,
      useRef: fa,
      useState: fa,
      useDebugValue: fa,
      useDeferredValue: fa,
      useTransition: fa,
      useMutableSource: fa,
      useSyncExternalStore: fa,
      useId: fa,
      unstable_isNewReconciler: _e
    }, gT = null, ET = null, _T = null, ST = null, ol = null, _o = null, Sy = null;
    {
      var M_ = function() {
        _("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, pt = function() {
        _("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      gT = {
        readContext: function(e) {
          return sr(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", Wt(), yd(t), O_(e, t);
        },
        useContext: function(e) {
          return J = "useContext", Wt(), sr(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", Wt(), yd(t), dy(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return J = "useImperativeHandle", Wt(), yd(a), D_(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", Wt(), yd(t), R_(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", Wt(), yd(t), x_(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", Wt(), yd(t);
          var a = we.current;
          we.current = ol;
          try {
            return A_(e, t);
          } finally {
            we.current = a;
          }
        },
        useReducer: function(e, t, a) {
          J = "useReducer", Wt();
          var i = we.current;
          we.current = ol;
          try {
            return E_(e, t, a);
          } finally {
            we.current = i;
          }
        },
        useRef: function(e) {
          return J = "useRef", Wt(), w_(e);
        },
        useState: function(e) {
          J = "useState", Wt();
          var t = we.current;
          we.current = ol;
          try {
            return sy(e);
          } finally {
            we.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", Wt(), void 0;
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", Wt(), k_(e);
        },
        useTransition: function() {
          return J = "useTransition", Wt(), N_();
        },
        useMutableSource: function(e, t, a) {
          return J = "useMutableSource", Wt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return J = "useSyncExternalStore", Wt(), C_(e, t, a);
        },
        useId: function() {
          return J = "useId", Wt(), L_();
        },
        unstable_isNewReconciler: _e
      }, ET = {
        readContext: function(e) {
          return sr(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", ye(), O_(e, t);
        },
        useContext: function(e) {
          return J = "useContext", ye(), sr(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", ye(), dy(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return J = "useImperativeHandle", ye(), D_(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", ye(), R_(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", ye(), x_(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", ye();
          var a = we.current;
          we.current = ol;
          try {
            return A_(e, t);
          } finally {
            we.current = a;
          }
        },
        useReducer: function(e, t, a) {
          J = "useReducer", ye();
          var i = we.current;
          we.current = ol;
          try {
            return E_(e, t, a);
          } finally {
            we.current = i;
          }
        },
        useRef: function(e) {
          return J = "useRef", ye(), w_(e);
        },
        useState: function(e) {
          J = "useState", ye();
          var t = we.current;
          we.current = ol;
          try {
            return sy(e);
          } finally {
            we.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", ye(), void 0;
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", ye(), k_(e);
        },
        useTransition: function() {
          return J = "useTransition", ye(), N_();
        },
        useMutableSource: function(e, t, a) {
          return J = "useMutableSource", ye(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return J = "useSyncExternalStore", ye(), C_(e, t, a);
        },
        useId: function() {
          return J = "useId", ye(), L_();
        },
        unstable_isNewReconciler: _e
      }, _T = {
        readContext: function(e) {
          return sr(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", ye(), yy(e, t);
        },
        useContext: function(e) {
          return J = "useContext", ye(), sr(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", ye(), Sv(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return J = "useImperativeHandle", ye(), hy(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", ye(), py(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", ye(), vy(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", ye();
          var a = we.current;
          we.current = _o;
          try {
            return gy(e, t);
          } finally {
            we.current = a;
          }
        },
        useReducer: function(e, t, a) {
          J = "useReducer", ye();
          var i = we.current;
          we.current = _o;
          try {
            return __(e, t, a);
          } finally {
            we.current = i;
          }
        },
        useRef: function(e) {
          return J = "useRef", ye(), cy();
        },
        useState: function(e) {
          J = "useState", ye();
          var t = we.current;
          we.current = _o;
          try {
            return T_(e);
          } finally {
            we.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", ye(), my();
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", ye(), uT(e);
        },
        useTransition: function() {
          return J = "useTransition", ye(), fT();
        },
        useMutableSource: function(e, t, a) {
          return J = "useMutableSource", ye(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return J = "useSyncExternalStore", ye(), uy(e, t);
        },
        useId: function() {
          return J = "useId", ye(), Ey();
        },
        unstable_isNewReconciler: _e
      }, ST = {
        readContext: function(e) {
          return sr(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", ye(), yy(e, t);
        },
        useContext: function(e) {
          return J = "useContext", ye(), sr(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", ye(), Sv(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return J = "useImperativeHandle", ye(), hy(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", ye(), py(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", ye(), vy(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", ye();
          var a = we.current;
          we.current = Sy;
          try {
            return gy(e, t);
          } finally {
            we.current = a;
          }
        },
        useReducer: function(e, t, a) {
          J = "useReducer", ye();
          var i = we.current;
          we.current = Sy;
          try {
            return S_(e, t, a);
          } finally {
            we.current = i;
          }
        },
        useRef: function(e) {
          return J = "useRef", ye(), cy();
        },
        useState: function(e) {
          J = "useState", ye();
          var t = we.current;
          we.current = Sy;
          try {
            return b_(e);
          } finally {
            we.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", ye(), my();
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", ye(), sT(e);
        },
        useTransition: function() {
          return J = "useTransition", ye(), dT();
        },
        useMutableSource: function(e, t, a) {
          return J = "useMutableSource", ye(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return J = "useSyncExternalStore", ye(), uy(e, t);
        },
        useId: function() {
          return J = "useId", ye(), Ey();
        },
        unstable_isNewReconciler: _e
      }, ol = {
        readContext: function(e) {
          return M_(), sr(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", pt(), Wt(), O_(e, t);
        },
        useContext: function(e) {
          return J = "useContext", pt(), Wt(), sr(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", pt(), Wt(), dy(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return J = "useImperativeHandle", pt(), Wt(), D_(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", pt(), Wt(), R_(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", pt(), Wt(), x_(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", pt(), Wt();
          var a = we.current;
          we.current = ol;
          try {
            return A_(e, t);
          } finally {
            we.current = a;
          }
        },
        useReducer: function(e, t, a) {
          J = "useReducer", pt(), Wt();
          var i = we.current;
          we.current = ol;
          try {
            return E_(e, t, a);
          } finally {
            we.current = i;
          }
        },
        useRef: function(e) {
          return J = "useRef", pt(), Wt(), w_(e);
        },
        useState: function(e) {
          J = "useState", pt(), Wt();
          var t = we.current;
          we.current = ol;
          try {
            return sy(e);
          } finally {
            we.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", pt(), Wt(), void 0;
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", pt(), Wt(), k_(e);
        },
        useTransition: function() {
          return J = "useTransition", pt(), Wt(), N_();
        },
        useMutableSource: function(e, t, a) {
          return J = "useMutableSource", pt(), Wt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return J = "useSyncExternalStore", pt(), Wt(), C_(e, t, a);
        },
        useId: function() {
          return J = "useId", pt(), Wt(), L_();
        },
        unstable_isNewReconciler: _e
      }, _o = {
        readContext: function(e) {
          return M_(), sr(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", pt(), ye(), yy(e, t);
        },
        useContext: function(e) {
          return J = "useContext", pt(), ye(), sr(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", pt(), ye(), Sv(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return J = "useImperativeHandle", pt(), ye(), hy(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", pt(), ye(), py(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", pt(), ye(), vy(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", pt(), ye();
          var a = we.current;
          we.current = _o;
          try {
            return gy(e, t);
          } finally {
            we.current = a;
          }
        },
        useReducer: function(e, t, a) {
          J = "useReducer", pt(), ye();
          var i = we.current;
          we.current = _o;
          try {
            return __(e, t, a);
          } finally {
            we.current = i;
          }
        },
        useRef: function(e) {
          return J = "useRef", pt(), ye(), cy();
        },
        useState: function(e) {
          J = "useState", pt(), ye();
          var t = we.current;
          we.current = _o;
          try {
            return T_(e);
          } finally {
            we.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", pt(), ye(), my();
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", pt(), ye(), uT(e);
        },
        useTransition: function() {
          return J = "useTransition", pt(), ye(), fT();
        },
        useMutableSource: function(e, t, a) {
          return J = "useMutableSource", pt(), ye(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return J = "useSyncExternalStore", pt(), ye(), uy(e, t);
        },
        useId: function() {
          return J = "useId", pt(), ye(), Ey();
        },
        unstable_isNewReconciler: _e
      }, Sy = {
        readContext: function(e) {
          return M_(), sr(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", pt(), ye(), yy(e, t);
        },
        useContext: function(e) {
          return J = "useContext", pt(), ye(), sr(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", pt(), ye(), Sv(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return J = "useImperativeHandle", pt(), ye(), hy(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", pt(), ye(), py(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", pt(), ye(), vy(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", pt(), ye();
          var a = we.current;
          we.current = _o;
          try {
            return gy(e, t);
          } finally {
            we.current = a;
          }
        },
        useReducer: function(e, t, a) {
          J = "useReducer", pt(), ye();
          var i = we.current;
          we.current = _o;
          try {
            return S_(e, t, a);
          } finally {
            we.current = i;
          }
        },
        useRef: function(e) {
          return J = "useRef", pt(), ye(), cy();
        },
        useState: function(e) {
          J = "useState", pt(), ye();
          var t = we.current;
          we.current = _o;
          try {
            return b_(e);
          } finally {
            we.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", pt(), ye(), my();
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", pt(), ye(), sT(e);
        },
        useTransition: function() {
          return J = "useTransition", pt(), ye(), dT();
        },
        useMutableSource: function(e, t, a) {
          return J = "useMutableSource", pt(), ye(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return J = "useSyncExternalStore", pt(), ye(), uy(e, t);
        },
        useId: function() {
          return J = "useId", pt(), ye(), Ey();
        },
        unstable_isNewReconciler: _e
      };
    }
    var ls = f.unstable_now, CT = 0, Cy = -1, Cv = -1, Ty = -1, z_ = !1, by = !1;
    function TT() {
      return z_;
    }
    function nO() {
      by = !0;
    }
    function rO() {
      z_ = !1, by = !1;
    }
    function aO() {
      z_ = by, by = !1;
    }
    function bT() {
      return CT;
    }
    function wT() {
      CT = ls();
    }
    function U_(e) {
      Cv = ls(), e.actualStartTime < 0 && (e.actualStartTime = ls());
    }
    function RT(e) {
      Cv = -1;
    }
    function wy(e, t) {
      if (Cv >= 0) {
        var a = ls() - Cv;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Cv = -1;
      }
    }
    function ll(e) {
      if (Cy >= 0) {
        var t = ls() - Cy;
        Cy = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case q:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case je:
              var l = a.stateNode;
              l.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function j_(e) {
      if (Ty >= 0) {
        var t = ls() - Ty;
        Ty = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case q:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case je:
              var l = a.stateNode;
              l !== null && (l.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function ul() {
      Cy = ls();
    }
    function P_() {
      Ty = ls();
    }
    function $_(e) {
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
    function F_(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function iO(e, t) {
      return !0;
    }
    function H_(e, t) {
      try {
        var a = iO(e, t);
        if (a === !1)
          return;
        var i = t.value, l = t.source, c = t.stack, p = c !== null ? c : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === z)
            return;
          console.error(i);
        }
        var m = l ? st(l) : null, y = m ? "The above error occurred in the <" + m + "> component:" : "The above error occurred in one of your React components:", C;
        if (e.tag === q)
          C = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var b = st(e) || "Anonymous";
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
    var oO = typeof WeakMap == "function" ? WeakMap : Map;
    function xT(e, t, a) {
      var i = Zl(sn, a);
      i.tag = HE, i.payload = {
        element: null
      };
      var l = t.value;
      return i.callback = function() {
        ZA(l), H_(e, t);
      }, i;
    }
    function V_(e, t, a) {
      var i = Zl(sn, a);
      i.tag = HE;
      var l = e.type.getDerivedStateFromError;
      if (typeof l == "function") {
        var c = t.value;
        i.payload = function() {
          return l(c);
        }, i.callback = function() {
          Pb(e), H_(e, t);
        };
      }
      var p = e.stateNode;
      return p !== null && typeof p.componentDidCatch == "function" && (i.callback = function() {
        Pb(e), H_(e, t), typeof l != "function" && qA(this);
        var y = t.value, C = t.stack;
        this.componentDidCatch(y, {
          componentStack: C !== null ? C : ""
        }), typeof l != "function" && (la(e.lanes, Ze) || _("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", st(e) || "Unknown"));
      }), i;
    }
    function DT(e, t, a) {
      var i = e.pingCache, l;
      if (i === null ? (i = e.pingCache = new oO(), l = /* @__PURE__ */ new Set(), i.set(t, l)) : (l = i.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), i.set(t, l))), !l.has(a)) {
        l.add(a);
        var c = JA.bind(null, e, t, a);
        Ta && Pv(e, a), t.then(c, c);
      }
    }
    function lO(e, t, a, i) {
      var l = e.updateQueue;
      if (l === null) {
        var c = /* @__PURE__ */ new Set();
        c.add(a), e.updateQueue = c;
      } else
        l.add(a);
    }
    function uO(e, t) {
      var a = e.tag;
      if ((e.mode & He) === qe && (a === W || a === ve || a === Ae)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function OT(e) {
      var t = e;
      do {
        if (t.tag === ce && WD(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function AT(e, t, a, i, l) {
      if ((e.mode & He) === qe) {
        if (e === t)
          e.flags |= dr;
        else {
          if (e.flags |= dt, a.flags |= of, a.flags &= ~(Lh | Ho), a.tag === z) {
            var c = a.alternate;
            if (c === null)
              a.tag = gt;
            else {
              var p = Zl(sn, Ze);
              p.tag = Qm, rs(a, p, Ze);
            }
          }
          a.lanes = mt(a.lanes, Ze);
        }
        return e;
      }
      return e.flags |= dr, e.lanes = l, e;
    }
    function sO(e, t, a, i, l) {
      if (a.flags |= Ho, Ta && Pv(e, l), i !== null && typeof i == "object" && typeof i.then == "function") {
        var c = i;
        uO(a), Pr() && a.mode & He && _C();
        var p = OT(t);
        if (p !== null) {
          p.flags &= ~zr, AT(p, t, a, e, l), p.mode & He && DT(e, c, l), lO(p, e, c);
          return;
        } else {
          if (!Rp(l)) {
            DT(e, c, l), SS();
            return;
          }
          var m = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = m;
        }
      } else if (Pr() && a.mode & He) {
        _C();
        var y = OT(t);
        if (y !== null) {
          (y.flags & dr) === Qe && (y.flags |= zr), AT(y, t, a, e, l), ME(Lc(i, a));
          return;
        }
      }
      i = Lc(i, a), VA(i);
      var C = t;
      do {
        switch (C.tag) {
          case q: {
            var b = i;
            C.flags |= dr;
            var M = Mu(l);
            C.lanes = mt(C.lanes, M);
            var N = xT(C, b, M);
            BE(C, N);
            return;
          }
          case z:
            var V = i, I = C.type, K = C.stateNode;
            if ((C.flags & dt) === Qe && (typeof I.getDerivedStateFromError == "function" || K !== null && typeof K.componentDidCatch == "function" && !Ob(K))) {
              C.flags |= dr;
              var xe = Mu(l);
              C.lanes = mt(C.lanes, xe);
              var Xe = V_(C, V, xe);
              BE(C, Xe);
              return;
            }
            break;
        }
        C = C.return;
      } while (C !== null);
    }
    function cO() {
      return null;
    }
    var Tv = E.ReactCurrentOwner, So = !1, I_, bv, B_, Y_, W_, Mc, K_, Ry;
    I_ = {}, bv = {}, B_ = {}, Y_ = {}, W_ = {}, Mc = !1, K_ = {}, Ry = {};
    function wa(e, t, a, i) {
      e === null ? t.child = GC(t, null, a, i) : t.child = dd(t, e.child, a, i);
    }
    function fO(e, t, a, i) {
      t.child = dd(t, e.child, null, i), t.child = dd(t, null, a, i);
    }
    function kT(e, t, a, i, l) {
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
      return kl(), e !== null && !So ? (JC(e, t, l), Jl(e, t, l)) : (Pr() && C && DE(t), t.flags |= fi, wa(e, t, y, l), t.child);
    }
    function NT(e, t, a, i, l) {
      if (e === null) {
        var c = a.type;
        if (mk(c) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var p = c;
          return p = xd(c), t.tag = Ae, t.type = p, q_(t, c), LT(e, t, p, i, l);
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
        var V = M.memoizedProps, I = a.compare;
        if (I = I !== null ? I : et, I(V, i) && e.ref === t.ref)
          return Jl(e, t, l);
      }
      t.flags |= fi;
      var K = $c(M, i);
      return K.ref = t.ref, K.return = t, t.child = K, K;
    }
    function LT(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var c = t.elementType;
        if (c.$$typeof === Ke) {
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
        if (et(b, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (So = !1, t.pendingProps = i = b, nS(e, l))
            (e.flags & of) !== Qe && (So = !0);
          else
            return t.lanes = e.lanes, Jl(e, t, l);
      }
      return G_(e, t, a, i, l);
    }
    function MT(e, t, a) {
      var i = t.pendingProps, l = i.children, c = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || Z)
        if ((t.mode & He) === qe) {
          var p = {
            baseLanes: Q,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = p, $y(t, a);
        } else if (la(a, ba)) {
          var M = {
            baseLanes: Q,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = M;
          var N = c !== null ? c.baseLanes : a;
          $y(t, N);
        } else {
          var m = null, y;
          if (c !== null) {
            var C = c.baseLanes;
            y = mt(C, a);
          } else
            y = a;
          t.lanes = t.childLanes = ba;
          var b = {
            baseLanes: y,
            cachePool: m,
            transitions: null
          };
          return t.memoizedState = b, t.updateQueue = null, $y(t, y), null;
        }
      else {
        var V;
        c !== null ? (V = mt(c.baseLanes, a), t.memoizedState = null) : V = a, $y(t, V);
      }
      return wa(e, t, l, a), t.child;
    }
    function dO(e, t, a) {
      var i = t.pendingProps;
      return wa(e, t, i, a), t.child;
    }
    function pO(e, t, a) {
      var i = t.pendingProps.children;
      return wa(e, t, i, a), t.child;
    }
    function vO(e, t, a) {
      {
        t.flags |= $e;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var l = t.pendingProps, c = l.children;
      return wa(e, t, c, a), t.child;
    }
    function zT(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= _a, t.flags |= xi);
    }
    function G_(e, t, a, i, l) {
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
      return kl(), e !== null && !So ? (JC(e, t, l), Jl(e, t, l)) : (Pr() && C && DE(t), t.flags |= fi, wa(e, t, y, l), t.child);
    }
    function UT(e, t, a, i, l) {
      {
        switch (kk(t)) {
          case !1: {
            var c = t.stateNode, p = t.type, m = new p(t.memoizedProps, c.context), y = m.state;
            c.updater.enqueueSetState(c, y, null);
            break;
          }
          case !0: {
            t.flags |= dt, t.flags |= dr;
            var C = new Error("Simulated error coming from DevTools"), b = Mu(l);
            t.lanes = mt(t.lanes, b);
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
      var V;
      rl(a) ? (V = !0, Pm(t)) : V = !1, fd(t, l);
      var I = t.stateNode, K;
      I === null ? (Dy(e, t), IC(t, a, i), n_(t, a, i, l), K = !0) : e === null ? K = FD(t, a, i, l) : K = HD(e, t, a, i, l);
      var xe = Q_(e, t, a, K, V, l);
      {
        var Xe = t.stateNode;
        K && Xe.props !== i && (Mc || _("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", st(t) || "a component"), Mc = !0);
      }
      return xe;
    }
    function Q_(e, t, a, i, l, c) {
      zT(e, t);
      var p = (t.flags & dt) !== Qe;
      if (!i && !p)
        return l && mC(t, a, !1), Jl(e, t, c);
      var m = t.stateNode;
      Tv.current = t;
      var y;
      if (p && typeof a.getDerivedStateFromError != "function")
        y = null, RT();
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
      return t.flags |= fi, e !== null && p ? fO(e, t, y, c) : wa(e, t, y, c), t.memoizedState = m.state, l && mC(t, a, !0), t.child;
    }
    function jT(e) {
      var t = e.stateNode;
      t.pendingContext ? vC(e, t.pendingContext, t.pendingContext !== t.context) : t.context && vC(e, t.context, !1), u_(e, t.containerInfo);
    }
    function hO(e, t, a) {
      if (jT(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, l = t.memoizedState, c = l.element;
      zC(e, t), Jm(t, i, null, a);
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
        if (C.baseState = y, t.memoizedState = y, t.flags & zr) {
          var b = Lc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return PT(e, t, m, a, b);
        } else if (m !== c) {
          var M = Lc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return PT(e, t, m, a, M);
        } else {
          ED(t);
          var N = GC(t, null, m, a);
          t.child = N;
          for (var V = N; V; )
            V.flags = V.flags & ~nn | Ri, V = V.sibling;
        }
      } else {
        if (sd(), m === c)
          return Jl(e, t, a);
        wa(e, t, m, a);
      }
      return t.child;
    }
    function PT(e, t, a, i, l) {
      return sd(), ME(l), t.flags |= zr, wa(e, t, a, i), t.child;
    }
    function mO(e, t, a) {
      qC(t), e === null && LE(t);
      var i = t.type, l = t.pendingProps, c = e !== null ? e.memoizedProps : null, p = l.children, m = vE(i, l);
      return m ? p = null : c !== null && vE(i, c) && (t.flags |= Pa), zT(e, t), wa(e, t, p, a), t.child;
    }
    function yO(e, t) {
      return e === null && LE(t), null;
    }
    function gO(e, t, a, i) {
      Dy(e, t);
      var l = t.pendingProps, c = a, p = c._payload, m = c._init, y = m(p);
      t.type = y;
      var C = t.tag = yk(y), b = go(y, l), M;
      switch (C) {
        case W:
          return q_(t, y), t.type = y = xd(y), M = G_(null, t, y, b, i), M;
        case z:
          return t.type = y = RS(y), M = UT(null, t, y, b, i), M;
        case ve:
          return t.type = y = xS(y), M = kT(null, t, y, b, i), M;
        case Pe: {
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
          return M = NT(
            null,
            t,
            y,
            go(y.type, b),
            // The inner type can have defaults too
            i
          ), M;
        }
      }
      var V = "";
      throw y !== null && typeof y == "object" && y.$$typeof === Ke && (V = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + y + ". " + ("Lazy element type must resolve to a class or function." + V));
    }
    function EO(e, t, a, i, l) {
      Dy(e, t), t.tag = z;
      var c;
      return rl(a) ? (c = !0, Pm(t)) : c = !1, fd(t, l), IC(t, a, i), n_(t, a, i, l), Q_(null, t, a, !0, c, l);
    }
    function _O(e, t, a, i) {
      Dy(e, t);
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
        return rl(a) ? (N = !0, Pm(t)) : N = !1, t.memoizedState = m.state !== null && m.state !== void 0 ? m.state : null, IE(t), VC(t, m), n_(t, a, l, i), Q_(null, t, a, !0, N, i);
      } else {
        if (t.tag = W, t.mode & On) {
          un(!0);
          try {
            m = gd(null, t, a, l, c, i), y = Ed();
          } finally {
            un(!1);
          }
        }
        return Pr() && y && DE(t), wa(null, t, m, i), q_(t, a), t.child;
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
      retryLane: Pn
    };
    function Z_(e) {
      return {
        baseLanes: e,
        cachePool: cO(),
        transitions: null
      };
    }
    function SO(e, t) {
      var a = null;
      return {
        baseLanes: mt(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function CO(e, t, a, i) {
      if (t !== null) {
        var l = t.memoizedState;
        if (l === null)
          return !1;
      }
      return f_(e, hv);
    }
    function TO(e, t) {
      return sc(e.childLanes, t);
    }
    function $T(e, t, a) {
      var i = t.pendingProps;
      Nk(t) && (t.flags |= dt);
      var l = Eo.current, c = !1, p = (t.flags & dt) !== Qe;
      if (p || CO(l, e) ? (c = !0, t.flags &= ~dt) : (e === null || e.memoizedState !== null) && (l = YD(l, ZC)), l = vd(l), is(t, l), e === null) {
        LE(t);
        var m = t.memoizedState;
        if (m !== null) {
          var y = m.dehydrated;
          if (y !== null)
            return DO(t, y);
        }
        var C = i.children, b = i.fallback;
        if (c) {
          var M = bO(t, C, b, a), N = t.child;
          return N.memoizedState = Z_(a), t.memoizedState = X_, M;
        } else
          return J_(t, C);
      } else {
        var V = e.memoizedState;
        if (V !== null) {
          var I = V.dehydrated;
          if (I !== null)
            return OO(e, t, p, i, I, V, a);
        }
        if (c) {
          var K = i.fallback, xe = i.children, Xe = RO(e, t, xe, K, a), Ve = t.child, Lt = e.child.memoizedState;
          return Ve.memoizedState = Lt === null ? Z_(a) : SO(Lt, a), Ve.childLanes = TO(e, a), t.memoizedState = X_, Xe;
        } else {
          var Ot = i.children, j = wO(e, t, Ot, a);
          return t.memoizedState = null, j;
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
    function bO(e, t, a, i) {
      var l = e.mode, c = e.child, p = {
        mode: "hidden",
        children: t
      }, m, y;
      return (l & He) === qe && c !== null ? (m = c, m.childLanes = Q, m.pendingProps = p, e.mode & jt && (m.actualDuration = 0, m.actualStartTime = -1, m.selfBaseDuration = 0, m.treeBaseDuration = 0), y = ps(a, l, i, null)) : (m = eS(p, l), y = ps(a, l, i, null)), m.return = e, y.return = e, m.sibling = y, e.child = m, y;
    }
    function eS(e, t, a) {
      return Fb(e, t, Q, null);
    }
    function FT(e, t) {
      return $c(e, t);
    }
    function wO(e, t, a, i) {
      var l = e.child, c = l.sibling, p = FT(l, {
        mode: "visible",
        children: a
      });
      if ((t.mode & He) === qe && (p.lanes = i), p.return = t, p.sibling = null, c !== null) {
        var m = t.deletions;
        m === null ? (t.deletions = [c], t.flags |= $t) : m.push(c);
      }
      return t.child = p, p;
    }
    function RO(e, t, a, i, l) {
      var c = t.mode, p = e.child, m = p.sibling, y = {
        mode: "hidden",
        children: a
      }, C;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (c & He) === qe && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== p
      ) {
        var b = t.child;
        C = b, C.childLanes = Q, C.pendingProps = y, t.mode & jt && (C.actualDuration = 0, C.actualStartTime = -1, C.selfBaseDuration = p.selfBaseDuration, C.treeBaseDuration = p.treeBaseDuration), t.deletions = null;
      } else
        C = FT(p, y), C.subtreeFlags = p.subtreeFlags & pr;
      var M;
      return m !== null ? M = $c(m, i) : (M = ps(i, c, l, null), M.flags |= nn), M.return = t, C.return = t, C.sibling = M, t.child = C, M;
    }
    function xy(e, t, a, i) {
      i !== null && ME(i), dd(t, e.child, null, a);
      var l = t.pendingProps, c = l.children, p = J_(t, c);
      return p.flags |= nn, t.memoizedState = null, p;
    }
    function xO(e, t, a, i, l) {
      var c = t.mode, p = {
        mode: "visible",
        children: a
      }, m = eS(p, c), y = ps(i, c, l, null);
      return y.flags |= nn, m.return = t, y.return = t, m.sibling = y, t.child = m, (t.mode & He) !== qe && dd(t, e.child, null, l), y;
    }
    function DO(e, t, a) {
      return (e.mode & He) === qe ? (_("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Ze) : gE(t) ? e.lanes = An : e.lanes = ba, null;
    }
    function OO(e, t, a, i, l, c, p) {
      if (a)
        if (t.flags & zr) {
          t.flags &= ~zr;
          var j = F_(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return xy(e, t, p, j);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= dt, null;
          var G = i.children, P = i.fallback, se = xO(e, t, G, P, p), De = t.child;
          return De.memoizedState = Z_(p), t.memoizedState = X_, se;
        }
      else {
        if (yD(), (t.mode & He) === qe)
          return xy(
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
            var b = Mx(l);
            m = b.digest, y = b.message, C = b.stack;
          }
          var M;
          y ? M = new Error(y) : M = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var N = F_(M, m, C);
          return xy(e, t, p, N);
        }
        var V = la(p, e.childLanes);
        if (So || V) {
          var I = Py();
          if (I !== null) {
            var K = Jh(I, p);
            if (K !== Pn && K !== c.retryLane) {
              c.retryLane = K;
              var xe = sn;
              qa(e, K), Cr(I, e, K, xe);
            }
          }
          SS();
          var Xe = F_(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return xy(e, t, p, Xe);
        } else if (uC(l)) {
          t.flags |= dt, t.child = e.child;
          var Ve = ek.bind(null, e);
          return zx(l, Ve), null;
        } else {
          _D(t, l, c.treeContext);
          var Lt = i.children, Ot = J_(t, Lt);
          return Ot.flags |= Ri, Ot;
        }
      }
    }
    function HT(e, t, a) {
      e.lanes = mt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = mt(i.lanes, t)), $E(e.return, t, a);
    }
    function AO(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === ce) {
          var l = i.memoizedState;
          l !== null && HT(i, a, e);
        } else if (i.tag === lt)
          HT(i, a, e);
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
    function kO(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && oy(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function NO(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !K_[e])
        if (K_[e] = !0, typeof e == "string")
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
    function LO(e, t) {
      e !== void 0 && !Ry[e] && (e !== "collapsed" && e !== "hidden" ? (Ry[e] = !0, _('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Ry[e] = !0, _('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function VT(e, t) {
      {
        var a = Ut(e), i = !a && typeof _i(e) == "function";
        if (a || i) {
          var l = a ? "array" : "iterable";
          return _("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", l, t, l), !1;
        }
      }
      return !0;
    }
    function MO(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Ut(e)) {
          for (var a = 0; a < e.length; a++)
            if (!VT(e[a], a))
              return;
        } else {
          var i = _i(e);
          if (typeof i == "function") {
            var l = i.call(e);
            if (l)
              for (var c = l.next(), p = 0; !c.done; c = l.next()) {
                if (!VT(c.value, p))
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
    function IT(e, t, a) {
      var i = t.pendingProps, l = i.revealOrder, c = i.tail, p = i.children;
      NO(l), LO(c, l), MO(p, l), wa(e, t, p, a);
      var m = Eo.current, y = f_(m, hv);
      if (y)
        m = d_(m, hv), t.flags |= dt;
      else {
        var C = e !== null && (e.flags & dt) !== Qe;
        C && AO(t, t.child, a), m = vd(m);
      }
      if (is(t, m), (t.mode & He) === qe)
        t.memoizedState = null;
      else
        switch (l) {
          case "forwards": {
            var b = kO(t.child), M;
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
            var N = null, V = t.child;
            for (t.child = null; V !== null; ) {
              var I = V.alternate;
              if (I !== null && oy(I) === null) {
                t.child = V;
                break;
              }
              var K = V.sibling;
              V.sibling = N, N = V, V = K;
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
    function zO(e, t, a) {
      u_(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = dd(t, null, i, a) : wa(e, t, i, a), t.child;
    }
    var BT = !1;
    function UO(e, t, a) {
      var i = t.type, l = i._context, c = t.pendingProps, p = t.memoizedProps, m = c.value;
      {
        "value" in c || BT || (BT = !0, _("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var y = t.type.propTypes;
        y && ho(y, c, "prop", "Context.Provider");
      }
      if (kC(t, l, m), p !== null) {
        var C = p.value;
        if (Ne(C, m)) {
          if (p.children === c.children && !Um())
            return Jl(e, t, a);
        } else
          AD(t, l, a);
      }
      var b = c.children;
      return wa(e, t, b, a), t.child;
    }
    var YT = !1;
    function jO(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (YT || (YT = !0, _("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
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
    function Dy(e, t) {
      (t.mode & He) === qe && e !== null && (e.alternate = null, t.alternate = null, t.flags |= nn);
    }
    function Jl(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), RT(), jv(t.lanes), la(a, t.childLanes) ? (VD(e, t), t.child) : null;
    }
    function PO(e, t, a) {
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
        return c === null ? (i.deletions = [e], i.flags |= $t) : c.push(e), a.flags |= nn, a;
      }
    }
    function nS(e, t) {
      var a = e.lanes;
      return !!la(a, t);
    }
    function $O(e, t, a) {
      switch (t.tag) {
        case q:
          jT(t), t.stateNode, sd();
          break;
        case ee:
          qC(t);
          break;
        case z: {
          var i = t.type;
          rl(i) && Pm(t);
          break;
        }
        case te:
          u_(t, t.stateNode.containerInfo);
          break;
        case ze: {
          var l = t.memoizedProps.value, c = t.type._context;
          kC(t, c, l);
          break;
        }
        case je:
          {
            var p = la(a, t.childLanes);
            p && (t.flags |= $e);
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
              return is(t, vd(Eo.current)), t.flags |= dt, null;
            var C = t.child, b = C.childLanes;
            if (la(a, b))
              return $T(e, t, a);
            is(t, vd(Eo.current));
            var M = Jl(e, t, a);
            return M !== null ? M.sibling : null;
          } else
            is(t, vd(Eo.current));
          break;
        }
        case lt: {
          var N = (e.flags & dt) !== Qe, V = la(a, t.childLanes);
          if (N) {
            if (V)
              return IT(e, t, a);
            t.flags |= dt;
          }
          var I = t.memoizedState;
          if (I !== null && (I.rendering = null, I.tail = null, I.lastEffect = null), is(t, Eo.current), V)
            break;
          return null;
        }
        case Ye:
        case nt:
          return t.lanes = Q, MT(e, t, a);
      }
      return Jl(e, t, a);
    }
    function WT(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return PO(e, t, NS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, l = t.pendingProps;
        if (i !== l || Um() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          So = !0;
        else {
          var c = nS(e, a);
          if (!c && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & dt) === Qe)
            return So = !1, $O(e, t, a);
          (e.flags & of) !== Qe ? So = !0 : So = !1;
        }
      } else if (So = !1, Pr() && fD(t)) {
        var p = t.index, m = dD();
        EC(t, m, p);
      }
      switch (t.lanes = Q, t.tag) {
        case le:
          return _O(e, t, t.type, a);
        case wt: {
          var y = t.elementType;
          return gO(e, t, y, a);
        }
        case W: {
          var C = t.type, b = t.pendingProps, M = t.elementType === C ? b : go(C, b);
          return G_(e, t, C, M, a);
        }
        case z: {
          var N = t.type, V = t.pendingProps, I = t.elementType === N ? V : go(N, V);
          return UT(e, t, N, I, a);
        }
        case q:
          return hO(e, t, a);
        case ee:
          return mO(e, t, a);
        case ae:
          return yO(e, t);
        case ce:
          return $T(e, t, a);
        case te:
          return zO(e, t, a);
        case ve: {
          var K = t.type, xe = t.pendingProps, Xe = t.elementType === K ? xe : go(K, xe);
          return kT(e, t, K, Xe, a);
        }
        case Te:
          return dO(e, t, a);
        case vt:
          return pO(e, t, a);
        case je:
          return vO(e, t, a);
        case ze:
          return UO(e, t, a);
        case ct:
          return jO(e, t, a);
        case Pe: {
          var Ve = t.type, Lt = t.pendingProps, Ot = go(Ve, Lt);
          if (t.type !== t.elementType) {
            var j = Ve.propTypes;
            j && ho(
              j,
              Ot,
              // Resolved for outer only
              "prop",
              zt(Ve)
            );
          }
          return Ot = go(Ve.type, Ot), NT(e, t, Ve, Ot, a);
        }
        case Ae:
          return LT(e, t, t.type, t.pendingProps, a);
        case gt: {
          var G = t.type, P = t.pendingProps, se = t.elementType === G ? P : go(G, P);
          return EO(e, t, G, se, a);
        }
        case lt:
          return IT(e, t, a);
        case St:
          break;
        case Ye:
          return MT(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function _d(e) {
      e.flags |= $e;
    }
    function KT(e) {
      e.flags |= _a, e.flags |= xi;
    }
    var GT, rS, QT, qT;
    GT = function(e, t, a, i) {
      for (var l = t.child; l !== null; ) {
        if (l.tag === ee || l.tag === ae)
          ux(e, l.stateNode);
        else if (l.tag !== te) {
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
    }, QT = function(e, t, a, i, l) {
      var c = e.memoizedProps;
      if (c !== i) {
        var p = t.stateNode, m = s_(), y = cx(p, a, c, i, l, m);
        t.updateQueue = y, y && _d(t);
      }
    }, qT = function(e, t, a, i) {
      a !== i && _d(t);
    };
    function Rv(e, t) {
      if (!Pr())
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
    function Fr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = Q, i = Qe;
      if (t) {
        if ((e.mode & jt) !== qe) {
          for (var y = e.selfBaseDuration, C = e.child; C !== null; )
            a = mt(a, mt(C.lanes, C.childLanes)), i |= C.subtreeFlags & pr, i |= C.flags & pr, y += C.treeBaseDuration, C = C.sibling;
          e.treeBaseDuration = y;
        } else
          for (var b = e.child; b !== null; )
            a = mt(a, mt(b.lanes, b.childLanes)), i |= b.subtreeFlags & pr, i |= b.flags & pr, b.return = e, b = b.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & jt) !== qe) {
          for (var l = e.actualDuration, c = e.selfBaseDuration, p = e.child; p !== null; )
            a = mt(a, mt(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, l += p.actualDuration, c += p.treeBaseDuration, p = p.sibling;
          e.actualDuration = l, e.treeBaseDuration = c;
        } else
          for (var m = e.child; m !== null; )
            a = mt(a, mt(m.lanes, m.childLanes)), i |= m.subtreeFlags, i |= m.flags, m.return = e, m = m.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function FO(e, t, a) {
      if (wD() && (t.mode & He) !== qe && (t.flags & dt) === Qe)
        return RC(t), sd(), t.flags |= zr | Ho | dr, !1;
      var i = Im(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (TD(t), Fr(t), (t.mode & jt) !== qe) {
            var l = a !== null;
            if (l) {
              var c = t.child;
              c !== null && (t.treeBaseDuration -= c.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (sd(), (t.flags & dt) === Qe && (t.memoizedState = null), t.flags |= $e, Fr(t), (t.mode & jt) !== qe) {
            var p = a !== null;
            if (p) {
              var m = t.child;
              m !== null && (t.treeBaseDuration -= m.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return xC(), !0;
    }
    function XT(e, t, a) {
      var i = t.pendingProps;
      switch (OE(t), t.tag) {
        case le:
        case wt:
        case Ae:
        case W:
        case ve:
        case Te:
        case vt:
        case je:
        case ct:
        case Pe:
          return Fr(t), null;
        case z: {
          var l = t.type;
          return rl(l) && jm(t), Fr(t), null;
        }
        case q: {
          var c = t.stateNode;
          if (pd(t), wE(t), v_(), c.pendingContext && (c.context = c.pendingContext, c.pendingContext = null), e === null || e.child === null) {
            var p = Im(t);
            if (p)
              _d(t);
            else if (e !== null) {
              var m = e.memoizedState;
              // Check if this is a client root
              (!m.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & zr) !== Qe) && (t.flags |= Wn, xC());
            }
          }
          return rS(e, t), Fr(t), null;
        }
        case ee: {
          c_(t);
          var y = QC(), C = t.type;
          if (e !== null && t.stateNode != null)
            QT(e, t, C, i, y), e.ref !== t.ref && KT(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Fr(t), null;
            }
            var b = s_(), M = Im(t);
            if (M)
              SD(t, y, b) && _d(t);
            else {
              var N = lx(C, i, y, b, t);
              GT(N, t, !1, !1), t.stateNode = N, sx(N, C, i, y) && _d(t);
            }
            t.ref !== null && KT(t);
          }
          return Fr(t), null;
        }
        case ae: {
          var V = i;
          if (e && t.stateNode != null) {
            var I = e.memoizedProps;
            qT(e, t, I, V);
          } else {
            if (typeof V != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var K = QC(), xe = s_(), Xe = Im(t);
            Xe ? CD(t) && _d(t) : t.stateNode = fx(V, K, xe, t);
          }
          return Fr(t), null;
        }
        case ce: {
          hd(t);
          var Ve = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Lt = FO(e, t, Ve);
            if (!Lt)
              return t.flags & dr ? t : null;
          }
          if ((t.flags & dt) !== Qe)
            return t.lanes = a, (t.mode & jt) !== qe && $_(t), t;
          var Ot = Ve !== null, j = e !== null && e.memoizedState !== null;
          if (Ot !== j && Ot) {
            var G = t.child;
            if (G.flags |= Fo, (t.mode & He) !== qe) {
              var P = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !Ce);
              P || f_(Eo.current, ZC) ? HA() : SS();
            }
          }
          var se = t.updateQueue;
          if (se !== null && (t.flags |= $e), Fr(t), (t.mode & jt) !== qe && Ot) {
            var De = t.child;
            De !== null && (t.treeBaseDuration -= De.treeBaseDuration);
          }
          return null;
        }
        case te:
          return pd(t), rS(e, t), e === null && aD(t.stateNode.containerInfo), Fr(t), null;
        case ze:
          var Se = t.type._context;
          return PE(Se, t), Fr(t), null;
        case gt: {
          var at = t.type;
          return rl(at) && jm(t), Fr(t), null;
        }
        case lt: {
          hd(t);
          var ht = t.memoizedState;
          if (ht === null)
            return Fr(t), null;
          var Jt = (t.flags & dt) !== Qe, Ht = ht.rendering;
          if (Ht === null)
            if (Jt)
              Rv(ht, !1);
            else {
              var nr = IA() && (e === null || (e.flags & dt) === Qe);
              if (!nr)
                for (var Vt = t.child; Vt !== null; ) {
                  var Gn = oy(Vt);
                  if (Gn !== null) {
                    Jt = !0, t.flags |= dt, Rv(ht, !1);
                    var da = Gn.updateQueue;
                    return da !== null && (t.updateQueue = da, t.flags |= $e), t.subtreeFlags = Qe, ID(t, a), is(t, d_(Eo.current, hv)), t.child;
                  }
                  Vt = Vt.sibling;
                }
              ht.tail !== null && Kn() > gb() && (t.flags |= dt, Jt = !0, Rv(ht, !1), t.lanes = bp);
            }
          else {
            if (!Jt) {
              var Yr = oy(Ht);
              if (Yr !== null) {
                t.flags |= dt, Jt = !0;
                var hi = Yr.updateQueue;
                if (hi !== null && (t.updateQueue = hi, t.flags |= $e), Rv(ht, !0), ht.tail === null && ht.tailMode === "hidden" && !Ht.alternate && !Pr())
                  return Fr(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                Kn() * 2 - ht.renderingStartTime > gb() && a !== ba && (t.flags |= dt, Jt = !0, Rv(ht, !1), t.lanes = bp);
            }
            if (ht.isBackwards)
              Ht.sibling = t.child, t.child = Ht;
            else {
              var Da = ht.last;
              Da !== null ? Da.sibling = Ht : t.child = Ht, ht.last = Ht;
            }
          }
          if (ht.tail !== null) {
            var Oa = ht.tail;
            ht.rendering = Oa, ht.tail = Oa.sibling, ht.renderingStartTime = Kn(), Oa.sibling = null;
            var pa = Eo.current;
            return Jt ? pa = d_(pa, hv) : pa = vd(pa), is(t, pa), Oa;
          }
          return Fr(t), null;
        }
        case St:
          break;
        case Ye:
        case nt: {
          _S(t);
          var au = t.memoizedState, Dd = au !== null;
          if (e !== null) {
            var Vv = e.memoizedState, fl = Vv !== null;
            fl !== Dd && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !Z && (t.flags |= Fo);
          }
          return !Dd || (t.mode & He) === qe ? Fr(t) : la(cl, ba) && (Fr(t), t.subtreeFlags & (nn | $e) && (t.flags |= Fo)), null;
        }
        case it:
          return null;
        case Ge:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function HO(e, t, a) {
      switch (OE(t), t.tag) {
        case z: {
          var i = t.type;
          rl(i) && jm(t);
          var l = t.flags;
          return l & dr ? (t.flags = l & ~dr | dt, (t.mode & jt) !== qe && $_(t), t) : null;
        }
        case q: {
          t.stateNode, pd(t), wE(t), v_();
          var c = t.flags;
          return (c & dr) !== Qe && (c & dt) === Qe ? (t.flags = c & ~dr | dt, t) : null;
        }
        case ee:
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
          return m & dr ? (t.flags = m & ~dr | dt, (t.mode & jt) !== qe && $_(t), t) : null;
        }
        case lt:
          return hd(t), null;
        case te:
          return pd(t), null;
        case ze:
          var y = t.type._context;
          return PE(y, t), null;
        case Ye:
        case nt:
          return _S(t), null;
        case it:
          return null;
        default:
          return null;
      }
    }
    function ZT(e, t, a) {
      switch (OE(t), t.tag) {
        case z: {
          var i = t.type.childContextTypes;
          i != null && jm(t);
          break;
        }
        case q: {
          t.stateNode, pd(t), wE(t), v_();
          break;
        }
        case ee: {
          c_(t);
          break;
        }
        case te:
          pd(t);
          break;
        case ce:
          hd(t);
          break;
        case lt:
          hd(t);
          break;
        case ze:
          var l = t.type._context;
          PE(l, t);
          break;
        case Ye:
        case nt:
          _S(t);
          break;
      }
    }
    var JT = null;
    JT = /* @__PURE__ */ new Set();
    var Oy = !1, Hr = !1, VO = typeof WeakSet == "function" ? WeakSet : Set, Le = null, Sd = null, Cd = null;
    function IO(e) {
      ci(null, function() {
        throw e;
      }), oo();
    }
    var BO = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & jt)
        try {
          ul(), t.componentWillUnmount();
        } finally {
          ll(e);
        }
      else
        t.componentWillUnmount();
    };
    function eb(e, t) {
      try {
        us(mr, e);
      } catch (a) {
        vn(e, t, a);
      }
    }
    function aS(e, t, a) {
      try {
        BO(e, a);
      } catch (i) {
        vn(e, t, i);
      }
    }
    function YO(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        vn(e, t, i);
      }
    }
    function tb(e, t) {
      try {
        rb(e);
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
            if (Et && ot && e.mode & jt)
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
          typeof i == "function" && _("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", st(e));
        } else
          a.current = null;
    }
    function Ay(e, t, a) {
      try {
        a();
      } catch (i) {
        vn(e, t, i);
      }
    }
    var nb = !1;
    function WO(e, t) {
      ix(e.containerInfo), Le = t, KO();
      var a = nb;
      return nb = !1, a;
    }
    function KO() {
      for (; Le !== null; ) {
        var e = Le, t = e.child;
        (e.subtreeFlags & ea) !== Qe && t !== null ? (t.return = e, Le = t) : GO();
      }
    }
    function GO() {
      for (; Le !== null; ) {
        var e = Le;
        Cn(e);
        try {
          QO(e);
        } catch (a) {
          vn(e, e.return, a);
        }
        cn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Le = t;
          return;
        }
        Le = e.return;
      }
    }
    function QO(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Wn) !== Qe) {
        switch (Cn(e), e.tag) {
          case W:
          case ve:
          case Ae:
            break;
          case z: {
            if (t !== null) {
              var i = t.memoizedProps, l = t.memoizedState, c = e.stateNode;
              e.type === e.elementType && !Mc && (c.props !== e.memoizedProps && _("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", st(e) || "instance"), c.state !== e.memoizedState && _("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", st(e) || "instance"));
              var p = c.getSnapshotBeforeUpdate(e.elementType === e.type ? i : go(e.type, i), l);
              {
                var m = JT;
                p === void 0 && !m.has(e.type) && (m.add(e.type), _("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", st(e)));
              }
              c.__reactInternalSnapshotBeforeUpdate = p;
            }
            break;
          }
          case q: {
            {
              var y = e.stateNode;
              Ax(y.containerInfo);
            }
            break;
          }
          case ee:
          case ae:
          case te:
          case gt:
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
            p.destroy = void 0, m !== void 0 && ((e & $r) !== Xa ? $h(t) : (e & mr) !== Xa && xu(t), (e & al) !== Xa && $v(!0), Ay(t, a, m), (e & al) !== Xa && $v(!1), (e & $r) !== Xa ? Fh() : (e & mr) !== Xa && Zs());
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
            (e & $r) !== Xa ? _p(t) : (e & mr) !== Xa && Hh(t);
            var p = c.create;
            (e & al) !== Xa && $v(!0), c.destroy = p(), (e & al) !== Xa && $v(!1), (e & $r) !== Xa ? df() : (e & mr) !== Xa && Sp();
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
    function qO(e, t) {
      if ((t.flags & $e) !== Qe)
        switch (t.tag) {
          case je: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, l = i.id, c = i.onPostCommit, p = bT(), m = t.alternate === null ? "mount" : "update";
            TT() && (m = "nested-update"), typeof c == "function" && c(l, m, a, p);
            var y = t.return;
            e:
              for (; y !== null; ) {
                switch (y.tag) {
                  case q:
                    var C = y.stateNode;
                    C.passiveEffectDuration += a;
                    break e;
                  case je:
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
    function XO(e, t, a, i) {
      if ((a.flags & di) !== Qe)
        switch (a.tag) {
          case W:
          case ve:
          case Ae: {
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
            if (a.flags & $e && !Hr)
              if (t === null)
                if (a.type === a.elementType && !Mc && (l.props !== a.memoizedProps && _("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", st(a) || "instance"), l.state !== a.memoizedState && _("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", st(a) || "instance")), a.mode & jt)
                  try {
                    ul(), l.componentDidMount();
                  } finally {
                    ll(a);
                  }
                else
                  l.componentDidMount();
              else {
                var c = a.elementType === a.type ? t.memoizedProps : go(a.type, t.memoizedProps), p = t.memoizedState;
                if (a.type === a.elementType && !Mc && (l.props !== a.memoizedProps && _("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", st(a) || "instance"), l.state !== a.memoizedState && _("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", st(a) || "instance")), a.mode & jt)
                  try {
                    ul(), l.componentDidUpdate(c, p, l.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    ll(a);
                  }
                else
                  l.componentDidUpdate(c, p, l.__reactInternalSnapshotBeforeUpdate);
              }
            var m = a.updateQueue;
            m !== null && (a.type === a.elementType && !Mc && (l.props !== a.memoizedProps && _("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", st(a) || "instance"), l.state !== a.memoizedState && _("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", st(a) || "instance")), jC(a, m, l));
            break;
          }
          case q: {
            var y = a.updateQueue;
            if (y !== null) {
              var C = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case ee:
                    C = a.child.stateNode;
                    break;
                  case z:
                    C = a.child.stateNode;
                    break;
                }
              jC(a, y, C);
            }
            break;
          }
          case ee: {
            var b = a.stateNode;
            if (t === null && a.flags & $e) {
              var M = a.type, N = a.memoizedProps;
              mx(b, M, N);
            }
            break;
          }
          case ae:
            break;
          case te:
            break;
          case je: {
            {
              var V = a.memoizedProps, I = V.onCommit, K = V.onRender, xe = a.stateNode.effectDuration, Xe = bT(), Ve = t === null ? "mount" : "update";
              TT() && (Ve = "nested-update"), typeof K == "function" && K(a.memoizedProps.id, Ve, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Xe);
              {
                typeof I == "function" && I(a.memoizedProps.id, Ve, xe, Xe), GA(a);
                var Lt = a.return;
                e:
                  for (; Lt !== null; ) {
                    switch (Lt.tag) {
                      case q:
                        var Ot = Lt.stateNode;
                        Ot.effectDuration += xe;
                        break e;
                      case je:
                        var j = Lt.stateNode;
                        j.effectDuration += xe;
                        break e;
                    }
                    Lt = Lt.return;
                  }
              }
            }
            break;
          }
          case ce: {
            iA(e, a);
            break;
          }
          case lt:
          case gt:
          case St:
          case Ye:
          case nt:
          case Ge:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Hr || a.flags & _a && rb(a);
    }
    function ZO(e) {
      switch (e.tag) {
        case W:
        case ve:
        case Ae: {
          if (e.mode & jt)
            try {
              ul(), eb(e, e.return);
            } finally {
              ll(e);
            }
          else
            eb(e, e.return);
          break;
        }
        case z: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && YO(e, e.return, t), tb(e, e.return);
          break;
        }
        case ee: {
          tb(e, e.return);
          break;
        }
      }
    }
    function JO(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === ee) {
          if (a === null) {
            a = i;
            try {
              var l = i.stateNode;
              t ? Rx(l) : Dx(i.stateNode, i.memoizedProps);
            } catch (p) {
              vn(e, e.return, p);
            }
          }
        } else if (i.tag === ae) {
          if (a === null)
            try {
              var c = i.stateNode;
              t ? xx(c) : Ox(c, i.memoizedProps);
            } catch (p) {
              vn(e, e.return, p);
            }
        } else if (!((i.tag === Ye || i.tag === nt) && i.memoizedState !== null && i !== e)) {
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
    function rb(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case ee:
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
          typeof l == "function" && _("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", st(e));
        } else
          t.hasOwnProperty("current") || _("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", st(e)), t.current = i;
      }
    }
    function eA(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function ab(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, ab(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === ee) {
          var a = e.stateNode;
          a !== null && lD(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function tA(e) {
      for (var t = e.return; t !== null; ) {
        if (ib(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function ib(e) {
      return e.tag === ee || e.tag === q || e.tag === te;
    }
    function ob(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || ib(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== ee && t.tag !== ae && t.tag !== yt; ) {
            if (t.flags & nn || t.child === null || t.tag === te)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & nn))
            return t.stateNode;
        }
    }
    function nA(e) {
      var t = tA(e);
      switch (t.tag) {
        case ee: {
          var a = t.stateNode;
          t.flags & Pa && (lC(a), t.flags &= ~Pa);
          var i = ob(e);
          oS(e, i, a);
          break;
        }
        case q:
        case te: {
          var l = t.stateNode.containerInfo, c = ob(e);
          iS(e, c, l);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function iS(e, t, a) {
      var i = e.tag, l = i === ee || i === ae;
      if (l) {
        var c = e.stateNode;
        t ? Cx(a, c, t) : _x(a, c);
      } else if (i !== te) {
        var p = e.child;
        if (p !== null) {
          iS(p, t, a);
          for (var m = p.sibling; m !== null; )
            iS(m, t, a), m = m.sibling;
        }
      }
    }
    function oS(e, t, a) {
      var i = e.tag, l = i === ee || i === ae;
      if (l) {
        var c = e.stateNode;
        t ? Sx(a, c, t) : Ex(a, c);
      } else if (i !== te) {
        var p = e.child;
        if (p !== null) {
          oS(p, t, a);
          for (var m = p.sibling; m !== null; )
            oS(m, t, a), m = m.sibling;
        }
      }
    }
    var Vr = null, To = !1;
    function rA(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case ee: {
                Vr = i.stateNode, To = !1;
                break e;
              }
              case q: {
                Vr = i.stateNode.containerInfo, To = !0;
                break e;
              }
              case te: {
                Vr = i.stateNode.containerInfo, To = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (Vr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        lb(e, t, a), Vr = null, To = !1;
      }
      eA(a);
    }
    function ss(e, t, a) {
      for (var i = a.child; i !== null; )
        lb(e, t, i), i = i.sibling;
    }
    function lb(e, t, a) {
      switch (jh(a), a.tag) {
        case ee:
          Hr || Td(a, t);
        case ae: {
          {
            var i = Vr, l = To;
            Vr = null, ss(e, t, a), Vr = i, To = l, Vr !== null && (To ? bx(Vr, a.stateNode) : Tx(Vr, a.stateNode));
          }
          return;
        }
        case yt: {
          Vr !== null && (To ? wx(Vr, a.stateNode) : yE(Vr, a.stateNode));
          return;
        }
        case te: {
          {
            var c = Vr, p = To;
            Vr = a.stateNode.containerInfo, To = !0, ss(e, t, a), Vr = c, To = p;
          }
          return;
        }
        case W:
        case ve:
        case Pe:
        case Ae: {
          if (!Hr) {
            var m = a.updateQueue;
            if (m !== null) {
              var y = m.lastEffect;
              if (y !== null) {
                var C = y.next, b = C;
                do {
                  var M = b, N = M.destroy, V = M.tag;
                  N !== void 0 && ((V & al) !== Xa ? Ay(a, t, N) : (V & mr) !== Xa && (xu(a), a.mode & jt ? (ul(), Ay(a, t, N), ll(a)) : Ay(a, t, N), Zs())), b = b.next;
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
            var I = a.stateNode;
            typeof I.componentWillUnmount == "function" && aS(a, t, I);
          }
          ss(e, t, a);
          return;
        }
        case St: {
          ss(e, t, a);
          return;
        }
        case Ye: {
          if (
            // TODO: Remove this dead flag
            a.mode & He
          ) {
            var K = Hr;
            Hr = K || a.memoizedState !== null, ss(e, t, a), Hr = K;
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
    function aA(e) {
      e.memoizedState;
    }
    function iA(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var l = i.memoizedState;
          if (l !== null) {
            var c = l.dehydrated;
            c !== null && Bx(c);
          }
        }
      }
    }
    function ub(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new VO()), t.forEach(function(i) {
          var l = tk.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Ta)
              if (Sd !== null && Cd !== null)
                Pv(Cd, Sd);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(l, l);
          }
        });
      }
    }
    function oA(e, t, a) {
      Sd = a, Cd = e, Cn(t), sb(t, e), Cn(t), Sd = null, Cd = null;
    }
    function bo(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var l = 0; l < i.length; l++) {
          var c = i[l];
          try {
            rA(e, t, c);
          } catch (y) {
            vn(c, t, y);
          }
        }
      var p = As();
      if (t.subtreeFlags & ta)
        for (var m = t.child; m !== null; )
          Cn(m), sb(m, e), m = m.sibling;
      Cn(p);
    }
    function sb(e, t, a) {
      var i = e.alternate, l = e.flags;
      switch (e.tag) {
        case W:
        case ve:
        case Pe:
        case Ae: {
          if (bo(t, e), sl(e), l & $e) {
            try {
              Co(al | hr, e, e.return), us(al | hr, e);
            } catch (at) {
              vn(e, e.return, at);
            }
            if (e.mode & jt) {
              try {
                ul(), Co(mr | hr, e, e.return);
              } catch (at) {
                vn(e, e.return, at);
              }
              ll(e);
            } else
              try {
                Co(mr | hr, e, e.return);
              } catch (at) {
                vn(e, e.return, at);
              }
          }
          return;
        }
        case z: {
          bo(t, e), sl(e), l & _a && i !== null && Td(i, i.return);
          return;
        }
        case ee: {
          bo(t, e), sl(e), l & _a && i !== null && Td(i, i.return);
          {
            if (e.flags & Pa) {
              var c = e.stateNode;
              try {
                lC(c);
              } catch (at) {
                vn(e, e.return, at);
              }
            }
            if (l & $e) {
              var p = e.stateNode;
              if (p != null) {
                var m = e.memoizedProps, y = i !== null ? i.memoizedProps : m, C = e.type, b = e.updateQueue;
                if (e.updateQueue = null, b !== null)
                  try {
                    yx(p, b, C, y, m, e);
                  } catch (at) {
                    vn(e, e.return, at);
                  }
              }
            }
          }
          return;
        }
        case ae: {
          if (bo(t, e), sl(e), l & $e) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var M = e.stateNode, N = e.memoizedProps, V = i !== null ? i.memoizedProps : N;
            try {
              gx(M, V, N);
            } catch (at) {
              vn(e, e.return, at);
            }
          }
          return;
        }
        case q: {
          if (bo(t, e), sl(e), l & $e && i !== null) {
            var I = i.memoizedState;
            if (I.isDehydrated)
              try {
                Ix(t.containerInfo);
              } catch (at) {
                vn(e, e.return, at);
              }
          }
          return;
        }
        case te: {
          bo(t, e), sl(e);
          return;
        }
        case ce: {
          bo(t, e), sl(e);
          var K = e.child;
          if (K.flags & Fo) {
            var xe = K.stateNode, Xe = K.memoizedState, Ve = Xe !== null;
            if (xe.isHidden = Ve, Ve) {
              var Lt = K.alternate !== null && K.alternate.memoizedState !== null;
              Lt || FA();
            }
          }
          if (l & $e) {
            try {
              aA(e);
            } catch (at) {
              vn(e, e.return, at);
            }
            ub(e);
          }
          return;
        }
        case Ye: {
          var Ot = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & He
          ) {
            var j = Hr;
            Hr = j || Ot, bo(t, e), Hr = j;
          } else
            bo(t, e);
          if (sl(e), l & Fo) {
            var G = e.stateNode, P = e.memoizedState, se = P !== null, De = e;
            if (G.isHidden = se, se && !Ot && (De.mode & He) !== qe) {
              Le = De;
              for (var Se = De.child; Se !== null; )
                Le = Se, uA(Se), Se = Se.sibling;
            }
            JO(De, se);
          }
          return;
        }
        case lt: {
          bo(t, e), sl(e), l & $e && ub(e);
          return;
        }
        case St:
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
          nA(e);
        } catch (a) {
          vn(e, e.return, a);
        }
        e.flags &= ~nn;
      }
      t & Ri && (e.flags &= ~Ri);
    }
    function lA(e, t, a) {
      Sd = a, Cd = t, Le = e, cb(e, t, a), Sd = null, Cd = null;
    }
    function cb(e, t, a) {
      for (var i = (e.mode & He) !== qe; Le !== null; ) {
        var l = Le, c = l.child;
        if (l.tag === Ye && i) {
          var p = l.memoizedState !== null, m = p || Oy;
          if (m) {
            lS(e, t, a);
            continue;
          } else {
            var y = l.alternate, C = y !== null && y.memoizedState !== null, b = C || Hr, M = Oy, N = Hr;
            Oy = m, Hr = b, Hr && !N && (Le = l, sA(l));
            for (var V = c; V !== null; )
              Le = V, cb(
                V,
                // New root; bubble back up to here and stop.
                t,
                a
              ), V = V.sibling;
            Le = l, Oy = M, Hr = N, lS(e, t, a);
            continue;
          }
        }
        (l.subtreeFlags & di) !== Qe && c !== null ? (c.return = l, Le = c) : lS(e, t, a);
      }
    }
    function lS(e, t, a) {
      for (; Le !== null; ) {
        var i = Le;
        if ((i.flags & di) !== Qe) {
          var l = i.alternate;
          Cn(i);
          try {
            XO(t, l, i, a);
          } catch (p) {
            vn(i, i.return, p);
          }
          cn();
        }
        if (i === e) {
          Le = null;
          return;
        }
        var c = i.sibling;
        if (c !== null) {
          c.return = i.return, Le = c;
          return;
        }
        Le = i.return;
      }
    }
    function uA(e) {
      for (; Le !== null; ) {
        var t = Le, a = t.child;
        switch (t.tag) {
          case W:
          case ve:
          case Pe:
          case Ae: {
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
          case ee: {
            Td(t, t.return);
            break;
          }
          case Ye: {
            var l = t.memoizedState !== null;
            if (l) {
              fb(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Le = a) : fb(e);
      }
    }
    function fb(e) {
      for (; Le !== null; ) {
        var t = Le;
        if (t === e) {
          Le = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Le = a;
          return;
        }
        Le = t.return;
      }
    }
    function sA(e) {
      for (; Le !== null; ) {
        var t = Le, a = t.child;
        if (t.tag === Ye) {
          var i = t.memoizedState !== null;
          if (i) {
            db(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Le = a) : db(e);
      }
    }
    function db(e) {
      for (; Le !== null; ) {
        var t = Le;
        Cn(t);
        try {
          ZO(t);
        } catch (i) {
          vn(t, t.return, i);
        }
        if (cn(), t === e) {
          Le = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Le = a;
          return;
        }
        Le = t.return;
      }
    }
    function cA(e, t, a, i) {
      Le = t, fA(t, e, a, i);
    }
    function fA(e, t, a, i) {
      for (; Le !== null; ) {
        var l = Le, c = l.child;
        (l.subtreeFlags & na) !== Qe && c !== null ? (c.return = l, Le = c) : dA(e, t, a, i);
      }
    }
    function dA(e, t, a, i) {
      for (; Le !== null; ) {
        var l = Le;
        if ((l.flags & Jr) !== Qe) {
          Cn(l);
          try {
            pA(t, l, a, i);
          } catch (p) {
            vn(l, l.return, p);
          }
          cn();
        }
        if (l === e) {
          Le = null;
          return;
        }
        var c = l.sibling;
        if (c !== null) {
          c.return = l.return, Le = c;
          return;
        }
        Le = l.return;
      }
    }
    function pA(e, t, a, i) {
      switch (t.tag) {
        case W:
        case ve:
        case Ae: {
          if (t.mode & jt) {
            P_();
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
    function vA(e) {
      Le = e, hA();
    }
    function hA() {
      for (; Le !== null; ) {
        var e = Le, t = e.child;
        if ((Le.flags & $t) !== Qe) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var l = a[i];
              Le = l, gA(l, e);
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
            Le = e;
          }
        }
        (e.subtreeFlags & na) !== Qe && t !== null ? (t.return = e, Le = t) : mA();
      }
    }
    function mA() {
      for (; Le !== null; ) {
        var e = Le;
        (e.flags & Jr) !== Qe && (Cn(e), yA(e), cn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Le = t;
          return;
        }
        Le = e.return;
      }
    }
    function yA(e) {
      switch (e.tag) {
        case W:
        case ve:
        case Ae: {
          e.mode & jt ? (P_(), Co($r | hr, e, e.return), j_(e)) : Co($r | hr, e, e.return);
          break;
        }
      }
    }
    function gA(e, t) {
      for (; Le !== null; ) {
        var a = Le;
        Cn(a), _A(a, t), cn();
        var i = a.child;
        i !== null ? (i.return = a, Le = i) : EA(e);
      }
    }
    function EA(e) {
      for (; Le !== null; ) {
        var t = Le, a = t.sibling, i = t.return;
        if (ab(t), t === e) {
          Le = null;
          return;
        }
        if (a !== null) {
          a.return = i, Le = a;
          return;
        }
        Le = i;
      }
    }
    function _A(e, t) {
      switch (e.tag) {
        case W:
        case ve:
        case Ae: {
          e.mode & jt ? (P_(), Co($r, e, t), j_(e)) : Co($r, e, t);
          break;
        }
      }
    }
    function SA(e) {
      switch (e.tag) {
        case W:
        case ve:
        case Ae: {
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
    function CA(e) {
      switch (e.tag) {
        case W:
        case ve:
        case Ae: {
          try {
            us($r | hr, e);
          } catch (t) {
            vn(e, e.return, t);
          }
          break;
        }
      }
    }
    function TA(e) {
      switch (e.tag) {
        case W:
        case ve:
        case Ae: {
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
    function bA(e) {
      switch (e.tag) {
        case W:
        case ve:
        case Ae:
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
    var wA = [];
    function RA() {
      wA.forEach(function(e) {
        return e();
      });
    }
    var xA = E.ReactCurrentActQueue;
    function DA(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function pb() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && xA.current !== null && _("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var OA = Math.ceil, uS = E.ReactCurrentDispatcher, sS = E.ReactCurrentOwner, Ir = E.ReactCurrentBatchConfig, wo = E.ReactCurrentActQueue, Er = (
      /*             */
      0
    ), vb = (
      /*               */
      1
    ), Br = (
      /*                */
      2
    ), Fi = (
      /*                */
      4
    ), eu = 0, Dv = 1, zc = 2, ky = 3, Ov = 4, hb = 5, cS = 6, Nt = Er, Ra = null, Vn = null, _r = Q, cl = Q, fS = Ju(Q), Sr = eu, Av = null, Ny = Q, kv = Q, Ly = Q, Nv = null, Za = null, dS = 0, mb = 500, yb = 1 / 0, AA = 500, tu = null;
    function Lv() {
      yb = Kn() + AA;
    }
    function gb() {
      return yb;
    }
    var My = !1, pS = null, bd = null, Uc = !1, cs = null, Mv = Q, vS = [], hS = null, kA = 50, zv = 0, mS = null, yS = !1, zy = !1, NA = 50, wd = 0, Uy = null, Uv = sn, jy = Q, Eb = !1;
    function Py() {
      return Ra;
    }
    function xa() {
      return (Nt & (Br | Fi)) !== Er ? Kn() : (Uv !== sn || (Uv = Kn()), Uv);
    }
    function fs(e) {
      var t = e.mode;
      if ((t & He) === qe)
        return Ze;
      if ((Nt & Br) !== Er && _r !== Q)
        return Mu(_r);
      var a = DD() !== xD;
      if (a) {
        if (Ir.transition !== null) {
          var i = Ir.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return jy === Pn && (jy = qh()), jy;
      }
      var l = Ba();
      if (l !== Pn)
        return l;
      var c = dx();
      return c;
    }
    function LA(e) {
      var t = e.mode;
      return (t & He) === qe ? Ze : oa();
    }
    function Cr(e, t, a, i) {
      rk(), Eb && _("useInsertionEffect must not schedule updates."), yS && (zy = !0), Fl(e, a, i), (Nt & Br) !== Q && e === Ra ? ok(t) : (Ta && Nf(e, t, a), lk(t), e === Ra && ((Nt & Br) === Er && (kv = mt(kv, a)), Sr === Ov && ds(e, _r)), Ja(e, i), a === Ze && Nt === Er && (t.mode & He) === qe && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !wo.isBatchingLegacy && (Lv(), gC()));
    }
    function MA(e, t, a) {
      var i = e.current;
      i.lanes = t, Fl(e, t, a), Ja(e, a);
    }
    function zA(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Nt & Br) !== Er
      );
    }
    function Ja(e, t) {
      var a = e.callbackNode;
      Ug(e, t);
      var i = oc(e, e === Ra ? _r : Q);
      if (i === Q) {
        a !== null && zb(a), e.callbackNode = null, e.callbackPriority = Pn;
        return;
      }
      var l = $n(i), c = e.callbackPriority;
      if (c === l && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(wo.current !== null && a !== bS)) {
        a == null && c !== Ze && _("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && zb(a);
      var p;
      if (l === Ze)
        e.tag === es ? (wo.isBatchingLegacy !== null && (wo.didScheduleLegacyUpdate = !0), cD(Cb.bind(null, e))) : yC(Cb.bind(null, e)), wo.current !== null ? wo.current.push(ts) : vx(function() {
          (Nt & (Br | Fi)) === Er && ts();
        }), p = null;
      else {
        var m;
        switch (vr(i)) {
          case Fn:
            m = ra;
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
        p = wS(m, _b.bind(null, e));
      }
      e.callbackPriority = l, e.callbackNode = p;
    }
    function _b(e, t) {
      if (rO(), Uv = sn, jy = Q, (Nt & (Br | Fi)) !== Er)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = ru();
      if (i && e.callbackNode !== a)
        return null;
      var l = oc(e, e === Ra ? _r : Q);
      if (l === Q)
        return null;
      var c = !uc(e, l) && !Qh(e, l) && !t, p = c ? YA(e, l) : Fy(e, l);
      if (p !== eu) {
        if (p === zc) {
          var m = qo(e);
          m !== Q && (l = m, p = gS(e, m));
        }
        if (p === Dv) {
          var y = Av;
          throw jc(e, Q), ds(e, l), Ja(e, Kn()), y;
        }
        if (p === cS)
          ds(e, l);
        else {
          var C = !uc(e, l), b = e.current.alternate;
          if (C && !jA(b)) {
            if (p = Fy(e, l), p === zc) {
              var M = qo(e);
              M !== Q && (l = M, p = gS(e, M));
            }
            if (p === Dv) {
              var N = Av;
              throw jc(e, Q), ds(e, l), Ja(e, Kn()), N;
            }
          }
          e.finishedWork = b, e.finishedLanes = l, UA(e, p, l);
        }
      }
      return Ja(e, Kn()), e.callbackNode === a ? _b.bind(null, e) : null;
    }
    function gS(e, t) {
      var a = Nv;
      if (Lf(e)) {
        var i = jc(e, t);
        i.flags |= zr, rD(e.containerInfo);
      }
      var l = Fy(e, t);
      if (l !== zc) {
        var c = Za;
        Za = a, c !== null && Sb(c);
      }
      return l;
    }
    function Sb(e) {
      Za === null ? Za = e : Za.push.apply(Za, e);
    }
    function UA(e, t, a) {
      switch (t) {
        case eu:
        case Dv:
          throw new Error("Root did not complete. This is a bug in React.");
        case zc: {
          Pc(e, Za, tu);
          break;
        }
        case ky: {
          if (ds(e, a), Wh(a) && // do not delay if we're inside an act() scope
          !Ub()) {
            var i = dS + mb - Kn();
            if (i > 10) {
              var l = oc(e, Q);
              if (l !== Q)
                break;
              var c = e.suspendedLanes;
              if (!$l(c, a)) {
                xa(), Af(e, c);
                break;
              }
              e.timeoutHandle = hE(Pc.bind(null, e, Za, tu), i);
              break;
            }
          }
          Pc(e, Za, tu);
          break;
        }
        case Ov: {
          if (ds(e, a), Gh(a))
            break;
          if (!Ub()) {
            var p = xf(e, a), m = p, y = Kn() - m, C = nk(y) - y;
            if (C > 10) {
              e.timeoutHandle = hE(Pc.bind(null, e, Za, tu), C);
              break;
            }
          }
          Pc(e, Za, tu);
          break;
        }
        case hb: {
          Pc(e, Za, tu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function jA(e) {
      for (var t = e; ; ) {
        if (t.flags & Dl) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var l = 0; l < i.length; l++) {
                var c = i[l], p = c.getSnapshot, m = c.value;
                try {
                  if (!Ne(p(), m))
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
      t = sc(t, Ly), t = sc(t, kv), Zh(e, t);
    }
    function Cb(e) {
      if (aO(), (Nt & (Br | Fi)) !== Er)
        throw new Error("Should not already be working.");
      ru();
      var t = oc(e, Q);
      if (!la(t, Ze))
        return Ja(e, Kn()), null;
      var a = Fy(e, t);
      if (e.tag !== es && a === zc) {
        var i = qo(e);
        i !== Q && (t = i, a = gS(e, i));
      }
      if (a === Dv) {
        var l = Av;
        throw jc(e, Q), ds(e, t), Ja(e, Kn()), l;
      }
      if (a === cS)
        throw new Error("Root did not complete. This is a bug in React.");
      var c = e.current.alternate;
      return e.finishedWork = c, e.finishedLanes = t, Pc(e, Za, tu), Ja(e, Kn()), null;
    }
    function PA(e, t) {
      t !== Q && (Dp(e, mt(t, Ze)), Ja(e, Kn()), (Nt & (Br | Fi)) === Er && (Lv(), ts()));
    }
    function ES(e, t) {
      var a = Nt;
      Nt |= vb;
      try {
        return e(t);
      } finally {
        Nt = a, Nt === Er && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !wo.isBatchingLegacy && (Lv(), gC());
      }
    }
    function $A(e, t, a, i, l) {
      var c = Ba(), p = Ir.transition;
      try {
        return Ir.transition = null, kn(Fn), e(t, a, i, l);
      } finally {
        kn(c), Ir.transition = p, Nt === Er && Lv();
      }
    }
    function nu(e) {
      cs !== null && cs.tag === es && (Nt & (Br | Fi)) === Er && ru();
      var t = Nt;
      Nt |= vb;
      var a = Ir.transition, i = Ba();
      try {
        return Ir.transition = null, kn(Fn), e ? e() : void 0;
      } finally {
        kn(i), Ir.transition = a, Nt = t, (Nt & (Br | Fi)) === Er && ts();
      }
    }
    function Tb() {
      return (Nt & (Br | Fi)) !== Er;
    }
    function $y(e, t) {
      ca(fS, cl, e), cl = mt(cl, t);
    }
    function _S(e) {
      cl = fS.current, sa(fS, e);
    }
    function jc(e, t) {
      e.finishedWork = null, e.finishedLanes = Q;
      var a = e.timeoutHandle;
      if (a !== mE && (e.timeoutHandle = mE, px(a)), Vn !== null)
        for (var i = Vn.return; i !== null; ) {
          var l = i.alternate;
          ZT(l, i), i = i.return;
        }
      Ra = e;
      var c = $c(e.current, null);
      return Vn = c, _r = cl = t, Sr = eu, Av = null, Ny = Q, kv = Q, Ly = Q, Nv = null, Za = null, ND(), yo.discardPendingWarnings(), c;
    }
    function bb(e, t) {
      do {
        var a = Vn;
        try {
          if (Km(), eT(), cn(), sS.current = null, a === null || a.return === null) {
            Sr = Dv, Av = t, Vn = null;
            return;
          }
          if (Et && a.mode & jt && wy(a, !0), ft)
            if (kl(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Ih(a, i, _r);
            } else
              Vh(a, t, _r);
          sO(e, a.return, a, t, _r), Db(a);
        } catch (l) {
          t = l, Vn === a && a !== null ? (a = a.return, Vn = a) : a = Vn;
          continue;
        }
        return;
      } while (!0);
    }
    function wb() {
      var e = uS.current;
      return uS.current = _y, e === null ? _y : e;
    }
    function Rb(e) {
      uS.current = e;
    }
    function FA() {
      dS = Kn();
    }
    function jv(e) {
      Ny = mt(e, Ny);
    }
    function HA() {
      Sr === eu && (Sr = ky);
    }
    function SS() {
      (Sr === eu || Sr === ky || Sr === zc) && (Sr = Ov), Ra !== null && (lc(Ny) || lc(kv)) && ds(Ra, _r);
    }
    function VA(e) {
      Sr !== Ov && (Sr = zc), Nv === null ? Nv = [e] : Nv.push(e);
    }
    function IA() {
      return Sr === eu;
    }
    function Fy(e, t) {
      var a = Nt;
      Nt |= Br;
      var i = wb();
      if (Ra !== e || _r !== t) {
        if (Ta) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (Pv(e, _r), l.clear()), Op(e, t);
        }
        tu = fc(), jc(e, t);
      }
      Ou(t);
      do
        try {
          BA();
          break;
        } catch (c) {
          bb(e, c);
        }
      while (!0);
      if (Km(), Nt = a, Rb(i), Vn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Ko(), Ra = null, _r = Q, Sr;
    }
    function BA() {
      for (; Vn !== null; )
        xb(Vn);
    }
    function YA(e, t) {
      var a = Nt;
      Nt |= Br;
      var i = wb();
      if (Ra !== e || _r !== t) {
        if (Ta) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (Pv(e, _r), l.clear()), Op(e, t);
        }
        tu = fc(), Lv(), jc(e, t);
      }
      Ou(t);
      do
        try {
          WA();
          break;
        } catch (c) {
          bb(e, c);
        }
      while (!0);
      return Km(), Rb(i), Nt = a, Vn !== null ? (ec(), eu) : (Ko(), Ra = null, _r = Q, Sr);
    }
    function WA() {
      for (; Vn !== null && !zh(); )
        xb(Vn);
    }
    function xb(e) {
      var t = e.alternate;
      Cn(e);
      var a;
      (e.mode & jt) !== qe ? (U_(e), a = CS(t, e, cl), wy(e, !0)) : a = CS(t, e, cl), cn(), e.memoizedProps = e.pendingProps, a === null ? Db(e) : Vn = a, sS.current = null;
    }
    function Db(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & Ho) === Qe) {
          Cn(t);
          var l = void 0;
          if ((t.mode & jt) === qe ? l = XT(a, t, cl) : (U_(t), l = XT(a, t, cl), wy(t, !1)), cn(), l !== null) {
            Vn = l;
            return;
          }
        } else {
          var c = HO(a, t);
          if (c !== null) {
            c.flags &= lo, Vn = c;
            return;
          }
          if ((t.mode & jt) !== qe) {
            wy(t, !1);
            for (var p = t.actualDuration, m = t.child; m !== null; )
              p += m.actualDuration, m = m.sibling;
            t.actualDuration = p;
          }
          if (i !== null)
            i.flags |= Ho, i.subtreeFlags = Qe, i.deletions = null;
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
      Sr === eu && (Sr = hb);
    }
    function Pc(e, t, a) {
      var i = Ba(), l = Ir.transition;
      try {
        Ir.transition = null, kn(Fn), KA(e, t, a, i);
      } finally {
        Ir.transition = l, kn(i);
      }
      return null;
    }
    function KA(e, t, a, i) {
      do
        ru();
      while (cs !== null);
      if (ak(), (Nt & (Br | Fi)) !== Er)
        throw new Error("Should not already be working.");
      var l = e.finishedWork, c = e.finishedLanes;
      if (Ph(c), l === null)
        return Xs(), null;
      if (c === Q && _("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = Q, l === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Pn;
      var p = mt(l.lanes, l.childLanes);
      kf(e, p), e === Ra && (Ra = null, Vn = null, _r = Q), ((l.subtreeFlags & na) !== Qe || (l.flags & na) !== Qe) && (Uc || (Uc = !0, hS = a, wS(Di, function() {
        return ru(), null;
      })));
      var m = (l.subtreeFlags & (ea | ta | di | na)) !== Qe, y = (l.flags & (ea | ta | di | na)) !== Qe;
      if (m || y) {
        var C = Ir.transition;
        Ir.transition = null;
        var b = Ba();
        kn(Fn);
        var M = Nt;
        Nt |= Fi, sS.current = null, WO(e, l), wT(), oA(e, l, c), ox(e.containerInfo), e.current = l, Du(c), lA(l, e, c), Bh(), Tu(), Nt = M, kn(b), Ir.transition = C;
      } else
        e.current = l, wT();
      var N = Uc;
      if (Uc ? (Uc = !1, cs = e, Mv = c) : (wd = 0, Uy = null), p = e.pendingLanes, p === Q && (bd = null), N || Nb(e.current, !1), Yo(l.stateNode, i), Ta && e.memoizedUpdaters.clear(), RA(), Ja(e, Kn()), t !== null)
        for (var V = e.onRecoverableError, I = 0; I < t.length; I++) {
          var K = t[I], xe = K.stack, Xe = K.digest;
          V(K.value, {
            componentStack: xe,
            digest: Xe
          });
        }
      if (My) {
        My = !1;
        var Ve = pS;
        throw pS = null, Ve;
      }
      return la(Mv, Ze) && e.tag !== es && ru(), p = e.pendingLanes, la(p, Ze) ? (nO(), e === mS ? zv++ : (zv = 0, mS = e)) : zv = 0, ts(), Xs(), null;
    }
    function ru() {
      if (cs !== null) {
        var e = vr(Mv), t = Fg(ki, e), a = Ir.transition, i = Ba();
        try {
          return Ir.transition = null, kn(t), QA();
        } finally {
          kn(i), Ir.transition = a;
        }
      }
      return !1;
    }
    function GA(e) {
      vS.push(e), Uc || (Uc = !0, wS(Di, function() {
        return ru(), null;
      }));
    }
    function QA() {
      if (cs === null)
        return !1;
      var e = hS;
      hS = null;
      var t = cs, a = Mv;
      if (cs = null, Mv = Q, (Nt & (Br | Fi)) !== Er)
        throw new Error("Cannot flush passive effects while already rendering.");
      yS = !0, zy = !1, Js(a);
      var i = Nt;
      Nt |= Fi, vA(t.current), cA(t, t.current, a, e);
      {
        var l = vS;
        vS = [];
        for (var c = 0; c < l.length; c++) {
          var p = l[c];
          qO(t, p);
        }
      }
      Oi(), Nb(t.current, !0), Nt = i, ts(), zy ? t === Uy ? wd++ : (wd = 0, Uy = t) : wd = 0, yS = !1, zy = !1, Ep(t);
      {
        var m = t.current.stateNode;
        m.effectDuration = 0, m.passiveEffectDuration = 0;
      }
      return !0;
    }
    function Ob(e) {
      return bd !== null && bd.has(e);
    }
    function qA(e) {
      bd === null ? bd = /* @__PURE__ */ new Set([e]) : bd.add(e);
    }
    function XA(e) {
      My || (My = !0, pS = e);
    }
    var ZA = XA;
    function Ab(e, t, a) {
      var i = Lc(a, t), l = xT(e, i, Ze), c = rs(e, l, Ze), p = xa();
      c !== null && (Fl(c, Ze, p), Ja(c, p));
    }
    function vn(e, t, a) {
      if (IO(a), $v(!1), e.tag === q) {
        Ab(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === q) {
          Ab(i, e, a);
          return;
        } else if (i.tag === z) {
          var l = i.type, c = i.stateNode;
          if (typeof l.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && !Ob(c)) {
            var p = Lc(a, e), m = V_(i, p, Ze), y = rs(i, m, Ze), C = xa();
            y !== null && (Fl(y, Ze, C), Ja(y, C));
            return;
          }
        }
        i = i.return;
      }
      _(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function JA(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var l = xa();
      Af(e, a), uk(e), Ra === e && $l(_r, a) && (Sr === Ov || Sr === ky && Wh(_r) && Kn() - dS < mb ? jc(e, Q) : Ly = mt(Ly, a)), Ja(e, l);
    }
    function kb(e, t) {
      t === Pn && (t = LA(e));
      var a = xa(), i = qa(e, t);
      i !== null && (Fl(i, t, a), Ja(i, a));
    }
    function ek(e) {
      var t = e.memoizedState, a = Pn;
      t !== null && (a = t.retryLane), kb(e, a);
    }
    function tk(e, t) {
      var a = Pn, i;
      switch (e.tag) {
        case ce:
          i = e.stateNode;
          var l = e.memoizedState;
          l !== null && (a = l.retryLane);
          break;
        case lt:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), kb(e, a);
    }
    function nk(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : OA(e / 1960) * 1960;
    }
    function rk() {
      if (zv > kA)
        throw zv = 0, mS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      wd > NA && (wd = 0, Uy = null, _("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function ak() {
      yo.flushLegacyContextWarning(), yo.flushPendingUnsafeLifecycleWarnings();
    }
    function Nb(e, t) {
      Cn(e), Hy(e, Fa, TA), t && Hy(e, Ol, bA), Hy(e, Fa, SA), t && Hy(e, Ol, CA), cn();
    }
    function Hy(e, t, a) {
      for (var i = e, l = null; i !== null; ) {
        var c = i.subtreeFlags & t;
        i !== l && i.child !== null && c !== Qe ? i = i.child : ((i.flags & t) !== Qe && a(i), i.sibling !== null ? i = i.sibling : i = l = i.return);
      }
    }
    var Vy = null;
    function Lb(e) {
      {
        if ((Nt & Br) !== Er || !(e.mode & He))
          return;
        var t = e.tag;
        if (t !== le && t !== q && t !== z && t !== W && t !== ve && t !== Pe && t !== Ae)
          return;
        var a = st(e) || "ReactComponent";
        if (Vy !== null) {
          if (Vy.has(a))
            return;
          Vy.add(a);
        } else
          Vy = /* @__PURE__ */ new Set([a]);
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
      var ik = null;
      CS = function(e, t, a) {
        var i = Hb(ik, t);
        try {
          return WT(e, t, a);
        } catch (c) {
          if (gD() || c !== null && typeof c == "object" && typeof c.then == "function")
            throw c;
          if (Km(), eT(), ZT(e, t), Hb(t, i), t.mode & jt && U_(t), ci(null, WT, null, e, t, a), Lg()) {
            var l = oo();
            typeof l == "object" && l !== null && l._suppressLogging && typeof c == "object" && c !== null && !c._suppressLogging && (c._suppressLogging = !0);
          }
          throw c;
        }
      };
    }
    var Mb = !1, TS;
    TS = /* @__PURE__ */ new Set();
    function ok(e) {
      if (qr && !JD())
        switch (e.tag) {
          case W:
          case ve:
          case Ae: {
            var t = Vn && st(Vn) || "Unknown", a = t;
            if (!TS.has(a)) {
              TS.add(a);
              var i = st(e) || "Unknown";
              _("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case z: {
            Mb || (_("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), Mb = !0);
            break;
          }
        }
    }
    function Pv(e, t) {
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
    function zb(e) {
      if (e !== bS)
        return cf(e);
    }
    function Ub() {
      return wo.current !== null;
    }
    function lk(e) {
      {
        if (e.mode & He) {
          if (!pb())
            return;
        } else if (!DA() || Nt !== Er || e.tag !== W && e.tag !== ve && e.tag !== Ae)
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

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, st(e));
          } finally {
            t ? Cn(e) : cn();
          }
        }
      }
    }
    function uk(e) {
      e.tag !== es && pb() && wo.current === null && _(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function $v(e) {
      Eb = e;
    }
    var Hi = null, Rd = null, sk = function(e) {
      Hi = e;
    };
    function xd(e) {
      {
        if (Hi === null)
          return e;
        var t = Hi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function RS(e) {
      return xd(e);
    }
    function xS(e) {
      {
        if (Hi === null)
          return e;
        var t = Hi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = xd(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: Ee,
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
    function jb(e, t) {
      {
        if (Hi === null)
          return !1;
        var a = e.elementType, i = t.type, l = !1, c = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case z: {
            typeof i == "function" && (l = !0);
            break;
          }
          case W: {
            (typeof i == "function" || c === Ke) && (l = !0);
            break;
          }
          case ve: {
            (c === Ee || c === Ke) && (l = !0);
            break;
          }
          case Pe:
          case Ae: {
            (c === _t || c === Ke) && (l = !0);
            break;
          }
          default:
            return !1;
        }
        if (l) {
          var p = Hi(a);
          if (p !== void 0 && p === Hi(i))
            return !0;
        }
        return !1;
      }
    }
    function Pb(e) {
      {
        if (Hi === null || typeof WeakSet != "function")
          return;
        Rd === null && (Rd = /* @__PURE__ */ new WeakSet()), Rd.add(e);
      }
    }
    var ck = function(e, t) {
      {
        if (Hi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        ru(), nu(function() {
          DS(e.current, i, a);
        });
      }
    }, fk = function(e, t) {
      {
        if (e.context !== pi)
          return;
        ru(), nu(function() {
          Fv(t, e, null, null);
        });
      }
    };
    function DS(e, t, a) {
      {
        var i = e.alternate, l = e.child, c = e.sibling, p = e.tag, m = e.type, y = null;
        switch (p) {
          case W:
          case Ae:
          case z:
            y = m;
            break;
          case ve:
            y = m.render;
            break;
        }
        if (Hi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var C = !1, b = !1;
        if (y !== null) {
          var M = Hi(y);
          M !== void 0 && (a.has(M) ? b = !0 : t.has(M) && (p === z ? b = !0 : C = !0));
        }
        if (Rd !== null && (Rd.has(e) || i !== null && Rd.has(i)) && (b = !0), b && (e._debugNeedsRemount = !0), b || C) {
          var N = qa(e, Ze);
          N !== null && Cr(N, e, Ze, sn);
        }
        l !== null && !b && DS(l, t, a), c !== null && DS(c, t, a);
      }
    }
    var dk = function(e, t) {
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
          case W:
          case Ae:
          case z:
            m = p;
            break;
          case ve:
            m = p.render;
            break;
        }
        var y = !1;
        m !== null && t.has(m) && (y = !0), y ? pk(e, a) : i !== null && OS(i, t, a), l !== null && OS(l, t, a);
      }
    }
    function pk(e, t) {
      {
        var a = vk(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case ee:
              t.add(i.stateNode);
              return;
            case te:
              t.add(i.stateNode.containerInfo);
              return;
            case q:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function vk(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === ee)
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
        var $b = Object.preventExtensions({});
      } catch {
        AS = !0;
      }
    }
    function hk(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Qe, this.subtreeFlags = Qe, this.deletions = null, this.lanes = Q, this.childLanes = Q, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !AS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var vi = function(e, t, a, i) {
      return new hk(e, t, a, i);
    };
    function kS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function mk(e) {
      return typeof e == "function" && !kS(e) && e.defaultProps === void 0;
    }
    function yk(e) {
      if (typeof e == "function")
        return kS(e) ? z : W;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Ee)
          return ve;
        if (t === _t)
          return Pe;
      }
      return le;
    }
    function $c(e, t) {
      var a = e.alternate;
      a === null ? (a = vi(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Qe, a.subtreeFlags = Qe, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & pr, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case le:
        case W:
        case Ae:
          a.type = xd(e.type);
          break;
        case z:
          a.type = RS(e.type);
          break;
        case ve:
          a.type = xS(e.type);
          break;
      }
      return a;
    }
    function gk(e, t) {
      e.flags &= pr | nn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = Q, e.lanes = t, e.child = null, e.subtreeFlags = Qe, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
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
    function Ek(e, t, a) {
      var i;
      return e === $m ? (i = He, t === !0 && (i |= On, i |= Va)) : i = qe, Ta && (i |= jt), vi(q, null, null, i);
    }
    function NS(e, t, a, i, l, c) {
      var p = le, m = e;
      if (typeof e == "function")
        kS(e) ? (p = z, m = RS(m)) : m = xd(m);
      else if (typeof e == "string")
        p = ee;
      else
        e:
          switch (e) {
            case ya:
              return ps(a.children, l, c, t);
            case Ki:
              p = vt, l |= On, (l & He) !== qe && (l |= Va);
              break;
            case x:
              return _k(a, l, c, t);
            case xt:
              return Sk(a, l, c, t);
            case kt:
              return Ck(a, l, c, t);
            case on:
              return Fb(a, l, c, t);
            case Or:
            case Yn:
            case Ei:
            case ln:
            case an:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case re:
                    p = ze;
                    break e;
                  case me:
                    p = ct;
                    break e;
                  case Ee:
                    p = ve, m = xS(m);
                    break e;
                  case _t:
                    p = Pe;
                    break e;
                  case Ke:
                    p = wt, m = null;
                    break e;
                }
              var y = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (y += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var C = i ? st(i) : null;
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
      var l = vi(Te, e, i, t);
      return l.lanes = a, l;
    }
    function _k(e, t, a, i) {
      typeof e.id != "string" && _('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var l = vi(je, e, i, t | jt);
      return l.elementType = x, l.lanes = a, l.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, l;
    }
    function Sk(e, t, a, i) {
      var l = vi(ce, e, i, t);
      return l.elementType = xt, l.lanes = a, l;
    }
    function Ck(e, t, a, i) {
      var l = vi(lt, e, i, t);
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
      var i = vi(ae, e, null, t);
      return i.lanes = a, i;
    }
    function Tk() {
      var e = vi(ee, null, null, qe);
      return e.elementType = "DELETED", e;
    }
    function bk(e) {
      var t = vi(yt, null, null, qe);
      return t.stateNode = e, t;
    }
    function zS(e, t, a) {
      var i = e.children !== null ? e.children : [], l = vi(te, i, e.key, t);
      return l.lanes = a, l.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, l;
    }
    function Hb(e, t) {
      return e === null && (e = vi(le, null, null, qe)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function wk(e, t, a, i, l) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = mE, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Pn, this.eventTimes = cc(Q), this.expirationTimes = cc(sn), this.pendingLanes = Q, this.suspendedLanes = Q, this.pingedLanes = Q, this.expiredLanes = Q, this.mutableReadLanes = Q, this.finishedLanes = Q, this.entangledLanes = Q, this.entanglements = cc(Q), this.identifierPrefix = i, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var c = this.pendingUpdatersLaneMap = [], p = 0; p < jn; p++)
          c.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case $m:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case es:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function Vb(e, t, a, i, l, c, p, m, y, C) {
      var b = new wk(e, t, a, m, y), M = Ek(t, c);
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
    function Rk(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return mn(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Kr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var jS, PS;
    jS = !1, PS = {};
    function Ib(e) {
      if (!e)
        return pi;
      var t = wi(e), a = sD(t);
      if (t.tag === z) {
        var i = t.type;
        if (rl(i))
          return hC(t, i, a);
      }
      return a;
    }
    function xk(e, t) {
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
          var c = st(a) || "Component";
          if (!PS[c]) {
            PS[c] = !0;
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
    function Bb(e, t, a, i, l, c, p, m) {
      var y = !1, C = null;
      return Vb(e, t, y, C, a, i, l, c, p);
    }
    function Yb(e, t, a, i, l, c, p, m, y, C) {
      var b = !0, M = Vb(a, i, b, e, l, c, p, m, y);
      M.context = Ib(null);
      var N = M.current, V = xa(), I = fs(N), K = Zl(V, I);
      return K.callback = t ?? null, rs(N, K, I), MA(M, I, V), M;
    }
    function Fv(e, t, a, i) {
      uo(t, e);
      var l = t.current, c = xa(), p = fs(l);
      Cp(p);
      var m = Ib(a);
      t.context === null ? t.context = m : t.pendingContext = m, qr && Sn !== null && !jS && (jS = !0, _(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, st(Sn) || "Unknown"));
      var y = Zl(c, p);
      y.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && _("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), y.callback = i);
      var C = rs(l, y, p);
      return C !== null && (Cr(C, l, p, c), Zm(C, l, p)), p;
    }
    function Iy(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case ee:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function Dk(e) {
      switch (e.tag) {
        case q: {
          var t = e.stateNode;
          if (Lf(t)) {
            var a = jg(t);
            PA(t, a);
          }
          break;
        }
        case ce: {
          nu(function() {
            var l = qa(e, Ze);
            if (l !== null) {
              var c = xa();
              Cr(l, e, Ze, c);
            }
          });
          var i = Ze;
          $S(e, i);
          break;
        }
      }
    }
    function Wb(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Xh(a.retryLane, t));
    }
    function $S(e, t) {
      Wb(e, t);
      var a = e.alternate;
      a && Wb(a, t);
    }
    function Ok(e) {
      if (e.tag === ce) {
        var t = Pl, a = qa(e, t);
        if (a !== null) {
          var i = xa();
          Cr(a, e, t, i);
        }
        $S(e, t);
      }
    }
    function Ak(e) {
      if (e.tag === ce) {
        var t = fs(e), a = qa(e, t);
        if (a !== null) {
          var i = xa();
          Cr(a, e, t, i);
        }
        $S(e, t);
      }
    }
    function Kb(e) {
      var t = hp(e);
      return t === null ? null : t.stateNode;
    }
    var Gb = function(e) {
      return null;
    };
    function kk(e) {
      return Gb(e);
    }
    var Qb = function(e) {
      return !1;
    };
    function Nk(e) {
      return Qb(e);
    }
    var qb = null, Xb = null, Zb = null, Jb = null, ew = null, tw = null, nw = null, rw = null, aw = null;
    {
      var iw = function(e, t, a) {
        var i = t[a], l = Ut(e) ? e.slice() : Tt({}, e);
        return a + 1 === t.length ? (Ut(l) ? l.splice(i, 1) : delete l[i], l) : (l[i] = iw(e[i], t, a + 1), l);
      }, ow = function(e, t) {
        return iw(e, t, 0);
      }, lw = function(e, t, a, i) {
        var l = t[i], c = Ut(e) ? e.slice() : Tt({}, e);
        if (i + 1 === t.length) {
          var p = a[i];
          c[p] = c[l], Ut(c) ? c.splice(l, 1) : delete c[l];
        } else
          c[l] = lw(
            // $FlowFixMe number or string is fine here
            e[l],
            t,
            a,
            i + 1
          );
        return c;
      }, uw = function(e, t, a) {
        if (t.length !== a.length) {
          A("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              A("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return lw(e, t, a, 0);
      }, sw = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var l = t[a], c = Ut(e) ? e.slice() : Tt({}, e);
        return c[l] = sw(e[l], t, a + 1, i), c;
      }, cw = function(e, t, a) {
        return sw(e, t, 0, a);
      }, FS = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      qb = function(e, t, a, i) {
        var l = FS(e, t);
        if (l !== null) {
          var c = cw(l.memoizedState, a, i);
          l.memoizedState = c, l.baseState = c, e.memoizedProps = Tt({}, e.memoizedProps);
          var p = qa(e, Ze);
          p !== null && Cr(p, e, Ze, sn);
        }
      }, Xb = function(e, t, a) {
        var i = FS(e, t);
        if (i !== null) {
          var l = ow(i.memoizedState, a);
          i.memoizedState = l, i.baseState = l, e.memoizedProps = Tt({}, e.memoizedProps);
          var c = qa(e, Ze);
          c !== null && Cr(c, e, Ze, sn);
        }
      }, Zb = function(e, t, a, i) {
        var l = FS(e, t);
        if (l !== null) {
          var c = uw(l.memoizedState, a, i);
          l.memoizedState = c, l.baseState = c, e.memoizedProps = Tt({}, e.memoizedProps);
          var p = qa(e, Ze);
          p !== null && Cr(p, e, Ze, sn);
        }
      }, Jb = function(e, t, a) {
        e.pendingProps = cw(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = qa(e, Ze);
        i !== null && Cr(i, e, Ze, sn);
      }, ew = function(e, t) {
        e.pendingProps = ow(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = qa(e, Ze);
        a !== null && Cr(a, e, Ze, sn);
      }, tw = function(e, t, a) {
        e.pendingProps = uw(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = qa(e, Ze);
        i !== null && Cr(i, e, Ze, sn);
      }, nw = function(e) {
        var t = qa(e, Ze);
        t !== null && Cr(t, e, Ze, sn);
      }, rw = function(e) {
        Gb = e;
      }, aw = function(e) {
        Qb = e;
      };
    }
    function Lk(e) {
      var t = pp(e);
      return t === null ? null : t.stateNode;
    }
    function Mk(e) {
      return null;
    }
    function zk() {
      return Sn;
    }
    function Uk(e) {
      var t = e.findFiberByHostInstance, a = E.ReactCurrentDispatcher;
      return Uh({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: qb,
        overrideHookStateDeletePath: Xb,
        overrideHookStateRenamePath: Zb,
        overrideProps: Jb,
        overridePropsDeletePath: ew,
        overridePropsRenamePath: tw,
        setErrorHandler: rw,
        setSuspenseHandler: aw,
        scheduleUpdate: nw,
        currentDispatcherRef: a,
        findHostInstanceByFiber: Lk,
        findFiberByHostInstance: t || Mk,
        // React Refresh
        findHostInstancesForRefresh: dk,
        scheduleRefresh: ck,
        scheduleRoot: fk,
        setRefreshHandler: sk,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: zk,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: US
      });
    }
    var fw = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function HS(e) {
      this._internalRoot = e;
    }
    By.prototype.render = HS.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? _("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Yy(arguments[1]) ? _("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && _("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Dn) {
          var i = Kb(t.current);
          i && i.parentNode !== a && _("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Fv(e, t, null, null);
    }, By.prototype.unmount = HS.prototype.unmount = function() {
      typeof arguments[0] == "function" && _("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Tb() && _("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), nu(function() {
          Fv(null, e, null, null);
        }), cC(t);
      }
    };
    function jk(e, t) {
      if (!Yy(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      dw(e);
      var a = !1, i = !1, l = "", c = fw;
      t != null && (t.hydrate ? A("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Wr && _(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onRecoverableError !== void 0 && (c = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var p = Bb(e, $m, null, a, i, l, c);
      Nm(p.current, e);
      var m = e.nodeType === Dn ? e.parentNode : e;
      return Gp(m), new HS(p);
    }
    function By(e) {
      this._internalRoot = e;
    }
    function Pk(e) {
      e && Ig(e);
    }
    By.prototype.unstable_scheduleHydration = Pk;
    function $k(e, t, a) {
      if (!Yy(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      dw(e), t === void 0 && _("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, l = a != null && a.hydratedSources || null, c = !1, p = !1, m = "", y = fw;
      a != null && (a.unstable_strictMode === !0 && (c = !0), a.identifierPrefix !== void 0 && (m = a.identifierPrefix), a.onRecoverableError !== void 0 && (y = a.onRecoverableError));
      var C = Yb(t, null, e, $m, i, c, p, m, y);
      if (Nm(C.current, e), Gp(e), l)
        for (var b = 0; b < l.length; b++) {
          var M = l[b];
          KD(C, M);
        }
      return new By(C);
    }
    function Yy(e) {
      return !!(e && (e.nodeType === Zr || e.nodeType === ga || e.nodeType === qd || !We));
    }
    function Hv(e) {
      return !!(e && (e.nodeType === Zr || e.nodeType === ga || e.nodeType === qd || e.nodeType === Dn && e.nodeValue === " react-mount-point-unstable "));
    }
    function dw(e) {
      e.nodeType === Zr && e.tagName && e.tagName.toUpperCase() === "BODY" && _("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), iv(e) && (e._reactRootContainer ? _("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : _("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var Fk = E.ReactCurrentOwner, pw;
    pw = function(e) {
      if (e._reactRootContainer && e.nodeType !== Dn) {
        var t = Kb(e._reactRootContainer.current);
        t && t.parentNode !== e && _("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = VS(e), l = !!(i && Zu(i));
      l && !a && _("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Zr && e.tagName && e.tagName.toUpperCase() === "BODY" && _("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function VS(e) {
      return e ? e.nodeType === ga ? e.documentElement : e.firstChild : null;
    }
    function vw() {
    }
    function Hk(e, t, a, i, l) {
      if (l) {
        if (typeof i == "function") {
          var c = i;
          i = function() {
            var N = Iy(p);
            c.call(N);
          };
        }
        var p = Yb(
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
          vw
        );
        e._reactRootContainer = p, Nm(p.current, e);
        var m = e.nodeType === Dn ? e.parentNode : e;
        return Gp(m), nu(), p;
      } else {
        for (var y; y = e.lastChild; )
          e.removeChild(y);
        if (typeof i == "function") {
          var C = i;
          i = function() {
            var N = Iy(b);
            C.call(N);
          };
        }
        var b = Bb(
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
          vw
        );
        e._reactRootContainer = b, Nm(b.current, e);
        var M = e.nodeType === Dn ? e.parentNode : e;
        return Gp(M), nu(function() {
          Fv(t, b, a, i);
        }), b;
      }
    }
    function Vk(e, t) {
      e !== null && typeof e != "function" && _("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Wy(e, t, a, i, l) {
      pw(a), Vk(l === void 0 ? null : l, "render");
      var c = a._reactRootContainer, p;
      if (!c)
        p = Hk(a, t, e, l, i);
      else {
        if (p = c, typeof l == "function") {
          var m = l;
          l = function() {
            var y = Iy(p);
            m.call(y);
          };
        }
        Fv(t, p, e, l);
      }
      return Iy(p);
    }
    function Ik(e) {
      {
        var t = Fk.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || _("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", zt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Zr ? e : xk(e, "findDOMNode");
    }
    function Bk(e, t, a) {
      if (_("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Hv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = iv(t) && t._reactRootContainer === void 0;
        i && _("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Wy(null, e, t, !0, a);
    }
    function Yk(e, t, a) {
      if (_("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Hv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = iv(t) && t._reactRootContainer === void 0;
        i && _("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Wy(null, e, t, !1, a);
    }
    function Wk(e, t, a, i) {
      if (_("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Hv(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !Cu(e))
        throw new Error("parentComponent must be a valid React Component");
      return Wy(e, t, a, !1, i);
    }
    function Kk(e) {
      if (!Hv(e))
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
          Wy(null, null, e, !1, function() {
            e._reactRootContainer = null, cC(e);
          });
        }), !0;
      } else {
        {
          var l = VS(e), c = !!(l && Zu(l)), p = e.nodeType === Zr && Hv(e.parentNode) && !!e.parentNode._reactRootContainer;
          c && _("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", p ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Pu(Dk), Hg(Ok), zf(Ak), em(Ba), tm(Nr), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && _("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), ap(q1), rf(ES, $A, nu);
    function Gk(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Yy(t))
        throw new Error("Target container is not a DOM element.");
      return Rk(e, t, null, a);
    }
    function Qk(e, t, a, i) {
      return Wk(e, t, a, i);
    }
    var IS = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Zu, ad, Lm, Su, Rl, ES]
    };
    function qk(e, t) {
      return IS.usingClientEntryPoint || _('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), jk(e, t);
    }
    function Xk(e, t, a) {
      return IS.usingClientEntryPoint || _('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), $k(e, t, a);
    }
    function Zk(e) {
      return Tb() && _("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), nu(e);
    }
    var Jk = Uk({
      findFiberByHostInstance: bc,
      bundleType: 1,
      version: US,
      rendererPackageName: "react-dom"
    });
    if (!Jk && hn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var hw = window.location.protocol;
      /^(https?|file):$/.test(hw) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (hw === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    ei.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = IS, ei.createPortal = Gk, ei.createRoot = qk, ei.findDOMNode = Ik, ei.flushSync = Zk, ei.hydrate = Bk, ei.hydrateRoot = Xk, ei.render = Yk, ei.unmountComponentAtNode = Kk, ei.unstable_batchedUpdates = ES, ei.unstable_renderSubtreeIntoContainer = Qk, ei.version = US, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
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
var bw;
function hN() {
  if (bw)
    return ti;
  bw = 1;
  var v = Rt, u = lR();
  function f(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, o = 1; o < arguments.length; o++)
      r += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var E = /* @__PURE__ */ new Set(), T = {};
  function O(n, r) {
    A(n, r), A(n + "Capture", r);
  }
  function A(n, r) {
    for (T[n] = r, n = 0; n < r.length; n++)
      E.add(r[n]);
  }
  var _ = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), H = Object.prototype.hasOwnProperty, W = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, z = {}, le = {};
  function q(n) {
    return H.call(le, n) ? !0 : H.call(z, n) ? !1 : W.test(n) ? le[n] = !0 : (z[n] = !0, !1);
  }
  function te(n, r, o, s) {
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
  function ee(n, r, o, s) {
    if (r === null || typeof r > "u" || te(n, r, o, s))
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
  function ae(n, r, o, s, d, h, S) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = s, this.attributeNamespace = d, this.mustUseProperty = o, this.propertyName = n, this.type = r, this.sanitizeURL = h, this.removeEmptyString = S;
  }
  var Te = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    Te[n] = new ae(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    Te[r] = new ae(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    Te[n] = new ae(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    Te[n] = new ae(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    Te[n] = new ae(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    Te[n] = new ae(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    Te[n] = new ae(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    Te[n] = new ae(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    Te[n] = new ae(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var vt = /[\-:]([a-z])/g;
  function ct(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      vt,
      ct
    );
    Te[r] = new ae(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(vt, ct);
    Te[r] = new ae(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(vt, ct);
    Te[r] = new ae(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    Te[n] = new ae(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), Te.xlinkHref = new ae("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    Te[n] = new ae(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function ze(n, r, o, s) {
    var d = Te.hasOwnProperty(r) ? Te[r] : null;
    (d !== null ? d.type !== 0 : s || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (ee(r, o, d, s) && (o = null), s || d === null ? q(r) && (o === null ? n.removeAttribute(r) : n.setAttribute(r, "" + o)) : d.mustUseProperty ? n[d.propertyName] = o === null ? d.type === 3 ? !1 : "" : o : (r = d.attributeName, s = d.attributeNamespace, o === null ? n.removeAttribute(r) : (d = d.type, o = d === 3 || d === 4 && o === !0 ? "" : "" + o, s ? n.setAttributeNS(s, r, o) : n.setAttribute(r, o))));
  }
  var ve = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, je = Symbol.for("react.element"), ce = Symbol.for("react.portal"), Pe = Symbol.for("react.fragment"), Ae = Symbol.for("react.strict_mode"), wt = Symbol.for("react.profiler"), gt = Symbol.for("react.provider"), yt = Symbol.for("react.context"), lt = Symbol.for("react.forward_ref"), St = Symbol.for("react.suspense"), Ye = Symbol.for("react.suspense_list"), nt = Symbol.for("react.memo"), it = Symbol.for("react.lazy"), Ge = Symbol.for("react.offscreen"), X = Symbol.iterator;
  function _e(n) {
    return n === null || typeof n != "object" ? null : (n = X && n[X] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var D = Object.assign, Z;
  function Ce(n) {
    if (Z === void 0)
      try {
        throw Error();
      } catch (o) {
        var r = o.stack.trim().match(/\n( *(at )?)/);
        Z = r && r[1] || "";
      }
    return `
` + Z + n;
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
          } catch (B) {
            var s = B;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (B) {
            s = B;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (B) {
          s = B;
        }
        n();
      }
    } catch (B) {
      if (B && s && typeof B.stack == "string") {
        for (var d = B.stack.split(`
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
    return (n = n ? n.displayName || n.name : "") ? Ce(n) : "";
  }
  function ut(n) {
    switch (n.tag) {
      case 5:
        return Ce(n.type);
      case 16:
        return Ce("Lazy");
      case 13:
        return Ce("Suspense");
      case 19:
        return Ce("SuspenseList");
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
  function ft(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case Pe:
        return "Fragment";
      case ce:
        return "Portal";
      case wt:
        return "Profiler";
      case Ae:
        return "StrictMode";
      case St:
        return "Suspense";
      case Ye:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case yt:
          return (n.displayName || "Context") + ".Consumer";
        case gt:
          return (n._context.displayName || "Context") + ".Provider";
        case lt:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case nt:
          return r = n.displayName || null, r !== null ? r : ft(n.type) || "Memo";
        case it:
          r = n._payload, n = n._init;
          try {
            return ft(n(r));
          } catch {
          }
      }
    return null;
  }
  function Et(n) {
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
        return ft(r);
      case 8:
        return r === Ae ? "StrictMode" : "Mode";
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
  function ot(n) {
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
  function Kt(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Qn(n) {
    var r = Kt(n) ? "checked" : "value", o = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), s = "" + n[r];
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
  function br(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var o = r.getValue(), s = "";
    return n && (s = Kt(n) ? n.checked ? "true" : "false" : n.value), n = s, n !== o ? (r.setValue(n), !0) : !1;
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
    return D({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: o ?? n._wrapperState.initialChecked });
  }
  function Xn(n, r) {
    var o = r.defaultValue == null ? "" : r.defaultValue, s = r.checked != null ? r.checked : r.defaultChecked;
    o = ot(r.value != null ? r.value : o), n._wrapperState = { initialChecked: s, initialValue: o, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Rn(n, r) {
    r = r.checked, r != null && ze(n, "checked", r, !1);
  }
  function En(n, r) {
    Rn(n, r);
    var o = ot(r.value), s = r.type;
    if (o != null)
      s === "number" ? (o === 0 && n.value === "" || n.value != o) && (n.value = "" + o) : n.value !== "" + o && (n.value = "" + o);
    else if (s === "submit" || s === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? cr(n, r.type, o) : r.hasOwnProperty("defaultValue") && cr(n, r.type, ot(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
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
      for (o = "" + ot(o), r = null, d = 0; d < n.length; d++) {
        if (n[d].value === o) {
          n[d].selected = !0, s && (n[d].defaultSelected = !0);
          return;
        }
        r !== null || n[d].disabled || (r = n[d]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function wr(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(f(91));
    return D({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Rr(n, r) {
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
    n._wrapperState = { initialValue: ot(o) };
  }
  function In(n, r) {
    var o = ot(r.value), s = ot(r.defaultValue);
    o != null && (o = "" + o, o !== n.value && (n.value = o), r.defaultValue == null && n.defaultValue !== o && (n.defaultValue = o)), s != null && (n.defaultValue = "" + s);
  }
  function xr(n) {
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
  function Ct(n, r) {
    n = n.style;
    for (var o in r)
      if (r.hasOwnProperty(o)) {
        var s = o.indexOf("--") === 0, d = Be(o, r[o], s);
        o === "float" && (o = "cssFloat"), s ? n.setProperty(o, d) : n[o] = d;
      }
  }
  var It = D({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Pt(n, r) {
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
  function Dr(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Gt = null, ar = null, Bt = null;
  function rn(n) {
    if (n = wi(n)) {
      if (typeof Gt != "function")
        throw Error(f(280));
      var r = n.stateNode;
      r && (r = af(r), Gt(n.stateNode, n.type, r));
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
    var B = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(o, B);
    } catch (ie) {
      this.onError(ie);
    }
  }
  var Wr = !1, Kr = null, ya = !1, Ki = null, x = { onError: function(n) {
    Wr = !0, Kr = n;
  } };
  function re(n, r, o, s, d, h, S, w, k) {
    Wr = !1, Kr = null, Wi.apply(x, arguments);
  }
  function me(n, r, o, s, d, h, S, w, k) {
    if (re.apply(this, arguments), Wr) {
      if (Wr) {
        var B = Kr;
        Wr = !1, Kr = null;
      } else
        throw Error(f(198));
      ya || (ya = !0, Ki = B);
    }
  }
  function Ee(n) {
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
    if (Ee(n) !== n)
      throw Error(f(188));
  }
  function _t(n) {
    var r = n.alternate;
    if (!r) {
      if (r = Ee(n), r === null)
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
  function Ke(n) {
    return n = _t(n), n !== null ? Yn(n) : null;
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
  var an = u.unstable_scheduleCallback, on = u.unstable_cancelCallback, Or = u.unstable_shouldYield, Ei = u.unstable_requestPaint, ln = u.unstable_now, Gr = u.unstable_getCurrentPriorityLevel, Ss = u.unstable_ImmediatePriority, _i = u.unstable_UserBlockingPriority, Tt = u.unstable_NormalPriority, yl = u.unstable_LowPriority, Gi = u.unstable_IdlePriority, Ao = null, Qr = null;
  function Cs(n) {
    if (Qr && typeof Qr.onCommitFiberRoot == "function")
      try {
        Qr.onCommitFiberRoot(Ao, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var Mr = Math.clz32 ? Math.clz32 : ws, Ts = Math.log, bs = Math.LN2;
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
        o = 31 - Mr(r), d = 1 << o, s |= n[o], r &= ~d;
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
      var S = 31 - Mr(h), w = 1 << S, k = d[S];
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
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Mr(r), n[r] = o;
  }
  function Rs(n, r) {
    var o = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var s = n.eventTimes;
    for (n = n.expirationTimes; 0 < o; ) {
      var d = 31 - Mr(o), h = 1 << d;
      r[d] = 0, s[d] = -1, n[d] = -1, o &= ~h;
    }
  }
  function xs(n, r) {
    var o = n.entangledLanes |= r;
    for (n = n.entanglements; o; ) {
      var s = 31 - Mr(o), d = 1 << s;
      d & r | n[s] & r && (n[s] |= r), o &= ~d;
    }
  }
  var At = 0;
  function Ds(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var cu, Lo, Os, zt, fu, Sl = !1, st = [], oi = null, Sn = null, qr = null, za = /* @__PURE__ */ new Map(), Mo = /* @__PURE__ */ new Map(), cn = [], Cn = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
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
        qr = null;
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
  function Xr(n, r, o, s, d) {
    switch (r) {
      case "focusin":
        return oi = fr(oi, n, r, o, s, d), !0;
      case "dragenter":
        return Sn = fr(Sn, n, r, o, s, d), !0;
      case "mouseover":
        return qr = fr(qr, n, r, o, s, d), !0;
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
      var o = Ee(r);
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
    Sl = !1, oi !== null && du(oi) && (oi = null), Sn !== null && du(Sn) && (Sn = null), qr !== null && du(qr) && (qr = null), za.forEach(Cl), Mo.forEach(Cl);
  }
  function zo(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Sl || (Sl = !0, u.unstable_scheduleCallback(u.unstable_NormalPriority, Tl)));
  }
  function Ua(n) {
    function r(d) {
      return zo(d, n);
    }
    if (0 < st.length) {
      zo(st[0], n);
      for (var o = 1; o < st.length; o++) {
        var s = st[o];
        s.blockedOn === n && (s.blockedOn = null);
      }
    }
    for (oi !== null && zo(oi, n), Sn !== null && zo(Sn, n), qr !== null && zo(qr, n), za.forEach(r), Mo.forEach(r), o = 0; o < cn.length; o++)
      s = cn[o], s.blockedOn === n && (s.blockedOn = null);
    for (; 0 < cn.length && (o = cn[0], o.blockedOn === null); )
      li(o), o.blockedOn === null && cn.shift();
  }
  var qi = ve.ReactCurrentBatchConfig, pu = !0;
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
      else if (Xr(d, n, r, o, s))
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
    if (Zi = null, n = Dr(s), n = oo(n), n !== null)
      if (r = Ee(n), r === null)
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
          case Tt:
          case yl:
            return 16;
          case Gi:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ui = null, mu = null, g = null;
  function R() {
    if (g)
      return g;
    var n, r = mu, o = r.length, s, d = "value" in ui ? ui.value : ui.textContent, h = d.length;
    for (n = 0; n < o && r[n] === d[n]; n++)
      ;
    var S = o - n;
    for (s = 1; s <= S && r[o - s] === d[h - s]; s++)
      ;
    return g = d.slice(n, 1 < s ? 1 - s : void 0);
  }
  function F(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function Y() {
    return !0;
  }
  function fe() {
    return !1;
  }
  function Me(n) {
    function r(o, s, d, h, S) {
      this._reactName = o, this._targetInst = d, this.type = s, this.nativeEvent = h, this.target = S, this.currentTarget = null;
      for (var w in n)
        n.hasOwnProperty(w) && (o = n[w], this[w] = o ? o(h) : h[w]);
      return this.isDefaultPrevented = (h.defaultPrevented != null ? h.defaultPrevented : h.returnValue === !1) ? Y : fe, this.isPropagationStopped = fe, this;
    }
    return D(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var o = this.nativeEvent;
      o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1), this.isDefaultPrevented = Y);
    }, stopPropagation: function() {
      var o = this.nativeEvent;
      o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0), this.isPropagationStopped = Y);
    }, persist: function() {
    }, isPersistent: Y }), r;
  }
  var Re = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, rt = Me(Re), bt = D({}, Re, { view: 0, detail: 0 }), Yt = Me(bt), Qt, qt, Xt, fn = D({}, bt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Gc, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Xt && (Xt && n.type === "mousemove" ? (Qt = n.screenX - Xt.screenX, qt = n.screenY - Xt.screenY) : qt = Qt = 0, Xt = n), Qt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : qt;
  } }), Ut = Me(fn), Uo = D({}, fn, { dataTransfer: 0 }), yu = Me(Uo), Ns = D({}, bt, { relatedTarget: 0 }), Ls = Me(Ns), Ji = D({}, Re, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Ms = Me(Ji), zs = D({}, Re, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Wd = Me(zs), Eg = D({}, Re, { data: 0 }), ah = Me(Eg), ih = {
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
  }, Kd = {
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
  }, oh = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function lh(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = oh[n]) ? !!r[n] : !1;
  }
  function Gc() {
    return lh;
  }
  var _g = D({}, bt, { key: function(n) {
    if (n.key) {
      var r = ih[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = F(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Kd[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Gc, charCode: function(n) {
    return n.type === "keypress" ? F(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? F(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), eo = Me(_g), Sg = D({}, fn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Qc = Me(Sg), Gd = D({}, bt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Gc }), Qd = Me(Gd), Cg = D({}, Re, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), qc = Me(Cg), uh = D({}, fn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Zr = Me(uh), to = [9, 13, 27, 32], Dn = _ && "CompositionEvent" in window, ga = null;
  _ && "documentMode" in document && (ga = document.documentMode);
  var qd = _ && "TextEvent" in window && !ga, Us = _ && (!Dn || ga && 8 < ga && 11 >= ga), sh = " ", gu = !1;
  function ch(n, r) {
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
  function fh(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var jo = !1;
  function Tg(n, r) {
    switch (n) {
      case "compositionend":
        return fh(r);
      case "keypress":
        return r.which !== 32 ? null : (gu = !0, sh);
      case "textInput":
        return n = r.data, n === sh && gu ? null : n;
      default:
        return null;
    }
  }
  function bg(n, r) {
    if (jo)
      return n === "compositionend" || !Dn && ch(n, r) ? (n = R(), g = mu = ui = null, jo = !1, n) : null;
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
  function dh(n, r, o, s) {
    ri(s), r = nf(r, "onChange"), 0 < r.length && (o = new rt("onChange", "change", null, o, s), n.push({ event: o, listeners: r }));
  }
  var js = null, Ps = null;
  function ph(n) {
    Oh(n, 0);
  }
  function no(n) {
    var r = Cu(n);
    if (br(r))
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
        var vh = document.createElement("div");
        vh.setAttribute("oninput", "return;"), ep = typeof vh.oninput == "function";
      }
      Xc = ep;
    } else
      Xc = !1;
    Jd = Xc && (!document.documentMode || 9 < document.documentMode);
  }
  function hh() {
    js && (js.detachEvent("onpropertychange", mh), Ps = js = null);
  }
  function mh(n) {
    if (n.propertyName === "value" && no(Ps)) {
      var r = [];
      dh(r, Ps, n, Dr(n)), Oo(ph, r);
    }
  }
  function Rg(n, r, o) {
    n === "focusin" ? (hh(), js = r, Ps = o, js.attachEvent("onpropertychange", mh)) : n === "focusout" && hh();
  }
  function xg(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return no(Ps);
  }
  function Dg(n, r) {
    if (n === "click")
      return no(r);
  }
  function Og(n, r) {
    if (n === "input" || n === "change")
      return no(r);
  }
  function yh(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var si = typeof Object.is == "function" ? Object.is : yh;
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
      if (!H.call(r, d) || !si(n[d], r[d]))
        return !1;
    }
    return !0;
  }
  function gh(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function Eh(n, r) {
    var o = gh(n);
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
      o = gh(o);
    }
  }
  function _h(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? _h(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Sh() {
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
  function $s(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function bl(n) {
    var r = Sh(), o = n.focusedElem, s = n.selectionRange;
    if (r !== o && o && o.ownerDocument && _h(o.ownerDocument.documentElement, o)) {
      if (s !== null && $s(o)) {
        if (r = s.start, n = s.end, n === void 0 && (n = r), "selectionStart" in o)
          o.selectionStart = r, o.selectionEnd = Math.min(n, o.value.length);
        else if (n = (r = o.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var d = o.textContent.length, h = Math.min(s.start, d);
          s = s.end === void 0 ? h : Math.min(s.end, d), !n.extend && h > s && (d = s, s = h, h = d), d = Eh(o, h);
          var S = Eh(
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
  var Zc = _ && "documentMode" in document && 11 >= document.documentMode, wl = null, Po = null, Fs = null, tp = !1;
  function Ch(n, r, o) {
    var s = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    tp || wl == null || wl !== qn(s) || (s = wl, "selectionStart" in s && $s(s) ? s = { start: s.selectionStart, end: s.selectionEnd } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(), s = { anchorNode: s.anchorNode, anchorOffset: s.anchorOffset, focusNode: s.focusNode, focusOffset: s.focusOffset }), Fs && Eu(Fs, s) || (Fs = s, s = nf(Po, "onSelect"), 0 < s.length && (r = new rt("onSelect", "select", null, r, o), n.push({ event: r, listeners: s }), r.target = wl)));
  }
  function Jc(n, r) {
    var o = {};
    return o[n.toLowerCase()] = r.toLowerCase(), o["Webkit" + n] = "webkit" + r, o["Moz" + n] = "moz" + r, o;
  }
  var _u = { animationend: Jc("Animation", "AnimationEnd"), animationiteration: Jc("Animation", "AnimationIteration"), animationstart: Jc("Animation", "AnimationStart"), transitionend: Jc("Transition", "TransitionEnd") }, ef = {}, Th = {};
  _ && (Th = document.createElement("div").style, "AnimationEvent" in window || (delete _u.animationend.animation, delete _u.animationiteration.animation, delete _u.animationstart.animation), "TransitionEvent" in window || delete _u.transitionend.transition);
  function Hs(n) {
    if (ef[n])
      return ef[n];
    if (!_u[n])
      return n;
    var r = _u[n], o;
    for (o in r)
      if (r.hasOwnProperty(o) && o in Th)
        return ef[n] = r[o];
    return n;
  }
  var Ar = Hs("animationend"), np = Hs("animationiteration"), bh = Hs("animationstart"), wh = Hs("transitionend"), Rh = /* @__PURE__ */ new Map(), xh = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function $o(n, r) {
    Rh.set(n, r), O(r, [n]);
  }
  for (var tf = 0; tf < xh.length; tf++) {
    var Vs = xh[tf], Is = Vs.toLowerCase(), Ag = Vs[0].toUpperCase() + Vs.slice(1);
    $o(Is, "on" + Ag);
  }
  $o(Ar, "onAnimationEnd"), $o(np, "onAnimationIteration"), $o(bh, "onAnimationStart"), $o("dblclick", "onDoubleClick"), $o("focusin", "onFocus"), $o("focusout", "onBlur"), $o(wh, "onTransitionEnd"), A("onMouseEnter", ["mouseout", "mouseover"]), A("onMouseLeave", ["mouseout", "mouseover"]), A("onPointerEnter", ["pointerout", "pointerover"]), A("onPointerLeave", ["pointerout", "pointerover"]), O("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), O("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), O("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), O("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), O("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), O("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ro = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), kg = new Set("cancel close invalid load scroll toggle".split(" ").concat(ro));
  function Dh(n, r, o) {
    var s = n.type || "unknown-event";
    n.currentTarget = o, me(s, r, void 0, n), n.currentTarget = null;
  }
  function Oh(n, r) {
    r = (r & 4) !== 0;
    for (var o = 0; o < n.length; o++) {
      var s = n[o], d = s.event;
      s = s.listeners;
      e: {
        var h = void 0;
        if (r)
          for (var S = s.length - 1; 0 <= S; S--) {
            var w = s[S], k = w.instance, B = w.currentTarget;
            if (w = w.listener, k !== h && d.isPropagationStopped())
              break e;
            Dh(d, w, B), h = k;
          }
        else
          for (S = 0; S < s.length; S++) {
            if (w = s[S], k = w.instance, B = w.currentTarget, w = w.listener, k !== h && d.isPropagationStopped())
              break e;
            Dh(d, w, B), h = k;
          }
      }
    }
    if (ya)
      throw n = Ki, ya = !1, Ki = null, n;
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
      n[ao] = !0, E.forEach(function(o) {
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
      var B = h, ie = Dr(o), ue = [];
      e: {
        var ne = Rh.get(n);
        if (ne !== void 0) {
          var be = rt, ke = n;
          switch (n) {
            case "keypress":
              if (F(o) === 0)
                break e;
            case "keydown":
            case "keyup":
              be = eo;
              break;
            case "focusin":
              ke = "focus", be = Ls;
              break;
            case "focusout":
              ke = "blur", be = Ls;
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
            case Ar:
            case np:
            case bh:
              be = Ms;
              break;
            case wh:
              be = qc;
              break;
            case "scroll":
              be = Yt;
              break;
            case "wheel":
              be = Zr;
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
          var Ue = (r & 4) !== 0, Hn = !Ue && n === "scroll", U = Ue ? ne !== null ? ne + "Capture" : null : ne;
          Ue = [];
          for (var L = B, $; L !== null; ) {
            $ = L;
            var de = $.stateNode;
            if ($.tag === 5 && de !== null && ($ = de, U !== null && (de = ai(L, U), de != null && Ue.push(Su(L, de, $)))), Hn)
              break;
            L = L.return;
          }
          0 < Ue.length && (ne = new be(ne, ke, null, o, ie), ue.push({ event: ne, listeners: Ue }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (ne = n === "mouseover" || n === "pointerover", be = n === "mouseout" || n === "pointerout", ne && o !== _n && (ke = o.relatedTarget || o.fromElement) && (oo(ke) || ke[ci]))
            break e;
          if ((be || ne) && (ne = ie.window === ie ? ie : (ne = ie.ownerDocument) ? ne.defaultView || ne.parentWindow : window, be ? (ke = o.relatedTarget || o.toElement, be = B, ke = ke ? oo(ke) : null, ke !== null && (Hn = Ee(ke), ke !== Hn || ke.tag !== 5 && ke.tag !== 6) && (ke = null)) : (be = null, ke = B), be !== ke)) {
            if (Ue = Ut, de = "onMouseLeave", U = "onMouseEnter", L = "mouse", (n === "pointerout" || n === "pointerover") && (Ue = Qc, de = "onPointerLeave", U = "onPointerEnter", L = "pointer"), Hn = be == null ? ne : Cu(be), $ = ke == null ? ne : Cu(ke), ne = new Ue(de, L + "leave", be, o, ie), ne.target = Hn, ne.relatedTarget = $, de = null, oo(ie) === B && (Ue = new Ue(U, L + "enter", ke, o, ie), Ue.target = $, Ue.relatedTarget = Hn, de = Ue), Hn = de, be && ke)
              t: {
                for (Ue = be, U = ke, L = 0, $ = Ue; $; $ = Rl($))
                  L++;
                for ($ = 0, de = U; de; de = Rl(de))
                  $++;
                for (; 0 < L - $; )
                  Ue = Rl(Ue), L--;
                for (; 0 < $ - L; )
                  U = Rl(U), $--;
                for (; L--; ) {
                  if (Ue === U || U !== null && Ue === U.alternate)
                    break t;
                  Ue = Rl(Ue), U = Rl(U);
                }
                Ue = null;
              }
            else
              Ue = null;
            be !== null && ip(ue, ne, be, Ue, !1), ke !== null && Hn !== null && ip(ue, Hn, ke, Ue, !0);
          }
        }
        e: {
          if (ne = B ? Cu(B) : window, be = ne.nodeName && ne.nodeName.toLowerCase(), be === "select" || be === "input" && ne.type === "file")
            var Fe = Zd;
          else if (Xd(ne))
            if (Jd)
              Fe = Og;
            else {
              Fe = xg;
              var Je = Rg;
            }
          else
            (be = ne.nodeName) && be.toLowerCase() === "input" && (ne.type === "checkbox" || ne.type === "radio") && (Fe = Dg);
          if (Fe && (Fe = Fe(n, B))) {
            dh(ue, Fe, o, ie);
            break e;
          }
          Je && Je(n, ne, B), n === "focusout" && (Je = ne._wrapperState) && Je.controlled && ne.type === "number" && cr(ne, "number", ne.value);
        }
        switch (Je = B ? Cu(B) : window, n) {
          case "focusin":
            (Xd(Je) || Je.contentEditable === "true") && (wl = Je, Po = B, Fs = null);
            break;
          case "focusout":
            Fs = Po = wl = null;
            break;
          case "mousedown":
            tp = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            tp = !1, Ch(ue, o, ie);
            break;
          case "selectionchange":
            if (Zc)
              break;
          case "keydown":
          case "keyup":
            Ch(ue, o, ie);
        }
        var Ne;
        if (Dn)
          e: {
            switch (n) {
              case "compositionstart":
                var et = "onCompositionStart";
                break e;
              case "compositionend":
                et = "onCompositionEnd";
                break e;
              case "compositionupdate":
                et = "onCompositionUpdate";
                break e;
            }
            et = void 0;
          }
        else
          jo ? ch(n, o) && (et = "onCompositionEnd") : n === "keydown" && o.keyCode === 229 && (et = "onCompositionStart");
        et && (Us && o.locale !== "ko" && (jo || et !== "onCompositionStart" ? et === "onCompositionEnd" && jo && (Ne = R()) : (ui = ie, mu = "value" in ui ? ui.value : ui.textContent, jo = !0)), Je = nf(B, et), 0 < Je.length && (et = new ah(et, n, null, o, ie), ue.push({ event: et, listeners: Je }), Ne ? et.data = Ne : (Ne = fh(o), Ne !== null && (et.data = Ne)))), (Ne = qd ? Tg(n, o) : bg(n, o)) && (B = nf(B, "onBeforeInput"), 0 < B.length && (ie = new ah("onBeforeInput", "beforeinput", null, o, ie), ue.push({ event: ie, listeners: B }), ie.data = Ne));
      }
      Oh(ue, r);
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
      var w = o, k = w.alternate, B = w.stateNode;
      if (k !== null && k === s)
        break;
      w.tag === 5 && B !== null && (w = B, d ? (k = ai(o, h), k != null && S.unshift(Su(o, k, w))) : d || (k = ai(o, h), k != null && S.push(Su(o, k, w)))), o = o.return;
    }
    S.length !== 0 && n.push({ event: r, listeners: S });
  }
  var Ah = /\r\n?/g, op = /\u0000|\uFFFD/g;
  function kh(n) {
    return (typeof n == "string" ? n : "" + n).replace(Ah, `
`).replace(op, "");
  }
  function Ys(n, r, o) {
    if (r = kh(r), kh(n) !== r && o)
      throw Error(f(425));
  }
  function rf() {
  }
  var lp = null, up = null;
  function xl(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Ws = typeof setTimeout == "function" ? setTimeout : void 0, Ks = typeof clearTimeout == "function" ? clearTimeout : void 0, sp = typeof Promise == "function" ? Promise : void 0, Nh = typeof queueMicrotask == "function" ? queueMicrotask : typeof sp < "u" ? function(n) {
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
  function Gs(n) {
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
          for (n = Gs(n); n !== null; ) {
            if (o = n[ja])
              return o;
            n = Gs(n);
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
  function $e(n) {
    0 > fi || (n.current = Qe[fi], Qe[fi] = null, fi--);
  }
  function $t(n, r) {
    fi++, Qe[fi] = n.current, n.current = r;
  }
  var Pa = {}, ir = nn(Pa), dt = nn(!1), zr = Pa;
  function _a(n, r) {
    var o = n.type.contextTypes;
    if (!o)
      return Pa;
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
  function Jr() {
    $e(dt), $e(ir);
  }
  function Ri(n, r, o) {
    if (ir.current !== Pa)
      throw Error(f(168));
    $t(ir, r), $t(dt, o);
  }
  function Fo(n, r, o) {
    var s = n.stateNode;
    if (r = r.childContextTypes, typeof s.getChildContext != "function")
      return o;
    s = s.getChildContext();
    for (var d in s)
      if (!(d in r))
        throw Error(f(108, Et(n) || "Unknown", d));
    return D({}, o, s);
  }
  function Dl(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Pa, zr = ir.current, $t(ir, n), $t(dt, dt.current), !0;
  }
  function Lh(n, r, o) {
    var s = n.stateNode;
    if (!s)
      throw Error(f(169));
    o ? (n = Fo(n, r, zr), s.__reactInternalMemoizedMergedChildContext = n, $e(dt), $e(ir), $t(ir, n)) : $e(dt), $t(dt, o);
  }
  var lo = null, Ho = !1, dr = !1;
  function of(n) {
    lo === null ? lo = [n] : lo.push(n);
  }
  function Mh(n) {
    Ho = !0, of(n);
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
        lo = null, Ho = !1;
      } catch (d) {
        throw lo !== null && (lo = lo.slice(n + 1)), an(Ss, xi), d;
      } finally {
        At = r, dr = !1;
      }
    }
    return null;
  }
  var $a = [], Vo = 0, Fa = null, Ol = 0, ea = [], ta = 0, di = null, na = 1, pr = "";
  function Al(n, r) {
    $a[Vo++] = Ol, $a[Vo++] = Fa, Fa = n, Ol = r;
  }
  function Io(n, r, o) {
    ea[ta++] = na, ea[ta++] = pr, ea[ta++] = di, di = n;
    var s = na;
    n = pr;
    var d = 32 - Mr(s) - 1;
    s &= ~(1 << d), o += 1;
    var h = 32 - Mr(r) + d;
    if (30 < h) {
      var S = d - d % 5;
      h = (s & (1 << S) - 1).toString(32), s >>= S, d -= S, na = 1 << 32 - Mr(r) + d | o << d | s, pr = h + n;
    } else
      na = 1 << h | o << d | s, pr = n;
  }
  function lf(n) {
    n.return !== null && (Al(n, 1), Io(n, 1, 0));
  }
  function uf(n) {
    for (; n === Fa; )
      Fa = $a[--Vo], $a[Vo] = null, Ol = $a[--Vo], $a[Vo] = null;
    for (; n === di; )
      di = ea[--ta], ea[ta] = null, pr = ea[--ta], ea[ta] = null, na = ea[--ta], ea[ta] = null;
  }
  var Sa = null, Ca = null, dn = !1, Ha = null;
  function pp(n, r) {
    var o = Ga(5, null, null, 0);
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
        return r = r.nodeType !== 8 ? null : r, r !== null ? (o = di !== null ? { id: na, overflow: pr } : null, n.memoizedState = { dehydrated: r, treeContext: o, retryLane: 1073741824 }, o = Ga(18, null, null, 0), o.stateNode = r, o.return = n, n.child = o, Sa = n, Ca = null, !0) : !1;
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
        throw zh(), Error(f(418));
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
  function zh() {
    for (var n = Ca; n; )
      n = Ea(n.nextSibling);
  }
  function Tu() {
    Ca = Sa = null, dn = !1;
  }
  function Kn(n) {
    Ha === null ? Ha = [n] : Ha.push(n);
  }
  var Mg = ve.ReactCurrentBatchConfig;
  function ra(n, r) {
    if (n && n.defaultProps) {
      r = D({}, r), n = n.defaultProps;
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
    $e(bu), n._currentValue = r;
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
    Di = n, qs = wu = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (oa = !0), n.firstContext = null);
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
  var kr = null;
  function Ta(n) {
    kr === null ? kr = [n] : kr.push(n);
  }
  function Uh(n, r, o, s) {
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
  function jh(n, r) {
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
      var k = w, B = k.next;
      k.next = null, S === null ? h = B : S.next = B, S = k;
      var ie = n.alternate;
      ie !== null && (ie = ie.updateQueue, w = ie.lastBaseUpdate, w !== S && (w === null ? ie.firstBaseUpdate = B : w.next = B, ie.lastBaseUpdate = k));
    }
    if (h !== null) {
      var ue = d.baseState;
      S = 0, ie = B = k = null, w = h;
      do {
        var ne = w.lane, be = w.eventTime;
        if ((s & ne) === ne) {
          ie !== null && (ie = ie.next = {
            eventTime: be,
            lane: 0,
            tag: w.tag,
            payload: w.payload,
            callback: w.callback,
            next: null
          });
          e: {
            var ke = n, Ue = w;
            switch (ne = r, be = o, Ue.tag) {
              case 1:
                if (ke = Ue.payload, typeof ke == "function") {
                  ue = ke.call(be, ue, ne);
                  break e;
                }
                ue = ke;
                break e;
              case 3:
                ke.flags = ke.flags & -65537 | 128;
              case 0:
                if (ke = Ue.payload, ne = typeof ke == "function" ? ke.call(be, ue, ne) : ke, ne == null)
                  break e;
                ue = D({}, ue, ne);
                break e;
              case 2:
                Yo = !0;
            }
          }
          w.callback !== null && w.lane !== 0 && (n.flags |= 64, ne = d.effects, ne === null ? d.effects = [w] : ne.push(w));
        } else
          be = { eventTime: be, lane: ne, tag: w.tag, payload: w.payload, callback: w.callback, next: null }, ie === null ? (B = ie = be, k = ue) : ie = ie.next = be, S |= ne;
        if (w = w.next, w === null) {
          if (w = d.shared.pending, w === null)
            break;
          ne = w, w = ne.next, ne.next = null, d.lastBaseUpdate = ne, d.shared.pending = null;
        }
      } while (!0);
      if (ie === null && (k = ue), d.baseState = k, d.firstBaseUpdate = B, d.lastBaseUpdate = ie, r = d.shared.interleaved, r !== null) {
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
    r = n.memoizedState, o = o(s, r), o = o == null ? r : D({}, r, o), n.memoizedState = o, n.lanes === 0 && (n.updateQueue.baseState = o);
  }
  var df = { isMounted: function(n) {
    return (n = n._reactInternals) ? Ee(n) === n : !1;
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
  function $h(n, r, o, s, d, h, S) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(s, h, S) : r.prototype && r.prototype.isPureReactComponent ? !Eu(o, s) || !Eu(d, h) : !0;
  }
  function Fh(n, r, o) {
    var s = !1, d = Pa, h = r.contextType;
    return typeof h == "object" && h !== null ? h = he(h) : (d = Wn(r) ? zr : ir.current, s = r.contextTypes, h = (s = s != null) ? _a(n, d) : Pa), r = new r(o, h), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = df, n.stateNode = r, r._reactInternals = n, s && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = d, n.__reactInternalMemoizedMaskedChildContext = h), r;
  }
  function Hh(n, r, o, s) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(o, s), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(o, s), r.state !== n && df.enqueueReplaceState(r, r.state, null);
  }
  function Sp(n, r, o, s) {
    var d = n.stateNode;
    d.props = o, d.state = n.memoizedState, d.refs = kl, Ep(n);
    var h = r.contextType;
    typeof h == "object" && h !== null ? d.context = he(h) : (h = Wn(r) ? zr : ir.current, d.context = _a(n, h)), d.state = n.memoizedState, h = r.getDerivedStateFromProps, typeof h == "function" && (_p(n, r, h, o), d.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function" || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (r = d.state, typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(), r !== d.state && df.enqueueReplaceState(d, d.state, null), Xs(n, o, d, s), d.state = n.memoizedState), typeof d.componentDidMount == "function" && (n.flags |= 4194308);
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
  function Vh(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Ih(n) {
    function r(U, L) {
      if (n) {
        var $ = U.deletions;
        $ === null ? (U.deletions = [L], U.flags |= 16) : $.push(L);
      }
    }
    function o(U, L) {
      if (!n)
        return null;
      for (; L !== null; )
        r(U, L), L = L.sibling;
      return null;
    }
    function s(U, L) {
      for (U = /* @__PURE__ */ new Map(); L !== null; )
        L.key !== null ? U.set(L.key, L) : U.set(L.index, L), L = L.sibling;
      return U;
    }
    function d(U, L) {
      return U = el(U, L), U.index = 0, U.sibling = null, U;
    }
    function h(U, L, $) {
      return U.index = $, n ? ($ = U.alternate, $ !== null ? ($ = $.index, $ < L ? (U.flags |= 2, L) : $) : (U.flags |= 2, L)) : (U.flags |= 1048576, L);
    }
    function S(U) {
      return n && U.alternate === null && (U.flags |= 2), U;
    }
    function w(U, L, $, de) {
      return L === null || L.tag !== 6 ? (L = Kf($, U.mode, de), L.return = U, L) : (L = d(L, $), L.return = U, L);
    }
    function k(U, L, $, de) {
      var Fe = $.type;
      return Fe === Pe ? ie(U, L, $.props.children, de, $.key) : L !== null && (L.elementType === Fe || typeof Fe == "object" && Fe !== null && Fe.$$typeof === it && Vh(Fe) === L.type) ? (de = d(L, $.props), de.ref = xu(U, L, $), de.return = U, de) : (de = Yf($.type, $.key, $.props, null, U.mode, de), de.ref = xu(U, L, $), de.return = U, de);
    }
    function B(U, L, $, de) {
      return L === null || L.tag !== 4 || L.stateNode.containerInfo !== $.containerInfo || L.stateNode.implementation !== $.implementation ? (L = yc($, U.mode, de), L.return = U, L) : (L = d(L, $.children || []), L.return = U, L);
    }
    function ie(U, L, $, de, Fe) {
      return L === null || L.tag !== 7 ? (L = Wl($, U.mode, de, Fe), L.return = U, L) : (L = d(L, $), L.return = U, L);
    }
    function ue(U, L, $) {
      if (typeof L == "string" && L !== "" || typeof L == "number")
        return L = Kf("" + L, U.mode, $), L.return = U, L;
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case je:
            return $ = Yf(L.type, L.key, L.props, null, U.mode, $), $.ref = xu(U, null, L), $.return = U, $;
          case ce:
            return L = yc(L, U.mode, $), L.return = U, L;
          case it:
            var de = L._init;
            return ue(U, de(L._payload), $);
        }
        if (mn(L) || _e(L))
          return L = Wl(L, U.mode, $, null), L.return = U, L;
        Zs(U, L);
      }
      return null;
    }
    function ne(U, L, $, de) {
      var Fe = L !== null ? L.key : null;
      if (typeof $ == "string" && $ !== "" || typeof $ == "number")
        return Fe !== null ? null : w(U, L, "" + $, de);
      if (typeof $ == "object" && $ !== null) {
        switch ($.$$typeof) {
          case je:
            return $.key === Fe ? k(U, L, $, de) : null;
          case ce:
            return $.key === Fe ? B(U, L, $, de) : null;
          case it:
            return Fe = $._init, ne(
              U,
              L,
              Fe($._payload),
              de
            );
        }
        if (mn($) || _e($))
          return Fe !== null ? null : ie(U, L, $, de, null);
        Zs(U, $);
      }
      return null;
    }
    function be(U, L, $, de, Fe) {
      if (typeof de == "string" && de !== "" || typeof de == "number")
        return U = U.get($) || null, w(L, U, "" + de, Fe);
      if (typeof de == "object" && de !== null) {
        switch (de.$$typeof) {
          case je:
            return U = U.get(de.key === null ? $ : de.key) || null, k(L, U, de, Fe);
          case ce:
            return U = U.get(de.key === null ? $ : de.key) || null, B(L, U, de, Fe);
          case it:
            var Je = de._init;
            return be(U, L, $, Je(de._payload), Fe);
        }
        if (mn(de) || _e(de))
          return U = U.get($) || null, ie(L, U, de, Fe, null);
        Zs(L, de);
      }
      return null;
    }
    function ke(U, L, $, de) {
      for (var Fe = null, Je = null, Ne = L, et = L = 0, tr = null; Ne !== null && et < $.length; et++) {
        Ne.index > et ? (tr = Ne, Ne = null) : tr = Ne.sibling;
        var Ft = ne(U, Ne, $[et], de);
        if (Ft === null) {
          Ne === null && (Ne = tr);
          break;
        }
        n && Ne && Ft.alternate === null && r(U, Ne), L = h(Ft, L, et), Je === null ? Fe = Ft : Je.sibling = Ft, Je = Ft, Ne = tr;
      }
      if (et === $.length)
        return o(U, Ne), dn && Al(U, et), Fe;
      if (Ne === null) {
        for (; et < $.length; et++)
          Ne = ue(U, $[et], de), Ne !== null && (L = h(Ne, L, et), Je === null ? Fe = Ne : Je.sibling = Ne, Je = Ne);
        return dn && Al(U, et), Fe;
      }
      for (Ne = s(U, Ne); et < $.length; et++)
        tr = be(Ne, U, et, $[et], de), tr !== null && (n && tr.alternate !== null && Ne.delete(tr.key === null ? et : tr.key), L = h(tr, L, et), Je === null ? Fe = tr : Je.sibling = tr, Je = tr);
      return n && Ne.forEach(function(vo) {
        return r(U, vo);
      }), dn && Al(U, et), Fe;
    }
    function Ue(U, L, $, de) {
      var Fe = _e($);
      if (typeof Fe != "function")
        throw Error(f(150));
      if ($ = Fe.call($), $ == null)
        throw Error(f(151));
      for (var Je = Fe = null, Ne = L, et = L = 0, tr = null, Ft = $.next(); Ne !== null && !Ft.done; et++, Ft = $.next()) {
        Ne.index > et ? (tr = Ne, Ne = null) : tr = Ne.sibling;
        var vo = ne(U, Ne, Ft.value, de);
        if (vo === null) {
          Ne === null && (Ne = tr);
          break;
        }
        n && Ne && vo.alternate === null && r(U, Ne), L = h(vo, L, et), Je === null ? Fe = vo : Je.sibling = vo, Je = vo, Ne = tr;
      }
      if (Ft.done)
        return o(
          U,
          Ne
        ), dn && Al(U, et), Fe;
      if (Ne === null) {
        for (; !Ft.done; et++, Ft = $.next())
          Ft = ue(U, Ft.value, de), Ft !== null && (L = h(Ft, L, et), Je === null ? Fe = Ft : Je.sibling = Ft, Je = Ft);
        return dn && Al(U, et), Fe;
      }
      for (Ne = s(U, Ne); !Ft.done; et++, Ft = $.next())
        Ft = be(Ne, U, et, Ft.value, de), Ft !== null && (n && Ft.alternate !== null && Ne.delete(Ft.key === null ? et : Ft.key), L = h(Ft, L, et), Je === null ? Fe = Ft : Je.sibling = Ft, Je = Ft);
      return n && Ne.forEach(function(Jg) {
        return r(U, Jg);
      }), dn && Al(U, et), Fe;
    }
    function Hn(U, L, $, de) {
      if (typeof $ == "object" && $ !== null && $.type === Pe && $.key === null && ($ = $.props.children), typeof $ == "object" && $ !== null) {
        switch ($.$$typeof) {
          case je:
            e: {
              for (var Fe = $.key, Je = L; Je !== null; ) {
                if (Je.key === Fe) {
                  if (Fe = $.type, Fe === Pe) {
                    if (Je.tag === 7) {
                      o(U, Je.sibling), L = d(Je, $.props.children), L.return = U, U = L;
                      break e;
                    }
                  } else if (Je.elementType === Fe || typeof Fe == "object" && Fe !== null && Fe.$$typeof === it && Vh(Fe) === Je.type) {
                    o(U, Je.sibling), L = d(Je, $.props), L.ref = xu(U, Je, $), L.return = U, U = L;
                    break e;
                  }
                  o(U, Je);
                  break;
                } else
                  r(U, Je);
                Je = Je.sibling;
              }
              $.type === Pe ? (L = Wl($.props.children, U.mode, de, $.key), L.return = U, U = L) : (de = Yf($.type, $.key, $.props, null, U.mode, de), de.ref = xu(U, L, $), de.return = U, U = de);
            }
            return S(U);
          case ce:
            e: {
              for (Je = $.key; L !== null; ) {
                if (L.key === Je)
                  if (L.tag === 4 && L.stateNode.containerInfo === $.containerInfo && L.stateNode.implementation === $.implementation) {
                    o(U, L.sibling), L = d(L, $.children || []), L.return = U, U = L;
                    break e;
                  } else {
                    o(U, L);
                    break;
                  }
                else
                  r(U, L);
                L = L.sibling;
              }
              L = yc($, U.mode, de), L.return = U, U = L;
            }
            return S(U);
          case it:
            return Je = $._init, Hn(U, L, Je($._payload), de);
        }
        if (mn($))
          return ke(U, L, $, de);
        if (_e($))
          return Ue(U, L, $, de);
        Zs(U, $);
      }
      return typeof $ == "string" && $ !== "" || typeof $ == "number" ? ($ = "" + $, L !== null && L.tag === 6 ? (o(U, L.sibling), L = d(L, $), L.return = U, U = L) : (o(U, L), L = Kf($, U.mode, de), L.return = U, U = L), S(U)) : o(U, L);
    }
    return Hn;
  }
  var Du = Ih(!0), Bh = Ih(!1), Js = {}, Oi = nn(Js), Ou = nn(Js), ec = nn(Js);
  function Ko(n) {
    if (n === Js)
      throw Error(f(174));
    return n;
  }
  function Cp(n, r) {
    switch ($t(ec, r), $t(Ou, n), $t(Oi, Js), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : rr(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = rr(r, n);
    }
    $e(Oi), $t(Oi, r);
  }
  function Au() {
    $e(Oi), $e(Ou), $e(ec);
  }
  function pf(n) {
    Ko(ec.current);
    var r = Ko(Oi.current), o = rr(r, n.type);
    r !== o && ($t(Ou, n), $t(Oi, o));
  }
  function qe(n) {
    Ou.current === n && ($e(Oi), $e(Ou));
  }
  var He = nn(0);
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
  var tc = ve.ReactCurrentDispatcher, Tp = ve.ReactCurrentBatchConfig, Nl = 0, Tn = null, jn = null, Q = null, Pn = !1, Ze = !1, Ai = 0, so = 0;
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
    if (Nl = h, Tn = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, tc.current = n === null || n.memoizedState === null ? zg : Ug, n = o(s, d), Ze) {
      h = 0;
      do {
        if (Ze = !1, Ai = 0, 25 <= h)
          throw Error(f(301));
        h += 1, Q = jn = null, r.updateQueue = null, tc.current = jg, n = o(s, d);
      } while (Ze);
    }
    if (tc.current = xf, r = jn !== null && jn.next !== null, Nl = 0, Q = jn = Tn = null, Pn = !1, r)
      throw Error(f(300));
    return n;
  }
  function Go() {
    var n = Ai !== 0;
    return Ai = 0, n;
  }
  function aa() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Q === null ? Tn.memoizedState = Q = n : Q = Q.next = n, Q;
  }
  function ia() {
    if (jn === null) {
      var n = Tn.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = jn.next;
    var r = Q === null ? Tn.memoizedState : Q.next;
    if (r !== null)
      Q = r, jn = n;
    else {
      if (n === null)
        throw Error(f(310));
      jn = n, n = { memoizedState: jn.memoizedState, baseState: jn.baseState, baseQueue: jn.baseQueue, queue: jn.queue, next: null }, Q === null ? Tn.memoizedState = Q = n : Q = Q.next = n;
    }
    return Q;
  }
  function Ml(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function nc(n) {
    var r = ia(), o = r.queue;
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
      var w = S = null, k = null, B = h;
      do {
        var ie = B.lane;
        if ((Nl & ie) === ie)
          k !== null && (k = k.next = { lane: 0, action: B.action, hasEagerState: B.hasEagerState, eagerState: B.eagerState, next: null }), s = B.hasEagerState ? B.eagerState : n(s, B.action);
        else {
          var ue = {
            lane: ie,
            action: B.action,
            hasEagerState: B.hasEagerState,
            eagerState: B.eagerState,
            next: null
          };
          k === null ? (w = k = ue, S = s) : k = k.next = ue, Tn.lanes |= ie, Vl |= ie;
        }
        B = B.next;
      } while (B !== null && B !== h);
      k === null ? S = s : k.next = w, si(s, r.memoizedState) || (oa = !0), r.memoizedState = s, r.baseState = S, r.baseQueue = k, o.lastRenderedState = s;
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
    var r = ia(), o = r.queue;
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
      si(h, r.memoizedState) || (oa = !0), r.memoizedState = h, r.baseQueue === null && (r.baseState = h), o.lastRenderedState = h;
    }
    return [h, s];
  }
  function vf() {
  }
  function hf(n, r) {
    var o = Tn, s = ia(), d = r(), h = !si(s.memoizedState, d);
    if (h && (s.memoizedState = d, oa = !0), s = s.queue, ac(gf.bind(null, o, s, n), [n]), s.getSnapshot !== r || h || Q !== null && Q.memoizedState.tag & 1) {
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
    var r = aa();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ml, lastRenderedState: n }, r.queue = n, n = n.dispatch = Rf.bind(null, Tn, n), [r.memoizedState, n];
  }
  function zl(n, r, o, s) {
    return n = { tag: n, create: r, destroy: o, deps: s, next: null }, r = Tn.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Tn.updateQueue = r, r.lastEffect = n.next = n) : (o = r.lastEffect, o === null ? r.lastEffect = n.next = n : (s = o.next, o.next = n, n.next = s, r.lastEffect = n)), n;
  }
  function Cf() {
    return ia().memoizedState;
  }
  function ku(n, r, o, s) {
    var d = aa();
    Tn.flags |= n, d.memoizedState = zl(1 | r, o, void 0, s === void 0 ? null : s);
  }
  function Ul(n, r, o, s) {
    var d = ia();
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
  function Pl() {
  }
  function wp(n, r) {
    var o = ia();
    r = r === void 0 ? null : r;
    var s = o.memoizedState;
    return s !== null && r !== null && Ia(r, s[1]) ? s[0] : (o.memoizedState = [n, r], n);
  }
  function Nu(n, r) {
    var o = ia();
    r = r === void 0 ? null : r;
    var s = o.memoizedState;
    return s !== null && r !== null && Ia(r, s[1]) ? s[0] : (n = n(), o.memoizedState = [n, r], n);
  }
  function Qo(n, r, o) {
    return Nl & 21 ? (si(o, r) || (o = El(), Tn.lanes |= o, Vl |= o, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, oa = !0), n.memoizedState = o);
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
  function Yh() {
    return ia().memoizedState;
  }
  function sn(n, r, o) {
    var s = po(n);
    if (o = { lane: s, action: o, hasEagerState: !1, eagerState: null, next: null }, ic(n))
      Lu(r, o);
    else if (o = Uh(n, r, o, s), o !== null) {
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
      o = Uh(n, r, d, s), o !== null && (d = ur(), bn(o, n, s, d), oc(o, r, s));
    }
  }
  function ic(n) {
    var r = n.alternate;
    return n === Tn || r !== null && r === Tn;
  }
  function Lu(n, r) {
    Ze = Pn = !0;
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
    return aa().memoizedState = [n, r === void 0 ? null : r], n;
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
    var o = aa();
    return r = r === void 0 ? null : r, n = n(), o.memoizedState = [n, r], n;
  }, useReducer: function(n, r, o) {
    var s = aa();
    return r = o !== void 0 ? o(r) : r, s.memoizedState = s.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, s.queue = n, n = n.dispatch = sn.bind(null, Tn, n), [s.memoizedState, n];
  }, useRef: function(n) {
    var r = aa();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Sf, useDebugValue: Pl, useDeferredValue: function(n) {
    return aa().memoizedState = n;
  }, useTransition: function() {
    var n = Sf(!1), r = n[0];
    return n = ba.bind(null, n[1]), aa().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, o) {
    var s = Tn, d = aa();
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
    var n = aa(), r = Nn.identifierPrefix;
    if (dn) {
      var o = pr, s = na;
      o = (s & ~(1 << 32 - Mr(s) - 1)).toString(32) + o, r = ":" + r + "R" + o, o = Ai++, 0 < o && (r += "H" + o.toString(32)), r += ":";
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
    useDebugValue: Pl,
    useDeferredValue: function(n) {
      var r = ia();
      return Qo(r, jn.memoizedState, n);
    },
    useTransition: function() {
      var n = nc(Ml)[0], r = ia().memoizedState;
      return [n, r];
    },
    useMutableSource: vf,
    useSyncExternalStore: hf,
    useId: Yh,
    unstable_isNewReconciler: !1
  }, jg = { readContext: he, useCallback: wp, useContext: he, useEffect: ac, useImperativeHandle: bp, useInsertionEffect: Tf, useLayoutEffect: bf, useMemo: Nu, useReducer: rc, useRef: Cf, useState: function() {
    return rc(Ml);
  }, useDebugValue: Pl, useDeferredValue: function(n) {
    var r = ia();
    return jn === null ? r.memoizedState = n : Qo(r, jn.memoizedState, n);
  }, useTransition: function() {
    var n = rc(Ml)[0], r = ia().memoizedState;
    return [n, r];
  }, useMutableSource: vf, useSyncExternalStore: hf, useId: Yh, unstable_isNewReconciler: !1 };
  function qo(n, r) {
    try {
      var o = "", s = r;
      do
        o += ut(s), s = s.return;
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
  var Wh = typeof WeakMap == "function" ? WeakMap : Map;
  function Kh(n, r, o) {
    o = un(-1, o), o.tag = 3, o.payload = { element: null };
    var s = r.value;
    return o.callback = function() {
      $f || ($f = !0, zp = s), lc(n, r);
    }, o;
  }
  function Gh(n, r, o) {
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
      s = n.pingCache = new Wh();
      var d = /* @__PURE__ */ new Set();
      s.set(r, d);
    } else
      d = s.get(r), d === void 0 && (d = /* @__PURE__ */ new Set(), s.set(r, d));
    d.has(o) || (d.add(o), n = Kg.bind(null, n, r, o), r.then(n, n));
  }
  function Qh(n) {
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
  var qh = ve.ReactCurrentOwner, oa = !1;
  function $n(n, r, o, s) {
    r.child = n === null ? Bh(r, null, o, s) : Du(r, n.child, o, s);
  }
  function Mu(n, r, o, s, d) {
    o = o.render;
    var h = r.ref;
    return Un(r, d), s = Ll(n, r, o, s, h, d), o = Go(), n !== null && !oa ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~d, Fn(n, r, d)) : (dn && o && lf(r), r.flags |= 1, $n(n, r, s, d), r.child);
  }
  function Xo(n, r, o, s, d) {
    if (n === null) {
      var h = o.type;
      return typeof h == "function" && !Fp(h) && h.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (r.tag = 15, r.type = h, Df(n, r, h, s, d)) : (n = Yf(o.type, null, s, r, r.mode, d), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (h = n.child, !(n.lanes & d)) {
      var S = h.memoizedProps;
      if (o = o.compare, o = o !== null ? o : Eu, o(S, s) && n.ref === r.ref)
        return Fn(n, r, d);
    }
    return r.flags |= 1, n = el(h, s), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Df(n, r, o, s, d) {
    if (n !== null) {
      var h = n.memoizedProps;
      if (Eu(h, s) && n.ref === r.ref)
        if (oa = !1, r.pendingProps = s = h, (n.lanes & d) !== 0)
          n.flags & 131072 && (oa = !0);
        else
          return r.lanes = n.lanes, Fn(n, r, d);
    }
    return mt(n, r, o, s, d);
  }
  function la(n, r, o) {
    var s = r.pendingProps, d = s.children, h = n !== null ? n.memoizedState : null;
    if (s.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, $t(Bu, ua), ua |= o;
      else {
        if (!(o & 1073741824))
          return n = h !== null ? h.baseLanes | o : o, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, $t(Bu, ua), ua |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, s = h !== null ? h.baseLanes : o, $t(Bu, ua), ua |= s;
      }
    else
      h !== null ? (s = h.baseLanes | o, r.memoizedState = null) : s = o, $t(Bu, ua), ua |= s;
    return $n(n, r, d, o), r.child;
  }
  function $l(n, r) {
    var o = r.ref;
    (n === null && o !== null || n !== null && n.ref !== o) && (r.flags |= 512, r.flags |= 2097152);
  }
  function mt(n, r, o, s, d) {
    var h = Wn(o) ? zr : ir.current;
    return h = _a(r, h), Un(r, d), o = Ll(n, r, o, s, h, d), s = Go(), n !== null && !oa ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~d, Fn(n, r, d)) : (dn && s && lf(r), r.flags |= 1, $n(n, r, o, d), r.child);
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
      var k = S.context, B = o.contextType;
      typeof B == "object" && B !== null ? B = he(B) : (B = Wn(o) ? zr : ir.current, B = _a(r, B));
      var ie = o.getDerivedStateFromProps, ue = typeof ie == "function" || typeof S.getSnapshotBeforeUpdate == "function";
      ue || typeof S.UNSAFE_componentWillReceiveProps != "function" && typeof S.componentWillReceiveProps != "function" || (w !== s || k !== B) && Hh(r, S, s, B), Yo = !1;
      var ne = r.memoizedState;
      S.state = ne, Xs(r, s, S, d), k = r.memoizedState, w !== s || ne !== k || dt.current || Yo ? (typeof ie == "function" && (_p(r, o, ie, s), k = r.memoizedState), (w = Yo || $h(r, o, w, s, ne, k, B)) ? (ue || typeof S.UNSAFE_componentWillMount != "function" && typeof S.componentWillMount != "function" || (typeof S.componentWillMount == "function" && S.componentWillMount(), typeof S.UNSAFE_componentWillMount == "function" && S.UNSAFE_componentWillMount()), typeof S.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof S.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = s, r.memoizedState = k), S.props = s, S.state = k, S.context = B, s = w) : (typeof S.componentDidMount == "function" && (r.flags |= 4194308), s = !1);
    } else {
      S = r.stateNode, jh(n, r), w = r.memoizedProps, B = r.type === r.elementType ? w : ra(r.type, w), S.props = B, ue = r.pendingProps, ne = S.context, k = o.contextType, typeof k == "object" && k !== null ? k = he(k) : (k = Wn(o) ? zr : ir.current, k = _a(r, k));
      var be = o.getDerivedStateFromProps;
      (ie = typeof be == "function" || typeof S.getSnapshotBeforeUpdate == "function") || typeof S.UNSAFE_componentWillReceiveProps != "function" && typeof S.componentWillReceiveProps != "function" || (w !== ue || ne !== k) && Hh(r, S, s, k), Yo = !1, ne = r.memoizedState, S.state = ne, Xs(r, s, S, d);
      var ke = r.memoizedState;
      w !== ue || ne !== ke || dt.current || Yo ? (typeof be == "function" && (_p(r, o, be, s), ke = r.memoizedState), (B = Yo || $h(r, o, B, s, ne, ke, k) || !1) ? (ie || typeof S.UNSAFE_componentWillUpdate != "function" && typeof S.componentWillUpdate != "function" || (typeof S.componentWillUpdate == "function" && S.componentWillUpdate(s, ke, k), typeof S.UNSAFE_componentWillUpdate == "function" && S.UNSAFE_componentWillUpdate(s, ke, k)), typeof S.componentDidUpdate == "function" && (r.flags |= 4), typeof S.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof S.componentDidUpdate != "function" || w === n.memoizedProps && ne === n.memoizedState || (r.flags |= 4), typeof S.getSnapshotBeforeUpdate != "function" || w === n.memoizedProps && ne === n.memoizedState || (r.flags |= 1024), r.memoizedProps = s, r.memoizedState = ke), S.props = s, S.state = ke, S.context = k, s = B) : (typeof S.componentDidUpdate != "function" || w === n.memoizedProps && ne === n.memoizedState || (r.flags |= 4), typeof S.getSnapshotBeforeUpdate != "function" || w === n.memoizedProps && ne === n.memoizedState || (r.flags |= 1024), s = !1);
    }
    return Of(n, r, o, s, h, d);
  }
  function Of(n, r, o, s, d, h) {
    $l(n, r);
    var S = (r.flags & 128) !== 0;
    if (!s && !S)
      return d && Lh(r, o, !1), Fn(n, r, h);
    s = r.stateNode, qh.current = r;
    var w = S && typeof o.getDerivedStateFromError != "function" ? null : s.render();
    return r.flags |= 1, n !== null && S ? (r.child = Du(r, n.child, null, h), r.child = Du(r, null, w, h)) : $n(n, r, w, h), r.memoizedState = s.state, d && Lh(r, o, !0), r.child;
  }
  function Pg(n) {
    var r = n.stateNode;
    r.pendingContext ? Ri(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Ri(n, r.context, !1), Cp(n, r.containerInfo);
  }
  function Xh(n, r, o, s, d) {
    return Tu(), Kn(d), r.flags |= 256, $n(n, r, o, s), r.child;
  }
  var cc = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Fl(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Zh(n, r, o) {
    var s = r.pendingProps, d = He.current, h = !1, S = (r.flags & 128) !== 0, w;
    if ((w = S) || (w = n !== null && n.memoizedState === null ? !1 : (d & 2) !== 0), w ? (h = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (d |= 1), $t(He, d & 1), n === null)
      return sf(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (S = s.children, n = s.fallback, h ? (s = r.mode, h = r.child, S = { mode: "hidden", children: S }, !(s & 1) && h !== null ? (h.childLanes = 0, h.pendingProps = S) : h = Wf(S, s, 0, null), n = Wl(n, s, o, null), h.return = r, n.return = r, h.sibling = n, r.child = h, r.child.memoizedState = Fl(o), r.memoizedState = cc, n) : Af(r, S));
    if (d = n.memoizedState, d !== null && (w = d.dehydrated, w !== null))
      return Dp(n, r, S, s, w, d, o);
    if (h) {
      h = s.fallback, S = r.mode, d = n.child, w = d.sibling;
      var k = { mode: "hidden", children: s.children };
      return !(S & 1) && r.child !== d ? (s = r.child, s.childLanes = 0, s.pendingProps = k, r.deletions = null) : (s = el(d, k), s.subtreeFlags = d.subtreeFlags & 14680064), w !== null ? h = el(w, h) : (h = Wl(h, S, o, null), h.flags |= 2), h.return = r, s.return = r, s.sibling = h, r.child = s, s = h, h = r.child, S = n.child.memoizedState, S = S === null ? Fl(o) : { baseLanes: S.baseLanes | o, cachePool: null, transitions: S.transitions }, h.memoizedState = S, h.childLanes = n.childLanes & ~o, r.memoizedState = cc, s;
    }
    return h = n.child, n = h.sibling, s = el(h, { mode: "visible", children: s.children }), !(r.mode & 1) && (s.lanes = o), s.return = r, s.sibling = null, n !== null && (o = r.deletions, o === null ? (r.deletions = [n], r.flags |= 16) : o.push(n)), r.child = s, r.memoizedState = null, s;
  }
  function Af(n, r) {
    return r = Wf({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function kf(n, r, o, s) {
    return s !== null && Kn(s), Du(r, n.child, null, o), n = Af(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Dp(n, r, o, s, d, h, S) {
    if (o)
      return r.flags & 256 ? (r.flags &= -257, s = Rp(Error(f(422))), kf(n, r, S, s)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (h = s.fallback, d = r.mode, s = Wf({ mode: "visible", children: s.children }, d, 0, null), h = Wl(h, d, S, null), h.flags |= 2, s.return = r, h.return = r, s.sibling = h, r.child = s, r.mode & 1 && Du(r, n.child, null, S), r.child.memoizedState = Fl(S), r.memoizedState = cc, h);
    if (!(r.mode & 1))
      return kf(n, r, S, null);
    if (d.data === "$!") {
      if (s = d.nextSibling && d.nextSibling.dataset, s)
        var w = s.dgst;
      return s = w, h = Error(f(419)), s = Rp(h, s, void 0), kf(n, r, S, s);
    }
    if (w = (S & n.childLanes) !== 0, oa || w) {
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
    return d.data === "$?" ? (r.flags |= 128, r.child = n.child, r = $p.bind(null, n), d._reactRetry = r, null) : (n = h.treeContext, Ca = Ea(d.nextSibling), Sa = r, dn = !0, Ha = null, n !== null && (ea[ta++] = na, ea[ta++] = pr, ea[ta++] = di, na = n.id, pr = n.overflow, di = r), r = Af(r, s.children), r.flags |= 4096, r);
  }
  function Jh(n, r, o) {
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
    if ($n(n, r, s.children, o), s = He.current, s & 2)
      s = s & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && Jh(n, o, r);
            else if (n.tag === 19)
              Jh(n, o, r);
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
    if ($t(He, s), !(r.mode & 1))
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
  function Fn(n, r, o) {
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
        Pg(r), Tu();
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
        $t(bu, s._currentValue), s._currentValue = d;
        break;
      case 13:
        if (s = r.memoizedState, s !== null)
          return s.dehydrated !== null ? ($t(He, He.current & 1), r.flags |= 128, null) : o & r.child.childLanes ? Zh(n, r, o) : ($t(He, He.current & 1), n = Fn(n, r, o), n !== null ? n.sibling : null);
        $t(He, He.current & 1);
        break;
      case 19:
        if (s = (o & r.childLanes) !== 0, n.flags & 128) {
          if (s)
            return Op(n, r, o);
          r.flags |= 128;
        }
        if (d = r.memoizedState, d !== null && (d.rendering = null, d.tail = null, d.lastEffect = null), $t(He, He.current), s)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, la(n, r, o);
    }
    return Fn(n, r, o);
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
      n = r.stateNode, Ko(Oi.current);
      var h = null;
      switch (o) {
        case "input":
          d = hn(n, d), s = hn(n, s), h = [];
          break;
        case "select":
          d = D({}, d, { value: void 0 }), s = D({}, s, { value: void 0 }), h = [];
          break;
        case "textarea":
          d = wr(n, d), s = wr(n, s), h = [];
          break;
        default:
          typeof d.onClick != "function" && typeof s.onClick == "function" && (n.onclick = rf);
      }
      Pt(o, s);
      var S;
      o = null;
      for (B in d)
        if (!s.hasOwnProperty(B) && d.hasOwnProperty(B) && d[B] != null)
          if (B === "style") {
            var w = d[B];
            for (S in w)
              w.hasOwnProperty(S) && (o || (o = {}), o[S] = "");
          } else
            B !== "dangerouslySetInnerHTML" && B !== "children" && B !== "suppressContentEditableWarning" && B !== "suppressHydrationWarning" && B !== "autoFocus" && (T.hasOwnProperty(B) ? h || (h = []) : (h = h || []).push(B, null));
      for (B in s) {
        var k = s[B];
        if (w = d != null ? d[B] : void 0, s.hasOwnProperty(B) && k !== w && (k != null || w != null))
          if (B === "style")
            if (w) {
              for (S in w)
                !w.hasOwnProperty(S) || k && k.hasOwnProperty(S) || (o || (o = {}), o[S] = "");
              for (S in k)
                k.hasOwnProperty(S) && w[S] !== k[S] && (o || (o = {}), o[S] = k[S]);
            } else
              o || (h || (h = []), h.push(
                B,
                o
              )), o = k;
          else
            B === "dangerouslySetInnerHTML" ? (k = k ? k.__html : void 0, w = w ? w.__html : void 0, k != null && w !== k && (h = h || []).push(B, k)) : B === "children" ? typeof k != "string" && typeof k != "number" || (h = h || []).push(B, "" + k) : B !== "suppressContentEditableWarning" && B !== "suppressHydrationWarning" && (T.hasOwnProperty(B) ? (k != null && B === "onScroll" && tn("scroll", n), h || w === k || (h = [])) : (h = h || []).push(B, k));
      }
      o && (h = h || []).push("style", o);
      var B = h;
      (r.updateQueue = B) && (r.flags |= 4);
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
  function Nr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, o = 0, s = 0;
    if (r)
      for (var d = n.child; d !== null; )
        o |= d.lanes | d.childLanes, s |= d.subtreeFlags & 14680064, s |= d.flags & 14680064, d.return = n, d = d.sibling;
    else
      for (d = n.child; d !== null; )
        o |= d.lanes | d.childLanes, s |= d.subtreeFlags, s |= d.flags, d.return = n, d = d.sibling;
    return n.subtreeFlags |= s, n.childLanes = o, r;
  }
  function $g(n, r, o) {
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
        return Nr(r), null;
      case 1:
        return Wn(r.type) && Jr(), Nr(r), null;
      case 3:
        return s = r.stateNode, Au(), $e(dt), $e(ir), Va(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), (n === null || n.child === null) && (cf(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Ha !== null && (Up(Ha), Ha = null))), zu(n, r), Nr(r), null;
      case 5:
        qe(r);
        var d = Ko(ec.current);
        if (o = r.type, n !== null && r.stateNode != null)
          Uu(n, r, o, s, d), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!s) {
            if (r.stateNode === null)
              throw Error(f(166));
            return Nr(r), null;
          }
          if (n = Ko(Oi.current), cf(r)) {
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
                Rr(s, h), tn("invalid", s);
            }
            Pt(o, h), d = null;
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
                Mn(s), xr(s);
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
                  n._wrapperState = { wasMultiple: !!s.multiple }, d = D({}, s, { value: void 0 }), tn("invalid", n);
                  break;
                case "textarea":
                  Rr(n, s), d = wr(n, s), tn("invalid", n);
                  break;
                default:
                  d = s;
              }
              Pt(o, d), w = d;
              for (h in w)
                if (w.hasOwnProperty(h)) {
                  var k = w[h];
                  h === "style" ? Ct(n, k) : h === "dangerouslySetInnerHTML" ? (k = k ? k.__html : void 0, k != null && va(n, k)) : h === "children" ? typeof k == "string" ? (o !== "textarea" || k !== "") && ha(n, k) : typeof k == "number" && ha(n, "" + k) : h !== "suppressContentEditableWarning" && h !== "suppressHydrationWarning" && h !== "autoFocus" && (T.hasOwnProperty(h) ? k != null && h === "onScroll" && tn("scroll", n) : k != null && ze(n, h, k, S));
                }
              switch (o) {
                case "input":
                  Mn(n), xn(n, s, !1);
                  break;
                case "textarea":
                  Mn(n), xr(n);
                  break;
                case "option":
                  s.value != null && n.setAttribute("value", "" + ot(s.value));
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
        return Nr(r), null;
      case 6:
        if (n && r.stateNode != null)
          Ba(n, r, n.memoizedProps, s);
        else {
          if (typeof s != "string" && r.stateNode === null)
            throw Error(f(166));
          if (o = Ko(ec.current), Ko(Oi.current), cf(r)) {
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
        return Nr(r), null;
      case 13:
        if ($e(He), s = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (dn && Ca !== null && r.mode & 1 && !(r.flags & 128))
            zh(), Tu(), r.flags |= 98560, h = !1;
          else if (h = cf(r), s !== null && s.dehydrated !== null) {
            if (n === null) {
              if (!h)
                throw Error(f(318));
              if (h = r.memoizedState, h = h !== null ? h.dehydrated : null, !h)
                throw Error(f(317));
              h[ja] = r;
            } else
              Tu(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Nr(r), h = !1;
          } else
            Ha !== null && (Up(Ha), Ha = null), h = !0;
          if (!h)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = o, r) : (s = s !== null, s !== (n !== null && n.memoizedState !== null) && s && (r.child.flags |= 8192, r.mode & 1 && (n === null || He.current & 1 ? Jn === 0 && (Jn = 3) : mc())), r.updateQueue !== null && (r.flags |= 4), Nr(r), null);
      case 4:
        return Au(), zu(n, r), n === null && bi(r.stateNode.containerInfo), Nr(r), null;
      case 10:
        return gp(r.type._context), Nr(r), null;
      case 17:
        return Wn(r.type) && Jr(), Nr(r), null;
      case 19:
        if ($e(He), h = r.memoizedState, h === null)
          return Nr(r), null;
        if (s = (r.flags & 128) !== 0, S = h.rendering, S === null)
          if (s)
            kn(h, !1);
          else {
            if (Jn !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (S = jt(n), S !== null) {
                  for (r.flags |= 128, kn(h, !1), s = S.updateQueue, s !== null && (r.updateQueue = s, r.flags |= 4), r.subtreeFlags = 0, s = o, o = r.child; o !== null; )
                    h = o, n = s, h.flags &= 14680066, S = h.alternate, S === null ? (h.childLanes = 0, h.lanes = n, h.child = null, h.subtreeFlags = 0, h.memoizedProps = null, h.memoizedState = null, h.updateQueue = null, h.dependencies = null, h.stateNode = null) : (h.childLanes = S.childLanes, h.lanes = S.lanes, h.child = S.child, h.subtreeFlags = 0, h.deletions = null, h.memoizedProps = S.memoizedProps, h.memoizedState = S.memoizedState, h.updateQueue = S.updateQueue, h.type = S.type, n = S.dependencies, h.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), o = o.sibling;
                  return $t(He, He.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            h.tail !== null && ln() > Wu && (r.flags |= 128, s = !0, kn(h, !1), r.lanes = 4194304);
          }
        else {
          if (!s)
            if (n = jt(S), n !== null) {
              if (r.flags |= 128, s = !0, o = n.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), kn(h, !0), h.tail === null && h.tailMode === "hidden" && !S.alternate && !dn)
                return Nr(r), null;
            } else
              2 * ln() - h.renderingStartTime > Wu && o !== 1073741824 && (r.flags |= 128, s = !0, kn(h, !1), r.lanes = 4194304);
          h.isBackwards ? (S.sibling = r.child, r.child = S) : (o = h.last, o !== null ? o.sibling = S : r.child = S, h.last = S);
        }
        return h.tail !== null ? (r = h.tail, h.rendering = r, h.tail = r.sibling, h.renderingStartTime = ln(), r.sibling = null, o = He.current, $t(He, s ? o & 1 | 2 : o & 1), r) : (Nr(r), null);
      case 22:
      case 23:
        return If(), s = r.memoizedState !== null, n !== null && n.memoizedState !== null !== s && (r.flags |= 8192), s && r.mode & 1 ? ua & 1073741824 && (Nr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Nr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(f(156, r.tag));
  }
  function Fg(n, r) {
    switch (uf(r), r.tag) {
      case 1:
        return Wn(r.type) && Jr(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Au(), $e(dt), $e(ir), Va(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return qe(r), null;
      case 13:
        if ($e(He), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(f(340));
          Tu();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return $e(He), null;
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
  var ju = !1, vr = !1, Lf = typeof WeakSet == "function" ? WeakSet : Set, Oe = null;
  function Pu(n, r) {
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
  function Hg(n, r) {
    if (lp = pu, n = Sh(), $s(n)) {
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
            var S = 0, w = -1, k = -1, B = 0, ie = 0, ue = n, ne = null;
            t:
              for (; ; ) {
                for (var be; ue !== o || d !== 0 && ue.nodeType !== 3 || (w = S + d), ue !== h || s !== 0 && ue.nodeType !== 3 || (k = S + s), ue.nodeType === 3 && (S += ue.nodeValue.length), (be = ue.firstChild) !== null; )
                  ne = ue, ue = be;
                for (; ; ) {
                  if (ue === n)
                    break t;
                  if (ne === o && ++B === d && (w = S), ne === h && ++ie === s && (k = S), (be = ue.nextSibling) !== null)
                    break;
                  ue = ne, ne = ue.parentNode;
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
    for (up = { focusedElem: n, selectionRange: o }, pu = !1, Oe = r; Oe !== null; )
      if (r = Oe, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, Oe = n;
      else
        for (; Oe !== null; ) {
          r = Oe;
          try {
            var ke = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (ke !== null) {
                    var Ue = ke.memoizedProps, Hn = ke.memoizedState, U = r.stateNode, L = U.getSnapshotBeforeUpdate(r.elementType === r.type ? Ue : ra(r.type, Ue), Hn);
                    U.__reactInternalSnapshotBeforeUpdate = L;
                  }
                  break;
                case 3:
                  var $ = r.stateNode.containerInfo;
                  $.nodeType === 1 ? $.textContent = "" : $.nodeType === 9 && $.documentElement && $.removeChild($.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(f(163));
              }
          } catch (de) {
            Ln(r, r.return, de);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, Oe = n;
            break;
          }
          Oe = r.return;
        }
    return ke = Mf, Mf = !1, ke;
  }
  function $u(n, r, o) {
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
  function em(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, em(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[ja], delete r[Qs], delete r[dp], delete r[Ng], delete r[Lg])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function kp(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function tm(n) {
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
  function Fu(n, r, o) {
    var s = n.tag;
    if (s === 5 || s === 6)
      n = n.stateNode, r ? o.insertBefore(n, r) : o.appendChild(n);
    else if (s !== 4 && (n = n.child, n !== null))
      for (Fu(n, r, o), n = n.sibling; n !== null; )
        Fu(n, r, o), n = n.sibling;
  }
  var gn = null, or = !1;
  function Ur(n, r, o) {
    for (o = o.child; o !== null; )
      Hu(n, r, o), o = o.sibling;
  }
  function Hu(n, r, o) {
    if (Qr && typeof Qr.onCommitFiberUnmount == "function")
      try {
        Qr.onCommitFiberUnmount(Ao, o);
      } catch {
      }
    switch (o.tag) {
      case 5:
        vr || Pu(o, r);
      case 6:
        var s = gn, d = or;
        gn = null, Ur(n, r, o), gn = s, or = d, gn !== null && (or ? (n = gn, o = o.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(o) : n.removeChild(o)) : gn.removeChild(o.stateNode));
        break;
      case 18:
        gn !== null && (or ? (n = gn, o = o.stateNode, n.nodeType === 8 ? fp(n.parentNode, o) : n.nodeType === 1 && fp(n, o), Ua(n)) : fp(gn, o.stateNode));
        break;
      case 4:
        s = gn, d = or, gn = o.stateNode.containerInfo, or = !0, Ur(n, r, o), gn = s, or = d;
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
        Ur(n, r, o);
        break;
      case 1:
        if (!vr && (Pu(o, r), s = o.stateNode, typeof s.componentWillUnmount == "function"))
          try {
            s.props = o.memoizedProps, s.state = o.memoizedState, s.componentWillUnmount();
          } catch (w) {
            Ln(o, r, w);
          }
        Ur(n, r, o);
        break;
      case 21:
        Ur(n, r, o);
        break;
      case 22:
        o.mode & 1 ? (vr = (s = vr) || o.memoizedState !== null, Ur(n, r, o), vr = s) : Ur(n, r, o);
        break;
      default:
        Ur(n, r, o);
    }
  }
  function Vu(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var o = n.stateNode;
      o === null && (o = n.stateNode = new Lf()), r.forEach(function(s) {
        var d = Gg.bind(null, n, s);
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
          Hu(h, S, d), gn = null, or = !1;
          var k = d.alternate;
          k !== null && (k.return = null), d.return = null;
        } catch (B) {
          Ln(d, r, B);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        nm(r, n), r = r.sibling;
  }
  function nm(n, r) {
    var o = n.alternate, s = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (lr(r, n), Ni(n), s & 4) {
          try {
            $u(3, n, n.return), zf(3, n);
          } catch (Ue) {
            Ln(n, n.return, Ue);
          }
          try {
            $u(5, n, n.return);
          } catch (Ue) {
            Ln(n, n.return, Ue);
          }
        }
        break;
      case 1:
        lr(r, n), Ni(n), s & 512 && o !== null && Pu(o, o.return);
        break;
      case 5:
        if (lr(r, n), Ni(n), s & 512 && o !== null && Pu(o, o.return), n.flags & 32) {
          var d = n.stateNode;
          try {
            ha(d, "");
          } catch (Ue) {
            Ln(n, n.return, Ue);
          }
        }
        if (s & 4 && (d = n.stateNode, d != null)) {
          var h = n.memoizedProps, S = o !== null ? o.memoizedProps : h, w = n.type, k = n.updateQueue;
          if (n.updateQueue = null, k !== null)
            try {
              w === "input" && h.type === "radio" && h.name != null && Rn(d, h), zn(w, S);
              var B = zn(w, h);
              for (S = 0; S < k.length; S += 2) {
                var ie = k[S], ue = k[S + 1];
                ie === "style" ? Ct(d, ue) : ie === "dangerouslySetInnerHTML" ? va(d, ue) : ie === "children" ? ha(d, ue) : ze(d, ie, ue, B);
              }
              switch (w) {
                case "input":
                  En(d, h);
                  break;
                case "textarea":
                  In(d, h);
                  break;
                case "select":
                  var ne = d._wrapperState.wasMultiple;
                  d._wrapperState.wasMultiple = !!h.multiple;
                  var be = h.value;
                  be != null ? yn(d, !!h.multiple, be, !1) : ne !== !!h.multiple && (h.defaultValue != null ? yn(
                    d,
                    !!h.multiple,
                    h.defaultValue,
                    !0
                  ) : yn(d, !!h.multiple, h.multiple ? [] : "", !1));
              }
              d[Qs] = h;
            } catch (Ue) {
              Ln(n, n.return, Ue);
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
          } catch (Ue) {
            Ln(n, n.return, Ue);
          }
        }
        break;
      case 3:
        if (lr(r, n), Ni(n), s & 4 && o !== null && o.memoizedState.isDehydrated)
          try {
            Ua(r.containerInfo);
          } catch (Ue) {
            Ln(n, n.return, Ue);
          }
        break;
      case 4:
        lr(r, n), Ni(n);
        break;
      case 13:
        lr(r, n), Ni(n), d = n.child, d.flags & 8192 && (h = d.memoizedState !== null, d.stateNode.isHidden = h, !h || d.alternate !== null && d.alternate.memoizedState !== null || (Pf = ln())), s & 4 && Vu(n);
        break;
      case 22:
        if (ie = o !== null && o.memoizedState !== null, n.mode & 1 ? (vr = (B = vr) || ie, lr(r, n), vr = B) : lr(r, n), Ni(n), s & 8192) {
          if (B = n.memoizedState !== null, (n.stateNode.isHidden = B) && !ie && n.mode & 1)
            for (Oe = n, ie = n.child; ie !== null; ) {
              for (ue = Oe = ie; Oe !== null; ) {
                switch (ne = Oe, be = ne.child, ne.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    $u(4, ne, ne.return);
                    break;
                  case 1:
                    Pu(ne, ne.return);
                    var ke = ne.stateNode;
                    if (typeof ke.componentWillUnmount == "function") {
                      s = ne, o = ne.return;
                      try {
                        r = s, ke.props = r.memoizedProps, ke.state = r.memoizedState, ke.componentWillUnmount();
                      } catch (Ue) {
                        Ln(s, o, Ue);
                      }
                    }
                    break;
                  case 5:
                    Pu(ne, ne.return);
                    break;
                  case 22:
                    if (ne.memoizedState !== null) {
                      rm(ue);
                      continue;
                    }
                }
                be !== null ? (be.return = ne, Oe = be) : rm(ue);
              }
              ie = ie.sibling;
            }
          e:
            for (ie = null, ue = n; ; ) {
              if (ue.tag === 5) {
                if (ie === null) {
                  ie = ue;
                  try {
                    d = ue.stateNode, B ? (h = d.style, typeof h.setProperty == "function" ? h.setProperty("display", "none", "important") : h.display = "none") : (w = ue.stateNode, k = ue.memoizedProps.style, S = k != null && k.hasOwnProperty("display") ? k.display : null, w.style.display = Be("display", S));
                  } catch (Ue) {
                    Ln(n, n.return, Ue);
                  }
                }
              } else if (ue.tag === 6) {
                if (ie === null)
                  try {
                    ue.stateNode.nodeValue = B ? "" : ue.memoizedProps;
                  } catch (Ue) {
                    Ln(n, n.return, Ue);
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
                ie === ue && (ie = null), ue = ue.return;
              }
              ie === ue && (ie = null), ue.sibling.return = ue.return, ue = ue.sibling;
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
            var h = tm(n);
            Fu(n, h, d);
            break;
          case 3:
          case 4:
            var S = s.stateNode.containerInfo, w = tm(n);
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
    Oe = n, Np(n);
  }
  function Np(n, r, o) {
    for (var s = (n.mode & 1) !== 0; Oe !== null; ) {
      var d = Oe, h = d.child;
      if (d.tag === 22 && s) {
        var S = d.memoizedState !== null || ju;
        if (!S) {
          var w = d.alternate, k = w !== null && w.memoizedState !== null || vr;
          w = ju;
          var B = vr;
          if (ju = S, (vr = k) && !B)
            for (Oe = d; Oe !== null; )
              S = Oe, k = S.child, S.tag === 22 && S.memoizedState !== null ? Lp(d) : k !== null ? (k.return = S, Oe = k) : Lp(d);
          for (; h !== null; )
            Oe = h, Np(h), h = h.sibling;
          Oe = d, ju = w, vr = B;
        }
        Iu(n);
      } else
        d.subtreeFlags & 8772 && h !== null ? (h.return = d, Oe = h) : Iu(n);
    }
  }
  function Iu(n) {
    for (; Oe !== null; ) {
      var r = Oe;
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
                    var d = r.elementType === r.type ? o.memoizedProps : ra(r.type, o.memoizedProps);
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
                  var B = r.alternate;
                  if (B !== null) {
                    var ie = B.memoizedState;
                    if (ie !== null) {
                      var ue = ie.dehydrated;
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
        } catch (ne) {
          Ln(r, r.return, ne);
        }
      }
      if (r === n) {
        Oe = null;
        break;
      }
      if (o = r.sibling, o !== null) {
        o.return = r.return, Oe = o;
        break;
      }
      Oe = r.return;
    }
  }
  function rm(n) {
    for (; Oe !== null; ) {
      var r = Oe;
      if (r === n) {
        Oe = null;
        break;
      }
      var o = r.sibling;
      if (o !== null) {
        o.return = r.return, Oe = o;
        break;
      }
      Oe = r.return;
    }
  }
  function Lp(n) {
    for (; Oe !== null; ) {
      var r = Oe;
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
        Oe = null;
        break;
      }
      var w = r.sibling;
      if (w !== null) {
        w.return = r.return, Oe = w;
        break;
      }
      Oe = r.return;
    }
  }
  var Ig = Math.ceil, Hl = ve.ReactCurrentDispatcher, jf = ve.ReactCurrentOwner, Ya = ve.ReactCurrentBatchConfig, Dt = 0, Nn = null, pn = null, Zn = 0, ua = 0, Bu = nn(0), Jn = 0, pc = null, Vl = 0, Yu = 0, Mp = 0, Zo = null, Lr = null, Pf = 0, Wu = 1 / 0, fo = null, $f = !1, zp = null, Wa = null, Ku = !1, Ka = null, Ff = 0, vc = 0, Hf = null, hc = -1, Il = 0;
  function ur() {
    return Dt & 6 ? ln() : hc !== -1 ? hc : hc = ln();
  }
  function po(n) {
    return n.mode & 1 ? Dt & 2 && Zn !== 0 ? Zn & -Zn : Mg.transition !== null ? (Il === 0 && (Il = El()), Il) : (n = At, n !== 0 || (n = window.event, n = n === void 0 ? 16 : ks(n.type)), n) : 1;
  }
  function bn(n, r, o, s) {
    if (50 < vc)
      throw vc = 0, Hf = null, Error(f(185));
    No(n, o, s), (!(Dt & 2) || n !== Nn) && (n === Nn && (!(Dt & 2) && (Yu |= o), Jn === 4 && Li(n, Zn)), er(n, s), o === 1 && Dt === 0 && !(r.mode & 1) && (Wu = ln() + 500, Ho && xi()));
  }
  function er(n, r) {
    var o = n.callbackNode;
    ko(n, r);
    var s = Si(n, n === Nn ? Zn : 0);
    if (s === 0)
      o !== null && on(o), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = s & -s, n.callbackPriority !== r) {
      if (o != null && on(o), r === 1)
        n.tag === 0 ? Mh(Gu.bind(null, n)) : of(Gu.bind(null, n)), Nh(function() {
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
            o = Tt;
            break;
          case 536870912:
            o = Gi;
            break;
          default:
            o = Tt;
        }
        o = fm(o, Vf.bind(null, n));
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
      var h = im();
      (Nn !== n || Zn !== r) && (fo = null, Wu = ln() + 500, Yl(n, r));
      do
        try {
          Yg();
          break;
        } catch (w) {
          am(n, w);
        }
      while (!0);
      yp(), Hl.current = h, Dt = d, pn !== null ? r = 0 : (Nn = null, Zn = 0, r = Jn);
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
            Jo(n, Lr, fo);
            break;
          case 3:
            if (Li(n, s), (s & 130023424) === s && (r = Pf + 500 - ln(), 10 < r)) {
              if (Si(n, 0) !== 0)
                break;
              if (d = n.suspendedLanes, (d & s) !== s) {
                ur(), n.pingedLanes |= n.suspendedLanes & d;
                break;
              }
              n.timeoutHandle = Ws(Jo.bind(null, n, Lr, fo), r);
              break;
            }
            Jo(n, Lr, fo);
            break;
          case 4:
            if (Li(n, s), (s & 4194240) === s)
              break;
            for (r = n.eventTimes, d = -1; 0 < s; ) {
              var S = 31 - Mr(s);
              h = 1 << S, S = r[S], S > d && (d = S), s &= ~h;
            }
            if (s = d, s = ln() - s, s = (120 > s ? 120 : 480 > s ? 480 : 1080 > s ? 1080 : 1920 > s ? 1920 : 3e3 > s ? 3e3 : 4320 > s ? 4320 : 1960 * Ig(s / 1960)) - s, 10 < s) {
              n.timeoutHandle = Ws(Jo.bind(null, n, Lr, fo), s);
              break;
            }
            Jo(n, Lr, fo);
            break;
          case 5:
            Jo(n, Lr, fo);
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
    return n.current.memoizedState.isDehydrated && (Yl(n, r).flags |= 256), n = Bf(n, r), n !== 2 && (r = Lr, Lr = o, r !== null && Up(r)), n;
  }
  function Up(n) {
    Lr === null ? Lr = n : Lr.push.apply(Lr, n);
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
      var o = 31 - Mr(r), s = 1 << o;
      n[o] = -1, r &= ~s;
    }
  }
  function Gu(n) {
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
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Jo(n, Lr, fo), er(n, ln()), null;
  }
  function Pp(n, r) {
    var o = Dt;
    Dt |= 1;
    try {
      return n(r);
    } finally {
      Dt = o, Dt === 0 && (Wu = ln() + 500, Ho && xi());
    }
  }
  function Mi(n) {
    Ka !== null && Ka.tag === 0 && !(Dt & 6) && Qu();
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
    ua = Bu.current, $e(Bu);
  }
  function Yl(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var o = n.timeoutHandle;
    if (o !== -1 && (n.timeoutHandle = -1, Ks(o)), pn !== null)
      for (o = pn.return; o !== null; ) {
        var s = o;
        switch (uf(s), s.tag) {
          case 1:
            s = s.type.childContextTypes, s != null && Jr();
            break;
          case 3:
            Au(), $e(dt), $e(ir), Va();
            break;
          case 5:
            qe(s);
            break;
          case 4:
            Au();
            break;
          case 13:
            $e(He);
            break;
          case 19:
            $e(He);
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
    if (Nn = n, pn = n = el(n.current, null), Zn = ua = r, Jn = 0, pc = null, Mp = Yu = Vl = 0, Lr = Zo = null, kr !== null) {
      for (r = 0; r < kr.length; r++)
        if (o = kr[r], s = o.interleaved, s !== null) {
          o.interleaved = null;
          var d = s.next, h = o.pending;
          if (h !== null) {
            var S = h.next;
            h.next = d, s.next = S;
          }
          o.pending = s;
        }
      kr = null;
    }
    return n;
  }
  function am(n, r) {
    do {
      var o = pn;
      try {
        if (yp(), tc.current = xf, Pn) {
          for (var s = Tn.memoizedState; s !== null; ) {
            var d = s.queue;
            d !== null && (d.pending = null), s = s.next;
          }
          Pn = !1;
        }
        if (Nl = 0, Q = jn = Tn = null, Ze = !1, Ai = 0, jf.current = null, o === null || o.return === null) {
          Jn = 1, pc = r, pn = null;
          break;
        }
        e: {
          var h = n, S = o.return, w = o, k = r;
          if (r = Zn, w.flags |= 32768, k !== null && typeof k == "object" && typeof k.then == "function") {
            var B = k, ie = w, ue = ie.tag;
            if (!(ie.mode & 1) && (ue === 0 || ue === 11 || ue === 15)) {
              var ne = ie.alternate;
              ne ? (ie.updateQueue = ne.updateQueue, ie.memoizedState = ne.memoizedState, ie.lanes = ne.lanes) : (ie.updateQueue = null, ie.memoizedState = null);
            }
            var be = Qh(S);
            if (be !== null) {
              be.flags &= -257, xp(be, S, w, h, r), be.mode & 1 && uc(h, B, r), r = be, k = B;
              var ke = r.updateQueue;
              if (ke === null) {
                var Ue = /* @__PURE__ */ new Set();
                Ue.add(k), r.updateQueue = Ue;
              } else
                ke.add(k);
              break e;
            } else {
              if (!(r & 1)) {
                uc(h, B, r), mc();
                break e;
              }
              k = Error(f(426));
            }
          } else if (dn && w.mode & 1) {
            var Hn = Qh(S);
            if (Hn !== null) {
              !(Hn.flags & 65536) && (Hn.flags |= 256), xp(Hn, S, w, h, r), Kn(qo(k, w));
              break e;
            }
          }
          h = k = qo(k, w), Jn !== 4 && (Jn = 2), Zo === null ? Zo = [h] : Zo.push(h), h = S;
          do {
            switch (h.tag) {
              case 3:
                h.flags |= 65536, r &= -r, h.lanes |= r;
                var U = Kh(h, k, r);
                Ph(h, U);
                break e;
              case 1:
                w = k;
                var L = h.type, $ = h.stateNode;
                if (!(h.flags & 128) && (typeof L.getDerivedStateFromError == "function" || $ !== null && typeof $.componentDidCatch == "function" && (Wa === null || !Wa.has($)))) {
                  h.flags |= 65536, r &= -r, h.lanes |= r;
                  var de = Gh(h, w, r);
                  Ph(h, de);
                  break e;
                }
            }
            h = h.return;
          } while (h !== null);
        }
        lm(o);
      } catch (Fe) {
        r = Fe, pn === o && o !== null && (pn = o = o.return);
        continue;
      }
      break;
    } while (!0);
  }
  function im() {
    var n = Hl.current;
    return Hl.current = xf, n === null ? xf : n;
  }
  function mc() {
    (Jn === 0 || Jn === 3 || Jn === 2) && (Jn = 4), Nn === null || !(Vl & 268435455) && !(Yu & 268435455) || Li(Nn, Zn);
  }
  function Bf(n, r) {
    var o = Dt;
    Dt |= 2;
    var s = im();
    (Nn !== n || Zn !== r) && (fo = null, Yl(n, r));
    do
      try {
        Bg();
        break;
      } catch (d) {
        am(n, d);
      }
    while (!0);
    if (yp(), Dt = o, Hl.current = s, pn !== null)
      throw Error(f(261));
    return Nn = null, Zn = 0, Jn;
  }
  function Bg() {
    for (; pn !== null; )
      om(pn);
  }
  function Yg() {
    for (; pn !== null && !Or(); )
      om(pn);
  }
  function om(n) {
    var r = cm(n.alternate, n, ua);
    n.memoizedProps = n.pendingProps, r === null ? lm(n) : pn = r, jf.current = null;
  }
  function lm(n) {
    var r = n;
    do {
      var o = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (o = Fg(o, r), o !== null) {
          o.flags &= 32767, pn = o;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Jn = 6, pn = null;
          return;
        }
      } else if (o = $g(o, r, ua), o !== null) {
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
    while (Ka !== null);
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
    if (Rs(n, h), n === Nn && (pn = Nn = null, Zn = 0), !(o.subtreeFlags & 2064) && !(o.flags & 2064) || Ku || (Ku = !0, fm(Tt, function() {
      return Qu(), null;
    })), h = (o.flags & 15990) !== 0, o.subtreeFlags & 15990 || h) {
      h = Ya.transition, Ya.transition = null;
      var S = At;
      At = 1;
      var w = Dt;
      Dt |= 4, jf.current = null, Hg(n, o), nm(o, n), bl(up), pu = !!lp, up = lp = null, n.current = o, Vg(o), Ei(), Dt = w, At = S, Ya.transition = h;
    } else
      n.current = o;
    if (Ku && (Ku = !1, Ka = n, Ff = d), h = n.pendingLanes, h === 0 && (Wa = null), Cs(o.stateNode), er(n, ln()), r !== null)
      for (s = n.onRecoverableError, o = 0; o < r.length; o++)
        d = r[o], s(d.value, { componentStack: d.stack, digest: d.digest });
    if ($f)
      throw $f = !1, n = zp, zp = null, n;
    return Ff & 1 && n.tag !== 0 && Qu(), h = n.pendingLanes, h & 1 ? n === Hf ? vc++ : (vc = 0, Hf = n) : vc = 0, xi(), null;
  }
  function Qu() {
    if (Ka !== null) {
      var n = Ds(Ff), r = Ya.transition, o = At;
      try {
        if (Ya.transition = null, At = 16 > n ? 16 : n, Ka === null)
          var s = !1;
        else {
          if (n = Ka, Ka = null, Ff = 0, Dt & 6)
            throw Error(f(331));
          var d = Dt;
          for (Dt |= 4, Oe = n.current; Oe !== null; ) {
            var h = Oe, S = h.child;
            if (Oe.flags & 16) {
              var w = h.deletions;
              if (w !== null) {
                for (var k = 0; k < w.length; k++) {
                  var B = w[k];
                  for (Oe = B; Oe !== null; ) {
                    var ie = Oe;
                    switch (ie.tag) {
                      case 0:
                      case 11:
                      case 15:
                        $u(8, ie, h);
                    }
                    var ue = ie.child;
                    if (ue !== null)
                      ue.return = ie, Oe = ue;
                    else
                      for (; Oe !== null; ) {
                        ie = Oe;
                        var ne = ie.sibling, be = ie.return;
                        if (em(ie), ie === B) {
                          Oe = null;
                          break;
                        }
                        if (ne !== null) {
                          ne.return = be, Oe = ne;
                          break;
                        }
                        Oe = be;
                      }
                  }
                }
                var ke = h.alternate;
                if (ke !== null) {
                  var Ue = ke.child;
                  if (Ue !== null) {
                    ke.child = null;
                    do {
                      var Hn = Ue.sibling;
                      Ue.sibling = null, Ue = Hn;
                    } while (Ue !== null);
                  }
                }
                Oe = h;
              }
            }
            if (h.subtreeFlags & 2064 && S !== null)
              S.return = h, Oe = S;
            else
              e:
                for (; Oe !== null; ) {
                  if (h = Oe, h.flags & 2048)
                    switch (h.tag) {
                      case 0:
                      case 11:
                      case 15:
                        $u(9, h, h.return);
                    }
                  var U = h.sibling;
                  if (U !== null) {
                    U.return = h.return, Oe = U;
                    break e;
                  }
                  Oe = h.return;
                }
          }
          var L = n.current;
          for (Oe = L; Oe !== null; ) {
            S = Oe;
            var $ = S.child;
            if (S.subtreeFlags & 2064 && $ !== null)
              $.return = S, Oe = $;
            else
              e:
                for (S = L; Oe !== null; ) {
                  if (w = Oe, w.flags & 2048)
                    try {
                      switch (w.tag) {
                        case 0:
                        case 11:
                        case 15:
                          zf(9, w);
                      }
                    } catch (Fe) {
                      Ln(w, w.return, Fe);
                    }
                  if (w === S) {
                    Oe = null;
                    break e;
                  }
                  var de = w.sibling;
                  if (de !== null) {
                    de.return = w.return, Oe = de;
                    break e;
                  }
                  Oe = w.return;
                }
          }
          if (Dt = d, xi(), Qr && typeof Qr.onPostCommitFiberRoot == "function")
            try {
              Qr.onPostCommitFiberRoot(Ao, n);
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
  function um(n, r, o) {
    r = qo(o, r), r = Kh(n, r, 1), n = Wo(n, r, 1), r = ur(), n !== null && (No(n, 1, r), er(n, r));
  }
  function Ln(n, r, o) {
    if (n.tag === 3)
      um(n, n, o);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          um(r, n, o);
          break;
        } else if (r.tag === 1) {
          var s = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (Wa === null || !Wa.has(s))) {
            n = qo(o, n), n = Gh(r, n, 1), r = Wo(r, n, 1), n = ur(), r !== null && (No(r, 1, n), er(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function Kg(n, r, o) {
    var s = n.pingCache;
    s !== null && s.delete(r), r = ur(), n.pingedLanes |= n.suspendedLanes & o, Nn === n && (Zn & o) === o && (Jn === 4 || Jn === 3 && (Zn & 130023424) === Zn && 500 > ln() - Pf ? Yl(n, 0) : Mp |= o), er(n, r);
  }
  function sm(n, r) {
    r === 0 && (n.mode & 1 ? (r = su, su <<= 1, !(su & 130023424) && (su = 4194304)) : r = 1);
    var o = ur();
    n = uo(n, r), n !== null && (No(n, r, o), er(n, o));
  }
  function $p(n) {
    var r = n.memoizedState, o = 0;
    r !== null && (o = r.retryLane), sm(n, o);
  }
  function Gg(n, r) {
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
    s !== null && s.delete(r), sm(n, o);
  }
  var cm;
  cm = function(n, r, o) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || dt.current)
        oa = !0;
      else {
        if (!(n.lanes & o) && !(r.flags & 128))
          return oa = !1, co(n, r, o);
        oa = !!(n.flags & 131072);
      }
    else
      oa = !1, dn && r.flags & 1048576 && Io(r, Ol, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var s = r.type;
        fc(n, r), n = r.pendingProps;
        var d = _a(r, ir.current);
        Un(r, o), d = Ll(null, r, s, n, d, o);
        var h = Go();
        return r.flags |= 1, typeof d == "object" && d !== null && typeof d.render == "function" && d.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Wn(s) ? (h = !0, Dl(r)) : h = !1, r.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null, Ep(r), d.updater = df, r.stateNode = d, d._reactInternals = r, Sp(r, s, n, o), r = Of(null, r, s, !0, h, o)) : (r.tag = 0, dn && h && lf(r), $n(null, r, d, o), r = r.child), r;
      case 16:
        s = r.elementType;
        e: {
          switch (fc(n, r), n = r.pendingProps, d = s._init, s = d(s._payload), r.type = s, d = r.tag = Qg(s), n = ra(s, n), d) {
            case 0:
              r = mt(null, r, s, n, o);
              break e;
            case 1:
              r = sc(null, r, s, n, o);
              break e;
            case 11:
              r = Mu(null, r, s, n, o);
              break e;
            case 14:
              r = Xo(null, r, s, ra(s.type, n), o);
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
        return s = r.type, d = r.pendingProps, d = r.elementType === s ? d : ra(s, d), mt(n, r, s, d, o);
      case 1:
        return s = r.type, d = r.pendingProps, d = r.elementType === s ? d : ra(s, d), sc(n, r, s, d, o);
      case 3:
        e: {
          if (Pg(r), n === null)
            throw Error(f(387));
          s = r.pendingProps, h = r.memoizedState, d = h.element, jh(n, r), Xs(r, s, null, o);
          var S = r.memoizedState;
          if (s = S.element, h.isDehydrated)
            if (h = { element: s, isDehydrated: !1, cache: S.cache, pendingSuspenseBoundaries: S.pendingSuspenseBoundaries, transitions: S.transitions }, r.updateQueue.baseState = h, r.memoizedState = h, r.flags & 256) {
              d = qo(Error(f(423)), r), r = Xh(n, r, s, o, d);
              break e;
            } else if (s !== d) {
              d = qo(Error(f(424)), r), r = Xh(n, r, s, o, d);
              break e;
            } else
              for (Ca = Ea(r.stateNode.containerInfo.firstChild), Sa = r, dn = !0, Ha = null, o = Bh(r, null, s, o), r.child = o; o; )
                o.flags = o.flags & -3 | 4096, o = o.sibling;
          else {
            if (Tu(), s === d) {
              r = Fn(n, r, o);
              break e;
            }
            $n(n, r, s, o);
          }
          r = r.child;
        }
        return r;
      case 5:
        return pf(r), n === null && sf(r), s = r.type, d = r.pendingProps, h = n !== null ? n.memoizedProps : null, S = d.children, xl(s, d) ? S = null : h !== null && xl(s, h) && (r.flags |= 32), $l(n, r), $n(n, r, S, o), r.child;
      case 6:
        return n === null && sf(r), null;
      case 13:
        return Zh(n, r, o);
      case 4:
        return Cp(r, r.stateNode.containerInfo), s = r.pendingProps, n === null ? r.child = Du(r, null, s, o) : $n(n, r, s, o), r.child;
      case 11:
        return s = r.type, d = r.pendingProps, d = r.elementType === s ? d : ra(s, d), Mu(n, r, s, d, o);
      case 7:
        return $n(n, r, r.pendingProps, o), r.child;
      case 8:
        return $n(n, r, r.pendingProps.children, o), r.child;
      case 12:
        return $n(n, r, r.pendingProps.children, o), r.child;
      case 10:
        e: {
          if (s = r.type._context, d = r.pendingProps, h = r.memoizedProps, S = d.value, $t(bu, s._currentValue), s._currentValue = S, h !== null)
            if (si(h.value, S)) {
              if (h.children === d.children && !dt.current) {
                r = Fn(n, r, o);
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
                        var B = h.updateQueue;
                        if (B !== null) {
                          B = B.shared;
                          var ie = B.pending;
                          ie === null ? k.next = k : (k.next = ie.next, ie.next = k), B.pending = k;
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
          $n(n, r, d.children, o), r = r.child;
        }
        return r;
      case 9:
        return d = r.type, s = r.pendingProps.children, Un(r, o), d = he(d), s = s(d), r.flags |= 1, $n(n, r, s, o), r.child;
      case 14:
        return s = r.type, d = ra(s, r.pendingProps), d = ra(s.type, d), Xo(n, r, s, d, o);
      case 15:
        return Df(n, r, r.type, r.pendingProps, o);
      case 17:
        return s = r.type, d = r.pendingProps, d = r.elementType === s ? d : ra(s, d), fc(n, r), r.tag = 1, Wn(s) ? (n = !0, Dl(r)) : n = !1, Un(r, o), Fh(r, s, d), Sp(r, s, d, o), Of(null, r, s, !0, n, o);
      case 19:
        return Op(n, r, o);
      case 22:
        return la(n, r, o);
    }
    throw Error(f(156, r.tag));
  };
  function fm(n, r) {
    return an(n, r);
  }
  function dm(n, r, o, s) {
    this.tag = n, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ga(n, r, o, s) {
    return new dm(n, r, o, s);
  }
  function Fp(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Qg(n) {
    if (typeof n == "function")
      return Fp(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === lt)
        return 11;
      if (n === nt)
        return 14;
    }
    return 2;
  }
  function el(n, r) {
    var o = n.alternate;
    return o === null ? (o = Ga(n.tag, r, n.key, n.mode), o.elementType = n.elementType, o.type = n.type, o.stateNode = n.stateNode, o.alternate = n, n.alternate = o) : (o.pendingProps = r, o.type = n.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = n.flags & 14680064, o.childLanes = n.childLanes, o.lanes = n.lanes, o.child = n.child, o.memoizedProps = n.memoizedProps, o.memoizedState = n.memoizedState, o.updateQueue = n.updateQueue, r = n.dependencies, o.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, o.sibling = n.sibling, o.index = n.index, o.ref = n.ref, o;
  }
  function Yf(n, r, o, s, d, h) {
    var S = 2;
    if (s = n, typeof n == "function")
      Fp(n) && (S = 1);
    else if (typeof n == "string")
      S = 5;
    else
      e:
        switch (n) {
          case Pe:
            return Wl(o.children, d, h, r);
          case Ae:
            S = 8, d |= 8;
            break;
          case wt:
            return n = Ga(12, o, r, d | 2), n.elementType = wt, n.lanes = h, n;
          case St:
            return n = Ga(13, o, r, d), n.elementType = St, n.lanes = h, n;
          case Ye:
            return n = Ga(19, o, r, d), n.elementType = Ye, n.lanes = h, n;
          case Ge:
            return Wf(o, d, h, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case gt:
                  S = 10;
                  break e;
                case yt:
                  S = 9;
                  break e;
                case lt:
                  S = 11;
                  break e;
                case nt:
                  S = 14;
                  break e;
                case it:
                  S = 16, s = null;
                  break e;
              }
            throw Error(f(130, n == null ? n : typeof n, ""));
        }
    return r = Ga(S, o, r, d), r.elementType = n, r.type = s, r.lanes = h, r;
  }
  function Wl(n, r, o, s) {
    return n = Ga(7, n, s, r), n.lanes = o, n;
  }
  function Wf(n, r, o, s) {
    return n = Ga(22, n, s, r), n.elementType = Ge, n.lanes = o, n.stateNode = { isHidden: !1 }, n;
  }
  function Kf(n, r, o) {
    return n = Ga(6, n, null, r), n.lanes = o, n;
  }
  function yc(n, r, o) {
    return r = Ga(4, n.children !== null ? n.children : [], n.key, r), r.lanes = o, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function gc(n, r, o, s, d) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = _l(0), this.expirationTimes = _l(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = _l(0), this.identifierPrefix = s, this.onRecoverableError = d, this.mutableSourceEagerHydrationData = null;
  }
  function Hp(n, r, o, s, d, h, S, w, k) {
    return n = new gc(n, r, o, w, k), r === 1 ? (r = 1, h === !0 && (r |= 8)) : r = 0, h = Ga(3, null, null, r), n.current = h, h.stateNode = n, h.memoizedState = { element: s, isDehydrated: o, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ep(h), n;
  }
  function pm(n, r, o) {
    var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ce, key: s == null ? null : "" + s, children: n, containerInfo: r, implementation: o };
  }
  function Vp(n) {
    if (!n)
      return Pa;
    n = n._reactInternals;
    e: {
      if (Ee(n) !== n || n.tag !== 1)
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
        return Fo(n, o, r);
    }
    return r;
  }
  function Ip(n, r, o, s, d, h, S, w, k) {
    return n = Hp(o, s, !0, n, d, h, S, w, k), n.context = Vp(null), o = n.current, s = ur(), d = po(o), h = un(s, d), h.callback = r ?? null, Wo(o, h, d), n.current.lanes = d, No(n, d, s), er(n, s), n;
  }
  function Gf(n, r, o, s) {
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
  function vm(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var o = n.retryLane;
      n.retryLane = o !== 0 && o < r ? o : r;
    }
  }
  function Bp(n, r) {
    vm(n, r), (n = n.alternate) && vm(n, r);
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
    Gf(n, r, null, null);
  }, _c.prototype.unmount = Qf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Mi(function() {
        Gf(null, n, null, null);
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
  function hm() {
  }
  function Xg(n, r, o, s, d) {
    if (d) {
      if (typeof s == "function") {
        var h = s;
        s = function() {
          var B = Ec(S);
          h.call(B);
        };
      }
      var S = Ip(r, s, n, 0, null, !1, !1, "", hm);
      return n._reactRootContainer = S, n[ci] = S.current, bi(n.nodeType === 8 ? n.parentNode : n), Mi(), S;
    }
    for (; d = n.lastChild; )
      n.removeChild(d);
    if (typeof s == "function") {
      var w = s;
      s = function() {
        var B = Ec(k);
        w.call(B);
      };
    }
    var k = Hp(n, 0, !1, null, null, !1, !1, "", hm);
    return n._reactRootContainer = k, n[ci] = k.current, bi(n.nodeType === 8 ? n.parentNode : n), Mi(function() {
      Gf(r, k, o, s);
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
      Gf(r, S, n, d);
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
  }, Gt = function(n, r, o) {
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
              br(s), En(s, d);
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
  }, Do = Pp, hl = Mi;
  var Zg = { usingClientEntryPoint: !1, Events: [wi, Cu, af, ri, Na, Pp] }, Sc = { findFiberByHostInstance: oo, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, mm = { bundleType: Sc.bundleType, version: Sc.version, rendererPackageName: Sc.rendererPackageName, rendererConfig: Sc.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ve.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Ke(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Sc.findFiberByHostInstance || qg, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Zf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Zf.isDisabled && Zf.supportsFiber)
      try {
        Ao = Zf.inject(mm), Qr = Zf;
      } catch {
      }
  }
  return ti.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Zg, ti.createPortal = function(n, r) {
    var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!tl(r))
      throw Error(f(200));
    return pm(n, r, null, o);
  }, ti.createRoot = function(n, r) {
    if (!tl(n))
      throw Error(f(299));
    var o = !1, s = "", d = Yp;
    return r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (s = r.identifierPrefix), r.onRecoverableError !== void 0 && (d = r.onRecoverableError)), r = Hp(n, 1, !1, null, null, o, !1, s, d), n[ci] = r.current, bi(n.nodeType === 8 ? n.parentNode : n), new Qf(r);
  }, ti.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(f(188)) : (n = Object.keys(n).join(","), Error(f(268, n)));
    return n = Ke(r), n = n === null ? null : n.stateNode, n;
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
  }, ti.unstable_batchedUpdates = Pp, ti.unstable_renderSubtreeIntoContainer = function(n, r, o, s) {
    if (!qf(o))
      throw Error(f(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(f(38));
    return Xf(n, r, o, !1, s);
  }, ti.version = "18.2.0-next-9e3b772b8-20220608", ti;
}
var uR = {};
function sR() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (uR.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sR);
    } catch (v) {
      console.error(v);
    }
  }
}
uR.NODE_ENV === "production" ? (sR(), s0.exports = hN()) : s0.exports = vN();
var mN = s0.exports, yN = {}, Yv = mN;
if (yN.NODE_ENV === "production")
  Qv.createRoot = Yv.createRoot, Qv.hydrateRoot = Yv.hydrateRoot;
else {
  var Gy = Yv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Qv.createRoot = function(v, u) {
    Gy.usingClientEntryPoint = !0;
    try {
      return Yv.createRoot(v, u);
    } finally {
      Gy.usingClientEntryPoint = !1;
    }
  }, Qv.hydrateRoot = function(v, u, f) {
    Gy.usingClientEntryPoint = !0;
    try {
      return Yv.hydrateRoot(v, u, f);
    } finally {
      Gy.usingClientEntryPoint = !1;
    }
  };
}
class gN {
  constructor(u, f) {
    Ro(this, "width", 512);
    Ro(this, "height", 512);
    Object.assign(this, f), u.image && !(f != null && f.height) && ((u.image.naturalHeight - u.header.height) % 512 == 0 ? this.height = 512 : (u.image.naturalHeight - u.header.height) % 768 == 0 && (this.height = 768));
  }
}
class EN {
  constructor(u) {
    Ro(this, "width", 384);
    Ro(this, "height", 256);
    Object.assign(this, u);
  }
}
const cg = class cg {
  constructor(u) {
    Ro(this, "cell");
    Ro(this, "header");
    Ro(this, "cols", 0);
    Ro(this, "rows", 0);
    Ro(this, "image");
    Object.assign(this, u), this.header = new EN(u == null ? void 0 : u.header), this.cell = new gN(this, u == null ? void 0 : u.cell), this.image && (this.cols = Math.floor((this.image.naturalWidth - this.header.width) / this.cell.width), this.rows = Math.floor((this.image.naturalHeight - this.header.height) / this.cell.height));
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
Ro(cg, "Context", Rt.createContext(new cg({})));
let Tr = cg;
const y0 = ({ image: v, sx: u, sy: f, sw: E, sh: T }) => {
  const O = Rt.useRef(null);
  return Rt.useEffect(() => {
    const A = setInterval(() => {
      if (O.current) {
        const _ = O.current.getContext("2d");
        _ && v && (O.current.width = E, O.current.height = T, _.drawImage(
          v,
          u,
          // sx
          f,
          // sy
          E,
          // sw
          T,
          // sh
          0,
          // dx
          0,
          // dy
          E,
          // dw
          T
          // dh
        ), clearInterval(A));
      }
    }, 100);
  }, [v, u, f, E, T]), /* @__PURE__ */ pe.jsx("canvas", { className: "m-0", ref: O });
}, cR = ({ colIndex: v }) => {
  var f;
  const u = Rt.useContext(Tr.Context);
  return (f = u.image) != null && f.complete ? /* @__PURE__ */ pe.jsx(
    y0,
    {
      image: u.image,
      sx: u.header.width + v * u.cell.width,
      sy: 0,
      sw: u.cell.width,
      sh: u.header.height
    }
  ) : /* @__PURE__ */ pe.jsx(pe.Fragment, {});
}, fR = ({ children: v, isHeader: u }) => {
  const f = Rt.useContext(Tr.Context);
  return /* @__PURE__ */ pe.jsx("div", { className: "row flex-nowrap", style: { height: u ? f.header.height : f.cell.height }, children: v });
}, ig = ({ children: v, isTitle: u }) => {
  const f = Rt.useContext(Tr.Context), E = u ? f.header.width : f.cell.width;
  return /* @__PURE__ */ pe.jsx("div", { className: "col p-0" + (u ? "" : " border"), style: { width: E, minWidth: E }, children: v });
}, _N = () => {
  var f;
  const v = Rt.useContext(Tr.Context);
  let u = [/* @__PURE__ */ pe.jsx(ig, { isTitle: !0, children: /* @__PURE__ */ pe.jsx(pe.Fragment, {}) }, 0)];
  if ((f = v.image) != null && f.complete)
    for (let E = 0; E < v.cols; E++)
      u.push(/* @__PURE__ */ pe.jsx(ig, { children: /* @__PURE__ */ pe.jsx(cR, { colIndex: E }) }, E + 1));
  return /* @__PURE__ */ pe.jsx("div", { className: "border-bottom", children: /* @__PURE__ */ pe.jsx(fR, { isHeader: !0, children: u }) });
}, dR = ({ rowIndex: v }) => {
  var f;
  const u = Rt.useContext(Tr.Context);
  return (f = u.image) != null && f.complete ? /* @__PURE__ */ pe.jsx(
    y0,
    {
      image: u.image,
      sx: 0,
      sy: u.header.height + v * u.cell.height,
      sw: u.header.width,
      sh: u.cell.height
    }
  ) : /* @__PURE__ */ pe.jsx(pe.Fragment, {});
}, pR = ({ rowIndex: v, colIndex: u }) => {
  var E;
  const f = Rt.useContext(Tr.Context);
  return (E = f.image) != null && E.complete ? /* @__PURE__ */ pe.jsx(
    y0,
    {
      image: f.image,
      sx: f.header.width + u * f.cell.width,
      sy: f.header.height + v * f.cell.height,
      sw: f.cell.width,
      sh: f.cell.height
    }
  ) : /* @__PURE__ */ pe.jsx(pe.Fragment, {});
}, vR = Rt.createContext(() => {
}), SN = ({ rowIndex: v, colIndex: u }) => {
  const f = Rt.useContext(vR);
  return /* @__PURE__ */ pe.jsx("div", { onClick: () => f(v, u), children: /* @__PURE__ */ pe.jsx(pR, { rowIndex: v, colIndex: u }) });
}, CN = ({ rowIndex: v }) => {
  var E;
  const u = Rt.useContext(Tr.Context);
  let f = [/* @__PURE__ */ pe.jsx(ig, { isTitle: !0, children: /* @__PURE__ */ pe.jsx(dR, { rowIndex: v }) }, 0)];
  if ((E = u.image) != null && E.complete)
    for (let T = 0; T < u.cols; T++)
      f.push(/* @__PURE__ */ pe.jsx(ig, { children: /* @__PURE__ */ pe.jsx(SN, { rowIndex: v, colIndex: T }) }, T + 1));
  return /* @__PURE__ */ pe.jsx(fR, { children: f });
}, TN = ({ children: v }) => /* @__PURE__ */ pe.jsx("div", { className: "container", children: v }), bN = () => {
  var f;
  const v = Rt.useContext(Tr.Context);
  let u = [];
  if (u.push(/* @__PURE__ */ pe.jsx(_N, {}, 0)), (f = v.image) != null && f.complete)
    for (let E = 0; E < v.rows; E++)
      u.push(/* @__PURE__ */ pe.jsx(CN, { rowIndex: E }, E + 1));
  return /* @__PURE__ */ pe.jsx(TN, { children: u });
};
var Aa = "top", mi = "bottom", yi = "right", ka = "left", fg = "auto", Vd = [Aa, mi, yi, ka], Ic = "start", zd = "end", hR = "clippingParents", g0 = "viewport", kd = "popper", mR = "reference", c0 = /* @__PURE__ */ Vd.reduce(function(v, u) {
  return v.concat([u + "-" + Ic, u + "-" + zd]);
}, []), E0 = /* @__PURE__ */ [].concat(Vd, [fg]).reduce(function(v, u) {
  return v.concat([u, u + "-" + Ic, u + "-" + zd]);
}, []), yR = "beforeRead", gR = "read", ER = "afterRead", _R = "beforeMain", SR = "main", CR = "afterMain", TR = "beforeWrite", bR = "write", wR = "afterWrite", RR = [yR, gR, ER, _R, SR, CR, TR, bR, wR];
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
function _0(v) {
  if (typeof ShadowRoot > "u")
    return !1;
  var u = gi(v).ShadowRoot;
  return v instanceof u || v instanceof ShadowRoot;
}
function wN(v) {
  var u = v.state;
  Object.keys(u.elements).forEach(function(f) {
    var E = u.styles[f] || {}, T = u.attributes[f] || {}, O = u.elements[f];
    !Vi(O) || !vl(O) || (Object.assign(O.style, E), Object.keys(T).forEach(function(A) {
      var _ = T[A];
      _ === !1 ? O.removeAttribute(A) : O.setAttribute(A, _ === !0 ? "" : _);
    }));
  });
}
function RN(v) {
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
    Object.keys(u.elements).forEach(function(E) {
      var T = u.elements[E], O = u.attributes[E] || {}, A = Object.keys(u.styles.hasOwnProperty(E) ? u.styles[E] : f[E]), _ = A.reduce(function(H, W) {
        return H[W] = "", H;
      }, {});
      !Vi(T) || !vl(T) || (Object.assign(T.style, _), Object.keys(O).forEach(function(H) {
        T.removeAttribute(H);
      }));
    });
  };
}
const S0 = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: wN,
  effect: RN,
  requires: ["computeStyles"]
};
function dl(v) {
  return v.split("-")[0];
}
var Vc = Math.max, og = Math.min, Ud = Math.round;
function f0() {
  var v = navigator.userAgentData;
  return v != null && v.brands && Array.isArray(v.brands) ? v.brands.map(function(u) {
    return u.brand + "/" + u.version;
  }).join(" ") : navigator.userAgent;
}
function xR() {
  return !/^((?!chrome|android).)*safari/i.test(f0());
}
function jd(v, u, f) {
  u === void 0 && (u = !1), f === void 0 && (f = !1);
  var E = v.getBoundingClientRect(), T = 1, O = 1;
  u && Vi(v) && (T = v.offsetWidth > 0 && Ud(E.width) / v.offsetWidth || 1, O = v.offsetHeight > 0 && Ud(E.height) / v.offsetHeight || 1);
  var A = Bc(v) ? gi(v) : window, _ = A.visualViewport, H = !xR() && f, W = (E.left + (H && _ ? _.offsetLeft : 0)) / T, z = (E.top + (H && _ ? _.offsetTop : 0)) / O, le = E.width / T, q = E.height / O;
  return {
    width: le,
    height: q,
    top: z,
    right: W + le,
    bottom: z + q,
    left: W,
    x: W,
    y: z
  };
}
function C0(v) {
  var u = jd(v), f = v.offsetWidth, E = v.offsetHeight;
  return Math.abs(u.width - f) <= 1 && (f = u.width), Math.abs(u.height - E) <= 1 && (E = u.height), {
    x: v.offsetLeft,
    y: v.offsetTop,
    width: f,
    height: E
  };
}
function DR(v, u) {
  var f = u.getRootNode && u.getRootNode();
  if (v.contains(u))
    return !0;
  if (f && _0(f)) {
    var E = u;
    do {
      if (E && v.isSameNode(E))
        return !0;
      E = E.parentNode || E.host;
    } while (E);
  }
  return !1;
}
function lu(v) {
  return gi(v).getComputedStyle(v);
}
function xN(v) {
  return ["table", "td", "th"].indexOf(vl(v)) >= 0;
}
function gs(v) {
  return ((Bc(v) ? v.ownerDocument : (
    // $FlowFixMe[prop-missing]
    v.document
  )) || window.document).documentElement;
}
function dg(v) {
  return vl(v) === "html" ? v : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    v.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    v.parentNode || // DOM Element detected
    (_0(v) ? v.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    gs(v)
  );
}
function ww(v) {
  return !Vi(v) || // https://github.com/popperjs/popper-core/issues/837
  lu(v).position === "fixed" ? null : v.offsetParent;
}
function DN(v) {
  var u = /firefox/i.test(f0()), f = /Trident/i.test(f0());
  if (f && Vi(v)) {
    var E = lu(v);
    if (E.position === "fixed")
      return null;
  }
  var T = dg(v);
  for (_0(T) && (T = T.host); Vi(T) && ["html", "body"].indexOf(vl(T)) < 0; ) {
    var O = lu(T);
    if (O.transform !== "none" || O.perspective !== "none" || O.contain === "paint" || ["transform", "perspective"].indexOf(O.willChange) !== -1 || u && O.willChange === "filter" || u && O.filter && O.filter !== "none")
      return T;
    T = T.parentNode;
  }
  return null;
}
function Jv(v) {
  for (var u = gi(v), f = ww(v); f && xN(f) && lu(f).position === "static"; )
    f = ww(f);
  return f && (vl(f) === "html" || vl(f) === "body" && lu(f).position === "static") ? u : f || DN(v) || u;
}
function T0(v) {
  return ["top", "bottom"].indexOf(v) >= 0 ? "x" : "y";
}
function qv(v, u, f) {
  return Vc(v, og(u, f));
}
function ON(v, u, f) {
  var E = qv(v, u, f);
  return E > f ? f : E;
}
function OR() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function AR(v) {
  return Object.assign({}, OR(), v);
}
function kR(v, u) {
  return u.reduce(function(f, E) {
    return f[E] = v, f;
  }, {});
}
var AN = function(u, f) {
  return u = typeof u == "function" ? u(Object.assign({}, f.rects, {
    placement: f.placement
  })) : u, AR(typeof u != "number" ? u : kR(u, Vd));
};
function kN(v) {
  var u, f = v.state, E = v.name, T = v.options, O = f.elements.arrow, A = f.modifiersData.popperOffsets, _ = dl(f.placement), H = T0(_), W = [ka, yi].indexOf(_) >= 0, z = W ? "height" : "width";
  if (!(!O || !A)) {
    var le = AN(T.padding, f), q = C0(O), te = H === "y" ? Aa : ka, ee = H === "y" ? mi : yi, ae = f.rects.reference[z] + f.rects.reference[H] - A[H] - f.rects.popper[z], Te = A[H] - f.rects.reference[H], vt = Jv(O), ct = vt ? H === "y" ? vt.clientHeight || 0 : vt.clientWidth || 0 : 0, ze = ae / 2 - Te / 2, ve = le[te], je = ct - q[z] - le[ee], ce = ct / 2 - q[z] / 2 + ze, Pe = qv(ve, ce, je), Ae = H;
    f.modifiersData[E] = (u = {}, u[Ae] = Pe, u.centerOffset = Pe - ce, u);
  }
}
function NN(v) {
  var u = v.state, f = v.options, E = f.element, T = E === void 0 ? "[data-popper-arrow]" : E;
  T != null && (typeof T == "string" && (T = u.elements.popper.querySelector(T), !T) || DR(u.elements.popper, T) && (u.elements.arrow = T));
}
const NR = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: kN,
  effect: NN,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Pd(v) {
  return v.split("-")[1];
}
var LN = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function MN(v, u) {
  var f = v.x, E = v.y, T = u.devicePixelRatio || 1;
  return {
    x: Ud(f * T) / T || 0,
    y: Ud(E * T) / T || 0
  };
}
function Rw(v) {
  var u, f = v.popper, E = v.popperRect, T = v.placement, O = v.variation, A = v.offsets, _ = v.position, H = v.gpuAcceleration, W = v.adaptive, z = v.roundOffsets, le = v.isFixed, q = A.x, te = q === void 0 ? 0 : q, ee = A.y, ae = ee === void 0 ? 0 : ee, Te = typeof z == "function" ? z({
    x: te,
    y: ae
  }) : {
    x: te,
    y: ae
  };
  te = Te.x, ae = Te.y;
  var vt = A.hasOwnProperty("x"), ct = A.hasOwnProperty("y"), ze = ka, ve = Aa, je = window;
  if (W) {
    var ce = Jv(f), Pe = "clientHeight", Ae = "clientWidth";
    if (ce === gi(f) && (ce = gs(f), lu(ce).position !== "static" && _ === "absolute" && (Pe = "scrollHeight", Ae = "scrollWidth")), ce = ce, T === Aa || (T === ka || T === yi) && O === zd) {
      ve = mi;
      var wt = le && ce === je && je.visualViewport ? je.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        ce[Pe]
      );
      ae -= wt - E.height, ae *= H ? 1 : -1;
    }
    if (T === ka || (T === Aa || T === mi) && O === zd) {
      ze = yi;
      var gt = le && ce === je && je.visualViewport ? je.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        ce[Ae]
      );
      te -= gt - E.width, te *= H ? 1 : -1;
    }
  }
  var yt = Object.assign({
    position: _
  }, W && LN), lt = z === !0 ? MN({
    x: te,
    y: ae
  }, gi(f)) : {
    x: te,
    y: ae
  };
  if (te = lt.x, ae = lt.y, H) {
    var St;
    return Object.assign({}, yt, (St = {}, St[ve] = ct ? "0" : "", St[ze] = vt ? "0" : "", St.transform = (je.devicePixelRatio || 1) <= 1 ? "translate(" + te + "px, " + ae + "px)" : "translate3d(" + te + "px, " + ae + "px, 0)", St));
  }
  return Object.assign({}, yt, (u = {}, u[ve] = ct ? ae + "px" : "", u[ze] = vt ? te + "px" : "", u.transform = "", u));
}
function zN(v) {
  var u = v.state, f = v.options, E = f.gpuAcceleration, T = E === void 0 ? !0 : E, O = f.adaptive, A = O === void 0 ? !0 : O, _ = f.roundOffsets, H = _ === void 0 ? !0 : _, W = {
    placement: dl(u.placement),
    variation: Pd(u.placement),
    popper: u.elements.popper,
    popperRect: u.rects.popper,
    gpuAcceleration: T,
    isFixed: u.options.strategy === "fixed"
  };
  u.modifiersData.popperOffsets != null && (u.styles.popper = Object.assign({}, u.styles.popper, Rw(Object.assign({}, W, {
    offsets: u.modifiersData.popperOffsets,
    position: u.options.strategy,
    adaptive: A,
    roundOffsets: H
  })))), u.modifiersData.arrow != null && (u.styles.arrow = Object.assign({}, u.styles.arrow, Rw(Object.assign({}, W, {
    offsets: u.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: H
  })))), u.attributes.popper = Object.assign({}, u.attributes.popper, {
    "data-popper-placement": u.placement
  });
}
const b0 = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: zN,
  data: {}
};
var Qy = {
  passive: !0
};
function UN(v) {
  var u = v.state, f = v.instance, E = v.options, T = E.scroll, O = T === void 0 ? !0 : T, A = E.resize, _ = A === void 0 ? !0 : A, H = gi(u.elements.popper), W = [].concat(u.scrollParents.reference, u.scrollParents.popper);
  return O && W.forEach(function(z) {
    z.addEventListener("scroll", f.update, Qy);
  }), _ && H.addEventListener("resize", f.update, Qy), function() {
    O && W.forEach(function(z) {
      z.removeEventListener("scroll", f.update, Qy);
    }), _ && H.removeEventListener("resize", f.update, Qy);
  };
}
const w0 = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: UN,
  data: {}
};
var jN = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ng(v) {
  return v.replace(/left|right|bottom|top/g, function(u) {
    return jN[u];
  });
}
var PN = {
  start: "end",
  end: "start"
};
function xw(v) {
  return v.replace(/start|end/g, function(u) {
    return PN[u];
  });
}
function R0(v) {
  var u = gi(v), f = u.pageXOffset, E = u.pageYOffset;
  return {
    scrollLeft: f,
    scrollTop: E
  };
}
function x0(v) {
  return jd(gs(v)).left + R0(v).scrollLeft;
}
function $N(v, u) {
  var f = gi(v), E = gs(v), T = f.visualViewport, O = E.clientWidth, A = E.clientHeight, _ = 0, H = 0;
  if (T) {
    O = T.width, A = T.height;
    var W = xR();
    (W || !W && u === "fixed") && (_ = T.offsetLeft, H = T.offsetTop);
  }
  return {
    width: O,
    height: A,
    x: _ + x0(v),
    y: H
  };
}
function FN(v) {
  var u, f = gs(v), E = R0(v), T = (u = v.ownerDocument) == null ? void 0 : u.body, O = Vc(f.scrollWidth, f.clientWidth, T ? T.scrollWidth : 0, T ? T.clientWidth : 0), A = Vc(f.scrollHeight, f.clientHeight, T ? T.scrollHeight : 0, T ? T.clientHeight : 0), _ = -E.scrollLeft + x0(v), H = -E.scrollTop;
  return lu(T || f).direction === "rtl" && (_ += Vc(f.clientWidth, T ? T.clientWidth : 0) - O), {
    width: O,
    height: A,
    x: _,
    y: H
  };
}
function D0(v) {
  var u = lu(v), f = u.overflow, E = u.overflowX, T = u.overflowY;
  return /auto|scroll|overlay|hidden/.test(f + T + E);
}
function LR(v) {
  return ["html", "body", "#document"].indexOf(vl(v)) >= 0 ? v.ownerDocument.body : Vi(v) && D0(v) ? v : LR(dg(v));
}
function Xv(v, u) {
  var f;
  u === void 0 && (u = []);
  var E = LR(v), T = E === ((f = v.ownerDocument) == null ? void 0 : f.body), O = gi(E), A = T ? [O].concat(O.visualViewport || [], D0(E) ? E : []) : E, _ = u.concat(A);
  return T ? _ : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    _.concat(Xv(dg(A)))
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
function HN(v, u) {
  var f = jd(v, !1, u === "fixed");
  return f.top = f.top + v.clientTop, f.left = f.left + v.clientLeft, f.bottom = f.top + v.clientHeight, f.right = f.left + v.clientWidth, f.width = v.clientWidth, f.height = v.clientHeight, f.x = f.left, f.y = f.top, f;
}
function Dw(v, u, f) {
  return u === g0 ? d0($N(v, f)) : Bc(u) ? HN(u, f) : d0(FN(gs(v)));
}
function VN(v) {
  var u = Xv(dg(v)), f = ["absolute", "fixed"].indexOf(lu(v).position) >= 0, E = f && Vi(v) ? Jv(v) : v;
  return Bc(E) ? u.filter(function(T) {
    return Bc(T) && DR(T, E) && vl(T) !== "body";
  }) : [];
}
function IN(v, u, f, E) {
  var T = u === "clippingParents" ? VN(v) : [].concat(u), O = [].concat(T, [f]), A = O[0], _ = O.reduce(function(H, W) {
    var z = Dw(v, W, E);
    return H.top = Vc(z.top, H.top), H.right = og(z.right, H.right), H.bottom = og(z.bottom, H.bottom), H.left = Vc(z.left, H.left), H;
  }, Dw(v, A, E));
  return _.width = _.right - _.left, _.height = _.bottom - _.top, _.x = _.left, _.y = _.top, _;
}
function MR(v) {
  var u = v.reference, f = v.element, E = v.placement, T = E ? dl(E) : null, O = E ? Pd(E) : null, A = u.x + u.width / 2 - f.width / 2, _ = u.y + u.height / 2 - f.height / 2, H;
  switch (T) {
    case Aa:
      H = {
        x: A,
        y: u.y - f.height
      };
      break;
    case mi:
      H = {
        x: A,
        y: u.y + u.height
      };
      break;
    case yi:
      H = {
        x: u.x + u.width,
        y: _
      };
      break;
    case ka:
      H = {
        x: u.x - f.width,
        y: _
      };
      break;
    default:
      H = {
        x: u.x,
        y: u.y
      };
  }
  var W = T ? T0(T) : null;
  if (W != null) {
    var z = W === "y" ? "height" : "width";
    switch (O) {
      case Ic:
        H[W] = H[W] - (u[z] / 2 - f[z] / 2);
        break;
      case zd:
        H[W] = H[W] + (u[z] / 2 - f[z] / 2);
        break;
    }
  }
  return H;
}
function $d(v, u) {
  u === void 0 && (u = {});
  var f = u, E = f.placement, T = E === void 0 ? v.placement : E, O = f.strategy, A = O === void 0 ? v.strategy : O, _ = f.boundary, H = _ === void 0 ? hR : _, W = f.rootBoundary, z = W === void 0 ? g0 : W, le = f.elementContext, q = le === void 0 ? kd : le, te = f.altBoundary, ee = te === void 0 ? !1 : te, ae = f.padding, Te = ae === void 0 ? 0 : ae, vt = AR(typeof Te != "number" ? Te : kR(Te, Vd)), ct = q === kd ? mR : kd, ze = v.rects.popper, ve = v.elements[ee ? ct : q], je = IN(Bc(ve) ? ve : ve.contextElement || gs(v.elements.popper), H, z, A), ce = jd(v.elements.reference), Pe = MR({
    reference: ce,
    element: ze,
    strategy: "absolute",
    placement: T
  }), Ae = d0(Object.assign({}, ze, Pe)), wt = q === kd ? Ae : ce, gt = {
    top: je.top - wt.top + vt.top,
    bottom: wt.bottom - je.bottom + vt.bottom,
    left: je.left - wt.left + vt.left,
    right: wt.right - je.right + vt.right
  }, yt = v.modifiersData.offset;
  if (q === kd && yt) {
    var lt = yt[T];
    Object.keys(gt).forEach(function(St) {
      var Ye = [yi, mi].indexOf(St) >= 0 ? 1 : -1, nt = [Aa, mi].indexOf(St) >= 0 ? "y" : "x";
      gt[St] += lt[nt] * Ye;
    });
  }
  return gt;
}
function BN(v, u) {
  u === void 0 && (u = {});
  var f = u, E = f.placement, T = f.boundary, O = f.rootBoundary, A = f.padding, _ = f.flipVariations, H = f.allowedAutoPlacements, W = H === void 0 ? E0 : H, z = Pd(E), le = z ? _ ? c0 : c0.filter(function(ee) {
    return Pd(ee) === z;
  }) : Vd, q = le.filter(function(ee) {
    return W.indexOf(ee) >= 0;
  });
  q.length === 0 && (q = le);
  var te = q.reduce(function(ee, ae) {
    return ee[ae] = $d(v, {
      placement: ae,
      boundary: T,
      rootBoundary: O,
      padding: A
    })[dl(ae)], ee;
  }, {});
  return Object.keys(te).sort(function(ee, ae) {
    return te[ee] - te[ae];
  });
}
function YN(v) {
  if (dl(v) === fg)
    return [];
  var u = ng(v);
  return [xw(v), u, xw(u)];
}
function WN(v) {
  var u = v.state, f = v.options, E = v.name;
  if (!u.modifiersData[E]._skip) {
    for (var T = f.mainAxis, O = T === void 0 ? !0 : T, A = f.altAxis, _ = A === void 0 ? !0 : A, H = f.fallbackPlacements, W = f.padding, z = f.boundary, le = f.rootBoundary, q = f.altBoundary, te = f.flipVariations, ee = te === void 0 ? !0 : te, ae = f.allowedAutoPlacements, Te = u.options.placement, vt = dl(Te), ct = vt === Te, ze = H || (ct || !ee ? [ng(Te)] : YN(Te)), ve = [Te].concat(ze).reduce(function(Ie, ut) {
      return Ie.concat(dl(ut) === fg ? BN(u, {
        placement: ut,
        boundary: z,
        rootBoundary: le,
        padding: W,
        flipVariations: ee,
        allowedAutoPlacements: ae
      }) : ut);
    }, []), je = u.rects.reference, ce = u.rects.popper, Pe = /* @__PURE__ */ new Map(), Ae = !0, wt = ve[0], gt = 0; gt < ve.length; gt++) {
      var yt = ve[gt], lt = dl(yt), St = Pd(yt) === Ic, Ye = [Aa, mi].indexOf(lt) >= 0, nt = Ye ? "width" : "height", it = $d(u, {
        placement: yt,
        boundary: z,
        rootBoundary: le,
        altBoundary: q,
        padding: W
      }), Ge = Ye ? St ? yi : ka : St ? mi : Aa;
      je[nt] > ce[nt] && (Ge = ng(Ge));
      var X = ng(Ge), _e = [];
      if (O && _e.push(it[lt] <= 0), _ && _e.push(it[Ge] <= 0, it[X] <= 0), _e.every(function(Ie) {
        return Ie;
      })) {
        wt = yt, Ae = !1;
        break;
      }
      Pe.set(yt, _e);
    }
    if (Ae)
      for (var D = ee ? 3 : 1, Z = function(ut) {
        var ft = ve.find(function(Et) {
          var ot = Pe.get(Et);
          if (ot)
            return ot.slice(0, ut).every(function(Kt) {
              return Kt;
            });
        });
        if (ft)
          return wt = ft, "break";
      }, Ce = D; Ce > 0; Ce--) {
        var We = Z(Ce);
        if (We === "break")
          break;
      }
    u.placement !== wt && (u.modifiersData[E]._skip = !0, u.placement = wt, u.reset = !0);
  }
}
const zR = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: WN,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Ow(v, u, f) {
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
function Aw(v) {
  return [Aa, yi, mi, ka].some(function(u) {
    return v[u] >= 0;
  });
}
function KN(v) {
  var u = v.state, f = v.name, E = u.rects.reference, T = u.rects.popper, O = u.modifiersData.preventOverflow, A = $d(u, {
    elementContext: "reference"
  }), _ = $d(u, {
    altBoundary: !0
  }), H = Ow(A, E), W = Ow(_, T, O), z = Aw(H), le = Aw(W);
  u.modifiersData[f] = {
    referenceClippingOffsets: H,
    popperEscapeOffsets: W,
    isReferenceHidden: z,
    hasPopperEscaped: le
  }, u.attributes.popper = Object.assign({}, u.attributes.popper, {
    "data-popper-reference-hidden": z,
    "data-popper-escaped": le
  });
}
const UR = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: KN
};
function GN(v, u, f) {
  var E = dl(v), T = [ka, Aa].indexOf(E) >= 0 ? -1 : 1, O = typeof f == "function" ? f(Object.assign({}, u, {
    placement: v
  })) : f, A = O[0], _ = O[1];
  return A = A || 0, _ = (_ || 0) * T, [ka, yi].indexOf(E) >= 0 ? {
    x: _,
    y: A
  } : {
    x: A,
    y: _
  };
}
function QN(v) {
  var u = v.state, f = v.options, E = v.name, T = f.offset, O = T === void 0 ? [0, 0] : T, A = E0.reduce(function(z, le) {
    return z[le] = GN(le, u.rects, O), z;
  }, {}), _ = A[u.placement], H = _.x, W = _.y;
  u.modifiersData.popperOffsets != null && (u.modifiersData.popperOffsets.x += H, u.modifiersData.popperOffsets.y += W), u.modifiersData[E] = A;
}
const jR = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: QN
};
function qN(v) {
  var u = v.state, f = v.name;
  u.modifiersData[f] = MR({
    reference: u.rects.reference,
    element: u.rects.popper,
    strategy: "absolute",
    placement: u.placement
  });
}
const O0 = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: qN,
  data: {}
};
function XN(v) {
  return v === "x" ? "y" : "x";
}
function ZN(v) {
  var u = v.state, f = v.options, E = v.name, T = f.mainAxis, O = T === void 0 ? !0 : T, A = f.altAxis, _ = A === void 0 ? !1 : A, H = f.boundary, W = f.rootBoundary, z = f.altBoundary, le = f.padding, q = f.tether, te = q === void 0 ? !0 : q, ee = f.tetherOffset, ae = ee === void 0 ? 0 : ee, Te = $d(u, {
    boundary: H,
    rootBoundary: W,
    padding: le,
    altBoundary: z
  }), vt = dl(u.placement), ct = Pd(u.placement), ze = !ct, ve = T0(vt), je = XN(ve), ce = u.modifiersData.popperOffsets, Pe = u.rects.reference, Ae = u.rects.popper, wt = typeof ae == "function" ? ae(Object.assign({}, u.rects, {
    placement: u.placement
  })) : ae, gt = typeof wt == "number" ? {
    mainAxis: wt,
    altAxis: wt
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, wt), yt = u.modifiersData.offset ? u.modifiersData.offset[u.placement] : null, lt = {
    x: 0,
    y: 0
  };
  if (ce) {
    if (O) {
      var St, Ye = ve === "y" ? Aa : ka, nt = ve === "y" ? mi : yi, it = ve === "y" ? "height" : "width", Ge = ce[ve], X = Ge + Te[Ye], _e = Ge - Te[nt], D = te ? -Ae[it] / 2 : 0, Z = ct === Ic ? Pe[it] : Ae[it], Ce = ct === Ic ? -Ae[it] : -Pe[it], We = u.elements.arrow, Ie = te && We ? C0(We) : {
        width: 0,
        height: 0
      }, ut = u.modifiersData["arrow#persistent"] ? u.modifiersData["arrow#persistent"].padding : OR(), ft = ut[Ye], Et = ut[nt], ot = qv(0, Pe[it], Ie[it]), Kt = ze ? Pe[it] / 2 - D - ot - ft - gt.mainAxis : Z - ot - ft - gt.mainAxis, Qn = ze ? -Pe[it] / 2 + D + ot + Et + gt.mainAxis : Ce + ot + Et + gt.mainAxis, Mn = u.elements.arrow && Jv(u.elements.arrow), br = Mn ? ve === "y" ? Mn.clientTop || 0 : Mn.clientLeft || 0 : 0, qn = (St = yt == null ? void 0 : yt[ve]) != null ? St : 0, hn = Ge + Kt - qn - br, Xn = Ge + Qn - qn, Rn = qv(te ? og(X, hn) : X, Ge, te ? Vc(_e, Xn) : _e);
      ce[ve] = Rn, lt[ve] = Rn - Ge;
    }
    if (_) {
      var En, xn = ve === "x" ? Aa : ka, cr = ve === "x" ? mi : yi, mn = ce[je], yn = je === "y" ? "height" : "width", wr = mn + Te[xn], Rr = mn - Te[cr], In = [Aa, ka].indexOf(vt) !== -1, xr = (En = yt == null ? void 0 : yt[je]) != null ? En : 0, Bn = In ? wr : mn - Pe[yn] - Ae[yn] - xr + gt.altAxis, rr = In ? mn + Pe[yn] + Ae[yn] - xr - gt.altAxis : Rr, en = te && In ? ON(Bn, mn, rr) : qv(te ? Bn : wr, mn, te ? rr : Rr);
      ce[je] = en, lt[je] = en - mn;
    }
    u.modifiersData[E] = lt;
  }
}
const PR = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: ZN,
  requiresIfExists: ["offset"]
};
function JN(v) {
  return {
    scrollLeft: v.scrollLeft,
    scrollTop: v.scrollTop
  };
}
function eL(v) {
  return v === gi(v) || !Vi(v) ? R0(v) : JN(v);
}
function tL(v) {
  var u = v.getBoundingClientRect(), f = Ud(u.width) / v.offsetWidth || 1, E = Ud(u.height) / v.offsetHeight || 1;
  return f !== 1 || E !== 1;
}
function nL(v, u, f) {
  f === void 0 && (f = !1);
  var E = Vi(u), T = Vi(u) && tL(u), O = gs(u), A = jd(v, T, f), _ = {
    scrollLeft: 0,
    scrollTop: 0
  }, H = {
    x: 0,
    y: 0
  };
  return (E || !E && !f) && ((vl(u) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  D0(O)) && (_ = eL(u)), Vi(u) ? (H = jd(u, !0), H.x += u.clientLeft, H.y += u.clientTop) : O && (H.x = x0(O))), {
    x: A.left + _.scrollLeft - H.x,
    y: A.top + _.scrollTop - H.y,
    width: A.width,
    height: A.height
  };
}
function rL(v) {
  var u = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Set(), E = [];
  v.forEach(function(O) {
    u.set(O.name, O);
  });
  function T(O) {
    f.add(O.name);
    var A = [].concat(O.requires || [], O.requiresIfExists || []);
    A.forEach(function(_) {
      if (!f.has(_)) {
        var H = u.get(_);
        H && T(H);
      }
    }), E.push(O);
  }
  return v.forEach(function(O) {
    f.has(O.name) || T(O);
  }), E;
}
function aL(v) {
  var u = rL(v);
  return RR.reduce(function(f, E) {
    return f.concat(u.filter(function(T) {
      return T.phase === E;
    }));
  }, []);
}
function iL(v) {
  var u;
  return function() {
    return u || (u = new Promise(function(f) {
      Promise.resolve().then(function() {
        u = void 0, f(v());
      });
    })), u;
  };
}
function oL(v) {
  var u = v.reduce(function(f, E) {
    var T = f[E.name];
    return f[E.name] = T ? Object.assign({}, T, E, {
      options: Object.assign({}, T.options, E.options),
      data: Object.assign({}, T.data, E.data)
    }) : E, f;
  }, {});
  return Object.keys(u).map(function(f) {
    return u[f];
  });
}
var kw = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Nw() {
  for (var v = arguments.length, u = new Array(v), f = 0; f < v; f++)
    u[f] = arguments[f];
  return !u.some(function(E) {
    return !(E && typeof E.getBoundingClientRect == "function");
  });
}
function pg(v) {
  v === void 0 && (v = {});
  var u = v, f = u.defaultModifiers, E = f === void 0 ? [] : f, T = u.defaultOptions, O = T === void 0 ? kw : T;
  return function(_, H, W) {
    W === void 0 && (W = O);
    var z = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, kw, O),
      modifiersData: {},
      elements: {
        reference: _,
        popper: H
      },
      attributes: {},
      styles: {}
    }, le = [], q = !1, te = {
      state: z,
      setOptions: function(vt) {
        var ct = typeof vt == "function" ? vt(z.options) : vt;
        ae(), z.options = Object.assign({}, O, z.options, ct), z.scrollParents = {
          reference: Bc(_) ? Xv(_) : _.contextElement ? Xv(_.contextElement) : [],
          popper: Xv(H)
        };
        var ze = aL(oL([].concat(E, z.options.modifiers)));
        return z.orderedModifiers = ze.filter(function(ve) {
          return ve.enabled;
        }), ee(), te.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!q) {
          var vt = z.elements, ct = vt.reference, ze = vt.popper;
          if (Nw(ct, ze)) {
            z.rects = {
              reference: nL(ct, Jv(ze), z.options.strategy === "fixed"),
              popper: C0(ze)
            }, z.reset = !1, z.placement = z.options.placement, z.orderedModifiers.forEach(function(gt) {
              return z.modifiersData[gt.name] = Object.assign({}, gt.data);
            });
            for (var ve = 0; ve < z.orderedModifiers.length; ve++) {
              if (z.reset === !0) {
                z.reset = !1, ve = -1;
                continue;
              }
              var je = z.orderedModifiers[ve], ce = je.fn, Pe = je.options, Ae = Pe === void 0 ? {} : Pe, wt = je.name;
              typeof ce == "function" && (z = ce({
                state: z,
                options: Ae,
                name: wt,
                instance: te
              }) || z);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: iL(function() {
        return new Promise(function(Te) {
          te.forceUpdate(), Te(z);
        });
      }),
      destroy: function() {
        ae(), q = !0;
      }
    };
    if (!Nw(_, H))
      return te;
    te.setOptions(W).then(function(Te) {
      !q && W.onFirstUpdate && W.onFirstUpdate(Te);
    });
    function ee() {
      z.orderedModifiers.forEach(function(Te) {
        var vt = Te.name, ct = Te.options, ze = ct === void 0 ? {} : ct, ve = Te.effect;
        if (typeof ve == "function") {
          var je = ve({
            state: z,
            name: vt,
            instance: te,
            options: ze
          }), ce = function() {
          };
          le.push(je || ce);
        }
      });
    }
    function ae() {
      le.forEach(function(Te) {
        return Te();
      }), le = [];
    }
    return te;
  };
}
var lL = /* @__PURE__ */ pg(), uL = [w0, O0, b0, S0], sL = /* @__PURE__ */ pg({
  defaultModifiers: uL
}), cL = [w0, O0, b0, S0, jR, zR, PR, NR, UR], A0 = /* @__PURE__ */ pg({
  defaultModifiers: cL
});
const $R = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  afterMain: CR,
  afterRead: ER,
  afterWrite: wR,
  applyStyles: S0,
  arrow: NR,
  auto: fg,
  basePlacements: Vd,
  beforeMain: _R,
  beforeRead: yR,
  beforeWrite: TR,
  bottom: mi,
  clippingParents: hR,
  computeStyles: b0,
  createPopper: A0,
  createPopperBase: lL,
  createPopperLite: sL,
  detectOverflow: $d,
  end: zd,
  eventListeners: w0,
  flip: zR,
  hide: UR,
  left: ka,
  main: SR,
  modifierPhases: RR,
  offset: jR,
  placements: E0,
  popper: kd,
  popperGenerator: pg,
  popperOffsets: O0,
  preventOverflow: PR,
  read: gR,
  reference: mR,
  right: yi,
  start: Ic,
  top: Aa,
  variationPlacements: c0,
  viewport: g0,
  write: bR
}, Symbol.toStringTag, { value: "Module" }));
/*!
  * Bootstrap v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
const vs = /* @__PURE__ */ new Map(), WS = {
  set(v, u, f) {
    vs.has(v) || vs.set(v, /* @__PURE__ */ new Map());
    const E = vs.get(v);
    if (!E.has(u) && E.size !== 0) {
      console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(E.keys())[0]}.`);
      return;
    }
    E.set(u, f);
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
}, fL = 1e6, dL = 1e3, p0 = "transitionend", FR = (v) => (v && window.CSS && window.CSS.escape && (v = v.replace(/#([^\s"#']+)/g, (u, f) => `#${CSS.escape(f)}`)), v), pL = (v) => v == null ? `${v}` : Object.prototype.toString.call(v).match(/\s([a-z]+)/i)[1].toLowerCase(), vL = (v) => {
  do
    v += Math.floor(Math.random() * fL);
  while (document.getElementById(v));
  return v;
}, hL = (v) => {
  if (!v)
    return 0;
  let {
    transitionDuration: u,
    transitionDelay: f
  } = window.getComputedStyle(v);
  const E = Number.parseFloat(u), T = Number.parseFloat(f);
  return !E && !T ? 0 : (u = u.split(",")[0], f = f.split(",")[0], (Number.parseFloat(u) + Number.parseFloat(f)) * dL);
}, HR = (v) => {
  v.dispatchEvent(new Event(p0));
}, iu = (v) => !v || typeof v != "object" ? !1 : (typeof v.jquery < "u" && (v = v[0]), typeof v.nodeType < "u"), hs = (v) => iu(v) ? v.jquery ? v[0] : v : typeof v == "string" && v.length > 0 ? document.querySelector(FR(v)) : null, Id = (v) => {
  if (!iu(v) || v.getClientRects().length === 0)
    return !1;
  const u = getComputedStyle(v).getPropertyValue("visibility") === "visible", f = v.closest("details:not([open])");
  if (!f)
    return u;
  if (f !== v) {
    const E = v.closest("summary");
    if (E && E.parentNode !== f || E === null)
      return !1;
  }
  return u;
}, ms = (v) => !v || v.nodeType !== Node.ELEMENT_NODE || v.classList.contains("disabled") ? !0 : typeof v.disabled < "u" ? v.disabled : v.hasAttribute("disabled") && v.getAttribute("disabled") !== "false", VR = (v) => {
  if (!document.documentElement.attachShadow)
    return null;
  if (typeof v.getRootNode == "function") {
    const u = v.getRootNode();
    return u instanceof ShadowRoot ? u : null;
  }
  return v instanceof ShadowRoot ? v : v.parentNode ? VR(v.parentNode) : null;
}, lg = () => {
}, eh = (v) => {
  v.offsetHeight;
}, IR = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, KS = [], mL = (v) => {
  document.readyState === "loading" ? (KS.length || document.addEventListener("DOMContentLoaded", () => {
    for (const u of KS)
      u();
  }), KS.push(v)) : v();
}, Ii = () => document.documentElement.dir === "rtl", Yi = (v) => {
  mL(() => {
    const u = IR();
    if (u) {
      const f = v.NAME, E = u.fn[f];
      u.fn[f] = v.jQueryInterface, u.fn[f].Constructor = v, u.fn[f].noConflict = () => (u.fn[f] = E, v.jQueryInterface);
    }
  });
}, ni = (v, u = [], f = v) => typeof v == "function" ? v(...u) : f, BR = (v, u, f = !0) => {
  if (!f) {
    ni(v);
    return;
  }
  const E = 5, T = hL(u) + E;
  let O = !1;
  const A = ({
    target: _
  }) => {
    _ === u && (O = !0, u.removeEventListener(p0, A), ni(v));
  };
  u.addEventListener(p0, A), setTimeout(() => {
    O || HR(u);
  }, T);
}, k0 = (v, u, f, E) => {
  const T = v.length;
  let O = v.indexOf(u);
  return O === -1 ? !f && E ? v[T - 1] : v[0] : (O += f ? 1 : -1, E && (O = (O + T) % T), v[Math.max(0, Math.min(O, T - 1))]);
}, yL = /[^.]*(?=\..*)\.|.*/, gL = /\..*/, EL = /::\d+$/, GS = {};
let Lw = 1;
const YR = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
}, _L = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
function WR(v, u) {
  return u && `${u}::${Lw++}` || v.uidEvent || Lw++;
}
function KR(v) {
  const u = WR(v);
  return v.uidEvent = u, GS[u] = GS[u] || {}, GS[u];
}
function SL(v, u) {
  return function f(E) {
    return N0(E, {
      delegateTarget: v
    }), f.oneOff && oe.off(v, E.type, u), u.apply(v, [E]);
  };
}
function CL(v, u, f) {
  return function E(T) {
    const O = v.querySelectorAll(u);
    for (let {
      target: A
    } = T; A && A !== this; A = A.parentNode)
      for (const _ of O)
        if (_ === A)
          return N0(T, {
            delegateTarget: A
          }), E.oneOff && oe.off(v, T.type, u, f), f.apply(A, [T]);
  };
}
function GR(v, u, f = null) {
  return Object.values(v).find((E) => E.callable === u && E.delegationSelector === f);
}
function QR(v, u, f) {
  const E = typeof u == "string", T = E ? f : u || f;
  let O = qR(v);
  return _L.has(O) || (O = v), [E, T, O];
}
function Mw(v, u, f, E, T) {
  if (typeof u != "string" || !v)
    return;
  let [O, A, _] = QR(u, f, E);
  u in YR && (A = ((ee) => function(ae) {
    if (!ae.relatedTarget || ae.relatedTarget !== ae.delegateTarget && !ae.delegateTarget.contains(ae.relatedTarget))
      return ee.call(this, ae);
  })(A));
  const H = KR(v), W = H[_] || (H[_] = {}), z = GR(W, A, O ? f : null);
  if (z) {
    z.oneOff = z.oneOff && T;
    return;
  }
  const le = WR(A, u.replace(yL, "")), q = O ? CL(v, f, A) : SL(v, A);
  q.delegationSelector = O ? f : null, q.callable = A, q.oneOff = T, q.uidEvent = le, W[le] = q, v.addEventListener(_, q, O);
}
function v0(v, u, f, E, T) {
  const O = GR(u[f], E, T);
  O && (v.removeEventListener(f, O, !!T), delete u[f][O.uidEvent]);
}
function TL(v, u, f, E) {
  const T = u[f] || {};
  for (const [O, A] of Object.entries(T))
    O.includes(E) && v0(v, u, f, A.callable, A.delegationSelector);
}
function qR(v) {
  return v = v.replace(gL, ""), YR[v] || v;
}
const oe = {
  on(v, u, f, E) {
    Mw(v, u, f, E, !1);
  },
  one(v, u, f, E) {
    Mw(v, u, f, E, !0);
  },
  off(v, u, f, E) {
    if (typeof u != "string" || !v)
      return;
    const [T, O, A] = QR(u, f, E), _ = A !== u, H = KR(v), W = H[A] || {}, z = u.startsWith(".");
    if (typeof O < "u") {
      if (!Object.keys(W).length)
        return;
      v0(v, H, A, O, T ? f : null);
      return;
    }
    if (z)
      for (const le of Object.keys(H))
        TL(v, H, le, u.slice(1));
    for (const [le, q] of Object.entries(W)) {
      const te = le.replace(EL, "");
      (!_ || u.includes(te)) && v0(v, H, A, q.callable, q.delegationSelector);
    }
  },
  trigger(v, u, f) {
    if (typeof u != "string" || !v)
      return null;
    const E = IR(), T = qR(u), O = u !== T;
    let A = null, _ = !0, H = !0, W = !1;
    O && E && (A = E.Event(u, f), E(v).trigger(A), _ = !A.isPropagationStopped(), H = !A.isImmediatePropagationStopped(), W = A.isDefaultPrevented());
    const z = N0(new Event(u, {
      bubbles: _,
      cancelable: !0
    }), f);
    return W && z.preventDefault(), H && v.dispatchEvent(z), z.defaultPrevented && A && A.preventDefault(), z;
  }
};
function N0(v, u = {}) {
  for (const [f, E] of Object.entries(u))
    try {
      v[f] = E;
    } catch {
      Object.defineProperty(v, f, {
        configurable: !0,
        get() {
          return E;
        }
      });
    }
  return v;
}
function zw(v) {
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
    const u = {}, f = Object.keys(v.dataset).filter((E) => E.startsWith("bs") && !E.startsWith("bsConfig"));
    for (const E of f) {
      let T = E.replace(/^bs/, "");
      T = T.charAt(0).toLowerCase() + T.slice(1, T.length), u[T] = zw(v.dataset[E]);
    }
    return u;
  },
  getDataAttribute(v, u) {
    return zw(v.getAttribute(`data-bs-${QS(u)}`));
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
    const E = iu(f) ? ou.getDataAttribute(f, "config") : {};
    return {
      ...this.constructor.Default,
      ...typeof E == "object" ? E : {},
      ...iu(f) ? ou.getDataAttributes(f) : {},
      ...typeof u == "object" ? u : {}
    };
  }
  _typeCheckConfig(u, f = this.constructor.DefaultType) {
    for (const [E, T] of Object.entries(f)) {
      const O = u[E], A = iu(O) ? "element" : pL(O);
      if (!new RegExp(T).test(A))
        throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${E}" provided type "${A}" but expected type "${T}".`);
    }
  }
}
const bL = "5.3.2";
class xo extends th {
  constructor(u, f) {
    super(), u = hs(u), u && (this._element = u, this._config = this._getConfig(f), WS.set(this._element, this.constructor.DATA_KEY, this));
  }
  // Public
  dispose() {
    WS.remove(this._element, this.constructor.DATA_KEY), oe.off(this._element, this.constructor.EVENT_KEY);
    for (const u of Object.getOwnPropertyNames(this))
      this[u] = null;
  }
  _queueCallback(u, f, E = !0) {
    BR(u, f, E);
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
    return bL;
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
    f.includes("#") && !f.startsWith("#") && (f = `#${f.split("#")[1]}`), u = f && f !== "#" ? FR(f.trim()) : null;
  }
  return u;
}, tt = {
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
    let E = v.parentNode.closest(u);
    for (; E; )
      f.push(E), E = E.parentNode.closest(u);
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
    return u && tt.findOne(u) ? u : null;
  },
  getElementFromSelector(v) {
    const u = qS(v);
    return u ? tt.findOne(u) : null;
  },
  getMultipleElementsFromSelector(v) {
    const u = qS(v);
    return u ? tt.find(u) : [];
  }
}, vg = (v, u = "hide") => {
  const f = `click.dismiss${v.EVENT_KEY}`, E = v.NAME;
  oe.on(document, f, `[data-bs-dismiss="${E}"]`, function(T) {
    if (["A", "AREA"].includes(this.tagName) && T.preventDefault(), ms(this))
      return;
    const O = tt.getElementFromSelector(this) || this.closest(`.${E}`);
    v.getOrCreateInstance(O)[u]();
  });
}, wL = "alert", RL = "bs.alert", XR = `.${RL}`, xL = `close${XR}`, DL = `closed${XR}`, OL = "fade", AL = "show";
class hg extends xo {
  // Getters
  static get NAME() {
    return wL;
  }
  // Public
  close() {
    if (oe.trigger(this._element, xL).defaultPrevented)
      return;
    this._element.classList.remove(AL);
    const f = this._element.classList.contains(OL);
    this._queueCallback(() => this._destroyElement(), this._element, f);
  }
  // Private
  _destroyElement() {
    this._element.remove(), oe.trigger(this._element, DL), this.dispose();
  }
  // Static
  static jQueryInterface(u) {
    return this.each(function() {
      const f = hg.getOrCreateInstance(this);
      if (typeof u == "string") {
        if (f[u] === void 0 || u.startsWith("_") || u === "constructor")
          throw new TypeError(`No method named "${u}"`);
        f[u](this);
      }
    });
  }
}
vg(hg, "close");
Yi(hg);
const kL = "button", NL = "bs.button", LL = `.${NL}`, ML = ".data-api", zL = "active", Uw = '[data-bs-toggle="button"]', UL = `click${LL}${ML}`;
class mg extends xo {
  // Getters
  static get NAME() {
    return kL;
  }
  // Public
  toggle() {
    this._element.setAttribute("aria-pressed", this._element.classList.toggle(zL));
  }
  // Static
  static jQueryInterface(u) {
    return this.each(function() {
      const f = mg.getOrCreateInstance(this);
      u === "toggle" && f[u]();
    });
  }
}
oe.on(document, UL, Uw, (v) => {
  v.preventDefault();
  const u = v.target.closest(Uw);
  mg.getOrCreateInstance(u).toggle();
});
Yi(mg);
const jL = "swipe", Bd = ".bs.swipe", PL = `touchstart${Bd}`, $L = `touchmove${Bd}`, FL = `touchend${Bd}`, HL = `pointerdown${Bd}`, VL = `pointerup${Bd}`, IL = "touch", BL = "pen", YL = "pointer-event", WL = 40, KL = {
  endCallback: null,
  leftCallback: null,
  rightCallback: null
}, GL = {
  endCallback: "(function|null)",
  leftCallback: "(function|null)",
  rightCallback: "(function|null)"
};
class ug extends th {
  constructor(u, f) {
    super(), this._element = u, !(!u || !ug.isSupported()) && (this._config = this._getConfig(f), this._deltaX = 0, this._supportPointerEvents = !!window.PointerEvent, this._initEvents());
  }
  // Getters
  static get Default() {
    return KL;
  }
  static get DefaultType() {
    return GL;
  }
  static get NAME() {
    return jL;
  }
  // Public
  dispose() {
    oe.off(this._element, Bd);
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
    if (u <= WL)
      return;
    const f = u / this._deltaX;
    this._deltaX = 0, f && ni(f > 0 ? this._config.rightCallback : this._config.leftCallback);
  }
  _initEvents() {
    this._supportPointerEvents ? (oe.on(this._element, HL, (u) => this._start(u)), oe.on(this._element, VL, (u) => this._end(u)), this._element.classList.add(YL)) : (oe.on(this._element, PL, (u) => this._start(u)), oe.on(this._element, $L, (u) => this._move(u)), oe.on(this._element, FL, (u) => this._end(u)));
  }
  _eventIsPointerPenTouch(u) {
    return this._supportPointerEvents && (u.pointerType === BL || u.pointerType === IL);
  }
  // Static
  static isSupported() {
    return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
  }
}
const QL = "carousel", qL = "bs.carousel", Es = `.${qL}`, ZR = ".data-api", XL = "ArrowLeft", ZL = "ArrowRight", JL = 500, Wv = "next", Od = "prev", Nd = "left", rg = "right", eM = `slide${Es}`, XS = `slid${Es}`, tM = `keydown${Es}`, nM = `mouseenter${Es}`, rM = `mouseleave${Es}`, aM = `dragstart${Es}`, iM = `load${Es}${ZR}`, oM = `click${Es}${ZR}`, JR = "carousel", qy = "active", lM = "slide", uM = "carousel-item-end", sM = "carousel-item-start", cM = "carousel-item-next", fM = "carousel-item-prev", e1 = ".active", t1 = ".carousel-item", dM = e1 + t1, pM = ".carousel-item img", vM = ".carousel-indicators", hM = "[data-bs-slide], [data-bs-slide-to]", mM = '[data-bs-ride="carousel"]', yM = {
  [XL]: rg,
  [ZL]: Nd
}, gM = {
  interval: 5e3,
  keyboard: !0,
  pause: "hover",
  ride: !1,
  touch: !0,
  wrap: !0
}, EM = {
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
    super(u, f), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = tt.findOne(vM, this._element), this._addEventListeners(), this._config.ride === JR && this.cycle();
  }
  // Getters
  static get Default() {
    return gM;
  }
  static get DefaultType() {
    return EM;
  }
  static get NAME() {
    return QL;
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
    this._isSliding && HR(this._element), this._clearInterval();
  }
  cycle() {
    this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
  }
  _maybeEnableCycle() {
    if (this._config.ride) {
      if (this._isSliding) {
        oe.one(this._element, XS, () => this.cycle());
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
      oe.one(this._element, XS, () => this.to(u));
      return;
    }
    const E = this._getItemIndex(this._getActive());
    if (E === u)
      return;
    const T = u > E ? Wv : Od;
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
    this._config.keyboard && oe.on(this._element, tM, (u) => this._keydown(u)), this._config.pause === "hover" && (oe.on(this._element, nM, () => this.pause()), oe.on(this._element, rM, () => this._maybeEnableCycle())), this._config.touch && ug.isSupported() && this._addTouchEventListeners();
  }
  _addTouchEventListeners() {
    for (const E of tt.find(pM, this._element))
      oe.on(E, aM, (T) => T.preventDefault());
    const f = {
      leftCallback: () => this._slide(this._directionToOrder(Nd)),
      rightCallback: () => this._slide(this._directionToOrder(rg)),
      endCallback: () => {
        this._config.pause === "hover" && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), JL + this._config.interval));
      }
    };
    this._swipeHelper = new ug(this._element, f);
  }
  _keydown(u) {
    if (/input|textarea/i.test(u.target.tagName))
      return;
    const f = yM[u.key];
    f && (u.preventDefault(), this._slide(this._directionToOrder(f)));
  }
  _getItemIndex(u) {
    return this._getItems().indexOf(u);
  }
  _setActiveIndicatorElement(u) {
    if (!this._indicatorsElement)
      return;
    const f = tt.findOne(e1, this._indicatorsElement);
    f.classList.remove(qy), f.removeAttribute("aria-current");
    const E = tt.findOne(`[data-bs-slide-to="${u}"]`, this._indicatorsElement);
    E && (E.classList.add(qy), E.setAttribute("aria-current", "true"));
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
    const E = this._getActive(), T = u === Wv, O = f || k0(this._getItems(), E, T, this._config.wrap);
    if (O === E)
      return;
    const A = this._getItemIndex(O), _ = (te) => oe.trigger(this._element, te, {
      relatedTarget: O,
      direction: this._orderToDirection(u),
      from: this._getItemIndex(E),
      to: A
    });
    if (_(eM).defaultPrevented || !E || !O)
      return;
    const W = !!this._interval;
    this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(A), this._activeElement = O;
    const z = T ? sM : uM, le = T ? cM : fM;
    O.classList.add(le), eh(O), E.classList.add(z), O.classList.add(z);
    const q = () => {
      O.classList.remove(z, le), O.classList.add(qy), E.classList.remove(qy, le, z), this._isSliding = !1, _(XS);
    };
    this._queueCallback(q, E, this._isAnimated()), W && this.cycle();
  }
  _isAnimated() {
    return this._element.classList.contains(lM);
  }
  _getActive() {
    return tt.findOne(dM, this._element);
  }
  _getItems() {
    return tt.find(t1, this._element);
  }
  _clearInterval() {
    this._interval && (clearInterval(this._interval), this._interval = null);
  }
  _directionToOrder(u) {
    return Ii() ? u === Nd ? Od : Wv : u === Nd ? Wv : Od;
  }
  _orderToDirection(u) {
    return Ii() ? u === Od ? Nd : rg : u === Od ? rg : Nd;
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
oe.on(document, oM, hM, function(v) {
  const u = tt.getElementFromSelector(this);
  if (!u || !u.classList.contains(JR))
    return;
  v.preventDefault();
  const f = nh.getOrCreateInstance(u), E = this.getAttribute("data-bs-slide-to");
  if (E) {
    f.to(E), f._maybeEnableCycle();
    return;
  }
  if (ou.getDataAttribute(this, "slide") === "next") {
    f.next(), f._maybeEnableCycle();
    return;
  }
  f.prev(), f._maybeEnableCycle();
});
oe.on(window, iM, () => {
  const v = tt.find(mM);
  for (const u of v)
    nh.getOrCreateInstance(u);
});
Yi(nh);
const _M = "collapse", SM = "bs.collapse", rh = `.${SM}`, CM = ".data-api", TM = `show${rh}`, bM = `shown${rh}`, wM = `hide${rh}`, RM = `hidden${rh}`, xM = `click${rh}${CM}`, ZS = "show", Md = "collapse", Xy = "collapsing", DM = "collapsed", OM = `:scope .${Md} .${Md}`, AM = "collapse-horizontal", kM = "width", NM = "height", LM = ".collapse.show, .collapse.collapsing", h0 = '[data-bs-toggle="collapse"]', MM = {
  parent: null,
  toggle: !0
}, zM = {
  parent: "(null|element)",
  toggle: "boolean"
};
class Zv extends xo {
  constructor(u, f) {
    super(u, f), this._isTransitioning = !1, this._triggerArray = [];
    const E = tt.find(h0);
    for (const T of E) {
      const O = tt.getSelectorFromElement(T), A = tt.find(O).filter((_) => _ === this._element);
      O !== null && A.length && this._triggerArray.push(T);
    }
    this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
  }
  // Getters
  static get Default() {
    return MM;
  }
  static get DefaultType() {
    return zM;
  }
  static get NAME() {
    return _M;
  }
  // Public
  toggle() {
    this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (this._isTransitioning || this._isShown())
      return;
    let u = [];
    if (this._config.parent && (u = this._getFirstLevelChildren(LM).filter((_) => _ !== this._element).map((_) => Zv.getOrCreateInstance(_, {
      toggle: !1
    }))), u.length && u[0]._isTransitioning || oe.trigger(this._element, TM).defaultPrevented)
      return;
    for (const _ of u)
      _.hide();
    const E = this._getDimension();
    this._element.classList.remove(Md), this._element.classList.add(Xy), this._element.style[E] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
    const T = () => {
      this._isTransitioning = !1, this._element.classList.remove(Xy), this._element.classList.add(Md, ZS), this._element.style[E] = "", oe.trigger(this._element, bM);
    }, A = `scroll${E[0].toUpperCase() + E.slice(1)}`;
    this._queueCallback(T, this._element, !0), this._element.style[E] = `${this._element[A]}px`;
  }
  hide() {
    if (this._isTransitioning || !this._isShown() || oe.trigger(this._element, wM).defaultPrevented)
      return;
    const f = this._getDimension();
    this._element.style[f] = `${this._element.getBoundingClientRect()[f]}px`, eh(this._element), this._element.classList.add(Xy), this._element.classList.remove(Md, ZS);
    for (const T of this._triggerArray) {
      const O = tt.getElementFromSelector(T);
      O && !this._isShown(O) && this._addAriaAndCollapsedClass([T], !1);
    }
    this._isTransitioning = !0;
    const E = () => {
      this._isTransitioning = !1, this._element.classList.remove(Xy), this._element.classList.add(Md), oe.trigger(this._element, RM);
    };
    this._element.style[f] = "", this._queueCallback(E, this._element, !0);
  }
  _isShown(u = this._element) {
    return u.classList.contains(ZS);
  }
  // Private
  _configAfterMerge(u) {
    return u.toggle = !!u.toggle, u.parent = hs(u.parent), u;
  }
  _getDimension() {
    return this._element.classList.contains(AM) ? kM : NM;
  }
  _initializeChildren() {
    if (!this._config.parent)
      return;
    const u = this._getFirstLevelChildren(h0);
    for (const f of u) {
      const E = tt.getElementFromSelector(f);
      E && this._addAriaAndCollapsedClass([f], this._isShown(E));
    }
  }
  _getFirstLevelChildren(u) {
    const f = tt.find(OM, this._config.parent);
    return tt.find(u, this._config.parent).filter((E) => !f.includes(E));
  }
  _addAriaAndCollapsedClass(u, f) {
    if (u.length)
      for (const E of u)
        E.classList.toggle(DM, !f), E.setAttribute("aria-expanded", f);
  }
  // Static
  static jQueryInterface(u) {
    const f = {};
    return typeof u == "string" && /show|hide/.test(u) && (f.toggle = !1), this.each(function() {
      const E = Zv.getOrCreateInstance(this, f);
      if (typeof u == "string") {
        if (typeof E[u] > "u")
          throw new TypeError(`No method named "${u}"`);
        E[u]();
      }
    });
  }
}
oe.on(document, xM, h0, function(v) {
  (v.target.tagName === "A" || v.delegateTarget && v.delegateTarget.tagName === "A") && v.preventDefault();
  for (const u of tt.getMultipleElementsFromSelector(this))
    Zv.getOrCreateInstance(u, {
      toggle: !1
    }).toggle();
});
Yi(Zv);
const jw = "dropdown", UM = "bs.dropdown", Wc = `.${UM}`, L0 = ".data-api", jM = "Escape", Pw = "Tab", PM = "ArrowUp", $w = "ArrowDown", $M = 2, FM = `hide${Wc}`, HM = `hidden${Wc}`, VM = `show${Wc}`, IM = `shown${Wc}`, n1 = `click${Wc}${L0}`, r1 = `keydown${Wc}${L0}`, BM = `keyup${Wc}${L0}`, Ld = "show", YM = "dropup", WM = "dropend", KM = "dropstart", GM = "dropup-center", QM = "dropdown-center", Fc = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', qM = `${Fc}.${Ld}`, ag = ".dropdown-menu", XM = ".navbar", ZM = ".navbar-nav", JM = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", ez = Ii() ? "top-end" : "top-start", tz = Ii() ? "top-start" : "top-end", nz = Ii() ? "bottom-end" : "bottom-start", rz = Ii() ? "bottom-start" : "bottom-end", az = Ii() ? "left-start" : "right-start", iz = Ii() ? "right-start" : "left-start", oz = "top", lz = "bottom", uz = {
  autoClose: !0,
  boundary: "clippingParents",
  display: "dynamic",
  offset: [0, 2],
  popperConfig: null,
  reference: "toggle"
}, sz = {
  autoClose: "(boolean|string)",
  boundary: "(string|element)",
  display: "string",
  offset: "(array|string|function)",
  popperConfig: "(null|object|function)",
  reference: "(string|element|object)"
};
class pl extends xo {
  constructor(u, f) {
    super(u, f), this._popper = null, this._parent = this._element.parentNode, this._menu = tt.next(this._element, ag)[0] || tt.prev(this._element, ag)[0] || tt.findOne(ag, this._parent), this._inNavbar = this._detectNavbar();
  }
  // Getters
  static get Default() {
    return uz;
  }
  static get DefaultType() {
    return sz;
  }
  static get NAME() {
    return jw;
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
    if (!oe.trigger(this._element, VM, u).defaultPrevented) {
      if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(ZM))
        for (const E of [].concat(...document.body.children))
          oe.on(E, "mouseover", lg);
      this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(Ld), this._element.classList.add(Ld), oe.trigger(this._element, IM, u);
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
    if (!oe.trigger(this._element, FM, u).defaultPrevented) {
      if ("ontouchstart" in document.documentElement)
        for (const E of [].concat(...document.body.children))
          oe.off(E, "mouseover", lg);
      this._popper && this._popper.destroy(), this._menu.classList.remove(Ld), this._element.classList.remove(Ld), this._element.setAttribute("aria-expanded", "false"), ou.removeDataAttribute(this._menu, "popper"), oe.trigger(this._element, HM, u);
    }
  }
  _getConfig(u) {
    if (u = super._getConfig(u), typeof u.reference == "object" && !iu(u.reference) && typeof u.reference.getBoundingClientRect != "function")
      throw new TypeError(`${jw.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
    return u;
  }
  _createPopper() {
    if (typeof $R > "u")
      throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
    let u = this._element;
    this._config.reference === "parent" ? u = this._parent : iu(this._config.reference) ? u = hs(this._config.reference) : typeof this._config.reference == "object" && (u = this._config.reference);
    const f = this._getPopperConfig();
    this._popper = A0(u, this._menu, f);
  }
  _isShown() {
    return this._menu.classList.contains(Ld);
  }
  _getPlacement() {
    const u = this._parent;
    if (u.classList.contains(WM))
      return az;
    if (u.classList.contains(KM))
      return iz;
    if (u.classList.contains(GM))
      return oz;
    if (u.classList.contains(QM))
      return lz;
    const f = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
    return u.classList.contains(YM) ? f ? tz : ez : f ? rz : nz;
  }
  _detectNavbar() {
    return this._element.closest(XM) !== null;
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
    const E = tt.find(JM, this._menu).filter((T) => Id(T));
    E.length && k0(E, f, u === $w, !E.includes(f)).focus();
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
    if (u.button === $M || u.type === "keyup" && u.key !== Pw)
      return;
    const f = tt.find(qM);
    for (const E of f) {
      const T = pl.getInstance(E);
      if (!T || T._config.autoClose === !1)
        continue;
      const O = u.composedPath(), A = O.includes(T._menu);
      if (O.includes(T._element) || T._config.autoClose === "inside" && !A || T._config.autoClose === "outside" && A || T._menu.contains(u.target) && (u.type === "keyup" && u.key === Pw || /input|select|option|textarea|form/i.test(u.target.tagName)))
        continue;
      const _ = {
        relatedTarget: T._element
      };
      u.type === "click" && (_.clickEvent = u), T._completeHide(_);
    }
  }
  static dataApiKeydownHandler(u) {
    const f = /input|textarea/i.test(u.target.tagName), E = u.key === jM, T = [PM, $w].includes(u.key);
    if (!T && !E || f && !E)
      return;
    u.preventDefault();
    const O = this.matches(Fc) ? this : tt.prev(this, Fc)[0] || tt.next(this, Fc)[0] || tt.findOne(Fc, u.delegateTarget.parentNode), A = pl.getOrCreateInstance(O);
    if (T) {
      u.stopPropagation(), A.show(), A._selectMenuItem(u);
      return;
    }
    A._isShown() && (u.stopPropagation(), A.hide(), O.focus());
  }
}
oe.on(document, r1, Fc, pl.dataApiKeydownHandler);
oe.on(document, r1, ag, pl.dataApiKeydownHandler);
oe.on(document, n1, pl.clearMenus);
oe.on(document, BM, pl.clearMenus);
oe.on(document, n1, Fc, function(v) {
  v.preventDefault(), pl.getOrCreateInstance(this).toggle();
});
Yi(pl);
const a1 = "backdrop", cz = "fade", Fw = "show", Hw = `mousedown.bs.${a1}`, fz = {
  className: "modal-backdrop",
  clickCallback: null,
  isAnimated: !1,
  isVisible: !0,
  // if false, we use the backdrop helper without adding any element to the dom
  rootElement: "body"
  // give the choice to place backdrop under different elements
}, dz = {
  className: "string",
  clickCallback: "(function|null)",
  isAnimated: "boolean",
  isVisible: "boolean",
  rootElement: "(element|string)"
};
class i1 extends th {
  constructor(u) {
    super(), this._config = this._getConfig(u), this._isAppended = !1, this._element = null;
  }
  // Getters
  static get Default() {
    return fz;
  }
  static get DefaultType() {
    return dz;
  }
  static get NAME() {
    return a1;
  }
  // Public
  show(u) {
    if (!this._config.isVisible) {
      ni(u);
      return;
    }
    this._append();
    const f = this._getElement();
    this._config.isAnimated && eh(f), f.classList.add(Fw), this._emulateAnimation(() => {
      ni(u);
    });
  }
  hide(u) {
    if (!this._config.isVisible) {
      ni(u);
      return;
    }
    this._getElement().classList.remove(Fw), this._emulateAnimation(() => {
      this.dispose(), ni(u);
    });
  }
  dispose() {
    this._isAppended && (oe.off(this._element, Hw), this._element.remove(), this._isAppended = !1);
  }
  // Private
  _getElement() {
    if (!this._element) {
      const u = document.createElement("div");
      u.className = this._config.className, this._config.isAnimated && u.classList.add(cz), this._element = u;
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
    this._config.rootElement.append(u), oe.on(u, Hw, () => {
      ni(this._config.clickCallback);
    }), this._isAppended = !0;
  }
  _emulateAnimation(u) {
    BR(u, this._getElement(), this._config.isAnimated);
  }
}
const pz = "focustrap", vz = "bs.focustrap", sg = `.${vz}`, hz = `focusin${sg}`, mz = `keydown.tab${sg}`, yz = "Tab", gz = "forward", Vw = "backward", Ez = {
  autofocus: !0,
  trapElement: null
  // The element to trap focus inside of
}, _z = {
  autofocus: "boolean",
  trapElement: "element"
};
class o1 extends th {
  constructor(u) {
    super(), this._config = this._getConfig(u), this._isActive = !1, this._lastTabNavDirection = null;
  }
  // Getters
  static get Default() {
    return Ez;
  }
  static get DefaultType() {
    return _z;
  }
  static get NAME() {
    return pz;
  }
  // Public
  activate() {
    this._isActive || (this._config.autofocus && this._config.trapElement.focus(), oe.off(document, sg), oe.on(document, hz, (u) => this._handleFocusin(u)), oe.on(document, mz, (u) => this._handleKeydown(u)), this._isActive = !0);
  }
  deactivate() {
    this._isActive && (this._isActive = !1, oe.off(document, sg));
  }
  // Private
  _handleFocusin(u) {
    const {
      trapElement: f
    } = this._config;
    if (u.target === document || u.target === f || f.contains(u.target))
      return;
    const E = tt.focusableChildren(f);
    E.length === 0 ? f.focus() : this._lastTabNavDirection === Vw ? E[E.length - 1].focus() : E[0].focus();
  }
  _handleKeydown(u) {
    u.key === yz && (this._lastTabNavDirection = u.shiftKey ? Vw : gz);
  }
}
const Iw = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", Bw = ".sticky-top", Zy = "padding-right", Yw = "margin-right";
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
    this._disableOverFlow(), this._setElementAttributes(this._element, Zy, (f) => f + u), this._setElementAttributes(Iw, Zy, (f) => f + u), this._setElementAttributes(Bw, Yw, (f) => f - u);
  }
  reset() {
    this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, Zy), this._resetElementAttributes(Iw, Zy), this._resetElementAttributes(Bw, Yw);
  }
  isOverflowing() {
    return this.getWidth() > 0;
  }
  // Private
  _disableOverFlow() {
    this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
  }
  _setElementAttributes(u, f, E) {
    const T = this.getWidth(), O = (A) => {
      if (A !== this._element && window.innerWidth > A.clientWidth + T)
        return;
      this._saveInitialAttribute(A, f);
      const _ = window.getComputedStyle(A).getPropertyValue(f);
      A.style.setProperty(f, `${E(Number.parseFloat(_))}px`);
    };
    this._applyManipulationCallback(u, O);
  }
  _saveInitialAttribute(u, f) {
    const E = u.style.getPropertyValue(f);
    E && ou.setDataAttribute(u, f, E);
  }
  _resetElementAttributes(u, f) {
    const E = (T) => {
      const O = ou.getDataAttribute(T, f);
      if (O === null) {
        T.style.removeProperty(f);
        return;
      }
      ou.removeDataAttribute(T, f), T.style.setProperty(f, O);
    };
    this._applyManipulationCallback(u, E);
  }
  _applyManipulationCallback(u, f) {
    if (iu(u)) {
      f(u);
      return;
    }
    for (const E of tt.find(u, this._element))
      f(E);
  }
}
const Sz = "modal", Cz = "bs.modal", Bi = `.${Cz}`, Tz = ".data-api", bz = "Escape", wz = `hide${Bi}`, Rz = `hidePrevented${Bi}`, l1 = `hidden${Bi}`, u1 = `show${Bi}`, xz = `shown${Bi}`, Dz = `resize${Bi}`, Oz = `click.dismiss${Bi}`, Az = `mousedown.dismiss${Bi}`, kz = `keydown.dismiss${Bi}`, Nz = `click${Bi}${Tz}`, Ww = "modal-open", Lz = "fade", Kw = "show", JS = "modal-static", Mz = ".modal.show", zz = ".modal-dialog", Uz = ".modal-body", jz = '[data-bs-toggle="modal"]', Pz = {
  backdrop: !0,
  focus: !0,
  keyboard: !0
}, $z = {
  backdrop: "(boolean|string)",
  focus: "boolean",
  keyboard: "boolean"
};
class Yc extends xo {
  constructor(u, f) {
    super(u, f), this._dialog = tt.findOne(zz, this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new m0(), this._addEventListeners();
  }
  // Getters
  static get Default() {
    return Pz;
  }
  static get DefaultType() {
    return $z;
  }
  static get NAME() {
    return Sz;
  }
  // Public
  toggle(u) {
    return this._isShown ? this.hide() : this.show(u);
  }
  show(u) {
    this._isShown || this._isTransitioning || oe.trigger(this._element, u1, {
      relatedTarget: u
    }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(Ww), this._adjustDialog(), this._backdrop.show(() => this._showElement(u)));
  }
  hide() {
    !this._isShown || this._isTransitioning || oe.trigger(this._element, wz).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(Kw), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated()));
  }
  dispose() {
    oe.off(window, Bi), oe.off(this._dialog, Bi), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
  }
  handleUpdate() {
    this._adjustDialog();
  }
  // Private
  _initializeBackDrop() {
    return new i1({
      isVisible: !!this._config.backdrop,
      // 'static' option will be translated to true, and booleans will keep their value,
      isAnimated: this._isAnimated()
    });
  }
  _initializeFocusTrap() {
    return new o1({
      trapElement: this._element
    });
  }
  _showElement(u) {
    document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
    const f = tt.findOne(Uz, this._dialog);
    f && (f.scrollTop = 0), eh(this._element), this._element.classList.add(Kw);
    const E = () => {
      this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, oe.trigger(this._element, xz, {
        relatedTarget: u
      });
    };
    this._queueCallback(E, this._dialog, this._isAnimated());
  }
  _addEventListeners() {
    oe.on(this._element, kz, (u) => {
      if (u.key === bz) {
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        this._triggerBackdropTransition();
      }
    }), oe.on(window, Dz, () => {
      this._isShown && !this._isTransitioning && this._adjustDialog();
    }), oe.on(this._element, Az, (u) => {
      oe.one(this._element, Oz, (f) => {
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
      document.body.classList.remove(Ww), this._resetAdjustments(), this._scrollBar.reset(), oe.trigger(this._element, l1);
    });
  }
  _isAnimated() {
    return this._element.classList.contains(Lz);
  }
  _triggerBackdropTransition() {
    if (oe.trigger(this._element, Rz).defaultPrevented)
      return;
    const f = this._element.scrollHeight > document.documentElement.clientHeight, E = this._element.style.overflowY;
    E === "hidden" || this._element.classList.contains(JS) || (f || (this._element.style.overflowY = "hidden"), this._element.classList.add(JS), this._queueCallback(() => {
      this._element.classList.remove(JS), this._queueCallback(() => {
        this._element.style.overflowY = E;
      }, this._dialog);
    }, this._dialog), this._element.focus());
  }
  /**
   * The following methods are used to handle overflowing modals
   */
  _adjustDialog() {
    const u = this._element.scrollHeight > document.documentElement.clientHeight, f = this._scrollBar.getWidth(), E = f > 0;
    if (E && !u) {
      const T = Ii() ? "paddingLeft" : "paddingRight";
      this._element.style[T] = `${f}px`;
    }
    if (!E && u) {
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
      const E = Yc.getOrCreateInstance(this, u);
      if (typeof u == "string") {
        if (typeof E[u] > "u")
          throw new TypeError(`No method named "${u}"`);
        E[u](f);
      }
    });
  }
}
oe.on(document, Nz, jz, function(v) {
  const u = tt.getElementFromSelector(this);
  ["A", "AREA"].includes(this.tagName) && v.preventDefault(), oe.one(u, u1, (T) => {
    T.defaultPrevented || oe.one(u, l1, () => {
      Id(this) && this.focus();
    });
  });
  const f = tt.findOne(Mz);
  f && Yc.getInstance(f).hide(), Yc.getOrCreateInstance(u).toggle(this);
});
vg(Yc);
Yi(Yc);
const Fz = "offcanvas", Hz = "bs.offcanvas", uu = `.${Hz}`, s1 = ".data-api", Vz = `load${uu}${s1}`, Iz = "Escape", Gw = "show", Qw = "showing", qw = "hiding", Bz = "offcanvas-backdrop", c1 = ".offcanvas.show", Yz = `show${uu}`, Wz = `shown${uu}`, Kz = `hide${uu}`, Xw = `hidePrevented${uu}`, f1 = `hidden${uu}`, Gz = `resize${uu}`, Qz = `click${uu}${s1}`, qz = `keydown.dismiss${uu}`, Xz = '[data-bs-toggle="offcanvas"]', Zz = {
  backdrop: !0,
  keyboard: !0,
  scroll: !1
}, Jz = {
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
    return Zz;
  }
  static get DefaultType() {
    return Jz;
  }
  static get NAME() {
    return Fz;
  }
  // Public
  toggle(u) {
    return this._isShown ? this.hide() : this.show(u);
  }
  show(u) {
    if (this._isShown || oe.trigger(this._element, Yz, {
      relatedTarget: u
    }).defaultPrevented)
      return;
    this._isShown = !0, this._backdrop.show(), this._config.scroll || new m0().hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(Qw);
    const E = () => {
      (!this._config.scroll || this._config.backdrop) && this._focustrap.activate(), this._element.classList.add(Gw), this._element.classList.remove(Qw), oe.trigger(this._element, Wz, {
        relatedTarget: u
      });
    };
    this._queueCallback(E, this._element, !0);
  }
  hide() {
    if (!this._isShown || oe.trigger(this._element, Kz).defaultPrevented)
      return;
    this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(qw), this._backdrop.hide();
    const f = () => {
      this._element.classList.remove(Gw, qw), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new m0().reset(), oe.trigger(this._element, f1);
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
        oe.trigger(this._element, Xw);
        return;
      }
      this.hide();
    }, f = !!this._config.backdrop;
    return new i1({
      className: Bz,
      isVisible: f,
      isAnimated: !0,
      rootElement: this._element.parentNode,
      clickCallback: f ? u : null
    });
  }
  _initializeFocusTrap() {
    return new o1({
      trapElement: this._element
    });
  }
  _addEventListeners() {
    oe.on(this._element, qz, (u) => {
      if (u.key === Iz) {
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        oe.trigger(this._element, Xw);
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
oe.on(document, Qz, Xz, function(v) {
  const u = tt.getElementFromSelector(this);
  if (["A", "AREA"].includes(this.tagName) && v.preventDefault(), ms(this))
    return;
  oe.one(u, f1, () => {
    Id(this) && this.focus();
  });
  const f = tt.findOne(c1);
  f && f !== u && ys.getInstance(f).hide(), ys.getOrCreateInstance(u).toggle(this);
});
oe.on(window, Vz, () => {
  for (const v of tt.find(c1))
    ys.getOrCreateInstance(v).show();
});
oe.on(window, Gz, () => {
  for (const v of tt.find("[aria-modal][class*=show][class*=offcanvas-]"))
    getComputedStyle(v).position !== "fixed" && ys.getOrCreateInstance(v).hide();
});
vg(ys);
Yi(ys);
const eU = /^aria-[\w-]*$/i, d1 = {
  // Global attributes allowed on any supplied element below.
  "*": ["class", "dir", "id", "lang", "role", eU],
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
}, tU = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]), nU = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i, rU = (v, u) => {
  const f = v.nodeName.toLowerCase();
  return u.includes(f) ? tU.has(f) ? !!nU.test(v.nodeValue) : !0 : u.filter((E) => E instanceof RegExp).some((E) => E.test(f));
};
function aU(v, u, f) {
  if (!v.length)
    return v;
  if (f && typeof f == "function")
    return f(v);
  const T = new window.DOMParser().parseFromString(v, "text/html"), O = [].concat(...T.body.querySelectorAll("*"));
  for (const A of O) {
    const _ = A.nodeName.toLowerCase();
    if (!Object.keys(u).includes(_)) {
      A.remove();
      continue;
    }
    const H = [].concat(...A.attributes), W = [].concat(u["*"] || [], u[_] || []);
    for (const z of H)
      rU(z, W) || A.removeAttribute(z.nodeName);
  }
  return T.body.innerHTML;
}
const iU = "TemplateFactory", oU = {
  allowList: d1,
  content: {},
  // { selector : text ,  selector2 : text2 , }
  extraClass: "",
  html: !1,
  sanitize: !0,
  sanitizeFn: null,
  template: "<div></div>"
}, lU = {
  allowList: "object",
  content: "object",
  extraClass: "(string|function)",
  html: "boolean",
  sanitize: "boolean",
  sanitizeFn: "(null|function)",
  template: "string"
}, uU = {
  entry: "(string|element|function|null)",
  selector: "(string|element)"
};
class sU extends th {
  constructor(u) {
    super(), this._config = this._getConfig(u);
  }
  // Getters
  static get Default() {
    return oU;
  }
  static get DefaultType() {
    return lU;
  }
  static get NAME() {
    return iU;
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
    for (const [T, O] of Object.entries(this._config.content))
      this._setContent(u, O, T);
    const f = u.children[0], E = this._resolvePossibleFunction(this._config.extraClass);
    return E && f.classList.add(...E.split(" ")), f;
  }
  // Private
  _typeCheckConfig(u) {
    super._typeCheckConfig(u), this._checkContent(u.content);
  }
  _checkContent(u) {
    for (const [f, E] of Object.entries(u))
      super._typeCheckConfig({
        selector: f,
        entry: E
      }, uU);
  }
  _setContent(u, f, E) {
    const T = tt.findOne(E, u);
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
    return this._config.sanitize ? aU(u, this._config.allowList, this._config.sanitizeFn) : u;
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
const cU = "tooltip", fU = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]), e0 = "fade", dU = "modal", Jy = "show", pU = ".tooltip-inner", Zw = `.${dU}`, Jw = "hide.bs.modal", Kv = "hover", t0 = "focus", vU = "click", hU = "manual", mU = "hide", yU = "hidden", gU = "show", EU = "shown", _U = "inserted", SU = "click", CU = "focusin", TU = "focusout", bU = "mouseenter", wU = "mouseleave", RU = {
  AUTO: "auto",
  TOP: "top",
  RIGHT: Ii() ? "left" : "right",
  BOTTOM: "bottom",
  LEFT: Ii() ? "right" : "left"
}, xU = {
  allowList: d1,
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
}, DU = {
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
    if (typeof $R > "u")
      throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
    super(u, f), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle();
  }
  // Getters
  static get Default() {
    return xU;
  }
  static get DefaultType() {
    return DU;
  }
  static get NAME() {
    return cU;
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
    clearTimeout(this._timeout), oe.off(this._element.closest(Zw), Jw, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose();
  }
  show() {
    if (this._element.style.display === "none")
      throw new Error("Please use show on visible elements");
    if (!(this._isWithContent() && this._isEnabled))
      return;
    const u = oe.trigger(this._element, this.constructor.eventName(gU)), E = (VR(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
    if (u.defaultPrevented || !E)
      return;
    this._disposePopper();
    const T = this._getTipElement();
    this._element.setAttribute("aria-describedby", T.getAttribute("id"));
    const {
      container: O
    } = this._config;
    if (this._element.ownerDocument.documentElement.contains(this.tip) || (O.append(T), oe.trigger(this._element, this.constructor.eventName(_U))), this._popper = this._createPopper(T), T.classList.add(Jy), "ontouchstart" in document.documentElement)
      for (const _ of [].concat(...document.body.children))
        oe.on(_, "mouseover", lg);
    const A = () => {
      oe.trigger(this._element, this.constructor.eventName(EU)), this._isHovered === !1 && this._leave(), this._isHovered = !1;
    };
    this._queueCallback(A, this.tip, this._isAnimated());
  }
  hide() {
    if (!this._isShown() || oe.trigger(this._element, this.constructor.eventName(mU)).defaultPrevented)
      return;
    if (this._getTipElement().classList.remove(Jy), "ontouchstart" in document.documentElement)
      for (const T of [].concat(...document.body.children))
        oe.off(T, "mouseover", lg);
    this._activeTrigger[vU] = !1, this._activeTrigger[t0] = !1, this._activeTrigger[Kv] = !1, this._isHovered = null;
    const E = () => {
      this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), oe.trigger(this._element, this.constructor.eventName(yU)));
    };
    this._queueCallback(E, this.tip, this._isAnimated());
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
    f.classList.remove(e0, Jy), f.classList.add(`bs-${this.constructor.NAME}-auto`);
    const E = vL(this.constructor.NAME).toString();
    return f.setAttribute("id", E), this._isAnimated() && f.classList.add(e0), f;
  }
  setContent(u) {
    this._newContent = u, this._isShown() && (this._disposePopper(), this.show());
  }
  _getTemplateFactory(u) {
    return this._templateFactory ? this._templateFactory.changeContent(u) : this._templateFactory = new sU({
      ...this._config,
      // the `content` var has to be after `this._config`
      // to override config.content in case of popover
      content: u,
      extraClass: this._resolvePossibleFunction(this._config.customClass)
    }), this._templateFactory;
  }
  _getContentForTemplate() {
    return {
      [pU]: this._getTitle()
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
    return this.tip && this.tip.classList.contains(Jy);
  }
  _createPopper(u) {
    const f = ni(this._config.placement, [this, u, this._element]), E = RU[f.toUpperCase()];
    return A0(this._element, u, this._getPopperConfig(E));
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
        fn: (E) => {
          this._getTipElement().setAttribute("data-popper-placement", E.state.placement);
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
        oe.on(this._element, this.constructor.eventName(SU), this._config.selector, (E) => {
          this._initializeOnDelegatedTarget(E).toggle();
        });
      else if (f !== hU) {
        const E = f === Kv ? this.constructor.eventName(bU) : this.constructor.eventName(CU), T = f === Kv ? this.constructor.eventName(wU) : this.constructor.eventName(TU);
        oe.on(this._element, E, this._config.selector, (O) => {
          const A = this._initializeOnDelegatedTarget(O);
          A._activeTrigger[O.type === "focusin" ? t0 : Kv] = !0, A._enter();
        }), oe.on(this._element, T, this._config.selector, (O) => {
          const A = this._initializeOnDelegatedTarget(O);
          A._activeTrigger[O.type === "focusout" ? t0 : Kv] = A._element.contains(O.relatedTarget), A._leave();
        });
      }
    this._hideModalHandler = () => {
      this._element && this.hide();
    }, oe.on(this._element.closest(Zw), Jw, this._hideModalHandler);
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
    for (const E of Object.keys(f))
      fU.has(E) && delete f[E];
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
    for (const [f, E] of Object.entries(this._config))
      this.constructor.Default[f] !== E && (u[f] = E);
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
const OU = "popover", AU = ".popover-header", kU = ".popover-body", NU = {
  ...Yd.Default,
  content: "",
  offset: [0, 8],
  placement: "right",
  template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
  trigger: "click"
}, LU = {
  ...Yd.DefaultType,
  content: "(null|string|element|function)"
};
class M0 extends Yd {
  // Getters
  static get Default() {
    return NU;
  }
  static get DefaultType() {
    return LU;
  }
  static get NAME() {
    return OU;
  }
  // Overrides
  _isWithContent() {
    return this._getTitle() || this._getContent();
  }
  // Private
  _getContentForTemplate() {
    return {
      [AU]: this._getTitle(),
      [kU]: this._getContent()
    };
  }
  _getContent() {
    return this._resolvePossibleFunction(this._config.content);
  }
  // Static
  static jQueryInterface(u) {
    return this.each(function() {
      const f = M0.getOrCreateInstance(this, u);
      if (typeof u == "string") {
        if (typeof f[u] > "u")
          throw new TypeError(`No method named "${u}"`);
        f[u]();
      }
    });
  }
}
Yi(M0);
const MU = "scrollspy", zU = "bs.scrollspy", z0 = `.${zU}`, UU = ".data-api", jU = `activate${z0}`, eR = `click${z0}`, PU = `load${z0}${UU}`, $U = "dropdown-item", Ad = "active", FU = '[data-bs-spy="scroll"]', n0 = "[href]", HU = ".nav, .list-group", tR = ".nav-link", VU = ".nav-item", IU = ".list-group-item", BU = `${tR}, ${VU} > ${tR}, ${IU}`, YU = ".dropdown", WU = ".dropdown-toggle", KU = {
  offset: null,
  // TODO: v6 @deprecated, keep it for backwards compatibility reasons
  rootMargin: "0px 0px -25%",
  smoothScroll: !1,
  target: null,
  threshold: [0.1, 0.5, 1]
}, GU = {
  offset: "(number|null)",
  // TODO v6 @deprecated, keep it for backwards compatibility reasons
  rootMargin: "string",
  smoothScroll: "boolean",
  target: "element",
  threshold: "array"
};
class yg extends xo {
  constructor(u, f) {
    super(u, f), this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map(), this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
      visibleEntryTop: 0,
      parentScrollTop: 0
    }, this.refresh();
  }
  // Getters
  static get Default() {
    return KU;
  }
  static get DefaultType() {
    return GU;
  }
  static get NAME() {
    return MU;
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
    this._config.smoothScroll && (oe.off(this._config.target, eR), oe.on(this._config.target, eR, n0, (u) => {
      const f = this._observableSections.get(u.target.hash);
      if (f) {
        u.preventDefault();
        const E = this._rootElement || window, T = f.offsetTop - this._element.offsetTop;
        if (E.scrollTo) {
          E.scrollTo({
            top: T,
            behavior: "smooth"
          });
          return;
        }
        E.scrollTop = T;
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
    const f = (A) => this._targetLinks.get(`#${A.target.id}`), E = (A) => {
      this._previousScrollData.visibleEntryTop = A.target.offsetTop, this._process(f(A));
    }, T = (this._rootElement || document.documentElement).scrollTop, O = T >= this._previousScrollData.parentScrollTop;
    this._previousScrollData.parentScrollTop = T;
    for (const A of u) {
      if (!A.isIntersecting) {
        this._activeTarget = null, this._clearActiveClass(f(A));
        continue;
      }
      const _ = A.target.offsetTop >= this._previousScrollData.visibleEntryTop;
      if (O && _) {
        if (E(A), !T)
          return;
        continue;
      }
      !O && !_ && E(A);
    }
  }
  _initializeTargetsAndObservables() {
    this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map();
    const u = tt.find(n0, this._config.target);
    for (const f of u) {
      if (!f.hash || ms(f))
        continue;
      const E = tt.findOne(decodeURI(f.hash), this._element);
      Id(E) && (this._targetLinks.set(decodeURI(f.hash), f), this._observableSections.set(f.hash, E));
    }
  }
  _process(u) {
    this._activeTarget !== u && (this._clearActiveClass(this._config.target), this._activeTarget = u, u.classList.add(Ad), this._activateParents(u), oe.trigger(this._element, jU, {
      relatedTarget: u
    }));
  }
  _activateParents(u) {
    if (u.classList.contains($U)) {
      tt.findOne(WU, u.closest(YU)).classList.add(Ad);
      return;
    }
    for (const f of tt.parents(u, HU))
      for (const E of tt.prev(f, BU))
        E.classList.add(Ad);
  }
  _clearActiveClass(u) {
    u.classList.remove(Ad);
    const f = tt.find(`${n0}.${Ad}`, u);
    for (const E of f)
      E.classList.remove(Ad);
  }
  // Static
  static jQueryInterface(u) {
    return this.each(function() {
      const f = yg.getOrCreateInstance(this, u);
      if (typeof u == "string") {
        if (f[u] === void 0 || u.startsWith("_") || u === "constructor")
          throw new TypeError(`No method named "${u}"`);
        f[u]();
      }
    });
  }
}
oe.on(window, PU, () => {
  for (const v of tt.find(FU))
    yg.getOrCreateInstance(v);
});
Yi(yg);
const QU = "tab", qU = "bs.tab", Kc = `.${qU}`, XU = `hide${Kc}`, ZU = `hidden${Kc}`, JU = `show${Kc}`, ej = `shown${Kc}`, tj = `click${Kc}`, nj = `keydown${Kc}`, rj = `load${Kc}`, aj = "ArrowLeft", nR = "ArrowRight", ij = "ArrowUp", rR = "ArrowDown", r0 = "Home", aR = "End", Hc = "active", iR = "fade", a0 = "show", oj = "dropdown", p1 = ".dropdown-toggle", lj = ".dropdown-menu", i0 = `:not(${p1})`, uj = '.list-group, .nav, [role="tablist"]', sj = ".nav-item, .list-group-item", cj = `.nav-link${i0}, .list-group-item${i0}, [role="tab"]${i0}`, v1 = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', o0 = `${cj}, ${v1}`, fj = `.${Hc}[data-bs-toggle="tab"], .${Hc}[data-bs-toggle="pill"], .${Hc}[data-bs-toggle="list"]`;
class Fd extends xo {
  constructor(u) {
    super(u), this._parent = this._element.closest(uj), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), oe.on(this._element, nj, (f) => this._keydown(f)));
  }
  // Getters
  static get NAME() {
    return QU;
  }
  // Public
  show() {
    const u = this._element;
    if (this._elemIsActive(u))
      return;
    const f = this._getActiveElem(), E = f ? oe.trigger(f, XU, {
      relatedTarget: u
    }) : null;
    oe.trigger(u, JU, {
      relatedTarget: f
    }).defaultPrevented || E && E.defaultPrevented || (this._deactivate(f, u), this._activate(u, f));
  }
  // Private
  _activate(u, f) {
    if (!u)
      return;
    u.classList.add(Hc), this._activate(tt.getElementFromSelector(u));
    const E = () => {
      if (u.getAttribute("role") !== "tab") {
        u.classList.add(a0);
        return;
      }
      u.removeAttribute("tabindex"), u.setAttribute("aria-selected", !0), this._toggleDropDown(u, !0), oe.trigger(u, ej, {
        relatedTarget: f
      });
    };
    this._queueCallback(E, u, u.classList.contains(iR));
  }
  _deactivate(u, f) {
    if (!u)
      return;
    u.classList.remove(Hc), u.blur(), this._deactivate(tt.getElementFromSelector(u));
    const E = () => {
      if (u.getAttribute("role") !== "tab") {
        u.classList.remove(a0);
        return;
      }
      u.setAttribute("aria-selected", !1), u.setAttribute("tabindex", "-1"), this._toggleDropDown(u, !1), oe.trigger(u, ZU, {
        relatedTarget: f
      });
    };
    this._queueCallback(E, u, u.classList.contains(iR));
  }
  _keydown(u) {
    if (![aj, nR, ij, rR, r0, aR].includes(u.key))
      return;
    u.stopPropagation(), u.preventDefault();
    const f = this._getChildren().filter((T) => !ms(T));
    let E;
    if ([r0, aR].includes(u.key))
      E = f[u.key === r0 ? 0 : f.length - 1];
    else {
      const T = [nR, rR].includes(u.key);
      E = k0(f, u.target, T, !0);
    }
    E && (E.focus({
      preventScroll: !0
    }), Fd.getOrCreateInstance(E).show());
  }
  _getChildren() {
    return tt.find(o0, this._parent);
  }
  _getActiveElem() {
    return this._getChildren().find((u) => this._elemIsActive(u)) || null;
  }
  _setInitialAttributes(u, f) {
    this._setAttributeIfNotExists(u, "role", "tablist");
    for (const E of f)
      this._setInitialAttributesOnChild(E);
  }
  _setInitialAttributesOnChild(u) {
    u = this._getInnerElement(u);
    const f = this._elemIsActive(u), E = this._getOuterElement(u);
    u.setAttribute("aria-selected", f), E !== u && this._setAttributeIfNotExists(E, "role", "presentation"), f || u.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(u, "role", "tab"), this._setInitialAttributesOnTargetPanel(u);
  }
  _setInitialAttributesOnTargetPanel(u) {
    const f = tt.getElementFromSelector(u);
    f && (this._setAttributeIfNotExists(f, "role", "tabpanel"), u.id && this._setAttributeIfNotExists(f, "aria-labelledby", `${u.id}`));
  }
  _toggleDropDown(u, f) {
    const E = this._getOuterElement(u);
    if (!E.classList.contains(oj))
      return;
    const T = (O, A) => {
      const _ = tt.findOne(O, E);
      _ && _.classList.toggle(A, f);
    };
    T(p1, Hc), T(lj, a0), E.setAttribute("aria-expanded", f);
  }
  _setAttributeIfNotExists(u, f, E) {
    u.hasAttribute(f) || u.setAttribute(f, E);
  }
  _elemIsActive(u) {
    return u.classList.contains(Hc);
  }
  // Try to get the inner element (usually the .nav-link)
  _getInnerElement(u) {
    return u.matches(o0) ? u : tt.findOne(o0, u);
  }
  // Try to get the outer element (usually the .nav-item)
  _getOuterElement(u) {
    return u.closest(sj) || u;
  }
  // Static
  static jQueryInterface(u) {
    return this.each(function() {
      const f = Fd.getOrCreateInstance(this);
      if (typeof u == "string") {
        if (f[u] === void 0 || u.startsWith("_") || u === "constructor")
          throw new TypeError(`No method named "${u}"`);
        f[u]();
      }
    });
  }
}
oe.on(document, tj, v1, function(v) {
  ["A", "AREA"].includes(this.tagName) && v.preventDefault(), !ms(this) && Fd.getOrCreateInstance(this).show();
});
oe.on(window, rj, () => {
  for (const v of tt.find(fj))
    Fd.getOrCreateInstance(v);
});
Yi(Fd);
const dj = "toast", pj = "bs.toast", _s = `.${pj}`, vj = `mouseover${_s}`, hj = `mouseout${_s}`, mj = `focusin${_s}`, yj = `focusout${_s}`, gj = `hide${_s}`, Ej = `hidden${_s}`, _j = `show${_s}`, Sj = `shown${_s}`, Cj = "fade", oR = "hide", eg = "show", tg = "showing", Tj = {
  animation: "boolean",
  autohide: "boolean",
  delay: "number"
}, bj = {
  animation: !0,
  autohide: !0,
  delay: 5e3
};
class gg extends xo {
  constructor(u, f) {
    super(u, f), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners();
  }
  // Getters
  static get Default() {
    return bj;
  }
  static get DefaultType() {
    return Tj;
  }
  static get NAME() {
    return dj;
  }
  // Public
  show() {
    if (oe.trigger(this._element, _j).defaultPrevented)
      return;
    this._clearTimeout(), this._config.animation && this._element.classList.add(Cj);
    const f = () => {
      this._element.classList.remove(tg), oe.trigger(this._element, Sj), this._maybeScheduleHide();
    };
    this._element.classList.remove(oR), eh(this._element), this._element.classList.add(eg, tg), this._queueCallback(f, this._element, this._config.animation);
  }
  hide() {
    if (!this.isShown() || oe.trigger(this._element, gj).defaultPrevented)
      return;
    const f = () => {
      this._element.classList.add(oR), this._element.classList.remove(tg, eg), oe.trigger(this._element, Ej);
    };
    this._element.classList.add(tg), this._queueCallback(f, this._element, this._config.animation);
  }
  dispose() {
    this._clearTimeout(), this.isShown() && this._element.classList.remove(eg), super.dispose();
  }
  isShown() {
    return this._element.classList.contains(eg);
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
    const E = u.relatedTarget;
    this._element === E || this._element.contains(E) || this._maybeScheduleHide();
  }
  _setListeners() {
    oe.on(this._element, vj, (u) => this._onInteraction(u, !0)), oe.on(this._element, hj, (u) => this._onInteraction(u, !1)), oe.on(this._element, mj, (u) => this._onInteraction(u, !0)), oe.on(this._element, yj, (u) => this._onInteraction(u, !1));
  }
  _clearTimeout() {
    clearTimeout(this._timeout), this._timeout = null;
  }
  // Static
  static jQueryInterface(u) {
    return this.each(function() {
      const f = gg.getOrCreateInstance(this, u);
      if (typeof u == "string") {
        if (typeof f[u] > "u")
          throw new TypeError(`No method named "${u}"`);
        f[u](this);
      }
    });
  }
}
vg(gg);
Yi(gg);
const wj = ({ show: v, defaultZoom: u, rowIndex: f, colIndex: E, ...T }) => {
  const O = Rt.useContext(Tr.Context), [A, _] = v !== void 0 ? [v, () => {
  }] : Rt.useState(!1), [H, W] = Rt.useState(u !== void 0 ? u : 1), z = Rt.useRef(null), le = Rt.useCallback((te) => {
    var ee;
    if (v !== void 0 && !T.onClosing) {
      console.log("Modal is controlled by parent, but no onClosing handler is provided."), te.preventDefault();
      return;
    }
    _(!1), (ee = T.onClosing) == null || ee.call(T, te);
  }, []);
  Rt.useEffect(() => {
    z.current && z.current.addEventListener("hide.bs.modal", le);
  }, [z.current]), Rt.useEffect(() => {
    if (!z.current)
      return;
    const te = new Yc(z.current, { keyboard: !0 });
    A ? (te.show(), W(1)) : te.hide();
  }, [A, v]);
  const q = Rt.useCallback((te) => {
    te.deltaY < 0 ? W(H + 0.1) : H > 0.15 && W(H - 0.1);
  }, [H, u]);
  return /* @__PURE__ */ pe.jsx(pe.Fragment, { children: /* @__PURE__ */ pe.jsx("div", { className: "modal fade", ref: z, id: "lightboxModalFullscreen", tabIndex: -1, children: /* @__PURE__ */ pe.jsx("div", { className: "modal-dialog modal-fullscreen", children: /* @__PURE__ */ pe.jsx("div", { className: "modal-content", style: { backgroundColor: "unset" }, children: /* @__PURE__ */ pe.jsxs("div", { className: "modal-body", children: [
    /* @__PURE__ */ pe.jsxs("div", { className: "position-absolute z-n1 top-0 left-0", style: { opacity: 0.7, zoom: 0.5 }, children: [
      /* @__PURE__ */ pe.jsxs("div", { className: "row", children: [
        /* @__PURE__ */ pe.jsx("div", { className: "col-auto bg-light", style: { minWidth: O.header.width, minHeight: O.header.height } }),
        /* @__PURE__ */ pe.jsx("div", { className: "col-auto bg-light p-1", children: /* @__PURE__ */ pe.jsx(cR, { colIndex: E }) })
      ] }),
      /* @__PURE__ */ pe.jsx("div", { className: "row", children: /* @__PURE__ */ pe.jsx("div", { className: "col-auto bg-light p-1", children: /* @__PURE__ */ pe.jsx(dR, { rowIndex: f }) }) })
    ] }),
    /* @__PURE__ */ pe.jsx("div", { className: "m-0 w-100 h-100 d-flex align-items-center justify-content-center position-relative", style: { zoom: H, overflow: "hidden" }, onWheel: q, children: /* @__PURE__ */ pe.jsx(pR, { rowIndex: f, colIndex: E }) })
  ] }) }) }) }) });
}, Rj = () => {
}, xj = (v, u) => v.key === u || v.code === u || v.keyCode === u || v.which === u || v.charCode === u, Dj = {
  eventTypes: ["keydown"],
  when: !0
};
function Oj(v, u, f) {
  const E = Rt.useMemo(() => Array.isArray(v) ? v : [v], [v]), T = Rt.useMemo(() => Object.assign(Object.assign({}, Dj), f), [f]), { when: O, eventTypes: A } = T, _ = Rt.useRef(u), { target: H } = T;
  Rt.useEffect(() => {
    _.current = u;
  });
  const W = Rt.useCallback((z) => {
    E.some((le) => xj(z, le)) && _.current(z);
  }, [E]);
  Rt.useEffect(() => {
    if (O && typeof window < "u")
      if (H) {
        const z = H.current;
        if (z) {
          for (const le of A)
            z.addEventListener(le, W);
          return () => {
            for (const le of A)
              z.removeEventListener(le, W);
          };
        }
      } else {
        for (const z of A)
          window.addEventListener(z, W);
        return () => {
          for (const z of A)
            window.removeEventListener(z, W);
        };
      }
    return Rj;
  }, [O, A, E, H, u, W]);
}
const Hd = ({ value: v, onChange: u, step: f = 1 }) => /* @__PURE__ */ pe.jsx("input", { type: "number", style: { width: "3rem" }, step: f, value: v, onChange: (E) => u(parseInt(E.target.value)) }), Aj = ({ headerSettings: v, onChange: u }) => /* @__PURE__ */ pe.jsxs(pe.Fragment, { children: [
  "{",
  /* @__PURE__ */ pe.jsxs("div", { className: "ps-2", children: [
    /* @__PURE__ */ pe.jsx("div", { children: '"header": {' }),
    /* @__PURE__ */ pe.jsxs("div", { className: "ps-2", children: [
      /* @__PURE__ */ pe.jsxs("div", { children: [
        '"width": ',
        /* @__PURE__ */ pe.jsx(Hd, { value: v.width, onChange: (f) => u({ ...v, width: f }), step: 8 })
      ] }),
      /* @__PURE__ */ pe.jsxs("div", { children: [
        '"height": ',
        /* @__PURE__ */ pe.jsx(Hd, { value: v.height, onChange: (f) => u({ ...v, height: f }) })
      ] })
    ] }),
    /* @__PURE__ */ pe.jsx("div", { children: "}" })
  ] })
] }), kj = ({ cellSettings: v, onChange: u }) => /* @__PURE__ */ pe.jsxs(pe.Fragment, { children: [
  "{",
  /* @__PURE__ */ pe.jsxs("div", { className: "ps-2", children: [
    /* @__PURE__ */ pe.jsx("div", { children: '"header": {' }),
    /* @__PURE__ */ pe.jsxs("div", { className: "ps-2", children: [
      /* @__PURE__ */ pe.jsxs("div", { children: [
        '"width": ',
        /* @__PURE__ */ pe.jsx(Hd, { value: v.width, onChange: (f) => u({ ...v, width: f }), step: 8 })
      ] }),
      /* @__PURE__ */ pe.jsxs("div", { children: [
        '"height": ',
        /* @__PURE__ */ pe.jsx(Hd, { value: v.height, onChange: (f) => u({ ...v, height: f }), step: 8 })
      ] })
    ] }),
    /* @__PURE__ */ pe.jsx("div", { children: "}" })
  ] })
] }), Nj = ({ gridSettings: v, setGridSettings: u }) => /* @__PURE__ */ pe.jsxs("div", { className: "container", children: [
  /* @__PURE__ */ pe.jsx("div", { children: "{" }),
  /* @__PURE__ */ pe.jsxs("div", { className: "ps-2", children: [
    /* @__PURE__ */ pe.jsxs("div", { children: [
      '"header": ',
      /* @__PURE__ */ pe.jsx(Aj, { headerSettings: v.header, onChange: (f) => u(new Tr({ ...v, header: f })) })
    ] }),
    /* @__PURE__ */ pe.jsxs("div", { children: [
      '"cell": ',
      /* @__PURE__ */ pe.jsx(kj, { cellSettings: v.cell, onChange: (f) => u(new Tr({ ...v, cell: f })) })
    ] }),
    /* @__PURE__ */ pe.jsxs("div", { children: [
      '"cols": ',
      /* @__PURE__ */ pe.jsx(Hd, { value: v.cols, onChange: (f) => u(new Tr({ ...v, cols: f })) })
    ] }),
    /* @__PURE__ */ pe.jsxs("div", { children: [
      '"rows": ',
      /* @__PURE__ */ pe.jsx(Hd, { value: v.rows, onChange: (f) => u(new Tr({ ...v, rows: f })) })
    ] })
  ] }),
  /* @__PURE__ */ pe.jsx("div", { children: "}" })
] });
function Lj() {
  const v = location.href.replace(/\.html?$/, ""), u = Rt.useRef(null), [f, E] = Rt.useState(new Tr(window.gridSettings)), [T, O] = Rt.useState(!1), [A, _] = Rt.useState(0), [H, W] = Rt.useState(0), z = Rt.useCallback((ee, ae) => {
    _(ee), W(ae), O(!0);
  }, [_, W, O]), le = Rt.useCallback(() => {
    O(!1);
  }, [O]);
  Rt.useEffect(() => {
    u.current && (console.log("Start image loading"), u.current.src = v + ".png");
  }, []);
  const q = Rt.useCallback((ee) => {
    E(new Tr({ ...f, image: ee.currentTarget })), console.log("Image loaded");
  }, [f]), te = Rt.useCallback((ee) => {
    T && (ee.key === "ArrowUp" && A > 0 && _(A - 1), ee.key === "ArrowDown" && A < f.rows - 1 && _(A + 1), ee.key === "ArrowLeft" && H > 0 && W(H - 1), ee.key === "ArrowRight" && H < f.cols - 1 && W(H + 1));
  }, [f, T, A, H, _, W]);
  return Oj(["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], te), /* @__PURE__ */ pe.jsxs(pe.Fragment, { children: [
    /* @__PURE__ */ pe.jsx("img", { ref: u, style: { display: "none" }, onLoad: q }),
    /* @__PURE__ */ pe.jsxs(Tr.Context.Provider, { value: f, children: [
      /* @__PURE__ */ pe.jsx(vR.Provider, { value: z, children: /* @__PURE__ */ pe.jsx(bN, {}) }),
      /* @__PURE__ */ pe.jsx(wj, { show: T, rowIndex: A, colIndex: H, onClosing: le })
    ] }),
    /* @__PURE__ */ pe.jsx("div", { className: "container position-absolute top-0 left-0", children: /* @__PURE__ */ pe.jsx(Nj, { gridSettings: f, setGridSettings: E }) })
  ] });
}
window.gridSettings = new Tr(window.gridSettings);
Qv.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ pe.jsx(uN.StrictMode, { children: /* @__PURE__ */ pe.jsx(Lj, {}) })
);
//# sourceMappingURL=sd-grids-viewer.js.map
