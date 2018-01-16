// 透過相依注入來加入需要的功能
import { Component } from '@angular/core';
import { Http } from '@angular/http';
// metadata 綁定component與selector template css
@Component({
  // 在html中的特定標籤<app-root></app-root>中注入template
  selector: 'app-root',
  // 顯示的html模板
  templateUrl: './app.component.html',
  // 模板所用的css
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  item: any;
  apiUrl: String = 'http://localhost:5000/api/values';
  constructor(private http: Http) {
  }
  doGet() {
    const url: String = this.apiUrl;
    this.http.get(url).subscribe(res => console.table(res.json()));
  }
}
