import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom'

const AlbumList = () => {

    const [albums, setAlbums] = useState([])
    const [limit, setLimit] = useState(10)
    const [nwStatus, setNWStatus] = useState('')

    const loadAlbums = async (limit) => {
        const apiUrl = `https://jsonplaceholder.typicode.com/albums?_limit=${limit}`
        try {
            setNWStatus("loading albums..")
            const response = await axios.get(apiUrl)
            const albums = await response.data
            setNWStatus("")
            setAlbums(albums)
        } catch (err) {
            setNWStatus(err.message)
        }
    }

    useEffect(() => {
        loadAlbums(limit)
    }, [limit])

    const renderAlbums = albums => {
        return albums.map((album) => {
            return (
                <div key={album.id} className="list-group-item">
                    <Link to={`/albums/${album.id}`}>
                        <h6>{album.title}</h6>
                    </Link>
                </div>
            )
        })
    }

    return (
        <div>
            Limit :
            <input value={limit} onChange={e => setLimit(e.target.value)} />
            <select value={limit} onChange={e => setLimit(e.target.value)}>
                {
                    [5, 10, 15, 20, 25, 50]
                        .map(n => <option key={n}>{n}</option>)
                }
            </select>
            <hr />
            {nwStatus ? (
                <div className="alert alert-warning">{nwStatus}</div>
            ) : null}
            <hr />
            {renderAlbums(albums)}
        </div>
    );
};

export default AlbumList;