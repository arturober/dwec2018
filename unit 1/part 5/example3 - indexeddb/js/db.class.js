const DBNAME = 'example';
const VERSION = 1;
const STORES = [
    {
        name: 'products',
        options: { autoIncrement: true, keyPath: 'id' }
    }
];
let dbInstance = null;

export class DB {
    static instance() {
        if (dbInstance) return Promise.resolve(dbInstance); // Already opened

        return new Promise((resolve, reject) => {
            let openReq = indexedDB.open(DBNAME, VERSION);
    
            openReq.addEventListener('upgradeneeded', e => {
                const db = e.target.result;
    
                STORES.forEach(s => {
                    if (!db.objectStoreNames.contains(s.name)) {
                        const store = db.createObjectStore(s.name, s.options);
                        store.createIndex('name', 'name', {unique: false});
                    }
                });
            });
    
            openReq.addEventListener('success', e => {
                dbInstance = e.target.result;
                resolve(dbInstance); // Return database
            });
            openReq.addEventListener('error', e => reject('Error opening database!'));
            openReq.addEventListener('blocked', e => reject('Database is already open'));
        });
    }

    static async insert(storeName, object) {
        const db = await DB.instance();
        const store = db.transaction(storeName, 'readwrite').objectStore(storeName);
        const addReq = store.add(object);

        return new Promise((resolve, reject) => {
            addReq.addEventListener('success', e => resolve(e.target.result)); // Returns object
            addReq.addEventListener('error', e => reject('could not add the object'));
        });
    }

    static async getAll(storeName) {
        const db = await DB.instance();
        const store = db.transaction(storeName, 'readonly').objectStore(storeName);
        const getReq = store.getAll();

        return new Promise((resolve, reject) => {
            getReq.addEventListener('success', e => resolve(e.target.result)); // Returns all objects
            getReq.addEventListener('error', e => reject('could not get objects'));
        });
    }

    static async get(storeName, key) {
        const db = await DB.instance();
        const store = db.transaction(storeName, 'readonly').objectStore(storeName);
        const getReq = store.get(key);

        return new Promise((resolve, reject) => {
            getReq.addEventListener('success', e => resolve(e.target.result)); // Returns object
            getReq.addEventListener('error', e => reject(`could not get object ${key}`));
        });
    }

    static async update(storeName, object, key = null) {
        const db = await DB.instance();
        const store = db.transaction(storeName, 'readwrite').objectStore(storeName);
        // key is only required when the store has no keypath
        const updateReq = key ? store.put(object, key) : store.put(object);

        return new Promise((resolve, reject) => {
            updateReq.addEventListener('success', e => resolve(e.target.result)); // Returns object
            updateReq.addEventListener('error', e => reject(`could not update object`));
        });
    }

    static async delete(storeName, key) {
        const db = await DB.instance();
        const store = db.transaction(storeName, 'readwrite').objectStore(storeName);
        const delReq = store.delete(key);

        return new Promise((resolve, reject) => {
            delReq.addEventListener('success', e => resolve());
            delReq.addEventListener('error', e => reject(`could not remove the object ${key}`));
        });
    }
}

