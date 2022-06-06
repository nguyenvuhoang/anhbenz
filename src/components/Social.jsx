import {
  FiFacebook, FiGithub, FiInstagram, FiLinkedin, FiTwitter
} from "react-icons/fi";

const SocialShare = [
  {
    iconName: <FiFacebook />,
    link: "https://www.facebook.com/zAnhBenz/",
  },
  { 
    iconName: <FiTwitter />, 
    link: "https://twitter.com/nguyenvuhoangz/" 
  },
  {
    iconName: <FiInstagram />,
    link: "https://www.instagram.com/nguyenvuhoangz/?hl=en",
  },
  { 
    iconName: <FiGithub />, 
    link: "https://github.com/nguyenvuhoang/" },
  {
    iconName: <FiLinkedin />,
    link: "https://www.linkedin.com/in/anhben/",
  },
];
const Social = () => {
  return (
    <ul>
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            {val.iconName}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
