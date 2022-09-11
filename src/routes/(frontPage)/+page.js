export function load() {
  let srcs = [
    "/images/Line-1.png",
    "/images/Line-4.png",
    "/images/Line-5.png",
    "/images/Line-6.png"
  ]
  let src = srcs[Math.floor(Math.random()*srcs.length)];
  return {
    src
  }
}