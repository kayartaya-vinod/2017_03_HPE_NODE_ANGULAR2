// module name -> ./lib/service/contact-service-mongodb

var url = "mongodb://localhost:27017/training";
var mc = require("mongodb").MongoClient;
var ObjectId = require("mongodb").ObjectID;

class ContactService {
    constructor() { }

    validate(contact) {
        let err = null;

        if (!contact || typeof contact != "object") {
            err = { code: 1001 };
            err.message = "contact is undefined or is not an object";
            return err;
        }

        let requiredFields = ["name", "email", "phone"];
        let missingFields = [];
        for (let i = 0; i < requiredFields.length; i++) {
            let f = requiredFields[i];
            if (!(f in contact)) {
                missingFields.push(f);
            }
        }
        if (missingFields.length > 0) {
            err = { code: 1002 };
            err.message = "Missing required fields - " + missingFields.join();
            return err;
        }
        return err;
    }

    addNew(contact) {
        return new Promise((resolve, reject) => {
            let err = this.validate(contact);
            if (err) {
                reject(err);
                return;
            }

            mc.connect(url, (err, db) => {
                if (err) {
                    reject(err); return;
                }
                db.collection("contacts")
                    .insert(contact, (err, doc) => {
                        if (err) {
                            reject(err);
                            db.close();
                            return;
                        }
                        let resp = { _id: doc.insertedIds[0] };
                        resolve(resp);
                        db.close();
                    });
            });
        });
    }
    get(id) {
        return new Promise((resolve, reject) => {
            if (!id) {
                let err = { code: 1001 };
                err.message = "Id was not supplied";
                reject(err); return;
            }

            try {
                new ObjectId(id);
            }
            catch (e) {
                reject({
                    code: 1006,
                    message: "Invalid id supplied"
                });
                return;
            }



            mc.connect(url, (err, db) => {
                db.collection("contacts")
                    .findOne({ _id: new ObjectId(id) }, (err, doc) => {
                        if (err) {
                            reject(err);
                            db.close();
                            return;
                        }
                        resolve(doc);
                        db.close();
                    });
            });
        });
    } // end of get(id)

    update(contact) {
        return new Promise((resolve, reject) => {
            let err = this.validate(contact);
            if (err) {
                reject(err);
                return;
            }

            mc.connect(url, (err, db) => {
                if (err) {
                    reject(err); return;
                }
                try {
                    var id = new ObjectId(contact._id);
                    delete contact._id;
                }
                catch (e) {
                    reject({
                        code: 1006,
                        message: "Invalid id supplied"
                    });
                    return;
                }
                db.collection("contacts")
                    .update({ _id: id }, contact, (err, resp) => {
                        if (err) {
                            reject(err);
                            db.close();
                            return;
                        }
                        resolve(resp);
                        db.close();
                    });
            });

        });
    }
    delete(id) {
        return new Promise((resolve, reject) => {
            if (!id) {
                let err = { code: 1001 };
                err.message = "Id was not supplied";
                reject(err); return;
            }
            mc.connect(url, (err, db) => {
                if (err) {
                    reject(err); return;
                }

                try {
                    var _id = new ObjectId(id);
                }
                catch (e) {
                    reject({
                        code: 1006,
                        message: "Invalid id supplied"
                    });
                    return;
                }
                db.collection("contacts")
                    .remove({ _id }, (err, resp) => {
                        if (err) {
                            reject(err);
                            db.close();
                            return;
                        }
                        resolve(resp);
                        db.close();
                    });
            });
        });
    }
    getAll() {
        return new Promise((resolve, reject) => {
            mc.connect(url, (err, db) => {
                if (err) {
                    reject(err); return;
                }

                db.collection("contacts")
                    .find()
                    .toArray((err, docs) => {
                        if (err) {
                            reject(err);
                            db.close();
                            return;
                        }
                        resolve(docs);
                    });
            });
        });
    }
    search(token) {
        return new Promise((resolve, reject) => { });
    }
}

module.exports = ContactService;
