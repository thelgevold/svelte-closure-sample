<div>
  { friends }
</div>

<script>
 import {FriendService} from '../services/friend-service.js';
 	
 const friendService = new FriendService();
 let friends;

 friendService.getFriends().subscribe(f => friends = f);

</script>
