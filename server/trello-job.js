var assert = require('assert');

function hash (s) {
    var h = 7;
    var letters = "acdegilmnoprstuw";
    for (var i = 0; i < s.length; i++) {
        h = (h * 37 + letters.indexOf(s[i]))
    }
    return h;
}

function unhash (h) {
    var s = "";
    var letters = "acdegilmnoprstuw";

    while (h > 7) {
        var index = h % 37;

        if (index >= letters.length) {
            return "error";
        }

        s = letters[index] + s;

        h = Math.floor(h / 37);
    }

    if (h < 7) {
        return "error";
    }

    return s;
}

function test() {
    assert.equal(hash("leepadg"), 680131659347);
    assert.equal(hash("ac"), 9584);
    assert.equal(hash("a"), 259);

    assert.equal(unhash(275), "error");
    assert.equal(unhash(311), "error");
    assert.equal(unhash(9582), "error");

    assert.equal(unhash(259), "a");
    assert.equal(unhash(9584), "ac");
    assert.equal(unhash(680131659347), "leepadg");
}

test()

console.log("unhash(930846109532517) = " + unhash(930846109532517));
