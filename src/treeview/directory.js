export class Directory {

  constructor(name, directories) {
    this.name = name;
    this.directories = directories;

    this.expanded = true;
    this.checked = false;
  }

  toggle() {
    this.expanded = !this.expanded;
  }

  getIcon() {

    if (this.expanded) {
      return '-';
    }

    return '+';
  }

  check() {
    this.checked = !this.checked;
    this.checkRecursive(this.checked);
  }

  checkRecursive(state) {
    this.directories.forEach(d => {
      d.checked = state;
      d.checkRecursive(state);
    });
  }
}