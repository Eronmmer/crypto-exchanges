import { ReactElement } from "react";
import { StyledFlex } from "./Styles";

interface FlexProps { children: ReactElement | ReactElement[] }

export const Flex = ({ children }: FlexProps) => {
  return (
    <StyledFlex>
      {children}
    </StyledFlex>
  )
};