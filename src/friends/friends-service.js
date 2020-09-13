export class FriendsService {
  getFriends() {
    if (new Date().getHours() > 3) {
      return "Joe, Lisa, Peter, Jane";
    }

    return "Lisa";
  }
}