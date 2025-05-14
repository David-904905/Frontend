import { APIProvider, Map } from '@vis.gl/react-google-maps'

const MapStuff = () => {
  return (
    <APIProvider apiKey='AIzaSyBF9tmaU97RZMtPGynIQtohH6ts9ePaeeA'>
        <Map 
            style={{
                width: "100vw",
                height: "100vh"
            }}
            defaultCenter={{
                lat: 22.54992,
                lng: 0
            }}
            defaultZoom={3}
            gestureHandling={'greedy'}
            disableDefaultUI={true}
         />
    </APIProvider>
  )
}

export default MapStuff