// Code generated by protoc-gen-grpc-js-client
// source: client.proto
// DO NOT EDIT!

/*
This is a RSVP based Ajax client for gRPC gateway JSON APIs.
*/

var xhr = require('grpc-xhr');

function clientsList(p, conf) {
    path = '/plow/v1alpha1/clusters/' + p['cluster'] + '/' + p['type'] + '/json'
    delete p['cluster']
    delete p['type']
    return xhr(path, 'GET', conf, p);
}

function clientsDescribe(p, conf) {
    path = '/plow/v1alpha1/clusters/' + p['cluster'] + '/' + p['type'] + '/' + p['name'] + '/json'
    delete p['cluster']
    delete p['type']
    delete p['name']
    return xhr(path, 'GET', conf, p);
}

function clientsCreate(p, conf) {
    path = '/plow/v1alpha1/clusters/' + p['cluster'] + '/' + p['type'] + '/json'
    delete p['cluster']
    delete p['type']
    return xhr(path, 'POST', conf, null, p);
}

function clientsDelete(p, conf) {
    path = '/plow/v1alpha1/clusters/' + p['cluster'] + '/' + p['type'] + '/' + p['name'] + '/json'
    delete p['cluster']
    delete p['type']
    delete p['name']
    return xhr(path, 'DELETE', conf, p);
}

function clientsUpdate(p, conf) {
    path = '/plow/v1alpha1/clusters/' + p['cluster'] + '/' + p['type'] + '/' + p['name'] + '/json'
    delete p['cluster']
    delete p['type']
    delete p['name']
    return xhr(path, 'PUT', conf, null, p);
}

function clientsCopy(p, conf) {
    path = '/plow/v1alpha1/actions/copy/json'
    return xhr(path, 'PUT', conf, null, p);
}

function clientsEditConfigMap(p, conf) {
    path = '/plow/v1alpha1/clusters/' + p['cluster'] + '/namespaces/' + p['namespace'] + '/configmaps/' + p['name'] + '/actions/edit/json'
    delete p['cluster']
    delete p['namespace']
    delete p['name']
    return xhr(path, 'POST', conf, null, p);
}

function clientsEditSecret(p, conf) {
    path = '/plow/v1alpha1/clusters/' + p['cluster'] + '/namespaces/' + p['namespace'] + '/secrets/' + p['name'] + '/actions/edit/json'
    delete p['cluster']
    delete p['namespace']
    delete p['name']
    return xhr(path, 'POST', conf, null, p);
}

function clientsRegisterPersistentVolume(p, conf) {
    path = '/plow/v1alpha1/clusters/' + p['cluster'] + '/persistentvolumes/' + p['name'] + '/actions/register/json'
    delete p['cluster']
    delete p['name']
    return xhr(path, 'POST', conf, null, p);
}

function clientsUnregisterPersistentVolume(p, conf) {
    path = '/plow/v1alpha1/clusters/' + p['cluster'] + '/persistentvolumes/' + p['name'] + '/actions/unregister/json'
    delete p['cluster']
    delete p['name']
    return xhr(path, 'DELETE', conf, p);
}

function clientsRegisterPersistentVolumeClaim(p, conf) {
    path = '/plow/v1alpha1/clusters/' + p['cluster'] + '/persistentvolumeclaims/' + p['name'] + '/actions/register/json'
    delete p['cluster']
    delete p['name']
    return xhr(path, 'POST', conf, null, p);
}

function clientsUnregisterPersistentVolumeClaim(p, conf) {
    path = '/plow/v1alpha1/clusters/' + p['cluster'] + '/persistentvolumeclaims/' + p['name'] + '/actions/unregister/json'
    delete p['cluster']
    delete p['name']
    return xhr(path, 'DELETE', conf, p);
}

function clientsReverseIndex(p, conf) {
    path = '/plow/v1alpha1/clusters/' + p['cluster'] + '/' + p['type'] + '/' + p['name'] + '/' + p['targetType'] + '/reverseindex/json'
    delete p['cluster']
    delete p['type']
    delete p['name']
    delete p['targetType']
    return xhr(path, 'GET', conf, p);
}

function disksList(p, conf) {
    path = '/_appscode/api/cloud/v1alpha1/disks/json'
    return xhr(path, 'GET', conf, p);
}

function disksDescribe(p, conf) {
    path = '/_appscode/api/cloud/v1alpha1/disks/' + p['name'] + '/json'
    delete p['name']
    return xhr(path, 'GET', conf, p);
}

function disksCreate(p, conf) {
    path = '/_appscode/api/cloud/v1alpha1/disks/json'
    return xhr(path, 'POST', conf, null, p);
}

function disksDelete(p, conf) {
    path = '/_appscode/api/cloud/v1alpha1/disks/' + p['uid'] + '/json'
    delete p['uid']
    return xhr(path, 'DELETE', conf, p);
}

var services = {
    clients: {
        list: clientsList,
        describe: clientsDescribe,
        create: clientsCreate,
        delete: clientsDelete,
        update: clientsUpdate,
        copy: clientsCopy,
        editConfigMap: clientsEditConfigMap,
        editSecret: clientsEditSecret,
        registerPersistentVolume: clientsRegisterPersistentVolume,
        unregisterPersistentVolume: clientsUnregisterPersistentVolume,
        registerPersistentVolumeClaim: clientsRegisterPersistentVolumeClaim,
        unregisterPersistentVolumeClaim: clientsUnregisterPersistentVolumeClaim,
        reverseIndex: clientsReverseIndex
    },
    disks: {
        list: disksList,
        describe: disksDescribe,
        create: disksCreate,
        delete: disksDelete
    }
};

module.exports = {appscode: {plow: {v1alpha1: services}}};
