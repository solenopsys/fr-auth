import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {firstValueFrom} from "rxjs";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    encapsulation: ViewEncapsulation.Emulated,
})
export class LoginComponent {
    email: string;
    code: string;

    constructor(private httpClient: HttpClient) {
    }


    sendCode() {
        firstValueFrom(this.httpClient.post("/login", JSON.stringify({
            email: this.email,
            password: this.code
        }))).then(res => {
            console.log(res)
        })
    }

    sendLogin() {
        console.log("ok")
    }
}
