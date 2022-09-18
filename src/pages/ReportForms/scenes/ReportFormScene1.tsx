import {View, Text} from 'react-native';
import React from 'react';
import ProgressBar from '../../../components/ProgressBar';

export default function ReportFormScene1() {
  return (
    <View>
      <View>
        <Text>
          Passo {1} de {4}
        </Text>
        <ProgressBar progress={1} length={4} />
      </View>
    </View>
  );
}
