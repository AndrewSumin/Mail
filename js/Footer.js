jsx.Components.buildComponent(
    '{Mail}.Footer',
    function(){
        this.init = function(element, params){
            this.element = element;
            jsx.CallBacks.add('Mail-Folders-Status', this.refresh.bind(this), Mail);
        };
        this.refresh = function(folder){
            this.element.innerHTML = folder.total;
        };
    },
    ['Dom', 'CallBacks']
);
