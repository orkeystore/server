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
        i = a(13),
        u = a(427),
        l = a(149),
        s = a(105),
        m = a(59),
        f = a(435),
        p = (a(332), a(333), a(33)),
        d = a(293),
        b = a(314),
        h = a(99),
        g = (a(294), a(5)),
        v = a.n(g),
        O = a(9),
        j = a(3),
        E = a(23),
        y = a(128),
        x = a(129),
        k = a(130),
        S = (a(335), a(131)),
        w = a(295),
        C = a(315),
        P = a(316),
        I = (function (e) {
          Object(w.a)(a, e);
          var t = Object(C.a)(a);
          function a(e, n) {
            var r;
            return (
              Object(x.a)(this, a),
              ((r = t.call(this, n)).status = e),
              (r.message = n),
              Object.setPrototypeOf(Object(S.a)(r), a.prototype),
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
                  var e = Object(O.a)(
                    v.a.mark(function e(t, a) {
                      var n, r;
                      return v.a.wrap(
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
                  var e = Object(O.a)(
                    v.a.mark(function e(t, a) {
                      var n, r;
                      return v.a.wrap(
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
                                  pt.dispatch(
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
          var e = Object(O.a)(
            v.a.mark(function e(t) {
              var a;
              return v.a.wrap(function (e) {
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
        M = Object(O.a)(
          v.a.mark(function e() {
            return v.a.wrap(function (e) {
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
        T = Object(O.a)(
          v.a.mark(function e() {
            var t, a;
            return v.a.wrap(function (e) {
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
                      e.abrupt('return', a)
                    );
                  case 6:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        ),
        F = (function () {
          var e = Object(O.a)(
            v.a.mark(function e(t) {
              var a;
              return v.a.wrap(function (e) {
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
          var e = Object(O.a)(
            v.a.mark(function e(t) {
              var a;
              return v.a.wrap(function (e) {
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
        N = {
          remove: (function () {
            var e = Object(O.a)(
              v.a.mark(function e(t) {
                var a;
                return v.a.wrap(function (e) {
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
          account: F,
          accounts: L,
          login: A,
          logout: M,
          me: T,
        },
        K = a(66),
        z = a.n(K),
        B = {
          auth: N,
          keys: {
            list: Object(O.a)(
              v.a.mark(function e() {
                var t,
                  a,
                  n,
                  r,
                  c,
                  o,
                  i,
                  u = arguments;
                return v.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (t = u.length > 0 && void 0 !== u[0] ? u[0] : {}),
                          (a = t.page),
                          (n = t.perPage),
                          (r = t.search),
                          (c = t.isArchived),
                          (o = z.a.stringify(
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
              var e = Object(O.a)(
                v.a.mark(function e(t) {
                  var a;
                  return v.a.wrap(function (e) {
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
              var e = Object(O.a)(
                v.a.mark(function e(t) {
                  var a;
                  return v.a.wrap(function (e) {
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
              var e = Object(O.a)(
                v.a.mark(function e(t) {
                  var a;
                  return v.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (a = z.a.stringify(t, { addQueryPrefix: !0 })),
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
              var e = Object(O.a)(
                v.a.mark(function e(t) {
                  var a;
                  return v.a.wrap(function (e) {
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
              var e = Object(O.a)(
                v.a.mark(function e(t) {
                  var a;
                  return v.a.wrap(function (e) {
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
              var e = Object(O.a)(
                v.a.mark(function e(t) {
                  var a, n, r;
                  return v.a.wrap(function (e) {
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
              var e = Object(O.a)(
                v.a.mark(function e(t) {
                  var a, n, r;
                  return v.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (a = t.ids),
                            (n = z.a.stringify(
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
              var e = Object(O.a)(
                v.a.mark(function e(t) {
                  var a;
                  return v.a.wrap(function (e) {
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
              var e = Object(O.a)(
                v.a.mark(function e() {
                  var t,
                    a,
                    n,
                    r = arguments;
                  return v.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = r.length > 0 && void 0 !== r[0] ? r[0] : {}),
                            (a = z.a.stringify(t, { addQueryPrefix: !0 })),
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
              var e = Object(O.a)(
                v.a.mark(function e(t) {
                  var a;
                  return v.a.wrap(function (e) {
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
        U = '/auth',
        W = '/auth/login',
        H = '/dashboard',
        J = '/dashboard/accounts',
        G = '/dashboard/keys',
        _ = '/dashboard/repos',
        V = '/dashboard/journal',
        q = '/dashboard/archive',
        D = [
          {
            id: 1,
            path: G,
            name: 'keys',
            title: 'Active keys',
            icon: 'vpn_key',
            isAdminOnly: !1,
          },
          {
            id: 3,
            path: q,
            name: 'archive',
            title: 'Archived keys',
            icon: 'unarchive',
            isAdminOnly: !1,
          },
          {
            id: 2,
            path: _,
            name: 'repos',
            title: 'Repositories',
            icon: 'apps',
            isAdminOnly: !1,
          },
          {
            id: 4,
            path: V,
            name: 'storage',
            title: 'Storage',
            icon: 'inbox',
            isAdminOnly: !1,
          },
        ],
        Y = {
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
              n = D.filter(function (e) {
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
            var e = Object(O.a)(
              v.a.mark(function e(t) {
                return v.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), B.auth.login(t);
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
          Object(O.a)(
            v.a.mark(function e() {
              return v.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), B.auth.me();
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
          Object(O.a)(
            v.a.mark(function e() {
              return v.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), B.auth.logout();
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
          initialState: Y,
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
                    Object(j.a)({}, Y),
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
            var e = Object(O.a)(
              v.a.mark(function e(t, a) {
                var n;
                return v.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), B.auth.account(t);
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
            var e = Object(O.a)(
              v.a.mark(function e(t, a) {
                var n;
                return v.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), B.auth.remove(t);
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
          Object(O.a)(
            v.a.mark(function e() {
              var t;
              return v.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), B.auth.accounts();
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
        ue = oe.reducer,
        le = [4, 8, 16],
        se = {
          create: { error: null, loading: !1 },
          list: {
            error: null,
            loading: !1,
            items: [],
            pager: { page: 1, perPage: le[0] },
            pagerOptions: le,
          },
        },
        me = {
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
                  { search: t.payload.search },
                ),
              },
            );
          },
        },
        fe = Object(E.a)(
          ''.concat('REPOS', '/FETCH_LIST'),
          (function () {
            var e = Object(O.a)(
              v.a.mark(function e(t) {
                return v.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), B.repos.list(t);
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
        pe = Object(E.a)(
          ''.concat('REPOS', '/SUBMIT_REPO'),
          (function () {
            var e = Object(O.a)(
              v.a.mark(function e(t) {
                var a;
                return v.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), B.repos.create(t);
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
        de = Object(E.a)(
          ''.concat('REPOS', '/REMOVE_REPOS'),
          (function () {
            var e = Object(O.a)(
              v.a.mark(function e(t) {
                var a;
                return v.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), B.repos.remove(t);
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
            e.addCase(pe.fulfilled, function (e, t) {
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
              e.addCase(fe.fulfilled, function (e, t) {
                return Object(j.a)(
                  Object(j.a)({}, e),
                  {},
                  {
                    list: Object(j.a)(
                      Object(j.a)({}, e.list),
                      {},
                      {
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
          { fetchCreateRepo: pe, fetchListRepo: fe, fetchRemoveRepos: de },
        ),
        ge = be.reducer,
        ve = {
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
                pager: Object(j.a)(Object(j.a)({}, e.pager), {}, { page: 1 }),
                filter: Object(j.a)(Object(j.a)({}, e.filter), t.payload),
              },
            );
          },
        },
        Oe = Object(E.a)(
          ''.concat('STORAGE', '/FETCH_STORAGE'),
          (function () {
            var e = Object(O.a)(
              v.a.mark(function e(t) {
                return v.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), B.keys.storage(t);
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
        je = Object(E.b)({
          initialState: {
            items: [],
            pager: { page: 1, perPage: 10 },
            pagerOptions: [10, 25, 50],
            filter: {},
          },
          name: 'STORAGE',
          reducers: ve,
          extraReducers: function (e) {
            e.addCase(Oe.fulfilled, function (e, t) {
              var a = t.payload,
                n = a.items,
                r = a.pager;
              return Object(j.a)(
                Object(j.a)({}, e),
                {},
                { items: n, pager: r },
              );
            });
          },
        }),
        Ee = Object(j.a)(
          Object(j.a)({}, je.actions),
          {},
          { fetchStorageItems: Oe },
        ),
        ye = je.reducer,
        xe = {
          list: {
            loading: { keys: !0 },
            errors: { keys: null },
            items: [],
            pager: { page: 1, perPage: 4 },
            pagerOptions: le,
          },
          edit: { loading: !1, error: null },
        },
        ke = {
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
          reset: function () {
            return xe;
          },
        },
        Se = Object(E.a)(
          ''.concat('KEYS', '/SUBMIT_KEY'),
          (function () {
            var e = Object(O.a)(
              v.a.mark(function e(t) {
                var a;
                return v.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), B.keys.create(t);
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
        we = Object(E.a)(
          ''.concat('KEYS', '/FETCH_KEYS'),
          (function () {
            var e = Object(O.a)(
              v.a.mark(function e(t) {
                return v.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), B.keys.list(t);
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
        Ce = Object(E.a)(
          ''.concat('KEYS', '/REMOVE_KEY'),
          (function () {
            var e = Object(O.a)(
              v.a.mark(function e(t) {
                var a;
                return v.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), B.keys.remove(t);
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
        Pe = Object(E.a)(
          ''.concat('KEYS', '/ARCHIVE_KEY'),
          (function () {
            var e = Object(O.a)(
              v.a.mark(function e(t) {
                return v.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), B.keys.archive(t);
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
        Ie = Object(E.a)(
          ''.concat('KEYS', '/RESTORE_KEY'),
          (function () {
            var e = Object(O.a)(
              v.a.mark(function e(t) {
                return v.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), B.keys.restore(t);
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
        Re = Object(E.b)({
          initialState: xe,
          name: 'KEYS',
          reducers: ke,
          extraReducers: function (e) {
            e.addCase(we.pending, function (e) {
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
              e.addCase(we.fulfilled, function (e, t) {
                var a = t.payload,
                  n = a.items,
                  r = a.pager;
                return Object(j.a)(
                  Object(j.a)({}, e),
                  {},
                  {
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
              e.addCase(Ce.fulfilled, function (e, t) {
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
              e.addCase(Pe.fulfilled, function (e) {
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
                      { error: !0, loading: !1, item: t.payload.key },
                    ),
                  },
                );
              });
          },
        }),
        Ae = Object(j.a)(
          Object(j.a)({}, Re.actions),
          {},
          {
            fetchKeysList: we,
            fetchRemoveKeyItem: Ce,
            fetchArchiveKeyItem: Pe,
            fetchRestoreKeyItem: Ie,
            fetchCreateKey: Se,
          },
        ),
        Me = Re.reducer,
        Te = {
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
        Fe = Object(E.a)(
          ''.concat('KEY_PREVIEW', '/FETCH_KEY'),
          (function () {
            var e = Object(O.a)(
              v.a.mark(function e(t, a) {
                var n;
                return v.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), B.keys.preview(t);
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
        Le = Object(E.b)({
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
          reducers: Te,
          extraReducers: function (e) {
            e.addCase(Fe.fulfilled, function (e, t) {
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
        Ne = Object(j.a)(
          Object(j.a)({}, Le.actions),
          {},
          { fetchKeyPreview: Fe },
        ),
        Ke = {
          session: ae,
          keys: Me,
          accounts: ue,
          repos: ge,
          storage: ye,
          keyPreview: Le.reducer,
        },
        ze = Object(p.combineReducers)(Ke),
        Be = a(27),
        Ue = v.a.mark(He),
        We = v.a.mark(Je);
      function He() {
        return v.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(Be.a)(Je);
              case 2:
              case 'end':
                return e.stop();
            }
        }, Ue);
      }
      function Je() {
        return v.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2),
                  Object(Be.d)(
                    [te.fetchLoginUser.fulfilled, te.fetchMe.fulfilled],
                    v.a.mark(function e() {
                      return v.a.wrap(function (e) {
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
        }, We);
      }
      var Ge = a(17),
        _e = function (e) {
          return e.keys;
        },
        Ve =
          (Object(Ge.createSelector)(_e, function (e) {
            return e.list.items;
          }),
          Object(Ge.createSelector)(_e, function (e) {
            return e.list;
          })),
        qe = Object(Ge.createSelector)(_e, function (e) {
          return e.list.pager;
        }),
        De = Object(Ge.createSelector)(_e, function (e) {
          return e.list.query;
        }),
        Ye = Object(Ge.createSelector)(_e, function (e) {
          return e.list.pagerOptions;
        }),
        Qe = Object(Ge.createSelector)(De, Ve, function (e, t) {
          return (
            (!e || 0 === e.length) && !t.loading.keys && 0 === t.items.length
          );
        }),
        Xe = Object(Ge.createSelector)(Ve, function (e) {
          return {
            loading: e.loading.keys,
            error: e.loading.keys,
            data: { items: e.items },
            pager: e.pager,
          };
        }),
        Ze = v.a.mark(et),
        $e = v.a.mark(tt);
      function et() {
        return v.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(Be.a)(tt);
              case 2:
              case 'end':
                return e.stop();
            }
        }, Ze);
      }
      function tt() {
        return v.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2),
                  Object(Be.d)(
                    [
                      Ae.fetchCreateKey.fulfilled,
                      Ae.fetchRemoveKeyItem.fulfilled,
                      Ae.fetchArchiveKeyItem.fulfilled,
                      Ae.fetchRestoreKeyItem.fulfilled,
                    ],
                    v.a.mark(function e(t) {
                      var a, n, r, c;
                      return v.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), Object(Be.c)(qe);
                            case 2:
                              if (
                                ((a = e.sent),
                                (n = [
                                  Ae.fetchRestoreKeyItem.fulfilled.toString(),
                                  Ae.fetchRemoveKeyItem.fulfilled.toString(),
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
                                Object(Be.b)(Ae.changePager({ page: c }))
                              );
                            case 10:
                              e.next = 14;
                              break;
                            case 12:
                              return (
                                (e.next = 14), Object(Be.b)(Ae.fetchKeysList(r))
                              );
                            case 14:
                              e.next = 18;
                              break;
                            case 16:
                              return (
                                (e.next = 18), Object(Be.b)(Ae.fetchKeysList(r))
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
        }, $e);
      }
      var at = function (e) {
          return e.repos;
        },
        nt =
          (Object(Ge.createSelector)(at, function (e) {
            return e.create;
          }),
          Object(Ge.createSelector)(at, function (e) {
            return e.list;
          })),
        rt = Object(Ge.createSelector)(nt, function (e) {
          return e.pager;
        }),
        ct = Object(Ge.createSelector)(nt, function (e) {
          return e.search;
        }),
        ot =
          (Object(Ge.createSelector)(nt, function (e) {
            return e.pagerOptions;
          }),
          Object(Ge.createSelector)(nt, function (e) {
            var t = e.search,
              a = e.loading,
              n = e.items;
            return (!t || 0 === t.length) && !a && 0 === n.length;
          })),
        it = v.a.mark(lt),
        ut = v.a.mark(st);
      function lt() {
        return v.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(Be.a)(st);
              case 2:
              case 'end':
                return e.stop();
            }
        }, it);
      }
      function st() {
        return v.a.wrap(function (e) {
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
                    v.a.mark(function e(t) {
                      var a, n, r, c, o;
                      return v.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), Object(Be.c)(rt);
                            case 2:
                              return (
                                (a = e.sent), (e.next = 5), Object(Be.c)(ct)
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
        }, ut);
      }
      var mt = v.a.mark(ft);
      function ft() {
        return v.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(Be.a)(He);
              case 2:
                return (e.next = 4), Object(Be.a)(et);
              case 4:
                return (e.next = 6), Object(Be.a)(lt);
              case 6:
              case 'end':
                return e.stop();
            }
        }, mt);
      }
      var pt = (function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = Object(b.a)(),
            a = [h.a, t],
            n = p.applyMiddleware.apply(void 0, a),
            r = Object(p.createStore)(ze, e, Object(d.composeWithDevTools)(n));
          return t.run(ft), r;
        })(),
        dt = function () {
          return Object(i.b)();
        },
        bt = a(313),
        ht = a(12),
        gt = '#FFFFFF',
        vt = {
          black: '#000000',
          white: gt,
          primary: {
            contrastText: gt,
            dark: ht.a.indigo[900],
            main: ht.a.indigo[500],
            light: ht.a.indigo[100],
          },
          secondary: {
            contrastText: gt,
            dark: ht.a.blue[900],
            main: ht.a.blue.A400,
            light: ht.a.blue.A400,
          },
          error: {
            contrastText: gt,
            dark: ht.a.red[900],
            main: ht.a.red[600],
            light: ht.a.red[400],
          },
          text: {
            primary: ht.a.blueGrey[900],
            secondary: ht.a.blueGrey[600],
            link: ht.a.blue[600],
          },
          link: ht.a.blue[800],
          icon: ht.a.blueGrey[600],
          background: { default: '#F4F6F8', paper: gt },
          divider: ht.a.grey[200],
        },
        Ot = function (e) {
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
        jt = {
          MuiTableHead: { root: { backgroundColor: ht.a.grey[50] } },
          MuiTableCell: {
            root: { fontSize: 14 },
            body: { borderBottom: '1px solid '.concat(ht.a.grey[200]) },
            head: {
              paddingTop: 10,
              paddingBottom: 10,
              borderBottom: '1px solid '.concat(ht.a.grey[200]),
              color: ht.a.blueGrey[500],
            },
          },
          MuiCardHeader: {
            root: { borderBottom: '1px solid '.concat(ht.a.grey[200]) },
            action: { marginRight: 0, marginTop: 0 },
          },
        },
        Et = Object(bt.a)({ palette: vt, typography: Ot, overrides: jt }),
        yt = a(396),
        xt = a(398),
        kt = a(50),
        St = a(399),
        wt = function (e) {
          return e.session;
        },
        Ct = Object(Ge.createSelector)(wt, function (e) {
          return e.isUserAuthorized;
        }),
        Pt = Object(Ge.createSelector)(wt, function (e) {
          return e.isAlreadyFetched;
        }),
        It = Object(Ge.createSelector)(wt, function (e) {
          return e.isSessionExpired;
        }),
        Rt = Object(Ge.createSelector)(wt, function (e) {
          return e.account;
        }),
        At = Object(Ge.createSelector)(wt, function (e) {
          return e.host;
        }),
        Mt = Object(Ge.createSelector)(wt, function (e) {
          return e.mainMenuLinks;
        }),
        Tt = Object(Ge.createSelector)(wt, function (e) {
          return e.errors;
        }),
        Ft =
          (Object(Ge.createSelector)(wt, function (e) {
            return e.token || null;
          }),
          Object(Ge.createSelector)(wt, function (e) {
            return e.privateHost;
          })),
        Lt = Object(Ge.createSelector)(wt, function (e) {
          return e.publicHost;
        }),
        Nt = a(22),
        Kt = a(24);
      function zt() {
        var e = Object(Nt.a)(['\n  flex-grow: 1;\n']);
        return (
          (zt = function () {
            return e;
          }),
          e
        );
      }
      var Bt = Kt.a.div(zt()),
        Ut = function () {
          var e = dt();
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
        Wt = function () {
          return { logout: Ut().logout };
        },
        Ht = function () {
          var e = Object(i.c)(Rt),
            t = Wt().logout,
            a = void 0 !== e;
          return r.a.createElement(
            yt.a,
            { position: 'static' },
            r.a.createElement(
              xt.a,
              null,
              r.a.createElement(
                kt.a,
                { variant: 'h4', color: 'inherit' },
                'Orkeystore',
              ),
              r.a.createElement(Bt, null),
              a &&
                r.a.createElement(
                  St.a,
                  { color: 'inherit', onClick: t },
                  'Logout',
                ),
            ),
          );
        };
      function Jt() {
        var e = Object(Nt.a)([
          '\n  flex-grow: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n',
        ]);
        return (
          (Jt = function () {
            return e;
          }),
          e
        );
      }
      function Gt() {
        var e = Object(Nt.a)(['\n']);
        return (
          (Gt = function () {
            return e;
          }),
          e
        );
      }
      function _t() {
        var e = Object(Nt.a)([
          '\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n',
        ]);
        return (
          (_t = function () {
            return e;
          }),
          e
        );
      }
      var Vt = Kt.a.div(_t()),
        qt = Kt.a.div(Gt()),
        Dt = Kt.a.div(Jt()),
        Yt = a(25),
        Qt = a(301),
        Xt = a.n(Qt),
        Zt = a(106),
        $t = a(440);
      function ea() {
        var e = Object(Nt.a)([
          '\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n',
        ]);
        return (
          (ea = function () {
            return e;
          }),
          e
        );
      }
      function ta() {
        var e = Object(Nt.a)([
          '\n  padding-left: 15px;\n  padding-top: 2px;\n',
        ]);
        return (
          (ta = function () {
            return e;
          }),
          e
        );
      }
      function aa() {
        var e = Object(Nt.a)([
          '\n  padding: 10px;\n  flex-grow: 1;\n  background-color: ',
          ';\n  color: ',
          ';\n',
        ]);
        return (
          (aa = function () {
            return e;
          }),
          e
        );
      }
      var na = Object(Kt.a)(Zt.a)(
          aa(),
          Et.palette.error.light,
          Et.palette.error.contrastText,
        ),
        ra = Object(Kt.a)(kt.a)(ta()),
        ca = Object(Kt.a)($t.a)(ea()),
        oa = function (e) {
          return r.a.createElement(
            na,
            Object.assign({ elevation: e.elevation }, e.root),
            r.a.createElement(
              ca,
              null,
              r.a.createElement(Xt.a, { color: 'inherit' }),
              r.a.createElement(ra, { color: 'inherit' }, e.children),
            ),
          );
        };
      oa.defaultProps = { elevation: 0, severnity: 'error' };
      var ia = oa;
      function ua() {
        var e = Object(Nt.a)(['\n  width: 100%;\n']);
        return (
          (ua = function () {
            return e;
          }),
          e
        );
      }
      function la() {
        var e = Object(Nt.a)([
          '\n  flex-grow: 1;\n  margin-bottom: 10px;\n  &:last-child {\n    margin-bottom: 0;\n  }\n',
        ]);
        return (
          (la = function () {
            return e;
          }),
          e
        );
      }
      function sa() {
        var e = Object(Nt.a)([
          '\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n  &:last-child {\n    margin-bottom: 0;\n  }\n',
        ]);
        return (
          (sa = function () {
            return e;
          }),
          e
        );
      }
      function ma() {
        var e = Object(Nt.a)(['']);
        return (
          (ma = function () {
            return e;
          }),
          e
        );
      }
      function fa() {
        var e = Object(Nt.a)(['\n  margin-bottom: 20px;\n']);
        return (
          (fa = function () {
            return e;
          }),
          e
        );
      }
      function pa() {
        var e = Object(Nt.a)(['\n  width: 300px;\n']);
        return (
          (pa = function () {
            return e;
          }),
          e
        );
      }
      var da = Kt.a.div(pa()),
        ba = (Kt.a.div(fa()), Kt.a.div(ma())),
        ha = Kt.a.div(sa()),
        ga = Kt.a.div(la()),
        va = Object(Kt.a)(St.a)(ua()),
        Oa = a(401),
        ja = a(402),
        Ea = a(403),
        ya = a(404),
        xa = { username: '', password: '' },
        ka = function () {
          var e = Ut().fetchLoginUser,
            t = Object(n.useCallback)(
              (function () {
                var t = Object(O.a)(
                  v.a.mark(function t(a) {
                    return v.a.wrap(function (t) {
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
        Sa = function () {
          var e = Object(i.c)(Tt),
            t = ka(),
            a = t.handleSubmit,
            n = t.validate;
          return r.a.createElement(
            Oa.a,
            null,
            r.a.createElement(ja.a, {
              title: r.a.createElement(kt.a, { variant: 'h3' }, 'Sign in'),
            }),
            r.a.createElement(
              Ea.a,
              null,
              r.a.createElement(
                da,
                null,
                r.a.createElement(
                  ba,
                  null,
                  r.a.createElement(
                    Yt.c,
                    { initialValues: xa, validate: n, onSubmit: a },
                    function (t) {
                      return r.a.createElement(
                        Yt.b,
                        null,
                        r.a.createElement(
                          ha,
                          null,
                          r.a.createElement(
                            Yt.a,
                            { name: 'username' },
                            function (e) {
                              var t = e.field,
                                a = e.meta;
                              return r.a.createElement(
                                ya.a,
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
                          ha,
                          null,
                          r.a.createElement(
                            Yt.a,
                            { name: 'password' },
                            function (e) {
                              var t = e.field,
                                a = e.meta;
                              return r.a.createElement(
                                ya.a,
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
                            ha,
                            null,
                            r.a.createElement(ia, null, e.loginForm),
                          ),
                        r.a.createElement(
                          ha,
                          null,
                          r.a.createElement(
                            ga,
                            null,
                            r.a.createElement(
                              va,
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
        wa = function () {
          return r.a.createElement(
            Vt,
            null,
            r.a.createElement(qt, null, r.a.createElement(Ht, null)),
            r.a.createElement(Dt, null, r.a.createElement(Sa, null)),
          );
        },
        Ca = a(406),
        Pa = function () {
          var e = Object(i.c)(It);
          return r.a.createElement(
            Ca.a,
            { open: e },
            r.a.createElement(Sa, null),
          );
        },
        Ia = a(407),
        Ra = a(380),
        Aa = a(383),
        Ma = a(408),
        Ta = a(410),
        Fa = a(409),
        La = Object(Ia.a)(function () {
          return { iconWrap: { maxWidth: 40, minWidth: 40 } };
        }),
        Na = function () {
          var e = Object(s.f)(),
            t = Object(i.c)(Mt),
            a = La();
          return r.a.createElement(
            Ra.a,
            { component: 'nav' },
            t.map(function (t) {
              return r.a.createElement(
                Aa.a,
                {
                  key: t.id,
                  button: !0,
                  onClick: function () {
                    return e.push(t.path);
                  },
                },
                r.a.createElement(
                  Ma.a,
                  { className: a.iconWrap },
                  r.a.createElement(Fa.a, null, t.icon),
                ),
                r.a.createElement(Ta.a, null, t.title),
              );
            }),
          );
        };
      function Ka() {
        var e = Object(Nt.a)([
          '\n  display: flex;\n  background-color: ',
          ';\n  flex: 1 1 auto;\n  min-width: 0;\n',
        ]);
        return (
          (Ka = function () {
            return e;
          }),
          e
        );
      }
      function za() {
        var e = Object(Nt.a)([
          '\n  flex: 0 0 250px;\n  background-color: ',
          ';\n',
        ]);
        return (
          (za = function () {
            return e;
          }),
          e
        );
      }
      function Ba() {
        var e = Object(Nt.a)([
          '\n  flex: 1 1 auto;\n  display: flex;\n  min-width: 0;\n',
        ]);
        return (
          (Ba = function () {
            return e;
          }),
          e
        );
      }
      function Ua() {
        var e = Object(Nt.a)(['']);
        return (
          (Ua = function () {
            return e;
          }),
          e
        );
      }
      function Wa() {
        var e = Object(Nt.a)([
          '\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n',
        ]);
        return (
          (Wa = function () {
            return e;
          }),
          e
        );
      }
      var Ha = Kt.a.div(Wa()),
        Ja = Kt.a.div(Ua()),
        Ga = Kt.a.div(Ba()),
        _a = Kt.a.div(za(), Et.palette.background.paper),
        Va = Kt.a.main(Ka(), Et.palette.background.default),
        qa = function (e) {
          var t = e.route;
          return r.a.createElement(
            Ha,
            null,
            r.a.createElement(Pa, null),
            r.a.createElement(Ja, null, r.a.createElement(Ht, null)),
            r.a.createElement(
              Ga,
              null,
              r.a.createElement(_a, null, r.a.createElement(Na, null)),
              r.a.createElement(
                Va,
                null,
                t && t.routes && Object(l.a)(t.routes),
              ),
            ),
          );
        },
        Da = a(428),
        Ya = a(192),
        Qa = a(26),
        Xa = a(413),
        Za = a(91),
        $a = a.n(Za),
        en = a(437),
        tn = a(436),
        an = function (e) {
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
        nn = function () {
          var e = dt(),
            t = Object(i.c)(qe),
            a = Object(i.c)(De),
            r = Object(n.useCallback)(
              function (t) {
                return e(Ae.fetchKeysList(t));
              },
              [e],
            ),
            c = Object(n.useCallback)(
              function () {
                var e = { page: t.page, perPage: t.perPage, search: a };
                return r(e);
              },
              [r, t.page, t.perPage, a],
            ),
            o = Object(n.useCallback)(
              function () {
                var e = {
                  page: t.page,
                  perPage: t.perPage,
                  search: a,
                  isArchived: !0,
                };
                return r(e);
              },
              [r, t.page, t.perPage, a],
            ),
            u = Object(n.useCallback)(
              (function () {
                var t = Object(O.a)(
                  v.a.mark(function t(a) {
                    var n, r, c;
                    return v.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (n = an(64)),
                              (t.next = 3),
                              e(
                                Ae.fetchCreateKey(
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
            l = Object(n.useCallback)(
              (function () {
                var t = Object(O.a)(
                  v.a.mark(function t(a) {
                    return v.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), e(Ae.fetchRemoveKeyItem(a));
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
            s = Object(n.useCallback)(
              function (t) {
                return e(Ae.fetchArchiveKeyItem(t));
              },
              [e],
            ),
            m = Object(n.useCallback)(
              function (t) {
                return e(Ae.fetchRestoreKeyItem(t));
              },
              [e],
            ),
            f = Object(n.useCallback)(
              function (t) {
                return e(Ae.changePager(t));
              },
              [e],
            ),
            p = Object(n.useCallback)(
              function (t) {
                return e(Ae.changeSearch(t));
              },
              [e],
            ),
            d = Object(n.useCallback)(
              (function () {
                var e = Object(O.a)(
                  v.a.mark(function e(t) {
                    return v.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return e.abrupt('return', B.keys.list(t));
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
            b = Object(n.useCallback)(
              (function () {
                var e = Object(O.a)(
                  v.a.mark(function e(t) {
                    return v.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), B.keys.byIds(t);
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
            );
          return {
            resetList: Object(n.useCallback)(
              function () {
                return e(Ae.reset());
              },
              [e],
            ),
            changePager: f,
            changeSearch: p,
            fetchKeysList: r,
            fetchKeysListWatch: c,
            fetchArchiveListWatch: o,
            fetchCreateKey: u,
            fetchRemoveKeyItem: l,
            fetchRestoreKeyItem: m,
            fetchArchiveKeyItem: s,
            requestKeysList: d,
            requestKeysByIds: b,
          };
        },
        rn = a(414),
        cn = a(438),
        on = a(415),
        un = a(188),
        ln = a.n(un),
        sn = a(412),
        mn = a(303),
        fn = a(411),
        pn = function () {
          return {
            styles: dn(),
            menuStaticProps: Object(n.useMemo)(function () {
              return {
                anchorOrigin: { horizontal: 'right', vertical: 'top' },
                transformOrigin: { horizontal: 'right', vertical: 'top' },
              };
            }, []),
          };
        },
        dn = Object(Ia.a)(function () {
          return { menu: { width: 150 } };
        }),
        bn = function (e) {
          var t = pn(),
            a = t.menuStaticProps,
            n = t.styles;
          return r.a.createElement(
            mn.a,
            Object.assign({}, a, {
              keepMounted: !0,
              anchorEl: e.anchorEl,
              className: n.menu,
              open: Boolean(e.anchorEl),
              onClose: e.handleClose,
            }),
            e.menu.map(function (t) {
              return r.a.createElement(
                fn.a,
                {
                  key: t.id,
                  onClick: function () {
                    e.onSelectMenuItem && e.onSelectMenuItem(t),
                      e.handleClose();
                  },
                },
                r.a.createElement(kt.a, { variant: 'button' }, t.label),
              );
            }),
          );
        },
        hn = function (e) {
          var t = e.menu,
            a = e.currentMenuLabel,
            n = e.fieldProps,
            c = e.inputProps,
            o = e.disabled,
            i = r.a.useState(null),
            u = Object(Qa.a)(i, 2),
            l = u[0],
            s = u[1];
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              ya.a,
              Object.assign({ fullWidth: !0 }, n, {
                variant: 'outlined',
                disabled: o,
                InputProps: Object(j.a)(
                  {
                    endAdornment: a
                      ? r.a.createElement(
                          sn.a,
                          { position: 'end' },
                          e.beforeOptions,
                          r.a.createElement(
                            St.a,
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
              r.a.createElement(bn, {
                anchorEl: l,
                menu: t,
                onSelectMenuItem: e.onSelectMenuItem,
                handleClose: function () {
                  s(null);
                },
              }),
          );
        };
      function gn() {
        var e = Object(Nt.a)(['[w]*'], ['[\\w]*']);
        return (
          (gn = function () {
            return e;
          }),
          e
        );
      }
      function vn() {
        var e = Object(Nt.a)(['[d,.]*'], ['[\\d,.]*']);
        return (
          (vn = function () {
            return e;
          }),
          e
        );
      }
      var On = { h: 'hours', d: 'days', w: 'weeks', m: 'months' },
        jn = { name: '', code: '', rotation: '', unit: 'd', rotatable: '1' },
        En = function (e) {
          var t = nn().fetchCreateKey,
            a = Object(n.useMemo)(function () {
              return Object.keys(On).map(function (e) {
                return { id: e, label: On[e] };
              });
            }, []),
            r = e.onSubmit,
            c = Object(n.useCallback)(
              (function () {
                var e = Object(O.a)(
                  v.a.mark(function e(a, n) {
                    var c, o;
                    return v.a.wrap(function (e) {
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
        yn = ln()({ regex: String.raw(vn()) }),
        xn = ln()({ regex: String.raw(gn()) }),
        kn = Object(Ia.a)(function () {
          return {
            textfield: { width: '100%' },
            progress: { marginLeft: 20 },
            menu: { width: 150, marginLeft: 10 },
          };
        }),
        Sn = function (e) {
          var t = kn(),
            a = En(e),
            n = a.menuItems,
            c = a.validate,
            o = a.handleSubmit;
          return r.a.createElement(
            Oa.a,
            { style: { width: 400 } },
            r.a.createElement(ja.a, {
              title: r.a.createElement(
                kt.a,
                { variant: 'h3' },
                'Add new key entry',
              ),
            }),
            r.a.createElement(
              Ea.a,
              null,
              r.a.createElement(
                Yt.c,
                { initialValues: jn, validate: c, onSubmit: o },
                function (e) {
                  var a = e.isSubmitting;
                  return r.a.createElement(
                    Yt.b,
                    null,
                    r.a.createElement(
                      Xa.a,
                      { container: !0, spacing: 2 },
                      r.a.createElement(
                        Xa.a,
                        { item: !0, xs: 12 },
                        r.a.createElement(Yt.a, { name: 'name' }, function (e) {
                          var a = e.field,
                            n = e.meta;
                          return r.a.createElement(
                            ya.a,
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
                        Xa.a,
                        { item: !0, xs: 12 },
                        r.a.createElement(Yt.a, { name: 'code' }, function (e) {
                          var a = e.field,
                            n = e.meta;
                          return r.a.createElement(
                            ya.a,
                            Object.assign(
                              {
                                className: t.textfield,
                                error: Boolean(n.touched && n.error),
                                label: 'Unique code',
                                variant: 'outlined',
                                InputProps: {
                                  inputRef: function (e) {
                                    e && xn.mask(e);
                                  },
                                },
                              },
                              a,
                            ),
                          );
                        }),
                      ),
                      r.a.createElement(
                        Xa.a,
                        { item: !0, xs: 12 },
                        r.a.createElement(Yt.a, { name: 'rotation' }, function (
                          t,
                        ) {
                          var a = t.field,
                            c = t.meta,
                            o = '1' === e.values.rotatable;
                          return r.a.createElement(hn, {
                            menu: n,
                            onSelectMenuItem: function (t) {
                              'string' === typeof t.id &&
                                e.setFieldValue('unit', t.id);
                            },
                            disabled: !o,
                            currentMenuLabel: On[e.values.unit],
                            inputProps: {
                              inputRef: function (e) {
                                e && yn.mask(e);
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
                        Xa.a,
                        { item: !0, xs: 12 },
                        r.a.createElement(
                          Yt.a,
                          { name: 'rotatable' },
                          function (t) {
                            var a = t.field;
                            return r.a.createElement(rn.a, {
                              control: r.a.createElement(cn.a, {
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
                          Xa.a,
                          {
                            item: !0,
                            container: !0,
                            xs: 12,
                            style: { alignItems: 'center' },
                          },
                          r.a.createElement(
                            ia,
                            { root: { style: { flexGrow: 1 } } },
                            e.errors.server,
                          ),
                        ),
                      r.a.createElement(
                        Xa.a,
                        {
                          item: !0,
                          container: !0,
                          xs: 12,
                          style: { alignItems: 'center' },
                        },
                        r.a.createElement(
                          St.a,
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
                            r.a.createElement(on.a, {
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
        wn = a(63),
        Cn = a.n(wn),
        Pn = a(422),
        In = a(441),
        Rn = a(424),
        An = a(425),
        Mn = a(426),
        Tn = a(189),
        Fn = a.n(Tn),
        Ln = a(307),
        Nn = a.n(Ln),
        Kn = a(384),
        zn = a(305),
        Bn = a.n(zn),
        Un = a(416),
        Wn = a(304),
        Hn = a.n(Wn),
        Jn = function (e) {
          var t = Object(n.useState)(!1),
            a = Object(Qa.a)(t, 2),
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
        Gn = function (e) {
          var t = Jn(e),
            a = t.isCopied,
            n = t.handleCopy,
            c = t.handleCloseSnack;
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              Un.a,
              {
                anchorOrigin: { horizontal: 'center', vertical: 'bottom' },
                open: a,
                autoHideDuration: 1e3,
                onClose: c,
              },
              r.a.createElement(
                en.a,
                { onClose: c, severity: 'success' },
                r.a.createElement(
                  kt.a,
                  { variant: 'h6', component: 'div' },
                  e.message,
                ),
              ),
            ),
            r.a.createElement(
              Kn.a,
              { onClick: n },
              r.a.createElement(Hn.a, { fontSize: 'small' }),
            ),
          );
        },
        _n = function (e) {
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
        Vn = Object(Ya.a)(function () {
          return {
            list: { padding: 0, paddingBottom: 10, width: '100%' },
            item: { padding: 0, paddingBottom: 10, paddingTop: 10 },
          };
        }),
        qn = function (e) {
          var t = Vn(),
            a = _n(e),
            n = a.inputRefs,
            c = a.handleFocus;
          return r.a.createElement(
            Ra.a,
            { className: t.list },
            e.items.map(function (e, a) {
              return r.a.createElement(
                Aa.a,
                { className: t.item, key: e.code },
                r.a.createElement(ya.a, {
                  value: e.url,
                  label: e.label,
                  fullWidth: !0,
                  variant: 'outlined',
                  onFocus: c,
                  InputProps: {
                    inputRef: n[a],
                    endAdornment: r.a.createElement(
                      sn.a,
                      { position: 'end' },
                      r.a.createElement(Gn, {
                        inputRef: n[a],
                        message: 'URL has been copied!',
                      }),
                      !e.isPrivate &&
                        r.a.createElement(
                          Kn.a,
                          {
                            onClick: function () {
                              window.open(e.url, '_blank');
                            },
                          },
                          r.a.createElement(Bn.a, { fontSize: 'small' }),
                        ),
                    ),
                  },
                }),
              );
            }),
          );
        },
        Dn = a(417),
        Yn = a(418),
        Qn = a(419),
        Xn = function (e) {
          var t = Object(n.useState)(!1),
            a = Object(Qa.a)(t, 2),
            c = a[0],
            o = a[1],
            i = e.onSubmit;
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              Ca.a,
              {
                open: c,
                onClose: function () {
                  return o(!1);
                },
              },
              e.title &&
                r.a.createElement(
                  Dn.a,
                  null,
                  r.a.createElement(
                    kt.a,
                    { variant: 'h4', component: 'div' },
                    e.title,
                  ),
                ),
              e.content && r.a.createElement(Yn.a, null, e.content),
              r.a.createElement(
                Qn.a,
                null,
                r.a.createElement(
                  St.a,
                  {
                    onClick: function () {
                      return o(!1);
                    },
                    color: 'primary',
                  },
                  'Cancel',
                ),
                r.a.createElement(
                  St.a,
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
        Zn = a(420),
        $n = a(369),
        er = Object($n.a)(function (e) {
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
        })(Zn.a),
        tr = function (e) {
          return r.a.createElement(er, e);
        },
        ar = a(421),
        nr = function (e) {
          return Object(Ia.a)(function () {
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
                background: ht.a.grey[100],
              },
              code: { background: 'none' },
            };
          });
        },
        rr = function (e) {
          var t = nr(e)();
          return r.a.createElement(
            'pre',
            { className: t.pre },
            r.a.createElement('code', { className: t.code }, e.children),
          );
        },
        cr = function () {
          var e = dt(),
            t = Object(n.useCallback)(
              function (t) {
                e(Ne.toggleModal({ isOpen: t }));
              },
              [e],
            ),
            a = Object(n.useCallback)(
              function (t) {
                return e(Ne.fetchKeyPreview(t));
              },
              [e],
            ),
            r = Object(n.useCallback)(
              function (t) {
                e(Ne.setParams(t));
              },
              [e],
            ),
            c = Object(n.useCallback)(
              (function () {
                var e = Object(O.a)(
                  v.a.mark(function e(n, c) {
                    return v.a.wrap(function (e) {
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
        or = [
          { id: 'jwk', label: 'JWK' },
          { id: 'jwks', label: 'JWKs' },
          { id: 'pem', label: 'PEM' },
        ],
        ir = function (e) {
          var t = Object(n.useState)(or[0].id),
            a = Object(Qa.a)(t, 2),
            r = a[0],
            c = a[1],
            o = cr().openKeyPreview,
            u = Object(n.useMemo)(
              function () {
                return (
                  or.find(function (e) {
                    return e.id === r;
                  }) || or[0]
                );
              },
              [r],
            ),
            l = Object(i.c)(Ft) || '',
            s = Object(n.useRef)(null),
            m = Object(n.useRef)(null),
            f = Object(n.useCallback)(function (e) {
              e.target.select();
            }, []),
            p = Object(n.useMemo)(
              function () {
                return { label: 'Target URL', onFocus: f };
              },
              [f],
            ),
            d = Object(n.useMemo)(
              function () {
                return ''
                  .concat(l, '/entry/private/')
                  .concat(u.id, '/')
                  .concat(e.item.code);
              },
              [l, u.id, e.item.code],
            ),
            b = Object(n.useMemo)(
              function () {
                return { value: d, inputRef: s };
              },
              [d],
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
            keysHost: l,
            inputProps: b,
            formatId: r,
            fieldProps: p,
            format: u,
            targetUrl: d,
            urlRef: s,
            accessRef: m,
            setFormat: c,
            handleFocus: f,
            handleSetFormat: h,
            handleOpenPreviewModal: g,
          };
        },
        ur = Object(Ya.a)(function () {
          return {
            exampleMessage: {
              display: 'flex',
              justifyContent: 'space-between',
            },
          };
        }),
        lr = function (e) {
          var t = ir(e),
            a = t.fieldProps,
            n = t.inputProps,
            c = t.format,
            o = t.targetUrl,
            i = t.urlRef,
            u = t.accessRef,
            l = t.handleSetFormat,
            s = t.handleOpenPreviewModal,
            m = t.handleFocus,
            f = ur(),
            p = e.item;
          return r.a.createElement(
            Xa.a,
            { container: !0, spacing: 3 },
            r.a.createElement(
              Xa.a,
              { item: !0, xs: 12 },
              r.a.createElement(ya.a, {
                fullWidth: !0,
                label: 'Access key',
                variant: 'outlined',
                value: p.accessCode,
                onFocus: m,
                InputProps: {
                  inputRef: u,
                  endAdornment: r.a.createElement(
                    sn.a,
                    { position: 'end' },
                    r.a.createElement(Gn, {
                      inputRef: u,
                      message: 'URL has been copied!',
                    }),
                  ),
                },
              }),
            ),
            r.a.createElement(
              Xa.a,
              { item: !0, xs: 12 },
              r.a.createElement(hn, {
                menu: or,
                currentMenuLabel: c.label,
                onSelectMenuItem: l,
                fieldProps: a,
                inputProps: n,
                afterOptions: r.a.createElement(Gn, {
                  inputRef: i,
                  message: 'URL has been copied!',
                }),
              }),
            ),
            p.accessCode &&
              r.a.createElement(
                Xa.a,
                { item: !0, xs: 12 },
                r.a.createElement(
                  'div',
                  { className: f.exampleMessage },
                  r.a.createElement(
                    kt.a,
                    null,
                    'Key can be fetched via POST with access code.',
                  ),
                  r.a.createElement(ar.a, { onClick: s }, 'Preview'),
                ),
                r.a.createElement(
                  rr,
                  null,
                  'curl -d \'{ "accessToken":"'
                    .concat(
                      p.accessCode,
                      '" }\' -H "Content-Type: application/json" -X POST ',
                    )
                    .concat(o),
                ),
              ),
          );
        },
        sr = function (e) {
          var t = Object(i.c)(Lt),
            a = nn(),
            r = a.fetchRemoveKeyItem,
            c = a.fetchArchiveKeyItem,
            o = a.fetchRestoreKeyItem,
            u = e.data,
            l = u ? u.rotateInterval : null,
            s = u ? u.code : null,
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
            f = Object(n.useCallback)(
              function (e) {
                return r({ id: e });
              },
              [r],
            ),
            p = Object(n.useCallback)(
              function (e) {
                return c({ id: e });
              },
              [c],
            ),
            d = Object(n.useCallback)(
              function (e) {
                return o({ id: e });
              },
              [o],
            ),
            b = Object(n.useMemo)(
              function () {
                return (
                  l &&
                  'Rotation period: '.concat(Cn.a.duration(l, 's').humanize())
                );
              },
              [l],
            );
          return {
            host: t,
            rotation: b,
            publicUrls: m,
            deleteItem: f,
            archiveItem: p,
            restoreItem: d,
          };
        },
        mr = Object(Ia.a)(function () {
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
        fr = function (e) {
          var t = mr(),
            a = sr(e),
            n = a.deleteItem,
            c = a.archiveItem,
            o = a.restoreItem,
            i = a.rotation,
            u = a.publicUrls,
            l = e.data;
          return l
            ? r.a.createElement(
                Oa.a,
                null,
                r.a.createElement(
                  Ea.a,
                  null,
                  r.a.createElement(
                    Xa.a,
                    { container: !0, spacing: 2, justify: 'space-between' },
                    r.a.createElement(
                      Xa.a,
                      { item: !0 },
                      r.a.createElement(kt.a, { variant: 'caption' }, 'Name'),
                      r.a.createElement(kt.a, { variant: 'h5' }, l.name),
                    ),
                    r.a.createElement(
                      Xa.a,
                      { item: !0, className: t.codeHolder },
                      r.a.createElement(
                        kt.a,
                        { variant: 'caption' },
                        'Unique code',
                      ),
                      r.a.createElement(kt.a, { variant: 'h5' }, l.code),
                    ),
                  ),
                  r.a.createElement(Pn.a, { className: t.divider }),
                  r.a.createElement(
                    kt.a,
                    { variant: 'caption' },
                    l.rotateInterval ? i : 'Non rotatable key',
                  ),
                  r.a.createElement(Pn.a, { className: t.divider }),
                  r.a.createElement(
                    In.a,
                    null,
                    r.a.createElement(
                      Rn.a,
                      { expandIcon: r.a.createElement(Fn.a, null) },
                      r.a.createElement(kt.a, { variant: 'h6' }, 'Public key'),
                      r.a.createElement(
                        tr,
                        {
                          placement: 'top-start',
                          title: r.a.createElement(
                            kt.a,
                            {
                              gutterBottom: !0,
                              variant: 'body1',
                              color: 'textPrimary',
                            },
                            'Anyone can get public key by GET request in formats listed below. Rotatable response contain "expires" header.',
                          ),
                        },
                        r.a.createElement(Nn.a, {
                          className: t.tooltip,
                          color: 'primary',
                          fontSize: 'small',
                        }),
                      ),
                    ),
                    r.a.createElement(
                      An.a,
                      null,
                      r.a.createElement(
                        'div',
                        { style: { flexGrow: 1 } },
                        r.a.createElement(qn, { items: u }),
                      ),
                    ),
                  ),
                  r.a.createElement(
                    In.a,
                    null,
                    r.a.createElement(
                      Rn.a,
                      { expandIcon: r.a.createElement(Fn.a, null) },
                      r.a.createElement(kt.a, { variant: 'h6' }, 'Private key'),
                    ),
                    r.a.createElement(
                      An.a,
                      null,
                      r.a.createElement(
                        'div',
                        { className: t.privateWrap },
                        r.a.createElement(lr, { item: l }),
                      ),
                    ),
                  ),
                ),
                r.a.createElement(
                  Mn.a,
                  { className: t.actions },
                  null !== l.archivedAt &&
                    r.a.createElement(
                      r.a.Fragment,
                      null,
                      r.a.createElement(
                        Xn,
                        {
                          title: 'Are you sure want to delete key?',
                          content: 'Every associated keys will be unavailable',
                          onSubmit: function () {
                            return n(l.id);
                          },
                        },
                        r.a.createElement(St.a, { size: 'small' }, 'Delete'),
                      ),
                      r.a.createElement(
                        St.a,
                        {
                          size: 'small',
                          onClick: function () {
                            return o(l.id);
                          },
                        },
                        'Restore',
                      ),
                    ),
                  null === l.archivedAt &&
                    r.a.createElement(
                      Xn,
                      {
                        title: 'Are you sure want to archive entry in storage?',
                        content:
                          'Associated keys will be marked as archived and unavailable. You can restore entry from the archive at any time.',
                        onSubmit: function () {
                          return c(l.id);
                        },
                      },
                      r.a.createElement(St.a, { size: 'small' }, 'Archive'),
                    ),
                ),
              )
            : null;
        },
        pr = a(389),
        dr = a(152),
        br = a.n(dr),
        hr = function (e) {
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
        gr = Object(Ya.a)(function () {
          return { label: { marginRight: 10, fontSize: 12 } };
        }),
        vr = function (e) {
          var t = gr(),
            a = e.current,
            n = e.options,
            c = hr(e).handleChange;
          return r.a.createElement(
            $t.a,
            null,
            r.a.createElement(
              br.a,
              { container: !0, alignItems: 'center' },
              r.a.createElement(
                br.a,
                { item: !0, className: t.label },
                'Items per page:',
              ),
              r.a.createElement(
                br.a,
                { item: !0 },
                r.a.createElement(
                  pr.a,
                  { value: a, onChange: c },
                  n.map(function (e) {
                    return r.a.createElement(fn.a, { key: e, value: e }, e);
                  }),
                ),
              ),
            ),
          );
        },
        Or = a(317),
        jr = a(309),
        Er = a.n(jr),
        yr = a(308),
        xr = a.n(yr),
        kr = function (e) {
          var t = e.InputProps,
            a = e.onChange,
            c = e.onThrottledChange,
            o = Object(Or.a)(e, [
              'InputProps',
              'onChange',
              'onThrottledChange',
            ]),
            i = Object(n.useMemo)(
              function () {
                return Object(j.a)(
                  {
                    startAdornment: r.a.createElement(
                      sn.a,
                      { position: 'start' },
                      r.a.createElement(Er.a, null),
                    ),
                  },
                  t,
                );
              },
              [t],
            ),
            u = Object(n.useCallback)(
              xr()(function (e) {
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
                a && a(e), u(t);
              },
              [u, a],
            ),
          };
        },
        Sr = function (e) {
          var t = kr(e),
            a = t.InputPropsMemo,
            n = t.restProps,
            c = t.handleChange;
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              ya.a,
              Object.assign({}, n, {
                onChange: c,
                size: 'small',
                variant: 'outlined',
                InputProps: a,
              }),
            ),
          );
        },
        wr = function () {
          var e = Object(n.useState)(!1),
            t = Object(Qa.a)(e, 2),
            a = t[0],
            r = t[1],
            c = nn(),
            o = c.changePager,
            i = c.changeSearch,
            u = Object(n.useCallback)(
              function () {
                r(!a);
              },
              [a, r],
            ),
            l = Object(n.useCallback)(
              function (e, t) {
                return o({ page: t });
              },
              [o],
            ),
            s = Object(n.useCallback)(
              function (e) {
                return o({ perPage: e });
              },
              [o],
            ),
            m = Object(n.useCallback)(
              function (e) {
                return i({ search: e });
              },
              [i],
            );
          return {
            isFormOpened: a,
            toggleForm: r,
            handleChangePerPage: s,
            handleChangeSearch: m,
            handleModalToggle: u,
            handlePagerChange: l,
          };
        },
        Cr = Object(Ia.a)(function () {
          return {
            pagerHolder: { marginLeft: 'auto' },
            searchHolder: { marginLeft: 'auto', marginTop: 'auto' },
            wrap: { maxWidth: '100%', flexGrow: 1 },
            noItems: { marginTop: 20 },
          };
        }),
        Pr = function (e) {
          var t = Cr(),
            a = Object(i.c)(Xe),
            n = a.loading,
            c = a.data,
            o = a.error,
            u = a.pager,
            l = Object(i.c)(Ye),
            s = Object(i.c)(De),
            m = Object(i.c)(Qe),
            f = wr(),
            p = f.isFormOpened,
            d = f.handleModalToggle,
            b = f.handlePagerChange,
            h = f.handleChangePerPage,
            g = f.handleChangeSearch;
          return n
            ? null
            : o
            ? r.a.createElement(en.a, null, o)
            : r.a.createElement(
                $t.a,
                { className: t.wrap },
                r.a.createElement(
                  Xa.a,
                  { container: !0, spacing: 2 },
                  r.a.createElement(
                    Xa.a,
                    {
                      item: !0,
                      container: !0,
                      spacing: 2,
                      xs: 12,
                      alignItems: 'center',
                    },
                    !e.archive &&
                      r.a.createElement(
                        Xa.a,
                        { item: !0 },
                        r.a.createElement(
                          St.a,
                          {
                            variant: 'outlined',
                            startIcon: r.a.createElement($a.a, null),
                            onClick: d,
                          },
                          'Add key entry',
                        ),
                      ),
                    !m &&
                      r.a.createElement(
                        Xa.a,
                        { item: !0 },
                        r.a.createElement(Sr, {
                          defaultValue: s,
                          onThrottledChange: g,
                          placeholder: 'Search by name...',
                        }),
                      ),
                  ),
                  m &&
                    !e.archive &&
                    r.a.createElement(
                      Xa.a,
                      { item: !0, xs: 12, className: t.noItems },
                      r.a.createElement(
                        kt.a,
                        { variant: 'h5' },
                        'There is no key entries. Add your first one!',
                      ),
                    ),
                  m &&
                    e.archive &&
                    r.a.createElement(
                      Xa.a,
                      { item: !0, xs: 12, className: t.noItems },
                      r.a.createElement(
                        kt.a,
                        { variant: 'h5' },
                        'Archive is empty!',
                      ),
                    ),
                  c.items.length > 0 &&
                    r.a.createElement(
                      Xa.a,
                      { item: !0, xs: 12 },
                      r.a.createElement(
                        Xa.a,
                        { container: !0, spacing: 2 },
                        c.items.map(function (e) {
                          return r.a.createElement(
                            Xa.a,
                            { item: !0, key: e.id, xs: 6 },
                            r.a.createElement(fr, { data: e }),
                          );
                        }),
                      ),
                    ),
                  void 0 !== u.totalPages &&
                    u.totalPages > 0 &&
                    r.a.createElement(
                      Xa.a,
                      { container: !0, item: !0, xs: 12, alignItems: 'center' },
                      r.a.createElement(
                        Xa.a,
                        { item: !0 },
                        r.a.createElement(vr, {
                          current: u.perPage,
                          options: l,
                          onSelect: h,
                        }),
                      ),
                      r.a.createElement(
                        Xa.a,
                        { item: !0, className: t.pagerHolder },
                        u.totalPages > 1 &&
                          r.a.createElement(tn.a, {
                            onChange: b,
                            count: u.totalPages,
                            page: u.page,
                          }),
                      ),
                    ),
                ),
                r.a.createElement(
                  Ca.a,
                  { open: p, onClose: d },
                  r.a.createElement(Sn, { onSubmit: d }),
                ),
              );
        },
        Ir = function (e) {
          return e.keyPreview;
        },
        Rr = Object(Ge.createSelector)(Ir, function (e) {
          return e.modal;
        }),
        Ar = Object(Ge.createSelector)(Ir, function (e) {
          return e.details;
        }),
        Mr = Object(Ge.createSelector)(Ir, function (e) {
          return e.params;
        }),
        Tr = Object(Ge.createSelector)(Ir, function (e) {
          return e.availFormats;
        }),
        Fr = Object(Ge.createSelector)(Ir, function (e) {
          return e.availPrivacy;
        }),
        Lr = function () {
          var e,
            t,
            a = zr(),
            n = Kr(),
            c = n.availFormats,
            o = n.availPrivacy,
            i = n.keyData,
            u = n.previewParams,
            l = n.keyInputRef,
            s = n.formatsBtnRef,
            m = n.privacyBtnRef,
            f = n.targetKey,
            p = n.isFormatsMenuOpen,
            d = n.isPrivacyMenuOpen,
            b = n.handleFormatsMenuClose,
            h = n.handleFormatsMenuOpen,
            g = n.handlePrivacyMenuClose,
            v = n.handlePrivacyMenuOpen,
            O = n.handleFormatsMenuItemSelect,
            j = n.handlePrivacyMenuItemSelect,
            E = n.handleDialogClose;
          if (i.error || void 0 === i.data)
            return r.a.createElement(
              'div',
              null,
              'Data error in KeyPreview component',
            );
          if (void 0 === f)
            return r.a.createElement('div', null, 'Key data unavailable');
          var y =
              null === (e = u.format) || void 0 === e
                ? void 0
                : e.toUpperCase(),
            x =
              null === (t = u.privacy) || void 0 === t
                ? void 0
                : t.toUpperCase(),
            k = Cn.a.unix(i.data.activatesAt).format('LLL'),
            S = i.data.expiresAt && Cn.a.unix(i.data.expiresAt).format('LLL');
          return r.a.createElement(
            Zt.a,
            { className: a.wrap },
            r.a.createElement(bn, {
              anchorEl: p ? s.current : null,
              handleClose: b,
              onSelectMenuItem: O,
              menu: c,
            }),
            r.a.createElement(bn, {
              anchorEl: d ? m.current : null,
              handleClose: g,
              onSelectMenuItem: j,
              menu: o,
            }),
            r.a.createElement(
              Xa.a,
              { container: !0, spacing: 2 },
              r.a.createElement(
                Xa.a,
                { container: !0, item: !0, xs: 12, alignItems: 'center' },
                r.a.createElement(
                  Xa.a,
                  { item: !0, xs: 6 },
                  r.a.createElement(kt.a, { variant: 'h3' }, 'Key preview'),
                ),
                r.a.createElement(
                  Xa.a,
                  { container: !0, item: !0, xs: 6, justify: 'flex-end' },
                  r.a.createElement(
                    St.a,
                    { size: 'small', ref: m, onClick: v },
                    x,
                  ),
                  r.a.createElement(
                    St.a,
                    { size: 'small', ref: s, onClick: h },
                    y,
                  ),
                  r.a.createElement(
                    'div',
                    { className: a.copyHolder },
                    r.a.createElement('textarea', {
                      readOnly: !0,
                      ref: l,
                      value: f,
                      className: a.keyInput,
                    }),
                    r.a.createElement(Gn, {
                      inputRef: l,
                      message: 'Key has been copied!',
                    }),
                  ),
                ),
              ),
              r.a.createElement(
                Xa.a,
                {
                  item: !0,
                  container: !0,
                  xs: 12,
                  justify: 'flex-start',
                  spacing: 2,
                },
                r.a.createElement(
                  Xa.a,
                  { item: !0 },
                  r.a.createElement(
                    kt.a,
                    { variant: 'caption' },
                    'Activates at: ',
                    k,
                  ),
                ),
                r.a.createElement(
                  Xa.a,
                  { item: !0 },
                  r.a.createElement(
                    kt.a,
                    { variant: 'caption' },
                    S ? 'Expires at: '.concat(S) : 'No expiration',
                  ),
                ),
              ),
              r.a.createElement(
                Xa.a,
                { item: !0, xs: 12 },
                r.a.createElement(rr, null, f),
              ),
              r.a.createElement(
                Xa.a,
                { item: !0, container: !0, xs: 12, justify: 'flex-end' },
                r.a.createElement(St.a, { onClick: E }, 'Close'),
              ),
            ),
          );
        },
        Nr = function (e) {
          var t = Kr(),
            a = t.modalState,
            n = t.handleDialogClose;
          return r.a.createElement(
            Ca.a,
            Object.assign({ open: Boolean(a.isOpen), onClose: n }, e),
            r.a.createElement(Lr, null),
          );
        },
        Kr = function () {
          var e = Object(i.c)(Ar),
            t = Object(i.c)(Rr),
            a = Object(i.c)(Mr),
            r = Object(i.c)(Tr),
            c = Object(i.c)(Fr),
            o = Object(n.useState)(!1),
            u = Object(Qa.a)(o, 2),
            l = u[0],
            s = u[1],
            m = Object(n.useState)(!1),
            f = Object(Qa.a)(m, 2),
            p = f[0],
            d = f[1],
            b = cr(),
            h = b.setPreviewParams,
            g = b.toggleModal,
            v = Object(n.useCallback)(
              function () {
                g(!1);
              },
              [g],
            ),
            O = Object(n.useCallback)(
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
                d(!1);
              },
              [d],
            ),
            y = Object(n.useCallback)(
              function () {
                d(!0);
              },
              [d],
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
            S = Object(n.useRef)(null),
            w = Object(n.useRef)(null),
            C = Object(n.useRef)(null);
          return {
            availFormats: r,
            availPrivacy: c,
            isPrivacyMenuOpen: p,
            isFormatsMenuOpen: l,
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
            keyInputRef: S,
            privacyBtnRef: C,
            formatsBtnRef: w,
            handleFormatsMenuClose: O,
            handleFormatsMenuOpen: j,
            handlePrivacyMenuClose: E,
            handlePrivacyMenuOpen: y,
            handleFormatsMenuItemSelect: x,
            handlePrivacyMenuItemSelect: k,
            handleDialogClose: v,
            toggleFormatsMenu: s,
            togglePrivacyMenu: d,
            togglePreviewModal: g,
          };
        },
        zr = Object(Ia.a)(function () {
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
        Br = Object(Ya.a)(function () {
          return {
            container: {
              display: 'flex',
              minWidth: 0,
              flexGrow: 1,
              paddingTop: 16,
            },
          };
        }),
        Ur = function () {
          var e = nn(),
            t = e.fetchKeysListWatch,
            a = e.resetList;
          Object(n.useEffect)(
            function () {
              var e = t();
              return function () {
                e.abort();
              };
            },
            [t, a],
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
        Wr = function () {
          var e = Br();
          return (
            Ur(),
            r.a.createElement(
              Da.a,
              { className: e.container },
              r.a.createElement(Pr, null),
              r.a.createElement(Nr, null),
            )
          );
        },
        Hr = function () {
          var e = dt(),
            t = Object(n.useCallback)(
              (function () {
                var t = Object(O.a)(
                  v.a.mark(function t(a) {
                    return v.a.wrap(function (t) {
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
                var t = Object(O.a)(
                  v.a.mark(function t(a) {
                    return v.a.wrap(function (t) {
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
              Object(O.a)(
                v.a.mark(function t() {
                  return v.a.wrap(function (t) {
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
        Jr = { login: '', password: '', admin: '0' },
        Gr = function (e) {
          var t = e.onSubmit,
            a = Hr().fetchCreateAccount;
          return {
            validate: Object(n.useCallback)(function () {}, []),
            handleSubmit: Object(n.useCallback)(
              (function () {
                var e = Object(O.a)(
                  v.a.mark(function e(n) {
                    return v.a.wrap(function (e) {
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
        _r = Object(Ia.a)(function () {
          return { progress: { marginLeft: 20 } };
        }),
        Vr = function (e) {
          var t = _r(),
            a = Gr(e),
            n = a.handleSubmit,
            c = a.validate;
          return r.a.createElement(
            Oa.a,
            { style: { width: 400 } },
            r.a.createElement(ja.a, {
              title: r.a.createElement(
                kt.a,
                { variant: 'h3' },
                'Create new account',
              ),
            }),
            r.a.createElement(
              Ea.a,
              null,
              r.a.createElement(
                Yt.c,
                { initialValues: Jr, validate: c, onSubmit: n },
                function (e) {
                  var a = e.isSubmitting;
                  return r.a.createElement(
                    Yt.b,
                    null,
                    r.a.createElement(
                      Xa.a,
                      { container: !0, spacing: 2 },
                      r.a.createElement(
                        Xa.a,
                        { item: !0, xs: 12 },
                        r.a.createElement(Yt.a, { name: 'login' }, function (
                          e,
                        ) {
                          var t = e.field,
                            a = e.meta;
                          return r.a.createElement(
                            ya.a,
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
                        Xa.a,
                        { item: !0, xs: 12 },
                        r.a.createElement(Yt.a, { name: 'password' }, function (
                          e,
                        ) {
                          var t = e.field,
                            a = e.meta;
                          return r.a.createElement(
                            ya.a,
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
                        Xa.a,
                        { item: !0, xs: 12 },
                        r.a.createElement(Yt.a, { name: 'admin' }, function (
                          t,
                        ) {
                          var a = t.field;
                          return r.a.createElement(rn.a, {
                            control: r.a.createElement(cn.a, {
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
                        Xa.a,
                        {
                          item: !0,
                          container: !0,
                          xs: 12,
                          style: { alignItems: 'center' },
                        },
                        r.a.createElement(
                          St.a,
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
                            r.a.createElement(on.a, {
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
        qr = function (e) {
          return e.accounts;
        },
        Dr =
          (Object(Ge.createSelector)(qr, function (e) {
            return e.create;
          }),
          Object(Ge.createSelector)(qr, function (e) {
            return e.list;
          })),
        Yr = function () {
          var e = Hr().fetchRemoveAccounts;
          return {
            deleteAccount: Object(n.useCallback)(
              (function () {
                var t = Object(O.a)(
                  v.a.mark(function t(a) {
                    return v.a.wrap(function (t) {
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
        Qr = Object(Ia.a)(function () {
          return { actions: { justifyContent: 'flex-end' } };
        }),
        Xr = function (e) {
          var t = Qr(),
            a = Yr().deleteAccount,
            n = e.data;
          return r.a.createElement(
            Oa.a,
            null,
            r.a.createElement(
              Ea.a,
              null,
              r.a.createElement(
                kt.a,
                { variant: 'caption', component: 'div' },
                'Account',
              ),
              r.a.createElement(
                kt.a,
                { variant: 'h4', component: 'div' },
                n.login,
              ),
            ),
            r.a.createElement(
              Mn.a,
              { className: t.actions },
              r.a.createElement(
                Xn,
                {
                  title: 'Are you sure want to delete account?',
                  content: 'Every associated keys will be unavailable',
                  onSubmit: function () {
                    return a(n.id);
                  },
                },
                r.a.createElement(St.a, { size: 'small' }, 'Remove account'),
              ),
            ),
          );
        },
        Zr = function () {
          var e = Object(n.useState)(!1),
            t = Object(Qa.a)(e, 2),
            a = t[0],
            r = t[1],
            c = Hr().fetchAccountsList,
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
        $r = function () {
          var e = Object(i.c)(Dr),
            t = Zr(),
            a = t.isFormOpened,
            n = t.handleModalToggle;
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              Ca.a,
              { open: a, onClose: n },
              r.a.createElement(Vr, { onSubmit: n }),
            ),
            r.a.createElement(
              Xa.a,
              { container: !0, spacing: 2 },
              r.a.createElement(
                Xa.a,
                { item: !0, xs: 12 },
                r.a.createElement(
                  St.a,
                  {
                    variant: 'outlined',
                    startIcon: r.a.createElement($a.a, null),
                    onClick: n,
                  },
                  'Add account',
                ),
              ),
              r.a.createElement(
                Xa.a,
                { container: !0, item: !0, spacing: 2, xs: 12 },
                e.accounts.map(function (e) {
                  return r.a.createElement(
                    Xa.a,
                    { item: !0, key: e.id, xs: 6 },
                    r.a.createElement(Xr, { data: e }),
                  );
                }),
              ),
            ),
          );
        },
        ec = Object(Ia.a)(function () {
          return { container: { paddingTop: 24, paddingBottom: 24 } };
        }),
        tc = function () {
          var e = ec();
          return r.a.createElement(
            Da.a,
            { className: e.container },
            r.a.createElement($r, null),
          );
        },
        ac = a(442),
        nc = function () {
          var e = dt(),
            t = Object(i.c)(rt),
            a = Object(i.c)(ct),
            r = Object(n.useCallback)(
              function (t) {
                var a = an(64);
                return e(
                  he.fetchCreateRepo(
                    Object(j.a)(Object(j.a)({}, t), {}, { accessToken: a }),
                  ),
                );
              },
              [e],
            ),
            c = Object(n.useCallback)(
              function (t) {
                return e(he.changePager(t));
              },
              [e],
            ),
            o = Object(n.useCallback)(
              function (t) {
                return e(he.changeSearch({ search: t }));
              },
              [e],
            ),
            u = Object(n.useCallback)(
              function (t) {
                return e(he.fetchListRepo(t));
              },
              [e],
            ),
            l = Object(n.useCallback)(
              function () {
                var e = { page: t.page, perPage: t.perPage, search: a };
                return u(e);
              },
              [u, t.page, t.perPage, a],
            );
          return {
            createNewRepo: r,
            deleteRepos: Object(n.useCallback)(
              (function () {
                var t = Object(O.a)(
                  v.a.mark(function t(a) {
                    return v.a.wrap(function (t) {
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
            fetchListRepo: u,
            changePager: c,
            fetchListRepoWatch: l,
            changeSearch: o,
          };
        },
        rc = function () {
          var e = nc().deleteRepos,
            t = Object(n.useCallback)(function (e) {
              e.target.select();
            }, []);
          return {
            accessRef: Object(n.useRef)(null),
            deleteRepos: e,
            handleFocus: t,
          };
        },
        cc = Object(Ia.a)(function () {
          return {
            actions: { justifyContent: 'flex-end' },
            contentItems: { display: 'flex' },
            contentItem: { marginRight: 20 },
          };
        }),
        oc = function (e) {
          var t = e.data,
            a = cc(),
            n = Object(i.c)(At),
            c = rc(),
            o = c.deleteRepos,
            u = c.accessRef,
            l = c.handleFocus,
            s = ''.concat(n || '', '/repo/bunch/').concat(t.code);
          return r.a.createElement(
            Oa.a,
            null,
            r.a.createElement(
              Ea.a,
              null,
              r.a.createElement(
                Xa.a,
                { container: !0, spacing: 2 },
                r.a.createElement(
                  Xa.a,
                  { item: !0, xs: 12 },
                  r.a.createElement(
                    kt.a,
                    { variant: 'caption', component: 'div' },
                    'Repository',
                  ),
                  r.a.createElement(
                    kt.a,
                    { variant: 'h5', component: 'div' },
                    t.name,
                  ),
                ),
                r.a.createElement(
                  Xa.a,
                  { item: !0, xs: 12 },
                  r.a.createElement(Pn.a, null),
                ),
                r.a.createElement(
                  Xa.a,
                  { container: !0, item: !0, xs: 12, spacing: 1 },
                  r.a.createElement(
                    Xa.a,
                    { item: !0, xs: 12 },
                    r.a.createElement(
                      kt.a,
                      { variant: 'caption', component: 'div' },
                      'Contained keys',
                    ),
                  ),
                  t.entries.map(function (e, t) {
                    var a = e.name;
                    return r.a.createElement(
                      Xa.a,
                      { item: !0, key: t },
                      r.a.createElement(ac.a, {
                        label: a,
                        variant: 'outlined',
                      }),
                    );
                  }),
                ),
                r.a.createElement(
                  Xa.a,
                  { item: !0, xs: 12 },
                  r.a.createElement(Pn.a, null),
                ),
                r.a.createElement(
                  Xa.a,
                  { item: !0, xs: 12 },
                  r.a.createElement(ya.a, {
                    fullWidth: !0,
                    label: 'Access token',
                    variant: 'outlined',
                    value: t.accessToken,
                    onFocus: l,
                    InputProps: {
                      inputRef: u,
                      endAdornment: r.a.createElement(
                        sn.a,
                        { position: 'end' },
                        r.a.createElement(Gn, {
                          inputRef: u,
                          message: 'URL has been copied!',
                        }),
                      ),
                    },
                  }),
                ),
                r.a.createElement(
                  Xa.a,
                  { item: !0, xs: 12 },
                  r.a.createElement(
                    kt.a,
                    null,
                    'Key can be fetched via POST with access token.',
                  ),
                  r.a.createElement(
                    rr,
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
              Mn.a,
              { className: a.actions },
              r.a.createElement(
                Xn,
                {
                  title: 'Are you sure want to delete repo?',
                  onSubmit: function () {
                    return o({ ids: [t.id] });
                  },
                },
                r.a.createElement(St.a, { size: 'small' }, 'Remove'),
              ),
            ),
          );
        },
        ic = a(310),
        uc = a.n(ic),
        lc = function (e) {
          var t = e.pickedSet,
            a = e.onUpdate,
            r = Object(n.useState)([]),
            c = Object(Qa.a)(r, 2),
            o = c[0],
            i = c[1],
            u = Object(n.useState)([]),
            l = Object(Qa.a)(u, 2),
            s = l[0],
            m = l[1],
            f = Object(n.useState)({}),
            p = Object(Qa.a)(f, 2),
            d = p[0],
            b = p[1],
            h = Object(n.useState)({}),
            g = Object(Qa.a)(h, 2),
            v = g[0],
            O = g[1];
          mc(t, i), fc(o, d, b), pc(v, m);
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
                O(function (t) {
                  return Object(j.a)(Object(j.a)({}, t), {}, { search: e });
                });
              },
              [O],
            );
          return {
            options: s,
            picked: o,
            handleChangeItem: E,
            handleSearchChange: y,
          };
        },
        sc = Object(Ia.a)(function () {
          return {
            scrollBar: { height: 220 },
            topDivider: { marginBottom: 5 },
          };
        }),
        mc = function (e, t) {
          Object(n.useEffect)(
            function () {
              e && t(e);
            },
            [e, t],
          );
        },
        fc = function (e, t, a) {
          var r = nn().requestKeysByIds;
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
        pc = function (e, t) {
          var a,
            r,
            c,
            o = nn().requestKeysList,
            i = Object(n.useCallback)(
              function () {
                return o(e);
              },
              [e, o],
            ),
            u = Object(n.useCallback)(
              function (e) {
                t(e.items);
              },
              [t],
            );
          (a = i),
            (r = u),
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
        dc = function (e) {
          var t = lc(e),
            a = t.picked,
            n = t.options,
            c = t.handleChangeItem,
            o = t.handleSearchChange,
            i = sc();
          return r.a.createElement(
            Xa.a,
            { container: !0, spacing: 1 },
            r.a.createElement(
              Xa.a,
              { item: !0, xs: 12, className: i.topDivider },
              r.a.createElement(Pn.a, null),
            ),
            r.a.createElement(
              Xa.a,
              { item: !0, xs: 12 },
              r.a.createElement(Sr, {
                placeholder: 'Select required keys...',
                onThrottledChange: o,
                fullWidth: !0,
              }),
              r.a.createElement(
                $t.a,
                { className: i.scrollBar },
                r.a.createElement(
                  uc.a,
                  null,
                  r.a.createElement(
                    Ra.a,
                    null,
                    n.map(function (e) {
                      return r.a.createElement(
                        'div',
                        { key: e.id },
                        r.a.createElement(
                          Aa.a,
                          { key: e.id },
                          r.a.createElement(
                            Ma.a,
                            null,
                            r.a.createElement(cn.a, {
                              edge: 'start',
                              size: 'small',
                              disableRipple: !0,
                              checked: a.includes(e.code),
                              onChange: function (t) {
                                return c(e.code, t.target.checked);
                              },
                            }),
                          ),
                          r.a.createElement(Ta.a, { primary: e.name }),
                        ),
                      );
                    }),
                  ),
                ),
              ),
            ),
          );
        },
        bc = function (e) {
          var t = e.code,
            a = e.entries,
            n = {};
          return (
            (t && 0 !== t.length) || (n.code = 'Code required!'),
            0 === a.length && (n.entries = 'Choose at least one entry'),
            n
          );
        },
        hc = function (e) {
          var t = e.onSubmit,
            a = nc().createNewRepo;
          return {
            handleSubmit: Object(n.useCallback)(
              (function () {
                var e = Object(O.a)(
                  v.a.mark(function e(n, r) {
                    var c, o;
                    return v.a.wrap(function (e) {
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
        gc = Object(Ia.a)(function () {
          return {
            progress: { marginLeft: 20 },
            keyTitle: { marginTop: 10, marginBotton: 10, paddingLeft: 10 },
            keyError: { paddingLeft: 10 },
          };
        }),
        vc = function (e) {
          var t = gc(),
            a = hc(e).handleSubmit;
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              Oa.a,
              { style: { width: 400 } },
              r.a.createElement(ja.a, {
                title: r.a.createElement(
                  kt.a,
                  { variant: 'h3' },
                  'Create new repository',
                ),
              }),
              r.a.createElement(
                Ea.a,
                null,
                r.a.createElement(
                  Yt.c,
                  {
                    initialValues: { code: '', entries: [] },
                    validate: bc,
                    onSubmit: a,
                  },
                  function (e) {
                    var a = e.isSubmitting;
                    return r.a.createElement(
                      Yt.b,
                      null,
                      r.a.createElement(
                        Xa.a,
                        { container: !0, spacing: 2 },
                        r.a.createElement(
                          Xa.a,
                          { item: !0, xs: 12 },
                          r.a.createElement(Yt.a, { name: 'code' }, function (
                            e,
                          ) {
                            var t = e.field,
                              a = e.meta;
                            return r.a.createElement(
                              ya.a,
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
                          Xa.a,
                          { item: !0, xs: 12 },
                          r.a.createElement(
                            Yt.a,
                            { name: 'entries' },
                            function (a) {
                              var n = a.field,
                                c = a.meta;
                              return r.a.createElement(
                                r.a.Fragment,
                                null,
                                r.a.createElement(dc, {
                                  onUpdate: function (t) {
                                    e.setFieldValue(
                                      'entries',
                                      t.map(function (e) {
                                        return e.code;
                                      }),
                                    );
                                  },
                                  pickedSet: n.value,
                                }),
                                c.touched &&
                                  c.error &&
                                  r.a.createElement(
                                    kt.a,
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
                            Xa.a,
                            {
                              item: !0,
                              container: !0,
                              xs: 12,
                              style: { alignItems: 'center' },
                            },
                            r.a.createElement(ia, null, e.errors.server),
                          ),
                        r.a.createElement(
                          Xa.a,
                          {
                            item: !0,
                            container: !0,
                            xs: 12,
                            style: { alignItems: 'center' },
                          },
                          r.a.createElement(
                            St.a,
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
                              r.a.createElement(on.a, {
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
        Oc = function () {
          var e = nc(),
            t = e.changePager,
            a = e.changeSearch,
            r = Object(n.useState)(!1),
            c = Object(Qa.a)(r, 2),
            o = c[0],
            i = c[1],
            u = Object(n.useCallback)(
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
            s = Object(n.useCallback)(
              function (e, a) {
                return t({ page: a });
              },
              [t],
            ),
            m = Object(n.useCallback)(
              function () {
                i(!o);
              },
              [o, i],
            );
          return {
            isFormOpened: o,
            handleChangeSearch: u,
            handleModalToggle: m,
            handleChangePerPage: l,
            handlePagerChange: s,
          };
        },
        jc = Object(Ya.a)(function () {
          return {
            pagerHolder: { marginLeft: 'auto' },
            searchHolder: { marginLeft: 'auto' },
            noItems: { marginTop: 20 },
          };
        }),
        Ec = function () {
          var e = jc(),
            t = Object(i.c)(nt),
            a = t.items,
            n = t.pager,
            c = t.pagerOptions,
            o = Object(i.c)(ct),
            u = Object(i.c)(ot),
            l = Oc(),
            s = l.handleModalToggle,
            m = l.isFormOpened,
            f = l.handleChangePerPage,
            p = l.handlePagerChange,
            d = l.handleChangeSearch;
          return r.a.createElement(
            $t.a,
            null,
            r.a.createElement(
              Ca.a,
              { open: m, onClose: s },
              r.a.createElement(vc, { onSubmit: s }),
            ),
            r.a.createElement(
              Xa.a,
              { container: !0, spacing: 2 },
              r.a.createElement(
                Xa.a,
                { item: !0, spacing: 2, container: !0, xs: 12 },
                r.a.createElement(
                  Xa.a,
                  { item: !0 },
                  r.a.createElement(
                    St.a,
                    {
                      variant: 'outlined',
                      startIcon: r.a.createElement($a.a, null),
                      onClick: s,
                    },
                    'Add repository',
                  ),
                ),
                !u &&
                  r.a.createElement(
                    Xa.a,
                    { item: !0 },
                    r.a.createElement(Sr, {
                      defaultValue: o,
                      onThrottledChange: d,
                      placeholder: 'Search by name...',
                    }),
                  ),
              ),
              a.length > 0 &&
                r.a.createElement(
                  Xa.a,
                  { item: !0, xs: 12 },
                  r.a.createElement(
                    Xa.a,
                    { container: !0, spacing: 2 },
                    a.map(function (e) {
                      return r.a.createElement(
                        Xa.a,
                        { item: !0, xs: 6, key: e.id },
                        r.a.createElement(oc, { data: e }),
                      );
                    }),
                  ),
                ),
              u &&
                r.a.createElement(
                  Xa.a,
                  { item: !0, xs: 12, className: e.noItems },
                  r.a.createElement(
                    kt.a,
                    { variant: 'h5' },
                    'There is no repositories.',
                  ),
                ),
              void 0 !== n.totalItems &&
                n.totalItems > 0 &&
                r.a.createElement(
                  Xa.a,
                  {
                    container: !0,
                    item: !0,
                    xs: 12,
                    spacing: 2,
                    alignItems: 'center',
                  },
                  r.a.createElement(
                    Xa.a,
                    { item: !0 },
                    r.a.createElement(vr, {
                      current: n.perPage,
                      options: c,
                      onSelect: f,
                    }),
                  ),
                  r.a.createElement(
                    Xa.a,
                    { item: !0, className: e.pagerHolder },
                    void 0 !== n.totalPages &&
                      n.totalPages > 1 &&
                      r.a.createElement(tn.a, {
                        onChange: p,
                        count: n.totalPages,
                        page: n.page,
                      }),
                  ),
                ),
            ),
          );
        },
        yc = Object(Ya.a)(function () {
          return { container: { paddingTop: 16, paddingBottom: 24 } };
        }),
        xc = function () {
          var e = yc();
          return (
            kc(),
            r.a.createElement(
              Da.a,
              { className: e.container },
              r.a.createElement(Ec, null),
            )
          );
        },
        kc = function () {
          var e = nc().fetchListRepoWatch;
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
        Sc = a(439),
        wc = function (e) {
          return e.storage;
        },
        Cc = Object(Ge.createSelector)(wc, function (e) {
          return e.items;
        }),
        Pc = Object(Ge.createSelector)(wc, function (e) {
          return e.pager;
        }),
        Ic = Object(Ge.createSelector)(wc, function (e) {
          return e.filter;
        }),
        Rc = Object(Ge.createSelector)(wc, function (e) {
          return e.pagerOptions;
        }),
        Ac = Object(Ge.createSelector)(Ic, Cc, function (e, t) {
          var a = e.entryName;
          return (!a || 0 === a.length) && 0 === t.length;
        }),
        Mc = a(429),
        Tc = a(430),
        Fc = a(431),
        Lc = a(432),
        Nc = a(433),
        Kc = a(434),
        zc = a(311),
        Bc = a.n(zc),
        Uc = a(312),
        Wc = a.n(Uc),
        Hc = function () {
          var e = cr().openKeyPreview;
          return {
            handleOpenKeyPreview: Object(n.useCallback)(
              (function () {
                var t = Object(O.a)(
                  v.a.mark(function t(a) {
                    return v.a.wrap(function (t) {
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
        Jc = function (e) {
          var t = e.items,
            a = Hc().handleOpenKeyPreview;
          return r.a.createElement(
            Mc.a,
            { component: Zt.a },
            r.a.createElement(
              Tc.a,
              null,
              r.a.createElement(
                Fc.a,
                null,
                r.a.createElement(
                  Lc.a,
                  null,
                  r.a.createElement(Nc.a, null, 'Id'),
                  r.a.createElement(Nc.a, null, 'Type'),
                  r.a.createElement(Nc.a, null, 'Algorithm'),
                  r.a.createElement(Nc.a, null, 'Entry name'),
                  r.a.createElement(Nc.a, null, 'Entry code'),
                  r.a.createElement(Nc.a, null, 'Status'),
                  r.a.createElement(Nc.a, null, 'Period'),
                  r.a.createElement(Nc.a, { align: 'center' }, 'Actions'),
                ),
              ),
              r.a.createElement(
                Kc.a,
                null,
                t.map(function (e) {
                  var t = Cn()(),
                    n = Cn.a.unix(e.expUnix),
                    c = Cn.a.unix(e.activateUnix),
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
                      Lc.a,
                      { key: e.key.kid },
                      r.a.createElement(Nc.a, null, e.key.kid),
                      r.a.createElement(Nc.a, null, e.key.kty),
                      r.a.createElement(Nc.a, null, e.key.alg),
                      r.a.createElement(Nc.a, null, e.entry.name),
                      r.a.createElement(Nc.a, null, e.entry.code),
                      r.a.createElement(Nc.a, null, o),
                      r.a.createElement(
                        Nc.a,
                        null,
                        e.expUnix
                          ? ''
                              .concat(c.format('LL'), ' - ')
                              .concat(n.format('LL'))
                          : 'Non-rotatable',
                      ),
                      r.a.createElement(
                        Nc.a,
                        { align: 'center' },
                        r.a.createElement(
                          Xa.a,
                          { container: !0, spacing: 2, justify: 'center' },
                          r.a.createElement(
                            Xa.a,
                            { item: !0 },
                            r.a.createElement(
                              Bc.a,
                              {
                                size: 'small',
                                onClick: function () {
                                  return a(e.key.kid);
                                },
                              },
                              r.a.createElement(Wc.a, null),
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
        Gc = function () {
          var e = dt(),
            t = Object(i.c)(Pc),
            a = Object(i.c)(Ic),
            r = Object(n.useCallback)(
              function (t) {
                return e(Ee.changePager(t));
              },
              [e],
            ),
            c = Object(n.useCallback)(
              function (t) {
                return e(Ee.changeFilter(t));
              },
              [e],
            ),
            o = Object(n.useCallback)(
              function (t) {
                return e(Ee.fetchStorageItems(t));
              },
              [e],
            ),
            u = Object(n.useCallback)(
              function () {
                var e = { page: t.page, perPage: t.perPage, filter: a };
                return o(e);
              },
              [o, t.page, t.perPage, a],
            );
          return {
            changePager: r,
            changeFilter: c,
            fetchStorageItems: o,
            fetchStorageItemsWatcher: u,
          };
        },
        _c = function () {
          var e = Gc(),
            t = e.changePager,
            a = e.changeFilter,
            r = Object(i.c)(Pc),
            c = r.totalItems,
            o = r.perPage,
            u = r.page,
            l = Object(n.useMemo)(
              function () {
                if (void 0 !== c) {
                  var e = Math.ceil(c / o);
                  return Math.min(e, u);
                }
              },
              [c, o, u],
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
            f = Object(n.useCallback)(
              function (e) {
                var a = parseInt(e.target.value, 10);
                return t({ perPage: a });
              },
              [t],
            );
          return {
            targetPage: l,
            storagePager: r,
            totalItems: c,
            handlePagerChange: m,
            handleChangeFilterEntryName: s,
            handleChangePerPage: f,
          };
        },
        Vc = function () {
          var e = Object(i.c)(Cc),
            t = Object(i.c)(Ic),
            a = Object(i.c)(Rc),
            n = Object(i.c)(Ac),
            c = _c(),
            o = c.targetPage,
            u = c.storagePager,
            l = c.totalItems,
            s = c.handlePagerChange,
            m = c.handleChangePerPage,
            f = c.handleChangeFilterEntryName;
          return void 0 === l
            ? null
            : r.a.createElement(
                Xa.a,
                { container: !0, spacing: 2 },
                !n &&
                  r.a.createElement(
                    Xa.a,
                    { container: !0, item: !0, xs: 12 },
                    r.a.createElement(
                      Xa.a,
                      { item: !0 },
                      r.a.createElement(Sr, {
                        placeholder: 'Search by entry name',
                        defaultValue: t.entryName,
                        onThrottledChange: f,
                      }),
                    ),
                  ),
                n &&
                  r.a.createElement(
                    Xa.a,
                    { item: !0, xs: 12 },
                    r.a.createElement(
                      kt.a,
                      { variant: 'h5' },
                      'Storage is empty.',
                    ),
                  ),
                l > 0 &&
                  r.a.createElement(
                    Xa.a,
                    { item: !0, xs: 12 },
                    r.a.createElement(Jc, { items: e }),
                  ),
                void 0 !== o &&
                  l > 0 &&
                  r.a.createElement(
                    Xa.a,
                    { item: !0, xs: 12 },
                    r.a.createElement(Sc.a, {
                      component: 'div',
                      count: l,
                      page: o - 1,
                      rowsPerPageOptions: a,
                      onChangePage: s,
                      rowsPerPage: u.perPage,
                      onChangeRowsPerPage: m,
                    }),
                  ),
              );
        },
        qc = Object(Ya.a)(function () {
          return { container: { paddingTop: 24, paddingBottom: 24 } };
        }),
        Dc = function () {
          var e = qc();
          return (
            Yc(),
            r.a.createElement(
              Da.a,
              { className: e.container },
              r.a.createElement(Vc, null),
              r.a.createElement(Nr, null),
            )
          );
        },
        Yc = function () {
          var e = Gc().fetchStorageItemsWatcher;
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
        Qc = function () {
          var e = Xc();
          return (
            Zc(),
            r.a.createElement(
              Da.a,
              { className: e.container },
              r.a.createElement(Pr, { archive: !0 }),
              r.a.createElement(Nr, null),
            )
          );
        },
        Xc = Object(Ya.a)(function () {
          return {
            container: {
              display: 'flex',
              minWidth: 0,
              flexGrow: 1,
              paddingTop: 16,
            },
          };
        }),
        Zc = function () {
          var e = nn(),
            t = e.fetchArchiveListWatch,
            a = e.resetList;
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
        $c = [
          {
            path: '/',
            exact: !0,
            component: function () {
              return r.a.createElement(s.a, { to: G });
            },
          },
          {
            path: U,
            component: wa,
            routes: [{ path: W, exact: !0, component: Sa }],
          },
          {
            path: H,
            component: qa,
            routes: [
              { path: G, component: Wr },
              { path: J, component: tc },
              { path: _, component: xc },
              { path: V, component: Dc },
              { path: q, component: Qc },
            ],
          },
        ];
      function eo() {
        var e = Object(Nt.a)([
          '\n  width: 100vw;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n',
        ]);
        return (
          (eo = function () {
            return e;
          }),
          e
        );
      }
      var to = Kt.a.div(eo()),
        ao = function () {
          var e = Ut().fetchMe;
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
        no = function (e) {
          var t = Object(i.c)(Pt);
          return (
            ao(),
            t
              ? r.a.createElement(r.a.Fragment, null, e.children)
              : r.a.createElement(
                  to,
                  null,
                  r.a.createElement(on.a, { size: 60 }),
                )
          );
        },
        ro = function (e) {
          var t = Object(s.g)(),
            a = Object(i.c)(
              Object(Ge.createStructuredSelector)({ isUserAuthorized: Ct }),
            );
          return a.isUserAuthorized && '/auth/login' === t.pathname
            ? r.a.createElement(s.a, { to: '/' })
            : a.isUserAuthorized || '/auth/login' === t.pathname
            ? r.a.createElement(r.a.Fragment, null, e.children)
            : r.a.createElement(s.a, { to: '/auth/login' });
        },
        co = document.getElementById('root');
      if (co) {
        var oo = Object(m.a)();
        o.a.render(
          r.a.createElement(
            i.a,
            { store: pt },
            r.a.createElement(f.a, null),
            r.a.createElement(
              u.a,
              { theme: Et },
              r.a.createElement(
                s.c,
                { history: oo },
                r.a.createElement(
                  no,
                  null,
                  r.a.createElement(ro, null, Object(l.a)($c)),
                ),
              ),
            ),
          ),
          co,
        );
      }
    },
  },
  [[324, 1, 2]],
]);
//# sourceMappingURL=main.7f9335f8.chunk.js.map
