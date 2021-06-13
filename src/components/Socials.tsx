import styled from "styled-components";
import React from "react";

interface SocialsProps {
  twitter?: string;
  facebook?: string;
  reddit?: string;
  telegram?: string;
  slack?: string;
}

const Socials: React.FC<SocialsProps> = ({ twitter, facebook, reddit, telegram, slack }) => {
  return (
    <StyledSocials>
      {twitter &&
        <a href={`https://twitter.com/${twitter}`}>
          <StyledIcon alt="twitter" src="/icons/twitter.png" />
        </a>
      }
      {facebook &&
        <a href={facebook}>
          <StyledIcon alt="facebook" src="/icons/facebook.png" />
        </a>
      }
      {reddit &&
        <a href={reddit}>
          <StyledIcon alt="reddit" src="/icons/reddit.png" />
        </a>
      }
      {telegram &&
        <a href={telegram}>
          <StyledIcon alt="telegram" src="/icons/telegram.png" />
        </a>
      }
      {slack &&
        <a href={slack}>
          <StyledIcon alt="slack" src="/icons/slack.png" />
        </a>
      }
    </StyledSocials>
  )
};

const StyledSocials = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: .5rem;
  align-items: center;
`;

const StyledIcon = styled.img`
  width: 30px;
`

export default Socials;