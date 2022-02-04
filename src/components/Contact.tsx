import styled from "styled-components";

export const Contact: React.VFC = () => {
  return (
    <SContact>
      <SContainer>
        <SContentList>
          <h2>Contact to Me!</h2>
          <SDescription>
            お仕事のご相談・ご依頼など下記よりご連絡ください。
          </SDescription>
          <SContactAnchor
            href="https://twitter.com/Nobuu_777"
            target="_blank"
            rel="noopener noreferrer">
            Contact Us
          </SContactAnchor>
        </SContentList>
      </SContainer>
    </SContact>
  );
};

const SContact = styled.div`
  padding: 128px 0;
  clear: both;
  background: #30bfba;
`;

const SContainer = styled.div``;

const SContentList = styled.div`
  color: white;
  text-align: center;
`;

const SDescription = styled.p`
  font-size: 16px;
`;

const SContactAnchor = styled.a`
  font-family: "Space Mono", Arial, serif;
  font-size: 16px;
  border: none !important;
  border-radius: 30px;
  padding: 16px 64px;
  text-decoration: none;
  height: 54px;
  background: #fff;
  color: #30bfba;
`;
