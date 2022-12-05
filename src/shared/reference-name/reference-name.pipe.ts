import { Pipe, PipeTransform } from '@angular/core';
import { User, TransformedUser } from '../../app/posts/posts.model';

@Pipe({
  name: 'referenceName',
})
export class ReferenceNamePipe implements PipeTransform {
  transform(id: number | null, data: User[] | null): TransformedUser {
    if (!id || !data || !data.length) return {};
    const obj = data!.find((d: { id: number }) => d.id == id)

    return {
      name: obj?.name,
      username: obj?.username,
      email: obj?.email,
      address: obj?.address,
      phone: obj?.phone,
      website: obj?.website,
      company: obj?.company,
    };
  }
}
