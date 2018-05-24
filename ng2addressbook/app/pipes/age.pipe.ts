import { Pipe, PipeTransform } from "@angular/core";


// {{ contact.dob | age : 2 }}

@Pipe({
    name: "age"
})
export class AgePipe implements PipeTransform {

    transform(dob: string, flag: number = 1): string {
        if (!dob) return "";
        // let re = /^\d{4}-\d{2}-\d{2}$/;
        // if(!re.test(dob)) return "";

        let diff = Date.now() - new Date(dob).getTime();
        let dt = new Date(diff);
        let y = dt.getFullYear() - 1970;
        let m = dt.getMonth();
        let d = dt.getDate();

        switch (flag) {
            case 1: return `${y} years.`;
            case 2: return `${y} years and ${m} months.`;
            default: return `${y} years, ${m} months and ${d} days.`;
        }
    }
}