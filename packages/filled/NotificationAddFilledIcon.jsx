export function NotificationAddFilledIcon({ className, ...props }) {
  return (
    <svg className={`no-mui-icon no-mui-filled-icon no-mui-notification-add-filled-icon ${ className ?? '' }`} {...props} xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><rect fill="none" height="24" width="24" x="0" y="0"/><g><path d="M10,20h4c0,1.1-0.9,2-2,2S10,21.1,10,20z M14,9c0,2.61,1.67,4.83,4,5.66L18,17h2v2H4v-2h2v-7c0-2.79,1.91-5.14,4.5-5.8V3.5 C10.5,2.67,11.17,2,12,2s1.5,0.67,1.5,1.5v0.7c0.71,0.18,1.36,0.49,1.95,0.9C14.54,6.14,14,7.51,14,9z M24,8h-3V5h-2v3h-3v2h3v3h2 v-3h3V8z"/></g></svg>
  );
}
