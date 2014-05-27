# WordPress.sugar for Espresso
This is a plugin for MacRabbit's [Espresso](http://macrabbit.com/espresso/) code editor with support for [WordPress](http://wordpress.org/).

## Features
This Espresso plugin adds autocompletion and parameter hinting for all public functions in WordPress 3.9.1. Private and deprecated functions are excluded.

![Demo](Demo/functions.gif)

## Usage
Start type the name of the desired function and press `tab` or `enter` to autocomplete the function.

Use `tab` and `shift tab` to select the parameters. Optional parameters are wrapped in square brackets and can easily be deleted if not used.

## Installation
1. Download and extract the zip
2. Rename folder to WordPress.sugar
3. Double click the WordPress.sugar file to install it

## Data source
The WordPress data for this plugin is gathered using the api from [wpseek.com](http://wpseek.com/). The plugin will be updated with every major WordPress update. Current version is using data from WordPress 3.9.1.