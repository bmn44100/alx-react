import Immutable from 'immutable';

function mergeDeeplyElements(page1, page2) {
    const map1 = Immutable.Map(page1);
    const map2 = Immutable.Map(page2);
    return map1.mergeDeep(map2);
}

export default mergeDeeplyElements;