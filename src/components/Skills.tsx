import styled from "styled-components";

export const Skills: React.VFC = () => {
  return (
    <SSkill>
      <SContainer>
        <SHeading>
          <h2>Skills</h2>
        </SHeading>
      </SContainer>
    </SSkill>
  );
};

const SSkill = styled.div`
  padding: 128px 0;
  clear: both;
`;

const SContainer = styled.div`
  margin-bottom: 32px;
  text-align: center;
`;

const SHeading = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
`;
