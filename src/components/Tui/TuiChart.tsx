import { cva } from '../../../styled-system/css/cva';
import { RecipeVariantProps } from '../../../styled-system/types';

import { Component, JSX, splitProps } from 'solid-js';

const vertical = sva({
  className: 'tui-chart',
  slots: ['vertical', 'display', 'Yaxis', 'Xaxis', 'horizontal', 'legend'],
  base: {
    vertical: {
      position: 'relative',
      backgroundColor: 'black',
    },
    display: {
      display: 'flex',
      position: 'absolute',
      top: '0px',
      left: '50px',
      right: '0px',
      bottom: '30px',
      alignItems: 'flex-end',
      borderBottom: '2px solid white',
      borderLeft: '2px solid white',
      '& display': {
        display: 'flex',
        position: 'absolute',
        flexDirection: 'column',
        top: '0px',
        left: '50px',
        right: '0px',
        bottom: '30px',
        alignItems: 'stretch',
        borderBottom: '2px solid white',
        borderLeft: '2px solid white',
      },
    },
    Xaxis: {
      display: 'flex',
      position: 'absolute',
      height: '30px',
      left: '50px',
      right: '0px',
      bottom: '0px',
      lineHeight: '30px',
    },
    Yaxis: {
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      top: '0px',
      left: '0px',
      bottom: '30px',
      width: '50px',
    },
    legend: {},
  },
  variants: {
    noX: {
      true: {
        bottom: '0px',
      },
    },
    noY: {
      true: {
        left: '0px',
      },
    },
  },
});
