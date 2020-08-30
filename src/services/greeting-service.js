export class GreetingService {
  getGreetings() {
    return [
      this.createGreeting('Good Morning'),
      this.createGreeting('Good Afternoon'),
      this.createGreeting('Good Evening')
    ];
  }

  createGreeting(msg) {
    return { greetingMsg: msg };
  }

}