import{Injectable} from '@angular/core';

@Injectable()
export class LoginService{
    public isLogin: boolean;
    IsLogin():boolean{
        return this.isLogin;
    }
    SetLogin(_isLogin: boolean){
        this.isLogin = _isLogin;
    }
}