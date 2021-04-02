import { useIntl } from 'react-intl';
import React, { ReactElement, useContext } from 'react';
import {
  Button,
  Grid,
  IconButton,
  Typography,
} from '@material-ui/core';
import { AppContext } from 'app/shared/context/AppContext/AppContext';
import { AppContextActionType } from 'app/shared/context/AppContext/AppContext.actions';
import { HeaderTitle } from 'app/shared/components/HeaderTitle/HeaderTitle';
import useLayoutStyles from 'app/shared/styles/layout.styles';
import { usePageOneStyles } from 'app/views/PageOne/PageOne.styles';

let counter = 0;

const PageOne = (): ReactElement => {
  const intl = useIntl();
  const styles = usePageOneStyles();
  const { root, content } = useLayoutStyles();
  const { state, dispatch } = useContext(AppContext);
  const { items } = state;

  const addNewItem = (): void => {
    counter += 1;
    const newItem = `${intl.formatMessage({
      id: 'PAGE_ONE.LABEL.ITEM',
      defaultMessage: 'Item',
    })} ${counter}`;
    dispatch({
      type: AppContextActionType.addItem,
      payload: newItem,
    });
  };

  const removeItem = (item: string): void => {
    dispatch({
      type: AppContextActionType.removeItem,
      payload: item,
    });
  };

  const itemsElements = items?.map((item) => (
    <div key={item}>
      {item}{' '}
      <IconButton color="primary" onClick={() => removeItem(item)}>
        🗑
      </IconButton>
    </div>
  ));

  return (
    <div className={root}>
      <HeaderTitle
        title={intl.formatMessage({
          id: 'PAGE_ONE.TITLE',
          defaultMessage: 'Page one',
        })}
      />
      <Grid className={content} container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h1" gutterBottom>
            {intl.formatMessage({
              id: 'PAGE_ONE.LABEL.ITEMS',
              defaultMessage: 'Items',
            })}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => addNewItem()}
          >
            {intl.formatMessage({
              id: 'PAGE_ONE.ACTION.ADD_NEW_ITEM',
              defaultMessage: 'Add new item',
            })}
          </Button>
          <div className={styles.items}>{itemsElements}</div>
        </Grid>
      </Grid>
    </div>
  );
};

export default PageOne;
