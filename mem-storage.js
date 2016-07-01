/**
 * Create in-memory Storage.
 * @returns {Storage}
 */
function storage() {
    var storage = {},
        store = {},
        keys = [];

    Object.defineProperties(storage, {
        /**
         * Number of key/value pairs.
         * @name Storage#length
         * @type {number}
         * @readonly
         */
        length: {
            configurable: true,
            enumerable: true,
            get: function() {
                return keys.length;
            }
        },

        /**
         * Return name of nth key.
         * @name Storage#key
         * @function
         * @param {number} index
         * @returns {string|null}
         */
        key: {
            configurable: true,
            enumerable: true,
            writable: true,
            value: function(index) {
                return index in keys ? keys[index] : null;
            }
        },

        /**
         * Return value associated with key.
         * @name Storage#getItem
         * @function
         * @param {string} key
         * @returns {string|null}
         */
        getItem: {
            configurable: true,
            enumerable: true,
            writable: true,
            value: function(key) {
                return key in store ? store[key] : null;
            }
        },

        /**
         * Create key/value pair or associate new value to existing key.
         * @name Storage#setItem
         * @function
         * @param {string} key
         * @param {string} value
         */
        setItem: {
            configurable: true,
            enumerable: true,
            writable: true,
            value: function(key, value) {
                var newkey = !(key in store);

                store[key] = value ? String(value) : "";
                if (newkey) keys = Object.keys(store);
            }
        },

        /**
         * Remove key/value pair.
         * @name Storage#removeItem
         * @function
         * @param {string} key
         */
        removeItem: {
            configurable: true,
            enumerable: true,
            writable: true,
            value: function(key) {
                var extant = key in store;

                delete store[key];
                if (extant) keys = Object.keys(store);
            }
        },

        /**
         * Clear all key/value pairs.
         * @name Storage#clear
         * @function
         */
        clear: {
            configurable: true,
            enumerable: true,
            writable: true,
            value: function() {
                store = {};
                keys = [];
            }
        }
    });

    return storage;
}

module.exports = storage;
