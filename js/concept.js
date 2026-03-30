document.addEventListener("DOMContentLoaded", function () {
    const accordions = document.querySelectorAll(".accordion");
    const gansoSection = document.querySelector(".ganso");
    const detailView = document.querySelector(".detail-view");
    const detailHeader = detailView.querySelector(".detail-header h3");
    const detailBody = detailView.querySelector(".detail-body p");
    const detailClose = detailView.querySelector(".detail-close");

    function showDetail(title, content, image) {
        detailHeader.textContent = title;
        detailBody.innerHTML = content;
        detailView.style.backgroundImage = `url(../img/${image})`;
        gansoSection.style.opacity = "0";
        setTimeout(() => {
            gansoSection.style.display = "none";
            detailView.style.display = "block";
            setTimeout(() => {
                detailView.classList.add("show");
            }, 10);
        }, 200);
    }

    function hideDetail() {
        detailView.classList.remove("show");
        setTimeout(() => {
            detailView.style.display = "none";
            gansoSection.style.display = "block";
            setTimeout(() => {
                gansoSection.style.opacity = "1";
            }, 10);
        }, 200);
    }

    accordions.forEach((accordion) => {
        const toggle = accordion.querySelector(".accordion-toggle");
        const content = accordion.querySelector(".accordion-content");
        const image = accordion.getAttribute('data-image');

        if (!toggle || !content || !image) return;

        toggle.addEventListener("click", function () {
            const title = toggle.querySelector(".title")?.textContent || "説明";
            const contentHtml = content.innerHTML;
            showDetail(title, contentHtml, image);
        });
    });

    detailClose.addEventListener("click", hideDetail);
});