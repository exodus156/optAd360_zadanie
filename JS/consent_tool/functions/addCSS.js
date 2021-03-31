const insertCss = ( code ) => {
    let style = document.createElement('style');
    
    document.getElementsByTagName("head")[0].appendChild( style );

    if (style.styleSheet) {
        // IE
        style.styleSheet.cssText = code;
    } else {
        // Other browsers
        style.innerHTML = code;
    }    
}

export default insertCss