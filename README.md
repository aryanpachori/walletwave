
Clone the repo
git clone https://github.com/aryanpachori/walletwave.git
npm install
Run postgres locally
docker run  -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
Update .env files 
npx prisma migrate dev
npx prisma db seed
Go to apps/user-app , run npm run dev
Try logging in using phone - 1111111111 , password - alice (See seed.ts)