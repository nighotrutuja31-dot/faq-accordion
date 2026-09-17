const faqQuestions = document.querySelectorAll(".faq-question");


faqQuestions.forEach(function (question) {

    question.addEventListener("click", function () {

        const currentItem = question.parentElement;

        const currentAnswer =
            currentItem.querySelector(".faq-answer");


        /* Close all other FAQ items */

        document.querySelectorAll(".faq-item").forEach(function (item) {

            if (item !== currentItem) {

                item.classList.remove("active");

                const otherAnswer =
                    item.querySelector(".faq-answer");

                otherAnswer.style.maxHeight = null;
            }

        });


        /* Toggle current FAQ */

        currentItem.classList.toggle("active");


        /* Open Answer */

        if (currentItem.classList.contains("active")) {

            currentAnswer.style.maxHeight =
                currentAnswer.scrollHeight + "px";

        }

        /* Close Answer */

        else {

            currentAnswer.style.maxHeight = null;

        }

    });

});