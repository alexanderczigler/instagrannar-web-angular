docker build -t ingr-web .
docker tag -f ingr-web tutum.co/alexanderczigler/ingr-web
docker push tutum.co/alexanderczigler/ingr-web