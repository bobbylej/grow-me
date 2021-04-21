import { TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { FormBox } from 'app/shared/components/Form/FormBox/FormBox';
import { FabPopper } from 'app/shared/components/FabPopper/FabPopper';
import { MarkdownCheatsheet } from 'app/shared/components/MarkdownCheatsheet/MarkdownCheatsheet';

export interface SurveyMarkdownProps {
  markdown: string;
  onChangeMarkdown?: (markdown: string) => void;
}

export const SurveyMarkdown = (
  props: SurveyMarkdownProps,
): React.ReactElement => {
  const intl = useIntl();
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
      <FabPopper
        button={intl.formatMessage({
          id: 'GLOBAL.LABEL.MARKDOWN_ABBREVIATION',
          defaultMessage: 'MC',
        })}
        size="medium"
      >
        <MarkdownCheatsheet />
      </FabPopper>
    </div>
  );
};
