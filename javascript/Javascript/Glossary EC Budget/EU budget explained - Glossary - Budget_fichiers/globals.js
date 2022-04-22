// JavaScript Document

var lang = $("html").attr("lang");

var spotlightTransitionTime = 1000;
var spotlightSwitchInterval = 4000;
var enableQualityCheck = false;
var newStampNrOfDays = 7; //number of days the "new" stamp should be visible after publication of a document

var moreLinkText = [];
moreLinkText["en"] = "More";
moreLinkText["fr"] = "Plus";
moreLinkText["de"] = "Weiter";


var langversions = [
"bg,bulgare,Bulgarisch,",
"cs,tch\u00e8que,Czeck",
"da,danois,D\u00e4nisch",
"de,allemand,Deutch",
"et,estonien,Estnisch",
"el,grec,Griechisch",
"en,anglais,Englisch",
"es,espagnol,Spanisch",
"fr,fran\u00e7ais,Franz\u00f6sisch",
"it,italien,Italienisch",
"lv,letton,Lettisch",
"lt,lituanien,Litauisch",
"hu,hongrois,Ungarisch",
"mt,maltais,Maltesisch",
"nl,n\u00e9erlandais,Niederl\u00e4ndisch",
"pl,polonais,Polnisch",
"pt,portugais,Portugiesisch",
"ro,roumain,Rum\u00e4nisch",
"sk,slovaque,Slowakisch",
"sl,slov\u00e8ne,Slowenisch",
"fi,finnois,Finnisch",
"sv,su\u00e9dois,Schwedisch"];


//numerical codes are for the video feed
var langversionLocalised = 
[
"bg,български,22",
"cs,čeština,13",
"da,dansk,10",
"de,Deutsch,04",
"et,eesti keel,14",
"el,ελληνικά,07",
"en,English,02",
"es,español,06",
"fr,français,03",
"it,italiano,05",
"lv,latviešu valoda,15",
"lt,lietuvių kalba,16",
"hu,magyar,17",
"mt,Malti,18",
"nl,Nederlands,09",
"pl,polski,19",
"po,português,08",
"ro,română,23",
"sk,slovenčina,20",
"sl,slovenščina,21",
"fi,suomi,11",
"sv,svenska,12"
];








