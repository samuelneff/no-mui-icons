export function PhotoAlbumSharpIcon({ className, ...props }) {
  return (
    <svg className={`no-mui-icon no-mui-sharp-icon no-mui-photo-album-sharp-icon ${ className ?? '' }`} {...props} xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><rect fill="none" height="24" width="24"/><path d="M20,2H4v20h16V2z M11,4h5v7l-2.5-1.5L11,11V4z M7,18l2.38-3.17L11,17l2.62-3.5L17,18H7z"/></svg>
  );
}