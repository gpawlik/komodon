import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { InnerProps } from '../types';

export const MultiChoiceOn = ({ colour, width, height }: InnerProps) => (
    <Svg viewBox="0 0 32 32" width={width} height={height}>
        <Path
            d="M10.6503105,-3.33066907e-16 L13.3496895,2.22044605e-16 C16.1506554,-2.1597192e-16 17.7949849,0.339586861 19.3789817,1.18671762 C20.8569539,1.97714579 22.0228542,3.14304615 22.8132824,4.62101833 C23.6604131,6.20501512 24,7.84934463 24,10.6503105 L24,13.3496895 C24,16.1506554 23.6604131,17.7949849 22.8132824,19.3789817 C22.0228542,20.8569539 20.8569539,22.0228542 19.3789817,22.8132824 C17.7949849,23.6604131 16.1506554,24 13.3496895,24 L10.6503105,24 C7.84934463,24 6.20501512,23.6604131 4.62101833,22.8132824 C3.14304615,22.0228542 1.97714579,20.8569539 1.18671762,19.3789817 C0.339586861,17.7949849 2.1597192e-16,16.1506554 -2.22044605e-16,13.3496895 L2.22044605e-16,10.6503105 C-1.06467789e-16,7.84934463 0.339586861,6.20501512 1.18671762,4.62101833 C1.97714579,3.14304615 3.14304615,1.97714579 4.62101833,1.18671762 C6.20501512,0.339586861 7.84934463,2.14453749e-16 10.6503105,-3.33066907e-16 Z M9.30713064,14.5855439 L6.69413549,12.06587 C6.29657646,11.6825095 5.66351611,11.6940197 5.28015562,12.0915788 C4.89679514,12.4891378 4.90830532,13.1221981 5.30586435,13.5055586 L8.63919768,16.7198443 C9.03694953,17.1033908 9.67037994,17.0916565 10.0536535,16.6936417 L18.7203201,7.69364173 C19.1034079,7.29581986 19.0914635,6.66276755 18.6936416,6.27967982 C18.2958197,5.8965921 17.6627674,5.90853648 17.2796797,6.30635835 L9.30713064,14.5855439 Z"
            stroke="none"
        />
    </Svg>
);