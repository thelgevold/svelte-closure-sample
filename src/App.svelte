<script>
  import Greeting from "./greeting/Greeting.svelte";
  import Friends from "./friends/Friends.svelte";
  import MergeSort from "./merge-sort/MergeSort.svelte";
  import Treeview from "./treeview/Treeview.svelte";

  import { Directory } from "./treeview/directory";
  import { range, interval } from "rxjs";
  import { map, filter, tap, take } from "rxjs/operators";

  import { GreetingService } from "./services/greeting-service";
  import { StreamService } from "./services/stream-service";

  export let title;

  let greetingText = "";
  let visible = true;

  const greetingService = new GreetingService();
  const streamService = new StreamService();

  let greetings = greetingService.getGreetings();

  function addGreeting() {
    const newGreeting = greetingService.createGreeting(greetingText);
    greetings = [...greetings, { greetingMsg: greetingText }];
  }

  range(1, 200)
    .pipe(
      filter((x) => x % 2 === 1),
      map((x) => x + x)
    )
    .subscribe((x) => console.log(`Value: ${x}`));

  const int = interval(1000).pipe(
    map((v) => v * 100),
    tap((v) => console.log(v)),
    take(10)
  );
  int.subscribe();

  const fall2014 = new Directory("Fall 2014", []);
  const summer2014 = new Directory("Summer 2014", []);

  const pics = new Directory("Pictures", [summer2014, fall2014]);

  const music = new Directory("Music", []);

  let directories = [new Directory("Directories", [pics, music])];
</script>

<style>
  main {
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  ul {
    list-style-type: none;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <h1>{title}!</h1>

  <Treeview {directories} />

  <Friends />

  <MergeSort />

  {#if greetings.length > 10}
    <p>More than 10 greetings</p>
  {:else}
    <p>Less than 10 greetings</p>
  {/if}

  <ul>
    {#each greetings as greeting}
      <Greeting {greeting} />
    {/each}
  </ul>

  <button on:click={addGreeting}>Add Greeting</button>
  <input bind:value={greetingText} />

  <br />

  <div>
    <button on:click={streamService.mergeStreams}>Merge Streams</button>
    <button on:click={streamService.concatStreams}>Concat Streams</button>
    <button on:click={streamService.forkJoinStreams}>ForkJoin Streams</button>
    <button on:click={streamService.flatMapStreams}>FlatMap Streams</button>
  </div>
</main>
