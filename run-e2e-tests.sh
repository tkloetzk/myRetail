#!/usr/bin/env bash

# Start selenium server and trash the verbose error messages from webdriver
(webdriver-manager start &)

# Wait 3 seconds for port 4444 to be listening connections
while ! nc -z localhost 4444; do sleep 3; done

# Start the web app
(npm start &)
# Wait 3 seconds for port 8000 to be listening connections
while ! nc -z 127.0.0.1 8000; do sleep 1; done

#  run protractor
protractor protractor.conf.js

# Cleanup webdriver-manager and http-server processes
