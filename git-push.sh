#! /bin/bash
#npm run build

git_push(){
	git add .
	git commit -m "$1"
	git push -u origin master
	}

echo "Message to commit the changes made?"
read message

git_push "$message"
cd public
git_push "$message"
