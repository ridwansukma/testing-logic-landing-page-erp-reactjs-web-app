import React from 'react';

const GoogleMap = (): React.ReactElement => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.6647440471997!2d106.82821391070486!3d-6.175617060489819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5cd48b0d16d%3A0x3e83773fe1d95cfb!2sJl.%20Medan%20Merdeka%20Tim.%206-9%2C%20RT.2%2FRW.1%2C%20Gambir%2C%20Kecamatan%20Gambir%2C%20Kota%20Jakarta%20Pusat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2010110!5e0!3m2!1sid!2sid!4v1757238632736!5m2!1sid!2sid"
      width="100%"
      height="350"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default GoogleMap;
