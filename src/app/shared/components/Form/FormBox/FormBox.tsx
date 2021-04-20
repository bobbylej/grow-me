import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useFormBoxStyles } from 'app/shared/components/Form/FormBox/FormBox.styles';
import { Color } from 'app/shared/types/color.type';
import { BackgroundVariant } from 'app/shared/types/backgroundVariant.type';

export interface FormBoxProps {
  title: string;
  color?: Color;
  headerVariant?: BackgroundVariant;
  contentVariant?: BackgroundVariant;
}

export const FormBox = ({
  title,
  color = 'primary',
  headerVariant = 'contained',
  contentVariant = 'outlined',
  children,
}: React.PropsWithChildren<FormBoxProps>): React.ReactElement => {
  const {
    header,
    headerPrimary,
    headerPrimaryLight,
    headerSecondary,
    headerContained,
    content,
    contentPrimary,
    contentPrimaryLight,
    contentSecondary,
    contentContained,
  } = useFormBoxStyles();
  const headerColorClasses: Record<Color, string> = {
    primary: headerPrimary,
    primaryLight: headerPrimaryLight,
    secondary: headerSecondary,
  };
  const headerVariantClasses: Record<BackgroundVariant, string> = {
    contained: headerContained,
    outlined: '',
  };
  const contentColorClasses: Record<Color, string> = {
    primary: contentPrimary,
    primaryLight: contentPrimaryLight,
    secondary: contentSecondary,
  };
  const contentVariantClasses: Record<BackgroundVariant, string> = {
    contained: contentContained,
    outlined: '',
  };

  return (
    <div>
      <Grid
        container
        className={`${header} ${headerColorClasses[color]} ${headerVariantClasses[headerVariant]}`}
      >
        <Grid item>
          <Typography variant="h3">{title}</Typography>
        </Grid>
      </Grid>
      <Grid
        container
        className={`${content} ${contentColorClasses[color]} ${contentVariantClasses[contentVariant]}`}
      >
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
    </div>
  );
};
