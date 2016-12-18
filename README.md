# ember-cli-orgchart

Brings [jquery-orgchart](https://github.com/bigeyex/jquery.orgChart) functionality into your Ember app.

## Installation

    ember install ember-cli-orgchart

## Usage

```Handlebars
<div class="sample-orgchart">
    {{ember-orgchart
        data=chartData
        onClickNode="onClickNodeActionHandler"        
    }}
</div>
```

```js
chartData: [
    {id: 1, name: 'Acme Organization', parent: 0},
    {id: 2, name: 'CEO Office', parent: 1},
    {id: 3, name: 'Division 1', parent: 1},
    {id: 4, name: 'Division 2', parent: 1},
    {id: 6, name: 'Division 3', parent: 1},
    {id: 7, name: 'Division 4', parent: 1},
    {id: 8, name: 'Division 5', parent: 1},
    {id: 5, name: 'Sub Division', parent: 3}
]
```
    
## Demo

* Clone this repo: `git clone`
* Install packages: `npm install` then `bower install`
* Run `ember serve`
* Visit the sample app at http://localhost:4200.
