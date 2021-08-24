window.addEventListener("DOMContentLoaded", (event) => {
    //UC-5 Validation of input
    const name = document.querySelector("#fullname");
  name.addEventListener("input", function () {
    if (name.value.length == 0) {
      setTextValue("#errName", "");
      return;
    }
    try {
      new AddressBook().fullName = name.value;
      setTextValue("#errName", "");
    } catch (e) {
      setTextValue("#errName", e);
    }
    
  });
  const phone = document.querySelector("#contactNum");
  phone.addEventListener("input", function () {
    if (phone.value.length == 0) {
      setTextValue("#errContact", "");
      return;
    }
    try {
      new AddressBook().phone = phone.value;
      setTextValue("#errContact", "");
    } catch (e) {
      setTextValue("#errContact", e);
    }
    
  });
  const zip = document.querySelector("#zip");
  zip.addEventListener("input", function () {
    if (zip.value.length == 0) {
      setTextValue("#errZip", "");
      return;
    }
    try {
      new AddressBook().zip = zip.value;
      setTextValue("#errZip", "");
    } catch (e) {
      setTextValue("#errZip", e);
    }
    
  });
});
const setTextValue = (id, value) => {
    const attribute = document.querySelector(id);
    attribute.textContent = value;
  };