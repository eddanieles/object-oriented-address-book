
var contactList = function() {
  this.book = []
}

var Contact = function(name, phone, address) {
  this.name = name,
  this.phone = phone,
  this.address = address,
  this.date = Date.now()
}

var friends = new contactList();

contactList.prototype.add = function(name, phone, address){
  var contact = new Contact(name, phone, address);
  var contactId = this.book.map((contact)=> contact.id);
  contact.id = Math.max(contactId) +1;
  this.book.push(contact);
}

friends.add("Ed", "4321", "21 Jump St");
friends.add("Kristy", "1234", "NJ");

contactList.prototype.find = function(name){
  return this.book.filter((contact) => contact.name.includes(name));
}

friends.find("Kristy");

contactList.prototype.get = function(id){
  return this.book.filter((contact)=> contact.id === id);
}

friends.get(1);

contactList.prototype.remove = function(id){
  var removeIndex = this.book.map((contact) => contact.id).indexOf(id);
  this.book.splice(removeIndex, 1);
}

//friends.remove(1);

/*
var TIYStudent = function(name, subject) {
  this.name = name;
  this.subject = subject;
  this.repos = [];
}

var Repos = function(name, language, author) {
  this.name = name;
  this.language = language;
  this.author = author;
}

TIYStudent.prototype.addRepo = function(name, language) {
  var repo = new Repos(name, language, this);
  this.repos.push(repo);
}

var bama = new TIYStudent("Brian", "JavaScript");

bama.addRepo("T Shirt Shop", "JavaScript");

Repos.prototype.authorName = function() {
  return this.author.name;

}

TIYStudent.prototype.repoNames = function() {
  var repoList = this.repos;
  return repoList.map((repo) => repo.name).join(", ");
}

TIYStudent.prototype.writes = function(language) {
  var repoList = this.repos.map((repo) => repo.language);
  return repoList;
}
*/
