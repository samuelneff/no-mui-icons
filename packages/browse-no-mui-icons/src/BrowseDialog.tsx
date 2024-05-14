// import { MouseEvent, useCallback, useState } from 'react';
// import { startCase } from 'lodash';
// import { CheckFilledIcon } from 'no-mui-icons-filled';
// import { wait } from 'utikity';

// import { StyleName, iconBaseName, iconSetByName } from './iconInfo';

import styles from './BrowseDialog.module.scss';
import { Button, Dialog } from '@radix-ui/themes';

export interface BrowseDialogProps {
  selectedIcon: string;
  onCloseDialog(): void;
}

export function BrowseDialog({
  selectedIcon,
  onCloseDialog,
}: BrowseDialogProps) {

  // const handleBackgroundClick = useCallback(
  //   (event: MouseEvent<HTMLDivElement>) => {
  //     event.stopPropagation();
  //   },
  //   []
  // );

  // if (!selectedIcon) {
  //   return null;
  // }

  return (
    <Dialog.Root
      open={Boolean(selectedIcon)}
      onOpenChange={open => {
        if (!open) {
          onCloseDialog();
        }
      }
      }
    >
      <Dialog.Content>
        <Dialog.Title>{selectedIcon}</Dialog.Title>

        <div className={styles.browseDetailTable}>
          More content here...
        </div>

        <Dialog.Close>
          <Button onClick={onCloseDialog}>
            Done
          </Button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Root>

    // <div
    //   className={styles.browseDialogBlocker}
    //   onClick={onCloseDialog}
    // >
    //   <div
    //     className={styles.browseDialogContainer}
    //     onClick={handleBackgroundClick}
    //   >
    //     <div
    //       className={styles.closeButtonContainer}
    //       onClick={onCloseDialog}
    //     >
    //       <CloseFilledIcon className={styles.closeButtonIcon} />
    //     </div>

    //     <div className={styles.browseDialogInstructions}>
    //       Click to copy to clipboard.
    //     </div>
    //     {
    //       styleNames.map(
    //         styleName => (
    //           <BrowseDetailRow
    //             selectedIcon={selectedIcon}
    //             styleName={styleName}
    //           />
    //         )
    //       )
    //     }
    //   </div>
    // </div>
  );
}

// interface BrowseDetailRowProps {
//   selectedIcon: string;
//   styleName: StyleName;
// }

// function BrowseDetailRow({
//   selectedIcon,
//   styleName,
// }: BrowseDetailRowProps) {

//   const [ copiedToClipboard, setCopiedToClipboard ] = useState(false);

//   const selectedIconBaseName = iconBaseName(selectedIcon);
//   const styleNamePart = startCase(styleName).replace(/ /g, '');
//   const iconFunctionName = `${ selectedIconBaseName }${ styleNamePart }Icon`;
//   const Icon = iconSetByName[ styleName ][ iconFunctionName ];


//   const handleClick = useCallback(
//     async (event: MouseEvent<HTMLDivElement>) => {
//       event.stopPropagation();
//       await navigator.clipboard.writeText(iconFunctionName);
//       setCopiedToClipboard(true);
//       await wait(10000);
//       setCopiedToClipboard(false);
//     },
//     [
//       iconFunctionName
//     ]
//   );

//   return (
//     <div
//       key={styleName}
//       className={styles.browseDetailRow}
//       onClick={handleClick}
//     >
//       <Icon className={styles.browseDetailIcon} />
//       <span className={styles.browseDetailBaseName}>
//         {selectedIconBaseName}
//       </span>
//       <span className={styles.browseDetailStyleName}>
//         {styleNamePart}
//       </span>
//       <span className={styles.browseDetailIconSuffix}>
//         Icon
//       </span>

//       {
//         copiedToClipboard
//           ? (
//             <div className={styles.browseDetailCopiedContainer}>
//               <CheckFilledIcon className={styles.browseDetailCopiedIcon} />
//               Copied to clipboard
//             </div>
//           ) : null
//       }
//     </div>
//   );
// }