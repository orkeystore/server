(this['webpackJsonporkeystore-ui'] =
  this['webpackJsonporkeystore-ui'] || []).push([
  [0],
  {
    324: function (e, t, a) {
      e.exports = a(368);
    },
    332: function (e, t, a) {},
    368: function (e, t, a) {
      'use strict';
      a.r(t);
      var n = a(0),
        r = a.n(n),
        c = a(21),
        o = a.n(c),
        i = a(11),
        l = a(425),
        u = a(150),
        s = a(106),
        m = a(61),
        d = a(435),
        f = (a(332), a(333), a(33)),
        p = a(293),
        b = a(314),
        h = a(100),
        g = (a(294), a(5)),
        O = a.n(g),
        v = a(9),
        j = a(2),
        E = a(23),
        y = a(68),
        x = a(130),
        k = a(131),
        w = (a(335), a(132)),
        S = a(295),
        C = a(315),
        P = a(316),
        I = (function (e) {
          Object(S.a)(a, e);
          var t = Object(C.a)(a);
          function a(e, n) {
            var r;
            return (
              Object(x.a)(this, a),
              ((r = t.call(this, n)).status = e),
              (r.message = n),
              Object.setPrototypeOf(Object(w.a)(r), a.prototype),
              r
            );
          }
          return (
            Object(k.a)(a, [
              {
                key: 'getInfo',
                value: function () {
                  return { statusCode: this.status, message: this.message };
                },
              },
            ]),
            a
          );
        })(Object(P.a)(Error)),
        R = new ((function () {
          function e(t) {
            Object(x.a)(this, e),
              (this.headers = void 0),
              (this.headers = t || {});
          }
          return (
            Object(k.a)(e, [
              {
                key: 'setHeader',
                value: function (e, t) {
                  this.headers = Object(j.a)(
                    Object(j.a)({}, this.headers),
                    {},
                    Object(y.a)({}, e, t),
                  );
                },
              },
              {
                key: 'removeHeader',
                value: function (e) {
                  this.headers && delete this.headers[e];
                },
              },
              {
                key: 'fetch',
                value: (function () {
                  var e = Object(v.a)(
                    O.a.mark(function e(t, a) {
                      var n, r;
                      return O.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  'string' !== typeof t
                                    ? (t.url.replace('{api}', ''),
                                      (n = Object(j.a)(
                                        Object(j.a)({}, t),
                                        {},
                                        { url: t.url },
                                      )))
                                    : (n = t.replace('{api}', '')),
                                  (r = Object(j.a)(
                                    Object(j.a)(
                                      { 'Content-Type': 'application/json' },
                                      this.headers,
                                    ),
                                    null === a || void 0 === a
                                      ? void 0
                                      : a.headers,
                                  )),
                                  e.abrupt(
                                    'return',
                                    window.fetch(
                                      n,
                                      Object(j.a)(
                                        Object(j.a)(
                                          { credentials: 'include' },
                                          a,
                                        ),
                                        {},
                                        { headers: r },
                                      ),
                                    ),
                                  )
                                );
                              case 3:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  return function (t, a) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: 'fetchJson',
                value: (function () {
                  var e = Object(v.a)(
                    O.a.mark(function e(t, a) {
                      var n, r;
                      return O.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0), (e.next = 3), this.fetch(t, a)
                                );
                              case 3:
                                if (!((n = e.sent).status < 300)) {
                                  e.next = 10;
                                  break;
                                }
                                return (e.next = 7), n.json();
                              case 7:
                                return e.abrupt('return', e.sent);
                              case 10:
                                return (e.next = 12), n.json();
                              case 12:
                                throw (
                                  ((r = e.sent), new I(r.statusCode, r.message))
                                );
                              case 14:
                                e.next = 25;
                                break;
                              case 16:
                                if (
                                  ((e.prev = 16),
                                  (e.t0 = e.catch(0)),
                                  !(e.t0 instanceof I))
                                ) {
                                  e.next = 24;
                                  break;
                                }
                                (e.t1 = e.t0.status),
                                  (e.next = 401 === e.t1 ? 22 : 24);
                                break;
                              case 22:
                                return (
                                  vt.dispatch(
                                    te.setSessionExpired({ isExpired: !0 }),
                                  ),
                                  e.abrupt('break', 24)
                                );
                              case 24:
                                throw e.t0;
                              case 25:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[0, 16]],
                      );
                    }),
                  );
                  return function (t, a) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
            ]),
            e
          );
        })())(),
        A = (function () {
          var e = Object(v.a)(
            O.a.mark(function e(t) {
              var a;
              return O.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        R.removeHeader('Authorization'),
                        localStorage.removeItem('auth'),
                        (e.next = 4),
                        R.fetchJson('{api}/auth/token', {
                          method: 'POST',
                          body: JSON.stringify(t),
                        })
                      );
                    case 4:
                      return (
                        (a = e.sent) &&
                          (localStorage.setItem('auth', JSON.stringify(a)),
                          R.setHeader(
                            'Authorization',
                            'Bearer '.concat(a.token),
                          )),
                        e.abrupt('return', a)
                      );
                    case 7:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        M = Object(v.a)(
          O.a.mark(function e() {
            return O.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      R.removeHeader('Authorization'),
                      localStorage.removeItem('auth'),
                      e.abrupt('return', { isLogout: !0 })
                    );
                  case 3:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        ),
        T = Object(v.a)(
          O.a.mark(function e() {
            var t, a, n;
            return O.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (null !== (t = localStorage.getItem('auth'))) {
                      e.next = 3;
                      break;
                    }
                    throw new I(401, 'No jwt presents');
                  case 3:
                    return (
                      (a = JSON.parse(t)),
                      R.setHeader('Authorization', 'Bearer '.concat(a.token)),
                      (e.next = 7),
                      R.fetchJson('{api}/auth/me', { method: 'GET' })
                    );
                  case 7:
                    return (n = e.sent), e.abrupt('return', n);
                  case 9:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        ),
        N = (function () {
          var e = Object(v.a)(
            O.a.mark(function e(t) {
              var a;
              return O.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        R.fetchJson('{api}/auth/account', {
                          method: 'POST',
                          body: JSON.stringify(t),
                        })
                      );
                    case 2:
                      return (a = e.sent), e.abrupt('return', a);
                    case 4:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        L = (function () {
          var e = Object(v.a)(
            O.a.mark(function e(t) {
              var a;
              return O.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        R.fetchJson('{api}/auth/accounts', { method: 'GET' })
                      );
                    case 2:
                      return (a = e.sent), e.abrupt('return', a);
                    case 4:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        F = {
          remove: (function () {
            var e = Object(v.a)(
              O.a.mark(function e(t) {
                var a;
                return O.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          R.fetchJson('{api}/auth/accounts', {
                            method: 'DELETE',
                            body: JSON.stringify(t),
                          })
                        );
                      case 2:
                        return (
                          (a = e.sent),
                          e.abrupt('return', a ? { deleted: a } : null)
                        );
                      case 4:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          account: N,
          accounts: L,
          login: A,
          logout: M,
          me: T,
        },
        K = a(51),
        W = a.n(K),
        z = {
          auth: F,
          keys: {
            list: Object(v.a)(
              O.a.mark(function e() {
                var t,
                  a,
                  n,
                  r,
                  c,
                  o,
                  i,
                  l = arguments;
                return O.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (t = l.length > 0 && void 0 !== l[0] ? l[0] : {}),
                          (a = t.page),
                          (n = t.perPage),
                          (r = t.search),
                          (c = t.isArchived),
                          (o = W.a.stringify(
                            {
                              page: a,
                              perPage: n,
                              search: r,
                              archived: c ? 1 : 0,
                            },
                            { addQueryPrefix: !0 },
                          )),
                          (e.next = 5),
                          R.fetchJson('{api}/entry/list'.concat(o), {
                            method: 'GET',
                          })
                        );
                      case 5:
                        return (i = e.sent), e.abrupt('return', i);
                      case 7:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            ),
            create: (function () {
              var e = Object(v.a)(
                O.a.mark(function e(t) {
                  var a;
                  return O.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            R.fetchJson('{api}/entry/create', {
                              method: 'POST',
                              body: JSON.stringify(t),
                            })
                          );
                        case 2:
                          return (a = e.sent), e.abrupt('return', { key: a });
                        case 4:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            remove: (function () {
              var e = Object(v.a)(
                O.a.mark(function e(t) {
                  var a;
                  return O.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            R.fetchJson(
                              '{api}/entry/'.concat(t.id.toString()),
                              { method: 'DELETE' },
                            )
                          );
                        case 2:
                          return (
                            (a = e.sent), e.abrupt('return', { deleted: a })
                          );
                        case 4:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            storage: (function () {
              var e = Object(v.a)(
                O.a.mark(function e(t) {
                  var a;
                  return O.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (a = W.a.stringify(t, { addQueryPrefix: !0 })),
                            (e.next = 3),
                            R.fetchJson('{api}/key/storage'.concat(a), {
                              method: 'GET',
                            })
                          );
                        case 3:
                          return e.abrupt('return', e.sent);
                        case 4:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            archive: (function () {
              var e = Object(v.a)(
                O.a.mark(function e(t) {
                  var a;
                  return O.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            R.fetchJson(
                              '{api}/entry/archive/'.concat(t.id.toString()),
                              { method: 'POST' },
                            )
                          );
                        case 2:
                          return (a = e.sent), e.abrupt('return', { entry: a });
                        case 4:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            restore: (function () {
              var e = Object(v.a)(
                O.a.mark(function e(t) {
                  var a;
                  return O.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            R.fetchJson(
                              '{api}/entry/restore/'.concat(t.id.toString()),
                              { method: 'POST' },
                            )
                          );
                        case 2:
                          return (a = e.sent), e.abrupt('return', { entry: a });
                        case 4:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            preview: (function () {
              var e = Object(v.a)(
                O.a.mark(function e(t) {
                  var a, n, r;
                  return O.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (a = t.id),
                            (n = t.isByEntry),
                            (r = n
                              ? '{api}/key/byEntry/'.concat(a.toString())
                              : '{api}/key/'.concat(a.toString())),
                            (e.next = 4),
                            R.fetchJson(r)
                          );
                        case 4:
                          return e.abrupt('return', e.sent);
                        case 5:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            byIds: (function () {
              var e = Object(v.a)(
                O.a.mark(function e(t) {
                  var a, n, r;
                  return O.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (a = t.ids),
                            (n = W.a.stringify(
                              { ids: a },
                              { addQueryPrefix: !0 },
                            )),
                            (e.next = 4),
                            R.fetchJson('{api}/entry/byIds'.concat(n), {
                              method: 'GET',
                            })
                          );
                        case 4:
                          return (r = e.sent), e.abrupt('return', r);
                        case 6:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
          },
          repos: {
            create: (function () {
              var e = Object(v.a)(
                O.a.mark(function e(t) {
                  var a;
                  return O.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            R.fetchJson('{api}/repo/create', {
                              method: 'POST',
                              body: JSON.stringify(t),
                            })
                          );
                        case 2:
                          return (
                            (a = e.sent),
                            e.abrupt('return', a ? { created: a } : null)
                          );
                        case 4:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            list: (function () {
              var e = Object(v.a)(
                O.a.mark(function e() {
                  var t,
                    a,
                    n,
                    r = arguments;
                  return O.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = r.length > 0 && void 0 !== r[0] ? r[0] : {}),
                            (a = W.a.stringify(t, { addQueryPrefix: !0 })),
                            (e.next = 4),
                            R.fetchJson('{api}/repo/list'.concat(a))
                          );
                        case 4:
                          return (n = e.sent), e.abrupt('return', n);
                        case 6:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            remove: (function () {
              var e = Object(v.a)(
                O.a.mark(function e(t) {
                  var a;
                  return O.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            R.fetchJson('{api}/repo/remove', {
                              method: 'DELETE',
                              body: JSON.stringify(t),
                            })
                          );
                        case 2:
                          return (
                            (a = e.sent),
                            e.abrupt('return', { deleted: a || [] })
                          );
                        case 4:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
          },
        },
        B = '/auth',
        H = '/auth/login',
        U = '/dashboard',
        J = '/dashboard/accounts',
        _ = '/dashboard/keys',
        q = '/dashboard/repos',
        G = '/dashboard/journal',
        V = '/dashboard/archive',
        Y = [
          {
            id: 1,
            path: _,
            name: 'keys',
            title: 'Active keys',
            icon: 'vpn_key',
            isAdminOnly: !1,
          },
          {
            id: 3,
            path: V,
            name: 'archive',
            title: 'Archived keys',
            icon: 'unarchive',
            isAdminOnly: !1,
          },
          {
            id: 2,
            path: q,
            name: 'repos',
            title: 'Repositories',
            icon: 'apps',
            isAdminOnly: !1,
          },
          {
            id: 4,
            path: G,
            name: 'storage',
            title: 'Storage',
            icon: 'inbox',
            isAdminOnly: !1,
          },
        ],
        D = {
          isUserAuthorized: !1,
          isAlreadyFetched: !1,
          isSessionExpired: !1,
          mainMenuLinks: [],
          errors: { loginForm: null },
        },
        Q = {
          setUserData: function (e, t) {
            var a = t.payload,
              n = a.token,
              r = a.account;
            return Object(j.a)(
              Object(j.a)({}, e),
              {},
              { token: n, account: r, isUserAuthorized: Boolean(n) },
            );
          },
          defineMenuLinks: function (e) {
            var t,
              a = Boolean(
                null === (t = e.account) || void 0 === t ? void 0 : t.isAdmin,
              ),
              n = Y.filter(function (e) {
                return a || !e.isAdminOnly;
              });
            return Object(j.a)(Object(j.a)({}, e), {}, { mainMenuLinks: n });
          },
          setSessionExpired: function (e, t) {
            return e.isUserAuthorized
              ? Object(j.a)(
                  Object(j.a)({}, e),
                  {},
                  { isSessionExpired: t.payload.isExpired },
                )
              : Object(j.a)(
                  Object(j.a)({}, e),
                  {},
                  { token: void 0, isUserAuthorized: !1 },
                );
          },
        },
        X = Object(E.a)(
          ''.concat('SESSION', '/REQ_LOGIN'),
          (function () {
            var e = Object(v.a)(
              O.a.mark(function e(t) {
                return O.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), z.auth.login(t);
                      case 2:
                        return e.abrupt('return', e.sent);
                      case 3:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        ),
        Z = Object(E.a)(
          ''.concat('SESSION', '/REQ_ME'),
          Object(v.a)(
            O.a.mark(function e() {
              return O.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), z.auth.me();
                    case 2:
                      return e.abrupt('return', e.sent);
                    case 3:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
          ),
        ),
        $ = Object(E.a)(
          ''.concat('SESSION', '/REQ_LOGOUT'),
          Object(v.a)(
            O.a.mark(function e() {
              return O.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), z.auth.logout();
                    case 2:
                      return e.abrupt('return', e.sent);
                    case 3:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
          ),
        ),
        ee = Object(E.b)({
          initialState: D,
          name: 'SESSION',
          reducers: Q,
          extraReducers: function (e) {
            [X, Z].forEach(function (t) {
              e.addCase(t.pending, function (e) {
                return Object(j.a)(
                  Object(j.a)({}, e),
                  {},
                  {
                    errors: Object(j.a)(
                      Object(j.a)({}, e.errors),
                      {},
                      { loginForm: null },
                    ),
                  },
                );
              }),
                e.addCase(t.fulfilled, function (e, t) {
                  var a = t.payload,
                    n = a.token,
                    r = a.account,
                    c = a.hosts;
                  return Object(j.a)(
                    Object(j.a)({}, e),
                    {},
                    {
                      token: n,
                      account: r,
                      isUserAuthorized: Boolean(n),
                      isSessionExpired: !1,
                      isAlreadyFetched: !0,
                      privateHost: c.private,
                      publicHost: c.public,
                    },
                  );
                }),
                e.addCase(t.rejected, function (e, t) {
                  var a,
                    n = t.error;
                  if (void 0 === n) return e;
                  var r = (
                    null === (a = n.message) || void 0 === a
                      ? void 0
                      : a.includes('No jwt presents')
                  )
                    ? {}
                    : {
                        loginForm:
                          '500' === n.code
                            ? 'Server error. Please, try again.'
                            : 'Wrong login/password pair.',
                      };
                  return Object(j.a)(
                    Object(j.a)({}, D),
                    {},
                    {
                      isAlreadyFetched: !0,
                      errors: Object(j.a)(Object(j.a)({}, e.errors), r),
                    },
                  );
                });
            }),
              e.addCase($.fulfilled, function (e) {
                return Object(j.a)(
                  Object(j.a)({}, e),
                  {},
                  { token: void 0, isUserAuthorized: !1 },
                );
              });
          },
        }),
        te = Object(j.a)(
          Object(j.a)({}, ee.actions),
          {},
          { fetchLoginUser: X, fetchLogout: $, fetchMe: Z },
        ),
        ae = ee.reducer,
        ne = Object(E.a)(
          ''.concat('ACCOUNTS', '/SUBMIT_ACCOUNT'),
          (function () {
            var e = Object(v.a)(
              O.a.mark(function e(t, a) {
                var n;
                return O.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), z.auth.account(t);
                      case 2:
                        return (n = e.sent), (e.next = 5), a.dispatch(ce());
                      case 5:
                        return e.abrupt('return', n);
                      case 6:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            );
            return function (t, a) {
              return e.apply(this, arguments);
            };
          })(),
        ),
        re = Object(E.a)(
          ''.concat('ACCOUNTS', '/REMOVE_ACCOUNTS'),
          (function () {
            var e = Object(v.a)(
              O.a.mark(function e(t, a) {
                var n;
                return O.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), z.auth.remove(t);
                      case 2:
                        return (n = e.sent), (e.next = 5), a.dispatch(ce());
                      case 5:
                        return e.abrupt('return', n);
                      case 6:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            );
            return function (t, a) {
              return e.apply(this, arguments);
            };
          })(),
        ),
        ce = Object(E.a)(
          ''.concat('ACCOUNTS', '/FETCH_LIST'),
          Object(v.a)(
            O.a.mark(function e() {
              var t;
              return O.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), z.auth.accounts();
                    case 2:
                      return (t = e.sent), e.abrupt('return', t);
                    case 4:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
          ),
        ),
        oe = Object(E.b)({
          initialState: {
            create: { error: null, loading: !1 },
            list: { error: null, loading: !1, accounts: [] },
          },
          name: 'ACCOUNTS',
          reducers: {
            test: function (e, t) {
              return e;
            },
          },
          extraReducers: function (e) {
            e.addCase(ne.fulfilled, function (e, t) {
              return null === t.payload
                ? Object(j.a)(
                    Object(j.a)({}, e),
                    {},
                    {
                      create: Object(j.a)(
                        Object(j.a)({}, e.create),
                        {},
                        { error: !0, loading: !1 },
                      ),
                    },
                  )
                : Object(j.a)(
                    Object(j.a)({}, e),
                    {},
                    { error: null, loading: !1 },
                  );
            }),
              e.addCase(ce.fulfilled, function (e, t) {
                if (null === t.payload)
                  return Object(j.a)(
                    Object(j.a)({}, e),
                    {},
                    {
                      list: Object(j.a)(
                        Object(j.a)({}, e.list),
                        {},
                        { error: !0, loading: !1, accounts: [] },
                      ),
                    },
                  );
                var a = t.payload.accounts;
                return Object(j.a)(
                  Object(j.a)({}, e),
                  {},
                  {
                    list: Object(j.a)(
                      Object(j.a)({}, e.list),
                      {},
                      { error: null, loading: !1, accounts: a },
                    ),
                  },
                );
              });
          },
        }),
        ie = Object(j.a)(
          Object(j.a)({}, oe.actions),
          {},
          {
            fetchCreateAccount: ne,
            fetchAccountsList: ce,
            fetchRemoveAccounts: re,
          },
        ),
        le = oe.reducer,
        ue = [4, 8, 16],
        se = {
          create: { error: null, loading: !1 },
          list: {
            initial: !0,
            error: null,
            loading: !1,
            items: [],
            pager: { page: 1, perPage: ue[0] },
            pagerOptions: ue,
          },
        },
        me = {
          resetState: function () {
            return se;
          },
          toggleEditModal: function (e, t) {
            var a = t.payload.isOpened;
            return Object(j.a)(
              Object(j.a)({}, e),
              {},
              { isEditModalOpened: a },
            );
          },
          changePager: function (e, t) {
            return Object(j.a)(
              Object(j.a)({}, e),
              {},
              {
                list: Object(j.a)(
                  Object(j.a)({}, e.list),
                  {},
                  {
                    pager: Object(j.a)(
                      Object(j.a)({}, e.list.pager),
                      t.payload,
                    ),
                  },
                ),
              },
            );
          },
          changeSearch: function (e, t) {
            return Object(j.a)(
              Object(j.a)({}, e),
              {},
              {
                list: Object(j.a)(
                  Object(j.a)({}, e.list),
                  {},
                  {
                    loading: t.payload.search !== e.list.search,
                    search: t.payload.search,
                  },
                ),
              },
            );
          },
        },
        de = Object(E.a)(
          ''.concat('REPOS', '/FETCH_LIST'),
          (function () {
            var e = Object(v.a)(
              O.a.mark(function e(t) {
                return O.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), z.repos.list(t);
                      case 2:
                        return e.abrupt('return', e.sent);
                      case 3:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        ),
        fe = Object(E.a)(
          ''.concat('REPOS', '/SUBMIT_REPO'),
          (function () {
            var e = Object(v.a)(
              O.a.mark(function e(t) {
                var a;
                return O.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), z.repos.create(t);
                      case 2:
                        return (a = e.sent), e.abrupt('return', a);
                      case 4:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        ),
        pe = Object(E.a)(
          ''.concat('REPOS', '/REMOVE_REPOS'),
          (function () {
            var e = Object(v.a)(
              O.a.mark(function e(t) {
                var a;
                return O.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), z.repos.remove(t);
                      case 2:
                        return (a = e.sent), e.abrupt('return', a);
                      case 4:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        ),
        be = Object(E.b)({
          initialState: se,
          name: 'REPOS',
          reducers: me,
          extraReducers: function (e) {
            e.addCase(fe.fulfilled, function (e, t) {
              return null === t.payload
                ? Object(j.a)(
                    Object(j.a)({}, e),
                    {},
                    {
                      create: Object(j.a)(
                        Object(j.a)({}, e.create),
                        {},
                        { error: !0, loading: !1 },
                      ),
                    },
                  )
                : Object(j.a)(
                    Object(j.a)({}, e),
                    {},
                    { error: null, loading: !1 },
                  );
            }),
              e.addCase(de.pending, function (e) {
                return Object(j.a)(
                  Object(j.a)({}, e),
                  {},
                  {
                    list: Object(j.a)(
                      Object(j.a)({}, e.list),
                      {},
                      { error: null, loading: !0 },
                    ),
                  },
                );
              }),
              e.addCase(de.fulfilled, function (e, t) {
                return Object(j.a)(
                  Object(j.a)({}, e),
                  {},
                  {
                    list: Object(j.a)(
                      Object(j.a)({}, e.list),
                      {},
                      {
                        initial: !1,
                        error: null,
                        loading: !1,
                        items: t.payload.items,
                        pager: t.payload.pager,
                      },
                    ),
                  },
                );
              });
          },
        }),
        he = Object(j.a)(
          Object(j.a)({}, be.actions),
          {},
          { fetchCreateRepo: fe, fetchListRepo: de, fetchRemoveRepos: pe },
        ),
        ge = be.reducer,
        Oe = {
          loading: !0,
          initial: !0,
          error: null,
          items: [],
          pager: { page: 1, perPage: 10 },
          pagerOptions: [10, 25, 50],
          filter: {},
        },
        ve = {
          resetState: function () {
            return Oe;
          },
          changePager: function (e, t) {
            return Object(j.a)(
              Object(j.a)({}, e),
              {},
              { pager: Object(j.a)(Object(j.a)({}, e.pager), t.payload) },
            );
          },
          changeFilter: function (e, t) {
            return Object(j.a)(
              Object(j.a)({}, e),
              {},
              {
                loading: t.payload.entryName !== e.filter.entryName,
                pager: Object(j.a)(Object(j.a)({}, e.pager), {}, { page: 1 }),
                filter: Object(j.a)(Object(j.a)({}, e.filter), t.payload),
              },
            );
          },
        },
        je = Object(E.a)(
          ''.concat('STORAGE', '/FETCH_STORAGE'),
          (function () {
            var e = Object(v.a)(
              O.a.mark(function e(t) {
                return O.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), z.keys.storage(t);
                      case 2:
                        return e.abrupt('return', e.sent);
                      case 3:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        ),
        Ee = Object(E.b)({
          initialState: Oe,
          name: 'STORAGE',
          reducers: ve,
          extraReducers: function (e) {
            e.addCase(je.pending, function (e) {
              return Object(j.a)(Object(j.a)({}, e), {}, { loading: !0 });
            }),
              e.addCase(je.fulfilled, function (e, t) {
                var a = t.payload,
                  n = a.items,
                  r = a.pager;
                return Object(j.a)(
                  Object(j.a)({}, e),
                  {},
                  { initial: !1, loading: !1, items: n, pager: r },
                );
              });
          },
        }),
        ye = Object(j.a)(
          Object(j.a)({}, Ee.actions),
          {},
          { fetchStorageItems: je },
        ),
        xe = Ee.reducer,
        ke = {
          initial: { keys: !0, archive: !0 },
          list: {
            loading: { keys: !0, archive: !0 },
            errors: { keys: null },
            items: [],
            pager: { page: 1, perPage: 4 },
            pagerOptions: ue,
          },
          edit: { isModalOpened: !1, loading: !1, error: null },
        },
        we = {
          changePager: function (e, t) {
            return Object(j.a)(
              Object(j.a)({}, e),
              {},
              {
                list: Object(j.a)(
                  Object(j.a)({}, e.list),
                  {},
                  {
                    pager: Object(j.a)(
                      Object(j.a)({}, e.list.pager),
                      t.payload,
                    ),
                  },
                ),
              },
            );
          },
          toggleEditModal: function (e, t) {
            return Object(j.a)(
              Object(j.a)({}, e),
              {},
              {
                edit: Object(j.a)(
                  Object(j.a)({}, e.edit),
                  {},
                  { isModalOpened: t.payload.isOpened },
                ),
              },
            );
          },
          changeSearch: function (e, t) {
            return Object(j.a)(
              Object(j.a)({}, e),
              {},
              {
                list: Object(j.a)(
                  Object(j.a)({}, e.list),
                  {},
                  {
                    loading: Object(j.a)(
                      Object(j.a)({}, e.list.loading),
                      {},
                      { keys: t.payload.search !== e.list.query },
                    ),
                    query: t.payload.search,
                    pager: Object(j.a)(
                      Object(j.a)({}, e.list.pager),
                      {},
                      { page: 1 },
                    ),
                  },
                ),
              },
            );
          },
          setInitialRouteParsing: function (e, t) {
            return Object(j.a)(
              Object(j.a)({}, e),
              {},
              { isRouteParsed: t.payload.isParsed },
            );
          },
          reset: function () {
            return ke;
          },
        },
        Se = Object(E.a)(
          ''.concat('KEYS', '/SUBMIT_KEY'),
          (function () {
            var e = Object(v.a)(
              O.a.mark(function e(t) {
                var a;
                return O.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), z.keys.create(t);
                      case 2:
                        return (a = e.sent), e.abrupt('return', a);
                      case 4:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        ),
        Ce = Object(E.a)(
          ''.concat('KEYS', '/FETCH_KEYS'),
          (function () {
            var e = Object(v.a)(
              O.a.mark(function e(t) {
                return O.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), z.keys.list(t);
                      case 2:
                        return e.abrupt('return', e.sent);
                      case 3:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        ),
        Pe = Object(E.a)(
          ''.concat('KEYS', '/REMOVE_KEY'),
          (function () {
            var e = Object(v.a)(
              O.a.mark(function e(t) {
                var a;
                return O.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), z.keys.remove(t);
                      case 2:
                        return (
                          (a = e.sent), e.abrupt('return', a || { deleted: [] })
                        );
                      case 4:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        ),
        Ie = Object(E.a)(
          ''.concat('KEYS', '/ARCHIVE_KEY'),
          (function () {
            var e = Object(v.a)(
              O.a.mark(function e(t) {
                return O.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), z.keys.archive(t);
                      case 2:
                        return e.abrupt('return', e.sent);
                      case 3:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        ),
        Re = Object(E.a)(
          ''.concat('KEYS', '/RESTORE_KEY'),
          (function () {
            var e = Object(v.a)(
              O.a.mark(function e(t) {
                return O.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), z.keys.restore(t);
                      case 2:
                        return e.abrupt('return', e.sent);
                      case 3:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        ),
        Ae = Object(E.b)({
          initialState: ke,
          name: 'KEYS',
          reducers: we,
          extraReducers: function (e) {
            e.addCase(Ce.pending, function (e) {
              return Object(j.a)(
                Object(j.a)({}, e),
                {},
                {
                  list: Object(j.a)(
                    Object(j.a)({}, e.list),
                    {},
                    {
                      loading: Object(j.a)(
                        Object(j.a)({}, e.list.loading),
                        {},
                        { keys: !0 },
                      ),
                    },
                  ),
                },
              );
            }),
              e.addCase(Ce.fulfilled, function (e, t) {
                var a = t.payload,
                  n = a.items,
                  r = a.pager,
                  c = t.meta.arg.isArchived ? 'archive' : 'keys';
                return Object(j.a)(
                  Object(j.a)({}, e),
                  {},
                  {
                    initial: Object(j.a)(
                      Object(j.a)({}, e.initial),
                      {},
                      Object(y.a)({}, c, !1),
                    ),
                    list: Object(j.a)(
                      Object(j.a)({}, e.list),
                      {},
                      {
                        items: n,
                        pager: r,
                        loading: Object(j.a)(
                          Object(j.a)({}, e.list.loading),
                          {},
                          { keys: !1 },
                        ),
                      },
                    ),
                  },
                );
              }),
              e.addCase(Pe.fulfilled, function (e, t) {
                var a = t.meta.arg.id,
                  n = e.list.pager.totalItems;
                return Object(j.a)(
                  Object(j.a)({}, e),
                  {},
                  {
                    list: Object(j.a)(
                      Object(j.a)({}, e.list),
                      {},
                      {
                        items: e.list.items.filter(function (e) {
                          return a !== e.id;
                        }),
                        pager: Object(j.a)(
                          Object(j.a)({}, e.list.pager),
                          {},
                          { totalItems: n ? n - 1 : void 0 },
                        ),
                      },
                    ),
                  },
                );
              }),
              e.addCase(Ie.fulfilled, function (e) {
                var t = e.list.pager.totalItems;
                return Object(j.a)(
                  Object(j.a)({}, e),
                  {},
                  {
                    list: Object(j.a)(
                      Object(j.a)({}, e.list),
                      {},
                      {
                        pager: Object(j.a)(
                          Object(j.a)({}, e.list.pager),
                          {},
                          { totalItems: t ? t - 1 : void 0 },
                        ),
                      },
                    ),
                  },
                );
              }),
              e.addCase(Re.fulfilled, function (e) {
                var t = e.list.pager.totalItems;
                return Object(j.a)(
                  Object(j.a)({}, e),
                  {},
                  {
                    list: Object(j.a)(
                      Object(j.a)({}, e.list),
                      {},
                      {
                        pager: Object(j.a)(
                          Object(j.a)({}, e.list.pager),
                          {},
                          { totalItems: t ? t - 1 : void 0 },
                        ),
                      },
                    ),
                  },
                );
              }),
              e.addCase(Se.fulfilled, function (e, t) {
                var a = e.list.pager.totalItems;
                return Object(j.a)(
                  Object(j.a)({}, e),
                  {},
                  {
                    list: Object(j.a)(
                      Object(j.a)({}, e.list),
                      {},
                      {
                        pager: Object(j.a)(
                          Object(j.a)({}, e.list.pager),
                          {},
                          { totalItems: a ? a + 1 : void 0 },
                        ),
                      },
                    ),
                    edit: Object(j.a)(
                      Object(j.a)({}, e.edit),
                      {},
                      { error: null, loading: !1, item: t.payload.key },
                    ),
                  },
                );
              });
          },
        }),
        Me = Object(j.a)(
          Object(j.a)({}, Ae.actions),
          {},
          {
            fetchKeysList: Ce,
            fetchRemoveKeyItem: Pe,
            fetchArchiveKeyItem: Ie,
            fetchRestoreKeyItem: Re,
            fetchCreateKey: Se,
          },
        ),
        Te = Ae.reducer,
        Ne = {
          toggleModal: function (e, t) {
            var a = t.payload.isOpen;
            return Object(j.a)(
              Object(j.a)({}, e),
              {},
              {
                modal: Object(j.a)(
                  Object(j.a)({}, e.modal),
                  {},
                  { isOpen: void 0 === a ? !e.modal.isOpen : a },
                ),
              },
            );
          },
          setParams: function (e, t) {
            return Object(j.a)(
              Object(j.a)({}, e),
              {},
              { params: Object(j.a)(Object(j.a)({}, e.params), t.payload) },
            );
          },
        },
        Le = Object(E.a)(
          ''.concat('KEY_PREVIEW', '/FETCH_KEY'),
          (function () {
            var e = Object(v.a)(
              O.a.mark(function e(t, a) {
                var n;
                return O.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), z.keys.preview(t);
                      case 2:
                        return (n = e.sent), e.abrupt('return', n);
                      case 4:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            );
            return function (t, a) {
              return e.apply(this, arguments);
            };
          })(),
        ),
        Fe = Object(E.b)({
          initialState: {
            availFormats: [
              { id: 'jwk', label: 'JWK' },
              { id: 'pem', label: 'PEM' },
            ],
            availPrivacy: [
              { id: 'private', label: 'PRIVATE' },
              { id: 'public', label: 'PUBLIC' },
            ],
            params: {},
            modal: {},
            details: { error: null, loading: !1 },
          },
          name: 'KEY_PREVIEW',
          reducers: Ne,
          extraReducers: function (e) {
            e.addCase(Le.fulfilled, function (e, t) {
              return Object(j.a)(
                Object(j.a)({}, e),
                {},
                {
                  details: Object(j.a)(
                    Object(j.a)({}, e.details),
                    {},
                    { error: null, loading: !1, data: t.payload },
                  ),
                },
              );
            });
          },
        }),
        Ke = Object(j.a)(
          Object(j.a)({}, Fe.actions),
          {},
          { fetchKeyPreview: Le },
        ),
        We = {
          session: ae,
          keys: Te,
          accounts: le,
          repos: ge,
          storage: xe,
          keyPreview: Fe.reducer,
        },
        ze = Object(f.combineReducers)(We),
        Be = a(26),
        He = O.a.mark(Je),
        Ue = O.a.mark(_e);
      function Je() {
        return O.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(Be.a)(_e);
              case 2:
              case 'end':
                return e.stop();
            }
        }, He);
      }
      function _e() {
        return O.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2),
                  Object(Be.d)(
                    [te.fetchLoginUser.fulfilled, te.fetchMe.fulfilled],
                    O.a.mark(function e() {
                      return O.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2), Object(Be.b)(te.defineMenuLinks())
                              );
                            case 2:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    }),
                  )
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, Ue);
      }
      var qe = a(14),
        Ge = function (e) {
          return e.keys;
        },
        Ve =
          (Object(qe.createSelector)(Ge, function (e) {
            return e.list.items;
          }),
          Object(qe.createSelector)(Ge, function (e) {
            return e.list;
          })),
        Ye = Object(qe.createSelector)(Ge, function (e) {
          return e.list.pager;
        }),
        De = Object(qe.createSelector)(Ge, function (e) {
          return e.list.query;
        }),
        Qe = Object(qe.createSelector)(Ge, function (e) {
          return e.initial;
        }),
        Xe = Object(qe.createSelector)(Ge, function (e) {
          return e.isRouteParsed;
        }),
        Ze = Object(qe.createSelector)(Ge, function (e) {
          return e.edit.isModalOpened;
        }),
        $e = Object(qe.createSelector)(Ge, function (e) {
          return e.list.pagerOptions;
        }),
        et = Object(qe.createSelector)(De, Ve, function (e, t) {
          return (
            (!e || 0 === e.length) && !t.loading.keys && 0 === t.items.length
          );
        }),
        tt = Object(qe.createSelector)(Ve, function (e) {
          return {
            loading: e.loading.keys,
            error: e.errors.keys,
            data: { items: e.items },
            pager: e.pager,
          };
        }),
        at = O.a.mark(rt),
        nt = O.a.mark(ct);
      function rt() {
        return O.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(Be.a)(ct);
              case 2:
              case 'end':
                return e.stop();
            }
        }, at);
      }
      function ct() {
        return O.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2),
                  Object(Be.d)(
                    [
                      Me.fetchCreateKey.fulfilled,
                      Me.fetchRemoveKeyItem.fulfilled,
                      Me.fetchArchiveKeyItem.fulfilled,
                      Me.fetchRestoreKeyItem.fulfilled,
                    ],
                    O.a.mark(function e(t) {
                      var a, n, r, c;
                      return O.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), Object(Be.c)(Ye);
                            case 2:
                              if (
                                ((a = e.sent),
                                (n = [
                                  Me.fetchRestoreKeyItem.fulfilled.toString(),
                                  Me.fetchRemoveKeyItem.fulfilled.toString(),
                                ].includes(t.type)),
                                (r = {
                                  page: a.page,
                                  perPage: a.perPage,
                                  isArchived: n,
                                }),
                                !a.totalItems)
                              ) {
                                e.next = 16;
                                break;
                              }
                              if (
                                !(
                                  (c = Math.max(
                                    Math.ceil(a.totalItems / a.perPage),
                                    1,
                                  )) < a.page
                                )
                              ) {
                                e.next = 12;
                                break;
                              }
                              return (
                                (e.next = 10),
                                Object(Be.b)(Me.changePager({ page: c }))
                              );
                            case 10:
                              e.next = 14;
                              break;
                            case 12:
                              return (
                                (e.next = 14), Object(Be.b)(Me.fetchKeysList(r))
                              );
                            case 14:
                              e.next = 18;
                              break;
                            case 16:
                              return (
                                (e.next = 18), Object(Be.b)(Me.fetchKeysList(r))
                              );
                            case 18:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    }),
                  )
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, nt);
      }
      var ot = function (e) {
          return e.repos;
        },
        it =
          (Object(qe.createSelector)(ot, function (e) {
            return e.create;
          }),
          Object(qe.createSelector)(ot, function (e) {
            return e.list;
          })),
        lt = Object(qe.createSelector)(it, function (e) {
          return e.pager;
        }),
        ut = Object(qe.createSelector)(it, function (e) {
          return e.search;
        }),
        st =
          (Object(qe.createSelector)(it, function (e) {
            return e.pagerOptions;
          }),
          Object(qe.createSelector)(it, function (e) {
            return e.initial;
          })),
        mt = Object(qe.createSelector)(ot, function (e) {
          return Boolean(e.isEditModalOpened);
        }),
        dt = Object(qe.createSelector)(it, function (e) {
          var t = e.search,
            a = e.loading,
            n = e.items;
          return (!t || 0 === t.length) && !a && 0 === n.length;
        }),
        ft = O.a.mark(bt),
        pt = O.a.mark(ht);
      function bt() {
        return O.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(Be.a)(ht);
              case 2:
              case 'end':
                return e.stop();
            }
        }, ft);
      }
      function ht() {
        return O.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2),
                  Object(Be.d)(
                    [
                      he.fetchCreateRepo.fulfilled,
                      he.fetchRemoveRepos.fulfilled,
                    ],
                    O.a.mark(function e(t) {
                      var a, n, r, c, o;
                      return O.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), Object(Be.c)(lt);
                            case 2:
                              return (
                                (a = e.sent), (e.next = 5), Object(Be.c)(ut)
                              );
                            case 5:
                              if (
                                ((n = e.sent),
                                (r =
                                  t.type ===
                                  he.fetchCreateRepo.fulfilled.toString()),
                                (c = {
                                  page: a.page,
                                  perPage: a.perPage,
                                  search: n,
                                }),
                                !r || !a.totalItems)
                              ) {
                                e.next = 14;
                                break;
                              }
                              return (
                                (o = Math.ceil(a.totalItems + 1 / a.perPage)),
                                (e.next = 12),
                                Object(Be.b)(he.changePager({ page: o }))
                              );
                            case 12:
                              e.next = 16;
                              break;
                            case 14:
                              return (
                                (e.next = 16), Object(Be.b)(he.fetchListRepo(c))
                              );
                            case 16:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    }),
                  )
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, pt);
      }
      var gt = O.a.mark(Ot);
      function Ot() {
        return O.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(Be.a)(Je);
              case 2:
                return (e.next = 4), Object(Be.a)(rt);
              case 4:
                return (e.next = 6), Object(Be.a)(bt);
              case 6:
              case 'end':
                return e.stop();
            }
        }, gt);
      }
      var vt = (function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = Object(b.a)(),
            a = [h.a, t],
            n = f.applyMiddleware.apply(void 0, a),
            r = Object(f.createStore)(ze, e, Object(p.composeWithDevTools)(n));
          return t.run(Ot), r;
        })(),
        jt = function () {
          return Object(i.b)();
        },
        Et = a(313),
        yt = a(13),
        xt = '#FFFFFF',
        kt = {
          black: '#000000',
          white: xt,
          primary: {
            contrastText: xt,
            dark: yt.a.indigo[900],
            main: yt.a.indigo[500],
            light: yt.a.indigo[100],
          },
          secondary: {
            contrastText: xt,
            dark: yt.a.blue[900],
            main: yt.a.blue.A400,
            light: yt.a.blue.A400,
          },
          error: {
            contrastText: xt,
            dark: yt.a.red[900],
            main: yt.a.red[600],
            light: yt.a.red[400],
          },
          text: {
            primary: yt.a.blueGrey[900],
            secondary: yt.a.blueGrey[600],
            link: yt.a.blue[600],
          },
          link: yt.a.blue[800],
          icon: yt.a.blueGrey[600],
          background: { default: '#F4F6F8', paper: xt },
          divider: yt.a.grey[200],
        },
        wt = function (e) {
          return {
            h1: {
              color: e.text.primary,
              fontWeight: 500,
              fontSize: '35px',
              letterSpacing: '-0.24px',
              lineHeight: '40px',
            },
            h2: {
              color: e.text.primary,
              fontWeight: 500,
              fontSize: '29px',
              letterSpacing: '-0.24px',
              lineHeight: '32px',
            },
            h3: {
              color: e.text.primary,
              fontWeight: 500,
              fontSize: '24px',
              letterSpacing: '-0.06px',
              lineHeight: '28px',
            },
            h4: {
              color: e.text.primary,
              fontWeight: 500,
              fontSize: '20px',
              letterSpacing: '-0.06px',
              lineHeight: '24px',
            },
            h5: {
              color: e.text.primary,
              fontWeight: 500,
              fontSize: '16px',
              letterSpacing: '-0.05px',
              lineHeight: '20px',
            },
            h6: {
              color: e.text.primary,
              fontWeight: 500,
              fontSize: '14px',
              letterSpacing: '-0.05px',
              lineHeight: '20px',
            },
            subtitle1: {
              color: e.text.primary,
              fontSize: '16px',
              letterSpacing: '-0.05px',
              lineHeight: '25px',
            },
            subtitle2: {
              color: e.text.secondary,
              fontWeight: 400,
              fontSize: '14px',
              letterSpacing: '-0.05px',
              lineHeight: '21px',
            },
            body1: {
              color: e.text.primary,
              fontSize: '14px',
              letterSpacing: '-0.05px',
              lineHeight: '21px',
            },
            body2: {
              color: e.text.secondary,
              fontSize: '12px',
              letterSpacing: '-0.04px',
              lineHeight: '18px',
            },
            button: { color: e.text.primary, fontSize: '14px' },
            caption: {
              color: e.text.secondary,
              fontSize: '11px',
              letterSpacing: '0.33px',
              lineHeight: '13px',
            },
            overline: {
              color: e.text.secondary,
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.33px',
              lineHeight: '13px',
              textTransform: 'uppercase',
            },
          };
        },
        St = {
          MuiTableHead: { root: { backgroundColor: yt.a.grey[50] } },
          MuiTableCell: {
            root: { fontSize: 14 },
            body: { borderBottom: '1px solid '.concat(yt.a.grey[200]) },
            head: {
              paddingTop: 10,
              paddingBottom: 10,
              borderBottom: '1px solid '.concat(yt.a.grey[200]),
              color: yt.a.blueGrey[500],
            },
          },
          MuiCardHeader: {
            root: { borderBottom: '1px solid '.concat(yt.a.grey[200]) },
            action: { marginRight: 0, marginTop: 0 },
          },
        },
        Ct = Object(Et.a)({ palette: kt, typography: wt, overrides: St }),
        Pt = a(396),
        It = a(398),
        Rt = a(50),
        At = a(399),
        Mt = function (e) {
          return e.session;
        },
        Tt = Object(qe.createSelector)(Mt, function (e) {
          return e.isUserAuthorized;
        }),
        Nt = Object(qe.createSelector)(Mt, function (e) {
          return e.isAlreadyFetched;
        }),
        Lt = Object(qe.createSelector)(Mt, function (e) {
          return e.isSessionExpired;
        }),
        Ft = Object(qe.createSelector)(Mt, function (e) {
          return e.account;
        }),
        Kt =
          (Object(qe.createSelector)(Mt, function (e) {
            return e.host;
          }),
          Object(qe.createSelector)(Mt, function (e) {
            return e.mainMenuLinks;
          })),
        Wt = Object(qe.createSelector)(Mt, function (e) {
          return e.errors;
        }),
        zt =
          (Object(qe.createSelector)(Mt, function (e) {
            return e.token || null;
          }),
          Object(qe.createSelector)(Mt, function (e) {
            return e.token || null;
          })),
        Bt = Object(qe.createSelector)(Mt, function (e) {
          return e.privateHost;
        }),
        Ht = Object(qe.createSelector)(Mt, function (e) {
          return e.publicHost ? e.publicHost : e.privateHost;
        }),
        Ut = a(22),
        Jt = a(24);
      function _t() {
        var e = Object(Ut.a)(['\n  flex-grow: 1;\n']);
        return (
          (_t = function () {
            return e;
          }),
          e
        );
      }
      var qt = Jt.a.div(_t()),
        Gt = function () {
          var e = jt();
          return {
            logout: Object(n.useCallback)(
              function () {
                return e(te.fetchLogout());
              },
              [e],
            ),
            fetchMe: Object(n.useCallback)(
              function () {
                return e(te.fetchMe());
              },
              [e],
            ),
            fetchLoginUser: Object(n.useCallback)(
              function (t) {
                return e(te.fetchLoginUser(t));
              },
              [e],
            ),
          };
        },
        Vt = function () {
          return { logout: Gt().logout };
        },
        Yt = function () {
          var e = Object(i.c)(Ft),
            t = Vt().logout,
            a = void 0 !== e;
          return r.a.createElement(
            Pt.a,
            { position: 'static' },
            r.a.createElement(
              It.a,
              null,
              r.a.createElement(
                Rt.a,
                { variant: 'h4', color: 'inherit' },
                'Orkeystore',
              ),
              r.a.createElement(qt, null),
              a &&
                r.a.createElement(
                  At.a,
                  { color: 'inherit', onClick: t },
                  'Logout',
                ),
            ),
          );
        };
      function Dt() {
        var e = Object(Ut.a)([
          '\n  flex-grow: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n',
        ]);
        return (
          (Dt = function () {
            return e;
          }),
          e
        );
      }
      function Qt() {
        var e = Object(Ut.a)(['\n']);
        return (
          (Qt = function () {
            return e;
          }),
          e
        );
      }
      function Xt() {
        var e = Object(Ut.a)([
          '\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n',
        ]);
        return (
          (Xt = function () {
            return e;
          }),
          e
        );
      }
      var Zt = Jt.a.div(Xt()),
        $t = Jt.a.div(Qt()),
        ea = Jt.a.div(Dt()),
        ta = a(25),
        aa = a(301),
        na = a.n(aa),
        ra = a(107),
        ca = a(440);
      function oa() {
        var e = Object(Ut.a)([
          '\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n',
        ]);
        return (
          (oa = function () {
            return e;
          }),
          e
        );
      }
      function ia() {
        var e = Object(Ut.a)([
          '\n  padding-left: 15px;\n  padding-top: 2px;\n',
        ]);
        return (
          (ia = function () {
            return e;
          }),
          e
        );
      }
      function la() {
        var e = Object(Ut.a)([
          '\n  padding: 10px;\n  flex-grow: 1;\n  background-color: ',
          ';\n  color: ',
          ';\n',
        ]);
        return (
          (la = function () {
            return e;
          }),
          e
        );
      }
      var ua = Object(Jt.a)(ra.a)(
          la(),
          Ct.palette.error.light,
          Ct.palette.error.contrastText,
        ),
        sa = Object(Jt.a)(Rt.a)(ia()),
        ma = Object(Jt.a)(ca.a)(oa()),
        da = function (e) {
          return r.a.createElement(
            ua,
            Object.assign({ elevation: e.elevation }, e.root),
            r.a.createElement(
              ma,
              null,
              r.a.createElement(na.a, { color: 'inherit' }),
              r.a.createElement(sa, { color: 'inherit' }, e.children),
            ),
          );
        };
      da.defaultProps = { elevation: 0, severnity: 'error' };
      var fa = da;
      function pa() {
        var e = Object(Ut.a)(['\n  width: 100%;\n']);
        return (
          (pa = function () {
            return e;
          }),
          e
        );
      }
      function ba() {
        var e = Object(Ut.a)([
          '\n  flex-grow: 1;\n  margin-bottom: 10px;\n  &:last-child {\n    margin-bottom: 0;\n  }\n',
        ]);
        return (
          (ba = function () {
            return e;
          }),
          e
        );
      }
      function ha() {
        var e = Object(Ut.a)([
          '\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n  &:last-child {\n    margin-bottom: 0;\n  }\n',
        ]);
        return (
          (ha = function () {
            return e;
          }),
          e
        );
      }
      function ga() {
        var e = Object(Ut.a)(['']);
        return (
          (ga = function () {
            return e;
          }),
          e
        );
      }
      function Oa() {
        var e = Object(Ut.a)(['\n  margin-bottom: 20px;\n']);
        return (
          (Oa = function () {
            return e;
          }),
          e
        );
      }
      function va() {
        var e = Object(Ut.a)(['\n  width: 300px;\n']);
        return (
          (va = function () {
            return e;
          }),
          e
        );
      }
      var ja = Jt.a.div(va()),
        Ea = (Jt.a.div(Oa()), Jt.a.div(ga())),
        ya = Jt.a.div(ha()),
        xa = Jt.a.div(ba()),
        ka = Object(Jt.a)(At.a)(pa()),
        wa = a(401),
        Sa = a(402),
        Ca = a(403),
        Pa = a(404),
        Ia = { username: '', password: '' },
        Ra = function () {
          var e = Gt().fetchLoginUser,
            t = Object(n.useCallback)(
              (function () {
                var t = Object(v.a)(
                  O.a.mark(function t(a) {
                    return O.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), e(a);
                          case 2:
                          case 'end':
                            return t.stop();
                        }
                    }, t);
                  }),
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
              [e],
            );
          return {
            validate: Object(n.useCallback)(function (e) {
              var t = e.username,
                a = e.password,
                n = {};
              return (
                (t && 0 !== t.length) || (n.username = 'Username required'),
                (a && 0 !== a.length) || (n.password = 'Password required'),
                n
              );
            }, []),
            handleSubmit: t,
          };
        },
        Aa = function () {
          var e = Object(i.c)(Wt),
            t = Ra(),
            a = t.handleSubmit,
            n = t.validate;
          return r.a.createElement(
            wa.a,
            null,
            r.a.createElement(Sa.a, {
              title: r.a.createElement(Rt.a, { variant: 'h3' }, 'Sign in'),
            }),
            r.a.createElement(
              Ca.a,
              null,
              r.a.createElement(
                ja,
                null,
                r.a.createElement(
                  Ea,
                  null,
                  r.a.createElement(
                    ta.c,
                    { initialValues: Ia, validate: n, onSubmit: a },
                    function (t) {
                      return r.a.createElement(
                        ta.b,
                        null,
                        r.a.createElement(
                          ya,
                          null,
                          r.a.createElement(
                            ta.a,
                            { name: 'username' },
                            function (e) {
                              var t = e.field,
                                a = e.meta;
                              return r.a.createElement(
                                Pa.a,
                                Object.assign(
                                  {
                                    error: Boolean(a.touched && a.error),
                                    label: 'Login',
                                    variant: 'outlined',
                                    autoComplete: 'current-login',
                                  },
                                  t,
                                ),
                              );
                            },
                          ),
                        ),
                        r.a.createElement(
                          ya,
                          null,
                          r.a.createElement(
                            ta.a,
                            { name: 'password' },
                            function (e) {
                              var t = e.field,
                                a = e.meta;
                              return r.a.createElement(
                                Pa.a,
                                Object.assign(
                                  {
                                    label: 'Password',
                                    variant: 'outlined',
                                    type: 'password',
                                    autoComplete: 'current-password',
                                    error: Boolean(a.touched && a.error),
                                  },
                                  t,
                                ),
                              );
                            },
                          ),
                        ),
                        e.loginForm &&
                          r.a.createElement(
                            ya,
                            null,
                            r.a.createElement(fa, null, e.loginForm),
                          ),
                        r.a.createElement(
                          ya,
                          null,
                          r.a.createElement(
                            xa,
                            null,
                            r.a.createElement(
                              ka,
                              {
                                color: 'secondary',
                                size: 'large',
                                type: 'submit',
                                variant: 'contained',
                              },
                              '\u0412\u043e\u0439\u0442\u0438',
                            ),
                          ),
                        ),
                      );
                    },
                  ),
                ),
              ),
            ),
          );
        },
        Ma = function () {
          return r.a.createElement(
            Zt,
            null,
            r.a.createElement($t, null, r.a.createElement(Yt, null)),
            r.a.createElement(ea, null, r.a.createElement(Aa, null)),
          );
        },
        Ta = a(406),
        Na = function () {
          var e = Object(i.c)(Lt);
          return r.a.createElement(
            Ta.a,
            { open: e },
            r.a.createElement(Aa, null),
          );
        },
        La = a(380),
        Fa = a(383),
        Ka = a(407),
        Wa = a(409),
        za = a(410),
        Ba = a(408),
        Ha = Object(za.a)(function () {
          return { iconWrap: { maxWidth: 40, minWidth: 40 } };
        }),
        Ua = function () {
          var e = Object(s.f)(),
            t = Object(i.c)(Kt),
            a = Ha(),
            n = Object(s.g)();
          return r.a.createElement(
            La.a,
            { component: 'nav' },
            t.map(function (t) {
              var c = t.path === n.pathname,
                o = c ? 'primary' : 'action';
              return r.a.createElement(
                Fa.a,
                {
                  key: t.id,
                  button: !0,
                  onClick: c
                    ? void 0
                    : function () {
                        return e.push(t.path);
                      },
                },
                r.a.createElement(
                  Ka.a,
                  { className: a.iconWrap },
                  r.a.createElement(Ba.a, { color: o }, t.icon),
                ),
                r.a.createElement(
                  Wa.a,
                  {
                    primaryTypographyProps: {
                      color: c ? 'primary' : 'initial',
                    },
                  },
                  t.title,
                ),
              );
            }),
          );
        };
      function Ja() {
        var e = Object(Ut.a)(['']);
        return (
          (Ja = function () {
            return e;
          }),
          e
        );
      }
      function _a() {
        var e = Object(Ut.a)([
          '\n  position: relative;\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n',
        ]);
        return (
          (_a = function () {
            return e;
          }),
          e
        );
      }
      function qa() {
        var e = Object(Ut.a)([
          '\n  display: flex;\n  flex-direction: column;\n  background-color: ',
          ';\n  flex: 1 1 auto;\n  min-width: 0;\n',
        ]);
        return (
          (qa = function () {
            return e;
          }),
          e
        );
      }
      function Ga() {
        var e = Object(Ut.a)([
          '\n  flex: 0 0 250px;\n  background-color: ',
          ';\n',
        ]);
        return (
          (Ga = function () {
            return e;
          }),
          e
        );
      }
      function Va() {
        var e = Object(Ut.a)([
          '\n  flex: 1 1 auto;\n  display: flex;\n  min-width: 0;\n',
        ]);
        return (
          (Va = function () {
            return e;
          }),
          e
        );
      }
      function Ya() {
        var e = Object(Ut.a)(['']);
        return (
          (Ya = function () {
            return e;
          }),
          e
        );
      }
      function Da() {
        var e = Object(Ut.a)([
          '\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n',
        ]);
        return (
          (Da = function () {
            return e;
          }),
          e
        );
      }
      var Qa = Jt.a.div(Da()),
        Xa = Jt.a.div(Ya()),
        Za = Jt.a.div(Va()),
        $a = Jt.a.div(Ga(), Ct.palette.background.paper),
        en = Jt.a.main(qa(), Ct.palette.background.default),
        tn = Jt.a.div(_a()),
        an = Jt.a.div(Ja()),
        nn = function (e) {
          var t = e.route;
          return r.a.createElement(
            Qa,
            null,
            r.a.createElement(Na, null),
            r.a.createElement(Xa, null, r.a.createElement(Yt, null)),
            r.a.createElement(
              Za,
              null,
              r.a.createElement($a, null, r.a.createElement(Ua, null)),
              r.a.createElement(
                en,
                null,
                r.a.createElement(
                  tn,
                  null,
                  t && t.routes && Object(u.a)(t.routes),
                ),
                r.a.createElement(
                  an,
                  null,
                  r.a.createElement('div', { id: 'layout_dashboard_footer' }),
                ),
              ),
            ),
          );
        },
        rn = a(418),
        cn = a(426),
        on = a(427),
        ln = a(57),
        un = a.n(ln),
        sn = a(437),
        mn = a(436),
        dn = function (e) {
          for (
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
              a = '',
              n = 0,
              r = t.length;
            n < e;
            ++n
          )
            a += t.charAt(Math.floor(Math.random() * r));
          return a;
        },
        fn = function () {
          var e = jt(),
            t = Object(i.c)(Ye),
            a = Object(i.c)(De),
            r = Object(i.c)(zt),
            c = Object(i.c)(Xe),
            o = Object(i.c)(Ze),
            l = Object(s.f)(),
            u = Object(s.g)(),
            m = Object(n.useCallback)(
              function (t) {
                return e(Me.fetchKeysList(t));
              },
              [e, r],
            ),
            d = Object(n.useCallback)(
              function (t) {
                return e(Me.toggleEditModal(t));
              },
              [e],
            ),
            f = Object(n.useCallback)(
              function (t) {
                return e(Me.setInitialRouteParsing(t));
              },
              [e],
            ),
            p = Object(n.useCallback)(
              function () {
                var e = { page: t.page, perPage: t.perPage, search: a };
                return m(e);
              },
              [m, t.page, t.perPage, a],
            ),
            b = Object(n.useCallback)(
              function () {
                var e = {
                  page: t.page,
                  perPage: t.perPage,
                  search: a,
                  isArchived: !0,
                };
                return m(e);
              },
              [m, t.page, t.perPage, a],
            ),
            h = Object(n.useCallback)(
              (function () {
                var t = Object(v.a)(
                  O.a.mark(function t(a) {
                    var n, r, c;
                    return O.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (n = dn(64)),
                              (t.next = 3),
                              e(
                                Me.fetchCreateKey(
                                  Object(j.a)(
                                    Object(j.a)({}, a),
                                    {},
                                    { accessToken: n },
                                  ),
                                ),
                              )
                            );
                          case 3:
                            if (((r = t.sent), !(c = r.error))) {
                              t.next = 7;
                              break;
                            }
                            return t.abrupt('return', { error: c });
                          case 7:
                            return t.abrupt('return', r);
                          case 8:
                          case 'end':
                            return t.stop();
                        }
                    }, t);
                  }),
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
              [e],
            ),
            g = Object(n.useCallback)(
              (function () {
                var t = Object(v.a)(
                  O.a.mark(function t(a) {
                    return O.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), e(Me.fetchRemoveKeyItem(a));
                          case 2:
                            return t.abrupt('return', t.sent);
                          case 3:
                          case 'end':
                            return t.stop();
                        }
                    }, t);
                  }),
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
              [e],
            ),
            E = Object(n.useCallback)(
              function (t) {
                return e(Me.fetchArchiveKeyItem(t));
              },
              [e],
            ),
            x = Object(n.useCallback)(
              function (t) {
                return e(Me.fetchRestoreKeyItem(t));
              },
              [e],
            ),
            k = Object(n.useCallback)(
              function (t) {
                return e(Me.changePager(t));
              },
              [e],
            ),
            w = Object(n.useCallback)(
              function (t) {
                return e(Me.changeSearch(t));
              },
              [e],
            ),
            S = Object(n.useCallback)(
              (function () {
                var e = Object(v.a)(
                  O.a.mark(function e(t) {
                    return O.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return e.abrupt('return', z.keys.list(t));
                          case 1:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
              [],
            ),
            C = Object(n.useCallback)(
              (function () {
                var e = Object(v.a)(
                  O.a.mark(function e(t) {
                    return O.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), z.keys.byIds(t);
                          case 2:
                            return e.abrupt('return', e.sent);
                          case 3:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
              [],
            ),
            P = Object(n.useCallback)(
              function () {
                return e(Me.reset());
              },
              [e],
            );
          return {
            routeParser: Object(n.useCallback)(function () {
              var e = W.a.parse(u.search, { ignoreQueryPrefix: !0 });
              ['page', 'perPage'].forEach(function (t) {
                var a = e[t];
                if (void 0 !== a) {
                  var n = parseInt(a.toString());
                  isNaN(n) || k(Object(y.a)({}, t, n));
                }
              }),
                e.search &&
                  'string' === typeof e.search &&
                  w({ search: e.search }),
                e.newEntry && d({ isOpened: !0 }),
                f({ isParsed: !0 });
            }, []),
            routeWatcher: Object(n.useCallback)(
              function () {
                var e = ke.list.pager.page,
                  n = ke.list.pager.perPage,
                  r = W.a.stringify(
                    {
                      page: t.page === e ? void 0 : t.page,
                      perPage: t.perPage === n ? void 0 : t.perPage,
                      search: void 0 === a || 0 === a.length ? void 0 : a,
                      newEntry: o ? '1' : void 0,
                    },
                    { addQueryPrefix: !0 },
                  );
                c && l.push({ search: r });
              },
              [l, t.page, t.perPage, a, c, o],
            ),
            resetList: P,
            changePager: k,
            changeSearch: w,
            fetchKeysList: m,
            fetchKeysListWatch: p,
            fetchArchiveListWatch: b,
            fetchCreateKey: h,
            fetchRemoveKeyItem: g,
            fetchRestoreKeyItem: x,
            fetchArchiveKeyItem: E,
            requestKeysList: S,
            requestKeysByIds: C,
            toggleEditModal: d,
          };
        },
        pn = a(65),
        bn = a.n(pn),
        hn = a(420),
        gn = a(441),
        On = a(422),
        vn = a(423),
        jn = a(424),
        En = a(188),
        yn = a.n(En),
        xn = a(307),
        kn = a.n(xn),
        wn = a(412),
        Sn = a(386),
        Cn = a(192),
        Pn = a(305),
        In = a.n(Pn),
        Rn = a(30),
        An = a(411),
        Mn = a(304),
        Tn = a.n(Mn),
        Nn = function (e) {
          var t = Object(n.useState)(!1),
            a = Object(Rn.a)(t, 2),
            r = a[0],
            c = a[1],
            o = Object(n.useCallback)(
              function () {
                var t = e.inputRef.current;
                t && (t.select(), document.execCommand('copy'), c(!0));
              },
              [e.inputRef],
            ),
            i = Object(n.useCallback)(function () {
              c(!1);
            }, []);
          return {
            isCopied: r,
            setCopied: c,
            handleCopy: o,
            handleCloseSnack: i,
          };
        },
        Ln = function (e) {
          var t = Nn(e),
            a = t.isCopied,
            n = t.handleCopy,
            c = t.handleCloseSnack;
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              An.a,
              {
                anchorOrigin: { horizontal: 'center', vertical: 'bottom' },
                open: a,
                autoHideDuration: 1e3,
                onClose: c,
              },
              r.a.createElement(
                sn.a,
                { onClose: c, severity: 'success' },
                r.a.createElement(
                  Rt.a,
                  { variant: 'h6', component: 'div' },
                  e.message,
                ),
              ),
            ),
            r.a.createElement(
              Sn.a,
              { onClick: n },
              r.a.createElement(Tn.a, { fontSize: 'small' }),
            ),
          );
        },
        Fn = function (e) {
          var t = Object(n.useCallback)(function (e) {
            e.target.select();
          }, []);
          return {
            inputRefs: Object(n.useMemo)(
              function () {
                return e.items.map(function () {
                  return r.a.createRef();
                });
              },
              [e.items],
            ),
            handleFocus: t,
          };
        },
        Kn = Object(Cn.a)(function () {
          return {
            list: { padding: 0, paddingBottom: 10, width: '100%' },
            item: { padding: 0, paddingBottom: 10, paddingTop: 10 },
          };
        }),
        Wn = function (e) {
          var t = Kn(),
            a = Fn(e),
            n = a.inputRefs,
            c = a.handleFocus;
          return r.a.createElement(
            La.a,
            { className: t.list },
            e.items.map(function (e, a) {
              return r.a.createElement(
                Fa.a,
                { className: t.item, key: e.code },
                r.a.createElement(Pa.a, {
                  value: e.url,
                  label: e.label,
                  fullWidth: !0,
                  variant: 'outlined',
                  onFocus: c,
                  InputProps: {
                    inputRef: n[a],
                    endAdornment: r.a.createElement(
                      wn.a,
                      { position: 'end' },
                      r.a.createElement(Ln, {
                        inputRef: n[a],
                        message: 'URL has been copied!',
                      }),
                      !e.isPrivate &&
                        r.a.createElement(
                          Sn.a,
                          {
                            onClick: function () {
                              window.open(e.url, '_blank');
                            },
                          },
                          r.a.createElement(In.a, { fontSize: 'small' }),
                        ),
                    ),
                  },
                }),
              );
            }),
          );
        },
        zn = a(413),
        Bn = a(414),
        Hn = a(415),
        Un = function (e) {
          var t = Object(n.useState)(!1),
            a = Object(Rn.a)(t, 2),
            c = a[0],
            o = a[1],
            i = e.onSubmit;
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              Ta.a,
              {
                open: c,
                onClose: function () {
                  return o(!1);
                },
              },
              e.title &&
                r.a.createElement(
                  zn.a,
                  null,
                  r.a.createElement(
                    Rt.a,
                    { variant: 'h4', component: 'div' },
                    e.title,
                  ),
                ),
              e.content && r.a.createElement(Bn.a, null, e.content),
              r.a.createElement(
                Hn.a,
                null,
                r.a.createElement(
                  At.a,
                  {
                    onClick: function () {
                      return o(!1);
                    },
                    color: 'primary',
                  },
                  'Cancel',
                ),
                r.a.createElement(
                  At.a,
                  {
                    onClick: function () {
                      i && i(), o(!1);
                    },
                    color: 'primary',
                    autoFocus: !0,
                  },
                  'Submit',
                ),
              ),
            ),
            r.a.createElement(
              'div',
              {
                onClick: function () {
                  return o(!0);
                },
              },
              e.children,
            ),
          );
        },
        Jn = a(416),
        _n = a(369),
        qn = Object(_n.a)(function (e) {
          return {
            tooltip: {
              backgroundColor: 'white',
              color: 'rgba(0, 0, 0, 0.87)',
              maxWidth: 280,
              fontSize: e.typography.pxToRem(12),
              border: '1px solid #dadde9',
              padding: 20,
            },
          };
        })(Jn.a),
        Gn = function (e) {
          return r.a.createElement(qn, e);
        },
        Vn = a(419),
        Yn = function (e) {
          return Object(za.a)(function () {
            return {
              root: { padding: '5px 0' },
              pre: {
                display: 'block',
                overflowX: 'auto',
                height: function () {
                  return void 0 !== e.height ? e.height : 'auto';
                },
                whiteSpace: 'pre',
                padding: '15px 20px',
                background: yt.a.grey[100],
              },
              code: { background: 'none' },
            };
          });
        },
        Dn = function (e) {
          var t = Yn(e)();
          return r.a.createElement(
            'pre',
            { className: t.pre },
            r.a.createElement('code', { className: t.code }, e.children),
          );
        },
        Qn = a(303),
        Xn = a(417),
        Zn = function () {
          return {
            styles: $n(),
            menuStaticProps: Object(n.useMemo)(function () {
              return {
                anchorOrigin: { horizontal: 'right', vertical: 'top' },
                transformOrigin: { horizontal: 'right', vertical: 'top' },
              };
            }, []),
          };
        },
        $n = Object(za.a)(function () {
          return { menu: { width: 150 } };
        }),
        er = function (e) {
          var t = Zn(),
            a = t.menuStaticProps,
            n = t.styles;
          return r.a.createElement(
            Qn.a,
            Object.assign({}, a, {
              keepMounted: !0,
              anchorEl: e.anchorEl,
              className: n.menu,
              open: Boolean(e.anchorEl),
              onClose: e.handleClose,
            }),
            e.menu.map(function (t) {
              return r.a.createElement(
                Xn.a,
                {
                  key: t.id,
                  onClick: function () {
                    e.onSelectMenuItem && e.onSelectMenuItem(t),
                      e.handleClose();
                  },
                },
                r.a.createElement(Rt.a, { variant: 'button' }, t.label),
              );
            }),
          );
        },
        tr = function (e) {
          var t = e.menu,
            a = e.currentMenuLabel,
            n = e.fieldProps,
            c = e.inputProps,
            o = e.disabled,
            i = r.a.useState(null),
            l = Object(Rn.a)(i, 2),
            u = l[0],
            s = l[1];
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              Pa.a,
              Object.assign({ fullWidth: !0 }, n, {
                variant: 'outlined',
                disabled: o,
                InputProps: Object(j.a)(
                  {
                    endAdornment: a
                      ? r.a.createElement(
                          wn.a,
                          { position: 'end' },
                          e.beforeOptions,
                          r.a.createElement(
                            At.a,
                            {
                              size: 'small',
                              disabled: o,
                              onClick: function (e) {
                                s(e.currentTarget);
                              },
                            },
                            a,
                          ),
                          e.afterOptions,
                        )
                      : null,
                  },
                  c,
                ),
              }),
            ),
            t &&
              r.a.createElement(er, {
                anchorEl: u,
                menu: t,
                onSelectMenuItem: e.onSelectMenuItem,
                handleClose: function () {
                  s(null);
                },
              }),
          );
        },
        ar = function () {
          var e = jt(),
            t = Object(n.useCallback)(
              function (t) {
                e(Ke.toggleModal({ isOpen: t }));
              },
              [e],
            ),
            a = Object(n.useCallback)(
              function (t) {
                return e(Ke.fetchKeyPreview(t));
              },
              [e],
            ),
            r = Object(n.useCallback)(
              function (t) {
                e(Ke.setParams(t));
              },
              [e],
            ),
            c = Object(n.useCallback)(
              (function () {
                var e = Object(v.a)(
                  O.a.mark(function e(n, c) {
                    return O.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return t(!0), c && r(c), (e.next = 4), a(n);
                          case 4:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                return function (t, a) {
                  return e.apply(this, arguments);
                };
              })(),
              [a, t, r],
            );
          return {
            toggleModal: t,
            fetchKeyPreview: a,
            openKeyPreview: c,
            setPreviewParams: r,
          };
        },
        nr = [
          { id: 'jwk', label: 'JWK' },
          { id: 'jwks', label: 'JWKs' },
          { id: 'pem', label: 'PEM' },
        ],
        rr = function (e) {
          var t = Object(n.useState)(nr[0].id),
            a = Object(Rn.a)(t, 2),
            r = a[0],
            c = a[1],
            o = ar().openKeyPreview,
            l = Object(n.useMemo)(
              function () {
                return (
                  nr.find(function (e) {
                    return e.id === r;
                  }) || nr[0]
                );
              },
              [r],
            ),
            u = Object(i.c)(Bt) || '',
            s = Object(n.useRef)(null),
            m = Object(n.useRef)(null),
            d = Object(n.useCallback)(function (e) {
              e.target.select();
            }, []),
            f = Object(n.useMemo)(
              function () {
                return { label: 'Target URL', onFocus: d };
              },
              [d],
            ),
            p = Object(n.useMemo)(
              function () {
                return ''
                  .concat(u, '/entry/private/')
                  .concat(l.id, '/')
                  .concat(e.item.code);
              },
              [u, l.id, e.item.code],
            ),
            b = Object(n.useMemo)(
              function () {
                return { value: p, inputRef: s };
              },
              [p],
            ),
            h = Object(n.useCallback)(
              function (e) {
                'string' === typeof e.id &&
                  ['jwk', 'jwks', 'pem'].includes(e.id) &&
                  c(e.id);
              },
              [c],
            ),
            g = Object(n.useCallback)(
              function () {
                return o(
                  { id: e.item.id, isByEntry: !0 },
                  { privacy: 'private', format: r },
                );
              },
              [o, e.item.id, r],
            );
          return {
            keysHost: u,
            inputProps: b,
            formatId: r,
            fieldProps: f,
            format: l,
            targetUrl: p,
            urlRef: s,
            accessRef: m,
            setFormat: c,
            handleFocus: d,
            handleSetFormat: h,
            handleOpenPreviewModal: g,
          };
        },
        cr = Object(Cn.a)(function () {
          return {
            exampleMessage: {
              display: 'flex',
              justifyContent: 'space-between',
            },
          };
        }),
        or = function (e) {
          var t = rr(e),
            a = t.fieldProps,
            n = t.inputProps,
            c = t.format,
            o = t.targetUrl,
            i = t.urlRef,
            l = t.accessRef,
            u = t.handleSetFormat,
            s = t.handleOpenPreviewModal,
            m = t.handleFocus,
            d = cr(),
            f = e.item;
          return r.a.createElement(
            rn.a,
            { container: !0, spacing: 3 },
            r.a.createElement(
              rn.a,
              { item: !0, xs: 12 },
              r.a.createElement(Pa.a, {
                fullWidth: !0,
                label: 'Access key',
                variant: 'outlined',
                value: f.accessCode,
                onFocus: m,
                InputProps: {
                  inputRef: l,
                  endAdornment: r.a.createElement(
                    wn.a,
                    { position: 'end' },
                    r.a.createElement(Ln, {
                      inputRef: l,
                      message: 'URL has been copied!',
                    }),
                  ),
                },
              }),
            ),
            r.a.createElement(
              rn.a,
              { item: !0, xs: 12 },
              r.a.createElement(tr, {
                menu: nr,
                currentMenuLabel: c.label,
                onSelectMenuItem: u,
                fieldProps: a,
                inputProps: n,
                afterOptions: r.a.createElement(Ln, {
                  inputRef: i,
                  message: 'URL has been copied!',
                }),
              }),
            ),
            f.accessCode &&
              r.a.createElement(
                rn.a,
                { item: !0, xs: 12 },
                r.a.createElement(
                  'div',
                  { className: d.exampleMessage },
                  r.a.createElement(
                    Rt.a,
                    null,
                    'Key can be fetched via POST with access code.',
                  ),
                  r.a.createElement(Vn.a, { onClick: s }, 'Preview'),
                ),
                r.a.createElement(
                  Dn,
                  null,
                  'curl -d \'{ "accessToken":"'
                    .concat(
                      f.accessCode,
                      '" }\' -H "Content-Type: application/json" -X POST ',
                    )
                    .concat(o),
                ),
              ),
          );
        },
        ir = function (e) {
          var t = Object(i.c)(Ht),
            a = fn(),
            r = a.fetchRemoveKeyItem,
            c = a.fetchArchiveKeyItem,
            o = a.fetchRestoreKeyItem,
            l = e.data,
            u = l ? l.rotateInterval : null,
            s = l ? l.code : null,
            m = Object(n.useMemo)(
              function () {
                return void 0 === t || null === s
                  ? []
                  : [
                      {
                        code: 'jwk',
                        url: ''.concat(t, '/entry/public/jwk/').concat(s),
                        label: 'JWK',
                      },
                      {
                        code: 'jwks',
                        url: ''.concat(t, '/entry/public/jwks/').concat(s),
                        label: 'JWKs',
                      },
                      {
                        code: 'pem',
                        url: ''.concat(t, '/entry/public/pem/').concat(s),
                        label: 'PEM',
                      },
                    ];
              },
              [s, t],
            ),
            d = Object(n.useCallback)(
              function (e) {
                return r({ id: e });
              },
              [r],
            ),
            f = Object(n.useCallback)(
              function (e) {
                return c({ id: e });
              },
              [c],
            ),
            p = Object(n.useCallback)(
              function (e) {
                return o({ id: e });
              },
              [o],
            ),
            b = Object(n.useMemo)(
              function () {
                return (
                  u &&
                  'Rotation period: '.concat(bn.a.duration(u, 's').humanize())
                );
              },
              [u],
            );
          return {
            host: t,
            rotation: b,
            publicUrls: m,
            deleteItem: d,
            archiveItem: f,
            restoreItem: p,
          };
        },
        lr = Object(za.a)(function () {
          return {
            actions: { justifyContent: 'flex-end' },
            privateWrap: { width: '100%' },
            divider: { marginTop: 10, marginBottom: 10 },
            tooltip: {
              marginLeft: 10,
              opacity: 0.2,
              '&:hover': { opacity: 1 },
            },
            codeHolder: { textAlign: 'right' },
          };
        }),
        ur = function (e) {
          var t = lr(),
            a = ir(e),
            n = a.deleteItem,
            c = a.archiveItem,
            o = a.restoreItem,
            i = a.rotation,
            l = a.publicUrls,
            u = e.data;
          return u
            ? r.a.createElement(
                wa.a,
                null,
                r.a.createElement(
                  Ca.a,
                  null,
                  r.a.createElement(
                    rn.a,
                    { container: !0, spacing: 2, justify: 'space-between' },
                    r.a.createElement(
                      rn.a,
                      { item: !0 },
                      r.a.createElement(Rt.a, { variant: 'caption' }, 'Name'),
                      r.a.createElement(Rt.a, { variant: 'h5' }, u.name),
                    ),
                    r.a.createElement(
                      rn.a,
                      { item: !0, className: t.codeHolder },
                      r.a.createElement(
                        Rt.a,
                        { variant: 'caption' },
                        'Unique code',
                      ),
                      r.a.createElement(Rt.a, { variant: 'h5' }, u.code),
                    ),
                  ),
                  r.a.createElement(hn.a, { className: t.divider }),
                  r.a.createElement(
                    Rt.a,
                    { variant: 'caption' },
                    u.rotateInterval ? i : 'Non rotatable key',
                  ),
                  r.a.createElement(hn.a, { className: t.divider }),
                  r.a.createElement(
                    gn.a,
                    null,
                    r.a.createElement(
                      On.a,
                      { expandIcon: r.a.createElement(yn.a, null) },
                      r.a.createElement(Rt.a, { variant: 'h6' }, 'Public key'),
                      r.a.createElement(
                        Gn,
                        {
                          placement: 'top-start',
                          title: r.a.createElement(
                            Rt.a,
                            {
                              gutterBottom: !0,
                              variant: 'body1',
                              color: 'textPrimary',
                            },
                            'Anyone can get public key by GET request in formats listed below. Rotatable response contain "expires" header.',
                          ),
                        },
                        r.a.createElement(kn.a, {
                          className: t.tooltip,
                          color: 'primary',
                          fontSize: 'small',
                        }),
                      ),
                    ),
                    r.a.createElement(
                      vn.a,
                      null,
                      r.a.createElement(
                        'div',
                        { style: { flexGrow: 1 } },
                        r.a.createElement(Wn, { items: l }),
                      ),
                    ),
                  ),
                  r.a.createElement(
                    gn.a,
                    null,
                    r.a.createElement(
                      On.a,
                      { expandIcon: r.a.createElement(yn.a, null) },
                      r.a.createElement(Rt.a, { variant: 'h6' }, 'Private key'),
                    ),
                    r.a.createElement(
                      vn.a,
                      null,
                      r.a.createElement(
                        'div',
                        { className: t.privateWrap },
                        r.a.createElement(or, { item: u }),
                      ),
                    ),
                  ),
                ),
                r.a.createElement(
                  jn.a,
                  { className: t.actions },
                  null !== u.archivedAt &&
                    r.a.createElement(
                      r.a.Fragment,
                      null,
                      r.a.createElement(
                        Un,
                        {
                          title: 'Are you sure want to delete key?',
                          content: 'Every associated keys will be unavailable',
                          onSubmit: function () {
                            return n(u.id);
                          },
                        },
                        r.a.createElement(At.a, { size: 'small' }, 'Delete'),
                      ),
                      r.a.createElement(
                        At.a,
                        {
                          size: 'small',
                          onClick: function () {
                            return o(u.id);
                          },
                        },
                        'Restore',
                      ),
                    ),
                  null === u.archivedAt &&
                    r.a.createElement(
                      Un,
                      {
                        title: 'Are you sure want to archive entry in storage?',
                        content:
                          'Associated keys will be marked as archived and unavailable. You can restore entry from the archive at any time.',
                        onSubmit: function () {
                          return c(u.id);
                        },
                      },
                      r.a.createElement(At.a, { size: 'small' }, 'Archive'),
                    ),
                ),
              )
            : null;
        },
        sr = a(389),
        mr = a(153),
        dr = a.n(mr),
        fr = function (e) {
          var t = e.onSelect;
          return {
            handleChange: Object(n.useCallback)(
              function (e) {
                t && t(e.target.value);
              },
              [t],
            ),
          };
        },
        pr = Object(Cn.a)(function () {
          return { label: { marginRight: 10, fontSize: 12 } };
        }),
        br = function (e) {
          var t = pr(),
            a = e.current,
            n = e.options,
            c = fr(e).handleChange;
          return r.a.createElement(
            ca.a,
            null,
            r.a.createElement(
              dr.a,
              { container: !0, alignItems: 'center' },
              r.a.createElement(
                dr.a,
                { item: !0, className: t.label },
                'Items per page:',
              ),
              r.a.createElement(
                dr.a,
                { item: !0 },
                r.a.createElement(
                  sr.a,
                  { value: a, onChange: c },
                  n.map(function (e) {
                    return r.a.createElement(Xn.a, { key: e, value: e }, e);
                  }),
                ),
              ),
            ),
          );
        },
        hr = a(317),
        gr = a(309),
        Or = a.n(gr),
        vr = a(308),
        jr = a.n(vr),
        Er = function (e) {
          var t = e.InputProps,
            a = e.onChange,
            c = e.onThrottledChange,
            o = Object(hr.a)(e, [
              'InputProps',
              'onChange',
              'onThrottledChange',
            ]),
            i = Object(n.useMemo)(
              function () {
                return Object(j.a)(
                  {
                    startAdornment: r.a.createElement(
                      wn.a,
                      { position: 'start' },
                      r.a.createElement(Or.a, null),
                    ),
                  },
                  t,
                );
              },
              [t],
            ),
            l = Object(n.useCallback)(
              jr()(function (e) {
                c && c(e);
              }, 500),
              [c],
            );
          return {
            InputPropsMemo: i,
            restProps: o,
            handleChange: Object(n.useCallback)(
              function (e) {
                var t = e.target.value;
                a && a(e), l(t);
              },
              [l, a],
            ),
          };
        },
        yr = function (e) {
          var t = Er(e),
            a = t.InputPropsMemo,
            n = t.restProps,
            c = t.handleChange;
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              Pa.a,
              Object.assign({}, n, {
                onChange: c,
                size: 'small',
                variant: 'outlined',
                InputProps: a,
              }),
            ),
          );
        },
        xr = function (e) {
          var t = e.id,
            a = Object(n.useState)(null),
            r = Object(Rn.a)(a, 2),
            c = r[0],
            i = r[1];
          return (
            Object(n.useLayoutEffect)(
              function () {
                var e = document.getElementById(t);
                e && i(e);
              },
              [i, t],
            ),
            c && o.a.createPortal(e.children, c)
          );
        },
        kr = Object(Cn.a)(function () {
          return { text: { maxWidth: 600 }, buttonBox: { marginTop: 30 } };
        }),
        wr = function (e) {
          var t = kr();
          return r.a.createElement(
            ca.a,
            null,
            r.a.createElement(
              Rt.a,
              { component: 'div', variant: 'h4' },
              'There are no available key entries',
            ),
            r.a.createElement(
              ca.a,
              { className: t.text },
              r.a.createElement(
                'p',
                null,
                'Key entry simplifies work with rotatable keys. When you create a key entry, the server generates keys with a defined lifetime. After the key expires, the server will replace it with the new one and you can get a renewed key with the same request.',
              ),
            ),
            r.a.createElement(
              ca.a,
              { className: t.buttonBox },
              r.a.createElement(
                At.a,
                {
                  variant: 'outlined',
                  startIcon: r.a.createElement(un.a, null),
                  onClick: e.onAddNewOne,
                },
                'Add key entry',
              ),
            ),
          );
        },
        Sr = Object(za.a)(function () {
          return { text: { maxWidth: 600 } };
        }),
        Cr = function () {
          var e = Sr();
          return r.a.createElement(
            ca.a,
            null,
            r.a.createElement(
              Rt.a,
              { component: 'div', variant: 'h4' },
              'There are no archived entries',
            ),
            r.a.createElement(
              ca.a,
              { className: e.text },
              r.a.createElement(
                'p',
                null,
                'You can mark key entry as archived. In that case, it will be no longer available, but server will keep all associated keys in storage. Also, you could restore archived key entry at any moment.',
              ),
              r.a.createElement(
                'p',
                null,
                'All archived entries will be listed here.',
              ),
            ),
          );
        },
        Pr = function () {
          var e = Object(i.c)(Ze),
            t = fn(),
            a = t.changePager,
            r = t.changeSearch,
            c = t.toggleEditModal,
            o = Object(n.useCallback)(
              function () {
                c({ isOpened: !e });
              },
              [e, c],
            ),
            l = Object(n.useCallback)(
              function (e, t) {
                return a({ page: t });
              },
              [a],
            );
          return {
            handleChangePerPage: Object(n.useCallback)(
              function (e) {
                return a({ perPage: e });
              },
              [a],
            ),
            handleChangeSearch: Object(n.useCallback)(
              function (e) {
                return r({ search: e });
              },
              [r],
            ),
            handleModalToggle: o,
            handlePagerChange: l,
          };
        },
        Ir = Object(za.a)(function () {
          return {
            notFound: { marginTop: 20 },
            footerWrap: { paddingTop: 20, paddingBottom: 20 },
            loaderWrap: {
              textAlign: 'center',
              minHeight: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              paddingBottom: 145,
            },
            pagerHolder: { marginLeft: 'auto' },
            searchHolder: { marginLeft: 'auto', marginTop: 'auto' },
            wrap: { maxWidth: '100%', flexGrow: 1 },
            noItems: { marginTop: 20 },
          };
        }),
        Rr = function (e) {
          var t = Ir(),
            a = Object(i.c)(tt),
            n = a.loading,
            c = a.data,
            o = a.error,
            l = a.pager,
            u = Object(i.c)($e),
            s = Object(i.c)(De),
            m = Object(i.c)(et),
            d = Pr(),
            f = d.handleModalToggle,
            p = d.handlePagerChange,
            b = d.handleChangePerPage,
            h = d.handleChangeSearch;
          return o
            ? r.a.createElement(sn.a, { severity: 'error' }, o)
            : r.a.createElement(
                ca.a,
                { className: t.wrap },
                r.a.createElement(
                  rn.a,
                  { container: !0, spacing: 2 },
                  r.a.createElement(
                    rn.a,
                    {
                      item: !0,
                      container: !0,
                      spacing: 2,
                      xs: 12,
                      alignItems: 'center',
                    },
                    !m &&
                      !e.archive &&
                      r.a.createElement(
                        rn.a,
                        { item: !0 },
                        r.a.createElement(
                          At.a,
                          {
                            variant: 'outlined',
                            startIcon: r.a.createElement(un.a, null),
                            onClick: f,
                          },
                          'Add key entry',
                        ),
                      ),
                    !m &&
                      r.a.createElement(
                        rn.a,
                        { item: !0 },
                        r.a.createElement(yr, {
                          defaultValue: s,
                          onThrottledChange: h,
                          placeholder: 'Search by name...',
                        }),
                      ),
                    n &&
                      r.a.createElement(
                        rn.a,
                        { item: !0 },
                        r.a.createElement(cn.a, { size: 24 }),
                      ),
                  ),
                  m &&
                    !e.archive &&
                    r.a.createElement(
                      rn.a,
                      { item: !0, xs: 12 },
                      r.a.createElement(wr, { onAddNewOne: f }),
                    ),
                  m &&
                    e.archive &&
                    r.a.createElement(
                      rn.a,
                      { item: !0, xs: 12 },
                      r.a.createElement(Cr, null),
                    ),
                  !m &&
                    r.a.createElement(
                      rn.a,
                      { item: !0, xs: 12 },
                      c.items.length > 0 &&
                        r.a.createElement(
                          rn.a,
                          { container: !0, spacing: 2 },
                          c.items.map(function (e) {
                            return r.a.createElement(
                              rn.a,
                              { item: !0, key: e.id, xs: 6 },
                              r.a.createElement(ur, { data: e }),
                            );
                          }),
                        ),
                      0 === c.items.length &&
                        r.a.createElement(
                          Rt.a,
                          { className: t.notFound },
                          'No items found',
                        ),
                    ),
                  Boolean(l.totalPages) &&
                    r.a.createElement(
                      xr,
                      { id: 'layout_dashboard_footer' },
                      r.a.createElement(
                        on.a,
                        { className: t.footerWrap },
                        r.a.createElement(
                          rn.a,
                          {
                            container: !0,
                            item: !0,
                            xs: 12,
                            alignItems: 'center',
                          },
                          r.a.createElement(
                            rn.a,
                            { item: !0 },
                            r.a.createElement(br, {
                              current: l.perPage,
                              options: u,
                              onSelect: b,
                            }),
                          ),
                          r.a.createElement(
                            rn.a,
                            { item: !0, className: t.pagerHolder },
                            void 0 !== l.totalPages &&
                              l.totalPages > 1 &&
                              r.a.createElement(mn.a, {
                                onChange: p,
                                count: l.totalPages,
                                page: l.page,
                              }),
                          ),
                        ),
                      ),
                    ),
                ),
              );
        },
        Ar = function (e) {
          return e.keyPreview;
        },
        Mr = Object(qe.createSelector)(Ar, function (e) {
          return e.modal;
        }),
        Tr = Object(qe.createSelector)(Ar, function (e) {
          return e.details;
        }),
        Nr = Object(qe.createSelector)(Ar, function (e) {
          return e.params;
        }),
        Lr = Object(qe.createSelector)(Ar, function (e) {
          return e.availFormats;
        }),
        Fr = Object(qe.createSelector)(Ar, function (e) {
          return e.availPrivacy;
        }),
        Kr = function () {
          var e,
            t,
            a = Br(),
            n = zr(),
            c = n.availFormats,
            o = n.availPrivacy,
            i = n.keyData,
            l = n.previewParams,
            u = n.keyInputRef,
            s = n.formatsBtnRef,
            m = n.privacyBtnRef,
            d = n.targetKey,
            f = n.isFormatsMenuOpen,
            p = n.isPrivacyMenuOpen,
            b = n.handleFormatsMenuClose,
            h = n.handleFormatsMenuOpen,
            g = n.handlePrivacyMenuClose,
            O = n.handlePrivacyMenuOpen,
            v = n.handleFormatsMenuItemSelect,
            j = n.handlePrivacyMenuItemSelect,
            E = n.handleDialogClose;
          if (i.error || void 0 === i.data)
            return r.a.createElement(
              'div',
              null,
              'Data error in KeyPreview component',
            );
          if (void 0 === d)
            return r.a.createElement('div', null, 'Key data unavailable');
          var y =
              null === (e = l.format) || void 0 === e
                ? void 0
                : e.toUpperCase(),
            x =
              null === (t = l.privacy) || void 0 === t
                ? void 0
                : t.toUpperCase(),
            k = bn.a.unix(i.data.activatesAt).format('LLL'),
            w = i.data.expiresAt && bn.a.unix(i.data.expiresAt).format('LLL');
          return r.a.createElement(
            ra.a,
            { className: a.wrap },
            r.a.createElement(er, {
              anchorEl: f ? s.current : null,
              handleClose: b,
              onSelectMenuItem: v,
              menu: c,
            }),
            r.a.createElement(er, {
              anchorEl: p ? m.current : null,
              handleClose: g,
              onSelectMenuItem: j,
              menu: o,
            }),
            r.a.createElement(
              rn.a,
              { container: !0, spacing: 2 },
              r.a.createElement(
                rn.a,
                { container: !0, item: !0, xs: 12, alignItems: 'center' },
                r.a.createElement(
                  rn.a,
                  { item: !0, xs: 6 },
                  r.a.createElement(Rt.a, { variant: 'h3' }, 'Key preview'),
                ),
                r.a.createElement(
                  rn.a,
                  { container: !0, item: !0, xs: 6, justify: 'flex-end' },
                  r.a.createElement(
                    At.a,
                    { size: 'small', ref: m, onClick: O },
                    x,
                  ),
                  r.a.createElement(
                    At.a,
                    { size: 'small', ref: s, onClick: h },
                    y,
                  ),
                  r.a.createElement(
                    'div',
                    { className: a.copyHolder },
                    r.a.createElement('textarea', {
                      readOnly: !0,
                      ref: u,
                      value: d,
                      className: a.keyInput,
                    }),
                    r.a.createElement(Ln, {
                      inputRef: u,
                      message: 'Key has been copied!',
                    }),
                  ),
                ),
              ),
              r.a.createElement(
                rn.a,
                {
                  item: !0,
                  container: !0,
                  xs: 12,
                  justify: 'flex-start',
                  spacing: 2,
                },
                r.a.createElement(
                  rn.a,
                  { item: !0 },
                  r.a.createElement(
                    Rt.a,
                    { variant: 'caption' },
                    'Activates at: ',
                    k,
                  ),
                ),
                r.a.createElement(
                  rn.a,
                  { item: !0 },
                  r.a.createElement(
                    Rt.a,
                    { variant: 'caption' },
                    w ? 'Expires at: '.concat(w) : 'No expiration',
                  ),
                ),
              ),
              r.a.createElement(
                rn.a,
                { item: !0, xs: 12 },
                r.a.createElement(Dn, null, d),
              ),
              r.a.createElement(
                rn.a,
                { item: !0, container: !0, xs: 12, justify: 'flex-end' },
                r.a.createElement(At.a, { onClick: E }, 'Close'),
              ),
            ),
          );
        },
        Wr = function (e) {
          var t = zr(),
            a = t.modalState,
            n = t.handleDialogClose;
          return r.a.createElement(
            Ta.a,
            Object.assign({ open: Boolean(a.isOpen), onClose: n }, e),
            r.a.createElement(Kr, null),
          );
        },
        zr = function () {
          var e = Object(i.c)(Tr),
            t = Object(i.c)(Mr),
            a = Object(i.c)(Nr),
            r = Object(i.c)(Lr),
            c = Object(i.c)(Fr),
            o = Object(n.useState)(!1),
            l = Object(Rn.a)(o, 2),
            u = l[0],
            s = l[1],
            m = Object(n.useState)(!1),
            d = Object(Rn.a)(m, 2),
            f = d[0],
            p = d[1],
            b = ar(),
            h = b.setPreviewParams,
            g = b.toggleModal,
            O = Object(n.useCallback)(
              function () {
                g(!1);
              },
              [g],
            ),
            v = Object(n.useCallback)(
              function () {
                s(!1);
              },
              [s],
            ),
            j = Object(n.useCallback)(
              function () {
                s(!0);
              },
              [s],
            ),
            E = Object(n.useCallback)(
              function () {
                p(!1);
              },
              [p],
            ),
            y = Object(n.useCallback)(
              function () {
                p(!0);
              },
              [p],
            ),
            x = Object(n.useCallback)(
              function (e) {
                h({ format: e.id });
              },
              [h],
            ),
            k = Object(n.useCallback)(
              function (e) {
                h({ privacy: e.id });
              },
              [h],
            ),
            w = Object(n.useRef)(null),
            S = Object(n.useRef)(null),
            C = Object(n.useRef)(null);
          return {
            availFormats: r,
            availPrivacy: c,
            isPrivacyMenuOpen: f,
            isFormatsMenuOpen: u,
            targetKey: Object(n.useMemo)(
              function () {
                if (void 0 !== e.data) {
                  var t = e.data,
                    n = t.publicKey,
                    r = t.privateKey,
                    c = 'private' === a.privacy ? r : n;
                  if (void 0 !== c)
                    switch (a.format) {
                      case 'pem':
                        return c.pem;
                      default:
                        return JSON.stringify(c.jwk, null, 2);
                    }
                }
              },
              [e.data, a.format, a.privacy],
            ),
            modalState: t,
            keyData: e,
            previewParams: a,
            keyInputRef: w,
            privacyBtnRef: C,
            formatsBtnRef: S,
            handleFormatsMenuClose: v,
            handleFormatsMenuOpen: j,
            handlePrivacyMenuClose: E,
            handlePrivacyMenuOpen: y,
            handleFormatsMenuItemSelect: x,
            handlePrivacyMenuItemSelect: k,
            handleDialogClose: O,
            toggleFormatsMenu: s,
            togglePrivacyMenu: p,
            togglePreviewModal: g,
          };
        },
        Br = Object(za.a)(function () {
          return {
            wrap: { width: '600px', padding: '20px' },
            copyHolder: { position: 'relative' },
            keyInput: {
              position: 'absolute',
              overflow: 'hidden',
              width: 10,
              height: 20,
              left: 15,
              top: 15,
              opacity: 0,
            },
          };
        }),
        Hr = a(428),
        Ur = a(438),
        Jr = a(189),
        _r = a.n(Jr);
      function qr() {
        var e = Object(Ut.a)(['[w]*'], ['[\\w]*']);
        return (
          (qr = function () {
            return e;
          }),
          e
        );
      }
      function Gr() {
        var e = Object(Ut.a)(['[d,.]*'], ['[\\d,.]*']);
        return (
          (Gr = function () {
            return e;
          }),
          e
        );
      }
      var Vr = { h: 'hours', d: 'days', w: 'weeks', m: 'months' },
        Yr = { name: '', code: '', rotation: '', unit: 'd', rotatable: '1' },
        Dr = function (e) {
          var t = ec(),
            a = Xr(e),
            n = a.menuItems,
            c = a.validate,
            o = a.handleSubmit;
          return r.a.createElement(
            wa.a,
            { style: { width: 400 } },
            r.a.createElement(Sa.a, {
              title: r.a.createElement(
                Rt.a,
                { variant: 'h3' },
                'Add new key entry',
              ),
            }),
            r.a.createElement(
              Ca.a,
              null,
              r.a.createElement(
                ta.c,
                { initialValues: Yr, validate: c, onSubmit: o },
                function (e) {
                  var a = e.isSubmitting;
                  return r.a.createElement(
                    ta.b,
                    null,
                    r.a.createElement(
                      rn.a,
                      { container: !0, spacing: 2 },
                      r.a.createElement(
                        rn.a,
                        { item: !0, xs: 12 },
                        r.a.createElement(ta.a, { name: 'name' }, function (e) {
                          var a = e.field,
                            n = e.meta;
                          return r.a.createElement(
                            Pa.a,
                            Object.assign(
                              {
                                className: t.textfield,
                                error: Boolean(n.touched && n.error),
                                label: 'Choose name',
                                variant: 'outlined',
                              },
                              a,
                            ),
                          );
                        }),
                      ),
                      r.a.createElement(
                        rn.a,
                        { item: !0, xs: 12 },
                        r.a.createElement(ta.a, { name: 'code' }, function (e) {
                          var a = e.field,
                            n = e.meta;
                          return r.a.createElement(
                            Pa.a,
                            Object.assign(
                              {
                                className: t.textfield,
                                error: Boolean(n.touched && n.error),
                                label: 'Unique code',
                                variant: 'outlined',
                                InputProps: {
                                  inputRef: function (e) {
                                    e && $r.mask(e);
                                  },
                                },
                              },
                              a,
                            ),
                          );
                        }),
                      ),
                      r.a.createElement(
                        rn.a,
                        { item: !0, xs: 12 },
                        r.a.createElement(ta.a, { name: 'rotation' }, function (
                          t,
                        ) {
                          var a = t.field,
                            c = t.meta,
                            o = '1' === e.values.rotatable;
                          return r.a.createElement(tr, {
                            menu: n,
                            onSelectMenuItem: function (t) {
                              'string' === typeof t.id &&
                                e.setFieldValue('unit', t.id);
                            },
                            disabled: !o,
                            currentMenuLabel: Vr[e.values.unit],
                            inputProps: {
                              inputRef: function (e) {
                                e && Zr.mask(e);
                              },
                            },
                            fieldProps: Object(j.a)(
                              {
                                error: Boolean(c.touched && c.error),
                                label: 'Rotation interval',
                              },
                              a,
                            ),
                          });
                        }),
                      ),
                      r.a.createElement(
                        rn.a,
                        { item: !0, xs: 12 },
                        r.a.createElement(
                          ta.a,
                          { name: 'rotatable' },
                          function (t) {
                            var a = t.field;
                            return r.a.createElement(Hr.a, {
                              control: r.a.createElement(Ur.a, {
                                checked: '1' === a.value,
                                onChange: function (t, a) {
                                  e.setFieldValue('rotatable', a ? '1' : '0');
                                },
                                name: 'checkedB',
                                color: 'primary',
                              }),
                              label: 'Enable rotation',
                            });
                          },
                        ),
                      ),
                      e.errors.server &&
                        r.a.createElement(
                          rn.a,
                          {
                            item: !0,
                            container: !0,
                            xs: 12,
                            style: { alignItems: 'center' },
                          },
                          r.a.createElement(
                            fa,
                            { root: { style: { flexGrow: 1 } } },
                            e.errors.server,
                          ),
                        ),
                      r.a.createElement(
                        rn.a,
                        {
                          item: !0,
                          container: !0,
                          xs: 12,
                          style: { alignItems: 'center' },
                        },
                        r.a.createElement(
                          At.a,
                          {
                            disabled: a,
                            size: 'large',
                            type: 'submit',
                            variant: 'contained',
                            color: 'secondary',
                            disableElevation: !0,
                            fullWidth: !0,
                          },
                          !a && 'Submit',
                          a &&
                            r.a.createElement(cn.a, {
                              className: t.progress,
                              size: 26,
                            }),
                        ),
                      ),
                    ),
                  );
                },
              ),
            ),
          );
        },
        Qr = function () {
          var e = Object(i.c)(Ze),
            t = fn().toggleEditModal,
            a = Object(n.useCallback)(
              function () {
                t({ isOpened: !1 });
              },
              [t],
            );
          return r.a.createElement(
            Ta.a,
            { open: e, onClose: a },
            r.a.createElement(Dr, { onSubmit: a }),
          );
        },
        Xr = function (e) {
          var t = fn().fetchCreateKey,
            a = Object(n.useMemo)(function () {
              return Object.keys(Vr).map(function (e) {
                return { id: e, label: Vr[e] };
              });
            }, []),
            r = e.onSubmit,
            c = Object(n.useCallback)(
              (function () {
                var e = Object(v.a)(
                  O.a.mark(function e(a, n) {
                    var c, o;
                    return O.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              t({
                                name: a.name,
                                code: a.code,
                                rotation:
                                  '1' === a.rotatable
                                    ? ''.concat(a.rotation, ' ').concat(a.unit)
                                    : void 0,
                              })
                            );
                          case 2:
                            (c = e.sent),
                              (o = c).error
                                ? n.setErrors({ server: o.error.message })
                                : r && r();
                          case 5:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                return function (t, a) {
                  return e.apply(this, arguments);
                };
              })(),
              [r, t],
            ),
            o = Object(n.useCallback)(function (e) {
              var t = {};
              return (
                (e.name && 0 !== e.name.length) || (t.name = 'Name required!'),
                (e.code && 0 !== e.code.length) || (t.code = 'Code required!'),
                '1' === e.rotatable &&
                  (e.rotation || 0 !== e.rotation.length
                    ? isNaN(parseInt(e.rotation)) &&
                      (t.rotation = 'Rotation interval should be number!')
                    : (t.rotation = 'Rotation interval required!')),
                t
              );
            }, []);
          return {
            menuItems: a,
            handleSubmit: c,
            fetchCreateKey: t,
            validate: o,
          };
        },
        Zr = _r()({ regex: String.raw(Gr()) }),
        $r = _r()({ regex: String.raw(qr()) }),
        ec = Object(za.a)(function () {
          return {
            textfield: { width: '100%' },
            progress: { marginLeft: 20 },
            menu: { width: 150, marginLeft: 10 },
          };
        }),
        tc = Object(za.a)(function () {
          return {
            loaderWrap: {
              minHeight: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              paddingBottom: 120,
            },
            container: { minWidth: 0, flexGrow: 1, paddingTop: 24 },
          };
        }),
        ac = function (e) {
          var t = e.isLoading,
            a = tc();
          return t
            ? r.a.createElement(
                'div',
                { className: a.loaderWrap },
                r.a.createElement(cn.a, { size: 64 }),
              )
            : r.a.createElement(
                on.a,
                { className: a.container },
                r.a.createElement(r.a.Fragment, null, e.children),
              );
        },
        nc = function () {
          var e = fn(),
            t = e.fetchKeysListWatch,
            a = e.resetList,
            r = e.routeWatcher,
            c = e.routeParser;
          Object(n.useEffect)(
            function () {
              c();
            },
            [c],
          ),
            Object(n.useEffect)(
              function () {
                r();
              },
              [r],
            ),
            Object(n.useEffect)(
              function () {
                var e = t();
                return function () {
                  e.abort();
                };
              },
              [t],
            ),
            Object(n.useEffect)(
              function () {
                return function () {
                  a();
                };
              },
              [a],
            );
        },
        rc = function () {
          var e = Object(i.c)(Qe);
          return (
            nc(),
            r.a.createElement(
              ac,
              { isLoading: e.keys },
              r.a.createElement(Rr, null),
              r.a.createElement(Wr, null),
              r.a.createElement(Qr, null),
            )
          );
        },
        cc = function () {
          var e = jt(),
            t = Object(n.useCallback)(
              (function () {
                var t = Object(v.a)(
                  O.a.mark(function t(a) {
                    return O.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), e(ie.fetchCreateAccount(a));
                          case 2:
                            return t.abrupt('return', t.sent);
                          case 3:
                          case 'end':
                            return t.stop();
                        }
                    }, t);
                  }),
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
              [e],
            ),
            a = Object(n.useCallback)(
              (function () {
                var t = Object(v.a)(
                  O.a.mark(function t(a) {
                    return O.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), e(ie.fetchRemoveAccounts(a));
                          case 2:
                            return t.abrupt('return', t.sent);
                          case 3:
                          case 'end':
                            return t.stop();
                        }
                    }, t);
                  }),
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
              [e],
            );
          return {
            fetchAccountsList: Object(n.useCallback)(
              Object(v.a)(
                O.a.mark(function t() {
                  return O.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), e(ie.fetchAccountsList());
                        case 2:
                          return t.abrupt('return', t.sent);
                        case 3:
                        case 'end':
                          return t.stop();
                      }
                  }, t);
                }),
              ),
              [e],
            ),
            fetchCreateAccount: t,
            fetchRemoveAccounts: a,
          };
        },
        oc = { login: '', password: '', admin: '0' },
        ic = function (e) {
          var t = e.onSubmit,
            a = cc().fetchCreateAccount;
          return {
            validate: Object(n.useCallback)(function () {}, []),
            handleSubmit: Object(n.useCallback)(
              (function () {
                var e = Object(v.a)(
                  O.a.mark(function e(n) {
                    return O.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              a({
                                isAdmin: '1' === n.admin,
                                login: n.login,
                                password: n.password,
                              })
                            );
                          case 2:
                            t && t();
                          case 3:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
              [t, a],
            ),
            fetchCreateAccount: a,
          };
        },
        lc = Object(za.a)(function () {
          return { progress: { marginLeft: 20 } };
        }),
        uc = function (e) {
          var t = lc(),
            a = ic(e),
            n = a.handleSubmit,
            c = a.validate;
          return r.a.createElement(
            wa.a,
            { style: { width: 400 } },
            r.a.createElement(Sa.a, {
              title: r.a.createElement(
                Rt.a,
                { variant: 'h3' },
                'Create new account',
              ),
            }),
            r.a.createElement(
              Ca.a,
              null,
              r.a.createElement(
                ta.c,
                { initialValues: oc, validate: c, onSubmit: n },
                function (e) {
                  var a = e.isSubmitting;
                  return r.a.createElement(
                    ta.b,
                    null,
                    r.a.createElement(
                      rn.a,
                      { container: !0, spacing: 2 },
                      r.a.createElement(
                        rn.a,
                        { item: !0, xs: 12 },
                        r.a.createElement(ta.a, { name: 'login' }, function (
                          e,
                        ) {
                          var t = e.field,
                            a = e.meta;
                          return r.a.createElement(
                            Pa.a,
                            Object.assign(
                              {
                                fullWidth: !0,
                                error: Boolean(a.touched && a.error),
                                label: 'Enter login',
                                variant: 'outlined',
                              },
                              t,
                            ),
                          );
                        }),
                      ),
                      r.a.createElement(
                        rn.a,
                        { item: !0, xs: 12 },
                        r.a.createElement(ta.a, { name: 'password' }, function (
                          e,
                        ) {
                          var t = e.field,
                            a = e.meta;
                          return r.a.createElement(
                            Pa.a,
                            Object.assign(
                              {
                                fullWidth: !0,
                                error: Boolean(a.touched && a.error),
                                label: 'Password',
                                type: 'password',
                                autoComplete: 'off',
                                variant: 'outlined',
                              },
                              t,
                            ),
                          );
                        }),
                      ),
                      r.a.createElement(
                        rn.a,
                        { item: !0, xs: 12 },
                        r.a.createElement(ta.a, { name: 'admin' }, function (
                          t,
                        ) {
                          var a = t.field;
                          return r.a.createElement(Hr.a, {
                            control: r.a.createElement(Ur.a, {
                              checked: '1' === a.value,
                              onChange: function (t, a) {
                                e.setFieldValue('admin', a ? '1' : '0');
                              },
                              name: 'checkedB',
                              color: 'primary',
                            }),
                            label: 'Administrator',
                          });
                        }),
                      ),
                      r.a.createElement(
                        rn.a,
                        {
                          item: !0,
                          container: !0,
                          xs: 12,
                          style: { alignItems: 'center' },
                        },
                        r.a.createElement(
                          At.a,
                          {
                            disabled: a,
                            size: 'large',
                            type: 'submit',
                            variant: 'contained',
                            color: 'secondary',
                            disableElevation: !0,
                            fullWidth: !0,
                          },
                          !a && 'Submit',
                          a &&
                            r.a.createElement(cn.a, {
                              className: t.progress,
                              size: 26,
                            }),
                        ),
                      ),
                    ),
                  );
                },
              ),
            ),
          );
        },
        sc = function (e) {
          return e.accounts;
        },
        mc =
          (Object(qe.createSelector)(sc, function (e) {
            return e.create;
          }),
          Object(qe.createSelector)(sc, function (e) {
            return e.list;
          })),
        dc = function () {
          var e = cc().fetchRemoveAccounts;
          return {
            deleteAccount: Object(n.useCallback)(
              (function () {
                var t = Object(v.a)(
                  O.a.mark(function t(a) {
                    return O.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), e({ ids: [a] });
                          case 2:
                          case 'end':
                            return t.stop();
                        }
                    }, t);
                  }),
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
              [e],
            ),
          };
        },
        fc = Object(za.a)(function () {
          return { actions: { justifyContent: 'flex-end' } };
        }),
        pc = function (e) {
          var t = fc(),
            a = dc().deleteAccount,
            n = e.data;
          return r.a.createElement(
            wa.a,
            null,
            r.a.createElement(
              Ca.a,
              null,
              r.a.createElement(
                Rt.a,
                { variant: 'caption', component: 'div' },
                'Account',
              ),
              r.a.createElement(
                Rt.a,
                { variant: 'h4', component: 'div' },
                n.login,
              ),
            ),
            r.a.createElement(
              jn.a,
              { className: t.actions },
              r.a.createElement(
                Un,
                {
                  title: 'Are you sure want to delete account?',
                  content: 'Every associated keys will be unavailable',
                  onSubmit: function () {
                    return a(n.id);
                  },
                },
                r.a.createElement(At.a, { size: 'small' }, 'Remove account'),
              ),
            ),
          );
        },
        bc = function () {
          var e = Object(n.useState)(!1),
            t = Object(Rn.a)(e, 2),
            a = t[0],
            r = t[1],
            c = cc().fetchAccountsList,
            o = Object(n.useCallback)(
              function () {
                r(!a);
              },
              [a, r],
            );
          return (
            Object(n.useEffect)(
              function () {
                c();
              },
              [c],
            ),
            { isFormOpened: a, toggleForm: r, handleModalToggle: o }
          );
        },
        hc = function () {
          var e = Object(i.c)(mc),
            t = bc(),
            a = t.isFormOpened,
            n = t.handleModalToggle;
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              Ta.a,
              { open: a, onClose: n },
              r.a.createElement(uc, { onSubmit: n }),
            ),
            r.a.createElement(
              rn.a,
              { container: !0, spacing: 2 },
              r.a.createElement(
                rn.a,
                { item: !0, xs: 12 },
                r.a.createElement(
                  At.a,
                  {
                    variant: 'outlined',
                    startIcon: r.a.createElement(un.a, null),
                    onClick: n,
                  },
                  'Add account',
                ),
              ),
              r.a.createElement(
                rn.a,
                { container: !0, item: !0, spacing: 2, xs: 12 },
                e.accounts.map(function (e) {
                  return r.a.createElement(
                    rn.a,
                    { item: !0, key: e.id, xs: 6 },
                    r.a.createElement(pc, { data: e }),
                  );
                }),
              ),
            ),
          );
        },
        gc = function () {
          return r.a.createElement(ac, null, r.a.createElement(hc, null));
        },
        Oc = a(442),
        vc = function () {
          var e = jt(),
            t = Object(i.c)(lt),
            a = Object(i.c)(ut),
            r = Object(i.c)(zt),
            c = Object(n.useCallback)(
              function (t) {
                var a = dn(64);
                return e(
                  he.fetchCreateRepo(
                    Object(j.a)(Object(j.a)({}, t), {}, { accessToken: a }),
                  ),
                );
              },
              [e],
            ),
            o = Object(n.useCallback)(
              function (t) {
                return e(he.changePager(t));
              },
              [e],
            ),
            l = Object(n.useCallback)(
              function () {
                return e(he.resetState());
              },
              [e],
            ),
            u = Object(n.useCallback)(
              function (t) {
                return e(he.changeSearch({ search: t }));
              },
              [e],
            ),
            s = Object(n.useCallback)(
              function (t) {
                return e(he.toggleEditModal(t));
              },
              [e],
            ),
            m = Object(n.useCallback)(
              function (t) {
                return e(he.fetchListRepo(t));
              },
              [e, r],
            ),
            d = Object(n.useCallback)(
              function () {
                var e = { page: t.page, perPage: t.perPage, search: a };
                return m(e);
              },
              [m, t.page, t.perPage, a],
            );
          return {
            resetState: l,
            toggleEditModal: s,
            createNewRepo: c,
            deleteRepos: Object(n.useCallback)(
              (function () {
                var t = Object(v.a)(
                  O.a.mark(function t(a) {
                    return O.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), e(he.fetchRemoveRepos(a));
                          case 2:
                          case 'end':
                            return t.stop();
                        }
                    }, t);
                  }),
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
              [e],
            ),
            fetchListRepo: m,
            changePager: o,
            fetchListRepoWatch: d,
            changeSearch: u,
          };
        },
        jc = function () {
          var e = vc().deleteRepos,
            t = Object(n.useCallback)(function (e) {
              e.target.select();
            }, []);
          return {
            accessRef: Object(n.useRef)(null),
            deleteRepos: e,
            handleFocus: t,
          };
        },
        Ec = Object(za.a)(function () {
          return {
            actions: { justifyContent: 'flex-end' },
            contentItems: { display: 'flex' },
            contentItem: { marginRight: 20 },
          };
        }),
        yc = function (e) {
          var t = e.data,
            a = Ec(),
            n = Object(i.c)(Bt),
            c = jc(),
            o = c.deleteRepos,
            l = c.accessRef,
            u = c.handleFocus,
            s = ''.concat(n || '', '/repo/bunch/').concat(t.code);
          return r.a.createElement(
            wa.a,
            null,
            r.a.createElement(
              Ca.a,
              null,
              r.a.createElement(
                rn.a,
                { container: !0, spacing: 2 },
                r.a.createElement(
                  rn.a,
                  { item: !0, xs: 12 },
                  r.a.createElement(
                    Rt.a,
                    { variant: 'caption', component: 'div' },
                    'Repository',
                  ),
                  r.a.createElement(
                    Rt.a,
                    { variant: 'h5', component: 'div' },
                    t.name,
                  ),
                ),
                r.a.createElement(
                  rn.a,
                  { item: !0, xs: 12 },
                  r.a.createElement(hn.a, null),
                ),
                r.a.createElement(
                  rn.a,
                  { container: !0, item: !0, xs: 12, spacing: 1 },
                  r.a.createElement(
                    rn.a,
                    { item: !0, xs: 12 },
                    r.a.createElement(
                      Rt.a,
                      { variant: 'caption', component: 'div' },
                      'Contained keys',
                    ),
                  ),
                  t.entries.map(function (e, t) {
                    var a = e.name;
                    return r.a.createElement(
                      rn.a,
                      { item: !0, key: t },
                      r.a.createElement(Oc.a, {
                        label: a,
                        variant: 'outlined',
                      }),
                    );
                  }),
                ),
                r.a.createElement(
                  rn.a,
                  { item: !0, xs: 12 },
                  r.a.createElement(hn.a, null),
                ),
                r.a.createElement(
                  rn.a,
                  { item: !0, xs: 12 },
                  r.a.createElement(Pa.a, {
                    fullWidth: !0,
                    label: 'Access token',
                    variant: 'outlined',
                    value: t.accessToken,
                    onFocus: u,
                    InputProps: {
                      inputRef: l,
                      endAdornment: r.a.createElement(
                        wn.a,
                        { position: 'end' },
                        r.a.createElement(Ln, {
                          inputRef: l,
                          message: 'URL has been copied!',
                        }),
                      ),
                    },
                  }),
                ),
                r.a.createElement(
                  rn.a,
                  { item: !0, xs: 12 },
                  r.a.createElement(
                    Rt.a,
                    null,
                    'Key can be fetched via POST with access token.',
                  ),
                  r.a.createElement(
                    Dn,
                    null,
                    'curl -d \'{ "accessToken":"'
                      .concat(
                        t.accessToken,
                        '" }\' -H "Content-Type: application/json" -X POST ',
                      )
                      .concat(s),
                  ),
                ),
              ),
            ),
            r.a.createElement(
              jn.a,
              { className: a.actions },
              r.a.createElement(
                Un,
                {
                  title: 'Are you sure want to delete repo?',
                  onSubmit: function () {
                    return o({ ids: [t.id] });
                  },
                },
                r.a.createElement(At.a, { size: 'small' }, 'Remove'),
              ),
            ),
          );
        },
        xc = Object(Cn.a)(function () {
          return { text: { maxWidth: 600 }, buttonBox: { marginTop: 30 } };
        }),
        kc = function (e) {
          var t = xc();
          return r.a.createElement(
            ca.a,
            null,
            r.a.createElement(
              Rt.a,
              { component: 'div', variant: 'h4' },
              'There are no repositories',
            ),
            r.a.createElement(
              ca.a,
              { className: t.text },
              r.a.createElement(
                'p',
                null,
                'Repository is useful when you need to get several keys in one request. For example, you can get all keys while an auth server initialization.',
              ),
            ),
            r.a.createElement(
              ca.a,
              { className: t.buttonBox },
              r.a.createElement(
                At.a,
                {
                  variant: 'outlined',
                  startIcon: r.a.createElement(un.a, null),
                  onClick: e.onAddNewOne,
                },
                'Add repo',
              ),
            ),
          );
        },
        wc = function () {
          var e = vc(),
            t = e.changePager,
            a = e.changeSearch,
            r = e.toggleEditModal,
            c = Object(i.c)(mt),
            o = Object(n.useCallback)(
              function (e) {
                return a(e);
              },
              [a],
            ),
            l = Object(n.useCallback)(
              function (e) {
                return t({ perPage: e });
              },
              [t],
            ),
            u = Object(n.useCallback)(
              function (e, a) {
                return t({ page: a });
              },
              [t],
            );
          return {
            handleChangeSearch: o,
            handleModalToggle: Object(n.useCallback)(
              function () {
                r({ isOpened: !c });
              },
              [r, c],
            ),
            handleChangePerPage: l,
            handlePagerChange: u,
          };
        },
        Sc = Object(Cn.a)(function () {
          return {
            notFound: { marginTop: 20 },
            footerWrap: { paddingTop: 20, paddingBottom: 20 },
            pagerHolder: { marginLeft: 'auto' },
            searchHolder: { marginLeft: 'auto' },
            noItems: { marginTop: 20 },
          };
        }),
        Cc = function () {
          var e = Sc(),
            t = Object(i.c)(it),
            a = t.loading,
            n = t.items,
            c = t.pager,
            o = t.pagerOptions,
            l = Object(i.c)(ut),
            u = Object(i.c)(dt),
            s = wc(),
            m = s.handleModalToggle,
            d = s.handleChangePerPage,
            f = s.handlePagerChange,
            p = s.handleChangeSearch;
          return r.a.createElement(
            ca.a,
            null,
            r.a.createElement(
              rn.a,
              { container: !0, spacing: 2 },
              r.a.createElement(
                rn.a,
                {
                  item: !0,
                  spacing: 2,
                  container: !0,
                  xs: 12,
                  alignItems: 'center',
                },
                !u &&
                  r.a.createElement(
                    rn.a,
                    { item: !0 },
                    r.a.createElement(
                      At.a,
                      {
                        variant: 'outlined',
                        startIcon: r.a.createElement(un.a, null),
                        onClick: m,
                      },
                      'Add repository',
                    ),
                  ),
                !u &&
                  r.a.createElement(
                    rn.a,
                    { item: !0 },
                    r.a.createElement(yr, {
                      defaultValue: l,
                      onThrottledChange: p,
                      placeholder: 'Search by name...',
                    }),
                  ),
                a &&
                  r.a.createElement(
                    rn.a,
                    { item: !0 },
                    r.a.createElement(cn.a, { size: 24 }),
                  ),
              ),
              n.length > 0 &&
                r.a.createElement(
                  rn.a,
                  { item: !0, xs: 12 },
                  r.a.createElement(
                    rn.a,
                    { container: !0, spacing: 2 },
                    n.map(function (e) {
                      return r.a.createElement(
                        rn.a,
                        { item: !0, xs: 6, key: e.id },
                        r.a.createElement(yc, { data: e }),
                      );
                    }),
                  ),
                ),
              !u &&
                0 === n.length &&
                r.a.createElement(
                  Rt.a,
                  { className: e.notFound },
                  'No items found',
                ),
              u &&
                r.a.createElement(
                  rn.a,
                  { item: !0, xs: 12 },
                  r.a.createElement(kc, { onAddNewOne: m }),
                ),
              void 0 !== c.totalItems &&
                c.totalItems > 0 &&
                r.a.createElement(
                  xr,
                  { id: 'layout_dashboard_footer' },
                  r.a.createElement(
                    on.a,
                    { className: e.footerWrap },
                    r.a.createElement(
                      rn.a,
                      {
                        container: !0,
                        item: !0,
                        xs: 12,
                        spacing: 2,
                        alignItems: 'center',
                      },
                      r.a.createElement(
                        rn.a,
                        { item: !0 },
                        r.a.createElement(br, {
                          current: c.perPage,
                          options: o,
                          onSelect: d,
                        }),
                      ),
                      r.a.createElement(
                        rn.a,
                        { item: !0, className: e.pagerHolder },
                        void 0 !== c.totalPages &&
                          c.totalPages > 1 &&
                          r.a.createElement(mn.a, {
                            onChange: f,
                            count: c.totalPages,
                            page: c.page,
                          }),
                      ),
                    ),
                  ),
                ),
            ),
          );
        },
        Pc = a(310),
        Ic = a.n(Pc),
        Rc = function (e) {
          var t = e.pickedSet,
            a = e.onUpdate,
            r = Object(n.useState)([]),
            c = Object(Rn.a)(r, 2),
            o = c[0],
            i = c[1],
            l = Object(n.useState)([]),
            u = Object(Rn.a)(l, 2),
            s = u[0],
            m = u[1],
            d = Object(n.useState)({}),
            f = Object(Rn.a)(d, 2),
            p = f[0],
            b = f[1],
            h = Object(n.useState)({}),
            g = Object(Rn.a)(h, 2),
            O = g[0],
            v = g[1];
          Mc(t, i), Tc(o, p, b), Nc(O, m);
          var E = Object(n.useCallback)(
              function (e, t) {
                var n = t
                  ? o.concat([e])
                  : o.filter(function (t) {
                      return t !== e;
                    });
                a &&
                  a(
                    s.filter(function (e) {
                      return n.includes(e.code);
                    }),
                  ),
                  i(n);
              },
              [a, i, s, o],
            ),
            y = Object(n.useCallback)(
              function (e) {
                v(function (t) {
                  return Object(j.a)(Object(j.a)({}, t), {}, { search: e });
                });
              },
              [v],
            );
          return {
            options: s,
            picked: o,
            handleChangeItem: E,
            handleSearchChange: y,
          };
        },
        Ac = Object(za.a)(function () {
          return {
            scrollBar: { height: 220 },
            topDivider: { marginBottom: 5 },
            noItemsMessage: { padding: '10px 15px' },
          };
        }),
        Mc = function (e, t) {
          Object(n.useEffect)(
            function () {
              e && t(e);
            },
            [e, t],
          );
        },
        Tc = function (e, t, a) {
          var r = fn().requestKeysByIds;
          Object(n.useEffect)(
            function () {
              var a = t,
                n = [];
              e.forEach(function (e) {
                a[e] || n.push(e);
              });
            },
            [e, t, a, r],
          );
        },
        Nc = function (e, t) {
          var a,
            r,
            c,
            o = fn().requestKeysList,
            i = Object(n.useCallback)(
              function () {
                return o(e);
              },
              [e, o],
            ),
            l = Object(n.useCallback)(
              function (e) {
                t(e.items);
              },
              [t],
            );
          (a = i),
            (r = l),
            Object(n.useEffect)(
              function () {
                var e = !1;
                return (
                  a()
                    .then(function (t) {
                      !e && r(t);
                    })
                    .catch(function (t) {
                      if (!e && c) c(t);
                      else if (!e) throw t;
                    }),
                  function () {
                    e = !0;
                  }
                );
              },
              [a, r, c],
            );
        },
        Lc = function (e) {
          var t = e.noItemsMessage,
            a = Rc(e),
            n = a.picked,
            c = a.options,
            o = a.handleChangeItem,
            i = a.handleSearchChange,
            l = Ac();
          return r.a.createElement(
            rn.a,
            { container: !0, spacing: 1 },
            r.a.createElement(
              rn.a,
              { item: !0, xs: 12, className: l.topDivider },
              r.a.createElement(hn.a, null),
            ),
            0 === c.length &&
              t &&
              r.a.createElement(
                Rt.a,
                { className: l.noItemsMessage, variant: 'caption' },
                t,
              ),
            c.length > 0 &&
              r.a.createElement(
                rn.a,
                { item: !0, xs: 12 },
                r.a.createElement(yr, {
                  placeholder: 'Select required keys...',
                  onThrottledChange: i,
                  fullWidth: !0,
                }),
                r.a.createElement(
                  ca.a,
                  { className: l.scrollBar },
                  r.a.createElement(
                    Ic.a,
                    null,
                    r.a.createElement(
                      La.a,
                      null,
                      c.map(function (e) {
                        return r.a.createElement(
                          'div',
                          { key: e.id },
                          r.a.createElement(
                            Fa.a,
                            { key: e.id },
                            r.a.createElement(
                              Ka.a,
                              null,
                              r.a.createElement(Ur.a, {
                                edge: 'start',
                                size: 'small',
                                disableRipple: !0,
                                checked: n.includes(e.code),
                                onChange: function (t) {
                                  return o(e.code, t.target.checked);
                                },
                              }),
                            ),
                            r.a.createElement(Wa.a, { primary: e.name }),
                          ),
                        );
                      }),
                    ),
                  ),
                  0 === c.length &&
                    r.a.createElement(Rt.a, null, 'No items available'),
                ),
              ),
          );
        },
        Fc = function (e) {
          var t = e.code,
            a = e.entries,
            n = {};
          return (
            (t && 0 !== t.length) || (n.code = 'Code required!'),
            0 === a.length && (n.entries = 'Choose at least one entry'),
            n
          );
        },
        Kc = function (e) {
          var t = Bc(),
            a = zc(e).handleSubmit;
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              wa.a,
              { style: { width: 400 } },
              r.a.createElement(Sa.a, {
                title: r.a.createElement(
                  Rt.a,
                  { variant: 'h3' },
                  'Create new repository',
                ),
              }),
              r.a.createElement(
                Ca.a,
                null,
                r.a.createElement(
                  ta.c,
                  {
                    initialValues: { code: '', entries: [] },
                    validate: Fc,
                    onSubmit: a,
                  },
                  function (e) {
                    var a = e.isSubmitting;
                    return r.a.createElement(
                      ta.b,
                      null,
                      r.a.createElement(
                        rn.a,
                        { container: !0, spacing: 2 },
                        r.a.createElement(
                          rn.a,
                          { item: !0, xs: 12 },
                          r.a.createElement(ta.a, { name: 'code' }, function (
                            e,
                          ) {
                            var t = e.field,
                              a = e.meta;
                            return r.a.createElement(
                              Pa.a,
                              Object.assign(
                                {
                                  fullWidth: !0,
                                  error: Boolean(a.touched && a.error),
                                  label: 'Choose unique code',
                                  variant: 'outlined',
                                },
                                t,
                              ),
                            );
                          }),
                        ),
                        r.a.createElement(
                          rn.a,
                          { item: !0, xs: 12 },
                          r.a.createElement(
                            ta.a,
                            { name: 'entries' },
                            function (a) {
                              var n = a.field,
                                c = a.meta;
                              return r.a.createElement(
                                r.a.Fragment,
                                null,
                                r.a.createElement(Lc, {
                                  onUpdate: function (t) {
                                    e.setFieldValue(
                                      'entries',
                                      t.map(function (e) {
                                        return e.code;
                                      }),
                                    );
                                  },
                                  noItemsMessage:
                                    'There are no available entries. Create one first.',
                                  pickedSet: n.value,
                                }),
                                c.touched &&
                                  c.error &&
                                  r.a.createElement(
                                    Rt.a,
                                    {
                                      variant: 'caption',
                                      color: 'error',
                                      className: t.keyError,
                                    },
                                    c.error,
                                  ),
                              );
                            },
                          ),
                        ),
                        e.errors.server &&
                          r.a.createElement(
                            rn.a,
                            {
                              item: !0,
                              container: !0,
                              xs: 12,
                              style: { alignItems: 'center' },
                            },
                            r.a.createElement(fa, null, e.errors.server),
                          ),
                        r.a.createElement(
                          rn.a,
                          {
                            item: !0,
                            container: !0,
                            xs: 12,
                            style: { alignItems: 'center' },
                          },
                          r.a.createElement(
                            At.a,
                            {
                              disabled: a,
                              size: 'large',
                              type: 'submit',
                              variant: 'contained',
                              color: 'secondary',
                              disableElevation: !0,
                              fullWidth: !0,
                            },
                            !a && 'Submit',
                            a &&
                              r.a.createElement(cn.a, {
                                className: t.progress,
                                size: 26,
                              }),
                          ),
                        ),
                      ),
                    );
                  },
                ),
              ),
            ),
          );
        },
        Wc = function () {
          var e = vc().toggleEditModal,
            t = Object(i.c)(mt),
            a = Object(n.useCallback)(
              function () {
                e({ isOpened: !1 });
              },
              [e],
            );
          return r.a.createElement(
            Ta.a,
            { open: t, onClose: a },
            r.a.createElement(Kc, { onSubmit: a }),
          );
        },
        zc = function (e) {
          var t = e.onSubmit,
            a = vc().createNewRepo;
          return {
            handleSubmit: Object(n.useCallback)(
              (function () {
                var e = Object(v.a)(
                  O.a.mark(function e(n, r) {
                    var c, o;
                    return O.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              a({
                                code: n.code,
                                name: n.code,
                                description: n.code,
                                keys: n.entries,
                              })
                            );
                          case 2:
                            (c = e.sent),
                              !(o = c.error) && t
                                ? t()
                                : r.setErrors({ server: o.message });
                          case 5:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                return function (t, a) {
                  return e.apply(this, arguments);
                };
              })(),
              [a, t],
            ),
          };
        },
        Bc = Object(za.a)(function () {
          return {
            progress: { marginLeft: 20 },
            keyTitle: { marginTop: 10, marginBotton: 10, paddingLeft: 10 },
            keyError: { paddingLeft: 10 },
          };
        }),
        Hc = function () {
          Uc();
          var e = Object(i.c)(st);
          return r.a.createElement(
            ac,
            { isLoading: e },
            r.a.createElement(Cc, null),
            r.a.createElement(Wc, null),
          );
        },
        Uc = function () {
          var e = vc(),
            t = e.fetchListRepoWatch,
            a = e.resetState;
          Object(n.useEffect)(
            function () {
              return function () {
                a();
              };
            },
            [a],
          ),
            Object(n.useEffect)(
              function () {
                var e = t();
                return function () {
                  e.abort();
                };
              },
              [t],
            );
        },
        Jc = a(320),
        _c = a(439),
        qc = function (e) {
          return e.storage;
        },
        Gc = Object(qe.createSelector)(qc, function (e) {
          return e.items;
        }),
        Vc = Object(qe.createSelector)(qc, function (e) {
          return e.pager;
        }),
        Yc = Object(qe.createSelector)(qc, function (e) {
          return e.filter;
        }),
        Dc = Object(qe.createSelector)(qc, function (e) {
          return e.loading;
        }),
        Qc = Object(qe.createSelector)(qc, function (e) {
          return e.pagerOptions;
        }),
        Xc = Object(qe.createSelector)(qc, function (e) {
          return e.initial;
        }),
        Zc = Object(qe.createSelector)(Yc, Gc, Dc, function (e, t, a) {
          var n = e.entryName;
          return (!n || 0 === n.length) && !a && 0 === t.length;
        }),
        $c = Object(qe.createSelector)(qc, function (e) {
          return {
            initiated: e.initial,
            loading: e.loading,
            error: e.error,
            data: { items: e.items, pager: e.pager },
          };
        }),
        eo = a(429),
        to = a(430),
        ao = a(431),
        no = a(432),
        ro = a(433),
        co = a(434),
        oo = a(311),
        io = a.n(oo),
        lo = a(312),
        uo = a.n(lo),
        so = function () {
          var e = ar().openKeyPreview;
          return {
            handleOpenKeyPreview: Object(n.useCallback)(
              (function () {
                var t = Object(v.a)(
                  O.a.mark(function t(a) {
                    return O.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2),
                              e(
                                { id: parseInt(a) },
                                { format: 'jwk', privacy: 'public' },
                              )
                            );
                          case 2:
                          case 'end':
                            return t.stop();
                        }
                    }, t);
                  }),
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
              [e],
            ),
          };
        },
        mo = function (e) {
          var t = e.items,
            a = so().handleOpenKeyPreview;
          return r.a.createElement(
            eo.a,
            { component: ra.a },
            r.a.createElement(
              to.a,
              null,
              r.a.createElement(
                ao.a,
                null,
                r.a.createElement(
                  no.a,
                  null,
                  r.a.createElement(ro.a, null, 'Id'),
                  r.a.createElement(ro.a, null, 'Type'),
                  r.a.createElement(ro.a, null, 'Algorithm'),
                  r.a.createElement(ro.a, null, 'Entry name'),
                  r.a.createElement(ro.a, null, 'Entry code'),
                  r.a.createElement(ro.a, null, 'Status'),
                  r.a.createElement(ro.a, null, 'Period'),
                  r.a.createElement(ro.a, { align: 'center' }, 'Actions'),
                ),
              ),
              r.a.createElement(
                co.a,
                null,
                t.map(function (e) {
                  var t = bn()(),
                    n = bn.a.unix(e.expUnix),
                    c = bn.a.unix(e.activateUnix),
                    o = '';
                  return (
                    (o =
                      null !== e.entry.archivedAt
                        ? 'Archived'
                        : Boolean(e.expUnix) && n.isBefore(t)
                        ? 'Expired'
                        : c.isAfter(t)
                        ? 'Awaiting'
                        : 'Active'),
                    r.a.createElement(
                      no.a,
                      { key: e.key.kid },
                      r.a.createElement(ro.a, null, e.key.kid),
                      r.a.createElement(ro.a, null, e.key.kty),
                      r.a.createElement(ro.a, null, e.key.alg),
                      r.a.createElement(ro.a, null, e.entry.name),
                      r.a.createElement(ro.a, null, e.entry.code),
                      r.a.createElement(ro.a, null, o),
                      r.a.createElement(
                        ro.a,
                        null,
                        e.expUnix
                          ? ''
                              .concat(c.format('LL'), ' - ')
                              .concat(n.format('LL'))
                          : 'Non-rotatable',
                      ),
                      r.a.createElement(
                        ro.a,
                        { align: 'center' },
                        r.a.createElement(
                          rn.a,
                          { container: !0, spacing: 2, justify: 'center' },
                          r.a.createElement(
                            rn.a,
                            { item: !0 },
                            r.a.createElement(
                              io.a,
                              {
                                size: 'small',
                                onClick: function () {
                                  return a(e.key.kid);
                                },
                              },
                              r.a.createElement(uo.a, null),
                            ),
                          ),
                        ),
                      ),
                    )
                  );
                }),
              ),
            ),
          );
        },
        fo = function () {
          var e = jt(),
            t = Object(i.c)(Vc),
            a = Object(i.c)(Yc),
            r = Object(i.c)(zt),
            c = Object(n.useCallback)(
              function () {
                return e(ye.resetState());
              },
              [e],
            ),
            o = Object(n.useCallback)(
              function (t) {
                return e(ye.changePager(t));
              },
              [e],
            ),
            l = Object(n.useCallback)(
              function (t) {
                return e(ye.changeFilter(t));
              },
              [e],
            ),
            u = Object(n.useCallback)(
              function (t) {
                return e(ye.fetchStorageItems(t));
              },
              [e, r],
            ),
            s = Object(n.useCallback)(
              function () {
                var e = {
                  page: t.page,
                  perPage: t.perPage,
                  search: a.entryName,
                };
                return u(e);
              },
              [u, t.page, t.perPage, a],
            );
          return {
            resetState: c,
            changePager: o,
            changeFilter: l,
            fetchStorageItems: u,
            fetchStorageItemsWatcher: s,
          };
        },
        po = Object(za.a)(function () {
          return { text: { maxWidth: 600 } };
        }),
        bo = function () {
          var e = po();
          return r.a.createElement(
            ca.a,
            null,
            r.a.createElement(
              Rt.a,
              { component: 'div', variant: 'h4' },
              'Keys storage is empty',
            ),
            r.a.createElement(
              ca.a,
              { className: e.text },
              r.a.createElement(
                'p',
                null,
                'After key entry created, the server will generate and rotate keys. Each generated key will be listed in storage.',
              ),
            ),
          );
        },
        ho = Object(Cn.a)(function () {
          return {
            notFound: { marginTop: 20 },
            footerWrap: { paddingTop: 20, paddingBottom: 20 },
          };
        }),
        go = function () {
          var e = fo(),
            t = e.changePager,
            a = e.changeFilter,
            r = Object(i.c)(Vc),
            c = r.totalItems,
            o = r.perPage,
            l = r.page,
            u = Object(n.useMemo)(
              function () {
                if (void 0 !== c) {
                  var e = Math.ceil(c / o);
                  return Math.min(e, l);
                }
              },
              [c, o, l],
            ),
            s = Object(n.useCallback)(
              function (e) {
                return a({ entryName: e });
              },
              [a],
            ),
            m = Object(n.useCallback)(
              function (e, a) {
                return t({ page: a + 1 });
              },
              [t],
            ),
            d = Object(n.useCallback)(
              function (e) {
                var a = parseInt(e.target.value, 10);
                return t({ perPage: a });
              },
              [t],
            );
          return {
            targetPage: u,
            storagePager: r,
            totalItems: c,
            handlePagerChange: m,
            handleChangeFilterEntryName: s,
            handleChangePerPage: d,
          };
        },
        Oo = function () {
          var e = ho(),
            t = Object(i.c)($c),
            a = t.loading,
            n = t.data,
            c = t.error,
            o = n.items,
            l = Object(i.c)(Yc),
            u = Object(i.c)(Qc),
            s = Object(i.c)(Zc),
            m = go(),
            d = m.targetPage,
            f = m.storagePager,
            p = m.totalItems,
            b = m.handlePagerChange,
            h = m.handleChangePerPage,
            g = m.handleChangeFilterEntryName;
          return c
            ? r.a.createElement(sn.a, { severity: 'error' }, c)
            : r.a.createElement(
                rn.a,
                { container: !0, spacing: 2 },
                !s &&
                  r.a.createElement(
                    rn.a,
                    {
                      container: !0,
                      item: !0,
                      xs: 12,
                      spacing: 2,
                      alignItems: 'center',
                    },
                    r.a.createElement(
                      rn.a,
                      { item: !0 },
                      r.a.createElement(yr, {
                        placeholder: 'Search by entry name',
                        defaultValue: l.entryName,
                        onThrottledChange: g,
                      }),
                    ),
                    r.a.createElement(
                      rn.a,
                      { item: !0 },
                      r.a.createElement(
                        Jc.a,
                        { in: a },
                        r.a.createElement(cn.a, { size: 24 }),
                      ),
                    ),
                  ),
                s &&
                  r.a.createElement(
                    rn.a,
                    { item: !0, xs: 12 },
                    r.a.createElement(bo, null),
                  ),
                void 0 !== p &&
                  p > 0 &&
                  r.a.createElement(
                    rn.a,
                    { item: !0, xs: 12 },
                    r.a.createElement(mo, { items: o }),
                  ),
                !s &&
                  0 === o.length &&
                  r.a.createElement(
                    Rt.a,
                    { className: e.notFound },
                    'No items found',
                  ),
                void 0 !== d &&
                  void 0 !== p &&
                  p > 0 &&
                  r.a.createElement(
                    xr,
                    { id: 'layout_dashboard_footer' },
                    r.a.createElement(
                      on.a,
                      { className: e.footerWrap },
                      r.a.createElement(
                        rn.a,
                        { item: !0, xs: 12 },
                        r.a.createElement(_c.a, {
                          component: 'div',
                          count: p,
                          page: d - 1,
                          rowsPerPageOptions: u,
                          onChangePage: b,
                          rowsPerPage: f.perPage,
                          onChangeRowsPerPage: h,
                        }),
                      ),
                    ),
                  ),
              );
        },
        vo = function () {
          jo();
          var e = Object(i.c)(Xc);
          return r.a.createElement(
            ac,
            { isLoading: e },
            r.a.createElement(Oo, null),
            r.a.createElement(Wr, null),
          );
        },
        jo = function () {
          var e = fo(),
            t = e.fetchStorageItemsWatcher,
            a = e.resetState;
          Object(n.useEffect)(
            function () {
              return function () {
                a();
              };
            },
            [a],
          ),
            Object(n.useEffect)(
              function () {
                var e = t();
                return function () {
                  e.abort();
                };
              },
              [t],
            );
        },
        Eo = function () {
          yo();
          var e = Object(i.c)(Qe);
          return r.a.createElement(
            ac,
            { isLoading: e.archive },
            r.a.createElement(Rr, { archive: !0 }),
            r.a.createElement(Wr, null),
          );
        },
        yo = function () {
          var e = fn(),
            t = e.fetchArchiveListWatch,
            a = e.resetList,
            r = e.routeParser,
            c = e.routeWatcher;
          Object(n.useEffect)(
            function () {
              r();
            },
            [r],
          ),
            Object(n.useEffect)(
              function () {
                c();
              },
              [c],
            ),
            Object(n.useEffect)(
              function () {
                var e = t();
                return function () {
                  e.abort();
                };
              },
              [t],
            ),
            Object(n.useEffect)(
              function () {
                return function () {
                  a();
                };
              },
              [a],
            );
        },
        xo = [
          {
            path: '/',
            exact: !0,
            component: function () {
              return r.a.createElement(s.a, { to: _ });
            },
          },
          {
            path: B,
            component: Ma,
            routes: [{ path: H, exact: !0, component: Aa }],
          },
          {
            path: U,
            component: nn,
            routes: [
              { path: _, component: rc },
              { path: J, component: gc },
              { path: q, component: Hc },
              { path: G, component: vo },
              { path: V, component: Eo },
            ],
          },
        ];
      function ko() {
        var e = Object(Ut.a)([
          '\n  width: 100vw;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n',
        ]);
        return (
          (ko = function () {
            return e;
          }),
          e
        );
      }
      var wo = Jt.a.div(ko()),
        So = function () {
          var e = Gt().fetchMe;
          Object(n.useEffect)(
            function () {
              var t = e();
              return function () {
                t.abort();
              };
            },
            [e],
          );
        },
        Co = function (e) {
          var t = Object(i.c)(Nt);
          return (
            So(),
            t
              ? r.a.createElement(r.a.Fragment, null, e.children)
              : r.a.createElement(wo, null)
          );
        },
        Po = function (e) {
          var t = Object(s.g)(),
            a = Object(i.c)(
              Object(qe.createStructuredSelector)({ isUserAuthorized: Tt }),
            );
          return a.isUserAuthorized && '/auth/login' === t.pathname
            ? r.a.createElement(s.a, { to: '/' })
            : a.isUserAuthorized || '/auth/login' === t.pathname
            ? r.a.createElement(r.a.Fragment, null, e.children)
            : r.a.createElement(s.a, { to: '/auth/login' });
        },
        Io = document.getElementById('root');
      if (Io) {
        var Ro = Object(m.a)();
        o.a.render(
          r.a.createElement(
            i.a,
            { store: vt },
            r.a.createElement(d.a, null),
            r.a.createElement(
              l.a,
              { theme: Ct },
              r.a.createElement(
                s.c,
                { history: Ro },
                r.a.createElement(
                  Co,
                  null,
                  r.a.createElement(Po, null, Object(u.a)(xo)),
                ),
              ),
            ),
          ),
          Io,
        );
      }
    },
  },
  [[324, 1, 2]],
]);
//# sourceMappingURL=main.a96f15a9.chunk.js.map
