import { Pipe, PipeTransform } from '@angular/core';
import { escapeRegexp } from './common';

@Pipe({name: 'highlight'})
export class HighlightPipe implements PipeTransform {
  public transform(value:string, query:string):any {
    // HACK
    // Wait when https://github.com/valor-software/ng2-select/issues/633 is fixed
    return value;
  }

}

export function stripTags(input:string):string {
  let tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
  let commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
  return input.replace(commentsAndPhpTags, '').replace(tags, '');
}
