let doc = document.documentElement;
let display = 0;
let arraySkills = [97,90,88,92,87,82,91,72,65,61];



window.onload = () => {

    const onFocusInput = (classFocus, classAlt) => {
        document.querySelector('.' + classFocus).addEventListener('focus', () => {
            let alt = document.querySelector('.' + classAlt);
            alt.style.marginTop = "-6px";
            alt.style.backgroundColor = "#fff";
            alt.style.color = "#666";
            alt.style.fontSize = "14px";
        });
    }

    const onBlurInput = (classFocus, classAlt) => {
        document.querySelector('.' + classFocus).addEventListener('blur', () => {
            if (document.querySelector('.' + classFocus).value == "") {
                let alt = document.querySelector('.' + classAlt);
                alt.style.marginTop = "15px";
                alt.style.backgroundColor = "transparent";
                alt.style.color = "#000";
                alt.style.fontSize = "20px";
            }
        });
    }


    const msgDocumentAnimate = () => {

        setInterval(() => {
            setTimeout(() => {
                document.querySelector('.msg-content').style.transform = "rotate(-8deg)";
                setTimeout(() => {
                    document.querySelector('.msg-content').style.transform = "rotate(8deg)";
                    setTimeout(() => {
                        document.querySelector('.msg-content').style.transform = "rotate(0deg)";
                    }, 250);
                }, 250);
            }, 250);
        }, 2000);
    }


    const setSkills = () => {
        for(let i=0;i<arraySkills.length;i++) {
            document.getElementById("skill"+(i+1)).style.strokeDashoffset = "calc(440 - (440 *"+arraySkills[i]+") /100)";
            for(let j=0;j<arraySkills[i]+1;j++) {
                setTimeout(()=> {
                    document.getElementById("percent-value"+(i+1)).innerHTML = j;
                }, (2000/arraySkills[i]) * (j/1.1) );
            }
        }
    }



    document.querySelector('.top-document').addEventListener('click', () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.onscroll = () => {

        if (doc.scrollTop > 200) {
            document.querySelector('.top-document').style.display = "inline-block";
        } else {
            document.querySelector('.top-document').style.display = "none";
        }
        console.log(doc.scrollTop +" - "+document.querySelector('.section-skills').offsetTop);
    
        if ((doc.scrollTop+250) >=document.querySelector('.section-skills').offsetTop && display ==0) {
            display = 1;
            setSkills();
        }
    
    }


    onFocusInput('input-name', 'nome');
    onBlurInput('input-name', 'nome');

    onFocusInput('input-email', 'email');
    onBlurInput('input-email', 'email');

    onFocusInput('mensagem-text', 'mensagem');
    onBlurInput('mensagem-text', 'mensagem');

    msgDocumentAnimate();




    let cards = document.querySelectorAll('.section-blog-body-card')


    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener('click', () => {
            alert("Este post é um conteúdo estático");
        });
    }

    document.getElementsByTagName('body')[0].style.overflowY = "visible";

  

}

