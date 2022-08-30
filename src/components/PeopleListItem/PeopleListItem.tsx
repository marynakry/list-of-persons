import {Person} from "../../types/types";
import React from "react";
import {PersonPhoto} from "../PersonPhoto/PersonPhoto";
import {Container, Name, Organisation} from "./PeopleListItemStyles";

interface PeopleListItemProps {
   person: Person
}

export const PeopleListItem = ({person}: PeopleListItemProps): JSX.Element => {
   return <Container>
       <div>
          <Name>{person.name}</Name>
          <Organisation>{person.orgName}</Organisation>
       </div>
     <PersonPhoto name={person.nameAbbreviation} />
   </Container>
}