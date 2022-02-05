import { useEffect, useReducer, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Circle } from "react-circle";

import { requestStates } from "../utils/constant";

import {
  skillReducer,
  initialState,
  actionTypes,
} from "../reducers/skillReducer";

type Language = {
  language: string;
};

type GenerateCountLanguage = [
  {
    language: string;
    count: number;
  }
];

export const Skills: React.VFC = () => {
  const [state, dispatch] = useReducer(skillReducer, initialState);

  useEffect(() => {
    dispatch({ type: actionTypes.fetch });
    axios
      .get("https://api.github.com/users/bunon0/repos")
      .then((response) => {
        const dataLanguageList = response.data.map(
          (res: Language) => res.language
        );
        const generateCountLanguageList: GenerateCountLanguage =
          dataLanguageList.map((item: Language) => {
            return {
              language: item,
              count: dataLanguageList.filter(
                (language: Language) => language === item
              ).length,
            };
          });

        const duplicateLanguageList = generateCountLanguageList.filter(
          (item, index, self) => {
            const filterLanguageList = self.map((item) => item["language"]);
            if (filterLanguageList.indexOf(item.language) === index) {
              return item;
            } else {
              return null;
            }
          }
        );

        dispatch({
          type: actionTypes.success,
          payload: { languageList: duplicateLanguageList },
        });
        console.log(duplicateLanguageList);
      })
      .catch(() => {
        dispatch({ type: actionTypes.error });
      });
  }, []);

  const converseCountToPercentage = (count: number) => {
    if (count > 10) {
      return 100;
    }
    return count * 10;
  };

  return (
    <SSkillList>
      <SContainer>
        <SHeading>
          <h2>GitHub Use Languages</h2>
        </SHeading>
        <SSkillWrapper>
          {state.requestStates === requestStates.loading && <p>取得中....</p>}
          {state.requestStates === requestStates.success &&
            state.languageList.map((item: any, index: number) => (
              <div key={index}>
                <p className="description">
                  <strong>{item.language}</strong>
                </p>
                <Circle
                  animate
                  progress={converseCountToPercentage(item.count)}
                />
              </div>
            ))}
          {state.requestState === requestStates.error && (
            <p>エラーが発生しました</p>
          )}
        </SSkillWrapper>
      </SContainer>
    </SSkillList>
  );
};

const SSkillList = styled.div`
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

const SSkillWrapper = styled.div``;
