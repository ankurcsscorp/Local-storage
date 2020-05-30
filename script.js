//Map method--------------------
let devices= ["Nokia", "Samusang", "Redmi", "Apple", "Realme", "Oppo"]
// lets create a carbon copy

let newArray = devices.map((item, index, array) => {
return item
});
// console.log(newArray);


// local storage---------------------------

let inpKey= document.getElementById("inpkey");
let inpValue= document.getElementById("inpValue");
let btnSubmit= document.getElementById("btnSubmit");
let viewLocal= document.getElementById("viewLocal");
let btnDelete= document.getElementById("btnDelete");
btnSubmit.onclick =function()
{
    const key= inpKey.value;
    const val= inpValue.value;
if(key && val){
    localStorage.setItem(key, val);
    location.reload();
}
};
btnDelete.onclick =function()
{

    localStorage.clear();
    location.reload();

};
for(i=0; i<localStorage.length;i++) {
    const key= localStorage.key(i);
    const value= localStorage.getItem(key);
    viewLocal.innerHTML +=`${key}: ${value}</br>`;
}
