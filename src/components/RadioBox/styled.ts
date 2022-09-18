import styled from 'styled-components/native';
import Text from '../Text';
import {RFValue} from 'react-native-responsive-fontsize';

export const Background = styled.TouchableOpacity`
  background: #d9d9d9;
  border-radius: 15px;
  padding: 15px 15px;
  flex-direction: row;
  width: 100%;
  margin-top: 15px;
`;
export const TextSide = styled.View`
  width: 90%;
`;
export const IconSide = styled.View`
  width: 10%;
`;

export const Title = styled(Text)`
  color: #464646;
  font-weight: 600;
  font-size: ${RFValue(18)}px;
`;
export const Description = styled(Text)`
  color: #646464;
  font-weight: 500;
  font-size: ${RFValue(16)}px;
`;
