/**React Context is a method to pass props
 * from parent to child component(s), by storing the props
 * in a store(similar in Redux) and using these props from the store by child component(s)
 * without actually passing them manually at each level of the component tree.
 * */
import { createContext } from "react";

const UserDetailContext = createContext();

export default UserDetailContext;
