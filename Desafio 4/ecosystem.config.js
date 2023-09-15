module.exports = {
    apps: [
      {
        name: 'app-1',
        script: './src/server.js', // Substitua 'app.js' pelo seu arquivo de entrada Node.js
        instances: 1, // Número de instâncias para a primeira porta
        exec_mode: 'cluster',
        env: {
          PORT: 3000, // Porta para a primeira instância
        },
        watch: true,
      },
      {
        name: 'app-2',
        script: './src/server.js', // Substitua 'app.js' pelo seu arquivo de entrada Node.js
        instances: 1, // Número de instâncias para a segunda porta
        exec_mode: 'cluster',
        env: {
          PORT: 3001, // Porta para a segunda instância
        },
        watch: true,
      },
      {
        name: 'app-3',
        script: './src/server.js', // Substitua 'app.js' pelo seu arquivo de entrada Node.js
        instances: 1, // Número de instâncias para a terceira porta
        exec_mode: 'cluster',
        env: {
          PORT: 3002, // Porta para a terceira instância
        },
        watch: true,
      },
    ],
  };
  