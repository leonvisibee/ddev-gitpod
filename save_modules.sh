#!/bin/bash

drush pml --status=enabled --fields=name --format=string --type=module --no-core > modules
drush pml --status=enabled --fields=name --format=string --type=module --core > modules-core