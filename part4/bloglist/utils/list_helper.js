const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  const reducer = (accumulator, currentValue) => {
    return accumulator + currentValue.likes
  }

  return blogs ? 
    blogs.reduce(reducer, 0) :
    0
}

const favouriteBlog = (blogs) => {
  const reducer = (accumulator, currentValue) => {
    return accumulator.likes > currentValue.likes ? accumulator :currentValue
  }

  return blogs.reduce(reducer, 0)
}

module.exports = {
  dummy, totalLikes, favouriteBlog
}