# iveytechclub.ca

The source code for iveytechclub.ca!

- HTML/CSS/JS website with custom rendered React components for dynamic portions.
- Designed for non-technical users to be able to update `events`, `team`, `alumni`, `resources`, `company logos`, and the `family photo`.

## Figma:

https://www.figma.com/file/xhRnCRDWI4jLFfMv4VIIQ7/Ivey-Tech-Club

## 🚧 Under Construction

Check out the deployed version at https://iveytechclub.github.io/iveytechclub.ca/.

## Non-Technical Documentation

> This section contains information on how to update areas of the website that often need maintenance. It is aimed at admins who aren't familiar with Git or web development. Click to expand each page to see information on updating data for that page. **Before you begin, it may be helpful to keep this README open in a separate tab.**

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
10. Wait for the website to respond to your changes. **This may take a few minutes**. You should be good to go!

#### Companies

1. From the root directory, navigate to **pages -> HomePage -> assets -> CompanyLogos**.
2. Once you see the list of company logo files, click **Add file -> Upload files**, at the top right corner of the page.
3. Once you've added your logo files, click **Commit changes** at the bottom of the page.
4. Go back to the root directory by clicking on **/iveytechclub.ca** in the top left corner.
5. From the root directory, navigate to **pages -> HomePage -> companies.json**.
6. Click on the **pencil icon** to edit the file, located in the top right corner of the file viewer.
7. Following the JSON pattern, add entries to the array containing the name of the company and the **exact** name of the file and its extension. Make sure the last entry of the array does not have a comma following it.
8. Once you've added all entries, click **Commit changes** at the bottom of the page.
9. Wait for the website to respond to your changes. **This may take a few minutes**. You should be good to go!

</details>

<details>
  <summary><ins>Events Page</ins></summary>

#### Events

1. From the root directory, navigate to **pages -> EventsPage -> assets -> EventBanners**.
2. Once you see the list of event banner files, click **Add file -> Upload files**, at the top right corner of the page. Recommend standard FB event banner size ratio, `1200 x 628 pixels (1.91:1 ratio)`.
3. Once you've added your logo files, click **Commit changes** at the bottom of the page.
4. Go back to the root directory by clicking on **/iveytechclub.ca** in the top left corner.
5. From the root directory, navigate to **pages -> EventsPage -> events.json**.
6. Click on the **pencil icon** to edit the file, located in the top right corner of the file viewer.
7. Following the JSON pattern, add entries to the array containing all the relevant fields, and the **exact** name of the file and its extension. Make sure the last entry of the array does not have a comma following it. The recommended max length of the `description` field is 85 words, or about 450 characters. The date follows `DD-MM-YYYY` convention. The `registerLink` should be a URL, the button on the event will bring the user to the URL once clicked.
8. Once you've added all entries, click **Commit changes** at the bottom of the page.
9. Wait for the website to respond to your changes. **This may take a few minutes**. You should be good to go! The component will automatically sort the events by upcoming and previous sections using the inputted date.

</details>

<details>
  <summary><ins>Resources Page</ins></summary>

#### Resources

1. From the root directory, navigate to **pages -> ResourcesPage -> assets -> ResourceImages**.
2. Once you see the list of resource image files, click **Add file -> Upload files**, at the top right corner of the page.
3. Once you've added your resource image files, click **Commit changes** at the bottom of the page.
4. Go back to the root directory by clicking on **/iveytechclub.ca** in the top left corner.
5. From the root directory, navigate to **pages -> ResourcesPage -> resources.json**.
6. Click on the **pencil icon** to edit the file, located in the top right corner of the file viewer.
7. Following the JSON pattern, add entries to the array containing all the relevant fields, and the **exact** name of the image and its extension. Make sure the last entry of the array does not have a comma following it. The `link` should be a URL, the clicking the button under that resource will bring the user to the URL.
8. Once you've added all entries, click **Commit changes** at the bottom of the page. You can also rearrange entries in the JSON to change the order they appear on the page. Entries are rendered left to write, top to bottom.
9. Wait for the website to respond to your changes. **This may take a few minutes**. You should be good to go!

</details>

<details>
  <summary><ins>People (Team/Alumni Pages)</ins></summary>

#### People (Team/Alumni Pages)

1. From the root directory, navigate to **pages -> TeamPage -> assets -> TeamPhotos**.
2. Once you see the list of team member image files, click **Add file -> Upload files**, at the top right corner of the page. We recommend JPEG files no larger than `100kB`, at a resolution of about `700x700px` (square cropped), to optimize loading times. It may help to follow naming convention `firstname_lastname.xxx`. 
3. Once you've added your image files, click **Commit changes** at the bottom of the page.
4. Go back to the root directory by clicking on **/iveytechclub.ca** in the top left corner.
5. From the root directory, navigate to **pages -> TeamPage -> team.json**.
6. Click on the **pencil icon** to edit the file, located in the top right corner of the file viewer.
7. Cut the old JSON array (all the data inside the square brackets `[]`) and paste it somewhere else (we will move it to the alumni page).
8. Replace the array with new entries containing all the relevant fields, and the **exact** name of each person's image and its extension. Make sure the last entry of the array does not have a comma following it. The `linkedin` field should be a LinkedIn URL starting with `https://`. Ensure that what you've added follows proper JSON format.
9. Once you've added all entries, click **Commit changes** at the bottom of the page.
10. Go back to the root directory by clicking on **/iveytechclub.ca** in the top left corner.
11. From the root directory, navigate to **pages -> AlumniPage -> alumni.json**.
12. Click on the **pencil icon** to edit the file, located in the top right corner of the file viewer.
13. Insert a new JSON object, `{},` at the start of the array (after the `[` bracket.). Inside these curly brackets, type a new line `"year": "2021-2022",`, corresponding to the outbound team's year. In another new line, type `"team":` and then **paste** in the JSON array you cut earlier with the old team's data. Ensure that all JSON syntax is correct (refer to previous years).
14. Once you're done, click **Commit changes** at the bottom of the page.
15. Wait for the website to respond to your changes. **This may take a few minutes**. You should be good to go!

</details>

## Get Started (Technical)

> This section contains information on how to run the site on your local machine. You should be familiar with **HTML, CSS, JavaScript, NPM, React, and Git**.

### General Notes:

This site is built using a mix of React, Bootstrap and vanilla HTML/CSS/JS.
Pages that feature repetitive components (like the Team page) use React to render HTML dynamically from JSON. This was done to make updating the pages fairly simnple. If you have any questions, please reach out to **jchen.hba2021@ivey.ca**.

1. Clone this repo to your local machine.
2. After running `npm install`, you can run `live-server` in the root directory to get a development server running with hot reloading.
3. You can run `npm run watch-jsx` to run the React compiler, which will listen for changes and build components from the `components` folder into the `build` folder. You only need to do this if you are revising the React components.
4. **To-Do:**
- Refactor to use Sass or some other tool to make typing CSS less cumbersome. Otherwise, pay attention to CSS specificity patterns to avoid unintended styling.
- Consider adding calendar to the `events` page?
