import { Pipe, PipeTransform } from '@angular/core';
// 字段长度超出加省略号
@Pipe({ name: 'ellipsis' })
export class Ellipsis implements PipeTransform {
    constructor() {

    }
    transform(str) {
        if (str.length > 80) {
            return str.substr(0, 80) + '...';
        }
        return str;
    }
}
