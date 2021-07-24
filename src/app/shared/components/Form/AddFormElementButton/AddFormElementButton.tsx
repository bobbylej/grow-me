import React, { useState } from 'react';
import Add from '@material-ui/icons/Add';
import { Popper, ClickAwayListener } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import { useIntl } from 'react-intl';
import { Circle } from 'app/shared/components/Circle/Circle';
import { SimplyColor } from 'app/shared/types/color.type';
import { BackgroundVariant } from 'app/shared/types/backgroundVariant.type';
import { MarkdownRuleType } from 'app/shared/types/markdownRule.type';
import { useAddFormElementButtonStyles } from 'app/shared/components/Form/AddFormElementButton/AddFormElementButton.styles';

export interface AddFormElementButtonProps {
  possibleFormElementsTypes: MarkdownRuleType[];
  color?: SimplyColor;
  variant?: BackgroundVariant;
  onAdd?: (type: MarkdownRuleType) => void;
}

export const AddFormElementButton = ({
  possibleFormElementsTypes,
  color,
  variant,
  onAdd,
}: AddFormElementButtonProps): React.ReactElement => {
  const intl = useIntl();
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const { menu, menuItem } = useAddFormElementButtonStyles({
    color,
  });

  const handleClick = (
    event: React.MouseEvent<HTMLElement>,
  ): void => {
    setAnchorEl(event.currentTarget);
    setOpen(!open);
  };

  const handleClose = (): void => {
    open && setOpen(false);
  };

  const handleElementClick = (type: MarkdownRuleType) => {
    handleClose();
    onAdd && onAdd(type);
  };

  const getFormElementNameByType = (
    type: MarkdownRuleType,
  ): string | undefined => {
    switch (type) {
      case 'group':
        return intl.formatMessage({
          id: 'GLOBAL.LABEL.GROUP',
          defaultMessage: 'Group',
        });
      case 'section':
        return intl.formatMessage({
          id: 'GLOBAL.LABEL.SECTION',
          defaultMessage: 'Section',
        });
      case 'questionSingle':
        return intl.formatMessage({
          id: 'GLOBAL.LABEL.QUESTION_SINGLE',
          defaultMessage: 'Single Question',
        });
      case 'questionGroup':
        return intl.formatMessage({
          id: 'GLOBAL.LABEL.QUESTION_GROUP',
          defaultMessage: "Questions' Group",
        });
      case 'questionSentence':
        return intl.formatMessage({
          id: 'GLOBAL.LABEL.QUESTION_SENTENCE',
          defaultMessage: "Question's Sentence",
        });
      case 'radioButton':
        return intl.formatMessage({
          id: 'GLOBAL.LABEL.RADIO_BUTTON',
          defaultMessage: 'Radio Button',
        });
      case 'checkBox':
        return intl.formatMessage({
          id: 'GLOBAL.LABEL.CHECK_BOX',
          defaultMessage: 'Check Box',
        });
      case 'textInput':
        return intl.formatMessage({
          id: 'GLOBAL.LABEL.TEXT_INPUT',
          defaultMessage: 'Text Input',
        });
      case 'textareaInput':
        return intl.formatMessage({
          id: 'GLOBAL.LABEL.TEXT_AREA_INPUT',
          defaultMessage: 'Text Area Input',
        });
    }
  };

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div>
        <IconButton
          aria-label="add"
          aria-controls="form-elements-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <Circle size="medium" color={color} variant={variant}>
            <Add />
          </Circle>
        </IconButton>
        <Popper
          open={open}
          anchorEl={anchorEl}
          placement="right"
          className={menu}
        >
          {possibleFormElementsTypes.map((type) => (
            <MenuItem
              key={type}
              className={menuItem}
              onClick={() => handleElementClick(type)}
            >
              {intl.formatMessage({
                id: 'GLOBAL.ACTION.ADD',
                defaultMessage: 'Add',
              })}{' '}
              {getFormElementNameByType(type)}
            </MenuItem>
          ))}
        </Popper>
      </div>
    </ClickAwayListener>
  );
};
