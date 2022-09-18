import styled from 'styled-components/native';

export const Indicator = styled.View`
  width: 100%;
  flex-direction: row;
  border-radius: 5px;
  padding: 0.5px;
  border: 1.5px solid #dedede;
  margin: 2px 2px;
`;

type CompletedProps = {
  percent: number;
};
export const CompletedProgressIndicator = styled.View<CompletedProps>`
  width: ${prop => prop.percent}%;
  background-color: green;
  height: 6px;
  border-radius: 3px;
`;
