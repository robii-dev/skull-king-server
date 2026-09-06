const { Server, Origins } = require('boardgame.io/server');
const { SkullKingGame } = require('./game/SkullKing');

const server = Server({
  games: [SkullKingGame],
  origins: [
    Origins.LOCALHOST,
    /\.vercel\.app$/,
  ],
});

const PORT = process.env.PORT || 8000;

server.run(PORT, () => {
  console.log('Serveur Skull King démarré sur le port ' + PORT);
});