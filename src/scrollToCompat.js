let cachedResult = null;

function isLegacyReactNative() {
    if (cachedResult == null) {
        try {
            const PACKAGE = require('../../react-native/package.json');
            const version = PACKAGE.version;
            cachedResult = (
                version[0] === '0' &&
                parseInt(version.split('.')[1], 10) < 20
            )
        } catch (err) {
            cachedResult = true
        }
    }
    return cachedResult
}
export  default function scrollToCompat(scrollResponder, y, x, animate = false) {
    if (isLegacyReactNative()) {
        scrollResponder.scrollTo(y, x, animate)
    } else {
        scrollResponder.scrollTo({x, y, animate})
    }
}
