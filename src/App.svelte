<script>
  import {
    HttpClient,
    ɵHttpInterceptingHandler,
    HttpXhrBackend,
  } from "@angular/common/http";

  import { map, filter, tap, take } from "rxjs/operators";
  import { forkJoin } from "rxjs";

  class BrowserXhr {
    build() {
      return new XMLHttpRequest();
    }
  }

  var handler = new ɵHttpInterceptingHandler(
    new HttpXhrBackend(new BrowserXhr()),
    {
      get: (a) => [],
    }
  );
  const httpClient = new HttpClient(handler);

  let httpResult = { msg1: "", msg2: "", msg3: "" };

  forkJoin(
    httpClient.get("/angular-http1"),
    httpClient.get("/angular-http2"),
    httpClient.post("/angular-http-post")
  ).subscribe((res) => {
    httpResult.msg1 = res[0]["greeting"];
    httpResult.msg2 = res[1]["greeting"];
    httpResult.msg3 = res[2]["greeting"];
  });
</script>

<main>
  <h1>Angular Http</h1>

  <h3>{httpResult.msg1}</h3>
  <h3>{httpResult.msg2}</h3>
  <h3>{httpResult.msg3}</h3>
</main>
