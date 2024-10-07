import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CharacterDetail = ({ character }) => {
    const [comics, setComics] = useState([]);
    const [showDetails, setShowDetails] = useState(false);

    useEffect(() => {
        const fetchComics = async () => {
            if (!character) return;
            try {
                const response = await axios.get(`https://gateway.marvel.com/v1/public/characters/${character.id}/comics`, {
                    params: {
                        ts: '1',
                        apikey: '4fa59fddcf6fc8f8b89e6ec6d1b5b700',
                        hash: 'f85478668f2d8bd2da663d2501fec1cb'
                    }
                });
                setComics(response.data.data.results);
            } catch (error) {
                console.log('AHHHHH THEY DID NOT MAKE IT:', error);
            }
        };

        fetchComics();
    }, [character]);

    const handleToggleDetails = () => {
        setShowDetails(prev => !prev);
    };

    if (!character) {
        return <div>CLICK FOR DETAILS</div>;
    }

    return (
        <div>
            <h2>{character.name}</h2>
            <button onClick={handleToggleDetails}>
                {showDetails ? 'HIDE DEM DETAILS' : 'SHOW ME DEM DETAILS'}
            </button>
            {showDetails && (
                <div>
                    <p>{character.description || 'BOOO NO DESCRIPTION'}</p>
                    <h3>Comics:</h3>
                    <ul>
                        {comics.map(comic => (
                            <li key={comic.id}>{comic.title}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default CharacterDetail;