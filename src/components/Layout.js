import React from 'react'
import NavBar from './NavBar'
///un fichier pour creer les sections qui ne changes pas a travers les pages et structurer les pages dynamiques
export default function Layout({children}) {
  return (
    <div>  
        <NavBar/>
        <div className="content">
            {children}
        </div>
    <footer>
        Copyrights@Abdelhak-Razi-2022
    </footer>
    </div>
  
  )
}
