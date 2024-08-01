#!/bin/bash

# Set the size threshold to 50MB
size_threshold=50M

# Find all files larger than the size threshold and track them with Git LFS
find . -type f -size +$size_threshold -exec git lfs track "{}" \;

# Add the .gitattributes file to Git
git add .gitattributes

