export function NightlightOutlinedIcon({ className, ...props }) {
  return (
    <svg className={`no-mui-icon no-mui-outlined-icon no-mui-nightlight-outlined-icon ${ className ?? '' }`} {...props} xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><g><path d="M14,4c0.34,0,0.68,0.02,1.01,0.07C13.1,6.23,12,9.05,12,12s1.1,5.77,3.01,7.93C14.68,19.98,14.34,20,14,20 c-4.41,0-8-3.59-8-8S9.59,4,14,4 M14,2C8.48,2,4,6.48,4,12s4.48,10,10,10c1.82,0,3.53-0.5,5-1.35c-2.99-1.73-5-4.95-5-8.65 s2.01-6.92,5-8.65C17.53,2.5,15.82,2,14,2L14,2z"/></g></g></g></svg>
  );
}
