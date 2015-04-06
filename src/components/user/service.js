import {Inject} from 'angular2/di';
import {myHttpResponse as HttpResponse} from 'my/foundation/httpResponse';
import {myHttp as Http} from 'my/core/api';
import {myUser as User} from 'my/models/user';

@Inject(Http);
class Users
{
    _cache: map;
    _http: Http;

    constructor(http: Http) {
        this._cache = new Map();
        this._http = http;
    }

    getById(id) {
        return this._http.get('/users/' + id).then(this._cacheUser);
    }

    _cacheUser(response: HttpResponse) {
        var user = new User(response.data.user);
        this._cache[user.id] = user;

        return user;
    }
}
