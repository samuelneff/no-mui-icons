export function WorkHistoryRoundedIcon({ className, ...props }) {
  return (
    <svg className={`no-mui-icon no-mui-rounded-icon no-mui-work-history-rounded-icon ${ className ?? '' }`} {...props} xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/></g><g><g><path d="M18,11c1.49,0,2.87,0.47,4,1.26V8c0-1.11-0.89-2-2-2h-4V4c0-1.11-0.89-2-2-2h-4C8.89,2,8,2.89,8,4v2H4 C2.89,6,2.01,6.89,2.01,8L2,19c0,1.11,0.89,2,2,2h7.68C11.25,20.09,11,19.08,11,18C11,14.13,14.13,11,18,11z M10,4h4v2h-4V4z"/><path d="M18,13c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S20.76,13,18,13z M19.65,20.35l-2.15-2.15V15h1v2.79l1.85,1.85 L19.65,20.35z"/></g></g></svg>
  );
}
