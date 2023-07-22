import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { slides } from "../../Data/locationsData";
import { Icon } from "leaflet";

function Maps() {
  const customIcon = new Icon({
    iconUrl:
      "https://static.vecteezy.com/system/resources/previews/009/589/758/original/location-location-pin-location-icon-transparent-free-png.png",
    iconSize: [50, 50],
  });
  return (
    <section className="maps">
      <MapContainer center={[54.687157, 25.279652]} zoom={13}>
        <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {slides.map((marker) => (
          <Marker
            position={marker.gymCord as L.LatLngTuple}
            key={marker.gymName}
            icon={customIcon}
          >
            <Popup>{marker.popUp}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </section>
  );
}

export default Maps;
