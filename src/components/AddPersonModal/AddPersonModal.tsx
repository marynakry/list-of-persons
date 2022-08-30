import React, {useState} from "react";
import {Modal} from "../Modal/Modal";
import {apiService} from "../../services/apiService";
import {AddBtn, Input, Label, PropertyContainer} from "./AddPersonModalStyles";
import {validateEmail, validateName, validatePhone} from "../../services/formValidation";

interface AddPersonModalProps {
    onClose: () => void
}

export const AddPersonModal = ({onClose}: AddPersonModalProps): JSX.Element => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [isNameValid, setIsNameValid] = useState(true)
    const [isEmailValid, setIsEmailValid] = useState(true)
    const [isPhoneValid, setIsPhoneValid] = useState(true)

    const headerTitle = 'Add new person'

    const [addPerson] = apiService.useAddPersonMutation()

    const canCreatePerson = isNameValid && isEmailValid && isPhoneValid
        && name.length > 0 && email.length > 0 && phone.length > 0

    const handleAddPerson = () => {
        if (isNameValid && isEmailValid && isPhoneValid) {
            const payload = {
                name,
                phone: [{
                    value: phone,
                    primary: true
                }],
                email: [{
                    value: email,
                    primary: true
                }],
            }
            addPerson(payload)
            onClose()
        }
    }

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value
        const isValid = validateName(value)
        setIsNameValid(isValid)
        if (isValid) {
            setName(value)
        }
    }

    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value
        const isValid = validateEmail(value)
        setIsEmailValid(isValid)
        if (isValid) {
            setEmail(value)
        }
    }

    const handleChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value
        const isValid = validatePhone(value)
        setIsPhoneValid(isValid)
        if (isValid) {
            setPhone(value)
        }
    }


    return <Modal
        headerTitle={headerTitle}
        footer={(
            <AddBtn disabled={!canCreatePerson} onClick={handleAddPerson}>Add person</AddBtn>
        )}
        onClose={onClose}>
            <>
                 <PropertyContainer>
                     <Label>Name</Label>
                     <Input hasError={!isNameValid} onBlur={handleChangeName} />
                 </PropertyContainer>
                <PropertyContainer>
                    <Label>E-mail</Label>
                    <Input hasError={!isEmailValid} onBlur={handleChangeEmail} />
                </PropertyContainer>
                <PropertyContainer>
                    <Label>Phone</Label>
                    <Input hasError={!isPhoneValid} onBlur={handleChangePhone} />
                </PropertyContainer>
           </>
    </Modal>
}