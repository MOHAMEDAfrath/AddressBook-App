// Populate Tabular using local storage and JSON
let contactList;
window.addEventListener("DOMContentLoaded", (event) => {
    contactList=getaddressBookFromLocalStorage();
  document.querySelector(".contact-count").textContent = contactList.length;
  createInnerHtmlUsingJSON_TemplateLiterals();
});
//UC-20 gets from local storage
const getaddressBookFromLocalStorage=()=>
{
    return localStorage.getItem("ContactList") ? JSON.parse(localStorage.getItem("ContactList")) : [];
}
// UC19 Populate using JSON template literals
const createInnerHtmlUsingJSON_TemplateLiterals = () => {
    const CreateHeaderhtml =
      "<th>Full Name</th><th>Phone Number</th><th>Address</th><th>City</th><th>State</th><th>Zip</th><th></th>";
      if(contactList.length == 0)return;
      let innerHTML = `${CreateHeaderhtml}`;
      contactList.forEach(items=>{
          innerHTML = `${innerHTML} 
      <tr>
                <td>${items._fullName}</td>
                <td>${items._phone}</td>
                <td>${items._address}</td>
                  <td>${items._City}</td>
                <td>${items._State}</td>
                <td>${items._zip}</td>
                <td>
                  <img name="${items._id}" src="../assets/icon/delete-black-18dp.svg" alt="delete" id="icon">
                  <img name="${items._id}" src="../assets/icon/create-black-18dp.svg" alt="create" id="icon">  
                </td>
              </tr>
              
      `;
      });
    document.querySelector("#display-table").innerHTML = innerHTML;
  };
 