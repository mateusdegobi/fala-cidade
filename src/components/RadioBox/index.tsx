import {Background, IconSide, TextSide, Title, Description} from './styled';

const RadioBox = props => {
  return (
    <Background>
      <TextSide>
        <Title>{props.children}</Title>
        <Description>{props.description}</Description>
      </TextSide>
      <IconSide></IconSide>
    </Background>
  );
};

export default RadioBox;
