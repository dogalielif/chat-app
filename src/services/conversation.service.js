import query from '../api/query';

export const conversationService = {
    getUsers
};

function pullMessagesAfterSpecifiedMessage(conversationId, lastMessageId) {
    return query.get('/api/conversation/:conversationId/new/:lastMessageId');
 }
 
 function getLimitedMessages(conversationId) {
    return query.get('/api/conversation/:conversationId/message/limited');
 }

 function getLastSeenInfo(conversationId, userId) {
    return query.get('/api/conversation/:conversationId/lastseen/:userId');
 }

 function getconversationDetails(id) {
    return query.get('/api/conversation/:id');
 }

 function getAllConversations(id) {
    return query.get('/api/conversation/user/:id');
 }

 function sendMessage(conversationId, data) {
    return query.post('/api/conversation/:conversationid/message/send');
 }

 function startConversation(data) {
    return query.post('/api/conversation/personal');
 }

 function createConversationGroup(data) {
    return query.post('/conversation/group');
 }

 function startGroupConversation(conversationId, userId) {
    return query.put('/api/conversation/:conversationId/seen/:userId');
 }