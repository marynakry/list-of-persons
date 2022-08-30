import React from "react";
import {CardContent, CardFooter, CardHeader, CardHeaderTitle, CloseIcon, Overlay, PersonCard} from "./ModalStyles";

interface PersonDetailModalProps {
    headerTitle: string
    footer: React.ReactNode
    onClose: () => void
    children: JSX.Element,
}

export const Modal = ({headerTitle, footer, onClose, children}: PersonDetailModalProps): JSX.Element => {

    return <Overlay>
        <PersonCard>
            <CardHeader>
                <CardHeaderTitle>
                    {headerTitle}
                </CardHeaderTitle>
                <CloseIcon onClick={onClose}> X </CloseIcon>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            <CardFooter>
                {footer}
            </CardFooter>
        </PersonCard>
    </Overlay>
}