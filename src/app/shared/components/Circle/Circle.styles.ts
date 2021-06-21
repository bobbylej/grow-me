import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { CircleProps } from 'app/shared/components/Circle/Circle';
import { Size } from 'app/shared/types/size.type';
import { pxToRem } from 'app/shared/utils/styles.utils';

const getSize = (size?: Size): string => {
  switch (size) {
    case 'small':
      return pxToRem(20);
    case 'medium':
      return pxToRem(30);
    default:
      return pxToRem(30);
  }
};

export const useCircleStyles = makeStyles((theme: Theme) => ({
  circle: ({ color = 'primary', size }: CircleProps) => ({
    boxSizing: 'border-box',
    fontSize: '1rem',
    width: getSize(size),
    height: getSize(size),
    color: theme.palette[color].contrastText,
    backgroundColor: theme.palette[color].dark,
  }),
  circleActive: ({ color = 'primary' }: CircleProps) => ({
    backgroundColor: theme.palette[color].contrastText,
    border: `5px solid ${theme.palette[color].main}`,
  }),
  circleOutlined: ({ color = 'primary' }: CircleProps) => ({
    backgroundColor: theme.palette[color].contrastText,
    border: `1px solid ${theme.palette[color].main}`,
  }),
  circleCovered: ({ color = 'primary' }: CircleProps) => ({
    backgroundColor: theme.palette[color].main,
    border: `1px solid ${theme.palette[color].main}`,
  }),
}));
