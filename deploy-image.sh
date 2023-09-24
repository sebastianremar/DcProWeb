# Enter your data
docker_username="enter your username"
server_ip="enter your server ip"
server_username="enter your server username"
ssh_key_path="path to key to ssh to your server"
docker_image_name="docker image name"

# Build image
docker login
docker build -t "$docker_username/$docker_image_name" .
docker push "$docker_username/$docker_image_name"

# SSH to the server and run Docker commands
ssh -i "$ssh_key_path" "$server_username@$server_ip" << 'ENDSSH'
    # Define variables in ssh session
    docker_username="enter your username"
    docker_image_name="docker image name"
    random_number=$RANDOM

    # Commands to run on your server
    sudo docker pull $docker_username/$docker_image_name

    # Let's try to stop the running container
    sudo docker container stop $(sudo docker container ls -q) || true
    sudo docker container rm $(sudo docker container ls -aq) || true

    # Run container w/ updated image
    sudo docker run -d -p 3000:80 --name "$docker_image_name-${random_number}" $docker_username/$docker_image_name
ENDSSH

