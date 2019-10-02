import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'image-card',
    templateUrl: "image-card.html"
})
export class ImageCard {
    @Input() imageData: any;
    @Output() onClickSub = new EventEmitter();

    constructor() { }

    onClickMedia(idx, data) {
        this.onClickSub.emit({ index: idx, original: data });
    }
}