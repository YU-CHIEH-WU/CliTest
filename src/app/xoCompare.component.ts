// 透過相依注入來加入需要的功能
import { Component, AfterViewInit } from '@angular/core';
// metadata 綁定component與selector template css
@Component({
    selector: 'app-xoCompare',
    // 顯示的html模板
    templateUrl: './xoCompare.component.html',
    // 模板所用的css
    styleUrls: ['./app.component.css']
})
//   https://www.codewars.com/kata/55908aad6620c066bc00002a/train/typescript
//   time:369ms    
export class xoCompareComponent {
    testDataArray: string[] = [];
    ngAfterViewInit() {
    }
    xo(str: string) {
        let count = 0;
        let splitArray = str.toLowerCase().split("");
        for (var i of splitArray) {
            if (i == "x") {
                count++;
            }
            else if (i == "o") {
                count--;
            }
        }
        return count === 0;
    }
    doTest() {
        this.testDataArray.push('xooxo result= ' + this.xo('xooxo'));
        this.testDataArray.push('xxOo result= ' + this.xo("xxOo"));
        this.testDataArray.push('xxxm result= ' + this.xo("xxxm"));
        this.testDataArray.push('ooxXm result= ' + this.xo("ooxXm"));
    }
}
