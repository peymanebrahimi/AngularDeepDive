Parse.Cloud.define('setUsersAcls', async (request) => {
    let currentUser = request.user;
    currentUser.setACL(new Parse.ACL(currentUser));
    return await currentUser.save(null, { useMasterKey: true });
});