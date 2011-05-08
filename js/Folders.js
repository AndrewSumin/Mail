jsx.Components.buildComponent(
    '{Mail}.Folders',
    function(){
        this.init = function(element, params){
            this.element = element;
            this.folders = jsx.Dom.getElementsBySelector(this.element, '.Mail-Folders-Folder')
                                  .map(
                                      function(folder) {
                                          return {
                                              id: jsx.Components.getParams(folder).id,
                                              _newElement: jsx.Dom.$$(folder, '.Mail-Folders-Folder-New'),
                                              _totalElement: jsx.Dom.$$(folder, '.Mail-Folders-Folder-Total'),
                                              set: function(number, type){
                                                  this['_' + type + 'Element'].innerHTML = number;
                                              },
                                              get: function(type){
                                                  return this['_' + type + 'Element'].innerHTML;
                                              }
                                          }
                                      }
                                  )
            this.dispatch();
            window.setTimeout(this.update.bind(this), 2000);
        };
        this.getFolder = function(id){
            return this.folders.filter(function(folder){return folder.id == id})[0];
        };
        this.dispatch = function(){
            var folder = this.getFolder('income');
            var data = {
                id: folder.id,
                new: folder.get('new'),
                total: folder.get('total')
            };
            jsx.CallBacks.dispatch('Mail-Folders-Status', Mail, data, 1);
        };
        this.update = function(){
            var folder = this.getFolder('income');
            folder.set(20, 'total');
            this.dispatch();
        }
    },
    ['Dom', 'CallBacks']
)
