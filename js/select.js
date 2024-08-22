const plus = document.querySelectorAll('.question__list-btn')
plus.forEach(function (item) {
    item.addEventListener('click', function () {
        const plusId = this.dataset.question
        const plusIdImg = this.dataset.img
        const question = document.querySelector('#' + plusId)
        const img = document.querySelector('#' + plusIdImg)
        question.classList.toggle('question__list-info--active')
        img.classList.toggle('question__btn-img--active')
    })
})
