# React Web App
Just playing with react trying to create a WebApp. The CSS is a mess. I am expecting to be done with the front end in a couple of weeks and we will get to do some cool back end. I haven't decide on what tech I am going to be using, but will write here once I make my mind. 

# Test
To test this app execute the following commands. 
`npm install`
`npm start`

You will probably get some errors because I haven't uploaded the pictures. You will need to add your own pictures. 

# Docker
I am hosting this web on an EC2 using amazon linux. I'm using this steps, build the image, push into docker hub, then pull it from the EC2. Commands:

### On your local machine:

docker build -t <docker-username>/image-name .
docker push <docker-username>/image-name

### On your server

docker pull <docker-username>/image-name
docker run -d -p 3000:80 --name <container-name> <docker-username>