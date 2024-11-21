import { useState } from 'react';
import map from '../../../assets/images/map-1.png';
import { MapLocationBgSvg } from '../../../components/SvgContainer';

const MapLocation = () => {
  const locations = [
    {
      locationTitle: 'Montreal',
      officeName: 'Reliance Construction',
      officeLocation: '3285 J.B. Deschamps',
      city: 'Montreal, Quebec',
      houseNumber: 'H8T 3E4',
      telephoneNumber: '514-631-7999',
      phoneNumber: '514-631-3888',
      email: 'relianceconstruction.com',
    },
    {
      locationTitle: 'Toronto',
      officeName: 'Reliance Construction Toronto',
      officeLocation: '200 University Avenue, Suite 400',
      city: 'Toronto, Ontario',
      houseNumber: 'M5H 3C6',
      telephoneNumber: '416-214-2233',
      phoneNumber: '416-214-2237',
      email: 'reception@reliancetoronto.com.com',
    },
    {
      locationTitle: 'Ottawa',
      officeName: 'Reliance Construction Ottawa',
      officeLocation: '55 Metcalfe Street, suite 450',
      city: 'Ottawa, Ontario',
      houseNumber: 'K1P 6L5',
      telephoneNumber: '343-309-5743',
      email: 'reception@relianceconstruction.com',
    },
  ];
  const [activeLocation, setActiveLocation] = useState('');
  return (
    <div
      className="mt-16 relative mb-72"
      style={{
        backgroundImage: `url(${map})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '500px',
      }}
    >

      <div className='absolute -bottom-40 w-full mx-24 bg-white border-textColor h-[500px]'>
      <h1>hello world</h1>
      </div>
    </div>
  );
};

export default MapLocation;
