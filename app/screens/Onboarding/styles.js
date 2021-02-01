import styled from 'styled-components/native';
/* import { Platform, Constants } from 'react-native'; */

import {COLORS, SIZES} from '../../constants/theme';


/* const statusBarHeight = 
  Platform.OS === 'android' ? Constants.statusBarHeight : 0; */

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.white}; 
`;

export const Dots = styled.View`
  border-radius: 12px;
  background-color: ${COLORS.blue};
  marginHorizontal: 6px;
  width: 20px;
  height: 20px;
`;

export const Main = styled.View `

`;