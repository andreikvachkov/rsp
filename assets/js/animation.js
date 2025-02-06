
let numbers = document.querySelectorAll(".num");

numbers.forEach(numElement => {
    let finalNumber = parseInt(numElement.dataset.num, 10); // Получаем конечное число

    gsap.fromTo(numElement,
        { innerText: 0 }, // Начинаем с 0
        {
            duration: 2, // Длительность анимации
            ease: "power2.out",
            innerText: finalNumber, // GSAP меняет innerText
            snap: { innerText: 1 }, // Округление до целого числа
            scrollTrigger: {
                trigger: numElement,
                start: "top 80%", // Запуск, когда блок появляется
                toggleActions: "play none none none"
            },
            onUpdate: function () {
                numElement.innerText = Math.floor(this.targets()[0].innerText)
                    .toLocaleString('ru-RU'); // Форматируем число с разделителями
            }
        }
    );
});