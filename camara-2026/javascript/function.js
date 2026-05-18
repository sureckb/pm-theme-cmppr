$(document).ready(function() {
    var $portletItem = $(".portletNavigationTree .portletItem"),
        $portletHeader = $(".portletNavigationTree .portletHeader");

    //Injects mobile menu button
    $("header").append("<div class='menu-button'><button><span class='hiddenStructure'>Mostrar ou Ocultar Menu</span><i class='icon-reorder'></i></button></div>");

$(document).ready(function() {
    var $portletItem = $(".portletNavigationTree .portletItem"),
        $portletHeader = $(".portletNavigationTree .portletHeader");

    if ($(".menu-button").length === 0) {
        $("header").append("<div class='menu-button'><button><span class='hiddenStructure'>Mostrar ou Ocultar Menu</span><i class='icon-reorder'></i></button></div>");
    }

    $(".menu-button button").on("click", function() {
        $(this).toggleClass("menuAtivo");
        $portletItem.slideUp(200);
        $portletHeader.removeClass("menuAtivo");
        $("#column-one").slideToggle();
    });

    $(window).resize(function() {
        if ($(window).width() < 753) {
            $portletHeader.unbind();
            $(".menu-button button").removeClass("menuAtivo");
            $portletItem.hide();
            $("#column-one").hide();
            $("#column-one").addClass("menuAtivo");
            $portletHeader.click(function(e) {
                e.preventDefault();
                $(this).toggleClass("menuAtivo");
                $(this).next().slideToggle();
            });
        } else {
            $portletHeader.unbind();
            $portletItem.show();
            $("#column-one").removeClass("menuAtivo");
            $("#column-one").show();
            $(".menu-button button").removeClass("menuAtivo");
            $("#column-one").css("display","table-cell");
        }
        if ($('nav ul').length > 0) {
            navScrollWidth = $('nav ul')[0].scrollWidth - $('nav ul')[0].clientWidth;
        }
    }).resize();

    if (typeof Galleria !== 'undefined' && Galleria.get().length !== 0) {
        Galleria.configure({wait: true});
    }

    const nav = document.getElementById("main-navigation");
    if (nav) {
        const controls = document.createElement("div");
        controls.id = "text-resize-controls";
        controls.style.float = "right";
        controls.style.marginRight = "10px";

        const decreaseBtn = document.createElement("button");
        decreaseBtn.id = "decrease-text";
        decreaseBtn.textContent = "A−";
        decreaseBtn.setAttribute("aria-label", "Diminuir texto");
        decreaseBtn.style.marginRight = "4px";

        const resetBtn = document.createElement("button");
        resetBtn.id = "reset-text";
        resetBtn.textContent = "A";
        resetBtn.setAttribute("aria-label", "Tamanho padrão");
        resetBtn.style.marginRight = "4px";
        resetBtn.style.fontWeight = "bold";

        const increaseBtn = document.createElement("button");
        increaseBtn.id = "increase-text";
        increaseBtn.textContent = "A+";
        increaseBtn.setAttribute("aria-label", "Aumentar texto");
        increaseBtn.style.marginRight = "4px";

        controls.appendChild(decreaseBtn);
        controls.appendChild(resetBtn);
        controls.appendChild(increaseBtn);

        nav.insertBefore(controls, nav.firstChild);

        let currentSize = 1;

        increaseBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const mainEl = document.getElementById("main");
            if (mainEl && currentSize < 2) {
                currentSize += 0.1;
                mainEl.style.fontSize = currentSize + "em";
            }
        });

        decreaseBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const mainEl = document.getElementById("main");
            if (mainEl && currentSize > 0.6) {
                currentSize -= 0.1;
                mainEl.style.fontSize = currentSize + "em";
            }
        });

        resetBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const mainEl = document.getElementById("main");
            if (mainEl) {
                currentSize = 1;
                mainEl.style.fontSize = "1em";
            }
        });
    }
});

$(window).load(function() {
    if (typeof Galleria !== 'undefined' && Galleria.get().length !== 0) {
        if ($('.galleria-container').parent().hasClass('cover-carousel-tile')) {
            if (!$('body').hasClass('template-compose')) {
                Galleria.unloadTheme();
                Galleria.get(0).destroy();
                Galleria.loadTheme('++theme++Interlegis/galleria-theme/galleria.tema-pm3.js');
                Galleria.run('.galleria', {
                    theme: 'tema-pm3'
                });
                Galleria.configure({
                    wait: true,
                    height: 0.666,
                    transition: 'fade',
                    transition_speed: 500,
                    imageCrop: 'landscape',
                    showImagenav: true,
                    fullscreenDoubleTap: false,
                    idleMode: false,
                });
            }
        }
    }
});

    //Show menu on mobile menu button click
    $(".menu-button button").on( "click", function() {
        $(this).toggleClass("menuAtivo");
        $portletItem.slideUp(200);
        $portletHeader.removeClass("menuAtivo");
        $("#column-one").slideToggle();

    });
    //Collapse menu according to screen size
    $(window).resize(function() {
        if ($(window).width() < 753) {
            $portletHeader.unbind();
            $(".menu-button button").removeClass("menuAtivo")
            $portletItem.hide();
            $("#column-one").hide();
            $("#column-one").addClass("menuAtivo");
            $portletHeader.click(function(e) {
                e.preventDefault();
                $(this).toggleClass("menuAtivo");
                $(this).next().slideToggle();
            });
        } else {
            $portletHeader.unbind();
            $portletItem.show();
            $("#column-one").removeClass("menuAtivo")
            $("#column-one").show();
            $(".menu-button button").removeClass("menuAtivo")
            $("#column-one").css("display","table-cell");
        }
        navScrollWidth = $('nav ul')[0].scrollWidth - $('nav ul')[0].clientWidth;


    }).resize();

    if (Galleria.get().length !== 0) {
        Galleria.configure({wait: true});
    }

});

$(window).load(function() {
    /*
     * Confere se existe uma Galleria do Cover na página, e então carrega um novo tema.
     */
    if (Galleria.get().length !== 0) {
        if ($('.galleria-container').parent().hasClass('cover-carousel-tile')) {
            if (!$('body').hasClass('template-compose')) {
                //Unload e destruição da Galleria atual
                Galleria.unloadTheme();
                Galleria.get(0).destroy();
                //Reinicia a Galleria com o novo tema carregado
                Galleria.loadTheme('++theme++Apucarana/galleria-theme/galleria.tema-pm3.js');
                Galleria.run('.galleria', {
                    theme: 'tema-pm3'
                });
                //Configurações do tema
                Galleria.configure({
                    wait: true,
                    height: 0.666,
                    transition: 'slide',
                    transition_speed: 500,
                    imageCrop: 'landscape',
                    showImagenav: true,
                    fullscreenDoubleTap: false,
                    idleMode: false,
                });
            }
        }
    }
});
