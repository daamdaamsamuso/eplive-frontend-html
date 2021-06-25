
let enPath = [
    [33, 74, 87, 80, 85, 85, 29, 7, 6, 71, 67, 74, 64, 64, 87, 93, 90, 67, 90, 83, 95, 0, 2, 0, 15, 13, 15, 10, 19, 93, 91, 46, 111, 44, 55, 54, 48, 53, 52, 102, 42, 37, 38, 99, 37, 34, 60, 127, 97, 13, 96, 38, 49, 9, 50, 54, 118, 44, 52, 56, 112, 114, 110, 80, 89, 82, 79, 84, 82, 84, 87, 68, 89, 94, 83, 92, 65, 94, 92, 66, 65, 94, 67, 69, 65, 66, 91, 19, 87, 23, 11, 72, 83, 13, 18, 105, 109, 45, 110, 101,118,114,98,122,39,103,56,121,53],
    [33, 74, 87, 80, 85, 85, 29, 7, 6, 65, 83, 64, 66, 64, 75, 74, 64, 66, 80, 65, 88, 0, 2, 0, 15, 13, 15, 15, 19, 93, 91, 46, 111, 44, 55, 54, 48, 53, 52, 102, 42, 37, 38, 99, 37, 34, 60, 127, 97, 13, 96, 38, 49, 9, 50, 54, 118, 44, 52, 56, 112, 114, 110, 80, 89, 82, 79, 84, 82, 84, 87, 68, 89, 94, 83, 92, 65, 94, 92, 66, 65, 94, 67, 69, 65, 66, 91, 19, 87, 23, 11, 72, 83, 13, 18, 105, 109, 45, 110, 101,118,114,98,122,39,103,56,121,53],
    [33, 74, 87, 80, 85, 85, 29, 7, 6, 78, 67, 75, 69, 76, 70, 70, 69, 71, 92, 89, 94, 0, 2, 0, 15, 13, 15, 13, 19, 93, 91, 46, 111, 44, 55, 54, 48, 53, 52, 102, 42, 37, 38, 99, 37, 34, 60, 127, 97, 13, 96, 38, 49, 9, 50, 54, 118, 44, 52, 56, 112, 114, 110, 80, 89, 82, 79, 84, 82, 84, 87, 68, 89, 94, 83, 92, 65, 94, 92, 66, 65, 94, 67, 69, 65, 66, 91, 19, 87, 23, 11, 72, 83, 13, 18, 105, 109, 45, 110, 101,118,114,98,122,39,103,56,121,53],
    [33, 74, 87, 80, 85, 85, 29, 7, 6, 73, 95, 79, 88, 92, 94, 69, 64, 65, 87, 88, 92, 0, 3, 8, 0, 15, 11, 12, 19, 93, 91, 46, 111, 44, 55, 54, 48, 53, 52, 102, 42, 37, 38, 99, 37, 34, 60, 127, 97, 13, 96, 38, 49, 9, 50, 54, 118, 44, 52, 56, 112, 114, 110, 80, 89, 82, 79, 84, 82, 84, 87, 68, 89, 94, 83, 92, 65, 94, 92, 66, 65, 94, 67, 69, 65, 66, 91, 19, 87, 23, 11, 72, 83, 13, 18, 105, 109, 45, 110, 101,118,114,98,122,39,103,56,121,53]
];

let krPath = [
    [33, 74, 87, 80, 85, 85, 29, 7, 6, 71, 67, 74, 64, 64, 87, 93, 90, 67, 90, 83, 95, 0, 2, 0, 15, 13, 15, 10, 19, 93, 91, 46, 111, 44, 55, 54, 48, 53, 52, 102, 42, 37, 38, 99, 37, 34, 60, 127, 97, 13, 96, 38, 49, 9, 60, 42, 118, 44, 52, 56, 112, 114, 110, 80, 89, 82, 79, 84, 82, 84, 87, 68, 89, 94, 83, 92, 65, 94, 92, 66, 65, 94, 67, 69, 65, 66, 91, 19, 87, 23, 11, 72, 83, 13, 18, 105, 109, 45, 110, 101,118,114,98,122,39,103,56,121,53],
    [33, 74, 87, 80, 85, 85, 29, 7, 6, 65, 83, 64, 66, 64, 75, 74, 64, 66, 80, 65, 88, 0, 2, 0, 15, 13, 15, 15, 19, 93, 91, 46, 111, 44, 55, 54, 48, 53, 52, 102, 42, 37, 38, 99, 37, 34, 60, 127, 97, 13, 96, 38, 49, 9, 60, 42, 118, 44, 52, 56, 112, 114, 110, 80, 89, 82, 79, 84, 82, 84, 87, 68, 89, 94, 83, 92, 65, 94, 92, 66, 65, 94, 67, 69, 65, 66, 91, 19, 87, 23, 11, 72, 83, 13, 18, 105, 109, 45, 110, 101,118,114,98,122,39,103,56,121,53],
    [33, 74, 87, 80, 85, 85, 29, 7, 6, 78, 67, 75, 69, 76, 70, 70, 69, 71, 92, 89, 94, 0, 2, 0, 15, 13, 15, 13, 19, 93, 91, 46, 111, 44, 55, 54, 48, 53, 52, 102, 42, 37, 38, 99, 37, 34, 60, 127, 97, 13, 96, 38, 49, 9, 60, 42, 118, 44, 52, 56, 112, 114, 110, 80, 89, 82, 79, 84, 82, 84, 87, 68, 89, 94, 83, 92, 65, 94, 92, 66, 65, 94, 67, 69, 65, 66, 91, 19, 87, 23, 11, 72, 83, 13, 18, 105, 109, 45, 110, 101,118,114,98,122,39,103,56,121,53],
    [33, 74, 87, 80, 85, 85, 29, 7, 6, 73, 95, 79, 88, 92, 94, 69, 64, 65, 87, 88, 92, 0, 3, 8, 0, 15, 11, 12, 19, 93, 91, 46, 111, 44, 55, 54, 48, 53, 52, 102, 42, 37, 38, 99, 37, 34, 60, 127, 97, 13, 96, 38, 49, 9, 60, 42, 118, 44, 52, 56, 112, 114, 110, 80, 89, 82, 79, 84, 82, 84, 87, 68, 89, 94, 83, 92, 65, 94, 92, 66, 65, 94, 67, 69, 65, 66, 91, 19, 87, 23, 11, 72, 83, 13, 18, 105, 109, 45, 110, 101,118,114,98,122,39,103,56,121,53]
];

let zhPath = [
    [33, 74, 87, 80, 85, 85, 29, 7, 6, 71, 67, 74, 64, 64, 87, 93, 90, 67, 90, 83, 95, 0, 2, 0, 15, 13, 15, 10, 19, 93, 91, 46, 111, 44, 55, 54, 48, 53, 52, 102, 42, 37, 38, 99, 37, 34, 60, 127, 97, 13, 96, 38, 49, 9, 45, 48, 118, 44, 52, 56, 112, 114, 110, 80, 89, 82, 79, 84, 82, 84, 87, 68, 89, 94, 83, 92, 65, 94, 92, 66, 65, 94, 67, 69, 65, 66, 91, 19, 87, 23, 11, 72, 83, 13, 18, 105, 109, 45, 110, 101,118,114,98,122,39,103,56,121,53],
    [33, 74, 87, 80, 85, 85, 29, 7, 6, 65, 83, 64, 66, 64, 75, 74, 64, 66, 80, 65, 88, 0, 2, 0, 15, 13, 15, 15, 19, 93, 91, 46, 111, 44, 55, 54, 48, 53, 52, 102, 42, 37, 38, 99, 37, 34, 60, 127, 97, 13, 96, 38, 49, 9, 45, 48, 118, 44, 52, 56, 112, 114, 110, 80, 89, 82, 79, 84, 82, 84, 87, 68, 89, 94, 83, 92, 65, 94, 92, 66, 65, 94, 67, 69, 65, 66, 91, 19, 87, 23, 11, 72, 83, 13, 18, 105, 109, 45, 110, 101,118,114,98,122,39,103,56,121,53],
    [33, 74, 87, 80, 85, 85, 29, 7, 6, 78, 67, 75, 69, 76, 70, 70, 69, 71, 92, 89, 94, 0, 2, 0, 15, 13, 15, 13, 19, 93, 91, 46, 111, 44, 55, 54, 48, 53, 52, 102, 42, 37, 38, 99, 37, 34, 60, 127, 97, 13, 96, 38, 49, 9, 45, 48, 118, 44, 52, 56, 112, 114, 110, 80, 89, 82, 79, 84, 82, 84, 87, 68, 89, 94, 83, 92, 65, 94, 92, 66, 65, 94, 67, 69, 65, 66, 91, 19, 87, 23, 11, 72, 83, 13, 18, 105, 109, 45, 110, 101,118,114,98,122,39,103,56,121,53],
    [33, 74, 87, 80, 85, 85, 29, 7, 6, 73, 95, 79, 88, 92, 94, 69, 64, 65, 87, 88, 92, 0, 3, 8, 0, 15, 11, 12, 19, 93, 91, 46, 111, 44, 55, 54, 48, 53, 52, 102, 42, 37, 38, 99, 37, 34, 60, 127, 97, 13, 96, 38, 49, 9, 45, 48, 118, 44, 52, 56, 112, 114, 110, 80, 89, 82, 79, 84, 82, 84, 87, 68, 89, 94, 83, 92, 65, 94, 92, 66, 65, 94, 67, 69, 65, 66, 91, 19, 87, 23, 11, 72, 83, 13, 18, 105, 109, 45, 110, 101,118,114,98,122,39,103,56,121,53]
];

function getPath() {
    //현재 브라우저 언어 가져오기
    //언어 값 받아올 변수. un은 undefined 의 앞 2글자.
    var userLang = "un";
    //crome+firefox || explorer || explorer
    userLang = navigator.language || navigator.userLanguage || navigator.systemLanguage;

    let path;

    userLang = userLang.toLowerCase(); //받아온 값을 소문자로 변경
    userLang = userLang.substring(0, 2); //소문자로 변경한 갚의 앞 2글자만 받아오기

    Console_Log("getPath (userLang) : " + userLang);
    var rand = Math.floor(Math.random() * 4);
    if (userLang == "ko") {
        //한국어

        Console_Log("한국 버전 비디오 패스 적용 rand : " + rand);
        path = krPath[rand];
    } else if (userLang == "cn" || userLang == "tw" || userLang == "zh") {
        //중국어
        Console_Log("대만/중국 버전 비디오 패스 적용 rand : " + rand);
        path = zhPath[rand];
    } else {
        Console_Log("영어 버전 비디오 패스 적용 rand : " + rand);
        path = enPath[rand];
    }

    return decryptProcess(path);
}


const encryptProcess = (stringSrc) => {
    //Console_Log("-----------------------암호화------------------------------");
    const srcStr = stringSrc;
    //Console_Log("src String : "+ srcStr);

    const srcStr_encrypt = encrypt("!", srcStr);
    //Console_Log("encryption : "+ srcStr_encrypt);

    const srcStr_encrypt_tobyte = toUTF8Array(srcStr_encrypt);
    //Console_Log("to byte : "+ srcStr_encrypt_tobyte);

    //Console_Log("-----------------------------------------------------");

    return srcStr_encrypt_tobyte;
};


const decryptProcess = (byteArray) => {

    if (byteArray == null || byteArray == undefined || byteArray.length == undefined)
        return "";

    //Console_Log("------------------------복호화-----------------------------");
    const srcByte = byteArray;
    //Console_Log("src Byte : "+ srcByte);
    const srcByte_toString = Utf8ArrayToStr(srcByte);
    //Console_Log("to string : "+ srcByte_toString);

    const srcByte_toString_decrypt = decrypt(srcByte_toString);
    //Console_Log("Decryption : "+ srcByte_toString_decrypt);

    //Console_Log("-----------------------------------------------------");

    return srcByte_toString_decrypt;
};

function toggleEncryption(keyChar, string) {
    const keyCode = keyChar.charCodeAt(0);
    let result = "";

    for (let index = 0; index < string.length; ++index) {
        const code = string.charCodeAt(index);
        result += String.fromCharCode(code ^ ((index + 1 + keyCode) & 127));
    }
    return result;
}

function encrypt(keyChar, string) {
    return keyChar[0] + toggleEncryption(keyChar, string);
}

function decrypt(encryptedString) {
    return toggleEncryption(encryptedString[0], encryptedString.slice(1));
}

function toUTF8Array(str) {
    let utf8 = [];
    for (let i = 0; i < str.length; i++) {
        let charcode = str.charCodeAt(i);
        if (charcode < 0x80) utf8.push(charcode);
        else if (charcode < 0x800) {
            utf8.push(0xc0 | (charcode >> 6), 0x80 | (charcode & 0x3f));
        } else if (charcode < 0xd800 || charcode >= 0xe000) {
            utf8.push(
                0xe0 | (charcode >> 12),
                0x80 | ((charcode >> 6) & 0x3f),
                0x80 | (charcode & 0x3f)
            );
        }
        // surrogate pair
        else {
            i++;
            // UTF-16 encodes 0x10000-0x10FFFF by
            // subtracting 0x10000 and splitting the
            // 20 bits of 0x0-0xFFFFF into two halves
            charcode =
                0x10000 + (((charcode & 0x3ff) << 10) | (str.charCodeAt(i) & 0x3ff));
            utf8.push(
                0xf0 | (charcode >> 18),
                0x80 | ((charcode >> 12) & 0x3f),
                0x80 | ((charcode >> 6) & 0x3f),
                0x80 | (charcode & 0x3f)
            );
        }
    }
    return utf8;
}

function stringToUtf8Bytes(text) {
    var result = [];
    if (text != null) {
        for (i = 0; i < text.length; i++) {
            var c = text.charCodeAt(i);
            if (c <= 0x7f) {
                result.push(c);
            } else if (c <= 0x07ff) {
                result.push(((c >> 6) & 0x1F) | 0xC0);
                result.push((c & 0x3F) | 0x80);
            } else {
                result.push(((c >> 12) & 0x0F) | 0xE0);
                result.push(((c >> 6) & 0x3F) | 0x80);
                result.push((c & 0x3F) | 0x80);
            }
        }
    }
    return result;
}

function Utf8ArrayToStr(array) {
    var out, i, len, c;
    var char2, char3;

    out = "";
    len = array.length;
    i = 0;
    while (i < len) {
        c = array[i++];
        switch (c >> 4) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
                // 0xxxxxxx
                out += String.fromCharCode(c);
                break;
            case 12:
            case 13:
                // 110x xxxx   10xx xxxx
                char2 = array[i++];
                out += String.fromCharCode(((c & 0x1f) << 6) | (char2 & 0x3f));
                break;
            case 14:
                // 1110 xxxx  10xx xxxx  10xx xxxx
                char2 = array[i++];
                char3 = array[i++];
                out += String.fromCharCode(
                    ((c & 0x0f) << 12) | ((char2 & 0x3f) << 6) | ((char3 & 0x3f) << 0)
                );
                break;
        }
    }
    return out;
}


