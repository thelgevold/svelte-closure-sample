<li>
  { greeting.greetingMsg }
</li>

<script>
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';

  export let greeting;
	
  onMount(() => {
		console.log('the component has mounted');
	});

  const count = writable(0);

  count.subscribe(value => {
    console.log(value);
  });

  count.set(1);

  count.update(n => n + 1); 
</script>
