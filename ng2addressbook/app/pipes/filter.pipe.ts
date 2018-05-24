import { Pipe, PipeTransform } from "@angular/core";
import { Contact } from "../models/contact";

@Pipe({
    name: "filter"
})
export class FilterPipe implements PipeTransform {
    transform(array: Array<any>, token: string, field: string = "name"): Array<any> {
        if (!array || !(array instanceof Array) || !token) {
            return array;
        }
        let re = new RegExp(token, "i");
        return array.filter(c => re.test(c[field]));
    }
}