# Readme for aw-massage

## Node dependency setup (for Semantic UI)
Install node.js and node package manager globally
then run
```
$ npm install
```

## Sass setup
Available at: http://sass-lang.com/install

### Mac

Install Ruby, sass' dependency (pre-installed on mac), then run
```
$ [sudo] gem install sass
```

then use 
```
$ sass --watch style.scss:style.css //input.scss -> output.css
```
in the project's directory to get sass to re-compile on file change

## Semantic UI setup

### Mac

Install gulp command line tools, on Mac (if homebrew is installed) - 
```
$ brew install gulp
```
then run
```
$ gulp watch
```
in the project's 'semantic' directory to recompile on file change

## SUI gulp build fix

If css fails to build, comment out `compressedStream = stream.pipe(clone());` in semantic/tasks/build/css.js

## Useful stuff to note about Semantic UI

Semantic applies styles in this order:
Definitions -> Themes -> Site

site/*/*.variables files are for overriding variables in. To find what can be overridden, check the less files in 'definitions/*'. Anything with an '@' symbol in front of it can be overridden using the folowing syntax:

@exampleProperty: new_value;
@exampleProperty: @newValue; //can be defined in site.variables

For more examples of this, see the .variables/.overrides files of other themes.

site/*/*.overrides files are for changes that can't be made by a simple variable change. They are often used to override classes.

## Semantic UI + Git
Please add any modified semantic UI files to the .gitignore with a '!'

## Please note
Site images are not kept in this repo.