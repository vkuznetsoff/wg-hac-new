import { YMaps, Map, Placemark, Polyline } from '@pbe/react-yandex-maps';
import "./Map.css"
import { useState } from 'react';

// const marker = new window.ymaps.Placemark([55.76, 37.64], {
//     hintContent: 'Москва!',
//     balloonContent: 'Столица России'
//     }, 
//     {
//     iconColor: '#ff0000'
//     });

const testStation = {
    id: 2154,
    latitude: '58.651900',
    longitude: '41.287100'
}

const path = [
    {
        "stations": [
            {
                "start": {
                    "id": 134,
                    "latitude": 58.6061,
                    "longitude": 49.6438
                },
                "end": {
                    "id": 122,
                    "latitude": 56.2377,
                    "longitude": 44.0403
                },
                "distance": 5
            },
            {
                "start": {
                    "id": 122,
                    "latitude": 56.2377,
                    "longitude": 44.0403
                },
                "end": {
                    "id": 138,
                    "latitude": 58.4708,
                    "longitude": 49.3095
                },
                "distance": 3
            },
            {
                "start": {
                    "id": 138,
                    "latitude": 58.4708,
                    "longitude": 49.3095
                },
                "end": {
                    "id": 261,
                    "latitude": 48.999957,
                    "longitude": 24.596826
                },
                "distance": 9
            },
            {
                "start": {
                    "id": 261,
                    "latitude": 48.999957,
                    "longitude": 24.596826
                },
                "end": {
                    "id": 263,
                    "latitude": 49.259332,
                    "longitude": 24.495089
                },
                "distance": 3
            }]
    }
]



const MapContent = ({ setCurrentStation, setStationClicked, stations, drawPath, setDrawPath }) => {

    // const template = createPinTemplateFactory(mapInstanceRef)({      
    //     onPinClick: onClick,      
    //     description: pin.description,      
    //     isActive: pin.isActive,      
    //     isViewed: pin.isViewed,    
    //   }); 
    const polyline = []

    // "start": {
    //     "id": 261,
    //     "latitude": 48.999957,
    //     "longitude": 24.596826
    //   },
    //   "end": {
    //     "id": 263,
    //     "latitude": 49.259332,
    //     "longitude": 24.495089
    //   },
    //   "distance": 3
    let  lastStation

    function createPolyline(path) {
        const stations = path[0].stations
        stations.map(p => {
            
            polyline.push([p.start.latitude, p.start.longitude])
        })

        //Last value in path object
        lastStation = stations[Object.keys(stations)[Object.keys(stations).length - 1]]
        console.log(lastStation)
        polyline.push([lastStation.end.latitude, lastStation.end.longitude])

       


    }

    if (drawPath) {
        createPolyline(path)
        // setDrawPath(false)
    }


    const placemarkClick = ({ id }) => {
        setStationClicked(true)
        setCurrentStation(id)

        
      
    }


    return (
        <>
            <YMaps key={'263eb311-5530-4388-ae36-76a32353f34b'} >
                <div >
                    <Map
                        defaultState={{
                            center: [55.75, 37.57],
                            zoom: 5,

                        }}


                        className='map-content'
                        onClick={(e) => console.log(e.coordinates)}

                    >

                       

                        <Placemark
                            geometry={[testStation.latitude, testStation.longitude]}
                            options={{
                                // Проброс темплейта
                                iconColor: 'red',

                            }}

                            key={testStation.id}
                            onClick={() => placemarkClick(testStation)} />

                        {stations.map((s) => (

                            <Placemark
                                geometry={[s.latitude, s.longitude]}
                                options={{
                                    // Проброс темплейта
                                    preset: 'islands#violetCircleDotIcon',
                                    iconImageSize: 2,
                                    iconColor: 'green',
                                    iconContentLayout: 'islands#lightBlueCircleIcon'

                                }}

                                key={s.id}
                                onClick={() => placemarkClick(s)} />

                        ))
                        }


                        <Polyline

                            geometry={polyline}
                            options={{
                                balloonCloseButton: true,
                                openBalloonOnClick: true,
                                strokeColor: "#000",
                                strokeWidth: 2,
                                strokeOpacity: 0.5,
                            }}
                            properties={
                                {
                                    iconContent: '2', // пару символов помещается
                                    hintContent: '<b> Я появляюсь при наведении на метку </b>',
                                    // создаём пустой элемент с заданными размерами
                                    balloonContent: <div id="driver-2" class="driver-card">111</div>,
                                }}
                        />

                     {/* Конечная точка */}
                     
                     {/* <Placemark
                            geometry={[lastStation.end.latitude, lastStation.end.longitude]}
                            options={{
                                // Проброс темплейта
                                iconColor: 'orange',

                            }}

                            // key={lastStation.end.id}
                            onClick={() => placemarkClick(testStation)} /> */}

                    </Map>
                </div>
            </YMaps>
        </>
    )
}

export default MapContent