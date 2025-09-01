# birdgalleryproject

# 📸 Responsive Photo Gallery

A simple, responsive photo gallery built with HTML, CSS, and
JavaScript.\
This project demonstrates how to create a gallery layout that adapts to
different screen sizes, displaying images in an accessible and visually
appealing way.

------------------------------------------------------------------------

## How It Looks
![Top of bird gallery project working](./resources/images/Bird%20Gallery%20Top.png)

![Informational Section Bird Gallery Project](./resources/images/Bird%20gallery%20informational.png)

------------------------------------------------------------------------

## 🚀 Features

-   Responsive layout for mobile, tablet, and desktop\
-   Card-style image display with caption support\
-   Clean and minimal design\
-   Easy to extend with new content

------------------------------------------------------------------------

## 🛠️ Technologies Used

-   HTML5\
-   CSS3 (Flexbox / Grid)\
-   JavaScript (Vanilla JS for interactivity)\
-   JSON 

------------------------------------------------------------------------

## 📂 Project Structure

    photo-gallery/
    │-- index.html
    │-- style.css
    │-- bird.js
    |-- birds.json
    │-- images/
    │    |-- (gallery images go here)
    \\-- README.md

------------------------------------------------------------------------

## 📷 Example Card

``` json
{
  "id": 1,
  "name": "Eastern Bluebird",
  "location": "Tennessee, USA",
  "image": "images/eastern_bluebird.jpg",
  "description": "A small migratory thrush with bright blue plumage and an orange chest."
}
```

------------------------------------------------------------------------

## 📖 Usage

1.  Clone the repository

    ``` bash
    git clone https://github.com/ColinTimberlake/photo-gallery.git
    ```

2.  Open `index.html` in your browser\

3.  Add new images to the `images/` folder and update `birds.json` or
    the data file

------------------------------------------------------------------------

## 🐞 Bug Log

| ID | Description | Category | Priority | Status | Notes |
| ----------- | ----------- | ----------- | ----------- | ----------- | ----------- |
| 1 | Cards not being rendered through JSON connection with js | Functionality, Layout | High | Fixed | Issue with chrome and loading Fix: Using live server extension on VS code |


------------------------------------------------------------------------

## 🌱 Future Improvements

-   Add onClickEvent to cards\
-   Add search/filter functionality\
-   Connect to an API for dynamic content

------------------------------------------------------------------------

## 📜 License

This project is licensed under the MIT License.