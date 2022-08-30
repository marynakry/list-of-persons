import {Person} from "../types/types";

export const mapResponseForPersons = (responsePersons: any[]): Person[] =>
   responsePersons.map(person => ({
       id: person.id,
       name: person.name,
       orgName: person['org_name'],
        phone: getPrimary(person.phone),
        email: person['primary_email'],
        assistant: person['130c653bb65043b5dae056cf181bdca65503050a'],
        groups: person['777c4377f3fe57087022eace487eab56dc7d513a'],
        location: person['org_id']?.['address'],
        nameAbbreviation: getNameAbbreviation(person.name),
   }));


const getPrimary = (arr: {primary: boolean, value: string, label: string}[]): string | undefined =>
    arr.find(element => element.primary)?.value

const getNameAbbreviation = (fullName: string): string => {
   const [name, surname] = fullName.split(' ')
    return `${name[0]}${surname[0]}`.toUpperCase()
}

export const mapSearchResponseForPersons = (responseSearchItems: any[]): Person[] =>
    responseSearchItems.map(searchItem => ({
        id: searchItem.item.id,
        name: searchItem.item.name,
        orgName: searchItem.item.organization?.name,
        phone: searchItem.item.phones[0],
        email: searchItem.item['primary_email'],
        location: searchItem.item.organization?.address,
        nameAbbreviation: getNameAbbreviation(searchItem.item.name),
    }));