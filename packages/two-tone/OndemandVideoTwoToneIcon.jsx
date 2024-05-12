export function OndemandVideoTwoToneIcon({ className, ...props }) {
  return (
    <svg className={`no-mui-icon no-mui-two-tone-icon no-mui-ondemand-video-two-tone-icon ${ className ?? '' }`} {...props} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 17h18V5H3v12zM9 7l7 4-7 4V7z" opacity=".3"/><path d="M9 7v8l7-4zm12-4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"/></svg>
  );
}