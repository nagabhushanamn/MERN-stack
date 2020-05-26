import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Album = ({ match }) => {

    let { params } = match;
    let { id } = params

    let [photos, setPhotos] = useState([])

    const loadPhotos = async (albumId) => {
        const apiUrl = `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
        try {
            const response = await axios.get(apiUrl)
            const photos = await response.data
            setPhotos(photos)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        loadPhotos(id)
    }, [id])

    const renderPhotos = photos => {
        return photos.map((photo) => {
            return (
                <div key={photo.id} className="list-group-item">
                    <img className="img-fluid" src={photo.thumbnailUrl} />
                </div>
            )
        })
    }


    return (
        <div>
            {renderPhotos(photos)}
        </div>
    );
};

export default Album;