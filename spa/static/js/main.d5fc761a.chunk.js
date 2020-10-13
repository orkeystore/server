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
        i = a(12),
        u = a(425),
        l = a(150),
        s = a(106),
        m = a(60),
        f = a(435),
        p = (a(332), a(333), a(32)),
        d = a(293),
        b = a(314),
        h = a(100),
        g = (a(294), a(5)),
        O = a.n(g),
        v = a(9),
        j = a(2),
        E = a(23),
        y = a(81),
        x = a(130),
        k = a(131),
        C = (a(335), a(132)),
        S = a(295),
        w = a(315),
        P = a(316),
        I = (function (e) {
          Object(S.a)(a, e);
          var t = Object(w.a)(a);
          function a(e, n) {
            var r;
            return (
              Object(x.a)(this, a),
              ((r = t.call(this, n)).status = e),
              (r.message = n),
              Object.setPrototypeOf(Object(C.a)(r), a.prototype),
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
                                  ht.dispatch(
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
        M = (function () {
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
        A = Object(v.a)(
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
            var t, a;
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
                      e.abrupt('return', a)
                    );
                  case 6:
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
          login: M,
          logout: A,
          me: T,
        },
        K = a(51),
        z = a.n(K),
        W = {
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
                  u = arguments;
                return O.a.wrap(function (e) {
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
        U = '/auth/login',
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
            var e = Object(v.a)(
              O.a.mark(function e(t) {
                return O.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), W.auth.login(t);
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
                      return (e.next = 2), W.auth.me();
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
                      return (e.next = 2), W.auth.logout();
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
            var e = Object(v.a)(
              O.a.mark(function e(t, a) {
                var n;
                return O.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), W.auth.account(t);
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
                        return (e.next = 2), W.auth.remove(t);
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
                      return (e.next = 2), W.auth.accounts();
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
                  { search: t.payload.search },
                ),
              },
            );
          },
        },
        fe = Object(E.a)(
          ''.concat('REPOS', '/FETCH_LIST'),
          (function () {
            var e = Object(v.a)(
              O.a.mark(function e(t) {
                return O.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), W.repos.list(t);
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
            var e = Object(v.a)(
              O.a.mark(function e(t) {
                var a;
                return O.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), W.repos.create(t);
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
            var e = Object(v.a)(
              O.a.mark(function e(t) {
                var a;
                return O.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), W.repos.remove(t);
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
        Oe = {
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
        ve = Object(E.a)(
          ''.concat('STORAGE', '/FETCH_STORAGE'),
          (function () {
            var e = Object(v.a)(
              O.a.mark(function e(t) {
                return O.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), W.keys.storage(t);
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
          reducers: Oe,
          extraReducers: function (e) {
            e.addCase(ve.fulfilled, function (e, t) {
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
          { fetchStorageItems: ve },
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
          edit: { isModalOpened: !1, loading: !1, error: null },
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
            return xe;
          },
        },
        Ce = Object(E.a)(
          ''.concat('KEYS', '/SUBMIT_KEY'),
          (function () {
            var e = Object(v.a)(
              O.a.mark(function e(t) {
                var a;
                return O.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), W.keys.create(t);
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
        Se = Object(E.a)(
          ''.concat('KEYS', '/FETCH_KEYS'),
          (function () {
            var e = Object(v.a)(
              O.a.mark(function e(t) {
                return O.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), W.keys.list(t);
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
        we = Object(E.a)(
          ''.concat('KEYS', '/REMOVE_KEY'),
          (function () {
            var e = Object(v.a)(
              O.a.mark(function e(t) {
                var a;
                return O.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), W.keys.remove(t);
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
            var e = Object(v.a)(
              O.a.mark(function e(t) {
                return O.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), W.keys.archive(t);
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
            var e = Object(v.a)(
              O.a.mark(function e(t) {
                return O.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), W.keys.restore(t);
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
            e.addCase(Se.pending, function (e) {
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
              e.addCase(Se.fulfilled, function (e, t) {
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
              e.addCase(we.fulfilled, function (e, t) {
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
              e.addCase(Ce.fulfilled, function (e, t) {
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
          Object(j.a)({}, Re.actions),
          {},
          {
            fetchKeysList: Se,
            fetchRemoveKeyItem: we,
            fetchArchiveKeyItem: Pe,
            fetchRestoreKeyItem: Ie,
            fetchCreateKey: Ce,
          },
        ),
        Ae = Re.reducer,
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
        Ne = Object(E.a)(
          ''.concat('KEY_PREVIEW', '/FETCH_KEY'),
          (function () {
            var e = Object(v.a)(
              O.a.mark(function e(t, a) {
                var n;
                return O.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), W.keys.preview(t);
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
            e.addCase(Ne.fulfilled, function (e, t) {
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
        Fe = Object(j.a)(
          Object(j.a)({}, Le.actions),
          {},
          { fetchKeyPreview: Ne },
        ),
        Ke = {
          session: ae,
          keys: Ae,
          accounts: ue,
          repos: ge,
          storage: ye,
          keyPreview: Le.reducer,
        },
        ze = Object(p.combineReducers)(Ke),
        We = a(26),
        Be = O.a.mark(He),
        Ue = O.a.mark(Je);
      function He() {
        return O.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(We.a)(Je);
              case 2:
              case 'end':
                return e.stop();
            }
        }, Be);
      }
      function Je() {
        return O.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2),
                  Object(We.d)(
                    [te.fetchLoginUser.fulfilled, te.fetchMe.fulfilled],
                    O.a.mark(function e() {
                      return O.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2), Object(We.b)(te.defineMenuLinks())
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
          return e.edit.isModalOpened;
        }),
        Qe = Object(Ge.createSelector)(_e, function (e) {
          return e.isRouteParsed;
        }),
        Xe = Object(Ge.createSelector)(_e, function (e) {
          return e.list.pagerOptions;
        }),
        Ze = Object(Ge.createSelector)(De, Ve, function (e, t) {
          return (
            (!e || 0 === e.length) && !t.loading.keys && 0 === t.items.length
          );
        }),
        $e = Object(Ge.createSelector)(Ve, function (e) {
          return {
            loading: e.loading.keys,
            error: e.errors.keys,
            data: { items: e.items },
            pager: e.pager,
          };
        }),
        et = O.a.mark(at),
        tt = O.a.mark(nt);
      function at() {
        return O.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(We.a)(nt);
              case 2:
              case 'end':
                return e.stop();
            }
        }, et);
      }
      function nt() {
        return O.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2),
                  Object(We.d)(
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
                              return (e.next = 2), Object(We.c)(qe);
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
                                Object(We.b)(Me.changePager({ page: c }))
                              );
                            case 10:
                              e.next = 14;
                              break;
                            case 12:
                              return (
                                (e.next = 14), Object(We.b)(Me.fetchKeysList(r))
                              );
                            case 14:
                              e.next = 18;
                              break;
                            case 16:
                              return (
                                (e.next = 18), Object(We.b)(Me.fetchKeysList(r))
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
        }, tt);
      }
      var rt = function (e) {
          return e.repos;
        },
        ct =
          (Object(Ge.createSelector)(rt, function (e) {
            return e.create;
          }),
          Object(Ge.createSelector)(rt, function (e) {
            return e.list;
          })),
        ot = Object(Ge.createSelector)(ct, function (e) {
          return e.pager;
        }),
        it = Object(Ge.createSelector)(ct, function (e) {
          return e.search;
        }),
        ut =
          (Object(Ge.createSelector)(ct, function (e) {
            return e.pagerOptions;
          }),
          Object(Ge.createSelector)(rt, function (e) {
            return Boolean(e.isEditModalOpened);
          })),
        lt = Object(Ge.createSelector)(ct, function (e) {
          var t = e.search,
            a = e.loading,
            n = e.items;
          return (!t || 0 === t.length) && !a && 0 === n.length;
        }),
        st = O.a.mark(ft),
        mt = O.a.mark(pt);
      function ft() {
        return O.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(We.a)(pt);
              case 2:
              case 'end':
                return e.stop();
            }
        }, st);
      }
      function pt() {
        return O.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2),
                  Object(We.d)(
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
                              return (e.next = 2), Object(We.c)(ot);
                            case 2:
                              return (
                                (a = e.sent), (e.next = 5), Object(We.c)(it)
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
                                Object(We.b)(he.changePager({ page: o }))
                              );
                            case 12:
                              e.next = 16;
                              break;
                            case 14:
                              return (
                                (e.next = 16), Object(We.b)(he.fetchListRepo(c))
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
        }, mt);
      }
      var dt = O.a.mark(bt);
      function bt() {
        return O.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(We.a)(He);
              case 2:
                return (e.next = 4), Object(We.a)(at);
              case 4:
                return (e.next = 6), Object(We.a)(ft);
              case 6:
              case 'end':
                return e.stop();
            }
        }, dt);
      }
      var ht = (function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = Object(b.a)(),
            a = [h.a, t],
            n = p.applyMiddleware.apply(void 0, a),
            r = Object(p.createStore)(ze, e, Object(d.composeWithDevTools)(n));
          return t.run(bt), r;
        })(),
        gt = function () {
          return Object(i.b)();
        },
        Ot = a(313),
        vt = a(13),
        jt = '#FFFFFF',
        Et = {
          black: '#000000',
          white: jt,
          primary: {
            contrastText: jt,
            dark: vt.a.indigo[900],
            main: vt.a.indigo[500],
            light: vt.a.indigo[100],
          },
          secondary: {
            contrastText: jt,
            dark: vt.a.blue[900],
            main: vt.a.blue.A400,
            light: vt.a.blue.A400,
          },
          error: {
            contrastText: jt,
            dark: vt.a.red[900],
            main: vt.a.red[600],
            light: vt.a.red[400],
          },
          text: {
            primary: vt.a.blueGrey[900],
            secondary: vt.a.blueGrey[600],
            link: vt.a.blue[600],
          },
          link: vt.a.blue[800],
          icon: vt.a.blueGrey[600],
          background: { default: '#F4F6F8', paper: jt },
          divider: vt.a.grey[200],
        },
        yt = function (e) {
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
        xt = {
          MuiTableHead: { root: { backgroundColor: vt.a.grey[50] } },
          MuiTableCell: {
            root: { fontSize: 14 },
            body: { borderBottom: '1px solid '.concat(vt.a.grey[200]) },
            head: {
              paddingTop: 10,
              paddingBottom: 10,
              borderBottom: '1px solid '.concat(vt.a.grey[200]),
              color: vt.a.blueGrey[500],
            },
          },
          MuiCardHeader: {
            root: { borderBottom: '1px solid '.concat(vt.a.grey[200]) },
            action: { marginRight: 0, marginTop: 0 },
          },
        },
        kt = Object(Ot.a)({ palette: Et, typography: yt, overrides: xt }),
        Ct = a(396),
        St = a(398),
        wt = a(50),
        Pt = a(399),
        It = function (e) {
          return e.session;
        },
        Rt = Object(Ge.createSelector)(It, function (e) {
          return e.isUserAuthorized;
        }),
        Mt = Object(Ge.createSelector)(It, function (e) {
          return e.isAlreadyFetched;
        }),
        At = Object(Ge.createSelector)(It, function (e) {
          return e.isSessionExpired;
        }),
        Tt = Object(Ge.createSelector)(It, function (e) {
          return e.account;
        }),
        Nt = Object(Ge.createSelector)(It, function (e) {
          return e.host;
        }),
        Lt = Object(Ge.createSelector)(It, function (e) {
          return e.mainMenuLinks;
        }),
        Ft = Object(Ge.createSelector)(It, function (e) {
          return e.errors;
        }),
        Kt =
          (Object(Ge.createSelector)(It, function (e) {
            return e.token || null;
          }),
          Object(Ge.createSelector)(It, function (e) {
            return e.token || null;
          })),
        zt = Object(Ge.createSelector)(It, function (e) {
          return e.privateHost;
        }),
        Wt = Object(Ge.createSelector)(It, function (e) {
          return e.publicHost;
        }),
        Bt = a(22),
        Ut = a(24);
      function Ht() {
        var e = Object(Bt.a)(['\n  flex-grow: 1;\n']);
        return (
          (Ht = function () {
            return e;
          }),
          e
        );
      }
      var Jt = Ut.a.div(Ht()),
        Gt = function () {
          var e = gt();
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
        _t = function () {
          return { logout: Gt().logout };
        },
        Vt = function () {
          var e = Object(i.c)(Tt),
            t = _t().logout,
            a = void 0 !== e;
          return r.a.createElement(
            Ct.a,
            { position: 'static' },
            r.a.createElement(
              St.a,
              null,
              r.a.createElement(
                wt.a,
                { variant: 'h4', color: 'inherit' },
                'Orkeystore',
              ),
              r.a.createElement(Jt, null),
              a &&
                r.a.createElement(
                  Pt.a,
                  { color: 'inherit', onClick: t },
                  'Logout',
                ),
            ),
          );
        };
      function qt() {
        var e = Object(Bt.a)([
          '\n  flex-grow: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n',
        ]);
        return (
          (qt = function () {
            return e;
          }),
          e
        );
      }
      function Dt() {
        var e = Object(Bt.a)(['\n']);
        return (
          (Dt = function () {
            return e;
          }),
          e
        );
      }
      function Yt() {
        var e = Object(Bt.a)([
          '\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n',
        ]);
        return (
          (Yt = function () {
            return e;
          }),
          e
        );
      }
      var Qt = Ut.a.div(Yt()),
        Xt = Ut.a.div(Dt()),
        Zt = Ut.a.div(qt()),
        $t = a(25),
        ea = a(301),
        ta = a.n(ea),
        aa = a(107),
        na = a(440);
      function ra() {
        var e = Object(Bt.a)([
          '\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n',
        ]);
        return (
          (ra = function () {
            return e;
          }),
          e
        );
      }
      function ca() {
        var e = Object(Bt.a)([
          '\n  padding-left: 15px;\n  padding-top: 2px;\n',
        ]);
        return (
          (ca = function () {
            return e;
          }),
          e
        );
      }
      function oa() {
        var e = Object(Bt.a)([
          '\n  padding: 10px;\n  flex-grow: 1;\n  background-color: ',
          ';\n  color: ',
          ';\n',
        ]);
        return (
          (oa = function () {
            return e;
          }),
          e
        );
      }
      var ia = Object(Ut.a)(aa.a)(
          oa(),
          kt.palette.error.light,
          kt.palette.error.contrastText,
        ),
        ua = Object(Ut.a)(wt.a)(ca()),
        la = Object(Ut.a)(na.a)(ra()),
        sa = function (e) {
          return r.a.createElement(
            ia,
            Object.assign({ elevation: e.elevation }, e.root),
            r.a.createElement(
              la,
              null,
              r.a.createElement(ta.a, { color: 'inherit' }),
              r.a.createElement(ua, { color: 'inherit' }, e.children),
            ),
          );
        };
      sa.defaultProps = { elevation: 0, severnity: 'error' };
      var ma = sa;
      function fa() {
        var e = Object(Bt.a)(['\n  width: 100%;\n']);
        return (
          (fa = function () {
            return e;
          }),
          e
        );
      }
      function pa() {
        var e = Object(Bt.a)([
          '\n  flex-grow: 1;\n  margin-bottom: 10px;\n  &:last-child {\n    margin-bottom: 0;\n  }\n',
        ]);
        return (
          (pa = function () {
            return e;
          }),
          e
        );
      }
      function da() {
        var e = Object(Bt.a)([
          '\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n  &:last-child {\n    margin-bottom: 0;\n  }\n',
        ]);
        return (
          (da = function () {
            return e;
          }),
          e
        );
      }
      function ba() {
        var e = Object(Bt.a)(['']);
        return (
          (ba = function () {
            return e;
          }),
          e
        );
      }
      function ha() {
        var e = Object(Bt.a)(['\n  margin-bottom: 20px;\n']);
        return (
          (ha = function () {
            return e;
          }),
          e
        );
      }
      function ga() {
        var e = Object(Bt.a)(['\n  width: 300px;\n']);
        return (
          (ga = function () {
            return e;
          }),
          e
        );
      }
      var Oa = Ut.a.div(ga()),
        va = (Ut.a.div(ha()), Ut.a.div(ba())),
        ja = Ut.a.div(da()),
        Ea = Ut.a.div(pa()),
        ya = Object(Ut.a)(Pt.a)(fa()),
        xa = a(401),
        ka = a(402),
        Ca = a(403),
        Sa = a(404),
        wa = { username: '', password: '' },
        Pa = function () {
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
        Ia = function () {
          var e = Object(i.c)(Ft),
            t = Pa(),
            a = t.handleSubmit,
            n = t.validate;
          return r.a.createElement(
            xa.a,
            null,
            r.a.createElement(ka.a, {
              title: r.a.createElement(wt.a, { variant: 'h3' }, 'Sign in'),
            }),
            r.a.createElement(
              Ca.a,
              null,
              r.a.createElement(
                Oa,
                null,
                r.a.createElement(
                  va,
                  null,
                  r.a.createElement(
                    $t.c,
                    { initialValues: wa, validate: n, onSubmit: a },
                    function (t) {
                      return r.a.createElement(
                        $t.b,
                        null,
                        r.a.createElement(
                          ja,
                          null,
                          r.a.createElement(
                            $t.a,
                            { name: 'username' },
                            function (e) {
                              var t = e.field,
                                a = e.meta;
                              return r.a.createElement(
                                Sa.a,
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
                          ja,
                          null,
                          r.a.createElement(
                            $t.a,
                            { name: 'password' },
                            function (e) {
                              var t = e.field,
                                a = e.meta;
                              return r.a.createElement(
                                Sa.a,
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
                            ja,
                            null,
                            r.a.createElement(ma, null, e.loginForm),
                          ),
                        r.a.createElement(
                          ja,
                          null,
                          r.a.createElement(
                            Ea,
                            null,
                            r.a.createElement(
                              ya,
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
        Ra = function () {
          return r.a.createElement(
            Qt,
            null,
            r.a.createElement(Xt, null, r.a.createElement(Vt, null)),
            r.a.createElement(Zt, null, r.a.createElement(Ia, null)),
          );
        },
        Ma = a(406),
        Aa = function () {
          var e = Object(i.c)(At);
          return r.a.createElement(
            Ma.a,
            { open: e },
            r.a.createElement(Ia, null),
          );
        },
        Ta = a(407),
        Na = a(380),
        La = a(383),
        Fa = a(408),
        Ka = a(410),
        za = a(409),
        Wa = Object(Ta.a)(function () {
          return { iconWrap: { maxWidth: 40, minWidth: 40 } };
        }),
        Ba = function () {
          var e = Object(s.f)(),
            t = Object(i.c)(Lt),
            a = Wa();
          return r.a.createElement(
            Na.a,
            { component: 'nav' },
            t.map(function (t) {
              return r.a.createElement(
                La.a,
                {
                  key: t.id,
                  button: !0,
                  onClick: function () {
                    return e.push(t.path);
                  },
                },
                r.a.createElement(
                  Fa.a,
                  { className: a.iconWrap },
                  r.a.createElement(za.a, null, t.icon),
                ),
                r.a.createElement(Ka.a, null, t.title),
              );
            }),
          );
        };
      function Ua() {
        var e = Object(Bt.a)([
          '\n  display: flex;\n  background-color: ',
          ';\n  flex: 1 1 auto;\n  min-width: 0;\n',
        ]);
        return (
          (Ua = function () {
            return e;
          }),
          e
        );
      }
      function Ha() {
        var e = Object(Bt.a)([
          '\n  flex: 0 0 250px;\n  background-color: ',
          ';\n',
        ]);
        return (
          (Ha = function () {
            return e;
          }),
          e
        );
      }
      function Ja() {
        var e = Object(Bt.a)([
          '\n  flex: 1 1 auto;\n  display: flex;\n  min-width: 0;\n',
        ]);
        return (
          (Ja = function () {
            return e;
          }),
          e
        );
      }
      function Ga() {
        var e = Object(Bt.a)(['']);
        return (
          (Ga = function () {
            return e;
          }),
          e
        );
      }
      function _a() {
        var e = Object(Bt.a)([
          '\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n',
        ]);
        return (
          (_a = function () {
            return e;
          }),
          e
        );
      }
      var Va = Ut.a.div(_a()),
        qa = Ut.a.div(Ga()),
        Da = Ut.a.div(Ja()),
        Ya = Ut.a.div(Ha(), kt.palette.background.paper),
        Qa = Ut.a.main(Ua(), kt.palette.background.default),
        Xa = function (e) {
          var t = e.route;
          return r.a.createElement(
            Va,
            null,
            r.a.createElement(Aa, null),
            r.a.createElement(qa, null, r.a.createElement(Vt, null)),
            r.a.createElement(
              Da,
              null,
              r.a.createElement(Ya, null, r.a.createElement(Ba, null)),
              r.a.createElement(
                Qa,
                null,
                t && t.routes && Object(l.a)(t.routes),
              ),
            ),
          );
        },
        Za = a(428),
        $a = a(192),
        en = a(418),
        tn = a(92),
        an = a.n(tn),
        nn = a(437),
        rn = a(436),
        cn = function (e) {
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
        on = function () {
          var e = gt(),
            t = Object(i.c)(qe),
            a = Object(i.c)(De),
            r = Object(i.c)(Kt),
            c = Object(i.c)(Qe),
            o = Object(i.c)(Ye),
            u = Object(s.f)(),
            l = Object(s.g)(),
            m = Object(n.useCallback)(
              function (t) {
                return e(Me.fetchKeysList(t));
              },
              [e, r],
            ),
            f = Object(n.useCallback)(
              function (t) {
                return e(Me.toggleEditModal(t));
              },
              [e],
            ),
            p = Object(n.useCallback)(
              function (t) {
                return e(Me.setInitialRouteParsing(t));
              },
              [e],
            ),
            d = Object(n.useCallback)(
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
                              (n = cn(64)),
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
            C = Object(n.useCallback)(
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
                            return e.abrupt('return', W.keys.list(t));
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
            w = Object(n.useCallback)(
              (function () {
                var e = Object(v.a)(
                  O.a.mark(function e(t) {
                    return O.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), W.keys.byIds(t);
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
              var e = z.a.parse(l.search, { ignoreQueryPrefix: !0 });
              ['page', 'perPage'].forEach(function (t) {
                var a = e[t];
                if (void 0 !== a) {
                  var n = parseInt(a.toString());
                  isNaN(n) || k(Object(y.a)({}, t, n));
                }
              }),
                e.search &&
                  'string' === typeof e.search &&
                  C({ search: e.search }),
                e.newEntry && f({ isOpened: !0 }),
                p({ isParsed: !0 });
            }, []),
            routeWatcher: Object(n.useCallback)(
              function () {
                var e = xe.list.pager.page,
                  n = xe.list.pager.perPage,
                  r = z.a.stringify(
                    {
                      page: t.page === e ? void 0 : t.page,
                      perPage: t.perPage === n ? void 0 : t.perPage,
                      search: void 0 === a || 0 === a.length ? void 0 : a,
                      newEntry: o ? '1' : void 0,
                    },
                    { addQueryPrefix: !0 },
                  );
                c && u.push({ search: r });
              },
              [u, t.page, t.perPage, a, c, o],
            ),
            resetList: P,
            changePager: k,
            changeSearch: C,
            fetchKeysList: m,
            fetchKeysListWatch: d,
            fetchArchiveListWatch: b,
            fetchCreateKey: h,
            fetchRemoveKeyItem: g,
            fetchRestoreKeyItem: x,
            fetchArchiveKeyItem: E,
            requestKeysList: S,
            requestKeysByIds: w,
            toggleEditModal: f,
          };
        },
        un = a(64),
        ln = a.n(un),
        sn = a(420),
        mn = a(441),
        fn = a(422),
        pn = a(423),
        dn = a(424),
        bn = a(188),
        hn = a.n(bn),
        gn = a(307),
        On = a.n(gn),
        vn = a(412),
        jn = a(386),
        En = a(305),
        yn = a.n(En),
        xn = a(36),
        kn = a(411),
        Cn = a(304),
        Sn = a.n(Cn),
        wn = function (e) {
          var t = Object(n.useState)(!1),
            a = Object(xn.a)(t, 2),
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
        Pn = function (e) {
          var t = wn(e),
            a = t.isCopied,
            n = t.handleCopy,
            c = t.handleCloseSnack;
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              kn.a,
              {
                anchorOrigin: { horizontal: 'center', vertical: 'bottom' },
                open: a,
                autoHideDuration: 1e3,
                onClose: c,
              },
              r.a.createElement(
                nn.a,
                { onClose: c, severity: 'success' },
                r.a.createElement(
                  wt.a,
                  { variant: 'h6', component: 'div' },
                  e.message,
                ),
              ),
            ),
            r.a.createElement(
              jn.a,
              { onClick: n },
              r.a.createElement(Sn.a, { fontSize: 'small' }),
            ),
          );
        },
        In = function (e) {
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
        Rn = Object($a.a)(function () {
          return {
            list: { padding: 0, paddingBottom: 10, width: '100%' },
            item: { padding: 0, paddingBottom: 10, paddingTop: 10 },
          };
        }),
        Mn = function (e) {
          var t = Rn(),
            a = In(e),
            n = a.inputRefs,
            c = a.handleFocus;
          return r.a.createElement(
            Na.a,
            { className: t.list },
            e.items.map(function (e, a) {
              return r.a.createElement(
                La.a,
                { className: t.item, key: e.code },
                r.a.createElement(Sa.a, {
                  value: e.url,
                  label: e.label,
                  fullWidth: !0,
                  variant: 'outlined',
                  onFocus: c,
                  InputProps: {
                    inputRef: n[a],
                    endAdornment: r.a.createElement(
                      vn.a,
                      { position: 'end' },
                      r.a.createElement(Pn, {
                        inputRef: n[a],
                        message: 'URL has been copied!',
                      }),
                      !e.isPrivate &&
                        r.a.createElement(
                          jn.a,
                          {
                            onClick: function () {
                              window.open(e.url, '_blank');
                            },
                          },
                          r.a.createElement(yn.a, { fontSize: 'small' }),
                        ),
                    ),
                  },
                }),
              );
            }),
          );
        },
        An = a(413),
        Tn = a(414),
        Nn = a(415),
        Ln = function (e) {
          var t = Object(n.useState)(!1),
            a = Object(xn.a)(t, 2),
            c = a[0],
            o = a[1],
            i = e.onSubmit;
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              Ma.a,
              {
                open: c,
                onClose: function () {
                  return o(!1);
                },
              },
              e.title &&
                r.a.createElement(
                  An.a,
                  null,
                  r.a.createElement(
                    wt.a,
                    { variant: 'h4', component: 'div' },
                    e.title,
                  ),
                ),
              e.content && r.a.createElement(Tn.a, null, e.content),
              r.a.createElement(
                Nn.a,
                null,
                r.a.createElement(
                  Pt.a,
                  {
                    onClick: function () {
                      return o(!1);
                    },
                    color: 'primary',
                  },
                  'Cancel',
                ),
                r.a.createElement(
                  Pt.a,
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
        Fn = a(416),
        Kn = a(369),
        zn = Object(Kn.a)(function (e) {
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
        })(Fn.a),
        Wn = function (e) {
          return r.a.createElement(zn, e);
        },
        Bn = a(419),
        Un = function (e) {
          return Object(Ta.a)(function () {
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
                background: vt.a.grey[100],
              },
              code: { background: 'none' },
            };
          });
        },
        Hn = function (e) {
          var t = Un(e)();
          return r.a.createElement(
            'pre',
            { className: t.pre },
            r.a.createElement('code', { className: t.code }, e.children),
          );
        },
        Jn = a(303),
        Gn = a(417),
        _n = function () {
          return {
            styles: Vn(),
            menuStaticProps: Object(n.useMemo)(function () {
              return {
                anchorOrigin: { horizontal: 'right', vertical: 'top' },
                transformOrigin: { horizontal: 'right', vertical: 'top' },
              };
            }, []),
          };
        },
        Vn = Object(Ta.a)(function () {
          return { menu: { width: 150 } };
        }),
        qn = function (e) {
          var t = _n(),
            a = t.menuStaticProps,
            n = t.styles;
          return r.a.createElement(
            Jn.a,
            Object.assign({}, a, {
              keepMounted: !0,
              anchorEl: e.anchorEl,
              className: n.menu,
              open: Boolean(e.anchorEl),
              onClose: e.handleClose,
            }),
            e.menu.map(function (t) {
              return r.a.createElement(
                Gn.a,
                {
                  key: t.id,
                  onClick: function () {
                    e.onSelectMenuItem && e.onSelectMenuItem(t),
                      e.handleClose();
                  },
                },
                r.a.createElement(wt.a, { variant: 'button' }, t.label),
              );
            }),
          );
        },
        Dn = function (e) {
          var t = e.menu,
            a = e.currentMenuLabel,
            n = e.fieldProps,
            c = e.inputProps,
            o = e.disabled,
            i = r.a.useState(null),
            u = Object(xn.a)(i, 2),
            l = u[0],
            s = u[1];
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              Sa.a,
              Object.assign({ fullWidth: !0 }, n, {
                variant: 'outlined',
                disabled: o,
                InputProps: Object(j.a)(
                  {
                    endAdornment: a
                      ? r.a.createElement(
                          vn.a,
                          { position: 'end' },
                          e.beforeOptions,
                          r.a.createElement(
                            Pt.a,
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
              r.a.createElement(qn, {
                anchorEl: l,
                menu: t,
                onSelectMenuItem: e.onSelectMenuItem,
                handleClose: function () {
                  s(null);
                },
              }),
          );
        },
        Yn = function () {
          var e = gt(),
            t = Object(n.useCallback)(
              function (t) {
                e(Fe.toggleModal({ isOpen: t }));
              },
              [e],
            ),
            a = Object(n.useCallback)(
              function (t) {
                return e(Fe.fetchKeyPreview(t));
              },
              [e],
            ),
            r = Object(n.useCallback)(
              function (t) {
                e(Fe.setParams(t));
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
        Qn = [
          { id: 'jwk', label: 'JWK' },
          { id: 'jwks', label: 'JWKs' },
          { id: 'pem', label: 'PEM' },
        ],
        Xn = function (e) {
          var t = Object(n.useState)(Qn[0].id),
            a = Object(xn.a)(t, 2),
            r = a[0],
            c = a[1],
            o = Yn().openKeyPreview,
            u = Object(n.useMemo)(
              function () {
                return (
                  Qn.find(function (e) {
                    return e.id === r;
                  }) || Qn[0]
                );
              },
              [r],
            ),
            l = Object(i.c)(zt) || '',
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
        Zn = Object($a.a)(function () {
          return {
            exampleMessage: {
              display: 'flex',
              justifyContent: 'space-between',
            },
          };
        }),
        $n = function (e) {
          var t = Xn(e),
            a = t.fieldProps,
            n = t.inputProps,
            c = t.format,
            o = t.targetUrl,
            i = t.urlRef,
            u = t.accessRef,
            l = t.handleSetFormat,
            s = t.handleOpenPreviewModal,
            m = t.handleFocus,
            f = Zn(),
            p = e.item;
          return r.a.createElement(
            en.a,
            { container: !0, spacing: 3 },
            r.a.createElement(
              en.a,
              { item: !0, xs: 12 },
              r.a.createElement(Sa.a, {
                fullWidth: !0,
                label: 'Access key',
                variant: 'outlined',
                value: p.accessCode,
                onFocus: m,
                InputProps: {
                  inputRef: u,
                  endAdornment: r.a.createElement(
                    vn.a,
                    { position: 'end' },
                    r.a.createElement(Pn, {
                      inputRef: u,
                      message: 'URL has been copied!',
                    }),
                  ),
                },
              }),
            ),
            r.a.createElement(
              en.a,
              { item: !0, xs: 12 },
              r.a.createElement(Dn, {
                menu: Qn,
                currentMenuLabel: c.label,
                onSelectMenuItem: l,
                fieldProps: a,
                inputProps: n,
                afterOptions: r.a.createElement(Pn, {
                  inputRef: i,
                  message: 'URL has been copied!',
                }),
              }),
            ),
            p.accessCode &&
              r.a.createElement(
                en.a,
                { item: !0, xs: 12 },
                r.a.createElement(
                  'div',
                  { className: f.exampleMessage },
                  r.a.createElement(
                    wt.a,
                    null,
                    'Key can be fetched via POST with access code.',
                  ),
                  r.a.createElement(Bn.a, { onClick: s }, 'Preview'),
                ),
                r.a.createElement(
                  Hn,
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
        er = function (e) {
          var t = Object(i.c)(Wt),
            a = on(),
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
                  'Rotation period: '.concat(ln.a.duration(l, 's').humanize())
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
        tr = Object(Ta.a)(function () {
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
        ar = function (e) {
          var t = tr(),
            a = er(e),
            n = a.deleteItem,
            c = a.archiveItem,
            o = a.restoreItem,
            i = a.rotation,
            u = a.publicUrls,
            l = e.data;
          return l
            ? r.a.createElement(
                xa.a,
                null,
                r.a.createElement(
                  Ca.a,
                  null,
                  r.a.createElement(
                    en.a,
                    { container: !0, spacing: 2, justify: 'space-between' },
                    r.a.createElement(
                      en.a,
                      { item: !0 },
                      r.a.createElement(wt.a, { variant: 'caption' }, 'Name'),
                      r.a.createElement(wt.a, { variant: 'h5' }, l.name),
                    ),
                    r.a.createElement(
                      en.a,
                      { item: !0, className: t.codeHolder },
                      r.a.createElement(
                        wt.a,
                        { variant: 'caption' },
                        'Unique code',
                      ),
                      r.a.createElement(wt.a, { variant: 'h5' }, l.code),
                    ),
                  ),
                  r.a.createElement(sn.a, { className: t.divider }),
                  r.a.createElement(
                    wt.a,
                    { variant: 'caption' },
                    l.rotateInterval ? i : 'Non rotatable key',
                  ),
                  r.a.createElement(sn.a, { className: t.divider }),
                  r.a.createElement(
                    mn.a,
                    null,
                    r.a.createElement(
                      fn.a,
                      { expandIcon: r.a.createElement(hn.a, null) },
                      r.a.createElement(wt.a, { variant: 'h6' }, 'Public key'),
                      r.a.createElement(
                        Wn,
                        {
                          placement: 'top-start',
                          title: r.a.createElement(
                            wt.a,
                            {
                              gutterBottom: !0,
                              variant: 'body1',
                              color: 'textPrimary',
                            },
                            'Anyone can get public key by GET request in formats listed below. Rotatable response contain "expires" header.',
                          ),
                        },
                        r.a.createElement(On.a, {
                          className: t.tooltip,
                          color: 'primary',
                          fontSize: 'small',
                        }),
                      ),
                    ),
                    r.a.createElement(
                      pn.a,
                      null,
                      r.a.createElement(
                        'div',
                        { style: { flexGrow: 1 } },
                        r.a.createElement(Mn, { items: u }),
                      ),
                    ),
                  ),
                  r.a.createElement(
                    mn.a,
                    null,
                    r.a.createElement(
                      fn.a,
                      { expandIcon: r.a.createElement(hn.a, null) },
                      r.a.createElement(wt.a, { variant: 'h6' }, 'Private key'),
                    ),
                    r.a.createElement(
                      pn.a,
                      null,
                      r.a.createElement(
                        'div',
                        { className: t.privateWrap },
                        r.a.createElement($n, { item: l }),
                      ),
                    ),
                  ),
                ),
                r.a.createElement(
                  dn.a,
                  { className: t.actions },
                  null !== l.archivedAt &&
                    r.a.createElement(
                      r.a.Fragment,
                      null,
                      r.a.createElement(
                        Ln,
                        {
                          title: 'Are you sure want to delete key?',
                          content: 'Every associated keys will be unavailable',
                          onSubmit: function () {
                            return n(l.id);
                          },
                        },
                        r.a.createElement(Pt.a, { size: 'small' }, 'Delete'),
                      ),
                      r.a.createElement(
                        Pt.a,
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
                      Ln,
                      {
                        title: 'Are you sure want to archive entry in storage?',
                        content:
                          'Associated keys will be marked as archived and unavailable. You can restore entry from the archive at any time.',
                        onSubmit: function () {
                          return c(l.id);
                        },
                      },
                      r.a.createElement(Pt.a, { size: 'small' }, 'Archive'),
                    ),
                ),
              )
            : null;
        },
        nr = a(389),
        rr = a(153),
        cr = a.n(rr),
        or = function (e) {
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
        ir = Object($a.a)(function () {
          return { label: { marginRight: 10, fontSize: 12 } };
        }),
        ur = function (e) {
          var t = ir(),
            a = e.current,
            n = e.options,
            c = or(e).handleChange;
          return r.a.createElement(
            na.a,
            null,
            r.a.createElement(
              cr.a,
              { container: !0, alignItems: 'center' },
              r.a.createElement(
                cr.a,
                { item: !0, className: t.label },
                'Items per page:',
              ),
              r.a.createElement(
                cr.a,
                { item: !0 },
                r.a.createElement(
                  nr.a,
                  { value: a, onChange: c },
                  n.map(function (e) {
                    return r.a.createElement(Gn.a, { key: e, value: e }, e);
                  }),
                ),
              ),
            ),
          );
        },
        lr = a(317),
        sr = a(309),
        mr = a.n(sr),
        fr = a(308),
        pr = a.n(fr),
        dr = function (e) {
          var t = e.InputProps,
            a = e.onChange,
            c = e.onThrottledChange,
            o = Object(lr.a)(e, [
              'InputProps',
              'onChange',
              'onThrottledChange',
            ]),
            i = Object(n.useMemo)(
              function () {
                return Object(j.a)(
                  {
                    startAdornment: r.a.createElement(
                      vn.a,
                      { position: 'start' },
                      r.a.createElement(mr.a, null),
                    ),
                  },
                  t,
                );
              },
              [t],
            ),
            u = Object(n.useCallback)(
              pr()(function (e) {
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
        br = function (e) {
          var t = dr(e),
            a = t.InputPropsMemo,
            n = t.restProps,
            c = t.handleChange;
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              Sa.a,
              Object.assign({}, n, {
                onChange: c,
                size: 'small',
                variant: 'outlined',
                InputProps: a,
              }),
            ),
          );
        },
        hr = function () {
          var e = Object(i.c)(Ye),
            t = on(),
            a = t.changePager,
            r = t.changeSearch,
            c = t.toggleEditModal,
            o = Object(n.useCallback)(
              function () {
                c({ isOpened: !e });
              },
              [e, c],
            ),
            u = Object(n.useCallback)(
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
            handlePagerChange: u,
          };
        },
        gr = Object(Ta.a)(function () {
          return {
            pagerHolder: { marginLeft: 'auto' },
            searchHolder: { marginLeft: 'auto', marginTop: 'auto' },
            wrap: { maxWidth: '100%', flexGrow: 1 },
            noItems: { marginTop: 20 },
          };
        }),
        Or = function (e) {
          var t = gr(),
            a = Object(i.c)($e),
            n = a.loading,
            c = a.data,
            o = a.error,
            u = a.pager,
            l = Object(i.c)(Xe),
            s = Object(i.c)(De),
            m = Object(i.c)(Ze),
            f = hr(),
            p = f.handleModalToggle,
            d = f.handlePagerChange,
            b = f.handleChangePerPage,
            h = f.handleChangeSearch;
          return o
            ? r.a.createElement(nn.a, { severity: 'error' }, o)
            : r.a.createElement(
                na.a,
                { className: t.wrap },
                r.a.createElement(
                  en.a,
                  { container: !0, spacing: 2 },
                  r.a.createElement(
                    en.a,
                    {
                      item: !0,
                      container: !0,
                      spacing: 2,
                      xs: 12,
                      alignItems: 'center',
                    },
                    !e.archive &&
                      r.a.createElement(
                        en.a,
                        { item: !0 },
                        r.a.createElement(
                          Pt.a,
                          {
                            variant: 'outlined',
                            startIcon: r.a.createElement(an.a, null),
                            onClick: p,
                          },
                          'Add key entry',
                        ),
                      ),
                    !m &&
                      r.a.createElement(
                        en.a,
                        { item: !0 },
                        r.a.createElement(br, {
                          defaultValue: s,
                          onThrottledChange: h,
                          placeholder: 'Search by name...',
                        }),
                      ),
                  ),
                  !n &&
                    r.a.createElement(
                      r.a.Fragment,
                      null,
                      m &&
                        !e.archive &&
                        r.a.createElement(
                          en.a,
                          { item: !0, xs: 12, className: t.noItems },
                          r.a.createElement(
                            wt.a,
                            { variant: 'h5' },
                            'There is no key entries. Add your first one!',
                          ),
                        ),
                      m &&
                        e.archive &&
                        r.a.createElement(
                          en.a,
                          { item: !0, xs: 12, className: t.noItems },
                          r.a.createElement(
                            wt.a,
                            { variant: 'h5' },
                            'Archive is empty!',
                          ),
                        ),
                      c.items.length > 0 &&
                        r.a.createElement(
                          en.a,
                          { item: !0, xs: 12 },
                          r.a.createElement(
                            en.a,
                            { container: !0, spacing: 2 },
                            c.items.map(function (e) {
                              return r.a.createElement(
                                en.a,
                                { item: !0, key: e.id, xs: 6 },
                                r.a.createElement(ar, { data: e }),
                              );
                            }),
                          ),
                        ),
                    ),
                  void 0 !== u.totalPages &&
                    u.totalPages > 0 &&
                    r.a.createElement(
                      en.a,
                      { container: !0, item: !0, xs: 12, alignItems: 'center' },
                      r.a.createElement(
                        en.a,
                        { item: !0 },
                        r.a.createElement(ur, {
                          current: u.perPage,
                          options: l,
                          onSelect: b,
                        }),
                      ),
                      r.a.createElement(
                        en.a,
                        { item: !0, className: t.pagerHolder },
                        u.totalPages > 1 &&
                          r.a.createElement(rn.a, {
                            onChange: d,
                            count: u.totalPages,
                            page: u.page,
                          }),
                      ),
                    ),
                ),
              );
        },
        vr = function (e) {
          return e.keyPreview;
        },
        jr = Object(Ge.createSelector)(vr, function (e) {
          return e.modal;
        }),
        Er = Object(Ge.createSelector)(vr, function (e) {
          return e.details;
        }),
        yr = Object(Ge.createSelector)(vr, function (e) {
          return e.params;
        }),
        xr = Object(Ge.createSelector)(vr, function (e) {
          return e.availFormats;
        }),
        kr = Object(Ge.createSelector)(vr, function (e) {
          return e.availPrivacy;
        }),
        Cr = function () {
          var e,
            t,
            a = Pr(),
            n = wr(),
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
            k = ln.a.unix(i.data.activatesAt).format('LLL'),
            C = i.data.expiresAt && ln.a.unix(i.data.expiresAt).format('LLL');
          return r.a.createElement(
            aa.a,
            { className: a.wrap },
            r.a.createElement(qn, {
              anchorEl: p ? s.current : null,
              handleClose: b,
              onSelectMenuItem: v,
              menu: c,
            }),
            r.a.createElement(qn, {
              anchorEl: d ? m.current : null,
              handleClose: g,
              onSelectMenuItem: j,
              menu: o,
            }),
            r.a.createElement(
              en.a,
              { container: !0, spacing: 2 },
              r.a.createElement(
                en.a,
                { container: !0, item: !0, xs: 12, alignItems: 'center' },
                r.a.createElement(
                  en.a,
                  { item: !0, xs: 6 },
                  r.a.createElement(wt.a, { variant: 'h3' }, 'Key preview'),
                ),
                r.a.createElement(
                  en.a,
                  { container: !0, item: !0, xs: 6, justify: 'flex-end' },
                  r.a.createElement(
                    Pt.a,
                    { size: 'small', ref: m, onClick: O },
                    x,
                  ),
                  r.a.createElement(
                    Pt.a,
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
                    r.a.createElement(Pn, {
                      inputRef: l,
                      message: 'Key has been copied!',
                    }),
                  ),
                ),
              ),
              r.a.createElement(
                en.a,
                {
                  item: !0,
                  container: !0,
                  xs: 12,
                  justify: 'flex-start',
                  spacing: 2,
                },
                r.a.createElement(
                  en.a,
                  { item: !0 },
                  r.a.createElement(
                    wt.a,
                    { variant: 'caption' },
                    'Activates at: ',
                    k,
                  ),
                ),
                r.a.createElement(
                  en.a,
                  { item: !0 },
                  r.a.createElement(
                    wt.a,
                    { variant: 'caption' },
                    C ? 'Expires at: '.concat(C) : 'No expiration',
                  ),
                ),
              ),
              r.a.createElement(
                en.a,
                { item: !0, xs: 12 },
                r.a.createElement(Hn, null, f),
              ),
              r.a.createElement(
                en.a,
                { item: !0, container: !0, xs: 12, justify: 'flex-end' },
                r.a.createElement(Pt.a, { onClick: E }, 'Close'),
              ),
            ),
          );
        },
        Sr = function (e) {
          var t = wr(),
            a = t.modalState,
            n = t.handleDialogClose;
          return r.a.createElement(
            Ma.a,
            Object.assign({ open: Boolean(a.isOpen), onClose: n }, e),
            r.a.createElement(Cr, null),
          );
        },
        wr = function () {
          var e = Object(i.c)(Er),
            t = Object(i.c)(jr),
            a = Object(i.c)(yr),
            r = Object(i.c)(xr),
            c = Object(i.c)(kr),
            o = Object(n.useState)(!1),
            u = Object(xn.a)(o, 2),
            l = u[0],
            s = u[1],
            m = Object(n.useState)(!1),
            f = Object(xn.a)(m, 2),
            p = f[0],
            d = f[1],
            b = Yn(),
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
            C = Object(n.useRef)(null),
            S = Object(n.useRef)(null),
            w = Object(n.useRef)(null);
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
            keyInputRef: C,
            privacyBtnRef: w,
            formatsBtnRef: S,
            handleFormatsMenuClose: v,
            handleFormatsMenuOpen: j,
            handlePrivacyMenuClose: E,
            handlePrivacyMenuOpen: y,
            handleFormatsMenuItemSelect: x,
            handlePrivacyMenuItemSelect: k,
            handleDialogClose: O,
            toggleFormatsMenu: s,
            togglePrivacyMenu: d,
            togglePreviewModal: g,
          };
        },
        Pr = Object(Ta.a)(function () {
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
        Ir = a(426),
        Rr = a(438),
        Mr = a(427),
        Ar = a(189),
        Tr = a.n(Ar);
      function Nr() {
        var e = Object(Bt.a)(['[w]*'], ['[\\w]*']);
        return (
          (Nr = function () {
            return e;
          }),
          e
        );
      }
      function Lr() {
        var e = Object(Bt.a)(['[d,.]*'], ['[\\d,.]*']);
        return (
          (Lr = function () {
            return e;
          }),
          e
        );
      }
      var Fr = { h: 'hours', d: 'days', w: 'weeks', m: 'months' },
        Kr = { name: '', code: '', rotation: '', unit: 'd', rotatable: '1' },
        zr = function (e) {
          var t = Jr(),
            a = Br(e),
            n = a.menuItems,
            c = a.validate,
            o = a.handleSubmit;
          return r.a.createElement(
            xa.a,
            { style: { width: 400 } },
            r.a.createElement(ka.a, {
              title: r.a.createElement(
                wt.a,
                { variant: 'h3' },
                'Add new key entry',
              ),
            }),
            r.a.createElement(
              Ca.a,
              null,
              r.a.createElement(
                $t.c,
                { initialValues: Kr, validate: c, onSubmit: o },
                function (e) {
                  var a = e.isSubmitting;
                  return r.a.createElement(
                    $t.b,
                    null,
                    r.a.createElement(
                      en.a,
                      { container: !0, spacing: 2 },
                      r.a.createElement(
                        en.a,
                        { item: !0, xs: 12 },
                        r.a.createElement($t.a, { name: 'name' }, function (e) {
                          var a = e.field,
                            n = e.meta;
                          return r.a.createElement(
                            Sa.a,
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
                        en.a,
                        { item: !0, xs: 12 },
                        r.a.createElement($t.a, { name: 'code' }, function (e) {
                          var a = e.field,
                            n = e.meta;
                          return r.a.createElement(
                            Sa.a,
                            Object.assign(
                              {
                                className: t.textfield,
                                error: Boolean(n.touched && n.error),
                                label: 'Unique code',
                                variant: 'outlined',
                                InputProps: {
                                  inputRef: function (e) {
                                    e && Hr.mask(e);
                                  },
                                },
                              },
                              a,
                            ),
                          );
                        }),
                      ),
                      r.a.createElement(
                        en.a,
                        { item: !0, xs: 12 },
                        r.a.createElement($t.a, { name: 'rotation' }, function (
                          t,
                        ) {
                          var a = t.field,
                            c = t.meta,
                            o = '1' === e.values.rotatable;
                          return r.a.createElement(Dn, {
                            menu: n,
                            onSelectMenuItem: function (t) {
                              'string' === typeof t.id &&
                                e.setFieldValue('unit', t.id);
                            },
                            disabled: !o,
                            currentMenuLabel: Fr[e.values.unit],
                            inputProps: {
                              inputRef: function (e) {
                                e && Ur.mask(e);
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
                        en.a,
                        { item: !0, xs: 12 },
                        r.a.createElement(
                          $t.a,
                          { name: 'rotatable' },
                          function (t) {
                            var a = t.field;
                            return r.a.createElement(Ir.a, {
                              control: r.a.createElement(Rr.a, {
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
                          en.a,
                          {
                            item: !0,
                            container: !0,
                            xs: 12,
                            style: { alignItems: 'center' },
                          },
                          r.a.createElement(
                            ma,
                            { root: { style: { flexGrow: 1 } } },
                            e.errors.server,
                          ),
                        ),
                      r.a.createElement(
                        en.a,
                        {
                          item: !0,
                          container: !0,
                          xs: 12,
                          style: { alignItems: 'center' },
                        },
                        r.a.createElement(
                          Pt.a,
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
                            r.a.createElement(Mr.a, {
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
        Wr = function () {
          var e = Object(i.c)(Ye),
            t = on().toggleEditModal,
            a = Object(n.useCallback)(
              function () {
                t({ isOpened: !1 });
              },
              [t],
            );
          return r.a.createElement(
            Ma.a,
            { open: e, onClose: a },
            r.a.createElement(zr, { onSubmit: a }),
          );
        },
        Br = function (e) {
          var t = on().fetchCreateKey,
            a = Object(n.useMemo)(function () {
              return Object.keys(Fr).map(function (e) {
                return { id: e, label: Fr[e] };
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
        Ur = Tr()({ regex: String.raw(Lr()) }),
        Hr = Tr()({ regex: String.raw(Nr()) }),
        Jr = Object(Ta.a)(function () {
          return {
            textfield: { width: '100%' },
            progress: { marginLeft: 20 },
            menu: { width: 150, marginLeft: 10 },
          };
        }),
        Gr = Object($a.a)(function () {
          return {
            container: {
              display: 'flex',
              minWidth: 0,
              flexGrow: 1,
              paddingTop: 16,
            },
          };
        }),
        _r = function () {
          var e = on(),
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
        Vr = function () {
          var e = Gr();
          return (
            _r(),
            r.a.createElement(
              Za.a,
              { className: e.container },
              r.a.createElement(Or, null),
              r.a.createElement(Sr, null),
              r.a.createElement(Wr, null),
            )
          );
        },
        qr = function () {
          var e = gt(),
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
        Dr = { login: '', password: '', admin: '0' },
        Yr = function (e) {
          var t = e.onSubmit,
            a = qr().fetchCreateAccount;
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
        Qr = Object(Ta.a)(function () {
          return { progress: { marginLeft: 20 } };
        }),
        Xr = function (e) {
          var t = Qr(),
            a = Yr(e),
            n = a.handleSubmit,
            c = a.validate;
          return r.a.createElement(
            xa.a,
            { style: { width: 400 } },
            r.a.createElement(ka.a, {
              title: r.a.createElement(
                wt.a,
                { variant: 'h3' },
                'Create new account',
              ),
            }),
            r.a.createElement(
              Ca.a,
              null,
              r.a.createElement(
                $t.c,
                { initialValues: Dr, validate: c, onSubmit: n },
                function (e) {
                  var a = e.isSubmitting;
                  return r.a.createElement(
                    $t.b,
                    null,
                    r.a.createElement(
                      en.a,
                      { container: !0, spacing: 2 },
                      r.a.createElement(
                        en.a,
                        { item: !0, xs: 12 },
                        r.a.createElement($t.a, { name: 'login' }, function (
                          e,
                        ) {
                          var t = e.field,
                            a = e.meta;
                          return r.a.createElement(
                            Sa.a,
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
                        en.a,
                        { item: !0, xs: 12 },
                        r.a.createElement($t.a, { name: 'password' }, function (
                          e,
                        ) {
                          var t = e.field,
                            a = e.meta;
                          return r.a.createElement(
                            Sa.a,
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
                        en.a,
                        { item: !0, xs: 12 },
                        r.a.createElement($t.a, { name: 'admin' }, function (
                          t,
                        ) {
                          var a = t.field;
                          return r.a.createElement(Ir.a, {
                            control: r.a.createElement(Rr.a, {
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
                        en.a,
                        {
                          item: !0,
                          container: !0,
                          xs: 12,
                          style: { alignItems: 'center' },
                        },
                        r.a.createElement(
                          Pt.a,
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
                            r.a.createElement(Mr.a, {
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
        Zr = function (e) {
          return e.accounts;
        },
        $r =
          (Object(Ge.createSelector)(Zr, function (e) {
            return e.create;
          }),
          Object(Ge.createSelector)(Zr, function (e) {
            return e.list;
          })),
        ec = function () {
          var e = qr().fetchRemoveAccounts;
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
        tc = Object(Ta.a)(function () {
          return { actions: { justifyContent: 'flex-end' } };
        }),
        ac = function (e) {
          var t = tc(),
            a = ec().deleteAccount,
            n = e.data;
          return r.a.createElement(
            xa.a,
            null,
            r.a.createElement(
              Ca.a,
              null,
              r.a.createElement(
                wt.a,
                { variant: 'caption', component: 'div' },
                'Account',
              ),
              r.a.createElement(
                wt.a,
                { variant: 'h4', component: 'div' },
                n.login,
              ),
            ),
            r.a.createElement(
              dn.a,
              { className: t.actions },
              r.a.createElement(
                Ln,
                {
                  title: 'Are you sure want to delete account?',
                  content: 'Every associated keys will be unavailable',
                  onSubmit: function () {
                    return a(n.id);
                  },
                },
                r.a.createElement(Pt.a, { size: 'small' }, 'Remove account'),
              ),
            ),
          );
        },
        nc = function () {
          var e = Object(n.useState)(!1),
            t = Object(xn.a)(e, 2),
            a = t[0],
            r = t[1],
            c = qr().fetchAccountsList,
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
        rc = function () {
          var e = Object(i.c)($r),
            t = nc(),
            a = t.isFormOpened,
            n = t.handleModalToggle;
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              Ma.a,
              { open: a, onClose: n },
              r.a.createElement(Xr, { onSubmit: n }),
            ),
            r.a.createElement(
              en.a,
              { container: !0, spacing: 2 },
              r.a.createElement(
                en.a,
                { item: !0, xs: 12 },
                r.a.createElement(
                  Pt.a,
                  {
                    variant: 'outlined',
                    startIcon: r.a.createElement(an.a, null),
                    onClick: n,
                  },
                  'Add account',
                ),
              ),
              r.a.createElement(
                en.a,
                { container: !0, item: !0, spacing: 2, xs: 12 },
                e.accounts.map(function (e) {
                  return r.a.createElement(
                    en.a,
                    { item: !0, key: e.id, xs: 6 },
                    r.a.createElement(ac, { data: e }),
                  );
                }),
              ),
            ),
          );
        },
        cc = Object(Ta.a)(function () {
          return { container: { paddingTop: 24, paddingBottom: 24 } };
        }),
        oc = function () {
          var e = cc();
          return r.a.createElement(
            Za.a,
            { className: e.container },
            r.a.createElement(rc, null),
          );
        },
        ic = a(442),
        uc = function () {
          var e = gt(),
            t = Object(i.c)(ot),
            a = Object(i.c)(it),
            r = Object(i.c)(Kt),
            c = Object(n.useCallback)(
              function (t) {
                var a = cn(64);
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
            u = Object(n.useCallback)(
              function (t) {
                return e(he.changeSearch({ search: t }));
              },
              [e],
            ),
            l = Object(n.useCallback)(
              function (t) {
                return e(he.toggleEditModal(t));
              },
              [e],
            ),
            s = Object(n.useCallback)(
              function (t) {
                return e(he.fetchListRepo(t));
              },
              [e, r],
            ),
            m = Object(n.useCallback)(
              function () {
                var e = { page: t.page, perPage: t.perPage, search: a };
                return s(e);
              },
              [s, t.page, t.perPage, a],
            );
          return {
            toggleEditModal: l,
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
            fetchListRepo: s,
            changePager: o,
            fetchListRepoWatch: m,
            changeSearch: u,
          };
        },
        lc = function () {
          var e = uc().deleteRepos,
            t = Object(n.useCallback)(function (e) {
              e.target.select();
            }, []);
          return {
            accessRef: Object(n.useRef)(null),
            deleteRepos: e,
            handleFocus: t,
          };
        },
        sc = Object(Ta.a)(function () {
          return {
            actions: { justifyContent: 'flex-end' },
            contentItems: { display: 'flex' },
            contentItem: { marginRight: 20 },
          };
        }),
        mc = function (e) {
          var t = e.data,
            a = sc(),
            n = Object(i.c)(Nt),
            c = lc(),
            o = c.deleteRepos,
            u = c.accessRef,
            l = c.handleFocus,
            s = ''.concat(n || '', '/repo/bunch/').concat(t.code);
          return r.a.createElement(
            xa.a,
            null,
            r.a.createElement(
              Ca.a,
              null,
              r.a.createElement(
                en.a,
                { container: !0, spacing: 2 },
                r.a.createElement(
                  en.a,
                  { item: !0, xs: 12 },
                  r.a.createElement(
                    wt.a,
                    { variant: 'caption', component: 'div' },
                    'Repository',
                  ),
                  r.a.createElement(
                    wt.a,
                    { variant: 'h5', component: 'div' },
                    t.name,
                  ),
                ),
                r.a.createElement(
                  en.a,
                  { item: !0, xs: 12 },
                  r.a.createElement(sn.a, null),
                ),
                r.a.createElement(
                  en.a,
                  { container: !0, item: !0, xs: 12, spacing: 1 },
                  r.a.createElement(
                    en.a,
                    { item: !0, xs: 12 },
                    r.a.createElement(
                      wt.a,
                      { variant: 'caption', component: 'div' },
                      'Contained keys',
                    ),
                  ),
                  t.entries.map(function (e, t) {
                    var a = e.name;
                    return r.a.createElement(
                      en.a,
                      { item: !0, key: t },
                      r.a.createElement(ic.a, {
                        label: a,
                        variant: 'outlined',
                      }),
                    );
                  }),
                ),
                r.a.createElement(
                  en.a,
                  { item: !0, xs: 12 },
                  r.a.createElement(sn.a, null),
                ),
                r.a.createElement(
                  en.a,
                  { item: !0, xs: 12 },
                  r.a.createElement(Sa.a, {
                    fullWidth: !0,
                    label: 'Access token',
                    variant: 'outlined',
                    value: t.accessToken,
                    onFocus: l,
                    InputProps: {
                      inputRef: u,
                      endAdornment: r.a.createElement(
                        vn.a,
                        { position: 'end' },
                        r.a.createElement(Pn, {
                          inputRef: u,
                          message: 'URL has been copied!',
                        }),
                      ),
                    },
                  }),
                ),
                r.a.createElement(
                  en.a,
                  { item: !0, xs: 12 },
                  r.a.createElement(
                    wt.a,
                    null,
                    'Key can be fetched via POST with access token.',
                  ),
                  r.a.createElement(
                    Hn,
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
              dn.a,
              { className: a.actions },
              r.a.createElement(
                Ln,
                {
                  title: 'Are you sure want to delete repo?',
                  onSubmit: function () {
                    return o({ ids: [t.id] });
                  },
                },
                r.a.createElement(Pt.a, { size: 'small' }, 'Remove'),
              ),
            ),
          );
        },
        fc = function () {
          var e = uc(),
            t = e.changePager,
            a = e.changeSearch,
            r = e.toggleEditModal,
            c = Object(i.c)(ut),
            o = Object(n.useCallback)(
              function (e) {
                return a(e);
              },
              [a],
            ),
            u = Object(n.useCallback)(
              function (e) {
                return t({ perPage: e });
              },
              [t],
            ),
            l = Object(n.useCallback)(
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
            handleChangePerPage: u,
            handlePagerChange: l,
          };
        },
        pc = Object($a.a)(function () {
          return {
            pagerHolder: { marginLeft: 'auto' },
            searchHolder: { marginLeft: 'auto' },
            noItems: { marginTop: 20 },
          };
        }),
        dc = function () {
          var e = pc(),
            t = Object(i.c)(ct),
            a = t.items,
            n = t.pager,
            c = t.pagerOptions,
            o = Object(i.c)(it),
            u = Object(i.c)(lt),
            l = fc(),
            s = l.handleModalToggle,
            m = l.handleChangePerPage,
            f = l.handlePagerChange,
            p = l.handleChangeSearch;
          return r.a.createElement(
            na.a,
            null,
            r.a.createElement(
              en.a,
              { container: !0, spacing: 2 },
              r.a.createElement(
                en.a,
                { item: !0, spacing: 2, container: !0, xs: 12 },
                r.a.createElement(
                  en.a,
                  { item: !0 },
                  r.a.createElement(
                    Pt.a,
                    {
                      variant: 'outlined',
                      startIcon: r.a.createElement(an.a, null),
                      onClick: s,
                    },
                    'Add repository',
                  ),
                ),
                !u &&
                  r.a.createElement(
                    en.a,
                    { item: !0 },
                    r.a.createElement(br, {
                      defaultValue: o,
                      onThrottledChange: p,
                      placeholder: 'Search by name...',
                    }),
                  ),
              ),
              a.length > 0 &&
                r.a.createElement(
                  en.a,
                  { item: !0, xs: 12 },
                  r.a.createElement(
                    en.a,
                    { container: !0, spacing: 2 },
                    a.map(function (e) {
                      return r.a.createElement(
                        en.a,
                        { item: !0, xs: 6, key: e.id },
                        r.a.createElement(mc, { data: e }),
                      );
                    }),
                  ),
                ),
              u &&
                r.a.createElement(
                  en.a,
                  { item: !0, xs: 12, className: e.noItems },
                  r.a.createElement(
                    wt.a,
                    { variant: 'h5' },
                    'There is no repositories.',
                  ),
                ),
              void 0 !== n.totalItems &&
                n.totalItems > 0 &&
                r.a.createElement(
                  en.a,
                  {
                    container: !0,
                    item: !0,
                    xs: 12,
                    spacing: 2,
                    alignItems: 'center',
                  },
                  r.a.createElement(
                    en.a,
                    { item: !0 },
                    r.a.createElement(ur, {
                      current: n.perPage,
                      options: c,
                      onSelect: m,
                    }),
                  ),
                  r.a.createElement(
                    en.a,
                    { item: !0, className: e.pagerHolder },
                    void 0 !== n.totalPages &&
                      n.totalPages > 1 &&
                      r.a.createElement(rn.a, {
                        onChange: f,
                        count: n.totalPages,
                        page: n.page,
                      }),
                  ),
                ),
            ),
          );
        },
        bc = a(310),
        hc = a.n(bc),
        gc = function (e) {
          var t = e.pickedSet,
            a = e.onUpdate,
            r = Object(n.useState)([]),
            c = Object(xn.a)(r, 2),
            o = c[0],
            i = c[1],
            u = Object(n.useState)([]),
            l = Object(xn.a)(u, 2),
            s = l[0],
            m = l[1],
            f = Object(n.useState)({}),
            p = Object(xn.a)(f, 2),
            d = p[0],
            b = p[1],
            h = Object(n.useState)({}),
            g = Object(xn.a)(h, 2),
            O = g[0],
            v = g[1];
          vc(t, i), jc(o, d, b), Ec(O, m);
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
        Oc = Object(Ta.a)(function () {
          return {
            scrollBar: { height: 220 },
            topDivider: { marginBottom: 5 },
          };
        }),
        vc = function (e, t) {
          Object(n.useEffect)(
            function () {
              e && t(e);
            },
            [e, t],
          );
        },
        jc = function (e, t, a) {
          var r = on().requestKeysByIds;
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
        Ec = function (e, t) {
          var a,
            r,
            c,
            o = on().requestKeysList,
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
        yc = function (e) {
          var t = gc(e),
            a = t.picked,
            n = t.options,
            c = t.handleChangeItem,
            o = t.handleSearchChange,
            i = Oc();
          return r.a.createElement(
            en.a,
            { container: !0, spacing: 1 },
            r.a.createElement(
              en.a,
              { item: !0, xs: 12, className: i.topDivider },
              r.a.createElement(sn.a, null),
            ),
            r.a.createElement(
              en.a,
              { item: !0, xs: 12 },
              r.a.createElement(br, {
                placeholder: 'Select required keys...',
                onThrottledChange: o,
                fullWidth: !0,
              }),
              r.a.createElement(
                na.a,
                { className: i.scrollBar },
                r.a.createElement(
                  hc.a,
                  null,
                  r.a.createElement(
                    Na.a,
                    null,
                    n.map(function (e) {
                      return r.a.createElement(
                        'div',
                        { key: e.id },
                        r.a.createElement(
                          La.a,
                          { key: e.id },
                          r.a.createElement(
                            Fa.a,
                            null,
                            r.a.createElement(Rr.a, {
                              edge: 'start',
                              size: 'small',
                              disableRipple: !0,
                              checked: a.includes(e.code),
                              onChange: function (t) {
                                return c(e.code, t.target.checked);
                              },
                            }),
                          ),
                          r.a.createElement(Ka.a, { primary: e.name }),
                        ),
                      );
                    }),
                  ),
                ),
              ),
            ),
          );
        },
        xc = function (e) {
          var t = e.code,
            a = e.entries,
            n = {};
          return (
            (t && 0 !== t.length) || (n.code = 'Code required!'),
            0 === a.length && (n.entries = 'Choose at least one entry'),
            n
          );
        },
        kc = function (e) {
          var t = wc(),
            a = Sc(e).handleSubmit;
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              xa.a,
              { style: { width: 400 } },
              r.a.createElement(ka.a, {
                title: r.a.createElement(
                  wt.a,
                  { variant: 'h3' },
                  'Create new repository',
                ),
              }),
              r.a.createElement(
                Ca.a,
                null,
                r.a.createElement(
                  $t.c,
                  {
                    initialValues: { code: '', entries: [] },
                    validate: xc,
                    onSubmit: a,
                  },
                  function (e) {
                    var a = e.isSubmitting;
                    return r.a.createElement(
                      $t.b,
                      null,
                      r.a.createElement(
                        en.a,
                        { container: !0, spacing: 2 },
                        r.a.createElement(
                          en.a,
                          { item: !0, xs: 12 },
                          r.a.createElement($t.a, { name: 'code' }, function (
                            e,
                          ) {
                            var t = e.field,
                              a = e.meta;
                            return r.a.createElement(
                              Sa.a,
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
                          en.a,
                          { item: !0, xs: 12 },
                          r.a.createElement(
                            $t.a,
                            { name: 'entries' },
                            function (a) {
                              var n = a.field,
                                c = a.meta;
                              return r.a.createElement(
                                r.a.Fragment,
                                null,
                                r.a.createElement(yc, {
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
                                    wt.a,
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
                            en.a,
                            {
                              item: !0,
                              container: !0,
                              xs: 12,
                              style: { alignItems: 'center' },
                            },
                            r.a.createElement(ma, null, e.errors.server),
                          ),
                        r.a.createElement(
                          en.a,
                          {
                            item: !0,
                            container: !0,
                            xs: 12,
                            style: { alignItems: 'center' },
                          },
                          r.a.createElement(
                            Pt.a,
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
                              r.a.createElement(Mr.a, {
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
        Cc = function () {
          var e = uc().toggleEditModal,
            t = Object(i.c)(ut),
            a = Object(n.useCallback)(
              function () {
                e({ isOpened: !1 });
              },
              [e],
            );
          return r.a.createElement(
            Ma.a,
            { open: t, onClose: a },
            r.a.createElement(kc, { onSubmit: a }),
          );
        },
        Sc = function (e) {
          var t = e.onSubmit,
            a = uc().createNewRepo;
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
        wc = Object(Ta.a)(function () {
          return {
            progress: { marginLeft: 20 },
            keyTitle: { marginTop: 10, marginBotton: 10, paddingLeft: 10 },
            keyError: { paddingLeft: 10 },
          };
        }),
        Pc = Object($a.a)(function () {
          return { container: { paddingTop: 16, paddingBottom: 24 } };
        }),
        Ic = function () {
          var e = Pc();
          return (
            Rc(),
            r.a.createElement(
              Za.a,
              { className: e.container },
              r.a.createElement(dc, null),
              r.a.createElement(Cc, null),
            )
          );
        },
        Rc = function () {
          var e = uc().fetchListRepoWatch;
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
        Mc = a(439),
        Ac = function (e) {
          return e.storage;
        },
        Tc = Object(Ge.createSelector)(Ac, function (e) {
          return e.items;
        }),
        Nc = Object(Ge.createSelector)(Ac, function (e) {
          return e.pager;
        }),
        Lc = Object(Ge.createSelector)(Ac, function (e) {
          return e.filter;
        }),
        Fc = Object(Ge.createSelector)(Ac, function (e) {
          return e.pagerOptions;
        }),
        Kc = Object(Ge.createSelector)(Lc, Tc, function (e, t) {
          var a = e.entryName;
          return (!a || 0 === a.length) && 0 === t.length;
        }),
        zc = a(429),
        Wc = a(430),
        Bc = a(431),
        Uc = a(432),
        Hc = a(433),
        Jc = a(434),
        Gc = a(311),
        _c = a.n(Gc),
        Vc = a(312),
        qc = a.n(Vc),
        Dc = function () {
          var e = Yn().openKeyPreview;
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
        Yc = function (e) {
          var t = e.items,
            a = Dc().handleOpenKeyPreview;
          return r.a.createElement(
            zc.a,
            { component: aa.a },
            r.a.createElement(
              Wc.a,
              null,
              r.a.createElement(
                Bc.a,
                null,
                r.a.createElement(
                  Uc.a,
                  null,
                  r.a.createElement(Hc.a, null, 'Id'),
                  r.a.createElement(Hc.a, null, 'Type'),
                  r.a.createElement(Hc.a, null, 'Algorithm'),
                  r.a.createElement(Hc.a, null, 'Entry name'),
                  r.a.createElement(Hc.a, null, 'Entry code'),
                  r.a.createElement(Hc.a, null, 'Status'),
                  r.a.createElement(Hc.a, null, 'Period'),
                  r.a.createElement(Hc.a, { align: 'center' }, 'Actions'),
                ),
              ),
              r.a.createElement(
                Jc.a,
                null,
                t.map(function (e) {
                  var t = ln()(),
                    n = ln.a.unix(e.expUnix),
                    c = ln.a.unix(e.activateUnix),
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
                      Uc.a,
                      { key: e.key.kid },
                      r.a.createElement(Hc.a, null, e.key.kid),
                      r.a.createElement(Hc.a, null, e.key.kty),
                      r.a.createElement(Hc.a, null, e.key.alg),
                      r.a.createElement(Hc.a, null, e.entry.name),
                      r.a.createElement(Hc.a, null, e.entry.code),
                      r.a.createElement(Hc.a, null, o),
                      r.a.createElement(
                        Hc.a,
                        null,
                        e.expUnix
                          ? ''
                              .concat(c.format('LL'), ' - ')
                              .concat(n.format('LL'))
                          : 'Non-rotatable',
                      ),
                      r.a.createElement(
                        Hc.a,
                        { align: 'center' },
                        r.a.createElement(
                          en.a,
                          { container: !0, spacing: 2, justify: 'center' },
                          r.a.createElement(
                            en.a,
                            { item: !0 },
                            r.a.createElement(
                              _c.a,
                              {
                                size: 'small',
                                onClick: function () {
                                  return a(e.key.kid);
                                },
                              },
                              r.a.createElement(qc.a, null),
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
        Qc = function () {
          var e = gt(),
            t = Object(i.c)(Nc),
            a = Object(i.c)(Lc),
            r = Object(i.c)(Kt),
            c = Object(n.useCallback)(
              function (t) {
                return e(Ee.changePager(t));
              },
              [e],
            ),
            o = Object(n.useCallback)(
              function (t) {
                return e(Ee.changeFilter(t));
              },
              [e],
            ),
            u = Object(n.useCallback)(
              function (t) {
                return e(Ee.fetchStorageItems(t));
              },
              [e, r],
            ),
            l = Object(n.useCallback)(
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
            changePager: c,
            changeFilter: o,
            fetchStorageItems: u,
            fetchStorageItemsWatcher: l,
          };
        },
        Xc = function () {
          var e = Qc(),
            t = e.changePager,
            a = e.changeFilter,
            r = Object(i.c)(Nc),
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
        Zc = function () {
          var e = Object(i.c)(Tc),
            t = Object(i.c)(Lc),
            a = Object(i.c)(Fc),
            n = Object(i.c)(Kc),
            c = Xc(),
            o = c.targetPage,
            u = c.storagePager,
            l = c.totalItems,
            s = c.handlePagerChange,
            m = c.handleChangePerPage,
            f = c.handleChangeFilterEntryName;
          return void 0 === l
            ? null
            : r.a.createElement(
                en.a,
                { container: !0, spacing: 2 },
                !n &&
                  r.a.createElement(
                    en.a,
                    { container: !0, item: !0, xs: 12 },
                    r.a.createElement(
                      en.a,
                      { item: !0 },
                      r.a.createElement(br, {
                        placeholder: 'Search by entry name',
                        defaultValue: t.entryName,
                        onThrottledChange: f,
                      }),
                    ),
                  ),
                n &&
                  r.a.createElement(
                    en.a,
                    { item: !0, xs: 12 },
                    r.a.createElement(
                      wt.a,
                      { variant: 'h5' },
                      'Storage is empty.',
                    ),
                  ),
                l > 0 &&
                  r.a.createElement(
                    en.a,
                    { item: !0, xs: 12 },
                    r.a.createElement(Yc, { items: e }),
                  ),
                void 0 !== o &&
                  l > 0 &&
                  r.a.createElement(
                    en.a,
                    { item: !0, xs: 12 },
                    r.a.createElement(Mc.a, {
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
        $c = Object($a.a)(function () {
          return { container: { paddingTop: 24, paddingBottom: 24 } };
        }),
        eo = function () {
          var e = $c();
          return (
            to(),
            r.a.createElement(
              Za.a,
              { className: e.container },
              r.a.createElement(Zc, null),
              r.a.createElement(Sr, null),
            )
          );
        },
        to = function () {
          var e = Qc().fetchStorageItemsWatcher;
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
        ao = function () {
          var e = no();
          return (
            ro(),
            r.a.createElement(
              Za.a,
              { className: e.container },
              r.a.createElement(Or, { archive: !0 }),
              r.a.createElement(Sr, null),
            )
          );
        },
        no = Object($a.a)(function () {
          return {
            container: {
              display: 'flex',
              minWidth: 0,
              flexGrow: 1,
              paddingTop: 16,
            },
          };
        }),
        ro = function () {
          var e = on(),
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
        co = [
          {
            path: '/',
            exact: !0,
            component: function () {
              return r.a.createElement(s.a, { to: G });
            },
          },
          {
            path: B,
            component: Ra,
            routes: [{ path: U, exact: !0, component: Ia }],
          },
          {
            path: H,
            component: Xa,
            routes: [
              { path: G, component: Vr },
              { path: J, component: oc },
              { path: _, component: Ic },
              { path: V, component: eo },
              { path: q, component: ao },
            ],
          },
        ];
      function oo() {
        var e = Object(Bt.a)([
          '\n  width: 100vw;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n',
        ]);
        return (
          (oo = function () {
            return e;
          }),
          e
        );
      }
      var io = Ut.a.div(oo()),
        uo = function () {
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
        lo = function (e) {
          var t = Object(i.c)(Mt);
          return (
            uo(),
            t
              ? r.a.createElement(r.a.Fragment, null, e.children)
              : r.a.createElement(
                  io,
                  null,
                  r.a.createElement(Mr.a, { size: 60 }),
                )
          );
        },
        so = function (e) {
          var t = Object(s.g)(),
            a = Object(i.c)(
              Object(Ge.createStructuredSelector)({ isUserAuthorized: Rt }),
            );
          return a.isUserAuthorized && '/auth/login' === t.pathname
            ? r.a.createElement(s.a, { to: '/' })
            : a.isUserAuthorized || '/auth/login' === t.pathname
            ? r.a.createElement(r.a.Fragment, null, e.children)
            : r.a.createElement(s.a, { to: '/auth/login' });
        },
        mo = document.getElementById('root');
      if (mo) {
        var fo = Object(m.a)();
        o.a.render(
          r.a.createElement(
            i.a,
            { store: ht },
            r.a.createElement(f.a, null),
            r.a.createElement(
              u.a,
              { theme: kt },
              r.a.createElement(
                s.c,
                { history: fo },
                r.a.createElement(
                  lo,
                  null,
                  r.a.createElement(so, null, Object(l.a)(co)),
                ),
              ),
            ),
          ),
          mo,
        );
      }
    },
  },
  [[324, 1, 2]],
]);
//# sourceMappingURL=main.d5fc761a.chunk.js.map
