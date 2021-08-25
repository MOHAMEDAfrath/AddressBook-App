let contactObj = {};
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
//saves the data to local
const save = () => {
    try {
      setEmployeePayrollObject();
      createorUpdateLocal();
      resetForm();
    } catch (e) {
      return;
    }
  };
  const setEmployeePayrollObject=()=>{
    contactObj._fullname=getInputValue('fullname');
    contactObj._phone = getInputValue("contactNum");
    contactObj._address = getInputValue("address");
    contactObj._City = getInputValue("city");
    contactObj._State = getInputValue("state");
    contactObj._zip = getInputValue("zip");
  }
//UC-6 create or update local storage
//UC-10 Refactored to create data with ID
const createorUpdateLocal = () => {
    //JSON Object
    let addressList = JSON.parse(localStorage.getItem("ContactList"));
    if(addressList){
      let contactData = addressList.find(contact=>contact._id == contactObj._id);
      if(!contactData){
        addressList.push(createNewContact());
      }else{
        const index = addressList.map(contact=>contact._id).indexOf(contactData._id);
        addressList.splice(index,1,createNewContact(contactData._id));
      }
    }else{
      addressList = [createNewContact()];
    }
    //JSON to String
    localStorage.setItem("ContactList", JSON.stringify(addressList));
  };
  //checks for id
  const createNewContact=(id)=>{
    let contactData = new AddressBook();
    if(!id)contactData.id = createContactId();
    else contactData.id = id;
    setContact(contactData);
    return contactData;
  }
  //allocates ID
  const createContactId=()=>{
    let contactId = localStorage.getItem("ContactId");
    contactId = !contactId?1:(parseInt(contactId)+1).toString();
    localStorage.setItem("ContactId",contactId);
    return contactId;
  }
  const setContact = (contact)=>{
    try {
      contact.fullName = contactObj._fullname;
      contact.phone = contactObj._phone;
      contact.address=contactObj._address;
      contact.City=contactObj._City;
      contact.State=contactObj._State;
      contact.zip=contactObj._zip;
   }catch(e){
       alert(e);
   }
  };
  //gets based on ID
const getInputValue = (id) => {
    let value = document.getElementById(id).value;
    return value;
};
const setTextValue = (id, value) => {
    const attribute = document.querySelector(id);
    attribute.textContent = value;
};
// UC-7 Reset
const resetForm=()=>{
    setTextValue('#fullname','');
    setTextValue('#contactNum','');
    setTextValue('#address','');
    setTextValue('#errName','');
    setTextValue('#errContact','');
    setTextValue('#errZip','');
    document.getElementById('city').value="City";
    document.getElementById('state').value="State";
}