export function AssuredWorkloadFilledIcon({ className, ...props }) {
  return (
    <svg className={`no-mui-icon no-mui-filled-icon no-mui-assured-workload-filled-icon ${ className ?? '' }`} {...props} xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/></g><g><g><rect height="7" width="2" x="5" y="10"/><rect height="7" width="2" x="11" y="10"/><polygon points="22,6 12,1 2,6 2,8 22,8"/><path d="M2,19v2h12.4c-0.21-0.64-0.32-1.31-0.36-2H2z"/><polygon points="19,12.26 19,10 17,10 17,13.26"/><path d="M20,14l-4,2v2.55c0,2.52,1.71,4.88,4,5.45c2.29-0.57,4-2.93,4-5.45V16L20,14z M19.28,21l-2.03-2.03l1.06-1.06l0.97,0.97 l2.41-2.38l1.06,1.06L19.28,21z"/></g></g></svg>
  );
}
