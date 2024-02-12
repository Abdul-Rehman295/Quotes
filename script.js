function fetchData(){
    fetch('https://dummyjson.com/quotes')
.then(res => res.json())
.then((res)=>{
    for(let i = 0 ; i <= res.quotes.length-1 ; i++){
    let id = res.quotes[i].id;
    let quote = res.quotes[i].quote;
    let author = res.quotes[i].author;
    var clutter = "" ;
    clutter = `<div class="card">
    <div class="card-header d-flex justify-content-between">
     <span># ${id}</span>
     <span><i class="ri-heart-3-fill like"></i></span>
    </div>
    <div class="card-body">
      <h5 class="card-title">Author</h5>
      <p class="card-text pb-3 border-bottom border-secondary">${author}</p>
      <h5 class="card-title">Quote</h5>
      <p class="card-text">${quote}</p>
    </div>
  </div>`; 
  document.querySelector('.main').innerHTML += clutter ;
}
});
}
fetchData();
window.addEventListener('load',()=>{
    document.querySelector('.loader').style.display = 'none';
});