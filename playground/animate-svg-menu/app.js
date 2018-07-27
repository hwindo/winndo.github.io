(function () {
    var pathA = document.getElementById('pathA'),
        pathB = document.getElementById('pathB'),
        pathC = document.getElementById('pathC'),
        theBody = document.getElementsByTagName('body')[0],
        segmentA = new Segment(pathA, 8, 32),
        segmentB = new Segment(pathB, 8, 32),
        segmentC = new Segment(pathC, 8, 32),
        trigger = document.getElementById('menu-icon-trigger'),
        toCloseIcon = true,
        nav = document.getElementById('nav'), 
        ease = d3.easeLinear;

    function toggleBodyTheme() {
        if (!theBody.classList.contains('dark')) {
            theBody.classList.add('dark');
        } else {
            theBody.classList.remove('dark');
        }
    }

    function inAC(s) {
        var options = {
            delay: 0.1,
            callback: function () {
                inAC2(s);
            }
        }
        s.draw('80% - 24', '80%', 0.3, options);
    }

    function inAC2(s) {
        var options = {
            easing: ease('elastic-out', 1, 0.3)
        }
        s.draw('100% - 54.5', '100% - 30.5', 0.6, options);
    }

    function inB(s) {
        var options = {
            callback: function () {
                inB2(s)
            }
        }
        s.draw(8 - 6, 32 + 6, 0.1, options);
    }

    function inB2(s) {
        var options = {
            easing: ease('bounce-out', 1, 0.3)
        }
        s.draw(8 + 12, 32 - 12, 0.3, options);
    }

    var out = {
        ac: function (s) {
            var options = {
                easing: ease('elastic-in', 1, 0.3),
                callback: function () {
                    out.ac2(s);
                }
            };
            s.draw('90% - 24', '90%', 0.1, options);
        },
        ac2: function (s) {
            var options = {
                callback: function () {
                    out.ac3(s);
                }
            };
            s.draw('20% - 24', '20%', 0.3, options);
        },
        ac3: function (s) {
            var options = {
                easing: ease('elastic-out', 1, 0.3)
            };
            s.draw(8, 32, 0.3, options);
        },
        b: function (s) {
            var options = {
                delay: 0.1,
                easing: ease('elastic.out', 2, 0.4)
            };
            s.draw(8, 32, 0.3, options);
        }
    };

    function handleClick() {
        if (toCloseIcon) {
            inAC(segmentA);
            inAC(segmentC);
            inB(segmentB);
            nav.className = 'nav nav--active';
        } else {
            out.ac(segmentA);
            out.b(segmentB);
            out.ac(segmentC);
            nav.className = 'nav';
        }
        toCloseIcon = !toCloseIcon;
        toggleBodyTheme();
    }

    trigger.onclick = handleClick;
    nav.onclick = handleClick;
})();