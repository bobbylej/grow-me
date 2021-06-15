import React from 'react';
import { TextField } from '@material-ui/core';
import { useIntl } from 'react-intl';
import { FormBox } from 'app/shared/components/Form/FormBox/FormBox';
import { FabPopper } from 'app/shared/components/FabPopper/FabPopper';
import { MarkdownCheatsheet } from 'app/shared/components/MarkdownCheatsheet/MarkdownCheatsheet';
import { SimplyColor } from 'app/shared/types/color.type';

export interface FormMarkdownProps {
  color?: SimplyColor;
  markdown?: string;
  changeMarkdown?: (markdown: string) => void;
}

export const FormMarkdown = ({
  color = 'primary',
  markdown,
  changeMarkdown,
}: FormMarkdownProps): React.ReactElement => {
  const intl = useIntl();

  const onChangeMarkdown = (markdown: string): void => {
    changeMarkdown && changeMarkdown(markdown);
  };

  return (
    <div>
      <FormBox
        title="Markdown"
        color={
          color === 'primary' ? 'primaryLight' : 'secondaryLight'
        }
        contentVariant="contained"
      >
        <TextField
          multiline
          fullWidth
          name="markdown"
          color={color}
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
        color={color}
      >
        <MarkdownCheatsheet color={color} />
      </FabPopper>
    </div>
  );
};
