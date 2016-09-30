"use strict";
var router_1 = require('@angular/router');
var about_component_1 = require("./components/about.component");
var dashboard_1 = require("./components/dashboard");
var login_component_1 = require("./components/login/login.component");
var appRoutes = [
    {
        path: 'about',
        component: about_component_1.AboutComponent
    },
    {
        path: 'dashboard',
        component: dashboard_1.DashboardComponent
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map