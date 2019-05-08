webpackJsonp([1], {
    "/tbN": function(e, t) {},
    "17ir": function(e, t) {},
    "6Dvs": function(e, t) {},
    BGBN: function(e, t) {},
    Hk3H: function(e, t) {},
    IYhd: function(e, t) {},
    "Mql/": function(e, t) {},
    NHnr: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("M4fF"),
            s = a.n(n),
            l = a("7+uW"),
            o = a("/ocq"),
            i = a("bqTm"),
            r = a.n(i),
            c = a("zL8q"),
            u = a.n(c),
            d = a("urW8"),
            p = a.n(d),
            m = a("wUZ8"),
            h = a.n(m),
            v = (a("tvR6"), a("Dd8w")),
            f = a.n(v),
            b = a("NYxO"),
            g = {
                created: function() {
                    this.SET_CONTENT()
                },
                methods: f()({}, Object(b.d)(["SET_CONTENT"]))
            },
            y = {
                render: function() {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("div", [t("router-view")], 1)
                },
                staticRenderFns: []
            };
        var x = a("VU/8")(g, y, !1, function(e) {
                a("VjF4")
            }, null, null).exports,
            w = a("mtWM"),
            k = a.n(w),
            T = k.a.create({
                baseURL: location.host.startsWith("localhost") ? "http://localhost:4000/edit" : "https://omg-server.herokuapp.com/edit",
                headers: {
                    "Cache-Control": "no-cache"
                }
            }),
            C = {
                methods: f()({
                    login: function() {
                        var e = this;
                        FB.login(function(t) {
                            FB.api("/me", function() {
                                T.get("signup", {
                                    params: {
                                        accessToken: t.authResponse.accessToken
                                    }
                                }).then(function(t) {
                                    e.SET_ME(t.data), e.$router.push("content")
                                })
                            })
                        }, {
                            scope: "public_profile"
                        })
                    }
                }, Object(b.d)(["SET_ME"]))
            },
            j = {
                render: function() {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("div", {
                        staticClass: "page-login"
                    }, [t("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: this.login
                        }
                    }, [this._v("Login")])], 1)
                },
                staticRenderFns: []
            };
        var E = a("VU/8")(C, j, !1, function(e) {
                a("IYhd")
            }, null, null).exports,
            S = {
                data: function() {
                    return {
                        query: {
                            domain: "OMG"
                        }
                    }
                },
                computed: f()({}, Object(b.c)(["contents"]), Object(b.e)(["more_contents", "domains", "types", "statuses", "languages", "targets"])),
                mounted: function() {
                    this.search()
                },
                methods: f()({
                    create: function() {
                        Re.push({
                            path: "/content/create"
                        })
                    },
                    getTitle: function(e, t) {
                        return "en" === t ? e.text : e.origin
                    },
                    goDetail: function(e) {
                        window.open("/#/content/" + e.id)
                    },
                    search: function() {
                        this.RESET_CONTENTS(), this.SET_CONTENTS(s.a.pickBy(this.query, s.a.identify))
                    },
                    loadMore: function() {
                        this.more_contents && this.SET_CONTENTS(s.a.extend(s.a.pickBy(this.query, s.a.identify), {
                            offset: this.contents.length
                        }))
                    }
                }, Object(b.b)(["SET_CONTENTS"]), Object(b.d)(["RESET_CONTENTS"]))
            },
            N = {
                render: function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("div", {
                        staticClass: "page-content-list"
                    }, [a("div", {
                        staticClass: "wrap-title"
                    }, [a("h1", [e._v("\n      Contents / "), a("router-link", {
                        attrs: {
                            to: "/stat"
                        }
                    }, [e._v("Statistics")])], 1), e._v(" "), a("el-button", {
                        staticClass: "btn-create",
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: e.create
                        }
                    }, [e._v("Create")])], 1), e._v(" "), a("el-card", {
                        staticClass: "card-search"
                    }, [a("el-select", {
                        staticClass: "select-domain",
                        attrs: {
                            placeholder: "Domain"
                        },
                        model: {
                            value: e.query.domain,
                            callback: function(t) {
                                e.$set(e.query, "domain", t)
                            },
                            expression: "query.domain"
                        }
                    }, e._l(e.domains, function(e) {
                        return a("el-option", {
                            key: e.value,
                            attrs: {
                                label: e.label,
                                value: e.value
                            }
                        })
                    }), 1), e._v(" "), a("el-select", {
                        staticClass: "select-type",
                        attrs: {
                            placeholder: "Type",
                            clearable: ""
                        },
                        model: {
                            value: e.query.type,
                            callback: function(t) {
                                e.$set(e.query, "type", t)
                            },
                            expression: "query.type"
                        }
                    }, e._l(e.types, function(e) {
                        return a("el-option", {
                            key: e.value,
                            attrs: {
                                label: e.label,
                                value: e.value
                            }
                        })
                    }), 1), e._v(" "), a("el-select", {
                        staticClass: "select-status",
                        attrs: {
                            placeholder: "Status",
                            clearable: ""
                        },
                        model: {
                            value: e.query.status,
                            callback: function(t) {
                                e.$set(e.query, "status", t)
                            },
                            expression: "query.status"
                        }
                    }, e._l(e.statuses, function(e) {
                        return a("el-option", {
                            key: e.value,
                            attrs: {
                                label: e.label,
                                value: e.value
                            }
                        })
                    }), 1), e._v(" "), a("el-select", {
                        staticClass: "select-language",
                        attrs: {
                            placeholder: "Language",
                            clearable: ""
                        },
                        model: {
                            value: e.query.language,
                            callback: function(t) {
                                e.$set(e.query, "language", t)
                            },
                            expression: "query.language"
                        }
                    }, e._l(e.languages, function(e) {
                        return a("el-option", {
                            key: e.value,
                            attrs: {
                                label: e.label,
                                value: e.value
                            }
                        })
                    }), 1), e._v(" "), a("el-date-picker", {
                        attrs: {
                            type: "daterange",
                            align: "right",
                            "unlink-panels": "",
                            "range-separator": "To",
                            "start-placeholder": "Start date",
                            "end-placeholder": "End date"
                        },
                        model: {
                            value: e.query.date,
                            callback: function(t) {
                                e.$set(e.query, "date", t)
                            },
                            expression: "query.date"
                        }
                    }), e._v(" "), a("el-button", {
                        staticClass: "btn-search",
                        attrs: {
                            icon: "el-icon-search",
                            circle: ""
                        },
                        on: {
                            click: e.search
                        }
                    }), e._v(" "), a("el-input", {
                        staticClass: "input-id",
                        attrs: {
                            placeholder: "ID"
                        },
                        model: {
                            value: e.query.id,
                            callback: function(t) {
                                e.$set(e.query, "id", t)
                            },
                            expression: "query.id"
                        }
                    }), e._v(" "), a("el-input", {
                        staticClass: "input-title",
                        attrs: {
                            placeholder: "Title"
                        },
                        model: {
                            value: e.query.title,
                            callback: function(t) {
                                e.$set(e.query, "title", t)
                            },
                            expression: "query.title"
                        }
                    })], 1), e._v(" "), a("el-table", {
                        directives: [{
                            name: "infinite-scroll",
                            rawName: "v-infinite-scroll",
                            value: e.loadMore,
                            expression: "loadMore"
                        }],
                        attrs: {
                            data: e.contents
                        },
                        on: {
                            "row-click": e.goDetail
                        }
                    }, [a("el-table-column", {
                        attrs: {
                            prop: "id",
                            label: "ID",
                            width: "60"
                        }
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "language",
                            label: "Language",
                            width: "90"
                        }
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "status",
                            label: "Status",
                            width: "90"
                        }
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "list_title",
                            label: "Title"
                        }
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "published_at_from_now",
                            label: "Published At",
                            "sort-by": "published_at",
                            width: "140",
                            sortable: ""
                        }
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "growth_rate_percent",
                            label: "Growth Rate",
                            "sort-by": "growth_rate",
                            width: "80",
                            sortable: ""
                        }
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "today_view",
                            label: "Today View",
                            width: "70",
                            sortable: ""
                        }
                    })], 1)], 1)
                },
                staticRenderFns: []
            };
        var O = a("VU/8")(S, N, !1, function(e) {
                a("tNOV")
            }, null, null).exports,
            q = a("pFYg"),
            R = a.n(q),
            $ = {
                props: {
                    profile: {
                        type: Object,
                        required: !0
                    }
                },
                computed: f()({
                    photo: function() {
                        return "http://graph.facebook.com/" + this.profile.id + "/picture?type=square"
                    }
                }, Object(b.e)(["me"])),
                components: {
                    AuthorItem: M,
                    ImgProfile: A
                }
            },
            D = {
                render: function() {
                    var e = this.$createElement;
                    return (this._self._c || e)("img", {
                        staticClass: "img-profile",
                        attrs: {
                            src: this.photo
                        }
                    })
                },
                staticRenderFns: []
            };
        var A = a("VU/8")($, D, !1, function(e) {
                a("iHUS")
            }, null, null).exports,
            I = {
                props: {
                    index: {
                        type: Number,
                        required: !0
                    },
                    author: {
                        type: Object,
                        required: !0
                    }
                },
                computed: f()({}, Object(b.e)(["me"])),
                methods: {
                    remove: function() {
                        this.$parent.$emit("remove", this.index)
                    }
                },
                components: {
                    ImgProfile: A
                }
            },
            P = {
                render: function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("el-card", {
                        staticClass: "box-card item-author"
                    }, [a("el-row", [a("el-col", {
                        attrs: {
                            span: 2
                        }
                    }, [a("img-profile", {
                        attrs: {
                            profile: e.author
                        }
                    })], 1), e._v(" "), a("el-col", {
                        attrs: {
                            span: 6
                        }
                    }, [e._v("\n      " + e._s(e.author.name) + "\n    ")]), e._v(" "), a("el-col", {
                        attrs: {
                            span: 14
                        }
                    }, [e._v("\n      " + e._s(e.author.roles.join(", ")) + "\n    ")]), e._v(" "), a("el-col", {
                        attrs: {
                            span: 2
                        }
                    }, [a("el-button", {
                        staticClass: "btn-remove",
                        attrs: {
                            icon: "el-icon-delete",
                            circle: ""
                        },
                        on: {
                            click: e.remove
                        }
                    })], 1)], 1)], 1)
                },
                staticRenderFns: []
            };
        var M = a("VU/8")(I, P, !1, function(e) {
                a("Hk3H")
            }, null, null).exports,
            z = {
                data: function() {
                    return {
                        roles: [{
                            label: "Idea",
                            value: "idea"
                        }, {
                            label: "Benchmark",
                            value: "benchmark"
                        }, {
                            label: "Design",
                            value: "design"
                        }, {
                            label: "Editorial (Descriptions + Proofreading)",
                            value: "editorial"
                        }, {
                            label: "Results Idea (Minimum 40%)",
                            value: "result"
                        }, {
                            label: "Custom API Development",
                            value: "development"
                        }, {
                            label: "Translation Design",
                            value: "translation_design"
                        }],
                        value: ""
                    }
                },
                props: {
                    authors: {
                        type: Array
                    }
                },
                computed: f()({}, Object(b.c)(["me"])),
                mounted: function() {
                    var e = this;
                    this.$on("remove", function(t) {
                        e.authors.splice(t, 1)
                    })
                },
                methods: {
                    addAuthor: function() {
                        var e = s.a.find(this.authors, {
                            id: this.me.id
                        });
                        e ? e.roles = s.a.union(e.roles, [this.value]) : this.authors.push({
                            id: this.me.id,
                            name: this.me.name,
                            roles: [this.value]
                        })
                    }
                },
                components: {
                    AuthorItem: M,
                    ImgProfile: A
                }
            },
            U = {
                render: function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("div", [a("el-card", {
                        staticClass: "box-card create-author"
                    }, [a("el-row", [a("el-col", {
                        attrs: {
                            span: 2
                        }
                    }, [a("img-profile", {
                        attrs: {
                            profile: e.me
                        }
                    })], 1), e._v(" "), a("el-col", {
                        attrs: {
                            span: 6
                        }
                    }, [e._v("\n        " + e._s(e.me.name) + "\n      ")]), e._v(" "), a("el-col", {
                        attrs: {
                            span: 16
                        }
                    }, [a("el-select", {
                        attrs: {
                            placeholder: "Select"
                        },
                        on: {
                            change: e.addAuthor
                        },
                        model: {
                            value: e.value,
                            callback: function(t) {
                                e.value = t
                            },
                            expression: "value"
                        }
                    }, e._l(e.roles, function(e) {
                        return a("el-option", {
                            key: e.value,
                            attrs: {
                                label: e.label,
                                value: e.value
                            }
                        })
                    }), 1)], 1)], 1)], 1), e._v(" "), a("ul", {
                        staticClass: "list-author"
                    }, e._l(e.authors, function(e, t) {
                        return a("author-item", {
                            key: t,
                            attrs: {
                                author: e,
                                index: t
                            }
                        })
                    }), 1)], 1)
                },
                staticRenderFns: []
            };
        var F = a("VU/8")(z, U, !1, function(e) {
                a("/tbN")
            }, null, null).exports,
            L = a("RBYm"),
            B = a.n(L),
            G = {
                data: function() {
                    return {
                        file_list: [],
                        uploading: !1
                    }
                },
                props: {
                    object: {
                        type: Object
                    },
                    name: {
                        type: String,
                        default: "media"
                    }
                },
                computed: f()({
                    headerInfo: function() {
                        return {
                            Authorization: this.me.access_token
                        }
                    }
                }, Object(b.e)(["me", "upload_url"])),
                created: function() {
                    this.object[this.name] || (this.object[this.name] = {})
                },
                methods: {
                    onPreview: function(e) {
                        var t = this,
                            a = URL.createObjectURL(e.raw),
                            n = new Image;
                        this.object[this.name] = {}, n.onload = function() {
                            t.object[t.name].width = n.width, t.object[t.name].height = n.height, n.width * n.height < e.size / 1.5 && alert("File size is too big. Did you compress Image?")
                        }, n.src = a, this.object[this.name].src = a, this.$forceUpdate(), this.uploading = !0
                    },
                    onSuccess: function(e) {
                        var t = this,
                            a = this;
                        s.a.defer(function() {
                            a.uploading = !1, a.object[t.name].src = e.src
                        })
                    },
                    remove: function() {
                        var e = this,
                            t = this;
                        s.a.defer(function() {
                            t.uploading = !1, t.object[e.name] = {}
                        })
                    }
                }
            },
            V = {
                render: function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("div", {
                        staticClass: "img-uploader"
                    }, [a("el-upload", {
                        directives: [{
                            name: "loading",
                            rawName: "v-loading",
                            value: e.uploading,
                            expression: "uploading"
                        }],
                        staticClass: "uploader",
                        attrs: {
                            action: e.upload_url,
                            accept: ".jpeg,.jpg,.png,.gif",
                            headers: e.headerInfo,
                            "show-file-list": !1,
                            "on-change": e.onPreview,
                            "on-success": e.onSuccess
                        }
                    }, [e.object[e.name].src ? a("img", {
                        staticClass: "preview",
                        attrs: {
                            src: e.object[e.name].src
                        }
                    }) : a("i", {
                        staticClass: "el-icon-plus uploader-icon"
                    })]), e._v(" "), a("el-button", {
                        staticClass: "btn-remove",
                        attrs: {
                            icon: "el-icon-delete",
                            circle: ""
                        },
                        on: {
                            click: e.remove
                        }
                    })], 1)
                },
                staticRenderFns: []
            };
        var W = a("VU/8")(G, V, !1, function(e) {
                a("6Dvs")
            }, null, null).exports,
            Q = {
                en: {
                    text: "Pick a gender.",
                    media: {},
                    answers: [{
                        text: "Male",
                        media: {}
                    }, {
                        text: "Female",
                        media: {}
                    }],
                    type: "gender"
                },
                es: {
                    text: "Selecciona tu género.",
                    media: {},
                    answers: [{
                        text: "Masculino",
                        media: {}
                    }, {
                        text: "Femenino",
                        media: {}
                    }],
                    type: "gender"
                },
                pt: {
                    text: "Por favor, selecione um gênero.",
                    media: {},
                    answers: [{
                        text: "Macho",
                        media: {}
                    }, {
                        text: "Feminino",
                        media: {}
                    }],
                    type: "gender"
                },
                fr: {
                    text: "Sélectionne un sexe.",
                    media: {},
                    answers: [{
                        text: "Masculin",
                        media: {}
                    }, {
                        text: "Féminin",
                        media: {}
                    }],
                    type: "gender"
                },
                th: {
                    text: "เลือกเพศ",
                    media: {},
                    answers: [{
                        text: "ชาย",
                        media: {}
                    }, {
                        text: "หญิง",
                        media: {}
                    }],
                    type: "gender"
                },
                id: {
                    text: "Pilih jenis kelamin.",
                    media: {},
                    answers: [{
                        text: "Laki-laki",
                        media: {}
                    }, {
                        text: "Perempuan",
                        media: {}
                    }],
                    type: "gender"
                },
                ms: {
                    text: "Pilih jantina.",
                    media: {},
                    answers: [{
                        text: "Lelaki",
                        media: {}
                    }, {
                        text: "Perempuan",
                        media: {}
                    }],
                    type: "gender"
                },
                de: {
                    text: "Wähle ein Geschlecht.",
                    media: {},
                    answers: [{
                        text: "Männlich",
                        media: {}
                    }, {
                        text: "Weiblich",
                        media: {}
                    }],
                    type: "gender"
                },
                it: {
                    text: "Il tuo sesso.",
                    media: {},
                    answers: [{
                        text: "Maschio",
                        media: {}
                    }, {
                        text: "Femmina",
                        media: {}
                    }],
                    type: "gender"
                },
                vi: {
                    text: "Chọn giới tính.",
                    media: {},
                    answers: [{
                        text: "Nam",
                        media: {}
                    }, {
                        text: "Nữ",
                        media: {}
                    }],
                    type: "gender"
                },
                tl: {
                    text: "Describe your looks.",
                    media: {},
                    answers: [{
                        text: "Pogi",
                        media: {}
                    }, {
                        text: "Maganda",
                        media: {}
                    }],
                    type: "gender"
                },
                ja: {
                    text: "性別を選んでください。",
                    media: {},
                    answers: [{
                        text: "男性",
                        media: {}
                    }, {
                        text: "女性",
                        media: {}
                    }],
                    type: "gender"
                },
                tr: {
                    text: "Cinsiyetinizi seçin.",
                    media: {},
                    answers: [{
                        text: "Erkek",
                        media: {}
                    }, {
                        text: "Kadın",
                        media: {}
                    }]
                },
                zh: {
                    text: "選擇性別。",
                    media: {},
                    answers: [{
                        text: "男",
                        media: {}
                    }, {
                        text: "男友",
                        media: {}
                    }],
                    type: "gender"
                },
                nl: {
                    text: "Kies een geslacht.",
                    media: {},
                    answers: [{
                        text: "Man",
                        media: {}
                    }, {
                        text: "Vrouw",
                        media: {}
                    }],
                    type: "gender"
                },
                ru: {
                    text: "Выберите пол.",
                    media: {},
                    answers: [{
                        text: "Мужской",
                        media: {}
                    }, {
                        text: "Женский",
                        media: {}
                    }],
                    type: "gender"
                },
                ro: {
                    text: "Alege un gen.",
                    media: {},
                    answers: [{
                        text: "Bărbat",
                        media: {}
                    }, {
                        text: "Femeie",
                        media: {}
                    }],
                    type: "gender"
                },
                pl: {
                    text: "Wybierz płeć.",
                    media: {},
                    answers: [{
                        text: "Mężczyzna",
                        media: {}
                    }, {
                        text: "Kobieta",
                        media: {}
                    }],
                    type: "gender"
                },
                ka: {
                    text: "ამოირჩიეთ სქესი:",
                    media: {},
                    answers: [{
                        text: "მამდრობითი",
                        media: {}
                    }, {
                        text: "მდედრობითი",
                        media: {}
                    }],
                    type: "gender"
                },
                uk: {
                    text: "Виберіть стать.",
                    media: {},
                    answers: [{
                        text: "Чол",
                        media: {}
                    }, {
                        text: "Жін",
                        media: {}
                    }],
                    type: "gender"
                },
                hi: {
                    text: "लिंग चुनें.",
                    media: {},
                    answers: [{
                        text: "महिला",
                        media: {}
                    }, {
                        text: "पुरुष",
                        media: {}
                    }],
                    type: "gender"
                },
                my: {
                    text: "ကျား/မ ရွေးလိုက်ပါ",
                    media: {},
                    answers: [{
                        text: "ကျား",
                        media: {}
                    }, {
                        text: "မ",
                        media: {}
                    }],
                    type: "gender"
                },
                bg: {
                    text: "Избери пол.",
                    media: {},
                    answers: [{
                        text: "Мъж",
                        media: {}
                    }, {
                        text: "Жена",
                        media: {}
                    }],
                    type: "gender"
                },
                sv: {
                    text: "Välj ett kön:",
                    media: {},
                    answers: [{
                        text: "Man",
                        media: {}
                    }, {
                        text: "Kvinna",
                        media: {}
                    }],
                    type: "gender"
                }
            },
            H = {
                mounted: function() {
                    this.question.bound && new B.a(this.script)
                },
                computed: f()({}, Object(b.e)(["content", "results"]), {
                    height: function() {
                        var e = this;
                        if (!_.isEmpty(this.question.media) && "spot_difference" === this.content.type) {
                            var t = this,
                                a = this.question.media.height / this.question.media.width * 600;
                            return t.script = function(n) {
                                var s = null,
                                    l = 0,
                                    o = 0,
                                    i = 0,
                                    r = n;
                                t.p5 = n;

                                var c = function() {
                                    r.clear(), r.rect(l, o, i, i), r.push(), r.fill(255, 255, 255), r.pop()
                                };
                                n.setup = function() {
                                    (s = n.createCanvas(300, a)).parent(t.$refs.canvas), n.noLoop(), n.strokeWeight(2), n.fill("rgba(0,255,0,0.2)"), s.mousePressed(function() {
                                        l = r.mouseX, o = r.mouseY, delete t.question.bound
                                    }), s.mouseMoved(function() {
                                        r.mouseIsPressed && (r.clear(), i = r.mouseX - l, c())
                                    }), s.mouseReleased(function() {
                                        t.question.bound = {
                                            x: l,
                                            y: o,
                                            size: i
                                        }
                                    })
                                }, n.draw = function() {
                                    if (e.question.bound) {
                                        var t = e.question.bound;
                                        l = t.x, o = t.y, i = t.size, c()
                                    }
                                }
                            }, "height: " + a + "px"
                        }
                        return ""
                    }
                }),
                props: {
                    index: {
                        type: Number,
                        required: !0
                    },
                    question: {
                        type: Object,
                        require: !0
                    }
                },
                watch: {
                    "content.language": {
                        handler: function() {
                            if ("gender" === this.question.type) {
                                var e = Q[this.content.language];
                                this.question.text = e.text, this.question.answers || (this.addAnswer(), this.addAnswer()), this.question.answers[0].text = e.answers[0].text, this.question.answers[1].text = e.answers[1].text, this.$forceUpdate()
                            }
                        },
                        immediate: !0
                    }
                },
                methods: {
                    addAnswer: function() {
                        this.question.answers = (this.question.answers || []).concat([{
                            results: [],
                            correct: !1
                        }]), this.$forceUpdate()
                    },
                    remove: function() {
                        this.$parent.$emit("remove", this.index)
                    },
                    removeAnswew: function(e) {
                        this.question.answers.splice(e, 1), this.$forceUpdate()
                    },
                    forceUpdate: function() {
                        this.$forceUpdate()
                    }
                },
                components: {
                    ImgUploader: W
                }
            },
            K = {
                render: function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("el-card", {
                        staticClass: "item-question"
                    }, [a("label", [e._v("\n    Question " + e._s(e.index + 1) + "\n  ")]), e._v(" "), a("el-button", {
                        staticClass: "btn-remove",
                        attrs: {
                            icon: "el-icon-delete",
                            circle: ""
                        },
                        on: {
                            click: e.remove
                        }
                    }), e._v(" "), a("div", {
                        staticClass: "wrap-uploader"
                    }, [a("img-uploader", {
                        attrs: {
                            object: e.question
                        }
                    }), e._v(" "), a("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.height,
                            expression: "height"
                        }],
                        ref: "canvas",
                        staticClass: "canvas",
                        style: e.height
                    })], 1), e._v(" "), a("el-input", {
                        attrs: {
                            placeholder: "Question"
                        },
                        model: {
                            value: e.question.text,
                            callback: function(t) {
                                e.$set(e.question, "text", t)
                            },
                            expression: "question.text"
                        }
                    }), e._v(" "), "spot_difference" !== e.content.type ? [e._.isEmpty(e.question.answers) ? a("el-input", {
                        attrs: {
                            placeholder: "Place Holder"
                        },
                        model: {
                            value: e.question.placeholder,
                            callback: function(t) {
                                e.$set(e.question, "placeholder", t)
                            },
                            expression: "question.placeholder"
                        }
                    }) : e._e(), e._v(" "), a("el-row", {
                        attrs: {
                            gutter: 16
                        }
                    }, e._l(e.question.answers, function(t, n) {
                        return a("el-col", {
                            key: n,
                            staticClass: "item-answer",
                            attrs: {
                                span: 12
                            }
                        }, [a("label", [e._v("\n          Answer " + e._s(n + 1) + "\n        ")]), e._v(" "), a("el-button", {
                            staticClass: "btn-remove",
                            attrs: {
                                icon: "el-icon-delete",
                                circle: ""
                            },
                            on: {
                                click: function(t) {
                                    e.removeAnswew(n)
                                }
                            }
                        }), e._v(" "), a("img-uploader", {
                            attrs: {
                                object: t
                            }
                        }), e._v(" "), a("input", {
                            directives: [{
                                name: "model",
                                rawName: "v-model",
                                value: t.text,
                                expression: "answer.text"
                            }],
                            staticClass: "el-input__inner",
                            attrs: {
                                placeholder: "Answer"
                            },
                            domProps: {
                                value: t.text
                            },
                            on: {
                                input: function(a) {
                                    a.target.composing || e.$set(t, "text", a.target.value)
                                }
                            }
                        }), e._v(" "), "personality" === e.content.type ? a("div", [a("el-select", {
                            attrs: {
                                multiple: "",
                                placeholder: "Select"
                            },
                            on: {
                                change: e.forceUpdate
                            },
                            model: {
                                value: t.results,
                                callback: function(a) {
                                    e.$set(t, "results", a)
                                },
                                expression: "answer.results"
                            }
                        }, e._l(e.results.length, function(e) {
                            return a("el-option", {
                                key: e,
                                attrs: {
                                    label: e,
                                    value: e
                                }
                            })
                        }), 1)], 1) : "trivia" === e.content.type ? a("div", [a("el-checkbox", {
                            on: {
                                change: e.forceUpdate
                            },
                            model: {
                                value: t.correct,
                                callback: function(a) {
                                    e.$set(t, "correct", a)
                                },
                                expression: "answer.correct"
                            }
                        }, [e._v("Correct Answer")])], 1) : e._e()], 1)
                    }), 1), e._v(" "), a("el-button", {
                        on: {
                            click: e.addAnswer
                        }
                    }, [e._v("Add Answer")])] : e._e()], 2)
                },
                staticRenderFns: []
            };
        var X = a("VU/8")(H, K, !1, function(e) {
                a("fluN")
            }, null, null).exports,
            Y = {
                computed: f()({}, Object(b.e)(["questions", "content"])),
                mounted: function() {
                    var e = this;
                    this.$on("remove", function(t) {
                        e.questions.splice(t, 1)
                    })
                },
                methods: f()({
                    addQuestion: function() {
                        this.ADD_QUESTION()
                    },
                    addGenderQuestion: function() {
                        this.ADD_QUESTION("gender")
                    }
                }, Object(b.d)(["SET_QUESTIONS", "ADD_QUESTION"])),
                components: {
                    QuestionItem: X
                }
            },
            Z = {
                render: function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("div", [a("ul", {
                        staticClass: "list-question"
                    }, e._l(e.questions, function(e, t) {
                        return a("question-item", {
                            key: t,
                            attrs: {
                                question: e,
                                index: t
                            }
                        })
                    }), 1), e._v(" "), a("el-button", {
                        on: {
                            click: e.addQuestion
                        }
                    }, [e._v("Add Question")]), e._v(" "), a("el-button", {
                        on: {
                            click: e.addGenderQuestion
                        }
                    }, [e._v("Add Gender Question")])], 1)
                },
                staticRenderFns: []
            };
        var J = a("VU/8")(Y, Z, !1, function(e) {
                a("PACh")
            }, null, null).exports,
            ee = a("01M/"),
            te = a.n(ee),
            ae = a("Boql"),
            ne = {
                data: function() {
                    return {
                        types: [{
                            label: "My Photo",
                            value: "my_photo"
                        }, {
                            label: "Friend Photo",
                            value: "friend_photo"
                        }, {
                            label: "Select Friend Photo",
                            value: "select_friend_photo"
                        }, {
                            label: "Text",
                            value: "text"
                        }],
                        fonts: [{
                            label: "Comic Sans",
                            value: "comic-sans"
                        }, {
                            label: "Courgette Regular",
                            value: "courgette-regular"
                        }, {
                            label: "Courier New",
                            value: "courier-new"
                        }, {
                            label: "Courier Prime",
                            value: "courier-prime"
                        }, {
                            label: "DroidSerif Regular",
                            value: "droidserif-regular"
                        }, {
                            label: "Impact",
                            value: "impact"
                        }, {
                            label: "KG Miss Kindergarten",
                            value: "kg-miss-kindergarten"
                        }, {
                            label: "Minion Pro",
                            value: "minion-pro"
                        }, {
                            label: "Open Sans",
                            value: "open-sans"
                        }, {
                            label: "RM Typerighter",
                            value: "rm-typerighter"
                        }, {
                            label: "Rough Typewriter",
                            value: "rough-typewriter"
                        }, {
                            label: "SF Pro Regular",
                            value: "sf-pro-regular"
                        }, {
                            label: "SF Pro Semibold",
                            value: "sf-pro-semibold"
                        }, {
                            label: "SF Pro Bold",
                            value: "sf-pro-bold"
                        }, {
                            label: "Silver South",
                            value: "silver-south"
                        }, {
                            label: "Specialelite",
                            value: "specialelite"
                        }, {
                            label: "Underwood Champion",
                            value: "underwood-champion"
                        }, {
                            label: "DK Crayon Crumble",
                            value: "dk-crayon-crumble"
                        }, {
                            label: "Tragic Marker",
                            value: "tragic-marker"
                        }, {
                            label: "Strawberry Blossom",
                            value: "strawberry-blossom"
                        }, {
                            label: "Love Story Rough",
                            value: "love-story-rough"
                        }, {
                            label: "KG Ten Thousand Reasons",
                            value: "kg-ten-thousand-reasons"
                        }, {
                            label: "Essays1743",
                            value: "essays-1743"
                        }, {
                            label: "Bebas Neue",
                            value: "bebas-neue"
                        }, {
                            label: "Letters for Learners",
                            value: "letters-for-learners"
                        }, {
                            label: "Averia Serif",
                            value: "averia-serif"
                        }, {
                            label: "La Belle Aurore",
                            value: "la-belle-aurore"
                        }, {
                            label: "Minion Pro Semibold",
                            value: "minion-pro-semibold"
                        }, {
                            label: "Minion Pro Italic",
                            value: "minion-pro-italic"
                        }, {
                            label: "Magnolia Script",
                            value: "magnolia-script"
                        }, {
                            label: "Congratulations",
                            value: "congratulations"
                        }, {
                            label: "Blokletters Balpen",
                            value: "blokletters-balpen"
                        }, {
                            label: "Beer Money",
                            value: "beer-money"
                        }, {
                            label: "Itim Regular",
                            value: "itim-regular"
                        }, {
                            label: "Sriracha Regular",
                            value: "sriracha-regular"
                        }, {
                            label: "Arial Italic",
                            value: "arial-italic"
                        }, {
                            label: "Traditional Chinese",
                            value: "traditional-chinese"
                        }, {
                            label: "Kozgopro Bold",
                            value: "kozgopro-bold"
                        }, {
                            label: "Kozgopro Regular",
                            value: "kozgopro-regular"
                        }, {
                            label: "Notosanssc Bold",
                            value: "notosanssc-bold"
                        }, {
                            label: "Notosanssc Regular",
                            value: "notosanssc-regular"
                        }, {
                            label: "Notosansthai Regular",
                            value: "notosansthai-regular"
                        }, {
                            label: "Padauk Regular",
                            value: "padauk-regular"
                        }, {
                            label: "Times",
                            value: "times"
                        }, {
                            label: "Bangers Regular",
                            value: "bangers-regular"
                        }, {
                            label: "Boogaloo Regular",
                            value: "boogaloo-regular"
                        }, {
                            label: "Cabin Sketch Regular",
                            value: "cabin-sketch-regular"
                        }, {
                            label: "Gloria Hallelujah Regular",
                            value: "gloria-hallelujah-regular"
                        }, {
                            label: "Indie Flower",
                            value: "indie-flower"
                        }, {
                            label: "Mail Regular",
                            value: "mali-regular"
                        }, {
                            label: "Overlock Regular",
                            value: "overlock-regular"
                        }, {
                            label: "Patrick Hand Regular",
                            value: "patrick-hand-regular"
                        }, {
                            label: "Patua Regular",
                            value: "patua-one"
                        }],
                        aligns: [{
                            label: "Left",
                            value: "left"
                        }, {
                            label: "Center",
                            value: "center"
                        }, {
                            label: "Right",
                            value: "right"
                        }],
                        styles: [{
                            value: "bold"
                        }, {
                            value: "italic"
                        }],
                        transforms: [{
                            value: "uppercase"
                        }, {
                            value: "lowercase"
                        }],
                        filters: [{
                            value: "greyscale",
                            params: 1
                        }]
                    }
                },
                props: {
                    index: {
                        type: Number,
                        required: !0
                    },
                    compose: {
                        type: Object,
                        require: !0
                    }
                },
                watch: {
                    compose: function() {
                        "text" === this.compose.type && (this.compose.width || (this.compose.width = 600), this.compose.color || (this.compose.color = "#000000"))
                    }
                },
                methods: {
                    changeFont: function(e) {
                        !e || s.a.find(this.fonts, {
                            value: e
                        }) || e.startsWith("GF:") || (this.compose.font = "GF:" + e)
                    },
                    remove: function() {
                        this.$parent.$emit("remove", this.index)
                    }
                }
            },
            se = {
                render: function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("el-card", {
                        staticClass: "item-compose"
                    }, [a("el-button", {
                        staticClass: "btn-remove",
                        attrs: {
                            icon: "el-icon-delete",
                            circle: ""
                        },
                        on: {
                            click: e.remove
                        }
                    }), e._v(" "), a("el-select", {
                        attrs: {
                            placeholder: "Select"
                        },
                        model: {
                            value: e.compose.type,
                            callback: function(t) {
                                e.$set(e.compose, "type", t)
                            },
                            expression: "compose.type"
                        }
                    }, e._l(e.types, function(e) {
                        return a("el-option", {
                            key: e.value,
                            attrs: {
                                label: e.label,
                                value: e.value
                            }
                        })
                    }), 1), e._v(" "), a("el-input-number", {
                        staticClass: "text-params",
                        attrs: {
                            max: 600,
                            placeholder: "x"
                        },
                        model: {
                            value: e.compose.x,
                            callback: function(t) {
                                e.$set(e.compose, "x", t)
                            },
                            expression: "compose.x"
                        }
                    }), e._v(" "), a("el-input-number", {
                        staticClass: "text-params",
                        attrs: {
                            max: 900,
                            placeholder: "y"
                        },
                        model: {
                            value: e.compose.y,
                            callback: function(t) {
                                e.$set(e.compose, "y", t)
                            },
                            expression: "compose.y"
                        }
                    }), e._v(" "), a("el-input-number", {
                        staticClass: "text-params",
                        attrs: {
                            min: 0,
                            placeholder: "size"
                        },
                        model: {
                            value: e.compose.size,
                            callback: function(t) {
                                e.$set(e.compose, "size", t)
                            },
                            expression: "compose.size"
                        }
                    }), e._v(" "), a("el-input-number", {
                        staticClass: "text-params",
                        attrs: {
                            min: -360,
                            max: 360,
                            placeholder: "rotate"
                        },
                        model: {
                            value: e.compose.rotate,
                            callback: function(t) {
                                e.$set(e.compose, "rotate", t)
                            },
                            expression: "compose.rotate"
                        }
                    }), e._v(" "), "text" === e.compose.type ? [a("div", {
                        staticClass: "text-inputs"
                    }, [a("el-color-picker", {
                        attrs: {
                            "show-alpha": ""
                        },
                        model: {
                            value: e.compose.color,
                            callback: function(t) {
                                e.$set(e.compose, "color", t)
                            },
                            expression: "compose.color"
                        }
                    }), e._v(" "), a("el-select", {
                        staticClass: "select-font",
                        attrs: {
                            placeholder: "Select",
                            clearable: "",
                            filterable: "",
                            "allow-create": ""
                        },
                        on: {
                            change: e.changeFont
                        },
                        model: {
                            value: e.compose.font,
                            callback: function(t) {
                                e.$set(e.compose, "font", t)
                            },
                            expression: "compose.font"
                        }
                    }, e._l(e.fonts, function(e) {
                        return a("el-option", {
                            key: e.value,
                            attrs: {
                                label: e.label,
                                value: e.value
                            }
                        })
                    }), 1), e._v(" "), a("el-select", {
                        staticClass: "select-align",
                        attrs: {
                            placeholder: "Select"
                        },
                        model: {
                            value: e.compose.align,
                            callback: function(t) {
                                e.$set(e.compose, "align", t)
                            },
                            expression: "compose.align"
                        }
                    }, e._l(e.aligns, function(e) {
                        return a("el-option", {
                            key: e.value,
                            attrs: {
                                label: e.label,
                                value: e.value
                            }
                        })
                    }), 1), e._v(" "), a("el-input-number", {
                        staticClass: "text-params",
                        attrs: {
                            min: 50,
                            max: 600,
                            placeholder: "max W"
                        },
                        model: {
                            value: e.compose.width,
                            callback: function(t) {
                                e.$set(e.compose, "width", t)
                            },
                            expression: "compose.width"
                        }
                    }), e._v(" "), a("el-input", {
                        model: {
                            value: e.compose.text,
                            callback: function(t) {
                                e.$set(e.compose, "text", t)
                            },
                            expression: "compose.text"
                        }
                    })], 1), e._v(" "), a("div", {
                        staticClass: "text-inputs"
                    }, [a("el-select", {
                        attrs: {
                            placeholder: "Style",
                            clearable: ""
                        },
                        model: {
                            value: e.compose.style,
                            callback: function(t) {
                                e.$set(e.compose, "style", t)
                            },
                            expression: "compose.style"
                        }
                    }, e._l(e.styles, function(e) {
                        return a("el-option", {
                            key: e.value,
                            attrs: {
                                label: e.value,
                                value: e.value
                            }
                        })
                    }), 1), e._v(" "), a("el-select", {
                        attrs: {
                            placeholder: "Transform",
                            clearable: ""
                        },
                        model: {
                            value: e.compose.transform,
                            callback: function(t) {
                                e.$set(e.compose, "transform", t)
                            },
                            expression: "compose.transform"
                        }
                    }, e._l(e.transforms, function(e) {
                        return a("el-option", {
                            key: e.value,
                            attrs: {
                                label: e.value,
                                value: e.value
                            }
                        })
                    }), 1), e._v(" "), a("span", {
                        staticClass: "inline-label"
                    }, [e._v("Stroke")]), e._v(" "), a("el-color-picker", {
                        attrs: {
                            "show-alpha": ""
                        },
                        model: {
                            value: e.compose.stroke_color,
                            callback: function(t) {
                                e.$set(e.compose, "stroke_color", t)
                            },
                            expression: "compose.stroke_color"
                        }
                    }), e._v(" "), a("el-input-number", {
                        attrs: {
                            min: 0,
                            max: 20
                        },
                        model: {
                            value: e.compose.stroke_width,
                            callback: function(t) {
                                e.$set(e.compose, "stroke_width", t)
                            },
                            expression: "compose.stroke_width"
                        }
                    })], 1)] : e.compose.type ? a("div", {
                        staticClass: "text-inputs"
                    }, [a("el-select", {
                        attrs: {
                            placeholder: "Select",
                            clearable: ""
                        },
                        model: {
                            value: e.compose.filter,
                            callback: function(t) {
                                e.$set(e.compose, "filter", t)
                            },
                            expression: "compose.filter"
                        }
                    }, e._l(e.filters, function(e) {
                        return a("el-option", {
                            key: e.value,
                            attrs: {
                                label: e.value,
                                value: e.value
                            }
                        })
                    }), 1), e._v(" "), "select_friend_photo" === e.compose.type ? a("el-input", {
                        staticClass: "input-question",
                        model: {
                            value: e.compose.question,
                            callback: function(t) {
                                e.$set(e.compose, "question", t)
                            },
                            expression: "compose.question"
                        }
                    }) : e._e()], 1) : e._e()], 2)
                },
                staticRenderFns: []
            };
        var le = a("VU/8")(ne, se, !1, function(e) {
                a("Mql/")
            }, null, null).exports,
            oe = function(e, t, a) {
                return s.a.each(t, function(t, n) {
                    e = s.a.replace(e, new RegExp(t, "g"), a[n])
                }), e
            },
            ie = {
                data: function() {
                    return {
                        show_canvas: !0,
                        selected_result: 0,
                        drawing: !1
                    }
                },
                computed: f()({
                    height: function() {
                        return this.result && this.result.media ? 600 * (this.result.media.height / this.result.media.width || .525) : 0
                    },
                    result: function() {
                        return this.results[this.selected_result]
                    },
                    photo: function() {
                        return this.me.photo.replace("http", "https") + "&width=250&height=250"
                    }
                }, Object(b.e)(["me", "composes", "results"])),
                watch: {
                    result: {
                        handler: function() {
                            this.result && this.draw()
                        },
                        immediate: !0
                    },
                    composes: {
                        handler: function() {
                            this.result && this.draw()
                        },
                        deep: !0
                    }
                },
                mounted: function() {
                    var e = this;
                    this.$on("remove", function(t) {
                        e.composes.splice(t, 1)
                    }), this.canvas = this.$refs.canvas, this.ctx = this.canvas.getContext("2d")
                },
                methods: f()({
                    addCompose: function() {
                        this.ADD_COMPOSE()
                    },
                    draw: function() {
                        var e = this,
                            t = this;
                        this.clear();
                        var a = function(a, n, s, l, o, i, r, c) {
                                var u = new Image,
                                    d = function() {
                                        if ("greyscale" === r) {
                                            for (var t = e.ctx.getImageData(n, s, l, o), a = 0; a < t.height; a += 1)
                                                for (var i = 0; i < t.width; i += 1) {
                                                    var c = 4 * a * t.width + 4 * i,
                                                        u = (t.data[c] + t.data[c + 1] + t.data[c + 2]) / 3;
                                                    t.data[c] = u, t.data[c + 1] = u, t.data[c + 2] = u
                                                }
                                            e.ctx.putImageData(t, n, s)
                                        }
                                    };
                                u.onload = function() {
                                    i ? (e.ctx.save(), e.ctx.translate(n, s), e.ctx.rotate(i / 180 * Math.PI), t.ctx.drawImage(u, 0, 0, l, o), d(), e.ctx.restore()) : (t.ctx.drawImage(u, n, s, l, o), d()), c()
                                }, u.onerror = c, u.crossOrigin = "Anonymous", u.src = a
                            },
                            n = s.a.groupBy(t.composes, function(e) {
                                return "text" === e.type
                            });
                        Object(ae.parallel)([function(l) {
                            ! function(t, n, l) {
                                Object(ae.parallel)(s.a.map(t, function(t) {
                                    return function(n) {
                                        var s = null;
                                        t.type && (s = e.photo), a(s, t.x, t.y, t.size, t.size, t.rotate, t.filter, n)
                                    }
                                }), function(t) {
                                    t ? l(t) : a(n, 0, 0, 600, e.height, 0, null, l)
                                })
                            }(n.false, t.result.media.src, l)
                        }, function(e) {
                            var t = s.a.groupBy(s.a.filter(s.a.map(n.true, "font"), function(e) {
                                return e && "arial" !== e
                            }), function(e) {
                                return s.a.startsWith(e, "GF:")
                            });
                            if (s.a.isEmpty(t)) e();
                            else {
                                var a = {
                                    active: e,
                                    inactive: e
                                };
                                t.false && (a.custom = {
                                    families: t.false
                                }), t.true && (a.google = {
                                    families: s.a.map(t.true, function(e) {
                                        return e.slice(3)
                                    })
                                }), te.a.load(a)
                            }
                        }], function() {
                            s.a.each(n.true, function(a) {
                                var n = oe(a.text, ["{{result}}", "{{me:name}}", "{{me:first_name}}", "{{me:initial}}"], [t.result.text, t.me.name, t.me.name.split(" ")[0], t.me.name.charAt(0).toUpperCase()]); - 1 !== n.indexOf("{{friend:") && (n = oe(n, ["{{friend:name}}", "{{friend:first_name}}", "{{friend:initial}}"], [t.me.name, t.me.name.split(" ")[0], t.me.name.charAt(0).toUpperCase()])), a.transform && (n = "uppercase" === a.transform ? n.toUpperCase() : n.toLowerCase()), e.ctx.save(), e.ctx.fillStyle = a.color, e.ctx.textAlign = a.align, e.ctx.font = (a.style ? a.style + " " : "") + a.size + "px " + (a.font ? a.font.replace("GF:", "") : "Arial"), e.ctx.translate(a.x, a.y), a.rotate && e.ctx.rotate(a.rotate / 180 * Math.PI), a.stroke_color && (e.ctx.strokeStyle = a.stroke_color, e.ctx.lineWidth = a.stroke_width || 3, e.ctx.strokeText(n, 0, 0)), e.ctx.fillText(n, 0, 0), e.ctx.restore()
                            })
                        })
                    },
                    clear: function() {
                        this.ctx && this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
                    }
                }, Object(b.d)(["SET_COMPOSES", "ADD_COMPOSE"])),
                components: {
                    ComposeItem: le
                }
            },
            re = {
                render: function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("div", {
                        staticClass: "compose"
                    }, [a("div", {
                        staticClass: "wrap-canvas",
                        style: "height:" + e.height + "px"
                    }, [a("canvas", {
                        ref: "canvas",
                        attrs: {
                            width: "600",
                            height: e.height
                        }
                    })]), e._v(" "), a("el-select", {
                        attrs: {
                            placeholder: "Select"
                        },
                        model: {
                            value: e.selected_result,
                            callback: function(t) {
                                e.selected_result = t
                            },
                            expression: "selected_result"
                        }
                    }, e._l(e.results.length, function(e) {
                        return a("el-option", {
                            key: e,
                            attrs: {
                                label: e,
                                value: e - 1
                            }
                        })
                    }), 1), e._v(" "), a("ul", {
                        staticClass: "list-compose"
                    }, e._l(e.composes, function(e, t) {
                        return a("compose-item", {
                            key: t,
                            attrs: {
                                compose: e,
                                index: t
                            }
                        })
                    }), 1), e._v(" "), a("el-button", {
                        on: {
                            click: e.addCompose
                        }
                    }, [e._v("Add Compose")])], 1)
                },
                staticRenderFns: []
            };
        var ce = a("VU/8")(ie, re, !1, function(e) {
                a("iS82")
            }, null, null).exports,
            ue = {
                data: function() {
                    return {
                        showCanvas: !1,
                        rules: {
                            media: [{
                                message: "Please Input Result",
                                trigger: "blur"
                            }]
                        }
                    }
                },
                props: {
                    index: {
                        type: Number,
                        required: !0
                    },
                    result: {
                        type: Object,
                        require: !0
                    }
                },
                computed: f()({}, Object(b.e)(["content", "questions"]), {
                    height: function() {
                        var e = this;
                        if (!_.isEmpty(this.result.media)) {
                            var t = this,
                                a = this.result.media.height / this.result.media.width * 600;
                            return t.script = function(n) {
                                var s = null,
                                    l = 0,
                                    o = 0,
                                    i = 0,
                                    r = n;
                                t.p5 = n;
                                var c = .5,
                                    u = function() {
                                        r.clear(), r.rect(l, o, i, i), r.push(), r.fill(255, 255, 255), r.text(parseInt(100 * c, 0) + "%", l + 10, o + 20), r.pop()
                                    };
                                n.setup = function() {
                                    (s = n.createCanvas(600, a)).parent(t.$refs.canvas), n.noLoop(), n.strokeWeight(2), n.fill("rgba(0,255,0,0.2)"), s.mousePressed(function() {
                                        l = r.mouseX, o = r.mouseY, delete t.result.morph
                                    }), s.mouseMoved(function() {
                                        r.mouseIsPressed && (r.clear(), i = r.mouseX - l, u())
                                    }), s.mouseReleased(function() {
                                        t.result.morph = {
                                            bound: {
                                                x: l,
                                                y: o,
                                                size: i
                                            }
                                        }
                                    }), s.mouseWheel(function(e) {
                                        if (e.shiftKey && t.result.morph) {
                                            e.preventDefault();
                                            var a = e.wheelDelta > 0 ? .1 : -.1;
                                            c = Math.max(0, Math.min(100 * (c + a) % 100 / 100, 1)), t.result.morph.alpha = c, u()
                                        }
                                    })
                                }, n.draw = function() {
                                    if (e.result.morph) {
                                        var t = e.result.morph.bound;
                                        l = t.x, o = t.y, i = t.size, c = e.result.morph.alpha || .5, u()
                                    }
                                }
                            }, "height: " + a + "px"
                        }
                        return ""
                    }
                }),
                mounted: function() {
                    this.result.morph && this.toggleCanvas()
                },
                methods: {
                    remove: function() {
                        this.$parent.$emit("remove", this.index)
                    },
                    toggleCanvas: function() {
                        this.showCanvas ? (delete this.result.morph, this.p5.remove()) : new B.a(this.script), this.showCanvas = !this.showCanvas
                    },
                    validate: function() {
                        this.$refs.form.validate(function(e) {})
                    }
                },
                components: {
                    ImgUploader: W
                }
            },
            de = {
                render: function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("el-card", {
                        staticClass: "item-result"
                    }, [a("el-form", {
                        ref: "form",
                        attrs: {
                            model: e.result,
                            rules: e.rules
                        }
                    }, [a("label", [e._v("\n      Result " + e._s(e.index + 1) + " "), e.result.weight ? a("span", {
                        staticClass: "text-weight"
                    }, [e._v("( " + e._s(e.result.weight) + " )")]) : e._e()]), e._v(" "), a("el-button", {
                        staticClass: "btn-remove",
                        attrs: {
                            icon: "el-icon-delete",
                            circle: ""
                        },
                        on: {
                            click: e.remove
                        }
                    }), e._v(" "), a("div", {
                        staticClass: "wrap-uploader",
                        on: {
                            dblclick: e.toggleCanvas
                        }
                    }, [a("img-uploader", {
                        attrs: {
                            object: e.result
                        }
                    }), e._v(" "), a("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.showCanvas,
                            expression: "showCanvas"
                        }],
                        ref: "canvas",
                        staticClass: "canvas",
                        style: e.height
                    })], 1), e._v(" "), a("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.result.text,
                            expression: "result.text"
                        }],
                        staticClass: "el-input__inner input-text",
                        attrs: {
                            placeholder: "Result Text"
                        },
                        domProps: {
                            value: e.result.text
                        },
                        on: {
                            input: function(t) {
                                t.target.composing || e.$set(e.result, "text", t.target.value)
                            }
                        }
                    }), e._v(" "), "trivia" === e.content.type || "spot_difference" === e.content.type ? a("el-select", {
                        attrs: {
                            placeholder: "Score"
                        },
                        model: {
                            value: e.result.score,
                            callback: function(t) {
                                e.$set(e.result, "score", t)
                            },
                            expression: "result.score"
                        }
                    }, e._l(e.questions.length + 1, function(e) {
                        return a("el-option", {
                            key: e,
                            attrs: {
                                label: e - 1,
                                value: e - 1
                            }
                        })
                    }), 1) : e._e()], 1)], 1)
                },
                staticRenderFns: []
            };
        var pe = a("VU/8")(ue, de, !1, function(e) {
                a("VZhE")
            }, null, null).exports,
            me = {
                data: function() {
                    return {
                        file_list: []
                    }
                },
                computed: f()({
                    headerInfo: function() {
                        return {
                            Authorization: this.me.access_token
                        }
                    }
                }, Object(b.e)(["results", "upload_url", "me"])),
                mounted: function() {
                    var e = this;
                    this.$on("remove", function(t) {
                        e.results.splice(t, 1)
                    })
                },
                methods: f()({
                    addResult: function() {
                        this.ADD_RESULT()
                    },
                    removeAllResults: function() {
                        this.SET_RESULTS([])
                    },
                    handleSuccess: function(e, t, a) {
                        var n = this;
                        _.isEmpty(this.file_list) && (this.file_list = _.concat(this.results, _.map(a, function(e) {
                            return {
                                uid: e.uid,
                                media: {}
                            }
                        })));
                        var s = _.findIndex(this.file_list, {
                                uid: t.uid
                            }),
                            l = URL.createObjectURL(t.raw),
                            o = new Image;
                        o.onload = function() {
                            n.file_list[s] = {
                                media: {
                                    src: e.src,
                                    width: o.width,
                                    height: o.height
                                }
                            }, n.SET_RESULTS(n.file_list), n.$forceUpdate()
                        }, o.src = l
                    }
                }, Object(b.d)(["SET_RESULTS", "ADD_RESULT"])),
                components: {
                    ResultItem: pe
                }
            },
            he = {
                render: function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("div", [a("el-upload", {
                        staticClass: "drag-upload",
                        attrs: {
                            drag: "",
                            action: e.upload_url,
                            headers: e.headerInfo,
                            "on-success": e.handleSuccess,
                            multiple: ""
                        }
                    }, [a("i", {
                        staticClass: "el-icon-upload"
                    }), e._v(" "), a("div", {
                        staticClass: "el-upload__text"
                    }, [e._v("Drop file here or "), a("em", [e._v("click to upload")])])]), e._v(" "), a("ul", {
                        staticClass: "list-result"
                    }, e._l(e.results, function(e, t) {
                        return a("result-item", {
                            key: t,
                            attrs: {
                                result: e,
                                index: t
                            }
                        })
                    }), 1), e._v(" "), a("el-button", {
                        on: {
                            click: e.addResult
                        }
                    }, [e._v("Add Result")]), e._v(" "), a("el-button", {
                        on: {
                            click: e.removeAllResults
                        }
                    }, [e._v("Remove All Results")])], 1)
                },
                staticRenderFns: []
            };
        var ve = a("VU/8")(me, he, !1, function(e) {
                a("BGBN")
            }, null, null).exports,
            fe = {
                data: function() {
                    return {
                        input_visible: !1,
                        tag: ""
                    }
                },
                props: {
                    tags: {
                        type: Array,
                        required: !0
                    }
                },
                methods: {
                    handleClose: function(e) {
                        this.tags.splice(this.tags.indexOf(e), 1)
                    },
                    showInput: function() {
                        var e = this;
                        this.input_visible = !0, this.$nextTick(function() {
                            e.$refs.saveTagInput.$refs.input.focus()
                        })
                    },
                    handleInputConfirm: function() {
                        var e = this.tag;
                        e && this.tags.push(e), this.input_visible = !1, this.tag = ""
                    }
                }
            },
            _e = {
                render: function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("div", {
                        staticClass: "input-tag"
                    }, [e._l(e.tags, function(t) {
                        return a("el-tag", {
                            key: t,
                            attrs: {
                                closable: "",
                                "disable-transitions": !1
                            },
                            on: {
                                close: function(a) {
                                    e.handleClose(t)
                                }
                            }
                        }, [e._v("\n    " + e._s(t) + "\n  ")])
                    }), e._v(" "), e.input_visible ? a("el-input", {
                        ref: "saveTagInput",
                        staticClass: "input-new-tag",
                        attrs: {
                            size: "mini"
                        },
                        on: {
                            blur: e.handleInputConfirm
                        },
                        nativeOn: {
                            keyup: function(t) {
                                return "button" in t || !e._k(t.keyCode, "enter", 13, t.key, "Enter") ? e.handleInputConfirm(t) : null
                            }
                        },
                        model: {
                            value: e.tag,
                            callback: function(t) {
                                e.tag = t
                            },
                            expression: "tag"
                        }
                    }) : a("el-button", {
                        staticClass: "button-new-tag",
                        attrs: {
                            size: "small"
                        },
                        on: {
                            click: e.showInput
                        }
                    }, [e._v("+ New Tag")])], 2)
                },
                staticRenderFns: []
            };
        var be = a("VU/8")(fe, _e, !1, function(e) {
                a("xpX3")
            }, null, null).exports,
            ge = {
                data: function() {
                    return {
                        default_time: new Date,
                        loading_save: !1,
                        loading_copy: !1,
                        dialog_delete: !1,
                        dialog_copy: !1,
                        dialog_error: !1,
                        reset: 0,
                        rules: {}
                    }
                },
                computed: f()({}, Object(b.e)(["content", "questions", "composes", "results", "types", "statuses", "languages", "targets", "me"])),
                created: function() {
                    var e = this.$route.params.id;
                    "create" !== e && this.SET_CONTENT(e)
                },
                watch: {
                    $route: function() {
                        this.SET_CONTENT(this.$route.params.id)
                    },
                    "content.type": function() {
                        this.reset += 1
                    }
                },
                methods: f()({
                    save: function() {
                        var e = this;
                        if (this.content.pick = this.content.pick || 0, "promo" === this.content.type) delete this.content.detail.questions, delete this.content.detail.composes, delete this.content.detail.results;
                        else {
                            delete this.content.detail.id, delete this.content.detail.data, s.a.isEmpty(this.questions) || "random" === this.content.type || (this.content.detail.questions = this.questions), s.a.isEmpty(this.composes) || (this.content.detail.composes = this.composes), this.content.detail.results = this.results;
                            var t = s.a.countBy(this.results, function(e) {
                                return !!e.morph
                            });
                            t.true && t.false && alert("Check Face Morph")
                        }
                        this.$refs.form.validate(function(t) {
                            if (!t) return alert("Check the Form"), !1;
                            for (var a = 0; a < e.results.length; a += 1) {
                                var n = e.results[a];
                                if (!n.media.src || !n.media.src.startsWith("https:")) return alert("Check Result Images"), !1
                            }
                            e.loading_save = !0;
                            var s = e;
                            e.UPDATE_CONTENT(function(t) {
                                t && (e.dialog_error = !0), s.loading_copy = !1, s.loading_save = !1
                            })
                        })
                    },
                    origin: function() {
                        Re.push({
                            name: "content",
                            params: {
                                id: this.content.origin_id
                            }
                        })
                    },
                    goToTranslation: function(e) {
                        window.open("/#/content/" + e)
                    },
                    translate: function() {
                        var e = this,
                            t = function(t, a) {
                                k.a.post("https://translation.googleapis.com/language/translate/v2?q=" + t[a] + "&key=AIzaSyDKYI9oPnAf6TD165fnPufvmy-mSN2FZyM&target=" + e.content.language).then(function(e) {
                                    t[a] = e.data.data.translations[0].translatedText
                                })
                            };
                        ! function e(a) {
                            s.a.forOwn(a, function(n, s) {
                                "text" === s || "sub_text" === s ? a[s] && t(a, s) : "object" === (void 0 === n ? "undefined" : R()(n)) && e(n)
                            })
                        }(this.content)
                    },
                    copy: function() {
                        this.dialog_copy = !1, this.loading_copy = !0, this.content.status = "draft", this.content.origin_id = this.content.id, this.content.title.origin = this.content.title.text, delete this.content.id, this.save()
                    },
                    remove: function() {
                        this.DELETE_CONTENT()
                    }
                }, Object(b.b)(["SET_CONTENT", "DELETE_CONTENT", "UPDATE_CONTENT"]), Object(b.d)({
                    M_SET_CONTENT: "SET_CONTENT"
                })),
                destroyed: function() {
                    this.M_SET_CONTENT()
                },
                components: {
                    AuthorList: F,
                    QuestionList: J,
                    ComposeList: ce,
                    ResultList: ve,
                    ImgUploader: W,
                    InputTag: be
                }
            },
            ye = {
                render: function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("el-form", {
                        key: e.reset,
                        ref: "form",
                        staticClass: "page-create-content",
                        attrs: {
                            model: e.content,
                            rules: e.rules
                        }
                    }, [a("h1", [e._v("\n    Create\n  ")]), e._v(" "), a("h2", [e._v("\n    Authors\n  ")]), e._v(" "), a("author-list", {
                        attrs: {
                            authors: e.content.Authors
                        }
                    }), e._v(" "), a("el-checkbox-group", {
                        attrs: {
                            min: 1
                        },
                        model: {
                            value: e.content.domains,
                            callback: function(t) {
                                e.$set(e.content, "domains", t)
                            },
                            expression: "content.domains"
                        }
                    }, [a("el-checkbox", {
                        attrs: {
                            label: "OMG"
                        }
                    }), e._v(" "), a("el-checkbox", {
                        attrs: {
                            label: "QUEEN"
                        }
                    })], 1), e._v(" "), a("el-form-item", {
                        attrs: {
                            label: "Origin ID",
                            prop: "origin_id"
                        }
                    }, [a("el-input", {
                        staticClass: "input-origin-id",
                        model: {
                            value: e.content.origin_id,
                            callback: function(t) {
                                e.$set(e.content, "origin_id", t)
                            },
                            expression: "content.origin_id"
                        }
                    }), e._v(" "), a("el-button", {
                        on: {
                            click: e.origin
                        }
                    }, [e._v("Go To Origin")])], 1), e._v(" "), a("el-form-item", {
                        attrs: {
                            label: "Origin Title",
                            prop: "title.origin"
                        }
                    }, [a("el-input", {
                        model: {
                            value: e.content.title.origin,
                            callback: function(t) {
                                e.$set(e.content.title, "origin", t)
                            },
                            expression: "content.title.origin"
                        }
                    })], 1), e._v(" "), e.content.translations ? [a("el-form-item", {
                        attrs: {
                            label: "Translations"
                        }
                    }, [a("el-select", {
                        attrs: {
                            placeholder: "Select"
                        },
                        on: {
                            change: e.goToTranslation
                        }
                    }, e._l(e.content.translations, function(e) {
                        return a("el-option", {
                            key: e.id,
                            attrs: {
                                label: e.language,
                                value: e.id
                            }
                        })
                    }), 1)], 1)] : e._e(), e._v(" "), a("el-form-item", {
                        attrs: {
                            label: "Type"
                        }
                    }, [a("el-select", {
                        attrs: {
                            placeholder: "Select"
                        },
                        model: {
                            value: e.content.type,
                            callback: function(t) {
                                e.$set(e.content, "type", t)
                            },
                            expression: "content.type"
                        }
                    }, e._l(e.types, function(e) {
                        return a("el-option", {
                            key: e.value,
                            attrs: {
                                label: e.label,
                                value: e.value
                            }
                        })
                    }), 1)], 1), e._v(" "), e.content.id ? [a("el-form-item", {
                        attrs: {
                            label: "Status"
                        }
                    }, [a("el-select", {
                        attrs: {
                            placeholder: "Select"
                        },
                        model: {
                            value: e.content.status,
                            callback: function(t) {
                                e.$set(e.content, "status", t)
                            },
                            expression: "content.status"
                        }
                    }, e._l(e.statuses, function(e) {
                        return a("el-option", {
                            key: e.value,
                            attrs: {
                                label: e.label,
                                value: e.value
                            }
                        })
                    }), 1)], 1)] : e._e(), e._v(" "), a("el-form-item", {
                        attrs: {
                            label: "Language"
                        }
                    }, [a("el-select", {
                        attrs: {
                            placeholder: "Select"
                        },
                        model: {
                            value: e.content.language,
                            callback: function(t) {
                                e.$set(e.content, "language", t)
                            },
                            expression: "content.language"
                        }
                    }, e._l(e.languages, function(e) {
                        return a("el-option", {
                            key: e.value,
                            attrs: {
                                label: e.label,
                                value: e.value
                            }
                        })
                    }), 1), e._v(" "), a("el-button", {
                        on: {
                            click: e.translate
                        }
                    }, [e._v("Translate")])], 1), e._v(" "), "published" === e.content.status || "done" === e.content.status ? [a("el-form-item", {
                        attrs: {
                            label: "Published Time"
                        }
                    }, [a("el-date-picker", {
                        attrs: {
                            type: "datetime",
                            placeholder: "Select date and time"
                        },
                        model: {
                            value: e.content.published_at,
                            callback: function(t) {
                                e.$set(e.content, "published_at", t)
                            },
                            expression: "content.published_at"
                        }
                    })], 1)] : e._e(), e._v(" "), a("br"), e._v(" "), a("el-checkbox", {
                        model: {
                            value: e.content.bot_message,
                            callback: function(t) {
                                e.$set(e.content, "bot_message", t)
                            },
                            expression: "content.bot_message"
                        }
                    }, [e._v("Bot Message")]), e._v(" "), a("el-form-item", {
                        staticStyle: {
                            display: "none"
                        },
                        attrs: {
                            label: "Pick"
                        }
                    }, [a("el-select", {
                        attrs: {
                            placeholder: "Select",
                            clearable: ""
                        },
                        model: {
                            value: e.content.pick,
                            callback: function(t) {
                                e.$set(e.content, "pick", t)
                            },
                            expression: "content.pick"
                        }
                    }, e._l(10, function(e) {
                        return a("el-option", {
                            key: e,
                            attrs: {
                                label: e,
                                value: e
                            }
                        })
                    }), 1)], 1), e._v(" "), e.content.pick ? [a("el-form-item", {
                        attrs: {
                            label: "Pick Expire Time",
                            prop: "pick_expire_at"
                        }
                    }, [a("el-date-picker", {
                        attrs: {
                            type: "datetime",
                            placeholder: "Select date and time"
                        },
                        model: {
                            value: e.content.pick_expire_at,
                            callback: function(t) {
                                e.$set(e.content, "pick_expire_at", t)
                            },
                            expression: "content.pick_expire_at"
                        }
                    })], 1)] : e._e(), e._v(" "), a("el-form-item", {
                        attrs: {
                            label: "Title Image",
                            prop: "title.media.src"
                        }
                    }, [a("img-uploader", {
                        attrs: {
                            object: e.content.title
                        }
                    })], 1), e._v(" "), a("el-form-item", {
                        attrs: {
                            label: "Cover Image"
                        }
                    }, [a("img-uploader", {
                        attrs: {
                            object: e.content.title,
                            name: "cover"
                        }
                    })], 1), e._v(" "), a("el-form-item", {
                        attrs: {
                            label: "Title",
                            prop: "title.text"
                        }
                    }, [a("el-input", {
                        model: {
                            value: e.content.title.text,
                            callback: function(t) {
                                e.$set(e.content.title, "text", t)
                            },
                            expression: "content.title.text"
                        }
                    })], 1), e._v(" "), "promo" !== e.content.type ? [a("el-form-item", {
                        attrs: {
                            label: "Description"
                        }
                    }, [a("el-input", {
                        model: {
                            value: e.content.title.sub_text,
                            callback: function(t) {
                                e.$set(e.content.title, "sub_text", t)
                            },
                            expression: "content.title.sub_text"
                        }
                    })], 1)] : e._e(), e._v(" "), "game" === e.content.type ? [a("el-form-item", {
                        attrs: {
                            label: "Name",
                            prop: "title.name"
                        }
                    }, [a("el-input", {
                        model: {
                            value: e.content.title.name,
                            callback: function(t) {
                                e.$set(e.content.title, "name", t)
                            },
                            expression: "content.title.name"
                        }
                    })], 1), e._v(" "), a("el-form-item", {
                        attrs: {
                            label: "Ratio",
                            prop: "detail.ratio"
                        }
                    }, [a("el-input", {
                        model: {
                            value: e.content.detail.ratio,
                            callback: function(t) {
                                e.$set(e.content.detail, "ratio", t)
                            },
                            expression: "content.detail.ratio"
                        }
                    })], 1)] : e._e(), e._v(" "), "promo" !== e.content.type && "game" !== e.content.type ? [a("el-form-item", {
                        attrs: {
                            label: "Tags"
                        }
                    }, [a("input-tag", {
                        attrs: {
                            tags: e.content.tags
                        }
                    })], 1), e._v(" "), "random" !== e.content.type ? [a("h2", [e._v("\n        Questions\n      ")]), e._v(" "), a("question-list")] : e._e(), e._v(" "), a("h2", [e._v("\n      Composes\n    ")]), e._v(" "), a("compose-list"), e._v(" "), a("el-form-item", {
                        attrs: {
                            label: "Code"
                        }
                    }, [a("el-input", {
                        model: {
                            value: e.content.detail.code,
                            callback: function(t) {
                                e.$set(e.content.detail, "code", t)
                            },
                            expression: "content.detail.code"
                        }
                    })], 1), e._v(" "), a("h2", [e._v("\n      Results\n    ")]), e._v(" "), a("result-list")] : e._e(), e._v(" "), "promo" === e.content.type ? [a("el-form-item", {
                        attrs: {
                            label: "Cross Promotion App ID",
                            prop: "detail.id"
                        }
                    }, [a("el-input", {
                        model: {
                            value: e.content.detail.id,
                            callback: function(t) {
                                e.$set(e.content.detail, "id", t)
                            },
                            expression: "content.detail.id"
                        }
                    })], 1), e._v(" "), a("el-form-item", {
                        attrs: {
                            label: "Entry Data",
                            prop: "detail.data"
                        }
                    }, [a("el-input", {
                        model: {
                            value: e.content.detail.data,
                            callback: function(t) {
                                e.$set(e.content.detail, "data", t)
                            },
                            expression: "content.detail.data"
                        }
                    })], 1)] : e._e(), e._v(" "), a("div", {
                        staticClass: "btns"
                    }, [a("el-button", {
                        attrs: {
                            loading: e.loading_save
                        },
                        on: {
                            click: e.save
                        }
                    }, [e._v("Save")]), e._v(" "), a("el-button", {
                        on: {
                            click: function(t) {
                                e.dialog_delete = !0
                            }
                        }
                    }, [e._v("Delete")]), e._v(" "), e.content.id ? a("el-button", {
                        attrs: {
                            loading: e.loading_copy
                        },
                        on: {
                            click: function(t) {
                                e.dialog_copy = !0
                            }
                        }
                    }, [e._v("Copy")]) : e._e()], 1), e._v(" "), a("el-dialog", {
                        attrs: {
                            title: "Delete Content",
                            visible: e.dialog_delete,
                            width: "30%"
                        },
                        on: {
                            "update:visible": function(t) {
                                e.dialog_delete = t
                            }
                        }
                    }, [a("span", [e._v("Do you want to delete this content?")]), e._v(" "), a("span", {
                        staticClass: "dialog-footer",
                        attrs: {
                            slot: "footer"
                        },
                        slot: "footer"
                    }, [a("el-button", {
                        on: {
                            click: function(t) {
                                e.dialog_delete = !1
                            }
                        }
                    }, [e._v("Cancel")]), e._v(" "), a("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: e.remove
                        }
                    }, [e._v("Confirm")])], 1)]), e._v(" "), a("el-dialog", {
                        attrs: {
                            title: "Copy Content",
                            visible: e.dialog_copy,
                            width: "30%"
                        },
                        on: {
                            "update:visible": function(t) {
                                e.dialog_copy = t
                            }
                        }
                    }, [a("span", [e._v("Do you want to copy this content?")]), e._v(" "), a("span", {
                        staticClass: "dialog-footer",
                        attrs: {
                            slot: "footer"
                        },
                        slot: "footer"
                    }, [a("el-button", {
                        on: {
                            click: function(t) {
                                e.dialog_copy = !1
                            }
                        }
                    }, [e._v("Cancel")]), e._v(" "), a("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: e.copy
                        }
                    }, [e._v("Confirm")])], 1)]), e._v(" "), a("el-dialog", {
                        attrs: {
                            title: "Server Error",
                            visible: e.dialog_error,
                            width: "30%"
                        },
                        on: {
                            "update:visible": function(t) {
                                e.dialog_error = t
                            }
                        }
                    }, [a("span", [e._v("Server Error")]), e._v(" "), a("span", {
                        staticClass: "dialog-footer",
                        attrs: {
                            slot: "footer"
                        },
                        slot: "footer"
                    }, [a("el-button", {
                        on: {
                            click: function(t) {
                                e.dialog_error = !1
                            }
                        }
                    }, [e._v("Close")])], 1)])], 2)
                },
                staticRenderFns: []
            };
        var xe = a("VU/8")(ge, ye, !1, function(e) {
                a("17ir")
            }, null, null).exports,
            we = {
                data: function() {
                    return {
                        query: {
                            domain: "OMG",
                            language: "en"
                        }
                    }
                },
                computed: f()({}, Object(b.c)(["contents"]), Object(b.e)(["more_contents", "domains", "types", "statuses", "languages", "targets"])),
                mounted: function() {
                    this.search()
                },
                methods: f()({
                    getTitle: function(e, t) {
                        return "en" === t ? e.text : e.origin
                    },
                    goDetail: function(e) {
                        window.open("/#/stat/" + e.id)
                    },
                    search: function() {
                        this.RESET_CONTENTS(), this.SET_CONTENTS(s.a.pickBy(f()({
                            purpose: "stat",
                            status: "published"
                        }, this.query), s.a.identify))
                    },
                    loadMore: function() {
                        this.more_contents && this.SET_CONTENTS(s.a.extend(s.a.pickBy(f()({
                            purpose: "stat",
                            status: "published"
                        }, this.query), s.a.identify), {
                            offset: this.contents.length
                        }))
                    }
                }, Object(b.b)(["SET_CONTENTS"]), Object(b.d)(["RESET_CONTENTS"]))
            },
            ke = {
                render: function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("div", {
                        staticClass: "page-stat-list"
                    }, [a("div", {
                        staticClass: "search"
                    }, [a("div", {
                        staticClass: "wrap-title"
                    }, [a("h1", [e._v("\n        Statistics /  "), a("router-link", {
                        attrs: {
                            to: "/content"
                        }
                    }, [e._v("Contents")])], 1)]), e._v(" "), a("el-card", {
                        staticClass: "card-search"
                    }, [a("el-select", {
                        staticClass: "select-domain",
                        attrs: {
                            placeholder: "Domain"
                        },
                        model: {
                            value: e.query.domain,
                            callback: function(t) {
                                e.$set(e.query, "domain", t)
                            },
                            expression: "query.domain"
                        }
                    }, e._l(e.domains, function(e) {
                        return a("el-option", {
                            key: e.value,
                            attrs: {
                                label: e.label,
                                value: e.value
                            }
                        })
                    }), 1), e._v(" "), a("el-select", {
                        staticClass: "select-type",
                        attrs: {
                            placeholder: "Type",
                            clearable: ""
                        },
                        model: {
                            value: e.query.type,
                            callback: function(t) {
                                e.$set(e.query, "type", t)
                            },
                            expression: "query.type"
                        }
                    }, e._l(e.types, function(e) {
                        return a("el-option", {
                            key: e.value,
                            attrs: {
                                label: e.label,
                                value: e.value
                            }
                        })
                    }), 1), e._v(" "), a("el-select", {
                        staticClass: "select-language",
                        attrs: {
                            placeholder: "Language",
                            clearable: ""
                        },
                        model: {
                            value: e.query.language,
                            callback: function(t) {
                                e.$set(e.query, "language", t)
                            },
                            expression: "query.language"
                        }
                    }, e._l(e.languages, function(e) {
                        return a("el-option", {
                            key: e.value,
                            attrs: {
                                label: e.label,
                                value: e.value
                            }
                        })
                    }), 1), e._v(" "), a("el-date-picker", {
                        attrs: {
                            type: "daterange",
                            align: "right",
                            "unlink-panels": "",
                            "range-separator": "To",
                            "start-placeholder": "Start date",
                            "end-placeholder": "End date"
                        },
                        model: {
                            value: e.query.date,
                            callback: function(t) {
                                e.$set(e.query, "date", t)
                            },
                            expression: "query.date"
                        }
                    }), e._v(" "), a("el-button", {
                        staticClass: "btn-search",
                        attrs: {
                            icon: "el-icon-search",
                            circle: ""
                        },
                        on: {
                            click: e.search
                        }
                    }), e._v(" "), a("el-input", {
                        staticClass: "input-id",
                        attrs: {
                            placeholder: "ID"
                        },
                        model: {
                            value: e.query.id,
                            callback: function(t) {
                                e.$set(e.query, "id", t)
                            },
                            expression: "query.id"
                        }
                    }), e._v(" "), a("el-input", {
                        staticClass: "input-title",
                        attrs: {
                            placeholder: "Title"
                        },
                        model: {
                            value: e.query.title,
                            callback: function(t) {
                                e.$set(e.query, "title", t)
                            },
                            expression: "query.title"
                        }
                    })], 1)], 1), e._v(" "), a("el-table", {
                        directives: [{
                            name: "infinite-scroll",
                            rawName: "v-infinite-scroll",
                            value: e.loadMore,
                            expression: "loadMore"
                        }],
                        attrs: {
                            data: e.contents,
                            "default-sort": {
                                prop: "id",
                                order: "descending"
                            }
                        },
                        on: {
                            "row-click": e.goDetail
                        }
                    }, [a("el-table-column", {
                        attrs: {
                            prop: "id",
                            label: "ID",
                            width: "70",
                            sortable: ""
                        }
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "language",
                            label: "Language",
                            width: "100"
                        }
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "list_title",
                            label: "Title"
                        }
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "published_at_from_now",
                            label: "Published At",
                            width: "120",
                            "sort-by": "published_at",
                            sortable: ""
                        }
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "today_view",
                            label: "Today View",
                            width: "100",
                            sortable: ""
                        }
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "today_referer",
                            label: "Today FB",
                            width: "100",
                            sortable: ""
                        }
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "total_view",
                            label: "Total View",
                            width: "100",
                            sortable: ""
                        }
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "total_referer",
                            label: "Total FB",
                            width: "100",
                            sortable: ""
                        }
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "growth_rate_percent",
                            label: "Growth Rate",
                            width: "80",
                            "sort-by": "growth_rate",
                            sortable: ""
                        }
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "total_growth_rate",
                            label: "Total Growth",
                            width: "70",
                            "sort-by": "total_growth_rate",
                            sortable: ""
                        }
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            label: "Top",
                            type: "index",
                            width: "70"
                        }
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            label: "View Rank",
                            prop: "total_view_index",
                            width: "70"
                        }
                    })], 1)], 1)
                },
                staticRenderFns: []
            };
        var Te = a("VU/8")(we, ke, !1, function(e) {
                a("WRgZ")
            }, null, null).exports,
            Ce = a("PJh5"),
            je = a.n(Ce),
            Ee = {
                extends: a("UlOv").a,
                props: {
                    chartdata: {
                        type: Object,
                        default: null
                    },
                    options: {
                        type: Object,
                        default: null
                    }
                },
                mounted: function() {
                    this.renderChart(this.chartdata, this.options)
                },
                watch: {
                    chartdata: function() {
                        this.renderChart(this.chartdata, this.options)
                    }
                }
            },
            Se = a("VU/8")(Ee, null, !1, null, null, null).exports,
            Ne = {
                data: function() {
                    return {
                        loaded: !1,
                        dailyOptions: {
                            scales: {
                                yAxes: [{
                                    id: "left",
                                    type: "linear",
                                    position: "left"
                                }, {
                                    id: "right",
                                    type: "linear",
                                    position: "right",
                                    ticks: {
                                        max: 100,
                                        min: 0
                                    }
                                }]
                            },
                            responsive: !0,
                            maintainAspectRatio: !1
                        },
                        options: {
                            responsive: !0,
                            maintainAspectRatio: !1
                        },
                        offset: 0
                    }
                },
                computed: f()({}, Object(b.e)(["content"]), {
                    published_at_from_now: function() {
                        return je()(this.content.published_at).fromNow()
                    },
                    list_title: function() {
                        return this.content.title.origin || this.content.title.text
                    },
                    growth_rate_percent: function() {
                        return 100 * parseFloat(this.content.growth_rate).toFixed(2) + "%"
                    },
                    dailyData: function() {
                        return this.content.daily_logs ? {
                            labels: s.a.map(this.content.daily_logs, this.getDate),
                            datasets: [{
                                label: "View",
                                borderColor: "#fd6686",
                                data: s.a.map(this.content.daily_logs, "view"),
                                fill: !1,
                                yAxisID: "left"
                            }, {
                                label: "Referer",
                                borderColor: "#3ba1e8",
                                data: s.a.map(this.content.daily_logs, "referer"),
                                fill: !1,
                                yAxisID: "left"
                            }, {
                                label: "Growth",
                                borderColor: "#cd42e8",
                                data: s.a.map(this.content.daily_logs, this.getGrowth),
                                fill: !1,
                                yAxisID: "right"
                            }]
                        } : null
                    },
                    dailyChartWidth: function() {
                        return "width:" + 20 * this.content.daily_logs.length + "px"
                    },
                    growthData: function() {
                        if (this.content.growth_logs) {
                            var e = s.a.map(this.content.growth_logs, "g").slice(this.offset, this.offset + 200);
                            return {
                                labels: s.a.map(this.content.growth_logs, "v").slice(this.offset, this.offset + 200),
                                datasets: [{
                                    label: "Growth",
                                    borderColor: "#cd42e8",
                                    fill: !1,
                                    data: e
                                }, {
                                    label: "Adjusted Growth",
                                    borderColor: "#fd6686",
                                    fill: !1,
                                    data: this.getAdjustGrowth(e)
                                }, {
                                    label: "Average Growth",
                                    borderColor: "#3ba1e8",
                                    fill: !1,
                                    data: this.getAverageGrowth(e)
                                }]
                            }
                        }
                        return null
                    },
                    growthChartWidth: function() {
                        return "width:" + 10 * Math.min(this.content.growth_logs.length, 200) + "px"
                    }
                }),
                created: function() {
                    var e = this.$route.params.id;
                    "create" !== e && this.SET_CONTENT(e + "?purpose=stat")
                },
                watch: {
                    $route: function() {
                        this.SET_CONTENT(this.$route.params.id + "?purpose=stat")
                    }
                },
                methods: f()({
                    getDate: function(e) {
                        var t = new Date(e.date || e.t);
                        return t.getMonth() + 1 + "/" + t.getDate()
                    },
                    getGrowth: function(e) {
                        return e.referer / e.view * 100
                    },
                    offsetPlus: function() {
                        this.offset += 200
                    },
                    offsetMinus: function() {
                        this.offset -= 200
                    },
                    getAdjustGrowth: function(e) {
                        var t = s.a.map(e, s.a.clone);
                        return s.a.map(t, function(e, a) {
                            return t[a] = a > 0 ? (e + t[a - 1]) / 2 : e, t[a]
                        })
                    },
                    getAverageGrowth: function(e) {
                        var t = s.a.map(e, s.a.clone);
                        return s.a.map(t, function(e, a) {
                            return t[a] = a > 0 ? (e + t[a - 1] * a) / (a + 1) : e, t[a]
                        })
                    }
                }, Object(b.b)(["SET_CONTENT"]), Object(b.d)({
                    M_SET_CONTENT: "SET_CONTENT"
                })),
                destroyed: function() {
                    this.M_SET_CONTENT()
                },
                components: {
                    AuthorList: F,
                    LineChart: Se
                }
            },
            Oe = {
                render: function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("div", {
                        staticClass: "page-stat-content"
                    }, [a("h1", [e._v("\n    Stat\n  ")]), e._v(" "), a("el-table", {
                        attrs: {
                            data: [e.content]
                        }
                    }, [a("el-table-column", {
                        attrs: {
                            sortable: "",
                            prop: "id",
                            label: "ID",
                            width: "70"
                        }
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "language",
                            label: "Language",
                            width: "100"
                        }
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            label: "Title"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [e._v("\n        " + e._s(e.list_title) + "\n      ")]
                            }
                        }])
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            label: "Published At",
                            width: "120"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [e._v("\n        " + e._s(e.published_at_from_now) + "\n      ")]
                            }
                        }])
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            label: "Growth Rate",
                            width: "80"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [e._v("\n        " + e._s(e.growth_rate_percent) + "\n      ")]
                            }
                        }])
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "today_view",
                            label: "Today View",
                            width: "100"
                        }
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "today_referer",
                            label: "Today FB",
                            width: "100"
                        }
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "total_view",
                            label: "Total View",
                            width: "100"
                        }
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "total_referer",
                            label: "Total FB",
                            width: "100"
                        }
                    })], 1), e._v(" "), a("h2", [e._v("\n    Authors\n  ")]), e._v(" "), a("author-list", {
                        attrs: {
                            authors: e.content.Authors
                        }
                    }), e._v(" "), a("h2", [e._v("\n    Daily Logs\n  ")]), e._v(" "), a("el-card", {
                        staticClass: "box-card"
                    }, [a("div", {
                        staticClass: "chart-wrapper"
                    }, [e.dailyData ? a("line-chart", {
                        style: e.dailyChartWidth,
                        attrs: {
                            chartdata: e.dailyData,
                            options: e.dailyOptions
                        }
                    }) : e._e()], 1)]), e._v(" "), a("h2", [e._v("\n    Growth Logs\n  ")]), e._v(" "), a("el-card", {
                        staticClass: "box-card"
                    }, [e.offset > 0 ? a("i", {
                        staticClass: "el-icon-arrow-left",
                        on: {
                            click: e.offsetMinus
                        }
                    }) : e._e(), e._v(" "), e.content.growth_logs.length > e.offset + 200 ? a("i", {
                        staticClass: "el-icon-arrow-right right",
                        on: {
                            click: e.offsetPlus
                        }
                    }) : e._e(), e._v(" "), a("div", {
                        staticClass: "chart-wrapper"
                    }, [e.growthData ? a("line-chart", {
                        style: e.growthChartWidth,
                        attrs: {
                            chartdata: e.growthData,
                            options: e.options
                        }
                    }) : e._e()], 1)]), e._v(" "), a("h2", [e._v("\n    Result Data\n  ")]), e._v(" "), a("el-row", e._l(e.content.detail.results, function(t) {
                        return a("el-col", {
                            key: t.id,
                            attrs: {
                                span: 6
                            }
                        }, [a("el-card", {
                            staticClass: "item-result"
                        }, [a("img", {
                            attrs: {
                                src: t.media.src
                            }
                        }), e._v(" "), a("p", [e._v("\n          " + e._s(e._.round(t.weight, 2)) + "\n        ")])])], 1)
                    }), 1), e._v(" "), e.content.origin_id && e.content.id !== e.content.origin_id ? [a("h2", [e._v("Origin Content")]), e._v(" "), a("router-link", {
                        attrs: {
                            to: "/stat/" + e.content.origin_id
                        }
                    }, [e._v("Go to origin")])] : e._e(), e._v(" "), e._.isEmpty(e.content.translations) ? e._e() : [a("h2", [e._v("Translations")]), e._v(" "), e._l(e.content.translations, function(t) {
                        return a("router-link", {
                            key: t.id,
                            staticClass: "link-translate",
                            attrs: {
                                to: "/stat/" + t.id
                            }
                        }, [e._v("\n      " + e._s(t.language) + "\n    ")])
                    })]], 2)
                },
                staticRenderFns: []
            };
        var qe = a("VU/8")(Ne, Oe, !1, function(e) {
                a("i7En")
            }, null, null).exports,
            Re = new o.a({
                routes: [{
                    name: "root",
                    path: "/",
                    component: E
                }, {
                    name: "content",
                    path: "/content/:id",
                    component: xe
                }, {
                    name: "contents",
                    path: "/content",
                    component: O
                }, {
                    name: "stats",
                    path: "/stat",
                    component: Te
                }, {
                    name: "stats",
                    path: "/stat/:id",
                    component: qe
                }]
            }),
            $e = {
                SET_CONTENT: function(e, t) {
                    T.get("content/" + t, e.state.header).then(function(t) {
                        e.commit("SET_CONTENT", t.data)
                    })
                },
                UPDATE_CONTENT: function(e, t) {
                    e.state.content.id ? T.put("content/" + e.state.content.id, e.state.content).then(function(a) {
                        e.commit("SET_CONTENT", a.data), t()
                    }).catch(t) : T.post("content", e.state.content).then(function(a) {
                        Re.push({
                            name: "content",
                            params: {
                                id: a.data.id
                            }
                        }), e.commit("SET_CONTENT", a.data), t()
                    }).catch(t)
                },
                SET_CONTENTS: function(e, t) {
                    T.get("content", {
                        params: t
                    }).then(function(t) {
                        t.data.length ? (e.commit("SET_MORE_CONTENTS", !0), e.commit("SET_CONTENTS", t.data)) : e.commit("SET_MORE_CONTENTS", !1)
                    })
                },
                DELETE_CONTENT: function(e) {
                    var t = e.state.content.id;
                    t ? T.delete("content/" + t).then(function() {
                        Re.push({
                            name: "contents"
                        })
                    }) : Re.push({
                        name: "contents"
                    }), e.commit("SET_CONTENT", {
                        title: {
                            media: {
                                src: ""
                            }
                        },
                        detail: {},
                        tags: []
                    })
                }
            },
            De = {
                SET_ME: function(e, t) {
                    e.me = t, T.defaults.headers.common.Authorization = e.me.access_token
                },
                SET_CONTENT: function(e, t) {
                    t ? (e.content = t, e.questions = t.detail.questions || [], e.composes = t.detail.composes || [], e.results = t.detail.results || []) : (e.content = {
                        Authors: [],
                        domains: ["OMG"],
                        type: "random",
                        status: "draft",
                        language: "en",
                        target: "global",
                        title: {},
                        bot_message: !0,
                        detail: {},
                        tags: []
                    }, e.questions = [], e.composes = [], e.results = [])
                },
                RESET_CONTENTS: function(e) {
                    e.contents = []
                },
                SET_CONTENTS: function(e, t) {
                    e.contents = _.unionBy(e.contents, t, "id")
                },
                SET_MORE_CONTENTS: function(e, t) {
                    e.more_contents = t
                },
                SET_QUESTIONS: function(e, t) {
                    e.questions = t
                },
                ADD_QUESTION: function(e, t) {
                    "gender" === t ? e.questions.push({
                        type: "gender",
                        media: {}
                    }) : e.questions.push({
                        media: {}
                    })
                },
                SET_COMPOSES: function(e, t) {
                    e.composes = t
                },
                ADD_COMPOSE: function(e) {
                    e.composes.push({})
                },
                SET_RESULTS: function(e, t) {
                    e.results = t
                },
                ADD_RESULT: function(e, t) {
                    e.results.push(t || {
                        media: {},
                        text: ""
                    })
                }
            },
            Ae = {
                me: function(e) {
                    return s.a.extend(e.me, {
                        photo: "http://graph.facebook.com/" + e.me.id + "/picture?type=square"
                    })
                },
                contents: function(e) {
                    return s.a.map(s.a.orderBy(e.contents, ["total_view"], ["desc"]), function(e, t) {
                        return e.published_at && (e.published_at_from_now = je()(e.published_at).fromNow()), e.list_title = e.title.origin || e.title.text, e.growth_rate_percent = s.a.round(100 * e.growth_rate, 1), e.total_growth_rate = s.a.round(e.total_referer / (e.total_view || 1) * 100, 1), e.total_view_index = t + 1, e
                    })
                }
            };
        l.default.use(b.a);
        var Ie = new b.a.Store({
                state: {
                    contents: [],
                    more_contents: !1,
                    content: {},
                    me: {},
                    questions: [],
                    composes: [],
                    results: [],
                    upload_url: location.host.startsWith("localhost") ? "http://localhost:4000/edit/image" : "https://omg-server.herokuapp.com/edit/image",
                    domains: [{
                        label: "OMG",
                        value: "OMG"
                    }, {
                        label: "Queen",
                        value: "QUEEN"
                    }],
                    types: [{
                        label: "Random Quiz",
                        value: "random"
                    }, {
                        label: "Personality Quiz",
                        value: "personality"
                    }, {
                        label: "Trivia Quiz",
                        value: "trivia"
                    }, {
                        label: "Spot the Difference",
                        value: "spot_difference"
                    }, {
                        label: "Cross Promo",
                        value: "promo"
                    }, {
                        label: "Mini Game",
                        value: "game"
                    }],
                    languages: [{
                        label: "English",
                        value: "en"
                    }, {
                        label: "Español",
                        value: "es"
                    }, {
                        label: "Português",
                        value: "pt"
                    }, {
                        label: "Français",
                        value: "fr"
                    }, {
                        label: "ภาษาไทย",
                        value: "th"
                    }, {
                        label: "Bahasa Indonesia",
                        value: "id"
                    }, {
                        label: "Bahasa Melayu",
                        value: "ms"
                    }, {
                        label: "Deutsch",
                        value: "de"
                    }, {
                        label: "Italiano",
                        value: "it"
                    }, {
                        label: "Tiếng Việt",
                        value: "vi"
                    }, {
                        label: "Tagalog",
                        value: "tl"
                    }, {
                        label: "日本語",
                        value: "ja"
                    }, {
                        label: "Türkçe",
                        value: "tr"
                    }, {
                        label: "繁體中文",
                        value: "zh"
                    }, {
                        label: "Nederlands",
                        value: "nl"
                    }, {
                        label: "Pусский",
                        value: "ru"
                    }, {
                        label: "România",
                        value: "ro"
                    }, {
                        label: "Polski",
                        value: "pl"
                    }, {
                        label: "ქართული",
                        value: "ka"
                    }, {
                        label: "українська",
                        value: "uk"
                    }, {
                        label: "Hindi",
                        value: "hi"
                    }, {
                        label: "Burmese",
                        value: "my"
                    }, {
                        label: "Български",
                        value: "bg"
                    }, {
                        label: "Swedish",
                        value: "sv"
                    }],
                    targets: [{
                        label: "Global",
                        value: "global"
                    }, {
                        label: "Asia",
                        value: "asia"
                    }, {
                        label: "West",
                        value: "west"
                    }],
                    statuses: [{
                        label: "Draft",
                        value: "draft"
                    }, {
                        label: "QA",
                        value: "qa"
                    }, {
                        label: "Done",
                        value: "done"
                    }, {
                        label: "Published",
                        value: "published"
                    }, {
                        label: "Hidden",
                        value: "hidden"
                    }]
                },
                actions: $e,
                mutations: De,
                getters: Ae
            }),
            Pe = this;
        Object.defineProperty(l.default.prototype, "_", {
            value: s.a
        }), l.default.use(r.a), l.default.use(u.a), p.a.use(h.a), l.default.use(o.a), l.default.config.productionTip = !1, window.EventBus = new l.default, FB.getLoginStatus(function(e) {
            var t = function() {
                return new l.default({
                    router: Re,
                    store: Ie,
                    el: "#app",
                    render: function(e) {
                        return e(x)
                    }
                })
            };
            "connected" === e.status ? FB.api("/me", function() {
                T.get("signup", {
                    params: {
                        accessToken: e.authResponse.accessToken
                    }
                }).then(function(e) {
                    Ie.commit("SET_ME", e.data), t()
                })
            }) : (t(), Pe.$router.push(""))
        })
    },
    PACh: function(e, t) {},
    VZhE: function(e, t) {},
    VjF4: function(e, t) {},
    WRgZ: function(e, t) {},
    fluN: function(e, t) {},
    i7En: function(e, t) {},
    iHUS: function(e, t) {},
    iS82: function(e, t) {},
    tNOV: function(e, t) {},
    tvR6: function(e, t) {},
    uslO: function(e, t, a) {
        var n = {
            "./af": "3CJN",
            "./af.js": "3CJN",
            "./ar": "3MVc",
            "./ar-dz": "tkWw",
            "./ar-dz.js": "tkWw",
            "./ar-kw": "j8cJ",
            "./ar-kw.js": "j8cJ",
            "./ar-ly": "wPpW",
            "./ar-ly.js": "wPpW",
            "./ar-ma": "dURR",
            "./ar-ma.js": "dURR",
            "./ar-sa": "7OnE",
            "./ar-sa.js": "7OnE",
            "./ar-tn": "BEem",
            "./ar-tn.js": "BEem",
            "./ar.js": "3MVc",
            "./az": "eHwN",
            "./az.js": "eHwN",
            "./be": "3hfc",
            "./be.js": "3hfc",
            "./bg": "lOED",
            "./bg.js": "lOED",
            "./bm": "hng5",
            "./bm.js": "hng5",
            "./bn": "aM0x",
            "./bn.js": "aM0x",
            "./bo": "w2Hs",
            "./bo.js": "w2Hs",
            "./br": "OSsP",
            "./br.js": "OSsP",
            "./bs": "aqvp",
            "./bs.js": "aqvp",
            "./ca": "wIgY",
            "./ca.js": "wIgY",
            "./cs": "ssxj",
            "./cs.js": "ssxj",
            "./cv": "N3vo",
            "./cv.js": "N3vo",
            "./cy": "ZFGz",
            "./cy.js": "ZFGz",
            "./da": "YBA/",
            "./da.js": "YBA/",
            "./de": "DOkx",
            "./de-at": "8v14",
            "./de-at.js": "8v14",
            "./de-ch": "Frex",
            "./de-ch.js": "Frex",
            "./de.js": "DOkx",
            "./dv": "rIuo",
            "./dv.js": "rIuo",
            "./el": "CFqe",
            "./el.js": "CFqe",
            "./en-SG": "oYA3",
            "./en-SG.js": "oYA3",
            "./en-au": "Sjoy",
            "./en-au.js": "Sjoy",
            "./en-ca": "Tqun",
            "./en-ca.js": "Tqun",
            "./en-gb": "hPuz",
            "./en-gb.js": "hPuz",
            "./en-ie": "ALEw",
            "./en-ie.js": "ALEw",
            "./en-il": "QZk1",
            "./en-il.js": "QZk1",
            "./en-nz": "dyB6",
            "./en-nz.js": "dyB6",
            "./eo": "Nd3h",
            "./eo.js": "Nd3h",
            "./es": "LT9G",
            "./es-do": "7MHZ",
            "./es-do.js": "7MHZ",
            "./es-us": "INcR",
            "./es-us.js": "INcR",
            "./es.js": "LT9G",
            "./et": "XlWM",
            "./et.js": "XlWM",
            "./eu": "sqLM",
            "./eu.js": "sqLM",
            "./fa": "2pmY",
            "./fa.js": "2pmY",
            "./fi": "nS2h",
            "./fi.js": "nS2h",
            "./fo": "OVPi",
            "./fo.js": "OVPi",
            "./fr": "tzHd",
            "./fr-ca": "bXQP",
            "./fr-ca.js": "bXQP",
            "./fr-ch": "VK9h",
            "./fr-ch.js": "VK9h",
            "./fr.js": "tzHd",
            "./fy": "g7KF",
            "./fy.js": "g7KF",
            "./ga": "U5Iz",
            "./ga.js": "U5Iz",
            "./gd": "nLOz",
            "./gd.js": "nLOz",
            "./gl": "FuaP",
            "./gl.js": "FuaP",
            "./gom-latn": "+27R",
            "./gom-latn.js": "+27R",
            "./gu": "rtsW",
            "./gu.js": "rtsW",
            "./he": "Nzt2",
            "./he.js": "Nzt2",
            "./hi": "ETHv",
            "./hi.js": "ETHv",
            "./hr": "V4qH",
            "./hr.js": "V4qH",
            "./hu": "xne+",
            "./hu.js": "xne+",
            "./hy-am": "GrS7",
            "./hy-am.js": "GrS7",
            "./id": "yRTJ",
            "./id.js": "yRTJ",
            "./is": "upln",
            "./is.js": "upln",
            "./it": "FKXc",
            "./it-ch": "/E8D",
            "./it-ch.js": "/E8D",
            "./it.js": "FKXc",
            "./ja": "ORgI",
            "./ja.js": "ORgI",
            "./jv": "JwiF",
            "./jv.js": "JwiF",
            "./ka": "RnJI",
            "./ka.js": "RnJI",
            "./kk": "j+vx",
            "./kk.js": "j+vx",
            "./km": "5j66",
            "./km.js": "5j66",
            "./kn": "gEQe",
            "./kn.js": "gEQe",
            "./ko": "eBB/",
            "./ko.js": "eBB/",
            "./ku": "kI9l",
            "./ku.js": "kI9l",
            "./ky": "6cf8",
            "./ky.js": "6cf8",
            "./lb": "z3hR",
            "./lb.js": "z3hR",
            "./lo": "nE8X",
            "./lo.js": "nE8X",
            "./lt": "/6P1",
            "./lt.js": "/6P1",
            "./lv": "jxEH",
            "./lv.js": "jxEH",
            "./me": "svD2",
            "./me.js": "svD2",
            "./mi": "gEU3",
            "./mi.js": "gEU3",
            "./mk": "Ab7C",
            "./mk.js": "Ab7C",
            "./ml": "oo1B",
            "./ml.js": "oo1B",
            "./mn": "CqHt",
            "./mn.js": "CqHt",
            "./mr": "5vPg",
            "./mr.js": "5vPg",
            "./ms": "ooba",
            "./ms-my": "G++c",
            "./ms-my.js": "G++c",
            "./ms.js": "ooba",
            "./mt": "oCzW",
            "./mt.js": "oCzW",
            "./my": "F+2e",
            "./my.js": "F+2e",
            "./nb": "FlzV",
            "./nb.js": "FlzV",
            "./ne": "/mhn",
            "./ne.js": "/mhn",
            "./nl": "3K28",
            "./nl-be": "Bp2f",
            "./nl-be.js": "Bp2f",
            "./nl.js": "3K28",
            "./nn": "C7av",
            "./nn.js": "C7av",
            "./pa-in": "pfs9",
            "./pa-in.js": "pfs9",
            "./pl": "7LV+",
            "./pl.js": "7LV+",
            "./pt": "ZoSI",
            "./pt-br": "AoDM",
            "./pt-br.js": "AoDM",
            "./pt.js": "ZoSI",
            "./ro": "wT5f",
            "./ro.js": "wT5f",
            "./ru": "ulq9",
            "./ru.js": "ulq9",
            "./sd": "fW1y",
            "./sd.js": "fW1y",
            "./se": "5Omq",
            "./se.js": "5Omq",
            "./si": "Lgqo",
            "./si.js": "Lgqo",
            "./sk": "OUMt",
            "./sk.js": "OUMt",
            "./sl": "2s1U",
            "./sl.js": "2s1U",
            "./sq": "V0td",
            "./sq.js": "V0td",
            "./sr": "f4W3",
            "./sr-cyrl": "c1x4",
            "./sr-cyrl.js": "c1x4",
            "./sr.js": "f4W3",
            "./ss": "7Q8x",
            "./ss.js": "7Q8x",
            "./sv": "Fpqq",
            "./sv.js": "Fpqq",
            "./sw": "DSXN",
            "./sw.js": "DSXN",
            "./ta": "+7/x",
            "./ta.js": "+7/x",
            "./te": "Nlnz",
            "./te.js": "Nlnz",
            "./tet": "gUgh",
            "./tet.js": "gUgh",
            "./tg": "5SNd",
            "./tg.js": "5SNd",
            "./th": "XzD+",
            "./th.js": "XzD+",
            "./tl-ph": "3LKG",
            "./tl-ph.js": "3LKG",
            "./tlh": "m7yE",
            "./tlh.js": "m7yE",
            "./tr": "k+5o",
            "./tr.js": "k+5o",
            "./tzl": "iNtv",
            "./tzl.js": "iNtv",
            "./tzm": "FRPF",
            "./tzm-latn": "krPU",
            "./tzm-latn.js": "krPU",
            "./tzm.js": "FRPF",
            "./ug-cn": "To0v",
            "./ug-cn.js": "To0v",
            "./uk": "ntHu",
            "./uk.js": "ntHu",
            "./ur": "uSe8",
            "./ur.js": "uSe8",
            "./uz": "XU1s",
            "./uz-latn": "/bsm",
            "./uz-latn.js": "/bsm",
            "./uz.js": "XU1s",
            "./vi": "0X8Q",
            "./vi.js": "0X8Q",
            "./x-pseudo": "e/KL",
            "./x-pseudo.js": "e/KL",
            "./yo": "YXlc",
            "./yo.js": "YXlc",
            "./zh-cn": "Vz2w",
            "./zh-cn.js": "Vz2w",
            "./zh-hk": "ZUyn",
            "./zh-hk.js": "ZUyn",
            "./zh-tw": "BbgG",
            "./zh-tw.js": "BbgG"
        };

        function s(e) {
            return a(l(e))
        }

        function l(e) {
            var t = n[e];
            if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");
            return t
        }
        s.keys = function() {
            return Object.keys(n)
        }, s.resolve = l, e.exports = s, s.id = "uslO"
    },
    xpX3: function(e, t) {}
}, ["NHnr"]);
//# sourceMappingURL=app.0d5c111aca1f8acce412.js.map