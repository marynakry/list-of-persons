import React from "react";
import {Photo} from "./PersonPhotoStyles";

interface PersonPhotoProps {
  name: string
}

export const PersonPhoto = ({name}: PersonPhotoProps): JSX.Element => {
    return <Photo>
        <div>
            {name}
        </div>
    </Photo>
}