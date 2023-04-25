import Conversation from "../model/Conversation.js";

export const newConversation = async(request,response) =>{
  try{
         const senderId = request.body.senderId;
         const receiverId = request.body.senderId;
         const exist = await Conversation.findOne({members: { $all:[receiverId, senderId]}})
          if(exist){
            return response.status(200).json('conversation already exist')
          }
          const newConversations = new Conversation({
            members:[receiverId, senderId]
          })
        await  newConversations.save();
          return response.status(200).json('Conversation saved successfully');
        }
  catch(error)
  { return response.status(500).json(error.message)

  }

}

export const getConversation = async(request, response) => {
try{
  const senderId = request.body.senderId;
         const receiverId = request.body.senderId;
let conversation =  await Conversation.findOne({members: {$all: [receiverId, senderId]}})
return response.status(200).json(conversation)
}
catch(error){
  return response.status(500).json(error.message)

}
}




