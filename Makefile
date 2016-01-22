.PHONY: default
default: build

.PHONY:build
build:
	grunt build

.PHONY:deploy
deploy:
	./sbt.sh s3Upload

.PHONY:init
init:
	npm install
	bundle install

