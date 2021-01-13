import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import AsyncSelect from 'react-select/async';
import { fetchLocalMapBox } from '../api';

const initialPosition = {

    lat: -3.0077097,

    lng: -60.0222365
}

type Place = {
    value?: string;
    label?: string;
    position: {
        lat: number;
        lng: number;
    };
}



function OrderLocation() {

    const [address, setAddress] = useState<Place>({
        position: initialPosition
    })

    const loadOptions = async (inputValue: string, callback: (places: Place[]) => void) => {
        const response = await fetchLocalMapBox(inputValue);

        const places = response.data.features.map((item: any) => {
            return ({
                label: item.place_name,
                value: item.place_name,
                position: {
                    lat: item.center[1],
                    lng: item.center[0]
                },
            });
        });

        callback(places);
    };

    const handleChangeSelect = (place: Place) => {
        setAddress(place);
        //onChangeLocation({
        //latitude: place.position.lat,
        //longitude: place.position.lng,
        //address: place.label!
        //});
    };



    return (

        <div className="order-location-container">

            <div className="order-location-content">

                <div className="order-location-title">
                    <h3>
                        Selecione onde o pedido deve ser entregue:
                    </h3>

                </div>

                <div className="filter-container">

                    <AsyncSelect

                        placeholder="Digite seu endereço"
                        className="filter"
                        loadOptions={loadOptions}
                        onChange={value => handleChangeSelect(value as Place)}

                    />

                </div >


                <MapContainer center={address.position} zoom={13} scrollWheelZoom>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={address.position}>
                        <Popup>
                            Localizaçao. <br /> Easily customizable.
                            </Popup>
                    </Marker>
                </MapContainer>


            </div>


        </div>

    )



}


export default OrderLocation;