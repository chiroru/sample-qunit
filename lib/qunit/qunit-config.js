var count = 0;

QUnit.begin(function() {
    if (typeof(console) != "undefined") console.log("テスト開始");
});

QUnit.done(function() {
    if (typeof(console) != "undefined") console.log("テスト完了");
});

QUnit.moduleStart(function(context) {
    if (typeof(console) != "undefined") console.log("モジュール[" + context.name + "] のテスト開始");
});

QUnit.moduleDone(function(context) {
    if (typeof(console) != "undefined") {
        console.log("モジュール[" + context.name + "] のテスト完了"
                + "(失敗：" + context.failed + "/成功：" + context.passed + "/トータル:" + context.total + ")");
    }
});

QUnit.testStart(function(context) {
    count++;
    if (typeof(console) != "undefined") console.log("テストケース[" + count + ":" + context.name + "]開始");
});

QUnit.testDone(function(context) {
    if (typeof(console) != "undefined") {
        console.log("テストケース[" + count + ":" + context.name + "]完了"
        		+ "(失敗：" + context.failed + "/成功：" + context.passed + "/トータル:" + context.total + ")");
    }
});

QUnit.log(function(context) {
});
