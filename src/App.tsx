import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <Container>

    <Routes>
      <Route path="/" element={<h1>Home</h1>}/>
      <Route path="/new" element={<h1>New</h1>}/>
      <Route path="*" element={<Navigate to="/"/>}/>
      <Route path="/:id">
          <Route index element={<h1>Show</h1>} />
          <Route path="edit" element={<h1>Edit</h1>} />
          <Route path="delete" element={<h1>delete</h1>} />
      </Route>
    </Routes>

    </Container>
  )
}

export default App
