import {
  Grid,
  TextField,
  Typography,
  TypographyVariant,
} from '@material-ui/core';
import React from 'react';
import { useFormBoxStyles } from 'app/shared/components/Form/FormBox/FormBox.styles';
import { Color } from 'app/shared/types/color.type';
import { BackgroundVariant } from 'app/shared/types/backgroundVariant.type';
import { Size } from 'app/shared/types/size.type';

export interface FormBoxProps {
  title: string | React.ReactNode;
  size?: Size;
  color?: Color;
  headerVariant?: BackgroundVariant;
  contentVariant?: BackgroundVariant;
  contentClassName?: string;
  editMode?: boolean;
  changeTitle?: (title: string) => void;
}

export const FormBox: React.FC<
  React.PropsWithChildren<FormBoxProps>
> = ({
  title,
  size = 'medium',
  color = 'primary',
  headerVariant = 'contained',
  contentVariant = 'outlined',
  contentClassName,
  editMode = false,
  changeTitle,
  children,
}: React.PropsWithChildren<FormBoxProps>): React.ReactElement => {
  const styles = useFormBoxStyles({
    size,
    color,
    headerVariant,
    contentVariant,
  });

  const headerTextVariant: Record<Size, TypographyVariant> = {
    small: 'body1',
    medium: 'h3',
  };

  const getTextFieldColor = (): 'primary' | 'secondary' => {
    switch (color) {
      case 'primary':
      case 'primaryLight':
        return 'primary';
      case 'secondary':
      case 'secondaryLight':
        return 'secondary';
    }
  };

  const onChangeTitle = (title: string): void => {
    changeTitle && changeTitle(title);
  };

  const titleElement = editMode ? (
    <TextField
      value={title}
      color={getTextFieldColor()}
      inputProps={{
        className: styles.headerInput,
      }}
      onChange={(event) => onChangeTitle(event.target.value)}
    />
  ) : (
    <Typography variant={headerTextVariant[size]}>{title}</Typography>
  );

  return (
    <div>
      <Grid container className={`${styles.header}`}>
        <Grid item>{titleElement}</Grid>
      </Grid>
      <Grid
        container
        className={`${styles.content} ${contentClassName}`}
      >
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
    </div>
  );
};
