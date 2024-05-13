export function FactCheckTwoToneIcon({ className, ...props }) {
  return (
    <svg className={`no-mui-icon no-mui-two-tone-icon no-mui-fact-check-two-tone-icon ${ className ?? '' }`} {...props} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M4,19h16V5H4V19z M13.41,10.75l1.41,1.42L17.99,9l1.42,1.42L14.82,15L12,12.16L13.41,10.75z M5,7h5v2H5V7z M5,11h5v2H5V11z M5,15h5v2H5V15z" opacity=".3"/><path d="M20,3H4C2.9,3,2,3.9,2,5v14c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V5C22,3.9,21.1,3,20,3z M20,19H4V5h16V19z"/><polygon points="19.41,10.42 17.99,9 14.82,12.17 13.41,10.75 12,12.16 14.82,15"/><rect height="2" width="5" x="5" y="7"/><rect height="2" width="5" x="5" y="11"/><rect height="2" width="5" x="5" y="15"/></g></g></svg>
  );
}
