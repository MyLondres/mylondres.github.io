// document.querySelectorAll('.be-logo-bold').forEach((node) => {
//     node.innerHTML= `<img class="mb-2" src="assets/be-logo.svg" width="32" height="32">`
// });

// document.querySelectorAll('.be-logo').forEach((node) => {
//     node.innerHTML= `<img class="mb-0" src="assets/be-logo.svg" width="24" height="24">`
// });

// document.querySelectorAll('.ma-logo-plain').forEach((node) => {
//     node.innerHTML= `<img class="pb-2" src="assets/malarkes-logo-plain.svg" height="28">`
// });

new Mmenu(
    document.querySelector("#menu"),
    {
        theme: "white",
        setSelected: {
            hover: true,
            parent: true,
        },
        counters: {
            add: true,
        },
        searchfield: {
            add: true,
            placeholder: "Search menu items",
            splash: "<p>What are you looking for?</p>",
            title: "Search",
        },
        iconbar: {
            use: "(min-width: 450px)",
            top: [
                '<a href="#/"><span class="fa fa-home"></span></a>',
            ],
            bottom: [
                '<a href="#/"><span class="fa fa-twitter"></span></a>',
                '<a href="#/"><span class="fa fa-facebook"></span></a>',
                '<a href="#/"><span class="fa fa-youtube"></span></a>',
            ],
        },
        iconPanels: {
            add: true,
            visible: 1,
        },
        sidebar: {
            collapsed: {
                use: "(min-width: 768px)",
            },
            expanded: {
                use: "(min-width: 1024px)",
                initial: "closed",
            },
        },
        navbars: [
            {
                content: ["searchfield"],
            },
            {
                type: "tabs",
                content: [
                    '<a href="#panel-menu"><i class="fa fa-bars"></i> <span>Menu</span></a>',
                    '<a href="#panel-account"><i class="fa fa-user"></i> <span>Account</span></a>',
                    '<a href="#panel-cart"><i class="fa fa-shopping-cart"></i> <span>Cart</span></a>',
                ],
            },
            {
                content: ["prev", "breadcrumbs", "close"],
            },
            {
                position: "bottom",
                content: [
                    '<a href="https://mmenujs.com/wordpress-plugin" target="_blank">WordPress plugin</a>',
                ],
            },
        ],
    },
    {
        searchfield: {
            cancel: true,
            clear: true,
        },
    }
);

document.addEventListener("click", function (evnt) {
    var anchor = evnt.target.closest('a[href="#/"]');
    if (anchor) {
        alert("Thank you for clicking, but that's a demo link.");
        evnt.preventDefault();
    }
});