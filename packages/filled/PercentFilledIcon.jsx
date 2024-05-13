export function PercentFilledIcon({ className, ...props }) {
  return (
    <svg className={`no-mui-icon no-mui-filled-icon no-mui-percent-filled-icon ${ className ?? '' }`} {...props} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/></g><g><g><g><g><path d="M7.5,11C9.43,11,11,9.43,11,7.5S9.43,4,7.5,4S4,5.57,4,7.5S5.57,11,7.5,11z M7.5,6C8.33,6,9,6.67,9,7.5S8.33,9,7.5,9 S6,8.33,6,7.5S6.67,6,7.5,6z"/></g></g><g><rect height="2" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -4.9706 12)" width="20.63" x="1.69" y="11"/></g><g><g><path d="M16.5,13c-1.93,0-3.5,1.57-3.5,3.5s1.57,3.5,3.5,3.5s3.5-1.57,3.5-3.5S18.43,13,16.5,13z M16.5,18 c-0.83,0-1.5-0.67-1.5-1.5s0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5S17.33,18,16.5,18z"/></g></g></g></g></svg>
  );
}
