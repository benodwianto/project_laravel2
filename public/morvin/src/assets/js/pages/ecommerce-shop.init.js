/*
Template Name: Morvin -  Admin & Dashboard Template
Author: Themesdesign
Contact: themesdesign.in@gmail.com
File: Ecommerce Shop Js
*/


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
