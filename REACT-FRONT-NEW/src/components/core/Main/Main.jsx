import Footer from "./Footer";
import Header from "./Header";
import NewBook from "./NewBook";

const Main = () => {
  return (
        <>
        <body>
        <Header/>
        <NewBook/>
        <div className="container-list">
            <h2 className="container-list-titlebooks">My SCI FI Collection</h2>
            <div id="booksList"></div>
            <h2 className="container-list-titleauthors">My inlove authors</h2>
            <div id="authorsList"></div>      
        </div>   
        <Footer/>       
        </body>
        </>
  )
}

export default Main
