 var csrfToken = $("[name=_csrf]").val();

//**AdminLTE v3.0.0 (https://adminlte.io)**//
!function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).adminlte = {})
}(this, (function (t) {
    "use strict";
    var e = function (t) {
        var e = "ControlSidebar",
                i = "lte.controlsidebar",
                n = t.fn[e],
                s = {COLLAPSED: "collapsed.lte.controlsidebar", EXPANDED: "expanded.lte.controlsidebar"},
                o = ".control-sidebar",
                a = ".control-sidebar-content",
                r = '[data-widget="control-sidebar"]',
                l = ".main-header",
                c = ".main-footer",
                d = "control-sidebar-animate",
                h = "control-sidebar-open",
                f = "control-sidebar-slide-open",
                u = "layout-fixed",
                g = "layout-navbar-fixed",
                _ = "layout-sm-navbar-fixed",
                p = "layout-md-navbar-fixed",
                m = "layout-lg-navbar-fixed",
                C = "layout-xl-navbar-fixed",
                v = "layout-footer-fixed",
                y = "layout-sm-footer-fixed",
                b = "layout-md-footer-fixed",
                w = "layout-lg-footer-fixed",
                D = "layout-xl-footer-fixed",
                E = function () {
                    function e(t, e) {
                        this._element = t, this._config = e, this._init()
                    }
                    var n = e.prototype;
                    return n.show = function () {
                        this._config.controlsidebarSlide ? (t("html").addClass(d), t("body").removeClass(f).delay(300).queue((function () {
                            t(o).hide(), t("html").removeClass(d), t(this).dequeue()
                        }))) : t("body").removeClass(h);
                        var e = t.Event(s.EXPANDED);
                        t(this._element).trigger(e)
                    }, n.collapse = function () {
                        this._config.controlsidebarSlide ? (t("html").addClass(d), t(o).show().delay(10).queue((function () {
                            t("body").addClass(f).delay(300).queue((function () {
                                t("html").removeClass(d), t(this).dequeue()
                            })), t(this).dequeue()
                        }))) : t("body").addClass(h);
                        var e = t.Event(s.COLLAPSED);
                        t(this._element).trigger(e)
                    }, n.toggle = function () {
                        t("body").hasClass(h) || t("body").hasClass(f) ? this.show() : this.collapse()
                    }, n._init = function () {
                        var e = this;
                        this._fixHeight(), this._fixScrollHeight(), t(window).resize((function () {
                            e._fixHeight(), e._fixScrollHeight()
                        })), t(window).scroll((function () {
                            (t("body").hasClass(h) || t("body").hasClass(f)) && e._fixScrollHeight()
                        }))
                    }, n._fixScrollHeight = function () {
                        var e = {scroll: t(document).height(), window: t(window).height(), header: t(l).outerHeight(), footer: t(c).outerHeight()},
                                i = Math.abs(e.window + t(window).scrollTop() - e.scroll),
                                n = t(window).scrollTop(),
                                s = !1,
                                r = !1;
                        t("body").hasClass(u) && ((t("body").hasClass(g) || t("body").hasClass(_) || t("body").hasClass(p) || t("body").hasClass(m) || t("body").hasClass(C)) && "fixed" === t(l).css("position") && (s = !0), (t("body").hasClass(v) || t("body").hasClass(y) || t("body").hasClass(b) || t("body").hasClass(w) || t("body").hasClass(D)) && "fixed" === t(c).css("position") && (r = !0), 0 === n && 0 === i ? (t(o).css("bottom", e.footer), t(o).css("top", e.header), t(o + ", " + o + " " + a).css("height", e.window - (e.header + e.footer))) : i <= e.footer ? !1 === r ? (t(o).css("bottom", e.footer - i), t(o + ", " + o + " " + a).css("height", e.window - (e.footer - i))) : t(o).css("bottom", e.footer) : n <= e.header ? !1 === s ? (t(o).css("top", e.header - n), t(o + ", " + o + " " + a).css("height", e.window - (e.header - n))) : t(o).css("top", e.header) : !1 === s ? (t(o).css("top", 0), t(o + ", " + o + " " + a).css("height", e.window)) : t(o).css("top", e.header))
                    }, n._fixHeight = function () {
                        var e = t(window).height(),
                                i = t(l).outerHeight(),
                                n = t(c).outerHeight();
                        if (t("body").hasClass(u)) {
                            var s = e - i;
                            (t("body").hasClass(v) || t("body").hasClass(y) || t("body").hasClass(b) || t("body").hasClass(w) || t("body").hasClass(D)) && "fixed" === t(c).css("position") && (s = e - i - n), t(o + " " + a).css("height", s), "undefined" != typeof t.fn.overlayScrollbars && t(o + " " + a).overlayScrollbars({className: this._config.scrollbarTheme, sizeAutoCapable: !0, scrollbars: {autoHide: this._config.scrollbarAutoHide, clickScrolling: !0}})
                        }
                    }, e._jQueryInterface = function (n) {
                        return this.each((function () {
                            var s = t(this).data(i);
                            if (s || (s = new e(this, t(this).data()), t(this).data(i, s)), "undefined" === s[n])
                                throw new Error(n + " is not a function");
                            s[n]()
                        }))
                    }, e
                }();
        return t(document).on("click", r, (function (e) {
            e.preventDefault(), E._jQueryInterface.call(t(this), "toggle")
        })), t.fn[e] = E._jQueryInterface, t.fn[e].Constructor = E, t.fn[e].noConflict = function () {
            return t.fn[e] = n, E._jQueryInterface
        }, E
    }(jQuery),
            n = function (t) {
                var e = "PushMenu",
                        i = ".lte.pushmenu",
                        n = t.fn[e],
                        s = {COLLAPSED: "collapsed" + i, SHOWN: "shown" + i},
                        o = {autoCollapseSize: 992, enableRemember: !1, noTransitionAfterReload: !0},
                        a = {TOGGLE_BUTTON: '[data-widget="pushmenu"]', SIDEBAR_MINI: ".sidebar-mini", SIDEBAR_COLLAPSED: ".sidebar-collapse", BODY: "body", OVERLAY: "#sidebar-overlay", WRAPPER: ".wrapper"},
                        r = "sidebar-collapse",
                        l = "sidebar-open",
                        c = function () {
                            function e(e, i) {
                                this._element = e, this._options = t.extend({}, o, i), t(a.OVERLAY).length || this._addOverlay(), this._init()
                            }
                            var n = e.prototype;
                            return n.show = function () {
                                this._options.autoCollapseSize && t(window).width() <= this._options.autoCollapseSize && t(a.BODY).addClass(l), t(a.BODY).removeClass(r), this._options.enableRemember && localStorage.setItem("remember" + i, l);
                                var e = t.Event(s.SHOWN);
                                t(this._element).trigger(e)
                            }, n.collapse = function () {
                                this._options.autoCollapseSize && t(window).width() <= this._options.autoCollapseSize && t(a.BODY).removeClass(l), t(a.BODY).addClass(r), this._options.enableRemember && localStorage.setItem("remember" + i, r);
                                var e = t.Event(s.COLLAPSED);
                                t(this._element).trigger(e)
                            }, n.toggle = function () {
                                t(a.BODY).hasClass(r) ? this.show() : this.collapse()
                            }, n.autoCollapse = function (e) {
                                void 0 === e && (e = !1), this._options.autoCollapseSize && (t(window).width() <= this._options.autoCollapseSize ? t(a.BODY).hasClass(l) || this.collapse() : 1 == e && t(a.BODY).hasClass(l) && t(a.BODY).removeClass(l))
                            }, n.remember = function () {
                                this._options.enableRemember && (localStorage.getItem("remember" + i) == r ? this._options.noTransitionAfterReload ? t("body").addClass("hold-transition").addClass(r).delay(50).queue((function () {
                                    t(this).removeClass("hold-transition"), t(this).dequeue()
                                })) : t("body").addClass(r) : this._options.noTransitionAfterReload ? t("body").addClass("hold-transition").removeClass(r).delay(50).queue((function () {
                                    t(this).removeClass("hold-transition"), t(this).dequeue()
                                })) : t("body").removeClass(r))
                            }, n._init = function () {
                                var e = this;
                                this.remember(), this.autoCollapse(), t(window).resize((function () {
                                    e.autoCollapse(!0)
                                }))
                            }, n._addOverlay = function () {
                                var e = this,
                                        i = t("<div />", {id: "sidebar-overlay"});
                                i.on("click", (function () {
                                    e.collapse()
                                })), t(a.WRAPPER).append(i);
                            }, e._jQueryInterface = function (i) {
                                return this.each((function () {
                                    var n = t(this).data("lte.pushmenu"),
                                            s = t.extend({}, o, t(this).data());
                                    n || (n = new e(this, s), t(this).data("lte.pushmenu", n)), "toggle" === i && n[i]()
                                }))
                            }, e
                        }();
                return t(document).on("click", a.TOGGLE_BUTTON, (function (e) {
                    e.preventDefault();
                    var i = e.currentTarget;
                    "pushmenu" !== t(i).data("widget") && (i = t(i).closest(a.TOGGLE_BUTTON)), c._jQueryInterface.call(t(i), "toggle")
                })),
                        t(window).on("load", (function () {
                    c._jQueryInterface.call(t(a.TOGGLE_BUTTON))
                })), t.fn[e] = c._jQueryInterface, t.fn[e].Constructor = c, t.fn[e].noConflict = function () {
                    return t.fn[e] = n, c._jQueryInterface
                }, c
            }(jQuery);

    t.ControlSidebar = e, t.PushMenu = n, Object.defineProperty(t, "__esModule", {value: !0})
}));

/*
 * metismenu https://github.com/onokumus/metismenu#readme
 * A jQuery menu plugin
 * @version 3.0.3
 * @author Osman Nuri Okumus <onokumus@gmail.com> (https://github.com/onokumus)
 * @license: MIT
 */
!function (e, n) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = n(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], n) : e.metisMenu = n(e.jQuery)
}(this, function (o) {
    "use strict";

    function a(r) {
        for (var e = 1; e < arguments.length; e++) {
            var a = null != arguments[e] ? arguments[e] : {},
                    n = Object.keys(a);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(a).filter(function (e) {
                return Object.getOwnPropertyDescriptor(a, e).enumerable
            }))), n.forEach(function (e) {
                var n, t, i;
                n = r, i = a[t = e], t in n ? Object.defineProperty(n, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[t] = i
            })
        }
        return r
    }
    var s = function (i) {
        var n = "transitionend",
                r = {
                    TRANSITION_END: "mmTransitionEnd",
                    triggerTransitionEnd: function (e) {
                        i(e).trigger(n)
                    },
                    supportsTransitionEnd: function () {
                        return Boolean(n)
                    }
                };

        function e(e) {
            var n = this,
                    t = !1;
            return i(this).one(r.TRANSITION_END, function () {
                t = !0
            }), setTimeout(function () {
                t || r.triggerTransitionEnd(n)
            }, e), this
        }
        return i.fn.mmEmulateTransitionEnd = e, i.event.special[r.TRANSITION_END] = {
            bindType: n,
            delegateType: n,
            handle: function (e) {
                if (i(e.target).is(this))
                    return e.handleObj.handler.apply(this, arguments)
            }
        }, r
    }(o = o && o.hasOwnProperty("default") ? o.default : o),
            e = "metisMenu",
            g = "metisMenu",
            n = "." + g,
            t = o.fn[e],
            l = {
                toggle: !0,
                preventDefault: !0,
                triggerElement: "a",
                parentTrigger: "li",
                subMenu: "ul"
            },
            u = {
                SHOW: "show" + n,
                SHOWN: "shown" + n,
                HIDE: "hide" + n,
                HIDDEN: "hidden" + n,
                CLICK_DATA_API: "click" + n + ".data-api"
            },
            i = "metismenu",
            f = "mm-active",
            h = "mm-show",
            d = "mm-collapse",
            c = "mm-collapsing",
            r = function () {
                function r(e, n) {
                    this.element = e, this.config = a({}, l, n), this.transitioning = null, this.init()
                }
                var e = r.prototype;
                return e.init = function () {
                    var a = this,
                            s = this.config;
                    o(this.element).addClass(i), o(this.element).find(s.parentTrigger + "." + f).children(s.triggerElement).attr("aria-expanded", "true"), o(this.element).find(s.parentTrigger + "." + f).parents(s.parentTrigger).addClass(f), o(this.element).find(s.parentTrigger + "." + f).parents(s.parentTrigger).children(s.triggerElement).attr("aria-expanded", "true"), o(this.element).find(s.parentTrigger + "." + f).has(s.subMenu).children(s.subMenu).addClass(d + " " + h), o(this.element).find(s.parentTrigger).not(" ." + f).has(s.subMenu).children(s.subMenu).addClass(d), o(this.element).find(s.parentTrigger).has(s.subMenu).children(s.triggerElement).on(u.CLICK_DATA_API, function (e) {
                        var n = o(this),
                                t = n.parent(s.parentTrigger),
                                i = t.siblings(s.parentTrigger).children(s.triggerElement),
                                r = t.children(s.subMenu);
                        s.preventDefault && e.preventDefault(), "true" !== n.attr("aria-disabled") && (t.hasClass(f) ? (n.attr("aria-expanded", "false"), a.hide(r)) : (a.show(r), n.attr("aria-expanded", "true"), s.toggle && i.attr("aria-expanded", "false")), s.onTransitionStart && s.onTransitionStart(e))
                    })
                }, e.show = function (e) {
                    var n = this;
                    if (!this.transitioning && !o(e).hasClass(c)) {
                        var t = o(e),
                                i = o.Event(u.SHOW);
                        if (t.trigger(i), !i.isDefaultPrevented()) {
                            if (t.parent(this.config.parentTrigger).addClass(f), this.config.toggle) {
                                var r = t.parent(this.config.parentTrigger).siblings().children(this.config.subMenu + "." + h);
                                this.hide(r)
                            }
                            t.removeClass(d).addClass(c).height(0), this.setTransitioning(!0);
                            t.height(e[0].scrollHeight).one(s.TRANSITION_END, function () {
                                n.config && n.element && (t.removeClass(c).addClass(d + " " + h).height(""), n.setTransitioning(!1), t.trigger(u.SHOWN))
                            }).mmEmulateTransitionEnd(350)
                        }
                    }
                }, e.hide = function (e) {
                    var n = this;
                    if (!this.transitioning && o(e).hasClass(h)) {
                        var t = o(e),
                                i = o.Event(u.HIDE);
                        if (t.trigger(i), !i.isDefaultPrevented()) {
                            t.parent(this.config.parentTrigger).removeClass(f), t.height(t.height())[0].offsetHeight, t.addClass(c).removeClass(d).removeClass(h), this.setTransitioning(!0);
                            var r = function () {
                                n.config && n.element && (n.transitioning && n.config.onTransitionEnd && n.config.onTransitionEnd(), n.setTransitioning(!1), t.trigger(u.HIDDEN), t.removeClass(c).addClass(d))
                            };
                            0 === t.height() || " none" === t.css("display") ? r() : t.height(0).one(s.TRANSITION_END, r).mmEmulateTransitionEnd(350)
                        }
                    }
                }, e.setTransitioning = function (e) {
                    this.transitioning = e
                }, e.dispose = function () {
                    o.removeData(this.element, g), o(this.element).find(this.config.parentTrigger).has(this.config.subMenu).children(this.config.triggerElement).off("click"), this.transitioning = null, this.config = null, this.element = null
                }, r.jQueryInterface = function (i) {
                    return this.each(function () {
                        var e = o(this),
                                n = e.data(g),
                                t = a({}, l, e.data(), "object" == typeof i && i ? i : {});
                        if (n || (n = new r(this, t), e.data(g, n)), "string" == typeof i) {
                            if (void 0 === n[i])
                                throw new Error('No method named "' + i + '"');
                            n[i]()
                        }
                    })
                }, r
            }();
    return o.fn[e] = r.jQueryInterface, o.fn[e].Constructor = r, o.fn[e].noConflict = function () {
        return o.fn[e] = t, r.jQueryInterface
    }, r
});













//cdn.datatables.net/plug-ins/1.12.1/dataRender/datetime.js
/**
 * Date / time formats often from back from server APIs in a format that you
 * don't wish to display to your end users (ISO8601 for example). This rendering
 * helper can be used to transform any source date / time format into something
 * which can be easily understood by your users when reading the table, and also
 * by DataTables for sorting the table.
 *
 * The [MomentJS library](http://momentjs.com/) is used to accomplish this and
 * you simply need to tell it which format to transfer from, to and specify a
 * locale if required.
 *
 * This function should be used with the `dt-init columns.render` configuration
 * option of DataTables.
 *
 * It accepts one, two or three parameters:
 *
 * * `$.fn.dataTable.render.moment( to );`
 * * `$.fn.dataTable.render.moment( from, to );`
 * * `$.fn.dataTable.render.moment( from, to, locale );`
 *
 * Where:
 *
 * * `to` - the format that will be displayed to the end user
 * * `from` - the format that is supplied in the data (the default is ISO8601 -
 *   `YYYY-MM-DD`)
 * * `locale` - the locale which MomentJS should use - the default is `en`
 *   (English).
 *
 *  @name datetime
 *  @summary Convert date / time source data into one suitable for display
 *  @author [Allan Jardine](http://datatables.net)
 *  @requires DataTables 1.10+, Moment.js 1.7+
 *
 *  @example
 *    // Convert ISO8601 dates into a simple human readable format
 *    $('#example').DataTable( {
 *      columnDefs: [ {
 *        targets: 1,
 *        render: $.fn.dataTable.render.moment( 'Do MMM YYYY' )
 *      } ]
 *    } );
 *
 *  @example
 *    // Specify a source format - in this case a unix timestamp
 *    $('#example').DataTable( {
 *      columnDefs: [ {
 *        targets: 2,
 *        render: $.fn.dataTable.render.moment( 'X', 'Do MMM YY' )
 *      } ]
 *    } );
 *
 *  @example
 *    // Specify a source format and locale
 *    $('#example').DataTable( {
 *      columnDefs: [ {
 *        targets: 2,
 *        render: $.fn.dataTable.render.moment( 'YYYY/MM/DD', 'Do MMM YY', 'fr' )
 *      } ]
 *    } );
 */


// // UMD
// (function( factory ) {
// 	"use strict";

// 	if ( typeof define === 'function' && define.amd ) {
// 		// AMD
// 		define( ['jquery'], function ( $ ) {
// 			return factory( $, window, document );
// 		} );
// 	}
// 	else if ( typeof exports === 'object' ) {
// 		// CommonJS
// 		module.exports = function (root, $) {
// 			if ( ! root ) {
// 				root = window;
// 			}

// 			if ( ! $ ) {
// 				$ = typeof window !== 'undefined' ?
// 					require('jquery') :
// 					require('jquery')( root );
// 			}

// 			return factory( $, root, root.document );
// 		};
// 	}
// 	else {
// 		// Browser
// 		factory( jQuery, window, document );
// 	}
// }
// (function( $, window, document ) {


// $.fn.dataTable.render.moment = function ( from, to, locale ) {
// 	// Argument shifting
// 	if ( arguments.length === 1 ) {
// 		to = from;
// 		from = 'YYYY-MM-DD';
// 	}

// 	return function ( d, type, row ) {
// 		if (! d) {
// 			return type === 'sort' || type === 'type' ? 0 : d;
// 		}

// 		var m = window.moment( d, from, locale, true );

// 		// Order and type get a number value from Moment, everything else
// 		// sees the rendered value
// 		return m.format( type === 'sort' || type === 'type' ? 'x' : to );
// 	};
// };


// }));












function construirMenu(fila, nombreApp) {
    var construirdatos = function () {
        var source = [];
        var items = [];

        for (var k = 0; k < fila.length; k++) {

            var id = fila[k][0]; // id_opcion
            var label = fila[k][1]; // nombre_opcion
            var icon = fila[k][2]; // icono
            var url = fila[k][3]; // url
            var orden = fila[k][4]; // orden
            var parentid = fila[k][5]; // id_padre

            var item = {};

            if (items[parentid]) {

                item = {
                    orden: orden,
                    id: id,
                    parentid: parentid,
                    label: label,
                    url: url,
                    icon: icon,
                    nombreApp: nombreApp
                };
                if (!items[parentid].items) {
                    items[parentid].items = [];
                }

                items[parentid].items[items[parentid].items.length] = item;
                items[id] = item;

            } else {

                items[id] = {
                    orden: orden,
                    id: id,
                    parentid: parentid,
                    label: label,
                    item: item,
                    url: url,
                    icon: icon,
                    nombreApp: nombreApp
                };

                source[orden] = items[id];

            }

        }

        return source;
    }

    var source = construirdatos();
    var buildUL = function (parent, items) {
        var li = "";
        $
                .each(
                        items,
                        function () {
                            if (this.constructor === Object) {
                                if ((this.url == "") ||
                                        (this.parentid != "" && this.url == "")) {
                                    var li = $('<li><a class="has-arrow" href="#"><i class="nav-icon ' +
                                            this.icon +
                                            ' "></i><span class="brand-text"> ' +
                                            this.label +
                                            '</span><p><i class="right fas fa-angle-left"></i></p></a></li>');
                                } else {

                                    li = $('<li><a  href="#" id="estiloID" data-destino="areaTrabajo #listadoItems" data-rutaAplicacion="'
                                            + this.nombreApp
                                            + '" data-idOpcion="'
                                            + this.id
                                            + '" data-opcion="'
                                            + this.url
                                            + '" data-nombre = "'
                                            + this.label
                                            + '" >  <i class="nav-icon '
                                            + this.icon
                                            + '"></i><span class="brand-text">'
                                            + this.label
                                            + '</span> </a></li>');
                                }
                                li.appendTo(parent);

                                if (this.items && this.items.length > 0) {
                                    var ul = $("<ul class='mm-collapse'></ul>");
                                    ul.appendTo(li);
                                    buildUL(ul, this.items);
                                }
                            }
                        });
    }

    var ul = $("<ul class='metismenu menu' id='menu'></ul>");
    ul.appendTo(".nav-sidebar");
    buildUL(ul, source);
}


// Funcion que permite contruir mascaras en los imput para esto de ser llamado
// en cada formulario
function construirValidador() {
    $(":input").inputmask();
}

// Función que permite realizar el ruteo de la seccion donde se va a cargar el
// contenido de la pÃ¡gina
function abrir(aplicacion, evento, seleccionar, complemento) {
	var complemento = (complemento == null)? new exitoComplemento():complemento;

    var elementoDestino = "#" + aplicacion.attr("data-destino");
    $(".seleccionado").removeClass("seleccionado");
    elementosSeleccionados = [];
console.log("elementoDestino",elementoDestino);
    $("#cantidadItemsSeleccionados").html(elementosSeleccionados.length);
    if (seleccionar) {

        $(aplicacion).removeClass("itemAbierto");
        if (elementoDestino == "#detalleItem") {
            aplicacion.siblings().removeClass("itemAbierto");
            aplicacion.addClass('itemAbierto');
        } else {
            aplicacion.siblings().removeClass("linkAbierto");
            $("#menuAplicacion .linkAbierto").removeClass("linkAbierto");
            aplicacion.addClass("linkAbierto");
        }
    }

    var url = "";
    var data = null;
    if (aplicacion.is("form")) {
        evento.preventDefault();
        data = aplicacion.serialize();


        url = "vistas/" + aplicacion.attr("data-rutaAplicacion") + "/"
                + aplicacion.attr("data-opcion");
    } else {
        if (elementoDestino == "#areaTrabajo") {
            url = "urlAplicaciones";
            $("#menuAplicacion").html("");
            data = {
                app: aplicacion.attr("data-rutaAplicacion"),
                nombre: aplicacion.attr("data-nombreAplicacion")
            };
        } else if (elementoDestino == "#menuAplicacion") {
            url = "Auth/urlMenuAplicacion";
            data = {
                app: aplicacion.attr("data-rutaAplicacion"),
                idAplicacion: aplicacion.attr("id"),
                nombre: aplicacion.attr("data-nombreAplicacion")
            };
        } else {

            url = "vistas/" + aplicacion.attr("data-rutaAplicacion") + "/" + aplicacion.attr("data-opcion");
            data = {
                id: aplicacion.attr("id"),
                opcion: aplicacion.attr("data-idOpcion"),
                elementos: aplicacion.attr("data-elementos"),
                nombreOpcion: aplicacion.attr("data-nombre"),
            };
        }
    }
    if (aplicacion.attr("data-destino") == "EXT") {
        var new_window = window.open(url + "?id=" + aplicacion.attr("id"), "nw");
    } else {


    	//$('#collapseTwo #detalleItem').html("");
    	$('#headingTwo').hide();
        $.ajax({
            type: "POST",
            url: "https://localhost:7288/" + url,
            headers: {
                "X-CSRF-TOKEN": csrfToken
            },
            data: data,
            dataType: "text",
            contentType: "application/x-www-form-urlencoded; charset=latin1",
            beforeSend: function (jqXHR) {

            	if ((elementoDestino != "#menuAplicacion")) {

            		if(elementoDestino=="#areaTrabajo #listadoItems" || elementoDestino=="#detalleItem" || elementoDestino=="#areaTrabajo"){
            			if ($("#cargando").length) {
                            $("#areaTrabajo #listadoItems").find("#cargando").fadeIn();
                        } else {
                        	$("#areaTrabajo #listadoItems").append("<div id='cargando'>Cargando...</div>").fadeIn();
                        }
            		}else{

            			if ($("#cargando").length) {
                            $(elementoDestino).find("#cargando").fadeIn();
                        } else {
                            $(elementoDestino).append("<div id='cargando'>Cargando...</div>").fadeIn();
                        }
                	}
            	}

            },
            success: function (html) {
                if (elementoDestino == '#detalleItem') {
                    $(elementoDestino).html(html);
                    toastr.clear();
                    $('#collapseTwo').addClass('show');
                    $('#collapseOne').removeClass('show');

                    $("#headingTwo .panel-title-dos").html($("#collapseTwo #detalleItem title").html());
                    $("#headingTwo").show();
                } else if (elementoDestino == '#menuAplicacion' || elementoDestino == '#areaTrabajo') {
                    $("#headingOne .panel-title-uno").html("MÓDULO" + "<b> | </b>" + aplicacion.attr("data-nombreaplicacion") + " <span></span>");
                    $(elementoDestino).html(html);
                   // $('#headingTwo').hide();
                } else {

                    $(elementoDestino).html(html);
                    $('#headingTwo').removeClass('active');
                    $("#headingOne .panel-title-uno span").html(" | " + aplicacion.attr("data-nombre"));
                    //$("#headingTwo").show();
                    if (elementoDestino == "#areaTrabajo #listadoItems" || elementoDestino == "#tabla") {
                        $('#collapseOne').addClass('show');
                        $('#collapseTwo').removeClass('show');
                        //$("#headingTwo").hide();
                        //$('#headingTwo').hide();
                    }//else{
                    //$("#headingTwo").show();
                   // }
               }

            },
            error: function (jqXHR, textStatus) {

                $("#headingTwo").show();
                if (elementoDestino === "#detalleItem") {
                    $('#collapseTwo').addClass('show');
                    $('#collapseOne').removeClass('show');
                } else if (elementoDestino === "#areaTrabajo #listadoItems") {
                    $('#collapseOne').addClass('show');
                    $('#collapseTwo').removeClass('show');
                }
                var mensaje = mensajeErrorAjax(jqXHR, textStatus);
                mostrarMensaje(mensaje, "ERROR", 3500);

                $(elementoDestino)
                        .html("<div id='error'>¡Ups!... algo no anda bien. Se produjo un <br />" +
                                mensaje + "<br/>" + "Disculpe los inconvenientes causados.</div>" +
                                "<div class='text-center'>" +
                                "<img src='./assets/core/ventanaError" + jqXHR.status + ".png' />" +
                                "</div>" + "<div id='error'>" + "<b>Accediendo a: </b>" + this.url + "</div>");

            },
            complete: function (jqXHR, textStatus) {

            	$("#areaTrabajo").find("#cargando").delay("slow").fadeOut();
            	 //setTimeout(function(){ $("#detalleItem").find("#cargando").delay("slow").fadeOut(); }, 5600);
                caducaSesion(jqXHR);
                complemento.ejecutar();
            }
        });
    }

    function exitoComplemento(){
		this.ejecutar = function(){
		return true;
	}
    }


}

function caducaSesion(error) {

    var codigoError = error.status;
    var codigo = error.responseText;

    if (codigoError === 200) {

        if (codigo === "6" || codigo === "7" || codigo === "4") {

            msg = 'La sessión ha caducado';
            function demorar() {
                window.location = "login?error="+codigo;
            }
            setTimeout(demorar, 2000);
            mostrarMensaje(msg, "ERROR", 3500);
        }else if (codigo === "8") {
            msg = 'Acceso denegado';
            function demorar() {
                window.location = "login?error="+codigo;
            }
            setTimeout(demorar, 2000);
            mostrarMensaje(msg, "ERROR", 3500);
        }else  {

    		if (error.statusText === "parsererror") {
	             msg = 'La sessión ha caducado';
	            function demorar() {
	                window.location = "login?error=4";
	            }
	            setTimeout(demorar, 2000);
	            mostrarMensaje(msg, "ERROR", 3500);
            }
    }	}
}
/*function caducaSesion(error) {
    var codigoError = error.status;
    var codigo =error.responseText;
    if (codigoError === 200) {
        if (codigo === "6" || codigo === "7") {
            msg = 'La sessión ha caducado';
            function demorar() {
                window.location = "login?error="+codigo;
            }
            setTimeout(demorar, 2000);
            mostrarMensaje(msg, "ERROR", 3500);
        }else if (codigo === "8") {
            msg = 'Acceso denegado';
            function demorar() {
                window.location = "login?error="+codigo;
            }
            setTimeout(demorar, 2000);
            mostrarMensaje(msg, "ERROR", 3500);
        }
    }
}
*/

// Función para seleccionar los item del listado de registro
function seleccionar(objeto) {
    if (objeto.hasClass("seleccionado")) {
        objeto.removeClass("seleccionado");
        elementosSeleccionados.splice(elementosSeleccionados.indexOf(objeto.attr("id")), 1);
        elementosSeleccionados.sort();
    } else {
        objeto.removeClass("itemAbierto");
        objeto.addClass("seleccionado");
        elementosSeleccionados.push(objeto.attr("id"));
        elementosSeleccionados.sort();
    }
    $(".cantidadItemsSeleccionados").html(elementosSeleccionados.length);
}

// Función que permite minimizar el menÃº
function minimizarMenu() {
    if (!$('body').hasClass('mini-navbar') || $('body').hasClass('body-small')) {
        $('#side-menu').hide();
        setTimeout(function () {
            $('#side-menu').fadeIn(400);
        }, 200);
    } else if ($('body').hasClass('fixed-sidebar')) {
        $('#side-menu').hide();
        setTimeout(function () {
            $('#side-menu').fadeIn(400);
        }, 100);
    } else {
        $('#side-menu').removeAttr('style');
    }
}

$(document).on("mouseover", ".main-sidebar, #menuAplicacion", (function () {
    if ($(".sidebar-mini").hasClass("sidebar-collapse"))
        $(".sidebar-mini").removeClass("sidebar-collapse");
}));

// Evento que permite realizar el funcionamiento de cada opción del menu
$("#menuAplicacion, .main-header.navbar .dropdown-footer").on("click", "[data-destino='areaTrabajo #listadoItems']",function (e) {
    $("title").html($(this).attr('data-nombre'));
    abrir($(this), "#areaTrabajo #listadoItems", true);
});

// Evento que permite realizar el funcionamiento de cada acción de los botones
$("#areaTrabajo").on("click", "#listadoItems .botones a", function (e) {

    e.preventDefault();
    var estilo = $(this).attr("id");

    switch (estilo) {
        case "_nuevo":// nuevo
            abrir($(this), "#" + $(this).attr("data-destino"), false);
            $('#headingTwo a').click();
            break;

        case "_actualizar": // actualizar
            abrir($("#menuAplicacion #menu a.linkAbierto"), "#areaTrabajo #listadoItems", true);
            break;

        case "_seleccionar": // seleccionar;
            $(".item").each(function (i, e) {
                seleccionar($("#listadoItems #" + (e.id).replace(".", "\\.")));
            });
            break;

/*case "_autorizar": // asignar
 $(this).attr("data-elementos", elementosSeleccionados);
abrir($(this), "#" + $(this).attr("data-destino"), false);
//abrir($("#menuAplicacion #menu a.linkAbierto"), "#areaTrabajo #listadoItems", true);
//$('#headingTwo a').click();

break;*/

        case "_modificar": // modificar
        case "_eliminar": // eliminar
        case "_asignar": // asignar
        case "_autorizar": // asignar
        case "_gestionar": // gestionar
        case "_abrir": // abrir
            $(this).attr("data-elementos", elementosSeleccionados);
            abrir($(this), null, false);
            $('#headingTwo a').click();
            break;

        default:
            $(this).attr("data-elementos", elementosSeleccionados);
            abrir($(this), null, false);
    }
});



function ejecutarJson(form, metodoExito, metodoError, buttonTabla) {

    if (buttonTabla === undefined) {
        var $botones = $(form).find("button[type='submit']");
    } else {
        var $botones = $(form).find(buttonTabla);
    }

    var elementoDestino = "#" + $(form).attr("data-destino");

    serializedData = $(form).serializeArray();

    url = "vistas/" + $(form).attr("data-rutaAplicacion") + "/" + $(form).attr("data-opcion");

    $botones.attr("disabled", "disabled");

    var resultado = $.ajax({
        url: url,
        type: "POST",
        headers: {
            "X-CSRF-TOKEN": csrfToken
        },
        data: serializedData,
        dataType: "json",
        async: true,
        beforeSend: function (jqXHR) {
        	if ($("#cargando").length) {
                $(elementoDestino).find("#cargando").fadeIn();
            } else {
                $(elementoDestino).append("<div id='cargando'>Cargando...</div>").fadeIn();
            }
        },
        success: function (msg, status, xhr) {

            if (msg.estado == "exito") {
                toastr.clear();
                switch ($(form).attr("data-accionEnExito")) {
                    case "REDIRECCIONAR":
                        window.location.replace("index");
                        break;
                    case "ACTUALIZAR":

                        abrir($("#menuAplicacion #menu a.linkAbierto"), null, true);
                        break;
                    default:
                        $($(form).attr("data-accionEnExito")).submit();
                }
                if (metodoExito != null) {
                    metodoExito.ejecutar(msg);
                } else {
                	mostrarMensaje(msg.mensaje, "EXITO");
                }

            } else {
                $botones.attr("disabled", false);
                if (metodoError != null) {
                    metodoError.ejecutar(msg);
                } else {
					if(msg.tipoMensaje===undefined)
						mostrarMensaje(msg.mensaje, "ERROR");
					else
                    	mostrarMensaje(msg.mensaje, msg.tipoMensaje);
                }
            }
        },
        error: function (jqXHR, textStatus,error1) {

            mostrarMensaje(mensajeErrorAjax(jqXHR, textStatus), "ERROR");

        },
        complete: function (jqXHR, textStatus) {
            	$("#areaTrabajo").find("#cargando").delay("slow").fadeOut();
                caducaSesion(jqXHR);

        }
    });
    return resultado;
}
/*
function ejecutarJson(form, metodoExito, metodoError, buttonTabla) {

    if (buttonTabla === undefined) {
        var $botones = $(form).find("button[type='submit']");
    } else {
        var $botones = $(form).find(buttonTabla);
    }

    var elementoDestino = "#" + $(form).attr("data-destino");

    serializedData = $(form).serializeArray();

    url = "vistas/" + $(form).attr("data-rutaAplicacion") + "/" + $(form).attr("data-opcion");

    $botones.attr("disabled", "disabled");

    var resultado = $.ajax({
        url: url,
        type: "POST",
        headers: {
            "X-CSRF-TOKEN": csrfToken
        },
        data: serializedData,
        dataType: "json",
        async: true,
        beforeSend: function (jqXHR) {
        	if ($("#cargando").length) {
                $(elementoDestino).find("#cargando").fadeIn();
            } else {
                $(elementoDestino).append("<div id='cargando'>Cargando...</div>").fadeIn();
            }
        },
        success: function (msg) {
            if (msg.estado == "exito") {
                toastr.clear();
                switch ($(form).attr("data-accionEnExito")) {
                    case "REDIRECCIONAR":
                        window.location.replace("index");
                        break;
                    case "ACTUALIZAR":

                        abrir($("#menuAplicacion #menu a.linkAbierto"), null, true);
                        break;
                    default:
                        $($(form).attr("data-accionEnExito")).submit();
                }
                if (metodoExito != null) {
                    metodoExito.ejecutar(msg);
                } else {
                	mostrarMensaje(msg.mensaje, "EXITO");
                }

            } else {
                $botones.attr("disabled", false);
                if (metodoError != null) {
                    metodoError.ejecutar(msg);
                } else {
                    mostrarMensaje(msg.mensaje, "ERROR");
                }
            }
        },
        error: function (jqXHR, textStatus) {
            mostrarMensaje(mensajeErrorAjax(jqXHR, textStatus), "ERROR");

        },
        complete: function () {
        	 $(elementoDestino).find("#cargando").delay("slow").fadeOut();
        }
    });
    return resultado;
}*/

// Evento para colapsar los paneles
$('[data-toggle="collapse"]:not(a)').on("click", function () {
    $('.panel-collapse').on('show.bs.collapse', function () {
        $(this).siblings('.panel-heading').addClass('active');
    });

    $('.panel-collapse').on('hide.bs.collapse', function () {
        $(this).siblings('.panel-heading').removeClass('active');
    });
});

// Evento que permite abrir cada aplicación del sistema

$("body").on("click", "#areaTrabajo .aplicacion .titulo-aplicacion, #areaTrabajo .widget-head-color-box .icon i", function () {
  console.log("areaTrabajo click");
    abrir($(this).parents(".aplicacion"), "#" + $(this).parents(".aplicacion").attr("data-destino"), false);


});
$("#areaTrabajo").on("click", ".item .titulo-aplicacion, .item .widget-text-box", function () {
    abrir($(this).parents(".item"), "#" + $(this).parents(".item").attr("data-destino"), false);

});

// Evento para volver al inicio de la aplicación
$(".cargarInicio, .cargarAyuda").on("click", function () {
	$("title").html($(this).attr('data-nombre'));
    abrir($(this),  "#areaTrabajo #listadoItems", false);
});




// Evento que permite realizar la selección de los items de los registros
$("#areaTrabajo").on("click", "table .item", function (e) {
    seleccionar($(this));
});

// Evento para minimizar el menÃº
$('.navbar-minimalize').click(function () {
    $("body").toggleClass("mini-navbar");
    minimizarMenu();
});

function subirArchivo(item, identificador, carpeta, componente, funcion, tamanio, isMd5 = false, isCarpetaFecha = true ) {

    var data = new FormData();
    data.append('file', item[0].files[0]);
    data.append('identificador', identificador);
    data.append('rutaCarpeta', carpeta);
    data.append('tamanio', tamanio);
    data.append('isMd5', isMd5);
	data.append('isCarpetaFecha', isCarpetaFecha);
    var url = 'subirArchivo';
    var elemento = componente;
    $.ajax({
        url: url,
        type: 'POST',
        headers: {
            "X-CSRF-TOKEN": csrfToken
        },
        contentType: false,
        data: data,
        processData: false,
        cache: false,
        beforeSend: function (msg) {
            funcion.esperar("");
        },
        success: function (msg) {
            if (msg == 'No has podido subir el archivo.'
                    || msg == 'El archivo se encuentra vacio.' || msg == 'El archivo supera el tamaño permitido.') {
                elemento.val('');
                if(msg == 'El archivo supera el tamaño permitido.')
                	msg="El archivo supera el tamaño permitido "+ fomatearBytesMb(item[0].files[0].size) +". (Max. "+tamanio+")";
                funcion.error(msg);
            } else {
                toastr.clear();
                elemento.val(msg);
                funcion.exito(msg);
               // item.attr("disabled", "disabled");
            }
        },
        error: function (msg) {
            elemento.val('');
            funcion.error("Problemas al cargar el archivo");
        }
    });
}

/*function ResizeImg(e)
{
    const file = e[0].files[0];
    const fileName = file.name;
    const reader = new FileReader();
    reader.readAsDataURL(e[0].files[0]);
    reader.onload = event =>
    {
        const img = new Image();
        img.src = event.target.result;
        img.onload = () =>
        {
            const elem = document.createElement('canvas');
            const ctx = elem.getContext('2d');

            const maxWidth = 50;
            const maxHeight = 50;

            const ratio = Math.min(maxWidth / img.width, maxHeight / img.height);
            const width = img.width * ratio + .5 | 0;
            const height = img.height * ratio + .5 | 0;

            elem.width = width;
            elem.height = height;

            ctx.drawImage(img, 0, 0, width, height);
            ctx.canvas.toBlob((blob) =>
            {
                const newimg = new File([blob], fileName, file);
                e[0].files[0] = newimg;
                subirArchivoImg(newimg, nombreNuevoArchivo , boton.attr("data-rutaCarga"), rutaArchivo,	new cargaImg(estado, archivo, $("#noBoton")), "${tamanioArchivo}");

            });
        }
    };
}*/




function subirArchivoImg(item, identificador, carpeta, componente, funcion, tamanio) {

    var data = new FormData();
    data.append('file', item);
    data.append('identificador', identificador);
    data.append('rutaCarpeta', carpeta);
    data.append('tamanio', tamanio);
    var url = 'subirArchivo';
    var elemento = componente;
    $.ajax({
        url: url,
        type: 'POST',
        headers: {
            "X-CSRF-TOKEN": csrfToken
        },
        contentType: false,
        data: data,
        processData: false,
        cache: false,
        beforeSend: function (msg) {
            funcion.esperar("");
        },
        success: function (msg) {
            if (msg == 'No has podido subir el archivo.'
                    || msg == 'El archivo se encuentra vacio.' || msg == 'El archivo supera el tamaño permitido.') {
                elemento.val('');
                if(msg == 'El archivo supera el tamaño permitido.')
                	msg="El archivo supera el tamaño permitido "+ fomatearBytesMb(item[0].files[0].size) +". (Max. "+tamanio+")";
                funcion.error(msg);
            } else {
                toastr.clear();
                elemento.val(msg);
                funcion.exito(msg);
               // item.attr("disabled", "disabled");
            }
        },
        error: function (msg) {
            elemento.val('');
            funcion.error("Problemas al cargar el archivo");
        }
    });
}
function fomatearBytesMb(bytes){
	var sizeInMB = (bytes / (1024*1024)).toFixed(2);
	return sizeInMB + " MB";
}

// función para controlar los estilos en la carga del archivo , div
function carga(estado, archivo, boton) {

    this.esperar = function (msg) {
        estado.html("Cargando el archivo...");
        estado.removeClass("rojo100");
        estado.addClass("anaranjado100");
    };

    this.exito = function (msg) {
        estado.html("El archivo ha sido cargado.");
        estado.removeClass("anaranjado100");
        estado.removeClass("rojo100");
        estado.removeClass("gris100");
        estado.addClass("verde100");

        if (boton.is('button')) {
            boton.attr("disabled", "disabled");
        }
    };

    this.error = function (msg) {
        estado.html(msg);
        estado.removeClass("anaranjado100");
        estado.addClass("rojo100");
    };
}

function cargaImg(estado, archivo, boton) {

    this.esperar = function (msg) {
        estado.html("Cargando...");
        estado.removeClass("rojo100");
        estado.addClass("anaranjado100");
    };

    this.exito = function (msg) {
        estado.html("Cargado.");
        estado.removeClass("anaranjado100");
        estado.removeClass("rojo100");
        estado.removeClass("gris100");
        estado.addClass("verde100");

        if (boton.is('button')) {
            boton.attr("disabled", "disabled");
        }
    };

    this.error = function (msg) {
        estado.html(msg);
        estado.removeClass("anaranjado100");
        estado.addClass("rojo100");
    };
}

$("#areaTrabajo").on("dblclick", " .item", function () {
    abrir($(this), "#" + $(this).attr("data-destino"), true);

});

// función para cargar valor por defecto en combo
function cargarValorComboPorDefecto(combo, valor) {
    $('select[name="' + combo + '"]').find('option[value="' + valor + '"]').prop("selected",
            "selected");
}

function ajustarAltoVentanaAplicacion() {
    header = $(".main-header").height();
    footer = $(".main-footer").height();
    $(".content-wrapper").css( "min-height", $(window).height() - 18 - header - footer);
    $(".main-sidebar").height($(window).height());
    $("#menuAplicacion").height($(window).height() - 149);
    $("#areaTrabajo").height($(window).height() - 18 - header - footer);

}

$(window).resize(function () {
    ajustarAltoVentanaAplicacion();
});

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("itemId", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var item = $("#listadoItems #" + (ev.dataTransfer.getData("itemId")).replace(".", "\\."));
    abrir($(item), "#" + $(item).attr("data-destino"), true);
}


//toastr.js  v2.1.3
!function (e) {
    e(["jquery"], function (e) {
        return function () {
            function t(e, t, n) {
                return g({type: O.error, iconClass: m().iconClasses.error, message: e, optionsOverride: n, title: t})
            }
            function n(t, n) {
                return t || (t = m()), v = e("#" + t.containerId), v.length ? v : (n && (v = d(t)), v)
            }
            function o(e, t, n) {
                return g({type: O.info, iconClass: m().iconClasses.info, message: e, optionsOverride: n, title: t})
            }
            function s(e) {
                C = e
            }
            function i(e, t, n) {
                return g({type: O.success, iconClass: m().iconClasses.success, message: e, optionsOverride: n, title: t})
            }
            function a(e, t, n) {
                return g({type: O.warning, iconClass: m().iconClasses.warning, message: e, optionsOverride: n, title: t})
            }
            function r(e, t) {
                var o = m();
                v || n(o), u(e, o, t) || l(o)
            }
            function c(t) {
                var o = m();
                return v || n(o), t && 0 === e(":focus", t).length ? void h(t) : void(v.children().length && v.remove())
            }
            function l(t) {
                for (var n = v.children(), o = n.length - 1; o >= 0; o--)
                    u(e(n[o]), t)
            }
            function u(t, n, o) {
                var s = !(!o || !o.force) && o.force;
                return!(!t || !s && 0 !== e(":focus", t).length) && (t[n.hideMethod]({duration: n.hideDuration, easing: n.hideEasing, complete: function () {
                        h(t)
                    }}), !0)
            }
            function d(t) {
                return v = e("<div/>").attr("id", t.containerId).addClass(t.positionClass), v.appendTo(e(t.target)), v
            }
            function p() {
                return{tapToDismiss: !0, toastClass: "toast", containerId: "toast-container", debug: !1, showMethod: "fadeIn", showDuration: 300, showEasing: "swing", onShown: void 0, hideMethod: "fadeOut", hideDuration: 1e3, hideEasing: "swing", onHidden: void 0, closeMethod: !1, closeDuration: !1, closeEasing: !1, closeOnHover: !0, extendedTimeOut: 1e3, iconClasses: {error: "toast-error", info: "toast-info", success: "toast-success", warning: "toast-warning"}, iconClass: "toast-info", positionClass: "toast-top-right", timeOut: 5e3, titleClass: "toast-title", messageClass: "toast-message", escapeHtml: !1, target: "body", closeHtml: '<button type="button">&times;</button>', closeClass: "toast-close-button", newestOnTop: !0, preventDuplicates: !1, progressBar: !1, progressClass: "toast-progress", rtl: !1}
            }
            function f(e) {
                C && C(e)
            }
            function g(t) {
                function o(e) {
                    return null == e && (e = ""), e.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
                }
                function s() {
                    c(), u(), d(), p(), g(), C(), l(), i()
                }
                function i() {
                    var e = "";
                    switch (t.iconClass) {
                        case"toast-success":
                        case"toast-info":
                            e = "polite";
                            break;
                            default:
                            e = "assertive"
                        }
                    I.attr("aria-live", e)
                }
                function a() {
                    E.closeOnHover && I.hover(H, D), !E.onclick && E.tapToDismiss && I.click(b), E.closeButton && j && j.click(function (e) {
                        e.stopPropagation ? e.stopPropagation() : void 0 !== e.cancelBubble && e.cancelBubble !== !0 && (e.cancelBubble = !0), E.onCloseClick && E.onCloseClick(e), b(!0)
                    }), E.onclick && I.click(function (e) {
                        E.onclick(e), b()
                    })
                }
                function r() {
                    I.hide(), I[E.showMethod]({duration: E.showDuration, easing: E.showEasing, complete: E.onShown}), E.timeOut > 0 && (k = setTimeout(b, E.timeOut), F.maxHideTime = parseFloat(E.timeOut), F.hideEta = (new Date).getTime() + F.maxHideTime, E.progressBar && (F.intervalId = setInterval(x, 10)))
                }
                function c() {
                    t.iconClass && I.addClass(E.toastClass).addClass(y)
                }
                function l() {
                    E.newestOnTop ? v.prepend(I) : v.append(I)
                }
                function u() {
                    if (t.title) {
                        var e = t.title;
                        E.escapeHtml && (e = o(t.title)), M.append(e).addClass(E.titleClass), I.append(M)
                    }
                }
                function d() {
                    if (t.message) {
                        var e = t.message;
                        E.escapeHtml && (e = o(t.message)), B.append(e).addClass(E.messageClass), I.append(B)
                    }
                }
                function p() {
                    E.closeButton && (j.addClass(E.closeClass).attr("role", "button"), I.prepend(j))
                }
                function g() {
                    E.progressBar && (q.addClass(E.progressClass), I.prepend(q))
                }
                function C() {
                    E.rtl && I.addClass("rtl")
                }
                function O(e, t) {
                    if (e.preventDuplicates) {
                        if (t.message === w)
                            return!0;
                        w = t.message
                    }
                    return!1
                }
                function b(t) {
                    var n = t && E.closeMethod !== !1 ? E.closeMethod : E.hideMethod, o = t && E.closeDuration !== !1 ? E.closeDuration : E.hideDuration, s = t && E.closeEasing !== !1 ? E.closeEasing : E.hideEasing;
                    if (!e(":focus", I).length || t)
                        return clearTimeout(F.intervalId), I[n]({duration: o, easing: s, complete: function () {
                                h(I), clearTimeout(k), E.onHidden && "hidden" !== P.state && E.onHidden(), P.state = "hidden", P.endTime = new Date, f(P)
                            }})
                }
                function D() {
                    (E.timeOut > 0 || E.extendedTimeOut > 0) && (k = setTimeout(b, E.extendedTimeOut), F.maxHideTime = parseFloat(E.extendedTimeOut), F.hideEta = (new Date).getTime() + F.maxHideTime)
                }
                function H() {
                    clearTimeout(k), F.hideEta = 0, I.stop(!0, !0)[E.showMethod]({duration: E.showDuration, easing: E.showEasing})
                }
                function x() {
                    var e = (F.hideEta - (new Date).getTime()) / F.maxHideTime * 100;
                    q.width(e + "%")
                }
                var E = m(), y = t.iconClass || E.iconClass;
                if ("undefined" != typeof t.optionsOverride && (E = e.extend(E, t.optionsOverride), y = t.optionsOverride.iconClass || y), !O(E, t)) {
                    T++, v = n(E, !0);
                    var k = null, I = e("<div/>"), M = e("<div/>"), B = e("<div/>"), q = e("<div/>"), j = e(E.closeHtml), F = {intervalId: null, hideEta: null, maxHideTime: null}, P = {toastId: T, state: "visible", startTime: new Date, options: E, map: t};
                    return s(), r(), a(), f(P), E.debug && console && console.log(P), I
                }
            }
            function m() {
                return e.extend({}, p(), b.options)
            }
            function h(e) {
                v || (v = n()), e.is(":visible") || (e.remove(), e = null, 0 === v.children().length && (v.remove(), w = void 0))
            }
            var v, C, w, T = 0, O = {error: "error", info: "info", success: "success", warning: "warning"}, b = {clear: r, remove: c, error: t, getContainer: n, info: o, options: {}, subscribe: s, success: i, version: "2.1.3", warning: a};
            return b
        }()
    })
}("function" == typeof define && define.amd ? define : function (e, t) {
    "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : window.toastr = t(window.jQuery)
});

function notificacionBottomRight() {
    toastr.options = {
        "closeButton": true,
        "closeHtml": '<button><i class="fas fa-times"></i></button>',
        "debug": false,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-bottom-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "100",
        "hideDuration": "1000",
        "timeOut": "5500",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "show",
        "hideMethod": "hide"
    };
}
;

function mostrarMensaje(texto, tipo, tiempo) {
    toastr.clear();
    var tiempo = (typeof tiempo === 'undefined') ? '5500' : tiempo;
    toastr.options.timeOut = tiempo;
    switch (tipo) {
        case 'EXITO':
            toastr.success(texto);
            break;
        case 'ERROR':
            //toastr.error(texto);
			Swal.fire(
					'Error',
					texto ,
					'error'
				);
            break;
        case 'ERROR-NOTIFICACION':
		Swal.fire(
					'Información',
					texto ,
					'warning'
				);
//toastr.warning(texto);
            break;
        case 'EXITO-INFORMACION':
            toastr.info(texto);
            break;
        default:
            toastr.info("Error desconocido");
    }
}


function mensajeErrorAjax(msgError, textStatus) {
    var msg = '';
    var codigoError = msgError.status;
    if (codigoError === 404) {
        msg = '<b>Error 404 - </b>Página solicitada no encontrada.';
    } else if (codigoError === 405) {
        msg = '<b>Error 405 - </b>Método de la solicitud fallo o no se encontró.';
    } else if (codigoError === 500) {
        msg = '<b>Error 500 - </b>Error interno del servidor.';
    } else if (textStatus === "parsererror") {
        msg = 'El JSON solicitado falló.';
    } else if (textStatus === "timeout") {
        msg = 'Error de tiempo de espera.';
    } else if (textStatus === "abort") {
        msg = 'Ajax petición abortada.';
    } else {
        //msg = 'Error no detectado.\n' + msgError.responseText;
			msg = 'La sessión ha caducado';
            function demorar() {
                window.location = "login?error="+codigo;
            }
            setTimeout(demorar, 2000);
            mostrarMensaje(msg, "ERROR", 3500);
    }

    return msg;
}

console.log("a");
function notificacionesEditar(element) {

    $.ajax({
        data: {idModuloNotificacion: element},
        url: 'actualizarNotificacion',
        type: "POST",
        dataType: "json",
        headers: {
            "X-CSRF-TOKEN": csrfToken
        },
        success: function (result) {
            if (result[0].estado === "exito") {
                mostrarMensaje(result[0].mensaje, "EXITO", 2500);
            } else if (result[0].estado === "error") {
                mostrarMensaje(result[0].mensaje, "ERROR", 3000);
            }
        },
        error: function (jqXHR, textStatus) {
            mensajeErrorAjax(jqXHR, textStatus);
        }
    });
}

notificacionBottomRight();


function crearMensajeAreaTrabajo(mensaje, tipoMensaje, titulo, icono=false) {

	 switch (tipoMensaje) {
	     case 'EXITO':
			 estiloClase="alert-success";
			 estiloIcono="fa fa-check";
	     break;
		 case 'ERROR':
			 estiloClase="alert-danger";
			 estiloIcono="fa fa-exclamation-circle";
		    break;
		 case 'ERROR-NOTIFICACION':
			 estiloClase="alert-warning";
			 estiloIcono="fa fa-exclamation-triangle";
	     break;
		 case 'EXITO-NOTIFICACION':
			 estiloClase="alert-info";
			 estiloIcono="fa fa-info-circle";
	     break;
	     default:
	  }

	 if(!icono)
		 estiloIcono="";

	 var mensaje ="<div class='alert " + estiloClase + " alert-dismissible'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>" +
		"<span class='" + estiloIcono + "'></span><strong class='ml-1'>" + titulo + "</strong><span> " + mensaje + "</span></div>";
	 return mensaje;
}



function actualizarBotonesOrdenamiento(){
	$('.bajar button').removeAttr('disabled');
	$('.subir button').removeAttr('disabled');
	$('.bajar').first().find('button').attr('disabled',true);
	$('.subir').last().find('button').attr('disabled',true);
}

function acciones(nuevo,seccion,bajar,subir,ingreso,borrado,activo, previo, buttonTabla){

	nuevo = (nuevo == null)? "#nuevoRegistro":nuevo; //formulario de nuevo registro
	seccion = (seccion == null)? "#registros":seccion; //tabla en donde añadir los nuevos registros

	bajar = (bajar == null)? new exitoBajar():bajar;
	subir = (subir == null)? new exitoSubir():subir;
	ingreso = (ingreso == null)? new exitoIngreso():ingreso;
	borrado = (borrado == null)? new exitoBorrado():borrado;
	activo = (activo == null)? new exitoActivo():activo;

	previo = (previo == null) ? new validar() : previo;
		/***********************/
	function validar() {
		this.ejecutar = function(){
			return true;
		}
	}


	$(nuevo +" :input[type='submit']").click(function(event) {
		var form = $(nuevo);
		event.preventDefault();
		event.stopPropagation();
		if (form[0].checkValidity() === false) {
			mostrarMensaje("Por favor ingrese toda la información solicitada!",	"ERROR-NOTIFICACION");
		} else {
			if(previo.ejecutar()){
				ejecutarJson($(nuevo), ingreso,null,buttonTabla);
				actualizarBotonesOrdenamiento();
			} else {
				previo.mensajeError();
			}
		}
		form.addClass('was-validated');
	});

		$(seccion).on("submit","form.borrar",function(event){
			event.preventDefault();
			ejecutarJson($(this),borrado);
			actualizarBotonesOrdenamiento();
		});

		$(seccion).on("submit","form.subir",function(event){
			event.preventDefault();
			ejecutarJson($(this),subir);
		});


		$(seccion).on("submit","form.bajar",function(event){
			event.preventDefault();
			ejecutarJson($(this),bajar);
		});

		$(seccion).on("submit","form.abrir",function(event){
			event.stopImmediatePropagation();
			abrir($(this),event,false);
		});

		$(seccion).on("submit","form.activo",function(event){
			event.preventDefault();
			$(this).find("input[name='estadoRegistro']").val('Inactivo');
			ejecutarJson($(this),activo,null,buttonTabla);
		});

		$(seccion).on("submit","form.inactivo",function(event){
			event.preventDefault();
			$(this).find("input[name='estadoRegistro']").val('Activo');
			ejecutarJson($(this),activo,null,buttonTabla);
		});


		/***********************/

		$("#actualizarRegistro").submit(function(event){
			event.preventDefault();
			ejecutarJson($(this),null);
		});

		$("#regresar").submit(function(event){
			event.stopImmediatePropagation();
			abrir($(this),event,false);
		});

		function exitoIngreso(){
			this.ejecutar = function(msg){
				mostrarMensaje("Nuevo registro agregado","EXITO");
				var fila = msg.mensaje;
				$(seccion).append(fila);
				$(nuevo + " fieldset input:not(:hidden,[data-resetear='no'])").val('');
				$(nuevo + " fieldset select:not([data-resetear='no'])").val('');
			    $(nuevo + " fieldset textarea").text(''); //TODO: Revisar efecto
			    $(nuevo + " input:not(:hidden,[data-resetear='no'])").val('');
				$(nuevo + " select:not([data-resetear='no'])").val('');
			    $(nuevo + " textarea").text('');
			    $(nuevo).removeClass('was-validated');
			};
		}

		function exitoBorrado(){
			this.ejecutar = function(msg){
			var registro = " #R";
            if(typeof msg.registro != "undefined") {
                registro = " " + msg.registro;
            }
			$(seccion + registro + msg.mensaje).fadeOut("fast",function(){
			        $(this).remove();
			    });
			if ( $(seccion + "Cabecera").length ) {
			  // hacer algo aquí si el elemento existe
				setTimeout( function () {
				    $(seccion + "Cabecera").DataTable().ajax.reload();
				}, 1000 );


			}
				mostrarMensaje("Elemento borrado","EXITO");
			};
		}


		function exitoActivo(){
			this.ejecutar = function(msg){

				if ($(seccion + " #R" + msg.mensaje +" form.activo").length !=0 ){
					$(seccion + " #R" + msg.mensaje +" form.activo").addClass('inactivo');
					$(seccion + " #R" + msg.mensaje +" form.activo button.btn").addClass('inactivo');
					$(seccion + " #R" + msg.mensaje +" form.inactivo").removeClass('activo');
					$(seccion + " #R" + msg.mensaje +" form.inactivo button.btn").removeClass('activo');
					$estado = 'Inactivo';
			    }else{
			    	$(seccion + " #R" + msg.mensaje +" form.inactivo").addClass('activo');
			    	$(seccion + " #R" + msg.mensaje +" form.inactivo button.btn").addClass('activo');
			    	$(seccion + " #R" + msg.mensaje +" form.activo").removeClass('inactivo');
			    	$(seccion + " #R" + msg.mensaje +" form.activo button.btn").removeClass('inactivo');
			    	$estado = 'Activo';
			    }

				mostrarMensaje("Elemento " + $estado,"EXITO");
			};
		}

		function exitoSubir(){
			this.ejecutar = function(msg){
				var fila = $(seccion + " #R" + msg.mensaje);
				$(seccion + " #R" + msg.mensaje).clone(true).insertAfter($(seccion + " #R" + msg.mensaje).next());
				$(fila).remove();
				mostrarMensaje("Elementos reordenados","EXITO");
				actualizarBotonesOrdenamiento();
			};
		}

		function exitoBajar(){
			this.ejecutar = function(msg){
				var fila = $(seccion + " #R" + msg.mensaje);
				$(seccion + " #R" + msg.mensaje).clone(true).insertBefore($(seccion + " #R" + msg.mensaje).prev());
				$(fila).remove();
				mostrarMensaje("Elementos reordenados","EXITO");
				actualizarBotonesOrdenamiento();
			};
		}
	}


function calcularEdad(birthday) {
    try {
		var birthday_arr = birthday.split("-");
	    var birthday_date = new Date(birthday_arr[0], birthday_arr[1] - 1, birthday_arr[2]);
	    var ageDifMs = Date.now() - birthday_date.getTime();
	    var ageDate = new Date(ageDifMs);
	    var anio = Math.abs(ageDate.getUTCFullYear() - 1970);
	    if (isNaN(anio)){
	    	mostrarMensaje("Fecha de nacimineto inválida, corrija los datos del estudiante","ERROR");
	    	anio=0;
	    }
	    return anio;
    } catch (error) {
    	mostrarMensaje("Fecha de nacimineto inválida, corrija los datos del estudiante.","ERROR");
    }

}

function mayusculas(event){
	event.value=event.value.toUpperCase();
}

function toastRemove(){
	if($("button.toast-close-button").length)
		$("button.toast-close-button").click();
}

/*para cargar archivos*/
$('#areaTrabajo').on('click', ".archivos .seleccioneArchivo", function(e){
	$(this).parent("div").siblings(".archivo").trigger( "click" );
})

$('#areaTrabajo').on('click', ".archivos .estadoCarga", function(event){
	$(this).siblings(".archivo").trigger( "click" );
})

$('#areaTrabajo').on('click', ".archivos .eliminarArchivo", function(event){
	$(this).parents(".contenidoArchivo").remove();
})

$('#areaTrabajo').on('change', ".archivos .archivo", function(event){
	var boton = $(this);
	var fileName = boton[0].files[0].name;
	var estadoCarga = boton.parent('div').children(".estadoCarga");
	var rutaArchivo = boton.parent('div').children(".rutaArchivo");
	rutaArchivo.val("")
	estadoCarga.removeClass("verde100");
	estadoCarga.removeClass("rojo100");
	estadoCarga.addClass("gris100");
	estadoCarga.html(fileName)
});

/*
function funcionCrearSubirArchivo(tamanio, ruta, rutaCarga, rutaSube ,seleccion = true){
	var colorEstadoCarga='gris100';
	var estadoCarga='En espera de archivo... (Tamaño máximo	'+tamanio+')';
	var rutaArchivo="";
	var botonAccion='<button type="button" class="subirArchivo adjunto btn azul100 btn-block " data-rutaCarga="'+ rutaSube + '">'+
	'<i class="fas fa-cloud-upload-alt mr-1"></i>Subir archivo'+
	'</button>';
	if(ruta!=null){
		estadoCarga = "El archivo ha sido cargado.";
		rutaArchivo = ruta;
		var displayBoton=" btn-block";
		if(!seleccion){
			displayBoton="";
		}
		if(rutaArchivo==""){
			botonAccion = '<label class="rojo100-color font-weight-bold">No ha subido ningún archivo aún</label>';
		}else{
			botonAccion = '<a href="'+rutaCarga+'/'+rutaArchivo+'" target="_blank" class="archivoCargado btn btn-info '+displayBoton+'"><i class="fas fa-eye mr-2"></i>Ver archivo</a>';
		}
		var colorEstadoCarga='verde100';
	}

	var htmlArchivos="";
	if(seleccion){
		htmlArchivos='<div class="form-group row contenidoArchivo">'+
		'<div class="col-md-10 text-left grupoSeleccionArchivo">'+
	    '<div class="input-group input-group-sm rounded-lg bg-info shadow-sm">'+
		'<div class="input-group-prepend m-1 ">'+
		'<label for="seleccioneArchivo" class="btn btn-light btn-sm rounded-lg mb-0 seleccioneArchivo"> <i class="fas fa-paperclip mr-2 text-muted"></i><small class="text-uppercase font-weight-bold text-muted">Seleccione archivo</small></label>'+
		'</div>'+
		'<input type="file" class="form-control form-control-sm border-0 archivo" >'+
		'<label for="estadoCarga" class="form-control form-control-sm ml-1 mr-1 estadoCarga '+colorEstadoCarga+'">'+estadoCarga+'</label>'+
		'<div class="input-group-append m-1 ">'+
		'<label for="archivo" class="btn btn-danger btn-sm rounded-lg mb-0 eliminarArchivo"> <i class="fas fa-times"></i></label>'+
		'</div>'+
		'<input type="hidden" class="rutaArchivo" name="rutaArchivo[]" value="'+rutaArchivo+'" />'+
		'<div class="invalid-feedback">Por favor seleccione un archivo</div>'+
		'</div>'+
		'</div>'+
		'<div class="col-md-2 text-left">'+
		botonAccion
		'</div>'+
		'</div>';
	}else{
		htmlArchivos='<div class="form-group row contenidoArchivo">'+
			'<div class="col-md-6 text-left">'+
			botonAccion
			'</div>'+
		'</div>';
	}

	$('.archivos').append(htmlArchivos);

}*/
function funcionCrearSubirArchivoEtiqueta(tamanio, rutaCarga, rutaArchivo, rutaSube,  etiqueta, nombre, botonEliminar = true, permiteSeleccionar = true , campoObligatorio = "required"){
	var colorEstadoCarga='gris100';
	var estadoCarga='En espera de archivo... (Tamaño máximo	'+tamanio+')';
	var ruta="";

	var botonAccion='<button type="button" class="subirArchivo adjunto btn azul100 display-hidden" data-rutaCarga="' + rutaSube + '">'+
	'<i class="fas fa-cloud-upload-alt mr-1 "></i>Subir archivo'+
	'</button>';
	var ancho = 10;
	if(rutaArchivo != "" && rutaArchivo != null){
		estadoCarga = "El archivo ha sido cargado.";
		botonAccion += '<a href="'+rutaCarga+'/'+rutaArchivo+'" target="_blank" class="archivoCargado btn btn-info btn-block"><i class="fas fa-eye mr-1"></i> Ver archivo</a>';
		ancho = 10;
		colorEstadoCarga='verde100';
	}else{
		rutaArchivo = "";
	}

	var htmlArchivos='<div class="col-lg-2 col-md-2 col-sm-3 mb-1">'+
							'<label for="'+etiqueta+'">'+etiqueta+'</label>'+
						'</div>';
	if(permiteSeleccionar){
		htmlArchivos+='<div class="col-lg-10 col-md-10 col-sm-9 mb-1"><div class="form-group row contenidoArchivo">'+
		'<div class="col-md-'+ancho+' text-left grupoSeleccionArchivo">'+
	    '<div class="input-group input-group-sm rounded-lg bg-info shadow-sm">'+
		'<div class="input-group-prepend m-1 ">'+
		'<label for="seleccioneArchivo" class="btn btn-light btn-sm rounded-lg mb-0 seleccioneArchivo"> <i class="fas fa-paperclip mr-1 text-muted"></i><small class="text-uppercase font-weight-bold text-muted"> Seleccione archivo</small></label>'+
		'</div>'+
		'<input type="file" class="form-control form-control-sm border-0 archivo " '+campoObligatorio+' >'+
		'<label for="estadoCarga" class="form-control form-control-sm ml-1 mr-1 estadoCarga '+colorEstadoCarga+'">'+estadoCarga+'</label>';
		if(botonEliminar)
			htmlArchivos += '<div class="input-group-append m-1 ">'+
			'<label for="archivo" class="btn btn-danger btn-sm rounded-lg mb-0 eliminarArchivo"> <i class="fas fa-times"></i></label>'+
			'</div>';
		htmlArchivos += '<input type="hidden" class="rutaArchivo" name="' + nombre + '" value="'+rutaArchivo+'" />'+
		'<div class="invalid-feedback blanco100">Por favor seleccione un archivo</div>'+
		'</div>'+
		'</div>'+
		'<div class="col-md-2 text-left grupoContenidoArchivo">'+
		botonAccion
		'</div>'+
		'</div></div>';
	}else{
		if(rutaArchivo == "" || rutaArchivo == null)
			botonAccion = '<label class="rojo100-color font-weight-bold">No ha subido ningún archivo aún</label>';

		htmlArchivos+='<div class="col-lg-10 col-md-10 col-sm-9 mb-1"><div class="form-group row contenidoArchivo">'+
			'<div class="col-md-4 text-left">'+
			botonAccion
			'</div>'+
		'</div></div>';
	}


	$('.archivos').append(htmlArchivos);


}

function funcionCrearSubirArchivo(tamanio, rutaCarga, rutaArchivo, rutaSube,  botonEliminar = true, permiteSeleccionar = true , campoObligatorio = "required"){
	var colorEstadoCarga='gris100';
	var estadoCarga='En espera de archivo... (Tamaño máximo	'+tamanio+')';
	var ruta="";

	var botonAccion='<button type="button" class="subirArchivo adjunto btn azul100 display-hidden" data-rutaCarga="' + rutaSube + '">'+
	'<i class="fas fa-cloud-upload-alt mr-1 "></i>Subir archivo'+
	'</button>';
	var ancho = 10;
	if(rutaArchivo != "" && rutaArchivo != null){
		estadoCarga = "El archivo ha sido cargado.";
		botonAccion += '<a href="'+rutaCarga+'/'+rutaArchivo+'" target="_blank" class="archivoCargado btn btn-info btn-block"><i class="fas fa-eye mr-1"></i> Ver archivo</a>';
		ancho = 10;
		colorEstadoCarga='verde100';
	}

	var htmlArchivos="";
	if(permiteSeleccionar){
		htmlArchivos='<div class="form-group row contenidoArchivo">'+
		'<div class="col-md-'+ancho+' text-left grupoSeleccionArchivo">'+
	    '<div class="input-group input-group-sm rounded-lg bg-info shadow-sm">'+
		'<div class="input-group-prepend m-1 ">'+
		'<label for="seleccioneArchivo" class="btn btn-light btn-sm rounded-lg mb-0 seleccioneArchivo"> <i class="fas fa-paperclip mr-1 text-muted"></i><small class="text-uppercase font-weight-bold text-muted"> Seleccione archivo</small></label>'+
		'</div>'+
		'<input type="file" class="form-control form-control-sm border-0 archivo" required='+campoObligatorio+' >'+
		'<label for="estadoCarga" class="form-control form-control-sm ml-1 mr-1 estadoCarga '+colorEstadoCarga+'">'+estadoCarga+'</label>';
		if(botonEliminar)
			htmlArchivos += '<div class="input-group-append m-1 ">'+
			'<label for="archivo" class="btn btn-danger btn-sm rounded-lg mb-0 eliminarArchivo"> <i class="fas fa-times"></i></label>'+
			'</div>';
		htmlArchivos += '<input type="hidden" class="rutaArchivo" name="rutaArchivo[]" value="'+rutaArchivo+'" />'+
		'<div class="invalid-feedback blanco100">Por favor seleccione un archivo</div>'+
		'</div>'+
		'</div>'+
		'<div class="col-md-2 text-left grupoContenidoArchivo">'+
		botonAccion
		'</div>'+
		'</div>';
	}else{
		if(rutaArchivo == "" || rutaArchivo == null)
			botonAccion = '<label class="rojo100-color font-weight-bold">No ha subido ningún archivo aún</label>';

		htmlArchivos='<div class="form-group row contenidoArchivo">'+
			'<div class="col-md-4 text-left">'+
			botonAccion
			'</div>'+
		'</div>';
	}


	$('.archivos').append(htmlArchivos);


}


function funcionCrearCampoGenerico(nombreCampo, botonEliminar = true, permiteSeleccionar = true, valor){

	var htmlArchivos = "";
	var valorCampo ="";
	if(valor != null)
		valorCampo = valor;
		//if(botonEliminar)
			//htmlArchivos += '<div class="input-group-append m-1 ">'+
			//'<label for="archivo" class="btn btn-danger btn-sm rounded-lg mb-0 eliminarCampo"> <i class="fas fa-times"></i></label>'+
			//'</div>';

			htmlArchivos += '<div class="form-row mb-1 grupoCampo">' +
			'<div class="col-lg-10 col-md-10 col-auto">' +
								'<input type="text" class="form-control form-control-sm campo"' +
								'name="' + nombreCampo + '[]" required="required" placeholder="" ' +
								'maxlength="10" value="' + valorCampo + '" pattern="^[0-9]+$" />' +
							'<div class="invalid-feedback">Por favor ingrese el número de teléfono</div></div>';

		htmlArchivos += '<div class="col-lg-2 col-md-2 col-auto"><label for="' + nombreCampo + '" class="btn btn-danger btn-sm rounded-lg mb-0 eliminarCampo"> <i class="fas fa-times"></i></label></div></div>';


	$('.campos').append(htmlArchivos);


}


$('#areaTrabajo').on('click', ".campos .eliminarCampo", function(event){
	if($(this).parents(".campos").children(".grupoCampoUnico").length == 0){
		if($(this).parents(".campos").children(".grupoCampo").length > 1)
			$(this).parents(".grupoCampo").remove();
	}else{
		$(this).parents(".grupoCampo").remove();
	}
});


