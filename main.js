function openNav(){
    document.querySelector('.nav').style.width = '200px';
    document.querySelector('.openBtn').style.display = 'none';
    document.querySelector('.about').style.visibility = 'hidden';
    document.querySelector('.about').style.transition = ' hidden 0s';
    
    
}

function closeNav(){
    document.querySelector('.nav').style.width ='0px';
    document.querySelector('.openBtn').style.display = 'block';
    
    document.querySelector('.about').style.visibility= 'visible';

}