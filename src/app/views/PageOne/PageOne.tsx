import React, { ReactElement, useContext } from 'react';
import useStyles from 'app/views/PageOne/PageOne.styles';
import { AppContext } from 'app/shared/context/AppContext/AppContext';
import { AppContextActionType } from 'app/shared/context/AppContext/AppContext.actions';

let counter = 0;

const PageOne = (): ReactElement => {
  const { root } = useStyles();
  const { state, dispatch } = useContext(AppContext);
  const { items } = state;

  const addNewItem = (): void => {
    counter += 1;
    const newItem = `item ${counter}`;
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
      <button type="button" onClick={() => removeItem(item)}>
        🗑
      </button>
    </div>
  ));

  return (
    <div className={root}>
      <h1>Page One</h1>
      <button type="button" onClick={() => addNewItem()}>
        Add random item
      </button>
      {itemsElements}
    </div>
  );
};

export default PageOne;
