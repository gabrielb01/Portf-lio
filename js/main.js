let doc = document.documentElement;


window.onload = () => {

    document.querySelector('.top-document').addEventListener('click', () => {
        window.scroll({
            top:0,
            behavior: 'smooth'  
        });
    });

}




window.onscroll = () => {



    if (doc.scrollTop > 200) {
        document.querySelector('.top-document').style.display = "inline-block";
    } else {
        document.querySelector('.top-document').style.display = "none";
    }

}