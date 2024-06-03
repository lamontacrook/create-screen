/*
 * <license header>
 */


import { generatePath } from "react-router";

import { Text } from "@adobe/react-spectrum";
import { register } from "@adobe/uix-guest";
import { extensionId } from "./Constants";

function ExtensionRegistration() {
  const init = async () => {
    const guestConnection = await register({
      id: extensionId,
      methods: {
        // actionBar: {
        //   getButtons() {
        //     return [
        //       {
        //         id: "examples.action-bar.bulk-property-update", // Unique ID for the button
        //         label: "Bulk property update", // Button label
        //         icon: "OpenIn", // Button icon; get name from: https://spectrum.adobe.com/page/icons/ (Remove spaces, keep uppercase)
        //         // Click handler for the extension button
        //         onClick(selections) {
        //           // Collect the selected content fragment paths
        //           const selectionIds = selections.map(
        //             (selection) => selection.id
        //           );

        //           // Create a URL that maps to the
        //           const modalURL =
        //             "/index.html#" +
        //             generatePath(
        //               "/content-fragment/:selection/bulk-property-update-modal",
        //               {
        //                 // Set the :selection React route parameter to an encoded, delimited list of paths of the selected content fragments
        //                 selection: encodeURIComponent(selectionIds.join("|")),
        //               }
        //             );

        //           // Open the route in the extension modal using the constructed URL
        //           guestConnection.host.modal.showUrl({
        //             // The modal title
        //             title: "Bulk property update",
        //             url: modalURL,
        //           });
        //         },
        //       },
        //     ]
        //   }
        // },
        headerMenu: {
          getButtons() {
            return [
              // YOUR HEADER BUTTONS CODE SHOULD BE HERE
              {
                'id': 'create-new-screen',
                'label': 'Create New Screen',
                'icon': 'OpenIn',
                onClick: () => {
                  console.log('create new screen');
                  const modalURL = "/index.html#/create-new-screen-modal";
                  console.log("Modal URL: ", modalURL);

                  guestConnection.host.modal.showUrl({
                    title: "Create New Screen",
                    url: modalURL,
                  });
                },
              },
            ];
          },
        },
      },
    });
  };
  init().catch(console.error);

  return <Text>IFrame for integration with Host (AEM)...</Text>
}

export default ExtensionRegistration;
