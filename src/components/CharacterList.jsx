import React, { useState, useEffect } from 'react';
import axios from 'axios';


const CharacterList = ({ onCharacterSelect }) => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await axios.get('https://gateway.marvel.com/v1/public/characters', {
                    params: {
                        ts: '1',
                        apikey: '4fa59fddcf6fc8f8b89e6ec6d1b5b700',
                        hash: 'f85478668f2d8bd2da663d2501fec1cb'
                    }
                });
                setCharacters(response.data.data.results);
            } catch (error) {
                console.log('Error fetching characters:', error);
            }
        };

        fetchCharacters();
    }, []);

    return (
        <div>
            {characters.map(character => (
                <div
                    key={character.id}
                    onClick={() => onCharacterSelect(character)}
                    style={{ margin: '10px', cursor: 'pointer' }}
                >
                    <img 
                        src={`${character.thumbnail.path}.${character.thumbnail.extension}`} 
                        alt={character.name} 
                        style={{ width: '100px', height: '100px' }}
                    />
                    <p>{character.name}</p>
                </div>
            ))}
        </div>
    );
};

export default CharacterList;