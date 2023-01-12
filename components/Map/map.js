import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import style from '../../styles/Home.module.css'
import { MapContainer, TileLayer, Marker, Popup, Polyline, CircleMarker } from 'react-leaflet'

export default function Map() {

  const position = [49.286182218017515, -123.11146150254835];

  const polylineNorth = [
    [49.286182218017515, -123.11146150254835],//1
    [49.2861963110636, -123.12003227186243],//2
    [49.28390744642539, -123.11613353323527],//3
    [49.280316081002454, -123.10969030255171],//4
    [49.27384367257797, -123.10017837186979],//5
    [49.263154786736294, -123.0692794485903],//6
    [49.24900623957645, -123.0557027565413],//7
    [49.244952066037584, -123.04619586394413],//8
    [49.239062086460244, -123.03190829448371],//9
    [49.23051712751502, -123.01253023757626],//10
    [49.22594515454853, -123.00387213531273],//11
    [49.22028991187523, -122.988448880156],//12
    [49.212470827635244, -122.9591981535336],//13
    [49.200103133500185, -122.94918801762267],//14
    [49.201653986123134, -122.91265390866997],//15
    [49.20504059585414, -122.90604691213092],//16
    [49.22496334944433, -122.8893765116155],//17n
    [49.23297137178838, -122.88295843444396],//18n
    [49.248638424683996, -122.89721543892718],//19n
    [49.2538642682862, -122.91883397391581],//20n
  ];

  const polylineSouth = [
    [49.20504059585414, -122.90604691213092],//16
    [49.20462653493962, -122.87395257678124],//17s
    [49.199157591000386, -122.85071476634862],//18s
    [49.189661682568335, -122.84793535133488],//19s
    [49.182871384344715, -122.84480860692658],//20s
  ];

  const blueOption = {color: 'DarkBlue'};
  const bcitOption = {color: '#003c71'};

  return (
    <MapContainer className={style.map} center={position} zoom={14} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[49.286182218017515, -123.11146150254835]}>
        <Popup>
          Skytrain - Expo Line <br/> 1. Waterfront
        </Popup>
      </Marker>

      <Marker position={[49.2861963110636, -123.12003227186243]}>
        <Popup>
          Skytrain - Expo Line <br/> 2. Burrard Station
        </Popup>
      </Marker>

      <Marker position={[49.28390744642539, -123.11613353323527]}>
        <Popup>
          Skytrain - Expo Line <br/> 3. Granville Station
        </Popup>
      </Marker>

      <Marker position={[49.280316081002454, -123.10969030255171]}>
        <Popup>
          Skytrain - Expo Line <br/> 4. Stadium–Chinatown Station
        </Popup>
      </Marker>

      <Marker position={[49.27384367257797, -123.10017837186979]}>
        <Popup>
          Skytrain - Expo Line <br/> 5. Main Street–Science World Station
        </Popup>
      </Marker>

      <Marker position={[49.263154786736294, -123.0692794485903]}>
        <Popup>
          Skytrain - Expo Line <br/> 6. Commercial–Broadway Station
        </Popup>
      </Marker>

      <Marker position={[49.24900623957645, -123.0557027565413]}>
        <Popup>
          Skytrain - Expo Line <br/> 7. Nanaimo Station
        </Popup>
      </Marker>

      <Marker position={[49.244952066037584, -123.04619586394413]}>
        <Popup>
          Skytrain - Expo Line <br/> 8. 29th Ave Station
        </Popup>
      </Marker>

      <Marker position={[49.239062086460244, -123.03190829448371]}>
        <Popup>
          Skytrain - Expo Line <br/> 9. Joyce–Collingwood Station
        </Popup>
      </Marker>

      <Marker position={[49.23051712751502, -123.01253023757626]}>
        <Popup>
          Skytrain - Expo Line <br/> 10. Patterson Station
        </Popup>
      </Marker>

      <Marker position={[49.22594515454853, -123.00387213531273]}>
        <Popup>
          Skytrain - Expo Line <br/> 11. Metrotown Station
        </Popup>
      </Marker>

      <Marker position={[49.22028991187523, -122.988448880156]}>
        <Popup>
          Skytrain - Expo Line <br/> 12. Royal Oak Station
        </Popup>
      </Marker>

      <Marker position={[49.212470827635244, -122.9591981535336]}>
        <Popup>
          Skytrain - Expo Line <br/> 13. Edmonds Station
        </Popup>
      </Marker>

      <Marker position={[49.200103133500185, -122.94918801762267]}>
        <Popup>
          Skytrain - Expo Line <br/> 14. 22nd Street Station
        </Popup>
      </Marker>

      <Marker position={[49.201653986123134, -122.91265390866997]}>
        <Popup>
          Skytrain - Expo Line <br/> 15. New Westminster Station
        </Popup>
      </Marker>

      <Marker position={[49.20504059585414, -122.90604691213092]}>
        <Popup>
          Skytrain - Expo Line <br/> 16. Columbia Station
        </Popup>
      </Marker>

      <Marker position={[49.22496334944433, -122.8893765116155]}>
        <Popup>
          Skytrain - Expo Line <br/> 17n. Sapperton Station
        </Popup>
      </Marker>

      <Marker position={[49.23297137178838, -122.88295843444396]}>
        <Popup>
          Skytrain - Expo Line <br/> 18n. Braid Station
        </Popup>
      </Marker>

      <Marker position={[49.248638424683996, -122.89721543892718]}>
        <Popup>
          Skytrain - Expo Line <br/> 19n. Lougheed Town Centre Station
        </Popup>
      </Marker>

      <Marker position={[49.2538642682862, -122.91883397391581]}>
        <Popup>
          Skytrain - Expo Line <br/> 20n. Production Way–University Station
        </Popup>
      </Marker>

      {/* polylineSouth */}
      <Marker position={[49.20504059585414, -122.90604691213092]}>
        <Popup>
          Skytrain - Expo Line <br/> 16. Columbia Station
        </Popup>
      </Marker>

      <Marker position={[49.20462653493962, -122.87395257678124]}>
        <Popup>
          Skytrain - Expo Line <br/> 17s. Scott Road Station
        </Popup>
      </Marker>

      <Marker position={[49.199157591000386, -122.85071476634862]}>
        <Popup>
          Skytrain - Expo Line <br/> 18s. Gateway Station
        </Popup>
      </Marker>

      <Marker position={[49.189661682568335, -122.84793535133488]}>
        <Popup>
          Skytrain - Expo Line <br/> 19s. Surrey Central Station
        </Popup>
      </Marker>

      <Marker position={[49.182871384344715, -122.84480860692658]}>
        <Popup>
          Skytrain - Expo Line <br/> 20s. King George Station
        </Popup>
      </Marker>

      <CircleMarker center={[49.24898351651289, -123.00192318928782]} pathOptions={bcitOption} radius={50}>
        <Popup>You reacheed your deestination!</Popup>
      </CircleMarker>

      <Polyline pathOptions={blueOption} positions={polylineNorth}/>
      <Polyline pathOptions={blueOption} positions={polylineSouth}/>
    </MapContainer>
  )
}
