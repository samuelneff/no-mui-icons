export function PowerOffSharpIcon({ className, ...props }) {
  return (
    <svg className={`no-mui-icon no-mui-sharp-icon no-mui-power-off-sharp-icon ${ className ?? '' }`} {...props} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M18 14.49V9c0-1.1-.9-2-2-2V3h-2v4h-3.88l7.69 7.69.19-.2zM10 3H8v1.88l2 2zm-5.88.84L2.71 5.25l3.34 3.34c-.03.13-.05.27-.05.4v5.51L9.5 18v3h5v-3l.48-.48 4.47 4.47 1.41-1.41L4.12 3.84z"/></svg>
  );
}
