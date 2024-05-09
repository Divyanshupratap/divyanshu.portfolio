var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");
function opentab(tabname)
{
    for(tablink of tablinks){
        tablink.classList.remove("active");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active");
    document.getElementById(tabname).classList.add("active-tab");
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbyk8AI9Dz4JTvmCHbsH_dQ3mO_Xs-7fRwlmC9zq_aGrK5LjP_3XSQ_mpMx-Pxexe2sACg/exec'
        const form = document.forms['submit-to-google-sheet']
        const message=document.getElementById("msg");
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {message.innerHTML="Message sent Successfully"
             setTimeout(function(){message.innerHTML=""},5000)})
            .catch(error => console.error('Error!', error.message))
        })
    const typed=new Typed('.multipletext',{
        strings:['Frontend Developer','Software Developer'],
        typeSpeed:100,
        backSpeed:100,
        backDelay:1000,
        loop:true
    });