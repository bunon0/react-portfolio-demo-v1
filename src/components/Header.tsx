import styled, { css } from "styled-components";
import { FaTwitter, FaGithub } from "react-icons/fa";

import coverImage from "../images/cover-image.jpeg";
import profileImage from "../images/profile-image.png";

export const Header: React.VFC = () => {
  return (
    <SHeader style={{ backgroundImage: `url(${coverImage})` }}>
      <SOverlay></SOverlay>
      <SContainer>
        <STable>
          <STableContentList>
            <SProfileThumbnail
              style={{
                backgroundImage: `url(${profileImage})`,
              }}></SProfileThumbnail>
            <STitleText>Nobu_u</STitleText>
            <STitleSubText>Web Engineer</STitleSubText>
            <SSocialIconList>
              <SSocialIcon>
                <SSocialIconLink
                  href="https://twitter.com/Nobuu_777"
                  target="_blink"
                  rel="noopener noreferrer">
                  <FaTwitter color="white" size="2rem" />
                </SSocialIconLink>
                <SSocialIconLink
                  href="https://github.com/bunon0"
                  target="_blink"
                  rel="noopener noreferrer">
                  <FaGithub color="white" size="2rem" />
                </SSocialIconLink>
              </SSocialIcon>
            </SSocialIconList>
          </STableContentList>
        </STable>
      </SContainer>
    </SHeader>
  );
};

const SHeader = styled.header`
  background-color: transparent;
  background-size: cover;
  background-attachment: fixed;
  position: relative;
  height: 100vh;
  width: 100%;
`;

const SOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(48, 191, 186, 0.9);
`;

const SContainer = styled.div`
  width: 1170px;
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

const STable = styled.div`
  width: 100%;
  height: 100vh;
  display: table;
`;

const STableContentList = styled.div`
  padding: 128px 0;
  text-align: center;
  display: table-cell;
  vertical-align: middle;
`;

const SProfileThumbnail = styled.div`
  background-size: cover !important;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
  height: 200px;
  width: 200px;
  margin: 0 auto;
  margin-bottom: 30px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  border-radius: 50%;
`;

const STitleText = styled.h1`
  color: white;
  position: relative;
`;

const STitleSubText = STitleText.withComponent("h3");

const SSocialIconList = styled.ul`
  margin: 0;
  padding: 0;
  position: relative;
  z-index: 1;
`;

const SSocialIcon = styled.li`
  margin: 0;
  padding: 0;
  list-style: none;
  display: inline-block;
`;

const IconLinkStyled = css`
  display: inline-block;
  color: #30bfba;
  padding-left: 10px;
  padding-right: 10px;
`;

type Props = {
  href: string;
};

const SSocialIconLink = styled.a.attrs<Props>(props => ({
  href: props.href,
}))<Props>`
  ${IconLinkStyled}
`;
