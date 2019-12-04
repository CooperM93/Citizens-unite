import React from 'react';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import { CSSTransition } from 'react-transition-group';
import './styles/transitionStyles.css';

export default function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined,
    threshold: 200
});

  return (
    <CSSTransition in={!trigger} timeout={500} classNames='slide'>
      {children}
    </CSSTransition>
  );
}