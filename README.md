# ember-cli-orgchart

Brings [jquery-orgchart](https://github.com/bigeyex/jquery.orgChart) functionality into your Ember app.

## Installation

Ember CLI addons can be installed with `ember install`

  ember install ember-cli-orgchart

## Usage

Out of the box, the bare minimum you need on the template is `data`.

````Handlebars
<div class="sample-orgchart">
    {{ember-orgchart
        data=data
        onClickNode="onClickNodeActionHandler"        
    }}
</div>
````

## Demo

* Clone this repo: `git clone`
* Install packages: `npm install` then `bower install`
* Run `ember serve`
* Visit the sample app at http://localhost:4200.
