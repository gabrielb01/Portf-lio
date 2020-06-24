let doc = document.documentElement;


window.onload = () => {

    document.querySelector('.top-document').addEventListener('click', () => {
        doc.scrollTop = 0;
    });

}




window.onscroll = () => {

    

    if (doc.scrollTop > 200) {
        document.querySelector('.top-document').style.display = "inline-block";
    } else {
        document.querySelector('.top-document').style.display = "none";
    }

}