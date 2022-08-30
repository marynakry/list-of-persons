export interface Person {
  id: number,
  name: string,
  orgName?: string,
  phone?: string,
  email: string,
  assistant?: string,
  groups?: string,
  location?: string,
  nameAbbreviation: string,
}

export interface SearchPersonParams {
  pageNumber: number,
  searchQuery: string
}

export interface PersonResponseType {
  items: Person[],
  hasMoreItems: boolean
}