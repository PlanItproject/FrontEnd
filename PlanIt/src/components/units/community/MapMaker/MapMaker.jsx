import styled from 'styled-components';
import PropTypes from 'prop-types';
import mapIcon from '../../../../assets/icon/map.svg';

const MapMarkerWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`

const AddressWrapper = styled.div`
    display: flex;
    gap: 4px;

    flex-direction: ${({ layout }) => layout === 'top-address' ? 'column' : 'column-reverse'};
`;

const Address = styled.span`
    font-size: 12px;
    font-weight: 500;
    line-height: 1.4;
    color: var(--text-default-secondary);
`;

const CityCountry = styled.span`
    font-size: 14px;
    font-weight: 600;
    line-height: 1.45;
`;


const MapMarker = ({ address, city, country, layout }) => {
    return (
        <MapMarkerWrapper>
            <img src={mapIcon} alt='Map Icon'/>
            <AddressWrapper layout={layout}>
                <Address>{address}</Address>
                <CityCountry>{city}, {country}</CityCountry>
            </AddressWrapper>
        </MapMarkerWrapper>
    )
}

MapMarker.propTypes =  {
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    layout: PropTypes.oneOf(['top-address', 'bottom-address'])
};

MapMarker.defaultProps = {
    address: '주소가 제공되지 않았습니다',
    city: '알 수 없는 도시',
    country: '알 수 없는 국가',
    layout: 'top-address'
};

export default MapMarker;