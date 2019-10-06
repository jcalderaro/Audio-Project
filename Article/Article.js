// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

/* START HERE : */

class Article {
  constructor(domElement) {
    this.domElement = domElement; // ".article"
    // assign this.domElement to the passed in domElement
    this.expandButton = this.domElement.querySelector('.expandButton');
    // create a reference to the ".expandButton" class. 
    this.expandButton.innerText = 'expand';
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.addEventListener('click', () => { this.expandArticle() }); 
    // Set a click handler on the expandButton reference, calling the expandArticle method.   
  }
  
  expandArticle() { // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle('article-open');
  }
}

let articles = document.querySelectorAll('.article').forEach( article => {
  new Article(article);
    // Select all classes named ".article" and assign that value to the articles variable. 
    // Now chain .forEach() on to the articles variable to iterate over the articles NodeList.
    // Create a new instance of Article by passing in each article as a parameter to the Article class.
});