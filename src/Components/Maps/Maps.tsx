import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { gyms } from "../../Data/gymsData";
import { Icon } from "leaflet";
import Pin from "../../Images/Maps/pin.png";

function Maps() {
  const customIcon = new Icon({
    iconUrl: Pin,
    iconSize: [40, 40],
  });

  const createMarkup = (htmlString: string) => {
    return { __html: htmlString };
  };

  return (
    <section className="maps">
      <MapContainer center={[54.687157, 25.279652]} zoom={12}>
        <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {gyms.map((marker) => (
          <Marker
            position={marker.gymCord as L.LatLngTuple}
            key={marker.gymName}
            icon={customIcon}
          >
            <Popup>
              <div dangerouslySetInnerHTML={createMarkup(marker.popUp)} />
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </section>
  );
}

export default Maps;
