document.addEventListener("DOMContentLoaded", () => {
    const ajaxSend = async (formData) => {
        const response = await fetch("../mail.php", {
            method: "POST",
            body: formData
        });
        if (!response.ok) {
            throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response.status}`);
        }
        return await response.text();
    };
    if (document.querySelector("form")) {
        const forms = document.querySelectorAll("form");

        forms.forEach(form => {
            form.addEventListener("submit", function (e) {
                e.preventDefault();
                const formData = new FormData(this);
                ajaxSend(formData)
                    .then((response) => {
                        console.log(response);
                        if (/Ошибка/i.test(response)) {
                            const formError = document.querySelector(".form-status-error")
                            formError.classList.add("show")
                            setTimeout(() => {
                                formError.classList.remove("show")
                            }, 2000)
                        }
                        else {
                            const formSuccess = document.querySelector(".form-status-success")
                            formSuccess.classList.add("show")
                            setTimeout(() => {
                                formSuccess.classList.remove("show")
                            }, 2000)
                        }
                        form.reset(); // очищаем поля формы
                    })
                    .catch((err) => {
                        console.error(err)

                        const formError = document.querySelector(".form-status-error")
                        formError.classList.add("show")
                        setTimeout(() => {
                            formError.classList.remove("show")
                        }, 2000)
                    })
            });
        });
    }

});
