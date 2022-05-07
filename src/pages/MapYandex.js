import React, {useState,useRef, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {Image,Form} from "react-bootstrap";
import {YMaps, Placemark, Polyline, Map, GeolocationControl} from 'react-yandex-maps'

import Header from "../components/Header";

import {USER_ROUTER} from "../consts";
import person from "../icons/png/person.png";

const styles = {
    position: 'absolute',
    top: `-${window.screen.height - 70 -70 }px`,
    width:'100%',
    height: `${window.screen.height - 70}px`,
}

const MapYandex = () => {
    const navigate = useNavigate();
    const [marker,setMarker] = useState([])

    const myMap = useRef(null)
    const loadMap = useRef(null)

    useEffect( () => {
        // ymaps.ready(init);
    }, [])

    const handlerSetMarker = e => {
        setMarker(e.get('coords'))

        const ymap = loadMap.current
        const map = myMap.current
        // console.log('ymap',ymap)
        // console.log('123',window.ymaps)
        const [latitude,longitude] = e.get('coords')

        /*window.ymaps.geocode(e.get('coords')).then(function (res) {
            let firstGeoObject = res.geoObjects.get(0);
            console.log(firstGeoObject)
        })*/
        }

    return (
        <YMaps>
            <div className=' '>
                <Header className='header-bar head head-z-index-5'  >
                    <div className='d-flex justify-content-between align-items-center font-s-16'>
                        <div >
                            <Form.Control
                                className='my-form-control'
                                placeholder={'Поиск города'}
                            />
                        </div>
                        <Image onClick={() => navigate(USER_ROUTER)} height={15} width={15} src={person} />
                    </div>
                </Header>
                    <div>
                        <div id="map"></div>
                        <Map
                            modules={["package.full"]}
                            style={styles}
                            defaultState={{
                                center: [55.751574, 37.573856],
                                zoom: 10,
                            }}
                            onClick={(e) => { // устанавливаем маркер и записываем координаты
                                handlerSetMarker(e)
                            }}
                            instanceRef={myMap}
                            onLoad={maps => {
                                loadMap.current=maps
                            }}
                        >
                            <Placemark geometry={marker} />
                        </Map>
                    </div>

                </div>

        </YMaps>
    );
};

export default MapYandex;