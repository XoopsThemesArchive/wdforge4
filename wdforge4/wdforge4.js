function initArray() {
this.length = initArray.arguments.length
for (var i = 0; i < this.length; i++)
this[i+1] = initArray.arguments[i]
}
var JourArray = new initArray ("Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi");
var MoisArray = new initArray ("Janvier","F�vrier","Mars","Avril","Mai","Juin","Juillet","Ao�t","Septembre","Octobre","Novembre","D�cembre");
var DateJour = new Date();
function DateduJour() {
	document.write(JourArray[(DateJour.getDay()+1)]," ",DateJour.getDate()," ");
	document.write(MoisArray[(DateJour.getMonth()+1)]," ");
	document.write((DateJour.getFullYear()));
}
