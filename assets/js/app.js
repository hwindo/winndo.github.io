import activateLogoAnimation from './components/logo.js';
import screenLoader from './components/screenLoader.js';
const logName = '[app] ';
activateLogoAnimation();
screenLoader();

if ('serviceWorker' in navigator) {
    console.log(logName, 'serviceWorker in navigation');
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/serviceWorker.js')
            .then(function(registration) {
                console.log(logName, 'serviceWorker registration: SUCCESS', registration.scope);
            }, function(err) {
                console.log(logName, 'serviceWorker registration: FAILED');
            });
    });
}