import { Component, ViewEncapsulation } from '@angular/core';

import { DEMOS } from './demos';

// webpack html imports
const titleDoc = require('html-loader!markdown-loader!./docs/title.md');
const usageDoc = require('html-loader!markdown-loader!./docs/usage.md');

@Component({
    selector: 'sortable-section',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './sortable-section.component.html'
})
export class SortableSectionComponent
{
    public name: string = 'Sortable';
    public src: string = 'https://github.com/valor-software/ng2-bootstrap/blob/master/components/sortable';
    public titleDoc: string = titleDoc;
    public usageDoc: string = usageDoc;
    public demos: any = DEMOS;
}
