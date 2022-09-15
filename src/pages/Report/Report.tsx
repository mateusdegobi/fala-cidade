import {View, Text} from 'react-native';
import React from 'react';
import TitleLarge from '../../components/TitleLarge';
import RadioBox from '../../components/RadioBox';

export default function Report() {
  return (
    <View style={{backgroundColor: 'white', flex: 1, padding: 20}}>
      <TitleLarge>Talvez você queira...</TitleLarge>
      <RadioBox description="Como tapa-buracos, coleta de entulhos, etc">
        Deixar sugestões ou pedidos
      </RadioBox>
      <RadioBox description="Como tapa-buracos, coleta de entulhos, etc">
        Deixar sugestões ou pedidos
      </RadioBox>
      <RadioBox description="Como tapa-buracos, coleta de entulhos, etc">
        Deixar sugestões ou pedidos
      </RadioBox>
    </View>
  );
}
