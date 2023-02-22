import mapboxgl from "mapbox-gl";
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import "./Map.scss";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import { useSelector, useDispatch } from "react-redux";
import { addTarget } from "../../reducers/targetsSlice";
import { v4 as uuidv4 } from "uuid";
import MapboxDraw from "@mapbox/mapbox-gl-draw";

mapboxgl.accessToken =
  "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA";

const Marker = ({ onClick, children, feature }) => {
  const _onClick = () => {
    onClick(feature.id);
  };

  return (
    <button onClick={_onClick} className="marker">
      {children}
    </button>
  );
};

const Map = () => {
  const mapContainerRef = useRef(null);
  const dispatch = useDispatch();
  const targets = useSelector((state) => state.targets.targets);
  const [mapInst, setMapInst] = useState();

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      attributionControl: false,
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/satellite-streets-v12",
      center: [-25.75974990820663, 37.85838746294672],
      zoom: 13,
      logoPosition: "bottom-left",
      pitch: 73.37724,
      bearing: 127.53,
      preserveDrawingBuffer: true,
    });

    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
    });

    setMapInst(map);

    geocoder.addTo("#geocoder-container");
    document.querySelector(".mapboxgl-ctrl-geocoder--icon").style.display =
      "none";
    document.querySelector(
      ".mapboxgl-ctrl-geocoder--icon-search"
    ).style.display = "none";

    document
      .getElementById("target-box")
      .addEventListener("click", function (e) {
        e.preventDefault();
        map.on("click", (e) => {
          const lng = e.lngLat.lng;
          const lat = e.lngLat.lat;
          dispatch(addTarget({ id: uuidv4(), lng, lat }));
        });
      });

    const draw_ = new MapboxDraw();
    map.addControl(draw_);

    document
      .getElementById("polygon-box")
      .addEventListener("click", function (e) {
        e.preventDefault();
        draw_.changeMode("draw_polygon");
      });

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    // Clean up on unmount
    return () => map.remove();
  }, []);

  useEffect(() => {
    console.log(targets);

    // Render custom marker components
    targets.forEach((feature) => {
      // Create a React ref
      const ref = React.createRef();
      // Create a new DOM node and save it to the React ref
      ref.current = document.createElement("div");
      // Render a Marker Component on our new DOM node
      ReactDOM.render(
        <Marker onClick={markerClicked} feature={feature} />,
        ref.current
      );

      // Create a Mapbox Marker at our new DOM node
      new mapboxgl.Marker(ref.current)
        .setLngLat([feature.lng, feature.lat])
        .addTo(mapInst);
    });
  }, [targets, mapInst]);

  const markerClicked = (id) => {
    console.log(id);
  };

  return <div className="map" id="map" ref={mapContainerRef} />;
};

export default Map;
