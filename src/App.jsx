import React, { useState } from 'react';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';
import './App.css'

const App = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

    return (
        <div style={{ display: 'flex' }}>
            <div style={{ flex: 1 }}>
                <CharacterList onCharacterSelect={setSelectedCharacter} />
            </div>
            <div style={{ flex: 1 }}>
                <CharacterDetail character={selectedCharacter} />
            </div>
        </div>
    );
};

export default App;