if [ -z "$1" ]
  then
    echo "No argument supplied"
  else
    cd backend
    npm install &&
    NODE_ENV=$1 npm run dev
fi