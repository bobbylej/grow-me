import { ClickAwayListener, Fab, Popper } from '@material-ui/core';
import React, { useState } from 'react';
import { FabContainer } from 'app/shared/components/FabContainer/FabContainer';
import { useFabStyles } from 'app/shared/styles/fab.styles';
import { useFabPopperStyles } from 'app/shared/components/FabPopper/FabPopper.styles';

export interface FabPopperProps {
  button: React.ReactChild;
  size?: 'small' | 'medium';
}

export const FabPopper = ({
  button,
  children,
  size,
}: React.PropsWithChildren<FabPopperProps>): React.ReactElement => {
  const { fab } = useFabStyles();
  const { popper } = useFabPopperStyles({ size });
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleClick = (
    event: React.MouseEvent<HTMLElement>,
  ): void => {
    setAnchorEl(event.currentTarget);
    setOpen(!open);
  };

  const handleClickAway = (): void => {
    open && setOpen(false);
  };

  return (
    <FabContainer>
      <ClickAwayListener onClickAway={handleClickAway}>
        <div>
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
            className={popper}
          >
            {children}
          </Popper>
        </div>
      </ClickAwayListener>
    </FabContainer>
  );
};
