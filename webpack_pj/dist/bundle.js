(() => {
  "use strict";
  var t,
    e = {
      583: (t, e) => {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Component = void 0);
        var n = (function () {
          function t(t, e, n, r) {
            (this.templateElement = document.getElementById(t)),
              (this.hostElement = document.getElementById(e));
            var o = document.importNode(this.templateElement.content, !0);
            (this.element = o.firstElementChild),
              r && (this.element.id = r),
              this.attach(n);
          }
          return (
            (t.prototype.attach = function (t) {
              this.hostElement.insertAdjacentElement(
                t ? "afterbegin" : "beforeend",
                this.element
              );
            }),
            t
          );
        })();
        e.Component = n;
      },
      242: function (t, e, n) {
        var r,
          o =
            (this && this.__extends) ||
            ((r = function (t, e) {
              return (r =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                })(t, e);
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null"
                );
              function n() {
                this.constructor = t;
              }
              r(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((n.prototype = e.prototype), new n()));
            }),
          i =
            (this && this.__decorate) ||
            function (t, e, n, r) {
              var o,
                i = arguments.length,
                a =
                  i < 3
                    ? e
                    : null === r
                    ? (r = Object.getOwnPropertyDescriptor(e, n))
                    : r;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                a = Reflect.decorate(t, e, n, r);
              else
                for (var s = t.length - 1; s >= 0; s--)
                  (o = t[s]) &&
                    (a = (i < 3 ? o(a) : i > 3 ? o(e, n, a) : o(e, n)) || a);
              return i > 3 && a && Object.defineProperty(e, n, a), a;
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.ProjectInput = void 0);
        var a = n(583),
          s = n(954),
          c = n(905),
          u = n(377),
          l = (function (t) {
            function e() {
              var e =
                t.call(this, "project-input", "app", !0, "user-input") || this;
              return (
                (e.titleInputElement = e.element.querySelector("#title")),
                (e.descriptionInputElement =
                  e.element.querySelector("#description")),
                (e.peopleInputElement = e.element.querySelector("#people")),
                e.configure(),
                e
              );
            }
            return (
              o(e, t),
              (e.prototype.configure = function () {
                this.element.addEventListener("submit", this.submitHandler);
              }),
              (e.prototype.renderContent = function () {}),
              (e.prototype.gatherUserInput = function () {
                var t = this.titleInputElement.value,
                  e = this.descriptionInputElement.value,
                  n = this.peopleInputElement.value,
                  r = { value: t, required: !0 },
                  o = { value: e, required: !0, minLength: 5 },
                  i = { value: +n, required: !0, min: 1, max: 5 };
                return s.validate(r) && s.validate(o) && s.validate(i)
                  ? [t, e, +n]
                  : void alert("Invalid input, please try again!");
              }),
              (e.prototype.clearInputs = function () {
                (this.titleInputElement.value = ""),
                  (this.descriptionInputElement.value = ""),
                  (this.peopleInputElement.value = "");
              }),
              (e.prototype.submitHandler = function (t) {
                t.preventDefault();
                var e = this.gatherUserInput();
                if (Array.isArray(e)) {
                  var n = e[0],
                    r = e[1],
                    o = e[2];
                  u.projectState.addProject(n, r, o), this.clearInputs();
                }
              }),
              i([c.autobind], e.prototype, "submitHandler", null),
              e
            );
          })(a.Component);
        e.ProjectInput = l;
      },
      633: function (t, e, n) {
        var r,
          o =
            (this && this.__extends) ||
            ((r = function (t, e) {
              return (r =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                })(t, e);
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null"
                );
              function n() {
                this.constructor = t;
              }
              r(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((n.prototype = e.prototype), new n()));
            }),
          i =
            (this && this.__decorate) ||
            function (t, e, n, r) {
              var o,
                i = arguments.length,
                a =
                  i < 3
                    ? e
                    : null === r
                    ? (r = Object.getOwnPropertyDescriptor(e, n))
                    : r;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                a = Reflect.decorate(t, e, n, r);
              else
                for (var s = t.length - 1; s >= 0; s--)
                  (o = t[s]) &&
                    (a = (i < 3 ? o(a) : i > 3 ? o(e, n, a) : o(e, n)) || a);
              return i > 3 && a && Object.defineProperty(e, n, a), a;
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.ProjectItem = void 0);
        var a = n(583),
          s = n(905),
          c = (function (t) {
            function e(e, n) {
              var r = t.call(this, "single-project", e, !1, n.id) || this;
              return (r.project = n), r.configure(), r.renderContent(), r;
            }
            return (
              o(e, t),
              Object.defineProperty(e.prototype, "persons", {
                get: function () {
                  return 1 === this.project.people
                    ? "1 person"
                    : this.project.people + " persons";
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.dragStartHandler = function (t) {
                t.dataTransfer.setData("text/plain", this.project.id),
                  (t.dataTransfer.effectAllowed = "move");
              }),
              (e.prototype.dragEndHandler = function (t) {
                console.log("DragEnd");
              }),
              (e.prototype.configure = function () {
                this.element.addEventListener(
                  "dragstart",
                  this.dragStartHandler
                ),
                  this.element.addEventListener("dragend", this.dragEndHandler);
              }),
              (e.prototype.renderContent = function () {
                (this.element.querySelector("h2").textContent =
                  this.project.title),
                  (this.element.querySelector("h3").textContent =
                    this.persons + " assigned"),
                  (this.element.querySelector("p").textContent =
                    this.project.description);
              }),
              i([s.autobind], e.prototype, "dragStartHandler", null),
              e
            );
          })(a.Component);
        e.ProjectItem = c;
      },
      134: function (t, e, n) {
        var r,
          o =
            (this && this.__extends) ||
            ((r = function (t, e) {
              return (r =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                })(t, e);
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null"
                );
              function n() {
                this.constructor = t;
              }
              r(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((n.prototype = e.prototype), new n()));
            }),
          i =
            (this && this.__decorate) ||
            function (t, e, n, r) {
              var o,
                i = arguments.length,
                a =
                  i < 3
                    ? e
                    : null === r
                    ? (r = Object.getOwnPropertyDescriptor(e, n))
                    : r;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                a = Reflect.decorate(t, e, n, r);
              else
                for (var s = t.length - 1; s >= 0; s--)
                  (o = t[s]) &&
                    (a = (i < 3 ? o(a) : i > 3 ? o(e, n, a) : o(e, n)) || a);
              return i > 3 && a && Object.defineProperty(e, n, a), a;
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.ProjectList = void 0);
        var a = n(583),
          s = n(294),
          c = n(905),
          u = n(377),
          l = n(633),
          p = (function (t) {
            function e(e) {
              var n =
                t.call(this, "project-list", "app", !1, e + "-projects") ||
                this;
              return (
                (n.type = e),
                (n.assignedProjects = []),
                n.configure(),
                n.renderContent(),
                n
              );
            }
            return (
              o(e, t),
              (e.prototype.dragOverHandler = function (t) {
                t.dataTransfer &&
                  "text/plain" === t.dataTransfer.types[0] &&
                  (t.preventDefault(),
                  this.element.querySelector("ul").classList.add("droppable"));
              }),
              (e.prototype.dropHandler = function (t) {
                var e = t.dataTransfer.getData("text/plain");
                u.projectState.moveProject(
                  e,
                  "active" === this.type
                    ? s.ProjectStatus.Active
                    : s.ProjectStatus.Finished
                );
              }),
              (e.prototype.dragLeaveHandler = function (t) {
                this.element.querySelector("ul").classList.remove("droppable");
              }),
              (e.prototype.configure = function () {
                var t = this;
                this.element.addEventListener("dragover", this.dragOverHandler),
                  this.element.addEventListener(
                    "dragleave",
                    this.dragLeaveHandler
                  ),
                  this.element.addEventListener("drop", this.dropHandler),
                  u.projectState.addListener(function (e) {
                    var n = e.filter(function (e) {
                      return "active" === t.type
                        ? e.status === s.ProjectStatus.Active
                        : e.status === s.ProjectStatus.Finished;
                    });
                    (t.assignedProjects = n), t.renderProjects();
                  });
              }),
              (e.prototype.renderContent = function () {
                var t = this.type + "-projects-list";
                (this.element.querySelector("ul").id = t),
                  (this.element.querySelector("h2").textContent =
                    this.type.toUpperCase() + " PROJECTS");
              }),
              (e.prototype.renderProjects = function () {
                document.getElementById(
                  this.type + "-projects-list"
                ).innerHTML = "";
                for (var t = 0, e = this.assignedProjects; t < e.length; t++) {
                  var n = e[t];
                  new l.ProjectItem(this.element.querySelector("ul").id, n);
                }
              }),
              i([c.autobind], e.prototype, "dragOverHandler", null),
              i([c.autobind], e.prototype, "dropHandler", null),
              i([c.autobind], e.prototype, "dragLeaveHandler", null),
              e
            );
          })(a.Component);
        e.ProjectList = p;
      },
      905: (t, e) => {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.autobind = void 0),
          (e.autobind = function (t, e, n) {
            var r = n.value;
            return {
              configurable: !0,
              get: function () {
                return r.bind(this);
              },
            };
          });
      },
      294: (t, e) => {
        var n;
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Project = e.ProjectStatus = void 0),
          ((n = e.ProjectStatus || (e.ProjectStatus = {}))[(n.Active = 0)] =
            "Active"),
          (n[(n.Finished = 1)] = "Finished");
        e.Project = function (t, e, n, r, o) {
          (this.id = t),
            (this.title = e),
            (this.description = n),
            (this.people = r),
            (this.status = o);
        };
      },
      377: function (t, e, n) {
        var r,
          o =
            (this && this.__extends) ||
            ((r = function (t, e) {
              return (r =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                })(t, e);
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null"
                );
              function n() {
                this.constructor = t;
              }
              r(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((n.prototype = e.prototype), new n()));
            });
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.projectState = e.ProjectState = void 0);
        var i = n(294),
          a = (function (t) {
            function e() {
              var e = t.call(this) || this;
              return (e.projects = []), e;
            }
            return (
              o(e, t),
              (e.getInstance = function () {
                return (
                  this.instance || (this.instance = new e()), this.instance
                );
              }),
              (e.prototype.addProject = function (t, e, n) {
                var r = new i.Project(
                  Math.random().toString(),
                  t,
                  e,
                  n,
                  i.ProjectStatus.Active
                );
                this.projects.push(r), this.updateListeners();
              }),
              (e.prototype.moveProject = function (t, e) {
                var n = this.projects.find(function (e) {
                  return e.id === t;
                });
                n && n.status !== e && ((n.status = e), this.updateListeners());
              }),
              (e.prototype.updateListeners = function () {
                for (var t = 0, e = this.listeners; t < e.length; t++)
                  (0, e[t])(this.projects.slice());
              }),
              e
            );
          })(
            (function () {
              function t() {
                this.listeners = [];
              }
              return (
                (t.prototype.addListener = function (t) {
                  this.listeners.push(t);
                }),
                t
              );
            })()
          );
        (e.ProjectState = a), (e.projectState = a.getInstance());
      },
      954: (t, e) => {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.validate = void 0),
          (e.validate = function (t) {
            var e = !0;
            return (
              t.required && (e = e && 0 !== t.value.toString().trim().length),
              null != t.minLength &&
                "string" == typeof t.value &&
                (e = e && t.value.length >= t.minLength),
              null != t.maxLength &&
                "string" == typeof t.value &&
                (e = e && t.value.length <= t.maxLength),
              null != t.min &&
                "number" == typeof t.value &&
                (e = e && t.value >= t.min),
              null != t.max &&
                "number" == typeof t.value &&
                (e = e && t.value <= t.max),
              e
            );
          });
      },
    },
    n = {};
  function r(t) {
    var o = n[t];
    if (void 0 !== o) return o.exports;
    var i = (n[t] = { exports: {} });
    return e[t].call(i.exports, i, i.exports, r), i.exports;
  }
  (t = r(134)),
    new (r(242).ProjectInput)(),
    new t.ProjectList("active"),
    new t.ProjectList("finished");
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bmRlcnN0YW5kaW5nLXR5cGVzY3JpcHQvLi9zcmMvYXBwLnRzIiwid2VicGFjazovL3VuZGVyc3RhbmRpbmctdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL2Jhc2UtY29tcG9uZW50LnRzIiwid2VicGFjazovL3VuZGVyc3RhbmRpbmctdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL3Byb2plY3QtaW5wdXQudHMiLCJ3ZWJwYWNrOi8vdW5kZXJzdGFuZGluZy10eXBlc2NyaXB0Ly4vc3JjL2NvbXBvbmVudHMvcHJvamVjdC1pdGVtLnRzIiwid2VicGFjazovL3VuZGVyc3RhbmRpbmctdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL3Byb2plY3QtbGlzdC50cyIsIndlYnBhY2s6Ly91bmRlcnN0YW5kaW5nLXR5cGVzY3JpcHQvLi9zcmMvZGVjb3JhdG9ycy9hdXRvYmluZC50cyIsIndlYnBhY2s6Ly91bmRlcnN0YW5kaW5nLXR5cGVzY3JpcHQvLi9zcmMvbW9kZWxzL3Byb2plY3QudHMiLCJ3ZWJwYWNrOi8vdW5kZXJzdGFuZGluZy10eXBlc2NyaXB0Ly4vc3JjL3N0YXRlL3Byb2plY3Qtc3RhdGUudHMiLCJ3ZWJwYWNrOi8vdW5kZXJzdGFuZGluZy10eXBlc2NyaXB0Ly4vc3JjL3V0aWwvdmFsaWRhdGlvbi50cyIsIndlYnBhY2s6Ly91bmRlcnN0YW5kaW5nLXR5cGVzY3JpcHQvd2VicGFjay9ib290c3RyYXAiXSwibmFtZXMiOlsidGVtcGxhdGVJZCIsImhvc3RFbGVtZW50SWQiLCJpbnNlcnRBdFN0YXJ0IiwibmV3RWxlbWVudElkIiwidGhpcyIsInRlbXBsYXRlRWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJob3N0RWxlbWVudCIsImltcG9ydGVkTm9kZSIsImltcG9ydE5vZGUiLCJjb250ZW50IiwiZWxlbWVudCIsImZpcnN0RWxlbWVudENoaWxkIiwiaWQiLCJhdHRhY2giLCJpbnNlcnRBdEJlZ2lubmluZyIsImluc2VydEFkamFjZW50RWxlbWVudCIsIkNvbXBvbmVudCIsInRpdGxlSW5wdXRFbGVtZW50IiwicXVlcnlTZWxlY3RvciIsImRlc2NyaXB0aW9uSW5wdXRFbGVtZW50IiwicGVvcGxlSW5wdXRFbGVtZW50IiwiY29uZmlndXJlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN1Ym1pdEhhbmRsZXIiLCJyZW5kZXJDb250ZW50IiwiZ2F0aGVyVXNlcklucHV0IiwiZW50ZXJlZFRpdGxlIiwidmFsdWUiLCJlbnRlcmVkRGVzY3JpcHRpb24iLCJlbnRlcmVkUGVvcGxlIiwidGl0bGVWYWxpZGF0YWJsZSIsInJlcXVpcmVkIiwiZGVzY3JpcHRpb25WYWxpZGF0YWJsZSIsIm1pbkxlbmd0aCIsInBlb3BsZVZhbGlkYXRhYmxlIiwibWluIiwibWF4IiwidmFsaWRhdGUiLCJhbGVydCIsImNsZWFySW5wdXRzIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXJJbnB1dCIsIkFycmF5IiwiaXNBcnJheSIsInRpdGxlIiwiZGVzYyIsInBlb3BsZSIsInByb2plY3RTdGF0ZSIsImFkZFByb2plY3QiLCJhdXRvYmluZCIsIlByb2plY3RJbnB1dCIsImhvc3RJZCIsInByb2plY3QiLCJkcmFnU3RhcnRIYW5kbGVyIiwiZGF0YVRyYW5zZmVyIiwic2V0RGF0YSIsImVmZmVjdEFsbG93ZWQiLCJkcmFnRW5kSGFuZGxlciIsIl8iLCJjb25zb2xlIiwibG9nIiwidGV4dENvbnRlbnQiLCJwZXJzb25zIiwiZGVzY3JpcHRpb24iLCJQcm9qZWN0SXRlbSIsInR5cGUiLCJhc3NpZ25lZFByb2plY3RzIiwiZHJhZ092ZXJIYW5kbGVyIiwidHlwZXMiLCJjbGFzc0xpc3QiLCJhZGQiLCJkcm9wSGFuZGxlciIsInByaklkIiwiZ2V0RGF0YSIsIm1vdmVQcm9qZWN0IiwiUHJvamVjdFN0YXR1cyIsIkFjdGl2ZSIsIkZpbmlzaGVkIiwiZHJhZ0xlYXZlSGFuZGxlciIsInJlbW92ZSIsImFkZExpc3RlbmVyIiwicHJvamVjdHMiLCJyZWxldmFudFByb2plY3RzIiwiZmlsdGVyIiwicHJqIiwic3RhdHVzIiwicmVuZGVyUHJvamVjdHMiLCJsaXN0SWQiLCJ0b1VwcGVyQ2FzZSIsImlubmVySFRNTCIsInByakl0ZW0iLCJQcm9qZWN0TGlzdCIsIl8yIiwiZGVzY3JpcHRvciIsIm9yaWdpbmFsTWV0aG9kIiwiY29uZmlndXJhYmxlIiwiZ2V0IiwiYmluZCIsIlByb2plY3QiLCJnZXRJbnN0YW5jZSIsImluc3RhbmNlIiwiUHJvamVjdFN0YXRlIiwibnVtT2ZQZW9wbGUiLCJuZXdQcm9qZWN0IiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwicHVzaCIsInVwZGF0ZUxpc3RlbmVycyIsInByb2plY3RJZCIsIm5ld1N0YXR1cyIsImZpbmQiLCJsaXN0ZW5lcnMiLCJsaXN0ZW5lckZuIiwic2xpY2UiLCJ2YWxpZGF0YWJsZUlucHV0IiwiaXNWYWxpZCIsInRyaW0iLCJsZW5ndGgiLCJtYXhMZW5ndGgiLCJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJjYWNoZWRNb2R1bGUiLCJ1bmRlZmluZWQiLCJleHBvcnRzIiwibW9kdWxlIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsImNhbGwiXSwibWFwcGluZ3MiOiJ1QkFBQSxFLG1GQ0NBLGlCQUtFLFdBQ0VBLEVBQ0FDLEVBQ0FDLEVBQ0FDLEdBRUFDLEtBQUtDLGdCQUFrQkMsU0FBU0MsZUFDOUJQLEdBRUZJLEtBQUtJLFlBQWNGLFNBQVNDLGVBQWVOLEdBRTNDLElBQU1RLEVBQWVILFNBQVNJLFdBQzVCTixLQUFLQyxnQkFBZ0JNLFNBQ3JCLEdBRUZQLEtBQUtRLFFBQVVILEVBQWFJLGtCQUN4QlYsSUFDRkMsS0FBS1EsUUFBUUUsR0FBS1gsR0FHcEJDLEtBQUtXLE9BQU9iLEdBWWhCLE9BVFUsWUFBQWEsT0FBUixTQUFlQyxHQUNiWixLQUFLSSxZQUFZUyxzQkFDZkQsRUFBb0IsYUFBZSxZQUNuQ1osS0FBS1EsVUFNWCxFQXJDQSxHQUFzQixFQUFBTSxhLHM1QkNEdEIsYUFDQSxTQUNBLFNBQ0EsU0FHQSxjQUtFLG1CQUNFLFlBQU0sZ0JBQWlCLE9BQU8sRUFBTSxlQUFhLEssT0FDakQsRUFBS0Msa0JBQW9CLEVBQUtQLFFBQVFRLGNBQ3BDLFVBRUYsRUFBS0Msd0JBQTBCLEVBQUtULFFBQVFRLGNBQzFDLGdCQUVGLEVBQUtFLG1CQUFxQixFQUFLVixRQUFRUSxjQUNyQyxXQUVGLEVBQUtHLFksRUEwRFQsT0ExRWtDLE9BbUJoQyxZQUFBQSxVQUFBLFdBQ0VuQixLQUFLUSxRQUFRWSxpQkFBaUIsU0FBVXBCLEtBQUtxQixnQkFHL0MsWUFBQUMsY0FBQSxhQUVRLFlBQUFDLGdCQUFSLFdBQ0UsSUFBTUMsRUFBZXhCLEtBQUtlLGtCQUFrQlUsTUFDdENDLEVBQXFCMUIsS0FBS2lCLHdCQUF3QlEsTUFDbERFLEVBQWdCM0IsS0FBS2tCLG1CQUFtQk8sTUFFeENHLEVBQWdDLENBQ3BDSCxNQUFPRCxFQUNQSyxVQUFVLEdBRU5DLEVBQXNDLENBQzFDTCxNQUFPQyxFQUNQRyxVQUFVLEVBQ1ZFLFVBQVcsR0FFUEMsRUFBaUMsQ0FDckNQLE9BQVFFLEVBQ1JFLFVBQVUsRUFDVkksSUFBSyxFQUNMQyxJQUFLLEdBR1AsT0FDRyxFQUFBQyxTQUFTUCxJQUNULEVBQUFPLFNBQVNMLElBQ1QsRUFBQUssU0FBU0gsR0FLSCxDQUFDUixFQUFjRSxHQUFxQkMsUUFIM0NTLE1BQU0scUNBT0YsWUFBQUMsWUFBUixXQUNFckMsS0FBS2Usa0JBQWtCVSxNQUFRLEdBQy9CekIsS0FBS2lCLHdCQUF3QlEsTUFBUSxHQUNyQ3pCLEtBQUtrQixtQkFBbUJPLE1BQVEsSUFJMUIsWUFBQUosY0FBUixTQUFzQmlCLEdBQ3BCQSxFQUFNQyxpQkFDTixJQUFNQyxFQUFZeEMsS0FBS3VCLGtCQUN2QixHQUFJa0IsTUFBTUMsUUFBUUYsR0FBWSxDQUNyQixJQUFBRyxFQUF1QkgsRUFBUyxHQUF6QkksRUFBZ0JKLEVBQVMsR0FBbkJLLEVBQVVMLEVBQVMsR0FDdkMsRUFBQU0sYUFBYUMsV0FBV0osRUFBT0MsRUFBTUMsR0FDckM3QyxLQUFLcUMsZ0JBTlQsR0FEQyxFQUFBVyxVLGtDQVVILEVBMUVBLENBQWtDLEVBQUFsQyxXQUFyQixFQUFBbUMsZ0IscTVCQ0xiLGFBRUEsU0FHQSxjQWNFLFdBQVlDLEVBQWdCQyxHQUE1QixNQUNFLFlBQU0saUJBQWtCRCxHQUFRLEVBQU9DLEVBQVF6QyxLQUFHLEssT0FDbEQsRUFBS3lDLFFBQVVBLEVBRWYsRUFBS2hDLFlBQ0wsRUFBS0csZ0IsRUF1QlQsT0F6Q1UsT0FLUixzQkFBSSxzQkFBTyxDLElBQVgsV0FDRSxPQUE0QixJQUF4QnRCLEtBQUttRCxRQUFRTixPQUNSLFdBRUc3QyxLQUFLbUQsUUFBUU4sT0FBTSxZLGdDQWFqQyxZQUFBTyxpQkFBQSxTQUFpQmQsR0FDZkEsRUFBTWUsYUFBY0MsUUFBUSxhQUFjdEQsS0FBS21ELFFBQVF6QyxJQUN2RDRCLEVBQU1lLGFBQWNFLGNBQWdCLFFBR3RDLFlBQUFDLGVBQUEsU0FBZUMsR0FDYkMsUUFBUUMsSUFBSSxZQUdkLFlBQUF4QyxVQUFBLFdBQ0VuQixLQUFLUSxRQUFRWSxpQkFBaUIsWUFBYXBCLEtBQUtvRCxrQkFDaERwRCxLQUFLUSxRQUFRWSxpQkFBaUIsVUFBV3BCLEtBQUt3RCxpQkFHaEQsWUFBQWxDLGNBQUEsV0FDRXRCLEtBQUtRLFFBQVFRLGNBQWMsTUFBTzRDLFlBQWM1RCxLQUFLbUQsUUFBUVIsTUFDN0QzQyxLQUFLUSxRQUFRUSxjQUFjLE1BQU80QyxZQUFjNUQsS0FBSzZELFFBQVUsWUFDL0Q3RCxLQUFLUSxRQUFRUSxjQUFjLEtBQU00QyxZQUFjNUQsS0FBS21ELFFBQVFXLGFBakI5RCxHQURDLEVBQUFkLFUscUNBb0JILEVBMUNBLENBQ1UsRUFBQWxDLFdBREcsRUFBQWlELGUscTVCQ0xiLGFBQ0EsU0FDQSxTQUNBLFNBQ0EsU0FHQSxjQU1FLFdBQW9CQyxHQUFwQixNQUNFLFlBQU0sZUFBZ0IsT0FBTyxFQUFVQSxFQUFJLGNBQVksSyxPQURyQyxFQUFBQSxPQUVsQixFQUFLQyxpQkFBbUIsR0FFeEIsRUFBSzlDLFlBQ0wsRUFBS0csZ0IsRUE0RFQsT0F0RVUsT0FjUixZQUFBNEMsZ0JBQUEsU0FBZ0I1QixHQUNWQSxFQUFNZSxjQUFnRCxlQUFoQ2YsRUFBTWUsYUFBYWMsTUFBTSxLQUNqRDdCLEVBQU1DLGlCQUNTdkMsS0FBS1EsUUFBUVEsY0FBYyxNQUNuQ29ELFVBQVVDLElBQUksZUFLekIsWUFBQUMsWUFBQSxTQUFZaEMsR0FDVixJQUFNaUMsRUFBUWpDLEVBQU1lLGFBQWNtQixRQUFRLGNBQzFDLEVBQUExQixhQUFhMkIsWUFDWEYsRUFDYyxXQUFkdkUsS0FBS2dFLEtBQW9CLEVBQUFVLGNBQWNDLE9BQVMsRUFBQUQsY0FBY0UsV0FLbEUsWUFBQUMsaUJBQUEsU0FBaUJwQixHQUNBekQsS0FBS1EsUUFBUVEsY0FBYyxNQUNuQ29ELFVBQVVVLE9BQU8sY0FHMUIsWUFBQTNELFVBQUEsc0JBQ0VuQixLQUFLUSxRQUFRWSxpQkFBaUIsV0FBWXBCLEtBQUtrRSxpQkFDL0NsRSxLQUFLUSxRQUFRWSxpQkFBaUIsWUFBYXBCLEtBQUs2RSxrQkFDaEQ3RSxLQUFLUSxRQUFRWSxpQkFBaUIsT0FBUXBCLEtBQUtzRSxhQUUzQyxFQUFBeEIsYUFBYWlDLGFBQVksU0FBQ0MsR0FDeEIsSUFBTUMsRUFBbUJELEVBQVNFLFFBQU8sU0FBQ0MsR0FDeEMsTUFBa0IsV0FBZCxFQUFLbkIsS0FDQW1CLEVBQUlDLFNBQVcsRUFBQVYsY0FBY0MsT0FFL0JRLEVBQUlDLFNBQVcsRUFBQVYsY0FBY0UsWUFFdEMsRUFBS1gsaUJBQW1CZ0IsRUFDeEIsRUFBS0kscUJBSVQsWUFBQS9ELGNBQUEsV0FDRSxJQUFNZ0UsRUFBWXRGLEtBQUtnRSxLQUFJLGlCQUMzQmhFLEtBQUtRLFFBQVFRLGNBQWMsTUFBT04sR0FBSzRFLEVBQ3ZDdEYsS0FBS1EsUUFBUVEsY0FBYyxNQUFPNEMsWUFDaEM1RCxLQUFLZ0UsS0FBS3VCLGNBQWdCLGFBR3RCLFlBQUFGLGVBQVIsV0FDaUJuRixTQUFTQyxlQUNuQkgsS0FBS2dFLEtBQUksa0JBRVB3QixVQUFZLEdBQ25CLElBQXNCLFVBQUF4RixLQUFLaUUsaUJBQUwsZUFBdUIsQ0FBeEMsSUFBTXdCLEVBQU8sS0FDaEIsSUFBSSxFQUFBMUIsWUFBWS9ELEtBQUtRLFFBQVFRLGNBQWMsTUFBT04sR0FBSStFLEtBckQxRCxHQURDLEVBQUF6QyxVLG9DQVVELEdBREMsRUFBQUEsVSxnQ0FVRCxHQURDLEVBQUFBLFUscUNBdUNILEVBdkVBLENBQ1UsRUFBQWxDLFdBREcsRUFBQTRFLGUsK0VDUGIsb0JBQXlCakMsRUFBUWtDLEVBQVlDLEdBQzNDLElBQU1DLEVBQWlCRCxFQUFXbkUsTUFRbEMsTUFQMEMsQ0FDeENxRSxjQUFjLEVBQ2RDLElBQUcsV0FFRCxPQURnQkYsRUFBZUcsS0FBS2hHLFUsWUNOMUMsSUFBWTBFLEUsbUZBQUFBLEVBQUEsRUFBQUEsZ0JBQUEsRUFBQUEsY0FBYSxLQUN2QixxQkFDQSwyQkFHVyxFQUFBdUIsUUFDWCxTQUNTdkYsRUFDQWlDLEVBQ0FtQixFQUNBakIsRUFDQXVDLEdBSkEsS0FBQTFFLEtBQ0EsS0FBQWlDLFFBQ0EsS0FBQW1CLGNBQ0EsS0FBQWpCLFNBQ0EsS0FBQXVDLFcsd2tCQ1hYLGFBYUEsY0FJRSxtQkFDRSxjQUFPLEssT0FKRCxFQUFBSixTQUFzQixHLEVBd0NoQyxPQXpDa0MsT0FRekIsRUFBQWtCLFlBQVAsV0FDRSxPQUFJbEcsS0FBS21HLFdBR1RuRyxLQUFLbUcsU0FBVyxJQUFJQyxHQUZYcEcsS0FBS21HLFVBTWhCLFlBQUFwRCxXQUFBLFNBQVdKLEVBQWVtQixFQUFxQnVDLEdBQzdDLElBQU1DLEVBQWEsSUFBSSxFQUFBTCxRQUNyQk0sS0FBS0MsU0FBU0MsV0FDZDlELEVBQ0FtQixFQUNBdUMsRUFDQSxFQUFBM0IsY0FBY0MsUUFFaEIzRSxLQUFLZ0YsU0FBUzBCLEtBQUtKLEdBQ25CdEcsS0FBSzJHLG1CQUdQLFlBQUFsQyxZQUFBLFNBQVltQyxFQUFtQkMsR0FDN0IsSUFBTTFELEVBQVVuRCxLQUFLZ0YsU0FBUzhCLE1BQUssU0FBQzNCLEdBQVEsT0FBQUEsRUFBSXpFLEtBQU9rRyxLQUNuRHpELEdBQVdBLEVBQVFpQyxTQUFXeUIsSUFDaEMxRCxFQUFRaUMsT0FBU3lCLEVBQ2pCN0csS0FBSzJHLG9CQUlELFlBQUFBLGdCQUFSLFdBQ0UsSUFBeUIsVUFBQTNHLEtBQUsrRyxVQUFMLGdCQUN2QkMsRUFEbUIsTUFDUmhILEtBQUtnRixTQUFTaUMsVUFHL0IsRUF6Q0EsQ0FSQSx3QkFDWSxLQUFBRixVQUEyQixHQUt2QyxPQUhFLFlBQUFoQyxZQUFBLFNBQVlpQyxHQUNWaEgsS0FBSytHLFVBQVVMLEtBQUtNLElBRXhCLEVBTkEsSUFRYSxFQUFBWixlQTJDQSxFQUFBdEQsYUFBZXNELEVBQWFGLGUsK0VDOUN6QyxvQkFBeUJnQixHQUN2QixJQUFJQyxHQUFVLEVBOEJkLE9BN0JJRCxFQUFpQnJGLFdBQ25Cc0YsRUFBVUEsR0FBK0QsSUFBcERELEVBQWlCekYsTUFBTWdGLFdBQVdXLE9BQU9DLFFBR2hDLE1BQTlCSCxFQUFpQm5GLFdBQ2lCLGlCQUEzQm1GLEVBQWlCekYsUUFFeEIwRixFQUNFQSxHQUFXRCxFQUFpQnpGLE1BQU00RixRQUFVSCxFQUFpQm5GLFdBR2pDLE1BQTlCbUYsRUFBaUJJLFdBQ2lCLGlCQUEzQkosRUFBaUJ6RixRQUV4QjBGLEVBQ0VBLEdBQVdELEVBQWlCekYsTUFBTTRGLFFBQVVILEVBQWlCSSxXQUd2QyxNQUF4QkosRUFBaUJqRixLQUNpQixpQkFBM0JpRixFQUFpQnpGLFFBRXhCMEYsRUFBVUEsR0FBV0QsRUFBaUJ6RixPQUFTeUYsRUFBaUJqRixLQUd4QyxNQUF4QmlGLEVBQWlCaEYsS0FDaUIsaUJBQTNCZ0YsRUFBaUJ6RixRQUV4QjBGLEVBQVVBLEdBQVdELEVBQWlCekYsT0FBU3lGLEVBQWlCaEYsS0FFM0RpRixLQ3hDTEksRUFBMkIsR0FHL0IsU0FBU0MsRUFBb0JDLEdBRTVCLElBQUlDLEVBQWVILEVBQXlCRSxHQUM1QyxRQUFxQkUsSUFBakJELEVBQ0gsT0FBT0EsRUFBYUUsUUFHckIsSUFBSUMsRUFBU04sRUFBeUJFLEdBQVksQ0FHakRHLFFBQVMsSUFPVixPQUhBRSxFQUFvQkwsR0FBVU0sS0FBS0YsRUFBT0QsUUFBU0MsRUFBUUEsRUFBT0QsUUFBU0osR0FHcEVLLEVBQU9ELFFUckJmLFNBR0EsSUFGQSxPQUVJM0UsY0FDSixJQUFJLEVBQUF5QyxZQUFZLFVBQ2hCLElBQUksRUFBQUEsWUFBWSxhIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2plY3RMaXN0IH0gZnJvbSBcIi4vY29tcG9uZW50cy9wcm9qZWN0LWxpc3RcIjtcbmltcG9ydCB7IFByb2plY3RJbnB1dCB9IGZyb20gXCIuL2NvbXBvbmVudHMvcHJvamVjdC1pbnB1dFwiO1xuXG5uZXcgUHJvamVjdElucHV0KCk7XG5uZXcgUHJvamVjdExpc3QoXCJhY3RpdmVcIik7XG5uZXcgUHJvamVjdExpc3QoXCJmaW5pc2hlZFwiKTtcbiIsIi8vIENvbXBvbmVudCBCYXNlIENsYXNzXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ29tcG9uZW50PFQgZXh0ZW5kcyBIVE1MRWxlbWVudCwgVSBleHRlbmRzIEhUTUxFbGVtZW50PiB7XG4gIHRlbXBsYXRlRWxlbWVudDogSFRNTFRlbXBsYXRlRWxlbWVudDtcbiAgaG9zdEVsZW1lbnQ6IFQ7XG4gIGVsZW1lbnQ6IFU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgdGVtcGxhdGVJZDogc3RyaW5nLFxuICAgIGhvc3RFbGVtZW50SWQ6IHN0cmluZyxcbiAgICBpbnNlcnRBdFN0YXJ0OiBib29sZWFuLFxuICAgIG5ld0VsZW1lbnRJZD86IHN0cmluZ1xuICApIHtcbiAgICB0aGlzLnRlbXBsYXRlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgdGVtcGxhdGVJZFxuICAgICkhIGFzIEhUTUxUZW1wbGF0ZUVsZW1lbnQ7XG4gICAgdGhpcy5ob3N0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhvc3RFbGVtZW50SWQpISBhcyBUO1xuXG4gICAgY29uc3QgaW1wb3J0ZWROb2RlID0gZG9jdW1lbnQuaW1wb3J0Tm9kZShcbiAgICAgIHRoaXMudGVtcGxhdGVFbGVtZW50LmNvbnRlbnQsXG4gICAgICB0cnVlXG4gICAgKTtcbiAgICB0aGlzLmVsZW1lbnQgPSBpbXBvcnRlZE5vZGUuZmlyc3RFbGVtZW50Q2hpbGQgYXMgVTtcbiAgICBpZiAobmV3RWxlbWVudElkKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuaWQgPSBuZXdFbGVtZW50SWQ7XG4gICAgfVxuXG4gICAgdGhpcy5hdHRhY2goaW5zZXJ0QXRTdGFydCk7XG4gIH1cblxuICBwcml2YXRlIGF0dGFjaChpbnNlcnRBdEJlZ2lubmluZzogYm9vbGVhbikge1xuICAgIHRoaXMuaG9zdEVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFxuICAgICAgaW5zZXJ0QXRCZWdpbm5pbmcgPyBcImFmdGVyYmVnaW5cIiA6IFwiYmVmb3JlZW5kXCIsXG4gICAgICB0aGlzLmVsZW1lbnRcbiAgICApO1xuICB9XG5cbiAgYWJzdHJhY3QgY29uZmlndXJlKCk6IHZvaWQ7XG4gIGFic3RyYWN0IHJlbmRlckNvbnRlbnQoKTogdm9pZDtcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuL2Jhc2UtY29tcG9uZW50XCI7XG5pbXBvcnQgeyBWYWxpZGF0YWJsZSwgdmFsaWRhdGUgfSBmcm9tIFwiLi4vdXRpbC92YWxpZGF0aW9uXCI7XG5pbXBvcnQgeyBhdXRvYmluZCB9IGZyb20gXCIuLi9kZWNvcmF0b3JzL2F1dG9iaW5kXCI7XG5pbXBvcnQgeyBwcm9qZWN0U3RhdGUgfSBmcm9tIFwiLi4vc3RhdGUvcHJvamVjdC1zdGF0ZVwiO1xuXG4vLyBQcm9qZWN0SW5wdXQgQ2xhc3NcbmV4cG9ydCBjbGFzcyBQcm9qZWN0SW5wdXQgZXh0ZW5kcyBDb21wb25lbnQ8SFRNTERpdkVsZW1lbnQsIEhUTUxGb3JtRWxlbWVudD4ge1xuICB0aXRsZUlucHV0RWxlbWVudDogSFRNTElucHV0RWxlbWVudDtcbiAgZGVzY3JpcHRpb25JbnB1dEVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gIHBlb3BsZUlucHV0RWxlbWVudDogSFRNTElucHV0RWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihcInByb2plY3QtaW5wdXRcIiwgXCJhcHBcIiwgdHJ1ZSwgXCJ1c2VyLWlucHV0XCIpO1xuICAgIHRoaXMudGl0bGVJbnB1dEVsZW1lbnQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiI3RpdGxlXCJcbiAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgdGhpcy5kZXNjcmlwdGlvbklucHV0RWxlbWVudCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCIjZGVzY3JpcHRpb25cIlxuICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICB0aGlzLnBlb3BsZUlucHV0RWxlbWVudCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCIjcGVvcGxlXCJcbiAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgdGhpcy5jb25maWd1cmUoKTtcbiAgfVxuXG4gIGNvbmZpZ3VyZSgpIHtcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCB0aGlzLnN1Ym1pdEhhbmRsZXIpO1xuICB9XG5cbiAgcmVuZGVyQ29udGVudCgpIHt9XG5cbiAgcHJpdmF0ZSBnYXRoZXJVc2VySW5wdXQoKTogW3N0cmluZywgc3RyaW5nLCBudW1iZXJdIHwgdm9pZCB7XG4gICAgY29uc3QgZW50ZXJlZFRpdGxlID0gdGhpcy50aXRsZUlucHV0RWxlbWVudC52YWx1ZTtcbiAgICBjb25zdCBlbnRlcmVkRGVzY3JpcHRpb24gPSB0aGlzLmRlc2NyaXB0aW9uSW5wdXRFbGVtZW50LnZhbHVlO1xuICAgIGNvbnN0IGVudGVyZWRQZW9wbGUgPSB0aGlzLnBlb3BsZUlucHV0RWxlbWVudC52YWx1ZTtcblxuICAgIGNvbnN0IHRpdGxlVmFsaWRhdGFibGU6IFZhbGlkYXRhYmxlID0ge1xuICAgICAgdmFsdWU6IGVudGVyZWRUaXRsZSxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH07XG4gICAgY29uc3QgZGVzY3JpcHRpb25WYWxpZGF0YWJsZTogVmFsaWRhdGFibGUgPSB7XG4gICAgICB2YWx1ZTogZW50ZXJlZERlc2NyaXB0aW9uLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICBtaW5MZW5ndGg6IDUsXG4gICAgfTtcbiAgICBjb25zdCBwZW9wbGVWYWxpZGF0YWJsZTogVmFsaWRhdGFibGUgPSB7XG4gICAgICB2YWx1ZTogK2VudGVyZWRQZW9wbGUsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIG1pbjogMSxcbiAgICAgIG1heDogNSxcbiAgICB9O1xuXG4gICAgaWYgKFxuICAgICAgIXZhbGlkYXRlKHRpdGxlVmFsaWRhdGFibGUpIHx8XG4gICAgICAhdmFsaWRhdGUoZGVzY3JpcHRpb25WYWxpZGF0YWJsZSkgfHxcbiAgICAgICF2YWxpZGF0ZShwZW9wbGVWYWxpZGF0YWJsZSlcbiAgICApIHtcbiAgICAgIGFsZXJ0KFwiSW52YWxpZCBpbnB1dCwgcGxlYXNlIHRyeSBhZ2FpbiFcIik7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBbZW50ZXJlZFRpdGxlLCBlbnRlcmVkRGVzY3JpcHRpb24sICtlbnRlcmVkUGVvcGxlXTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNsZWFySW5wdXRzKCkge1xuICAgIHRoaXMudGl0bGVJbnB1dEVsZW1lbnQudmFsdWUgPSBcIlwiO1xuICAgIHRoaXMuZGVzY3JpcHRpb25JbnB1dEVsZW1lbnQudmFsdWUgPSBcIlwiO1xuICAgIHRoaXMucGVvcGxlSW5wdXRFbGVtZW50LnZhbHVlID0gXCJcIjtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBwcml2YXRlIHN1Ym1pdEhhbmRsZXIoZXZlbnQ6IEV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB1c2VySW5wdXQgPSB0aGlzLmdhdGhlclVzZXJJbnB1dCgpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHVzZXJJbnB1dCkpIHtcbiAgICAgIGNvbnN0IFt0aXRsZSwgZGVzYywgcGVvcGxlXSA9IHVzZXJJbnB1dDtcbiAgICAgIHByb2plY3RTdGF0ZS5hZGRQcm9qZWN0KHRpdGxlLCBkZXNjLCBwZW9wbGUpO1xuICAgICAgdGhpcy5jbGVhcklucHV0cygpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgRHJhZ2dhYmxlIH0gZnJvbSBcIi4uL21vZGVscy9kcmFnLWRyb3BcIjtcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuL2Jhc2UtY29tcG9uZW50XCI7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4uL21vZGVscy9wcm9qZWN0XCI7XG5pbXBvcnQgeyBhdXRvYmluZCB9IGZyb20gXCIuLi9kZWNvcmF0b3JzL2F1dG9iaW5kXCI7XG5cbi8vIFByb2plY3RJdGVtIENsYXNzXG5leHBvcnQgY2xhc3MgUHJvamVjdEl0ZW1cbiAgZXh0ZW5kcyBDb21wb25lbnQ8SFRNTFVMaXN0RWxlbWVudCwgSFRNTExJRWxlbWVudD5cbiAgaW1wbGVtZW50cyBEcmFnZ2FibGVcbntcbiAgcHJpdmF0ZSBwcm9qZWN0OiBQcm9qZWN0O1xuXG4gIGdldCBwZXJzb25zKCkge1xuICAgIGlmICh0aGlzLnByb2plY3QucGVvcGxlID09PSAxKSB7XG4gICAgICByZXR1cm4gXCIxIHBlcnNvblwiO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYCR7dGhpcy5wcm9qZWN0LnBlb3BsZX0gcGVyc29uc2A7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoaG9zdElkOiBzdHJpbmcsIHByb2plY3Q6IFByb2plY3QpIHtcbiAgICBzdXBlcihcInNpbmdsZS1wcm9qZWN0XCIsIGhvc3RJZCwgZmFsc2UsIHByb2plY3QuaWQpO1xuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG5cbiAgICB0aGlzLmNvbmZpZ3VyZSgpO1xuICAgIHRoaXMucmVuZGVyQ29udGVudCgpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIGRyYWdTdGFydEhhbmRsZXIoZXZlbnQ6IERyYWdFdmVudCkge1xuICAgIGV2ZW50LmRhdGFUcmFuc2ZlciEuc2V0RGF0YShcInRleHQvcGxhaW5cIiwgdGhpcy5wcm9qZWN0LmlkKTtcbiAgICBldmVudC5kYXRhVHJhbnNmZXIhLmVmZmVjdEFsbG93ZWQgPSBcIm1vdmVcIjtcbiAgfVxuXG4gIGRyYWdFbmRIYW5kbGVyKF86IERyYWdFdmVudCkge1xuICAgIGNvbnNvbGUubG9nKFwiRHJhZ0VuZFwiKTtcbiAgfVxuXG4gIGNvbmZpZ3VyZSgpIHtcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCB0aGlzLmRyYWdTdGFydEhhbmRsZXIpO1xuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2VuZFwiLCB0aGlzLmRyYWdFbmRIYW5kbGVyKTtcbiAgfVxuXG4gIHJlbmRlckNvbnRlbnQoKSB7XG4gICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMlwiKSEudGV4dENvbnRlbnQgPSB0aGlzLnByb2plY3QudGl0bGU7XG4gICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoM1wiKSEudGV4dENvbnRlbnQgPSB0aGlzLnBlcnNvbnMgKyBcIiBhc3NpZ25lZFwiO1xuICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwicFwiKSEudGV4dENvbnRlbnQgPSB0aGlzLnByb2plY3QuZGVzY3JpcHRpb247XG4gIH1cbn1cbiIsImltcG9ydCB7IERyYWdUYXJnZXQgfSBmcm9tIFwiLi4vbW9kZWxzL2RyYWctZHJvcFwiO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4vYmFzZS1jb21wb25lbnRcIjtcbmltcG9ydCB7IFByb2plY3QsIFByb2plY3RTdGF0dXMgfSBmcm9tIFwiLi4vbW9kZWxzL3Byb2plY3RcIjtcbmltcG9ydCB7IGF1dG9iaW5kIH0gZnJvbSBcIi4uL2RlY29yYXRvcnMvYXV0b2JpbmRcIjtcbmltcG9ydCB7IHByb2plY3RTdGF0ZSB9IGZyb20gXCIuLi9zdGF0ZS9wcm9qZWN0LXN0YXRlXCI7XG5pbXBvcnQgeyBQcm9qZWN0SXRlbSB9IGZyb20gXCIuL3Byb2plY3QtaXRlbVwiO1xuXG4vLyBQcm9qZWN0TGlzdCBDbGFzc1xuZXhwb3J0IGNsYXNzIFByb2plY3RMaXN0XG4gIGV4dGVuZHMgQ29tcG9uZW50PEhUTUxEaXZFbGVtZW50LCBIVE1MRWxlbWVudD5cbiAgaW1wbGVtZW50cyBEcmFnVGFyZ2V0XG57XG4gIGFzc2lnbmVkUHJvamVjdHM6IFByb2plY3RbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHR5cGU6IFwiYWN0aXZlXCIgfCBcImZpbmlzaGVkXCIpIHtcbiAgICBzdXBlcihcInByb2plY3QtbGlzdFwiLCBcImFwcFwiLCBmYWxzZSwgYCR7dHlwZX0tcHJvamVjdHNgKTtcbiAgICB0aGlzLmFzc2lnbmVkUHJvamVjdHMgPSBbXTtcblxuICAgIHRoaXMuY29uZmlndXJlKCk7XG4gICAgdGhpcy5yZW5kZXJDb250ZW50KCk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgZHJhZ092ZXJIYW5kbGVyKGV2ZW50OiBEcmFnRXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuZGF0YVRyYW5zZmVyICYmIGV2ZW50LmRhdGFUcmFuc2Zlci50eXBlc1swXSA9PT0gXCJ0ZXh0L3BsYWluXCIpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBsaXN0RWwgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcInVsXCIpITtcbiAgICAgIGxpc3RFbC5jbGFzc0xpc3QuYWRkKFwiZHJvcHBhYmxlXCIpO1xuICAgIH1cbiAgfVxuXG4gIEBhdXRvYmluZFxuICBkcm9wSGFuZGxlcihldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgY29uc3QgcHJqSWQgPSBldmVudC5kYXRhVHJhbnNmZXIhLmdldERhdGEoXCJ0ZXh0L3BsYWluXCIpO1xuICAgIHByb2plY3RTdGF0ZS5tb3ZlUHJvamVjdChcbiAgICAgIHByaklkLFxuICAgICAgdGhpcy50eXBlID09PSBcImFjdGl2ZVwiID8gUHJvamVjdFN0YXR1cy5BY3RpdmUgOiBQcm9qZWN0U3RhdHVzLkZpbmlzaGVkXG4gICAgKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBkcmFnTGVhdmVIYW5kbGVyKF86IERyYWdFdmVudCkge1xuICAgIGNvbnN0IGxpc3RFbCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwidWxcIikhO1xuICAgIGxpc3RFbC5jbGFzc0xpc3QucmVtb3ZlKFwiZHJvcHBhYmxlXCIpO1xuICB9XG5cbiAgY29uZmlndXJlKCkge1xuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgdGhpcy5kcmFnT3ZlckhhbmRsZXIpO1xuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2xlYXZlXCIsIHRoaXMuZHJhZ0xlYXZlSGFuZGxlcik7XG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIHRoaXMuZHJvcEhhbmRsZXIpO1xuXG4gICAgcHJvamVjdFN0YXRlLmFkZExpc3RlbmVyKChwcm9qZWN0czogUHJvamVjdFtdKSA9PiB7XG4gICAgICBjb25zdCByZWxldmFudFByb2plY3RzID0gcHJvamVjdHMuZmlsdGVyKChwcmopID0+IHtcbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gXCJhY3RpdmVcIikge1xuICAgICAgICAgIHJldHVybiBwcmouc3RhdHVzID09PSBQcm9qZWN0U3RhdHVzLkFjdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJqLnN0YXR1cyA9PT0gUHJvamVjdFN0YXR1cy5GaW5pc2hlZDtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5hc3NpZ25lZFByb2plY3RzID0gcmVsZXZhbnRQcm9qZWN0cztcbiAgICAgIHRoaXMucmVuZGVyUHJvamVjdHMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlckNvbnRlbnQoKSB7XG4gICAgY29uc3QgbGlzdElkID0gYCR7dGhpcy50eXBlfS1wcm9qZWN0cy1saXN0YDtcbiAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcInVsXCIpIS5pZCA9IGxpc3RJZDtcbiAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcImgyXCIpIS50ZXh0Q29udGVudCA9XG4gICAgICB0aGlzLnR5cGUudG9VcHBlckNhc2UoKSArIFwiIFBST0pFQ1RTXCI7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlclByb2plY3RzKCkge1xuICAgIGNvbnN0IGxpc3RFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgYCR7dGhpcy50eXBlfS1wcm9qZWN0cy1saXN0YFxuICAgICkhIGFzIEhUTUxVTGlzdEVsZW1lbnQ7XG4gICAgbGlzdEVsLmlubmVySFRNTCA9IFwiXCI7XG4gICAgZm9yIChjb25zdCBwcmpJdGVtIG9mIHRoaXMuYXNzaWduZWRQcm9qZWN0cykge1xuICAgICAgbmV3IFByb2plY3RJdGVtKHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwidWxcIikhLmlkLCBwcmpJdGVtKTtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIGF1dG9iaW5kIGRlY29yYXRvclxuZXhwb3J0IGZ1bmN0aW9uIGF1dG9iaW5kKF86IGFueSwgXzI6IHN0cmluZywgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yKSB7XG4gIGNvbnN0IG9yaWdpbmFsTWV0aG9kID0gZGVzY3JpcHRvci52YWx1ZTtcbiAgY29uc3QgYWRqRGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yID0ge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCBib3VuZEZuID0gb3JpZ2luYWxNZXRob2QuYmluZCh0aGlzKTtcbiAgICAgIHJldHVybiBib3VuZEZuO1xuICAgIH0sXG4gIH07XG4gIHJldHVybiBhZGpEZXNjcmlwdG9yO1xufVxuIiwiZXhwb3J0IGVudW0gUHJvamVjdFN0YXR1cyB7XG4gIEFjdGl2ZSxcbiAgRmluaXNoZWQsXG59XG5cbmV4cG9ydCBjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGlkOiBzdHJpbmcsXG4gICAgcHVibGljIHRpdGxlOiBzdHJpbmcsXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmcsXG4gICAgcHVibGljIHBlb3BsZTogbnVtYmVyLFxuICAgIHB1YmxpYyBzdGF0dXM6IFByb2plY3RTdGF0dXNcbiAgKSB7fVxufVxuIiwiaW1wb3J0IHsgUHJvamVjdCwgUHJvamVjdFN0YXR1cyB9IGZyb20gXCIuLi9tb2RlbHMvcHJvamVjdFwiO1xuXG4vLyBQcm9qZWN0IFN0YXRlIE1hbmFnZW1lbnRcbnR5cGUgTGlzdGVuZXI8VD4gPSAoaXRlbXM6IFRbXSkgPT4gdm9pZDtcblxuY2xhc3MgU3RhdGU8VD4ge1xuICBwcm90ZWN0ZWQgbGlzdGVuZXJzOiBMaXN0ZW5lcjxUPltdID0gW107XG5cbiAgYWRkTGlzdGVuZXIobGlzdGVuZXJGbjogTGlzdGVuZXI8VD4pIHtcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyRm4pO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQcm9qZWN0U3RhdGUgZXh0ZW5kcyBTdGF0ZTxQcm9qZWN0PiB7XG4gIHByaXZhdGUgcHJvamVjdHM6IFByb2plY3RbXSA9IFtdO1xuICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogUHJvamVjdFN0YXRlO1xuXG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xuICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gICAgfVxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgUHJvamVjdFN0YXRlKCk7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gIH1cblxuICBhZGRQcm9qZWN0KHRpdGxlOiBzdHJpbmcsIGRlc2NyaXB0aW9uOiBzdHJpbmcsIG51bU9mUGVvcGxlOiBudW1iZXIpIHtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoXG4gICAgICBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKCksXG4gICAgICB0aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgbnVtT2ZQZW9wbGUsXG4gICAgICBQcm9qZWN0U3RhdHVzLkFjdGl2ZVxuICAgICk7XG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICAgIHRoaXMudXBkYXRlTGlzdGVuZXJzKCk7XG4gIH1cblxuICBtb3ZlUHJvamVjdChwcm9qZWN0SWQ6IHN0cmluZywgbmV3U3RhdHVzOiBQcm9qZWN0U3RhdHVzKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IHRoaXMucHJvamVjdHMuZmluZCgocHJqKSA9PiBwcmouaWQgPT09IHByb2plY3RJZCk7XG4gICAgaWYgKHByb2plY3QgJiYgcHJvamVjdC5zdGF0dXMgIT09IG5ld1N0YXR1cykge1xuICAgICAgcHJvamVjdC5zdGF0dXMgPSBuZXdTdGF0dXM7XG4gICAgICB0aGlzLnVwZGF0ZUxpc3RlbmVycygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlTGlzdGVuZXJzKCkge1xuICAgIGZvciAoY29uc3QgbGlzdGVuZXJGbiBvZiB0aGlzLmxpc3RlbmVycykge1xuICAgICAgbGlzdGVuZXJGbih0aGlzLnByb2plY3RzLnNsaWNlKCkpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcHJvamVjdFN0YXRlID0gUHJvamVjdFN0YXRlLmdldEluc3RhbmNlKCk7XG4iLCIvLyBWYWxpZGF0aW9uXG5leHBvcnQgaW50ZXJmYWNlIFZhbGlkYXRhYmxlIHtcbiAgdmFsdWU6IHN0cmluZyB8IG51bWJlcjtcbiAgcmVxdWlyZWQ/OiBib29sZWFuO1xuICBtaW5MZW5ndGg/OiBudW1iZXI7XG4gIG1heExlbmd0aD86IG51bWJlcjtcbiAgbWluPzogbnVtYmVyO1xuICBtYXg/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZSh2YWxpZGF0YWJsZUlucHV0OiBWYWxpZGF0YWJsZSkge1xuICBsZXQgaXNWYWxpZCA9IHRydWU7XG4gIGlmICh2YWxpZGF0YWJsZUlucHV0LnJlcXVpcmVkKSB7XG4gICAgaXNWYWxpZCA9IGlzVmFsaWQgJiYgdmFsaWRhdGFibGVJbnB1dC52YWx1ZS50b1N0cmluZygpLnRyaW0oKS5sZW5ndGggIT09IDA7XG4gIH1cbiAgaWYgKFxuICAgIHZhbGlkYXRhYmxlSW5wdXQubWluTGVuZ3RoICE9IG51bGwgJiZcbiAgICB0eXBlb2YgdmFsaWRhdGFibGVJbnB1dC52YWx1ZSA9PT0gXCJzdHJpbmdcIlxuICApIHtcbiAgICBpc1ZhbGlkID1cbiAgICAgIGlzVmFsaWQgJiYgdmFsaWRhdGFibGVJbnB1dC52YWx1ZS5sZW5ndGggPj0gdmFsaWRhdGFibGVJbnB1dC5taW5MZW5ndGg7XG4gIH1cbiAgaWYgKFxuICAgIHZhbGlkYXRhYmxlSW5wdXQubWF4TGVuZ3RoICE9IG51bGwgJiZcbiAgICB0eXBlb2YgdmFsaWRhdGFibGVJbnB1dC52YWx1ZSA9PT0gXCJzdHJpbmdcIlxuICApIHtcbiAgICBpc1ZhbGlkID1cbiAgICAgIGlzVmFsaWQgJiYgdmFsaWRhdGFibGVJbnB1dC52YWx1ZS5sZW5ndGggPD0gdmFsaWRhdGFibGVJbnB1dC5tYXhMZW5ndGg7XG4gIH1cbiAgaWYgKFxuICAgIHZhbGlkYXRhYmxlSW5wdXQubWluICE9IG51bGwgJiZcbiAgICB0eXBlb2YgdmFsaWRhdGFibGVJbnB1dC52YWx1ZSA9PT0gXCJudW1iZXJcIlxuICApIHtcbiAgICBpc1ZhbGlkID0gaXNWYWxpZCAmJiB2YWxpZGF0YWJsZUlucHV0LnZhbHVlID49IHZhbGlkYXRhYmxlSW5wdXQubWluO1xuICB9XG4gIGlmIChcbiAgICB2YWxpZGF0YWJsZUlucHV0Lm1heCAhPSBudWxsICYmXG4gICAgdHlwZW9mIHZhbGlkYXRhYmxlSW5wdXQudmFsdWUgPT09IFwibnVtYmVyXCJcbiAgKSB7XG4gICAgaXNWYWxpZCA9IGlzVmFsaWQgJiYgdmFsaWRhdGFibGVJbnB1dC52YWx1ZSA8PSB2YWxpZGF0YWJsZUlucHV0Lm1heDtcbiAgfVxuICByZXR1cm4gaXNWYWxpZDtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9
