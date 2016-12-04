https://travis-ci.org/rifaavalon/docker-mongo.svg?branch=master
# docker-mongo
Hello! 

##What it does

After you clone this repo you will have a fully functioning [node-express-mongoose] (https://github.com/madhums/node-express-mongoose-demo) application dockerized, load balanced using Nginx, setup on ports 80/443 and linked to a Mongodb. Oh and it scales too! 

##Setup 

Do you have docker installed on your box? If not you might want to install docker [from here](https://docs.docker.com/engine/getstarted/step_one/)

**Pro-tip:** if you are running on Windows (this depends on the windows version btw) don't install toolbox, it will cause all sorts of problems, the engine is much better to install and will use Hyper-V as opposed to Virtual Box. 

**Pro-tip 2:** Also, they(docker) lied about the 2010 Mac thing...my mid 2010 MacBook Pro will not run the Docker Engine. Just install toolbox on the older Mac versions. 

Fork (preferable) or clone this repo 

`git clone https://github.com/rifaavalon/docker-mongo/`

Go to the `nginx/nginx.conf` file and change it to suit your needs. Right now it runs 4 worker processes pointing to 3 nodejs servers on ports 80/443. 

You will also want to go to the `node/README.md` and make the necessary changes (as described) to your env files for S3, Facebook, Google, etc otherwise the app **will not run** 

##Running ALL the things! 

Once you have done all of the necessary changes to the files you just need to run 

`docker compose up` 

If you want to scale things up a bit then run:

`docker compose scale node=5` 








