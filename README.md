
Clone the repo <br/>
git clone https://github.com/aryanpachori/walletwave.git <br/>
npm install <br/>
Run postgres locally <br/>
docker run  -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres <br/>
Update .env files  <br/>
npx prisma migrate dev <br/>
npx prisma db seed <br/>
Go to apps/user-app , run npm run dev <br/>
Try logging in using phone - 1111111111 , password - alice (See seed.ts)
