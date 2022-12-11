import { NoteData } from "../App";
import NoteForm from "./NoteForm";

type NewNoteProps = {
    onSubmit: (data: NoteData) => void
}

const NewNote = ({onSubmit}: NewNoteProps) => {
    return <>
    <h1 className="m b-4">newNote</h1>   
    <NoteForm onSubmit={onSubmit} /> 
    </> 
    ;
 
}
 
export default NewNote;