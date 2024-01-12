/*
Template Name: Morvin -  Admin & Dashboard Template
Author: Themesdesign
Contact: themesdesign.in@gmail.com
File: Dashboard
*/



// MAIN DASHBOARD

var options = {
    chart: {
        height: 380,
        type: 'bar',
        stacked: true,
        toolbar: {
            show: false
        },
        zoom: {
            enabled: true
        }
    },
    
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '20%',
            endingShape: 'rounded'
        },
    },

    dataLabels: {
        enabled: true
    },
    series: [{
        name: 'Earning',
        data: [5, 7, 7, 6, 7, 5, 7, 6, 7, 4, 6, 7]
    },{
        name: 'Paid',
        data: [5, 6, 4, 5, 6, 4, 3, 5, 4, 6, 4, 3]
    }],
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        
    },
    colors: ['#525ce5', '#edf1f5'],
    legend: {
        show: false
    },
    fill: {
        opacity: 1
    },
}

var chart = new ApexCharts(
    document.querySelector("#stacked-column-chart"),
    options
);

chart.render();




//   apex chart
var options1= {
    chart: {
        type: 'area',
        height: 80,
        sparkline: {
            enabled: true
        }
    }
    ,
    series: [ {
        data: [24, 66, 42, 88, 62, 24, 45, 12, 36, 10]
    }
    ],
    stroke: {
        curve: 'smooth', width: 2
    }
    ,
    colors: ['#525ce5'],
    tooltip: {
        fixed: {
            enabled: false
        }
        ,
        x: {
            show: false
        }
        ,
        y: {
            title: {
                formatter: function (seriesName) {
                    return ''
                }
            }
        }
        ,
        marker: {
            show: false
        }
    }
  }
  new ApexCharts(document.querySelector("#stastics-chart"), options1).render();



var options = {
    fill: {
      colors: ['#525ce5']
    },
    series: [70],
    chart: {
    type: 'radialBar',
    width: 65,
    height: 65,
    sparkline: {
      enabled: true
    }
  },
  dataLabels: {
    enabled: false
  },
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: '60%'
      },
      track: {
        margin: 0
      },
      dataLabels: {
        show: false
      }
    }
  }
  };
  
  var chart = new ApexCharts(document.querySelector("#list-chart-1"), options);
  chart.render();


  var options = {
    fill: {
      colors: ['#23c58f']
    },
    series: [80],
    chart: {
    type: 'radialBar',
    width: 65,
    height: 65,
    sparkline: {
      enabled: true
    }
  },
  dataLabels: {
    enabled: false
  },
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: '60%'
      },
      track: {
        margin: 0
      },
      dataLabels: {
        show: false
      }
    }
  }
  };
  
  var chart = new ApexCharts(document.querySelector("#list-chart-2"), options);
  chart.render();

      // MAp
      

      $('#world-map-markers').vectorMap({
        map : 'world_mill_en',
        normalizeFunction : 'polynomial',
        hoverOpacity : 0.7,
        hoverColor : false,
        regionStyle : {
            initial : {
                fill : '#dde3ec'
            }
        },
         markerStyle: {
            initial: {
                r: 9,
                'fill': '#525CE9',
                'fill-opacity': 0.9,
                'stroke': '#fff',
                'stroke-width' : 7,
                'stroke-opacity': 0.4
            },

            hover: {
                'stroke': '#fff',
                'fill-opacity': 1,
                'stroke-width': 1.5
            }
        },
        backgroundColor : 'transparent',
        markers : [{
            latLng : [41.90, 12.45],
            name : 'USA'
        }, {
            latLng : [12.05, -61.75],
            name : 'Russia'
        },{
            latLng : [1.3, 103.8],
            name : 'Australia'
        }]
});
