import { useMemo, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Navigate, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import NewNote from './componets/Newnote'
import { useLocalStorage } from './useLocalStorage'
import { v4 as uuidV4} from "uuid" 

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

} & RawNoteData

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
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", []);

  const notesWithTags = useMemo(() =>{
    return notes.map(note =>{
      return {...note, tags:tags.filter(tag => note.tagIds.includes(tag.id))}
    })
  }, [notes, tags])

  function onCreateNote({tags, ...data} : NoteData){
    setNotes(prevNotes => {
      return [...prevNotes, {...data, id: uuidV4(), tagIds: tags.map(tag =>tag.id)}]
    })
  }

  const addTag = (tag: Tag) =>{
setTags(prev => [...prev, tag])
  }

  return (
    <Container>
    <Routes>
      <Route path="/" element={<h1>Home</h1>}/>
      <Route path="/new" element={<NewNote onSubmit={onCreateNote} onAddTag={addTag} availableTags={tags}/>}/>
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
