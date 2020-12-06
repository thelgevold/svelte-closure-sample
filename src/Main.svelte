<script>
import page from 'page';
import { onMount } from 'svelte';

let activeRoute = {friends: 'active', form: 'inactive'};

onMount(async () => {
  page('/', async () => navigate('friends').then(() => {resetNav(); activeRoute.friends = 'active'}));
  page('/form', async () => navigate('form').then(() => {resetNav(); activeRoute.form = 'active'}));

  page.start();
});

function resetNav() {
  for(let k in activeRoute) {
    activeRoute[k] = 'inactive';
  }
}

</script>

<nav>
  <a class="{activeRoute.friends}" href="/">Friends</a>
  <a class="{activeRoute.form}" href="/form">Form</a>
</nav>

<div id="router-outlet">
  <div></div>
</div>

<footer>
  <strong>Svelte Lazy Loading Sample (Closure Compiler)</strong>
</footer>