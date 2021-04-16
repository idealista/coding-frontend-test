var Counter = {
    count: function() {
        for(var i = 0; i < 7; i++) {
            console.log('count1', i);
            setTimeout(function() {
                console.log('count2', i);
            }, 1000);
        }
    },
    getCount: function() {
        return this.count;
    }
};

var funcOA = Counter.getCount();
funcOA();
