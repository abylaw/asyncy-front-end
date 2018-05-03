import GoogleMapsLoader from 'google-maps';

exports.onRouteUpdate = (_, pluginOptions) => {
  GoogleMapsLoader.KEY = pluginOptions.key;

  setTimeout(() => {
    const mapEl = document.getElementById(pluginOptions.mapElementId);

    mapEl && GoogleMapsLoader.load(function(google) {
      const map = new google.maps.Map(mapEl, pluginOptions.options);

      new google.maps.Marker({
        position: pluginOptions.marker,
        map: map,
      });
    });
  }, 0);
}