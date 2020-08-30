import { of } from 'rxjs';
import { map } from 'rxjs/operators';

export class FriendService {
  getFriends() {
    return map(x => `Friend: ${x}`)(of('Joe'));
  }
}