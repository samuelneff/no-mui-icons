export function SwipeSharpIcon({ className, ...props }) {
  return (
    <svg className={`no-mui-icon no-mui-sharp-icon no-mui-swipe-sharp-icon ${ className ?? '' }`} {...props} xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M20.13,3.87C18.69,2.17,15.6,1,12,1S5.31,2.17,3.87,3.87L2,2v5h5L4.93,4.93c1-1.29,3.7-2.43,7.07-2.43 s6.07,1.14,7.07,2.43L17,7h5V2L20.13,3.87z"/><path d="M13,12.5v-6C13,5.67,12.33,5,11.5,5S10,5.67,10,6.5v10.74l-4.04-0.85l-1.21,1.23L10.13,23h8.97l1.09-7.64l-6.11-2.86H13z"/></g></g></svg>
  );
}
