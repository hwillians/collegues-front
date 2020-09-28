
export class Collegue {

    matricule?: string
    nom?: string
    prenoms?: string
    email?: string
    dateDeNaissance?: Date
    photoUrl?: string

    constructor(matricule, nom, prenoms, email, dateDeNaissance, photoUrl) {
        this.matricule = matricule
        this.nom = nom
        this.prenoms = prenoms
        this.email = email
        this.dateDeNaissance = dateDeNaissance
        this.photoUrl = photoUrl

    }


}