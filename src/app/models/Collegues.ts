
export class Collegue {

    matricule?: string
    nom?: string
    prenoms?: string
    email?: string
    dateDeNaissance?: Date
    photoUrl?: String

    constructor(matricule, nom, prenoms,  dateDeNaissance, photoUrl) {
        this.matricule = matricule
        this.nom = nom
        this.prenoms = prenoms
     
        this.dateDeNaissance = dateDeNaissance
        this.photoUrl = photoUrl

    }


}