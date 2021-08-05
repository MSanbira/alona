
export function getSubPath(subPath) {
    return `/${subPath}`;
}

export function getRootPath() {
    return '/';
}

export function isCurrent(subPath) {
    return window.location.pathname.includes(subPath);
}

export function isTablet() {
    return window.innerWidth <= 1215;
}

export function setHideMobileAlert() {
    return window.localStorage.setItem('hideMobileAlert', 'true');
}

export function isHideMobileAlert() {
    return window.localStorage.getItem('hideMobileAlert') === 'true';
}

