#!/bin/sh

function updateMarkdown {

    markdownFile=./_projects/$1.md
    if [ -f $markdownFile ]; then
        echo
    else
        echo
        echo "Error: $markdownFile does not exist"
        echo
        exit
    fi

    sed '/images:/,$d' $markdownFile >$markdownFile.new
    
    echo images: >>$markdownFile.new
    
    ls -d -1 imgs/$1/* >images.txt
    awk '// {print "  - url: /" $0}' images.txt >>$markdownFile.new

    echo --- >>$markdownFile.new
    
    mv $markdownFile.new $markdownFile
    
    rm images.txt
}

if [ ${#@} == 0 ]; then
    echo
    echo "Usage: $0 <project-name>"
    echo "e.g. ./updateProject.sh art-direction"
    echo
    exit
fi

updateMarkdown $1
