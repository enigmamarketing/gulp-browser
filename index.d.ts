/// <reference path="ts/typings/tsd.d.ts" />
declare module GulpBrowserBrowserify {
    function init(): () => any;
}
declare var plugins: {
    beautylog: any;
    through: any;
    gutil: any;
    path: any;
    browserify: any;
};
declare var gulpBrowser: any;
