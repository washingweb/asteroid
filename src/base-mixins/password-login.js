/*
*   The password-login mixin:
*   - defines the `createUser` and `loginWithPassword` methods, porcelain for
*     calling the `createUser` and `login` ddp methods
*/

import {onLogin} from "../common/login-method";

/*
*   Public methods
*/

export function createUser ({email, password}) {
    const options = {
        password,
        email
    };
    return this.call("createUser", options).then(onLogin.bind(this));
}

export function loginWithPassword ({email, password}) {
    const loginParameters = {
        password,
        email
    };
    return this.call("login", loginParameters).then(onLogin.bind(this));
}
