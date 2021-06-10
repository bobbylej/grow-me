import React from 'react';
import { TextField, Typography } from '@material-ui/core';
import { Color } from 'app/shared/types/color.type';
import { useQuestionSentenceStyles } from 'app/shared/components/Form/QuestionSentence/QuestionSentence.styles';

export interface QuestionSentenceProps {
  text: string;
  color?: Color;
  weight?: React.ReactElement;
  editMode?: boolean;
  changeText?: (text: string) => void;
}

export const QuestionSentence = ({
  text,
  color,
  weight,
  editMode = false,
  changeText,
}: QuestionSentenceProps): React.ReactElement => {
  const { root, textInput } = useQuestionSentenceStyles({ color });

  const onChangeText = (text: string): void => {
    changeText && changeText(text);
  };

  const textElement = editMode ? (
    <TextField
      value={text}
      fullWidth
      inputProps={{
        className: textInput,
      }}
      onChange={(event) => onChangeText(event.target.value)}
    />
  ) : (
    <Typography variant="body1">{text}</Typography>
  );

  return (
    <div className={root}>
      {textElement}
      {weight}
    </div>
  );
};
