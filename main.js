
var Contact = function(name, phone, street, city, state) {
  this.name = name;
  this.phone = phone;
  this.address = {street, city, state};
}

var contactList = function() {
  this.contacts = [];
}

var work = new contactList(); //creates new contactList
var home = new contactList();

contactList.prototype.add = function(name, phone, street, city, state) {
  var contact = new Contact(name, phone, street, city, state);
  contact.date = new Date();
  var contactId = this.contacts.map((contact)=> contact.id);
  contact.id = Math.max(contactId) + 1;
  this.contacts.push(contact);
}

work.add("Brian", "407-555-1234", "101 S Garland Ave", "Orlando", "FL"); //adds a new contact to the work contactList
work.add("Suzanne", "407-555-5678", "101 S Garland Ave", "Orlando", "FL");

home.add("Ruth", "201-555-1732", "6756 Giant Oak Lane", "Orlando", "FL"); //adds a new contact to the home contactList
home.add("Mom", "201-333-3433", "333 Fulton Ave", "Jersey City", "NJ");

contactList.prototype.find = function(name){
  return this.contacts.filter((contact) => contact.name.includes(name));
}

work.find("Brian"); //locates any contact with the name of Brian in the work contactList

contactList.prototype.get = function(id) {
  return this.contacts.filter((contact) => contact.id === (id));
}

home.get(1); //locates contact with an ID of 1 in the home contactList
work.get(2); //locates contact with an ID of 2 in the work contactList

contactList.prototype.remove = function(id) {
  var retrieveID = this.get(id);
  this.contacts.splice(retrieveID, 1);
}

// home; //returns an array everyone in the array
// home.remove(1); //uses the functions to delete that part of the array
// home; // returns an array of contacts remaining in the array
