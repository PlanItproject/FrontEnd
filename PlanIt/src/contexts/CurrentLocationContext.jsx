import { createContext, useContext, useEffect, useState } from "react";

const CurrentLocationContext = createContext();

export const CurrentLocationProvider = ({ children }) => {
    const [currentLocation, setCurrentLocation] = useState('현위치');

    useEffect(() => {
        if('geolocation' in navigator) { // 브라우저가 geolocation API 지원하는지 확인
            navigator.geolocation.getCurrentPosition( // 위치 정보 가져오기
                (position) => {
                    const { latitude, longitude } = position.coords || {};
                    if(latitude && longitude) {
                        // 값이 있을 때, 좌표(위도,경도)를 소수점 2자리로 포맷하여 state에 저장
                        setCurrentLocation(`${latitude.toFixed(2)}, ${longitude.toFixed(2)}`); 
                    } else {
                        setCurrentLocation('위치를 확인할 수 없습니다.');
                    }
                },
                (error) => {
                    console.error('위치정보를 가져올 수 없음', error);
                    setCurrentLocation('위치를 확인할 수 없습니다.');
                }
            )
        } else {
            setCurrentLocation('위치를 가져올 수 없습니다.')
        }
    }, []); // 처음 마운트 될 때만 실행

    return (
        <CurrentLocationContext.Provider value={{ currentLocation, setCurrentLocation }}>
            {children}
        </CurrentLocationContext.Provider>
    );
};

export const useCurrentLocation = () => useContext(CurrentLocationContext);