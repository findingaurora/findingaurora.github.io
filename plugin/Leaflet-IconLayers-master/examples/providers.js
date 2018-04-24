  (function(factory) {
      if (typeof module !== 'undefined' && module.exports) {
          module.exports = factory(require('leaflet'));
      } else {
          window.providers = factory(window.L);
      }
  })(function(L) {
      var providers = {};
      providers['Google'] = {
          title: 'Google地图',
          icon: '../plugin/Leaflet-IconLayers-master/examples/icons/google.png',
          layer: L.tileLayer.chinaProvider('Google.Normal.Map', {
              maxZoom: 13
          })
      };

      providers['Google-image'] = {
          title: 'Google影像图',
          icon: '../plugin/Leaflet-IconLayers-master/examples/icons/google-image.png',
          layer: L.tileLayer.chinaProvider('Google.Satellite.Map', {
              maxZoom: 13
          })
      };

      providers['OpenStreetMap_Mapnik'] = {
          title: 'openstreet',
          icon: '../plugin/Leaflet-IconLayers-master/examples/icons/openstreetmap_mapnik.png',
          layer: L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
              maxZoom: 19,
              attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          })
      };

      providers['OpenStreetMap_BlackAndWhite'] = {
          title: 'openstreet bw',
          icon: '../plugin/Leaflet-IconLayers-master/examples/icons/openstreetmap_blackandwhite.png',
          layer: L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
              maxZoom: 18,
              attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          })
      };

      providers['GeoQ-color'] = {
          title: 'GeoQ-color',
          icon: '../plugin/Leaflet-IconLayers-master/examples/icons/GeoQ.png',
          layer: L.tileLayer.chinaProvider('Geoq.Normal.Color', {
              attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
              subdomains: 'abcd',
              minZoom: 0,
              maxZoom: 20,
              ext: 'png'
          })
      };


      return providers;
  });