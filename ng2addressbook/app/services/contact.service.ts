import { Injectable } from "@angular/core";

import { Contact } from "../models/contact";

let counter: number = Date.now();

@Injectable()
export class ContactService {
    constructor() { }

    createContact(contact: Contact): Promise<Contact> {
        return new Promise<Contact>((resolve, reject) => {
            contact._id = (++counter + "")
            this.contacts.push(contact);
            resolve(contact);
        });
    }
    getContact(id: string): Promise<Contact> {
        return new Promise<Contact>((resolve, reject) => {
            resolve(this.contacts.filter(c => c._id == id)[0]);
        });
    }
    updateContact(contact: Contact): Promise<Contact> {
        return new Promise<Contact>((resolve, reject) => {
            let index = this.contacts.findIndex(c => c._id == contact._id);
            if (index == -1) {
                reject({ code: 1001, message: "Invalid id" });
            }
            else {
                this.contacts[index] = contact;
                resolve(contact);
            }
        });
    }
    deleteContact(id: string): Promise<any> {
        return null;
    }
    getAll(): Promise<Array<Contact>> {
        return new Promise<Array<Contact>>((resolve, reject) => {
            resolve(this.contacts);
        });
    }

    contacts: Array<Contact> = [{
        "_id": "58de11b5fc13ae1336000514",
        "name": "Norma Greene",
        "email": "ngreene0@deliciousdays.com",
        "gender": "Female",
        "phone": "1-(515)572-9669",
        "city": "Des Moines",
        "state": "Iowa",
        "country": "United States",
        "dob": "1989-06-02"
    }, {
        "_id": "58de11b5fc13ae1336000515",
        "name": "Charles Medina",
        "email": "cmedina1@soup.io",
        "gender": "Male",
        "phone": "1-(202)326-8133",
        "city": "Washington",
        "state": "District of Columbia",
        "country": "United States",
        "dob": "2/18/1996"
    }, {
        "_id": "58de11b5fc13ae1336000516",
        "name": "Brian Fields",
        "email": "bfields2@slashdot.org",
        "gender": "Male",
        "phone": "1-(917)583-3655",
        "city": "Brooklyn",
        "state": "New York",
        "country": "United States",
        "dob": "3/14/1982"
    }, {
        "_id": "58de11b5fc13ae1336000517",
        "name": "Jeffrey Harper",
        "email": "jharper3@omniture.com",
        "gender": "Male",
        "phone": "1-(806)757-8170",
        "city": "Lubbock",
        "state": "Texas",
        "country": "United States",
        "dob": "9/23/1978"
    }, {
        "_id": "58de11b5fc13ae1336000518",
        "name": "Mark Burns",
        "email": "mburns4@godaddy.com",
        "gender": "Male",
        "phone": "1-(518)192-2412",
        "city": "Albany",
        "state": "New York",
        "country": "United States",
        "dob": "5/5/1999"
    }, {
        "_id": "58de11b5fc13ae1336000519",
        "name": "Eugene Fields",
        "email": "efields5@seesaa.net",
        "gender": "Male",
        "phone": "1-(323)944-6580",
        "city": "Glendale",
        "state": "California",
        "country": "United States",
        "dob": "11/30/1985"
    }, {
        "_id": "58de11b5fc13ae133600051a",
        "name": "Doris Carter",
        "email": "dcarter6@tuttocitta.it",
        "gender": "Female",
        "phone": "1-(314)561-6372",
        "city": "Saint Louis",
        "state": "Missouri",
        "country": "United States",
        "dob": "6/14/1973"
    }, {
        "_id": "58de11b5fc13ae133600051b",
        "name": "Anne Oliver",
        "email": "aoliver7@reddit.com",
        "gender": "Female",
        "phone": "1-(206)823-8862",
        "city": "Seattle",
        "state": "Washington",
        "country": "United States",
        "dob": "4/22/1987"
    }, {
        "_id": "58de11b5fc13ae133600051c",
        "name": "Sean Larson",
        "email": "slarson8@slashdot.org",
        "gender": "Male",
        "phone": "1-(765)380-7724",
        "city": "Crawfordsville",
        "state": "Indiana",
        "country": "United States",
        "dob": "1/14/1987"
    }, {
        "_id": "58de11b5fc13ae133600051d",
        "name": "Robert West",
        "email": "rwest9@theglobeandmail.com",
        "gender": "Male",
        "phone": "1-(814)401-6516",
        "city": "Erie",
        "state": "Pennsylvania",
        "country": "United States",
        "dob": "6/30/1980"
    }, {
        "_id": "58de11b5fc13ae133600051e",
        "name": "Christopher Payne",
        "email": "cpaynea@histats.com",
        "gender": "Male",
        "phone": "1-(765)691-7166",
        "city": "Lafayette",
        "state": "Indiana",
        "country": "United States",
        "dob": "3/29/1994"
    }, {
        "_id": "58de11b5fc13ae133600051f",
        "name": "Albert Wallace",
        "email": "awallaceb@odnoklassniki.ru",
        "gender": "Male",
        "phone": "1-(808)440-9884",
        "city": "Honolulu",
        "state": "Hawaii",
        "country": "United States",
        "dob": "11/1/1986"
    }, {
        "_id": "58de11b5fc13ae1336000520",
        "name": "Ernest Campbell",
        "email": "ecampbellc@wikispaces.com",
        "gender": "Male",
        "phone": "1-(719)761-6456",
        "city": "Colorado Springs",
        "state": "Colorado",
        "country": "United States",
        "dob": "2/14/1990"
    }, {
        "_id": "58de11b5fc13ae1336000521",
        "name": "Nicole Mcdonald",
        "email": "nmcdonaldd@w3.org",
        "gender": "Female",
        "phone": "1-(253)104-9772",
        "city": "Olympia",
        "state": "Washington",
        "country": "United States",
        "dob": "11/24/1980"
    }, {
        "_id": "58de11b5fc13ae1336000522",
        "name": "Henry Fox",
        "email": "hfoxe@netlog.com",
        "gender": "Male",
        "phone": "1-(713)299-5550",
        "city": "Houston",
        "state": "Texas",
        "country": "United States",
        "dob": "9/4/1998"
    }, {
        "_id": "58de11b5fc13ae1336000523",
        "name": "Pamela Pierce",
        "email": "ppiercef@bluehost.com",
        "gender": "Female",
        "phone": "1-(951)317-3246",
        "city": "Corona",
        "state": "California",
        "country": "United States",
        "dob": "2/29/1996"
    }, {
        "_id": "58de11b5fc13ae1336000524",
        "name": "Alice Thomas",
        "email": "athomasg@sun.com",
        "gender": "Female",
        "phone": "1-(414)422-3908",
        "city": "Milwaukee",
        "state": "Wisconsin",
        "country": "United States",
        "dob": "10/7/1978"
    }, {
        "_id": "58de11b5fc13ae1336000525",
        "name": "Nicole Griffin",
        "email": "ngriffinh@dropbox.com",
        "gender": "Female",
        "phone": "1-(937)587-1746",
        "city": "Hamilton",
        "state": "Ohio",
        "country": "United States",
        "dob": "4/20/1999"
    }, {
        "_id": "58de11b5fc13ae1336000526",
        "name": "Jimmy Martin",
        "email": "jmartini@alibaba.com",
        "gender": "Male",
        "phone": "1-(502)515-8721",
        "city": "Louisville",
        "state": "Kentucky",
        "country": "United States",
        "dob": "1/9/1996"
    }, {
        "_id": "58de11b5fc13ae1336000527",
        "name": "Craig Gibson",
        "email": "cgibsonj@buzzfeed.com",
        "gender": "Male",
        "phone": "1-(904)481-2033",
        "city": "Saint Augustine",
        "state": "Florida",
        "country": "United States",
        "dob": "11/14/1977"
    }, {
        "_id": "58de11b5fc13ae1336000528",
        "name": "Sarah Peterson",
        "email": "spetersonk@google.it",
        "gender": "Female",
        "phone": "1-(916)852-1697",
        "city": "Sacramento",
        "state": "California",
        "country": "United States",
        "dob": "1/25/1992"
    }, {
        "_id": "58de11b5fc13ae1336000529",
        "name": "Donna Perkins",
        "email": "dperkinsl@chron.com",
        "gender": "Female",
        "phone": "1-(219)923-2273",
        "city": "Gary",
        "state": "Indiana",
        "country": "United States",
        "dob": "5/6/1982"
    }, {
        "_id": "58de11b5fc13ae133600052a",
        "name": "Antonio Coleman",
        "email": "acolemanm@pinterest.com",
        "gender": "Male",
        "phone": "1-(504)687-6988",
        "city": "New Orleans",
        "state": "Louisiana",
        "country": "United States",
        "dob": "8/27/1986"
    }, {
        "_id": "58de11b5fc13ae133600052b",
        "name": "Barbara Henry",
        "email": "bhenryn@stumbleupon.com",
        "gender": "Female",
        "phone": "1-(951)654-1851",
        "city": "Corona",
        "state": "California",
        "country": "United States",
        "dob": "9/5/1981"
    }, {
        "_id": "58de11b5fc13ae133600052c",
        "name": "Christina Little",
        "email": "clittleo@de.vu",
        "gender": "Female",
        "phone": "1-(562)142-3259",
        "city": "Long Beach",
        "state": "California",
        "country": "United States",
        "dob": "2/12/1976"
    }, {
        "_id": "58de11b5fc13ae133600052d",
        "name": "Mary Hunter",
        "email": "mhunterp@smugmug.com",
        "gender": "Female",
        "phone": "1-(404)846-6099",
        "city": "Atlanta",
        "state": "Georgia",
        "country": "United States",
        "dob": "11/2/1973"
    }, {
        "_id": "58de11b5fc13ae133600052e",
        "name": "Anthony Meyer",
        "email": "ameyerq@rakuten.co.jp",
        "gender": "Male",
        "phone": "1-(281)878-0999",
        "city": "Houston",
        "state": "Texas",
        "country": "United States",
        "dob": "2/17/1997"
    }, {
        "_id": "58de11b5fc13ae133600052f",
        "name": "Phillip Reed",
        "email": "preedr@sfgate.com",
        "gender": "Male",
        "phone": "1-(215)358-0575",
        "city": "Philadelphia",
        "state": "Pennsylvania",
        "country": "United States",
        "dob": "12/1/1981"
    }, {
        "_id": "58de11b5fc13ae1336000530",
        "name": "Carl Moore",
        "email": "cmoores@google.es",
        "gender": "Male",
        "phone": "1-(816)412-3809",
        "city": "Kansas City",
        "state": "Missouri",
        "country": "United States",
        "dob": "6/19/1998"
    }, {
        "_id": "58de11b5fc13ae1336000531",
        "name": "Patricia Reynolds",
        "email": "preynoldst@slideshare.net",
        "gender": "Female",
        "phone": "1-(267)127-2449",
        "city": "Philadelphia",
        "state": "Pennsylvania",
        "country": "United States",
        "dob": "4/1/1996"
    }, {
        "_id": "58de11b5fc13ae1336000532",
        "name": "Mark Turner",
        "email": "mturneru@studiopress.com",
        "gender": "Male",
        "phone": "1-(617)377-5637",
        "city": "Boston",
        "state": "Massachusetts",
        "country": "United States",
        "dob": "5/15/1996"
    }, {
        "_id": "58de11b5fc13ae1336000533",
        "name": "Rachel West",
        "email": "rwestv@mozilla.com",
        "gender": "Female",
        "phone": "1-(915)260-6205",
        "city": "El Paso",
        "state": "Texas",
        "country": "United States",
        "dob": "7/11/1980"
    }, {
        "_id": "58de11b5fc13ae1336000534",
        "name": "Cynthia Graham",
        "email": "cgrahamw@desdev.cn",
        "gender": "Female",
        "phone": "1-(509)443-8003",
        "city": "Spokane",
        "state": "Washington",
        "country": "United States",
        "dob": "2/27/1981"
    }, {
        "_id": "58de11b5fc13ae1336000535",
        "name": "Judy White",
        "email": "jwhitex@meetup.com",
        "gender": "Female",
        "phone": "1-(504)579-4801",
        "city": "New Orleans",
        "state": "Louisiana",
        "country": "United States",
        "dob": "7/8/1998"
    }, {
        "_id": "58de11b5fc13ae1336000536",
        "name": "Anna Arnold",
        "email": "aarnoldy@cmu.edu",
        "gender": "Female",
        "phone": "1-(347)892-5709",
        "city": "Flushing",
        "state": "New York",
        "country": "United States",
        "dob": "5/6/1998"
    }, {
        "_id": "58de11b5fc13ae1336000537",
        "name": "Peter Lee",
        "email": "pleez@g.co",
        "gender": "Male",
        "phone": "1-(317)170-4105",
        "city": "Indianapolis",
        "state": "Indiana",
        "country": "United States",
        "dob": "10/22/1998"
    }, {
        "_id": "58de11b5fc13ae1336000538",
        "name": "Frances Larson",
        "email": "flarson10@elegantthemes.com",
        "gender": "Female",
        "phone": "1-(901)802-1751",
        "city": "Memphis",
        "state": "Tennessee",
        "country": "United States",
        "dob": "2/5/1983"
    }, {
        "_id": "58de11b5fc13ae1336000539",
        "name": "Antonio Sims",
        "email": "asims11@myspace.com",
        "gender": "Male",
        "phone": "1-(702)226-7305",
        "city": "Las Vegas",
        "state": "Nevada",
        "country": "United States",
        "dob": "5/24/1980"
    }, {
        "_id": "58de11b5fc13ae133600053a",
        "name": "Walter Daniels",
        "email": "wdaniels12@pcworld.com",
        "gender": "Male",
        "phone": "1-(312)603-1655",
        "city": "Chicago",
        "state": "Illinois",
        "country": "United States",
        "dob": "10/28/1977"
    }, {
        "_id": "58de11b5fc13ae133600053b",
        "name": "Karen Turner",
        "email": "kturner13@telegraph.co.uk",
        "gender": "Female",
        "phone": "1-(239)423-2523",
        "city": "Naples",
        "state": "Florida",
        "country": "United States",
        "dob": "1/10/1992"
    }, {
        "_id": "58de11b5fc13ae133600053c",
        "name": "Diane Gordon",
        "email": "dgordon14@admin.ch",
        "gender": "Female",
        "phone": "1-(602)919-1235",
        "city": "Phoenix",
        "state": "Arizona",
        "country": "United States",
        "dob": "12/19/1999"
    }, {
        "_id": "58de11b5fc13ae133600053d",
        "name": "Ashley Sanders",
        "email": "asanders15@samsung.com",
        "gender": "Female",
        "phone": "1-(812)627-4069",
        "city": "Evansville",
        "state": "Indiana",
        "country": "United States",
        "dob": "10/6/1974"
    }, {
        "_id": "58de11b5fc13ae133600053e",
        "name": "Carol Campbell",
        "email": "ccampbell16@theatlantic.com",
        "gender": "Female",
        "phone": "1-(571)253-3615",
        "city": "Falls Church",
        "state": "Virginia",
        "country": "United States",
        "dob": "2/17/1989"
    }, {
        "_id": "58de11b5fc13ae133600053f",
        "name": "Phyllis Baker",
        "email": "pbaker17@amazon.de",
        "gender": "Female",
        "phone": "1-(901)140-4328",
        "city": "Memphis",
        "state": "Tennessee",
        "country": "United States",
        "dob": "3/15/1979"
    }, {
        "_id": "58de11b5fc13ae1336000540",
        "name": "Nicholas Hudson",
        "email": "nhudson18@xinhuanet.com",
        "gender": "Male",
        "phone": "1-(540)100-2754",
        "city": "Roanoke",
        "state": "Virginia",
        "country": "United States",
        "dob": "3/28/1999"
    }, {
        "_id": "58de11b5fc13ae1336000541",
        "name": "Carlos Powell",
        "email": "cpowell19@hatena.ne.jp",
        "gender": "Male",
        "phone": "1-(501)676-4565",
        "city": "Little Rock",
        "state": "Arkansas",
        "country": "United States",
        "dob": "12/23/1988"
    }, {
        "_id": "58de11b5fc13ae1336000542",
        "name": "Wayne Jacobs",
        "email": "wjacobs1a@t.co",
        "gender": "Male",
        "phone": "1-(352)594-6071",
        "city": "Ocala",
        "state": "Florida",
        "country": "United States",
        "dob": "8/6/1978"
    }, {
        "_id": "58de11b5fc13ae1336000543",
        "name": "Edward Smith",
        "email": "esmith1b@gov.uk",
        "gender": "Male",
        "phone": "1-(786)441-7423",
        "city": "Hialeah",
        "state": "Florida",
        "country": "United States",
        "dob": "10/12/1973"
    }, {
        "_id": "58de11b5fc13ae1336000544",
        "name": "Bruce Morrison",
        "email": "bmorrison1c@nih.gov",
        "gender": "Male",
        "phone": "1-(205)743-3919",
        "city": "Tuscaloosa",
        "state": "Alabama",
        "country": "United States",
        "dob": "8/27/1987"
    }, {
        "_id": "58de11b5fc13ae1336000545",
        "name": "Marie Reyes",
        "email": "mreyes1d@1und1.de",
        "gender": "Female",
        "phone": "1-(801)851-5376",
        "city": "Sandy",
        "state": "Utah",
        "country": "United States",
        "dob": "6/23/1990"
    }];
}