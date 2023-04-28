import Header from './Header'

const Layout = ({ title, children, ...rest}) => {
    return (
      <div>        
        <main>
          <h2>{title}</h2>
          {children}
        </main>
        <Header {...rest} />
        <footer>@ 2023 Nodepop</footer>
      </div>
    );
  };
  
  export default Layout; 

{ /*<li key={advert.id}>{advert.name} {advert.price}</li> */ }
