self.addEventListener('install',(event) =>{
    console.log('SW: instalado');
    const myPromise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Instalaciones finalizadas");
            resolve('ok')
        },3000)
    });
    event.waitUntil(myPromise)
})

self.addEventListener('activate',(event)=>{
    console.log("Sw: activado");
})

self.addEventListener('fetch',(event) =>{
    //console.log(event.request.url);

    if (event.request.url.includes('style.css')) {
        const res = new Response(
            `body{
                color: red;
                background-color: #000;
            }`,
            {
                headers:{
                    'Content-Type':'text/css'
                }
            }
        );

        event.respondWith(res)
    }

    if(event.request.url.includes('.jpg')){
        let res = fetch('./images/img2.jpg')
        event.respondWith(res)
    }
})