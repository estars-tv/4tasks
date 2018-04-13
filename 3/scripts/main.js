/**
 * @name extractEmails - получение всех почтовых адресов с массива тектов
 * @param textArr {Array} - массив текстов
 * @returns {Array}
 */
function extractEmails(textArr) {
    var emails = [];

    for (var i = 0; i < textArr.length; i++) {
        var result = textArr[i].match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);

        if (result) {
            if (Array.isArray(result)) {
                for (var n = 0; n < result.length; n++) {
                    emails.push(result[n]);
                }
            } else {
                emails.push(result);
            }
        }
    }

    return emails;
}