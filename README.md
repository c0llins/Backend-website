# Leia

Rode `adonis key:generate` para gerar uma APP_KEY para colocar no .env(Vai colocar no .env automaticamente)

Rode o comando `adonis migration:run` para criar as tabelas do banco(MySQL). O banco precisa estar rodando na porta e com o user:password configurado no arquivo .env

Rode o comando `adonis seed` pra criar uma conta de adm para você testar. A conta pode ser encontrada no arquivo database/seeds/0002_AdminSeeder
