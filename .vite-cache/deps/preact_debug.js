import "./chunk-ZW7IHWO2.js";
import {
  b,
  k,
  l
} from "./chunk-BIKO6LI6.js";

// node_modules/preact/debug/dist/debug.module.js
function o(n, e) {
  (null == e || e > n.length) && (e = n.length);
  for (var t = 0, o2 = new Array(e); t < e; t++)
    o2[t] = n[t];
  return o2;
}
function r(n, e) {
  var t = "undefined" != typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
  if (t)
    return (t = t.call(n)).next.bind(t);
  if (Array.isArray(n) || (t = function(n2, e2) {
    if (n2) {
      if ("string" == typeof n2)
        return o(n2, e2);
      var t2 = Object.prototype.toString.call(n2).slice(8, -1);
      return "Object" === t2 && n2.constructor && (t2 = n2.constructor.name), "Map" === t2 || "Set" === t2 ? Array.from(n2) : "Arguments" === t2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t2) ? o(n2, e2) : void 0;
    }
  }(n)) || e && n && "number" == typeof n.length) {
    t && (n = t);
    var r2 = 0;
    return function() {
      return r2 >= n.length ? { done: true } : { done: false, value: n[r2++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var a = {};
function i() {
  a = {};
}
function c(e) {
  return e.type === k ? "Fragment" : "function" == typeof e.type ? e.type.displayName || e.type.name : "string" == typeof e.type ? e.type : "#text";
}
var s = [];
var u = [];
function l2() {
  return s.length > 0 ? s[s.length - 1] : null;
}
var f = false;
function p(e) {
  return "function" == typeof e.type && e.type != k;
}
function d(n) {
  for (var e = [n], t = n; null != t.__o; )
    e.push(t.__o), t = t.__o;
  return e.reduce(function(n2, e2) {
    n2 += "  in " + c(e2);
    var t2 = e2.__source;
    return t2 ? n2 += " (at " + t2.fileName + ":" + t2.lineNumber + ")" : f || (f = true, console.warn("Add @babel/plugin-transform-react-jsx-source to get a more detailed component stack. Note that you should not add it to production builds of your App for bundle size reasons.")), n2 + "\n";
  }, "");
}
var h = "function" == typeof WeakMap;
function v(n) {
  return n ? "function" == typeof n.type ? v(n.__) : n : {};
}
var y = b.prototype.setState;
b.prototype.setState = function(n, e) {
  return null == this.__v && null == this.state && console.warn('Calling "this.setState" inside the constructor of a component is a no-op and might be a bug in your application. Instead, set "this.state = {}" directly.\n\n' + d(l2())), y.call(this, n, e);
};
var m = b.prototype.forceUpdate;
function b2(n) {
  var e = n.props, t = c(n), o2 = "";
  for (var r2 in e)
    if (e.hasOwnProperty(r2) && "children" !== r2) {
      var a2 = e[r2];
      "function" == typeof a2 && (a2 = "function " + (a2.displayName || a2.name) + "() {}"), a2 = Object(a2) !== a2 || a2.toString ? a2 + "" : Object.prototype.toString.call(a2), o2 += " " + r2 + "=" + JSON.stringify(a2);
    }
  var i2 = e.children;
  return "<" + t + o2 + (i2 && i2.length ? ">..</" + t + ">" : " />");
}
b.prototype.forceUpdate = function(n) {
  return null == this.__v ? console.warn('Calling "this.forceUpdate" inside the constructor of a component is a no-op and might be a bug in your application.\n\n' + d(l2())) : null == this.__P && console.warn(`Can't call "this.forceUpdate" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.

` + d(this.__v)), m.call(this, n);
}, function() {
  !function() {
    var n2 = l.__b, t2 = l.diffed, o3 = l.__, r2 = l.vnode, a2 = l.__r;
    l.diffed = function(n3) {
      p(n3) && u.pop(), s.pop(), t2 && t2(n3);
    }, l.__b = function(e) {
      p(e) && s.push(e), n2 && n2(e);
    }, l.__ = function(n3, e) {
      u = [], o3 && o3(n3, e);
    }, l.vnode = function(n3) {
      n3.__o = u.length > 0 ? u[u.length - 1] : null, r2 && r2(n3);
    }, l.__r = function(n3) {
      p(n3) && u.push(n3), a2 && a2(n3);
    };
  }();
  var n = false, t = l.__b, o2 = l.diffed, i2 = l.vnode, l3 = l.__r, f2 = l.__e, y2 = l.__, m2 = l.__h, w = h ? { useEffect: /* @__PURE__ */ new WeakMap(), useLayoutEffect: /* @__PURE__ */ new WeakMap(), lazyPropTypes: /* @__PURE__ */ new WeakMap() } : null, g = [];
  l.__e = function(n2, e, t2, o3) {
    if (e && e.__c && "function" == typeof n2.then) {
      var r2 = n2;
      n2 = new Error("Missing Suspense. The throwing component was: " + c(e));
      for (var a2 = e; a2; a2 = a2.__)
        if (a2.__c && a2.__c.__c) {
          n2 = r2;
          break;
        }
      if (n2 instanceof Error)
        throw n2;
    }
    try {
      (o3 = o3 || {}).componentStack = d(e), f2(n2, e, t2, o3), "function" != typeof n2.then && setTimeout(function() {
        throw n2;
      });
    } catch (n3) {
      throw n3;
    }
  }, l.__ = function(n2, e) {
    if (!e)
      throw new Error("Undefined parent passed to render(), this is the second argument.\nCheck if the element is available in the DOM/has the correct id.");
    var t2;
    switch (e.nodeType) {
      case 1:
      case 11:
      case 9:
        t2 = true;
        break;
      default:
        t2 = false;
    }
    if (!t2) {
      var o3 = c(n2);
      throw new Error("Expected a valid HTML node as a second argument to render.	Received " + e + " instead: render(<" + o3 + " />, " + e + ");");
    }
    y2 && y2(n2, e);
  }, l.__b = function(e) {
    var o3 = e.type, r2 = v(e.__);
    if (n = true, void 0 === o3)
      throw new Error("Undefined component passed to createElement()\n\nYou likely forgot to export your component or might have mixed up default and named imports" + b2(e) + "\n\n" + d(e));
    if (null != o3 && "object" == typeof o3) {
      if (void 0 !== o3.__k && void 0 !== o3.__e)
        throw new Error("Invalid type passed to createElement(): " + o3 + "\n\nDid you accidentally pass a JSX literal as JSX twice?\n\n  let My" + c(e) + " = " + b2(o3) + ";\n  let vnode = <My" + c(e) + " />;\n\nThis usually happens when you export a JSX literal and not the component.\n\n" + d(e));
      throw new Error("Invalid type passed to createElement(): " + (Array.isArray(o3) ? "array" : o3));
    }
    if ("thead" !== o3 && "tfoot" !== o3 && "tbody" !== o3 || "table" === r2.type ? "tr" === o3 && "thead" !== r2.type && "tfoot" !== r2.type && "tbody" !== r2.type && "table" !== r2.type ? console.error("Improper nesting of table. Your <tr> should have a <thead/tbody/tfoot/table> parent." + b2(e) + "\n\n" + d(e)) : "td" === o3 && "tr" !== r2.type ? console.error("Improper nesting of table. Your <td> should have a <tr> parent." + b2(e) + "\n\n" + d(e)) : "th" === o3 && "tr" !== r2.type && console.error("Improper nesting of table. Your <th> should have a <tr>." + b2(e) + "\n\n" + d(e)) : console.error("Improper nesting of table. Your <thead/tbody/tfoot> should have a <table> parent." + b2(e) + "\n\n" + d(e)), void 0 !== e.ref && "function" != typeof e.ref && "object" != typeof e.ref && !("$$typeof" in e))
      throw new Error(`Component's "ref" property should be a function, or an object created by createRef(), but got [` + typeof e.ref + "] instead\n" + b2(e) + "\n\n" + d(e));
    if ("string" == typeof e.type) {
      for (var i3 in e.props)
        if ("o" === i3[0] && "n" === i3[1] && "function" != typeof e.props[i3] && null != e.props[i3])
          throw new Error(`Component's "` + i3 + '" property should be a function, but got [' + typeof e.props[i3] + "] instead\n" + b2(e) + "\n\n" + d(e));
    }
    if ("function" == typeof e.type && e.type.propTypes) {
      if ("Lazy" === e.type.displayName && w && !w.lazyPropTypes.has(e.type)) {
        var s2 = "PropTypes are not supported on lazy(). Use propTypes on the wrapped component itself. ";
        try {
          var u2 = e.type();
          w.lazyPropTypes.set(e.type, true), console.warn(s2 + "Component wrapped in lazy() is " + c(u2));
        } catch (n2) {
          console.warn(s2 + "We will log the wrapped component's name once it is loaded.");
        }
      }
      var l4 = e.props;
      e.type.__f && delete (l4 = function(n2, e2) {
        for (var t2 in e2)
          n2[t2] = e2[t2];
        return n2;
      }({}, l4)).ref, function(n2, e2, t2, o4, r3) {
        Object.keys(n2).forEach(function(t3) {
          var i4;
          try {
            i4 = n2[t3](e2, t3, o4, "prop", null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
          } catch (n3) {
            i4 = n3;
          }
          i4 && !(i4.message in a) && (a[i4.message] = true, console.error("Failed prop type: " + i4.message + (r3 && "\n" + r3() || "")));
        });
      }(e.type.propTypes, l4, 0, c(e), function() {
        return d(e);
      });
    }
    t && t(e);
  }, l.__r = function(e) {
    l3 && l3(e), n = true;
  }, l.__h = function(e, t2, o3) {
    if (!e || !n)
      throw new Error("Hook can only be invoked from render methods.");
    m2 && m2(e, t2, o3);
  };
  var E = function(n2, e) {
    return { get: function() {
      var t2 = "get" + n2 + e;
      g && g.indexOf(t2) < 0 && (g.push(t2), console.warn("getting vnode." + n2 + " is deprecated, " + e));
    }, set: function() {
      var t2 = "set" + n2 + e;
      g && g.indexOf(t2) < 0 && (g.push(t2), console.warn("setting vnode." + n2 + " is not allowed, " + e));
    } };
  }, k2 = { nodeName: E("nodeName", "use vnode.type"), attributes: E("attributes", "use vnode.props"), children: E("children", "use vnode.props.children") }, _ = Object.create({}, k2);
  l.vnode = function(n2) {
    var e = n2.props;
    if (null !== n2.type && null != e && ("__source" in e || "__self" in e)) {
      var t2 = n2.props = {};
      for (var o3 in e) {
        var r2 = e[o3];
        "__source" === o3 ? n2.__source = r2 : "__self" === o3 ? n2.__self = r2 : t2[o3] = r2;
      }
    }
    n2.__proto__ = _, i2 && i2(n2);
  }, l.diffed = function(e) {
    if (e.__k && e.__k.forEach(function(n2) {
      if ("object" == typeof n2 && n2 && void 0 === n2.type) {
        var t3 = Object.keys(n2).join(",");
        throw new Error("Objects are not valid as a child. Encountered an object with the keys {" + t3 + "}.\n\n" + d(e));
      }
    }), n = false, o2 && o2(e), null != e.__k)
      for (var t2 = [], a2 = 0; a2 < e.__k.length; a2++) {
        var i3 = e.__k[a2];
        if (i3 && null != i3.key) {
          var s2 = i3.key;
          if (-1 !== t2.indexOf(s2)) {
            console.error('Following component has two or more children with the same key attribute: "' + s2 + '". This may cause glitches and misbehavior in rendering process. Component: \n\n' + b2(e) + "\n\n" + d(e));
            break;
          }
          t2.push(s2);
        }
      }
    if (null != e.__c && null != e.__c.__H) {
      var u2 = e.__c.__H.__;
      if (u2)
        for (var l4 = 0; l4 < u2.length; l4 += 1) {
          var f3 = u2[l4];
          if (f3.__H) {
            for (var p2, h2 = r(f3.__H); !(p2 = h2()).done; )
              if ((y3 = p2.value) != y3) {
                var v2 = c(e);
                throw new Error("Invalid argument passed to hook. Hooks should not be called with NaN in the dependency array. Hook index " + l4 + " in component " + v2 + " was called with NaN.");
              }
          }
        }
    }
    var y3;
  };
}();
export {
  i as resetPropWarnings
};
//# sourceMappingURL=preact_debug.js.map
