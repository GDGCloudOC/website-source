(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"about-container\">\r\n  <div fxLayout=\"row\">\r\n    <div fxLayout=\"column\" class=\"column-half\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel class=\"expansion-panel\" [expanded]=\"true\">\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title class=\"title1\">\r\n              Who we are\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <p>\r\n            GDG Cloud OC is a community-run group that meets once a month to\r\n            learn and discuss the Google Cloud Platform and related\r\n            technologies. Anyone may attend regardless of experience or\r\n            affiliation.\r\n          </p>\r\n          <p>\r\n            <strong>Disclaimer:</strong> GDG Cloud OC is an independent group;\r\n            our activities and the opinions expressed here should in no way be\r\n            linked to Google, the corporation. To learn more about the GDG\r\n            program, visit\r\n            <a href=\"https://developers.google.com/groups/\"\r\n              >https://developers.google.com/groups/</a\r\n            >\r\n          </p>\r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel class=\"expansion-panel\">\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title class=\"title1\">\r\n              When we meet\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <p>\r\n            Meetings typically occur on the fourth Tuesday of every month at\r\n            either Google Irvine or Neudesic HQ. However time and place is\r\n            always subject to change, so always be sure check the event details\r\n            page to confirm. Our meetings are free and open to all, but we do\r\n            have limited space so please RSVP to reserve your spot at each\r\n            meeting. We are an inclusive group and welcome anyone regardless of\r\n            experience or affiliation.\r\n          </p>\r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel class=\"expansion-panel\">\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title class=\"title1\">\r\n              More about GDG\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <p>\r\n            Google Developer Groups (GDGs) are for developers who are interested\r\n            in Google's developer technology; everything from the Android,\r\n            Chrome, Drive, and Google Cloud platforms, to product APIs like the\r\n            Cast API, Maps API, and YouTube API.\r\n          </p>\r\n          <p>\r\n            A GDG can take many forms -- from just a few people getting together\r\n            to watch our latest video, to large gatherings with demos and tech\r\n            talks, to events like code sprints and hackathons. However, at the\r\n            core, GDGs are focused on developers and technical content, and the\r\n            core audience should be developers.\r\n          </p>\r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel class=\"expansion-panel\">\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title class=\"title1\">\r\n              How to find us\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <mat-card class=\"contact-card\">\r\n            <mat-card-content>\r\n              <h3>Neudesic HQ</h3>\r\n              <p>200 Spectrum Center Dr Suite 2000, Irvine, CA 92618</p>\r\n            </mat-card-content>\r\n            <mat-card-actions align=\"end\">\r\n              <a\r\n                mat-button\r\n                alt=\"Group photo\"\r\n                color=\"primary\"\r\n                href=\"https://www.google.com/maps/place/200+Spectrum+Center+Dr+%232000,+Irvine,+CA+92618/@33.6527125,-117.7500632,17z/data=!3m1!4b1!4m5!3m4!1s0x80dce7f82e0babad:0x17233ed9e87a7c82!8m2!3d33.6527125!4d-117.7478745\"\r\n                target=\"_blank\"\r\n                >Map</a\r\n              >\r\n            </mat-card-actions>\r\n          </mat-card>\r\n          <mat-card class=\"contact-card\">\r\n            <mat-card-content>\r\n              <h3>Google Irvine</h3>\r\n              <p>19510 Jamboree Rd, Irvine, CA 92612</p>\r\n            </mat-card-content>\r\n            <mat-card-actions align=\"end\">\r\n              <a\r\n                mat-button\r\n                color=\"primary\"\r\n                href=\"https://www.google.com/maps/place/200+Spectrum+Center+Dr+%232000,+Irvine,+CA+92618/@33.6527125,-117.7500632,17z/data=!3m1!4b1!4m5!3m4!1s0x80dce7f82e0babad:0x17233ed9e87a7c82!8m2!3d33.6527125!4d-117.7478745\"\r\n                target=\"_blank\"\r\n                >Map</a\r\n              >\r\n            </mat-card-actions>\r\n          </mat-card>\r\n          <mat-card-footer align=\"center\">\r\n            <p>\r\n              <em>* Please check event details page for confirmed location</em>\r\n            </p>\r\n          </mat-card-footer>\r\n        </mat-expansion-panel>\r\n      </mat-accordion>\r\n    </div>\r\n    <div\r\n      fxLayout=\"column\"\r\n      class=\"column-half\"\r\n      fxShow.sm=\"false\"\r\n      fxShow.xs=\"false\"\r\n    >\r\n      <mat-card class=\"about-card\">\r\n        <img mat-card-image src=\"../../assets/groupphoto.jpeg\" />\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".column-half {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  padding: 20px 10px; }\n\n.column-half {\n  margin-top: 60px; }\n\n.title1 {\n  color: #4285f4; }\n\n.title2 {\n  color: #db4437; }\n\n.title3 {\n  color: #0f9d58; }\n\n.title4 {\n  color: #f4b400; }\n\n.expansion-panel {\n  margin-top: 10px; }\n\n.contact-card {\n  margin-top: 5px; }\n\n@media screen and (max-width: 960px) {\n  .column-half {\n    width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvQzpcXFVzZXJzXFxDaGFybGllLkNvbGxpZXJcXEJlbmNoXFxBbmd1bGFyIFByYWN0aWNlXFx3ZWJzaXRlLXNvdXJjZVxcbmctcHJvamVjdC9zcmNcXGFwcFxcYWJvdXRcXGFib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsY0FBYyxFQUFBOztBQUVoQjtFQUNFLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxjQUFjLEVBQUE7O0FBRWhCO0VBQ0UsY0FBYyxFQUFBOztBQUVoQjtFQUNFLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRTtJQUNFLFdBQVcsRUFBQSxFQUNaIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sdW1uLWhhbGYge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmc6IDIwcHggMTBweDtcclxufVxyXG4uY29sdW1uLWhhbGYge1xyXG4gIG1hcmdpbi10b3A6IDYwcHg7XHJcbn1cclxuLnRpdGxlMSB7XHJcbiAgY29sb3I6ICM0Mjg1ZjQ7XHJcbn1cclxuLnRpdGxlMiB7XHJcbiAgY29sb3I6ICNkYjQ0Mzc7XHJcbn1cclxuLnRpdGxlMyB7XHJcbiAgY29sb3I6ICMwZjlkNTg7XHJcbn1cclxuLnRpdGxlNCB7XHJcbiAgY29sb3I6ICNmNGI0MDA7XHJcbn1cclxuLmV4cGFuc2lvbi1wYW5lbCB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4uY29udGFjdC1jYXJkIHtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XHJcbiAgLmNvbHVtbi1oYWxmIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () { };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "about-view",
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _events_events_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./events/events.component */ "./src/app/events/events.component.ts");
/* harmony import */ var _media_media_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./media/media.component */ "./src/app/media/media.component.ts");








var routes = [
    { path: "", component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
    { path: "contact", component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"] },
    { path: "media", component: _media_media_component__WEBPACK_IMPORTED_MODULE_7__["MediaComponent"] },
    { path: "events", component: _events_events_component__WEBPACK_IMPORTED_MODULE_6__["EventComponent"] },
    { path: "**", redirectTo: "", pathMatch: "full" }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-layout>\r\n  <mat-sidenav-container>\r\n    <mat-sidenav #sidenav role=\"navigation\">\r\n      <app-sidenav-list (sidenavClose)=\"sidenav.close()\"></app-sidenav-list>\r\n    </mat-sidenav>\r\n    <mat-sidenav-content>\r\n      <app-header (sidenavToggle)=\"sidenav.toggle()\"></app-header>\r\n      <main>\r\n        <!-- <app-home></app-home> -->\r\n        <router-outlet></router-outlet>\r\n      </main>\r\n      <ngx-image-gallery [images]=\"photos\" [conf]=\"imageGalleryConfig\"></ngx-image-gallery>\r\n    </mat-sidenav-content>\r\n  </mat-sidenav-container>\r\n</app-layout>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-sidenav-container,\nmat-sidenav-content,\nmat-sidenav {\n  height: 100%; }\n\nmat-sidenav {\n  width: 250px; }\n\nmain {\n  padding: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxDaGFybGllLkNvbGxpZXJcXEJlbmNoXFxBbmd1bGFyIFByYWN0aWNlXFx3ZWJzaXRlLXNvdXJjZVxcbmctcHJvamVjdC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtc2lkZW5hdi1jb250YWluZXIsXHJcbm1hdC1zaWRlbmF2LWNvbnRlbnQsXHJcbm1hdC1zaWRlbmF2IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbm1hdC1zaWRlbmF2IHtcclxuICB3aWR0aDogMjUwcHg7XHJcbn1cclxuXHJcbm1haW4ge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_image_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-image-gallery */ "./node_modules/ngx-image-gallery/ngx-image-gallery.umd.js");
/* harmony import */ var ngx_image_gallery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_image_gallery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_photos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/photos.service */ "./src/app/services/photos.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(photosService) {
        this.photosService = photosService;
        this.title = "ng-project";
        this.imageGalleryConfig = {
            imageBorderRadius: "0px",
            showExtUrlControl: false,
            showImageTitle: false,
            reactToMouseWheel: false,
            reactToRightClick: true
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.photosService.photos.subscribe(function (photos) {
            _this.photos = photos;
        });
        this.photosService.setGalleryRef(this.ngxImageGallery);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_image_gallery__WEBPACK_IMPORTED_MODULE_2__["NgxImageGalleryComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_image_gallery__WEBPACK_IMPORTED_MODULE_2__["NgxImageGalleryComponent"])
    ], AppComponent.prototype, "ngxImageGallery", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_photos_service__WEBPACK_IMPORTED_MODULE_3__["PhotosService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_image_gallery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-image-gallery */ "./node_modules/ngx-image-gallery/ngx-image-gallery.umd.js");
/* harmony import */ var ngx_image_gallery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_image_gallery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_linkifyjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-linkifyjs */ "./node_modules/ngx-linkifyjs/esm5/ngx-linkifyjs.es5.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _events_jumbotron_event_jumbotron_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./events/jumbotron/event-jumbotron.component */ "./src/app/events/jumbotron/event-jumbotron.component.ts");
/* harmony import */ var _events_thumbnail_event_thumbnail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./events/thumbnail/event-thumbnail.component */ "./src/app/events/thumbnail/event-thumbnail.component.ts");
/* harmony import */ var _events_events_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./events/events.component */ "./src/app/events/events.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _navigation_header_header_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./navigation/header/header.component */ "./src/app/navigation/header/header.component.ts");
/* harmony import */ var _media_photos_photos_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./media/photos/photos.component */ "./src/app/media/photos/photos.component.ts");
/* harmony import */ var _navigation_side_nav_sidenav_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./navigation/side-nav/sidenav-list.component */ "./src/app/navigation/side-nav/sidenav-list.component.ts");
/* harmony import */ var _comments_dialog_comment_dialog_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./comments/dialog/comment-dialog.component */ "./src/app/comments/dialog/comment-dialog.component.ts");
/* harmony import */ var _services_comment_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/comment.service */ "./src/app/services/comment.service.ts");
/* harmony import */ var _comments_thumbnail_comment_thumbnail_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./comments/thumbnail/comment-thumbnail.component */ "./src/app/comments/thumbnail/comment-thumbnail.component.ts");
/* harmony import */ var _media_media_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./media/media.component */ "./src/app/media/media.component.ts");
/* harmony import */ var _media_videos_videos_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./media/videos/videos.component */ "./src/app/media/videos/videos.component.ts");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var _comments_replies_comment_reply_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./comments/replies/comment-reply.component */ "./src/app/comments/replies/comment-reply.component.ts");




























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _layout_layout_component__WEBPACK_IMPORTED_MODULE_16__["LayoutComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
                _navigation_header_header_component__WEBPACK_IMPORTED_MODULE_18__["HeaderComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"],
                _events_events_component__WEBPACK_IMPORTED_MODULE_14__["EventComponent"],
                _events_thumbnail_event_thumbnail_component__WEBPACK_IMPORTED_MODULE_13__["EventThumbnailComponent"],
                _events_jumbotron_event_jumbotron_component__WEBPACK_IMPORTED_MODULE_12__["EventJumbotronComponent"],
                _media_photos_photos_component__WEBPACK_IMPORTED_MODULE_19__["PhotosComponent"],
                _navigation_side_nav_sidenav_list_component__WEBPACK_IMPORTED_MODULE_20__["SidenavListComponent"],
                _comments_dialog_comment_dialog_component__WEBPACK_IMPORTED_MODULE_21__["CommentDialogComponent"],
                _comments_thumbnail_comment_thumbnail_component__WEBPACK_IMPORTED_MODULE_23__["CommentThumbnailComponent"],
                _media_media_component__WEBPACK_IMPORTED_MODULE_24__["MediaComponent"],
                _media_videos_videos_component__WEBPACK_IMPORTED_MODULE_25__["VideosComponent"],
                _comments_replies_comment_reply_component__WEBPACK_IMPORTED_MODULE_27__["CommentReplyComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_17__["MaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                ngx_image_gallery__WEBPACK_IMPORTED_MODULE_6__["NgxImageGalleryModule"],
                ngx_linkifyjs__WEBPACK_IMPORTED_MODULE_7__["NgxLinkifyjsModule"].forRoot()
            ],
            providers: [_services_event_service__WEBPACK_IMPORTED_MODULE_26__["EventService"], _services_comment_service__WEBPACK_IMPORTED_MODULE_22__["CommentService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
            entryComponents: [_comments_dialog_comment_dialog_component__WEBPACK_IMPORTED_MODULE_21__["CommentDialogComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/comments/dialog/comment-dialog.component.html":
/*!***************************************************************!*\
  !*** ./src/app/comments/dialog/comment-dialog.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"comment-dialog-wrapper\">\r\n  <div *ngIf=\"empty\">\r\n    <mat-dialog-content>\r\n      <p>There are no comments for this event</p>\r\n    </mat-dialog-content>\r\n    <mat-dialog-actions align=\"end\"\r\n      ><button mat-button mat-dialog-close>\r\n        Close\r\n      </button></mat-dialog-actions\r\n    >\r\n  </div>\r\n  <div *ngIf=\"!empty\">\r\n    <mat-dialog-content>\r\n      <div *ngFor=\"let comment of comments\">\r\n        <comment-thumbnail [comment]=\"comment\"></comment-thumbnail>\r\n      </div>\r\n    </mat-dialog-content>\r\n    <mat-dialog-actions align=\"end\"\r\n      ><button mat-button mat-dialog-close>\r\n        Close\r\n      </button></mat-dialog-actions\r\n    >\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/comments/dialog/comment-dialog.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/comments/dialog/comment-dialog.component.ts ***!
  \*************************************************************/
/*! exports provided: CommentDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentDialogComponent", function() { return CommentDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var CommentDialogComponent = /** @class */ (function () {
    function CommentDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.loading = true;
        this.empty = false;
        data.length < 1 ? (this.empty = true) : (this.comments = data);
    }
    CommentDialogComponent.prototype.ngOnInit = function () { };
    CommentDialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    CommentDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "comment-dialog",
            template: __webpack_require__(/*! ./comment-dialog.component.html */ "./src/app/comments/dialog/comment-dialog.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], CommentDialogComponent);
    return CommentDialogComponent;
}());



/***/ }),

/***/ "./src/app/comments/replies/comment-reply.component.html":
/*!***************************************************************!*\
  !*** ./src/app/comments/replies/comment-reply.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"comment-card\">\r\n  <mat-card-header>\r\n    <img mat-card-avatar src=\"{{ reply?.member.photo.thumb_link }}\" />\r\n    <mat-card-title>{{ reply?.member.name }}</mat-card-title>\r\n    <mat-card-subtitle>{{\r\n      reply?.member.role ? this.roleUppercase(reply?.member.role) : \"Member\"\r\n    }}</mat-card-subtitle>\r\n  </mat-card-header>\r\n  <mat-divider></mat-divider>\r\n  <mat-card-content class=\"comment-card-content\">\r\n    <p [innerHTML]=\"reply?.comment | linkify\"></p>\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/comments/replies/comment-reply.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/comments/replies/comment-reply.component.ts ***!
  \*************************************************************/
/*! exports provided: CommentReplyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentReplyComponent", function() { return CommentReplyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CommentReplyComponent = /** @class */ (function () {
    function CommentReplyComponent() {
    }
    CommentReplyComponent.prototype.ngOnInit = function () { };
    CommentReplyComponent.prototype.roleUppercase = function (role) {
        var firstLetter = role.charAt(0).toUpperCase();
        var roleString = role.slice(1);
        return firstLetter + roleString;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CommentReplyComponent.prototype, "reply", void 0);
    CommentReplyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "comment-reply",
            template: __webpack_require__(/*! ./comment-reply.component.html */ "./src/app/comments/replies/comment-reply.component.html"),
            styles: [__webpack_require__(/*! ../../comments/thumbnail/comment-thumbnail.component.scss */ "./src/app/comments/thumbnail/comment-thumbnail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CommentReplyComponent);
    return CommentReplyComponent;
}());



/***/ }),

/***/ "./src/app/comments/thumbnail/comment-thumbnail.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/comments/thumbnail/comment-thumbnail.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"comment-card\">\r\n  <mat-card-header>\r\n    <img mat-card-avatar src=\"{{ comment?.photo.thumb_link }}\" />\r\n    <mat-card-title>{{ comment?.member }}</mat-card-title>\r\n    <mat-card-subtitle>\r\n      {{\r\n        comment?.role ? this.roleUppercase(comment?.role) : \"Member\"\r\n      }}</mat-card-subtitle\r\n    >\r\n  </mat-card-header>\r\n  <mat-divider></mat-divider>\r\n  <mat-card-content class=\"comment-card-content\">\r\n    <p [innerHTML]=\"comment?.comment | linkify\"></p>\r\n  </mat-card-content>\r\n  <mat-card-actions *ngIf=\"comment?.replies\">\r\n    <button mat-button color=\"primary\" (click)=\"showReplies()\">\r\n      {{ btnName }}\r\n    </button>\r\n  </mat-card-actions>\r\n  <div *ngIf=\"replies\">\r\n    <div *ngFor=\"let reply of comment.replies\">\r\n      <comment-reply [reply]=\"reply\"></comment-reply>\r\n    </div>\r\n  </div>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/comments/thumbnail/comment-thumbnail.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/comments/thumbnail/comment-thumbnail.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".comment-card {\n  margin-bottom: 5px; }\n\n.comment-card p {\n  padding-top: 10px;\n  word-break: break-all;\n  word-break: break-word; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbWVudHMvdGh1bWJuYWlsL0M6XFxVc2Vyc1xcQ2hhcmxpZS5Db2xsaWVyXFxCZW5jaFxcQW5ndWxhciBQcmFjdGljZVxcd2Vic2l0ZS1zb3VyY2VcXG5nLXByb2plY3Qvc3JjXFxhcHBcXGNvbW1lbnRzXFx0aHVtYm5haWxcXGNvbW1lbnQtdGh1bWJuYWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsaUJBQWlCO0VBRWpCLHFCQUFxQjtFQUVyQixzQkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbW1lbnRzL3RodW1ibmFpbC9jb21tZW50LXRodW1ibmFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21tZW50LWNhcmQge1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLmNvbW1lbnQtY2FyZCBwIHtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAvLyBmb3IgaW5jb21wYXRpYmxlIGJyb3dzZXJzXHJcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gIC8vIGZvciBjb21wYXRpYmxlIGJyb3dzZXJzXHJcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/comments/thumbnail/comment-thumbnail.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/comments/thumbnail/comment-thumbnail.component.ts ***!
  \*******************************************************************/
/*! exports provided: CommentThumbnailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentThumbnailComponent", function() { return CommentThumbnailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CommentThumbnailComponent = /** @class */ (function () {
    function CommentThumbnailComponent() {
        this.replies = false;
        this.btnName = "Show replies";
    }
    CommentThumbnailComponent.prototype.ngOnInit = function () { };
    CommentThumbnailComponent.prototype.roleUppercase = function (role) {
        var firstLetter = role.charAt(0).toUpperCase();
        var roleString = role.slice(1);
        return firstLetter + roleString;
    };
    CommentThumbnailComponent.prototype.showReplies = function () {
        this.replies = !this.replies;
        this.btnName === "Show replies"
            ? (this.btnName = "Hide replies")
            : (this.btnName = "Show replies");
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CommentThumbnailComponent.prototype, "comment", void 0);
    CommentThumbnailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "comment-thumbnail",
            template: __webpack_require__(/*! ./comment-thumbnail.component.html */ "./src/app/comments/thumbnail/comment-thumbnail.component.html"),
            styles: [__webpack_require__(/*! ./comment-thumbnail.component.scss */ "./src/app/comments/thumbnail/comment-thumbnail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CommentThumbnailComponent);
    return CommentThumbnailComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contact-wrapper\">\r\n  <mat-card class=\"contact-card\">\r\n    <mat-card-header>\r\n      <mat-card-title><strong>Slack</strong></mat-card-title>\r\n    </mat-card-header>\r\n    <mat-divider></mat-divider>\r\n    <mat-card-content>\r\n      <p>\r\n        The best way to reach us is via Slack. New members can sign up\r\n        <a\r\n          href=\"https://gdgcloudoc.slack.com/join/shared_invite/enQtNDQ0NzkzOTM2OTY3LTc5MTc4YmY4YzFmZjhlMTZmODRlYzRkYmNmZDdkNDI2MzhiMWVkMTk0MmIzYjFhZmZkZWJjNTM5ZGYzMWI1ZTg\">here</a>\r\n      </p>\r\n    </mat-card-content>\r\n  </mat-card>\r\n  <mat-card class=\"contact-card\">\r\n    <mat-card-header>\r\n      <mat-card-title><strong>Contact us</strong></mat-card-title>\r\n    </mat-card-header>\r\n    <mat-divider></mat-divider>\r\n    <mat-card-content>\r\n      <form accept-charset=\"UTF-8\" [action]=\"env.contactFormLink\" method=\"POST\" id=\"contact-form\">\r\n        <fieldset>\r\n          <label for=\"name\">Name (required)</label>\r\n          <input type=\"text\" id=\"name\" name=\"name\" required>\r\n        </fieldset>\r\n        <fieldset>\r\n          <label for=\"email\">Email (required)</label>\r\n          <input type=\"email\" id=\"email\" name=\"email\" required>\r\n        </fieldset>\r\n        <fieldset>\r\n          <label for=\"message\">Message (required)</label>\r\n          <textarea name=\"message\" id=\"message\" rows=\"10\" required></textarea>\r\n        </fieldset>\r\n        <fieldset [ngClass]=\"{'hideFieldset': env.production}\">\r\n          <label *ngIf=\"!env.production\" for=\"honeypot\">Honeypot (visible in dev)</label>\r\n          <input [type]=\"env.production ? 'hidden' : 'text'\" name=\"_gotcha\">\r\n        </fieldset>\r\n        <fieldset>\r\n          <button mat-raised-button color=\"primary\" type=\"submit\">Send</button>\r\n        </fieldset>\r\n      </form>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact-wrapper {\n  width: 90%;\n  max-width: 800px;\n  margin: 0 auto;\n  margin-top: 80px; }\n\n.contact-card {\n  margin-top: 20px; }\n\n.contact-card p {\n    padding-top: 10px; }\n\n#contact-form fieldset {\n  border: 0;\n  padding: 0;\n  margin: 0; }\n\n#contact-form fieldset:not(.hideFieldset) {\n    margin: 16px 0 0; }\n\n#contact-form fieldset > * {\n    font-size: 14px;\n    border: 0;\n    display: block;\n    padding: 0;\n    width: 100%;\n    box-sizing: border-box; }\n\n#contact-form fieldset > *:focus {\n      outline: none; }\n\n#contact-form fieldset label {\n    font-size: 16px; }\n\n#contact-form fieldset input {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n    padding: 10px 0 5px; }\n\n#contact-form fieldset input:focus {\n      border-bottom-color: rgba(0, 0, 0, 0.5); }\n\n#contact-form fieldset textarea {\n    padding: 5px;\n    margin-top: 16px;\n    border: 1px solid rgba(0, 0, 0, 0.12);\n    resize: vertical; }\n\n#contact-form fieldset textarea:focus {\n      border-color: rgba(0, 0, 0, 0.5); }\n\n#contact-form fieldset button {\n    width: 150px; }\n\n@media screen and (max-width: 480px) {\n  #contact-form fieldset button {\n    width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9DOlxcVXNlcnNcXENoYXJsaWUuQ29sbGllclxcQmVuY2hcXEFuZ3VsYXIgUHJhY3RpY2VcXHdlYnNpdGUtc291cmNlXFxuZy1wcm9qZWN0L3NyY1xcYXBwXFxjb250YWN0XFxjb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBRGxCO0lBSUksaUJBQWlCLEVBQUE7O0FBSXJCO0VBRUksU0FBUztFQUNULFVBQVU7RUFDVixTQUFTLEVBQUE7O0FBSmI7SUFPTSxnQkFBZ0IsRUFBQTs7QUFQdEI7SUFXTSxlQUFlO0lBQ2YsU0FBUztJQUNULGNBQWM7SUFDZCxVQUFVO0lBQ1YsV0FBVztJQUNYLHNCQUFzQixFQUFBOztBQWhCNUI7TUFtQlEsYUFBYSxFQUFBOztBQW5CckI7SUF3Qk0sZUFBZSxFQUFBOztBQXhCckI7SUE0Qk0sNENBQTRDO0lBQzVDLG1CQUFtQixFQUFBOztBQTdCekI7TUFnQ1EsdUNBQXVDLEVBQUE7O0FBaEMvQztJQXFDTSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHFDQUFxQztJQUNyQyxnQkFBZ0IsRUFBQTs7QUF4Q3RCO01BMkNRLGdDQUFnQyxFQUFBOztBQTNDeEM7SUFnRE0sWUFBWSxFQUFBOztBQUtsQjtFQUNFO0lBR00sV0FBVyxFQUFBLEVBQ1oiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFjdC13cmFwcGVyIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1heC13aWR0aDogODAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWFyZ2luLXRvcDogODBweDtcclxufVxyXG5cclxuLmNvbnRhY3QtY2FyZCB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuXHJcbiAgcCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICB9XHJcbn1cclxuXHJcbiNjb250YWN0LWZvcm0ge1xyXG4gIGZpZWxkc2V0IHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcblxyXG4gICAgJjpub3QoLmhpZGVGaWVsZHNldCkge1xyXG4gICAgICBtYXJnaW46IDE2cHggMCAwO1xyXG4gICAgfVxyXG5cclxuICAgID4gKiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gICAgICAmOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGFiZWwge1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXQge1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICAgICAgcGFkZGluZzogMTBweCAwIDVweDtcclxuXHJcbiAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRleHRhcmVhIHtcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gICAgICByZXNpemU6IHZlcnRpY2FsO1xyXG5cclxuICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICNjb250YWN0LWZvcm0ge1xyXG4gICAgZmllbGRzZXQge1xyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");



var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
        this.env = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"];
    }
    ContactComponent.prototype.ngOnInit = function () { };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/events/event.component.html":
/*!*********************************************!*\
  !*** ./src/app/events/event.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"events-content-wrapper\">\r\n  <mat-spinner class=\"loading-spinner\" *ngIf=\"loading\"></mat-spinner>\r\n  <div class=\"events-content-display\">\r\n    <div\r\n      *ngIf=\"!loading && !errorMessages?.upcomingEvents?.length\"\r\n      fxShow.xs=\"false\"\r\n    >\r\n      <event-jumbotron\r\n        [event]=\"nextEvent\"\r\n        (eventComments)=\"openCommentDialog($event)\"\r\n      ></event-jumbotron>\r\n    </div>\r\n    <div class=\"event-grid-wrapper\">\r\n      <mat-tab-group\r\n        *ngIf=\"!loading\"\r\n        mat-stretch-tabs\r\n        animationDuration=\"750ms\"\r\n        class=\"event-tab-group\"\r\n        dynamicHeight\r\n      >\r\n        <mat-tab label=\"Upcoming\">\r\n          <h3 *ngIf=\"!loading && errorMessages?.upcomingEvents?.length\">\r\n            {{ errorMessages?.upcomingEvents }}\r\n          </h3>\r\n          <div\r\n            class=\"events-grid\"\r\n            *ngIf=\"!loading && !errorMessages?.upcomingEvents?.length\"\r\n          >\r\n            <div fxShow.xs=\"true\" fxShow.gt-xs=\"false\">\r\n              <event-thumbnail\r\n                [item]=\"nextEvent\"\r\n                (eventComments)=\"openCommentDialog($event)\"\r\n              ></event-thumbnail>\r\n            </div>\r\n            <div *ngFor=\"let item of upcomingEvents\">\r\n              <event-thumbnail\r\n                [item]=\"item\"\r\n                (eventComments)=\"openCommentDialog($event)\"\r\n              ></event-thumbnail>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n        <mat-tab label=\"Past\">\r\n          <h3 *ngIf=\"!loading && errorMessages?.pastEvents?.length\">\r\n            {{ errorMessages?.pastEvents }}\r\n          </h3>\r\n          <div\r\n            class=\"events-grid\"\r\n            *ngIf=\"!loading && !errorMessages?.pastEvents?.length\"\r\n          >\r\n            <div *ngFor=\"let item of pastEvents\">\r\n              <event-thumbnail\r\n                [item]=\"item\"\r\n                [pastEvent]=\"true\"\r\n                (eventComments)=\"openCommentDialog($event)\"\r\n              ></event-thumbnail>\r\n            </div></div></mat-tab\r\n      ></mat-tab-group>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/events/events.component.scss":
/*!**********************************************!*\
  !*** ./src/app/events/events.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".events-content-wrapper {\n  justify-content: center;\n  display: flex;\n  margin-top: 60px; }\n\n.event-grid-wrapper {\n  width: 80%;\n  margin: auto; }\n\n.events-grid {\n  display: grid;\n  grid-template: auto/calc(100% * 1 / 3 - 8px) calc(100% * 1 / 3 - 8px) calc(\r 100% * 1 / 3 - 8px);\n  gap: 13px;\n  margin: 20px 0 10px;\n  padding: 0 5px; }\n\n.loading-spinner {\n  margin-top: 200px; }\n\n@media screen and (max-width: 1024px) {\n  .events-grid {\n    grid-template: auto / 50% 50%; } }\n\n@media screen and (max-width: 650px) {\n  .events-grid {\n    grid-template: auto / 100%; } }\n\n.next-event-thumbnail {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXZlbnRzL0M6XFxVc2Vyc1xcQ2hhcmxpZS5Db2xsaWVyXFxCZW5jaFxcQW5ndWxhciBQcmFjdGljZVxcd2Vic2l0ZS1zb3VyY2VcXG5nLXByb2plY3Qvc3JjXFxhcHBcXGV2ZW50c1xcZXZlbnRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ldmVudHMvZXZlbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxVQUFVO0VBQ1YsWUFBWSxFQUFBOztBQUdkO0VBQ0UsYUFBYTtFQUNiLGdHQUdTO0VBQ1QsU0FBUTtFQUNSLG1CQUNEO0VDSkMsY0FBYyxFQUFFOztBQUVsQjtFQUNFLGlCQUFpQixFQUFFOztBQUVyQjtFQUNFO0lBQ0UsNkJBQTZCLEVBQUUsRUFBRTs7QUFFckM7RUFDRTtJQUNFLDBCQUEwQixFQUFFLEVBQUU7O0FBRWxDO0VBQ0UsYUFBYSxFQUFFIiwiZmlsZSI6InNyYy9hcHAvZXZlbnRzL2V2ZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ldmVudHMtY29udGVudC13cmFwcGVyIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi10b3A6IDYwcHg7XHJcbn1cclxuXHJcbi5ldmVudC1ncmlkLXdyYXBwZXIge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uZXZlbnRzLWdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZTogYXV0byAvIGNhbGMoMTAwJSAqIDEgLyAzIC0gOHB4KSBjYWxjKDEwMCUgKiAxIC8gMyAtIDhweCkgY2FsYyhcclxuICAgICAgMTAwJSAqIDEgLyAzIC0gOHB4XHJcbiAgICApO1xyXG4gIGdhcDogMTNweDtcclxuICBtYXJnaW46IDIwcHggMCAxMHB4O1xyXG4gIHBhZGRpbmc6IDAgNXB4O1xyXG59XHJcblxyXG4ubG9hZGluZy1zcGlubmVyIHtcclxuICBtYXJnaW4tdG9wOiAyMDBweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgLmV2ZW50cy1ncmlkIHtcclxuICAgIGdyaWQtdGVtcGxhdGU6IGF1dG8gLyA1MCUgNTAlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAuZXZlbnRzLWdyaWQge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZTogYXV0byAvIDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4ubmV4dC1ldmVudC10aHVtYm5haWwge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuIiwiLmV2ZW50cy1jb250ZW50LXdyYXBwZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogNjBweDsgfVxuXG4uZXZlbnQtZ3JpZC13cmFwcGVyIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiBhdXRvOyB9XG5cbi5ldmVudHMtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGU6IGF1dG8vY2FsYygxMDAlICogMSAvIDMgLSA4cHgpIGNhbGMoMTAwJSAqIDEgLyAzIC0gOHB4KSBjYWxjKFxyIDEwMCUgKiAxIC8gMyAtIDhweCk7XG4gIGdhcDogMTNweDtcbiAgbWFyZ2luOiAyMHB4IDAgMTBweDtcbiAgcGFkZGluZzogMCA1cHg7IH1cblxuLmxvYWRpbmctc3Bpbm5lciB7XG4gIG1hcmdpbi10b3A6IDIwMHB4OyB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuZXZlbnRzLWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGU6IGF1dG8gLyA1MCUgNTAlOyB9IH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcbiAgLmV2ZW50cy1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlOiBhdXRvIC8gMTAwJTsgfSB9XG5cbi5uZXh0LWV2ZW50LXRodW1ibmFpbCB7XG4gIGRpc3BsYXk6IG5vbmU7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/events/events.component.ts":
/*!********************************************!*\
  !*** ./src/app/events/events.component.ts ***!
  \********************************************/
/*! exports provided: EventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventComponent", function() { return EventComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _comments_dialog_comment_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../comments/dialog/comment-dialog.component */ "./src/app/comments/dialog/comment-dialog.component.ts");
/* harmony import */ var _services_comment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/comment.service */ "./src/app/services/comment.service.ts");







var EventComponent = /** @class */ (function () {
    function EventComponent(eventService, dialog, commentService) {
        this.eventService = eventService;
        this.dialog = dialog;
        this.commentService = commentService;
        this.nextEvent = {};
        this.upcomingEvents = [];
        this.pastEvents = [];
        this.loading = true;
        this.errorMessages = {
            upcomingEvents: "",
            pastEvents: ""
        };
        this.eventComments = [];
        this.errorMessage = "Comments can not be loaded at this time";
    }
    EventComponent.prototype.ngOnInit = function () {
        this.getAllEvents();
    };
    EventComponent.prototype.getAllEvents = function () {
        var _this = this;
        this.eventService.getEvents(_services_event_service__WEBPACK_IMPORTED_MODULE_2__["Status"].upcoming).subscribe(function (events) {
            _this.nextEvent = events ? events[0] : {};
            if (events) {
                events.forEach(function (event, index) {
                    if (index !== 0) {
                        _this.upcomingEvents.push(event);
                    }
                });
            }
        }, function (error) {
            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
                console.log("error retrieving upcoming events:", error);
            }
        });
        this.eventService.getEvents(_services_event_service__WEBPACK_IMPORTED_MODULE_2__["Status"].past, 12).subscribe(function (pastEvents) {
            _this.pastEvents = pastEvents;
        }, function (error) {
            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
                console.log("error retrieving past events:", error);
            }
            _this.loading = false;
            _this.errorMessages.pastEvents =
                "We were unable to retrieve past events at this time. Please try again later.";
        }, function () {
            _this.loading = false;
        });
    };
    EventComponent.prototype.openCommentDialog = function (id) {
        var _this = this;
        this.eventComments = [];
        this.commentService.getEventComments(id).subscribe(function (comments) {
            _this.eventComments.length > 0
                ? ""
                : comments.forEach(function (comment) {
                    var commentData = {
                        comment: comment.comment,
                        replies: comment.replies,
                        member: comment.member.name,
                        photo: comment.member.photo,
                        role: comment.member.role
                    };
                    _this.eventComments.push(commentData);
                }, function (error) { return (_this.errorMessage = error); });
            var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
            dialogConfig.autoFocus = true;
            dialogConfig.data = _this.eventComments.reverse();
            _this.dialog.open(_comments_dialog_comment_dialog_component__WEBPACK_IMPORTED_MODULE_5__["CommentDialogComponent"], dialogConfig);
        });
    };
    EventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./event.component.html */ "./src/app/events/event.component.html"),
            styles: [__webpack_require__(/*! ./events.component.scss */ "./src/app/events/events.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _services_comment_service__WEBPACK_IMPORTED_MODULE_6__["CommentService"]])
    ], EventComponent);
    return EventComponent;
}());



/***/ }),

/***/ "./src/app/events/jumbotron/event-jumbotron.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/events/jumbotron/event-jumbotron.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-jumbotron\r\n  class=\"jumbotron-card\"\r\n  imgURL=\"../../assets/gdg_cloud_oc_small_logo.png\"\r\n>\r\n  <mat-jumbotron-content>\r\n    <h1>{{ event?.name }}</h1>\r\n\r\n    <h3>\r\n      {{ event?.local_date ? this.convertDate(event?.local_date) : \"\" }} |\r\n      {{ event?.local_time ? this.convertTime(event?.local_time) : \"\" }}\r\n    </h3>\r\n\r\n    <p [innerHtml]=\"event?.description\"></p>\r\n\r\n    <mat-card-actions class=\"jumbotron-footer\">\r\n      <span\r\n        >{{ event?.yes_rsvp_count }} of {{ event?.rsvp_limit }} attending\r\n      </span>\r\n      <a\r\n        *ngIf=\"event?.comment_count > 0\"\r\n        mat-button\r\n        color=\"accent\"\r\n        (click)=\"getEventComments()\"\r\n        ><span>{{ event?.comment_count }}</span\r\n        ><mat-icon>comment</mat-icon></a\r\n      >\r\n      <a mat-button href=\"{{ event?.link }}\" color=\"primary\" target=\"_blank\"\r\n        >RSVP</a\r\n      >\r\n    </mat-card-actions>\r\n  </mat-jumbotron-content>\r\n</mat-jumbotron>\r\n"

/***/ }),

/***/ "./src/app/events/jumbotron/event-jumbotron.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/events/jumbotron/event-jumbotron.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron-card {\n  margin: 20px auto 10px;\n  font-size: medium; }\n\n.jumbotron-card p {\n  padding-top: 10px;\n  text-align: left; }\n\n.jumbotron-footer span {\n  padding: 10px; }\n\n.jumbotron-footer {\n  text-align: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXZlbnRzL2p1bWJvdHJvbi9DOlxcVXNlcnNcXENoYXJsaWUuQ29sbGllclxcQmVuY2hcXEFuZ3VsYXIgUHJhY3RpY2VcXHdlYnNpdGUtc291cmNlXFxuZy1wcm9qZWN0L3NyY1xcYXBwXFxldmVudHNcXGp1bWJvdHJvblxcZXZlbnQtanVtYm90cm9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxhQUFhLEVBQUE7O0FBRWY7RUFDRSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2V2ZW50cy9qdW1ib3Ryb24vZXZlbnQtanVtYm90cm9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmp1bWJvdHJvbi1jYXJkIHtcclxuICBtYXJnaW46IDIwcHggYXV0byAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG59XHJcbi5qdW1ib3Ryb24tY2FyZCBwIHtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5qdW1ib3Ryb24tZm9vdGVyIHNwYW4ge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLmp1bWJvdHJvbi1mb290ZXIge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/events/jumbotron/event-jumbotron.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/events/jumbotron/event-jumbotron.component.ts ***!
  \***************************************************************/
/*! exports provided: EventJumbotronComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventJumbotronComponent", function() { return EventJumbotronComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EventJumbotronComponent = /** @class */ (function () {
    function EventJumbotronComponent() {
        this.eventComments = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    EventJumbotronComponent.prototype.ngOnInit = function () { };
    EventJumbotronComponent.prototype.convertDate = function (d) {
        var a = d.slice(5);
        var b = d.slice(0, 4);
        return a + "-" + b;
    };
    EventJumbotronComponent.prototype.convertTime = function (t) {
        var h = t.slice(0, 2);
        var s = t.slice(3);
        if (h >= 12) {
            return h - 12 + ":" + s + " PM";
        }
    };
    EventJumbotronComponent.prototype.getEventComments = function () {
        this.eventComments.emit(this.event.id);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EventJumbotronComponent.prototype, "event", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EventJumbotronComponent.prototype, "eventComments", void 0);
    EventJumbotronComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "event-jumbotron",
            template: __webpack_require__(/*! ./event-jumbotron.component.html */ "./src/app/events/jumbotron/event-jumbotron.component.html"),
            styles: [__webpack_require__(/*! ./event-jumbotron.component.scss */ "./src/app/events/jumbotron/event-jumbotron.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EventJumbotronComponent);
    return EventJumbotronComponent;
}());



/***/ }),

/***/ "./src/app/events/thumbnail/event-thumbnail.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/events/thumbnail/event-thumbnail.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"event-card\">\r\n  <mat-card-header>\r\n    <img\r\n      mat-card-avatar\r\n      src=\"../../assets/gdg_cloud_oc_small_circle_logo.png\"\r\n    />\r\n    <mat-card-title\r\n      ><strong>{{ item?.name }}</strong></mat-card-title\r\n    >\r\n    <mat-card-subtitle\r\n      >{{ this.convertDate(item?.local_date) }} |\r\n      {{ this.convertTime(item?.local_time) }}</mat-card-subtitle\r\n    >\r\n  </mat-card-header>\r\n  <mat-divider></mat-divider>\r\n  <mat-card-content>\r\n    <p [innerHtml]=\"item?.description\"></p>\r\n  </mat-card-content>\r\n  <mat-divider></mat-divider>\r\n\r\n  <mat-card-actions class=\"event-footer\" align=\"end\">\r\n    <a\r\n      *ngIf=\"!pastEvent && item?.comment_count > 0\"\r\n      mat-button\r\n      color=\"accent\"\r\n      (click)=\"getEventComments()\"\r\n      ><span>{{ item?.comment_count }}</span\r\n      ><mat-icon>comment</mat-icon></a\r\n    >\r\n    <div fxFlex></div>\r\n    <a\r\n      *ngIf=\"!pastEvent\"\r\n      mat-button\r\n      href=\"{{ item?.link }}\"\r\n      color=\"primary\"\r\n      target=\"_blank\"\r\n      >RSVP</a\r\n    >\r\n    <a\r\n      *ngIf=\"pastEvent\"\r\n      mat-button\r\n      color=\"accent\"\r\n      (click)=\"getEventComments(item?.id)\"\r\n      ><span>{{ item?.comment_count }}</span\r\n      ><mat-icon>comment</mat-icon></a\r\n    >\r\n  </mat-card-actions>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/events/thumbnail/event-thumbnail.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/events/thumbnail/event-thumbnail.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".event-card {\n  overflow-x: visible; }\n\n.event-card p {\n  padding-top: 10px;\n  text-align: left;\n  word-break: break-all;\n  word-break: break-word; }\n\n.event-footer span {\n  padding: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXZlbnRzL3RodW1ibmFpbC9DOlxcVXNlcnNcXENoYXJsaWUuQ29sbGllclxcQmVuY2hcXEFuZ3VsYXIgUHJhY3RpY2VcXHdlYnNpdGUtc291cmNlXFxuZy1wcm9qZWN0L3NyY1xcYXBwXFxldmVudHNcXHRodW1ibmFpbFxcZXZlbnQtdGh1bWJuYWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUVoQixxQkFBcUI7RUFFckIsc0JBQXNCLEVBQUE7O0FBRXhCO0VBQ0UsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZXZlbnRzL3RodW1ibmFpbC9ldmVudC10aHVtYm5haWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXZlbnQtY2FyZCB7XHJcbiAgb3ZlcmZsb3cteDogdmlzaWJsZTtcclxufVxyXG4uZXZlbnQtY2FyZCBwIHtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIC8vIGZvciBpbmNvbXBhdGlibGUgYnJvd3NlcnNcclxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgLy8gZm9yIGNvbXBhdGlibGUgYnJvd3NlcnNcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG59XHJcbi5ldmVudC1mb290ZXIgc3BhbiB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/events/thumbnail/event-thumbnail.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/events/thumbnail/event-thumbnail.component.ts ***!
  \***************************************************************/
/*! exports provided: EventThumbnailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventThumbnailComponent", function() { return EventThumbnailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EventThumbnailComponent = /** @class */ (function () {
    function EventThumbnailComponent() {
        this.pastEvent = false;
        this.eventComments = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    EventThumbnailComponent.prototype.ngOnInit = function () { };
    EventThumbnailComponent.prototype.convertDate = function (d) {
        var a = d.slice(5);
        var b = d.slice(0, 4);
        return a + "-" + b;
    };
    EventThumbnailComponent.prototype.convertTime = function (t) {
        var h = t.slice(0, 2);
        var s = t.slice(3);
        if (h >= 12) {
            return h - 12 + ":" + s + " PM";
        }
    };
    EventThumbnailComponent.prototype.getEventComments = function () {
        this.eventComments.emit(this.item.id);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EventThumbnailComponent.prototype, "item", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EventThumbnailComponent.prototype, "pastEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EventThumbnailComponent.prototype, "eventComments", void 0);
    EventThumbnailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "event-thumbnail",
            template: __webpack_require__(/*! ./event-thumbnail.component.html */ "./src/app/events/thumbnail/event-thumbnail.component.html"),
            styles: [__webpack_require__(/*! ./event-thumbnail.component.scss */ "./src/app/events/thumbnail/event-thumbnail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EventThumbnailComponent);
    return EventThumbnailComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section fxLayout=\"column\" fxFlexAlign=\"stretch\">\r\n  <img\r\n    src=\"../../assets/gdg_cloud_oc_horizontal_light.png\"\r\n    width=\"50%\"\r\n    class=\"cloud-header\"\r\n    fxFlexAlign=\"center\"\r\n  />\r\n  <div>\r\n    <nav mat-tab-nav-bar mat-align-tabs=\"center\">\r\n      <a\r\n        mat-tab-link\r\n        *ngFor=\"let navLink of navLinks\"\r\n        [routerLink]=\"navLink.path\"\r\n        (click)=\"activeLink = navLink\"\r\n        [active]=\"activeLink === navLink\"\r\n        >{{ navLink.label }}</a\r\n      >\r\n    </nav>\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-tab-group {\n  text-align: center; }\n\nmat-tab-group p {\n  padding-top: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXENoYXJsaWUuQ29sbGllclxcQmVuY2hcXEFuZ3VsYXIgUHJhY3RpY2VcXHdlYnNpdGUtc291cmNlXFxuZy1wcm9qZWN0L3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtdGFiLWdyb3VwIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbm1hdC10YWItZ3JvdXAgcCB7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.navLinks = [
            {
                label: 'About',
                path: 'about'
            },
            {
                label: 'Events',
                path: 'events'
            },
            {
                label: 'Photos',
                path: 'photos'
            },
            {
                label: 'Contact',
                path: 'contact'
            }
        ];
        this.activeLink = this.navLinks[0];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var activeIndex = this.navLinks.findIndex(function (link) { return "/" + link.path === window.location.pathname; });
        if (activeIndex === -1) {
            activeIndex = 0;
        }
        this.activeLink = this.navLinks[activeIndex];
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.component.html":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxlayout=\"row wrap\" fxLayoutAlign=\"center center\" class=\"layout-wrapper\">\r\n  <div fxFlex=\"100%\" fxFlex.lt-md=\"100%\" class=\"flex-wrapper\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/layout.component.scss":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".layout-wrapper {\n  height: 100%; }\n\n.flex-wrapper {\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L0M6XFxVc2Vyc1xcQ2hhcmxpZS5Db2xsaWVyXFxCZW5jaFxcQW5ndWxhciBQcmFjdGljZVxcd2Vic2l0ZS1zb3VyY2VcXG5nLXByb2plY3Qvc3JjXFxhcHBcXGxheW91dFxcbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYXlvdXQtd3JhcHBlciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uZmxleC13cmFwcGVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/layout/layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_extensions_jumbotron__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular-material-extensions/jumbotron */ "./node_modules/@angular-material-extensions/jumbotron/esm5/jumbotron.es5.js");





var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material_extensions_jumbotron__WEBPACK_IMPORTED_MODULE_4__["MatJumbotronModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material_extensions_jumbotron__WEBPACK_IMPORTED_MODULE_4__["MatJumbotronModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/media/media.component.html":
/*!********************************************!*\
  !*** ./src/app/media/media.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"media-content-wrapper\">\r\n  <mat-tab-group\r\n    mat-stretch-tabs\r\n    animationDuration=\"750ms\"\r\n    dynamicHeight\r\n  >\r\n    <mat-tab label=\"Videos\">\r\n      <app-videos></app-videos>\r\n    </mat-tab>\r\n    <mat-tab label=\"Photos\">\r\n      <app-photos></app-photos>\r\n    </mat-tab>\r\n  </mat-tab-group>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/media/media.component.scss":
/*!********************************************!*\
  !*** ./src/app/media/media.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".media-content-wrapper {\n  margin: 60px auto 0;\n  width: 80%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVkaWEvQzpcXFVzZXJzXFxDaGFybGllLkNvbGxpZXJcXEJlbmNoXFxBbmd1bGFyIFByYWN0aWNlXFx3ZWJzaXRlLXNvdXJjZVxcbmctcHJvamVjdC9zcmNcXGFwcFxcbWVkaWFcXG1lZGlhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21lZGlhL21lZGlhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lZGlhLWNvbnRlbnQtd3JhcHBlciB7XHJcbiAgbWFyZ2luOiA2MHB4IGF1dG8gMDtcclxuICB3aWR0aDogODAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/media/media.component.ts":
/*!******************************************!*\
  !*** ./src/app/media/media.component.ts ***!
  \******************************************/
/*! exports provided: MediaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaComponent", function() { return MediaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MediaComponent = /** @class */ (function () {
    function MediaComponent() {
    }
    MediaComponent.prototype.ngOnInit = function () {
    };
    MediaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-media',
            template: __webpack_require__(/*! ./media.component.html */ "./src/app/media/media.component.html"),
            styles: [__webpack_require__(/*! ./media.component.scss */ "./src/app/media/media.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MediaComponent);
    return MediaComponent;
}());



/***/ }),

/***/ "./src/app/media/photos/photos.component.html":
/*!****************************************************!*\
  !*** ./src/app/media/photos/photos.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"photos-content-wrapper\">\r\n  <mat-spinner class=\"loading-spinner\" *ngIf=\"loading\"></mat-spinner>\r\n  <div class=\"photo-grid-wrapper\" *ngIf=\"!loading\">\r\n    <h3 *ngIf=\"errorMessage?.length\">{{ errorMessage }}</h3>\r\n\r\n    <div class=\"photo-grid\">\r\n      <mat-card *ngFor=\"let photo of photos\" (click)=\"setPhotoIdx($event, photo)\">\r\n        <mat-card-content>\r\n          <img [src]=\"photo?.url\">\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/media/photos/photos.component.scss":
/*!****************************************************!*\
  !*** ./src/app/media/photos/photos.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".photos-content-wrapper {\n  display: flex;\n  justify-content: center; }\n\n.loading-spinner {\n  margin-top: 200px; }\n\n.photo-grid-wrapper {\n  margin-top: 20px; }\n\n.photo-grid-wrapper .error-message {\n    text-align: center; }\n\n.photo-grid {\n  display: grid;\n  grid-template: auto / auto auto auto;\n  gap: 20px;\n  width: 90%;\n  margin: 0 auto 20px; }\n\n.photo-grid mat-card {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer; }\n\n.photo-grid mat-card img {\n      width: 100%; }\n\n@media screen and (max-width: 1024px) {\n  .photo-grid {\n    grid-template: auto / auto auto; } }\n\n@media screen and (max-width: 650px) {\n  .photo-grid {\n    grid-template: auto / auto; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVkaWEvcGhvdG9zL0M6XFxVc2Vyc1xcQ2hhcmxpZS5Db2xsaWVyXFxCZW5jaFxcQW5ndWxhciBQcmFjdGljZVxcd2Vic2l0ZS1zb3VyY2VcXG5nLXByb2plY3Qvc3JjXFxhcHBcXG1lZGlhXFxwaG90b3NcXHBob3Rvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYix1QkFBdUIsRUFBQTs7QUFHekI7RUFDRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFEbEI7SUFJSSxrQkFBa0IsRUFBQTs7QUFJdEI7RUFDRSxhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLFNBQVM7RUFDVCxVQUFVO0VBQ1YsbUJBQW1CLEVBQUE7O0FBTHJCO0lBUUksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZSxFQUFBOztBQVhuQjtNQWNNLFdBQVcsRUFBQTs7QUFLakI7RUFDRTtJQUNFLCtCQUErQixFQUFBLEVBQ2hDOztBQUdIO0VBQ0U7SUFDRSwwQkFBMEIsRUFBQSxFQUMzQiIsImZpbGUiOiJzcmMvYXBwL21lZGlhL3Bob3Rvcy9waG90b3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGhvdG9zLWNvbnRlbnQtd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmxvYWRpbmctc3Bpbm5lciB7XHJcbiAgbWFyZ2luLXRvcDogMjAwcHg7XHJcbn1cclxuXHJcbi5waG90by1ncmlkLXdyYXBwZXIge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcblxyXG4gIC5lcnJvci1tZXNzYWdlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbi5waG90by1ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGU6IGF1dG8gLyBhdXRvIGF1dG8gYXV0bztcclxuICBnYXA6IDIwcHg7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW46IDAgYXV0byAyMHB4O1xyXG5cclxuICBtYXQtY2FyZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgLnBob3RvLWdyaWQge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZTogYXV0byAvIGF1dG8gYXV0bztcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcbiAgLnBob3RvLWdyaWQge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZTogYXV0byAvIGF1dG87XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/media/photos/photos.component.ts":
/*!**************************************************!*\
  !*** ./src/app/media/photos/photos.component.ts ***!
  \**************************************************/
/*! exports provided: PhotosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotosComponent", function() { return PhotosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_photos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/photos.service */ "./src/app/services/photos.service.ts");



var PhotosComponent = /** @class */ (function () {
    function PhotosComponent(photoService) {
        this.photoService = photoService;
        this.loading = true;
        this.errorMessage = "";
    }
    PhotosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.photoService.photos.subscribe(function (photos) {
            _this.photos = photos;
        });
        this.photoService.fetchPhotos(function () { return _this.loading = false; });
    };
    PhotosComponent.prototype.setPhotoIdx = function (event, photo) {
        this.selectedPhotoIdx = this.photos.findIndex(function (pic) { return pic.url === photo.url; });
        this.photoService.galleryRef.open(this.selectedPhotoIdx);
    };
    PhotosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-photos",
            template: __webpack_require__(/*! ./photos.component.html */ "./src/app/media/photos/photos.component.html"),
            styles: [__webpack_require__(/*! ./photos.component.scss */ "./src/app/media/photos/photos.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_photos_service__WEBPACK_IMPORTED_MODULE_2__["PhotosService"]])
    ], PhotosComponent);
    return PhotosComponent;
}());



/***/ }),

/***/ "./src/app/media/videos/videos.component.html":
/*!****************************************************!*\
  !*** ./src/app/media/videos/videos.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"videos-content-wrapper\">\r\n  <div\r\n    *ngIf=\"!loading\"\r\n    class=\"videos-wrapper\"\r\n  >\r\n    <h3 *ngIf=\"errorMessage?.length\">{{ errorMessage }}</h3>\r\n    <mat-card\r\n      *ngFor=\"let video of videoData\"\r\n      class=\"video-card\"\r\n      [ngStyle]=\"{'height': videoHeight + 'px'}\"\r\n    >\r\n      <mat-spinner class=\"loading-spinner\" *ngIf=\"video.loading\"></mat-spinner>\r\n      <iframe\r\n        [hidden]=\"video.loading\"\r\n        (load)=\"onLoadVideo(video)\"\r\n        width=\"100%\"\r\n        [height]=\"videoHeight\"\r\n        [src]=\"video.url\"\r\n        frameborder=\"0\"\r\n        allow=\"accelerometer; encrypted-media; gyroscope; picture-in-picture\"\r\n        allowfullscreen\r\n      ></iframe>\r\n    </mat-card>\r\n\r\n    <button mat-raised-button color=\"primary\" (click)=\"loadVideos(true)\" *ngIf=\"nextPageToken?.length\">Load more</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/media/videos/videos.component.scss":
/*!****************************************************!*\
  !*** ./src/app/media/videos/videos.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".videos-content-wrapper {\n  display: flex;\n  justify-content: center; }\n\n.videos-wrapper {\n  display: flex;\n  flex-direction: column;\n  margin-top: 20px;\n  width: 100%; }\n\n.videos-wrapper button {\n    align-self: center;\n    margin: 20px 0; }\n\n.video-card {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 20px;\n  width: 90%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVkaWEvdmlkZW9zL0M6XFxVc2Vyc1xcQ2hhcmxpZS5Db2xsaWVyXFxCZW5jaFxcQW5ndWxhciBQcmFjdGljZVxcd2Vic2l0ZS1zb3VyY2VcXG5nLXByb2plY3Qvc3JjXFxhcHBcXG1lZGlhXFx2aWRlb3NcXHZpZGVvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYix1QkFBdUIsRUFBQTs7QUFHekI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixXQUFXLEVBQUE7O0FBSmI7SUFPSSxrQkFBa0I7SUFDbEIsY0FBYyxFQUFBOztBQUlsQjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tZWRpYS92aWRlb3MvdmlkZW9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZpZGVvcy1jb250ZW50LXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi52aWRlb3Mtd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDIwcHggMDtcclxuICB9XHJcbn1cclxuXHJcbi52aWRlby1jYXJkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwIGF1dG8gMjBweDtcclxuICB3aWR0aDogOTAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/media/videos/videos.component.ts":
/*!**************************************************!*\
  !*** ./src/app/media/videos/videos.component.ts ***!
  \**************************************************/
/*! exports provided: VideosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosComponent", function() { return VideosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var src_app_services_videos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/videos.service */ "./src/app/services/videos.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





var VideosComponent = /** @class */ (function () {
    function VideosComponent(videosService, sanitizer) {
        this.videosService = videosService;
        this.sanitizer = sanitizer;
        this.loading = true;
        this.playlistId = '';
        this.videoData = [];
        this.nextPageToken = '';
        this.errorMessage = '';
        this.videoHeight = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].embedVideoHeight;
    }
    VideosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.videosService.getPlaylistId().subscribe(function (playlistId) {
            _this.playlistId = playlistId.items[0].contentDetails.relatedPlaylists.uploads;
        }, function (error) {
            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                console.log('error with getPlaylistId:', error);
            }
            _this.errorMessage = 'We were unable to retrieve videos at this time. Please try again later.';
        }, function () {
            _this.loadVideos();
        });
    };
    VideosComponent.prototype.onLoadVideo = function (video) {
        video.loading = false;
    };
    VideosComponent.prototype.loadVideos = function () {
        var _this = this;
        this.videosService.getVideosByPlaylistId(this.playlistId, this.nextPageToken).subscribe(function (videos) {
            _this.nextPageToken = videos.nextPageToken || '';
            var newVideos = videos.items.map(function (video) { return ({
                url: _this.sanitizer.bypassSecurityTrustResourceUrl(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].youtubeEmbedBaseUrl + "/" + video.contentDetails.videoId),
                loading: true
            }); });
            _this.videoData = _this.videoData.concat(newVideos);
            _this.loading = false;
        }, function (error) {
            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                console.log('error with getVideosByPlaylistId', error);
            }
            _this.errorMessage = 'We were unable to retrieve videos at this time. Please try again later.';
            _this.loading = false;
        });
    };
    VideosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-videos',
            template: __webpack_require__(/*! ./videos.component.html */ "./src/app/media/videos/videos.component.html"),
            styles: [__webpack_require__(/*! ./videos.component.scss */ "./src/app/media/videos/videos.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_videos_service__WEBPACK_IMPORTED_MODULE_3__["VideosService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], VideosComponent);
    return VideosComponent;
}());



/***/ }),

/***/ "./src/app/navigation/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/navigation/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"app-toolbar\">\r\n  <div fxHide.gt-xs>\r\n    <button mat-icon-button (click)=\"onToggleSidenav()\">\r\n      <mat-icon>menu</mat-icon>\r\n    </button>\r\n  </div>\r\n  <div>\r\n    <a [routerLink]=\"['/about']\" class=\"header-image-link\">\r\n      <img src=\"assets/gdg_cloud_oc_horizontal.png\" class=\"header-image\" />\r\n    </a>\r\n  </div>\r\n  <div fxFlex fxLayout fxLayoutAlign=\"end\" fxHide.xs>\r\n    <ul fxLayout fxLayoutGap=\"15px\" class=\"navigation-items\">\r\n      <li>\r\n        <a mat-button [routerLink]=\"['/about']\">About</a>\r\n      </li>\r\n      <li>\r\n        <a mat-button [routerLink]=\"['/events']\">Events</a>\r\n      </li>\r\n      <li>\r\n        <a mat-button [routerLink]=\"['/media']\">Media</a>\r\n      </li>\r\n      <li>\r\n        <a mat-button [routerLink]=\"['/contact']\">Contact Us</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</mat-toolbar>\r\n"

/***/ }),

/***/ "./src/app/navigation/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/navigation/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  text-decoration: none;\n  color: #4285f4; }\n\n.navigation-items {\n  list-style-type: none;\n  padding-right: 10px;\n  margin: 0; }\n\nmat-toolbar {\n  border-radius: 3px; }\n\n@media (max-width: 959px) {\n  mat-toolbar {\n    border-radius: 0px; }\n  .header-image {\n    width: 50%;\n    padding-top: 10px; } }\n\n.header-image {\n  width: 100%;\n  max-width: 250px;\n  padding-top: 12px; }\n\n.header-image-link {\n    display: block; }\n\n@media (max-width: 600px) {\n  .header-image {\n    width: 60%;\n    padding-top: 10px; } }\n\n@media (min-width: 601px) and (max-width: 958px) {\n  .header-image {\n    min-width: 229px;\n    min-height: 58px; } }\n\n.app-toolbar {\n  position: fixed;\n  position: -webkit-sticky;\n  z-index: 1000;\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.35);\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9oZWFkZXIvQzpcXFVzZXJzXFxDaGFybGllLkNvbGxpZXJcXEJlbmNoXFxBbmd1bGFyIFByYWN0aWNlXFx3ZWJzaXRlLXNvdXJjZVxcbmctcHJvamVjdC9zcmNcXGFwcFxcbmF2aWdhdGlvblxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYyxFQUFBOztBQUdoQjtFQUNFLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsU0FBUyxFQUFBOztBQUdYO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0U7SUFDRSxrQkFBa0IsRUFBQTtFQUVwQjtJQUNFLFVBQVU7SUFDVixpQkFBaUIsRUFBQSxFQUNsQjs7QUFHSDtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7O0FBRWpCO0lBQ0UsY0FBYyxFQUFBOztBQUlsQjtFQUNFO0lBQ0UsVUFBVTtJQUNWLGlCQUFpQixFQUFBLEVBQ2xCOztBQUdIO0VBQ0U7SUFDRSxnQkFBZ0I7SUFDaEIsZ0JBQWdCLEVBQUEsRUFDakI7O0FBR0g7RUFDRSxlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYixnREFBZ0Q7RUFDaEQsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbmF2aWdhdGlvbi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjNDI4NWY0O1xyXG59XHJcblxyXG4ubmF2aWdhdGlvbi1pdGVtcyB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5tYXQtdG9vbGJhciB7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTU5cHgpIHtcclxuICBtYXQtdG9vbGJhciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgfVxyXG4gIC5oZWFkZXItaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmhlYWRlci1pbWFnZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAyNTBweDtcclxuICBwYWRkaW5nLXRvcDogMTJweDtcclxuXHJcbiAgJi1saW5rIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLmhlYWRlci1pbWFnZSB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNjAxcHgpIGFuZCAobWF4LXdpZHRoOiA5NThweCkge1xyXG4gIC5oZWFkZXItaW1hZ2Uge1xyXG4gICAgbWluLXdpZHRoOiAyMjlweDtcclxuICAgIG1pbi1oZWlnaHQ6IDU4cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYXBwLXRvb2xiYXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICBib3gtc2hhZG93OiAwcHggM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/navigation/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/navigation/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.sidenavToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent.prototype.onToggleSidenav = function () {
        this.sidenavToggle.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeaderComponent.prototype, "sidenavToggle", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-header",
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/navigation/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/navigation/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/navigation/side-nav/sidenav-list.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/navigation/side-nav/sidenav-list.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-nav-list>\r\n  <a mat-list-item routerLink=\"/about\" (click)=\"onSidenavClose()\">\r\n    <mat-icon matListIcon>home</mat-icon>\r\n    <span class=\"nav-caption\">About</span></a\r\n  >\r\n  <a mat-list-item routerLink=\"/events\" (click)=\"onSidenavClose()\">\r\n    <mat-icon matListIcon>event</mat-icon>\r\n    <span class=\"nav-caption\">Events</span></a\r\n  >\r\n  <a mat-list-item routerLink=\"/media\" (click)=\"onSidenavClose()\">\r\n    <mat-icon matListIcon>photo</mat-icon>\r\n    <span class=\"nav-caption\">Media</span></a\r\n  >\r\n  <a mat-list-item routerLink=\"/contact\" (click)=\"onSidenavClose()\">\r\n    <mat-icon matListIcon>phone</mat-icon>\r\n    <span class=\"nav-caption\">Contact Us</span></a\r\n  >\r\n</mat-nav-list>\r\n"

/***/ }),

/***/ "./src/app/navigation/side-nav/sidenav-list.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/navigation/side-nav/sidenav-list.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  text-decoration: none;\n  color: white; }\n\na:hover,\na:active {\n  color: lightgray; }\n\n.nav-caption {\n  display: inline-block;\n  padding-left: 6px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9zaWRlLW5hdi9DOlxcVXNlcnNcXENoYXJsaWUuQ29sbGllclxcQmVuY2hcXEFuZ3VsYXIgUHJhY3RpY2VcXHdlYnNpdGUtc291cmNlXFxuZy1wcm9qZWN0L3NyY1xcYXBwXFxuYXZpZ2F0aW9uXFxzaWRlLW5hdlxcc2lkZW5hdi1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVksRUFBQTs7QUFHZDs7RUFFRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxxQkFBcUI7RUFDckIsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9uYXZpZ2F0aW9uL3NpZGUtbmF2L3NpZGVuYXYtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmE6aG92ZXIsXHJcbmE6YWN0aXZlIHtcclxuICBjb2xvcjogbGlnaHRncmF5O1xyXG59XHJcblxyXG4ubmF2LWNhcHRpb24ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nLWxlZnQ6IDZweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/navigation/side-nav/sidenav-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/navigation/side-nav/sidenav-list.component.ts ***!
  \***************************************************************/
/*! exports provided: SidenavListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavListComponent", function() { return SidenavListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidenavListComponent = /** @class */ (function () {
    function SidenavListComponent() {
        this.sidenavClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SidenavListComponent.prototype.ngOnInit = function () { };
    SidenavListComponent.prototype.onSidenavClose = function () {
        this.sidenavClose.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SidenavListComponent.prototype, "sidenavClose", void 0);
    SidenavListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-sidenav-list",
            template: __webpack_require__(/*! ./sidenav-list.component.html */ "./src/app/navigation/side-nav/sidenav-list.component.html"),
            styles: [__webpack_require__(/*! ./sidenav-list.component.scss */ "./src/app/navigation/side-nav/sidenav-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidenavListComponent);
    return SidenavListComponent;
}());



/***/ }),

/***/ "./src/app/services/comment.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/comment.service.ts ***!
  \*********************************************/
/*! exports provided: CommentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentService", function() { return CommentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var CommentService = /** @class */ (function () {
    function CommentService(http) {
        this.http = http;
    }
    CommentService.prototype.getEventComments = function (id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].meetupBaseUrl + "/" + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].meetupGroupName + "/events/" + id + "/comments");
    };
    CommentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CommentService);
    return CommentService;
}());



/***/ }),

/***/ "./src/app/services/event.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/event.service.ts ***!
  \*******************************************/
/*! exports provided: Status, EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return Status; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var Status;
(function (Status) {
    Status["upcoming"] = "upcoming";
    Status["past"] = "past";
    // for debugging purposes
    Status["error"] = "error";
})(Status || (Status = {}));
var EventService = /** @class */ (function () {
    function EventService(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].meetupBaseUrl + "/" + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].meetupGroupName;
    }
    EventService.prototype.offsetDate = function (offset) {
        var currentDate = new Date();
        var offsetMonths = new Date(currentDate.setMonth(currentDate.getMonth() + offset));
        var newDate = offsetMonths.toISOString();
        var regEx = /[^z]+/gi;
        var returnVal = newDate.match(regEx)[0];
        return returnVal;
    };
    EventService.prototype.getEvents = function (timeframe, monthLimit) {
        if (monthLimit === void 0) { monthLimit = 6; }
        var limit = timeframe === Status.upcoming ? "no_later_than" : "no_earlier_than";
        var offset = timeframe === Status.upcoming ? monthLimit : -1 * monthLimit;
        return this.http.get(this.baseUrl + "/events?status=" + timeframe + "&" + limit + "=" + this.offsetDate(offset) + "&desc=" + (timeframe === Status.past) + "&fields=comment_count");
    };
    EventService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EventService);
    return EventService;
}());



/***/ }),

/***/ "./src/app/services/photos.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/photos.service.ts ***!
  \********************************************/
/*! exports provided: PhotosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotosService", function() { return PhotosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





var PhotosService = /** @class */ (function () {
    function PhotosService(http) {
        this.http = http;
        this.dataStore = { photos: [] };
        this.photosSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.photos = this.photosSubject.asObservable();
    }
    PhotosService.prototype.fetchPhotos = function (callback) {
        var _this = this;
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].meetupBaseUrl + "/" + src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].meetupGroupName + "/photos").subscribe(function (data) {
            var photosToStore = data.map(function (photo) { return ({
                url: photo.photo_link,
                thumbnailUrl: photo.thumb_link
            }); });
            _this.dataStore.photos = photosToStore;
            _this.photosSubject.next(Object.assign({}, _this.dataStore).photos);
        }, function (error) {
            console.log('Could not load photos: ', error);
        }, function () {
            callback();
        });
    };
    PhotosService.prototype.setGalleryRef = function (galleryRef) {
        this.galleryRef = galleryRef;
    };
    PhotosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PhotosService);
    return PhotosService;
}());



/***/ }),

/***/ "./src/app/services/videos.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/videos.service.ts ***!
  \********************************************/
/*! exports provided: VideosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosService", function() { return VideosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assets_apiKeys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/apiKeys */ "./src/assets/apiKeys.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





var VideosService = /** @class */ (function () {
    function VideosService(http) {
        this.http = http;
    }
    VideosService.prototype.getPlaylistId = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].youtubeBaseUrl + "/channels?part=contentDetails&id=" + src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].youtubeGDGId + "&key=" + _assets_apiKeys__WEBPACK_IMPORTED_MODULE_2__["youtubeApiKey"]);
    };
    VideosService.prototype.getVideosByPlaylistId = function (playlistId, pageToken) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].youtubeBaseUrl
            + '/playlistItems?part=contentDetails&playlistId='
            + playlistId
            + (pageToken ? '&pageToken=' + pageToken : '')
            + '&maxResults=5'
            + '&key=' + _assets_apiKeys__WEBPACK_IMPORTED_MODULE_2__["youtubeApiKey"]);
    };
    VideosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], VideosService);
    return VideosService;
}());



/***/ }),

/***/ "./src/assets/apiKeys.ts":
/*!*******************************!*\
  !*** ./src/assets/apiKeys.ts ***!
  \*******************************/
/*! exports provided: youtubeApiKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "youtubeApiKey", function() { return youtubeApiKey; });
var youtubeApiKey = "AIzaSyBC3jnGt_wwUHgY2tGECN5lMsv1yJAQYEI";


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    meetupBaseUrl: 'https://cors-anywhere.herokuapp.com/https://api.meetup.com',
    meetupGroupName: 'gdgcloudoc',
    contactFormLink: 'https://usebasin.com/f/49362a2c0a33',
    youtubeBaseUrl: 'https://www.googleapis.com/youtube/v3',
    youtubeGDGId: 'UCGGpNEJD4nP5vtSuCbaKGBA',
    youtubeEmbedBaseUrl: 'https://www.youtube-nocookie.com/embed',
    embedVideoHeight: 480
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Charlie.Collier\Bench\Angular Practice\website-source\ng-project\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map