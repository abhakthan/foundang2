(function (app) {
  "use strict";

  app.MainComponent = ng.core.Component({
    selector: 'main-app',
    template: '<div class="row">' +
                '<div class="medium-6 columns">' +
                  '<div class="primary callout">{{ names[0] }}</div>' +
                  '<div class="success callout">{{ names[1] }}</div>' +
                '</div>' +
                '<div class="medium-6 columns">' +
                  '<div class="alert callout">{{ names[2] }}</div>' +
                  '<div class="secondary callout">{{ names[3] }}</div>' +
                '</div>' +
              '</div>'
  }).Class({
    constructor: function() {
      this.names = [
        'First Column Top', 'First Column Bottom',
        'Second Column Top', 'Second Column Bottom'
        ];
    }
  });

})(window.app || (window.app = {}));