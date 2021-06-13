import { useHistory } from "react-router-dom";
import {StyledBackButton} from "./Styles";

interface BackButtonProps {
    text: string;
}

export const BackButton = ({text}: BackButtonProps) => {
    const history = useHistory();

    const handleGoBack = () => {
        history.goBack();
    }

    return (
        <StyledBackButton onClick={handleGoBack}>
            <img alt="go back" src="/icons/back.svg" />
            <strong>{text}</strong>
        </StyledBackButton>
    )
};