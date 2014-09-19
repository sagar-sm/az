require.config({
    baseUrl: 'js',
    paths: {
        p5: 'p5'
        //jquery: 'jquery-1.9.0'
    }
});

require(['p5'], function(){
  console.log(ready);
});