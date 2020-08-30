<script>
  import { SpreadsheetModel } from "./spreadsheet-model";
  import { HeaderRowService } from "./header-row.service";

  const model = new SpreadsheetModel(10, 4);
  const header = HeaderRowService.createHeader(4);
  let visibleRows = getVisibleRows();

  function getVisibleRows() {
    return model.rows.filter(
      (row) => row.rowIndex >= model.start && row.rowIndex < model.end
    );
  }

  function navigate(e) {
    model.navigate(e.keyCode);
    visibleRows = getVisibleRows();
    let cell = document.getElementById(
      model.current.rowIndex + "-" + model.current.columnIndex
    );
    cell.focus();
  }
</script>

<table id="spreadsheet">
  <tr>
    <td class="row-number-column" />
    {#each header as columnHeader}
      <td class="columnHeader">{columnHeader}</td>
    {/each}
  </tr>
  {#each visibleRows as row}
    <tr>
      <td class="row-number-column">{row.rowIndex}</td>
      {#each row.columns as col}
        <td>
          <input
            id="{col.rowIndex}-{col.columnIndex}"
            bind:value={col.cellValue}
            on:click={() => model.selectColumn(col)}
            on:keyup={navigate} />
        </td>
      {/each}
    </tr>
  {/each}
</table>
