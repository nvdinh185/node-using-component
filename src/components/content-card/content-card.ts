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

    ngOnInit() {
        console.log(this.contentData);
    }

    onClickItem(link) {
        this.onClickSub.emit({ link });
    }

    onClickMedia(event) {
        this.onClickImage.emit(event);
    }

    readMore(obj) {
        obj.is_readmore = (!obj.is_readmore ? this.maxCharacter : obj.is_readmore) + this.maxCharacter;
    }
}