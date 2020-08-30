<div>
  {#each numbers as num}
	  <div>{num}</div>
	{/each}
</div>

<script>
  import { SortingService } from './sorting-service';
  import { Partition } from './partition';

  const sortingService = new SortingService();

  let partition = new Partition(0, [100, 400, 1020, 3333, 2222, 5555, 2222, 99]);
  let numbers = sortingService.mergeSort(partition).items;
</script>    
