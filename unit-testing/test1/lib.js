/*function reverseText(text) {
    return text.split('').reverse().join('');
}
*/
function fixText(text){
    // for (var i = 0; i < text.length; i++) {
    //     console.log(text, 'før trim');
    //     return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    // };

    let trimmedText = text.trim();
    let lastText = trimmedText.slice(1);

    return trimmedText.charAt(0).toUpperCase() + lastText.toLowerCase();
}



//text.replace(/\s+/g, '');
//text.trim();