// 透過相依注入來加入需要的功能
import { Component, AfterViewInit } from '@angular/core';

// metadata 綁定component與selector template css
@Component({
    selector: 'app-squaredMirror',
    // 顯示的html模板
    templateUrl: './squaredMirror.component.html',
    // 模板所用的css
    styleUrls: ['./app.component.css']
})
//       
export class squaredMirrorComponent {
    testData: string = "abcd\nefgh\nijkl\nmnop";
    vertResult: string = "";
    horResult: string = "";
    ngAfterViewInit() {
    }
    vertMirror(strng: String) {
        // your code
        let inputArray: string[] = strng.split("\n");
        let returnString: string = "";
        for (var i of inputArray) {
            let reverArray: string[] = i.split("").reverse();
            for (var i of reverArray) {
                returnString += i;
            }
            returnString += '\n';
        }
        return returnString;
    }
    horMirror(strng: String) {
        // your code
        let inputArray: string[] = strng.split("\n").reverse();
        let returnString: string = "";
        for (var i of inputArray) {
            returnString += i + '\n';
        }
        return returnString
    }
    oper(fct: Function, s: String) {
        if (fct == this.vertMirror) {
            this.vertResult = "vertMirror: " + this.vertMirror(s);
        }
        if (fct == this.horMirror) {
            this.horResult = "horMirror: " + this.horMirror(s);
        }
    }
    doTest() {
        this.oper(this.vertMirror, this.testData);
        this.oper(this.horMirror, this.testData);
    }
}
