# Conceitos
## API (Application Programming Interface / Interface de Programação de Aplicativos)
```
- Um conjunto de especificações que definem de que forma as aplicações irão se comunicar
- Regras e protocolos para que softwares interajam entre si
- Interface para que um sitema se comunique com outro sistema
- Como se fosse o cardápio de um restaurante que comunica o restaurante com o cliente
```

## REST (Representation State Transfer / Transferencia Representacional de Estado)
```
- Restrição de arquitetura
- Conjunto de regras e convenções que permite que dois sistemas se comuniquem pela internet
- A arquitetura REST separa o backend do frontend
- São padrões e regras para construir API's
```

## RESTful
```
- Utiliza métodos HTTP
- Utilizado em nuvem
- Capacidade de aplicar os principios de REST
- Segue e aplica os padrões e regras do REST
```

## Maturidade de modelo RESTful
```
- Nivel 0 
A API precisa utilizar o protocolo HTTP para a comunicação 
- Nivel 1
A API deve possuir mapeamento de recursos bem definidos. Representando substantivos que fazem a correta utilização de URLs para os recursos respectivos
- Nivel 2
A API deve utilizar o protocolo HTTP de forma semantica com seus verbos com o uso GET, POST, PUT, DELETE de acordo com a requisição
- Nivel 4
A API deve mostrar o estado atual de relacionamento com os demais recursos da API
```

## JSON (Javascipt Object Notation / Notação de objeto de Javascript)
```
- Padrão de dados
- Estruturar dados em formato de texto
- Transferir informações entre servidor e o cliente
{
    "book": {
        "title": Design Patterns",
        "category": ["Design Patterns", "Technology", "Project"],
    }
}
```

## Requisições HTTP
```
- O protocolo HTTP define um conjunto de métodos de requisições resnponsáveis por indicar a ação a ser executado para um dado recurso.
- GET, PUSH, DELETE, PUT, PATCH
```

## Headers HTTP 
```
- Campo para envio de informações adicionais (normalmente formatação ou autorização) que não tem relação com os dados em si: Authorization, Content Type, Accept
```

## HTTP Codes
```
- 100 - 199: São dados informativos
- 200 - 299: São dados de sucesso
- 300 - 399: Redirencionamento
- 400 - 499: Erros do cliente
- 500 - 599: Erros de servidor
```

## Framework
```
- Biblioteca
- Reune varios projetos provendo uma funcionalidade generica
```

## ExpressJs
```
- Framework para o nodeJs
- Fornece requisitos minimos para servidores web
```