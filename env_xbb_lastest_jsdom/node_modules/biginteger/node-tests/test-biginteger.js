var BigInteger = require("../biginteger.js").BigInteger;

function AssertionFailed(message) {
    this.message = [].join.call(message, " ");
}

AssertionFailed.prototype = new Error();

function fail() {
    throw new AssertionFailed(arguments);
}

function assertSimilar(a, b) {
    if (a != b) {
        fail(a, "!=", b);
    }
}

function assertEquals(a, b) {
    if (a !== b) {
        fail(a, "!==", b);
    }
}

function assertArrayEquals(a, b) {
    if (a.length !== b.length) {
        fail("Arrays have different lengths: expected", a.length, "got", b.length);
    }
    for (var i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            fail("Arrays differ at element", i + ":", a[i], "!==", b[i]);
        }
    }
}

function assertArraySimilar(a, b) {
    if (a.length !== b.length) {
        fail("Arrays have different lengths: expected", a.length, "got", b.length);
    }
    for (var i = 0; i < a.length; i++) {
        if (a[i] != b[i]) {
            fail("Arrays differ at element", i + ":", a[i], "!=", b[i]);
        }
    }
}

function assertEqualsApprox(a, b, tolerance) {
    tolerance = tolerance || 1.0e-5;
    if (Math.abs(a - b) > tolerance) {
        fail(a, "!=", b);
    }
}

function assertTrue(a, message) {
    if (!a) {
        fail(message || (a + " is not true"));
    }
}

function assertFalse(a, message) {
    if (a) {
        fail(message || (a + "is not false"));
    }
}

function assertNaN(a) {
    if (!((typeof a == "number") && isNaN(a))) {
        fail(a, "is not NaN");
    }
}

function assertThrows(fn, pattern) {
    try {
        fn();
    }
    catch (ex) {
        if (pattern) {
            if (typeof pattern === "string") {
                assertEquals(pattern, ex.message);
            }
            else if (!pattern.test(ex.message)) {
                fail("incorrect exception:", ex.message);
            }
        }
        return;
    }

    fail("did not throw an exception");
}

function assertPropertyExists(obj, property) {
    if (property in obj) {
        if (obj[property] === undefined) {
            fail("property", property, "in object is undefined");
        }
        if (obj[property] === null) {
            fail("property", property, "in object is null");
        }
    }
    else {
        fail("property", property, "does not exist in object");
    }
}

function assertHasMethod(obj, method) {
    if (method in obj) {
        var f = obj[method];
        if (typeof f !== "function") {
            fail("'" + method + "'", "is not a function");
        }
    }
    else {
        fail("object does not contain method '" + method + "'");
    }
}

function runTests(testClass, verbose) {

    function getTests(obj, log, logPrefix) {

        function isTestName(fn) {
            return fn.substr(0, 4) === "test";
        }

        var tests = [];
        var f = null;

        for (var fn in obj) {
            if ((typeof(obj[fn]) === "function") && isTestName(fn)) {
                f = getFunction(fn, obj, log, logPrefix);
                f.testName = fn;
                tests.push(f);
            }
        }

        return tests;
    }

    function getFunction(name, obj, log, logPrefix) {
        if (name in obj && typeof(obj[name]) === "function") {
            if (log) {
                return function(message) {
                    console.log(logPrefix, message);
                    obj[name](log);
                };
            }
            else {
                return function() {
                    obj[name](log);
                }
            }
        }
        else {
            return function() {};
        }
    }

    function displayTest(tests, index) {
        return (index + 1) + "/" + tests.length + " (" + tests[index].testName + ")";
    }

    function displayTime(time) {
        if (time < 1000) {
            return (time / 1000) + "s";
        }

        var parts = [];

        if (time > 1000 * 60 * 60) {
            // hours
            parts.push(Math.floor(time / (1000 * 60 * 60)));
        }
        if (time > 1000 * 60) {
            // minutes
            parts.push(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        }
        parts.push((time % (1000 * 60))/ 1000.0);
        return parts.map(function (x, i) { return (i > 0 && x < 10 ? "0" : "") + x; }).join(":");
    }

    verbose = verbose || 0;

    var SHOW_PRE_POST = 2;
    var SHOW_RUN = 1;
    var SHOW_NONE = -1;

    var testObject;
    try {
        testObject = new testClass();
    }
    catch (ex) {
        if (verbose > SHOW_NONE) console.log("Could not instantiate test class:", ex.message);
        return false;
    }

    var tests    = getTests(testObject,                verbose >= SHOW_RUN,      "   ");
    var setup    = getFunction("setUp",    testObject, verbose >= SHOW_PRE_POST, "        Setting up test");
    var teardown = getFunction("tearDown", testObject, verbose >= SHOW_PRE_POST, "        Tearing down test");

    var ntest = tests.length;
    var npass = 0;

    if (ntest === 0) {
        if (verbose > SHOW_NONE) console.log("No Tests to run.");
        return false;
    }

    if (verbose > SHOW_NONE) console.log("Running Tests...");
    var startTime = new Date();

    for (var i = 0; i < ntest; i++) {
        var displayName = displayTest(tests, i);

        try { setup(displayName); }
        catch(ex) {
            if (verbose > SHOW_NONE) console.log("setUp failed for test", displayName + ":", ex.message);
            return false;
        }

        try {
            tests[i](displayName);
            npass++;
        }
        catch (ex) {
            if (verbose > SHOW_NONE) console.log("Failed", displayName + ":", ex.message);
        }

        try { teardown(displayName); }
        catch(ex) {
            if (verbose > SHOW_NONE) console.log("tearDown failed for test", displayName + ":", ex.message);
            return false;
        }
    }

    var endTime = new Date();
    var elapsed = endTime - startTime;
    if (verbose > SHOW_NONE) console.log("\nFinished in " + displayTime(elapsed));
    if (verbose > SHOW_NONE) console.log("Passed " + npass + "/" + ntest + " (" + (npass/ntest * 100).toFixed(2) + "%): " + ((npass === ntest) ? "PASS" : "FAIL"));

    return npass === ntest;
}

var testStrings = [
    "-1","-2","0",
    "60806103829201727642","6311612915668321104","72857166527346886","92943465","-48414711404820602860",
    "57637936","22132921","69269786631707","-5253733178","9511570882781","259580357648900890","92418648063",
    "9588638393973","291381770958","-386177060206595181","568","45","74","55","988439325760","2006543443808700",
    "1069098453","79799964926170716","5084968096321475","4","8452","457069814657032","30514941987010",
    "775231172","-517283489544939406","20892053861","936311839198780769","19618436088","7","1674508628301744",
    "13024584","-22500337651075","-8551735130057577","903380908177068729","2036547874980598","8","5836","1","2",
    "3","4","5","6","7","8","9","10","-3","-4","-5","-6","-7","-8","-9","-10","-11","-12","-99608",
    "-10382920172764259631161291566832110498728571665273468869392943465294841471140482060286063576379366322132921666926978663170724525373317846",
    "1157088278178259580357648900890859241864806376958863839397325291381770958183861770602065951818156880455074305",
    "59884393257606720065434438087005410690984535879799964926170716775084968096321475304418452574570698146570322630514941987010240775",
    "-1172290517283489544939406852089205386178936311839198780769751961843","88","78716745",
    "-62830174493130245841622500337651075078551735130057577990903380908177068729572036547874980598308615836957947097531639434378385662007612195835738520240851492479820084794237",
    "186584847831855051371620112806257408623512415396284950662844187803996672517802144153048620046442071246772010940398135071352737249628365452884576153529405652404446967865012969",
    "29345943771049638448341763000882111422888869776329135051738765553372901428808277728681262509298083850142596121922395107683607562149684613672741812462867438468129481833454428891",
    "37002422595522161032086725924934617976428107255803333508613776941553061663685318873827666814514069881821456625761423079496362499025456096895",
    "398515777680123136680192434809946769445426177827640125940511670935",
    "609675204133978287633625528598941105000580436935869275085195396511118657",
    "-1837136452135876595090550153572873896770651284584639295180294340451197182366215393646776507208945963806918500036871565004942392689",
    "100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001","-81476721982",
    "277460220803170133683867392965292283112343804101723022926366400443977002252439890142191924145722",
    "-92641540038838004562939772","-6200332365770319240482082941470115079599077007166534745743189064",
    "49322023916480219931134361554779109184328608328288970393765456338166453156711394763089925921351717462304949844030257888954892465078891795224360276323254119437225715082044426",
    "6210519985880524850605465904155380215027236600816531155434179432768928168336607689660372950027916871196753780651842392",
    "741726877267167619973325056129665793788090097446918345851946144674659150945563383288173470555019454324813728624538707250061357818563470553275478682986167042300023900431181658126",
    "281730631083492345939880995488156886227560025405478318560679548823005924860027080130180488567341041504647761475086105739806209157598562028",
    "10666593355947573327272706917131734751210128203987445873731",
    "-4058609845030255322787927324697291767462212839343543404480173027642001084243712955124167160014073282561256047537514271126812692432828445",
    "455488708838288456390976738",
    "-56476027754399235337367077671129335454475297890272086473917042777774357035192523962600412743390371480817482968845011802503481654919628674396676679172793008943130",
    "999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999",
    "-999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999",
    "331582054172310013635181905646204661989171235666401937872152206243737362946",
    "7788756649308352170040978424345039101369279128462",
    "3878182266978880305749543422914777569229636428599764504429913656112581921875376162093486587388727",
    "4227224306971170988716827185870519579782234150611831494926052243428192243517312221765490067054576722892784347440519",
    "9296774590944767474820600872642800769619683318924936104009986193324803815411614362179498856768115670315738686032176477835121223726227113448428529006128447204",
    "-3637207813391075449499802309344516805263882000874223693582254353805168176127378"
];

var testValues1 = testStrings.map(BigInteger);
var testValues2 = testStrings.map(BigInteger);

var shortTestStrings = [
    "-1","-2","0",
    "92943465", "568","74","1","2","3","4","5","6","7","8","9","10","-3","-4","-5","-6","-7","-8","-9","-10","-11","-12",
    "-10382920172764259631161291566832110498728571665273468869392943465294841471140482060286063576379366322132921666926978663170724525373317846",
    "1157088278178259580357648900890859241864806376958863839397325291381770958183861770602065951818156880455074305",
    "99999", "-99999"
];
var shortTestValues = shortTestStrings.map(BigInteger);
var powValues = [
    -9876543210,
    -3210,
    -1000,
    -123,
    -100,
    -99,
    -11,
    -10,
    -9,
    -3,
    -2,
    -1,
    0,
    1,
    2,
    3,
    9,
    10,
    11,
    99,
    100,
    123,
    1000,
    9876543210
].map(BigInteger);

function getAnswers(file) {
    file = "./expected/" + file + ".js";
    var answers = require(file);
    return answers;
}

var addResults = getAnswers("add");
var subtractResults = getAnswers("subtract");
var multiplyResults = getAnswers("multiply");
var divRemResults = getAnswers("divRem");
var negateResults = getAnswers("negate");
var nextResults = getAnswers("next");
var prevResults = getAnswers("prev");
var absResults = getAnswers("abs");
var compareAbsResults = getAnswers("compareAbs");
var compareResults = getAnswers("compare");
var isUnitResults = getAnswers("isUnit");
var isZeroResults = getAnswers("isZero");
var isPositiveResults = getAnswers("isPositive");
var isNegativeResults = getAnswers("isNegative");
var squareResults = getAnswers("square");
var isEvenResults = getAnswers("isEven");
var isOddResults = getAnswers("isOdd");
var signResults = getAnswers("sign");
var exp10Results = getAnswers("exp10");
var powResults = getAnswers("pow");
var modPowResults = getAnswers("modPow");

function runUnaryOperationTest(expect, test, values) {
    values = values || testValues1;

    var n = values.length;
    for (var i = 0; i < n; i++) {
        var expected = expect[i];
        var result = test(values[i]);
        if (result instanceof BigInteger) {
            checkBigInteger(result);
        }
        if (expected !== result) {
            fail(i + ": expected <" + expected + "> got <" + result + ">");
        }
    }
}

function runBinaryOperationTest(expect, test, values1, values2) {
    values1 = values1 || testValues1;
    values2 = values2 || testValues2;

    var n1 = values1.length;
    var n2 = values2.length;
    for (var i = 0; i < n1; i++) {
        for (var j = 0; j < n2; j++) {
            var expected = expect[i * n2 + j];
            var result = test(values1[i], values2[j]);
            if (expected !== result) {
                fail(i + "," + j + ": expected <" + expected + "> got <" + result + ">");
            }
        }
    }
}

function runTrinaryOperationTest(expect, test, values1, values2, values3) {
    values1 = values1 || testValues1;
    values2 = values2 || testValues2;
    values3 = values3 || shortTestValues;

    var n1 = values1.length;
    var n2 = values2.length;
    var n3 = values3.length;
    for (var i = 0; i < n1; i++) {
        for (var j = 0; j < n2; j++) {
            for (var k = 0; k < n3; k++) {
                var expected = expect[(i * n2 + j) * n3 + k];
                var result = test(values1[i], values2[j], values3[k]);
                if (result instanceof BigInteger) {
                    checkBigInteger(result);
                }
                if (expected !== result) {
                    fail([i,j,k].join(",") + ": expected <" + expected + "> got <" + result + ">");
                }
            }
        }
    }
}

function runShortBinaryOperationTest(expect, test) {
    runBinaryOperationTest(expect, test, testValues1, shortTestValues);
}

function checkBigInteger(n, d, s) {
    assertPropertyExists(n, "_d");
    assertPropertyExists(n, "_s");

    var sign = n._s;
    var digits = n._d;

    if (sign === 0) {
        assertTrue(digits.length === 0, "sign is zero, but array length is " + digits.length);
    }
    if (digits.length === 0) {
        assertTrue(sign === 0, "array length is zero, but sign is " + sign);
    }
    assertTrue(sign === 0 || sign === 1 || sign === -1, "sign is not one of {-1, 0, 1}: " + sign);

    assertTrue(digits.length >= 0, "invalid digits array");
    if (digits.length > 0) {
        assertTrue(digits[digits.length - 1], "leading zero");
    }

    if (d) {
        assertArrayEquals(d, digits);
    }
    if (s) {
        assertEquals(s, sign);
    }
}

function testConstructor() {
    var n = BigInteger._construct([], 1);
    checkBigInteger(n, [], 0);

    n = BigInteger._construct([0,0,0], 1);
    checkBigInteger(n, [], 0);

    n = BigInteger._construct([1], 1);
    checkBigInteger(n, [1], 1);

    n = BigInteger._construct([2,0], 1);
    checkBigInteger(n, [2], 1);

    n = BigInteger._construct([3], 0);
    checkBigInteger(n, [3], 1);

    n = BigInteger._construct([4], -1);
    checkBigInteger(n, [4], -1);

    n = BigInteger._construct([1,2,3], -1);
    checkBigInteger(n, [1,2,3], -1);

    var a = [3,2,1];
    n = BigInteger._construct(a, 1);
    a.unshift(4);
    checkBigInteger(n, [4,3,2,1], 1);
};

function testConversion() {
    var n = BigInteger(-1);
    checkBigInteger(n, [1], -1);

    var n = BigInteger(-123);
    checkBigInteger(n, [123], -1);

    var n = BigInteger(4567);
    checkBigInteger(n, [4567], 1);

    var n = BigInteger("+42");
    checkBigInteger(n, [42], 1);

    var n = BigInteger("23x10^5");
    checkBigInteger(n, BigInteger.base_log10 === 7 ? [2300000] : [0, 230], 1);

    var n = BigInteger("3425 x 10 ^ -2");
    checkBigInteger(n, [34], 1);

    var n = BigInteger("342.5 x 10 ^ -2");
    checkBigInteger(n, [3], 1);

    var n = BigInteger("-23x10^5");
    checkBigInteger(n, BigInteger.base_log10 === 7 ? [2300000] : [0, 230], -1);

    var n = BigInteger("-3425 x 10 ^ -2");
    checkBigInteger(n, [34], -1);

    var n = BigInteger("23.45x10^5");
    checkBigInteger(n, BigInteger.base_log10 === 7 ? [2345000] : [5000, 234], 1);

    var n = BigInteger("3425e-12");
    checkBigInteger(n, [], 0);

    var n = BigInteger("-3425e8");
    checkBigInteger(n, BigInteger.base_log10 === 7 ? [0, 34250] : [0, 0, 3425], -1);

    var n = BigInteger("3425e-12");
    checkBigInteger(n, [], 0);

    var n = BigInteger("+3425e0");
    checkBigInteger(n, [3425], 1);

    var n = BigInteger("0xDeadBeef");
    checkBigInteger(n, BigInteger.base_log10 === 7 ? [5928559, 373] : [8559, 3592, 37], 1);

    var n = BigInteger("-0c715");
    checkBigInteger(n, [461], -1);

    var n = BigInteger("+0b1101");
    checkBigInteger(n, [13], 1);
};

function testParse() {
    var n;
    n = BigInteger.parse("0", 10);
    checkBigInteger(n, [], 0);

    n = BigInteger.parse("");
    checkBigInteger(n, [], 0);

    n = BigInteger.parse("1");
    checkBigInteger(n, [1], 1);

    n = BigInteger.parse("-1");
    checkBigInteger(n, [1], -1);

    n = BigInteger.parse("+42", 10);
    checkBigInteger(n, [42], 1);

    n = BigInteger.parse("+42", 5);
    checkBigInteger(n, [22], 1);

    n = BigInteger.parse("23x10^5");
    checkBigInteger(n, BigInteger.base_log10 === 7 ? [2300000] : [0, 230], 1);

    n = BigInteger.parse("3425 x 10 ^ -2");
    checkBigInteger(n, [34], 1);

    n = BigInteger.parse("342.5 x 10 ^ -2");
    checkBigInteger(n, [3], 1);

    n = BigInteger.parse("-23x10^5");
    checkBigInteger(n, BigInteger.base_log10 === 7 ? [2300000] : [0, 230], -1);

    n = BigInteger.parse("-3425 x 10 ^ -2");
    checkBigInteger(n, [34], -1);

    n = BigInteger.parse("23.45x10^5");
    checkBigInteger(n, BigInteger.base_log10 === 7 ? [2345000] : [5000, 234], 1);

    n = BigInteger.parse("3425e-12");
    checkBigInteger(n, [], 0);

    n = BigInteger.parse("-3425e8");
    checkBigInteger(n, BigInteger.base_log10 === 7 ? [0, 34250] : [0,0,3425], -1);

    n = BigInteger.parse("-3425e-12");
    checkBigInteger(n, [], 0);

    n = BigInteger.parse("+3425e0");
    checkBigInteger(n, [3425], 1);

    n = BigInteger.parse("0xDeadBeef");
    checkBigInteger(n, BigInteger.base_log10 === 7 ? [5928559, 373] : [8559, 3592, 37], 1);

    n = BigInteger.parse("12abz", 36);
    checkBigInteger(n, BigInteger.base_log10 === 7 ? [1786319] : [6319, 178], 1);

    n = BigInteger.parse("-0c715");
    checkBigInteger(n, [461], -1);

    n = BigInteger.parse("+0b1101");
    checkBigInteger(n, [13], 1);

    n = BigInteger.parse("1011", 2);
    checkBigInteger(n, [11], 1);

    n = BigInteger.parse("1011", 3);
    checkBigInteger(n, [31], 1);

    n = BigInteger.parse("1011", 4);
    checkBigInteger(n, [69], 1);

    n = BigInteger.parse("1011", 5);
    checkBigInteger(n, [131], 1);

    n = BigInteger.parse("1011", 6);
    checkBigInteger(n, [223], 1);

    n = BigInteger.parse("1011", 7);
    checkBigInteger(n, [351], 1);

    n = BigInteger.parse("1011", 10);
    checkBigInteger(n, [1011], 1);

    n = BigInteger.parse("1011", 11);
    checkBigInteger(n, [1343], 1);

    n = BigInteger.parse("1011", 12);
    checkBigInteger(n, [1741], 1);

    n = BigInteger.parse("1011", 15);
    checkBigInteger(n, [3391], 1);

    n = BigInteger.parse("1011", 16);
    checkBigInteger(n, [4113], 1);

    n = BigInteger.parse("1011", 36);
    checkBigInteger(n, BigInteger.base_log10 === 7 ? [46693] : [6693, 4], 1);

    n = BigInteger.parse("0b", 16);
    checkBigInteger(n, [11], 1);

    n = BigInteger.parse("0c", 16);
    checkBigInteger(n, [12], 1);

    n = BigInteger.parse("0b12", 16);
    checkBigInteger(n, [2834], 1);

    n = BigInteger.parse("0c12", 16);
    checkBigInteger(n, [3090], 1);

    n = BigInteger.parse("0b101", 2);
    checkBigInteger(n, [5], 1);

    n = BigInteger.parse("0c101", 8);
    checkBigInteger(n, [65], 1);

    n = BigInteger.parse("0x101", 16);
    checkBigInteger(n, [257], 1);

    BigInteger.parse("1", 2);
    BigInteger.parse("2", 3);
    BigInteger.parse("3", 4);
    BigInteger.parse("4", 5);
    BigInteger.parse("5", 6);
    BigInteger.parse("6", 7);
    BigInteger.parse("7", 8);
    BigInteger.parse("8", 9);
    BigInteger.parse("9", 10);

    BigInteger.parse("a", 11);
    BigInteger.parse("b", 12);
    BigInteger.parse("c", 13);
    BigInteger.parse("d", 14);
    BigInteger.parse("e", 15);
    BigInteger.parse("f", 16);
    BigInteger.parse("g", 17);
    BigInteger.parse("h", 18);
    BigInteger.parse("i", 19);
    BigInteger.parse("j", 20);

    BigInteger.parse("k", 21);
    BigInteger.parse("l", 22);
    BigInteger.parse("m", 23);
    BigInteger.parse("n", 24);
    BigInteger.parse("o", 25);
    BigInteger.parse("p", 26);
    BigInteger.parse("q", 27);
    BigInteger.parse("r", 28);
    BigInteger.parse("s", 29);
    BigInteger.parse("t", 30);

    BigInteger.parse("u", 31);
    BigInteger.parse("v", 32);
    BigInteger.parse("w", 33);
    BigInteger.parse("x", 34);
    BigInteger.parse("y", 35);
    BigInteger.parse("z", 36);
};

function testParseFail() {
    function createTest(s, radix) {
        if (arguments.length < 2) {
            radix = 10;
        }
        return function() { BigInteger.parse(s, radix); };
    }

    var radixError  = /^Illegal radix \d+./;
    var digitError  = /^Bad digit for radix \d+/;
    var formatError = /^Invalid BigInteger format: /;

    assertThrows(createTest("0", 1), radixError);
    assertThrows(createTest("0", 37), radixError);

    assertThrows(createTest("+ 42", 10), formatError);
    assertThrows(createTest("3425 x 10 ^ - 2"), formatError);
    assertThrows(createTest("34e-2", 16), formatError);
    assertThrows(createTest("- 23x10^5"), formatError);
    assertThrows(createTest("-+3425"), formatError);
    assertThrows(createTest("3425e-"), formatError);
    assertThrows(createTest("52", 5), digitError);
    assertThrows(createTest("23a105"), digitError);
    assertThrows(createTest("DeadBeef", 15), digitError);
    assertThrows(createTest("-0C715", 10), digitError);
    assertThrows(createTest("-0x715", 10), digitError);
    assertThrows(createTest("-0b715", 10), digitError);
    assertThrows(createTest("-0x715", 8), digitError);
    assertThrows(createTest("-0b715", 8), digitError);
    assertThrows(createTest("-0C715", 2), digitError);
    assertThrows(createTest("-0x715", 2), digitError);

    assertThrows(createTest("2", 2), digitError);
    assertThrows(createTest("3", 3), digitError);
    assertThrows(createTest("4", 4), digitError);
    assertThrows(createTest("5", 5), digitError);
    assertThrows(createTest("6", 6), digitError);
    assertThrows(createTest("7", 7), digitError);
    assertThrows(createTest("8", 8), digitError);
    assertThrows(createTest("9", 9), digitError);
    assertThrows(createTest("a", 10), digitError);
    assertThrows(createTest("b", 11), digitError);
    assertThrows(createTest("c", 12), digitError);
    assertThrows(createTest("d", 13), digitError);
    assertThrows(createTest("e", 14), digitError);
    assertThrows(createTest("f", 15), digitError);
    assertThrows(createTest("g", 16), digitError);
    assertThrows(createTest("h", 17), digitError);
    assertThrows(createTest("i", 18), digitError);
    assertThrows(createTest("j", 19), digitError);
    assertThrows(createTest("k", 20), digitError);
    assertThrows(createTest("l", 21), digitError);
    assertThrows(createTest("m", 22), digitError);
    assertThrows(createTest("n", 23), digitError);
    assertThrows(createTest("o", 24), digitError);
    assertThrows(createTest("p", 25), digitError);
    assertThrows(createTest("q", 26), digitError);
    assertThrows(createTest("r", 27), digitError);
    assertThrows(createTest("s", 28), digitError);
    assertThrows(createTest("t", 29), digitError);
    assertThrows(createTest("u", 30), digitError);
    assertThrows(createTest("v", 31), digitError);
    assertThrows(createTest("w", 32), digitError);
    assertThrows(createTest("x", 33), digitError);
    assertThrows(createTest("y", 34), digitError);
    assertThrows(createTest("z", 35), digitError);
};

function testToString() {
    var narray = [
        BigInteger._construct([], 1),
        BigInteger(-1),
        BigInteger(-123),
        BigInteger(456),
        BigInteger("+42"),
        BigInteger("23x10^5"),
        BigInteger("342.5 x 10 ^ -2"),
        BigInteger("-23x10^5"),
        BigInteger("-3425 x 10 ^ -2"),
        BigInteger("23.45x10^5"),
        BigInteger("3425e-12"),
        BigInteger("-3425e8"),
        BigInteger("+3425e0").toString(10),
        BigInteger("0xDeadBeef").toString(16),
        BigInteger("-0c715").toString(8),
        BigInteger("+0b1101").toString(2),
        BigInteger.parse("+42", 5).toString(10),
        BigInteger.parse("+42", 5).toString(5),
        BigInteger.parse("12abz", 36).toString(36),
        BigInteger.parse("-0c715"),
    ];
    var sarray = [
        "0",
        "-1",
        "-123",
        "456",
        "42",
        "2300000",
        "3",
        "-2300000",
        "-34",
        "2345000",
        "0",
        "-342500000000",
        "3425",
        "DEADBEEF",
        "-715",
        "1101",
        "22",
        "42",
        "12ABZ",
        "-461"
    ];

    assertArraySimilar(sarray, narray);
    assertArraySimilar(testStrings, testValues1);
};

function testConstants() {
    assertEquals(37, BigInteger.small.length);

    checkBigInteger(BigInteger.small[0], [], 0);
    checkBigInteger(BigInteger._0, [], 0);
    checkBigInteger(BigInteger.ZERO, [], 0);
    checkBigInteger(BigInteger._1, [1], 1);
    checkBigInteger(BigInteger.ONE, [1], 1);
    checkBigInteger(BigInteger.M_ONE, [1], -1);

    for (var i = 1; i <= 36; i++) {
        checkBigInteger(BigInteger.small[i], [i], 1);
    }

    checkBigInteger(BigInteger.MAX_EXP, null, 1);
};

function testToJSValue() {
    var narray = [
        BigInteger._construct([], 1).toJSValue(),
        BigInteger(-1).toJSValue(),
        BigInteger(-123).toJSValue(),
        BigInteger(456).toJSValue(),
        BigInteger("+42").toJSValue(),
        BigInteger("23x10^5").toJSValue(),
        BigInteger("342.5 x 10 ^ -2").toJSValue(),
        BigInteger("-23x10^5").toJSValue(),
        BigInteger("-3425 x 10 ^ -2").toJSValue(),
        BigInteger("23.45x10^5").toJSValue(),
        BigInteger("3425e-12").toJSValue(),
        BigInteger("-3425e8").toJSValue(),
        BigInteger("+3425e0").toJSValue(),
        BigInteger("0xDeadBeef").toJSValue(),
        BigInteger("-0c715").toJSValue(),
        BigInteger("+0b1101").toJSValue(),
        BigInteger.parse("+42", 5).toJSValue(),
        BigInteger.parse("+42", 5).toJSValue(),
        BigInteger.parse("12abz", 36).toJSValue(),
        BigInteger.parse("-0C715").toJSValue()
    ];
    var jsarray = [
        0,
        -1,
        -123,
        456,
        42,
        parseInt("2300000", 10),
        parseInt("3", 10),
        parseInt("-2300000", 10),
        parseInt("-34", 10),
        parseInt("2345000", 10),
        parseInt("0", 10),
        parseInt("-342500000000", 10),
        parseInt("3425", 10),
        parseInt("DeadBeef", 16),
        parseInt("-715", 8),
        parseInt("1101", 2),
        parseInt("22", 10),
        parseInt("42", 5),
        parseInt("12ABZ", 36),
        parseInt("-461", 10)
    ];

    assertArrayEquals(jsarray, narray);
    assertArrayEquals(testStrings.map(Number), testValues1.map(Number));
};

function testValueOf() {
    var narray = [
        +BigInteger._construct([], 1),
        +BigInteger(-1),
        +BigInteger(-123),
        +BigInteger(456),
        +BigInteger("+42"),
        +BigInteger("23x10^5"),
        +BigInteger("342.5 x 10 ^ -2"),
        +BigInteger("-23x10^5"),
        +BigInteger("-3425 x 10 ^ -2"),
        +BigInteger("23.45x10^5"),
        +BigInteger("3425e-12"),
        +BigInteger("-3425e8"),
        +BigInteger("+3425e0"),
        +BigInteger("0xDeadBeef"),
        +BigInteger("-0c715"),
        +BigInteger("+0b1101"),
        +BigInteger.parse("+42", 5),
        +BigInteger.parse("+42", 5),
        +BigInteger.parse("12abz", 36),
        +BigInteger.parse("-0c715")
    ];
    var jsarray = [
        0,
        -1,
        -123,
        456,
        42,
        parseInt("2300000", 10),
        parseInt("3", 10),
        parseInt("-2300000", 10),
        parseInt("-34", 10),
        parseInt("2345000", 10),
        parseInt("0", 10),
        parseInt("-342500000000", 10),
        parseInt("3425", 10),
        parseInt("DeadBeef", 16),
        parseInt("-715", 8),
        parseInt("1101", 2),
        parseInt("22", 10),
        parseInt("42", 5),
        parseInt("12ABZ", 36),
        parseInt("-461", 10)
    ];

    assertArrayEquals(jsarray, narray);
    assertArrayEquals(testStrings.map(Number), testValues1.map(Number));
};

function testAdd() {
    runBinaryOperationTest(addResults, function(a, b) {
        return a.add(b).toString();
    });
};

function testSubtract() {
    runBinaryOperationTest(subtractResults, function(a, b) {
        return a.subtract(b).toString();
    });
};

function testMultiply() {
    runBinaryOperationTest(multiplyResults, function(a, b) {
        return a.multiply(b).toString();
    });
};

function testDivRem() {
    runBinaryOperationTest(divRemResults, function(a, b) {
        try {
            return a.divRem(b).toString();
        }
        catch (e) {
            return e.message;
        }
    });
};

function testNegate() {
    runUnaryOperationTest(negateResults, function(a) {
        return a.negate().toString();
    });
};

function testNext() {
    runUnaryOperationTest(nextResults, function(a) {
        return a.next().toString();
    });
};

function testPrev() {
    runUnaryOperationTest(prevResults, function(a) {
        return a.prev().toString();
    });
};

function testAbs() {
    runUnaryOperationTest(absResults, function(a) {
        return a.abs().toString();
    });
};

function testCompareAbs() {
    runBinaryOperationTest(compareAbsResults, function(a, b) {
        return a.compareAbs(b);
    });
};

function testCompare() {
    runBinaryOperationTest(compareResults, function(a, b) {
        return a.compare(b);
    });
};

function testIsUnit() {
    runUnaryOperationTest(isUnitResults, function(a) {
        return a.isUnit();
    });
};

function testIsZero() {
    runUnaryOperationTest(isZeroResults, function(a) {
        return a.isZero();
    });
};

function testIsPositive() {
    runUnaryOperationTest(isPositiveResults, function(a) {
        return a.isPositive();
    });
};

function testIsNegative() {
    runUnaryOperationTest(isNegativeResults, function(a) {
        return a.isNegative();
    });
};

function testSquare() {
    runUnaryOperationTest(squareResults, function(a) {
        return a.square().toString();
    });
};

function testIsEven() {
    runUnaryOperationTest(isEvenResults, function(a) {
        return a.isEven();
    });
};

function testIsOdd() {
    runUnaryOperationTest(isOddResults, function(a) {
        return a.isOdd();
    });
};

function testSign() {
    runUnaryOperationTest(signResults, function(a) {
        return a.sign();
    });
};

function testExp10() {
    runShortBinaryOperationTest(exp10Results, function(a, b) {
        if (Math.abs(Number(b)) > 1000) {
            b = Number(BigInteger.MAX_EXP.next());
        }
        try {
            return a.exp10(b).toString();
        }
        catch (e) {
            return e.message;
        }
    });
};

function testPow() {
    runBinaryOperationTest(powResults, function(a, b) {
        try {
            return a.pow(b).toString();
        }
        catch (e) {
            return e.message;
        }
    },
    powValues, powValues);
};

function testModPow() {
    runTrinaryOperationTest(modPowResults, function(a, b, c) {
        try {
            return a.modPow(b, c).toString();
        }
        catch (e) {
            return e.message;
        }
    },
    powValues, powValues, powValues);
};


function TestBigInteger() {
    this.start = new Date();
}

TestBigInteger.prototype = {
/* Basic Functions */
    testConstructor: testConstructor,
    testConstants: testConstants,
    testConversion: testConversion,
    testParse: testParse,
    testParseFail: testParseFail,
    testToString: testToString,
    testToJSValue: testToJSValue,
    testValueOf: testValueOf,
/* Unary Functions */
    testNegate: testNegate,
    testNext: testNext,
    testPrev: testPrev,
    testAbs: testAbs,
    testSquare: testSquare,
/* Binary Functions */
    testAdd: testAdd,
    testSubtract: testSubtract,
    testMultiply: testMultiply,
    testDivRem: testDivRem,
    testExp10: testExp10,
/* Slow Binary Functions */
    testPow: testPow,
/* Comparisons/Information */
    testCompareAbs: testCompareAbs,
    testCompare: testCompare,
    testIsUnit: testIsUnit,
    testIsZero: testIsZero,
    testIsPositive: testIsPositive,
    testIsNegative: testIsNegative,
    testIsEven: testIsEven,
    testIsOdd: testIsOdd,
    testSign: testSign,
/* Trinary Functions */
    testModPow: testModPow,

/* Keep track of the time for each test */
    tearDown: function(show) {
        if (show) {
            var end = new Date();
            console.log("        Completed in " + (end - this.start) + "ms");
            this.start = new Date();
        }
    }
};

function generate() {
    // (echo 'var answers = ['; js test-biginteger.js | bc | sed -e :a -e '/\\$/N; s/\\\n//; ta' -e 's/^/\t"/' -e 's/$/",/'; echo '];') >expected/xxx.js

    console.log("scale = 0");
    runTrinaryOperationTest(new Array(testValues1.length * testValues2.length), function(a, b, c) {
        //console.log('console.log (' + a + ' / ' + b + '), ",", (' + a + ' % ' + b + '), "\\n"');
        //console.log("a = " + a + "; b = " + b + "; if (a == b) { 0 } else { if (a < b) { -1 } else { 1 } }");
        //console.log("if (" + a + " == 0) { 0 } else { (" + a + ") / abs(" + a + ") }");
        console.log("modexp(" + a + "," + b + "," + c + ")");
        return undefined;
    }, powValues, powValues, powValues);
    quit();
}

runTests(TestBigInteger, +arguments[0]);
