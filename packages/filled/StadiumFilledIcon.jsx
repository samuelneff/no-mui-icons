export function StadiumFilledIcon({ className, ...props }) {
  return (
    <svg className={`no-mui-icon no-mui-filled-icon no-mui-stadium-filled-icon ${ className ?? '' }`} {...props} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/></g><g><path d="M7,5L3,7V3L7,5z M18,3v4l4-2L18,3z M11,2v4l4-2L11,2z M5,10.04C6.38,10.53,8.77,11,12,11s5.62-0.47,7-0.96 C19,9.86,16.22,9,12,9S5,9.86,5,10.04z M15,17H9l0,4.88C4.94,21.49,2,20.34,2,19v-9c0-1.66,4.48-3,10-3s10,1.34,10,3v9 c0,1.34-2.94,2.48-7,2.87L15,17z"/></g></svg>
  );
}
