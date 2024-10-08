import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "w-screen",
  height: "400px",
};

const center = {
  lat: 8.465843,
  lng: -13.231365,
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAD7HAVZwdQ3ZW1q7L1yEthstoS-e0iJp4",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map: any) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
      <Marker
        label={"4 Reservation Road, Kenema, Sierra Leone"}
        position={center}
      />
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(Map);
