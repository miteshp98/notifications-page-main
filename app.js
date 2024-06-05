"use strict";

//Marks All Unread As Read btn
const markAllAsReadBtn = document.querySelector(".mark-as-read");
//Select Number of Unread Notification
const unreadNotification = document.querySelector(".noti-num");
//Select All Unread Msg
const unreadMsg = document.querySelectorAll(".unread");
//Select All Dots
const unreadDots = document.querySelectorAll(".dot");

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
