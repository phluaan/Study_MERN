import g from "react";
var P = { exports: {} }, O = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var U;
function fe() {
  if (U) return O;
  U = 1;
  var e = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function a(c, i, o) {
    var m = null;
    if (o !== void 0 && (m = "" + o), i.key !== void 0 && (m = "" + i.key), "key" in i) {
      o = {};
      for (var p in i)
        p !== "key" && (o[p] = i[p]);
    } else o = i;
    return i = o.ref, {
      $$typeof: e,
      type: c,
      key: m,
      ref: i !== void 0 ? i : null,
      props: o
    };
  }
  return O.Fragment = n, O.jsx = a, O.jsxs = a, O;
}
var N = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var B;
function me() {
  return B || (B = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(r) {
      if (r == null) return null;
      if (typeof r == "function")
        return r.$$typeof === le ? null : r.displayName || r.name || null;
      if (typeof r == "string") return r;
      switch (r) {
        case k:
          return "Fragment";
        case re:
          return "Profiler";
        case ee:
          return "StrictMode";
        case ce:
          return "Suspense";
        case se:
          return "SuspenseList";
        case ie:
          return "Activity";
      }
      if (typeof r == "object")
        switch (typeof r.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), r.$$typeof) {
          case K:
            return "Portal";
          case ne:
            return (r.displayName || "Context") + ".Provider";
          case te:
            return (r._context.displayName || "Context") + ".Consumer";
          case ae:
            var s = r.render;
            return r = r.displayName, r || (r = s.displayName || s.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
          case oe:
            return s = r.displayName || null, s !== null ? s : e(r.type) || "Memo";
          case D:
            s = r._payload, r = r._init;
            try {
              return e(r(s));
            } catch {
            }
        }
      return null;
    }
    function n(r) {
      return "" + r;
    }
    function a(r) {
      try {
        n(r);
        var s = !1;
      } catch {
        s = !0;
      }
      if (s) {
        s = console;
        var l = s.error, d = typeof Symbol == "function" && Symbol.toStringTag && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return l.call(
          s,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          d
        ), n(r);
      }
    }
    function c(r) {
      if (r === k) return "<>";
      if (typeof r == "object" && r !== null && r.$$typeof === D)
        return "<...>";
      try {
        var s = e(r);
        return s ? "<" + s + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var r = S.A;
      return r === null ? null : r.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function m(r) {
      if (F.call(r, "key")) {
        var s = Object.getOwnPropertyDescriptor(r, "key").get;
        if (s && s.isReactWarning) return !1;
      }
      return r.key !== void 0;
    }
    function p(r, s) {
      function l() {
        M || (M = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          s
        ));
      }
      l.isReactWarning = !0, Object.defineProperty(r, "key", {
        get: l,
        configurable: !0
      });
    }
    function u() {
      var r = e(this.type);
      return z[r] || (z[r] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), r = this.props.ref, r !== void 0 ? r : null;
    }
    function h(r, s, l, d, b, j, A, L) {
      return l = j.ref, r = {
        $$typeof: Y,
        type: r,
        key: s,
        props: j,
        _owner: b
      }, (l !== void 0 ? l : null) !== null ? Object.defineProperty(r, "ref", {
        enumerable: !1,
        get: u
      }) : Object.defineProperty(r, "ref", { enumerable: !1, value: null }), r._store = {}, Object.defineProperty(r._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(r, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(r, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: A
      }), Object.defineProperty(r, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: L
      }), Object.freeze && (Object.freeze(r.props), Object.freeze(r)), r;
    }
    function v(r, s, l, d, b, j, A, L) {
      var f = s.children;
      if (f !== void 0)
        if (d)
          if (ue(f)) {
            for (d = 0; d < f.length; d++)
              _(f[d]);
            Object.freeze && Object.freeze(f);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else _(f);
      if (F.call(s, "key")) {
        f = e(r);
        var y = Object.keys(s).filter(function(de) {
          return de !== "key";
        });
        d = 0 < y.length ? "{key: someKey, " + y.join(": ..., ") + ": ...}" : "{key: someKey}", W[f + d] || (y = 0 < y.length ? "{" + y.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          d,
          f,
          y,
          f
        ), W[f + d] = !0);
      }
      if (f = null, l !== void 0 && (a(l), f = "" + l), m(s) && (a(s.key), f = "" + s.key), "key" in s) {
        l = {};
        for (var I in s)
          I !== "key" && (l[I] = s[I]);
      } else l = s;
      return f && p(
        l,
        typeof r == "function" ? r.displayName || r.name || "Unknown" : r
      ), h(
        r,
        f,
        j,
        b,
        i(),
        l,
        A,
        L
      );
    }
    function _(r) {
      typeof r == "object" && r !== null && r.$$typeof === Y && r._store && (r._store.validated = 1);
    }
    var x = g, Y = Symbol.for("react.transitional.element"), K = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), ee = Symbol.for("react.strict_mode"), re = Symbol.for("react.profiler"), te = Symbol.for("react.consumer"), ne = Symbol.for("react.context"), ae = Symbol.for("react.forward_ref"), ce = Symbol.for("react.suspense"), se = Symbol.for("react.suspense_list"), oe = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), ie = Symbol.for("react.activity"), le = Symbol.for("react.client.reference"), S = x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, F = Object.prototype.hasOwnProperty, ue = Array.isArray, C = console.createTask ? console.createTask : function() {
      return null;
    };
    x = {
      react_stack_bottom_frame: function(r) {
        return r();
      }
    };
    var M, z = {}, q = x.react_stack_bottom_frame.bind(
      x,
      o
    )(), $ = C(c(o)), W = {};
    N.Fragment = k, N.jsx = function(r, s, l, d, b) {
      var j = 1e4 > S.recentlyCreatedOwnerStacks++;
      return v(
        r,
        s,
        l,
        !1,
        d,
        b,
        j ? Error("react-stack-top-frame") : q,
        j ? C(c(r)) : $
      );
    }, N.jsxs = function(r, s, l, d, b) {
      var j = 1e4 > S.recentlyCreatedOwnerStacks++;
      return v(
        r,
        s,
        l,
        !0,
        d,
        b,
        j ? Error("react-stack-top-frame") : q,
        j ? C(c(r)) : $
      );
    };
  })()), N;
}
var V;
function pe() {
  return V || (V = 1, process.env.NODE_ENV === "production" ? P.exports = fe() : P.exports = me()), P.exports;
}
var t = pe();
const E = ({ children: e, onClick: n, disabled: a, variant: c = "primary" }) => /* @__PURE__ */ t.jsx(
  "button",
  {
    className: `btn btn-${c}`,
    onClick: n,
    disabled: a,
    children: e
  }
), we = ({ value: e, onChange: n, placeholder: a, type: c = "text" }) => /* @__PURE__ */ t.jsx(
  "input",
  {
    className: "input",
    type: c,
    value: e,
    onChange: n,
    placeholder: a
  }
), ke = ({ isOpen: e, onClose: n, children: a }) => e ? /* @__PURE__ */ t.jsx("div", { className: "modal-overlay", children: /* @__PURE__ */ t.jsxs("div", { className: "modal", children: [
  a,
  /* @__PURE__ */ t.jsx("button", { className: "btn btn-danger", onClick: n, children: "Đóng" })
] }) }) : null, H = ({ children: e }) => /* @__PURE__ */ t.jsx("div", { className: "card", children: e });
var Q = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, G = g.createContext && /* @__PURE__ */ g.createContext(Q), he = ["attr", "size", "title"];
function ve(e, n) {
  if (e == null) return {};
  var a = je(e, n), c, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      c = o[i], !(n.indexOf(c) >= 0) && Object.prototype.propertyIsEnumerable.call(e, c) && (a[c] = e[c]);
  }
  return a;
}
function je(e, n) {
  if (e == null) return {};
  var a = {};
  for (var c in e)
    if (Object.prototype.hasOwnProperty.call(e, c)) {
      if (n.indexOf(c) >= 0) continue;
      a[c] = e[c];
    }
  return a;
}
function R() {
  return R = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var a = arguments[n];
      for (var c in a)
        Object.prototype.hasOwnProperty.call(a, c) && (e[c] = a[c]);
    }
    return e;
  }, R.apply(this, arguments);
}
function J(e, n) {
  var a = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(e);
    n && (c = c.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), a.push.apply(a, c);
  }
  return a;
}
function T(e) {
  for (var n = 1; n < arguments.length; n++) {
    var a = arguments[n] != null ? arguments[n] : {};
    n % 2 ? J(Object(a), !0).forEach(function(c) {
      xe(e, c, a[c]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : J(Object(a)).forEach(function(c) {
      Object.defineProperty(e, c, Object.getOwnPropertyDescriptor(a, c));
    });
  }
  return e;
}
function xe(e, n, a) {
  return n = be(n), n in e ? Object.defineProperty(e, n, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = a, e;
}
function be(e) {
  var n = ge(e, "string");
  return typeof n == "symbol" ? n : n + "";
}
function ge(e, n) {
  if (typeof e != "object" || !e) return e;
  var a = e[Symbol.toPrimitive];
  if (a !== void 0) {
    var c = a.call(e, n);
    if (typeof c != "object") return c;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(e);
}
function Z(e) {
  return e && e.map((n, a) => /* @__PURE__ */ g.createElement(n.tag, T({
    key: a
  }, n.attr), Z(n.child)));
}
function w(e) {
  return (n) => /* @__PURE__ */ g.createElement(_e, R({
    attr: T({}, e.attr)
  }, n), Z(e.child));
}
function _e(e) {
  var n = (a) => {
    var {
      attr: c,
      size: i,
      title: o
    } = e, m = ve(e, he), p = i || a.size || "1em", u;
    return a.className && (u = a.className), e.className && (u = (u ? u + " " : "") + e.className), /* @__PURE__ */ g.createElement("svg", R({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, a.attr, c, m, {
      className: u,
      style: T(T({
        color: e.color || a.color
      }, a.style), e.style),
      height: p,
      width: p,
      xmlns: "http://www.w3.org/2000/svg"
    }), o && /* @__PURE__ */ g.createElement("title", null, o), e.children);
  };
  return G !== void 0 ? /* @__PURE__ */ g.createElement(G.Consumer, null, (a) => n(a)) : n(Q);
}
function ye(e) {
  return w({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" }, child: [] }] })(e);
}
function Ee(e) {
  return w({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" }, child: [] }] })(e);
}
function Oe(e) {
  return w({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" }, child: [] }] })(e);
}
function X(e) {
  return w({ attr: { viewBox: "0 0 352 512" }, child: [{ tag: "path", attr: { d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" }, child: [] }] })(e);
}
const Ne = ({ value: e, max: n, min: a = 1, onChange: c }) => /* @__PURE__ */ t.jsxs("div", { className: "quantity-control", children: [
  /* @__PURE__ */ t.jsx(
    E,
    {
      variant: "secondary",
      disabled: e <= a,
      onClick: () => c(e - 1),
      children: /* @__PURE__ */ t.jsx(Ee, {})
    }
  ),
  /* @__PURE__ */ t.jsx("span", { children: e }),
  /* @__PURE__ */ t.jsx(
    E,
    {
      variant: "secondary",
      disabled: e >= n,
      onClick: () => c(e + 1),
      children: /* @__PURE__ */ t.jsx(Oe, {})
    }
  )
] }), Pe = ({ item: e, onUpdateQuantity: n, onRemove: a }) => /* @__PURE__ */ t.jsx(H, { children: /* @__PURE__ */ t.jsxs("div", { className: "cart-item", children: [
  /* @__PURE__ */ t.jsx("button", { className: "cart-remove-btn", onClick: a, children: /* @__PURE__ */ t.jsx(X, {}) }),
  /* @__PURE__ */ t.jsx(
    "img",
    {
      src: e.product.images?.[0],
      alt: e.product.name,
      className: "cart-item-img"
    }
  ),
  /* @__PURE__ */ t.jsxs("div", { className: "cart-item-info", children: [
    /* @__PURE__ */ t.jsx("h3", { children: e.product.name }),
    /* @__PURE__ */ t.jsx("p", { children: e.product.description }),
    /* @__PURE__ */ t.jsx("div", { className: "stock-status", children: e.product.stock >= e.quantity ? /* @__PURE__ */ t.jsxs("span", { className: "in-stock", children: [
      /* @__PURE__ */ t.jsx(ye, {}),
      " In stock (",
      e.product.stock,
      " available)"
    ] }) : /* @__PURE__ */ t.jsxs("span", { className: "out-stock", children: [
      /* @__PURE__ */ t.jsx(X, {}),
      " Out of stock"
    ] }) }),
    /* @__PURE__ */ t.jsxs("div", { className: "cart-item-bottom", children: [
      /* @__PURE__ */ t.jsx(
        Ne,
        {
          value: e.quantity,
          max: e.product.stock,
          onChange: (c) => n(c)
        }
      ),
      /* @__PURE__ */ t.jsx("div", { className: "cart-price", children: e.product.salePrice ? /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
        /* @__PURE__ */ t.jsxs("span", { className: "old-price", children: [
          e.product.price.toLocaleString(),
          "₫"
        ] }),
        /* @__PURE__ */ t.jsxs("span", { className: "sale-price", children: [
          e.product.salePrice.toLocaleString(),
          "₫"
        ] })
      ] }) : /* @__PURE__ */ t.jsxs("span", { className: "sale-price", children: [
        e.product.price.toLocaleString(),
        "₫"
      ] }) })
    ] })
  ] })
] }) }), Re = ({ subtotal: e, delivery: n, total: a, onCheckout: c }) => /* @__PURE__ */ t.jsxs(H, { children: [
  /* @__PURE__ */ t.jsx("h2", { children: "Order Summary" }),
  /* @__PURE__ */ t.jsxs("div", { className: "summary-line", children: [
    /* @__PURE__ */ t.jsx("span", { children: "Subtotal" }),
    /* @__PURE__ */ t.jsxs("span", { children: [
      e.toLocaleString(),
      "₫"
    ] })
  ] }),
  /* @__PURE__ */ t.jsxs("div", { className: "summary-line", children: [
    /* @__PURE__ */ t.jsx("span", { children: "Shipping fee" }),
    /* @__PURE__ */ t.jsxs("span", { children: [
      n.toLocaleString(),
      "₫"
    ] })
  ] }),
  /* @__PURE__ */ t.jsxs("div", { className: "summary-line total", children: [
    /* @__PURE__ */ t.jsx("span", { children: "Total" }),
    /* @__PURE__ */ t.jsxs("span", { children: [
      a.toLocaleString(),
      "₫"
    ] })
  ] }),
  /* @__PURE__ */ t.jsx(E, { variant: "primary", onClick: c, children: "Proceed to Checkout" })
] }), Se = ({ items: e = [], setItems: n, loading: a, onCheckout: c }) => {
  const i = (h, v) => {
    n(
      (_) => _.map(
        (x) => x.product._id === h ? { ...x, quantity: v } : x
      )
    );
  }, o = (h) => {
    n((v) => v.filter((_) => _.product._id !== h));
  }, m = e.reduce(
    (h, v) => h + (v.product.salePrice || v.product.price) * v.quantity,
    0
  ), p = 0, u = m + p;
  return a ? /* @__PURE__ */ t.jsx("p", { className: "loading", children: "Đang tải..." }) : e.length === 0 ? /* @__PURE__ */ t.jsxs("div", { className: "empty-cart", children: [
    /* @__PURE__ */ t.jsx("h2", { children: "Giỏ hàng trống" }),
    /* @__PURE__ */ t.jsx("p", { children: "Bạn chưa có sản phẩm nào trong giỏ." }),
    /* @__PURE__ */ t.jsx(E, { variant: "primary", children: "Tiếp tục mua sắm" })
  ] }) : /* @__PURE__ */ t.jsxs("div", { className: "cart-container", children: [
    /* @__PURE__ */ t.jsx("div", { className: "cart-items", children: e.map((h) => /* @__PURE__ */ t.jsx(
      Pe,
      {
        item: h,
        onUpdateQuantity: (v) => i(h.product._id, v),
        onRemove: () => o(h.product._id)
      },
      h.product._id
    )) }),
    /* @__PURE__ */ t.jsx("div", { className: "cart-summary", children: /* @__PURE__ */ t.jsx(
      Re,
      {
        subtotal: m,
        delivery: p,
        total: u,
        onCheckout: c
      }
    ) })
  ] });
}, Ce = ({ products: e, items: n, setItems: a, onViewCart: c }) => {
  const i = (o) => {
    a((m) => m.find((u) => u.product._id === o._id) ? m.map(
      (u) => u.product._id === o._id ? { ...u, quantity: u.quantity + 1 } : u
    ) : [...m, { product: o, quantity: 1 }]);
  };
  return /* @__PURE__ */ t.jsxs("div", { className: "product-list", children: [
    /* @__PURE__ */ t.jsx("h2", { children: "Danh sách sản phẩm" }),
    /* @__PURE__ */ t.jsx("div", { className: "products-grid", children: e.map((o) => /* @__PURE__ */ t.jsxs("div", { className: "product-card", children: [
      /* @__PURE__ */ t.jsx("img", { src: o.images[0], alt: o.name, className: "product-img" }),
      /* @__PURE__ */ t.jsxs("div", { className: "product-info", children: [
        /* @__PURE__ */ t.jsx("h3", { children: o.name }),
        /* @__PURE__ */ t.jsx("p", { className: "desc", children: o.description }),
        /* @__PURE__ */ t.jsxs("p", { className: "price", children: [
          o.salePrice && /* @__PURE__ */ t.jsxs("span", { className: "old-price", children: [
            o.price.toLocaleString(),
            "₫"
          ] }),
          /* @__PURE__ */ t.jsxs("b", { className: "sale-price", children: [
            (o.salePrice || o.price).toLocaleString(),
            "₫"
          ] })
        ] }),
        /* @__PURE__ */ t.jsx(E, { onClick: () => i(o), children: "Thêm vào giỏ" })
      ] })
    ] }, o._id)) }),
    /* @__PURE__ */ t.jsx("div", { className: "view-cart", children: /* @__PURE__ */ t.jsxs(E, { variant: "primary", onClick: c, children: [
      "Xem giỏ hàng (",
      n.length,
      ")"
    ] }) })
  ] });
};
export {
  E as Button,
  H as Card,
  Pe as CartItem,
  Se as CartPage,
  we as Input,
  ke as Modal,
  Ce as ProductListPage
};
