import EnhancedContainer from "./enhancedcontainer";
const root = new EnhancedContainer();
root.nativeRes = {width: 1920, height: 1080};
Object.freeze(root.nativeRes);
export default root;