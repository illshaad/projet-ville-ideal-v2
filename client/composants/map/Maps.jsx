/* eslint-disable react/no-array-index-key */
import React from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  MarkerClusterer,
} from "@react-google-maps/api";
import { PositionMaps, styledMap } from "../../styles/MapGoogle";
import { useDataCity } from "../../context/context";

const options = {
  styles: styledMap,
  strokeColor: "#c22420",
  strokeOpacity: 1.2,
  strokeWeight: 5,
  fillColor: "#c22420",
  fillOpacity: 0.5,
  clickable: true,
  editable: false,
  visible: true,
  radius: 300,
  zIndex: 1,
  zoomControl: true,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
  fullscreenControl: false,
};

export default function MapGoogle({ dataIleDeFrance }) {
  const { dinamiqueMarker, SetselectCityInfoWindows } = useDataCity();

  const mapStyles = {
    width: "auto",
    height: "720px",
  };

  return (
    <PositionMaps>
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_MAP_GOOGLE}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={dinamiqueMarker ? 15 : 11}
          center={
            (dinamiqueMarker && {
              lat: dinamiqueMarker?.lat,
              lng: dinamiqueMarker?.long,
            }) || {
              lat: 48.866667,
              lng: 2.333333,
            }
          }
          options={options}
        >
          <MarkerClusterer>
            {(clusterer) =>
              dataIleDeFrance.dataAll &&
              dataIleDeFrance.dataAll.map((item, index) => {
                const lagLng = {
                  lat: item.centre.coordinates[1],
                  lng: item.centre.coordinates[0],
                };

                return (
                  <Marker
                    index={index}
                    position={lagLng}
                    clusterer={clusterer}
                    onClick={() => SetselectCityInfoWindows([item])}
                  />
                );
              })
            }
          </MarkerClusterer>
        </GoogleMap>
      </LoadScript>
    </PositionMaps>
  );
}
