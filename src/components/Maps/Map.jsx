import { YMaps, Map, Placemark, Polyline } from '@pbe/react-yandex-maps';
import "./Map.css"
import { useEffect, useState } from 'react';

// const marker = new window.ymaps.Placemark([55.76, 37.64], {
//     hintContent: 'Москва!',
//     balloonContent: 'Столица России'
//     }, 
//     {
//     iconColor: '#ff0000'
//     });


//Отображение содержимого карты
const MapContent = ({ drawPath, setDrawPath, curPath, setCurrentStation, setStationClicked, stations }) => {

    const polyline = []
    let lastStation

    //Функция для добавления координат будущего маршрута и заданной точки до
    //станции назначения вагона
    function createPolyline(curPath) {

        // console.log('curpath-', curPath)

        for (let i = 0; i <= curPath.length - 1; i++) {
            const stations = curPath[i].stations
            stations.map(p => {

                polyline.push([p.start.latitude, p.start.longitude])
            })

            //Последний объект в массиве координат
            lastStation = stations[Object.keys(stations)[Object.keys(stations).length - 1]]

            polyline.push([lastStation.end.latitude, lastStation.end.longitude])
        }
        // setDrawPath(false)
    }

    if (drawPath && curPath) {
        createPolyline(curPath)
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
                    >

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

                        {curPath.length && <Placemark
                            geometry={[lastStation.end.latitude, lastStation.end.longitude]}
                            options={{

                                iconColor: 'orange',

                            }}

                            key={lastStation.end.id}
                            onClick={() => placemarkClick(lastStation)} />}

                    </Map>
                </div>
            </YMaps>
        </>
    )
}

export default MapContent