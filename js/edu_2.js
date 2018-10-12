curve('../json/dada_tow.json', '日期', '净值', 'money');
setInterval(function () {
    curve('../json/dada_tow.json', '日期', '净值', 'money');
}, 1000);

curve('../json/dada_tow.json', '日期', '平仓盈亏', 'clear');
setInterval(function () {
    curve('../json/dada_tow.json', '日期', '平仓盈亏', 'clear');
}, 1000);

