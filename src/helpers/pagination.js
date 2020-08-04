const pagination = (elements = [], pageNumber = 1, itemsPerPage = 3) => {
  const numberOfPages = Math.ceil(elements.length / itemsPerPage)
  const lastIndex = pageNumber * itemsPerPage
  const firstIndex = lastIndex - itemsPerPage
  
  return {
    displayList: elements.slice(firstIndex, lastIndex),
    currentPage: pageNumber > numberOfPages ? numberOfPages : pageNumber,
    numberOfPages,
  }
}

const changePage = (pageNumber, callback) => {
  [callback].call(null, pageNumber)
}

export {
  pagination as default,
  changePage,
}
