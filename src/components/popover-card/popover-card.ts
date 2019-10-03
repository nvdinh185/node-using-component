/**
 * Card này cho phép người dùng chuyển vào menu chọn lựa
 * kết quả trả cho nơi gọi chức năng đã chọn lựa theo menu
 */
import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
    selector: 'popover-card',
    templateUrl: "popover-card.html"
})
export class PopoverCard implements OnInit {
    //dữ liệu vào sẽ truyền bằng tham số
    //dữ liệu ra là kết quả truyền lại cho hành động dismiss

    selectedData: any;

    dynamicForm: any = {}

    constructor(private navParams: NavParams
        , private viewCtrl: ViewController
    ) { }

    ngOnInit() {
        this.dynamicForm = this.navParams.data.form;
    }

    selectedValue(value) {
        if (value) {
            this.viewCtrl.dismiss(value);
        }
    }
}