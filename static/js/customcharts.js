Highcharts.chart('unemployment', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Unemployment Rates'
    },
    subtitle: {
        text: 'Click the columns to view versions. Source: <a href="http://chicagohealthatlas.org" target="_blank">chicagohealthatlas.org</a>'
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'Total percentage'
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },

    "series": [
        {
            "name": "Browsers",
            "colorByPoint": true,
            "data": [
                {
                    "name": "Chicago's West Side",
                    "y": 14.2,
                    "drilldown": "Chrome"
                },
                {
                    "name": "Loop",
                    "y": 5.3,
                    "drilldown": "Firefox"
                },
                {
                    "name": "Chicago City",
                    "y": 9.5,
                    "drilldown": "Internet Explorer"
                },

            ]
        }
    ],
    "drilldown": {
        "series": [
            {
                "name": "Chrome",
                "id": "Chrome",
                "data": [
                    [
                        "v65.0",
                        0.1
                    ],
                    [
                        "v64.0",
                        1.3
                    ],
                    [
                        "v63.0",
                        53.02
                    ],
                    [
                        "v62.0",
                        1.4
                    ],
                    [
                        "v61.0",
                        0.88
                    ],
                    [
                        "v60.0",
                        0.56
                    ],
                    [
                        "v59.0",
                        0.45
                    ],
                    [
                        "v58.0",
                        0.49
                    ],
                    [
                        "v57.0",
                        0.32
                    ],
                    [
                        "v56.0",
                        0.29
                    ],
                    [
                        "v55.0",
                        0.79
                    ],
                    [
                        "v54.0",
                        0.18
                    ],
                    [
                        "v51.0",
                        0.13
                    ],
                    [
                        "v49.0",
                        2.16
                    ],
                    [
                        "v48.0",
                        0.13
                    ],
                    [
                        "v47.0",
                        0.11
                    ],
                    [
                        "v43.0",
                        0.17
                    ],
                    [
                        "v29.0",
                        0.26
                    ]
                ]
            },
            {
                "name": "Firefox",
                "id": "Firefox",
                "data": [
                    [
                        "v58.0",
                        1.02
                    ],
                    [
                        "v57.0",
                        7.36
                    ],
                    [
                        "v56.0",
                        0.35
                    ],
                    [
                        "v55.0",
                        0.11
                    ],
                    [
                        "v54.0",
                        0.1
                    ],
                    [
                        "v52.0",
                        0.95
                    ],
                    [
                        "v51.0",
                        0.15
                    ],
                    [
                        "v50.0",
                        0.1
                    ],
                    [
                        "v48.0",
                        0.31
                    ],
                    [
                        "v47.0",
                        0.12
                    ]
                ]
            },
            {
                "name": "Internet Explorer",
                "id": "Internet Explorer",
                "data": [
                    [
                        "v11.0",
                        6.2
                    ],
                    [
                        "v10.0",
                        0.29
                    ],
                    [
                        "v9.0",
                        0.27
                    ],
                    [
                        "v8.0",
                        0.47
                    ]
                ]
            },
            {
                "name": "Safari",
                "id": "Safari",
                "data": [
                    [
                        "v11.0",
                        3.39
                    ],
                    [
                        "v10.1",
                        0.96
                    ],
                    [
                        "v10.0",
                        0.36
                    ],
                    [
                        "v9.1",
                        0.54
                    ],
                    [
                        "v9.0",
                        0.13
                    ],
                    [
                        "v5.1",
                        0.2
                    ]
                ]
            },
            {
                "name": "Edge",
                "id": "Edge",
                "data": [
                    [
                        "v16",
                        2.6
                    ],
                    [
                        "v15",
                        0.92
                    ],
                    [
                        "v14",
                        0.4
                    ],
                    [
                        "v13",
                        0.1
                    ]
                ]
            },
            {
                "name": "Opera",
                "id": "Opera",
                "data": [
                    [
                        "v50.0",
                        0.96
                    ],
                    [
                        "v49.0",
                        0.82
                    ],
                    [
                        "v12.1",
                        0.14
                    ]
                ]
            }
        ]
    }
});

/// Create the chart
Highcharts.chart('highschoolchart', {
    chart: {
        type: 'column'
    },
    title: {
    text: 'Population without a High School Degree'
},
subtitle: {
    text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
},
xAxis: {
    type: 'category'
},
yAxis: {
    title: {
        text: 'Total Percentage'
    }

},
legend: {
    enabled: false
},
plotOptions: {
    series: {
        borderWidth: 0,
        dataLabels: {
            enabled: true,
            format: '{point.y:.1f}%'
        }
    }
},

tooltip: {
    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
},

"series": [
    {
        "name": "Browsers",
        "colorByPoint": true,
        "data": [
            {
                "name": "Chicago's West Side",
                "y": 28.4,
                "drilldown": "West Side"
            },
            {
                "name": "The Loop",
                "y": 1.8,
                "drilldown": "The Loop"
            },
            {
                "name": "Chicago's Average",
                "y": 15.9,
                "drilldown": "Chicago Average"
            },

        ]
    }
],

});

// Create the chart household poverty
Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Household Poverty'
    },
    subtitle: {
        text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'Percentage'
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },

    "series": [
        {
            "name": "Browsers",
            "colorByPoint": true,
            "data": [
                {
                    "name": "Chicago's West Side",
                    "y": 27.2,
                    "drilldown": "Chrome"
                },
                {
                    "name": "The Loop",
                    "y": 14.6,
                    "drilldown": "Firefox"
                },
                {
                    "name": "Chicago's Average",
                    "y": 18.9,
                    "drilldown": "Internet Explorer"
                },

            ]
        }
    ],

});


// Make monochrome colors
var pieColors = (function () {
    var colors = [],
        base = Highcharts.getOptions().colors[0],
        i;

    for (i = 0; i < 10; i += 1) {
        // Start out with a darkened base color (negative brighten), and end
        // up with a much brighter color
        colors.push(Highcharts.Color(base).brighten((i - 3) / 7).get());
    }
    return colors;
}());

// Build the chart
Highcharts.chart('eastgarfieldpark', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'West Garfield Park'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            colors: pieColors,
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
                distance: -50,
                filter: {
                    property: 'percentage',
                    operator: '>',
                    value: 4
                }
            }
        }
    },
    series: [{
        name: 'Share',
        data: [
            { name: 'African-American', y: 88.4 },
            { name: 'Latino', y: 6.3 },
            { name: 'White', y: 4.3 },
            { name: 'Other', y: .9 },

        ]
    }]
});

// Make monochrome colors
var pieColors = (function () {
    var colors = [],
        base = Highcharts.getOptions().colors[0],
        i;

    for (i = 0; i < 10; i += 1) {
        // Start out with a darkened base color (negative brighten), and end
        // up with a much brighter color
        colors.push(Highcharts.Color(base).brighten((i - 3) / 7).get());
    }
    return colors;
}());

// Build the chart
Highcharts.chart('eastgarfielpark', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'East Garfield Park'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            colors: pieColors,
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
                distance: -50,
                filter: {
                    property: 'percentage',
                    operator: '>',
                    value: 4
                }
            }
        }
    },
    series: [{
        name: 'Share',
        data: [
            { name: 'African-American', y: 88.4 },
            { name: 'Latino', y: 6.3 },
            { name: 'White', y: 4.3 },
            { name: 'Other', y: .10 },

        ]
    }]
});




// Make monochrome colors
var pieColors = (function () {
    var colors = [],
        base = Highcharts.getOptions().colors[0],
        i;

    for (i = 0; i < 10; i += 1) {
        // Start out with a darkened base color (negative brighten), and end
        // up with a much brighter color
        colors.push(Highcharts.Color(base).brighten((i - 3) / 7).get());
    }
    return colors;
}());

// Build the chart
Highcharts.chart('northlawndale', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'North Lawndale'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            colors: pieColors,
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
                distance: -50,
                filter: {
                    property: 'percentage',
                    operator: '>',
                    value: 4
                }
            }
        }
    },
    series: [{
        name: 'Share',
        data: [
            { name: 'African-American', y: 87.8 },
            { name: 'Latino', y: 8.2 },
            { name: 'White', y: 2.2 },
            { name: 'Other', y: 1.7 },

        ]
    }]
});



Highcharts.chart('mortality', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Top Five Causes of Death on the West Side'
    },
    xAxis: {
        categories: ['West Garfield Park', 'North Lawndale', 'East Garfield Park', 'Austin', 'Humboldt Park', 'Near West Side', 'West Town', 'Belmont-Cragin', 'Lower West Side', 'South Lawndale']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Mortality per 100,000 Population by Community Area'
        }
    },
    legend: {
        reversed: true
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: [{
        name: 'Opioid-related overdose Deaths',
        data: [85, 86, 67, 50, 56, 30, 24, 17, 21, 12]
    }, {
        name: 'Injury Deaths',
        data: [133,101, 107, 89, 72, 51, 41, 36, 39, 43]
    },{
        name: 'Diabetes-related Deaths',
        data: [100,84,84,92,98,72,78,67,66,64]
    },{
        name: 'Cancer Deaths',
        data: [271, 266, 240, 258, 193, 194, 160, 158,158,142]
    }, {
        name: 'Heart Disease Deaths',
        data: [269, 244, 284, 258, 267, 199, 200, 189, 144, 155]
    }]
});


/// Create the chart
Highcharts.chart('smoking', {
    chart: {
        type: 'column'
    },
    title: {
    text: 'Health Behaviors: Smoking'
},
subtitle: {
    text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
},
xAxis: {
    type: 'category'
},
yAxis: {
    title: {
        text: 'Total Percentage'
    }

},
legend: {
    enabled: false
},
plotOptions: {
    series: {
        borderWidth: 0,
        dataLabels: {
            enabled: true,
            format: '{point.y:.1f}%'
        }
    }
},

tooltip: {
    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
},

"series": [
    {
        "name": "Browsers",
        "colorByPoint": true,
        "data": [
            {
                "name": "Chicago's West Side",
                "y": 20.4,
                "drilldown": "West Side"
            },
            {
                "name": "The Loop",
                "y": 9.8,
                "drilldown": "The Loop"
            },
            {
                "name": "Chicago's Average",
                "y": 18.4,
                "drilldown": "Chicago Average"
            },

        ]
    }
],

});

/// Create the chart
Highcharts.chart('smoking', {
    chart: {
        type: 'column'
    },
    title: {
    text: 'Health Behaviors: Smoking'
},
subtitle: {
    text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
},
xAxis: {
    type: 'category'
},
yAxis: {
    title: {
        text: 'Total Percentage'
    }

},
legend: {
    enabled: false
},
plotOptions: {
    series: {
        borderWidth: 0,
        dataLabels: {
            enabled: true,
            format: '{point.y:.1f}%'
        }
    }
},

tooltip: {
    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
},

"series": [
    {
        "name": "Browsers",
        "colorByPoint": true,
        "data": [
            {
                "name": "Chicago's West Side",
                "y": 20.4,
                "drilldown": "West Side"
            },
            {
                "name": "The Loop",
                "y": 9.8,
                "drilldown": "The Loop"
            },
            {
                "name": "Chicago's Average",
                "y": 18.4,
                "drilldown": "Chicago Average"
            },

        ]
    }
],

});
