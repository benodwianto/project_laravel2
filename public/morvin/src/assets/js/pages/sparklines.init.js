/*
Template Name: Morvin -  Admin & Dashboard Template
Author: Themesdesign
Contact: themesdesign.in@gmail.com
File: Sparkline
*/


$( document ).ready(function() {
    
  var DrawSparkline = function() {
      $('#sparkline1').sparkline([46, 38, 43, 35, 44, 45, 52, 46, 40], {
          type: 'line',
          width: "100%",
          height: '200',
          chartRangeMax: 50,
          lineColor: '#525ce5',
          fillColor: 'rgba(82, 92, 292, 0.3)',
          highlightLineColor: 'rgba(0,0,0,.1)',
          highlightSpotColor: 'rgba(0,0,0,.2)',
          maxSpotColor:false,
          minSpotColor: false,
          spotColor:false,
          lineWidth: 1
      });

      $('#sparkline1').sparkline([20, 28, 22, 24, 38, 32, 30, 24, 28], {
          type: 'line',
          width: "100%",
          height: '200',
          chartRangeMax: 40,
          lineColor: '#23c58f',
          fillColor: 'rgba(35, 197, 143, 0.3)',
          composite: true,
          highlightLineColor: 'rgba(0,0,0,.1)',
          highlightSpotColor: 'rgba(0,0,0,.2)',
          maxSpotColor:false,
          minSpotColor: false,
          spotColor:false,
          lineWidth: 1
      });
  
      $('#sparkline2').sparkline([9, 8, 7, 8, 6, 11, 5, 7, 9, 6, 4, 7, 11, 13, 9, 12], {
          type: 'bar',
          height: '200',
          barWidth: '10',
          barSpacing: '3',
          barColor: '#23c58f'
      });
      
      $('#sparkline3').sparkline([24, 36, 26, 14], {
          type: 'pie',
          width: '200',
          height: '200',
          sliceColors: ['#f14e4e', '#525ce5', '#23c58f', '#eeb148']
      });

      $('#sparkline5').sparkline([9, 8, 7, 8, 6, 11, 5, 7, 9, 6, 8, 7, 8, 13, 10, 12], {
          type: 'line',
          width: "100%",
          height: '200',
          lineColor: '#23c58f',
          lineWidth: 1,
          fillColor: 'rgba(17, 196, 110,0.2)',
          highlightLineColor: 'rgba(0,0,0,.1)',
          highlightSpotColor: 'rgba(0,0,0,.2)'
      });

      $('#sparkline5').sparkline([9, 8, 7, 8, 6, 11, 5, 7, 9, 6, 4, 7, 11, 13, 9, 12], {
          type: 'bar',
          height: '200',
          barWidth: '10',
          barSpacing: '5',
          composite: true,
          barColor: '#525ce5'
      });

      $("#sparkline6").sparkline([4, 6, 7, 7, 4, 3, 2, 1, 4, 4, 5, 6, 3, 4, 5, 8, 7, 6, 9, 3, 2, 4, 1, 5, 6, 4, 3, 7], {
          type: 'discrete',
          width: '280',
          height: '200',
          lineColor: '#0db4d6'
      });

      },
      DrawMouseSpeed = function () {
          var mrefreshinterval = 500; // update display every 500ms
          var lastmousex=-1; 
          var lastmousey=-1;
          var lastmousetime;
          var mousetravel = 0;
          var mpoints = [];
          var mpoints_max = 30;
          $('html').mousemove(function(e) {
              var mousex = e.pageX;
              var mousey = e.pageY;
              if (lastmousex > -1) {
                  mousetravel += Math.max( Math.abs(mousex-lastmousex), Math.abs(mousey-lastmousey) );
              }
              lastmousex = mousex;
              lastmousey = mousey;
          });
          var mdraw = function() {
              var md = new Date();
              var timenow = md.getTime();
              if (lastmousetime && lastmousetime!=timenow) {
                  var pps = Math.round(mousetravel / (timenow - lastmousetime) * 1000);
                  mpoints.push(pps);
                  if (mpoints.length > mpoints_max)
                      mpoints.splice(0,1);
                  mousetravel = 0;
                  $('#sparkline4').sparkline(mpoints, {
                      tooltipSuffix: ' pixels per second',
                      type: 'line',
                      width: "100%",
                      height: '200',
                      chartRangeMax: 77,
                      maxSpotColor:false,
                      minSpotColor: false,
                      spotColor:false,
                      lineWidth: 1,
                      lineColor: '#3d8ef8',
                      fillColor: 'rgba(61, 142, 248, 0.3)',
                      highlightLineColor: 'rgba(24,147,126,.1)',
                      highlightSpotColor: 'rgba(24,147,126,.2)'
                  });
              }
              lastmousetime = timenow;
              setTimeout(mdraw, mrefreshinterval);
          }
          // We could use setInterval instead, but I prefer to do it this way
          setTimeout(mdraw, mrefreshinterval); 
      };
  
  DrawSparkline();
  DrawMouseSpeed();
  
  var resizeChart;

  $(window).resize(function(e) {
      clearTimeout(resizeChart);
      resizeChart = setTimeout(function() {
          DrawSparkline();
          DrawMouseSpeed();
      }, 300);
  });
});