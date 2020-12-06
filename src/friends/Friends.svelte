<h1>
  Friends
</h1>

<script>
  import {FriendsService} from './friends-service';

  const service = new FriendsService();

  const friends = service.getFriends();
</script>

<ul>
	{#each friends as friend}
		<li>{friend}</li>
	{/each}
</ul>