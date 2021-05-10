import {
  Grid,
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
  children,
}: React.PropsWithChildren<FormBoxProps>): React.ReactElement => {
  const styles = useFormBoxStyles();
  const headerTextVariant: Record<Size, TypographyVariant> = {
    small: 'body1',
    medium: 'h3',
  };
  const headerColorClasses: Record<Color, string> = {
    primary: styles.headerPrimary,
    primaryLight: styles.headerPrimaryLight,
    secondary: styles.headerSecondary,
  };
  const headerVariantClasses: Record<BackgroundVariant, string> = {
    contained: styles.headerContained,
    outlined: '',
  };
  const contentColorClasses: Record<Color, string> = {
    primary: styles.contentPrimary,
    primaryLight: styles.contentPrimaryLight,
    secondary: styles.contentSecondary,
  };
  const contentVariantClasses: Record<BackgroundVariant, string> = {
    contained: styles.contentContained,
    outlined: '',
  };

  return (
    <div>
      <Grid
        container
        className={`${styles.header} ${headerColorClasses[color]} ${headerVariantClasses[headerVariant]}`}
      >
        <Grid item>
          <Typography variant={headerTextVariant[size]}>
            {title}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        className={`${styles.content} ${contentColorClasses[color]} ${contentVariantClasses[contentVariant]} ${contentClassName}`}
      >
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
    </div>
  );
};
