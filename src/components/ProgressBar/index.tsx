import React from 'react';

import {CompletedProgressIndicator, Indicator} from './styled';

type Props = {
  length: number;
  progress: number;
};

export default function ProgressBar(props: Props) {
  const {length, progress} = props;

  const partPercentageProgress = 100 / length;
  const progressPercantage = partPercentageProgress * progress;

  return (
    <Indicator>
      <CompletedProgressIndicator percent={progressPercantage} />
    </Indicator>
  );
}
