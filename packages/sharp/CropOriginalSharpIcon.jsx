export function CropOriginalSharpIcon({ className, ...props }) {
  return (
    <svg className={`no-mui-icon no-mui-sharp-icon no-mui-crop-original-sharp-icon ${ className ?? '' }`} {...props} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M21 3H3v18h18V3zm-2 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z"/></svg>
  );
}
