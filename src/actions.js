import { CHANGE_SEACH_FIELD } from "./constant"
export const setSearchField = (text) => ({
type: 'CHANGE_SEACH_FIELD',
payload: text
})