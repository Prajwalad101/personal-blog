---
title: 'Beginners Guide to Git and GitHub'
date: '2022-08-09'
image: 'heading.png'
excerpt: 'Learn the basics of Github and how to use it in your projects'
isFeatured: true
readTime: 5
---

# Introduction

Even if you have never used git, you probably have heard it a thousand times before. A main reason for that being, pretty much every developer out there uses for development.
Git is the most popular version control program out there and if you want to develop applications and code great software, you have to know how to use it.

# What is Git?

Git is an open source version control program which means it is used to track your code when developing applications. When writing code, a lot of changes can happen very quickly. Therefore, there needs to be a way that multiple developers working on a same codebase can say in sync and avoid any conflicts. This is exactly what Git and GitHub solves.

# Using Git

So, in order to use git, you have to install it first. This step is fairly simple so I am not going to explain it. Instead, here is a [link](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) where you can get instructions to install git.

After git is installed into your local system, you should now create a remote repository. There are several options for this, but the most popular one is GitHub.

##

_But first you should understand the differences between Git and GitHub. Git is a version control program that tracks your code in your own local system, whereas github stores your code into a local repository. It is also important to note that you don't need github to use git whereas you need git to use github._

## Step 1: Create a local repository

In order to use git, you need it installed into your system. For that, you can follow [this](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) installation guide.

##

To create a local repository, first create a new folder where you want to store your application. Open the application on any text editor. I am going to be using VS Code as it is easy to use.

Now, the folder has to be initialized. To do that, inside the terminal enter the command `git init`

![initialize git repository](initialize-repo.png)

##

This initializes and empty repository and creates a hidden folder called .git in the workspace.

![git hidden folder](git.jpg)

This is where all the magic of github happens. Luckily for us, we don't have to touch that folder. _It is important to note that if that folder is deleted, all the local commits you have saved on your machine will be deleted._

##

Now, that the project has been initialized, it is time to perform some git commands. Before you learn about those commands, we need to make some changes to the html file, add those changes to the staging area, commit those changes and finally push the changes to github. If you don't understand what any of these means, don't worry. I will explain what each step means.

## Areas in Git

In git, there are three areas where the code lives. First, there is the working tree. This is where the code lives. This is just your local directory where the files are not tracked by git. In this tree you can add, delete or modify your code. Here, the index file that we created is in the working directory.

##

Then, there is the staging area. The files in this area is being tracked by github and any changes made to the files in this area is detected by github.

##

After that, there is the local repository. This area contains the snapshot of the files you took. For example, lets assume you made some changes to the index file. To let git know about the changes, we can add it to the staging area. Now, to create a checkpoint of the code and create a copy of the changes that we made in the code i.e we create a new file entirely, we commit those changes and git will add the entire file safely to the local repository.

##

![git areas](git-areas.png)

## Step 2: Staging Area

Now, let's add our file onto the staging area. If we check the status of our directory using the command `git status s`, we can see the index file has not been tracked by github. If the file name is in red, it is not tracked. To track it, we need to move it onto the staging area.

![untracked-files](untracked-files.png)

We can move index.html to staging area by issuing the following command

`git add index.html`

Now, if we were to check the status again, it shows that the file has been added

![staging area](staging-area.png)

## Step 3: Commit Changes

Once, the file is on the staging area, it is time to commit the changes. Each commit requires a message describing the change that occurred. In our case, we added a html file entirely. To commit the changes, issue the following command into the terminal

`git commit -m "add new html file"`

![commit changes](commit-changes.png)

We have now successfully, commited our changes to git.

## Step 4: Remote Repository

Our file is now successfully saved. If we to ever mess our code in current directory, we can easily revert the changes. But, our commits are only saved on our local machine. If the machine were to ever break down or not work for some reason, we can lose all the progress. Therefore, it is most safe to save those changes on a remote location.

##

To push our code to a remote repository, we have several options. Since, GitHub is the most popular and recommended choice by many people, we will be using that for this tutorial.

Let's first create a remote repository on Github. Login to Github using your account. Then, you will be taken to the home page. On the top right section of the page, click on create remote repository opton.

![create new repository](new-repository.png)

Enter your repository name, give it a description and click on create repository. After that, you should be taken to a new page where you will be given a https link to connect to the repository. Copy that link

##

The link should look like this

`https://github.com/Prajwalad101/Demo.git`

##

In the terminal section of the directory, add the following commands.

```js
git branch -M main
git remote add origin https://github.com/Prajwalad101/Demo.git
git push -u origin main
```

The first command `git branch -M main` changes the main branch's name to main. By default it should be master, but the main is the standard name for the repository

##

The second command `git remote add origin https://github.com/Prajwalad101/Demo.git` connects your local repository to your remote repository. Origin is used to recognize the remote repository.

##

The third command `git push -u origin main` pushes the commited code into the main branch of your remote repository

##

Once, that has been successfull you should see the changed file on your remote repository.

# Conclusion

This tutorial covered only the basics of git and github. There are a lot of commands and actions uncovered in this article, but these commands will help you with your basic understandings of git. If you have followed up to this point congratulations, you now have an understanding of how to integrate git in your projects
