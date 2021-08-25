// Populate Tabular using local storage and JSON
let contactList;
window.addEventListener("DOMContentLoaded", (event) => {
    contactList=getaddressBookFromLocalStorage();
  document.querySelector(".contact-count").textContent = contactList.length;
  createInnerHtmlUsingJSON_TemplateLiterals();
  localStorage.removeItem('editContact');
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
                <td>${items._fullname}</td>
                <td>${items._phone}</td>
                <td>${items._address}</td>
                  <td>${items._City}</td>
                <td>${items._State}</td>
                <td>${items._zip}</td>
                <td>
                  <img name="${items._id}" src="../assets/icon/delete-black-18dp.svg" alt="delete" id="icon" onclick="remove(this)">
                  <img name="${items._id}" src="../assets/icon/create-black-18dp.svg" alt="create" id="icon" onclick="update(this)">  
                </td>
              </tr>
              
      `;
      });
    document.querySelector("#display-table").innerHTML = innerHTML;
  };
  //removes the current row when delete icon is clicked
  const remove= (node) =>
  {
    let addressData=contactList.find(contact => contact._id == node.name);
    if(!addressData) return ;
    const index= contactList.map(contact => contact._fullname)
    .indexOf(addressData._fullname);
    contactList.splice(index,1);
    localStorage.setItem("ContactList",JSON.stringify(contactList));
    document.querySelector(".contact-count").textContent=contactList.length;
    createInnerHtmlUsingJSON_TemplateLiterals();
  }
  const update=(node)=>{
    let contactData = contactList.find(contact=>contact._id==node.name);
    if(!contactData)return;
    localStorage.setItem('editContact',JSON.stringify(contactData));
    window.location.replace(site_properties.register_Page);
  }