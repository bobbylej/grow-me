import { Fab, Popper } from '@material-ui/core';
import React, { useState } from 'react';
import { FabContainer } from 'app/shared/components/FabContainer/FabContainer';
import { useFabStyles } from 'app/shared/styles/fab.styles';

export interface FabPopperProps {
  button: React.ReactChild;
}

export const FabPopper = ({
  button,
  children,
}: React.PropsWithChildren<FabPopperProps>): React.ReactElement => {
  const { fab } = useFabStyles();
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleClick = (
    event: React.MouseEvent<HTMLElement>,
  ): void => {
    setAnchorEl(event.currentTarget);
    setOpen(!open);
  };

  return (
    <FabContainer>
      <Fab
        className={fab}
        color="primary"
        aria-label="cheatsheet"
        onClick={handleClick}
      >
        {button}
      </Fab>
      <Popper
        open={open}
        anchorEl={anchorEl}
        placement="top-end"
        transition
      >
        {children}
      </Popper>
    </FabContainer>
  );
};
