export function MobileOffRoundedIcon({ className, ...props }) {
  return (
    <svg className={`no-mui-icon no-mui-rounded-icon no-mui-mobile-off-rounded-icon ${ className ?? '' }`} {...props} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M17 16.44L3.61 3.05c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L5 7.27V21c0 1.1.9 2 2 2h10c1.02 0 1.85-.77 1.98-1.75L20 22.27c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L19 18.44l-2-2zM7 19V9.27L16.73 19H7zM17 5v8.61l2 2V3c0-1.1-.9-2-2-2H7c-.71 0-1.33.37-1.68.93L8.39 5H17z"/></svg>
  );
}
