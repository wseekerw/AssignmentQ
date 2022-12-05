import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../../app/posts/posts.model';

@Pipe({
  name: 'referenceName',
})
export class ReferenceNamePipe implements PipeTransform {
  transform(id: number | null, data: User[] | null): string {
    if (!id || !data || !data.length) return '';
    return data!.find((d: { id: number }) => d.id == id)!.name
  }
}
