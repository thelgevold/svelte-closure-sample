<script>
  export let directories = [];
</script>

<style>
  ul {
    list-style: none;
  }
</style>

{#if directories.length > 0}
  <ul>
    {#each directories as d}
      <li>
        {d.name}
        <svelte:self directories={d.directories} />
      </li>
    {/each}
  </ul>
{/if}
