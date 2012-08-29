## neo4j.org website

A draft neo4j.org generated using Octopress to manage pages and blog posts.

### Getting started

This is a dev-friendly project for building a website, easily extensible
into a full web application. That also means it is a little un-friendly
for normal people. What's that sound? Oh yeah, opportunity knocking.

So. You'll need these tools installed:

* ruby 1.9.2+
* git 1.7+

**On a Mac?** Cool. You can try the hacked-up `install` script to lead you through installing
the needed command line tools. If you're feeling brave, you can do this:

  curl https://raw.github.com/neo4j-contrib/neo4j-website/master/install | bash

Optionally, install the Mac [github application](http://mac.github.com) and ask it to "Install command line utility".

Either way, you'll need to set up a github account to use git. Follow the [great instructions](https://help.github.com/articles/set-up-git).

Did you install `rvm`? It'll notice a .rvmrc file and use that to download some stuff needed by ruby.
Otherwise you'll need to install bundler, then ask it to install some extra things:

  `gem install bundler`
  `bundle install`

Phew. OK, now you really should be ready. 

### How-to

The project uses a ruby `rakefile` to do perform operations. A `rakefile` is like the
classic `C` `makefile` but for ruby. 

- create a blog post: `rake new_post["title"]`
- create a page: `rake new_page[super-awesome/page.html]`
- preview the site: `rake preview`

Staying up to date, or publishing your changes is done with `git`:
- update local: `git pull origin master`
- commit local changes: `git commit -am 'hooray for updates'`
- share changes: `git push origin master`
- publish to heroku hosting: `git push heroku master`

See [Octopress Blogging](http://octopress.org/docs/blogging/) for details.

## Directories (& some files)

- [.](/tree/master/source) : top-level project directory 
- [./_config.yml](/tree/master/_config.yml) : configuration and site-wide variables
- [./source](/tree/master/source) : raw html, markup, css, images and javascript files. edit these
- [./public](/tree/master/public) : the generated website. **do not edit**


## What is Octopress?

Octopress is [Jekyll](https://github.com/mojombo/jekyll) blogging at its finest.

1. **Octopress sports a clean responsive theme** written in semantic HTML5, focused on readability and friendliness toward mobile devices.
2. **Code blogging is easy and beautiful.** Embed code (with [Solarized](http://ethanschoonover.com/solarized) styling) in your posts from gists, jsFiddle or from your filesystem.
3. **Third party integration is simple** with built-in support for Twitter, Pinboard, Delicious, GitHub Repositories, Disqus Comments and Google Analytics.
4. **It's easy to use.** A collection of rake tasks simplifies development and makes deploying a cinch.
5. **Ships with great plug-ins** some original and others from the Jekyll community &mdash; tested and improved.
