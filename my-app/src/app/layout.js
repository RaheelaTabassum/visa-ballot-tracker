import "./globals.css"
import 'primereact/resources/themes/lara-light-blue/theme.css';   // or any theme you like
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import Navbar from "../components/Navbar";


export default function RootLayout({children}){
  return(
    <html lang="en">
      <body>
        {/* <header>
          🌐 Visa ballot tracker</header> */}
          <Navbar/>
          <main style={{padding:"20px"}}>{children}</main>
          <footer stlye={{textAlign:"center",padding:"10px",marginTop:"50px"}}>
            © 2025 Raheela
          </footer>
          
      </body>

    </html>

  );
}
