import { parseNumberToPx } from './formatters'

const parsedModifiers = {
  m: value => `margin: ${parseNumberToPx(value)};`,
  mx: value => `
    margin-left: ${parseNumberToPx(value)};
    margin-right: ${parseNumberToPx(value)};
  `,
  my: value => `
    margin-top: ${parseNumberToPx(value)};
    margin-bottom: ${parseNumberToPx(value)};
  `,
  mt: value => `margin-top: ${parseNumberToPx(value)};`,
  mb: value => `margin-bottom: ${parseNumberToPx(value)};`,
  ml: value => `margin-left: ${parseNumberToPx(value)};`,
  mr: value => `margin-right: ${parseNumberToPx(value)};`,
  p: value => `padding: ${parseNumberToPx(value)};`,
  px: value => `
    padding-left: ${parseNumberToPx(value)};
    padding-right: ${parseNumberToPx(value)};
  `,
  py: value => `
    padding-top: ${parseNumberToPx(value)};
    padding-bottom: ${parseNumberToPx(value)};
  `,
  pt: value => `padding-top: ${parseNumberToPx(value)};`,
  pb: value => `padding-bottom: ${parseNumberToPx(value)};`,
  pr: value => `padding-right: ${parseNumberToPx(value)};`,
  pl: value => `padding-left: ${parseNumberToPx(value)};`,
  width: value => `width: ${parseNumberToPx(value)};`,
  maxWidth: value => `max-width: ${parseNumberToPx(value)};`
}

export const parseModifiers = ({
  m,
  mx,
  my,
  mb,
  mt,
  ml,
  mr,
  p,
  px,
  py,
  pb,
  pt,
  pr,
  pl,
  width,
  maxWidth
}) => {
  const modifiers = {
    m,
    mx,
    my,
    mb,
    mt,
    ml,
    mr,
    p,
    px,
    py,
    pb,
    pt,
    pr,
    pl,
    width,
    maxWidth
  }

  return Object.entries(modifiers)
    .filter(([_, value]) => value || value === 0)
    .map(([key, value]) => parsedModifiers[key](value))
    .join('')
}
