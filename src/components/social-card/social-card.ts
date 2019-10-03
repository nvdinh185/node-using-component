import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { PopoverController } from 'ionic-angular';
import { ApiAuthService } from '../../services/apiAuthService';
import { PopoverCard } from '../popover-card/popover-card';

@Component({
    selector: 'social-card',
    templateUrl: "social-card.html"
})
export class SocialCard implements OnInit {
    //các biến dữ liệu đầu vào
    @Input() ownerData: any;
    @Input() resultData: any; //Là đối tượng kết quả hành động like, comment, share ở dưới
    @Input() actionData: any; //Là đối tượng hành động like, comment, share

    //sự kiện truyền các hành động thực hiện trên card này ra
    @Output() onClickSub = new EventEmitter();

    //đối tượng này để lấy name, color hoặc icon hiển thị cho kết quả và hành động likes
    iconLikes: any = {
        like: { name: "Thích", color: "primary", icon: "md-thumbs-up" },
        love: { name: "Đáng yêu", color: "danger", icon: "heart" },
        unlike: { name: "Không thích", color: "dark", icon: "md-thumbs-down" },
        sad: { name: "Buồn", color: "sad", icon: "ios-sad-outline" },
        angery: { name: "Giận sôi", color: "angery", icon: "ios-sad" }
    }

    constructor(
        private apiAuth: ApiAuthService,
        private popoverCtrl: PopoverController
    ) { }

    ngOnInit() {
        //Gán lại biến actionData là các đối tượng có thuộc tính để hiển thị
        //các nút hành động likes, comments, likes
        if (this.actionData) {
            if (this.actionData["like"]) this.actionData["like"] = { name: "Thích", color: "primary", icon: "thumbs-up", next: "LIKE" };
            if (this.actionData["comment"]) this.actionData["comment"] = { name: "Góp ý", color: "primary", icon: "chatbubbles", next: "COMMENT" };
            if (this.actionData["share"]) this.actionData["share"] = { name: "Chia sẻ", color: "primary", icon: "share-alt", next: "SHARE" };
        }
    }

    /**
     * khi bấm vào nút like/comment/share
     * thì sự kiện này được sinh ra
     * @param ev 
     * @param action 
     */
    onClickActions(ev, action) {
        if (action.next === "LIKE") {
            //Nếu không truyền đối tượng resultsData ở trang gốc
            //hoặc truyền mà không có (=undefined)
            //thì tạo đối tượng resultsData
            if (!this.resultData) this.resultData = {};
            //Nếu đối tượng resultsData chưa có thuộc tính likes thì khởi tạo thuộc tính này
            if (!this.resultData["likes"]) Object.defineProperty(this.resultData, "likes", { value: {}, writable: true, enumerable: true, configurable: true })
            //Phải truyền username login qua để kiểm tra xem username login này có hành động gì không?
            //và thêm username login vào thuộc tính likes
            if (this.ownerData) {
                //Nếu có username login ở thuộc tính likes và giá trị hành động của username login lớn hơn 0
                //nghĩa là đã likes trước đó rồi, bấm lần nữa là unlikes
                if (this.resultData.likes[this.ownerData.username] && this.resultData.likes[this.resultData.likes[this.ownerData.username]]) {
                    //trừ giá trị hành động của username login đi 1
                    this.resultData.likes[this.resultData.likes[this.ownerData.username]] -= 1;
                    //xóa username login ra khỏi thuộc tính likes
                    this.apiAuth.deleteObjectKey(this.resultData.likes, this.ownerData.username);
                    //trả lại đối tượng resultsData cho trang gốc
                    this.onClickSub.emit({ action: { next: "LIKE" }, result: this.resultData });
                } else {
                    //Nếu chưa có thuộc tính likes trong đối tượng resultsData
                    //hiển thị menu chọn biểu tượng cảm xúc
                    this.showRadioLikes(ev, this.ownerData.username);
                }
            }
        } else {
            this.onClickSub.emit({ action });
        }
    }

    /**
     * Hiển thị menu chọn biểu tượng cảm xúc
     * @param ev 
     * @param username 
     */
    showRadioLikes(ev, username) {
        let menu = [];
        //đưa các thuộc tính cần thiết vào mảng menu, thuộc tính value là key của đối tượng iconLikes
        for (let key in this.iconLikes) {
            this.iconLikes[key].value = key;
            menu.push(this.iconLikes[key])
        }

        //sử dụng PopoverCard để hiện menu chọn biểu tượng cảm xúc
        let popover = this.popoverCtrl.create(PopoverCard, {
            form: {
                type: "icon",
                menu: menu
            }
        });

        popover.present({ ev }); //truyen su kien de menu dung vi tri

        //Nhận kết quả từ PopoverCard và trả lại cho trang gốc
        popover.onDidDismiss(data => {
            if (data) {
                //thêm thuộc tính username login vào thuộc tính likes trong đối tượng resultsData
                this.apiAuth.createObjectKey(this.resultData.likes, username, data);
                //Nếu chưa có hành động vừa thực hiện trong thuộc tính likes
                //thì tạo thuộc tính cho hành động đó
                if (!this.resultData.likes[data]) Object.defineProperty(this.resultData.likes, data, { value: 0, writable: true, enumerable: true, configurable: true })
                //Tăng giá trị của hành động đó lên 1
                this.resultData.likes[data] += 1;
                //trả lại đối tượng resultsData cho trang gốc
                this.onClickSub.emit({ action: { next: "LIKE" }, result: this.resultData });
            }
        })
    }
}