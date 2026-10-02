/* =====================================================
   PORTFOLIO JAVASCRIPT
   Supam Thapa
   ===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       TYPING EFFECT
    ===================================================== */

    const typing = document.getElementById("typing");

    const words = [
        "software",
        "websites",
        "solutions",
        "experiments",
        "clean code"
    ];

    let wordIndex = 0;
    let letterIndex = 0;
    let deleting = false;

    function typeWriter() {

        // Stop safely if typing element doesn't exist
        if (!typing) return;

        const word = words[wordIndex];

        if (!deleting) {

            typing.textContent =
                word.substring(0, letterIndex + 1);

            letterIndex++;

            if (letterIndex >= word.length) {

                deleting = true;

                setTimeout(typeWriter, 1300);
                return;
            }

        } else {

            typing.textContent =
                word.substring(0, letterIndex - 1);

            letterIndex--;

            if (letterIndex <= 0) {

                letterIndex = 0;
                deleting = false;

                wordIndex++;

                if (wordIndex >= words.length) {
                    wordIndex = 0;
                }
            }
        }

        setTimeout(
            typeWriter,
            deleting ? 45 : 100
        );
    }

    if (typing && words.length > 0) {
        typeWriter();
    }


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(".reveal");

    function revealOnScroll() {

        revealElements.forEach(element => {

            const top =
                element.getBoundingClientRect().top;

            if (top < window.innerHeight - 80) {
                element.classList.add("active");
            }

        });
    }

    window.addEventListener(
        "scroll",
        revealOnScroll,
        { passive: true }
    );

    revealOnScroll();


    /* =====================================================
       SKILL BARS
    ===================================================== */

    const skills =
        document.querySelectorAll(".skill");

    function animateSkills() {

        skills.forEach(skill => {

            const top =
                skill.getBoundingClientRect().top;

            if (top < window.innerHeight - 80) {
                skill.classList.add("active");
            }

        });
    }

    window.addEventListener(
        "scroll",
        animateSkills,
        { passive: true }
    );

    animateSkills();


    /* =====================================================
       UNIQUE CURSOR
    ===================================================== */

    const cursorRing =
        document.querySelector(".cursor-ring");

    const cursorDot =
        document.querySelector(".cursor-dot");

    const trailOne =
        document.querySelector(".trail-one");

    const trailTwo =
        document.querySelector(".trail-two");

    const trailThree =
        document.querySelector(".trail-three");

    let mouseX = 0;
    let mouseY = 0;

    let ringX = 0;
    let ringY = 0;

    let trail1X = 0;
    let trail1Y = 0;

    let trail2X = 0;
    let trail2Y = 0;

    let trail3X = 0;
    let trail3Y = 0;

    // Check that at least one cursor element exists
    const cursorExists =
        cursorRing ||
        cursorDot ||
        trailOne ||
        trailTwo ||
        trailThree;

    if (cursorExists) {

        document.addEventListener(
            "mousemove",
            event => {

                mouseX = event.clientX;
                mouseY = event.clientY;

                if (cursorDot) {
                    cursorDot.style.left =
                        mouseX + "px";

                    cursorDot.style.top =
                        mouseY + "px";
                }
            }
        );


        function animateCursor() {

            ringX +=
                (mouseX - ringX) * 0.15;

            ringY +=
                (mouseY - ringY) * 0.15;


            trail1X +=
                (mouseX - trail1X) * 0.08;

            trail1Y +=
                (mouseY - trail1Y) * 0.08;


            trail2X +=
                (mouseX - trail2X) * 0.05;

            trail2Y +=
                (mouseY - trail2Y) * 0.05;


            trail3X +=
                (mouseX - trail3X) * 0.03;

            trail3Y +=
                (mouseY - trail3Y) * 0.03;


            if (cursorRing) {
                cursorRing.style.left =
                    ringX + "px";

                cursorRing.style.top =
                    ringY + "px";
            }


            if (trailOne) {
                trailOne.style.left =
                    trail1X + "px";

                trailOne.style.top =
                    trail1Y + "px";
            }


            if (trailTwo) {
                trailTwo.style.left =
                    trail2X + "px";

                trailTwo.style.top =
                    trail2Y + "px";
            }


            if (trailThree) {
                trailThree.style.left =
                    trail3X + "px";

                trailThree.style.top =
                    trail3Y + "px";
            }


            requestAnimationFrame(
                animateCursor
            );
        }

        animateCursor();
    }


    /* =====================================================
       CURSOR HOVER EFFECT
    ===================================================== */

    const interactiveElements =
        document.querySelectorAll(
            "a, button, input, textarea, .project, .skill"
        );

    const cursorArrow =
        document.querySelector(".cursor-arrow");

    interactiveElements.forEach(element => {

        element.addEventListener(
            "mouseenter",
            () => {

                if (cursorRing) {

                    cursorRing.style.width =
                        "70px";

                    cursorRing.style.height =
                        "70px";

                    cursorRing.style.background =
                        "rgba(0,229,255,0.06)";

                    cursorRing.style.borderColor =
                        "#00e5ff";
                }

                if (cursorArrow) {
                    cursorArrow.style.opacity = "1";
                }
            }
        );


        element.addEventListener(
            "mouseleave",
            () => {

                if (cursorRing) {

                    cursorRing.style.width =
                        "45px";

                    cursorRing.style.height =
                        "45px";

                    cursorRing.style.background =
                        "transparent";
                }

                if (cursorArrow) {
                    cursorArrow.style.opacity = "0";
                }
            }
        );

    });


    /* =====================================================
       3D PROFILE CARD
    ===================================================== */

    const profileCard =
        document.querySelector(".profile-card");

    if (profileCard) {

        profileCard.addEventListener(
            "mousemove",
            event => {

                const rect =
                    profileCard.getBoundingClientRect();

                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;

                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;

                // Prevent division by zero
                if (centerX === 0 || centerY === 0) {
                    return;
                }

                const rotateX =
                    ((y - centerY) / centerY) * -8;

                const rotateY =
                    ((x - centerX) / centerX) * 8;

                profileCard.style.transform =
                    `perspective(900px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     scale(1.03)`;
            }
        );


        profileCard.addEventListener(
            "mouseleave",
            () => {

                profileCard.style.transform =
                    "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
            }
        );
    }


    /* =====================================================
       PARALLAX ORBS
    ===================================================== */

    const orbOne =
        document.querySelector(".orb-one");

    const orbTwo =
        document.querySelector(".orb-two");

    const orbThree =
        document.querySelector(".orb-three");


    // Only enable parallax if an orb exists
    if (orbOne || orbTwo || orbThree) {

        document.addEventListener(
            "mousemove",
            event => {

                const x =
                    (event.clientX / window.innerWidth) - 0.5;

                const y =
                    (event.clientY / window.innerHeight) - 0.5;


                if (orbOne) {
                    orbOne.style.transform =
                        `translate(${x * 50}px, ${y * 50}px)`;
                }


                if (orbTwo) {
                    orbTwo.style.transform =
                        `translate(${x * -40}px, ${y * -40}px)`;
                }


                if (orbThree) {
                    orbThree.style.transform =
                        `translate(${x * 25}px, ${y * 25}px)`;
                }

            }
        );
    }


    /* =====================================================
       DARK / LIGHT MODE
    ===================================================== */

    const themeButton =
        document.getElementById("themeToggle");

    if (themeButton) {

        themeButton.addEventListener(
            "click",
            () => {

                document.body.classList.toggle("light");

                const isLight =
                    document.body.classList.contains("light");

                themeButton.textContent =
                    isLight ? "🌙" : "☀️";

                // Save theme
                localStorage.setItem(
                    "portfolio-theme",
                    isLight ? "light" : "dark"
                );
            }
        );


        // Load saved theme
        const savedTheme =
            localStorage.getItem("portfolio-theme");

        if (savedTheme === "light") {

            document.body.classList.add("light");

            themeButton.textContent = "🌙";
        }
    }


    /* =====================================================
       COUNTER ANIMATION
    ===================================================== */

    const counters =
        document.querySelectorAll(".counter");

    let countersStarted = false;


    function animateCounters() {

        if (countersStarted || counters.length === 0) {
            return;
        }


        const stats =
            document.querySelector(".stats-grid");

        if (!stats) {
            return;
        }


        const position =
            stats.getBoundingClientRect().top;


        if (position < window.innerHeight - 100) {

            countersStarted = true;


            counters.forEach(counter => {

                const target =
                    Number(
                        counter.dataset.target
                    );

                // Ignore invalid targets
                if (
                    Number.isNaN(target) ||
                    target < 0
                ) {
                    return;
                }


                let current = 0;

                const duration = 1200;

                const steps = Math.max(
                    target,
                    1
                );

                const increment =
                    target / steps;

                const intervalTime =
                    duration / steps;


                const interval =
                    setInterval(() => {

                        current += increment;


                        if (current >= target) {

                            current = target;

                            clearInterval(interval);
                        }


                        counter.textContent =
                            Math.floor(current) + "+";

                    }, intervalTime);

            });
        }
    }


    window.addEventListener(
        "scroll",
        animateCounters,
        { passive: true }
    );

    animateCounters();


    /* =====================================================
       CONTACT FORM
    ===================================================== */

    const contactForm =
        document.getElementById("contactForm");

    const formMessage =
        document.getElementById("formMessage");


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();


                const nameInput =
                    document.getElementById("name");

                const emailInput =
                    document.getElementById("email");

                const subjectInput =
                    document.getElementById("subject");

                const messageInput =
                    document.getElementById("message");


                const name =
                    nameInput
                        ? nameInput.value.trim()
                        : "";

                const email =
                    emailInput
                        ? emailInput.value.trim()
                        : "";

                const subject =
                    subjectInput
                        ? subjectInput.value.trim()
                        : "";

                const message =
                    messageInput
                        ? messageInput.value.trim()
                        : "";


                if (
                    !name ||
                    !email ||
                    !subject ||
                    !message
                ) {

                    if (formMessage) {

                        formMessage.textContent =
                            "Please fill in every field.";

                        formMessage.style.color =
                            "#ff6b6b";
                    }

                    return;
                }


                // Basic email validation
                const emailPattern =
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


                if (!emailPattern.test(email)) {

                    if (formMessage) {

                        formMessage.textContent =
                            "Please enter a valid email address.";

                        formMessage.style.color =
                            "#ff6b6b";
                    }

                    return;
                }


                if (formMessage) {

                    formMessage.textContent =
                        `Thanks ${name}! Your message is ready to send 🚀`;

                    formMessage.style.color =
                        "#00e5ff";
                }


                contactForm.reset();

            }
        );
    }


    /* =====================================================
       MAGNETIC BUTTON EFFECT
    ===================================================== */

    const buttons =
        document.querySelectorAll(
            ".button, .send-button"
        );


    buttons.forEach(button => {

        button.addEventListener(
            "mousemove",
            event => {

                const rect =
                    button.getBoundingClientRect();

                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;


                const moveX =
                    (x - rect.width / 2) * 0.15;

                const moveY =
                    (y - rect.height / 2) * 0.15;


                button.style.transform =
                    `translate(${moveX}px, ${moveY}px)`;
            }
        );


        button.addEventListener(
            "mouseleave",
            () => {

                button.style.transform =
                    "translate(0, 0)";
            }
        );

    });


    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    const navigationLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    navigationLinks.forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const targetId =
                    link.getAttribute("href");

                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }


                const target =
                    document.querySelector(targetId);


                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }

            }
        );

    });


    /* =====================================================
       CONSOLE MESSAGE
    ===================================================== */

    console.log(
        "🚀 Supam Thapa Portfolio loaded successfully!"
    );

});
const profilePhotos = [
    "Alwayzz.jpg.jpg",
    "Alwayz.jpg"
];