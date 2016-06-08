(function (app) {
  document.addEventListener('DOMContentLoaded', function () {
    ng.platformBrowserDynamic.bootstrap(app.MainComponent);
  });
})(window.app || (window.app = {}));