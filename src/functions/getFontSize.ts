import { PixelRatio } from 'react-native';
const fontScale = PixelRatio.getFontScale();
let getFontSize;
export default getFontSize = (size: number) => size / fontScale;