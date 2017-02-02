# Keystoke Assignment

### Created by Taylor King

Deployed link: [Click me!](https://keystoke.herokuapp.com "App")

## Approaching the challenge

There were two main things I wanted to to do before I started tackling this assignment. I have never used React or MongoDB prior to this, so I wanted to familiarize myself with these two things. I bought a book on React and I started to do some of the little practice assignments that they had given in the book to help you gain some of the fundamentals.

I kind of realized towards the end of the project that the book might have been a little outdated. I mainly wrote with the React ES5 structure when it comes to creating a new class. I researched some more on ES6 and I really love that pattern, and wish I would have started that way cause it reminds me a lot of swift and I like how clean it looks.

Anyways, after doing some research on React, I moved on to MongoDB. For that I just wanted to read the MongoDB docs, and get a feel for how to establish a database. I also researched on the selling points of MongoDB and what it is good at. I loved how it built schemas, I found it very intuitive and somewhat easy to grip in a pretty fast manner.

I started off using MongoDB on my machine and going to a localhost storage, but when it came to deployment I realized I needed to change that up. It seemed like Heroku was going to charge for the Compose MongoDB add-on, so I changed to mLab. I thought that was going to be a big hurdle, but it turned out to not be that bad.

## What I learned

I really had to think and break down each individual element on the page into components. I think I could have accomplished this better, and I realize now the main goal of components is very similar to the Single Responsibility Principle. I think some of my components could be broken up even into smaller chunks to help with readability and what I'm achieving. An instance where this came into play was making the edit form for the User Dashboard. I created a component called EditableUserDashboard that utilized a smaller component of UserForm or just User. So I like breaking it down like that, and it started clicking more and more towards the end. I appreciated that learning experience though.

Even though I didn't utilize it like I wish I had, this project had got me reading a lot into Flux/Redux. React is very one way with their data, and has a whole new design pattern outside of what I was familiar with like MVC. I want to continue to read more into this. Lots of new lingo and words used to describe this pattern, but again ... it started clicking more and more towards the end of this project.

I think after reading a lot more about Flux/Redux I would have benefited from storing all the applications data (state) in a Store. I had kept the user in localStorage, and it is by no means secure, but I have some Auth flow in there.

## Final Thoughts

Looking over it, I am happy with what I've accomplished, especially with tackling many new things. It's hard to kind of put this down because I keep researching and reading more about React and MongoDB and this and that ... there is room for refactoring, and making this flow cleaner and more to design, but I love that this field is always changing and I'm eager to learn more and more.

## Instructions if you download or clone

* npm install
* npm start
