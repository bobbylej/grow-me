import { TextField } from '@material-ui/core';
import React, { useContext } from 'react';
import { useIntl } from 'react-intl';
import { FormBox } from 'app/shared/components/Form/FormBox/FormBox';
import { FabPopper } from 'app/shared/components/FabPopper/FabPopper';
import { MarkdownCheatsheet } from 'app/shared/components/MarkdownCheatsheet/MarkdownCheatsheet';
import { FormCreatorContext } from 'app/shared/context/FormCreatorContext/FormCreatorContext';
import { FormCreatorContextActionType } from 'app/shared/context/FormCreatorContext/FormCreatorContext.actions';

export const SurveyMarkdown = (): React.ReactElement => {
  const intl = useIntl();

  const { state, dispatch } = useContext(FormCreatorContext);
  const { markdown } = state;

  const onChangeMarkdown = (markdown: string): void => {
    dispatch({
      type: FormCreatorContextActionType.setMarkdown,
      payload: markdown,
    });
  };

  return (
    <div>
      <FormBox
        title="Markdown"
        color="secondaryLight"
        contentVariant="contained"
      >
        <TextField
          multiline
          fullWidth
          name="markdown"
          color="secondary"
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
        color="secondary"
      >
        <MarkdownCheatsheet color="secondary" />
      </FabPopper>
    </div>
  );
};
