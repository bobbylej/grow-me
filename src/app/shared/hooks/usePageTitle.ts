import { useContext, useEffect } from 'react';
import { PageContext } from 'app/shared/context/PageContext/PageContext';
import { PageContextActionType } from 'app/shared/context/PageContext/PageContext.actions';

export const usePageTitle = (title: string): void => {
  const pageContext = useContext(PageContext);

  useEffect(() => {
    const setPageTitle = () => {
      pageContext.dispatch({
        type: PageContextActionType.setTitle,
        payload: title,
      });
    };

    const cleanPageTitle = () => {
      pageContext.dispatch({
        type: PageContextActionType.setTitle,
        payload: undefined,
      });
    };

    setPageTitle();
    return () => {
      cleanPageTitle();
    };
  }, [title, pageContext]);
};
