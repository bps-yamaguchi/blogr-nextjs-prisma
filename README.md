# Fullstack Authentication Example with Next.js and NextAuth.js

https://vercel.com/guides/nextjs-prisma-postgres を写経していじったもの  

2021/1時点でprismaの`findOne`apiの廃止にnext-authが追いついてないので  
prismaを2.1４以下に下げるかnext-authのカナリア版を入れる必要がある`npm i next-auth@canary`  

next-authのgithub providerは現状サインアップ時にemail取得のapi叩いてくれないっぽいので  
emailをprivateにしてるアカウント向けにcallbackで取得する必要あり   
このリポジトリのアプリはそもそもgithubで認証してません