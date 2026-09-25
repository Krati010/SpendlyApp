// main.js — students will add JavaScript here as features are built

// ------------------------------------------------------------------ //
// Landing page: "See how it works" video modal                       //
// ------------------------------------------------------------------ //

(function () {
    var openTrigger = document.getElementById("open-video-modal");
    var overlay = document.getElementById("video-modal-overlay");
    var closeBtn = document.getElementById("video-modal-close");
    var iframe = document.getElementById("video-modal-iframe");

    if (!openTrigger || !overlay || !closeBtn || !iframe) return;

    var embedSrc = iframe.getAttribute("data-embed-src");

    function openModal(event) {
        event.preventDefault();
        iframe.src = embedSrc + "?autoplay=1&rel=0";
        overlay.classList.add("is-open");
        overlay.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
    }

    function closeModal() {
        overlay.classList.remove("is-open");
        overlay.setAttribute("aria-hidden", "true");
        iframe.src = ""; // clears the player so the video stops completely, not just hides
        document.body.style.overflow = "";
    }

    openTrigger.addEventListener("click", openModal);
    closeBtn.addEventListener("click", closeModal);

    overlay.addEventListener("click", function (event) {
        if (event.target === overlay) closeModal();
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && overlay.classList.contains("is-open")) closeModal();
    });
})();
