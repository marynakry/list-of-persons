import React, {useCallback} from "react";
import {Person} from "../../types/types";
import {PersonPhoto} from "../PersonPhoto/PersonPhoto";
import {apiService} from "../../services/apiService";
import {Modal} from "../Modal/Modal";
import {AdditionalInfo, DeleteBtn, Key, MainInfo, Name, PairProperty, Phone, Value} from "./PersonDetailModalStyles";

interface PersonDetailModalProps {
    person: Person
    onClose: () => void
}

export const PersonDetailModal = ({person, onClose}: PersonDetailModalProps): JSX.Element => {
    const [deletePerson] = apiService.useDeletePersonMutation()

    const handleDeletePerson = useCallback(() => {
        deletePerson(person.id)
        onClose()
    }, [person, onClose, deletePerson])

    const headerTitle = 'Personal Information'


    return <Modal
        headerTitle={headerTitle}
        footer={(
            <DeleteBtn onClick={handleDeletePerson}>Delete Person</DeleteBtn>
        )}
        onClose={onClose}
    >
        <>
            <MainInfo>
                <PersonPhoto name={person.nameAbbreviation} />
                <Name>
                    {person.name}
                </Name>
                <Phone>
                    {person.phone}
                </Phone>
            </MainInfo>
            <AdditionalInfo>
                <PairProperty>
                    <Key>Email</Key>
                    <Value>{person.email}</Value>
                </PairProperty>
                <PairProperty>
                    <Key>Organization</Key>
                    <Value>{person.orgName}</Value>
                </PairProperty>
                <PairProperty>
                    <Key>Assistant</Key>
                    <Value>{person.assistant}</Value>
                </PairProperty>
                <PairProperty>
                    <Key>Groups</Key>
                    <Value>{person.groups}</Value>
                </PairProperty>
                <PairProperty>
                    <Key>Location</Key>
                    <Value>{person.location}</Value>
                </PairProperty>
            </AdditionalInfo>
        </>
    </Modal>
}