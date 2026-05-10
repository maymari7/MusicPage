const play = document.querySelector('.btn-control.play'); // . seleciona a class
const audio = document.querySelector('#audio'); // # seleciona o id
const cd = document.querySelector('.cd');
const cursor = document.querySelector('#cursor');


play.addEventListener('click', () => { // evento de click
    if (cd.style.animationPlayState === 'running')  { // verifica se a animação está rodando
        audio.pause()
        cd.style.animationPlayState = 'paused'
        play.textContent = '▶';
    } else { // se não estiver rodando
        audio.play()
        cd.style.animationPlayState = 'running';
        play.textContent = '⏸';
    } 
});

// document.body.addEventListener('keydown', (event) => { // evento de teclado
//     if (event.key === ' ') { // verifica se a tecla pressionada é espaço
//         if (cd.style.animationPlayState === 'running')  { // verifica se a animação está rodando
//             audio.pause()
//             cd.style.animationPlayState = 'paused'
//             play.textContent = '▶';
//         } else { // se não estiver rodando
//             audio.play()
//             cd.style.animationPlayState = 'running';
//             play.textContent = '⏸';
//         } 
//     }
// });

document.body.addEventListener('mousemove', (event) => { // evento de teclado  
    cursor.style.left = event.clientX - 10 + 'px';
    cursor.style.top = event.clientY - 10 + 'px';
});

// ---------------------------- FILA DE MUSICAS ---------------------------
const musicTrack = document.querySelector('.music-track');
function adicionarMusica(caminhoimg, nome, artista, tempo) { // aqui coloca as informaçãoes que terão as musicas

    const music = document.createElement('div');
    music.classList.add('track');
        music.innerHTML = `
            <img class="img-track" src="${caminhoimg}">
            <div class="info-track">
                <a class="titulo-track">${nome}</a>
                <p class="artist-track">${artista}</p>
                <p class="time-track">${tempo}</p>
            </div>`;

    musicTrack.appendChild(music); // adiciona a music como filho da div music-track

    // innerHTML serve para colocar o conteudo dentro da div
}

// ---------------------------- ADD MUSIC ---------------------------
adicionarMusica('img-album/tinnshe-album.jpg', 'Cold Sweat', 'Tinashe', '3:30');
adicionarMusica('img-album/poisongirl-album.jpg', 'Love Me, Please Love Me', 'POiSON GiRL FRiEND', '5:02');
adicionarMusica('img-album/suicide-album.jpg', 'The Number You Have Dialed Is Not in Service', '$uicideboy$', '2:45');
adicionarMusica('img-album/tinnshe-album.jpg', 'Cold Sweat', 'Tinashe', '3:30');
adicionarMusica('img-album/poisongirl-album.jpg', 'Love Me, Please Love Me', 'POiSON GiRL FRiEND', '5:02');
adicionarMusica('img-album/suicide-album.jpg', 'The Number You Have Dialed Is Not in Service', '$uicideboy$', '2:45');
