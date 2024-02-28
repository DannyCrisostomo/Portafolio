const datos_trabajos= [
    {
        link: "https://www.linkedin.com/in/danny-crisostomo/",
        imagen: "./icon/trabajos/linkedin.png",
        nombre:"Linkedin",
    },
    {
        link: "https://walink.co/4f87d6",
        imagen: "./icon/trabajos/whatsapp.png",
        nombre:"WhatsApp",
    },
    {
        link: "https://www.linkedin.com/in/danny-crisostomo/",
        imagen: "./icon/trabajos/mapa.png",
        nombre:"Maps",
    },
    {
        link: "https://dazzling-axolotl-8b7918.netlify.app/",
        imagen: "./icon/trabajos/qr.png",
        nombre:"QR",
    },
    {
        link: "https://frolicking-pasca-b144ec.netlify.app/",
        imagen: "./icon/trabajos/Scroll.png",
        nombre:"Scroll",
    },
    {
        link: "https://frabjous-praline-7e480f.netlify.app/",
        imagen: "./icon/trabajos/StarBuck.png",
        nombre:"StarBuck",
    },
    {
        link: "https://dreamy-zuccutto-e94890.netlify.app/",
        imagen: "./icon/trabajos/Netflix.png",
        nombre:"Netflix",
    },
    {
        link: "https://polite-praline-75cd4b.netlify.app/",
        imagen: "./icon/trabajos/Portada.png",
        nombre:"Portada",
    },
    {
        link: "https://tiny-lollipop-6064e4.netlify.app/",
        imagen: "./icon/trabajos/Carta.png",
        nombre:"Carta",
    },
    {
        link: "https://radiant-otter-54ab8e.netlify.app/",
        imagen: "./icon/trabajos/Potencia_tu_venta.png",
        nombre:"Venta",
    },
    {
        link: "https://gorgeous-zuccutto-26cf6c.netlify.app/",
        imagen: "./icon/trabajos/Hora.png",
        nombre:"Hora",
    },
    {
        link: "https://hilarious-gingersnap-2e7320.netlify.app/",
        imagen: "./icon/trabajos/BlogCoffe.png",
        nombre:"BlogCoffe",
    },
    {
        link: "https://sparkling-selkie-fe7376.netlify.app/",
        imagen: "./icon/trabajos/SpeedBur.png",
        nombre:"SpeedBur",
    },
    {
        link: "https://luminous-narwhal-6b7616.netlify.app/",
        imagen: "./icon/trabajos/Goku.png",
        nombre:"DBZ",
    },
    {
        link: "https://thunderous-klepon-c3991e.netlify.app/",
        imagen: "./icon/trabajos/Blog.png",
        nombre:"Blog",
    },
    {
        link: "https://meek-melba-a34c38.netlify.app/",
        imagen: "./icon/trabajos/Pixabay.png",
        nombre:"Pixabay",
    },
    {
        link: "https://chimerical-faun-8df636.netlify.app/",
        imagen: "./icon/trabajos/pokeapi.png",
        nombre:"PokeAPI",
    },
    {
        link: "https://nextmoviedvcc.000webhostapp.com/",
        imagen: "./icon/trabajos/NextMovie.png",
        nombre:"NextMovie",
    },
    {
        link: "https://inquisitive-pony-28778a.netlify.app/",
        imagen: "./icon/trabajos/PictureReel.png",
        nombre:"PictureReel",
    },
    {
        link: "https://monumental-mooncake-e6c124.netlify.app/",
        imagen: "./icon/trabajos/StudioGhibli.png",
        nombre:"StudioGhibli",
    },
];

const insertar_datos = document.getElementById("agregar_trabajos");
for (let index of datos_trabajos) {
    insertar_datos.innerHTML += `
    
    <div class="apk">
        <a class="link" target="_blank" href="${index.link}"">
            <img class="icono-esc" src="${index.imagen}" alt="">${index.nombre}
        </a>
    </div>
`;
}
