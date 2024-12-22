const MAX_TEXT_LENGTH = 150; 
const MAX_TITLE_LENGTH = 35;

export const trimText = (text:string) => text.length > MAX_TEXT_LENGTH ? `${text.substring(0, MAX_TEXT_LENGTH - 1)}...` : text
export const trimTitle = (text:string) => text.length > MAX_TITLE_LENGTH ? `${text.substring(0, MAX_TITLE_LENGTH - 1)}...` : text
