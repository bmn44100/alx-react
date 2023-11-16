import Immutable from 'immutable';

function getImmutableObject(object) {
    return Immutable.Map(object);
}

export default getImmutableObject;