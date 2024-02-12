export interface Movie {
  id: number
  title: string
  releaseYear: number
  synopsis: string
  realisator: Person
}

export interface Person {
  lastName: string
  firstName: string
}
