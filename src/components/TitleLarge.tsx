import {TextProps} from 'react-native';
import styled from 'styled-components/native';
import Text from './Text';

const TitleLarge = styled(Text)<TextProps>`
  font-size: 23px;
  color: #464646;
  font-weight: 700;
  margin-bottom: 15px;
`;

export default TitleLarge;