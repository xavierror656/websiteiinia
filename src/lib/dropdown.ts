type DropdownChangeHandler = (value: string) => void;

class Dropdown {
  private dropdown: HTMLElement | null;
  private toggleButton: HTMLButtonElement | null = null;
  private menu: HTMLElement | null = null;
  private lists: HTMLLIElement[] = [];
  private onChange?: DropdownChangeHandler;
  private value = '';
  private dropDownInput: HTMLInputElement | null = null;
  private documentClickHandler?: (event: MouseEvent) => void;
  private toggleHandler?: () => void;
  private itemClickHandlers: Array<() => void> = [];

  constructor(selector: string, onChange?: DropdownChangeHandler) {
    this.dropdown = document.querySelector<HTMLElement>(selector);
    if (!this.dropdown) {
      return;
    }

    this.onChange = onChange;
    this.toggleButton = this.dropdown.querySelector<HTMLButtonElement>('.dropdown-toggle');
    this.menu = this.dropdown.querySelector<HTMLElement>('.dropdown-menu');
    this.dropDownInput = this.dropdown.querySelector<HTMLInputElement>('.dropdown-input');
    this.lists = Array.from(this.dropdown.querySelectorAll<HTMLLIElement>('li'));

    if (!this.toggleButton || !this.menu) {
      return;
    }

    this.toggleHandler = this.toggleDropdown.bind(this);
    this.toggleButton.addEventListener('click', this.toggleHandler);

    this.documentClickHandler = this.closeDropdown.bind(this);
    document.addEventListener('click', this.documentClickHandler);

    this.lists.forEach((item) => {
      const handler = () => this.selectItem(item);
      item.addEventListener('click', handler);
      this.itemClickHandlers.push(() => item.removeEventListener('click', handler));
    });

    const selectedInput = this.toggleButton.querySelector<HTMLElement>('.dropdown-select-text');
    if (selectedInput) {
      this.value = selectedInput.innerText.trim();
    }
  }

  private toggleDropdown() {
    if (!this.menu) {
      return;
    }
    this.menu.style.display = this.menu.style.display === 'block' ? 'none' : 'block';
  }

  private selectItem(element: HTMLLIElement) {
    if (!this.toggleButton) {
      return;
    }

    const selectedInput = this.toggleButton.querySelector<HTMLElement>('.dropdown-select-text');
    const selectIcon = this.toggleButton.querySelector<HTMLImageElement>('.dropdown-select-icon');
    const nextIcon = element.querySelector<HTMLImageElement>('.dropdown-menu-icon');
    const dropdownText = element.querySelector<HTMLElement>('.dropdown-text');

    if (dropdownText) {
      this.value = dropdownText.innerText.trim();
      if (selectedInput) {
        selectedInput.innerText = this.value;
      }
    }

    if (selectIcon) {
      if (nextIcon) {
        selectIcon.style.visibility = '';
        selectIcon.src = nextIcon.src;
        selectIcon.alt = nextIcon.alt;
      } else {
        selectIcon.style.visibility = 'hidden';
      }
    }

    if (this.dropDownInput) {
      this.dropDownInput.value = this.value;
    }

    if (this.onChange) {
      this.onChange(this.value);
    }

    this.closeDropdown();
  }

  private closeDropdown(event?: MouseEvent) {
    if (!this.dropdown || !this.menu) {
      return;
    }

    if (event && this.dropdown.contains(event.target as Node)) {
      return;
    }

    this.menu.style.display = 'none';
  }

  public destroy() {
    if (this.toggleButton && this.toggleHandler) {
      this.toggleButton.removeEventListener('click', this.toggleHandler);
    }

    if (this.documentClickHandler) {
      document.removeEventListener('click', this.documentClickHandler);
    }

    this.itemClickHandlers.forEach((cleanup) => cleanup());
    this.itemClickHandlers = [];
  }
}

export default Dropdown;
