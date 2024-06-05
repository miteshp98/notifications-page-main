# Frontend Mentor - Notifications page solution

This is a solution to the [Notifications page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/notifications-page-DqK5QAmKbC). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Distinguish between "unread" and "read" notifications
- Select "Mark all as read" to toggle the visual state of the unread notifications and set the number of unread messages to zero
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![iPad-Mini-miteshp98 github io](https://github.com/miteshp98/notifications-page-main/assets/145320555/53c2d1a0-ce9e-4c6e-b6b9-1efbc13ad105)


### Links

- Solution URL: [ solution URL ](https://github.com/miteshp98/notifications-page-main)
- Live Site URL: [ live site URL ](https://miteshp98.github.io/notifications-page-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

In this project, I gained valuable experience in JavaScript by learning two key concepts: navigation using event listeners and utilizing array methods for efficient data manipulation.

One of the core skills I developed was navigating through the webpage dynamically using event listeners. By attaching event listeners to specific elements, such as buttons or links, I was able to respond to user interactions effectively. For example, I implemented a feature that marked all notifications as read when a "Mark All as Read" button was clicked. This involved listening for the click event on the button and executing the appropriate action, demonstrating how event listeners facilitate dynamic user experiences.

Another important aspect of this project was working with arrays and leveraging array methods to manipulate data efficiently. For instance, I used array methods like forEach() and querySelectorAll() to iterate over collections of elements and perform actions on them. This allowed me to update the status of individual notifications and manage the overall notification count seamlessly. By understanding and applying array methods effectively, I was able to streamline my code and enhance its readability.

```js
//Unread Notitcation count based on the length of unreadMsg nodelist
let currentNotification = unreadMsg.length;
unreadNotification.textContent = currentNotification;

//add Click event to mark all as read
markAllAsReadBtn.addEventListener("click", function () {
  //loop through all unread Message
  unreadMsg.forEach((item) => {
    item.classList.remove("unread");
  });
  //loop through All Dots Elements
  unreadDots.forEach((item) => {
    item.style.display = "none";
  });

  currentNotification = 0;
  unreadNotification.textContent = currentNotification;
});

//Click Event on each unread  message
unreadMsg.forEach((item, index) => {
  item.addEventListener("click", function () {
    //check if It Contains Unread class
    if (item.classList.contains("unread")) {
      item.classList.remove("unread");
      unreadDots[index].style.display = "none";

      //decrement the unread notification count
      currentNotification--;
      unreadNotification.textContent = currentNotification;
    }
  });
});
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Udemy Webdevlopment](https://www.udemy.com/share/101W9C3@2s1lShiGH32a3OJHMYullps9bvMmvxO_kykXK5ZGloqkGQDHawnryvbZtrMeQ8y81A==/)

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Mitesh Panchal](https://miteshp98.github.io/portfolio-website/)
- Frontend Mentor - [@miteshp98](https://www.frontendmentor.io/profile/miteshp98)
- Linkedin - [@Mitesh Panchal](https://www.linkedin.com/in/mitesh-panchal-356558126/)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

Thanks to the challenge provider for creating this opportunity to apply and improve my frontend development skills.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
