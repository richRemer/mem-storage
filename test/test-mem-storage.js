var expect = require("expect.js"),
    storage = require("..");

describe("MemStorage", function() {
    var store;

    beforeEach(function() {
        store = storage();
    });

    describe(".length", function() {
        it("should be initialized to 0", function() {
            expect(store.length).to.be(0);
        });

        it("should be read only", function() {
            store.length = 5;
            expect(store.length).to.be(0);
        });
    });

    describe(".setItem(key, value)", function() {
        it("should add key/value pair", function() {
            store.setItem("foo", "42");
            expect(store.length).to.be(1);
        });
    });

    describe(".getItem(key)", function() {
        it("should return null for missing key", function() {
            expect(store.getItem("foo")).to.be(null);
        });

        it("should return value of previously set item", function() {
            store.setItem("foo", "42");
            expect(store.getItem("foo")).to.be("42");
        });

        it("should cast value to string", function() {
            store.setItem("foo", 42);
            expect(store.getItem("foo")).to.be("42");
        });
    });

    describe(".removeItem(key)", function() {
        it("should remove previously added key", function() {
            store.setItem("foo", "42");
            store.removeItem("foo");
            expect(store.length).to.be(0);
        });
    });

    describe(".key(index)", function() {
        it("should return name of nth key", function() {
            store.setItem("foo", "42");
            expect(store.key(0)).to.be("foo");
        });
    });

});
