import { Collegue } from "../models/Collegues";


export const collegueMock: Collegue = new Collegue('XL0001', 'De Tal', 'Fulano', 'fulano.de-tal@wowwow.fr', new Date(1900, 2, 12), 'http://www.pedigreedatabase.com/gallerypictures/146307.jpg')

export const c1: Collegue = new Collegue('XL0002', 'perez', 'leo', 'leo.perez@wowwow.fr', new Date(1600, 22, 1), 'https://i.ytimg.com/vi/sS4QydtwuRs/maxresdefault.jpg')
export const c2: Collegue = new Collegue('XL0003', 'goncalvez', 'helena', 'helena.goncalvez@wowwow.fr', new Date(1700, 3, 10), 'https://i.ytimg.com/vi/JSuW7HRbRzM/maxresdefault.jpg')
export const c3: Collegue = new Collegue('XL0004', 'hechevarria', 'sofia', 'sofi.hechez@wowwow.fr', new Date(2020, 31, 12), 'https://i.ytimg.com/vi/wdqJ03HcGVI/maxresdefault.jpg')

export const listMatricules: string[] = [collegueMock.matricule, c1.matricule, c2.matricule, c3.matricule]