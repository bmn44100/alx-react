import Immutable from 'immutable';

function concatElements(page1, page2) {
    const list1 = Immutable.List(page1);
    const list2 = Immutable.List(page2);
    return list1.concat(list2);
}

function mergeElements(page1, page2) {
    const map1 = Immutable.Map(page1);
    const map2 = Immutable.Map(page2);
    return map1.merge(map2);
}

export { concatElements, mergeElements };