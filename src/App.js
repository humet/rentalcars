import React from 'react';
import './App.css';

import SearchInput from "./components/SearchInput"

function App() {
  return (
    <div className="wrapper">
      <section>
        <form>
          <SearchInput count={6} />
        </form>
      </section>
    </div>
  );
}

export default App;
