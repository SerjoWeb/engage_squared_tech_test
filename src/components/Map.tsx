import { Fragment, useState } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
import { useLoadScript } from '@react-google-maps/api';
import type { Response } from '../api/response.types';

import LoadingState from './LoadingState';
import useModal from '../store/modal';
import Modal from './ui/Modal';
import BikeDetails from './BikeDetails';

export type Coordinates = {
  lat: number;
  lng: number;
};

type Libraries = 'places'[];

const defaultCoordinate: Coordinates = {
  lat: 51.506766,
  lng: -0.128863
};

const Map = ({ data }: { data: Response[] | Response }) => {
  const [libraries] = useState<Libraries>(['places']);
  const [bikeDetails, setBikeDetails] = useState<Response>({} as Response);

  const { isShown, setModal } = useModal();

  const onLoad = (marker: unknown): unknown => {
    return marker;
  };

  // for map we use Google Maps API
  const { isLoaded } = useLoadScript({
    id: 'google-map-script',
    googleMapsApiKey: `${import.meta.env.VITE_APP_GOOGLE_API_KEY}`,
    language: 'en',
    region: 'en',
    libraries
  });

  const onClickHandle = (bike: Response): void => {
    setModal(true);
    setBikeDetails(bike);
  }

  return (
    <Fragment>
      {!isLoaded ? (
        <LoadingState />
      ) : (
        <Fragment>
          <GoogleMap
            id='google-maps-with-marker'
            mapContainerStyle={{
              width: '100%',
              height: '100%'
            }}
            zoom={15}
            center={defaultCoordinate}
          >
            {Array.isArray(data) ? data.map((bike: Response, index: number) => (
              <Marker
                key={index}
                onLoad={onLoad}
                position={{
                  lat: bike.lat,
                  lng: bike.lon
                }}
                icon={{
                  url: '/images/bicycle.png',
                  anchor: new google.maps.Point(17, 46),
                  scaledSize: new google.maps.Size(37, 37)
                }}
                onClick={() => onClickHandle(bike)}
              />
            )) : (
              <Marker
                key='bikePoint'
                onLoad={onLoad}
                position={{
                  lat: data.lat,
                  lng: data.lon
                }}
                icon={{
                  url: '/images/bicycle.png',
                  anchor: new google.maps.Point(17, 46),
                  scaledSize: new google.maps.Size(37, 37)
                }}
                onClick={() => onClickHandle(data)}
              />
            )}
          </GoogleMap>

          {isShown && Object.keys(bikeDetails).length > 0 && (
            <Modal body={<BikeDetails data={bikeDetails} />} />
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Map;
