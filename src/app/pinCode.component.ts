import { Component } from '@angular/core';

@Component({
    selector: 'app-pincode',
    templateUrl: './pinCode.component.html',
    styleUrls: ['./app.component.css']
})
export class PinCodeComponent {
    pin = '';
    result: string;
    doTest() {
        this.result = 'InValid';
        if (this.pin.length === 4 || this.pin.length === 6) {
            if (!isNaN(Number(this.pin))) {
                if (Number(this.pin) > 1 || Number(this.pin) === 0) {
                    if (this.pin.search(/\./) === -1 && this.pin.search('e') === -1 && this.pin.search('E') === -1) {
                        this.result = 'Valid';
                    }
                }
            }
        }
    }
}
