var appConsts = {
    TIME_GROUPS: require('./constants/timeGroups.json'),
    FUN_FACTS: require('./constants/funFacts.json'),
    VISIT_GROUPS: require('./constants/visitGroups.json')
};

for(var key in appConsts) {
   if( appConsts.hasOwnProperty(key) ){
       var value = appConsts[key];
       angular.module('app').constant(key, value);
   }
}
