# Verificar a versão do Node instalada
node -v 

# Gerar arquivo package.json (verificar se esta dentro do repositório)
npm init -y

# Instalar o TypeScript
npm i -g typescript

# Transpilar o código ts
npx tsc index.ts

# Criar arquivo de configuração do ts
npx tsc --init

# Configurações do arquivo tsconfig.json
"target": "es6",
"module": "commonjs",
"rootDir": "./src",
"sourceMap": true,
"outDir": "./build",
"removeComments": true,
"noImplicitAny": true, 

# Adicionar script no package.json
 "start": "npx tsc && node ./build/index.js"