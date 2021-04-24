const BTN_DISABLED_CLASS = 'baseButton--disabled';

export class TestQuestions {
  constructor() {
    this.answersList = document.querySelectorAll('.baseRadio__input');
    this.btnNext = document.querySelector('.testQuestions__nextBtn');
    this.currentValue = null;

    this.answersList.forEach((answer, index) => {
      answer.addEventListener('change', () => {
        this.btnNext.classList.remove(BTN_DISABLED_CLASS);
        if (answer.checked) {
          this.currentValue = index + 1;
          this.btnNext.href = `/${this.currentValue}/`;
        }
      });
    });

    this.btnNext.addEventListener('click', (e) => {
      e.preventDefault();
      alert(`Ответ №${this.currentValue}`);
    });
  }
}
