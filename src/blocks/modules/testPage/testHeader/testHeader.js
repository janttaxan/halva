const FIXED_CLASS = 'testHeader--fixed';
const HIDDEN_CLASS = 'testHeader--hidden';

export class TestHeader {
  constructor() {
    this.header = document.querySelector('.testHeader');

    window.addEventListener('scroll', () => this.fixedHeader());
    console.log('src');
  }

  fixedHeader() {
    const scrolled = window.scrollY;

    scrolled > 0
      ? this.header.classList.add(HIDDEN_CLASS)
      : this.header.classList.remove(HIDDEN_CLASS);


    scrolled >= 40
      ? this.header.classList.add(FIXED_CLASS)
      : this.header.classList.remove(FIXED_CLASS);

  }
}
