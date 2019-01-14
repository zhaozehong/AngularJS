//setTimeout(() => {
//	console.log("Hello after 4 seconds");
//}, 4 * 1000
//);
const func = () => {
  console.log("Hello after 2 seconds");
};
function func1() {
  console.log("Hello after 1 seconds");
}
setTimeout(func1, 1 * 1000, "ZEHONG");