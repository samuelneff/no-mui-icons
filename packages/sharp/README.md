# no-mui-icons

Icons from the [Material UI](https://github.com/mui/material-ui) library that are not dependent on Material UI code.

They can be used in any React application with any UI framework. I'm personally a fan of [Radix UI](https://www.radix-ui.com/) and [Qwik](https://qwik.dev/) but they will work with any React compatible framework.

# Usage

The icons are distributed in five packages corresponding to the five icon styles.

```bash
npm install no-mui-icons-filled
npm install no-mui-icons-outlined
npm install no-mui-icons-rounded
npm install no-mui-icons-sharp
npm install no-mui-icons-two-tone
```

Then import and use them like you would any other React component.

```jsx
import { ThumbUpFilledIcon } from 'no-mui-icons-filled';
import { EmailSharpIcon } from 'no-mui-icons-sharp';

function UseIcons() {
  return (
    <div>
      <ThumbUpFilledIcon />

      <EmailSharpIcon
        className={styles.iconClass}
        aria-label="Send email"
        role="button"
      />
    </div>
  );
}
```

All attributes passed to the icon are passed through to the `<svg />` element. No additional markup is rendered, but additional CSS classes are added. Described below.

# Styling

Every icon accepts a custom className attribute that is passed to the `<svg />` element.

```jsx
<EmailSharpIcon className="sendEmailIcon" />
```

```css
.sendEmailIcon {
  width: 40px;
  height: 40px;
  fill: blue;
  cursor: pointer;
}
```

Additionally every icon has three pre-defined CSS classes that can be used to customize all icons,
all icons of a particular style, or all instances of that particular icon.

* `no-mui-icon` is added to every icon.
* `no-mui-[style]-icon` where `[style]` is the appropriate icon style: `filled`, `outlined`, `sharp`, `rounded`, or `two-tone`.
* `no-mui-[icon-name]-[style]-icon` where `[icon-name]` is the kebab-case name of the icon and `[style]` is one of the previously mentioned styles such as `no-mui-thumb-up-filled-icon` or `no-mui-email-sharp-icon`.

```jsx
<EmailSharpIcon />
```

```css
.no-mui-icon {
  width: 40px;
  height: 40px;
}

.no-mui-filled-icon {
  fill: blue;
}

.no-mui-email-sharp-filled-icon {
  fill: green;
}
```

# Browse icons

Search and browse all icons and view each in the different styles at [no-mui-icons.com](https://no-mui-icons.com).

[![Browse app screenshot](./packages/browse-no-mui-icons/src/assets/browse-app-screenshot.webp)](https://no-mui-icons.com)

# Contributing

Pull Requests to the build tools and browse app are welcome. To build, clone the repository,
pull the submodule, and run `npm run build` at the project root.

The icons are pulled directly from
[github.com/mui/material-ui](https://github.com/mui/material-ui/tree/next/packages/mui-icons-material/material-icons) via a submodule. If you find no-mui-icons is out-of-date, create an
issue and I'll make a new build and republish.

# License

The packaging, build tools, and browse app are available through the MIT license. The underlying
icons are also licensed and redistributed under the MIT license.



