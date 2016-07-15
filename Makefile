.PHONY: default
default: build

.PHONY:build
build:
	./node_modules/grunt-cli/bin/grunt build

.PHONY: serve
serve:
	./node_modules/grunt-cli/bin/grunt serve

deploy: build
	./sbt.sh s3Upload

.PHONY:init
init:
	npm install
	bundle install

