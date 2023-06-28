import { createGlobalStyle } from 'styled-components';

import NeodgmTTF from './neodgm.woff'
import NeodgmTTF2 from './neodgm.woff2'

export default createGlobalStyle`
  @font-face {
    font-family: "neodgm";
    src: local('neodgm'),
    url(${NeodgmTTF2}) format("woff2"),   
    url(${NeodgmTTF}) format("woff");
    font-weight: 300;
    font-style: normal;  
  }
`
