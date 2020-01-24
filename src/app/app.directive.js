const waApp = function () {
    'ngInject'
    return {
        templateUrl: 'src/app/app.template.html',
        link: function (scope, el, attrs) {
            console.log('hello from waApp.');
        }
    }
}

export default waApp;