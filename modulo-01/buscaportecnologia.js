const usuarios = [
  {
    nome: "Diego",
    tecnologias: ["Java", "HTML"]
  },
  {
    nome: "Fabio",
    tecnologias: ["HTML", "JavaScript", "CSS"]
  }
];

function checaUsuarioCSS(usuario) {
  const linguagem = "CSS";
  const busca = usuario.tecnologias.indexOf(linguagem);

  if (busca !== -1) {
    return true;
  } else {
    return false;
  }
}

for (let i = 0; i < usuarios.length; i++) {
  const usuarioUsaCSS = checaUsuarioCSS(usuarios[i]);

  if (usuarioUsaCSS) {
    console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
  }
}
