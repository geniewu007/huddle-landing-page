import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa'
import { StyledSocialIcons } from './styles/SocialIcons.styled';

const SocialIcons = () => {
  return (
    <StyledSocialIcons>
        <li><a href="https://www.facebook.com"><FaFacebookF /></a></li>
        <li><a href="https://www.twitter.com"><FaTwitter /></a></li>
        <li><a href="https://www.instagram.com"><FaInstagram /></a></li>
    </StyledSocialIcons>);
};

export default SocialIcons;
