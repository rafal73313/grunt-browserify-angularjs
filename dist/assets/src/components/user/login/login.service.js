require('./index')
    .service('waUserLoginService', [function () {
        this.userLoggedIn = false;
        this.username = 'NONE';

        this.login = function (setUsernameCallback) {
            console.log('login() called on service!');
            this.userLoggedIn = true;
            this.username = 'Bobski';
            setUsernameCallback(this.username);
        }

        this.getUsername = function () {
            return this.username;
        }

    }])