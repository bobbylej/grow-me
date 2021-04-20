import { TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { FormBox } from 'app/shared/components/Form/FormBox/FormBox';

export interface SurveyMarkdownProps {
  markdown: string;
  onChangeMarkdown?: (markdown: string) => void;
}

export const SurveyMarkdown = (
  props: SurveyMarkdownProps,
): React.ReactElement => {
  const [markdown, setMarkdown] = useState(props.markdown);

  const onChangeMarkdown = (markdown: string): void => {
    setMarkdown(markdown);
    props.onChangeMarkdown && props.onChangeMarkdown(markdown);
  };

  return (
    <div>
      <FormBox
        title="Markdown"
        color="primaryLight"
        contentVariant="contained"
      >
        <TextField
          multiline
          fullWidth
          name="markdown"
          color="primary"
          variant="standard"
          className="code"
          value={markdown}
          onChange={(event) => onChangeMarkdown(event.target.value)}
        ></TextField>
      </FormBox>
    </div>
  );
};
