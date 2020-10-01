export class NoteBack {

    id: number
    text: string
    matriculeCollegue: string
    date: Date

    constructor(id: number, text: any, matriculeCollegue: any) {
        this.id = id
        this.text = text
        this.matriculeCollegue = matriculeCollegue
    }
}
