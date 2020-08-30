import { timer, forkJoin, of } from 'rxjs';
import { map, take, tap, concat, merge, flatMap } from 'rxjs/operators';

export class StreamService {

  flatMapStreams() {
    let first = of(10);

    first
      .pipe(
        flatMap(operand1 => {
          return of(operand1 + 10);
        }),
      )
      .subscribe(res => (this.flatMappedStreams = { msg: '10 + 10 = ' + res }));
  }

  forkJoinStreams() {
    let first = of({ source: 1, value: 1 });

    let second = of({ source: 2, value: 1 });

    forkJoin(first, second).subscribe(
      (res) => (this.forkJoinStream = res),
    );
  }

  concatStreams() {
    let first = timer(10, 500).pipe(
      map(r => {
        return { source: 1, value: r };
      }),
      take(4),
    );

    let second = timer(10, 500).pipe(
      map(r => {
        return { source: 2, value: r };
      }),
      take(4),
      tap(v => console.log(v))
    );

    first.pipe(concat(second)).subscribe(res => console.log(res));
  }

  mergeStreams() {
    let first = timer(10, 500).pipe(
      map(r => {
        return { source: 1, value: r };
      }),
      take(4),
      tap(v => console.log(v))
    );

    let second = timer(10, 500).pipe(
      map(r => {
        return { source: 2, value: r };
      }),
      take(4),
      tap(v => console.log(v))
    );

    first.pipe(merge(second)).subscribe(res => console.log(res));
  }
}