 export interface IMessage {
    _id: string | number
    text: string
    createdAt: Date | number
    user:object
    image?: string
    video?: string
    audio?: string
    system?: boolean
    sent?: boolean
    received?: boolean
    pending?: boolean
    quickReplies?: object
  };