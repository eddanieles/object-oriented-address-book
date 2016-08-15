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
