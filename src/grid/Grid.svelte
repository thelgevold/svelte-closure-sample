<script>
  import { Column } from "./column";
  import { Sorter } from "./sorter";
  import { CustomerEventEmitter } from "./pub-sub.service";

  const sorter = new Sorter();

  const pubSubService = new CustomerEventEmitter();

  let rows = [
    { "first Name": "Joe", "last Name": "Jackson" },
    { "first Name": "Peter", "last Name": "Smith" },
    { "first Name": "Jane", "last Name": "Doe" },
    { "first Name": "Tim", "last Name": "Smith" },
  ];

  let columns = [
    new Column("first Name", "First Name"),
    new Column("last Name", "Last Name"),
  ];

  function sort(key) {
    rows = sorter.sort(key, rows);
    pubSubService.emit(key);
  }
</script>

<table class="table table-striped">
  <tr>
    {#each columns as col}
      <td>
        <button on:click={() => sort(col.name)}>{col.descr}</button>
      </td>
    {/each}
  </tr>
  {#each rows as row}
    <tr>
      {#each columns as col}
        <td>{row[col.name]}</td>
      {/each}
    </tr>
  {/each}
</table>
