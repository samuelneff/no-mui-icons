export function SmartDisplayOutlinedIcon({ className, ...props }) {
  return (
    <svg className={`no-mui-icon no-mui-outlined-icon no-mui-smart-display-outlined-icon ${ className ?? '' }`} {...props} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24" y="0"/></g><g><g><polygon points="9.5,7.5 9.5,16.5 16.5,12"/><path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M20,18.01H4V5.99h16V18.01z"/></g></g></svg>
  );
}
