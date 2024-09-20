#!/bin/bash

drush -y si --account-name=admin --account-pass=admin -vvv
drush -y en $(cat modules modules-core) -vvv
drush -y theme:install responsive_green -vvv
drush -y config:set system.theme default responsive_green -vvv
drush -y cr -vvv
drush -y migrate:upgrade --legacy-db-url=mysql://root:root@db/d0 -vvv
# drush mim language
# drush mim d7_comment_type
# drush mim d7_node_type
