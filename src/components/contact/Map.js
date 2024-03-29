
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


const Map = () => {
    return(
        <div id='map' className='map-wrap'>
        <div className="info-map">
          Mouez Matoui,
          <br />
          Tunisia,
          <br />
          Rue El Barka, 6020 <br />
          Gabes, Elhamma<br />
          <br />
          <span>
            <a href='mailto:Mouez.matoui@gmail.com' target='_blank' rel='noreferrer'>Mouez.matoui@gmail.com</a>
          </span>
        </div>
        <MapContainer center={[33.887187, 9.796047]} zoom={13} scrollWheelZoom={false} >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[33.887187, 9.796047]}>
              <Popup>Mouez lives here, come over for a cup of coffee </Popup>
            </Marker>
          </MapContainer>
        </div>
        
    )
}

export default Map
