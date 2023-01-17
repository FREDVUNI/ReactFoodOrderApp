import React from 'react'
import { Header,MainContainer,CreateContainer } from './components'
import { Routes,Route } from 'react-router-dom'

function App() {
  return (
    <div className="w-screen h-screen flex-col flex bg-primary">
      <Header/>
      <main className="mt-24 p-8 w-full">
          <Routes>
            <Route path="/*" element={MainContainer}/>
            <Route path="/create" element={CreateContainer}/>
          </Routes>
      </main>
    </div>
  );
}

export default App;
