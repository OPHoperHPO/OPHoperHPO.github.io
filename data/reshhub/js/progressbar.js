export default class AnswerChecker {
    constructor(container, tests) {
        this.container = container;
        this.showAnswerButton = this.container.find('.js-show-answer');
        var shit = this
        this.tests = tests;
        if (this.showAnswerButton.length == 0) {
            function butt() {
                var html = '<a href="javascript:void(0)" class="lk-form-submit js-show-answer" style=""'\
                'data-intro="Ответы получены от бота RESHHUB">Ответы получены от бота RESHHUB</a>';
                var template = document.createElement('template');
                html = html.trim();
                template.innerHTML = html;
                return template.content.firstChild;
            }

            this.showAnswerButton = butt()
            var buttons = document.querySelector('.test__buttons-line');
            buttons.append(this.showAnswerButton)
        }
    }


    init() {}

    checkAnswer(test) {}

    checkAllAnswers() {};
}
