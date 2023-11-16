import Immutable from 'immutable';

export default function accessImmutableObject(object, array) {
    const immObj = Immutable.fromJS(object);
    return immObj.getIn(array);
}