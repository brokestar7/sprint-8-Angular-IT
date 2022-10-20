import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'id'
})
export class IdPipe implements PipeTransform {
    transform( result: any): string  {
        return result.url.replace(/\D/g, '');
    }

}