function send(){
  var lastName = document.getElementById('nom').value;
  var firstName = document.getElementById('prénom').value;
  var city = document.getElementById('ville').value;
  var result = 'nom : ' + lastName + '\n' + 'prénom : ' + firstName + '\n' + 'ville : ' + city;
  // Vérifications
    if(isNaN(lastName) && isNaN(firstName) && isNaN(city)){
      alert(result);
    }else{
      alert('Veuillez renseigner les champs correctement !');
    }
}
