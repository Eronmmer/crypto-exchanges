import { StyledIcon, StyledSocials } from "./Styles";

interface SocialsProps {
  twitter?: string;
  facebook?: string;
  reddit?: string;
  telegram?: string;
  slack?: string;
}

export const Socials = ({ twitter, facebook, reddit, telegram, slack }: SocialsProps) => {
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