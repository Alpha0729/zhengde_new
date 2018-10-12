function curve(cUrl, cName, cValue, cObj) {
    $.get(cUrl, function (data) {
        var time = [];
        var money = [];
        for (var i = 0; i < data.length; i++) {
            if (data[i][cName]) {
                time.push(data[i][cName]);
            }
            ;
            if (data[i][cValue]) {
                money.push(data[i][cValue]);
            }
            ;
        }
        ;
        var Max = Math.max.apply(null, money);
        var Min = Math.min.apply(null, money);
        var myChart = echarts.init(document.getElementById(cObj));
        // 指定图表的配置项和数据
        var option = {
            title: {
                show: false, /*//标题是否显示*/
                text: ['ECharts 测试'],
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                },
            },
            legend: {
                /*data:[1,2,3]*/
            },
            xAxis: {
                data: time
            }, //横坐标轴
            yAxis: {
                type: 'value',
                boundaryGap: ['100%', '100%'],

            },//纵坐标轴
            series: [{
                //color:'#ea9696',
                color: 'rgba(255,0,0,0.5)',
                name: '净值曲线',
                type: 'line',
                /*label: {  //显示顶点数据提示
                    normal: {
                        show: true,
                    }
                },*/
                data: money,
                markLine: {
                    silent: true,  //开启坐标轴
                    data: [/* {
                       yAxis: -1  //纵坐标数据提示，如果有提示该数据
                    }, {
                        yAxis: -0.5
                    }, {
                        yAxis: 1
                    },*/ {
                        yAxis: Math.ceil(Max / 2)
                    }, {

                        yAxis: Math.ceil(Max),
                    }]
                }
            }],
            visualMap: {  //
                right: 20, //曲线提示位置
                top: 20,//曲线提示位置

                pieces: [{  //数据分割位置
                    gt: Min, //起始位置
                    lte: 0,  //结束位置
                    color: '#096'  //假如在此区间显示该颜色
                }, {
                    gt: 0,
                    lte: Max,
                    color: '#cf101c'
                }]
            },
            dataZoom: [{
                type: 'inside', //运行鼠标滚轮放大
                /*start: 0, //初始显示位置
                end: money.length //结束显示位置*/
            },
                ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    })
};
