import React, { useState, useEffect } from 'react';

import './styles.css'

function Footer() {

    const [location, setLocation] = useState({})

    useEffect(() => {
        navigator.geolocation.watchPosition(handlePosition)
    }, [])

    function handlePosition({ coords }) {
        const { latitude, longitude} = coords
    
        setLocation({ latitude, longitude })
    }
    
    return (
        <footer>
            <p>Sua Latitude: {location.latitude}</p>
            <p>Sua Longitude: {location.longitude}</p>
        </footer>
    );
}

export default Footer;