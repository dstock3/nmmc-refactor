import '../style/contact.css'
import { elementBuilder, tabSelect, removeExistingPage, titleChange } from './functions.js'
import { ContactResponse } from './contact-response.js'
import { Plugs } from './plug.js'

const Contact = () => {
  let sideNavContainer = document.querySelector(".side-nav-container")
  sideNavContainer.setAttribute("id", "side-nav-unfixed");

  let patreonPlug = document.querySelector(".patreon")
  patreonPlug.setAttribute("id", "patreon-contact");

  const mainBody = document.querySelector(".main-body")
  const formPage = elementBuilder("div", "form-page", mainBody);
  const formBody = elementBuilder("div", "form-body", formPage);
  const formHead = elementBuilder("h1", "form-head", formBody);
  formHead.textContent = "Contact Me";

  const formCopy = elementBuilder("p", "form-copy-p", formBody);
  formCopy.textContent =
    "Please feel free to send a message regarding any business inquiries you might have. " +
    "Additionally, if you have any suggestions as to what I might cover on the channel, that would be much appreciated as well. ";
  formCopy.setAttribute("tabindex", "0");

  const formDiv = elementBuilder("div", "form-div", formBody);
  formDiv.setAttribute("id", "form");

  const form = elementBuilder("form", "form-class", formDiv);
  form.setAttribute("id", "form-id");
  form.setAttribute("action", "contact-form.php");
  form.setAttribute("method", "POST");

  const formGroupName = elementBuilder("div", "form-group", form);
  const nameLabel = elementBuilder("label", "form-label", formGroupName);
  nameLabel.textContent = "Name: ";
  nameLabel.setAttribute("for", "Name");

  const nameInputDiv = elementBuilder("div", "input-group", formGroupName);
  const nameInput = elementBuilder("input", "form-control", nameInputDiv);
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("id", "Name");
  nameInput.setAttribute("name", "Name");
  nameInput.setAttribute("required", "");

  const formGroupEmail = elementBuilder("div", "form-group", form);
  const emailLabel = elementBuilder("label", "form-label", formGroupEmail);
  emailLabel.textContent = "E-mail: ";
  emailLabel.setAttribute("for", "Email");

  const emailInputDiv = elementBuilder("div", "input-group", formGroupEmail);
  const emailInput = elementBuilder("input", "form-control", emailInputDiv);
  emailInput.setAttribute("type", "email");
  emailInput.setAttribute("id", "Email");
  emailInput.setAttribute("name", "Email");
  emailInput.setAttribute("required", "");

  const formGroupMessage = elementBuilder("div", "form-group", form);
  const messageLabel = elementBuilder("label", "form-label", formGroupMessage);
  messageLabel.textContent = "Please write your message here:";
  messageLabel.setAttribute("for", "Message");

  const messageInputDiv = elementBuilder("div", "input-group", formGroupMessage);
  messageInputDiv.setAttribute("id", "message");
  const messageInput = elementBuilder(
    "textarea",
    "form-control",
    messageInputDiv
  );
  messageInput.setAttribute("id", "Message");
  messageInput.setAttribute("name", "Message");
  messageInput.setAttribute("rows", "9");
  messageInput.setAttribute("maxlength", "3000");
  messageInput.setAttribute("required", "");

  const submitDiv = elementBuilder("div", "form-group", form);
  const submitButton = elementBuilder("button", "fcf-btn", submitDiv);

  submitButton.classList.add("btn-primary");
  submitButton.classList.add("btn-lg");
  submitButton.classList.add("btn-block");
  submitButton.setAttribute("id", "button");
  submitButton.textContent = "Send Message";

  const fixedFooter = document.querySelector("footer");
  fixedFooter.setAttribute("id", "fixed-footer");
}

export { Contact }

