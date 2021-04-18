# iveytechclub.ca

The source code for iveytechclub.ca!

## Figma:

https://www.figma.com/file/xhRnCRDWI4jLFfMv4VIIQ7/Ivey-Tech-Club

## 🚧 Under Construction

## Documentation

> This section contains information on how to update areas of the website that often need maintenance. Click to expand each page to see information on updating data for that page.

<details>
  <summary>Home Page</summary>

### Companies

1. From the root directory, navigate to **pages -> HomePage -> assets -> CompanyLogos**.
2. Once you see the list of company logo files, click **Add file -> Upload files**, at the top right corner of the page.
3. Once you've added your logo files, click **Commit changes** at the bottom fo the page.
4. Go back to the root directory by clicking on **/iveytechclub.ca** in the top left corner.
5. From the root directory, navigate to **pages -> HomePage -> companies.json**.
6. Click on the **pencil icon** to edit the file, located in the top right corner of the file viewer.
7. Following the JSON pattern, add entries to the array containing the name of the company and the **exact** name of the file and its extension. Make sure the last entry of the array does not have a comma following it.
8. Once you've added all entries, click **Commit changes** at the bottom of the page.
9. Wait for the website to respond to your changes. You should be good to go!

</details>

<details>
  <summary>Events Page</summary>

### Events

1. From the root directory, navigate to **pages -> EventsPage -> assets -> EventBanners**.
2. Once you see the list of company logo files, click **Add file -> Upload files**, at the top right corner of the page. Recommend standard FB event banner size ratio, `1200 x 628 pixels (1.91:1 ratio)`.
3. Once you've added your logo files, click **Commit changes** at the bottom fo the page.
4. Go back to the root directory by clicking on **/iveytechclub.ca** in the top left corner.
5. From the root directory, navigate to **pages -> EventsPage -> events.json**.
6. Click on the **pencil icon** to edit the file, located in the top right corner of the file viewer.
7. Following the JSON pattern, add entries to the array containing all the relevant fields, and the **exact** name of the file and its extension. Make sure the last entry of the array does not have a comma following it. The recommended max length of the `description` field is 85 words, or about 450 characters. The date follows `DD-MM-YYYY` convention. The `registerLink` should be a URL, the button on the event will bring the user to the URL once clicked.
8. Once you've added all entries, click **Commit changes** at the bottom of the page.
9. Wait for the website to respond to your changes. You should be good to go! The component will automatically sort the events by upcoming and previous sections using the inputted date.

</details>
