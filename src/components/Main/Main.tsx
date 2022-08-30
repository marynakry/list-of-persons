import React, {useCallback, useState} from "react";
import {PeopleList} from "../PeopleList/PeopleList";
import {AddPersonModal} from "../AddPersonModal/AddPersonModal";
import {AddBtn, Container, LeftContainer, SearchInput, Title} from "./MainStyles";

export const Main = ():JSX.Element => {
  const [searchQuery, setSearchQuery] = useState('')
  const [isAddPersonModalVisible, setIsAddPersonModalVisible] = useState(false)

  const handleOnBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(e.currentTarget.value)
  }

  const handleChangeValue =(e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setSearchQuery(e.currentTarget.value)
    }
  }

  const handleCloseAddModal = useCallback(() => {
     setIsAddPersonModalVisible(false)
  }, [])

  const handleOpenAddModal = useCallback(() => {
    setIsAddPersonModalVisible(true)
  }, [])

  return <div>
    <Container>
      <LeftContainer>
        <Title>
          People's List
        </Title>
        <AddBtn onClick={handleOpenAddModal}>
          Add Person
        </AddBtn>
      </LeftContainer>
      <SearchInput
          placeholder={"Filter by name"}
          defaultValue={searchQuery}
          onKeyPress={handleChangeValue} 
          onBlur={handleOnBlur} />
    </Container>
    <PeopleList searchQuery={searchQuery} />

    {isAddPersonModalVisible && <AddPersonModal onClose={handleCloseAddModal}/>}
  </div>
}