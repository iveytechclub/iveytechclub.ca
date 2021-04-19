# iveytechclub.ca

The source code for iveytechclub.ca!

- HTML/CSS/JS website with custom rendered React components for dynamic portions.
- Designed for non-technical users to be able to update `events`, `team`, `alumni`, `resources`, `company logos`, and the `family photo`.

## Figma:

https://www.figma.com/file/xhRnCRDWI4jLFfMv4VIIQ7/Ivey-Tech-Club

## 🚧 Under Construction

## Documentation

> This section contains information on how to update areas of the website that often need maintenance. Click to expand each page to see information on updating data for that page. __Before you begin, it may be helpful to keep this README open in a separate tab.__

<details>
  <summary><ins>Home Page</ins></summary>
  
#### Family Photo

1. From the root directory, navigate to **pages -> HomePage -> assets**.
2. Click **Add file -> Upload files**, at the top right corner of the page.
3. Upload the new image you want to display as the family photo. Make sure to note the file name and extension.
4. Go back to the root directory by clicking on **/iveytechclub.ca** in the top left corner.
5. Click on **index.html** in the list of files.
6. Click on the **pencil icon** to edit the file, located in the top right corner of the file viewer.
7. Locate line **58** of the file. It should be inside an `<img/>` tag with an id of `family-photo`. The code should look like this: `src="pages/HomePage/assets/{__some file here__}"`
8. Change the file and extension at the end of the `src` entry to the file name and extension you just uploaded. Make sure you preserve the closing double quotes.
9. Click **Commit changes** at the bottom of the page.
10. Wait for the website to respond to your changes. __This may take a few minutes__. You should be good to go!

#### Companies

1. From the root directory, navigate to **pages -> HomePage -> assets -> CompanyLogos**.
2. Once you see the list of company logo files, click **Add file -> Upload files**, at the top right corner of the page.
3. Once you've added your logo files, click **Commit changes** at the bottom fo the page.
4. Go back to the root directory by clicking on **/iveytechclub.ca** in the top left corner.
5. From the root directory, navigate to **pages -> HomePage -> companies.json**.
6. Click on the **pencil icon** to edit the file, located in the top right corner of the file viewer.
7. Following the JSON pattern, add entries to the array containing the name of the company and the **exact** name of the file and its extension. Make sure the last entry of the array does not have a comma following it.
8. Once you've added all entries, click **Commit changes** at the bottom of the page.
9. Wait for the website to respond to your changes. __This may take a few minutes__. You should be good to go!

</details>

<details>
  <summary><ins>Events Page</ins></summary>

#### Events

1. From the root directory, navigate to **pages -> EventsPage -> assets -> EventBanners**.
2. Once you see the list of event banner files, click **Add file -> Upload files**, at the top right corner of the page. Recommend standard FB event banner size ratio, `1200 x 628 pixels (1.91:1 ratio)`.
3. Once you've added your logo files, click **Commit changes** at the bottom fo the page.
4. Go back to the root directory by clicking on **/iveytechclub.ca** in the top left corner.
5. From the root directory, navigate to **pages -> EventsPage -> events.json**.
6. Click on the **pencil icon** to edit the file, located in the top right corner of the file viewer.
7. Following the JSON pattern, add entries to the array containing all the relevant fields, and the **exact** name of the file and its extension. Make sure the last entry of the array does not have a comma following it. The recommended max length of the `description` field is 85 words, or about 450 characters. The date follows `DD-MM-YYYY` convention. The `registerLink` should be a URL, the button on the event will bring the user to the URL once clicked.
8. Once you've added all entries, click **Commit changes** at the bottom of the page.
9. Wait for the website to respond to your changes. __This may take a few minutes__. You should be good to go! The component will automatically sort the events by upcoming and previous sections using the inputted date.

</details>

<details>
  <summary><ins>Resources Page</ins></summary>

#### Resources

1. From the root directory, navigate to **pages -> ResourcesPage -> assets -> ResourceImages**.
2. Once you see the list of resource image files, click **Add file -> Upload files**, at the top right corner of the page.
3. Once you've added your resource image files, click **Commit changes** at the bottom fo the page.
4. Go back to the root directory by clicking on **/iveytechclub.ca** in the top left corner.
5. From the root directory, navigate to **pages -> ResourcesPage -> resources.json**.
6. Click on the **pencil icon** to edit the file, located in the top right corner of the file viewer.
7. Following the JSON pattern, add entries to the array containing all the relevant fields, and the **exact** name of the image and its extension. Make sure the last entry of the array does not have a comma following it. The `link` should be a URL, the clicking the button under that resource will bring the user to the URL.
8. Once you've added all entries, click **Commit changes** at the bottom of the page. You can also rearrange entries in the JSON to change the order they appear on the page. Entries are rendered left to write, top to bottom.
9. Wait for the website to respond to your changes. __This may take a few minutes__. You should be good to go!

</details>

