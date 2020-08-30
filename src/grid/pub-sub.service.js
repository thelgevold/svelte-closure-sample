import { Subject } from "rxjs";

export class CustomerEventEmitter extends Subject {
  constructor() {
    super();
  }

  emit(value) {
    super.next(value);
  }
}