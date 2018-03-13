# GraphQL Voyager

[GraphQL Voyager](https://github.com/APIs-guru/graphql-voyager) containerized

## Usage

### Container

run [docker image](https://hub.docker.com/r/pyar6329/graphql-voyager/)

```bash
$ docker run --rm -p "9090:9090" -e "GRAPHQL_SCHEMA_URL=http://your-schema.json" pyar6329/graphql-voyager:latest
```

open [http://localhost:9090](http://localhost:9090)

### local Node.js

```bash
$ git clone git@github.com:pyar6329/graphql-voyager-docker.git
$ cd graphql-voyager-docker
$ npm install
$ export GRAPHQL_SCHEMA_URL="http://your-schema.json"
$ npm run start
```

open [http://localhost:9090](http://localhost:9090)
