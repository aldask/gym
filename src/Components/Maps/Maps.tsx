import { MapContainer } from "react-leaflet";

function Maps() {
  return (
    <section className="maps">
      <MapContainer center={[48.8566, 2.3522]} zoom={13}></MapContainer>
    </section>
  );
}
export default Maps;
