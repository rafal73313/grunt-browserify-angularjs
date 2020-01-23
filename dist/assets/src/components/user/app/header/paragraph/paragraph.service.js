module.exports = angular.module('wa.components.user.app.header.paragraph.services', [])
    .service('waParagraphService', [function () {

        this.getName = function() {
            return 'Marry';
        }

    }])