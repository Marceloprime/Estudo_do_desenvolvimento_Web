export default class Notes{
    constructor(){
        this.notes = [];
    }

    addNote(data){
        const note = new Note(data.title, data.note, data.category)
        this.notes.push(note)
    }

    deleteNote(index){
        this.notes.slice(index, 1)
    }
}

export class Note{
    constructor(titulo, texto, categoria){
        this.titulo = titulo;
        this.texto = texto;
        this.categoria = categoria;
    }
}