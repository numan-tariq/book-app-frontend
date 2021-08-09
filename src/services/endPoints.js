function endPoint(address, type, guarded) {
  this.address = address;
  this.type = type;
  this.guarded = guarded;
}

const endPoints = {
  login: new endPoint("http://localhost:4000/v1/auth/login", "POST", false),
  getUserProfile: new endPoint("http://localhost:4000/v1/user/profile", "GET", true),
  getBooks: new endPoint("http://localhost:4000/v1/book", "GET", false),
  getAutherBooks: new endPoint(`http://localhost:4000/v1/book/auther/${"608991ec947d04507301e448"}`, "GET", true),
};

export default endPoints;
