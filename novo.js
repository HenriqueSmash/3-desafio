// Função para criar um herói
function criarHeroi(nome, idade, tipo) {
    const heroi = {
      nome,
      idade,
      tipo,
      atacar: function () {
        let ataque;
  
        switch (this.tipo) {
          case "mago":
            ataque = "usou magia";
            break;
          case "guerreiro":
            ataque = "usou espada";
            break;
          case "monge":
            ataque = "usou artes marciais";
            break;
          case "ninja":
            ataque = "usou shuriken";
            break;
          default:
            ataque = "usou um ataque desconhecido";
            break;
        }
  
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
      },
    };
  
    return heroi;
  }
  
  // Exemplo de uso:
  const heroi = criarHeroi("Herói Exemplo", 25, "guerreiro");
  heroi.atacar(); // Saída: O guerreiro atacou usando espada
  
  