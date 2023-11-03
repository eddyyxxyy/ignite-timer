import 'styled-components';

import { defaultTheme } from '../styles/themes/default';

type TdefaultTheme = typeof defaultTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends TdefaultTheme {}
}
