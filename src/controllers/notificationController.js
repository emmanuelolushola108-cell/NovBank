"use strict";
import { AuthManager } from "../services/AuthManager.js";
import { renderNotification } from "../views/notificationView.js";
const notificationManager = new AuthManager();
const notificationsCon = document.querySelector(".notifications-container");
renderNotification(
  notificationManager.getCurrentUser().notifications,
  notificationsCon,
);
