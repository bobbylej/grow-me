import React from 'react';
import { useIntl } from 'react-intl';
import { FormBox } from 'app/shared/components/Form/FormBox/FormBox';

export const MarkdownCheatsheet = (): React.ReactElement => {
  const intl = useIntl();

  return (
    <FormBox
      title={intl.formatMessage({
        id: 'GLOBAL.LABEL.MARKDOWN_CHEATSHEET',
        defaultMessage: 'Markdown Cheatsheet',
      })}
      size="small"
      contentVariant="contained"
    >
      <div className="code">Markdown</div>
    </FormBox>
  );
};
