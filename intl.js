// Internationalization (i18n) involves adding support for different languages and countries in your app.
//DateTimeFormat
const dateformatter = new Intl.DateTimeFormat("de-AT");//For instance, the “de-AT” locale: German language as it’s used in Austria:
const date = new Date()
const format = dateformatter.format(date);
console.log(format); //20.9.2022


const dateformatter1 = new Intl.DateTimeFormat("ja-JP");//For instance, the “ja-JP” locale: japanese language
const date1 = new Date()
const format1 = dateformatter1.format(date1);
console.log(format1); //2022/9/20

const dateformatter2 = new Intl.DateTimeFormat("ar-SA");//For instance, the “ar-SA” locale: arabic language it’s used in saudi Arabia:
const date2 = new Date()
const format2 = dateformatter2.format(date2);
console.log(format2); //٢٤/٢/١٤٤٤ هـ

//NumberFormat 

const numberformatter = new Intl.NumberFormat("de-AT").format(123456789);
console.log(numberformatter)//123 456 789 

const numberformatter1 = new Intl.NumberFormat("ja-JP").format(123456789);
console.log(numberformatter1)//123,456,789

const numberformatter2 = new Intl.NumberFormat("ar-SA").format(123456789);
console.log(numberformatter2)//١٢٣٬٤٥٦٬٧٨٩

//currency numberformat

const currencyformatter = new Intl.NumberFormat("de-AT", {style: "currency", currency: "EUR"}).format(123456789);
console.log(currencyformatter)//€ 123.456.789,00 

const currencyformatter1 = new Intl.NumberFormat("ja-JP", {style: "currency", currency: "JPY"}).format(123456789);
console.log(currencyformatter1)//￥123,456,789

const currencyformatter2 = new Intl.NumberFormat("ar-SA", {style: "currency", currency: "SAR"}).format(123456789);
console.log(currencyformatter2)//١٢٣٬٤٥٦٬٧٨٩٫٠٠ ر.س.

