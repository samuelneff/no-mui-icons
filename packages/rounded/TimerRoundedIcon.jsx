export function TimerRoundedIcon({ className, ...props }) {
  return (
    <svg className={`no-mui-icon no-mui-rounded-icon no-mui-timer-rounded-icon ${ className ?? '' }`} {...props} xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/></g><g><g><path d="M10,3h4c0.55,0,1-0.45,1-1c0-0.55-0.45-1-1-1h-4C9.45,1,9,1.45,9,2C9,2.55,9.45,3,10,3z"/><path d="M19.03,7.39l0.75-0.75c0.38-0.38,0.39-1.01,0-1.4c0,0-0.01-0.01-0.01-0.01c-0.39-0.39-1.01-0.38-1.4,0l-0.75,0.75 C16.07,4.74,14.12,4,12,4c-4.8,0-8.88,3.96-9,8.76C2.87,17.84,6.94,22,12,22c4.98,0,9-4.03,9-9C21,10.88,20.26,8.93,19.03,7.39z M13,13c0,0.55-0.45,1-1,1s-1-0.45-1-1V9c0-0.55,0.45-1,1-1s1,0.45,1,1V13z"/></g></g></svg>
  );
}
