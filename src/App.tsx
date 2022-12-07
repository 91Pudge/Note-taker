import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import NewNote from './componets/Newnote'

 export type Note = {
  id:string 
} & NoteData

 
export type NoteData = {
  title: string
  markdown:string
  tags: Tag[]
}
export type RawNote = {
  id: string 

}

export type RawNoteData = {
  id: string 
  markdown: string
  tagIds: string[]
}
  
export type Tag = {
  id:string
  label: string
}

function App() {

  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", [])
  const [tags, setTags] = useLocalStorage<RawNote[]>("TAGS", [])


  return (
    <Container>
    <Routes>
      <Route path="/" element={<h1>Home</h1>}/>
      <Route path="/new" element={<NewNote/>}/>
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
