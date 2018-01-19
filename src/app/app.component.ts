// 透過相依注入來加入需要的功能
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Http } from '@angular/http';
import { Item } from './model';
// metadata 綁定component與selector template css
@Component({
  // 在html中的特定標籤<app-root></app-root>中注入template
  selector: 'app-root',
  // 顯示的html模板
  templateUrl: './app.component.html',
  // 模板所用的css
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  item: Item = { id: 0, name: '', full_name: '', created_at: new Date() };
  name: string;
  itemList: Item[] = new Array<Item>();
  apiUrl: string = String('https://api.github.com/users/mralexgray/repos');
  isList: Boolean;
  isAdd: Boolean;
  isEdit: Boolean;
  constructor(private http: Http, private ref: ChangeDetectorRef) {
  }
  ngOnInit() {
    this.reset();
    this.doGet();
  }
  doGet(): void {
    this.http.get(this.apiUrl).subscribe(response => this.doMapping(response.json()));
  }
  doMapping(response): void {
    let tempItem: Item;
    for (const i of response) {
      tempItem = { id: i.id, name: i.name, full_name: i.full_name, created_at: i.created_at };
      this.itemList.push(tempItem);
    }
  }
  doAdd(): void {
    this.isList = false;
    this.isAdd = true;
  }
  doAddDone(): void {
    console.log(this.item);
    const now = new Date();
    this.item.id = now.getTime();
    this.item.created_at = now;
    this.itemList.unshift(this.item);
    this.reset();
  }
  doEdit(target: Item): void {
    this.item.id = target.id;
    this.item.name = target.name;
    this.item.full_name = target.full_name;
    this.isList = false;
    this.isEdit = true;
  }
  doEditDone(): void {
    for (const i in this.itemList) {
      if (this.item.id === this.itemList[i].id) {
        this.itemList[i].name = this.item.name;
        this.itemList[i].full_name = this.item.full_name;
        this.itemList[i].created_at = new Date();
      }
    }
    this.reset();
  }
  doDelete(id: number): void {
    console.log(id, typeof (id));
    for (const i in this.itemList) {
      if (id === this.itemList[i].id) {
        this.itemList.splice(parseInt(i, 0), 1);
      }
    }
  }
  reset(): void {
    this.item = { id: 0, name: '', full_name: '', created_at: new Date() };
    this.isList = true;
    this.isAdd = false;
    this.isEdit = false;
  }
}
