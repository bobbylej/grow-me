import { useContext, useEffect } from 'react';
import { PageContext } from 'app/shared/context/PageContext/PageContext';
import { PageContextActionType } from 'app/shared/context/PageContext/PageContext.actions';

export const usePageTitle = (title: string): void => {
  const { dispatch } = useContext(PageContext);

  useEffect(() => {
    const setPageTitle = () => {
      dispatch({
        type: PageContextActionType.setTitle,
        payload: title,
      });
    };

    const cleanPageTitle = () => {
      dispatch({
        type: PageContextActionType.setTitle,
        payload: undefined,
      });
    };

    setPageTitle();
    return () => {
      cleanPageTitle();
    };
  }, [title, dispatch]);
};
