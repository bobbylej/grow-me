import React, { useEffect, useState } from 'react';
import { IntersectionState } from 'app/shared/enums/intersectionState.enum';

export const useOnScreen = (
  refs: React.RefObject<Element>[],
): Record<string, IntersectionState> => {
  const [isIntersecting, setIntersecting] = useState({});

  const observer = new IntersectionObserver((entries) => {
    const intersectionMap = { ...isIntersecting } as Record<
      string,
      IntersectionState
    >;
    entries.forEach((entry) => {
      const id = entry.target.getAttribute('id');
      if (id) {
        const state = entry.isIntersecting
          ? IntersectionState.active
          : entry.boundingClientRect.bottom < 0
          ? IntersectionState.done
          : IntersectionState.pending;
        intersectionMap[id] = state;
      }
    });
    setIntersecting(intersectionMap);
  });

  useEffect(() => {
    refs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current as Element);
      }
    });
    return () => {
      observer.disconnect();
    };
  }, []);

  return isIntersecting;
};
