import React, {useCallback, useMemo, useState} from "react";
import {apiService} from "../../services/apiService";
import {PeopleListItem} from "../PeopleListItem/PeopleListItem";
import {PersonDetailModal} from "../PersonDetailModal/PersonDetailModal";
import {Person} from "../../types/types";
import {PageLink, Pagination, PersonContainer} from "./PeopleListStyles";

export const PeopleList = ({searchQuery}: {searchQuery: string}) => {
    const [pageNumber, setPageNumber] = useState(0)
    const [selectedPerson, setSelectedPerson] = useState<Person | null>(null)

    const isSearchResult = useMemo(() => searchQuery.length > 1, [searchQuery])

    const {data: persons} = apiService.useGetPersonsQuery(pageNumber, {skip: isSearchResult})
    const {data: searchResultPersons} = apiService.useSearchPersonsQuery({pageNumber, searchQuery}, {skip: !isSearchResult})

    const hasPrevPage = useMemo(() => pageNumber > 0, [])
    const hasNextPage = useMemo(() => isSearchResult ? searchResultPersons?.hasMoreItems : persons?.hasMoreItems,
        [isSearchResult, searchResultPersons, persons])

    const handleClickPrevPage =() => {
        setPageNumber(prevState => prevState > 0 ? prevState - 1 : 0)
    }

    const handleClickNextPage = () => {
        setPageNumber(prevState => prevState + 1)
    }

    const handleShowPersonDetail = (person: Person) => {
       setSelectedPerson(person)
    }

    const handleOnClose = useCallback(() => {
        setSelectedPerson(null)
    }, [])

    const personListItems = useMemo(() => isSearchResult ? searchResultPersons?.items : persons?.items,
        [isSearchResult, searchResultPersons, persons])

    return <div>
        {personListItems && personListItems.map(person =>
            <PersonContainer key={person.id} onClick={() => {handleShowPersonDetail(person)}}>
                <PeopleListItem person={person} />
            </PersonContainer>
        )}
        <Pagination>
            {hasPrevPage && <PageLink onClick={handleClickPrevPage}>prev</PageLink>}
            {pageNumber + 1}
            {hasNextPage && <PageLink onClick={handleClickNextPage}>next</PageLink>}
        </Pagination>

        {selectedPerson && <PersonDetailModal person={selectedPerson} onClose={handleOnClose} /> }
    </div>
}