import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'content-card',
    templateUrl: "content-card.html"
})
export class ContentCard {
    @Input() contentData: any;

    @Output() onClickSub = new EventEmitter();
    @Output() onClickImage = new EventEmitter();

    maxCharacter = 500; //số ký tự một lần hiển thị ra

    constructor() {
    }

    /**
     * Khi kích vào link nào thì trả url lại cho trang gốc
     * @param link 
     */
    onClickItem(link) {
        this.onClickSub.emit({ link });
    }

    /**
     * Khi kích vào một ảnh trong tin thì chạy hàm này
     * Trả về id và danh sách ảnh cho trang gốc
     * @param event 
     */
    onClickMedia(event) {
        this.onClickImage.emit(event);
    }

    /**
     * Mỗi khi bấm nút đọc thêm thì tăng giá trị thuộc tính is_readmore
     * lên 500 ký tự, để lấy thêm 500 ký tự tiếp theo trong nội dung
     * @param obj 
     */
    readMore(obj) {
        obj.is_readmore = (!obj.is_readmore ? this.maxCharacter : obj.is_readmore) + this.maxCharacter;
    }
}