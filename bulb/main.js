const ligth = () =>{
    let text =document.getElementById('hdata');
     for(x=1; x<6; x++){
    let bid =document.getElementById('tubelight'.concat(x));
    if(bid.src.match('lighton.jpg')){
        bid.src="lightoff.jpg";
        text.innerHTML="LIGHT IS OFF";
        text.style.color="black";
    }else{
        bid.src="lighton.jpg";
        text.innerHTML="LIGTH IS ON";
        text.style.color="Red";
    }

}
}

