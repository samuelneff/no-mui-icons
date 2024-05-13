import { isString } from 'lodash';
import * as filledIcons from 'no-mui-icons-filled';
import * as outlinedIcons from 'no-mui-icons-outlined';
import * as roundedIcons from 'no-mui-icons-rounded';
import * as sharpIcons from 'no-mui-icons-sharp';
import * as twoToneIcons from 'no-mui-icons-two-tone';
import { FunctionComponent, HTMLAttributes } from 'react';

const { ThumbUpFilledIcon } = filledIcons;
const { ThumbUpOutlinedIcon } = outlinedIcons;
const { ThumbUpRoundedIcon } = roundedIcons;
const { ThumbUpSharpIcon } = sharpIcons;
const { ThumbUpTwoToneIcon } = twoToneIcons;

export type StyleName = keyof typeof styleIconByName;

export const iconKeySuffixPattern = /(Filled|Outlined|Rounded|Sharp|TwoTone)Icon$/;

export const styleNames: StyleName[] = [
  'filled',
  'outlined',
  'rounded',
  'sharp',
  'two-tone',
];

export const styleIconByName = {
  'filled': ThumbUpFilledIcon,
  'outlined': ThumbUpOutlinedIcon,
  'rounded': ThumbUpRoundedIcon,
  'sharp': ThumbUpSharpIcon,
  'two-tone': ThumbUpTwoToneIcon,
};

export const iconSetByName: Record<string, Record<string, FunctionComponent<HTMLAttributes<SVGElement>>>> = {
  'filled': filledIcons,
  'outlined': outlinedIcons,
  'rounded': roundedIcons,
  'sharp': sharpIcons,
  'two-tone': twoToneIcons,
};

export const filledIconNames = Object.keys(filledIcons).sort();

export const totalIconCount = filledIconNames.length * 5; // 5 styles

export const colorNames = [
  'slate',
  'crimson',
  'jade',
  'amber',
  'indigo',
];

export function iconBaseName(icon: string | FunctionComponent) {
  const iconName = isString(icon) ? icon : icon.name;
  return iconName.replace(iconKeySuffixPattern, '');
}
