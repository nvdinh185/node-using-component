import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PopoverCard } from '../popover-card/popover-card';
import { PopoverController } from 'ionic-angular';

@Component({
    selector: 'user-card',
    templateUrl: "user-card.html"
})
export class UserCard {
    @Input() userData: any;
    @Input() ownerData: any;
    @Input() contactData: any;

    @Output() onClickSub = new EventEmitter();

    statusIcon = {
        0: "ios-lock", //only me
        1: "md-globe", //public
        2: "ios-contacts", //friend
        3: "ios-people-outline", //friend of friend
    }

    constructor(private popoverCtrl: PopoverController
    ) { }

    onClickMore(ev, isPrivate, icon) {

        //neu tin cua user thi hien thi menu:
        //chinh sua nguoi doc tin
        //xoa bo tin nay
        //chinh sua noi dung cua tin

        //neu tin cua user khac:
        //block khong xem tin nay nua
        //bao cao spam

        let menu;

        if (isPrivate) {
            menu =
                [
                    {
                        icon: icon,
                        color: "primary",
                        name: "Sửa trạng thái tin",
                        value: "edit-status"
                    }
                    ,
                    {
                        icon: "trash",
                        color: "danger",
                        name: "Xóa bỏ tin này",
                        value: "delete"
                    }
                    ,
                    {
                        icon: "md-create",
                        color: "secondary",
                        name: "Chỉnh sửa tin này",
                        value: "edit-content"
                    }
                ];
        } else {
            menu =
                [
                    {
                        icon: "md-eye-off",
                        color: "secondary",
                        name: "Block tin này",
                        value: "block"
                    }
                    ,
                    {
                        icon: "md-megaphone",
                        color: "danger",
                        name: "Báo cáo Spam",
                        value: "report"
                    }
                ];
        }

        let popover = this.popoverCtrl.create(PopoverCard, {
            form: {
                type: "item",
                menu: menu
            }
        });

        popover.present({ ev: ev });

        popover.onDidDismiss(data => {
            if (data) {
                this.onClickSub.emit({ command: data })
            }
        })
    }
}