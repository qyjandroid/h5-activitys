export function getQueryString(name:string) {
    const result = window.location.search.match(new RegExp(`[\?\&]${name}=([^\&]+)`, 'i'));
    if (result == null || result.length < 1) {
        return '';
    }
    return result[1];
}
