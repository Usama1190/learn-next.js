This is a starter template for [Learn Next.js](https://nextjs.org/learn).


...this will continue from the next-start

In this project I covered these topics          [sumup 19 Oct 24]

pre-rendering and data fetching

in nextjs there are two forms of pre-rendering
static side generation
server side rendering

there are two forms of statuc side generation
static side generation with data 
static side generation without data

static side generation with data which will be use the next reserved function getStaticProps()

first we will create a directory called posts, and inside of this two markdown files named pre-rendering.md and another is ssg-ssr.md
then we will create another directory called lib, and inside of this

create a file called posts.js, inside of posts.js file we will create a function getSortedPostsData() which is get data from the file system so import fs and gray-matter for .md files can reads

import getSortedPostsData() function in the index.js / home file and use a reserved function called getStaticProps(), inside of this function we will call the getSortedPostsData() and return the props and use it to

the home page and a props.